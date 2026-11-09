import { InterviewQuestion } from '../interviewData';

export const SAMSUNG_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'samsung-1',
    companyId: 'samsung',
    category: 'GAAFET & Process Technology',
    question: 'How does Samsung 3nm/2nm Gate-All-Around (GAA) MBCFET (Multi-Bridge-Channel FET) technology overcome the physical limitations of FinFET architectures in sub-3nm semiconductor scaling?',
    keyPoints: [
      'Gate material surrounds all 4 sides of vertically stacked nanosheet channels for superior electrostatic gate control',
      'Adjustable nanosheet channel width (W_ns) enables continuous drive-current (I_on) vs dynamic power tuning per standard cell without discrete fin quantization constraints',
      'Significantly reduced Drain-Induced Barrier Lowering (DIBL) and near-ideal Subthreshold Swing (~65 mV/dec) minimizing subthreshold leakage',
      'Lower supply voltage operation (V_dd down to 0.65V-0.7V) drastically reducing active switching energy (P = C * V^2 * f)',
      'Mitigation of short-channel effects and improved thermal dissipation compared to narrow FinFET fins'
    ],
    sampleAnswer: 'Samsung MBCFET (Multi-Bridge Channel FET) replaces vertical 3D fins with vertically stacked horizontal silicon nanosheets enclosed on all 4 sides by high-k metal gates. This 360-degree gate wrap-around dramatically suppresses short-channel effects (DIBL < 40 mV/V) and achieves near-ideal subthreshold slope. Crucially, MBCFET allows circuit designers to modulate the width of each nanosheet continuously rather than being restricted to discrete fin counts (fin quantization in FinFETs), delivering optimal drive strength, 45% area scaling, and up to 50% power reduction at equal performance.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-2',
    companyId: 'samsung',
    category: 'Memory & HBM3E/HBM4',
    question: 'Explain the architectural differences between HBM3E (12-Hi/16-Hi) and next-generation HBM4 memory stacks at Samsung Semiconductor, focusing on TSV density, base die fabrication, and hybrid bonding.',
    keyPoints: [
      'HBM3E uses 1024-bit interface per stack with Advanced Thermal Compression Non-Conductive Film (TC-NCF) or MR-MUF packaging',
      'HBM4 expands the base bus interface to 2048-bit wide, doubling channel count and lowering per-pin signaling frequency for thermal efficiency',
      'Base logic die in HBM4 transitions from standard DRAM process to advanced Samsung Foundry FinFET/GAA nodes (4nm/3nm) for on-die custom logic and power management',
      'Adoption of Direct Copper-to-Copper (Cu-Cu) Hybrid Bonding eliminating microbumps for ultra-tight bump pitch (<1μm) and superior thermal dissipation',
      'Bandwidth exceeding 2.0 TB/s per stack to feed generative AI accelerator clusters (NVIDIA, AMD, custom ASICs)'
    ],
    sampleAnswer: 'Samsung HBM3E delivers up to 1.2 TB/s per stack using a 1024-bit wide interface with Through-Silicon Vias (TSVs) across 12 to 16 stacked DRAM dies. In HBM4, the interface doubles to 2048 bits. To manage the immense routing density and power, HBM4 fabricates the base logic die on Samsung advanced foundry node (4nm/3nm GAA) instead of a commodity DRAM process. Furthermore, HBM4 transitions from microbump solder joints to direct Cu-Cu hybrid bonding, eliminating solder thermal resistance, reducing vertical stack height, and providing over 2.0 TB/s bandwidth per cube.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-3',
    companyId: 'samsung',
    category: 'SoC & Exynos Architecture',
    question: 'How is the multi-cluster CPU and clock domain architecture partitioned in Samsung Exynos flagship SoCs to balance peak single-thread performance, sustained multi-core compute, and background standby power?',
    keyPoints: [
      'Tri-cluster / Quad-cluster CPU topology: Ultra-high performance Prime core (Cortex-X series), Performance Big cores, and High-Efficiency Little cores',
      'Decoupled asynchronous clock domains per cluster with dedicated Dynamic Voltage and Frequency Scaling (DVFS) domains',
      'Low-latency Asynchronous Clock Domain Crossing (CDC) bridges connecting CPU clusters to the coherent System NoC (Network-on-Chip)',
      'Shared L3 System-Level Cache (SLC) with smart cache partitioning and memory compression (Samsung Memory Guard)',
      'Energy-Aware Scheduler (EAS) integrated with hardware performance counters for rapid task migration (<10μs)'
    ],
    sampleAnswer: 'Samsung Exynos SoCs utilize a heterogeneous multi-cluster hierarchy combining a high-IPC Prime core operating at maximum clock speeds for bursty single-threaded UI workloads, mid-cores for sustained gaming and video processing, and high-efficiency little cores for background tasks. Each cluster operates in an isolated voltage/frequency domain with dedicated on-chip Low Dropout (LDO) regulators and MTCMOS power gates. Asynchronous FIFOs and AMBA CHI/AXI coherent bridges connect the clusters to the central System NoC, allowing clusters to ramp up or down independently without stalling the system fabric.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-4',
    companyId: 'samsung',
    category: 'V-NAND Flash Technology',
    question: 'Describe Samsung 3D V-NAND Cell-On-Peri (COP) architecture and the critical engineering hurdles associated with High Aspect Ratio (HARC) etching beyond 280 vertical layers.',
    keyPoints: [
      'Cell-On-Peri (COP) places peripheral logic circuitry (sense amplifiers, charge pumps, page buffers) beneath the 3D NAND cell array to maximize die density',
      'HARC etching requires drilling vertical channel holes with aspect ratios exceeding 100:1 through alternating oxide-nitride (ONON) film stacks',
      'Double-stack / Multi-stack string integration connects independently etched 3D NAND decks with microscopic alignment precision (<5nm overlay)',
      'Mitigation of word-line RC propagation delay through low-resistance molybdenum/tungsten metal fill',
      'Charge Trap Flash (CTF) nitride layer engineering to prevent lateral charge migration and threshold voltage (V_th) drift'
    ],
    sampleAnswer: 'Samsung 3D V-NAND COP architecture locates the peripheral drive and sense circuits directly underneath the memory cell array, recovering up to 30% silicon area. To scale past 280 layers, Samsung utilizes double-stack etching, where channel holes are etched through the bottom deck, planarized, and then aligned with extreme lithographic accuracy to the upper deck. The primary challenges are maintaining uniform channel hole diameter from top to bottom (preventing bowing or tilting) and minimizing word-line RC delay using low-resistivity metal gates to ensure microsecond read/program latency.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-5',
    companyId: 'samsung',
    category: 'CXL & Data Center Silicon',
    question: 'How do Samsung Compute Express Link (CXL) 2.0/3.0 memory expanders enable dynamic memory pooling and near-zero latency cache coherency over PCIe Gen5/Gen6 physical links?',
    keyPoints: [
      'CXL.mem and CXL.cache protocols running over native PCIe physical layer with ultra-low latency FLIT (Flow Control Unit) framing',
      'Dynamic multi-host memory pooling allowing multiple server CPUs to dynamically allocate and share terabytes of CXL DRAM pools',
      'Hardware-managed memory controller handling media management, wear-leveling, and ECC scrubbing transparently to host OS',
      'Direct memory mapping to host physical address space (HPA) using host-managed device memory (HDM) decoders',
      'Integrated High-Bandwidth SerDes with DFE/CTLE equalization to ensure BER < 10^-12 across server backplanes'
    ],
    sampleAnswer: 'Samsung CXL Memory Expanders connect DDR5 memory modules directly to PCIe Gen5/Gen6 slots using the CXL.mem transaction protocol. This bypasses traditional motherboard DIMM slot count limits, enabling servers to expand memory capacity into tens of terabytes. The onboard CXL controller decodes CXL FLITs, translates host physical addresses into DRAM row/column commands with deterministic sub-hundred-nanosecond latency, and supports CXL 2.0 multi-host fabric switching to allocate DRAM capacity dynamically to VMs based on workload demands.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-6',
    companyId: 'samsung',
    category: 'Mobile GPU & Ray Tracing',
    question: 'In Samsung Xclipse mobile GPUs (developed with AMD RDNA architecture), how do hardware Ray Accelerators accelerate Bounding Volume Hierarchy (BVH) traversal and ray-triangle intersection testing on mobile thermal budgets?',
    keyPoints: [
      'Dedicated Ray Acceleration Units (RAUs) embedded within each Compute Unit (CU) offload compute-heavy BVH tree traversal from shader ALUs',
      'Fixed-function Ray-Box and Ray-Triangle intersection testing pipelines computing hit distances in single-cycle pipelined math',
      'Hardware memory compression and BVH node caching to reduce power-expensive external LPDDR5X DRAM traffic',
      'Variable Rate Shading (VRS) and temporal upscaling coordination to balance ray counts with thermal throttling limits',
      'Hardware ray sorting and wave compaction to prevent thread divergence in SIMD execution units'
    ],
    sampleAnswer: 'Samsung Xclipse GPUs incorporate hardware Ray Accelerators inside each Compute Unit. When a shader program casts a shadow or reflection ray, the Ray Accelerator takes over the recursive BVH tree traversal, evaluating ray-box and ray-triangle intersection formulas with fixed-function DSP pipelines. By offloading this from the general-purpose SIMD ALUs and caching compressed BVH nodes on-chip, the GPU achieves real-time ray-traced shadows and reflections at mobile power envelopes under 5 Watts.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-7',
    companyId: 'samsung',
    category: 'Image Sensor & Mixed-Signal',
    question: 'Explain the circuit operation of Column-Parallel Single-Slope Analog-to-Digital Converters (SS-ADCs) and Correlated Double Sampling (CDS) in Samsung ISOCELL 200MP image sensors.',
    keyPoints: [
      'Correlated Double Sampling (CDS) samples pixel reset voltage (V_reset) and exposed signal voltage (V_sig) to cancel kTC reset noise and threshold variations',
      'Global precision voltage ramp generator broadcasts a high-linearity ramp signal to thousands of column comparators simultaneously',
      'Each column comparator trips when the ramp crosses the pixel analog voltage, latching a running Gray-coded master counter value',
      'Digital CDS performs (V_sig_count - V_reset_count) in on-chip column digital logic to achieve 12-bit/14-bit resolution',
      'Deep Trench Isolation (DTI) physically insulates neighboring silicon photodiodes to prevent optical and electrical cross-talk'
    ],
    sampleAnswer: 'Samsung ISOCELL sensors convert analog photo-charges into digital values using thousands of column-parallel single-slope ADCs. The circuit executes Correlated Double Sampling by first reading the reset level (V_reset) and then the photo-generated signal level (V_sig). A global linear voltage ramp is compared against both levels. When the comparator fires, it latches a high-speed counter. Subtracting the two digital values eliminates transistor threshold mismatch, kTC thermal noise, and fixed-pattern noise (FPN), delivering high dynamic range and pristine low-light SNR.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-8',
    companyId: 'samsung',
    category: 'RTL & Asynchronous CDC',
    question: 'How do you design a robust Asynchronous Clock Domain Crossing (CDC) FIFO in SystemVerilog for high-throughput streaming between an Exynos NPU running at 1.8 GHz and a System NoC running at 800 MHz?',
    keyPoints: [
      'Dual-Port SRAM memory array addressed by binary read and write pointers',
      'Gray code pointer conversion to ensure only a single bit toggles per increment, eliminating multi-bit skew hazards across clock domains',
      'Multi-stage (2-FF / 3-FF) MTBF-hardened synchronizers to transfer Gray pointers safely into the destination clock domain',
      'Full condition generated in the write clock domain: write Gray pointer compared against 2-stage synchronized read Gray pointer with inverted MSBs',
      'Empty condition generated in the read clock domain: read Gray pointer compared directly against 2-stage synchronized write Gray pointer',
      'Static CDC verification using SpyGlass / Questa CDC to ensure no un-synchronized paths or reconvergence issues'
    ],
    sampleAnswer: 'An asynchronous CDC FIFO uses a dual-port SRAM with independent write and read clock ports. Binary write and read pointers are incremented in their respective clock domains and converted to Gray code before crossing domains. In the destination domains, 2-stage or 3-stage flip-flop synchronizers register the Gray pointers to prevent metastability. The FIFO Full flag is evaluated in the write domain when the next write pointer matches the synchronized read pointer with the two most significant bits inverted. The Empty flag is evaluated in the read domain when the read pointer exactly equals the synchronized write pointer.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-9',
    companyId: 'samsung',
    category: 'Low Power Design & UPF',
    question: 'In Samsung advanced mobile SoCs, how are Power Management ICs (PMIC), Unified Power Format (UPF 3.0), and retention register cells combined to implement State Retention Power Gating (SRPG)?',
    keyPoints: [
      'UPF defines power domains, supply nets, power switches, isolation strategies, and level-shifter rules',
      'Retention Flip-Flops (RFF) feature a primary master-slave latch powered by a switchable VDD rail and a shadow retention latch powered by an always-on auxiliary rail (VDD_AON)',
      'Power Gating Controller executes a strict handshake sequence: assert clamp/isolation -> assert save signal -> disable MTCMOS power switch -> enter sleep',
      'Wakeup sequence: enable MTCMOS switch -> wait for PMIC rail stabilization (power good) -> assert restore signal -> de-assert isolation -> resume clocking',
      'Prevents crowbar current on domain boundaries using clamp-to-0 or clamp-to-1 isolation cells'
    ],
    sampleAnswer: 'State Retention Power Gating (SRPG) allows power domains (like idle NPU or GPU cores) to completely power down their main VDD rail to zero volts while retaining register states in micro-sized shadow latches fed by an always-on VDD_AON rail. UPF 3.0 specifies the isolation and save/restore timing protocols. During power-down, isolation cells clamp boundary signals to known states to prevent floating inputs from causing crowbar currents in active domains. Upon wakeup, the PMIC ramps the rail, the retention registers restore the pipeline state in 1 clock cycle, and execution resumes immediately.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-10',
    companyId: 'samsung',
    category: 'Static Timing Analysis (STA)',
    question: 'How does Parametric On-Chip Variation (POCV / LVF) with higher-order moments (skewness/mean shift) improve timing signoff accuracy over traditional flat OCV derating in Samsung 3nm GAA designs?',
    keyPoints: [
      'Traditional OCV applies a pessimistic uniform percentage derate (e.g. +/-10%) across all cells regardless of path depth',
      'POCV / LVF (Library Variation Format) models each gate delay as a statistical normal distribution with mean (μ) and standard deviation (σ)',
      'Statistical addition: random variations cancel out over deep logic paths proportional to 1/sqrt(N), recovering excessive timing margin',
      'Higher-order moments (skewness, mean shift) capture non-Gaussian asymmetric tail distributions caused by extreme low-voltage (V_dd < 0.7V) operating points',
      'Clock Path Pessimism Removal (CPPR / CRPR) eliminates artificial variation on shared portions of launching and capturing clock trees'
    ],
    sampleAnswer: 'In 3nm GAA nodes operating at ultra-low voltages, transistor threshold variation (Vt variation) is highly non-linear, rendering traditional flat OCV derates unrealistically pessimistic. POCV with LVF models cell delays statistically as nominal mean plus Gaussian and non-Gaussian standard deviations. Because random variations along a path partially cancel each other out statistically, POCV significantly reduces false timing violations. Including higher-order skewness in PrimeTime STA ensures accurate hold and setup signoff at the extreme tail of the distribution (3-sigma/4-sigma) without over-designing silicon area.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-11',
    companyId: 'samsung',
    category: 'Memory BIST & Repair (DFT)',
    question: 'How do Built-In Self-Test (MBIST) and Built-In Self-Repair (BISR) circuits identify, isolate, and remap defective SRAM/HBM memory rows and columns using on-chip eFuse arrays?',
    keyPoints: [
      'MBIST controller executes Marching algorithms (March C-, March SS, Mats+) to detect stuck-at faults, transition faults, and coupling faults across memory arrays',
      'Built-In Self-Repair (BISR) logic logs failing row/column addresses into on-chip repair allocation registers',
      '2D Redundancy Analysis (RA) algorithm computes the optimal combination of spare rows and spare columns to repair detected defects with minimum redundant resources',
      'Automated Test Equipment (ATE) blows laser or electrical eFuses during wafer sort to permanently burn repair signatures into non-volatile registers',
      'At power-up, the eFuse controller automatically shifts repair vectors into SRAM address decoders to redirect accesses to spare memory elements'
    ],
    sampleAnswer: 'Embedded SRAMs and HBM stacks comprise massive transistor counts, making manufacturing defects statistically inevitable. The MBIST engine runs algorithmic March tests to detect bitcell failures and passes fault coordinates to the BISR allocation engine. The BISR runs a 2D redundancy solver to map failing addresses to available spare rows and columns. During manufacturing test, these repair maps are permanently programmed into on-chip eFuses. During every power-on reset, hardware decoders read the eFuses and dynamically remap defective memory addresses to spare rows with zero performance penalty.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-12',
    companyId: 'samsung',
    category: 'LPDDR5X / LPDDR6 Memory PHY',
    question: 'What high-speed signaling and equalization techniques are implemented in Samsung LPDDR5X (up to 9.6 Gbps) and LPDDR6 PHYs to maintain signal integrity over lossy smartphone PCB traces?',
    keyPoints: [
      'Decision Feedback Equalization (DFE) with multi-tap feedback to eliminate Inter-Symbol Interference (ISI) and post-cursor reflections',
      'Continuous-Time Linear Equalization (CTLE) on the receiver front-end to boost high-frequency channel attenuation',
      'Write Leveling and Read Centering algorithms to compensate for trace length skews between DQS strobe and DQ data lines',
      'On-Die Termination (ODT) impedance calibration (ZQ calibration) against high-precision external reference resistors',
      'Dynamic Voltage and Frequency Scaling (DVFS) with fast clock phase recovery and low-power standby modes (Deep Sleep, Self Refresh)'
    ],
    sampleAnswer: 'Operating at 9.6 Gbps over compact smartphone PCBs introduces severe high-frequency attenuation, crosstalk, and impedance discontinuities. Samsung LPDDR5X PHYs utilize receiver Continuous-Time Linear Equalization (CTLE) to restore high-frequency signal edges and multi-tap Decision Feedback Equalization (DFE) to cancel post-cursor ISI without amplifying noise. During bootup training, hardware engines perform automated DQS-DQ write leveling, VREF voltage centering, and ZQ impedance calibration to widen the data eye opening across PVT corners.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-13',
    companyId: 'samsung',
    category: 'NPU & AI Hardware Acceleration',
    question: 'How does the tensor processing unit inside Samsung Exynos NPU accelerate 4-bit and 8-bit quantized matrix multiplications (GEMM) while managing on-chip KV-cache memory bandwidth for on-device LLMs?',
    keyPoints: [
      '2D Systolic Matrix Multiply arrays streaming activations horizontally and weights vertically for maximum data reuse',
      'Mixed-precision support: INT4/INT8 integer arithmetic for weights/activations with 32-bit accumulation to prevent overflow',
      'Hardware weight decompression and zero-sparsity skipping to bypass compute cycles on sparse matrices',
      'Dedicated on-chip SRAM Tightly-Coupled Memory (TCM) storing Key-Value (KV) cache tokens to prevent repetitive LPDDR reads',
      'Paged attention hardware DMA addressing to allocate non-contiguous memory chunks for dynamic context length expansion'
    ],
    sampleAnswer: 'Samsung Exynos NPU features a high-density 2D systolic array optimized for INT8 and INT4 quantized tensor operations. It minimizes external DRAM access by reusing weights across multiple activations inside local register files. For large language model (LLM) inference, the NPU integrates hardware PagedAttention and a dedicated on-chip SRAM KV-cache buffer, preventing multi-gigabyte LPDDR5X memory bandwidth saturation during token-by-token autoregressive generation, which delivers 3x higher token generation speed at minimal battery draw.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-14',
    companyId: 'samsung',
    category: 'Physical Design & Power Integrity',
    question: 'How do Physical Design engineers at Samsung resolve dynamic di/dt IR-drop violations and power grid electro-migration (EM) in high-frequency 3nm clock tree synthesis?',
    keyPoints: [
      'Dense multi-layer Power Delivery Network (PDN) mesh utilizing thick upper metal layers (M10-M13) for low-resistance current distribution',
      'Strategic insertion of On-Chip Decoupling Capacitors (decap cells) close to high-switching clock buffers and macro pins to supply transient charge',
      'Concurrent Clock and Data (CCD) optimization and clock skew scheduling to stagger flip-flop switching moments and flatten peak current surges',
      'Electromigration (EM) rule compliance: sizing power straps and vias to meet maximum DC and RMS current density limits',
      'Vector-based and vectorless dynamic rail analysis in RedHawk / Voltus across high-activity operational vectors'
    ],
    sampleAnswer: 'At 3nm GAA, simultaneous switching of millions of flip-flops produces severe transient current spikes (di/dt), causing localized voltage drops (IR-drop) that slow down logic gates and cause hold/setup violations. Samsung physical design engineers construct a robust low-resistance power grid mesh and place custom decap cells directly adjacent to clock buffers to act as local charge reservoirs. Furthermore, Clock Skew Scheduling (useful skew) is used to intentionally stagger the arrival of clock edges across functional blocks, spreading current demand over time and drastically reducing peak dynamic IR-drop.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-15',
    companyId: 'samsung',
    category: 'SystemVerilog & UVM Verification',
    question: 'How do you architect a reusable UVM Testbench Environment to verify an AXI5-Lite register slice with out-of-order response capability and protocol assertion checking?',
    keyPoints: [
      'UVM Agent structure: AXI5 Driver, Monitor, Sequencer, and Configuration Object configured in active/passive modes',
      'UVM Sequence Item modeling all AXI5 transactions: address, burst length, burst size, ID tags, and response data',
      'SystemVerilog Assertions (SVA) checking protocol rules: valid-ready handshakes, stable signals when valid=1, and burst address boundary rules',
      'UVM Scoreboard utilizing associative arrays indexed by transaction ID (RID/BID) to verify out-of-order read/write responses',
      'Functional coverage models tracking all burst types, cross-coverage of response latency, and error injection scenarios'
    ],
    sampleAnswer: 'A reusable UVM testbench encapsulates an AXI5 UVM Agent containing an active driver, sequencer, and monitor. The transaction item defines address, burst properties, and transaction IDs. Because AXI5 allows out-of-order responses across distinct IDs, the UVM Scoreboard maintains associative queues keyed by ID tags. When a response is collected by the monitor, the scoreboard pops the matching request from the queue, comparing data integrity and response status. SystemVerilog Assertions (SVA) run concurrently in the interface to flag protocol violations immediately (e.g. VALID dropping before READY asserts).',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-16',
    companyId: 'samsung',
    category: 'Digital Logic & Arithmetic',
    question: 'Design a 64-bit High-Speed Carry-Lookahead Adder (CLA) in Verilog/SystemVerilog using 4-bit CLA blocks. Explain why hierarchical CLA is preferred over Ripple Carry Adders in Exynos ALU pipelines.',
    keyPoints: [
      'Bit-level generate (g_i = a_i & b_i) and propagate (p_i = a_i ^ b_i) signals computed in parallel',
      '4-bit CLA block computes block generate (G) and block propagate (P) with carry lookahead logic: c_i+1 = g_i | (p_i & c_i)',
      'Hierarchical Lookahead Carry Unit (LCU) combines block P and G to compute carries for four 16-bit groups in logarithmic time O(log N)',
      'Ripple Carry Adder delay scales linearly O(N), requiring 64 gate delays, violating clock cycle targets at 3 GHz',
      'Hierarchical CLA reduces worst-case path delay to approximately 6-8 gate delays, meeting high-frequency ALU timing'
    ],
    sampleAnswer: 'In a 64-bit Ripple Carry Adder, carry propagation creates a critical path of 64 full-adder stages, which is unacceptable for 3GHz+ Exynos ALUs. Hierarchical Carry-Lookahead Adders calculate Generate (G) and Propagate (P) terms for each bit simultaneously. Group Lookahead Units then compute carries across 4-bit and 16-bit blocks in parallel using tree logic. This reduces the theoretical delay from O(N) linear time down to O(log N) logarithmic time, achieving full 64-bit addition in just a few gate delays.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-17',
    companyId: 'samsung',
    category: 'Memory & DDR Controller',
    question: 'How does an advanced DRAM Memory Controller in Samsung SoCs optimize command scheduling using First-Ready First-Come-First-Served (FR-FCFS) and Bank-Level Parallelism (BLP)?',
    keyPoints: [
      'FR-FCFS scheduler prioritizes requests that hit currently open rows (Page Hit) over older requests requiring row precharge (Page Conflict)',
      'Bank-Level Parallelism (BLP) interleaves read/write commands across independent DRAM banks to hide tRP (precharge) and tRCD (activate) latencies',
      'Read-to-Write and Write-to-Read turnaround optimization using command batching to minimize DDR bus dead cycles (tWTR / tRTW)',
      'Command queues with QoS priority classes (real-time display/camera vs non-real-time background GPU/CPU requests)',
      'Dynamic refresh management (per-bank refresh vs all-bank refresh) to maintain predictable memory response times'
    ],
    sampleAnswer: 'A high-performance memory controller maintains deep transaction queues and schedules DRAM commands to maximize data bus efficiency. Using FR-FCFS scheduling, the controller prioritizes commands that target already-open rows (Row Buffer Hits), avoiding costly row precharge (tRP) and activation (tRCD) delays. By interleaving accesses across different memory banks (BLP), the controller keeps the data bus saturated at near 90%+ utilization while servicing latency-sensitive requests from display processors via high-priority QoS channels.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-18',
    companyId: 'samsung',
    category: 'RTL & State Machines',
    question: 'How do you design a Glitch-Free Clock MUX (Glitch-Free Clock Switch) in Verilog to switch dynamically between a High-Speed PLL Clock (1.2 GHz) and a Low-Power Oscillator Clock (24 MHz)?',
    keyPoints: [
      'Direct MUXing of asynchronous clocks causes narrow runt pulses (glitches) that violate setup/hold times of downstream flip-flops',
      'Glitch-free architecture uses two cross-coupled negative-edge D-Flip-Flop synchronizer chains to safely enable/disable clocks',
      'Clock A enable is de-asserted on Clock A falling edge and synchronized before Clock B enable is permitted to assert',
      'Negative-edge flip-flops ensure the clock is gated when it is low, guaranteeing no partial clock pulses or mid-cycle spikes',
      'Handshake feedback guarantees that both clock gating cells can never be enabled simultaneously under any timing corner'
    ],
    sampleAnswer: 'Switching asynchronously between two clocks using a plain multiplexer produces narrow runt pulses that destroy register state. A glitch-free clock switch uses two cross-coupled synchronizer paths clocked on the falling edge of each respective clock. When the select signal flips, the active clock is first disabled during its low phase. A feedback signal informs the secondary path that the first clock is safely shut down before the second clock is enabled on its own falling edge. This guarantees smooth, glitch-free transitions without requiring an external reset.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-19',
    companyId: 'samsung',
    category: 'DFT & Scan Compression',
    question: 'Explain the principles of On-Chip Scan Compression (e.g. Synopsys TestMAX / Siemens EDT) and how it achieves 50x-100x test data volume and test time reduction during Samsung chip manufacturing.',
    keyPoints: [
      'Decompressor logic (PRPG / Linear Feedback Network) on chip expands a small number of ATE input channels into thousands of internal short scan chains',
      'Compressor logic (MISR / XOR tree network) on chip compresses thousands of internal scan outputs down to a few ATE output pins',
      'X-Masking (Unknown state masking) logic prevents unpredictable simulation unknown values (X states) from corrupting the compressor signature',
      'Drastically reduces the number of scan clock shift cycles per test pattern by shortening chain lengths (e.g. from 10,000 FFs down to 100 FFs per chain)',
      'Substantially lowers ATE test cost and test floor time while maintaining >99.5% stuck-at and transition fault coverage'
    ],
    sampleAnswer: 'Traditional scan testing connects all internal flip-flops into long serial scan chains, requiring thousands of clock cycles per pattern and overloading ATE pin channels. Scan compression integrates an on-chip decompressor (XOR/PRPG network) that expands a few ATE tester channels into hundreds of short internal chains, and an on-chip compressor (XOR tree/MISR) that compresses responses back to a few tester pins. This shortens the scan shift length by up to 100x, slashing manufacturing test time and tester memory costs by over 90% without compromising fault coverage.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-20',
    companyId: 'samsung',
    category: 'Semiconductor Physics',
    question: 'What physical mechanisms cause Negative Bias Temperature Instability (NBTI) in pMOS transistors and Hot Carrier Injection (HCI) in nMOS transistors in deep sub-micron nodes, and how do designers guard-band against them?',
    keyPoints: [
      'NBTI occurs in pMOS under negative gate-to-source bias and high temperature, breaking Si-H bonds at the Si/SiO2 dielectric interface and creating donor-like interface traps',
      'NBTI causes pMOS threshold voltage (V_th) to drift upwards over time, reducing drive current (I_on) and slowing down logic gates',
      'HCI occurs in nMOS when high lateral electric fields near the drain accelerate electrons ("hot electrons") into the gate dielectric, trapping charge',
      'Aging analysis tools (e.g. Synopsys PrimeTime Aging / Cadence RelXpert) simulate 5-year and 10-year circuit degradation under mission profiles',
      'Design countermeasures include timing guard-bands, adaptive voltage scaling (AVS), conservative transistor sizing, and dynamic recovery periods'
    ],
    sampleAnswer: 'NBTI in pMOS is caused by high negative gate voltage and heat breaking silicon-hydrogen bonds at the gate-dielectric interface, resulting in trapped charges that shift the threshold voltage higher and slow down transition speeds over time. HCI in nMOS occurs when electrons accelerated by intense lateral drain electric fields acquire enough kinetic energy to inject into the gate oxide. Designers mitigate aging effects by running 10-year reliability simulations, applying timing guard-bands (extra setup slack on critical paths), and utilizing adaptive voltage scaling to increase supply voltage gradually as the chip ages.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-21',
    companyId: 'samsung',
    category: 'RTL & Verilog Design',
    question: 'Write a synthesizable, parameterized Round-Robin Arbiter in Verilog with request mask registers to guarantee fairness across multiple high-priority master IPs.',
    keyPoints: [
      'Dual-priority grant logic: masking incoming requests with a rotating priority mask',
      'Unmasked grant computed for lower-priority wrap-around if no masked requests are active',
      'Grant output is one-hot encoded and updates the mask register on the next clock cycle',
      'Avoids starvation of lower-index masters when high-index masters make continuous requests',
      'Single-cycle combinational grant calculation with registered state update'
    ],
    sampleAnswer: 'A synthesizable round-robin arbiter utilizes two priority arbiters in parallel. The incoming request vector is ANDed with a mask register representing the current priority pointer. If any masked request is active, the masked arbiter assigns the grant; otherwise, the unmasked arbiter grants the lowest active unmasked request (wrap-around). Once a master receives a grant and asserts handshake, the priority mask updates to shift priority to the adjacent master, ensuring absolute fairness and zero starvation across all bus agents.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-22',
    companyId: 'samsung',
    category: 'GAAFET & Standard Cells',
    question: 'How do standard cell library designers at Samsung optimize multi-height standard cell architectures (e.g. Single-Height vs Dual-Height cells) on 3nm GAA processes?',
    keyPoints: [
      'Single-height cells offer ultra-high density for non-critical control logic, utilizing fewer nanosheet tracks',
      'Dual-height cells provide space for wider nanosheets and multi-finger transistors, delivering maximum drive current for timing-critical ALUs and clock trees',
      'Continuous transistor routing (Diffusion Break / CPB - Continuous Poly on Block) to prevent process stress and maintain layout regularity',
      'Power and ground rail sharing between adjacent cell rows to minimize parasitic resistance and die area overhead',
      'Design-Technology Co-Optimization (DTCO) ensuring routability and pin accessibility under sub-30nm contacted poly pitch (CPP)'
    ],
    sampleAnswer: 'Samsung 3nm GAA libraries deploy a mix of single-height and dual-height standard cells. Single-height cells use narrow nanosheets to maximize transistor packing density in power-sensitive, non-critical control logic. Dual-height cells accommodate wider nanosheets with higher drive strength and multiple parallel fingers, making them ideal for high-speed arithmetic units and clock tree buffers. Advanced placement engines interleave these cell types across the layout, balancing timing closure with ultra-dense silicon utilization.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-23',
    companyId: 'samsung',
    category: 'Memory & NAND Controller',
    question: 'Explain how Low-Density Parity-Check (LDPC) Soft-Decision Decoding and Adaptive Voltage Threshold Tracking (Vth tracking) prevent raw bit errors in Samsung QLC/TLC V-NAND SSDs.',
    keyPoints: [
      'QLC (Quad-Level Cell) stores 4 bits per cell across 16 distinct threshold voltage (Vth) states, resulting in ultra-narrow noise margins (<100mV)',
      'Cell aging, read disturb, and temperature variations shift Vth distribution curves over time, causing raw bit error rates (RBER) to rise',
      'Hard-Decision LDPC reads a single voltage level per state with low latency; when hard-decision fails, Soft-Decision LDPC reads multiple intermediate voltage slices',
      'Soft-Decision decoding computes Log-Likelihood Ratios (LLR) representing the probabilistic confidence of each bit, increasing error correction capability by 3x',
      'Vth tracking dynamically measures valley points between Vth peaks to calibrate read reference voltages before reading aged blocks'
    ],
    sampleAnswer: 'In QLC V-NAND, 16 tightly packed threshold voltage states leave minimal margin for error. As the flash memory ages from program/erase cycles, charge leakage widens the Vth distributions. The Samsung SSD controller uses adaptive Vth tracking to periodically locate the exact valley point between adjacent Vth distributions. If standard hard-decision LDPC fails, the controller performs multi-level soft reads to calculate probabilistic Log-Likelihood Ratios (LLR). Soft-decision LDPC decodes these confidence values, recovering corrupted data even at extremely high raw error rates.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-24',
    companyId: 'samsung',
    category: 'Physical Design & Clock Distribution',
    question: 'Compare H-Tree, Clock Mesh, and Multi-Level Hybrid Clock Tree architectures in high-speed Samsung processor cores in terms of skew, jitter, power, and routability.',
    keyPoints: [
      'H-Tree: Symmetric routing ensures identical path lengths and zero structural skew, but suffers from high wire congestion and blockage',
      'Clock Mesh: Dense grid of shorted clock wires driven by pre-mesh buffers; virtually eliminates local skew and variation-induced jitter, but consumes massive dynamic power',
      'Multi-Level Hybrid CTS: H-Tree or trunk network distributes clock globally to regional mesh tiles or local tree roots, combining low skew with reasonable power',
      'Useful Skew scheduling: Intentionally delaying clock arrival to non-critical registers to relieve setup time pressure on critical data paths',
      'Cross-talk shielding and dual-track pitch spacing to minimize clock line coupling capacitance'
    ],
    sampleAnswer: 'In multi-gigahertz processor cores, traditional clock trees suffer from high OCV-induced clock skew. A full Clock Mesh drives a grid of interconnected wires, virtually eliminating skew across PVT corners at the expense of massive dynamic power dissipation. Samsung high-performance CPU/GPU cores adopt a Hybrid Clock Architecture: a balanced global H-Tree delivers the clock to regional mesh sectors, which then branch into local power-gated clock trees. This achieves sub-15ps clock skew across the die while keeping clock network power within budget.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-25',
    companyId: 'samsung',
    category: 'Static Timing Analysis (STA)',
    question: 'How do you analyze and resolve a Hold Time Violation on a multi-cycle path (MCP) and a cross-clock domain path in PrimeTime STA?',
    keyPoints: [
      'Multi-Cycle Path setup multiplier (set_multicycle_path -setup N) shifts the setup capture edge by N clock cycles',
      'By default, STA tools check hold time against the clock edge immediately preceding the setup edge (N-1), which is overly restrictive',
      'Hold multi-cycle constraint (set_multicycle_path -hold N-1) moves the hold check back to the launching clock edge (cycle 0)',
      'Cross-clock domain paths between asynchronous clocks must be declared false paths (set_false_path) or assigned set_clock_groups -asynchronous after verifying proper CDC synchronizers',
      'Physical fix: inserting delay buffers (non-inverting buffers with high threshold voltage) in the data path close to the capture flip-flop without impacting setup slack'
    ],
    sampleAnswer: 'When declaring a multi-cycle path of N cycles for setup, the tool automatically shifts the default hold check to cycle N-1. Designers must explicitly specify "set_multicycle_path -hold N-1 -from ... -to ..." to reposition the hold verification back to cycle 0 (same-cycle launch and capture). For real physical hold violations on synchronous paths, designers insert delay buffers on the data path near the capturing flip-flop. High-threshold voltage (HVT) delay cells are preferred because they provide substantial delay with minimal dynamic and leakage power impact without degrading setup slack.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-26',
    companyId: 'samsung',
    category: 'RTL & Verilog Design',
    question: 'Explain how to design an efficient Priority Encoder in synthesizable Verilog using binary trees versus cascaded ternary operators, analyzing area and timing trade-offs.',
    keyPoints: [
      'Cascaded ternary operators (assign out = req[3] ? 2\'b11 : req[2] ? 2\'b10 : ...) generate linear priority chains with O(N) delay',
      'Binary Tree Priority Encoder partitions the input vector recursively into left and right halves, computing valid bits and index codes in parallel with O(log N) delay',
      'Binary tree reduces worst-case gate levels for wide inputs (e.g. 64-bit or 128-bit interrupt/request vectors)',
      'Synthesis tools can optimize tree structures using parallel prefix adders and carry lookahead cells',
      'One-hot to binary conversion utilizing parallel XOR/OR reduction trees'
    ],
    sampleAnswer: 'Cascading conditional operators in Verilog generates a linear priority chain where the lowest-priority bits endure long serial multiplexer delays (O(N) gate depth), which fails timing for wide 64-bit request vectors. A Tree-Structured Priority Encoder recursively divides the 64-bit vector into 2-bit and 4-bit groups, computing local "valid" flags and sub-indexes in parallel. Combining sub-index results in a balanced logarithmic tree reduces the critical path to O(log2 N) gate levels, ensuring single-cycle arbitration even at high frequencies.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-27',
    companyId: 'samsung',
    category: 'Semiconductor Fabrication & EUV',
    question: 'How does High-NA EUV Lithography (0.55 NA) with Anamorphic Magnification improve critical dimension (CD) resolution in Samsung 2nm and sub-2nm foundry nodes?',
    keyPoints: [
      'Standard 0.33 NA EUV lithography reaches single-exposure resolution limits around 13.5nm wavelength, requiring costly multi-patterning',
      'High-NA EUV increases the numerical aperture from 0.33 to 0.55, enabling printing of tighter pitches down to 8nm in a single exposure',
      'Anamorphic magnification applies 4x magnification in X-direction and 8x magnification in Y-direction to avoid reducing photomask field size by half',
      'Reduces edge placement error (EPE), improves pattern overlay accuracy, and lowers mask count and defect density',
      'Allows tighter contacted poly pitch (CPP) and metal pitch (MP) on sub-2nm standard cells'
    ],
    sampleAnswer: 'High-NA EUV lithography increases the lens numerical aperture to 0.55, significantly enhancing optical resolution (Rayleigh criterion: CD = k1 * lambda / NA). This allows sub-2nm features to be patterned in a single exposure without relying on complex, defect-prone multi-patterning (SADP/SAQP). Because higher NA increases angle of incidence on the reticle, High-NA EUV introduces anamorphic lenses that magnify 4x in the horizontal axis and 8x in the vertical axis, preserving full reticle field exposure while delivering sub-20nm metal pitch scaling.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-28',
    companyId: 'samsung',
    category: 'Image Sensor & 3D Stacking',
    question: 'Describe Samsung 3-Stack ISOCELL Image Sensor architecture (Photodiode + Logic + Embedded DRAM) and how wafer-to-wafer direct hybrid bonding enables 960fps super slow-motion recording.',
    keyPoints: [
      'Top wafer contains Backside-Illuminated (BSI) CMOS photodiodes with deep trench isolation (DTI)',
      'Middle wafer integrates high-speed multi-megabyte embedded DRAM buffer to temporarily store burst frame data',
      'Bottom wafer contains image signal processing (ISP) logic and high-speed MIPI/C-PHY serializers',
      'Direct Copper-to-Copper (Cu-Cu) hybrid bonding connects billions of microscopic vertical interconnects between wafers without microbumps',
      'Enables massive parallel readout bandwidth (>100 Gbps) from pixel array directly to embedded DRAM, bypassing external memory bottlenecks'
    ],
    sampleAnswer: 'Samsung 3-stack ISOCELL sensors vertically bond three separate wafers: the top pixel photodiode array, an intermediate high-speed embedded DRAM frame buffer, and a bottom ISP logic processor. Direct Cu-Cu hybrid bonding creates thousands of microscopic interconnects directly beneath pixel columns. When recording super-slow-motion video at 960 fps, the sensor dumps full-resolution raw frames into the on-chip DRAM buffer at ultra-high internal bandwidth, which is then processed by the ISP and streamed over MIPI to the main SoC at standard video rates.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-29',
    companyId: 'samsung',
    category: 'RTL & Low Power Gating',
    question: 'How do Integrated Clock Gating (ICG) cells work at the transistor level, and why must the enable latch be triggered on the falling edge of the clock?',
    keyPoints: [
      'ICG cell consists of an active-low transparent latch followed by an AND gate (or active-high latch with OR gate for active-low clocking)',
      'The transparent latch samples the enable signal when CLK is low and holds it stable when CLK transitions high',
      'Prevents glitches on the enable signal during the high phase of the clock from corrupting the gated clock output',
      'Falling-edge latching ensures that the AND gate inputs are completely stable before the clock rising edge arrives',
      'Synthesis tools (Design Compiler / Genus) automatically infer ICG cells from register load-enable conditions'
    ],
    sampleAnswer: 'An Integrated Clock Gating (ICG) cell consists of a level-sensitive latch and an AND gate. If a standard AND gate were used without a latch, any glitch or transition on the enable line while the clock is HIGH would immediately pass through, creating a catastrophic runt clock pulse. The latch is made transparent while the clock is LOW, capturing the enable state and locking it firmly before the clock rises to HIGH. This guarantees that the gated clock signal remains clean and glitch-free across all operating conditions.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-30',
    companyId: 'samsung',
    category: 'SystemVerilog & Verification',
    question: 'What is the difference between Functional Coverage, Line Coverage, Branch Coverage, and Toggle Coverage in SystemVerilog verification, and which metric determines tape-out readiness at Samsung?',
    keyPoints: [
      'Line/Statement coverage tracks whether each line of RTL code was executed during simulation',
      'Branch/Condition coverage tracks whether all true/false decision branches in if-else and case statements were evaluated',
      'Toggle coverage checks whether every design node/wire transitioned from 0-to-1 and 1-to-0',
      'Functional coverage uses user-defined covergroups and coverpoints to verify that specific protocol scenarios, corner cases, and states occurred',
      'Tape-out signoff requires 100% functional coverage along with >98% code coverage (with documented and reviewed exclusions)'
    ],
    sampleAnswer: 'Code coverage (line, branch, toggle, state machine) is an automated structural metric that tells you what proportion of the written RTL code was exercised, but it cannot tell you if the design implements the specification correctly. Functional coverage defines explicit verification goals (e.g. crossing all AXI burst sizes with error responses). A design could achieve 100% line coverage while completely missing a critical protocol corner case. At Samsung, tape-out signoff requires 100% functional coverage closure combined with high code coverage and formal proofs.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-31',
    companyId: 'samsung',
    category: 'Physical Design & Crosstalk',
    question: 'How do physical design engineers model and prevent Crosstalk Glitches and Crosstalk Delay Variations on high-density long parallel interconnects at 3nm?',
    keyPoints: [
      'Coupling capacitance (C_c) between adjacent wires exceeds ground capacitance (C_g) at advanced metal pitches',
      'In-phase switching (victim and aggressor switch in same direction) reduces effective capacitance (Miller effect) and speeds up signals, causing hold violations',
      'Out-of-phase switching (victim and aggressor switch in opposite directions) increases effective capacitance, slowing down signals and causing setup violations',
      'Static victim: aggressor switching injects a voltage glitch that can be falsely captured as a clock pulse or data glitch if amplitude exceeds noise margin',
      'Prevention: wire widening, wire spacing (2W/2S rules), non-default routing rules (NDR), buffer insertion to break wire lengths, and VSS shielding'
    ],
    sampleAnswer: 'At 3nm, tall and narrow metal wires create significant sidewall coupling capacitance (C_c) between adjacent traces. When adjacent aggressor wires switch in the opposite direction of a victim wire, Miller coupling doubles the dynamic load capacitance, introducing severe crosstalk delay and setup violations. When a victim is quiet, an aggressor can induce a voltage spike (crosstalk glitch). Engineers prevent this by enforcing Non-Default Rules (NDR) with double spacing on sensitive nets, inserting VSS shielding wires beside clock traces, and adding repeaters to shorten wire lengths.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-32',
    companyId: 'samsung',
    category: 'SoC & Interconnect',
    question: 'Explain how Quality of Service (QoS) arbitration and Virtual Channels (VC) prevent Head-of-Line (HoL) blocking in Samsung Exynos Network-on-Chip (NoC) interconnects.',
    keyPoints: [
      'Virtual Channels (VCs) multiplex multiple independent logical transaction queues across a single shared physical link',
      'Head-of-Line (HoL) blocking occurs when a stalled transaction at the front of a single FIFO prevents subsequent independent packets from proceeding',
      'Dedicated VCs allow high-priority latency-sensitive packets (Display Engine, Camera ISP) to bypass lower-priority bulk transfers (GPU memory dump)',
      'Credit-based flow control tracks buffer availability per virtual channel before transmitting flits across network routers',
      'Bandwidth limiters and weighted deficit round-robin (WDRR) arbitration enforce minimum bandwidth SLAs per master IP'
    ],
    sampleAnswer: 'In complex smartphone SoCs, high-bandwidth bursty masters (like the GPU or DMA engines) can easily saturate interconnect buffers. In a single-FIFO system, a stalled GPU packet at the head of the queue blocks urgent display refresh packets (Head-of-Line blocking), causing visual screen tearing. By assigning Virtual Channels (VCs) and independent credit counters, packets destined for different endpoints or with higher QoS priority use separate buffer lanes, bypassing stalled lower-priority packets and ensuring real-time latency guarantees for the display subsystem.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-33',
    companyId: 'samsung',
    category: 'RTL & Verilog Design',
    question: 'Write a synthesizable Single-Bit Clock Domain Crossing (CDC) synchronizer in SystemVerilog with an ASYNC_REG attribute. Explain why 2-FF or 3-FF synchronizers cannot be used directly for multi-bit data buses.',
    keyPoints: [
      'Single-bit synchronizer chains 2 or 3 D-Flip-Flops clocked by the destination clock domain',
      'ASYNC_REG attribute instructs synthesis and P&R tools to place synchronizer flip-flops physically adjacent, minimizing routing delay and maximizing MTBF',
      'Multi-bit data buses experience microscopic routing skew across individual bits on the PCB/silicon',
      'Different bits may be captured in different destination clock cycles, resulting in invalid intermediate data words (data corruption)',
      'Multi-bit signals must be synchronized using Gray coding, MUX-recirculation synchronizers with valid handshakes, or Asynchronous FIFOs'
    ],
    sampleAnswer: 'A single-bit CDC synchronizer places two or three flip-flops back-to-back in the destination domain, tagged with "(* ASYNC_REG = "TRUE" *)" to ensure P&R places them in adjacent silicon sites. This cannot be applied directly to a multi-bit data bus because physical wire delay skews mean different data bits arrive at slightly different times. If the destination clock samples during transition, some bits will latch old values and others new values, creating corrupt data words. Multi-bit buses must therefore use Gray-coded pointers, MUX-data handshakes, or asynchronous FIFOs.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-34',
    companyId: 'samsung',
    category: 'GAAFET & Power Delivery',
    question: 'What is Backside Power Delivery Network (BSPDN / Samsung Backside PDN) technology in 2nm foundry nodes, and how does it solve frontside routing congestion and IR-drop?',
    keyPoints: [
      'Traditional frontside PDN shares upper metal layers with signal wires, causing intense routing congestion and high power grid resistance',
      'BSPDN relocates the entire power delivery mesh (VDD and VSS rails) to the backside of the thinned silicon substrate',
      'Power is delivered directly to transistor sources/drains using Nano Through-Silicon Vias (nTSVs) or Buried Power Rails (BPR)',
      'Frees up 100% of frontside metal layers for signal routing, enabling aggressive standard cell height reduction and area scaling',
      'Reduces power grid IR-drop by up to 30% and boosts maximum clock operating frequency by 5-10%'
    ],
    sampleAnswer: 'In conventional frontside chips, signal lines and power supply grids compete for the same metal routing layers, creating wire congestion and high IR-drop through 15+ metal layers. Samsung Backside Power Delivery Network (BSPDN) thins the silicon wafer from the back and places the massive power rails directly on the bottom side of the wafer. Nano-TSVs supply power straight into the transistor source/drain terminals. This isolates power distribution from signal routing, reducing IR-drop by 30%, freeing frontside layers for signal routing, and enabling 2nm standard cells to scale even further.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-35',
    companyId: 'samsung',
    category: 'DFT & At-Speed Testing',
    question: 'How do Transition Delay Fault (TDF) testing and Launch-on-Capture (LOC) / Launch-on-Shift (LOS) clocking schemes detect high-speed timing defects during Samsung wafer screening?',
    keyPoints: [
      'Stuck-at fault testing operates at slow scan clock speeds (20-50 MHz) and cannot catch path delay defects that only fail at 2 GHz+',
      'Transition Delay Fault (TDF) test applies two consecutive clock pulses at actual operational frequency (at-speed) to test slow-to-rise and slow-to-fall transitions',
      'Launch-on-Capture (LOC / Broadside): Pattern is scanned in -> first at-speed functional clock launches transition -> second at-speed clock captures response',
      'Launch-on-Shift (LOS): Last scan shift pulse launches the transition -> immediate functional clock captures response (requires fast Scan Enable signal)',
      'On-Chip Clock Controller (OCC) generates exact at-speed double clock pulses from internal PLL during scan mode'
    ],
    sampleAnswer: 'At-speed testing detects manufacturing defects like resistive vias or thin metal lines that allow slow DC signals through but fail at high operational frequencies (e.g. 2.5 GHz). The On-Chip Clock Controller (OCC) is programmed via JTAG to generate a precise double-pulse at-speed clock burst from the on-chip PLL. In Launch-on-Capture (LOC), the first clock pulse launches the transition through combinational logic and the second pulse captures the state into destination scan flip-flops, exposing subtle transition delay faults during manufacturing test.',
    difficulty: 'Hard'
  },
  {
    id: 'samsung-36',
    companyId: 'samsung',
    category: 'Memory & DRAM Architecture',
    question: 'Explain the internal memory array organization of a modern DDR5 / LPDDR5 DRAM die: Sub-arrays, Bit-line Sense Amplifiers, Row Decoders, and the Open Bit-line vs Folded Bit-line architecture.',
    keyPoints: [
      'DRAM cell consists of 1 Transistor and 1 Capacitor (1T-1C) storing microscopic charge (~20-30 fF)',
      'Sub-array architecture divides the gigabit memory die into thousands of small cell arrays to limit word-line and bit-line RC delays',
      'Bit-line Sense Amplifiers (BLSA) utilize cross-coupled inverters to sense differential voltage drops of a few millivolts on bit-lines and restore full VDD/VSS levels',
      'Folded Bit-Line architecture routes true (BL) and complementary (BL_b) bit-lines adjacent to cancel common-mode substrate and word-line noise',
      'Destructive read process: reading a DRAM cell discharges the capacitor, requiring the sense amplifier to immediately rewrite the original charge back into the cell'
    ],
    sampleAnswer: 'A modern DRAM die is partitioned into memory banks, blocks, and sub-arrays to minimize parasitic wire delay. Each 1T-1C bitcell stores charge on a deep 3D capacitor. When a wordline asserts, the cell charge shares onto the bitline, creating a tiny voltage delta (20-50mV). Cross-coupled inverter Bit-Line Sense Amplifiers (BLSA) amplify this small differential delta into full rail-to-rail digital levels. Because reading the cell destroys its stored capacitor charge, the sense amplifier automatically rewrites the data back into the capacitor before closing the row.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-37',
    companyId: 'samsung',
    category: 'SoC & Thermal Management',
    question: 'How does Dynamic Thermal Management (DTM) in Samsung Exynos processors prevent device skin temperature overheating while maintaining sustained gaming performance?',
    keyPoints: [
      'Multiple on-chip Thermal Sensor Units (TSUs) embedded near hottest silicon spots (GPU cores, CPU Prime core, NPU matrix units)',
      'Hardware temperature interrupts trigger when silicon junction temperature exceeds programmable threshold trip points (e.g. 85°C, 95°C, 105°C)',
      'Closed-loop governor executes progressive throttling: lowering CPU/GPU max frequency bins, reducing frame rate targets, or dynamic task migration',
      'Predictive thermal modeling uses software temperature estimates and thermal dissipation formulas to throttle before physical thresholds are breached',
      'Hardware emergency shutdown circuitry automatically cuts power if catastrophic temperatures (>115°C) are reached to prevent permanent silicon damage'
    ],
    sampleAnswer: 'Smartphone chassis lack active cooling fans, meaning heavy 3D gaming or generative AI processing can quickly heat the SoC to thermal limits. Samsung Dynamic Thermal Management (DTM) uses distributed on-die thermal diodes to continuously monitor junction temperatures. When temperatures cross pre-set trip points, hardware interrupt controllers instruct the DVFS governor to scale down operating voltage and clock frequency steps gracefully, keeping the smartphone outer glass skin temperature comfortable while preserving smooth frame rates.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-38',
    companyId: 'samsung',
    category: 'RTL & Verilog Design',
    question: 'Design a Parameterized Synchronous FIFO in SystemVerilog with programmable Almost-Full and Almost-Empty watermark status flags.',
    keyPoints: [
      'Dual-port memory or register array with separate read/write index pointers and an explicit element counter',
      'Simultaneous read and write support without pointer corruption or counter underflow/overflow',
      'Almost-Full flag asserts when count >= (DEPTH - PROG_FULL_OFFSET) to notify upstream DMA to throttle transmission',
      'Almost-Empty flag asserts when count <= PROG_EMPTY_OFFSET to notify downstream processors to prepare for underflow',
      'Single-cycle registered flag outputs to ensure clean timing closure in high-speed pipelines'
    ],
    sampleAnswer: 'A synchronous FIFO tracks items using a binary write pointer, read pointer, and an internal counter that increments on writes, decrements on reads, and holds steady during concurrent read-writes. Parameterized Almost-Full and Almost-Empty outputs are evaluated by comparing the current element count against programmable thresholds. Providing these early watermark flags allows upstream controllers (like DMA or PCIe engines) to halt bursts before the FIFO overflows, eliminating latency-induced data loss.',
    difficulty: 'Easy'
  },
  {
    id: 'samsung-39',
    companyId: 'samsung',
    category: 'Physical Design & Antenna Effect',
    question: 'What is the Plasma Induced Damage (Antenna Effect) during semiconductor manufacturing, and how is it repaired during routing and signoff?',
    keyPoints: [
      'During reactive ion etching (RIE) of metal layers, long metal wires collect electrostatic charges from plasma like antennas',
      'If a long metal wire connects to a thin MOSFET gate oxide without a discharge path, accumulated charge arcs through the gate oxide, causing dielectric breakdown',
      'Antenna Ratio rule: Ratio of metal area (or perimeter) to gate oxide area must not exceed foundry design rules (e.g. Area_metal / Area_gate < 500)',
      'Routing fix 1: Layer hopping (Antenna jumpers) routes the long wire up to a higher metal layer close to the gate, breaking the metal antenna on lower layers',
      'Routing fix 2: Antenna diode insertion connects a reverse-biased PN junction diode close to the gate to safely discharge plasma current to the substrate'
    ],
    sampleAnswer: 'During wafer plasma etching, long metal interconnects act as antennas, accumulating electrostatic charges. If a long wire is connected directly to a microscopic MOSFET gate dielectric, the high voltage ruptures the gate oxide, permanently destroying the transistor. Physical design tools calculate Antenna Ratios for all nets. Violations are fixed by "layer hopping" (inserting vias to route up to a higher metal layer immediately before the gate, so the long wire is only connected on the higher layer) or by placing reverse-biased protection diodes that safely sink plasma charges into the substrate.',
    difficulty: 'Medium'
  },
  {
    id: 'samsung-40',
    companyId: 'samsung',
    category: 'Security & Hardware Cryptography',
    question: 'How do Samsung Knox Vault and Hardware Root-of-Trust (RoT) protect cryptographic keys, biometrics, and secure boot sequences against physical fault injection and side-channel attacks?',
    keyPoints: [
      'Physically isolated Secure Processor with its own dedicated secure SRAM, ROM, and encrypted non-volatile memory',
      'Hardware Physical Unclonable Function (PUF) generates unique silicon fingerprint keys based on microscopic manufacturing variations',
      'Active physical shield layers and voltage/temperature/glitch tamper sensors that trigger automatic key zeroization upon physical probe detection',
      'Cryptographic hardware accelerators for AES-256, RSA-4096, and ECC with masked datapaths to resist Differential Power Analysis (DPA)',
      'Cryptographically verified Secure Boot chain verifying RSA/ECDSA digital signatures before executing each firmware stage'
    ],
    sampleAnswer: 'Samsung Knox Vault isolates sensitive credentials (PINs, passwords, biometric templates, and private keys) inside a standalone tamper-resistant secure microcontroller physically separated from the main Android application processor. It features its own secure power rails, clock generation, and dedicated encrypted memory. An on-chip Physical Unclonable Function (PUF) creates cryptographic root keys that never exist in plaintext. If tamper sensors detect laser fault injection, voltage glitching, or physical micro-probing, hardware zeroization logic instantly erases all secure keys.',
    difficulty: 'Hard'
  }
];
