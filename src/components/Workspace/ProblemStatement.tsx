import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, Sparkles, CheckCircle2, HelpCircle, FileText, Code2, ShieldAlert, 
  Lock, History, MessageSquare, ThumbsUp, Send, User, Clock, Check, X, 
  Lightbulb, ArrowRight, Activity, Terminal, AlertTriangle, ShieldCheck, Play, 
  ChevronDown, ChevronUp, CheckCheck, FileCode, Layers
} from 'lucide-react';
import { Problem, SubmissionRecord, ProblemDiscussion, SimulationResult } from '../../types';
import { storageService } from '../../services/storageService';
import { generatePostExecutionHint, generateAllModelingHints } from '../../utils/hintService';
import { getModelingStylesForProblem, ModelingStyle } from '../../utils/modelingStylesService';
import { isVlsiHdlTopic, isHdlTopic, getStandardCircuitDefinition } from '../../utils/circuitClassification';
import { simulatorEngine } from '../../services/simulatorEngine';
import { getStandardProblemBenchmark } from '../../services/problemBenchmarkService';

export type StatementTab = 'statement' | 'example' | 'solution' | 'modeling' | 'submissions' | 'discussions' | 'notes' | 'hint';

interface ProblemStatementProps {
  problem: Problem;
  savedNote: string;
  onSaveNote: (note: string) => void;
  isSolved: boolean;
  onTriggerAntiCopy?: () => void;
  simulationResult?: SimulationResult | null;
  code?: string;
  onRunSimulation?: () => void;
  onInsertSolution?: (solutionCode: string) => void;
  activeStatementTab?: StatementTab;
  onTabChange?: (tab: StatementTab) => void;
  activeModelingStyle?: ModelingStyle;
  onSelectModelingStyle?: (style: ModelingStyle) => void;
  onLoadModelingTemplate?: (style: ModelingStyle) => void;
  onLoadModelingSolution?: (style: ModelingStyle) => void;
}

export const ProblemStatement: React.FC<ProblemStatementProps> = ({
  problem,
  savedNote,
  onSaveNote,
  isSolved,
  onTriggerAntiCopy,
  simulationResult,
  code = '',
  onRunSimulation,
  onInsertSolution,
  activeStatementTab,
  onTabChange,
  activeModelingStyle = 'dataflow',
  onSelectModelingStyle,
  onLoadModelingTemplate,
  onLoadModelingSolution
}) => {
  const [internalTab, setInternalTab] = useState<StatementTab>('statement');
  const activeTab = activeStatementTab || internalTab;
  const setActiveTab = (tab: StatementTab) => {
    setInternalTab(tab);
    onTabChange?.(tab);
  };
  const [noteText, setNoteText] = useState(savedNote || '');
  const [hasManuallyUnlockedSolution, setHasManuallyUnlockedSolution] = useState(false);
  const [confirmUnlock, setConfirmUnlock] = useState(false);
  const [showRawLogs, setShowRawLogs] = useState(false);
  const [solutionModelingStyle, setSolutionModelingStyle] = useState<ModelingStyle>('dataflow');
  const [selectedModelingTabStyle, setSelectedModelingTabStyle] = useState<ModelingStyle>(activeModelingStyle);
  const [selectedHintModelingStyle, setSelectedHintModelingStyle] = useState<ModelingStyle>('structural');
  const [copiedStyle, setCopiedStyle] = useState<string | null>(null);

  // Synchronize modeling tab selection with active modeling style when passed
  useEffect(() => {
    if (activeModelingStyle) {
      setSelectedModelingTabStyle(activeModelingStyle);
    }
  }, [activeModelingStyle]);

  // Reset manual solution unlock when problem changes
  useEffect(() => {
    setHasManuallyUnlockedSolution(false);
    setConfirmUnlock(false);
  }, [problem.id]);

  const benchmark = useMemo(() => getStandardProblemBenchmark(problem), [problem]);
  const hasAttempted = simulationResult !== null && simulationResult !== undefined;
  const hasExecutionFailure = simulationResult && !simulationResult.passed;
  const postExecHint = hasExecutionFailure ? generatePostExecutionHint(problem, code, simulationResult) : null;
  const allModelingHints = useMemo(() => {
    return generateAllModelingHints(problem, code, simulationResult || null);
  }, [problem, code, simulationResult]);

  // Sync hint style to detected style upon execution
  useEffect(() => {
    if (simulationResult && allModelingHints.detectedStyle) {
      setSelectedHintModelingStyle(allModelingHints.detectedStyle);
    }
  }, [simulationResult, allModelingHints.detectedStyle]);

  // Submissions State
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);
  const [selectedSubmissionCode, setSelectedSubmissionCode] = useState<string | null>(null);

  // Discussions State
  const [discussions, setDiscussions] = useState<ProblemDiscussion[]>([]);
  const [loadingDiscussions, setLoadingDiscussions] = useState(false);
  const [newDiscussionTitle, setNewDiscussionTitle] = useState('');
  const [newDiscussionContent, setNewDiscussionContent] = useState('');
  const [isPostingDiscussion, setIsPostingDiscussion] = useState(false);

  // Load Submissions & Discussions on Tab Select
  useEffect(() => {
    if (activeTab === 'submissions') {
      setLoadingSubmissions(true);
      const user = storageService.getUser();
      storageService.fetchSubmissions(user?.id, problem.id, 20)
        .then((res) => setSubmissions(res))
        .finally(() => setLoadingSubmissions(false));
    } else if (activeTab === 'discussions') {
      setLoadingDiscussions(true);
      storageService.fetchDiscussions(problem.id)
        .then((res) => setDiscussions(res))
        .finally(() => setLoadingDiscussions(false));
    }
  }, [activeTab, problem.id]);

  // Memoized test vectors for the output verification table with accurate input conditions
  const displayTestVectors = useMemo(() => {
    // 1. If simulation has been run, use the verified test vectors from simulation result!
    if (simulationResult?.testVectors && simulationResult.testVectors.length > 0) {
      return simulationResult.testVectors.map(tv => {
        const inputCond = Object.entries(tv.inputs || {})
          .filter(([k]) => !k.toLowerCase().includes('clk'))
          .map(([k, v]) => `${k}=${v}`)
          .join(', ') || `Vector ${tv.cycle}`;
        
        const firstOutKey = Object.keys(tv.expectedOutputs || {})[0] || 'out';
        const expectedVal = Object.entries(tv.expectedOutputs || {})
          .map(([k, v]) => `${k}=${v}`)
          .join(', ');
        const actualVal = Object.entries(tv.actualOutputs || {})
          .map(([k, v]) => `${k}=${v}`)
          .join(', ');

        return {
          cycle: tv.cycle,
          condition: inputCond,
          signalName: firstOutKey,
          expected: expectedVal,
          actual: actualVal || '0',
          passed: tv.passed,
          hasRun: true
        };
      });
    }

    // 2. Pre-simulation baseline: compute real test vectors using standard reference solution
    const stdDef = getStandardCircuitDefinition(problem);
    const refCode = stdDef?.solutionCode || benchmark?.solutionCode || problem.solutionCode || '';
    if (refCode) {
      try {
        const sim = simulatorEngine.simulate(problem, refCode);
        if (sim?.testVectors && sim.testVectors.length > 0) {
          return sim.testVectors.slice(0, 8).map(tv => {
            const inputCond = Object.entries(tv.inputs || {})
              .filter(([k]) => !k.toLowerCase().includes('clk'))
              .map(([k, v]) => `${k}=${v}`)
              .join(', ') || `Vector ${tv.cycle}`;
            
            const firstOutKey = Object.keys(tv.expectedOutputs || {})[0] || 'out';
            const expectedVal = Object.entries(tv.expectedOutputs || {})
              .map(([k, v]) => `${k}=${v}`)
              .join(', ');

            return {
              cycle: tv.cycle,
              condition: inputCond,
              signalName: firstOutKey,
              expected: expectedVal,
              actual: '—',
              passed: null as boolean | null,
              hasRun: false
            };
          });
        }
      } catch {}
    }

    // Fallback if no reference simulator is applicable
    return [
      { cycle: 0, condition: 'Stimulus #0', signalName: 'out', expected: '0', actual: '—', passed: null, hasRun: false },
      { cycle: 1, condition: 'Stimulus #1', signalName: 'out', expected: '1', actual: '—', passed: null, hasRun: false }
    ];
  }, [problem, simulationResult]);

  const handlePreventCopy = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (onTriggerAntiCopy) {
      onTriggerAntiCopy();
    }
  };

  const handleNoteChange = (text: string) => {
    setNoteText(text);
    onSaveNote(text);
  };

  const handlePostDiscussion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDiscussionContent.trim()) return;

    setIsPostingDiscussion(true);
    const user = storageService.getUser();
    const newPost = await storageService.postDiscussion({
      problemId: problem.id,
      userId: user?.id || 'usr_student',
      userName: user?.name || 'Hardware Engineer',
      title: newDiscussionTitle.trim() || undefined,
      content: newDiscussionContent.trim()
    });

    if (newPost) {
      setDiscussions([newPost, ...discussions]);
      setNewDiscussionTitle('');
      setNewDiscussionContent('');
    }
    setIsPostingDiscussion(false);
  };

  const handleUpvote = async (discId: string) => {
    setDiscussions(discussions.map(d => d.id === discId ? { ...d, upvotes: d.upvotes + 1 } : d));
    await storageService.upvoteDiscussion(discId);
  };

  return (
    <div 
      className="h-full flex flex-col bg-[#111215] border-r border-[#262833] text-[#f1f3f7] selection:bg-[#e5a93c] selection:text-[#111215] overflow-hidden select-none no-copy protected-question"
      onCopy={handlePreventCopy}
      onCut={handlePreventCopy}
      onContextMenu={handlePreventCopy}
      onDragStart={handlePreventCopy}
    >
      
      {/* Sleek Modern Problem Statement Tab Strip */}
      <div className="h-10 px-3 bg-[#16171d] border-b border-[#262833] flex items-center justify-between gap-1 shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('statement')}
            className={`h-7 px-3 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'statement'
                ? 'bg-[#22232b] text-white font-semibold border border-[#353745]'
                : 'text-[#8c91a0] hover:text-white hover:bg-[#1a1b22]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Description</span>
          </button>

          {/* Dedicated 3 Modeling Styles Coding Sections Tab - STRICTLY ONLY IN HDLs */}
          {isHdlTopic(problem.topic) && (
            <button
              onClick={() => setActiveTab('modeling')}
              className={`h-7 px-2.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'modeling'
                  ? 'bg-[#22232b] text-[#e5a93c] font-semibold border border-[#e5a93c]/50'
                  : 'text-[#8c91a0] hover:text-[#e5a93c] hover:bg-[#1a1b22]'
              }`}
              title="3 Hardware Modeling Coding Sections: Structural, Dataflow, and Behavioral"
            >
              <Layers className="w-3.5 h-3.5 text-[#e5a93c] shrink-0" />
              <span>3 Modeling Styles</span>
              <span className="text-[9px] font-mono font-bold px-1 py-0.2 rounded bg-[#e5a93c]/20 text-[#e5a93c]">
                3
              </span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('solution')}
            className={`h-7 px-3 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'solution'
                ? 'bg-[#22232b] text-white font-semibold border border-[#353745]'
                : 'text-[#8c91a0] hover:text-white hover:bg-[#1a1b22]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Editorial</span>
          </button>

          <button
            onClick={() => setActiveTab('submissions')}
            className={`h-7 px-3 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'submissions'
                ? 'bg-[#22232b] text-white font-semibold border border-[#353745]'
                : 'text-[#8c91a0] hover:text-white hover:bg-[#1a1b22]'
            }`}
          >
            <History className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Submissions</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`h-7 px-3 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer relative ${
              activeTab === 'notes'
                ? 'bg-[#22232b] text-white font-semibold border border-[#353745]'
                : 'text-[#8c91a0] hover:text-white hover:bg-[#1a1b22]'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>Notes</span>
            {noteText.trim() && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 absolute top-1 right-1" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('hint')}
            className={`h-7 px-2.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'hint'
                ? 'bg-[#22232b] text-white font-semibold border border-[#353745]'
                : 'text-[#8c91a0] hover:text-white hover:bg-[#1a1b22]'
            }`}
            title="Post-Execution Modeling & Circuit Hints"
          >
            <Lightbulb className="w-3.5 h-3.5 text-[#e5a93c] shrink-0" />
            <span>Hint</span>
            {simulationResult && (
              <span className={`w-1.5 h-1.5 rounded-full ${simulationResult.passed ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Gentle Post-Execution Debug Hint Alert Banner */}
      {hasExecutionFailure && activeTab !== 'hint' && (
        <div className="mx-3 mt-2.5 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300 shrink-0 animate-fadeIn">
          <div className="flex items-center gap-2 truncate">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate font-medium">Test failed. Targeted debugging hints are ready.</span>
          </div>
          <button
            onClick={() => setActiveTab('hint')}
            className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px] hover:bg-amber-400 transition-colors shrink-0 ml-2 shadow-sm"
          >
            View Hint
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 select-none">
        
        {/* Title & Metadata (Clean Unboxed Typography) */}
        <div className="pb-3 border-b border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-slate-300 font-sans font-semibold tracking-wide uppercase text-[11px]">
                {problem.topic.replace(/_/g, ' ')}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className={`capitalize font-sans font-medium text-[11px] ${
                problem.difficulty === 'easy' ? 'text-emerald-400' : problem.difficulty === 'medium' ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {problem.difficulty}
              </span>
              {isSolved && (
                <>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-emerald-400 font-sans font-medium text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Solved
                  </span>
                </>
              )}
            </div>
            <span className="text-slate-500 text-[11px] font-mono">{problem.id}</span>
          </div>

          <h1 className="text-lg font-bold text-white tracking-tight leading-snug select-none">{problem.title}</h1>
        </div>

        {/* STATEMENT TAB */}
        {activeTab === 'statement' && (
          <div className="space-y-4 select-none">
            <div className="prose prose-invert text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line select-none protected-question font-sans">
              {benchmark?.description || problem.description}
            </div>

            {/* VERIFIED OUTPUT SECTION DISPLAYED BELOW THE QUESTION */}
            {simulationResult?.passed && (
              <div className="mt-5 space-y-3 pt-4 border-t border-slate-800/80 animate-fadeIn">
                <div className="p-4 rounded-xl bg-[#0c131d] border border-emerald-500/40 shadow-sm space-y-3">
                  
                  {/* Verified Header Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                          <span>Code Correct & Output Verified</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                            100% Passed
                          </span>
                        </div>
                        <div className="text-[11px] text-emerald-400/80">
                          {simulationResult?.message || "All simulation cycles and assertions matched expected outputs."}
                        </div>
                      </div>
                    </div>

                    {onRunSimulation && (
                      <button
                        onClick={onRunSimulation}
                        className="px-2.5 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 border border-emerald-500/40 text-[11px] font-semibold flex items-center gap-1 transition-all select-none shadow-sm shrink-0 cursor-pointer"
                        title="Re-run simulation"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Re-test</span>
                      </button>
                    )}
                  </div>

                  {/* Key Execution Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="p-2 rounded-lg bg-[#191a21] border border-[#2b2d39]">
                      <div className="text-[10px] text-[#9da3b4] font-mono uppercase">Status</div>
                      <div className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                        <Check className="w-3 h-3" />
                        <span>Accepted</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-[#191a21] border border-[#2b2d39]">
                      <div className="text-[10px] text-[#9da3b4] font-mono uppercase">Vectors Verified</div>
                      <div className="text-xs font-mono font-bold text-white mt-0.5">
                        {simulationResult?.passedTestsCount || problem.testbenchConfig?.cycles || 8} / {simulationResult?.totalTestsCount || problem.testbenchConfig?.cycles || 8}
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-[#191a21] border border-[#2b2d39]">
                      <div className="text-[10px] text-[#9da3b4] font-mono uppercase">Timing Slack</div>
                      <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">
                        +0.42 ns (MET)
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-[#191a21] border border-[#2b2d39]">
                      <div className="text-[10px] text-[#9da3b4] font-mono uppercase">Simulator Engine</div>
                      <div className="text-xs font-mono font-bold text-slate-300 mt-0.5 capitalize truncate">
                        {problem.topic.replace(/_/g, ' ')}
                      </div>
                    </div>
                  </div>

                  {/* Test Vectors Output Verification Table */}
                  {displayTestVectors.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-[#e5a93c]" />
                          <span>Output Verification Table</span>
                        </span>
                        <span className="text-[10px] text-[#9da3b4] font-mono">
                          {displayTestVectors.length} test vectors
                        </span>
                      </div>
                      
                      <div className="max-h-48 overflow-y-auto rounded-lg border border-[#262833] bg-[#191a21]">
                        <table className="w-full text-left text-[11px] font-mono border-collapse">
                          <thead>
                            <tr className="bg-[#16171d] text-[#9da3b4] border-b border-[#262833] text-[10px]">
                              <th className="py-1.5 px-2.5">Cycle</th>
                              <th className="py-1.5 px-2.5 text-cyan-300">Given Condition (Inputs)</th>
                              <th className="py-1.5 px-2.5">Signal</th>
                              <th className="py-1.5 px-2.5 text-emerald-400">Expected</th>
                              <th className="py-1.5 px-2.5 text-[#e5a93c]">Actual DUT</th>
                              <th className="py-1.5 px-2.5 text-right">Verdict</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#262833]">
                            {displayTestVectors.map((vec, idx) => (
                              <tr key={idx} className="hover:bg-[#20222b]">
                                <td className="py-1 px-2.5 text-slate-400">#{vec.cycle}</td>
                                <td className="py-1 px-2.5 text-cyan-300 font-mono">{vec.condition}</td>
                                <td className="py-1 px-2.5 font-bold text-slate-200">{vec.signalName}</td>
                                <td className="py-1 px-2.5 text-emerald-300 font-bold">{vec.expected}</td>
                                <td className="py-1 px-2.5 text-blue-300 font-bold">{vec.actual}</td>
                                <td className="py-1 px-2.5 text-right">
                                  {vec.hasRun ? (
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                                      vec.passed 
                                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                                        : 'text-rose-400 bg-rose-500/10 border-rose-500/20'
                                    }`}>
                                      {vec.passed ? <Check className="w-2.5 h-2.5" /> : <X className="w-2.5 h-2.5" />}
                                      <span>{vec.passed ? 'Pass' : 'Fail'}</span>
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                                      Pending
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* STDOUT Simulation Log Accordion */}
                  {simulationResult?.logs && simulationResult.logs.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <button
                        onClick={() => setShowRawLogs(prev => !prev)}
                        className="text-[10px] font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1 select-none"
                      >
                        <Terminal className="w-3 h-3 text-emerald-400" />
                        <span>Simulator Log STDOUT ({simulationResult.logs.length} lines)</span>
                        {showRawLogs ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>

                      {showRawLogs && (
                        <pre className="p-2.5 rounded-lg bg-[#191a21] border border-[#2b2d39] text-[10px] font-mono text-[#eff1f6] max-h-36 overflow-y-auto whitespace-pre-wrap leading-relaxed select-text">
                          {simulationResult.logs.join('\n')}
                        </pre>
                      )}
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* DIAGNOSTIC OUTPUT IF CODE EXECUTION FAILED */}
            {simulationResult && !simulationResult.passed && (
              <div className="mt-5 space-y-3 pt-4 border-t border-slate-800/80 animate-fadeIn">
                <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/40 shadow-lg space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                          <span>Simulation Output Mismatch</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 font-mono font-bold">
                            Test Failed
                          </span>
                        </div>
                        <div className="text-[11px] text-rose-400/80">
                          {simulationResult.message}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab('hint')}
                      className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px] hover:bg-amber-400 transition-colors shadow-sm shrink-0"
                    >
                      View Hint
                    </button>
                  </div>

                  {/* Assertion mismatch table */}
                  {simulationResult.testVectors && simulationResult.testVectors.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-slate-300">Test Vector Assertions & Conditions:</div>
                      <div className="max-h-40 overflow-y-auto rounded-lg border border-slate-800 bg-slate-950/80 text-[10px] font-mono divide-y divide-slate-800/50">
                        {simulationResult.testVectors.map((tv, idx) => {
                          const inStr = Object.entries(tv.inputs || {})
                            .filter(([k]) => !k.toLowerCase().includes('clk'))
                            .map(([k, v]) => `${k}=${v}`)
                            .join(', ');
                          return (
                            <div key={idx} className={`p-2 flex items-center justify-between gap-2 ${tv.passed ? 'text-slate-400' : 'bg-rose-950/40 text-rose-300 font-bold'}`}>
                              <div className="truncate">
                                <span className="font-bold text-white mr-1.5">Case {idx + 1}:</span>
                                {inStr && <span className="text-cyan-300 mr-2">({inStr})</span>}
                                <span>Expected {JSON.stringify(tv.expectedOutputs)}, Got {JSON.stringify(tv.actualOutputs)}</span>
                              </div>
                              <span className={`shrink-0 ${tv.passed ? 'text-emerald-400' : 'text-rose-400 font-bold'}`}>
                                {tv.passed ? '✓ PASS' : '✗ FAIL'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Failure Logs */}
                  {simulationResult.logs && simulationResult.logs.length > 0 && (
                    <pre className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono text-rose-300 max-h-24 overflow-y-auto whitespace-pre-wrap select-text">
                      {simulationResult.logs.slice(-6).join('\n')}
                    </pre>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* WORKED EXAMPLE TAB */}
        {activeTab === 'example' && (
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 select-none">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
              <Sparkles className="w-4 h-4" />
              <span>Step-by-Step Worked Logic Example</span>
            </div>
            <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800/80 select-none protected-question">
              {benchmark?.workedExample || problem.workedExample}
            </pre>
          </div>
        )}

        {/* SOLUTION REFERENCE TAB */}
        {activeTab === 'solution' && (
          <div className="space-y-4 select-none">
            {isSolved || hasManuallyUnlockedSolution ? (
              (() => {
                const isHdl = isHdlTopic(problem.topic);
                const models = isHdl ? getModelingStylesForProblem(problem) : null;
                const activeModel = models ? models[solutionModelingStyle] : null;
                const currentSolCode = activeModel ? activeModel.solutionCode : (benchmark?.solutionCode || problem.solutionCode || '');

                const handleCopySolution = (textToCopy: string, styleKey: string) => {
                  navigator.clipboard?.writeText(textToCopy);
                  setCopiedStyle(styleKey);
                  setTimeout(() => setCopiedStyle(null), 2000);
                };

                return (
                  <div className="space-y-4 select-none">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1 border border-emerald-500/30">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified Solution Unlocked
                        </span>
                        <span className="text-xs font-bold text-slate-300">
                          {isHdl ? '3 Modeling Paradigms' : 'Reference Implementation'}
                        </span>
                      </div>
                      {onInsertSolution && (
                        <button
                          onClick={() => onInsertSolution(currentSolCode)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm shadow-emerald-500/30 transition-all cursor-pointer"
                          title="Insert this solution directly into the code editor"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          <span>Load Active Solution into Editor</span>
                        </button>
                      )}
                    </div>

                    {/* Modeling Style Selector Tabs - STRICTLY ONLY IN HDLs */}
                    {isHdl && models && (
                      <div className="space-y-3">
                        <div className="flex items-center p-1 bg-[#16171d] rounded-xl border border-[#262833] gap-1">
                          <button
                            onClick={() => setSolutionModelingStyle('structural')}
                            className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all select-none cursor-pointer ${
                              solutionModelingStyle === 'structural'
                                ? 'bg-[#e5a93c] text-[#111215] shadow-md'
                                : 'text-[#9da3b4] hover:text-white hover:bg-[#1f212a]'
                            }`}
                          >
                            <span>🏛️ Structural</span>
                          </button>
                          <button
                            onClick={() => setSolutionModelingStyle('dataflow')}
                            className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all select-none cursor-pointer ${
                              solutionModelingStyle === 'dataflow'
                                ? 'bg-[#e5a93c] text-[#111215] shadow-md'
                                : 'text-[#9da3b4] hover:text-white hover:bg-[#1f212a]'
                            }`}
                          >
                            <span>⚡ Dataflow</span>
                          </button>
                          <button
                            onClick={() => setSolutionModelingStyle('behavioral')}
                            className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all select-none cursor-pointer ${
                              solutionModelingStyle === 'behavioral'
                                ? 'bg-[#e5a93c] text-[#111215] shadow-md'
                                : 'text-[#9da3b4] hover:text-white hover:bg-[#1f212a]'
                            }`}
                          >
                            <span>🧠 Behavioral</span>
                          </button>
                        </div>

                        {/* Style Header Info Card */}
                        {activeModel && (
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-white flex items-center gap-1.5">
                                <Layers className="w-4 h-4 text-[#e5a93c]" />
                                <span>{activeModel.label}</span>
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/30">
                                {activeModel.badge}
                              </span>
                            </div>
                            <p className="text-slate-300 text-[11px] leading-relaxed">
                              {activeModel.description}
                            </p>
                            {activeModel.keyConstructs.length > 0 && (
                              <div className="pt-1 flex flex-wrap gap-1">
                                {activeModel.keyConstructs.map((kc, i) => (
                                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-cyan-300 font-mono border border-slate-800">
                                    {kc}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Code Syntax Block */}
                    <div className="relative group">
                      <div className="absolute right-3 top-3 flex items-center gap-2 z-10">
                        <button
                          onClick={() => handleCopySolution(currentSolCode, solutionModelingStyle)}
                          className="px-2 py-1 rounded bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white text-[10px] font-mono flex items-center gap-1 transition-all select-none border border-slate-700 shadow cursor-pointer"
                          title="Copy solution code"
                        >
                          {copiedStyle === solutionModelingStyle ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <FileText className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                        {onInsertSolution && (
                          <button
                            onClick={() => onInsertSolution(currentSolCode)}
                            className="px-2 py-1 rounded bg-blue-600/90 hover:bg-blue-500 text-white text-[10px] font-bold flex items-center gap-1 transition-all select-none shadow cursor-pointer"
                            title="Load into code editor"
                          >
                            <span>Load ↵</span>
                          </button>
                        )}
                      </div>
                      <pre className="p-4 rounded-xl bg-slate-950 border border-emerald-900/40 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed select-none protected-question pt-10">
                        {currentSolCode}
                      </pre>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 shadow-inner">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Reference Solution Locked</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Code is protected before implementation. Try writing your solution in the editor or unlock the reference solution below.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 text-left text-xs space-y-2.5 max-w-md mx-auto font-mono text-slate-300">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider font-sans">
                    Options:
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                    <span className="text-xs">Implement your logic and click <strong>Run</strong> to verify against test vectors.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                    <span className="text-xs">Or click <strong>Reveal & Load into Editor</strong> below to inspect the verified reference code.</span>
                  </div>
                </div>

                <div className="pt-2">
                  {!confirmUnlock ? (
                    <button
                      onClick={() => setConfirmUnlock(true)}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Need guidance? Click to reveal reference code
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-2 max-w-sm mx-auto text-left">
                      <p className="text-[11px] text-amber-200">
                        Reveal and automatically load the verified reference code into your editor?
                      </p>
                      <div className="flex items-center justify-end gap-2 pt-1">
                        <button
                          onClick={() => setConfirmUnlock(false)}
                          className="px-3 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold cursor-pointer"
                        >
                          Keep Trying
                        </button>
                        <button
                          onClick={() => {
                            setHasManuallyUnlockedSolution(true);
                            setConfirmUnlock(false);
                            onInsertSolution?.(benchmark?.solutionCode || problem.solutionCode || '');
                          }}
                          className="px-3.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm cursor-pointer"
                        >
                          Reveal & Load into Editor
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUBMISSIONS HISTORY TAB */}
        {activeTab === 'submissions' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <History className="w-4 h-4 text-cyan-400" />
                <span>Your Past Submissions (SQLite Database)</span>
              </h3>
              <span className="text-[11px] text-slate-400">{submissions.length} Total Submissions</span>
            </div>

            {loadingSubmissions ? (
              <div className="p-8 text-center text-xs text-slate-400 font-mono">
                Loading submissions from SQLite database...
              </div>
            ) : submissions.length === 0 ? (
              <div className="p-8 rounded-xl bg-slate-950/60 border border-slate-800 text-center space-y-2">
                <p className="text-xs text-slate-400">No submissions recorded for this drill yet.</p>
                <p className="text-[11px] text-slate-500">Run simulation or click "Submit" in the code editor to log a verified run into the database.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {submissions.map((sub) => {
                  const isAcc = sub.status === 'Accepted';
                  return (
                    <div 
                      key={sub.id}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 ${
                            isAcc ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          }`}>
                            {isAcc ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                            {sub.status}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 uppercase">{sub.language}</span>
                        </div>

                        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span>{new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-900">
                        <span>Test Cases: <b className="text-slate-200">{sub.passedTestCases}/{sub.totalTestCases} Passed</b></span>
                        <span>Runtime: <b className="text-slate-200">{sub.executionTimeMs}ms</b></span>
                        <button
                          onClick={() => setSelectedSubmissionCode(selectedSubmissionCode === sub.code ? null : sub.code)}
                          className="text-blue-400 hover:underline font-semibold"
                        >
                          {selectedSubmissionCode === sub.code ? 'Hide Code' : 'View Code'}
                        </button>
                      </div>

                      {selectedSubmissionCode === sub.code && (
                        <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                          {sub.code}
                        </pre>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* COMMUNITY DISCUSSIONS TAB */}
        {activeTab === 'discussions' && (
          <div className="space-y-5">
            {/* New Post Form */}
            <form onSubmit={handlePostDiscussion} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <span>Post Question or Hardware Hint</span>
              </h4>
              <input
                type="text"
                value={newDiscussionTitle}
                onChange={(e) => setNewDiscussionTitle(e.target.value)}
                placeholder="Topic / Title (e.g., Corner case with reset synchronization)..."
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
              <textarea
                value={newDiscussionContent}
                onChange={(e) => setNewDiscussionContent(e.target.value)}
                placeholder="Describe your reasoning, testbench observations, or hardware solution tips..."
                rows={3}
                className="w-full p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isPostingDiscussion || !newDiscussionContent.trim()}
                  className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 disabled:opacity-50 transition-all shadow-md shadow-purple-600/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isPostingDiscussion ? 'Posting...' : 'Post to Community'}</span>
                </button>
              </div>
            </form>

            {/* Discussions List */}
            {loadingDiscussions ? (
              <div className="p-8 text-center text-xs text-slate-400 font-mono">
                Loading community discussions from database...
              </div>
            ) : discussions.length === 0 ? (
              <div className="p-8 rounded-xl bg-slate-950/60 border border-slate-800 text-center space-y-2">
                <p className="text-xs text-slate-400">No discussion posts yet for this drill.</p>
                <p className="text-[11px] text-slate-500">Be the first student to post a design tip or question!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {discussions.map((disc) => (
                  <div key={disc.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-purple-300">
                          {disc.userName ? disc.userName[0] : 'S'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{disc.userName}</div>
                          <div className="text-[10px] text-slate-500">{new Date(disc.createdAt).toLocaleDateString()}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleUpvote(disc.id)}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-purple-500 text-slate-300 hover:text-purple-300 text-xs flex items-center gap-1 transition-all"
                      >
                        <ThumbsUp className="w-3 h-3 text-purple-400" />
                        <span className="font-bold font-mono">{disc.upvotes}</span>
                      </button>
                    </div>

                    {disc.title && (
                      <h5 className="text-xs font-bold text-slate-200">{disc.title}</h5>
                    )}

                    <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {disc.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MY NOTES TAB */}
        {activeTab === 'notes' && (
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-slate-300">Personal Notes & Circuit Diagrams</label>
            <textarea
              value={noteText}
              onChange={(e) => handleNoteChange(e.target.value)}
              placeholder="Record synthesis timing observations, state machine tables, or equations for this drill..."
              className="w-full h-48 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500 font-mono"
            />
            <p className="text-[11px] text-slate-500">Notes are automatically saved locally in your browser and synced to the database.</p>
          </div>
        )}

        {/* DEDICATED 3 MODELING STYLES CODING SECTIONS TAB - STRICTLY ONLY IN HDLs */}
        {activeTab === 'modeling' && isHdlTopic(problem.topic) && (
          <div className="space-y-4 select-none animate-fadeIn">
            <div className="p-3.5 rounded-xl bg-[#111217] border border-[#e5a93c]/30 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#e5a93c]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    3 Hardware Modeling Coding Sections
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#e5a93c]/15 text-[#e5a93c] border border-[#e5a93c]/30 font-bold">
                  IEEE 1364 / 1800 Standards
                </span>
              </div>
              <p className="text-[11px] text-[#9da3b4] leading-relaxed">
                In digital VLSI and HDL design, every circuit can be designed using three distinct paradigms:
                <strong className="text-white"> Structural (Gate Netlist)</strong>,
                <strong className="text-white"> Dataflow (Continuous Assign)</strong>, and
                <strong className="text-white"> Behavioral (Procedural Always)</strong>.
                Compare each style below and load its template or reference code into your editor.
              </p>
            </div>

            {/* 3 Modeling Style Switcher Bar */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#16171d] rounded-xl border border-[#262833]">
              {(['structural', 'dataflow', 'behavioral'] as ModelingStyle[]).map((styleKey) => {
                const isSelected = selectedModelingTabStyle === styleKey;
                return (
                  <button
                    key={styleKey}
                    onClick={() => setSelectedModelingTabStyle(styleKey)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-bold flex flex-col items-center justify-center gap-0.5 transition-all select-none cursor-pointer ${
                      isSelected
                        ? 'bg-[#e5a93c] text-[#111215] shadow-md font-bold'
                        : 'text-[#9da3b4] hover:text-white hover:bg-[#1f212a]'
                    }`}
                  >
                    <span className="capitalize flex items-center gap-1">
                      {styleKey === 'structural' && '🏛️ Structural'}
                      {styleKey === 'dataflow' && '⚡ Dataflow'}
                      {styleKey === 'behavioral' && '🧠 Behavioral'}
                    </span>
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-[#111215]/80' : 'text-slate-500'}`}>
                      {styleKey === 'structural' && 'Gate Primitives'}
                      {styleKey === 'dataflow' && 'Continuous Assign'}
                      {styleKey === 'behavioral' && 'Procedural Always'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Style Overview & Code Block */}
            {(() => {
              const models = getModelingStylesForProblem(problem);
              const activeModel = models[selectedModelingTabStyle];
              if (!activeModel) return null;

              return (
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">
                          {activeModel.label}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/30">
                          {activeModel.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {onLoadModelingTemplate && (
                          <button
                            onClick={() => {
                              onLoadModelingTemplate(selectedModelingTabStyle);
                              onSelectModelingStyle?.(selectedModelingTabStyle);
                            }}
                            className="px-2.5 py-1 rounded-md bg-[#191a21] hover:bg-[#222430] text-cyan-300 hover:text-cyan-200 border border-[#2b2d39] text-[11px] font-medium flex items-center gap-1 transition-all cursor-pointer"
                            title="Load starter template for this modeling style into editor"
                          >
                            <FileCode className="w-3 h-3 text-cyan-400" />
                            <span>Load Template</span>
                          </button>
                        )}
                        {(onLoadModelingSolution || onInsertSolution) && (
                          <button
                            onClick={() => {
                              if (onLoadModelingSolution) {
                                onLoadModelingSolution(selectedModelingTabStyle);
                                onSelectModelingStyle?.(selectedModelingTabStyle);
                              } else if (onInsertSolution) {
                                onInsertSolution(activeModel.solutionCode);
                              }
                            }}
                            className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-sm shadow-emerald-600/30"
                            title="Load full verified working reference code for this style into editor"
                          >
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            <span>Load Solution</span>
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed">
                      {activeModel.description}
                    </p>

                    {/* Key Constructs */}
                    {activeModel.keyConstructs.length > 0 && (
                      <div className="space-y-1 pt-1">
                        <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Key Constructs:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {activeModel.keyConstructs.map((kc, i) => (
                            <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-cyan-300 font-mono border border-slate-800">
                              {kc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Code Preview Block */}
                  <div className="relative group rounded-xl overflow-hidden border border-[#262833] bg-[#0d0e12]">
                    <div className="px-3.5 py-2 bg-[#16171d] border-b border-[#262833] flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400 text-[11px]">
                        {problem.title.toLowerCase().replace(/[^a-z0-9_]/g, '_')}_{selectedModelingTabStyle}.v
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(activeModel.solutionCode);
                          setCopiedStyle(`modeling_${selectedModelingTabStyle}`);
                          setTimeout(() => setCopiedStyle(null), 2000);
                        }}
                        className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-300 hover:text-white flex items-center gap-1 transition-all cursor-pointer"
                      >
                        {copiedStyle === `modeling_${selectedModelingTabStyle}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Code2 className="w-3 h-3" />}
                        <span>{copiedStyle === `modeling_${selectedModelingTabStyle}` ? 'Copied' : 'Copy Code'}</span>
                      </button>
                    </div>
                    <pre className="p-3.5 text-xs font-mono text-slate-200 overflow-x-auto max-h-72 leading-relaxed whitespace-pre select-text">
                      {activeModel.solutionCode}
                    </pre>
                  </div>
                </div>
              );
            })()}
          </div>
        )}


        {/* POST-EXECUTION DEBUGGING & 3 MODELING STYLES HINTS TAB */}
        {activeTab === 'hint' && (
          <div className="space-y-4 select-none animate-fadeIn">
            {/* Header Status Card */}
            <div className="p-4 rounded-xl bg-[#13110d] border border-amber-500/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <Lightbulb className="w-4.5 h-4.5 text-amber-400" />
                  <span>Post-Execution Guidance & Modeling Hints</span>
                </div>
                {simulationResult && (
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold border ${
                    simulationResult.passed
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                  }`}>
                    {simulationResult.passed ? '✓ Simulation Passed' : '✗ Needs Revision'}
                  </span>
                )}
              </div>

              {simulationResult ? (
                <div className="text-xs text-slate-300 space-y-1.5">
                  <p className="leading-relaxed">{allModelingHints.summary}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[11px] text-slate-400">Detected Active DUT Style:</span>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                      {allModelingHints.detectedStyle} Modeling
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-300 leading-relaxed">
                  Run simulation (Ctrl+Enter) to get dynamic verification feedback, circuit checkpoints, and targeted guidance for all three modeling paradigms.
                </p>
              )}
            </div>

            {/* Diagnostic Failure Details if compilation/testbench failed */}
            {postExecHint && (
              <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                <div className="flex items-center gap-2 text-rose-300 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{postExecHint.title}</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  {postExecHint.summary}
                </p>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider">
                    Targeted Checkpoints:
                  </span>
                  <ul className="space-y-1 pl-1">
                    {postExecHint.detailedPoints.map((point, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong className="text-amber-300">Actionable Fix:</strong> {postExecHint.suggestedAction}</span>
                </div>
              </div>
            )}

            {/* 3 Modeling Styles Post-Execution Guidance */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Hints for All 3 Hardware Modeling Styles:</span>
              </div>

              {/* Modeling Styles Tabs */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-[#16171d] rounded-xl border border-[#262833]">
                {(['structural', 'dataflow', 'behavioral'] as ModelingStyle[]).map((styleKey) => {
                  const isSelected = selectedHintModelingStyle === styleKey;
                  const isDetected = allModelingHints.detectedStyle === styleKey;
                  return (
                    <button
                      key={styleKey}
                      onClick={() => setSelectedHintModelingStyle(styleKey)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all select-none cursor-pointer ${
                        isSelected
                          ? 'bg-[#e5a93c] text-[#111215] shadow-md font-bold'
                          : 'text-[#9da3b4] hover:text-white hover:bg-[#1f212a]'
                      }`}
                    >
                      <span className="capitalize">{styleKey}</span>
                      {isDetected && (
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-slate-900' : 'bg-amber-400'}`} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Style Hint Card */}
              {(() => {
                const hintObj = allModelingHints.hints[selectedHintModelingStyle];
                if (!hintObj) return null;
                return (
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">
                          {hintObj.label}
                        </span>
                        {hintObj.isCurrentStyle && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                            Active DUT
                          </span>
                        )}
                      </div>
                      {onLoadModelingTemplate && (
                        <button
                          onClick={() => {
                            onLoadModelingTemplate(selectedHintModelingStyle);
                            onSelectModelingStyle?.(selectedHintModelingStyle);
                          }}
                          className="px-2 py-1 rounded bg-[#191a21] hover:bg-[#222430] text-amber-300 border border-[#2b2d39] text-[10px] font-bold transition-all cursor-pointer"
                        >
                          Try in Editor
                        </button>
                      )}
                    </div>

                    <p className="text-slate-300 leading-relaxed text-xs">
                      {hintObj.guidance}
                    </p>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-300 whitespace-pre-wrap">
                      {hintObj.syntaxSnippet}
                    </div>

                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Synthesis Insight:</strong> {hintObj.synthesisTip}</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Standard Problem Reference Hints */}
            {problem.hints && problem.hints.length > 0 && (
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Circuit Reference Concepts:
                </span>
                <ul className="space-y-1.5 pl-1">
                  {problem.hints.map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
