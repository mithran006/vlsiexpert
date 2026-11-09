import React, { useState } from 'react';
import {
  Terminal, Cpu, CheckCircle2, XCircle, Code, Play, Download,
  Layers, Zap, Activity
} from 'lucide-react';
import { Problem, SimulationResult } from '../../types';
import { getEmbeddedCProfile } from '../../services/nonHdlEvaluationService';
import { CvRoboticsLiveCam } from './CvRoboticsLiveCam';
import { ArduinoConsole } from './ArduinoConsole';
import { Mnemonics8051Console } from './Mnemonics8051Console';
import { MicroPythonConsole } from './MicroPythonConsole';
import { RtosTaskConsole } from './RtosTaskConsole';

interface EmbeddedConsoleProps {
  simulationResult: SimulationResult | null;
  code?: string;
  problem: Problem;
  onDownloadCode?: () => void;
  isSimulating?: boolean;
}

export const EmbeddedConsole: React.FC<EmbeddedConsoleProps> = ({
  simulationResult,
  code = '',
  problem,
  onDownloadCode,
  isSimulating
}) => {
  // 1. Computer Vision & Robotics: ONLY LIVE CAMERA & ROBOTICS VISION ENGINE
  if (problem.topic === 'cv_robotics') {
    return (
      <CvRoboticsLiveCam
        problem={problem}
        simulationResult={simulationResult}
        code={code}
        onDownloadCode={onDownloadCode}
        isSimulating={isSimulating}
      />
    );
  }

  // 2. Arduino C/C++: Dedicated Serial Monitor & ATmega328P Pin State Board
  if (problem.topic === 'arduino') {
    return (
      <ArduinoConsole
        problem={problem}
        simulationResult={simulationResult}
        code={code}
        onDownloadCode={onDownloadCode}
      />
    );
  }

  // 3. Mnemonics (8051 Microcontroller Assembly): Dedicated SFRs, Internal RAM & Microcode
  if (problem.topic === 'mnemonics') {
    return (
      <Mnemonics8051Console
        problem={problem}
        simulationResult={simulationResult}
        code={code}
        onDownloadCode={onDownloadCode}
      />
    );
  }

  // 4. MicroPython Hardware: Dedicated REPL & RP2040 Hardware Peripherals
  if (problem.topic === 'python_hw') {
    return (
      <MicroPythonConsole
        problem={problem}
        simulationResult={simulationResult}
        code={code}
        onDownloadCode={onDownloadCode}
      />
    );
  }

  // 5. RTOS (FreeRTOS & Zephyr): Dedicated Preemptive Scheduler TCB Table & IPC Inspector
  if (problem.topic === 'rtos_problems') {
    return (
      <RtosTaskConsole
        problem={problem}
        simulationResult={simulationResult}
        code={code}
        onDownloadCode={onDownloadCode}
      />
    );
  }

  // 6. Embedded C (ARM Cortex-M / AVR GCC): Dedicated Hardware Peripheral Register & Memory Dump
  return <EmbeddedCConsole problem={problem} simulationResult={simulationResult} code={code} onDownloadCode={onDownloadCode} />;
};

/**
 * High-performance GCC ARM Cortex-M / AVR firmware execution console with peripheral registers
 */
const EmbeddedCConsole: React.FC<{
  problem: Problem;
  simulationResult: SimulationResult | null;
  code?: string;
  onDownloadCode?: () => void;
}> = ({ problem, simulationResult, code = '', onDownloadCode }) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'registers' | 'memory'>('terminal');

  const logs = simulationResult?.logs || [];
  const passed = simulationResult?.passed ?? false;
  const profile = getEmbeddedCProfile(problem, code);

  return (
    <div className="h-full flex flex-col bg-slate-950 border-t border-slate-800 text-slate-100 font-mono text-xs overflow-hidden">
      {/* Header Bar */}
      <div className="h-10 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-1 rounded bg-teal-500/20 text-teal-400 border border-teal-500/30 shrink-0">
            <Code className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-xs truncate">
            {profile.peripheralName}
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30 shrink-0">
            {profile.clockMHz}MHz
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'terminal' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Firmware Terminal
          </button>
          <button
            onClick={() => setActiveTab('registers')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'registers' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            MCU Peripheral Registers
          </button>
          <button
            onClick={() => setActiveTab('memory')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'memory' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            SRAM Memory Dump
          </button>

          {onDownloadCode && (
            <button
              onClick={onDownloadCode}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-all ml-1"
              title="Download C source (.c)"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {activeTab === 'terminal' && (
          <div className="space-y-1.5">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-sans font-bold flex items-center justify-between pb-1 border-b border-slate-800">
              <span>GCC Compiler & System Runtime Execution Logs</span>
              <span className={`flex items-center gap-1 font-bold ${
                !simulationResult ? 'text-slate-400' : passed ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {!simulationResult ? (
                  <>
                    <Activity className="w-3.5 h-3.5 text-teal-400" />
                    <span>IDLE / READY</span>
                  </>
                ) : passed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>PASSED</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-3.5 h-3.5" />
                    <span>FAILED</span>
                  </>
                )}
              </span>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-xs overflow-y-auto max-h-[360px] space-y-1 shadow-inner">
              {logs.length === 0 ? (
                <div className="py-6 text-center text-slate-500">
                  Click "Run Simulation" in the code editor to compile and execute on target hardware.
                </div>
              ) : (
                logs.map((log, index) => {
                  const isErr = log.includes('ERROR') || log.includes('FAIL');
                  const isPass = log.includes('PASS') || log.includes('SUCCESS');
                  const isHeader = log.startsWith('[') && log.includes(']');
                  return (
                    <div
                      key={index}
                      className={`p-1.5 rounded transition-all leading-relaxed ${
                        isErr
                          ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                          : isPass
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold'
                          : isHeader
                          ? 'bg-slate-950 text-slate-300 border border-slate-800'
                          : 'text-slate-400 pl-4'
                      }`}
                    >
                      {log}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {activeTab === 'registers' && (
          <div className="space-y-3 font-sans">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono flex items-center justify-between">
              <span>Hardware Memory-Mapped Registers: {profile.peripheralName}</span>
              <span className="text-teal-400 font-bold">{profile.clockMHz} MHz Clock</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {profile.registers.map((reg, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono">
                  <div className="text-[10px] text-slate-500 font-bold truncate">{reg.name} ({reg.desc})</div>
                  <div className="text-lg font-bold text-teal-400 mt-0.5 truncate">{reg.hex}</div>
                  <div className="text-[10px] text-slate-400 mt-1 line-clamp-2">{reg.note}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'memory' && (
          <div className="space-y-2 font-mono">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider">
              Internal SRAM Memory Hex Dump (0x20000000 - 0x2000003F)
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 overflow-x-auto text-[10px]">
              <div className="text-slate-500 pb-1 mb-1 border-b border-slate-800">
                ADDR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00 01 02 03 04 05 06 07 &nbsp;&nbsp; ASCII
              </div>
              <div className="text-slate-300 space-y-1">
                {profile.memoryDump.map((m, idx) => (
                  <div key={idx}>
                    {m.address}: {m.hex} &nbsp;&nbsp; {m.ascii}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
