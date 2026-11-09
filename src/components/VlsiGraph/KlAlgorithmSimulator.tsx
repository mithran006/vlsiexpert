import React, { useState, useMemo } from 'react';
import { 
  Scissors, Play, RotateCcw, CheckCircle2, ChevronRight, 
  ArrowRight, Zap, GitCommit, Split, Activity, Info, RefreshCw
} from 'lucide-react';

interface Node {
  id: number;
  name: string;
  type: string;
}

// 8 cells in circuit netlist
const INITIAL_NODES: Node[] = [
  { id: 0, name: 'v1 (ALU_0)', type: 'logic' },
  { id: 1, name: 'v2 (ALU_1)', type: 'logic' },
  { id: 2, name: 'v3 (REG_A)', type: 'register' },
  { id: 3, name: 'v4 (REG_B)', type: 'register' },
  { id: 4, name: 'v5 (MUL_0)', type: 'logic' },
  { id: 5, name: 'v6 (MUL_1)', type: 'logic' },
  { id: 6, name: 'v7 (FSM_C)', type: 'control' },
  { id: 7, name: 'v8 (OUT_BUF)', type: 'io' },
];

// Weighted netlist adjacency matrix
const COST_MATRIX: number[][] = [
  [0, 3, 2, 2, 1, 0, 0, 0], // v1
  [3, 0, 3, 1, 0, 1, 0, 0], // v2
  [2, 3, 0, 4, 1, 0, 1, 0], // v3
  [2, 1, 4, 0, 0, 2, 0, 1], // v4
  [1, 0, 1, 0, 0, 4, 3, 2], // v5
  [0, 1, 0, 2, 4, 0, 2, 3], // v6
  [0, 0, 1, 0, 3, 2, 0, 4], // v7
  [0, 0, 0, 1, 2, 3, 4, 0], // v8
];

export const KlAlgorithmSimulator: React.FC = () => {
  // Current partition sets: A and B
  const [partA, setPartA] = useState<number[]>([0, 1, 4, 5]); // intentionally suboptimal initial cut
  const [partB, setPartB] = useState<number[]>([2, 3, 6, 7]);
  const [lockedNodes, setLockedNodes] = useState<Set<number>>(new Set());
  const [swapHistory, setSwapHistory] = useState<
    { step: number; a: number; b: number; gain: number; cumGain: number }[]
  >([]);
  const [statusMessage, setStatusMessage] = useState<string>(
    'Ready. Click "Step KL Swap" or "Execute Full KL Pass" to partition with minimum cut.'
  );

  // Calculate cut cost
  const cutCost = useMemo(() => {
    let cut = 0;
    const setA = new Set(partA);
    const setB = new Set(partB);
    for (const a of setA) {
      for (const b of setB) {
        cut += COST_MATRIX[a][b];
      }
    }
    return cut;
  }, [partA, partB]);

  // Compute D-values: D_v = E_v - I_v
  const nodeMetrics = useMemo(() => {
    const setA = new Set(partA);
    const setB = new Set(partB);
    const metrics: { [id: number]: { iv: number; ev: number; dv: number } } = {};

    INITIAL_NODES.forEach(node => {
      const u = node.id;
      const isA = setA.has(u);
      let iv = 0;
      let ev = 0;

      for (let v = 0; v < 8; v++) {
        if (v === u) continue;
        const w = COST_MATRIX[u][v];
        if (isA) {
          if (setA.has(v)) iv += w;
          else ev += w;
        } else {
          if (setB.has(v)) iv += w;
          else ev += w;
        }
      }

      metrics[u] = { iv, ev, dv: ev - iv };
    });

    return metrics;
  }, [partA, partB]);

  // Find candidate gains between unlocked pairs: g_ab = D_a + D_b - 2*C_ab
  const pairGains = useMemo(() => {
    const candidatePairs: { a: number; b: number; gain: number }[] = [];
    partA.forEach(a => {
      if (lockedNodes.has(a)) return;
      partB.forEach(b => {
        if (lockedNodes.has(b)) return;
        const gain = nodeMetrics[a].dv + nodeMetrics[b].dv - 2 * COST_MATRIX[a][b];
        candidatePairs.push({ a, b, gain });
      });
    });

    candidatePairs.sort((p1, p2) => p2.gain - p1.gain);
    return candidatePairs;
  }, [partA, partB, lockedNodes, nodeMetrics]);

  // Step 1: Perform a single pair swap
  const handleSingleStep = () => {
    if (pairGains.length === 0) {
      setStatusMessage('All nodes in this KL pass are locked. Review cumulative gain curve or reset.');
      return;
    }

    const best = pairGains[0];
    const prevCum = swapHistory.length > 0 ? swapHistory[swapHistory.length - 1].cumGain : 0;
    const newCum = prevCum + best.gain;

    const newHistory = [
      ...swapHistory,
      {
        step: swapHistory.length + 1,
        a: best.a,
        b: best.b,
        gain: best.gain,
        cumGain: newCum
      }
    ];

    // Swap nodes
    const newA = partA.map(v => (v === best.a ? best.b : v));
    const newB = partB.map(v => (v === best.b ? best.a : v));

    const nextLocked = new Set(lockedNodes);
    nextLocked.add(best.a);
    nextLocked.add(best.b);

    setPartA(newA);
    setPartB(newB);
    setLockedNodes(nextLocked);
    setSwapHistory(newHistory);
    setStatusMessage(
      `Step ${newHistory.length}: Swapped ${INITIAL_NODES[best.a].name} and ${INITIAL_NODES[best.b].name} (gain = ${best.gain > 0 ? '+' : ''}${best.gain}, cumulative gain = ${newCum}).`
    );
  };

  // Full KL Pass
  const handleFullPass = () => {
    let curA = [...partA];
    let curB = [...partB];
    const locked = new Set<number>();
    const history: { step: number; a: number; b: number; gain: number; cumGain: number }[] = [];
    let cum = 0;

    // 4 pair swaps for 8 nodes
    for (let step = 1; step <= 4; step++) {
      let bestPair: { a: number; b: number; gain: number } | null = null;
      let maxGain = -Infinity;

      // Compute current D values
      const setA = new Set(curA);
      const setB = new Set(curB);
      const dVal: number[] = Array(8).fill(0);

      for (let u = 0; u < 8; u++) {
        let iv = 0;
        let ev = 0;
        const isA = setA.has(u);
        for (let v = 0; v < 8; v++) {
          if (u === v) continue;
          const w = COST_MATRIX[u][v];
          if (isA) {
            if (setA.has(v)) iv += w;
            else ev += w;
          } else {
            if (setB.has(v)) iv += w;
            else ev += w;
          }
        }
        dVal[u] = ev - iv;
      }

      for (const a of curA) {
        if (locked.has(a)) continue;
        for (const b of curB) {
          if (locked.has(b)) continue;
          const g = dVal[a] + dVal[b] - 2 * COST_MATRIX[a][b];
          if (g > maxGain) {
            maxGain = g;
            bestPair = { a, b, gain: g };
          }
        }
      }

      if (!bestPair) break;

      cum += bestPair.gain;
      history.push({
        step,
        a: bestPair.a,
        b: bestPair.b,
        gain: bestPair.gain,
        cumGain: cum
      });

      // Execute swap
      curA = curA.map(v => (v === bestPair!.a ? bestPair!.b : v));
      curB = curB.map(v => (v === bestPair!.b ? bestPair!.a : v));
      locked.add(bestPair.a);
      locked.add(bestPair.b);
    }

    // Find max cumulative gain k*
    let maxCum = -Infinity;
    let bestK = 0;
    history.forEach((h, idx) => {
      if (h.cumGain > maxCum) {
        maxCum = h.cumGain;
        bestK = idx + 1;
      }
    });

    if (maxCum > 0) {
      // Re-apply only up to bestK
      let finalA = [...partA];
      let finalB = [...partB];
      for (let i = 0; i < bestK; i++) {
        const item = history[i];
        finalA = finalA.map(v => (v === item.a ? item.b : v));
        finalB = finalB.map(v => (v === item.b ? item.a : v));
      }
      setPartA(finalA);
      setPartB(finalB);
      setLockedNodes(new Set());
      setSwapHistory(history.slice(0, bestK));
      setStatusMessage(
        `KL Pass Complete: Optimal cutoff k* = ${bestK} swaps. Total cut reduced by ${maxCum} nets!`
      );
    } else {
      setStatusMessage('Local minimum reached: No swap sequence yields positive cumulative gain.');
    }
  };

  const handleReset = () => {
    setPartA([0, 1, 4, 5]);
    setPartB([2, 3, 6, 7]);
    setLockedNodes(new Set());
    setSwapHistory([]);
    setStatusMessage('Partition reset to initial configuration.');
  };

  const handlePresetOptimal = () => {
    setPartA([0, 1, 2, 3]);
    setPartB([4, 5, 6, 7]);
    setLockedNodes(new Set());
    setSwapHistory([]);
    setStatusMessage('Loaded natural functional clustering (ALU/REG Cluster vs MUL/FSM Cluster).');
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffa116]/20 text-[#ffa116] border border-[#ffa116]/30">
              EDA PARTITIONING
            </span>
            <span className="text-xs text-slate-400 font-mono">NP-Hard Min-Cut Bipartitioning</span>
          </div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-1">
            <Scissors className="w-5 h-5 text-[#ffa116]" />
            <span>Kernighan-Lin (KL) Graph Min-Cut Partitioning</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Heuristic for circuit bipartitioning. Evaluates internal cost <code className="text-cyan-400 font-mono">I_v</code>, external cost <code className="text-amber-400 font-mono">E_v</code>, difference metric <code className="text-emerald-400 font-mono">D_v = E_v - I_v</code>, and pairwise swap gain <code className="text-purple-400 font-mono">g_ab = D_a + D_b - 2 C_ab</code>.
          </p>
        </div>

        {/* Live HUD Counters */}
        <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
          <div className="text-right">
            <div className="text-[10px] text-slate-400">Cut Size (Inter-Net Cost)</div>
            <div className="text-2xl font-black text-rose-400">{cutCost} nets</div>
          </div>
          <div className="h-8 w-px bg-[#2b2d39]" />
          <div className="text-left">
            <div className="text-[10px] text-slate-400">Locked Nodes</div>
            <div className="text-lg font-bold text-slate-300">
              {lockedNodes.size} / 8
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#111215] border border-[#262833]">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleSingleStep}
            disabled={pairGains.length === 0}
            className="px-3.5 py-1.5 rounded-lg bg-[#ffa116] hover:bg-[#ffb33e] disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Step KL Swap</span>
          </button>

          <button
            onClick={handleFullPass}
            className="px-3.5 py-1.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-cyan-400 hover:text-cyan-300 border border-[#2b2d39] font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Execute Full KL Pass</span>
          </button>

          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-slate-400 hover:text-white border border-[#2b2d39] text-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Preset:</span>
          <button
            onClick={handlePresetOptimal}
            className="px-2.5 py-1 rounded bg-[#191a21] hover:bg-[#262833] text-slate-300 text-[11px] font-mono border border-[#2b2d39] cursor-pointer"
          >
            Natural Cluster
          </button>
        </div>
      </div>

      {/* Status banner */}
      <div className="p-3 rounded-lg bg-[#191a21] border border-[#2b2d39] text-xs font-mono text-slate-300 flex items-center gap-2">
        <Info className="w-4 h-4 text-cyan-400 shrink-0" />
        <span>{statusMessage}</span>
      </div>

      {/* Visual Dual Partition Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Partition A Container */}
        <div className="p-5 rounded-xl bg-[#111215] border border-cyan-500/30 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#262833]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
              <h4 className="font-bold text-white text-sm">Partition Block A (Core Cluster 0)</h4>
            </div>
            <span className="text-xs font-mono text-cyan-400 font-bold">{partA.length} Cells</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {partA.map(nodeId => {
              const node = INITIAL_NODES[nodeId];
              const isLocked = lockedNodes.has(nodeId);
              const m = nodeMetrics[nodeId];
              return (
                <div
                  key={nodeId}
                  className={`p-3 rounded-lg border transition-all ${
                    isLocked 
                      ? 'bg-[#16171d]/60 border-slate-700 opacity-60' 
                      : 'bg-[#191a21] border-cyan-500/30 hover:border-cyan-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-xs text-white">{node.name}</span>
                    {isLocked && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono">
                        LOCKED
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[10px] font-mono mt-2 pt-2 border-t border-[#262833]">
                    <div>
                      <span className="text-slate-500 block">I_v</span>
                      <span className="text-slate-300">{m?.iv}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">E_v</span>
                      <span className="text-amber-400">{m?.ev}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">D_v</span>
                      <span className={`font-bold ${m?.dv >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {m?.dv > 0 ? `+${m.dv}` : m?.dv}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partition B Container */}
        <div className="p-5 rounded-xl bg-[#111215] border border-amber-500/30 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#262833]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
              <h4 className="font-bold text-white text-sm">Partition Block B (Core Cluster 1)</h4>
            </div>
            <span className="text-xs font-mono text-amber-400 font-bold">{partB.length} Cells</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {partB.map(nodeId => {
              const node = INITIAL_NODES[nodeId];
              const isLocked = lockedNodes.has(nodeId);
              const m = nodeMetrics[nodeId];
              return (
                <div
                  key={nodeId}
                  className={`p-3 rounded-lg border transition-all ${
                    isLocked 
                      ? 'bg-[#16171d]/60 border-slate-700 opacity-60' 
                      : 'bg-[#191a21] border-amber-500/30 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-xs text-white">{node.name}</span>
                    {isLocked && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono">
                        LOCKED
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[10px] font-mono mt-2 pt-2 border-t border-[#262833]">
                    <div>
                      <span className="text-slate-500 block">I_v</span>
                      <span className="text-slate-300">{m?.iv}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">E_v</span>
                      <span className="text-amber-400">{m?.ev}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">D_v</span>
                      <span className={`font-bold ${m?.dv >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {m?.dv > 0 ? `+${m.dv}` : m?.dv}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* KL Step Swap Table and Cumulative Gain Curve */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Next Unlocked Candidate Pairs */}
        <div className="p-4 rounded-xl bg-[#111215] border border-[#262833] space-y-3">
          <h5 className="font-bold text-xs text-white flex items-center justify-between">
            <span>Candidate Unlocked Pairs (Sorted by Swap Gain g_ab)</span>
            <span className="text-[10px] font-mono text-slate-400">{pairGains.length} pairs available</span>
          </h5>
          <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1 font-mono text-xs">
            {pairGains.length === 0 ? (
              <div className="p-4 text-center text-slate-500 text-xs">All pairs are locked in this iteration.</div>
            ) : (
              pairGains.slice(0, 6).map((pair, idx) => (
                <div 
                  key={idx}
                  className={`p-2 rounded-lg flex items-center justify-between border ${
                    idx === 0 
                      ? 'bg-purple-950/20 border-purple-500/40 text-purple-200' 
                      : 'bg-[#16171d] border-[#262833] text-slate-300'
                  }`}
                >
                  <span className="text-[11px]">
                    {INITIAL_NODES[pair.a].name} ⟷ {INITIAL_NODES[pair.b].name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-500">C_ab = {COST_MATRIX[pair.a][pair.b]}</span>
                    <span className={`font-bold ${pair.gain > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {pair.gain > 0 ? `+${pair.gain}` : pair.gain} nets
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Swap History & Cumulative Gain Log */}
        <div className="p-4 rounded-xl bg-[#111215] border border-[#262833] space-y-3">
          <h5 className="font-bold text-xs text-white flex items-center justify-between">
            <span>KL Swap Sequence & Cumulative Gain G_k</span>
            <span className="text-[10px] font-mono text-slate-400">{swapHistory.length} steps executed</span>
          </h5>
          <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1 font-mono text-xs">
            {swapHistory.length === 0 ? (
              <div className="p-4 text-center text-slate-500 text-xs">No swaps executed yet. Click "Step KL Swap".</div>
            ) : (
              swapHistory.map(h => (
                <div 
                  key={h.step}
                  className="p-2 rounded-lg bg-[#16171d] border border-[#262833] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                      Step {h.step}
                    </span>
                    <span className="text-[11px] text-white">
                      {INITIAL_NODES[h.a].name} ⟷ {INITIAL_NODES[h.b].name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-[10px]">g_{h.step} = {h.gain > 0 ? `+${h.gain}` : h.gain}</span>
                    <span className={`font-bold text-xs ${h.cumGain > 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      G_{h.step} = {h.cumGain > 0 ? `+${h.cumGain}` : h.cumGain}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
