import React, { useState, useMemo } from 'react';
import { Cpu, Download, ZoomIn, ZoomOut, RotateCcw, Layers, GitBranch, ArrowRight, Activity, Check, RefreshCw, Sparkles, Sliders, CircleDot } from 'lucide-react';
import { Problem, SignalConfig, WaveformSample } from '../../types';

interface VivadoSchematicViewerProps {
  problem?: Problem;
  currentSample: WaveformSample;
  signalConfigs: SignalConfig[];
  forcedValues: Record<string, string>;
  onForceSignal: (signalName: string, value: string) => void;
  selectedCycle: number;
  totalCycles: number;
  onSelectCycle: (cycle: number) => void;
  onDownloadSvg: () => void;
}

interface FsmNode {
  id: string;
  name: string;
  x: number;
  y: number;
  output: string;
  encoding: string;
}

interface FsmEdge {
  from: string;
  to: string;
  condition: string;
  curvature?: number;
}

export const VivadoSchematicViewer: React.FC<VivadoSchematicViewerProps> = ({
  problem,
  currentSample,
  signalConfigs = [],
  forcedValues = {},
  onForceSignal,
  selectedCycle,
  totalCycles,
  onSelectCycle,
  onDownloadSvg
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeView, setActiveView] = useState<'schematic' | 'fsm'>('schematic');
  const [showNetlistDetails, setShowNetlistDetails] = useState<boolean>(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const title = problem?.title || 'RTL Design Module';
  const topic = (problem?.topic || 'verilog').toLowerCase();
  const titleLower = title.toLowerCase();

  // Classify signals
  const safeSignals = signalConfigs || [];
  const inputs = safeSignals.filter(s => s.type === 'input' || s.type === 'clock');
  const outputs = safeSignals.filter(s => s.type === 'output');

  // Helper to determine logic level '1' vs '0'
  const isSignalHigh = (name: string): boolean => {
    const raw = currentSample?.signals?.[name] ?? '0';
    if (raw === '1' || raw.endsWith('1')) return true;
    const parsed = parseInt(raw, 10);
    return !isNaN(parsed) && parsed > 0;
  };

  const getSignalVal = (name: string): string => {
    return currentSample?.signals?.[name] ?? '0';
  };

  // Determine design archetype
  const isFsmDesign = titleLower.includes('fsm') || titleLower.includes('state') || titleLower.includes('sequence') || titleLower.includes('detector') || titleLower.includes('traffic') || titleLower.includes('controller') || titleLower.includes('handshake');
  const isMux = titleLower.includes('mux') || titleLower.includes('multiplexer');
  const isFlipFlop = titleLower.includes('flip') || titleLower.includes('dff') || titleLower.includes('latch') || titleLower.includes('register');
  const isAdder = titleLower.includes('adder') || titleLower.includes('alu') || titleLower.includes('arithmetic');
  const isCounter = titleLower.includes('counter') || titleLower.includes('timer');
  const isAndGate = titleLower.includes('and') && !titleLower.includes('land');
  const isOrGate = titleLower.includes('or') && !titleLower.includes('xor') && !titleLower.includes('nor');
  const isXorGate = titleLower.includes('xor') || titleLower.includes('xnor');

  // Colors
  const WIRE_HIGH = '#10b981'; // Active High Emerald Green
  const WIRE_LOW = '#475569';  // Inactive Slate Blue
  const WIRE_CLOCK = '#38bdf8'; // Clock Blue

  const getWireColor = (sigName: string) => {
    const isClock = sigName.toLowerCase().includes('clk') || sigName.toLowerCase().includes('clock');
    if (isClock) return WIRE_CLOCK;
    return isSignalHigh(sigName) ? WIRE_HIGH : WIRE_LOW;
  };

  // Build FSM Graph Topology based on problem context
  const { fsmNodes, fsmEdges, currentFsmState } = useMemo(() => {
    let nodes: FsmNode[] = [];
    let edges: FsmEdge[] = [];

    if (titleLower.includes('traffic')) {
      nodes = [
        { id: 'S_RED', name: 'RED', x: 220, y: 120, output: 'R=1, Y=0, G=0', encoding: "2'b00" },
        { id: 'S_GREEN', name: 'GREEN', x: 620, y: 120, output: 'R=0, Y=0, G=1', encoding: "2'b01" },
        { id: 'S_YELLOW', name: 'YELLOW', x: 420, y: 320, output: 'R=0, Y=1, G=0', encoding: "2'b10" }
      ];
      edges = [
        { from: 'S_RED', to: 'S_GREEN', condition: 'timer_expired / next_green' },
        { from: 'S_GREEN', to: 'S_YELLOW', condition: 'ped_req | timer_expired' },
        { from: 'S_YELLOW', to: 'S_RED', condition: 'yellow_timeout' }
      ];
    } else if (titleLower.includes('101') || titleLower.includes('sequence') || titleLower.includes('detector')) {
      nodes = [
        { id: 'S_IDLE', name: 'S_IDLE', x: 180, y: 220, output: 'match = 0', encoding: "3'b000" },
        { id: 'S_1', name: 'S_1', x: 380, y: 120, output: 'match = 0', encoding: "3'b001" },
        { id: 'S_10', name: 'S_10', x: 580, y: 220, output: 'match = 0', encoding: "3'b010" },
        { id: 'S_101', name: 'S_101 (MATCH)', x: 380, y: 320, output: 'match = 1', encoding: "3'b011" }
      ];
      edges = [
        { from: 'S_IDLE', to: 'S_IDLE', condition: 'in=0' },
        { from: 'S_IDLE', to: 'S_1', condition: 'in=1' },
        { from: 'S_1', to: 'S_10', condition: 'in=0' },
        { from: 'S_1', to: 'S_1', condition: 'in=1' },
        { from: 'S_10', to: 'S_101', condition: 'in=1' },
        { from: 'S_10', to: 'S_IDLE', condition: 'in=0' },
        { from: 'S_101', to: 'S_10', condition: 'in=0' },
        { from: 'S_101', to: 'S_1', condition: 'in=1' }
      ];
    } else if (titleLower.includes('handshake') || titleLower.includes('axi') || titleLower.includes('bus')) {
      nodes = [
        { id: 'S_IDLE', name: 'IDLE', x: 200, y: 140, output: 'ready=1, valid=0', encoding: "2'b00" },
        { id: 'S_ADDR', name: 'ADDR_PHASE', x: 500, y: 140, output: 'addr_req=1', encoding: "2'b01" },
        { id: 'S_DATA', name: 'DATA_BURST', x: 680, y: 280, output: 'data_tx=1', encoding: "2'b10" },
        { id: 'S_ACK', name: 'RESP_ACK', x: 320, y: 320, output: 'done=1, ack=1', encoding: "2'b11" }
      ];
      edges = [
        { from: 'S_IDLE', to: 'S_ADDR', condition: 'req_valid=1' },
        { from: 'S_ADDR', to: 'S_DATA', condition: 'addr_ack=1' },
        { from: 'S_DATA', to: 'S_ACK', condition: 'burst_last=1' },
        { from: 'S_ACK', to: 'S_IDLE', condition: 'ack_received=1' }
      ];
    } else {
      // Default 4-state Mealy/Moore Automaton
      nodes = [
        { id: 'S_RESET', name: 'S_RESET', x: 180, y: 220, output: 'out = 0', encoding: "2'b00" },
        { id: 'S_EXEC_A', name: 'S_ACTIVE_0', x: 380, y: 120, output: 'out = 1', encoding: "2'b01" },
        { id: 'S_EXEC_B', name: 'S_ACTIVE_1', x: 580, y: 220, output: 'out = 2', encoding: "2'b10" },
        { id: 'S_DONE', name: 'S_COMPLETE', x: 380, y: 320, output: 'done = 1', encoding: "2'b11" }
      ];
      edges = [
        { from: 'S_RESET', to: 'S_EXEC_A', condition: 'enable=1' },
        { from: 'S_EXEC_A', to: 'S_EXEC_B', condition: 'step=1' },
        { from: 'S_EXEC_B', to: 'S_DONE', condition: 'counter==max' },
        { from: 'S_DONE', to: 'S_RESET', condition: 'rst=1 | restart' }
      ];
    }

    // Determine current active state based on selected clock cycle
    const stateIndex = selectedCycle % nodes.length;
    const activeNodeId = nodes[stateIndex]?.id || nodes[0]?.id;

    return { fsmNodes: nodes, fsmEdges: edges, currentFsmState: activeNodeId };
  }, [titleLower, selectedCycle]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col">
        
        {/* RTL Header Toolbar */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-purple-400 font-bold">
              <GitBranch className="w-4 h-4 text-purple-400" />
              <span className="text-white text-sm">RTL Schematic Engine:</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[11px]">
                {problem?.title || 'top_module'}
              </span>
            </div>
            <span className="text-slate-500 hidden md:inline">|</span>
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveView('schematic')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                  activeView === 'schematic'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Gate Schematic</span>
              </button>
              
              <button
                onClick={() => setActiveView('fsm')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                  activeView === 'fsm'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <CircleDot className="w-3.5 h-3.5" />
                <span>FSM State Bubbles</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Cycle Selector */}
            <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-[11px]">
              <span className="text-slate-400 font-semibold">Clock Cycle:</span>
              <select
                value={selectedCycle}
                onChange={(e) => onSelectCycle(Number(e.target.value))}
                className="bg-slate-950 text-amber-300 font-bold focus:outline-none rounded px-1.5 py-0.5 border border-slate-700 cursor-pointer"
              >
                {Array.from({ length: Math.max(1, totalCycles) }).map((_, idx) => (
                  <option key={idx} value={idx}>Cycle #{idx}</option>
                ))}
              </select>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.7, prev - 0.15))}
                className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-all"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] text-slate-400 font-bold px-1">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(1.5, prev + 0.15))}
                className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-all"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-all"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Netlist Toggle */}
            <button
              onClick={() => setShowNetlistDetails(prev => !prev)}
              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1.5 transition-all border ${
                showNetlistDetails
                  ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500/50 shadow'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Netlist</span>
            </button>

            {/* Export SVG */}
            <button
              onClick={onDownloadSvg}
              className="px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] flex items-center gap-1.5 transition-all shadow-md shadow-purple-500/20 border border-purple-400/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>SVG</span>
            </button>
          </div>
        </div>

        {/* Legend Banner */}
        <div className="bg-slate-950/80 px-4 py-1.5 border-b border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-4">
            {activeView === 'schematic' ? (
              <>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]"></span>
                  <strong className="text-emerald-400">Logic '1' (Active)</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-slate-600 rounded-full"></span>
                  <strong className="text-slate-400">Logic '0' (Low)</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-sky-400 rounded-full"></span>
                  <strong className="text-sky-300">Clock Edge</strong>
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b] animate-ping"></span>
                  <strong className="text-amber-300">Active State ({currentFsmState})</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-slate-600 rounded-full"></span>
                  <strong className="text-slate-400">Dormant States</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-purple-400 rounded-full"></span>
                  <strong className="text-purple-300">State Transition Arc</strong>
                </span>
              </>
            )}
          </div>

          <span className="text-[10px] text-slate-500 hidden sm:inline">
            {activeView === 'schematic' ? 'Elaborated RTL Logic Primitives • Silicon EDA Engine' : 'Finite State Machine Moore/Mealy State Graph'}
          </span>
        </div>

        {/* Canvas Area with Zoom Transformer */}
        <div className="p-4 bg-slate-950 overflow-auto min-h-[400px] flex items-center justify-center relative">
          <div
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
            className="transition-transform duration-200 ease-out w-full flex justify-center"
          >
            {activeView === 'schematic' ? (
              /* GATE-LEVEL RTL SCHEMATIC VIEW */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 920 420"
                className="w-full max-w-[920px] h-auto block select-none drop-shadow-2xl"
              >
                <defs>
                  <pattern id="rtlSchematicGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" opacity="0.6" />
                  </pattern>
                  <filter id="glowHigh" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Grid */}
                <rect width="920" height="420" fill="#0b0f19" rx="12" />
                <rect width="920" height="420" fill="url(#rtlSchematicGrid)" rx="12" />

                {/* INPUT PORTS (LEFT SIDE) */}
                <g id="inputPorts">
                  <text x="35" y="32" fill="#f59e0b" fontSize="12" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
                    INPUT PORTS (IBUF)
                  </text>

                  {inputs.map((sig, idx) => {
                    const spacing = Math.min(65, 300 / Math.max(inputs.length, 1));
                    const y = 65 + idx * spacing;
                    const isHigh = isSignalHigh(sig.name);
                    const val = getSignalVal(sig.name);
                    const isClock = sig.name.toLowerCase().includes('clk') || sig.name.toLowerCase().includes('clock');
                    const strokeColor = isClock ? WIRE_CLOCK : isHigh ? WIRE_HIGH : WIRE_LOW;

                    return (
                      <g key={sig.name} className="transition-all hover:opacity-90">
                        {/* Vivado Arrow Input Port Symbol */}
                        <polygon
                          points={`35,${y} 145,${y} 165,${y + 16} 145,${y + 32} 35,${y + 32}`}
                          fill="#0f172a"
                          stroke={strokeColor}
                          strokeWidth="2"
                          filter={isHigh ? 'url(#glowHigh)' : undefined}
                        />
                        <text x="45" y={y + 20} fill="#f8fafc" fontSize="11" fontFamily="monospace" fontWeight="bold">
                          {sig.name}
                        </text>
                        
                        {/* Pin Value Badge */}
                        <rect
                          x="120"
                          y={y + 6}
                          width="22"
                          height="20"
                          rx="4"
                          fill={isHigh ? '#059669' : '#1e293b'}
                          stroke={strokeColor}
                          strokeWidth="1"
                        />
                        <text
                          x="131"
                          y={y + 20}
                          fill="#ffffff"
                          fontSize="11"
                          fontFamily="monospace"
                          fontWeight="extrabold"
                          textAnchor="middle"
                        >
                          {val}
                        </text>

                        {/* Wire Connection Line to Center Component */}
                        <path
                          d={`M 165 ${y + 16} L 280 ${y + 16}`}
                          fill="none"
                          stroke={strokeColor}
                          strokeWidth={isHigh ? 3 : 2}
                          filter={isHigh ? 'url(#glowHigh)' : undefined}
                        />
                        <circle cx="280" cy={y + 16} r="3.5" fill={strokeColor} />
                      </g>
                    );
                  })}
                </g>

                {/* CENTER RTL LOGIC COMPONENT SYNTHESIS */}
                <g id="centerRtlCore">
                  {/* 1. MULTIPLEXER SCHEMATIC */}
                  {isMux && (
                    <g>
                      <polygon
                        points="320,80 540,110 540,290 320,320"
                        fill="#0f172a"
                        stroke="#c084fc"
                        strokeWidth="3"
                        filter="drop-shadow(0 0 12px rgba(192,132,252,0.2))"
                      />
                      <text x="430" y="140" fill="#c084fc" fontSize="15" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        MUX 2:1 (LUT)
                      </text>
                      <text x="430" y="160" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                        RTL Multiplexer Gate
                      </text>
                      <text x="335" y="125" fill="#f8fafc" fontSize="12" fontFamily="monospace" fontWeight="bold">I0 (0)</text>
                      <text x="335" y="275" fill="#f8fafc" fontSize="12" fontFamily="monospace" fontWeight="bold">I1 (1)</text>

                      {/* Select Pin */}
                      <line x1="430" y1="380" x2="430" y2="305" stroke={getWireColor('sel')} strokeWidth="2.5" />
                      <polygon points="430,302 425,312 435,312" fill={getWireColor('sel')} />
                      <text x="430" y="398" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        SEL Pin
                      </text>

                      <path d="M 280 120 L 320 120" stroke={getWireColor(inputs[0]?.name || 'in0')} strokeWidth="2.5" />
                      <path d="M 280 270 L 320 270" stroke={getWireColor(inputs[1]?.name || 'in1')} strokeWidth="2.5" />
                    </g>
                  )}

                  {/* 2. D FLIP-FLOP SCHEMATIC */}
                  {isFlipFlop && (
                    <g>
                      <rect
                        x="320"
                        y="90"
                        width="220"
                        height="230"
                        rx="12"
                        fill="#0f172a"
                        stroke="#818cf8"
                        strokeWidth="3"
                        filter="drop-shadow(0 0 12px rgba(129,140,248,0.25))"
                      />
                      <text x="430" y="125" fill="#818cf8" fontSize="15" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        FDRE (DFF)
                      </text>
                      <text x="430" y="145" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                        D Flip-Flop Register
                      </text>
                      <text x="335" y="180" fill="#f8fafc" fontSize="13" fontFamily="monospace" fontWeight="bold">D</text>
                      <line x1="280" y1="175" x2="320" y2="175" stroke={getWireColor(inputs[0]?.name || 'd')} strokeWidth="2.5" />

                      <text x="350" y="260" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">CLK</text>
                      <polygon points="320,248 335,255 320,262" fill="none" stroke="#38bdf8" strokeWidth="2" />
                      <line x1="280" y1="255" x2="320" y2="255" stroke={WIRE_CLOCK} strokeWidth="2.5" />

                      <text x="515" y="180" fill="#34d399" fontSize="13" fontFamily="monospace" fontWeight="bold">Q</text>
                      <text x="505" y="260" fill="#cbd5e1" fontSize="12" fontFamily="monospace" fontWeight="bold">Q_N</text>
                    </g>
                  )}

                  {/* 3. LOGIC GATES */}
                  {(isAndGate || isOrGate || isXorGate) && (
                    <g>
                      <rect
                        x="310"
                        y="85"
                        width="240"
                        height="240"
                        rx="16"
                        fill="#0f172a"
                        stroke="#38bdf8"
                        strokeWidth="2.5"
                      />
                      <text x="430" y="115" fill="#38bdf8" fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        GATE ARRAY (LUT6)
                      </text>

                      {isAndGate && (
                        <g transform="translate(365, 150)">
                          <path
                            d="M 10 10 L 60 10 C 90 10, 100 35, 100 45 C 100 55, 90 80, 60 80 L 10 80 Z"
                            fill="#020617"
                            stroke="#38bdf8"
                            strokeWidth="2.5"
                          />
                          <text x="45" y="50" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AND</text>
                        </g>
                      )}

                      {isOrGate && (
                        <g transform="translate(365, 150)">
                          <path
                            d="M 10 10 C 35 10, 60 20, 100 45 C 60 70, 35 80, 10 80 C 30 50, 30 40, 10 10 Z"
                            fill="#020617"
                            stroke="#f59e0b"
                            strokeWidth="2.5"
                          />
                          <text x="50" y="50" fill="#f59e0b" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">OR</text>
                        </g>
                      )}

                      {isXorGate && (
                        <g transform="translate(365, 150)">
                          <path d="M 5 10 C 25 40, 25 50, 5 80" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                          <path
                            d="M 15 10 C 40 10, 65 20, 105 45 C 65 70, 40 80, 15 80 C 35 50, 35 40, 15 10 Z"
                            fill="#020617"
                            stroke="#a855f7"
                            strokeWidth="2.5"
                          />
                          <text x="55" y="50" fill="#a855f7" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">XOR</text>
                        </g>
                      )}

                      <text x="430" y="280" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                        Combinatorial LUT Mapping
                      </text>
                    </g>
                  )}

                  {/* 4. DEFAULT COMPLEX RTL MODULE */}
                  {!isMux && !isFlipFlop && !isAndGate && !isOrGate && !isXorGate && (
                    <g>
                      <rect
                        x="300"
                        y="70"
                        width="260"
                        height="270"
                        rx="16"
                        fill="#0f172a"
                        stroke="#a855f7"
                        strokeWidth="3"
                        filter="drop-shadow(0 0 16px rgba(168,85,247,0.2))"
                      />
                      <text x="430" y="105" fill="#a855f7" fontSize="15" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        {isAdder ? 'CADD / ALU' : isCounter ? 'UP_COUNTER (LUT+FF)' : 'RTL SYNTHESIZED CELL'}
                      </text>
                      <text x="430" y="125" fill="#cbd5e1" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        {problem?.title || 'DUT RTL Core'}
                      </text>

                      <rect x="330" y="145" width="200" height="160" rx="10" fill="#020617" stroke="#334155" strokeWidth="1.5" />
                      <circle cx="370" cy="190" r="18" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                      <text x="370" y="195" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LUT</text>
                      <line x1="388" y1="190" x2="450" y2="190" stroke="#38bdf8" strokeWidth="2" />
                      <rect x="450" y="170" width="45" height="70" rx="4" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
                      <text x="472" y="200" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DFF</text>
                      <text x="430" y="280" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                        Cell Primitives: LUT6, CARRY4, FDRE
                      </text>
                    </g>
                  )}
                </g>

                {/* OUTPUT PORTS (RIGHT SIDE) */}
                <g id="outputPorts">
                  <text x="735" y="32" fill="#34d399" fontSize="12" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
                    OUTPUT PORTS (OBUF)
                  </text>

                  {outputs.map((sig, idx) => {
                    const spacing = Math.min(65, 300 / Math.max(outputs.length, 1));
                    const y = 65 + idx * spacing;
                    const isHigh = isSignalHigh(sig.name);
                    const val = getSignalVal(sig.name);
                    const strokeColor = isHigh ? WIRE_HIGH : WIRE_LOW;

                    return (
                      <g key={sig.name} className="transition-all hover:opacity-90">
                        <path
                          d={`M 540 ${y + 16} L 735 ${y + 16}`}
                          fill="none"
                          stroke={strokeColor}
                          strokeWidth={isHigh ? 3 : 2}
                          filter={isHigh ? 'url(#glowHigh)' : undefined}
                        />
                        <circle cx="540" cy={y + 16} r="3.5" fill={strokeColor} />

                        <polygon
                          points={`735,${y} 860,${y} 880,${y + 16} 860,${y + 32} 735,${y + 32}`}
                          fill="#0f172a"
                          stroke={strokeColor}
                          strokeWidth="2"
                          filter={isHigh ? 'url(#glowHigh)' : undefined}
                        />
                        <text x="745" y={y + 20} fill="#f8fafc" fontSize="11" fontFamily="monospace" fontWeight="bold">
                          {sig.name}
                        </text>
                        
                        <rect
                          x="835"
                          y={y + 6}
                          width="22"
                          height="20"
                          rx="4"
                          fill={isHigh ? '#059669' : '#1e293b'}
                          stroke={strokeColor}
                          strokeWidth="1"
                        />
                        <text
                          x="846"
                          y={y + 20}
                          fill="#ffffff"
                          fontSize="11"
                          fontFamily="monospace"
                          fontWeight="extrabold"
                          textAnchor="middle"
                        >
                          {val}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            ) : (
              /* FINITE STATE MACHINE (FSM) BUBBLE DIAGRAM VIEW */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 880 430"
                className="w-full max-w-[880px] h-auto block select-none drop-shadow-2xl"
              >
                <defs>
                  {/* Arrow marker for state transitions */}
                  <marker id="fsmArrow" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
                  </marker>
                  <marker id="fsmArrowActive" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
                  </marker>
                  <filter id="fsmGlowActive" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Canvas Background */}
                <rect width="880" height="430" fill="#080c15" rx="14" />
                <rect width="880" height="430" fill="url(#vivadoGrid)" rx="14" />

                {/* Title & Type Badge */}
                <text x="40" y="40" fill="#f59e0b" fontSize="14" fontFamily="monospace" fontWeight="black" letterSpacing="1">
                  FINITE STATE MACHINE (FSM) SYNTHESIS TOPOLOGY
                </text>
                <text x="40" y="60" fill="#94a3b8" fontSize="11" fontFamily="monospace">
                  Architecture: Moore / Mealy Synchronous State Machine
                </text>

                {/* Reset Entry Pointer */}
                <g>
                  <path d="M 60 220 L 120 220" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4,3" markerEnd="url(#fsmArrow)" />
                  <text x="75" y="210" fill="#f43f5e" fontSize="11" fontFamily="monospace" fontWeight="bold">RESET</text>
                </g>

                {/* State Transition Edges */}
                {fsmEdges.map((edge, idx) => {
                  const src = fsmNodes.find(n => n.id === edge.from);
                  const dst = fsmNodes.find(n => n.id === edge.to);
                  if (!src || !dst) return null;

                  const isSelfLoop = edge.from === edge.to;
                  const isActiveTransition = edge.from === currentFsmState;

                  if (isSelfLoop) {
                    return (
                      <g key={idx}>
                        <path
                          d={`M ${src.x - 20} ${src.y - 45} C ${src.x - 40} ${src.y - 95}, ${src.x + 40} ${src.y - 95}, ${src.x + 20} ${src.y - 45}`}
                          fill="none"
                          stroke={isActiveTransition ? '#f59e0b' : '#64748b'}
                          strokeWidth={isActiveTransition ? 3 : 1.5}
                          markerEnd={isActiveTransition ? 'url(#fsmArrowActive)' : 'url(#fsmArrow)'}
                        />
                        <text x={src.x} y={src.y - 80} fill={isActiveTransition ? '#fde68a' : '#94a3b8'} fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                          {edge.condition}
                        </text>
                      </g>
                    );
                  }

                  const midX = (src.x + dst.x) / 2;
                  const midY = (src.y + dst.y) / 2 + (src.y === dst.y ? -25 : 0);

                  return (
                    <g key={idx}>
                      <path
                        d={`M ${src.x} ${src.y} Q ${midX} ${midY} ${dst.x} ${dst.y}`}
                        fill="none"
                        stroke={isActiveTransition ? '#f59e0b' : '#64748b'}
                        strokeWidth={isActiveTransition ? 2.5 : 1.5}
                        markerEnd={isActiveTransition ? 'url(#fsmArrowActive)' : 'url(#fsmArrow)'}
                      />
                      <rect
                        x={midX - 45}
                        y={midY - 14}
                        width="90"
                        height="18"
                        rx="4"
                        fill="#0f172a"
                        stroke={isActiveTransition ? '#f59e0b' : '#334155'}
                        strokeWidth="1"
                      />
                      <text x={midX} y={midY - 1} fill={isActiveTransition ? '#fef08a' : '#cbd5e1'} fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        {edge.condition}
                      </text>
                    </g>
                  );
                })}

                {/* State Bubble Nodes */}
                {fsmNodes.map(node => {
                  const isActive = node.id === currentFsmState;
                  const isHovered = hoveredNode === node.id;

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer transition-all"
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      {/* Outer Ring / Glow */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="52"
                        fill={isActive ? '#1e1b4b' : '#0f172a'}
                        stroke={isActive ? '#f59e0b' : isHovered ? '#a855f7' : '#38bdf8'}
                        strokeWidth={isActive ? 4 : 2.5}
                        filter={isActive ? 'url(#fsmGlowActive)' : undefined}
                      />

                      {/* Inner Circle Border */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="45"
                        fill={isActive ? '#311042' : '#090d16'}
                        stroke={isActive ? '#fbbf24' : '#1e293b'}
                        strokeWidth="1.5"
                      />

                      {/* State Name */}
                      <text
                        x={node.x}
                        y={node.y - 12}
                        fill={isActive ? '#fef08a' : '#f8fafc'}
                        fontSize="12"
                        fontFamily="monospace"
                        fontWeight="black"
                        textAnchor="middle"
                      >
                        {node.name}
                      </text>

                      {/* State Encoding */}
                      <text
                        x={node.x}
                        y={node.y + 6}
                        fill={isActive ? '#38bdf8' : '#94a3b8'}
                        fontSize="10"
                        fontFamily="monospace"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {node.encoding}
                      </text>

                      {/* Output Value Label */}
                      <text
                        x={node.x}
                        y={node.y + 22}
                        fill={isActive ? '#34d399' : '#64748b'}
                        fontSize="9"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        /{node.output}
                      </text>

                      {isActive && (
                        <circle cx={node.x} cy={node.y - 38} r="4" fill="#10b981" className="animate-ping" />
                      )}
                    </g>
                  );
                })}

                {/* State Encoding Table (Bottom Right) */}
                <g transform="translate(680, 20)">
                  <rect width="180" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <text x="12" y="20" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    STATE ENCODING (ONE-HOT/BIN)
                  </text>
                  {fsmNodes.map((n, i) => (
                    <text key={n.id} x="12" y={40 + i * 18} fill={n.id === currentFsmState ? '#34d399' : '#94a3b8'} fontSize="9" fontFamily="monospace">
                      {n.id === currentFsmState ? '▶ ' : '  '}{n.name}: {n.encoding}
                    </text>
                  ))}
                </g>
              </svg>
            )}
          </div>
        </div>

        {/* RTL Netlist & State Tracker Panel Footer */}
        {showNetlistDetails && (
          <div className="bg-slate-950 p-3.5 border-t border-slate-800 text-xs font-mono text-slate-300 grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-purple-400 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Synthesized Cells</div>
                <div className="text-white font-extrabold text-xs">LUT6: 4 | DFF: 2 | CARRY4: 1</div>
              </div>
            </div>

            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
              <CircleDot className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Active FSM State</div>
                <div className="text-amber-300 font-extrabold text-xs">
                  {currentFsmState} (Cycle #{selectedCycle})
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">FSM Type & Logic</div>
                <div className="text-emerald-400 font-extrabold text-xs">Synchronous Reset (Active High)</div>
              </div>
            </div>

            {/* Quick Signal Force Inputs */}
            <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="text-[10px] text-amber-400 font-bold uppercase">Force Inputs:</div>
              <div className="flex items-center gap-1 overflow-x-auto">
                {inputs.filter(s => s.type === 'input').slice(0, 3).map(sig => (
                  <div key={sig.name} className="flex items-center gap-1 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 text-[10px]">
                    <span className="text-slate-300 font-bold">{sig.name}:</span>
                    <button
                      onClick={() => onForceSignal(sig.name, '0')}
                      className={`px-1 rounded text-[9px] font-bold ${
                        forcedValues[sig.name] === '0' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      0
                    </button>
                    <button
                      onClick={() => onForceSignal(sig.name, '1')}
                      className={`px-1 rounded text-[9px] font-bold ${
                        forcedValues[sig.name] === '1' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      1
                    </button>
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
