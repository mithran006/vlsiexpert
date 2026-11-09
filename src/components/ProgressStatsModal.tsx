import React, { useState } from 'react';
import { X, Award, CheckCircle2, Flame, Layers, ShieldCheck, Download, Sparkles, Lock, Trophy, BarChart3 } from 'lucide-react';
import { UserProfile, UserProgress, Problem } from '../types';
import { TOPIC_METADATA } from '../data/topicMeta';
import { badgeService } from '../services/badgeService';
import { StreakActivityGraph } from './StreakActivityGraph';

interface ProgressStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  progress: UserProgress;
  problems: Problem[];
}

export const ProgressStatsModal: React.FC<ProgressStatsModalProps> = ({
  isOpen,
  onClose,
  user,
  progress,
  problems
}) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'streaks' | 'badges'>('streaks');

  if (!isOpen) return null;

  const totalProblems = problems.length;
  const solvedCount = progress.solvedProblemIds.length;
  const rawPercent = totalProblems > 0 ? (solvedCount / totalProblems) * 100 : 0;
  const overallPercentDisplay = solvedCount === 0
    ? '0%'
    : rawPercent < 1
      ? `${rawPercent.toFixed(1)}%`
      : rawPercent < 10
        ? `${rawPercent.toFixed(1)}%`
        : `${Math.round(rawPercent)}%`;

  const topicKeys = Object.keys(TOPIC_METADATA);
  const badges = badgeService.getUserBadges(progress, problems);
  const unlockedBadgesCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Learner Performance & Consistency</h2>
              <p className="text-xs text-slate-400">{user.name} ({user.selectedTrack.toUpperCase()} Track)</p>
            </div>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold sm:mr-8">
            <button
              onClick={() => setActiveTab('streaks')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'streaks' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              Streak Graph
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'analytics' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'badges' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              Badges ({unlockedBadgesCount}/{badges.length})
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <div className="text-2xl font-black text-blue-400">{solvedCount}</div>
            <div className="text-[11px] text-slate-400">Solved Drills</div>
          </div>

          <div 
            onClick={() => setActiveTab('streaks')}
            className={`p-3.5 rounded-xl bg-slate-950 border transition-all cursor-pointer text-center ${
              activeTab === 'streaks' ? 'border-amber-500/50 bg-amber-950/20' : 'border-slate-800 hover:border-amber-500/30'
            }`}
          >
            <div className="text-2xl font-black text-amber-400 flex items-center justify-center gap-1">
              <Flame className="w-5 h-5 fill-amber-400 text-amber-500" />
              {progress.streakDays}
            </div>
            <div className="text-[11px] text-slate-400">Day Streak (View Graph)</div>
          </div>

          <div 
            onClick={() => setActiveTab('badges')}
            className={`p-3.5 rounded-xl bg-slate-950 border transition-all cursor-pointer text-center ${
              activeTab === 'badges' ? 'border-amber-500/50 bg-amber-950/20' : 'border-slate-800 hover:border-amber-500/30'
            }`}
          >
            <div className="text-2xl font-black text-amber-400">{unlockedBadgesCount}</div>
            <div className="text-[11px] text-slate-400">Badges Earned</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <div className="text-2xl font-black text-emerald-400">{overallPercentDisplay}</div>
            <div className="text-[11px] text-slate-400">Completion</div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'streaks' ? (
          <div className="space-y-4 mb-6">
            <StreakActivityGraph progress={progress} />
          </div>
        ) : activeTab === 'analytics' ? (
          <div className="space-y-4 mb-6">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Topic Mastery Breakdown</h3>
            
            <div className="space-y-3">
              {topicKeys.map((key) => {
                const meta = TOPIC_METADATA[key];
                const topicProblems = problems.filter(p => p.topic === key);
                const topicSolved = topicProblems.filter(p => progress.solvedProblemIds.includes(p.id)).length;
                const rawTopicPct = topicProblems.length > 0 ? (topicSolved / topicProblems.length) * 100 : 0;
                const topicPercentDisplay = topicSolved === 0
                  ? '0%'
                  : rawTopicPct < 1
                    ? `${rawTopicPct.toFixed(1)}%`
                    : `${Math.round(rawTopicPct)}%`;
                const topicBarWidth = topicSolved > 0 ? Math.max(2, Math.min(100, rawTopicPct)) : 0;

                return (
                  <div key={key} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-white">{meta.name}</span>
                      <span className="text-slate-400">{topicSolved} / {topicProblems.length} ({topicPercentDisplay})</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-500"
                        style={{ width: `${topicBarWidth}%`, backgroundColor: meta.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Earned & Upcoming Badges</h3>
              <span className="text-xs text-amber-400 font-medium">Daily practice & solving drills unlocks badges</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`p-3.5 rounded-xl border transition-all relative flex gap-3 ${
                    badge.unlocked
                      ? 'bg-[#111522] border-amber-500/30 shadow-sm'
                      : 'bg-slate-950/80 border-slate-800/80 opacity-75'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
                    badge.unlocked ? 'bg-slate-900 border border-slate-700' : 'bg-slate-900/50 border border-slate-800'
                  }`}>
                    {badge.unlocked ? badge.icon : <Lock className="w-5 h-5 text-slate-500" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-sm font-bold truncate ${badge.unlocked ? 'text-white' : 'text-slate-400'}`}>
                        {badge.title}
                      </h4>
                      {badge.unlocked ? (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                          Unlocked
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-500 font-mono">
                          {badge.currentCount}/{badge.requiredCount}
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {badge.description}
                    </p>

                    {!badge.unlocked && (
                      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mt-2 border border-slate-800">
                        <div
                          className="h-full bg-amber-500 transition-all duration-300"
                          style={{ width: `${Math.min(100, Math.round((badge.currentCount / badge.requiredCount) * 100))}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificate Milestone Status Card */}
        <div className="p-4 rounded-xl bg-[#111522] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white">Official PSNACET Milestone Certificates</h4>
              <p className="text-[11px] text-slate-300">
                Certificates and Badges are issued upon completing 1 full problem library (100/100) or reaching milestones: 25, 50, 100, 300, 500, 750, 1000, 1200, or 1400 problems.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-amber-500/30 shrink-0">
            {solvedCount}/25 Drills (Next: Bronze)
          </div>
        </div>

      </div>
    </div>
  );
};
