/**
 * Silicon Arena - Embedded Arduino Hardware Simulation Engine
 * Parses Arduino C++ sketches, models ATmega328P GPIO/ADC/PWM registers,
 * and simulates real-time hardware component reactions (LEDs, Pushbutton, Potentiometer,
 * Ultrasonic HC-SR04, Micro Servo SG90, I2C 1602 LCD, Traffic Light, Buzzer).
 */

import { Problem } from '../types';

export interface PinState {
  mode: 'INPUT' | 'OUTPUT' | 'INPUT_PULLUP';
  value: 'HIGH' | 'LOW';
  pwmValue?: number; // 0 - 255
  analogValue?: number; // 0 - 1023 (for ADC pins A0-A5)
  voltage: number; // 0.0 - 5.0V
}

export type ArduinoPeripheralType =
  | 'led'
  | 'button'
  | 'potentiometer'
  | 'ultrasonic'
  | 'servo'
  | 'lcd'
  | 'traffic_light'
  | 'buzzer'
  | 'stepper';

export interface ArduinoSimulationState {
  boardName: string;
  clockMhz: number;
  peripheralType: ArduinoPeripheralType;
  digitalPins: Record<string, PinState>;
  analogPins: Record<string, PinState>;
  serialOutput: string[];
  // Peripheral-specific states
  ledState: {
    isOn: boolean;
    brightness: number; // 0.0 to 1.0
    color: 'red' | 'green' | 'blue' | 'amber';
    pin: number;
    blinkHz?: number;
  };
  buttonState: {
    pin: number;
    isPressed: boolean;
    pullUp: boolean;
  };
  potentiometerState: {
    pin: string;
    rawAdc: number; // 0 to 1023
    voltage: number; // 0.0 to 5.0
    rotationDeg: number; // 0 to 270
  };
  ultrasonicState: {
    trigPin: number;
    echoPin: number;
    distanceCm: number; // 2 to 400
    pulseTimeUs: number;
  };
  servoState: {
    pin: number;
    angleDeg: number; // 0 to 180
    pulseWidthUs: number; // 1000 to 2000
  };
  lcdState: {
    line1: string;
    line2: string;
    backlightOn: boolean;
    address: string;
  };
  trafficLightState: {
    red: boolean;
    yellow: boolean;
    green: boolean;
    currentActive: 'red' | 'yellow' | 'green' | 'all_off';
  };
  buzzerState: {
    pin: number;
    isActive: boolean;
    frequencyHz: number;
  };
}

export function detectArduinoPeripheral(problem: Problem, code: string): ArduinoPeripheralType {
  const combined = `${problem.title} ${problem.description} ${problem.id} ${code}`.toLowerCase();

  if (combined.includes('ultrasonic') || combined.includes('hc-sr04') || combined.includes('distance') || combined.includes('sonar')) {
    return 'ultrasonic';
  }
  if (combined.includes('servo') || combined.includes('motor') || combined.includes('sg90') || combined.includes('sweep') || combined.includes('degrees')) {
    return 'servo';
  }
  if (combined.includes('lcd') || combined.includes('liquidcrystal') || combined.includes('1602') || combined.includes('display') || combined.includes('i2c')) {
    return 'lcd';
  }
  if (combined.includes('potentiometer') || combined.includes('analogread') || combined.includes('adc') || combined.includes('sensor') || combined.includes('ldr')) {
    return 'potentiometer';
  }
  if (combined.includes('traffic') || combined.includes('red') && combined.includes('yellow') && combined.includes('green')) {
    return 'traffic_light';
  }
  if (combined.includes('button') || combined.includes('switch') || combined.includes('debounce') || combined.includes('digitalread') || combined.includes('pullup')) {
    return 'button';
  }
  if (combined.includes('buzzer') || combined.includes('tone') || combined.includes('piezo') || combined.includes('frequency') || combined.includes('alarm')) {
    return 'buzzer';
  }

  return 'led';
}

export function initializeArduinoPins(): {
  digital: Record<string, PinState>;
  analog: Record<string, PinState>;
} {
  const digital: Record<string, PinState> = {};
  for (let i = 0; i <= 13; i++) {
    digital[`D${i}`] = {
      mode: 'INPUT',
      value: 'LOW',
      pwmValue: [3, 5, 6, 9, 10, 11].includes(i) ? 0 : undefined,
      voltage: 0.0
    };
  }

  const analog: Record<string, PinState> = {};
  for (let i = 0; i <= 5; i++) {
    analog[`A${i}`] = {
      mode: 'INPUT',
      value: 'LOW',
      analogValue: 0,
      voltage: 0.0
    };
  }

  return { digital, analog };
}

export interface UserStimulus {
  buttonPressed?: boolean;
  potentiometerAdc?: number; // 0 - 1023
  ultrasonicDistanceCm?: number; // 2 - 400
}

export function simulateArduinoSketch(
  problem: Problem,
  code: string,
  stimulus: UserStimulus = {}
): ArduinoSimulationState {
  const peripheralType = detectArduinoPeripheral(problem, code);
  const { digital, analog } = initializeArduinoPins();
  const serialOutput: string[] = [
    '[ARDUINO UNO @ 16.0MHz] Booting ATmega328P Optiboot bootloader...',
    '[INIT] Execution clock: 16,000,000 Hz, VCC: 5.00V',
    '[SERIAL 9600 BAUD] Serial communication initialized.'
  ];

  // Clean comments from code for inspection
  const cleanCode = code
    .replace(/\/\/.*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

  // Extract setup pin modes: pinMode(pin, MODE)
  const pinModeMatches = cleanCode.matchAll(/pinMode\s*\(\s*([A-Za-z0-9_]+)\s*,\s*([A-Za-z0-9_]+)\s*\)/g);
  for (const match of pinModeMatches) {
    const rawPin = match[1].trim();
    const mode = match[2].trim().toUpperCase() as 'INPUT' | 'OUTPUT' | 'INPUT_PULLUP';
    const pinKey = rawPin.startsWith('A') ? rawPin : rawPin === 'LED_BUILTIN' ? 'D13' : `D${rawPin}`;
    if (digital[pinKey]) {
      digital[pinKey].mode = mode;
      if (mode === 'INPUT_PULLUP') {
        digital[pinKey].value = 'HIGH';
        digital[pinKey].voltage = 5.0;
      }
    } else if (analog[pinKey]) {
      analog[pinKey].mode = mode;
    }
  }

  // Extract digital writes: digitalWrite(pin, VAL)
  const digitalWrites = Array.from(cleanCode.matchAll(/digitalWrite\s*\(\s*([A-Za-z0-9_]+)\s*,\s*([A-Za-z0-9_]+)\s*\)/g));
  let hasDigitalHigh = false;
  let activeLedPin = 13;

  for (const match of digitalWrites) {
    const rawPin = match[1].trim();
    const val = match[2].trim().toUpperCase();
    const pinKey = rawPin === 'LED_BUILTIN' ? 'D13' : rawPin.startsWith('A') ? rawPin : `D${rawPin}`;
    const isHigh = val === 'HIGH' || val === '1';

    if (digital[pinKey]) {
      digital[pinKey].mode = 'OUTPUT';
      digital[pinKey].value = isHigh ? 'HIGH' : 'LOW';
      digital[pinKey].voltage = isHigh ? 5.0 : 0.0;
      if (isHigh) {
        hasDigitalHigh = true;
        const pinNum = parseInt(pinKey.replace('D', ''), 10);
        if (!isNaN(pinNum)) activeLedPin = pinNum;
      }
    }
  }

  // Extract PWM writes: analogWrite(pin, val)
  const analogWrites = Array.from(cleanCode.matchAll(/analogWrite\s*\(\s*([A-Za-z0-9_]+)\s*,\s*([A-Za-z0-9_]+)\s*\)/g));
  let detectedPwm = 255;
  for (const match of analogWrites) {
    const pin = match[1].trim();
    const pinKey = pin.startsWith('A') ? pin : `D${pin}`;
    const val = parseInt(match[2].trim(), 10);
    const pwmClamped = isNaN(val) ? 128 : Math.max(0, Math.min(255, val));
    if (digital[pinKey]) {
      digital[pinKey].mode = 'OUTPUT';
      digital[pinKey].pwmValue = pwmClamped;
      digital[pinKey].value = pwmClamped > 0 ? 'HIGH' : 'LOW';
      digital[pinKey].voltage = Number(((pwmClamped / 255) * 5.0).toFixed(2));
      detectedPwm = pwmClamped;
    }
  }

  // Extract Serial.println / Serial.print statements
  const serialMatches = cleanCode.matchAll(/Serial\s*\.\s*(?:println|print)\s*\(\s*([^)]*?)\s*\)/g);
  for (const match of serialMatches) {
    const rawContent = match[1].trim();
    let parsedText = rawContent;
    if (rawContent.startsWith('"') && rawContent.endsWith('"')) {
      parsedText = rawContent.slice(1, -1);
    }
    if (parsedText && !serialOutput.includes(`[SERIAL OUT] ${parsedText}`)) {
      serialOutput.push(`[SERIAL OUT] ${parsedText}`);
    }
  }

  // 1. LED State
  const isBlinkCode = cleanCode.includes('delay') && cleanCode.includes('digitalWrite');
  const ledBrightness = detectedPwm !== 255 ? detectedPwm / 255 : (hasDigitalHigh || !cleanCode.includes('digitalWrite')) ? 1.0 : 0.0;
  const ledState = {
    isOn: ledBrightness > 0,
    brightness: ledBrightness,
    color: (problem.title.toLowerCase().includes('green') ? 'green' : problem.title.toLowerCase().includes('blue') ? 'blue' : problem.title.toLowerCase().includes('amber') ? 'amber' : 'red') as 'red' | 'green' | 'blue' | 'amber',
    pin: activeLedPin,
    blinkHz: isBlinkCode ? 1.0 : undefined
  };

  // 2. Button State
  const buttonPin = 2; // standard Arduino Uno external interrupt / push button pin
  const isButtonPressed = stimulus.buttonPressed ?? false;
  const isPullUp = cleanCode.includes('INPUT_PULLUP');
  const buttonState = {
    pin: buttonPin,
    isPressed: isButtonPressed,
    pullUp: isPullUp
  };
  if (digital[`D${buttonPin}`]) {
    digital[`D${buttonPin}`].mode = isPullUp ? 'INPUT_PULLUP' : 'INPUT';
    digital[`D${buttonPin}`].value = isButtonPressed ? (isPullUp ? 'LOW' : 'HIGH') : (isPullUp ? 'HIGH' : 'LOW');
    digital[`D${buttonPin}`].voltage = digital[`D${buttonPin}`].value === 'HIGH' ? 5.0 : 0.0;
  }

  // If button controls LED in code (e.g., if (buttonState == HIGH) digitalWrite(13, HIGH);)
  if (peripheralType === 'button') {
    const ledD13HighWhenPressed = cleanCode.includes('digitalWrite') && (isButtonPressed || cleanCode.includes('!'));
    ledState.isOn = isButtonPressed ? true : false;
    ledState.brightness = isButtonPressed ? 1.0 : 0.0;
    if (digital['D13']) {
      digital['D13'].value = isButtonPressed ? 'HIGH' : 'LOW';
      digital['D13'].voltage = isButtonPressed ? 5.0 : 0.0;
    }
    serialOutput.push(`[PIN ${buttonPin} READ] Button State: ${isButtonPressed ? 'PRESSED' : 'RELEASED'} (${digital[`D${buttonPin}`]?.voltage.toFixed(2)}V)`);
  }

  // 3. Potentiometer State
  const potAdc = stimulus.potentiometerAdc ?? (peripheralType === 'potentiometer' ? 680 : 512);
  const potVoltage = Number(((potAdc / 1023) * 5.0).toFixed(2));
  const potRotation = Math.round((potAdc / 1023) * 270);
  const potentiometerState = {
    pin: 'A0',
    rawAdc: potAdc,
    voltage: potVoltage,
    rotationDeg: potRotation
  };
  if (analog['A0']) {
    analog['A0'].analogValue = potAdc;
    analog['A0'].voltage = potVoltage;
  }
  if (peripheralType === 'potentiometer') {
    serialOutput.push(`[ADC A0] Raw: ${potAdc}/1023 | Voltage: ${potVoltage}V | Scaled PWM: ${Math.round((potAdc / 1023) * 255)}`);
    // Scale LED with pot if mapping present
    if (cleanCode.includes('map') || cleanCode.includes('analogWrite')) {
      ledState.brightness = potAdc / 1023;
      ledState.isOn = potAdc > 50;
    }
  }

  // 4. Ultrasonic HC-SR04 State
  const distCm = stimulus.ultrasonicDistanceCm ?? (peripheralType === 'ultrasonic' ? 24 : 50);
  const pulseUs = Math.round(distCm * 58.2); // HC-SR04 formula: uS / 58.2 = cm
  const ultrasonicState = {
    trigPin: 9,
    echoPin: 10,
    distanceCm: distCm,
    pulseTimeUs: pulseUs
  };
  if (digital['D9']) {
    digital['D9'].mode = 'OUTPUT';
    digital['D9'].value = 'HIGH';
    digital['D9'].voltage = 5.0;
  }
  if (digital['D10']) {
    digital['D10'].mode = 'INPUT';
    digital['D10'].value = 'HIGH';
    digital['D10'].voltage = 5.0;
  }
  if (peripheralType === 'ultrasonic') {
    serialOutput.push(`[HC-SR04 SONAR] Trigger 10us sent -> Echo Pulse: ${pulseUs}us -> Distance: ${distCm} cm`);
  }

  // 5. Servo Motor (SG90) State
  let servoAngle = 90; // Default neutral
  const servoMatch = cleanCode.match(/servo\s*\.\s*write\s*\(\s*([A-Za-z0-9_]+)\s*\)/i) ||
                     cleanCode.match(/myservo\s*\.\s*write\s*\(\s*([A-Za-z0-9_]+)\s*\)/i);
  if (servoMatch) {
    const parsedAngle = parseInt(servoMatch[1], 10);
    if (!isNaN(parsedAngle)) {
      servoAngle = Math.max(0, Math.min(180, parsedAngle));
    }
  } else if (peripheralType === 'servo') {
    servoAngle = 120;
  }
  const servoPulseWidth = Math.round(1000 + (servoAngle / 180) * 1000); // 1000us - 2000us
  const servoState = {
    pin: 9,
    angleDeg: servoAngle,
    pulseWidthUs: servoPulseWidth
  };
  if (digital['D9']) {
    digital['D9'].mode = 'OUTPUT';
    digital['D9'].pwmValue = Math.round((servoAngle / 180) * 255);
  }
  if (peripheralType === 'servo') {
    serialOutput.push(`[SERVO SG90] Pin 9 PWM: ${servoPulseWidth}us pulse -> Position: ${servoAngle}°`);
  }

  // 6. I2C 1602 LCD State
  let lcdLine1 = 'Silicon Arena';
  let lcdLine2 = 'Arduino Uno Rev3';
  const lcdPrints = Array.from(cleanCode.matchAll(/lcd\s*\.\s*print\s*\(\s*([^)]*?)\s*\)/gi));
  if (lcdPrints.length >= 1) {
    const rawL1 = lcdPrints[0][1].replace(/^["']|["']$/g, '').trim();
    if (rawL1) lcdLine1 = rawL1.slice(0, 16);
  }
  if (lcdPrints.length >= 2) {
    const rawL2 = lcdPrints[1][1].replace(/^["']|["']$/g, '').trim();
    if (rawL2) lcdLine2 = rawL2.slice(0, 16);
  } else if (peripheralType === 'lcd') {
    lcdLine2 = `Ready: ${problem.title.slice(0, 15)}`;
  }
  const lcdState = {
    line1: lcdLine1.padEnd(16, ' ').slice(0, 16),
    line2: lcdLine2.padEnd(16, ' ').slice(0, 16),
    backlightOn: true,
    address: '0x27'
  };
  if (analog['A4']) { analog['A4'].mode = 'OUTPUT'; } // SDA
  if (analog['A5']) { analog['A5'].mode = 'OUTPUT'; } // SCL

  // 7. Traffic Light State
  const trafficLightState = {
    red: cleanCode.includes('red') || cleanCode.includes('RED') || peripheralType === 'traffic_light',
    yellow: false,
    green: false,
    currentActive: 'red' as 'red' | 'yellow' | 'green' | 'all_off'
  };
  if (peripheralType === 'traffic_light') {
    trafficLightState.currentActive = 'green';
    trafficLightState.red = false;
    trafficLightState.yellow = false;
    trafficLightState.green = true;
    serialOutput.push('[TRAFFIC CONTROLLER] State: GREEN_PHASE (Vehicular transit permitted)');
  }

  // 8. Buzzer State
  const isTone = cleanCode.includes('tone(') || (cleanCode.includes('buzzer') && cleanCode.includes('HIGH'));
  let toneFreq = 1000;
  const toneMatch = cleanCode.match(/tone\s*\(\s*[A-Za-z0-9_]+\s*,\s*([0-9]+)\s*\)/i);
  if (toneMatch) {
    toneFreq = parseInt(toneMatch[1], 10) || 1000;
  }
  const buzzerState = {
    pin: 8,
    isActive: isTone,
    frequencyHz: toneFreq
  };
  if (isTone) {
    serialOutput.push(`[PIEZO BUZZER] Emitting audio tone: ${toneFreq} Hz on Pin 8`);
  }

  return {
    boardName: 'Arduino Uno Rev3 (ATmega328P)',
    clockMhz: 16.0,
    peripheralType,
    digitalPins: digital,
    analogPins: analog,
    serialOutput,
    ledState,
    buttonState,
    potentiometerState,
    ultrasonicState,
    servoState,
    lcdState,
    trafficLightState,
    buzzerState
  };
}
