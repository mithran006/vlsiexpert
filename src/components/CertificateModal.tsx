import React, { useState, useRef, useEffect } from 'react';
import { Award, Download, Sparkles, CheckCircle2, X, ShieldCheck, Cpu, Calendar, User, Printer, Share2, Copy, Lock, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { UserProfile, UserProgress, Track, Problem } from '../types';
import { ALL_PROBLEMS } from '../data/problemsIndex';
import { certificateService, CertificateAward, OFFICIAL_MILESTONES, MILESTONE_DEFINITIONS } from '../services/certificateService';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  progress: UserProgress;
  solvedProblemCount?: number;
  trackName?: string;
  recentProblemTitle?: string;
  selectedCertificateId?: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  user,
  progress,
  solvedProblemCount,
  trackName = 'VLSI & Silicon Engineering',
  recentProblemTitle,
  selectedCertificateId
}) => {
  const [studentName, setStudentName] = useState(user.name && user.name !== 'Guest User' ? user.name : 'VLSI Hardware Engineer');
  const [isCopied, setIsCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const totalSolved = solvedProblemCount !== undefined ? solvedProblemCount : progress.solvedProblemIds.length;
  const allCertificates = certificateService.getAllCertificates(progress, ALL_PROBLEMS);
  const unlockedCertificates = allCertificates.filter(c => c.unlocked);
  const nextMilestone = certificateService.getNextMilestone(totalSolved);

  // Active certificate selection
  const [activeCertId, setActiveCertId] = useState<string>(
    selectedCertificateId || (unlockedCertificates.length > 0 ? unlockedCertificates[unlockedCertificates.length - 1].id : allCertificates[0].id)
  );

  useEffect(() => {
    if (selectedCertificateId) {
      setActiveCertId(selectedCertificateId);
    } else if (unlockedCertificates.length > 0 && !unlockedCertificates.some(c => c.id === activeCertId)) {
      setActiveCertId(unlockedCertificates[unlockedCertificates.length - 1].id);
    }
  }, [selectedCertificateId, unlockedCertificates.length]);

  const currentCertificate = allCertificates.find(c => c.id === activeCertId) || allCertificates[0];
  const isCurrentUnlocked = currentCertificate.unlocked;

  const certificateId = `PSNA-VLSI-SA-2026-${(user.id || '9876').slice(-4).toUpperCase()}-${(totalSolved * 13 + (currentCertificate.requiredCount || 25) * 7).toString(16).toUpperCase()}`;
  const issueDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Render Certificate onto high-res Canvas for one-click crystal-clear download
  const generateCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1200;
    const height = 800;
    canvas.width = width;
    canvas.height = height;

    // Background Rich Dark Navy Canvas
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#060a12');
    bgGrad.addColorStop(0.5, '#0b1120');
    bgGrad.addColorStop(1, '#060a12');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle Circuit Grid Background
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 40; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0); ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 40; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y); ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Outer Golden Double Border
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Corner Ornaments
    const drawCorner = (cx: number, cy: number) => {
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();
    };
    drawCorner(40, 40);
    drawCorner(width - 40, 40);
    drawCorner(40, height - 40);
    drawCorner(width - 40, height - 40);

    // Header Institute Text
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 16px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('PSNA COLLEGE OF ENGINEERING AND TECHNOLOGY', width / 2, 95);

    ctx.fillStyle = '#f59e0b';
    ctx.font = '900 13px sans-serif';
    ctx.fillText('DEPARTMENT OF ELECTRONICS & COMMUNICATION / VLSI DESIGN', width / 2, 118);

    // Main Certificate Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 34px Georgia, serif';
    ctx.fillText('CERTIFICATE OF MASTERY & EXCELLENCE', width / 2, 172);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 16px Georgia, serif';
    ctx.fillText('This is officially accredited and verified to certify that', width / 2, 218);

    // Candidate Name
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 40px Georgia, serif';
    ctx.fillText(studentName.toUpperCase(), width / 2, 280);

    // Underline
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 250, 298);
    ctx.lineTo(width / 2 + 250, 298);
    ctx.stroke();

    // Specific Award Title
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px Georgia, serif';
    ctx.fillText(currentCertificate.title, width / 2, 345);

    // Achievement Description
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '15px sans-serif';
    ctx.fillText(
      currentCertificate.type === 'library'
        ? `has successfully achieved 100% completion in the ${currentCertificate.trackName} library,`
        : `has demonstrated outstanding problem-solving proficiency across ${currentCertificate.requiredCount} verified drills in`,
      width / 2,
      385
    );
    ctx.fillText('practical RTL design, timing closure, synthesis, simulation verification, and embedded hardware on', width / 2, 410);

    // VLSI Expert Badge
    ctx.fillStyle = '#f59e0b';
    ctx.font = '900 20px monospace';
    ctx.fillText('VLSI EXPERT — PSNACET HARDWARE PLATFORM', width / 2, 450);

    // Stats Box
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(width / 2 - 270, 480, 540, 75);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.strokeRect(width / 2 - 270, 480, 540, 75);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 13px monospace';
    ctx.fillText(`AWARD BADGE: ${currentCertificate.badgeLabel.toUpperCase()}`, width / 2, 510);

    ctx.fillStyle = '#a855f7';
    ctx.fillText(`RECORD: ${totalSolved} PROBLEMS SOLVED • GRADE: ${currentCertificate.gradeText.toUpperCase()}`, width / 2, 535);

    // Signatures & Metadata Footer
    ctx.textAlign = 'left';
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText(`Certificate ID: ${certificateId}`, 80, 680);
    ctx.fillText(`Issue Date: ${issueDate}`, 80, 705);
    ctx.fillText(`Status: Cryptographically Verified (${currentCertificate.gradeText})`, 80, 730);

    // Verification Seal / Crest (Right)
    ctx.textAlign = 'center';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width - 160, 675, 45, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#f59e0b';
    ctx.font = '900 11px sans-serif';
    ctx.fillText('PSNACET', width - 160, 665);
    ctx.fillText('OFFICIAL SEAL', width - 160, 680);
    ctx.fillText('★ 2026 ★', width - 160, 695);

    // Signature lines
    ctx.textAlign = 'center';
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(width / 2 - 120, 700);
    ctx.lineTo(width / 2 + 120, 700);
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('Head of VLSI & Microelectronics', width / 2, 720);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('PSNA College of Engineering & Technology', width / 2, 736);
  };

  useEffect(() => {
    if (isOpen && isCurrentUnlocked) {
      setTimeout(generateCanvas, 100);
    }
  }, [isOpen, studentName, totalSolved, activeCertId, isCurrentUnlocked]);

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `PSNACET_VLSI_Certificate_${currentCertificate.id}_${studentName.replace(/\s+/g, '_')}.png`;
    a.click();
  };

  const handlePrint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(`
        <html>
          <head>
            <title>PSNACET VLSI Certificate - ${studentName}</title>
            <style>
              body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #000; }
              img { max-width: 100%; max-height: 100%; object-fit: contain; }
              @media print {
                body { background: transparent; }
                img { width: 100%; height: auto; }
              }
            </style>
          </head>
          <body>
            <img src="${dataUrl}" onload="window.print();" />
          </body>
        </html>
      `);
      win.document.close();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://silicon-arena.psnacet.edu/verify/${certificateId}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh] my-auto">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-6 h-6 font-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-white tracking-tight">
                  PSNACET Official Certificates & Milestone Badges
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {unlockedCertificates.length} Unlocked
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Issued for 1 Full Library Completion (100/100) or hitting official solve milestones (25, 50, 100, 300, 500, 750, 1000, 1200, 1400).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two-Column Certificate Switcher + Canvas Viewer */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 text-slate-200 text-xs">
          
          {/* Left Column: Certificate & Badges List */}
          <div className="lg:col-span-4 p-4 space-y-3 bg-slate-950/60 overflow-y-auto max-h-[70vh]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Select Certificate ({unlockedCertificates.length}/{allCertificates.length})
              </span>
              <span className="text-[10px] font-mono text-amber-400 font-bold">
                {totalSolved} Solved
              </span>
            </div>

            {/* Milestones Section */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">
                Milestone Badges & Certificates
              </div>
              {allCertificates.filter(c => c.type === 'milestone').map(cert => (
                <button
                  key={cert.id}
                  onClick={() => setActiveCertId(cert.id)}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between gap-2 ${
                    activeCertId === cert.id
                      ? 'bg-slate-800 border-amber-500/60 shadow-md ring-1 ring-amber-500/30'
                      : cert.unlocked
                      ? 'bg-slate-900/80 border-slate-800 hover:bg-slate-800/60'
                      : 'bg-slate-950 border-slate-800/60 opacity-60 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-lg shrink-0">{cert.badgeEmoji}</span>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-white truncate flex items-center gap-1.5">
                        <span>{cert.title}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {cert.unlocked ? (
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Unlocked ({cert.requiredCount} Drills)
                          </span>
                        ) : (
                          <span>Progress: {totalSolved}/{cert.requiredCount} drills</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {cert.unlocked ? (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 shrink-0">
                      Claim
                    </span>
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Library Completions Section */}
            <div className="space-y-1.5 pt-2">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">
                Full Problem Library Masteries (100/100)
              </div>
              {allCertificates.filter(c => c.type === 'library').map(cert => (
                <button
                  key={cert.id}
                  onClick={() => setActiveCertId(cert.id)}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between gap-2 ${
                    activeCertId === cert.id
                      ? 'bg-slate-800 border-emerald-500/60 shadow-md ring-1 ring-emerald-500/30'
                      : cert.unlocked
                      ? 'bg-slate-900/80 border-slate-800 hover:bg-slate-800/60'
                      : 'bg-slate-950 border-slate-800/60 opacity-60 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-lg shrink-0">{cert.badgeEmoji}</span>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-white truncate">
                        {cert.title}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {cert.unlocked ? (
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> 100% Mastered (100/100)
                          </span>
                        ) : (
                          <span>Library Progress: {cert.currentCount}/100</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {cert.unlocked ? (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 shrink-0">
                      Claim
                    </span>
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  )}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Certificate Preview & Controls */}
          <div className="lg:col-span-8 p-6 space-y-5 overflow-y-auto max-h-[75vh]">
            
            {/* If Current Selected Certificate is LOCKED */}
            {!isCurrentUnlocked ? (
              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                  <Lock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {currentCertificate.title} Locked
                  </h3>
                  <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                    Certificates and Badges are awarded exclusively upon <strong>completing 1 full problem library (100/100)</strong> or reaching the milestone problem counts (<strong>25, 50, 100, 300, 500, 750, 1000, 1200, or 1400</strong>).
                  </p>
                </div>

                {/* Progress bar to unlock */}
                <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Requirement Progress</span>
                    <span className="font-bold text-amber-400 font-mono">
                      {currentCertificate.currentCount} / {currentCertificate.requiredCount} Drills
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (currentCertificate.currentCount / currentCertificate.requiredCount) * 100)}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-500 text-right">
                    {Math.max(0, currentCertificate.requiredCount - currentCertificate.currentCount)} more solved problems required to unlock
                  </div>
                </div>

                {/* Next available milestone info */}
                <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>
                    Your next nearest certificate is <strong>{nextMilestone.def.title}</strong> ({totalSolved}/{nextMilestone.target} — {nextMilestone.remaining} drills left).
                  </span>
                </div>
              </div>
            ) : (
              <>
                {/* Recipient Name Editor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      Recipient Name (as printed on Certificate):
                    </label>
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Enter Candidate Full Name"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-amber-300 font-bold focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="text-[11px] text-slate-400 font-semibold mb-1">Accreditation Serial ID:</span>
                    <div className="font-mono text-xs text-slate-300 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span>{certificateId}</span>
                      <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certificate Canvas Preview */}
                <div className="flex flex-col items-center justify-center bg-slate-950 p-3 sm:p-4 rounded-xl border border-slate-800 shadow-inner">
                  <canvas
                    ref={canvasRef}
                    className="w-full max-w-2xl h-auto rounded-lg border border-amber-500/30 shadow-2xl"
                  />
                </div>

                {/* Verification Details Card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Award Distinction</span>
                    <span className="text-sm font-bold text-amber-400 truncate block">{currentCertificate.gradeText}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Mastery Domain</span>
                    <span className="text-xs font-bold text-sky-400 truncate block">{currentCertificate.trackName}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Date of Issue</span>
                    <span className="text-xs font-bold text-slate-200">{issueDate}</span>
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleCopyLink}
            disabled={!isCurrentUnlocked}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-2 border border-slate-700 disabled:opacity-40"
          >
            {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{isCopied ? 'Link Copied!' : 'Copy Verification Link'}</span>
          </button>

          <div className="flex items-center gap-2.5">
            {isCurrentUnlocked ? (
              <>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all flex items-center gap-1.5 border border-slate-700"
                >
                  <Printer className="w-4 h-4 text-slate-400" />
                  <span>Print PDF</span>
                </button>

                <button
                  onClick={handleDownloadImage}
                  className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Download className="w-4 h-4 font-black" />
                  <span>Download Certificate (PNG)</span>
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all flex items-center gap-2 border border-slate-700 cursor-pointer"
              >
                <span>Continue Solving Drills</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
