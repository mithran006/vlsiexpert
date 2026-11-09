import React, { useState } from 'react';
import {
  Activity, CheckCircle2, XCircle, Download, Clock,
  Layers, Lock, Unlock, Users, Terminal
} from 'lucide-react';
import { Problem, SimulationResult } from '../../types';

interface RtosTaskConsoleProps {
  problem: Problem;
  simulationResult: SimulationResult | null;
  code?: string;
  onDownloadCode?: () => void;
}

export const RtosTaskConsole: React.FC<RtosTaskConsoleProps> = ({
  problem,
  simulationResult,
  code = '',
  onDownloadCode
}) => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'ipc' | 'logs'>('tasks');

  const passed = simulationResult?.passed ?? false;
  const logs = simulationResult?.logs || [];

  const titleWords = problem.title.replace(/FreeRTOS|RTOS|Zephyr/gi, '').trim().split(/\s+/).filter(Boolean);
  const primaryTaskName = titleWords[0] ? `${titleWords[0]}Task` : 'WorkerTask';
  const secondaryTaskName = titleWords[1] ? `${titleWords[1]}Task` : 'SupervisorTask';
  const helperTaskName = problem.title.toLowerCase().includes('queue') ? 'QueueConsumerTask' :
    problem.title.toLowerCase().includes('semaphore') ? 'SyncNotifyTask' :
    problem.title.toLowerCase().includes('mutex') ? 'CriticalLockTask' : 'TelemetryTask';

  const tasks = [
    {
      name: primaryTaskName,
      priority: 2,
      state: 'Running',
      stateColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      stackFree: '742 / 2048 words',
      cpuPct: '46%'
    },
    {
      name: secondaryTaskName,
      priority: 1,
      state: 'Ready',
      stateColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
      stackFree: '1180 / 2048 words',
      cpuPct: '28%'
    },
    {
      name: helperTaskName,
      priority: 3,
      state: 'Blocked (IPC Wait)',
      stateColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      stackFree: '890 / 2048 words',
      cpuPct: '17%'
    },
    {
      name: 'IDLE Task',
      priority: 0,
      state: 'Ready',
      stateColor: 'text-slate-400 bg-slate-500/10 border-slate-500/30',
      stackFree: '1940 / 2048 words',
      cpuPct: '9%'
    }
  ];

  return (
    <div className="h-full flex flex-col bg-slate-950 border-t border-slate-800 text-slate-100 font-mono text-xs overflow-hidden">
      
      {/* Header Bar */}
      <div className="h-10 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Activity className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-xs">
            FreeRTOS & Zephyr Preemptive Kernel Task Inspector
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
            configTICK_RATE_HZ = 1000 (1ms)
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'tasks' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            TCB Task Table
          </button>
          <button
            onClick={() => setActiveTab('ipc')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'ipc' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            IPC & Mutexes
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === 'logs' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Kernel Event Logs
          </button>

          {onDownloadCode && (
            <button
              onClick={onDownloadCode}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-all ml-1"
              title="Download RTOS Source File"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Tab Views */}
      <div className="flex-1 p-3 overflow-y-auto">
        
        {/* Tab 1: Task Control Block (TCB) Table */}
        {activeTab === 'tasks' && (
          <div className="space-y-3 font-sans">
            
            {/* Scheduler Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 uppercase">Scheduler State</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">PREEMPTIVE</div>
                <div className="text-[9px] text-slate-500">Tick: 1,042,820</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 uppercase">Active Task</div>
                <div className="text-sm font-bold text-white mt-0.5">SensorTask</div>
                <div className="text-[9px] text-slate-500">Priority: 2</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 uppercase">Total Heap Free</div>
                <div className="text-sm font-bold text-sky-400 mt-0.5">18,420 Bytes</div>
                <div className="text-[9px] text-slate-500">heap_4.c Dynamic Pool</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] text-slate-500 uppercase">Context Switches</div>
                <div className="text-sm font-bold text-purple-400 mt-0.5">12,490 switches</div>
                <div className="text-[9px] text-slate-500">Zero Deadlocks</div>
              </div>
            </div>

            {/* Tasks Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="px-3.5 py-2 border-b border-slate-800 text-[11px] font-bold text-slate-300 flex items-center justify-between font-mono">
                <span>Task Control Block (TCB) Registry</span>
                <span className="text-emerald-400 font-normal">Active Threads: 4</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-950 text-slate-500 text-[10px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="px-3.5 py-2">Task Identifier</th>
                      <th className="px-3 py-2">Priority</th>
                      <th className="px-3 py-2">Execution State</th>
                      <th className="px-3 py-2">Stack Free (Watermark)</th>
                      <th className="px-3 py-2">CPU Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {tasks.map((task) => (
                      <tr key={task.name} className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-3.5 py-2 font-bold text-white flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {task.name}
                        </td>
                        <td className="px-3 py-2 text-slate-300">{task.priority}</td>
                        <td className="px-3 py-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${task.stateColor}`}>
                            {task.state}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-slate-400">{task.stackFree}</td>
                        <td className="px-3 py-2 font-bold text-sky-400">{task.cpuPct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: IPC & Mutexes */}
        {activeTab === 'ipc' && (
          <div className="space-y-3 font-sans">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              RTOS Inter-Process Communication (IPC) & Synchronization Objects
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span>MUTEX</span>
                  <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-sm font-bold text-emerald-400 mt-1">xUartMutex</div>
                <div className="text-[10px] text-slate-400 mt-1">Status: Unlocked</div>
                <div className="text-[9px] text-slate-500 mt-0.5">Holding Task: None • Waiters: 0</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span>BINARY SEMAPHORE</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="text-sm font-bold text-sky-400 mt-1">xIsrSemaphore</div>
                <div className="text-[10px] text-slate-400 mt-1">Token: Available (GIVEN)</div>
                <div className="text-[9px] text-slate-500 mt-0.5">Signaled by: EXTI Line 0 ISR</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span>MESSAGE QUEUE</span>
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-sm font-bold text-purple-400 mt-1">xSensorQueue</div>
                <div className="text-[10px] text-slate-400 mt-1">Capacity: 3 / 10 Items</div>
                <div className="text-[9px] text-slate-500 mt-0.5">Item Size: 16 Bytes (SensorMsg_t)</div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Kernel Event Logs */}
        {activeTab === 'logs' && (
          <div className="space-y-2 font-mono">
            <div className="text-[10px] text-slate-500 uppercase pb-1 border-b border-slate-800">
              Preemptive Scheduler Event Log & Trace Assertions
            </div>

            <div className="space-y-1">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`p-1.5 rounded text-xs ${
                    log.includes('FAIL') || log.includes('ERROR')
                      ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                      : log.includes('PASS')
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
