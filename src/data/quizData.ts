import { HDL_VERIFICATION_QUESTIONS } from './quiz/hdlVerificationQuiz';
import { EMBEDDED_MCU_QUESTIONS } from './quiz/embeddedMcuQuiz';
import { CONTROL_AUTOMATION_QUESTIONS } from './quiz/controlAutomationQuiz';
import { QUANTUM_QUESTIONS } from './quiz/quantumQuiz';
import { ADDITIONAL_HDL_QUESTIONS } from './quiz/additionalHdlQuiz';
import { ADDITIONAL_EMBEDDED_QUESTIONS } from './quiz/additionalEmbeddedQuiz';
import { ADDITIONAL_CORE_ELECTRONICS_QUESTIONS } from './quiz/additionalCoreElectronicsQuiz';
import { ADDITIONAL_SOC_FPGA_TOOLS_QUESTIONS } from './quiz/additionalSocFpgaToolsQuiz';

export type QuizTopicId =
  | 'verilog'
  | 'systemverilog'
  | 'vhdl'
  | 'uvm'
  | 'dft'
  | 'embedded_c'
  | 'mnemonics'
  | 'arduino'
  | 'python_hw'
  | 'rtos_problems'
  | 'cv_robotics'
  | 'digital'
  | 'cmos'
  | 'linux'
  | 'fpga'
  | 'electronics_devices'
  | 'soc_design'
  | 'semiconductor_packaging'
  | 'embedded_iot'
  | 'linear_ic'
  | 'control_automation'
  | 'quantum_prog';

export interface QuizQuestion {
  id: string;
  topicId: QuizTopicId;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  category: string;
  hint?: string;
}

export interface QuizTopicInfo {
  id: QuizTopicId;
  title: string;
  shortDesc: string;
  iconName: string;
  badgeColor: string;
  categoryGroup?: 'hdl_verification' | 'embedded_firmware' | 'soc_fpga_tools' | 'core_electronics';
  questionCount: number;
}

export const QUIZ_TOPICS: QuizTopicInfo[] = [
  // --- HDL & Verification ---
  {
    id: 'verilog',
    title: 'Verilog HDL',
    shortDesc: 'Continuous Assigns, Procedural Blocks, Blocking vs Non-Blocking, FSMs, Tri-State, Signed Arithmetic',
    iconName: 'Cpu',
    badgeColor: 'from-blue-600 to-indigo-600',
    categoryGroup: 'hdl_verification',
    questionCount: 50
  },
  {
    id: 'systemverilog',
    title: 'SystemVerilog & SVA',
    shortDesc: 'OOP, Logic Types, Always_comb/ff, SVA Assertions, Interfaces, Constrained Randomization, Coverage',
    iconName: 'Zap',
    badgeColor: 'from-purple-600 to-indigo-600',
    categoryGroup: 'hdl_verification',
    questionCount: 50
  },
  {
    id: 'vhdl',
    title: 'VHDL Digital Design',
    shortDesc: 'Entity-Architecture, Std_logic, Signals vs Variables, Numeric_std, Processes, Generics, Packages',
    iconName: 'Layers',
    badgeColor: 'from-emerald-600 to-teal-600',
    categoryGroup: 'hdl_verification',
    questionCount: 50
  },
  {
    id: 'uvm',
    title: 'UVM Methodology',
    shortDesc: 'Phases, Factory Overrides, TLM Ports/FIFOs, Sequences, Drivers/Monitors/Scoreboard, RAL, Objections',
    iconName: 'ShieldCheck',
    badgeColor: 'from-cyan-600 to-blue-600',
    categoryGroup: 'hdl_verification',
    questionCount: 50
  },
  {
    id: 'dft',
    title: 'DFT & Physical Design',
    shortDesc: 'Scan Chains, ATPG, Fault Models (Stuck-at/Transition), JTAG IEEE 1149.1, BIST, March C-, Compression',
    iconName: 'Activity',
    badgeColor: 'from-rose-600 to-red-600',
    categoryGroup: 'hdl_verification',
    questionCount: 50
  },

  // --- Embedded & Firmware ---
  {
    id: 'embedded_c',
    title: 'Embedded C Firmware',
    shortDesc: 'Memory-Mapped I/O, Volatile Pointers, Atomic Bitwise Masks, ISR Constraints, DMA Drivers, Watchdog',
    iconName: 'Code',
    badgeColor: 'from-teal-600 to-emerald-600',
    categoryGroup: 'embedded_firmware',
    questionCount: 50
  },
  {
    id: 'mnemonics',
    title: 'Microcontroller Assembly',
    shortDesc: '8051 & ARM Mnemonics, DJNZ/CJNE/SETB, SFR Bit Addressing, Register Banks, Stack Operations',
    iconName: 'Cpu',
    badgeColor: 'from-amber-600 to-orange-600',
    categoryGroup: 'embedded_firmware',
    questionCount: 50
  },
  {
    id: 'arduino',
    title: 'Arduino C/C++',
    shortDesc: 'pinMode, digitalWrite, Hardware PWM analogWrite, Non-blocking millis() Timers, I2C/SPI Sensor Busses',
    iconName: 'Cpu',
    badgeColor: 'from-cyan-600 to-teal-600',
    categoryGroup: 'embedded_firmware',
    questionCount: 50
  },
  {
    id: 'python_hw',
    title: 'Python Hardware (RPi/ESP32)',
    shortDesc: 'MicroPython machine Module, GPIO Pin Control, PWM, ADC Sampling, Asyncio Firmware Loops',
    iconName: 'Terminal',
    badgeColor: 'from-blue-600 to-sky-600',
    categoryGroup: 'embedded_firmware',
    questionCount: 50
  },
  {
    id: 'rtos_problems',
    title: 'RTOS System Programming',
    shortDesc: 'Preemptive Schedulers, Priority Inversion & Inheritance, Mutexes, Counting Semaphores, Task Queues',
    iconName: 'Activity',
    badgeColor: 'from-emerald-600 to-green-600',
    categoryGroup: 'embedded_firmware',
    questionCount: 50
  },
  {
    id: 'cv_robotics',
    title: 'CV & Robotics Vision',
    shortDesc: 'OpenCV Frame Pipelines, HSV Color Tracking, ArUco/AprilTag 6-DOF Pose Estimation, ROS2 Nodes',
    iconName: 'Camera',
    badgeColor: 'from-purple-600 to-violet-600',
    categoryGroup: 'soc_fpga_tools',
    questionCount: 50
  },

  // --- SoC, FPGA & EDA Tools ---
  {
    id: 'soc_design',
    title: 'SoC Design & Architecture',
    shortDesc: 'AMBA AXI/AHB, RISC-V/ARM Cores, NoC, Power Management (UPF, DVFS), Cache Coherence',
    iconName: 'Layers',
    badgeColor: 'from-indigo-600 to-violet-500',
    categoryGroup: 'soc_fpga_tools',
    questionCount: 50
  },
  {
    id: 'fpga',
    title: 'FPGA Architecture & P&R',
    shortDesc: 'LUTs, CLBs, DSP48, BRAM, Routing Matrices, Timing Closure, Setup/Hold Slack',
    iconName: 'Grid',
    badgeColor: 'from-amber-600 to-orange-500',
    categoryGroup: 'soc_fpga_tools',
    questionCount: 50
  },
  {
    id: 'linux',
    title: 'Linux for EDA Engineers',
    shortDesc: 'Shell Scripting, Grep/Sed/Awk, Log Parsing, Makefiles, Process & Memory Control',
    iconName: 'Terminal',
    badgeColor: 'from-emerald-600 to-teal-500',
    categoryGroup: 'soc_fpga_tools',
    questionCount: 50
  },

  // --- Core Electronics & VLSI ---
  {
    id: 'digital',
    title: 'Digital Electronics',
    shortDesc: 'Boolean Algebra, Logic Gates, Combination & Sequential Circuits, FSMs, Setup/Hold Time',
    iconName: 'Cpu',
    badgeColor: 'from-blue-600 to-cyan-500',
    categoryGroup: 'core_electronics',
    questionCount: 50
  },
  {
    id: 'cmos',
    title: 'CMOS VLSI Design',
    shortDesc: 'MOSFET Physics, Inverter VTC, Sizing, Dynamic/Static Leakage, Latch-up, Dynamic Logic',
    iconName: 'Zap',
    badgeColor: 'from-purple-600 to-pink-500',
    categoryGroup: 'core_electronics',
    questionCount: 50
  },
  {
    id: 'electronics_devices',
    title: 'Electronic Devices & Physics',
    shortDesc: 'Semiconductor Physics, PN Junctions, Band Diagrams, Carrier Transport, FinFET & GAAFET',
    iconName: 'Activity',
    badgeColor: 'from-rose-600 to-red-500',
    categoryGroup: 'core_electronics',
    questionCount: 50
  },
  {
    id: 'semiconductor_packaging',
    title: 'Semiconductor Packaging & Materials',
    shortDesc: 'Wirebonding, Flip-Chip, 2.5D/3D IC (CoWoS, TSV), Substrates, Mold Compounds, TIM',
    iconName: 'Package',
    badgeColor: 'from-teal-600 to-emerald-500',
    categoryGroup: 'core_electronics',
    questionCount: 50
  },
  {
    id: 'embedded_iot',
    title: 'Embedded Systems & IoT',
    shortDesc: 'RTOS, Interrupts, I2C/SPI/UART, MQTT/CoAP/LoRa, Watchdog, Bootloaders, GPIO, Power Modes',
    iconName: 'Cpu',
    badgeColor: 'from-cyan-600 to-blue-600',
    categoryGroup: 'core_electronics',
    questionCount: 50
  },
  {
    id: 'linear_ic',
    title: 'Linear Integrated Circuits',
    shortDesc: 'Op-Amps, Slew Rate, CMRR, 555 Timers, Active Filters, PLLs, DACs, ADCs, Precision Rectifiers',
    iconName: 'Radio',
    badgeColor: 'from-amber-500 to-rose-500',
    categoryGroup: 'core_electronics',
    questionCount: 50
  },
  {
    id: 'control_automation',
    title: 'Control & Automation',
    shortDesc: 'PID Controllers, Transfer Functions, PLCs, SCADA, Stability, Servos & Industrial Robotics',
    iconName: 'Sliders',
    badgeColor: 'from-amber-600 to-rose-600',
    categoryGroup: 'core_electronics',
    questionCount: 50
  },
  {
    id: 'quantum_prog',
    title: 'Quantum Computing & Qiskit',
    shortDesc: 'Qubits, Bloch Sphere, Superposition, Bell States, Entanglement, Grover, QFT, Shor, VQE & QEC',
    iconName: 'Sparkles',
    badgeColor: 'from-purple-600 to-indigo-600',
    categoryGroup: 'soc_fpga_tools',
    questionCount: 50
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // DIGITAL ELECTRONICS (20 QUESTIONS)
  // ==========================================
  {
    id: 'dig-1',
    topicId: 'digital',
    category: 'Flip-Flops & Timing',
    question: 'What is the condition for a JK Flip-Flop to operate in Toggle Mode?',
    options: ['J = 0, K = 0', 'J = 0, K = 1', 'J = 1, K = 0', 'J = 1, K = 1'],
    correctAnswer: 3,
    explanation: 'When both J and K inputs are set to 1, the output toggles (Q_next = Q_bar) on every clock edge.'
  },
  {
    id: 'dig-2',
    topicId: 'digital',
    category: 'Combinational Logic',
    question: 'How many 2-to-1 Multiplexers are required to construct a 4-to-1 Multiplexer?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'A 4-to-1 MUX requires 3 2-to-1 MUXes arranged in a 2-stage tree (2 in the first layer, 1 in the second layer).'
  },
  {
    id: 'dig-3',
    topicId: 'digital',
    category: 'Sequential Logic',
    question: 'What is the primary difference between a Mealy machine and a Moore machine?',
    options: [
      'Mealy output depends only on the current state.',
      'Mealy output depends on both current state and current inputs.',
      'Moore machine has no internal flip-flops.',
      'Moore machine cannot represent sequence detectors.'
    ],
    correctAnswer: 1,
    explanation: 'In a Mealy machine, outputs depend on both the current state and present inputs, whereas in a Moore machine, outputs depend strictly on the current state.'
  },
  {
    id: 'dig-4',
    topicId: 'digital',
    category: 'Timing & Setup/Hold',
    question: 'Setup time (t_setup) of a register is defined as the minimum time that input data must be stable:',
    options: [
      'After the active clock edge',
      'Before the active clock edge',
      'Between active and inactive clock edges',
      'During the reset pulse'
    ],
    correctAnswer: 1,
    explanation: 'Setup time is the time window BEFORE the active clock edge during which data must remain stable to ensure correct latching.'
  },
  {
    id: 'dig-5',
    topicId: 'digital',
    category: 'Codes & Converters',
    question: 'Why is Gray code extensively used in asynchronous FIFO pointers across clock domain crossings?',
    options: [
      'It requires fewer logic gates to decode.',
      'Only one bit changes between consecutive values, preventing multi-bit race conditions.',
      'It supports negative numbers directly.',
      'It operates at double the clock frequency.'
    ],
    correctAnswer: 1,
    explanation: 'Gray code guarantees that only 1 bit transitions between adjacent state counts, eliminating multi-bit synchronization hazards in CDC logic.'
  },
  {
    id: 'dig-6',
    topicId: 'digital',
    category: 'Boolean Algebra',
    question: 'According to De Morgan\'s Law, what is the equivalent expression for ~(A + B)?',
    options: ['~A + ~B', '~A • ~B', 'A • B', '~(A • B)'],
    correctAnswer: 1,
    explanation: 'De Morgan\'s Law states that the complement of a sum is equal to the product of the complements: ~(A + B) = ~A • ~B.'
  },
  {
    id: 'dig-7',
    topicId: 'digital',
    category: 'Metastability',
    question: 'How is metastability in a multi-clock domain crossing typically mitigated?',
    options: [
      'Adding a pull-up resistor',
      'Using a 2-stage (or 3-stage) flip-flop synchronizer',
      'Increasing the clock frequency',
      'Using an XOR gate tree'
    ],
    correctAnswer: 1,
    explanation: 'A 2-stage (double flip-flop) synchronizer provides a full clock period for metastable states to settle before data is sampled in the destination domain.'
  },
  {
    id: 'dig-8',
    topicId: 'digital',
    category: 'Counters',
    question: 'What is the maximum modulus of an 8-bit ripple counter?',
    options: ['128', '255', '256', '512'],
    correctAnswer: 2,
    explanation: 'An N-bit counter has 2^N states. For N = 8, 2^8 = 256 distinct states (0 to 255).'
  },
  {
    id: 'dig-9',
    topicId: 'digital',
    category: 'Combinational Adders',
    question: 'Which adder architecture trades off chip area to eliminate sequential carry propagation delay?',
    options: ['Ripple Carry Adder', 'Carry Lookahead Adder (CLA)', 'Serial Adder', 'Carry Save Adder'],
    correctAnswer: 1,
    explanation: 'A Carry Lookahead Adder computes carry signals in parallel using Generate (G) and Propagate (P) functions, eliminating ripple delay at the cost of additional gate area.'
  },
  {
    id: 'dig-10',
    topicId: 'digital',
    category: 'Hazards',
    question: 'What causes a static-1 hazard in a combinational logic circuit?',
    options: [
      'Unequal path delays causing a brief 0 pulse when the output should stay constant at 1.',
      'High setup time violation on a flip-flop.',
      'Clock jitter on a global clock tree.',
      'Missing pull-down resistor on CMOS output.'
    ],
    correctAnswer: 0,
    explanation: 'A static-1 hazard occurs when an output intended to remain steady at 1 momentarily glitches to 0 due to unbalanced propagation delays along different gate paths.'
  },
  {
    id: 'dig-11',
    topicId: 'digital',
    category: 'Karnaugh Maps',
    question: 'In a 4-variable K-Map, grouping a quad (4 adjacent 1s) eliminates how many variables?',
    options: ['1 variable', '2 variables', '3 variables', '4 variables'],
    correctAnswer: 1,
    explanation: 'Grouping 2^N cells eliminates N variables. A quad (2^2 = 4 cells) eliminates 2 variables from the product term.'
  },
  {
    id: 'dig-12',
    topicId: 'digital',
    category: 'Universal Gates',
    question: 'Which pair of logic gates are classified as Universal Gates?',
    options: ['AND and OR', 'NAND and NOR', 'XOR and XNOR', 'NOT and AND'],
    correctAnswer: 1,
    explanation: 'NAND and NOR gates are universal gates because any digital logic function (AND, OR, NOT, XOR) can be constructed exclusively using only NAND or NOR gates.'
  },
  {
    id: 'dig-13',
    topicId: 'digital',
    category: 'Decoders',
    question: 'How many output lines does a 3-to-8 line decoder activate for any given 3-bit input combination?',
    options: ['1 output line', '3 output lines', '8 output lines', '0 output lines'],
    correctAnswer: 0,
    explanation: 'A 3-to-8 decoder asserts exactly 1 active output line corresponding to the binary value represented by the 3 input bits.'
  },
  {
    id: 'dig-14',
    topicId: 'digital',
    category: 'Timing Constraints',
    question: 'What happens if Hold Time (t_hold) constraint is violated on a register?',
    options: [
      'The register outputs a logic 0 always.',
      'The data changes while being latched, causing corrupt or metastable output that CANNOT be fixed by lowering clock frequency.',
      'Clock frequency decreases automatically.',
      'The setup time becomes zero.'
    ],
    correctAnswer: 1,
    explanation: 'Hold time violations depend strictly on min path delay and clock skew; unlike setup violations, hold violations cannot be fixed by slowing down the clock frequency.'
  },
  {
    id: 'dig-15',
    topicId: 'digital',
    category: 'Shift Registers',
    question: 'A Linear Feedback Shift Register (LFSR) with an N-bit register produces a maximum sequence length of:',
    options: ['2^N', '2^N - 1', '2^N + 1', 'N^2'],
    correctAnswer: 1,
    explanation: 'The maximum pseudo-random sequence length of an N-bit maximal-length LFSR is 2^N - 1, excluding the all-zeros state.'
  },
  {
    id: 'dig-16',
    topicId: 'digital',
    category: 'Tristate Buffers',
    question: 'When a Tri-state buffer enable line is disabled, what state is the output placed in?',
    options: ['Logic 0', 'Logic 1', 'High Impedance (Hi-Z)', 'Oscillation'],
    correctAnswer: 2,
    explanation: 'When disabled, a tri-state buffer disconnects its output from the bus, placing it in a High-Impedance (Hi-Z) state.'
  },
  {
    id: 'dig-17',
    topicId: 'digital',
    category: 'Number Systems',
    question: 'What is the 2\'s complement representation of -5 in a 4-bit binary system?',
    options: ['1010', '1011', '1100', '1101'],
    correctAnswer: 1,
    explanation: '+5 is 0101. 1\'s complement is 1010. Adding 1 yields 1011 (-5 in 4-bit 2\'s complement).'
  },
  {
    id: 'dig-18',
    topicId: 'digital',
    category: 'Priority Encoders',
    question: 'In a 4-input priority encoder with input D3 having highest priority, what is output if D3=1 and D1=1?',
    options: ['00', '01', '10', '11'],
    correctAnswer: 3,
    explanation: 'Since D3 has the highest priority and is active (1), the output corresponds to binary 3 ("11"), ignoring lower priority inputs.'
  },
  {
    id: 'dig-19',
    topicId: 'digital',
    category: 'Arithmetic Circuits',
    question: 'What is the sum and carry expression for a Full Adder with inputs A, B, and Cin?',
    options: [
      'Sum = A ^ B ^ Cin; Carry = (A & B) | (B & Cin) | (A & Cin)',
      'Sum = A & B & Cin; Carry = A | B | Cin',
      'Sum = A ~^ B ~^ Cin; Carry = A & B',
      'Sum = A + B + Cin; Carry = A ^ B'
    ],
    correctAnswer: 0,
    explanation: 'A Full Adder computes 3-bit sum as A ^ B ^ Cin and majority carry-out as (A&B) | (B&Cin) | (A&Cin).'
  },
  {
    id: 'dig-20',
    topicId: 'digital',
    category: 'Race Conditions',
    question: 'In an SR Latch constructed with NOR gates, which input condition leads to an invalid/undefined state?',
    options: ['S = 0, R = 0', 'S = 0, R = 1', 'S = 1, R = 0', 'S = 1, R = 1'],
    correctAnswer: 3,
    explanation: 'When S=1 and R=1 in a NOR-based SR latch, both Q and Q_bar outputs are forced to 0, creating a race/invalid condition when inputs return to 0.'
  },

  // ==========================================
  // CMOS VLSI DESIGN (20 QUESTIONS)
  // ==========================================
  {
    id: 'cmos-1',
    topicId: 'cmos',
    category: 'MOSFET Operation',
    question: 'In an n-channel MOSFET, when Vgs > Vth and Vds >= (Vgs - Vth), the transistor operates in which region?',
    options: ['Cutoff Region', 'Linear / Triode Region', 'Saturation Region', 'Subthreshold Region'],
    correctAnswer: 2,
    explanation: 'When Vgs exceeds Vth and pinch-off occurs (Vds >= Vgs - Vth), the NMOS drain current saturates, operating in the Saturation Region.'
  },
  {
    id: 'cmos-2',
    topicId: 'cmos',
    category: 'CMOS Inverter Sizing',
    question: 'Why is the PMOS transistor width (Wp) typically sized ~2 to 2.5 times wider than NMOS width (Wn) in a CMOS inverter?',
    options: ['Because PMOS has higher gate capacitance.', 'Because hole mobility (mu_p) in silicon is roughly 2-3x lower than electron mobility (mu_n).', 'To prevent latch-up.', 'To reduce subthreshold leakage.'],
    correctAnswer: 1,
    explanation: 'Hole mobility in PMOS is ~1/2 to 1/3 of electron mobility in NMOS. Sizing Wp larger equalizes rise time (t_lh) and fall time (t_hl) for balanced VTC.'
  },
  {
    id: 'cmos-3',
    topicId: 'cmos',
    category: 'Latch-Up Physics',
    question: 'What intrinsic structure in a bulk CMOS process causes the parasitic Latch-up phenomenon?',
    options: ['Parasitic PNPN Silicon Controlled Rectifier (SCR) structure', 'Gate oxide breakdown capacitor', 'Subthreshold channel leakage', 'Dynamic charge sharing capacitor'],
    correctAnswer: 0,
    explanation: 'Latch-up is caused by parasitic BJT transistors forming an SCR (PNPN) between VDD and GND, creating a high-current short-circuit path when triggered.'
  },
  {
    id: 'cmos-4',
    topicId: 'cmos',
    category: 'Power Dissipation',
    question: 'Dynamic power dissipation in a CMOS circuit is expressed by which equation?',
    options: ['P_dynamic = alpha • C_L • VDD^2 • f', 'P_dynamic = I_leak • VDD', 'P_dynamic = VDD / R_on', 'P_dynamic = C_L • f^2 • VDD'],
    correctAnswer: 0,
    explanation: 'Dynamic switching power depends quadratically on VDD: P_dynamic = alpha • C_L • VDD^2 • f, where alpha is activity factor.'
  },
  {
    id: 'cmos-5',
    topicId: 'cmos',
    category: 'Inverter VTC',
    question: 'What is the ideal switching threshold voltage (V_M) for a symmetrical CMOS inverter?',
    options: ['VDD / 4', 'VDD / 2', 'VDD', '0V'],
    correctAnswer: 1,
    explanation: 'A symmetrical CMOS inverter has V_M = VDD/2 where V_in = V_out, offering maximum balanced noise margins NM_L and NM_H.'
  },
  {
    id: 'cmos-6',
    topicId: 'cmos',
    category: 'Short Channel Effects',
    question: 'Drain-Induced Barrier Lowering (DIBL) in sub-micron MOSFETs leads to which unwanted behavior?',
    options: [
      'Increase in threshold voltage (Vth)',
      'Decrease in threshold voltage (Vth) as Vds increases, raising leakage current',
      'Elimination of subthreshold current',
      'Increase in gate oxide thickness'
    ],
    correctAnswer: 1,
    explanation: 'DIBL causes high drain voltage to lower the source-channel potential barrier, effectively reducing Vth and significantly increasing subthreshold leakage.'
  },
  {
    id: 'cmos-7',
    topicId: 'cmos',
    category: 'Transmission Gates',
    question: 'Why is a parallel combination of NMOS and PMOS used in a CMOS Transmission Gate (TG)?',
    options: [
      'To pass strong 0 and strong 1 simultaneously without threshold voltage loss.',
      'To increase gate capacitance.',
      'To prevent subthreshold leakage.',
      'To act as a one-way diode.'
    ],
    correctAnswer: 0,
    explanation: 'NMOS passes a strong logic 0 (but weak 1 due to Vth drop), while PMOS passes a strong logic 1 (but weak 0). Combining both passes full rail-to-rail signals.'
  },
  {
    id: 'cmos-8',
    topicId: 'cmos',
    category: 'Dynamic Logic',
    question: 'What is a major design vulnerability in Dynamic CMOS logic gates?',
    options: ['High static power dissipation', 'Charge sharing and noise susceptibility during the evaluate phase', 'Inability to achieve high speed', 'Large layout area compared to static CMOS'],
    correctAnswer: 1,
    explanation: 'Dynamic logic stores charge on a dynamic node during Precharge. During Evaluate, charge sharing with parasitic internal capacitances can drop node voltage and cause false switching.'
  },
  {
    id: 'cmos-9',
    topicId: 'cmos',
    category: 'Logical Effort',
    question: 'In Logical Effort methodology, what is the logical effort (g) of a 2-input NAND gate compared to an inverter?',
    options: ['1', '4/3', '5/3', '2'],
    correctAnswer: 1,
    explanation: 'For a 2-input NAND gate, input capacitance is 2 (NMOS) + 2 (PMOS) = 4 units, compared to an inverter\'s 1+2 = 3 units. Logical effort g = 4/3.'
  },
  {
    id: 'cmos-10',
    topicId: 'cmos',
    category: 'Layout Rules',
    question: 'In CMOS cell layout stick diagrams, an Euler Path is used to find:',
    options: [
      'A continuous poly-silicon line that connects all diffusion regions without breaks, minimizing layout area.',
      'The optimal power supply routing path.',
      'Substrate tap locations.',
      'The worst-case RC delay path.'
    ],
    correctAnswer: 0,
    explanation: 'An Euler path traverses the graph of transistors in identical order for both PMOS and NMOS networks, allowing unbroken diffusion runs.'
  },
  {
    id: 'cmos-11',
    topicId: 'cmos',
    category: 'Subthreshold Leakage',
    question: 'Subthreshold leakage current in a MOSFET depends exponentially on which parameter?',
    options: ['Supply Voltage (VDD)', 'Threshold Voltage (Vth)', 'Channel Width (W)', 'Oxide Capacitance (Cox)'],
    correctAnswer: 1,
    explanation: 'Subthreshold current is proportional to exp(-Vth / (n * V_T)). Lowering Vth to boost speed exponentially increases static subthreshold leakage.'
  },
  {
    id: 'cmos-12',
    topicId: 'cmos',
    category: 'Advanced Nodes',
    question: 'Why did semiconductor foundries shift from planar MOSFETs to FinFET architecture at nodes below 22nm?',
    options: [
      'FinFETs are cheaper to fabricate.',
      '3D tri-gate channel wrapping provides superior electrostatic gate control, suppressing short channel effects and subthreshold leakage.',
      'FinFETs do not require poly-silicon.',
      'FinFETs eliminate interconnect resistance.'
    ],
    correctAnswer: 1,
    explanation: 'FinFET wraps the gate electrode around 3 sides of a thin vertical silicon fin, giving strict electrostatic control over channel current and reducing short channel leakage.'
  },
  {
    id: 'cmos-13',
    topicId: 'cmos',
    category: 'Noise Margins',
    question: 'How is Noise Margin High (NM_H) calculated for a logic gate?',
    options: ['NM_H = VOH - VIH', 'NM_H = VIH - VIL', 'NM_H = VDD - VOH', 'NM_H = VOL + VIL'],
    correctAnswer: 0,
    explanation: 'Noise Margin High NM_H = VOH - VIH, representing the maximum noise voltage added to a high signal before the receiving gate misinterprets it.'
  },
  {
    id: 'cmos-14',
    topicId: 'cmos',
    category: 'Elmore Delay',
    question: 'Elmore delay model estimates RC propagation delay in an RC tree network as:',
    options: ['Sum of R_i • C_i along the path', 'Sum of (R_path • C_node) for all node capacitances in the tree', 'R_total / C_total', 'Exponential decay constant'],
    correctAnswer: 1,
    explanation: 'Elmore delay is calculated by summing the products of shared path resistance R_ik and node capacitance C_k for all nodes in an RC tree.'
  },
  {
    id: 'cmos-15',
    topicId: 'cmos',
    category: 'Body Effect',
    question: 'What happens to the threshold voltage (Vth) of an NMOS transistor when its source-to-body voltage (Vsb) increases?',
    options: ['Vth decreases', 'Vth increases due to expanded depletion region', 'Vth remains unchanged', 'Vth drops to zero'],
    correctAnswer: 1,
    explanation: 'Reverse biasing the source-bulk junction (Vsb > 0) widens the channel depletion layer, requiring a higher Vgs to invert the channel, thus increasing Vth.'
  },
  {
    id: 'cmos-16',
    topicId: 'cmos',
    category: 'Crosstalk',
    question: 'Crosstalk noise between adjacent parallel metal interconnects is primarily governed by:',
    options: ['Inter-wire coupling capacitance (C_cc)', 'Substrate resistance', 'Poly-silicon work function', 'Gate oxide thickness'],
    correctAnswer: 0,
    explanation: 'Coupling capacitance (C_cc) between adjacent long interconnect lines causes voltage glitches and signal delay variations (crosstalk) when neighboring wires switch.'
  },
  {
    id: 'cmos-17',
    topicId: 'cmos',
    category: 'Pass Transistor Logic',
    question: 'What is the primary drawback of unbuffered Pass Transistor Logic (PTL)?',
    options: ['Threshold voltage drop (Vth loss) across series transistors degrades signal levels and speed.', 'Excessive dynamic power.', 'Inability to perform XOR operations.', 'Requires 4-phase clocking.'],
    correctAnswer: 0,
    explanation: 'An NMOS pass transistor output stops charging at VDD - Vth. Chaining multiple PTL gates accumulates Vth drops, requiring level-restorer PMOS buffers.'
  },
  {
    id: 'cmos-18',
    topicId: 'cmos',
    category: 'Clock Tree Synthesis',
    question: 'What is the main objective of Clock Tree Synthesis (CTS) in physical design?',
    options: ['To minimize clock latency and eliminate clock skew across all registers.', 'To route power nets.', 'To decrease setup time.', 'To generate scan chains.'],
    correctAnswer: 0,
    explanation: 'CTS inserts clock buffers in a balanced tree structure (H-tree) to ensure clock edges arrive simultaneously at all flip-flops, minimizing clock skew.'
  },
  {
    id: 'cmos-19',
    topicId: 'cmos',
    category: 'Standard Cells',
    question: 'In a standard cell library layout, why do all cells have a uniform fixed height?',
    options: ['To align with standard routing grids and allow VDD/GND power rails to abut seamlessly in rows.', 'To equalize propagation delay.', 'To simplify schematic entry.', 'To enforce 2-input logic.'],
    correctAnswer: 0,
    explanation: 'Uniform cell height enables automated place-and-route tools to place cells back-to-back in rows where continuous VDD and GND power tracks abut cleanly.'
  },
  {
    id: 'cmos-20',
    topicId: 'cmos',
    category: 'Electromigration',
    question: 'Electromigration in metal interconnect lines is caused by:',
    options: ['High current density causing momentum transfer from moving electrons to metal ions, forming voids and hillocks.', 'Over-voltage gate breakdown.', 'Alpha particle strikes.', 'Thermal expansion mismatch.'],
    correctAnswer: 0,
    explanation: 'High current density causes electron wind that physically displaces metal atoms along interconnects, creating open-circuit voids or short-circuit hillocks over time.'
  },

  // ==========================================
  // LINUX FOR EDA ENGINEERS (20 QUESTIONS)
  // ==========================================
  {
    id: 'lin-1',
    topicId: 'linux',
    category: 'Log Processing & Grep',
    question: 'Which `grep` command recursively searches a directory for the exact term "SETUP VIOLATION" and prints line numbers?',
    options: [
      'grep -rn "SETUP VIOLATION" .',
      'grep -i "SETUP VIOLATION" *',
      'grep -l "SETUP VIOLATION" .',
      'grep -v "SETUP VIOLATION" .'
    ],
    correctAnswer: 0,
    explanation: 'The `-r` flag enables recursive search, and `-n` displays the matching line numbers alongside the matching text.'
  },
  {
    id: 'lin-2',
    topicId: 'linux',
    category: 'Stream Editor Sed',
    question: 'How do you replace all occurrences of `wire` with `logic` in a SystemVerilog file `top.sv` using `sed` in-place?',
    options: [
      'sed -i "s/wire/logic/g" top.sv',
      'sed -r "replace wire logic" top.sv',
      'sed -e "s/wire/logic/" top.sv',
      'sed -g "s/wire/logic/i" top.sv'
    ],
    correctAnswer: 0,
    explanation: '`sed -i "s/old/new/g" file` replaces all occurrences (`g` for global) in-place (`-i`).'
  },
  {
    id: 'lin-3',
    topicId: 'linux',
    category: 'AWK Log Analysis',
    question: 'In AWK, how do you print the second column ($2) of a simulation log file `sim.log` whenever column 1 ($1) equals "ERROR:"?',
    options: [
      'awk \'$1=="ERROR:" {print $2}\' sim.log',
      'awk \'{if $1==ERROR print $2}\' sim.log',
      'awk \'print $2 where $1=="ERROR:"\' sim.log',
      'awk -f $2==ERROR sim.log'
    ],
    correctAnswer: 0,
    explanation: 'In AWK, the syntax `pattern {action}` evaluates `$1=="ERROR:"` and prints column `$2` for matching lines.'
  },
  {
    id: 'lin-4',
    topicId: 'linux',
    category: 'Permissions & Chmod',
    question: 'What permission does `chmod 755 run_sim.sh` grant to the file owner, group, and others?',
    options: [
      'Owner: rwx, Group: r-x, Others: r-x',
      'Owner: rwx, Group: rwx, Others: rwx',
      'Owner: rw-, Group: r--, Others: r--',
      'Owner: r-x, Group: rw-, Others: rwx'
    ],
    correctAnswer: 0,
    explanation: 'Octal 7 = rwx (4+2+1), Octal 5 = r-x (4+0+1). 755 gives full access to owner, and read/execute to group and others.'
  },
  {
    id: 'lin-5',
    topicId: 'linux',
    category: 'Process Control',
    question: 'Which command sends a graceful termination signal (SIGTERM) to a stuck EDA simulation process with PID 8421?',
    options: ['kill -9 8421', 'kill -15 8421', 'stop 8421', 'ps -k 8421'],
    correctAnswer: 1,
    explanation: '`kill -15` (SIGTERM) requests a process to terminate gracefully, allowing it to clean up temporary license locks and dump wave files.'
  },
  {
    id: 'lin-6',
    topicId: 'linux',
    category: 'Makefiles',
    question: 'In a Makefile, what does the special automatic variable `$@` represent inside a rule target?',
    options: ['The first prerequisite', 'All prerequisites', 'The target name of the rule', 'The current shell path'],
    correctAnswer: 2,
    explanation: 'In GNU Make, `$@` expands to the target filename being built, `$^` represents all prerequisites, and `$<` represents the first prerequisite.'
  },
  {
    id: 'lin-7',
    topicId: 'linux',
    category: 'Environment Variables',
    question: 'Which Linux environment variable informs EDA tools (VCS, ModelSim, Innovus) where to search for dynamic shared libraries?',
    options: ['PATH', 'LD_LIBRARY_PATH', 'EDA_HOME', 'PYTHONPATH'],
    correctAnswer: 1,
    explanation: '`LD_LIBRARY_PATH` specifies additional directory paths where the ELF dynamic linker should search for shared libraries (`.so` files).'
  },
  {
    id: 'lin-8',
    topicId: 'linux',
    category: 'Find Command',
    question: 'How do you find all `.v` files in the current workspace modified within the last 24 hours?',
    options: [
      'find . -name "*.v" -mtime -1',
      'find . -type v -time 1d',
      'search *.v -last 24h',
      'ls -l *.v --recent'
    ],
    correctAnswer: 0,
    explanation: '`find . -name "*.v" -mtime -1` searches for filenames ending in `.v` modified (`mtime`) less than 1 day ago (`-1`).'
  },
  {
    id: 'lin-9',
    topicId: 'linux',
    category: 'Symbolic Links',
    question: 'Which command creates a symbolic link named `latest_run` pointing to directory `sim_output_2026_08_08`?',
    options: [
      'ln -s sim_output_2026_08_08 latest_run',
      'ln latest_run sim_output_2026_08_08',
      'link --sym sim_output_2026_08_08 latest_run',
      'cp -s latest_run sim_output_2026_08_08'
    ],
    correctAnswer: 0,
    explanation: '`ln -s target link_name` creates a soft symbolic link pointing `link_name` to `target`.'
  },
  {
    id: 'lin-10',
    topicId: 'linux',
    category: 'Job Redirection',
    question: 'How do you redirect both standard output (stdout) and standard error (stderr) of a simulation run into `sim.log`?',
    options: [
      './simv > sim.log 2>&1',
      './simv >> sim.log | error',
      './simv 1> sim.log & 2',
      './simv -out sim.log'
    ],
    correctAnswer: 0,
    explanation: '`> sim.log` redirects stdout (file descriptor 1) to `sim.log`, and `2>&1` redirects stderr (descriptor 2) to the same stream.'
  },
  {
    id: 'lin-11',
    topicId: 'linux',
    category: 'Background Jobs',
    question: 'To execute a multi-hour synthesis job in the background that stays running even if your SSH session disconnects, use:',
    options: [
      'nohup dc_shell -f synth.tcl &',
      'run -bg dc_shell -f synth.tcl',
      'bg dc_shell -f synth.tcl',
      'exec -detach dc_shell -f synth.tcl'
    ],
    correctAnswer: 0,
    explanation: '`nohup` ignores the HUP (hangup) signal sent when SSH disconnects, and `&` runs the command in the background.'
  },
  {
    id: 'lin-12',
    topicId: 'linux',
    category: 'Disk Space Audit',
    question: 'Which command lists disk usage of subdirectories in the current path in human-readable format (MB/GB)?',
    options: ['du -sh *', 'df -k .', 'disk --summary', 'ls -lh --disk'],
    correctAnswer: 0,
    explanation: '`du -sh *` (disk usage, summary, human-readable) prints the size of each file/folder in the current directory in MB or GB.'
  },
  {
    id: 'lin-13',
    topicId: 'linux',
    category: 'Xargs',
    question: 'How do you delete all temporary waveform files ending in `.vpd` found in nested subdirectories?',
    options: [
      'find . -name "*.vpd" | xargs rm -f',
      'rm -rf *.vpd --all',
      'delete -r *.vpd',
      'find . -delete *.vpd'
    ],
    correctAnswer: 0,
    explanation: '`find` locates all matching file paths and pipes them to `xargs rm -f`, which passes the files as arguments to `rm` efficiently.'
  },
  {
    id: 'lin-14',
    topicId: 'linux',
    category: 'Pipes & Sorting',
    question: 'How do you count the total number of unique error messages in a regression log file?',
    options: [
      'grep "ERROR" sim.log | sort | uniq -c',
      'grep "ERROR" sim.log | count -u',
      'cat sim.log | find "ERROR" | total',
      'awk "ERROR" sim.log | unique'
    ],
    correctAnswer: 0,
    explanation: '`grep` filters error lines, `sort` groups identical lines together (required for `uniq`), and `uniq -c` counts unique occurrences.'
  },
  {
    id: 'lin-15',
    topicId: 'linux',
    category: 'Tar Archives',
    question: 'Which command compresses an entire netlist directory `netlists/` into a compressed archive `netlists.tar.gz`?',
    options: [
      'tar -czvf netlists.tar.gz netlists/',
      'zip -r netlists.tar.gz netlists/',
      'tar -xzvf netlists/ netlists.tar.gz',
      'compress netlists/ netlists.tar.gz'
    ],
    correctAnswer: 0,
    explanation: '`tar -czvf archive.tar.gz directory/` creates (`-c`), gzips (`-z`), displays verbose files (`-v`), and names the file (`-f`).'
  },
  {
    id: 'lin-16',
    topicId: 'linux',
    category: 'Exit Codes',
    question: 'In Bash scripts, which variable holds the exit status code of the immediately preceding command?',
    options: ['$?', '$$', '$!', '$0'],
    correctAnswer: 0,
    explanation: '`$?` contains the exit status of the last executed command (0 indicates success, non-zero indicates an error).'
  },
  {
    id: 'lin-17',
    topicId: 'linux',
    category: 'Tail Log Monitoring',
    question: 'How do you monitor a long-running synthesis log `synth.log` live as new output lines are appended?',
    options: ['tail -f synth.log', 'head -n 100 synth.log', 'watch -l synth.log', 'cat --live synth.log'],
    correctAnswer: 0,
    explanation: '`tail -f filename` (follow) continuously streams new appended lines from the log file to stdout in real-time.'
  },
  {
    id: 'lin-18',
    topicId: 'linux',
    category: 'Diff Tool',
    question: 'Which tool compares two RTL netlist files line by line and highlights added/deleted code blocks?',
    options: ['diff -u golden.v test.v', 'cmp -b golden.v test.v', 'grep -d golden.v test.v', 'sed -diff golden.v test.v'],
    correctAnswer: 0,
    explanation: '`diff -u` generates a unified diff showing exact line insertions and deletions between two text files.'
  },
  {
    id: 'lin-19',
    topicId: 'linux',
    category: 'System Resource Top',
    question: 'Which command interactively displays real-time Linux CPU utilization, memory consumption, and active EDA tool processes?',
    options: ['top (or htop)', 'ps -aux', 'free -m', 'vmstat -l'],
    correctAnswer: 0,
    explanation: '`top` and `htop` provide a dynamic, real-time interactive view of running processes, CPU core loads, and system memory RAM usage.'
  },
  {
    id: 'lin-20',
    topicId: 'linux',
    category: 'Shell Aliases',
    question: 'How do you create a persistent Bash alias `runvcs` that runs `./simv -gui`?',
    options: [
      'alias runvcs="./simv -gui" added to ~/.bashrc',
      'setenv runvcs="./simv -gui"',
      'export runvcs="./simv -gui"',
      'link runvcs="./simv -gui"'
    ],
    correctAnswer: 0,
    explanation: 'Defining `alias runvcs="./simv -gui"` in `~/.bashrc` creates a convenient command shortcut that persists across new shell terminal sessions.'
  },

  // ==========================================
  // FPGA ARCHITECTURE & P&R (20 QUESTIONS)
  // ==========================================
  {
    id: 'fpga-1',
    topicId: 'fpga',
    category: 'CLB & LUT Basics',
    question: 'What is the fundamental building block used inside an FPGA Configurable Logic Block (CLB) to implement arbitrary truth tables?',
    options: ['Look-Up Table (LUT)', 'Logic Gate Array (AND-OR)', 'Transistor Matrix', 'ROM Decoder'],
    correctAnswer: 0,
    explanation: 'A Look-Up Table (LUT) is a small SRAM memory that stores output values for any Boolean function of its inputs (e.g. a 6-input LUT can implement any 6-variable function).'
  },
  {
    id: 'fpga-2',
    topicId: 'fpga',
    category: 'Dedicated Hardware',
    question: 'What dedicated hard-IP block is integrated into modern FPGAs for ultra-fast digital signal processing and MAC (Multiply-Accumulate) operations?',
    options: ['DSP48 Slice', 'BRAM Block', 'CMT / PLL', 'IOB Pad'],
    correctAnswer: 0,
    explanation: 'DSP48 slices are hard-coded multiplier-accumulator units capable of high-speed pipelined arithmetic without consuming soft LUT fabric.'
  },
  {
    id: 'fpga-3',
    topicId: 'fpga',
    category: 'Memory Architecture',
    question: 'What is the difference between Distributed RAM and Block RAM (BRAM) in an FPGA?',
    options: [
      'Distributed RAM is built from LUT SRAM bits, while BRAM consists of dedicated dual-port SRAM blocks.',
      'Distributed RAM is non-volatile flash memory.',
      'BRAM can only be used for ROM.',
      'Distributed RAM has higher capacity than BRAM.'
    ],
    correctAnswer: 0,
    explanation: 'Distributed RAM repurposes standard LUT SRAM resources for small fast memories, whereas Block RAM (BRAM) consists of large embedded dedicated memory blocks.'
  },
  {
    id: 'fpga-4',
    topicId: 'fpga',
    category: 'Clocking & CMT',
    question: 'What is the primary function of a Phase-Locked Loop (PLL) or Clock Management Tile (CMT) in an FPGA?',
    options: [
      'Clock frequency synthesis, phase shifting, and jitter attenuation',
      'Store bitstream configuration data',
      'Perform 64-bit multiplication',
      'Drive high-speed transceiver I/O'
    ],
    correctAnswer: 0,
    explanation: 'CMTs contain PLLs/MMCMs used to multiply or divide input reference clocks, adjust phase shifts, and clean up clock jitter across global clock networks.'
  },
  {
    id: 'fpga-5',
    topicId: 'fpga',
    category: 'Timing Slack Calculation',
    question: 'How is Setup Time Slack calculated during Static Timing Analysis (STA)?',
    options: ['Setup Slack = Required Arrival Time - Actual Data Arrival Time', 'Setup Slack = Data Arrival Time + Clock Frequency', 'Setup Slack = Hold Time - Setup Time', 'Setup Slack = Clock Skew / Period'],
    correctAnswer: 0,
    explanation: 'Setup Slack = Required Time - Arrival Time. A positive slack indicates the setup timing constraint is met; negative slack indicates a timing violation.'
  },
  {
    id: 'fpga-6',
    topicId: 'fpga',
    category: 'Place and Route P&R',
    question: 'During FPGA compilation flow, what stage maps logical gates to physical LUTs, Flip-Flops, and DSP blocks inside the chip grid?',
    options: ['Synthesis', 'Placement', 'Routing', 'Bitstream Generation'],
    correctAnswer: 1,
    explanation: 'Placement assigns synthesized logic primitives to specific physical CLB, LUT, and register locations on the FPGA die.'
  },
  {
    id: 'fpga-7',
    topicId: 'fpga',
    category: 'Timing Closure',
    question: 'What is a "False Path" constraint in SDC (Synopsys Design Constraints)?',
    options: [
      'A path that exists physically in netlist but is logically impossible or timing-irrelevant, instructing STA tools to ignore timing on it.',
      'A routing path with negative hold slack.',
      'A path connected to a faulty LUT.',
      'A clock tree reset signal.'
    ],
    correctAnswer: 0,
    explanation: 'Setting `set_false_path` tells timing engines to skip timing analysis on non-critical paths such as static configuration registers or asynchronous test signals.'
  },
  {
    id: 'fpga-8',
    topicId: 'fpga',
    category: 'Bitstream Configuration',
    question: 'SRAM-based FPGAs (e.g. Xilinx Artix/Kintex/Virtex) are classified as volatile memory devices because:',
    options: [
      'They lose configuration on power-down and must reload bitstream from external SPI Flash at startup.',
      'They cannot be reprogrammed.',
      'They operate at lower voltage.',
      'They do not support Block RAM.'
    ],
    correctAnswer: 0,
    explanation: 'SRAM-based FPGA routing matrices and LUT configurations are volatile, requiring an external non-volatile PROM/Flash device to load configuration bitstream on boot.'
  },
  {
    id: 'fpga-9',
    topicId: 'fpga',
    category: 'Multi-Cycle Paths',
    question: 'When should a Multi-Cycle Path constraint (`set_multicycle_path`) be declared in FPGA design?',
    options: [
      'When data path logic requires more than one clock cycle to settle before being sampled by destination register.',
      'When clock frequency is above 1 GHz.',
      'When routing through Block RAM.',
      'When using 2-stage synchronizers.'
    ],
    correctAnswer: 0,
    explanation: 'Multi-cycle path constraints relax the setup timing check to N clock cycles for complex arithmetic or multi-cycle enable-driven data paths.'
  },
  {
    id: 'fpga-10',
    topicId: 'fpga',
    category: 'Carry Chains',
    question: 'Why do FPGA CLBs contain dedicated fast carry logic multiplexers (e.g. CARRY4 / CARRY8)?',
    options: [
      'To enable high-speed arithmetic addition and comparison without routing carry signals through slow general-purpose interconnects.',
      'To implement shift registers.',
      'To buffer global clocks.',
      'To interface with DDR memory.'
    ],
    correctAnswer: 0,
    explanation: 'Dedicated carry chains physically connect adjacent LUTs vertically, providing sub-nanosecond carry propagation for fast adders and counters.'
  },
  {
    id: 'fpga-11',
    topicId: 'fpga',
    category: 'Metastability Protection',
    question: 'When interfacing an asynchronous external push-button input into an FPGA clock domain, what circuit is strictly required?',
    options: ['A 2-stage Flip-Flop Synchronizer', 'A pull-down resistor', 'A DSP slice', 'A PLL multiplier'],
    correctAnswer: 0,
    explanation: 'Asynchronous external signals can transition near clock edges, causing flip-flop setup/hold violations and metastability unless passed through a 2-stage synchronizer.'
  },
  {
    id: 'fpga-12',
    topicId: 'fpga',
    category: 'I/O Standards',
    question: 'Which differential I/O standard is widely used on FPGAs for ultra-high-speed noise-immune data transfer (e.g. video/LVDS, PCIe)?',
    options: ['LVCMOS33', 'LVDS (Low-Voltage Differential Signaling)', 'TTL 5V', 'Open-Drain'],
    correctAnswer: 1,
    explanation: 'LVDS uses low voltage swings (~350mV) across a differential pair, offering high speed, low power, and excellent common-mode noise immunity.'
  },
  {
    id: 'fpga-13',
    topicId: 'fpga',
    category: 'ASIC vs FPGA',
    question: 'What is a major advantage of an FPGA over a custom ASIC (Application Specific Integrated Circuit)?',
    options: [
      'Zero NRE (Non-Recurring Engineering) cost and rapid field reprogrammability / shorter time-to-market.',
      'Higher max clock frequency than custom silicon.',
      'Lower unit cost at 10 million units volume.',
      'Zero static leakage power.'
    ],
    correctAnswer: 0,
    explanation: 'FPGAs eliminate multi-million dollar ASIC tape-out mask costs (NRE) and allow instant bug fixes or firmware upgrades in the field.'
  },
  {
    id: 'fpga-14',
    topicId: 'fpga',
    category: 'Partial Reconfiguration',
    question: 'What is FPGA Partial Reconfiguration (PR)?',
    options: [
      'Reprogramming a designated region of the FPGA fabric dynamically while the remaining chip logic continues running uninterrupted.',
      'Synthesizing only half the Verilog design.',
      'Erasing external Flash memory.',
      'Bypassing timing constraints.'
    ],
    correctAnswer: 0,
    explanation: 'Partial Reconfiguration allows active FPGAs to reconfigure specific hardware modules over PCIe or ICAP without halting surrounding logic.'
  },
  {
    id: 'fpga-15',
    topicId: 'fpga',
    category: 'High-Level Synthesis HLS',
    question: 'What does High-Level Synthesis (HLS) software (such as Vivado HLS) do?',
    options: [
      'Compiles C/C++ or SystemC algorithms directly into synthesizable Verilog/VHDL RTL code.',
      'Generates GDSII layout files.',
      'Performs board schematic entry.',
      'Translates Verilog into Java.'
    ],
    correctAnswer: 0,
    explanation: 'HLS elevates design abstraction by compiling high-level C/C++ code into hardware pipelines in Verilog or VHDL.'
  },
  {
    id: 'fpga-16',
    topicId: 'fpga',
    category: 'Pipelining',
    question: 'What is the effect of inserting pipeline registers into a long combinational data path on an FPGA?',
    options: [
      'Increases maximum achievable clock frequency (f_max) at the expense of adding latency cycles.',
      'Decreases latency to zero.',
      'Reduces total flip-flop count.',
      'Increases setup time violations.'
    ],
    correctAnswer: 0,
    explanation: 'Pipelining breaks a long critical path into shorter stages, drastically increasing clock frequency (f_max) while adding N cycles of throughput latency.'
  },
  {
    id: 'fpga-17',
    topicId: 'fpga',
    category: 'JTAG Debugging',
    question: 'What standard 4-wire IEEE interface is used to program FPGAs and perform hardware debugging via embedded logic analyzers (e.g. Integrated Logic Analyzer ILA)?',
    options: ['IEEE 1149.1 JTAG (TDI, TDO, TCK, TMS)', 'SPI Bus', 'I2C Bus', 'UART Serial'],
    correctAnswer: 0,
    explanation: 'JTAG (IEEE 1149.1) provides boundary-scan testing, bitstream programming, and internal signal debugging using TDI, TDO, TCK, and TMS signals.'
  },
  {
    id: 'fpga-18',
    topicId: 'fpga',
    category: 'Routing Congestion',
    question: 'What happens when an FPGA design experiences severe routing congestion during Place & Route?',
    options: [
      'P&R tool uses longer circuitous wire paths, inflating RC delays and causing setup timing violations.',
      'Synthesis tool automatically deletes logic.',
      'Bitstream size becomes smaller.',
      'Clock frequency doubles.'
    ],
    correctAnswer: 0,
    explanation: 'Routing congestion occurs when available interconnect channels are exhausted, forcing router tools to take detour paths that add wire delay and hurt timing closure.'
  },
  {
    id: 'fpga-19',
    topicId: 'fpga',
    category: 'Clock Skew',
    question: 'Clock Skew is defined as:',
    options: [
      'The difference in clock edge arrival time between two destination registers in the same clock tree.',
      'The variation in clock period over time (jitter).',
      'The delay through a LUT.',
      'The duration of reset pulse.'
    ],
    correctAnswer: 0,
    explanation: 'Clock skew is spatial variation in clock edge arrival times across registers. Excessive positive skew can cause hold violations.'
  },
  {
    id: 'fpga-20',
    topicId: 'fpga',
    category: 'Clock Enable CE',
    question: 'Why is using dedicated Clock Enable (CE) signals on flip-flops preferred over gated clocks (`clk & enable`) in FPGAs?',
    options: [
      'Clock gating creates clock glitches and skew on global clock networks, whereas CE safely controls register sampling.',
      'CE increases dynamic power.',
      'Gated clocks are not supported by Verilog.',
      'CE removes the need for reset.'
    ],
    correctAnswer: 0,
    explanation: 'Gating global clock lines with logic gates introduces clock glitches and routing skew. Using dedicated register CE pins keeps global clock trees clean.'
  },

  // ==========================================
  // ELECTRONIC DEVICES & PHYSICS (20 QUESTIONS)
  // ==========================================
  {
    id: 'ed-1',
    topicId: 'electronics_devices',
    category: 'Carrier Transport',
    question: 'In an intrinsic semiconductor at thermal equilibrium, how does electron mobility (mu_n) change as temperature increases at high temperatures (>300K)?',
    options: [
      'Increases due to thermal generation of carriers',
      'Decreases due to lattice (acoustic phonon) scattering',
      'Remains constant regardless of temperature',
      'Becomes infinite near room temperature'
    ],
    correctAnswer: 1,
    explanation: 'At higher temperatures, acoustic phonon (lattice) scattering becomes the dominant scattering mechanism, causing carrier mobility to decrease proportionally to T^(-1.5) or T^(-2.5).'
  },
  {
    id: 'ed-2',
    topicId: 'electronics_devices',
    category: 'Band Theory & Fermi Level',
    question: 'When a silicon crystal is doped with donor impurities (n-type), where does the Fermi level (Ef) shift relative to the intrinsic Fermi level (Ei)?',
    options: [
      'Shifts downwards towards the valence band edge (Ev)',
      'Shifts upwards towards the conduction band edge (Ec)',
      'Remains strictly in the middle of the bandgap',
      'Shifts outside the bandgap into vacuum energy'
    ],
    correctAnswer: 1,
    explanation: 'Adding donor impurities introduces occupied energy states near the conduction band edge, increasing electron density and elevating Ef closer to Ec according to Ef - Ei = k*T*ln(Nd/ni).'
  },
  {
    id: 'ed-3',
    topicId: 'electronics_devices',
    category: 'PN Junction Physics',
    question: 'What happens to the depletion region width (W_dep) of a p-n junction diode under reverse bias condition?',
    options: [
      'Decreases linearly',
      'Increases as mobile carriers are pulled away from the junction',
      'Remains unchanged',
      'Collapses to zero width'
    ],
    correctAnswer: 1,
    explanation: 'Applying reverse bias increases the total potential barrier (V_bi + V_R), pulling mobile electrons and holes further from the junction and expanding the depleted space-charge region.'
  },
  {
    id: 'ed-4',
    topicId: 'electronics_devices',
    category: 'Diodes & Breakdown',
    question: 'Which breakdown mechanism dominates in heavily doped (>10^18 cm^-3) p-n junctions at low reverse breakdown voltages (<4V)?',
    options: [
      'Avalanche Breakdown',
      'Zener Breakdown (Quantum Tunneling)',
      'Thermal Runaway Breakdown',
      'Dielectric Gate Breakdown'
    ],
    correctAnswer: 1,
    explanation: 'Heavy doping produces an extremely thin depletion layer where intense electric fields enable quantum mechanical tunneling of valence electrons directly into the conduction band (Zener breakdown).'
  },
  {
    id: 'ed-5',
    topicId: 'electronics_devices',
    category: 'Carrier Transport',
    question: 'According to the Einstein Relation for semiconductors, what is the ratio of carrier diffusion coefficient (D) to mobility (mu) equal to?',
    options: [
      'Built-in Potential (V_bi)',
      'Thermal Voltage (Vt = k*T / q)',
      'Bandgap Voltage (Eg / q)',
      'Saturation Velocity (v_sat)'
    ],
    correctAnswer: 1,
    explanation: 'The Einstein relation states D / mu = k*T / q = Vt, linking thermal carrier diffusion to electric field mobility via the thermal voltage (~26mV at 300K).'
  },
  {
    id: 'ed-6',
    topicId: 'electronics_devices',
    category: 'Carrier Characterization',
    question: 'In a Hall Effect measurement experiment, a semiconductor sample exhibits a negative Hall coefficient (R_H < 0). What is the dominant carrier type?',
    options: [
      'Holes (p-type)',
      'Electrons (n-type)',
      'Positive ions',
      'Photons'
    ],
    correctAnswer: 1,
    explanation: 'The Hall coefficient R_H = -1 / (q * n) for electron conduction. A negative sign indicates that negatively charged electrons are deflected by the magnetic field.'
  },
  {
    id: 'ed-7',
    topicId: 'electronics_devices',
    category: 'MOS Physics',
    question: 'Strong inversion in an MOS capacitor on p-type silicon occurs when the surface potential (psi_s) reaches:',
    options: [
      'phi_F',
      '2 * phi_F',
      'phi_F / 2',
      '0 Volts'
    ],
    correctAnswer: 1,
    explanation: 'Strong inversion is defined when the surface electron concentration at the oxide-silicon interface equals the bulk acceptor concentration, corresponding to surface potential psi_s = 2 * phi_F.'
  },
  {
    id: 'ed-8',
    topicId: 'electronics_devices',
    category: 'Special Diodes',
    question: 'Why do Metal-Semiconductor Schottky barrier diodes switch much faster than silicon PN junction diodes?',
    options: [
      'Schottky diodes operate purely as majority-carrier devices with negligible minority-carrier storage delay',
      'Schottky diodes have much higher energy bandgaps',
      'Schottky diodes use p-type metal channels',
      'Schottky diodes have larger depletion capacitance'
    ],
    correctAnswer: 0,
    explanation: 'Schottky diodes rely on majority carriers crossing a metal-semiconductor barrier, eliminating minority carrier recombination delay (reverse recovery time) during high-speed switching.'
  },
  {
    id: 'ed-9',
    topicId: 'electronics_devices',
    category: 'BJT Fundamentals',
    question: 'What physical phenomenon causes the Early Effect (Base-Width Modulation) in a Bipolar Junction Transistor (BJT)?',
    options: [
      'Expansion of the reverse-biased collector-base depletion layer into the neutral base region as V_CE increases',
      'High thermal noise in the emitter',
      'Recombination of carriers in the collector',
      'Oxide charge trapping'
    ],
    correctAnswer: 0,
    explanation: 'Increasing V_CE widens the reverse-biased collector-base depletion region, narrowing the effective neutral base width W_B and increasing output collector current slope.'
  },
  {
    id: 'ed-10',
    topicId: 'electronics_devices',
    category: 'Short-Channel Effects',
    question: 'In short-channel MOSFETs, carrier velocity saturates at high lateral electric fields (~10^4 V/cm) due to:',
    options: [
      'Optical phonon emission scattering',
      'Increase in silicon bandgap',
      'Decrease in oxide capacitance',
      'Subthreshold drain leakage'
    ],
    correctAnswer: 0,
    explanation: 'At high electric fields, energetic carriers emit optical phonons, clamping drift velocity to a maximum saturation speed v_sat ~ 10^7 cm/s regardless of further electric field increase.'
  },
  {
    id: 'ed-11',
    topicId: 'electronics_devices',
    category: 'MOS Physics',
    question: 'What is the theoretical ideal lower limit for the Subthreshold Swing (S) of a conventional planar MOSFET at room temperature (300K)?',
    options: [
      '30 mV/decade',
      '60 mV/decade',
      '100 mV/decade',
      '0 mV/decade'
    ],
    correctAnswer: 1,
    explanation: 'The thermionic Boltzmann energy distribution tail limits conventional MOSFET subthreshold slope to S = (k*T/q)*ln(10)*(1 + Cd/Cox) >= 60 mV/decade at 300K.'
  },
  {
    id: 'ed-12',
    topicId: 'electronics_devices',
    category: 'Advanced Transistors',
    question: 'Why are Gate-All-Around (GAA / Nanosheet) FET architectures replacing FinFETs at sub-3nm nodes?',
    options: [
      'GAA surrounds the channel on all 4 sides, eliminating drain-induced barrier lowering (DIBL) and maximizing electrostatic gate control',
      'GAA eliminates EUV lithography requirements',
      'GAA transistors require no source or drain contacts',
      'GAA uses germanium-only bulk substrates'
    ],
    correctAnswer: 0,
    explanation: 'Nanosheet GAAFETs enclose the channel on all 4 sides with gate metal, providing complete electrostatic channel control, reduced short-channel leakage, and higher drive current density.'
  },
  {
    id: 'ed-13',
    topicId: 'electronics_devices',
    category: 'Advanced Materials',
    question: 'Why was High-k dielectric (e.g. HfO2, k ~ 25) introduced to replace Silicon Dioxide (SiO2, k = 3.9) as gate insulator in advanced CMOS nodes?',
    options: [
      'To allow a physically thicker insulator layer while maintaining high gate capacitance (Cox), drastically suppressing direct quantum tunneling leakage',
      'To increase threshold voltage',
      'To make silicon transparent to light',
      'To decrease carrier mobility'
    ],
    correctAnswer: 0,
    explanation: 'Replacing thin SiO2 with a physically thicker High-k oxide maintains high equivalent oxide thickness (EOT) capacitance while suppressing direct gate tunneling current by orders of magnitude.'
  },
  {
    id: 'ed-14',
    topicId: 'electronics_devices',
    category: 'Optoelectronics',
    question: 'Why is Gallium Arsenide (GaAs) used for semiconductor light-emitting diodes (LEDs) whereas Silicon (Si) is unsuitable?',
    options: [
      'GaAs has a direct bandgap where conduction minimum aligns with valence maximum in k-space, enabling efficient radiative photon emission',
      'Silicon has no conduction band',
      'GaAs has zero electrical resistivity',
      'Silicon cannot be doped with impurities'
    ],
    correctAnswer: 0,
    explanation: 'In direct bandgap semiconductors like GaAs, electron-hole recombination conserves momentum directly without requiring a lattice phonon, allowing efficient light emission.'
  },
  {
    id: 'ed-15',
    topicId: 'electronics_devices',
    category: 'Optoelectronics',
    question: 'In a PN junction photodiode operating under illumination, photo-generated electron-hole pairs created within the depletion region are separated by:',
    options: [
      'The strong built-in electric field across the depletion region',
      'Thermal convection currents',
      'Carrier diffusion gradients alone',
      'External magnetic deflection'
    ],
    correctAnswer: 0,
    explanation: 'The intense built-in electric field in the depletion zone sweeps photo-generated electrons towards the n-side and holes towards the p-side, producing measurable photocurrent.'
  },
  {
    id: 'ed-16',
    topicId: 'electronics_devices',
    category: 'MOS Capacitors',
    question: 'Applying a negative gate voltage (Vg < 0) to an MOS capacitor on a p-type silicon substrate places the surface in which state?',
    options: [
      'Accumulation',
      'Depletion',
      'Inversion',
      'Breakdown'
    ],
    correctAnswer: 0,
    explanation: 'A negative gate potential attracts positive majority holes from the p-type substrate to accumulate at the oxide-silicon interface, putting the MOS capacitor in Accumulation mode.'
  },
  {
    id: 'ed-17',
    topicId: 'electronics_devices',
    category: 'RF & High Frequency',
    question: 'The cutoff frequency (f_T) of a MOSFET or BJT represents the frequency at which:',
    options: [
      'Small-signal short-circuit current gain drops to unity (1 or 0 dB)',
      'Power gain becomes infinite',
      'Noise figure reaches maximum',
      'Output resistance drops to zero'
    ],
    correctAnswer: 0,
    explanation: 'Cutoff frequency f_T = gm / (2*pi*C_in) is the unity-current-gain frequency limit where the transistor can no longer amplify signal current.'
  },
  {
    id: 'ed-18',
    topicId: 'electronics_devices',
    category: 'Quantum Devices',
    question: 'A Tunnel Diode exhibits Negative Differential Resistance (NDR) in its forward I-V characteristics primarily due to:',
    options: [
      'Quantum mechanical tunneling across ultra-narrow degenerate PN junction depletion barriers under low forward bias',
      'Thermal avalanche breakdown',
      'Oxide charge trapping',
      'Impact ionization'
    ],
    correctAnswer: 0,
    explanation: 'Degenerate doping creates a tiny depletion region where forward bias aligns filled p-side valence states with empty n-side conduction states, enabling quantum tunneling until band overlap ends.'
  },
  {
    id: 'ed-19',
    topicId: 'electronics_devices',
    category: 'Power Semiconductors',
    question: 'What is a major advantage of Wide Bandgap (WBG) materials like Silicon Carbide (SiC) and Gallium Nitride (GaN) over Silicon in power electronics?',
    options: [
      '~10x higher critical breakdown electric field, enabling higher blocking voltages and lower on-resistance R_DS(on)',
      'Lower thermal conductivity',
      'Lower electron saturation velocity',
      'Higher intrinsic carrier concentration'
    ],
    correctAnswer: 0,
    explanation: 'SiC and GaN possess large bandgaps (~3.2 - 3.4 eV), enabling critical electric fields ~10x higher than Si, permitting thinner drift layers with extremely low on-resistance at high voltages.'
  },
  {
    id: 'ed-20',
    topicId: 'electronics_devices',
    category: 'Reliability & Aging',
    question: 'Hot Carrier Injection (HCI) in short-channel MOSFETs degrades long-term device performance because:',
    options: [
      'Energetic carriers accelerated near the drain inject into gate oxide, creating interface traps that shift threshold voltage (Vth)',
      'Thermal heat melts source contacts',
      'Substrate resistance becomes negative',
      'Gate metal delaminates'
    ],
    correctAnswer: 0,
    explanation: 'High electric fields near the drain energize ("heat") carriers, injecting them into gate oxide where they form interface traps and fixed charges that shift Vth and degrade transconductance.'
  },

  // ==========================================
  // SOC DESIGN & ARCHITECTURE (20 QUESTIONS)
  // ==========================================
  {
    id: 'soc-1',
    topicId: 'soc_design',
    category: 'Interconnect Protocols',
    question: 'In the AMBA AXI4 protocol, what feature enables high system throughput by allowing multiple outstanding transactions without waiting for responses?',
    options: [
      'Split transaction ID tags (ARID/AWID) and out-of-order transaction completion',
      'Single-cycle synchronous bus locking',
      'Fixed 8-bit data width limitation',
      'Polling-based bus request'
    ],
    correctAnswer: 0,
    explanation: 'AXI4 assigns transaction ID tags (ARID/AWID), enabling slave peripherals to process read/write requests out-of-order and interleave data streams for maximum bus bandwidth.'
  },
  {
    id: 'soc-2',
    topicId: 'soc_design',
    category: 'Memory & Cache Coherence',
    question: 'In a multi-core SoC using the MESI coherence protocol, what does the "E" (Exclusive) state signify for a cache line?',
    options: [
      'The line is present only in the local cache and matches main memory (clean)',
      'The line is present in multiple caches and is dirty',
      'The line is invalid and must be re-fetched',
      'The line is locked for DMA access only'
    ],
    correctAnswer: 0,
    explanation: 'In MESI, Exclusive means the cache line resides solely in this core local cache and is identical to main memory; writing to it transitions it to Modified without broadcasting a bus invalidate.'
  },
  {
    id: 'soc-3',
    topicId: 'soc_design',
    category: 'SoC Interconnects',
    question: 'Why do modern high-performance SoCs (>100 IP cores) use Network-on-Chip (NoC) packet-routed topologies instead of shared crossbar buses?',
    options: [
      'NoC provides scalable bisection bandwidth, modular routing, and removes global high-capacitance wire routing bottlenecks',
      'NoC eliminates the need for system clocks',
      'NoC requires fewer metal layers',
      'NoC runs at double supply voltage'
    ],
    correctAnswer: 0,
    explanation: 'Packet-switched NoC networks replace long global bus wires with localized router nodes, providing spatial concurrency, predictable latency, and high bisection bandwidth.'
  },
  {
    id: 'soc-4',
    topicId: 'soc_design',
    category: 'Low-Power SoC Design',
    question: 'What is the primary function of Unified Power Format (UPF / IEEE 1801) in SoC design flow?',
    options: [
      'Declares power domains, isolation cells, retention registers, and level shifters for multi-VDD power-gated designs',
      'Synthesizes C code into SystemVerilog',
      'Generates test pattern vectors for boundary scan',
      'Calculates parasitic RC extraction'
    ],
    correctAnswer: 0,
    explanation: 'UPF specifies power intent (power domains, level shifter insertion rules, state retention registers, and isolation logic) independently of functional RTL logic.'
  },
  {
    id: 'soc-5',
    topicId: 'soc_design',
    category: 'Clock Domain Crossing',
    question: 'In SoC CDC design, what is the primary risk when transferring multi-bit data vectors across asynchronous clock domains without handshaking?',
    options: [
      'Data incoherency / bus skew where destination domain samples a mix of new and old bit values due to path delay differences',
      'Clock frequency doubling',
      'Loss of ground reference',
      'Automatic thermal shutdown'
    ],
    correctAnswer: 0,
    explanation: 'When multi-bit signals cross clock boundaries, individual bit path delays differ slightly; sampling during transition captures corrupt, unsynchronized intermediate bit combinations.'
  },
  {
    id: 'soc-6',
    topicId: 'soc_design',
    category: 'Peripherals & System IP',
    question: 'What is the key system advantage of integrating a Direct Memory Access (DMA) controller in an SoC?',
    options: [
      'Transfers bulk data blocks between peripherals and memory independently without burdening CPU core compute cycles',
      'Executes ARM assembly code faster',
      'Increases L1 cache size',
      'Eliminates static power dissipation'
    ],
    correctAnswer: 0,
    explanation: 'A DMA controller manages high-speed hardware memory transfers (e.g. Ethernet packet buffers to DRAM) directly, freeing the CPU core to perform computation in parallel.'
  },
  {
    id: 'soc-7',
    topicId: 'soc_design',
    category: 'Low-Power Optimization',
    question: 'How does automated Clock Gating reduce dynamic power consumption in an SoC?',
    options: [
      'Disables clock toggling to register banks when data enable input is inactive, preventing dynamic C*V^2*f switching power',
      'Reduces supply voltage VDD to zero',
      'Slows down CPU instruction execution',
      'Increases setup time margin'
    ],
    correctAnswer: 0,
    explanation: 'Clock gating uses Integrated Clock Gating (ICG) cells to shut off clock tree toggling to idle register banks, saving significant clock network dynamic power.'
  },
  {
    id: 'soc-8',
    topicId: 'soc_design',
    category: 'Power Management',
    question: 'Dynamic Voltage and Frequency Scaling (DVFS) exploits which relationship to optimize power during low workloads?',
    options: [
      'Lowering operating frequency allows scaling down VDD, yielding quadratic/cubic reductions in dynamic power (P proportional to V^2 * f)',
      'Lowering frequency reduces static leakage to zero',
      'Increasing voltage speeds up static RAM',
      'Dynamic power is independent of supply voltage'
    ],
    correctAnswer: 0,
    explanation: 'Because circuit gate delay scales with supply voltage, reducing performance demand allows scaling down both frequency f and supply voltage VDD, achieving steep power savings.'
  },
  {
    id: 'soc-9',
    topicId: 'soc_design',
    category: 'Multi-VDD Implementation',
    question: 'Where MUST a Level Shifter cell be inserted in a multi-voltage SoC layout?',
    options: [
      'On signals crossing from a lower voltage domain (VDD_low) to a higher voltage domain (VDD_high) to ensure full PMOS gate turn-off',
      'Inside the CPU ALU core',
      'On the global clock generator output',
      'Between JTAG pins and ground'
    ],
    correctAnswer: 0,
    explanation: 'Driving a VDD_high gate with a VDD_low signal fails to turn off PMOS transistors completely, causing massive short-circuit current; level shifters restore full voltage swing.'
  },
  {
    id: 'soc-10',
    topicId: 'soc_design',
    category: 'Power-Gating & Isolation',
    question: 'What is the purpose of an Isolation Cell placed at the boundary of a power-gated IP block?',
    options: [
      'Clamps boundary signals to a fixed valid logic level (0 or 1) when the IP block is powered OFF, preventing floating inputs on active domains',
      'Protects against electrostatic discharge (ESD)',
      'Increases clock frequency',
      'Stores CPU register states'
    ],
    correctAnswer: 0,
    explanation: 'When an IP block is powered down, its outputs float; isolation cells park these signals at safe "0" or "1" levels to prevent crowbar currents in powered-ON receiving logic.'
  },
  {
    id: 'soc-11',
    topicId: 'soc_design',
    category: 'Bus Protocols',
    question: 'Why is the AMBA APB (Advanced Peripheral Bus) protocol preferred for configuring simple low-bandwidth peripherals (UART, Timers, I2C)?',
    options: [
      'APB has an unpipelined, minimal 2-phase control interface with extremely low gate overhead and simple logic implementation',
      'APB supports multi-gigabit out-of-order burst transfers',
      'APB eliminates address decoding',
      'APB runs asynchronously without a clock'
    ],
    correctAnswer: 0,
    explanation: 'APB is engineered for low-power, low-complexity register access (SETUP and ENABLE cycles) without the pipeline or burst overhead of AXI/AHB.'
  },
  {
    id: 'soc-12',
    topicId: 'soc_design',
    category: 'Memory Systems',
    question: 'What primary task is performed by the DDR Memory Controller and PHY layer in an SoC?',
    options: [
      'Manages DRAM bank scheduling, refresh cycles, row precharge/activate timings, and PHY impedance/skew calibration',
      'Executes ARM assembly code',
      'Performs FFT floating point math',
      'Compresses video streams'
    ],
    correctAnswer: 0,
    explanation: 'DRAM is dynamic and volatile; the memory controller schedules bank activations, enforces strict timing delays, handles periodic auto-refreshes, and trains high-speed PHY DLLs.'
  },
  {
    id: 'soc-13',
    topicId: 'soc_design',
    category: 'SoC Security',
    question: 'In ARM TrustZone hardware architecture, how are Secure and Non-Secure software execution environments isolated?',
    options: [
      'A hardware bit (NS bit) on system bus transactions segregates secure memory regions, interrupts, and peripherals at hardware level',
      'Secure code runs strictly in software emulators',
      'Non-secure domain has no access to RAM',
      'Two separate physical chip dies are required'
    ],
    correctAnswer: 0,
    explanation: 'TrustZone extends processor states and bus channels with a hardware Security state (Non-Secure NS bit), enforcing hardware memory access restrictions across the bus matrix.'
  },
  {
    id: 'soc-14',
    topicId: 'soc_design',
    category: 'System Architecture',
    question: 'When an SoC powers up, what is the first execution step in a secure boot sequence?',
    options: [
      'CPU executes immutable Boot ROM code to verify cryptographic signatures of secondary bootloader (SBL) before loading it',
      'Linux kernel boots directly from DDR memory',
      'DMA controller copies flash into L1 cache',
      'GPU initializes display resolution'
    ],
    correctAnswer: 0,
    explanation: 'Secure boot starts in immutable Masked Boot ROM (Root of Trust), verifying digital cryptographic signatures of initial boot stage binaries stored in external flash memory.'
  },
  {
    id: 'soc-15',
    topicId: 'soc_design',
    category: 'Reset & Clocking',
    question: 'Why should reset de-assertion (release) in an SoC be synchronized to the destination clock domain?',
    options: [
      'Asynchronous reset removal near a clock edge causes setup/hold violations on reset pins, placing registers in metastable states',
      'Synchronous resets consume more area',
      'Reset signals cannot drive fan-out',
      'To prevent power domain collapse'
    ],
    correctAnswer: 0,
    explanation: 'Asserting reset asynchronously is safe, but de-asserting it near an active clock edge risks "reset recovery/removal" timing violations, causing different flip-flops to exit reset on different clock cycles.'
  },
  {
    id: 'soc-16',
    topicId: 'soc_design',
    category: 'Memory Systems',
    question: 'In an SoC cache hierarchy, what is the main benefit of a Write-Back cache policy over Write-Through?',
    options: [
      'Write operations update only the local cache line (marking it dirty), minimizing external memory bus bandwidth until replacement occurs',
      'Write-Back requires no memory bus',
      'Write-Through has lower latency on cache misses',
      'Write-Back eliminates dirty line tags'
    ],
    correctAnswer: 0,
    explanation: 'Write-back defers main memory updates until dirty cache lines are evicted, drastically reducing redundant write traffic on external system buses.'
  },
  {
    id: 'soc-17',
    topicId: 'soc_design',
    category: 'Compute Accelerators',
    question: 'Why do modern AI/Mobile SoCs integrate dedicated NPU (Neural Processing Unit) hardware accelerators alongside CPUs?',
    options: [
      'NPUs feature massively parallel MAC matrix engines designed specifically for low-precision tensor operations at 10-100x higher energy efficiency',
      'CPUs cannot multiply matrices',
      'NPUs run at 50 GHz clock frequency',
      'NPUs eliminate the need for DRAM'
    ],
    correctAnswer: 0,
    explanation: 'NPUs use specialized systolic arrays optimized for low-precision (INT8/FP16) matrix multiplication, offering orders-of-magnitude superior TOPS/Watt efficiency.'
  },
  {
    id: 'soc-18',
    topicId: 'soc_design',
    category: 'Design for Test (DFT)',
    question: 'What is the primary function of Memory BIST (MBIST) in SoC manufacturing testing?',
    options: [
      'Executes hardware test algorithms (e.g. March C-) directly on embedded SRAM arrays at full speed to detect stuck-at and coupling faults',
      'Tests board PCB trace continuity',
      'Programs serial Flash memory',
      'Measures thermal dissipation'
    ],
    correctAnswer: 0,
    explanation: 'MBIST engines generate test pattern sequences at full operational clock speeds to verify dense embedded RAM arrays and trigger redundant row/column repair logic.'
  },
  {
    id: 'soc-19',
    topicId: 'soc_design',
    category: 'Interconnect Protocols',
    question: 'In a multi-master shared bus SoC, what does a Round-Robin arbitration algorithm guarantee?',
    options: [
      'Every bus master receives equal access priority in cyclic order, preventing starvation of lower-priority IPs',
      'The CPU always gets 100% bus access',
      'DMA transfers are prioritized above all else',
      'Zero arbitration delay cycles'
    ],
    correctAnswer: 0,
    explanation: 'Round-robin arbitration rotates priority sequentially among all active requesting masters after each granted transaction, ensuring bounded waiting times without starvation.'
  },
  {
    id: 'soc-20',
    topicId: 'soc_design',
    category: 'Processor Architectures',
    question: 'What distinguishes the RISC-V ISA from proprietary ISAs like ARM in SoC development?',
    options: [
      'RISC-V is an open-source, royalty-free Instruction Set Architecture with modular standard extensions (I, M, A, F, D, V)',
      'RISC-V is a physical chip layout file format',
      'RISC-V only supports 8-bit processors',
      'ARM requires no licensing fees'
    ],
    correctAnswer: 0,
    explanation: 'RISC-V provides an open, royalty-free standard ISA specification allowing custom ISA extensions and full architecture customization without license fees.'
  },

  // ==========================================
  // SEMICONDUCTOR PACKAGING & MATERIALS (20 QUESTIONS)
  // ==========================================
  {
    id: 'pkg-1',
    topicId: 'semiconductor_packaging',
    category: 'Interconnect Technologies',
    question: 'What is a major electrical advantage of Flip-Chip bonding over traditional wirebonding for high-speed IC packages?',
    options: [
      'Drastically shorter interconnect path (microbumps/C4) yielding lower parasitic inductance (L) and higher signal integrity',
      'Flip-chip requires no package substrate',
      'Wirebonding supports higher pin counts above 5000',
      'Flip-chip eliminates heat generation'
    ],
    correctAnswer: 0,
    explanation: 'Flip-chip mounts the die face-down using solder bumps (~50-100um length), reducing parasitic interconnect inductance from ~1-2 nH (wirebond) to <0.1 nH.'
  },
  {
    id: 'pkg-2',
    topicId: 'semiconductor_packaging',
    category: 'Advanced Packaging (2.5D/3D)',
    question: 'What structural feature differentiates a 2.5D IC package (e.g. TSMC CoWoS) from a true 3D IC package?',
    options: [
      '2.5D places multiple dies side-by-side on a passive/active silicon interposer with high-density RDL traces, whereas 3D stacks dies vertically',
      '2.5D uses wirebonding while 3D uses printed circuit boards',
      '2.5D is non-volatile',
      '3D ICs cannot use silicon substrates'
    ],
    correctAnswer: 0,
    explanation: '2.5D IC integrates side-by-side dies (like GPU + HBM memory) connected via a high-density silicon/organic interposer; 3D IC stacks active silicon dies vertically using Through-Silicon Vias (TSVs).'
  },
  {
    id: 'pkg-3',
    topicId: 'semiconductor_packaging',
    category: '3D TSV Technology',
    question: 'In 3D IC stacking, what metal is most commonly used to fill etched Through-Silicon Vias (TSVs) for vertical power and signal conduction?',
    options: [
      'Copper (Cu)',
      'Aluminum (Al)',
      'Gold (Au)',
      'Lead (Pb)'
    ],
    correctAnswer: 0,
    explanation: 'Copper (Cu) electroplating is the industry standard for TSV metallization due to its low electrical resistivity, high electromigration resistance, and established processing.'
  },
  {
    id: 'pkg-4',
    topicId: 'semiconductor_packaging',
    category: 'Reliability & Mechanics',
    question: 'What physical failure mechanism occurs in IC packaging when materials with widely different Coefficients of Thermal Expansion (CTE) undergo thermal cycling?',
    options: [
      'Shear stress at material interfaces leading to solder joint fatigue cracking, die delamination, and package warpage',
      'Dielectric breakdown of silicon oxide',
      'Subthreshold channel leakage',
      'High frequency oscillation'
    ],
    correctAnswer: 0,
    explanation: 'Silicon (CTE ~2.6 ppm/C) expands much less than organic substrates (CTE ~15-18 ppm/C). Thermal cycling causes differential expansion shear stress, cracking solder joints.'
  },
  {
    id: 'pkg-5',
    topicId: 'semiconductor_packaging',
    category: 'Encapsulation & Underfill',
    question: 'Why is Capillary Underfill (CUFF) or Non-Conductive Film (NCF) applied beneath flip-chip dies?',
    options: [
      'Fills the gap between die and substrate, encapsulating solder bumps to distribute CTE thermal stress and protect against moisture',
      'Increases clock frequency',
      'Insulates gate oxides',
      'Enables optical communication'
    ],
    correctAnswer: 0,
    explanation: 'Underfill epoxy adheres firmly to both silicon die and organic substrate, redistributing CTE mismatch thermal expansion strain across the entire area instead of concentrating stress on individual solder bumps.'
  },
  {
    id: 'pkg-6',
    topicId: 'semiconductor_packaging',
    category: 'Substrate Materials',
    question: 'Which substrate material offers superior thermal conductivity (~20-30 W/mK) and low CTE matched to silicon for high-power RF and space applications?',
    options: [
      'Ceramic Substrates (e.g. AlN or Al2O3)',
      'FR-4 Glass-Epoxy',
      'Polyimide Film',
      'Cardboard Resin'
    ],
    correctAnswer: 0,
    explanation: 'Ceramics like Aluminum Nitride (AlN) feature excellent thermal conductivity and CTE matching silicon, making them ideal for high-power RF modules despite higher cost.'
  },
  {
    id: 'pkg-7',
    topicId: 'semiconductor_packaging',
    category: 'Solder Materials',
    question: 'What is the primary composition of SAC305, the standard lead-free solder alloy used in surface mount packaging?',
    options: [
      '96.5% Tin (Sn), 3.0% Silver (Ag), 0.5% Copper (Cu)',
      '60% Lead (Pb), 40% Tin (Sn)',
      '100% Gold (Au)',
      '50% Nickel (Ni), 50% Copper (Cu)'
    ],
    correctAnswer: 0,
    explanation: 'SAC305 stands for Sn-Ag-Cu with 96.5% Sn, 3.0% Ag, and 0.5% Cu, offering a near-eutectic melting temperature of ~217-220C compliant with RoHS environmental directives.'
  },
  {
    id: 'pkg-8',
    topicId: 'semiconductor_packaging',
    category: 'Thermal Management',
    question: 'Where is Thermal Interface Material 1 (TIM1) located in a high-performance packaged processor?',
    options: [
      'Between the bare silicon die surface and the Integrated Heat Spreader (IHS)',
      'Between the IHS and the external motherboard heatsink',
      'Inside the silicon substrate',
      'Around the wirebond pads'
    ],
    correctAnswer: 0,
    explanation: 'TIM1 is applied directly between the active silicon die back and the nickel-plated copper IHS (lid); TIM2 resides externally between the IHS and customer cooling heatsink.'
  },
  {
    id: 'pkg-9',
    topicId: 'semiconductor_packaging',
    category: 'Mold Compounds & Encapsulation',
    question: 'What are the key constituent materials in Epoxy Molding Compound (EMC) used for transfer molding of IC packages?',
    options: [
      'Epoxy resin matrix filled with fused silica (SiO2) spherical powder (~70-90 wt%) and hardeners',
      'Pure aluminum powder',
      'Liquid silicon gel',
      'Polycarbonate sheet'
    ],
    correctAnswer: 0,
    explanation: 'EMC consists of thermosetting epoxy resins heavily loaded with micro-sized silica powder fillers to lower CTE, boost thermal conductivity, and provide mechanical protection.'
  },
  {
    id: 'pkg-10',
    topicId: 'semiconductor_packaging',
    category: 'Fan-Out & Wafer-Level Packaging',
    question: 'In Fan-Out Wafer-Level Packaging (FOWLP), what is the function of a Redistribution Layer (RDL)?',
    options: [
      'Thin-film metal/dielectric traces that fan out I/O contact pads from tightly spaced die pads onto a larger package footprint area',
      'Cools the die using liquid nitrogen',
      'Synthesizes clock signals',
      'Protects against alpha particles'
    ],
    correctAnswer: 0,
    explanation: 'RDL utilizes copper photolithography to re-route fine-pitch (~2-5um) die bond pads outward onto wider-pitch ball grid array (BGA) bump pitches.'
  },
  {
    id: 'pkg-11',
    topicId: 'semiconductor_packaging',
    category: 'Wirebonding Materials',
    question: 'Why has Copper (Cu) and Palladium-Coated Copper (PCC) wire largely replaced Gold (Au) wire in volume automotive and consumer packaging?',
    options: [
      'Substantially lower material cost, higher electrical/thermal conductivity, and higher resistance to sweep during molding',
      'Copper melts at lower temperatures than Gold',
      'Copper requires no ultrasonic bonding power',
      'Copper never oxidizes'
    ],
    correctAnswer: 0,
    explanation: 'Copper wire reduces expensive precious metal costs while providing lower electrical resistance and stiffer mechanical wire properties against mold sweep.'
  },
  {
    id: 'pkg-12',
    topicId: 'semiconductor_packaging',
    category: 'Advanced Memory Packaging',
    question: 'High Bandwidth Memory (HBM3) stacks 8 to 16 DRAM dies vertically over a base logic buffer die using which micro-interconnect technology?',
    options: [
      'Microbumps with Through-Silicon Vias (TSVs) and advanced silicon interposer RDL channels',
      'Standard aluminum wirebonds',
      'Dip soldering',
      'Flexible ribbon cable'
    ],
    correctAnswer: 0,
    explanation: 'HBM uses vertical TSVs running through DRAM dies paired with fine-pitch microbumps (~25-35um pitch) attached to a 2.5D interposer to achieve multi-terabyte/s bandwidth.'
  },
  {
    id: 'pkg-13',
    topicId: 'semiconductor_packaging',
    category: 'Reliability & Moisture Sensitivity',
    question: 'What causes "Popcorn Effect" damage in plastic IC packages during SMT reflow soldering?',
    options: [
      'Trapped ambient moisture inside the epoxy mold compound rapidly vaporizes at ~260C reflow, causing steam pressure delamination and package cracking',
      'Over-voltage breakdown of solder balls',
      'Excessive clock jitter',
      'Alpha particle ionization'
    ],
    correctAnswer: 0,
    explanation: 'Moisture absorbed by porous mold compounds expands explosively into steam during SMT solder reflow (~260C), creating internal voids, delamination, or package bursting (popcorning).'
  },
  {
    id: 'pkg-14',
    topicId: 'semiconductor_packaging',
    category: 'Bumpless Packaging & Hybrid Bonding',
    question: 'Direct Bond Interconnect (DBI) / Cu-Cu Hybrid Bonding achieves ultra-fine pitch (<1um) in 3D die stacking by eliminating:',
    options: [
      'Solder microbumps (bonding Cu pads directly to Cu pads surrounded by dielectric at room/moderate temperature)',
      'Silicon substrates',
      'Oxide layers',
      'Cleanroom requirements'
    ],
    correctAnswer: 0,
    explanation: 'Hybrid bonding joins activated dielectric (SiO2 or SiCN) and copper pads directly face-to-face without solder bumps, enabling sub-micron interconnect pitches.'
  },
  {
    id: 'pkg-15',
    topicId: 'semiconductor_packaging',
    category: 'RF & High-Speed Packaging',
    question: 'For high-speed 5G RF and 112G SerDes packaging, why are low Dissipation Factor (Df / tan-delta) dielectric substrate materials mandatory?',
    options: [
      'Minimizes dielectric signal attenuation and high-frequency thermal insertion loss along substrate transmission lines',
      'Increases DC resistance',
      'Decreases copper adhesion',
      'Prevents electromigration'
    ],
    correctAnswer: 0,
    explanation: 'Dielectric loss factor Df governs electromagnetic energy absorbed as heat by the substrate resin at GHz frequencies; low Df materials preserve high-speed signal integrity.'
  },
  {
    id: 'pkg-16',
    topicId: 'semiconductor_packaging',
    category: 'Package Types',
    question: 'What is a primary advantage of Ball Grid Array (BGA) packaging over Quad Flat Package (QFP) for complex ASICs?',
    options: [
      'BGA uses the entire bottom area for solder ball contacts rather than perimeter leads, allowing much higher I/O density (>1000 pins)',
      'BGA pins can be inspected visually without X-ray',
      'BGA uses no solder',
      'BGA packages are transparent'
    ],
    correctAnswer: 0,
    explanation: 'QFP places leads along the package perimeter (limiting pin count), whereas BGA distributes contacts in a 2D matrix across the entire bottom surface area.'
  },
  {
    id: 'pkg-17',
    topicId: 'semiconductor_packaging',
    category: 'SiP & EMI Shielding',
    question: 'How is System-in-Package (SiP) conformal EMI shielding applied to prevent RF crosstalk between internal components?',
    options: [
      'Sputtering a thin metallic coating (e.g. Cu/Ni) over the exterior encapsulated surface of the SiP module connected to package ground',
      'Wrapping the package in paper tape',
      'Adding thick silicon dioxide layers',
      'Doping the mold compound with boron'
    ],
    correctAnswer: 0,
    explanation: 'PVD sputtering coats the molded SiP exterior with a thin metallic Cu/Ni film grounded to substrate edge pads, creating a Faraday cage against EMI radiation.'
  },
  {
    id: 'pkg-18',
    topicId: 'semiconductor_packaging',
    category: 'Reliability & Electromigration',
    question: 'Why are fine-pitch microbumps (~20-40um) in 2.5D/3D packages especially prone to electromigration failure?',
    options: [
      'Extremely high current density (>10^4 A/cm^2) accelerates atomic diffusion of Sn and Cu, forming intermetallic compound (IMC) voids',
      'Microbumps carry no current',
      'Microbumps are made of ceramic',
      'Subthreshold voltage breakdown'
    ],
    correctAnswer: 0,
    explanation: 'Miniaturized bump dimensions drastically elevate localized current density J, inducing electron momentum transfer that sweeps tin/copper atoms to form structural Kirkendall voids.'
  },
  {
    id: 'pkg-19',
    topicId: 'semiconductor_packaging',
    category: 'Hermetic Packaging',
    question: 'Hermetic packaging (using metal/ceramic enclosures with glass or gold-tin seals) is strictly required for military and aerospace ICs to:',
    options: [
      'Completely seal the interior cavity against atmospheric gases, moisture ingress, and harsh environmental contaminants',
      'Reduce package weight',
      'Eliminate electrical resistance',
      'Prevent X-ray inspection'
    ],
    correctAnswer: 0,
    explanation: 'Hermetic packages provide a zero-leak atmosphere-tight seal (leak rate < 10^-8 atm cc/s), preventing moisture-induced corrosion in mission-critical environments.'
  },
  {
    id: 'pkg-20',
    topicId: 'semiconductor_packaging',
    category: 'Next-Gen Packaging Materials',
    question: 'Why are leading semiconductor companies developing Glass Substrates to replace organic flip-chip substrates for future AI processors?',
    options: [
      'Glass offers extreme flatness, ultra-low thermal expansion (CTE) matching silicon, high dimensional stability, and superior Through-Glass Via (TGV) density',
      'Glass is a flexible rubber-like material',
      'Glass conducts electricity without metal wires',
      'Glass eliminates the need for cleanrooms'
    ],
    correctAnswer: 0,
    explanation: 'Glass substrates provide superior mechanical rigidity, thermal stability, and surface planarity, enabling sub-micron RDL features and larger panel sizes without warpage.'
  },

  // ==========================================
  // EMBEDDED SYSTEMS & IOT (20 QUESTIONS)
  // ==========================================
  {
    id: 'emb-1',
    topicId: 'embedded_iot',
    category: 'Interrupts & Architecture',
    question: 'Why MUST an Interrupt Service Routine (ISR) in an embedded system be kept as short and fast as possible?',
    options: [
      'Blocking inside an ISR delays processing of other critical pending interrupts and risks system latency degradation',
      'ISRs consume double the supply voltage while executing',
      'Long ISRs trigger memory corruption in flash',
      'The CPU automatically resets if an ISR runs longer than 10 instructions'
    ],
    correctAnswer: 0,
    explanation: 'ISRs run at elevated priority, suppressing lower or equal priority interrupts. Keeping ISRs concise (e.g. setting a flag or pushing to a lock-free queue) minimizes interrupt response jitter and system latency.'
  },
  {
    id: 'emb-2',
    topicId: 'embedded_iot',
    category: 'Watchdog Timers',
    question: 'What is the operational rule of a Windowed Watchdog Timer (WWDG) compared to a standard watchdog timer?',
    options: [
      'The watchdog refresh ("kicking") MUST occur within a specific time window—refreshing too early OR too late triggers a system reset',
      'It allows infinite delay before resetting the microcontroller',
      'It only operates when the MCU is connected to Wi-Fi',
      'It can only be refreshed from an external hardware pin'
    ],
    correctAnswer: 0,
    explanation: 'A Windowed Watchdog enforces both upper and lower time bounds for reloading. Refreshing too early indicates runaway firmware code executing in an unexpected fast loop, triggering a reset.'
  },
  {
    id: 'emb-3',
    topicId: 'embedded_iot',
    category: 'RTOS & Scheduling',
    question: 'In a real-time operating system (RTOS), how does Priority Inheritance Protocol resolve Priority Inversion?',
    options: [
      'It temporarily elevates the priority of a low-priority task holding a shared resource to match the priority of the high-priority task blocked waiting for it',
      'It deletes the medium-priority task automatically',
      'It disables all hardware interrupts globally',
      'It forces all tasks to execute with equal round-robin priority'
    ],
    correctAnswer: 0,
    explanation: 'Priority Inversion occurs when a medium-priority task preempts a low-priority task that holds a mutex needed by a high-priority task. Priority Inheritance elevates the low-priority task so it finishes and releases the mutex quickly.'
  },
  {
    id: 'emb-4',
    topicId: 'embedded_iot',
    category: 'C Programming & Firmware',
    question: 'Why is the `volatile` keyword required when declaring a C variable that is modified inside a hardware Interrupt Service Routine (ISR)?',
    options: [
      'It forces the compiler to re-read the variable from memory on every access instead of optimizing it into a CPU register',
      'It allocates the variable in non-volatile EEPROM storage',
      'It prevents other threads from reading the variable',
      'It automatically encrypts the variable in RAM'
    ],
    correctAnswer: 0,
    explanation: 'Without `volatile`, the compiler optimizer may assume the variable is never modified within the main loop body and cache its value in a CPU register, ignoring updates made asynchronously by the ISR.'
  },
  {
    id: 'emb-5',
    topicId: 'embedded_iot',
    category: 'Peripherals & Protocols',
    question: 'Why are open-drain outputs with external pull-up resistors used on the SDA and SCL lines of an I2C bus?',
    options: [
      'Allows multiple devices to share the bus safely without electrical contention or short-circuit damage when pulling lines low',
      'Increases data transfer rates above 10 GHz',
      'Eliminates clock synchronization requirements',
      'Allows wireless communication over long distances'
    ],
    correctAnswer: 0,
    explanation: 'Open-drain drivers can actively pull lines low or release them to be pulled high by resistors. This wire-AND configuration prevents short circuits if two devices drive opposite logic states simultaneously.'
  },
  {
    id: 'emb-6',
    topicId: 'embedded_iot',
    category: 'Peripherals & Protocols',
    question: 'In the SPI (Serial Peripheral Interface) protocol, what do the CPOL (Clock Polarity) and CPHA (Clock Phase) settings define?',
    options: [
      'The idle state of the clock line (CPOL) and which clock edge (rising/falling) captures data bits (CPHA)',
      'The baud rate generator divider value',
      'The maximum number of slave devices connected',
      'The parity error checking matrix'
    ],
    correctAnswer: 0,
    explanation: 'CPOL determines whether SCK idles LOW (0) or HIGH (1), while CPHA dictates whether data is sampled on the leading (0) or trailing (1) clock edge, forming 4 standard SPI modes.'
  },
  {
    id: 'emb-7',
    topicId: 'embedded_iot',
    category: 'Peripherals & Protocols',
    question: 'How does I2C Clock Stretching allow a slow slave peripheral to pause data transmission from a fast master?',
    options: [
      'The slave holds the SCL line LOW, forcing the master into a wait state until the slave releases SCL',
      'The slave sends an NACK bit continuously on SDA',
      'The slave turns off its internal power regulator',
      'The slave asserts a dedicated hardware interrupt pin'
    ],
    correctAnswer: 0,
    explanation: 'Since SCL is an open-drain wire-AND line, any slave needing extra processing time can pull SCL LOW. The master detects SCL held LOW and pauses clock generation until SCL floats back HIGH.'
  },
  {
    id: 'emb-8',
    topicId: 'embedded_iot',
    category: 'IoT Protocols',
    question: 'Why is MQTT preferred over HTTP for constrained IoT device telemetry communication?',
    options: [
      'MQTT uses a lightweight publish/subscribe pattern over TCP with minimal packet headers (as small as 2 bytes), reducing bandwidth and power',
      'MQTT does not require network connectivity',
      'HTTP cannot transmit numerical sensor data',
      'MQTT runs only on Bluetooth hardware'
    ],
    correctAnswer: 0,
    explanation: 'HTTP headers are verbose (hundreds of bytes) and require polling. MQTT pub/sub decouples clients via a central broker and transmits binary payloads with ultra-compact packet headers.'
  },
  {
    id: 'emb-9',
    topicId: 'embedded_iot',
    category: 'IoT Protocols',
    question: 'What is the primary architectural difference between CoAP (Constrained Application Protocol) and HTTP in IoT networks?',
    options: [
      'CoAP operates over UDP with 4-byte fixed headers and optional confirmable messages, whereas HTTP relies on TCP overhead',
      'CoAP requires 64-bit microprocessors',
      'HTTP operates over satellite links only',
      'CoAP cannot support GET and POST methods'
    ],
    correctAnswer: 0,
    explanation: 'Designed for resource-constrained nodes, CoAP maps RESTful semantics (GET/POST/PUT) onto UDP datagrams with ultra-low header overhead and simple retransmission mechanisms.'
  },
  {
    id: 'emb-10',
    topicId: 'embedded_iot',
    category: 'Wireless & LPWAN',
    question: 'What key modulation technology enables LoRa (Long Range) wireless communication over 10+ kilometers at ultra-low power?',
    options: [
      'Chirp Spread Spectrum (CSS) modulation, which provides high processing gain and robust immunity to in-band interference',
      'Quadrature Amplitude Modulation (QAM-256)',
      'Frequency Shift Keying with 100 MHz bandwidth',
      'Direct infrared beam steering'
    ],
    correctAnswer: 0,
    explanation: 'LoRa utilizes Chirp Spread Spectrum where carrier frequency ramps linearly over time, allowing reception of signals even below the ambient noise floor at extreme range.'
  },
  {
    id: 'emb-11',
    topicId: 'embedded_iot',
    category: 'Wireless & LPWAN',
    question: 'In Bluetooth Low Energy (BLE) architecture, what role does the GATT (Generic Attribute Profile) play?',
    options: [
      'Defines the hierarchical data structure of Services and Characteristics used to exchange attributes between Connected BLE devices',
      'Manages 2.4 GHz radio frequency hopping channels',
      'Encrypts flash memory bootloaders',
      'Calculates battery discharge rates'
    ],
    correctAnswer: 0,
    explanation: 'GATT establishes how BLE devices organize data into Services (logical groupings) and Characteristics (data values with descriptors), accessed via Client-Server read/write requests.'
  },
  {
    id: 'emb-12',
    topicId: 'embedded_iot',
    category: 'Memory & Hardware Acceleration',
    question: 'Why is Circular (Ring Buffer) DMA mode commonly used for UART reception or ADC continuous sensor sampling?',
    options: [
      'Automatically wraps around to the buffer start upon completion, continuously filling memory without requiring CPU intervention per sample',
      'Increases ADC voltage reference precision',
      'Eliminates flash memory erase cycles',
      'Doubles CPU clock frequency'
    ],
    correctAnswer: 0,
    explanation: 'Circular DMA operates autonomously in background RAM buffers, re-triggering upon reaching buffer boundaries and raising periodic half-transfer / full-transfer interrupts.'
  },
  {
    id: 'emb-13',
    topicId: 'embedded_iot',
    category: 'Bootloaders & Firmware',
    question: 'When a custom microcontroller bootloader jumps to execute main application firmware, what step MUST be performed first?',
    options: [
      'Relocate the Vector Table Offset Register (VTOR) to point to the main application vector table in Flash',
      'Erase all internal SRAM memory',
      'Set the system clock frequency to 0 Hz',
      'Disable the hardware Reset button'
    ],
    correctAnswer: 0,
    explanation: 'Before jumping, the bootloader updates VTOR to the application starting address in Flash so that subsequent hardware interrupts execute the application interrupt handlers rather than bootloader routines.'
  },
  {
    id: 'emb-14',
    topicId: 'embedded_iot',
    category: 'Timer & Motor Control',
    question: 'Why is Dead-Time Insertion necessary in PWM complementary outputs driving H-bridge or inverter MOSFET gates?',
    options: [
      'Prevents shoot-through short-circuit current caused by high-side and low-side MOSFETs being partially ON simultaneously during switching',
      'Increases PWM carrier frequency',
      'Reduces motor magnetic flux',
      'Filters analog sensor noise'
    ],
    correctAnswer: 0,
    explanation: 'MOSFET turn-off delays exceed turn-on times. Inserting a brief dead-time delay ensures one switch turns OFF completely before the complementary switch turns ON, avoiding high-current power rail shorts.'
  },
  {
    id: 'emb-15',
    topicId: 'embedded_iot',
    category: 'Low Power & PMIC',
    question: 'How does executing the `WFI` (Wait For Interrupt) assembly instruction save battery power in ARM Cortex-M microcontrollers?',
    options: [
      'Suspends CPU core clock toggling immediately, keeping execution halted until a hardware interrupt wakes the core',
      'Powers down the main battery supply rail',
      'Erases the system stack pointer',
      'Triggers a software system reset'
    ],
    correctAnswer: 0,
    explanation: '`WFI` puts the CPU into low-power Sleep mode by gating the CPU clock tree. Peripherals and NVIC remain powered to wake the core instantly upon receiving an enabled interrupt event.'
  },
  {
    id: 'emb-16',
    topicId: 'embedded_iot',
    category: 'IoT Security',
    question: 'What is the role of a hardware Secure Element / Secure Crypto Element (e.g. ATECC608, TPM) in an IoT edge device?',
    options: [
      'Stores private ECC/RSA cryptographic keys in tamper-proof hardware and performs chip-level mutual authentication for cloud connectivity',
      'Increases Wi-Fi radio range',
      'Accelerates floating-point motor control algorithms',
      'Generates high-voltage gate drive signals'
    ],
    correctAnswer: 0,
    explanation: 'Secure Elements isolate private keys inside hardened silicon resistant to side-channel and physical probing attacks, executing hardware ECDSA signing for TLS authentication without exposing keys in RAM.'
  },
  {
    id: 'emb-17',
    topicId: 'embedded_iot',
    category: 'GPIO & Signal Driving',
    question: 'What is the structural difference between Push-Pull and Open-Drain GPIO output configurations?',
    options: [
      'Push-Pull uses active PMOS and NMOS drivers for strong HIGH and LOW driving; Open-Drain uses only NMOS and relies on external pull-ups for HIGH',
      'Push-Pull can only be used for analog signals',
      'Open-Drain requires negative supply voltage',
      'Push-Pull consumes zero current in all states'
    ],
    correctAnswer: 0,
    explanation: 'Push-Pull actively drives the pin to VDD via PMOS or GND via NMOS. Open-Drain drives actively to GND via NMOS but turns OFF for logic HIGH, allowing external pull-up bus sharing.'
  },
  {
    id: 'emb-18',
    topicId: 'embedded_iot',
    category: 'Signal Conditioning & ADC',
    question: 'Why is an Anti-Aliasing Low-Pass Filter placed before an analog-to-digital converter (ADC) sampling continuous signals?',
    options: [
      'Attenuates high-frequency signal components above half the sampling rate (Nyquist frequency f_s / 2) to prevent spectral aliasing corruption',
      'Increases ADC sampling clock speed',
      'Converts digital signals to analog voltages',
      'Boosts DC supply voltage'
    ],
    correctAnswer: 0,
    explanation: 'Signals above the Nyquist limit ($f_s / 2$) fold back (alias) into the sampled passband as false low-frequency distortion. An analog low-pass filter suppresses these frequencies prior to sampling.'
  },
  {
    id: 'emb-19',
    topicId: 'embedded_iot',
    category: 'RTOS Task Synchronization',
    question: 'In FreeRTOS, what is the main advantage of using a Counting Semaphore over a Binary Semaphore?',
    options: [
      'Can track and manage multiple available instances of a shared resource or queue multiple event notifications (count > 1)',
      'Executes faster on 8-bit microcontrollers',
      'Allocates memory in external DRAM',
      'Requires no interrupt safety'
    ],
    correctAnswer: 0,
    explanation: 'Binary semaphores store a maximum count of 1 (suited for mutual exclusion or single events), whereas counting semaphores maintain an integer count to manage pools of resources or count producer events.'
  },
  {
    id: 'emb-20',
    topicId: 'embedded_iot',
    category: 'Debugging & Tracing',
    question: 'What feature does ARM Serial Wire Output (SWO) / ITM (Instrumentation Trace Macrocell) provide during embedded software debugging?',
    options: [
      'Outputs non-intrusive high-speed printf log streams and real-time event tracing over a single pin without halting CPU execution',
      'Programs external EEPROM chips via JTAG',
      'Measures battery current consumption',
      'Simulates analog sensor waveforms'
    ],
    correctAnswer: 0,
    explanation: 'SWO/ITM uses a dedicated single-wire trace output to transmit hardware trace packets and `printf` output in real time without incurring breakpoint delays or performance overhead.'
  },

  // ==========================================
  // LINEAR INTEGRATED CIRCUITS (20 QUESTIONS)
  // ==========================================
  {
    id: 'lic-1',
    topicId: 'linear_ic',
    category: 'Op-Amp Fundamentals',
    question: 'An ideal operational amplifier (Op-Amp) possesses which set of input and output impedance characteristics?',
    options: [
      'Infinite Input Impedance (R_in = infinity) and Zero Output Impedance (R_out = 0)',
      'Zero Input Impedance and Infinite Output Impedance',
      'R_in = 50 Ohms and R_out = 50 Ohms',
      'R_in = 1 kOhm and R_out = 1 kOhm'
    ],
    correctAnswer: 0,
    explanation: 'An ideal Op-Amp draws zero input current ($R_{in} = \\infty$) and acts as an ideal voltage source ($R_{out} = 0$), allowing unattenuated signal pickup and output load driving.'
  },
  {
    id: 'lic-2',
    topicId: 'linear_ic',
    category: 'Op-Amp Limitations',
    question: 'What parameter defines the maximum rate of change of Op-Amp output voltage per unit time, measured in V/microsecond?',
    options: [
      'Slew Rate (SR)',
      'Common Mode Rejection Ratio (CMRR)',
      'Gain-Bandwidth Product (GBW)',
      'Input Offset Voltage'
    ],
    correctAnswer: 0,
    explanation: 'Slew Rate ($SR = dV_{out}/dt|_{max}$) is limited by internal compensation capacitor charging current ($I/C$). Exceeding Slew Rate limits distorts high-amplitude high-frequency sinewaves into triangular waves.'
  },
  {
    id: 'lic-3',
    topicId: 'linear_ic',
    category: 'Op-Amp Limitations',
    question: 'How is Common Mode Rejection Ratio (CMRR) defined for an operational amplifier circuit?',
    options: [
      'Ratio of Differential Gain (A_d) to Common Mode Gain (A_c), expressed as 20*log10(|A_d / A_c|)',
      'Ratio of Open Loop Gain to Closed Loop Gain',
      'Ratio of Output Impedance to Input Impedance',
      'Ratio of Power Dissipation to Signal Gain'
    ],
    correctAnswer: 0,
    explanation: 'CMRR measures the Op-Amp ability to amplify differential input signals while rejecting common noise present on both input terminals. Higher CMRR (dB) indicates superior noise rejection.'
  },
  {
    id: 'lic-4',
    topicId: 'linear_ic',
    category: 'Op-Amp Circuits',
    question: 'In an Inverting Op-Amp Amplifier with feedback resistor R_f and input resistor R_in, why is the inverting input node called a "Virtual Ground"?',
    options: [
      'Negative feedback forces differential input voltage (V_+ - V_-) to ~0V, keeping the inverting terminal at 0V potential without being physically connected to ground',
      'The terminal is directly wired to the ground power supply bus',
      'An internal Zener diode clamps the terminal voltage to zero',
      'The non-inverting terminal is connected to VDD'
    ],
    correctAnswer: 0,
    explanation: 'With high open-loop gain $A_{OL}$ and negative feedback, $V_- = V_+ - V_{out}/A_{OL} \\approx V_+$. If $V_+$ is grounded ($0\\text{V}$), $V_-$ stays at $0\\text{V}$ ("Virtual Ground") while taking input current.'
  },
  {
    id: 'lic-5',
    topicId: 'linear_ic',
    category: 'Instrumentation Amplifiers',
    question: 'What is a major advantage of a standard 3 Op-Amp Instrumentation Amplifier over a simple single op-amp differential amplifier?',
    options: [
      'Extremely high input impedance on both inputs and precise gain adjustment using a single external resistor (R_G)',
      'Requires no DC supply voltage',
      'Provides digital PWM output',
      'Eliminates all thermal noise'
    ],
    correctAnswer: 0,
    explanation: 'The 3-Op-Amp topology buffers both differential input signals with non-inverting input stages, delivering high differential gain, high input impedance, and excellent CMRR set by $R_G$.'
  },
  {
    id: 'lic-6',
    topicId: 'linear_ic',
    category: 'Non-Linear Op-Amp Circuits',
    question: 'Why is a Precision Rectifier ("Super Diode") circuit required to rectify small AC signals (< 0.7 V)?',
    options: [
      'Op-Amp open-loop gain inside the feedback loop divides the diode forward voltage drop (0.7V) by A_OL, allowing rectification of millivolt signals',
      'It uses silicon carbide diodes with zero turn-on voltage',
      'It amplifies signal frequency by 10x',
      'It converts AC directly to a digital clock'
    ],
    correctAnswer: 0,
    explanation: 'A standard diode fails to conduct for AC signals below $V_\\gamma \\approx 0.7\\text{V}$. Placing the diode inside an Op-Amp negative feedback loop reduces the effective threshold voltage to $V_\\gamma / A_{OL} \\approx 0\\text{V}$.'
  },
  {
    id: 'lic-7',
    topicId: 'linear_ic',
    category: 'Comparators & Wave Generators',
    question: 'What key characteristic differentiates a Schmitt Trigger circuit from a standard voltage comparator?',
    options: [
      'Schmitt Trigger employs Positive Feedback to create Hysteresis (Upper/Lower thresholds), eliminating false output chatter due to noisy inputs',
      'Schmitt Trigger uses negative feedback to linearize output',
      'Schmitt Trigger cannot operate above 1 kHz',
      'Schmitt Trigger has zero voltage gain'
    ],
    correctAnswer: 0,
    explanation: 'Positive feedback establishes two distinct switching thresholds ($V_{UT}$ and $V_{LT}$). The difference ($V_{UT} - V_{LT}$) forms a hysteresis band that prevents noisy input signals from chattering near the threshold.'
  },
  {
    id: 'lic-8',
    topicId: 'linear_ic',
    category: '555 Timer IC',
    question: 'In an IC 555 Astable Multivibrator circuit with timing resistors R_A, R_B and capacitor C, what is the formula for the output pulse frequency?',
    options: [
      'f = 1.44 / ((R_A + 2*R_B) * C)',
      'f = 1.1 / ((R_A + R_B) * C)',
      'f = 2 * pi * R_A * C',
      'f = (R_A * R_B) / C'
    ],
    correctAnswer: 0,
    explanation: 'In astable mode, the capacitor charges through ($R_A + R_B$) and discharges through $R_B$. Total period $T = t_{high} + t_{low} = 0.693(R_A + 2R_B)C$, yielding frequency $f = 1.44 / ((R_A + 2R_B)C)$.'
  },
  {
    id: 'lic-9',
    topicId: 'linear_ic',
    category: '555 Timer IC',
    question: 'What is the pulse width duration (T) produced by an IC 555 Monostable Multivibrator upon receiving a negative trigger signal?',
    options: [
      'T = 1.1 * R * C',
      'T = 0.693 * R * C',
      'T = 2.2 * R * C',
      'T = R / C'
    ],
    correctAnswer: 0,
    explanation: 'In monostable mode, a trigger pulse fires the flip-flop, allowing capacitor C to charge through R up to $(2/3)VDD$. Solving $V(t) = VDD(1 - e^{-t/RC}) = (2/3)VDD$ gives $T = \\ln(3)RC \\approx 1.1 RC$.'
  },
  {
    id: 'lic-10',
    topicId: 'linear_ic',
    category: 'Phase Locked Loops (PLL)',
    question: 'In a Phase Locked Loop (PLL) IC (e.g. NE565), what is the difference between Lock Range and Capture Range?',
    options: [
      'Lock Range is the frequency band over which PLL maintains tracking once locked; Capture Range is the narrower frequency band over which PLL can initially acquire lock',
      'Capture Range is always wider than Lock Range',
      'Lock Range is measured in Volts, Capture Range in Hertz',
      'Lock Range applies only to digital signals'
    ],
    correctAnswer: 0,
    explanation: 'The loop filter restricts initial pull-in capability, making Capture Range (\\Delta f_c) narrower. Once synchronized, the VCO can track input frequency changes over a wider Lock Range (\\Delta f_L).'
  },
  {
    id: 'lic-11',
    topicId: 'linear_ic',
    category: 'Active Filters',
    question: 'What is the attenuation roll-off rate of a 2nd-order Sallen-Key Active Low-Pass Filter in the stopband?',
    options: [
      '-40 dB/decade (-12 dB/octave)',
      '-20 dB/decade (-6 dB/octave)',
      '-60 dB/decade (-18 dB/octave)',
      '-6 dB/decade'
    ],
    correctAnswer: 0,
    explanation: 'Each filter pole adds $-20\\text{ dB/decade}$ attenuation. A $2^{\\text{nd}}$-order Sallen-Key configuration contains two reactive pole elements ($RC$), producing a $-40\\text{ dB/decade}$ roll-off slope.'
  },
  {
    id: 'lic-12',
    topicId: 'linear_ic',
    category: 'Voltage Regulators',
    question: 'In a linear IC voltage regulator (such as LM723 or 78xx series), what is the function of Foldback Current Limiting?',
    options: [
      'Reduces output current well below peak rating during short-circuit conditions, protecting the internal pass transistor from thermal destruction',
      'Increases output voltage when load current increases',
      'Converts DC input directly to AC output',
      'Disables output thermal shutdown'
    ],
    correctAnswer: 0,
    explanation: 'Under severe short circuits, $V_{out} \\to 0$, creating maximum voltage drop across the pass transistor. Foldback limiting folds back output current $I_{out}$ to a tiny value, minimizing $P = V_{drop} \\times I_{out}$ power dissipation.'
  },
  {
    id: 'lic-13',
    topicId: 'linear_ic',
    category: 'Data Converters (DAC)',
    question: 'Why is an R-2R Ladder DAC preferred over a Binary-Weighted Resistor DAC for multi-bit (e.g. 12-bit) conversion?',
    options: [
      'Requires only two precision resistor values (R and 2R), making IC fabrication and thermal matching far simpler than manufacturing a wide range of resistor values',
      'Consumes zero power during conversion',
      'Provides higher operating speed than Flash DACs',
      'Does not require a reference voltage'
    ],
    correctAnswer: 0,
    explanation: 'A 12-bit binary-weighted DAC requires resistor ratios up to $2^{12}:1 = 4096:1$, which is nearly impossible to match on silicon over temperature. R-2R ladders use identical $R$ and $2R$ units throughout.'
  },
  {
    id: 'lic-14',
    topicId: 'linear_ic',
    category: 'Data Converters (ADC)',
    question: 'How many clock cycles are required for an N-bit Successive Approximation Register (SAR) ADC to complete a single analog conversion?',
    options: [
      'Exactly N clock cycles',
      '2^N - 1 clock cycles',
      '1 clock cycle regardless of N',
      '2 * N + 1 clock cycles'
    ],
    correctAnswer: 0,
    explanation: 'A SAR ADC tests bits sequentially from MSB to LSB via binary search algorithm, taking exactly 1 clock cycle per bit resolution ($N$ clock cycles total for $N$ bits).'
  },
  {
    id: 'lic-15',
    topicId: 'linear_ic',
    category: 'Data Converters (ADC)',
    question: 'How many parallel voltage comparators are required to build an N-bit Flash (Direct-Conversion) ADC?',
    options: [
      '2^N - 1 comparators',
      'N comparators',
      '2 * N comparators',
      'N^2 comparators'
    ],
    correctAnswer: 0,
    explanation: 'Flash ADCs compare input voltage against a resistor divider network simultaneously. For $N$-bit resolution, $2^N - 1$ comparators evaluate in parallel in 1 clock cycle, trading high hardware complexity for ultra-fast conversion.'
  },
  {
    id: 'lic-16',
    topicId: 'linear_ic',
    category: 'Data Converters (ADC)',
    question: 'Why are Dual-Slope Integrating ADCs widely used in precision digital multimeters despite their slow conversion speed?',
    options: [
      'High accuracy, excellent line-frequency (50/60Hz) noise rejection, and independence from component tolerance drift (R and C values cancel out)',
      'Fastest conversion time under 1 nanosecond',
      'Uses no analog components',
      'Operates without a reference voltage'
    ],
    correctAnswer: 0,
    explanation: 'In dual-slope integration, $R$ and $C$ affect run-up and run-down phases equally and cancel out in the final digital ratio equation $T_2 = T_1 (V_{in} / V_{ref})$, making accuracy independent of component aging.'
  },
  {
    id: 'lic-17',
    topicId: 'linear_ic',
    category: '555 Timer Architecture',
    question: 'What are the two internal threshold comparison voltage levels in an IC 555 Timer set by its internal 3x5kOhm resistor divider network?',
    options: [
      '(1/3)*VDD (Trigger) and (2/3)*VDD (Threshold)',
      '(1/2)*VDD and VDD',
      '(1/4)*VDD and (3/4)*VDD',
      '0.7 V and 5.0 V'
    ],
    correctAnswer: 0,
    explanation: 'Three equal $5\\text{k}\\Omega$ resistors connected between VCC and GND set reference levels $(1/3)VCC$ for Comparator 2 (Trigger) and $(2/3)VCC$ for Comparator 1 (Threshold).'
  },
  {
    id: 'lic-18',
    topicId: 'linear_ic',
    category: 'Specialized Op-Amp Applications',
    question: 'In an Op-Amp Logarithmic Amplifier, what electronic device is placed in the feedback loop to obtain an output proportional to ln(V_in)?',
    options: [
      'A BJT transistor or PN junction diode exploiting exponential I-V characteristics',
      'A precision inductor',
      'A Zener diode connected to VDD',
      'A quartz crystal resonator'
    ],
    correctAnswer: 0,
    explanation: 'The exponential V-I relationship of a PN junction ($I_C = I_S \\cdot e^{V_{BE}/V_T}$) inside negative feedback produces an output voltage proportional to natural logarithm of input $V_{out} = -V_T \\cdot \\ln(V_{in} / (I_S \\cdot R_1))$.'
  },
  {
    id: 'lic-19',
    topicId: 'linear_ic',
    category: 'Specialized ICs',
    question: 'How does an Operational Transconductance Amplifier (OTA, e.g. CA3080) differ from a standard Operational Amplifier?',
    options: [
      'Output signal is a Current proportional to input voltage (g_m * V_in), with transconductance g_m controlled by an external amplifier bias current (I_ABC)',
      'OTA output voltage is fixed at 5V',
      'OTA has zero open-loop bandwidth',
      'OTA operates only with digital clock inputs'
    ],
    correctAnswer: 0,
    explanation: 'An OTA is a voltage-controlled current source (VCCS) where $I_{out} = g_m (V_+ - V_-)$. The transconductance $g_m$ is electronically tunable via an external bias current $I_{ABC}$, ideal for voltage-controlled filters/amplifiers.'
  },
  {
    id: 'lic-20',
    topicId: 'linear_ic',
    category: 'Isolation Amplifiers',
    question: 'Why are Isolation Amplifiers mandatory in medical ECG/EEG patient monitoring instrumentation?',
    options: [
      'Breaks ohmic ground loops and blocks dangerous high-voltage line surges between patient electrodes and line-powered processing circuits',
      'Increases ECG voltage by 10,000x',
      'Converts heart rate to Bluetooth packets directly',
      'Eliminates the need for battery power'
    ],
    correctAnswer: 0,
    explanation: 'Isolation amplifiers use optical, capacitive, or transformer isolation barriers to eliminate galvanic connection between patient contacts and mains power, ensuring patient safety against leakage currents.'
  },
  ...HDL_VERIFICATION_QUESTIONS,
  ...EMBEDDED_MCU_QUESTIONS,
  ...CONTROL_AUTOMATION_QUESTIONS,
  ...QUANTUM_QUESTIONS,
  ...ADDITIONAL_HDL_QUESTIONS,
  ...ADDITIONAL_EMBEDDED_QUESTIONS,
  ...ADDITIONAL_CORE_ELECTRONICS_QUESTIONS,
  ...ADDITIONAL_SOC_FPGA_TOOLS_QUESTIONS
];
