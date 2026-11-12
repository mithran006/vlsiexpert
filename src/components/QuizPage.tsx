import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, CheckCircle2, XCircle, Award, Timer, RotateCcw, 
  Sparkles, ArrowRight, ArrowLeft, Trophy, Zap, Terminal, Grid, Cpu, 
  BarChart3, Check, Play, BookOpen, AlertCircle, Activity, Layers, Package, Radio,
  ShieldCheck, Code, Camera, Sliders, Shuffle, Lightbulb
} from 'lucide-react';
import { QUIZ_TOPICS, QUIZ_QUESTIONS, QuizQuestion, QuizTopicInfo, QuizTopicId } from '../data/quizData';
import { getQuizHint } from '../utils/quizHintGenerator';

/**
 * Shuffles the answer options of a quiz question while accurately updating the
 * correctAnswer index to match the new position of the correct answer text.
 */
function shuffleQuestionOptions(question: QuizQuestion): QuizQuestion {
  const correctText = question.options[question.correctAnswer];
  const shuffled = [...question.options];

  // Modern Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const newCorrectIndex = shuffled.indexOf(correctText);

  return {
    ...question,
    options: shuffled,
    correctAnswer: newCorrectIndex >= 0 ? newCorrectIndex : 0
  };
}

interface QuizPageProps {
  userName: string;
  onTriggerAntiCopy?: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ userName, onTriggerAntiCopy }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<QuizTopicId>('verilog');
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState<string>('all');
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<QuizQuestion[]>([]);
  
  const handlePreventCopy = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (onTriggerAntiCopy) {
      onTriggerAntiCopy();
    }
  };
  
  // Quiz State
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(30 * 60); // 30 mins for 50 Qs (50 Marks)
  const [timerActive, setTimerActive] = useState<boolean>(false);

  // Scores History from LocalStorage
  const [quizHistory, setQuizHistory] = useState<Record<string, { bestScore: number; totalQs: number; date: string }>>(() => {
    try {
      const saved = localStorage.getItem('silicon_arena_quiz_history');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Load questions when topic changes with shuffled options
  useEffect(() => {
    const questions = QUIZ_QUESTIONS.filter(q => q.topicId === selectedTopicId).map(shuffleQuestionOptions);
    setActiveQuizQuestions(questions);
    // Reset state
    setIsQuizActive(false);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation({});
    setTimeRemainingSeconds(30 * 60);
    setTimerActive(false);
  }, [selectedTopicId]);

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timeRemainingSeconds > 0 && !quizCompleted) {
      interval = setInterval(() => {
        setTimeRemainingSeconds(prev => {
          if (prev <= 1) {
            setQuizCompleted(true);
            setTimerActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeRemainingSeconds, quizCompleted]);

  const handleStartQuiz = () => {
    // Freshly shuffle options on quiz start / retake
    const questions = QUIZ_QUESTIONS.filter(q => q.topicId === selectedTopicId).map(shuffleQuestionOptions);
    setActiveQuizQuestions(questions);
    setIsQuizActive(true);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation({});
    setTimeRemainingSeconds(30 * 60);
    setTimerActive(true);
  };

  const handleSelectOption = (questionIdx: number, optionIdx: number) => {
    if (quizCompleted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
    setShowExplanation(prev => ({ ...prev, [questionIdx]: true }));
  };

  const handleFinishQuiz = () => {
    setQuizCompleted(true);
    setTimerActive(false);

    // Calculate score
    let score = 0;
    activeQuizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        score += 1;
      }
    });

    // Update history
    const prevBest = quizHistory[selectedTopicId]?.bestScore || 0;
    const newHistory = {
      ...quizHistory,
      [selectedTopicId]: {
        bestScore: Math.max(prevBest, score),
        totalQs: activeQuizQuestions.length,
        date: new Date().toLocaleDateString()
      }
    };
    setQuizHistory(newHistory);
    try {
      localStorage.setItem('silicon_arena_quiz_history', JSON.stringify(newHistory));
    } catch (e) {
      console.error(e);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentTopicInfo = QUIZ_TOPICS.find(t => t.id === selectedTopicId)!;
  const currentQuestion = activeQuizQuestions[currentQuestionIndex];

  // Calculated totals
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = activeQuizQuestions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#e5a93c]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#e5a93c]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#e5a93c]" />;
      case 'Grid': return <Grid className="w-5 h-5 text-[#e5a93c]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#e5a93c]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#e5a93c]" />;
      case 'Package': return <Package className="w-5 h-5 text-[#e5a93c]" />;
      case 'Radio': return <Radio className="w-5 h-5 text-[#e5a93c]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#e5a93c]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#e5a93c]" />;
      case 'Camera': return <Camera className="w-5 h-5 text-[#e5a93c]" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-[#e5a93c]" />;
      default: return <HelpCircle className="w-5 h-5 text-[#e5a93c]" />;
    }
  };

  const filteredTopics = selectedCategoryGroup === 'all'
    ? QUIZ_TOPICS
    : QUIZ_TOPICS.filter(t => t.categoryGroup === selectedCategoryGroup);

  const totalPossibleScore = QUIZ_TOPICS.reduce((acc, t) => acc + (t.questionCount || 50), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-[#eff1f6]">
      
      {/* Header Banner - Black and Yellow Theme */}
      <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-[#111217] border border-[#22242f] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#e5a93c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono font-bold text-[#e5a93c] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5a93c]" />
              Knowledge Verification & Assessments
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Hardware & VLSI Engineering Assessments
            </h1>
            <p className="text-[#9da3b4] text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Master the full spectrum of semiconductor engineering — from Verilog HDL, SystemVerilog, VHDL, UVM, and DFT to Embedded C, 8051 Mnemonics, RTOS, CMOS VLSI, FPGA, and SoC architectures with instant explanations.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#181920] p-3.5 rounded-xl border border-[#22242f] shrink-0 shadow-sm">
            <Trophy className="w-6 h-6 text-[#e5a93c] shrink-0" />
            <div>
              <div className="text-[11px] text-[#9da3b4] font-mono">Performance Metric</div>
              <div className="text-sm font-bold text-[#e5a93c] font-mono">
                {Object.values(quizHistory).reduce((a, b: any) => a + (b?.bestScore || 0), 0)} / {totalPossibleScore} Marks
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        {[
          { id: 'all', label: 'All Topics', count: QUIZ_TOPICS.length },
          { id: 'hdl_verification', label: 'HDL & Verification', count: QUIZ_TOPICS.filter(t => t.categoryGroup === 'hdl_verification').length },
          { id: 'embedded_firmware', label: 'Embedded & Firmware', count: QUIZ_TOPICS.filter(t => t.categoryGroup === 'embedded_firmware').length },
          { id: 'soc_fpga_tools', label: 'SoC, FPGA & Tools', count: QUIZ_TOPICS.filter(t => t.categoryGroup === 'soc_fpga_tools').length },
          { id: 'core_electronics', label: 'Core Electronics & VLSI', count: QUIZ_TOPICS.filter(t => t.categoryGroup === 'core_electronics').length }
        ].map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedCategoryGroup(filter.id)}
            className={`h-8 px-3 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 border select-none cursor-pointer ${
              selectedCategoryGroup === filter.id
                ? 'bg-[#e5a93c] text-[#0a0b0e] font-black border-[#e5a93c] shadow-md'
                : 'bg-[#111217] border-[#22242f] text-[#9da3b4] hover:text-[#e5a93c] hover:bg-[#181920] hover:border-[#2b2d39]'
            }`}
          >
            <span>{filter.label}</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
              selectedCategoryGroup === filter.id ? 'bg-[#0a0b0e]/20 text-[#0a0b0e] font-black' : 'bg-[#0a0b0e] text-[#9da3b4] border border-[#22242f]'
            }`}>
              {filter.count}
            </span>
          </button>
        ))}
      </div>

      {/* Topic Cards - Black and Yellow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {filteredTopics.map((topic) => {
          const isSelected = topic.id === selectedTopicId;
          const topicScore = quizHistory[topic.id];

          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`p-4 rounded-xl text-left transition-all border relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? 'bg-[#181920] border-[#e5a93c] ring-1 ring-[#e5a93c]/50 shadow-md'
                  : 'bg-[#111217] border-[#22242f] hover:border-[#e5a93c]/50 hover:bg-[#181920]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#0a0b0e] border border-[#22242f] flex items-center justify-center text-[#e5a93c] group-hover:border-[#e5a93c]/40 transition-colors">
                  {renderIcon(topic.iconName)}
                </div>
                {topicScore ? (
                  <span className="text-[11px] font-mono text-[#e5a93c] font-bold bg-[#e5a93c]/10 px-2 py-0.5 rounded border border-[#e5a93c]/20">
                    Best: {topicScore.bestScore}/{topic.questionCount || 50} Marks
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-[#9da3b4] bg-[#0a0b0e] px-2 py-0.5 rounded border border-[#22242f]">
                    {topic.questionCount || 50} Qs (50 Marks)
                  </span>
                )}
              </div>

              <h3 className={`text-sm font-bold mb-1 transition-colors ${isSelected ? 'text-[#e5a93c]' : 'text-white group-hover:text-[#e5a93c]'}`}>
                {topic.title}
              </h3>
              <p className="text-xs text-[#9da3b4] line-clamp-2 leading-relaxed">
                {topic.shortDesc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Quiz Container */}
      {!isQuizActive ? (
        /* TOPIC INTRO BANNER BEFORE STARTING */
        <div className="p-8 rounded-2xl bg-[#111217] border border-[#22242f] text-center max-w-3xl mx-auto shadow-lg relative overflow-hidden">
          <div className="w-16 h-16 rounded-xl bg-[#0a0b0e] border border-[#e5a93c]/40 mx-auto flex items-center justify-center text-[#e5a93c] mb-4 shadow-sm">
            {renderIcon(currentTopicInfo.iconName)}
          </div>
          
          <h2 className="text-2xl font-black text-white mb-2">
            {currentTopicInfo.title} Assessment
          </h2>
          <p className="text-[#c2c7d0] text-sm mb-6 max-w-xl mx-auto leading-relaxed">
            Ready to test your knowledge in {currentTopicInfo.title}? This comprehensive assessment consists of <strong>50 multiple choice questions (50 Marks)</strong> covering fundamental principles, numerical calculations, protocol rules, and industrial EDA design standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-lg mx-auto text-left text-xs">
            <div className="p-3.5 rounded-xl bg-[#0a0b0e] border border-[#22242f]">
              <span className="text-[#9da3b4] block mb-1">Questions & Marks</span>
              <span className="text-sm font-bold text-white">50 Questions (50 Marks)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0a0b0e] border border-[#22242f]">
              <span className="text-[#9da3b4] block mb-1">Time Limit</span>
              <span className="text-sm font-bold text-[#e5a93c]">30 Minutes</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0a0b0e] border border-[#22242f]">
              <span className="text-[#9da3b4] block mb-1">Passing Grade</span>
              <span className="text-sm font-bold text-[#e5a93c]">90% (45 / 50 Marks)</span>
            </div>
          </div>

          <button
            onClick={handleStartQuiz}
            className="px-7 py-3 rounded-xl bg-[#e5a93c] hover:bg-[#d99b2e] text-[#0a0b0e] font-black text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Play className="w-4 h-4 fill-[#0a0b0e] text-[#0a0b0e]" />
            <span>Start 50-Question Assessment (50 Marks)</span>
          </button>
        </div>
      ) : quizCompleted ? (
        /* QUIZ COMPLETED SUMMARY SCREEN */
        <div className="p-8 rounded-2xl bg-[#111217] border border-[#22242f] max-w-3xl mx-auto shadow-lg text-center">
          <div className="w-16 h-16 rounded-xl bg-[#e5a93c]/10 border border-[#e5a93c]/30 mx-auto flex items-center justify-center text-[#e5a93c] mb-4">
            <Trophy className="w-8 h-8 text-[#e5a93c]" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2">
            Assessment Completed!
          </h2>
          <p className="text-[#9da3b4] text-sm mb-6">
            Great effort on completing the {currentTopicInfo.title} assessment.
          </p>

          {/* Score Badge */}
          <div className="inline-flex flex-col items-center justify-center px-8 py-6 rounded-2xl bg-[#0a0b0e] border border-[#22242f] mb-8 shadow-inner">
            <span className="text-xs font-mono text-[#9da3b4] uppercase tracking-widest mb-1">Your Final Score</span>
            <span className="text-5xl font-black text-[#e5a93c]">
              {correctCount} / {activeQuizQuestions.length || 50} Marks
            </span>
            <span className="text-xs text-[#9da3b4] mt-2 font-medium">
              Percentage: {Math.round((correctCount / (activeQuizQuestions.length || 50)) * 100)}%
            </span>
          </div>

          {/* Certificate Notice if >= 90% (45/50) */}
          {correctCount >= 45 ? (
            <div className="p-4 rounded-2xl bg-[#e5a93c]/10 border border-[#e5a93c]/30 text-[#e5a93c] text-xs font-medium mb-8 max-w-md mx-auto flex items-center gap-3 text-left">
              <Award className="w-6 h-6 text-[#e5a93c] shrink-0" />
              <div>
                <strong className="block text-white">Congratulations {userName}!</strong>
                You passed the {currentTopicInfo.title} assessment with Distinction (&ge;90%, {correctCount}/50 marks).
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-[#181920] border border-[#e5a93c]/30 text-[#e5a93c] text-xs font-medium mb-8 max-w-md mx-auto flex items-center gap-3 text-left">
              <AlertCircle className="w-6 h-6 text-[#e5a93c] shrink-0" />
              <div>
                <strong className="block text-white">Passing Score: 45 / 50 Marks (90%)</strong>
                You scored {correctCount}/50 marks. Review the conceptual hints below to guide your problem-solving and boost your score on the next attempt.
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={handleStartQuiz}
              className="px-6 py-2.5 rounded-xl bg-[#e5a93c] hover:bg-[#d99b2e] text-[#0a0b0e] font-black text-xs inline-flex items-center gap-2 shadow-md cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-[#0a0b0e]" />
              <span>Retake Quiz With Hints</span>
            </button>
            <button
              onClick={() => setIsQuizActive(false)}
              className="px-6 py-2.5 rounded-xl bg-[#181920] hover:bg-[#22242f] text-[#e5a93c] font-bold text-xs inline-flex items-center gap-2 border border-[#2b2d39] cursor-pointer transition-colors"
            >
              <BookOpen className="w-4 h-4 text-[#e5a93c]" />
              <span>Return to Topics</span>
            </button>
          </div>

          {/* Question Review List (Hints Only - Correct Answers Hidden) */}
          <div 
            className="text-left space-y-4 pt-6 border-t border-[#22242f] select-none no-copy protected-question"
            onCopy={handlePreventCopy}
            onCut={handlePreventCopy}
            onContextMenu={handlePreventCopy}
            onDragStart={handlePreventCopy}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#e5a93c]" />
                  <span>Question Review & Study Hints</span>
                </h3>
                <p className="text-xs text-[#9da3b4] mt-0.5">
                  Correct answers are hidden to test your independent mastery. Use the clues below to solve them on your retake.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#e5a93c]/10 text-[#e5a93c] border border-[#e5a93c]/30 text-[11px] font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#e5a93c]" />
                HINTS ONLY • ANSWERS HIDDEN
              </span>
            </div>

            {activeQuizQuestions.map((q, idx) => {
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns === q.correctAnswer;
              const hintText = getQuizHint(q);

              return (
                <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-[#0a0b0e] border border-[#22242f] text-xs space-y-3 select-none protected-question hover:border-[#e5a93c]/40 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-[#e5a93c]/15 text-[#e5a93c] text-[10px] font-mono font-bold border border-[#e5a93c]/30">
                          Q{idx + 1}
                        </span>
                        <span className="text-[11px] text-[#9da3b4] font-mono">
                          {q.category}
                        </span>
                      </div>
                      <p className="font-bold text-slate-100 text-sm leading-snug">
                        {q.question}
                      </p>
                    </div>

                    {userAns !== undefined ? (
                      isCorrect ? (
                        <span className="px-2.5 py-1 rounded-lg bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/40 text-[10px] font-black shrink-0 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          CORRECT
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[10px] font-black shrink-0 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" />
                          INCORRECT
                        </span>
                      )
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-[#181920] text-[#9da3b4] border border-[#22242f] text-[10px] font-bold shrink-0">
                        UNANSWERED
                      </span>
                    )}
                  </div>

                  {/* Your Choice Display (Never reveals the correct answer) */}
                  <div className="flex items-center gap-2 text-slate-400 text-xs bg-[#111217] p-2.5 rounded-xl border border-[#22242f]">
                    <span className="text-[#9da3b4] font-semibold">Your Answer:</span>
                    {userAns !== undefined ? (
                      <span className={`font-mono font-medium ${isCorrect ? 'text-[#e5a93c]' : 'text-rose-400'}`}>
                        Option {String.fromCharCode(65 + userAns)}: {q.options[userAns]}
                      </span>
                    ) : (
                      <span className="text-[#9da3b4] italic font-mono">Not attempted</span>
                    )}
                  </div>

                  {/* Guiding Hint Box (Only the hint is provided) */}
                  <div className="p-3.5 rounded-xl bg-[#181920] border border-[#e5a93c]/30 text-slate-200 text-xs leading-relaxed">
                    <div className="font-bold text-[#e5a93c] flex items-center gap-1.5 mb-1.5">
                      <Lightbulb className="w-4 h-4 text-[#e5a93c] shrink-0" />
                      <span>Conceptual Hint:</span>
                    </div>
                    <p className="text-slate-300 pl-5 font-normal leading-relaxed">
                      {hintText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ACTIVE QUIZ QUESTION INTERFACE */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Question Panel */}
          <div 
            className="lg:col-span-3 space-y-6 select-none no-copy protected-question"
            onCopy={handlePreventCopy}
            onCut={handlePreventCopy}
            onContextMenu={handlePreventCopy}
            onDragStart={handlePreventCopy}
          >
            
            {/* Question Top Bar */}
            <div className="flex items-center justify-between bg-[#111217] p-4 rounded-xl border border-[#22242f] text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#e5a93c]/15 text-[#e5a93c] font-mono font-bold border border-[#e5a93c]/30">
                  Question {currentQuestionIndex + 1} of {activeQuizQuestions.length || 50} (1 Mark Each)
                </span>
                <span className="text-[#2b2d39] hidden sm:inline">•</span>
                <span className="text-[#c2c7d0] font-medium hidden sm:inline">{currentQuestion.category}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0a0b0e] text-[#9da3b4] border border-[#22242f] hidden sm:inline-flex items-center gap-1">
                  <Shuffle className="w-3 h-3 text-[#e5a93c]" />
                  Shuffled Options
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#e5a93c]/10 text-[#e5a93c] border border-[#e5a93c]/20 hidden sm:inline-flex items-center gap-1">
                  Copy-Protected
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono font-bold text-[#e5a93c] bg-[#e5a93c]/10 px-3 py-1 rounded-lg border border-[#e5a93c]/30">
                <Timer className="w-4 h-4 text-[#e5a93c]" />
                <span>{formatTime(timeRemainingSeconds)}</span>
              </div>
            </div>

            {/* Question Box */}
            <div className="p-6 rounded-2xl bg-[#111217] border border-[#22242f] shadow-lg space-y-6 select-none protected-question">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed select-none protected-question">
                {currentQuestion.question}
              </h3>

              {/* Options Grid */}
              <div className="space-y-3 select-none">
                {currentQuestion.options.map((optionText, optIdx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                  const isCorrect = currentQuestion.correctAnswer === optIdx;
                  const hasAnswered = selectedAnswers[currentQuestionIndex] !== undefined;

                  let optionStyle = 'bg-[#0a0b0e] border-[#22242f] hover:border-[#e5a93c]/60 hover:bg-[#181920] text-slate-200';
                  if (hasAnswered) {
                    if (isCorrect) {
                      optionStyle = 'bg-[#e5a93c]/15 border-[#e5a93c] text-white font-semibold shadow-sm';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'bg-rose-950/40 border-rose-500/80 text-rose-200 font-semibold';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(currentQuestionIndex, optIdx)}
                      className={`w-full p-4 rounded-xl border text-left transition-all text-xs sm:text-sm flex items-center justify-between gap-3 select-none cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3 select-none">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          hasAnswered && isCorrect 
                            ? 'bg-[#e5a93c] text-[#0a0b0e] font-black' 
                            : isSelected && !isCorrect 
                            ? 'bg-rose-600 text-white font-black' 
                            : isSelected
                            ? 'bg-[#e5a93c] text-[#0a0b0e] font-black'
                            : 'bg-[#181920] text-[#9da3b4] border border-[#22242f]'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="select-none protected-question">{optionText}</span>
                      </div>

                      {hasAnswered && (
                        isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-[#e5a93c] shrink-0" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                        ) : null
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Explanation Box */}
              {showExplanation[currentQuestionIndex] && (
                <div className="p-4 rounded-xl bg-[#0a0b0e] border border-[#e5a93c]/40 text-xs space-y-1.5 animate-fadeIn select-none protected-question">
                  <div className="font-bold text-[#e5a93c] flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#e5a93c]" />
                    <span>Explanation:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-normal select-none protected-question">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-[#22242f]">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 rounded-xl bg-[#181920] text-slate-300 border border-[#22242f] hover:border-[#2b2d39] hover:bg-[#22242f] hover:text-white disabled:opacity-40 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {currentQuestionIndex < activeQuizQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.min(activeQuizQuestions.length - 1, prev + 1))}
                    className="px-5 py-2 rounded-xl bg-[#e5a93c] hover:bg-[#d99b2e] text-[#0a0b0e] text-xs font-black flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-4 h-4 text-[#0a0b0e]" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinishQuiz}
                    className="px-6 py-2 rounded-xl bg-[#f59e0b] hover:bg-[#d99b2e] text-[#0a0b0e] text-xs font-black flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <Check className="w-4 h-4 text-[#0a0b0e]" />
                    <span>Finish Assessment</span>
                  </button>
                )}
              </div>

            </div>

          </div>

          {/* Right Question Navigator & Progress Panel */}
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#111217] border border-[#22242f] space-y-4 shadow-lg">
              <h4 className="text-xs font-black text-[#e5a93c] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e5a93c]" />
                Question Navigator
              </h4>

              {/* 1 to 50 Grid */}
              <div className="grid grid-cols-5 gap-1.5 max-h-72 overflow-y-auto pr-1">
                {activeQuizQuestions.map((_, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = selectedAnswers[idx] !== undefined;

                  let btnStyle = 'bg-[#0a0b0e] text-[#9da3b4] border-[#22242f] hover:border-[#e5a93c]/50 hover:text-white';
                  if (isCurrent) {
                    btnStyle = 'bg-[#e5a93c] text-[#0a0b0e] border-[#e5a93c] font-black shadow-md ring-2 ring-[#e5a93c]/40';
                  } else if (isAnswered) {
                    btnStyle = 'bg-[#181920] text-[#e5a93c] border-[#e5a93c]/40 font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-8 rounded-lg border text-[11px] font-mono flex items-center justify-center transition-all cursor-pointer ${btnStyle}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#22242f] space-y-2 text-[11px] text-[#9da3b4]">
                <div className="flex items-center justify-between">
                  <span>Answered:</span>
                  <span className="font-bold text-white">{answeredCount} / {activeQuizQuestions.length || 50}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Progress:</span>
                  <span className="font-bold text-[#e5a93c]">{Math.round((answeredCount / (activeQuizQuestions.length || 50)) * 100)}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Passing Target:</span>
                  <span className="font-bold text-[#e5a93c]">45 / 50 Marks (90%)</span>
                </div>
              </div>

              <button
                onClick={handleFinishQuiz}
                className="w-full py-2.5 rounded-xl bg-[#e5a93c] hover:bg-[#d99b2e] text-[#0a0b0e] font-black text-xs shadow-md transition-all mt-2 cursor-pointer active:scale-95"
              >
                Submit Assessment Early
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
