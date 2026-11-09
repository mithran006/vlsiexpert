import { QuizQuestion } from '../quizData';

export const HDL_VERIFICATION_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // VERILOG HDL (15 QUESTIONS)
  // ==========================================
  {
    id: 'vlog-q1',
    topicId: 'verilog',
    category: 'Assignments',
    question: 'In synthesizable Verilog, what is the golden rule regarding blocking (=) and non-blocking (<=) assignments?',
    options: [
      'Use blocking (=) for edge-triggered sequential logic; non-blocking (<=) for combinational logic.',
      'Use non-blocking (<=) for edge-triggered sequential logic; blocking (=) for combinational logic.',
      'Always use blocking (=) everywhere for faster simulation execution.',
      'Non-blocking (<=) is only allowed in testbenches, never in synthesizable modules.'
    ],
    correctAnswer: 1,
    explanation: 'Non-blocking assignments (<=) schedule updates in the Non-Blocking Assignment (NBA) region, eliminating simulation race conditions in sequential flip-flops. Blocking (=) updates immediately, ideal for combinational procedural blocks.'
  },
  {
    id: 'vlog-q2',
    topicId: 'verilog',
    category: 'Data Types',
    question: 'Which of the following statements about wire and reg in Verilog-2001 is TRUE?',
    options: [
      'A reg always synthesizes to a physical hardware flip-flop.',
      'A wire can be assigned inside an always block using blocking assignments.',
      'A reg represents a procedural data storage variable and can synthesize to combinational logic or a register.',
      'A wire retains its previous value if left unassigned.'
    ],
    correctAnswer: 2,
    explanation: 'The keyword "reg" in Verilog only denotes that the signal is assigned inside a procedural block (always or initial). If all input conditions are specified in an always @(*) block, it synthesizes purely to combinational logic.'
  },
  {
    id: 'vlog-q3',
    topicId: 'verilog',
    category: 'Tri-State Logic',
    question: 'How is a bidirectional tri-state bus driver modeled in Verilog?',
    options: [
      "assign data_bus = (oe == 1'b1) ? data_out : 1'bz;",
      "assign data_bus = (oe == 1'b1) ? data_out : 1'b0;",
      "assign data_bus = (oe == 1'b1) ? data_out : 1'bx;",
      "assign data_bus = (oe == 1'b1) ? data_out : 1'b1;"
    ],
    correctAnswer: 0,
    explanation: "High-impedance state '1'bz' disconnects the driver from the bus when output enable (oe) is low, allowing another module to drive the shared bidirectional bus."
  },
  {
    id: 'vlog-q4',
    topicId: 'verilog',
    category: 'Control Statements',
    question: 'What is the critical difference between case, casex, and casez in Verilog?',
    options: [
      'casex treats only ? as dont-care; casez treats both x and z as dont-care.',
      'casez treats z and ? as dont-care; casex treats both x and z as dont-care during comparison.',
      'case performs exact matching; casez ignores all least significant bits.',
      'There is no difference; all three keywords are synonyms in IEEE 1364.'
    ],
    correctAnswer: 1,
    explanation: 'casez treats high-impedance (z or ?) bits as don\'t-cares during comparison. casex treats both unknown (x) and high-impedance (z) bits as don\'t-cares, which can lead to simulation-synthesis mismatches.'
  },
  {
    id: 'vlog-q5',
    topicId: 'verilog',
    category: 'State Machines',
    question: 'Which state encoding technique uses exactly one flip-flop per state, minimizing combinational next-state decoding logic at the expense of flip-flop count?',
    options: [
      'Binary Encoding',
      'Gray Code Encoding',
      'One-Hot Encoding',
      'Johnson Counter Encoding'
    ],
    correctAnswer: 2,
    explanation: 'One-Hot encoding allocates one dedicated flip-flop per state (e.g. 8 states = 8 flip-flops). Next-state logic simplifies to simple OR gates, making it optimal for high-speed FPGA architectures rich in registers.'
  },
  {
    id: 'vlog-q6',
    topicId: 'verilog',
    category: 'Generate Blocks',
    question: 'What is the purpose of generate ... endgenerate constructs in synthesizable Verilog?',
    options: [
      'To dynamically allocate memory during simulation runtime.',
      'To conditionally instantiate hardware modules or iteratively replicate structural instances during elaboration.',
      'To generate randomized test stimuli in testbench files.',
      'To implement variable-frequency hardware clock dividers.'
    ],
    correctAnswer: 1,
    explanation: 'Generate blocks allow parameterized replication of module instances, continuous assignments, and procedural blocks during elaboration before synthesis.'
  },
  {
    id: 'vlog-q7',
    topicId: 'verilog',
    category: 'Reduction Operators',
    question: "If wire [3:0] A = 4'b1011, what is the result of the reduction XOR operation (^A)?",
    options: ["1'b0", "1'b1", "4'b1011", "4'b0100"],
    correctAnswer: 1,
    explanation: 'Reduction XOR computes parity across all bits: 1 ^ 0 ^ 1 ^ 1 = 1. Since there are an odd number of 1s (3), the result is 1\'b1.'
  },
  {
    id: 'vlog-q8',
    topicId: 'verilog',
    category: 'Signed Arithmetic',
    question: "In Verilog-2001, how do you perform signed arithmetic comparison between two 8-bit vectors?",
    options: [
      'wire signed [7:0] a, b; if (a < b) ...',
      'wire [7:0] a, b; if (a < b) ...',
      'wire [7:0] a, b; if ($unsigned(a) < $unsigned(b)) ...',
      'wire [7:0] a, b; if (a[7] == b[7]) ...'
    ],
    correctAnswer: 0,
    explanation: 'Declaring vectors with the keyword "signed" (or using $signed(a) < $signed(b)) forces the simulator and synthesis engine to perform two\'s complement arithmetic comparisons.'
  },
  {
    id: 'vlog-q9',
    topicId: 'verilog',
    category: 'Combinational Loops',
    question: 'What happens when a combinational always @(*) block reads a signal that it assigns without a clock edge or full conditional coverage?',
    options: [
      'It synthesizes into a synchronous RAM block.',
      'An unintended transparent latch or combinational feedback loop is inferred.',
      'The synthesis tool reports a syntax error and halts.',
      'It synthesizes into an edge-triggered D flip-flop.'
    ],
    correctAnswer: 1,
    explanation: 'If any branch in an if-else or case statement fails to assign a value to an output variable inside a combinational procedural block, the hardware must retain its prior state, inferring an unintended latch.'
  },
  {
    id: 'vlog-q10',
    topicId: 'verilog',
    category: 'CDC Synchronizers',
    question: 'Why is a 2-flip-flop synchronizer used when transmitting a single-bit control signal across asynchronous clock domains?',
    options: [
      'To double the clock frequency in the destination domain.',
      'To allow potential metastability on the first flip-flop to resolve before sampling on the second flip-flop.',
      'To perform automatic serial-to-parallel conversion.',
      'To prevent clock jitter on the transmit clock.'
    ],
    correctAnswer: 1,
    explanation: 'When asynchronous signals violate setup/hold times of the destination clock, the first register may become metastable. The 2-FF synchronizer gives the signal one full clock cycle to settle to a stable logic level (MTBF improvement).'
  },
  {
    id: 'vlog-q11',
    topicId: 'verilog',
    category: 'Event Scheduling',
    question: 'In the Verilog Simulation Reference Model (Stratified Event Queue), in which region do non-blocking assignment updates take place?',
    options: [
      'Active Region',
      'Inactive Region',
      'NBA (Non-Blocking Assignment) Region',
      'Postponed Region'
    ],
    correctAnswer: 2,
    explanation: 'RHS expressions are evaluated in the Active region, and updates are committed during the NBA region, guaranteeing deterministic sequential behavior.'
  },
  {
    id: 'vlog-q12',
    topicId: 'verilog',
    category: 'Synthesis Directives',
    question: "What is the consequence of adding the synthesis pragma '// synopsys full_case' to a non-exhaustive case statement?",
    options: [
      'It forces synthesis to infer priority encoder hardware.',
      'It tells the synthesis tool that unspecified branches will never occur, potentially causing simulation-synthesis mismatches.',
      'It automatically creates a default case with zeros.',
      'It converts the case statement into a ROM.'
    ],
    correctAnswer: 1,
    explanation: 'full_case informs the synthesis tool that all possible cases are covered so no latches are inferred. However, if an unlisted case occurs during simulation, simulation holds the previous value while synthesized hardware generates don\'t-cares (a hazardous mismatch).'
  },
  {
    id: 'vlog-q13',
    topicId: 'verilog',
    category: 'Tasks & Functions',
    question: 'What is a major structural difference between a Verilog function and a Verilog task?',
    options: [
      'A function can contain time-delay statements (#10); a task cannot.',
      'A function must execute in zero simulation time, cannot have delays/events, and returns a single value.',
      'A task cannot have input or output arguments.',
      'A function can invoke non-blocking task calls.'
    ],
    correctAnswer: 1,
    explanation: 'Verilog functions execute in zero simulation time without delays (#, @, wait) and return a value directly. Tasks can include time-consuming delays and have multiple input/output/inout arguments.'
  },
  {
    id: 'vlog-q14',
    topicId: 'verilog',
    category: 'Reset Design',
    question: 'What is the syntax for an active-low asynchronous reset, active-high synchronous enable D flip-flop?',
    options: [
      'always @(posedge clk or negedge rst_n) begin if (!rst_n) q <= 0; else if (en) q <= d; end',
      'always @(posedge clk) begin if (!rst_n) q <= 0; else if (en) q <= d; end',
      'always @(posedge clk or posedge en) begin if (en) q <= d; else q <= 0; end',
      'always @(clk or rst_n) begin q <= d; end'
    ],
    correctAnswer: 0,
    explanation: 'Including "negedge rst_n" in the sensitivity list makes the reset asynchronous. Checking "!rst_n" first guarantees immediate reset independent of clock, while the enable condition is evaluated synchronously.'
  },
  {
    id: 'vlog-q15',
    topicId: 'verilog',
    category: 'Operators',
    question: "What is the difference between == (logical equality) and === (case equality) in Verilog simulation?",
    options: [
      '== compares only 1-bit signals; === compares multi-bit vectors.',
      '=== compares exact 4-state values including x and z; == returns 1\'bx if either operand contains x or z.',
      '== is synthesizable; === is synthesizable into faster LUT logic.',
      'There is no difference in Verilog-2005.'
    ],
    correctAnswer: 1,
    explanation: 'Logical equality (==) returns 1\'bx if any bit contains unknown (x) or high-impedance (z). Case equality (===) performs strict literal matching including x and z (non-synthesizable, used in testbenches).'
  },
  {
    id: 'vlog-q16',
    topicId: 'verilog',
    category: 'Signed Arithmetic',
    question: "In Verilog-2001, what happens if an arithmetic operation mixes a signed reg/wire with an unsigned reg/wire?",
    options: [
      "The entire expression is evaluated as unsigned, treating the signed operand as an unsigned value.",
      "The entire expression is automatically converted to signed.",
      "The compiler generates a fatal syntax error.",
      "The signed operand is sign-extended while the unsigned operand is zero-extended."
    ],
    correctAnswer: 0,
    explanation: "In Verilog-2001 standard rules, if any operand in an expression is unsigned, the entire expression is coerced to unsigned evaluation. To enforce signed arithmetic across both operands, $signed() must be explicitly applied."
  },
  {
    id: 'vlog-q17',
    topicId: 'verilog',
    category: 'Clock Domain Crossing',
    question: "How is a standard 2-flip-flop synchronizer implemented in Verilog to prevent metastability across asynchronous clock domains?",
    options: [
      "always @(posedge dst_clk) begin sync_meta <= async_in; sync_out <= sync_meta; end",
      "always @(posedge async_in) sync_out <= dst_clk;",
      "assign sync_out = async_in & dst_clk;",
      "always @(negedge dst_clk) sync_out <= async_in;"
    ],
    correctAnswer: 0,
    explanation: "A 2-FF synchronizer samples the asynchronous signal on the destination clock domain into a first capture flop (which absorbs potential metastable settling time), then transfers it to a second clean output flop."
  },
  {
    id: 'vlog-q18',
    topicId: 'verilog',
    category: 'Tasks vs Functions',
    question: "What is a primary functional difference between a function and a task in Verilog?",
    options: [
      "Functions cannot contain time-controlling delays (#, @, wait) and must return a single value; tasks can consume simulation time and have zero or more output/inout arguments.",
      "Functions can consume simulation time; tasks execute in zero simulation time.",
      "Tasks are synthesizable; functions are never synthesizable.",
      "Functions cannot accept any input arguments."
    ],
    correctAnswer: 0,
    explanation: "Verilog functions execute in zero simulation time without delays (# or @) and return a single value via the function name. Tasks can contain delay statements, invoke other tasks, and pass data through input, output, or inout ports."
  },
  {
    id: 'vlog-q19',
    topicId: 'verilog',
    category: 'Synthesis Pragmas',
    question: "Why is the use of synthesis directives like '// synopsys full_case parallel_case' discouraged in modern RTL design?",
    options: [
      "They can cause simulation-synthesis mismatches because the RTL simulator ignores the comment while the synthesis tool forces non-priority parallel mux logic.",
      "They increase gate count by 10x in every design.",
      "Modern EDA tools crash when parsing comments.",
      "They disable all clock gating logic."
    ],
    correctAnswer: 0,
    explanation: "Synthesis pragmas inside comments guide synthesis tools to assume branches are mutually exclusive (parallel_case) or complete (full_case). However, RTL simulators ignore comments, leading to catastrophic simulation-vs-silicon functional bugs."
  },
  {
    id: 'vlog-q20',
    topicId: 'verilog',
    category: 'Latch Prevention',
    question: "What is the recommended design practice to prevent unintended latch inference in combinational always @(*) blocks?",
    options: [
      "Assign default values to all outputs at the beginning of the always block and ensure all conditional branches (if-else, case) assign every output.",
      "Use only non-blocking (<=) assignments inside the combinational block.",
      "Add a clock signal to the sensitivity list.",
      "Declare all signals as tri-state wires."
    ],
    correctAnswer: 0,
    explanation: "An inferenced latch is generated whenever a signal is not assigned in every possible execution path of a combinational procedural block. Pre-assigning default values at the top of always @(*) guarantees no memory is retained."
  },

  // ==========================================
  // SYSTEMVERILOG (20 QUESTIONS)
  // ==========================================
  {
    id: 'sver-q1',
    topicId: 'systemverilog',
    category: 'Data Types',
    question: 'Why is the logic data type preferred over reg and wire in SystemVerilog RTL design?',
    options: [
      'logic can be assigned in both continuous assign statements and procedural always blocks while prohibiting multiple concurrent drivers.',
      'logic supports 8-state simulation values instead of 4-state.',
      'logic eliminates the need for clock signals.',
      'logic automatically pipeline-registers combinational logic paths.'
    ],
    correctAnswer: 0,
    explanation: 'SystemVerilog logic replaces both wire and reg for single-driver signals. It can be driven by procedural blocks or continuous assignments and flags compile-time errors if multiple continuous drivers exist (unlike wire, which resolves them).'
  },
  {
    id: 'sver-q2',
    topicId: 'systemverilog',
    category: 'Procedural Blocks',
    question: 'What advantage does always_comb provide over legacy Verilog always @(*) in SystemVerilog?',
    options: [
      'always_comb automatically triggers once at time zero (initialization) and enforces latch-free combinational intent at compile time.',
      'always_comb executes on the falling edge of the system clock.',
      'always_comb allows non-blocking assignments without clocking.',
      'always_comb supports tri-state bus resolution.'
    ],
    correctAnswer: 0,
    explanation: 'always_comb automatically computes the complete sensitivity list, executes once at simulation time 0 to avoid startup glitches, and synthesis tools verify that no memory elements (latches) are inferred.'
  },
  {
    id: 'sver-q3',
    topicId: 'systemverilog',
    category: 'SVA Assertions',
    question: 'In SystemVerilog Assertions (SVA), what is the difference between overlapping implication (|->) and non-overlapping implication (|=>)?',
    options: [
      '|-> checks the consequent in the next clock cycle; |=> checks in the current clock cycle.',
      '|-> checks the consequent in the same clock cycle as antecedent match; |=> checks the consequent 1 clock cycle later.',
      '|-> is used only in testbenches; |=> is synthesizable for formal verification.',
      '|-> disables the assertion; |=> enables continuous sampling.'
    ],
    correctAnswer: 1,
    explanation: 'In SVA, overlapping implication (a |-> b) evaluates consequent b in the same cycle antecedent a is true. Non-overlapping (a |=> b) evaluates consequent b exactly one clock cycle later (equivalent to a ##1 b).'
  },
  {
    id: 'sver-q4',
    topicId: 'systemverilog',
    category: 'Interfaces',
    question: 'What is the role of modport inside a SystemVerilog interface?',
    options: [
      'To specify directionality (input, output) and access permissions for ports connecting to different modules (e.g. Master vs Slave).',
      'To compile C++ code into the interface.',
      'To define the clock frequency of the bus.',
      'To instantiate physical pin I/O pads.'
    ],
    correctAnswer: 0,
    explanation: 'modport (module port) groups signals and specifies port directions (input, output, inout) from the perspective of connecting modules (such as master, slave, or monitor) connecting to the shared interface.'
  },
  {
    id: 'sver-q5',
    topicId: 'systemverilog',
    category: 'Constrained Randomization',
    question: 'What is the difference between rand and randc member variables in a SystemVerilog class?',
    options: [
      'rand generates random values with replacement; randc generates random values in cyclic permutation without repeating until all values are exhausted.',
      'rand is 32-bit; randc is 64-bit.',
      'randc is constant and cannot be randomized.',
      'rand can only be used with integer types.'
    ],
    correctAnswer: 0,
    explanation: 'rand produces uniformly distributed pseudo-random values with replacement. randc (random cyclic) iterates through all permutations within the variable range without repetition until the full cycle is complete.'
  },
  {
    id: 'sver-q6',
    topicId: 'systemverilog',
    category: 'Functional Coverage',
    question: 'What does cross coverage measure in a SystemVerilog covergroup?',
    options: [
      'The simultaneous occurrence of bin combinations across two or more coverpoints.',
      'Code line coverage across different files.',
      'Toggle coverage on asynchronous reset pins.',
      'Finite State Machine arc transition latency.'
    ],
    correctAnswer: 0,
    explanation: 'Cross coverage computes the Cartesian product of two or more coverpoints, verifying that every combination of states/modes has been exercised by the verification environment.'
  },
  {
    id: 'sver-q7',
    topicId: 'systemverilog',
    category: 'Fork-Join',
    question: 'Which SystemVerilog process control statement spawns parallel threads and continues parent execution as soon as ANY ONE thread finishes?',
    options: [
      'fork ... join',
      'fork ... join_any',
      'fork ... join_none',
      'fork ... join_all'
    ],
    correctAnswer: 1,
    explanation: 'fork ... join_any blocks the parent process until any one of the spawned child threads terminates, after which parent execution resumes while remaining threads continue running in the background.'
  },
  {
    id: 'sver-q8',
    topicId: 'systemverilog',
    category: 'DPI-C',
    question: 'What is the purpose of the SystemVerilog Direct Programming Interface (DPI-C)?',
    options: [
      'Directly connects HDL signals to Python matplotlib graphs.',
      'Provides zero-overhead bidirectional calling between SystemVerilog and native C/C++ functions without PLI/VPI wrappers.',
      'Synthesizes C++ algorithms into FPGA bitstreams automatically.',
      'Bypasses SystemVerilog type checking.'
    ],
    correctAnswer: 1,
    explanation: 'DPI-C allows SystemVerilog code to call C functions (import "DPI-C") and C code to call SystemVerilog functions (export "DPI-C") directly using standard C function signatures.'
  },
  {
    id: 'sver-q9',
    topicId: 'systemverilog',
    category: 'Arrays & Queues',
    question: "What is the syntax to push an element to the back of a SystemVerilog queue (int q[$])?",
    options: [
      'q.push_back(val);',
      'q.insert_last(val);',
      'q.append(val);',
      'q.enqueue(val);'
    ],
    correctAnswer: 0,
    explanation: 'SystemVerilog queues provide built-in methods: push_back(val), push_front(val), pop_back(), pop_front(), insert(index, val), and delete(index).'
  },
  {
    id: 'sver-q10',
    topicId: 'systemverilog',
    category: 'Classes & OOP',
    question: 'Why should class methods in verification testbench components be declared virtual?',
    options: [
      'To allow derived child classes to override the method implementation for dynamic polymorphism.',
      'To execute the method in zero simulation time.',
      'To allow the method to be synthesized into ASIC gates.',
      'To make the method accessible to external C++ modules.'
    ],
    correctAnswer: 0,
    explanation: 'Virtual methods enable polymorphism in OOP: when a method is called on a base class handle pointing to a derived object, the derived class override executes instead of the base method.'
  },
  {
    id: 'sver-q11',
    topicId: 'systemverilog',
    category: 'Synchronization',
    question: 'How do a mailbox and a semaphore differ in SystemVerilog inter-process communication?',
    options: [
      'A mailbox passes typed data objects between threads with FIFO queuing; a semaphore acts as a token bucket for mutual exclusion/resource allocation.',
      'A semaphore can transmit transaction packets; a mailbox can only transmit clock pulses.',
      'A mailbox is non-blocking only; a semaphore is blocking only.',
      'There is no difference; both are alias names.'
    ],
    correctAnswer: 0,
    explanation: 'Mailboxes are FIFO channels for passing data/objects (put(), get(), peek()). Semaphores manage keys/tokens (get(n), put(n), try_get(n)) to control concurrent access to shared resources.'
  },
  {
    id: 'sver-q12',
    topicId: 'systemverilog',
    category: 'Constraints',
    question: "In SystemVerilog constraints, what does 'solve A before B;' accomplish?",
    options: [
      'Forces variable A to be randomized in a separate time step before B.',
      'Alters the probability distribution so that the solver selects a value for A first, avoiding biased distributions in dependent constraints.',
      'Executes variable A in hardware before B.',
      'Disables constraint checking on B.'
    ],
    correctAnswer: 1,
    explanation: 'The solve...before constraint guides the solver to choose the value of A from its solution space before selecting B, eliminating skewed distributions in conditional constraints (e.g. if (A == 1) B < 10).'
  },
  {
    id: 'sver-q13',
    topicId: 'systemverilog',
    category: 'Clocking Blocks',
    question: 'Why are clocking blocks used in SystemVerilog testbenches?',
    options: [
      'To eliminate race conditions between the testbench and Design Under Test (DUT) by establishing defined input/output sampling skews.',
      'To synthesize high-speed PLL clock generators.',
      'To generate multi-phase clocks on physical FPGA pins.',
      'To accelerate gate-level simulations.'
    ],
    correctAnswer: 0,
    explanation: 'Clocking blocks sample DUT outputs with an input setup skew (e.g. #1step in the Preponed region) and drive DUT inputs with an output hold skew (e.g. #1ns in the Observed/Reactive region), guaranteeing deterministic testbench interaction.'
  },
  {
    id: 'sver-q14',
    topicId: 'systemverilog',
    category: 'Keywords',
    question: "What does the 'unique' keyword enforce when placed before an 'if' or 'case' statement?",
    options: [
      'Ensures conditions are mutually exclusive (checked at runtime) and that all possible conditions are covered, warning on overlaps or unhandled values.',
      'Forces parallel hardware execution using one-hot muxes.',
      'Disables simulation warnings for duplicate case items.',
      'Converts the case block into a priority encoder.'
    ],
    correctAnswer: 0,
    explanation: 'unique instructs the simulator and synthesis tool that branches are mutually exclusive and parallel. If multiple branches match or no branch matches, a runtime warning is issued.'
  },
  {
    id: 'sver-q15',
    topicId: 'systemverilog',
    category: 'Packages',
    question: 'How do you share user-defined types, parameters, and tasks across multiple SystemVerilog modules?',
    options: [
      'Declare them in a package and use "import package_name::*;" in target modules.',
      'Include them as global compiler defines (`define) in every file.',
      'Pass them as module port connections.',
      'Store them in an external text file read by $readmemh.'
    ],
    correctAnswer: 0,
    explanation: 'SystemVerilog packages provide clean namespace encapsulation for typedefs, enums, parameters, functions, and classes across the verification and design hierarchy.'
  },
  {
    id: 'sver-q16',
    topicId: 'systemverilog',
    category: 'Interfaces & Clocking',
    question: "What is the primary function of a clocking block inside a SystemVerilog interface?",
    options: [
      "To eliminate race conditions between the testbench and DUT by specifying synchronous input setup skews and output hold skews.",
      "To generate a 50% duty-cycle clock waveform automatically.",
      "To replace the physical phase-locked loop (PLL) in silicon.",
      "To serialize parallel data onto an SPI bus."
    ],
    correctAnswer: 0,
    explanation: "Clocking blocks define how signals are sampled (input skew, e.g., #1step or #1ns before clock edge) and driven (output skew, e.g., #1ns after clock edge), guaranteeing clean zero-race synchronization between verification testbenches and RTL."
  },
  {
    id: 'sver-q17',
    topicId: 'systemverilog',
    category: 'SVA Assertions',
    question: "What is the operational difference between overlapping implication (|->) and non-overlapping implication (|=>) in SVA (SystemVerilog Assertions)?",
    options: [
      "|-> checks the consequent sequence in the exact SAME clock cycle as the antecedent match; |=> checks the consequent starting ONE clock cycle later.",
      "|=> checks in the same cycle; |-> checks 2 cycles later.",
      "|-> is for combinational logic; |=> is for sequential logic only.",
      "There is no functional difference; they are aliases."
    ],
    correctAnswer: 0,
    explanation: "In SVA property evaluation, 'req |-> ack' requires ack to hold true on the current cycle if req was true. In contrast, 'req |=> ack' is equivalent to 'req |-> ##1 ack', checking the consequent one clock cycle after the antecedent match."
  },
  {
    id: 'sver-q18',
    topicId: 'systemverilog',
    category: 'Data Structures',
    question: "Which SystemVerilog built-in data structure provides constant-time O(1) push_front, push_back, pop_front, and pop_back operations?",
    options: [
      "Queue ($)",
      "Dynamic Array ([])",
      "Associative Array ([string])",
      "Fixed-size Packed Array"
    ],
    correctAnswer: 0,
    explanation: "SystemVerilog queues (declared with bounded or unbounded index [$]) are dynamically resizable double-ended queues supporting efficient insertion and deletion at both ends via built-in methods push_front(), push_back(), pop_front(), and pop_back()."
  },
  {
    id: 'sver-q19',
    topicId: 'systemverilog',
    category: 'Randomization',
    question: "What does the 'soft' constraint modifier do in SystemVerilog constrained random generation?",
    options: [
      "Specifies a default constraint that can be overridden by inline 'with {}' constraints without causing a constraint solver contradiction error.",
      "Applies constraints only to floating-point numbers.",
      "Reduces constraint solver execution time by 50%.",
      "Disables randomization if variable values exceed 255."
    ],
    correctAnswer: 0,
    explanation: "Soft constraints specify default distribution or bounds in a class definition. If a testcase adds an inline 'with {}' constraint that conflicts with a soft constraint, the solver drops the soft constraint in favor of the inline constraint instead of throwing a solver failure."
  },
  {
    id: 'sver-q20',
    topicId: 'systemverilog',
    category: 'Concurrency',
    question: "How does 'fork ... join_any' behave compared to 'fork ... join_none' in SystemVerilog?",
    options: [
      "join_any unblocks the parent thread as soon as ANY ONE spawned child process finishes; join_none unblocks the parent thread IMMEDIATELY without waiting for any child process.",
      "join_any waits for all threads to terminate; join_none terminates all threads immediately.",
      "join_any is only allowed in modules; join_none is allowed in interfaces.",
      "join_none executes all child processes sequentially."
    ],
    correctAnswer: 0,
    explanation: "fork...join blocks until all spawned processes finish. fork...join_any blocks until the first child finishes, and fork...join_none spawns background processes and immediately continues parent execution without blocking."
  },

  // ==========================================
  // VHDL (20 QUESTIONS)
  // ==========================================
  {
    id: 'vhdl-q1',
    topicId: 'vhdl',
    category: 'Signals vs Variables',
    question: 'What is the fundamental difference between a signal assignment (<=) and a variable assignment (:=) in VHDL?',
    options: [
      'Signal assignments update after a delta delay; variable assignments update instantaneously within the process.',
      'Variable assignments are global; signal assignments are local to a process.',
      'Signals can only be declared inside a process; variables are declared in architectures.',
      'Signals are used only in testbenches; variables are for synthesizable logic.'
    ],
    correctAnswer: 0,
    explanation: 'In VHDL, variables (:=) update immediately within the sequential process scope. Signals (<=) schedule their new values for the next simulation delta cycle, representing physical interconnects.'
  },
  {
    id: 'vhdl-q2',
    topicId: 'vhdl',
    category: 'Architecture & Entity',
    question: 'What is the relationship between an Entity and an Architecture in VHDL?',
    options: [
      'The Entity declares the external I/O ports and generics; the Architecture defines the internal behavior, dataflow, or structural implementation.',
      'The Entity is the testbench; the Architecture is the synthesis script.',
      'An Entity can have only one Architecture.',
      'The Architecture defines pin names; the Entity defines logic gates.'
    ],
    correctAnswer: 0,
    explanation: 'The ENTITY defines the black-box interface (ports and parameters), while one or more ARCHITECTURE bodies define the implementation (behavioral, structural, or dataflow).'
  },
  {
    id: 'vhdl-q3',
    topicId: 'vhdl',
    category: 'Clock Edge Detection',
    question: 'Which VHDL construct is the standard IEEE recommendation for positive edge clock detection?',
    options: [
      "if rising_edge(clk) then",
      "if (clk'event and clk = '1') then",
      "if (clk = '1') then",
      "wait on clk until clk = '1';"
    ],
    correctAnswer: 0,
    explanation: 'rising_edge(clk) is the preferred standard function because it explicitly verifies a transition from 0 or L to 1 or H, ignoring false transitions from unknown (X) or uninitialized (U) states.'
  },
  {
    id: 'vhdl-q4',
    topicId: 'vhdl',
    category: 'Data Types',
    question: "Why should ieee.numeric_std be used instead of ieee.std_logic_arith or ieee.std_logic_unsigned in VHDL?",
    options: [
      'ieee.numeric_std is the official IEEE standard package for signed and unsigned arithmetic on std_logic_vector arrays.',
      'std_logic_arith is faster in FPGA synthesis.',
      'numeric_std supports analog voltage modeling.',
      'std_logic_unsigned is required for 64-bit ALUs.'
    ],
    correctAnswer: 0,
    explanation: 'numeric_std is the official IEEE 1076.3 standard package. The proprietary Synopsys packages (std_logic_arith, std_logic_unsigned) lead to namespace conflicts and non-portable code.'
  },
  {
    id: 'vhdl-q5',
    topicId: 'vhdl',
    category: 'Concurrent Statements',
    question: "What is the difference between a 'when ... else' statement and a 'with ... select' statement in VHDL?",
    options: [
      "'when ... else' is a conditional signal assignment; 'with ... select' is a selected signal assignment evaluating a single selector expression against all choices.",
      "'when ... else' is sequential only; 'with ... select' is concurrent only.",
      "'with ... select' infers flip-flops; 'when ... else' infers wire connections.",
      'They are identical in syntax and semantics.'
    ],
    correctAnswer: 0,
    explanation: 'Conditional signal assignment (when...else) evaluates priority-ordered conditions. Selected signal assignment (with...select) evaluates all mutually exclusive choices for a single expression without implied priority.'
  },
  {
    id: 'vhdl-q6',
    topicId: 'vhdl',
    category: 'Processes',
    question: 'What happens if a signal read inside a combinational VHDL process is omitted from the process sensitivity list?',
    options: [
      'The process will not trigger when that signal changes during simulation, causing a simulation-synthesis mismatch.',
      'The synthesis tool will throw a fatal error.',
      'The omitted signal is automatically treated as a clock.',
      'The simulator will automatically insert a 1ns delay.'
    ],
    correctAnswer: 0,
    explanation: 'In simulation, the process only wakes up when signals in the sensitivity list change. Omissions cause frozen simulation outputs, whereas synthesis tools ignore sensitivity lists for combinational logic.'
  },
  {
    id: 'vhdl-q7',
    topicId: 'vhdl',
    category: 'Generics',
    question: 'What is the purpose of GENERIC declarations in a VHDL entity?',
    options: [
      'To define static configuration parameters (such as bus widths, clock frequencies, or FIFO depths) at instantiation time.',
      'To declare floating-point signal ports.',
      'To import C libraries into VHDL.',
      'To dynamically allocate RAM during runtime.'
    ],
    correctAnswer: 0,
    explanation: 'Generics pass static parameters into entities, allowing designers to write highly reusable, parameterized modules (e.g. generic (DATA_WIDTH : integer := 8);).'
  },
  {
    id: 'vhdl-q8',
    topicId: 'vhdl',
    category: 'Resolution Functions',
    question: "How many logic values does the IEEE 1164 std_ulogic type have, and how does std_logic differ?",
    options: [
      "std_ulogic is unresolved 9-state ('U','X','0','1','Z','W','L','H','-'); std_logic is resolved using a wired resolution function for multi-driver buses.",
      "std_ulogic has 2 states (0, 1); std_logic has 4 states.",
      "std_ulogic is synthesizable; std_logic is only for testbenches.",
      "std_logic is 8-bit; std_ulogic is 1-bit."
    ],
    correctAnswer: 0,
    explanation: 'std_ulogic is the unresolved 9-value logic type (flags compile errors if multiple drivers exist). std_logic is a resolved subtype that calculates the driving level when multiple sources connect to one net.'
  },
  {
    id: 'vhdl-q9',
    topicId: 'vhdl',
    category: 'Configurations',
    question: 'In VHDL, what is the role of a CONFIGURATION declaration?',
    options: [
      'To bind a specific architecture and component instances to entity interfaces in a hierarchical design.',
      'To set FPGA pin constraints.',
      'To configure the operating system baud rate.',
      'To initialize memory from a HEX file.'
    ],
    correctAnswer: 0,
    explanation: 'VHDL configurations explicitly bind which architecture implementation to use for each component instance across the hierarchical entity tree.'
  },
  {
    id: 'vhdl-q10',
    topicId: 'vhdl',
    category: 'VHDL-2008',
    question: 'Which of the following is a major enhancement introduced in the VHDL-2008 standard?',
    options: [
      'Support for reading output ports directly in expressions, simplified sensitivity list (process(all)), and boolean operators on std_logic_vector.',
      'Removal of the entity-architecture concept.',
      'Removal of strongly-typed checks.',
      'Replacement of signals with C pointers.'
    ],
    correctAnswer: 0,
    explanation: 'VHDL-2008 introduced process(all), allowed direct reading of "out" ports without needing "buffer" mode, unary reduction operators, matching relational operators, and conditional expressions in assignments.'
  },
  {
    id: 'vhdl-q11',
    topicId: 'vhdl',
    category: 'Types & Conversions',
    question: "How do you correctly convert an integer 'val' to an 8-bit std_logic_vector in VHDL using numeric_std?",
    options: [
      "std_logic_vector(to_unsigned(val, 8))",
      "conv_std_logic_vector(val, 8)",
      "std_logic_vector(val)",
      "to_std_logic_vector(val, 8)"
    ],
    correctAnswer: 0,
    explanation: 'In IEEE numeric_std, integers must first be converted to unsigned or signed with specified bit width (to_unsigned(val, 8)), and then type-casted to std_logic_vector.'
  },
  {
    id: 'vhdl-q12',
    topicId: 'vhdl',
    category: 'Sequential Statements',
    question: "Why cannot a 'wait for 10 ns;' statement be used inside a process with a sensitivity list?",
    options: [
      'VHDL language rules strictly prohibit combining sensitivity lists and wait statements in the same process.',
      'Wait statements only work in entity declarations.',
      'Sensitivity lists disable simulation time.',
      'It causes FPGA clock jitter.'
    ],
    correctAnswer: 0,
    explanation: 'A VHDL process must either use a sensitivity list (waiting implicitly at the end of the process for sensitivity triggers) or explicit wait statements (wait for, wait on, wait until), but never both.'
  },
  {
    id: 'vhdl-q13',
    topicId: 'vhdl',
    category: 'Packages',
    question: 'What are the two required sections of a custom VHDL PACKAGE?',
    options: [
      'PACKAGE declaration (interface) and PACKAGE BODY (implementation of functions/procedures).',
      'Entity and Architecture.',
      'Header and Source file.',
      'Public and Private class.'
    ],
    correctAnswer: 0,
    explanation: 'A VHDL package consists of the PACKAGE header (declaring exported types, constants, components, and function prototypes) and the PACKAGE BODY (implementing the subprogram algorithms).'
  },
  {
    id: 'vhdl-q14',
    topicId: 'vhdl',
    category: 'Attributes',
    question: "What does the VHDL signal attribute 'sig'last_value' return?",
    options: [
      'The value that signal sig had immediately before the most recent transition.',
      'The time that has elapsed since the last transition.',
      'The final value at end of simulation.',
      'The maximum value the signal can hold.'
    ],
    correctAnswer: 0,
    explanation: "sig'last_value returns the previous value of signal sig before its most recent event, commonly used to verify edge transitions (e.g. clk = '1' and clk'last_value = '0')."
  },
  {
    id: 'vhdl-q15',
    topicId: 'vhdl',
    category: 'Testbenches',
    question: "What is the standard architecture style for a top-level VHDL testbench?",
    options: [
      'An entity with NO ports (entity tb is end entity;) instantiating the DUT as a component alongside clock generator and stimulus processes.',
      'An entity with 32 bidirectional ports.',
      'A C++ shared library wrapper.',
      'A single process architecture without components.'
    ],
    correctAnswer: 0,
    explanation: 'Top-level VHDL testbenches have an empty entity declaration (no external I/O pins) because all stimuli are generated internally and driven directly into the instantiated Design Under Test (DUT).'
  },
  {
    id: 'vhdl-q16',
    topicId: 'vhdl',
    category: 'Resolution Functions',
    question: "What is the difference between 'std_ulogic' and 'std_logic' in IEEE 1164?",
    options: [
      "std_ulogic is unresolved (causes a compiler error if multiple sources drive the same signal); std_logic is resolved via the resolved() function to handle bus contention.",
      "std_ulogic has 4 states; std_logic has 9 states.",
      "std_ulogic is synthesizable; std_logic is simulation-only.",
      "std_logic is deprecated in modern VHDL."
    ],
    correctAnswer: 0,
    explanation: "std_ulogic is an unresolved type that catches dangerous accidental multi-driver conflicts at compile time. std_logic is a resolved subtype of std_ulogic using a table resolution function to determine wired-AND, wired-OR, or contention ('X') states."
  },
  {
    id: 'vhdl-q17',
    topicId: 'vhdl',
    category: 'Generics',
    question: "How are parameterizable component specifications (such as bus width or FIFO depth) implemented in VHDL entity declarations?",
    options: [
      "Using the GENERIC clause inside the ENTITY header.",
      "Using the #define preprocessor macro.",
      "Using dynamic malloc inside the architecture body.",
      "Using global package variables."
    ],
    correctAnswer: 0,
    explanation: "VHDL GENERIC declarations allow static parameterization of hardware modules (e.g., generic (DATA_WIDTH : integer := 32);) that can be overridden upon instantiation via 'generic map'."
  },
  {
    id: 'vhdl-q18',
    topicId: 'vhdl',
    category: 'Reset Architecture',
    question: "What is the correct syntax for describing an active-low asynchronous reset D flip-flop in VHDL?",
    options: [
      "process(clk, rst_n) begin if rst_n = '0' then q <= '0'; elsif rising_edge(clk) then q <= d; end if; end process;",
      "process(clk) begin if rising_edge(clk) and rst_n = '0' then q <= '0'; else q <= d; end if; end process;",
      "process(rst_n) begin q <= d when rst_n = '1' else '0'; end process;",
      "process(clk, rst_n) begin q <= d; if rst_n = '0' then q <= '0'; end if; end process;"
    ],
    correctAnswer: 0,
    explanation: "An asynchronous reset must be included in the process sensitivity list alongside the clock, and the reset condition (if rst_n = '0') must be checked before evaluating the synchronous clock edge (elsif rising_edge(clk))."
  },
  {
    id: 'vhdl-q19',
    topicId: 'vhdl',
    category: 'FSM Design',
    question: "In standard two-process FSM modeling in VHDL, what is the separation of responsibilities between the two processes?",
    options: [
      "Process 1 handles synchronous state transitions on clock edges; Process 2 handles purely combinational next-state decoding and output generation.",
      "Process 1 generates clock pulses; Process 2 resets the board.",
      "Process 1 reads ROM; Process 2 writes RAM.",
      "Both processes run sequentially with fixed 10ns delays."
    ],
    correctAnswer: 0,
    explanation: "Two-process FSM architecture clearly isolates sequential state register update (synchronous, clocked, with reset) from the purely combinational next-state decode and Moore/Mealy output logic."
  },
  {
    id: 'vhdl-q20',
    topicId: 'vhdl',
    category: 'Generate Statements',
    question: "How do you instantiate an array of 8 identical full-adder components in VHDL?",
    options: [
      "gen_adders: for i in 0 to 7 generate u_fa: full_adder port map (a(i), b(i), cin(i), sum(i), cout(i)); end generate gen_adders;",
      "repeat (8) instance full_adder;",
      "while i < 8 loop full_adder; end loop;",
      "case i is when 0 to 7 => full_adder; end case;"
    ],
    correctAnswer: 0,
    explanation: "The 'for ... generate' statement in VHDL replicates concurrent structural component instantiations or concurrent signal assignments across an iteration index during elaboration."
  },

  // ==========================================
  // UVM (20 QUESTIONS)
  // ==========================================
  {
    id: 'uvm-q1',
    topicId: 'uvm',
    category: 'Phases',
    question: 'In UVM, which phase is the ONLY time-consuming (task-based) phase where clocks tick and stimulus transactions execute?',
    options: [
      'run_phase',
      'build_phase',
      'connect_phase',
      'extract_phase'
    ],
    correctAnswer: 0,
    explanation: 'In UVM, all phases (build, connect, end_of_elaboration, start_of_simulation, extract, check, report) are non-time-consuming functions, EXCEPT run_phase (and its sub-phases: pre_reset to post_shutdown), which is a time-consuming task.'
  },
  {
    id: 'uvm-q2',
    topicId: 'uvm',
    category: 'Phase Order',
    question: 'In which direction are UVM components built during the build_phase across the testbench hierarchy?',
    options: [
      'Top-Down (from uvm_test down to drivers/monitors).',
      'Bottom-Up (from drivers up to uvm_test).',
      'Random order.',
      'Left-to-right parallel execution.'
    ],
    correctAnswer: 0,
    explanation: 'The build_phase executes Top-Down so parent components can configure parameters, set configuration database entries, and instantiate their child sub-components before children construct themselves.'
  },
  {
    id: 'uvm-q3',
    topicId: 'uvm',
    category: 'Factory Overrides',
    question: 'What is the benefit of the UVM Factory mechanism (`uvm_component_utils / type_id::create())?',
    options: [
      'Enables polymorphic substitution of transactions, drivers, or scoreboards across the testbench without modifying the original source code files.',
      'Accelerates clock frequency in FPGA synthesis.',
      'Converts UVM code to SystemC automatically.',
      'Automates gate-level netlist generation.'
    ],
    correctAnswer: 0,
    explanation: 'The UVM Factory allows tests to override base components or transaction types (set_type_override_by_type or set_inst_override_by_type) without touching any existing testbench files.'
  },
  {
    id: 'uvm-q4',
    topicId: 'uvm',
    category: 'Objections',
    question: 'What happens if a test does not raise an objection (phase.raise_objection()) in its run_phase or main sequence?',
    options: [
      'The run_phase terminates immediately at simulation time 0, and the simulation ends without running tests.',
      'The simulation runs infinitely until timeout.',
      'The simulator throws a compile-time error.',
      'The UVM scoreboard reports an error.'
    ],
    correctAnswer: 0,
    explanation: 'UVM manages simulation lifetime via objections. When all raised objections drop to zero, the run_phase completes and UVM proceeds to cleanup phases (extract, check, report).'
  },
  {
    id: 'uvm-q5',
    topicId: 'uvm',
    category: 'Sequences & Drivers',
    question: 'How do a uvm_sequence and a uvm_driver communicate transaction items?',
    options: [
      'Through a uvm_sequencer using start_item()/finish_item() on the sequence side and seq_item_port.get_next_item()/item_done() on the driver side.',
      'Using shared global variables.',
      'Through continuous assign statements.',
      'Via hardcoded file I/O operations.'
    ],
    correctAnswer: 0,
    explanation: 'The UVM Sequencer acts as a bidirectional arbiter: sequences create and randomize items (start_item/finish_item), while the driver retrieves items (get_next_item), drives pin-level signals, and signals completion (item_done).'
  },
  {
    id: 'uvm-q6',
    topicId: 'uvm',
    category: 'Config DB',
    question: 'What is the correct syntax to store a virtual interface handle in the UVM Configuration Database from top-level module to a test?',
    options: [
      'uvm_config_db#(virtual my_if)::set(null, "uvm_test_top*", "vif", dut_if);',
      'uvm_config_db::write("vif", dut_if);',
      'set_config_interface("vif", dut_if);',
      'uvm_resource_db::push("vif", dut_if);'
    ],
    correctAnswer: 0,
    explanation: 'uvm_config_db#(TYPE)::set(context, inst_name, field_name, value) sets a parameter in the hierarchical configuration table for child components to retrieve with uvm_config_db::get().'
  },
  {
    id: 'uvm-q7',
    topicId: 'uvm',
    category: 'Agents',
    question: 'What constitutes an Active UVM Agent versus a Passive UVM Agent?',
    options: [
      'An Active Agent contains a sequencer, driver, and monitor; a Passive Agent contains ONLY a monitor.',
      'An Active Agent is implemented in hardware; a Passive Agent is in software.',
      'An Active Agent checks assertions; a Passive Agent logs waveforms.',
      'A Passive Agent cannot connect to the scoreboard.'
    ],
    correctAnswer: 0,
    explanation: 'Active agents actively generate and drive stimuli into the DUT (sequencer + driver + monitor). Passive agents only snoop interface signals without driving (monitor only), typical for output observation or verification reuse.'
  },
  {
    id: 'uvm-q8',
    topicId: 'uvm',
    category: 'Analysis Ports',
    question: 'Which TLM construct allows a UVM Monitor to broadcast sampled transactions to multiple subscribers (Scoreboard, Coverage Collector) without blocking?',
    options: [
      'uvm_analysis_port#(T)',
      'uvm_blocking_put_port#(T)',
      'uvm_get_port#(T)',
      'uvm_seq_item_port#(T)'
    ],
    correctAnswer: 0,
    explanation: 'uvm_analysis_port uses a 1-to-many non-blocking broadcast mechanism. When the monitor calls ap.write(trans), the write() method in every connected subscriber (scoreboard, coverage) executes synchronously.'
  },
  {
    id: 'uvm-q9',
    topicId: 'uvm',
    category: 'Scoreboard',
    question: 'What is the primary role of a uvm_scoreboard in a constrained-random verification environment?',
    options: [
      'Compares actual DUT transaction outputs against expected reference model (golden predictor) outputs and reports discrepancies.',
      'Measures FPGA gate delay propagation.',
      'Generates randomized clock frequencies.',
      'Drives physical reset signals.'
    ],
    correctAnswer: 0,
    explanation: 'The Scoreboard receives input and output transactions from monitors, updates an internal reference model, and performs automated end-to-end self-checking and error reporting.'
  },
  {
    id: 'uvm-q10',
    topicId: 'uvm',
    category: 'RAL (Register Layer)',
    question: 'What is the difference between Frontdoor access and Backdoor access in the UVM Register Abstraction Layer (RAL)?',
    options: [
      'Frontdoor access simulates actual bus transactions (AXI/APB) across time; Backdoor access reads/writes DUT register variables directly in zero simulation time using DPI/VPI hierarchical paths.',
      'Frontdoor is read-only; Backdoor is write-only.',
      'Backdoor is synthesizable for ASIC testing.',
      'Frontdoor bypasses all clock cycles.'
    ],
    correctAnswer: 0,
    explanation: 'Frontdoor access issues protocol-compliant bus transfers through the sequencer/driver. Backdoor access deposits or inspects register bits directly in simulator memory without consuming bus cycles.'
  },
  {
    id: 'uvm-q11',
    topicId: 'uvm',
    category: 'Reporting',
    question: "Which UVM reporting macro halts simulation immediately when invoked?",
    options: [
      "`uvm_fatal(ID, MSG)",
      "`uvm_error(ID, MSG)",
      "`uvm_warning(ID, MSG)",
      "`uvm_info(ID, MSG, VERBOSITY)"
    ],
    correctAnswer: 0,
    explanation: '`uvm_fatal prints an error message and terminates simulation immediately. `uvm_error increments the error counter (terminating only if the maximum quit count is reached), while info and warning continue.'
  },
  {
    id: 'uvm-q12',
    topicId: 'uvm',
    category: 'Virtual Sequences',
    question: 'When is a Virtual Sequence used in a UVM verification environment?',
    options: [
      'To coordinate and synchronize stimulus sequences across multiple independent interface agents (e.g. PCIe, Ethernet, and AXI).',
      'To simulate analog mixed-signal voltages.',
      'To run simulations without a hardware emulator.',
      'To synthesize testbenches into FPGA logic.'
    ],
    correctAnswer: 0,
    explanation: 'A Virtual Sequence controls multiple subordinate sequencers simultaneously without directly driving pin-level transactions itself, orchestrating complex system-level traffic.'
  },
  {
    id: 'uvm-q13',
    topicId: 'uvm',
    category: 'UVM TLM FIFO',
    question: 'Why is uvm_tlm_analysis_fifo used between a Monitor and a Scoreboard?',
    options: [
      'To buffer incoming broadcast transactions, decoupling the synchronous write() callback from asynchronous scoreboard comparison threads.',
      'To convert analog signals to digital integers.',
      'To compress waveform VCD dumps.',
      'To generate randomized delays.'
    ],
    correctAnswer: 0,
    explanation: 'uvm_tlm_analysis_fifo implements an unbounded FIFO with an analysis export on the input side (for write()) and blocking get ports on the output side, allowing the scoreboard to process items at its own pace.'
  },
  {
    id: 'uvm-q14',
    topicId: 'uvm',
    category: 'Macros',
    question: 'What is the purpose of `uvm_field_int, `uvm_field_object, and `uvm_object_utils macros in a uvm_sequence_item?',
    options: [
      'Automatically implements standard methods such as copy(), clone(), compare(), print(), and pack()/unpack().',
      'Converts class fields into physical synthesis gates.',
      'Automatically generates random constraints.',
      'Directly links variables to Verilog wire nets.'
    ],
    correctAnswer: 0,
    explanation: 'Field macros register member variables with UVM automation tables, providing automatic implementations of deep copy, equality comparison, textual printing, and bit packing without manual code.'
  },
  {
    id: 'uvm-q15',
    topicId: 'uvm',
    category: 'Coverage Closure',
    question: 'What is the industry standard approach to achieving 100% functional coverage in UVM?',
    options: [
      'Coverage-Driven Verification (CDV): monitor coverage metrics from randomized test runs and write targeted sequences for unhit corner-case bins.',
      'Running directed manual testcases only.',
      'Increasing simulation clock frequency.',
      'Disabling all assertion checks.'
    ],
    correctAnswer: 0,
    explanation: 'CDV uses automated constrained-random tests to hit bulk functional bins, tracks coverage holes in coverage reports, and writes targeted sequences with specific constraints to close remaining corner cases.'
  },
  {
    id: 'uvm-q16',
    topicId: 'uvm',
    category: 'RAL (Register Model)',
    question: "What is the difference between 'frontdoor' and 'backdoor' register access in UVM RAL?",
    options: [
      "Frontdoor drives actual physical bus interface protocol transactions (consuming simulation time); Backdoor uses direct simulator DPI/hierarchical references (zero simulation time).",
      "Frontdoor is for write-only; Backdoor is for read-only.",
      "Frontdoor accesses external DRAM; Backdoor accesses internal SRAM.",
      "Backdoor access requires JTAG pins to be toggled."
    ],
    correctAnswer: 0,
    explanation: "Frontdoor access uses the UVM adapter and sequencer to execute physical bus transfers on the DUT interface. Backdoor access uses simulator hierarchical references to directly read/write register memory in zero simulation time."
  },
  {
    id: 'uvm-q17',
    topicId: 'uvm',
    category: 'Config DB Precedence',
    question: "How does 'uvm_config_db' resolve configuration conflicts when both a parent test (top) and an intermediate environment (child) set the same parameter?",
    options: [
      "The set() call made by the component higher in the UVM testbench hierarchy (the parent test) takes precedence by default.",
      "The set() call made most recently in simulation time always wins.",
      "A fatal runtime configuration collision error is thrown.",
      "The child component always overrides the parent test."
    ],
    correctAnswer: 0,
    explanation: "In the UVM configuration database, hierarchical precedence dictates that components closer to the top of the testbench hierarchy (e.g. uvm_test) have higher priority over lower-level components (e.g. uvm_env or uvm_agent)."
  },
  {
    id: 'uvm-q18',
    topicId: 'uvm',
    category: 'Verbosity Control',
    question: "Which UVM verbosity level should be used for messages that must ALWAYS be printed regardless of simulator verbosity settings?",
    options: [
      "UVM_NONE",
      "UVM_LOW",
      "UVM_MEDIUM",
      "UVM_HIGH"
    ],
    correctAnswer: 0,
    explanation: "UVM_NONE (verbosity weight 0) ensures the message is printed under all filter settings, typically reserved for crucial testbench initialization banners or final test summary pass/fail verdicts."
  },
  {
    id: 'uvm-q19',
    topicId: 'uvm',
    category: 'TLM Ports',
    question: "How does a 'uvm_analysis_port' differ from a standard 'uvm_blocking_put_port'?",
    options: [
      "Analysis ports support 1-to-many non-blocking broadcasting (via write()) without backpressure; put ports are 1-to-1 point-to-point connections.",
      "Analysis ports can only send string messages.",
      "Put ports are non-blocking while analysis ports are always blocking.",
      "Analysis ports can only be connected in the build_phase."
    ],
    correctAnswer: 0,
    explanation: "uvm_analysis_port provides a 1-to-many broadcast mechanism without stalling or backpressuring the sender, enabling a single monitor to simultaneously feed coverage collectors, scoreboards, and loggers."
  },
  {
    id: 'uvm-q20',
    topicId: 'uvm',
    category: 'Callbacks',
    question: "What is the primary benefit of using UVM Callbacks (uvm_callback) in VIP (Verification IP) architecture?",
    options: [
      "Allows verification engineers to inject error scenarios or customize component behavior without modifying the original VIP source code.",
      "Speeds up compile times by inlining functions.",
      "Bypasses the UVM phase mechanism.",
      "Converts SystemVerilog testbenches into C++ models."
    ],
    correctAnswer: 0,
    explanation: "UVM Callbacks provide hooks inside VIP methods (e.g., pre_send(), post_send()) where users can register custom derived callback classes to inject packet corruption or corner-case behaviors non-intrusively."
  },

  // ==========================================
  // DFT & PHYSICAL DESIGN (20 QUESTIONS)
  // ==========================================
  {
    id: 'dft-q1',
    topicId: 'dft',
    category: 'Scan Chains',
    question: 'How is a standard D flip-flop modified during Scan Insertion in Design For Testability (DFT)?',
    options: [
      'A multiplexer is added in front of the D input, controlled by a Scan Enable (SE) signal to select between functional data (D) and scan-in data (SI).',
      'An internal clock multiplier is inserted into each register.',
      'The flip-flop is replaced with an analog comparator.',
      'A dedicated ROM look-up table is embedded in each cell.'
    ],
    correctAnswer: 0,
    explanation: 'Scan flip-flops replace standard flip-flops with MUX-D cells: when Scan Enable (SE) = 1, flip-flops connect serially as a shift register (Scan Mode); when SE = 0, normal system functional logic is sampled (Capture Mode).'
  },
  {
    id: 'dft-q2',
    topicId: 'dft',
    category: 'Fault Models',
    question: 'What is the classic Stuck-At Fault model used in ATPG?',
    options: [
      'Models a manufacturing defect where a circuit net is permanently tied to logic 0 (Stuck-At-0) or logic 1 (Stuck-At-1).',
      'Models clock jitter exceeding 50 picoseconds.',
      'Models thermal degradation in packaging.',
      'Models electromigration in power grids.'
    ],
    correctAnswer: 0,
    explanation: 'The stuck-at fault model assumes a physical defect forces a node to permanently behave as logic 0 (SA0) or logic 1 (SA1), independent of upstream drivers.'
  },
  {
    id: 'dft-q3',
    topicId: 'dft',
    category: 'At-Speed Testing',
    question: 'What is the difference between Launch-on-Shift (LOS) and Launch-on-Capture (LOC) in transition delay fault testing?',
    options: [
      'In LOS, the launch transition is triggered on the final scan shift cycle (SE high); in LOC, launch is triggered functionally during capture (SE low).',
      'LOS requires only 1 clock pulse; LOC requires 5 clock pulses.',
      'LOC can only test stuck-at faults; LOS tests memory cells.',
      'LOS is performed exclusively at board level.'
    ],
    correctAnswer: 0,
    explanation: 'LOS triggers the launch pulse during the last shift cycle, requiring Scan Enable to switch at full operational clock speed. LOC triggers launch during the first capture cycle while SE is low, easing at-speed timing constraints on SE routing.'
  },
  {
    id: 'dft-q4',
    topicId: 'dft',
    category: 'JTAG IEEE 1149.1',
    question: 'What are the 4 mandatory pins of an IEEE 1149.1 standard JTAG Test Access Port (TAP)?',
    options: [
      'TCK (Test Clock), TMS (Test Mode Select), TDI (Test Data In), TDO (Test Data Out).',
      'CLK, RST, DATA, ADDR.',
      'TX, RX, CTS, RTS.',
      'MOSI, MISO, SCK, CS.'
    ],
    correctAnswer: 0,
    explanation: 'IEEE 1149.1 mandates TCK (clock), TMS (mode select state control), TDI (serial data input), and TDO (serial data output). TRST (asynchronous reset) is optional.'
  },
  {
    id: 'dft-q5',
    topicId: 'dft',
    category: 'JTAG TAP Controller',
    question: 'How many states exist in the IEEE 1149.1 JTAG TAP Controller finite state machine, and which state is guaranteed after 5 consecutive TMS=1 clock cycles?',
    options: [
      '16 states; Test-Logic-Reset',
      '8 states; Shift-DR',
      '32 states; Capture-IR',
      '4 states; Run-Test/Idle'
    ],
    correctAnswer: 0,
    explanation: 'The JTAG TAP controller has exactly 16 states. Holding TMS high for 5 consecutive rising TCK edges forces the controller into the safe Test-Logic-Reset state from any starting state.'
  },
  {
    id: 'dft-q6',
    topicId: 'dft',
    category: 'BIST',
    question: 'What are the core components of a Logic Built-In Self-Test (LBIST) architecture?',
    options: [
      'LFSR (Linear Feedback Shift Register for pseudo-random pattern generation) and MISR (Multiple Input Signature Register for response compaction).',
      'A Microcontroller and an EEPROM.',
      'An analog oscilloscope and DAC.',
      'A high-speed DDR memory controller.'
    ],
    correctAnswer: 0,
    explanation: 'LBIST generates autonomous test patterns using an on-chip PRPG (LFSR) and compacts circuit responses into a golden diagnostic signature using an on-chip MISR.'
  },
  {
    id: 'dft-q7',
    topicId: 'dft',
    category: 'Memory BIST (MBIST)',
    question: 'Why is the March C- algorithm widely utilized in embedded SRAM BIST engines?',
    options: [
      'Provides O(N) linear time complexity while achieving 100% coverage of address decoder faults, stuck-at faults, transition faults, and coupling faults.',
      'Requires only 1 clock cycle to test a 1GB RAM.',
      'Tests flash memory retention for 10 years.',
      'Works without read or write operations.'
    ],
    correctAnswer: 0,
    explanation: 'March C- executes a sequence of March elements (write 0, read 0 write 1, read 1 write 0...) in 10N operations, completely detecting address decoder, stuck-at, transition, and unlinked inversion/state coupling faults.'
  },
  {
    id: 'dft-q8',
    topicId: 'dft',
    category: 'Scan Compression',
    question: 'What problem does Scan Compression (e.g. Synopsys TestKompress, Cadence OPMISR) solve in modern complex SoCs?',
    options: [
      'Reduces test data volume and tester time by 10x-100x using on-chip decompressors and compactors with few external ATE pins.',
      'Eliminates the need for scan flip-flops.',
      'Increases silicon area overhead by 50%.',
      'Replaces functional verification testbenches.'
    ],
    correctAnswer: 0,
    explanation: 'Scan compression uses on-chip decompressors to expand a few ATE input channels into hundreds of internal short scan chains, and spatial/MISR compactors to reduce outputs, drastically cutting Automated Test Equipment (ATE) test costs.'
  },
  {
    id: 'dft-q9',
    topicId: 'dft',
    category: 'JTAG Instructions',
    question: 'Which mandatory JTAG instruction connects the 1-bit BYPASS register between TDI and TDO, allowing fast shifting through unselected chips on a board?',
    options: [
      'BYPASS (all 1s in instruction register)',
      'EXTEST',
      'SAMPLE/PRELOAD',
      'IDCODE'
    ],
    correctAnswer: 0,
    explanation: 'The BYPASS instruction (opcode all 1s) selects the 1-bit Bypass Register, minimizing shifting latency through non-target chips on a multi-chip PCB scan chain.'
  },
  {
    id: 'dft-q10',
    topicId: 'dft',
    category: 'Lockup Latches',
    question: 'Why must Lockup Latches be inserted when stitching scan chains that cross from one clock domain to another?',
    options: [
      'To prevent scan shift race conditions caused by clock skew between domains during serial shifting.',
      'To convert digital bits to analog voltages.',
      'To double the shift frequency.',
      'To store test results across power cycles.'
    ],
    correctAnswer: 0,
    explanation: 'During scan shifting, clock skew between domain boundaries can cause hold-time violations where data passes through multiple flip-flops in one cycle. An active-low lockup latch holds the data for half a cycle, guaranteeing clean timing.'
  },
  {
    id: 'dft-q11',
    topicId: 'dft',
    category: 'IDDQ Testing',
    question: 'What is the principle behind IDDQ (Quiescent Supply Current) testing in CMOS circuits?',
    options: [
      'A defect-free static CMOS circuit draws virtually zero DC current; bridging or gate-oxide leakage defects cause elevated quiescent supply current.',
      'Measures AC dynamic switching power at 5GHz.',
      'Checks input impedance on analog pins.',
      'Measures temperature during thermal throttling.'
    ],
    correctAnswer: 0,
    explanation: 'In steady-state (quiescent) conditions, CMOS gates have no direct VDD-to-GND path, drawing only minute leakage. Short-circuit or bridging defects create direct current paths, easily detected by monitoring quiescent current IDDQ.'
  },
  {
    id: 'dft-q12',
    topicId: 'dft',
    category: 'ATPG Algorithms',
    question: 'Which ATPG algorithm pioneered path-oriented decision making using backtracing to assign primary inputs for fault justification?',
    options: [
      'PODEM (Path-Oriented Decision Making)',
      'D-Algorithm',
      'Quine-McCluskey',
      'Dijkstra Algorithm'
    ],
    correctAnswer: 0,
    explanation: 'PODEM solves D-Algorithm\'s backtracking explosion on XOR-heavy circuits by searching only in the primary input space and backtracing objectives from internal gates to primary inputs.'
  },
  {
    id: 'dft-q13',
    topicId: 'dft',
    category: 'Test Coverage',
    question: 'How is Test Coverage mathematically defined in DFT ATPG reports?',
    options: [
      'Test Coverage = (Detected Faults) / (Total Faults - Undetectable Faults)',
      'Test Coverage = (Detected Faults) / (Total Faults)',
      'Test Coverage = (Undetectable Faults) / (Total Faults)',
      'Test Coverage = (Passed Testcases) / (Total Testcases)'
    ],
    correctAnswer: 0,
    explanation: 'Fault Coverage is (Detected / Total), but Test Coverage excludes intrinsically undetectable faults (e.g. redundant logic, tied pins), accurately assessing how well the ATPG tool tested all testable faults.'
  },
  {
    id: 'dft-q14',
    topicId: 'dft',
    category: 'Boundary Scan',
    question: 'What is the primary objective of IEEE 1149.1 Boundary Scan on high-density circuit boards?',
    options: [
      'Tests interconnect soldering continuity and shorts between IC pins on a PCB without requiring physical bed-of-nails probe fixtures.',
      'Tests FPGA internal SRAM cells.',
      'Calibrates RF antennas on PCB boards.',
      'Programs onboard microcontroller firmware.'
    ],
    correctAnswer: 0,
    explanation: 'Boundary scan places a shift register cell on every physical device pin, allowing automated electrical testing of board-level solder joints, open traces, and bridging shorts via the serial 4-pin JTAG bus.'
  },
  {
    id: 'dft-q15',
    topicId: 'dft',
    category: 'IEEE 1687 (IJTAG)',
    question: 'What standard governs access to internal on-chip instrumentation, health sensors, and IP test monitors via dynamic reconfigurable scan networks?',
    options: [
      'IEEE 1687 (IJTAG - Internal JTAG)',
      'IEEE 802.11',
      'IEEE 754',
      'IEEE 1394 FireWire'
    ],
    correctAnswer: 0,
    explanation: 'IEEE 1687 (IJTAG) standardizes access to embedded instruments (thermal monitors, PLL status, voltage sensors, SerDes BIST) via Segment Insertion Bits (SIBs) that dynamically configure scan path lengths.'
  },
  {
    id: 'dft-q16',
    topicId: 'dft',
    category: 'Delay Fault Testing',
    question: "What is the primary difference between Transition Fault Testing (Slow-to-Rise / Slow-to-Fall) and Path Delay Fault Testing?",
    options: [
      "Transition fault testing assumes a gross localized lumped delay defect at a single gate/net; Path delay fault testing verifies the cumulative distributed delay across a specific pre-selected critical timing path.",
      "Path delay fault testing only checks static stuck-at-0 faults.",
      "Transition fault testing requires analog probes.",
      "Path delay fault testing is only performed at wafer sort."
    ],
    correctAnswer: 0,
    explanation: "Transition fault ATPG targets gross localized timing defects at individual nodes using standard scan patterns. Path delay testing targets critical timing paths across multiple logic stages where accumulated small delay variations could cause timing violations at operating frequency."
  },
  {
    id: 'dft-q17',
    topicId: 'dft',
    category: 'At-Speed Scan',
    question: "In at-speed transition fault testing, why is Launch-on-Capture (Broadside / LOC) often preferred over Launch-on-Shift (LOS)?",
    options: [
      "LOC generates the launch transition using functional clocking, avoiding the need for the Scan Enable (SE) signal to switch at full operational clock speed across the entire chip.",
      "LOC uses 10x fewer test vectors than LOS.",
      "LOS cannot test combinational gates.",
      "LOC eliminates the need for scan chains."
    ],
    correctAnswer: 0,
    explanation: "In Launch-on-Shift (LOS), the launch pulse occurs during the final shift cycle, requiring Scan Enable (SE) to switch from 1 to 0 at gigahertz operational speeds. In Launch-on-Capture (LOC), SE changes slowly before two high-speed capture pulses are fired."
  },
  {
    id: 'dft-q18',
    topicId: 'dft',
    category: 'Scan Architecture',
    question: "Why is Scan Chain Balancing crucial during physical scan insertion in DFT?",
    options: [
      "It equalizes the number of flip-flops across all parallel scan chains, minimizing the maximum scan chain length and thus reducing total ATE test time.",
      "It ensures all clock domains run at the same frequency.",
      "It prevents dynamic voltage drops on power rails.",
      "It reduces total chip gate count."
    ],
    correctAnswer: 0,
    explanation: "The total number of shift cycles required to load/unload a test vector on the ATE is dictated by the longest scan chain in the design. Balancing chain depths evenly maximizes test efficiency and shortens tester time per chip."
  },
  {
    id: 'dft-q19',
    topicId: 'dft',
    category: 'Memory BIST (MBIST)',
    question: "Why is the March C- algorithm widely adopted for embedded SRAM Memory Built-In Self-Test (MBIST)?",
    options: [
      "Provides 10N complexity and achieves 100% test coverage for stuck-at, transition, address decoder, and inversion/idempotent coupling faults.",
      "It is the only algorithm that tests DRAM refresh rates.",
      "Requires zero hardware logic to implement.",
      "Tests only read operations without writing memory."
    ],
    correctAnswer: 0,
    explanation: "March C- is an industry-standard MBIST algorithm with computational complexity of $10N$ operations (where $N$ is word count) that guarantees complete detection of stuck-at, transition, address decoder, and state/inversion coupling faults."
  },
  {
    id: 'dft-q20',
    topicId: 'dft',
    category: 'Logic BIST (LBIST)',
    question: "What are the two core hardware building blocks of an on-chip Logic Built-In Self-Test (LBIST) architecture?",
    options: [
      "A Pseudo-Random Pattern Generator (PRPG using an LFSR) for stimulus generation and a Multiple Input Signature Register (MISR) for output response compaction.",
      "A digital voltmeter and an oscilloscope ADC.",
      "A Flash ADC and a DAC.",
      "A microcontroller core and a SPI flash memory."
    ],
    correctAnswer: 0,
    explanation: "LBIST self-tests logic without external ATE vectors using a PRPG (LFSR-based pseudo-random generator with phase shifter) to feed scan chains and a MISR (Multiple Input Signature Register) to compress the output responses into a final golden signature."
  }
];
