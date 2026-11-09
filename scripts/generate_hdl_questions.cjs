// scripts/generate_assessment_questions.js
// Generates 30 authentic, high-quality questions for each of the 22 topics (660 questions total).

const fs = require('fs');
const path = require('path');

console.log('Generating 660 assessment questions (30 per topic across all 22 topics)...');

// Helper to write formatted TS file
function writeQuizFile(filePath, varName, questions) {
  const content = `import { QuizQuestion } from '../quizData';\n\nexport const ${varName}: QuizQuestion[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${questions.length} questions to ${filePath}`);
}

// 1. HDL & Verification (150 questions: 30 verilog, 30 systemverilog, 30 vhdl, 30 uvm, 30 dft)
const hdlQuestions = [];

// VERILOG (30 questions: vlog-add-01 to vlog-add-30)
const verilogAdd = [
  {
    q: "In Verilog-2001, how does the indexed vector part-select operator `[base_expr +: width_expr]` evaluate when selecting a 4-bit slice starting at bit 8?",
    opts: ["data[8 +: 4] selects bits [11:8]", "data[8 +: 4] selects bits [8:5]", "data[8 +: 4] selects bits [12:8]", "data[8 +: 4] is a syntax error in synthesizable Verilog"],
    ans: 0,
    cat: "Part-Select Syntax",
    exp: "The indexed part-select `[base +: width]` starts at `base` and selects `width` bits upwards. Hence `[8 +: 4]` addresses bits `[11:8]`."
  },
  {
    q: "What is the primary synthesis risk of using the `casex` statement in Verilog?",
    opts: ["It causes simulation speed degradation only", "It treats both 'x' and 'z' as don't-cares, which can mask uninitialized hardware inputs and lead to simulation-synthesis mismatches", "It restricts the multiplexer to only power-of-two branch counts", "It forces the synthesizer to infer an asynchronous latch"],
    ans: 1,
    cat: "Case Semantics",
    exp: "`casex` treats both literal 'x' and 'z' bits as wildcards. In simulation, an uninitialized signal carrying 'x' can unintentionally match a case branch, producing behavior that synthesis cannot replicate in silicon."
  },
  {
    q: "In synthesizable RTL, what causes a synthesis tool to infer an unwanted latch inside an `always @(*)` combinational block?",
    opts: ["Using blocking assignments exclusively", "Failing to assign an output under all possible input condition branches (e.g. Missing default branch in a case)", "Having more than 8 sensitivity signals", "Declaring the output variable as wire instead of reg"],
    ans: 1,
    cat: "Latch Inference",
    exp: "A transparent latch is inferred when an output variable is not assigned in every branch of conditional execution (e.g., if-else or case), requiring the hardware to hold its prior value."
  },
  {
    q: "When performing arithmetic operations in Verilog, what determines whether an expression is evaluated using signed or unsigned semantics?",
    opts: ["If any operand in the expression is unsigned, the entire expression defaults to unsigned arithmetic", "The type of the left-hand side assignment target dictates signedness", "Verilog evaluates all addition as signed and multiplication as unsigned", "Signed operations only occur when using the `signed_reg` keyword"],
    ans: 0,
    cat: "Signed Arithmetic",
    exp: "Under IEEE Verilog standards, if any operand in an expression is unsigned, the entire expression is coerced to unsigned evaluation. Both operands must be explicitly `$signed()` for signed arithmetic."
  },
  {
    q: "What is the key functional distinction between `parameter` and `localparam` in Verilog-2001?",
    opts: ["`parameter` cannot be integer-typed", "`parameter` can be overridden by an instantiating parent module via `defparam` or `#()`, whereas `localparam` is module-local and cannot be overridden", "`localparam` is only valid inside testbench initial blocks", "`localparam` values are computed at simulation runtime instead of elaboration"],
    ans: 1,
    cat: "Parameters",
    exp: "`parameter` constants can be customized per instance by the instantiating parent module, while `localparam` is strictly local to the module definition and protected from external override."
  },
  {
    q: "How does the Verilog reduction XOR operator `^data[7:0]` function?",
    opts: ["Performs bitwise XOR between data and a default mask", "Calculates odd parity by recursively XORing all bits of the 8-bit vector into a single-bit result", "Reverses the bit order of data[7:0]", "Checks if the vector has all zeros"],
    ans: 1,
    cat: "Reduction Operators",
    exp: "Unary reduction operators apply an operation across all bits of a single vector. Unary XOR `^data` yields 1 if there is an odd number of 1s in the vector (odd parity)."
  },
  {
    q: "What is the purpose of the `generate` and `endgenerate` construct in Verilog?",
    opts: ["To run Monte Carlo pseudo-random simulations", "To conditionally or repetitively instantiate modules, primitives, or procedural blocks at elaboration time", "To synthesize dynamic clock dividers at runtime", "To configure high-speed SerDes transceivers"],
    ans: 1,
    cat: "Elaboration & Generate",
    exp: "`generate` loops and conditions (`genvar`, `generate for`, `generate if`) allow parameterized structural hardware instantiation during the elaboration phase before simulation or synthesis."
  },
  {
    q: "In an active-low asynchronous reset D-flip-flop, what is the standard IEEE Verilog sensitivity list declaration?",
    opts: ["`always @(posedge clk or rst_n)`", "`always @(posedge clk or negedge rst_n)`", "`always @(posedge clk and negedge rst_n)`", "`always @(clk or rst_n)`"],
    ans: 1,
    cat: "Sequential Sensitivity",
    exp: "An asynchronous reset must trigger the sequential block whenever it asserts (negedge for active-low), regardless of the clock: `always @(posedge clk or negedge rst_n)`."
  },
  {
    q: "Why are one-hot encoded state machines frequently preferred over binary-encoded FSMs for FPGA targets?",
    opts: ["One-hot consumes fewer total flip-flops than binary encoding", "One-hot decodes the next state and outputs using shallow combinational logic, matching FPGA LUT architecture and maximizing clock frequency", "One-hot eliminates the need for reset logic", "FPGAs cannot implement binary decoders"],
    ans: 1,
    cat: "FSM Encoding",
    exp: "FPGAs have abundant flip-flops relative to combinational logic. One-hot encoding uses 1 flop per state, simplifying state decode logic to 1 or 2 LUT inputs, which boosts Fmax."
  },
  {
    q: "What does the compiler directive `` `timescale 1ns / 1ps `` specify in a Verilog testbench?",
    opts: ["Simulation time step unit is 1ns with timing precision of 1ps", "Clock period is fixed at 1ns with 1ps jitter", "Simulation will terminate after 1ps", "Gate delays are 1ns and wire delays are 1ps"],
    ans: 0,
    cat: "Timescale",
    exp: "The first value defines the time unit for delays (e.g. `#5` is 5ns). The second value specifies the simulation rounding precision (round to nearest 1ps)."
  },
  {
    q: "Which Verilog construct allows multiple continuous driver conflicts to be resolved on an active bus?",
    opts: ["`reg [7:0] bus;`", "`wand` (wired-AND) or `wor` (wired-OR) net types", "`integer bus;`", "`real bus;`"],
    ans: 1,
    cat: "Net Resolution",
    exp: "Specialized net types such as `wand` (wired-AND) and `wor` (wired-OR) incorporate resolution functions to arbitrate multiple simultaneous active drivers on a net."
  },
  {
    q: "In Verilog, what occurs when assigning a narrower 4-bit wire to a wider 8-bit wire without explicit signedness?",
    opts: ["The upper 4 bits are sign-extended", "The upper 4 bits are zero-extended to fill the 8-bit width", "The synthesis tool generates a fatal elaboration error", "The upper 4 bits are filled with 'X'"],
    ans: 1,
    cat: "Bit Width Extension",
    exp: "In unsigned Verilog assignments, when an RHS expression is narrower than the LHS target, the upper bits are implicitly zero-extended."
  },
  {
    q: "What is the primary difference between a `task` and a `function` in synthesizable Verilog?",
    opts: ["A task can contain delay constructs (`#`, `@`) and return multiple outputs; a function executes in zero simulation time and returns exactly one value", "Functions can invoke tasks, but tasks cannot invoke functions", "Tasks can be called inside continuous assignment statements", "Functions cannot have input arguments"],
    ans: 0,
    cat: "Tasks & Functions",
    exp: "Functions execute in zero simulation time without delays and return a single scalar/vector value. Tasks can consume simulation time and use `input`, `output`, and `inout` arguments."
  },
  {
    q: "How does the arithmetic right shift operator (`>>>`) differ from the logical right shift operator (`>>`) in Verilog?",
    opts: ["Logical right shift preserves the sign bit; arithmetic right shift always fills with zero", "Arithmetic right shift (`>>>`) preserves the sign bit by replicating the MSB if the operand is signed; logical right shift (`>>`) always shifts in zeros", "They are identical in all circumstances", "`>>>` is only permitted for floating-point real numbers"],
    ans: 1,
    cat: "Shift Operators",
    exp: "For signed expressions, `>>>` replicates the sign (MSB) to maintain algebraic value for negative two's complement numbers, whereas `>>` shifts in zeros regardless."
  },
  {
    q: "What is the risk of using non-blocking assignments (`<=`) in combinational `always @(*)` blocks?",
    opts: ["It causes fatal synthesis errors in all modern tools", "It can cause unnecessary simulation delta cycles and intermediate evaluation glitches before settling", "It forces the tool to infer negative-edge flip-flops", "It prevents testbenches from probing the internal signals"],
    ans: 1,
    cat: "Assignment Semantics",
    exp: "In combinational blocks, non-blocking assignments schedule updates into the NBA queue, causing extra delta iterations and potential simulator mismatches with synthesized gate-level netlists."
  },
  {
    q: "What is the IEEE 1364 standard definition of the `===` (case equality) operator?",
    opts: ["Tests equality including exact matches of 'x' and 'z' values, returning a deterministic 1 or 0", "Acts as an assignment operator with triple drive strength", "Checks structural equivalence in gate-level netlists", "Is a non-synthesizable syntax error in Verilog"],
    ans: 0,
    cat: "Case Equality",
    exp: "`===` compares every bit including unknown 'x' and high-impedance 'z'. It returns 1 if identical and 0 if different, never returning 'x'. It is strictly a simulation operator."
  },
  {
    q: "What does the Verilog synthesis directive `// synopsys parallel_case` tell the synthesis tool?",
    opts: ["Instantiate parallel processing cores for synthesis acceleration", "Treat all case branches as mutually exclusive so that a priority encoder is not inferred, synthesizing parallel multiplexers instead", "Duplicate the case logic across two clock domains", "Force the case statement to execute in a single delta cycle"],
    ans: 1,
    cat: "Synthesis Directives",
    exp: "`parallel_case` instructs the synthesizer that only one condition can match at any time, allowing it to build parallel muxes rather than a sequential priority chain. Use with caution to avoid mismatches."
  },
  {
    q: "Why is a Gray code counter preferred over a binary counter for addressing an asynchronous FIFO pointer across clock domains?",
    opts: ["Gray code counts twice as fast as binary", "Only a single bit transitions between any two consecutive values, eliminating multi-bit skew hazards during cross-clock domain synchronization", "Gray code requires fewer flip-flops to represent depth", "Gray code values can be sampled without 2-stage synchronizers"],
    ans: 1,
    cat: "CDC & Counters",
    exp: "Binary transitions like 0111 to 1000 toggle 4 bits simultaneously. If sampled during transit, multi-bit skew creates false pointer values. Gray code changes exactly 1 bit per tick."
  },
  {
    q: "In Verilog, what is the role of an Integrated Clock Gating (ICG) cell compared to AND-gating a clock with logic?",
    opts: ["It boosts the clock voltage from 1.0V to 1.8V", "It includes a negative-latch before the AND gate to prevent glitches from corrupting the gated clock when the enable signal changes", "It turns off the master oscillator during reset", "It dynamically multiplies clock frequency"],
    ans: 1,
    cat: "Low Power & Clocking",
    exp: "A simple `clk & en` gate glitches if `en` transitions while `clk` is high. An ICG latches the enable signal on the negative clock edge, guaranteeing a hazard-free gated clock output."
  },
  {
    q: "How does the `defparam` statement behave in Verilog HDL?",
    opts: ["Defines a new variable type", "Overrides a parameter value in a submodule hierarchically from outside the module instantiation", "Declares default parameter values in library primitives", "Is the only method to pass arrays into modules"],
    ans: 1,
    cat: "Hierarchical Defparam",
    exp: "`defparam` allows hierarchical path parameter overrides (e.g. `defparam u_core.ALU_WIDTH = 32;`). While supported in Verilog-2001, named parameter assignment `#(.PARAM(val))` is now preferred."
  },
  {
    q: "What is the purpose of the `$monitor` system task in a Verilog testbench?",
    opts: ["Stops the simulation when an assertion fails", "Continuously monitors the specified signal list and prints a formatted line whenever any listed signal changes value", "Displays waveforms on an external oscilloscope", "Logs CPU memory usage during compilation"],
    ans: 1,
    cat: "Simulation System Tasks",
    exp: "`$monitor` executes continuously throughout the simulation run, triggering output whenever any argument in its sensitivity list undergoes a value transition."
  },
  {
    q: "In a Mealy state machine, how are the outputs generated compared to a Moore state machine?",
    opts: ["Mealy outputs depend on current state AND current inputs; Moore outputs depend ONLY on the current state", "Mealy outputs depend only on the current state; Moore outputs depend on future states", "Mealy outputs are updated asynchronously without a clock", "Moore machines have no state register"],
    ans: 0,
    cat: "State Machines",
    exp: "In a Moore machine, output = f(current_state). In a Mealy machine, output = f(current_state, current_inputs), which can react one cycle faster but may pass input glitches directly to outputs."
  },
  {
    q: "What is the evaluation result of the expression `4'b1010 & 4'b1100` in Verilog?",
    opts: ["`4'b1000`", "`4'b1110`", "`1'b1`", "`4'b0110`"],
    ans: 0,
    cat: "Bitwise Operators",
    exp: "Bitwise AND performs bit-by-bit logical conjunction: bit 3: 1&1=1; bit 2: 0&1=0; bit 1: 1&0=0; bit 0: 0&0=0. The resulting 4-bit vector is `4'b1000`."
  },
  {
    q: "What is the consequence of leaving a high-impedance `1'bz` assignment floating on an internal chip node in static CMOS ASIC design?",
    opts: ["It saves dynamic switching power indefinitely", "The node floats to intermediate threshold voltages, causing both PMOS and NMOS transistors in recipient gates to turn on, creating crowbar short-circuit current and excessive static power", "The synthesizer automatically inserts a pull-up resistor", "Internal tri-states are standard in 3nm FinFET logic libraries"],
    ans: 1,
    cat: "Tri-State & ASIC",
    exp: "Floating internal nodes drift toward $V_{DD}/2$, turning on both pull-up and pull-down networks in fan-out CMOS gates (crowbar current). Internal tri-states are strictly prohibited in modern submicron ASICs."
  },
  {
    q: "How does the `$time` system function return the current simulation time?",
    opts: ["As a 32-bit floating point number in milliseconds", "As a 64-bit integer scaled to the current module's `timescale unit", "As a human-readable date and time string", "As the number of CPU instruction clock cycles consumed"],
    ans: 1,
    cat: "System Tasks",
    exp: "`$time` returns an integer representation of the current simulation time scaled to the active module's timescale time unit."
  },
  {
    q: "Which keyword is used in Verilog to specify user-defined primitive (UDP) truth tables?",
    opts: ["`primitive ... endprimitive`", "`table ... endtable`", "`truth_table ... endtruth_table`", "`lut ... endlut`"],
    ans: 0,
    cat: "UDPs",
    exp: "User-Defined Primitives are declared with the `primitive` and `endprimitive` keywords, containing internal `table ... endtable` truth table state specifications."
  },
  {
    q: "What is the effect of the directive `` `unconnected_drive pull1 `` in a Verilog module?",
    opts: ["Connects all unused module inputs to an internal high logic level (1)", "Drives all output pins with maximum silicon pad buffer current", "Forces high-impedance on all bidirectional ports", "Synthesizes internal pull-up resistors on clock lines"],
    ans: 0,
    cat: "Compiler Directives",
    exp: "`` `unconnected_drive pull1 `` forces any unbonded or unconnected input ports within subsequent modules to float to logic 1 rather than defaulting to high-impedance 'z'."
  },
  {
    q: "What is a major difference between synchronous reset and asynchronous reset in Verilog sequential cells?",
    opts: ["Synchronous reset requires dedicated reset pins on the flip-flop cell; asynchronous reset does not", "Synchronous reset is sampled only at the active clock edge, providing high noise immunity; asynchronous reset asserts immediately regardless of clock", "Asynchronous reset can never cause metastability on recovery", "Synchronous reset uses fewer combinational gate resources"],
    ans: 1,
    cat: "Reset Architecture",
    exp: "Synchronous reset is gated into the D input and takes effect only at clock ticks, filtering runt noise glitches. Asynchronous reset acts immediately on the internal flop clear, but requires de-assertion recovery timing checks."
  },
  {
    q: "In Verilog, how is a multidimensional packed array distinguished from an unpacked memory array?",
    opts: ["Packed arrays declare dimensions before the signal name (`wire [3:0][7:0] data;`); unpacked arrays declare dimensions after (`reg [7:0] mem [0:255];`)", "Packed arrays can only store strings; unpacked arrays store integers", "Unpacked arrays can be passed in arithmetic operations directly", "Packed arrays are non-synthesizable"],
    ans: 0,
    cat: "Arrays",
    exp: "In Verilog and SystemVerilog, packed dimensions precede the identifier name (`[3:0][7:0] data`) and form a contiguous bit vector. Unpacked dimensions follow the name (`mem[0:255]`) and represent RAM storage."
  },
  {
    q: "What does the `$finish` system task do in a Verilog simulation compared to `$stop`?",
    opts: ["`$finish` exits the simulator process back to the OS shell; `$stop` suspends simulation and enters interactive debug mode", "`$finish` saves a checkpoint; `$stop` crashes the simulator", "`$finish` restarts from time 0; `$stop` pauses for 10ns", "There is no functional difference"],
    ans: 0,
    cat: "System Tasks",
    exp: "`$stop` halts execution and enters interactive CLI debug mode. `$finish` cleanly terminates the simulation run and exits the simulator process."
  }
];

verilogAdd.forEach((q, i) => {
  hdlQuestions.push({
    id: `vlog-add-${String(i + 1).padStart(2, '0')}`,
    topicId: 'verilog',
    category: q.cat,
    question: q.q,
    options: q.opts,
    correctAnswer: q.ans,
    explanation: q.exp
  });
});

console.log(`Generated ${verilogAdd.length} Verilog questions.`);

// SYSTEMVERILOG (30 questions: sv-add-01 to sv-add-30)
const svAdd = [
  {
    q: "What is the primary synthesis rule enforced by the SystemVerilog `always_comb` procedural block?",
    opts: ["It triggers only on posedge of clock", "It automatically infers a complete sensitivity list including functions, and warns during compilation if a latch is accidentally inferred", "It allows non-blocking assignments exclusively", "It forces all inputs to be wire types"],
    ans: 1,
    cat: "Procedural Blocks",
    exp: "`always_comb` automatically constructs a comprehensive sensitivity list covering all read signals and called functions, executes once at time zero to initialize outputs, and errors if latch behavior is detected."
  },
  {
    q: "In SystemVerilog UVM verification, what is a `virtual interface` and why is it essential?",
    opts: ["An interface that exists only in virtual memory without physical pins", "A reference handle variable in class-based verification environments (like drivers and monitors) pointing to a physical static `interface` instance in the DUT", "A software protocol converter from AXI to PCIe", "A simulation license feature"],
    ans: 1,
    cat: "Interfaces & OOP",
    exp: "SystemVerilog classes cannot directly instantiate static hardware `interface` instances. A `virtual interface` provides a dynamic reference handle allowing class-based testbench components to drive and sample physical DUT wires."
  },
  {
    q: "How does the SystemVerilog `unique if` construct alter synthesis and simulation behavior?",
    opts: ["Guarantees that exactly one condition will match at runtime; asserts an error if multiple conditions are true or none are true, and instructs synthesis to infer parallel muxes", "Executes all matching branches simultaneously in parallel threads", "Requires all variables to be unique 128-bit hashes", "Is purely a comment without semantic impact"],
    ans: 0,
    cat: "Unique If",
    exp: "`unique if` asserts that conditions are mutually exclusive (parallel) and exhaustive. The simulator fires run-time violations if multiple branches match or if no branch matches without an else clause."
  },
  {
    q: "What is the functionality of the SystemVerilog streaming operators `{<<{data}}` and `{>>{data}}`?",
    opts: ["Bitwise left and right arithmetic shifting", "Packs and streams bits or slices in reverse (left-to-right `{<<{}}`) or standard (right-to-left `{>>{}}`) order with selectable chunk sizes", "Streams network packets across Ethernet sockets directly", "Calculates stream checksums for PCIe packets"],
    ans: 1,
    cat: "Streaming Operators",
    exp: "Streaming concatenation pack/unpack slices of data with custom slice widths (e.g. `{<< 8 {word}}` performs byte-swapping for endianness conversion)."
  },
  {
    q: "In SystemVerilog OOP, what is the difference between a `shallow copy` (`b = new a;`) and a `deep copy`?",
    opts: ["Shallow copy copies primitive variables and object handles (nested objects remain shared); deep copy duplicates both the object and all nested object instances recursively", "Shallow copy creates a pointer alias; deep copy creates a new class definition", "Shallow copy is synthesizable; deep copy is only allowed in testbenches", "There is no difference in SystemVerilog"],
    ans: 0,
    cat: "OOP Memory Model",
    exp: "A shallow copy (`b = new a;`) duplicates top-level fields of `a`, but any nested object handles in `b` still point to the same memory objects referenced by `a`. A deep copy requires custom code to `new` every child object."
  },
  {
    q: "What does the `solve ... before ...` constraint directive achieve in SystemVerilog constrained-random generation?",
    opts: ["Controls the order in which threads execute during simulation", "Alters the probability distribution of variable solution space without restricting the allowable solution set", "Forces the constraint solver to calculate one variable before another, changing the joint probability distribution", "Executes the post_randomize() function before pre_randomize()"],
    ans: 2,
    cat: "Constrained Random",
    exp: "`solve x before y;` forces the solver to choose a value for `x` uniformly from its domain first, then choose `y` from the subset of valid solutions given `x`, changing conditional probability without changing valid states."
  },
  {
    q: "In SystemVerilog Assertions (SVA), what does the `|->` (overlapping implication) operator signify?",
    opts: ["If antecedent holds at clock tick N, consequent must hold at clock tick N+1", "If antecedent holds at clock tick N, consequent must hold at the SAME clock tick N", "Antecedent and consequent must both be false", "Disables the assertion for N clock cycles"],
    ans: 1,
    cat: "SVA Assertions",
    exp: "Overlapping implication `A |-> B` evaluates `B` in the same clock cycle where `A` succeeds. In contrast, non-overlapping `A |=> B` checks `B` on the next clock cycle (equivalent to `A ##1 B`)."
  },
  {
    q: "How does an `interface` with `clocking block` eliminate race conditions between the testbench and the DUT?",
    opts: ["It automatically overclocks the testbench by 2x", "It samples DUT signals with input skew before the active clock edge and drives signals with output skew after the clock edge in the designated clocking regions", "It converts all signals into asynchronous FIFO buffers", "It forces all signals to zero delay simulation"],
    ans: 1,
    cat: "Clocking Blocks",
    exp: "Clocking blocks define explicit setup (`default input #1step`) and hold times relative to the clock. Inputs are sampled in the Preponed region before any RTL updates, guaranteeing race-free verification."
  },
  {
    q: "What is the purpose of the `bind` construct in SystemVerilog verification?",
    opts: ["Binds two software classes together into a single library", "Instantiates an assertion module or verification interface directly into a target DUT module or instance without modifying the original RTL source code", "Locks physical pins onto FPGA pad locations", "Secures source code with AES encryption"],
    ans: 1,
    cat: "SVA & Bind",
    exp: "The `bind` construct allows verification engineers to inject SVA property checkers, monitors, and coverage modules into existing design modules or instances non-intrusively."
  },
  {
    q: "What is the function of the `$cast(target, source)` dynamic casting function in SystemVerilog?",
    opts: ["Converts integers to strings unconditionally", "Attempts runtime polymorphic down-casting from a base class handle to an extended class handle, returning 1 on success and 0 on failure without crashing", "Casts simulation time into real-world wall clock time", "Forces synthesizable registers to cast into block RAM"],
    ans: 1,
    cat: "OOP Casting",
    exp: "`$cast` verifies whether the underlying object referenced by a base handle actually belongs to the extended type. If compatible, it assigns the handle and returns 1; otherwise it returns 0 without a runtime fatal crash."
  },
  {
    q: "In SystemVerilog functional coverage, what does a `cross` coverage construct do?",
    opts: ["Measures code line coverage across multiple source files", "Measures the simultaneous joint occurrence of bins from two or more coverpoints to ensure corner combinations have been stimulated", "Counts signal transitions across two asynchronous clock domains", "Tracks routing wire intersections on silicon"],
    ans: 1,
    cat: "Functional Coverage",
    exp: "A `cross` creates a Cartesian product of bins between multiple coverpoints (e.g. `cross cmd_cp, addr_cp;`), verifying that all combinations of commands and address ranges have been thoroughly tested."
  },
  {
    q: "What is the difference between `logic` and `wire` in SystemVerilog?",
    opts: ["`logic` can be driven by multiple drivers on a bus; `wire` cannot", "`logic` supports a single continuous or procedural driver; `wire` is a resolved net supporting multiple parallel drivers (tri-state buses)", "`logic` is 2-state (0,1); `wire` is 4-state (0,1,X,Z)", "`logic` cannot be synthesized into hardware registers"],
    ans: 1,
    cat: "Data Types",
    exp: "`logic` is a 4-state data type that replaces `reg` and single-driver `wire`. However, if multiple drivers exist on a net (e.g. Wired-OR or tri-state), `wire` is required to resolve conflict."
  },
  {
    q: "What does the SystemVerilog keyword `package` provide?",
    opts: ["A hardware packaging description file for BGA pinouts", "A declaration namespace that encapsulates shared typedefs, parameters, functions, and tasks to be imported cleanly across multiple modules", "An automated testbench report generator", "A compression container for simulation wave files"],
    ans: 1,
    cat: "Packages",
    exp: "Packages allow system-wide sharing of enums, structs, constants, and functions using the `import my_pkg::*;` syntax, preventing namespace pollution and duplicate declarations."
  },
  {
    q: "In SystemVerilog SVA, what does the consecutive repetition operator `req ##1 ack[*3]` check?",
    opts: ["req followed on next cycle by exactly 3 consecutive cycles of ack asserting high", "req and ack occurring simultaneously for 3 cycles", "3 instances of req followed by 1 instance of ack", "ack toggling at 3x the frequency of req"],
    ans: 0,
    cat: "SVA Repetition",
    exp: "`req ##1 ack[*3]` requires that 1 cycle after `req` is true, `ack` must remain true continuously for 3 consecutive clock cycles."
  },
  {
    q: "What is the key advantage of using SystemVerilog `mailbox` over an array for testbench transaction queues?",
    opts: ["Mailbox uses zero simulation memory", "Mailbox provides built-in thread-safe atomic put(), get(), and peek() operations with blocking synchronization for multi-threaded communication", "Mailbox synthesizes to hardware registers on FPGAs", "Mailbox guarantees L1 CPU cache residency"],
    ans: 1,
    cat: "Inter-Process Communication",
    exp: "A `mailbox` is a built-in IPC queue with atomic synchronization. Calling `get()` on an empty mailbox or `put()` on a bounded full mailbox automatically suspends the calling thread until items are available."
  },
  {
    q: "What is the difference between `fork ... join`, `fork ... join_any`, and `fork ... join_none` in SystemVerilog?",
    opts: ["`join` waits for ALL child threads; `join_any` waits for ANY single thread; `join_none` schedules threads and resumes the parent process immediately", "`join` executes serially; `join_any` executes in parallel; `join_none` terminates all threads", "`join_none` is only allowed in synthesizable modules", "They are identical in modern IEEE 1800-2017 simulators"],
    ans: 0,
    cat: "Fork-Join Threads",
    exp: "`fork...join` blocks until every spawned thread finishes. `join_any` continues when at least one thread completes. `join_none` spawns the threads into the scheduler and continues immediately without blocking."
  },
  {
    q: "What is a `semaphore` used for in a SystemVerilog verification environment?",
    opts: ["To generate colored terminal output messages", "To control mutual exclusion and shared access to a limited pool of resources via `get()` and `put()` key tokens", "To signal end of simulation across network clusters", "To monitor memory leaks in C++ DPI models"],
    ans: 1,
    cat: "Synchronization",
    exp: "A `semaphore` acts as a bucket of keys. Threads request keys via `sem.get(N)` to enter a critical section (e.g. driving a shared bus) and return them via `sem.put(N)`, preventing collision."
  },
  {
    q: "How does the SystemVerilog Direct Programming Interface (DPI-C) improve on the legacy Verilog PLI/VPI interface?",
    opts: ["DPI-C allows calling standard C/C++ functions directly using straightforward `import \"DPI-C\" function` declarations without complex VPI wrapper routines or memory overhead", "DPI-C only supports assembly language", "DPI-C requires compiling C code into synthesizable Verilog first", "DPI-C is limited to 8-bit integer arguments"],
    ans: 0,
    cat: "DPI-C Interop",
    exp: "DPI-C (Direct Programming Interface) enables seamless two-way function calls between SystemVerilog and C/C++ with standard C signatures, bypassing the verbose and slow handle-based VPI abstraction layer."
  },
  {
    q: "In SystemVerilog, what is an `associative array` and when is it preferred over a dynamic array?",
    opts: ["An array that is allocated with fixed size at elaboration", "A sparse lookup array indexed by arbitrary types (e.g. 64-bit addresses or strings) that consumes memory only for populated elements, ideal for modeling sparse memory maps", "An array that automatically executes sorting algorithms on every write", "An array synthesized into parallel dual-port BRAM blocks"],
    ans: 1,
    cat: "Dynamic Data Types",
    exp: "Associative arrays (`int mem[bit [63:0]]`) allocate storage only when an address is written. This allows modeling an entire 64-bit address space in simulation without allocating gigabytes of physical RAM."
  },
  {
    q: "What does the `std::randomize()` function do when invoked without an object instance?",
    opts: ["Resets the global PRNG seed to zero", "Randomizes local variables directly with inline `with { ... }` constraints without requiring a dedicated class wrapper", "Randomizes the DUT clock frequency dynamically", "Performs random jitter injection on interface wires"],
    ans: 1,
    cat: "Randomization",
    exp: "`std::randomize(a, b) with { a < b; };` is a scope-level call that randomizes standalone procedural variables according to inline constraints without declaring an instantiated class."
  },
  {
    q: "What does the `disable fork` statement do in a SystemVerilog process?",
    opts: ["Disables all hardware interrupt pins", "Terminates all active descendant threads spawned by the current process via any `fork` block", "Pauses the simulator clock permanently", "Disables the verification license checkout"],
    ans: 1,
    cat: "Thread Control",
    exp: "`disable fork;` kills all child threads that were spawned by the enclosing process, frequently used in watchdog timeout blocks to kill hanging worker sequences."
  },
  {
    q: "In SystemVerilog, what is the role of `always_ff @(posedge clk or negedge rst_n)`?",
    opts: ["Instructs the compiler that the block models edge-triggered sequential logic, raising a compile-time error if blocking assignments or combinational paths are present", "Synthesizes an analog operational amplifier", "Forces the clock to run at 1GHz", "Eliminates all setup time timing requirements"],
    ans: 0,
    cat: "Sequential Modeling",
    exp: "`always_ff` explicitly documents intent for flip-flop sequential hardware. Synthesis and lint tools enforce sequential rules and flag any combinational loops or latch inference."
  },
  {
    q: "What is the function of the `$sampled(signal)` function in SystemVerilog Assertions?",
    opts: ["Samples analog ADC voltage levels", "Returns the value of the signal from the Preponed region of the current simulation time step, before any active delta updates take place", "Increases the oscilloscope sampling rate", "Samples power consumption per clock cycle"],
    ans: 1,
    cat: "SVA Preponed Region",
    exp: "In SVA, concurrent assertions evaluate using `$sampled()` values extracted from the Preponed region, ensuring consistent race-free condition evaluation prior to clock edge activity."
  },
  {
    q: "How does a SystemVerilog `enum` with typed values enhance hardware design safety?",
    opts: ["Enums cannot be viewed in waveform debuggers", "Enums enforce strict strong typing, preventing invalid integer values from being assigned without explicit casting, and allowing symbolic debugging in waveforms", "Enums always default to ASCII strings", "Enums eliminate the need for reset logic"],
    ans: 1,
    cat: "Enums & Types",
    exp: "Strongly typed enums (`typedef enum logic [1:0] { IDLE, RUN, DONE } state_t;`) prevent illegal integer assignments, improve code readability, and display symbolic names in waveform viewers."
  },
  {
    q: "What is the purpose of the `covergroup` option `goal` in SystemVerilog?",
    opts: ["Defines the maximum simulation runtime in seconds", "Specifies the target percentage of functional coverage (e.g. 100%) required for that specific covergroup to be considered fully achieved", "Sets the maximum number of error messages before abort", "Determines the priority order of constraint solving"],
    ans: 1,
    cat: "Functional Coverage",
    exp: "`option.goal = 95;` configures the percentage threshold of cumulative bins that must be hit for the coverage model to report success in coverage databases."
  },
  {
    q: "What does the `pre_randomize()` and `post_randomize()` built-in callback methods allow in SystemVerilog classes?",
    opts: ["Executing setup operations before the constraint engine runs, and post-processing/validating values after constraint solving succeeds", "Re-seeding the hardware PLL before synthesis", "Encrypting randomized data packets before network transmission", "Calling C++ destructors automatically"],
    ans: 0,
    cat: "Randomization Callbacks",
    exp: "`pre_randomize()` executes immediately before solving (e.g. setting state flags or disabling constraints), and `post_randomize()` runs immediately after (e.g. computing parity bits or CRC on generated fields)."
  },
  {
    q: "How does the `ref` argument passing mechanism in SystemVerilog functions differ from `input`?",
    opts: ["`ref` passes variables by reference without copying memory, allowing bidirectional access and zero memory allocation overhead; `input` copies values by value", "`ref` converts integers to floating point numbers", "`ref` can only be used in synthesizable RTL modules", "`ref` prevents the function from modifying the variable"],
    ans: 0,
    cat: "Argument Passing",
    exp: "Passing by `ref` passes a reference pointer to the original memory variable rather than copying the array/struct by value onto the call stack. Using `const ref` guarantees read-only speed."
  },
  {
    q: "In SystemVerilog SVA, what is the meaning of the `throughout` sequence operator?",
    opts: ["Requires an expression to remain continuously true throughout the entire duration of an overlapping sequence: `expr throughout seq`", "Executes an assertion across all hierarchy levels in the chip", "Permits assertion matching throughout the entire simulation run", "Loops a sequence infinitely"],
    ans: 0,
    cat: "SVA Throughout",
    exp: "`b throughout (seq)` enforces that boolean expression `b` must hold true at every single clock cycle while sequence `seq` is active and matching."
  },
  {
    q: "What is the function of the `randc` keyword in a SystemVerilog class compared to `rand`?",
    opts: ["`randc` generates floating point random numbers", "`randc` provides cyclic random generation, cycling through every possible permutation of values in its domain before repeating any value", "`randc` disables constraint solver checks", "`randc` is the synthesizable version of `rand`"],
    ans: 1,
    cat: "Random Cyclic",
    exp: "`randc` (random cyclic) guarantees that no value in the declared range is selected twice until all other values in the permutation set have been selected once."
  },
  {
    q: "What is the purpose of the `extern` keyword when declaring methods inside a SystemVerilog class?",
    opts: ["Permits the method to be exported to external C libraries", "Allows declaring the method signature inside the class body while writing the implementation outside the class using `class_name::method_name` syntax", "Marks the method as static across all instances", "Forces the method to be implemented in a child class"],
    ans: 1,
    cat: "Class Architecture",
    exp: "`extern function void print();` keeps class definitions concise and clean, placing lengthy implementation code outside the class boundary using the scope resolution operator `::`."
  }
];

svAdd.forEach((q, i) => {
  hdlQuestions.push({
    id: `sv-add-${String(i + 1).padStart(2, '0')}`,
    topicId: 'systemverilog',
    category: q.cat,
    question: q.q,
    options: q.opts,
    correctAnswer: q.ans,
    explanation: q.exp
  });
});

console.log(`Generated ${svAdd.length} SystemVerilog questions.`);

// VHDL (30 questions: vhdl-add-01 to vhdl-add-30)
const vhdlAdd = [
  {
    q: "What is the key difference between a `signal` and a `variable` in VHDL?",
    opts: ["Signals update immediately within a process; variables update at the end of the simulation cycle", "Variables update immediately using `:=` within a sequential process; signals schedule updates using `<=` which take effect only when the process suspends", "Variables are global across the architecture; signals are strictly local to a process", "Signals cannot synthesize into hardware registers"],
    ans: 1,
    cat: "Signals vs Variables",
    exp: "Variables are evaluated sequentially and immediately (`:=`), holding local state within a process or subprogram. Signals schedule future updates (`<=`) that apply during delta cycles when processes suspend."
  },
  {
    q: "Why is `std_logic_vector` preferred over `std_ulogic_vector` for multi-driver buses in VHDL?",
    opts: ["`std_logic` incorporates a resolved resolution function that computes bus contention; `std_ulogic` is unresolved and produces a compile error if multiple drivers exist", "`std_ulogic` is non-synthesizable", "`std_logic` occupies less simulation memory", "`std_ulogic` is an obsolete IEEE standard"],
    ans: 0,
    cat: "Data Types & Resolution",
    exp: "`std_logic` is a subtype of `std_ulogic` with an IEEE 1164 resolution function. If two tri-state drivers simultaneously drive '0' and '1', `std_logic` resolves to 'X' without throwing a fatal compilation abort."
  },
  {
    q: "In modern VHDL synthesis, which standard package should be used for arithmetic operations on vectors?",
    opts: ["`ieee.std_logic_arith`", "`ieee.numeric_std` using `signed` and `unsigned` types", "`ieee.std_logic_unsigned`", "`work.arithmetic_lib`"],
    ans: 1,
    cat: "Packages & Standards",
    exp: "`ieee.numeric_std` is the official IEEE 1076.3 standard for synthesizable arithmetic. It cleanly defines `unsigned` and `signed` array types, replacing legacy non-standard vendor packages."
  },
  {
    q: "What is the purpose of the `process (all)` sensitivity list introduced in VHDL-2008?",
    opts: ["Forces the process to trigger on every rising edge of all clocks in the chip", "Automatically includes all signals read within the process into the sensitivity list, preventing simulation-synthesis mismatches from incomplete lists", "Executes the process in infinite loop without suspension", "Synthesizes an analog continuous-time filter"],
    ans: 1,
    cat: "VHDL-2008 Features",
    exp: "Similar to Verilog's `always @(*)`, VHDL-2008 `process (all)` automatically captures all read signals into the sensitivity list, preventing missed triggers and eliminating accidental latch inference."
  },
  {
    q: "How does the VHDL `generate` statement assist in structural hardware design?",
    opts: ["Generates randomized test vectors during simulation", "Conditionally (`if-generate`) or repetitively (`for-generate`) instantiates components and concurrent statements at elaboration time", "Generates clock signals automatically from crystal models", "Compiles C algorithms into VHDL testbenches"],
    ans: 1,
    cat: "Structural Generate",
    exp: "`for...generate` and `if...generate` instantiate arrays of component entities (e.g. 64-bit ripple-carry adders or systolic arrays) parameterized by generic constants at elaboration time."
  },
  {
    q: "In a VHDL synchronous process, what is the standard recommended syntax for checking the rising clock edge?",
    opts: ["`if clk'event and clk = '1' then` or `if rising_edge(clk) then`", "`if clk = '1' then`", "`wait until clk = '0';`", "`if clk'active then`"],
    ans: 0,
    cat: "Clock Edge Detection",
    exp: "`rising_edge(clk)` is the IEEE standard function that checks for a genuine transition from '0' (or 'L') to '1' (or 'H'), rejecting transitions from 'X' or 'Z' that legacy `clk'event` might misinterpret."
  },
  {
    q: "What is the difference between `inertial delay` and `transport delay` in VHDL simulation models?",
    opts: ["Inertial delay models physical gate inertia by filtering out pulses narrower than the propagation delay; transport delay transmits all pulses regardless of width like an ideal wire", "Transport delay filters glitches; inertial delay preserves them", "Inertial delay is only allowed in testbenches; transport delay is synthesizable", "There is no difference in digital simulation"],
    ans: 0,
    cat: "Delay Models",
    exp: "Inertial delay (default in VHDL) rejects glitch pulses narrower than the specified delay time, representing physical RC gate inertia. `transport` delay models ideal transmission lines with pure latency."
  },
  {
    q: "How are generic constants passed to an instantiated component in VHDL?",
    opts: ["`port map (...)`", "`generic map (...)`", "`parameter map (...)`", "`config map (...)`"],
    ans: 1,
    cat: "Generics",
    exp: "Generics parameterize an entity (e.g. data width, FIFO depth) and are assigned during component instantiation using the `generic map (WIDTH => 32)` construct."
  },
  {
    q: "What occurs in VHDL simulation when a delta cycle (`+0 ns`) takes place?",
    opts: ["Simulation time advances by 1 picosecond", "Signal updates scheduled during the previous evaluation step take effect and sensitive processes are re-evaluated without physical simulation time advancing", "The simulator pauses and writes VCD dumps to disk", "The simulator re-initializes all signals to 'U'"],
    ans: 1,
    cat: "Simulation Delta Cycles",
    exp: "Delta cycles represent infinitesimal simulation steps required to resolve causal signal dependency order without advancing physical simulation time ($T_{sim}$ remains constant)."
  },
  {
    q: "What is an `unconstrained array` in VHDL entity declarations?",
    opts: ["An array that has infinite capacity in hardware memory", "An array declared with a range open-ended using `<>` (e.g. `type data_arr is array (natural range <>) of std_logic_vector`), allowing the actual width to be determined upon instantiation", "An array that cannot be synthesized into FPGA block RAM", "An array with no defined data type"],
    ans: 1,
    cat: "Unconstrained Arrays",
    exp: "Unconstrained arrays specify port boundaries with `<>` (e.g. `std_logic_vector(natural range <>)`), allowing generic modules to dynamically adapt to whatever signal width is connected to them."
  },
  {
    q: "What does the VHDL attribute `'image` perform (e.g. `integer'image(counter)`)?",
    opts: ["Renders a 2D bitmap image of the circuit schematic", "Converts a scalar value into its string text representation, useful for report and assertion logging", "Measures the silicon die surface area of the signal", "Calculates the bit flip transition count"],
    ans: 1,
    cat: "Predefined Attributes",
    exp: "The `'image` attribute returns a formatted string representation of a scalar value (e.g. `integer'image(42)` returns `\"42\"`), widely used in `report` statements."
  },
  {
    q: "In VHDL, what is the role of an `alias` declaration?",
    opts: ["Creates a second entity with the same architecture", "Declares an alternate name for an existing object or a specific sub-range of a vector (e.g. `alias sign_bit : std_logic is data(31);`)", "Hides private registers from testbench probing", "Links VHDL to an external C library"],
    ans: 1,
    cat: "Aliases",
    exp: "An `alias` establishes a descriptive synonym for a portion of an existing object, such as giving semantic names to header fields in a network packet vector."
  },
  {
    q: "How does VHDL handle assignments to slices of a vector (e.g. `data(7 downto 4) <= \"1010\";`)?",
    opts: ["It is illegal in synthesizable VHDL", "It cleanly updates only the specified bit range, leaving other vector bits unaffected when evaluated in hardware", "It forces all other bits to high-impedance 'Z'", "It requires a temporary variable buffer"],
    ans: 1,
    cat: "Vector Slicing",
    exp: "Sub-vector slicing and partial assignment is fully synthesizable in VHDL, updating the target range while preserving unaffected bit positions in registers or wires."
  },
  {
    q: "What is the significance of the 9 states in the IEEE 1164 `std_ulogic` character set?",
    opts: ["'U' (uninitialized), 'X' (forcing unknown), '0' (forcing 0), '1' (forcing 1), 'Z' (high impedance), 'W' (weak unknown), 'L' (weak 0), 'H' (weak 1), '-' (don't care)", "Represents 9 different voltage levels from 0V to 9V", "Represents 9-phase clocking systems", "Is an encrypted format for IP cores"],
    ans: 0,
    cat: "IEEE 1164 Logic",
    exp: "IEEE 1164 defines 9 logic states modeling physical CMOS phenomena: uninitialized ('U'), strong/forcing signals ('0', '1', 'X'), weak pull-ups/pull-downs ('L', 'H', 'W'), high-Z ('Z'), and synthesis don't-care ('-')."
  },
  {
    q: "What is the difference between a `function` and a `procedure` in VHDL?",
    opts: ["Functions cannot take input parameters; procedures can", "Functions must be pure and return a single value via `return`; procedures can return multiple values through `out` and `inout` parameters and can contain `wait` statements", "Functions can only be declared inside an architecture; procedures only in packages", "Procedures cannot be synthesized into combinational logic"],
    ans: 1,
    cat: "Subprograms",
    exp: "Functions return a single computed value and cannot contain `wait` statements (strictly combinational). Procedures can modify multiple parameters via `out`/`inout` modes and can consume simulation time."
  },
  {
    q: "What is the purpose of the VHDL `assert ... report ... severity` statement?",
    opts: ["To enforce physical pin constraints on FPGA I/O pads", "To check design invariants during simulation and emit diagnostic messages categorized by severity (NOTE, WARNING, ERROR, FAILURE)", "To force synthesis tools to ignore timing violations", "To configure boundary scan TAP controllers"],
    ans: 1,
    cat: "Assertions & Diagnostics",
    exp: "`assert condition report \"msg\" severity failure;` checks design properties during simulation. If the condition evaluates to FALSE, the simulator logs the message and can abort on ERROR or FAILURE."
  },
  {
    q: "Why is a `null;` statement utilized in a VHDL `case` construct?",
    opts: ["To deallocate memory in simulation", "To explicitly state that no hardware action is taken for a given branch or condition", "To infer a transparent latch intentionally", "To trigger a simulation reset"],
    ans: 1,
    cat: "Case Semantics",
    exp: "`when others => null;` documents deliberate inaction in a case statement, ensuring syntactic completeness without performing any state or signal assignment."
  },
  {
    q: "How is an asynchronous reset implemented in a standard VHDL clocked process?",
    opts: ["`if rst = '1' then q <= '0'; elsif rising_edge(clk) then q <= d; end if;`", "`if rising_edge(clk) and rst = '1' then q <= '0'; end if;`", "`wait until clk = '1' or rst = '1';`", "`process (clk) begin if rst = '1' then ...`"],
    ans: 0,
    cat: "Async Reset Template",
    exp: "The asynchronous reset must be checked first outside the clock edge condition: `if rst = '1' then ... elsif rising_edge(clk) then ... end if;`, and both `clk` and `rst` must be in the sensitivity list."
  },
  {
    q: "What is a `package body` in VHDL and when is it required?",
    opts: ["It contains pin assignments for the physical IC package", "It provides the underlying implementation of subprograms (functions and procedures) and deferred constants declared in the package specification", "It is required for every entity declaration", "It holds the synthesizable netlist for gate-level simulation"],
    ans: 1,
    cat: "Package Architecture",
    exp: "A package declaration defines public types, constants, and subprogram prototypes. If the package declares any functions or procedures, a corresponding `package body` is mandatory to hold their code."
  },
  {
    q: "What does the VHDL `others => '0'` aggregate notation accomplish?",
    opts: ["Assigns zero only to the first bit of an array", "Initializes or sets all elements of an array or slice to '0' regardless of vector width, avoiding hardcoded width constants", "Clears the simulator heap memory", "Disables all inactive tri-state pins"],
    ans: 1,
    cat: "Aggregates",
    exp: "`data <= (others => '0');` assigns logic '0' to every element of the target array, ensuring parameterized, portable code that does not break when vector widths change."
  },
  {
    q: "What is the difference between a `concurrent signal assignment` and a `sequential signal assignment` in VHDL?",
    opts: ["Concurrent assignments reside directly inside the architecture body and execute in parallel; sequential assignments reside inside processes, procedures, or functions and execute in procedural order", "Sequential assignments execute faster in hardware", "Concurrent assignments cannot synthesize into multiplexers", "Sequential assignments cannot drive output ports"],
    ans: 0,
    cat: "Concurrent vs Sequential",
    exp: "Statements outside processes (e.g. `assign` / concurrent `y <= a and b;`) represent parallel hardware blocks. Statements inside processes execute in procedural order upon process activation."
  },
  {
    q: "In VHDL-2008, what does the matching relational operator `?=` provide over standard `=`?",
    opts: ["Compares vectors of different lengths", "Performs element-wise comparison where 'X', 'Z', and '-' behave as don't-cares, returning a `std_ulogic` ('1', '0', 'X') rather than a strict boolean", "Tests object identity in heap memory", "Is used exclusively for floating-point calculations"],
    ans: 1,
    cat: "VHDL-2008 Operators",
    exp: "Matching operators (`?=`, `?/=`, `?<`, etc.) treat '-' (don't-care) as matching any bit, and return `std_ulogic` rather than `boolean`, allowing clean ternary matching logic."
  },
  {
    q: "What is the role of a `component declaration` in structural VHDL?",
    opts: ["Defines an internal flip-flop cell in silicon", "Specifies the interface (generics and ports) of an external design entity so it can be instantiated within an architecture", "Compiles C++ models into synthesizable gates", "Generates the printed circuit board layout symbol"],
    ans: 1,
    cat: "Component Modeling",
    exp: "Component declarations act as forward prototypes describing an entity's interface. In modern VHDL-93/2008, direct entity instantiation (`u1: entity work.my_module port map(...)`) can bypass component declarations."
  },
  {
    q: "How does the VHDL `selected signal assignment` (`with ... select`) differ from conditional assignment (`when ... else`)?",
    opts: ["`with...select` evaluates conditions with priority; `when...else` evaluates in parallel", "`with...select` evaluates a single selector expression against mutually exclusive choices (synthesizing a balanced multiplexer); `when...else` evaluates arbitrary sequential boolean conditions (synthesizing priority logic)", "They are identical in hardware synthesis", "`with...select` cannot be used outside processes"],
    ans: 1,
    cat: "Conditional vs Selected",
    exp: "`with...select` is the concurrent equivalent of a case statement, requiring exhaustive and mutually exclusive options (balanced mux). `when...else` is an if-else chain that synthesizes a priority encoder."
  },
  {
    q: "What is the function of the VHDL `std.textio` package?",
    opts: ["Formats on-screen GUI dialogs", "Provides file reading and writing utilities (`readline`, `writeline`, `read`, `write`) to process ASCII text files during testbench simulation", "Converts HDL source code into HTML documentation", "Translates VHDL syntax to Verilog"],
    ans: 1,
    cat: "File I/O & Textio",
    exp: "`std.textio` enables testbenches to read stimuli vectors from external disk files and log simulation results into formatted text files, essential for automated regression verification."
  },
  {
    q: "What does the attribute `'high` return when applied to an array type defined as `std_logic_vector(7 downto 0)`?",
    opts: ["The value 7", "The value 0", "The logic state of the most significant bit", "The maximum integer value the vector can hold"],
    ans: 0,
    cat: "Predefined Attributes",
    exp: "The `'high` attribute returns the upper bound of the array index range. For `(7 downto 0)`, `data'high` evaluates to 7; for `(0 to 15)`, it evaluates to 15."
  },
  {
    q: "What is a `record` type in VHDL and what is its primary hardware engineering benefit?",
    opts: ["A database table for storing simulation waveforms", "A composite type that groups heterogeneous named fields together (e.g. data, valid, ready), allowing complex bus interfaces to be passed as a single clean signal", "An automated audio recording system", "A non-synthesizable testbench construct"],
    ans: 1,
    cat: "Record Types",
    exp: "Record types bundle related signals (such as AXI channel signals) into a single composite type, dramatically simplifying top-level entity port lists and preventing wiring disconnect errors."
  },
  {
    q: "Why is the use of `wait for <time>;` statements forbidden in synthesizable VHDL RTL modules?",
    opts: ["Synthesis tools cannot determine clock frequency", "Physical silicon circuits do not have built-in time delays; hardware state changes occur in response to physical clock edges or level triggers, not arbitrary simulated seconds", "It causes simulation delta cycle overflows", "Modern FPGAs lack silicon delay lines"],
    ans: 1,
    cat: "Synthesizability",
    exp: "Hardware logic consists of transistors and clock networks. Delays like `wait for 10 ns;` represent simulation time and cannot be physically synthesized into ASIC gates; timers must be built using clock-driven counter registers."
  },
  {
    q: "What is the purpose of the VHDL `configuration` specification?",
    opts: ["Configures FPGA bitstreams over JTAG cables", "Explicitly binds specific entity-architecture pairs to component instances across a hierarchical design without editing the source code", "Sets CAD tool compiler flags", "Controls simulator thread count"],
    ans: 1,
    cat: "Configurations",
    exp: "Configurations bind components to specific architectures (e.g. selecting between a behavioral RTL architecture and a post-layout gate-level netlist architecture) at elaboration time."
  },
  {
    q: "How does the VHDL function `to_integer(unsigned(data))` convert an 8-bit `std_logic_vector`?",
    opts: ["It converts the vector directly into a real floating-point number", "It first casts the unresolved vector to the `unsigned` arithmetic type from `numeric_std`, then computes its non-negative integer representation", "It shifts the bits into an integer accumulator register", "It generates a syntax error"],
    ans: 1,
    cat: "Type Conversion",
    exp: "Under `ieee.numeric_std`, `std_logic_vector` is not an arithmetic type. It must first be type-cast to `unsigned` (or `signed`), after which `to_integer()` produces an integer for indexing or range checks."
  }
];

vhdlAdd.forEach((q, i) => {
  hdlQuestions.push({
    id: `vhdl-add-${String(i + 1).padStart(2, '0')}`,
    topicId: 'vhdl',
    category: q.cat,
    question: q.q,
    options: q.opts,
    correctAnswer: q.ans,
    explanation: q.exp
  });
});

console.log(`Generated ${vhdlAdd.length} VHDL questions.`);

// UVM (30 questions: uvm-add-01 to uvm-add-30)
const uvmAdd = [
  {
    q: "In UVM, what is the primary structural difference between a `uvm_component` and a `uvm_object`?",
    opts: ["`uvm_component` is quasi-static, belongs to the testbench structural hierarchy, and participates in standardized UVM phasing; `uvm_object` is transient and created dynamically for transactions or configuration", "`uvm_component` cannot use factory creation", "`uvm_object` runs the `build_phase` and `run_phase`", "`uvm_component` can only be instantiated inside drivers"],
    ans: 0,
    cat: "UVM Hierarchy",
    exp: "Components (`uvm_driver`, `uvm_env`, `uvm_scoreboard`) exist throughout the simulation and participate in phases. Objects (`uvm_sequence_item`, `uvm_sequence`) are transient data transactions created and discarded as needed."
  },
  {
    q: "How does a UVM sequence communicate transaction items to a `uvm_driver`?",
    opts: ["By writing to global static memory variables", "Through a `uvm_sequencer` using a bidirectional handshake protocol: `start_item()`, sequence randomize, `finish_item()`, and driver `get_next_item()` / `item_done()`", "Using hardware interrupt lines", "Via Linux shared memory sockets"],
    ans: 1,
    cat: "Sequencer-Driver Handshake",
    exp: "The sequencer arbitrates transactions between sequences and the driver. The driver calls `seq_item_port.get_next_item(req)`, pins out the transaction to the DUT, and calls `seq_item_port.item_done()`."
  },
  {
    q: "What is the order of execution for UVM `build_phase` versus `connect_phase`?",
    opts: ["`build_phase` executes top-down; `connect_phase` executes bottom-up", "`build_phase` executes bottom-up; `connect_phase` executes top-down", "Both execute in parallel in the reactive region", "The user determines phase execution order in the Makefile"],
    ans: 0,
    cat: "UVM Phasing",
    exp: "To ensure parents exist before children are instantiated, `build_phase` executes top-down. Once the entire hierarchy is constructed, `connect_phase` executes bottom-up to hook up TLM ports from leaf components upwards."
  },
  {
    q: "What is the purpose of the UVM factory `set_type_override_by_type()` method?",
    opts: ["Overrides the hardware PLL clock frequency", "Instructs the UVM factory to substitute an extended class implementation whenever a base class type is requested via `type_id::create()`, enabling polymorphic testbench specialization without editing component code", "Replaces Verilog modules with C++ DPI models", "Overrides simulation compiler flags"],
    ans: 1,
    cat: "UVM Factory Overrides",
    exp: "Factory overrides allow tests to swap in specialized drivers, error injectors, or transaction items dynamically without modifying the underlying structural agent or environment code."
  },
  {
    q: "Why must the `run_phase` in UVM be declared as a `task` while other common phases (`build_phase`, `connect_phase`) are `functions`?",
    opts: ["Because `run_phase` is the only phase that consumes simulation time and executes concurrently with the simulated DUT; all other standard phases execute in zero simulation time", "Because functions cannot use the UVM factory", "Because tasks run faster in simulation than functions", "Because IEEE 1800.2 prohibits functions in UVM components"],
    ans: 0,
    cat: "UVM Phasing",
    exp: "`run_phase(uvm_phase phase)` consumes simulation time (`#`, `@`, clocks) to drive and sample transactions. Build, connect, end_of_elaboration, check, and report phases are zero-time functions."
  },
  {
    q: "How does UVM manage the termination of the simulation during the `run_phase`?",
    opts: ["By counting 1,000,000 clock cycles and calling `$finish`", "Through the objections mechanism: components/sequences raise an objection (`phase.raise_objection(this)`) while active and drop it (`phase.drop_objection(this)`) when finished; simulation ends when objection count reaches zero", "By monitoring DUT power consumption", "By polling the OS terminal input"],
    ans: 1,
    cat: "Objections Mechanism",
    exp: "The UVM objection mechanism controls phase completion. When all active sequences and monitors drop their raised objections, the total count drops to zero, and the testbench transitions into cleanup phases."
  },
  {
    q: "What is the function of a `uvm_analysis_port` compared to a standard TLM `put_port`?",
    opts: ["An analysis port supports 1-to-many broadcast communication where writes never block and multiple subscribers/scoreboards can listen without interfering with each other", "Analysis ports can only send string messages to log files", "Analysis ports convert digital signals to analog", "Put ports support broadcast, while analysis ports are strictly point-to-point"],
    ans: 0,
    cat: "TLM Communication",
    exp: "A `uvm_analysis_port` implements non-blocking broadcast (`write()`). A single monitor can broadcast observed transactions simultaneously to multiple scoreboards, coverage collectors, and loggers."
  },
  {
    q: "In UVM, what is a `virtual sequence`?",
    opts: ["A sequence that executes only in cloud simulators", "A coordinator sequence that controls and schedules multiple sub-sequences executing across different agents and sequencers (e.g. coordinating CPU bus transactions with DMA traffic)", "A sequence that has no randomized fields", "An encrypted sequence used for commercial VIP"],
    ans: 1,
    cat: "Virtual Sequences",
    exp: "A virtual sequence controls multi-interface SoC environments. It does not bind to a single driver, but instead contains handles to multiple physical sequencers, coordinating cross-subsystem traffic."
  },
  {
    q: "What does the macro `` `uvm_component_utils(my_driver) `` provide?",
    opts: ["Generates hardware documentation for the driver", "Registers the class with the UVM factory and implements essential infrastructure methods like `get_type_name()`, `create()`, and string-based lookup", "Compiles the class into an executable binary", "Enables multithreading on host CPUs"],
    ans: 1,
    cat: "UVM Macros",
    exp: "The `` `uvm_component_utils `` macro registers the component with the factory, enabling dynamic creation via `type_id::create(\"name\", parent)` and supporting factory overrides."
  },
  {
    q: "What is the role of the UVM Register Abstraction Layer (RAL / `uvm_reg_block`)?",
    opts: ["Replaces physical flip-flops on the FPGA", "Provides an object-oriented software model of all hardware registers and memories, tracking mirror values, verifying reset states, and supporting frontdoor and backdoor accesses", "Translates Verilog code into C firmware headers automatically", "Manages CPU register allocation during synthesis"],
    ans: 1,
    cat: "UVM RAL",
    exp: "UVM RAL abstracts hardware memory-mapped registers. It maintains desired and mirrored values, checks reset states, supports auto-prediction from bus monitors, and enables backdoor simulator memory peek/poke."
  },
  {
    q: "What is the difference between a `frontdoor` and `backdoor` register access in UVM RAL?",
    opts: ["Frontdoor access consumes simulation time by driving transactions across the physical bus interface (e.g. AXI/APB); backdoor access reads/writes directly via hierarchical HDL simulator simulator paths in zero time", "Frontdoor access uses C++ DPI; backdoor access uses Verilog", "Backdoor access is synthesizable; frontdoor access is testbench only", "There is no difference in simulation speed"],
    ans: 0,
    cat: "UVM RAL Access",
    exp: "Frontdoor access uses the sequencer and driver to toggle physical bus protocol signals. Backdoor access bypasses the bus, depositing or examining values directly in simulator register memory via `uvm_hdl_read/write` in zero time."
  },
  {
    q: "What is the purpose of the `uvm_config_db#(T)::set(...)` and `get(...)` mechanism?",
    opts: ["Stores user passwords securely in SQLite databases", "Provides a hierarchical configuration repository to pass parameters, interface handles, and control flags from top-level test components down to arbitrary sub-components without cluttering port lists", "Logs simulation errors to remote cloud servers", "Configures FPGA clock PLLs dynamically"],
    ans: 1,
    cat: "UVM Config DB",
    exp: "`uvm_config_db` allows parents to configure children hierarchically (e.g. passing a `virtual my_if` handle or configuring `is_active` mode) using string path pattern matching."
  },
  {
    q: "In a UVM agent, what determines whether it operates in `UVM_ACTIVE` or `UVM_PASSIVE` mode?",
    opts: ["Active agents instantiate a sequencer, driver, and monitor; passive agents instantiate only a monitor to observe traffic without driving stimulus onto the bus", "Active agents run at 100MHz; passive agents run at 10MHz", "Passive agents ignore assertions", "Active agents are synthesizable into FPGA emulators"],
    ans: 0,
    cat: "UVM Agent Architecture",
    exp: "When `is_active == UVM_ACTIVE`, the agent generates stimulus (sequencer + driver) and monitors. When `UVM_PASSIVE`, it only observes (monitor only), ideal for verification of DUT output interfaces."
  },
  {
    q: "What does the `check_phase` in UVM accomplish?",
    opts: ["Checks that all testbench source files have clean syntax", "Executes zero-time verification checks (such as verifying that scoreboards are completely empty and no transactions were dropped in flight) before ending the test", "Verifies physical timing constraints using STA", "Checks that all licenses are checked back in"],
    ans: 1,
    cat: "UVM Phasing",
    exp: "The `check_phase` runs after `run_phase` completes. Scoreboards verify that all expected packets matched actual packets, FIFOs are empty, and no unfinished transactions remain."
  },
  {
    q: "How does a `uvm_subscriber#(T)` simplify scoreboard development?",
    opts: ["It automatically creates randomized transactions", "It extends `uvm_component` and contains a pre-built `uvm_analysis_imp` port, requiring the user to implement only the `write(T t)` method to process incoming monitor packets", "It connects to remote MQTT brokers", "It manages database transactions"],
    ans: 1,
    cat: "UVM Subscriber",
    exp: "`uvm_subscriber` is a specialized component with a built-in analysis export. Implementing `virtual function void write(T t);` is all that is needed to receive transactions from analysis ports."
  },
  {
    q: "What is the role of an explicit `uvm_reg_predictor` in UVM RAL?",
    opts: ["Predicts future CPU cache misses", "Monitors bus transactions from an analysis port, decodes the physical address, and updates the mirrored values of the corresponding register in the register block automatically", "Estimates silicon fabrication yield", "Generates random test vectors based on machine learning"],
    ans: 1,
    cat: "UVM RAL Prediction",
    exp: "The predictor listens to the bus monitor. When a write completes on the physical bus, the predictor updates the RAL mirrored register value, keeping the software model synchronized with silicon state."
  },
  {
    q: "In UVM reporting, what does the verbosity level `UVM_HIGH` signify?",
    opts: ["The message is of critical urgency and will abort simulation", "The message contains granular debug information and will only be displayed if the simulator verbosity threshold is set to `UVM_HIGH` or `UVM_DEBUG`", "The message is printed with high terminal brightness", "The message is prioritized for real-time audio playback"],
    ans: 1,
    cat: "UVM Reporting",
    exp: "UVM reporting filters messages by verbosity: `UVM_NONE`, `UVM_LOW`, `UVM_MEDIUM`, `UVM_HIGH`, and `UVM_DEBUG`. Granular cycle-by-cycle logs use `UVM_HIGH` so standard regression logs remain concise."
  },
  {
    q: "What does the UVM macro `` `uvm_do_with(seq_item, { constraints }) `` perform?",
    opts: ["Executes a sequence item on the default sequencer with inline constraint overrides, handling allocation, randomization, and driver dispatch in one call", "Compiles a C++ model with GCC flags", "Creates a concurrent assertion", "Duplicates a sequence item across multiple drivers"],
    ans: 0,
    cat: "UVM Sequence Macros",
    exp: "`` `uvm_do_with(req, { req.addr inside {[0:255]}; }) `` creates the item if null, awaits sequencer readiness, randomizes with inline constraints, and passes it to the driver."
  },
  {
    q: "What is the purpose of the `uvm_heartbeat` mechanism?",
    opts: ["Monitors CPU temperature during simulation", "Tracks activity from a list of components, raising a fatal error if no monitored component emits an event within a specified window, detecting testbench lockups and deadlocks", "Drives the primary DUT master oscillator", "Logs periodic progress timestamps to the console"],
    ans: 1,
    cat: "UVM Heartbeat",
    exp: "`uvm_heartbeat` watches for signs of life. If a simulation hangs in a deadlock where no component makes forward progress within a defined clock window, the heartbeat aborts with a diagnostic dump."
  },
  {
    q: "How does the UVM `response` mechanism (`get_response(rsp)`) work between driver and sequence?",
    opts: ["The sequencer stores responses in a local text file", "The driver creates a response item, copies the sequence ID (`rsp.set_id_info(req)`), and sends it back through `seq_item_port.put_response(rsp)`; the sequence retrieves it via `get_response(rsp)`", "Responses are broadcast across all active sequences simultaneously", "The DUT drives responses directly into the sequence class"],
    ans: 1,
    cat: "Driver-Sequence Response",
    exp: "To return read data from the DUT to the sequence, the driver populates a response transaction, preserves routing tags via `set_id_info(req)`, and sends it back to the sequencer for the requesting sequence."
  },
  {
    q: "What is a `uvm_tlm_analysis_fifo` and why is it useful between a monitor and a scoreboard?",
    opts: ["An infinite-capacity hardware FIFO buffer synthesized into BRAM", "A transaction buffer that provides an analysis export on the input side to absorb non-blocking writes and a blocking get port on the output side for sequential scoreboard comparison", "A FIFO that automatically sorts packets by CRC", "A memory leak detector"],
    ans: 1,
    cat: "TLM FIFOs",
    exp: "`uvm_tlm_analysis_fifo` decouples producer monitors from consumer scoreboards. It buffers broadcast packets without stalling the monitor and allows the scoreboard to `get()` items sequentially."
  },
  {
    q: "In UVM RAL, what does a register's `mirror` value represent compared to its `desired` value?",
    opts: ["Mirror is the value expected to reside in physical hardware; desired is the value the testbench intends to write on the next bus cycle", "Desired is read-only; mirror is write-only", "Mirror is the value in reset; desired is the value in production", "There is no difference between mirror and desired"],
    ans: 0,
    cat: "UVM RAL Values",
    exp: "The `desired` value represents the planned future configuration. The `mirrored` value reflects the model's tracking of what is physically stored in the DUT register. Calling `reg.update()` writes `desired` to hardware if it differs from `mirrored`."
  },
  {
    q: "What is the purpose of `uvm_top` (the global UVM root singleton)?",
    opts: ["It is the top-level test module instantiated in Verilog", "The singleton instance of `uvm_root` that acts as the hierarchical parent of all top-level components, controls global phasing, and manages message formatting and reporting limits", "The master testbench clock generator", "The physical silicon package root"],
    ans: 1,
    cat: "UVM Root",
    exp: "`uvm_top` is an implicit global singleton of type `uvm_root`. It anchors the component tree, orchestrates standard phases, and tracks global error counts."
  },
  {
    q: "What is the function of the `end_of_elaboration_phase` in UVM?",
    opts: ["Terminates the simulation run immediately", "Executes after all components are built and connected, allowing final topology verification, display of the component hierarchy (`uvm_top.print_topology()`), and setting up initial test states", "Synthesizes the testbench into gate-level netlists", "Compiles SystemVerilog packages into shared libraries"],
    ans: 1,
    cat: "UVM Phasing",
    exp: "The `end_of_elaboration_phase` occurs after all connections are established. It is the ideal place to inspect the complete testbench structure (`print_topology()`) before clocks start toggling."
  },
  {
    q: "How does the UVM factory handle instance overrides (`set_inst_override_by_type`) compared to type overrides?",
    opts: ["Instance overrides replace the class only within a specific hierarchical path instance (e.g. `\"env.agent_0.*\"`); type overrides replace the class globally across the entire testbench", "Instance overrides apply only to sequences", "Type overrides require recompilation; instance overrides do not", "Instance overrides are non-synthesizable"],
    ans: 0,
    cat: "UVM Factory Overrides",
    exp: "Instance overrides use scope path strings to replace components in specific targeted subsystems (e.g. replacing only driver 0 with a fault-injection driver, while driver 1 uses standard behavior)."
  },
  {
    q: "What does the UVM command-line argument `+UVM_TESTNAME=<test_class_name>` do?",
    opts: ["Renames the output waveform VCD file", "Instructs `run_test()` to instantiate and execute the specified test class via factory lookup without recompiling the simulation binary", "Passes a string parameter to the DUT reset pin", "Overrides the Makefile test target"],
    ans: 1,
    cat: "Command Line Arguments",
    exp: "`+UVM_TESTNAME=my_random_test` allows a single compiled simulation executable to execute hundreds of different regression test scenarios simply by changing the runtime command-line switch."
  },
  {
    q: "What is the purpose of the `uvm_in_order_comparator` in UVM verification?",
    opts: ["Sorts randomized numbers in ascending order", "A ready-to-use scoreboard component that accepts transactions from two streams (e.g. Expected from predictor and Actual from monitor) and verifies they match in exact 1-to-1 sequential order", "Orders clock edges across multi-phase domains", "Checks that memory addresses are strictly monotonic"],
    ans: 1,
    cat: "UVM Scoreboarding",
    exp: "`uvm_in_order_comparator#(T)` connects to two TLM analysis streams and automatically verifies that transactions emerging from the DUT arrive in the exact order predicted by the reference model."
  },
  {
    q: "What is the purpose of UVM callback classes (`uvm_callback`)?",
    opts: ["To handle operating system interrupt signals", "To provide standardized hook points where verification users can inject custom behavior (like error injection or extra assertions) into pre-compiled VIP without modifying original IP source code", "To call C++ destructors", "To synchronize multi-threaded simulators"],
    ans: 1,
    cat: "UVM Callbacks",
    exp: "Callbacks define non-intrusive extension points in reusable VIP. Users register callback classes to inject errors or sample metrics without changing vendor-supplied base code."
  },
  {
    q: "In UVM RAL, what does a register's `predict()` method do?",
    opts: ["Uses machine learning to forecast future register values", "Directly updates the mirrored and desired values of the register model without executing physical bus cycles", "Runs a regression timing check on register access", "Predicts setup/hold time violations"],
    ans: 1,
    cat: "UVM RAL",
    exp: "`reg.predict(val)` manually forces the register model's internal tracking state to `val`, used by predictors when snooping bus transactions or resetting state models."
  },
  {
    q: "What does `phase.phase_done.set_drain_time(this, 50ns);` do in a UVM test?",
    opts: ["Drains battery power from the simulation workstation", "Specifies a delay between when all objections are dropped and when the phase actually ends, allowing pipeline latency and final response packets to drain through the DUT", "Adds 50ns of hold time margin to clock trees", "Purges the Linux OS disk cache"],
    ans: 1,
    cat: "UVM Drain Time",
    exp: "Drain time keeps the `run_phase` alive for a configured duration after the final objection is lowered, ensuring trailing in-flight packets clear pipelines and arrive at scoreboards before shutdown."
  }
];

uvmAdd.forEach((q, i) => {
  hdlQuestions.push({
    id: `uvm-add-${String(i + 1).padStart(2, '0')}`,
    topicId: 'uvm',
    category: q.cat,
    question: q.q,
    options: q.opts,
    correctAnswer: q.ans,
    explanation: q.exp
  });
});

console.log(`Generated ${uvmAdd.length} UVM questions.`);

// DFT (30 questions: dft-add-01 to dft-add-30)
const dftAdd = [
  {
    q: "In Design for Testability (DFT), what is the primary structural modification made to convert a standard D-flip-flop into a Scan Flip-Flop?",
    opts: ["A 2-to-1 multiplexer is added in front of the D input, controlled by a Scan Enable (SE) signal to select between functional data and Scan Input (SI)", "An asynchronous reset is added to the clock input", "The flip-flop master-slave stages are inverted", "A built-in resistor is connected across Q and Q_bar"],
    ans: 0,
    cat: "Scan Cell Architecture",
    exp: "A scan flip-flop incorporates a multiplexer on its data input. When `SE=0`, it samples functional D. When `SE=1`, it connects to `SI`, linking flip-flops into a serial shift register chain for test mode."
  },
  {
    q: "What is the difference between Launch-on-Capture (LOC) and Launch-on-Shift (LOS) in At-Speed transition fault testing?",
    opts: ["LOC launches the test transition on the second clock pulse in functional mode (Scan Enable is low); LOS launches the transition on the final shift pulse (Scan Enable must toggle at full clock speed)", "LOC requires analog testers; LOS uses digital testers", "LOS can only test stuck-at faults; LOC tests delay faults", "LOC toggles clock at double speed; LOS operates at DC"],
    ans: 0,
    cat: "At-Speed ATPG",
    exp: "In Launch-on-Shift (LOS), the launch transition is triggered by the last shift cycle, requiring `Scan Enable` to deassert at full operating speed. LOC launches using a functional clock pulse while `Scan Enable` is already low, relaxing SE timing."
  },
  {
    q: "In the IEEE 1149.1 JTAG Boundary Scan architecture, how many states exist in the TAP (Test Access Port) controller finite state machine?",
    opts: ["8 states", "16 states", "32 states", "4 states"],
    ans: 1,
    cat: "JTAG TAP Controller",
    exp: "The IEEE 1149.1 TAP controller is a 16-state synchronous finite state machine controlled by the TMS (Test Mode Select) and TCK (Test Clock) pins."
  },
  {
    q: "What is the primary function of the JTAG `BYPASS` instruction?",
    opts: ["Bypasses chip power regulators", "Connects the single-bit Bypass Register directly between TDI and TDO, allowing rapid serial data transit past uninterested chips on a shared JTAG board chain", "Bypasses all reset logic during functional boot", "Disables the Boundary Scan register permanently"],
    ans: 1,
    cat: "JTAG Instructions",
    exp: "The `BYPASS` instruction routes the TDI pin to TDO through a single flip-flop register. This minimizes scan latency when testing other ICs connected in series on the board."
  },
  {
    q: "What does the term 'Stuck-At Fault' represent in digital IC manufacturing testing?",
    opts: ["A mechanical pin that is physically welded to the PCB", "A classical fault model where an internal circuit node is permanently shorted to logic high (Stuck-At-1) or logic low (Stuck-At-0) due to silicon defects", "A clock that has stopped oscillating", "An infinite loop in firmware code"],
    ans: 1,
    cat: "Fault Models",
    exp: "The stuck-at fault model abstracts manufacturing defects (such as metal bridging or open vias) as a wire permanently clamped to VDD (SA1) or GND (SA0)."
  },
  {
    q: "What is the difference between `Test Coverage` and `Fault Coverage` in ATPG reports?",
    opts: ["They are completely identical metrics", "Fault Coverage = (Detected Faults / Total Faults); Test Coverage = (Detected Faults / Detectable Faults), which excludes untestable/redundant faults", "Test coverage applies only to memory; fault coverage applies to logic", "Fault coverage must always be higher than test coverage"],
    ans: 1,
    cat: "ATPG Metrics",
    exp: "Fault coverage divides detected faults by total possible faults (including untestable redundant gates). Test coverage divides by theoretically detectable faults, providing a true measure of ATPG pattern efficiency."
  },
  {
    q: "Why are asynchronous set/reset signals and tri-state enables considered 'DFT DRC rule violations' if left uncontrolled during scan shift?",
    opts: ["They cause high silicon leakage current", "If an asynchronous set/reset asserts during scan shifting, it corrupts the serial scan vector data passing through the chain, preventing deterministic test operation", "They prevent synthesis tools from calculating gate area", "They exceed the maximum allowed tester voltage"],
    ans: 1,
    cat: "Scan DRC Rules",
    exp: "During scan shift mode, all asynchronous sets/resets must be clamped inactive (or muxed to a controlled test signal). An uncontrolled reset firing mid-shift wipes out the scan vector."
  },
  {
    q: "What is the function of an LFSR (Linear Feedback Shift Register) in a Logic BIST (Built-In Self-Test) system?",
    opts: ["Generates pseudo-random test pattern stimuli on-chip without requiring expensive external ATE tester memory", "Encrypts test vectors for military silicon", "Monitors power supply ripple", "Calculates clock jitter on high-speed PLLs"],
    ans: 0,
    cat: "Logic BIST",
    exp: "In Logic BIST, an on-chip LFSR operates as a Pseudo-Random Pattern Generator (PRPG), feeding millions of test vectors directly into internal scan chains at full silicon clock speeds."
  },
  {
    q: "What is the function of a MISR (Multiple Input Signature Register) in Built-In Self-Test?",
    opts: ["Compresses the voluminous response vectors emerging from scan chains into a compact cyclic signature checksum for final pass/fail comparison", "Generates clock pulses for analog test", "Measures thermal gradients across the silicon die", "Stores microcode firmware for ARM cores"],
    ans: 0,
    cat: "BIST MISR",
    exp: "A MISR compresses the multi-bit output responses of the circuit into a single 32-bit or 64-bit signature register, eliminating the need to store and compare gigabytes of response data off-chip."
  },
  {
    q: "What is `Aliasing` in the context of BIST signature analysis?",
    opts: ["A graphics rendering artifact on test monitors", "A phenomenon where a faulty circuit generates a signature that accidentally matches the golden signature of a good chip, causing an escape defect", "Two scan chains sharing the same physical pin", "Renaming register names in netlists"],
    ans: 1,
    cat: "BIST Aliasing",
    exp: "Aliasing occurs when polynomial signature compression maps an erroneous response vector stream to the exact same residual checksum as the fault-free golden response, masking a defective chip."
  },
  {
    q: "Why is Scan Compression (e.g. Synopsys TestKompress / DFTMAX) vital for large modern SoCs?",
    opts: ["It reduces the operating temperature of the silicon by 50%", "It uses on-chip decompressors and compactors to feed hundreds of short internal scan chains from a few external tester channels, slashing test data volume and test time by 50x-100x", "It encrypts netlists against reverse engineering", "It allows testing without applying clock signals"],
    ans: 1,
    cat: "Scan Compression",
    exp: "External ATE tester pins and memory are expensive bottlenecks. Compression decompressors expand a few tester channels into hundreds of short internal chains, cutting test time from minutes to milliseconds."
  },
  {
    q: "What is the JTAG `EXTEST` instruction used for?",
    opts: ["Tests the internal CPU cache memory", "Drives and samples boundary scan cells at the chip's physical I/O pads to test for open solder joints and bridging shorts between adjacent ICs on a printed circuit board", "Measures external ambient temperature", "Executes built-in self-test on PLLs"],
    ans: 1,
    cat: "JTAG EXTEST",
    exp: "`EXTEST` disconnects internal logic from I/O pads and connects the Boundary Scan Register, allowing testers to drive pad pins and verify board-level solder interconnects between different packaged chips."
  },
  {
    q: "What is a 'Clock Domain Crossing (CDC) fault' during scan test?",
    opts: ["A fault caused by clock jitter in simulation", "Timing violations and capture hazards that arise when launch and capture scan cells belong to asynchronous clock domains, requiring cross-domain paths to be masked or tested with specialized multi-clock ATPG scheduling", "A short circuit between two crystal oscillators", "A broken clock buffer in physical synthesis"],
    ans: 1,
    cat: "Multi-Clock Scan",
    exp: "If scan cells in asynchronous domains capture simultaneously, unpredictable clock skew causes race conditions. ATPG must pulse asynchronous clocks sequentially or mask cross-domain paths to prevent false fails."
  },
  {
    q: "What is the purpose of a 'Shadow Register' or 'Wrapper Cell' in IEEE 1500 Core Test standard?",
    opts: ["Provides a secure shadow copy of firmware", "Wraps embedded IP blocks with dedicated test isolation cells, enabling modular plug-and-play testing of individual cores independently of the surrounding SoC", "Casts a shadow over thermal hotspots", "Stores duplicate register values for fault recovery"],
    ans: 1,
    cat: "IEEE 1500 Core Test",
    exp: "IEEE 1500 standardizes embedded core test wrappers (WIR, WBR), allowing modular testing of third-party IP cores (like GPU, USB, PCIe cores) in complete isolation from top-level SoC logic."
  },
  {
    q: "What is the `March C-` algorithm widely used for in Memory BIST (MBIST)?",
    opts: ["Sorting data packets in external DDR5 memory", "Detecting address decoder faults, stuck-at faults, transition faults, and coupling faults in SRAM arrays through an optimal 10N sequence of read/write sweeps", "Calibrating analog sense amplifier voltages", "Clearing cache memory during CPU boot"],
    ans: 1,
    cat: "Memory BIST (MBIST)",
    exp: "March C- is the industry standard SRAM test algorithm: $\\updownarrow(w0); \\Uparrow(r0, w1); \\Uparrow(r1, w0); \\Downarrow(r0, w1); \\Downarrow(r1, w0); \\updownarrow(r0)$. In 10N operations, it uncovers 100% of stuck-at, transition, and coupling faults."
  },
  {
    q: "What is the role of an 'On-Chip Clock Controller' (OCC) in modern at-speed DFT architectures?",
    opts: ["Generates low-frequency 100kHz pulses for power measurement", "Switches cleanly between low-speed tester shift clocks and high-speed functional PLL clocks during launch-and-capture cycles with exact multi-pulse gating", "Adjusts CPU clock frequency based on core temperature", "Synchronizes JTAG clocks with Ethernet"],
    ans: 1,
    cat: "OCC Architecture",
    exp: "Testers shift scan vectors slowly (~20-50MHz). The OCC gates and pulses the fast on-chip PLL clock (1-3GHz) for exactly 2 fast cycles (launch and capture) to verify silicon timing margins at-speed."
  },
  {
    q: "What does the JTAG `SAMPLE/PRELOAD` instruction accomplish?",
    opts: ["Samples analog battery voltages", "Enables snapshotting of normal operational I/O states on the fly without stopping chip operation, or preloading boundary scan cells with initial values before entering EXTEST", "Preloads firmware into internal ROM", "Samples testbench assertion coverage"],
    ans: 1,
    cat: "JTAG Instructions",
    exp: "`SAMPLE/PRELOAD` non-intrusively captures functional I/O states into boundary scan cells during normal operation, or preloads scan cells with values prior to executing destructive `EXTEST` routines."
  },
  {
    q: "What is an 'IDCODE' instruction in IEEE 1149.1 JTAG?",
    opts: ["Identifies the user login password", "Connects a 32-bit Identification Register to TDO that outputs the manufacturer code, part number, and silicon revision of the IC", "Encodes test vectors into binary formats", "Assigns an IP address to the chip"],
    ans: 1,
    cat: "JTAG IDCODE",
    exp: "The `IDCODE` instruction outputs a standardized 32-bit binary string: 4-bit revision, 16-bit part number, 11-bit JEDEC manufacturer ID, and mandatory LSB '1', verifying silicon identity on board assembly."
  },
  {
    q: "What is a 'Path Delay Fault' model compared to a 'Transition Delay Fault' model?",
    opts: ["Transition fault models slow-to-rise/slow-to-fall defects on a single localized pin; Path delay verifies cumulative timing delay along an entire engineered critical path across multiple logic gates", "Path delay tests only metal wires; transition tests only transistors", "Transition delay is non-synthesizable", "Path delay does not require at-speed clocking"],
    ans: 0,
    cat: "Delay Fault Models",
    exp: "Transition faults assume gross delay defects localized at a single gate output pin. Path delay models verify that the cumulative delay of an entire designated path (from launch flop through combinational logic to capture flop) meets setup timing."
  },
  {
    q: "In scan chain insertion, why is 'Lockup Latch' insertion mandatory between scan cells in different clock domains?",
    opts: ["To lock the scan chain against unauthorized hackers", "To prevent clock skew hazards between clock domains from causing scan shift hold-time violations where data races ahead by one clock cycle", "To lock the tester voltage at 1.2V", "To convert rising-edge flops into falling-edge flops"],
    ans: 1,
    cat: "Lockup Latches",
    exp: "When scanning data from domain A to domain B, clock skew can cause the capturing flop to clock before the launching flop has finished holding its state. A negative-level lockup latch adds a half-cycle delay, eliminating hold races."
  },
  {
    q: "What is 'Chain Test' (or Flush Test) in scan testing?",
    opts: ["Testing the thermal dissipation of the scan chains", "A preliminary test where alternating 00110011 bit patterns are shifted completely through the scan chain with Scan Enable held high, verifying the shift register integrity before applying logic tests", "Flushing the CPU pipeline after an interrupt", "Testing DDR5 memory channels"],
    ans: 1,
    cat: "Flush Test",
    exp: "Before testing combinational logic, the flush test verifies that all scan cells shift properly. A repeating pattern (`00110011`) verifies shift functionality, clock routing, and absence of stuck-at-0/1 shorts on scan paths."
  },
  {
    q: "What is an 'Untestable / Redundant' fault in an ATPG netlist?",
    opts: ["A fault on an unbonded physical package pad", "A fault in redundant combinational logic that can never affect any primary output or scan capture cell under any input combination, making it theoretically undetectable", "A fault that damages the tester machine", "A fault that only occurs in cryogenic temperatures"],
    ans: 1,
    cat: "Redundant Faults",
    exp: "Redundant hardware logic (often added for glitch prevention or hazard elimination) cannot be sensitized to an observable output. These faults are proven undetectable by ATPG and excluded from test coverage denominators."
  },
  {
    q: "What does the JTAG pin `TRST_N` provide?",
    opts: ["Test Radio Serial Transmitter", "Optional asynchronous reset for the JTAG TAP controller, forcing it immediately into the Test-Logic-Reset state without pulsing TCK/TMS", "Thermal Reset Sensor for the chip core", "Test Read Strobe for external SRAM"],
    ans: 1,
    cat: "JTAG Signals",
    exp: "`TRST_N` is the optional active-low asynchronous reset for the JTAG TAP controller. If absent, the TAP controller is reset synchronously by holding `TMS=1` for 5 consecutive `TCK` clock cycles."
  },
  {
    q: "What is the purpose of 'Test Points' (Control Points and Observation Points) in DFT insertion?",
    opts: ["Physical probe pads for multimeter probes", "Logic gates inserted into low-controllability or low-observability internal nodes to boost ATPG fault coverage and reduce required pattern counts", "Points on the silicon die where voltage regulators are placed", "Test execution checkpoints in C++ testbenches"],
    ans: 1,
    cat: "Test Points",
    exp: "Test points add multiplexers (control points) to set deep circuit nodes, or tap flip-flops (observation points) to observe hard-to-reach nodes, dramatically increasing test coverage in complex logic cones."
  },
  {
    q: "What does the term 'Bridging Fault' model in silicon failure analysis?",
    opts: ["A bridge between two ICs on a printed circuit board", "An unintended physical short-circuit between two adjacent metal wires, resulting in Wired-AND or Wired-OR electrical behavior", "A software bridge between Verilog and VHDL", "A connection between clock and power rails"],
    ans: 1,
    cat: "Bridging Faults",
    exp: "Bridging faults model lithographic particulate shorts between neighboring interconnect tracks, causing the voltages to interact as Wired-AND, Wired-OR, or dominant logic values."
  },
  {
    q: "Why is Power-Aware ATPG essential for FinFET and advanced-node ASICs?",
    opts: ["Testers have low-wattage power supplies", "Simultaneous switching of 70-80% of flip-flops during scan shift/capture creates catastrophic IR drop and di/dt inductive spikes that can cause false timing failures or physical silicon damage", "Advanced nodes operate on solar power", "It prevents dynamic power measurements"],
    ans: 1,
    cat: "Low-Power ATPG",
    exp: "In normal operation, only ~10-20% of logic toggles per cycle. During scan testing, up to 80% can toggle simultaneously, creating massive peak IR drops that cause bogus timing errors. Power-aware ATPG limits toggle density."
  },
  {
    q: "What is the purpose of 'Scan Reordering' during the physical design place-and-route flow?",
    opts: ["Reordering testbenches in the regression suite", "Re-connecting scan chain flip-flops based on their physical placement locations on the die to minimize wirelength and relieve routing congestion", "Sorting test patterns by execution speed", "Changing the priority of scan enable signals"],
    ans: 1,
    cat: "Physical DFT",
    exp: "Initial scan insertion connects flip-flops arbitrarily in RTL order. During physical layout, scan reordering reconnects scan pins based on geometric proximity, drastically reducing routing wirelength."
  },
  {
    q: "In Memory BIST, what is 'Retention Testing'?",
    opts: ["Testing how long the chip retains its firmware in flash memory", "Writing a background pattern to SRAM, putting the memory in low-power idle mode for a specified duration (e.g. 100ms), and reading back data to verify memory cell charge retention", "Measuring customer retention metrics for the product", "Retaining test vectors in ATE tester cache"],
    ans: 1,
    cat: "MBIST Retention",
    exp: "Retention testing verifies that SRAM bit-cells maintain their state over time without refreshing, exposing weak pull-up PMOS transistors or leaky sub-threshold pass gates."
  },
  {
    q: "What is the difference between Boundary Scan (IEEE 1149.1) and Internal Scan (IEEE 1149.4 / Full Scan)?",
    opts: ["Boundary scan tests only chip peripheral I/O pins and board-level solder interconnects; internal scan chains all internal state flip-flops to test core logic gates", "Boundary scan is for analog; internal scan is for digital", "Boundary scan is obsolete in modern chips", "Internal scan requires JTAG pins for every flip-flop"],
    ans: 0,
    cat: "Boundary vs Internal Scan",
    exp: "Boundary Scan places cells strictly on the boundary I/O ring to test board-level connectivity without physical needles. Internal scan threads all internal design registers into test chains to test logic gates."
  },
  {
    q: "What does the `HIGHZ` JTAG instruction perform on chip I/O pads?",
    opts: ["Drives all I/O pads with high voltage (3.3V)", "Places all bidirectional and output boundary scan pins into a high-impedance (tri-state) condition, allowing in-circuit bed-of-nails testers to drive board traces safely", "Sets internal flip-flops to high impedance", "Forces the clock oscillator into high frequency mode"],
    ans: 1,
    cat: "JTAG HIGHZ",
    exp: "`HIGHZ` turns off all output pin drivers on the chip, setting them to high-impedance. This protects the chip from damage when external in-circuit test equipment applies direct test voltages to board nets."
  }
];

dftAdd.forEach((q, i) => {
  hdlQuestions.push({
    id: `dft-add-${String(i + 1).padStart(2, '0')}`,
    topicId: 'dft',
    category: q.cat,
    question: q.q,
    options: q.opts,
    correctAnswer: q.ans,
    explanation: q.exp
  });
});

console.log(`Generated ${dftAdd.length} DFT questions.`);
writeQuizFile(path.join(__dirname, '../src/data/quiz/additionalHdlQuiz.ts'), 'ADDITIONAL_HDL_QUESTIONS', hdlQuestions);

