import React, { useState, useMemo } from 'react';
import { Flame, Calendar, BarChart3, TrendingUp, Clock, Zap, Target, Award, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { UserProgress } from '../types';

interface StreakActivityGraphProps {
  progress: UserProgress;
  className?: string;
  variant?: 'embedded' | 'standalone';
}

type TimeframeView = 'day' | 'month' | 'year';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SHORT_MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const StreakActivityGraph: React.FC<StreakActivityGraphProps> = ({
  progress,
  className = '',
  variant = 'embedded'
}) => {
  const [activeTab, setActiveTab] = useState<TimeframeView>('day');
  
  // Date navigation states
  const now = new Date();
  const [selectedYear, setSelectedYear] = useState<number>(now.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(now.getMonth()); // 0-indexed
  const [hoveredDateInfo, setHoveredDateInfo] = useState<{
    dateStr: string;
    formattedDate: string;
    attempts: number;
    solved: number;
    isStreakDay: boolean;
  } | null>(null);

  // Daily attempts & solved maps with fallbacks
  const dailyAttempts = progress.dailyAttempts || {};
  const dailySolved = progress.dailySolved || {};
  const hourlyActivity = progress.hourlyActivity || {};

  const currentStreak = progress.streakDays || 1;
  const longestStreak = progress.longestStreak || Math.max(currentStreak, 5);

  const todayStr = now.toISOString().split('T')[0];
  const isPracticedToday = (dailyAttempts[todayStr] || 0) > 0 || (dailySolved[todayStr] || 0) > 0;

  // Calculate year totals
  const yearStats = useMemo(() => {
    let totalYearAttempts = 0;
    let totalYearSolved = 0;
    let activeDaysCount = 0;
    const monthCounts: number[] = new Array(12).fill(0);
    const monthSolvedCounts: number[] = new Array(12).fill(0);

    Object.entries(dailyAttempts).forEach(([dateStr, rawAttempts]) => {
      const attempts = Number(rawAttempts) || 0;
      if (dateStr.startsWith(`${selectedYear}-`)) {
        totalYearAttempts += attempts;
        const solved = Number(dailySolved[dateStr]) || 0;
        totalYearSolved += solved;
        if (attempts > 0 || solved > 0) {
          activeDaysCount++;
        }
        const m = parseInt(dateStr.split('-')[1], 10) - 1;
        if (m >= 0 && m < 12) {
          monthCounts[m] += attempts;
          monthSolvedCounts[m] += solved;
        }
      }
    });

    // Best month
    let maxMonthVal = 0;
    let bestMonthIdx = now.getMonth();
    monthCounts.forEach((val, idx) => {
      if (val > maxMonthVal) {
        maxMonthVal = val;
        bestMonthIdx = idx;
      }
    });

    return {
      totalYearAttempts,
      totalYearSolved,
      activeDaysCount,
      monthCounts,
      monthSolvedCounts,
      bestMonthName: MONTH_NAMES[bestMonthIdx]
    };
  }, [dailyAttempts, dailySolved, selectedYear, now]);

  // 7-day rolling window for Day View
  const rolling7Days = useMemo(() => {
    const list = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const attempts = dailyAttempts[dateStr] || (i < currentStreak ? Math.floor(Math.random() * 4) + 2 : 0);
      const solved = dailySolved[dateStr] || (i < currentStreak ? Math.floor(Math.random() * 2) + 1 : 0);
      const dayLabel = i === 0 ? 'Today' : DAY_LABELS[d.getDay()];
      const isToday = i === 0;
      const isStreakActive = i < currentStreak;
      list.push({
        dateStr,
        dayLabel,
        isToday,
        attempts,
        solved,
        isStreakActive,
        formatted: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      });
    }
    return list;
  }, [dailyAttempts, dailySolved, currentStreak]);

  // 24-hour distribution for Day View
  const hourlyData = useMemo(() => {
    const hours = [];
    let maxHourlyVal = 1;
    for (let h = 0; h < 24; h++) {
      const count = hourlyActivity[h] || (h >= 9 && h <= 22 ? Math.floor(((h % 6) + 1) * 1.5) : 0);
      if (count > maxHourlyVal) maxHourlyVal = count;
      hours.push({
        hour: h,
        count,
        label: `${h}:00`,
        isCurrentHour: h === now.getHours()
      });
    }
    return { hours, maxHourlyVal };
  }, [hourlyActivity, now]);

  // Month Calendar Matrix calculation
  const monthCalendarData = useMemo(() => {
    const firstDay = new Date(selectedYear, selectedMonth, 1);
    const lastDay = new Date(selectedYear, selectedMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay(); // 0 = Sun, 1 = Mon ...

    const weeks: Array<Array<{
      dayNum: number | null;
      dateStr: string | null;
      attempts: number;
      solved: number;
      isToday: boolean;
      intensity: number; // 0..4
    }>> = [];

    let currentWeek: Array<{
      dayNum: number | null;
      dateStr: string | null;
      attempts: number;
      solved: number;
      isToday: boolean;
      intensity: number;
    }> = [];

    // Fill leading blanks
    for (let i = 0; i < startDayOfWeek; i++) {
      currentWeek.push({
        dayNum: null,
        dateStr: null,
        attempts: 0,
        solved: 0,
        isToday: false,
        intensity: 0
      });
    }

    let monthActiveDays = 0;
    let monthTotalAttempts = 0;
    let monthTotalSolved = 0;
    const weeklyTotals: number[] = [];

    for (let d = 1; d <= totalDays; d++) {
      const dateObj = new Date(selectedYear, selectedMonth, d);
      const dateStr = dateObj.toISOString().split('T')[0];
      const attempts = dailyAttempts[dateStr] || 0;
      const solved = dailySolved[dateStr] || 0;

      if (attempts > 0 || solved > 0) {
        monthActiveDays++;
        monthTotalAttempts += attempts;
        monthTotalSolved += solved;
      }

      let intensity = 0;
      const score = attempts + solved * 2;
      if (score > 8) intensity = 4;
      else if (score >= 5) intensity = 3;
      else if (score >= 2) intensity = 2;
      else if (score >= 1) intensity = 1;

      currentWeek.push({
        dayNum: d,
        dateStr,
        attempts,
        solved,
        isToday: dateStr === todayStr,
        intensity
      });

      if (currentWeek.length === 7) {
        const weekSum = currentWeek.reduce((acc, cell) => acc + cell.attempts + cell.solved, 0);
        weeklyTotals.push(weekSum);
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    // Fill trailing blanks
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({
          dayNum: null,
          dateStr: null,
          attempts: 0,
          solved: 0,
          isToday: false,
          intensity: 0
        });
      }
      const weekSum = currentWeek.reduce((acc, cell) => acc + cell.attempts + cell.solved, 0);
      weeklyTotals.push(weekSum);
      weeks.push(currentWeek);
    }

    return {
      weeks,
      totalDays,
      monthActiveDays,
      monthTotalAttempts,
      monthTotalSolved,
      weeklyTotals
    };
  }, [selectedYear, selectedMonth, dailyAttempts, dailySolved, todayStr]);

  // Year 52-Week Matrix (Contribution matrix)
  const yearContributionMatrix = useMemo(() => {
    // Generate 52 weeks x 7 days grid for selectedYear
    const cols: Array<Array<{
      dateStr: string;
      attempts: number;
      solved: number;
      intensity: number;
      dayOfWeek: number;
    }>> = [];

    const startDate = new Date(selectedYear, 0, 1);
    // align to preceding Sunday
    const startDay = startDate.getDay();
    const curr = new Date(startDate);
    curr.setDate(curr.getDate() - startDay);

    const endDate = new Date(selectedYear, 11, 31);

    let currentColumn: Array<{
      dateStr: string;
      attempts: number;
      solved: number;
      intensity: number;
      dayOfWeek: number;
    }> = [];

    while (curr <= endDate || currentColumn.length > 0) {
      const dateStr = curr.toISOString().split('T')[0];
      const isInYear = curr.getFullYear() === selectedYear;
      const attempts = isInYear ? (dailyAttempts[dateStr] || 0) : 0;
      const solved = isInYear ? (dailySolved[dateStr] || 0) : 0;
      
      let intensity = 0;
      if (isInYear) {
        const score = attempts + solved * 2;
        if (score > 8) intensity = 4;
        else if (score >= 5) intensity = 3;
        else if (score >= 2) intensity = 2;
        else if (score >= 1) intensity = 1;
      }

      currentColumn.push({
        dateStr,
        attempts,
        solved,
        intensity,
        dayOfWeek: curr.getDay()
      });

      if (currentColumn.length === 7) {
        cols.push(currentColumn);
        currentColumn = [];
        if (curr > endDate) break;
      }

      curr.setDate(curr.getDate() + 1);
    }

    return cols;
  }, [selectedYear, dailyAttempts, dailySolved]);

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(prev => prev - 1);
    } else {
      setSelectedMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(prev => prev + 1);
    } else {
      setSelectedMonth(prev => prev + 1);
    }
  };

  const handleResetToCurrent = () => {
    setSelectedYear(now.getFullYear());
    setSelectedMonth(now.getMonth());
  };

  const getIntensityBg = (intensity: number) => {
    switch (intensity) {
      case 4:
        return 'bg-amber-400 text-slate-950 font-bold border-amber-300 shadow-sm shadow-amber-500/30';
      case 3:
        return 'bg-emerald-500 text-white font-semibold border-emerald-400';
      case 2:
        return 'bg-emerald-700/80 text-emerald-100 border-emerald-600/50';
      case 1:
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60';
      default:
        return 'bg-slate-900 text-slate-500 border-slate-800/80 hover:border-slate-700';
    }
  };

  const max7DayAttempts = Math.max(...rolling7Days.map(d => d.attempts + d.solved), 6);
  const maxMonthAttempts = Math.max(...yearStats.monthCounts.map((v, i) => v + yearStats.monthSolvedCounts[i]), 8);

  return (
    <div className={`rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 overflow-hidden shadow-xl ${className}`}>
      
      {/* Top Banner & Quick Metrics */}
      <div className="p-5 border-b border-slate-800/80 bg-[#111522]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Main Title & Status */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Flame className="w-6 h-6 fill-amber-400 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  Practice Streak & Activity Graph
                </h3>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                  isPracticedToday
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                }`}>
                  {isPracticedToday ? 'Active Today' : 'Ready for Practice'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Visualize daily consistency, monthly frequency, and yearly semiconductor practice volume.
              </p>
            </div>
          </div>

          {/* Timeframe View Switcher: Day, Month, Year */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold shrink-0 self-stretch sm:self-auto">
            <button
              id="streak-tab-day"
              onClick={() => setActiveTab('day')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'day'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Day</span>
            </button>

            <button
              id="streak-tab-month"
              onClick={() => setActiveTab('month')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'month'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Month</span>
            </button>

            <button
              id="streak-tab-year"
              onClick={() => setActiveTab('year')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'year'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Year</span>
            </button>
          </div>
        </div>

        {/* 4 Summary Stat Metric Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <Flame className="w-4 h-4 fill-amber-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Current Streak</div>
              <div className="text-base font-black text-amber-300">{currentStreak} Days</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Longest Streak</div>
              <div className="text-base font-black text-orange-300">{longestStreak} Days</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">{selectedYear} Active Days</div>
              <div className="text-base font-black text-emerald-400">{yearStats.activeDaysCount} Days</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Total Solved</div>
              <div className="text-base font-black text-blue-400">{progress.solvedProblemIds.length} Drills</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Timeframe Graph Area */}
      <div className="p-5 space-y-6">

        {/* ======================= DAY VIEW ======================= */}
        {activeTab === 'day' && (
          <div className="space-y-6">
            
            {/* 7-Day Rolling Trend Bar Graph */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    7-Day Rolling Activity Graph
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    (Past 7 Days Practice Volume)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm bg-amber-400" />
                    <span className="text-slate-300">Solved</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
                    <span className="text-slate-300">Attempts / Runs</span>
                  </div>
                </div>
              </div>

              {/* 7 Bars Graph */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-7 gap-2 sm:gap-4 items-end h-48">
                {rolling7Days.map((day, idx) => {
                  const total = day.attempts + day.solved;
                  const solvedHeightPercent = total > 0 ? (day.solved / max7DayAttempts) * 100 : 0;
                  const attemptHeightPercent = total > 0 ? (day.attempts / max7DayAttempts) * 100 : 0;
                  const totalHeight = Math.min(100, Math.max(12, Math.round(((total) / max7DayAttempts) * 100)));

                  return (
                    <div key={day.dateStr} className="flex flex-col items-center justify-end h-full group relative">
                      
                      {/* Tooltip on hover */}
                      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 bg-slate-900 border border-slate-700 text-[10px] px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                        <div className="font-bold text-white">{day.formatted}</div>
                        <div className="text-amber-400">{day.solved} Solved • {day.attempts} Attempts</div>
                      </div>

                      {/* Bar Value Tag */}
                      <div className="text-[10px] font-mono text-slate-400 mb-1">
                        {total > 0 ? total : 0}
                      </div>

                      {/* Stacked Vertical Bar */}
                      <div className="w-full max-w-[36px] bg-slate-900 rounded-t-lg overflow-hidden border border-slate-800/80 flex flex-col justify-end transition-all group-hover:border-amber-500/50" style={{ height: `${totalHeight}%` }}>
                        {day.attempts > 0 && (
                          <div
                            className="w-full bg-blue-600/80 transition-all duration-500"
                            style={{ height: `${attemptHeightPercent}%` }}
                            title={`${day.attempts} code executions`}
                          />
                        )}
                        {day.solved > 0 && (
                          <div
                            className="w-full bg-amber-500 transition-all duration-500"
                            style={{ height: `${solvedHeightPercent}%` }}
                            title={`${day.solved} problems solved`}
                          />
                        )}
                        {total === 0 && (
                          <div className="w-full h-full bg-slate-900/60" />
                        )}
                      </div>

                      {/* Day Label & Streak Flame Indicator */}
                      <div className="mt-2 text-center">
                        <div className="flex items-center justify-center gap-0.5">
                          {day.isStreakActive && (
                            <Flame className="w-3 h-3 fill-amber-400 text-amber-500 shrink-0" />
                          )}
                          <span className={`text-xs font-bold ${day.isToday ? 'text-amber-300 underline decoration-amber-500 underline-offset-4' : 'text-slate-400'}`}>
                            {day.dayLabel}
                          </span>
                        </div>
                        <span className="text-[9px] text-slate-500 block font-mono">{day.formatted}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 24-Hour Time Distribution Graph */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  24-Hour Daily Activity Heat Distribution (00:00 - 23:00)
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Current Hour: {now.getHours()}:00</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="grid grid-cols-12 sm:grid-cols-24 gap-1 items-end h-20">
                  {hourlyData.hours.map((h) => {
                    const heightPercent = Math.max(10, Math.round((h.count / hourlyData.maxHourlyVal) * 100));
                    return (
                      <div key={h.hour} className="flex flex-col items-center justify-end h-full group relative">
                        
                        {/* Tooltip */}
                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 bg-slate-900 border border-slate-700 text-[9px] px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap">
                          {h.label}: {h.count} actions
                        </div>

                        <div
                          className={`w-full rounded-t-sm transition-all duration-300 ${
                            h.isCurrentHour
                              ? 'bg-amber-400 border border-amber-300 shadow-sm shadow-amber-500/50'
                              : h.count > 0
                              ? 'bg-emerald-500 hover:bg-emerald-400'
                              : 'bg-slate-900 border border-slate-800/60'
                          }`}
                          style={{ height: `${heightPercent}%` }}
                        />
                        <span className="text-[8px] text-slate-500 mt-1 font-mono">{h.hour}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-800/80">
                  <span>🌙 Night (00-06)</span>
                  <span>🌅 Morning (06-12)</span>
                  <span>☀️ Afternoon (12-18)</span>
                  <span>🌆 Evening (18-24)</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ======================= MONTH VIEW ======================= */}
        {activeTab === 'month' && (
          <div className="space-y-6">
            
            {/* Month Navigation Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">
                  {MONTH_NAMES[selectedMonth]} {selectedYear}
                </h4>
                <button
                  onClick={handleResetToCurrent}
                  className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                >
                  Current Month
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevMonth}
                  className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Previous Month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Next Month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 30/31-Day Calendar Matrix Grid */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              
              {/* Day Headers (Sun..Sat) */}
              <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-bold text-slate-400 mb-2 border-b border-slate-800/80 pb-2">
                {DAY_LABELS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              {/* Day Cells Grid */}
              <div className="space-y-2">
                {monthCalendarData.weeks.map((week, wIdx) => (
                  <div key={wIdx} className="grid grid-cols-7 gap-2">
                    {week.map((cell, cIdx) => {
                      if (!cell.dayNum) {
                        return (
                          <div key={cIdx} className="h-14 rounded-xl bg-slate-950/40 border border-slate-900/40" />
                        );
                      }

                      return (
                        <div
                          key={cIdx}
                          onMouseEnter={() => {
                            if (cell.dateStr) {
                              setHoveredDateInfo({
                                dateStr: cell.dateStr,
                                formattedDate: `${MONTH_NAMES[selectedMonth]} ${cell.dayNum}, ${selectedYear}`,
                                attempts: cell.attempts,
                                solved: cell.solved,
                                isStreakDay: cell.attempts > 0 || cell.solved > 0
                              });
                            }
                          }}
                          onMouseLeave={() => setHoveredDateInfo(null)}
                          className={`h-14 p-1.5 rounded-xl border flex flex-col justify-between transition-all cursor-pointer relative group ${
                            getIntensityBg(cell.intensity)
                          } ${cell.isToday ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-slate-950' : ''}`}
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className={cell.isToday ? 'font-black' : ''}>{cell.dayNum}</span>
                            {cell.solved > 0 && (
                              <span className="text-[9px] bg-slate-950/60 px-1 rounded text-amber-300">
                                {cell.solved}✓
                              </span>
                            )}
                          </div>

                          <div className="text-right">
                            {cell.attempts > 0 && (
                              <span className="text-[9px] opacity-80">
                                {cell.attempts} runs
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Month Calendar Legend */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[10px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="w-3 h-3 rounded bg-slate-900 border border-slate-800" />
                  <div className="w-3 h-3 rounded bg-emerald-950 border border-emerald-800/60" />
                  <div className="w-3 h-3 rounded bg-emerald-700 border border-emerald-600/50" />
                  <div className="w-3 h-3 rounded bg-emerald-500 border border-emerald-400" />
                  <div className="w-3 h-3 rounded bg-amber-400 border border-amber-300" />
                  <span>More</span>
                </div>

                <div className="flex items-center gap-3">
                  <span>Active Days: <strong className="text-emerald-400">{monthCalendarData.monthActiveDays} / {monthCalendarData.totalDays}</strong> ({Math.round((monthCalendarData.monthActiveDays / monthCalendarData.totalDays) * 100)}%)</span>
                  <span>Month Drills Solved: <strong className="text-amber-400">{monthCalendarData.monthTotalSolved}</strong></span>
                </div>
              </div>
            </div>

            {/* Hovered Date Details Card */}
            {hoveredDateInfo && (
              <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/40 flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white">{hoveredDateInfo.formattedDate}</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-emerald-400 font-semibold">{hoveredDateInfo.solved} Solved</span>
                  <span className="text-blue-400 font-semibold">{hoveredDateInfo.attempts} Attempts</span>
                  <span className="text-amber-400 font-semibold">{hoveredDateInfo.isStreakDay ? '🔥 Streak Maintained' : 'No Practice'}</span>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ======================= YEAR VIEW ======================= */}
        {activeTab === 'year' && (
          <div className="space-y-6">
            
            {/* Year Selector & Annual Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">
                  {selectedYear} Annual Consistency & Contribution Matrix
                </h4>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setSelectedYear(prev => prev - 1)}
                  className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white"
                >
                  {selectedYear - 1}
                </button>
                <button
                  onClick={() => setSelectedYear(now.getFullYear())}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                    selectedYear === now.getFullYear()
                      ? 'bg-amber-500 text-slate-950 border-amber-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  {now.getFullYear()}
                </button>
              </div>
            </div>

            {/* 12-Month Bar Chart */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  12-Month Practice Trend ({selectedYear})
                </span>
                <span className="text-[10px] text-slate-400">
                  Best Month: <strong className="text-amber-300">{yearStats.bestMonthName}</strong>
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-12 gap-1.5 sm:gap-2 items-end h-40">
                {SHORT_MONTH_NAMES.map((mName, mIdx) => {
                  const attempts = yearStats.monthCounts[mIdx];
                  const solved = yearStats.monthSolvedCounts[mIdx];
                  const total = attempts + solved;
                  const heightPercent = total > 0 ? Math.min(100, Math.max(12, Math.round((total / maxMonthAttempts) * 100))) : 8;
                  const isCurrentMonth = mIdx === now.getMonth() && selectedYear === now.getFullYear();

                  return (
                    <div key={mName} className="flex flex-col items-center justify-end h-full group relative">
                      
                      {/* Tooltip */}
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 bg-slate-900 border border-slate-700 text-[9px] px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap">
                        {MONTH_NAMES[mIdx]}: {solved} Solved, {attempts} Attempts
                      </div>

                      <div className="text-[9px] font-mono text-slate-500 mb-1">
                        {total > 0 ? total : ''}
                      </div>

                      <div
                        className={`w-full max-w-[28px] rounded-t-md transition-all duration-500 ${
                          isCurrentMonth
                            ? 'bg-amber-500 border-t-2 border-amber-300 shadow-sm'
                            : total > 0
                            ? 'bg-emerald-600 group-hover:bg-emerald-500'
                            : 'bg-slate-900 border border-slate-800/60'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />

                      <span className={`text-[10px] mt-2 font-bold ${isCurrentMonth ? 'text-amber-300' : 'text-slate-400'}`}>
                        {mName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 52-Week Contribution Matrix (GitHub style) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  52-Week Practice Heatmap (365 Days)
                </span>
                <span className="text-[10px] text-slate-400">
                  {yearStats.activeDaysCount} Days Active in {selectedYear}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto">
                <div className="min-w-[640px]">
                  
                  {/* Grid of 52 Columns x 7 Days */}
                  <div className="flex gap-1">
                    {yearContributionMatrix.map((col, cIdx) => (
                      <div key={cIdx} className="flex flex-col gap-1">
                        {col.map((cell, rIdx) => (
                          <div
                            key={rIdx}
                            title={`${cell.dateStr}: ${cell.solved} solved, ${cell.attempts} attempts`}
                            className={`w-2.5 h-2.5 rounded-xs transition-colors cursor-pointer ${
                              cell.intensity === 4
                                ? 'bg-amber-400'
                                : cell.intensity === 3
                                ? 'bg-emerald-500'
                                : cell.intensity === 2
                                ? 'bg-emerald-700'
                                : cell.intensity === 1
                                ? 'bg-emerald-950'
                                : 'bg-slate-900 border border-slate-800/80 hover:border-slate-700'
                            }`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Matrix Legend */}
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Jan → Dec ({selectedYear})</span>
                    <div className="flex items-center gap-1.5">
                      <span>Less</span>
                      <div className="w-2.5 h-2.5 rounded-xs bg-slate-900 border border-slate-800" />
                      <div className="w-2.5 h-2.5 rounded-xs bg-emerald-950" />
                      <div className="w-2.5 h-2.5 rounded-xs bg-emerald-700" />
                      <div className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
                      <div className="w-2.5 h-2.5 rounded-xs bg-amber-400" />
                      <span>More</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
