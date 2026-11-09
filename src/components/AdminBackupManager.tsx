import React, { useState, useEffect } from 'react';
import { Database, Download, Upload, ShieldCheck, RefreshCw, Play, FileText, CheckCircle2, AlertCircle, HardDrive, Clock, Server, Layers } from 'lucide-react';
import { storageService } from '../services/storageService';

interface AdminBackupManagerProps {
  adminAuthKey: string;
}

interface BackupItem {
  id: string;
  filename: string;
  createdAt: string;
  tablesCount: number;
  recordsCount: number;
  sizeKb: number;
}

export const AdminBackupManager: React.FC<AdminBackupManagerProps> = ({ adminAuthKey }) => {
  const [backups, setBackups] = useState<BackupItem[]>([]);
  const [dbStats, setDbStats] = useState<{ userCount: number; problemCount: number; backupCount: number; database: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // SQL Query Workbench state
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM users LIMIT 10;');
  const [queryResult, setQueryResult] = useState<{ columns: string[]; rows: any[][]; message: string } | null>(null);
  const [queryLoading, setQueryLoading] = useState(false);

  // Restore file input state
  const [restoreSqlText, setRestoreSqlText] = useState('');

  const fetchStatsAndBackups = async () => {
    setLoading(true);
    try {
      // Fetch DB Stats
      const statsRes = await fetch('/api/db/stats');
      if (statsRes.ok) {
        const data = await statsRes.json();
        setDbStats(data);
      }

      // Fetch Backups List
      const backupsRes = await fetch('/api/admin/backups');
      if (backupsRes.ok) {
        const data = await backupsRes.json();
        setBackups(data.backups || []);
      }
    } catch (e) {
      console.error('Error fetching admin backup data:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatsAndBackups();
    // Also sync current local storage user into SQL database
    try {
      const user = storageService.getUser();
      const progress = storageService.getProgress();
      fetch('/api/db/sync-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, progress })
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleCreateBackup = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch('/api/admin/backups/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminAuthKey })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setMessage({ text: data.message || 'SQL Database Backup created successfully!', type: 'success' });
        await fetchStatsAndBackups();
      } else {
        setMessage({ text: data.error || 'Failed to create database backup.', type: 'error' });
      }
    } catch (e: any) {
      setMessage({ text: e.message || 'Server error creating backup', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleExecuteSqlQuery = async () => {
    if (!sqlQuery.trim()) return;
    setQueryLoading(true);
    setMessage(null);
    try {
      const response = await fetch('/api/db/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sql: sqlQuery, adminAuthKey })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setQueryResult({
          columns: data.columns || [],
          rows: data.rows || [],
          message: data.message || 'Query executed successfully.'
        });
      } else {
        setMessage({ text: data.error || 'SQL Execution error.', type: 'error' });
        setQueryResult(null);
      }
    } catch (e: any) {
      setMessage({ text: e.message || 'Query request failed.', type: 'error' });
    } finally {
      setQueryLoading(false);
    }
  };

  const handleDownloadLocalJsonBackup = () => {
    const jsonStr = storageService.exportDatabaseJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_silicon_arena_local_${new Date().toISOString().replace(/[:.-]/g, '_')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMessage({ text: 'Downloaded client-side JSON backup file.', type: 'success' });
  };

  const handleRestoreFromSqlDump = async () => {
    if (!restoreSqlText.trim()) {
      setMessage({ text: 'Please paste or load a valid .sql script file to restore.', type: 'error' });
      return;
    }

    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch('/api/admin/backups/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sqlDump: restoreSqlText, adminAuthKey })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setMessage({ text: 'Database successfully restored from SQL backup dump!', type: 'success' });
        setRestoreSqlText('');
        await fetchStatsAndBackups();
      } else {
        setMessage({ text: data.error || 'Restore failed.', type: 'error' });
      }
    } catch (e: any) {
      setMessage({ text: e.message || 'Restore server request failed', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (file.name.endsWith('.json')) {
        // Import as JSON local database
        const success = storageService.importDatabaseJSON(content);
        if (success) {
          setMessage({ text: 'Local JSON database imported successfully!', type: 'success' });
        } else {
          setMessage({ text: 'Failed to parse JSON backup file.', type: 'error' });
        }
      } else {
        // Load into SQL text for restoration
        setRestoreSqlText(content);
        setMessage({ text: `Loaded ${file.name} ready for SQL restore.`, type: 'success' });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6 text-xs text-slate-100">
      
      {/* Top Banner & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <span>SQL MVP Database & Admin Backup Vault</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                PROTECTED (ADMIN ONLY)
              </span>
            </h3>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Engine: SQLite (sql.js Server-Side) • Automated Snapshots • Full DDL/DML Backup & Restore
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchStatsAndBackups}
            disabled={loading}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium border border-slate-700 flex items-center gap-1.5 transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh Status
          </button>

          <button
            onClick={handleCreateBackup}
            disabled={loading}
            className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            Create Strong SQL Snapshot
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-medium ${
          message.type === 'success' 
            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' 
            : 'bg-rose-500/15 border-rose-500/30 text-rose-300'
        }`}>
          {message.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> : <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">SQL Registered Users</span>
          <span className="text-xl font-black text-white font-mono">{dbStats?.userCount ?? 1}</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Practice Drills</span>
          <span className="text-xl font-black text-amber-300 font-mono">{dbStats?.problemCount ?? 0}</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">SQL Snapshots</span>
          <span className="text-xl font-black text-indigo-300 font-mono">{dbStats?.backupCount ?? backups.length}</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Database State</span>
          <span className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-1 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE (SQLITE)
          </span>
        </div>
      </div>

      {/* Historical SQL Backups Table */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span>Admin System Backups Registry ({backups.length})</span>
          </h4>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadLocalJsonBackup}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-semibold border border-slate-700 flex items-center gap-1"
            >
              <Download className="w-3 h-3 text-emerald-400" />
              Download JSON Export
            </button>
          </div>
        </div>

        {backups.length === 0 ? (
          <div className="p-4 text-center text-slate-500 font-mono text-[11px] bg-slate-900/50 rounded-lg border border-slate-800/80">
            No SQL backups generated yet. Click "Create Strong SQL Snapshot" above to create your first full database snapshot.
          </div>
        ) : (
          <div className="overflow-x-auto border border-slate-800 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-slate-400 text-[10px] uppercase font-bold border-b border-slate-800">
                  <th className="p-2.5">Backup Filename</th>
                  <th className="p-2.5">Created At</th>
                  <th className="p-2.5">Tables</th>
                  <th className="p-2.5">Records</th>
                  <th className="p-2.5">Size</th>
                  <th className="p-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                {backups.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-2.5 text-amber-300 font-semibold flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{b.filename}</span>
                    </td>
                    <td className="p-2.5 text-slate-400">{new Date(b.createdAt).toLocaleString()}</td>
                    <td className="p-2.5 text-slate-300">{b.tablesCount || 5} Tables</td>
                    <td className="p-2.5 text-slate-300">{b.recordsCount} Rows</td>
                    <td className="p-2.5 text-slate-300">{b.sizeKb} KB</td>
                    <td className="p-2.5 text-right">
                      <a
                        href={`/api/admin/backups/download/${b.id}`}
                        download={b.filename}
                        className="px-2 py-1 rounded bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 text-[10px] font-bold inline-flex items-center gap-1 transition-all"
                      >
                        <Download className="w-3 h-3" />
                        Download SQL
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* SQL Workbench Query Console */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
            <Server className="w-4 h-4 text-amber-400" />
            <span>Admin SQL Query Workbench</span>
          </h4>
          <span className="text-[10px] text-slate-500 font-mono">
            Execute direct SQL queries on SQLite database
          </span>
        </div>

        <div className="space-y-2">
          <textarea
            rows={3}
            value={sqlQuery}
            onChange={(e) => setSqlQuery(e.target.value)}
            placeholder="e.g. SELECT * FROM users;"
            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg font-mono text-xs text-amber-300 focus:outline-none focus:border-amber-500"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSqlQuery('SELECT * FROM users LIMIT 10;')}
                className="px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded text-[10px] border border-slate-800 font-mono"
              >
                users
              </button>
              <button
                type="button"
                onClick={() => setSqlQuery('SELECT id, title, topic, difficulty, total_submissions, total_accepted, acceptance_rate FROM problems LIMIT 10;')}
                className="px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded text-[10px] border border-slate-800 font-mono"
              >
                problems
              </button>
              <button
                type="button"
                onClick={() => setSqlQuery('SELECT id, user_name, problem_id, status, passed_test_cases, execution_time_ms, submitted_at FROM submissions ORDER BY submitted_at DESC LIMIT 10;')}
                className="px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded text-[10px] border border-slate-800 font-mono"
              >
                submissions
              </button>
              <button
                type="button"
                onClick={() => setSqlQuery('SELECT user_id, solved_count, streak_days, total_score, last_active_date FROM progress LIMIT 10;')}
                className="px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded text-[10px] border border-slate-800 font-mono"
              >
                progress
              </button>
              <button
                type="button"
                onClick={() => setSqlQuery('SELECT id, problem_id, user_name, title, upvotes, created_at FROM problem_discussions LIMIT 10;')}
                className="px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded text-[10px] border border-slate-800 font-mono"
              >
                discussions
              </button>
              <button
                type="button"
                onClick={() => setSqlQuery('SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT 10;')}
                className="px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded text-[10px] border border-slate-800 font-mono"
              >
                audit_logs
              </button>
            </div>

            <button
              type="button"
              onClick={handleExecuteSqlQuery}
              disabled={queryLoading}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {queryLoading ? 'Executing SQL...' : 'Run SQL Query'}
            </button>
          </div>
        </div>

        {queryResult && (
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <span className="text-[11px] font-semibold text-emerald-400 block font-mono">
              {queryResult.message}
            </span>

            {queryResult.columns.length > 0 && (
              <div className="overflow-x-auto border border-slate-800 rounded-lg max-h-52 overflow-y-auto">
                <table className="w-full text-left border-collapse text-[10px] font-mono">
                  <thead>
                    <tr className="bg-slate-900 text-amber-300 uppercase font-bold sticky top-0 border-b border-slate-800">
                      {queryResult.columns.map((col, idx) => (
                        <th key={idx} className="p-2 border-r border-slate-800/60 whitespace-nowrap">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {queryResult.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-900/50">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-2 border-r border-slate-800/40 whitespace-nowrap max-w-xs truncate">
                            {cell === null || cell === undefined ? <span className="text-slate-600 italic">NULL</span> : String(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* SQL Restore / Import Panel */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
          <Upload className="w-4 h-4 text-sky-400" />
          <span>Restore SQL Database / Upload Dump</span>
        </h4>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <label className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-medium text-xs cursor-pointer flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5 text-sky-400" />
              Choose .sql or .json File
              <input
                type="file"
                accept=".sql,.json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <span className="text-[11px] text-slate-500">
              Upload backup file to restore SQL tables or import local state
            </span>
          </div>

          <textarea
            rows={3}
            value={restoreSqlText}
            onChange={(e) => setRestoreSqlText(e.target.value)}
            placeholder="Or paste SQL dump DDL/DML script here (INSERT INTO users ...)..."
            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg font-mono text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          />

          {restoreSqlText && (
            <button
              onClick={handleRestoreFromSqlDump}
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              Execute SQL Database Restore
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
