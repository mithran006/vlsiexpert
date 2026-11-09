import React from 'react';
import { Terminal, CheckCircle2, XCircle, Play, Download, ShieldCheck, Code2 } from 'lucide-react';
import { SimulationResult } from '../../types';

interface LinuxTerminalConsoleProps {
  simulationResult: SimulationResult | null;
  code?: string;
  onDownloadScript?: () => void;
  problem?: any;
  isSimulating?: boolean;
}

export const LinuxTerminalConsole: React.FC<LinuxTerminalConsoleProps> = ({
  simulationResult,
  code = '',
  onDownloadScript,
  problem,
  isSimulating = false
}) => {
  const passed = simulationResult?.passed ?? false;
  const logs = simulationResult?.logs || [];
  const message = simulationResult?.message || (isSimulating ? 'Executing script in Linux container...' : 'Ready for execution');

  return (
    <div className="h-full flex flex-col bg-[#111215] text-[#f1f3f7] font-mono text-xs overflow-hidden border-t border-[#262833] selection:bg-[#e5a93c] selection:text-[#111215]">
      
      {/* Header Result Banner */}
      <div className={`px-4 py-2 flex items-center justify-between border-b shrink-0 ${
        isSimulating
          ? 'bg-blue-950/40 border-blue-500/30 text-blue-300'
          : !simulationResult
          ? 'bg-[#16171d] border-[#262833] text-[#9da3b4]'
          : passed
          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400'
          : 'bg-rose-950/40 border-rose-500/30 text-rose-400'
      }`}>
        <div className="flex items-center gap-2 font-bold truncate">
          {isSimulating ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin shrink-0" />
              <span>{message}</span>
            </>
          ) : !simulationResult ? (
            <>
              <Terminal className="w-4 h-4 text-[#e5a93c] shrink-0" />
              <span>Linux EDA Bash Environment Ready • Click &quot;Run&quot; to execute</span>
            </>
          ) : passed ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{message}</span>
            </>
          ) : (
            <>
              <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{message}</span>
            </>
          )}
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#191a21] border border-[#2b2d39] text-[#9da3b4]">
            {simulationResult ? `Exit Code: ${passed ? '0 (Success)' : '1 (Failed)'}` : 'Bash 5.2'}
          </span>
        </div>
      </div>

      {/* Terminal Header */}
      <div className="px-4 py-2 bg-[#16171d] border-b border-[#262833] flex items-center justify-between shrink-0 select-none">
        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#e5a93c]" />
          Linux EDA Terminal Console STDOUT
        </span>

        {onDownloadScript && (
          <button
            onClick={onDownloadScript}
            className="px-2.5 py-1 rounded bg-[#191a21] hover:bg-[#20222b] text-[#e5a93c] border border-[#2b2d39] text-[10px] font-semibold flex items-center gap-1 transition-all select-none"
            title="Download Bash Script file"
          >
            <Download className="w-3 h-3 text-[#e5a93c]" />
            Download Script (.sh)
          </button>
        )}
      </div>

      {/* Console Output Window */}
      <div className="flex-1 overflow-auto p-4 bg-[#111215] text-[#f1f3f7] font-mono text-xs space-y-2 select-text">
        <div className="text-[#8c91a0] text-[11px] mb-2 border-b border-[#262833] pb-2 flex items-center justify-between">
          <span>EDA Workstation Linux 6.8.0-x86_64 • GNU Bash v5.2</span>
          <span className="text-slate-600 font-mono">/home/eda/workspace</span>
        </div>

        {isSimulating ? (
          <div className="space-y-2 py-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>[EXEC] Running /home/eda/workspace/{problem?.id || 'script'}.sh...</span>
            </div>
            <div className="text-slate-400 pl-4">Spawning subshell process & evaluating EDA assertions...</div>
          </div>
        ) : !simulationResult ? (
          <div className="space-y-2 py-1">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold select-none">[eda@psnacet ~]$</span>
              <span className="text-slate-300">cat /home/eda/workspace/{problem?.id || 'eda_script'}.sh</span>
            </div>
            <pre className="text-slate-400 pl-4 py-1.5 border-l border-slate-800 text-[11px] whitespace-pre-wrap font-mono">
              {code || '#!/bin/bash\n# Write your shell commands in the editor above, then click Run.'}
            </pre>
            <div className="flex items-center gap-2 text-slate-500 pt-1">
              <span className="text-emerald-500 font-bold select-none">[eda@psnacet ~]$</span>
              <span>Terminal idle. Click <strong className="text-blue-400">&quot;Run&quot;</strong> in the editor toolbar to execute script.</span>
            </div>
          </div>
        ) : (
          logs.map((log, idx) => (
            <div key={idx} className="flex items-start gap-2 leading-relaxed">
              <span className="text-emerald-500 font-bold select-none">[eda@psnacet ~]$</span>
              <span className={log.includes('FAIL') ? 'text-rose-400 font-semibold' : log.includes('PASS') || log.includes('SUCCESS') ? 'text-emerald-400 font-semibold' : 'text-slate-300'}>{log}</span>
            </div>
          ))
        )}

        <div className="text-emerald-400 font-bold pt-2 flex items-center gap-2">
          <span className="text-emerald-500 select-none">[eda@psnacet ~]$</span>
          <span className="animate-pulse font-bold text-slate-100">█</span>
        </div>
      </div>

    </div>
  );
};
