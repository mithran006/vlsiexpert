import { Topic } from '../types';

export interface SyntaxSnippet {
  label: string;
  type: 'keyword' | 'snippet' | 'type' | 'directive' | 'function' | 'macro';
  detail: string;
  insertText: string;
  description?: string;
  category?: 'structure' | 'control' | 'types' | 'io' | 'idiom';
}

export interface TopicSyntaxGuide {
  topic: Topic;
  languageName: string;
  standard: string;
  description: string;
  quickChips: { label: string; snippet: string; tooltip: string }[];
  categories: {
    name: string;
    items: { syntax: string; description: string; example: string }[];
  }[];
  snippets: SyntaxSnippet[];
}

export const TOPIC_SYNTAX_GUIDES: Record<Topic, TopicSyntaxGuide> = {
  verilog: {
    topic: 'verilog',
    languageName: 'Verilog HDL',
    standard: 'IEEE 1364-2005 Standard',
    description: 'Hardware description language for digital RTL design, synthesizable logic, and testbenches.',
    quickChips: [
      { label: 'always @(posedge clk)', snippet: 'always @(posedge clk or negedge rst_n) begin\n  if (!rst_n) begin\n    // reset\n  end else begin\n    // logic\n  end\nend', tooltip: 'Sequential clocked always block with async reset' },
      { label: 'always @(*)', snippet: 'always @(*) begin\n  // combinational logic\nend', tooltip: 'Combinational sensitivity block' },
      { label: 'assign out = ...', snippet: 'assign out = (sel) ? in1 : in0;', tooltip: 'Continuous concurrent assignment' },
      { label: 'case (sel)', snippet: 'case (sel)\n  2\'b00: out = a;\n  2\'b01: out = b;\n  default: out = 1\'b0;\nendcase', tooltip: 'Multiplexer / Decoder Case Statement' },
      { label: 'module ... endmodule', snippet: 'module my_design #(\n  parameter WIDTH = 8\n)(\n  input  wire             clk,\n  input  wire             rst_n,\n  input  wire [WIDTH-1:0] data_in,\n  output reg  [WIDTH-1:0] data_out\n);\n\nendmodule', tooltip: 'Parameterized Verilog Module Header' },
      { label: 'reg [N-1:0]', snippet: 'reg [7:0] count_reg;', tooltip: '8-bit sequential register declaration' },
      { label: 'wire [N-1:0]', snippet: 'wire [7:0] bus_w;', tooltip: '8-bit combinational wire declaration' }
    ],
    categories: [
      {
        name: 'Module & Ports Structure',
        items: [
          { syntax: 'module name #(params) (ports); ... endmodule', description: 'Defines top-level hardware entity', example: 'module counter (input clk, output reg [3:0] q);' },
          { syntax: 'input wire / output reg', description: 'Port directional declarations', example: 'input wire clk, rst_n;\noutput reg [7:0] data_out;' },
          { syntax: 'parameter WIDTH = 8;', description: 'Compile-time parameter for reusable IP cores', example: 'parameter DATA_WIDTH = 16, ADDR_WIDTH = 4;' }
        ]
      },
      {
        name: 'Sequential Logic & Clocks',
        items: [
          { syntax: 'always @(posedge clk or negedge rst_n)', description: 'Asynchronous active-low reset D-FF register template', example: 'always @(posedge clk or negedge rst_n) begin\n  if (!rst_n) q <= 0;\n  else q <= d;\nend' },
          { syntax: 'Non-blocking assignment (<=)', description: 'Mandatory for all sequential clocked registers', example: 'state_reg <= next_state;\ncount <= count + 1;' }
        ]
      },
      {
        name: 'Combinational Logic',
        items: [
          { syntax: 'assign net = expression;', description: 'Continuous dataflow assignment', example: 'assign sum = a ^ b ^ cin;\nassign cout = (a & b) | (b & cin) | (a & cin);' },
          { syntax: 'always @(*)', description: 'Inferred combinational block (all inputs sensitive)', example: 'always @(*) begin\n  case(opcode)\n    3\'b000: result = a + b;\n    default: result = 0;\n  endcase\nend' },
          { syntax: 'Blocking assignment (=)', description: 'Mandatory inside combinational always @(*) blocks', example: 'temp = a & b;\nout = temp ^ c;' }
        ]
      }
    ],
    snippets: [
      { label: 'always_seq', type: 'snippet', detail: 'Sequential D-FF with async reset', insertText: 'always @(posedge clk or negedge rst_n) begin\n  if (!rst_n) begin\n    $0\n  end else begin\n    \n  end\nend' },
      { label: 'always_comb', type: 'snippet', detail: 'Combinational always block', insertText: 'always @(*) begin\n  $0\nend' },
      { label: 'assign', type: 'keyword', detail: 'assign out = expression;', insertText: 'assign $1 = $2;' },
      { label: 'case', type: 'keyword', detail: 'case-endcase statement', insertText: 'case ($1)\n  $2: begin\n    \n  end\n  default: begin\n    \n  end\nendcase' },
      { label: 'module', type: 'snippet', detail: 'module declaration', insertText: 'module $1 (\n  input  wire clk,\n  input  wire rst_n,\n  $2\n);\n  \nendmodule' },
      { label: 'parameter', type: 'keyword', detail: 'parameter declaration', insertText: 'parameter $1 = $2;' },
      { label: 'localparam', type: 'keyword', detail: 'local constant parameter', insertText: 'localparam $1 = $2;' },
      { label: 'input', type: 'keyword', detail: 'input port', insertText: 'input  wire $1' },
      { label: 'output', type: 'keyword', detail: 'output port', insertText: 'output reg  $1' },
      { label: 'wire', type: 'type', detail: 'wire net declaration', insertText: 'wire [$1:0] $2;' },
      { label: 'reg', type: 'type', detail: 'reg variable declaration', insertText: 'reg  [$1:0] $2;' },
      { label: 'integer', type: 'type', detail: 'integer loop index', insertText: 'integer i;' },
      { label: 'genvar', type: 'type', detail: 'generate loop variable', insertText: 'genvar i;\ngenerate\n  for (i=0; i<$1; i=i+1) begin : gen_block\n    $2\n  end\ngendenerate' },
      { label: 'posedge', type: 'keyword', detail: 'positive clock edge', insertText: 'posedge $1' },
      { label: 'negedge', type: 'keyword', detail: 'negative clock / reset edge', insertText: 'negedge $1' }
    ]
  },

  systemverilog: {
    topic: 'systemverilog',
    languageName: 'SystemVerilog',
    standard: 'IEEE 1800-2017 Standard',
    description: 'Hardware description and verification language with OOP, SVA assertions, and rich types.',
    quickChips: [
      { label: 'always_ff @(posedge clk)', snippet: 'always_ff @(posedge clk or negedge rst_n) begin\n  if (!rst_n) q <= \'0;\n  else q <= d;\nend', tooltip: 'Explicit synthesizable flip-flop block' },
      { label: 'always_comb', snippet: 'always_comb begin\n  out = in1 & in2;\nend', tooltip: 'Auto-zero-time combinational evaluation' },
      { label: 'logic [N-1:0]', snippet: 'logic [7:0] bus;', tooltip: 'Universal 4-state logic datatype' },
      { label: 'typedef enum logic', snippet: 'typedef enum logic [1:0] {\n  IDLE  = 2\'b00,\n  READ  = 2\'b01,\n  WRITE = 2\'b10\n} state_t;\nstate_t current_state, next_state;', tooltip: 'FSM Enumerated state type' },
      { label: 'unique case', snippet: 'unique case (state)\n  IDLE: next_state = READ;\n  default: next_state = IDLE;\nendcase', tooltip: 'Synthesis-enforced full/parallel case' },
      { label: 'assert property', snippet: 'assert property (@(posedge clk) req |-> ##[1:2] gnt)\n  else $error("Grant not received in time");', tooltip: 'SystemVerilog Assertion (SVA)' }
    ],
    categories: [
      {
        name: 'Synthesizable Procedural Blocks',
        items: [
          { syntax: 'always_ff @(posedge clk)', description: 'Compiler-checked flip-flop register block', example: 'always_ff @(posedge clk or negedge rst_n) begin\n  if (!rst_n) count <= \'0;\n  else if (en) count <= count + 1\'b1;\nend' },
          { syntax: 'always_comb', description: 'Prevents unintended latch creation and checks constant writes', example: 'always_comb begin\n  y = a & b;\nend' },
          { syntax: 'always_latch', description: 'Explicit level-sensitive latch inference', example: 'always_latch begin\n  if (enable) q = data;\nend' }
        ]
      },
      {
        name: 'Advanced Types & Interfaces',
        items: [
          { syntax: 'logic [WIDTH-1:0]', description: 'Unified data type replacing reg/wire in RTL', example: 'logic [31:0] instr_word;' },
          { syntax: 'typedef struct packed', description: 'Packed bit-accurate hardware structures', example: 'typedef struct packed {\n  logic [7:0] opcode;\n  logic [23:0] payload;\n} packet_t;' },
          { syntax: 'interface ... endinterface', description: 'Bundle signals into reusable bus interfaces', example: 'interface axi_if (input bit clk); logic valid, ready; endinterface' }
        ]
      }
    ],
    snippets: [
      { label: 'always_ff', type: 'snippet', detail: 'always_ff @(posedge clk)', insertText: 'always_ff @(posedge clk or negedge rst_n) begin\n  if (!rst_n) begin\n    $0\n  end else begin\n    \n  end\nend' },
      { label: 'always_comb', type: 'snippet', detail: 'always_comb block', insertText: 'always_comb begin\n  $0\nend' },
      { label: 'logic', type: 'type', detail: 'logic datatype', insertText: 'logic [$1:0] $2;' },
      { label: 'typedef_enum', type: 'snippet', detail: 'Enumerated state machine types', insertText: 'typedef enum logic [$1:0] {\n  $2\n} $3_t;' },
      { label: 'typedef_struct', type: 'snippet', detail: 'Packed hardware struct', insertText: 'typedef struct packed {\n  $1\n} $2_t;' },
      { label: 'assert_prop', type: 'snippet', detail: 'SVA Concurrent Assertion', insertText: 'assert property (@(posedge clk) $1 |-> $2)\n  else $error("$3");' },
      { label: 'covergroup', type: 'snippet', detail: 'Functional Coverage Group', insertText: 'covergroup $1 @(posedge clk);\n  coverpoint $2;\nendgroup' },
      { label: 'package', type: 'snippet', detail: 'SystemVerilog Package', insertText: 'package $1_pkg;\n  $2\nendpackage' }
    ]
  },

  vhdl: {
    topic: 'vhdl',
    languageName: 'VHDL',
    standard: 'IEEE 1076-2008 Standard',
    description: 'Strongly-typed VHSIC Hardware Description Language with strict entities and architectures.',
    quickChips: [
      { label: 'rising_edge(clk)', snippet: 'if rising_edge(clk) then\n  if rst = \'1\' then\n    q <= (others => \'0\');\n  else\n    q <= d;\n  end if;\nend if;', tooltip: 'Standard VHDL synchronous clock process' },
      { label: 'process(clk, rst)', snippet: 'process(clk, rst)\nbegin\n  if rst = \'1\' then\n    -- reset\n  elsif rising_edge(clk) then\n    -- logic\n  end if;\nend process;', tooltip: 'Sequential process template with async reset' },
      { label: 'signal x : std_logic_vector', snippet: 'signal data_bus : std_logic_vector(7 downto 0);', tooltip: '8-bit signal definition' },
      { label: 'when ... else', snippet: 'mux_out <= in1 when sel = \'1\' else in0;', tooltip: 'Conditional signal assignment' },
      { label: 'with sel select', snippet: 'with sel select\n  mux_out <= in0 when "00",\n             in1 when "01",\n             (others => \'0\') when others;', tooltip: 'Selected signal assignment' }
    ],
    categories: [
      {
        name: 'Entity & Architecture Structure',
        items: [
          { syntax: 'entity name is port (...); end entity;', description: 'Hardware interface definition', example: 'entity full_adder is\n  port (a, b, cin : in std_logic; sum, cout : out std_logic);\nend entity;' },
          { syntax: 'architecture rtl of name is ... begin ... end architecture;', description: 'Internal implementation architecture', example: 'architecture rtl of full_adder is\nbegin\n  sum <= a xor b xor cin;\nend architecture;' }
        ]
      },
      {
        name: 'Types & Libraries',
        items: [
          { syntax: 'library IEEE; use IEEE.STD_LOGIC_1164.ALL;', description: 'Standard logic library', example: 'use IEEE.NUMERIC_STD.ALL;' },
          { syntax: 'std_logic / std_logic_vector(N-1 downto 0)', description: 'Multi-value logic bit/bus', example: 'signal count : unsigned(7 downto 0);' }
        ]
      }
    ],
    snippets: [
      { label: 'entity', type: 'snippet', detail: 'VHDL Entity declaration', insertText: 'entity $1 is\n  port (\n    clk : in  std_logic;\n    rst : in  std_logic;\n    $2\n  );\nend entity $1;' },
      { label: 'architecture', type: 'snippet', detail: 'VHDL Architecture body', insertText: 'architecture rtl of $1 is\n  $2\nbegin\n  $0\nend architecture rtl;' },
      { label: 'process_clk', type: 'snippet', detail: 'Sequential clock process', insertText: 'process(clk, rst)\nbegin\n  if rst = \'1\' then\n    $1 <= (others => \'0\');\n  elsif rising_edge(clk) then\n    $0\n  end if;\nend process;' },
      { label: 'std_logic_vector', type: 'type', detail: 'Bus vector type', insertText: 'std_logic_vector($1 downto 0)' },
      { label: 'numeric_std', type: 'directive', detail: 'Unsigned/Signed math package', insertText: 'use IEEE.NUMERIC_STD.ALL;' }
    ]
  },

  embedded_c: {
    topic: 'embedded_c',
    languageName: 'Embedded C (Bare-Metal)',
    standard: 'ISO C99 / C11 Embedded Extensions',
    description: 'Low-level micro-controller firmware, register pointers, memory-mapped I/O, bit masking.',
    quickChips: [
      { label: 'volatile uint32_t*', snippet: '#define REG_BASE   0x40020000UL\n#define GPIOA_ODR  (*(volatile uint32_t*)(REG_BASE + 0x14))\n#define GPIOA_MODER (*(volatile uint32_t*)(REG_BASE + 0x00))', tooltip: 'Memory-mapped hardware register pointer' },
      { label: 'Bit Set: |= (1 << n)', snippet: 'REG |= (1U << PIN_NUM); // Set bit HIGH', tooltip: 'Bitwise atomic bit set' },
      { label: 'Bit Clear: &= ~(1 << n)', snippet: 'REG &= ~(1U << PIN_NUM); // Clear bit LOW', tooltip: 'Bitwise atomic bit clear' },
      { label: 'Bit Toggle: ^= (1 << n)', snippet: 'REG ^= (1U << PIN_NUM); // Toggle bit', tooltip: 'Bitwise atomic bit toggle' },
      { label: 'Bit Read: & (1 << n)', snippet: 'bool is_high = (REG & (1U << PIN_NUM)) != 0;', tooltip: 'Read single bit state' }
    ],
    categories: [
      {
        name: 'Register Access & Pointers',
        items: [
          { syntax: '(*(volatile uint32_t*)(addr))', description: 'Access memory-mapped hardware peripheral register', example: '#define USART1_DR (*(volatile uint32_t*)(0x40013804))' },
          { syntax: '__attribute__((packed))', description: 'Prevent compiler struct byte padding for communication frames', example: 'typedef struct __attribute__((packed)) { uint8_t id; uint32_t val; } frame_t;' }
        ]
      }
    ],
    snippets: [
      { label: 'reg_def', type: 'snippet', detail: 'Define volatile register pointer', insertText: '#define $1 (*(volatile uint32_t*)($2UL))' },
      { label: 'bit_set', type: 'snippet', detail: 'Bit set macro', insertText: '$1 |= (1U << $2);' },
      { label: 'bit_clear', type: 'snippet', detail: 'Bit clear macro', insertText: '$1 &= ~(1U << $2);' },
      { label: 'bit_toggle', type: 'snippet', detail: 'Bit toggle macro', insertText: '$1 ^= (1U << $2);' },
      { label: 'uint32_t', type: 'type', detail: 'Exact-width 32-bit unsigned integer', insertText: 'uint32_t ' },
      { label: 'uint8_t', type: 'type', detail: 'Exact-width 8-bit unsigned integer', insertText: 'uint8_t ' }
    ]
  },

  mnemonics: {
    topic: 'mnemonics',
    languageName: 'Assembly & Mnemonics',
    standard: 'RISC-V (RV32I) / ARM Cortex-M / x86 Assembly',
    description: 'Low-level instruction mnemonics, registers, memory load/stores, branch jumps, and calling conventions.',
    quickChips: [
      { label: 'addi rd, rs1, imm', snippet: 'addi a0, zero, 10    # Load immediate 10 into a0', tooltip: 'RISC-V Add Immediate' },
      { label: 'lw / sw', snippet: 'lw   t0, 0(a0)      # Load 32-bit word from memory\nsw   t0, 4(a1)      # Store 32-bit word into memory', tooltip: 'Load Word / Store Word' },
      { label: 'beq / bne', snippet: 'beq  t0, t1, label_match # Branch if equal\nbne  t0, zero, loop      # Branch if not zero', tooltip: 'Conditional Branch' },
      { label: 'jal / ret', snippet: 'jal  ra, my_function  # Jump and Link (Call function)\nret                   # Return from subroutine (jalr zero, ra, 0)', tooltip: 'Function call & return' },
      { label: 'ARM MOV / LDR / STR', snippet: 'MOV  R0, #10\nLDR  R1, [R2, #0]\nSTR  R1, [R3, #4]', tooltip: 'ARM Thumb-2 Instructions' }
    ],
    categories: [
      {
        name: 'Arithmetic & Logical (RISC-V)',
        items: [
          { syntax: 'add / sub / and / or / xor rd, rs1, rs2', description: 'Register arithmetic/logic operations', example: 'add t0, a0, a1\nxor s0, s0, t0' },
          { syntax: 'slli / srli / srai rd, rs1, shamt', description: 'Shift Left/Right Logical and Arithmetic', example: 'slli a0, a0, 2  # multiply by 4' }
        ]
      }
    ],
    snippets: [
      { label: 'addi', type: 'keyword', detail: 'addi rd, rs1, imm', insertText: 'addi $1, $2, $3' },
      { label: 'add', type: 'keyword', detail: 'add rd, rs1, rs2', insertText: 'add $1, $2, $3' },
      { label: 'sub', type: 'keyword', detail: 'sub rd, rs1, rs2', insertText: 'sub $1, $2, $3' },
      { label: 'lw', type: 'keyword', detail: 'lw rd, offset(rs1)', insertText: 'lw $1, $2($3)' },
      { label: 'sw', type: 'keyword', detail: 'sw rs2, offset(rs1)', insertText: 'sw $1, $2($3)' },
      { label: 'beq', type: 'keyword', detail: 'beq rs1, rs2, label', insertText: 'beq $1, $2, $3' },
      { label: 'jal', type: 'keyword', detail: 'jal ra, label', insertText: 'jal ra, $1' },
      { label: 'ret', type: 'keyword', detail: 'Return from subroutine', insertText: 'ret' }
    ]
  },

  linux: {
    topic: 'linux',
    languageName: 'Linux Shell & EDA Scripting',
    standard: 'POSIX Bash & TCL EDA Shell',
    description: 'Command-line scripting, text manipulation (awk, sed, grep), automation Makefiles, and EDA synthesis scripts.',
    quickChips: [
      { label: '#!/bin/bash', snippet: '#!/bin/bash\nset -euo pipefail\n\n# Your script logic', tooltip: 'Strict bash header' },
      { label: 'grep -rn "pattern" .', snippet: 'grep -rn "error" ./sim_logs/', tooltip: 'Recursive regex search with line numbers' },
      { label: 'awk \'{print $1}\'', snippet: 'awk \'{print $1, $3}\' report.timing', tooltip: 'Awk columnar data extractor' },
      { label: 'sed \'s/old/new/g\'', snippet: 'sed -i \'s/clk_50/clk_100/g\' rtl/*.v', tooltip: 'Stream editor find and replace' },
      { label: 'for file in *.v; do', snippet: 'for f in *.v; do\n  echo "Analyzing $f..."\n  iverilog -g2012 "$f"\ndone', tooltip: 'File iteration loop' },
      { label: 'TCL: create_clock', snippet: 'create_clock -name clk -period 10.0 [get_ports clk]\nset_input_delay 2.0 -clock clk [all_inputs]', tooltip: 'Synopsys/Vivado SDC Timing Constraints' }
    ],
    categories: [
      {
        name: 'Text Parsing & Log Filtering',
        items: [
          { syntax: 'grep -i "error\\|warning" build.log', description: 'Filter EDA compiler issues', example: 'grep -c "VIOLATION" timing_report.txt' },
          { syntax: 'awk \'/Slack/ {print $NF}\'', description: 'Extract timing slack values from reports', example: 'cat sta.rpt | awk \'/Worst Negative Slack/ {print $4}\'' }
        ]
      }
    ],
    snippets: [
      { label: 'bash_header', type: 'snippet', detail: 'Bash script template', insertText: '#!/bin/bash\nset -euo pipefail\n\n$0' },
      { label: 'if_file_exists', type: 'snippet', detail: 'Check if file exists', insertText: 'if [ -f "$1" ]; then\n  $2\nfi' },
      { label: 'for_loop', type: 'snippet', detail: 'For loop syntax', insertText: 'for $1 in $2; do\n  $3\ndone' },
      { label: 'grep', type: 'keyword', detail: 'Search text patterns', insertText: 'grep -rn "$1" $2' },
      { label: 'awk', type: 'keyword', detail: 'AWK text processing', insertText: 'awk \'$1\' $2' },
      { label: 'sed', type: 'keyword', detail: 'SED stream replacement', insertText: 'sed \'s/$1/$2/g\' $3' }
    ]
  },

  arduino: {
    topic: 'arduino',
    languageName: 'Arduino C/C++',
    standard: 'Arduino Hardware API & C++11',
    description: 'Hardware microcontroller sketches, GPIO digital/analog I/O, timers, and sensor buses.',
    quickChips: [
      { label: 'void setup() & loop()', snippet: 'void setup() {\n  Serial.begin(115200);\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(500);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(500);\n}', tooltip: 'Standard Arduino sketch structure' },
      { label: 'pinMode(pin, OUTPUT)', snippet: 'pinMode(13, OUTPUT);\npinMode(2, INPUT_PULLUP);', tooltip: 'Configure digital pin direction' },
      { label: 'digitalWrite / digitalRead', snippet: 'digitalWrite(13, HIGH);\nint val = digitalRead(2);', tooltip: 'Read/Write digital logic level' },
      { label: 'analogRead / analogWrite', snippet: 'int sensor = analogRead(A0); // 0-1023\nanalogWrite(9, 128);         // PWM 0-255', tooltip: 'ADC reading and PWM output' },
      { label: 'Wire / SPI Bus', snippet: '#include <Wire.h>\n#include <SPI.h>\nWire.begin();', tooltip: 'I2C and SPI peripheral buses' }
    ],
    categories: [
      {
        name: 'GPIO & Serial APIs',
        items: [
          { syntax: 'Serial.print() / println()', description: 'UART debug output over USB', example: 'Serial.println("System Ready");' },
          { syntax: 'attachInterrupt(digitalPinToInterrupt(pin), isr, RISING)', description: 'Hardware edge interrupt handler', example: 'attachInterrupt(0, button_isr, FALLING);' }
        ]
      }
    ],
    snippets: [
      { label: 'setup_loop', type: 'snippet', detail: 'Arduino setup & loop', insertText: 'void setup() {\n  $1\n}\n\nvoid loop() {\n  $2\n}' },
      { label: 'pinMode', type: 'function', detail: 'pinMode(pin, mode)', insertText: 'pinMode($1, $2);' },
      { label: 'digitalWrite', type: 'function', detail: 'digitalWrite(pin, val)', insertText: 'digitalWrite($1, $2);' },
      { label: 'digitalRead', type: 'function', detail: 'digitalRead(pin)', insertText: 'digitalRead($1)' },
      { label: 'analogRead', type: 'function', detail: 'analogRead(pin)', insertText: 'analogRead($1)' },
      { label: 'Serial.println', type: 'function', detail: 'Print to Serial', insertText: 'Serial.println($1);' }
    ]
  },

  python_hw: {
    topic: 'python_hw',
    languageName: 'MicroPython Hardware',
    standard: 'MicroPython Embedded Python 3',
    description: 'Hardware control using Python syntax on microcontrollers (ESP32, RP2040, STM32).',
    quickChips: [
      { label: 'from machine import Pin', snippet: 'from machine import Pin\nimport time\n\nled = Pin(2, Pin.OUT)\nbtn = Pin(0, Pin.IN, Pin.PULL_UP)', tooltip: 'Import hardware GPIO classes' },
      { label: 'ADC & PWM', snippet: 'from machine import ADC, PWM, Pin\npwm = PWM(Pin(15), freq=5000, duty=512)\nadc = ADC(Pin(34))\nval = adc.read() # 0-4095', tooltip: 'Configure analog conversion & PWM' },
      { label: 'I2C / SPI', snippet: 'from machine import I2C, Pin\ni2c = I2C(0, scl=Pin(22), sda=Pin(21), freq=400000)\ndevices = i2c.scan()', tooltip: 'Initialize I2C bus scan' }
    ],
    categories: [
      {
        name: 'MicroPython Machine Module',
        items: [
          { syntax: 'Pin(id, mode, pull)', description: 'Configure hardware pin', example: 'led = Pin(25, Pin.OUT)' },
          { syntax: 'time.sleep_ms(ms)', description: 'Hardware delay in milliseconds', example: 'time.sleep_ms(100)' }
        ]
      }
    ],
    snippets: [
      { label: 'import_machine', type: 'snippet', detail: 'Import machine classes', insertText: 'from machine import Pin, ADC, PWM, I2C, SPI\nimport time\n' },
      { label: 'pin_out', type: 'snippet', detail: 'Output pin', insertText: '$1 = Pin($2, Pin.OUT)' },
      { label: 'pin_in', type: 'snippet', detail: 'Input pin with pull-up', insertText: '$1 = Pin($2, Pin.IN, Pin.PULL_UP)' },
      { label: 'pwm_init', type: 'snippet', detail: 'Initialize PWM', insertText: '$1 = PWM(Pin($2), freq=$3, duty=$4)' }
    ]
  },

  uvm: {
    topic: 'uvm',
    languageName: 'UVM (Universal Verification Methodology)',
    standard: 'IEEE 1800.2-2020 Standard',
    description: 'Constrained-random testbenches, TLM communication ports, sequences, and coverage scoreboards.',
    quickChips: [
      { label: '`uvm_component_utils', snippet: 'class my_driver extends uvm_driver #(my_transaction);\n  `uvm_component_utils(my_driver)\n  function new(string name = "my_driver", uvm_component parent = null);\n    super.new(name, parent);\n  endfunction\nendclass', tooltip: 'UVM Factory registration macro' },
      { label: 'phase.raise_objection', snippet: 'phase.raise_objection(this);\n// Send sequence items\nphase.drop_objection(this);', tooltip: 'UVM Simulation Phase Control' },
      { label: '`uvm_info(get_type_name())', snippet: '`uvm_info(get_type_name(), $sformatf("Observed packet data: 0x%0h", pkt.data), UVM_LOW)', tooltip: 'UVM Standard Messaging Macro' }
    ],
    categories: [
      {
        name: 'UVM Components & Testbench Hierarchy',
        items: [
          { syntax: 'uvm_driver / uvm_monitor / uvm_scoreboard', description: 'Base component classes', example: 'class scoreboard extends uvm_scoreboard;' },
          { syntax: 'uvm_analysis_port #(T)', description: 'Broadcast TLM port for monitors and scoreboards', example: 'uvm_analysis_port #(my_item) item_collected_port;' }
        ]
      }
    ],
    snippets: [
      { label: 'uvm_comp', type: 'snippet', detail: 'UVM Component Class', insertText: 'class $1 extends uvm_component;\n  `uvm_component_utils($1)\n  function new(string name = "$1", uvm_component parent = null);\n    super.new(name, parent);\n  endfunction\n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n  endfunction\nendclass' },
      { label: 'uvm_info', type: 'snippet', detail: 'UVM Info Log Macro', insertText: '`uvm_info(get_type_name(), "$1", UVM_LOW)' }
    ]
  },

  dft: {
    topic: 'dft',
    languageName: 'DFT (Design For Testability)',
    standard: 'IEEE 1149.1 (JTAG) / IEEE 1500',
    description: 'Scan chains, ATPG fault coverage, Memory BIST (MBIST), Logic BIST (LBIST), and Boundary Scan test architectures.',
    quickChips: [
      { label: 'Scan Flip-Flop Mux', snippet: 'always @(posedge clk) begin\n  if (scan_enable)\n    q <= scan_in;\n  else\n    q <= data_in;\nend', tooltip: 'Scan-inserted MUX-D Flip-Flop logic' },
      { label: 'JTAG TAP State Machine', snippet: 'typedef enum logic [3:0] {\n  TEST_LOGIC_RESET = 4\'h0,\n  RUN_TEST_IDLE    = 4\'h1,\n  SELECT_DR_SCAN   = 4\'h2,\n  CAPTURE_DR       = 4\'h3,\n  SHIFT_DR         = 4\'h4,\n  EXIT1_DR         = 4\'h5,\n  PAUSE_DR         = 4\'h6,\n  EXIT2_DR         = 4\'h7,\n  UPDATE_DR        = 4\'h8\n} tap_state_t;', tooltip: 'IEEE 1149.1 TAP Controller States' },
      { label: 'MBIST LFSR Pattern Gen', snippet: 'assign feedback = lfsr_q[7] ^ lfsr_q[5] ^ lfsr_q[4] ^ lfsr_q[3];\nalways @(posedge clk) begin\n  if (rst) lfsr_q <= 8\'h01;\n  else if (mbist_en) lfsr_q <= {lfsr_q[6:0], feedback};\nend', tooltip: 'LFSR Pseudorandom Pattern Generator' }
    ],
    categories: [
      {
        name: 'Scan & ATPG Architectures',
        items: [
          { syntax: 'scan_enable / scan_in / scan_out', description: 'Dedicated scan testing ports', example: 'input wire scan_en, scan_in;\noutput wire scan_out;' }
        ]
      }
    ],
    snippets: [
      { label: 'scan_dff', type: 'snippet', detail: 'Scan D-FF Model', insertText: 'always @(posedge clk or negedge rst_n) begin\n  if (!rst_n) q <= 1\'b0;\n  else if (scan_en) q <= scan_in;\n  else q <= d;\nend' }
    ]
  },

  fpga: {
    topic: 'fpga',
    languageName: 'FPGA Architecture & Vivado',
    standard: 'Xilinx 7-Series / UltraScale+ & Intel FPGA',
    description: 'Hardware primitives, Block RAM (BRAM), DSP48 slices, Clock Domain Crossing (CDC) synchronizers, and XDC constraints.',
    quickChips: [
      { label: '2-Stage CDC Synchronizer', snippet: '(* ASYNC_REG = "TRUE" *) reg sync_ff1, sync_ff2;\nalways @(posedge dest_clk or negedge rst_n) begin\n  if (!rst_n) begin\n    sync_ff1 <= 1\'b0;\n    sync_ff2 <= 1\'b0;\n  end else begin\n    sync_ff1 <= async_signal;\n    sync_ff2 <= sync_ff1;\n  end\nend', tooltip: 'Metastability hardening 2-FF synchronizer' },
      { label: 'True Dual-Port BRAM', snippet: '(* ram_style = "block" *) reg [DATA_WIDTH-1:0] mem [0:DEPTH-1];\nalways @(posedge clk_a) begin\n  if (we_a) mem[addr_a] <= din_a;\n  dout_a <= mem[addr_a];\nend', tooltip: 'Inferred Block RAM with synthesis attribute' },
      { label: 'DSP48 Multiply-Accumulate', snippet: 'always @(posedge clk) begin\n  if (clr) p_out <= 0;\n  else if (ce) p_out <= p_out + (a_in * b_in);\nend', tooltip: 'Inferred DSP48 MAC slice pipeline' }
    ],
    categories: [
      {
        name: 'Vivado Synthesis Attributes & Primitives',
        items: [
          { syntax: '(* ASYNC_REG = "TRUE" *)', description: 'Places synchronizer flip-flops in the same slice to prevent timing skew', example: '(* ASYNC_REG = "TRUE" *) reg [1:0] meta_regs;' },
          { syntax: '(* mark_debug = "true" *)', description: 'Marks nets for automatic Vivado ILA Logic Analyzer probe insertion', example: '(* mark_debug = "true" *) wire [7:0] debug_bus;' }
        ]
      }
    ],
    snippets: [
      { label: 'cdc_sync', type: 'snippet', detail: '2-FF CDC Synchronizer', insertText: '(* ASYNC_REG = "TRUE" *) reg $1_m1, $1_m2;\nalways @(posedge $2 or negedge rst_n) begin\n  if (!rst_n) begin\n    $1_m1 <= 1\'b0;\n    $1_m2 <= 1\'b0;\n  end else begin\n    $1_m1 <= $3;\n    $1_m2 <= $1_m1;\n  end\nend\nassign $1_sync = $1_m2;' },
      { label: 'bram_ram_style', type: 'snippet', detail: 'Infer BRAM memory', insertText: '(* ram_style = "block" *) reg [$1:0] ram_mem [0:$2];' }
    ]
  },

  soc_design: {
    topic: 'soc_design',
    languageName: 'SoC Architecture & AMBA Bus',
    standard: 'ARM AMBA AXI4 / AHB5 / APB4 Protocols',
    description: 'System-on-Chip interconnects, memory controllers, DMA engines, and bus master/slave handshakes.',
    quickChips: [
      { label: 'AXI4-Stream Valid/Ready Handshake', snippet: 'assign transfer_fire = tvalid & tready;\nalways @(posedge aclk or negedge aresetn) begin\n  if (!aresetn) begin\n    tdata <= 0;\n    tvalid <= 0;\n  end else if (transfer_fire) begin\n    // next payload\n  end\nend', tooltip: 'Standard AMBA AXI handshake protocol' },
      { label: 'APB4 Slave Register Bank', snippet: 'always @(posedge pclk or negedge presetn) begin\n  if (!presetn) begin\n    reg0 <= 0;\n  end else if (psel && penable && pwrite) begin\n    case (paddr[7:2])\n      6\'h00: reg0 <= pwdata;\n    endcase\n  end\nend\nassign pready = 1\'b1;\nassign pslverr = 1\'b0;', tooltip: 'APB4 Peripheral bus slave interface' }
    ],
    categories: [
      {
        name: 'AMBA Bus Handshakes',
        items: [
          { syntax: 'VALID && READY Handshake', description: 'Data transfers occur only when both valid and ready are asserted on clock edge', example: 'wire handshake = m_axis_tvalid & m_axis_tready;' }
        ]
      }
    ],
    snippets: [
      { label: 'axi_handshake', type: 'snippet', detail: 'AXI Valid/Ready Handshake Logic', insertText: 'assign $1_handshake = $1_tvalid & $1_tready;' }
    ]
  },

  cv_robotics: {
    topic: 'cv_robotics',
    languageName: 'Computer Vision & Robotics HW',
    standard: 'OpenCV / Hardware Acceleration & Motor FOC',
    description: 'Pipelined pixel processing, Sobel filter 2D convolutions, color space converters, and motion control.',
    quickChips: [
      { label: 'RGB888 to Grayscale Matrix', snippet: '// Y = 0.299R + 0.587G + 0.114B (Fixed point: R*77 + G*150 + B*29 >> 8)\nassign gray = (r * 8\'d77 + g * 8\'d150 + b * 8\'d29) >> 8;', tooltip: 'Synthesizable fixed-point luminance conversion' },
      { label: '3x3 Pixel Window Line Buffer', snippet: 'reg [7:0] row0, row1, row2;\nalways @(posedge pixel_clk) begin\n  if (pixel_valid) begin\n    row0 <= line_buf0_out;\n    row1 <= line_buf1_out;\n    row2 <= current_pixel;\n  end\nend', tooltip: '2D Convolution neighborhood buffer' }
    ],
    categories: [
      {
        name: 'Pipelined Image Filtering',
        items: [
          { syntax: 'Sobel 3x3 Convolution', description: 'Horizontal and Vertical gradient calculation for real-time edge detection', example: 'gx = (p02 + 2*p12 + p22) - (p00 + 2*p10 + p20);' }
        ]
      }
    ],
    snippets: [
      { label: 'rgb2gray', type: 'snippet', detail: 'Fixed-point RGB to Gray calculation', insertText: 'assign gray_out = (red_in * 8\'d77 + green_in * 8\'d150 + blue_in * 8\'d29) >> 8;' }
    ]
  },

  rtos_problems: {
    topic: 'rtos_problems',
    languageName: 'Real-Time Operating Systems (FreeRTOS)',
    standard: 'FreeRTOS Kernel v10.x API',
    description: 'Multitasking RTOS kernels, task scheduling, mutex semaphores, message queues, and event groups.',
    quickChips: [
      { label: 'xTaskCreate()', snippet: 'xTaskCreate(\n  vTaskHandler,      // Function pointer\n  "SensorTask",      // Task name string\n  256,               // Stack depth (words)\n  NULL,              // Task parameters\n  2,                 // Task priority (higher is higher priority)\n  &xTaskHandle       // Task handle\n);', tooltip: 'Create dynamic FreeRTOS task' },
      { label: 'vTaskDelayUntil()', snippet: 'TickType_t xLastWakeTime = xTaskGetTickCount();\nconst TickType_t xFrequency = pdMS_TO_TICKS(100); // 100ms periodic\n\nfor (;;) {\n  vTaskDelayUntil(&xLastWakeTime, xFrequency);\n  // Deterministic periodic execution\n}', tooltip: 'Exact periodic task timing' },
      { label: 'Queue Send / Receive', snippet: 'xQueueSend(xMsgQueue, &msgData, portMAX_DELAY);\nxQueueReceive(xMsgQueue, &rxBuffer, portMAX_DELAY);', tooltip: 'Thread-safe inter-task communication' },
      { label: 'Mutex Take / Give', snippet: 'if (xSemaphoreTake(xMutex, pdMS_TO_TICKS(10)) == pdTRUE) {\n  // Protected shared resource critical section\n  xSemaphoreGive(xMutex);\n}', tooltip: 'Mutual exclusion lock' }
    ],
    categories: [
      {
        name: 'FreeRTOS Core APIs',
        items: [
          { syntax: 'taskENTER_CRITICAL() / taskEXIT_CRITICAL()', description: 'Disable and restore interrupts for atomic hardware blocks', example: 'taskENTER_CRITICAL(); port_write(); taskEXIT_CRITICAL();' }
        ]
      }
    ],
    snippets: [
      { label: 'task_create', type: 'snippet', detail: 'Create FreeRTOS Task', insertText: 'xTaskCreate($1, "$2", $3, NULL, $4, &$5);' },
      { label: 'task_delay', type: 'snippet', detail: 'vTaskDelay ms', insertText: 'vTaskDelay(pdMS_TO_TICKS($1));' },
      { label: 'queue_create', type: 'snippet', detail: 'Create message queue', insertText: '$1 = xQueueCreate($2, sizeof($3));' }
    ]
  },
  vlsi_graph: {
    topic: 'vlsi_graph',
    languageName: 'Python / EDA Algorithmic C++',
    standard: 'IEEE EDA & OpenROAD Graph Algorithms',
    description: 'Graph theory structures & algorithms for VLSI physical design, STA, placement, and global routing.',
    quickChips: [
      { label: 'STA DAG Traversal', snippet: 'def compute_sta_slack(graph, delays, clk_period):\n    # Topological sort & arrival times\n    pass', tooltip: 'Static Timing Analysis on Directed Acyclic Graph' },
      { label: "Lee's BFS Router", snippet: 'from collections import deque\nq = deque([(src_x, src_y, 0)])\nwhile q:\n    x, y, dist = q.popleft()', tooltip: "Grid maze routing wavefront expansion" },
      { label: 'Steiner Tree RSMT', snippet: 'def rectilinear_steiner(pins):\n    # Hanan grid intersections\n    pass', tooltip: 'Rectilinear Steiner Minimal Tree routing' }
    ],
    categories: [
      {
        name: 'EDA Graph Optimization',
        items: [
          { syntax: 'topo_sort(DAG)', description: 'Kahn algorithm or DFS for topological order in combinational clouds', example: 'order = topological_sort(circuit_dag)' },
          { syntax: 'critical_path(AT, RAT)', description: 'Identify zero or negative slack edges for timing closure', example: 'critical = [v for v in dag if rat[v] - at[v] <= 0]' },
          { syntax: 'hanan_grid(pins)', description: 'Generate horizontal and vertical line intersections through all pin terminals', example: 'grid_points = [(p1.x, p2.y) for p1 in pins for p2 in pins]' }
        ]
      }
    ],
    snippets: [
      { label: 'bfs_maze', type: 'snippet', detail: "Lee's Maze Expansion", insertText: 'queue = deque([(start_r, start_c, 0)])' },
      { label: 'slack', type: 'keyword', detail: 'Timing Slack Calculation', insertText: 'slack = rat - at' },
      { label: 'steiner', type: 'snippet', detail: 'Hanan Point Generator', insertText: 'hanan_pts = set((p1[0], p2[1]) for p1 in pins for p2 in pins)' },
      { label: 'vcg_cycle', type: 'snippet', detail: 'VCG Cycle Detection', insertText: 'visited = set()\nrec_stack = set()' }
    ]
  }
};

/**
 * Filter syntax suggestions based on current word / query and topic
 */
export function getSyntaxSuggestions(query: string, topic: Topic): SyntaxSnippet[] {
  const guide = TOPIC_SYNTAX_GUIDES[topic] || TOPIC_SYNTAX_GUIDES.verilog;
  const q = query.trim().toLowerCase();
  if (!q) {
    return guide.snippets.slice(0, 8);
  }

  return guide.snippets
    .filter(s => s.label.toLowerCase().includes(q) || s.detail.toLowerCase().includes(q) || (s.description && s.description.toLowerCase().includes(q)))
    .slice(0, 10);
}
