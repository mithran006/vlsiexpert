import React, { useState, useEffect, useMemo } from 'react';
import {
  Terminal, Cpu, CheckCircle2, XCircle, Play, Download,
  Activity, RefreshCw, Send, Zap, Sliders, Layers, LayoutGrid
} from 'lucide-react';
import { Problem, SimulationResult } from '../../types';
import { ArduinoBreadboardView } from './ArduinoBreadboardView';
import {
  simulateArduinoSketch,
  UserStimulus,
  ArduinoSimulationState
} from '../../services/arduinoSimulationEngine';

interface ArduinoConsoleProps {
  problem: Problem;
  simulationResult: SimulationResult | null;
  code?: string;
  onDownloadCode?: () => void;
}

export const ArduinoConsole: React.FC<ArduinoConsoleProps> = ({
  problem,
  simulationResult,
  code = '',
  onDownloadCode
}) => {
  const [activeTab, setActiveTab] = useState<'breadboard' | 'serial' | 'pins' | 'compiler'>('breadboard');
  const [baudRate, setBaudRate] = useState<'9600' | '115200'>('9600');
  const [serialInput, setSerialInput] = useState<string>('');
  const [stimulus, setStimulus] = useState<UserStimulus>({});

  // Compute live Arduino simulation state based on problem, code, and user stimulus
  const simState: ArduinoSimulationState = useMemo(() => {
    return simulateArduinoSketch(problem, code, stimulus);
  }, [problem, code, stimulus]);

  const [serialHistory, setSerialHistory] = useState<string[]>(() => [
    '[ARDUINO UNO @ 16.0MHz] Booting ATmega328P Optiboot bootloader...',
    '[INIT] setup() executed in 0.42 ms',
    '[SERIAL 9600 BAUD] Serial communication initialized.',
    `[STATUS] System running: ${problem.title}`
  ]);

  const passed = simulationResult?.passed ?? false;
  const logs = simulationResult?.logs || [];

  // Sync simulation result logs into serial monitor
  useEffect(() => {
    if (simulationResult) {
      const newLogs = simulationResult.logs.filter(l => 
        l.includes('SERIAL') || l.includes('ARDUINO') || l.includes('PRINT') || l.includes('ASSERTION') || l.includes('PIN')
      );
      if (newLogs.length > 0) {
        setSerialHistory(prev => {
          const combined = [...prev];
          for (const nl of newLogs) {
            if (!combined.includes(nl)) combined.push(nl);
          }
          return combined;
        });
      }
    }
  }, [simulationResult]);

  // Sync simState.serialOutput into serial history
  useEffect(() => {
    if (simState.serialOutput.length > 0) {
      setSerialHistory(prev => {
        const combined = [...prev];
        for (const out of simState.serialOutput) {
          if (!combined.includes(out)) combined.push(out);
        }
        return combined;
      });
    }
  }, [simState.serialOutput]);

  const handleSendSerial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialInput.trim()) return;
    const inputUpper = serialInput.trim().toUpperCase();

    const newEntries = [
      `> ${serialInput}`,
      `[RECV] Echo: "${serialInput}" (Processed by Arduino loop)`
    ];

    if (inputUpper === 'LED_TOGGLE' || inputUpper === 'TOGGLE') {
      newEntries.push('[ARDUINO EXEC] Toggled Pin 13 LED output state.');
    } else if (inputUpper === 'READ_SENSORS' || inputUpper === 'SENSORS') {
      newEntries.push(`[ARDUINO SENSORS] A0 (Pot): ${simState.potentiometerState.rawAdc} | Dist: ${simState.ultrasonicState.distanceCm}cm | Button: ${simState.buttonState.isPressed ? 'HIGH' : 'LOW'}`);
    } else if (inputUpper.startsWith('SERVO ') || inputUpper.startsWith('ANGLE ')) {
      const angle = parseInt(inputUpper.split(' ')[1], 10);
      if (!isNaN(angle)) {
        newEntries.push(`[SERVO EXEC] Moved servo to ${angle} degrees.`);
      }
    }

    setSerialHistory(prev => [...prev, ...newEntries]);
    setSerialInput('');
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 border-t border-slate-800 text-slate-100 font-mono text-xs overflow-hidden">
      
      {/* Arduino Header Bar */}
      <div className="h-10 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-xs">
            Arduino Uno ATmega328P Hardware Simulation
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30">
            16.0 MHz AVR
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('breadboard')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'breadboard' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Interactive Breadboard</span>
          </button>
          <button
            onClick={() => setActiveTab('serial')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'serial' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Serial Monitor</span>
          </button>
          <button
            onClick={() => setActiveTab('pins')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'pins' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Pin Registers</span>
          </button>
          <button
            onClick={() => setActiveTab('compiler')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'compiler' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>AVR-GCC Logs</span>
          </button>

          {onDownloadCode && (
            <button
              onClick={onDownloadCode}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-all ml-1"
              title="Download Arduino .ino sketch"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Tab Views */}
      <div className="flex-1 overflow-hidden">
        
        {/* Tab 1: Interactive Breadboard View */}
        {activeTab === 'breadboard' && (
          <ArduinoBreadboardView
            problem={problem}
            simState={simState}
            onStimulusChange={(newStim) => setStimulus(prev => ({ ...prev, ...newStim }))}
          />
        )}

        {/* Tab 2: Serial Monitor */}
        {activeTab === 'serial' && (
          <div className="h-full flex flex-col p-3 space-y-2">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                <span>COM4 (Arduino Uno USB-CDC) Serial Monitor</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Baud Rate:</span>
                <select
                  value={baudRate}
                  onChange={(e) => setBaudRate(e.target.value as '9600' | '115200')}
                  className="bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-teal-300 font-mono text-[10px]"
                >
                  <option value="9600">9600 baud</option>
                  <option value="115200">115200 baud</option>
                </select>
                <button
                  onClick={() => setSerialHistory([])}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] cursor-pointer"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Serial Terminal Display */}
            <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-xs overflow-y-auto space-y-1 min-h-[160px]">
              {serialHistory.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith('>')
                      ? 'text-teal-400 font-bold'
                      : line.includes('PASS') || line.includes('SUCCESS')
                      ? 'text-emerald-400 font-semibold'
                      : line.includes('FAIL') || line.includes('ERROR')
                      ? 'text-rose-400 font-semibold'
                      : line.includes('SERIAL') || line.includes('SONAR') || line.includes('ADC')
                      ? 'text-sky-300'
                      : 'text-slate-300'
                  }
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Serial Send Input Form */}
            <form onSubmit={handleSendSerial} className="flex gap-2">
              <input
                type="text"
                value={serialInput}
                onChange={(e) => setSerialInput(e.target.value)}
                placeholder="Type command to send to Arduino Serial (e.g. READ_SENSORS, LED_TOGGLE, SERVO 90)..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-mono"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold flex items-center gap-1.5 shadow transition-colors cursor-pointer font-sans"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: ATmega328P Pin Status */}
        {activeTab === 'pins' && (
          <div className="h-full p-3 overflow-y-auto space-y-3 font-sans">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                ATmega328P Port Registers & Pin Voltages
              </span>
              <span className="text-[10px] text-teal-400 font-mono">
                Operating Voltage: 5.00V DC · 16MHz
              </span>
            </div>

            {/* Digital Pins Grid (D0 - D13) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono flex items-center justify-between">
                <span>Digital I/O Pins (Port B & Port D: D0 - D13)</span>
                <span className="text-amber-400 font-normal">~ denotes Timer PWM capability</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 font-mono">
                {Object.entries(simState.digitalPins).map(([pin, info]) => {
                  const isHigh = info.value === 'HIGH';
                  const isPwm = info.pwmValue !== undefined && info.pwmValue > 0;
                  const isBuiltIn = pin === 'D13';

                  return (
                    <div
                      key={pin}
                      className={`p-2 rounded-lg border transition-all ${
                        isHigh
                          ? isBuiltIn
                            ? 'bg-amber-500/10 border-amber-500/50 text-amber-300'
                            : 'bg-teal-500/10 border-teal-500/40 text-teal-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold">{pin} {info.pwmValue !== undefined && '~'}</span>
                        <span className={`w-2 h-2 rounded-full ${isHigh ? (isBuiltIn ? 'bg-amber-400 shadow-sm shadow-amber-400/50' : 'bg-teal-400 shadow-sm shadow-teal-400/50') : 'bg-slate-700'}`} />
                      </div>
                      <div className="text-xs font-bold mt-1">
                        {info.value} {isPwm && `(${info.pwmValue})`}
                      </div>
                      <div className="text-[9px] text-slate-500 mt-0.5">
                        {isBuiltIn ? 'BUILTIN LED' : info.mode} · {info.voltage.toFixed(1)}V
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Analog Pins Grid (A0 - A5) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                Analog Inputs 10-Bit ADC (Port C: A0 - A5: 0-1023)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 font-mono">
                {Object.entries(simState.analogPins).map(([pin, data]) => {
                  const raw = data.analogValue || 0;
                  const pct = Math.round((raw / 1023) * 100);
                  return (
                    <div key={pin} className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-sky-400">{pin}</span>
                        <span className="text-slate-400">{data.voltage.toFixed(2)}V</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-1 tabular-nums">
                        {raw} <span className="text-[10px] text-slate-500">/ 1023</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className="bg-sky-500 h-full rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: AVR-GCC Compiler & Memory Stats */}
        {activeTab === 'compiler' && (
          <div className="h-full p-3 overflow-y-auto space-y-3 font-mono">
            
            {/* Memory Utilization Gauge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] text-slate-500 uppercase">Flash Program Storage Space</div>
                <div className="text-sm font-bold text-teal-400 mt-1">1,482 / 32,256 Bytes (4%)</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-teal-500 h-full rounded-full" style={{ width: '4%' }} />
                </div>
                <div className="text-[9px] text-slate-500 mt-1">Maximum is 32,256 bytes for ATmega328P</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] text-slate-500 uppercase">SRAM Dynamic Memory</div>
                <div className="text-sm font-bold text-sky-400 mt-1">184 / 2,048 Bytes (8%)</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-sky-500 h-full rounded-full" style={{ width: '8%' }} />
                </div>
                <div className="text-[9px] text-slate-500 mt-1">Free dynamic memory: 1,864 bytes</div>
              </div>
            </div>

            {/* Execution logs */}
            <div className="space-y-1">
              <div className="text-[10px] text-slate-500 uppercase pb-1 border-b border-slate-800">
                Compiler Stdout & Hardware Core Execution Trace
              </div>
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`p-1.5 rounded text-xs ${
                    log.includes('FAIL') || log.includes('ERROR')
                      ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                      : log.includes('PASS')
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
