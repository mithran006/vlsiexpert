import React, { useState, useMemo } from 'react';
import { 
  Network, Play, RotateCcw, CheckCircle2, ChevronRight, 
  Layers, ArrowRight, Zap, Trophy, BookOpen, 
  HelpCircle, Sparkles, Filter, Code2, GitFork, Activity, Gauge,
  Clock, GitCommit, Split, Cpu, AlertTriangle, Milestone, Calculator,
  Scissors, Grid, Binary
} from 'lucide-react';
import { Problem } from '../types';
import { VLSI_GRAPH_PROBLEMS } from '../data/vlsiGraphProblems';
import { KlAlgorithmSimulator } from './VlsiGraph/KlAlgorithmSimulator';
import { LeeMazeSimulator } from './VlsiGraph/LeeMazeSimulator';
import { SteinerHeuristicSimulator } from './VlsiGraph/SteinerHeuristicSimulator';
import { ObddRobddSimulator } from './VlsiGraph/ObddRobddSimulator';
import { DataFlowGraphSimulator } from './VlsiGraph/DataFlowGraphSimulator';

export interface AlgorithmProblemMapping {
  id: string;
  label: string;
  shortName: string;
  desc: string;
  problemIds: string[];
}

export const ALGORITHM_ASSIGNED_PROBLEMS: Record<string, AlgorithmProblemMapping> = {
  kl_algorithm: {
    id: 'kl_algorithm',
    label: 'Kernighan-Lin (KL) Min-Cut Netlist Partitioning',
    shortName: '1. KL Algorithm',
    desc: 'Bipartitioning, FM bucket sort, and simulated annealing placement',
    problemIds: ['grph-20', 'grph-21', 'grph-24', 'grph-25', 'grph-37']
  },
  lee_maze: {
    id: 'lee_maze',
    label: "Lee's Maze Router BFS Grid Expansion & Backtrace",
    shortName: '2. Lee Maze Router',
    desc: 'Breadth-first search wavefront propagation, detour metrics, and grid routing',
    problemIds: ['grph-07', 'grph-08', 'grph-09', 'grph-10', 'grph-18']
  },
  steiner_heuristic: {
    id: 'steiner_heuristic',
    label: 'Steiner Minimal Tree & Hanan Grid Interconnects',
    shortName: '3. Steiner Heuristic',
    desc: 'Hanan grid intersection, Kruskal RMST, and Hwang 2/3 wirelength bound',
    problemIds: ['grph-11', 'grph-12', 'grph-13', 'grph-14', 'grph-19']
  },
  obdd_robdd: {
    id: 'obdd_robdd',
    label: 'Reduced Ordered Binary Decision Diagrams (ROBDD)',
    shortName: '4. OBDD & ROBDD',
    desc: 'Canonical Boolean synthesis, Shannon expansion, and variable ordering',
    problemIds: ['grph-30', 'grph-35', 'grph-36', 'grph-53', 'grph-54']
  },
  data_flow_graph: {
    id: 'data_flow_graph',
    label: 'Data Flow Graph (DFG) Scheduling & Retiming',
    shortName: '5. Data Flow Graph',
    desc: 'HLS ASAP, ALAP, operation mobility, and pipeline retiming',
    problemIds: ['grph-29', 'grph-39', 'grph-43', 'grph-47', 'grph-57']
  },
  dag_sta: {
    id: 'dag_sta',
    label: 'DAG Static Timing Analysis & Critical Path',
    shortName: '6. DAG & STA',
    desc: 'Topological sort, arrival time accumulation, and slack evaluation',
    problemIds: ['grph-01', 'grph-02', 'grph-03', 'grph-04', 'grph-05']
  },
  shortest_path: {
    id: 'shortest_path',
    label: 'Shortest Path & Dijkstra Min-RC Wire Delay',
    shortName: '7. Shortest Path',
    desc: 'Elmore RC model delay, latency reduction, and bandwidth optimization',
    problemIds: ['grph-06', 'grph-31', 'grph-32', 'grph-49', 'grph-50']
  },
  longest_path: {
    id: 'longest_path',
    label: 'Longest Path Critical Setup Slack & Fmax Closure',
    shortName: '8. Longest Path',
    desc: 'Timing closure, pipelined datapath balance, and low-power closure',
    problemIds: ['grph-42', 'grph-59', 'grph-60', 'grph-38', 'grph-56']
  },
  liao_wong: {
    id: 'liao_wong',
    label: 'Liao-Wong 1D Layout Compaction & Constraint Graph',
    shortName: '9. Liao-Wong',
    desc: 'Vertical & horizontal constraint graphs, sequence pairs, and B*-tree',
    problemIds: ['grph-15', 'grph-16', 'grph-17', 'grph-22', 'grph-23']
  },
  bellman_ford: {
    id: 'bellman_ford',
    label: 'Bellman-Ford Clock Skew & Negative Cycle Detection',
    shortName: '10. Bellman-Ford',
    desc: 'Clock skew cycle analysis, CDC isolation, and race condition check',
    problemIds: ['grph-33', 'grph-44', 'grph-48', 'grph-51', 'grph-52']
  },
  spanning_tree: {
    id: 'spanning_tree',
    label: 'Spanning Tree MST vs Steiner & Clock Tree Routing',
    shortName: '11. Spanning Tree',
    desc: 'Clock Tree Synthesis (CTS), fault tolerance, and minimum spanning trees',
    problemIds: ['grph-26', 'grph-27', 'grph-28', 'grph-45', 'grph-46']
  },
  dp_buffer: {
    id: 'dp_buffer',
    label: 'Dynamic Programming Van Ginneken Elmore Repeater Insertion',
    shortName: '12. Dynamic Prog',
    desc: 'Van Ginneken polynomial-time buffer insertion for RC interconnects',
    problemIds: ['grph-34', 'grph-40', 'grph-41', 'grph-55', 'grph-58']
  }
};

interface VlsiGraphTheoryStudyProps {
  onSelectProblem: (problem: Problem) => void;
  solvedProblemIds: string[];
  onBackToProblems?: () => void;
}

export const VlsiGraphTheoryStudy: React.FC<VlsiGraphTheoryStudyProps> = ({
  onSelectProblem,
  solvedProblemIds,
  onBackToProblems
}) => {
  const [activeTab, setActiveTab] = useState<'labs' | 'problems' | 'theory'>('labs');
  const [selectedLab, setSelectedLab] = useState<string>('kl_algorithm');
  const [selectedAlgorithmFilter, setSelectedAlgorithmFilter] = useState<string>('all');

  // ==========================================
  // LAB 1: DAG & STA TIMING ANALYSIS
  // ==========================================
  const [gateDelays, setGateDelays] = useState<{ [key: string]: number }>({
    G1: 15,
    G2: 25,
    G3: 30,
    G4: 10,
    G5: 20
  });
  const [clockPeriod, setClockPeriod] = useState<number>(80); // ps

  const staComputed = useMemo(() => {
    const at_G1 = gateDelays.G1;
    const at_G2 = gateDelays.G2;
    const at_G4 = gateDelays.G4;

    const at_G3 = Math.max(at_G1, at_G2) + gateDelays.G3;
    const at_G5 = Math.max(at_G4, at_G2) + gateDelays.G5;

    const at_PO1 = at_G3;
    const at_PO2 = at_G5;

    const maxDelay = Math.max(at_PO1, at_PO2);
    const criticalPath = at_PO1 >= at_PO2 ? 'PI2 → G2 → G3 → PO1' : 'PI2 → G2 → G5 → PO2';

    const rat_PO1 = clockPeriod;
    const rat_PO2 = clockPeriod;
    const slack_PO1 = rat_PO1 - at_PO1;
    const slack_PO2 = rat_PO2 - at_PO2;
    const worstSlack = Math.min(slack_PO1, slack_PO2);

    return {
      at_G1, at_G2, at_G3, at_G4, at_G5,
      at_PO1, at_PO2, maxDelay, criticalPath,
      slack_PO1, slack_PO2, worstSlack
    };
  }, [gateDelays, clockPeriod]);

  // ==========================================
  // LAB 2: SHORTEST PATH (DIJKSTRA / DELAY-DRIVEN ROUTING)
  // ==========================================
  const [shortestSource, setShortestSource] = useState<string>('Source (A)');
  const [shortestTarget, setShortestTarget] = useState<string>('Sink (F)');
  const [netCapacitance, setNetCapacitance] = useState<number>(3); // fF

  const shortestPathResult = useMemo(() => {
    // Graph nodes: A(0), B(1), C(2), D(3), E(4), F(5)
    // Edge weights represent RC propagation delay (ps)
    const graph: { [key: string]: { [dest: string]: number } } = {
      'Source (A)': { 'B (Buffer)': 12 + netCapacitance * 2, 'C (Switch)': 18 + netCapacitance },
      'B (Buffer)': { 'D (Via)': 14, 'E (Trunk)': 22 + netCapacitance },
      'C (Switch)': { 'D (Via)': 8, 'E (Trunk)': 15 + netCapacitance },
      'D (Via)': { 'Sink (F)': 20 + netCapacitance },
      'E (Trunk)': { 'Sink (F)': 11 },
      'Sink (F)': {}
    };

    const dist: { [key: string]: number } = {};
    const prev: { [key: string]: string | null } = {};
    const unvisited = new Set(Object.keys(graph));

    Object.keys(graph).forEach(node => {
      dist[node] = Infinity;
      prev[node] = null;
    });
    dist[shortestSource] = 0;

    while (unvisited.size > 0) {
      let u: string | null = null;
      let minDist = Infinity;
      unvisited.forEach(node => {
        if (dist[node] < minDist) {
          minDist = dist[node];
          u = node;
        }
      });

      if (!u || minDist === Infinity || u === shortestTarget) break;
      unvisited.delete(u);

      const neighbors = graph[u] || {};
      for (const [v, w] of Object.entries(neighbors)) {
        if (unvisited.has(v)) {
          const alt = dist[u] + w;
          if (alt < dist[v]) {
            dist[v] = alt;
            prev[v] = u;
          }
        }
      }
    }

    const path: string[] = [];
    let curr: string | null = shortestTarget;
    while (curr) {
      path.unshift(curr);
      curr = prev[curr];
    }

    return {
      totalDelay: dist[shortestTarget],
      path: dist[shortestTarget] === Infinity ? [] : path,
      graph
    };
  }, [shortestSource, shortestTarget, netCapacitance]);

  // ==========================================
  // LAB 3: LONGEST PATH & CRITICAL SETUP TIME
  // ==========================================
  const [combDelays, setCombDelays] = useState<{ [key: string]: number }>({
    stage1_ALU: 38,
    stage1_Mul: 55,
    stage2_Shifter: 22,
    stage2_Adder: 19
  });
  const t_cq = 8; // FF Clock-to-Q delay (ps)
  const t_setup = 12; // FF Setup time (ps)

  const longestPathResult = useMemo(() => {
    // Path 1: FF1 -> ALU (stage1) -> Shifter (stage2) -> FF_out
    const path1_delay = t_cq + combDelays.stage1_ALU + combDelays.stage2_Shifter + t_setup;
    // Path 2: FF1 -> ALU (stage1) -> Adder (stage2) -> FF_out
    const path2_delay = t_cq + combDelays.stage1_ALU + combDelays.stage2_Adder + t_setup;
    // Path 3: FF2 -> Mul (stage1) -> Shifter (stage2) -> FF_out
    const path3_delay = t_cq + combDelays.stage1_Mul + combDelays.stage2_Shifter + t_setup;
    // Path 4: FF2 -> Mul (stage1) -> Adder (stage2) -> FF_out
    const path4_delay = t_cq + combDelays.stage1_Mul + combDelays.stage2_Adder + t_setup;

    const paths = [
      { name: 'Path 1: FF1 → ALU → Shifter → FF_out', delay: path1_delay, logic: combDelays.stage1_ALU + combDelays.stage2_Shifter },
      { name: 'Path 2: FF1 → ALU → Adder → FF_out', delay: path2_delay, logic: combDelays.stage1_ALU + combDelays.stage2_Adder },
      { name: 'Path 3: FF2 → Multiplier → Shifter → FF_out (CRITICAL)', delay: path3_delay, logic: combDelays.stage1_Mul + combDelays.stage2_Shifter },
      { name: 'Path 4: FF2 → Multiplier → Adder → FF_out', delay: path4_delay, logic: combDelays.stage1_Mul + combDelays.stage2_Adder }
    ];

    paths.sort((a, b) => b.delay - a.delay);
    const critical = paths[0];
    const minClockPeriod = critical.delay;
    const maxFreq = (1000000 / minClockPeriod).toFixed(1);

    return { paths, critical, minClockPeriod, maxFreq };
  }, [combDelays]);

  // ==========================================
  // LAB 4: LIAO-WONG 1D COMPACTOR
  // ==========================================
  // Layout modules with minimum distance constraints:
  // x_j - x_i >= w_i + s_ij  =>  x_i - x_j <= -(w_i + s_ij)
  const [moduleWidths, setModuleWidths] = useState<{ [key: string]: number }>({
    M1: 30, // um
    M2: 45,
    M3: 25,
    M4: 40
  });
  const [minSpacing, setMinSpacing] = useState<number>(10); // um

  const liaoWongResult = useMemo(() => {
    // Topological sequence: M1 -> M2 -> M4, M1 -> M3 -> M4
    const x_M1 = 0; // source pinned to 0
    const x_M2 = x_M1 + moduleWidths.M1 + minSpacing;
    const x_M3 = x_M1 + moduleWidths.M1 + minSpacing;
    const x_M4 = Math.max(x_M2 + moduleWidths.M2, x_M3 + moduleWidths.M3) + minSpacing;

    const totalChipWidth = x_M4 + moduleWidths.M4;
    const criticalCompactionChain = (x_M2 + moduleWidths.M2 >= x_M3 + moduleWidths.M3)
      ? 'Source → M1 → M2 → M4 → Die Boundary'
      : 'Source → M1 → M3 → M4 → Die Boundary';

    return {
      positions: { M1: x_M1, M2: x_M2, M3: x_M3, M4: x_M4 },
      totalChipWidth,
      criticalCompactionChain
    };
  }, [moduleWidths, minSpacing]);

  // ==========================================
  // LAB 5: BELLMAN-FORD & NEGATIVE CLOCK SKEW CYCLES
  // ==========================================
  const [clockSkewEdge, setClockSkewEdge] = useState<number>(-15); // ps negative skew
  const [holdBufferDelay, setHoldBufferDelay] = useState<number>(8); // ps buffer delay

  const bellmanFordResult = useMemo(() => {
    // Nodes: FF_A, FF_B, FF_C
    // Constraints:
    // T_B - T_A >= t_hold - d_min  => T_A - T_B <= d_min - t_hold
    // T_skew cycle detection: if sum of skews across cycle < 0, negative cycle!
    const edges = [
      { from: 'FF_A', to: 'FF_B', weight: 20 + holdBufferDelay },
      { from: 'FF_B', to: 'FF_C', weight: 15 },
      { from: 'FF_C', to: 'FF_A', weight: clockSkewEdge - holdBufferDelay }
    ];

    const cycleSum = edges.reduce((acc, e) => acc + e.weight, 0);
    const hasNegativeCycle = cycleSum < 0;

    // Run Bellman-Ford step relaxation
    const nodes = ['FF_A', 'FF_B', 'FF_C'];
    const dist: { [key: string]: number } = { FF_A: 0, FF_B: Infinity, FF_C: Infinity };

    for (let i = 0; i < nodes.length - 1; i++) {
      edges.forEach(e => {
        if (dist[e.from] + e.weight < dist[e.to]) {
          dist[e.to] = dist[e.from] + e.weight;
        }
      });
    }

    return {
      edges,
      cycleSum,
      hasNegativeCycle,
      dist
    };
  }, [clockSkewEdge, holdBufferDelay]);

  // ==========================================
  // LAB 6: SPANNING TREES & CLOCK TREE SYNTHESIS (CTS)
  // ==========================================
  const [clockSinks, setClockSinks] = useState<{ id: string; x: number; y: number; load: number }[]>([
    { id: 'Sink A (Core 0)', x: 15, y: 25, load: 12 },
    { id: 'Sink B (Core 1)', x: 85, y: 20, load: 14 },
    { id: 'Sink C (DSP 0)', x: 20, y: 80, load: 10 },
    { id: 'Sink D (DSP 1)', x: 80, y: 85, load: 15 }
  ]);
  const [treeAlgorithm, setTreeAlgorithm] = useState<'kruskal_mst' | 'prim_cts' | 'h_tree'>('prim_cts');

  const spanningTreeResult = useMemo(() => {
    // Bounding Box
    const minX = Math.min(...clockSinks.map(s => s.x));
    const maxX = Math.max(...clockSinks.map(s => s.x));
    const minY = Math.min(...clockSinks.map(s => s.y));
    const maxY = Math.max(...clockSinks.map(s => s.y));
    const hpwl = (maxX - minX) + (maxY - minY);

    // Wirelength approximations
    const mstLength = Math.round(hpwl * 1.32);
    const steinerLength = Math.round(hpwl * 1.06);
    const hTreeLength = Math.round(hpwl * 1.48);

    const skew_mst = 28; // ps (unbalanced delays)
    const skew_cts = 4;  // ps (balanced bounded skew tree)
    const skew_htree = 0.5; // ps (symmetric perfect H-Tree)

    return {
      hpwl,
      mstLength,
      steinerLength,
      hTreeLength,
      currentLength: treeAlgorithm === 'kruskal_mst' ? mstLength : treeAlgorithm === 'h_tree' ? hTreeLength : steinerLength,
      currentSkew: treeAlgorithm === 'kruskal_mst' ? skew_mst : treeAlgorithm === 'h_tree' ? skew_htree : skew_cts
    };
  }, [clockSinks, treeAlgorithm]);

  // ==========================================
  // LAB 7: DYNAMIC PROGRAMMING BUFFER INSERTION (VAN GINNEKEN)
  // ==========================================
  const [wireLengthUm, setWireLengthUm] = useState<number>(800); // um
  const [bufferDriveStrength, setBufferDriveStrength] = useState<number>(2); // X1, X2, X4
  const [wireResistancePerUm, setWireResistancePerUm] = useState<number>(0.05); // ohm/um

  const vanGinnekenDP = useMemo(() => {
    // Elmore Delay formula:
    // Without buffers: D_unbuff = R_wire * C_wire * L^2 / 2 + R_wire * L * C_load
    // With optimal DP buffers: D_opt = N * (t_buf + r_buf * c_wire * (L/N) + r_wire * c_buf * (L/N))
    const c_wire_fF = 0.2; // fF/um
    const c_load_fF = 15;
    const r_wire_total = wireResistancePerUm * wireLengthUm;
    const c_wire_total = c_wire_fF * wireLengthUm;

    // Unbuffered quadratic RC delay (ps)
    const unbufferedDelay = Math.round(0.5 * r_wire_total * c_wire_total + r_wire_total * c_load_fF);

    // Optimal buffer count via DP trade-off
    const optimalBuffers = Math.max(1, Math.round(wireLengthUm / 250));
    const bufferIntrinsicDelay = 12 / bufferDriveStrength;
    const bufferedDelay = Math.round(optimalBuffers * bufferIntrinsicDelay + (unbufferedDelay / (optimalBuffers + 1.2)));
    const speedupPct = Math.round(((unbufferedDelay - bufferedDelay) / unbufferedDelay) * 100);

    return {
      unbufferedDelay,
      bufferedDelay,
      optimalBuffers,
      speedupPct
    };
  }, [wireLengthUm, bufferDriveStrength, wireResistancePerUm]);

  // ==========================================
  // LAB 8: LEE'S MAZE ROUTER STATE
  // ==========================================
  const GRID_SIZE = 8;
  const [startPos, setStartPos] = useState<[number, number]>([1, 1]);
  const [targetPos, setTargetPos] = useState<[number, number]>([6, 6]);
  const [obstacles, setObstacles] = useState<Set<string>>(new Set([
    '2,1', '2,2', '2,3', '4,4', '4,5', '4,6', '5,4'
  ]));

  const mazeSolution = useMemo(() => {
    const grid: number[][] = Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(-1));
    obstacles.forEach(key => {
      const [r, c] = key.split(',').map(Number);
      if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
        grid[r][c] = -99; // obstacle
      }
    });

    const queue: [number, number, number][] = [[startPos[0], startPos[1], 0]];
    grid[startPos[0]][startPos[1]] = 0;

    let reached = false;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length > 0) {
      const [r, c, dist] = queue.shift()!;
      if (r === targetPos[0] && c === targetPos[1]) {
        reached = true;
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

    const path: [number, number][] = [];
    if (reached) {
      let curr: [number, number] = [targetPos[0], targetPos[1]];
      path.push(curr);
      while (curr[0] !== startPos[0] || curr[1] !== startPos[1]) {
        const curDist = grid[curr[0]][curr[1]];
        for (const [dr, dc] of dirs) {
          const pr = curr[0] + dr;
          const pc = curr[1] + dc;
          if (pr >= 0 && pr < GRID_SIZE && pc >= 0 && pc < GRID_SIZE) {
            if (grid[pr][pc] === curDist - 1) {
              curr = [pr, pc];
              path.push(curr);
              break;
            }
          }
        }
      }
      path.reverse();
    }

    return { grid, reached, path, pathLength: reached ? path.length - 1 : 0 };
  }, [startPos, targetPos, obstacles]);

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

  // ==========================================
  // LAB 9: CHANNEL ROUTING VCG CYCLE DETECTOR
  // ==========================================
  const [channelColumns, setChannelColumns] = useState<{ top: string; bot: string }[]>([
    { top: 'N1', bot: 'N2' },
    { top: 'N3', bot: 'N1' },
    { top: 'N2', bot: 'N3' },
    { top: 'N4', bot: 'N5' }
  ]);

  const vcgCycleInfo = useMemo(() => {
    const edges: [string, string][] = [];
    channelColumns.forEach(col => {
      if (col.top && col.bot && col.top !== col.bot) {
        edges.push([col.top, col.bot]);
      }
    });

    let hasCycle = false;
    let cycleNodes: string[] = [];

    for (const [u, v] of edges) {
      for (const [u2, v2] of edges) {
        if (v === u2 && v2 === u) {
          hasCycle = true;
          cycleNodes = [u, v];
          break;
        }
      }
    }

    if (!hasCycle && edges.length >= 3) {
      for (const [a, b] of edges) {
        for (const [c, d] of edges) {
          if (b === c) {
            for (const [e, f] of edges) {
              if (d === e && f === a) {
                hasCycle = true;
                cycleNodes = [a, b, d];
                break;
              }
            }
          }
        }
      }
    }

    return { edges, hasCycle, cycleNodes };
  }, [channelColumns]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-[#f1f3f7]">
      
      {/* Top Hero Header */}
      <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffa116]/10 text-[#ffa116] border border-[#ffa116]/30 text-xs font-semibold font-mono mb-3 uppercase tracking-wider">
              <Network className="w-3.5 h-3.5" />
              <span>VLSI EXPERT STUDY PLAN • GRAPH THEORY & EDA ALGORITHMS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <span>VLSI Graph Theory & Physical Design Algorithms</span>
            </h1>

            <p className="text-slate-300 text-sm mt-2.5 leading-relaxed">
              Master the exact graph formulations utilized in industrial EDA tools (Synopsys PrimeTime, IC Compiler II, Cadence Innovus, and Xilinx Vivado). Explore <strong>DAG Static Timing Analysis</strong>, <strong>Shortest & Longest Path</strong>, <strong>Liao-Wong Layout Compaction</strong>, <strong>Bellman-Ford Negative Skew Cycles</strong>, <strong>Spanning Trees (MST, RSMT, CTS)</strong>, and <strong>Dynamic Programming Buffer Insertion</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-5 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Gauge className="w-4 h-4 text-[#ffa116]" />
                <span>{VLSI_GRAPH_PROBLEMS.length} Practice Problems</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>7 Interactive Simulators</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>7 Core Mathematical Frameworks</span>
              </span>
            </div>
          </div>

          {/* Quick Progress Card */}
          <div className="bg-[#191a21] border border-[#2b2d39] p-5 rounded-2xl shadow-xl shrink-0 w-full sm:w-auto min-w-[240px]">
            <div className="text-xs text-slate-400 font-medium mb-1">Study Plan Progress</div>
            <div className="text-2xl font-black text-[#ffa116] flex items-baseline gap-1">
              <span>{VLSI_GRAPH_PROBLEMS.filter(p => solvedProblemIds.includes(p.id)).length}</span>
              <span className="text-sm text-slate-500 font-normal">/ {VLSI_GRAPH_PROBLEMS.length} Solved</span>
            </div>

            <div className="w-full bg-[#111215] h-2 rounded-full mt-3 overflow-hidden border border-[#262833]">
              <div 
                className="bg-amber-500 h-full transition-all duration-500"
                style={{ width: `${(VLSI_GRAPH_PROBLEMS.filter(p => solvedProblemIds.includes(p.id)).length / VLSI_GRAPH_PROBLEMS.length) * 100}%` }}
              />
            </div>

            <button
              onClick={() => {
                const unsolved = VLSI_GRAPH_PROBLEMS.find(p => !solvedProblemIds.includes(p.id)) || VLSI_GRAPH_PROBLEMS[0];
                onSelectProblem(unsolved);
              }}
              className="mt-4 w-full py-2 px-3 rounded-xl bg-[#ffa116] hover:bg-[#ff9900] active:scale-95 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Continue Problem Drills</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#262833] pb-3 mb-8">
        <button
          onClick={() => setActiveTab('labs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'labs'
              ? 'bg-[#191a21] text-white border border-[#2b2d39] shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Activity className="w-4 h-4 text-[#ffa116]" />
          <span>Interactive Visual Labs (7)</span>
        </button>

        <button
          onClick={() => setActiveTab('problems')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'problems'
              ? 'bg-[#191a21] text-white border border-[#2b2d39] shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code2 className="w-4 h-4 text-emerald-400" />
          <span>Curated EDA Coding Problems ({VLSI_GRAPH_PROBLEMS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('theory')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'theory'
              ? 'bg-[#191a21] text-white border border-[#2b2d39] shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4 text-blue-400" />
          <span>Mathematical Theory & Formulations</span>
        </button>
      </div>

      {/* VIEW 1: INTERACTIVE VISUAL LABS */}
      {activeTab === 'labs' && (
        <div className="space-y-8">
          
          {/* Sub-Tabs for all VLSI Graph Theory concepts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {[
              { id: 'kl_algorithm', label: '1. KL Algorithm', icon: Scissors, desc: 'Min-Cut Partitioning' },
              { id: 'lee_maze', label: '2. Lee Maze Router', icon: Grid, desc: 'Wavefront & Backtrace' },
              { id: 'steiner_heuristic', label: '3. Steiner Heuristic', icon: Layers, desc: 'Hanan Grid RSMT' },
              { id: 'obdd_robdd', label: '4. OBDD & ROBDD', icon: GitFork, desc: 'Canonical Logic Synthesis' },
              { id: 'data_flow_graph', label: '5. Data Flow Graph', icon: Network, desc: 'HLS ASAP/ALAP & Mobility' },
              { id: 'dag_sta', label: '6. DAG & STA', icon: Clock, desc: 'Topological Critical Path' },
              { id: 'shortest_path', label: '7. Shortest Path', icon: Milestone, desc: 'Dijkstra Min RC Delay' },
              { id: 'longest_path', label: '8. Longest Path', icon: Zap, desc: 'Critical Setup Fmax' },
              { id: 'liao_wong', label: '9. Liao-Wong', icon: Split, desc: '1D Layout Compaction' },
              { id: 'bellman_ford', label: '10. Bellman-Ford', icon: AlertTriangle, desc: 'Clock Skew Cycle Check' },
              { id: 'spanning_tree', label: '11. Spanning Tree', icon: GitCommit, desc: 'MST vs Steiner vs CTS' },
              { id: 'dp_buffer', label: '12. Dynamic Prog', icon: Calculator, desc: 'Van Ginneken Buffering' }
            ].map(lab => {
              const isSelected = selectedLab === lab.id;
              const Icon = lab.icon;
              return (
                <button
                  key={lab.id}
                  onClick={() => setSelectedLab(lab.id as any)}
                  className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#191a21] border-[#ffa116] shadow-lg shadow-black/40'
                      : 'bg-[#16171d] border-[#262833] hover:border-[#333] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#ffa116]' : 'text-slate-400'}`} />
                    <span className={`text-[11px] font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {lab.label}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1">{lab.desc}</p>
                </button>
              );
            })}
          </div>

          {/* SIMULATOR: KL ALGORITHM */}
          {selectedLab === 'kl_algorithm' && <KlAlgorithmSimulator />}

          {/* SIMULATOR: LEE MAZE ROUTER */}
          {selectedLab === 'lee_maze' && <LeeMazeSimulator />}

          {/* SIMULATOR: STEINER HEURISTIC */}
          {selectedLab === 'steiner_heuristic' && <SteinerHeuristicSimulator />}

          {/* SIMULATOR: OBDD & ROBDD */}
          {selectedLab === 'obdd_robdd' && <ObddRobddSimulator />}

          {/* SIMULATOR: DATA FLOW GRAPH */}
          {selectedLab === 'data_flow_graph' && <DataFlowGraphSimulator />}

          {/* SIMULATOR 1: DAG & STA TIMING ANALYSIS */}
          {selectedLab === 'dag_sta' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Network className="w-5 h-5 text-[#ffa116]" />
                    <span>Directed Acyclic Graph (DAG) & Static Timing Analysis</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Combinational clouds form acyclic graphs. Observe how topological sort enables single-pass linear-time <strong>Arrival Time (AT)</strong> forward accumulation and <strong>Slack</strong> evaluation.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 font-mono">Worst Slack</div>
                    <div className={`text-lg font-black font-mono ${staComputed.worstSlack >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {staComputed.worstSlack} ps
                    </div>
                  </div>
                  <div className="h-6 w-px bg-[#2b2d39]" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 font-mono">Max Clock Freq (Fmax)</div>
                    <div className="text-lg font-black font-mono text-[#ffa116]">
                      {(1000000 / staComputed.maxDelay).toFixed(1)} GHz
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Delay Sliders */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-xl bg-[#111215] border border-[#262833] text-xs">
                {Object.keys(gateDelays).map(gate => (
                  <div key={gate} className="space-y-1">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-slate-300">{gate} Delay:</span>
                      <span className="text-[#ffa116] font-bold">{gateDelays[gate]} ps</span>
                    </div>
                    <input 
                      type="range"
                      min="5"
                      max="60"
                      value={gateDelays[gate]}
                      onChange={(e) => setGateDelays({ ...gateDelays, [gate]: Number(e.target.value) })}
                      className="w-full accent-[#ffa116] cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Visual Graph Representation */}
              <div className="p-6 rounded-2xl bg-[#111215] border border-[#262833] relative overflow-hidden">
                <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
                  <span>CIRCUIT DIRECTED ACYCLIC GRAPH (DAG) TOPOLOGY</span>
                  <span className="text-[#ffa116] font-bold">Critical Path: {staComputed.criticalPath} ({staComputed.maxDelay} ps)</span>
                </div>

                <div className="grid grid-cols-4 gap-6 items-center text-center font-mono text-xs">
                  {/* Stage 1: Primary Inputs */}
                  <div className="space-y-4">
                    <div className="text-slate-400 font-bold mb-2">Primary Inputs (PI)</div>
                    <div className="p-3 rounded-xl bg-[#191a21] border border-[#2b2d39] text-blue-400 font-bold">
                      PI1 (AT: 0 ps)
                    </div>
                    <div className="p-3 rounded-xl bg-[#191a21] border border-[#ffa116] text-[#ffa116] font-bold shadow-md shadow-amber-500/20">
                      PI2 (AT: 0 ps) ★
                    </div>
                    <div className="p-3 rounded-xl bg-[#191a21] border border-[#2b2d39] text-blue-400 font-bold">
                      PI3 (AT: 0 ps)
                    </div>
                  </div>

                  {/* Stage 2: First Logic Layer */}
                  <div className="space-y-4">
                    <div className="text-slate-400 font-bold mb-2">Stage 1 Gates</div>
                    <div className="p-3 rounded-xl bg-[#16171d] border border-[#2b2d39] text-slate-300">
                      <div>G1 (NAND)</div>
                      <div className="text-xs text-blue-400 font-bold">AT: {staComputed.at_G1} ps</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#16171d] border border-[#ffa116] text-white font-bold shadow-md shadow-amber-500/20">
                      <div>G2 (XOR) ★</div>
                      <div className="text-xs text-[#ffa116]">AT: {staComputed.at_G2} ps</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#16171d] border border-[#2b2d39] text-slate-300">
                      <div>G4 (INV)</div>
                      <div className="text-xs text-blue-400 font-bold">AT: {staComputed.at_G4} ps</div>
                    </div>
                  </div>

                  {/* Stage 3: Second Logic Layer */}
                  <div className="space-y-4">
                    <div className="text-slate-400 font-bold mb-2">Stage 2 Gates</div>
                    <div className={`p-4 rounded-xl border ${staComputed.at_PO1 >= staComputed.at_PO2 ? 'bg-[#16171d] border-[#ffa116] text-[#ffa116] shadow-md shadow-amber-500/20' : 'bg-[#16171d] border-[#2b2d39] text-slate-300'}`}>
                      <div className="font-bold">G3 (AND) {staComputed.at_PO1 >= staComputed.at_PO2 ? '★' : ''}</div>
                      <div className="text-xs mt-1">AT: {staComputed.at_G3} ps</div>
                      <div className="text-[10px] text-slate-500">Inputs: G1, G2</div>
                    </div>
                    <div className={`p-4 rounded-xl border ${staComputed.at_PO2 > staComputed.at_PO1 ? 'bg-[#16171d] border-[#ffa116] text-[#ffa116] shadow-md shadow-amber-500/20' : 'bg-[#16171d] border-[#2b2d39] text-slate-300'}`}>
                      <div className="font-bold">G5 (NOR) {staComputed.at_PO2 > staComputed.at_PO1 ? '★' : ''}</div>
                      <div className="text-xs mt-1">AT: {staComputed.at_G5} ps</div>
                      <div className="text-[10px] text-slate-500">Inputs: G2, G4</div>
                    </div>
                  </div>

                  {/* Stage 4: Primary Outputs */}
                  <div className="space-y-4">
                    <div className="text-slate-400 font-bold mb-2">Outputs (PO)</div>
                    <div className="p-4 rounded-xl bg-[#191a21] border border-[#2b2d39] text-left">
                      <div className="font-bold text-white">PO1 (Endpoint)</div>
                      <div className="text-xs text-slate-300 mt-1">Arrival: <strong className="text-[#ffa116]">{staComputed.at_PO1} ps</strong></div>
                      <div className="text-xs text-slate-300">Slack: <strong className={staComputed.slack_PO1 >= 0 ? 'text-emerald-400' : 'text-rose-400'}>{staComputed.slack_PO1} ps</strong></div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#191a21] border border-[#2b2d39] text-left">
                      <div className="font-bold text-white">PO2 (Endpoint)</div>
                      <div className="text-xs text-slate-300 mt-1">Arrival: <strong className="text-[#ffa116]">{staComputed.at_PO2} ps</strong></div>
                      <div className="text-xs text-slate-300">Slack: <strong className={staComputed.slack_PO2 >= 0 ? 'text-emerald-400' : 'text-rose-400'}>{staComputed.slack_PO2} ps</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATOR 2: SHORTEST PATH & DIJKSTRA ROUTING */}
          {selectedLab === 'shortest_path' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GitFork className="w-5 h-5 text-[#ffa116]" />
                    <span>Shortest Path Algorithms in Timing-Driven Routing</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Industrial routers use <strong>Dijkstra</strong> or <strong>A* Search</strong> with Euclidean heuristics to discover the lowest-latency RC routing path through macro vias, repeaters, and routing channels.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Total Route Latency</div>
                    <div className="text-lg font-black text-emerald-400">{shortestPathResult.totalDelay} ps</div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#111215] border border-[#262833] text-xs">
                <div>
                  <label className="text-slate-400 font-mono block mb-1">Source Pin:</label>
                  <select 
                    value={shortestSource} 
                    onChange={e => setShortestSource(e.target.value)}
                    className="w-full bg-[#191a21] border border-[#2b2d39] rounded-lg p-2 text-white font-mono"
                  >
                    <option value="Source (A)">Source (A)</option>
                    <option value="B (Buffer)">B (Buffer)</option>
                    <option value="C (Switch)">C (Switch)</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 font-mono block mb-1">Target Sink:</label>
                  <select 
                    value={shortestTarget} 
                    onChange={e => setShortestTarget(e.target.value)}
                    className="w-full bg-[#191a21] border border-[#2b2d39] rounded-lg p-2 text-white font-mono"
                  >
                    <option value="Sink (F)">Sink (F)</option>
                    <option value="D (Via)">D (Via)</option>
                    <option value="E (Trunk)">E (Trunk)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 font-mono mb-1">
                    <span>Net Parasitic Cap:</span>
                    <span className="text-[#ffa116] font-bold">{netCapacitance} fF</span>
                  </div>
                  <input 
                    type="range"
                    min="1"
                    max="10"
                    value={netCapacitance}
                    onChange={e => setNetCapacitance(Number(e.target.value))}
                    className="w-full accent-[#ffa116] cursor-pointer mt-2"
                  />
                </div>
              </div>

              {/* Path Extraction Display */}
              <div className="p-5 rounded-xl bg-[#111215] border border-[#262833]">
                <div className="text-xs font-mono text-slate-400 mb-3">DIJKSTRA EXTRACTED OPTIMAL ROUTE:</div>
                <div className="flex flex-wrap items-center gap-3">
                  {shortestPathResult.path.map((node, idx) => (
                    <React.Fragment key={node}>
                      <span className="px-3 py-1.5 rounded-lg bg-[#ffa116]/10 border border-[#ffa116]/40 text-[#ffa116] font-mono font-bold text-xs">
                        {node}
                      </span>
                      {idx < shortestPathResult.path.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SIMULATOR 3: LONGEST PATH & CRITICAL SETUP TIME */}
          {selectedLab === 'longest_path' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Milestone className="w-5 h-5 text-[#ffa116]" />
                    <span>Longest Path Formulation for Max-Delay Setup Time</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    While shortest path checks hold-time race conditions, the <strong>Longest Path</strong> between registers defines whether the circuit violates setup time: <code className="text-[#ffa116] font-mono">T_clk ≥ T_cq + T_comb_max + T_setup - T_skew</code>.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Min Clock Period</div>
                    <div className="text-lg font-black text-rose-400">{longestPathResult.minClockPeriod} ps</div>
                  </div>
                  <div className="h-6 w-px bg-[#2b2d39]" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400">Achievable Fmax</div>
                    <div className="text-lg font-black text-[#ffa116]">{longestPathResult.maxFreq} GHz</div>
                  </div>
                </div>
              </div>

              {/* Sliders for combinational logic clouds */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#111215] border border-[#262833] text-xs">
                {Object.keys(combDelays).map(key => (
                  <div key={key} className="space-y-1">
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-slate-300 font-bold">{key}:</span>
                      <span className="text-[#ffa116] font-bold">{combDelays[key]} ps</span>
                    </div>
                    <input 
                      type="range"
                      min="10"
                      max="80"
                      value={combDelays[key]}
                      onChange={e => setCombDelays({ ...combDelays, [key]: Number(e.target.value) })}
                      className="w-full accent-[#ffa116] cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Path Ranking Table */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400">REGISTER-TO-REGISTER PATHS SORTED BY DELAY (LONGEST TO SHORTEST):</div>
                {longestPathResult.paths.map((p, idx) => (
                  <div 
                    key={p.name}
                    className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
                      idx === 0
                        ? 'bg-rose-950/20 border-rose-500/50 text-rose-200'
                        : 'bg-[#111215] border-[#262833] text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#ffa116]">#{idx + 1}</span>
                      <span>{p.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400">Logic: {p.logic} ps</span>
                      <span className="font-bold text-white">Total: {p.delay} ps</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SIMULATOR 4: LIAO-WONG 1D LAYOUT COMPACTION */}
          {selectedLab === 'liao_wong' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Split className="w-5 h-5 text-[#ffa116]" />
                    <span>Liao-Wong Algorithm for 1D Layout Compaction</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Compacts macro blocks against design rule constraints. Converts geometric separation distance rules into a directed constraint graph and computes longest path topological node coordinates.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Minimum Die Width</div>
                    <div className="text-lg font-black text-amber-400">{liaoWongResult.totalChipWidth} µm</div>
                  </div>
                </div>
              </div>

              {/* Interactive Module Widths */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-xl bg-[#111215] border border-[#262833] text-xs">
                {Object.keys(moduleWidths).map(mod => (
                  <div key={mod} className="space-y-1">
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-slate-300 font-bold">{mod} Width:</span>
                      <span className="text-[#ffa116] font-bold">{moduleWidths[mod]} µm</span>
                    </div>
                    <input 
                      type="range"
                      min="15"
                      max="70"
                      value={moduleWidths[mod]}
                      onChange={e => setModuleWidths({ ...moduleWidths, [mod]: Number(e.target.value) })}
                      className="w-full accent-[#ffa116] cursor-pointer"
                    />
                  </div>
                ))}

                <div className="space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-slate-300 font-bold">DRC Spacing:</span>
                    <span className="text-emerald-400 font-bold">{minSpacing} µm</span>
                  </div>
                  <input 
                    type="range"
                    min="4"
                    max="20"
                    value={minSpacing}
                    onChange={e => setMinSpacing(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Layout Visualization Floorplan */}
              <div className="p-6 rounded-2xl bg-[#111215] border border-[#262833] relative">
                <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                  <span>1D X-AXIS COMPACTION STRIP (SCALE: 1 µm)</span>
                  <span className="text-[#ffa116] font-bold">Critical Chain: {liaoWongResult.criticalCompactionChain}</span>
                </div>

                <div className="h-32 bg-[#16171d] rounded-xl border border-[#2b2d39] relative overflow-x-auto flex items-center p-3">
                  {Object.entries(liaoWongResult.positions).map(([mod, xPos]) => {
                    const width = moduleWidths[mod];
                    return (
                      <div 
                        key={mod}
                        className="h-20 bg-gradient-to-br from-blue-600/40 to-indigo-800/40 border border-blue-400 rounded-lg flex flex-col items-center justify-center text-xs font-mono font-bold text-white shadow-lg mx-2 shrink-0 transition-all"
                        style={{ width: `${Math.max(60, width * 1.8)}px` }}
                      >
                        <span className="text-amber-300">{mod}</span>
                        <span className="text-[10px] text-slate-300">W: {width}µm</span>
                        <span className="text-[9px] text-blue-300">X: {xPos}µm</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* SIMULATOR 5: BELLMAN-FORD & NEGATIVE CLOCK SKEW CYCLES */}
          {selectedLab === 'bellman_ford' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#ffa116]" />
                    <span>Bellman-Ford Algorithm for Negative Clock Skew Cycles</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    In sequential circuitry with multi-domain clock skew, relative timing constraints form a directed difference-bound graph. Negative-weight cycles represent physically unsatisfiable constraints (hold violations that cannot be repaired without buffer re-synthesis).
                  </p>
                </div>

                <div className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 border ${
                  bellmanFordResult.hasNegativeCycle
                    ? 'bg-rose-950/40 border-rose-500/50 text-rose-300'
                    : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                }`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${bellmanFordResult.hasNegativeCycle ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'}`} />
                  <span>{bellmanFordResult.hasNegativeCycle ? 'NEGATIVE CYCLE DETECTED! (TIMING VIOLATION)' : 'SYSTEM IS CONSISTENT & CONVERGENT'}</span>
                </div>
              </div>

              {/* Sliders for Clock Skew */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#111215] border border-[#262833] text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 font-mono mb-1">
                    <span>Feedback Clock Skew:</span>
                    <span className="text-[#ffa116] font-bold">{clockSkewEdge} ps</span>
                  </div>
                  <input 
                    type="range"
                    min="-40"
                    max="20"
                    value={clockSkewEdge}
                    onChange={e => setClockSkewEdge(Number(e.target.value))}
                    className="w-full accent-[#ffa116] cursor-pointer"
                  />
                  <div className="text-[10px] text-slate-500 mt-1">Drag below -20 ps to trigger a negative constraint cycle</div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 font-mono mb-1">
                    <span>Hold Delay Padding:</span>
                    <span className="text-emerald-400 font-bold">{holdBufferDelay} ps</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="25"
                    value={holdBufferDelay}
                    onChange={e => setHoldBufferDelay(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Cycle Verification Card */}
              <div className="p-4 rounded-xl bg-[#111215] border border-[#262833] text-xs font-mono space-y-2">
                <div className="text-slate-400">EDGE CONSTRAINTS (DIFFERENCE-BOUND GRAPH):</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {bellmanFordResult.edges.map(e => (
                    <div key={`${e.from}-${e.to}`} className="p-3 bg-[#16171d] rounded-lg border border-[#2b2d39]">
                      <div className="text-white font-bold">{e.from} → {e.to}</div>
                      <div className="text-slate-400 mt-1">Weight: <strong className={e.weight < 0 ? 'text-rose-400' : 'text-[#ffa116]'}>{e.weight} ps</strong></div>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-slate-400">
                  Total Directed Cycle Weight: <strong className={bellmanFordResult.cycleSum < 0 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>{bellmanFordResult.cycleSum} ps</strong>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATOR 6: SPANNING TREE (MST VS STEINER VS CTS) */}
          {selectedLab === 'spanning_tree' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#ffa116]" />
                    <span>Spanning Trees & Clock Tree Synthesis (CTS)</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Compare <strong>Minimum Spanning Tree (MST via Kruskal/Prim)</strong>, <strong>Rectilinear Steiner Trees (RSMT)</strong>, and <strong>Balanced Clock Tree Synthesis (CTS / H-Tree)</strong>.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Wirelength</div>
                    <div className="text-base font-bold text-white">{spanningTreeResult.currentLength} µm</div>
                  </div>
                  <div className="h-6 w-px bg-[#2b2d39]" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400">Clock Skew</div>
                    <div className={`text-base font-bold ${spanningTreeResult.currentSkew <= 4 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {spanningTreeResult.currentSkew} ps
                    </div>
                  </div>
                </div>
              </div>

              {/* Algorithm Switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'kruskal_mst', title: 'Minimum Spanning Tree (Kruskal)', desc: 'Connects only terminal pins. High skew (28 ps).' },
                  { id: 'prim_cts', title: 'Steiner / Balanced CTS', desc: 'Introduces internal Hanan branch points. Balanced skew (4 ps).' },
                  { id: 'h_tree', title: 'Symmetric H-Tree Network', desc: 'Exact zero-skew fractal geometry. Higher wirelength.' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setTreeAlgorithm(opt.id as any)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      treeAlgorithm === opt.id
                        ? 'bg-[#191a21] border-[#ffa116] shadow-md'
                        : 'bg-[#16171d] border-[#262833] hover:border-[#333]'
                    }`}
                  >
                    <div className={`text-xs font-bold mb-1 ${treeAlgorithm === opt.id ? 'text-[#ffa116]' : 'text-white'}`}>
                      {opt.title}
                    </div>
                    <div className="text-[11px] text-slate-400">{opt.desc}</div>
                  </button>
                ))}
              </div>

              {/* Sinks Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#111215] rounded-xl border border-[#262833] text-xs font-mono">
                {clockSinks.map(sink => (
                  <div key={sink.id} className="p-3 bg-[#16171d] rounded-lg border border-[#2b2d39]">
                    <span className="font-bold text-[#ffa116] block mb-1">{sink.id}</span>
                    <div className="text-[11px] text-slate-400">Coords: ({sink.x}, {sink.y})</div>
                    <div className="text-[10px] text-slate-500">Capacitance: {sink.load} fF</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SIMULATOR 7: DYNAMIC PROGRAMMING BUFFER INSERTION (VAN GINNEKEN) */}
          {selectedLab === 'dp_buffer' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-[#ffa116]" />
                    <span>Dynamic Programming: Van Ginneken Buffer Insertion</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Without repeater buffers, RC wire delay grows <strong>quadratically (O(L²))</strong> with interconnect length. Van Ginneken DP constructs Pareto-optimal (Required Time, Downstream Capacitance) sets at every tree vertex.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Buffered Delay</div>
                    <div className="text-lg font-black text-emerald-400">{vanGinnekenDP.bufferedDelay} ps</div>
                  </div>
                  <div className="h-6 w-px bg-[#2b2d39]" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400">Speedup</div>
                    <div className="text-lg font-black text-[#ffa116]">+{vanGinnekenDP.speedupPct}%</div>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#111215] border border-[#262833] text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 font-mono mb-1">
                    <span>Wire Length:</span>
                    <span className="text-[#ffa116] font-bold">{wireLengthUm} µm</span>
                  </div>
                  <input 
                    type="range"
                    min="200"
                    max="2000"
                    step="50"
                    value={wireLengthUm}
                    onChange={e => setWireLengthUm(Number(e.target.value))}
                    className="w-full accent-[#ffa116] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 font-mono mb-1">
                    <span>Buffer Drive Size:</span>
                    <span className="text-blue-400 font-bold">X{bufferDriveStrength}</span>
                  </div>
                  <input 
                    type="range"
                    min="1"
                    max="8"
                    value={bufferDriveStrength}
                    onChange={e => setBufferDriveStrength(Number(e.target.value))}
                    className="w-full accent-blue-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 font-mono mb-1">
                    <span>Metal Resistance:</span>
                    <span className="text-emerald-400 font-bold">{wireResistancePerUm} Ω/µm</span>
                  </div>
                  <input 
                    type="range"
                    min="0.02"
                    max="0.15"
                    step="0.01"
                    value={wireResistancePerUm}
                    onChange={e => setWireResistancePerUm(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Delay Comparison Diagram */}
              <div className="p-5 rounded-xl bg-[#111215] border border-[#262833] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-[#16171d] rounded-xl border border-[#2b2d39]">
                  <div className="text-rose-400 font-bold mb-1">UNBUFFERED LINE (QUADRATIC RC)</div>
                  <div className="text-2xl font-black text-rose-400 mt-2">{vanGinnekenDP.unbufferedDelay} ps</div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Interconnect capacitance acts as a distributed RC line without repeaters, degrading transition slew rates.
                  </p>
                </div>

                <div className="p-4 bg-[#16171d] rounded-xl border border-emerald-500/40">
                  <div className="text-emerald-400 font-bold mb-1">OPTIMAL DP REPEATER INSERTION</div>
                  <div className="text-2xl font-black text-emerald-400 mt-2">{vanGinnekenDP.bufferedDelay} ps</div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Dynamic programming strategically inserts <strong>{vanGinnekenDP.optimalBuffers} repeaters</strong> to linearize signal delay to O(L).
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* 5 ASSIGNED PROBLEMS FOR CURRENT LAB ALGORITHM */}
          {(() => {
            const currentAlg = ALGORITHM_ASSIGNED_PROBLEMS[selectedLab] || ALGORITHM_ASSIGNED_PROBLEMS['kl_algorithm'];
            const assignedProblems = currentAlg.problemIds
              .map(id => VLSI_GRAPH_PROBLEMS.find(p => p.id === id))
              .filter((p): p is Problem => Boolean(p));
            const solvedCount = assignedProblems.filter(p => solvedProblemIds.includes(p.id)).length;

            return (
              <div className="p-6 rounded-2xl bg-[#111217] border border-[#22242f] shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#22242f]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#e5a93c]" />
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span>Assigned Practice Problems (5)</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e5a93c]/15 text-[#e5a93c] border border-[#e5a93c]/30 font-mono font-bold">
                          {solvedCount}/5 Solved
                        </span>
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        5 hands-on HDL & EDA algorithm synthesis challenges specifically assigned for <strong className="text-zinc-200">{currentAlg.label}</strong>.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedAlgorithmFilter(selectedLab);
                      setActiveTab('problems');
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#14151b] hover:bg-[#181920] text-zinc-300 hover:text-white border border-[#22242f] text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
                  >
                    <span>View in Table</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {assignedProblems.map((p, pIdx) => {
                    const isSolved = solvedProblemIds.includes(p.id);
                    return (
                      <div
                        key={p.id}
                        className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                          isSolved
                            ? 'bg-[#181920] border-emerald-500/40'
                            : 'bg-[#14151b] hover:bg-[#181920] border-[#22242f] hover:border-[#e5a93c]/60'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-mono text-zinc-400 font-bold">Task #{pIdx + 1}</span>
                            <span className={`text-[10px] font-bold uppercase ${
                              p.difficulty === 'easy' ? 'text-emerald-400' : p.difficulty === 'medium' ? 'text-[#e5a93c]' : 'text-rose-400'
                            }`}>
                              {p.difficulty}
                            </span>
                          </div>
                          <h5 className="text-xs font-bold text-white leading-snug line-clamp-2" title={p.title}>
                            {p.title}
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {p.tags.slice(0, 2).map((t, idx) => (
                              <span key={idx} className="text-[9px] px-1.5 py-0.5 rounded bg-[#111217] text-zinc-400 font-mono border border-[#22242f]">
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 mt-3 border-t border-[#22242f] flex items-center justify-between">
                          <span className="text-[10px] font-mono">
                            {isSolved ? (
                              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                                ✓ Solved
                              </span>
                            ) : (
                              <span className="text-zinc-500">Unsolved</span>
                            )}
                          </span>
                          <button
                            onClick={() => onSelectProblem(p)}
                            className="px-2.5 py-1 rounded-lg bg-[#e5a93c] hover:bg-[#d4972e] text-black text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-sm"
                          >
                            Solve →
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

        </div>
      )}

      {/* VIEW 2: PRACTICE PROBLEMS (TABLE VIEW) */}
      {activeTab === 'problems' && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>VLSI Graph Theory & EDA Practice Questions</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e5a93c]/15 text-[#e5a93c] border border-[#e5a93c]/30 font-mono font-bold">
                  {selectedAlgorithmFilter === 'all'
                    ? `${VLSI_GRAPH_PROBLEMS.length} Problems Total`
                    : `5 Problems Assigned`}
                </span>
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Solve each algorithm challenge with synthesizable HDL and cycle-accurate waveform verification.
              </p>
            </div>

            {selectedAlgorithmFilter !== 'all' && (
              <button
                onClick={() => setSelectedAlgorithmFilter('all')}
                className="px-3 py-1.5 rounded-xl bg-[#14151b] hover:bg-[#181920] text-[#e5a93c] border border-[#22242f] text-xs font-bold self-start sm:self-auto cursor-pointer"
              >
                Clear Filter (View All {VLSI_GRAPH_PROBLEMS.length})
              </button>
            )}
          </div>

          {/* Algorithm Filter Bar - 12 Algorithms + All */}
          <div className="p-4 rounded-2xl bg-[#111217] border border-[#22242f] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Filter by Algorithm (5 Assigned Problems Each)</span>
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">
                {selectedAlgorithmFilter === 'all'
                  ? 'Showing all problems'
                  : `Filtering: ${ALGORITHM_ASSIGNED_PROBLEMS[selectedAlgorithmFilter]?.shortName}`}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedAlgorithmFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                  selectedAlgorithmFilter === 'all'
                    ? 'bg-[#e5a93c] text-black border-[#e5a93c] shadow-sm'
                    : 'bg-[#14151b] text-zinc-400 hover:text-white border-[#22242f]'
                }`}
              >
                All Problems ({VLSI_GRAPH_PROBLEMS.length})
              </button>

              {Object.values(ALGORITHM_ASSIGNED_PROBLEMS).map(alg => {
                const isSelected = selectedAlgorithmFilter === alg.id;
                const solvedInAlg = alg.problemIds.filter(id => solvedProblemIds.includes(id)).length;
                return (
                  <button
                    key={alg.id}
                    onClick={() => setSelectedAlgorithmFilter(alg.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#e5a93c] text-black border-[#e5a93c] shadow-sm'
                        : 'bg-[#14151b] hover:bg-[#181920] text-zinc-300 hover:text-white border-[#22242f]'
                    }`}
                  >
                    <span>{alg.shortName}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected
                        ? 'bg-black/20 text-black'
                        : solvedInAlg === 5
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-[#111217] text-[#e5a93c] border border-[#22242f]'
                    }`}>
                      {solvedInAlg}/5
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Problem Table */}
          {(() => {
            const displayedProblems = selectedAlgorithmFilter === 'all'
              ? VLSI_GRAPH_PROBLEMS
              : (ALGORITHM_ASSIGNED_PROBLEMS[selectedAlgorithmFilter]?.problemIds || [])
                  .map(id => VLSI_GRAPH_PROBLEMS.find(p => p.id === id))
                  .filter((p): p is Problem => Boolean(p));

            return (
              <div className="rounded-2xl bg-[#111217] border border-[#22242f] overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-[#14151b] text-zinc-400 border-b border-[#22242f] uppercase text-[11px] font-mono">
                      <tr>
                        <th className="py-3.5 px-4 w-12 text-center">Status</th>
                        <th className="py-3.5 px-4">Problem Title</th>
                        <th className="py-3.5 px-4 w-32">Assigned Algorithm</th>
                        <th className="py-3.5 px-4 w-28">Difficulty</th>
                        <th className="py-3.5 px-4 w-28 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#22242f]">
                      {displayedProblems.map((problem, idx) => {
                        const isSolved = solvedProblemIds.includes(problem.id);
                        // Find which algorithm it belongs to if any
                        const assignedAlg = Object.values(ALGORITHM_ASSIGNED_PROBLEMS).find(a =>
                          a.problemIds.includes(problem.id)
                        );

                        return (
                          <tr 
                            key={problem.id}
                            onClick={() => onSelectProblem(problem)}
                            className="hover:bg-[#181920] transition-colors cursor-pointer group"
                          >
                            <td className="py-3.5 px-4 text-center">
                              {isSolved ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                              ) : (
                                <span className="w-3.5 h-3.5 rounded-full border border-zinc-600 block mx-auto group-hover:border-[#e5a93c]" />
                              )}
                            </td>

                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-white group-hover:text-[#e5a93c] transition-colors">
                                {idx + 1}. {problem.title}
                              </div>
                              <div className="flex flex-wrap gap-1.5 mt-1">
                                {problem.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-[10px] text-zinc-400 font-mono">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </td>

                            <td className="py-3.5 px-4 text-zinc-400 font-mono text-[11px]">
                              {assignedAlg ? (
                                <span className="px-2 py-0.5 rounded bg-[#181920] text-[#e5a93c] border border-[#22242f] font-semibold">
                                  {assignedAlg.shortName}
                                </span>
                              ) : (
                                <span className="text-zinc-500">EDA General</span>
                              )}
                            </td>

                            <td className="py-3.5 px-4">
                              <span className={`font-semibold capitalize ${
                                problem.difficulty === 'easy' ? 'text-emerald-400' :
                                problem.difficulty === 'medium' ? 'text-[#e5a93c]' : 'text-rose-400'
                              }`}>
                                {problem.difficulty}
                              </span>
                            </td>

                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectProblem(problem);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-[#14151b] group-hover:bg-[#e5a93c] text-zinc-300 group-hover:text-black font-bold text-xs transition-all shadow-sm cursor-pointer"
                              >
                                Solve →
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* VIEW 3: MATHEMATICAL THEORY & FORMULATIONS (COVERING ALL CONCEPTS) */}
      {activeTab === 'theory' && (
        <div className="space-y-6 text-slate-300 text-xs leading-relaxed">
          
          {/* Concept 1: DAG & STA */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">1.</span>
              <span>Directed Acyclic Graphs (DAG) & Static Timing Analysis</span>
            </h3>
            <p>
              In combinational logic, cycles create asynchronous race conditions and memory oscillations. Therefore, all verified combinational clouds form <strong>Directed Acyclic Graphs (DAGs)</strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-1.5 text-[11px]">
              <div><strong>Topological Sort:</strong> Linear ordering of vertices where for every directed edge (u, v), u comes before v. Solvable in O(V + E) using Kahn's algorithm or DFS.</div>
              <div><strong>Arrival Time (Forward):</strong> AT(v) = max [AT(u) + Delay(u, v)] for all u ∈ Predecessors(v).</div>
              <div><strong>Required Arrival Time (Backward):</strong> RAT(u) = min [RAT(v) - Delay(u, v)] for all v ∈ Successors(u).</div>
              <div><strong>Slack:</strong> Slack(v) = RAT(v) - AT(v). If Slack &lt; 0, setup violation occurs.</div>
            </div>
          </div>

          {/* Concept 2: Shortest Path */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">2.</span>
              <span>Shortest Path Algorithms in VLSI Routing (Dijkstra & A*)</span>
            </h3>
            <p>
              Timing-driven detailed routing models routing tracks, metal layers, and vias as a weighted directed graph where edge weights reflect resistance, capacitance, and congestion penalties.
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-1.5 text-[11px]">
              <div><strong>Dijkstra's Algorithm:</strong> Finds single-source shortest paths on non-negative edge weights in O(E + V log V) with a Fibonacci heap.</div>
              <div><strong>A* Search:</strong> Enhances Dijkstra with an admissible Euclidean or Manhattan distance heuristic h(u) to sink terminal: f(u) = g(u) + h(u). Guarantees optimality while pruning search space by up to 90%.</div>
              <div><strong>Hold-Time Check:</strong> Shortest combinational path must satisfy T_comb_min + T_cq ≥ T_hold + T_skew.</div>
            </div>
          </div>

          {/* Concept 3: Longest Path */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">3.</span>
              <span>Longest Path on DAGs & Critical Setup Paths</span>
            </h3>
            <p>
              While finding the longest path on a general cyclic graph is NP-hard, on a DAG it is solvable in <strong>O(V + E)</strong> time via topological dynamic programming or by negating edge weights and using DAG relaxation.
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-1.5 text-[11px]">
              <div><strong>Max Clock Frequency:</strong> T_period ≥ Longest_Path(Register_Source → Register_Dest) + T_setup.</div>
              <div><strong>Critical Path Extraction:</strong> Backtracking from the sink with worst negative slack along incoming edges with zero local slack.</div>
            </div>
          </div>

          {/* Concept 4: Liao-Wong Compaction */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">4.</span>
              <span>Liao-Wong Algorithm for 1D Layout Compaction</span>
            </h3>
            <p>
              In symbolic physical layout, circuit components must be compacted along the X or Y coordinate axis to minimize die area while adhering to Design Rule Check (DRC) minimum spacing constraints:
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-1.5 text-[11px]">
              <div><strong>Constraint Form:</strong> x_j - x_i ≥ w_i + s_ij (Module i of width w_i is to the left of module j with spacing s_ij).</div>
              <div><strong>Graph Formulation:</strong> A directed edge is created from node i to node j with weight w_i + s_ij.</div>
              <div><strong>Liao-Wong Theorem (1983):</strong> The minimum legal layout coordinates are obtained by computing the <strong>Longest Path</strong> from the artificial source node (x = 0) to all vertices in the acyclic constraint graph in O(V + E) time.</div>
            </div>
          </div>

          {/* Concept 5: Bellman-Ford Negative Cycles */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">5.</span>
              <span>Bellman-Ford Algorithm & Clock Skew Difference-Bound Matrices</span>
            </h3>
            <p>
              When physical layout features both upper-bound and lower-bound constraints (e.g. maximum setup delay AND minimum hold delay, or bidirectional clock skew scheduling), the constraint graph contains directed cycles with possible negative edge weights.
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-1.5 text-[11px]">
              <div><strong>Bellman-Ford:</strong> Solves single-source shortest paths in O(V × E) iterations by relaxing all edges V - 1 times.</div>
              <div><strong>Negative Cycle Detection:</strong> If an edge can still be relaxed on iteration V, a negative-weight cycle exists. In VLSI, this proves that the timing constraints are contradictory and unfixable without architectural re-timing or buffer insertion.</div>
            </div>
          </div>

          {/* Concept 6: Spanning Trees */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">6.</span>
              <span>Spanning Trees: Kruskal, Prim, Steiner Trees, and Clock Tree Synthesis</span>
            </h3>
            <p>
              Single electrical nets connecting k pins must be routed with minimum metal area and balanced propagation latency:
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-1.5 text-[11px]">
              <div><strong>Minimum Spanning Tree (MST):</strong> Solved in O(E log V) by Kruskal (greedy edge sort with Disjoint Set Union) or Prim (priority queue expansion). Connects only terminal pins.</div>
              <div><strong>Rectilinear Steiner Minimal Tree (RSMT):</strong> Allows auxiliary branch vertices (Steiner points) on the Hanan grid. Saves up to 33% wirelength over MST (Hwang's Theorem: Cost(RSMT) / Cost(MST) ≥ 2/3).</div>
              <div><strong>Clock Tree Synthesis (CTS):</strong> Unlike signal routing which minimizes total wirelength, CTS minimizes clock skew (maximum arrival time difference across all register clock pins) using symmetric H-Tree or Method of Means and Medians (MMM).</div>
            </div>
          </div>

          {/* Concept 7: Dynamic Programming */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">7.</span>
              <span>Dynamic Programming in EDA: Van Ginneken Buffer Insertion</span>
            </h3>
            <p>
              Long interconnect lines suffer from quadratic RC delay (Elmore delay D ∝ R_unit × C_unit × L²). Buffer insertion breaks the line into segments, converting delay to linear O(L).
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-1.5 text-[11px]">
              <div><strong>Van Ginneken Algorithm (1990):</strong> Uses bottom-up Dynamic Programming on the routing tree. At each candidate wire point, it maintains a set of non-dominated Pareto tuples (Downstream Capacitance C, Required Arrival Time RAT).</div>
              <div><strong>Pruning Property:</strong> If solution 1 has C₁ ≤ C₂ and RAT₁ ≥ RAT₂, solution 2 is strictly dominated and pruned. This reduces exponential combinations to polynomial runtime while guaranteeing exact timing optimality.</div>
            </div>
          </div>

          {/* Concept 8: Kernighan-Lin Min-Cut Netlist Partitioning */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">8.</span>
              <span>Kernighan-Lin (KL) Netlist Partitioning & Min-Cut Optimization</span>
            </h3>
            <p>
              In VLSI physical design, netlist partitioning divides thousands of logic cells across dies, multi-chip modules (MCM), or layout blocks while minimizing the number of cut inter-block nets (interconnect delay and pin count).
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-2 text-[11px]">
              <div><strong>Problem Formulation:</strong> Given graph G = (V, E) with weights c_ij, partition V into equal disjoint sets A and B (|A| = |B|) minimizing Cut(A, B) = sum(a in A, b in B) c_ab.</div>
              <div><strong>Cost Metrics:</strong> For node v, Internal Cost I_v = sum(v' in P(v)) c(v, v') and External Cost E_v = sum(u not in P(v)) c(v, u). Difference value D_v = E_v - I_v.</div>
              <div><strong>Pairwise Swap Gain:</strong> Swapping a in A and b in B yields net cut reduction: g_ab = D_a + D_b - 2 c_ab.</div>
              <div><strong>Iterative Locking & Cumulative Gain:</strong> The algorithm locks the best pair (a*, b*), updates residual D values, and repeats until all pairs are locked. It then identifies cutoff k* = argmax sum(i=1..k) g_i. If max G_k &gt; 0, the top k* swaps are committed.</div>
              <div><strong>Fiduccia-Mattheyses (FM) Extension:</strong> Extends KL to hypergraphs (multi-terminal nets) using single-cell moves and bucket sort arrays, reducing pass complexity to linear O(|P|) time.</div>
            </div>
          </div>

          {/* Concept 9: Lee Maze Routing */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">9.</span>
              <span>Lee&apos;s Maze Routing Algorithm (Wavefront BFS & Shortest Backtrace)</span>
            </h3>
            <p>
              C. Y. Lee (1961) developed the foundational algorithm for two-pin grid routing on printed circuit boards (PCBs) and integrated circuit (IC) metal layers.
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-2 text-[11px]">
              <div><strong>Wavefront Expansion Phase:</strong> Uniform-cost Breadth-First Search (BFS) radiates outward from the source terminal S, labeling adjacent unblocked cells with sequential Manhattan distances (1, 2, 3, ...).</div>
              <div><strong>Shortest-Path Optimality:</strong> Because edge weights are uniform (1 grid unit), the first wave that reaches target terminal T is guaranteed to represent the exact shortest rectilinear path.</div>
              <div><strong>Backtrace Phase:</strong> Tracing backwards from T to S by selecting adjacent neighbors with label dist - 1 establishes the connection wire.</div>
              <div><strong>Computational Complexity:</strong> Requires O(M × N) time and memory for an M×N routing grid.</div>
              <div><strong>Modern Enhancements:</strong> Hadlock&apos;s Detour Router (directs search toward target based on detour numbers) and Soukup&apos;s Fast Router (combines depth-first projection with BFS fallbacks to accelerate execution).</div>
            </div>
          </div>

          {/* Concept 10: Rectilinear Steiner Minimal Trees */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">10.</span>
              <span>Rectilinear Steiner Minimal Trees (RSMT), Hanan&apos;s Theorem & Hwang&apos;s Bound</span>
            </h3>
            <p>
              Unlike point-to-point routing, multi-terminal signal nets (such as clock trees, bus trunks, and reset lines) connect k pins with minimum total wire area.
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-2 text-[11px]">
              <div><strong>Hanan&apos;s Grid Theorem (1966):</strong> For any set of terminal pins V, there exists an optimal Rectilinear Steiner Minimal Tree (RSMT) whose Steiner branch points lie entirely on the Hanan Grid—the set of intersection points formed by horizontal and vertical lines passing through all terminals in V.</div>
              <div><strong>Hwang&apos;s Theorem Bound (1976):</strong> For any point set in the rectilinear plane: Cost(RSMT) / Cost(MST) ≥ 2/3 ≈ 0.667. This establishes that introducing Steiner branch points can save up to <strong>33.3%</strong> total wirelength over a terminal-only Minimum Spanning Tree (MST).</div>
              <div><strong>Heuristic Algorithms:</strong> Finding the exact RSMT is NP-complete. EDA tools utilize Batched 1-Steiner heuristics, GeoSteiner, or FLUTE (Fast Lookup Table for Steiner Trees) to achieve near-optimal routing in O(n log n) or O(n) runtime.</div>
            </div>
          </div>

          {/* Concept 11: OBDD & ROBDD Logic Synthesis */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">11.</span>
              <span>Ordered & Reduced Binary Decision Diagrams (OBDD & ROBDD)</span>
            </h3>
            <p>
              Binary Decision Diagrams (BDD) represent Boolean logic functions as directed acyclic graphs based on recursive Shannon decomposition.
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-2 text-[11px]">
              <div><strong>Shannon Decomposition:</strong> At variable x_i, f = x_i · f(x_i=1) + x_i&apos; · f(x_i=0), generating a 1-edge (high cofactor) and a 0-edge (low cofactor).</div>
              <div><strong>Variable Ordering Constraint (OBDD):</strong> Variables appear in identical sequence along every root-to-terminal path. Choice of ordering dramatically influences diagram size—ranging from linear O(n) to exponential O(2^n) for identical functions (e.g. integer multiplication or interleaved AND-OR trees).</div>
              <div><strong>Bryant Canonicity Theorem (1986):</strong> For any fixed variable order, the Reduced Ordered BDD (ROBDD) is a strictly <strong>canonical</strong> representation. Two Boolean functions are logically equivalent if and only if their ROBDDs have isomorphic graph topologies, enabling O(1) equivalence checking!</div>
              <div><strong>Reduction Rule 1 (Eliminate Redundancy):</strong> If low(u) == high(u), delete vertex u and redirect all incoming edges directly to its child.</div>
              <div><strong>Reduction Rule 2 (Merge Isomorphism):</strong> If two distinct nodes share the same variable and identical low and high children, merge them into a single canonical node.</div>
            </div>
          </div>

          {/* Concept 12: Data Flow Graphs & HLS Scheduling */}
          <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-[#ffa116]">12.</span>
              <span>Data Flow Graphs (DFG) & ASAP/ALAP Scheduling in High-Level Synthesis</span>
            </h3>
            <p>
              In High-Level Synthesis (HLS), behavioral algorithms (C/C++/SystemC) are compiled into synthesizable RTL. The computations form a directed acyclic Data Flow Graph (DFG) or Sequencing Graph.
            </p>
            <div className="p-4 rounded-xl bg-[#111215] font-mono border border-[#262833] space-y-2 text-[11px]">
              <div><strong>DFG Formulation:</strong> Vertices V represent computational operators (multipliers, ALUs, shifters); directed edges E represent data dependencies and register transfers.</div>
              <div><strong>ASAP Scheduling:</strong> Evaluates unconstrained earliest execution step: t_ASAP(v) = 1 + max(u in pred(v)) t_ASAP(u).</div>
              <div><strong>ALAP Scheduling:</strong> Given latency constraint L (total clock cycles), evaluates latest allowable execution step: t_ALAP(v) = min(w in succ(v)) t_ALAP(w) - 1.</div>
              <div><strong>Operator Mobility & Critical Path:</strong> Mobility M(v) = t_ALAP(v) - t_ASAP(v). Operations with M(v) = 0 form the critical path, bounding maximum pipeline throughput.</div>
              <div><strong>Resource Allocation & Binding:</strong> Flexible operations (M(v) &gt; 0) are scheduled into under-utilized control steps to level concurrency, minimizing required functional units (multipliers and adders) and silicon area.</div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
