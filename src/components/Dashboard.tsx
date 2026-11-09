import React, { useState, useMemo, useEffect, memo } from 'react';
import { 
  Search, Filter, CheckCircle, Play, Sparkles, BookOpen, Shuffle, 
  LayoutGrid, List, CheckCircle2, Circle, Trophy, Network, Flame, 
  ArrowRight, Cpu, Layers, Zap, Clock, ChevronLeft, ChevronRight,
  Calendar as CalendarIcon, FileText, BarChart2, Star,
  Award, Lock
} from 'lucide-react';
import { Problem, UserProgress, UserProfile } from '../types';
import { TOPIC_METADATA } from '../data/topicMeta';

interface DashboardProps {
  problems: Problem[];
  progress: UserProgress;
  user: UserProfile;
  onSelectProblem: (problem: Problem) => void;
  onToggleBookmark?: (problemId: string) => void;
  initialTopicFilter?: string;
  onNavigateToVlsiGraph?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = memo(({
  problems,
  progress,
  user,
  onSelectProblem,
  initialTopicFilter = 'all',
  onNavigateToVlsiGraph
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopicFilter);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'solved' | 'unsolved'>('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 50;

  // Filter problems
  const filteredProblems = useMemo(() => {
    return problems.filter(p => {
      // Topic filter
      if (selectedTopic !== 'all' && p.topic !== selectedTopic) return false;

      // Track filter matching (only restrict when viewing All topics, so topic tabs show all problems)
      if (selectedTopic === 'all' && user.selectedTrack !== 'both') {
        if (p.track !== 'both' && p.track !== user.selectedTrack) return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && p.difficulty !== selectedDifficulty) return false;

      // Solved filter
      const isSolved = progress.solvedProblemIds.includes(p.id);
      if (statusFilter === 'solved' && !isSolved) return false;
      if (statusFilter === 'unsolved' && isSolved) return false;

      // Search query
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchTags = p.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchTags) return false;
      }

      return true;
    });
  }, [problems, progress, user, selectedTopic, selectedDifficulty, statusFilter, searchQuery]);

  // Reset pagination on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTopic, selectedDifficulty, statusFilter, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProblems.length / pageSize));
  const paginatedProblems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredProblems.slice(startIndex, startIndex + pageSize);
  }, [filteredProblems, currentPage, pageSize]);

  // Pick Random Problem
  const handlePickRandom = () => {
    if (filteredProblems.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredProblems.length);
    onSelectProblem(filteredProblems[randomIndex]);
  };

  // Acceptance rate based on difficulty & id hash for realistic platform aesthetic
  const getAcceptanceRate = (p: Problem) => {
    let hash = 0;
    for (let i = 0; i < p.id.length; i++) hash += p.id.charCodeAt(i);
    const base = p.difficulty === 'easy' ? 82 : p.difficulty === 'medium' ? 64 : 45;
    const variance = (hash % 15);
    return `${base + variance}.${hash % 9}%`;
  };

  const solvedCount = progress.solvedProblemIds.length;
  const totalCount = problems.length;
  const rawPercent = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0;

  const easyProblems = useMemo(() => problems.filter(p => p.difficulty === 'easy'), [problems]);
  const mediumProblems = useMemo(() => problems.filter(p => p.difficulty === 'medium'), [problems]);
  const hardProblems = useMemo(() => problems.filter(p => p.difficulty === 'hard'), [problems]);

  const easySolved = useMemo(() => easyProblems.filter(p => progress.solvedProblemIds.includes(p.id)).length, [easyProblems, progress.solvedProblemIds]);
  const mediumSolved = useMemo(() => mediumProblems.filter(p => progress.solvedProblemIds.includes(p.id)).length, [mediumProblems, progress.solvedProblemIds]);
  const hardSolved = useMemo(() => hardProblems.filter(p => progress.solvedProblemIds.includes(p.id)).length, [hardProblems, progress.solvedProblemIds]);

  const topicKeys = ['all', ...Object.keys(TOPIC_METADATA)];

  const topicCounts = useMemo(() => {
    const map: Record<string, number> = { all: problems.length };
    for (let i = 0; i < problems.length; i++) {
      const top = problems[i].topic;
      map[top] = (map[top] || 0) + 1;
    }
    return map;
  }, [problems]);

  // Daily Challenge problem (selects a consistent daily problem based on current date)
  const dailyProblem = useMemo(() => {
    if (problems.length === 0) return null;
    const now = new Date();
    const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
    const index = dayOfYear % problems.length;
    return problems[index];
  }, [problems]);

  const isDailySolved = dailyProblem ? progress.solvedProblemIds.includes(dailyProblem.id) : false;

  // Mini calendar days for current month
  const calendarDays = useMemo(() => {
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const currentDay = now.getDate();
    return Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      isToday: i + 1 === currentDay,
      isPast: i + 1 < currentDay,
      hasPracticed: (i + 1 <= currentDay && (progress.streakDays > 0 ? (currentDay - (i + 1)) < progress.streakDays : false))
    }));
  }, [progress.streakDays]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-[#eff1f6] font-sans">
      
      {/* Sign In Required Banner for Unauthenticated / Guest Users */}
      {user.isGuest && (
        <div className="mb-6 p-4 rounded-xl bg-[#191a21] border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#e5a93c] shrink-0 font-bold">
              <Lock className="w-5 h-5 text-[#e5a93c]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Sign In Required to Open Problems</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">LOCKED</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Problems only open after signing in. Sign in with Google or your account credentials to access EDA simulators, waveforms, and testbenches.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              if (problems.length > 0) onSelectProblem(problems[0]);
            }}
            className="px-4 py-2 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#111215] font-bold text-xs shrink-0 cursor-pointer transition-colors shadow-sm"
          >
            Sign In to Unlock Problems
          </button>
        </div>
      )}

      {/* 1. TOP STUDY PLAN BANNERS CAROUSEL */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-3.5">
        
        {/* Card 1: Top Interview 150 */}
        <div 
          onClick={() => setSelectedTopic('verilog')}
          className="p-4 rounded-xl bg-[#282828] hover:bg-[#303030] border border-[#383838] hover:border-[#484848] transition-all cursor-pointer group flex items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#3e3e3e] flex items-center justify-center text-[#FFA116] shrink-0 font-bold text-sm">
              <Trophy className="w-6 h-6 text-[#FFA116]" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#FFA116] font-bold uppercase tracking-wider">
                Must-Do Study Plan
              </div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#FFA116] transition-colors">
                Top Interview 150
              </h3>
              <p className="text-[11px] text-[#9e9e9e] mt-0.5 line-clamp-1">
                Verilog HDL, FSMs & Sequential Logic
              </p>
            </div>
          </div>
          <button className="px-3 py-1 rounded bg-[#383838] group-hover:bg-[#FFA116] group-hover:text-black text-xs font-semibold text-white transition-colors shrink-0">
            Start
          </button>
        </div>

        {/* Card 2: VLSI Expert 75 (FPGA) */}
        <div 
          onClick={() => setSelectedTopic('fpga')}
          className="p-4 rounded-xl bg-[#282828] hover:bg-[#303030] border border-[#383838] hover:border-[#484848] transition-all cursor-pointer group flex items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#3e3e3e] flex items-center justify-center text-[#00b8a3] shrink-0 font-bold text-sm">
              <Layers className="w-6 h-6 text-[#00b8a3]" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#00b8a3] font-bold uppercase tracking-wider">
                Architecture Ace
              </div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#00b8a3] transition-colors">
                VLSI Expert 75 (FPGA)
              </h3>
              <p className="text-[11px] text-[#9e9e9e] mt-0.5 line-clamp-1">
                BRAM FIFOs, AXI4 & DSP48 Pipelines
              </p>
            </div>
          </div>
          <button className="px-3 py-1 rounded bg-[#383838] group-hover:bg-[#00b8a3] group-hover:text-black text-xs font-semibold text-white transition-colors shrink-0">
            Start
          </button>
        </div>

        {/* Card 3: VLSI Graph Theory & EDA Algorithms */}
        <div 
          onClick={() => onNavigateToVlsiGraph ? onNavigateToVlsiGraph() : setSelectedTopic('vlsi_graph')}
          className="p-4 rounded-xl bg-[#282828] hover:bg-[#303030] border border-[#383838] hover:border-[#484848] transition-all cursor-pointer group flex items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#3e3e3e] flex items-center justify-center text-[#ff375f] shrink-0 font-bold text-sm">
              <Network className="w-6 h-6 text-[#ff375f]" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#ff375f] font-bold uppercase tracking-wider">
                Algorithms Plan
              </div>
              <h3 className="font-bold text-white text-sm group-hover:text-[#ff375f] transition-colors">
                VLSI Graph Theory
              </h3>
              <p className="text-[11px] text-[#9e9e9e] mt-0.5 line-clamp-1">
                KL Min-Cut, Lee Maze, Steiner Heuristic, OBDD/ROBDD & DFG
              </p>
            </div>
          </div>
          <button className="px-3 py-1 rounded bg-[#383838] group-hover:bg-[#ff375f] group-hover:text-white text-xs font-semibold text-white transition-colors shrink-0">
            Start
          </button>
        </div>

      </div>

      {/* 2. Topic Selector Chips */}
      <div className="mb-5 flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar select-none">
        {topicKeys.map((topicKey) => {
          const isAll = topicKey === 'all';
          const meta = isAll ? null : TOPIC_METADATA[topicKey];
          const isSelected = selectedTopic === topicKey;
          const count = topicCounts[topicKey] || 0;

          return (
            <button
              key={topicKey}
              onClick={() => setSelectedTopic(topicKey)}
              className={`h-7 px-3 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 select-none cursor-pointer shrink-0 ${
                isSelected
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-[#282828] hover:bg-[#333333] text-[#eff1f6]'
              }`}
            >
              <span>{isAll ? 'All Topics' : meta?.name}</span>
              <span className={`text-[10px] font-mono ${isSelected ? 'text-slate-600 font-bold' : 'text-[#8a8a8a]'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Search and Filter Controls */}
      <div className="mb-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Left Side: Filter inputs */}
        <div className="flex flex-wrap items-center gap-2 flex-1">
          {/* Difficulty Dropdown */}
          <div className="h-8 bg-[#282828] rounded-md px-2.5 flex items-center border border-transparent hover:border-[#383838] transition-colors">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-transparent text-xs text-[#eff1f6] focus:outline-none cursor-pointer pr-1"
            >
              <option value="all" className="bg-[#282828]">Difficulty</option>
              <option value="easy" className="bg-[#282828] text-[#00b8a3]">Easy</option>
              <option value="medium" className="bg-[#282828] text-[#ffc01e]">Medium</option>
              <option value="hard" className="bg-[#282828] text-[#ff375f]">Hard</option>
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="h-8 bg-[#282828] rounded-md px-2.5 flex items-center border border-transparent hover:border-[#383838] transition-colors">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="bg-transparent text-xs text-[#eff1f6] focus:outline-none cursor-pointer pr-1"
            >
              <option value="all" className="bg-[#282828]">Status</option>
              <option value="unsolved" className="bg-[#282828]">Todo</option>
              <option value="solved" className="bg-[#282828]">Solved</option>
            </select>
          </div>

          {/* Search Box */}
          <div className="relative flex items-center min-w-[200px] flex-1 sm:flex-initial">
            <Search className="w-3.5 h-3.5 text-[#8a8a8a] absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions"
              className="h-8 w-full pl-8 pr-3 bg-[#282828] rounded-md text-xs text-[#eff1f6] placeholder-[#8a8a8a] focus:outline-none focus:ring-1 focus:ring-[#555] transition-colors"
            />
          </div>
        </div>

        {/* Right Side: Pick One & View Toggle */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          {/* Pick Random Problem button */}
          <button
            onClick={handlePickRandom}
            disabled={filteredProblems.length === 0}
            className="h-8 px-3 rounded-md bg-[#282828] hover:bg-[#333333] text-[#00b8a3] hover:text-[#00c9b2] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer select-none"
            title="Pick a random problem to solve"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#00b8a3]" />
            <span>Pick One</span>
          </button>

          {/* Layout Switcher */}
          <div className="h-8 flex items-center p-0.5 bg-[#282828] rounded-md gap-0.5">
            <button
              onClick={() => setViewMode('table')}
              className={`h-7 px-2 rounded transition-colors flex items-center justify-center cursor-pointer ${
                viewMode === 'table' ? 'bg-[#3e3e3e] text-white' : 'text-[#8a8a8a] hover:text-white'
              }`}
              title="Table View (VLSI Expert)"
            >
              <List className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`h-7 px-2 rounded transition-colors flex items-center justify-center cursor-pointer ${
                viewMode === 'cards' ? 'bg-[#3e3e3e] text-white' : 'text-[#8a8a8a] hover:text-white'
              }`}
              title="Grid Cards View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Main Two-Column Content (Problem Table + Right Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Problem Table (Span 8 or 9) */}
        <div className="lg:col-span-8 xl:col-span-9">
          {filteredProblems.length === 0 ? (
            <div className="p-12 text-center rounded-xl bg-[#282828] border border-[#383838] my-4">
              <BookOpen className="w-10 h-10 text-[#8a8a8a] mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-1">No Matching Problems Found</h3>
              <p className="text-xs text-[#9e9e9e] max-w-md mx-auto">
                Try clearing your search query or adjusting your topic filters.
              </p>
            </div>
          ) : viewMode === 'table' ? (
            
            /* Professional Table */
            <div className="overflow-x-auto rounded-lg bg-[#1a1a1a] border border-[#2e2e2e]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#2e2e2e] bg-[#222222] text-[#8a8a8a] font-medium text-[11px]">
                    <th className="py-2.5 px-3 w-10 text-center">Status</th>
                    <th className="py-2.5 px-3">Title</th>
                    <th className="py-2.5 px-3 w-28 text-center">Solution</th>
                    <th className="py-2.5 px-3 w-24 text-center">Acceptance</th>
                    <th className="py-2.5 px-3 w-24">Difficulty</th>
                    <th className="py-2.5 px-3 w-24 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedProblems.map((p, idx) => {
                    const isSolved = progress.solvedProblemIds.includes(p.id);
                    const meta = TOPIC_METADATA[p.topic];
                    const isEven = idx % 2 === 0;

                    const diffColor = 
                      p.difficulty === 'easy' ? 'text-[#00b8a3]' :
                      p.difficulty === 'medium' ? 'text-[#ffc01e]' :
                      'text-[#ff375f]';

                    return (
                      <tr 
                        key={p.id}
                        onClick={() => onSelectProblem(p)}
                        className={`border-b border-[#262626] transition-colors cursor-pointer group ${
                          isEven ? 'bg-[#1a1a1a]' : 'bg-[#1e1e1e]'
                        } hover:bg-[#2c2c2c]`}
                      >
                        {/* Status Icon */}
                        <td className="py-2.5 px-3 text-center">
                          {isSolved ? (
                            <CheckCircle2 className="w-4 h-4 text-[#00b8a3] mx-auto" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-[#3a3a3a] mx-auto group-hover:text-[#666] transition-colors" />
                          )}
                        </td>

                        {/* Problem Title & Category Tags */}
                        <td className="py-2.5 px-3">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-[#eff1f6] group-hover:text-[#00b8a3] transition-colors">
                              {((currentPage - 1) * pageSize) + idx + 1}. {p.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[10px] text-[#8a8a8a] font-mono">
                              {meta?.name || p.topic}
                            </span>
                            {p.tags.slice(0, 2).map((t, ti) => (
                              <span key={ti} className="text-[9px] text-[#6e6e6e] font-mono">
                                • {t}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Solution Column */}
                        <td className="py-2.5 px-3 text-center">
                          <div className="inline-flex items-center justify-center text-[#8a8a8a] group-hover:text-[#FFA116]" title="Editorial & Testbench Guide">
                            <FileText className="w-3.5 h-3.5" />
                          </div>
                        </td>

                        {/* Acceptance Rate */}
                        <td className="py-2.5 px-3 text-center font-mono text-[#8a8a8a] text-xs">
                          {getAcceptanceRate(p)}
                        </td>

                        {/* Difficulty Indicators */}
                        <td className="py-2.5 px-3">
                          <span className={`text-xs font-semibold capitalize ${diffColor}`}>
                            {p.difficulty}
                          </span>
                        </td>

                        {/* Action / Solve Button */}
                        <td className="py-2.5 px-3 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProblem(p);
                            }}
                            className={`h-6 px-2.5 rounded text-[11px] font-bold transition-all ml-auto flex items-center gap-1 cursor-pointer ${
                              user.isGuest
                                ? 'bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-500/30'
                                : isSolved
                                ? 'bg-[#282828] text-[#9e9e9e] hover:text-white hover:bg-[#333]'
                                : 'bg-[#00b8a3]/20 hover:bg-[#00b8a3] text-[#00b8a3] hover:text-black'
                            }`}
                          >
                            {user.isGuest ? (
                              <>
                                <Lock className="w-2.5 h-2.5 shrink-0" />
                                <span>Sign In</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-2.5 h-2.5 fill-current" />
                                <span>{isSolved ? 'Review' : 'Solve'}</span>
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            
            /* CARDS GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {paginatedProblems.map((p, idx) => {
                const isSolved = progress.solvedProblemIds.includes(p.id);
                const meta = TOPIC_METADATA[p.topic];

                const diffColor = 
                  p.difficulty === 'easy' ? 'text-[#00b8a3] bg-[#00b8a3]/10 border-[#00b8a3]/30' :
                  p.difficulty === 'medium' ? 'text-[#ffc01e] bg-[#ffc01e]/10 border-[#ffc01e]/30' :
                  'text-[#ff375f] bg-[#ff375f]/10 border-[#ff375f]/30';

                return (
                  <div
                    key={p.id}
                    onClick={() => onSelectProblem(p)}
                    className="p-4 rounded-xl bg-[#282828] hover:bg-[#303030] border border-[#383838] transition-all flex flex-col justify-between cursor-pointer group shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold text-[#FFA116] uppercase">
                          {meta?.name || p.topic}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border capitalize ${diffColor}`}>
                          {p.difficulty}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm text-white group-hover:text-[#FFA116] transition-colors flex items-center justify-between gap-2">
                        <span className="line-clamp-1">{p.title}</span>
                        {isSolved && <CheckCircle2 className="w-4 h-4 text-[#00b8a3] shrink-0" />}
                      </h3>
                      <p className="text-xs text-[#9e9e9e] line-clamp-2 mt-1 leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[#383838] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#8a8a8a]">
                        Acceptance: {getAcceptanceRate(p)}
                      </span>
                      <button className="px-2.5 py-1 rounded bg-[#383838] group-hover:bg-[#FFA116] group-hover:text-black text-xs font-bold text-white transition-colors flex items-center gap-1">
                        {user.isGuest ? (
                          <>
                            <Lock className="w-3 h-3" />
                            <span>Sign In</span>
                          </>
                        ) : (
                          <span>{isSolved ? 'Review' : 'Solve'}</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Bar */}
          {filteredProblems.length > 0 && totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 py-3 border-t border-[#2e2e2e]">
              <div className="text-xs text-[#8a8a8a] font-mono">
                Showing <strong className="text-white">{(currentPage - 1) * pageSize + 1}</strong> - <strong className="text-white">{Math.min(currentPage * pageSize, filteredProblems.length)}</strong> of <strong className="text-white">{filteredProblems.length}</strong> problems
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="h-7 px-2.5 rounded bg-[#282828] hover:bg-[#333333] disabled:opacity-30 disabled:pointer-events-none text-xs text-white border border-[#383838] flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                {/* Page pills */}
                <div className="px-3 py-1 rounded bg-[#282828] border border-[#383838] text-xs font-mono text-white">
                  Page <strong className="text-[#FFA116]">{currentPage}</strong> / {totalPages}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="h-7 px-2.5 rounded bg-[#282828] hover:bg-[#333333] disabled:opacity-30 disabled:pointer-events-none text-xs text-white border border-[#383838] flex items-center gap-1 cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sidebar Widgets (Session Progress, Calendar & Companies) */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-4">
          
          {/* 1. Session Progress Donut Card */}
          <div className="p-4 rounded-xl bg-[#282828] border border-[#383838] shadow-sm">
            <div className="text-xs font-bold text-white flex items-center justify-between mb-3">
              <span>Session Progress</span>
              <span className="text-[10px] text-[#FFA116] font-mono">
                {rawPercent.toFixed(1)}% Completed
              </span>
            </div>

            <div className="flex items-center gap-4 pb-3 border-b border-[#383838]">
              {/* Circular Gauge */}
              <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-[#1a1a1a]"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#FFA116]"
                    strokeDasharray={`${rawPercent}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-sm font-black text-white font-mono block leading-none">{solvedCount}</span>
                  <span className="text-[9px] text-[#8a8a8a] font-mono uppercase">Solved</span>
                </div>
              </div>

              {/* Solved breakdown */}
              <div className="space-y-1.5 flex-1 text-xs">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-[11px] mb-0.5">
                    <span className="text-[#00b8a3] font-semibold">Easy</span>
                    <span className="font-mono text-[#8a8a8a]">{easySolved}/{easyProblems.length}</span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#00b8a3] h-full"
                      style={{ width: `${easyProblems.length > 0 ? (easySolved / easyProblems.length) * 100 : 0}%` }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between text-[11px] mb-0.5">
                    <span className="text-[#ffc01e] font-semibold">Med.</span>
                    <span className="font-mono text-[#8a8a8a]">{mediumSolved}/{mediumProblems.length}</span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#ffc01e] h-full"
                      style={{ width: `${mediumProblems.length > 0 ? (mediumSolved / mediumProblems.length) * 100 : 0}%` }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between text-[11px] mb-0.5">
                    <span className="text-[#ff375f] font-semibold">Hard</span>
                    <span className="font-mono text-[#8a8a8a]">{hardSolved}/{hardProblems.length}</span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#ff375f] h-full"
                      style={{ width: `${hardProblems.length > 0 ? (hardSolved / hardProblems.length) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#8a8a8a] flex items-center justify-between">
              <span>Day Streak</span>
              <span className="text-[#FFA116] font-bold flex items-center gap-1 font-mono">
                <Flame className="w-3.5 h-3.5 fill-current" />
                {progress.streakDays} Days
              </span>
            </div>
          </div>

          {/* 2. Calendar & Daily Challenge Widget */}
          <div className="p-4 rounded-xl bg-[#282828] border border-[#383838] shadow-sm">
            <div className="text-xs font-bold text-white flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-[#FFA116]" />
                Daily Challenge
              </span>
              <span className="text-[10px] text-[#8a8a8a] font-mono">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>

            {/* Daily problem callout */}
            {dailyProblem && (
              <div 
                onClick={() => onSelectProblem(dailyProblem)}
                className="p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#222] border border-[#3e3e3e] transition-all cursor-pointer group mb-3"
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-[#FFA116] font-bold">Today's Pick</span>
                  <span className={`capitalize font-bold ${
                    dailyProblem.difficulty === 'easy' ? 'text-[#00b8a3]' :
                    dailyProblem.difficulty === 'medium' ? 'text-[#ffc01e]' :
                    'text-[#ff375f]'
                  }`}>
                    {dailyProblem.difficulty}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-[#FFA116] transition-colors truncate">
                  {dailyProblem.title}
                </h4>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className="text-[#8a8a8a] text-[10px]">{dailyProblem.topic}</span>
                  <button className="px-2 py-0.5 rounded bg-[#00b8a3] text-black text-[10px] font-bold">
                    {isDailySolved ? 'Solved ✓' : 'Solve Now'}
                  </button>
                </div>
              </div>
            )}

            {/* Mini Calendar Dots */}
            <div className="pt-2 border-t border-[#383838]">
              <div className="text-[10px] text-[#8a8a8a] mb-2 font-mono flex items-center justify-between">
                <span>Month Activity Grid</span>
                <span className="text-[#00b8a3] font-bold">{progress.streakDays > 0 ? 'Active' : 'Ready'}</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {calendarDays.slice(0, 28).map((d) => (
                  <div 
                    key={d.day}
                    className={`h-5 w-5 rounded flex items-center justify-center text-[9px] font-mono mx-auto ${
                      d.isToday 
                        ? 'bg-[#FFA116] text-black font-bold'
                        : d.hasPracticed
                        ? 'bg-[#00b8a3] text-black font-bold'
                        : 'bg-[#1a1a1a] text-[#666]'
                    }`}
                  >
                    {d.day}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
});

Dashboard.displayName = 'Dashboard';
