import React, { useState, useMemo } from 'react';
import { 
  Network, Play, RotateCcw, CheckCircle2, ChevronRight, 
  Sparkles, Layers, Sliders, Activity, Info, Cpu, Milestone, Clock
} from 'lucide-react';

interface DfgOp {
  id: string;
  name: string;
  type: 'add' | 'mul' | 'sub';
  inputs: string[];
  asapStep: number;
  alapStep: number;
}

const HLS_BENCHMARKS: {
  [key: string]: {
    name: string;
    description: string;
    latencyConstraint: number;
    ops: DfgOp[];
  };
} = {
  diff_eq: {
    name: 'Differential Equation Solver (u\' = u - 3uxΔx - 3yΔx)',
    description: 'Standard EDA HLS benchmark. Computes numerical integration with dependent multipliers and adders.',
    latencyConstraint: 4,
    ops: [
      { id: 'op1', name: 'Mult1 (u * x)', type: 'mul', inputs: ['u', 'x'], asapStep: 1, alapStep: 1 },
      { id: 'op2', name: 'Mult2 (3 * Mult1)', type: 'mul', inputs: ['op1'], asapStep: 2, alapStep: 2 },
      { id: 'op3', name: 'Mult3 (3 * y)', type: 'mul', inputs: ['y'], asapStep: 1, alapStep: 2 },
      { id: 'op4', name: 'Mult4 (Mult3 * dx)', type: 'mul', inputs: ['op3'], asapStep: 2, alapStep: 3 },
      { id: 'op5', name: 'Sub1 (u - Mult2)', type: 'sub', inputs: ['u', 'op2'], asapStep: 3, alapStep: 3 },
      { id: 'op6', name: 'Add1 (Sub1 - Mult4)', type: 'add', inputs: ['op5', 'op4'], asapStep: 4, alapStep: 4 },
    ]
  },
  poly_fir: {
    name: '4th-Order Polynomial Filter Stage',
    description: 'Polynomial datapath evaluating y = (a + b)·(c + d) + (e·f).',
    latencyConstraint: 3,
    ops: [
      { id: 'op1', name: 'Add1 (a + b)', type: 'add', inputs: ['a', 'b'], asapStep: 1, alapStep: 1 },
      { id: 'op2', name: 'Add2 (c + d)', type: 'add', inputs: ['c', 'd'], asapStep: 1, alapStep: 1 },
      { id: 'op3', name: 'Mult1 (e * f)', type: 'mul', inputs: ['e', 'f'], asapStep: 1, alapStep: 2 },
      { id: 'op4', name: 'Mult2 (Add1 * Add2)', type: 'mul', inputs: ['op1', 'op2'], asapStep: 2, alapStep: 2 },
      { id: 'op5', name: 'Add3 (Mult2 + Mult1)', type: 'add', inputs: ['op4', 'op3'], asapStep: 3, alapStep: 3 },
    ]
  }
};

export const DataFlowGraphSimulator: React.FC = () => {
  const [selectedBenchmark, setSelectedBenchmark] = useState<string>('diff_eq');
  const [scheduleMode, setScheduleMode] = useState<'asap' | 'alap' | 'mobility' | 'resource_binding'>('asap');

  const benchmark = HLS_BENCHMARKS[selectedBenchmark];

  // Compute mobility and resource requirements per step
  const scheduleAnalysis = useMemo(() => {
    const totalSteps = benchmark.latencyConstraint;
    const opsWithMobility = benchmark.ops.map(op => {
      const mobility = op.alapStep - op.asapStep;
      const isCritical = mobility === 0;
      return { ...op, mobility, isCritical };
    });

    // Resource allocation per control step under ASAP vs ALAP
    const asapResources: { [step: number]: { mul: number; addSub: number } } = {};
    const alapResources: { [step: number]: { mul: number; addSub: number } } = {};

    for (let s = 1; s <= totalSteps; s++) {
      asapResources[s] = { mul: 0, addSub: 0 };
      alapResources[s] = { mul: 0, addSub: 0 };
    }

    opsWithMobility.forEach(op => {
      // ASAP
      if (op.type === 'mul') asapResources[op.asapStep].mul++;
      else asapResources[op.asapStep].addSub++;

      // ALAP
      if (op.type === 'mul') alapResources[op.alapStep].mul++;
      else alapResources[op.alapStep].addSub++;
    });

    const peakMulAsap = Math.max(...Object.values(asapResources).map(r => r.mul));
    const peakAddAsap = Math.max(...Object.values(asapResources).map(r => r.addSub));

    const peakMulAlap = Math.max(...Object.values(alapResources).map(r => r.mul));
    const peakAddAlap = Math.max(...Object.values(alapResources).map(r => r.addSub));

    const criticalPathOps = opsWithMobility.filter(op => op.isCritical).map(op => op.name);

    return {
      opsWithMobility,
      asapResources,
      alapResources,
      peakMulAsap,
      peakAddAsap,
      peakMulAlap,
      peakAddAlap,
      criticalPathOps
    };
  }, [benchmark]);

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#16171d] border border-[#262833] shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffa116]/20 text-[#ffa116] border border-[#ffa116]/30">
              HIGH-LEVEL SYNTHESIS (HLS)
            </span>
            <span className="text-xs text-slate-400 font-mono">Sequencing Graph & Scheduling</span>
          </div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-1">
            <Network className="w-5 h-5 text-[#ffa116]" />
            <span>Data Flow Graph (DFG): ASAP, ALAP & Mobility Scheduling</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            In VLSI architectural synthesis, a Data Flow Graph represents algorithmic dependencies. <code className="text-cyan-400 font-mono">ASAP</code> (earliest step) and <code className="text-amber-400 font-mono">ALAP</code> (latest step) determine operator mobility <code className="text-emerald-400 font-mono">M(v) = ALAP(v) - ASAP(v)</code> to level peak hardware resources.
          </p>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-3 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39] shrink-0 font-mono">
          <div className="text-right">
            <div className="text-[10px] text-slate-400">Critical Path Latency</div>
            <div className="text-2xl font-black text-emerald-400">{benchmark.latencyConstraint} csteps</div>
          </div>
          <div className="h-8 w-px bg-[#2b2d39]" />
          <div className="text-left">
            <div className="text-[10px] text-slate-400">Total Operations</div>
            <div className="text-lg font-bold text-[#ffa116]">{benchmark.ops.length} nodes</div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#111215] border border-[#262833]">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setScheduleMode('asap')}
            className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
              scheduleMode === 'asap'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'bg-[#191a21] text-slate-300 hover:text-white border border-[#2b2d39]'
            }`}
          >
            ASAP Schedule (Forward)
          </button>

          <button
            onClick={() => setScheduleMode('alap')}
            className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
              scheduleMode === 'alap'
                ? 'bg-[#ffa116] text-slate-950 shadow-md'
                : 'bg-[#191a21] text-slate-300 hover:text-white border border-[#2b2d39]'
            }`}
          >
            ALAP Schedule (Backward)
          </button>

          <button
            onClick={() => setScheduleMode('mobility')}
            className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
              scheduleMode === 'mobility'
                ? 'bg-purple-500 text-white shadow-md'
                : 'bg-[#191a21] text-slate-300 hover:text-white border border-[#2b2d39]'
            }`}
          >
            Mobility & Critical Path
          </button>

          <button
            onClick={() => setScheduleMode('resource_binding')}
            className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
              scheduleMode === 'resource_binding'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'bg-[#191a21] text-slate-300 hover:text-white border border-[#2b2d39]'
            }`}
          >
            Resource Allocation
          </button>
        </div>

        {/* Benchmark Switcher */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Benchmark:</span>
          {Object.keys(HLS_BENCHMARKS).map(key => (
            <button
              key={key}
              onClick={() => setSelectedBenchmark(key)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono border cursor-pointer ${
                selectedBenchmark === key
                  ? 'bg-[#ffa116]/20 border-[#ffa116] text-[#ffa116]'
                  : 'bg-[#191a21] border-[#2b2d39] text-slate-400'
              }`}
            >
              {key === 'diff_eq' ? 'Diff-Eq Solver' : 'Polynomial FIR'}
            </button>
          ))}
        </div>
      </div>

      {/* Control Steps Gantt Timeline View */}
      <div className="p-5 rounded-xl bg-[#111215] border border-[#262833] space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#ffa116]" />
            <span>Control Step Schedule Timeline (1 Clock Cycle per Cstep)</span>
          </h4>
          <span className="text-xs font-mono text-slate-400">
            {scheduleMode === 'asap' ? 'ASAP Mode (Earliest Step)' : scheduleMode === 'alap' ? 'ALAP Mode (Latest Deadline Step)' : 'Mobility Window'}
          </span>
        </div>

        {/* Cstep Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Array.from({ length: benchmark.latencyConstraint }).map((_, idx) => {
            const stepNum = idx + 1;
            
            // Filter operations active in this step
            const activeOps = scheduleAnalysis.opsWithMobility.filter(op => {
              if (scheduleMode === 'asap') return op.asapStep === stepNum;
              if (scheduleMode === 'alap') return op.alapStep === stepNum;
              // Mobility mode: active in earliest or latest
              return op.asapStep <= stepNum && stepNum <= op.alapStep;
            });

            return (
              <div key={stepNum} className="p-3.5 rounded-xl bg-[#16171d] border border-[#262833] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#262833]">
                  <span className="font-bold text-xs text-[#ffa116] font-mono">Control Step {stepNum}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{activeOps.length} ops</span>
                </div>

                <div className="space-y-2">
                  {activeOps.length === 0 ? (
                    <div className="py-6 text-center text-slate-600 text-[11px] font-mono">IDLE CYCLE</div>
                  ) : (
                    activeOps.map(op => {
                      const isAssigned = 
                        scheduleMode === 'asap' ? op.asapStep === stepNum :
                        scheduleMode === 'alap' ? op.alapStep === stepNum : true;

                      return (
                        <div
                          key={op.id}
                          className={`p-2.5 rounded-lg border transition-all text-xs font-mono ${
                            op.isCritical
                              ? 'bg-amber-950/20 border-[#ffa116]/50 text-amber-200'
                              : 'bg-[#191a21] border-[#2b2d39] text-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold">{op.name.split(' ')[0]}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase font-bold ${
                              op.type === 'mul' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50' : 'bg-cyan-900/40 text-cyan-300 border border-cyan-700/50'
                            }`}>
                              {op.type}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-400 line-clamp-1">{op.name}</div>
                          {scheduleMode === 'mobility' && (
                            <div className="mt-1.5 pt-1.5 border-t border-[#262833] flex justify-between text-[10px]">
                              <span className="text-slate-500">Mobility:</span>
                              <span className={`font-bold ${op.mobility === 0 ? 'text-[#ffa116]' : 'text-emerald-400'}`}>
                                {op.mobility === 0 ? '0 (CRITICAL)' : `${op.mobility} steps`}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Operator Mobility Table & Resource Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Operator Mobility Table */}
        <div className="p-5 rounded-xl bg-[#111215] border border-[#262833] space-y-3">
          <h4 className="font-bold text-xs text-white flex items-center justify-between">
            <span>Operator Mobility & Slack Analysis (M = ALAP - ASAP)</span>
            <span className="text-[10px] font-mono text-emerald-400">Zero Mobility = Critical Path</span>
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#16171d] text-slate-400 text-[10px]">
                <tr>
                  <th className="p-2">Operator</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">ASAP</th>
                  <th className="p-2">ALAP</th>
                  <th className="p-2">Mobility</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262833]">
                {scheduleAnalysis.opsWithMobility.map(op => (
                  <tr key={op.id} className="hover:bg-[#16171d]">
                    <td className="p-2 font-bold text-white">{op.name.split(' ')[0]}</td>
                    <td className="p-2 text-slate-400 uppercase text-[10px]">{op.type}</td>
                    <td className="p-2 text-cyan-400">Step {op.asapStep}</td>
                    <td className="p-2 text-amber-400">Step {op.alapStep}</td>
                    <td className="p-2 font-bold">{op.mobility}</td>
                    <td className="p-2">
                      {op.isCritical ? (
                        <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[9px] font-bold">
                          CRITICAL
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px]">
                          FLEXIBLE
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hardware Resource Profile Bar Charts */}
        <div className="p-5 rounded-xl bg-[#111215] border border-[#262833] space-y-4">
          <h4 className="font-bold text-xs text-white flex items-center justify-between">
            <span>Peak Hardware Concurrency & Resource Allocation</span>
            <span className="text-[10px] font-mono text-slate-400">Functional Unit Count</span>
          </h4>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-400">ASAP Multiplier Hardware:</span>
                <span className="font-bold text-purple-400">{scheduleAnalysis.peakMulAsap} Mults required</span>
              </div>
              <div className="w-full bg-[#111215] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-purple-500 h-full rounded-full" 
                  style={{ width: `${(scheduleAnalysis.peakMulAsap / 4) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-[#262833]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-400">ASAP Adder Hardware:</span>
                <span className="font-bold text-cyan-400">{scheduleAnalysis.peakAddAsap} Adders required</span>
              </div>
              <div className="w-full bg-[#111215] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-cyan-500 h-full rounded-full" 
                  style={{ width: `${(scheduleAnalysis.peakAddAsap / 4) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#16171d] border border-emerald-500/30">
              <span className="text-[10px] text-slate-400 block mb-1">Critical Path Flow:</span>
              <div className="text-emerald-400 font-bold text-xs">
                {scheduleAnalysis.criticalPathOps.join(' ➔ ')}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
