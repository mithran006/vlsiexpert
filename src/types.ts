export type Topic = 'verilog' | 'systemverilog' | 'vhdl' | 'fpga' | 'linux' | 'uvm' | 'dft' | 'embedded_c' | 'mnemonics' | 'arduino' | 'python_hw' | 'soc_design' | 'cv_robotics' | 'rtos_problems' | 'vlsi_graph';

export type Track = 'frontend' | 'backend' | 'both';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface SignalConfig {
  name: string;
  type: 'clock' | 'input' | 'output' | 'internal';
  initialValue: string; // '0', '1', 'x', 'z', or hex value
  description?: string;
}

export interface ExpectedOutput {
  cycle: number;
  signalName: string;
  value: string;
}

export interface TestbenchConfig {
  signals: SignalConfig[];
  cycles: number;
  expectedOutputs: ExpectedOutput[];
  testScript?: string;
}

export interface Problem {
  id: string;
  title: string;
  topic: Topic;
  track: Track;
  difficulty: Difficulty;
  description: string;
  workedExample: string;
  starterCode: string;
  solutionCode: string;
  hints: string[];
  tags: string[];
  testbenchConfig: TestbenchConfig;
  signals?: SignalConfig[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  isGuest: boolean;
  selectedTrack: Track;
  rollNumber?: string;
  collegeName?: string;
  yearOfStudy?: string;
  department?: string;
  role?: 'student' | 'admin';
  authProvider?: 'password' | 'google';
  avatarUrl?: string;
  googleId?: string;
  emailVerified?: boolean;
  xp?: number;
  level?: number;
  joinedDate?: string;
  createdAt: string;
}

export interface UserProgress {
  userId: string;
  solvedProblemIds: string[];
  savedCode: Record<string, string>; // problemId -> code
  bookmarks: string[];
  notes: Record<string, string>; // problemId -> note
  streakDays: number;
  longestStreak?: number;
  lastActiveDate: string;
  attemptedProblemIds?: string[];
  errorAttemptsCount?: number;
  dailyAttempts?: Record<string, number>; // YYYY-MM-DD -> count
  dailySolved?: Record<string, number>; // YYYY-MM-DD -> count
  hourlyActivity?: Record<number, number>; // Hour 0-23 -> count
  unlockedBadgeIds?: string[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  category: 'milestone' | 'consistency' | 'resilience' | 'topic';
  icon: string; // Lucide icon name or emoji
  color: string;
  bgGradient: string;
  borderColor: string;
  requiredCount: number;
  currentCount: number;
  unlocked: boolean;
  unlockedAt?: string;
  requirementText: string;
}

export interface WaveformSample {
  cycle: number;
  time?: number;
  signals: Record<string, string>; // signalName -> value ('0', '1', 'x', 'z', '10', etc)
}

export interface TestVectorAssertion {
  cycle: number;
  timeNs: number;
  inputs: Record<string, string>;
  actualOutputs: Record<string, string>;
  expectedOutputs: Record<string, string>;
  passed: boolean;
  mismatches?: string[];
}

export interface SimulationResult {
  passed: boolean;
  message: string;
  samples: WaveformSample[];
  logs: string[];
  errorLine?: number;
  errorColumn?: number;
  errorSnippet?: string;
  errorType?: 'syntax' | 'runtime' | 'logic';
  errorHint?: string;
  testVectors?: TestVectorAssertion[];
  passedTestsCount?: number;
  totalTestsCount?: number;
}

export interface TopicMeta {
  id: Topic;
  name: string;
  shortCode: string;
  iconName: string;
  color: string;
  bgLight: string;
  description: string;
  recommendedTrack: Track;
}

export interface SubmissionRecord {
  id: string;
  userId: string;
  userName: string;
  problemId: string;
  problemTitle: string;
  language: string;
  code: string;
  status: 'Accepted' | 'Wrong Answer' | 'Syntax Error' | 'Runtime Error' | 'Time Limit Exceeded';
  passedTestCases: number;
  totalTestCases: number;
  executionTimeMs: number;
  waveformDataJson?: string;
  submittedAt: string;
}

export interface ProblemDiscussion {
  id: string;
  problemId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  title?: string;
  content: string;
  upvotes: number;
  createdAt: string;
}

export interface NewsDiscussion {
  id: string;
  articleId: string;
  articleTitle?: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  title?: string;
  content: string;
  upvotes: number;
  createdAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  department: string;
  collegeName: string;
  solvedCount: number;
  streakDays: number;
  totalScore: number;
  avatarUrl?: string;
  lastActiveDate: string;
}

export interface PlatformStats {
  totalUsers: number;
  totalProblems: number;
  totalSubmissions: number;
  totalAccepted: number;
  acceptanceRate: number;
  activeStreaks: number;
}
