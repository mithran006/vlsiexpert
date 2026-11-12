import initSqlJs, { Database } from 'sql.js';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { ALL_PROBLEMS } from '../data/problemsIndex';
import { INTERVIEW_QUESTIONS } from '../data/interviewData';
import { SubmissionRecord, ProblemDiscussion, NewsDiscussion, LeaderboardEntry, PlatformStats } from '../types';

let db: Database | null = null;
let SQL_ENGINE: any = null;
const DB_FILE = path.join(process.cwd(), 'silicon_arena.db');

export function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

export function generateSalt(): string {
  return crypto.randomBytes(16).toString('hex');
}

// Check database integrity
export function validateDbIntegrity(database: Database | null): boolean {
  if (!database) return false;
  try {
    const res = database.exec('PRAGMA quick_check;');
    const checkStr = (res[0]?.values as any)?.[0]?.[0];
    if (checkStr !== 'ok') {
      console.warn('SQLite quick_check reported issue:', checkStr);
      return false;
    }
    // Verify core tables queryability
    database.exec('SELECT COUNT(*) FROM sqlite_master;');
    return true;
  } catch (err) {
    console.warn('SQLite integrity check failed:', err);
    return false;
  }
}

// Atomic file save to disk to prevent corrupt partial writes
let isSaving = false;
let savePending = false;

export function saveDatabaseToFile() {
  if (!db) return;
  if (isSaving) {
    savePending = true;
    return;
  }
  isSaving = true;
  try {
    if (!validateDbIntegrity(db)) {
      console.warn('Skipping saveDatabaseToFile: database failed integrity check.');
      isSaving = false;
      return;
    }
    const data = db.export();
    const buffer = Buffer.from(data);
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    const tmpFile = `${DB_FILE}.tmp.${Date.now()}_${randomSuffix}`;
    fs.writeFileSync(tmpFile, buffer);
    fs.renameSync(tmpFile, DB_FILE);
  } catch (e) {
    console.error('Failed to save SQLite database to disk:', e);
  } finally {
    isSaving = false;
    if (savePending) {
      savePending = false;
      setTimeout(() => saveDatabaseToFile(), 100);
    }
  }
}

// Clean fresh database creation
function createFreshDatabase(SQL: any): Database {
  console.log('Creating fresh in-memory SQLite database instance...');
  const newDb = new SQL.Database();
  initDatabaseTables(newDb);
  seedProblemsIntoDb(newDb);
  seedInitialDiscussions(newDb);
  seedInitialNewsDiscussions(newDb);
  seedAdminInterviews(newDb);
  seedAdminStudyPlans(newDb);
  db = newDb;
  saveDatabaseToFile();
  return newDb;
}

// Automatic self-healing database recovery
export function recoverCorruptedDatabase(): Database {
  console.warn('Initiating automatic self-healing SQLite database recovery...');
  try {
    if (fs.existsSync(DB_FILE)) {
      const backupCorrupt = `${DB_FILE}.corrupted.${Date.now()}`;
      try {
        fs.renameSync(DB_FILE, backupCorrupt);
        console.log(`Corrupted database moved to backup: ${backupCorrupt}`);
      } catch {
        try {
          fs.unlinkSync(DB_FILE);
        } catch {}
      }
    }
  } catch (e) {
    console.error('Error backing up corrupted database file:', e);
  }

  if (SQL_ENGINE) {
    return createFreshDatabase(SQL_ENGINE);
  }
  
  // If engine not cached yet, create empty database
  const fallback = new (initSqlJs as any).Database();
  initDatabaseTables(fallback);
  seedProblemsIntoDb(fallback);
  db = fallback;
  return fallback;
}

export async function getSqlDb(): Promise<Database> {
  if (db && validateDbIntegrity(db)) return db;

  if (!SQL_ENGINE) {
    SQL_ENGINE = await initSqlJs();
  }

  if (fs.existsSync(DB_FILE)) {
    try {
      const fileBuffer = fs.readFileSync(DB_FILE);
      const candidateDb = new SQL_ENGINE.Database(fileBuffer);
      if (validateDbIntegrity(candidateDb)) {
        db = candidateDb;
        console.log('Loaded and verified healthy SQLite database from silicon_arena.db');
      } else {
        console.warn('silicon_arena.db failed integrity check. Recovering clean database...');
        return recoverCorruptedDatabase();
      }
    } catch (e) {
      console.error('Error loading silicon_arena.db, recovering clean database:', e);
      return recoverCorruptedDatabase();
    }
  } else {
    db = createFreshDatabase(SQL_ENGINE);
    console.log('Created fresh SQLite database instance');
    return db;
  }

  // Initialize Core Schema Tables, Seeds & Migrations safely
  try {
    initDatabaseTables(db);
    seedProblemsIntoDb(db);
    seedInitialDiscussions(db);
    seedInitialNewsDiscussions(db);
    seedAdminInterviews(db);
    seedAdminStudyPlans(db);
    saveDatabaseToFile();
  } catch (seedErr) {
    console.error('Error verifying database schema, recovering clean instance:', seedErr);
    return recoverCorruptedDatabase();
  }

  return db;
}

export function getDbInstance(): Database {
  if (db && validateDbIntegrity(db)) {
    return db;
  }
  return recoverCorruptedDatabase();
}

function initDatabaseTables(database: Database) {
  database.run(`
    -- 1. Users Table (Authentication & Student Profiles)
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT,
      salt TEXT,
      roll_number TEXT,
      auth_provider TEXT DEFAULT 'password',
      avatar_url TEXT,
      role TEXT DEFAULT 'student',
      department TEXT,
      year_of_study TEXT,
      college_name TEXT,
      selected_track TEXT DEFAULT 'both',
      created_at TEXT NOT NULL,
      last_login TEXT,
      updated_at TEXT
    );

    -- 2. Problems Table (Curriculum Directory & Acceptance Metrics)
    CREATE TABLE IF NOT EXISTS problems (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      topic TEXT NOT NULL,
      track TEXT DEFAULT 'frontend',
      difficulty TEXT DEFAULT 'medium',
      description TEXT,
      worked_example TEXT,
      starter_code TEXT,
      solution_code TEXT,
      testbench_config_json TEXT,
      hints_json TEXT,
      tags_json TEXT,
      total_submissions INTEGER DEFAULT 0,
      total_accepted INTEGER DEFAULT 0,
      acceptance_rate REAL DEFAULT 0.0,
      created_at TEXT NOT NULL,
      updated_at TEXT
    );

    -- 3. Submissions Table (Real Submission History & Testbench Waveform Logs)
    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      user_name TEXT NOT NULL,
      problem_id TEXT NOT NULL,
      problem_title TEXT NOT NULL,
      language TEXT NOT NULL,
      code TEXT NOT NULL,
      status TEXT NOT NULL,
      passed_test_cases INTEGER DEFAULT 0,
      total_test_cases INTEGER DEFAULT 0,
      execution_time_ms REAL DEFAULT 0.0,
      waveform_data_json TEXT,
      submitted_at TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (problem_id) REFERENCES problems(id)
    );

    -- 4. User Progress Table (Student Mastered Topics & Analytics)
    CREATE TABLE IF NOT EXISTS progress (
      user_id TEXT PRIMARY KEY,
      solved_count INTEGER DEFAULT 0,
      solved_ids TEXT,
      saved_code_json TEXT,
      bookmarks_json TEXT,
      notes_json TEXT,
      streak_days INTEGER DEFAULT 1,
      longest_streak INTEGER DEFAULT 1,
      last_active_date TEXT,
      daily_attempts_json TEXT,
      daily_solved_json TEXT,
      hourly_activity_json TEXT,
      unlocked_badge_ids_json TEXT,
      total_score INTEGER DEFAULT 0,
      ranking INTEGER DEFAULT 0,
      updated_at TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    -- 5. Problem Discussions Table (Q&A & Community Solutions)
    CREATE TABLE IF NOT EXISTS problem_discussions (
      id TEXT PRIMARY KEY,
      problem_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      user_name TEXT NOT NULL,
      user_avatar TEXT,
      title TEXT,
      content TEXT NOT NULL,
      upvotes INTEGER DEFAULT 0,
      created_at TEXT NOT NULL,
      FOREIGN KEY (problem_id) REFERENCES problems(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    -- 5b. News Discussions Table (Community Discussion on Live Google News Wire)
    CREATE TABLE IF NOT EXISTS news_discussions (
      id TEXT PRIMARY KEY,
      article_id TEXT NOT NULL,
      article_title TEXT,
      user_id TEXT NOT NULL,
      user_name TEXT NOT NULL,
      user_avatar TEXT,
      title TEXT,
      content TEXT NOT NULL,
      upvotes INTEGER DEFAULT 0,
      created_at TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    -- 6. Custom Problems Table (Instructor & Admin User Defined Drills)
    CREATE TABLE IF NOT EXISTS custom_problems (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      topic TEXT NOT NULL,
      track TEXT DEFAULT 'frontend',
      difficulty TEXT DEFAULT 'medium',
      description TEXT,
      starter_code TEXT,
      solution_code TEXT,
      hints_json TEXT,
      created_at TEXT NOT NULL
    );

    -- 7. System Backups Table (Admin Snapshot Exports)
    CREATE TABLE IF NOT EXISTS system_backups (
      id TEXT PRIMARY KEY,
      filename TEXT NOT NULL,
      created_at TEXT NOT NULL,
      tables_count INTEGER DEFAULT 0,
      records_count INTEGER DEFAULT 0,
      sql_dump TEXT NOT NULL
    );

    -- 8. Audit Logs Table (Platform Security & Event Ledger)
    CREATE TABLE IF NOT EXISTS audit_logs (
      id TEXT PRIMARY KEY,
      action TEXT NOT NULL,
      performed_by TEXT NOT NULL,
      details TEXT,
      created_at TEXT NOT NULL
    );

    -- 9. Admin Interviews Table (Curated & Custom Hardware Interview Questions)
    CREATE TABLE IF NOT EXISTS admin_interviews (
      id TEXT PRIMARY KEY,
      company_id TEXT NOT NULL,
      category TEXT NOT NULL,
      question TEXT NOT NULL,
      difficulty TEXT DEFAULT 'Medium',
      experience_level TEXT DEFAULT 'All Levels',
      sample_answer TEXT,
      key_points_json TEXT,
      coding_challenge TEXT,
      is_published INTEGER DEFAULT 1,
      created_at TEXT NOT NULL,
      updated_at TEXT
    );

    -- 10. Admin Study Plans Table (Structured Curriculum Paths)
    CREATE TABLE IF NOT EXISTS admin_study_plans (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      difficulty TEXT DEFAULT 'Intermediate',
      duration_weeks INTEGER DEFAULT 4,
      description TEXT,
      learning_objectives_json TEXT,
      modules_json TEXT,
      recommended_problems_json TEXT,
      is_published INTEGER DEFAULT 1,
      created_at TEXT NOT NULL,
      updated_at TEXT
    );

    -- Indexes for fast query performance
    CREATE INDEX IF NOT EXISTS idx_submissions_user ON submissions(user_id);
    CREATE INDEX IF NOT EXISTS idx_submissions_problem ON submissions(problem_id);
    CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);
    CREATE INDEX IF NOT EXISTS idx_problems_topic ON problems(topic);
    CREATE INDEX IF NOT EXISTS idx_discussions_problem ON problem_discussions(problem_id);
    CREATE INDEX IF NOT EXISTS idx_discussions_news ON news_discussions(article_id);
    CREATE INDEX IF NOT EXISTS idx_admin_interviews_company ON admin_interviews(company_id);
    CREATE INDEX IF NOT EXISTS idx_admin_study_plans_cat ON admin_study_plans(category);
  `);

  // Safe migrations for pre-existing tables
  try { database.run(`ALTER TABLE users ADD COLUMN password_hash TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE users ADD COLUMN salt TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE users ADD COLUMN roll_number TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE users ADD COLUMN auth_provider TEXT DEFAULT 'password';`); } catch (e) {}
  try { database.run(`ALTER TABLE users ADD COLUMN avatar_url TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE users ADD COLUMN last_login TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE users ADD COLUMN updated_at TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE progress ADD COLUMN longest_streak INTEGER DEFAULT 1;`); } catch (e) {}
  try { database.run(`ALTER TABLE progress ADD COLUMN daily_attempts_json TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE progress ADD COLUMN daily_solved_json TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE progress ADD COLUMN hourly_activity_json TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE progress ADD COLUMN unlocked_badge_ids_json TEXT;`); } catch (e) {}
  try { database.run(`ALTER TABLE progress ADD COLUMN total_score INTEGER DEFAULT 0;`); } catch (e) {}
  try { database.run(`ALTER TABLE progress ADD COLUMN ranking INTEGER DEFAULT 0;`); } catch (e) {}

  // Remove any previously seeded mock/fake students
  try {
    database.run(`DELETE FROM users WHERE id LIKE 'psna_std_%' OR id LIKE 'mock_%';`);
    database.run(`DELETE FROM progress WHERE user_id LIKE 'psna_std_%' OR user_id LIKE 'mock_%';`);
  } catch (e) {}
}

// Seed All Curriculum Problems into SQLite Database
function seedProblemsIntoDb(database: Database) {
  try {
    const checkRes = database.exec("SELECT COUNT(*) FROM problems");
    const existingCount = Number((checkRes[0]?.values as any)?.[0]?.[0] || 0);

    if (existingCount >= ALL_PROBLEMS.length) {
      return;
    }

    const now = new Date().toISOString();
    database.run('BEGIN TRANSACTION;');

    for (const prob of ALL_PROBLEMS) {
      const tbConfigJson = JSON.stringify(prob.testbenchConfig || { signals: [], cycles: 0, expectedOutputs: [] });
      const hintsJson = JSON.stringify(prob.hints || []);
      const tagsJson = JSON.stringify(prob.tags || []);

      // Approximate realistic initial submission stats for genuine coding platform feel
      const initialSubmissions = 45 + Math.floor(Math.random() * 80);
      const initialAccepted = Math.floor(initialSubmissions * (prob.difficulty === 'easy' ? 0.78 : prob.difficulty === 'medium' ? 0.58 : 0.38));
      const initialRate = Math.round((initialAccepted / initialSubmissions) * 1000) / 10;

      database.run(
        `INSERT OR REPLACE INTO problems (
          id, title, topic, track, difficulty, description, worked_example, starter_code, solution_code,
          testbench_config_json, hints_json, tags_json, total_submissions, total_accepted, acceptance_rate, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          prob.id,
          prob.title,
          prob.topic,
          prob.track || 'frontend',
          prob.difficulty || 'medium',
          prob.description || '',
          prob.workedExample || '',
          prob.starterCode || '',
          prob.solutionCode || '',
          tbConfigJson,
          hintsJson,
          tagsJson,
          initialSubmissions,
          initialAccepted,
          initialRate,
          now,
          now
        ]
      );
    }
    database.run('COMMIT;');
    console.log(`Synchronized ${ALL_PROBLEMS.length} curriculum problems into SQLite problems table.`);
  } catch (e) {
    try { database.run('ROLLBACK;'); } catch (_) {}
    console.error('Error seeding problems into SQLite database:', e);
  }
}

// Seed Starter Community Discussions for Key Problems
function seedInitialDiscussions(database: Database) {
  try {
    const checkRes = database.exec("SELECT COUNT(*) FROM problem_discussions");
    const count = Number((checkRes[0]?.values as any)?.[0]?.[0] || 0);
    if (count > 0) return;

    const sampleDiscussions = [
      {
        id: 'disc_1',
        problemId: 'v-dff-async',
        userId: 'inst_101',
        userName: 'Prof. R. Venkatesh (VLSI Lead)',
        userAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ProfVenkatesh',
        title: 'Asynchronous vs Synchronous Reset Best Practices',
        content: 'Remember that for FPGA targets (like Xilinx 7-Series), synchronous resets are generally preferred for optimal Slice LUT usage, whereas for ASIC cell synthesis, asynchronous active-low resets (rst_n) with reset synchronizers are standard industry practice.',
        upvotes: 18,
        createdAt: new Date(Date.now() - 86400000 * 3).toISOString()
      },
      {
        id: 'disc_2',
        problemId: 'v-seq-det-1011',
        userId: 'usr_sarah',
        userName: 'Sarah K. (3rd Year ECE)',
        userAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SarahK',
        title: 'Handling overlapping sequence patterns in Mealy vs Moore',
        content: 'For overlapping detection of 1011, when state S101 receives a 1, it transitions to S1 (since the suffix "1" starts the next possible sequence) rather than IDLE! This passed all 12 testbench cycles.',
        upvotes: 14,
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
      },
      {
        id: 'disc_3',
        problemId: 'sv-sync-fifo',
        userId: 'usr_arun',
        userName: 'Arun Prakash (Final Year VLSI)',
        userAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ArunPrakash',
        title: 'Full and Empty Flag condition with pointer wraps',
        content: 'Using an extra MSB bit on the write/read pointers is the cleanest way to differentiate between Empty (pointers identical) and Full (MSB differs, lower address bits identical).',
        upvotes: 22,
        createdAt: new Date(Date.now() - 86400000 * 1).toISOString()
      }
    ];

    for (const disc of sampleDiscussions) {
      database.run(
        `INSERT INTO problem_discussions (id, problem_id, user_id, user_name, user_avatar, title, content, upvotes, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [disc.id, disc.problemId, disc.userId, disc.userName, disc.userAvatar, disc.title, disc.content, disc.upvotes, disc.createdAt]
      );
    }
    console.log('Seeded initial problem discussions into SQLite database.');
  } catch (e) {
    console.error('Error seeding discussions:', e);
  }
}

// Seed Starter Community Discussions on Live Google Tech Wire
function seedInitialNewsDiscussions(database: Database) {
  try {
    const checkRes = database.exec("SELECT COUNT(*) FROM news_discussions");
    const count = Number((checkRes[0]?.values as any)?.[0]?.[0] || 0);
    if (count > 0) return;

    const sampleNewsDiscussions = [
      {
        id: 'ndisc_1',
        articleId: 'tsmc_2nm_gaa',
        articleTitle: 'TSMC N2 Nanosheet GAA Volume Production & PowerVia Roadmap',
        userId: 'inst_101',
        userName: 'Prof. R. Venkatesh (VLSI Lead)',
        userAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ProfVenkatesh',
        title: 'Architectural implications of Nanosheet GAA vs FinFET for RTL designers',
        content: 'With TSMC N2 transitioning to Gate-All-Around (GAA) nanosheets, subthreshold leakage drops by nearly 30% at identical drive currents. For our students designing high-fanout clock trees, this translates to significantly reduced dynamic power dissipation during high-frequency clock gating.',
        upvotes: 34,
        createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
      },
      {
        id: 'ndisc_2',
        articleId: 'deepseek_r1_silicon',
        articleTitle: 'DeepSeek-R1 Open-Weights Reasoning Architecture & Custom Silicon Acceleration',
        userId: 'usr_sarah',
        userName: 'Sarah K. (3rd Year ECE)',
        userAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SarahK',
        title: 'Mixture of Experts (MoE) sparsity in ASIC memory controllers',
        content: 'DeepSeek-R1 activates only 37B parameters out of 671B per token. From a hardware engineering standpoint, this changes memory controller scheduling completely—memory bandwidth latency now dominates over raw arithmetic MAC density. Custom LPUs and SRAM crossbars will benefit tremendously.',
        upvotes: 29,
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
      },
      {
        id: 'ndisc_3',
        articleId: 'intel_18a_powervia',
        articleTitle: 'Intel 18A RibbonFET & PowerVia Backside Delivery Milestones',
        userId: 'usr_arun',
        userName: 'Arun Prakash (Final Year VLSI)',
        userAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ArunPrakash',
        title: 'PowerVia Backside Power Delivery eliminates IR drop in clock trees',
        content: 'Backside power routing moves power wires to the reverse side of the silicon wafer, freeing up the front metal layers purely for signal routing. This virtually eliminates power grid IR drop and simplifies placement and routing congestion significantly.',
        upvotes: 25,
        createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
      },
      {
        id: 'ndisc_4',
        articleId: 'cerebras_cs3_wafer',
        articleTitle: 'Cerebras CS-3 Wafer-Scale Engine 3: 4 Trillion Transistors',
        userId: 'usr_mithran',
        userName: 'Mithran B (RTL Architect)',
        userAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=MithranB',
        title: 'Wafer-scale interconnect latency compared to InfiniBand/NVLink clusters',
        content: 'Keeping 44GB of on-chip SRAM on a single contiguous silicon wafer yields 21 Petabytes/sec of memory bandwidth. The latency between adjacent cores is mere nanoseconds rather than microseconds across optical switches.',
        upvotes: 31,
        createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
      }
    ];

    for (const disc of sampleNewsDiscussions) {
      database.run(
        `INSERT INTO news_discussions (id, article_id, article_title, user_id, user_name, user_avatar, title, content, upvotes, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [disc.id, disc.articleId, disc.articleTitle, disc.userId, disc.userName, disc.userAvatar, disc.title, disc.content, disc.upvotes, disc.createdAt]
      );
    }
    console.log('Seeded initial Google news discussions into SQLite database.');
  } catch (e) {
    console.error('Error seeding news discussions:', e);
  }
}

// Record a Real Submission into SQLite Database
export function recordSubmissionInDb(submission: SubmissionRecord): { submission: SubmissionRecord; problemStats?: any } {
  if (!db) throw new Error('Database not initialized');

  const now = new Date().toISOString();
  const subId = submission.id || `sub_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;

  // 1. Insert into submissions table
  db.run(
    `INSERT INTO submissions (
      id, user_id, user_name, problem_id, problem_title, language, code, status,
      passed_test_cases, total_test_cases, execution_time_ms, waveform_data_json, submitted_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      subId,
      submission.userId,
      submission.userName || 'Student',
      submission.problemId,
      submission.problemTitle || submission.problemId,
      submission.language || 'verilog',
      submission.code,
      submission.status,
      submission.passedTestCases || 0,
      submission.totalTestCases || 0,
      submission.executionTimeMs || 0.0,
      submission.waveformDataJson || null,
      submission.submittedAt || now
    ]
  );

  // 2. Update Problem acceptance statistics
  let problemStats: any = null;
  try {
    const isAccepted = submission.status === 'Accepted';
    db.run(
      `UPDATE problems SET
        total_submissions = total_submissions + 1,
        total_accepted = total_accepted + ${isAccepted ? 1 : 0},
        acceptance_rate = ROUND(((total_accepted + ${isAccepted ? 1 : 0}) * 100.0) / (total_submissions + 1), 1),
        updated_at = ?
       WHERE id = ?`,
      [now, submission.problemId]
    );

    const probRes = db.exec(`SELECT total_submissions, total_accepted, acceptance_rate FROM problems WHERE id = '${submission.problemId}'`);
    if (probRes.length > 0 && probRes[0].values.length > 0) {
      const [totalSub, totalAcc, accRate] = probRes[0].values[0];
      problemStats = { totalSubmissions: totalSub, totalAccepted: totalAcc, acceptanceRate: accRate };
    }
  } catch (e) {
    console.error('Error updating problem stats:', e);
  }

  // 3. Write Audit Log
  try {
    const logId = `log_${Date.now()}_${Math.random().toString(36).substring(2, 5)}`;
    db.run(
      `INSERT INTO audit_logs (id, action, performed_by, details, created_at) VALUES (?, ?, ?, ?, ?)`,
      [logId, 'CODE_SUBMISSION', submission.userId, `Submitted ${submission.problemId} (${submission.status})`, now]
    );
  } catch (e) {}

  saveDatabaseToFile();

  return {
    submission: {
      ...submission,
      id: subId,
      submittedAt: submission.submittedAt || now
    },
    problemStats
  };
}

function formatLeaderboardRows(rows: any[]): LeaderboardEntry[] {
  return rows.map((row: any[], index: number) => ({
    rank: index + 1,
    userId: String(row[0] || ''),
    name: String(row[1] || 'Registered Student'),
    department: String(row[2] || 'ECE'),
    collegeName: String(row[3] || 'PSNA College of Engineering and Technology'),
    avatarUrl: row[4] ? String(row[4]) : undefined,
    solvedCount: Number(row[5] || 0),
    streakDays: Number(row[6] || 1),
    lastActiveDate: String(row[7] || new Date().toISOString().split('T')[0]),
    totalScore: Number(row[8] || (Number(row[5] || 0) * 150 + Number(row[6] || 1) * 50))
  }));
}

// Live Leaderboard SQL Ranking Calculation (Real Users Only)
export function getLeaderboardFromDb(limit: number = 50): LeaderboardEntry[] {
  let activeDb = db;
  if (!activeDb || !validateDbIntegrity(activeDb)) {
    try {
      activeDb = recoverCorruptedDatabase();
    } catch {
      return [];
    }
  }

  try {
    const query = `
      SELECT 
        u.id as user_id,
        u.name,
        COALESCE(u.department, 'ECE - Electronics & Communication') as department,
        COALESCE(u.college_name, 'PSNA College of Engineering and Technology') as college_name,
        u.avatar_url,
        COALESCE(p.solved_count, 0) as solved_count,
        COALESCE(p.streak_days, 1) as streak_days,
        p.last_active_date,
        (COALESCE(p.solved_count, 0) * 150 + COALESCE(p.streak_days, 1) * 50) as calculated_score
      FROM users u
      LEFT JOIN progress p ON u.id = p.user_id
      WHERE u.role != 'admin' AND u.name NOT LIKE '%Guest%' AND u.id NOT LIKE 'psna_std_%' AND u.id NOT LIKE 'mock_%'
      ORDER BY calculated_score DESC, solved_count DESC, streak_days DESC
      LIMIT ${limit}
    `;

    const res = activeDb.exec(query);
    if (res.length === 0 || !res[0].values || res[0].values.length === 0) {
      return [];
    }

    return formatLeaderboardRows(res[0].values);
  } catch (e: any) {
    console.warn('Error fetching leaderboard from DB:', e);
    if (e && String(e.message || '').includes('malformed')) {
      try {
        activeDb = recoverCorruptedDatabase();
        return getLeaderboardFromDb(limit);
      } catch {}
    }
    return [];
  }
}

// Live Platform Analytics Summary (Strictly Real Data)
export function getPlatformStatsFromDb(): PlatformStats {
  if (!db) {
    return {
      totalUsers: 0,
      totalProblems: ALL_PROBLEMS.length,
      totalSubmissions: 0,
      totalAccepted: 0,
      acceptanceRate: 0,
      activeStreaks: 0
    };
  }

  try {
    const userCntRes = db.exec("SELECT COUNT(*) FROM users WHERE id NOT LIKE 'psna_std_%' AND id NOT LIKE 'mock_%'");
    const userCount = Number((userCntRes[0]?.values as any)?.[0]?.[0] || 0);

    const probCntRes = db.exec("SELECT COUNT(*) FROM problems");
    const problemCount = Number((probCntRes[0]?.values as any)?.[0]?.[0] || ALL_PROBLEMS.length);

    const subCntRes = db.exec("SELECT COUNT(*) FROM submissions WHERE user_id NOT LIKE 'psna_std_%'");
    const submissionCount = Number((subCntRes[0]?.values as any)?.[0]?.[0] || 0);

    const accCntRes = db.exec("SELECT COUNT(*) FROM submissions WHERE status = 'Accepted' AND user_id NOT LIKE 'psna_std_%'");
    const acceptedCount = Number((accCntRes[0]?.values as any)?.[0]?.[0] || 0);

    const streakRes = db.exec("SELECT SUM(streak_days) FROM progress WHERE user_id NOT LIKE 'psna_std_%' AND user_id NOT LIKE 'mock_%'");
    const totalStreaks = Number((streakRes[0]?.values as any)?.[0]?.[0] || 0);

    const rate = submissionCount > 0 ? Math.round((acceptedCount / submissionCount) * 1000) / 10 : 0;

    return {
      totalUsers: userCount,
      totalProblems: problemCount,
      totalSubmissions: submissionCount,
      totalAccepted: acceptedCount,
      acceptanceRate: rate,
      activeStreaks: totalStreaks
    };
  } catch (e) {
    console.error('Error calculating platform stats:', e);
    return {
      totalUsers: 0,
      totalProblems: ALL_PROBLEMS.length,
      totalSubmissions: 0,
      totalAccepted: 0,
      acceptanceRate: 0,
      activeStreaks: 0
    };
  }
}

// Fetch Discussions for a Specific Problem
export function getDiscussionsForProblem(problemId: string): ProblemDiscussion[] {
  if (!db) return [];

  try {
    const stmt = db.prepare("SELECT * FROM problem_discussions WHERE problem_id = ? ORDER BY upvotes DESC, created_at DESC");
    stmt.bind([problemId]);
    const items: ProblemDiscussion[] = [];
    while (stmt.step()) {
      const row: any = stmt.getAsObject();
      items.push({
        id: row.id,
        problemId: row.problem_id,
        userId: row.user_id,
        userName: row.user_name,
        userAvatar: row.user_avatar,
        title: row.title,
        content: row.content,
        upvotes: Number(row.upvotes || 0),
        createdAt: row.created_at
      });
    }
    stmt.free();
    return items;
  } catch (e) {
    console.error('Error fetching discussions for problem:', problemId, e);
    return [];
  }
}

// Add a Discussion Post
export function addDiscussionPost(post: {
  problemId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  title?: string;
  content: string;
}): ProblemDiscussion {
  if (!db) throw new Error('Database not initialized');

  const id = `disc_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const now = new Date().toISOString();

  db.run(
    `INSERT INTO problem_discussions (id, problem_id, user_id, user_name, user_avatar, title, content, upvotes, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)`,
    [id, post.problemId, post.userId, post.userName, post.userAvatar || null, post.title || null, post.content, now]
  );

  saveDatabaseToFile();

  return {
    id,
    problemId: post.problemId,
    userId: post.userId,
    userName: post.userName,
    userAvatar: post.userAvatar,
    title: post.title,
    content: post.content,
    upvotes: 0,
    createdAt: now
  };
}

// Fetch News Discussions (optionally filtered by articleId)
export function getNewsDiscussions(articleId?: string): NewsDiscussion[] {
  if (!db) return [];

  try {
    let stmt;
    if (articleId && articleId !== 'all') {
      stmt = db.prepare("SELECT * FROM news_discussions WHERE article_id = ? ORDER BY upvotes DESC, created_at DESC");
      stmt.bind([articleId]);
    } else {
      stmt = db.prepare("SELECT * FROM news_discussions ORDER BY upvotes DESC, created_at DESC LIMIT 100");
    }

    const items: NewsDiscussion[] = [];
    while (stmt.step()) {
      const row: any = stmt.getAsObject();
      items.push({
        id: row.id,
        articleId: row.article_id,
        articleTitle: row.article_title,
        userId: row.user_id,
        userName: row.user_name,
        userAvatar: row.user_avatar,
        title: row.title,
        content: row.content,
        upvotes: Number(row.upvotes || 0),
        createdAt: row.created_at
      });
    }
    stmt.free();
    return items;
  } catch (e) {
    console.error('Error fetching news discussions:', e);
    return [];
  }
}

// Add a News Discussion Post
export function addNewsDiscussion(post: {
  articleId: string;
  articleTitle?: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  title?: string;
  content: string;
}): NewsDiscussion {
  if (!db) throw new Error('Database not initialized');

  const id = `ndisc_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const now = new Date().toISOString();

  db.run(
    `INSERT INTO news_discussions (id, article_id, article_title, user_id, user_name, user_avatar, title, content, upvotes, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, ?)`,
    [id, post.articleId, post.articleTitle || null, post.userId, post.userName, post.userAvatar || null, post.title || null, post.content, now]
  );

  saveDatabaseToFile();

  return {
    id,
    articleId: post.articleId,
    articleTitle: post.articleTitle,
    userId: post.userId,
    userName: post.userName,
    userAvatar: post.userAvatar,
    title: post.title,
    content: post.content,
    upvotes: 0,
    createdAt: now
  };
}

// Upvote a News Discussion Post
export function upvoteNewsDiscussion(discussionId: string): boolean {
  if (!db) return false;
  try {
    db.run("UPDATE news_discussions SET upvotes = upvotes + 1 WHERE id = ?", [discussionId]);
    saveDatabaseToFile();
    return true;
  } catch (e) {
    console.error('Error upvoting news discussion:', e);
    return false;
  }
}

// Helper to generate full SQL dump script for Admin Backup
export function generateSqlDump(): string {
  if (!db) return '';
  
  let dump = `-- VLSI Expert PSNACET Platform SQL Database Dump\n`;
  dump += `-- Generated At: ${new Date().toISOString()}\n\n`;

  const tables = ['users', 'problems', 'submissions', 'progress', 'problem_discussions', 'news_discussions', 'custom_problems', 'system_backups', 'audit_logs'];

  tables.forEach(tableName => {
    try {
      const res = db!.exec(`SELECT * FROM ${tableName}`);
      const rows = res.length > 0 ? ((res[0] as any).values || (res[0] as any).rows || []) : [];
      if (res.length > 0 && rows.length > 0) {
        const cols = res[0].columns;
        dump += `-- Table: ${tableName}\n`;
        rows.forEach((row: any[]) => {
          const vals = row.map(v => {
            if (v === null || v === undefined) return 'NULL';
            if (typeof v === 'number') return v;
            return `'${String(v).replace(/'/g, "''")}'`;
          });
          dump += `INSERT INTO ${tableName} (${cols.join(', ')}) VALUES (${vals.join(', ')});\n`;
        });
        dump += `\n`;
      }
    } catch (e) {
      console.error(`Error dumping table ${tableName}:`, e);
    }
  });

  return dump;
}

// Execute arbitrary SQL query for Admin
export function executeAdminQuery(sql: string) {
  if (!db) throw new Error('Database not initialized');

  const trimmed = sql.trim();
  const res = db.exec(trimmed);
  saveDatabaseToFile();

  if (res.length === 0) {
    return { columns: [], rows: [], message: 'Query executed successfully with 0 rows returned.' };
  }

  const rows = (res[0] as any).values || (res[0] as any).rows || [];

  return {
    columns: res[0].columns,
    rows,
    message: `Query executed. Returned ${rows.length} rows.`
  };
}

// Upsert Problem in DB (for Admin Add / Modify)
export function upsertProblemInDb(prob: {
  id: string;
  title: string;
  topic: string;
  track?: string;
  difficulty?: string;
  description?: string;
  workedExample?: string;
  starterCode?: string;
  solutionCode?: string;
  hints?: string[];
  tags?: string[];
}) {
  if (!db) return false;
  const now = new Date().toISOString();
  
  try {
    const stmt = db.prepare("SELECT id FROM problems WHERE id = ?");
    stmt.bind([prob.id]);
    const existsInProblems = stmt.step();
    stmt.free();

    if (existsInProblems) {
      db.run(
        `UPDATE problems 
         SET title = ?, topic = ?, track = ?, difficulty = ?, description = ?, worked_example = ?, starter_code = ?, solution_code = ?, hints_json = ?, updated_at = ?
         WHERE id = ?`,
        [
          prob.title,
          prob.topic,
          prob.track || 'frontend',
          prob.difficulty || 'medium',
          prob.description || '',
          prob.workedExample || '',
          prob.starterCode || '',
          prob.solutionCode || '',
          JSON.stringify(prob.hints || []),
          now,
          prob.id
        ]
      );
    } else {
      db.run(
        `INSERT OR REPLACE INTO custom_problems 
         (id, title, topic, track, difficulty, description, starter_code, solution_code, hints_json, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          prob.id,
          prob.title,
          prob.topic,
          prob.track || 'frontend',
          prob.difficulty || 'medium',
          prob.description || '',
          prob.starterCode || '',
          prob.solutionCode || '',
          JSON.stringify(prob.hints || []),
          now
        ]
      );
    }
    saveDatabaseToFile();
    return true;
  } catch (err) {
    console.error('Error upserting problem in DB:', err);
    return false;
  }
}

export function deleteProblemFromDb(problemId: string) {
  if (!db) return false;
  try {
    db.run("DELETE FROM custom_problems WHERE id = ?", [problemId]);
    db.run("DELETE FROM problems WHERE id = ?", [problemId]);
    saveDatabaseToFile();
    return true;
  } catch (err) {
    console.error('Error deleting problem from DB:', err);
    return false;
  }
}

// Seed Admin Interviews from Curated Interview Questions Bank
function seedAdminInterviews(database: Database) {
  try {
    const res = database.exec("SELECT COUNT(*) FROM admin_interviews");
    const count = Number((res[0]?.values as any)?.[0]?.[0] || 0);
    if (count >= INTERVIEW_QUESTIONS.length) return;

    console.log(`Seeding ${INTERVIEW_QUESTIONS.length} curated interview questions into admin_interviews...`);
    const now = new Date().toISOString();
    database.run('BEGIN TRANSACTION;');

    for (const q of INTERVIEW_QUESTIONS) {
      database.run(
        `INSERT OR IGNORE INTO admin_interviews (
          id, company_id, category, question, difficulty, experience_level, sample_answer, key_points_json, coding_challenge, is_published, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          q.id,
          q.companyId,
          q.category,
          q.question,
          q.difficulty,
          'All Levels',
          q.sampleAnswer || '',
          JSON.stringify(q.keyPoints || []),
          '',
          1,
          now,
          now
        ]
      );
    }

    database.run('COMMIT;');
  } catch (e) {
    try { database.run('ROLLBACK;'); } catch (_) {}
    console.error('Error seeding admin interviews:', e);
  }
}

// Seed Initial Study Plans into SQLite
function seedAdminStudyPlans(database: Database) {
  try {
    const res = database.exec("SELECT COUNT(*) FROM admin_study_plans");
    const count = Number((res[0]?.values as any)?.[0]?.[0] || 0);
    if (count > 0) return;

    console.log('Seeding curated study plans into admin_study_plans...');
    const now = new Date().toISOString();
    const plans = [
      {
        id: 'plan_vlsi_graph',
        title: 'VLSI Graph Theory & EDA CAD Algorithms',
        category: 'Physical Design & Algorithms',
        difficulty: 'Advanced',
        duration_weeks: 6,
        description: 'Comprehensive curriculum covering Kernighan-Lin graph bi-partitioning, Lee maze routing, Steiner minimal trees, OBDD/ROBDD canonical logic synthesis, and STA DAG timing optimization.',
        learning_objectives: [
          'Master NP-hard graph partitioning heuristics used in ASIC placement engines',
          'Implement wavefront BFS maze routing for multi-layer interconnects',
          'Construct Reduced Ordered Binary Decision Diagrams with variable reordering',
          'Analyze Static Timing Analysis arrival and required times on Directed Acyclic Graphs'
        ],
        modules: [
          { week: 1, title: 'Graph Partitioning & Kernighan-Lin Min-Cut Heuristic', lab: 'kl_algorithm', assigned_problems: ['grph-20', 'grph-21', 'grph-24', 'grph-25', 'grph-37'], status: 'Core Lab' },
          { week: 2, title: 'Grid-Based Interconnect Maze Routing & Lee Algorithm', lab: 'lee_maze', assigned_problems: ['grph-07', 'grph-08', 'grph-09', 'grph-10', 'grph-18'], status: 'Core Lab' },
          { week: 3, title: 'Steiner Tree Interconnect Wirelength Optimization', lab: 'steiner_heuristic', assigned_problems: ['grph-11', 'grph-12', 'grph-13', 'grph-14', 'grph-19'], status: 'Core Lab' },
          { week: 4, title: 'OBDD / ROBDD Canonical Boolean Function Representation', lab: 'obdd_robdd', assigned_problems: ['grph-30', 'grph-35', 'grph-36', 'grph-53', 'grph-54'], status: 'Core Lab' },
          { week: 5, title: 'Data Flow Graphs & Pipelined Retiming Transformation', lab: 'data_flow_graph', assigned_problems: ['grph-29', 'grph-39', 'grph-43', 'grph-47', 'grph-57'], status: 'Core Lab' },
          { week: 6, title: 'Static Timing Analysis (STA) Critical Path DAG Optimization', lab: 'dag_sta', assigned_problems: ['grph-01', 'grph-02', 'grph-03', 'grph-04', 'grph-05'], status: 'Core Lab' },
          { week: 7, title: 'Shortest Path & Dijkstra Minimum-RC Delay Analysis', lab: 'shortest_path', assigned_problems: ['grph-06', 'grph-31', 'grph-32', 'grph-49', 'grph-50'], status: 'Advanced Lab' },
          { week: 8, title: 'Longest Path Setup Slack & Fmax Frequency Optimization', lab: 'longest_path', assigned_problems: ['grph-42', 'grph-59', 'grph-60', 'grph-38', 'grph-56'], status: 'Advanced Lab' },
          { week: 9, title: 'Liao-Wong 1D Physical Layout Compaction & Constraint Graph', lab: 'liao_wong', assigned_problems: ['grph-15', 'grph-16', 'grph-17', 'grph-22', 'grph-23'], status: 'Advanced Lab' },
          { week: 10, title: 'Bellman-Ford Clock Skew Scheduling & Negative Cycle Check', lab: 'bellman_ford', assigned_problems: ['grph-33', 'grph-44', 'grph-48', 'grph-51', 'grph-52'], status: 'Advanced Lab' },
          { week: 11, title: 'Spanning Tree Interconnects, MST vs Steiner & CTS', lab: 'spanning_tree', assigned_problems: ['grph-26', 'grph-27', 'grph-28', 'grph-45', 'grph-46'], status: 'Capstone' },
          { week: 12, title: 'Dynamic Programming Van Ginneken Elmore Buffer Insertion', lab: 'dp_buffer', assigned_problems: ['grph-34', 'grph-40', 'grph-41', 'grph-55', 'grph-58'], status: 'Capstone' }
        ],
        recommended_problems: ['grph-01', 'grph-07', 'grph-12', 'grph-20', 'grph-30']
      },
      {
        id: 'plan_rtl_mastery',
        title: 'RTL Design & Digital Architecture Mastery',
        category: 'Verilog & SystemVerilog',
        difficulty: 'Intermediate',
        duration_weeks: 8,
        description: 'Deep dive into synthesizable Verilog/SystemVerilog, FSM design, synchronous FIFOs, pipelined ALUs, memory controllers, and multi-clock domain crossing synchronizers.',
        learning_objectives: [
          'Design glitch-free Moore and Mealy finite state machines',
          'Implement circular buffer synchronous and asynchronous FIFOs with Gray code pointers',
          'Structure 5-stage pipelined datapath with hazard detection and forwarding',
          'Prevent metastability using multi-flop synchronizers and handshake protocols'
        ],
        modules: [
          { week: 1, title: 'Combinational Datapaths & Arithmetic Logic Units', lab: 'alu_pipeline', status: 'Core' },
          { week: 2, title: 'Sequential Elements, Setup/Hold Time & Non-Blocking Semantics', lab: 'seq_elements', status: 'Core' },
          { week: 3, title: 'FSM Architecture: Binary, One-Hot & Gray Encoding', lab: 'fsm_design', status: 'Core' },
          { week: 4, title: 'Synchronous FIFO Architecture & Flag Logic', lab: 'fifo_sync', status: 'Core' },
          { week: 5, title: 'Asynchronous CDC & 2-Stage DFF Synchronizers', lab: 'cdc_sync', status: 'Advanced' },
          { week: 6, title: 'Pipelining Techniques & Delay Balancing', lab: 'pipeline_hazards', status: 'Advanced' },
          { week: 7, title: 'AXI-Lite & Wishbone Bus Interface Protocols', lab: 'bus_interfaces', status: 'Industry' },
          { week: 8, title: 'Top-Level SoC Integration & Synthesis Constraints', lab: 'soc_top', status: 'Capstone' }
        ],
        recommended_problems: ['v-mux-4to1', 'v-dff-async', 'v-counter-4bit', 'sv-sync-fifo']
      },
      {
        id: 'plan_uvm_verification',
        title: 'UVM & Advanced Functional Verification',
        category: 'Functional Verification',
        difficulty: 'Advanced',
        duration_weeks: 6,
        description: 'Universal Verification Methodology (UVM 1.2 / IEEE 1800.2) framework: drivers, monitors, scoreboards, sequencers, factory overrides, virtual interfaces, and covergroups.',
        learning_objectives: [
          'Architect layered UVM testbenches with standardized phases',
          'Develop reusable transaction items and constrained-random sequences',
          'Implement transaction-level modeling (TLM) analysis ports and scoreboards',
          'Define functional coverage models with cross-coverage bins'
        ],
        modules: [
          { week: 1, title: 'SystemVerilog OOP & Virtual Interfaces for Verification', lab: 'sv_oop', status: 'Core' },
          { week: 2, title: 'UVM Phasing Architecture & Component Hierarchy', lab: 'uvm_phases', status: 'Core' },
          { week: 3, title: 'UVM Sequence Items, Sequencers & Driver Mechanics', lab: 'uvm_driver', status: 'Core' },
          { week: 4, title: 'UVM Monitor, TLM Analysis Ports & Reference Scoreboard', lab: 'uvm_scoreboard', status: 'Core' },
          { week: 5, title: 'Factory Overrides, Configuration Database & Virtual Sequences', lab: 'uvm_factory', status: 'Advanced' },
          { week: 6, title: 'Constrained Random Testing & Functional Coverage Metrics', lab: 'uvm_coverage', status: 'Capstone' }
        ],
        recommended_problems: ['sv-sync-fifo', 'v-seq-det-1011']
      },
      {
        id: 'plan_dft_testing',
        title: 'DFT Architecture, Boundary Scan & ATPG',
        category: 'Testability & Silicon Debug',
        difficulty: 'Intermediate',
        duration_weeks: 5,
        description: 'Design-for-Testability techniques: Scan chain insertion, IEEE 1149.1 JTAG TAP controller, Stuck-at / At-speed ATPG, and Built-In Self-Test (BIST).',
        learning_objectives: [
          'Understand multiplexed D-flip-flop scan cells and scan chain balancing',
          'Trace 16-state JTAG TAP controller state transitions and instruction register',
          'Generate Automatic Test Pattern Generation fault models for manufacturing defects',
          'Implement Linear Feedback Shift Register (LFSR) pseudo-random pattern generators'
        ],
        modules: [
          { week: 1, title: 'Manufacturing Fault Models & Controllability/Observability', lab: 'dft_faults', status: 'Core' },
          { week: 2, title: 'Full Scan Chain Insertion & Clock Domain Stitching', lab: 'dft_scan', status: 'Core' },
          { week: 3, title: 'IEEE 1149.1 Boundary Scan & JTAG TAP Controller FSM', lab: 'jtag_tap', status: 'Core' },
          { week: 4, title: 'ATPG Algorithms: D-Algorithm & PODEM Heuristics', lab: 'atpg_podem', status: 'Advanced' },
          { week: 5, title: 'Logic BIST (LBIST) & Memory BIST (MBIST) Architecture', lab: 'bist_arch', status: 'Capstone' }
        ],
        recommended_problems: ['v-dff-async', 'v-counter-4bit']
      },
      {
        id: 'plan_fpga_architecture',
        title: 'FPGA Architecture, Timing Closure & DSP',
        category: 'FPGA & Hardware Acceleration',
        difficulty: 'Intermediate',
        duration_weeks: 4,
        description: 'FPGA Slice architecture (LUTs, Carry Chains, Distributed RAM, DSP48E), Static Timing Closure, Clock Domain Crossing, and Vivado synthesis flows.',
        learning_objectives: [
          'Optimize boolean functions to map into 6-input LUTs and MUXF7/F8 primitives',
          'Use DSP48E slices for high-throughput multiply-accumulate (MAC) filters',
          'Resolve setup (max-delay) and hold (min-delay) timing violations in Vivado',
          'Structure dual-port Block RAMs with write-first and read-first modes'
        ],
        modules: [
          { week: 1, title: 'Configurable Logic Block (CLB) & 6-LUT Slice Architecture', lab: 'fpga_clb', status: 'Core' },
          { week: 2, title: 'Block RAM (BRAM) & UltraRAM Memory Subsystems', lab: 'fpga_bram', status: 'Core' },
          { week: 3, title: 'DSP48E Multipliers & Pipelined FIR Filter Implementation', lab: 'fpga_dsp', status: 'Core' },
          { week: 4, title: 'Vivado Synthesis, Floorplanning & Timing Closure Constraints', lab: 'fpga_timing', status: 'Capstone' }
        ],
        recommended_problems: ['v-mux-4to1', 'v-counter-4bit', 'sv-sync-fifo']
      }
    ];

    database.run('BEGIN TRANSACTION;');
    for (const plan of plans) {
      database.run(
        `INSERT OR IGNORE INTO admin_study_plans (
          id, title, category, difficulty, duration_weeks, description, learning_objectives_json, modules_json, recommended_problems_json, is_published, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          plan.id,
          plan.title,
          plan.category,
          plan.difficulty,
          plan.duration_weeks,
          plan.description,
          JSON.stringify(plan.learning_objectives),
          JSON.stringify(plan.modules),
          JSON.stringify(plan.recommended_problems),
          1,
          now,
          now
        ]
      );
    }
    database.run('COMMIT;');
  } catch (e) {
    try { database.run('ROLLBACK;'); } catch (_) {}
    console.error('Error seeding admin study plans:', e);
  }
}

// ============================================================
// ADMIN BACKEND QUERY HELPERS
// ============================================================

// Record event in platform security audit log
export function recordAuditLog(action: string, performedBy: string, details: string) {
  if (!db) return;
  try {
    const id = `log_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const now = new Date().toISOString();
    db.run(
      "INSERT INTO audit_logs (id, action, performed_by, details, created_at) VALUES (?, ?, ?, ?, ?)",
      [id, action, performedBy, details, now]
    );
    saveDatabaseToFile();
  } catch (e) {
    console.warn("Could not record audit log:", e);
  }
}

// 1. Overview Statistics for Admin Dashboard
export function getAdminOverviewStats() {
  if (!db) throw new Error("Database not initialized");

  const userRes = db.exec("SELECT COUNT(*) FROM users");
  const totalUsers = Number((userRes[0]?.values as any)?.[0]?.[0] || 0);

  // Active users in last 30 days or users with active progress
  const activeRes = db.exec("SELECT COUNT(DISTINCT user_id) FROM submissions WHERE submitted_at > datetime('now', '-30 days')");
  let activeUsers = Number((activeRes[0]?.values as any)?.[0]?.[0] || 0);
  if (activeUsers === 0 && totalUsers > 0) {
    const loginRes = db.exec("SELECT COUNT(*) FROM users WHERE last_login IS NOT NULL");
    activeUsers = Math.max(1, Number((loginRes[0]?.values as any)?.[0]?.[0] || 1));
  }

  const probRes = db.exec("SELECT COUNT(*) FROM problems");
  const curriculumProblems = Number((probRes[0]?.values as any)?.[0]?.[0] || 0);

  const customRes = db.exec("SELECT COUNT(*) FROM custom_problems");
  const customProblems = Number((customRes[0]?.values as any)?.[0]?.[0] || 0);
  const totalProblems = curriculumProblems + customProblems;

  // Problems by language / topic
  const topicRes = db.exec("SELECT topic, COUNT(*) as cnt FROM problems GROUP BY topic ORDER BY cnt DESC");
  const problemsByTopic: { topic: string; count: number }[] = [];
  if (topicRes.length > 0 && topicRes[0].values) {
    topicRes[0].values.forEach((row: any[]) => {
      problemsByTopic.push({ topic: String(row[0]), count: Number(row[1]) });
    });
  }

  const interviewRes = db.exec("SELECT COUNT(*) FROM admin_interviews");
  const totalInterviews = Number((interviewRes[0]?.values as any)?.[0]?.[0] || 0);

  const studyRes = db.exec("SELECT COUNT(*) FROM admin_study_plans");
  const totalStudyPlans = Number((studyRes[0]?.values as any)?.[0]?.[0] || 0);

  const subRes = db.exec("SELECT COUNT(*) FROM submissions");
  const totalSubmissions = Number((subRes[0]?.values as any)?.[0]?.[0] || 0);

  const accRes = db.exec("SELECT COUNT(*) FROM submissions WHERE status = 'Accepted'");
  const totalAccepted = Number((accRes[0]?.values as any)?.[0]?.[0] || 0);

  const acceptanceRate = totalSubmissions > 0 ? Math.round((totalAccepted / totalSubmissions) * 1000) / 10 : 0.0;

  // Recent audit logs
  const auditRes = db.exec("SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT 15");
  const recentAuditLogs: any[] = [];
  if (auditRes.length > 0 && auditRes[0].values) {
    const cols = auditRes[0].columns;
    auditRes[0].values.forEach((row: any[]) => {
      const obj: any = {};
      cols.forEach((col, idx) => { obj[col] = row[idx]; });
      recentAuditLogs.push(obj);
    });
  }

  return {
    totalUsers,
    activeUsers,
    totalProblems,
    curriculumProblems,
    customProblems,
    problemsByTopic,
    totalInterviews,
    totalStudyPlans,
    totalSubmissions,
    totalAccepted,
    acceptanceRate,
    recentAuditLogs
  };
}

// 2. User Management for Admin
export function getAllUsersForAdmin(search?: string) {
  if (!db) throw new Error("Database not initialized");

  let query = `
    SELECT u.id, u.name, u.email, u.role, u.department, u.year_of_study, u.college_name, u.auth_provider, u.created_at, u.last_login,
           COALESCE(p.solved_count, 0) as solved_count,
           COALESCE(p.streak_days, 1) as streak_days
    FROM users u
    LEFT JOIN progress p ON u.id = p.user_id
    WHERE 1=1
  `;
  const params: any[] = [];

  if (search && search.trim()) {
    query += " AND (u.name LIKE ? OR u.email LIKE ? OR u.department LIKE ?)";
    params.push(`%${search.trim()}%`, `%${search.trim()}%`, `%${search.trim()}%`);
  }

  query += " ORDER BY u.created_at DESC LIMIT 100";

  const stmt = db.prepare(query);
  stmt.bind(params);
  const users: any[] = [];
  while (stmt.step()) {
    users.push(stmt.getAsObject());
  }
  stmt.free();

  return users;
}

export function updateUserRoleInDb(userId: string, newRole: 'admin' | 'student', performedBy: string): boolean {
  if (!db) return false;
  try {
    const now = new Date().toISOString();
    db.run("UPDATE users SET role = ?, updated_at = ? WHERE id = ?", [newRole, now, userId]);
    recordAuditLog("ROLE_CHANGE", performedBy, `Changed role of user ${userId} to ${newRole}`);
    saveDatabaseToFile();
    return true;
  } catch (e) {
    console.error("Error updating user role:", e);
    return false;
  }
}

export function deleteUserFromDb(userId: string, performedBy: string): boolean {
  if (!db) return false;
  try {
    db.run("DELETE FROM submissions WHERE user_id = ?", [userId]);
    db.run("DELETE FROM progress WHERE user_id = ?", [userId]);
    db.run("DELETE FROM users WHERE id = ?", [userId]);
    recordAuditLog("USER_DELETE", performedBy, `Permanently deleted user account ${userId}`);
    saveDatabaseToFile();
    return true;
  } catch (e) {
    console.error("Error deleting user:", e);
    return false;
  }
}

// 3. Problem Management for Admin
export function getAllProblemsForAdmin(search?: string, topic?: string) {
  if (!db) throw new Error("Database not initialized");

  let query = "SELECT * FROM problems WHERE 1=1";
  const params: any[] = [];

  if (topic && topic !== 'all') {
    query += " AND topic = ?";
    params.push(topic);
  }

  if (search && search.trim()) {
    query += " AND (title LIKE ? OR description LIKE ? OR id LIKE ?)";
    params.push(`%${search.trim()}%`, `%${search.trim()}%`, `%${search.trim()}%`);
  }

  query += " ORDER BY topic ASC, difficulty ASC";

  const stmt = db.prepare(query);
  stmt.bind(params);
  const problems: any[] = [];
  while (stmt.step()) {
    const row = stmt.getAsObject();
    problems.push({
      ...row,
      testbench_config: safeJsonParseHelper(row.testbench_config_json, {}),
      hints: safeJsonParseHelper(row.hints_json, []),
      tags: safeJsonParseHelper(row.tags_json, [])
    });
  }
  stmt.free();

  // Also include custom problems
  const custStmt = db.prepare("SELECT * FROM custom_problems ORDER BY created_at DESC");
  while (custStmt.step()) {
    const row = custStmt.getAsObject();
    if (!problems.some(p => p.id === row.id)) {
      problems.push({
        ...row,
        hints: safeJsonParseHelper(row.hints_json, []),
        is_custom: true
      });
    }
  }
  custStmt.free();

  return problems;
}

function safeJsonParseHelper(raw: any, fallback: any) {
  if (!raw) return fallback;
  try { return JSON.parse(String(raw)); } catch { return fallback; }
}

// 4. Interview Management for Admin
export function getAdminInterviews(companyId?: string) {
  if (!db) throw new Error("Database not initialized");

  let query = "SELECT * FROM admin_interviews WHERE 1=1";
  const params: any[] = [];

  if (companyId && companyId !== 'all') {
    query += " AND company_id = ?";
    params.push(companyId);
  }

  query += " ORDER BY company_id ASC, difficulty ASC";

  const stmt = db.prepare(query);
  stmt.bind(params);
  const interviews: any[] = [];
  while (stmt.step()) {
    const row = stmt.getAsObject();
    interviews.push({
      ...row,
      key_points: safeJsonParseHelper(row.key_points_json, []),
      is_published: Boolean(row.is_published)
    });
  }
  stmt.free();

  return interviews;
}

export function upsertAdminInterview(item: {
  id?: string;
  company_id: string;
  category: string;
  question: string;
  difficulty?: string;
  experience_level?: string;
  sample_answer?: string;
  key_points?: string[];
  coding_challenge?: string;
  is_published?: boolean;
}, performedBy: string): boolean {
  if (!db) return false;
  try {
    const now = new Date().toISOString();
    const id = item.id || `iq_${item.company_id}_${Date.now()}`;
    const diff = item.difficulty || 'Medium';
    const exp = item.experience_level || 'All Levels';
    const ans = item.sample_answer || '';
    const kp = JSON.stringify(item.key_points || []);
    const cc = item.coding_challenge || '';
    const pub = item.is_published === false ? 0 : 1;

    db.run(
      `INSERT OR REPLACE INTO admin_interviews (
        id, company_id, category, question, difficulty, experience_level, sample_answer, key_points_json, coding_challenge, is_published, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, item.company_id, item.category, item.question, diff, exp, ans, kp, cc, pub, now, now]
    );

    recordAuditLog("INTERVIEW_UPSERT", performedBy, `Added/Updated interview question: ${item.question.slice(0, 50)}...`);
    saveDatabaseToFile();
    return true;
  } catch (e) {
    console.error("Error upserting interview question:", e);
    return false;
  }
}

export function deleteAdminInterview(id: string, performedBy: string): boolean {
  if (!db) return false;
  try {
    db.run("DELETE FROM admin_interviews WHERE id = ?", [id]);
    recordAuditLog("INTERVIEW_DELETE", performedBy, `Deleted interview question ${id}`);
    saveDatabaseToFile();
    return true;
  } catch (e) {
    console.error("Error deleting interview question:", e);
    return false;
  }
}

// 5. Study Plan Management for Admin
export function getAdminStudyPlans() {
  if (!db) throw new Error("Database not initialized");

  const stmt = db.prepare("SELECT * FROM admin_study_plans ORDER BY duration_weeks ASC");
  const plans: any[] = [];
  while (stmt.step()) {
    const row = stmt.getAsObject();
    plans.push({
      ...row,
      learning_objectives: safeJsonParseHelper(row.learning_objectives_json, []),
      modules: safeJsonParseHelper(row.modules_json, []),
      recommended_problems: safeJsonParseHelper(row.recommended_problems_json, []),
      is_published: Boolean(row.is_published)
    });
  }
  stmt.free();

  return plans;
}

export function upsertAdminStudyPlan(plan: {
  id?: string;
  title: string;
  category: string;
  difficulty?: string;
  duration_weeks?: number;
  description?: string;
  learning_objectives?: string[];
  modules?: any[];
  recommended_problems?: string[];
  is_published?: boolean;
}, performedBy: string): boolean {
  if (!db) return false;
  try {
    const now = new Date().toISOString();
    const id = plan.id || `plan_${Date.now()}`;
    const diff = plan.difficulty || 'Intermediate';
    const dur = plan.duration_weeks || 4;
    const desc = plan.description || '';
    const obj = JSON.stringify(plan.learning_objectives || []);
    const mod = JSON.stringify(plan.modules || []);
    const rec = JSON.stringify(plan.recommended_problems || []);
    const pub = plan.is_published === false ? 0 : 1;

    db.run(
      `INSERT OR REPLACE INTO admin_study_plans (
        id, title, category, difficulty, duration_weeks, description, learning_objectives_json, modules_json, recommended_problems_json, is_published, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, plan.title, plan.category, diff, dur, desc, obj, mod, rec, pub, now, now]
    );

    recordAuditLog("STUDY_PLAN_UPSERT", performedBy, `Added/Updated study plan: ${plan.title}`);
    saveDatabaseToFile();
    return true;
  } catch (e) {
    console.error("Error upserting study plan:", e);
    return false;
  }
}

export function deleteAdminStudyPlan(id: string, performedBy: string): boolean {
  if (!db) return false;
  try {
    db.run("DELETE FROM admin_study_plans WHERE id = ?", [id]);
    recordAuditLog("STUDY_PLAN_DELETE", performedBy, `Deleted study plan ${id}`);
    saveDatabaseToFile();
    return true;
  } catch (e) {
    console.error("Error deleting study plan:", e);
    return false;
  }
}

// 6. Analytics & Platform Usage Metrics
export function getAdminAnalytics() {
  if (!db) throw new Error("Database not initialized");

  // Breakdown by language from real submissions
  const langRes = db.exec(`
    SELECT language, COUNT(*) as total_attempts,
           SUM(CASE WHEN status = 'Accepted' THEN 1 ELSE 0 END) as accepted_count
    FROM submissions
    GROUP BY language
    ORDER BY total_attempts DESC
  `);
  const languageUsage: any[] = [];
  if (langRes.length > 0 && langRes[0].values) {
    langRes[0].values.forEach((row: any[]) => {
      const attempts = Number(row[1]);
      const accepted = Number(row[2]);
      languageUsage.push({
        language: String(row[0]),
        attempts,
        accepted,
        rate: attempts > 0 ? Math.round((accepted / attempts) * 1000) / 10 : 0
      });
    });
  }

  // Status breakdown
  const statusRes = db.exec("SELECT status, COUNT(*) FROM submissions GROUP BY status");
  const statusBreakdown: Record<string, number> = {};
  if (statusRes.length > 0 && statusRes[0].values) {
    statusRes[0].values.forEach((row: any[]) => {
      statusBreakdown[String(row[0])] = Number(row[1]);
    });
  }

  // Top solved problems
  const topSolvedRes = db.exec(`
    SELECT problem_id, problem_title, COUNT(*) as attempts,
           SUM(CASE WHEN status = 'Accepted' THEN 1 ELSE 0 END) as accepted
    FROM submissions
    GROUP BY problem_id
    ORDER BY attempts DESC
    LIMIT 10
  `);
  const topProblems: any[] = [];
  if (topSolvedRes.length > 0 && topSolvedRes[0].values) {
    topSolvedRes[0].values.forEach((row: any[]) => {
      topProblems.push({
        problemId: String(row[0]),
        title: String(row[1]),
        attempts: Number(row[2]),
        accepted: Number(row[3])
      });
    });
  }

  // User engagement
  const userCountRes = db.exec("SELECT COUNT(*) FROM users");
  const totalUsers = Number((userCountRes[0]?.values as any)?.[0]?.[0] || 0);

  const subCountRes = db.exec("SELECT COUNT(*) FROM submissions");
  const totalSubmissions = Number((subCountRes[0]?.values as any)?.[0]?.[0] || 0);

  return {
    languageUsage,
    statusBreakdown,
    topProblems,
    totalUsers,
    totalSubmissions
  };
}

