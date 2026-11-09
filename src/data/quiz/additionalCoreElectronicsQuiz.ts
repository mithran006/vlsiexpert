import { QuizQuestion } from '../quizData';

export const ADDITIONAL_CORE_ELECTRONICS_QUESTIONS: QuizQuestion[] = [
  {
    "id": "dig-add-01",
    "topicId": "digital",
    "category": "Multiplexers",
    "question": "How many selection lines are required for a 32-to-1 multiplexer?",
    "options": [
      "5 selection lines ($2^5 = 32$)",
      "4 selection lines",
      "6 selection lines",
      "16 selection lines"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Multiplexers. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-02",
    "topicId": "digital",
    "category": "Counters",
    "question": "What is the primary operational hazard of an asynchronous (ripple) counter compared to a synchronous counter?",
    "options": [
      "Cumulative propagation delay through cascaded flip-flops limits maximum clock frequency and creates temporary decoding glitches",
      "Asynchronous counters consume 10x more power",
      "Asynchronous counters cannot count in binary",
      "Asynchronous counters require an external crystal per stage"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Counters. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-03",
    "topicId": "digital",
    "category": "Boolean Algebra",
    "question": "What does De Morgan's theorem state for the complement of a product: $\\overline{A \\cdot B}$?",
    "options": [
      "$\\overline{A} + \\overline{B}$",
      "$\\overline{A} \\cdot \\overline{B}$",
      "$A + B$",
      "$\\overline{A + B}$"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Boolean Algebra. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-04",
    "topicId": "digital",
    "category": "Universal Logic",
    "question": "What is the minimum number of 2-input NAND gates required to construct a 2-input XOR gate?",
    "options": [
      "4 NAND gates",
      "3 NAND gates",
      "5 NAND gates",
      "2 NAND gates"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Universal Logic. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-05",
    "topicId": "digital",
    "category": "Timing Parameters",
    "question": "What is the key timing definition of 'Hold Time' ($t_{hold}$) for a positive-edge triggered D-flip-flop?",
    "options": [
      "The minimum duration the data input must remain stable AFTER the active clock edge has occurred",
      "The minimum time data must be stable BEFORE the clock edge",
      "The time required for Q output to change after clock edge",
      "The clock pulse width"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Timing Parameters. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-06",
    "topicId": "digital",
    "category": "Flip-Flop Racing",
    "question": "What is the condition that causes a race condition (racing) in an unbuffered level-triggered JK flip-flop?",
    "options": [
      "When $J = 1$, $K = 1$, clock is held HIGH, and the clock pulse width is greater than the propagation delay of the flip-flop ($t_p < t_w$)",
      "When $J = 0$ and $K = 0$",
      "When clock frequency is under 1kHz",
      "When outputs are grounded"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Flip-Flop Racing. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-07",
    "topicId": "digital",
    "category": "Error Coding",
    "question": "What is the Hamming distance between two binary codewords `10110` and `11011`?",
    "options": [
      "3 (bits 1, 2, and 4 differ)",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Error Coding. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-08",
    "topicId": "digital",
    "category": "Gray Code",
    "question": "Why is Gray code utilized on optical shaft angle encoders instead of standard binary code?",
    "options": [
      "Only one bit changes state between adjacent positions, eliminating multi-bit switching ambiguity errors caused by sensor mechanical misalignments",
      "Gray code produces higher electrical voltage",
      "Gray code requires fewer sensor tracks",
      "Gray code counts in decimal"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Gray Code. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-09",
    "topicId": "digital",
    "category": "Master-Slave Flip-Flops",
    "question": "How does a master-slave flip-flop resolve the race-around problem of level-triggered latches?",
    "options": [
      "The master latch captures data on the clock leading edge while the slave is isolated; the slave updates outputs on the clock trailing edge while the master is isolated",
      "By using high-speed tunnel diodes",
      "By running on two independent power supplies",
      "By eliminating feedback paths"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Master-Slave Flip-Flops. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-10",
    "topicId": "digital",
    "category": "Hazards",
    "question": "What is a 'dynamic hazard' in combinational logic circuits?",
    "options": [
      "An output that changes multiple times (transient glitch oscillations) before settling to its final steady state when an input transitions once",
      "A gate that overheats dynamically",
      "A hazard caused by power supply noise",
      "A hazard that only occurs in dynamic RAM"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Hazards. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-11",
    "topicId": "digital",
    "category": "Hazard Elimination",
    "question": "How are static-1 hazards eliminated in a Karnaugh map (K-map) synthesis?",
    "options": [
      "By adding redundant consensus product terms (overlapping adjacent groups) to bridge boundaries between adjacent 1-cells",
      "By increasing clock frequency",
      "By replacing all gates with NOR gates",
      "By adding series resistors to outputs"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Hazard Elimination. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-12",
    "topicId": "digital",
    "category": "Signed Arithmetic",
    "question": "What is the two's complement representation of the decimal number -5 in a 4-bit signed binary system?",
    "options": [
      "`1011`",
      "`1101`",
      "`1010`",
      "`0101`"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Signed Arithmetic. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-13",
    "topicId": "digital",
    "category": "Logic Families",
    "question": "What is the fan-out capability of a digital logic gate?",
    "options": [
      "The maximum number of standard load inputs of the same logic family that the gate output can reliably drive without exceeding rated voltage margins",
      "The physical fan cooling airflow requirement",
      "The number of inputs the gate possesses",
      "The propagation delay multiplied by power"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Logic Families. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-14",
    "topicId": "digital",
    "category": "Parity Logic",
    "question": "What is the output of a 3-input parity generator when the inputs are $A=1, B=0, C=1$ (Even Parity bit output)?",
    "options": [
      "0 (since the number of 1s is already 2, an even number)",
      "1",
      "X",
      "High-Z"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Parity Logic. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-15",
    "topicId": "digital",
    "category": "Priority Encoders",
    "question": "What is the function of a Priority Encoder (e.g. 74HC148)?",
    "options": [
      "Encodes the highest-priority active input into a binary code, ignoring lower-priority active inputs",
      "Decodes binary into one-hot lines",
      "Multiplies two priority numbers",
      "Buffers signals with equal priority"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Priority Encoders. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-16",
    "topicId": "digital",
    "category": "Adders",
    "question": "In digital arithmetic, what is the advantage of a Carry-Lookahead Adder (CLA) over a Ripple-Carry Adder (RCA)?",
    "options": [
      "Generates carry signals in parallel using Generate ($G_i = A_i B_i$) and Propagate ($P_i = A_i \\oplus B_i$) logic, reducing addition delay from $O(N)$ to $O(\\log N)$",
      "CLA uses fewer transistors than RCA",
      "CLA operates on serial bit streams",
      "CLA requires no clock"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Adders. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-17",
    "topicId": "digital",
    "category": "Logic Thresholds",
    "question": "What is the output voltage level range for TTL logic high ($V_{OH}$ minimum and $V_{IH}$ minimum)?",
    "options": [
      "$V_{OH(min)} = 2.4V$, $V_{IH(min)} = 2.0V$",
      "$V_{OH(min)} = 4.5V$, $V_{IH(min)} = 3.5V$",
      "$V_{OH(min)} = 1.8V$, $V_{IH(min)} = 1.0V$",
      "$V_{OH(min)} = 0.4V$, $V_{IH(min)} = 0.8V$"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Logic Thresholds. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-18",
    "topicId": "digital",
    "category": "Schmitt Triggers",
    "question": "What is a 'Schmitt Trigger' gate used for on noisy digital inputs?",
    "options": [
      "Features dual switching thresholds ($V_{T+}$ and $V_{T-}$) providing hysteresis that cleans up slowly transitioning or noisy analog inputs into sharp, glitch-free digital square waves",
      "Multiplies input voltage by 10x",
      "Acts as an analog audio mixer",
      "Inverts signal polarity at microwave speeds"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Schmitt Triggers. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-19",
    "topicId": "digital",
    "category": "Counter Design",
    "question": "How many flip-flops are required to construct a Mod-12 counter?",
    "options": [
      "4 flip-flops ($2^3 = 8 < 12 \\le 2^4 = 16$)",
      "3 flip-flops",
      "12 flip-flops",
      "6 flip-flops"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Counter Design. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-20",
    "topicId": "digital",
    "category": "Ring Counters",
    "question": "What is a 'Johnson Ring Counter' (twisted ring counter) of N stages?",
    "options": [
      "An N-flip-flop shift register with inverted output of the last stage fed back to the input of the first stage, producing $2N$ unique states",
      "A counter that counts in Fibonacci numbers",
      "A counter that operates without clock pulses",
      "A ring of AND gates"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Ring Counters. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-21",
    "topicId": "digital",
    "category": "Open Drain Logic",
    "question": "What is the function of an open-collector (or open-drain) gate output?",
    "options": [
      "The output lacks an active pull-up transistor; it can only pull to GND or float to High-Z, allowing wired-AND bus connections with an external pull-up resistor",
      "It delivers maximum output current directly to ground",
      "It opens the circuit permanently when overloaded",
      "It connects directly to AC mains"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Open Drain Logic. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-22",
    "topicId": "digital",
    "category": "Multiplexers",
    "question": "What is the Boolean expression for the output of a 2-to-1 multiplexer with inputs $I_0, I_1$ and select $S$?",
    "options": [
      "$Y = \\overline{S} \\cdot I_0 + S \\cdot I_1$",
      "$Y = S \\cdot I_0 + \\overline{S} \\cdot I_1$",
      "$Y = I_0 \\oplus I_1 \\oplus S$",
      "$Y = S \\cdot (I_0 + I_1)$"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Multiplexers. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-23",
    "topicId": "digital",
    "category": "Bus Transceivers",
    "question": "What is the purpose of an 'output enable' (OE) pin on a bus transceiver (e.g. 74HC245)?",
    "options": [
      "Puts the transceiver outputs into a high-impedance (tri-state) mode when deasserted, disconnecting the chip from the shared bus to prevent contention",
      "Powers off the chip internally",
      "Inverts the data byte",
      "Enables the internal clock generator"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Bus Transceivers. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-24",
    "topicId": "digital",
    "category": "Static Timing",
    "question": "In sequential circuit timing, what is the maximum clock frequency formula ($F_{max}$) for a flip-flop to flip-flop register path?",
    "options": [
      "$T_{clk} \\ge t_{cq} + t_{comb(max)} + t_{setup} - t_{skew} \\implies F_{max} = 1 / T_{clk}$",
      "$T_{clk} \\ge t_{cq} - t_{hold}$",
      "$F_{max} = t_{comb} \\cdot t_{setup}$",
      "$F_{max} = 1 / (t_{cq} \\cdot 2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Static Timing. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-25",
    "topicId": "digital",
    "category": "FSM Architecture",
    "question": "What is an essential characteristic of a Mealy machine state transition graph?",
    "options": [
      "Output transitions are associated with the directed edges (transitions) between states, labeled as `Input / Output`",
      "Outputs are written inside state circles",
      "Mealy machines cannot have loops",
      "Mealy machines cannot use binary flip-flops"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: FSM Architecture. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-26",
    "topicId": "digital",
    "category": "BCD Codes",
    "question": "What is the decimal equivalent of the BCD (Binary Coded Decimal) value `0101 1001`?",
    "options": [
      "59",
      "89",
      "51",
      "121"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: BCD Codes. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-27",
    "topicId": "digital",
    "category": "Latches vs Flip-Flops",
    "question": "What is the primary difference between a transparent latch and an edge-triggered flip-flop?",
    "options": [
      "A latch is level-sensitive (output follows data continuously while enable is active); a flip-flop is edge-triggered (samples data only during an infinitesimal clock edge transition)",
      "Latches require two clocks; flip-flops require one",
      "Flip-flops consume zero dynamic power",
      "Latches cannot be built from NAND gates"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Latches vs Flip-Flops. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-28",
    "topicId": "digital",
    "category": "Noise Margins",
    "question": "What does the 'Noise Margin' of a digital logic family measure?",
    "options": [
      "The maximum spurious electrical noise voltage that can be superimposed on an input signal without corrupting the intended logic state recognition ($NM_H = V_{OH(min)} - V_{IH(min)}$, $NM_L = V_{IL(max)} - V_{OL(max)}$)",
      "The decibel audio noise of the cooling fan",
      "The RF radiation emitted by clock tracks",
      "The maximum power dissipation"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Noise Margins. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-29",
    "topicId": "digital",
    "category": "Basic Gates",
    "question": "What is the simplest gate required to invert a single digital signal?",
    "options": [
      "An inverter (NOT gate), or a 2-input NAND gate with both inputs tied together",
      "An OR gate with one input grounded",
      "An AND gate with one input tied to VCC",
      "A multiplexer with select tied to 1"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: Basic Gates. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "dig-add-30",
    "topicId": "digital",
    "category": "FPGA Architecture",
    "question": "What is the function of a Look-Up Table (LUT) in FPGA digital logic architectures?",
    "options": [
      "An SRAM-based truth table memory where the inputs act as address lines and the stored memory bit acts as the boolean function output, enabling any arbitrary N-input logic function",
      "A printed manual for engineers",
      "A hardware multiplier unit",
      "A fixed ROM containing the BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Digital Logic: FPGA Architecture. Correct answer option 1 accurately reflects physical digital design principles."
  },
  {
    "id": "cmos-add-01",
    "topicId": "cmos",
    "category": "CMOS Sizing",
    "question": "In a standard static CMOS inverter, why is the PMOS transistor typically sized approximately 2x to 3x wider than the NMOS transistor ($W_p \\approx 2 W_n$)?",
    "options": [
      "Hole mobility ($\\mu_p$) in silicon is roughly 2 to 3 times lower than electron mobility ($\\mu_n$), requiring a wider PMOS channel to equalize rise time and fall time ($t_r \\approx t_f$)",
      "PMOS drains more static current",
      "NMOS has higher threshold voltage",
      "To increase gate input capacitance"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: CMOS Sizing. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-02",
    "topicId": "cmos",
    "category": "Power Dissipation",
    "question": "What is the primary source of 'static power dissipation' in sub-10nm FinFET and nanosheet CMOS logic gates?",
    "options": [
      "Subthreshold leakage current ($I_{sub}$) flowing from drain to source when the transistor is nominally OFF, and gate-dielectric tunneling leakage ($I_{gate}$)",
      "Dynamic charging of load capacitors",
      "Inductive switching kickback",
      "Thermal radiation from the silicon substrate"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Power Dissipation. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-03",
    "topicId": "cmos",
    "category": "Dynamic Power",
    "question": "What does the formula $P_{dyn} = \\alpha \\cdot C_L \\cdot V_{DD}^2 \\cdot f_{clk}$ describe in CMOS circuits?",
    "options": [
      "Dynamic switching power consumption, showing a quadratic dependence on supply voltage ($V_{DD}^2$) and linear dependence on activity factor ($\\alpha$), load capacitance ($C_L$), and clock frequency",
      "Static leakage power formula",
      "Short-circuit crowbar current power",
      "Interconnect RC delay"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Dynamic Power. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-04",
    "topicId": "cmos",
    "category": "CMOS Latch-Up",
    "question": "What is 'Latch-up' in bulk CMOS integrated circuits and what causes it?",
    "options": [
      "A catastrophic parasitic silicon-controlled rectifier (SCR) formed by cross-coupled parasitic pnpn bipolar transistors between PMOS and NMOS wells that turns ON and creates a low-impedance short between VDD and GND",
      "A software latch inferred in Verilog",
      "A flip-flop failing setup time",
      "An open solder ball on a BGA package"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: CMOS Latch-Up. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-05",
    "topicId": "cmos",
    "category": "Layout Rules",
    "question": "How is Latch-up prevented in modern bulk CMOS layout design rules?",
    "options": [
      "By placing abundant tap cells (well taps to VDD and substrate taps to GND) and guard rings around diffusions to keep substrate resistance $R_{sub}$ negligible",
      "By operating chips at 100°C",
      "By removing all PMOS transistors",
      "By using aluminum interconnect wires"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Layout Rules. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-06",
    "topicId": "cmos",
    "category": "Static CMOS Principles",
    "question": "Why does static CMOS logic exhibit virtually zero static power consumption in steady-state logic levels?",
    "options": [
      "The pull-up PMOS network and pull-down NMOS network are complementary and mutually exclusive; one network is completely OFF whenever the other is ON, blocking DC conduction from VDD to GND",
      "CMOS transistors operate at absolute zero Kelvin",
      "CMOS uses optical photons instead of electrons",
      "CMOS gates lack ground connections"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Static CMOS Principles. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-07",
    "topicId": "cmos",
    "category": "Logical Effort",
    "question": "What is 'Logical Effort' in CMOS digital circuit delay optimization?",
    "options": [
      "A metric quantifying how much worse an arbitrary gate is at delivering output current compared to a standard inverter having identical input capacitance",
      "The number of hours required to write RTL code",
      "The CPU compiler execution time",
      "The energy consumed per clock transition"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Logical Effort. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-08",
    "topicId": "cmos",
    "category": "Logical Effort",
    "question": "What is the Logical Effort ($g$) of a 2-input static CMOS NAND gate?",
    "options": [
      "$g = 4/3$ (since input capacitance is $2 + 2 = 4$ compared to 3 for a standard inverter)",
      "$g = 1$",
      "$g = 5/3$",
      "$g = 2$"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Logical Effort. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-09",
    "topicId": "cmos",
    "category": "Logical Effort",
    "question": "What is the Logical Effort ($g$) of a 2-input static CMOS NOR gate?",
    "options": [
      "$g = 5/3$ (since PMOS stack requires $4 + 1 = 5$ input capacitance units compared to 3 for inverter)",
      "$g = 4/3$",
      "$g = 1$",
      "$g = 2$"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Logical Effort. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-10",
    "topicId": "cmos",
    "category": "Gate Topology",
    "question": "Why are static CMOS NAND gates generally preferred over NOR gates in silicon cell libraries?",
    "options": [
      "NAND has NMOS in series (fast electron mobility) and PMOS in parallel; NOR has PMOS in series (slow hole mobility), requiring massive PMOS sizing that increases input capacitance and delay",
      "NAND consumes fewer transistors",
      "NOR cannot be built in silicon",
      "NAND has zero leakage current"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Gate Topology. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-11",
    "topicId": "cmos",
    "category": "Device Physics",
    "question": "What is 'Velocity Saturation' in short-channel submicron MOSFET transistors?",
    "options": [
      "At high lateral electric fields ($E \\approx 10^4$ V/cm), carrier drift velocity saturates at $v_{sat} \\approx 10^7$ cm/s due to optical phonon scattering, causing drain current to scale linearly with $V_{GS} - V_{TH}$ rather than quadratically",
      "Transistors accelerating across the die",
      "The maximum speed of sound in silicon",
      "Clock frequency reaching microwave limits"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Device Physics. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-12",
    "topicId": "cmos",
    "category": "Body Effect",
    "question": "What is the 'Body Effect' (substrate bias effect) in MOSFETs?",
    "options": [
      "A reverse bias between the source and substrate body ($V_{SB} > 0$) widens the depletion region, increasing the effective threshold voltage ($V_{TH}$) of the transistor",
      "The heating of the IC plastic package",
      "Mechanical stress on silicon wafers",
      "Electrostatic discharge through human touch"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Body Effect. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-13",
    "topicId": "cmos",
    "category": "FinFET Architecture",
    "question": "What is the primary architectural advantage of FinFET (Fin Field-Effect Transistor) devices over planar bulk CMOS?",
    "options": [
      "A 3D thin silicon fin channel wrapped on three sides by the gate electrode, providing superior electrostatic gate control that suppresses short-channel effects and subthreshold leakage at sub-16nm nodes",
      "FinFETs can operate at 100V",
      "FinFETs eliminate the need for doping entirely",
      "FinFETs are manufactured on cardboard"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: FinFET Architecture. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-14",
    "topicId": "cmos",
    "category": "GAA Technology",
    "question": "What is Gate-All-Around (GAA) Nanosheet technology in 3nm and 2nm nodes?",
    "options": [
      "Horizontal stacked silicon nanosheets completely surrounded on all four sides by the gate material, providing optimal electrostatic channel control and customizable drive current via nanosheet width",
      "An analog ring oscillator topology",
      "A circular silicon die packaging technique",
      "A high-voltage power regulator"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: GAA Technology. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-15",
    "topicId": "cmos",
    "category": "Interconnect Timing",
    "question": "What is the 'Elmore Delay' approximation used for in CMOS interconnect analysis?",
    "options": [
      "An RC tree delay model that calculates signal propagation delay by summing the product of each resistor and its downstream downstream capacitive load: $\\tau = \\sum R_k C_k$",
      "A model for transistor gate leakage",
      "A formula for package thermal resistance",
      "An algorithm for power supply sizing"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Interconnect Timing. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-16",
    "topicId": "cmos",
    "category": "Crowbar Current",
    "question": "What is 'Crowbar Current' (short-circuit power dissipation) in CMOS switching?",
    "options": [
      "Transient direct path current flowing from VDD to GND during the switching interval when both PMOS and NMOS are momentarily turned ON simultaneously",
      "Static leakage through gate oxide",
      "Current drawn by electrostatic discharge protection diodes",
      "Current flowing through decoupling capacitors"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Crowbar Current. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-17",
    "topicId": "cmos",
    "category": "Subthreshold Physics",
    "question": "What does the 'Subthreshold Swing' ($S$) parameter measure in a MOSFET?",
    "options": [
      "The gate voltage ($V_{GS}$) increase required to increase subthreshold drain current by one decade (factor of 10), with a theoretical physical limit of ~60 mV/decade at room temperature",
      "The maximum clock swing in volts",
      "The time required to switch from 10% to 90%",
      "The gate leakage current per micron"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Subthreshold Physics. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-18",
    "topicId": "cmos",
    "category": "Short-Channel Effects",
    "question": "What is 'Drain-Induced Barrier Lowering' (DIBL) in short-channel MOSFETs?",
    "options": [
      "High drain voltage penetrates into the channel, pulling down the potential barrier between source and channel and lowering the effective threshold voltage $V_{TH}$",
      "A failure mechanism caused by metal electromigration",
      "A chemical etching defect in silicon manufacturing",
      "An intentional doping technique"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Short-Channel Effects. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-19",
    "topicId": "cmos",
    "category": "Dynamic Logic",
    "question": "What is 'Dynamic Logic' (Domino Logic) in high-speed digital CMOS?",
    "options": [
      "A circuit design technique that uses a clocked precharge phase (charging dynamic node to VDD) followed by an evaluate phase, eliminating PMOS logic networks to achieve maximum speed at the cost of noise vulnerability",
      "Logic gates that move physically on the chip",
      "Circuits that reconfigure their truth tables at runtime",
      "CMOS gates that run on AC power"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Dynamic Logic. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-20",
    "topicId": "cmos",
    "category": "Domino Logic",
    "question": "What is the function of a 'Keeper' transistor in dynamic Domino CMOS logic gates?",
    "options": [
      "A small weak PMOS transistor connected to the dynamic output node to counteract charge leakage and charge sharing, preventing floating state degradation without heavily resisting the evaluate pull-down network",
      "Keeps the clock running continuously",
      "Stores firmware encryption keys",
      "Prevents overvoltage on input pads"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Domino Logic. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-21",
    "topicId": "cmos",
    "category": "Transmission Gates",
    "question": "What is 'Transmission Gate' (analog switch) in CMOS circuits?",
    "options": [
      "A parallel combination of an NMOS and PMOS transistor driven by complementary gate signals ($C$ and $\\overline{C}$), capable of passing both strong logic 0 and strong logic 1 rail-to-rail without threshold drop",
      "A gateway connecting chips to the internet",
      "A one-way diode for serial signals",
      "A high-power relay for battery charging"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Transmission Gates. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-22",
    "topicId": "cmos",
    "category": "Pass-Transistor Logic",
    "question": "Why does a single NMOS pass-transistor pass a 'weak 1'?",
    "options": [
      "When the source voltage reaches $V_{DD} - V_{TH}$, the gate-to-source voltage drops to $V_{GS} = V_{TH}$, turning the transistor OFF and preventing the output from rising fully to $V_{DD}$",
      "NMOS transistors have high resistance to ground",
      "Electrons cannot travel uphill",
      "NMOS threshold voltage is negative"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Pass-Transistor Logic. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-23",
    "topicId": "cmos",
    "category": "Pass-Transistor Logic",
    "question": "Why does a single PMOS pass-transistor pass a 'weak 0'?",
    "options": [
      "When the source drops to $|V_{THp}|$, the PMOS gate-to-source voltage drops below threshold, turning it OFF before reaching true ground (0V)",
      "PMOS cannot sink current to ground",
      "Holes cannot cross the drain boundary",
      "PMOS requires a minimum 1.5V bias"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Pass-Transistor Logic. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-24",
    "topicId": "cmos",
    "category": "Reliability & Aging",
    "question": "What is 'Electromigration' in CMOS on-chip metal interconnects?",
    "options": [
      "The gradual physical displacement and transport of metal atoms caused by momentum transfer from high-density directional electron flow, resulting in voids (open circuits) and hillocks (short circuits)",
      "Electrons migrating between chip packages",
      "Software code migrating between CPU cores",
      "Silicon atoms moving into the gate oxide"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Reliability & Aging. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-25",
    "topicId": "cmos",
    "category": "Physical Design Rules",
    "question": "How is electromigration mitigated in physical ASIC backend design?",
    "options": [
      "By enforcing maximum current density ($J_{max}$) design rules, widening metal tracks, adding redundant via arrays, and using copper with cobalt/ruthenium liner barriers",
      "By operating chips at 150°C",
      "By reducing clock frequency to 1kHz",
      "By replacing copper with aluminum"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Physical Design Rules. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-26",
    "topicId": "cmos",
    "category": "Reliability & HCI",
    "question": "What is 'Hot Carrier Injection' (HCI) in CMOS transistors?",
    "options": [
      "High lateral electric fields accelerate electrons into high-energy 'hot' states, causing them to overcome the Si-$SiO_2$ potential barrier and become trapped in the gate oxide, permanently shifting $V_{TH}$ and degrading drive current over time",
      "Overheating caused by poor heatsink mounting",
      "Current injected during ESD events",
      "Thermal noise in analog resistors"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Reliability & HCI. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-27",
    "topicId": "cmos",
    "category": "Reliability & NBTI",
    "question": "What is 'Negative Bias Temperature Instability' (NBTI)?",
    "options": [
      "An aging phenomenon in PMOS transistors under negative gate bias and high temperature, breaking Si-H bonds at the gate interface and causing progressive $V_{TH}$ shift and circuit slowdown over years of operation",
      "A battery charging failure mode",
      "Cold-boot failure at sub-zero temperatures",
      "A software bug in thermal management code"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Reliability & NBTI. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-28",
    "topicId": "cmos",
    "category": "Physical Layout",
    "question": "What is the purpose of 'Filler Cells' in standard-cell ASIC placement?",
    "options": [
      "Fills empty spaces between placed standard cells to ensure continuous N-well and P-substrate implant continuity and prevent DRC violations in photolithography",
      "Stores temporary data during CPU calculations",
      "Acts as physical shock absorbers",
      "Balances power supply voltages dynamically"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Physical Layout. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-29",
    "topicId": "cmos",
    "category": "Signal Integrity",
    "question": "What is 'Cross-Talk Noise' in deep submicron CMOS interconnects?",
    "options": [
      "Capacitive coupling between parallel adjacent metal wires where a switching 'aggressor' net induces an unwanted voltage glitch or timing delay shift on a passive 'victim' net",
      "Acoustic noise generated by piezo inductors",
      "Interference between two audio speaker wires",
      "RF interference from Wi-Fi antennas"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Signal Integrity. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "cmos-add-30",
    "topicId": "cmos",
    "category": "Low-Power CMOS",
    "question": "How does 'Clock Gating' reduce dynamic power in CMOS synchronous registers?",
    "options": [
      "Disables the clock signal feeding register banks whenever the registers' enable conditions are inactive, eliminating unnecessary charging/discharging of clock pin capacitance and internal flop transistors",
      "Lowers the chip core voltage to zero",
      "Replaces digital flip-flops with analog resistors",
      "Switches from square waves to sine waves"
    ],
    "correctAnswer": 0,
    "explanation": "CMOS VLSI: Low-Power CMOS. Correct answer option 1 accurately reflects semiconductor physics and layout design."
  },
  {
    "id": "dev-add-01",
    "topicId": "electronics_devices",
    "category": "PN Junction Physics",
    "question": "In an abrupt PN junction diode at thermal equilibrium without external bias, what creates the built-in potential barrier ($V_{bi}$)?",
    "options": [
      "Diffusion of majority carriers across the junction uncovers immobile ionized donor ions in the N-region and acceptor ions in the P-region, forming a space charge depletion layer and an opposing electric field",
      "External battery charging",
      "Electrons ionizing silicon atoms into thermal plasma",
      "Chemical battery reactions"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: PN Junction Physics. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-02",
    "topicId": "electronics_devices",
    "category": "Built-in Potential",
    "question": "What is the formula for the built-in potential ($V_{bi}$) of a PN junction?",
    "options": [
      "$V_{bi} = V_t \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$",
      "$V_{bi} = V_t \\left(\\frac{N_A + N_D}{n_i}\\right)$",
      "$V_{bi} = \\frac{q}{kT} (N_A N_D)$",
      "$V_{bi} = V_t \\log_{10}(n_i)$"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Built-in Potential. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-03",
    "topicId": "electronics_devices",
    "category": "Thermal Voltage",
    "question": "What is the thermal voltage ($V_t = kT/q$) approximately equal to at room temperature (300K)?",
    "options": [
      "~25.86 mV (often approximated as 26 mV)",
      "~0.7 V",
      "~1.1 V",
      "~25.8 V"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Thermal Voltage. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-04",
    "topicId": "electronics_devices",
    "category": "Zener Breakdown",
    "question": "What is the primary physical breakdown mechanism in a Zener diode with a breakdown voltage below ~5V?",
    "options": [
      "Quantum mechanical band-to-band tunneling of electrons from the valence band to the conduction band under intense electric fields in heavily doped junctions",
      "Avalanche impact ionization multiplication",
      "Thermal runaway melting of silicon",
      "Dielectric capacitive punch-through"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Zener Breakdown. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-05",
    "topicId": "electronics_devices",
    "category": "Breakdown Physics",
    "question": "How does the temperature coefficient of an Avalanche breakdown diode (>7V) compare to a Zener tunneling breakdown diode (<5V)?",
    "options": [
      "Avalanche has a POSITIVE temperature coefficient (breakdown voltage increases with temperature); Zener tunneling has a NEGATIVE temperature coefficient (breakdown voltage decreases with temperature)",
      "Both have identical zero temperature coefficients",
      "Zener is positive; Avalanche is negative",
      "Both coefficients are highly non-linear and negative"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Breakdown Physics. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-06",
    "topicId": "electronics_devices",
    "category": "BJT Parameters",
    "question": "In a Bipolar Junction Transistor (BJT), what is the relationship between $\\alpha$ (common-base current gain) and $\\beta$ (common-emitter current gain)?",
    "options": [
      "$\\beta = \\frac{\\alpha}{1 - \\alpha}$ and $\\alpha = \\frac{\\beta}{1 + \\beta}$",
      "$\\beta = \\alpha \\cdot (1 - \\alpha)$",
      "$\\beta = \\frac{1 + \\alpha}{\\alpha}$",
      "$\\alpha = \\beta^2$"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: BJT Parameters. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-07",
    "topicId": "electronics_devices",
    "category": "Early Effect",
    "question": "What is the 'Early Effect' (base-width modulation) in BJT devices?",
    "options": [
      "An increase in reverse collector-base voltage ($V_{CB}$) expands the collector depletion region into the neutral base, narrowing the effective base width and causing collector current to rise with $V_{CE}$",
      "Transistors aging prematurely in early life",
      "A sudden drop in base current at sunrise",
      "High-frequency phase shift in RF amplifiers"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Early Effect. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-08",
    "topicId": "electronics_devices",
    "category": "Schottky Diodes",
    "question": "In a Schottky diode, why is the reverse recovery time ($t_{rr}$) practically negligible compared to a standard PN junction diode?",
    "options": [
      "It is a majority-carrier device (metal-semiconductor junction); there is virtually no minority-carrier charge storage in the neutral regions that must be cleared during turn-off",
      "It operates only at microwave frequencies",
      "The metal electrode acts as a superconductor",
      "It has zero capacitance"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Schottky Diodes. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-09",
    "topicId": "electronics_devices",
    "category": "Schottky vs PN",
    "question": "What is the forward voltage drop of a typical silicon Schottky diode compared to a standard silicon PN junction diode?",
    "options": [
      "Schottky is ~0.2V to 0.4V; standard PN is ~0.7V",
      "Schottky is ~1.2V; standard PN is ~0.2V",
      "Both are exactly 0.7V",
      "Schottky has zero forward drop"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Schottky vs PN. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-10",
    "topicId": "electronics_devices",
    "category": "Specialized Diodes",
    "question": "What is a 'Varactor Diode' (varicap) designed to do?",
    "options": [
      "Acts as a voltage-variable capacitor where the depletion layer width—and hence junction capacitance—varies as a function of applied reverse bias voltage, used in RF VCO tuning tanks",
      "Regulates high DC voltages",
      "Emits variable color laser light",
      "Measures magnetic flux fields"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Specialized Diodes. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-11",
    "topicId": "electronics_devices",
    "category": "Inversion Physics",
    "question": "In MOSFET inversion physics, what is the 'Strong Inversion' threshold condition?",
    "options": [
      "The surface potential ($\\phi_s$) reaches twice the bulk Fermi potential: $\\phi_s = 2\\phi_F$",
      "Surface potential equals zero",
      "Gate voltage equals supply voltage",
      "Drain current reaches 1 Ampere"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Inversion Physics. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-12",
    "topicId": "electronics_devices",
    "category": "Power MOSFETs",
    "question": "What is the purpose of the 'Split-Gate' or 'Shielded Gate' in modern Silicon Power Trench MOSFETs?",
    "options": [
      "Reduces gate-to-drain Miller capacitance ($Q_{gd}$), dramatically lowering switching losses in high-frequency DC-DC buck converters",
      "Divides the gate voltage in half",
      "Enables dual-core processing",
      "Shields the transistor from cosmic rays"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Power MOSFETs. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-13",
    "topicId": "electronics_devices",
    "category": "Semiconductor Bandgap",
    "question": "What is the bandgap energy ($E_g$) of silicon at room temperature (300K)?",
    "options": [
      "~1.12 eV",
      "~0.67 eV",
      "~3.4 eV",
      "~1.42 eV"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Semiconductor Bandgap. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-14",
    "topicId": "electronics_devices",
    "category": "Wide Bandgap Devices",
    "question": "Why is Gallium Nitride (GaN) and Silicon Carbide (SiC) referred to as 'Wide Bandgap' (WBG) semiconductors?",
    "options": [
      "Their bandgaps ($E_g \\approx 3.2$ to 3.4 eV) are ~3x wider than silicon, allowing them to withstand 10x higher critical electric breakdown fields and operate at higher voltages, temperatures, and switching speeds",
      "Their physical wafer diameter is 3x wider",
      "Their conduction bands have wider bandwidth for 5G",
      "They operate exclusively in optical telecommunications"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Wide Bandgap Devices. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-15",
    "topicId": "electronics_devices",
    "category": "JFET Physics",
    "question": "In a JFET (Junction Field-Effect Transistor), what is the 'Pinch-Off Voltage' ($V_P$)?",
    "options": [
      "The reverse gate-source voltage at which the two opposing depletion regions touch, pinching off the conductive channel and causing drain current to saturate",
      "The voltage at which the gate breaks down irreversibly",
      "The minimum voltage required to turn the JFET on",
      "The threshold voltage of the body diode"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: JFET Physics. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-16",
    "topicId": "electronics_devices",
    "category": "BJT Operating Modes",
    "question": "What is the operational state of an NPN BJT in the 'Saturation' region?",
    "options": [
      "Both the base-emitter junction AND the base-collector junction are forward-biased ($V_{BE} > 0$, $V_{BC} > 0$)",
      "Base-emitter is forward; base-collector is reverse",
      "Both junctions are reverse-biased",
      "Base-emitter is reverse; base-collector is forward"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: BJT Operating Modes. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-17",
    "topicId": "electronics_devices",
    "category": "BJT Active Region",
    "question": "What is the operational state of an NPN BJT in the 'Forward-Active' region?",
    "options": [
      "Base-emitter junction is forward-biased; base-collector junction is reverse-biased ($V_{BE} > 0$, $V_{BC} < 0$)",
      "Both junctions forward-biased",
      "Both junctions reverse-biased",
      "Base-emitter is reverse-biased"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: BJT Active Region. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-18",
    "topicId": "electronics_devices",
    "category": "Miller Effect",
    "question": "What is the 'Miller Effect' in transistor inverting voltage amplifiers?",
    "options": [
      "The effective input capacitance of an inverting amplifier is amplified by the voltage gain: $C_{in(Miller)} = C_f \\cdot (1 - A_v)$, degrading high-frequency bandwidth",
      "Transistors oscillating at microwave frequencies",
      "Gain dropping to zero at DC",
      "Thermal runaway in power amplifiers"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Miller Effect. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-19",
    "topicId": "electronics_devices",
    "category": "Optoelectronics",
    "question": "What is the function of a 'Light Emitting Diode' (LED) at the semiconductor level?",
    "options": [
      "Direct bandgap electron-hole radiative recombination releases energy in the form of photons ($E = h\\nu = hc/\\lambda$)",
      "Heating of silicon until it glows",
      "Fluorescence of plastic packaging",
      "Field emission of electrons into vacuum"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Optoelectronics. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-20",
    "topicId": "electronics_devices",
    "category": "Direct vs Indirect Bandgap",
    "question": "Why is silicon an inefficient light emitter for LEDs compared to Gallium Arsenide (GaAs)?",
    "options": [
      "Silicon is an INDIRECT bandgap semiconductor; electron-hole recombination requires an phonons (crystal momentum transfer) to conserve momentum, making non-radiative recombination overwhelmingly dominant",
      "Silicon is completely opaque to all light",
      "Silicon has too high electrical resistance",
      "Silicon melts at LED operating temperatures"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Direct vs Indirect Bandgap. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-21",
    "topicId": "electronics_devices",
    "category": "Photodiodes",
    "question": "In a photodiode, why is reverse bias applied during high-speed optical detection?",
    "options": [
      "Reverse bias widens the depletion region, decreasing junction capacitance ($C_j$) to maximize response bandwidth and creating a high electric field that rapidly sweeps photogenerated carrier pairs",
      "Reverse bias increases light emission",
      "Reverse bias keeps the diode cool",
      "Reverse bias amplifies DC current gain"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Photodiodes. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-22",
    "topicId": "electronics_devices",
    "category": "Power IGBTs",
    "question": "What is an Insulated Gate Bipolar Transistor (IGBT)?",
    "options": [
      "A hybrid power device combining the high input impedance and simple gate drive of a MOSFET with the high-current conduction and low saturation voltage of a BJT",
      "An isolated gate array for FPGAs",
      "A low-power CMOS operational amplifier",
      "A digital logic buffer with optical isolation"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Power IGBTs. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-23",
    "topicId": "electronics_devices",
    "category": "IGBT Characteristics",
    "question": "What is 'Tail Current' during the turn-off transient of an IGBT?",
    "options": [
      "Prolonged current conduction caused by the recombination of stored minority carriers in the wide, un-gated drift region of the BJT collector section, creating turn-off switching losses",
      "Current flowing through the heat sink",
      "Current drawn by the gate driver",
      "Leakage current in reverse breakdown"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: IGBT Characteristics. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-24",
    "topicId": "electronics_devices",
    "category": "Tunnel Diodes",
    "question": "What is a Tunnel Diode (Esaki Diode) and what is its unique electrical feature?",
    "options": [
      "A degenerate, heavily doped PN junction exhibiting 'Negative Differential Resistance' (NDR) due to quantum tunneling, enabling high-frequency microwave oscillators",
      "A diode that tunnels physically through the PCB",
      "A diode with zero forward resistance",
      "A diode used to drill vias in silicon"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Tunnel Diodes. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-25",
    "topicId": "electronics_devices",
    "category": "Hall Effect",
    "question": "What is the Hall Effect used to measure in semiconductor material characterization?",
    "options": [
      "Applying a magnetic field perpendicular to current flow induces a transverse Hall voltage, determining carrier concentration ($n$ or $p$), carrier mobility, and semiconductor conductivity type",
      "Measures the physical thickness of the silicon wafer",
      "Measures the melting point of the crystal",
      "Detects optical transparency"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Hall Effect. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-26",
    "topicId": "electronics_devices",
    "category": "Ohmic Contacts",
    "question": "What is an 'Ohmic Contact' between a metal and semiconductor?",
    "options": [
      "A non-rectifying junction with low resistance following Ohm's law in both current directions, fabricated by heavily doping the contact interface ($N^+$ or $P^+$) to enable quantum tunneling",
      "A contact made of pure copper only",
      "A contact that produces 1 Ohm resistance",
      "A contact that rectifies AC to DC"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Ohmic Contacts. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-27",
    "topicId": "electronics_devices",
    "category": "Carrier Transport",
    "question": "In semiconductor physics, what is the 'Einstein Relation' connecting diffusion constant ($D$) and mobility ($\\mu$)?",
    "options": [
      "$\\frac{D}{\\mu} = \\frac{kT}{q} = V_t$",
      "$\\frac{D}{\\mu} = \\frac{q}{kT}$",
      "$D \\cdot \\mu = V_t$",
      "$D = \\mu^2 \\cdot q$"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Carrier Transport. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-28",
    "topicId": "electronics_devices",
    "category": "Drift vs Diffusion",
    "question": "What is the 'Drift Current' in a semiconductor?",
    "options": [
      "Current caused by the movement of charged carriers (electrons and holes) under the influence of an applied electric field",
      "Current caused by concentration gradients",
      "Current caused by ambient heat only",
      "Current flowing through insulating dielectric"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Drift vs Diffusion. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-29",
    "topicId": "electronics_devices",
    "category": "Thyristors & Triacs",
    "question": "What is a TRIAC in AC power electronics?",
    "options": [
      "A bidirectional thyristor switch that can conduct current in either direction when triggered by a gate pulse, widely used in AC light dimmers and motor speed controllers",
      "A 3-phase AC transformer",
      "A high-speed operational amplifier",
      "A microsecond timing circuit"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Thyristors & Triacs. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "dev-add-30",
    "topicId": "electronics_devices",
    "category": "Fabrication Physics",
    "question": "In semiconductor fabrication, what is the role of 'Ion Implantation'?",
    "options": [
      "Accelerates dopant ions (e.g. Boron, Phosphorus, Arsenic) at high electric voltages into the silicon crystal lattice to create precise, controlled doping depth profiles and concentrations",
      "Cleans the wafer surface with chemical solvent",
      "Etches copper interconnect tracks",
      "Solders silicon dies onto lead frames"
    ],
    "correctAnswer": 0,
    "explanation": "Electronic Devices: Fabrication Physics. Correct answer option 1 accurately reflects solid-state semiconductor theory."
  },
  {
    "id": "pack-add-01",
    "topicId": "semiconductor_packaging",
    "category": "Package Topologies",
    "question": "What is the primary difference between a Ball Grid Array (BGA) package and a Quad Flat Package (QFP)?",
    "options": [
      "BGA utilizes an array of solder balls distributed across the entire underside of the package, providing vastly higher I/O density and shorter lead inductance than peripheral leaded QFP",
      "BGA has leads on all four edges; QFP has pins underneath",
      "BGA is only made of plastic, while QFP is only ceramic",
      "QFP supports 10x higher power dissipation than BGA"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Package Topologies. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-02",
    "topicId": "semiconductor_packaging",
    "category": "2.5D Advanced Packaging",
    "question": "What is 'CoWoS' (Chip-on-Wafer-on-Substrate) 2.5D packaging technology pioneered by TSMC?",
    "options": [
      "Multiple silicon dies (e.g. GPU/AI accelerators and HBM memory stacks) mounted side-by-side on a high-density silicon interposer containing submicron lithographic wiring traces, connected to a package substrate",
      "A method of gluing chips onto plastic boards",
      "A wireless chip interconnection method",
      "A 3D vertical wirebonding technique"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: 2.5D Advanced Packaging. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-03",
    "topicId": "semiconductor_packaging",
    "category": "3D TSV Interconnects",
    "question": "What is a 'Through-Silicon Via' (TSV) in 3D integrated circuit packaging?",
    "options": [
      "A vertical electrical connection etched completely through a silicon die and filled with copper, enabling ultra-short, ultra-dense vertical signal and power interconnects between vertically stacked dies",
      "A ventilation hole for silicon die cooling",
      "An alignment marker for photolithography",
      "An optical fiber drilled into the die"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: 3D TSV Interconnects. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-04",
    "topicId": "semiconductor_packaging",
    "category": "HBM Architecture",
    "question": "Why is High Bandwidth Memory (HBM3/HBM3e) stacked vertically on an interposer adjacent to GPUs rather than using standard DDR5 memory sticks?",
    "options": [
      "Provides a massive 1024-bit wide parallel interface per stack operating with short interconnect distances, achieving terabytes/sec of memory bandwidth with vastly lower energy per bit than PCB traces",
      "HBM3 uses standard PCIe slots",
      "HBM3 consumes zero dynamic power",
      "HBM3 is non-volatile flash memory"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: HBM Architecture. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-05",
    "topicId": "semiconductor_packaging",
    "category": "Thermal Management",
    "question": "What is 'Thermal Interface Material' (TIM 1 vs TIM 2) in microprocessor packaging?",
    "options": [
      "TIM 1 is placed between the silicon die and the integrated heat spreader (IHS); TIM 2 is placed between the IHS and the external heatsink/cooler",
      "TIM 1 is thermal paste; TIM 2 is cold water",
      "TIM 1 is electrical solder; TIM 2 is rubber",
      "There is no distinction"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Thermal Management. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-06",
    "topicId": "semiconductor_packaging",
    "category": "Bump Reliability",
    "question": "What is the physical failure mechanism of 'Electromigration' in flip-chip micro-bumps?",
    "options": [
      "High current density through tiny solder micro-bumps (25µm pitch) causes directional atomic flux of tin/copper atoms, forming voids on the cathode side and intermetallic whiskers on the anode side",
      "Solder balls melting from excessive ambient temperature",
      "Rust formation on package pins",
      "Static electricity arcing between balls"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Bump Reliability. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-07",
    "topicId": "semiconductor_packaging",
    "category": "Flip-Chip Assembly",
    "question": "What is the function of 'Underfill' epoxy in flip-chip packaging?",
    "options": [
      "Injected between the silicon die and organic substrate around solder bumps; cures into a rigid polymer that redistributes thermal expansion stress caused by CTE mismatch, preventing solder fatigue failure",
      "Glues heat spreaders to the chip",
      "Insulates against radio frequency noise",
      "Dissolves flux residue automatically"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Flip-Chip Assembly. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-08",
    "topicId": "semiconductor_packaging",
    "category": "Thermal-Mechanical Strain",
    "question": "What is the coefficient of thermal expansion (CTE) mismatch problem in electronic packaging?",
    "options": [
      "Silicon has a low CTE (~2.6 ppm/°C) while organic FR4 substrates have a high CTE (~14-17 ppm/°C); thermal cycling induces mechanical shear strain across solder joints, causing fatigue cracking",
      "Silicon expands faster than copper",
      "Heat sinks shrink when heated",
      "Solder does not expand with temperature"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Thermal-Mechanical Strain. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-09",
    "topicId": "semiconductor_packaging",
    "category": "FOWLP & InFO",
    "question": "What is 'Fan-Out Wafer-Level Packaging' (FOWLP, e.g. TSMC InFO)?",
    "options": [
      "Individual dies are embedded into an epoxy reconstituted wafer mold, allowing high-density redistribution layers (RDL) to fan out beyond the physical die boundary without requiring an organic laminate substrate",
      "Packaging chips with miniature cooling fans",
      "A wirebonding technique using fan-shaped wires",
      "A package for cooling high-power power supplies"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: FOWLP & InFO. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-10",
    "topicId": "semiconductor_packaging",
    "category": "RDL Technology",
    "question": "What is a 'Redistribution Layer' (RDL) in advanced semiconductor packaging?",
    "options": [
      "A thin-film metal layer (copper/polyimide) fabricated on top of a die or interposer to route I/O pads from tight on-chip pitch to relaxed bump pitches across the package surface",
      "A software layer that redistributes memory addresses",
      "A power distribution layer in PCB motherboards",
      "An optical coating on camera sensors"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: RDL Technology. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-11",
    "topicId": "semiconductor_packaging",
    "category": "JEDEC Standards",
    "question": "What does the JEDEC MSL (Moisture Sensitivity Level) rating classify for IC packages?",
    "options": [
      "The floor life and vulnerability of plastic surface-mount packages to moisture absorption, which can cause 'popcorning' delamination cracking during high-temperature reflow soldering",
      "The maximum humidity of cleanroom air",
      "The waterproof depth rating of smartphones",
      "The resistance to acid rain corrosion"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: JEDEC Standards. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-12",
    "topicId": "semiconductor_packaging",
    "category": "Packaging Defects",
    "question": "What is the 'Popcorn Effect' in plastic encapsulated semiconductor packages?",
    "options": [
      "Moisture trapped inside the permeable plastic mold compound rapidly vaporizes into high-pressure steam during ~260°C solder reflow, rupturing the package body with an audible pop",
      "Solder balls exploding under short circuit",
      "Plastic packaging turning yellow with age",
      "Chips rattling inside shipping tubes"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Packaging Defects. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-13",
    "topicId": "semiconductor_packaging",
    "category": "Package Classes",
    "question": "What is the difference between 'Leadframe Packaging' (e.g. SOIC, QFP) and 'Substrate Packaging' (e.g. BGA, LGA)?",
    "options": [
      "Leadframe packages use a stamped or etched metal frame with peripheral pins; substrate packages use multi-layer printed wiring board laminate with vias and solder ball matrices",
      "Leadframe is only for optical chips",
      "Substrate packages cannot handle digital signals",
      "Leadframe is obsolete and never manufactured"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Package Classes. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-14",
    "topicId": "semiconductor_packaging",
    "category": "CPU Sockets",
    "question": "What is an 'LGA' (Land Grid Array) socket system used on modern server and desktop CPUs?",
    "options": [
      "The CPU package has flat gold-plated contact pads underneath; the physical spring contact pins are housed in the motherboard socket, eliminating fragile CPU pins",
      "Pins on the CPU that solder into through-holes",
      "A ball grid array that melts during boot",
      "A wireless socket interface"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: CPU Sockets. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-15",
    "topicId": "semiconductor_packaging",
    "category": "SiP vs SoC",
    "question": "What is 'System-in-Package' (SiP) technology compared to System-on-Chip (SoC)?",
    "options": [
      "SiP integrates multiple heterogeneous dies (processors, memory, RF transceivers, passives) into a single unified package module; SoC integrates all circuits onto a single monolithic silicon die",
      "SiP operates only on software simulations",
      "SoC requires external wirebonds between gates",
      "SiP is strictly for analog audio"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: SiP vs SoC. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-16",
    "topicId": "semiconductor_packaging",
    "category": "Wirebonding",
    "question": "What is 'Wire Bonding' and what are the two predominant wire materials used in microelectronics?",
    "options": [
      "Attaching micro-wires using ultrasonic energy and thermocompression to link die bond pads to leadframes; primarily using Gold (Au), Copper (Cu), or Aluminum (Al) wires",
      "Soldering copper wires using handheld soldering irons",
      "Laser welding optical glass fibers",
      "Printed carbon nanotube tracks"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Wirebonding. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-17",
    "topicId": "semiconductor_packaging",
    "category": "Bonding Materials",
    "question": "What is the advantage of Copper (Cu) wirebonding over traditional Gold (Au) wirebonding?",
    "options": [
      "Copper has significantly lower raw material cost, higher electrical conductivity, higher thermal conductivity, and slower intermetallic compound (IMC) growth rate at elevated temperatures",
      "Copper melts at room temperature",
      "Gold reacts aggressively with silicon",
      "Copper requires no ultrasonic energy"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Bonding Materials. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-18",
    "topicId": "semiconductor_packaging",
    "category": "Intermetallic Failures",
    "question": "What is 'Purple Plague' in gold-aluminum wire bonding reliability?",
    "options": [
      "Brittle intermetallic compounds ($AuAl_2$, $Au_5Al_2$) formed between gold wires and aluminum bond pads under high temperatures, resulting in void formation (Kirkendall voids) and mechanical bond fracture",
      "A virus that infects cleanroom automation",
      "Purple discoloration of epoxy mold compound",
      "Oxidation of copper traces"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Intermetallic Failures. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-19",
    "topicId": "semiconductor_packaging",
    "category": "Power Substrates",
    "question": "What is 'Direct Bond Copper' (DBC) or 'Direct Plated Copper' (DPC) used for in high-power modules?",
    "options": [
      "A ceramic substrate (Al2O3 or AlN) with pure copper bonded directly on both sides, providing exceptional electrical isolation (>3kV) and superior thermal conductivity for power IGBT modules",
      "A copper wire dipped in acid",
      "A method for soldering battery terminals",
      "A copper heatpipe inside laptops"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Power Substrates. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-20",
    "topicId": "semiconductor_packaging",
    "category": "Thermal Resistance",
    "question": "What is 'Thermal Resistance' ($\\theta_{JC}$, Junction-to-Case) of an IC package?",
    "options": [
      "The temperature rise in °C of the silicon junction per Watt of dissipated power transferred from the die to the package surface: $\\theta_{JC} = \\frac{T_J - T_C}{P}$ (°C/W)",
      "The electrical resistance of the ground wire",
      "The thermal melting point of plastic",
      "The cooling fan speed per degree"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Thermal Resistance. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-21",
    "topicId": "semiconductor_packaging",
    "category": "Thermal Solutions",
    "question": "What is a 'Heat Pipe' or 'Vapor Chamber' used in high-performance electronics cooling?",
    "options": [
      "A sealed vacuum copper vessel containing a working fluid (water) and internal capillary wick structure; fluid vaporizes at the heat source, travels to the cold end, condenses, and returns via capillary action",
      "A pipe that blows hot air out of servers",
      "A plastic tube for liquid nitrogen",
      "A solid copper rod without fluid"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Thermal Solutions. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-22",
    "topicId": "semiconductor_packaging",
    "category": "Hermetic Packages",
    "question": "What is 'Hermetic Packaging' in aerospace and defense microelectronics?",
    "options": [
      "A completely airtight, moisture-impermeable package construction using welded metal or glass-sealed ceramic that prevents ingress of oxygen and moisture, protecting silicon from corrosion",
      "A plastic bag used for chip shipping",
      "A package that dissolves in water",
      "A non-conductive cardboard box"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Hermetic Packages. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-23",
    "topicId": "semiconductor_packaging",
    "category": "Package Warpage",
    "question": "What is 'Warpage' in thin semiconductor packages and why is it critical during SMT reflow?",
    "options": [
      "Uneven thermal expansion causes the package substrate to bow or twist concave/convex during the 260°C reflow oven cycle, causing solder ball bridging shorts or open non-wetting defects",
      "The chip spinning on the PCB",
      "The cracking of the copper heat spreader",
      "The warping of optical lenses"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Package Warpage. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-24",
    "topicId": "semiconductor_packaging",
    "category": "Hybrid Bonding",
    "question": "What is 'Hybrid Bonding' (Direct Cu-Cu Wafer/Die Bonding, e.g. TSMC SoIC / AMD 3D V-Cache)?",
    "options": [
      "Direct molecular bonding of planarized dielectric-to-dielectric ($SiO_2$) and metal-to-metal (Cu-to-Cu) interfaces without intervening solder micro-bumps, achieving sub-micron interconnect pitch (<9µm) and massive I/O density",
      "Soldering chips with lead-free solder paste",
      "Gluing chips with thermal adhesive",
      "A hybrid of optical and copper links"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Hybrid Bonding. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-25",
    "topicId": "semiconductor_packaging",
    "category": "QFN Packages",
    "question": "What is a 'Leadless' surface mount package (e.g. QFN / DFN)?",
    "options": [
      "A plastic encapsulated package with flat metal contact pads exposed flush with the bottom perimeter surface instead of protruding leads, offering small footprint and excellent thermal pads",
      "A package manufactured without lead (Pb) metal",
      "A package that connects via Bluetooth",
      "A through-hole package"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: QFN Packages. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-26",
    "topicId": "semiconductor_packaging",
    "category": "QFN Thermal Pad",
    "question": "What is the purpose of the exposed central metal pad on the underside of a QFN package?",
    "options": [
      "Solders directly to a copper thermal pad with thermal vias on the PCB, providing a low thermal resistance path to dissipate heat from the silicon die",
      "Connects to the testbench oscilloscope",
      "Acts as an antenna ground plane",
      "Is purely decorative"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: QFN Thermal Pad. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-27",
    "topicId": "semiconductor_packaging",
    "category": "SMT Defects",
    "question": "What is 'Solder Bridging' during automated SMT PCB assembly?",
    "options": [
      "An unintended solder short circuit formed between two adjacent pads or pins due to excessive solder paste volume, misalignment, or component warpage",
      "A bridge supporting heavy components",
      "A bridge connecting power planes",
      "A test probe method"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: SMT Defects. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-28",
    "topicId": "semiconductor_packaging",
    "category": "Solder Voiding",
    "question": "What is 'Voiding' in solder joints and thermal interface materials?",
    "options": [
      "Microscopic trapped gas bubbles within the solidified solder or thermal grease layer that act as thermal insulators and mechanical stress concentrations, raising junction temperatures",
      "A joint completely devoid of metal",
      "An intentional cooling channel",
      "A gap created by laser drilling"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Solder Voiding. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-29",
    "topicId": "semiconductor_packaging",
    "category": "RoHS Compliance",
    "question": "What is the RoHS (Restriction of Hazardous Substances) European directive in electronics manufacturing?",
    "options": [
      "Restricts the use of specific hazardous materials—most notably banning Lead (Pb) in consumer solder—mandating transition to Lead-Free solders (like SAC305: 96.5% Sn, 3.0% Ag, 0.5% Cu)",
      "Restricts high-frequency radio transmissions",
      "Regulates software license distribution",
      "Bans packaging made from plastic"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: RoHS Compliance. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "pack-add-30",
    "topicId": "semiconductor_packaging",
    "category": "Tin Whiskers",
    "question": "What is 'Tin Whisker' growth in lead-free electronics assemblies?",
    "options": [
      "Spontaneous, single-crystal filamentary growths erupting from electroplated pure tin surfaces under compressive stress, capable of bridging adjacent pins and causing catastrophic short circuits",
      "Hair caught in solder paste",
      "A flux residue stain",
      "A visual inspection artifact under X-ray"
    ],
    "correctAnswer": 0,
    "explanation": "Semiconductor Packaging: Tin Whiskers. Correct answer option 1 accurately reflects advanced packaging and assembly standards."
  },
  {
    "id": "iot-add-01",
    "topicId": "embedded_iot",
    "category": "BLE Architecture",
    "question": "In low-power IoT wireless sensors, what is the key power advantage of Bluetooth Low Energy (BLE) over Classic Bluetooth?",
    "options": [
      "BLE is engineered for short burst transmissions of small data packets with microsecond connection setups and extended sleep intervals, allowing devices to operate for years on coin-cell batteries",
      "BLE has a 100km wireless range",
      "BLE transmits raw 4K video streams",
      "BLE requires no antenna"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: BLE Architecture. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-02",
    "topicId": "embedded_iot",
    "category": "MQTT Protocol",
    "question": "What does the MQTT (Message Queuing Telemetry Transport) protocol use for message routing in IoT cloud telemetry?",
    "options": [
      "A lightweight publish/subscribe architecture brokered by a central server where clients publish messages to hierarchical string topics (e.g. `sensors/room1/temp`)",
      "Direct point-to-point peer-to-peer mesh routing",
      "HTTP POST requests with XML envelopes",
      "Raw UDP broadcast sockets"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: MQTT Protocol. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-03",
    "topicId": "embedded_iot",
    "category": "MQTT QoS",
    "question": "What is MQTT Quality of Service (QoS) Level 1 guarantee?",
    "options": [
      "Delivered at least once: sender transmits and waits for a `PUBACK` from receiver, resending if unacknowledged (potential duplicate packets)",
      "Delivered at most once (fire and forget, QoS 0)",
      "Delivered exactly once (QoS 2 with 4-way handshake)",
      "Delivered within 1 millisecond"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: MQTT QoS. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-04",
    "topicId": "embedded_iot",
    "category": "LoRaWAN Architecture",
    "question": "What is LoRaWAN and for what application profile is it optimized?",
    "options": [
      "A Low-Power Wide-Area Network (LPWAN) protocol operating in sub-GHz ISM bands using Chirp Spread Spectrum (CSS) modulation, offering 5-15km rural range with low bitrates (0.3-50 kbps) for battery-operated sensors",
      "A short-range 60GHz wireless HDMI protocol",
      "A high-speed Wi-Fi replacement for laptops",
      "An optical laser satellite network"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: LoRaWAN Architecture. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-05",
    "topicId": "embedded_iot",
    "category": "LoRa Spreading Factor",
    "question": "In LoRa modulation, what is the 'Spreading Factor' (SF7 to SF12)?",
    "options": [
      "The ratio between chip rate and symbol rate; higher SF increases receiver sensitivity and transmission range, but reduces effective data rate and increases on-air transmission time",
      "The physical width of the antenna",
      "The number of frequency channels in the band",
      "The encryption key length"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: LoRa Spreading Factor. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-06",
    "topicId": "embedded_iot",
    "category": "CoAP Protocol",
    "question": "What is CoAP (Constrained Application Protocol) in the IoT protocol stack?",
    "options": [
      "A specialized RESTful web transfer protocol running over lightweight UDP designed for resource-constrained microcontrollers, using compact 4-byte binary headers",
      "A proprietary protocol from Apple",
      "A high-bandwidth video compression codec",
      "A protocol for programming flash chips"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: CoAP Protocol. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-07",
    "topicId": "embedded_iot",
    "category": "Zigbee Mesh",
    "question": "What is Zigbee (IEEE 802.15.4) and what network topology does it support natively?",
    "options": [
      "A low-power, low-data-rate wireless standard operating at 2.4GHz that natively supports multi-hop self-healing mesh networking across hundreds of router and end-device nodes",
      "A high-speed cellular 5G network",
      "A star-only network topology",
      "A wired RS-485 bus protocol"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Zigbee Mesh. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-08",
    "topicId": "embedded_iot",
    "category": "Hardware Security",
    "question": "In IoT device security, what is a 'Hardware Root of Trust' (RoT)?",
    "options": [
      "A secure cryptographic foundation embedded in silicon (such as immutable boot ROM, PUF, or hardware security module) that cannot be altered by software and cryptographically verifies bootloader integrity",
      "A strong administrative password",
      "A firewall router installed in the home",
      "An antivirus scanner in the cloud"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Hardware Security. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-09",
    "topicId": "embedded_iot",
    "category": "PUF Security",
    "question": "What is a Physically Unclonable Function (PUF) in IoT microcontrollers?",
    "options": [
      "Exploits microscopic, uncontrollable physical manufacturing variations in silicon transistors (e.g. SRAM startup states) to generate a unique, non-cloneable cryptographic key that is never stored in flash",
      "A physical tamper switch on the enclosure",
      "An uncopyable software program",
      "A biometric fingerprint reader"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: PUF Security. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-10",
    "topicId": "embedded_iot",
    "category": "Secure Boot",
    "question": "What is 'Secure Boot' in microcontroller IoT firmware updates?",
    "options": [
      "A cryptographic verification sequence where the hardware ROM checks the digital signature (RSA/ECC) of incoming firmware binaries against public keys burned into one-time programmable (OTP) fuses before execution",
      "Booting the microcontroller with a secret pin code",
      "Booting over a VPN tunnel",
      "Preventing the microcontroller from restarting"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Secure Boot. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-11",
    "topicId": "embedded_iot",
    "category": "Energy Harvesting",
    "question": "What is 'Energy Harvesting' in self-powered IoT endpoints?",
    "options": [
      "Capturing ambient energy from the local environment (solar light, thermal gradients via TEG, mechanical vibrations via piezo, or RF fields) to charge supercapacitors and eliminate battery replacements",
      "Harvesting lithium from recycled batteries",
      "Downloading energy from Wi-Fi routers",
      "Overclocking microcontrollers to generate power"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Energy Harvesting. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-12",
    "topicId": "embedded_iot",
    "category": "MQTT Keep-Alive",
    "question": "What does the 'Keep-Alive' ping mechanism in MQTT achieve?",
    "options": [
      "Periodically transmits empty PINGREQ / PINGRESP packets between client and broker; if missed, the broker detects silent connection drop and triggers the client's pre-configured Last Will and Testament (LWT) message",
      "Keeps the battery voltage topped up",
      "Keeps the microcontroller CPU at 100% load",
      "Pings the Google DNS server"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: MQTT Keep-Alive. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-13",
    "topicId": "embedded_iot",
    "category": "Matter Standard",
    "question": "What is 'Matter' in the modern smart home IoT ecosystem?",
    "options": [
      "A unified, IP-based application connectivity standard running over Wi-Fi, Thread, and Ethernet that enables interoperability across Apple Home, Google Home, and Amazon Alexa ecosystems",
      "A new physical silicon material replacing silicon",
      "A battery chemistry standard",
      "A cloud server database engine"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Matter Standard. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-14",
    "topicId": "embedded_iot",
    "category": "Thread Mesh",
    "question": "What is the 'Thread' wireless protocol used with Matter?",
    "options": [
      "A low-power, IPv6-addressable (6LoWPAN) wireless mesh protocol based on IEEE 802.15.4 with no single point of failure and self-healing border routers",
      "A multi-threaded C library for Linux",
      "A cellular 4G protocol for tractors",
      "An audio streaming format"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Thread Mesh. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-15",
    "topicId": "embedded_iot",
    "category": "6LoWPAN",
    "question": "What is the purpose of the 6LoWPAN adaptation layer?",
    "options": [
      "Compresses complex IPv6 headers (40 bytes down to a few bytes) and handles packet fragmentation so that standard IPv6 packets can travel across resource-constrained IEEE 802.15.4 radio frames (127 bytes max)",
      "Converts IPv4 addresses to MAC addresses",
      "Translates Wi-Fi into Bluetooth",
      "Provides AES-256 software encryption"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: 6LoWPAN. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-16",
    "topicId": "embedded_iot",
    "category": "OTA Updates",
    "question": "What is an OTA (Over-The-Air) firmware update architecture with A/B dual-partitioning?",
    "options": [
      "Flash memory contains two application slots; new firmware is downloaded and verified in the inactive slot; on success, the bootloader points to the new slot; if it fails to boot, it rolls back automatically to the working slot",
      "Flashing microcontrollers through a drone in the air",
      "Downloading firmware over satellite radio only",
      "Erasing the entire flash memory before download"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: OTA Updates. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-17",
    "topicId": "embedded_iot",
    "category": "Edge Computing",
    "question": "What is 'Edge Computing' in industrial IoT sensor networks?",
    "options": [
      "Executing data filtering, anomaly detection, and ML inference directly on local microcontrollers or edge gateways rather than sending raw continuous data streams to distant cloud data centers",
      "Placing computers at the physical edge of desks",
      "Computing on the edges of silicon wafers",
      "Edge-triggered flip-flop calculations"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Edge Computing. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-18",
    "topicId": "embedded_iot",
    "category": "Transport Layer",
    "question": "Why is UDP preferred over TCP for low-power sensor networks communicating over lossy wireless channels?",
    "options": [
      "UDP has no connection setup handshake, no retransmission buffers, and a tiny 8-byte header, consuming significantly less transmission energy and airtime than TCP (20-byte header with ACKs)",
      "UDP is completely error-free",
      "UDP encrypts data by default",
      "TCP cannot run on microcontrollers"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Transport Layer. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-19",
    "topicId": "embedded_iot",
    "category": "BLE Beacons",
    "question": "In BLE advertising, what is an 'iBeacon' or 'Eddystone' beacon?",
    "options": [
      "A transmit-only BLE peripheral that continuously broadcasts a fixed UUID, major/minor IDs, or URLs at set intervals for indoor proximity positioning and asset tracking",
      "A high-power microwave lighthouse",
      "A physical searchlight on IoT devices",
      "An FM radio transmitter"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: BLE Beacons. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-20",
    "topicId": "embedded_iot",
    "category": "IoT Security & TLS",
    "question": "What is the purpose of TLS 1.3 / DTLS in securing IoT sensor communication?",
    "options": [
      "Provides end-to-end encryption, authentication (via X.509 certificates), and message integrity, preventing eavesdropping and man-in-the-middle attacks over the internet",
      "Compresses JSON strings",
      "Assigns static IP addresses to microcontrollers",
      "Converts AC power to DC"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: IoT Security & TLS. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-21",
    "topicId": "embedded_iot",
    "category": "System Reliability",
    "question": "What is a 'Watchdog Timer' heartbeat in remote solar-powered IoT stations?",
    "options": [
      "Hardware timer that resets the system if the application software deadlocks or hangs due to transient single-event upsets or cellular modem network lockups",
      "Measures battery current draw",
      "Counts solar irradiance hours",
      "Transmits radio beeps to satellites"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: System Reliability. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-22",
    "topicId": "embedded_iot",
    "category": "Hardware Crypto",
    "question": "What is the function of an embedded Crypto Accelerator (e.g. ATECC608A secure element)?",
    "options": [
      "A tamper-resistant hardware coprocessor that securely stores private keys in hardware and accelerates asymmetric ECDSA signing and symmetric AES/SHA operations without exposing keys to CPU memory",
      "Accelerates bitcoin mining on microcontrollers",
      "Encrypts display pixel buffers",
      "Generates PWM signals for motors"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Hardware Crypto. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-23",
    "topicId": "embedded_iot",
    "category": "LoRaWAN Classes",
    "question": "In LoRaWAN, what is a 'Class A' device operational profile?",
    "options": [
      "The lowest power profile: after each uplink transmission, the device opens two brief receive windows (RX1 and RX2); downlinks can only be received immediately following an uplink",
      "Continuously listens for downlinks with receiver on 100% of the time (Class C)",
      "Synchronizes to periodic beacon pulses (Class B)",
      "Operates only on mains electricity"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: LoRaWAN Classes. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-24",
    "topicId": "embedded_iot",
    "category": "RF Regulations",
    "question": "What does the 'Duty Cycle' regulation (e.g. 1% in EU 868MHz band) enforce on IoT radios?",
    "options": [
      "A transmitter may only occupy the radio spectrum for a maximum of 36 seconds per hour (1% of time), preventing spectrum congestion and ensuring fair access for all devices",
      "The battery charging duty cycle",
      "The PWM duty cycle of status LEDs",
      "The CPU sleep duration"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: RF Regulations. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-25",
    "topicId": "embedded_iot",
    "category": "Sensor Fusion",
    "question": "What is 'Sensor Fusion' in wearable IoT devices?",
    "options": [
      "Combining sensory data from multiple distinct sensors (e.g. 3-axis accelerometer, gyroscope, magnetometer via Kalman filtering) to compute an accurate, drift-compensated orientation estimation",
      "Melting sensors together during manufacturing",
      "Sharing power wires between sensors",
      "Averaging readings from duplicate temperature probes"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Sensor Fusion. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-26",
    "topicId": "embedded_iot",
    "category": "MQTT Features",
    "question": "What is the purpose of the 'Last Will and Testament' (LWT) message in MQTT?",
    "options": [
      "A pre-configured message registered with the broker during connection; if the client disconnects unexpectedly (e.g. battery dies or link drops), the broker automatically publishes the LWT message to inform subscribers",
      "A legal document signed by the developer",
      "A diagnostic memory dump sent on fatal crash",
      "A message sent right before a planned reboot"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: MQTT Features. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-27",
    "topicId": "embedded_iot",
    "category": "Cellular IoT",
    "question": "What is 'Cellular NB-IoT' (Narrowband IoT / LTE Cat-NB1) designed for?",
    "options": [
      "A 3GPP cellular standard operating in licensed spectrum optimized for stationary low-throughput sensors, offering deep indoor building penetration (+20dB over GSM) and 10-year battery life",
      "High-speed video streaming to cars",
      "Voice calls over LTE",
      "Autonomous drone navigation"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Cellular IoT. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-28",
    "topicId": "embedded_iot",
    "category": "IoT Vulnerabilities",
    "question": "What is the primary vulnerability of standard unencrypted HTTP/REST APIs used on embedded IoT devices?",
    "options": [
      "Transmits data, usernames, and API keys in cleartext across the public internet, leaving devices vulnerable to eavesdropping, credential theft, and unauthorized actuator command injection",
      "HTTP cannot send numbers",
      "HTTP is too slow for 1Hz sensor readings",
      "HTTP consumes too much flash memory"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: IoT Vulnerabilities. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-29",
    "topicId": "embedded_iot",
    "category": "Ultra-Low-Power Displays",
    "question": "What does an 'E-Paper' (EPD / Electrophoretic) display offer for battery-powered IoT monitors?",
    "options": [
      "It is bi-stable; it consumes electrical power only when updating the display image, and consumes zero power to maintain the static image indefinitely",
      "It has 120Hz gaming refresh rates",
      "It emits its own bright backlight",
      "It works only in cryogenic temperatures"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Ultra-Low-Power Displays. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "iot-add-30",
    "topicId": "embedded_iot",
    "category": "Asset Tracking",
    "question": "What is 'Dead Reckoning' in outdoor IoT asset trackers?",
    "options": [
      "Estimating current position based upon previously known position, estimated speed, and heading (using IMU and wheel encoders) when GPS signals are lost inside tunnels or urban canyons",
      "Detecting that a battery has died",
      "Tracking dead animals in wildlife research",
      "Calculating radio signal attenuation"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded IoT: Asset Tracking. Correct answer option 1 accurately reflects low-power wireless and protocols."
  },
  {
    "id": "lic-add-01",
    "topicId": "linear_ic",
    "category": "Ideal Op-Amp",
    "question": "What are the three ideal characteristics of an Operational Amplifier (Op-Amp)?",
    "options": [
      "Infinite input impedance ($R_{in} = \\infty$), zero output impedance ($R_{out} = 0$), and infinite open-loop voltage gain ($A_{OL} = \\infty$)",
      "Zero input impedance, infinite output impedance, zero gain",
      "Input impedance = 50 Ohms, output = 50 Ohms, gain = 1",
      "Infinite bandwidth, zero slew rate, zero CMRR"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Ideal Op-Amp. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-02",
    "topicId": "linear_ic",
    "category": "Virtual Ground",
    "question": "What is the 'Virtual Ground' concept in an inverting operational amplifier circuit?",
    "options": [
      "Because open-loop gain is near infinite ($A_{OL} \\approx 10^5$), the differential voltage between inputs $(V_+ - V_-) = V_{out} / A_{OL} \\approx 0V$; with the non-inverting input grounded, the inverting node sits at virtual zero volts",
      "A ground wire connected through a 1MΩ resistor",
      "An artificial software ground simulated in SPICE",
      "A ground plane on a multi-layer PCB"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Virtual Ground. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-03",
    "topicId": "linear_ic",
    "category": "CMRR",
    "question": "What is the Common-Mode Rejection Ratio (CMRR) of a differential operational amplifier?",
    "options": [
      "The ratio of differential voltage gain to common-mode voltage gain: $\\text{CMRR} = 20 \\log_{10}(|A_d / A_{cm}|)$ dB, measuring the ability to reject noise common to both input terminals",
      "The ratio of input voltage to supply voltage",
      "The maximum frequency of common-mode signals",
      "The gain of an inverting amplifier"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: CMRR. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-04",
    "topicId": "linear_ic",
    "category": "Slew Rate",
    "question": "What is the 'Slew Rate' of an operational amplifier and how does it limit high-frequency signals?",
    "options": [
      "The maximum rate of change of output voltage per unit time: $\\text{SR} = \\max|dV_{out}/dt|$ (typically V/µs); if the required signal slope exceeds SR, sinusoidal outputs distort into triangular waves",
      "The minimum DC drift of offset voltage",
      "The time required to turn on the power supply",
      "The input bias current divided by capacitance"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Slew Rate. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-05",
    "topicId": "linear_ic",
    "category": "Instrumentation Amps",
    "question": "In a standard 3-Op-Amp Instrumentation Amplifier (In-Amp), what is the formula for differential voltage gain set by the external gain resistor $R_G$?",
    "options": [
      "$A_v = \\left(1 + \\frac{2R_1}{R_G}\\right) \\cdot \\frac{R_3}{R_2}$",
      "$A_v = -\\frac{R_G}{R_1}$",
      "$A_v = 1 + \\frac{R_G}{R_1}$",
      "$A_v = \\frac{R_1 R_2}{R_G}$"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Instrumentation Amps. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-06",
    "topicId": "linear_ic",
    "category": "In-Amp Advantages",
    "question": "Why is an Instrumentation Amplifier preferred over a simple 1-Op-Amp difference amplifier for strain gauge bridge measurements?",
    "options": [
      "The buffered input buffer stages provide extremely high input impedance on both terminals, preventing loading of bridge resistors, and delivering superior CMRR exceeding 100dB",
      "In-Amps operate without any power supply",
      "In-Amps convert strain directly to digital I2C bytes",
      "In-Amps cost 10x less than standard op-amps"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: In-Amp Advantages. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-07",
    "topicId": "linear_ic",
    "category": "GBWP",
    "question": "What is 'Gain-Bandwidth Product' (GBWP) in a feedback amplifier?",
    "options": [
      "The product of closed-loop voltage gain and -3dB bandwidth is constant for an internally compensated op-amp: $A_{CL} \\cdot f_B = \\text{GBWP}$",
      "The total power consumed by the amplifier",
      "The maximum audio frequency of a loudspeaker",
      "The product of input and output impedance"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: GBWP. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-08",
    "topicId": "linear_ic",
    "category": "Comparators & Hysteresis",
    "question": "In a precision voltage comparator circuit (e.g. LM393), why is external positive feedback used to introduce 'Hysteresis' (Schmitt Trigger)?",
    "options": [
      "Prevents erratic output oscillation and false chatter caused by input noise when a slowly changing input signal crosses the threshold voltage",
      "Increases comparator speed to microwave levels",
      "Reduces power consumption to zero",
      "Converts comparator output to analog sine waves"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Comparators & Hysteresis. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-09",
    "topicId": "linear_ic",
    "category": "Comparator Output",
    "question": "What is the purpose of the open-collector output on an LM393 comparator?",
    "options": [
      "Allows level shifting to different voltage domains (e.g. 3.3V or 5V logic) via an external pull-up resistor and supports wired-OR bus configurations",
      "Requires high-voltage cooling",
      "Eliminates the need for power supply connections",
      "Drives high-current relay coils directly"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Comparator Output. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-10",
    "topicId": "linear_ic",
    "category": "555 Timer Astable",
    "question": "In the classic 555 Timer IC configured in Astable Multivibrator mode, what sets the oscillation frequency and duty cycle?",
    "options": [
      "Two external resistors ($R_A, R_B$) and one timing capacitor ($C$): $f = \\frac{1.44}{(R_A + 2R_B) C}$",
      "An internal quartz crystal",
      "The DC power supply voltage level",
      "The ambient temperature"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: 555 Timer Astable. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-11",
    "topicId": "linear_ic",
    "category": "555 Internal Architecture",
    "question": "What internal reference voltages are created by the three 5kΩ resistors in the 555 timer IC?",
    "options": [
      "$2/3 V_{CC}$ (Threshold comparator reference) and $1/3 V_{CC}$ (Trigger comparator reference)",
      "$1/2 V_{CC}$ and $1/4 V_{CC}$",
      "$3/4 V_{CC}$ and $1/4 V_{CC}$",
      "$5V$ and $0V$"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: 555 Internal Architecture. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-12",
    "topicId": "linear_ic",
    "category": "Active Filters",
    "question": "In an active Low-Pass Filter (Sallen-Key topology), what is the roll-off rate of a second-order filter stage?",
    "options": [
      "-40 dB/decade (-12 dB/octave)",
      "-20 dB/decade (-6 dB/octave)",
      "-60 dB/decade (-18 dB/octave)",
      "-6 dB/decade"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Active Filters. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-13",
    "topicId": "linear_ic",
    "category": "PLL Architecture",
    "question": "What is a Phase-Locked Loop (PLL) and what are its three fundamental blocks?",
    "options": [
      "A feedback system that locks output phase to an input reference: Phase Detector (PD), Low-Pass Filter (LPF), and Voltage-Controlled Oscillator (VCO)",
      "A digital counter, shift register, and ALU",
      "An analog transformer, diode bridge, and capacitor",
      "A crystal oscillator, amplifier, and speaker"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: PLL Architecture. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-14",
    "topicId": "linear_ic",
    "category": "PLL Dynamics",
    "question": "What is the 'Capture Range' of a Phase-Locked Loop compared to its 'Lock Range'?",
    "options": [
      "Capture Range is the frequency band over which an unlocked PLL can acquire phase lock; Lock Range is the wider band over which an already locked PLL can maintain lock tracking",
      "Capture range is always wider than lock range",
      "They are completely identical parameters",
      "Capture range is measured in decibels"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: PLL Dynamics. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-15",
    "topicId": "linear_ic",
    "category": "Linear Regulators",
    "question": "What is the primary function of a Linear Voltage Regulator (e.g. LM7805 or LDO)?",
    "options": [
      "Maintains a constant output voltage ($V_{out}$) by adjusting the effective resistance of a pass transistor in continuous linear conduction, rejecting input voltage ripples and load variations",
      "Converts DC into high-frequency AC",
      "Stores electrical energy in an inductor",
      "Multiplies voltage by 2x"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Linear Regulators. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-16",
    "topicId": "linear_ic",
    "category": "LDO Regulators",
    "question": "What is a Low-Dropout (LDO) regulator and how does its pass transistor differ from standard NPN regulators?",
    "options": [
      "Uses a PMOS or PNP pass transistor requiring only a small drain-to-source saturation voltage ($V_{DO} \\approx 100-300mV$) across it, allowing regulation when input voltage is only slightly higher than output",
      "Operates with 100V dropout voltage",
      "Uses an external switching inductor",
      "Has zero power dissipation"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: LDO Regulators. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-17",
    "topicId": "linear_ic",
    "category": "Dropout Voltage",
    "question": "What is 'Dropout Voltage' in an LDO?",
    "options": [
      "The minimum difference between input voltage and output voltage ($V_{in} - V_{out}$) required for the regulator to maintain specified output voltage regulation",
      "The voltage at which the chip drops off the board",
      "The breakdown voltage of the ground pin",
      "The ripple voltage frequency"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Dropout Voltage. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-18",
    "topicId": "linear_ic",
    "category": "OTAs",
    "question": "What is an Operational Transconductance Amplifier (OTA, e.g. CA3080)?",
    "options": [
      "A voltage-controlled current source (VCCS) where output current is proportional to differential input voltage: $I_{out} = g_m (V_+ - V_-)$, with transconductance $g_m$ controlled by an external bias current ($I_{ABC}$)",
      "An op-amp that only works with digital pulses",
      "A fixed-gain audio power amplifier",
      "A transformer coupled circuit"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: OTAs. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-19",
    "topicId": "linear_ic",
    "category": "Input Offset Voltage",
    "question": "What is 'Input Offset Voltage' ($V_{OS}$) in an operational amplifier?",
    "options": [
      "The differential DC voltage that must be applied between input terminals to force the DC output voltage to zero, caused by physical mismatch in the input differential pair transistors",
      "The maximum DC supply voltage rating",
      "The noise voltage generated by internal resistors",
      "The voltage required to turn on the output buffer"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Input Offset Voltage. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-20",
    "topicId": "linear_ic",
    "category": "Offset Nulling",
    "question": "What is the purpose of an 'Offset Null' potentiometer on precision op-amps (e.g. OP07)?",
    "options": [
      "Trims the internal input stage collector/drain load resistors to adjust the input offset voltage ($V_{OS}$) to exactly zero microvolts",
      "Sets the amplifier closed-loop gain",
      "Adjusts the audio volume",
      "Controls the frequency bandwidth"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Offset Nulling. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-21",
    "topicId": "linear_ic",
    "category": "Op-Amp Stability",
    "question": "What causes 'Phase Margin' erosion and instability in op-amp circuits driving capacitive loads?",
    "options": [
      "The op-amp's open-loop output resistance ($R_o$) forms an extra pole with the external load capacitance ($C_L$), adding phase lag that reduces phase margin below 45° and causes ringing or oscillation",
      "Capacitors blocking DC power supply current",
      "Overheating of the feedback resistor",
      "Input bias currents flowing into the capacitor"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Op-Amp Stability. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-22",
    "topicId": "linear_ic",
    "category": "Capacitive Load Compensation",
    "question": "How is an op-amp driving a large capacitive load stabilized against oscillation?",
    "options": [
      "By placing an isolation resistor ($R_{ISO}$) between the op-amp output and the load capacitor, and feeding high-frequency AC feedback back through a small bypass capacitor ($C_f$)",
      "By grounding the non-inverting input terminal",
      "By running the op-amp on single-supply power",
      "By removing the feedback loop entirely"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Capacitive Load Compensation. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-23",
    "topicId": "linear_ic",
    "category": "Analog Multipliers",
    "question": "What is an 'Analog Multiplier' IC (e.g. AD633)?",
    "options": [
      "Produces an analog output voltage proportional to the product of two independent analog input voltages: $V_{out} = \\frac{X \\cdot Y}{10V}$, used in mixers, modulation, and true RMS converters",
      "Multiplies digital clock frequencies by 2x",
      "A parallel array of analog op-amps",
      "An audio amplifier with 10 channels"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Analog Multipliers. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-24",
    "topicId": "linear_ic",
    "category": "Precision Rectifiers",
    "question": "What is the function of a 'Precision Full-Wave Rectifier' (Absolute Value Circuit) using op-amps?",
    "options": [
      "Rectifies tiny millivolt AC signals without the standard 0.7V diode forward drop, by placing feedback diodes inside the op-amp negative feedback loop to cancel threshold drops",
      "Powers heavy DC motors directly from AC mains",
      "Filters high-frequency electromagnetic interference",
      "Converts sine waves into square waves"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Precision Rectifiers. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-25",
    "topicId": "linear_ic",
    "category": "Non-Linear Op-Amps",
    "question": "What is a 'Logarithmic Amplifier' (Log Amp) circuit using an op-amp?",
    "options": [
      "Places a BJT in the negative feedback loop; using the exponential $I-V$ characteristic of the base-emitter junction ($V_{BE} \\propto \\ln(I_C)$), produces an output voltage proportional to the logarithm of the input voltage",
      "An amplifier that measures software error logs",
      "An amplifier with gain that increases linearly with time",
      "A digital amplifier for binary data"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Non-Linear Op-Amps. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-26",
    "topicId": "linear_ic",
    "category": "Switched Capacitor",
    "question": "What is the function of a 'Switched-Capacitor Filter' (SCF)?",
    "options": [
      "Replaces precision resistors with MOS switches and capacitors clocked at frequency $f_{clk}$ ($R_{eq} = 1/(f_{clk} C)$), allowing filter cutoff frequencies to be tuned accurately by changing clock frequency",
      "Filters power supply spikes using physical toggle switches",
      "A mechanical relay filter for audio signals",
      "A high-power filter for industrial transformers"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Switched Capacitor. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-27",
    "topicId": "linear_ic",
    "category": "Charge Pumps",
    "question": "What is a 'Charge Pump' (switched capacitor voltage inverter/doubler, e.g. ICL7660)?",
    "options": [
      "A DC-DC converter that uses semiconductor switches and capacitors to invert ($+5V \\to -5V$) or double voltages without requiring magnetic inductors",
      "A pump that circulates coolant fluid across CPUs",
      "A battery charging circuit for electric vehicles",
      "A high-pressure air pump for cleanrooms"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Charge Pumps. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-28",
    "topicId": "linear_ic",
    "category": "Galvanic Isolation",
    "question": "What is the purpose of an 'Isolation Amplifier' (e.g. ISO124)?",
    "options": [
      "Transfers analog signals across a high-voltage galvanic barrier (optical, capacitive, or magnetic) with zero ohmic connection, protecting patients and equipment from lethal line surges",
      "Amplifies sound in soundproof rooms",
      "Isolates radio stations from interference",
      "Isolates battery terminals from ground"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Galvanic Isolation. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-29",
    "topicId": "linear_ic",
    "category": "Bandgap References",
    "question": "In a Bandgap Voltage Reference circuit (e.g. Brokaw cell), how is a zero-temperature-coefficient output voltage (~1.25V) achieved?",
    "options": [
      "By summing a negative temperature coefficient voltage ($V_{BE}$, CTAT) with a positive temperature coefficient thermal voltage ($\\Delta V_{BE} = V_t \\ln(N)$, PTAT) with appropriate scaling weights",
      "By keeping the silicon die at a constant temperature using a heater",
      "Using a precision Zener diode calibrated by laser trimming",
      "Using a battery that never discharges"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Bandgap References. Correct answer option 1 accurately reflects analog and linear circuit theory."
  },
  {
    "id": "lic-add-30",
    "topicId": "linear_ic",
    "category": "Peak Detectors",
    "question": "What is the function of an Active Peak Detector circuit using an op-amp and capacitor?",
    "options": [
      "Charges a storage capacitor through a low-leakage diode to the maximum positive voltage peak reached by an incoming AC signal and holds that voltage indefinitely for ADC measurement",
      "Detects mountain peaks on radar screens",
      "Detects peak power draw in audio speakers",
      "Limits the maximum volume of an amplifier"
    ],
    "correctAnswer": 0,
    "explanation": "Linear Integrated Circuits: Peak Detectors. Correct answer option 1 accurately reflects analog and linear circuit theory."
  }
];
