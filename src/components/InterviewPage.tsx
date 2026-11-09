import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, Search, Filter, Mic, MicOff, CheckCircle2, Sparkles, 
  HelpCircle, ChevronRight, Award, Play, RotateCcw, Volume2, 
  Send, AlertCircle, ArrowLeft, Lightbulb, BookOpen, Layers,
  Timer, Clock, Check, X, ArrowRight, BarChart3, RefreshCw,
  FileText, ShieldCheck, Cpu, Terminal, Zap
} from 'lucide-react';
import { COMPANIES, INTERVIEW_QUESTIONS, CompanyInfo, InterviewQuestion } from '../data/interviewData';

interface InterviewPageProps {
  userName?: string;
  onBackToDashboard?: () => void;
  onTriggerAntiCopy?: () => void;
}

interface MockRoundResult {
  question: InterviewQuestion;
  userAnswer: string;
  score: number;
  grade: string;
  feedback: string;
  matchedPoints: string[];
  missingPoints: string[];
}

export const InterviewPage: React.FC<InterviewPageProps> = ({ userName, onBackToDashboard, onTriggerAntiCopy }) => {
  // Navigation & Mode
  const [activeTab, setActiveTab] = useState<'bank' | 'mock'>('bank');
  const [selectedCompanyId, setSelectedCompanyId] = useState<CompanyInfo['id']>('siemens');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeQuestion, setActiveQuestion] = useState<InterviewQuestion | null>(null);

  const handlePreventCopy = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (onTriggerAntiCopy) {
      onTriggerAntiCopy();
    }
  };

  // User Response State (Bank Mode)
  const [userResponse, setUserResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [evaluating, setEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    feedback: string;
    matchedPoints: string[];
    missingPoints: string[];
    grade: string;
  } | null>(null);

  // Mock Interview State
  const [mockTargetCompany, setMockTargetCompany] = useState<string>('all');
  const [mockQuestionCount, setMockQuestionCount] = useState<number>(5);
  const [mockTimePerQuestion, setMockTimePerQuestion] = useState<number>(120); // 120 seconds default
  const [mockState, setMockState] = useState<'idle' | 'in_progress' | 'completed'>('idle');
  const [mockQuestionsList, setMockQuestionsList] = useState<InterviewQuestion[]>([]);
  const [currentMockIndex, setCurrentMockIndex] = useState<number>(0);
  const [mockRoundResults, setMockRoundResults] = useState<MockRoundResult[]>([]);
  const [mockAnswerInput, setMockAnswerInput] = useState<string>('');
  const [mockTimeRemaining, setMockTimeRemaining] = useState<number>(120);
  const [mockEvaluating, setMockEvaluating] = useState<boolean>(false);

  const recognitionRef = useRef<any>(null);
  const timerRef = useRef<any>(null);
  const mockTimerRef = useRef<any>(null);

  // Pagination for large question banks (e.g. 1000 GATE questions)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 30;

  const selectedCompany = COMPANIES.find(c => c.id === selectedCompanyId) || COMPANIES[0];

  // Filter questions for the active company in Bank Mode
  const companyQuestions = INTERVIEW_QUESTIONS.filter(q => q.companyId === selectedCompanyId);
  const filteredQuestions = companyQuestions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          q.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiff = selectedDifficulty === 'all' || q.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    return matchesSearch && matchesDiff;
  });

  const totalPages = Math.ceil(filteredQuestions.length / PAGE_SIZE) || 1;
  const paginatedQuestions = filteredQuestions.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Reset page when company or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCompanyId, searchQuery, selectedDifficulty]);

  // Setup Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = 'en-US';

      rec.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (activeTab === 'mock') {
          setMockAnswerInput(prev => prev + (prev ? ' ' : '') + transcript);
        } else {
          setUserResponse(prev => prev + (prev ? ' ' : '') + transcript);
        }
      };

      rec.onerror = (event: any) => {
        console.warn('Speech recognition error', event.error);
        setIsRecording(false);
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = rec;
    }
  }, [activeTab]);

  // Handle Mock Timer
  useEffect(() => {
    if (mockState === 'in_progress' && mockTimePerQuestion > 0) {
      mockTimerRef.current = setInterval(() => {
        setMockTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(mockTimerRef.current);
            // Auto submit when time runs out
            handleAutoSubmitMockRound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (mockTimerRef.current) clearInterval(mockTimerRef.current);
      };
    }
  }, [mockState, currentMockIndex, mockTimePerQuestion]);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert('Speech Recognition is not supported on this browser. You can still type your answer!');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
        setRecordingTime(0);
        timerRef.current = setInterval(() => {
          setRecordingTime(prev => prev + 1);
        }, 1000);
      } catch (err) {
        console.error('Recording start failed', err);
      }
    }
  };

  // Evaluate single question
  const evaluateAnswerLogic = async (question: InterviewQuestion, answer: string, companyName: string) => {
    try {
      const response = await fetch('/api/ai/copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskType: 'debug',
          prompt: `You are a Principal VLSI & Semiconductor Interviewer evaluating a candidate's answer for ${companyName}.
Question: "${question.question}"
Category: ${question.category}
Key Answer Points expected: ${question.keyPoints.join(', ')}
Candidate Response: "${answer}"

Evaluate the candidate's response. Return:
1. A numerical score out of 100 based on technical accuracy and hardware engineering depth.
2. Short, high-signal constructive feedback (2-3 sentences).
3. Matched key concepts covered.
4. Missing key concepts to improve upon.
Format output clearly with "Score: XX/100" and concise bullet points.`
        })
      });

      if (response.ok) {
        const data = await response.json();
        const aiText = data.reply || data.text || '';
        
        const scoreMatch = aiText.match(/Score:\s*(\d+)/i) || aiText.match(/(\d+)\/100/);
        const score = scoreMatch ? Math.min(100, Math.max(20, parseInt(scoreMatch[1]))) : 84;

        let grade = 'B+ (Good)';
        if (score >= 90) grade = 'A+ (Principal Ready)';
        else if (score >= 78) grade = 'A (Placement Solid)';
        else if (score >= 62) grade = 'B (Fair Concept)';
        else grade = 'C (Needs Practice)';

        const matched = question.keyPoints.filter(kp => answer.toLowerCase().includes(kp.toLowerCase().split(' ')[0]));
        const missing = question.keyPoints.filter(kp => !answer.toLowerCase().includes(kp.toLowerCase().split(' ')[0]));

        return {
          score,
          feedback: aiText,
          matchedPoints: matched.length > 0 ? matched : [question.keyPoints[0]],
          missingPoints: missing,
          grade
        };
      }
    } catch (e) {
      // Fallback heuristic evaluation
    }

    const lower = answer.toLowerCase();
    const matched = question.keyPoints.filter(kp => lower.includes(kp.toLowerCase().split(' ')[0]));
    const missing = question.keyPoints.filter(kp => !lower.includes(kp.toLowerCase().split(' ')[0]));
    const score = Math.min(100, Math.max(45, Math.round(((matched.length + 1) / (question.keyPoints.length + 1)) * 100)));

    return {
      score,
      feedback: `Your response shows clear technical understanding of ${question.category}. Ensure you explicitly highlight silicon metrics and hardware trade-offs required by ${companyName}.`,
      matchedPoints: matched.length > 0 ? matched : [question.keyPoints[0]],
      missingPoints: missing,
      grade: score >= 85 ? 'A+ (Excellent)' : score >= 70 ? 'A (Solid)' : 'B (Needs Depth)'
    };
  };

  // Evaluate Answer in Bank Mode
  const handleEvaluateAnswer = async () => {
    if (!activeQuestion || !userResponse.trim()) return;

    setEvaluating(true);
    setEvaluationResult(null);

    const result = await evaluateAnswerLogic(activeQuestion, userResponse, selectedCompany.name);
    setEvaluationResult(result);
    setEvaluating(false);
  };

  // Start Live Mock Interview
  const startMockInterview = () => {
    let pool = INTERVIEW_QUESTIONS;
    if (mockTargetCompany !== 'all') {
      pool = INTERVIEW_QUESTIONS.filter(q => q.companyId === mockTargetCompany);
    }
    // Shuffle and pick
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, mockQuestionCount);

    setMockQuestionsList(selected);
    setCurrentMockIndex(0);
    setMockRoundResults([]);
    setMockAnswerInput('');
    setMockTimeRemaining(mockTimePerQuestion);
    setMockState('in_progress');
  };

  // Submit Current Mock Round
  const handleSubmitMockRound = async () => {
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }

    setMockEvaluating(true);
    const currQ = mockQuestionsList[currentMockIndex];
    const comp = COMPANIES.find(c => c.id === currQ.companyId) || selectedCompany;
    const answer = mockAnswerInput.trim() || 'No answer submitted within time limit.';

    const result = await evaluateAnswerLogic(currQ, answer, comp.name);

    const roundResult: MockRoundResult = {
      question: currQ,
      userAnswer: answer,
      score: result.score,
      grade: result.grade,
      feedback: result.feedback,
      matchedPoints: result.matchedPoints,
      missingPoints: result.missingPoints
    };

    const updatedResults = [...mockRoundResults, roundResult];
    setMockRoundResults(updatedResults);
    setMockEvaluating(false);

    if (currentMockIndex + 1 < mockQuestionsList.length) {
      setCurrentMockIndex(prev => prev + 1);
      setMockAnswerInput('');
      setMockTimeRemaining(mockTimePerQuestion);
    } else {
      setMockState('completed');
      if (mockTimerRef.current) clearInterval(mockTimerRef.current);
    }
  };

  const handleAutoSubmitMockRound = () => {
    handleSubmitMockRound();
  };

  // Compute Mock Summary
  const mockAverageScore = mockRoundResults.length > 0
    ? Math.round(mockRoundResults.reduce((acc, r) => acc + r.score, 0) / mockRoundResults.length)
    : 0;

  let mockOverallGrade = 'A+ (Top-Tier Placement Ready)';
  if (mockAverageScore < 60) mockOverallGrade = 'C (Foundational Practice Needed)';
  else if (mockAverageScore < 75) mockOverallGrade = 'B+ (Good Technical Potential)';
  else if (mockAverageScore < 88) mockOverallGrade = 'A (Silicon Industry Ready)';

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-zinc-100 flex flex-col font-sans selection:bg-[#e5a93c] selection:text-black">
      
      {/* Top Banner / Navigation Header */}
      <div className="bg-[#111217] border-b border-[#22242f] px-4 sm:px-6 py-5 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {onBackToDashboard && (
              <button
                onClick={onBackToDashboard}
                className="p-2 rounded-xl bg-[#14151b] hover:bg-[#181920] text-zinc-300 hover:text-white transition-all border border-[#22242f]"
                title="Back to Problem Dashboard"
              >
                <ArrowLeft className="w-5 h-5 text-[#e5a93c]" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-[#e5a93c]" />
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  VLSI Semiconductor Mock Interview Arena
                </h1>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                {INTERVIEW_QUESTIONS.length}+ Authentic Interview & Exam Questions • Qualcomm, Broadcom, ARM, TI, GATE VLSI, Synopsys, Tata Elxsi, Siemens, TSMC & NVIDIA
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-[#14151b] p-1 rounded-lg border border-[#22242f]">
            <button
              onClick={() => setActiveTab('bank')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'bank'
                  ? 'bg-[#e5a93c] text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Question Bank</span>
            </button>

            <button
              onClick={() => setActiveTab('mock')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'mock'
                  ? 'bg-[#e5a93c] text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Live Mock Interview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: Question Bank & Individual Question Practice */}
      {activeTab === 'bank' && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex flex-col gap-6">
          
          {/* Company Selector Horizontal Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-2">
            {COMPANIES.map((comp) => {
              const isSelected = comp.id === selectedCompanyId;
              return (
                <button
                  key={comp.id}
                  onClick={() => {
                    setSelectedCompanyId(comp.id);
                    setActiveQuestion(null);
                    setUserResponse('');
                    setEvaluationResult(null);
                  }}
                  className={`p-2.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#181920] border-[#e5a93c] shadow-lg shadow-[#e5a93c]/10 ring-2 ring-[#e5a93c]/30'
                      : 'bg-[#111217] hover:bg-[#181920] border-[#22242f] text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-black truncate ${isSelected ? 'text-[#e5a93c]' : 'text-zinc-200'}`}>
                      {comp.id === 'gate_vlsi' ? 'GATE VLSI' : comp.name.split(' ')[0]}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#14151b] border border-[#22242f] text-[#e5a93c] font-mono font-semibold">
                      {comp.questionCount}
                    </span>
                  </div>
                  <p className="text-[9px] text-zinc-400 line-clamp-1">
                    {comp.id === 'gate_vlsi' ? '1000 PYQs (2000-2024)' : comp.id === 'samsung' ? '3nm GAA & Exynos' : comp.id === 'qualcomm' ? 'Snapdragon & Hexagon' : comp.id === 'broadcom' ? 'Tomahawk & SerDes' : comp.id === 'arm' ? 'Cortex & AMBA CHI' : comp.id === 'texas_instruments' ? 'Mixed-Signal & SAR' : comp.id === 'synopsys' ? 'PrimeTime/DesignCompiler' : comp.id === 'tata_elxsi' ? 'Auto SoC & ASIL-D' : comp.id === 'siemens' ? 'Tessent/Calibre' : comp.id === 'tsmc' ? '2nm & CoWoS' : comp.id === 'nvidia_physical_ai' ? 'GB200 & Jetson' : comp.tagline.split(',')[0]}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Company Highlight Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#111217] border border-[#22242f] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#e5a93c]" />
                  <span>{selectedCompany.name} Technical Questions</span>
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e5a93c]/15 text-[#e5a93c] border border-[#e5a93c]/40 font-bold">
                  {companyQuestions.length} Questions Available
                </span>
              </div>
              <p className="text-xs text-zinc-300">{selectedCompany.tagline}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedCompany.focusDomains.map((dom, dIdx) => (
                  <span key={dIdx} className="text-[10px] px-2 py-0.5 rounded bg-[#181920] text-[#e5a93c] border border-[#22242f]">
                    {dom}
                  </span>
                ))}
              </div>
            </div>

            {/* Search & Difficulty Filter Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search questions & domains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-2 bg-[#0a0b0e] border border-[#22242f] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5a93c] w-44 sm:w-60 placeholder:text-zinc-500"
                />
              </div>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 bg-[#0a0b0e] border border-[#22242f] rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-[#e5a93c]"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Grid Layout: Left Question List (5 cols) | Right Interactive Answer Workspace (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
            
            {/* Question List */}
            <div className="lg:col-span-5 bg-[#111217] border border-[#22242f] rounded-2xl p-4 flex flex-col gap-3 max-h-[750px] overflow-y-auto">
              <div className="flex items-center justify-between pb-2 border-b border-[#22242f]">
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#e5a93c]" />
                  <span>Question Bank ({filteredQuestions.length})</span>
                </span>
                <span className="text-[11px] text-zinc-400">Click to practice</span>
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="py-12 text-center text-zinc-400 text-xs">
                  No questions match your filter.
                </div>
              ) : (
                <>
                  <div className="space-y-2 flex-1">
                    {paginatedQuestions.map((q, idx) => {
                      const isActive = activeQuestion?.id === q.id;
                      const globalIdx = (currentPage - 1) * PAGE_SIZE + idx + 1;
                      return (
                        <button
                          key={q.id}
                          onClick={() => {
                            setActiveQuestion(q);
                            setUserResponse('');
                            setEvaluationResult(null);
                          }}
                          className={`w-full p-3.5 rounded-xl border text-left transition-all flex flex-col gap-2 cursor-pointer ${
                            isActive
                              ? 'bg-[#181920] border-[#e5a93c] text-white shadow-md'
                              : 'bg-[#14151b] hover:bg-[#181920] border-[#22242f] text-zinc-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#111217] text-[#e5a93c] font-mono border border-[#22242f]">
                              #{globalIdx} • {q.category}
                            </span>
                            <span className={`text-[10px] font-bold ${
                              q.difficulty === 'Hard' ? 'text-rose-400' : q.difficulty === 'Medium' ? 'text-[#e5a93c]' : 'text-emerald-400'
                            }`}>
                              {q.difficulty}
                            </span>
                          </div>

                          <p className="text-xs font-semibold leading-relaxed line-clamp-2">
                            {q.question}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {totalPages > 1 && (
                    <div className="pt-3 border-t border-[#22242f] flex items-center justify-between gap-2 mt-auto">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-2.5 py-1 text-xs rounded-lg bg-[#14151b] border border-[#22242f] text-zinc-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      >
                        Prev
                      </button>
                      <span className="text-[11px] text-zinc-400 font-mono">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-2.5 py-1 text-xs rounded-lg bg-[#14151b] border border-[#22242f] text-zinc-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Answer & AI Evaluation Workspace */}
            <div className="lg:col-span-7 bg-[#111217] border border-[#22242f] rounded-2xl p-5 flex flex-col gap-5">
              {!activeQuestion ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-zinc-400 space-y-4">
                  <div className="p-4 rounded-2xl bg-[#0a0b0e] border border-[#22242f] shadow-inner">
                    <Building2 className="w-12 h-12 text-[#e5a93c]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Select a Question to Start Technical Practice</h3>
                  <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
                    Practice answering real interview questions from {selectedCompany.name}. Use voice speech-to-text or typing to explain your hardware design rationale, see key concepts, and receive instant AI evaluation!
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Active Question Box */}
                  <div 
                    className="p-4 rounded-2xl bg-[#0a0b0e] border border-[#22242f] space-y-3 select-none no-copy protected-question"
                    onCopy={handlePreventCopy}
                    onCut={handlePreventCopy}
                    onContextMenu={handlePreventCopy}
                    onDragStart={handlePreventCopy}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#e5a93c] font-mono font-bold flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        {selectedCompany.name} Question
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 hidden sm:inline-block">
                          Copy-Protected
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#14151b] text-zinc-300 border border-[#22242f] font-semibold text-[10px]">
                          {activeQuestion.category} • {activeQuestion.difficulty}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug select-none protected-question">
                      {activeQuestion.question}
                    </h3>

                    {/* Expected Key Points */}
                    <div className="pt-2 border-t border-[#181920] space-y-1.5 select-none">
                      <span className="text-[11px] text-[#e5a93c] font-bold flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5 text-[#e5a93c]" />
                        Key Hardware Concepts to Include:
                      </span>
                      <div className="flex flex-wrap gap-1.5 select-none">
                        {activeQuestion.keyPoints.map((kp, kIdx) => (
                          <span key={kIdx} className="text-[10px] px-2 py-0.5 rounded bg-[#e5a93c]/10 text-[#e5a93c] border border-[#e5a93c]/25 font-medium select-none protected-question">
                            ✓ {kp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Candidate Response Box */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                        <span>Your Technical Response</span>
                        <span className="text-[10px] text-zinc-400 font-normal">(Speak or Type)</span>
                      </label>

                      {/* Speech Recognition Voice Button */}
                      <button
                        onClick={toggleRecording}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border cursor-pointer ${
                          isRecording
                            ? 'bg-rose-500 text-white border-rose-400 animate-pulse shadow-lg shadow-rose-500/30'
                            : 'bg-[#14151b] hover:bg-[#181920] text-zinc-200 border-[#22242f]'
                        }`}
                      >
                        {isRecording ? (
                          <>
                            <MicOff className="w-4 h-4 text-white" />
                            <span>Stop Voice ({recordingTime}s)</span>
                          </>
                        ) : (
                          <>
                            <Mic className="w-4 h-4 text-[#e5a93c]" />
                            <span>Speak Answer</span>
                          </>
                        )}
                      </button>
                    </div>

                    {isRecording && (
                      <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300 flex items-center justify-between animate-fadeIn">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                          Listening... Speak clearly about your circuit/architecture design.
                        </span>
                        <span className="font-mono">{recordingTime}s</span>
                      </div>
                    )}

                    <textarea
                      rows={5}
                      value={userResponse}
                      onChange={(e) => setUserResponse(e.target.value)}
                      placeholder="Type or speak your answer here... Detail the RTL pipeline, timing margins, DFT scan architecture, or transistor physics..."
                      className="w-full p-3.5 bg-[#0a0b0e] border border-[#22242f] rounded-xl text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#e5a93c] font-mono leading-relaxed resize-none"
                    />

                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          setUserResponse('');
                          setEvaluationResult(null);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#14151b] hover:bg-[#181920] text-zinc-400 hover:text-white text-xs font-medium border border-[#22242f] transition-all cursor-pointer"
                      >
                        Clear
                      </button>

                      <button
                        onClick={handleEvaluateAnswer}
                        disabled={evaluating || !userResponse.trim()}
                        className="px-4 py-2 rounded-lg bg-[#e5a93c] hover:bg-[#d4972e] text-black text-xs font-bold transition-all flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95"
                      >
                        {evaluating ? (
                          <>
                            <RotateCcw className="w-4 h-4 animate-spin text-black" />
                            <span>Evaluating Response...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-black" />
                            <span>Submit & Evaluate Answer</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Evaluation Result Feedback */}
                  {evaluationResult && (
                    <div className="p-4 rounded-2xl bg-[#0a0b0e] border border-[#e5a93c]/50 space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between border-b border-[#181920] pb-2">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-[#e5a93c]" />
                          <span className="text-sm font-bold text-white">AI Technical Evaluator</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/40 font-bold font-mono">
                            Score: {evaluationResult.score}/100
                          </span>
                          <span className="text-xs font-bold text-emerald-400">
                            {evaluationResult.grade}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {evaluationResult.feedback}
                      </p>

                      {/* Concepts Covered vs Missing */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                        <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                          <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Key Concepts Covered
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-zinc-300 space-y-0.5">
                            {evaluationResult.matchedPoints.map((m, idx) => (
                              <li key={idx}>{m}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30">
                          <span className="text-[11px] font-bold text-rose-400 flex items-center gap-1 mb-1">
                            <AlertCircle className="w-3.5 h-3.5" /> High-Impact Concepts to Add
                          </span>
                          {evaluationResult.missingPoints.length > 0 ? (
                            <ul className="list-disc list-inside text-[11px] text-zinc-300 space-y-0.5">
                              {evaluationResult.missingPoints.map((m, idx) => (
                                <li key={idx}>{m}</li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-[10px] text-emerald-400">Excellent! All fundamental points hit.</span>
                          )}
                        </div>
                      </div>

                      {/* Model Benchmark Answer */}
                      <div 
                        className="p-3 rounded-xl bg-[#111217] border border-[#22242f] space-y-1 select-none no-copy protected-question"
                        onCopy={handlePreventCopy}
                        onCut={handlePreventCopy}
                        onContextMenu={handlePreventCopy}
                        onDragStart={handlePreventCopy}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#e5a93c] flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5 text-[#e5a93c]" />
                            Model Answer ({selectedCompany.name} Benchmark):
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">Read-Only</span>
                        </div>
                        <p className="text-xs text-zinc-300 font-mono leading-relaxed select-none protected-question">
                          {activeQuestion.sampleAnswer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Live Timed Mock Interview Simulation */}
      {activeTab === 'mock' && (
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 flex-1 flex flex-col gap-6">
          
          {/* Mock Setup Screen */}
          {mockState === 'idle' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111217] border border-[#22242f] space-y-6 shadow-xl">
              <div className="space-y-2 text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-[#e5a93c]/10 border border-[#e5a93c]/30 flex items-center justify-center mx-auto text-[#e5a93c]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-white">Live VLSI Technical Mock Interview</h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Simulate a high-intensity semiconductor interview round with real-time timers, voice/text answers, dynamic AI scoring, and a final Candidate Placement Assessment Report.
                </p>
              </div>

              {/* Configuration Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {/* 1. Target Company */}
                <div className="p-4 rounded-2xl bg-[#0a0b0e] border border-[#22242f] space-y-2">
                  <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#e5a93c]" />
                    Target Semiconductor Company
                  </label>
                  <select
                    value={mockTargetCompany}
                    onChange={(e) => setMockTargetCompany(e.target.value)}
                    className="w-full p-2.5 bg-[#111217] border border-[#22242f] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value="all">⭐ Full Industry Mix (All Companies & GATE)</option>
                    {COMPANIES.map(comp => (
                      <option key={comp.id} value={comp.id}>
                        {comp.name} ({comp.questionCount} Questions)
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Questions per Round */}
                <div className="p-4 rounded-2xl bg-[#0a0b0e] border border-[#22242f] space-y-2">
                  <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#e5a93c]" />
                    Interview Rounds
                  </label>
                  <select
                    value={mockQuestionCount}
                    onChange={(e) => setMockQuestionCount(parseInt(e.target.value))}
                    className="w-full p-2.5 bg-[#111217] border border-[#22242f] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value={3}>3 Questions (Express Screening - 6 Mins)</option>
                    <option value={5}>5 Questions (Standard Technical Round - 10 Mins)</option>
                    <option value={10}>10 Questions (Comprehensive Principal Round - 20 Mins)</option>
                  </select>
                </div>

                {/* 3. Timer per Question */}
                <div className="p-4 rounded-2xl bg-[#0a0b0e] border border-[#22242f] space-y-2">
                  <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#e5a93c]" />
                    Time Limit per Question
                  </label>
                  <select
                    value={mockTimePerQuestion}
                    onChange={(e) => setMockTimePerQuestion(parseInt(e.target.value))}
                    className="w-full p-2.5 bg-[#111217] border border-[#22242f] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value={90}>90 Seconds (Fast Rapid Fire)</option>
                    <option value={120}>120 Seconds (Standard 2 Mins)</option>
                    <option value={180}>180 Seconds (In-Depth 3 Mins)</option>
                  </select>
                </div>
              </div>

              {/* Start Button */}
              <div className="text-center pt-2">
                <button
                  onClick={startMockInterview}
                  className="px-6 py-3 rounded-lg bg-[#e5a93c] hover:bg-[#d4972e] text-black font-bold text-sm transition-all shadow-sm flex items-center gap-2.5 mx-auto cursor-pointer active:scale-95"
                >
                  <Play className="w-4 h-4 fill-black text-black" />
                  <span>Begin Mock Interview Session</span>
                </button>
              </div>
            </div>
          )}

          {/* Mock In Progress Round Screen */}
          {mockState === 'in_progress' && mockQuestionsList.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111217] border border-[#22242f] space-y-6 shadow-2xl animate-fadeIn">
              {/* Top Progress & Timer Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#22242f]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#e5a93c]/20 border border-[#e5a93c]/40 text-[#e5a93c] text-xs font-bold">
                    Round {currentMockIndex + 1} of {mockQuestionsList.length}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {mockQuestionsList[currentMockIndex].category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 hidden sm:inline-block">
                    Copy-Protected
                  </span>
                </div>

                {/* Live Countdown Timer */}
                <div className={`px-4 py-1.5 rounded-2xl border text-xs font-mono font-bold flex items-center gap-2 ${
                  mockTimeRemaining < 30
                    ? 'bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse'
                    : 'bg-[#0a0b0e] border-[#22242f] text-[#e5a93c]'
                }`}>
                  <Timer className="w-4 h-4" />
                  <span>
                    Time Remaining: {Math.floor(mockTimeRemaining / 60)}:{(mockTimeRemaining % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <div 
                className="p-5 rounded-2xl bg-[#0a0b0e] border border-[#22242f] space-y-2 select-none no-copy protected-question"
                onCopy={handlePreventCopy}
                onCut={handlePreventCopy}
                onContextMenu={handlePreventCopy}
                onDragStart={handlePreventCopy}
              >
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-mono text-[#e5a93c] font-bold uppercase">
                    {mockQuestionsList[currentMockIndex].companyId.toUpperCase()} INTERVIEW
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#14151b] border border-[#22242f] text-zinc-300">
                    {mockQuestionsList[currentMockIndex].difficulty}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed select-none protected-question">
                  {mockQuestionsList[currentMockIndex].question}
                </h3>
              </div>

              {/* Answer Input Area */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-300">Candidate Answer:</span>
                  
                  {/* Voice Button */}
                  <button
                    onClick={toggleRecording}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
                      isRecording
                        ? 'bg-rose-500 text-white border-rose-400 animate-pulse'
                        : 'bg-[#14151b] hover:bg-[#181920] text-zinc-200 border-[#22242f]'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-[#e5a93c]" />}
                    <span>{isRecording ? 'Stop Voice' : 'Speak Answer'}</span>
                  </button>
                </div>

                <textarea
                  rows={6}
                  value={mockAnswerInput}
                  onChange={(e) => setMockAnswerInput(e.target.value)}
                  placeholder="Speak or type your technical answer here... Explain your architecture, RTL logic, timing, or circuit physics..."
                  className="w-full p-4 bg-[#0a0b0e] border border-[#22242f] rounded-2xl text-xs text-white focus:outline-none focus:border-[#e5a93c] font-mono leading-relaxed resize-none placeholder:text-zinc-500"
                />

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-zinc-500">
                    Answer will be submitted to the AI panel for real-time scoring.
                  </span>

                  <button
                    onClick={handleSubmitMockRound}
                    disabled={mockEvaluating}
                    className="px-5 py-2.5 rounded-lg bg-[#e5a93c] hover:bg-[#d4972e] text-black font-bold text-xs flex items-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer active:scale-95"
                  >
                    {mockEvaluating ? (
                      <>
                        <RotateCcw className="w-4 h-4 animate-spin text-black" />
                        <span>Evaluating Round...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit & Next Question</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mock Completed: Full Assessment Scorecard Report */}
          {mockState === 'completed' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111217] border border-[#22242f] space-y-6 shadow-sm animate-fadeIn">
              
              {/* Header Tally */}
              <div className="p-6 rounded-xl bg-[#14151b] border border-[#e5a93c]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div className="space-y-1">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    <h2 className="text-xl font-bold text-white">Mock Interview Assessment Report</h2>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Completed {mockRoundResults.length} Technical Rounds for {mockTargetCompany === 'all' ? 'Semiconductor Placement' : mockTargetCompany.toUpperCase()}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center p-3 rounded-xl bg-[#0a0b0e] border border-[#22242f]">
                    <span className="text-[10px] text-zinc-400 font-mono uppercase block">Overall Score</span>
                    <span className="text-2xl font-black text-[#e5a93c]">{mockAverageScore}/100</span>
                  </div>

                  <div className="text-center p-3 rounded-xl bg-[#0a0b0e] border border-[#22242f]">
                    <span className="text-[10px] text-zinc-400 font-mono uppercase block">Placement Rating</span>
                    <span className="text-xs font-bold text-emerald-400">{mockOverallGrade}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown of Rounds */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#e5a93c]" />
                  <span>Round-by-Round Performance Breakdown</span>
                </h3>

                <div className="space-y-3">
                  {mockRoundResults.map((res, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-2xl bg-[#0a0b0e] border border-[#22242f] space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#181920] pb-2">
                        <span className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#e5a93c]/20 text-[#e5a93c] flex items-center justify-center text-[10px] font-mono">
                            {rIdx + 1}
                          </span>
                          <span>{res.question.category}</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#e5a93c]">
                            {res.score}/100
                          </span>
                          <span className="text-[11px] text-emerald-400 font-semibold">
                            {res.grade}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs font-semibold text-zinc-200">
                        {res.question.question}
                      </p>

                      <div className="p-2.5 rounded-xl bg-[#14151b] border border-[#22242f] text-[11px] text-zinc-300 font-mono">
                        <span className="text-zinc-400 block text-[10px] font-sans font-bold">Your Response:</span>
                        {res.userAnswer}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="p-2 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                          <span className="text-[10px] font-bold text-emerald-400 block">Matched Concepts:</span>
                          <span className="text-[11px] text-zinc-300">{res.matchedPoints.join(', ') || 'General understanding'}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#e5a93c]/10 border border-[#e5a93c]/20">
                          <span className="text-[10px] font-bold text-[#e5a93c] block">Benchmark Insight:</span>
                          <span className="text-[11px] text-zinc-300 line-clamp-2">{res.question.sampleAnswer}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions: Restart or Back to Bank */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#22242f]">
                <button
                  onClick={startMockInterview}
                  className="px-5 py-2.5 rounded-lg bg-[#e5a93c] hover:bg-[#d4972e] text-black font-bold text-xs flex items-center gap-2 shadow-sm cursor-pointer active:scale-95"
                >
                  <RefreshCw className="w-4 h-4 text-black" />
                  <span>Take Another Mock Session</span>
                </button>

                <button
                  onClick={() => setActiveTab('bank')}
                  className="px-6 py-2.5 rounded-xl bg-[#14151b] hover:bg-[#181920] text-zinc-300 hover:text-white font-bold text-xs border border-[#22242f] cursor-pointer"
                >
                  Return to Question Bank
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
