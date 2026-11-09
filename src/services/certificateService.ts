import { Problem, Topic, UserProgress } from '../types';

export const OFFICIAL_MILESTONES = [25, 50, 100, 300, 500, 750, 1000, 1200, 1400] as const;

export interface CertificateAward {
  id: string;
  type: 'milestone' | 'library';
  title: string;
  subtitle: string;
  requiredCount: number;
  currentCount: number;
  unlocked: boolean;
  unlockedAt?: string;
  topic?: Topic;
  trackName: string;
  badgeEmoji: string;
  badgeLabel: string;
  gradeText: string;
  color: string;
  accentGradient: string;
  borderClass: string;
  description: string;
}

export const TOPIC_LIBRARY_NAMES: Record<Topic, { title: string; subtitle: string; track: string; badge: string; color: string }> = {
  verilog: {
    title: 'Verilog HDL RTL Logic Design Specialist',
    subtitle: '100% Mastery of 100 Verilog RTL combinational, sequential & FSM drills',
    track: 'Verilog HDL & RTL Logic Synthesis',
    badge: '🧩 Verilog Master',
    color: 'from-blue-600 to-cyan-600'
  },
  systemverilog: {
    title: 'SystemVerilog & SVA Verification Specialist',
    subtitle: '100% Mastery of 100 SystemVerilog OOP, interface & SVA assertion drills',
    track: 'SystemVerilog & Functional Verification',
    badge: '⚙️ SV Architect',
    color: 'from-cyan-600 to-teal-600'
  },
  vhdl: {
    title: 'VHDL Digital Architecture Specialist',
    subtitle: '100% Mastery of 100 VHDL structural, behavioral & synthesis drills',
    track: 'VHDL Core Digital Architecture',
    badge: '📐 VHDL Specialist',
    color: 'from-emerald-600 to-teal-600'
  },
  fpga: {
    title: 'FPGA Architecture & Vivado Master',
    subtitle: '100% Mastery of 100 FPGA BRAM, CDC synchronizer & DSP48 drills',
    track: 'FPGA Architecture & Silicon Synthesis',
    badge: '🎛️ FPGA Master',
    color: 'from-amber-600 to-yellow-600'
  },
  linux: {
    title: 'Linux EDA Scripting & Automation Maestro',
    subtitle: '100% Mastery of 100 Linux CLI, awk, sed, Makefile & EDA automation drills',
    track: 'Linux EDA & Scripting Automation',
    badge: '💻 Linux Maestro',
    color: 'from-cyan-600 to-blue-600'
  },
  uvm: {
    title: 'UVM Verification & Testbench Elite',
    subtitle: '100% Mastery of 100 UVM factory, driver, monitor, scoreboard & TLM drills',
    track: 'UVM Universal Verification Methodology',
    badge: '🛡️ UVM Elite',
    color: 'from-rose-600 to-pink-600'
  },
  dft: {
    title: 'Design For Testability (DFT) Specialist',
    subtitle: '100% Mastery of 100 Scan chain, ATPG, MBIST & JTAG IEEE 1149.1 drills',
    track: 'DFT & Silicon Test Engineering',
    badge: '🔬 DFT Specialist',
    color: 'from-teal-600 to-emerald-600'
  },
  embedded_c: {
    title: 'Embedded C Bare-Metal Firmware Master',
    subtitle: '100% Mastery of 100 Embedded C pointer, register MMIO & driver drills',
    track: 'Embedded C Bare-Metal Firmware',
    badge: '⚡ Firmware Master',
    color: 'from-sky-600 to-blue-700'
  },
  mnemonics: {
    title: 'Assembly & Computer Architecture Maestro',
    subtitle: '100% Mastery of 100 RISC-V, ARM & x86 instruction microcode drills',
    track: 'RISC-V / ARM Architecture & Assembly',
    badge: '🏛️ Assembly Maestro',
    color: 'from-amber-600 to-orange-700'
  },
  arduino: {
    title: 'Arduino & Microcontroller Specialist',
    subtitle: '100% Mastery of 100 Arduino C/C++ sensor, timer & GPIO peripheral drills',
    track: 'Microcontroller Hardware Prototyping',
    badge: '🔌 Arduino Specialist',
    color: 'from-teal-500 to-cyan-600'
  },
  python_hw: {
    title: 'MicroPython Embedded Systems Specialist',
    subtitle: '100% Mastery of 100 MicroPython machine, ADC, PWM & bus protocol drills',
    track: 'MicroPython Embedded Hardware',
    badge: '🐍 Python HW Specialist',
    color: 'from-yellow-600 to-emerald-600'
  },
  soc_design: {
    title: 'SoC Architecture & AMBA Bus Protocol Master',
    subtitle: '100% Mastery of 100 AXI4, AHB, APB & System-on-Chip bus interconnect drills',
    track: 'SoC Architecture & Interconnects',
    badge: '🚀 SoC Master',
    color: 'from-sky-600 to-blue-700'
  },
  cv_robotics: {
    title: 'Edge Computer Vision & Robotics Specialist',
    subtitle: '100% Mastery of 100 real-time pixel pipeline, 2D convolution & motor drills',
    track: 'Computer Vision & Robotics Hardware',
    badge: '🤖 Robotics Specialist',
    color: 'from-red-600 to-rose-700'
  },
  rtos_problems: {
    title: 'Real-Time Operating Systems (RTOS) Master',
    subtitle: '100% Mastery of 100 FreeRTOS multitasking, mutex & queue kernel drills',
    track: 'Real-Time Operating Systems (FreeRTOS)',
    badge: '⏱️ RTOS Master',
    color: 'from-blue-600 to-violet-700'
  },
  vlsi_graph: {
    title: 'VLSI Graph Theory & EDA Optimization Specialist',
    subtitle: '100% Mastery of EDA physical design graph algorithms, STA DAGs & Steiner routing',
    track: 'VLSI Graph Theory & EDA Algorithms',
    badge: '🕸️ EDA Graph Master',
    color: 'from-amber-600 to-orange-700'
  }
};

export const MILESTONE_DEFINITIONS: Record<number, { title: string; subtitle: string; track: string; badge: string; grade: string; color: string; desc: string }> = {
  25: {
    title: '25 Silicon Drills Milestone Certificate',
    subtitle: 'Demonstrated initial hardware design and synthesis problem-solving capability',
    track: 'Foundational Silicon Engineering',
    badge: '🥉 Bronze Silicon Solver (25)',
    grade: 'Foundational Mastery',
    color: 'from-amber-700 to-yellow-800',
    desc: 'Awarded for completing 25 verified hardware logic and engineering problems.'
  },
  50: {
    title: '50 Silicon Drills Half-Century Certificate',
    subtitle: 'Demonstrated solid proficiency across digital logic, testbenches & simulation',
    track: 'Intermediate Digital Logic & RTL',
    badge: '🥈 Silver Silicon Solver (50)',
    grade: 'Proficient Mastery',
    color: 'from-slate-400 to-slate-200',
    desc: 'Awarded for completing 50 verified hardware logic and engineering problems.'
  },
  100: {
    title: '100 Silicon Drills Centurion Certificate',
    subtitle: 'Century Milestone: Verified mastery across core HDL, timing & verification',
    track: 'Advanced Hardware Engineering',
    badge: '🥇 Gold Centurion Solver (100)',
    grade: 'Centurion Distinction',
    color: 'from-amber-400 to-yellow-500',
    desc: 'Awarded for completing 100 verified hardware logic and engineering problems.'
  },
  300: {
    title: '300 Silicon Drills RTL Architect Certificate',
    subtitle: 'Extensive multi-domain mastery in digital architecture, buses & FPGA flows',
    track: 'RTL Architecture & Design',
    badge: '👑 RTL Architect (300)',
    grade: 'Architectural Excellence',
    color: 'from-amber-600 to-yellow-600',
    desc: 'Awarded for completing 300 verified hardware logic and engineering problems.'
  },
  500: {
    title: '500 Silicon Drills Hardware Fellow Certificate',
    subtitle: 'Half-Thousand Milestone: Distinguished mastery across ASIC, UVM & firmware',
    track: 'Distinguished Hardware Engineering',
    badge: '💎 Hardware Fellow (500)',
    grade: 'Distinguished Fellow',
    color: 'from-cyan-500 to-blue-600',
    desc: 'Awarded for completing 500 verified hardware logic and engineering problems.'
  },
  750: {
    title: '750 Silicon Drills Master Architect Certificate',
    subtitle: 'Elite mastery across embedded, microcode, timing & physical design',
    track: 'Master Silicon Architecture',
    badge: '⚡ Master Architect (750)',
    grade: 'Elite Distinction',
    color: 'from-emerald-500 to-teal-600',
    desc: 'Awarded for completing 750 verified hardware logic and engineering problems.'
  },
  1000: {
    title: '1000 Silicon Drills Grandmaster Certificate',
    subtitle: 'Millennium Milestone: Silicon Grandmaster across all 14 hardware disciplines',
    track: 'Grandmaster Silicon Engineering',
    badge: '🏆 Silicon Grandmaster (1000)',
    grade: 'Grandmaster Honors',
    color: 'from-rose-500 to-red-600',
    desc: 'Awarded for completing 1000 verified hardware logic and engineering problems.'
  },
  1200: {
    title: '1200 Silicon Drills Industry Champion Certificate',
    subtitle: 'Pre-Eminent Silicon Champion: Industry-grade mastery across all chip stacks',
    track: 'Industry Silicon Champion',
    badge: '🌟 Industry Champion (1200)',
    grade: 'Supreme Industry Honors',
    color: 'from-sky-600 to-cyan-600',
    desc: 'Awarded for completing 1200 verified hardware logic and engineering problems.'
  },
  1400: {
    title: '1400 Complete Platform Supreme Legend Certificate',
    subtitle: '100% Complete VLSI Expert Mastery: Solved all 1,400 problems in the platform',
    track: 'Supreme Silicon Legend (Complete Curriculum)',
    badge: '🌌 Supreme Silicon Legend (1400)',
    grade: 'Valedictorian Legend',
    color: 'from-amber-500 via-amber-400 to-yellow-500',
    desc: 'The Highest Award of PSNACET: Completion of all 1,400 VLSI Expert problems.'
  }
};

export const certificateService = {
  /**
   * Evaluates all certificates and returns unlocked + upcoming
   */
  getAllCertificates(progress: UserProgress, allProblems: Problem[]): CertificateAward[] {
    const solvedCount = progress.solvedProblemIds.length;
    const certificates: CertificateAward[] = [];

    // 1. Milestone Certificates (25, 50, 100, 300, 500, 750, 1000, 1200, 1400)
    for (const count of OFFICIAL_MILESTONES) {
      const def = MILESTONE_DEFINITIONS[count];
      if (!def) continue;
      const isUnlocked = solvedCount >= count;

      certificates.push({
        id: `milestone-${count}`,
        type: 'milestone',
        title: def.title,
        subtitle: def.subtitle,
        requiredCount: count,
        currentCount: solvedCount,
        unlocked: isUnlocked,
        trackName: def.track,
        badgeEmoji: def.badge.split(' ')[0],
        badgeLabel: def.badge,
        gradeText: def.grade,
        color: def.color,
        accentGradient: def.color,
        borderClass: isUnlocked ? 'border-amber-500/50' : 'border-slate-800',
        description: def.desc
      });
    }

    // 2. Full Problem Library Certificates (14 Libraries, 100 problems each)
    const topicCounts: Record<string, { total: number; solved: number }> = {};
    for (const prob of allProblems) {
      if (!topicCounts[prob.topic]) {
        topicCounts[prob.topic] = { total: 0, solved: 0 };
      }
      topicCounts[prob.topic].total++;
      if (progress.solvedProblemIds.includes(prob.id)) {
        topicCounts[prob.topic].solved++;
      }
    }

    for (const [topicKey, counts] of Object.entries(topicCounts)) {
      const meta = TOPIC_LIBRARY_NAMES[topicKey as Topic];
      if (!meta) continue;
      const isUnlocked = counts.solved >= counts.total && counts.total > 0;

      certificates.push({
        id: `library-${topicKey}`,
        type: 'library',
        title: meta.title,
        subtitle: meta.subtitle,
        requiredCount: counts.total,
        currentCount: counts.solved,
        unlocked: isUnlocked,
        topic: topicKey as Topic,
        trackName: meta.track,
        badgeEmoji: meta.badge.split(' ')[0],
        badgeLabel: meta.badge,
        gradeText: '100% Library Mastery',
        color: meta.color,
        accentGradient: meta.color,
        borderClass: isUnlocked ? 'border-emerald-500/50' : 'border-slate-800',
        description: `Awarded for successfully solving all ${counts.total} problems in the ${meta.track} library.`
      });
    }

    return certificates;
  },

  /**
   * Check if the user is eligible for ANY certificate
   */
  isCertificateEligible(progress: UserProgress, allProblems: Problem[]): boolean {
    const allCerts = this.getAllCertificates(progress, allProblems);
    return allCerts.some(c => c.unlocked);
  },

  /**
   * Get all unlocked certificates
   */
  getUnlockedCertificates(progress: UserProgress, allProblems: Problem[]): CertificateAward[] {
    const allCerts = this.getAllCertificates(progress, allProblems);
    return allCerts.filter(c => c.unlocked);
  },

  /**
   * Get the next milestone and remaining problems needed
   */
  getNextMilestone(solvedCount: number): { target: number; remaining: number; def: typeof MILESTONE_DEFINITIONS[25] } {
    for (const count of OFFICIAL_MILESTONES) {
      if (solvedCount < count) {
        return {
          target: count,
          remaining: count - solvedCount,
          def: MILESTONE_DEFINITIONS[count]
        };
      }
    }
    return {
      target: 1400,
      remaining: 0,
      def: MILESTONE_DEFINITIONS[1400]
    };
  },

  /**
   * Detects if solving a specific problem just triggered a brand-new certificate unlock!
   */
  checkNewCertificateUnlocked(
    prevSolvedCount: number,
    newSolvedCount: number,
    problem: Problem,
    allProblems: Problem[],
    prevSolvedIds: string[]
  ): { isNewUnlock: boolean; unlockedCert?: CertificateAward } {
    // 1. Check milestone hit (exact match)
    if (OFFICIAL_MILESTONES.includes(newSolvedCount as any) && prevSolvedCount < newSolvedCount) {
      const def = MILESTONE_DEFINITIONS[newSolvedCount];
      if (def) {
        return {
          isNewUnlock: true,
          unlockedCert: {
            id: `milestone-${newSolvedCount}`,
            type: 'milestone',
            title: def.title,
            subtitle: def.subtitle,
            requiredCount: newSolvedCount,
            currentCount: newSolvedCount,
            unlocked: true,
            trackName: def.track,
            badgeEmoji: def.badge.split(' ')[0],
            badgeLabel: def.badge,
            gradeText: def.grade,
            color: def.color,
            accentGradient: def.color,
            borderClass: 'border-amber-500/50',
            description: def.desc
          }
        };
      }
    }

    // 2. Check full library completion
    const topicProblems = allProblems.filter(p => p.topic === problem.topic);
    const prevTopicSolved = topicProblems.filter(p => prevSolvedIds.includes(p.id)).length;
    const newTopicSolved = prevSolvedIds.includes(problem.id) ? prevTopicSolved : prevTopicSolved + 1;

    if (newTopicSolved >= topicProblems.length && prevTopicSolved < topicProblems.length) {
      const meta = TOPIC_LIBRARY_NAMES[problem.topic];
      if (meta) {
        return {
          isNewUnlock: true,
          unlockedCert: {
            id: `library-${problem.topic}`,
            type: 'library',
            title: meta.title,
            subtitle: meta.subtitle,
            requiredCount: topicProblems.length,
            currentCount: newTopicSolved,
            unlocked: true,
            topic: problem.topic,
            trackName: meta.track,
            badgeEmoji: meta.badge.split(' ')[0],
            badgeLabel: meta.badge,
            gradeText: '100% Library Mastery',
            color: meta.color,
            accentGradient: meta.color,
            borderClass: 'border-emerald-500/50',
            description: `Awarded for solving all ${topicProblems.length} problems in the ${meta.track} library.`
          }
        };
      }
    }

    return { isNewUnlock: false };
  }
};
