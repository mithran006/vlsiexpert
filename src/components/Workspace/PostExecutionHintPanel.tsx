import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertTriangle, Lightbulb, ArrowRight, ShieldAlert } from 'lucide-react';
import { Problem, SimulationResult } from '../../types';
import { generatePostExecutionHint } from '../../utils/hintService';

interface PostExecutionHintPanelProps {
  problem: Problem;
  code: string;
  simulationResult: SimulationResult | null;
}

export const PostExecutionHintPanel: React.FC<PostExecutionHintPanelProps> = ({
  problem,
  code,
  simulationResult
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Strictly only show hint when code execution has run AND is wrong / failed!
  if (!simulationResult || simulationResult.passed) {
    return null;
  }

  const hint = generatePostExecutionHint(problem, code, simulationResult);
  if (!hint) {
    return null;
  }

  return (
    <div className="mx-3 my-2 rounded-xl bg-[#13110d] border border-amber-500/30 p-3.5 shadow-sm text-xs animate-fadeIn">
      <div className="flex items-center justify-between gap-2 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-amber-300 tracking-wide text-xs">
                {hint.title}
              </span>
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-rose-950/80 text-rose-300 border border-rose-500/40 font-mono font-bold">
                Execution Mismatch
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mt-0.5">
              {hint.summary}
            </p>
          </div>
        </div>

        <button 
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          aria-label={isExpanded ? 'Collapse Hint' : 'Expand Hint'}
        >
          {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-amber-400" />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-amber-500/20 space-y-2.5">
          <div className="text-[11px] font-bold text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
            <span>Key Diagnostic Points:</span>
          </div>

          <ul className="space-y-1.5 pl-1">
            {hint.detailedPoints.map((point, idx) => (
              <li key={idx} className="text-slate-200 text-xs flex items-start gap-2 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span><strong className="text-amber-300">Next Step:</strong> {hint.suggestedAction}</span>
          </div>
        </div>
      )}
    </div>
  );
};
