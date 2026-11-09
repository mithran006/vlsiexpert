import { TopicMeta } from '../types';

export const TOPIC_METADATA: Record<string, TopicMeta> = {
  verilog: {
    id: 'verilog',
    name: 'Verilog HDL',
    shortCode: 'VLOG',
    iconName: 'Cpu',
    color: '#e5a93c', // Signature Gold/Yellow
    bgLight: 'bg-[#e5a93c]/10 text-[#e5a93c] border-[#e5a93c]/30',
    description: 'Basic and intermediate hardware description language used for digital logic design.',
    recommendedTrack: 'frontend'
  },
  systemverilog: {
    id: 'systemverilog',
    name: 'SystemVerilog',
    shortCode: 'SVER',
    iconName: 'Zap',
    color: '#f59e0b', // Bright Amber/Yellow
    bgLight: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30',
    description: 'Modern IEEE standard hardware description and verification language with assertions and OOP.',
    recommendedTrack: 'frontend'
  },
  vhdl: {
    id: 'vhdl',
    name: 'VHDL',
    shortCode: 'VHDL',
    iconName: 'Layers',
    color: '#fbbf24', // Warm Yellow
    bgLight: 'bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/30',
    description: 'Strongly-typed hardware description language widely used in defense, aerospace, and European EDA.',
    recommendedTrack: 'frontend'
  },
  fpga: {
    id: 'fpga',
    name: 'FPGA Architecture',
    shortCode: 'FPGA',
    iconName: 'Grid',
    color: '#e5a93c', // Gold
    bgLight: 'bg-[#e5a93c]/10 text-[#e5a93c] border-[#e5a93c]/30',
    description: 'Field Programmable Gate Array architecture, LUTs, BRAM, timing constraints, and synthesis.',
    recommendedTrack: 'both'
  },
  linux: {
    id: 'linux',
    name: 'Linux for EDA',
    shortCode: 'LNX',
    iconName: 'Terminal',
    color: '#fcd34d', // Light Gold Yellow
    bgLight: 'bg-[#fcd34d]/10 text-[#fcd34d] border-[#fcd34d]/30',
    description: 'Essential shell commands, automation scripts, Makefiles, and regex for chip design tools.',
    recommendedTrack: 'both'
  },
  uvm: {
    id: 'uvm',
    name: 'UVM Methodology',
    shortCode: 'UVM',
    iconName: 'ShieldCheck',
    color: '#f59e0b', // Amber Yellow
    bgLight: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30',
    description: 'Universal Verification Methodology for industrial-grade, coverage-driven verification testbenches.',
    recommendedTrack: 'frontend'
  },
  dft: {
    id: 'dft',
    name: 'DFT & Physical Design',
    shortCode: 'DFT',
    iconName: 'Activity',
    color: '#e5a93c', // Gold
    bgLight: 'bg-[#e5a93c]/10 text-[#e5a93c] border-[#e5a93c]/30',
    description: 'Design For Testability, scan chains, ATPG, boundary scan, JTAG, and manufacturing fault models.',
    recommendedTrack: 'backend'
  },
  embedded_c: {
    id: 'embedded_c',
    name: 'Embedded C',
    shortCode: 'EMB-C',
    iconName: 'Code',
    color: '#fbbf24', // Warm Gold
    bgLight: 'bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/30',
    description: 'Firmware development, peripheral registers, GPIO, UART, timers, interrupts, and memory-mapped I/O in C.',
    recommendedTrack: 'both'
  },
  mnemonics: {
    id: 'mnemonics',
    name: 'Microcontroller Assembly',
    shortCode: 'ASM8051',
    iconName: 'Cpu',
    color: '#d97706', // Deep Amber Gold
    bgLight: 'bg-[#d97706]/10 text-[#d97706] border-[#d97706]/30',
    description: '8051 / ARM Microcontroller assembly mnemonics (MOV, ADD, SUB, DJNZ, SETB, CLR, PUSH, POP, interrupts).',
    recommendedTrack: 'both'
  },
  arduino: {
    id: 'arduino',
    name: 'Arduino C/C++',
    shortCode: 'ARDUINO',
    iconName: 'Cpu',
    color: '#e5a93c', // Gold
    bgLight: 'bg-[#e5a93c]/10 text-[#e5a93c] border-[#e5a93c]/30',
    description: 'Arduino AVR C/C++ firmware, pinMode(), digitalWrite(), analogRead(), I2C/SPI sensors, PWM, and non-blocking timers.',
    recommendedTrack: 'both'
  },
  python_hw: {
    id: 'python_hw',
    name: 'Python Hardware (MicroPython/RPi)',
    shortCode: 'PY-HW',
    iconName: 'Terminal',
    color: '#f59e0b', // Yellow
    bgLight: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30',
    description: 'Hardware control using Python (MicroPython, CircuitPython, RPi.GPIO, machine module, I2C, SPI, asyncio firmware).',
    recommendedTrack: 'both'
  },
  soc_design: {
    id: 'soc_design',
    name: 'SoC Design Coding',
    shortCode: 'SoC',
    iconName: 'Cpu',
    color: '#fbbf24', // Warm Gold
    bgLight: 'bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/30',
    description: 'SoC Architecture coding: AMBA AXI4/AHB/APB buses, NoC routers, CDC synchronizers, Memory Controllers, DMA engines, Interrupt Controllers, and Power Domains.',
    recommendedTrack: 'both'
  },
  cv_robotics: {
    id: 'cv_robotics',
    name: 'CV & Robotics (Cam Access)',
    shortCode: 'CV-ROB',
    iconName: 'Camera',
    color: '#e5a93c', // Gold Yellow
    bgLight: 'bg-[#e5a93c]/10 text-[#e5a93c] border-[#e5a93c]/30',
    description: 'Computer Vision & Robotics with Camera Feed: OpenCV frame processing, HSV color tracking, ArUco/AprilTag tracking, ROS2 nodes, kinematics, and motor drive controllers.',
    recommendedTrack: 'both'
  },
  rtos_problems: {
    id: 'rtos_problems',
    name: 'RTOS System Programming',
    shortCode: 'RTOS',
    iconName: 'Activity',
    color: '#fcd34d', // Amber Gold
    bgLight: 'bg-[#fcd34d]/10 text-[#fcd34d] border-[#fcd34d]/30',
    description: 'Real-Time Operating System coding: FreeRTOS & Zephyr task creation, mutexes, counting semaphores, queues, software timers, priority inheritance, and ISR deferred handlers.',
    recommendedTrack: 'both'
  },
  vlsi_graph: {
    id: 'vlsi_graph',
    name: 'VLSI Graph Theory',
    shortCode: 'GRPH',
    iconName: 'Network',
    color: '#f59e0b', // Amber Yellow
    bgLight: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30',
    description: 'Graph theory & EDA physical design algorithms: Kernighan-Lin (KL) min-cut, Lee maze routing, Steiner tree heuristics, OBDD & ROBDD logic synthesis, Data Flow Graph (DFG) scheduling, and DAG Static Timing Analysis.',
    recommendedTrack: 'both'
  }
};

export const TOPIC_METAS: TopicMeta[] = Object.values(TOPIC_METADATA);
