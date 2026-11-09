export type TechNewsCategory = 'all' | 'vlsi' | 'embedded' | 'robotics' | 'semiconductor' | 'ai_creation' | 'breaking' | 'new_tech' | 'new_launch';
export type NewsDayFilter = 'all' | 'today' | 'yesterday' | 'two_days_ago';

export interface TechNewsItem {
  id: string;
  title: string;
  subtitle: string;
  category: TechNewsCategory;
  dayGroup: 'today' | 'yesterday' | 'two_days_ago';
  company: string;
  date: string;              // e.g. "August 20, 2026"
  timeString: string;        // e.g. "14:15 UTC"
  timestamp: string;         // ISO string for real-time sorting
  relativeTime: string;      // e.g. "35 mins ago"
  readTime?: string;
  breaking?: boolean;
  featured?: boolean;
  summary: string;
  keyHighlights: string[];
  technicalDeepDive: string;
  specSheet?: { label: string; value: string }[];
  industryImpact: string;
  tags: string[];
  source: string;
  url?: string;
  badgeColor: string;
}

export const TECH_NEWS_CATEGORIES = [
  { id: 'all', label: 'All Live Tech News', icon: 'Sparkles', desc: 'All real-time VLSI, embedded systems, robotics, semiconductor & AI hardware news' },
  { id: 'vlsi', label: '🔬 VLSI Design & EDA', icon: 'Cpu', desc: 'ASIC RTL, Synopsys, Cadence, physical design, tape-outs & verification' },
  { id: 'embedded', label: '⚡ Embedded Systems & MCUs', icon: 'Zap', desc: 'STM32, ESP32, ARM Cortex, FreeRTOS, Zephyr, firmware & edge microcontrollers' },
  { id: 'robotics', label: '🤖 Robotics & Autonomous', icon: 'Brain', desc: 'Humanoid robots, Boston Dynamics, ROS2, Unitree, spatial vision & actuators' },
  { id: 'semiconductor', label: '🏗️ Semiconductor & 2nm Nodes', icon: 'Layers', desc: 'TSMC 2nm GAA, Intel 18A PowerVia, ASML High-NA EUV, packaging & HBM4' },
  { id: 'ai_creation', label: '🧠 AI Silicon & Compute', icon: 'Rocket', desc: 'Frontier AI accelerators, DeepSeek MoE silicon, Cerebras CS-3, Groq LPUs & TPUs' },
  { id: 'breaking', label: '⚡ Breaking Alerts', icon: 'AlertCircle', desc: 'High-priority wire flashes, tape-outs, robot reveals & foundry yield milestones' }
];

export const TECH_COMPANIES = [
  'All Companies',
  'Synopsys',
  'Cadence',
  'Siemens EDA',
  'STMicroelectronics',
  'Espressif',
  'Raspberry Pi',
  'Boston Dynamics',
  'Unitree',
  'Figure AI',
  'Open Robotics (ROS2)',
  'ARM',
  'DeepSeek',
  'Cerebras',
  'Groq',
  'OpenAI',
  'NVIDIA',
  'TSMC',
  'Intel',
  'AMD',
  'Apple',
  'Google Cloud',
  'Meta',
  'ASML',
  'Qualcomm',
  'Broadcom',
  'Samsung',
  'RISC-V International',
  'Microchip',
  'Micron',
  'SK Hynix',
  'Tenstorrent',
  'Texas Instruments'
];

// Helper: Format Date based on day offset (0 = Today, 1 = Yesterday, 2 = 2 Days Ago)
export function getFormattedDateString(daysAgo: number, referenceDate: Date = new Date()): string {
  const targetDate = new Date(referenceDate.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return targetDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function getShortDateString(daysAgo: number, referenceDate: Date = new Date()): string {
  const targetDate = new Date(referenceDate.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return targetDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

// Generate dynamic timeline filters based on the 24-hour cycle calendar
export function getDynamicTimelineFilters(referenceDate: Date = new Date()): { id: NewsDayFilter; label: string; dateLabel: string; shortLabel: string }[] {
  const todayStr = getShortDateString(0, referenceDate);
  const twoDaysAgoStr = getShortDateString(2, referenceDate);
  const yearStr = referenceDate.getFullYear();

  return [
    { 
      id: 'all', 
      label: 'All (Last 3 Days)', 
      dateLabel: `${twoDaysAgoStr} - ${todayStr}, ${yearStr}`, 
      shortLabel: 'Last 72 Hours' 
    },
    { 
      id: 'today', 
      label: '🔴 Today (24H Live)', 
      dateLabel: getFormattedDateString(0, referenceDate), 
      shortLabel: `Today (${todayStr})` 
    },
    { 
      id: 'yesterday', 
      label: 'Yesterday', 
      dateLabel: getFormattedDateString(1, referenceDate), 
      shortLabel: `Yesterday (${getShortDateString(1, referenceDate)})` 
    },
    { 
      id: 'two_days_ago', 
      label: '2 Days Ago', 
      dateLabel: getFormattedDateString(2, referenceDate), 
      shortLabel: `2 Days Ago (${getShortDateString(2, referenceDate)})` 
    }
  ];
}

// Static initial definition for compatibility
export const TIMELINE_FILTERS = getDynamicTimelineFilters();

// =========================================================================
// STORY COHORTS FOR 24-HOUR ROLLING ENGINE
// =========================================================================

// BATCH A (Active Day 1 Stories in Cycle 0 / shifts in next 24h)
const COHORT_BATCH_A: Omit<TechNewsItem, 'dayGroup' | 'date' | 'relativeTime' | 'timestamp'>[] = [
  {
    id: 'news-live-ai-1',
    title: 'DeepSeek-R1 & V3 Open-Source AI Reasoning Revolutionizes Silicon Compute Cluster Efficiency',
    subtitle: 'Multi-Head Latent Attention (MLA) and Native FP8 Mixed Precision Slash VRAM Footprint by 93% Across Commodity Hardware',
    category: 'ai_creation',
    company: 'DeepSeek',
    timeString: '07:45 UTC',
    readTime: '4 min read',
    breaking: true,
    featured: true,
    summary: 'DeepSeek has open-sourced its flagship R1 reasoning and V3 foundation models, demonstrating frontier AI creation on a fraction of traditional GPU cluster budgets. Architectural innovations including Multi-Head Latent Attention (MLA) and dual-pipe Mixture-of-Experts (MoE) dispatch allow real-time chain-of-thought creation with unprecedented FLOPS efficiency.',
    keyHighlights: [
      'Multi-Head Latent Attention (MLA) compresses Key-Value (KV) cache tensors into low-rank latent vectors, slashing VRAM bandwidth demand by 93%.',
      'Dual-pipe MoE execution overlaps communication and computation, saturating 671B parameter models across standard 8x H800 / H100 clusters.',
      'Native FP8 mixed-precision training framework eliminates quantization loss while cutting datacenter power draw by 60%.',
      'Proves open-weight frontier AI model creation can outpace proprietary closed-source reasoning engines on equivalent silicon.'
    ],
    technicalDeepDive: `DeepSeek-R1 replaces standard multi-head attention with Multi-Head Latent Attention (MLA). Rather than caching full high-dimensional KV projection vectors, MLA projects key-value states down into a compressed 512-dimensional latent vector before decompression on-the-fly inside tensor cores.
    
This allows 671-billion parameter models with 37B active parameters per token to execute without suffering from memory bandwidth starvation, running efficiently on PCIe and NVLink interconnect topologies.`,
    specSheet: [
      { label: 'Model Architecture', value: '671B Total MoE (37B Active per Token)' },
      { label: 'Attention Innovation', value: 'Multi-Head Latent Attention (MLA)' },
      { label: 'Precision Format', value: 'Native FP8 (E4M3 / E5M2) Mixed Math' },
      { label: 'Cluster Efficiency', value: 'Dual-Pipe Overlapped All-to-All' }
    ],
    industryImpact: 'Disrupts the closed-source AI monopoly and triggers immediate silicon optimization roadmaps across NVIDIA, AMD, and custom ASIC foundries for sparse MoE matrix acceleration.',
    tags: ['DeepSeek', 'AI Creation', 'DeepSeek-R1', 'MoE Silicon', 'FP8', 'Open Weights'],
    source: 'DeepSeek Research & HuggingFace Wire',
    badgeColor: 'from-purple-600 to-indigo-700'
  },
  {
    id: 'news-live-ai-2',
    title: 'Cerebras CS-3 Wafer-Scale Engine 3: 4 Trillion Transistors for Frontier AI Creation & 100M Contexts',
    subtitle: 'Single-Wafer Silicon Supercomputer Features 900,000 AI Cores and 44GB On-Die SRAM with 21 Petabytes/s Bandwidth',
    category: 'ai_creation',
    company: 'Cerebras',
    timeString: '07:15 UTC',
    readTime: '5 min read',
    breaking: true,
    featured: true,
    summary: 'Cerebras Systems has deployed the CS-3 Wafer-Scale Engine, the largest single computer chip ever manufactured. Built on TSMC 5nm, the plate-sized silicon wafer packs 4 trillion transistors and 900,000 AI compute cores, training and generating 24-million token contexts without multi-node networking bottlenecks.',
    keyHighlights: [
      '4 trillion transistors integrated on a single monolithic 46,225 mm² TSMC silicon wafer.',
      '900,000 AI-optimized tensor compute cores operating in a unified 2D mesh topology.',
      '44 Gigabytes of ultra-low-latency on-wafer SRAM delivering 21 Petabytes per second memory bandwidth.',
      'Trains frontier AI models up to 24 trillion parameters without distributed tensor parallel partitioning.'
    ],
    technicalDeepDive: `Traditional multi-GPU clusters lose up to 50% of peak compute efficiency to interconnect stalls across InfiniBand or Ethernet optical transceivers.
    
The CS-3 eliminates inter-chip packaging altogether: cross-reticle scribeline interconnects allow all 900,000 cores to communicate across silicon at copper speed with sub-nanosecond latency. Hardware sparsity engines skip zeros dynamically, delivering 125 PFLOPS of FP16 tensor performance.`,
    specSheet: [
      { label: 'Transistor Count', value: '4.0 Trillion Transistors (Wafer-Scale)' },
      { label: 'Cores & Topology', value: '900,000 AI Cores on 2D Mesh Fabric' },
      { label: 'Memory Subsystem', value: '44GB On-Wafer SRAM @ 21 PB/s' },
      { label: 'Manufacturing Node', value: 'TSMC 5nm Wafer-Scale Engine' }
    ],
    industryImpact: 'Enables instant frontier generative AI creation and million-token document reasoning that previously required thousands of networked server racks.',
    tags: ['Cerebras', 'CS-3', 'Wafer-Scale', 'AI Creation', '4 Trillion Transistors', 'SRAM'],
    source: 'Cerebras Systems & EE Times',
    badgeColor: 'from-rose-600 to-pink-700'
  },
  {
    id: 'news-live-1',
    title: 'TSMC A16 (1.6nm) Angstrom Process with Super Power Rail (SPR) Enters Risk Production',
    subtitle: 'Nanosheet GAA Architecture Combined with Backside Power Delivery Delivers 10% Higher Clock Speeds at 20% Lower Power',
    category: 'semiconductor',
    company: 'TSMC',
    timeString: '06:45 UTC',
    readTime: '4 min read',
    breaking: true,
    featured: false,
    summary: 'TSMC has officially entered risk production for its next-generation A16 manufacturing node, featuring backside power delivery (Super Power Rail) integrated directly beneath nanosheet GAA transistors, bypassing standard frontside IR drop bottlenecks.',
    keyHighlights: [
      'Backside Power Delivery Network (BSPDN) routes VDD/VSS rails on the wafer backside, reducing resistive IR drop by up to 25%.',
      '8-10% clock frequency uplift at identical operating voltage compared to N2P (2nm nanosheet).',
      'Up to 1.10x logic density improvement via elimination of frontside power taps in standard cell rows.',
      'Targeted for hyperscale AI datacenters, high-performance computing (HPC) and flagship smartphone SoCs.'
    ],
    technicalDeepDive: `The traditional limitation in sub-2nm standard cell design has been routing congestion on the lowest metal layers (M0-M3). With standard frontside power grids, power delivery rails consume up to 30% of available routing tracks, creating severe electromigration risk and RC delay.

TSMC's A16 Super Power Rail (SPR) introduces through-silicon vias (nano-TSVs) connecting nanosheet transistor source/drain terminals directly to thick, low-resistance backside copper metallization. This architectural separation frees frontside metal interconnect stacks purely for high-speed signal routing, decreasing standard cell height from 6-track (6T) down to ultra-compact 5-track (5T) libraries without parasitic capacitance penalties.`,
    specSheet: [
      { label: 'Process Node', value: 'TSMC A16 (1.6nm Angstrom)' },
      { label: 'Transistor Geometry', value: 'Gate-All-Around (GAA) Nanosheet' },
      { label: 'Power Delivery', value: 'Super Power Rail (BSPDN)' },
      { label: 'Density Gain vs N2P', value: '1.10x Standard Logic Density' },
      { label: 'Performance / Power', value: '+10% Speed or -20% Power at Iso-V' }
    ],
    industryImpact: 'Accelerates next-gen multi-billion transistor AI clusters by resolving power distribution network (PDN) bottlenecks that previously caused thermal throttling in 1000W+ datacenter packages.',
    tags: ['A16', 'Backside Power Delivery', 'GAA Nanosheet', 'TSMC', 'Foundry', 'Semiconductor'],
    source: 'TSMC Technology Symposium & IEEE VLSI Technology Symposium',
    badgeColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'news-live-2',
    title: 'NVIDIA Vera Rubin Architecture Revealed: 4-Die CoWoS-L with 288GB HBM4 & NVLink 6',
    subtitle: 'Next-Generation Rubin GPU Unveils 36 PFLOPS FP4 Inference, 3.6 TB/s Interconnects, and Native Micro-Scaling Transformer Engines',
    category: 'ai_creation',
    company: 'NVIDIA',
    timeString: '06:10 UTC',
    readTime: '5 min read',
    breaking: true,
    featured: false,
    summary: 'NVIDIA has announced its Vera Rubin superchip architecture, succeeding the B200 Blackwell generation. Featuring a quad-reticle monolithic die bridge, HBM4 stacked memory delivering 20 TB/s bandwidth, and ultra-dense 4-bit microscopic transformer engines.',
    keyHighlights: [
      'Four-die CoWoS-L packaging interconnected via 10 TB/s high-bandwidth passive silicon bridges (LSI).',
      '288 GB HBM4 memory operating across a 2048-bit wide memory interface with custom base logic die.',
      '6th-Generation NVLink switch delivering 3,600 GB/s bidirectional interconnect bandwidth per GPU.',
      'Dynamic FP4 & FP2 micro-scaling tensor engines yielding 4x higher token generation efficiency in mixture-of-experts (MoE) LLMs.'
    ],
    technicalDeepDive: `The Vera Rubin architecture pushes wafer packaging to the extreme limit of advanced multi-die assembly. Rather than traditional dual-reticle limits (~1,700 mm²), Rubin uses TSMC CoWoS-L with a 4.5x reticle interposer area.

The memory subsystem is upgraded to 16-high HBM4 stacks fabricated on 4nm base dies with direct micro-bump interconnects, doubling bus width to 2048-bit per stack. This alleviates memory wall bottlenecks for trillion-parameter autoregressive models, preventing memory-bound execution stall states.`,
    specSheet: [
      { label: 'Architecture', value: 'NVIDIA Vera Rubin' },
      { label: 'Fabrication Node', value: 'Custom TSMC 3nm / N3X Extreme' },
      { label: 'Memory Capacity', value: '288GB HBM4 (20 TB/s Bandwidth)' },
      { label: 'Interconnect', value: 'NVLink 6 (3.6 TB/s per GPU)' },
      { label: 'FP4 Tensor Compute', value: '36 PFLOPS per Dual-Socket Module' },
      { label: 'Thermal Design Power', value: '1,200W Liquid Cooled' }
    ],
    industryImpact: 'Reduces inference cluster sizes by 60% for frontier 10-trillion parameter reasoning and multi-modal models, while standardizing direct liquid cooling (DLC) across enterprise datacenters.',
    tags: ['NVIDIA', 'Rubin', 'HBM4', 'CoWoS', 'AI Hardware', 'NVLink 6', 'AI Creation'],
    source: 'NVIDIA GTC Keynote & Architecture Whitepaper',
    badgeColor: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'news-live-3',
    title: 'ASML Ships Twinscan EXE:5400 High-NA EUV with 0.55 NA to Commercial Foundries',
    subtitle: 'Anamorphic Projection Halves Single-Exposure Mask Printing from 13.5nm Pitch to 8nm at 240 Wafers/Hour Throughput',
    category: 'semiconductor',
    company: 'ASML',
    timeString: '04:45 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'ASML has initiated volume commercial shipments of the Twinscan EXE:5400 High-NA EUV lithography tool, transitioning foundries from 0.33 NA to 0.55 NA anamorphic optics to eliminate expensive quadruple patterning on sub-1.4nm metal lines.',
    keyHighlights: [
      'Numerical Aperture increased from 0.33 to 0.55, enabling printing of 8nm minimum critical dimensions in a single exposure.',
      'Anamorphic optical lens design prevents 3D mask shadow distortion without requiring redesign of standard reticle sizes.',
      'Replaces 3 to 4 multi-patterning Low-NA EUV passes with a single High-NA EUV scan, shortening fab cycle times by 20 days.',
      'Adopted by TSMC, Intel, and Samsung for A14 (1.4nm) and A10 (1.0nm) production ramps.'
    ],
    technicalDeepDive: `In Low-NA EUV (0.33 NA), shrinking features below 24nm pitch required LELE (Litho-Etch-Litho-Etch) or Self-Aligned Quadruple Patterning (SAQP), exponentially inflating mask count, defect probability, and wafer cost.

High-NA EUV (0.55 NA) uses anamorphic mirrors to split light incidence angles, resolving 8nm metal pitch with zero edge-placement error (EPE). The system features an ultra-fast wafer stage achieving sub-1.1nm overlay accuracy at 240 wafers per hour.`,
    specSheet: [
      { label: 'Tool Model', value: 'ASML Twinscan EXE:5400' },
      { label: 'Numerical Aperture', value: '0.55 NA (High-NA)' },
      { label: 'Resolution Limit', value: '8nm Critical Dimension (CD)' },
      { label: 'Overlay Precision', value: '< 1.1 nm Dedicated Chuck Overlay' },
      { label: 'Throughput', value: '240 Wafers / Hour' }
    ],
    industryImpact: 'Extends Moore’s Law past physical limits of 0.33 NA EUV, enabling direct printing of next-decade sub-10nm metal interconnects and CFET 3D transistor gates.',
    tags: ['High-NA EUV', 'ASML', 'Lithography', 'Anamorphic Optics', 'Semiconductor'],
    source: 'ASML Technical Briefing & SPIE Lithography Conference',
    badgeColor: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'news-live-ai-3',
    title: 'Groq LPU v2 Racks Deliver 100,000 Tokens/Sec for Real-Time Multi-Agent AI Creation',
    subtitle: 'Deterministic SRAM-Only Architecture Eliminates DRAM Jitter to Enable Human-Paced Generative Voice & Reasoning',
    category: 'ai_creation',
    company: 'Groq',
    timeString: '03:30 UTC',
    readTime: '4 min read',
    breaking: false,
    summary: 'Groq has announced mass customer deployment of its second-generation Language Processing Unit (LPU v2) racks. Built around deterministic tensor streaming silicon with zero external DRAM, Groq delivers 100,000 tokens per second streaming throughput with sub-5 millisecond time-to-first-token.',
    keyHighlights: [
      'Eliminates external HBM/DRAM dependencies: each LPU incorporates 512MB ultra-fast on-die SRAM at 80 TB/s.',
      'Deterministic cycle-by-cycle compiler scheduling ensures zero thread synchronization overhead or memory jitter.',
      'Executes Llama-3 70B and frontier reasoning SLMs at 850+ tokens per second per active user stream.',
      'Direct chip-to-chip optical interconnect fabric connects 64 LPUs without network switches.'
    ],
    technicalDeepDive: `While standard GPUs depend on dynamic hardware scheduling, memory controllers, and unpredictable cache misses that stall generative inference, Groq's Tensor Streaming Processor (TSP) is 100% deterministic.
    
The compiler knows the exact location of every tensor operand down to individual clock cycles, allowing multi-agent LLM systems to reason and execute parallel workflows in real time without latency penalties.`,
    specSheet: [
      { label: 'Processor Architecture', value: 'Groq LPU v2 Tensor Streaming Processor' },
      { label: 'Fabrication Node', value: 'Custom 4nm Advanced Foundry Node' },
      { label: 'On-Chip Memory', value: '512MB SRAM per Chip (80 TB/s)' },
      { label: 'Inference Latency', value: '< 5ms Time-to-First-Token (TTFT)' }
    ],
    industryImpact: 'Unlocks real-time conversational AI creation, instantaneous code generation, and multi-agent collaborative workflows at production scale.',
    tags: ['Groq', 'LPU', 'Deterministic Silicon', 'AI Creation', 'Real-Time Inference', 'SRAM'],
    source: 'Groq AI Hardware Summit Keynote',
    badgeColor: 'from-orange-500 to-amber-600'
  },
  {
    id: 'news-live-5',
    title: 'Google Cloud Deploys TPU v6 Trillium with Jupiter MEMS Optical Circuit Switches',
    subtitle: 'Custom In-House Silicon Delivers 4.7x Peak Compute Boost with Direct Liquid Cooling and 4.8 Tbps Optical Mesh',
    category: 'ai_creation',
    company: 'Google Cloud',
    timeString: '01:30 UTC',
    readTime: '4 min read',
    breaking: false,
    summary: 'Google Cloud has achieved general availability for its 6th-generation Tensor Processing Unit (TPU v6 "Trillium") and custom Axion ARM server CPUs across global datacenters, powering Gemini frontier reasoning clusters.',
    keyHighlights: [
      '4.7x increase in peak matrix compute (FLOPs) per chip compared to TPU v5e.',
      'Third-generation Matrix Multiply Units (MXUs) with doubled HBM memory capacity and bandwidth.',
      'Custom Optical Circuit Switch (OCS) dynamically reconfigures TPU pod topology without electrical packet hops.',
      'Axion server CPUs based on ARM Neoverse V2 deliver 50% better energy efficiency than existing x86 instances.'
    ],
    technicalDeepDive: `Google's TPU v6 architecture pairs custom VPU (Vector Processing Unit) and dual-core MXU tiles with direct liquid cooling.

The key differentiator is the Jupiter Optical Circuit Switch (OCS) fabric. By switching optical beams using MEMS micro-mirrors, Google dynamically rewires 65,536-TPU supercomputers to route around failed nodes or optimize gradient aggregation rings in milliseconds with zero latency penalty.`,
    specSheet: [
      { label: 'Processor', value: 'Google TPU v6 (Trillium)' },
      { label: 'Matrix Unit', value: 'Dual 3rd-Gen MXU per Core' },
      { label: 'Interconnect', value: 'Optical Circuit Switch (OCS) Fabric' },
      { label: 'Companion CPU', value: 'Google Axion (ARM Neoverse V2)' },
      { label: 'Workloads', value: 'Gemini Models, Frontier Diffusion, Video AI' }
    ],
    industryImpact: 'Demonstrates the power of end-to-end custom vertical hardware co-design (silicon + optical networking + compiler) for massive hyperscale AI efficiency.',
    tags: ['Google TPU v6', 'Trillium', 'Axion CPU', 'Optical Circuit Switch', 'Gemini AI', 'AI Creation'],
    source: 'Google Cloud Next & Hardware Architecture Blog',
    badgeColor: 'from-amber-400 to-red-500'
  },
  {
    id: 'news-live-6',
    title: 'Tenstorrent & RISC-V Announce 512-bit Vector Server Silicon on 3nm Node',
    subtitle: 'Jim Keller Unveils Open-Standard RVA23 Server Silicon with Tensix AI Matrix Accelerators for Hyperscalers',
    category: 'semiconductor',
    company: 'RISC-V International',
    timeString: '00:15 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Tenstorrent and RISC-V International have taped out a 128-core high-performance RISC-V server processor on 3nm silicon, featuring 512-bit RVV vector engines tightly coupled with Tensix spatial AI execution pipelines.',
    keyHighlights: [
      '128 Out-of-Order 8-wide decode RISC-V cores conforming to the newly ratified RVA23 standard profile.',
      'Native RVV 1.0 512-bit vector units coupled with Tensix FP8 matrix engines delivering 18 PFLOPS rack density.',
      'Zero architecture licensing fees, offering a direct royalty-free alternative to x86 and ARM server chips.',
      'Standardized Linux kernel support and drop-in PyTorch TT-Metalium execution runtime.'
    ],
    technicalDeepDive: `The core pipeline features an aggressive 512-entry Reorder Buffer (ROB) and 6 ALU execution ports capable of sustained 4-instruction retirement per cycle.

By integrating Tensix AI math engines directly on the coherent core mesh rather than across PCIe buses, memory copies are eliminated, reducing latency for autoregressive attention kernels by 70%.`,
    specSheet: [
      { label: 'Architecture', value: 'RISC-V RVA23 + Tensix AI' },
      { label: 'Core Count', value: '128 Cores / 256 Threads' },
      { label: 'Vector Length', value: '512-bit Native RVV 1.0' },
      { label: 'Fabrication', value: '3nm FinFET / Nanosheet' },
      { label: 'Interconnect', value: 'Coherent 2D Mesh (2.0 TB/s)' }
    ],
    industryImpact: 'Provides the first commercially competitive open-source ISA server silicon capable of replacing proprietary x86/ARM CPUs in AI training clusters.',
    tags: ['RISC-V', 'Tenstorrent', 'RVA23', 'Jim Keller', 'Open Silicon', 'Server CPU', 'Semiconductor'],
    source: 'RISC-V Global Keynote & Tenstorrent Architecture Briefing',
    badgeColor: 'from-amber-500 to-yellow-500'
  }
];

// BATCH B (Active Day 2 Stories in Cycle 0)
const COHORT_BATCH_B: Omit<TechNewsItem, 'dayGroup' | 'date' | 'relativeTime' | 'timestamp'>[] = [
  {
    id: 'news-live-ai-4',
    title: 'OpenAI & Broadcom Tape Out Custom 3nm AI Inference ASIC on TSMC Foundry Process',
    subtitle: 'In-House Silicon Co-Designed for Frontier Reasoning Models and Low-Latency Agentic Synthesis',
    category: 'ai_creation',
    company: 'OpenAI',
    timeString: '15:30 UTC',
    readTime: '4 min read',
    breaking: true,
    summary: 'OpenAI and Broadcom have completed tape-out of OpenAI\'s first proprietary AI inference accelerator ASIC on TSMC\'s 3nm foundry node. The customized silicon bypasses general-purpose GPU overhead to specialize in recursive chain-of-thought token generation and multimodal media synthesis.',
    keyHighlights: [
      'Co-developed with Broadcom using customized PCIe Gen 6 and 224G SerDes networking IP blocks.',
      'Fabricated on TSMC N3P with advanced CoWoS 2.5D packaging and 192GB high-speed HBM3e stacks.',
      'Hardware acceleration for self-correction loops, speculative decoding, and recursive tree search in reasoning models.',
      'Targeted for high-density inference datacenter clusters to cut per-query API generation costs by 70%.'
    ],
    technicalDeepDive: `By stripping away graphics rasterization, legacy FP64 pipelines, and unnecessary PCIe abstraction layers, OpenAI\'s custom silicon dedicates over 85% of die area to matrix multiply-accumulate (MAC) units and ultra-dense SRAM cache lines. Speculative decoding engines predict future token candidates in parallel, boosting generation velocity to match instantaneous user typing speeds.`,
    specSheet: [
      { label: 'Manufacturing Node', value: 'TSMC 3nm (N3P Node)' },
      { label: 'ASIC Partner', value: 'Broadcom Custom Silicon Division' },
      { label: 'Packaging', value: 'TSMC CoWoS-S with HBM3e' },
      { label: 'Primary Workload', value: 'OpenAI o-Series Reasoning & Agent Creation' }
    ],
    industryImpact: 'Marks the definitive transition of frontier AI labs into vertically integrated silicon designers, directly challenging commercial GPU dominance.',
    tags: ['OpenAI', 'Broadcom', 'Custom ASIC', 'AI Creation', 'TSMC 3nm', 'Inference'],
    source: 'Reuters Technology & Bloomberg',
    badgeColor: 'from-emerald-600 to-cyan-700'
  },
  {
    id: 'news-live-9',
    title: 'Intel 18A Node Enters Volume Production with RibbonFET & PowerVia for Clearwater Forest',
    subtitle: 'Intel Achieves High-Volume Manufacturing of Backside Power Delivery and 3D Foveros Direct Hybrid Bonding',
    category: 'semiconductor',
    company: 'Intel',
    timeString: '14:15 UTC',
    readTime: '4 min read',
    breaking: true,
    summary: 'Intel Foundry has declared high-volume manufacturing readiness for Intel 18A (1.8nm class), shipping the 288-core Clearwater Forest Xeon CPU with RibbonFET Gate-All-Around transistors and PowerVia backside power technology.',
    keyHighlights: [
      'Intel 18A integrates RibbonFET (4-stack nanosheet GAA) with PowerVia backside power delivery.',
      'Clearwater Forest combines an Intel 18A compute tile stacked on an Intel 3 base passive interposer via Foveros Direct 3D (9-micron pitch).',
      'Over 288 Darkmont Efficient-cores per socket delivering unprecedented power-per-watt efficiency for cloud workloads.',
      'Confirmed external foundry customers including Microsoft, Amazon Web Services, and US DoD Microelectronics Commons.'
    ],
    technicalDeepDive: `Intel's PowerVia approach fabricates transistors and frontside signal layers first, bonds the wafer to a carrier, polishes the backside substrate to expose nano-through-silicon vias (TSVs), and builds thick power rails on the backside.

This decoupled thermal-electrical manufacturing enables 95%+ standard cell track utilization and virtually eliminates voltage droop during heavy AVX-512 and matrix multiplication bursts.`,
    specSheet: [
      { label: 'Node Name', value: 'Intel 18A (1.8nm)' },
      { label: 'Transistor Architecture', value: 'RibbonFET GAA (Nanosheet)' },
      { label: 'Power Delivery', value: 'PowerVia (BSPDN)' },
      { label: '3D Packaging', value: 'Foveros Direct 3D (Hybrid Bond)' },
      { label: 'Product Lead', value: 'Xeon Clearwater Forest (288 Cores)' }
    ],
    industryImpact: 'Validates Intel Foundry Services (IFS) as a viable second-source global leading-edge foundry alongside TSMC for mission-critical and defense silicon.',
    tags: ['Intel 18A', 'PowerVia', 'RibbonFET', 'Foveros Direct', 'Xeon', 'IFS', 'Semiconductor'],
    source: 'Intel Foundry Direct Connect & VLSI Symposium',
    badgeColor: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'news-live-10',
    title: 'Monolithic CFET 3D Transistors Yield Over 90% in imec & TSMC Sub-1nm Pilot',
    subtitle: 'N-MOS and P-MOS Nanosheets Vertically Stacked on a Single Active Footprint, Cutting Standard Cell Area by 50%',
    category: 'semiconductor',
    company: 'TSMC',
    timeString: '11:30 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Research consortium imec alongside TSMC demonstrated functional 3D Monolithic Complementary FET (CFET) standard cells achieving >90% yield, vertically stacking nFET channels directly atop pFET channels for sub-1nm nodes.',
    keyHighlights: [
      'CFET stacks nFET directly above pFET, eliminating lateral gate isolation spacing.',
      'Achieves 50% footprint reduction for standard logic inverters, NAND2, and NOR2 gates.',
      'Enables true 3-track (3T) and 4-track (4T) standard cell libraries at sub-1.0nm (A10 / 10Å) nodes.',
      'Combined with 3D Monolithic integration and atomic layer deposition (ALD) high-k gate dielectrics.'
    ],
    technicalDeepDive: `Standard planar and nanosheet GAA cells place PMOS and NMOS side-by-side, requiring at least 15-20nm of dead space for isolation wells and STI (Shallow Trench Isolation).

Monolithic CFET utilizes sequential or self-aligned dual epitaxial channel growth. The bottom channel is selectively doped for NMOS, an oxide barrier is deposited, and the top nanosheet is grown for PMOS. Both gates are patterned simultaneously with a shared vertical metal gate, doubling effective transistor density per unit area.`,
    specSheet: [
      { label: 'Technology', value: 'Monolithic Complementary FET (CFET)' },
      { label: 'Target Nodes', value: 'A10 / A7 (Sub-1nm Angstrom)' },
      { label: 'Standard Cell Height', value: '3-Track (3T) to 4-Track (4T)' },
      { label: 'Area Scaling', value: '45-50% Area Reduction vs GAA' },
      { label: 'Primary Partners', value: 'imec, TSMC, Synopsys, Applied Materials' }
    ],
    industryImpact: 'Guarantees the continuation of semiconductor logic scaling into the 2030s when horizontal physical dimensions approach quantum tunneling barriers.',
    tags: ['CFET', '3D Transistors', 'imec', 'Semiconductor R&D', 'Sub-1nm', 'Semiconductor'],
    source: 'IEEE International Electron Devices Meeting (IEDM)',
    badgeColor: 'from-rose-500 to-amber-500'
  },
  {
    id: 'news-live-11',
    title: 'Qualcomm Snapdragon X Elite Gen 2 Ships to PC OEMs with 55 TOPS Hexagon NPU',
    subtitle: 'Custom 12-Core Oryon v2 ARM Architecture on 3nm Delivers Class-Leading Performance-Per-Watt for Copilot+ PCs',
    category: 'new_launch',
    company: 'Qualcomm',
    timeString: '09:45 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Qualcomm has shipped production quantities of its second-generation Snapdragon X Elite platform to major PC OEMs, featuring custom Oryon v2 CPU cores and a 55 TOPS Hexagon NPU for local AI execution.',
    keyHighlights: [
      '12 custom Oryon v2 64-bit ARM CPU cores boosting up to 4.4 GHz single-core and 3.8 GHz all-core.',
      'Enhanced Hexagon NPU upgraded to 55 TOPS INT8 for real-time generative SLMs and audio-visual reasoning.',
      'Adreno GPU with native Vulkan 1.3 and DirectX 12 Ultimate hardware ray tracing.',
      'Integrated Wi-Fi 7, Sub-6GHz / mmWave 5G modem, and LPDDR5X-8448 memory interface (135 GB/s).'
    ],
    technicalDeepDive: `The Oryon v2 core introduces a wider decode pipeline (8-wide fetch/decode) with a 640-entry reorder buffer (ROB), enabling massive out-of-order execution parallelism while maintaining sub-15W thermal dissipation.

The memory hierarchy features a unified 42MB cache with custom memory prefetchers optimized for low-latency instruction streaming in emulation and native ARM64 Windows binaries.`,
    specSheet: [
      { label: 'Processor', value: 'Snapdragon X Elite Gen 2' },
      { label: 'CPU Cores', value: '12 Oryon v2 Cores (Up to 4.4 GHz)' },
      { label: 'NPU Performance', value: '55 TOPS Int8 Hexagon Engine' },
      { label: 'Memory Bus', value: '128-bit LPDDR5X (135 GB/s)' },
      { label: 'Fabrication', value: 'TSMC 3nm (N3P Node)' }
    ],
    industryImpact: 'Solidifies ARM architecture as a permanent mainstream competitor in personal computing and enterprise workstations against x86 incumbents.',
    tags: ['Qualcomm', 'Snapdragon X Elite', 'Oryon v2', 'ARM PC', 'NPU 55 TOPS'],
    source: 'Qualcomm Snapdragon Summit & Tech Briefing',
    badgeColor: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'news-live-12',
    title: 'Samsung Foundry Demonstrates 2nm (SF2P) with Direct Gate-All-Around Nano-Ribbons',
    subtitle: 'MBCFET Transistor Architecture Delivers 12% Performance Uplift with Advanced High-K Metal Gate Stacks',
    category: 'semiconductor',
    company: 'Samsung',
    timeString: '08:20 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Samsung Foundry presented yield and silicon test vehicle results for its optimized 2nm SF2P node, demonstrating superior multi-bridge channel FET (MBCFET) nanosheet drive current and lower sub-threshold leakage.',
    keyHighlights: [
      'MBCFET 4-nanosheet channel stack increases effective channel width (Weff) while maintaining tight gate electrostatics.',
      'SF2P node delivers 12% clock frequency increase and 25% lower dynamic power compared to first-gen 3nm (SF3).',
      'Integration of Backside Power Delivery (BSPDN) scheduled for high-volume customer tape-outs.',
      'Signed major flagship mobile and datacenter ASIC automotive customers.'
    ],
    technicalDeepDive: `Samsung's Multi-Bridge Channel FET (MBCFET) utilizes wide nanosheets rather than narrow nanowires, allowing customizable sheet widths per standard cell requirement.

The SF2P node improves threshold voltage matching via atomic layer dipole engineering, mitigating random dopant fluctuation (RDF) across billions of transistors.`,
    specSheet: [
      { label: 'Node Name', value: 'Samsung SF2P (2nm Performance)' },
      { label: 'Architecture', value: 'MBCFET GAA Nanosheet' },
      { label: 'Drive Current Uplift', value: '+14% vs SF3' },
      { label: 'Leakage Current Reduction', value: '-30% Standby Leakage' }
    ],
    industryImpact: 'Injects healthy market competition into the leading-edge foundry landscape, giving fabless designers multiple GAA 2nm sourcing options.',
    tags: ['Samsung Foundry', '2nm', 'SF2P', 'MBCFET', 'Nanosheet', 'GAA', 'Semiconductor'],
    source: 'Samsung Foundry Forum Keynote',
    badgeColor: 'from-blue-500 to-sky-400'
  },
  {
    id: 'news-live-13',
    title: 'AMD Instinct MI355X GPU Accelerators Launched with CDNA 4 & 288GB HBM3e',
    subtitle: '3nm Compute Chiplets Integrated with 6nm Base Dies via 3D Elevate Packaging Delivering 8.0 TB/s Memory Bandwidth',
    category: 'ai_creation',
    company: 'AMD',
    timeString: '06:10 UTC',
    readTime: '4 min read',
    breaking: false,
    summary: 'AMD has officially released the Instinct MI355X accelerator powered by the CDNA 4 compute architecture, featuring 3nm chiplets, 288GB high-speed HBM3e, and ROCm open-source software stack.',
    keyHighlights: [
      '3nm CDNA 4 compute dies integrated with 6nm I/O active interposer dies via 3D Elevate packaging.',
      '35x generation-over-generation leap in AI inference performance compared to MI300X.',
      'Support for native FP4, FP6, FP8, and BF16 data types directly in matrix core pipelines.',
      'Open ROCm ecosystem with zero-code drop-in PyTorch and vLLM acceleration.'
    ],
    technicalDeepDive: `The MI355X series leverages AMD's 3D chiplet stacking with 12 HBM3e memory stacks surrounding two central compute dies.

CDNA 4 introduces enhanced Tensor Core matrix dispatch units that double FP8 and FP4 throughput per compute unit, while Infinity Fabric provides 1.2 TB/s all-to-all GPU bandwidth inside standard OCP accelerator modules.`,
    specSheet: [
      { label: 'Architecture', value: 'AMD CDNA 4' },
      { label: 'Fabrication Node', value: 'TSMC 3nm Compute + 6nm Base Dies' },
      { label: 'Memory', value: '288GB HBM3e (8.0 TB/s Bandwidth)' },
      { label: 'Precision Formats', value: 'FP4, FP6, FP8, FP16, BF16, TF32, FP64' },
      { label: 'Interconnect', value: 'Infinity Fabric 4.0' }
    ],
    industryImpact: 'Provides enterprise cloud providers with a high-performance open-ecosystem alternative to proprietary GPU clusters, driving competitive pricing in AI infrastructure.',
    tags: ['AMD Instinct', 'MI355X', 'CDNA 4', 'ROCm', 'HBM3e', 'Chiplets', 'AI Creation'],
    source: 'AMD Advancing AI Conference',
    badgeColor: 'from-red-500 to-orange-500'
  },
  {
    id: 'news-live-14',
    title: 'Universal Chiplet Interconnect Express (UCIe 2.0) Ratified with 3D Hybrid Direct Bonding',
    subtitle: 'Open Die-to-Die Standard Expands to 3D Stacking with 5.0 Tbps/mm² Bandwidth Density and Sub-0.25 pJ/bit Energy',
    category: 'new_tech',
    company: 'All Companies',
    timeString: '04:30 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'The UCIe Consortium (backed by Intel, TSMC, AMD, Samsung, NVIDIA, Qualcomm, and Synopsys) has ratified the UCIe 2.0 specification, standardizing 3D hybrid bonding and multi-vendor die-to-die chiplet communication.',
    keyHighlights: [
      'Expands from 2D/2.5D substrate interposers to full 3D direct hybrid bonding (pitch < 10 microns).',
      'Provides standard testability, telemetry, and fault-recovery protocols across dies from different foundries.',
      'Bandwidth density exceeds 5.0 Tbps/mm² with ultra-low latency (< 2 nanoseconds die-to-die).',
      'Standardizes AXI and PCIe/CXL protocol packet streaming across heterogeneous chiplets.'
    ],
    technicalDeepDive: `UCIe 2.0 defines standard Physical Layer (D2D PHY), Die-to-Die Adapter, and Protocol Layer interfaces.

With 3D Direct Bonding, micro-bumps are eliminated in favor of direct copper-to-copper fusion at room temperature, followed by thermal annealing. This decreases parasitic capacitance by an order of magnitude, enabling true modular plug-and-play ASIC development where compute, SRAM, and I/O dies originate from different foundries.`,
    specSheet: [
      { label: 'Specification', value: 'UCIe 2.0 Standard' },
      { label: 'Topology', value: '2D, 2.5D (Interposer), and 3D Hybrid Bonding' },
      { label: 'Bandwidth Density', value: '> 5.0 Tbps / mm²' },
      { label: 'Energy Per Bit', value: '< 0.25 pJ / bit' },
      { label: 'Consortium Members', value: 'Intel, TSMC, AMD, NVIDIA, Samsung, Arm, Qualcomm' }
    ],
    industryImpact: 'Paves the way for open-market chiplet ecosystems where hardware engineers can assemble custom SoCs from off-the-shelf pre-verified silicon dies.',
    tags: ['UCIe 2.0', 'Chiplets', 'Hybrid Bonding', 'Heterogeneous Integration', 'Advanced Packaging'],
    source: 'UCIe Consortium Technical Whitepaper',
    badgeColor: 'from-indigo-600 to-cyan-500'
  },
  {
    id: 'news-live-15',
    title: 'ARM Neoverse V3 Core Adopted Across Hyperscale Cloud Datacenters',
    subtitle: 'ARMv9.2-A Server Core with Dual 256-bit SVE2 and PCIe Gen 6 Interconnect Achieves 40% IPC Uplift',
    category: 'new_tech',
    company: 'ARM',
    timeString: '03:15 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'ARM has announced widespread adoption of its flagship Neoverse V3 compute core across cloud service providers including AWS, Microsoft Azure, and Oracle Cloud, delivering unmatched performance-per-watt for cloud microservices.',
    keyHighlights: [
      'Up to 40% single-threaded IPC improvement over Neoverse V2 on 3nm nodes.',
      'Dual 256-bit SVE2 vector pipelines with support for bfloat16 and INT8 matrix math.',
      'ARM Confidential Compute Architecture (CCA) with Realm Management Extension (RME) for hardware-enforced VM encryption.',
      'Seamless integration with CMN coherent mesh network interconnect.'
    ],
    technicalDeepDive: `Neoverse V3 features a branch predictor powered by TAGE neural network tables that slashes branch misprediction penalties by 30%.

The core includes an upgraded L2 cache bandwidth subsystem capable of streaming 64 bytes per cycle, preventing data starvation during dense memory-bound cloud virtualization workloads.`,
    specSheet: [
      { label: 'Architecture', value: 'ARMv9.2-A Neoverse V3' },
      { label: 'Vector Units', value: 'Dual 256-bit SVE2 Engines' },
      { label: 'Security', value: 'ARM CCA & Hardware Enclaves' },
      { label: 'Target Nodes', value: 'TSMC N3E / Intel 18A' }
    ],
    industryImpact: 'Solidifies ARM\'s expanding share of the global server CPU market, exceeding 25% of all active hyperscale cloud compute instances.',
    tags: ['ARM', 'Neoverse V3', 'Server CPU', 'SVE2', 'Cloud Computing'],
    source: 'ARM TechCon Keynote & Architecture Whitepaper',
    badgeColor: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'news-live-16',
    title: 'Applied Materials Unveils Centura Sculpta Pattern-Shaping System for Sub-1nm Pitches',
    subtitle: 'Direct Nanoscale Silicon Ribbon Trimming Eliminates Mask Layers in High-NA Lithography Fabs',
    category: 'new_tech',
    company: 'Applied Materials',
    timeString: '01:50 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Applied Materials introduced its second-generation Centura Sculpta pattern-shaping system, enabling foundries to stretch and trim EUV patterns along single axes to halve lithography mask passes on sub-1nm wafer runs.',
    keyHighlights: [
      'Sculpta system uses directional plasma chemistry to shape single EUV exposure patterns, eliminating second mask exposures.',
      'Reduces wafer production costs by $250 per wafer and cuts water/electricity consumption in fab operations.',
      'Improves edge placement error (EPE) margins and bridges critical dimension gaps in nanosheet gap etching.',
      'Adopted on leading-edge 2nm and 1.4nm pilot production lines.'
    ],
    technicalDeepDive: `Pattern shaping provides an alternative to dual-exposure EUV. After standard EUV exposure and resist develop, Sculpta directs a uniform angled plasma stream that elongates patterns in the chosen direction, bridging gaps between metal lines.

This chemical modification allows designers to place tighter tip-to-tip metal spacing without triggering electrical bridging defects or requiring complex LELE dual-mask splits.`,
    specSheet: [
      { label: 'Equipment', value: 'Applied Materials Centura Sculpta Gen 2' },
      { label: 'Application', value: 'Sub-1nm Pattern Shaping & Tip-to-Tip Pitch Shrink' },
      { label: 'Mask Savings', value: 'Eliminates 1 EUV Mask Layer per Critical Metal Level' },
      { label: 'Defect Density', value: '< 0.001 defects / cm²' }
    ],
    industryImpact: 'Substantially reduces the runaway capital cost of leading-edge semiconductor manufacturing, keeping advanced node tapeouts economically viable.',
    tags: ['Applied Materials', 'Sculpta', 'Pattern Shaping', 'Lithography', 'Fab Equipment'],
    source: 'Applied Materials Global Media Briefing',
    badgeColor: 'from-amber-600 to-red-600'
  }
];

// BATCH C (Active Day 3 Stories in Cycle 0)
const COHORT_BATCH_C: Omit<TechNewsItem, 'dayGroup' | 'date' | 'relativeTime' | 'timestamp'>[] = [
  {
    id: 'news-live-17',
    title: 'Micron Starts Volume Shipments of 36GB 12-High HBM3e Memory for Next-Gen AI Clusters',
    subtitle: '1-Beta DRAM Node Fabricates 12-Layer Stack Delivering 1.2 TB/s Bandwidth per Cube with 30% Lower Power',
    category: 'semiconductor',
    company: 'Micron',
    timeString: '17:40 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Micron Technology has commenced mass volume shipments of its 36GB 12-High HBM3e memory stacks for accelerator systems, delivering 1.2 TB/s bandwidth per cube at class-leading power efficiency.',
    keyHighlights: [
      'Fabricated on Micron’s industry-leading 1-Beta (1β) DRAM node without requiring EUV lithography.',
      '12 DRAM dies vertically interconnected via Through-Silicon Vias (TSVs) with advanced micro-bump metallurgy.',
      'Enables 8-cube GPU modules with 288GB total high-bandwidth memory delivering over 9.6 TB/s total bandwidth.',
      'Consumes 30% less power than competing 8-high HBM3e modules during continuous tensor matrix multiplication.'
    ],
    technicalDeepDive: `The 12-High stack achieves a package height matching previous 8-high modules through precision die thinning (reducing each DRAM layer to ~40 microns) and non-conductive film (NCF) thermo-compression bonding.

The increased density enables datacenter operators to host 70B parameter LLMs entirely within single GPU memory spaces, drastically reducing inter-node networking overhead.`,
    specSheet: [
      { label: 'Product', value: 'Micron 36GB 12-High HBM3e' },
      { label: 'Bandwidth', value: '1.2 TB/s per Stack (9.6 Gbps Pin Speed)' },
      { label: 'DRAM Node', value: '1-Beta (1β) Monolithic Die' },
      { label: 'Stack Height', value: '12 DRAM Dies + Base Logic Die' },
      { label: 'Energy Efficiency', value: '2.5 pJ / bit' }
    ],
    industryImpact: 'Breaks the memory capacity and bandwidth bottleneck that previously limited high-throughput generative AI inference.',
    tags: ['Micron', 'HBM3e', 'DRAM', '1-Beta', 'AI Memory', 'High Bandwidth Memory'],
    source: 'Micron Technology Investor & Technical Press Release',
    badgeColor: 'from-sky-500 to-blue-600'
  },
  {
    id: 'news-live-18',
    title: 'CEA-Leti Demonstrates 3D In-Memory Computing RRAM Neuromorphic Core',
    subtitle: 'Resistive RAM Cells Integrated into Back-End-of-Line (BEOL) Metal Stacks Achieve 100x Energy Reduction in Vector-Matrix Math',
    category: 'new_tech',
    company: 'All Companies',
    timeString: '15:10 UTC',
    readTime: '4 min read',
    breaking: false,
    summary: 'French semiconductor institute CEA-Leti presented working silicon of an analog In-Memory Computing (IMC) processor integrating Hafnium Oxide (HfO2) Resistive RAM directly between metal layers M4 and M5.',
    keyHighlights: [
      'Performs analog Ohm-law and Kirchhoff-law matrix multiplication directly inside memory crossbar arrays.',
      'Eliminates von Neumann data bus shuttling, slashing energy consumption by 100x for edge neural networks.',
      'BEOL integration allows analog memory to sit directly above standard CMOS logic with zero silicon area overhead.',
      'Tested with keyword spotting, ECG anomaly detection, and vision transformer token embedding.'
    ],
    technicalDeepDive: `Traditional von Neumann architectures spend over 80% of total energy moving weights from SRAM/DRAM into ALU registers.

In CEA-Leti's RRAM crossbar, weights are programmed as analog conductance states in HfO2 memristive filaments. Applying input voltages along rows causes column currents to represent the exact dot product sum in a single sub-nanosecond clock step.`,
    specSheet: [
      { label: 'Architecture', value: 'Analog In-Memory Computing (IMC)' },
      { label: 'Memory Type', value: 'HfO2 Resistive RAM (RRAM / ReRAM)' },
      { label: 'Energy Efficiency', value: '145 TOPS / Watt' },
      { label: 'Integration', value: 'BEOL between Metal 4 & 5' }
    ],
    industryImpact: 'Enables micro-watt battery-operated edge devices to run continuous neural network inference for years without battery replacement.',
    tags: ['CEA-Leti', 'RRAM', 'In-Memory Computing', 'Neuromorphic', 'Edge AI'],
    source: 'IEEE Symposia on VLSI Technology and Circuits',
    badgeColor: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'news-live-19',
    title: 'Texas Instruments Opens 300mm GaN Semiconductor Fab with 99% Power Efficiency',
    subtitle: 'Gallium Nitride on Silicon Power Devices Slash Power Supply Dimensions in AI Datacenters by 50%',
    category: 'new_launch',
    company: 'Texas Instruments',
    timeString: '13:00 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Texas Instruments has commenced volume production at its new 300mm Gallium Nitride (GaN) manufacturing facility, producing high-voltage power ICs for 800V electric vehicle powertrains and 48V-to-1V AI server power delivery modules.',
    keyHighlights: [
      'World’s largest dedicated 300mm (12-inch) GaN-on-Silicon semiconductor fabrication line.',
      'GaN FET switches operate at 10x higher switching frequencies than silicon MOSFETs with near-zero reverse recovery losses.',
      'Enables 99% efficient 48V-to-1V point-of-load voltage regulators sitting directly beside 1000W GPU packages.',
      'Cuts overall server power supply unit (PSU) volume in half while doubling power density.'
    ],
    technicalDeepDive: `Silicon MOSFETs suffer from high gate capacitance and reverse-recovery charge (Qrr), generating significant heat at switching frequencies above 500 kHz.

TI's integrated GaN power stages feature an integrated gate driver, low parasitic inductance, and 650V breakdown voltage, allowing 2 MHz+ switching frequencies that dramatically shrink inductors and capacitors.`,
    specSheet: [
      { label: 'Facility', value: 'Texas Instruments 300mm GaN Fab' },
      { label: 'Technology', value: 'GaN-on-Silicon Integrated Power Stage' },
      { label: 'Voltage Rating', value: '650V / 100A Integrated Driver' },
      { label: 'Efficiency', value: '99.1% Peak Conversion Efficiency' }
    ],
    industryImpact: 'Prevents power supply size and heat dissipation from becoming a hard physical barrier in high-density datacenter server racks.',
    tags: ['Texas Instruments', 'GaN', 'Power Electronics', '300mm Fab', 'Efficiency'],
    source: 'TI Power Innovation Forum & Press Announcement',
    badgeColor: 'from-red-600 to-amber-600'
  },
  {
    id: 'news-live-20',
    title: 'GlobalFoundries & Ayar Labs Demonstrate TeraPHY Optical I/O Chiplets on 12LP+ Silicon',
    subtitle: 'In-Package Optical Transceivers Deliver 4.096 Tbps Bidirectional Bandwidth at 5pJ/bit for Disaggregated Compute',
    category: 'new_tech',
    company: 'GlobalFoundries',
    timeString: '10:25 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'GlobalFoundries and Ayar Labs have showcased mass-manufactured TeraPHY optical I/O chiplets co-packaged with high-performance host compute ASICs, establishing optical connections spanning up to 2 kilometers with zero electrical retimers.',
    keyHighlights: [
      'Monolithically integrates electronic drivers and silicon photonics micro-ring modulators.',
      '4.096 Tbps bidirectional optical bandwidth per chiplet across 64 optical wavelengths (DWDM).',
      'Ultra-low energy consumption of ~5 picojoules per bit (pJ/bit), representing an 80% reduction vs copper PCIe links.',
      'Enables disaggregated memory pooling where CPUs access remote CXL DRAM racks with local SRAM latency.'
    ],
    technicalDeepDive: `The TeraPHY optical chiplet interfaces with the host ASIC via standard AIB or UCIe parallel die-to-die interfaces.

The external SuperNova light source delivers 16 CW laser wavelengths into the chiplet via single-mode fiber ribbons. Silicon micro-ring modulators encode electrical bits into optical pulses, achieving extreme bandwidth density over kilometer distances.`,
    specSheet: [
      { label: 'Chiplet', value: 'Ayar Labs TeraPHY Gen 2' },
      { label: 'Process Foundry', value: 'GlobalFoundries 45SPCLO Silicon Photonics' },
      { label: 'Bandwidth', value: '4.096 Tbps Bidirectional' },
      { label: 'Energy / Bit', value: '< 5.0 pJ / bit' },
      { label: 'Reach', value: 'Up to 2 km Single-Mode Fiber' }
    ],
    industryImpact: 'Breaks physical distance limits in datacenter rack architecture, allowing memory and compute to be disaggregated across warehouse-scale facilities.',
    tags: ['GlobalFoundries', 'Ayar Labs', 'Optical IO', 'Silicon Photonics', 'Chiplets', 'TeraPHY'],
    source: 'IEEE Micro & Ayar Labs Technology Briefing',
    badgeColor: 'from-teal-500 to-cyan-600'
  },
  {
    id: 'news-live-21',
    title: 'SK Hynix Demonstrates 16-High HBM4 Memory with Custom TSMC Logic Base Die',
    subtitle: 'Direct Micro-Bump 3D Stacking and 2048-bit Bus Width Delivers 2.0 TB/s Bandwidth per Single Stack',
    category: 'semiconductor',
    company: 'SK Hynix',
    timeString: '08:00 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'SK Hynix has unveiled working samples of its 16-High HBM4 memory fabricated using a custom TSMC 3nm base logic die, doubling the memory bus width from 1024-bit to 2048-bit to satisfy next-generation AI accelerator requirements.',
    keyHighlights: [
      'First HBM generation to transition the base logic die from standard DRAM process to leading-edge TSMC 3nm CMOS.',
      '2048-bit wide memory interface delivering 2.0 TB/s sustained bandwidth per individual cube.',
      'Advanced MR-MUF (Mass Reflow Molded Underfill) packaging dissipates 20% more heat than previous generation stacks.',
      'Selected as standard memory configuration for next-generation generative AI training clusters.'
    ],
    technicalDeepDive: `By manufacturing the base logic die on TSMC's advanced 3nm foundry node, SK Hynix integrates custom BIST (Built-In Self-Test), ECC encryption engines, and routing multiplexers directly into the memory base.

This enables advanced on-die telemetry, dynamic bad-column rerouting, and direct hybrid copper-to-copper bonding without intermediate interposers.`,
    specSheet: [
      { label: 'Product', value: 'SK Hynix 48GB 16-High HBM4' },
      { label: 'Bus Width', value: '2048-bit Interface' },
      { label: 'Bandwidth', value: '2.0 TB/s per Stack' },
      { label: 'Base Die', value: 'Custom TSMC 3nm Logic' },
      { label: 'Packaging', value: 'Advanced MR-MUF' }
    ],
    industryImpact: 'Marks the historic convergence of DRAM memory manufacturing and leading-edge foundry logic fabrication in a single integrated 3D package.',
    tags: ['SK Hynix', 'HBM4', 'TSMC', 'DRAM', 'MR-MUF', '3D Stacking'],
    source: 'SK Hynix Tech Summit & IEEE Memory Workshop',
    badgeColor: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'news-live-22',
    title: 'Groq LPU v2 Rack Architecture Delivers 100,000 Tokens/Sec for Real-Time LLM Agents',
    subtitle: 'Deterministic SRAM-Only Architecture Eliminates DRAM Memory Latency in Massive Multi-Agent Inference',
    category: 'ai_creation',
    company: 'Groq',
    timeString: '06:30 UTC',
    readTime: '4 min read',
    breaking: false,
    summary: 'Groq has announced its second-generation Language Processing Unit (LPU v2) rack system, utilizing 4nm deterministic tensor streaming processors with massive on-chip SRAM to achieve real-time 100,000 tokens/second streaming throughput.',
    keyHighlights: [
      'Zero external DRAM/HBM dependency: each LPU contains 512MB ultra-fast on-die SRAM operating at 80 TB/s.',
      'Deterministic instruction execution allows exact compile-time scheduling of every tensor operation with zero runtime jitter.',
      'Achieves <5ms time-to-first-token (TTFT) and >800 tokens/sec per user stream on Llama-3 70B models.',
      'Standardized rack connects 64 LPUs over low-latency optical interconnects without network switches.'
    ],
    technicalDeepDive: `Standard GPUs rely on reactive memory controllers, dynamic cache eviction, and non-deterministic kernel launches that cause unpredictable latency spikes in real-time conversational AI.

Groq's tensor streaming processor is completely deterministic. The compiler schedules instruction execution, SRAM register bank routing, and chip-to-chip data transfers with cycle-by-cycle precision, ensuring zero stall cycles.`,
    specSheet: [
      { label: 'Processor', value: 'Groq LPU v2 Tensor Streaming Processor' },
      { label: 'Fabrication', value: '4nm Advanced Process' },
      { label: 'On-Chip Memory', value: '512MB High-Speed SRAM (80 TB/s)' },
      { label: 'Per-User Speed', value: '850 Tokens / sec (70B Model)' },
      { label: 'Time-to-First-Token', value: '< 5 milliseconds' }
    ],
    industryImpact: 'Transforms conversational AI from sluggish sequential text generation into instantaneous, human-paced real-time voice and reasoning agent interaction.',
    tags: ['Groq', 'LPU v2', 'SRAM', 'Deterministic Compute', 'LLM Inference', 'Real-Time AI'],
    source: 'Groq AI Hardware Summit Keynote',
    badgeColor: 'from-orange-500 to-amber-600'
  },
  {
    id: 'news-live-23',
    title: 'KLA Unveils High-Resolution E-Beam Inspection Tools for 3D Stacking Defect Detection',
    subtitle: 'Multi-Beam Electron Inspection Scans 1-Micron Hybrid Bonding Bumps with Sub-Nanometer Defect Sensitivity',
    category: 'new_tech',
    company: 'All Companies',
    timeString: '04:15 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Metrology leader KLA has launched the eSL10 Multi-Beam Electron Inspection system, designed specifically to detect microscopic voids, copper pad oxidation, and sub-surface alignment errors in 3D hybrid bonded wafer pairs.',
    keyHighlights: [
      'Multi-column e-beam architecture deploys 64 simultaneous electron beams to achieve 10x higher inspection throughput.',
      'Detects subsurface voids as small as 0.5nm at copper-to-copper direct bonding interfaces.',
      'Real-time deep learning classifier separates harmless surface particles from yield-killing open-circuit defects.',
      'Adopted by all major foundries for CoWoS, Foveros Direct, and 3D SoIC advanced packaging lines.'
    ],
    technicalDeepDive: `In advanced 3D packaging with hybrid bonding pitches below 5 microns, even a single nanometer-scale air void or organic particle can prevent copper atom diffusion during thermal annealing, causing latent interconnect failure.

The eSL10 utilizes a proprietary high-brightness cold field emission (CFE) source and retarding field optics to image shallow surface and subsurface structures with minimal charge build-up on dielectric passivation layers.`,
    specSheet: [
      { label: 'System', value: 'KLA eSL10 Multi-Beam E-Beam Metrology' },
      { label: 'Beam Array', value: '64 Simultaneous Electron Beams' },
      { label: 'Defect Resolution', value: '0.5nm Interface Void Detection' },
      { label: 'Target Applications', value: 'Hybrid Bonding, 3D SoIC, Foveros Direct' }
    ],
    industryImpact: 'Critical for raising multi-die 3D chiplet packaging yields from 75% to >98%, reducing the scrap cost of multi-thousand-dollar AI processor packages.',
    tags: ['KLA', 'Metrology', 'E-Beam Inspection', 'Hybrid Bonding', 'Packaging Yield', 'Defect Inspection'],
    source: 'KLA Technical Whitepaper & SEMICON West Presentation',
    badgeColor: 'from-violet-600 to-indigo-600'
  },
  {
    id: 'news-live-24',
    title: 'Marvell Unveils Custom 2nm AI Accelerator ASIC Platform with PCIe Gen 6 & CXL 3.1',
    subtitle: 'Modular Hardened Die Blocks Accelerate Custom Cloud Silicon Development from 24 Months to 9 Months',
    category: 'new_launch',
    company: 'All Companies',
    timeString: '02:00 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Marvell has introduced its 2nm Custom ASIC development platform for hyperscale cloud customers, featuring pre-verified silicon IP blocks for 224G SerDes, PCIe Gen 6, CXL 3.1 memory controllers, and multi-die UCIe interfaces.',
    keyHighlights: [
      'Pre-verified 2nm compute, memory, and I/O chiplet building blocks on TSMC 2nm (N2) node.',
      '224 Gbps long-reach PAM4 SerDes IP delivers industry-leading signal integrity across copper and optical links.',
      'CXL 3.1 memory pooling controllers allow seamless sharing of external DRAM across thousands of accelerator ASICs.',
      'Reduces development cost and time-to-market for custom hyperscale AI chips by over 50%.'
    ],
    technicalDeepDive: `Building custom silicon from scratch at 2nm costs over $500 million in EDA licenses, mask sets, and verification engineering.

Marvell's platform provides pre-characterized subsystem hard macros—including power distribution networks, memory PHYs, and security root-of-trust cores—enabling customers to focus solely on their proprietary AI tensor architecture.`,
    specSheet: [
      { label: 'Platform', value: 'Marvell 2nm Cloud ASIC Framework' },
      { label: 'Node', value: 'TSMC 2nm (N2 / N2P)' },
      { label: 'SerDes Speed', value: '224G PAM4 Long Reach' },
      { label: 'Standards', value: 'PCIe Gen 6, CXL 3.1, UCIe 2.0' },
      { label: 'Time-to-Market', value: '9 Months from RTL to Silicon' }
    ],
    industryImpact: 'Democratizes leading-edge 2nm custom silicon design for tier-2 cloud providers, fintech firms, and robotics enterprises.',
    tags: ['Marvell', 'Custom ASIC', '2nm', 'CXL 3.1', 'PCIe Gen 6', '224G SerDes'],
    source: 'Marvell Investor Day & Custom Silicon Briefing',
    badgeColor: 'from-blue-500 to-indigo-600'
  }
];

// BATCH D (Fresh incoming 24H Rollover cohort for Cycle 1+)
const COHORT_BATCH_D: Omit<TechNewsItem, 'dayGroup' | 'date' | 'relativeTime' | 'timestamp'>[] = [
  {
    id: 'news-cycle-fresh-1',
    title: 'TSMC Tapes Out First 1.4nm (A14) Test Vehicle with 3D Monolithic CFET Architecture',
    subtitle: 'Angstrom-Era Milestone: Stacked Nanosheets Overcome Quantum Tunneling with Sub-0.5V VDD Operation',
    category: 'semiconductor',
    company: 'TSMC',
    timeString: '08:45 UTC',
    readTime: '4 min read',
    breaking: true,
    featured: true,
    summary: 'TSMC Fab 20 R&D has successfully taped out its first full-reticle A14 (1.4nm) functional SRAM and logic test vehicle, integrating 3D monolithic Complementary FET (CFET) channels and 0.55 High-NA EUV lithography.',
    keyHighlights: [
      'First functional tape-out of monolithic CFET logic delivering 1.25x logic density increase over A16 node.',
      'Backside power distribution with direct buried power rails operates reliably at 0.50V ultra-low operating voltage.',
      'SRAM bitcell size shrunken to a record 0.015 μm² with zero data retention instability.',
      'Commercial volume production targeted for late 2027 with initial capacity reserved for Apple and Nvidia.'
    ],
    technicalDeepDive: `TSMC's A14 tape-out is the industry's inaugural demonstration of vertically stacked 3D CFET at full reticle dimensions. Rather than traditional side-by-side NMOS/PMOS nanosheets, CFET creates a dual-epitaxial stack with an atomic dielectric barrier.

High-NA EUV (0.55 NA) anamorphic projection printed the 16nm metal-1 pitch in a single exposure without LELE multi-patterning, achieving 99.4% defect-free via contact overlay across 300mm test wafers.`,
    specSheet: [
      { label: 'Process Node', value: 'TSMC A14 (1.4nm Angstrom)' },
      { label: 'Transistor Architecture', value: '3D Monolithic CFET (Stacked N/P)' },
      { label: 'Minimum Metal Pitch', value: '16nm Single Exposure High-NA' },
      { label: 'Operating Voltage', value: '0.50V Nominal VDD' },
      { label: 'Density Gain', value: '+25% Transistor Density vs A16' }
    ],
    industryImpact: 'Secures TSMC\'s technological roadmap into the 2030s, proving that transistor physical scaling continues past physical planar limits through vertical 3D architectures.',
    tags: ['TSMC A14', '1.4nm', 'CFET', 'High-NA EUV', 'Sub-2nm', 'Tapeout', 'Semiconductor'],
    source: 'TSMC Technology Symposium & IEEE VLSI Symposium Press Bulletin',
    badgeColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'news-cycle-fresh-2',
    title: 'Intel Unveils Xeon Clearwater Forest 288-Core Server CPU in Commercial Volume',
    subtitle: 'World\'s First 3D Hybrid-Bonded Server CPU with Intel 18A Compute Tiles & PowerVia Backside Delivery',
    category: 'semiconductor',
    company: 'Intel',
    timeString: '07:20 UTC',
    readTime: '4 min read',
    breaking: true,
    featured: true,
    summary: 'Intel has commenced worldwide shipments of Xeon 6700/6900 E-core processors ("Clearwater Forest"), featuring 288 RibbonFET cores manufactured on Intel 18A and hybrid-bonded to Intel 3 base dies via 9-micron Foveros Direct 3D.',
    keyHighlights: [
      '288 Darkmont high-throughput compute cores operating up to 3.5 GHz in an energy-optimized 350W TDP envelope.',
      'Foveros Direct 3D packaging with direct copper-to-copper micro-bumps yields 10x interconnect density over standard micro-bumps.',
      'PowerVia backside power delivery eliminates voltage droop during sustained hyperscale microservice bursts.',
      'Standard DDR5-6400 8-channel memory interface delivering over 410 GB/s bandwidth.'
    ],
    technicalDeepDive: `Clearwater Forest is composed of three compute tiles fabricated on Intel 18A sitting atop a passive base die containing power delivery channels and high-speed I/O.

By routing power strictly through PowerVia backside TSVs, the frontside metal layers achieve a 95% routing efficiency, allowing Intel to place 288 physical cores and 144MB of shared L3 cache on a compact socket footprint without hot spots.`,
    specSheet: [
      { label: 'Processor', value: 'Intel Xeon Clearwater Forest' },
      { label: 'Core Architecture', value: '288 Darkmont E-Cores (Intel 18A)' },
      { label: '3D Packaging', value: 'Foveros Direct 3D (9μm Pitch)' },
      { label: 'Power Delivery', value: 'PowerVia Backside Power (BSPDN)' },
      { label: 'Power Envelope', value: '350W TDP (Hyperscale Cloud)' }
    ],
    industryImpact: 'Marks Intel\'s decisive return to process parity in volume datacenter production, providing hyperscalers with unprecedented cloud compute density per rack.',
    tags: ['Intel 18A', 'Clearwater Forest', 'RibbonFET', 'PowerVia', 'Foveros Direct', 'Server CPU', 'Semiconductor'],
    source: 'Intel Foundry & Data Center Executive Briefing',
    badgeColor: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'news-cycle-fresh-3',
    title: 'Samsung SF1.4 (1.4nm) Enters Customer Multi-Project Wafer (MPW) Shuttles',
    subtitle: 'Second-Generation MBCFET Gate-All-Around Node Offers 15% Power Reduction and Monolithic BSPDN',
    category: 'semiconductor',
    company: 'Samsung',
    timeString: '05:30 UTC',
    readTime: '3 min read',
    breaking: false,
    summary: 'Samsung Foundry has officially opened MPW shuttle bookings for its upcoming SF1.4 (1.4nm) Angstrom process, allowing global fabless partners to tape out prototype silicon with backside power delivery networks.',
    keyHighlights: [
      'SF1.4 node increases nanosheet channels from 3 to 4 per vertical stack, boosting drive current by 18%.',
      'Monolithic Backside Power Delivery Network (BSPDN) integrated directly on 300mm production wafers.',
      '15% lower operating power and 1.20x standard logic density improvement compared to SF2.',
      'First shuttle silicon scheduled for Q2 delivery to automotive, AI, and mobile SoC partners.'
    ],
    technicalDeepDive: `Samsung's SF1.4 process utilizes an optimized high-k metal gate (HKMG) dielectric stack deposited via atomic layer epitaxy, reducing gate leakage current by 35% at 0.65V.

The multi-project wafer shuttle program includes complete Synopsys, Cadence, and Siemens EDA reference flows verified for automated backside via synthesis.`,
    specSheet: [
      { label: 'Process Node', value: 'Samsung SF1.4 (1.4nm Angstrom)' },
      { label: 'Architecture', value: '4-Stack MBCFET Nanosheet GAA' },
      { label: 'Power Delivery', value: 'Backside Power Delivery (BSPDN)' },
      { label: 'Performance / Power', value: '+18% Drive Current / -15% Power' }
    ],
    industryImpact: 'Provides fabless chip designers with an essential alternative Angstrom-class foundry source for competitive commercial tapeouts.',
    tags: ['Samsung SF1.4', '1.4nm', 'MBCFET', 'Foundry MPW', 'GAA', 'BSPDN', 'Semiconductor'],
    source: 'Samsung Foundry Forum & Semiconductor Executive Keynote',
    badgeColor: 'from-sky-500 to-blue-600'
  },
  {
    id: 'news-cycle-fresh-4',
    title: 'NVIDIA & TSMC Tape Out 3.2 Tbps Co-Packaged Silicon Photonics Optical Engine',
    subtitle: 'Monolithic Photonic IC Integrated Directly onto GPU Substrate Slashes Optical Transceiver Power to 2.8 pJ/bit',
    category: 'ai_creation',
    company: 'NVIDIA',
    timeString: '04:10 UTC',
    readTime: '4 min read',
    breaking: false,
    summary: 'NVIDIA and TSMC have demonstrated functional silicon of a 3.2 Terabit-per-second Co-Packaged Optics (CPO) transceiver chiplet hybrid-bonded onto GPU carrier substrates, enabling direct optical interconnects across AI datacenter halls.',
    keyHighlights: [
      'Replaces pluggable optical transceivers with in-package Silicon Photonics ICs (PIC) manufactured on TSMC COUPE.',
      'Energy per bit dropped to an unprecedented 2.8 pJ/bit (vs 25 pJ/bit for traditional copper SerDes).',
      'Connects 10,000+ GPU superclusters over kilometer-scale single-mode fiber with sub-5ns photonic latency.',
      'Eliminates active retimer chips on server backplanes, cutting rack power by 3.2 kW.'
    ],
    technicalDeepDive: `Traditional optical transceivers rely on pluggable QSFP-DD modules situated at the front edge of the server chassis, requiring long copper traces across high-loss PCB material.

NVIDIA's CPO engine places micro-ring photonic modulators within 2mm of the GPU compute die. Direct fiber arrays plug into optical blind-mate sockets directly atop the substrate, completely removing electrical copper transmission lines.`,
    specSheet: [
      { label: 'Technology', value: 'In-Package Co-Packaged Optics (CPO)' },
      { label: 'Bandwidth', value: '3.2 Tbps Bidirectional per GPU' },
      { label: 'Energy Consumption', value: '2.8 pJ / bit' },
      { label: 'Optical Modulation', value: 'Continuous Wave (CW) Micro-Ring Modulator' }
    ],
    industryImpact: 'Unlocks the physical scalability required for million-GPU reasoning clusters without hitting optical networking power barriers.',
    tags: ['Silicon Photonics', 'CPO', 'NVIDIA', 'TSMC COUPE', 'Optical Networking', 'AI Cluster', 'AI Creation'],
    source: 'IEEE Optical Interconnects Conference & NVIDIA Research Whitepaper',
    badgeColor: 'from-emerald-500 to-cyan-500'
  }
];

// Helper: Calculate dynamic relative time string
export function getLiveRelativeTime(hoursAgo: number, minsAgo: number = 0): string {
  if (hoursAgo === 0) {
    if (minsAgo <= 5) return 'Just now';
    return `${minsAgo} mins ago`;
  }
  if (hoursAgo === 1) return '1 hour ago';
  if (hoursAgo < 24) return `${hoursAgo} hours ago`;
  const days = Math.floor(hoursAgo / 24);
  if (days === 1) return `Yesterday • ${24 - hoursAgo % 24}:00 UTC`;
  return `${days} days ago • 14:00 UTC`;
}

// =========================================================================
// 24-HOUR ROLLING NEWS GENERATOR
// =========================================================================
// Generates the strict 3-day (72-hour) database based on current 24-hour cycle offset
export function generate24HourRollingNews(
  cycleOffset: number = 0, 
  referenceDate: Date = new Date()
): TechNewsItem[] {
  const todayDateStr = getFormattedDateString(0, referenceDate);
  const yesterdayDateStr = getFormattedDateString(1, referenceDate);
  const twoDaysAgoDateStr = getFormattedDateString(2, referenceDate);

  // Select cohort based on cycle offset
  // In Cycle 0: Day 1 = BATCH A, Day 2 = BATCH B, Day 3 = BATCH C
  // In Cycle 1: Day 1 = BATCH D + A slice, Day 2 = BATCH A, Day 3 = BATCH B (BATCH C is archived!)
  // In Cycle 2: Day 1 = BATCH A (refreshed), Day 2 = BATCH D, Day 3 = BATCH A
  
  let day1Batch: Omit<TechNewsItem, 'dayGroup' | 'date' | 'relativeTime' | 'timestamp'>[];
  let day2Batch: Omit<TechNewsItem, 'dayGroup' | 'date' | 'relativeTime' | 'timestamp'>[];
  let day3Batch: Omit<TechNewsItem, 'dayGroup' | 'date' | 'relativeTime' | 'timestamp'>[];

  const normalizedCycle = Math.abs(cycleOffset) % 3;

  if (normalizedCycle === 0) {
    day1Batch = COHORT_BATCH_A;
    day2Batch = COHORT_BATCH_B;
    day3Batch = COHORT_BATCH_C;
  } else if (normalizedCycle === 1) {
    day1Batch = [...COHORT_BATCH_D, ...COHORT_BATCH_A.slice(0, 4)];
    day2Batch = COHORT_BATCH_A;
    day3Batch = COHORT_BATCH_B;
  } else {
    day1Batch = COHORT_BATCH_B;
    day2Batch = [...COHORT_BATCH_D, ...COHORT_BATCH_A.slice(0, 4)];
    day3Batch = COHORT_BATCH_A;
  }

  const result: TechNewsItem[] = [];

  // 1. DAY 1: TODAY (0 - 24 hours ago)
  day1Batch.forEach((item, index) => {
    const hours = Math.floor(index * 1.5) + (index === 0 ? 0 : 1);
    const mins = (index * 17) % 60;
    const relTime = index === 0 ? '25 mins ago' : index === 1 ? '1 hour ago' : `${hours} hours ago`;
    const dateObj = new Date(referenceDate.getTime() - (hours * 60 + mins) * 60 * 1000);

    result.push({
      ...item,
      id: `${item.id}-c${normalizedCycle}-d1`,
      dayGroup: 'today',
      date: todayDateStr,
      timestamp: dateObj.toISOString(),
      relativeTime: relTime,
      readTime: item.readTime || '4 min read'
    });
  });

  // 2. DAY 2: YESTERDAY (24 - 48 hours ago)
  day2Batch.forEach((item, index) => {
    const hours = 24 + Math.floor(index * 2.5);
    const dateObj = new Date(referenceDate.getTime() - hours * 60 * 60 * 1000);

    result.push({
      ...item,
      id: `${item.id}-c${normalizedCycle}-d2`,
      dayGroup: 'yesterday',
      date: yesterdayDateStr,
      timestamp: dateObj.toISOString(),
      relativeTime: `Yesterday • ${item.timeString}`,
      readTime: item.readTime || '3 min read'
    });
  });

  // 3. DAY 3: 2 DAYS AGO (48 - 72 hours ago)
  day3Batch.forEach((item, index) => {
    const hours = 48 + Math.floor(index * 2.5);
    const dateObj = new Date(referenceDate.getTime() - hours * 60 * 60 * 1000);

    result.push({
      ...item,
      id: `${item.id}-c${normalizedCycle}-d3`,
      dayGroup: 'two_days_ago',
      date: twoDaysAgoDateStr,
      timestamp: dateObj.toISOString(),
      relativeTime: `2 days ago • ${item.timeString}`,
      readTime: item.readTime || '3 min read'
    });
  });

  return result;
}

// Initial Exported Database
export const TECH_NEWS_DATABASE: TechNewsItem[] = generate24HourRollingNews(0);
