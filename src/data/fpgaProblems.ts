import { Problem } from '../types';

export const FPGA_PROBLEMS: Problem[] = [
{
  "id": "fpga-01",
  "title": "FPGA 6-LUT Implementation of Boolean Function",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA 6-LUT Implementation of Boolean Function'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA 6-LUT Implementation of Boolean Function.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_6_lut_implementation_of_b (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA 6-LUT Implementation of Boolean Function\n\nendmodule",
  "solutionCode": "module fpga_6_lut_implementation_of_b (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-02",
  "title": "FPGA Carry Chain CARRY4 Primitive Fast Adder",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Carry Chain CARRY4 Primitive Fast Adder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Carry Chain CARRY4 Primitive Fast Adder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_carry_chain_carry4_primit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Carry Chain CARRY4 Primitive Fast Adder\n\nendmodule",
  "solutionCode": "module fpga_carry_chain_carry4_primit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-03",
  "title": "FPGA Distributed RAM 16x1 Inference",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Distributed RAM 16x1 Inference'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Distributed RAM 16x1 Inference.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_distributed_ram_16x1_infe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Distributed RAM 16x1 Inference\n\nendmodule",
  "solutionCode": "module fpga_distributed_ram_16x1_infe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-04",
  "title": "FPGA SRL16 Shift Register LUT Primitive",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA SRL16 Shift Register LUT Primitive'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA SRL16 Shift Register LUT Primitive.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_srl16_shift_register_lut_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA SRL16 Shift Register LUT Primitive\n\nendmodule",
  "solutionCode": "module fpga_srl16_shift_register_lut_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-05",
  "title": "FPGA Block RAM (BRAM 18K) True Dual-Port",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Block RAM (BRAM 18K) True Dual-Port'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Block RAM (BRAM 18K) True Dual-Port.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_block_ram__bram_18k__true (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Block RAM (BRAM 18K) True Dual-Port\n\nendmodule",
  "solutionCode": "module fpga_block_ram__bram_18k__true (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-06",
  "title": "FPGA UltraRAM (URAM 288K) Deep Pipeline Memory",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA UltraRAM (URAM 288K) Deep Pipeline Memory'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA UltraRAM (URAM 288K) Deep Pipeline Memory.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_ultraram__uram_288k__deep (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA UltraRAM (URAM 288K) Deep Pipeline Memory\n\nendmodule",
  "solutionCode": "module fpga_ultraram__uram_288k__deep (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-07",
  "title": "FPGA DSP48E1 Multiply-Accumulate (MAC) Pipeline",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA DSP48E1 Multiply-Accumulate (MAC) Pipeline'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA DSP48E1 Multiply-Accumulate (MAC) Pipeline.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_dsp48e1_multiply_accumula (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA DSP48E1 Multiply-Accumulate (MAC) Pipeline\n\nendmodule",
  "solutionCode": "module fpga_dsp48e1_multiply_accumula (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-08",
  "title": "FPGA Clock Buffer BUFG & BUFGCE Enable Logic",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Clock Buffer BUFG & BUFGCE Enable Logic'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Clock Buffer BUFG & BUFGCE Enable Logic.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_clock_buffer_bufg___bufgc (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Clock Buffer BUFG & BUFGCE Enable Logic\n\nendmodule",
  "solutionCode": "module fpga_clock_buffer_bufg___bufgc (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-09",
  "title": "FPGA Mixed-Mode Clock Manager (MMCM) Frequency Synthesis",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Mixed-Mode Clock Manager (MMCM) Frequency Synthesis'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Mixed-Mode Clock Manager (MMCM) Frequency Synthesis.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_mixed_mode_clock_manager_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Mixed-Mode Clock Manager (MMCM) Frequency Synthesis\n\nendmodule",
  "solutionCode": "module fpga_mixed_mode_clock_manager_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-10",
  "title": "FPGA Phase-Locked Loop (PLL) Deserializer Clocking",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Phase-Locked Loop (PLL) Deserializer Clocking'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Phase-Locked Loop (PLL) Deserializer Clocking.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_phase_locked_loop__pll__d (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Phase-Locked Loop (PLL) Deserializer Clocking\n\nendmodule",
  "solutionCode": "module fpga_phase_locked_loop__pll__d (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-11",
  "title": "FPGA IOB Input Double Data Rate (IDDR) Register",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA IOB Input Double Data Rate (IDDR) Register'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA IOB Input Double Data Rate (IDDR) Register.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_iob_input_double_data_rat (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA IOB Input Double Data Rate (IDDR) Register\n\nendmodule",
  "solutionCode": "module fpga_iob_input_double_data_rat (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-12",
  "title": "FPGA IOB Output Double Data Rate (ODDR) Register",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA IOB Output Double Data Rate (ODDR) Register'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA IOB Output Double Data Rate (ODDR) Register.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_iob_output_double_data_ra (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA IOB Output Double Data Rate (ODDR) Register\n\nendmodule",
  "solutionCode": "module fpga_iob_output_double_data_ra (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-13",
  "title": "FPGA ISERDES 1:8 High-Speed Serial Deserializer",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA ISERDES 1:8 High-Speed Serial Deserializer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA ISERDES 1:8 High-Speed Serial Deserializer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_iserdes_1_8_high_speed_se (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA ISERDES 1:8 High-Speed Serial Deserializer\n\nendmodule",
  "solutionCode": "module fpga_iserdes_1_8_high_speed_se (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-14",
  "title": "FPGA OSERDES 8:1 Serializer Transmission Stage",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA OSERDES 8:1 Serializer Transmission Stage'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA OSERDES 8:1 Serializer Transmission Stage.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_oserdes_8_1_serializer_tr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA OSERDES 8:1 Serializer Transmission Stage\n\nendmodule",
  "solutionCode": "module fpga_oserdes_8_1_serializer_tr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-15",
  "title": "FPGA LVDS Differential Input Buffer (IBUFDS)",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA LVDS Differential Input Buffer (IBUFDS)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA LVDS Differential Input Buffer (IBUFDS).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_lvds_differential_input_b (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA LVDS Differential Input Buffer (IBUFDS)\n\nendmodule",
  "solutionCode": "module fpga_lvds_differential_input_b (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-16",
  "title": "FPGA Timing Constraint create_clock SDC Specification",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Timing Constraint create_clock SDC Specification'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Constraint create_clock SDC Specification.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_constraint_create_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Constraint create_clock SDC Specification\n\nendmodule",
  "solutionCode": "module fpga_timing_constraint_create_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-17",
  "title": "FPGA Timing Constraint set_input_delay Specification",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Timing Constraint set_input_delay Specification'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Constraint set_input_delay Specification.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_constraint_set_inp (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Constraint set_input_delay Specification\n\nendmodule",
  "solutionCode": "module fpga_timing_constraint_set_inp (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-18",
  "title": "FPGA Timing Constraint set_output_delay Specification",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Constraint set_output_delay Specification'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Constraint set_output_delay Specification.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_constraint_set_out (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Constraint set_output_delay Specification\n\nendmodule",
  "solutionCode": "module fpga_timing_constraint_set_out (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-19",
  "title": "FPGA False Path Specification (set_false_path)",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA False Path Specification (set_false_path)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA False Path Specification (set_false_path).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_false_path_specification_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA False Path Specification (set_false_path)\n\nendmodule",
  "solutionCode": "module fpga_false_path_specification_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-20",
  "title": "FPGA Multi-Cycle Path (set_multicycle_path 2)",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Multi-Cycle Path (set_multicycle_path 2)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Multi-Cycle Path (set_multicycle_path 2).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_multi_cycle_path__set_mul (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Multi-Cycle Path (set_multicycle_path 2)\n\nendmodule",
  "solutionCode": "module fpga_multi_cycle_path__set_mul (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-21",
  "title": "FPGA Asynchronous Clock Groups Isolation",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Asynchronous Clock Groups Isolation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Asynchronous Clock Groups Isolation.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_asynchronous_clock_groups (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Asynchronous Clock Groups Isolation\n\nendmodule",
  "solutionCode": "module fpga_asynchronous_clock_groups (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-22",
  "title": "FPGA Setup Slack & Hold Slack Analysis Model",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Setup Slack & Hold Slack Analysis Model'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Setup Slack & Hold Slack Analysis Model.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_setup_slack___hold_slack_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Setup Slack & Hold Slack Analysis Model\n\nendmodule",
  "solutionCode": "module fpga_setup_slack___hold_slack_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-23",
  "title": "FPGA High-Fanout Net Replication Buffer",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Fanout Net Replication Buffer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Fanout Net Replication Buffer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_fanout_net_replicati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Fanout Net Replication Buffer\n\nendmodule",
  "solutionCode": "module fpga_high_fanout_net_replicati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-24",
  "title": "FPGA Pipelining Strategy for Timing Closure",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipelining Strategy for Timing Closure'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipelining Strategy for Timing Closure.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipelining_strategy_for_t (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipelining Strategy for Timing Closure\n\nendmodule",
  "solutionCode": "module fpga_pipelining_strategy_for_t (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-25",
  "title": "FPGA DSP48 Pattern Detector for Overflow Flag",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA DSP48 Pattern Detector for Overflow Flag'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA DSP48 Pattern Detector for Overflow Flag.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_dsp48_pattern_detector_fo (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA DSP48 Pattern Detector for Overflow Flag\n\nendmodule",
  "solutionCode": "module fpga_dsp48_pattern_detector_fo (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-26",
  "title": "FPGA Fault Tolerance Part 1: Unit 26",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 1: Unit 26'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 1: Unit 26.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_1__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 1: Unit 26\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_1__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-27",
  "title": "FPGA Verification Testbench Part 1: Unit 27",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 1: Unit 27'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 1: Unit 27.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 1: Unit 27\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-28",
  "title": "FPGA Hardware Acceleration Part 1: Unit 28",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 1: Unit 28'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 1: Unit 28.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 1: Unit 28\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-29",
  "title": "FPGA Data Flow Control Part 1: Unit 29",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 1: Unit 29'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 1: Unit 29.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_1_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 1: Unit 29\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_1_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-30",
  "title": "FPGA Corner Case Analysis Part 1: Unit 30",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 1: Unit 30'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 1: Unit 30.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 1: Unit 30\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-31",
  "title": "FPGA Bandwidth Maximizer Part 1: Unit 31",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 1: Unit 31'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 1: Unit 31.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 1: Unit 31\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-32",
  "title": "FPGA Latency Reduction Part 1: Unit 32",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 1: Unit 32'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 1: Unit 32.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_1_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 1: Unit 32\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_1_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-33",
  "title": "FPGA CDC Isolation Part 1: Unit 33",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 1: Unit 33'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 1: Unit 33.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_1__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 1: Unit 33\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_1__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-34",
  "title": "FPGA Error Handling Part 1: Unit 34",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 1: Unit 34'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 1: Unit 34.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_1__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 1: Unit 34\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_1__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-35",
  "title": "FPGA High-Speed Encoding Part 1: Unit 35",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 1: Unit 35'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 1: Unit 35.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 1: Unit 35\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-36",
  "title": "FPGA Synthesizable Model Part 1: Unit 36",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 1: Unit 36'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 1: Unit 36.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 1: Unit 36\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-37",
  "title": "FPGA Optimization Part 2: Unit 37",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 2: Unit 37'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 2: Unit 37.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_2__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 2: Unit 37\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_2__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-38",
  "title": "FPGA Architecture Part 2: Unit 38",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 2: Unit 38'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 2: Unit 38.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_2__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 2: Unit 38\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_2__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-39",
  "title": "FPGA Pipeline Stage Part 2: Unit 39",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 2: Unit 39'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 2: Unit 39.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_2__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 2: Unit 39\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_2__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-40",
  "title": "FPGA Interface Protocol Part 2: Unit 40",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 2: Unit 40'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 2: Unit 40.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 2: Unit 40\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-41",
  "title": "FPGA Low-Power Design Part 2: Unit 41",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 2: Unit 41'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 2: Unit 41.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 2: Unit 41\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-42",
  "title": "FPGA Timing Closure Part 2: Unit 42",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 2: Unit 42'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 2: Unit 42.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_2__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 2: Unit 42\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_2__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-43",
  "title": "FPGA Resource Sharing Part 2: Unit 43",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 2: Unit 43'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 2: Unit 43.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 2: Unit 43\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-44",
  "title": "FPGA Fault Tolerance Part 2: Unit 44",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 2: Unit 44'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 2: Unit 44.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 2: Unit 44\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-45",
  "title": "FPGA Verification Testbench Part 2: Unit 45",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 2: Unit 45'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 2: Unit 45.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 2: Unit 45\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-46",
  "title": "FPGA Hardware Acceleration Part 2: Unit 46",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 2: Unit 46'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 2: Unit 46.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 2: Unit 46\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-47",
  "title": "FPGA Data Flow Control Part 2: Unit 47",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 2: Unit 47'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 2: Unit 47.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 2: Unit 47\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-48",
  "title": "FPGA Corner Case Analysis Part 2: Unit 48",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 2: Unit 48'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 2: Unit 48.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 2: Unit 48\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-49",
  "title": "FPGA Bandwidth Maximizer Part 2: Unit 49",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 2: Unit 49'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 2: Unit 49.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 2: Unit 49\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-50",
  "title": "FPGA Latency Reduction Part 2: Unit 50",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 2: Unit 50'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 2: Unit 50.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 2: Unit 50\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-51",
  "title": "FPGA CDC Isolation Part 2: Unit 51",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 2: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 2: Unit 51.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_2__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 2: Unit 51\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_2__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-52",
  "title": "FPGA Error Handling Part 2: Unit 52",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 2: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 2: Unit 52.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_2__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 2: Unit 52\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_2__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-53",
  "title": "FPGA High-Speed Encoding Part 2: Unit 53",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 2: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 2: Unit 53.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 2: Unit 53\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-54",
  "title": "FPGA Synthesizable Model Part 2: Unit 54",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 2: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 2: Unit 54.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 2: Unit 54\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-55",
  "title": "FPGA Optimization Part 3: Unit 55",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 3: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 3: Unit 55.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_3__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 3: Unit 55\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_3__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-56",
  "title": "FPGA Architecture Part 3: Unit 56",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 3: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 3: Unit 56.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_3__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 3: Unit 56\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_3__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-57",
  "title": "FPGA Pipeline Stage Part 3: Unit 57",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 3: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 3: Unit 57.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_3__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 3: Unit 57\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_3__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-58",
  "title": "FPGA Interface Protocol Part 3: Unit 58",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 3: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 3: Unit 58.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 3: Unit 58\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-59",
  "title": "FPGA Low-Power Design Part 3: Unit 59",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 3: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 3: Unit 59.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 3: Unit 59\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-60",
  "title": "FPGA Timing Closure Part 3: Unit 60",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 3: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 3: Unit 60.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_3__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 3: Unit 60\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_3__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-61",
  "title": "FPGA Resource Sharing Part 3: Unit 61",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 3: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 3: Unit 61.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 3: Unit 61\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-62",
  "title": "FPGA Fault Tolerance Part 3: Unit 62",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 3: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 3: Unit 62.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 3: Unit 62\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-63",
  "title": "FPGA Verification Testbench Part 3: Unit 63",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 3: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 3: Unit 63.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 3: Unit 63\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-64",
  "title": "FPGA Hardware Acceleration Part 3: Unit 64",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 3: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 3: Unit 64.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 3: Unit 64\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-65",
  "title": "FPGA Data Flow Control Part 3: Unit 65",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 3: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 3: Unit 65.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 3: Unit 65\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-66",
  "title": "FPGA Corner Case Analysis Part 3: Unit 66",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 3: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 3: Unit 66.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 3: Unit 66\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-67",
  "title": "FPGA Bandwidth Maximizer Part 3: Unit 67",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 3: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 3: Unit 67.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 3: Unit 67\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-68",
  "title": "FPGA Latency Reduction Part 3: Unit 68",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 3: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 3: Unit 68.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 3: Unit 68\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-69",
  "title": "FPGA CDC Isolation Part 3: Unit 69",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 3: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 3: Unit 69.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_3__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 3: Unit 69\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_3__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-70",
  "title": "FPGA Error Handling Part 3: Unit 70",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 3: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 3: Unit 70.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_3__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 3: Unit 70\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_3__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-71",
  "title": "FPGA High-Speed Encoding Part 3: Unit 71",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 3: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 3: Unit 71.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 3: Unit 71\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-72",
  "title": "FPGA Synthesizable Model Part 3: Unit 72",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 3: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 3: Unit 72.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 3: Unit 72\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-73",
  "title": "FPGA Optimization Part 4: Unit 73",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 4: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 4: Unit 73.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_4__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 4: Unit 73\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_4__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-74",
  "title": "FPGA Architecture Part 4: Unit 74",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 4: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 4: Unit 74.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_4__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 4: Unit 74\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_4__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-75",
  "title": "FPGA Pipeline Stage Part 4: Unit 75",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 4: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 4: Unit 75.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_4__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 4: Unit 75\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_4__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-76",
  "title": "FPGA Interface Protocol Part 4: Unit 76",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 4: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 4: Unit 76.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 4: Unit 76\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-77",
  "title": "FPGA Low-Power Design Part 4: Unit 77",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 4: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 4: Unit 77.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 4: Unit 77\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-78",
  "title": "FPGA Timing Closure Part 4: Unit 78",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 4: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 4: Unit 78.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_4__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 4: Unit 78\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_4__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-79",
  "title": "FPGA Resource Sharing Part 4: Unit 79",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 4: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 4: Unit 79.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 4: Unit 79\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-80",
  "title": "FPGA Fault Tolerance Part 4: Unit 80",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 4: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 4: Unit 80.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 4: Unit 80\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-81",
  "title": "FPGA Verification Testbench Part 4: Unit 81",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 4: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 4: Unit 81.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 4: Unit 81\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-82",
  "title": "FPGA Hardware Acceleration Part 4: Unit 82",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 4: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 4: Unit 82.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 4: Unit 82\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-83",
  "title": "FPGA Data Flow Control Part 4: Unit 83",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 4: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 4: Unit 83.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 4: Unit 83\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-84",
  "title": "FPGA Corner Case Analysis Part 4: Unit 84",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 4: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 4: Unit 84.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 4: Unit 84\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-85",
  "title": "FPGA Bandwidth Maximizer Part 4: Unit 85",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 4: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 4: Unit 85.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 4: Unit 85\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-86",
  "title": "FPGA Latency Reduction Part 4: Unit 86",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 4: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 4: Unit 86.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 4: Unit 86\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-87",
  "title": "FPGA CDC Isolation Part 4: Unit 87",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 4: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 4: Unit 87.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_4__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 4: Unit 87\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_4__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-88",
  "title": "FPGA Error Handling Part 4: Unit 88",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 4: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 4: Unit 88.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_4__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 4: Unit 88\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_4__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-89",
  "title": "FPGA High-Speed Encoding Part 4: Unit 89",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 4: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 4: Unit 89.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 4: Unit 89\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-90",
  "title": "FPGA Synthesizable Model Part 4: Unit 90",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 4: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 4: Unit 90.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 4: Unit 90\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-91",
  "title": "FPGA Optimization Part 5: Unit 91",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 5: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 5: Unit 91.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_5__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 5: Unit 91\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_5__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-92",
  "title": "FPGA Architecture Part 5: Unit 92",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 5: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 5: Unit 92.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_5__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 5: Unit 92\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_5__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-93",
  "title": "FPGA Pipeline Stage Part 5: Unit 93",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 5: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 5: Unit 93.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_5__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 5: Unit 93\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_5__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-94",
  "title": "FPGA Interface Protocol Part 5: Unit 94",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 5: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 5: Unit 94.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 5: Unit 94\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-95",
  "title": "FPGA Low-Power Design Part 5: Unit 95",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 5: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 5: Unit 95.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 5: Unit 95\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-96",
  "title": "FPGA Timing Closure Part 5: Unit 96",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 5: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 5: Unit 96.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_5__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 5: Unit 96\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_5__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-97",
  "title": "FPGA Resource Sharing Part 5: Unit 97",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 5: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 5: Unit 97.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 5: Unit 97\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-98",
  "title": "FPGA Fault Tolerance Part 5: Unit 98",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 5: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 5: Unit 98.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 5: Unit 98\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-99",
  "title": "FPGA Verification Testbench Part 5: Unit 99",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 5: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 5: Unit 99.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 5: Unit 99\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-100",
  "title": "FPGA Hardware Acceleration Part 5: Unit 100",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 5: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 5: Unit 100.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 5: Unit 100\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-101",
  "title": "FPGA Data Flow Control Part 5: Unit 101",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 5: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 5: Unit 101.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 5: Unit 101\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-102",
  "title": "FPGA Corner Case Analysis Part 5: Unit 102",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 5: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 5: Unit 102.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 5: Unit 102\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-103",
  "title": "FPGA Bandwidth Maximizer Part 5: Unit 103",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 5: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 5: Unit 103.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 5: Unit 103\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-104",
  "title": "FPGA Latency Reduction Part 5: Unit 104",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 5: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 5: Unit 104.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 5: Unit 104\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-105",
  "title": "FPGA CDC Isolation Part 5: Unit 105",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 5: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 5: Unit 105.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_5__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 5: Unit 105\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_5__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-106",
  "title": "FPGA Error Handling Part 5: Unit 106",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 5: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 5: Unit 106.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_5__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 5: Unit 106\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_5__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-107",
  "title": "FPGA High-Speed Encoding Part 5: Unit 107",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 5: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 5: Unit 107.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 5: Unit 107\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-108",
  "title": "FPGA Synthesizable Model Part 5: Unit 108",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 5: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 5: Unit 108.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 5: Unit 108\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-109",
  "title": "FPGA Optimization Part 6: Unit 109",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 6: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 6: Unit 109.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_6__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 6: Unit 109\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_6__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-110",
  "title": "FPGA Architecture Part 6: Unit 110",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 6: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 6: Unit 110.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_6__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 6: Unit 110\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_6__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-111",
  "title": "FPGA Pipeline Stage Part 6: Unit 111",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 6: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 6: Unit 111.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_6__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 6: Unit 111\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_6__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-112",
  "title": "FPGA Interface Protocol Part 6: Unit 112",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 6: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 6: Unit 112.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 6: Unit 112\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-113",
  "title": "FPGA Low-Power Design Part 6: Unit 113",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 6: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 6: Unit 113.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 6: Unit 113\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-114",
  "title": "FPGA Timing Closure Part 6: Unit 114",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 6: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 6: Unit 114.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_6__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 6: Unit 114\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_6__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-115",
  "title": "FPGA Resource Sharing Part 6: Unit 115",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 6: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 6: Unit 115.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 6: Unit 115\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-116",
  "title": "FPGA Fault Tolerance Part 6: Unit 116",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 6: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 6: Unit 116.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 6: Unit 116\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-117",
  "title": "FPGA Verification Testbench Part 6: Unit 117",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 6: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 6: Unit 117.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 6: Unit 117\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-118",
  "title": "FPGA Hardware Acceleration Part 6: Unit 118",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 6: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 6: Unit 118.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 6: Unit 118\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-119",
  "title": "FPGA Data Flow Control Part 6: Unit 119",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 6: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 6: Unit 119.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 6: Unit 119\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-120",
  "title": "FPGA Corner Case Analysis Part 6: Unit 120",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 6: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 6: Unit 120.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 6: Unit 120\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-121",
  "title": "FPGA Bandwidth Maximizer Part 6: Unit 121",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 6: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 6: Unit 121.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 6: Unit 121\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-122",
  "title": "FPGA Latency Reduction Part 6: Unit 122",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 6: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 6: Unit 122.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 6: Unit 122\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-123",
  "title": "FPGA CDC Isolation Part 6: Unit 123",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 6: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 6: Unit 123.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_6__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 6: Unit 123\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_6__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-124",
  "title": "FPGA Error Handling Part 6: Unit 124",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 6: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 6: Unit 124.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_6__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 6: Unit 124\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_6__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-125",
  "title": "FPGA High-Speed Encoding Part 6: Unit 125",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 6: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 6: Unit 125.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 6: Unit 125\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-126",
  "title": "FPGA Synthesizable Model Part 6: Unit 126",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 6: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 6: Unit 126.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 6: Unit 126\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-127",
  "title": "FPGA Optimization Part 7: Unit 127",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 7: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 7: Unit 127.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_7__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 7: Unit 127\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_7__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-128",
  "title": "FPGA Architecture Part 7: Unit 128",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 7: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 7: Unit 128.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_7__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 7: Unit 128\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_7__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-129",
  "title": "FPGA Pipeline Stage Part 7: Unit 129",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 7: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 7: Unit 129.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_7__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 7: Unit 129\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_7__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-130",
  "title": "FPGA Interface Protocol Part 7: Unit 130",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 7: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 7: Unit 130.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 7: Unit 130\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-131",
  "title": "FPGA Low-Power Design Part 7: Unit 131",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 7: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 7: Unit 131.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_7__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 7: Unit 131\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_7__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-132",
  "title": "FPGA Timing Closure Part 7: Unit 132",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 7: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 7: Unit 132.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_7__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 7: Unit 132\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_7__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-133",
  "title": "FPGA Resource Sharing Part 7: Unit 133",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 7: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 7: Unit 133.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_7__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 7: Unit 133\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_7__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-134",
  "title": "FPGA Fault Tolerance Part 7: Unit 134",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 7: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 7: Unit 134.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 7: Unit 134\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-135",
  "title": "FPGA Verification Testbench Part 7: Unit 135",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 7: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 7: Unit 135.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 7: Unit 135\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-136",
  "title": "FPGA Hardware Acceleration Part 7: Unit 136",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 7: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 7: Unit 136.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 7: Unit 136\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-137",
  "title": "FPGA Data Flow Control Part 7: Unit 137",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 7: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 7: Unit 137.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_7_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 7: Unit 137\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_7_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-138",
  "title": "FPGA Corner Case Analysis Part 7: Unit 138",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 7: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 7: Unit 138.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 7: Unit 138\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-139",
  "title": "FPGA Bandwidth Maximizer Part 7: Unit 139",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 7: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 7: Unit 139.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 7: Unit 139\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-140",
  "title": "FPGA Latency Reduction Part 7: Unit 140",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 7: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 7: Unit 140.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_7_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 7: Unit 140\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_7_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-141",
  "title": "FPGA CDC Isolation Part 7: Unit 141",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 7: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 7: Unit 141.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_7__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 7: Unit 141\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_7__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-142",
  "title": "FPGA Error Handling Part 7: Unit 142",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 7: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 7: Unit 142.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_7__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 7: Unit 142\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_7__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-143",
  "title": "FPGA High-Speed Encoding Part 7: Unit 143",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 7: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 7: Unit 143.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 7: Unit 143\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-144",
  "title": "FPGA Synthesizable Model Part 7: Unit 144",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 7: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 7: Unit 144.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 7: Unit 144\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-145",
  "title": "FPGA Optimization Part 8: Unit 145",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 8: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 8: Unit 145.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_8__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 8: Unit 145\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_8__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-146",
  "title": "FPGA Architecture Part 8: Unit 146",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 8: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 8: Unit 146.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_8__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 8: Unit 146\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_8__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-147",
  "title": "FPGA Pipeline Stage Part 8: Unit 147",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 8: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 8: Unit 147.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_8__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 8: Unit 147\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_8__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-148",
  "title": "FPGA Interface Protocol Part 8: Unit 148",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 8: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 8: Unit 148.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 8: Unit 148\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-149",
  "title": "FPGA Low-Power Design Part 8: Unit 149",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 8: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 8: Unit 149.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_8__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 8: Unit 149\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_8__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-150",
  "title": "FPGA Timing Closure Part 8: Unit 150",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 8: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 8: Unit 150.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_8__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 8: Unit 150\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_8__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-151",
  "title": "FPGA Resource Sharing Part 8: Unit 151",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 8: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 8: Unit 151.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_8__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 8: Unit 151\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_8__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-152",
  "title": "FPGA Fault Tolerance Part 8: Unit 152",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 8: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 8: Unit 152.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_8__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 8: Unit 152\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_8__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-153",
  "title": "FPGA Verification Testbench Part 8: Unit 153",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 8: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 8: Unit 153.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 8: Unit 153\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-154",
  "title": "FPGA Hardware Acceleration Part 8: Unit 154",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 8: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 8: Unit 154.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 8: Unit 154\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-155",
  "title": "FPGA Data Flow Control Part 8: Unit 155",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 8: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 8: Unit 155.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_8_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 8: Unit 155\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_8_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-156",
  "title": "FPGA Corner Case Analysis Part 8: Unit 156",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 8: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 8: Unit 156.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 8: Unit 156\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-157",
  "title": "FPGA Bandwidth Maximizer Part 8: Unit 157",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 8: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 8: Unit 157.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 8: Unit 157\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-158",
  "title": "FPGA Latency Reduction Part 8: Unit 158",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 8: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 8: Unit 158.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_8_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 8: Unit 158\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_8_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-159",
  "title": "FPGA CDC Isolation Part 8: Unit 159",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 8: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 8: Unit 159.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_8__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 8: Unit 159\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_8__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-160",
  "title": "FPGA Error Handling Part 8: Unit 160",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 8: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 8: Unit 160.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_8__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 8: Unit 160\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_8__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-161",
  "title": "FPGA High-Speed Encoding Part 8: Unit 161",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 8: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 8: Unit 161.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 8: Unit 161\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-162",
  "title": "FPGA Synthesizable Model Part 8: Unit 162",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 8: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 8: Unit 162.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 8: Unit 162\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-163",
  "title": "FPGA Optimization Part 9: Unit 163",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 9: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 9: Unit 163.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_9__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 9: Unit 163\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_9__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-164",
  "title": "FPGA Architecture Part 9: Unit 164",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 9: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 9: Unit 164.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_9__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 9: Unit 164\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_9__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-165",
  "title": "FPGA Pipeline Stage Part 9: Unit 165",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 9: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 9: Unit 165.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_9__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 9: Unit 165\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_9__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-166",
  "title": "FPGA Interface Protocol Part 9: Unit 166",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 9: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 9: Unit 166.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 9: Unit 166\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-167",
  "title": "FPGA Low-Power Design Part 9: Unit 167",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 9: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 9: Unit 167.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_9__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 9: Unit 167\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_9__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-168",
  "title": "FPGA Timing Closure Part 9: Unit 168",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 9: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 9: Unit 168.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_9__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 9: Unit 168\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_9__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-169",
  "title": "FPGA Resource Sharing Part 9: Unit 169",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 9: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 9: Unit 169.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_9__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 9: Unit 169\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_9__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-170",
  "title": "FPGA Fault Tolerance Part 9: Unit 170",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 9: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 9: Unit 170.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_9__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 9: Unit 170\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_9__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-171",
  "title": "FPGA Verification Testbench Part 9: Unit 171",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 9: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 9: Unit 171.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 9: Unit 171\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-172",
  "title": "FPGA Hardware Acceleration Part 9: Unit 172",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 9: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 9: Unit 172.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 9: Unit 172\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-173",
  "title": "FPGA Data Flow Control Part 9: Unit 173",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 9: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 9: Unit 173.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_9_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 9: Unit 173\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_9_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-174",
  "title": "FPGA Corner Case Analysis Part 9: Unit 174",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 9: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 9: Unit 174.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 9: Unit 174\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-175",
  "title": "FPGA Bandwidth Maximizer Part 9: Unit 175",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 9: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 9: Unit 175.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 9: Unit 175\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-176",
  "title": "FPGA Latency Reduction Part 9: Unit 176",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 9: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 9: Unit 176.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_9_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 9: Unit 176\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_9_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-177",
  "title": "FPGA CDC Isolation Part 9: Unit 177",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 9: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 9: Unit 177.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_9__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 9: Unit 177\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_9__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-178",
  "title": "FPGA Error Handling Part 9: Unit 178",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 9: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 9: Unit 178.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_9__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 9: Unit 178\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_9__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-179",
  "title": "FPGA High-Speed Encoding Part 9: Unit 179",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 9: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 9: Unit 179.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 9: Unit 179\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-180",
  "title": "FPGA Synthesizable Model Part 9: Unit 180",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 9: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 9: Unit 180.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 9: Unit 180\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-181",
  "title": "FPGA Optimization Part 10: Unit 181",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 10: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 10: Unit 181.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_10__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 10: Unit 181\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_10__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-182",
  "title": "FPGA Architecture Part 10: Unit 182",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 10: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 10: Unit 182.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_10__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 10: Unit 182\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_10__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-183",
  "title": "FPGA Pipeline Stage Part 10: Unit 183",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Pipeline Stage Part 10: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Pipeline Stage Part 10: Unit 183.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_pipeline_stage_part_10__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Pipeline Stage Part 10: Unit 183\n\nendmodule",
  "solutionCode": "module fpga_pipeline_stage_part_10__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-184",
  "title": "FPGA Interface Protocol Part 10: Unit 184",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Interface Protocol Part 10: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Interface Protocol Part 10: Unit 184.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_interface_protocol_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Interface Protocol Part 10: Unit 184\n\nendmodule",
  "solutionCode": "module fpga_interface_protocol_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-185",
  "title": "FPGA Low-Power Design Part 10: Unit 185",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Low-Power Design Part 10: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Low-Power Design Part 10: Unit 185.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_low_power_design_part_10_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Low-Power Design Part 10: Unit 185\n\nendmodule",
  "solutionCode": "module fpga_low_power_design_part_10_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-186",
  "title": "FPGA Timing Closure Part 10: Unit 186",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Timing Closure Part 10: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Timing Closure Part 10: Unit 186.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_timing_closure_part_10__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Timing Closure Part 10: Unit 186\n\nendmodule",
  "solutionCode": "module fpga_timing_closure_part_10__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-187",
  "title": "FPGA Resource Sharing Part 10: Unit 187",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Resource Sharing Part 10: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Resource Sharing Part 10: Unit 187.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_resource_sharing_part_10_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Resource Sharing Part 10: Unit 187\n\nendmodule",
  "solutionCode": "module fpga_resource_sharing_part_10_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-188",
  "title": "FPGA Fault Tolerance Part 10: Unit 188",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Fault Tolerance Part 10: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Fault Tolerance Part 10: Unit 188.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_fault_tolerance_part_10__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Fault Tolerance Part 10: Unit 188\n\nendmodule",
  "solutionCode": "module fpga_fault_tolerance_part_10__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-189",
  "title": "FPGA Verification Testbench Part 10: Unit 189",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Verification Testbench Part 10: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Verification Testbench Part 10: Unit 189.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Verification Testbench Part 10: Unit 189\n\nendmodule",
  "solutionCode": "module fpga_verification_testbench_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-190",
  "title": "FPGA Hardware Acceleration Part 10: Unit 190",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Hardware Acceleration Part 10: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Hardware Acceleration Part 10: Unit 190.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Hardware Acceleration Part 10: Unit 190\n\nendmodule",
  "solutionCode": "module fpga_hardware_acceleration_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-191",
  "title": "FPGA Data Flow Control Part 10: Unit 191",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Data Flow Control Part 10: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Data Flow Control Part 10: Unit 191.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_data_flow_control_part_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Data Flow Control Part 10: Unit 191\n\nendmodule",
  "solutionCode": "module fpga_data_flow_control_part_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-192",
  "title": "FPGA Corner Case Analysis Part 10: Unit 192",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Corner Case Analysis Part 10: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Corner Case Analysis Part 10: Unit 192.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Corner Case Analysis Part 10: Unit 192\n\nendmodule",
  "solutionCode": "module fpga_corner_case_analysis_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-193",
  "title": "FPGA Bandwidth Maximizer Part 10: Unit 193",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Bandwidth Maximizer Part 10: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Bandwidth Maximizer Part 10: Unit 193.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Bandwidth Maximizer Part 10: Unit 193\n\nendmodule",
  "solutionCode": "module fpga_bandwidth_maximizer_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-194",
  "title": "FPGA Latency Reduction Part 10: Unit 194",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Latency Reduction Part 10: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Latency Reduction Part 10: Unit 194.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_latency_reduction_part_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Latency Reduction Part 10: Unit 194\n\nendmodule",
  "solutionCode": "module fpga_latency_reduction_part_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-195",
  "title": "FPGA CDC Isolation Part 10: Unit 195",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA CDC Isolation Part 10: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA CDC Isolation Part 10: Unit 195.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_cdc_isolation_part_10__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA CDC Isolation Part 10: Unit 195\n\nendmodule",
  "solutionCode": "module fpga_cdc_isolation_part_10__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-196",
  "title": "FPGA Error Handling Part 10: Unit 196",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Error Handling Part 10: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Error Handling Part 10: Unit 196.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_error_handling_part_10__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Error Handling Part 10: Unit 196\n\nendmodule",
  "solutionCode": "module fpga_error_handling_part_10__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-197",
  "title": "FPGA High-Speed Encoding Part 10: Unit 197",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA High-Speed Encoding Part 10: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA High-Speed Encoding Part 10: Unit 197.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA High-Speed Encoding Part 10: Unit 197\n\nendmodule",
  "solutionCode": "module fpga_high_speed_encoding_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-198",
  "title": "FPGA Synthesizable Model Part 10: Unit 198",
  "topic": "fpga",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'FPGA Synthesizable Model Part 10: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Synthesizable Model Part 10: Unit 198.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Synthesizable Model Part 10: Unit 198\n\nendmodule",
  "solutionCode": "module fpga_synthesizable_model_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-199",
  "title": "FPGA Optimization Part 11: Unit 199",
  "topic": "fpga",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'FPGA Optimization Part 11: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Optimization Part 11: Unit 199.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_optimization_part_11__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Optimization Part 11: Unit 199\n\nendmodule",
  "solutionCode": "module fpga_optimization_part_11__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
  "id": "fpga-200",
  "title": "FPGA Architecture Part 11: Unit 200",
  "topic": "fpga",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'FPGA Architecture Part 11: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for FPGA Architecture Part 11: Unit 200.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module fpga_architecture_part_11__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement FPGA Architecture Part 11: Unit 200\n\nendmodule",
  "solutionCode": "module fpga_architecture_part_11__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "FPGA",
    "FPGA",
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
