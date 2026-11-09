import { Problem } from '../types';

export const VERILOG_PROBLEMS: Problem[] = [
{
  "id": "vlog-01",
  "title": "2-to-1 Multiplexer",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Design and implement a synthesizable 2-to-1 multiplexer (combinational logic). When select signal 'sel' is 0, the output 'y' routes input 'a'. When 'sel' is 1, output 'y' routes input 'b'.\n\nCondition & Truth Table:\n- sel = 0 -> y = a\n- sel = 1 -> y = b\n\nBoolean Expression:\nassign y = sel ? b : a;",
  "workedExample": "Step 1: Declare input ports a, b, sel and output port y.\nStep 2: Implement continuous combinational assignment:\n   assign y = sel ? b : a;\nStep 3: Verify output routes a when sel=0 and b when sel=1.",
  "starterCode": "module multiplexer_2to1 (\n    input wire a,\n    input wire b,\n    input wire sel,\n    output wire y\n);\n    // TODO: Implement 2-to-1 Multiplexer (Combinational)\n    // When sel = 0, y = a; when sel = 1, y = b.\n\nendmodule",
  "solutionCode": "module multiplexer_2to1 (\n    input wire a,\n    input wire b,\n    input wire sel,\n    output wire y\n);\n    assign y = sel ? b : a;\nendmodule",
  "hints": [
    "Use continuous ternary assignment: assign y = sel ? b : a;",
    "Pure combinational logic has no clock, flip-flops, or memory."
  ],
  "tags": [
    "VERILOG",
    "2-to-1",
    "Multiplexer",
    "Combinational"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "a",
        "type": "input",
        "initialValue": "0",
        "description": "Data input 0"
      },
      {
        "name": "b",
        "type": "input",
        "initialValue": "1",
        "description": "Data input 1"
      },
      {
        "name": "sel",
        "type": "input",
        "initialValue": "0",
        "description": "Select line"
      },
      {
        "name": "y",
        "type": "output",
        "initialValue": "0",
        "description": "Selected data output"
      }
    ],
    "cycles": 8,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "y",
        "value": "0"
      },
      {
        "cycle": 1,
        "signalName": "y",
        "value": "1"
      }
    ]
  }
},
{
  "id": "vlog-02",
  "title": "4-bit Ripple Carry Adder",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Design and implement a synthesizable 4-bit ripple carry adder (combinational logic). Compute the 4-bit sum and carry-out from two 4-bit inputs 'a' and 'b' plus carry-in 'cin'.\n\nCondition:\n{cout, sum} = a + b + cin;",
  "workedExample": "Step 1: Declare 4-bit inputs a, b, 1-bit cin, 4-bit sum, and 1-bit cout.\nStep 2: Implement continuous arithmetic concatenation:\n   assign {cout, sum} = a + b + cin;\nStep 3: Verify arithmetic addition across vectors.",
  "starterCode": "module adder_4bit (\n    input wire [3:0] a,\n    input wire [3:0] b,\n    input wire cin,\n    output wire [3:0] sum,\n    output wire cout\n);\n    // TODO: Implement 4-bit Ripple Carry Adder (Combinational)\n\nendmodule",
  "solutionCode": "module adder_4bit (\n    input wire [3:0] a,\n    input wire [3:0] b,\n    input wire cin,\n    output wire [3:0] sum,\n    output wire cout\n);\n    assign {cout, sum} = a + b + cin;\nendmodule",
  "hints": [
    "Use vector concatenation for carry out and sum: assign {cout, sum} = a + b + cin;",
    "Pure combinational arithmetic requires no clock or register."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Adder",
    "Arithmetic"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "a[3:0]",
        "type": "input",
        "initialValue": "0101"
      },
      {
        "name": "b[3:0]",
        "type": "input",
        "initialValue": "0011"
      },
      {
        "name": "cin",
        "type": "input",
        "initialValue": "0"
      },
      {
        "name": "sum[3:0]",
        "type": "output",
        "initialValue": "1000"
      },
      {
        "name": "cout",
        "type": "output",
        "initialValue": "0"
      }
    ],
    "cycles": 8,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "sum[3:0]",
        "value": "1000"
      }
    ]
  }
},
{
  "id": "vlog-03",
  "title": "D Flip-Flop with Asynchronous Reset",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'D Flip-Flop with Asynchronous Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for D Flip-Flop with Asynchronous Reset.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module d_flip_flop_with_asynchronous_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement D Flip-Flop with Asynchronous Reset\n\nendmodule",
  "solutionCode": "module d_flip_flop_with_asynchronous_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "D",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-04",
  "title": "4-bit Synchronous Up Counter",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '4-bit Synchronous Up Counter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Synchronous Up Counter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_synchronous_up_counter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Synchronous Up Counter\n\nendmodule",
  "solutionCode": "module 4_bit_synchronous_up_counter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-05",
  "title": "3-to-8 Active-High Binary Decoder",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '3-to-8 Active-High Binary Decoder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 3-to-8 Active-High Binary Decoder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 3_to_8_active_high_binary_deco (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 3-to-8 Active-High Binary Decoder\n\nendmodule",
  "solutionCode": "module 3_to_8_active_high_binary_deco (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "3-to-8",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-06",
  "title": "4-to-1 Multiplexer with Case Statement",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for '4-to-1 Multiplexer with Case Statement'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-to-1 Multiplexer with Case Statement.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_to_1_multiplexer_with_case_s (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-to-1 Multiplexer with Case Statement\n\nendmodule",
  "solutionCode": "module 4_to_1_multiplexer_with_case_s (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-to-1",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-07",
  "title": "8-to-1 Multiplexer using Ternary Operators",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8-to-1 Multiplexer using Ternary Operators'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 8-to-1 Multiplexer using Ternary Operators.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 8_to_1_multiplexer_using_terna (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 8-to-1 Multiplexer using Ternary Operators\n\nendmodule",
  "solutionCode": "module 8_to_1_multiplexer_using_terna (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "8-to-1",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-08",
  "title": "16-to-1 Hierarchical Multiplexer",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '16-to-1 Hierarchical Multiplexer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 16-to-1 Hierarchical Multiplexer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 16_to_1_hierarchical_multiplex (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 16-to-1 Hierarchical Multiplexer\n\nendmodule",
  "solutionCode": "module 16_to_1_hierarchical_multiplex (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "16-to-1",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-09",
  "title": "One-Hot 4-to-1 Multiplexer",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'One-Hot 4-to-1 Multiplexer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for One-Hot 4-to-1 Multiplexer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module one_hot_4_to_1_multiplexer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement One-Hot 4-to-1 Multiplexer\n\nendmodule",
  "solutionCode": "module one_hot_4_to_1_multiplexer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "One-Hot",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-10",
  "title": "2-to-4 Binary Decoder with Enable",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '2-to-4 Binary Decoder with Enable'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 2-to-4 Binary Decoder with Enable.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 2_to_4_binary_decoder_with_ena (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 2-to-4 Binary Decoder with Enable\n\nendmodule",
  "solutionCode": "module 2_to_4_binary_decoder_with_ena (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "2-to-4",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-11",
  "title": "4-to-16 Active-Low Decoder",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '4-to-16 Active-Low Decoder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-to-16 Active-Low Decoder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_to_16_active_low_decoder (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-to-16 Active-Low Decoder\n\nendmodule",
  "solutionCode": "module 4_to_16_active_low_decoder (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-to-16",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-12",
  "title": "Priority Encoder 4-to-2",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Priority Encoder 4-to-2'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Priority Encoder 4-to-2.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module priority_encoder_4_to_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Priority Encoder 4-to-2\n\nendmodule",
  "solutionCode": "module priority_encoder_4_to_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Priority",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-13",
  "title": "Priority Encoder 8-to-3 with Valid Flag",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Priority Encoder 8-to-3 with Valid Flag'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Priority Encoder 8-to-3 with Valid Flag.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module priority_encoder_8_to_3_with_v (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Priority Encoder 8-to-3 with Valid Flag\n\nendmodule",
  "solutionCode": "module priority_encoder_8_to_3_with_v (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Priority",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-14",
  "title": "BCD to 7-Segment Display Decoder",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'BCD to 7-Segment Display Decoder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for BCD to 7-Segment Display Decoder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module bcd_to_7_segment_display_decod (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement BCD to 7-Segment Display Decoder\n\nendmodule",
  "solutionCode": "module bcd_to_7_segment_display_decod (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "BCD",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-15",
  "title": "Gray Code to Binary 4-bit Converter",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Gray Code to Binary 4-bit Converter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Gray Code to Binary 4-bit Converter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module gray_code_to_binary_4_bit_conv (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Gray Code to Binary 4-bit Converter\n\nendmodule",
  "solutionCode": "module gray_code_to_binary_4_bit_conv (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Gray",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-16",
  "title": "Binary to Gray Code 4-bit Converter",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Binary to Gray Code 4-bit Converter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Binary to Gray Code 4-bit Converter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module binary_to_gray_code_4_bit_conv (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Binary to Gray Code 4-bit Converter\n\nendmodule",
  "solutionCode": "module binary_to_gray_code_4_bit_conv (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Binary",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-17",
  "title": "Half Adder Gate-Level Model",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Half Adder Gate-Level Model'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Half Adder Gate-Level Model.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module half_adder_gate_level_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Half Adder Gate-Level Model\n\nendmodule",
  "solutionCode": "module half_adder_gate_level_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Half",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-18",
  "title": "Full Adder using Half Adders",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Full Adder using Half Adders'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Full Adder using Half Adders.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module full_adder_using_half_adders (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Full Adder using Half Adders\n\nendmodule",
  "solutionCode": "module full_adder_using_half_adders (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Full",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-19",
  "title": "4-bit Ripple Carry Adder with Overflow Flag",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '4-bit Ripple Carry Adder with Overflow Flag'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Ripple Carry Adder with Overflow Flag.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_ripple_carry_adder_with_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Ripple Carry Adder with Overflow Flag\n\nendmodule",
  "solutionCode": "module 4_bit_ripple_carry_adder_with_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-20",
  "title": "4-bit Carry Lookahead Adder (CLA)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '4-bit Carry Lookahead Adder (CLA)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Carry Lookahead Adder (CLA).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_carry_lookahead_adder__c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Carry Lookahead Adder (CLA)\n\nendmodule",
  "solutionCode": "module 4_bit_carry_lookahead_adder__c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-21",
  "title": "8-bit Carry Select Adder",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for '8-bit Carry Select Adder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 8-bit Carry Select Adder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 8_bit_carry_select_adder (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 8-bit Carry Select Adder\n\nendmodule",
  "solutionCode": "module 8_bit_carry_select_adder (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "8-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-22",
  "title": "8-bit Carry Save Adder Block",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8-bit Carry Save Adder Block'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 8-bit Carry Save Adder Block.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 8_bit_carry_save_adder_block (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 8-bit Carry Save Adder Block\n\nendmodule",
  "solutionCode": "module 8_bit_carry_save_adder_block (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "8-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-23",
  "title": "4-bit Binary Full Subtractor",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '4-bit Binary Full Subtractor'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Binary Full Subtractor.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_binary_full_subtractor (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Binary Full Subtractor\n\nendmodule",
  "solutionCode": "module 4_bit_binary_full_subtractor (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-24",
  "title": "4-bit Magnitude Comparator (A>B, A=B, A<B)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for '4-bit Magnitude Comparator (A>B, A=B, A<B)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Magnitude Comparator (A>B, A=B, A<B).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_magnitude_comparator__a_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Magnitude Comparator (A>B, A=B, A<B)\n\nendmodule",
  "solutionCode": "module 4_bit_magnitude_comparator__a_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-25",
  "title": "8-bit Arithmetic Logic Unit (ALU)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8-bit Arithmetic Logic Unit (ALU)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 8-bit Arithmetic Logic Unit (ALU).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 8_bit_arithmetic_logic_unit__a (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 8-bit Arithmetic Logic Unit (ALU)\n\nendmodule",
  "solutionCode": "module 8_bit_arithmetic_logic_unit__a (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "8-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-26",
  "title": "D Flip-Flop with Synchronous Reset",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'D Flip-Flop with Synchronous Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for D Flip-Flop with Synchronous Reset.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module d_flip_flop_with_synchronous_r (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement D Flip-Flop with Synchronous Reset\n\nendmodule",
  "solutionCode": "module d_flip_flop_with_synchronous_r (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "D",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-27",
  "title": "D Flip-Flop with Clock Enable",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'D Flip-Flop with Clock Enable'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for D Flip-Flop with Clock Enable.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module d_flip_flop_with_clock_enable (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement D Flip-Flop with Clock Enable\n\nendmodule",
  "solutionCode": "module d_flip_flop_with_clock_enable (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "D",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-28",
  "title": "T Flip-Flop with Asynchronous Reset",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'T Flip-Flop with Asynchronous Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for T Flip-Flop with Asynchronous Reset.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module t_flip_flop_with_asynchronous_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement T Flip-Flop with Asynchronous Reset\n\nendmodule",
  "solutionCode": "module t_flip_flop_with_asynchronous_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "T",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-29",
  "title": "JK Flip-Flop with Race-Free Logic",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'JK Flip-Flop with Race-Free Logic'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for JK Flip-Flop with Race-Free Logic.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module jk_flip_flop_with_race_free_lo (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement JK Flip-Flop with Race-Free Logic\n\nendmodule",
  "solutionCode": "module jk_flip_flop_with_race_free_lo (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "JK",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-30",
  "title": "SR Latch with Active-Low Inputs",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SR Latch with Active-Low Inputs'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SR Latch with Active-Low Inputs.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module sr_latch_with_active_low_input (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SR Latch with Active-Low Inputs\n\nendmodule",
  "solutionCode": "module sr_latch_with_active_low_input (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "SR",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-31",
  "title": "Dual-Edge Triggered Flip-Flop",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Dual-Edge Triggered Flip-Flop'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Dual-Edge Triggered Flip-Flop.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dual_edge_triggered_flip_flop (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Dual-Edge Triggered Flip-Flop\n\nendmodule",
  "solutionCode": "module dual_edge_triggered_flip_flop (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Dual-Edge",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-32",
  "title": "8-bit Parallel-In Parallel-Out (PIPO) Register",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8-bit Parallel-In Parallel-Out (PIPO) Register'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 8-bit Parallel-In Parallel-Out (PIPO) Register.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 8_bit_parallel_in_parallel_out (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 8-bit Parallel-In Parallel-Out (PIPO) Register\n\nendmodule",
  "solutionCode": "module 8_bit_parallel_in_parallel_out (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "8-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-33",
  "title": "4-bit Serial-In Parallel-Out (SIPO) Shift Register",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for '4-bit Serial-In Parallel-Out (SIPO) Shift Register'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Serial-In Parallel-Out (SIPO) Shift Register.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_serial_in_parallel_out__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Serial-In Parallel-Out (SIPO) Shift Register\n\nendmodule",
  "solutionCode": "module 4_bit_serial_in_parallel_out__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-34",
  "title": "4-bit Parallel-In Serial-Out (PISO) Shift Register",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '4-bit Parallel-In Serial-Out (PISO) Shift Register'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Parallel-In Serial-Out (PISO) Shift Register.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_parallel_in_serial_out__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Parallel-In Serial-Out (PISO) Shift Register\n\nendmodule",
  "solutionCode": "module 4_bit_parallel_in_serial_out__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-35",
  "title": "8-bit Serial-In Serial-Out (SISO) Shift Register",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8-bit Serial-In Serial-Out (SISO) Shift Register'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 8-bit Serial-In Serial-Out (SISO) Shift Register.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 8_bit_serial_in_serial_out__si (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 8-bit Serial-In Serial-Out (SISO) Shift Register\n\nendmodule",
  "solutionCode": "module 8_bit_serial_in_serial_out__si (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "8-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-36",
  "title": "4-bit Universal Shift Register with Mode Select",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for '4-bit Universal Shift Register with Mode Select'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Universal Shift Register with Mode Select.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_universal_shift_register (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Universal Shift Register with Mode Select\n\nendmodule",
  "solutionCode": "module 4_bit_universal_shift_register (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-37",
  "title": "4-bit Barrel Shifter Right (Logical and Arithmetic)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '4-bit Barrel Shifter Right (Logical and Arithmetic)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Barrel Shifter Right (Logical and Arithmetic).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_barrel_shifter_right__lo (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Barrel Shifter Right (Logical and Arithmetic)\n\nendmodule",
  "solutionCode": "module 4_bit_barrel_shifter_right__lo (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-38",
  "title": "4-bit Barrel Shifter Left (Logical and Rotate)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '4-bit Barrel Shifter Left (Logical and Rotate)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Barrel Shifter Left (Logical and Rotate).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_barrel_shifter_left__log (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Barrel Shifter Left (Logical and Rotate)\n\nendmodule",
  "solutionCode": "module 4_bit_barrel_shifter_left__log (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-39",
  "title": "4-bit Circular Ring Counter",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for '4-bit Circular Ring Counter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Circular Ring Counter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_circular_ring_counter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Circular Ring Counter\n\nendmodule",
  "solutionCode": "module 4_bit_circular_ring_counter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-40",
  "title": "4-bit Johnson (Twisted Ring) Counter",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '4-bit Johnson (Twisted Ring) Counter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Johnson (Twisted Ring) Counter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_johnson__twisted_ring__c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Johnson (Twisted Ring) Counter\n\nendmodule",
  "solutionCode": "module 4_bit_johnson__twisted_ring__c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-41",
  "title": "4-bit Binary Up Counter with Asynchronous Reset",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for '4-bit Binary Up Counter with Asynchronous Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Binary Up Counter with Asynchronous Reset.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_binary_up_counter_with_a (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Binary Up Counter with Asynchronous Reset\n\nendmodule",
  "solutionCode": "module 4_bit_binary_up_counter_with_a (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-42",
  "title": "4-bit Binary Up/Down Counter with Load",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for '4-bit Binary Up/Down Counter with Load'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 4-bit Binary Up/Down Counter with Load.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 4_bit_binary_up_down_counter_w (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 4-bit Binary Up/Down Counter with Load\n\nendmodule",
  "solutionCode": "module 4_bit_binary_up_down_counter_w (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "4-bit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-43",
  "title": "Modulo-10 (Decade) BCD Counter",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Modulo-10 (Decade) BCD Counter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Modulo-10 (Decade) BCD Counter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module modulo_10__decade__bcd_counter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Modulo-10 (Decade) BCD Counter\n\nendmodule",
  "solutionCode": "module modulo_10__decade__bcd_counter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Modulo-10",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-44",
  "title": "Modulo-12 Counter with Synchronous Clear",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Modulo-12 Counter with Synchronous Clear'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Modulo-12 Counter with Synchronous Clear.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module modulo_12_counter_with_synchro (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Modulo-12 Counter with Synchronous Clear\n\nendmodule",
  "solutionCode": "module modulo_12_counter_with_synchro (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Modulo-12",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-45",
  "title": "Modulo-60 Seconds Counter for Digital Clock",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Modulo-60 Seconds Counter for Digital Clock'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Modulo-60 Seconds Counter for Digital Clock.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module modulo_60_seconds_counter_for_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Modulo-60 Seconds Counter for Digital Clock\n\nendmodule",
  "solutionCode": "module modulo_60_seconds_counter_for_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Modulo-60",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-46",
  "title": "Gray Code 4-bit Up Counter",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Gray Code 4-bit Up Counter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Gray Code 4-bit Up Counter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module gray_code_4_bit_up_counter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Gray Code 4-bit Up Counter\n\nendmodule",
  "solutionCode": "module gray_code_4_bit_up_counter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Gray",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-47",
  "title": "Clock Divider by 2 (50% Duty Cycle)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Clock Divider by 2 (50% Duty Cycle)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Clock Divider by 2 (50% Duty Cycle).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module clock_divider_by_2__50__duty_c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Clock Divider by 2 (50% Duty Cycle)\n\nendmodule",
  "solutionCode": "module clock_divider_by_2__50__duty_c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Clock",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-48",
  "title": "Clock Divider by 4 (50% Duty Cycle)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Clock Divider by 4 (50% Duty Cycle)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Clock Divider by 4 (50% Duty Cycle).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module clock_divider_by_4__50__duty_c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Clock Divider by 4 (50% Duty Cycle)\n\nendmodule",
  "solutionCode": "module clock_divider_by_4__50__duty_c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Clock",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-49",
  "title": "Clock Divider by 3 (50% Duty Cycle)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Clock Divider by 3 (50% Duty Cycle)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Clock Divider by 3 (50% Duty Cycle).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module clock_divider_by_3__50__duty_c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Clock Divider by 3 (50% Duty Cycle)\n\nendmodule",
  "solutionCode": "module clock_divider_by_3__50__duty_c (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Clock",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-50",
  "title": "Fractional Clock Divider (N+0.5)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Fractional Clock Divider (N+0.5)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Fractional Clock Divider (N+0.5).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fractional_clock_divider__n_0_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Fractional Clock Divider (N+0.5)\n\nendmodule",
  "solutionCode": "module fractional_clock_divider__n_0_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Fractional",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-51",
  "title": "Rising Edge Detector Circuit",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Rising Edge Detector Circuit'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Rising Edge Detector Circuit.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module rising_edge_detector_circuit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Rising Edge Detector Circuit\n\nendmodule",
  "solutionCode": "module rising_edge_detector_circuit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Rising",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-52",
  "title": "Falling Edge Detector Circuit",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Falling Edge Detector Circuit'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Falling Edge Detector Circuit.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module falling_edge_detector_circuit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Falling Edge Detector Circuit\n\nendmodule",
  "solutionCode": "module falling_edge_detector_circuit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Falling",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-53",
  "title": "Dual-Edge Pulse Detector Circuit",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Dual-Edge Pulse Detector Circuit'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Dual-Edge Pulse Detector Circuit.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dual_edge_pulse_detector_circu (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Dual-Edge Pulse Detector Circuit\n\nendmodule",
  "solutionCode": "module dual_edge_pulse_detector_circu (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Dual-Edge",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-54",
  "title": "Pulse Stretcher (Configurable Clock Cycles)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Pulse Stretcher (Configurable Clock Cycles)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Pulse Stretcher (Configurable Clock Cycles).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module pulse_stretcher__configurable_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Pulse Stretcher (Configurable Clock Cycles)\n\nendmodule",
  "solutionCode": "module pulse_stretcher__configurable_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Pulse",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-55",
  "title": "Digital Glitch Filter (3-Sample Debouncer)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Digital Glitch Filter (3-Sample Debouncer)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Digital Glitch Filter (3-Sample Debouncer).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module digital_glitch_filter__3_sampl (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Digital Glitch Filter (3-Sample Debouncer)\n\nendmodule",
  "solutionCode": "module digital_glitch_filter__3_sampl (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Digital",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-56",
  "title": "Monostable Multivibrator Pulse Generator",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Monostable Multivibrator Pulse Generator'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Monostable Multivibrator Pulse Generator.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module monostable_multivibrator_pulse (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Monostable Multivibrator Pulse Generator\n\nendmodule",
  "solutionCode": "module monostable_multivibrator_pulse (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Monostable",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-57",
  "title": "Moore FSM Sequence Detector 101 (Non-Overlapping)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Moore FSM Sequence Detector 101 (Non-Overlapping)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Moore FSM Sequence Detector 101 (Non-Overlapping).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module moore_fsm_sequence_detector_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Moore FSM Sequence Detector 101 (Non-Overlapping)\n\nendmodule",
  "solutionCode": "module moore_fsm_sequence_detector_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Moore",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-58",
  "title": "Mealy FSM Sequence Detector 1011 (Overlapping)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Mealy FSM Sequence Detector 1011 (Overlapping)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Mealy FSM Sequence Detector 1011 (Overlapping).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module mealy_fsm_sequence_detector_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Mealy FSM Sequence Detector 1011 (Overlapping)\n\nendmodule",
  "solutionCode": "module mealy_fsm_sequence_detector_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Mealy",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-59",
  "title": "Sequence Detector 1101 with Synchronous Reset",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Sequence Detector 1101 with Synchronous Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Sequence Detector 1101 with Synchronous Reset.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module sequence_detector_1101_with_sy (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Sequence Detector 1101 with Synchronous Reset\n\nendmodule",
  "solutionCode": "module sequence_detector_1101_with_sy (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Sequence",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-60",
  "title": "Sequence Detector 0110 with Active-Low Reset",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Sequence Detector 0110 with Active-Low Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Sequence Detector 0110 with Active-Low Reset.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module sequence_detector_0110_with_ac (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Sequence Detector 0110 with Active-Low Reset\n\nendmodule",
  "solutionCode": "module sequence_detector_0110_with_ac (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Sequence",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-61",
  "title": "Vending Machine FSM (5c, 10c, 15c Item Dispenser)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Vending Machine FSM (5c, 10c, 15c Item Dispenser)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Vending Machine FSM (5c, 10c, 15c Item Dispenser).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module vending_machine_fsm__5c__10c__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Vending Machine FSM (5c, 10c, 15c Item Dispenser)\n\nendmodule",
  "solutionCode": "module vending_machine_fsm__5c__10c__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Vending",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-62",
  "title": "Traffic Light Controller FSM (4-Way Intersection)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Traffic Light Controller FSM (4-Way Intersection)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Traffic Light Controller FSM (4-Way Intersection).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module traffic_light_controller_fsm__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Traffic Light Controller FSM (4-Way Intersection)\n\nendmodule",
  "solutionCode": "module traffic_light_controller_fsm__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Traffic",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-63",
  "title": "3-Floor Elevator Controller FSM",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for '3-Floor Elevator Controller FSM'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 3-Floor Elevator Controller FSM.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 3_floor_elevator_controller_fs (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 3-Floor Elevator Controller FSM\n\nendmodule",
  "solutionCode": "module 3_floor_elevator_controller_fs (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "3-Floor",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-64",
  "title": "Serial Bit Stream Parity Generator FSM",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Serial Bit Stream Parity Generator FSM'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Serial Bit Stream Parity Generator FSM.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module serial_bit_stream_parity_gener (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Serial Bit Stream Parity Generator FSM\n\nendmodule",
  "solutionCode": "module serial_bit_stream_parity_gener (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Serial",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-65",
  "title": "Baud Rate Clock Generator (115200 Baud from 50MHz)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Baud Rate Clock Generator (115200 Baud from 50MHz)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Baud Rate Clock Generator (115200 Baud from 50MHz).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module baud_rate_clock_generator__115 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Baud Rate Clock Generator (115200 Baud from 50MHz)\n\nendmodule",
  "solutionCode": "module baud_rate_clock_generator__115 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Baud",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-66",
  "title": "Single-Port Synchronous RAM 16x8",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Single-Port Synchronous RAM 16x8'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Single-Port Synchronous RAM 16x8.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module single_port_synchronous_ram_16 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Single-Port Synchronous RAM 16x8\n\nendmodule",
  "solutionCode": "module single_port_synchronous_ram_16 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Single-Port",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-67",
  "title": "True Dual-Port RAM 32x8 with Dual Clocks",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'True Dual-Port RAM 32x8 with Dual Clocks'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for True Dual-Port RAM 32x8 with Dual Clocks.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module true_dual_port_ram_32x8_with_d (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement True Dual-Port RAM 32x8 with Dual Clocks\n\nendmodule",
  "solutionCode": "module true_dual_port_ram_32x8_with_d (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "True",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-68",
  "title": "Simple Dual-Port RAM with Separate Read/Write",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Simple Dual-Port RAM with Separate Read/Write'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Simple Dual-Port RAM with Separate Read/Write.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module simple_dual_port_ram_with_sepa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Simple Dual-Port RAM with Separate Read/Write\n\nendmodule",
  "solutionCode": "module simple_dual_port_ram_with_sepa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Simple",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-69",
  "title": "Synchronous FIFO 16x8 with Full and Empty Flags",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Synchronous FIFO 16x8 with Full and Empty Flags'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Synchronous FIFO 16x8 with Full and Empty Flags.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module synchronous_fifo_16x8_with_ful (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Synchronous FIFO 16x8 with Full and Empty Flags\n\nendmodule",
  "solutionCode": "module synchronous_fifo_16x8_with_ful (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Synchronous",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-70",
  "title": "Asynchronous FIFO Gray Code Pointer Logic",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Asynchronous FIFO Gray Code Pointer Logic'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Asynchronous FIFO Gray Code Pointer Logic.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module asynchronous_fifo_gray_code_po (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Asynchronous FIFO Gray Code Pointer Logic\n\nendmodule",
  "solutionCode": "module asynchronous_fifo_gray_code_po (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Asynchronous",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-71",
  "title": "Synchronous LIFO (Stack) Memory 8x8",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Synchronous LIFO (Stack) Memory 8x8'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Synchronous LIFO (Stack) Memory 8x8.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module synchronous_lifo__stack__memor (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Synchronous LIFO (Stack) Memory 8x8\n\nendmodule",
  "solutionCode": "module synchronous_lifo__stack__memor (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Synchronous",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-72",
  "title": "SPI Master Controller Mode 0 (CPOL=0, CPHA=0)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SPI Master Controller Mode 0 (CPOL=0, CPHA=0)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SPI Master Controller Mode 0 (CPOL=0, CPHA=0).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module spi_master_controller_mode_0__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SPI Master Controller Mode 0 (CPOL=0, CPHA=0)\n\nendmodule",
  "solutionCode": "module spi_master_controller_mode_0__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "SPI",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-73",
  "title": "SPI Slave Receiver Byte Buffer",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SPI Slave Receiver Byte Buffer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SPI Slave Receiver Byte Buffer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module spi_slave_receiver_byte_buffer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SPI Slave Receiver Byte Buffer\n\nendmodule",
  "solutionCode": "module spi_slave_receiver_byte_buffer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "SPI",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-74",
  "title": "UART Transmitter 8N1 with Start and Stop Bits",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UART Transmitter 8N1 with Start and Stop Bits'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for UART Transmitter 8N1 with Start and Stop Bits.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module uart_transmitter_8n1_with_star (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement UART Transmitter 8N1 with Start and Stop Bits\n\nendmodule",
  "solutionCode": "module uart_transmitter_8n1_with_star (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "UART",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-75",
  "title": "UART Receiver 8N1 with 16x Oversampling",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UART Receiver 8N1 with 16x Oversampling'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for UART Receiver 8N1 with 16x Oversampling.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module uart_receiver_8n1_with_16x_ove (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement UART Receiver 8N1 with 16x Oversampling\n\nendmodule",
  "solutionCode": "module uart_receiver_8n1_with_16x_ove (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "UART",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-76",
  "title": "I2C Master Start and Stop Condition Generator",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'I2C Master Start and Stop Condition Generator'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for I2C Master Start and Stop Condition Generator.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module i2c_master_start_and_stop_cond (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement I2C Master Start and Stop Condition Generator\n\nendmodule",
  "solutionCode": "module i2c_master_start_and_stop_cond (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "I2C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-77",
  "title": "I2C Slave Address Match Detector",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'I2C Slave Address Match Detector'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for I2C Slave Address Match Detector.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module i2c_slave_address_match_detect (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement I2C Slave Address Match Detector\n\nendmodule",
  "solutionCode": "module i2c_slave_address_match_detect (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "I2C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-78",
  "title": "PWM Generator 8-bit with Duty Cycle Register",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'PWM Generator 8-bit with Duty Cycle Register'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for PWM Generator 8-bit with Duty Cycle Register.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module pwm_generator_8_bit_with_duty_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement PWM Generator 8-bit with Duty Cycle Register\n\nendmodule",
  "solutionCode": "module pwm_generator_8_bit_with_duty_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "PWM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-79",
  "title": "PWM Modulator with Dead-Time Insertion for H-Bridge",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'PWM Modulator with Dead-Time Insertion for H-Bridge'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for PWM Modulator with Dead-Time Insertion for H-Bridge.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module pwm_modulator_with_dead_time_i (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement PWM Modulator with Dead-Time Insertion for H-Bridge\n\nendmodule",
  "solutionCode": "module pwm_modulator_with_dead_time_i (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "PWM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-80",
  "title": "PS/2 Keyboard Serial Protocol Decoder",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'PS/2 Keyboard Serial Protocol Decoder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for PS/2 Keyboard Serial Protocol Decoder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module ps_2_keyboard_serial_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement PS/2 Keyboard Serial Protocol Decoder\n\nendmodule",
  "solutionCode": "module ps_2_keyboard_serial_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "PS/2",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-81",
  "title": "Wallace Tree Multiplier 4x4 Stage",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Wallace Tree Multiplier 4x4 Stage'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Wallace Tree Multiplier 4x4 Stage.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module wallace_tree_multiplier_4x4_st (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Wallace Tree Multiplier 4x4 Stage\n\nendmodule",
  "solutionCode": "module wallace_tree_multiplier_4x4_st (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Wallace",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-82",
  "title": "Booth Multiplier 4-bit Radix-2 Recoding Stage",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Booth Multiplier 4-bit Radix-2 Recoding Stage'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Booth Multiplier 4-bit Radix-2 Recoding Stage.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module booth_multiplier_4_bit_radix_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Booth Multiplier 4-bit Radix-2 Recoding Stage\n\nendmodule",
  "solutionCode": "module booth_multiplier_4_bit_radix_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Booth",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-83",
  "title": "Fixed-Point Multiplier-Accumulator (MAC) 8-bit",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Fixed-Point Multiplier-Accumulator (MAC) 8-bit'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Fixed-Point Multiplier-Accumulator (MAC) 8-bit.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fixed_point_multiplier_accumul (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Fixed-Point Multiplier-Accumulator (MAC) 8-bit\n\nendmodule",
  "solutionCode": "module fixed_point_multiplier_accumul (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Fixed-Point",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-84",
  "title": "CORDIC Vectoring Rotation Stage",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'CORDIC Vectoring Rotation Stage'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for CORDIC Vectoring Rotation Stage.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module cordic_vectoring_rotation_stag (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement CORDIC Vectoring Rotation Stage\n\nendmodule",
  "solutionCode": "module cordic_vectoring_rotation_stag (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "CORDIC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-85",
  "title": "LFSR 8-bit Pseudo-Random Number Generator (PRNG)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LFSR 8-bit Pseudo-Random Number Generator (PRNG)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for LFSR 8-bit Pseudo-Random Number Generator (PRNG).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module lfsr_8_bit_pseudo_random_numbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement LFSR 8-bit Pseudo-Random Number Generator (PRNG)\n\nendmodule",
  "solutionCode": "module lfsr_8_bit_pseudo_random_numbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "LFSR",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-86",
  "title": "CRC-8 Serial Generator (Polynomial 0x07)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'CRC-8 Serial Generator (Polynomial 0x07)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for CRC-8 Serial Generator (Polynomial 0x07).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module crc_8_serial_generator__polyno (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement CRC-8 Serial Generator (Polynomial 0x07)\n\nendmodule",
  "solutionCode": "module crc_8_serial_generator__polyno (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "CRC-8",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-87",
  "title": "CRC-16-CCITT Serial Generator (Polynomial 0x1021)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'CRC-16-CCITT Serial Generator (Polynomial 0x1021)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for CRC-16-CCITT Serial Generator (Polynomial 0x1021).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module crc_16_ccitt_serial_generator_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement CRC-16-CCITT Serial Generator (Polynomial 0x1021)\n\nendmodule",
  "solutionCode": "module crc_16_ccitt_serial_generator_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "CRC-16-CCITT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-88",
  "title": "Hamming Code (7,4) Single Error Correction Encoder",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Hamming Code (7,4) Single Error Correction Encoder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Hamming Code (7,4) Single Error Correction Encoder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module hamming_code__7_4__single_erro (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Hamming Code (7,4) Single Error Correction Encoder\n\nendmodule",
  "solutionCode": "module hamming_code__7_4__single_erro (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Hamming",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-89",
  "title": "Hamming Code (7,4) Syndrome Error Decoder",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Hamming Code (7,4) Syndrome Error Decoder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Hamming Code (7,4) Syndrome Error Decoder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module hamming_code__7_4__syndrome_er (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Hamming Code (7,4) Syndrome Error Decoder\n\nendmodule",
  "solutionCode": "module hamming_code__7_4__syndrome_er (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Hamming",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-90",
  "title": "Even Parity Generator 8-bit",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Even Parity Generator 8-bit'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Even Parity Generator 8-bit.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module even_parity_generator_8_bit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Even Parity Generator 8-bit\n\nendmodule",
  "solutionCode": "module even_parity_generator_8_bit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Even",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-91",
  "title": "Odd Parity Checker 9-bit",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Odd Parity Checker 9-bit'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Odd Parity Checker 9-bit.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module odd_parity_checker_9_bit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Odd Parity Checker 9-bit\n\nendmodule",
  "solutionCode": "module odd_parity_checker_9_bit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Odd",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-92",
  "title": "2-Stage Flip-Flop CDC Synchronizer",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '2-Stage Flip-Flop CDC Synchronizer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 2-Stage Flip-Flop CDC Synchronizer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 2_stage_flip_flop_cdc_synchron (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 2-Stage Flip-Flop CDC Synchronizer\n\nendmodule",
  "solutionCode": "module 2_stage_flip_flop_cdc_synchron (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "2-Stage",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-93",
  "title": "Toggle Pulse Synchronizer for CDC",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Toggle Pulse Synchronizer for CDC'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Toggle Pulse Synchronizer for CDC.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module toggle_pulse_synchronizer_for_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Toggle Pulse Synchronizer for CDC\n\nendmodule",
  "solutionCode": "module toggle_pulse_synchronizer_for_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Toggle",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-94",
  "title": "Mux-Data Recirculation CDC Synchronizer",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Mux-Data Recirculation CDC Synchronizer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Mux-Data Recirculation CDC Synchronizer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module mux_data_recirculation_cdc_syn (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Mux-Data Recirculation CDC Synchronizer\n\nendmodule",
  "solutionCode": "module mux_data_recirculation_cdc_syn (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Mux-Data",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-95",
  "title": "Asynchronous Reset Synchronizer (Async Assert, Sync Deassert)",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Asynchronous Reset Synchronizer (Async Assert, Sync Deassert)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Asynchronous Reset Synchronizer (Async Assert, Sync Deassert).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module asynchronous_reset_synchronize (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Asynchronous Reset Synchronizer (Async Assert, Sync Deassert)\n\nendmodule",
  "solutionCode": "module asynchronous_reset_synchronize (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Asynchronous",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-96",
  "title": "Round-Robin Arbiter with 4 Request Lines",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Round-Robin Arbiter with 4 Request Lines'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Round-Robin Arbiter with 4 Request Lines.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module round_robin_arbiter_with_4_req (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Round-Robin Arbiter with 4 Request Lines\n\nendmodule",
  "solutionCode": "module round_robin_arbiter_with_4_req (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Round-Robin",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-97",
  "title": "Fixed-Priority Arbiter with 4 Request Lines",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Fixed-Priority Arbiter with 4 Request Lines'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Fixed-Priority Arbiter with 4 Request Lines.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fixed_priority_arbiter_with_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Fixed-Priority Arbiter with 4 Request Lines\n\nendmodule",
  "solutionCode": "module fixed_priority_arbiter_with_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Fixed-Priority",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-98",
  "title": "Lottery Fair-Share Bus Arbiter",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Lottery Fair-Share Bus Arbiter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Lottery Fair-Share Bus Arbiter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module lottery_fair_share_bus_arbiter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Lottery Fair-Share Bus Arbiter\n\nendmodule",
  "solutionCode": "module lottery_fair_share_bus_arbiter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Lottery",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-99",
  "title": "Direct-Mapped Cache Controller Tag Matching",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Direct-Mapped Cache Controller Tag Matching'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Direct-Mapped Cache Controller Tag Matching.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module direct_mapped_cache_controller (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Direct-Mapped Cache Controller Tag Matching\n\nendmodule",
  "solutionCode": "module direct_mapped_cache_controller (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "Direct-Mapped",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-100",
  "title": "2-Way Set-Associative Cache LRU Replacement Block",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for '2-Way Set-Associative Cache LRU Replacement Block'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for 2-Way Set-Associative Cache LRU Replacement Block.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module 2_way_set_associative_cache_lr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement 2-Way Set-Associative Cache LRU Replacement Block\n\nendmodule",
  "solutionCode": "module 2_way_set_associative_cache_lr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "2-Way",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-101",
  "title": "VERILOG Data Flow Control Part 1: Unit 101",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Data Flow Control Part 1: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Data Flow Control Part 1: Unit 101.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Data Flow Control Part 1: Unit 101\n\nendmodule",
  "solutionCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-102",
  "title": "VERILOG Corner Case Analysis Part 1: Unit 102",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Corner Case Analysis Part 1: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Corner Case Analysis Part 1: Unit 102.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Corner Case Analysis Part 1: Unit 102\n\nendmodule",
  "solutionCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-103",
  "title": "VERILOG Bandwidth Maximizer Part 1: Unit 103",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Bandwidth Maximizer Part 1: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Bandwidth Maximizer Part 1: Unit 103.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Bandwidth Maximizer Part 1: Unit 103\n\nendmodule",
  "solutionCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-104",
  "title": "VERILOG Latency Reduction Part 1: Unit 104",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Latency Reduction Part 1: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Latency Reduction Part 1: Unit 104.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Latency Reduction Part 1: Unit 104\n\nendmodule",
  "solutionCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-105",
  "title": "VERILOG CDC Isolation Part 1: Unit 105",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG CDC Isolation Part 1: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG CDC Isolation Part 1: Unit 105.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_cdc_isolation_part_1__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG CDC Isolation Part 1: Unit 105\n\nendmodule",
  "solutionCode": "module verilog_cdc_isolation_part_1__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-106",
  "title": "VERILOG Error Handling Part 1: Unit 106",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Error Handling Part 1: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Error Handling Part 1: Unit 106.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_error_handling_part_1_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Error Handling Part 1: Unit 106\n\nendmodule",
  "solutionCode": "module verilog_error_handling_part_1_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-107",
  "title": "VERILOG High-Speed Encoding Part 1: Unit 107",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG High-Speed Encoding Part 1: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG High-Speed Encoding Part 1: Unit 107.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG High-Speed Encoding Part 1: Unit 107\n\nendmodule",
  "solutionCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-108",
  "title": "VERILOG Synthesizable Model Part 1: Unit 108",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Synthesizable Model Part 1: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Synthesizable Model Part 1: Unit 108.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Synthesizable Model Part 1: Unit 108\n\nendmodule",
  "solutionCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-109",
  "title": "VERILOG Optimization Part 2: Unit 109",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Optimization Part 2: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Optimization Part 2: Unit 109.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_optimization_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Optimization Part 2: Unit 109\n\nendmodule",
  "solutionCode": "module verilog_optimization_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-110",
  "title": "VERILOG Architecture Part 2: Unit 110",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Architecture Part 2: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Architecture Part 2: Unit 110.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_architecture_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Architecture Part 2: Unit 110\n\nendmodule",
  "solutionCode": "module verilog_architecture_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-111",
  "title": "VERILOG Pipeline Stage Part 2: Unit 111",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Pipeline Stage Part 2: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Pipeline Stage Part 2: Unit 111.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_pipeline_stage_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Pipeline Stage Part 2: Unit 111\n\nendmodule",
  "solutionCode": "module verilog_pipeline_stage_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-112",
  "title": "VERILOG Interface Protocol Part 2: Unit 112",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Interface Protocol Part 2: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Interface Protocol Part 2: Unit 112.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Interface Protocol Part 2: Unit 112\n\nendmodule",
  "solutionCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-113",
  "title": "VERILOG Low-Power Design Part 2: Unit 113",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Low-Power Design Part 2: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Low-Power Design Part 2: Unit 113.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Low-Power Design Part 2: Unit 113\n\nendmodule",
  "solutionCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-114",
  "title": "VERILOG Timing Closure Part 2: Unit 114",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Timing Closure Part 2: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Timing Closure Part 2: Unit 114.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_timing_closure_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Timing Closure Part 2: Unit 114\n\nendmodule",
  "solutionCode": "module verilog_timing_closure_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-115",
  "title": "VERILOG Resource Sharing Part 2: Unit 115",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Resource Sharing Part 2: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Resource Sharing Part 2: Unit 115.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Resource Sharing Part 2: Unit 115\n\nendmodule",
  "solutionCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-116",
  "title": "VERILOG Fault Tolerance Part 2: Unit 116",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Fault Tolerance Part 2: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Fault Tolerance Part 2: Unit 116.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_fault_tolerance_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Fault Tolerance Part 2: Unit 116\n\nendmodule",
  "solutionCode": "module verilog_fault_tolerance_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-117",
  "title": "VERILOG Verification Testbench Part 2: Unit 117",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Verification Testbench Part 2: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Verification Testbench Part 2: Unit 117.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Verification Testbench Part 2: Unit 117\n\nendmodule",
  "solutionCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-118",
  "title": "VERILOG Hardware Acceleration Part 2: Unit 118",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Hardware Acceleration Part 2: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Hardware Acceleration Part 2: Unit 118.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Hardware Acceleration Part 2: Unit 118\n\nendmodule",
  "solutionCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-119",
  "title": "VERILOG Data Flow Control Part 2: Unit 119",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Data Flow Control Part 2: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Data Flow Control Part 2: Unit 119.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Data Flow Control Part 2: Unit 119\n\nendmodule",
  "solutionCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-120",
  "title": "VERILOG Corner Case Analysis Part 2: Unit 120",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Corner Case Analysis Part 2: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Corner Case Analysis Part 2: Unit 120.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Corner Case Analysis Part 2: Unit 120\n\nendmodule",
  "solutionCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-121",
  "title": "VERILOG Bandwidth Maximizer Part 2: Unit 121",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Bandwidth Maximizer Part 2: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Bandwidth Maximizer Part 2: Unit 121.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Bandwidth Maximizer Part 2: Unit 121\n\nendmodule",
  "solutionCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-122",
  "title": "VERILOG Latency Reduction Part 2: Unit 122",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Latency Reduction Part 2: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Latency Reduction Part 2: Unit 122.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Latency Reduction Part 2: Unit 122\n\nendmodule",
  "solutionCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-123",
  "title": "VERILOG CDC Isolation Part 2: Unit 123",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG CDC Isolation Part 2: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG CDC Isolation Part 2: Unit 123.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_cdc_isolation_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG CDC Isolation Part 2: Unit 123\n\nendmodule",
  "solutionCode": "module verilog_cdc_isolation_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-124",
  "title": "VERILOG Error Handling Part 2: Unit 124",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Error Handling Part 2: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Error Handling Part 2: Unit 124.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_error_handling_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Error Handling Part 2: Unit 124\n\nendmodule",
  "solutionCode": "module verilog_error_handling_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-125",
  "title": "VERILOG High-Speed Encoding Part 2: Unit 125",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG High-Speed Encoding Part 2: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG High-Speed Encoding Part 2: Unit 125.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG High-Speed Encoding Part 2: Unit 125\n\nendmodule",
  "solutionCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-126",
  "title": "VERILOG Synthesizable Model Part 2: Unit 126",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Synthesizable Model Part 2: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Synthesizable Model Part 2: Unit 126.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Synthesizable Model Part 2: Unit 126\n\nendmodule",
  "solutionCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-127",
  "title": "VERILOG Optimization Part 3: Unit 127",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Optimization Part 3: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Optimization Part 3: Unit 127.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_optimization_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Optimization Part 3: Unit 127\n\nendmodule",
  "solutionCode": "module verilog_optimization_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-128",
  "title": "VERILOG Architecture Part 3: Unit 128",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Architecture Part 3: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Architecture Part 3: Unit 128.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_architecture_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Architecture Part 3: Unit 128\n\nendmodule",
  "solutionCode": "module verilog_architecture_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-129",
  "title": "VERILOG Pipeline Stage Part 3: Unit 129",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Pipeline Stage Part 3: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Pipeline Stage Part 3: Unit 129.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_pipeline_stage_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Pipeline Stage Part 3: Unit 129\n\nendmodule",
  "solutionCode": "module verilog_pipeline_stage_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-130",
  "title": "VERILOG Interface Protocol Part 3: Unit 130",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Interface Protocol Part 3: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Interface Protocol Part 3: Unit 130.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Interface Protocol Part 3: Unit 130\n\nendmodule",
  "solutionCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-131",
  "title": "VERILOG Low-Power Design Part 3: Unit 131",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Low-Power Design Part 3: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Low-Power Design Part 3: Unit 131.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Low-Power Design Part 3: Unit 131\n\nendmodule",
  "solutionCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-132",
  "title": "VERILOG Timing Closure Part 3: Unit 132",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Timing Closure Part 3: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Timing Closure Part 3: Unit 132.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_timing_closure_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Timing Closure Part 3: Unit 132\n\nendmodule",
  "solutionCode": "module verilog_timing_closure_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-133",
  "title": "VERILOG Resource Sharing Part 3: Unit 133",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Resource Sharing Part 3: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Resource Sharing Part 3: Unit 133.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Resource Sharing Part 3: Unit 133\n\nendmodule",
  "solutionCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-134",
  "title": "VERILOG Fault Tolerance Part 3: Unit 134",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Fault Tolerance Part 3: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Fault Tolerance Part 3: Unit 134.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_fault_tolerance_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Fault Tolerance Part 3: Unit 134\n\nendmodule",
  "solutionCode": "module verilog_fault_tolerance_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-135",
  "title": "VERILOG Verification Testbench Part 3: Unit 135",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Verification Testbench Part 3: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Verification Testbench Part 3: Unit 135.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Verification Testbench Part 3: Unit 135\n\nendmodule",
  "solutionCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-136",
  "title": "VERILOG Hardware Acceleration Part 3: Unit 136",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Hardware Acceleration Part 3: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Hardware Acceleration Part 3: Unit 136.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Hardware Acceleration Part 3: Unit 136\n\nendmodule",
  "solutionCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-137",
  "title": "VERILOG Data Flow Control Part 3: Unit 137",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Data Flow Control Part 3: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Data Flow Control Part 3: Unit 137.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Data Flow Control Part 3: Unit 137\n\nendmodule",
  "solutionCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-138",
  "title": "VERILOG Corner Case Analysis Part 3: Unit 138",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Corner Case Analysis Part 3: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Corner Case Analysis Part 3: Unit 138.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Corner Case Analysis Part 3: Unit 138\n\nendmodule",
  "solutionCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-139",
  "title": "VERILOG Bandwidth Maximizer Part 3: Unit 139",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Bandwidth Maximizer Part 3: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Bandwidth Maximizer Part 3: Unit 139.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Bandwidth Maximizer Part 3: Unit 139\n\nendmodule",
  "solutionCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-140",
  "title": "VERILOG Latency Reduction Part 3: Unit 140",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Latency Reduction Part 3: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Latency Reduction Part 3: Unit 140.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Latency Reduction Part 3: Unit 140\n\nendmodule",
  "solutionCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-141",
  "title": "VERILOG CDC Isolation Part 3: Unit 141",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG CDC Isolation Part 3: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG CDC Isolation Part 3: Unit 141.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_cdc_isolation_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG CDC Isolation Part 3: Unit 141\n\nendmodule",
  "solutionCode": "module verilog_cdc_isolation_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-142",
  "title": "VERILOG Error Handling Part 3: Unit 142",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Error Handling Part 3: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Error Handling Part 3: Unit 142.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_error_handling_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Error Handling Part 3: Unit 142\n\nendmodule",
  "solutionCode": "module verilog_error_handling_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-143",
  "title": "VERILOG High-Speed Encoding Part 3: Unit 143",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG High-Speed Encoding Part 3: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG High-Speed Encoding Part 3: Unit 143.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG High-Speed Encoding Part 3: Unit 143\n\nendmodule",
  "solutionCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-144",
  "title": "VERILOG Synthesizable Model Part 3: Unit 144",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Synthesizable Model Part 3: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Synthesizable Model Part 3: Unit 144.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Synthesizable Model Part 3: Unit 144\n\nendmodule",
  "solutionCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-145",
  "title": "VERILOG Optimization Part 4: Unit 145",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Optimization Part 4: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Optimization Part 4: Unit 145.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_optimization_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Optimization Part 4: Unit 145\n\nendmodule",
  "solutionCode": "module verilog_optimization_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-146",
  "title": "VERILOG Architecture Part 4: Unit 146",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Architecture Part 4: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Architecture Part 4: Unit 146.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_architecture_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Architecture Part 4: Unit 146\n\nendmodule",
  "solutionCode": "module verilog_architecture_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-147",
  "title": "VERILOG Pipeline Stage Part 4: Unit 147",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Pipeline Stage Part 4: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Pipeline Stage Part 4: Unit 147.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_pipeline_stage_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Pipeline Stage Part 4: Unit 147\n\nendmodule",
  "solutionCode": "module verilog_pipeline_stage_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-148",
  "title": "VERILOG Interface Protocol Part 4: Unit 148",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Interface Protocol Part 4: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Interface Protocol Part 4: Unit 148.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Interface Protocol Part 4: Unit 148\n\nendmodule",
  "solutionCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-149",
  "title": "VERILOG Low-Power Design Part 4: Unit 149",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Low-Power Design Part 4: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Low-Power Design Part 4: Unit 149.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Low-Power Design Part 4: Unit 149\n\nendmodule",
  "solutionCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-150",
  "title": "VERILOG Timing Closure Part 4: Unit 150",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Timing Closure Part 4: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Timing Closure Part 4: Unit 150.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_timing_closure_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Timing Closure Part 4: Unit 150\n\nendmodule",
  "solutionCode": "module verilog_timing_closure_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-151",
  "title": "VERILOG Resource Sharing Part 4: Unit 151",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Resource Sharing Part 4: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Resource Sharing Part 4: Unit 151.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Resource Sharing Part 4: Unit 151\n\nendmodule",
  "solutionCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-152",
  "title": "VERILOG Fault Tolerance Part 4: Unit 152",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Fault Tolerance Part 4: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Fault Tolerance Part 4: Unit 152.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_fault_tolerance_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Fault Tolerance Part 4: Unit 152\n\nendmodule",
  "solutionCode": "module verilog_fault_tolerance_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-153",
  "title": "VERILOG Verification Testbench Part 4: Unit 153",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Verification Testbench Part 4: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Verification Testbench Part 4: Unit 153.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Verification Testbench Part 4: Unit 153\n\nendmodule",
  "solutionCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-154",
  "title": "VERILOG Hardware Acceleration Part 4: Unit 154",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Hardware Acceleration Part 4: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Hardware Acceleration Part 4: Unit 154.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Hardware Acceleration Part 4: Unit 154\n\nendmodule",
  "solutionCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-155",
  "title": "VERILOG Data Flow Control Part 4: Unit 155",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Data Flow Control Part 4: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Data Flow Control Part 4: Unit 155.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Data Flow Control Part 4: Unit 155\n\nendmodule",
  "solutionCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-156",
  "title": "VERILOG Corner Case Analysis Part 4: Unit 156",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Corner Case Analysis Part 4: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Corner Case Analysis Part 4: Unit 156.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Corner Case Analysis Part 4: Unit 156\n\nendmodule",
  "solutionCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-157",
  "title": "VERILOG Bandwidth Maximizer Part 4: Unit 157",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Bandwidth Maximizer Part 4: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Bandwidth Maximizer Part 4: Unit 157.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Bandwidth Maximizer Part 4: Unit 157\n\nendmodule",
  "solutionCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-158",
  "title": "VERILOG Latency Reduction Part 4: Unit 158",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Latency Reduction Part 4: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Latency Reduction Part 4: Unit 158.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Latency Reduction Part 4: Unit 158\n\nendmodule",
  "solutionCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-159",
  "title": "VERILOG CDC Isolation Part 4: Unit 159",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG CDC Isolation Part 4: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG CDC Isolation Part 4: Unit 159.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_cdc_isolation_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG CDC Isolation Part 4: Unit 159\n\nendmodule",
  "solutionCode": "module verilog_cdc_isolation_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-160",
  "title": "VERILOG Error Handling Part 4: Unit 160",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Error Handling Part 4: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Error Handling Part 4: Unit 160.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_error_handling_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Error Handling Part 4: Unit 160\n\nendmodule",
  "solutionCode": "module verilog_error_handling_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-161",
  "title": "VERILOG High-Speed Encoding Part 4: Unit 161",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG High-Speed Encoding Part 4: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG High-Speed Encoding Part 4: Unit 161.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG High-Speed Encoding Part 4: Unit 161\n\nendmodule",
  "solutionCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-162",
  "title": "VERILOG Synthesizable Model Part 4: Unit 162",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Synthesizable Model Part 4: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Synthesizable Model Part 4: Unit 162.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Synthesizable Model Part 4: Unit 162\n\nendmodule",
  "solutionCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-163",
  "title": "VERILOG Optimization Part 5: Unit 163",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Optimization Part 5: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Optimization Part 5: Unit 163.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_optimization_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Optimization Part 5: Unit 163\n\nendmodule",
  "solutionCode": "module verilog_optimization_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-164",
  "title": "VERILOG Architecture Part 5: Unit 164",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Architecture Part 5: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Architecture Part 5: Unit 164.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_architecture_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Architecture Part 5: Unit 164\n\nendmodule",
  "solutionCode": "module verilog_architecture_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-165",
  "title": "VERILOG Pipeline Stage Part 5: Unit 165",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Pipeline Stage Part 5: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Pipeline Stage Part 5: Unit 165.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_pipeline_stage_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Pipeline Stage Part 5: Unit 165\n\nendmodule",
  "solutionCode": "module verilog_pipeline_stage_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-166",
  "title": "VERILOG Interface Protocol Part 5: Unit 166",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Interface Protocol Part 5: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Interface Protocol Part 5: Unit 166.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Interface Protocol Part 5: Unit 166\n\nendmodule",
  "solutionCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-167",
  "title": "VERILOG Low-Power Design Part 5: Unit 167",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Low-Power Design Part 5: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Low-Power Design Part 5: Unit 167.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Low-Power Design Part 5: Unit 167\n\nendmodule",
  "solutionCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-168",
  "title": "VERILOG Timing Closure Part 5: Unit 168",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Timing Closure Part 5: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Timing Closure Part 5: Unit 168.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_timing_closure_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Timing Closure Part 5: Unit 168\n\nendmodule",
  "solutionCode": "module verilog_timing_closure_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-169",
  "title": "VERILOG Resource Sharing Part 5: Unit 169",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Resource Sharing Part 5: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Resource Sharing Part 5: Unit 169.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Resource Sharing Part 5: Unit 169\n\nendmodule",
  "solutionCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-170",
  "title": "VERILOG Fault Tolerance Part 5: Unit 170",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Fault Tolerance Part 5: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Fault Tolerance Part 5: Unit 170.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_fault_tolerance_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Fault Tolerance Part 5: Unit 170\n\nendmodule",
  "solutionCode": "module verilog_fault_tolerance_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-171",
  "title": "VERILOG Verification Testbench Part 5: Unit 171",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Verification Testbench Part 5: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Verification Testbench Part 5: Unit 171.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Verification Testbench Part 5: Unit 171\n\nendmodule",
  "solutionCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-172",
  "title": "VERILOG Hardware Acceleration Part 5: Unit 172",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Hardware Acceleration Part 5: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Hardware Acceleration Part 5: Unit 172.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Hardware Acceleration Part 5: Unit 172\n\nendmodule",
  "solutionCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-173",
  "title": "VERILOG Data Flow Control Part 5: Unit 173",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Data Flow Control Part 5: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Data Flow Control Part 5: Unit 173.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Data Flow Control Part 5: Unit 173\n\nendmodule",
  "solutionCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-174",
  "title": "VERILOG Corner Case Analysis Part 5: Unit 174",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Corner Case Analysis Part 5: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Corner Case Analysis Part 5: Unit 174.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Corner Case Analysis Part 5: Unit 174\n\nendmodule",
  "solutionCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-175",
  "title": "VERILOG Bandwidth Maximizer Part 5: Unit 175",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Bandwidth Maximizer Part 5: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Bandwidth Maximizer Part 5: Unit 175.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Bandwidth Maximizer Part 5: Unit 175\n\nendmodule",
  "solutionCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-176",
  "title": "VERILOG Latency Reduction Part 5: Unit 176",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Latency Reduction Part 5: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Latency Reduction Part 5: Unit 176.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Latency Reduction Part 5: Unit 176\n\nendmodule",
  "solutionCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-177",
  "title": "VERILOG CDC Isolation Part 5: Unit 177",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG CDC Isolation Part 5: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG CDC Isolation Part 5: Unit 177.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_cdc_isolation_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG CDC Isolation Part 5: Unit 177\n\nendmodule",
  "solutionCode": "module verilog_cdc_isolation_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-178",
  "title": "VERILOG Error Handling Part 5: Unit 178",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Error Handling Part 5: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Error Handling Part 5: Unit 178.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_error_handling_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Error Handling Part 5: Unit 178\n\nendmodule",
  "solutionCode": "module verilog_error_handling_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-179",
  "title": "VERILOG High-Speed Encoding Part 5: Unit 179",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG High-Speed Encoding Part 5: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG High-Speed Encoding Part 5: Unit 179.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG High-Speed Encoding Part 5: Unit 179\n\nendmodule",
  "solutionCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-180",
  "title": "VERILOG Synthesizable Model Part 5: Unit 180",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Synthesizable Model Part 5: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Synthesizable Model Part 5: Unit 180.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Synthesizable Model Part 5: Unit 180\n\nendmodule",
  "solutionCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-181",
  "title": "VERILOG Optimization Part 6: Unit 181",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Optimization Part 6: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Optimization Part 6: Unit 181.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_optimization_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Optimization Part 6: Unit 181\n\nendmodule",
  "solutionCode": "module verilog_optimization_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-182",
  "title": "VERILOG Architecture Part 6: Unit 182",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Architecture Part 6: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Architecture Part 6: Unit 182.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_architecture_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Architecture Part 6: Unit 182\n\nendmodule",
  "solutionCode": "module verilog_architecture_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-183",
  "title": "VERILOG Pipeline Stage Part 6: Unit 183",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Pipeline Stage Part 6: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Pipeline Stage Part 6: Unit 183.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_pipeline_stage_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Pipeline Stage Part 6: Unit 183\n\nendmodule",
  "solutionCode": "module verilog_pipeline_stage_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-184",
  "title": "VERILOG Interface Protocol Part 6: Unit 184",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Interface Protocol Part 6: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Interface Protocol Part 6: Unit 184.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Interface Protocol Part 6: Unit 184\n\nendmodule",
  "solutionCode": "module verilog_interface_protocol_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-185",
  "title": "VERILOG Low-Power Design Part 6: Unit 185",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Low-Power Design Part 6: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Low-Power Design Part 6: Unit 185.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Low-Power Design Part 6: Unit 185\n\nendmodule",
  "solutionCode": "module verilog_low_power_design_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-186",
  "title": "VERILOG Timing Closure Part 6: Unit 186",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Timing Closure Part 6: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Timing Closure Part 6: Unit 186.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_timing_closure_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Timing Closure Part 6: Unit 186\n\nendmodule",
  "solutionCode": "module verilog_timing_closure_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-187",
  "title": "VERILOG Resource Sharing Part 6: Unit 187",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Resource Sharing Part 6: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Resource Sharing Part 6: Unit 187.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Resource Sharing Part 6: Unit 187\n\nendmodule",
  "solutionCode": "module verilog_resource_sharing_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-188",
  "title": "VERILOG Fault Tolerance Part 6: Unit 188",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Fault Tolerance Part 6: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Fault Tolerance Part 6: Unit 188.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_fault_tolerance_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Fault Tolerance Part 6: Unit 188\n\nendmodule",
  "solutionCode": "module verilog_fault_tolerance_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-189",
  "title": "VERILOG Verification Testbench Part 6: Unit 189",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Verification Testbench Part 6: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Verification Testbench Part 6: Unit 189.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Verification Testbench Part 6: Unit 189\n\nendmodule",
  "solutionCode": "module verilog_verification_testbench (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-190",
  "title": "VERILOG Hardware Acceleration Part 6: Unit 190",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Hardware Acceleration Part 6: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Hardware Acceleration Part 6: Unit 190.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Hardware Acceleration Part 6: Unit 190\n\nendmodule",
  "solutionCode": "module verilog_hardware_acceleration_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-191",
  "title": "VERILOG Data Flow Control Part 6: Unit 191",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Data Flow Control Part 6: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Data Flow Control Part 6: Unit 191.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Data Flow Control Part 6: Unit 191\n\nendmodule",
  "solutionCode": "module verilog_data_flow_control_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-192",
  "title": "VERILOG Corner Case Analysis Part 6: Unit 192",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Corner Case Analysis Part 6: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Corner Case Analysis Part 6: Unit 192.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Corner Case Analysis Part 6: Unit 192\n\nendmodule",
  "solutionCode": "module verilog_corner_case_analysis_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-193",
  "title": "VERILOG Bandwidth Maximizer Part 6: Unit 193",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Bandwidth Maximizer Part 6: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Bandwidth Maximizer Part 6: Unit 193.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Bandwidth Maximizer Part 6: Unit 193\n\nendmodule",
  "solutionCode": "module verilog_bandwidth_maximizer_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-194",
  "title": "VERILOG Latency Reduction Part 6: Unit 194",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Latency Reduction Part 6: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Latency Reduction Part 6: Unit 194.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Latency Reduction Part 6: Unit 194\n\nendmodule",
  "solutionCode": "module verilog_latency_reduction_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-195",
  "title": "VERILOG CDC Isolation Part 6: Unit 195",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG CDC Isolation Part 6: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG CDC Isolation Part 6: Unit 195.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_cdc_isolation_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG CDC Isolation Part 6: Unit 195\n\nendmodule",
  "solutionCode": "module verilog_cdc_isolation_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-196",
  "title": "VERILOG Error Handling Part 6: Unit 196",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Error Handling Part 6: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Error Handling Part 6: Unit 196.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_error_handling_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Error Handling Part 6: Unit 196\n\nendmodule",
  "solutionCode": "module verilog_error_handling_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-197",
  "title": "VERILOG High-Speed Encoding Part 6: Unit 197",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG High-Speed Encoding Part 6: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG High-Speed Encoding Part 6: Unit 197.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG High-Speed Encoding Part 6: Unit 197\n\nendmodule",
  "solutionCode": "module verilog_high_speed_encoding_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-198",
  "title": "VERILOG Synthesizable Model Part 6: Unit 198",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VERILOG Synthesizable Model Part 6: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Synthesizable Model Part 6: Unit 198.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Synthesizable Model Part 6: Unit 198\n\nendmodule",
  "solutionCode": "module verilog_synthesizable_model_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-199",
  "title": "VERILOG Optimization Part 7: Unit 199",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VERILOG Optimization Part 7: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Optimization Part 7: Unit 199.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_optimization_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Optimization Part 7: Unit 199\n\nendmodule",
  "solutionCode": "module verilog_optimization_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vlog-200",
  "title": "VERILOG Architecture Part 7: Unit 200",
  "topic": "verilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VERILOG Architecture Part 7: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for VERILOG Architecture Part 7: Unit 200.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module verilog_architecture_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement VERILOG Architecture Part 7: Unit 200\n\nendmodule",
  "solutionCode": "module verilog_architecture_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "VERILOG",
    "VERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
}
];
