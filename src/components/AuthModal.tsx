import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, LogOut, KeyRound, Mail, User, Building, Eye, EyeOff, CheckCircle2, AlertCircle, Database, Lock, ArrowLeft, RefreshCw, Sparkles } from 'lucide-react';
import { UserProfile, UserProgress, Track } from '../types';
import { storageService } from '../services/storageService';

// Google SVG Logo Component
export const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile;
  onSaveUser: (user: UserProfile) => void;
  onUserAuthSuccess?: (user: UserProfile, progress: UserProgress) => void;
  onExportDB?: () => void;
  onImportDB?: () => void;
  promptMessage?: string | null;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSaveUser,
  onUserAuthSuccess,
  promptMessage
}) => {
  // Active Tab: 'login' | 'register' | 'guest' | 'forgot' | 'profile'
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'guest' | 'forgot' | 'profile'>(
    currentUser.isGuest ? 'login' : 'profile'
  );

  // Common Form States
  const [name, setName] = useState(currentUser.name || '');
  const [email, setEmail] = useState(currentUser.email || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [collegeName, setCollegeName] = useState(currentUser.collegeName || 'PSNA College of Engineering and Technology');
  const [yearOfStudy, setYearOfStudy] = useState(currentUser.yearOfStudy || '3rd Year');
  const [department, setDepartment] = useState(currentUser.department || 'ECE - Electronics & Communication');
  const [selectedTrack, setSelectedTrack] = useState<Track>(currentUser.selectedTrack || 'both');

  // Forgot Password specific
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isEmailVerifiedForReset, setIsEmailVerifiedForReset] = useState(false);

  // Request States
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Quick Guest Mode Enter Handler
  const handleContinueAsGuest = () => {
    const { user: guestUser, progress: guestProg } = storageService.logout();
    if (onUserAuthSuccess) {
      onUserAuthSuccess(guestUser, guestProg);
    } else {
      onSaveUser(guestUser);
    }
    setSuccessMessage('Guest Mode activated! Explore drills, simulations and quizzes freely.');
    setTimeout(() => {
      onClose();
    }, 450);
  };

  useEffect(() => {
    if (promptMessage) {
      setActiveTab('login');
      setErrorMessage(null);
    }
  }, [promptMessage, isOpen]);

  useEffect(() => {
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');
    setCollegeName(currentUser.collegeName || 'PSNA College of Engineering and Technology');
    setYearOfStudy(currentUser.yearOfStudy || '3rd Year');
    setDepartment(currentUser.department || 'ECE - Electronics & Communication');
    setSelectedTrack(currentUser.selectedTrack || 'both');
    setPassword('');
    setConfirmPassword('');
    setForgotEmail('');
    setNewPassword('');
    setConfirmNewPassword('');
    setIsEmailVerifiedForReset(false);
    setErrorMessage(null);
    setSuccessMessage(null);
    if (currentUser.isGuest) {
      setActiveTab('login');
    } else {
      setActiveTab('profile');
    }
  }, [currentUser, isOpen]);

  if (!isOpen) return null;

  // 1-Click Google Authentication with Backend Verification
  const handleGoogleSignIn = async (customEmail?: string) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setGoogleLoading(true);

    try {
      // Default to user's google email if available or provided
      const gEmail = customEmail || email.trim() || 'kumarapdeepak16@gmail.com';
      const gName = name.trim() || (gEmail.includes('@') ? gEmail.split('@')[0] : 'PSNACET Engineer');
      const gAvatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(gName)}`;

      const { user, progress } = await storageService.loginWithGoogle({
        email: gEmail,
        name: gName,
        avatarUrl: gAvatar,
        rollNumber: '',
        collegeName: collegeName.trim(),
        department: department.trim(),
        yearOfStudy: yearOfStudy
      });

      setSuccessMessage(`Google Authentication Verified! Signed in as ${user.name}`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      } else {
        onSaveUser(user);
      }

      setTimeout(() => {
        onClose();
      }, 800);
    } catch (err: any) {
      setErrorMessage(err.message || 'Google login failed. Please try again.');
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
        rollNumber: '',
        collegeName: collegeName.trim() || 'PSNA College of Engineering and Technology',
        department: department.trim() || 'ECE - Electronics & Communication',
        yearOfStudy: yearOfStudy || '3rd Year'
      });

      setSuccessMessage(`Welcome, ${user.name}! Curriculum unlocked & progress loaded.`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      } else {
        onSaveUser(user);
      }

      setTimeout(() => {
        onClose();
      }, 800);
    } catch (err: any) {
      setErrorMessage(err.message || 'Easy login failed.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Login with Password against SQLite DB
  const handleLogin = async (e: React.FormEvent) => {
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
      setSuccessMessage(`Welcome back, ${user.name}! Database records and progress restored.`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      } else {
        onSaveUser(user);
      }

      setTimeout(() => {
        onClose();
      }, 900);
    } catch (err: any) {
      setErrorMessage(err.message || 'Login failed. Please verify your credentials.');
    } finally {
      setLoading(false);
    }
  };

  // Handle User Registration with Full Details and Password into SQLite DB
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (!email.trim()) {
        throw new Error('Please enter a valid email address.');
      }
      if (!name.trim()) {
        throw new Error('Please enter your full student/engineer name.');
      }
      if (!password || password.length < 4) {
        throw new Error('Password must be at least 4 characters long.');
      }
      if (confirmPassword && password !== confirmPassword) {
        throw new Error('Passwords do not match. Please verify.');
      }

      const { user, progress } = await storageService.registerWithPassword({
        email: email.trim(),
        password,
        name: name.trim(),
        rollNumber: '',
        collegeName: collegeName.trim() || 'PSNA College of Engineering and Technology',
        yearOfStudy: yearOfStudy || '3rd Year',
        department: department || 'ECE - Electronics & Communication',
        selectedTrack
      });

      setSuccessMessage(`Account registered successfully! Welcome, ${user.name}.`);
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      } else {
        onSaveUser(user);
      }

      setTimeout(() => {
        onClose();
      }, 900);
    } catch (err: any) {
      setErrorMessage(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Verify Email for Password Reset
  const handleVerifyForgotEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (!forgotEmail.trim()) {
        throw new Error('Please enter your registered email address.');
      }

      const res = await storageService.forgotPassword(forgotEmail.trim());
      setIsEmailVerifiedForReset(true);
      setSuccessMessage(`Account verified for ${res.user?.name || forgotEmail}. Please set your new password below.`);
    } catch (err: any) {
      setErrorMessage(err.message || 'No account found for this email address.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Reset Password Submission
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (!newPassword || newPassword.length < 4) {
        throw new Error('New password must be at least 4 characters long.');
      }
      if (newPassword !== confirmNewPassword) {
        throw new Error('New passwords do not match. Please verify.');
      }

      const { user, progress } = await storageService.resetPassword(forgotEmail.trim(), newPassword);
      setSuccessMessage(`Password updated successfully! You are now logged in as ${user.name}.`);
      
      if (onUserAuthSuccess) {
        onUserAuthSuccess(user, progress);
      } else {
        onSaveUser(user);
      }

      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Profile Update in SQLite DB
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const updated: UserProfile = {
      ...currentUser,
      name: name.trim() || 'Learner',
      email: email.trim() || currentUser.email,
      rollNumber: '',
      collegeName: collegeName.trim() || 'PSNA College of Engineering and Technology',
      yearOfStudy: yearOfStudy || '3rd Year',
      department: department || 'ECE - Electronics & Communication',
      selectedTrack
    };

    onSaveUser(updated);
    setSuccessMessage('Profile details updated successfully.');
    setTimeout(() => {
      onClose();
    }, 900);
  };

  // Handle Logout
  const handleLogout = () => {
    const { user, progress } = storageService.logout();
    if (onUserAuthSuccess) {
      onUserAuthSuccess(user, progress);
    } else {
      onSaveUser(user);
    }
    setActiveTab('login');
    setPassword('');
    setSuccessMessage('Logged out. You are now in guest mode.');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-100 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">VLSI Expert Portal</h2>
            <p className="text-xs text-slate-400">PSNACET EE-VLSI Student & Engineer Access</p>
          </div>
        </div>

        {/* Prominent Login Required Message for Coding Workspace */}
        {promptMessage && (
          <div className="mb-5 p-3.5 rounded-2xl bg-amber-500/15 border-2 border-amber-500/40 text-amber-200 text-xs flex items-start gap-3 shadow-lg shadow-amber-950/20">
            <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 mt-0.5 border border-amber-500/30">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-amber-200 text-xs sm:text-sm">Coding Workspace Login Required</p>
              <p className="text-amber-300/90 text-[11px] sm:text-xs leading-relaxed mt-0.5">{promptMessage}</p>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex rounded-lg bg-slate-900/90 p-1 border border-slate-800 mb-5 overflow-x-auto">
          <button
            type="button"
            onClick={() => { setActiveTab('login'); setErrorMessage(null); setSuccessMessage(null); }}
            className={`flex-1 py-1.5 px-2.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'login'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('register'); setErrorMessage(null); setSuccessMessage(null); }}
            className={`flex-1 py-1.5 px-2.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'register'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('guest'); setErrorMessage(null); setSuccessMessage(null); }}
            className={`flex-1 py-1.5 px-2.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'guest'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Guest Mode
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('forgot'); setErrorMessage(null); setSuccessMessage(null); }}
            className={`flex-1 py-1.5 px-2.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'forgot'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Forgot Password
          </button>
          {!currentUser.isGuest && (
            <button
              type="button"
              onClick={() => { setActiveTab('profile'); setErrorMessage(null); setSuccessMessage(null); }}
              className={`flex-1 py-1.5 px-2.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === 'profile'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              My Profile
            </button>
          )}
        </div>

        {/* Feedback Banners */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* 1-CLICK GOOGLE LOGIN BUTTON (Available on Login & Register tabs) */}
        {(activeTab === 'login' || activeTab === 'register') && (
          <div className="mb-5">
            <button
              type="button"
              disabled={googleLoading}
              onClick={() => handleGoogleSignIn()}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-md flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 border border-slate-300 disabled:opacity-60"
            >
              {googleLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin text-slate-900" />
              ) : (
                <GoogleIcon className="w-4 h-4 shrink-0" />
              )}
              <span>Continue with Google</span>
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-slate-800" />
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">or with password</span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>
          </div>
        )}

        {/* TAB 1: SIGN IN */}
        {activeTab === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
                <span>Email Address *</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. student@psnacet.edu.in"
                  required
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-300">
                  Password *
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('forgot');
                    setForgotEmail(email);
                    setErrorMessage(null);
                  }}
                  className="text-[11px] text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your account password"
                  required
                  className="w-full pl-9 pr-10 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95"
              >
                {loading ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                ) : (
                  <KeyRound className="w-4 h-4 text-slate-950" />
                )}
                <span>Sign In with Password</span>
              </button>

              <button
                type="button"
                disabled={loading}
                onClick={() => handleEasyLogin()}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-amber-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>⚡ Easy Quick Access (Instant / No Password)</span>
              </button>

              <button
                type="button"
                onClick={handleContinueAsGuest}
                className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-amber-300 font-semibold text-xs border border-slate-800 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2"
              >
                <span>🚀 Continue in Guest Mode (Explore Freely)</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('register'); setErrorMessage(null); }}
                className="text-center text-xs text-slate-400 hover:text-amber-400 py-1 transition-colors"
              >
                Need an account? <strong className="text-amber-400 underline">Register with Full Details</strong>
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: SIGN UP / REGISTER WITH ALL DETAILS */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Deepak Kumar"
                    required
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. student@psnacet.edu.in"
                    required
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">College Name *</label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="PSNA College of Engg"
                  required
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Department / Branch *</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="ECE - Electronics & Communication">ECE - Electronics & Communication</option>
                  <option value="EEE - Electrical & Electronics">EEE - Electrical & Electronics</option>
                  <option value="VLSI Design & Microelectronics">VLSI Design & Microelectronics</option>
                  <option value="AI & DS - Artificial Intelligence">AI & DS - Artificial Intelligence</option>
                  <option value="Mechanical / Mechatronics">Mechanical / Mechatronics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Year of Study *</label>
                <select
                  value={yearOfStudy}
                  onChange={(e) => setYearOfStudy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Create Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 4 characters"
                    required
                    minLength={4}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Confirm Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    required
                    minLength={4}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Career Focus Track</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTrack('frontend')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border text-center transition-all ${
                    selectedTrack === 'frontend'
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  Front-End VLSI
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTrack('backend')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border text-center transition-all ${
                    selectedTrack === 'backend'
                      ? 'bg-rose-600 text-white border-rose-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  Back-End DFT
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTrack('both')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border text-center transition-all ${
                    selectedTrack === 'both'
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  All Tracks
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95"
              >
                {loading ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                ) : (
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                )}
                <span>Complete Registration & Save Details</span>
              </button>

              <button
                type="button"
                onClick={handleContinueAsGuest}
                className="w-full py-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-amber-300 font-semibold text-xs border border-slate-800 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🚀 Skip Registration & Continue as Guest</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('login'); setErrorMessage(null); }}
                className="text-center text-xs text-slate-400 hover:text-amber-400 py-1 transition-colors cursor-pointer"
              >
                Already registered? <strong className="text-amber-400 underline">Sign In with Password</strong>
              </button>
            </div>
          </form>
        )}

        {/* TAB: GUEST MODE EXPLORER */}
        {activeTab === 'guest' && (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#0b0e17] border border-amber-500/30 text-slate-200">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Guest Mode Instant Access</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Explore the entire VLSI Expert hardware drill ecosystem without having to register or enter credentials:
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full access to 1000+ Verilog, SystemVerilog & VHDL problems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Interactive EDA waveform simulation & testbench runner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Quiz Arena & 480+ semiconductor mock interview questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Progress automatically saved and synchronized</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={handleContinueAsGuest}
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <span>🚀 Launch VLSI Expert in Guest Mode</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('login'); setErrorMessage(null); }}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors text-center"
              >
                Sign In to an Existing Account
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: FORGOT PASSWORD */}
        {activeTab === 'forgot' && (
          <div className="space-y-4">
            {!isEmailVerifiedForReset ? (
              <form onSubmit={handleVerifyForgotEmail} className="space-y-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 leading-relaxed">
                  Enter your registered student email address. We will verify your profile and let you set a new secure password.
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Registered Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="e.g. student@psnacet.edu.in"
                      required
                      className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    {loading ? (
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    ) : (
                      <KeyRound className="w-4 h-4 text-slate-950" />
                    )}
                    <span>Verify Account Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setActiveTab('login'); setErrorMessage(null); }}
                    className="text-center text-xs text-slate-400 hover:text-slate-200 py-1 flex items-center justify-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Sign In
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
                  Account verified for <strong>{forgotEmail}</strong>. Enter your new password below:
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    New Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password (min 4 characters)"
                      required
                      minLength={4}
                      className="w-full pl-9 pr-10 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(prev => !prev)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Confirm New Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="Confirm new password"
                      required
                      minLength={4}
                      className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    {loading ? (
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                    )}
                    <span>Update Password & Sign In</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsEmailVerifiedForReset(false);
                      setActiveTab('login');
                      setErrorMessage(null);
                    }}
                    className="text-center text-xs text-slate-400 hover:text-slate-200 py-1 flex items-center justify-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Cancel & Return to Login
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 4: LOGGED-IN PROFILE */}
        {activeTab === 'profile' && !currentUser.isGuest && (
          <form onSubmit={handleUpdateProfile} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800/60 rounded-xl text-xs text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">College</label>
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Department</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="ECE - Electronics & Communication">ECE - Electronics & Communication</option>
                  <option value="EEE - Electrical & Electronics">EEE - Electrical & Electronics</option>
                  <option value="VLSI Design & Microelectronics">VLSI Design & Microelectronics</option>
                  <option value="AI & DS - Artificial Intelligence">AI & DS - Artificial Intelligence</option>
                  <option value="Mechanical / Mechatronics">Mechanical / Mechatronics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Year</label>
                <select
                  value={yearOfStudy}
                  onChange={(e) => setYearOfStudy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
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

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md"
              >
                Update Profile Details
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-rose-400 hover:text-rose-300 font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out / Switch Account</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
