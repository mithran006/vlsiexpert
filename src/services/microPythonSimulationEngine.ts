/**
 * Silicon Arena - MicroPython (RP2040 Raspberry Pi Pico) Hardware Simulation Engine
 * Parses MicroPython code and simulates Wokwi-style peripherals:
 * - Raspberry Pi Pico (RP2040) Onboard LED (GP25), 30 GPIOs
 * - SSD1306 128x64 I2C OLED Display (0x3C)
 * - 16-LED NeoPixel (WS2812B) Addressable RGB Ring
 * - DHT22 Digital Temperature & Humidity Sensor
 * - 16-Bit ADC Potentiometer (GP26 / ADC0)
 * - Momentary Pushbutton with Interrupts (GP14)
 * - Micro Servo / PWM Motor (GP15)
 */

import { Problem } from '../types';

export type MicroPythonPeripheralType =
  | 'led'
  | 'oled'
  | 'neopixel'
  | 'dht22'
  | 'potentiometer'
  | 'button'
  | 'servo';

export interface MicroPythonPinState {
  pin: number;
  mode: 'IN' | 'OUT' | 'ALT_PWM' | 'ALT_I2C' | 'ALT_SPI';
  value: 0 | 1;
  pull?: 'UP' | 'DOWN' | 'NONE';
  pwmDutyU16?: number; // 0 - 65535
  pwmFreq?: number; // Hz
}

export interface NeoPixelColor {
  r: number;
  g: number;
  b: number;
}

export interface MicroPythonSimulationState {
  boardName: string;
  mcu: string;
  clockMhz: number;
  peripheralType: MicroPythonPeripheralType;
  pins: Record<number, MicroPythonPinState>;
  replOutput: string[];
  // Peripheral specifics
  onboardLed: {
    isOn: boolean;
    pin: number;
    brightness: number; // 0.0 to 1.0
  };
  oledState: {
    lines: string[];
    inverted: boolean;
    contrast: number;
    address: string;
    width: number;
    height: number;
  };
  neoPixelState: {
    pin: number;
    numPixels: number;
    pixels: NeoPixelColor[];
    brightness: number;
  };
  dht22State: {
    pin: number;
    temperatureC: number;
    humidityPct: number;
  };
  potentiometerState: {
    pin: number;
    adcChannel: number;
    rawU16: number; // 0 - 65535
    voltage: number; // 0.0 - 3.3V
  };
  buttonState: {
    pin: number;
    isPressed: boolean;
    pull: 'UP' | 'DOWN';
  };
  servoState: {
    pin: number;
    angleDeg: number;
    dutyNs: number;
  };
}

export interface MicroPythonUserStimulus {
  buttonPressed?: boolean;
  potentiometerU16?: number; // 0 - 65535
  temperatureC?: number; // -40 to 80
  humidityPct?: number; // 0 to 100
}

export function detectMicroPythonPeripheral(problem: Problem, code: string): MicroPythonPeripheralType {
  const combined = `${problem.title} ${problem.description} ${problem.id} ${code}`.toLowerCase();

  if (combined.includes('neopixel') || combined.includes('ws2812') || combined.includes('rgb ring') || combined.includes('rainbow')) {
    return 'neopixel';
  }
  if (combined.includes('ssd1306') || combined.includes('oled') || combined.includes('framebuf') || combined.includes('128x64') || combined.includes('display')) {
    return 'oled';
  }
  if (combined.includes('dht') || combined.includes('temperature') || combined.includes('humidity') || combined.includes('climate')) {
    return 'dht22';
  }
  if (combined.includes('adc') || combined.includes('potentiometer') || combined.includes('read_u16') || combined.includes('analog')) {
    return 'potentiometer';
  }
  if (combined.includes('button') || combined.includes('switch') || combined.includes('irq') || combined.includes('interrupt')) {
    return 'button';
  }
  if (combined.includes('servo') || combined.includes('motor') || combined.includes('pwm') && combined.includes('angle')) {
    return 'servo';
  }

  return 'led';
}

export function initializePicoPins(): Record<number, MicroPythonPinState> {
  const pins: Record<number, MicroPythonPinState> = {};
  for (let i = 0; i <= 28; i++) {
    pins[i] = {
      pin: i,
      mode: 'IN',
      value: 0,
      pull: 'NONE'
    };
  }
  // GP25 onboard LED default
  pins[25] = {
    pin: 25,
    mode: 'OUT',
    value: 0,
    pull: 'NONE'
  };
  return pins;
}

export function simulateMicroPythonCode(
  problem: Problem,
  code: string,
  stimulus: MicroPythonUserStimulus = {}
): MicroPythonSimulationState {
  const peripheralType = detectMicroPythonPeripheral(problem, code);
  const pins = initializePicoPins();
  const replOutput: string[] = [
    'MicroPython v1.22.0 on 2024-02-14; Raspberry Pi Pico with RP2040',
    'Type "help()" for more information.',
    '>>> from machine import Pin, ADC, PWM, I2C',
    `>>> # Running: ${problem.title}`
  ];

  // Clean comments for parsing
  const cleanCode = code
    .replace(/#.*/g, '')
    .replace(/'''[\s\S]*?'''/g, '')
    .replace(/"""[\s\S]*?"""/g, '');

  // 1. Check Pin mode definitions: Pin(num, Pin.OUT / Pin.IN, Pin.PULL_UP)
  const pinDefRegex = /Pin\s*\(\s*([0-9]+)\s*(?:,\s*(?:Pin\.)?([A-Za-z0-9_]+))?(?:,\s*(?:Pin\.)?([A-Za-z0-9_]+))?\s*\)/g;
  let match;
  while ((match = pinDefRegex.exec(cleanCode)) !== null) {
    const pinNum = parseInt(match[1], 10);
    const modeStr = (match[2] || 'IN').toUpperCase();
    const pullStr = (match[3] || '').toUpperCase();
    if (pins[pinNum]) {
      pins[pinNum].mode = modeStr.includes('OUT') ? 'OUT' : 'IN';
      pins[pinNum].pull = pullStr.includes('UP') ? 'UP' : pullStr.includes('DOWN') ? 'DOWN' : 'NONE';
      if (pins[pinNum].pull === 'UP') pins[pinNum].value = 1;
    }
  }

  // 2. Check Pin writes: pin.value(1), pin.on(), pin.high(), pin.toggle()
  let hasLedOn = cleanCode.includes('.value(1)') || cleanCode.includes('.on()') || cleanCode.includes('.high()') || cleanCode.includes('toggle()');
  if (cleanCode.includes('25') && hasLedOn) {
    pins[25].value = 1;
  }

  // 3. Extract print statements for REPL output
  const printRegex = /print\s*\(\s*([^)\n]+)\s*\)/g;
  let printMatch;
  while ((printMatch = printRegex.exec(cleanCode)) !== null) {
    let content = printMatch[1].trim();
    if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
      content = content.slice(1, -1);
    }
    replOutput.push(`>>> ${content}`);
  }

  // Onboard LED State
  const ledIsOn = pins[25].value === 1 || (hasLedOn && peripheralType === 'led') || (!cleanCode.includes('.value(0)') && cleanCode.includes('Pin(25'));
  const onboardLed = {
    isOn: ledIsOn,
    pin: 25,
    brightness: ledIsOn ? 1.0 : 0.0
  };

  // Button State (GP14)
  const isButtonPressed = stimulus.buttonPressed ?? false;
  const buttonState = {
    pin: 14,
    isPressed: isButtonPressed,
    pull: (cleanCode.includes('PULL_UP') ? 'UP' : 'DOWN') as 'UP' | 'DOWN'
  };
  pins[14] = {
    pin: 14,
    mode: 'IN',
    value: isButtonPressed ? (buttonState.pull === 'UP' ? 0 : 1) : (buttonState.pull === 'UP' ? 1 : 0),
    pull: buttonState.pull
  };
  if (peripheralType === 'button') {
    replOutput.push(`[GP14] Button State: ${isButtonPressed ? 'PRESSED (LOGIC 1)' : 'RELEASED (LOGIC 0)'}`);
    if (isButtonPressed) {
      onboardLed.isOn = true;
      onboardLed.brightness = 1.0;
      pins[25].value = 1;
    }
  }

  // Potentiometer (GP26 / ADC0)
  const potVal = stimulus.potentiometerU16 ?? (peripheralType === 'potentiometer' ? 42500 : 32768);
  const potVolt = Number(((potVal / 65535) * 3.3).toFixed(2));
  const potentiometerState = {
    pin: 26,
    adcChannel: 0,
    rawU16: potVal,
    voltage: potVolt
  };
  if (peripheralType === 'potentiometer') {
    replOutput.push(`[ADC0 GP26] read_u16(): ${potVal} (Voltage: ${potVolt}V, ${Math.round((potVal / 65535) * 100)}%)`);
  }

  // DHT22 State (GP16)
  const tempC = stimulus.temperatureC ?? (peripheralType === 'dht22' ? 24.5 : 22.0);
  const humPct = stimulus.humidityPct ?? (peripheralType === 'dht22' ? 58.0 : 45.0);
  const dht22State = {
    pin: 16,
    temperatureC: tempC,
    humidityPct: humPct
  };
  if (peripheralType === 'dht22') {
    replOutput.push(`[DHT22 GP16] Temp: ${tempC.toFixed(1)}°C | Humidity: ${humPct.toFixed(1)}% RH`);
  }

  // SSD1306 OLED Display (128x64) via I2C0
  const oledLines: string[] = ['Pico MicroPython', problem.title.slice(0, 16)];
  const oledTextMatches = Array.from(cleanCode.matchAll(/oled\s*\.\s*text\s*\(\s*([^,]+)/gi));
  if (oledTextMatches.length > 0) {
    const customLines = oledTextMatches.map(m => m[1].replace(/['"]/g, '').trim()).filter(Boolean);
    if (customLines.length > 0) {
      oledLines[0] = customLines[0] || 'Pico MicroPython';
      oledLines[1] = customLines[1] || problem.title.slice(0, 16);
      if (customLines[2]) oledLines.push(customLines[2]);
    }
  } else if (peripheralType === 'oled') {
    oledLines.push(`ADC: ${potVolt}V`);
    oledLines.push(`Status: Active`);
  }
  const oledState = {
    lines: oledLines.slice(0, 5),
    inverted: cleanCode.includes('invert(1)'),
    contrast: 255,
    address: '0x3C',
    width: 128,
    height: 64
  };
  if (peripheralType === 'oled') {
    replOutput.push('[I2C0 @ 400kHz] SSD1306 display initialized at address 0x3C (128x64 Monochrome Framebuffer)');
  }

  // NeoPixel 16-LED RGB Ring (GP18)
  const numPixels = 16;
  const pixels: NeoPixelColor[] = [];
  const hasRainbow = cleanCode.includes('rainbow') || cleanCode.includes('wheel') || cleanCode.includes('hsv');
  
  for (let i = 0; i < numPixels; i++) {
    if (hasRainbow || peripheralType === 'neopixel') {
      const hue = (i / numPixels) * 360;
      // Convert simple HSV to RGB for vibrant Wokwi look
      const c = 255;
      const x = Math.round(c * (1 - Math.abs(((hue / 60) % 2) - 1)));
      let r = 0, g = 0, b = 0;
      if (hue < 60) { r = c; g = x; b = 0; }
      else if (hue < 120) { r = x; g = c; b = 0; }
      else if (hue < 180) { r = 0; g = c; b = x; }
      else if (hue < 240) { r = 0; g = x; b = c; }
      else if (hue < 300) { r = x; g = 0; b = c; }
      else { r = c; g = 0; b = x; }
      pixels.push({ r, g, b });
    } else {
      pixels.push({ r: 0, g: 0, b: 0 });
    }
  }

  const neoPixelState = {
    pin: 18,
    numPixels,
    pixels,
    brightness: 0.8
  };
  if (peripheralType === 'neopixel') {
    replOutput.push('[NEOPIXEL WS2812B] 16 RGB LEDs initialized on GP18. Frame written.');
  }

  // Servo State (GP15 PWM)
  let servoAngle = 90;
  const angleMatch = cleanCode.match(/duty_ns\s*\(\s*([0-9]+)\s*\)/) || cleanCode.match(/angle\s*=\s*([0-9]+)/);
  if (angleMatch) {
    const val = parseInt(angleMatch[1], 10);
    if (val > 180) {
      // It's nanoseconds: 500_000 to 2_500_000 ns
      servoAngle = Math.round(((val - 500000) / 2000000) * 180);
    } else {
      servoAngle = val;
    }
  }
  const servoState = {
    pin: 15,
    angleDeg: Math.max(0, Math.min(180, servoAngle)),
    dutyNs: Math.round(500000 + (servoAngle / 180) * 2000000)
  };

  return {
    boardName: 'Raspberry Pi Pico (RP2040)',
    mcu: 'Dual-core ARM Cortex-M0+ @ 133MHz',
    clockMhz: 133.0,
    peripheralType,
    pins,
    replOutput,
    onboardLed,
    oledState,
    neoPixelState,
    dht22State,
    potentiometerState,
    buttonState,
    servoState
  };
}
