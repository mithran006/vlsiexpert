import React, { useState, memo } from 'react';
import { 
  Cpu, Zap, Layers, Grid, Terminal, ShieldCheck, Activity, ArrowRight, 
  CheckCircle2, Play, Code2, Users, User, Lock, Mail, KeyRound, LogIn, 
  UserPlus, Check, RefreshCw, ChevronRight, BookOpen, Sparkles, Unlock,
  Newspaper, Rocket
} from 'lucide-react';
import { TOPIC_METADATA } from '../data/topicMeta';
import { PsnacetLogo } from './PsnacetLogo';
import { UserProfile, UserProgress } from '../types';
import { storageService } from '../services/storageService';

interface LandingPageProps {
  onStartPracticing: () => void;
  onSelectTopic: (topic: string) => void;
  onNavigateToNews?: () => void;
  totalProblemsCount: number;
  onOpenAuth: () => void;
  currentUser?: UserProfile;
  onUserAuthSuccess?: (user: UserProfile, progress: UserProgress) => void;
}

const MENTOR = {
  name: 'DR P MANIRAJ KUMAR',
  designation: 'PROFESSOR & HEAD IC/ EE-VLSI DEPARTMENT',
  dept: 'PSNACET',
  desc: 'Guiding semiconductor research, digital & analog VLSI architectures, and EDA simulation excellence.'
};

const TEAM_MEMBERS = [
  { name: 'DEEPAK KUMAR AP', designation: 'VLSI Architecture & Platform Design' },
  { name: 'MITHRAN B', designation: 'RTL Design & Digital Logic Architecture' },
  { name: 'MOHAMMED SUHAIL', designation: 'Interactive EDA Simulation & Software Stack' },
  { name: 'THILUCK', designation: 'SystemVerilog, UVM & Hardware Verification' },
  { name: 'BOOMIKA', designation: 'FPGA Architecture & Silicon Engineering' },
  { name: 'BASHA DHAARENYA', designation: 'Digital Circuit Synthesis & Hardware Logic' },
  { name: 'MARY SHIMONA', designation: 'Embedded Systems & AI Silicon Architecture' }
];

export const LandingPage: React.FC<LandingPageProps> = memo(({
  onStartPracticing,
  onSelectTopic,
  onNavigateToNews,
  totalProblemsCount,
  onOpenAuth,
  currentUser,
  onUserAuthSuccess
}) => {
  const topicKeys = Object.keys(TOPIC_METADATA);
  const isAuthenticated = Boolean(currentUser && !currentUser.isGuest);

  // Inline Login / Register / Forgot Password form states
  const [mode, setMode] = useState<'easy' | 'login' | 'register' | 'guest' | 'forgot'>('easy');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('PSNA College of Engineering and Technology');
  const [department, setDepartment] = useState('ECE - Electronics & Communication');
  const [yearOfStudy, setYearOfStudy] = useState('3rd Year');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Forgot password flow
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isForgotEmailVerified, setIsForgotEmailVerified] = useState(false);

  // Guest Mode Entry Handler
  const handleEnterGuestMode = () => {
    const { user: guestUser, progress: guestProg } = storageService.logout();
    if (onUserAuthSuccess) {
      onUserAuthSuccess(guestUser, guestProg);
    }
    onStartPracticing();
  };

  const handleGoogleSignIn = async (customEmail?: string) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setGoogleLoading(true);

    try {
      const gEmail = customEmail || email.trim() || 'kumarapdeepak16@gmail.com';
      const gName = name.trim() || (gEmail.includes('@') ? gEmail.split('@')[0] : 'Deepak Kumar');
      const gAvatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(gName)}`;

      const { user, progress } = await storageService.loginWithGoogle({
        email: gEmail,
        name: gName,
        avatarUrl: gAvatar,
        collegeName: collegeName.trim() || 'PSNA College of Engineering and Technology',
        department: department.trim() || 'ECE - Electronics & Communication',
        yearOfStudy: yearOfStudy || '3rd Year'
      });

      setSuccessMessage(`Google Authentication Verified! Welcome, ${user.name}. Topics unlocked!`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Google authentication failed.');
    } finally {
      setGoogleLoading(false);
    }
  };

  // Easy Quick Student Login (Older Version - No password barrier)
  const handleEasyLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      const studentEmail = email.trim() || 'kumarapdeepak16@gmail.com';
      const studentName = name.trim() || (studentEmail.includes('@') ? studentEmail.split('@')[0] : 'Deepak Kumar');
      const studentAvatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(studentName)}`;

      const { user, progress } = await storageService.loginWithGoogle({
        email: studentEmail,
        name: studentName,
        avatarUrl: studentAvatar,
        collegeName: collegeName.trim() || 'PSNA College of Engineering and Technology',
        department: department.trim() || 'ECE - Electronics & Communication',
        yearOfStudy: yearOfStudy || '3rd Year'
      });

      setSuccessMessage(`Welcome, ${user.name}! Curriculum unlocked & progress loaded.`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Easy login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInlineLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (!email.trim()) {
        throw new Error('Please enter your registered email address.');
      }
      if (!password) {
        throw new Error('Please enter your password.');
      }

      const { user, progress } = await storageService.loginWithPassword(email.trim(), password);
      setSuccessMessage(`Welcome back, ${user.name}! Curriculum unlocked & progress loaded.`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Login failed. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  const handleInlineRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (!email.trim()) {
        throw new Error('Please enter an email address.');
      }
      if (!password || password.length < 4) {
        throw new Error('Password must be at least 4 characters long.');
      }
      if (confirmPassword && password !== confirmPassword) {
        throw new Error('Passwords do not match.');
      }
      if (!name.trim()) {
        throw new Error('Please enter your full name.');
      }

      const { user, progress } = await storageService.registerWithPassword({
        email: email.trim(),
        password,
        name: name.trim(),
        collegeName: collegeName.trim() || 'PSNA College of Engineering and Technology',
        department: department.trim() || 'ECE - Electronics & Communication',
        yearOfStudy: yearOfStudy || '3rd Year',
        selectedTrack: 'both'
      });

      setSuccessMessage(`Account created! Welcome, ${user.name}. Structured topics are now unlocked.`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (!forgotEmail.trim()) {
        throw new Error('Please enter your registered email.');
      }
      const res = await storageService.forgotPassword(forgotEmail.trim());
      setIsForgotEmailVerified(true);
      setSuccessMessage(`Account found for ${res.user?.name || forgotEmail}. Set your new password below.`);
    } catch (err: any) {
      setErrorMessage(err.message || 'No account found for this email address.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (!newPassword || newPassword.length < 4) {
        throw new Error('Password must be at least 4 characters long.');
      }
      if (newPassword !== confirmNewPassword) {
        throw new Error('Passwords do not match.');
      }
      const { user, progress } = await storageService.resetPassword(forgotEmail.trim(), newPassword);
      setSuccessMessage(`Password updated successfully! Welcome, ${user.name}.`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Grid': return <Grid className="w-6 h-6" />;
      case 'Terminal': return <Terminal className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f1f3f7] flex flex-col selection:bg-[#e5a93c] selection:text-[#0a0b0e]">
      
      {/* 1. HERO INTRO SECTION */}
      <div className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#22242f]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 leading-[1.15]">
            Master Hardware & Digital Logic Design
          </h1>

          <div className="max-w-2xl mx-auto mb-5">
            <span className="text-[#e5a93c] text-lg sm:text-2xl font-bold">
              3,000 Curated Problems Across 15 Core Subjects
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#9da3b4] max-w-3xl mx-auto mb-8 leading-relaxed">
            Practice Verilog, SystemVerilog, VHDL, FPGA, Linux shell scripting, UVM verification, and DFT physical design directly in your browser with real-time online timing simulation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {isAuthenticated ? (
              <>
                <a
                  href="#topics"
                  className="px-6 py-3 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#0a0b0e] font-bold text-sm shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#0a0b0e]" />
                  <span>Browse 15 Subjects</span>
                </a>
                <button
                  onClick={onStartPracticing}
                  className="px-6 py-3 rounded-lg bg-[#14151b] hover:bg-[#1a1b24] text-[#e2e4ea] font-medium text-sm border border-[#22242f] hover:border-[#e5a93c]/50 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current text-[#e5a93c]" />
                  <span>Practice 3,000 Problems</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="px-6 py-3 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#0a0b0e] font-bold text-sm shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-[#0a0b0e]" />
                  <span>Sign In to Open Problems</span>
                </button>
                <a
                  href="#login-section"
                  className="px-6 py-3 rounded-lg bg-[#14151b] hover:bg-[#1a1b24] text-[#e2e4ea] font-medium text-sm border border-[#22242f] hover:border-[#e5a93c]/50 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <UserPlus className="w-4 h-4 text-[#e5a93c]" />
                  <span>Register / Account</span>
                </a>
              </>
            )}
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 max-w-3xl mx-auto pt-6 border-t border-[#22242f]">
            <div className="p-4 rounded-xl bg-[#111217] border border-[#22242f] hover:border-[#e5a93c]/40 transition-colors text-left">
              <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 font-mono">3,000</div>
              <div className="text-xs text-[#8c91a0]">Practice Problems</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111217] border border-[#22242f] hover:border-[#e5a93c]/40 transition-colors text-left">
              <div className="text-xl sm:text-2xl font-bold text-[#e5a93c] mb-0.5 font-mono">15 Core</div>
              <div className="text-xs text-[#8c91a0]">Hardware Subjects</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111217] border border-[#22242f] hover:border-[#e5a93c]/40 transition-colors text-left">
              <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 font-mono">Cycle-Accurate</div>
              <div className="text-xs text-[#8c91a0]">Waveform Simulator</div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. ONLY ONE LOGIN SECTION (RIGHT AFTER INTRO) */}
      <div id="login-section" className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {isAuthenticated && currentUser ? (
          /* Authenticated Engineer Profile View */
          <div className="p-6 sm:p-8 rounded-2xl bg-[#15161d] border border-[#262833] hover:border-[#e5a93c]/40 transition-colors shadow-sm relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e5a93c]/15 border border-[#e5a93c]/30 flex items-center justify-center text-[#e5a93c] font-bold text-base shrink-0 font-mono">
                  {currentUser.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 text-xs text-slate-400 font-mono">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Authenticated
                    </span>
                    <span className="text-[#3e424f]">·</span>
                    <span className="text-[#e5a93c] font-semibold">{currentUser.department || 'EE-VLSI'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{currentUser.name}</h3>
                  <p className="text-xs text-[#8c91a0] mt-0.5">{currentUser.collegeName || 'PSNA College of Engineering & Technology'} · {currentUser.email}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <a
                  href="#topics"
                  className="flex-1 md:flex-none px-4 py-2.5 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#111215] font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#111215]" />
                  View Topics Below
                </a>
                <button
                  onClick={onOpenAuth}
                  className="flex-1 md:flex-none px-4 py-2.5 rounded-lg bg-[#1c1d24] hover:bg-[#252731] text-slate-200 font-medium text-xs border border-[#2e303d] flex items-center justify-center gap-2 transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  Account Details
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Unauthenticated Single Login Card */
          <div className="p-6 sm:p-8 rounded-2xl bg-[#15161d] border border-[#262833] hover:border-[#e5a93c]/40 transition-colors shadow-sm relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left column */}
              <div className="w-full lg:w-5/12 text-left">
                <div className="text-xs font-mono font-medium text-[#e5a93c] tracking-wider uppercase mb-2">
                  Student & Engineer Access
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  Sign In to Access Structured Topics
                </h3>

                <p className="text-xs sm:text-sm text-[#8c91a0] mb-6 leading-relaxed">
                  Log in with Google or your student account to unlock all structured hardware learning tracks, save your code solutions, and track your global rank.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Unlocks all 14 structured VLSI learning topics</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0" />
                    <span>Permanent cloud synchronization for code solutions</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Global Leaderboard rank tracking & certificates</span>
                  </div>
                </div>
              </div>

              {/* Right column: Interactive Sign In / Register / Forgot Password Form */}
              <div className="w-full lg:w-7/12 bg-[#101117] p-5 sm:p-6 rounded-xl border border-[#262833]">
                
                {/* Standard Google Login Button */}
                <div className="mb-4">
                  <button
                    type="button"
                    disabled={googleLoading}
                    onClick={() => handleGoogleSignIn()}
                    className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-3 transition-colors border border-slate-200 disabled:opacity-60 cursor-pointer"
                  >
                    {googleLoading ? (
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-900" />
                    ) : (
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    )}
                    <span>Sign in with Google</span>
                  </button>

                  <div className="flex items-center gap-3 my-3">
                    <div className="flex-1 h-px bg-[#22242f]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c91a0]">or sign in with password / guest</span>
                    <div className="flex-1 h-px bg-[#22242f]" />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-[#22242f]">
                  <div className="flex flex-wrap items-center gap-1 p-1 bg-[#0c0d12] rounded-lg border border-[#22242f]">
                    <button
                      type="button"
                      onClick={() => { setMode('easy'); setErrorMessage(null); setSuccessMessage(null); }}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        mode === 'easy'
                          ? 'bg-[#e5a93c] text-[#0a0b0e] shadow-sm'
                          : 'text-[#8c91a0] hover:text-[#e5a93c]'
                      }`}
                    >
                      <Zap className={`w-3.5 h-3.5 ${mode === 'easy' ? 'text-[#0a0b0e]' : 'text-[#e5a93c]'}`} />
                      Quick Login
                    </button>

                    <button
                      type="button"
                      onClick={() => { setMode('login'); setErrorMessage(null); setSuccessMessage(null); }}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        mode === 'login'
                          ? 'bg-[#e5a93c] text-[#0a0b0e] shadow-sm'
                          : 'text-[#8c91a0] hover:text-[#e5a93c]'
                      }`}
                    >
                      <LogIn className="w-3.5 h-3.5" />
                      Password Login
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => { setMode('register'); setErrorMessage(null); setSuccessMessage(null); }}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        mode === 'register'
                          ? 'bg-[#e5a93c] text-[#0a0b0e] shadow-sm'
                          : 'text-[#8c91a0] hover:text-[#e5a93c]'
                      }`}
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      Register
                    </button>

                    <button
                      type="button"
                      onClick={() => { setMode('guest'); setErrorMessage(null); setSuccessMessage(null); }}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        mode === 'guest'
                          ? 'bg-[#e5a93c] text-[#0a0b0e] shadow-sm'
                          : 'text-[#8c91a0] hover:text-[#e5a93c]'
                      }`}
                    >
                      Guest Mode
                    </button>

                    <button
                      type="button"
                      onClick={() => { setMode('forgot'); setForgotEmail(email); setErrorMessage(null); setSuccessMessage(null); }}
                      className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                        mode === 'forgot'
                          ? 'bg-[#e5a93c] text-[#0a0b0e] shadow-sm'
                          : 'text-[#8c91a0] hover:text-white'
                      }`}
                    >
                      Forgot?
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-3.5 p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <span className="font-bold">Error:</span> {errorMessage}
                  </div>
                )}

                {successMessage && (
                  <div className="mb-3.5 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {/* EASY QUICK LOGIN */}
                {mode === 'easy' && (
                  <form onSubmit={handleEasyLogin} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-amber-400" />
                          Student Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Deepak Kumar"
                          className="w-full px-3.5 py-2 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-amber-400" />
                          Email / Google ID
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="kumarapdeepak16@gmail.com"
                          className="w-full px-3.5 py-2 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Department
                        </label>
                        <select
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                        >
                          <option value="ECE - Electronics & Communication">ECE - Electronics & Communication</option>
                          <option value="EEE - Electrical & Electronics">EEE - Electrical & Electronics</option>
                          <option value="VLSI Design & Microelectronics">VLSI Design & Microelectronics</option>
                          <option value="AI & Data Science">AI & Data Science</option>
                          <option value="Mechanical / Mechatronics">Mechanical / Mechatronics</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Year of Study
                        </label>
                        <select
                          value={yearOfStudy}
                          onChange={(e) => setYearOfStudy(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                        >
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year (Final Year)</option>
                          <option value="PG / M.Tech VLSI">PG / M.Tech VLSI</option>
                          <option value="Alumni / Industry">Alumni / Industry</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-1 flex flex-col gap-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer active:scale-95"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                            Unlocking Topics...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 fill-current text-slate-950" />
                            Instant Student Access (Unlock All Topics)
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleEnterGuestMode}
                        className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-semibold text-xs border border-amber-500/30 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>⚡ Continue in Guest Mode (No Account Required)</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* LOGIN FORM */}
                {mode === 'login' && (
                  <form onSubmit={handleInlineLogin} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-amber-400" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. student@psnacet.edu.in"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                          <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() => { setMode('forgot'); setForgotEmail(email); setErrorMessage(null); }}
                          className="text-[10px] text-amber-400 hover:text-amber-300"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div className="flex flex-col gap-2 pt-1">
                      <div className="flex items-center gap-3">
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex-1 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs shadow-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          {loading ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                              Signing in...
                            </>
                          ) : (
                            <>
                              <LogIn className="w-4 h-4 text-slate-950" />
                              Sign In & Unlock Topics
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={onStartPracticing}
                          className="px-3 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700 transition-colors shrink-0"
                        >
                          Browse
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={handleEnterGuestMode}
                        className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Continue in Guest Mode</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* REGISTER FORM WITH ALL DETAILS */}
                {mode === 'register' && (
                  <form onSubmit={handleInlineRegister} className="space-y-2.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Deepak Kumar"
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="student@psnacet.edu.in"
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                        College / Institution Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        placeholder="PSNA College of Engineering and Technology"
                        className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                          Department *
                        </label>
                        <select
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                        >
                          <option value="ECE - Electronics & Communication">ECE - Electronics & Communication</option>
                          <option value="EEE - Electrical & Electronics">EEE - Electrical & Electronics</option>
                          <option value="VLSI Design & Microelectronics">VLSI Design & Microelectronics</option>
                          <option value="AI & Data Science">AI & Data Science</option>
                          <option value="Mechanical / Mechatronics">Mechanical / Mechatronics</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                          Year of Study *
                        </label>
                        <select
                          value={yearOfStudy}
                          onChange={(e) => setYearOfStudy(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                        >
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year (Final Year)</option>
                          <option value="PG / M.Tech VLSI">PG / M.Tech VLSI</option>
                          <option value="Alumni / Industry">Alumni / Industry</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                          Password *
                        </label>
                        <input
                          type="password"
                          required
                          minLength={4}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Min 4 chars"
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          required
                          minLength={4}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Repeat password"
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer active:scale-95"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                            Creating Account...
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4 fill-current text-slate-950" />
                            Save All Details & Register
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleEnterGuestMode}
                        className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 font-semibold text-xs border border-slate-800 hover:border-amber-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>⚡ Skip Registration & Continue as Guest</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* GUEST MODE TAB PANEL */}
                {mode === 'guest' && (
                  <div className="space-y-3.5">
                    <div className="p-4 rounded-xl bg-[#090e18] border border-amber-500/30 text-xs text-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Instant Guest Mode Access</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        Start practicing 1000+ VLSI hardware problems, EDA timing waveform simulations, quiz challenges, and interview questions without registering.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleEnterGuestMode}
                      className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                    >
                      <Sparkles className="w-4 h-4 text-slate-950 fill-current" />
                      <span>Launch VLSI Expert in Guest Mode</span>
                    </button>
                  </div>
                )}

                {/* FORGOT PASSWORD FORM */}
                {mode === 'forgot' && (
                  <div className="space-y-3">
                    {!isForgotEmailVerified ? (
                      <form onSubmit={handleVerifyForgot} className="space-y-3">
                        <p className="text-xs text-amber-300">
                          Enter your registered email address to verify your account:
                        </p>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Registered Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            placeholder="student@psnacet.edu.in"
                            className="w-full px-3 py-2 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                          />
                        </div>
                        <div className="flex gap-2 pt-1">
                          <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                          >
                            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <KeyRound className="w-3.5 h-3.5" />}
                            Verify Email
                          </button>
                          <button
                            type="button"
                            onClick={() => { setMode('login'); setErrorMessage(null); }}
                            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                          >
                            Back
                          </button>
                        </div>
                      </form>
                    ) : (
                      <form onSubmit={handleResetPassword} className="space-y-3">
                        <p className="text-xs text-emerald-300">
                          Verified for <strong>{forgotEmail}</strong>. Enter new password:
                        </p>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                            New Password (min 4 chars) *
                          </label>
                          <input
                            type="password"
                            required
                            minLength={4}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New password"
                            className="w-full px-3 py-2 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Confirm New Password *
                          </label>
                          <input
                            type="password"
                            required
                            minLength={4}
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            placeholder="Repeat new password"
                            className="w-full px-3 py-2 rounded-xl bg-[#090e18] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                          />
                        </div>
                        <div className="flex gap-2 pt-1">
                          <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 py-2 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                          >
                            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                            Reset Password & Sign In
                          </button>
                          <button
                            type="button"
                            onClick={() => { setIsForgotEmailVerified(false); setMode('login'); }}
                            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}

              </div>

            </div>
          </div>
        )}
      </div>

      {/* 3. STRUCTURED LEARNING TOPICS */}
      <div id="topics" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-b border-[#22242f]">
        <div className="text-center mb-12">
          <div className="text-xs font-mono font-bold text-[#e5a93c] tracking-wider uppercase mb-2">
            VLSI & Digital Hardware Curriculum
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Structured Learning Topics
          </h2>
          <p className="text-[#8c91a0] max-w-2xl mx-auto text-sm leading-relaxed">
            Select any structured topic to launch targeted problem sets tailored for Front-End (Design & Verification) and Back-End (Physical Design) semiconductor careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {topicKeys.map((key) => {
            const meta = TOPIC_METADATA[key];
            return (
              <div
                key={meta.id}
                onClick={() => onSelectTopic(meta.id)}
                className="group p-5 rounded-xl bg-[#0e0f14] hover:bg-[#15161d] border border-[#22242f] hover:border-[#e5a93c] hover:shadow-[0_0_20px_rgba(229,169,60,0.15)] transition-all cursor-pointer flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 bg-[#e5a93c]/15 text-[#e5a93c] border border-[#e5a93c]/30"
                    >
                      {getIcon(meta.iconName)}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#e5a93c] bg-[#e5a93c]/15 px-2 py-0.5 rounded border border-[#e5a93c]/30">
                      {meta.shortCode}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#e5a93c] transition-colors">
                    {meta.name}
                  </h3>

                  <p className="text-xs text-[#8c91a0] leading-relaxed mb-4">
                    {meta.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#22242f] flex items-center justify-between text-xs font-medium">
                  <span className="text-[#6c7280] font-mono text-[11px]">200 Problems</span>
                  <span className="text-[#e5a93c] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-bold text-xs">
                    Practice <ArrowRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3.5 LATEST TECHNOLOGY NEWS & LAUNCHES SHOWCASE */}
      {onNavigateToNews && (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0f14] border border-[#22242f] hover:border-[#e5a93c]/50 transition-colors shadow-sm relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-mono font-bold text-[#e5a93c] tracking-wider uppercase mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e5a93c]" />
                <span>Verified Tech Wire & Silicon Launches</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Live Tech News Wire & Silicon Launches
              </h2>
              <p className="text-[#8c91a0] text-xs sm:text-sm leading-relaxed mb-4">
                Real-time verified semiconductor breakthroughs from the <strong className="text-[#e5a93c] font-semibold">last 72 hours</strong>: <span className="text-white">TSMC A16 Angstrom node</span>, <span className="text-white">ASML High-NA EUV lithography</span>, <span className="text-white">NVIDIA Vera Rubin HBM4</span>, and commercial launches from TSMC, Intel, AMD, Apple, Qualcomm, and Samsung.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#8c91a0] font-mono">
                <span>Breaking Alerts</span>
                <span className="text-[#3e424f]">·</span>
                <span>Sub-2nm GAA</span>
                <span className="text-[#3e424f]">·</span>
                <span>Commercial Silicon</span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={onNavigateToNews}
                className="w-full lg:w-auto px-6 py-3 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#0a0b0e] font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
              >
                <Newspaper className="w-4 h-4 text-[#0a0b0e]" />
                <span>Open Live Tech News Wire</span>
                <ArrowRight className="w-4 h-4 text-[#0a0b0e]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. PSNACET LEADERSHIP & ENGINEERING TEAM */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#22242f]">
        <div className="text-center mb-10">
          <div className="text-xs font-mono font-bold text-[#e5a93c] tracking-wider uppercase mb-2">
            PSNACET VLSI Department Leadership & Engineering Team
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            VLSI Expert Leadership & Team
          </h2>
          <p className="text-[#8c91a0] max-w-2xl mx-auto text-sm leading-relaxed">
            Empowering the next generation of VLSI and semiconductor design engineers at <strong className="text-white">PSNACET</strong>.
          </p>
        </div>

        {/* Head of Department Featured Card */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#0e0f14] border border-[#22242f] hover:border-[#e5a93c] hover:shadow-[0_0_20px_rgba(229,169,60,0.15)] transition-all shadow-sm flex flex-col sm:flex-row items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-[#e5a93c]/20 border border-[#e5a93c]/40 flex items-center justify-center text-[#e5a93c] font-black text-lg font-mono shrink-0 shadow-inner">
              MK
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">{MENTOR.name}</h3>
              <div className="text-xs font-mono text-[#e5a93c] font-bold tracking-wide mb-1">
                {MENTOR.designation}
              </div>
              <p className="text-xs text-[#8c91a0] font-normal">{MENTOR.desc}</p>
            </div>
          </div>
        </div>

        {/* Engineering Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.name}
              className="p-5 rounded-xl bg-[#0e0f14] hover:bg-[#15161d] border border-[#22242f] hover:border-[#e5a93c] hover:shadow-[0_0_18px_rgba(229,169,60,0.15)] transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#e5a93c] bg-[#e5a93c]/15 px-2 py-0.5 rounded border border-[#e5a93c]/30">
                    0{index + 1}.
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    PSNACET
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-tight group-hover:text-[#e5a93c] transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs text-[#8c91a0] leading-relaxed font-mono">
                  {member.designation}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#22242f] flex items-center justify-between text-[11px] font-mono text-[#6c7280]">
                <span className="text-slate-400">PSNACET</span>
                <span className="text-[#e5a93c] font-semibold">VLSI Expert</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. INTERACTIVE WAVEFORM & CODE SIMULATOR HIGHLIGHT */}
      <div className="py-16 bg-[#0a0b0e] border-t border-[#22242f] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5a93c]/15 text-[#e5a93c] text-xs font-bold mb-4 border border-[#e5a93c]/30">
              <Code2 className="w-3.5 h-3.5 text-[#e5a93c]" />
              <span>Online Cloud EDA Testbench Engine</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Write Hardware Code & View Live Digital Waveforms
            </h2>

            <p className="text-[#8c91a0] text-sm leading-relaxed mb-6">
              VLSI Expert includes a dedicated online digital timing simulator. Step through clock cycles, force input pins, export testbenches, and view real-time digital logic transitions across multi-signal timing charts.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-[#d1d5db]">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0" />
                <span>Supports Verilog, SystemVerilog, VHDL, and Linux EDA scripts.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0" />
                <span>Interactive signal forcing and step-by-step clock cycle simulation.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0" />
                <span>AI Silicon Copilot for debugging Verilog syntax and timing violations online.</span>
              </li>
            </ul>

            {isAuthenticated && (
              <button
                onClick={onStartPracticing}
                className="px-6 py-3 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#0a0b0e] font-bold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer active:scale-95"
              >
                Open Online Workspace
                <ArrowRight className="w-4 h-4 text-[#0a0b0e]" />
              </button>
            )}
          </div>

          {/* Simulated Waveform Preview Box */}
          <div className="p-6 rounded-2xl bg-[#0e0f14] border border-[#e5a93c]/30 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#22242f]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-[#e5a93c]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[#8c91a0] text-xs ml-2 font-sans font-semibold">Online Waveform Viewer (CLK Cycle 0 .. 4)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#e5a93c]/15 text-[#e5a93c] text-[10px] font-bold border border-[#e5a93c]/40">ONLINE PASSED</span>
            </div>

            {/* Waveform Trace mock */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[11px] text-[#8c91a0] mb-1">
                  <span>clk</span>
                  <span className="text-[#e5a93c] font-semibold">Period: 10ns</span>
                </div>
                <div className="h-6 bg-[#0a0b0e] rounded border border-[#22242f] flex items-center px-2 text-[#e5a93c] overflow-x-auto">
                  ──┐  ┌──┐  ┌──┐  ┌──
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-[#8c91a0] mb-1">
                  <span>rst (async)</span>
                  <span className="text-[#8c91a0]">Active High</span>
                </div>
                <div className="h-6 bg-[#0a0b0e] rounded border border-[#22242f] flex items-center px-2 text-[#f59e0b] font-bold">
                  ████ logic 1 ████░░░ logic 0 ░░░░
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-[#8c91a0] mb-1">
                  <span>count[3:0]</span>
                  <span className="text-[#fbbf24] font-semibold">Hex 0x0 -&gt; 0x1 -&gt; 0x2</span>
                </div>
                <div className="h-6 bg-[#0a0b0e] rounded border border-[#22242f] flex items-center px-2 text-[#fbbf24] font-bold">
                  |  0x0  |  0x1  |  0x2  |  0x3  |
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
});

LandingPage.displayName = 'LandingPage';
