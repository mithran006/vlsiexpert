import React, { useState, useEffect } from 'react';
import {
  Cpu, Zap, Sliders, RefreshCw, Power, Radio, Thermometer,
  Layers, Compass, Volume2, MoveHorizontal, Disc, Activity
} from 'lucide-react';
import { Problem } from '../../types';
import {
  MicroPythonSimulationState,
  MicroPythonPeripheralType,
  MicroPythonUserStimulus
} from '../../services/microPythonSimulationEngine';

interface MicroPythonWokwiViewProps {
  problem: Problem;
  simState: MicroPythonSimulationState;
  onStimulusChange?: (stimulus: MicroPythonUserStimulus) => void;
}

export const MicroPythonWokwiView: React.FC<MicroPythonWokwiViewProps> = ({
  problem,
  simState,
  onStimulusChange
}) => {
  // Interactive stimulus state
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [potU16, setPotU16] = useState<number>(simState.potentiometerState.rawU16);
  const [tempC, setTempC] = useState<number>(simState.dht22State.temperatureC);
  const [humPct, setHumPct] = useState<number>(simState.dht22State.humidityPct);
  const [activePeripheral, setActivePeripheral] = useState<MicroPythonPeripheralType>(simState.peripheralType);

  useEffect(() => {
    setActivePeripheral(simState.peripheralType);
    setPotU16(simState.potentiometerState.rawU16);
    setTempC(simState.dht22State.temperatureC);
    setHumPct(simState.dht22State.humidityPct);
  }, [simState]);

  const handleButtonDown = () => {
    setButtonPressed(true);
    onStimulusChange?.({ buttonPressed: true, potentiometerU16: potU16, temperatureC: tempC, humidityPct: humPct });
  };

  const handleButtonUp = () => {
    setButtonPressed(false);
    onStimulusChange?.({ buttonPressed: false, potentiometerU16: potU16, temperatureC: tempC, humidityPct: humPct });
  };

  const handlePotChange = (val: number) => {
    setPotU16(val);
    onStimulusChange?.({ buttonPressed, potentiometerU16: val, temperatureC: tempC, humidityPct: humPct });
  };

  const handleTempChange = (val: number) => {
    setTempC(val);
    onStimulusChange?.({ buttonPressed, potentiometerU16: potU16, temperatureC: val, humidityPct: humPct });
  };

  const handleHumChange = (val: number) => {
    setHumPct(val);
    onStimulusChange?.({ buttonPressed, potentiometerU16: potU16, temperatureC: tempC, humidityPct: val });
  };

  const { onboardLed, oledState, neoPixelState, dht22State, potentiometerState, buttonState, servoState } = simState;

  // Pico 40-pin layout pin labels (Pin 1 to 40)
  const leftPins = [
    { num: 1, name: 'GP0' }, { num: 2, name: 'GP1' }, { num: 3, name: 'GND' },
    { num: 4, name: 'GP2' }, { num: 5, name: 'GP3' }, { num: 6, name: 'GP4' },
    { num: 7, name: 'GP5' }, { num: 8, name: 'GND' }, { num: 9, name: 'GP6' },
    { num: 10, name: 'GP7' }, { num: 11, name: 'GP8' }, { num: 12, name: 'GP9' },
    { num: 13, name: 'GND' }, { num: 14, name: 'GP10' }, { num: 15, name: 'GP11' },
    { num: 16, name: 'GP12' }, { num: 17, name: 'GP13' }, { num: 18, name: 'GND' },
    { num: 19, name: 'GP14' }, { num: 20, name: 'GP15' }
  ];

  const rightPins = [
    { num: 40, name: 'VBUS' }, { num: 39, name: 'VSYS' }, { num: 38, name: 'GND' },
    { num: 37, name: '3V3_EN' }, { num: 36, name: '3V3_OUT' }, { num: 35, name: 'ADC_VREF' },
    { num: 34, name: 'GP28' }, { num: 33, name: 'GND' }, { num: 32, name: 'GP27' },
    { num: 31, name: 'GP26' }, { num: 30, name: 'RUN' }, { num: 29, name: 'GP22' },
    { num: 28, name: 'GND' }, { num: 27, name: 'GP21' }, { num: 26, name: 'GP20' },
    { num: 25, name: 'GP19' }, { num: 24, name: 'GP18' }, { num: 23, name: 'GND' },
    { num: 22, name: 'GP17' }, { num: 21, name: 'GP16' }
  ];

  return (
    <div className="h-full flex flex-col bg-slate-950 text-slate-100 select-none overflow-hidden font-sans">
      
      {/* Top Wokwi Hardware Header */}
      <div className="h-10 px-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-white tracking-wide">
            Wokwi MicroPython Simulator
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-amber-400 font-mono text-[11px]">
            RP2040 Pico @ 133MHz
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-emerald-400 font-mono text-[11px]">
            3.3V Logic Rail
          </span>
        </div>

        {/* Quick Hardware Peripherals Switch */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-500 mr-1">Virtual Module:</span>
          {(['led', 'oled', 'neopixel', 'dht22', 'potentiometer', 'button', 'servo'] as MicroPythonPeripheralType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActivePeripheral(type)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors uppercase ${
                activePeripheral === type
                  ? 'bg-amber-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Simulation Viewport (Two-Zone Hardware Layout) */}
      <div className="flex-1 p-3 grid grid-cols-1 lg:grid-cols-12 gap-3 overflow-y-auto">
        
        {/* Left 7 Columns: Raspberry Pi Pico Board View */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden">
          
          {/* Board PCB Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-bold text-xs tracking-wider text-emerald-300 font-mono">
                RASPBERRY PI PICO
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                RP2040 Dual ARM Cortex-M0+
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono">
              <span className="text-emerald-400 font-semibold">POWER 3.3V</span>
              <span className="text-slate-600">·</span>
              <span className="text-sky-400">MICRO-USB HOST</span>
            </div>
          </div>

          {/* Graphical Pico Board Layout */}
          <div className="relative bg-[#0b3323] border-2 border-[#155e3f] rounded-lg p-3 shadow-inner my-auto flex justify-between items-center min-h-[230px]">
            
            {/* Left Castellated Pins Column (1 to 20) */}
            <div className="flex flex-col gap-0.5 font-mono text-[8px] text-emerald-300/80">
              {leftPins.map(pin => {
                const gpNum = pin.name.startsWith('GP') ? parseInt(pin.name.replace('GP', ''), 10) : null;
                const isActive = gpNum !== null && simState.pins[gpNum]?.value === 1;
                return (
                  <div key={pin.num} className="flex items-center gap-1">
                    <div className={`w-2.5 h-1.5 rounded-xs border ${isActive ? 'bg-amber-400 border-amber-300 shadow-sm shadow-amber-400' : 'bg-[#e2b053] border-[#9e762c]'}`} />
                    <span className={isActive ? 'text-amber-300 font-bold' : ''}>{pin.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Board Center Area: USB, RP2040 Chip, BOOTSEL & GP25 LED */}
            <div className="flex flex-col items-center justify-between h-full py-1 px-4 my-auto">
              
              {/* Micro-USB Port on Top */}
              <div className="w-12 h-6 bg-slate-300 border border-slate-400 rounded-b shadow text-[7px] text-slate-800 font-mono font-bold flex items-center justify-center">
                MICRO-USB
              </div>

              {/* BOOTSEL Button & Crystal Oscillator */}
              <div className="flex items-center gap-4 my-2">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-400 shadow flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                  <span className="text-[7px] font-mono text-slate-300 mt-0.5">BOOTSEL</span>
                </div>
                <div className="w-7 h-3 bg-slate-300 border border-slate-400 rounded-xs text-[6px] text-slate-700 font-mono flex items-center justify-center">
                  12MHz
                </div>
              </div>

              {/* RP2040 Microcontroller IC */}
              <div className="bg-[#13161c] border-2 border-slate-500 rounded p-2.5 shadow-xl flex flex-col items-center w-28 text-center my-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500/80 mb-1" />
                <span className="text-[10px] font-mono font-bold text-white tracking-widest">
                  RP2-B2
                </span>
                <span className="text-[7px] font-mono text-slate-400">
                  264KB SRAM · 133MHz
                </span>
              </div>

              {/* Onboard LED (GP25) */}
              <div className="flex items-center gap-2 mt-2 bg-slate-950/60 border border-emerald-900/60 px-2 py-1 rounded">
                <span className="text-[9px] font-mono text-slate-300">LED (GP25):</span>
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-150 ${
                    onboardLed.isOn
                      ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)] scale-110'
                      : 'bg-emerald-950 border border-emerald-800/40'
                  }`}
                />
                <span className={`text-[8px] font-mono font-bold ${onboardLed.isOn ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {onboardLed.isOn ? 'HIGH' : 'LOW'}
                </span>
              </div>

            </div>

            {/* Right Castellated Pins Column (40 to 21) */}
            <div className="flex flex-col gap-0.5 font-mono text-[8px] text-emerald-300/80 items-end">
              {rightPins.map(pin => {
                const gpNum = pin.name.startsWith('GP') ? parseInt(pin.name.replace('GP', ''), 10) : null;
                const isActive = gpNum !== null && simState.pins[gpNum]?.value === 1;
                return (
                  <div key={pin.num} className="flex items-center gap-1">
                    <span className={isActive ? 'text-amber-300 font-bold' : ''}>{pin.name}</span>
                    <div className={`w-2.5 h-1.5 rounded-xs border ${isActive ? 'bg-amber-400 border-amber-300 shadow-sm shadow-amber-400' : 'bg-[#e2b053] border-[#9e762c]'}`} />
                  </div>
                );
              })}
            </div>

          </div>

          {/* Quick Status Bar */}
          <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
            <div>
              <span>GP25 LED: </span>
              <span className={onboardLed.isOn ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                {onboardLed.isOn ? 'ON (3.3V HIGH)' : 'OFF (0V LOW)'}
              </span>
            </div>
            <div>
              <span>ADC0 (GP26): </span>
              <span className="text-sky-400 font-bold tabular-nums">
                {potentiometerState.rawU16} / 65535 ({potentiometerState.voltage.toFixed(2)}V)
              </span>
            </div>
          </div>

        </div>

        {/* Right 5 Columns: Dynamic Physical Wokwi Peripheral Stage */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between">
          
          {/* Peripheral Stage Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-200 font-mono">
              Wokwi Simulated Peripheral
            </span>
            <span className="text-[10px] text-amber-400 font-mono uppercase">
              {activePeripheral}
            </span>
          </div>

          {/* 1. Onboard / External LED */}
          {activePeripheral === 'led' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="relative">
                <div
                  className={`w-16 h-20 rounded-t-full transition-all duration-150 relative ${
                    onboardLed.isOn
                      ? 'bg-emerald-400 shadow-[0_0_35px_rgba(52,211,153,0.9)]'
                      : 'bg-slate-800 border-2 border-slate-700 opacity-60'
                  }`}
                  style={{ opacity: onboardLed.isOn ? 1.0 : 0.2 }}
                >
                  <div className="absolute top-2 left-2.5 w-3 h-7 bg-white/40 rounded-full blur-[1px]" />
                </div>
                <div className="flex justify-center gap-4 mt-0.5">
                  <div className="w-1 h-6 bg-slate-400" />
                  <div className="w-1 h-5 bg-slate-400" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-white font-mono">
                  {onboardLed.isOn ? 'PICO LED ACTIVE (HIGH)' : 'PICO LED OFF (LOW)'}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Controlled via Pin(25, Pin.OUT) · 3.3V Logic
                </div>
              </div>
            </div>
          )}

          {/* 2. SSD1306 128x64 I2C OLED Display */}
          {activePeripheral === 'oled' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="w-full max-w-[270px] bg-slate-950 border-4 border-slate-700 rounded-xl p-3 shadow-2xl">
                {/* OLED Display Bezel & Glass */}
                <div className="bg-[#030914] border border-sky-600/40 rounded p-2 text-left font-mono text-xs text-sky-400 shadow-inner min-h-[90px] flex flex-col justify-between">
                  {oledState.lines.map((line, idx) => (
                    <div key={idx} className="truncate tracking-wider text-[11px]">
                      {line}
                    </div>
                  ))}
                  <div className="border-t border-sky-800/40 pt-1 flex justify-between text-[8px] text-sky-500">
                    <span>SSD1306 128x64</span>
                    <span>ADDR: {oledState.address}</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4 text-[8px] font-mono text-slate-500 mt-2">
                  <span>GND</span><span>VCC (3.3V)</span><span>SCL (GP5)</span><span>SDA (GP4)</span>
                </div>
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-sky-400">
                  I2C0 Monochrome OLED Display
                </div>
                <div className="text-[11px] text-slate-400">
                  SDA: GP4 · SCL: GP5 · Fast-Mode 400kHz
                </div>
              </div>
            </div>
          )}

          {/* 3. NeoPixel 16-LED Addressable WS2812B Ring */}
          {activePeripheral === 'neopixel' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              {/* Circular 16-LED Ring */}
              <div className="w-36 h-36 rounded-full bg-slate-950 border-4 border-slate-800 relative flex items-center justify-center shadow-xl">
                {neoPixelState.pixels.map((px, idx) => {
                  const angle = (idx / 16) * 2 * Math.PI;
                  const radius = 54; // px from center
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const rgbStr = `rgb(${px.r}, ${px.g}, ${px.b})`;
                  const hasColor = px.r > 0 || px.g > 0 || px.b > 0;

                  return (
                    <div
                      key={idx}
                      className="w-3.5 h-3.5 rounded-sm absolute transition-all duration-200 border border-slate-700"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        backgroundColor: rgbStr,
                        boxShadow: hasColor ? `0 0 10px ${rgbStr}` : 'none'
                      }}
                      title={`LED #${idx}: ${rgbStr}`}
                    />
                  );
                })}
                <div className="text-[9px] font-mono font-bold text-slate-400 text-center">
                  WS2812B<br />16-RING
                </div>
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-white">
                  NeoPixel 16-LED RGB Ring (Pin GP18)
                </div>
                <div className="text-[11px] text-slate-400">
                  Addressable 800kHz single-wire NRZ protocol
                </div>
              </div>
            </div>
          )}

          {/* 4. DHT22 Temperature & Humidity Sensor */}
          {activePeripheral === 'dht22' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              {/* Sensor Housing Graphic */}
              <div className="w-24 h-28 bg-white border-2 border-slate-300 rounded-lg p-2 flex flex-col items-center justify-between shadow-lg">
                <div className="w-full grid grid-cols-4 gap-1 py-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="h-1 bg-slate-300 rounded-xs" />
                  ))}
                </div>
                <span className="text-[9px] font-mono font-bold text-slate-800">DHT22</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(p => (
                    <div key={p} className="w-1 h-3 bg-slate-400" />
                  ))}
                </div>
              </div>

              {/* Temperature Slider */}
              <div className="w-full max-w-[220px] space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>-40°C</span>
                  <span className="text-rose-400 font-bold">{tempC.toFixed(1)}°C</span>
                  <span>+80°C</span>
                </div>
                <input
                  type="range"
                  min="-40"
                  max="80"
                  step="0.5"
                  value={tempC}
                  onChange={(e) => handleTempChange(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Humidity Slider */}
              <div className="w-full max-w-[220px] space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>0%</span>
                  <span className="text-sky-400 font-bold">{humPct.toFixed(1)}% RH</span>
                  <span>100%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={humPct}
                  onChange={(e) => handleHumChange(parseFloat(e.target.value))}
                  className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-white">
                  DHT22 Digital Climate Sensor (Pin GP16)
                </div>
                <div className="text-[11px] text-slate-400">
                  Temp: <span className="text-rose-400 font-bold">{dht22State.temperatureC.toFixed(1)}°C</span> · Humidity: <span className="text-sky-400 font-bold">{dht22State.humidityPct.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          )}

          {/* 5. 16-Bit ADC Potentiometer (GP26) */}
          {activePeripheral === 'potentiometer' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 relative flex items-center justify-center shadow-lg">
                <div
                  className="w-1.5 h-8 bg-sky-400 rounded-full absolute origin-bottom transition-transform duration-75"
                  style={{
                    transform: `rotate(${(potentiometerState.rawU16 / 65535) * 270 - 135}deg)`,
                    bottom: '50%'
                  }}
                />
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-600" />
              </div>

              <div className="w-full max-w-[220px] space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>0V</span>
                  <span className="text-sky-400 font-bold">{potentiometerState.voltage.toFixed(2)}V</span>
                  <span>3.3V</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="65535"
                  value={potU16}
                  onChange={(e) => handlePotChange(parseInt(e.target.value, 10))}
                  className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-white">
                  ADC0 (GP26) read_u16(): <span className="text-sky-400 tabular-nums">{potentiometerState.rawU16}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Voltage: <span className="text-white font-bold">{potentiometerState.voltage.toFixed(2)} V</span> · 16-Bit Resolution
                </div>
              </div>
            </div>
          )}

          {/* 6. Pushbutton (GP14) */}
          {activePeripheral === 'button' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex flex-col items-center">
                <button
                  onMouseDown={handleButtonDown}
                  onMouseUp={handleButtonUp}
                  onTouchStart={handleButtonDown}
                  onTouchEnd={handleButtonUp}
                  className={`w-20 h-20 rounded-full border-4 transition-all duration-75 flex flex-col items-center justify-center cursor-pointer shadow-lg ${
                    buttonPressed
                      ? 'bg-amber-500 border-amber-300 scale-95 shadow-inner'
                      : 'bg-amber-700 hover:bg-amber-600 border-amber-500 hover:scale-105'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-white">
                    {buttonPressed ? 'PRESSED' : 'PRESS'}
                  </span>
                </button>
              </div>

              <div className="space-y-1 font-mono text-xs">
                <div className="font-bold text-white">
                  Pin GP14: <span className={buttonPressed ? 'text-amber-400' : 'text-slate-400'}>{buttonPressed ? 'LOGIC 1 (3.3V)' : 'LOGIC 0 (0V)'}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Configured with Pin.PULL_DOWN / Interrupt IRQ
                </div>
                <div className="text-[10px] text-amber-400">
                  Click and hold the button above to simulate hardware press.
                </div>
              </div>
            </div>
          )}

          {/* 7. Micro Servo (GP15 PWM) */}
          {activePeripheral === 'servo' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="w-28 h-20 bg-blue-600 border border-blue-400 rounded-md relative flex items-center justify-center shadow-lg">
                <span className="text-[9px] font-mono font-bold text-white/80 absolute top-1 left-2">
                  PWM SERVO
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-400 relative flex items-center justify-center">
                  <div
                    className="w-16 h-3 bg-white border border-slate-300 rounded-full absolute transition-transform duration-300 shadow-md"
                    style={{ transform: `rotate(${servoState.angleDeg - 90}deg)` }}
                  />
                  <div className="w-3 h-3 rounded-full bg-slate-400 z-10" />
                </div>
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-white">
                  Servo Horn Angle: <span className="text-blue-400 font-bold">{servoState.angleDeg}°</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  PWM Pin GP15 · Duty: <span className="text-white font-bold">{servoState.dutyNs} ns</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Feedback Label */}
          <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex items-center justify-between">
            <span>Hardware Target: {problem.id}</span>
            <span className="text-amber-400">Wokwi Engine Active</span>
          </div>

        </div>

      </div>

    </div>
  );
};
