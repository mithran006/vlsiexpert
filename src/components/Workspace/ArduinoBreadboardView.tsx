import React, { useState, useEffect } from 'react';
import {
  Zap, Sliders, RefreshCw, Volume2, MoveHorizontal, Disc,
  CheckCircle2, AlertCircle, Play, Eye, Cpu
} from 'lucide-react';
import { Problem } from '../../types';
import {
  ArduinoSimulationState,
  ArduinoPeripheralType,
  UserStimulus
} from '../../services/arduinoSimulationEngine';

interface ArduinoBreadboardViewProps {
  problem: Problem;
  simState: ArduinoSimulationState;
  onStimulusChange?: (stimulus: UserStimulus) => void;
}

export const ArduinoBreadboardView: React.FC<ArduinoBreadboardViewProps> = ({
  problem,
  simState,
  onStimulusChange
}) => {
  // Local interactive stimuli states
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [potAdc, setPotAdc] = useState<number>(simState.potentiometerState.rawAdc);
  const [distanceCm, setDistanceCm] = useState<number>(simState.ultrasonicState.distanceCm);
  const [activePeripheralView, setActivePeripheralView] = useState<ArduinoPeripheralType>(simState.peripheralType);

  // Sync with prop updates
  useEffect(() => {
    setActivePeripheralView(simState.peripheralType);
    setPotAdc(simState.potentiometerState.rawAdc);
    setDistanceCm(simState.ultrasonicState.distanceCm);
  }, [simState]);

  const handleButtonDown = () => {
    setButtonPressed(true);
    onStimulusChange?.({ buttonPressed: true, potentiometerAdc: potAdc, ultrasonicDistanceCm: distanceCm });
  };

  const handleButtonUp = () => {
    setButtonPressed(false);
    onStimulusChange?.({ buttonPressed: false, potentiometerAdc: potAdc, ultrasonicDistanceCm: distanceCm });
  };

  const handlePotChange = (val: number) => {
    setPotAdc(val);
    onStimulusChange?.({ buttonPressed, potentiometerAdc: val, ultrasonicDistanceCm: distanceCm });
  };

  const handleDistanceChange = (val: number) => {
    setDistanceCm(val);
    onStimulusChange?.({ buttonPressed, potentiometerAdc: potAdc, ultrasonicDistanceCm: val });
  };

  const { ledState, buttonState, potentiometerState, ultrasonicState, servoState, lcdState, trafficLightState, buzzerState } = simState;

  return (
    <div className="h-full flex flex-col bg-slate-950 text-slate-100 select-none overflow-hidden font-sans">
      
      {/* Top Breadboard Header & Peripheral Selector */}
      <div className="h-10 px-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-white tracking-wide">
            Virtual ATmega328P Breadboard
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 font-mono text-[11px]">
            16.0 MHz Optiboot
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-teal-400 font-mono text-[11px]">
            5.00V DC Rail
          </span>
        </div>

        {/* Peripheral Mode Quick Switch */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-500 mr-1">Active Hardware:</span>
          {(['led', 'button', 'potentiometer', 'ultrasonic', 'servo', 'lcd', 'traffic_light', 'buzzer'] as ArduinoPeripheralType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActivePeripheralView(type)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors uppercase ${
                activePeripheralView === type
                  ? 'bg-teal-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {type.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Simulation Viewport (Two-Zone Hardware Layout) */}
      <div className="flex-1 p-3 grid grid-cols-1 lg:grid-cols-12 gap-3 overflow-y-auto">
        
        {/* Left 7 Columns: Arduino Uno Rev3 Board Visualization */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden">
          
          {/* Board PCB Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
              <span className="font-bold text-xs tracking-wider text-teal-300 font-mono">
                ARDUINO UNO REV3
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                ATmega328P 8-Bit AVR RISC
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono">
              <span className="text-amber-400 font-semibold">PWR ON</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400">USB CONNECTED</span>
            </div>
          </div>

          {/* Graphical Board Layout */}
          <div className="relative bg-[#0d2836] border-2 border-[#124d60] rounded-lg p-3 shadow-inner my-auto min-h-[220px] flex flex-col justify-between">
            
            {/* Top Digital Pin Headers (D0 - D13 + GND + AREF) */}
            <div className="flex justify-between items-center bg-[#071924] border border-[#1b5e73] rounded px-2 py-1 text-[9px] font-mono text-teal-300">
              <span className="text-slate-500">AREF</span>
              <span className="text-slate-500">GND</span>
              {['13', '12', '11', '10', '9', '8'].map((pin) => {
                const pinKey = `D${pin}`;
                const state = simState.digitalPins[pinKey];
                const isHigh = state?.value === 'HIGH';
                return (
                  <div key={pin} className="flex flex-col items-center">
                    <span className="text-[8px] text-slate-400">~{pin}</span>
                    <div className={`w-2.5 h-2.5 rounded-sm mt-0.5 border ${isHigh ? 'bg-amber-400 border-amber-300 shadow-sm shadow-amber-400/80' : 'bg-slate-900 border-teal-900'}`} />
                  </div>
                );
              })}
              <span className="text-slate-600">|</span>
              {['7', '6', '5', '4', '3', '2', '1', '0'].map((pin) => {
                const pinKey = `D${pin}`;
                const state = simState.digitalPins[pinKey];
                const isHigh = state?.value === 'HIGH';
                return (
                  <div key={pin} className="flex flex-col items-center">
                    <span className="text-[8px] text-slate-400">{pin}</span>
                    <div className={`w-2.5 h-2.5 rounded-sm mt-0.5 border ${isHigh ? 'bg-teal-400 border-teal-300 shadow-sm shadow-teal-400/80' : 'bg-slate-900 border-teal-900'}`} />
                  </div>
                );
              })}
            </div>

            {/* Middle Board Area: ATmega328P IC, Crystal, Builtin LEDs */}
            <div className="my-3 flex items-center justify-between px-2">
              
              {/* Left: USB Jack & Power Section */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-7 bg-slate-300 border border-slate-400 rounded-sm shadow text-[7px] text-slate-800 font-mono font-bold flex items-center justify-center">
                  USB TYPE-B
                </div>
                <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-sm text-[6px] text-slate-400 font-mono flex items-center justify-center">
                  DC JACK
                </div>
              </div>

              {/* Center: DIP-28 Microcontroller Chip */}
              <div className="bg-[#1a1f26] border-2 border-slate-600 rounded px-5 py-2.5 shadow-md flex flex-col items-center">
                <div className="w-3 h-1 bg-slate-500 rounded-t-full mb-1" />
                <span className="text-[10px] font-mono font-bold text-slate-200 tracking-wider">
                  ATMEGA328P-PU
                </span>
                <span className="text-[8px] font-mono text-slate-500">
                  16MHz 32KB FLASH 2KB SRAM
                </span>
                <div className="flex gap-1 mt-1.5">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className="w-1 h-1.5 bg-slate-400 rounded-xs" />
                  ))}
                </div>
              </div>

              {/* Right: Built-in LEDs (L, TX, RX, ON) & Reset Button */}
              <div className="flex flex-col gap-1 text-[8px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">L (D13):</span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      ledState.isOn
                        ? 'bg-amber-400 shadow-md shadow-amber-400'
                        : 'bg-amber-950 border border-amber-800/40'
                    }`}
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">TX:</span>
                  <div className="w-2 h-2 rounded-full bg-teal-400 shadow-sm shadow-teal-400/50" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">RX:</span>
                  <div className="w-2 h-2 rounded-full bg-teal-950 border border-teal-800" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">ON:</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
                </div>
              </div>

            </div>

            {/* Bottom Analog & Power Pin Headers */}
            <div className="flex justify-between items-center bg-[#071924] border border-[#1b5e73] rounded px-2 py-1 text-[9px] font-mono text-teal-300">
              <div className="flex gap-2">
                {['IOREF', 'RESET', '3.3V', '5V', 'GND', 'VIN'].map((p) => (
                  <div key={p} className="flex flex-col items-center">
                    <span className="text-[8px] text-slate-400">{p}</span>
                    <div className="w-2.5 h-2.5 rounded-sm mt-0.5 bg-slate-900 border border-teal-900" />
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {['A0', 'A1', 'A2', 'A3', 'A4', 'A5'].map((pin) => {
                  const state = simState.analogPins[pin];
                  const hasVal = (state?.analogValue || 0) > 0;
                  return (
                    <div key={pin} className="flex flex-col items-center">
                      <span className="text-[8px] text-sky-400">{pin}</span>
                      <div className={`w-2.5 h-2.5 rounded-sm mt-0.5 border ${hasVal ? 'bg-sky-400 border-sky-300 shadow-sm shadow-sky-400/60' : 'bg-slate-900 border-teal-900'}`} />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Quick Status Bar */}
          <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
            <div>
              <span>Pin 13: </span>
              <span className={ledState.isOn ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                {ledState.isOn ? 'HIGH (5.0V)' : 'LOW (0.0V)'}
              </span>
            </div>
            <div>
              <span>ADC A0: </span>
              <span className="text-sky-400 font-bold tabular-nums">
                {potentiometerState.rawAdc} / 1023 ({potentiometerState.voltage.toFixed(2)}V)
              </span>
            </div>
          </div>

        </div>

        {/* Right 5 Columns: Dynamic Physical Peripheral Stage */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between">
          
          {/* Peripheral Stage Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-200 font-mono">
              Connected Hardware Module
            </span>
            <span className="text-[10px] text-teal-400 font-mono uppercase">
              {activePeripheralView.replace('_', ' ')}
            </span>
          </div>

          {/* 1. LED Visualizer */}
          {activePeripheralView === 'led' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="relative">
                {/* 5mm LED Graphic */}
                <div
                  className={`w-16 h-20 rounded-t-full transition-all duration-150 relative ${
                    ledState.isOn
                      ? ledState.color === 'green'
                        ? 'bg-emerald-400 shadow-[0_0_35px_rgba(52,211,153,0.9)]'
                        : ledState.color === 'blue'
                        ? 'bg-sky-400 shadow-[0_0_35px_rgba(56,189,248,0.9)]'
                        : ledState.color === 'amber'
                        ? 'bg-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.9)]'
                        : 'bg-rose-500 shadow-[0_0_35px_rgba(244,63,94,0.9)]'
                      : 'bg-slate-800 border-2 border-slate-700 opacity-60'
                  }`}
                  style={{ opacity: ledState.isOn ? Math.max(0.4, ledState.brightness) : 0.2 }}
                >
                  {/* Glass Reflection Highlight */}
                  <div className="absolute top-2 left-2.5 w-3 h-7 bg-white/40 rounded-full blur-[1px]" />
                </div>
                {/* Anode & Cathode Metal Leads */}
                <div className="flex justify-center gap-4 mt-0.5">
                  <div className="w-1 h-6 bg-slate-400" />
                  <div className="w-1 h-5 bg-slate-400" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-white font-mono">
                  {ledState.isOn ? 'LED ILLUMINATED (HIGH)' : 'LED OFF (LOW)'}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Connected to Pin D{ledState.pin} · Current: {ledState.isOn ? '18.2 mA' : '0.0 mA'}
                </div>
                {ledState.brightness < 1.0 && ledState.brightness > 0 && (
                  <div className="text-[10px] text-teal-400 font-mono">
                    PWM Duty Cycle: {Math.round(ledState.brightness * 100)}% ({Math.round(ledState.brightness * 255)}/255)
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. Interactive Tactile Pushbutton */}
          {activePeripheralView === 'button' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex flex-col items-center">
                <button
                  onMouseDown={handleButtonDown}
                  onMouseUp={handleButtonUp}
                  onTouchStart={handleButtonDown}
                  onTouchEnd={handleButtonUp}
                  className={`w-20 h-20 rounded-full border-4 transition-all duration-75 flex flex-col items-center justify-center cursor-pointer shadow-lg ${
                    buttonPressed
                      ? 'bg-teal-500 border-teal-300 scale-95 shadow-inner'
                      : 'bg-teal-700 hover:bg-teal-600 border-teal-500 hover:scale-105'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-white">
                    {buttonPressed ? 'PRESSED' : 'PRESS'}
                  </span>
                </button>
                <span className="text-[9px] text-slate-500 font-mono mt-2">
                  Tactile Momentary Switch
                </span>
              </div>

              <div className="space-y-1 font-mono text-xs">
                <div className="font-bold text-white">
                  Pin D{buttonState.pin}: <span className={buttonPressed ? 'text-teal-400' : 'text-slate-400'}>{buttonPressed ? 'LOGIC HIGH (5V)' : 'LOGIC LOW (0V)'}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Mode: {buttonState.pullUp ? 'INPUT_PULLUP (Internal 20kΩ)' : 'INPUT (External Pulldown)'}
                </div>
                <div className="text-[10px] text-teal-400">
                  Click and hold the button above to simulate hardware press.
                </div>
              </div>
            </div>
          )}

          {/* 3. Interactive Rotary Potentiometer (ADC) */}
          {activePeripheralView === 'potentiometer' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              {/* Dial Representation */}
              <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 relative flex items-center justify-center shadow-lg">
                <div
                  className="w-1.5 h-8 bg-sky-400 rounded-full absolute origin-bottom transition-transform duration-75"
                  style={{
                    transform: `rotate(${potentiometerState.rotationDeg - 135}deg)`,
                    bottom: '50%'
                  }}
                />
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-600" />
              </div>

              {/* Slider for precision adjustment */}
              <div className="w-full max-w-[220px] space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>0V (GND)</span>
                  <span className="text-sky-400 font-bold">{potentiometerState.voltage.toFixed(2)}V</span>
                  <span>5V (VCC)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1023"
                  value={potAdc}
                  onChange={(e) => handlePotChange(parseInt(e.target.value, 10))}
                  className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-white">
                  ADC Pin A0: <span className="text-sky-400 tabular-nums">{potentiometerState.rawAdc} / 1023</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Calculated Voltage: <span className="text-white font-bold">{potentiometerState.voltage.toFixed(2)} V</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  Mapped PWM (8-bit): {Math.round((potentiometerState.rawAdc / 1023) * 255)}
                </div>
              </div>
            </div>
          )}

          {/* 4. Ultrasonic Distance Sensor HC-SR04 */}
          {activePeripheralView === 'ultrasonic' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              {/* Transducer graphic */}
              <div className="flex items-center gap-3 p-2 bg-slate-950 border border-slate-800 rounded-xl">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-[8px] font-mono font-bold text-teal-400">
                    TRIG
                  </div>
                  <span className="text-[8px] text-slate-500 font-mono mt-0.5">Transmitter</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-[8px] font-mono font-bold text-teal-400">
                    ECHO
                  </div>
                  <span className="text-[8px] text-slate-500 font-mono mt-0.5">Receiver</span>
                </div>
              </div>

              {/* Distance Slider */}
              <div className="w-full max-w-[220px] space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>2 cm</span>
                  <span className="text-teal-400 font-bold">{distanceCm} cm</span>
                  <span>400 cm</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="200"
                  value={distanceCm}
                  onChange={(e) => handleDistanceChange(parseInt(e.target.value, 10))}
                  className="w-full accent-teal-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-white">
                  Measured Obstacle Distance: <span className="text-teal-400 font-bold">{ultrasonicState.distanceCm} cm</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Echo Pulse Width: <span className="text-white font-bold tabular-nums">{ultrasonicState.pulseTimeUs} µs</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  Formula: distance = duration_us / 58.2
                </div>
              </div>
            </div>
          )}

          {/* 5. Micro Servo Motor (SG90) */}
          {activePeripheralView === 'servo' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="w-28 h-20 bg-blue-600 border border-blue-400 rounded-md relative flex items-center justify-center shadow-lg">
                <span className="text-[9px] font-mono font-bold text-white/80 absolute top-1 left-2">
                  SG90 9g
                </span>
                {/* Servo Horn Shaft & Arm */}
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
                  PWM Pin D{servoState.pin} · Pulse: <span className="text-white font-bold">{servoState.pulseWidthUs} µs</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  Operating Range: 0° (1000µs) to 180° (2000µs)
                </div>
              </div>
            </div>
          )}

          {/* 6. I2C 1602 LCD Display */}
          {activePeripheralView === 'lcd' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              {/* LCD Screen Graphic */}
              <div className="w-full max-w-[260px] bg-emerald-950 border-4 border-slate-700 rounded-lg p-2.5 shadow-lg">
                <div className="bg-[#0b2818] border border-emerald-800 rounded p-2 text-left font-mono text-xs tracking-widest text-emerald-300 shadow-inner space-y-1">
                  <div className="h-4 truncate">{lcdState.line1 || '                '}</div>
                  <div className="h-4 truncate">{lcdState.line2 || '                '}</div>
                </div>
                <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 mt-1 px-1">
                  <span>HD44780 16x2</span>
                  <span>I2C ADDR: {lcdState.address}</span>
                </div>
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-emerald-400">
                  I2C LiquidCrystal Display Active
                </div>
                <div className="text-[11px] text-slate-400">
                  SDA: Pin A4 · SCL: Pin A5 · Contrast: Nominal
                </div>
              </div>
            </div>
          )}

          {/* 7. Traffic Light Signal */}
          {activePeripheralView === 'traffic_light' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="w-16 bg-slate-950 border-2 border-slate-700 rounded-xl p-2.5 flex flex-col items-center gap-2.5 shadow-xl">
                {/* Red Light */}
                <div className={`w-8 h-8 rounded-full transition-all ${
                  trafficLightState.red || trafficLightState.currentActive === 'red'
                    ? 'bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.9)]'
                    : 'bg-rose-950/60 border border-rose-900/40 opacity-40'
                }`} />
                {/* Yellow Light */}
                <div className={`w-8 h-8 rounded-full transition-all ${
                  trafficLightState.yellow || trafficLightState.currentActive === 'yellow'
                    ? 'bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.9)]'
                    : 'bg-amber-950/60 border border-amber-900/40 opacity-40'
                }`} />
                {/* Green Light */}
                <div className={`w-8 h-8 rounded-full transition-all ${
                  trafficLightState.green || trafficLightState.currentActive === 'green'
                    ? 'bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]'
                    : 'bg-emerald-950/60 border border-emerald-900/40 opacity-40'
                }`} />
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-white">
                  State: <span className="text-emerald-400 font-bold uppercase">{trafficLightState.currentActive}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Red: D12 · Yellow: D11 · Green: D10
                </div>
              </div>
            </div>
          )}

          {/* 8. Piezo Buzzer */}
          {activePeripheralView === 'buzzer' && (
            <div className="my-auto flex flex-col items-center text-center space-y-3 py-2">
              <div className="w-20 h-20 rounded-full bg-slate-950 border-4 border-slate-700 flex items-center justify-center relative shadow-lg">
                <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-600" />
                {buzzerState.isActive && (
                  <div className="absolute inset-0 rounded-full border border-teal-400 animate-ping opacity-60" />
                )}
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="font-bold text-white">
                  Piezo Transducer: <span className={buzzerState.isActive ? 'text-teal-400' : 'text-slate-500'}>{buzzerState.isActive ? 'ACTIVE' : 'SILENT'}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Frequency: {buzzerState.frequencyHz} Hz · Pin D{buzzerState.pin}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Feedback Label */}
          <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex items-center justify-between">
            <span>Hardware Target: {problem.id}</span>
            <span className="text-teal-400">Real-Time Sync Active</span>
          </div>

        </div>

      </div>

    </div>
  );
};
