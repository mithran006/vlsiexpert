import React, { useState } from 'react';
import {
  Cpu, CheckCircle2, XCircle, Download, Activity,
  Layers, Zap, Clock, Terminal
} from 'lucide-react';
import { Problem, SimulationResult } from '../../types';

interface Mnemonics8051ConsoleProps {
  problem: Problem;
  simulationResult: SimulationResult | null;
  code?: string;
  onDownloadCode?: () => void;
}

export const Mnemonics8051Console: React.FC<Mnemonics8051ConsoleProps> = ({
  problem,
  simulationResult,
  code = '',
  onDownloadCode
}) => {
  const [activeTab, setActiveTab] = useState<'sfr' | 'ram' | 'trace'>('sfr');

  const passed = simulationResult?.passed ?? false;
  const logs = simulationResult?.logs || [];

  // Parse code hints for simulated register values
  const upperCode = code.toUpperCase();
  const titleUpper = problem.title.toUpperCase();
  const accVal = titleUpper.includes('ADD') ? 0x9A :
    titleUpper.includes('SUB') ? 0x1E :
    titleUpper.includes('MUL') ? 0x88 :
    titleUpper.includes('DIV') ? 0x05 :
    titleUpper.includes('TRANSFER') || titleUpper.includes('BLOCK') ? 0x55 :
    upperCode.includes('MOV A, #') || upperCode.includes('ADD A,') ? 0x2A : 0x0F;
  const bVal = titleUpper.includes('MUL') ? 0x02 :
    titleUpper.includes('DIV') ? 0x03 :
    upperCode.includes('MUL AB') || upperCode.includes('MOV B,') ? 0x04 : 0x00;
  const cyFlag = titleUpper.includes('CARRY') || upperCode.includes('CY') || upperCode.includes('JC') || upperCode.includes('SETB C');
  const ovFlag = upperCode.includes('OV') || upperCode.includes('SUBB');
  const pFlag = (accVal.toString(2).split('1').length - 1) % 2 !== 0;

  // Working register bank 0 (R0 - R7)
  const registers = [
    { name: 'R0', hex: '0x0F', dec: 15, bin: '00001111' },
    { name: 'R1', hex: '0x40', dec: 64, bin: '01000000' },
    { name: 'R2', hex: '0x05', dec: 5, bin: '00000101' },
    { name: 'R3', hex: '0x00', dec: 0, bin: '00000000' },
    { name: 'R4', hex: '0x12', dec: 18, bin: '00010010' },
    { name: 'R5', hex: '0xAA', dec: 170, bin: '10101010' },
    { name: 'R6', hex: '0x55', dec: 85, bin: '01010101' },
    { name: 'R7', hex: '0xFF', dec: 255, bin: '11111111' }
  ];

  // 8051 Internal RAM (128 bytes, 0x00 - 0x7F)
  const ramRows = [
    { addr: '0x00', bytes: ['0F', '40', '05', '00', '12', 'AA', '55', 'FF'], ascii: '.@...U..' },
    { addr: '0x08', bytes: ['00', '00', '00', '00', '00', '00', '00', '00'], ascii: '........' },
    { addr: '0x10', bytes: ['00', '00', '00', '00', '00', '00', '00', '00'], ascii: '........' },
    { addr: '0x18', bytes: ['00', '00', '00', '00', '00', '00', '00', '00'], ascii: '........' },
    { addr: '0x20', bytes: ['01', '00', '80', '00', '00', '00', '00', '00'], ascii: '........' }, // Bit addressable
    { addr: '0x30', bytes: ['42', '53', '4E', '41', '00', '00', '00', '00'], ascii: 'BSNA....' }, // Scratchpad
    { addr: '0x40', bytes: ['10', '20', '30', '40', '50', '60', '70', '80'], ascii: '..0@P`p.' },
    { addr: '0x50', bytes: ['00', '00', '00', '00', '00', '00', '00', '00'], ascii: '........' }
  ];

  return (
    <div className="h-full flex flex-col bg-slate-950 border-t border-slate-800 text-slate-100 font-mono text-xs overflow-hidden">
      
      {/* 8051 Header Bar */}
      <div className="h-10 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-xs">
            Intel 8051 Microcontroller Architecture & SFR Inspector
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
            12.0 MHz (1µs Cycle)
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('sfr')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'sfr' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Core SFRs & Banks
          </button>
          <button
            onClick={() => setActiveTab('ram')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'ram' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Internal RAM (0x00-0x7F)
          </button>
          <button
            onClick={() => setActiveTab('trace')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'trace' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Execution Trace
          </button>

          {onDownloadCode && (
            <button
              onClick={onDownloadCode}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-all ml-1"
              title="Download 8051 Assembly .asm"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Tab Views */}
      <div className="flex-1 p-3 overflow-y-auto">
        
        {/* Tab 1: Core SFRs & Working Register Banks */}
        {activeTab === 'sfr' && (
          <div className="space-y-3 font-sans">
            
            {/* Primary CPU Registers */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 font-mono">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 font-bold uppercase">ACC (Accumulator)</div>
                <div className="text-base font-bold text-amber-400 mt-0.5">
                  0x{accVal.toString(16).padStart(2, '0').toUpperCase()}
                  <span className="text-xs text-slate-400 font-normal ml-1">({accVal})</span>
                </div>
                <div className="text-[9px] text-slate-500 mt-0.5">Bin: {accVal.toString(2).padStart(8, '0')}</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 font-bold uppercase">B Register (Math)</div>
                <div className="text-base font-bold text-sky-400 mt-0.5">
                  0x{bVal.toString(16).padStart(2, '0').toUpperCase()}
                  <span className="text-xs text-slate-400 font-normal ml-1">({bVal})</span>
                </div>
                <div className="text-[9px] text-slate-500 mt-0.5">Bin: {bVal.toString(2).padStart(8, '0')}</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 font-bold uppercase">DPTR (DPH:DPL)</div>
                <div className="text-base font-bold text-emerald-400 mt-0.5">0x8200</div>
                <div className="text-[9px] text-slate-500 mt-0.5">DPH: 0x82 • DPL: 0x00</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 font-bold uppercase">PC (Program Counter)</div>
                <div className="text-base font-bold text-purple-400 mt-0.5">0x0024</div>
                <div className="text-[9px] text-slate-500 mt-0.5">ROM Address Offset</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 font-bold uppercase">SP (Stack Pointer)</div>
                <div className="text-base font-bold text-teal-400 mt-0.5">0x07</div>
                <div className="text-[9px] text-slate-500 mt-0.5">Points to 0x07 (Bank 0)</div>
              </div>
            </div>

            {/* PSW (Program Status Word) Flag Register */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono flex items-center justify-between">
                <span>PSW Register (Program Status Word - Flags)</span>
                <span className="text-slate-500 font-normal">Byte Address: 0xD0</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 font-mono text-center">
                {[
                  { name: 'CY', label: 'Carry', active: cyFlag },
                  { name: 'AC', label: 'Aux Carry', active: false },
                  { name: 'F0', label: 'Flag 0', active: false },
                  { name: 'RS1', label: 'Reg Bank 1', active: false },
                  { name: 'RS0', label: 'Reg Bank 0', active: false },
                  { name: 'OV', label: 'Overflow', active: ovFlag },
                  { name: '-', label: 'Reserved', active: false },
                  { name: 'P', label: 'Parity', active: pFlag }
                ].map((f, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg border ${
                      f.active
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="text-xs font-bold">{f.name}</div>
                    <div className="text-[9px] uppercase mt-0.5">{f.active ? '1 (SET)' : '0 (CLR)'}</div>
                    <div className="text-[8px] text-slate-500 mt-0.5">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Register Bank 0 (R0 - R7) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                Working Register Bank 0 (RAM 0x00 - 0x07)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 font-mono">
                {registers.map((r) => (
                  <div key={r.name} className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="text-[10px] font-bold text-amber-400">{r.name}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{r.hex}</div>
                    <div className="text-[9px] text-slate-500">{r.dec}d</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Internal RAM Grid */}
        {activeTab === 'ram' && (
          <div className="space-y-2 font-mono">
            <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase">
              <span>8051 On-Chip Internal RAM Dump (128 Bytes: 0x00 - 0x7F)</span>
              <span className="text-amber-400 font-normal">Active Bank: Bank 0 (0x00-0x07)</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 overflow-x-auto text-xs">
              <div className="text-slate-500 pb-1 mb-1.5 border-b border-slate-800">
                ADDR &nbsp; 00 01 02 03 04 05 06 07 &nbsp; ASCII
              </div>
              <div className="space-y-1 text-slate-300">
                {ramRows.map((row) => (
                  <div key={row.addr} className="flex gap-3">
                    <span className="text-amber-400 font-bold">{row.addr}:</span>
                    <span className="text-sky-300">{row.bytes.join(' ')}</span>
                    <span className="text-slate-500 font-mono">[{row.ascii}]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Execution Trace */}
        {activeTab === 'trace' && (
          <div className="space-y-2 font-mono">
            <div className="text-[10px] text-slate-500 uppercase pb-1 border-b border-slate-800">
              8051 Microcode Machine Cycles & Assertion Trace
            </div>

            <div className="space-y-1">
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
