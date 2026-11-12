import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  ShieldCheck, Database, Users, BookOpen, HelpCircle, BarChart3, 
  PlusCircle, Edit3, Trash2, Search, CheckCircle2, AlertCircle, 
  RotateCcw, Download, Upload, Terminal, Layers, Code2, 
  Sparkles, Eye, EyeOff, Save, X, ChevronRight, Activity, 
  Cpu, Filter, Clock, FileText, Check, Lock, ArrowUpRight,
  ExternalLink, UserCheck, Flame, RefreshCw, LogOut, ArrowLeft
} from 'lucide-react';
import { UserProfile, Problem, Topic, Track, Difficulty } from '../types';
import { storageService } from '../services/storageService';
import { TOPIC_METAS } from '../data/topicMeta';

interface AdminDashboardProps {
  currentUser: UserProfile;
  onNavigateBack: () => void;
  onSelectProblem?: (problem: Problem) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  onNavigateBack,
  onSelectProblem
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'problems' | 'interviews' | 'study_plans' | 'database' | 'analytics'>('overview');
  const [adminToken, setAdminToken] = useState<string>(() => sessionStorage.getItem('psnacet_admin_token') || 'vlsidevelop');
  
  // Overview Stats
  const [stats, setStats] = useState<any>(null);
  const [loadingStats, setLoadingStats] = useState<boolean>(true);

  // Users State
  const [usersList, setUsersList] = useState<any[]>([]);
  const [userSearch, setUserSearch] = useState<string>('');
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);

  // Problems State
  const [problemsList, setProblemsList] = useState<any[]>([]);
  const [problemSearch, setProblemSearch] = useState<string>('');
  const [problemTopicFilter, setProblemTopicFilter] = useState<string>('all');
  const [loadingProblems, setLoadingProblems] = useState<boolean>(false);
  const [isProblemModalOpen, setIsProblemModalOpen] = useState<boolean>(false);
  const [editingProblem, setEditingProblem] = useState<any | null>(null);

  // Problem Form State
  const [probId, setProbId] = useState('');
  const [probTitle, setProbTitle] = useState('');
  const [probTopic, setProbTopic] = useState<Topic>('verilog');
  const [probTrack, setProbTrack] = useState<Track>('frontend');
  const [probDifficulty, setProbDifficulty] = useState<Difficulty>('medium');
  const [probDescription, setProbDescription] = useState('');
  const [probWorkedExample, setProbWorkedExample] = useState('');
  const [probStarterCode, setProbStarterCode] = useState('');
  const [probSolutionCode, setProbSolutionCode] = useState('');
  const [probHints, setProbHints] = useState('');
  const [probTags, setProbTags] = useState('');
  const [probCycles, setProbCycles] = useState<number>(8);
  const [probActionMsg, setProbActionMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Interview Questions State
  const [interviewsList, setInterviewsList] = useState<any[]>([]);
  const [interviewCompanyFilter, setInterviewCompanyFilter] = useState<string>('all');
  const [interviewSearch, setInterviewSearch] = useState<string>('');
  const [loadingInterviews, setLoadingInterviews] = useState<boolean>(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState<boolean>(false);
  const [editingInterview, setEditingInterview] = useState<any | null>(null);

  // Interview Form State
  const [iqCompanyId, setIqCompanyId] = useState<string>('samsung');
  const [iqCategory, setIqCategory] = useState<string>('RTL & Microarchitecture');
  const [iqQuestion, setIqQuestion] = useState<string>('');
  const [iqDifficulty, setIqDifficulty] = useState<string>('Medium');
  const [iqExperience, setIqExperience] = useState<string>('All Levels');
  const [iqAnswer, setIqAnswer] = useState<string>('');
  const [iqKeyPoints, setIqKeyPoints] = useState<string>('');
  const [iqCodingChallenge, setIqCodingChallenge] = useState<string>('');
  const [iqPublished, setIqPublished] = useState<boolean>(true);
  const [iqActionMsg, setIqActionMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Study Plans State
  const [studyPlansList, setStudyPlansList] = useState<any[]>([]);
  const [loadingStudyPlans, setLoadingStudyPlans] = useState<boolean>(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState<boolean>(false);
  const [editingPlan, setEditingPlan] = useState<any | null>(null);

  // Study Plan Form State
  const [spTitle, setSpTitle] = useState('');
  const [spCategory, setSpCategory] = useState('Physical Design & Algorithms');
  const [spDifficulty, setSpDifficulty] = useState('Advanced');
  const [spDuration, setSpDuration] = useState<number>(6);
  const [spDescription, setSpDescription] = useState('');
  const [spObjectives, setSpObjectives] = useState('');
  const [spModules, setSpModules] = useState('');
  const [spPublished, setSpPublished] = useState<boolean>(true);
  const [spActionMsg, setSpActionMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Database Management State
  const [selectedDbTable, setSelectedDbTable] = useState<string>('users');
  const [tableRows, setTableRows] = useState<any[]>([]);
  const [loadingTable, setLoadingTable] = useState<boolean>(false);
  const [sqlQuery, setSqlQuery] = useState<string>('SELECT id, name, email, role, created_at FROM users LIMIT 10;');
  const [sqlResult, setSqlResult] = useState<any | null>(null);
  const [executingSql, setExecutingSql] = useState<boolean>(false);
  const [dbBackupMsg, setDbBackupMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Analytics State
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [loadingAnalytics, setLoadingAnalytics] = useState<boolean>(false);

  // Load Overview Stats
  const loadStats = useCallback(async () => {
    setLoadingStats(true);
    try {
      const data = await storageService.fetchAdminStats(adminToken);
      if (data && data.success) {
        setStats(data);
      }
    } catch (e) {
      console.warn("Could not load stats:", e);
    } finally {
      setLoadingStats(false);
    }
  }, [adminToken]);

  // Load Problems
  const loadProblems = useCallback(async () => {
    setLoadingProblems(true);
    try {
      const data = await storageService.fetchAdminAllProblems(adminToken, problemSearch, problemTopicFilter);
      setProblemsList(data);
    } catch (e) {
      console.warn("Could not load problems:", e);
    } finally {
      setLoadingProblems(false);
    }
  }, [adminToken, problemSearch, problemTopicFilter]);

  // Load Users
  const loadUsers = useCallback(async () => {
    setLoadingUsers(true);
    try {
      const data = await storageService.fetchAdminUsers(adminToken, userSearch);
      setUsersList(data);
    } catch (e) {
      console.warn("Could not load users:", e);
    } finally {
      setLoadingUsers(false);
    }
  }, [adminToken, userSearch]);

  // Load Interviews
  const loadInterviews = useCallback(async () => {
    setLoadingInterviews(true);
    try {
      const data = await storageService.fetchAdminInterviews(adminToken, interviewCompanyFilter);
      setInterviewsList(data);
    } catch (e) {
      console.warn("Could not load interviews:", e);
    } finally {
      setLoadingInterviews(false);
    }
  }, [adminToken, interviewCompanyFilter]);

  // Load Study Plans
  const loadStudyPlans = useCallback(async () => {
    setLoadingStudyPlans(true);
    try {
      const data = await storageService.fetchAdminStudyPlans(adminToken);
      setStudyPlansList(data);
    } catch (e) {
      console.warn("Could not load study plans:", e);
    } finally {
      setLoadingStudyPlans(false);
    }
  }, [adminToken]);

  // Load Table Data
  const loadTableData = useCallback(async (table: string) => {
    setLoadingTable(true);
    try {
      const data = await storageService.fetchAdminTableData(adminToken, table, 60);
      setTableRows(data.rows || []);
    } catch (e) {
      console.warn("Could not load table data:", e);
    } finally {
      setLoadingTable(false);
    }
  }, [adminToken]);

  // Load Analytics
  const loadAnalytics = useCallback(async () => {
    setLoadingAnalytics(true);
    try {
      const data = await storageService.fetchAdminAnalytics(adminToken);
      if (data && data.success) {
        setAnalyticsData(data);
      }
    } catch (e) {
      console.warn("Could not load analytics:", e);
    } finally {
      setLoadingAnalytics(false);
    }
  }, [adminToken]);

  // Initial tab loading
  useEffect(() => {
    loadStats();
  }, [loadStats]);

  useEffect(() => {
    if (activeTab === 'problems') loadProblems();
    else if (activeTab === 'interviews') loadInterviews();
    else if (activeTab === 'study_plans') loadStudyPlans();
    else if (activeTab === 'database') loadTableData(selectedDbTable);
    else if (activeTab === 'analytics') loadAnalytics();
  }, [activeTab, loadProblems, loadInterviews, loadStudyPlans, loadTableData, loadAnalytics, selectedDbTable]);

  // Handle SQL query execution
  const handleExecuteSql = async () => {
    if (!sqlQuery.trim()) return;
    setExecutingSql(true);
    try {
      const res = await fetch('/api/db/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminToken
        },
        body: JSON.stringify({ sql: sqlQuery })
      });
      const data = await res.json();
      setSqlResult(data);
    } catch (e: any) {
      setSqlResult({ error: e.message });
    } finally {
      setExecutingSql(false);
    }
  };

  // Handle SQL Backup Creation
  const handleCreateBackup = async () => {
    setDbBackupMsg(null);
    try {
      const res = await fetch('/api/admin/backups/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminToken
        }
      });
      const data = await res.json();
      if (data.success) {
        setDbBackupMsg({ text: `Backup created: ${data.backup?.filename} (${data.backup?.records_count || 0} records)`, type: 'success' });
        loadStats();
      } else {
        setDbBackupMsg({ text: data.error || 'Failed to create backup snapshot.', type: 'error' });
      }
    } catch (e: any) {
      setDbBackupMsg({ text: e.message || 'Error creating database backup.', type: 'error' });
    }
  };

  // Open Problem Form for New Problem
  const handleOpenNewProblemModal = () => {
    setEditingProblem(null);
    setProbId(`v-custom-${Date.now().toString(36)}`);
    setProbTitle('');
    setProbTopic('verilog');
    setProbTrack('frontend');
    setProbDifficulty('medium');
    setProbDescription('');
    setProbWorkedExample('');
    setProbStarterCode('module circuit (\n  input wire clk,\n  input wire rst,\n  input wire din,\n  output reg [7:0] q\n);\n  // Write RTL implementation here\nendmodule');
    setProbSolutionCode('module circuit (\n  input wire clk,\n  input wire rst,\n  input wire din,\n  output reg [7:0] q\n);\n  always @(posedge clk or posedge rst) begin\n    if (rst) q <= 8\'b0;\n    else q <= {q[6:0], din};\n  end\nendmodule');
    setProbHints('Consider non-blocking assignment\nConcatenate bits using {q[6:0], din}');
    setProbTags('RTL, Shift Register, Verilog');
    setProbCycles(8);
    setProbActionMsg(null);
    setIsProblemModalOpen(true);
  };

  // Open Problem Form for Editing Existing Problem
  const handleEditProblem = (prob: any) => {
    setEditingProblem(prob);
    setProbId(prob.id);
    setProbTitle(prob.title);
    setProbTopic(prob.topic);
    setProbTrack(prob.track || 'frontend');
    setProbDifficulty(prob.difficulty || 'medium');
    setProbDescription(prob.description || '');
    setProbWorkedExample(prob.worked_example || prob.workedExample || '');
    setProbStarterCode(prob.starter_code || prob.starterCode || '');
    setProbSolutionCode(prob.solution_code || prob.solutionCode || '');
    const hints = Array.isArray(prob.hints) ? prob.hints.join('\n') : '';
    setProbHints(hints);
    const tags = Array.isArray(prob.tags) ? prob.tags.join(', ') : '';
    setProbTags(tags);
    setProbCycles(prob.testbench_config?.cycles || 8);
    setProbActionMsg(null);
    setIsProblemModalOpen(true);
  };

  // Save Problem
  const handleSaveProblem = async (e: React.FormEvent) => {
    e.preventDefault();
    setProbActionMsg(null);
    try {
      const hintsArr = probHints.split('\n').map(h => h.trim()).filter(Boolean);
      const tagsArr = probTags.split(',').map(t => t.trim()).filter(Boolean);

      const problemPayload: Problem = {
        id: probId.trim(),
        title: probTitle.trim(),
        topic: probTopic,
        track: probTrack,
        difficulty: probDifficulty,
        description: probDescription.trim(),
        workedExample: probWorkedExample.trim(),
        starterCode: probStarterCode.trim(),
        solutionCode: probSolutionCode.trim(),
        hints: hintsArr,
        tags: tagsArr,
        testbenchConfig: {
          signals: [
            { name: 'clk', type: 'clock', initialValue: '0', description: 'Clock signal' },
            { name: 'rst', type: 'input', initialValue: '0', description: 'Active-high reset' },
            { name: 'din', type: 'input', initialValue: '1', description: 'Serial data input' },
            { name: 'q[7:0]', type: 'output', initialValue: '00000000', description: '8-bit shifted register' }
          ],
          cycles: probCycles,
          expectedOutputs: []
        }
      };

      const ok = await storageService.saveAdminProblem(adminToken, problemPayload);
      if (ok) {
        setProbActionMsg({ text: `Problem "${probTitle}" successfully saved to database!`, type: 'success' });
        loadProblems();
        loadStats();
        setTimeout(() => setIsProblemModalOpen(false), 1200);
      } else {
        setProbActionMsg({ text: 'Failed to save problem to database.', type: 'error' });
      }
    } catch (e: any) {
      setProbActionMsg({ text: e.message || 'Error saving problem.', type: 'error' });
    }
  };

  // Delete Problem
  const handleDeleteProblem = async (problemId: string, title: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete problem "${title}"?`)) return;
    try {
      const ok = await storageService.deleteAdminProblem(adminToken, problemId);
      if (ok) {
        loadProblems();
        loadStats();
      }
    } catch (e: any) {
      alert(`Delete error: ${e.message}`);
    }
  };

  // Open Interview Form
  const handleOpenNewInterviewModal = () => {
    setEditingInterview(null);
    setIqCompanyId('samsung');
    setIqCategory('RTL & Microarchitecture');
    setIqQuestion('');
    setIqDifficulty('Medium');
    setIqExperience('All Levels');
    setIqAnswer('');
    setIqKeyPoints('Key architecture concept\nTiming & latency trade-offs');
    setIqCodingChallenge('');
    setIqPublished(true);
    setIqActionMsg(null);
    setIsInterviewModalOpen(true);
  };

  const handleEditInterview = (item: any) => {
    setEditingInterview(item);
    setIqCompanyId(item.company_id);
    setIqCategory(item.category);
    setIqQuestion(item.question);
    setIqDifficulty(item.difficulty);
    setIqExperience(item.experience_level || 'All Levels');
    setIqAnswer(item.sample_answer || '');
    const kp = Array.isArray(item.key_points) ? item.key_points.join('\n') : '';
    setIqKeyPoints(kp);
    setIqCodingChallenge(item.coding_challenge || '');
    setIqPublished(item.is_published !== false);
    setIqActionMsg(null);
    setIsInterviewModalOpen(true);
  };

  const handleSaveInterview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIqActionMsg(null);
    try {
      const kpArr = iqKeyPoints.split('\n').map(p => p.trim()).filter(Boolean);
      const payload = {
        id: editingInterview?.id,
        company_id: iqCompanyId,
        category: iqCategory.trim(),
        question: iqQuestion.trim(),
        difficulty: iqDifficulty,
        experience_level: iqExperience,
        sample_answer: iqAnswer.trim(),
        key_points: kpArr,
        coding_challenge: iqCodingChallenge.trim(),
        is_published: iqPublished,
        performedBy: currentUser.name || 'Admin'
      };

      const ok = await storageService.saveAdminInterview(adminToken, payload);
      if (ok) {
        setIqActionMsg({ text: 'Interview question successfully saved!', type: 'success' });
        loadInterviews();
        loadStats();
        setTimeout(() => setIsInterviewModalOpen(false), 1200);
      } else {
        setIqActionMsg({ text: 'Failed to save interview question.', type: 'error' });
      }
    } catch (e: any) {
      setIqActionMsg({ text: e.message || 'Error saving interview question.', type: 'error' });
    }
  };

  const handleDeleteInterview = async (id: string) => {
    if (!window.confirm('Delete this interview question?')) return;
    try {
      const ok = await storageService.deleteAdminInterview(adminToken, id);
      if (ok) {
        loadInterviews();
        loadStats();
      }
    } catch (e: any) {
      alert(`Delete error: ${e.message}`);
    }
  };

  // Open Study Plan Form
  const handleOpenNewPlanModal = () => {
    setEditingPlan(null);
    setSpTitle('');
    setSpCategory('Physical Design & Algorithms');
    setSpDifficulty('Intermediate');
    setSpDuration(6);
    setSpDescription('');
    setSpObjectives('Master key algorithms\nComplete all hands-on labs');
    setSpModules('Week 1: Foundations\nWeek 2: Advanced Labs');
    setSpPublished(true);
    setSpActionMsg(null);
    setIsPlanModalOpen(true);
  };

  const handleEditStudyPlan = (plan: any) => {
    setEditingPlan(plan);
    setSpTitle(plan.title);
    setSpCategory(plan.category);
    setSpDifficulty(plan.difficulty);
    setSpDuration(plan.duration_weeks || 4);
    setSpDescription(plan.description || '');
    const obj = Array.isArray(plan.learning_objectives) ? plan.learning_objectives.join('\n') : '';
    setSpObjectives(obj);
    const mod = Array.isArray(plan.modules) ? plan.modules.map((m: any) => `${m.title || m}`).join('\n') : '';
    setSpModules(mod);
    setSpPublished(plan.is_published !== false);
    setSpActionMsg(null);
    setIsPlanModalOpen(true);
  };

  const handleSaveStudyPlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setSpActionMsg(null);
    try {
      const objArr = spObjectives.split('\n').map(o => o.trim()).filter(Boolean);
      const modArr = spModules.split('\n').map((m, idx) => ({ week: idx + 1, title: m.trim(), status: 'Core' })).filter(m => Boolean(m.title));

      const payload = {
        id: editingPlan?.id,
        title: spTitle.trim(),
        category: spCategory,
        difficulty: spDifficulty,
        duration_weeks: spDuration,
        description: spDescription.trim(),
        learning_objectives: objArr,
        modules: modArr,
        is_published: spPublished,
        performedBy: currentUser.name || 'Admin'
      };

      const ok = await storageService.saveAdminStudyPlan(adminToken, payload);
      if (ok) {
        setSpActionMsg({ text: 'Study plan successfully saved!', type: 'success' });
        loadStudyPlans();
        loadStats();
        setTimeout(() => setIsPlanModalOpen(false), 1200);
      } else {
        setSpActionMsg({ text: 'Failed to save study plan.', type: 'error' });
      }
    } catch (e: any) {
      setSpActionMsg({ text: e.message || 'Error saving study plan.', type: 'error' });
    }
  };

  const handleDeleteStudyPlan = async (id: string, title: string) => {
    if (!window.confirm(`Delete study plan "${title}"?`)) return;
    try {
      const ok = await storageService.deleteAdminStudyPlan(adminToken, id);
      if (ok) {
        loadStudyPlans();
        loadStats();
      }
    } catch (e: any) {
      alert(`Delete error: ${e.message}`);
    }
  };

  // Toggle user role
  const handleToggleUserRole = async (userId: string, currentRole: string) => {
    const newRole = currentRole === 'admin' ? 'student' : 'admin';
    if (!window.confirm(`Are you sure you want to change user role to "${newRole}"?`)) return;
    try {
      const ok = await storageService.updateAdminUserRole(adminToken, userId, newRole, currentUser.name);
      if (ok) {
        loadUsers();
        loadStats();
      }
    } catch (e: any) {
      alert(`Role update error: ${e.message}`);
    }
  };

  const handleDeleteUser = async (userId: string, name: string) => {
    if (!window.confirm(`Permanently delete account for "${name}"? This removes all progress and submissions.`)) return;
    try {
      const ok = await storageService.deleteAdminUser(adminToken, userId, currentUser.name);
      if (ok) {
        loadUsers();
        loadStats();
      }
    } catch (e: any) {
      alert(`Delete error: ${e.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f1f3f7] font-sans">
      
      {/* Top Banner: Admin Authorization Header */}
      <div className="bg-[#111217] border-b border-[#22242f] px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-16 z-30 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e5a93c]/15 border border-[#e5a93c]/40 flex items-center justify-center text-[#e5a93c] shadow-inner">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black text-white tracking-wide">
                VLSI EXPERT <span className="text-[#e5a93c]">ADMIN CONSOLE</span>
              </h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#e5a93c] text-[#0a0b0e] tracking-wider">
                Full Privileges
              </span>
            </div>
            <p className="text-xs text-[#9da3b4] flex items-center gap-1.5 mt-0.5">
              <span>Admin:</span>
              <span className="text-white font-medium">{currentUser.name}</span>
              <span className="text-[#4b5563]">•</span>
              <span className="font-mono text-[#e5a93c]">{currentUser.email}</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              loadStats();
              if (activeTab === 'problems') loadProblems();
              else if (activeTab === 'interviews') loadInterviews();
              else if (activeTab === 'study_plans') loadStudyPlans();
              else if (activeTab === 'database') loadTableData(selectedDbTable);
              else if (activeTab === 'analytics') loadAnalytics();
            }}
            className="h-8 px-3 rounded-lg bg-[#181920] hover:bg-[#22242f] border border-[#2b2d39] text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Refresh database records"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={onNavigateBack}
            className="h-8 px-3.5 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            title="Switch to Student / Normal Dashboard"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Student View</span>
          </button>
        </div>
      </div>

      {/* Main Admin Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
        <div className="flex items-center gap-2 border-b border-[#22242f] overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'overview', label: 'Dashboard Overview', icon: BarChart3 },
            { id: 'problems', label: 'Problem Management', icon: Code2 },
            { id: 'interviews', label: 'Interview Management', icon: HelpCircle },
            { id: 'study_plans', label: 'Study Plan Management', icon: BookOpen },
            { id: 'database', label: 'Database Management', icon: Database },
            { id: 'analytics', label: 'Usage & Analytics', icon: Activity },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`h-9 px-4 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#e5a93c] text-[#0a0b0e] shadow-md shadow-[#e5a93c]/10'
                    : 'bg-[#111217] text-[#9da3b4] hover:text-white hover:bg-[#181920] border border-[#22242f]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0a0b0e]' : 'text-[#e5a93c]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">

        {/* ============================================================ */}
        {/* TAB A: OVERVIEW */}
        {/* ============================================================ */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* Top Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {[
                { label: 'Registered Users', val: stats?.totalUsers ?? '...', icon: Users, color: 'text-amber-400' },
                { label: 'Active Learners', val: stats?.activeUsers ?? '...', icon: Flame, color: 'text-amber-500' },
                { label: 'Total Problems', val: stats?.totalProblems ?? '...', icon: Code2, color: 'text-yellow-400' },
                { label: 'Interview Questions', val: stats?.totalInterviews ?? '...', icon: HelpCircle, color: 'text-amber-300' },
                { label: 'Study Plans', val: stats?.totalStudyPlans ?? '...', icon: BookOpen, color: 'text-amber-400' },
                { label: 'Acceptance Rate', val: `${stats?.acceptanceRate ?? 0}%`, icon: CheckCircle2, color: 'text-yellow-400' }
              ].map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="bg-[#111217] border border-[#22242f] rounded-xl p-4 flex flex-col justify-between hover:border-[#e5a93c]/50 transition-all shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-[#9da3b4]">{m.label}</span>
                      <Icon className={`w-4 h-4 ${m.color}`} />
                    </div>
                    <div className="text-2xl font-black text-white font-mono tracking-tight">{m.val}</div>
                  </div>
                );
              })}
            </div>

            {/* Language Breakdown & Submissions Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Problem Breakdown by Topic */}
              <div className="lg:col-span-2 bg-[#111217] border border-[#22242f] rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#22242f]">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">Problems by Subject Track</h3>
                    <p className="text-xs text-[#9da3b4]">Curriculum hardware drills across all 15 domains</p>
                  </div>
                  <span className="text-xs font-mono text-[#e5a93c] font-bold">
                    {stats?.totalProblems || 0} Total
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {(stats?.problemsByTopic || []).map((t: any) => {
                    const meta = TOPIC_METAS.find(m => m.id === t.topic);
                    return (
                      <div key={t.topic} className="bg-[#181920] border border-[#2b2d39] rounded-lg p-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
                          <span className="text-xs font-medium text-slate-200 truncate max-w-[120px]">{meta?.name || t.topic}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#e5a93c] px-2 py-0.5 rounded bg-[#0a0b0e]">
                          {t.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submissions & System Pulse */}
              <div className="bg-[#111217] border border-[#22242f] rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Execution Metrics</h3>
                  <p className="text-xs text-[#9da3b4] mb-4">Real simulation runs recorded in SQLite</p>

                  <div className="space-y-3">
                    <div className="bg-[#181920] border border-[#2b2d39] rounded-lg p-3 flex justify-between items-center">
                      <span className="text-xs text-slate-300">Total Code Runs:</span>
                      <span className="font-mono text-sm font-bold text-white">{stats?.totalSubmissions || 0}</span>
                    </div>

                    <div className="bg-[#181920] border border-[#2b2d39] rounded-lg p-3 flex justify-between items-center">
                      <span className="text-xs text-slate-300">Accepted Solutions:</span>
                      <span className="font-mono text-sm font-bold text-[#e5a93c]">{stats?.totalAccepted || 0}</span>
                    </div>

                    <div className="bg-[#181920] border border-[#2b2d39] rounded-lg p-3 flex justify-between items-center">
                      <span className="text-xs text-slate-300">Database Engine:</span>
                      <span className="font-mono text-xs font-semibold text-slate-200">SQLite (Zero Latency)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#22242f]">
                  <button
                    onClick={handleCreateBackup}
                    className="w-full h-8 rounded-lg bg-[#e5a93c]/15 hover:bg-[#e5a93c]/25 border border-[#e5a93c]/40 text-[#e5a93c] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Create Database Snapshot</span>
                  </button>
                  {dbBackupMsg && (
                    <p className={`text-[11px] mt-2 text-center font-mono ${dbBackupMsg.type === 'success' ? 'text-amber-400' : 'text-rose-400'}`}>
                      {dbBackupMsg.text}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Audit Ledger */}
            <div className="bg-[#111217] border border-[#22242f] rounded-xl p-5">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#22242f]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#e5a93c]" />
                  <h3 className="text-sm font-bold text-white">Recent Administrative Audit Ledger</h3>
                </div>
                <span className="text-xs text-[#9da3b4]">Immutable platform event trail</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#22242f] text-[#9da3b4]">
                      <th className="py-2 px-3 font-semibold">Timestamp</th>
                      <th className="py-2 px-3 font-semibold">Action</th>
                      <th className="py-2 px-3 font-semibold">Admin</th>
                      <th className="py-2 px-3 font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e2029]">
                    {(stats?.recentAuditLogs || []).length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-4 text-center text-slate-400">No recent administrative events recorded.</td>
                      </tr>
                    ) : (
                      (stats?.recentAuditLogs || []).map((log: any) => (
                        <tr key={log.id} className="hover:bg-[#181920]">
                          <td className="py-2 px-3 text-[#9da3b4] whitespace-nowrap">{new Date(log.created_at).toLocaleString()}</td>
                          <td className="py-2 px-3 font-bold text-[#e5a93c]">{log.action}</td>
                          <td className="py-2 px-3 text-slate-300">{log.performed_by}</td>
                          <td className="py-2 px-3 text-slate-400 truncate max-w-xs">{log.details}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB B: PROBLEM MANAGEMENT */}
        {/* ============================================================ */}
        {activeTab === 'problems' && (
          <div className="space-y-4">
            
            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#111217] border border-[#22242f] p-4 rounded-xl">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Search */}
                <div className="relative">
                  <Search className="w-4 h-4 text-[#9da3b4] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={problemSearch}
                    onChange={(e) => setProblemSearch(e.target.value)}
                    placeholder="Search by title, ID, topic..."
                    className="h-9 pl-9 pr-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e5a93c] w-64"
                  />
                </div>

                {/* Topic Filter */}
                <select
                  value={problemTopicFilter}
                  onChange={(e) => setProblemTopicFilter(e.target.value)}
                  className="h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-slate-200 focus:outline-none focus:border-[#e5a93c]"
                >
                  <option value="all">All 15 Hardware Tracks</option>
                  {TOPIC_METAS.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>

                <button
                  onClick={loadProblems}
                  className="h-9 px-3 rounded-lg bg-[#181920] hover:bg-[#22242f] border border-[#2b2d39] text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Filter className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>Filter</span>
                </button>
              </div>

              {/* Add Problem Button */}
              <button
                onClick={handleOpenNewProblemModal}
                className="h-9 px-4 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
              >
                <PlusCircle className="w-4 h-4 stroke-[2.5]" />
                <span>Create New Hardware Problem</span>
              </button>
            </div>

            {/* Problems List Table */}
            <div className="bg-[#111217] border border-[#22242f] rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#181920] border-b border-[#22242f] text-[#9da3b4] uppercase font-mono text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Problem</th>
                      <th className="py-3 px-3">Topic / Subject</th>
                      <th className="py-3 px-3">Difficulty</th>
                      <th className="py-3 px-3">Submissions</th>
                      <th className="py-3 px-3">Acceptance</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e2029]">
                    {loadingProblems ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-400">Loading problem directory...</td>
                      </tr>
                    ) : problemsList.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-400">No problems match your query.</td>
                      </tr>
                    ) : (
                      problemsList.map((prob) => {
                        const meta = TOPIC_METAS.find(m => m.id === prob.topic);
                        return (
                          <tr key={prob.id} className="hover:bg-[#181920]/60 transition-colors">
                            <td className="py-3 px-4">
                              <div className="font-semibold text-white hover:text-[#e5a93c] cursor-pointer" onClick={() => onSelectProblem && onSelectProblem(prob)}>
                                {prob.title}
                              </div>
                              <div className="text-[10px] font-mono text-[#9da3b4] mt-0.5">{prob.id}</div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#181920] border border-[#2b2d39] text-[#e5a93c]">
                                {meta?.name || prob.topic}
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                prob.difficulty === 'easy' ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30' :
                                prob.difficulty === 'medium' ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30' :
                                'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                              }`}>
                                {prob.difficulty}
                              </span>
                            </td>
                            <td className="py-3 px-3 font-mono text-slate-300">
                              {prob.total_submissions || 0}
                            </td>
                            <td className="py-3 px-3 font-mono text-[#e5a93c] font-semibold">
                              {prob.acceptance_rate || 0}%
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => handleEditProblem(prob)}
                                  className="h-7 px-2 rounded bg-[#181920] hover:bg-[#2b2d39] text-slate-200 hover:text-[#e5a93c] border border-[#2b2d39] flex items-center gap-1 cursor-pointer"
                                  title="Edit full problem specifications"
                                >
                                  <Edit3 className="w-3 h-3" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => handleDeleteProblem(prob.id, prob.title)}
                                  className="h-7 w-7 rounded bg-[#181920] hover:bg-rose-950/30 text-slate-400 hover:text-rose-400 border border-[#2b2d39] hover:border-rose-800/40 flex items-center justify-center cursor-pointer"
                                  title="Delete problem"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
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
        )}

        {/* ============================================================ */}
        {/* TAB C: INTERVIEW MANAGEMENT */}
        {/* ============================================================ */}
        {activeTab === 'interviews' && (
          <div className="space-y-4">
            
            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#111217] border border-[#22242f] p-4 rounded-xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <select
                  value={interviewCompanyFilter}
                  onChange={(e) => setInterviewCompanyFilter(e.target.value)}
                  className="h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-slate-200 focus:outline-none focus:border-[#e5a93c]"
                >
                  <option value="all">All Top Companies</option>
                  <option value="samsung">Samsung Semiconductor</option>
                  <option value="qualcomm">Qualcomm Snapdragon</option>
                  <option value="intel">Intel Corporation</option>
                  <option value="nvidia">Nvidia Hardware & AI</option>
                  <option value="amd">AMD Semi</option>
                  <option value="apple">Apple Silicon</option>
                  <option value="texas_instruments">Texas Instruments</option>
                  <option value="synopsys">Synopsys EDA</option>
                  <option value="cadence">Cadence Design Systems</option>
                  <option value="arm">ARM Architecture</option>
                  <option value="broadcom">Broadcom</option>
                  <option value="tsmc">TSMC Foundry</option>
                </select>

                <button
                  onClick={loadInterviews}
                  className="h-9 px-3 rounded-lg bg-[#181920] hover:bg-[#22242f] border border-[#2b2d39] text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Filter className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>Filter</span>
                </button>
              </div>

              <button
                onClick={handleOpenNewInterviewModal}
                className="h-9 px-4 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
              >
                <PlusCircle className="w-4 h-4 stroke-[2.5]" />
                <span>Add Interview Question</span>
              </button>
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loadingInterviews ? (
                <div className="col-span-2 py-8 text-center text-slate-400">Loading interview questions...</div>
              ) : interviewsList.length === 0 ? (
                <div className="col-span-2 py-8 text-center text-slate-400">No interview questions found.</div>
              ) : (
                interviewsList.map((item) => (
                  <div key={item.id} className="bg-[#111217] border border-[#22242f] rounded-xl p-4 flex flex-col justify-between hover:border-[#e5a93c]/50 transition-all">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#181920] border border-[#2b2d39] text-[#e5a93c]">
                          {item.company_id}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            item.difficulty === 'Easy' ? 'text-amber-300 bg-amber-500/10' :
                            item.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/15' :
                            'text-rose-400 bg-rose-500/15'
                          }`}>
                            {item.difficulty}
                          </span>
                          <span className={`w-2 h-2 rounded-full ${item.is_published ? 'bg-amber-400' : 'bg-slate-600'}`} title={item.is_published ? 'Published' : 'Draft / Unpublished'} />
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">{item.question}</h4>
                      <p className="text-xs text-slate-400 line-clamp-3 mb-3 leading-relaxed">{item.sample_answer || 'No sample answer provided.'}</p>
                    </div>

                    <div className="pt-3 border-t border-[#22242f] flex items-center justify-between">
                      <span className="text-[11px] font-medium text-[#9da3b4]">{item.category}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleEditInterview(item)}
                          className="h-7 px-2.5 rounded bg-[#181920] hover:bg-[#2b2d39] text-slate-300 hover:text-white border border-[#2b2d39] text-xs flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3 h-3 text-[#e5a93c]" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteInterview(item.id)}
                          className="h-7 w-7 rounded bg-[#181920] hover:bg-rose-950/30 text-slate-400 hover:text-rose-400 border border-[#2b2d39] flex items-center justify-center cursor-pointer"
                          title="Delete interview question"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB D: STUDY PLAN MANAGEMENT */}
        {/* ============================================================ */}
        {activeTab === 'study_plans' && (
          <div className="space-y-4">
            
            <div className="flex items-center justify-between bg-[#111217] border border-[#22242f] p-4 rounded-xl">
              <div>
                <h3 className="text-sm font-bold text-white">Structured Study Tracks & Roadmaps</h3>
                <p className="text-xs text-[#9da3b4]">Curriculum roadmaps with objectives, timelines, and lab modules</p>
              </div>

              <button
                onClick={handleOpenNewPlanModal}
                className="h-9 px-4 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
              >
                <PlusCircle className="w-4 h-4 stroke-[2.5]" />
                <span>Create Study Plan</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loadingStudyPlans ? (
                <div className="col-span-3 py-8 text-center text-slate-400">Loading study plans...</div>
              ) : studyPlansList.length === 0 ? (
                <div className="col-span-3 py-8 text-center text-slate-400">No study plans created.</div>
              ) : (
                studyPlansList.map((plan) => (
                  <div key={plan.id} className="bg-[#111217] border border-[#22242f] rounded-xl p-5 flex flex-col justify-between hover:border-[#e5a93c]/50 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#181920] border border-[#2b2d39] text-[#e5a93c]">
                          {plan.category}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-300">
                          {plan.duration_weeks} Weeks
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-2">{plan.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">{plan.description}</p>

                      <div className="space-y-1.5 mb-4">
                        <span className="text-[11px] font-semibold text-[#9da3b4] uppercase tracking-wider block">Objectives</span>
                        {(plan.learning_objectives || []).slice(0, 2).map((obj: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                            <span className="text-[#e5a93c] mt-0.5">•</span>
                            <span className="line-clamp-1">{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#22242f] flex items-center justify-between">
                      <span className="text-xs text-[#e5a93c] font-semibold">
                        {(plan.modules || []).length} Modules
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleEditStudyPlan(plan)}
                          className="h-7 px-2.5 rounded bg-[#181920] hover:bg-[#2b2d39] text-slate-300 hover:text-white border border-[#2b2d39] text-xs flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3 h-3 text-[#e5a93c]" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteStudyPlan(plan.id, plan.title)}
                          className="h-7 w-7 rounded bg-[#181920] hover:bg-rose-950/30 text-slate-400 hover:text-rose-400 border border-[#2b2d39] flex items-center justify-center cursor-pointer"
                          title="Delete study plan"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB E: DATABASE MANAGEMENT */}
        {/* ============================================================ */}
        {activeTab === 'database' && (
          <div className="space-y-6">
            
            {/* DB Health Status */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-[#111217] border border-[#22242f] rounded-xl p-4">
                <span className="text-xs font-semibold text-[#9da3b4] block mb-1">Database Engine</span>
                <span className="text-lg font-black text-white font-mono">SQLite (sql.js)</span>
              </div>
              <div className="bg-[#111217] border border-[#22242f] rounded-xl p-4">
                <span className="text-xs font-semibold text-[#9da3b4] block mb-1">Integrity Status</span>
                <span className="text-lg font-black text-amber-400 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Healthy
                </span>
              </div>
              <div className="bg-[#111217] border border-[#22242f] rounded-xl p-4">
                <span className="text-xs font-semibold text-[#9da3b4] block mb-1">Persistent File</span>
                <span className="text-sm font-bold text-white font-mono truncate block">silicon_arena.db</span>
              </div>
              <div className="bg-[#111217] border border-[#22242f] rounded-xl p-4 flex items-center justify-center">
                <button
                  onClick={handleCreateBackup}
                  className="w-full h-10 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Export SQL Snapshot</span>
                </button>
              </div>
            </div>

            {/* SQL Query Workbench */}
            <div className="bg-[#111217] border border-[#22242f] rounded-xl p-5">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#22242f]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#e5a93c]" />
                  <h3 className="text-sm font-bold text-white">Interactive SQL Workbench</h3>
                </div>
                <span className="text-xs text-[#9da3b4]">Execute queries directly on SQLite engine</span>
              </div>

              <div className="space-y-3">
                <textarea
                  value={sqlQuery}
                  onChange={(e) => setSqlQuery(e.target.value)}
                  rows={3}
                  className="w-full p-3 rounded-lg bg-[#0a0b0e] border border-[#2b2d39] font-mono text-xs text-amber-300 focus:outline-none focus:border-[#e5a93c]"
                  placeholder="SELECT * FROM users LIMIT 10;"
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#9da3b4]">
                    <span>Suggested:</span>
                    <button onClick={() => setSqlQuery("SELECT id, name, email, role FROM users;")} className="text-[#e5a93c] hover:underline cursor-pointer">users</button>
                    <span>•</span>
                    <button onClick={() => setSqlQuery("SELECT topic, COUNT(*) as cnt FROM problems GROUP BY topic;")} className="text-[#e5a93c] hover:underline cursor-pointer">problems</button>
                    <span>•</span>
                    <button onClick={() => setSqlQuery("SELECT status, count(*) FROM submissions GROUP BY status;")} className="text-[#e5a93c] hover:underline cursor-pointer">submissions</button>
                  </div>

                  <button
                    onClick={handleExecuteSql}
                    disabled={executingSql}
                    className="h-8 px-4 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{executingSql ? 'Executing...' : 'Run Query'}</span>
                  </button>
                </div>

                {sqlResult && (
                  <div className="mt-4 p-3 bg-[#0a0b0e] border border-[#2b2d39] rounded-lg overflow-x-auto max-h-64 text-xs font-mono">
                    {sqlResult.error ? (
                      <p className="text-rose-400 font-bold">Error: {sqlResult.error}</p>
                    ) : (
                      <div>
                        <div className="text-[#9da3b4] mb-2">{sqlResult.message || `Returned ${sqlResult.rows?.length || 0} rows.`}</div>
                        {sqlResult.columns && (
                          <table className="w-full text-left">
                            <thead className="border-b border-[#22242f] text-[#e5a93c]">
                              <tr>
                                {sqlResult.columns.map((c: string, idx: number) => (
                                  <th key={idx} className="p-1.5">{c}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1e2029]">
                              {(sqlResult.rows || []).map((r: any[], rIdx: number) => (
                                <tr key={rIdx} className="hover:bg-[#181920]">
                                  {r.map((cell: any, cIdx: number) => (
                                    <td key={cIdx} className="p-1.5 text-slate-300">{cell !== null ? String(cell) : 'NULL'}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Table Records Inspector */}
            <div className="bg-[#111217] border border-[#22242f] rounded-xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-2 border-b border-[#22242f]">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#e5a93c]" />
                  <h3 className="text-sm font-bold text-white">Live Table Inspector</h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#9da3b4]">Select Table:</span>
                  <select
                    value={selectedDbTable}
                    onChange={(e) => {
                      setSelectedDbTable(e.target.value);
                      loadTableData(e.target.value);
                    }}
                    className="h-8 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value="users">users</option>
                    <option value="problems">problems</option>
                    <option value="custom_problems">custom_problems</option>
                    <option value="submissions">submissions</option>
                    <option value="admin_interviews">admin_interviews</option>
                    <option value="admin_study_plans">admin_study_plans</option>
                    <option value="audit_logs">audit_logs</option>
                    <option value="system_backups">system_backups</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto max-h-96">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#181920] border-b border-[#22242f] text-[#e5a93c] sticky top-0">
                    <tr>
                      {tableRows.length > 0 && Object.keys(tableRows[0]).map((col) => (
                        <th key={col} className="py-2 px-3 whitespace-nowrap">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e2029]">
                    {loadingTable ? (
                      <tr>
                        <td colSpan={10} className="py-6 text-center text-slate-400">Loading table records...</td>
                      </tr>
                    ) : tableRows.length === 0 ? (
                      <tr>
                        <td colSpan={10} className="py-6 text-center text-slate-400">Table is empty.</td>
                      </tr>
                    ) : (
                      tableRows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#181920]">
                          {Object.values(row).map((val: any, cIdx) => (
                            <td key={cIdx} className="py-2 px-3 text-slate-300 max-w-xs truncate">
                              {val !== null ? String(val) : 'NULL'}
                            </td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB F: USAGE & ANALYTICS */}
        {/* ============================================================ */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Submission Attempts by Language */}
              <div className="bg-[#111217] border border-[#22242f] rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#22242f]">
                  <h3 className="text-sm font-bold text-white">Language / Track Distribution</h3>
                  <span className="text-xs font-mono text-[#e5a93c]">Real Submissions</span>
                </div>

                <div className="space-y-3">
                  {(analyticsData?.languageUsage || []).length === 0 ? (
                    <p className="text-xs text-slate-400 py-4 text-center">No submission data available yet.</p>
                  ) : (
                    (analyticsData?.languageUsage || []).map((l: any) => (
                      <div key={l.language} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold text-white capitalize">{l.language}</span>
                          <span className="font-mono text-[#e5a93c]">{l.attempts} attempts ({l.rate}% passed)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#181920] overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#e5a93c] to-[#f59e0b] rounded-full" 
                            style={{ width: `${Math.min(100, Math.max(10, l.rate))}%` }} 
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Status Verdict Breakdown */}
              <div className="bg-[#111217] border border-[#22242f] rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#22242f]">
                  <h3 className="text-sm font-bold text-white">Verdict Breakdown</h3>
                  <span className="text-xs font-mono text-[#e5a93c]">Simulation Status</span>
                </div>

                <div className="space-y-3">
                  {Object.entries(analyticsData?.statusBreakdown || {}).length === 0 ? (
                    <p className="text-xs text-slate-400 py-4 text-center">No submissions recorded yet.</p>
                  ) : (
                    Object.entries(analyticsData?.statusBreakdown || {}).map(([status, cnt]: [string, any]) => (
                      <div key={status} className="bg-[#181920] border border-[#2b2d39] rounded-lg p-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${status === 'Accepted' ? 'bg-amber-400' : 'bg-rose-400'}`} />
                          <span className="text-xs font-medium text-slate-200">{status}</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-white">{cnt}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

            {/* Top Solved Problems */}
            <div className="bg-[#111217] border border-[#22242f] rounded-xl p-5">
              <h3 className="text-sm font-bold text-white mb-3">Top Practiced Problems</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#22242f] text-[#9da3b4]">
                      <th className="py-2 px-3">Problem Title</th>
                      <th className="py-2 px-3">Total Attempts</th>
                      <th className="py-2 px-3">Passed</th>
                      <th className="py-2 px-3">Pass Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e2029]">
                    {(analyticsData?.topProblems || []).length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-4 text-center text-slate-400">No attempts logged yet.</td>
                      </tr>
                    ) : (
                      (analyticsData?.topProblems || []).map((p: any) => {
                        const rate = p.attempts > 0 ? Math.round((p.accepted / p.attempts) * 100) : 0;
                        return (
                          <tr key={p.problemId} className="hover:bg-[#181920]">
                            <td className="py-2.5 px-3 text-white font-semibold">{p.title}</td>
                            <td className="py-2.5 px-3 text-slate-300">{p.attempts}</td>
                            <td className="py-2.5 px-3 text-amber-400">{p.accepted}</td>
                            <td className="py-2.5 px-3 text-[#e5a93c] font-bold">{rate}%</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* ============================================================ */}
      {/* MODAL: CREATE / EDIT PROBLEM */}
      {/* ============================================================ */}
      {isProblemModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#111217] border border-[#2b2d39] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl my-8">
            <div className="px-6 py-4 border-b border-[#22242f] flex items-center justify-between bg-[#181920]">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#e5a93c]" />
                <h3 className="text-base font-bold text-white">
                  {editingProblem ? `Edit Problem: ${editingProblem.title}` : 'Create New Hardware Problem'}
                </h3>
              </div>
              <button
                onClick={() => setIsProblemModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-[#22242f] hover:bg-[#2b2d39] text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProblem} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {probActionMsg && (
                <div className={`p-3 rounded-lg text-xs font-semibold ${probActionMsg.type === 'success' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}`}>
                  {probActionMsg.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Problem ID *</label>
                  <input
                    type="text"
                    required
                    value={probId}
                    onChange={(e) => setProbId(e.target.value)}
                    placeholder="e.g. v-siso-8bit"
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white font-mono focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    value={probTitle}
                    onChange={(e) => setProbTitle(e.target.value)}
                    placeholder="e.g. 8-Bit SISO Shift Register"
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Hardware Track *</label>
                  <select
                    value={probTopic}
                    onChange={(e) => setProbTopic(e.target.value as Topic)}
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    {TOPIC_METAS.map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category Track *</label>
                  <select
                    value={probTrack}
                    onChange={(e) => setProbTrack(e.target.value as Track)}
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value="frontend">Frontend RTL</option>
                    <option value="backend">Backend Physical Design</option>
                    <option value="both">Full Stack Hardware</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Difficulty *</label>
                  <select
                    value={probDifficulty}
                    onChange={(e) => setProbDifficulty(e.target.value as Difficulty)}
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Description & IO Specifications *</label>
                <textarea
                  required
                  rows={3}
                  value={probDescription}
                  onChange={(e) => setProbDescription(e.target.value)}
                  placeholder="Describe inputs, outputs, clock polarity, reset condition..."
                  className="w-full p-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Starter Template Code *</label>
                  <textarea
                    required
                    rows={6}
                    value={probStarterCode}
                    onChange={(e) => setProbStarterCode(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#0a0b0e] border border-[#2b2d39] font-mono text-xs text-slate-300 focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Golden Reference Solution Code *</label>
                  <textarea
                    required
                    rows={6}
                    value={probSolutionCode}
                    onChange={(e) => setProbSolutionCode(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#0a0b0e] border border-[#2b2d39] font-mono text-xs text-amber-300 focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Hints (one per line)</label>
                  <textarea
                    rows={2}
                    value={probHints}
                    onChange={(e) => setProbHints(e.target.value)}
                    placeholder="Hint 1&#10;Hint 2"
                    className="w-full p-2.5 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={probTags}
                    onChange={(e) => setProbTags(e.target.value)}
                    placeholder="RTL, FIFO, Verilog"
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#22242f] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProblemModalOpen(false)}
                  className="h-9 px-4 rounded-lg bg-[#181920] hover:bg-[#22242f] text-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-9 px-5 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Save Problem to Database
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL: CREATE / EDIT INTERVIEW QUESTION */}
      {/* ============================================================ */}
      {isInterviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#111217] border border-[#2b2d39] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl my-8">
            <div className="px-6 py-4 border-b border-[#22242f] flex items-center justify-between bg-[#181920]">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#e5a93c]" />
                <h3 className="text-base font-bold text-white">
                  {editingInterview ? 'Edit Interview Question' : 'Add Interview Question'}
                </h3>
              </div>
              <button
                onClick={() => setIsInterviewModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-[#22242f] hover:bg-[#2b2d39] text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveInterview} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {iqActionMsg && (
                <div className={`p-3 rounded-lg text-xs font-semibold ${iqActionMsg.type === 'success' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}`}>
                  {iqActionMsg.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company *</label>
                  <select
                    value={iqCompanyId}
                    onChange={(e) => setIqCompanyId(e.target.value)}
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value="openai">OpenAI Hardware & Infrastructure</option>
                    <option value="meta_ai">Meta AI (FAIR & MTIA Silicon)</option>
                    <option value="anthropic">Anthropic AI Systems</option>
                    <option value="alibaba">Alibaba Cloud & T-Head Silicon</option>
                    <option value="github">GitHub (Copilot & AI Systems)</option>
                    <option value="samsung">Samsung Semiconductor</option>
                    <option value="qualcomm">Qualcomm Snapdragon</option>
                    <option value="intel">Intel Corporation</option>
                    <option value="nvidia">Nvidia Hardware & AI</option>
                    <option value="amd">AMD Semi</option>
                    <option value="apple">Apple Silicon</option>
                    <option value="texas_instruments">Texas Instruments</option>
                    <option value="synopsys">Synopsys EDA</option>
                    <option value="cadence">Cadence Design Systems</option>
                    <option value="arm">ARM Architecture</option>
                    <option value="broadcom">Broadcom</option>
                    <option value="tsmc">TSMC Foundry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category / Domain *</label>
                  <input
                    type="text"
                    required
                    value={iqCategory}
                    onChange={(e) => setIqCategory(e.target.value)}
                    placeholder="e.g. STA & Timing Closure"
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Interview Question *</label>
                <textarea
                  required
                  rows={2}
                  value={iqQuestion}
                  onChange={(e) => setIqQuestion(e.target.value)}
                  placeholder="Enter the technical interview question..."
                  className="w-full p-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Difficulty</label>
                  <select
                    value={iqDifficulty}
                    onChange={(e) => setIqDifficulty(e.target.value)}
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Experience Level</label>
                  <select
                    value={iqExperience}
                    onChange={(e) => setIqExperience(e.target.value)}
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value="All Levels">All Levels</option>
                    <option value="Campus / Entry">Campus / Entry Level</option>
                    <option value="Mid-Level (2-5 yrs)">Mid-Level (2-5 yrs)</option>
                    <option value="Senior / Principal">Senior / Principal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Detailed Technical Answer *</label>
                <textarea
                  required
                  rows={4}
                  value={iqAnswer}
                  onChange={(e) => setIqAnswer(e.target.value)}
                  placeholder="Provide authoritative technical response with circuit/architecture rationale..."
                  className="w-full p-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Key Talking Points (one per line)</label>
                <textarea
                  rows={2}
                  value={iqKeyPoints}
                  onChange={(e) => setIqKeyPoints(e.target.value)}
                  placeholder="Point 1&#10;Point 2"
                  className="w-full p-2.5 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="iqPublishCheck"
                  checked={iqPublished}
                  onChange={(e) => setIqPublished(e.target.checked)}
                  className="w-4 h-4 accent-[#e5a93c] rounded"
                />
                <label htmlFor="iqPublishCheck" className="text-xs font-medium text-slate-300 cursor-pointer">
                  Publish question immediately to live student interview prep
                </label>
              </div>

              <div className="pt-4 border-t border-[#22242f] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsInterviewModalOpen(false)}
                  className="h-9 px-4 rounded-lg bg-[#181920] hover:bg-[#22242f] text-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-9 px-5 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Save Interview Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL: CREATE / EDIT STUDY PLAN */}
      {/* ============================================================ */}
      {isPlanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#111217] border border-[#2b2d39] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl my-8">
            <div className="px-6 py-4 border-b border-[#22242f] flex items-center justify-between bg-[#181920]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#e5a93c]" />
                <h3 className="text-base font-bold text-white">
                  {editingPlan ? 'Edit Study Plan' : 'Create New Study Plan'}
                </h3>
              </div>
              <button
                onClick={() => setIsPlanModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-[#22242f] hover:bg-[#2b2d39] text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveStudyPlan} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {spActionMsg && (
                <div className={`p-3 rounded-lg text-xs font-semibold ${spActionMsg.type === 'success' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}`}>
                  {spActionMsg.text}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Study Plan Title *</label>
                <input
                  type="text"
                  required
                  value={spTitle}
                  onChange={(e) => setSpTitle(e.target.value)}
                  placeholder="e.g. UVM & Advanced Verification Mastery"
                  className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category *</label>
                  <input
                    type="text"
                    required
                    value={spCategory}
                    onChange={(e) => setSpCategory(e.target.value)}
                    placeholder="e.g. Verification"
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Difficulty</label>
                  <select
                    value={spDifficulty}
                    onChange={(e) => setSpDifficulty(e.target.value)}
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Duration (Weeks)</label>
                  <input
                    type="number"
                    min={1}
                    max={24}
                    value={spDuration}
                    onChange={(e) => setSpDuration(parseInt(e.target.value, 10) || 4)}
                    className="w-full h-9 px-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white font-mono focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Description *</label>
                <textarea
                  required
                  rows={3}
                  value={spDescription}
                  onChange={(e) => setSpDescription(e.target.value)}
                  placeholder="Curriculum overview and prerequisites..."
                  className="w-full p-3 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Learning Objectives (one per line)</label>
                <textarea
                  rows={3}
                  value={spObjectives}
                  onChange={(e) => setSpObjectives(e.target.value)}
                  placeholder="Objective 1&#10;Objective 2"
                  className="w-full p-2.5 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Weekly Modules (one per line)</label>
                <textarea
                  rows={3}
                  value={spModules}
                  onChange={(e) => setSpModules(e.target.value)}
                  placeholder="Week 1: Fundamentals&#10;Week 2: Advanced Labs"
                  className="w-full p-2.5 rounded-lg bg-[#181920] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="spPublishCheck"
                  checked={spPublished}
                  onChange={(e) => setSpPublished(e.target.checked)}
                  className="w-4 h-4 accent-[#e5a93c] rounded"
                />
                <label htmlFor="spPublishCheck" className="text-xs font-medium text-slate-300 cursor-pointer">
                  Publish study plan to live curriculum
                </label>
              </div>

              <div className="pt-4 border-t border-[#22242f] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlanModalOpen(false)}
                  className="h-9 px-4 rounded-lg bg-[#181920] hover:bg-[#22242f] text-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-9 px-5 rounded-lg bg-[#e5a93c] hover:bg-[#f59e0b] text-[#0a0b0e] text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Save Study Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
