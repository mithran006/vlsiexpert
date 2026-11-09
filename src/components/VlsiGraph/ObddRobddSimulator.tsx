import React, { useState, useMemo } from 'react';
import { 
  GitFork, Play, RotateCcw, CheckCircle2, ChevronRight, 
  Sparkles, Layers, Sliders, Activity, Info, Binary, Cpu
} from 'lucide-react';

interface BddNode {
  id: string;
  variable: string;
  lowTarget: string; // 0-edge
  highTarget: string; // 1-edge
  x: number;
  y: number;
  isEliminated?: boolean;
}

export const ObddRobddSimulator: React.FC = () => {
  const [selectedFunc, setSelectedFunc] = useState<'and_or' | 'xor3' | 'carry' | 'mux2'>('and_or');
  const [variableOrder, setVariableOrder] = useState<'order_grouped' | 'order_interleaved'>('order_grouped');
  const [viewMode, setViewMode] = useState<'robdd' | 'full_obdd'>('robdd');

  // Node models for different functions and orderings
  const bddModel = useMemo(() => {
    if (selectedFunc === 'and_or') {
      // F = (a & b) | (c & d)
      if (variableOrder === 'order_grouped') {
        // Order: a < b < c < d (Good order: 4 decision nodes)
        const robddNodes: BddNode[] = [
          { id: 'n_a', variable: 'a', lowTarget: 'n_c1', highTarget: 'n_b', x: 50, y: 15 },
          { id: 'n_b', variable: 'b', lowTarget: 'n_c1', highTarget: 'term_1', x: 75, y: 38 },
          { id: 'n_c1', variable: 'c', lowTarget: 'term_0', highTarget: 'n_d', x: 25, y: 45 },
          { id: 'n_d', variable: 'd', lowTarget: 'term_0', highTarget: 'term_1', x: 38, y: 70 },
        ];
        return {
          formula: 'F = (a ∧ b) ∨ (c ∧ d)',
          orderingText: 'a < b < c < d (Grouped inputs - OPTIMAL)',
          fullNodeCount: 15,
          reducedNodeCount: 4,
          reductionPct: 73,
          nodes: robddNodes,
          eliminatedNodesDescription: 'Subtrees with identical branches for c and d merged; redundant tests bypassed.'
        };
      } else {
        // Order: a < c < b < d (Bad order: interleaved variables blow up to 7 nodes!)
        const robddNodes: BddNode[] = [
          { id: 'n_a', variable: 'a', lowTarget: 'n_c0', highTarget: 'n_c1', x: 50, y: 12 },
          { id: 'n_c0', variable: 'c', lowTarget: 'term_0', highTarget: 'n_d0', x: 25, y: 32 },
          { id: 'n_c1', variable: 'c', lowTarget: 'n_b0', highTarget: 'n_b1', x: 75, y: 32 },
          { id: 'n_d0', variable: 'd', lowTarget: 'term_0', highTarget: 'term_1', x: 15, y: 55 },
          { id: 'n_b0', variable: 'b', lowTarget: 'term_0', highTarget: 'term_1', x: 55, y: 55 },
          { id: 'n_b1', variable: 'b', lowTarget: 'n_d1', highTarget: 'term_1', x: 85, y: 55 },
          { id: 'n_d1', variable: 'd', lowTarget: 'term_0', highTarget: 'term_1', x: 70, y: 74 },
        ];
        return {
          formula: 'F = (a ∧ b) ∨ (c ∧ d)',
          orderingText: 'a < c < b < d (Interleaved inputs - EXPLODED)',
          fullNodeCount: 15,
          reducedNodeCount: 7,
          reductionPct: 53,
          nodes: robddNodes,
          eliminatedNodesDescription: 'Interleaving dependent variables prevents early terminal pruning, increasing ROBDD size by 75%!'
        };
      }
    } else if (selectedFunc === 'xor3') {
      // F = a ^ b ^ c (Odd Parity)
      const robddNodes: BddNode[] = [
        { id: 'n_a', variable: 'a', lowTarget: 'n_b0', highTarget: 'n_b1', x: 50, y: 15 },
        { id: 'n_b0', variable: 'b', lowTarget: 'n_c0', highTarget: 'n_c1', x: 30, y: 40 },
        { id: 'n_b1', variable: 'b', lowTarget: 'n_c1', highTarget: 'n_c0', x: 70, y: 40 },
        { id: 'n_c0', variable: 'c', lowTarget: 'term_0', highTarget: 'term_1', x: 25, y: 68 },
        { id: 'n_c1', variable: 'c', lowTarget: 'term_1', highTarget: 'term_0', x: 75, y: 68 },
      ];
      return {
        formula: 'F = a ⊕ b ⊕ c (3-Input XOR)',
        orderingText: 'a < b < c (Symmetric under any permutation)',
        fullNodeCount: 7,
        reducedNodeCount: 5,
        reductionPct: 29,
        nodes: robddNodes,
        eliminatedNodesDescription: 'XOR maintains strict linear growth O(n). Nodes at level c share isomorphic low/high children.'
      };
    } else if (selectedFunc === 'carry') {
      // F = a*b + b*c + c*a (Majority / Adder Carry)
      const robddNodes: BddNode[] = [
        { id: 'n_a', variable: 'a', lowTarget: 'n_b0', highTarget: 'n_b1', x: 50, y: 15 },
        { id: 'n_b0', variable: 'b', lowTarget: 'term_0', highTarget: 'n_c', x: 30, y: 42 },
        { id: 'n_b1', variable: 'b', lowTarget: 'n_c', highTarget: 'term_1', x: 70, y: 42 },
        { id: 'n_c', variable: 'c', lowTarget: 'term_0', highTarget: 'term_1', x: 50, y: 70 },
      ];
      return {
        formula: 'C_out = (a ∧ b) ∨ (b ∧ c) ∨ (c ∧ a)',
        orderingText: 'a < b < c (Full Adder Carry-Out)',
        fullNodeCount: 7,
        reducedNodeCount: 4,
        reductionPct: 43,
        nodes: robddNodes,
        eliminatedNodesDescription: 'Node n_c is perfectly shared by both branches of b (isomorphic subgraph merging).'
      };
    } else {
      // MUX2: F = s ? a : b
      const robddNodes: BddNode[] = [
        { id: 'n_s', variable: 's', lowTarget: 'n_b', highTarget: 'n_a', x: 50, y: 15 },
        { id: 'n_b', variable: 'b', lowTarget: 'term_0', highTarget: 'term_1', x: 30, y: 50 },
        { id: 'n_a', variable: 'a', lowTarget: 'term_0', highTarget: 'term_1', x: 70, y: 50 },
      ];
      return {
        formula: 'F = s · a + s\' · b (2:1 Multiplexer)',
        orderingText: 's < b < a (Select line evaluated first)',
        fullNodeCount: 7,
        reducedNodeCount: 3,
        reductionPct: 57,
        nodes: robddNodes,
        eliminatedNodesDescription: 'Select variable s acts as root multiplexer decision node directing immediately to data inputs.'
      };
    }
  }, [selectedFunc, variableOrder]);

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffa116]/20 text-[#ffa116] border border-[#ffa116]/30">
              LOGIC SYNTHESIS & FORMAL VERIFICATION
            </span>
            <span className="text-xs text-slate-400 font-mono">Canonical Boolean DAG</span>
          </div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-1">
            <GitFork className="w-5 h-5 text-[#ffa116]" />
            <span>Ordered (OBDD) & Reduced Ordered (ROBDD) Decision Diagrams</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Randal Bryant (1986) established that for a fixed variable ordering, ROBDD is a strictly <strong>canonical</strong> representation. Enables exact <code className="text-cyan-400 font-mono">O(1)</code> formal equivalence checking between RTL and gate netlists.
          </p>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
          <div className="text-right">
            <div className="text-[10px] text-slate-400">ROBDD Decision Nodes</div>
            <div className="text-2xl font-black text-emerald-400">{bddModel.reducedNodeCount} nodes</div>
          </div>
          <div className="h-8 w-px bg-[#2b2d39]" />
          <div className="text-left">
            <div className="text-[10px] text-slate-400">Reduction vs Tree</div>
            <div className="text-lg font-bold text-[#ffa116]">-{bddModel.reductionPct}%</div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#111215] border border-[#262833]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Function:</span>
          {[
            { id: 'and_or', label: '(a∧b) ∨ (c∧d)' },
            { id: 'carry', label: 'Full Adder Carry' },
            { id: 'xor3', label: '3-Input XOR' },
            { id: 'mux2', label: '2:1 MUX' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFunc(f.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                selectedFunc === f.id
                  ? 'bg-[#ffa116] border-[#ffa116] text-slate-950 font-bold shadow-md'
                  : 'bg-[#191a21] border-[#2b2d39] text-slate-300 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Ordering Switcher (for and_or benchmark) */}
        {selectedFunc === 'and_or' && (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Variable Order:</span>
            <button
              onClick={() => setVariableOrder('order_grouped')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono border cursor-pointer ${
                variableOrder === 'order_grouped'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                  : 'bg-[#191a21] border-[#2b2d39] text-slate-400'
              }`}
            >
              Grouped (a&lt;b&lt;c&lt;d)
            </button>
            <button
              onClick={() => setVariableOrder('order_interleaved')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono border cursor-pointer ${
                variableOrder === 'order_interleaved'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold'
                  : 'bg-[#191a21] border-[#2b2d39] text-slate-400'
              }`}
            >
              Interleaved (a&lt;c&lt;b&lt;d)
            </button>
          </div>
        )}
      </div>

      {/* Visual BDD Canvas and Rules Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* SVG BDD Graph */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-[#111215] border border-[#262833] flex flex-col items-center justify-center">
          <div className="text-xs text-slate-400 mb-3 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-cyan-500 border border-white" />
              <span>Decision Vertex</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-emerald-400" />
              <span>High (1) Branch (Solid)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 border-b border-dashed border-rose-400" />
              <span>Low (0) Branch (Dashed)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-800 border border-slate-600 text-[9px] font-mono font-bold text-center leading-3">0</span>
              <span>Terminal Sinks</span>
            </span>
          </div>

          {/* SVG Viewport */}
          <div className="w-full max-w-lg aspect-[4/3] bg-[#16171d] rounded-2xl border border-[#262833] p-4 relative shadow-inner">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              
              {/* Edges from decision nodes */}
              {bddModel.nodes.map(node => {
                // Determine target coordinates
                let lowX = 35;
                let lowY = 90;
                let highX = 65;
                let highY = 90;

                if (node.lowTarget === 'term_0') {
                  lowX = 35;
                  lowY = 90;
                } else if (node.lowTarget === 'term_1') {
                  lowX = 65;
                  lowY = 90;
                } else {
                  const targetNode = bddModel.nodes.find(n => n.id === node.lowTarget);
                  if (targetNode) {
                    lowX = targetNode.x;
                    lowY = targetNode.y;
                  }
                }

                if (node.highTarget === 'term_0') {
                  highX = 35;
                  highY = 90;
                } else if (node.highTarget === 'term_1') {
                  highX = 65;
                  highY = 90;
                } else {
                  const targetNode = bddModel.nodes.find(n => n.id === node.highTarget);
                  if (targetNode) {
                    highX = targetNode.x;
                    highY = targetNode.y;
                  }
                }

                return (
                  <g key={`edges-${node.id}`}>
                    {/* Low edge: dashed red */}
                    <line
                      x1={node.x}
                      y1={node.y + 3}
                      x2={lowX}
                      y2={lowY - 3}
                      stroke="#f43f5e"
                      strokeWidth="1.2"
                      strokeDasharray="2,2"
                    />
                    {/* High edge: solid green */}
                    <line
                      x1={node.x}
                      y1={node.y + 3}
                      x2={highX}
                      y2={highY - 3}
                      stroke="#10b981"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}

              {/* Terminal Nodes at bottom */}
              <g transform="translate(35, 90)">
                <rect x="-4" y="-3.5" width="8" height="7" rx="1.5" fill="#1e293b" stroke="#f43f5e" strokeWidth="0.8" />
                <text x="0" y="1.2" fill="#f43f5e" fontSize="3.6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  0
                </text>
              </g>

              <g transform="translate(65, 90)">
                <rect x="-4" y="-3.5" width="8" height="7" rx="1.5" fill="#1e293b" stroke="#10b981" strokeWidth="0.8" />
                <text x="0" y="1.2" fill="#10b981" fontSize="3.6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  1
                </text>
              </g>

              {/* Decision Nodes */}
              {bddModel.nodes.map(node => (
                <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                  <circle r="4.2" fill="#0284c7" stroke="#ffffff" strokeWidth="0.8" className="shadow-lg" />
                  <text
                    x="0"
                    y="1.3"
                    fill="#ffffff"
                    fontSize="3.8"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {node.variable}
                  </text>
                </g>
              ))}

            </svg>
          </div>
        </div>

        {/* Reduction Rules & Theory Explanation */}
        <div className="p-5 rounded-xl bg-[#111215] border border-[#262833] space-y-4">
          <h4 className="font-bold text-sm text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#ffa116]" />
            <span>ROBDD Reduction Mechanics</span>
          </h4>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833]">
              <span className="text-slate-400 block text-[10px]">Active Boolean Function:</span>
              <span className="font-bold text-[#ffa116] text-xs">{bddModel.formula}</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833]">
              <span className="text-slate-400 block text-[10px]">Variable Order:</span>
              <span className="font-bold text-cyan-400 text-xs">{bddModel.orderingText}</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">Full Binary Tree:</span>
              <span className="text-slate-400">{bddModel.fullNodeCount} vertices</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-emerald-500/30 flex justify-between items-center">
              <span className="text-emerald-400 font-bold">Canonical ROBDD:</span>
              <span className="font-bold text-emerald-400 text-sm">{bddModel.reducedNodeCount} vertices</span>
            </div>
          </div>

          {/* Two Core Reduction Rules */}
          <div className="p-3.5 rounded-lg bg-[#191a21] border border-[#2b2d39] text-xs text-slate-300 space-y-2">
            <div className="font-bold text-white text-[11px] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bryant&apos;s Two Reduction Rules:</span>
            </div>
            
            <div className="space-y-2 text-[11px] text-slate-400 pt-1">
              <div>
                <strong className="text-white">Rule 1 (Redundant Node Elimination):</strong> If <code className="text-cyan-400 font-mono">low(u) == high(u)</code>, delete vertex <code className="text-cyan-400 font-mono">u</code> and direct incoming edges straight to the child.
              </div>
              <div>
                <strong className="text-white">Rule 2 (Isomorphic Subgraph Merging):</strong> If two distinct nodes have the same variable label and identical low/high targets, merge them into a single unique node.
              </div>
            </div>

            <p className="text-[10px] text-slate-500 pt-2 border-t border-[#262833]">
              {bddModel.eliminatedNodesDescription}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
