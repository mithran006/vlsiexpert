import React, { memo } from 'react';
import { 
  Flame, User, Download, Upload, Network, 
  Coins, Sparkles, Sliders, Bell, ShieldCheck
} from 'lucide-react';
import { UserProfile, UserProgress, Track } from '../types';
import { VlsiExpertLogo } from './VlsiExpertLogo';

interface NavbarProps {
  user: UserProfile;
  progress: UserProgress;
  activeTab: 'landing' | 'dashboard' | 'leaderboard' | 'quiz' | 'interview' | 'news' | 'vlsi_graph' | 'admin';
  setActiveTab: (tab: 'landing' | 'dashboard' | 'leaderboard' | 'quiz' | 'interview' | 'news' | 'vlsi_graph' | 'admin') => void;
  onTrackChange: (track: Track) => void;
  onOpenAuth: () => void;
  onOpenAdmin: () => void;
  onOpenStats: () => void;
  onExportDB: () => void;
  onImportDB: () => void;
  uiMode?: 'studio' | 'classic';
  onToggleUiMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = memo(({
  user,
  progress,
  activeTab,
  setActiveTab,
  onTrackChange,
  onOpenAuth,
  onOpenAdmin,
  onOpenStats,
  onExportDB,
  onImportDB,
  uiMode = 'studio',
  onToggleUiMode
}) => {
  const isAuthenticated = !user.isGuest;

  const handleProtectedAction = (tab: 'landing' | 'dashboard' | 'leaderboard' | 'quiz' | 'interview' | 'news' | 'vlsi_graph' | 'admin') => {
    // Only after signing in problems should be open
    if ((tab === 'dashboard' || tab === 'vlsi_graph' || tab === 'admin') && (!user || user.isGuest)) {
      onOpenAuth();
      return;
    }
    setActiveTab(tab);
  };

  const handleProtectedTool = (action: () => void) => {
    action();
  };

  const pointsCount = (progress.solvedProblemIds.length * 10) + (progress.streakDays * 5);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b0e] border-b border-[#22242f] text-[#eff1f6] shadow-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between gap-3 font-sans">
        
        {/* Left Side: VLSI Expert Brand Logo & Main Navigation */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group select-none" 
            onClick={() => isAuthenticated ? setActiveTab('dashboard') : setActiveTab('landing')}
            title="VLSI Expert - Home"
          >
            {uiMode === 'studio' ? (
              <VlsiExpertLogo size={22} subText="Hardware" />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#191a21] border border-[#2b2d39] flex items-center justify-center font-bold text-[#e5a93c]">
                  <span className="text-xs font-mono">&lt;/&gt;</span>
                </div>
                <span className="font-bold text-sm text-white">
                  VLSI<span className="text-[#e5a93c]">Expert</span>
                </span>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Explore */}
            <button
              onClick={() => handleProtectedAction('landing')}
              className={`h-8 px-3 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'landing'
                  ? 'text-white font-semibold border-b-2 border-[#e5a93c]'
                  : 'text-[#9da3b4] hover:text-white'
              }`}
            >
              <span>Explore</span>
            </button>

            {/* Problems */}
            <button
              onClick={() => handleProtectedAction('dashboard')}
              className={`h-8 px-3 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'text-white font-semibold border-b-2 border-[#e5a93c]'
                  : 'text-[#9da3b4] hover:text-white'
              }`}
            >
              <span>Problems</span>
              {!isAuthenticated && (
                <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">
                  Sign in
                </span>
              )}
            </button>

            {/* Contest / Arena */}
            <button
              onClick={() => handleProtectedAction('leaderboard')}
              className={`h-8 px-3 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'leaderboard'
                  ? 'text-white font-semibold border-b-2 border-[#e5a93c]'
                  : 'text-[#9da3b4] hover:text-white'
              }`}
            >
              <span>Contest</span>
            </button>

            {/* Discuss / Live Tech News Wire */}
            <button
              onClick={() => handleProtectedAction('news')}
              className={`h-8 px-3 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'news'
                  ? 'text-white font-semibold border-b-2 border-[#e5a93c]'
                  : 'text-[#9da3b4] hover:text-white'
              }`}
            >
              <span>Discuss</span>
              <span className="px-1.5 py-0.2 rounded bg-[#00b8a3]/20 text-[#00b8a3] text-[9px] font-bold uppercase tracking-wider">
                News
              </span>
            </button>

            {/* Interview Prep */}
            <button
              onClick={() => handleProtectedAction('interview')}
              className={`h-8 px-3 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'interview'
                  ? 'text-white font-semibold border-b-2 border-[#e5a93c]'
                  : 'text-[#9da3b4] hover:text-white'
              }`}
            >
              <span>Interview</span>
            </button>

            {/* VLSI Graph Theory Study Plan */}
            <button
              onClick={() => handleProtectedAction('vlsi_graph')}
              className={`h-8 px-3 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'vlsi_graph'
                  ? 'text-[#e5a93c] font-semibold border-b-2 border-[#e5a93c]'
                  : 'text-[#9da3b4] hover:text-[#e5a93c]'
              }`}
            >
              <Network className="w-3.5 h-3.5 text-[#e5a93c]" />
              <span>Study Plan</span>
            </button>

            {/* Assessments / Quizzes */}
            <button
              onClick={() => handleProtectedAction('quiz')}
              className={`h-8 px-3 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'quiz'
                  ? 'text-white font-semibold border-b-2 border-[#e5a93c]'
                  : 'text-[#9da3b4] hover:text-white'
              }`}
            >
              <span>Assessment</span>
            </button>

            {/* Admin Panel (Visible ONLY for authenticated Admin accounts) */}
            {user.role === 'admin' && (
              <button
                onClick={() => handleProtectedAction('admin')}
                className={`h-8 px-3 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'admin'
                    ? 'text-[#e5a93c] font-black border-b-2 border-[#e5a93c]'
                    : 'text-[#e5a93c] hover:text-[#f59e0b]'
                }`}
                title="Open Administrative Dashboard"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Admin Panel</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#e5a93c] text-[#0a0b0e] font-mono font-black uppercase">
                  ADMIN
                </span>
              </button>
            )}
          </nav>
        </div>

        {/* Right Tools: UI Switcher, Streak, Points & Profile */}
        <div className="flex items-center gap-2">
          
          {/* UI Mode Toggle if provided */}
          {onToggleUiMode && (
            <button
              onClick={onToggleUiMode}
              className={`h-7 px-2.5 rounded-full text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                uiMode === 'studio'
                  ? 'bg-[#191a21] text-[#e5a93c] border-[#e5a93c]/40 hover:border-[#e5a93c]'
                  : 'bg-[#191a21] text-slate-300 border-[#2b2d39] hover:text-white'
              }`}
              title="Toggle Layout Style"
            >
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              <span>VLSI Expert UI</span>
            </button>
          )}


          {/* Daily Streak Flame Indicator */}
          <button 
            onClick={() => handleProtectedTool(onOpenStats)}
            className="h-7 px-2.5 rounded-md bg-[#191a21] hover:bg-[#20222b] border border-[#2b2d39] hover:border-[#e5a93c]/50 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
            title="Practice Streak & Consistency"
          >
            <Flame className="w-3.5 h-3.5 fill-[#e5a93c] text-[#e5a93c] shrink-0" />
            <span className="text-[#e5a93c] font-mono text-xs">{progress.streakDays}</span>
          </button>

          {/* Points */}
          <div 
            className="hidden sm:flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-[#191a21] border border-[#2b2d39] text-xs font-mono text-[#e5e5e5]"
            title="VLSI Expert Points"
          >
            <Coins className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span>{pointsCount}</span>
          </div>

          {/* Database Backup / Restore */}
          <div className="hidden xl:flex items-center gap-1">
            <button
              onClick={() => handleProtectedTool(onExportDB)}
              className="h-7 w-7 rounded-md bg-[#191a21] text-[#9e9e9e] hover:text-white hover:bg-[#20222b] transition-colors border border-[#2b2d39] flex items-center justify-center cursor-pointer"
              title="Export SQLite Backup (JSON)"
            >
              <Download className="w-3 h-3" />
            </button>
            <button
              onClick={() => handleProtectedTool(onImportDB)}
              className="h-7 w-7 rounded-md bg-[#191a21] text-[#9e9e9e] hover:text-white hover:bg-[#20222b] transition-colors border border-[#2b2d39] flex items-center justify-center cursor-pointer"
              title="Import SQLite Backup (JSON)"
            >
              <Upload className="w-3 h-3" />
            </button>
          </div>

          {/* Profile Avatar */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-2 py-0.5 px-2 rounded-full bg-[#191a21] hover:bg-[#20222b] border border-[#2b2d39] transition-colors cursor-pointer text-xs"
            title={isAuthenticated ? `Signed in as ${user.name}` : 'Sign In / Register'}
          >
            <span className="font-medium text-[#e5e5e5] hidden sm:inline max-w-[90px] truncate">
              {isAuthenticated ? user.name : 'Sign In'}
            </span>
            <div className="w-5 h-5 rounded-full bg-[#e5a93c] text-[#111215] font-bold text-[10px] flex items-center justify-center shrink-0">
              {isAuthenticated ? user.name.charAt(0).toUpperCase() : <User className="w-3 h-3 text-[#111215]" />}
            </div>
          </button>

        </div>
      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';

