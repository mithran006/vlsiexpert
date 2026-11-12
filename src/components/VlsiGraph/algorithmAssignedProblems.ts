export interface AlgorithmAssignment {
  id: string;
  label: string;
  shortName: string;
  desc: string;
  problemIds: string[];
}

export type AlgorithmProblemMapping = AlgorithmAssignment;

export const ALGORITHM_ASSIGNED_PROBLEMS: Record<string, AlgorithmAssignment> = {
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
