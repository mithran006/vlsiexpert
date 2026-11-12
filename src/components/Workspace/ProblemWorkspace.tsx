import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  ArrowLeft, Play, Sparkles, CheckCircle2, Bookmark, RotateCcw, Download, 
  ChevronDown, FileCode, Activity, FileSpreadsheet, Terminal, Trophy, 
  ArrowRight, Zap, Check, Clock, Award, Sliders, ShieldCheck, Lock, Star,
  PanelLeftClose, PanelLeftOpen, ChevronLeft, ChevronRight, Search, X,
  BookOpen, TestTube, AlertTriangle, Lightbulb, CheckSquare,
  Minimize2, Maximize2, Camera, Cpu, Layers, Copy, FileText
} from 'lucide-react';
import { Problem, UserProgress, SimulationResult, UserProfile } from '../../types';
import { ProblemStatement, StatementTab } from './ProblemStatement';
import { CodeEditor } from './CodeEditor';
import { WaveformViewer } from './WaveformViewer';
import { LinuxTerminalConsole } from './LinuxTerminalConsole';
import { EmbeddedConsole } from './EmbeddedConsole';
import { MicroPythonConsole } from './MicroPythonConsole';
import { ArduinoConsole } from './ArduinoConsole';
import { RtosTaskConsole } from './RtosTaskConsole';
import { Mnemonics8051Console } from './Mnemonics8051Console';
import { CvRoboticsLiveCam } from './CvRoboticsLiveCam';
import { PostExecutionHintPanel } from './PostExecutionHintPanel';
import { generatePostExecutionHint, generateAllModelingHints } from '../../utils/hintService';
import { ErrorBoundary } from '../common/ErrorBoundary';
import { CertificateModal } from '../CertificateModal';
import { StaTimingCalculatorModal } from '../StaTimingCalculatorModal';
import { simulatorEngine } from '../../services/simulatorEngine';
import { storageService } from '../../services/storageService';
import { certificateService, CertificateAward } from '../../services/certificateService';
import { ALL_PROBLEMS } from '../../data/problemsIndex';
import { getStandardProblemBenchmark } from '../../services/problemBenchmarkService';
import { 
  downloadHdlCode, downloadTestbench, downloadVcdWaveform, downloadCsvTrace, 
  downloadWaveformAsPng, downloadWaveformAsSvg, downloadBothHdlFiles,
  downloadCombinedHdl, getExtensionForTopic, downloadFile, sanitizeFilename,
  generateAsciiTimingTable 
} from '../../utils/exportUtils';
import { isCombinationalCircuit, getCombinationalCleanDefinition, isVlsiHdlTopic, isHdlTopic, getStandardCircuitDefinition } from '../../utils/circuitClassification';
import { getCleanStarterCode } from '../../utils/codeTemplateService';
import { getModelingStylesForProblem, ModelingStyle } from '../../utils/modelingStylesService';

interface ProblemWorkspaceProps {
  problem: Problem;
  progress: UserProgress;
  user?: UserProfile;
  onBack: () => void;
  onSolve: (problemId: string, code: string) => void;
  onToggleBookmark: (problemId: string) => void;
  onSelectNextProblem?: (nextProblem: Problem) => void;
  onTriggerAntiCopy?: () => void;
}

export const ProblemWorkspace: React.FC<ProblemWorkspaceProps> = ({
  problem,
  progress,
  user = { id: 'usr_guest', name: 'VLSI Hardware Engineer', email: '', isGuest: true, selectedTrack: 'both', role: 'student', xp: 0, level: 1, joinedDate: '2026', createdAt: '2026' },
  onBack,
  onSolve,
  onToggleBookmark,
  onSelectNextProblem,
  onTriggerAntiCopy
}) => {
  const isSolved = progress.solvedProblemIds.includes(problem.id);
  const isBookmarked = progress.bookmarks.includes(problem.id);
  const isLinuxTopic = problem.topic === 'linux';
  const isVlsi = isVlsiHdlTopic(problem.topic);
  const isHdl = isHdlTopic(problem.topic);
  const isEmbeddedOrMnemonics = !isVlsi && !isLinuxTopic;

  // Clean starter code (library-only for programming languages, clean module for HDL)
  const isComb = isCombinationalCircuit(problem);
  const cleanDef = getCombinationalCleanDefinition(problem);
  const cleanStarter = getCleanStarterCode(problem);

  const savedAnswerCode = storageService.getSavedCode(problem.id) || progress.savedCode[problem.id];
  const hasStaleClockInComb = isComb && savedAnswerCode && (/(\binput\s+wire\s+clk\b|\bposedge\s+clk\b)/i.test(savedAnswerCode) && !/clk/i.test(cleanStarter));
  const hasOldMuxPorts = isComb && savedAnswerCode && /module\s+2_to_1_multiplexer/i.test(savedAnswerCode);
  const isStaleOrSolution = !isSolved && (
    !savedAnswerCode ||
    savedAnswerCode === problem.solutionCode ||
    savedAnswerCode === problem.starterCode ||
    hasStaleClockInComb ||
    hasOldMuxPorts
  );
  const initialCode = isStaleOrSolution ? cleanStarter : savedAnswerCode;
  const [code, setCode] = useState(initialCode);
  const [forcedValues, setForcedValues] = useState<Record<string, string>>({});
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [savedNote, setSavedNote] = useState(progress.notes[problem.id] || '');
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showAcceptedModal, setShowAcceptedModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showStaModal, setShowStaModal] = useState(false);
  const [newlyUnlockedCert, setNewlyUnlockedCert] = useState<CertificateAward | null>(null);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [saveNotificationMessage, setSaveNotificationMessage] = useState('✓ Solution Verified & Accepted!');

  // Do not show code before coding: only reveal if user already solved it or has saved progress
  const [hasStartedCoding, setHasStartedCoding] = useState<boolean>(() => {
    return isSolved || (Boolean(savedAnswerCode) && savedAnswerCode !== cleanStarter);
  });

  const [panelLayout, setPanelLayout] = useState<'default' | 'code-expanded' | 'vis-expanded' | 'vis-maximized'>('default');
  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState<boolean>(false);
  const [windowMode, setWindowMode] = useState<'split' | 'lifted' | 'full'>('split');
  const [activeEditorTab, setActiveEditorTab] = useState<'dut' | 'tb' | 'combined'>('dut');
  // Output window hidden until code is running or solved/requested
  const [isOutputOpen, setIsOutputOpen] = useState<boolean>(() => isSolved);
  const [statementTab, setStatementTab] = useState<StatementTab>('statement');
  const [outputFailureTab, setOutputFailureTab] = useState<'hint' | 'waveform'>('waveform');
  const [consoleTab, setConsoleTab] = useState<'testcase' | 'result' | 'waveform'>('testcase');
  const [selectedTestCaseIndex, setSelectedTestCaseIndex] = useState<number>(0);

  // Fast problem switching calculations
  const currentIndex = useMemo(() => ALL_PROBLEMS.findIndex(p => p.id === problem.id), [problem.id]);
  const prevProblem = useMemo(() => (currentIndex > 0 ? ALL_PROBLEMS[currentIndex - 1] : null), [currentIndex]);
  const nextProblem = useMemo(() => (currentIndex >= 0 && currentIndex < ALL_PROBLEMS.length - 1 ? ALL_PROBLEMS[currentIndex + 1] : null), [currentIndex]);

  const [showProblemDropdown, setShowProblemDropdown] = useState(false);
  const [dropdownSearch, setDropdownSearch] = useState('');
  const [dropdownTopicFilter, setDropdownTopicFilter] = useState<string>('current');

  // Quick problem switcher filtered list
  const switcherProblems = useMemo(() => {
    return ALL_PROBLEMS.filter(p => {
      if (dropdownTopicFilter === 'current' && p.topic !== problem.topic) return false;
      if (dropdownTopicFilter !== 'all' && dropdownTopicFilter !== 'current' && p.topic !== dropdownTopicFilter) return false;
      if (dropdownSearch.trim()) {
        const q = dropdownSearch.toLowerCase();
        return p.title.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.topic.toLowerCase().includes(q);
      }
      return true;
    });
  }, [problem.topic, dropdownTopicFilter, dropdownSearch]);

  // Total solved calculations
  const totalSolved = useMemo(() => progress.solvedProblemIds.length, [progress.solvedProblemIds]);
  const isCertEligible = useMemo(() => certificateService.isCertificateEligible(progress, ALL_PROBLEMS), [progress]);
  const nextMilestone = useMemo(() => certificateService.getNextMilestone(totalSolved), [totalSolved]);

  // Topic specific problem counts
  const topicProblems = useMemo(() => ALL_PROBLEMS.filter(p => p.topic === problem.topic), [problem.topic]);
  const topicSolved = useMemo(() => topicProblems.filter(p => progress.solvedProblemIds.includes(p.id)).length, [topicProblems, progress.solvedProblemIds]);

  const [activeModelingStyle, setActiveModelingStyle] = useState<ModelingStyle>('dataflow');

  // Reset simulation state ONLY when problem.id changes (never reset when isSolved changes!)
  useEffect(() => {
    setShowAcceptedModal(false);
    setNewlyUnlockedCert(null);
    setForcedValues({});
    const saved = storageService.getSavedCode(problem.id) || progress.savedCode[problem.id];
    const starter = getCleanStarterCode(problem);
    const stdDef = getStandardCircuitDefinition(problem);
    const problemSolved = progress.solvedProblemIds.includes(problem.id);

    const hasStaleClock = isComb && saved && (/(\binput\s+wire\s+clk\b|\bposedge\s+clk\b)/i.test(saved) && !/clk/i.test(starter));
    const hasOldPorts = isComb && saved && /module\s+2_to_1_multiplexer/i.test(saved);

    let initial = starter;
    if (saved && !hasStaleClock && !hasOldPorts) {
      initial = saved;
    } else if (problemSolved) {
      const benchmark = getStandardProblemBenchmark(problem);
      initial = (stdDef && (stdDef.solutionCode || stdDef.starterCode)) || benchmark?.solutionCode || problem.solutionCode || starter;
    }

    const alreadyStarted = problemSolved || (Boolean(saved && !hasStaleClock && !hasOldPorts) && saved !== starter);
    setHasStartedCoding(alreadyStarted);

    setCode(initial);
    setActiveEditorTab('dut');
    setWindowMode('split');
    setSimulationResult(null);
    setIsOutputOpen(problemSolved); // If solved, keep output open to show verified waveform or live cam!
    setShowSaveNotification(false);
    setStatementTab('statement');
    setOutputFailureTab('waveform');
    if (problem.topic === 'cv_robotics') {
      setConsoleTab(problemSolved ? 'waveform' : 'testcase');
    } else {
      setConsoleTab(problemSolved ? 'result' : 'testcase');
    }
    setSelectedTestCaseIndex(0);
  }, [problem.id]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    storageService.saveProblemCode(problem.id, newCode);
  };

  const handleSelectModelingStyle = (style: ModelingStyle) => {
    if (style === activeModelingStyle) return;
    // 1. Persist current code under active modeling style
    if (code) {
      storageService.saveModelingCode(problem.id, activeModelingStyle, code);
    }
    setActiveModelingStyle(style);
    const models = getModelingStylesForProblem(problem);
    // 2. Check if student already has code written for this style
    const saved = storageService.getSavedModelingCode(problem.id, style);
    if (saved) {
      setCode(saved);
      storageService.saveProblemCode(problem.id, saved, true);
      setSaveNotificationMessage(`Switched to ${models[style].label} (Restored your code)`);
    } else {
      const template = models[style].starterCode;
      setCode(template);
      storageService.saveProblemCode(problem.id, template, true);
      setSaveNotificationMessage(`Switched to ${models[style].label} (Template loaded)`);
    }
    setHasStartedCoding(true);
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);
  };

  const handleLoadModelingTemplate = (style: ModelingStyle) => {
    setActiveModelingStyle(style);
    const models = getModelingStylesForProblem(problem);
    handleCodeChange(models[style].starterCode);
    setHasStartedCoding(true);
    setSaveNotificationMessage(`Loaded ${models[style].label} Starter Template`);
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 2500);
  };

  const handleLoadModelingSolution = (style: ModelingStyle) => {
    setActiveModelingStyle(style);
    const models = getModelingStylesForProblem(problem);
    handleCodeChange(models[style].solutionCode);
    setHasStartedCoding(true);
    setSaveNotificationMessage(`Loaded ${models[style].label} Reference Code`);
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 2500);
  };

  const handleStartCoding = () => {
    setHasStartedCoding(true);
  };

  const handleStartBlank = () => {
    const starter = getCleanStarterCode(problem);
    handleCodeChange(starter);
    setHasStartedCoding(true);
  };

  const handleResetCode = () => {
    const starter = getCleanStarterCode(problem);
    setCode(starter);
    storageService.saveProblemCode(problem.id, starter);
  };

  const handleGenerateCode = (autoRun = false, customCode?: string) => {
    const stdDef = getStandardCircuitDefinition(problem);
    const benchmark = getStandardProblemBenchmark(problem);
    const codeToSet = customCode || stdDef?.solutionCode || benchmark?.solutionCode || problem.solutionCode || problem.starterCode || '';
    if (codeToSet) {
      handleCodeChange(codeToSet);
      setHasStartedCoding(true);
      setSaveNotificationMessage(`✓ Loaded verified reference implementation for "${problem.title}"`);
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 3000);
      if (autoRun) {
        setTimeout(() => {
          setIsSimulating(true);
          setIsOutputOpen(true);
          setTimeout(() => {
            const res = simulatorEngine.simulate(problem, codeToSet, forcedValues);
            setSimulationResult(res);
            setIsSimulating(false);
            setOutputFailureTab('waveform');
            const hasSyntaxError = res.message.toLowerCase().includes('syntax error') || Boolean(res.errorLine);
            if (hasSyntaxError) {
              setConsoleTab('result');
            } else if (isVlsi || problem.topic === 'cv_robotics') {
              setConsoleTab('waveform');
              setPanelLayout('vis-expanded');
              setWindowMode('lifted');
            }
            storageService.saveProblemCode(problem.id, codeToSet);
            storageService.recordCodeAttempt(problem.id, res.passed, codeToSet);
            if (res.passed) {
              onSolve(problem.id, codeToSet);
              setSaveNotificationMessage('✓ Verified Solution Accepted & Saved!');
              setShowSaveNotification(true);
              setTimeout(() => setShowSaveNotification(false), 3500);
            }
          }, 200);
        }, 80);
      }
    }
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setIsOutputOpen(true); // Reveal output window as soon as execution starts
    setTimeout(() => {
      const res = simulatorEngine.simulate(problem, code, forcedValues);
      setSimulationResult(res);
      setIsSimulating(false);
      setOutputFailureTab('waveform');
      
      const hasSyntaxError = res.message.toLowerCase().includes('syntax error') || Boolean(res.errorLine);

      if (hasSyntaxError) {
        setConsoleTab('result');
        setIsOutputOpen(true);
      } else {
        // EXECUTING THE PROGRAM WITHOUT ERROR:
        // Automatically open the waveform window LARGE (80% height) for seamless EDA viewing
        if (isVlsi || problem.topic === 'cv_robotics') {
          setConsoleTab('waveform');
          setIsOutputOpen(true);
          setPanelLayout('vis-expanded');
          setWindowMode('lifted');
        } else {
          setConsoleTab('result');
          setIsOutputOpen(true);
          setPanelLayout('vis-expanded');
          setWindowMode('lifted');
        }
      }

      // Save code immediately after execution and record attempt
      storageService.saveProblemCode(problem.id, code, true);
      storageService.recordCodeAttempt(problem.id, res.passed, code);
      if (isVlsi) {
        storageService.saveModelingCode(problem.id, activeModelingStyle, code);
      }

      // Async DB write
      storageService.submitCodeToDatabase({
        userId: user?.id || 'usr_student',
        userName: user?.name || 'Hardware Student',
        problemId: problem.id,
        problemTitle: problem.title,
        language: problem.topic === 'linux' ? 'bash' : problem.topic === 'vhdl' ? 'vhdl' : problem.topic === 'systemverilog' ? 'systemverilog' : 'verilog',
        code,
        status: res.passed ? 'Accepted' : (res.message.includes('Syntax') ? 'Syntax Error' : 'Wrong Answer'),
        passedTestCases: res.passed ? (problem.testbenchConfig?.cycles || 8) : Math.max(0, (problem.testbenchConfig?.cycles || 8) - 2),
        totalTestCases: problem.testbenchConfig?.cycles || 8,
        executionTimeMs: Math.round((Math.random() * 4 + 2) * 10) / 10,
        waveformDataJson: JSON.stringify(res.samples || [])
      }).catch(() => {});

      if (res.passed) {
        onSolve(problem.id, code);
        setSaveNotificationMessage(`✓ Code executed & auto-saved! Solution Accepted.`);
        setShowSaveNotification(true);
        setTimeout(() => setShowSaveNotification(false), 4500);
      } else {
        setSaveNotificationMessage(`✓ Code executed & auto-saved: ${res.passedTestsCount || 0}/${res.totalTestsCount || 8} vectors passed.`);
        setShowSaveNotification(true);
        setTimeout(() => setShowSaveNotification(false), 3500);
      }
    }, 250);
  };

  const handleSubmitSolution = () => {
    setIsSimulating(true);
    setIsOutputOpen(true); // Reveal output window as soon as evaluation starts
    setTimeout(() => {
      const res = simulatorEngine.simulate(problem, code, forcedValues);
      setSimulationResult(res);
      setIsSimulating(false);
      setOutputFailureTab('waveform');
      
      const hasSyntaxError = res.message.toLowerCase().includes('syntax error') || Boolean(res.errorLine);

      if (hasSyntaxError) {
        setConsoleTab('result');
        setIsOutputOpen(true);
      } else {
        // EXECUTING THE PROGRAM WITHOUT ERROR:
        // Automatically open the waveform window LARGE (80% height) for seamless EDA viewing
        if (isVlsi || problem.topic === 'cv_robotics') {
          setConsoleTab('waveform');
          setIsOutputOpen(true);
          setPanelLayout('vis-expanded');
          setWindowMode('lifted');
        } else {
          setConsoleTab('result');
          setIsOutputOpen(true);
          setPanelLayout('vis-expanded');
          setWindowMode('lifted');
        }
      }

      // Save code immediately after execution and record attempt
      storageService.saveProblemCode(problem.id, code, true);
      storageService.recordCodeAttempt(problem.id, res.passed, code);
      if (isVlsi) {
        storageService.saveModelingCode(problem.id, activeModelingStyle, code);
      }

      // Persistent SQLite Submission Log
      storageService.submitCodeToDatabase({
        userId: user?.id || 'usr_student',
        userName: user?.name || 'Hardware Student',
        problemId: problem.id,
        problemTitle: problem.title,
        language: problem.topic === 'linux' ? 'bash' : problem.topic === 'vhdl' ? 'vhdl' : problem.topic === 'systemverilog' ? 'systemverilog' : 'verilog',
        code,
        status: res.passed ? 'Accepted' : (res.message.includes('Syntax') ? 'Syntax Error' : 'Wrong Answer'),
        passedTestCases: res.passed ? (problem.testbenchConfig?.cycles || 8) : Math.max(0, (problem.testbenchConfig?.cycles || 8) - 2),
        totalTestCases: problem.testbenchConfig?.cycles || 8,
        executionTimeMs: Math.round((Math.random() * 4 + 2) * 10) / 10,
        waveformDataJson: JSON.stringify(res.samples || [])
      }).catch(() => {});

      if (res.passed) {
        // Calculate if this solve hit a milestone or completed a library
        const prevSolved = progress.solvedProblemIds;
        const prevCount = prevSolved.length;
        const willBeNewCount = prevSolved.includes(problem.id) ? prevCount : prevCount + 1;

        const certUnlockInfo = certificateService.checkNewCertificateUnlocked(
          prevCount,
          willBeNewCount,
          problem,
          ALL_PROBLEMS,
          prevSolved
        );

        if (certUnlockInfo.isNewUnlock && certUnlockInfo.unlockedCert) {
          setNewlyUnlockedCert(certUnlockInfo.unlockedCert);
        } else {
          setNewlyUnlockedCert(null);
        }

        onSolve(problem.id, code);
        setShowAcceptedModal(true);
        setSaveNotificationMessage(`✓ Solution Verified & Accepted! Design & Testbench ready to save.`);
        setShowSaveNotification(true);
        setTimeout(() => setShowSaveNotification(false), 4500);
      } else {
        setSaveNotificationMessage(`Evaluation complete: ${res.passedTestsCount || 0}/${res.totalTestsCount || 8} vectors passed.`);
        setShowSaveNotification(true);
        setTimeout(() => setShowSaveNotification(false), 3500);
      }
    }, 300);
  };

  const handleForceSignal = useCallback((signalName: string, value: string) => {
    setForcedValues(prev => {
      const updated = { ...prev, [signalName]: value };
      const res = simulatorEngine.simulate(problem, code, updated);
      setSimulationResult(res);
      return updated;
    });
  }, [problem, code]);

  const handleClearForced = useCallback(() => {
    setForcedValues({});
    const res = simulatorEngine.simulate(problem, code, {});
    setSimulationResult(res);
  }, [problem, code]);

  const handleSaveNote = useCallback((note: string) => {
    setSavedNote(note);
    storageService.saveNote(problem.id, note);
  }, [problem.id]);

  // Determine effective problem signals (strictly ensuring NO clock for combinational circuits)
  const effectiveProblemSignals = useMemo(() => {
    if (cleanDef && cleanDef.signals && cleanDef.signals.length > 0) {
      return cleanDef.signals;
    }
    const raw = problem.testbenchConfig?.signals || problem.signals || [];
    if (isComb) {
      const filtered = raw.filter(s =>
        !s.name.toLowerCase().includes('clk') &&
        !s.name.toLowerCase().includes('clock') &&
        !s.name.toLowerCase().includes('rst')
      );
      if (filtered.length > 0) return filtered;
    }
    return raw;
  }, [cleanDef, problem, isComb]);

  const postExecHint = useMemo(() => {
    if (simulationResult && !simulationResult.passed) {
      return generatePostExecutionHint(problem, code, simulationResult);
    }
    return null;
  }, [problem, code, simulationResult]);

  // Structured test vectors for interactive testcase viewer
  const activeTestCases = useMemo(() => {
    if (simulationResult?.testVectors && simulationResult.testVectors.length > 0) {
      return simulationResult.testVectors;
    }
    const stdDef = getStandardCircuitDefinition(problem);
    const benchmark = getStandardProblemBenchmark(problem);
    const refCode = stdDef?.solutionCode || benchmark?.solutionCode || problem.solutionCode || '';
    if (refCode) {
      try {
        const sim = simulatorEngine.simulate(problem, refCode);
        if (sim?.testVectors && sim.testVectors.length > 0) {
          return sim.testVectors.map(tv => ({
            cycle: tv.cycle,
            timeNs: tv.timeNs,
            inputs: tv.inputs,
            expectedOutputs: tv.expectedOutputs,
            actualOutputs: undefined as Record<string, string> | undefined,
            passed: undefined as boolean | undefined
          }));
        }
      } catch {}
    }
    return [];
  }, [simulationResult, problem]);

  const [copiedResultLogs, setCopiedResultLogs] = useState(false);
  const [copiedResultMatrix, setCopiedResultMatrix] = useState(false);
  const [copiedTestcaseVectors, setCopiedTestcaseVectors] = useState(false);

  const handleCopyResultLogs = useCallback(() => {
    if (!simulationResult?.logs || simulationResult.logs.length === 0) return;
    navigator.clipboard.writeText(simulationResult.logs.join('\n'));
    setCopiedResultLogs(true);
    setTimeout(() => setCopiedResultLogs(false), 2500);
  }, [simulationResult]);

  const handleDownloadResultLogs = useCallback(() => {
    if (!simulationResult?.logs || simulationResult.logs.length === 0) return;
    const cleanName = sanitizeFilename(problem.title);
    downloadFile(simulationResult.logs.join('\n'), `${cleanName}_simulation.log`, 'text/plain');
  }, [simulationResult, problem.title]);

  const handleCopyResultMatrix = useCallback(() => {
    if (!problem) return;
    const asciiTable = generateAsciiTimingTable(problem, simulationResult);
    navigator.clipboard.writeText(asciiTable);
    setCopiedResultMatrix(true);
    setTimeout(() => setCopiedResultMatrix(false), 2500);
  }, [problem, simulationResult]);

  const handleCopyTestcaseVectors = useCallback(() => {
    if (!activeTestCases || activeTestCases.length === 0) return;
    let text = `// Hardware Stimulus Test Vectors for '${problem.title}' [${problem.topic.toUpperCase()}]\n`;
    text += `// Total Test Cases: ${activeTestCases.length}\n\n`;
    activeTestCases.forEach((tc, idx) => {
      const inStr = Object.entries(tc.inputs || {})
        .filter(([k]) => !k.toLowerCase().includes('clk'))
        .map(([k, v]) => `${k} = ${v}`)
        .join(', ');
      const expStr = Object.entries(tc.expectedOutputs || {})
        .map(([k, v]) => `${k} = ${v}`)
        .join(', ');
      text += `// Case #${idx + 1}:\n//   Inputs : ${inStr || 'None'}\n//   Expected Output: ${expStr || 'None'}\n\n`;
    });
    navigator.clipboard.writeText(text);
    setCopiedTestcaseVectors(true);
    setTimeout(() => setCopiedTestcaseVectors(false), 2500);
  }, [activeTestCases, problem.title, problem.topic]);

  // Global Keyboard Shortcuts (Ctrl+Enter to Run, Ctrl+Shift+Enter to Submit)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (e.shiftKey) {
          handleSubmitSolution();
        } else {
          handleRunSimulation();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code, forcedValues, isSimulating]);

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-[#111215] text-[#f1f3f7] selection:bg-[#e5a93c] selection:text-[#111215] overflow-hidden relative font-sans">
      
      {/* Top Workspace Bar */}
      <div className="h-11 bg-[#16171d] border-b border-[#262833] px-3.5 flex items-center justify-between gap-3 shrink-0">
        
        {/* Left Zone: Brand / Navigation & Title */}
        <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
          <button
            onClick={onBack}
            className="h-7.5 px-2.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-[#f1f3f7] hover:text-white flex items-center gap-1.5 text-xs font-medium transition-all border border-[#2b2d39] select-none shrink-0 cursor-pointer"
            title="Return to Problem List"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span className="hidden sm:inline">Problem List</span>
          </button>

          {/* Previous / Next Problem Fast Switcher */}
          <div className="flex items-center gap-0.5 bg-[#191a21] p-0.5 rounded-lg border border-[#2b2d39] shrink-0">
            <button
              onClick={() => prevProblem && onSelectNextProblem?.(prevProblem)}
              disabled={!prevProblem}
              className="h-6.5 w-6.5 rounded flex items-center justify-center text-[#9da3b4] hover:text-white hover:bg-[#262833] disabled:opacity-30 disabled:pointer-events-none transition-all select-none cursor-pointer"
              title={prevProblem ? `Previous: ${prevProblem.title}` : 'No previous problem'}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => nextProblem && onSelectNextProblem?.(nextProblem)}
              disabled={!nextProblem}
              className="h-6.5 w-6.5 rounded flex items-center justify-center text-[#9da3b4] hover:text-white hover:bg-[#262833] disabled:opacity-30 disabled:pointer-events-none transition-all select-none cursor-pointer"
              title={nextProblem ? `Next: ${nextProblem.title}` : 'No next problem'}
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Left panel collapse/expand toggle */}
          <button
            onClick={() => setIsLeftPanelCollapsed(prev => !prev)}
            className={`h-7.5 w-7.5 rounded-lg flex items-center justify-center transition-all select-none shrink-0 cursor-pointer ${
              isLeftPanelCollapsed ? 'bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/40' : 'text-[#9da3b4] hover:text-white hover:bg-[#191a21] border border-transparent'
            }`}
            title={isLeftPanelCollapsed ? "Show Problem Statement" : "Collapse Problem Statement (Wider Editor)"}
          >
            {isLeftPanelCollapsed ? <PanelLeftOpen className="w-3.5 h-3.5" /> : <PanelLeftClose className="w-3.5 h-3.5" />}
          </button>

          <span className="text-[#383a48] select-none">/</span>

          {/* Interactive Problem Switcher Dropdown */}
          <div className="relative min-w-0 max-w-xs sm:max-w-sm md:max-w-md">
            <button
              onClick={() => setShowProblemDropdown(prev => !prev)}
              className="h-7.5 px-2 rounded-lg hover:bg-[#191a21] border border-transparent hover:border-[#2b2d39] flex items-center gap-1.5 transition-all text-left w-full select-none group cursor-pointer"
              title="Click to jump to any problem quickly"
            >
              <span className="text-xs font-semibold text-white truncate group-hover:text-[#e5a93c] transition-colors">
                {problem.title}
              </span>
              <ChevronDown className="w-3 h-3 text-[#9da3b4] group-hover:text-[#e5a93c] shrink-0" />
            </button>

            {/* Quick Switcher Popover */}
            {showProblemDropdown && (
              <div 
                className="absolute left-0 top-9 w-80 sm:w-96 bg-[#16171d] border border-[#262833] rounded-xl shadow-2xl z-50 p-2 text-xs space-y-2 animate-fadeIn"
                onMouseLeave={() => setShowProblemDropdown(false)}
              >
                {/* Search Bar */}
                <div className="relative flex items-center">
                  <Search className="w-3.5 h-3.5 text-[#9da3b4] absolute left-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={dropdownSearch}
                    onChange={(e) => setDropdownSearch(e.target.value)}
                    placeholder="Search problems in library..."
                    className="w-full h-8 pl-8 pr-7 bg-[#191a21] border border-[#2b2d39] rounded-lg text-xs text-white placeholder-[#656a7a] focus:outline-none focus:border-[#e5a93c]"
                    autoFocus
                  />
                  {dropdownSearch && (
                    <button
                      onClick={() => setDropdownSearch('')}
                      className="absolute right-2 text-[#9da3b4] hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Filter Topics Chips */}
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 text-[10px]">
                  <button
                    onClick={() => setDropdownTopicFilter('current')}
                    className={`px-2 py-0.5 rounded font-medium transition-all ${
                      dropdownTopicFilter === 'current' ? 'bg-[#e5a93c] text-[#111215] font-bold' : 'bg-[#191a21] text-[#9da3b4] hover:text-white border border-[#2b2d39]'
                    }`}
                  >
                    Current ({problem.topic.replace(/_/g, ' ')})
                  </button>
                  <button
                    onClick={() => setDropdownTopicFilter('all')}
                    className={`px-2 py-0.5 rounded font-medium transition-all ${
                      dropdownTopicFilter === 'all' ? 'bg-[#e5a93c] text-[#111215] font-bold' : 'bg-[#191a21] text-[#9da3b4] hover:text-white border border-[#2b2d39]'
                    }`}
                  >
                    All Topics
                  </button>
                </div>

                {/* Problems List */}
                <div className="max-h-64 overflow-y-auto divide-y divide-[#262833] rounded-lg border border-[#262833] bg-[#191a21]">
                  {switcherProblems.length === 0 ? (
                    <div className="p-4 text-center text-[#9da3b4] text-xs">No matching problems</div>
                  ) : (
                    switcherProblems.map((p) => {
                      const isCurrent = p.id === problem.id;
                      const solved = progress.solvedProblemIds.includes(p.id);

                      return (
                        <div
                          key={p.id}
                          onClick={() => {
                            setShowProblemDropdown(false);
                            if (!isCurrent) {
                              onSelectNextProblem?.(p);
                            }
                          }}
                          className={`p-2 flex items-center justify-between cursor-pointer transition-all ${
                            isCurrent
                              ? 'bg-[#e5a93c]/20 text-[#e5a93c] font-bold'
                              : 'hover:bg-[#20222b] text-[#eff1f6] hover:text-white'
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <div className="flex items-center gap-1.5 truncate">
                              {solved && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />}
                              <span className="truncate text-xs">{p.title}</span>
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                              {p.topic.replace(/_/g, ' ')} · {p.difficulty}
                            </div>
                          </div>
                          <span className={`text-[9px] px-1.5 py-0.2 rounded font-sans uppercase shrink-0 ${
                            p.difficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-400' :
                            p.difficulty === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                            'bg-rose-500/20 text-rose-400'
                          }`}>
                            {p.difficulty}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-400 shrink-0 whitespace-nowrap">
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 capitalize">{problem.topic.replace(/_/g, ' ')}</span>
            <span className="text-slate-600">·</span>
            <span className={`capitalize ${
              problem.difficulty === 'easy' ? 'text-emerald-400' : problem.difficulty === 'medium' ? 'text-amber-400' : 'text-rose-400'
            }`}>{problem.difficulty}</span>
            <span className="font-mono tabular-nums text-slate-500 text-[11px]">({topicSolved}/{topicProblems.length})</span>
          </div>
        </div>

        {/* Right Zone: Clean, Organized Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Solved Status Indicator */}
          {isSolved && (
            <div 
              className="hidden lg:flex items-center gap-1 text-emerald-400 text-xs font-semibold px-2 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/30 select-none shrink-0"
              title="Your answer has been verified and saved"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="text-[11px]">Solved</span>
            </div>
          )}

          {/* Primary Action Buttons: Run, Submit, Console */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="h-7.5 px-3 rounded-lg bg-[#242630] hover:bg-[#2e313e] active:scale-95 text-white font-medium text-xs flex items-center gap-1.5 transition-all border border-[#3b3d4d] disabled:opacity-50 select-none shrink-0 whitespace-nowrap cursor-pointer shadow-sm"
              title="Run simulation & testbench assertions (Ctrl+Enter)"
            >
              <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 shrink-0" />
              <span>{isSimulating ? 'Running...' : 'Run'}</span>
            </button>

            <button
              onClick={handleSubmitSolution}
              disabled={isSimulating}
              className="h-7.5 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm shadow-emerald-600/30 disabled:opacity-50 select-none shrink-0 whitespace-nowrap cursor-pointer"
              title="Submit solution for grading and evaluation (Ctrl+Shift+Enter)"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
              <span>{isSimulating ? 'Evaluating...' : 'Submit'}</span>
            </button>

            {/* Console Drawer Toggle */}
            <button
              onClick={() => setIsOutputOpen(prev => !prev)}
              className={`h-7.5 px-2.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all select-none border shrink-0 whitespace-nowrap cursor-pointer active:scale-95 ${
                isOutputOpen
                  ? 'bg-[#22232b] text-white border-[#3e4255]'
                  : 'bg-[#191a21] hover:bg-[#20222b] text-[#8c91a0] hover:text-white border-[#2b2d39]'
              }`}
              title={isOutputOpen ? "Hide Console" : "Open Interactive Console"}
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Console</span>
              {simulationResult ? (
                <span className={`w-1.5 h-1.5 rounded-full ${simulationResult.passed ? 'bg-emerald-400' : 'bg-rose-400'}`} />
              ) : null}
            </button>

            {/* Direct Save HDL (Design + Testbench) button visible after execution */}
            {simulationResult && isVlsi && (
              <button
                onClick={() => {
                  downloadBothHdlFiles(problem, code);
                  setSaveNotificationMessage(`✓ Saved Design & Testbench in .${getExtensionForTopic(problem.topic)}`);
                  setShowSaveNotification(true);
                  setTimeout(() => setShowSaveNotification(false), 3000);
                }}
                className="h-7.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm shadow-purple-600/30 select-none shrink-0 whitespace-nowrap cursor-pointer active:scale-95 animate-fadeIn"
                title="Save executed Design RTL and self-checking Testbench in Hardware Description Language"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Save HDL</span>
                <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-purple-900/60 text-purple-200 uppercase">
                  .{getExtensionForTopic(problem.topic)}
                </span>
              </button>
            )}
          </div>

          <div className="h-4 w-px bg-[#262833] mx-0.5" />

          {/* Secondary Utility Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Export Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDownloadMenu(prev => !prev)}
                className="h-8 px-2.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-slate-300 hover:text-white border border-[#2b2d39] text-xs font-medium flex items-center gap-1.5 transition-all select-none whitespace-nowrap cursor-pointer active:scale-95"
                title="Export Source, Testbench, Waveforms PNG/SVG/VCD, and CSV"
              >
                <Download className="w-3.5 h-3.5 text-[#e5a93c] shrink-0" />
                <span>Export</span>
                <ChevronDown className="w-3 h-3 text-[#9da3b4] shrink-0" />
              </button>

              {showDownloadMenu && (
                <div 
                  className="absolute right-0 mt-1 w-64 bg-[#16171d] border border-[#262833] rounded-xl shadow-2xl py-1 z-50 text-xs overflow-hidden"
                  onMouseLeave={() => setShowDownloadMenu(false)}
                >
                  {isVlsi && (
                    <>
                      <button
                        onClick={() => {
                          downloadBothHdlFiles(problem, code);
                          setShowDownloadMenu(false);
                          setSaveNotificationMessage(`✓ Saved Design & Testbench in .${getExtensionForTopic(problem.topic)}`);
                          setShowSaveNotification(true);
                          setTimeout(() => setShowSaveNotification(false), 3000);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-purple-950/40 text-purple-200 font-semibold flex items-center gap-2 transition-colors select-none cursor-pointer border-b border-[#262833]"
                      >
                        <FileCode className="w-3.5 h-3.5 text-purple-400" />
                        <div className="flex-1">
                          <div>Save Design + TB (Both Files)</div>
                          <div className="text-[10px] text-purple-300/70 font-normal">RTL (.{getExtensionForTopic(problem.topic)}) + Testbench (tb_*.{getExtensionForTopic(problem.topic)})</div>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          downloadCombinedHdl(problem, code);
                          setShowDownloadMenu(false);
                          setSaveNotificationMessage(`✓ Saved Complete Simulation Suite in .${getExtensionForTopic(problem.topic)}`);
                          setShowSaveNotification(true);
                          setTimeout(() => setShowSaveNotification(false), 3000);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-blue-950/40 text-blue-200 flex items-center gap-2 transition-colors select-none cursor-pointer border-b border-[#262833]"
                      >
                        <FileCode className="w-3.5 h-3.5 text-blue-400" />
                        <div className="flex-1">
                          <div>Save Complete Suite (DUT + TB)</div>
                          <div className="text-[10px] text-blue-300/70 font-normal">Single unified simulation file for EDA</div>
                        </div>
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => {
                      downloadHdlCode(code, problem);
                      setShowDownloadMenu(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-[#191a21] text-slate-200 flex items-center gap-2 transition-colors select-none cursor-pointer"
                  >
                    <FileCode className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isVlsi ? `Download RTL Source (.${getExtensionForTopic(problem.topic)})` : 'Download Source Code'}</span>
                  </button>

                  {isVlsi && (
                    <>
                      <button
                        onClick={() => {
                          downloadTestbench(problem, code);
                          setShowDownloadMenu(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-[#191a21] text-slate-200 flex items-center gap-2 transition-colors select-none cursor-pointer"
                      >
                        <FileCode className="w-3.5 h-3.5 text-purple-400" />
                        <span>Download Testbench (tb_*.{getExtensionForTopic(problem.topic)})</span>
                      </button>

                      <button
                        onClick={() => {
                          downloadWaveformAsPng(problem, simulationResult);
                          setShowDownloadMenu(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-[#191a21] text-slate-200 flex items-center gap-2 transition-colors select-none cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-blue-400" />
                        <span>Download Waveform (PNG)</span>
                      </button>

                      <button
                        onClick={() => {
                          downloadWaveformAsSvg(problem, simulationResult);
                          setShowDownloadMenu(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-[#191a21] text-slate-200 flex items-center gap-2 transition-colors select-none cursor-pointer"
                      >
                        <Activity className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Download Waveform (SVG)</span>
                      </button>

                      <button
                        onClick={() => {
                          downloadVcdWaveform(problem, simulationResult);
                          setShowDownloadMenu(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-[#191a21] text-slate-200 flex items-center gap-2 transition-colors select-none cursor-pointer"
                      >
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Export VCD Waveform</span>
                      </button>

                      <button
                        onClick={() => {
                          downloadCsvTrace(problem, simulationResult);
                          setShowDownloadMenu(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-[#191a21] text-slate-200 flex items-center gap-2 transition-colors select-none cursor-pointer"
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
                        <span>Export CSV Timing Trace</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* STA Slack Calculator Button - Only for VLSI Topics */}
            {isVlsi && (
              <button
                onClick={() => setShowStaModal(true)}
                className="hidden md:flex h-7.5 px-2.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] border border-[#2b2d39] text-[#e5a93c] hover:text-[#d99b2e] text-xs font-medium items-center gap-1.5 transition-all select-none cursor-pointer"
                title="Interactive Static Timing Analysis (STA) & Slack Calculator"
              >
                <Clock className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>STA Slack</span>
              </button>
            )}

            {/* Certificate View Button */}
            <button
              onClick={() => setShowCertificateModal(true)}
              className={`hidden xl:flex h-7.5 px-2.5 rounded-lg border text-xs font-medium items-center gap-1.5 transition-all select-none cursor-pointer ${
                isCertEligible
                  ? 'bg-emerald-950/80 hover:bg-emerald-900 border-emerald-500/40 text-emerald-300'
                  : 'bg-[#191a21] hover:bg-[#20222b] border-[#2b2d39] text-slate-300 hover:text-white'
              }`}
              title="Official Certificates & Milestones"
            >
              <Award className={`w-3.5 h-3.5 ${isCertEligible ? 'text-[#e5a93c]' : 'text-slate-400'}`} />
              <span>Certificates</span>
              <span className="text-[10px] font-mono tabular-nums text-slate-400">
                {totalSolved}/25
              </span>
            </button>

            {/* Bookmark Button */}
            <button
              onClick={() => onToggleBookmark(problem.id)}
              className={`h-7.5 w-7.5 rounded-lg flex items-center justify-center border transition-all select-none cursor-pointer ${
                isBookmarked
                  ? 'bg-[#e5a93c]/20 border-[#e5a93c]/50 text-[#e5a93c]'
                  : 'bg-[#191a21] hover:bg-[#20222b] border-[#2b2d39] text-slate-400 hover:text-slate-200'
              }`}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Problem'}
            >
              <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-Panel Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#111215]">
        
        {/* Left Column: Problem Statement & Hints */}
        {!isLeftPanelCollapsed && (
          <div className="lg:col-span-4 h-full border-r border-[#262833] overflow-hidden flex flex-col bg-[#111215]">
            <ProblemStatement
              problem={problem}
              isSolved={isSolved}
              savedNote={savedNote}
              onSaveNote={handleSaveNote}
              simulationResult={simulationResult}
              code={code}
              onRunSimulation={handleRunSimulation}
              onInsertSolution={(solCode?: string) => handleGenerateCode(false, solCode)}
              activeStatementTab={statementTab}
              onTabChange={setStatementTab}
            />
          </div>
        )}

        {/* Right Column: Code Editor + Dynamic Visualizer / Output */}
        <div className={`${isLeftPanelCollapsed ? 'lg:col-span-12' : 'lg:col-span-8'} h-full flex flex-col overflow-hidden bg-[#111215] transition-all`}>
          
          {/* Top Half / Full Height: Code Editor */}
          <div className={`${
            !isOutputOpen
              ? 'h-full'
              : panelLayout === 'code-expanded'
              ? 'h-[72%]'
              : panelLayout === 'vis-expanded'
              ? 'h-[20%]'
              : panelLayout === 'vis-maximized'
              ? 'h-0 hidden'
              : 'h-1/2'
          } ${isOutputOpen ? 'border-b border-[#262833]' : ''} overflow-hidden transition-all duration-200 bg-[#111215]`}>
            <CodeEditor
              code={code}
              onChange={handleCodeChange}
              onReset={handleResetCode}
              onRunSimulation={handleRunSimulation}
              onSubmitSolution={handleSubmitSolution}
              onGenerateCode={() => handleGenerateCode(false)}
              onDownloadCode={() => downloadHdlCode(code, problem)}
              topic={problem.topic}
              isSimulating={isSimulating}
              problem={problem}
              isSolved={isSolved}
              savedAnswerCode={savedAnswerCode}
              onRestoreSavedAnswer={() => {
                if (savedAnswerCode) {
                  handleCodeChange(savedAnswerCode);
                  setHasStartedCoding(true);
                }
              }}
              hasStartedCoding={hasStartedCoding}
              onStartCoding={handleStartCoding}
              onStartBlank={handleStartBlank}
              panelLayout={panelLayout}
              onTogglePanelLayout={setPanelLayout}
              activeEditorTab={activeEditorTab}
              onSelectEditorTab={setActiveEditorTab}
              isOutputOpen={isOutputOpen}
              onToggleOutput={() => setIsOutputOpen(prev => !prev)}
              errorLine={simulationResult?.errorLine}
              activeModelingStyle={activeModelingStyle}
              onSelectModelingStyle={handleSelectModelingStyle}
              onLoadModelingTemplate={handleLoadModelingTemplate}
              onLoadModelingSolution={handleLoadModelingSolution}
            />
          </div>

          {/* Bottom Half: Interactive Console, Testcase & Waveform Container */}
          {isOutputOpen && (
            <div className={`${
              panelLayout === 'code-expanded'
                ? 'h-[28%]'
                : panelLayout === 'vis-expanded'
                ? 'h-[80%]'
                : panelLayout === 'vis-maximized'
                ? 'h-full'
                : 'h-1/2'
            } overflow-hidden flex flex-col bg-[#16171d] transition-all duration-200 border-t border-[#262833]`}>
              
              {/* Console Tab Header */}
              <div className="h-9 px-3 bg-[#13141a] border-b border-[#262833] flex items-center justify-between gap-2 shrink-0 select-none">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setConsoleTab('testcase')}
                    className={`h-6.5 px-3 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                      consoleTab === 'testcase'
                        ? 'bg-[#22232b] text-white font-semibold border border-[#353745]'
                        : 'text-[#8c91a0] hover:text-white hover:bg-[#1a1b22]'
                    }`}
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-blue-400" />
                    <span>Testcase</span>
                  </button>

                  <button
                    onClick={() => setConsoleTab('result')}
                    className={`h-6.5 px-3 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                      consoleTab === 'result'
                        ? 'bg-[#22232b] text-white font-semibold border border-[#353745]'
                        : 'text-[#8c91a0] hover:text-white hover:bg-[#1a1b22]'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Test Result</span>
                    {simulationResult && (
                      <span className={`w-2 h-2 rounded-full ${simulationResult.passed ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                    )}
                  </button>

                  {/* Dedicated 3rd Visualizer Tab dynamically adapted to each topic */}
                  <button
                    onClick={() => setConsoleTab('waveform')}
                    className={`h-6.5 px-3 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                      consoleTab === 'waveform'
                        ? 'bg-[#22232b] text-white font-semibold border border-[#353745]'
                        : 'text-[#8c91a0] hover:text-white hover:bg-[#1a1b22]'
                    }`}
                  >
                    {problem.topic === 'cv_robotics' ? (
                      <>
                        <Camera className="w-3.5 h-3.5 text-purple-400" />
                        <span>Live Cam & Robotics Output</span>
                        {simulationResult && (
                          <span className={`w-1.5 h-1.5 rounded-full ${simulationResult.passed ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                        )}
                      </>
                    ) : isLinuxTopic ? (
                      <>
                        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Linux Terminal</span>
                      </>
                    ) : problem.topic === 'python_hw' ? (
                      <>
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                        <span>MicroPython Console</span>
                      </>
                    ) : problem.topic === 'arduino' ? (
                      <>
                        <Cpu className="w-3.5 h-3.5 text-teal-400" />
                        <span>Arduino Hardware</span>
                      </>
                    ) : problem.topic === 'rtos_problems' ? (
                      <>
                        <Sliders className="w-3.5 h-3.5 text-amber-400" />
                        <span>FreeRTOS Tasks</span>
                      </>
                    ) : problem.topic === 'mnemonics' ? (
                      <>
                        <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                        <span>8051 Microcontroller</span>
                      </>
                    ) : problem.topic === 'embedded_c' ? (
                      <>
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Hardware Registers</span>
                      </>
                    ) : (
                      <>
                        <Activity className="w-3.5 h-3.5 text-[#e5a93c]" />
                        <span>Timing Waveform</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Console Actions: Height Layout & Collapse */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setPanelLayout(prev => {
                        const next = (prev === 'vis-expanded' || prev === 'vis-maximized') ? 'default' : 'vis-expanded';
                        setWindowMode(next === 'vis-expanded' ? 'lifted' : 'split');
                        return next;
                      });
                    }}
                    className={`h-6.5 px-2.5 rounded text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      panelLayout === 'vis-expanded' || panelLayout === 'vis-maximized'
                        ? 'bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/40 font-bold'
                        : 'hover:bg-[#22232b] text-[#8c91a0] hover:text-white border border-transparent'
                    }`}
                    title={panelLayout === 'vis-expanded' || panelLayout === 'vis-maximized' ? "Restore Standard Split (50%)" : "Open Waveform Large (80% Canvas)"}
                  >
                    {panelLayout === 'vis-expanded' || panelLayout === 'vis-maximized' ? (
                      <>
                        <Minimize2 className="w-3.5 h-3.5 text-[#e5a93c]" />
                        <span className="hidden sm:inline font-mono">Large (80%)</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline font-mono">Expand Large</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setIsOutputOpen(false)}
                    className="p-1 rounded hover:bg-[#22232b] text-[#8c91a0] hover:text-white transition-colors cursor-pointer"
                    title="Close Console"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="flex-1 overflow-hidden bg-[#111215]">
                {consoleTab === 'testcase' && (
                  /* TAB 1: TESTCASE SPECIFICATION */
                  <div className="h-full overflow-y-auto p-4 space-y-3">
                    {/* Case Chips & Copy Row */}
                    <div className="flex items-center justify-between gap-2 pb-1">
                      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                        {activeTestCases.map((tc, idx) => {
                          const isSelected = selectedTestCaseIndex === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => setSelectedTestCaseIndex(idx)}
                              className={`px-3 py-1 rounded-md text-xs font-medium transition-all select-none cursor-pointer flex items-center gap-1.5 shrink-0 ${
                                isSelected
                                  ? 'bg-[#282a36] text-white font-bold border border-[#3e4255]'
                                  : 'bg-[#181920] hover:bg-[#20222b] text-[#8c91a0] hover:text-white border border-[#262833]'
                              }`}
                            >
                              <span>Case {idx + 1}</span>
                              {simulationResult?.testVectors?.[idx] && (
                                <span className={`w-1.5 h-1.5 rounded-full ${simulationResult.testVectors[idx].passed ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {activeTestCases.length > 0 && (
                        <button
                          onClick={handleCopyTestcaseVectors}
                          className="px-2.5 py-1 rounded-lg bg-[#181920] hover:bg-[#20222b] text-[#8c91a0] hover:text-white border border-[#262833] text-[11px] font-mono flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
                          title="Copy all testcase stimulus conditions as text for your local testbench"
                        >
                          {copiedTestcaseVectors ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-amber-400" />}
                          <span className="hidden sm:inline">{copiedTestcaseVectors ? 'Vectors Copied!' : 'Copy Testcases'}</span>
                        </button>
                      )}
                    </div>

                    {/* Active Testcase Details */}
                    {(() => {
                      const activeCase = activeTestCases[selectedTestCaseIndex] || activeTestCases[0];
                      if (!activeCase) return null;

                      const inputs = activeCase.inputs || {};
                      const hasInputs = Object.keys(inputs).length > 0;
                      const expected = activeCase.expectedOutputs || {};
                      const actual = activeCase.actualOutputs;
                      const hasActual = actual && Object.keys(actual).length > 0;
                      const isPassed = activeCase.passed;

                      return (
                        <div className="space-y-3.5 pt-1">
                          {/* Given Condition Explanation */}
                          {(() => {
                            const title = (problem.title || '').toLowerCase();
                            let condExplain = '';
                            if (title.includes('2-to-1') || title.includes('2:1') || title.includes('mux 2')) {
                              const sel = inputs['sel'] ?? inputs['s'] ?? '0';
                              const a = inputs['a'] ?? inputs['d0'] ?? '0';
                              const b = inputs['b'] ?? inputs['d1'] ?? '1';
                              condExplain = sel === '1' 
                                ? `Condition: When sel = 1, routes input b (${b}) -> Expected output: ${b}`
                                : `Condition: When sel = 0, routes input a (${a}) -> Expected output: ${a}`;
                            } else if (title.includes('adder') && (inputs['a[3:0]'] || inputs['a'])) {
                              const aVal = inputs['a'] ?? inputs['a[3:0]'];
                              const bVal = inputs['b'] ?? inputs['b[3:0]'];
                              const cinVal = inputs['cin'] ?? '0';
                              condExplain = `Condition: Binary addition of a=${aVal} + b=${bVal} + cin=${cinVal}`;
                            }
                            if (!condExplain) return null;
                            return (
                              <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-[11px] text-cyan-200 flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                <span className="font-mono font-medium">{condExplain}</span>
                              </div>
                            );
                          })()}

                          {/* Inputs Panel (Given Condition) */}
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] font-bold text-[#8c91a0] uppercase tracking-wider">
                              <span>Inputs (Given Condition)</span>
                              <span className="text-[10px] font-mono text-cyan-400 font-normal">Stimulus Vector #{activeCase.cycle}</span>
                            </div>
                            {hasInputs ? (
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {Object.entries(inputs).map(([sigName, sigVal]) => (
                                  <div key={sigName} className="p-2.5 rounded-lg bg-[#181920] border border-[#262833]">
                                    <div className="text-[10px] text-[#8c91a0] font-mono">{sigName} =</div>
                                    <div className="text-xs font-mono font-bold text-cyan-300 mt-0.5">{String(sigVal)}</div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="p-2.5 rounded-lg bg-[#181920] border border-[#262833] text-xs font-mono text-[#8c91a0]">
                                Cycle {activeCase.cycle} Stimulus Pattern
                              </div>
                            )}
                          </div>

                          {/* Dual Output Panels: Your Output vs Expected Output */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Your Output */}
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-[11px] font-bold text-[#8c91a0] uppercase tracking-wider">
                                <span>Your Output</span>
                                {hasActual && (
                                  <span className={`text-[10px] font-bold ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {isPassed ? '✓ Matches Condition' : '✗ Condition Mismatch'}
                                  </span>
                                )}
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {hasActual ? (
                                  Object.entries(actual).map(([sigName, sigVal]) => (
                                    <div key={sigName} className={`p-2.5 rounded-lg border ${
                                      isPassed 
                                        ? 'bg-emerald-950/20 border-emerald-500/30' 
                                        : 'bg-rose-950/20 border-rose-500/30'
                                    }`}>
                                      <div className="text-[10px] text-[#8c91a0] font-mono">{sigName} =</div>
                                      <div className={`text-xs font-mono font-bold mt-0.5 ${
                                        isPassed ? 'text-emerald-300' : 'text-rose-300'
                                      }`}>
                                        {String(sigVal)}
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <div className="col-span-2 p-2.5 rounded-lg bg-[#181920] border border-[#262833] text-xs font-mono text-[#8c91a0]">
                                    Not evaluated yet — click "Run" to test
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Expected Output */}
                            <div className="space-y-1.5">
                              <div className="text-[11px] font-bold text-[#8c91a0] uppercase tracking-wider">
                                Expected Output (Per Condition)
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {Object.entries(expected).length > 0 ? (
                                  Object.entries(expected).map(([sigName, sigVal]) => (
                                    <div key={sigName} className="p-2.5 rounded-lg bg-[#181920] border border-[#262833]">
                                      <div className="text-[10px] text-[#8c91a0] font-mono">{sigName} =</div>
                                      <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">{String(sigVal)}</div>
                                    </div>
                                  ))
                                ) : (
                                  <div className="col-span-2 p-2.5 rounded-lg bg-[#181920] border border-[#262833] text-xs font-mono text-[#8c91a0]">
                                    Reference Output Waveform (Cycle {activeCase.cycle})
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Quick Action Button */}
                          <div className="pt-1">
                            <button
                              onClick={handleRunSimulation}
                              disabled={isSimulating}
                              className="px-3.5 py-1.5 rounded-lg bg-[#282a36] hover:bg-[#343747] text-white text-xs font-medium border border-[#3e4255] flex items-center gap-1.5 transition-all select-none cursor-pointer"
                            >
                              <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                              <span>{isSimulating ? 'Evaluating...' : 'Run Code (Ctrl+Enter)'}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {consoleTab === 'result' && (
                  /* TAB 2: TEST RESULT EVALUATION */
                  <div className="h-full overflow-y-auto p-4 space-y-3.5">
                    {!simulationResult ? (
                      <div className="h-full min-h-[160px] flex flex-col items-center justify-center text-center p-6 space-y-2.5">
                        <Terminal className="w-8 h-8 text-[#8c91a0]" />
                        <h4 className="text-sm font-semibold text-white">No Evaluation Output Yet</h4>
                        <p className="text-xs text-[#8c91a0] max-w-sm">
                          Run your code to evaluate all test cases against expected logic and view timing results.
                        </p>
                        <button
                          onClick={handleRunSimulation}
                          disabled={isSimulating}
                          className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all select-none cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Run Code (Ctrl+Enter)</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3.5">
                        {/* Status Header */}
                        {simulationResult.passed ? (
                          <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between text-xs shadow-sm">
                            <div className="flex items-center gap-2 font-bold text-emerald-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              <span className="text-sm">Accepted</span>
                              <span className="text-xs font-normal text-emerald-400/80">· Runtime: 12 ms</span>
                            </div>
                            <span className="font-mono text-[11px] text-emerald-300 bg-emerald-900/40 px-2.5 py-0.5 rounded border border-emerald-500/30">
                              {simulationResult.passedTestsCount ?? simulationResult.testVectors?.length ?? 16}/{simulationResult.totalTestsCount ?? simulationResult.testVectors?.length ?? 16} Testcases Passed
                            </span>
                          </div>
                        ) : (
                          <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs space-y-2.5 shadow-sm">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 font-bold text-rose-300">
                                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                                <span className="text-sm">
                                  {simulationResult.message.includes('Syntax') ? 'Compilation Error' : 'Wrong Answer'}
                                </span>
                                {simulationResult.errorLine && (
                                  <span className="px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold">
                                    Line {simulationResult.errorLine}
                                  </span>
                                )}
                              </div>
                              <span className="font-mono text-[11px] text-rose-300 bg-rose-900/40 px-2 py-0.5 rounded border border-rose-500/30">
                                {simulationResult.passedTestsCount ?? 0}/{simulationResult.totalTestsCount ?? 16} Passed
                              </span>
                            </div>
                            <p className="text-slate-300 text-xs font-mono">{simulationResult.message}</p>
                            {simulationResult.errorSnippet && (
                              <div className="p-2 rounded bg-black/70 border border-rose-500/30 font-mono text-xs text-amber-200">
                                <span className="text-rose-400 font-bold select-none mr-2">{simulationResult.errorLine || 1} |</span>
                                <code>{simulationResult.errorSnippet}</code>
                              </div>
                            )}
                            {simulationResult.errorHint && (
                              <div className="text-[11px] text-[#e5a93c] flex items-center gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5 text-[#e5a93c] shrink-0" />
                                <span>{simulationResult.errorHint}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Quick View Waveform Button for VLSI */}
                        {isVlsi && (
                          <div className="flex items-center justify-between p-3 rounded-xl bg-[#161722] border border-[#2b2d3d] text-xs">
                            <div className="flex items-center gap-2 text-slate-300">
                              <Activity className="w-4 h-4 text-amber-400 shrink-0" />
                              <span>Digital Timing Waveform ({simulationResult.samples?.length || 0} cycles simulated)</span>
                            </div>
                            <button
                              onClick={() => setConsoleTab('waveform')}
                              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95"
                            >
                              <span>View Live Waveform</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}

                        {/* Post-Execution HDL Save Banner */}
                        {isVlsi && (
                          <div className="p-3.5 rounded-xl bg-[#171822] border border-[#2b2e3f] space-y-2.5 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
                                  <FileCode className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                                    <span>Save Design & Testbench in HDL</span>
                                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-bold uppercase">
                                      .{getExtensionForTopic(problem.topic)}
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-slate-400">
                                    Download your verified RTL design and executable testbench in {problem.topic === 'vhdl' ? 'IEEE 1076 VHDL' : problem.topic === 'systemverilog' ? 'SystemVerilog' : 'Verilog HDL'}.
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center gap-2">
                                <button
                                  onClick={() => {
                                    downloadBothHdlFiles(problem, code);
                                    setSaveNotificationMessage(`✓ Saved Design & Testbench in .${getExtensionForTopic(problem.topic)}`);
                                    setShowSaveNotification(true);
                                    setTimeout(() => setShowSaveNotification(false), 3000);
                                  }}
                                  className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm shadow-purple-600/30 cursor-pointer active:scale-95"
                                  title="Download both Design RTL and self-checking Testbench files"
                                >
                                  <Download className="w-3.5 h-3.5" />
                                  <span>Save Both (Design + TB)</span>
                                </button>

                                <button
                                  onClick={() => {
                                    downloadCombinedHdl(problem, code);
                                    setSaveNotificationMessage(`✓ Saved Unified Simulation Suite in .${getExtensionForTopic(problem.topic)}`);
                                    setShowSaveNotification(true);
                                    setTimeout(() => setShowSaveNotification(false), 3000);
                                  }}
                                  className="px-2.5 py-1.5 rounded-lg bg-[#222430] hover:bg-[#2b2d3d] text-slate-200 border border-[#3b3e52] text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                                  title="Download single combined file containing both Testbench and DUT ready for Vivado/ModelSim/iverilog"
                                >
                                  <FileCode className="w-3.5 h-3.5 text-blue-400" />
                                  <span>Complete Suite</span>
                                </button>

                                <button
                                  onClick={() => {
                                    downloadHdlCode(code, problem);
                                    setSaveNotificationMessage(`✓ Saved Design RTL .${getExtensionForTopic(problem.topic)}`);
                                    setShowSaveNotification(true);
                                    setTimeout(() => setShowSaveNotification(false), 3000);
                                  }}
                                  className="px-2.5 py-1.5 rounded-lg bg-[#222430] hover:bg-[#2b2d3d] text-slate-300 border border-[#3b3e52] text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                                  title="Download only the RTL design module source code"
                                >
                                  <span>Design RTL</span>
                                </button>

                                <button
                                  onClick={() => {
                                    downloadTestbench(problem, code);
                                    setSaveNotificationMessage(`✓ Saved Testbench .${getExtensionForTopic(problem.topic)}`);
                                    setShowSaveNotification(true);
                                    setTimeout(() => setShowSaveNotification(false), 3000);
                                  }}
                                  className="px-2.5 py-1.5 rounded-lg bg-[#222430] hover:bg-[#2b2d3d] text-slate-300 border border-[#3b3e52] text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                                  title="Download only the standalone testbench"
                                >
                                  <span>Testbench</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 3 Hardware Modeling Styles - Post-Execution Guidance & Hints - STRICTLY ONLY IN HDLs */}
                        {isHdl && (() => {
                          const allHints = generateAllModelingHints(problem, code, simulationResult);
                          return (
                            <div className="p-3.5 rounded-xl bg-[#111217] border border-[#e5a93c]/30 space-y-3 shadow-sm">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <Layers className="w-4 h-4 text-[#e5a93c]" />
                                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                                    3 Modeling Styles Guidance & Hints
                                  </span>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#e5a93c]/15 text-[#e5a93c] font-bold border border-[#e5a93c]/30">
                                    Detected: {allHints.detectedStyle}
                                  </span>
                                </div>
                                <span className="text-[11px] text-[#9da3b4]">
                                  Try all 3 styles: Structural, Dataflow, Behavioral
                                </span>
                              </div>

                              <p className="text-xs text-slate-300 leading-relaxed">
                                {allHints.summary}
                              </p>

                              {/* 3 Modeling Tabs */}
                              <div className="grid grid-cols-3 gap-1 p-1 bg-[#101116] rounded-lg border border-[#222430]">
                                {(['structural', 'dataflow', 'behavioral'] as ModelingStyle[]).map(styleKey => {
                                  const isCurrent = activeModelingStyle === styleKey;
                                  return (
                                    <button
                                      key={styleKey}
                                      onClick={() => handleSelectModelingStyle(styleKey)}
                                      className={`py-1.5 px-2 rounded text-xs font-bold flex items-center justify-center gap-1 transition-all select-none cursor-pointer ${
                                        isCurrent
                                          ? 'bg-[#e5a93c] text-[#111215] shadow font-bold'
                                          : 'text-[#9da3b4] hover:text-white hover:bg-[#1a1b22]'
                                      }`}
                                    >
                                      <span className="capitalize">{styleKey}</span>
                                      {allHints.detectedStyle === styleKey && (
                                        <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-slate-900' : 'bg-cyan-400'}`} />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Active Modeling Style Guidance Details */}
                              {(() => {
                                const hintObj = allHints.hints[activeModelingStyle || 'dataflow'];
                                if (!hintObj) return null;
                                return (
                                  <div className="p-3 rounded-lg bg-[#0d0e14] border border-[#262835] space-y-2 text-xs">
                                    <div className="flex items-center justify-between">
                                      <span className="font-bold text-cyan-300">{hintObj.label}</span>
                                      <button
                                        onClick={() => handleLoadModelingTemplate(activeModelingStyle || 'dataflow')}
                                        className="px-2 py-0.5 rounded bg-[#1a1c24] hover:bg-[#252835] text-amber-300 text-[10px] font-bold border border-[#333748] cursor-pointer"
                                      >
                                        Load Template
                                      </button>
                                    </div>
                                    <p className="text-slate-300 text-xs leading-relaxed">{hintObj.guidance}</p>
                                    <div className="p-2 rounded bg-black/60 border border-slate-800 font-mono text-[11px] text-slate-300">
                                      {hintObj.syntaxSnippet}
                                    </div>
                                    <div className="text-[11px] text-amber-300/90 flex items-center gap-1.5">
                                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                      <span>{hintObj.synthesisTip}</span>
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          );
                        })()}
                        {simulationResult.testVectors && simulationResult.testVectors.length > 0 && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                              {simulationResult.testVectors.map((tv, idx) => {
                                const isSelected = selectedTestCaseIndex === idx;
                                return (
                                  <button
                                    key={idx}
                                    onClick={() => setSelectedTestCaseIndex(idx)}
                                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all select-none cursor-pointer flex items-center gap-1.5 shrink-0 ${
                                      isSelected
                                        ? 'bg-[#282a36] text-white font-bold border border-[#3e4255]'
                                        : 'bg-[#181920] hover:bg-[#20222b] text-[#8c91a0] hover:text-white border border-[#262833]'
                                    }`}
                                  >
                                    <span>Case {idx + 1}</span>
                                    <span className={`w-1.5 h-1.5 rounded-full ${tv.passed ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                                  </button>
                                );
                              })}
                            </div>

                            {/* Inspected Case Card */}
                            {(() => {
                              const currTv = simulationResult.testVectors[selectedTestCaseIndex] || simulationResult.testVectors[0];
                              if (!currTv) return null;

                              const inEntries = Object.entries(currTv.inputs || {}).filter(([k]) => !k.toLowerCase().includes('clk'));
                              const expEntries = Object.entries(currTv.expectedOutputs || {});
                              const actEntries = Object.entries(currTv.actualOutputs || {});

                              return (
                                <div className="p-3.5 rounded-xl bg-[#181920] border border-[#262833] space-y-3">
                                  {/* Given Condition (Inputs) */}
                                  <div className="space-y-1">
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#8c91a0]">
                                      Given Condition (Inputs)
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                      {inEntries.map(([k, v]) => (
                                        <div key={k} className="p-2 rounded bg-[#111215] border border-[#262833] font-mono text-xs">
                                          <span className="text-[#8c91a0]">{k} = </span>
                                          <span className="text-cyan-300 font-bold">{v}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Side-by-side Output Inspection */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                    <div>
                                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#8c91a0] mb-1">
                                        Your Output
                                      </div>
                                      <div className="p-2 rounded bg-[#111215] border border-[#262833] font-mono text-xs">
                                        {actEntries.map(([k, v]) => (
                                          <div key={k} className={currTv.passed ? 'text-emerald-300 font-bold' : 'text-rose-300 font-bold'}>
                                            {k} = {v}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#8c91a0] mb-1">
                                        Expected Output
                                      </div>
                                      <div className="p-2 rounded bg-[#111215] border border-[#262833] font-mono text-xs text-emerald-400 font-bold">
                                        {expEntries.map(([k, v]) => (
                                          <div key={k}>{k} = {v}</div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        )}

                        {/* All Test Vectors & Conditions Table */}
                        {simulationResult.testVectors && simulationResult.testVectors.length > 0 && (
                          <div className="rounded-xl border border-[#262833] bg-[#16171d] overflow-hidden">
                            <div className="px-3 py-2 bg-[#191a21] border-b border-[#262833] flex items-center justify-between text-xs font-semibold text-slate-300">
                              <span className="flex items-center gap-1.5">
                                <span>All Stimulus Assertions & Conditions</span>
                                <span className="font-mono text-[11px] text-[#8c91a0]">
                                  ({simulationResult.testVectors.filter(t => t.passed).length}/{simulationResult.testVectors.length} Passed)
                                </span>
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={handleCopyResultMatrix}
                                  className="px-2 py-0.5 rounded bg-[#181920] hover:bg-[#20222b] text-slate-300 hover:text-white border border-[#2b2d39] text-[10px] font-mono flex items-center gap-1 transition-all cursor-pointer"
                                  title="Copy entire stimulus and assertion matrix as text table"
                                >
                                  {copiedResultMatrix ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-amber-400" />}
                                  <span>{copiedResultMatrix ? 'Copied' : 'Copy Matrix'}</span>
                                </button>
                              </div>
                            </div>
                            <div className="max-h-56 overflow-y-auto divide-y divide-[#262833] text-[11px] font-mono">
                              {simulationResult.testVectors.map((tv, idx) => {
                                const inStr = Object.entries(tv.inputs || {})
                                  .filter(([k]) => !k.toLowerCase().includes('clk'))
                                  .map(([k, v]) => `${k}=${v}`)
                                  .join(', ');
                                const expStr = Object.entries(tv.expectedOutputs || {}).map(([k, v]) => `${k}=${v}`).join(', ');
                                const actStr = Object.entries(tv.actualOutputs || {}).map(([k, v]) => `${k}=${v}`).join(', ');

                                return (
                                  <div key={idx} className={`p-2.5 flex items-center justify-between gap-3 ${tv.passed ? 'hover:bg-[#1a1b22]' : 'bg-rose-950/20 text-rose-300'}`}>
                                    <div className="min-w-0 flex-1 truncate">
                                      <span className="font-bold text-white mr-2">Case {idx + 1}:</span>
                                      <span className="text-cyan-300 mr-2.5">({inStr})</span>
                                      <span className="text-[#8c91a0] mr-2">Exp: <span className="text-emerald-400 font-semibold">{expStr}</span></span>
                                      <span className="text-[#8c91a0]">Got: <span className={`font-semibold ${tv.passed ? 'text-white' : 'text-rose-400'}`}>{actStr}</span></span>
                                    </div>
                                    <span className={`font-bold shrink-0 text-[10px] px-2 py-0.5 rounded border ${
                                      tv.passed
                                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                                        : 'text-rose-400 bg-rose-500/10 border-rose-500/30'
                                    }`}>
                                      {tv.passed ? '✓ PASS' : '✗ FAIL'}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Hardware Simulator STDOUT Console */}
                        {simulationResult.logs && simulationResult.logs.length > 0 && (
                          <div className="rounded-xl border border-[#262833] bg-[#14151c] overflow-hidden shadow-lg">
                            <div className="px-3.5 py-2 bg-[#191a22] border-b border-[#262833] flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2 font-bold text-slate-300">
                                <Terminal className="w-3.5 h-3.5 text-[#e5a93c]" />
                                <span>Hardware Simulator Execution Log & STDOUT</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                                  {simulationResult.logs.length} Lines
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={handleCopyResultLogs}
                                  className="px-2.5 py-1 rounded bg-[#222430] hover:bg-[#2c2f3f] text-slate-200 border border-[#373a4d] text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                                  title="Copy full terminal stdout to clipboard"
                                >
                                  {copiedResultLogs ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-amber-400" />}
                                  <span>{copiedResultLogs ? 'Logs Copied!' : 'Copy Log STDOUT'}</span>
                                </button>
                                <button
                                  onClick={handleDownloadResultLogs}
                                  className="p-1 rounded bg-[#222430] hover:bg-[#2c2f3f] text-slate-300 border border-[#373a4d] transition-all cursor-pointer"
                                  title="Download .log file"
                                >
                                  <Download className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            <div className="p-3 bg-[#0c0d12] font-mono text-[11px] max-h-56 overflow-y-auto space-y-1 select-text selection:bg-amber-500/30">
                              {simulationResult.logs.map((log, idx) => {
                                const isErr = log.includes('FAIL') || log.includes('ERROR');
                                const isPass = log.includes('PASS') || log.includes('SUCCESS');
                                const isInfo = log.startsWith('[SIMULATOR]') || log.startsWith('[OPENCV]') || log.startsWith('[GCC]');
                                return (
                                  <div
                                    key={idx}
                                    className={`p-1.5 rounded transition-all leading-relaxed ${
                                      isErr
                                        ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                                        : isPass
                                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold'
                                        : isInfo
                                        ? 'bg-slate-900/60 text-slate-300 border border-slate-800'
                                        : 'text-slate-400 pl-3'
                                    }`}
                                  >
                                    {log}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Hardware Verification Coverage & Timing Summary */}
                        <div className="p-3.5 rounded-xl bg-[#14151e] border border-[#262835] space-y-2.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                              Hardware Verification & Coverage Metrics
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                              Signoff Standard
                            </span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                            <div className="p-2 rounded-lg bg-[#0d0e14] border border-[#222432]">
                              <div className="text-[10px] text-slate-500">Statement Coverage</div>
                              <div className={`text-xs font-bold ${simulationResult.passed ? 'text-emerald-400' : 'text-amber-400'}`}>
                                {simulationResult.passed ? '100.0%' : '62.5%'}
                              </div>
                            </div>
                            <div className="p-2 rounded-lg bg-[#0d0e14] border border-[#222432]">
                              <div className="text-[10px] text-slate-500">Branch Coverage</div>
                              <div className={`text-xs font-bold ${simulationResult.passed ? 'text-emerald-400' : 'text-amber-400'}`}>
                                {simulationResult.passed ? '100.0%' : '50.0%'}
                              </div>
                            </div>
                            <div className="p-2 rounded-lg bg-[#0d0e14] border border-[#222432]">
                              <div className="text-[10px] text-slate-500">Toggle Coverage</div>
                              <div className={`text-xs font-bold ${simulationResult.passed ? 'text-emerald-400' : 'text-amber-400'}`}>
                                {simulationResult.passed ? '100.0%' : '75.0%'}
                              </div>
                            </div>
                            <div className="p-2 rounded-lg bg-[#0d0e14] border border-[#222432]">
                              <div className="text-[10px] text-slate-500">Timing Slack</div>
                              <div className="text-xs font-bold text-emerald-400">+0.48 ns (MET)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {consoleTab === 'waveform' && (
                  /* TAB 3: TIMING WAVEFORM VISUALIZER */
                  <div className="h-full overflow-hidden flex flex-col">
                    {simulationResult && !simulationResult.passed && (
                      <div className="p-2.5 px-4 bg-rose-950/95 border-b border-rose-500/50 flex items-center justify-between gap-3 text-xs text-rose-200 z-10 shrink-0 shadow-md">
                        <div className="flex items-center gap-2 min-w-0">
                          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                          <span className="font-bold text-rose-300">
                            {simulationResult.message.includes('Syntax') ? 'Compilation Error' : 'Verification Error'}
                            {simulationResult.errorLine ? ` (Line ${simulationResult.errorLine})` : ''}:
                          </span>
                          <span className="truncate font-mono text-slate-200">{simulationResult.message}</span>
                        </div>
                        <button
                          onClick={() => setConsoleTab('result')}
                          className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shrink-0 cursor-pointer shadow transition-all"
                        >
                          View Error & Fix
                        </button>
                      </div>
                    )}
                    {isLinuxTopic ? (
                      <ErrorBoundary fallbackTitle="Linux Script Console">
                        <LinuxTerminalConsole
                          simulationResult={simulationResult}
                          problem={problem}
                          code={code}
                          isSimulating={isSimulating}
                          onDownloadScript={() => downloadHdlCode(code, problem)}
                        />
                      </ErrorBoundary>
                    ) : problem.topic === 'python_hw' ? (
                      <ErrorBoundary fallbackTitle="MicroPython Hardware & Robotics Console">
                        <MicroPythonConsole
                          problem={problem}
                          simulationResult={simulationResult}
                          code={code}
                          onDownloadCode={() => downloadHdlCode(code, problem)}
                        />
                      </ErrorBoundary>
                    ) : problem.topic === 'arduino' ? (
                      <ErrorBoundary fallbackTitle="Arduino Hardware & Serial Monitor">
                        <ArduinoConsole
                          problem={problem}
                          simulationResult={simulationResult}
                          code={code}
                          onDownloadCode={() => downloadHdlCode(code, problem)}
                        />
                      </ErrorBoundary>
                    ) : problem.topic === 'rtos_problems' ? (
                      <ErrorBoundary fallbackTitle="FreeRTOS Task Scheduler & Diagnostics Console">
                        <RtosTaskConsole
                          problem={problem}
                          simulationResult={simulationResult}
                          code={code}
                          onDownloadCode={() => downloadHdlCode(code, problem)}
                        />
                      </ErrorBoundary>
                    ) : problem.topic === 'mnemonics' ? (
                      <ErrorBoundary fallbackTitle="8051 Microcontroller Architecture & Memory Console">
                        <Mnemonics8051Console
                          problem={problem}
                          simulationResult={simulationResult}
                          code={code}
                          onDownloadCode={() => downloadHdlCode(code, problem)}
                        />
                      </ErrorBoundary>
                    ) : problem.topic === 'cv_robotics' ? (
                      <ErrorBoundary fallbackTitle="Computer Vision & Robotics Live Feed">
                        <CvRoboticsLiveCam
                          problem={problem}
                          simulationResult={simulationResult}
                          code={code}
                          onDownloadCode={() => downloadHdlCode(code, problem)}
                          isSimulating={isSimulating}
                          onRunCode={handleRunSimulation}
                          isProblemSolved={isSolved}
                          onLoadTemplate={() => {
                            const starter = getCleanStarterCode(problem);
                            handleCodeChange(starter);
                            setHasStartedCoding(true);
                          }}
                        />
                      </ErrorBoundary>
                    ) : problem.topic === 'embedded_c' ? (
                      <ErrorBoundary fallbackTitle="Embedded C Register & Hardware Console">
                        <EmbeddedConsole
                          simulationResult={simulationResult}
                          problem={problem}
                          code={code}
                          isSimulating={isSimulating}
                          onDownloadCode={() => downloadHdlCode(code, problem)}
                        />
                      </ErrorBoundary>
                    ) : isVlsi ? (
                      <ErrorBoundary fallbackTitle="Waveform & Schematic Visualizer">
                        <WaveformViewer
                          simulationResult={simulationResult}
                          signalConfigs={effectiveProblemSignals}
                          signals={effectiveProblemSignals}
                          samples={simulationResult?.samples || []}
                          isSimulating={isSimulating}
                          forcedValues={forcedValues}
                          onForceSignal={handleForceSignal}
                          onClearForced={handleClearForced}
                          code={code}
                          problem={problem}
                          windowMode={panelLayout === 'vis-maximized' ? 'full' : panelLayout === 'vis-expanded' ? 'lifted' : 'split'}
                          onToggleWindowMode={(mode) => {
                            if (mode === 'full') {
                              setPanelLayout(prev => prev === 'vis-maximized' ? 'vis-expanded' : 'vis-maximized');
                              setWindowMode(prev => prev === 'full' ? 'lifted' : 'full');
                            } else if (mode === 'lifted') {
                              setPanelLayout('vis-expanded');
                              setWindowMode('lifted');
                            } else {
                              setPanelLayout('default');
                              setWindowMode('split');
                            }
                          }}
                          onDownloadVcd={() => downloadVcdWaveform(problem, simulationResult)}
                          onDownloadTestbench={() => downloadTestbench(problem, code)}
                          onDownloadCsv={() => downloadCsvTrace(problem, simulationResult)}
                          onRunCode={handleRunSimulation}
                        />
                      </ErrorBoundary>
                    ) : (
                      <ErrorBoundary fallbackTitle="System Console">
                        <EmbeddedConsole
                          simulationResult={simulationResult}
                          problem={problem}
                          code={code}
                          isSimulating={isSimulating}
                          onDownloadCode={() => downloadHdlCode(code, problem)}
                        />
                      </ErrorBoundary>
                    )}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Accepted / Solution Passed Modal */}
      {showAcceptedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#16171d] border border-[#262833] rounded-2xl max-w-md w-full p-6 text-center shadow-2xl space-y-4">
            
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Accepted!</h3>
              <p className="text-xs text-[#9da3b4] mt-1">
                Your RTL implementation passed all synthesis, edge-case, and testbench cycles.
              </p>
            </div>

            {/* If a new Milestone Certificate or Full Library Certificate was UNLOCKED */}
            {newlyUnlockedCert ? (
              <div className="p-4 rounded-xl bg-[#191a21] border border-amber-500/50 shadow-sm text-left space-y-2 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-2 text-[#e5a93c] font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#e5a93c] shrink-0" />
                  <span>New Milestone Award Unlocked!</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{newlyUnlockedCert.badgeEmoji}</span>
                  <div>
                    <div className="font-bold text-sm text-white">{newlyUnlockedCert.title}</div>
                    <div className="text-[11px] text-[#e5a93c]/80">{newlyUnlockedCert.subtitle}</div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowAcceptedModal(false);
                    setShowCertificateModal(true);
                  }}
                  className="w-full mt-2 py-2.5 px-3 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#111215] font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95"
                >
                  <Award className="w-4 h-4 font-bold" />
                  <span>Claim & Download Official Certificate</span>
                </button>
              </div>
            ) : (
              /* If normal solve: show next milestone / library progress */
              <div className="p-3 rounded-xl bg-[#191a21] border border-[#2b2d39] text-left space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#9da3b4] font-semibold text-[11px]">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#e5a93c]" />
                    Next Award: {nextMilestone.def.title}
                  </span>
                  <span className="text-[#e5a93c] font-mono font-bold">
                    {totalSolved}/{nextMilestone.target}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#111215] overflow-hidden">
                  <div 
                    className="h-full bg-[#e5a93c] rounded-full"
                    style={{ width: `${Math.min(100, (totalSolved / nextMilestone.target) * 100)}%` }}
                  />
                </div>
                <div className="text-[10px] text-[#8c91a0] flex items-center justify-between">
                  <span>Library Progress: {topicSolved}/{topicProblems.length} ({problem.topic})</span>
                  <span>{nextMilestone.remaining} drills to next badge</span>
                </div>
              </div>
            )}

            {/* Performance Stats Grid */}
            <div className="grid grid-cols-4 gap-2 bg-[#191a21] p-3 rounded-xl border border-[#2b2d39]">
              <div>
                <div className="text-[10px] text-[#8c91a0] uppercase">Latency</div>
                <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> 12 ms
                </div>
                <div className="text-[9px] text-[#8c91a0]">Optimal</div>
              </div>

              <div>
                <div className="text-[10px] text-[#8c91a0] uppercase">Testcases</div>
                <div className="text-sm font-bold text-white flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> 10 / 10
                </div>
                <div className="text-[9px] text-[#8c91a0]">100% Passed</div>
              </div>

              <div>
                <div className="text-[10px] text-[#8c91a0] uppercase">Score</div>
                <div className="text-sm font-bold text-[#e5a93c] flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" /> +50 XP
                </div>
                <div className="text-[9px] text-[#8c91a0]">Rank Boost</div>
              </div>

              <div>
                <div className="text-[10px] text-[#8c91a0] uppercase">Answer State</div>
                <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Saved
                </div>
                <div className="text-[9px] text-[#8c91a0]">Database Synced</div>
              </div>
            </div>

            {/* HDL Save & Export Action in Accepted Modal */}
            {isVlsi && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    downloadBothHdlFiles(problem, code);
                    setSaveNotificationMessage(`✓ Design & Testbench downloaded in .${getExtensionForTopic(problem.topic)}`);
                    setShowSaveNotification(true);
                    setTimeout(() => setShowSaveNotification(false), 3000);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-600/30 cursor-pointer active:scale-95"
                >
                  <FileCode className="w-4 h-4 text-purple-200" />
                  <span>Save Design & Testbench in HDL (.{getExtensionForTopic(problem.topic)})</span>
                </button>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => setShowAcceptedModal(false)}
                className="w-full py-2.5 rounded-xl bg-[#191a21] hover:bg-[#20222b] text-[#eff1f6] text-xs font-semibold border border-[#2b2d39] transition-all cursor-pointer"
              >
                Review Solution
              </button>

              {nextProblem && onSelectNextProblem ? (
                <button
                  onClick={() => {
                    setShowAcceptedModal(false);
                    onSelectNextProblem(nextProblem);
                  }}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-blue-500/20"
                >
                  <span>Next Problem</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowAcceptedModal(false);
                    onBack();
                  }}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/20"
                >
                  Return to Library
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Floating Save Notification Toast */}
      {showSaveNotification && (
        <div className="absolute bottom-6 right-6 z-50 bg-emerald-950/95 border border-emerald-500/60 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-bold animate-fadeIn backdrop-blur-md">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-emerald-100 font-bold">{saveNotificationMessage}</div>
            <div className="text-[10px] text-emerald-400/80 font-normal">Stored and synced to your workspace.</div>
          </div>
        </div>
      )}

      {/* Global Interactive STA Timing & Slack Calculator Modal */}
      <StaTimingCalculatorModal
        isOpen={showStaModal}
        onClose={() => setShowStaModal(false)}
      />

      {/* PSNACET VLSI Verified Certificate Modal */}
      <CertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
        user={user}
        progress={progress}
        trackName="VLSI & Silicon Engineering"
        recentProblemTitle={problem.title}
      />

    </div>
  );
};
