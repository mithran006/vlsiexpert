import { InterviewQuestion } from '../interviewData';

export const NEW_COMPANIES_QUESTIONS: InterviewQuestion[] = [
  // ==========================================
  // QUALCOMM (Snapdragon, Oryon CPU, Hexagon NPU, 5G Modem, PMIC)
  // ==========================================
  {
    id: 'qcom-1',
    companyId: 'qualcomm',
    category: 'SoC & Interconnect',
    question: 'How does Qualcomm design power domains and clock gating in Snapdragon SoCs to achieve ultra-low standby power while maintaining instantaneous wakeup times?',
    keyPoints: [
      'Multi-Threshold CMOS (MTCMOS) power switches to disconnect leakage paths in dormant domains',
      'Retention Flip-Flops (RFFs) to preserve architectural state without full VDD rail supply',
      'Dynamic Voltage and Frequency Scaling (DVFS) with dedicated Power Management IC (PMIC) buck regulators',
      'Hierarchical Clock Gating cells (ICGs) driven by autonomous hardware activity detectors',
      'State retention power gating (SRPG) and fast-wake oscillator calibration sequences'
    ],
    sampleAnswer: 'Qualcomm Snapdragon SoCs utilize fine-grained Power Management Architecture consisting of MTCMOS sleep transistors that isolate unused CPU cores, NPUs, or modem blocks to virtually eliminate sub-threshold leakage. Architectural registers use Retention Flip-Flops (RFFs) powered by an auxiliary always-on low-leakage rail, enabling cores to drop to zero volts while retaining register states. When a wakeup interrupt arrives, PMIC ramp rates and on-chip LDOs restore power within microseconds without cold-boot overhead.',
    difficulty: 'Hard'
  },
  {
    id: 'qcom-2',
    companyId: 'qualcomm',
    category: 'NPU & DSP Architecture',
    question: 'In Qualcomm Hexagon NPU/DSP architectures, how do Vector Extensions (HVX) and Tensor Accelerators (HTA) optimize INT8/INT4 deep learning inference workloads?',
    keyPoints: [
      'Wide SIMD execution units (e.g. 1024-bit vector registers) supporting 128 parallel 8-bit MAC operations per cycle',
      'Direct DMA tightly-coupled memory (TCM) buffering to avoid external LPDDR5X memory bandwidth bottlenecks',
      'Hardware quantization scaling and fused activation functions (ReLU, GELU, Swish)',
      'Asymmetric multi-threading (VLIW execution pipeline) to keep compute pipelines saturated',
      'Zero-skipping hardware sparsity engines to bypass zero-weight computations'
    ],
    sampleAnswer: 'Qualcomm Hexagon Vector Extensions (HVX) utilize 1024-bit wide vector datapaths with dedicated tightly-coupled memory (VTCM) providing multi-terabyte/s local bandwidth. The Hexagon Tensor Accelerator integrates 2D/3D systolic matrix multiplier engines optimized for mixed-precision INT8, INT4, and FP16 weights. It features zero-skipping hardware logic that detects sparse zero weights and skips compute cycles, tripling throughput while reducing energy per inference token.',
    difficulty: 'Hard'
  },
  {
    id: 'qcom-3',
    companyId: 'qualcomm',
    category: '5G Modem & DSP',
    question: 'What are the primary RTL design challenges in designing High-Throughput LDPC and Polar decoders for 5G NR baseband modems?',
    keyPoints: [
      'Iterative Min-Sum and Layered Belief Propagation decoding algorithms with complex message passing',
      'Routing congestion across heavily interconnected Check Node Units (CNUs) and Variable Node Units (VNUs)',
      'High clock frequency (1GHz+) timing closure under high wiring parasitics',
      'Fixed-point quantization trade-offs between Bit Error Rate (BER) and silicon area',
      'Dynamic early-termination logic to save power when parity check parity equals zero'
    ],
    sampleAnswer: 'In 5G NR modem silicon, LDPC decoders must sustain multi-gigabit throughput (10-20 Gbps) at sub-millisecond latencies. The main RTL challenge is the dense shuffle routing network between VNUs and CNUs, which creates routing congestion and timing violations. Designers employ partially parallel layered architectures with quasi-cyclic shift networks, pipelined normalized min-sum processing, and early-termination parity checks that halt iterations as soon as syndrome checks pass, cutting dynamic power by over 40%.',
    difficulty: 'Hard'
  },
  {
    id: 'qcom-4',
    companyId: 'qualcomm',
    category: 'CPU Microarchitecture',
    question: 'How do Qualcomm Oryon CPU cores manage Out-of-Order (OoO) execution pipelines, Reorder Buffers (ROB), and Load-Store Queues (LSQ)?',
    keyPoints: [
      'Wide-issue superscalar decode/rename front-end mapping architectural to physical registers',
      'Deep Reorder Buffer (ROB) supporting hundreds of in-flight micro-ops to maximize Instruction Level Parallelism (ILP)',
      'Speculative execution with neural branch predictors and fast branch recovery mechanisms',
      'Load-Store Queues with aggressive store-to-load forwarding and memory disambiguation',
      'Non-blocking L1/L2 caches with Miss Status Holding Registers (MSHRs)'
    ],
    sampleAnswer: 'Qualcomm Oryon CPU features a wide-issue superscalar pipeline with register renaming to eliminate WAW and WAR hazards. Instructions are dispatched to distributed reservation stations and executed out-of-order across integer, vector, and memory pipelines. The Reorder Buffer commits instructions strictly in program order to ensure precise architectural exception handling. The LSQ employs speculative store-to-load forwarding and dynamic memory disambiguation to satisfy dependent loads before preceding stores have committed to L1 cache.',
    difficulty: 'Hard'
  },
  {
    id: 'qcom-5',
    companyId: 'qualcomm',
    category: 'AMBA & Bus Protocols',
    question: 'What is the role of AXI4/AXI5 Quality of Service (QoS) signaling and Network-on-Chip (NoC) arbitration in Snapdragon camera (Spectra ISP) and display pipelines?',
    keyPoints: [
      'Strict real-time latency deadlines for 4K/8K 120fps video streaming and zero-lag frame buffers',
      'AXI QoS priority signals (ARQOS / AWQOS) to arbitrate DRAM memory controller bandwidth',
      'Credit-based virtual channel flow control in NoC routers to prevent head-of-line blocking',
      'Bandwidth compression (UBWC - Universal Bandwidth Compression) across memory channels',
      'Deterministic latency bounds for display refresh engines to eliminate screen tearing'
    ],
    sampleAnswer: 'In Snapdragon SoCs, the Spectra ISP and Adreno Display engines require hard real-time latency bounds to prevent frame drops. The interconnect uses AXI4/AXI5 QoS sideband signals that prioritize display and camera traffic in the System NoC and DDR5 memory controllers over background compute tasks. The NoC utilizes virtual channel arbitration and Universal Bandwidth Compression (UBWC) to guarantee isochronous bandwidth and minimize DRAM access latency.',
    difficulty: 'Medium'
  },
  {
    id: 'qcom-6',
    companyId: 'qualcomm',
    category: 'Low Power & UPF',
    question: 'How are Level Shifter and Isolation cells defined and inserted in IEEE 1801 UPF (Unified Power Format) for a Qualcomm chip?',
    keyPoints: [
      'Isolation cells (ISO) clamp signals to safe logic 0 or 1 when a power domain is switched off, preventing floating gate damage',
      'Level Shifters (ELS/HLS) translate voltage levels across heterogeneous voltage domains (e.g. 0.65V VDD_MIN to 1.05V Turbo)',
      'UPF set_isolation and set_level_shifter commands automate cell placement during synthesis and P&R',
      'Always-on buffers preserve control and clock signals traversing powered-off domains',
      'Power state tables (PST) validate legal voltage combinations'
    ],
    sampleAnswer: 'In UPF, isolation rules clamp crossing nets to defined states (0, 1, or latch) before the driving domain is shut down, preventing downstream active gates from drawing crowbar current due to floating inputs. Level shifters are inserted between domains operating at different voltage rails. EDA tools read UPF rules during synthesis and P&R to place dedicated multi-rail standard cells and verify connectivity with Power State Tables (PST).',
    difficulty: 'Medium'
  },

  // ==========================================
  // BROADCOM (Switch ASICs, SerDes PAM4, Tomahawk, PCIe Retimers)
  // ==========================================
  {
    id: 'bcom-1',
    companyId: 'broadcom',
    category: 'Switch ASIC Architecture',
    question: 'How do Broadcom Tomahawk 5 (51.2 Tbps) and Jericho 3-AI switch ASICs achieve line-rate packet parsing and non-blocking crossbar switching?',
    keyPoints: [
      'Pipelined Match-Action Packet Processing engines (RMT / programmable pipeline stages)',
      'Shared Memory Architecture with ultra-wide High-Bandwidth on-chip SRAM/eDRAM packet buffers',
      'Cell-based VOQ (Virtual Output Queueing) fabrics with credit-based scheduling to prevent Head-of-Line blocking',
      'Massive parallel datapaths operating at 1-1.5 GHz internal clock rates',
      'Integrated Co-Packaged Optics (CPO) and high-density 112G/224G PAM4 SerDes macros'
    ],
    sampleAnswer: 'Broadcom Tomahawk 5 utilizes a highly parallel Shared Memory Architecture with unified multi-megabyte on-chip packet buffer memory. Ingress packets are sliced into fixed-size cells and routed via Virtual Output Queues (VOQs) with centralized credit arbiters, eliminating head-of-line blocking. The pipeline employs wide 512-bit match-action stages that parse headers, perform TCAM routing lookups, enforce ACLs, and route packets at 51.2 Terabits/sec line rate without dropping packets.',
    difficulty: 'Hard'
  },
  {
    id: 'bcom-2',
    companyId: 'broadcom',
    category: 'High-Speed SerDes',
    question: 'Explain the principles of 112Gbps/224Gbps PAM4 SerDes design, including DFE, CTLE, FFE, and DSP-based equalization.',
    keyPoints: [
      'PAM4 encodes 2 bits per symbol (4 voltage levels: -3, -1, +1, +3), halving Nyquist frequency compared to NRZ but reducing SNR by 9.54 dB',
      'Feed-Forward Equalization (FFE) at the transmitter pre-compensates for channel high-frequency loss',
      'Continuous-Time Linear Equalizer (CTLE) provides high-frequency analog peaking at receiver input',
      'Analog-to-Digital Converter (ADC) + DSP architecture using Maximum Likelihood Sequence Estimation (MLSE) and Decision Feedback Equalization (DFE)',
      'Forward Error Correction (FEC) like Reed-Solomon RS(544, 514) to meet 1e-15 post-FEC Bit Error Rate targets'
    ],
    sampleAnswer: 'At 112G/224G speeds, channel attenuation exceeds 35-40 dB at Nyquist. Broadcom SerDes use DSP-based receivers where high-speed interleaved ADCs sample the PAM4 analog waveform. Digital signal processors implement multi-tap Feed-Forward Equalization (FFE) and Decision Feedback Equalization (DFE) to cancel post-cursor and pre-cursor Intersymbol Interference (ISI). Transmit FFE shapes the pulses, CTLE restores high-frequency bandwidth, and KP4 Reed-Solomon FEC guarantees ultra-low BER.',
    difficulty: 'Hard'
  },
  {
    id: 'bcom-3',
    companyId: 'broadcom',
    category: 'PCIe & Retimers',
    question: 'What is the function of PCIe Gen 6 / Gen 7 Retimers, and how does FLIT-based framing with 1b/1b PAM4 encoding operate?',
    keyPoints: [
      'Retimers perform physical layer full signal regeneration (equalization, clock-data recovery, re-transmission) to extend PCB reach',
      'PCIe Gen 6 transitions from NRZ to 64 GT/s PAM4 signaling with 242-byte Flow Control Unit (FLIT) mode',
      'Fixed-size FLIT framing eliminates protocol overhead and integrates lightweight 8-bit CRC and Low-Latency FEC',
      'Dynamic Link Equalization training phases (Phase 0 to Phase 3) negotiated via TS1/TS2 ordered sets',
      'Strict jitter and latency requirements to minimize PCIe round-trip transaction delays'
    ],
    sampleAnswer: 'PCIe Gen 6 doubles data rates to 64 GT/s using PAM4. To maintain high reliability without excessive latency, PCIe 6.0 standardizes FLIT (Flow Control Unit) mode where packets are mapped into fixed 256-byte structures with integrated lightweight FEC and CRC. Retimers contain back-to-back receiver/transmitter pairs that extract the clock, re-equalize distorted PAM4 signals, and re-transmit clean eye diagrams across server backplanes.',
    difficulty: 'Hard'
  },
  {
    id: 'bcom-4',
    companyId: 'broadcom',
    category: 'Timing & Clock Distribution',
    question: 'How do network ASIC physical design engineers address Clock Tree Synthesis (CTS) latency, skew, and duty cycle distortion across a 700mm² die with thousands of SerDes lanes?',
    keyPoints: [
      'H-tree or mesh clock distribution networks to deliver balanced, low-skew clock edges across large die areas',
      'Multi-source CTS and localized clock trunk spines',
      'Duty Cycle Correctors (DCC) and Phase Interpolators at each SerDes transceiver block',
      'Concurrent Clock and Data (CCD) optimization during physical placement and routing',
      'Shielded differential clock routing on thick upper metal layers to minimize crosstalk jitter'
    ],
    sampleAnswer: 'On massive 700mm² network ASICs, Broadcom implements global H-tree or resonant clock meshes on top metal layers (e.g. M13-M15) to distribute a uniform master clock. Localized multi-source clock trees branch off the mesh to minimize insertion delay and OCV (On-Chip Variation). Each SerDes tile integrates dedicated DLLs/PLLs with active Duty Cycle Correction (DCC) and Phase Interpolators to achieve sub-picosecond jitter across all lanes.',
    difficulty: 'Hard'
  },
  {
    id: 'bcom-5',
    companyId: 'broadcom',
    category: 'RTL Design & FIFOs',
    question: 'Explain the design and verification of an Asynchronous Credit-Based Flow Control FIFO used across independent clock domains in networking routers.',
    keyPoints: [
      'Credit-based flow control maintains a credit counter at transmitter, incremented when receiver issues credit returns',
      'Gray-code pointer synchronization for dual-clock asynchronous FIFOs to avoid multi-bit metastability',
      'FIFO full/empty condition generation with safety margins for synchronization latency',
      'Backpressure propagation to prevent packet drop on burst traffic',
      'Formal verification of credit conservation and deadlock freedom'
    ],
    sampleAnswer: 'Credit-based flow control prevents packet drops by ensuring the sender never transmits data unless the receiver has confirmed available buffer space. As packets are read, the receiver sends credit tokens across an asynchronous clock-domain boundary. The sender decrements local credits on transmission and halts when credits hit zero. Gray-coded pointers with 2-flip-flop synchronizers guarantee reliable cross-clock synchronization without race conditions.',
    difficulty: 'Medium'
  },

  // ==========================================
  // ARM (Cortex-A/R/M, AMBA AXI5/CHI, DynamIQ)
  // ==========================================
  {
    id: 'arm-1',
    companyId: 'arm',
    category: 'AMBA Protocols',
    question: 'What are the architectural differences between AMBA AXI4, AXI5, and AMBA CHI (Coherent Hub Interface) in multicore processor topologies?',
    keyPoints: [
      'AXI4 is a point-to-point 5-channel bus protocol (AR, R, AW, W, B) for high-throughput single-master/slave connections',
      'AXI5 adds atomic transactions, QoS enhancements, cache stashing, and trace signals',
      'AMBA CHI is a packetized, layered protocol (Protocol, Network, Link layers) designed for large-scale coherent NoC topologies (tens to hundreds of cores)',
      'CHI supports MESI/MOESI cache coherency snooping, directory-based caching, credit-based flow control, and direct memory transfers',
      'CHI decoupled packet format enables mesh and ring router implementations without dedicated wire-per-signal overhead'
    ],
    sampleAnswer: 'While AMBA AXI is a signal-level channel-based interface suitable for localized master-slave interconnects, AMBA CHI (Coherent Hub Interface) is a packetized network protocol tailored for scalable multicore SoCs. CHI standardizes request, response, snoop, and data packets with built-in directory-based MESIF cache coherency, supporting tens to hundreds of ARM Neoverse/Cortex CPU cores connected via a Network-on-Chip (NoC) mesh.',
    difficulty: 'Hard'
  },
  {
    id: 'arm-2',
    companyId: 'arm',
    category: 'CPU Microarchitecture',
    question: 'How does the Arm DynamIQ Shared Unit (DSU-120) manage heterogeneous CPU clusters (e.g. Cortex-X4 + Cortex-A720 + Cortex-A520) with unified L3 cache sharing?',
    keyPoints: [
      'Enables mixing high-performance Big cores and ultra-efficient Little cores in a single coherent cluster',
      'Direct L3 cache access and snooping without traversing external system interconnect',
      'Asynchronous per-core voltage and frequency islands within the shared DSU cluster',
      'Dynamic L3 cache partitioning, power-down slices, and cache stashing from I/O peripherals',
      'Integrated cluster utility bus and hardware interrupt controllers (GIC-700)'
    ],
    sampleAnswer: 'Arm DynamIQ Shared Unit (DSU) provides a unified shared L3 cache and snoop filter interconnect for heterogeneous clusters combining Big, Mid, and Little cores. Each core can run at independent clock frequencies and power states while sharing a banked L3 cache. DSU dynamically powers down unused L3 cache slices during idle states and provides hardware snooping with sub-cycle tag checks to maintain full L1/L2/L3 coherency across all cores.',
    difficulty: 'Hard'
  },
  {
    id: 'arm-3',
    companyId: 'arm',
    category: 'Security & Hardware Trust',
    question: 'Explain the hardware implementation of ARM TrustZone technology across CPU cores, Bus interconnects (AXI/AHB), and Memory Controllers.',
    keyPoints: [
      'Non-Secure (NS) bit propagated as a physical hardware sideband signal along AXI address channels (ARPROT[1] / AWPROT[1])',
      'Hardware separation into Secure World and Non-Secure (Normal) World execution environments',
      'TrustZone Protection Controller (TZPC) and TrustZone Address Space Controller (TZASC) partition DRAM regions',
      'Secure Monitor Call (SMC) instruction triggers hardware context switches to the Secure Monitor mode',
      'Hardware cryptographic key isolation inaccessible to Normal World operating systems'
    ],
    sampleAnswer: 'ARM TrustZone establishes hardware-enforced isolation by propagating an NS (Non-Secure) security bit on every bus transaction (e.g. AXI ARPROT/AWPROT). When the CPU is in Secure state, NS=0; in Non-Secure state, NS=1. Peripheral firewalls and Memory Controllers (TZASC) check this bit on every cycle, blocking non-secure master access to secure DRAM regions and peripherals regardless of software privileges.',
    difficulty: 'Medium'
  },
  {
    id: 'arm-4',
    companyId: 'arm',
    category: 'Pipelining & Hazards',
    question: 'In an in-order Arm Cortex-M7 dual-issue superscalar pipeline, how are Data Hazards and Structural Hazards resolved without degrading CPI?',
    keyPoints: [
      'Dual-issue 6-stage superscalar pipeline executing two instructions per cycle (e.g. ALU + Load/Store)',
      'Extensive register operand forwarding networks from Execute, Memory, and Writeback stages',
      'Dynamic branch prediction with Branch Target Address Cache (BTAC)',
      'Load-use interlocks inserting 1 bubble cycle when data is loaded from TCM/cache and immediately consumed',
      'Dual 64-bit AXI/AHB master ports and tightly-coupled memory (ITCM/DTCM) for zero-wait-state access'
    ],
    sampleAnswer: 'The Cortex-M7 pipeline resolves data hazards through comprehensive bypass forwarding paths that route ALU results directly to the decode/execute stages of the subsequent cycle. For load-use dependencies, hardware interlocks stall the dependent instruction by one cycle. Structural hazards on memory ports are avoided by utilizing separate Instruction and Data Tightly Coupled Memories (ITCM and DTCM) with dedicated 64-bit buses.',
    difficulty: 'Medium'
  },

  // ==========================================
  // TEXAS INSTRUMENTS (Mixed-Signal, ADC/DAC, PMIC, Embedded)
  // ==========================================
  {
    id: 'ti-1',
    companyId: 'texas_instruments',
    category: 'Mixed-Signal & Data Converters',
    question: 'Compare the architectural operation, conversion speed, resolution, and digital calibration of SAR ADCs versus Delta-Sigma (ΔΣ) ADCs in TI precision data converters.',
    keyPoints: [
      'SAR ADC: Binary search algorithm using capacitive DAC (CDAC) and comparator; high speed (MSPS), medium-to-high resolution (12-18 bits), zero latency (ideal for multiplexed channels)',
      'Delta-Sigma ADC: Oversampling, noise shaping modulator, and digital decimation/Sinc filter; high resolution (24-32 bits), lower bandwidth (kHz-MSPS), excellent linearity',
      'Capacitive mismatch calibration: Foreground/background digital trimming of CDAC capacitors using LMS algorithms',
      'Chopping and correlated double sampling (CDS) to eliminate 1/f flicker noise and input offset voltage',
      'Low power consumption in SAR due to passive charge redistribution'
    ],
    sampleAnswer: 'SAR ADCs execute a binary search conversion in N clock cycles using a capacitive DAC, providing high sampling rates (1-10 MSPS) with zero pipeline latency, ideal for multi-channel data acquisition. Delta-Sigma ADCs oversample input signals and push quantization noise to higher frequencies via noise-shaping modulators, followed by digital Sinc decimation filtering to achieve ultra-high resolution (24-32 bits) and exceptional dynamic range (120+ dB).',
    difficulty: 'Hard'
  },
  {
    id: 'ti-2',
    companyId: 'texas_instruments',
    category: 'Power Management & PMIC',
    question: 'How do synchronous buck converters in TI PMICs operate, and what digital control methods (PWM vs PFM) maximize efficiency from light load to heavy load?',
    keyPoints: [
      'High-Side (HS) and Low-Side (LS) power MOSFETs switching alternatively across an output inductor and capacitor',
      'Pulse Width Modulation (PWM): Fixed frequency, variable duty cycle (D = Vout/Vin); high efficiency and low ripple at medium/heavy loads',
      'Pulse Frequency Modulation (PFM) / Eco-mode: Variable frequency, burst switching with sleep intervals; minimizes switching losses at light loads',
      'Dead-time control to prevent catastrophic cross-conduction (shoot-through) current',
      'Current-mode digital control with cycle-by-cycle over-current protection (OCP)'
    ],
    sampleAnswer: 'In TI PMIC synchronous buck regulators, PWM mode modulates duty cycle at fixed frequency during heavy loads to ensure low output ripple and predictable EMI. At light loads, the controller automatically switches to PFM (Pulse Frequency Modulation) or discontinuous conduction mode (DCM), skipping switching cycles and turning off internal bias circuits between pulses to slash quiescent current (Iq < 1µA) and preserve battery life.',
    difficulty: 'Medium'
  },
  {
    id: 'ti-3',
    companyId: 'texas_instruments',
    category: 'Microcontrollers & Control',
    question: 'In TI C2000 Real-Time Microcontrollers, how do High-Resolution PWM (HRPWM) modules achieve picosecond-level edge positioning for GaN/SiC power converters?',
    keyPoints: [
      'Micro Edge Positioning (MEP) delay line technology sub-dividing standard system clock cycles into 150-180 picosecond increments',
      'Dedicated hardware calibration logic compensating for voltage and temperature drift in real-time',
      'Direct coupling to ultra-fast analog comparators for cycle-by-cycle trip zone protection (sub-25ns shutdown)',
      'Dual-edge symmetric PWM generation with programmable dead-band insertion',
      'Zero CPU overhead in high-frequency resonant LLC and phase-shifted full bridge converter control'
    ],
    sampleAnswer: 'TI C2000 HRPWM modules utilize Micro Edge Positioning (MEP) analog delay-line elements that divide the standard 100MHz-200MHz clock into fine slices of ~150 picoseconds. This picosecond resolution eliminates limit-cycle oscillations in high-frequency GaN and SiC switching power supplies. An automatic hardware calibration engine continuously tracks temperature and VDD variations to maintain edge accuracy.',
    difficulty: 'Hard'
  }
];
