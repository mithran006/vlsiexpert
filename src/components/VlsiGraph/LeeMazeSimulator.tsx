import React, { useState, useMemo, useCallback } from 'react';
import { 
  Grid, Play, RotateCcw, CheckCircle2, ChevronRight, 
  Sparkles, Layers, ShieldAlert, Cpu, Activity, Compass, ArrowRight
} from 'lucide-react';

const GRID_SIZE = 8;

export const LeeMazeSimulator: React.FC = () => {
  const [startPos, setStartPos] = useState<[number, number]>([1, 1]);
  const [targetPos, setTargetPos] = useState<[number, number]>([6, 6]);
  const [obstacles, setObstacles] = useState<Set<string>>(
    new Set(['2,1', '2,2', '2,3', '4,4', '4,5', '4,6', '5,4'])
  );
  const [waveStep, setWaveStep] = useState<number>(0);
  const [isFullRun, setIsFullRun] = useState<boolean>(true);

  // Full BFS wave expansion and shortest-path backtrace
  const mazeComputation = useMemo(() => {
    const grid: number[][] = Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(-1));
    
    // Set obstacles
    obstacles.forEach(key => {
      const [r, c] = key.split(',').map(Number);
      if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
        grid[r][c] = -99; // obstacle
      }
    });

    const queue: [number, number, number][] = [[startPos[0], startPos[1], 0]];
    grid[startPos[0]][startPos[1]] = 0;

    let maxDistReached = 0;
    let targetReached = false;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length > 0) {
      const [r, c, dist] = queue.shift()!;
      maxDistReached = Math.max(maxDistReached, dist);

      if (r === targetPos[0] && c === targetPos[1]) {
        targetReached = true;
        break;
      }

      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE) {
          if (grid[nr][nc] === -1) {
            grid[nr][nc] = dist + 1;
            queue.push([nr, nc, dist + 1]);
          }
        }
      }
    }

    // Backtrace from target
    const path: [number, number][] = [];
    let bends = 0;
    if (targetReached) {
      let curr: [number, number] = [targetPos[0], targetPos[1]];
      path.push(curr);
      let lastDir: [number, number] | null = null;

      while (curr[0] !== startPos[0] || curr[1] !== startPos[1]) {
        const curDist = grid[curr[0]][curr[1]];
        let nextStepFound = false;

        for (const [dr, dc] of dirs) {
          const pr = curr[0] + dr;
          const pc = curr[1] + dc;
          if (pr >= 0 && pr < GRID_SIZE && pc >= 0 && pc < GRID_SIZE) {
            if (grid[pr][pc] === curDist - 1) {
              if (lastDir && (lastDir[0] !== dr || lastDir[1] !== dc)) {
                bends++;
              }
              lastDir = [dr, dc];
              curr = [pr, pc];
              path.push(curr);
              nextStepFound = true;
              break;
            }
          }
        }
        if (!nextStepFound) break;
      }
      path.reverse();
    }

    // Count explored cells
    let exploredCount = 0;
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (grid[r][c] >= 0) exploredCount++;
      }
    }

    const manhattanDist = Math.abs(targetPos[0] - startPos[0]) + Math.abs(targetPos[1] - startPos[1]);
    const pathLength = targetReached ? path.length - 1 : 0;
    const efficiency = pathLength > 0 ? Math.round((manhattanDist / pathLength) * 100) : 0;

    return {
      grid,
      targetReached,
      path,
      pathLength,
      maxDistReached,
      exploredCount,
      manhattanDist,
      efficiency,
      bends
    };
  }, [startPos, targetPos, obstacles]);

  // Handle cell click to toggle obstacles
  const toggleObstacle = (r: number, c: number) => {
    if ((r === startPos[0] && c === startPos[1]) || (r === targetPos[0] && c === targetPos[1])) return;
    const key = `${r},${c}`;
    setObstacles(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleStepWave = () => {
    setIsFullRun(false);
    setWaveStep(prev => (prev < mazeComputation.maxDistReached ? prev + 1 : prev));
  };

  const handleFullRoute = () => {
    setIsFullRun(true);
    setWaveStep(mazeComputation.maxDistReached);
  };

  const handleReset = () => {
    setWaveStep(0);
    setIsFullRun(true);
  };

  const pathSet = useMemo(() => {
    return new Set(mazeComputation.path.map(([r, c]) => `${r},${c}`));
  }, [mazeComputation.path]);

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffa116]/20 text-[#ffa116] border border-[#ffa116]/30">
              EDA ROUTING
            </span>
            <span className="text-xs text-slate-400 font-mono">Guaranteed Shortest Path Router</span>
          </div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-1">
            <Grid className="w-5 h-5 text-[#ffa116]" />
            <span>Lee Maze Algorithm & Breadth-First Wavefront Router</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Classic grid routing engine. Radiates Manhattan wavefront <code className="text-cyan-400 font-mono">1, 2, 3...</code> from Source, then backtracks descending numbers to guarantee the minimum wirelength rectilinear route.
          </p>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
          <div className="text-right">
            <div className="text-[10px] text-slate-400">Total Wirelength</div>
            <div className="text-2xl font-black text-emerald-400">
              {mazeComputation.targetReached ? `${mazeComputation.pathLength} units` : 'Blocked'}
            </div>
          </div>
          <div className="h-8 w-px bg-[#2b2d39]" />
          <div className="text-left">
            <div className="text-[10px] text-slate-400">Route Bends</div>
            <div className="text-lg font-bold text-[#ffa116]">
              {mazeComputation.bends} vias/turns
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#111215] border border-[#262833]">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleFullRoute}
            className="px-3.5 py-1.5 rounded-lg bg-[#ffa116] hover:bg-[#ffb33e] text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Run Complete Route</span>
          </button>

          <button
            onClick={handleStepWave}
            className="px-3.5 py-1.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-cyan-400 hover:text-cyan-300 border border-[#2b2d39] font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Step Wave (+1 Hop)</span>
          </button>

          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-slate-400 hover:text-white border border-[#2b2d39] text-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Wave</span>
          </button>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 text-xs">Obstacle Presets:</span>
          <button
            onClick={() => setObstacles(new Set(['2,1', '2,2', '2,3', '4,4', '4,5', '4,6', '5,4']))}
            className="px-2.5 py-1 rounded bg-[#191a21] hover:bg-[#262833] text-slate-300 text-[11px] font-mono border border-[#2b2d39] cursor-pointer"
          >
            L-Bend Wall
          </button>
          <button
            onClick={() => setObstacles(new Set(['1,3', '2,3', '3,3', '4,3', '5,3', '6,3', '4,5', '5,5', '6,5']))}
            className="px-2.5 py-1 rounded bg-[#191a21] hover:bg-[#262833] text-slate-300 text-[11px] font-mono border border-[#2b2d39] cursor-pointer"
          >
            Channel Choke
          </button>
          <button
            onClick={() => setObstacles(new Set())}
            className="px-2.5 py-1 rounded bg-[#191a21] hover:bg-[#262833] text-slate-300 text-[11px] font-mono border border-[#2b2d39] cursor-pointer"
          >
            Clear Grid
          </button>
        </div>
      </div>

      {/* Grid Canvas and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 8x8 Physical Routing Grid */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-[#111215] border border-[#262833] flex flex-col items-center justify-center">
          <div className="text-xs text-slate-400 mb-3 flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-500 font-mono text-[9px] text-black font-bold flex items-center justify-center">S</span>
              <span>Source (Pin A)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#ffa116] font-mono text-[9px] text-black font-bold flex items-center justify-center">T</span>
              <span>Target (Pin B)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" />
              <span>Obstacle (Macro)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-cyan-400 shadow-sm shadow-cyan-400/50" />
              <span>Backtrace Route</span>
            </span>
          </div>

          {/* Interactive Grid */}
          <div className="inline-grid grid-cols-8 gap-1.5 p-3 rounded-2xl bg-[#16171d] border border-[#262833] shadow-inner select-none">
            {Array.from({ length: GRID_SIZE }).map((_, r) =>
              Array.from({ length: GRID_SIZE }).map((_, c) => {
                const isStart = r === startPos[0] && c === startPos[1];
                const isTarget = r === targetPos[0] && c === targetPos[1];
                const isObstacle = obstacles.has(`${r},${c}`);
                const isPath = pathSet.has(`${r},${c}`);
                const dist = mazeComputation.grid[r][c];
                const isVisibleWave = isFullRun ? dist >= 0 : dist >= 0 && dist <= waveStep;

                let cellStyle = 'bg-[#1a1b23] border-[#2b2d39] text-slate-600 hover:border-slate-500';
                if (isObstacle) {
                  cellStyle = 'bg-slate-900 border-rose-900/60 text-slate-600 pattern-diagonal-stripes cursor-pointer';
                } else if (isPath && (isFullRun || waveStep >= mazeComputation.maxDistReached)) {
                  cellStyle = 'bg-cyan-500/30 border-cyan-400 text-cyan-200 font-black shadow-lg shadow-cyan-500/30';
                } else if (isStart) {
                  cellStyle = 'bg-emerald-500 border-emerald-400 text-slate-950 font-black shadow-lg shadow-emerald-500/40';
                } else if (isTarget) {
                  cellStyle = 'bg-[#ffa116] border-amber-300 text-slate-950 font-black shadow-lg shadow-[#ffa116]/40';
                } else if (isVisibleWave) {
                  cellStyle = 'bg-blue-950/40 border-blue-600/40 text-blue-300 font-semibold';
                }

                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => toggleObstacle(r, c)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex flex-col items-center justify-center text-xs font-mono transition-all cursor-pointer relative ${cellStyle}`}
                    title={`Cell (${r}, ${c}) - Distance: ${dist === -99 ? 'OBSTACLE' : dist === -1 ? 'Unreached' : dist}`}
                  >
                    {isStart ? (
                      <span className="font-black text-sm">S</span>
                    ) : isTarget ? (
                      <span className="font-black text-sm">T</span>
                    ) : isObstacle ? (
                      <span className="text-[10px] text-slate-600">BLK</span>
                    ) : isVisibleWave ? (
                      <span className="text-xs">{dist}</span>
                    ) : (
                      <span className="text-[9px] text-slate-700">·</span>
                    )}

                    {isPath && !isStart && !isTarget && (isFullRun || waveStep >= mazeComputation.maxDistReached) && (
                      <span className="absolute w-2 h-2 rounded-full bg-cyan-400 ring-2 ring-black top-1 right-1" />
                    )}
                  </button>
                );
              })
            )}
          </div>
          <div className="text-[11px] text-slate-500 mt-3 font-mono">
            Tip: Click any cell on the grid to dynamically place or clear macro obstacles.
          </div>
        </div>

        {/* Routing Metrics & Explanation */}
        <div className="p-5 rounded-xl bg-[#111215] border border-[#262833] space-y-4">
          <h4 className="font-bold text-sm text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#ffa116]" />
            <span>EDA Router Execution Stats</span>
          </h4>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">Manhattan Bounding Dist:</span>
              <span className="font-bold text-white">{mazeComputation.manhattanDist} units</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">Actual Rectilinear Route:</span>
              <span className="font-bold text-emerald-400">{mazeComputation.pathLength} units</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">Explored Wavefront Cells:</span>
              <span className="font-bold text-cyan-400">{mazeComputation.exploredCount} / 64</span>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833] flex justify-between items-center">
              <span className="text-slate-400">Routing Efficiency:</span>
              <span className="font-bold text-[#ffa116]">{mazeComputation.efficiency}%</span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#191a21] border border-[#2b2d39] text-xs text-slate-300 space-y-2">
            <div className="font-bold text-white text-[11px] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Optimality Guarantee:</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Lee&apos;s algorithm implements uniform-cost BFS. Because edge traversal costs are positive unit values, the first wave to reach the target pin is mathematically proven to possess the minimum possible rectilinear wirelength.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
