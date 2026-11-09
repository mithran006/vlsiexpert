import React, { useState, useMemo } from 'react';
import { Clock, Zap, AlertTriangle, CheckCircle2, Sliders, Activity, Info, X, RotateCcw, ArrowRight, ShieldCheck, HelpCircle, Layers, Cpu } from 'lucide-react';

interface StaTimingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FoundryPreset {
  name: string;
  node: string;
  description: string;
  freqMhz: number;
  tLaunch: number; // ns
  tCq: number;     // ns
  tComb: number;   // ns
  tSetup: number;  // ns
  tHold: number;   // ns
  tCapt: number;   // ns
  tJitter: number; // ns
}

const FOUNDRY_PRESETS: FoundryPreset[] = [
  {
    name: 'TSMC N3 High-Performance AI Core',
    node: '3nm FinFET / GAAFET',
    description: 'Ultra-fast sub-nanosecond clock period datapath with tight setup/hold margins.',
    freqMhz: 1800, // 555ps period
    tLaunch: 0.05,
    tCq: 0.08,
    tComb: 0.28,
    tSetup: 0.06,
    tHold: 0.04,
    tCapt: 0.07,
    tJitter: 0.02
  },
  {
    name: 'Intel 18A High-Density Datapath',
    node: '1.8nm RibbonFET + PowerVia',
    description: 'Backside power delivery network with minimized IR drop and balanced clock tree.',
    freqMhz: 2400, // 416ps period
    tLaunch: 0.04,
    tCq: 0.06,
    tComb: 0.20,
    tSetup: 0.05,
    tHold: 0.03,
    tCapt: 0.05,
    tJitter: 0.015
  },
  {
    name: '28nm Ultra-Low-Power MCU',
    node: '28nm Planar CMOS',
    description: 'Microcontroller design with moderate frequency and relaxed timing constraints.',
    freqMhz: 200, // 5ns period
    tLaunch: 0.25,
    tCq: 0.45,
    tComb: 2.80,
    tSetup: 0.35,
    tHold: 0.20,
    tCapt: 0.30,
    tJitter: 0.08
  },
  {
    name: 'Xilinx UltraScale+ FPGA DSP Slice',
    node: '16nm FinFET FPGA',
    description: 'Hardware FPGA DSP48E2 slice pipelined MAC accumulator datapath.',
    freqMhz: 650, // 1.538ns period
    tLaunch: 0.12,
    tCq: 0.22,
    tComb: 0.85,
    tSetup: 0.15,
    tHold: 0.08,
    tCapt: 0.14,
    tJitter: 0.04
  }
];

export const StaTimingCalculatorModal: React.FC<StaTimingCalculatorModalProps> = ({
  isOpen,
  onClose
}) => {
  // Timing Parameters (in nanoseconds, unless specified)
  const [freqMhz, setFreqMhz] = useState<number>(1000); // 1.000 ns clock period
  const [tLaunch, setTLaunch] = useState<number>(0.10);  // Clock tree launch latency
  const [tCq, setTCq] = useState<number>(0.15);          // Flop Clock-to-Q delay
  const [tComb, setTComb] = useState<number>(0.55);      // Combinational logic delay
  const [tSetup, setTSetup] = useState<number>(0.12);    // Setup requirement
  const [tHold, setTHold] = useState<number>(0.08);      // Hold requirement
  const [tCapt, setTCapt] = useState<number>(0.12);      // Clock tree capture latency
  const [tJitter, setTJitter] = useState<number>(0.03);  // Clock uncertainty / jitter

  const [activeTab, setActiveTab] = useState<'calculator' | 'theory' | 'remediation'>('calculator');
  const [selectedPreset, setSelectedPreset] = useState<string>('');

  // Clock Period calculation
  const tClk = 1000 / Math.max(freqMhz, 1); // in ns

  // Static Timing Analysis Mathematical Equations
  // Data Arrival Path = T_launch + T_cq + T_comb
  const dataArrival = useMemo(() => {
    return tLaunch + tCq + tComb;
  }, [tLaunch, tCq, tComb]);

  // Setup Required Time = T_capt + T_clk - T_setup - T_jitter
  const dataRequiredSetup = useMemo(() => {
    return tCapt + tClk - tSetup - tJitter;
  }, [tCapt, tClk, tSetup, tJitter]);

  // Setup Slack = Data Required (Setup) - Data Arrival
  const setupSlack = useMemo(() => {
    return dataRequiredSetup - dataArrival;
  }, [dataRequiredSetup, dataArrival]);

  // Hold Required Time = T_capt + T_hold + T_jitter
  const dataRequiredHold = useMemo(() => {
    return tCapt + tHold + tJitter;
  }, [tCapt, tHold, tJitter]);

  // Hold Slack = Data Arrival - Data Required (Hold)
  const holdSlack = useMemo(() => {
    return dataArrival - dataRequiredHold;
  }, [dataArrival, dataRequiredHold]);

  // Clock Skew = T_capt - T_launch
  const tSkew = useMemo(() => {
    return tCapt - tLaunch;
  }, [tCapt, tLaunch]);

  // Maximum Frequency before Setup Violation:
  // T_min_period = T_launch + T_cq + T_comb + T_setup + T_jitter - T_capt
  const minPeriod = useMemo(() => {
    return dataArrival + tSetup + tJitter - tCapt;
  }, [dataArrival, tSetup, tJitter, tCapt]);

  const fMaxMhz = useMemo(() => {
    if (minPeriod <= 0) return 99999;
    return Math.round(1000 / minPeriod);
  }, [minPeriod]);

  const isSetupMet = setupSlack >= 0;
  const isHoldMet = holdSlack >= 0;

  // Apply Foundry Technology Preset
  const handleApplyPreset = (preset: FoundryPreset) => {
    setSelectedPreset(preset.name);
    setFreqMhz(preset.freqMhz);
    setTLaunch(preset.tLaunch);
    setTCq(preset.tCq);
    setTComb(preset.tComb);
    setTSetup(preset.tSetup);
    setTHold(preset.tHold);
    setTCapt(preset.tCapt);
    setTJitter(preset.tJitter);
  };

  const handleReset = () => {
    setSelectedPreset('');
    setFreqMhz(1000);
    setTLaunch(0.10);
    setTCq(0.15);
    setTComb(0.55);
    setTSetup(0.12);
    setTHold(0.08);
    setTCapt(0.12);
    setTJitter(0.03);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Clock className="w-5 h-5 font-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-white tracking-tight">
                  Static Timing Analysis (STA) & Slack Calculator
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Interactive EDA Tool
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Real-time setup/hold margin solver, clock skew modeling, and Fmax timing closure.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5 border border-slate-700"
              title="Reset Parameters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Navigation Tabs */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between gap-4 overflow-x-auto text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'calculator'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive STA Workbench</span>
            </button>

            <button
              onClick={() => setActiveTab('theory')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'theory'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Mathematical Equations</span>
            </button>

            <button
              onClick={() => setActiveTab('remediation')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'remediation'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Timing Fixes & Buffer Insertion</span>
            </button>
          </div>

          {/* Foundry Preset Selector */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] text-slate-500 font-mono font-semibold">Foundry Node:</span>
            <div className="flex items-center gap-1">
              {FOUNDRY_PRESETS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => handleApplyPreset(p)}
                  className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all border ${
                    selectedPreset === p.name
                      ? 'bg-purple-600 text-white border-purple-400 shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:border-slate-600'
                  }`}
                  title={p.description}
                >
                  {p.node.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'calculator' && (
            <>
              {/* Top Timing Slacks KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Setup Slack Card */}
                <div className={`p-4 rounded-xl border transition-all ${
                  isSetupMet
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-500/50 text-rose-300 shadow-lg shadow-rose-950/50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      {isSetupMet ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />}
                      Setup Slack (T_setup)
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                      isSetupMet ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/30 text-rose-200 border border-rose-500/50'
                    }`}>
                      {isSetupMet ? 'MET' : 'VIOLATION'}
                    </span>
                  </div>
                  <div className="text-2xl font-black font-mono">
                    {setupSlack >= 0 ? '+' : ''}{setupSlack.toFixed(3)} ns
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Req: {dataRequiredSetup.toFixed(3)}ns | Arr: {dataArrival.toFixed(3)}ns
                  </div>
                </div>

                {/* Hold Slack Card */}
                <div className={`p-4 rounded-xl border transition-all ${
                  isHoldMet
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-500/50 text-rose-300 shadow-lg shadow-rose-950/50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      {isHoldMet ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />}
                      Hold Slack (T_hold)
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                      isHoldMet ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/30 text-rose-200 border border-rose-500/50'
                    }`}>
                      {isHoldMet ? 'MET' : 'VIOLATION'}
                    </span>
                  </div>
                  <div className="text-2xl font-black font-mono">
                    {holdSlack >= 0 ? '+' : ''}{holdSlack.toFixed(3)} ns
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Arr: {dataArrival.toFixed(3)}ns | Req: {dataRequiredHold.toFixed(3)}ns
                  </div>
                </div>

                {/* Maximum Operating Frequency Card */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-amber-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400" />
                      Max Frequency (Fmax)
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      T_period: {tClk.toFixed(3)}ns
                    </span>
                  </div>
                  <div className="text-2xl font-black font-mono text-amber-400">
                    {fMaxMhz > 0 && fMaxMhz < 99999 ? `${fMaxMhz} MHz` : 'Timing Broken'}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Clock Skew: {tSkew >= 0 ? '+' : ''}{tSkew.toFixed(3)}ns ({tSkew >= 0 ? 'Positive' : 'Negative'})
                  </div>
                </div>

              </div>

              {/* Graphical Timing Waveform & Path Diagram */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-3 flex items-center justify-between">
                  <span>Register-to-Register Static Timing Path Diagram</span>
                  <span className="text-slate-500">Launch Flop (FF1) ➔ Combinational Cloud ➔ Capture Flop (FF2)</span>
                </div>

                {/* SVG Circuit Path Illustration */}
                <svg viewBox="0 0 860 140" className="w-full h-auto select-none">
                  {/* Background Grid */}
                  <rect width="860" height="140" fill="#090d16" rx="8" />

                  {/* Clock Source */}
                  <circle cx="50" cy="70" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <text x="50" y="74" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CLK</text>

                  {/* Launch Clock Tree Wire */}
                  <line x1="66" y1="70" x2="160" y2="40" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
                  <text x="110" y="48" fill="#38bdf8" fontSize="9" fontFamily="monospace">T_launch: {tLaunch}ns</text>

                  {/* Capture Clock Tree Wire */}
                  <line x1="66" y1="70" x2="680" y2="100" stroke="#a855f7" strokeWidth="2" strokeDasharray="3,3" />
                  <text x="350" y="115" fill="#a855f7" fontSize="9" fontFamily="monospace">T_capt: {tCapt}ns (Skew: {tSkew >= 0 ? '+' : ''}{tSkew.toFixed(2)}ns)</text>

                  {/* FF1 (Launch DFF) */}
                  <rect x="160" y="20" width="80" height="75" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <text x="200" y="42" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FF1 (Launch)</text>
                  <text x="175" y="75" fill="#94a3b8" fontSize="9" fontFamily="monospace">D</text>
                  <text x="225" y="75" fill="#34d399" fontSize="9" fontFamily="monospace">Q</text>
                  <polygon points="160,55 170,60 160,65" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

                  {/* T_cq Datapath Wire */}
                  <line x1="240" y1="70" x2="310" y2="70" stroke="#34d399" strokeWidth="2.5" />
                  <text x="275" y="62" fill="#34d399" fontSize="9" fontFamily="monospace" textAnchor="middle">T_cq: {tCq}ns</text>

                  {/* Combinational Logic Cloud */}
                  <g transform="translate(310, 30)">
                    <polygon
                      points="20,5 180,5 210,40 180,75 20,75 50,40"
                      fill="#1e1b4b"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                    />
                    <text x="115" y="38" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      COMBINATIONAL CLOUD
                    </text>
                    <text x="115" y="52" fill="#fde68a" fontSize="10" fontFamily="monospace" textAnchor="middle">
                      T_comb = {tComb.toFixed(3)} ns
                    </text>
                  </g>

                  {/* Datapath to FF2 */}
                  <line x1="520" y1="70" x2="600" y2="70" stroke="#f59e0b" strokeWidth="2.5" />
                  <circle cx="600" cy="70" r="3" fill="#f59e0b" />

                  {/* FF2 (Capture DFF) */}
                  <rect x="600" y="20" width="80" height="75" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                  <text x="640" y="42" fill="#a855f7" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FF2 (Capture)</text>
                  <text x="615" y="75" fill="#f59e0b" fontSize="9" fontFamily="monospace">D</text>
                  <text x="665" y="75" fill="#94a3b8" fontSize="9" fontFamily="monospace">Q</text>
                  <polygon points="600,55 610,60 600,65" fill="none" stroke="#a855f7" strokeWidth="1.5" />

                  {/* Status Indicator */}
                  <g transform="translate(700, 30)">
                    <rect
                      width="145"
                      height="60"
                      rx="8"
                      fill={isSetupMet && isHoldMet ? '#064e3b' : '#881337'}
                      stroke={isSetupMet && isHoldMet ? '#10b981' : '#f43f5e'}
                      strokeWidth="1.5"
                    />
                    <text x="72" y="26" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="black" textAnchor="middle">
                      {isSetupMet && isHoldMet ? 'TIMING MET' : 'TIMING VIOLATION'}
                    </text>
                    <text x="72" y="44" fill={isSetupMet && isHoldMet ? '#a7f3d0' : '#fecdd3'} fontSize="9" fontFamily="monospace" textAnchor="middle">
                      Setup: {setupSlack.toFixed(2)}ns | Hold: {holdSlack.toFixed(2)}ns
                    </text>
                  </g>
                </svg>
              </div>

              {/* Parameter Sliders Controls Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-5 rounded-2xl border border-slate-800">
                
                {/* Column 1: Clock & Launch Path Parameters */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sky-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Clock Network & Source Flop Parameters
                  </h3>

                  {/* Frequency Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-slate-300">Clock Frequency (f_clk):</span>
                      <span className="text-amber-400 font-bold">{freqMhz} MHz (T = {tClk.toFixed(3)} ns)</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="3500"
                      step="25"
                      value={freqMhz}
                      onChange={(e) => setFreqMhz(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>

                  {/* Launch Clock Latency */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-slate-300">Launch Clock Path Latency (T_launch):</span>
                      <span className="text-sky-400 font-bold">{tLaunch.toFixed(3)} ns</span>
                    </div>
                    <input
                      type="range"
                      min="0.01"
                      max="1.50"
                      step="0.01"
                      value={tLaunch}
                      onChange={(e) => setTLaunch(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                    />
                  </div>

                  {/* Clock-to-Q */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-slate-300">Flip-Flop Clock-to-Q (T_cq):</span>
                      <span className="text-amber-300 font-bold">{tCq.toFixed(3)} ns</span>
                    </div>
                    <input
                      type="range"
                      min="0.02"
                      max="1.00"
                      step="0.01"
                      value={tCq}
                      onChange={(e) => setTCq(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>

                  {/* Combinational Logic Delay */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-slate-300">Combinational Path Delay (T_comb):</span>
                      <span className="text-amber-400 font-bold">{tComb.toFixed(3)} ns</span>
                    </div>
                    <input
                      type="range"
                      min="0.01"
                      max="4.00"
                      step="0.01"
                      value={tComb}
                      onChange={(e) => setTComb(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>
                </div>

                {/* Column 2: Capture Clock & Constraints */}
                <div className="space-y-4">
                  <h3 className="font-bold text-purple-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Capture Flop & Uncertainty Constraints
                  </h3>

                  {/* Capture Clock Latency */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-slate-300">Capture Clock Path Latency (T_capt):</span>
                      <span className="text-purple-400 font-bold">{tCapt.toFixed(3)} ns</span>
                    </div>
                    <input
                      type="range"
                      min="0.01"
                      max="1.50"
                      step="0.01"
                      value={tCapt}
                      onChange={(e) => setTCapt(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  {/* Setup Time Requirement */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-slate-300">Flop Setup Time Requirement (T_setup):</span>
                      <span className="text-rose-400 font-bold">{tSetup.toFixed(3)} ns</span>
                    </div>
                    <input
                      type="range"
                      min="0.01"
                      max="0.80"
                      step="0.01"
                      value={tSetup}
                      onChange={(e) => setTSetup(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                    />
                  </div>

                  {/* Hold Time Requirement */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-slate-300">Flop Hold Time Requirement (T_hold):</span>
                      <span className="text-blue-400 font-bold">{tHold.toFixed(3)} ns</span>
                    </div>
                    <input
                      type="range"
                      min="0.01"
                      max="0.80"
                      step="0.01"
                      value={tHold}
                      onChange={(e) => setTHold(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>

                  {/* Clock Uncertainty & Jitter */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-slate-300">Clock Jitter & Uncertainty (T_unc):</span>
                      <span className="text-emerald-400 font-bold">{tJitter.toFixed(3)} ns</span>
                    </div>
                    <input
                      type="range"
                      min="0.00"
                      max="0.30"
                      step="0.005"
                      value={tJitter}
                      onChange={(e) => setTJitter(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>
                </div>

              </div>
            </>
          )}

          {activeTab === 'theory' && (
            <div className="space-y-5 bg-slate-950 p-6 rounded-xl border border-slate-800 leading-relaxed text-slate-300 text-xs">
              <h3 className="text-sm font-bold text-amber-400 mb-2">Static Timing Analysis Mathematical Formulations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                  <h4 className="font-bold text-white mb-1.5 text-xs text-emerald-400">1. Setup Time Equation (Max Delay Constraint)</h4>
                  <p className="text-slate-400 mb-2">
                    Setup timing verifies that data reaches the destination flip-flop in time before the active clock edge.
                  </p>
                  <div className="p-2.5 rounded bg-black/60 font-mono text-[11px] text-amber-300 mb-2 border border-slate-800">
                    T_arrival = T_launch + T_cq + T_comb<br />
                    T_required = T_capt + T_clk - T_setup - T_jitter<br />
                    Slack_setup = T_required - T_arrival ≥ 0
                  </div>
                  <p className="text-[11px] text-slate-400">
                    <strong>Remedy for Setup Violation:</strong> Reduce T_comb via logic restructuring/pipelining, upsize driving logic cells, or lower clock frequency (f_clk).
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                  <h4 className="font-bold text-white mb-1.5 text-xs text-blue-400">2. Hold Time Equation (Min Delay Constraint)</h4>
                  <p className="text-slate-400 mb-2">
                    Hold timing verifies that old data remains stable after the active clock edge so the receiving flip-flop does not latch new data prematurely.
                  </p>
                  <div className="p-2.5 rounded bg-black/60 font-mono text-[11px] text-sky-300 mb-2 border border-slate-800">
                    T_arrival = T_launch + T_cq + T_comb<br />
                    T_required = T_capt + T_hold + T_jitter<br />
                    Slack_hold = T_arrival - T_required ≥ 0
                  </div>
                  <p className="text-[11px] text-slate-400">
                    <strong>Remedy for Hold Violation:</strong> Insert delay buffer cells in the combinational datapath. <em>Hold violations are frequency-independent!</em>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-amber-300 mb-1.5 text-xs">3. Clock Skew and Useful Skew</h4>
                <p className="text-slate-400 mb-2">
                  Skew = T_capture - T_launch.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300 text-[11px]">
                  <li><strong>Positive Skew (T_capt &gt; T_launch):</strong> Helps setup timing margins by giving the datapath extra time, but tightens hold timing margins.</li>
                  <li><strong>Negative Skew (T_capt &lt; T_launch):</strong> Protects against hold violations, but eats into setup timing budgets.</li>
                  <li><strong>Useful Skew:</strong> Deliberately tuning clock tree buffer delays to borrow slack from non-critical paths to fix critical timing paths.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'remediation' && (
            <div className="space-y-4 bg-slate-950 p-6 rounded-xl border border-slate-800 text-slate-300 text-xs">
              <h3 className="text-sm font-bold text-amber-400 mb-1">Industry Physical Design Remediation Strategies</h3>
              <p className="text-slate-400 text-xs mb-3">
                How ASIC Physical Design & Timing Closure engineers resolve negative slack during Cadence Tempus / Synopsys PrimeTime runs:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-900/80 border border-rose-500/20">
                  <h4 className="font-bold text-rose-400 text-xs mb-1">Fixing Setup Violations (Slack &lt; 0)</h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-slate-300 text-[11px]">
                    <li><strong>Gate Upsizing:</strong> Replace standard drive cells (X1) with high drive strength cells (X4/X8) to reduce output slew and RC delay.</li>
                    <li><strong>Low-Vt Cell Swapping:</strong> Swap Slow Nominal-Vt (SVT) cells with Fast Low-Vt (LVT/ULVT) cells along the critical path (with trade-off in leakage power).</li>
                    <li><strong>RTL Pipelining:</strong> Insert intermediate register stages across deep combinational multiplier/adder trees.</li>
                    <li><strong>Logic Restructuring:</strong> Push late-arriving signals closer to the output of MUX/logic trees.</li>
                    <li><strong>Useful Skew Borrowing:</strong> Delay the capture clock tree edge if the subsequent pipeline stage has positive slack margin.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-slate-900/80 border border-blue-500/20">
                  <h4 className="font-bold text-blue-400 text-xs mb-1">Fixing Hold Violations (Slack &lt; 0)</h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-slate-300 text-[11px]">
                    <li><strong>Buffer Tree Insertion:</strong> Insert back-to-back non-inverting buffers (BUFFD2/BUFFD4) directly into the short combinational datapath.</li>
                    <li><strong>High-Vt Cell Swapping:</strong> Replace fast Low-Vt cells with slower High-Vt (HVT) cells on min-delay paths to increase delay and reduce static power.</li>
                    <li><strong>Gate Downsizing:</strong> Downsize driving gates (e.g. from X4 to X1) to deliberately increase cell delay on fast hold paths.</li>
                    <li><strong>Clock Tree Balancing:</strong> Reduce clock skew variation by inserting balanced clock tree synthesis (CTS) repeaters.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
