import React, { useState, useEffect, useMemo } from 'react';
import {
  Terminal, Cpu, CheckCircle2, XCircle, Send,
  Activity, Sliders, Layers, Download, Zap, ScreenShare, LayoutGrid
} from 'lucide-react';
import { Problem, SimulationResult } from '../../types';
import { MicroPythonWokwiView } from './MicroPythonWokwiView';
import {
  simulateMicroPythonCode,
  MicroPythonUserStimulus,
  MicroPythonSimulationState
} from '../../services/microPythonSimulationEngine';

interface MicroPythonConsoleProps {
  problem: Problem;
  simulationResult: SimulationResult | null;
  code?: string;
  onDownloadCode?: () => void;
}

export const MicroPythonConsole: React.FC<MicroPythonConsoleProps> = ({
  problem,
  simulationResult,
  code = '',
  onDownloadCode
}) => {
  const [activeTab, setActiveTab] = useState<'wokwi' | 'repl' | 'peripherals' | 'oled'>('wokwi');
  const [replInput, setReplInput] = useState<string>('');
  const [stimulus, setStimulus] = useState<MicroPythonUserStimulus>({});

  // Compute live MicroPython simulation state based on code, problem, and user stimulus
  const simState: MicroPythonSimulationState = useMemo(() => {
    return simulateMicroPythonCode(problem, code, stimulus);
  }, [problem, code, stimulus]);

  const [replHistory, setReplHistory] = useState<string[]>([
    'MicroPython v1.22.0 on 2024-02-14; Raspberry Pi Pico with RP2040',
    'Type "help()" for more information.',
    '>>> import machine, time',
    '>>> from machine import Pin, I2C, ADC, PWM',
    `>>> # Running hardware problem script: ${problem.title}`
  ]);

  const passed = simulationResult?.passed ?? false;
  const logs = simulationResult?.logs || [];

  // Sync simulation result logs
  useEffect(() => {
    if (simulationResult) {
      const simLogs = simulationResult.logs.filter(l => 
        l.includes('MICROPYTHON') || l.includes('ASSERTION') || l.includes('LOG') || l.includes('REPL') || l.includes('PICO')
      );
      if (simLogs.length > 0) {
        setReplHistory(prev => {
          const combined = [...prev];
          for (const nl of simLogs) {
            if (!combined.includes(nl)) combined.push(nl);
          }
          return combined;
        });
      }
    }
  }, [simulationResult]);

  // Sync simState.replOutput into repl history
  useEffect(() => {
    if (simState.replOutput.length > 0) {
      setReplHistory(prev => {
        const combined = [...prev];
        for (const out of simState.replOutput) {
          if (!combined.includes(out)) combined.push(out);
        }
        return combined;
      });
    }
  }, [simState.replOutput]);

  const handleSendRepl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replInput.trim()) return;
    const input = replInput.trim();
    const newEntries = [
      `>>> ${input}`
    ];

    if (input === 'led.toggle()' || input === 'led.value(not led.value())') {
      const nextLed = !simState.onboardLed.isOn;
      newEntries.push(`[PICO EXEC] Toggled GP25 onboard LED -> ${nextLed ? 'HIGH (1)' : 'LOW (0)'}`);
      setStimulus(prev => ({ ...prev, buttonPressed: nextLed }));
    } else if (input.includes('adc.read_u16()')) {
      newEntries.push(`[ADC READ] Result: ${simState.potentiometerState.rawU16} (${simState.potentiometerState.voltage}V)`);
    } else if (input.includes('dht.temperature()')) {
      newEntries.push(`[DHT READ] Temperature: ${simState.dht22State.temperatureC.toFixed(1)}°C`);
    } else if (input.includes('dht.humidity()')) {
      newEntries.push(`[DHT READ] Humidity: ${simState.dht22State.humidityPct.toFixed(1)}%`);
    } else {
      newEntries.push(`RP2040: Evaluated "${input}" -> OK`);
    }

    setReplHistory(prev => [...prev, ...newEntries]);
    setReplInput('');
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 border-t border-slate-800 text-slate-100 font-mono text-xs overflow-hidden">
      
      {/* Header Bar */}
      <div className="h-10 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-xs">
            MicroPython Wokwi Simulation & REPL
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
            RP2040 133MHz
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('wokwi')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'wokwi' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Wokwi Visual Stage</span>
          </button>
          <button
            onClick={() => setActiveTab('repl')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'repl' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive REPL</span>
          </button>
          <button
            onClick={() => setActiveTab('peripherals')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'peripherals' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Hardware Telemetry</span>
          </button>
          <button
            onClick={() => setActiveTab('oled')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'oled' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ScreenShare className="w-3.5 h-3.5" />
            <span>SSD1306 OLED</span>
          </button>

          {onDownloadCode && (
            <button
              onClick={onDownloadCode}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-all ml-1 cursor-pointer"
              title="Download Python .py script"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Tab Views */}
      <div className="flex-1 overflow-hidden">
        
        {/* Tab 1: Wokwi Visual Stage */}
        {activeTab === 'wokwi' && (
          <MicroPythonWokwiView
            problem={problem}
            simState={simState}
            onStimulusChange={(newStim) => setStimulus(prev => ({ ...prev, ...newStim }))}
          />
        )}

        {/* Tab 2: REPL Terminal */}
        {activeTab === 'repl' && (
          <div className="h-full flex flex-col p-3 space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>MicroPython v1.22.0 Interactive Shell (RP2040 USB-CDC)</span>
              </div>
              <button
                onClick={() => setReplHistory(['MicroPython REPL reset.'])}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] cursor-pointer"
              >
                Clear
              </button>
            </div>

            <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-xs overflow-y-auto space-y-1 min-h-[160px]">
              {replHistory.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith('>>>')
                      ? 'text-amber-400 font-bold'
                      : line.includes('PASS') || line.includes('Verified')
                      ? 'text-emerald-400 font-semibold'
                      : line.includes('FAIL') || line.includes('ERROR')
                      ? 'text-rose-400 font-semibold'
                      : line.includes('ADC') || line.includes('DHT') || line.includes('OLED')
                      ? 'text-sky-300'
                      : 'text-slate-300'
                  }
                >
                  {line}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendRepl} className="flex gap-2">
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg px-2 text-amber-400 font-bold">
                &gt;&gt;&gt;
              </div>
              <input
                type="text"
                value={replInput}
                onChange={(e) => setReplInput(e.target.value)}
                placeholder="led.toggle(), adc.read_u16(), dht.temperature()..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold flex items-center gap-1.5 shadow transition-colors cursor-pointer font-sans"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Eval</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: Hardware Telemetry */}
        {activeTab === 'peripherals' && (
          <div className="h-full p-3 overflow-y-auto space-y-3 font-sans">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              Raspberry Pi Pico (RP2040) Hardware Peripheral Status
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Onboard LED (GP25) */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>ONBOARD LED (GP25)</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${simState.onboardLed.isOn ? 'bg-emerald-400 animate-pulse shadow-md shadow-emerald-400/50' : 'bg-slate-700'}`} />
                </div>
                <div className="text-sm font-bold text-white mt-1 font-mono">
                  State: {simState.onboardLed.isOn ? 'HIGH (3.3V ON)' : 'LOW (0V OFF)'}
                </div>
                <button
                  onClick={() => setStimulus(prev => ({ ...prev, buttonPressed: !simState.onboardLed.isOn }))}
                  className="mt-2 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono w-full cursor-pointer"
                >
                  Toggle GP25 Pin
                </button>
              </div>

              {/* ADC Potentiometer (GP26 / ADC0) */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono">
                <div className="text-[10px] text-slate-400">ADC0 (GP26) 16-Bit</div>
                <div className="text-sm font-bold text-sky-400 mt-1 tabular-nums">
                  {simState.potentiometerState.rawU16} / 65535 <span className="text-xs text-slate-400">({simState.potentiometerState.voltage.toFixed(2)}V)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-sky-500 h-full rounded-full transition-all" style={{ width: `${(simState.potentiometerState.rawU16 / 65535) * 100}%` }} />
                </div>
                <div className="text-[9px] text-slate-500 mt-1">3.3V Analog Input Range</div>
              </div>

              {/* PWM Servo (GP15) */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono">
                <div className="text-[10px] text-slate-400">PWM SERVO (GP15)</div>
                <div className="text-sm font-bold text-amber-400 mt-1">
                  Angle: {simState.servoState.angleDeg}°
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full transition-all" style={{ width: `${(simState.servoState.angleDeg / 180) * 100}%` }} />
                </div>
                <div className="text-[9px] text-slate-500 mt-1">50 Hz PWM Frequency ({simState.servoState.dutyNs} ns)</div>
              </div>
            </div>

            {/* I2C / SPI Bus Status */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2 font-mono">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Hardware Communication Bus Diagnostics
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <div className="font-bold text-teal-400">I2C0 Bus (SDA: GP4, SCL: GP5)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Found device at 0x3C (SSD1306 128x64 OLED)</div>
                  <div className="text-[9px] text-emerald-400 mt-0.5">● Clock: 400 kHz Fast-Mode</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <div className="font-bold text-purple-400">SPI0 Bus (MOSI: GP19, MISO: GP16, SCK: GP18)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Target: MicroSD Card / Flash Module</div>
                  <div className="text-[9px] text-emerald-400 mt-0.5">● Clock: 10 MHz Baud</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: I2C SSD1306 OLED Display Simulator */}
        {activeTab === 'oled' && (
          <div className="h-full p-4 overflow-y-auto space-y-3 font-sans">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>SSD1306 128x64 Monochrome I2C OLED Virtual Display</span>
              <span className="text-teal-400">I2C Address: 0x3C</span>
            </div>

            {/* OLED Glass Canvas Box */}
            <div className="bg-black border-4 border-slate-800 rounded-xl p-4 shadow-2xl max-w-sm mx-auto font-mono text-sky-400 text-xs">
              <div className="border border-sky-500/30 p-3 rounded bg-[#020d18] min-h-[120px] flex flex-col justify-between">
                <div className="border-b border-sky-500/20 pb-1 flex justify-between text-[10px]">
                  <span>MICROPYTHON</span>
                  <span>128x64</span>
                </div>
                <div className="py-2 space-y-1">
                  {simState.oledState.lines.map((line, idx) => (
                    <div key={idx} className="font-bold text-sky-300 truncate">
                      {line}
                    </div>
                  ))}
                </div>
                <div className="text-[10px] flex justify-between border-t border-sky-500/20 pt-1">
                  <span>ADC: {simState.potentiometerState.voltage.toFixed(2)}V</span>
                  <span>LED: {simState.onboardLed.isOn ? 'ON' : 'OFF'}</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
