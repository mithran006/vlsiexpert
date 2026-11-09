import React, { useState, useEffect, memo } from 'react';
import { Trophy, Flame, Search, Users, Building2, RefreshCw } from 'lucide-react';
import { UserProfile, UserProgress, LeaderboardEntry as ApiLeaderboardEntry } from '../types';
import { storageService } from '../services/storageService';

interface LeaderboardProps {
  currentUser: UserProfile;
  progress: UserProgress;
  totalProblemsCount: number;
}

export interface LeaderboardEntry {
  rank?: number;
  id: string;
  name: string;
  collegeName: string;
  yearOfStudy: string;
  department: string;
  solvedCount: number;
  streakDays: number;
  points: number;
  badge: string;
  isCurrentUser?: boolean;
}

export const Leaderboard: React.FC<LeaderboardProps> = memo(({
  currentUser,
  progress,
  totalProblemsCount
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dbLeaderboard, setDbLeaderboard] = useState<ApiLeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);

  // Solved details for current logged-in user
  const currentUserSolved = progress.solvedProblemIds.length;
  const currentUserPoints = currentUserSolved * 150 + progress.streakDays * 50;

  const fetchLiveLeaderboard = async () => {
    setLoading(true);
    try {
      const data = await storageService.fetchLeaderboard(50);
      setDbLeaderboard(data);
    } catch (e) {
      console.warn('Failed to load leaderboard from DB:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveLeaderboard();
  }, [progress.solvedProblemIds.length, progress.streakDays]);

  // Build currentUser entry
  const currentUserEntry: LeaderboardEntry = {
    id: currentUser.id || 'current-user-id',
    name: currentUser.name || 'You',
    collegeName: currentUser.collegeName || 'PSNA College of Engineering and Technology',
    yearOfStudy: currentUser.yearOfStudy || '3rd Year',
    department: currentUser.department || 'ECE - Electronics & Communication',
    solvedCount: currentUserSolved,
    streakDays: progress.streakDays,
    points: currentUserPoints,
    badge: currentUserSolved >= 40 ? 'Silicon Master' : currentUserSolved >= 20 ? 'RTL Developer' : 'VLSI Apprentice',
    isCurrentUser: true
  };

  // Convert DB entries to view format
  let allEntries: LeaderboardEntry[] = dbLeaderboard.map((item) => ({
    id: item.userId,
    name: item.name,
    collegeName: item.collegeName,
    yearOfStudy: '3rd / Final Year',
    department: item.department,
    solvedCount: item.solvedCount,
    streakDays: item.streakDays,
    points: item.totalScore || (item.solvedCount * 150 + item.streakDays * 50),
    badge: item.solvedCount >= 40 ? 'Silicon Master' : item.solvedCount >= 20 ? 'RTL Developer' : 'VLSI Apprentice',
    isCurrentUser: item.userId === currentUser.id
  }));

  // Merge current user if not in DB list
  const existingIdx = allEntries.findIndex(e => e.id === currentUser.id || e.name.toLowerCase() === currentUser.name.toLowerCase());
  if (existingIdx !== -1) {
    allEntries[existingIdx] = {
      ...allEntries[existingIdx],
      solvedCount: Math.max(allEntries[existingIdx].solvedCount, currentUserSolved),
      streakDays: Math.max(allEntries[existingIdx].streakDays, progress.streakDays),
      points: Math.max(allEntries[existingIdx].points, currentUserPoints),
      isCurrentUser: true
    };
  } else {
    allEntries.push(currentUserEntry);
  }

  // Sort descending by points
  allEntries.sort((a, b) => b.points - a.points);

  // Assign ranks
  const rankedEntries: LeaderboardEntry[] = allEntries.map((e, index) => ({
    ...e,
    rank: index + 1
  }));

  // Filter entries
  const filtered = rankedEntries.filter(entry => {
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      const matchName = entry.name.toLowerCase().includes(q);
      const matchCollege = entry.collegeName.toLowerCase().includes(q);
      const matchDept = entry.department.toLowerCase().includes(q);
      if (!matchName && !matchCollege && !matchDept) return false;
    }

    return true;
  });

  const currentUserRank = rankedEntries.find(e => e.isCurrentUser)?.rank || 1;

  return (
    <div className="min-h-screen bg-[#111215] text-[#f1f3f7] selection:bg-[#e5a93c] selection:text-[#111215]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Hero Banner (1st Page Theme) */}
        <div className="mb-8 p-6 rounded-2xl bg-[#16171d] border border-[#262833] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono font-medium text-[#e5a93c] tracking-wider uppercase mb-1.5 flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-[#e5a93c]" />
              <span>VLSI Competitive Arena • Student Rankings</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Top Student Rankers & Hardware Engineers
            </h1>
            <p className="text-xs sm:text-sm text-[#9da3b4] mt-1 max-w-2xl leading-relaxed">
              Live standings computed across Verilog, SystemVerilog, VHDL, FPGA, Linux, UVM, and DFT design drills.
            </p>
          </div>

          {/* Current User Rank Box */}
          <div className="bg-[#191a21] p-4 rounded-xl border border-[#2b2d39] flex items-center gap-4 shrink-0 w-full md:w-auto shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#e5a93c]/10 border border-[#e5a93c]/30 flex items-center justify-center text-[#e5a93c] font-mono font-bold text-lg">
              #{currentUserRank}
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>{currentUser.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/30">YOU</span>
              </div>
              <div className="text-[11px] text-[#8c91a0] font-mono mt-0.5">
                {currentUserSolved} / {totalProblemsCount} Solved · {currentUserPoints} pts
              </div>
            </div>
          </div>
        </div>

        {/* Search & Stats Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs text-[#9da3b4]">
            <Users className="w-4 h-4 text-[#e5a93c]" />
            <span>Showing verified VLSI participants</span>
            <button 
              onClick={fetchLiveLeaderboard}
              disabled={loading}
              className="p-1 hover:text-white transition-all disabled:opacity-50 cursor-pointer"
              title="Refresh Leaderboard"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#e5a93c]' : ''}`} />
            </button>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8c91a0] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student, college, department..."
              className="w-full pl-9 pr-3 py-2 bg-[#16171d] border border-[#2b2d39] rounded-xl text-xs text-[#eff1f6] placeholder-[#656a7a] focus:outline-none focus:border-[#e5a93c] transition-colors"
            />
          </div>
        </div>

        {/* Leaderboard Table (1st Page Theme) */}
        <div className="bg-[#16171d] border border-[#262833] rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#eff1f6]">
              <thead className="bg-[#191a21] text-[#8c91a0] font-mono text-[11px] uppercase tracking-wider border-b border-[#262833]">
                <tr>
                  <th className="py-3.5 px-4 text-center">Rank</th>
                  <th className="py-3.5 px-4">Student & College Details</th>
                  <th className="py-3.5 px-4">Department & Year</th>
                  <th className="py-3.5 px-4 text-center">Drills Solved</th>
                  <th className="py-3.5 px-4 text-center">Streak</th>
                  <th className="py-3.5 px-4 text-right">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252731]">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 px-4 text-center">
                      <div className="max-w-md mx-auto text-[#8c91a0]">
                        <Users className="w-8 h-8 text-[#656a7a] mx-auto mb-2 opacity-50" />
                        <div className="font-semibold text-white text-sm mb-1">No participants found</div>
                        <p className="text-xs text-[#8c91a0]">
                          {searchQuery.trim() 
                            ? `No matches found for "${searchQuery}". Try a different search term.` 
                            : 'No other registered students yet. As new students join and solve drills, they will appear here.'}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((entry) => {
                    const isTop1 = entry.rank === 1;
                    const isTop2 = entry.rank === 2;
                    const isTop3 = entry.rank === 3;

                    return (
                      <tr
                        key={entry.id}
                        className={`transition-colors ${
                          entry.isCurrentUser 
                            ? 'bg-[#191a21]/90 font-semibold' 
                            : 'hover:bg-[#1c1d25]'
                        }`}
                      >
                        {/* Rank Badge */}
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center">
                            {isTop1 ? (
                              <div className="w-8 h-8 rounded-full bg-[#e5a93c] text-[#111215] font-black text-sm flex items-center justify-center shadow-sm">
                                🥇
                              </div>
                            ) : isTop2 ? (
                              <div className="w-8 h-8 rounded-full bg-slate-300 text-slate-950 font-black text-sm flex items-center justify-center shadow-md">
                                🥈
                              </div>
                            ) : isTop3 ? (
                              <div className="w-8 h-8 rounded-full bg-amber-700 text-white font-black text-sm flex items-center justify-center shadow-md">
                                🥉
                              </div>
                            ) : (
                              <span className="font-mono text-[#8c91a0] font-bold">#{entry.rank}</span>
                            )}
                          </div>
                        </td>

                        {/* Student Name & College */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#191a21] border border-[#2b2d39] flex items-center justify-center font-bold text-white text-xs shrink-0">
                              {entry.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 font-bold text-white">
                                <span>{entry.name}</span>
                                {entry.isCurrentUser && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/30">
                                    YOU
                                  </span>
                                )}
                                <span className="text-[10px] px-2 py-0.2 rounded-full bg-[#191a21] text-[#e5a93c] border border-[#2b2d39] ml-1 font-mono">
                                  {entry.badge}
                                </span>
                              </div>
                              <div className="text-[11px] text-[#8c91a0] flex items-center gap-1 mt-0.5">
                                <Building2 className="w-3 h-3 text-[#656a7a] shrink-0" />
                                <span className="truncate max-w-xs">{entry.collegeName}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Department & Year */}
                        <td className="py-4 px-4">
                          <div className="text-[#f1f3f7] font-medium">{entry.department}</div>
                          <div className="text-[11px] text-[#8c91a0] mt-0.5">{entry.yearOfStudy}</div>
                        </td>

                        {/* Solved Count */}
                        <td className="py-4 px-4 text-center">
                          <span className="font-mono font-bold text-emerald-400 text-sm">
                            {entry.solvedCount}
                          </span>
                          <span className="text-[10px] text-[#656a7a] block font-mono">/ {totalProblemsCount}</span>
                        </td>

                        {/* Streak */}
                        <td className="py-4 px-4 text-center">
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#191a21] border border-[#2b2d39] text-[#e5a93c] font-bold font-mono text-xs">
                            <Flame className="w-3.5 h-3.5 fill-[#e5a93c]" />
                            {entry.streakDays}d
                          </div>
                        </td>

                        {/* Points */}
                        <td className="py-4 px-4 text-right font-mono font-extrabold text-[#e5a93c] text-sm">
                          {entry.points.toLocaleString()} pts
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
});

Leaderboard.displayName = 'Leaderboard';
