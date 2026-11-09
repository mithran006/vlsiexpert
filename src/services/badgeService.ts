import { UserProgress, Badge, Problem, Topic } from '../types';
import { TOPIC_LIBRARY_NAMES } from './certificateService';

export const BADGE_DEFINITIONS = [
  {
    id: 'first-drill',
    title: 'First Step in Silicon',
    description: 'Solved your first VLSI digital design problem on PSNACET VLSI Expert.',
    category: 'milestone' as const,
    icon: '⚡',
    color: 'text-blue-400',
    bgGradient: 'from-blue-900/40 to-cyan-900/40',
    borderColor: 'border-blue-500/40',
    requiredCount: 1,
    requirementText: 'Solve 1 problem'
  },
  {
    id: '25-problem-solver',
    title: '25 Problem Solver',
    description: 'Demonstrated steady mastery by solving 25 verified hardware design drills.',
    category: 'milestone' as const,
    icon: '🥉',
    color: 'text-amber-400',
    bgGradient: 'from-amber-950/50 to-yellow-900/30',
    borderColor: 'border-amber-500/40',
    requiredCount: 25,
    requirementText: 'Solve 25 problems'
  },
  {
    id: '50-problem-solver',
    title: '50 Problem Solver',
    description: 'Achieved Half-Century Milestone! Solved 50 VLSI & Digital Logic problems.',
    category: 'milestone' as const,
    icon: '🥈',
    color: 'text-slate-300',
    bgGradient: 'from-slate-800 to-slate-900',
    borderColor: 'border-slate-400/50',
    requiredCount: 50,
    requirementText: 'Solve 50 problems'
  },
  {
    id: '100-problem-solver',
    title: '100 Centurion Solver',
    description: 'Centurion Chip Designer! Reached 100 solved problems across core domains.',
    category: 'milestone' as const,
    icon: '🥇',
    color: 'text-yellow-400',
    bgGradient: 'from-yellow-950/60 to-amber-900/40',
    borderColor: 'border-yellow-500/50',
    requiredCount: 100,
    requirementText: 'Solve 100 problems'
  },
  {
    id: '300-problem-solver',
    title: '300 RTL Architect',
    description: 'RTL Master Engineer! Completed 300 comprehensive design challenges.',
    category: 'milestone' as const,
    icon: '👑',
    color: 'text-amber-400',
    bgGradient: 'from-amber-950/60 to-slate-900',
    borderColor: 'border-amber-500/60',
    requiredCount: 300,
    requirementText: 'Solve 300 problems'
  },
  {
    id: '500-problem-solver',
    title: '500 Hardware Fellow',
    description: 'Half-Thousand Milestone! Solved 500 hardware design and verification drills.',
    category: 'milestone' as const,
    icon: '💎',
    color: 'text-cyan-300',
    bgGradient: 'from-cyan-950/60 to-blue-900/50',
    borderColor: 'border-cyan-400/50',
    requiredCount: 500,
    requirementText: 'Solve 500 problems'
  },
  {
    id: '750-problem-solver',
    title: '750 Master Architect',
    description: 'Master Silicon Architect! Solved 750 problems across full ASIC/FPGA stacks.',
    category: 'milestone' as const,
    icon: '⚡',
    color: 'text-emerald-400',
    bgGradient: 'from-emerald-950/70 to-teal-900/50',
    borderColor: 'border-emerald-500/60',
    requiredCount: 750,
    requirementText: 'Solve 750 problems'
  },
  {
    id: '1000-problem-solver',
    title: '1000 Silicon Grandmaster',
    description: 'Millennium Milestone! Solved 1,000 problems with top industry proficiency.',
    category: 'milestone' as const,
    icon: '🏆',
    color: 'text-rose-400',
    bgGradient: 'from-rose-950/70 to-red-900/50',
    borderColor: 'border-rose-500/60',
    requiredCount: 1000,
    requirementText: 'Solve 1000 problems'
  },
  {
    id: '1200-problem-solver',
    title: '1200 Industry Champion',
    description: 'Pre-Eminent Silicon Champion! Solved 1,200 problems across all hardware categories.',
    category: 'milestone' as const,
    icon: '🌟',
    color: 'text-sky-400',
    bgGradient: 'from-sky-950/70 to-slate-900',
    borderColor: 'border-sky-500/60',
    requiredCount: 1200,
    requirementText: 'Solve 1200 problems'
  },
  {
    id: '1400-problem-solver',
    title: '1400 Supreme Silicon Legend',
    description: 'The Ultimate Achievement: 100% Complete VLSI Expert (All 1,400 Problems Solved)!',
    category: 'milestone' as const,
    icon: '🌌',
    color: 'text-amber-300',
    bgGradient: 'from-amber-900/70 via-slate-900 to-amber-950/70',
    borderColor: 'border-amber-400/80',
    requiredCount: 1400,
    requirementText: 'Solve all 1400 problems'
  },
  {
    id: 'daily-learner',
    title: 'Daily Learner',
    description: 'Consistent Silicon Scholar! Practiced daily drills continuously.',
    category: 'consistency' as const,
    icon: '🔥',
    color: 'text-orange-400',
    bgGradient: 'from-orange-950/60 to-amber-900/40',
    borderColor: 'border-orange-500/50',
    requiredCount: 1,
    requirementText: 'Practice daily or maintain active streak'
  },
  {
    id: 'resilient-debugger',
    title: 'Resilient Debugger',
    description: 'Persistence in Engineering! Executed and debugged HDL simulation errors 5+ times.',
    category: 'resilience' as const,
    icon: '🛠️',
    color: 'text-blue-300',
    bgGradient: 'from-slate-900 to-indigo-950',
    borderColor: 'border-indigo-500/40',
    requiredCount: 5,
    requirementText: 'Run 5 code simulations / debug attempts'
  },
  // Topic Library Completion Badges
  {
    id: 'lib-verilog',
    title: 'Verilog RTL Library Master',
    description: 'Completed 100% of all 100 Verilog HDL design problems.',
    category: 'topic' as const,
    icon: '🧩',
    color: 'text-blue-400',
    bgGradient: 'from-blue-950/50 to-slate-900',
    borderColor: 'border-blue-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 Verilog problems'
  },
  {
    id: 'lib-systemverilog',
    title: 'SystemVerilog Library Master',
    description: 'Completed 100% of all 100 SystemVerilog & SVA verification problems.',
    category: 'topic' as const,
    icon: '⚙️',
    color: 'text-cyan-400',
    bgGradient: 'from-cyan-950/50 to-slate-900',
    borderColor: 'border-cyan-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 SystemVerilog problems'
  },
  {
    id: 'lib-vhdl',
    title: 'VHDL Library Master',
    description: 'Completed 100% of all 100 VHDL architectural and structural problems.',
    category: 'topic' as const,
    icon: '📐',
    color: 'text-emerald-400',
    bgGradient: 'from-emerald-950/50 to-slate-900',
    borderColor: 'border-emerald-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 VHDL problems'
  },
  {
    id: 'lib-fpga',
    title: 'FPGA Architecture Master',
    description: 'Completed 100% of all 100 FPGA BRAM, CDC, and DSP48 problems.',
    category: 'topic' as const,
    icon: '🎛️',
    color: 'text-amber-400',
    bgGradient: 'from-amber-950/50 to-slate-900',
    borderColor: 'border-amber-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 FPGA problems'
  },
  {
    id: 'lib-linux',
    title: 'Linux EDA Scripting Master',
    description: 'Completed 100% of all 100 Linux CLI, awk, sed, and Makefile problems.',
    category: 'topic' as const,
    icon: '💻',
    color: 'text-cyan-400',
    bgGradient: 'from-cyan-950/50 to-slate-900',
    borderColor: 'border-cyan-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 Linux problems'
  },
  {
    id: 'lib-uvm',
    title: 'UVM Verification Master',
    description: 'Completed 100% of all 100 UVM factory, driver, monitor, and TLM problems.',
    category: 'topic' as const,
    icon: '🛡️',
    color: 'text-rose-400',
    bgGradient: 'from-rose-950/50 to-slate-900',
    borderColor: 'border-rose-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 UVM problems'
  },
  {
    id: 'lib-dft',
    title: 'DFT Testability Master',
    description: 'Completed 100% of all 100 Scan chain, ATPG, MBIST, and JTAG problems.',
    category: 'topic' as const,
    icon: '🔬',
    color: 'text-teal-400',
    bgGradient: 'from-teal-950/50 to-slate-900',
    borderColor: 'border-teal-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 DFT problems'
  },
  {
    id: 'lib-embedded_c',
    title: 'Embedded C Firmware Master',
    description: 'Completed 100% of all 100 Embedded C pointer & register MMIO problems.',
    category: 'topic' as const,
    icon: '⚡',
    color: 'text-sky-400',
    bgGradient: 'from-sky-950/50 to-slate-900',
    borderColor: 'border-sky-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 Embedded C problems'
  },
  {
    id: 'lib-mnemonics',
    title: 'Assembly & Architecture Master',
    description: 'Completed 100% of all 100 RISC-V, ARM, and x86 mnemonics problems.',
    category: 'topic' as const,
    icon: '🏛️',
    color: 'text-orange-400',
    bgGradient: 'from-orange-950/50 to-slate-900',
    borderColor: 'border-orange-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 Assembly problems'
  },
  {
    id: 'lib-arduino',
    title: 'Arduino Hardware Master',
    description: 'Completed 100% of all 100 Arduino C/C++ sensor and timer problems.',
    category: 'topic' as const,
    icon: '🔌',
    color: 'text-teal-400',
    bgGradient: 'from-teal-950/50 to-slate-900',
    borderColor: 'border-teal-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 Arduino problems'
  },
  {
    id: 'lib-python_hw',
    title: 'MicroPython Embedded Master',
    description: 'Completed 100% of all 100 MicroPython machine, ADC, and PWM problems.',
    category: 'topic' as const,
    icon: '🐍',
    color: 'text-yellow-400',
    bgGradient: 'from-yellow-950/50 to-slate-900',
    borderColor: 'border-yellow-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 MicroPython problems'
  },
  {
    id: 'lib-soc_design',
    title: 'SoC Architecture Master',
    description: 'Completed 100% of all 100 AMBA AXI4, AHB, and APB interconnect problems.',
    category: 'topic' as const,
    icon: '🚀',
    color: 'text-sky-400',
    bgGradient: 'from-sky-950/50 to-slate-900',
    borderColor: 'border-sky-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 SoC problems'
  },
  {
    id: 'lib-cv_robotics',
    title: 'CV & Robotics Hardware Master',
    description: 'Completed 100% of all 100 Edge Vision pipeline & Robotics problems.',
    category: 'topic' as const,
    icon: '🤖',
    color: 'text-red-400',
    bgGradient: 'from-red-950/50 to-slate-900',
    borderColor: 'border-red-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 CV/Robotics problems'
  },
  {
    id: 'lib-rtos_problems',
    title: 'RTOS Kernel Master',
    description: 'Completed 100% of all 100 FreeRTOS multitasking and semaphore problems.',
    category: 'topic' as const,
    icon: '⏱️',
    color: 'text-emerald-400',
    bgGradient: 'from-emerald-950/50 to-slate-900',
    borderColor: 'border-emerald-500/40',
    requiredCount: 100,
    requirementText: 'Solve all 100 RTOS problems'
  }
];

export const badgeService = {
  getUserBadges(progress: UserProgress, allProblems: Problem[]): Badge[] {
    const solvedCount = progress.solvedProblemIds.length;
    const streakDays = progress.streakDays || 1;
    const totalAttempts = (progress.errorAttemptsCount || 0) + (progress.attemptedProblemIds?.length || 0);

    // Topic counts
    const topicSolvedCounts: Record<string, number> = {};
    progress.solvedProblemIds.forEach(id => {
      const prob = allProblems.find(p => p.id === id);
      if (prob) {
        topicSolvedCounts[prob.topic] = (topicSolvedCounts[prob.topic] || 0) + 1;
      }
    });

    return BADGE_DEFINITIONS.map(def => {
      let currentCount = 0;

      if (def.category === 'milestone') {
        currentCount = solvedCount;
      } else if (def.id === 'daily-learner') {
        currentCount = streakDays >= 1 || totalAttempts >= 1 ? 1 : 0;
      } else if (def.id === 'resilient-debugger') {
        currentCount = Math.max(totalAttempts, progress.errorAttemptsCount || 0);
      } else if (def.category === 'topic') {
        const topicName = def.id.replace('lib-', '');
        currentCount = topicSolvedCounts[topicName] || 0;
      }

      const unlocked = currentCount >= def.requiredCount;

      return {
        ...def,
        currentCount,
        unlocked
      };
    });
  }
};
