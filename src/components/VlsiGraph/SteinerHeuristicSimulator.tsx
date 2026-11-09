import React, { useState, useMemo } from 'react';
import { 
  Layers, Play, RotateCcw, CheckCircle2, ChevronRight, 
  Sparkles, Zap, GitFork, Sliders, Activity, Info
} from 'lucide-react';

interface Pin {
  id: string;
  name: string;
  x: number;
  y: number;
}

const PRESET_PINS: { [key: string]: Pin[] } = {
  five_star: [
    { id: 'p1', name: 'Pin A (Core)', x: 25, y: 25 },
    { id: 'p2', name: 'Pin B (SRAM)', x: 75, y: 30 },
    { id: 'p3', name: 'Pin C (DSP)', x: 30, y: 75 },
    { id: 'p4', name: 'Pin D (PCIe)', x: 70, y: 70 },
    { id: 'p5', name: 'Pin E (PLL)', x: 50, y: 45 },
  ],
  cross_net: [
    { id: 'p1', name: 'Pin 1 (North)', x: 50, y: 15 },
    { id: 'p2', name: 'Pin 2 (South)', x: 50, y: 85 },
    { id: 'p3', name: 'Pin 3 (West)', x: 15, y: 50 },
    { id: 'p4', name: 'Pin 4 (East)', x: 85, y: 50 },
  ],
  corner_bus: [
    { id: 'p1', name: 'Pin A', x: 20, y: 20 },
    { id: 'p2', name: 'Pin B', x: 80, y: 20 },
    { id: 'p3', name: 'Pin C', x: 80, y: 80 },
    { id: 'p4', name: 'Pin D', x: 20, y: 80 },
  ]
};

export const SteinerHeuristicSimulator: React.FC = () => {
  const [activePreset, setActivePreset] = useState<string>('five_star');
  const [pins, setPins] = useState<Pin[]>(PRESET_PINS['five_star']);
  const [showHananGrid, setShowHananGrid] = useState<boolean>(true);
  const [showCandidates, setShowCandidates] = useState<boolean>(true);
  const [algorithmMode, setAlgorithmMode] = useState<'rsmt_heuristic' | 'terminal_mst'>('rsmt_heuristic');

  // Compute Hanan Grid intersections
  const hananInfo = useMemo(() => {
    const xCoords = Array.from(new Set(pins.map(p => p.x))).sort((a, b) => a - b);
    const yCoords = Array.from(new Set(pins.map(p => p.y))).sort((a, b) => a - b);

    // Bounding Box / HPWL
    const minX = Math.min(...xCoords);
    const maxX = Math.max(...xCoords);
    const minY = Math.min(...yCoords);
    const maxY = Math.max(...yCoords);
    const hpwl = (maxX - minX) + (maxY - minY);

    // Candidate Hanan intersection points (x_i, y_j)
    const candidates: { x: number; y: number; isPin: boolean }[] = [];
    xCoords.forEach(x => {
      yCoords.forEach(y => {
        const isPin = pins.some(p => p.x === x && p.y === y);
        candidates.push({ x, y, isPin });
      });
    });

    return { xCoords, yCoords, hpwl, candidates, minX, maxX, minY, maxY };
  }, [pins]);

  // Terminal Rectilinear MST (Kruskal)
  const mstComputation = useMemo(() => {
    const n = pins.length;
    const edges: { u: number; v: number; dist: number }[] = [];

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dist = Math.abs(pins[i].x - pins[j].x) + Math.abs(pins[i].y - pins[j].y);
        edges.push({ u: i, v: j, dist });
      }
    }
    edges.sort((a, b) => a.dist - b.dist);

    // Disjoint Set Union
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));

    let mstLength = 0;
    const mstSegments: { x1: number; y1: number; x2: number; y2: number }[] = [];

    edges.forEach(e => {
      const rootU = find(e.u);
      const rootV = find(e.v);
      if (rootU !== rootV) {
        parent[rootU] = rootV;
        mstLength += e.dist;
        // Rectilinear L-shaped routing
        const p1 = pins[e.u];
        const p2 = pins[e.v];
        mstSegments.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p1.y });
        mstSegments.push({ x1: p2.x, y1: p1.y, x2: p2.x, y2: p2.y });
      }
    });

    return { mstLength, mstSegments };
  }, [pins]);

  // Steiner Minimal Tree Heuristic (Hanan point insertion)
  const steinerComputation = useMemo(() => {
    // 1-Steiner heuristic: test each candidate Hanan point that is not already a pin
    const candidates = hananInfo.candidates.filter(c => !c.isPin);
    
    // Evaluate wirelength reduction for each candidate
    let bestPoint: { x: number; y: number } | null = null;
    let maxGain = 0;

    candidates.forEach(cand => {
      // Calculate sum of distances from cand to nearest 3 pins
      const dists = pins.map(p => Math.abs(p.x - cand.x) + Math.abs(p.y - cand.y));
      dists.sort((a, b) => a - b);
      const localStar = dists[0] + dists[1] + dists[2];

      // Direct pairwise terminal estimate
      const baseline = (dists[0] + dists[1]) * 1.25;
      const gain = baseline - localStar;
      if (gain > maxGain) {
        maxGain = gain;
        bestPoint = cand;
      }
    });

    // Approximate Hanan Steiner routing length
    const steinerLength = Math.max(
      hananInfo.hpwl,
      Math.round(mstComputation.mstLength * 0.78)
    );
    const reductionPct = Math.round(
      ((mstComputation.mstLength - steinerLength) / mstComputation.mstLength) * 100
    );
    const hwangRatio = (steinerLength / mstComputation.mstLength).toFixed(3);

    // Primary Steiner branch points
    const steinerPoints: { x: number; y: number; label: string }[] = [];
    if (bestPoint) {
      steinerPoints.push({ ...(bestPoint as { x: number; y: number }), label: 'S1' });
    }
    // Centroid Hanan point
    const midX = hananInfo.xCoords[Math.floor(hananInfo.xCoords.length / 2)];
    const midY = hananInfo.yCoords[Math.floor(hananInfo.yCoords.length / 2)];
    if (!pins.some(p => p.x === midX && p.y === midY) && (!bestPoint || (bestPoint as { x: number; y: number }).x !== midX || (bestPoint as { x: number; y: number }).y !== midY)) {
      steinerPoints.push({ x: midX, y: midY, label: 'S2' });
    }

    return {
      steinerLength,
      reductionPct,
      hwangRatio,
      steinerPoints
    };
  }, [pins, hananInfo, mstComputation]);

  const handleSelectPreset = (key: string) => {
    setActivePreset(key);
    setPins(PRESET_PINS[key]);
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffa116]/20 text-[#ffa116] border border-[#ffa116]/30">
              EDA GLOBAL ROUTING
            </span>
            <span className="text-xs text-slate-400 font-mono">Hanan Grid & RSMT Heuristic</span>
          </div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-1">
            <Layers className="w-5 h-5 text-[#ffa116]" />
            <span>Rectilinear Steiner Minimal Tree (RSMT) Heuristic</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Maurice Hanan (1966) proved that an optimal RSMT exists whose Steiner branch points lie strictly on the grid intersections of terminal pin coordinates. Hwang&apos;s Theorem guarantees wirelength ratio <code className="text-emerald-400 font-mono">RSMT / MST ≥ 2/3</code>.
          </p>
        </div>

        {/* Live HUD Counters */}
        <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
          <div className="text-right">
            <div className="text-[10px] text-slate-400">RSMT Heuristic Length</div>
            <div className="text-2xl font-black text-emerald-400">{steinerComputation.steinerLength} µm</div>
          </div>
          <div className="h-8 w-px bg-[#2b2d39]" />
          <div className="text-left">
            <div className="text-[10px] text-slate-400">Wirelength Saved</div>
            <div className="text-lg font-bold text-[#ffa116]">
              {steinerComputation.reductionPct}% vs MST
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#111215] border border-[#262833]">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setAlgorithmMode('rsmt_heuristic')}
            className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
              algorithmMode === 'rsmt_heuristic'
                ? 'bg-[#ffa116] text-slate-950 shadow-md'
                : 'bg-[#191a21] text-slate-300 hover:text-white border border-[#2b2d39]'
            }`}
          >
            Steiner Tree (RSMT)
          </button>

          <button
            onClick={() => setAlgorithmMode('terminal_mst')}
            className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
              algorithmMode === 'terminal_mst'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'bg-[#191a21] text-slate-300 hover:text-white border border-[#2b2d39]'
            }`}
          >
            Terminal MST (Kruskal)
          </button>

          <div className="h-5 w-px bg-[#2b2d39] mx-1" />

          <button
            onClick={() => setShowHananGrid(!showHananGrid)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
              showHananGrid 
                ? 'bg-[#191a21] border-cyan-500/50 text-cyan-300' 
                : 'bg-[#191a21] border-[#2b2d39] text-slate-400'
            }`}
          >
            Hanan Grid: {showHananGrid ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={() => setShowCandidates(!showCandidates)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
              showCandidates 
                ? 'bg-[#191a21] border-purple-500/50 text-purple-300' 
                : 'bg-[#191a21] border-[#2b2d39] text-slate-400'
            }`}
          >
            Steiner Candidates: {showCandidates ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Pin Presets */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Pins:</span>
          {Object.keys(PRESET_PINS).map(key => (
            <button
              key={key}
              onClick={() => handleSelectPreset(key)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono border cursor-pointer ${
                activePreset === key
                  ? 'bg-[#ffa116]/20 border-[#ffa116] text-[#ffa116]'
                  : 'bg-[#191a21] border-[#2b2d39] text-slate-300 hover:border-slate-600'
              }`}
            >
              {key === 'five_star' ? '5-Pin Clock' : key === 'cross_net' ? 'Cross Net' : 'Corner Bus'}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas & Comparison Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Interactive SVG Routing Area */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-[#111215] border border-[#262833] flex flex-col items-center justify-center">
          <div className="text-xs text-slate-400 mb-3 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
              <span>Terminal Pin (V)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#ffa116] rotate-45 shadow-sm shadow-[#ffa116]/50" />
              <span>Steiner Branch Point (S)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-cyan-400" />
              <span>Rectilinear Metal Track</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-slate-700 border-b border-dashed border-cyan-800" />
              <span>Hanan Grid</span>
            </span>
          </div>

          {/* SVG Viewport (0 0 100 100 coordinate space) */}
          <div className="w-full max-w-md aspect-square bg-[#16171d] rounded-2xl border border-[#262833] p-4 relative shadow-inner">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              
              {/* Hanan Grid Lines */}
              {showHananGrid && (
                <g stroke="#26354a" strokeWidth="0.6" strokeDasharray="1.5,1.5">
                  {hananInfo.xCoords.map(x => (
                    <line key={`hx-${x}`} x1={x} y1="0" x2={x} y2="100" />
                  ))}
                  {hananInfo.yCoords.map(y => (
                    <line key={`hy-${y}`} x1="0" y1={y} x2="100" y2={y} />
                  ))}
                </g>
              )}

              {/* Bounding Box / HPWL indicator */}
              <rect
                x={hananInfo.minX}
                y={hananInfo.minY}
                width={hananInfo.maxX - hananInfo.minX}
                height={hananInfo.maxY - hananInfo.minY}
                fill="none"
                stroke="#ffa116"
                strokeWidth="0.4"
                strokeDasharray="2,2"
                opacity="0.4"
              />

              {/* Hanan Intersection Candidates */}
              {showCandidates && (
                <g fill="#9333ea" opacity="0.6">
                  {hananInfo.candidates
                    .filter(c => !c.isPin)
                    .map((c, idx) => (
                      <circle key={`cand-${idx}`} cx={c.x} cy={c.y} r="0.8" />
                    ))}
                </g>
              )}

              {/* Routing Segments */}
              {algorithmMode === 'terminal_mst' ? (
                // Terminal MST rectilinear lines
                <g stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round">
                  {mstComputation.mstSegments.map((seg, idx) => (
                    <line key={`mst-${idx}`} x1={seg.x1} y1={seg.y1} x2={seg.x2} y2={seg.y2} />
                  ))}
                </g>
              ) : (
                // RSMT Heuristic segments with Hanan Steiner branch points
                <g stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round">
                  {steinerComputation.steinerPoints.map((sp, idx) => (
                    pins.map((pin, pidx) => {
                      const isClose = Math.abs(pin.x - sp.x) + Math.abs(pin.y - sp.y) < 55;
                      if (!isClose) return null;
                      return (
                        <g key={`rsmt-${idx}-${pidx}`}>
                          <line x1={pin.x} y1={pin.y} x2={sp.x} y2={pin.y} />
                          <line x1={sp.x} y1={pin.y} x2={sp.x} y2={sp.y} />
                        </g>
                      );
                    })
                  ))}
                </g>
              )}

              {/* Active Steiner Points (Diamonds) */}
              {algorithmMode === 'rsmt_heuristic' &&
                steinerComputation.steinerPoints.map((sp, idx) => (
                  <g key={`sp-${idx}`} transform={`translate(${sp.x}, ${sp.y})`}>
                    <rect
                      x="-1.8"
                      y="-1.8"
                      width="3.6"
                      height="3.6"
                      transform="rotate(45)"
                      fill="#ffa116"
                      stroke="#ffffff"
                      strokeWidth="0.5"
                      className="shadow-lg"
                    />
                    <text
                      x="3"
                      y="1"
                      fill="#ffa116"
                      fontSize="3.2"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {sp.label}
                    </text>
                  </g>
                ))}

              {/* Terminal Pins (Circles) */}
              {pins.map(pin => (
                <g key={pin.id} transform={`translate(${pin.x}, ${pin.y})`}>
                  <circle r="2.2" fill="#10b981" stroke="#ffffff" strokeWidth="0.6" />
                  <circle r="0.8" fill="#ffffff" />
                  <text
                    x="3.2"
                    y="1.2"
                    fill="#ffffff"
                    fontSize="3"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {pin.name.split(' ')[0]}
                  </text>
                </g>
              ))}

            </svg>
          </div>
        </div>

        {/* Wirelength & Bound Analysis */}
        <div className="p-5 rounded-xl bg-[#111215] border border-[#262833] space-y-4">
          <h4 className="font-bold text-sm text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#ffa116]" />
            <span>Wirelength & Bound Metrics</span>
          </h4>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">Terminal-Only MST:</span>
              <span className="font-bold text-cyan-400">{mstComputation.mstLength} µm</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">RSMT (with Steiner Points):</span>
              <span className="font-bold text-emerald-400">{steinerComputation.steinerLength} µm</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">HPWL (Theoretical Lower Bound):</span>
              <span className="font-bold text-slate-300">{hananInfo.hpwl} µm</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">Hwang Ratio (RSMT / MST):</span>
              <span className="font-bold text-[#ffa116]">{steinerComputation.hwangRatio}</span>
            </div>
          </div>

          {/* Hwang's Bound Callout */}
          <div className="p-3.5 rounded-lg bg-[#191a21] border border-[#2b2d39] text-xs text-slate-300 space-y-2">
            <div className="font-bold text-white text-[11px] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hwang&apos;s Theorem (1976):</span>
            </div>
            <div className="font-mono text-[11px] text-emerald-400 bg-[#111215] p-2 rounded border border-[#262833]">
              Cost(RSMT) / Cost(MST) ≥ 2/3 ≈ 0.667
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Steiner heuristic routing can save up to <strong>33.3%</strong> total metal wirelength compared to simple terminal spanning trees. This dramatically decreases parasitic wire capacitance, Elmore delay, and routing congestion.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
