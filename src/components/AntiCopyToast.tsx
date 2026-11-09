import React from 'react';
import { ShieldAlert, Lock } from 'lucide-react';

interface AntiCopyToastProps {
  show: boolean;
  message?: string;
}

export const AntiCopyToast: React.FC<AntiCopyToastProps> = ({
  show,
  message = 'Question & problem statement text is protected. Copying is disabled to prevent external AI generation.'
}) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] max-w-md animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/95 border border-rose-500/50 text-slate-100 shadow-2xl shadow-rose-950/50 backdrop-blur-xl">
        <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 shrink-0 border border-rose-500/30">
          <ShieldAlert className="w-5 h-5 animate-pulse" />
        </div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-rose-400">
            <Lock className="w-3.5 h-3.5" />
            <span>Anti-Cheating Protection Active</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-normal">
            {message}
          </p>
          <div className="text-[10px] text-slate-500 font-mono pt-1">
            PSNACET VLSI Arena • Honor Code Proctored Mode
          </div>
        </div>
      </div>
    </div>
  );
};
