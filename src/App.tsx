import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Lock } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { Leaderboard } from './components/Leaderboard';
import { QuizPage } from './components/QuizPage';
import { InterviewPage } from './components/InterviewPage';
import { NewsPage } from './components/NewsPage';
import { VlsiGraphTheoryStudy } from './components/VlsiGraphTheoryStudy';
import { ProblemWorkspace } from './components/Workspace/ProblemWorkspace';
import { AuthModal } from './components/AuthModal';
import { AdminModal } from './components/AdminModal';
import { ProgressStatsModal } from './components/ProgressStatsModal';
import { AntiCopyToast } from './components/AntiCopyToast';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { AdminDashboard } from './components/AdminDashboard';
import { ALL_PROBLEMS } from './data/problemsIndex';
import { storageService } from './services/storageService';
import { UserProfile, UserProgress, Problem, Track } from './types';

export default function App() {
  const [user, setUser] = useState<UserProfile>(() => storageService.getUser());
  const [progress, setProgress] = useState<UserProgress>(() => storageService.getProgress());
  const [customProblems, setCustomProblems] = useState<Problem[]>(() => storageService.getCustomProblems());

  const [activeTab, setActiveTab] = useState<'landing' | 'dashboard' | 'leaderboard' | 'quiz' | 'interview' | 'news' | 'workspace' | 'vlsi_graph' | 'admin'>(() => {
    const savedUser = storageService.getUser();
    if (savedUser && !savedUser.isGuest && savedUser.role === 'admin') {
      return 'admin';
    }
    return 'landing';
  });

  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [initialTopicFilter, setInitialTopicFilter] = useState<string>('all');
  const [authPromptMessage, setAuthPromptMessage] = useState<string | null>(null);
  const [pendingProblemAfterAuth, setPendingProblemAfterAuth] = useState<Problem | null>(null);

  // Modals
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  // Anti-Copy Toast State
  const [antiCopyToastActive, setAntiCopyToastActive] = useState(false);

  const triggerAntiCopyToast = useCallback(() => {
    setAntiCopyToastActive(true);
    setTimeout(() => {
      setAntiCopyToastActive(false);
    }, 3500);
  }, []);

  // Global Anti-Copy Protection Listener (Disables Ctrl+C / Cmd+C on questions and non-input elements)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const isCopyKey = (e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'x' || e.key === 'X');
      if (!isCopyKey) return;

      const activeEl = document.activeElement;
      const isEditable = activeEl && (
        activeEl.tagName === 'INPUT' || 
        activeEl.tagName === 'TEXTAREA' || 
        (activeEl as HTMLElement).isContentEditable
      );

      const selection = window.getSelection();
      const selectedText = selection ? selection.toString().trim() : '';

      // If user selected text that contains protected elements or isn't inside an editable input
      if (!isEditable || (selection && selection.anchorNode && (selection.anchorNode.parentElement?.closest('.protected-question') || selection.anchorNode.parentElement?.closest('.no-copy')))) {
        if (selectedText.length > 0) {
          e.preventDefault();
          e.stopPropagation();
          triggerAntiCopyToast();
        }
      }
    };

    const handleGlobalCopy = (e: ClipboardEvent) => {
      const activeEl = document.activeElement;
      const isEditable = activeEl && (
        activeEl.tagName === 'INPUT' || 
        activeEl.tagName === 'TEXTAREA' || 
        (activeEl as HTMLElement).isContentEditable
      );

      const selection = window.getSelection();
      if (!isEditable || (selection && selection.anchorNode && (selection.anchorNode.parentElement?.closest('.protected-question') || selection.anchorNode.parentElement?.closest('.no-copy')))) {
        const selectedText = selection ? selection.toString().trim() : '';
        if (selectedText.length > 0) {
          e.preventDefault();
          e.stopPropagation();
          triggerAntiCopyToast();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown, true);
    document.addEventListener('copy', handleGlobalCopy, true);
    document.addEventListener('cut', handleGlobalCopy, true);

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown, true);
      document.removeEventListener('copy', handleGlobalCopy, true);
      document.removeEventListener('cut', handleGlobalCopy, true);
    };
  }, [triggerAntiCopyToast]);

  // Sync latest user and progress from SQLite database on mount
  useEffect(() => {
    if (user && !user.isGuest) {
      storageService.fetchFreshUserFromDb(user.id, user.email).then(data => {
        if (data) {
          setUser(data.user);
          setProgress(data.progress);
          if (data.user.role === 'admin') {
            setActiveTab('admin');
          }
        }
      });
    }
  }, []);

  // All merged problems (supports editing standard problems and custom drills)
  const allProblemsList = useMemo(() => {
    const customMap = new Map(customProblems.map(p => [p.id, p]));
    const baseUpdated = ALL_PROBLEMS.map(p => customMap.get(p.id) || p);
    const purelyNewCustom = customProblems.filter(p => !ALL_PROBLEMS.some(bp => bp.id === p.id));
    return [...purelyNewCustom, ...baseUpdated];
  }, [customProblems]);

  const handleTrackChange = useCallback((track: Track) => {
    const updated = storageService.updateTrack(track);
    setUser(updated);
  }, []);

  const handleSaveUser = useCallback((updatedUser: UserProfile) => {
    storageService.saveUser(updatedUser);
    setUser(updatedUser);
    if (updatedUser.role === 'admin') {
      setActiveTab('admin');
    } else if (pendingProblemAfterAuth && !updatedUser.isGuest) {
      setSelectedProblem(pendingProblemAfterAuth);
      setActiveTab('workspace');
      setPendingProblemAfterAuth(null);
    }
  }, [pendingProblemAfterAuth]);

  const handleUserAuthSuccess = useCallback((authUser: UserProfile, authProgress: UserProgress) => {
    setUser(authUser);
    setProgress(authProgress);
    setIsAuthOpen(false);
    setAuthPromptMessage(null);
    if (authUser.role === 'admin') {
      setActiveTab('admin');
    } else if (pendingProblemAfterAuth && !authUser.isGuest) {
      setSelectedProblem(pendingProblemAfterAuth);
      setActiveTab('workspace');
      setPendingProblemAfterAuth(null);
    } else {
      setActiveTab('dashboard');
    }
  }, [pendingProblemAfterAuth]);

  const handleSolveProblem = useCallback((problemId: string, code: string) => {
    const updatedProg = storageService.markProblemSolved(problemId, code);
    setProgress(updatedProg);
  }, []);

  const handleToggleBookmark = useCallback((problemId: string) => {
    const updatedProg = storageService.toggleBookmark(problemId);
    setProgress(updatedProg);
  }, []);

  const handleAddCustomProblem = useCallback((newProblem: Problem) => {
    storageService.saveCustomProblem(newProblem);
    setCustomProblems(prev => [newProblem, ...prev]);
  }, []);

  const handleUpdateProblem = useCallback((updatedProblem: Problem) => {
    storageService.saveCustomProblem(updatedProblem);
    setCustomProblems(prev => {
      const idx = prev.findIndex(p => p.id === updatedProblem.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = updatedProblem;
        return next;
      }
      return [updatedProblem, ...prev];
    });
    if (selectedProblem?.id === updatedProblem.id) {
      setSelectedProblem(updatedProblem);
    }
  }, [selectedProblem]);

  const handleDeleteProblem = useCallback((problemId: string) => {
    storageService.deleteCustomProblem(problemId);
    setCustomProblems(prev => prev.filter(p => p.id !== problemId));
  }, []);


  const handleExportDB = useCallback(() => {
    const jsonStr = storageService.exportDatabaseJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `silicon_drills_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const handleImportDB = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e: any) => {
      const file = e.target?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          if (storageService.importDatabaseJSON(content)) {
            setUser(storageService.getUser());
            setProgress(storageService.getProgress());
            setCustomProblems(storageService.getCustomProblems());
            alert('Database successfully restored from backup!');
          } else {
            alert('Invalid backup JSON file format.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  }, []);

  const handleSelectTopicFromLanding = useCallback((topic: string) => {
    if (!user || user.isGuest) {
      setAuthPromptMessage('Sign in with Google or account credentials to open problems and view curriculum drills.');
      setIsAuthOpen(true);
      return;
    }
    setInitialTopicFilter(topic);
    setActiveTab('dashboard');
  }, [user]);

  const handleSelectProblem = useCallback((problem: Problem) => {
    // Only after logging through Google or manual login only the coding page should open
    if (!user || user.isGuest) {
      setAuthPromptMessage(`Sign in with Google or account credentials to launch the Hardware Coding Workspace for "${problem.title}". RTL compilation, waveform analysis, and simulation verification require a logged-in account.`);
      setPendingProblemAfterAuth(problem);
      setIsAuthOpen(true);
      return;
    }
    setSelectedProblem(problem);
    setActiveTab('workspace');
  }, [user]);

  const handleStartPracticing = useCallback(() => {
    if (!user || user.isGuest) {
      setAuthPromptMessage('Sign in with Google or account credentials to open and practice problems.');
      setIsAuthOpen(true);
      return;
    }
    setActiveTab('dashboard');
  }, [user]);

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f1f3f7] font-sans selection:bg-[#e5a93c] selection:text-[#0a0b0e] flex flex-col pt-16">
      
      {/* Top Header Navigation (Fixed in same place at top) */}
      <Navbar
        user={user}
        progress={progress}
        activeTab={activeTab === 'workspace' ? 'dashboard' : activeTab}
        setActiveTab={(tab) => {
          if (tab === 'leaderboard' || tab === 'dashboard' || tab === 'landing' || tab === 'quiz' || tab === 'interview' || tab === 'news' || tab === 'vlsi_graph' || tab === 'admin') {
            if (tab === 'admin' && user.role !== 'admin') {
              setIsAuthOpen(true);
              return;
            }
            setActiveTab(tab);
          }
        }}
        onTrackChange={handleTrackChange}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        onExportDB={handleExportDB}
        onImportDB={handleImportDB}
      />

      {/* View Switcher */}
      <main className="flex-1 flex flex-col">
        {activeTab === 'landing' && (
          <LandingPage
            onStartPracticing={handleStartPracticing}
            onSelectTopic={handleSelectTopicFromLanding}
            onNavigateToNews={() => setActiveTab('news')}
            totalProblemsCount={allProblemsList.length}
            onOpenAuth={() => setIsAuthOpen(true)}
            currentUser={user}
            onUserAuthSuccess={handleUserAuthSuccess}
          />
        )}

        {activeTab === 'dashboard' && (
          <Dashboard
            problems={allProblemsList}
            progress={progress}
            user={user}
            onSelectProblem={handleSelectProblem}
            onToggleBookmark={handleToggleBookmark}
            initialTopicFilter={initialTopicFilter}
            onNavigateToVlsiGraph={() => setActiveTab('vlsi_graph')}
          />
        )}

        {activeTab === 'vlsi_graph' && (
          <VlsiGraphTheoryStudy
            onSelectProblem={handleSelectProblem}
            solvedProblemIds={progress.solvedProblemIds}
            onBackToProblems={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'leaderboard' && (
          <Leaderboard
            currentUser={user}
            progress={progress}
            totalProblemsCount={allProblemsList.length}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizPage 
            userName={user.name} 
            onTriggerAntiCopy={triggerAntiCopyToast}
          />
        )}

        {activeTab === 'interview' && (
          <InterviewPage 
            userName={user.name}
            onBackToDashboard={() => setActiveTab('dashboard')}
            onTriggerAntiCopy={triggerAntiCopyToast}
          />
        )}

        {activeTab === 'news' && (
          <NewsPage 
            onBackToDashboard={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'admin' && (
          user.role === 'admin' ? (
            <AdminDashboard
              currentUser={user}
              onNavigateBack={() => setActiveTab('dashboard')}
              onSelectProblem={handleSelectProblem}
            />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-lg mx-auto min-h-[60vh]">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 shadow-xl">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Admin Authorization Required</h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                This administrative section is strictly restricted to verified platform administrators. Please sign in with an administrator account to proceed.
              </p>
              <button
                onClick={() => setActiveTab('dashboard')}
                className="px-6 py-2.5 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#111215] font-semibold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
              >
                Return to Dashboard
              </button>
            </div>
          )
        )}

        {activeTab === 'workspace' && selectedProblem && (!user || user.isGuest ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-lg mx-auto min-h-[60vh]">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 shadow-xl">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Coding Page Locked</h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Only after logging through Google or manual login will the hardware coding page open. Please sign in to simulate RTL circuits, write Verilog/VHDL testbenches, and submit hardware solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <button
                onClick={() => {
                  setAuthPromptMessage(`Sign in with Google or account credentials to launch the Hardware Coding Workspace for "${selectedProblem.title}".`);
                  setIsAuthOpen(true);
                }}
                className="px-6 py-2.5 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#111215] font-semibold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
              >
                Sign In with Google or Account
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className="px-6 py-2.5 rounded-lg bg-[#1f2025] hover:bg-[#27282f] border border-[#2e3038] text-[#d6d9e0] font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Return to Problem List
              </button>
            </div>
          </div>
        ) : (
          <ErrorBoundary 
            fallbackTitle="Problem Coding Workspace"
            onReset={() => setActiveTab('dashboard')}
          >
            <ProblemWorkspace
              key={selectedProblem.id}
              problem={selectedProblem}
              progress={progress}
              user={user}
              onBack={() => setActiveTab('dashboard')}
              onSolve={handleSolveProblem}
              onToggleBookmark={handleToggleBookmark}
              onSelectNextProblem={handleSelectProblem}
              onTriggerAntiCopy={triggerAntiCopyToast}
            />
          </ErrorBoundary>
        ))}
      </main>

      {/* Global Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => {
          setIsAuthOpen(false);
          setAuthPromptMessage(null);
        }}
        currentUser={user}
        onSaveUser={handleSaveUser}
        onUserAuthSuccess={handleUserAuthSuccess}
        onExportDB={handleExportDB}
        onImportDB={handleImportDB}
        promptMessage={authPromptMessage}
      />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onAddProblem={handleAddCustomProblem}
        onUpdateProblem={handleUpdateProblem}
        onDeleteProblem={handleDeleteProblem}
        allProblems={allProblemsList}
      />

      <ProgressStatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        user={user}
        progress={progress}
        problems={allProblemsList}
      />

      {/* Global Anti-Copy Protection Notification */}
      <AntiCopyToast show={antiCopyToastActive} />

    </div>
  );
}
