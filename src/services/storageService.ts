import { UserProfile, UserProgress, Problem, Track, SubmissionRecord, ProblemDiscussion, NewsDiscussion, LeaderboardEntry, PlatformStats } from '../types';

const USER_KEY = 'silicon_drills_user';
const PROGRESS_KEY = 'silicon_drills_progress';
const CUSTOM_PROBLEMS_KEY = 'silicon_drills_custom_problems';

const DEFAULT_GUEST_USER: UserProfile = {
  id: 'guest-101',
  name: 'PSNACET Student',
  email: 'student@psnacet.edu.in',
  isGuest: true,
  selectedTrack: 'both',
  collegeName: 'PSNA College of Engineering and Technology',
  yearOfStudy: '3rd Year',
  department: 'ECE - Electronics & Communication',
  role: 'student',
  createdAt: new Date().toISOString()
};

const DEFAULT_PROGRESS: UserProgress = {
  userId: 'guest-101',
  solvedProblemIds: [],
  savedCode: {},
  bookmarks: [],
  notes: {},
  streakDays: 1,
  longestStreak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  dailyAttempts: {},
  dailySolved: {},
  hourlyActivity: {},
  unlockedBadgeIds: [],
  errorAttemptsCount: 0
};

// In-memory cache to ensure instant O(1) reads without expensive JSON.parse on every keypress
let inMemoryUser: UserProfile | null = null;
let inMemoryProgress: UserProgress | null = null;
let progressPersistTimeout: any = null;
let codeSaveDebounceTimer: any = null;

function persistProgressDebounced(prog: UserProgress) {
  if (progressPersistTimeout) clearTimeout(progressPersistTimeout);
  progressPersistTimeout = setTimeout(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(prog));
    } catch (e) {}
  }, 250);
}

// Auto-sync debouncer to keep SQLite DB updated seamlessly
let syncTimer: any = null;
function triggerServerSync(user: UserProfile, progress: UserProgress, immediate = false) {
  const executeSync = async () => {
    try {
      await fetch('/api/db/sync-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, progress })
      });
    } catch (e) {
      // Non-blocking background sync
    }
  };

  if (immediate) {
    if (syncTimer) clearTimeout(syncTimer);
    executeSync();
  } else {
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(executeSync, 500);
  }
}

export const storageService = {
  // Authentication & Server DB Integration
  async registerWithPassword(payload: {
    email: string;
    password: string;
    name: string;
    rollNumber?: string;
    collegeName?: string;
    yearOfStudy?: string;
    department?: string;
    selectedTrack?: Track;
  }): Promise<{ user: UserProfile; progress: UserProgress }> {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Registration failed.');
    }

    this.saveUser(data.user);
    this.saveProgress(data.progress);
    return { user: data.user, progress: data.progress };
  },

  async loginWithPassword(email: string, password: string): Promise<{ user: UserProfile; progress: UserProgress; adminToken?: string }> {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Login failed.');
    }

    if (data.adminToken) {
      sessionStorage.setItem('psnacet_admin_token', data.adminToken);
      sessionStorage.setItem('psnacet_admin_authed', 'true');
    }

    this.saveUser(data.user);
    this.saveProgress(data.progress);
    return { user: data.user, progress: data.progress, adminToken: data.adminToken };
  },

  async loginWithGoogle(payload: {
    email?: string;
    name?: string;
    avatarUrl?: string;
    googleId?: string;
    credential?: string;
    idToken?: string;
    accessToken?: string;
    rollNumber?: string;
    collegeName?: string;
    department?: string;
    yearOfStudy?: string;
  }): Promise<{ user: UserProfile; progress: UserProgress; sessionToken?: string }> {
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Google authentication failed.');
    }

    if (data.sessionToken) {
      try {
        localStorage.setItem('psnacet_session_token', data.sessionToken);
      } catch (e) {}
    }

    this.saveUser(data.user);
    this.saveProgress(data.progress);
    return { user: data.user, progress: data.progress, sessionToken: data.sessionToken };
  },

  async forgotPassword(email: string): Promise<{ success: boolean; message: string; user?: { name: string; email: string } }> {
    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Account not found for this email address.');
    }

    return data;
  },

  async resetPassword(email: string, newPassword: string): Promise<{ user: UserProfile; progress: UserProgress }> {
    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, newPassword })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Password reset failed.');
    }

    this.saveUser(data.user);
    this.saveProgress(data.progress);
    return { user: data.user, progress: data.progress };
  },

  async fetchFreshUserFromDb(userId: string, email?: string): Promise<{ user: UserProfile; progress: UserProgress } | null> {
    try {
      const res = await fetch('/api/auth/me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, email })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          if (data.adminToken) {
            try {
              sessionStorage.setItem('psnacet_admin_token', data.adminToken);
              sessionStorage.setItem('psnacet_admin_authed', 'true');
            } catch (e) {}
          }
          this.saveUser(data.user);
          if (data.progress) this.saveProgress(data.progress, true);
          return { user: data.user, progress: data.progress };
        }
      }
    } catch (e) {
      console.warn('Could not refresh user from DB server:', e);
    }
    return null;
  },

  logout(): { user: UserProfile; progress: UserProgress } {
    const prevUser = this.getUser();
    const prevProg = this.getProgress();

    // Securely flush previous user's progress to SQLite backend before wiping session
    if (prevUser && !prevUser.isGuest) {
      try {
        localStorage.setItem(`silicon_drills_progress_${prevUser.id}`, JSON.stringify(prevProg));
        fetch('/api/db/sync-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user: prevUser, progress: prevProg }),
          keepalive: true
        }).catch(() => {});
      } catch (e) {}
    }

    try {
      sessionStorage.removeItem('psnacet_admin_authed');
      sessionStorage.removeItem('psnacet_admin_token');
    } catch (e) {}

    const guestUser: UserProfile = {
      ...DEFAULT_GUEST_USER,
      id: `guest_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    const guestProgress: UserProgress = {
      ...DEFAULT_PROGRESS,
      userId: guestUser.id,
      solvedProblemIds: [],
      savedCode: {},
      bookmarks: [],
      notes: {},
      streakDays: 1,
      lastActiveDate: new Date().toISOString().split('T')[0]
    };
    this.saveUser(guestUser);
    this.saveProgress(guestProgress, true);
    return { user: guestUser, progress: guestProgress };
  },

  // User Management
  getUser(): UserProfile {
    if (inMemoryUser) return inMemoryUser;
    try {
      const data = localStorage.getItem(USER_KEY);
      if (data) {
        inMemoryUser = JSON.parse(data);
        return inMemoryUser!;
      }
    } catch (e) {
      console.error('Failed to load user profile from storage', e);
    }
    inMemoryUser = { ...DEFAULT_GUEST_USER };
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(DEFAULT_GUEST_USER));
    } catch (e) {}
    return inMemoryUser;
  },

  saveUser(user: UserProfile): void {
    const isSwitchingUser = inMemoryUser && inMemoryUser.id !== user.id;
    inMemoryUser = user;
    if (isSwitchingUser) {
      inMemoryProgress = null;
    }
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      const prog = this.getProgress(user.id);
      triggerServerSync(user, prog);
    } catch (e) {
      console.error('Failed to save user profile', e);
    }
  },

  updateTrack(track: Track): UserProfile {
    const user = this.getUser();
    user.selectedTrack = track;
    this.saveUser(user);
    return user;
  },

  // Progress Management
  getProgress(userId?: string): UserProgress {
    if (inMemoryProgress && (!userId || inMemoryProgress.userId === userId)) {
      return inMemoryProgress;
    }
    try {
      const activeUser = this.getUser();
      const targetUserId = userId || (activeUser && !activeUser.isGuest ? activeUser.id : null);
      let data = localStorage.getItem(PROGRESS_KEY);
      if (targetUserId) {
        const userSpecificData = localStorage.getItem(`silicon_drills_progress_${targetUserId}`);
        if (userSpecificData) {
          data = userSpecificData;
        }
      }

      if (data) {
        const prog: UserProgress = JSON.parse(data);
        
        // Ensure arrays exist
        prog.solvedProblemIds = prog.solvedProblemIds || [];
        prog.savedCode = prog.savedCode || {};
        prog.attemptedProblemIds = prog.attemptedProblemIds || [];
        prog.errorAttemptsCount = prog.errorAttemptsCount || 0;
        prog.dailyAttempts = prog.dailyAttempts || {};
        prog.dailySolved = prog.dailySolved || {};
        prog.hourlyActivity = prog.hourlyActivity || {};
        prog.unlockedBadgeIds = prog.unlockedBadgeIds || [];
        prog.longestStreak = prog.longestStreak || Math.max(prog.streakDays || 1, 1);

        // Calculate streak
        const today = new Date().toISOString().split('T')[0];
        if (prog.lastActiveDate !== today) {
          const lastDate = new Date(prog.lastActiveDate);
          const currentDate = new Date(today);
          const diffDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
          if (diffDays === 1) {
            prog.streakDays = (prog.streakDays || 1) + 1;
          } else if (diffDays > 1) {
            prog.streakDays = 1;
          }
          prog.lastActiveDate = today;
        }
        
        if (prog.streakDays > (prog.longestStreak || 0)) {
          prog.longestStreak = prog.streakDays;
        }

        inMemoryProgress = prog;
        return prog;
      }
    } catch (e) {
      console.error('Failed to load progress from storage', e);
    }
    inMemoryProgress = { ...DEFAULT_PROGRESS };
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(DEFAULT_PROGRESS));
    } catch (e) {}
    return inMemoryProgress;
  },

  saveProgress(progress: UserProgress, immediate = false): void {
    inMemoryProgress = progress;
    const user = this.getUser();
    if (immediate) {
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
        if (user && !user.isGuest && user.id) {
          localStorage.setItem(`silicon_drills_progress_${user.id}`, JSON.stringify(progress));
        }
      } catch (e) {}
    } else {
      persistProgressDebounced(progress);
      if (user && !user.isGuest && user.id) {
        try {
          localStorage.setItem(`silicon_drills_progress_${user.id}`, JSON.stringify(progress));
        } catch (e) {}
      }
    }
    triggerServerSync(user, progress, immediate);
  },

  markProblemSolved(problemId: string, code?: string): UserProgress {
    const prog = this.getProgress();
    const today = new Date().toISOString().split('T')[0];
    const currentHour = new Date().getHours();

    if (!prog.solvedProblemIds.includes(problemId)) {
      prog.solvedProblemIds.push(problemId);
    }
    if (code) {
      prog.savedCode = prog.savedCode || {};
      prog.savedCode[problemId] = code;
    }

    prog.dailySolved = prog.dailySolved || {};
    prog.dailySolved[today] = (prog.dailySolved[today] || 0) + 1;

    prog.dailyAttempts = prog.dailyAttempts || {};
    prog.dailyAttempts[today] = (prog.dailyAttempts[today] || 0) + 1;

    prog.hourlyActivity = prog.hourlyActivity || {};
    prog.hourlyActivity[currentHour] = (prog.hourlyActivity[currentHour] || 0) + 1;

    // Immediately save locally and sync to SQLite database
    this.saveProgress(prog, true);

    // Also record accepted submission to ensure permanent SQL persistence in submissions table
    const user = this.getUser();
    if (user && !user.isGuest && code) {
      fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          userName: user.name,
          problemId,
          problemTitle: problemId,
          language: 'verilog',
          code,
          status: 'Accepted',
          passedTestCases: 8,
          totalTestCases: 8,
          executionTimeMs: 3.5,
          waveformDataJson: '[]'
        })
      }).catch(() => {});
    }

    return prog;
  },

  recordCodeAttempt(problemId: string, passed: boolean, code?: string): UserProgress {
    const prog = this.getProgress();
    prog.attemptedProblemIds = prog.attemptedProblemIds || [];
    if (!prog.attemptedProblemIds.includes(problemId)) {
      prog.attemptedProblemIds.push(problemId);
    }

    if (!passed) {
      prog.errorAttemptsCount = (prog.errorAttemptsCount || 0) + 1;
    }

    const today = new Date().toISOString().split('T')[0];
    const currentHour = new Date().getHours();

    prog.dailyAttempts = prog.dailyAttempts || {};
    prog.dailyAttempts[today] = (prog.dailyAttempts[today] || 0) + 1;

    prog.hourlyActivity = prog.hourlyActivity || {};
    prog.hourlyActivity[currentHour] = (prog.hourlyActivity[currentHour] || 0) + 1;

    if (passed) {
      if (!prog.solvedProblemIds.includes(problemId)) {
        prog.solvedProblemIds.push(problemId);
      }
      prog.dailySolved = prog.dailySolved || {};
      prog.dailySolved[today] = (prog.dailySolved[today] || 0) + 1;
    }

    if (code) {
      prog.savedCode = prog.savedCode || {};
      prog.savedCode[problemId] = code;
    }

    this.saveProgress(prog);
    return prog;
  },

  saveProblemCode(problemId: string, code: string, immediate = false): void {
    // 1. Instant in-memory cache update O(1) with 0ms latency
    const prog = this.getProgress();
    prog.savedCode = prog.savedCode || {};
    prog.savedCode[problemId] = code;
    inMemoryProgress = prog;

    if (codeSaveDebounceTimer) clearTimeout(codeSaveDebounceTimer);

    if (immediate) {
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(prog));
      } catch (e) {}
      const user = this.getUser();
      triggerServerSync(user, prog);
      return;
    }

    // 2. Debounce disk persistence and server sync by 800ms to eliminate UI stutter
    codeSaveDebounceTimer = setTimeout(() => {
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(prog));
      } catch (e) {}
      const user = this.getUser();
      triggerServerSync(user, prog);
    }, 800);
  },

  getSavedCode(problemId: string): string | undefined {
    const prog = this.getProgress();
    return prog.savedCode?.[problemId];
  },

  saveModelingCode(problemId: string, style: string, code: string): void {
    const KEY = 'silicon_drills_saved_modeling_code';
    try {
      const data = localStorage.getItem(KEY);
      const parsed = data ? JSON.parse(data) : {};
      const subKey = `${problemId}_${style}`;
      parsed[subKey] = code;
      localStorage.setItem(KEY, JSON.stringify(parsed));
    } catch (e) {}
  },

  getSavedModelingCode(problemId: string, style: string): string | undefined {
    const KEY = 'silicon_drills_saved_modeling_code';
    try {
      const data = localStorage.getItem(KEY);
      if (data) {
        const parsed = JSON.parse(data);
        const subKey = `${problemId}_${style}`;
        return parsed[subKey];
      }
    } catch (e) {}
    return undefined;
  },

  saveProblemTestbench(problemId: string, testbenchCode: string): void {
    const KEY = 'silicon_drills_saved_testbenches';
    try {
      const data = localStorage.getItem(KEY);
      const parsed = data ? JSON.parse(data) : {};
      parsed[problemId] = testbenchCode;
      localStorage.setItem(KEY, JSON.stringify(parsed));
    } catch (e) {}
  },

  getSavedTestbench(problemId: string): string | undefined {
    const KEY = 'silicon_drills_saved_testbenches';
    try {
      const data = localStorage.getItem(KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return parsed[problemId];
      }
    } catch (e) {}
    return undefined;
  },

  toggleBookmark(problemId: string): UserProgress {
    const prog = this.getProgress();
    if (prog.bookmarks.includes(problemId)) {
      prog.bookmarks = prog.bookmarks.filter(id => id !== problemId);
    } else {
      prog.bookmarks.push(problemId);
    }
    this.saveProgress(prog);
    return prog;
  },

  saveNote(problemId: string, note: string): UserProgress {
    const prog = this.getProgress();
    prog.notes[problemId] = note;
    this.saveProgress(prog);
    return prog;
  },

  // Custom Admin Problems
  getCustomProblems(): Problem[] {
    try {
      const data = localStorage.getItem(CUSTOM_PROBLEMS_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Failed to load custom problems', e);
    }
    return [];
  },

  saveCustomProblem(problem: Problem): void {
    const custom = this.getCustomProblems();
    const existingIndex = custom.findIndex(p => p.id === problem.id);
    if (existingIndex >= 0) {
      custom[existingIndex] = problem;
    } else {
      custom.unshift(problem);
    }
    try {
      localStorage.setItem(CUSTOM_PROBLEMS_KEY, JSON.stringify(custom));
    } catch (e) {
      console.error('Failed to save custom problem', e);
    }
  },

  updateCustomProblem(problem: Problem): void {
    this.saveCustomProblem(problem);
  },

  deleteCustomProblem(problemId: string): void {
    const custom = this.getCustomProblems().filter(p => p.id !== problemId);
    try {
      localStorage.setItem(CUSTOM_PROBLEMS_KEY, JSON.stringify(custom));
    } catch (e) {
      console.error('Failed to delete custom problem', e);
    }
  },

  // Export/Import Local Database
  exportDatabaseJSON(): string {
    const user = this.getUser();
    const progress = this.getProgress();
    const custom = this.getCustomProblems();
    return JSON.stringify({ user, progress, custom, exportedAt: new Date().toISOString() }, null, 2);
  },

  importDatabaseJSON(jsonStr: string): boolean {
    try {
      const data = JSON.parse(jsonStr);
      if (data.user) this.saveUser(data.user);
      if (data.progress) this.saveProgress(data.progress);
      if (data.custom && Array.isArray(data.custom)) {
        localStorage.setItem(CUSTOM_PROBLEMS_KEY, JSON.stringify(data.custom));
      }
      return true;
    } catch (e) {
      console.error('Failed to import database JSON', e);
      return false;
    }
  },

  // ============================================
  // DATABASE METHODS FOR LEARNING PLATFORM
  // ============================================

  // Log a Code Submission into SQLite Database
  async submitCodeToDatabase(payload: {
    userId: string;
    userName?: string;
    problemId: string;
    problemTitle?: string;
    language?: string;
    code: string;
    status: 'Accepted' | 'Wrong Answer' | 'Syntax Error' | 'Runtime Error' | 'Time Limit Exceeded';
    passedTestCases?: number;
    totalTestCases?: number;
    executionTimeMs?: number;
    waveformDataJson?: string;
  }): Promise<{ success: boolean; submission: SubmissionRecord; problemStats?: any }> {
    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to record submission in database.');
      return data;
    } catch (e) {
      console.error('Failed to record submission to SQLite DB:', e);
      throw e;
    }
  },

  // Fetch Submissions History
  async fetchSubmissions(userId?: string, problemId?: string, limit: number = 30): Promise<SubmissionRecord[]> {
    try {
      const params = new URLSearchParams();
      if (userId) params.append('userId', userId);
      if (problemId) params.append('problemId', problemId);
      params.append('limit', String(limit));

      const res = await fetch(`/api/submissions?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        return data.submissions || [];
      }
    } catch (e) {
      console.warn('Could not fetch submissions from DB:', e);
    }
    return [];
  },

  // Fetch Live Leaderboard
  async fetchLeaderboard(limit: number = 50): Promise<LeaderboardEntry[]> {
    try {
      const res = await fetch(`/api/leaderboard?limit=${limit}`);
      if (res.ok) {
        const data = await res.json();
        return data.leaderboard || [];
      }
    } catch (e) {
      console.warn('Could not fetch leaderboard from DB:', e);
    }
    return [];
  },

  // Fetch Live Platform Statistics
  async fetchPlatformStats(): Promise<PlatformStats | null> {
    try {
      const res = await fetch('/api/platform/stats');
      if (res.ok) {
        const data = await res.json();
        return data.stats || null;
      }
    } catch (e) {
      console.warn('Could not fetch platform stats from DB:', e);
    }
    return null;
  },

  // Fetch Problem Discussions
  async fetchDiscussions(problemId: string): Promise<ProblemDiscussion[]> {
    try {
      const res = await fetch(`/api/discussions/${encodeURIComponent(problemId)}`);
      if (res.ok) {
        const data = await res.json();
        return data.discussions || [];
      }
    } catch (e) {
      console.warn('Could not fetch discussions:', e);
    }
    return [];
  },

  // Post a New Discussion
  async postDiscussion(payload: {
    problemId: string;
    userId: string;
    userName: string;
    userAvatar?: string;
    title?: string;
    content: string;
  }): Promise<ProblemDiscussion | null> {
    try {
      const res = await fetch('/api/discussions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        return data.post;
      }
    } catch (e) {
      console.error('Failed to post discussion:', e);
    }
    return null;
  },

  // Upvote Discussion
  async upvoteDiscussion(discussionId: string): Promise<boolean> {
    try {
      const res = await fetch(`/api/discussions/${encodeURIComponent(discussionId)}/upvote`, {
        method: 'POST'
      });
      return res.ok;
    } catch (e) {
      return false;
    }
  },

  // Fetch News Discussions connected to Google Live Tech News
  async fetchNewsDiscussions(articleId?: string): Promise<NewsDiscussion[]> {
    try {
      const url = articleId && articleId !== 'all'
        ? `/api/news-discussions?articleId=${encodeURIComponent(articleId)}`
        : '/api/news-discussions';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return data.discussions || [];
      }
    } catch (e) {
      console.warn('Could not fetch news discussions:', e);
    }
    return [];
  },

  // Post a New Discussion on a Google Live News Article
  async postNewsDiscussion(payload: {
    articleId: string;
    articleTitle?: string;
    userId: string;
    userName: string;
    userAvatar?: string;
    title?: string;
    content: string;
  }): Promise<NewsDiscussion | null> {
    try {
      const res = await fetch('/api/news-discussions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        return data.discussion || null;
      }
    } catch (e) {
      console.error('Failed to post news discussion:', e);
    }
    return null;
  },

  // Upvote a Google Live News Discussion
  async upvoteNewsDiscussion(discussionId: string): Promise<boolean> {
    try {
      const res = await fetch(`/api/news-discussions/${encodeURIComponent(discussionId)}/upvote`, {
        method: 'POST'
      });
      return res.ok;
    } catch (e) {
      return false;
    }
  },

  // Authenticate Admin Privileges against Server
  async loginAdmin(email: string, password: string): Promise<{ success: boolean; token?: string; user?: any; error?: string }> {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || 'Admin authentication failed.' };
      }
      if (data.user && data.progress) {
        this.saveUser(data.user);
        this.saveProgress(data.progress, true);
      }
      return { success: true, token: data.token, user: data.user };
    } catch (e: any) {
      return { success: false, error: e.message || 'Network error during admin authentication.' };
    }
  },

  // Admin Dashboard Services
  async fetchAdminStats(adminToken?: string): Promise<any> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch('/api/admin/overview-stats', {
      headers: { 'x-admin-key': token }
    });
    if (!res.ok) throw new Error('Failed to load admin stats.');
    return await res.json();
  },

  async fetchAdminUsers(adminToken?: string, search?: string): Promise<any[]> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const url = search ? `/api/admin/users?search=${encodeURIComponent(search)}` : '/api/admin/users';
    const res = await fetch(url, {
      headers: { 'x-admin-key': token }
    });
    if (!res.ok) throw new Error('Failed to load users.');
    const data = await res.json();
    return data.users || [];
  },

  async updateAdminUserRole(adminToken: string, userId: string, role: 'admin' | 'student', performedBy?: string): Promise<boolean> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch(`/api/admin/users/${encodeURIComponent(userId)}/role`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': token
      },
      body: JSON.stringify({ role, performedBy })
    });
    return res.ok;
  },

  async deleteAdminUser(adminToken: string, userId: string, performedBy?: string): Promise<boolean> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch(`/api/admin/users/${encodeURIComponent(userId)}?performedBy=${encodeURIComponent(performedBy || 'Admin')}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': token }
    });
    return res.ok;
  },

  async fetchAdminAllProblems(adminToken?: string, search?: string, topic?: string): Promise<any[]> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    let url = '/api/admin/all-problems?';
    if (search) url += `search=${encodeURIComponent(search)}&`;
    if (topic && topic !== 'all') url += `topic=${encodeURIComponent(topic)}&`;
    const res = await fetch(url, {
      headers: { 'x-admin-key': token }
    });
    if (!res.ok) throw new Error('Failed to load problems.');
    const data = await res.json();
    return data.problems || [];
  },

  async saveAdminProblem(adminToken: string, problem: Problem): Promise<boolean> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch('/api/admin/problems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': token
      },
      body: JSON.stringify({ adminAuthKey: token, problem })
    });
    return res.ok;
  },

  async deleteAdminProblem(adminToken: string, problemId: string): Promise<boolean> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch(`/api/admin/problems/${encodeURIComponent(problemId)}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': token }
    });
    return res.ok;
  },

  async fetchAdminInterviews(adminToken?: string, company?: string): Promise<any[]> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const url = company && company !== 'all' ? `/api/admin/interviews?company=${encodeURIComponent(company)}` : '/api/admin/interviews';
    const res = await fetch(url, {
      headers: { 'x-admin-key': token }
    });
    if (!res.ok) throw new Error('Failed to load interview questions.');
    const data = await res.json();
    return data.interviews || [];
  },

  async saveAdminInterview(adminToken: string, item: any): Promise<boolean> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const isEdit = Boolean(item.id);
    const url = isEdit ? `/api/admin/interviews/${encodeURIComponent(item.id)}` : '/api/admin/interviews';
    const method = isEdit ? 'PUT' : 'POST';
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': token
      },
      body: JSON.stringify(item)
    });
    return res.ok;
  },

  async deleteAdminInterview(adminToken: string, id: string): Promise<boolean> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch(`/api/admin/interviews/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': token }
    });
    return res.ok;
  },

  async fetchAdminStudyPlans(adminToken?: string): Promise<any[]> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch('/api/admin/study-plans', {
      headers: { 'x-admin-key': token }
    });
    if (!res.ok) throw new Error('Failed to load study plans.');
    const data = await res.json();
    return data.plans || [];
  },

  async saveAdminStudyPlan(adminToken: string, plan: any): Promise<boolean> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const isEdit = Boolean(plan.id);
    const url = isEdit ? `/api/admin/study-plans/${encodeURIComponent(plan.id)}` : '/api/admin/study-plans';
    const method = isEdit ? 'PUT' : 'POST';
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': token
      },
      body: JSON.stringify(plan)
    });
    return res.ok;
  },

  async deleteAdminStudyPlan(adminToken: string, id: string): Promise<boolean> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch(`/api/admin/study-plans/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': token }
    });
    return res.ok;
  },

  async fetchAdminAnalytics(adminToken?: string): Promise<any> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch('/api/admin/analytics', {
      headers: { 'x-admin-key': token }
    });
    if (!res.ok) throw new Error('Failed to load analytics.');
    return await res.json();
  },

  async fetchAdminTableData(adminToken: string, table: string, limit = 50): Promise<{ count: number; rows: any[] }> {
    const token = adminToken || sessionStorage.getItem('psnacet_admin_token') || '';
    const res = await fetch(`/api/admin/table-data/${encodeURIComponent(table)}?limit=${limit}`, {
      headers: { 'x-admin-key': token }
    });
    if (!res.ok) throw new Error('Failed to load table records.');
    return await res.json();
  }
};

