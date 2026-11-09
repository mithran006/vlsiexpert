import { NEW_COMPANIES_QUESTIONS } from './interview/qualcommBroadcomArmQuestions';
import { GATE_VLSI_QUESTIONS } from './interview/gateQuestionsBank';
import { SAMSUNG_QUESTIONS } from './interview/samsungQuestions';

export type CompanyId = 
  | 'samsung'
  | 'synopsys' 
  | 'tata_elxsi' 
  | 'siemens' 
  | 'tsmc' 
  | 'nvidia_physical_ai' 
  | 'nvidia' 
  | 'amd' 
  | 'intel' 
  | 'cadence' 
  | 'google' 
  | 'ibm' 
  | 'tessolve'
  | 'qualcomm'
  | 'broadcom'
  | 'arm'
  | 'texas_instruments'
  | 'gate_vlsi';

export interface InterviewQuestion {
  id: string;
  companyId: CompanyId;
  category: string;
  question: string;
  keyPoints: string[];
  sampleAnswer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface CompanyInfo {
  id: CompanyId;
  name: string;
  tagline: string;
  focusDomains: string[];
  color: string;
  questionCount: number;
}

export const COMPANIES: CompanyInfo[] = [
  {
    id: 'samsung',
    name: 'Samsung Semiconductor',
    tagline: '3nm/2nm GAA MBCFET, Exynos SoCs, HBM3E/HBM4 Memory, 3D V-NAND Flash & ISOCELL 200MP',
    focusDomains: ['3nm/2nm GAA MBCFET Transistor Physics', 'Exynos SoC & Deca-Core Microarchitecture', 'HBM3E / HBM4 TSV & Hybrid Cu-Cu Bonding', '3D V-NAND Cell-On-Peri (COP) Flash', 'CXL 2.0/3.0 Memory Expanders', 'ISOCELL 200MP & Column SS-ADCs', 'Xclipse Mobile GPU (RDNA Hardware Ray Tracing)'],
    color: 'from-blue-700 via-indigo-800 to-sky-900',
    questionCount: 40
  },
  {
    id: 'qualcomm',
    name: 'Qualcomm Snapdragon',
    tagline: 'Oryon CPU, Hexagon NPU/DSP, 5G Baseband Modem, PMIC Subsystems & AXI Interconnect',
    focusDomains: ['Hexagon NPU/HVX Tensor Acceleration', 'Oryon Out-of-Order CPU Microarchitecture', '5G Baseband LDPC/Polar Decoders', 'MTCMOS & UPF Power Domains', 'AXI5 QoS & System NoC Fabrics', 'PMIC Buck/LDO Regulators'],
    color: 'from-blue-600 via-indigo-600 to-sky-700',
    questionCount: 40
  },
  {
    id: 'broadcom',
    name: 'Broadcom Networking',
    tagline: 'Tomahawk 5 51.2T Switch ASICs, Jericho Routing Silicon, 112G/224G PAM4 SerDes & PCIe Retimers',
    focusDomains: ['Tomahawk 5 Switch Shared Memory', '112G/224G PAM4 SerDes & DSP Equalization', 'PCIe Gen6/7 FLIT Framing', 'VOQ Crossbar Arbitration', 'H-Tree / Mesh CTS Distribution', 'Asynchronous Flow Control FIFOs'],
    color: 'from-red-600 via-rose-700 to-orange-700',
    questionCount: 40
  },
  {
    id: 'arm',
    name: 'Arm Holdings',
    tagline: 'Cortex-A/R/M Microarchitecture, AMBA AXI5/CHI Protocols, DynamIQ & TrustZone Security',
    focusDomains: ['AMBA CHI Coherent Interconnect', 'DynamIQ Shared Unit (DSU) Multi-Core', 'Hardware TrustZone & Firewalls', 'Superscalar Bypass Forwarding', 'Cortex-M Real-Time Pipelines', 'Snoop Filter Coherency'],
    color: 'from-teal-600 via-cyan-700 to-blue-800',
    questionCount: 40
  },
  {
    id: 'texas_instruments',
    name: 'Texas Instruments',
    tagline: 'Precision SAR/Delta-Sigma ADCs, High-Resolution PWM, Sitara & C2000 Embedded MCUs',
    focusDomains: ['SAR vs Delta-Sigma ADC Converters', 'High-Resolution Micro Edge PWM (HRPWM)', 'Synchronous Buck Regulators (PWM/PFM)', 'GaN/SiC Gate Drivers', 'Chopper Stabilized Op-Amps', 'Mixed-Signal Calibration'],
    color: 'from-red-700 via-amber-600 to-rose-700',
    questionCount: 40
  },
  {
    id: 'gate_vlsi',
    name: 'GATE VLSI / ECE Question Bank',
    tagline: '1000+ Previous Year Official Exam Questions (GATE 2000-2024) with Step-by-Step Analytical Solutions',
    focusDomains: ['Static Timing Analysis & Setup/Hold Slacks', 'CMOS Inverter VTC & Sizing', 'Sequential Counters & FSM Design', 'Minimal K-Map & Logic Synthesis', '8085/8086 Memory Address Decoding', 'Semiconductor Physics & PN Junctions', 'Carry Lookahead Arithmetic Adders'],
    color: 'from-emerald-600 via-teal-600 to-cyan-700',
    questionCount: 1000
  },
  {
    id: 'synopsys',
    name: 'Synopsys EDA',
    tagline: 'Design Compiler, PrimeTime STA, VCS Simulation, ICC2 Physical Implementation & VC Formal',
    focusDomains: ['PrimeTime Signoff STA & CPPR', 'Design Compiler RTL Synthesis', 'IC Compiler II (ICC2) P&R', 'VCS SystemVerilog/UVM & Testbench', 'DFT Compiler & TetraMAX ATPG', 'StarRC Extraction & Formality LEC'],
    color: 'from-purple-700 via-indigo-700 to-fuchsia-800',
    questionCount: 40
  },
  {
    id: 'tata_elxsi',
    name: 'Tata Elxsi Semiconductor',
    tagline: 'Automotive SoC, RTL Design, ISO 26262 ASIL-D, Verification (UVM), AUTOSAR & Physical Design',
    focusDomains: ['Automotive SoC Architecture', 'ISO 26262 Functional Safety (ASIL-D)', 'Verilog/SystemVerilog RTL Design', 'UVM & Formal Verification', 'CAN/LIN/Ethernet AVB Controllers', 'Low Power UPF & Static Timing Analysis'],
    color: 'from-blue-500 via-indigo-600 to-sky-700',
    questionCount: 40
  },
  {
    id: 'siemens',
    name: 'Siemens EDA',
    tagline: 'Tessent DFT, Calibre DRC/LVS, Questa Formal, Catapult HLS & Veloce Emulation',
    focusDomains: ['Tessent Scan/BIST/IJTAG', 'Calibre Physical Verification', 'Questa SystemVerilog/UVM', 'Catapult C++ HLS', 'Veloce Hardware Emulation', 'HyperLynx Signal Integrity'],
    color: 'from-teal-500 to-emerald-700',
    questionCount: 40
  },
  {
    id: 'tsmc',
    name: 'TSMC Foundry',
    tagline: '2nm GAAFET Physics, CoWoS 2.5D/3D Advanced Packaging, PDK & Standard Cells',
    focusDomains: ['N2/N3 GAAFET Transistor Physics', 'CoWoS-S/R/L & TSMC-SoIC 3D Bonding', 'PDK DRC/LVS Rule Decks', 'Standard Cell Characterization (.lib)', 'Design-Technology Co-Optimization (DTCO)', 'DFM & Yield Engineering'],
    color: 'from-amber-600 to-orange-700',
    questionCount: 40
  },
  {
    id: 'nvidia_physical_ai',
    name: 'NVIDIA Physical AI & Infra',
    tagline: 'GB200 NVL72 Rack Systems, NVLink Switch ASIC, Silicon Photonics & Jetson Robotics',
    focusDomains: ['GB200 NVL72 Rack Architecture', 'NVLink 5 Switch ASIC (7.2 Tbps)', 'Quantum-X / Spectrum-X InfiniBand & Ethernet', 'Silicon Photonics & CPO Transceivers', 'Megawatt Power VRM & Transient di/dt', 'Jetson Thor Robotics SoC & NVDLA 3.0'],
    color: 'from-emerald-400 to-lime-600',
    questionCount: 40
  },
  {
    id: 'nvidia',
    name: 'NVIDIA GPU Silicon',
    tagline: 'Blackwell/Hopper GPU Core, Tensor Cores, NVLink & High-Speed Asynchronous CDC',
    focusDomains: ['GPU Shader Units', 'High-Bandwidth Memory (HBM3e)', 'Tensor Cores (FP8/FP4)', 'Asynchronous CDC FIFOs'],
    color: 'from-emerald-500 to-green-700',
    questionCount: 40
  },
  {
    id: 'amd',
    name: 'AMD',
    tagline: 'Chiplet Architecture, Infinity Fabric & High-Performance x86 RTL',
    focusDomains: ['Chiplet Interconnects', 'Infinity Fabric', 'CDC Fifos', 'Zen Core Execution Pipeline'],
    color: 'from-red-600 to-rose-800',
    questionCount: 40
  },
  {
    id: 'intel',
    name: 'Intel',
    tagline: 'Advanced Packaging (EMIB/Foveros), 18A Process Nodes & SoC Architecture',
    focusDomains: ['EMIB Interconnect', 'x86 Out-of-Order Execution', 'Clock Tree Synthesis', 'PCIe Gen6 PHY'],
    color: 'from-blue-600 to-cyan-700',
    questionCount: 40
  },
  {
    id: 'google',
    name: 'Google VLSI',
    tagline: 'TPU Accelerators, Custom ASIC Silicon & ML Workload Processors',
    focusDomains: ['Systolic Arrays', 'Matrix Multiply Units (MXU)', 'HBM Controller', 'Low-Power ASIC'],
    color: 'from-amber-500 to-red-500',
    questionCount: 40
  },
  {
    id: 'cadence',
    name: 'Cadence Design Systems',
    tagline: 'EDA Tools, Physical Design Synthesis, STA & IP Core Verification',
    focusDomains: ['Static Timing Analysis (STA)', 'Innovus P&R', 'Genus Synthesis', 'UVM VIPs'],
    color: 'from-purple-600 to-pink-600',
    questionCount: 40
  },
  {
    id: 'ibm',
    name: 'IBM Silicon',
    tagline: 'Mainframe Processors, Telum AI Enclaves & Quantum/Cryo Integration',
    focusDomains: ['L2/L3 Cache Coherency', 'Superscalar Execution', 'PowerISA', 'Thermal/Power Management'],
    color: 'from-blue-700 to-indigo-900',
    questionCount: 40
  },
  {
    id: 'tessolve',
    name: 'Tessolve Semiconductor',
    tagline: 'Silicon Testing, ATE, DFT, Post-Silicon Validation & Package Design',
    focusDomains: ['DFT Scan Chains', 'ATPG Fault Models', 'JTAG IEEE 1149.1', 'ATE Test Programs'],
    color: 'from-orange-500 to-amber-700',
    questionCount: 40
  }
];

// ==========================================
// 1. SYNOPSYS EDA QUESTIONS (STA, SYNTHESIS, P&R, VCS, FORMAL)
// ==========================================
const generateSynopsysQuestions = (): InterviewQuestion[] => [
  {
    id: 'syn-1',
    companyId: 'synopsys',
    category: 'Signoff STA & PrimeTime',
    difficulty: 'Hard',
    question: 'How does Synopsys PrimeTime compute Common Path Pessimism Removal (CPPR / CRPR) on converging clock tree paths for Setup and Hold analysis?',
    keyPoints: ['Common Clock Path segment', 'OCV / POCV derating factors', 'Early vs Late launch/capture paths', 'Pessimism removal delta credit added to slack'],
    sampleAnswer: 'In On-Chip Variation (OCV) analysis, PrimeTime applies different derate factors to launch (late) and capture (early) clock paths. However, the physical clock tree segment shared from the clock source to the common ancestor point cannot physically run at two different speeds simultaneously. PrimeTime identifies this common pin, calculates the delay difference between early and late deratings on the shared segment, and adds this CPPR credit back to the slack calculation to prevent over-optimizing unrealistic timing violations.'
  },
  {
    id: 'syn-2',
    companyId: 'synopsys',
    category: 'RTL Synthesis & Design Compiler',
    difficulty: 'Hard',
    question: 'Explain the difference between compile_ultra optimization strategies in Design Compiler: Boundary Optimization, Register Retiming, and High-Effort Area Recovery.',
    keyPoints: ['compile_ultra top-level synthesis', 'Adaptive register retiming across combinational cloud', 'Boundary logic constant propagation and inverter pushing', 'Downsizing / VT-swapping during area recovery'],
    sampleAnswer: 'Design Compiler compile_ultra enables aggressive multi-variable synthesis. Boundary optimization propagates constants, complements inverted pins, and merges redundant logic across hierarchical module boundaries. Register retiming (compile_ultra -retime) relocates flip-flops across combinational logic clouds to balance critical path delays without changing architectural behavior. High-effort area recovery swaps fast LVT cells on non-critical paths with HVT/SVT cells to slash leakage power while preserving zero negative setup slack.'
  },
  {
    id: 'syn-3',
    companyId: 'synopsys',
    category: 'Physical Implementation & IC Compiler II (ICC2)',
    difficulty: 'Hard',
    question: 'In Synopsys IC Compiler II, explain the stages of Clock Tree Synthesis (CTS) and how Non-Default Rules (NDR) with double-spacing and shield wires prevent clock crosstalk glitch and slew degradation.',
    keyPoints: ['CTS skew vs insertion delay trade-off', 'Clock routing NDR (2W2S - 2x width, 2x spacing)', 'VSS/VDD ground shielding lines', 'Multi-Source CTS (MSCTS) and Clock Mesh architectures'],
    sampleAnswer: 'ICC2 CTS builds balanced clock distribution networks using inverter/buffer trees to minimize global skew and transition times. To prevent capacitive coupling and crosstalk jitter from neighboring switching signal nets, clock nets are assigned Non-Default Rules (NDR) such as double-width (lower resistance) and double-spacing (lower capacitance), accompanied by dedicated VSS shield tracks to eliminate crosstalk-induced delay variation.'
  },
  {
    id: 'syn-4',
    companyId: 'synopsys',
    category: 'Verification & Synopsys VCS / DVE',
    difficulty: 'Hard',
    question: 'How does Synopsys VCS implement 2-State (0, 1) vs 4-State (0, 1, X, Z) optimization with +radm and -xprop flags to catch uninitialized X-propagation bugs in gate-level simulation?',
    keyPoints: ['VCS Dynamic Race Detection', 'X-Propagation (-xprop=fwd / -xprop=tmerge)', '2-state compiler acceleration (+radm)', 'RTL vs Gate-level X-optimism discrepancies'],
    sampleAnswer: 'Standard RTL simulators exhibit "X-optimism" where if(x) branches evaluate to false, masking hardware metastability issues that will fail on real silicon. Synopsys VCS provides the -xprop compiler switch to enforce accurate non-deterministic hardware X-propagation models. For pure functional verification before tape-out, VCS applies 2-state optimization (+radm) to accelerate simulation throughput 2x-5x.'
  },
  {
    id: 'syn-5',
    companyId: 'synopsys',
    category: 'Formal Equivalence (Formality LEC)',
    difficulty: 'Hard',
    question: 'How does Synopsys Formality verify Logical Equivalence Checking (LEC) between golden RTL and synthesized gate-level netlists with scan-stitched and retimed registers?',
    keyPoints: ['Compare points (Registers, Black boxes, Primary Outputs)', 'Cone of logic Boolean solver (BDD / SAT solvers)', 'SVF (Synopsys Verification Format) automated guidance file', 'Clock gating cell equivalence and scan inversion matching'],
    sampleAnswer: 'Synopsys Formality partitions designs into independent Boolean cones bounded by compare points (flip-flops, latches, primary I/O). It uses SVF guidance generated by Design Compiler to map retimed registers, inverted scan chains, and clock-gating integrated cells, employing formal Boolean satisfiability (SAT) solvers to prove exact logical equivalence without dynamic simulation vectors.'
  },
  {
    id: 'syn-6',
    companyId: 'synopsys',
    category: 'DFT & TetraMAX ATPG',
    difficulty: 'Hard',
    question: 'Describe how Synopsys DFT Compiler inserts On-Chip Clock Controller (OCC) logic to support At-Speed Launch-off-Capture (LOC) and Launch-off-Shift (LOS) transition delay fault testing.',
    keyPoints: ['On-Chip Clock Controller (OCC / OPCG)', 'Launch-off-Capture (LOC / Broadside)', 'Launch-off-Shift (LOS / Skewed Load)', 'Fast capture pulses from internal PLL during test mode'],
    sampleAnswer: 'External ATE testers cannot pulse tester channels at high GHz operating frequencies. DFT Compiler inserts OCC modules that gate high-speed on-chip PLL clocks. In LOC mode, the scan enable de-asserts slowly, and two back-to-back at-speed functional clock pulses launch transition transitions and capture responses, allowing TetraMAX ATPG to achieve >95% transition delay fault coverage.'
  },
  {
    id: 'syn-7',
    companyId: 'synopsys',
    category: 'Static Timing & Advanced OCV (POCV / AOCV)',
    difficulty: 'Hard',
    question: 'What is Parametric On-Chip Variation (POCV) in PrimeTime, and how does it replace traditional flat OCV deratings using standard deviation sigma ($3\\sigma$) statistical tables?',
    keyPoints: ['Single-parameter Gaussian distribution', 'Distance-based spatial correlation', 'Root-Sum-Square (RSS) statistical path delay addition', 'Elimination of over-pessimism in advanced 3nm/2nm FinFET/GAAFET nodes'],
    sampleAnswer: 'Traditional OCV applies a flat worst-case margin (e.g. ±10%) across all gates, which becomes unrealistically pessimistic on deep sub-micron paths with hundreds of stages. PrimeTime POCV models each cell delay as a nominal delay plus a sensitivity factor multiplied by random variation (Gaussian distribution $C = \text{delay} \times (1 + \sigma)$). Because independent variations cancel out statistically along long logic chains, POCV adds standard deviations using Root-Sum-Square (RSS), saving tens of picoseconds of timing budget.'
  },
  {
    id: 'syn-8',
    companyId: 'synopsys',
    category: 'Parasitic Extraction (StarRC)',
    difficulty: 'Hard',
    question: 'How does Synopsys StarRC perform 3D Field Solver extraction and multi-corner parasitic coupling capacitance ($C_c$) reduction for advanced FinFET gate-all-around devices?',
    keyPoints: ['3D Field Solver boundary element method', 'Coupling capacitance extraction ($C_c$) between adjacent metal tracks', 'SPEF (Standard Parasitic Exchange Format) output', 'Temperature dependent wire resistance $R(T)$'],
    sampleAnswer: 'StarRC translates GDSII/OASIS layouts with Foundry Interconnect Technology (ITF) models into precise RC networks. It employs fast 3D field solvers to compute fringe capacitances, fin-to-gate 3D fringing, and multi-layer metal coupling ($C_c$), outputting compressed SPEF files annotated into PrimeTime for signal integrity crosstalk delay calculation.'
  },
  ...Array.from({ length: 32 }, (_, i) => ({
    id: `syn-${i + 9}`,
    companyId: 'synopsys' as const,
    category: ['PrimeTime STA & Timing', 'Design Compiler RTL Synthesis', 'IC Compiler II P&R', 'VCS Simulation & Verification', 'DFT Compiler & ATPG', 'StarRC & Formality LEC'][i % 6],
    difficulty: (i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy') as 'Hard' | 'Medium' | 'Easy',
    question: [
      `Synopsys Q${i + 9}: Explain how set_multicycle_path constraints are formulated in SDC for multi-cycle arithmetic pipelines without causing hold-time races in PrimeTime.`,
      `Synopsys Q${i + 9}: In Design Compiler, how do you handle asynchronous reset deassertion synchronizer timing constraints and set_false_path directives?`,
      `Synopsys Q${i + 9}: Describe Congestion Map analysis and pin density reduction techniques in Synopsys IC Compiler II (ICC2) floorplanning.`,
      `Synopsys Q${i + 9}: How does Synopsys VCS Native Testbench (NTB) compiler optimize SystemVerilog constrained-random sequence generation performance?`,
      `Synopsys Q${i + 9}: Explain how TetraMAX ATPG analyzes and resolves scan chain clock domain crossing contention during shift and capture cycles.`,
      `Synopsys Q${i + 9}: How does Synopsys Formality diagnose non-equivalent verification cones using error candidate isolation and counter-example traces?`
    ][i % 6],
    keyPoints: ['Synopsys EDA signoff methodologies', 'PrimeTime / ICC2 / VCS best practices', 'Silicon closure and timing convergence', 'Industry-standard SDC/UPF constraints'],
    sampleAnswer: `Synopsys EDA workflows emphasize rigorous signoff timing closure, high-throughput verification, and defect-free silicon realization across leading-edge foundry process nodes.`
  }))
];

// ==========================================
// 2. TATA ELXSI SEMICONDUCTOR QUESTIONS (AUTOMOTIVE SoC & SILICON)
// ==========================================
const generateTataElxsiQuestions = (): InterviewQuestion[] => [
  {
    id: 'tata-1',
    companyId: 'tata_elxsi',
    category: 'Automotive SoC & ISO 26262 ASIL-D',
    difficulty: 'Hard',
    question: 'How do you implement Dual-Core Lockstep (DCLS) architecture with diverse hardware delay and parity checkers in an Automotive Safety MCU to achieve ISO 26262 ASIL-D compliance?',
    keyPoints: ['Dual-Core Lockstep (DCLS)', 'Redundant comparator logic', 'Common Cause Failure (CCF) mitigation', 'Temporal stagger (2-cycle delay)', 'Diagnostic Coverage >99% for ASIL-D'],
    sampleAnswer: 'In Tata Elxsi automotive safety SoCs, Lockstep cores execute identical instruction streams simultaneously. To prevent Common Cause Failures (such as clock glitches or localized voltage droops), the slave core execution is temporally staggered by 2 clock cycles and physically mirrored across the layout. Dedicated hardware comparators compare outputs on every cycle, asserting a non-maskable Safety Fault Alarm if any mismatch occurs.'
  },
  {
    id: 'tata-2',
    companyId: 'tata_elxsi',
    category: 'Automotive Protocol RTL (CAN-FD / LIN)',
    difficulty: 'Hard',
    question: 'Explain Bit Stuffing, CRC Calculation, and Bit Rate Switching (BRS) in CAN-FD controller RTL design in Verilog. How do you handle clock tolerance between arbitration and data phases?',
    keyPoints: ['Bit Stuffing Rule (5 consecutive equal bits insert inverted bit)', 'Fixed Stuff Bits in CRC field for CAN-FD', 'Bit Rate Switching (BRS bit)', 'Transmitter Delay Compensation (TDC) secondary sample point'],
    sampleAnswer: 'CAN-FD operates with two distinct bit rates: slow arbitration phase (e.g. 500 kbps) and fast data payload phase (up to 5-8 Mbps). When the BRS bit is asserted, the baud rate generator shifts clock dividers. In RTL, dynamic bit stuffing is enforced during arbitration (stuff bit inserted after 5 identical bits), whereas the CRC field utilizes fixed stuff bits. A Transmitter Delay Compensation (TDC) unit measures transceiver loopback delay to calibrate the Secondary Sample Point (SSP).'
  },
  {
    id: 'tata-3',
    companyId: 'tata_elxsi',
    category: 'Low Power & UPF (Unified Power Format)',
    difficulty: 'Hard',
    question: 'In an Automotive Gateway SoC, explain how UPF 3.0 power domains, Isolation Cells (ISO), Level Shifters (ELS), and State Retention Power Gating (SRPG) cells are instantiated and verified.',
    keyPoints: ['Power Gated Domain vs Always-On Domain', 'Isolation cell clamping (clamp-to-0 / clamp-to-1)', 'Level shifters for multi-voltage rails', 'Power Switch Cells (Header/Footer PMOS/NMOS)', 'Power State Table (PST) verification'],
    sampleAnswer: 'Tata Elxsi power architecture uses UPF to define power domains (e.g. PD_CPU, PD_CAN_WAKEUP, PD_AON). When PD_CPU powers down, isolation cells clamp crossing signals to safe deterministic values (0 or 1) to prevent floating gate crowbar currents in PD_AON. Level shifters translate signal voltages between 0.8V core logic and 1.8V/3.3V I/O domains, while SRPG flip-flops preserve crucial CPU state in low-leakage backup latches.'
  },
  {
    id: 'tata-4',
    companyId: 'tata_elxsi',
    category: 'Clock Domain Crossing (CDC) in Automotive SoCs',
    difficulty: 'Hard',
    question: 'How do you design and formally verify a Multi-Bit Asynchronous CDC FIFO between an Automotive Camera ISP (250 MHz) and an AXI-Stream Vision Accelerator (400 MHz)?',
    keyPoints: ['Dual-clock FIFO with Gray code pointers', '2-Flop synchronizer MTBF calculation', 'FIFO Full/Empty flag generation in respective clock domains', 'Structural CDC checks using Synopsys SpyGlass / Questa CDC'],
    sampleAnswer: 'To transfer multi-bit data between asynchronous clock domains without data corruption, a Dual-Clock Asynchronous FIFO is utilized. Write and read address pointers are converted to Gray code before synchronization via 2-stage flip-flop synchronizers (ensuring only 1 bit flips at a time to prevent multi-bit skew metastability). Empty flag is generated in the Read clock domain by comparing synchronized write pointer, while Full flag is generated in Write domain.'
  },
  {
    id: 'tata-5',
    companyId: 'tata_elxsi',
    category: 'SystemVerilog / UVM Verification',
    difficulty: 'Hard',
    question: 'Describe how you architect a UVM verification environment for an Automotive Ethernet TSN (Time-Sensitive Networking, IEEE 802.1Qbv) Controller with scheduled traffic queues.',
    keyPoints: ['UVM Agent (Sequencer, Driver, Monitor)', 'TLM 2.0 Analysis Ports', 'Scoreboard with Reference Model', 'Functional Coverage & SVA temporal assertions for Qbv Gate Control Lists (GCL)'],
    sampleAnswer: 'The UVM environment comprises UVM Agents for Ethernet MII/RGMII and AXI interfaces. A UVM Virtual Sequencer coordinates time-triggered frame injection according to the IEEE 802.1Qbv Gate Control List (GCL). The monitor extracts packets and passes them via TLM analysis ports to the UVM Scoreboard, where a C++ golden reference model verifies strict deterministic arrival latency and zero packet drop on high-priority traffic.'
  },
  {
    id: 'tata-6',
    companyId: 'tata_elxsi',
    category: 'Static Timing Analysis & Physical Design',
    difficulty: 'Hard',
    question: 'How do you resolve Setup and Hold timing violations across Multi-Corner Multi-Mode (MCMM) scenarios in Automotive Grade-0 (-40°C to +150°C) semiconductor designs?',
    keyPoints: ['Grade-0 Automotive Temperature Inversion', 'Setup corner (Slow-Slow, 0.72V, 150°C / -40°C)', 'Hold corner (Fast-Fast, 0.88V, -40°C / 150°C)', 'Clock Tree Synthesis (CTS) skew balancing', 'Useful skew and buffer insertion'],
    sampleAnswer: 'Automotive Grade-0 chips experience severe temperature inversion where cells at nanometer nodes can be slower at -40°C than at 150°C due to threshold voltage shifts. Physical design engineers define comprehensive MCMM views covering SSG 0.72V (-40°C and 150°C) for Setup closure and FFG 0.88V (-40°C and 150°C) for Hold closure. Hold violations are resolved by inserting delay buffers on min-delay data paths without degrading max-delay setup slack.'
  },
  {
    id: 'tata-7',
    companyId: 'tata_elxsi',
    category: 'DFT & Automotive Built-In Self-Test',
    difficulty: 'Hard',
    question: 'What is Logic BIST (LBIST) and Memory BIST (MBIST), and how are they scheduled during automotive power-on self-test (POST) and runtime key-off diagnostics?',
    keyPoints: ['PRPG pseudo-random pattern generation & MISR compactor', 'March C- / March SS memory test algorithms', 'At-Speed Transition Fault testing with PLL clock bursts', 'Diagnostic coverage report for ISO 26262 metrics (SPFM > 99%)'],
    sampleAnswer: 'LBIST uses an on-chip PRPG and MISR to apply at-speed test patterns to standard logic without an external ATE tester. MBIST performs March tests on embedded SRAMs to detect stuck-at, transition, and coupling faults. In automotive ECUs, POST execution must complete in <50ms upon vehicle ignition key-turn, reporting signature PASS/FAIL status to the Safety Management Unit.'
  },
  {
    id: 'tata-8',
    companyId: 'tata_elxsi',
    category: 'AUTOSAR MCAL & Hardware-Software Co-Design',
    difficulty: 'Medium',
    question: 'How does an AUTOSAR Microcontroller Abstraction Layer (MCAL) driver interact with memory-mapped hardware peripheral registers (e.g. SPI, CAN, PWM, ADC)?',
    keyPoints: ['Memory-Mapped I/O (MMIO) and volatile register pointers', 'Hardware register status bit polling vs ISR interrupt dispatch', 'AUTOSAR Standard API abstraction', 'Direct Memory Access (DMA) channel descriptor chaining'],
    sampleAnswer: 'AUTOSAR MCAL provides standardized hardware-agnostic C APIs (e.g. Spi_WriteIB, Can_Write). The driver maps peripheral register base addresses using volatile typed struct pointers to prevent compiler optimization caching. For high-throughput transfers, MCAL configures DMA channel ring descriptors to offload CPU intervention.'
  },
  ...Array.from({ length: 32 }, (_, i) => ({
    id: `tata-${i + 9}`,
    companyId: 'tata_elxsi' as const,
    category: ['Automotive SoC', 'ISO 26262 ASIL-D', 'Verilog/SystemVerilog RTL', 'UVM Verification', 'CAN/LIN/Ethernet TSN', 'Low Power UPF & STA'][i % 6],
    difficulty: (i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy') as 'Hard' | 'Medium' | 'Easy',
    question: [
      `Tata Elxsi Q${i + 9}: How do you design an ISO 26262 compliant hardware watchdog timer with challenge-response token authentication in Verilog RTL?`,
      `Tata Elxsi Q${i + 9}: Explain how Single Point Fault Metric (SPFM) and Latent Fault Metric (LFM) are computed for an automotive radar DSP hardware block.`,
      `Tata Elxsi Q${i + 9}: Describe the implementation of an AXI4-Lite slave interface with burst support and unaligned byte enable handling in SystemVerilog.`,
      `Tata Elxsi Q${i + 9}: In UVM verification, how do you model and inject transient single-event upset (SEU) bit-flips to verify ECC error correction logic?`,
      `Tata Elxsi Q${i + 9}: Explain how Clock Jitter and Clock Uncertainty are budgeted in SDC timing constraints for high-speed Automotive SerDes interfaces.`,
      `Tata Elxsi Q${i + 9}: How do you implement power gating with retention flip-flops in UPF to ensure low battery drain (<100uA) in parked automotive vehicles?`
    ][i % 6],
    keyPoints: ['Tata Elxsi automotive silicon standards', 'ISO 26262 functional safety rigor', 'RTL & UVM verification best practices', 'Silicon timing & power convergence'],
    sampleAnswer: `Tata Elxsi semiconductor engineering emphasizes zero-defect automotive quality, robust fault-tolerant RTL architecture, and rigorous multi-corner verification standards.`
  }))
];

// ==========================================
// 2. SIEMENS EDA (MENTOR GRAPHICS) QUESTIONS
// ==========================================
const generateSiemensQuestions = (): InterviewQuestion[] => [
  {
    id: 'siem-1',
    companyId: 'siemens',
    category: 'DFT & Tessent TestKompress',
    difficulty: 'Hard',
    question: 'How does Siemens Tessent TestKompress use embedded determinism and linear feedback PRPG/MISR to achieve 100x pattern compression for scan testing?',
    keyPoints: ['Continuous Flow Compressor', 'Linear Decompressor (PRPG)', 'MISR response compactor', 'Care bits vs Uncare (X) bits'],
    sampleAnswer: 'Tessent TestKompress exploits the fact that over 98% of ATPG test pattern bits are "don\'t-care" (X) bits. A small set of deterministic care bits is fed to an on-chip PRPG ring generator which dynamically decompresses the tester channel data into hundreds of internal scan chains. Output responses pass through an X-tolerant MISR/compactor before reaching tester pins.'
  },
  {
    id: 'siem-2',
    companyId: 'siemens',
    category: 'Physical Verification & Calibre DRC',
    difficulty: 'Hard',
    question: 'In Siemens Calibre nmDRC, how do SVRF (Standard Verification Rule Format) rule decks handle multi-patterning (SADP/SAQP) decomposition and colored spacing checks at 3nm nodes?',
    keyPoints: ['SVRF layer operations', 'Spacer-Assisted Quadruple Patterning (SAQP)', 'Even/Odd color mask assignment', 'Calibre Multi-Patterning (CMP) engine'],
    sampleAnswer: 'Calibre SVRF uses geometric layer boolean operations and graph coloring algorithms to decompose target critical metal layers into separate lithographic mask exposures (e.g. Mandrel and Non-Mandrel tracks). It flags odd-cycle graph conflicts where coloring constraints cannot satisfy minimum same-mask spacing rules.'
  },
  {
    id: 'siem-3',
    companyId: 'siemens',
    category: 'Calibre LVS & Parasitic Extraction (PEX)',
    difficulty: 'Hard',
    question: 'Explain how Calibre nmLVS performs device extraction, well proximity effect (WPE) calculation, and netlist comparison for FinFET/GAAFET transistors.',
    keyPoints: ['Device recognition rules', 'MOSFET gate/fin polygon extraction', 'Layout vs Schematic graph isomorphism', 'WPE and Shallow Trench Isolation (STI) stress parameters'],
    sampleAnswer: 'Calibre nmLVS extracts MOS devices by intersecting poly-gate, active-fin, and diffusion contact layers. It computes geometric parameters like SA/SB/SC (distance to well edges) and Fin counts per finger, then translates the layout into an SPICE netlist to run graph-matching algorithms against schematic netlists to verify topological isomorphism.'
  },
  {
    id: 'siem-4',
    companyId: 'siemens',
    category: 'Hardware Emulation & Veloce',
    difficulty: 'Hard',
    question: 'How does the Siemens Veloce Strato emulation platform perform transaction-based acceleration (TBA) with SCE-MI (Standard Co-Emulation Modeling Interface)?',
    keyPoints: ['Hardware Transactors / Speed Bridges', 'SCE-MI 2.0 pipe interface', 'Cycle-accurate hardware emulator', 'Host workstation to emulator clock decoupling'],
    sampleAnswer: 'Veloce synthesizes the RTL design onto custom emulation silicon while the software testbench runs on a host PC. SCE-MI transactors convert high-level UVM transactions (reads/writes) into pin-level bit streams inside the emulator via high-speed streaming pipes, eliminating millions of pin-level PCI roundtrips and accelerating execution 10,000x over software simulation.'
  },
  {
    id: 'siem-5',
    companyId: 'siemens',
    category: 'High-Level Synthesis (Catapult HLS)',
    difficulty: 'Hard',
    question: 'In Siemens Catapult HLS, how are C++ algorithmic loops mapped into pipelined and unrolled Verilog/SystemVerilog RTL architectures with specific Initiation Intervals (II)?',
    keyPoints: ['Initiation Interval (II=1)', 'Loop unrolling (#pragma HLS UNROLL)', 'Resource sharing & loop pipelining', 'Static schedule latency & array mapping to dual-port SRAM'],
    sampleAnswer: 'Catapult HLS analyzes data dependency graphs in C++/SystemC code. Loop pipelining allows new loop iterations to start every II clock cycles before previous iterations finish. Loop unrolling replicates hardware functional units (multipliers/adders) in parallel to trade chip area for throughput.'
  },
  {
    id: 'siem-6',
    companyId: 'siemens',
    category: 'Formal Verification & Questa Formal',
    difficulty: 'Hard',
    question: 'How does Siemens Questa Formal verify deadlocks and FIFO overflow/underflow using Model Checking without requiring testbench stimulus?',
    keyPoints: ['SystemVerilog Assertions (SVA)', 'Bounded Model Checking (BMC)', 'K-induction proof engine', 'State space reachability analysis'],
    sampleAnswer: 'Questa Formal translates the RTL and SVA assertions into boolean satisfiability (SAT) and binary decision diagram (BDD) formulas. Using formal model checking and K-induction, it mathematically proves that an error state (such as write on full FIFO or arbiter deadlock) is impossible across all possible input sequences for infinite cycles.'
  },
  {
    id: 'siem-7',
    companyId: 'siemens',
    category: 'Signal Integrity & HyperLynx',
    difficulty: 'Medium',
    question: 'How does Siemens HyperLynx simulate high-speed SerDes eye diagrams, jitter, and transmission line impedance matching for DDR5 / PCIe Gen 5 interfaces?',
    keyPoints: ['IBIS-AMI behavioral models', 'Differential pair microstrip impedance (Z0)', 'Eye width / eye height opening', 'Inter-Symbol Interference (ISI) & crosstalk'],
    sampleAnswer: 'HyperLynx runs transient and S-parameter channel simulations using IBIS-AMI models. It computes transmission line reflections from impedance mismatches, dielectric losses, and cross-coupling, generating eye diagram contours to ensure bit error rates (BER < 10^-12) meet DDR5 and PCIe specifications.'
  },
  {
    id: 'siem-8',
    companyId: 'siemens',
    category: 'Tessent IJTAG (IEEE 1687)',
    difficulty: 'Hard',
    question: 'Explain IEEE 1687 (IJTAG) internal JTAG architecture and how Tessent IJTAG manages reconfigurable scan networks (SIB - Segment Insertion Bits).',
    keyPoints: ['Segment Insertion Bit (SIB)', 'Instrument Connectivity Language (ICL)', 'Procedural Description Language (PDL)', 'Dynamic scan chain length reconfiguration'],
    sampleAnswer: 'IEEE 1687 IJTAG allows on-chip instruments (MBIST engines, thermal monitors, PLL controllers) to be plugged into reconfigurable scan networks. SIB cells act as dynamic switches: when programmed to 1, they open sub-scan paths containing specific test instruments, enabling modular test without excessively long scan chains.'
  },
  ...Array.from({ length: 32 }, (_, i) => ({
    id: `siem-${i + 9}`,
    companyId: 'siemens' as const,
    category: ['Tessent DFT', 'Calibre Physical Verification', 'Questa Verification', 'Catapult HLS', 'Veloce Emulation', 'HyperLynx SI/PI'][i % 6],
    difficulty: (i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy') as 'Hard' | 'Medium' | 'Easy',
    question: [
      `Siemens Q${i + 9}: How do you configure Tessent MemoryBIST to run March C- and March SS algorithms on multi-port embedded SRAMs with repair redundancy?`,
      `Siemens Q${i + 9}: Explain how Calibre PERC performs electrostatic discharge (ESD) and electrical rule checking on multi-voltage domain boundaries.`,
      `Siemens Q${i + 9}: Describe the Questa SystemVerilog UVM sequence-driver-monitor communication architecture with TLM 2.0 non-blocking sockets.`,
      `Siemens Q${i + 9}: In Catapult HLS, how do memory banking pragmas prevent memory port contention during multi-tap FIR filter synthesis?`,
      `Siemens Q${i + 9}: How does Veloce ICE (In-Circuit Emulation) handle asynchronous clock domain crossings between physical tester hardware and virtual emulator RTL?`,
      `Siemens Q${i + 9}: Explain power integrity DC drop (IR drop) and AC switching ripple analysis in HyperLynx PI on multi-layer PCB packages.`
    ][i % 6],
    keyPoints: ['Siemens EDA tool algorithms', 'RTL & Physical design convergence', 'DFT/Formal verification rigor', 'Signal and power integrity metrics'],
    sampleAnswer: `Siemens EDA methodologies optimize design productivity through automated synthesis, rigorous mathematical verification, and silicon-calibrated physical rule closure.`
  }))
];

// ==========================================
// 2. TSMC (TAIWAN SEMICONDUCTOR FOUNDRY) QUESTIONS
// ==========================================
const generateTsmcQuestions = (): InterviewQuestion[] => [
  {
    id: 'tsmc-1',
    companyId: 'tsmc',
    category: 'Advanced Device Physics (GAAFET vs FinFET)',
    difficulty: 'Hard',
    question: 'Compare TSMC N3 (FinFET) and N2 (Nanosheet Gate-All-Around GAAFET) technologies in terms of electrostatic channel control, short-channel effects, and subthreshold swing.',
    keyPoints: ['Nanosheet 4-sided gate wrap-around', 'Drain-Induced Barrier Lowering (DIBL)', 'Subthreshold swing near ideal 60 mV/dec', 'Drive current per footprint (Effective Width Weff)'],
    sampleAnswer: 'In TSMC N2 GAAFET, horizontally stacked nanosheets are enclosed on all four sides by the gate oxide/metal gate. This eliminates bottom leakage paths present in FinFETs, dramatically reduces DIBL, brings subthreshold swing closer to the theoretical 60 mV/decade limit, and enables continuous drive strength scaling by modulating nanosheet sheet width.'
  },
  {
    id: 'tsmc-2',
    companyId: 'tsmc',
    category: 'Advanced Packaging (CoWoS-S/R/L)',
    difficulty: 'Hard',
    question: 'Explain the structural differences between TSMC CoWoS-S (Silicon Interposer), CoWoS-R (RDL Interposer), and CoWoS-L (Local Silicon Interconnect LSI with RDL) in multi-chiplet AI accelerator modules.',
    keyPoints: ['CoWoS-S with full silicon interposer & TSVs', 'CoWoS-L localized silicon bridge under die edges', 'Fine pitch microbumps (25-40um) & High-Bandwidth Memory (HBM3e) routing', 'Warpage & thermal dissipation coefficient'],
    sampleAnswer: 'CoWoS-S uses a monolithic silicon interposer with high-density TSVs supporting up to 3.3x reticle size. CoWoS-L integrates small localized silicon bridges (LSI) embedded in organic redistribution layer (RDL) substrate to provide ultra-dense sub-micron routing only where needed (between SoC and HBM3e), lowering substrate cost while preventing large silicon die warpage.'
  },
  {
    id: 'tsmc-3',
    companyId: 'tsmc',
    category: 'TSMC-SoIC 3D Stacking & Hybrid Bonding',
    difficulty: 'Hard',
    question: 'How does TSMC-SoIC (System on Integrated Chips) achieve sub-micron bond pitch using direct Cu-Cu hybrid bonding without microbumps?',
    keyPoints: ['Direct Copper-to-Copper & Dielectric-to-Dielectric fusion', 'Sub-micron bond pitch (< 1 micron)', 'Ultra-low parasitic resistance & capacitance', 'Chemical Mechanical Polishing (CMP) surface flatness'],
    sampleAnswer: 'TSMC-SoIC uses bumpless hybrid bonding where polished hydrophilic dielectric layers (SiO2/SiCN) and copper pads are brought together at room temperature followed by annealing. Copper thermally expands to create direct metallic bonds, reducing bond pitch below 1um and cutting interconnect parasitic capacitance by >80% compared to traditional microbumps.'
  },
  {
    id: 'tsmc-4',
    companyId: 'tsmc',
    category: 'Standard Cell Characterization & Liberty (.lib)',
    difficulty: 'Hard',
    question: 'In TSMC PDK standard cell libraries, explain the difference between NLDM (Non-Linear Delay Model) and CCS (Composite Current Source) / ECSM timing models for advanced nanometer nodes.',
    keyPoints: ['NLDM table lookup based on Input Transition and Output Capacitance', 'CCS driver current waveform I(t) and receiver capacitance C(t)', 'Non-linear Miller effect on gate input capacitance', 'High RC interconnect shielding in 3nm/2nm metal stacks'],
    sampleAnswer: 'NLDM models cell delay as a 2D matrix of input transition and output load, assuming ideal linear capacitive loads. At 3nm/2nm where interconnect resistance exceeds gate load capacitance, CCS represents cell drivers as dynamic time-variant current sources I(t) with multi-segment receiver capacitances, accurately modeling resistive shielding and non-linear waveform tails.'
  },
  {
    id: 'tsmc-5',
    companyId: 'tsmc',
    category: 'Backside Power Delivery Network (BSPDN / SuperPower)',
    difficulty: 'Hard',
    question: 'How does TSMC Backside Power Delivery (A16 node SuperPower) solve Frontside BEOL routing congestion and IR drop in high-frequency compute tiles?',
    keyPoints: ['Backside power rails & Nano-TSVs', 'Decoupling signal BEOL from power delivery network', 'Elimination of IR drop on top metal layers', '15-20% standard cell density improvement'],
    sampleAnswer: 'Traditional chips route power and ground grids on the top frontside metal layers (M1-M15), causing heavy routing congestion and resistive IR drop. TSMC BSPDN thins the silicon wafer and places thick copper power rails on the backside, contacting transistor source/drain via nano-TSVs. This frees up frontside metal layers exclusively for signal routing, reducing IR drop and boosting cell density.'
  },
  {
    id: 'tsmc-6',
    companyId: 'tsmc',
    category: 'Design for Manufacturing (DFM) & Yield',
    difficulty: 'Hard',
    question: 'What are Antenna Rules (Gate Oxide Breakdown) in TSMC PDK DRC, and what are the two main design fixes during physical design routing?',
    keyPoints: ['Plasma etching charge accumulation', 'Antenna Ratio (Metal Area / Gate Area)', 'Fix 1: Metal layer jumping (routing to higher metal then dropping down)', 'Fix 2: Antenna diode insertion connected to ground'],
    sampleAnswer: 'During plasma etching, long disconnected metal wires act as antennas that collect electrostatic charge, inducing high voltage across thin transistor gate oxides and causing dielectric breakdown. Fix 1 is metal layer jumping (jumping to top metal near the destination to disconnect the antenna). Fix 2 is inserting reverse-biased antenna clamp diodes to discharge accumulated electrons to substrate.'
  },
  {
    id: 'tsmc-7',
    companyId: 'tsmc',
    category: 'Design-Technology Co-Optimization (DTCO)',
    difficulty: 'Medium',
    question: 'How does DTCO achieve standard cell height reduction (e.g. 6T to 5T cell libraries) using Contacted Poly Pitch (CPP) scaling and Single Diffusion Break (SDB)?',
    keyPoints: ['Track height = Cell Height / Metal-2 Pitch', 'Continuous Active Diffusion vs Single Diffusion Break (SDB)', 'Single-fin vs multi-fin transistor drive trade-off', 'Contact over Active Gate (COAG)'],
    sampleAnswer: 'DTCO tightens contacted poly pitch (CPP) and implements Single Diffusion Break (SDB) instead of double diffusion breaks between standard cells to save horizontal space. Vertical height is reduced from 6T to 5T by utilizing Contact over Active Gate (COAG) and optimizing nanosheet drive strength to maintain required switching speed with fewer vertical tracks.'
  },
  {
    id: 'tsmc-8',
    companyId: 'tsmc',
    category: 'ESD & Latch-up Protection',
    difficulty: 'Hard',
    question: 'Explain the parasitic SCR (Silicon Controlled Rectifier) trigger mechanism in CMOS latch-up and how TSMC guard rings and well tap placement rules prevent it.',
    keyPoints: ['Parasitic pnpn bipolar structure', 'Substrate resistance Rsub and Well resistance Rwell', 'Regenerative positive feedback latch-up loop', 'P+/N+ Guard ring rules and maximum well tap distance (< 15um)'],
    sampleAnswer: 'In CMOS, parasitic p-n-p (in N-well) and n-p-n (in P-substrate) BJTs form a cross-coupled SCR structure. A voltage transient injects current through substrate/well resistances, turning on the BJTs into a self-sustaining low-impedance short between VDD and GND. TSMC enforces guard rings and maximum spacing between well taps (e.g. <15-20um) to shunt stray carriers directly to rails.'
  },
  ...Array.from({ length: 32 }, (_, i) => ({
    id: `tsmc-${i + 9}`,
    companyId: 'tsmc' as const,
    category: ['GAAFET Physics', 'CoWoS 3D Packaging', 'PDK Rules', 'Standard Cell Characterization', 'DFM & Yield', 'ESD/Latchup'][i % 6],
    difficulty: (i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy') as 'Hard' | 'Medium' | 'Easy',
    question: [
      `TSMC Q${i + 9}: How do extreme ultraviolet (EUV) double-patterning and high-NA EUV lithography limit minimum pitch scaling in TSMC N2 nodes?`,
      `TSMC Q${i + 9}: Describe thermal stress and warpage analysis in 2.5D CoWoS packaging when integrating 8 HBM3e stacks around an AI processor die.`,
      `TSMC Q${i + 9}: How is electromigration (EM) mean-time-to-failure (Black's Equation) calculated for narrow lower metal lines (M0/M1) at 125°C junction temp?`,
      `TSMC Q${i + 9}: What is the role of dummy metal fill and density gradient rule checking in chemical-mechanical planarization (CMP) yield?`,
      `TSMC Q${i + 9}: Explain the operation of TSMC Silicon Interposer passive high-density deep trench capacitors (DTC) in smoothing core power supply transients.`,
      `TSMC Q${i + 9}: How do multi-threshold voltage standard cells (uLVT, LVT, SVT, HVT) balance subthreshold leakage vs clock-to-q timing slack across PVT corners?`
    ][i % 6],
    keyPoints: ['Foundry process rules', 'Advanced 2.5D/3D packaging reliability', 'EUV lithography & variability', 'Silicon yield and DFM metrics'],
    sampleAnswer: `TSMC foundry engineering integrates state-of-the-art GAAFET nanosheets, CoWoS 3D packaging, and rigorous DTCO design rules to maximize chip performance, power efficiency, and silicon yield.`
  }))
];

// =======================================================
// 3. NVIDIA PHYSICAL AI INFRASTRUCTURE BRANCH QUESTIONS
// =======================================================
const generateNvidiaPhysicalAiQuestions = (): InterviewQuestion[] => [
  {
    id: 'nvai-1',
    companyId: 'nvidia_physical_ai',
    category: 'GB200 NVL72 Rack Architecture',
    difficulty: 'Hard',
    question: 'Describe the hardware interconnect architecture of the NVIDIA GB200 NVL72 rack-scale computer. How do 72 Blackwell GPUs act as a single unified GPU with 130 TB/s bisection bandwidth?',
    keyPoints: ['Dual-chiplet GB200 Superchip (Grace CPU + 2 Blackwell GPUs)', 'NVLink 5 backplane (1.8 TB/s bidirectional per GPU)', '9 NVLink Switch trays with 18 NVLink Switch ASICs', 'Direct-to-chip liquid cooling copper cartridge busbar'],
    sampleAnswer: 'The GB200 NVL72 connects 36 Grace CPUs and 72 Blackwell GPUs in a single liquid-cooled rack. It uses 18 NVLink Switch ASICs distributed across 9 switch trays, linked to compute trays through a blind-mate high-density copper backplane cartridge with 5,184 copper cables, delivering 1.8 TB/s per GPU of memory-coherent bandwidth without optical transceivers inside the rack.'
  },
  {
    id: 'nvai-2',
    companyId: 'nvidia_physical_ai',
    category: 'NVLink 5 Switch ASIC RTL',
    difficulty: 'Hard',
    question: 'How is the NVIDIA NVLink 5 Switch ASIC designed to support SHARP (Scalable Hierarchical Aggregation and Reduction Protocol) in-network computing for FP8 all-reduce collective operations?',
    keyPoints: ['In-switch reduction arithmetic logic units (ALUs)', 'Hardware multicast and credit-based packet switching', 'Reduction tree aggregation in switch silicon', 'Offloading gradient aggregation from GPU Tensor Cores'],
    sampleAnswer: 'The NVLink 5 Switch ASIC embeds hardware math units inside its crossbar router. When GPUs perform AI All-Reduce operations, rather than sending intermediate gradients across multiple GPU hops, the switch ASIC sums the incoming floating-point tensors in real-time inside the network switch silicon, cutting network traffic by 50% and eliminating GPU compute overhead.'
  },
  {
    id: 'nvai-3',
    companyId: 'nvidia_physical_ai',
    category: 'Quantum-X800 & Spectrum-X Networking ASICs',
    difficulty: 'Hard',
    question: 'Explain the hardware flow control mechanisms in NVIDIA Spectrum-X Ethernet and Quantum-X800 InfiniBand: RoCEv2, Priority Flow Control (PFC), and Explicit Congestion Notification (ECN).',
    keyPoints: ['PFC 802.1Qbb pause frame handling at line rate', 'ECN marking (RFC 3168) in ASIC egress buffers', 'Dynamic Packet Spraying across ECMP paths', 'Deadlock-free credit recovery in loss-free fabrics'],
    sampleAnswer: 'In multi-tenant AI training clusters, Spectrum-X Ethernet combines PFC to guarantee zero-loss packet delivery with hardware ECN marking when switch queue depths exceed threshold. It uses adaptive packet routing (Dynamic Packet Spraying) to distribute packets across all equal-cost multi-paths (ECMP) simultaneously at the ASIC hardware level, preventing hash collisions and tail latency.'
  },
  {
    id: 'nvai-4',
    companyId: 'nvidia_physical_ai',
    category: 'Silicon Photonics & Co-Packaged Optics (CPO)',
    difficulty: 'Hard',
    question: 'How do Co-Packaged Optics (CPO) and Silicon Photonics transceivers reduce energy per bit (pJ/bit) compared to pluggable optical transceivers (OSFP 800G/1.6T) in AI datacenters?',
    keyPoints: ['Direct optical coupling to switch substrate', 'Elimination of power-hungry electrical retimers / DSPs', 'Mach-Zehnder Modulators (MZM) on silicon substrate', 'Thermal isolation of Continuous Wave (CW) laser sources'],
    sampleAnswer: 'Pluggable optical transceivers require power-hungry retimer DSPs to drive electrical signals across PCB traces to switch ASICs. CPO mounts silicon photonics optical engines directly onto the same organic multi-chip substrate as the switch ASIC, replacing lossy copper traces with short millimeter interconnects and reducing optical link power from >15 pJ/bit down to <5 pJ/bit.'
  },
  {
    id: 'nvai-5',
    companyId: 'nvidia_physical_ai',
    category: 'Megawatt Power Delivery & Transient di/dt Regulation',
    difficulty: 'Hard',
    question: 'In 120kW AI compute racks, how do chip designers and power engineers mitigate catastrophic VDD voltage droop caused by rapid transient load steps (di/dt = 3000 A/us)?',
    keyPoints: ['48V to sub-1V multi-phase buck converters & switched capacitor stages', 'Integrated Voltage Regulators (IVR) on substrate', 'Deep Trench Capacitor (DTC) arrays under die', 'RTL Fast Power Throttling / instruction-level current smoothing'],
    sampleAnswer: 'When tens of thousands of GPU Tensor Cores switch simultaneously from idle to peak MMA operations, current ramps at thousands of Amperes per microsecond, causing severe L*di/dt voltage droop. Designers place high-density deep trench capacitors on interposers directly beneath the silicon die, backed by multi-phase point-of-load VRMs and hardware clock frequency throttling circuits that catch voltage dips in <2ns.'
  },
  {
    id: 'nvai-6',
    companyId: 'nvidia_physical_ai',
    category: 'Jetson Thor & Physical AI Robotics SoC',
    difficulty: 'Hard',
    question: 'Explain the hardware architecture of the NVIDIA Jetson Thor SoC for Physical AI humanoid robots, including its Transformer Engine, NVDLA 3.0, and ASIL-D functional safety island.',
    keyPoints: ['Blackwell GPU with 8-bit / 4-bit Transformer Engine', 'Dual NVDLA 3.0 hardware accelerators for vision perception', 'ARM Neoverse V3AE CPU cores with lockstep execution', 'ASIL-D ISO 26262 functional safety island for actuator motor control'],
    sampleAnswer: 'Jetson Thor is an edge SoC designed specifically for humanoid robots and physical AI agents. It combines a Blackwell GPU with 800 TFLOPS of 8-bit floating point compute for vision-language-action (VLA) models, dual NVDLA 3.0 accelerators for low-power sensor processing, and an isolated ASIL-D safety microcontroller running lockstep cores to verify motor actuator trajectory commands.'
  },
  {
    id: 'nvai-7',
    companyId: 'nvidia_physical_ai',
    category: 'Direct Liquid Cooling & Thermal RTL Management',
    difficulty: 'Medium',
    question: 'How do on-die Digital Thermal Sensors (DTS) and hardware thermal throttling FSMs protect multi-kilowatt AI compute dies under liquid cooling flow disruptions?',
    keyPoints: ['Ring oscillator / bandgap thermal diode sensors', 'Hardware interrupt latency (<1us)', 'Clock duty cycle modulation & P-state throttling', 'Catastrophic over-temperature thermal trip (THERMTRIP#) signal'],
    sampleAnswer: 'Dozens of high-speed digital thermal sensors distributed across hotspots continuously sample die temperature. If coolant flow reduces and junction temperature approaches Tjmax (e.g. 100°C), hardware throttling logic autonomously drops clock frequency via PLL divider step-down without software intervention. If temperature exceeds 105°C, it asserts hardware THERMTRIP# to power down the rail within microseconds.'
  },
  {
    id: 'nvai-8',
    companyId: 'nvidia_physical_ai',
    category: 'Isaac Sim & Sensor Fusion Hardware Pipelines',
    difficulty: 'Hard',
    question: 'How does NVIDIA RTX Real-Time Ray Tracing hardware (RT Cores) accelerate physical world simulation (Lidar, Radar, Depth cameras) in Isaac Sim for autonomous robotics training?',
    keyPoints: ['Bounding Volume Hierarchy (BVH) traversal in silicon hardware', 'Ray-triangle intersection engine', 'Multi-camera CSI-2 / GMSL deserializer ISP hardware pipe', 'Sim-to-real zero latency sensor synthesis'],
    sampleAnswer: 'RT Cores contain dedicated hardware units that compute ray-box bounding volume hierarchy (BVH) traversals and ray-triangle intersection tests in silicon. In Isaac Sim, this allows physics-accurate simulation of millions of photon/acoustic rays reflecting off physical surfaces for LiDAR and ultrasonic sensor synthesis at 60 FPS.'
  },
  ...Array.from({ length: 32 }, (_, i) => ({
    id: `nvai-${i + 9}`,
    companyId: 'nvidia_physical_ai' as const,
    category: ['GB200 NVL72 Infrastructure', 'NVLink Switch ASIC', 'Quantum-X & Spectrum-X', 'CPO Silicon Photonics', 'Power Delivery & di/dt', 'Jetson Robotics & Sensor Fusion'][i % 6],
    difficulty: (i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy') as 'Hard' | 'Medium' | 'Easy',
    question: [
      `NVIDIA Infra Q${i + 9}: Explain how NVLink 5 packet framing and CRC32 check codes maintain error-free transmission over 5,000 copper cartridge lines.`,
      `NVIDIA Infra Q${i + 9}: How does RoCEv2 adaptive routing mitigate PFC deadlocks and head-of-line blocking in massive AI supercomputing clusters?`,
      `NVIDIA Infra Q${i + 9}: Describe the high-frequency clock distribution and deskew calibration across 72 GPUs in an NVL72 rack domain.`,
      `NVIDIA Infra Q${i + 9}: How does the Jetson ISP pipeline perform high dynamic range (HDR) exposure stitching on 12 simultaneous GMSL2 camera streams for autonomous robots?`,
      `NVIDIA Infra Q${i + 9}: Explain the power telemetry I2C/SMBus/PMBus monitoring architecture connecting server board BMC to GPU VRMs.`,
      `NVIDIA Infra Q${i + 9}: What are the physical design routing challenges of 112G and 224G PAM4 SerDes channels across multi-layer high-Tg megtron PCB substrates?`
    ][i % 6],
    keyPoints: ['High-speed SerDes (112G/224G PAM4)', 'Rack-scale interconnect design', 'Physical AI robotics & safety', 'Datacenter thermal and power integrity'],
    sampleAnswer: `NVIDIA Physical AI Infrastructure designs combine massive NVLink bandwidth, custom network switch silicon, robust power regulation, and robotics SoCs to power planetary-scale AI computing.`
  }))
];

// ==========================================
// 4. EXISTING COMPANIES WITH DETAILED QUESTIONS
// ==========================================
const generateNvidiaQuestions = (): InterviewQuestion[] => [
  {
    id: 'nv-1',
    companyId: 'nvidia',
    category: 'GPU Architecture',
    difficulty: 'Hard',
    question: 'How do Tensor Cores in NVIDIA Hopper/Blackwell architectures execute FP8/FP16 matrix multiply-accumulate (MMA) operations efficiently?',
    keyPoints: ['Systolic array architecture', 'Warp-level matrix operations (WMMA)', 'Mixed-precision accumulator'],
    sampleAnswer: 'NVIDIA Tensor Cores perform fused matrix multiply-accumulate D = A*B + C at the warp level using specialized hardware lanes. Threads in a warp cooperatively load matrix tiles into shared memory/registers and execute MMA instructions in a single clock cycle pipeline.'
  },
  {
    id: 'nv-2',
    companyId: 'nvidia',
    category: 'CDC & Interconnect',
    difficulty: 'Hard',
    question: 'In NVLink multi-GPU interconnects, how is credit-based flow control implemented in RTL across clock domains?',
    keyPoints: ['Credit counters', 'Asynchronous FIFO handshake', 'Lossless packet transmission'],
    sampleAnswer: 'Credit-based flow control uses sender credit counters initialized to receiver buffer depth. Each transmitted packet decrements local credit, while credit return tokens crossing asynchronous boundaries via Gray-coded FIFOs increment credit available.'
  },
  {
    id: 'nv-3',
    companyId: 'nvidia',
    category: 'RTL & Verilog',
    difficulty: 'Medium',
    question: 'Design a parameterized Asynchronous FIFO in Verilog and explain how Gray codes prevent binary counter race conditions across CDC boundaries.',
    keyPoints: ['Gray code single-bit transition', '2-stage synchronizer flip-flops', 'Full/Empty flag calculation'],
    sampleAnswer: 'Gray codes guarantee that only a single bit changes between adjacent counts. When synchronized across clock domains using double flip-flops, single-bit synchronization avoids intermediate corrupt multi-bit states.'
  },
  {
    id: 'nv-4',
    companyId: 'nvidia',
    category: 'Memory Systems',
    difficulty: 'Hard',
    question: 'How does NVIDIA L2 cache handle high-bandwidth parallel requests from thousands of CUDA threads without bank conflicts?',
    keyPoints: ['Multi-bank memory crossbar', 'Hash-based address interleaving', 'Coalescing unit'],
    sampleAnswer: 'L2 cache uses an address coalescing unit to merge warp thread requests into single line accesses, alongside high-degree memory banking and pseudo-random hash functions to distribute line requests uniformly.'
  },
  ...Array.from({ length: 36 }, (_, i) => ({
    id: `nv-${i + 5}`,
    companyId: 'nvidia' as const,
    category: ['GPU Compute', 'Verilog RTL', 'STA & Setup/Hold', 'Physical Design', 'DFT & Testing'][i % 5],
    difficulty: (i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy') as 'Hard' | 'Medium' | 'Easy',
    question: [
      `NVIDIA Q${i + 5}: Explain how thread block scheduler assigns CTAs to Streaming Multiprocessors (SMs).`,
      `NVIDIA Q${i + 5}: How do you resolve a setup time violation on a critical path operating at 3.5 GHz in 3nm process?`,
      `NVIDIA Q${i + 5}: Write Verilog RTL for a 4-entry pipelined register file with forward write bypass.`,
      `NVIDIA Q${i + 5}: What causes crosstalk delay degradation on long parallel copper interconnects in GPU packages?`,
      `NVIDIA Q${i + 5}: How is scan chain stitch verified on multibit registers in complex GPU cores?`
    ][i % 5],
    keyPoints: ['Register bypass logic', 'Critical path optimization', 'Setup slack calculation', 'Signal integrity & shield wires'],
    sampleAnswer: `In NVIDIA GPU architecture, this hardware module optimizes throughput by pipeline balancing, eliminating hazards, and utilizing dedicated routing resources.`
  }))
];

const generateAmdQuestions = (): InterviewQuestion[] => [
  {
    id: 'amd-1',
    companyId: 'amd',
    category: 'Chiplet Interconnect',
    difficulty: 'Hard',
    question: 'How does AMD Infinity Fabric maintain cache coherency across die-to-die (D2D) chiplet interfaces?',
    keyPoints: ['SDF / GMI links', 'MOESI cache coherency protocol', 'Die-to-die low latency PHY'],
    sampleAnswer: 'AMD Infinity Fabric uses high-density die-to-die physical links running MOESI protocol packets. Probe requests and invalidations are broadcast through central Scalable Data Fabric (SDF) switches to maintain coherent L3 caches across chiplets.'
  },
  {
    id: 'amd-2',
    companyId: 'amd',
    category: 'CPU Microarchitecture',
    difficulty: 'Hard',
    question: 'Explain the pipeline structure of AMD Zen 4 x86 Execution Engine and its op-cache (micro-op cache).',
    keyPoints: ['Micro-op decoders', 'Op-cache hit path', 'Branch predictor perceptron'],
    sampleAnswer: 'Zen 4 decodes variable-length x86 instructions into fixed-size micro-ops. Up to 6.7k micro-ops are cached in the Op-Cache, bypassing instruction fetch/decode stages on loops for lower power and reduced latency.'
  },
  ...Array.from({ length: 38 }, (_, i) => ({
    id: `amd-${i + 3}`,
    companyId: 'amd' as const,
    category: ['Infinity Fabric', 'x86 Execution', 'STA & Timing', 'Verilog Logic', 'Verification'][i % 5],
    difficulty: (i % 2 === 0 ? 'Hard' : 'Medium') as 'Hard' | 'Medium',
    question: `AMD Q${i + 3}: Detail the hardware mechanism for ${['handling branch mispredictions in Zen execution units', 'managing 3D TSV power distribution networks in 3D V-Cache', 'implementing AXI4-Lite slave bridge in SystemVerilog', 'calculating hold slack across multi-die clock networks', 'verifying out-of-order reorder buffer in UVM'][i % 5]}.`,
    keyPoints: ['Reorder Buffer flush', 'Multi-die clock skew', 'AXI4 handshake protocol', 'UVM Scoreboard'],
    sampleAnswer: `AMD microarchitecture leverages optimized hardware blocks to handle high-throughput compute, ensuring robust timing closure and protocol compliance.`
  }))
];

const generateIntelQuestions = (): InterviewQuestion[] => [
  {
    id: 'intel-1',
    companyId: 'intel',
    category: 'Packaging & Interconnect',
    difficulty: 'Hard',
    question: 'How does Intel EMIB (Embedded Multi-Die Interconnect Bridge) differ from traditional silicon interposers?',
    keyPoints: ['Localized silicon bridge die', 'Ultra-dense microbumps', 'Die-to-die routing efficiency'],
    sampleAnswer: 'EMIB places small embedded silicon bridges inside the package substrate directly underneath die edges, eliminating the need for expensive full-sized silicon interposers while enabling high-density die interconnects.'
  },
  ...Array.from({ length: 39 }, (_, i) => ({
    id: `intel-${i + 2}`,
    companyId: 'intel' as const,
    category: ['Processor Cores', 'Advanced Packaging', 'SystemVerilog RTL', 'STA & Synthesis', 'PCIe PHY'][i % 5],
    difficulty: (i % 3 === 0 ? 'Hard' : 'Medium') as 'Hard' | 'Medium',
    question: `Intel Q${i + 2}: Explain the implementation details of ${['Foveros 3D die stacking power delivery', 'PCIe Gen 6 PAM4 equalization receiver logic', 'SystemVerilog priority encoder with enable', 'clock mesh balancing across 18A process node', 'vector register file multi-port access'][i % 5]}.`,
    keyPoints: ['PAM4 signaling', '3D power grid', 'Clock tree synthesis', 'Multi-port SRAM'],
    sampleAnswer: `Intel design methodologies enforce rigorous timing bounds, precise clock distribution, and high performance standard cell library selections.`
  }))
];

const generateGoogleQuestions = (): InterviewQuestion[] => [
  {
    id: 'goog-1',
    companyId: 'google',
    category: 'TPU Architecture',
    difficulty: 'Hard',
    question: 'Explain the architecture and dataflow of a Systolic Array in Google TPU (Tensor Processing Unit).',
    keyPoints: ['Weight-stationary / Output-stationary dataflow', 'Pipelined MAC cells', 'Zero register read overhead'],
    sampleAnswer: 'A Systolic Array streams matrix inputs through a 2D grid of processing elements (PEs). In weight-stationary mode, weights stay locked in PEs while inputs flow horizontally and partial sums accumulate vertically without constant register file access.'
  },
  ...Array.from({ length: 39 }, (_, i) => ({
    id: `goog-${i + 2}`,
    companyId: 'google' as const,
    category: ['TPU ML Hardware', 'ASIC Design', 'Verilog & SystemVerilog', 'Low Power', 'HBM Controller'][i % 5],
    difficulty: (i % 2 === 0 ? 'Hard' : 'Medium') as 'Hard' | 'Medium',
    question: `Google VLSI Q${i + 2}: Describe hardware mechanisms for ${['optimizing HBM3 memory bandwidth in TPU v5', 'lowering dynamic power via clock gating in TPU Matrix Units', 'designing asynchronous CDC handshake for ML workload bus', 'formal verification of custom AI tensor pipelines', 'implementing bfloat16 floating point MAC unit in Verilog'][i % 5]}.`,
    keyPoints: ['Bfloat16 arithmetic', 'HBM controller scheduling', 'Formal verification assertions', 'Clock gating logic'],
    sampleAnswer: `Google ASIC teams optimize AI tensor throughput through specialized systolic acceleration, low-power domain isolation, and maximum hardware utilization.`
  }))
];

const generateCadenceQuestions = (): InterviewQuestion[] => [
  {
    id: 'cad-1',
    companyId: 'cadence',
    category: 'Static Timing Analysis',
    difficulty: 'Hard',
    question: 'In Cadence Tempus / Innovus, how is On-Chip Variation (OCV) and Advanced OCV (AOCV) modeled during timing closure?',
    keyPoints: ['Path-depth dependent derates', 'Spatial variation factors', 'Common path pessimism removal (CPPR)'],
    sampleAnswer: 'AOCV applies dynamic timing derate factors based on logic path depth and bounding box distance. Deeper logic paths benefit from statistical cancellation of random process variations, reducing overly conservative timing margins.'
  },
  ...Array.from({ length: 39 }, (_, i) => ({
    id: `cad-${i + 2}`,
    companyId: 'cadence' as const,
    category: ['STA & Timing', 'Innovus P&R', 'Genus Synthesis', 'UVM Verification VIP', 'Formal Verification'][i % 5],
    difficulty: (i % 2 === 0 ? 'Hard' : 'Medium') as 'Hard' | 'Medium',
    question: `Cadence Q${i + 2}: Explain how EDA tools handle ${['CPPR (Common Path Pessimism Removal) in timing trees', 'multi-corner multi-mode (MCMM) optimization', 'UVM Virtual Sequencer synchronization across VIPs', 'formal property checking for deadlocks', 'ECO (Engineering Change Order) placement & routing'][i % 5]}.`,
    keyPoints: ['CPPR clock tree', 'MCMM timing corners', 'UVM Virtual Sequencer', 'ECO netlist insertion'],
    sampleAnswer: `Cadence EDA algorithms automate complex physical design and verification tasks, guaranteeing STA convergence and functional bug elimination.`
  }))
];

const generateIbmQuestions = (): InterviewQuestion[] => [
  {
    id: 'ibm-1',
    companyId: 'ibm',
    category: 'Mainframe Architecture',
    difficulty: 'Hard',
    question: 'How does the IBM Telum processor chip handle on-chip AI acceleration alongside 8-core CPU execution?',
    keyPoints: ['Integrated AI accelerator ring', '32MB L2 cache per core', 'Dual-chip module (DCM) interconnect'],
    sampleAnswer: 'IBM Telum embeds a dedicated 6 TFLOPS AI accelerator shared directly among CPU cores via a high-speed ring interconnect, enabling real-time deep learning inference on financial transactions with sub-millisecond latency.'
  },
  ...Array.from({ length: 39 }, (_, i) => ({
    id: `ibm-${i + 2}`,
    companyId: 'ibm' as const,
    category: ['Mainframe CPU', 'L2/L3 Cache Coherency', 'PowerISA RTL', 'Fault Tolerance', 'Thermal Management'][i % 5],
    difficulty: (i % 2 === 0 ? 'Hard' : 'Medium') as 'Hard' | 'Medium',
    question: `IBM Q${i + 2}: Describe hardware design considerations for ${['implementing 128-byte line cache coherence in PowerISA', 'designing fault-tolerant parity check logic in registers', 'clock domain crossing between CPU core and PCIe host bridge', 'low-power sleep state recovery in server processors', 'verifying out-of-order instruction completion in SystemVerilog'][i % 5]}.`,
    keyPoints: ['Cache coherence protocols', 'Error-correcting code (ECC)', 'Asynchronous CDC FIFOs', 'Formal verification'],
    sampleAnswer: `IBM processor design prioritizes mission-critical mainframe reliability, zero downtime, and high-throughput enterprise execution.`
  }))
];

const generateTessolveQuestions = (): InterviewQuestion[] => [
  {
    id: 'tess-1',
    companyId: 'tessolve',
    category: 'DFT & Scan Testing',
    difficulty: 'Hard',
    question: 'Explain the internal architecture of a Scan Flip-Flop and how Scan Enable (SE) switches between Mission Mode and Shift Mode.',
    keyPoints: ['Multiplexed-D Flip-Flop', 'Scan In (SI) & Scan Enable (SE)', 'Stuck-At Fault testing'],
    sampleAnswer: 'A Scan Flip-Flop integrates a 2-to-1 MUX before the data input. When Scan Enable SE=1, the MUX routes Scan In (SI) vector data to shift test patterns through registers; when SE=0, it operates in normal functional mode.'
  },
  ...Array.from({ length: 39 }, (_, i) => ({
    id: `tess-${i + 2}`,
    companyId: 'tessolve' as const,
    category: ['DFT & Scan Chains', 'ATPG Fault Models', 'JTAG IEEE 1149.1', 'ATE Test Equipment', 'BIST Logic'][i % 5],
    difficulty: (i % 2 === 0 ? 'Hard' : 'Medium') as 'Hard' | 'Medium',
    question: `Tessolve Q${i + 2}: Detail the implementation of ${['Built-In Self-Test (MBIST) for embedded SRAMs', 'JTAG TAP Controller state machine transitions', 'compression logic for reducing ATPG pattern volume', 'post-silicon ATE signal integrity probing', 'boundary scan cell architecture for pin continuity testing'][i % 5]}.`,
    keyPoints: ['MBIST March algorithm', 'TAP Controller FSM', 'ATPG Compression', 'Boundary scan register'],
    sampleAnswer: `Tessolve test engineering ensures maximum manufacturing defect coverage, high test quality, and rapid post-silicon yield ramp.`
  }))
];

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  ...SAMSUNG_QUESTIONS,
  ...NEW_COMPANIES_QUESTIONS,
  ...GATE_VLSI_QUESTIONS,
  ...generateSynopsysQuestions(),
  ...generateTataElxsiQuestions(),
  ...generateSiemensQuestions(),
  ...generateTsmcQuestions(),
  ...generateNvidiaPhysicalAiQuestions(),
  ...generateNvidiaQuestions(),
  ...generateAmdQuestions(),
  ...generateIntelQuestions(),
  ...generateGoogleQuestions(),
  ...generateCadenceQuestions(),
  ...generateIbmQuestions(),
  ...generateTessolveQuestions()
];
