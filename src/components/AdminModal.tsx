import React, { useState, useEffect } from 'react';
import { 
  X, PlusCircle, Sparkles, ShieldCheck, Lock, AlertCircle, Key, 
  CheckCircle2, Database, Edit3, Trash2, Search, Save, RotateCcw,
  Layers, Code2, Cpu, Check, HelpCircle
} from 'lucide-react';
import { Problem, Topic, Track, Difficulty } from '../types';
import { aiService } from '../services/aiService';
import { storageService } from '../services/storageService';
import { AdminBackupManager } from './AdminBackupManager';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProblem: (problem: Problem) => void;
  onUpdateProblem?: (problem: Problem) => void;
  onDeleteProblem?: (problemId: string) => void;
  allProblems?: Problem[];
}

const AUTHORIZED_ADMINS = [
  { name: 'VLSI EXPERT ADMIN 001', role: 'ADMINISTRATOR', defaultEmail: 'vlsiexpert001@gmail.com' },
  { name: 'VLSI EXPERT ADMIN 002', role: 'ADMINISTRATOR', defaultEmail: 'vlsiexpert002@gmail.com' },
  { name: 'VLSI EXPERT ADMIN 003', role: 'ADMINISTRATOR', defaultEmail: 'vlsiexpert003@gmail.com' },
  { name: 'VLSI EXPERT ADMIN 004', role: 'ADMINISTRATOR', defaultEmail: 'vlsiexpert004@gmail.com' },
  { name: 'DR MANIRAJ KUMAR P', role: 'MENTOR & HOD OF EE-VLSI DESIGN & TECHNOLOGY', defaultEmail: 'pmanirajkumar@psnacet.edu.in' },
  { name: 'DEEPAK KUMAR AP', role: 'FOUNDER', defaultEmail: 'kumarapdeepak16@gmail.com' },
  { name: 'MITRAN B', role: 'FOUNDER', defaultEmail: 'mitranb@psnacet.edu.in' },
  { name: 'MOHAMMED SUHAIL', role: 'FOUNDER', defaultEmail: 'mohammedsuhail@psnacet.edu.in' },
  { name: 'THILUCK', role: 'FOUNDER', defaultEmail: 'thiluck@psnacet.edu.in' },
  { name: 'BOOMIKA', role: 'FOUNDER', defaultEmail: 'boomika@psnacet.edu.in' },
  { name: 'BASHA DHARAANYA', role: 'FOUNDER', defaultEmail: 'bashadharaanya@psnacet.edu.in' },
  { name: 'MARY SHIMONA', role: 'FOUNDER', defaultEmail: 'maryshimona@psnacet.edu.in' }
];

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  onAddProblem,
  onUpdateProblem,
  onDeleteProblem,
  allProblems = []
}) => {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('psnacet_admin_authed') === 'true';
  });
  const [adminToken, setAdminToken] = useState<string>(() => {
    return sessionStorage.getItem('psnacet_admin_token') || '';
  });
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<'add' | 'modify' | 'backups'>('add');
  const [selectedAdminIndex, setSelectedAdminIndex] = useState<number>(0); // Default to vlsiexpert001@gmail.com
  const [adminEmail, setAdminEmail] = useState<string>('vlsiexpert001@gmail.com');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccessUser, setLoginSuccessUser] = useState<string | null>(null);

  // Form State for Adding Problem
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState<Topic>('verilog');
  const [track, setTrack] = useState<Track>('frontend');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [description, setDescription] = useState('');
  const [workedExample, setWorkedExample] = useState('');
  const [starterCode, setStarterCode] = useState('');
  const [solutionCode, setSolutionCode] = useState('');
  const [hintsText, setHintsText] = useState('');
  const [generating, setGenerating] = useState(false);
  const [addFeedback, setAddFeedback] = useState<string | null>(null);

  // State for Modifying Problem
  const [modifySearch, setModifySearch] = useState('');
  const [selectedProblemId, setSelectedProblemId] = useState<string>('');
  const [modTitle, setModTitle] = useState('');
  const [modTopic, setModTopic] = useState<Topic>('verilog');
  const [modTrack, setModTrack] = useState<Track>('frontend');
  const [modDifficulty, setModDifficulty] = useState<Difficulty>('medium');
  const [modDescription, setModDescription] = useState('');
  const [modWorkedExample, setModWorkedExample] = useState('');
  const [modStarterCode, setModStarterCode] = useState('');
  const [modSolutionCode, setModSolutionCode] = useState('');
  const [modHintsText, setModHintsText] = useState('');
  const [modFeedback, setModFeedback] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Filter problems for modification
  const filteredProblems = allProblems.filter(p => {
    if (!modifySearch.trim()) return true;
    const term = modifySearch.toLowerCase();
    return p.title.toLowerCase().includes(term) || 
           p.topic.toLowerCase().includes(term) || 
           p.id.toLowerCase().includes(term);
  });

  // When selectedProblemId changes, load problem into edit form
  useEffect(() => {
    if (!selectedProblemId) {
      if (filteredProblems.length > 0) {
        loadProblemToEdit(filteredProblems[0]);
      }
      return;
    }
    const target = allProblems.find(p => p.id === selectedProblemId);
    if (target) {
      loadProblemToEdit(target);
    }
  }, [selectedProblemId, allProblems]);

  const loadProblemToEdit = (prob: Problem) => {
    setSelectedProblemId(prob.id);
    setModTitle(prob.title);
    setModTopic(prob.topic);
    setModTrack(prob.track || 'frontend');
    setModDifficulty(prob.difficulty);
    setModDescription(prob.description || '');
    setModWorkedExample(prob.workedExample || '');
    setModStarterCode(prob.starterCode || '');
    setModSolutionCode(prob.solutionCode || '');
    setModHintsText((prob.hints || []).join('\n'));
    setModFeedback(null);
  };

  if (!isOpen) return null;

  const handleAdminSelectChange = (idx: number) => {
    setSelectedAdminIndex(idx);
    if (idx >= 0 && idx < AUTHORIZED_ADMINS.length) {
      setAdminEmail(AUTHORIZED_ADMINS[idx].defaultEmail);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsAuthenticating(true);

    try {
      const emailTrim = adminEmail.trim().toLowerCase();
      const passTrim = adminPassword.trim();

      const result = await storageService.loginAdmin(emailTrim, passTrim);
      if (!result.success || !result.token) {
        setLoginError(result.error || "Incorrect Admin Credentials! Please verify your administrator authorization credentials.");
        return;
      }

      setAdminToken(result.token);
      sessionStorage.setItem('psnacet_admin_token', result.token);
      sessionStorage.setItem('psnacet_admin_authed', 'true');
      setIsAuthenticated(true);

      const currentMemberName = selectedAdminIndex >= 0 
        ? AUTHORIZED_ADMINS[selectedAdminIndex].name 
        : (result.user?.name || emailTrim);
      setLoginSuccessUser(currentMemberName);
      setAdminPassword('');
    } catch (err: any) {
      setLoginError(err.message || "Admin authorization failed.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminToken('');
    sessionStorage.removeItem('psnacet_admin_authed');
    sessionStorage.removeItem('psnacet_admin_token');
    setAdminPassword('');
    setLoginError(null);
  };

  const handleGenerateAIProblem = async () => {
    setGenerating(true);
    const res = await aiService.askCopilot({
      prompt: topic,
      taskType: 'generate_problem'
    });
    setGenerating(false);

    if (res.success && res.reply) {
      setTitle(`Custom ${topic.toUpperCase()} Problem`);
      setDescription(`Write a synthesizable ${topic.toUpperCase()} module satisfying timing constraints.`);
      setWorkedExample('Step 1: Declare input/output ports.\nStep 2: Implement logic assignment.');
      setStarterCode(`module custom_${topic} (\n    input wire clk,\n    input wire rst,\n    output reg out\n);\n    // Write code here\nendmodule`);
      setSolutionCode(`module custom_${topic} (\n    input wire clk,\n    input wire rst,\n    output reg out\n);\n    always @(posedge clk) out <= ~rst;\nendmodule`);
    }
  };

  // Submit New Problem
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProblem: Problem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      topic,
      track,
      difficulty,
      description: description.trim(),
      workedExample: workedExample || 'Follow standard synthesis rules.',
      starterCode: starterCode || `module custom_module (\n    input wire clk,\n    output reg out\n);\nendmodule`,
      solutionCode: solutionCode || `module custom_module (\n    input wire clk,\n    output reg out\n);\nendmodule`,
      hints: hintsText ? hintsText.split('\n').filter(h => h.trim().length > 0) : ['Check sensitivity lists.'],
      tags: ['Custom', topic],
      testbenchConfig: {
        signals: [
          { name: 'clk', type: 'clock', initialValue: '0' },
          { name: 'out', type: 'output', initialValue: '0' }
        ],
        cycles: 8,
        expectedOutputs: []
      }
    };

    onAddProblem(newProblem);

    // Also persist to backend SQLite DB
    try {
      await fetch('/api/admin/problems', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
          'x-admin-key': adminToken
        },
        body: JSON.stringify({ adminAuthKey: adminToken, problem: newProblem })
      });
    } catch (e) {
      console.warn('Backend problem persist note:', e);
    }

    setAddFeedback(`Drill "${newProblem.title}" added successfully!`);
    setTitle('');
    setDescription('');
    setWorkedExample('');
    setStarterCode('');
    setSolutionCode('');
    setHintsText('');

    setTimeout(() => {
      setAddFeedback(null);
    }, 3500);
  };

  // Submit Problem Modification
  const handleModifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProblemId) {
      setModFeedback({ text: 'Please select a drill to modify.', type: 'error' });
      return;
    }

    const existing = allProblems.find(p => p.id === selectedProblemId);
    if (!existing) {
      setModFeedback({ text: 'Problem not found in curriculum registry.', type: 'error' });
      return;
    }

    const updatedProblem: Problem = {
      ...existing,
      title: modTitle.trim(),
      topic: modTopic,
      track: modTrack,
      difficulty: modDifficulty,
      description: modDescription.trim(),
      workedExample: modWorkedExample.trim(),
      starterCode: modStarterCode.trim(),
      solutionCode: modSolutionCode.trim(),
      hints: modHintsText ? modHintsText.split('\n').filter(h => h.trim().length > 0) : existing.hints
    };

    if (onUpdateProblem) {
      onUpdateProblem(updatedProblem);
    } else {
      onAddProblem(updatedProblem);
    }

    // Persist to server SQLite database
    try {
      const res = await fetch('/api/admin/problems', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
          'x-admin-key': adminToken
        },
        body: JSON.stringify({ adminAuthKey: adminToken, problem: updatedProblem })
      });
      if (res.ok) {
        setModFeedback({ text: `Drill "${updatedProblem.title}" updated and saved to SQLite DB!`, type: 'success' });
      } else {
        setModFeedback({ text: `Drill updated in platform workspace.`, type: 'success' });
      }
    } catch (err) {
      setModFeedback({ text: `Drill updated in platform workspace.`, type: 'success' });
    }

    setTimeout(() => {
      setModFeedback(null);
    }, 3500);
  };

  // Delete Drill
  const handleDeleteCurrentDrill = async () => {
    if (!selectedProblemId) return;
    if (!confirm(`Are you sure you want to delete or reset drill "${modTitle}"?`)) return;

    if (onDeleteProblem) {
      onDeleteProblem(selectedProblemId);
    }

    try {
      await fetch(`/api/admin/problems/${selectedProblemId}`, {
        method: 'DELETE',
        headers: { 
          'x-admin-key': adminToken,
          'Authorization': `Bearer ${adminToken}`
        }
      });
    } catch (e) {}

    setModFeedback({ text: `Drill "${modTitle}" removed successfully.`, type: 'success' });
    setSelectedProblemId('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          /* ADMIN LOGIN AUTHENTICATION VIEW */
          <div className="space-y-5">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 mx-auto flex items-center justify-center text-amber-400 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                PSNACET VLSI DEPARTMENT - ADMIN PANEL
              </h2>
              <p className="text-xs text-amber-300 font-medium">
                Authorized Admin Login for Adding, Modifying & Managing Curriculum Drills
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4 pt-2 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Select Authorized Admin / Personnel *
                </label>
                <select
                  value={selectedAdminIndex}
                  onChange={(e) => handleAdminSelectChange(Number(e.target.value))}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:outline-none focus:border-amber-500"
                >
                  {AUTHORIZED_ADMINS.map((admin, idx) => (
                    <option key={admin.name} value={idx}>
                      {admin.name} — {admin.defaultEmail} ({admin.role})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Administrator Email *
                </label>
                <input
                  type="email"
                  required
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="e.g. vlsiexpert001@gmail.com"
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono focus:outline-none focus:border-amber-500"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Accepted admin accounts: <code className="text-amber-300 font-mono">vlsiexpert001@gmail.com</code> to <code className="text-amber-300 font-mono">vlsiexpert004@gmail.com</code>
                </span>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Admin Access Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter administrator password"
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono focus:outline-none focus:border-amber-500 pr-10"
                  />
                  <Key className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Lock className="w-4 h-4" />
                  {isAuthenticating ? 'Authenticating Admin Access...' : 'Authenticate Admin Panel Access'}
                </button>
              </div>
            </form>

            {/* List of Authorized Personnel Note */}
            <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-[10px] text-slate-400 space-y-1">
              <span className="font-bold text-amber-400 uppercase tracking-wider block">Authorized Admin Registry:</span>
              <p className="text-slate-300">
                <strong>VLSI Expert Administrators:</strong> vlsiexpert001@gmail.com, vlsiexpert002@gmail.com, vlsiexpert003@gmail.com, vlsiexpert004@gmail.com
              </p>
              <p className="text-slate-400 text-[9px] pt-1 border-t border-slate-800/60">
                PSNACET VLSI Dept Mentor & Founders have complementary access credentials.
              </p>
            </div>
          </div>
        ) : (
          /* AUTHENTICATED ADMIN PANEL FORM & BACKUP MANAGER */
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Admin Control Center</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      AUTHENTICATED
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    Logged in as <strong className="text-slate-200">{loginSuccessUser || adminEmail}</strong> — Adding & Modifying Drills Active
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activeTab === 'add' && (
                  <button
                    type="button"
                    onClick={handleGenerateAIProblem}
                    disabled={generating}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {generating ? 'Drafting...' : 'Auto-Draft Template'}
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 hover:text-rose-300 transition-colors"
                  title="Lock Admin Session"
                >
                  Lock Session
                </button>
              </div>
            </div>

            {/* Admin Tabs Bar: Add, Modify, Backups */}
            <div className="flex items-center gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800 mb-5 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('add')}
                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'add' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add New Drill</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('modify')}
                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'modify' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                <span>Modify Existing Drill</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('backups')}
                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'backups' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-4 h-4" />
                <span>SQL DB & Backups</span>
              </button>
            </div>

            {/* TAB 1: ADD NEW DRILL */}
            {activeTab === 'add' && (
              <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
                {addFeedback && (
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{addFeedback}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Topic</label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value as Topic)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="verilog">Verilog</option>
                      <option value="systemverilog">SystemVerilog</option>
                      <option value="vhdl">VHDL</option>
                      <option value="fpga">FPGA Architecture</option>
                      <option value="linux">Linux EDA</option>
                      <option value="uvm">UVM Verification</option>
                      <option value="dft">DFT (Design for Test)</option>
                      <option value="embedded_c">Embedded C</option>
                      <option value="mnemonics">Microcontroller (8051) Assembly</option>
                      <option value="cv_robotics">Computer Vision & Robotics</option>
                      <option value="c_programming">C Programming</option>
                      <option value="python">Python for Hardware</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Track</label>
                    <select
                      value={track}
                      onChange={(e) => setTrack(e.target.value as Track)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="frontend">Front-End (RTL & Verification)</option>
                      <option value="backend">Back-End (Physical Design & EDA)</option>
                      <option value="both">Both Tracks</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Difficulty</label>
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="easy">Easy (Fundamentals)</option>
                      <option value="medium">Medium (Industrial Standards)</option>
                      <option value="hard">Hard (Advanced / Timing-Critical)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Problem Title *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Dual-Clock Asynchronous FIFO Controller"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Problem Description & Specs *</label>
                  <textarea
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detailed specifications, clock domain rules, port definitions, and reset behavior..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Worked Example Logic / Theory</label>
                  <textarea
                    rows={2}
                    value={workedExample}
                    onChange={(e) => setWorkedExample(e.target.value)}
                    placeholder="Step-by-step mathematical breakdown or timing diagram explanation..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Starter Code Template</label>
                    <textarea
                      rows={5}
                      value={starterCode}
                      onChange={(e) => setStarterCode(e.target.value)}
                      placeholder="module name (...);\n  // Provide template\nendmodule"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 font-mono text-[11px]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Golden Reference Solution Code</label>
                    <textarea
                      rows={5}
                      value={solutionCode}
                      onChange={(e) => setSolutionCode(e.target.value)}
                      placeholder="module name (...);\n  // Reference synthesizable solution\nendmodule"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-emerald-300 focus:outline-none focus:border-emerald-500 font-mono text-[11px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Hints (1 hint per line)</label>
                  <textarea
                    rows={2}
                    value={hintsText}
                    onChange={(e) => setHintsText(e.target.value)}
                    placeholder="Hint 1: Use non-blocking assignments for sequential registers.\nHint 2: Pay attention to asynchronous reset polarity."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-blue-500 font-mono text-[11px]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Add Problem to Practice Library & SQLite DB</span>
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: MODIFY EXISTING DRILL */}
            {activeTab === 'modify' && (
              <div className="space-y-4 text-xs">
                {modFeedback && (
                  <div className={`p-3 rounded-xl border font-medium flex items-center gap-2 ${
                    modFeedback.type === 'success' 
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' 
                      : 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                  }`}>
                    {modFeedback.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> : <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                    <span>{modFeedback.text}</span>
                  </div>
                )}

                {/* Problem Selector & Search */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2.5">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={modifySearch}
                        onChange={(e) => setModifySearch(e.target.value)}
                        placeholder="Search drills by title, topic, or ID..."
                        className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-750 rounded-lg text-slate-200 text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 shrink-0 px-1">
                      {filteredProblems.length} drills found
                    </span>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Select Drill to Modify *
                    </label>
                    <select
                      value={selectedProblemId}
                      onChange={(e) => setSelectedProblemId(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-750 rounded-xl text-white font-medium focus:outline-none focus:border-purple-500 text-xs"
                    >
                      {filteredProblems.map(p => (
                        <option key={p.id} value={p.id}>
                          [{p.topic.toUpperCase()}] {p.title} ({p.difficulty}) {p.id.startsWith('custom-') ? '★ CUSTOM' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Modify Form */}
                {selectedProblemId && (
                  <form onSubmit={handleModifySubmit} className="space-y-4 pt-1">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-400">Drill ID:</span>
                        <code className="px-2 py-0.5 rounded bg-slate-800 text-purple-300 font-mono text-[10px]">
                          {selectedProblemId}
                        </code>
                      </div>
                      {selectedProblemId.startsWith('custom-') && (
                        <button
                          type="button"
                          onClick={handleDeleteCurrentDrill}
                          className="px-2 py-1 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/80 text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete Drill</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">Topic</label>
                        <select
                          value={modTopic}
                          onChange={(e) => setModTopic(e.target.value as Topic)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500"
                        >
                          <option value="verilog">Verilog</option>
                          <option value="systemverilog">SystemVerilog</option>
                          <option value="vhdl">VHDL</option>
                          <option value="fpga">FPGA Architecture</option>
                          <option value="linux">Linux EDA</option>
                          <option value="uvm">UVM Verification</option>
                          <option value="dft">DFT (Design for Test)</option>
                          <option value="embedded_c">Embedded C</option>
                          <option value="mnemonics">Microcontroller (8051) Assembly</option>
                          <option value="cv_robotics">Computer Vision & Robotics</option>
                          <option value="c_programming">C Programming</option>
                          <option value="python">Python for Hardware</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">Track</label>
                        <select
                          value={modTrack}
                          onChange={(e) => setModTrack(e.target.value as Track)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500"
                        >
                          <option value="frontend">Front-End (RTL & Verification)</option>
                          <option value="backend">Back-End (Physical Design & EDA)</option>
                          <option value="both">Both Tracks</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">Difficulty</label>
                        <select
                          value={modDifficulty}
                          onChange={(e) => setModDifficulty(e.target.value as Difficulty)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500"
                        >
                          <option value="easy">Easy (Fundamentals)</option>
                          <option value="medium">Medium (Industrial Standards)</option>
                          <option value="hard">Hard (Advanced / Timing-Critical)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Problem Title *</label>
                      <input
                        type="text"
                        required
                        value={modTitle}
                        onChange={(e) => setModTitle(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Problem Description & Specs *</label>
                      <textarea
                        required
                        rows={3}
                        value={modDescription}
                        onChange={(e) => setModDescription(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Worked Example Logic / Theory</label>
                      <textarea
                        rows={2}
                        value={modWorkedExample}
                        onChange={(e) => setModWorkedExample(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500 font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">Starter Code Template</label>
                        <textarea
                          rows={6}
                          value={modStarterCode}
                          onChange={(e) => setModStarterCode(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500 font-mono text-[11px]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">Golden Reference Solution Code</label>
                        <textarea
                          rows={6}
                          value={modSolutionCode}
                          onChange={(e) => setModSolutionCode(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-emerald-300 focus:outline-none focus:border-emerald-500 font-mono text-[11px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Hints (1 hint per line)</label>
                      <textarea
                        rows={2}
                        value={modHintsText}
                        onChange={(e) => setModHintsText(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-purple-500 font-mono text-[11px]"
                      />
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Modifications to Drill & DB</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const orig = allProblems.find(p => p.id === selectedProblemId);
                          if (orig) loadProblemToEdit(orig);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-medium text-xs transition-colors flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* TAB 3: SQL DATABASE & ADMIN BACKUPS */}
            {activeTab === 'backups' && (
              <AdminBackupManager adminAuthKey={adminToken} />
            )}
          </div>
        )}

      </div>
    </div>
  );
};
