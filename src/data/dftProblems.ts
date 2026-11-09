import { Problem } from '../types';

export const DFT_PROBLEMS: Problem[] = [
{
  "id": "dft-01",
  "title": "Muxed-DFF Scan Cell Shift/Capture Mode Logic",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Muxed-DFF Scan Cell Shift/Capture Mode Logic'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Muxed-DFF Scan Cell Shift/Capture Mode Logic.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module muxed_dff_scan_cell_shift_capt (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Muxed-DFF Scan Cell Shift/Capture Mode Logic\n\nendmodule",
  "solutionCode": "module muxed_dff_scan_cell_shift_capt (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Muxed-DFF",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-02",
  "title": "Scan Chain Insertion and Pin Assignment",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Scan Chain Insertion and Pin Assignment'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Scan Chain Insertion and Pin Assignment.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module scan_chain_insertion_and_pin_a (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Scan Chain Insertion and Pin Assignment\n\nendmodule",
  "solutionCode": "module scan_chain_insertion_and_pin_a (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Scan",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-03",
  "title": "Scan Chain Balancing across Clock Domains",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Scan Chain Balancing across Clock Domains'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Scan Chain Balancing across Clock Domains.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module scan_chain_balancing_across_cl (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Scan Chain Balancing across Clock Domains\n\nendmodule",
  "solutionCode": "module scan_chain_balancing_across_cl (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Scan",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-04",
  "title": "Lockup Latch Insertion for Clock Skew Protection",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Lockup Latch Insertion for Clock Skew Protection'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Lockup Latch Insertion for Clock Skew Protection.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module lockup_latch_insertion_for_clo (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Lockup Latch Insertion for Clock Skew Protection\n\nendmodule",
  "solutionCode": "module lockup_latch_insertion_for_clo (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Lockup",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-05",
  "title": "Stuck-at Fault Model (SA0 and SA1) Activation",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Stuck-at Fault Model (SA0 and SA1) Activation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Stuck-at Fault Model (SA0 and SA1) Activation.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module stuck_at_fault_model__sa0_and_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Stuck-at Fault Model (SA0 and SA1) Activation\n\nendmodule",
  "solutionCode": "module stuck_at_fault_model__sa0_and_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Stuck-at",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-06",
  "title": "ATPG D-Algorithm Error Propagation Justification",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ATPG D-Algorithm Error Propagation Justification'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for ATPG D-Algorithm Error Propagation Justification.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module atpg_d_algorithm_error_propaga (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement ATPG D-Algorithm Error Propagation Justification\n\nendmodule",
  "solutionCode": "module atpg_d_algorithm_error_propaga (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "ATPG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-07",
  "title": "PODEM Algorithm Search Tree Path Justifier",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'PODEM Algorithm Search Tree Path Justifier'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for PODEM Algorithm Search Tree Path Justifier.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module podem_algorithm_search_tree_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement PODEM Algorithm Search Tree Path Justifier\n\nendmodule",
  "solutionCode": "module podem_algorithm_search_tree_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "PODEM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-08",
  "title": "Transition Delay Fault (TDF) Launch-off-Shift",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Transition Delay Fault (TDF) Launch-off-Shift'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Transition Delay Fault (TDF) Launch-off-Shift.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module transition_delay_fault__tdf__l (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Transition Delay Fault (TDF) Launch-off-Shift\n\nendmodule",
  "solutionCode": "module transition_delay_fault__tdf__l (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Transition",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-09",
  "title": "Transition Delay Fault (TDF) Launch-off-Capture",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Transition Delay Fault (TDF) Launch-off-Capture'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Transition Delay Fault (TDF) Launch-off-Capture.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module transition_delay_fault__tdf__l (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Transition Delay Fault (TDF) Launch-off-Capture\n\nendmodule",
  "solutionCode": "module transition_delay_fault__tdf__l (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Transition",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-10",
  "title": "Memory BIST (MBIST) Controller State Machine",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Memory BIST (MBIST) Controller State Machine'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Memory BIST (MBIST) Controller State Machine.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module memory_bist__mbist__controller (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Memory BIST (MBIST) Controller State Machine\n\nendmodule",
  "solutionCode": "module memory_bist__mbist__controller (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Memory",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-11",
  "title": "March C- Algorithm Step Implementation for SRAM",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'March C- Algorithm Step Implementation for SRAM'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for March C- Algorithm Step Implementation for SRAM.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module march_c__algorithm_step_implem (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement March C- Algorithm Step Implementation for SRAM\n\nendmodule",
  "solutionCode": "module march_c__algorithm_step_implem (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "March",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-12",
  "title": "Logic BIST (LBIST) STUMPS Architecture Model",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Logic BIST (LBIST) STUMPS Architecture Model'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Logic BIST (LBIST) STUMPS Architecture Model.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module logic_bist__lbist__stumps_arch (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Logic BIST (LBIST) STUMPS Architecture Model\n\nendmodule",
  "solutionCode": "module logic_bist__lbist__stumps_arch (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Logic",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-13",
  "title": "MISR (Multiple Input Signature Register) 8-bit",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MISR (Multiple Input Signature Register) 8-bit'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for MISR (Multiple Input Signature Register) 8-bit.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module misr__multiple_input_signature (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement MISR (Multiple Input Signature Register) 8-bit\n\nendmodule",
  "solutionCode": "module misr__multiple_input_signature (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "MISR",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-14",
  "title": "PRPG (Pseudo-Random Pattern Generator) LFSR",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'PRPG (Pseudo-Random Pattern Generator) LFSR'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for PRPG (Pseudo-Random Pattern Generator) LFSR.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module prpg__pseudo_random_pattern_ge (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement PRPG (Pseudo-Random Pattern Generator) LFSR\n\nendmodule",
  "solutionCode": "module prpg__pseudo_random_pattern_ge (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "PRPG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-15",
  "title": "IEEE 1149.1 JTAG TAP Controller 16-State FSM",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'IEEE 1149.1 JTAG TAP Controller 16-State FSM'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for IEEE 1149.1 JTAG TAP Controller 16-State FSM.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module ieee_1149_1_jtag_tap_controlle (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement IEEE 1149.1 JTAG TAP Controller 16-State FSM\n\nendmodule",
  "solutionCode": "module ieee_1149_1_jtag_tap_controlle (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "IEEE",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-16",
  "title": "JTAG Instruction Register (IR) Decoder",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'JTAG Instruction Register (IR) Decoder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for JTAG Instruction Register (IR) Decoder.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module jtag_instruction_register__ir_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement JTAG Instruction Register (IR) Decoder\n\nendmodule",
  "solutionCode": "module jtag_instruction_register__ir_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "JTAG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-17",
  "title": "JTAG Boundary Scan Cell (BSR) EXTEST / SAMPLE",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'JTAG Boundary Scan Cell (BSR) EXTEST / SAMPLE'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for JTAG Boundary Scan Cell (BSR) EXTEST / SAMPLE.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module jtag_boundary_scan_cell__bsr__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement JTAG Boundary Scan Cell (BSR) EXTEST / SAMPLE\n\nendmodule",
  "solutionCode": "module jtag_boundary_scan_cell__bsr__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "JTAG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-18",
  "title": "JTAG Bypass Register 1-Bit Pass-Through",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'JTAG Bypass Register 1-Bit Pass-Through'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for JTAG Bypass Register 1-Bit Pass-Through.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module jtag_bypass_register_1_bit_pas (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement JTAG Bypass Register 1-Bit Pass-Through\n\nendmodule",
  "solutionCode": "module jtag_bypass_register_1_bit_pas (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "JTAG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-19",
  "title": "IEEE 1500 Core-Based Embedded Test Wrapper",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'IEEE 1500 Core-Based Embedded Test Wrapper'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for IEEE 1500 Core-Based Embedded Test Wrapper.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module ieee_1500_core_based_embedded_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement IEEE 1500 Core-Based Embedded Test Wrapper\n\nendmodule",
  "solutionCode": "module ieee_1500_core_based_embedded_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "IEEE",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-20",
  "title": "Scan Compression Decompressor / Compactor Stage",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Scan Compression Decompressor / Compactor Stage'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for Scan Compression Decompressor / Compactor Stage.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module scan_compression_decompressor_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement Scan Compression Decompressor / Compactor Stage\n\nendmodule",
  "solutionCode": "module scan_compression_decompressor_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "Scan",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-21",
  "title": "DFT Pipeline Stage Part 1: Unit 21",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 1: Unit 21'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 1: Unit 21.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_1__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 1: Unit 21\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_1__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-22",
  "title": "DFT Interface Protocol Part 1: Unit 22",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 1: Unit 22'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 1: Unit 22.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_1_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 1: Unit 22\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_1_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-23",
  "title": "DFT Low-Power Design Part 1: Unit 23",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 1: Unit 23'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 1: Unit 23.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_1__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 1: Unit 23\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_1__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-24",
  "title": "DFT Timing Closure Part 1: Unit 24",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 1: Unit 24'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 1: Unit 24.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_1__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 1: Unit 24\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_1__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-25",
  "title": "DFT Resource Sharing Part 1: Unit 25",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 1: Unit 25'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 1: Unit 25.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_1__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 1: Unit 25\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_1__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-26",
  "title": "DFT Fault Tolerance Part 1: Unit 26",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 1: Unit 26'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 1: Unit 26.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_1__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 1: Unit 26\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_1__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-27",
  "title": "DFT Verification Testbench Part 1: Unit 27",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 1: Unit 27'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 1: Unit 27.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 1: Unit 27\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-28",
  "title": "DFT Hardware Acceleration Part 1: Unit 28",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 1: Unit 28'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 1: Unit 28.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 1: Unit 28\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-29",
  "title": "DFT Data Flow Control Part 1: Unit 29",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 1: Unit 29'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 1: Unit 29.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_1__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 1: Unit 29\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_1__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-30",
  "title": "DFT Corner Case Analysis Part 1: Unit 30",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 1: Unit 30'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 1: Unit 30.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 1: Unit 30\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-31",
  "title": "DFT Bandwidth Maximizer Part 1: Unit 31",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 1: Unit 31'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 1: Unit 31.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 1: Unit 31\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-32",
  "title": "DFT Latency Reduction Part 1: Unit 32",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 1: Unit 32'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 1: Unit 32.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_1__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 1: Unit 32\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_1__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-33",
  "title": "DFT CDC Isolation Part 1: Unit 33",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 1: Unit 33'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 1: Unit 33.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_1__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 1: Unit 33\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_1__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-34",
  "title": "DFT Error Handling Part 1: Unit 34",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 1: Unit 34'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 1: Unit 34.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_1__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 1: Unit 34\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_1__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-35",
  "title": "DFT High-Speed Encoding Part 1: Unit 35",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 1: Unit 35'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 1: Unit 35.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 1: Unit 35\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-36",
  "title": "DFT Synthesizable Model Part 1: Unit 36",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 1: Unit 36'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 1: Unit 36.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 1: Unit 36\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-37",
  "title": "DFT Optimization Part 2: Unit 37",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 2: Unit 37'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 2: Unit 37.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_2__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 2: Unit 37\n\nendmodule",
  "solutionCode": "module dft_optimization_part_2__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-38",
  "title": "DFT Architecture Part 2: Unit 38",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 2: Unit 38'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 2: Unit 38.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_2__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 2: Unit 38\n\nendmodule",
  "solutionCode": "module dft_architecture_part_2__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-39",
  "title": "DFT Pipeline Stage Part 2: Unit 39",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 2: Unit 39'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 2: Unit 39.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_2__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 2: Unit 39\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_2__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-40",
  "title": "DFT Interface Protocol Part 2: Unit 40",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 2: Unit 40'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 2: Unit 40.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 2: Unit 40\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_2_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-41",
  "title": "DFT Low-Power Design Part 2: Unit 41",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 2: Unit 41'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 2: Unit 41.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 2: Unit 41\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-42",
  "title": "DFT Timing Closure Part 2: Unit 42",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 2: Unit 42'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 2: Unit 42.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_2__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 2: Unit 42\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_2__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-43",
  "title": "DFT Resource Sharing Part 2: Unit 43",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 2: Unit 43'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 2: Unit 43.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 2: Unit 43\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_2__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-44",
  "title": "DFT Fault Tolerance Part 2: Unit 44",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 2: Unit 44'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 2: Unit 44.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_2__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 2: Unit 44\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_2__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-45",
  "title": "DFT Verification Testbench Part 2: Unit 45",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 2: Unit 45'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 2: Unit 45.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 2: Unit 45\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-46",
  "title": "DFT Hardware Acceleration Part 2: Unit 46",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 2: Unit 46'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 2: Unit 46.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 2: Unit 46\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-47",
  "title": "DFT Data Flow Control Part 2: Unit 47",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 2: Unit 47'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 2: Unit 47.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 2: Unit 47\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-48",
  "title": "DFT Corner Case Analysis Part 2: Unit 48",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 2: Unit 48'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 2: Unit 48.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 2: Unit 48\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-49",
  "title": "DFT Bandwidth Maximizer Part 2: Unit 49",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 2: Unit 49'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 2: Unit 49.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 2: Unit 49\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-50",
  "title": "DFT Latency Reduction Part 2: Unit 50",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 2: Unit 50'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 2: Unit 50.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 2: Unit 50\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_2__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-51",
  "title": "DFT CDC Isolation Part 2: Unit 51",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 2: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 2: Unit 51.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_2__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 2: Unit 51\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_2__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-52",
  "title": "DFT Error Handling Part 2: Unit 52",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 2: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 2: Unit 52.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_2__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 2: Unit 52\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_2__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-53",
  "title": "DFT High-Speed Encoding Part 2: Unit 53",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 2: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 2: Unit 53.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 2: Unit 53\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-54",
  "title": "DFT Synthesizable Model Part 2: Unit 54",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 2: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 2: Unit 54.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 2: Unit 54\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-55",
  "title": "DFT Optimization Part 3: Unit 55",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 3: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 3: Unit 55.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_3__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 3: Unit 55\n\nendmodule",
  "solutionCode": "module dft_optimization_part_3__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-56",
  "title": "DFT Architecture Part 3: Unit 56",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 3: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 3: Unit 56.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_3__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 3: Unit 56\n\nendmodule",
  "solutionCode": "module dft_architecture_part_3__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-57",
  "title": "DFT Pipeline Stage Part 3: Unit 57",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 3: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 3: Unit 57.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_3__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 3: Unit 57\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_3__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-58",
  "title": "DFT Interface Protocol Part 3: Unit 58",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 3: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 3: Unit 58.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 3: Unit 58\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_3_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-59",
  "title": "DFT Low-Power Design Part 3: Unit 59",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 3: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 3: Unit 59.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 3: Unit 59\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-60",
  "title": "DFT Timing Closure Part 3: Unit 60",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 3: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 3: Unit 60.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_3__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 3: Unit 60\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_3__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-61",
  "title": "DFT Resource Sharing Part 3: Unit 61",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 3: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 3: Unit 61.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 3: Unit 61\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_3__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-62",
  "title": "DFT Fault Tolerance Part 3: Unit 62",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 3: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 3: Unit 62.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_3__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 3: Unit 62\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_3__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-63",
  "title": "DFT Verification Testbench Part 3: Unit 63",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 3: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 3: Unit 63.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 3: Unit 63\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-64",
  "title": "DFT Hardware Acceleration Part 3: Unit 64",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 3: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 3: Unit 64.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 3: Unit 64\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-65",
  "title": "DFT Data Flow Control Part 3: Unit 65",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 3: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 3: Unit 65.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 3: Unit 65\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-66",
  "title": "DFT Corner Case Analysis Part 3: Unit 66",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 3: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 3: Unit 66.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 3: Unit 66\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-67",
  "title": "DFT Bandwidth Maximizer Part 3: Unit 67",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 3: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 3: Unit 67.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 3: Unit 67\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-68",
  "title": "DFT Latency Reduction Part 3: Unit 68",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 3: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 3: Unit 68.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 3: Unit 68\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_3__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-69",
  "title": "DFT CDC Isolation Part 3: Unit 69",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 3: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 3: Unit 69.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_3__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 3: Unit 69\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_3__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-70",
  "title": "DFT Error Handling Part 3: Unit 70",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 3: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 3: Unit 70.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_3__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 3: Unit 70\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_3__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-71",
  "title": "DFT High-Speed Encoding Part 3: Unit 71",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 3: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 3: Unit 71.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 3: Unit 71\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-72",
  "title": "DFT Synthesizable Model Part 3: Unit 72",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 3: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 3: Unit 72.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 3: Unit 72\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-73",
  "title": "DFT Optimization Part 4: Unit 73",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 4: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 4: Unit 73.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_4__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 4: Unit 73\n\nendmodule",
  "solutionCode": "module dft_optimization_part_4__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-74",
  "title": "DFT Architecture Part 4: Unit 74",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 4: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 4: Unit 74.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_4__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 4: Unit 74\n\nendmodule",
  "solutionCode": "module dft_architecture_part_4__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-75",
  "title": "DFT Pipeline Stage Part 4: Unit 75",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 4: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 4: Unit 75.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_4__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 4: Unit 75\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_4__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-76",
  "title": "DFT Interface Protocol Part 4: Unit 76",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 4: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 4: Unit 76.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 4: Unit 76\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_4_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-77",
  "title": "DFT Low-Power Design Part 4: Unit 77",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 4: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 4: Unit 77.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 4: Unit 77\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-78",
  "title": "DFT Timing Closure Part 4: Unit 78",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 4: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 4: Unit 78.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_4__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 4: Unit 78\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_4__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-79",
  "title": "DFT Resource Sharing Part 4: Unit 79",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 4: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 4: Unit 79.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 4: Unit 79\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_4__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-80",
  "title": "DFT Fault Tolerance Part 4: Unit 80",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 4: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 4: Unit 80.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_4__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 4: Unit 80\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_4__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-81",
  "title": "DFT Verification Testbench Part 4: Unit 81",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 4: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 4: Unit 81.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 4: Unit 81\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-82",
  "title": "DFT Hardware Acceleration Part 4: Unit 82",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 4: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 4: Unit 82.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 4: Unit 82\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-83",
  "title": "DFT Data Flow Control Part 4: Unit 83",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 4: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 4: Unit 83.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 4: Unit 83\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-84",
  "title": "DFT Corner Case Analysis Part 4: Unit 84",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 4: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 4: Unit 84.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 4: Unit 84\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-85",
  "title": "DFT Bandwidth Maximizer Part 4: Unit 85",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 4: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 4: Unit 85.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 4: Unit 85\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-86",
  "title": "DFT Latency Reduction Part 4: Unit 86",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 4: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 4: Unit 86.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 4: Unit 86\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_4__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-87",
  "title": "DFT CDC Isolation Part 4: Unit 87",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 4: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 4: Unit 87.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_4__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 4: Unit 87\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_4__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-88",
  "title": "DFT Error Handling Part 4: Unit 88",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 4: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 4: Unit 88.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_4__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 4: Unit 88\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_4__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-89",
  "title": "DFT High-Speed Encoding Part 4: Unit 89",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 4: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 4: Unit 89.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 4: Unit 89\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-90",
  "title": "DFT Synthesizable Model Part 4: Unit 90",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 4: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 4: Unit 90.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 4: Unit 90\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-91",
  "title": "DFT Optimization Part 5: Unit 91",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 5: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 5: Unit 91.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_5__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 5: Unit 91\n\nendmodule",
  "solutionCode": "module dft_optimization_part_5__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-92",
  "title": "DFT Architecture Part 5: Unit 92",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 5: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 5: Unit 92.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_5__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 5: Unit 92\n\nendmodule",
  "solutionCode": "module dft_architecture_part_5__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-93",
  "title": "DFT Pipeline Stage Part 5: Unit 93",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 5: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 5: Unit 93.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_5__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 5: Unit 93\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_5__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-94",
  "title": "DFT Interface Protocol Part 5: Unit 94",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 5: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 5: Unit 94.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 5: Unit 94\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_5_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-95",
  "title": "DFT Low-Power Design Part 5: Unit 95",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 5: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 5: Unit 95.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 5: Unit 95\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-96",
  "title": "DFT Timing Closure Part 5: Unit 96",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 5: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 5: Unit 96.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_5__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 5: Unit 96\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_5__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-97",
  "title": "DFT Resource Sharing Part 5: Unit 97",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 5: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 5: Unit 97.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 5: Unit 97\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_5__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-98",
  "title": "DFT Fault Tolerance Part 5: Unit 98",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 5: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 5: Unit 98.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_5__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 5: Unit 98\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_5__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-99",
  "title": "DFT Verification Testbench Part 5: Unit 99",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 5: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 5: Unit 99.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 5: Unit 99\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-100",
  "title": "DFT Hardware Acceleration Part 5: Unit 100",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 5: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 5: Unit 100.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 5: Unit 100\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-101",
  "title": "DFT Data Flow Control Part 5: Unit 101",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 5: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 5: Unit 101.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 5: Unit 101\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-102",
  "title": "DFT Corner Case Analysis Part 5: Unit 102",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 5: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 5: Unit 102.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 5: Unit 102\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-103",
  "title": "DFT Bandwidth Maximizer Part 5: Unit 103",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 5: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 5: Unit 103.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 5: Unit 103\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-104",
  "title": "DFT Latency Reduction Part 5: Unit 104",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 5: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 5: Unit 104.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 5: Unit 104\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_5__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-105",
  "title": "DFT CDC Isolation Part 5: Unit 105",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 5: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 5: Unit 105.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_5__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 5: Unit 105\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_5__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-106",
  "title": "DFT Error Handling Part 5: Unit 106",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 5: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 5: Unit 106.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_5__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 5: Unit 106\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_5__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-107",
  "title": "DFT High-Speed Encoding Part 5: Unit 107",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 5: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 5: Unit 107.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 5: Unit 107\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-108",
  "title": "DFT Synthesizable Model Part 5: Unit 108",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 5: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 5: Unit 108.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 5: Unit 108\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-109",
  "title": "DFT Optimization Part 6: Unit 109",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 6: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 6: Unit 109.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_6__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 6: Unit 109\n\nendmodule",
  "solutionCode": "module dft_optimization_part_6__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-110",
  "title": "DFT Architecture Part 6: Unit 110",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 6: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 6: Unit 110.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_6__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 6: Unit 110\n\nendmodule",
  "solutionCode": "module dft_architecture_part_6__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-111",
  "title": "DFT Pipeline Stage Part 6: Unit 111",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 6: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 6: Unit 111.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_6__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 6: Unit 111\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_6__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-112",
  "title": "DFT Interface Protocol Part 6: Unit 112",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 6: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 6: Unit 112.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 6: Unit 112\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_6_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-113",
  "title": "DFT Low-Power Design Part 6: Unit 113",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 6: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 6: Unit 113.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 6: Unit 113\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-114",
  "title": "DFT Timing Closure Part 6: Unit 114",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 6: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 6: Unit 114.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_6__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 6: Unit 114\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_6__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-115",
  "title": "DFT Resource Sharing Part 6: Unit 115",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 6: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 6: Unit 115.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 6: Unit 115\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_6__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-116",
  "title": "DFT Fault Tolerance Part 6: Unit 116",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 6: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 6: Unit 116.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_6__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 6: Unit 116\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_6__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-117",
  "title": "DFT Verification Testbench Part 6: Unit 117",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 6: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 6: Unit 117.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 6: Unit 117\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-118",
  "title": "DFT Hardware Acceleration Part 6: Unit 118",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 6: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 6: Unit 118.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 6: Unit 118\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-119",
  "title": "DFT Data Flow Control Part 6: Unit 119",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 6: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 6: Unit 119.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 6: Unit 119\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-120",
  "title": "DFT Corner Case Analysis Part 6: Unit 120",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 6: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 6: Unit 120.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 6: Unit 120\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-121",
  "title": "DFT Bandwidth Maximizer Part 6: Unit 121",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 6: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 6: Unit 121.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 6: Unit 121\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-122",
  "title": "DFT Latency Reduction Part 6: Unit 122",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 6: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 6: Unit 122.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 6: Unit 122\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_6__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-123",
  "title": "DFT CDC Isolation Part 6: Unit 123",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 6: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 6: Unit 123.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_6__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 6: Unit 123\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_6__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-124",
  "title": "DFT Error Handling Part 6: Unit 124",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 6: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 6: Unit 124.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_6__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 6: Unit 124\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_6__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-125",
  "title": "DFT High-Speed Encoding Part 6: Unit 125",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 6: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 6: Unit 125.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 6: Unit 125\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-126",
  "title": "DFT Synthesizable Model Part 6: Unit 126",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 6: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 6: Unit 126.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 6: Unit 126\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-127",
  "title": "DFT Optimization Part 7: Unit 127",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 7: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 7: Unit 127.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_7__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 7: Unit 127\n\nendmodule",
  "solutionCode": "module dft_optimization_part_7__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-128",
  "title": "DFT Architecture Part 7: Unit 128",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 7: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 7: Unit 128.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_7__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 7: Unit 128\n\nendmodule",
  "solutionCode": "module dft_architecture_part_7__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-129",
  "title": "DFT Pipeline Stage Part 7: Unit 129",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 7: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 7: Unit 129.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_7__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 7: Unit 129\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_7__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-130",
  "title": "DFT Interface Protocol Part 7: Unit 130",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 7: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 7: Unit 130.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_7_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 7: Unit 130\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_7_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-131",
  "title": "DFT Low-Power Design Part 7: Unit 131",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 7: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 7: Unit 131.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 7: Unit 131\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-132",
  "title": "DFT Timing Closure Part 7: Unit 132",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 7: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 7: Unit 132.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_7__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 7: Unit 132\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_7__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-133",
  "title": "DFT Resource Sharing Part 7: Unit 133",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 7: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 7: Unit 133.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 7: Unit 133\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_7__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-134",
  "title": "DFT Fault Tolerance Part 7: Unit 134",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 7: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 7: Unit 134.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_7__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 7: Unit 134\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_7__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-135",
  "title": "DFT Verification Testbench Part 7: Unit 135",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 7: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 7: Unit 135.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 7: Unit 135\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-136",
  "title": "DFT Hardware Acceleration Part 7: Unit 136",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 7: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 7: Unit 136.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 7: Unit 136\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-137",
  "title": "DFT Data Flow Control Part 7: Unit 137",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 7: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 7: Unit 137.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_7__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 7: Unit 137\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_7__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-138",
  "title": "DFT Corner Case Analysis Part 7: Unit 138",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 7: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 7: Unit 138.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 7: Unit 138\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-139",
  "title": "DFT Bandwidth Maximizer Part 7: Unit 139",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 7: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 7: Unit 139.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 7: Unit 139\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-140",
  "title": "DFT Latency Reduction Part 7: Unit 140",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 7: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 7: Unit 140.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_7__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 7: Unit 140\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_7__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-141",
  "title": "DFT CDC Isolation Part 7: Unit 141",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 7: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 7: Unit 141.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_7__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 7: Unit 141\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_7__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-142",
  "title": "DFT Error Handling Part 7: Unit 142",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 7: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 7: Unit 142.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_7__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 7: Unit 142\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_7__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-143",
  "title": "DFT High-Speed Encoding Part 7: Unit 143",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 7: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 7: Unit 143.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 7: Unit 143\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-144",
  "title": "DFT Synthesizable Model Part 7: Unit 144",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 7: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 7: Unit 144.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 7: Unit 144\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-145",
  "title": "DFT Optimization Part 8: Unit 145",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 8: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 8: Unit 145.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_8__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 8: Unit 145\n\nendmodule",
  "solutionCode": "module dft_optimization_part_8__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-146",
  "title": "DFT Architecture Part 8: Unit 146",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 8: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 8: Unit 146.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_8__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 8: Unit 146\n\nendmodule",
  "solutionCode": "module dft_architecture_part_8__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-147",
  "title": "DFT Pipeline Stage Part 8: Unit 147",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 8: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 8: Unit 147.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_8__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 8: Unit 147\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_8__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-148",
  "title": "DFT Interface Protocol Part 8: Unit 148",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 8: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 8: Unit 148.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_8_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 8: Unit 148\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_8_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-149",
  "title": "DFT Low-Power Design Part 8: Unit 149",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 8: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 8: Unit 149.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_8__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 8: Unit 149\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_8__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-150",
  "title": "DFT Timing Closure Part 8: Unit 150",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 8: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 8: Unit 150.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_8__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 8: Unit 150\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_8__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-151",
  "title": "DFT Resource Sharing Part 8: Unit 151",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 8: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 8: Unit 151.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_8__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 8: Unit 151\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_8__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-152",
  "title": "DFT Fault Tolerance Part 8: Unit 152",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 8: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 8: Unit 152.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_8__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 8: Unit 152\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_8__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-153",
  "title": "DFT Verification Testbench Part 8: Unit 153",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 8: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 8: Unit 153.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 8: Unit 153\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-154",
  "title": "DFT Hardware Acceleration Part 8: Unit 154",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 8: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 8: Unit 154.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 8: Unit 154\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-155",
  "title": "DFT Data Flow Control Part 8: Unit 155",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 8: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 8: Unit 155.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_8__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 8: Unit 155\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_8__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-156",
  "title": "DFT Corner Case Analysis Part 8: Unit 156",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 8: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 8: Unit 156.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 8: Unit 156\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-157",
  "title": "DFT Bandwidth Maximizer Part 8: Unit 157",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 8: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 8: Unit 157.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 8: Unit 157\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-158",
  "title": "DFT Latency Reduction Part 8: Unit 158",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 8: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 8: Unit 158.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_8__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 8: Unit 158\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_8__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-159",
  "title": "DFT CDC Isolation Part 8: Unit 159",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 8: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 8: Unit 159.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_8__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 8: Unit 159\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_8__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-160",
  "title": "DFT Error Handling Part 8: Unit 160",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 8: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 8: Unit 160.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_8__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 8: Unit 160\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_8__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-161",
  "title": "DFT High-Speed Encoding Part 8: Unit 161",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 8: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 8: Unit 161.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 8: Unit 161\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-162",
  "title": "DFT Synthesizable Model Part 8: Unit 162",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 8: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 8: Unit 162.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 8: Unit 162\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-163",
  "title": "DFT Optimization Part 9: Unit 163",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 9: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 9: Unit 163.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_9__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 9: Unit 163\n\nendmodule",
  "solutionCode": "module dft_optimization_part_9__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-164",
  "title": "DFT Architecture Part 9: Unit 164",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 9: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 9: Unit 164.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_9__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 9: Unit 164\n\nendmodule",
  "solutionCode": "module dft_architecture_part_9__unit_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-165",
  "title": "DFT Pipeline Stage Part 9: Unit 165",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 9: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 9: Unit 165.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_9__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 9: Unit 165\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_9__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-166",
  "title": "DFT Interface Protocol Part 9: Unit 166",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 9: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 9: Unit 166.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_9_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 9: Unit 166\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_9_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-167",
  "title": "DFT Low-Power Design Part 9: Unit 167",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 9: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 9: Unit 167.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_9__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 9: Unit 167\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_9__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-168",
  "title": "DFT Timing Closure Part 9: Unit 168",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 9: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 9: Unit 168.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_9__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 9: Unit 168\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_9__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-169",
  "title": "DFT Resource Sharing Part 9: Unit 169",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 9: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 9: Unit 169.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_9__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 9: Unit 169\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_9__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-170",
  "title": "DFT Fault Tolerance Part 9: Unit 170",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 9: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 9: Unit 170.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_9__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 9: Unit 170\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_9__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-171",
  "title": "DFT Verification Testbench Part 9: Unit 171",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 9: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 9: Unit 171.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 9: Unit 171\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-172",
  "title": "DFT Hardware Acceleration Part 9: Unit 172",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 9: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 9: Unit 172.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 9: Unit 172\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-173",
  "title": "DFT Data Flow Control Part 9: Unit 173",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 9: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 9: Unit 173.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_9__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 9: Unit 173\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_9__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-174",
  "title": "DFT Corner Case Analysis Part 9: Unit 174",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 9: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 9: Unit 174.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 9: Unit 174\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-175",
  "title": "DFT Bandwidth Maximizer Part 9: Unit 175",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 9: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 9: Unit 175.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 9: Unit 175\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-176",
  "title": "DFT Latency Reduction Part 9: Unit 176",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 9: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 9: Unit 176.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_9__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 9: Unit 176\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_9__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-177",
  "title": "DFT CDC Isolation Part 9: Unit 177",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 9: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 9: Unit 177.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_9__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 9: Unit 177\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_9__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-178",
  "title": "DFT Error Handling Part 9: Unit 178",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 9: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 9: Unit 178.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_9__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 9: Unit 178\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_9__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-179",
  "title": "DFT High-Speed Encoding Part 9: Unit 179",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 9: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 9: Unit 179.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 9: Unit 179\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-180",
  "title": "DFT Synthesizable Model Part 9: Unit 180",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 9: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 9: Unit 180.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 9: Unit 180\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-181",
  "title": "DFT Optimization Part 10: Unit 181",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 10: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 10: Unit 181.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_10__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 10: Unit 181\n\nendmodule",
  "solutionCode": "module dft_optimization_part_10__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-182",
  "title": "DFT Architecture Part 10: Unit 182",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 10: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 10: Unit 182.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_10__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 10: Unit 182\n\nendmodule",
  "solutionCode": "module dft_architecture_part_10__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-183",
  "title": "DFT Pipeline Stage Part 10: Unit 183",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Pipeline Stage Part 10: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Pipeline Stage Part 10: Unit 183.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_pipeline_stage_part_10__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Pipeline Stage Part 10: Unit 183\n\nendmodule",
  "solutionCode": "module dft_pipeline_stage_part_10__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-184",
  "title": "DFT Interface Protocol Part 10: Unit 184",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Interface Protocol Part 10: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Interface Protocol Part 10: Unit 184.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_interface_protocol_part_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Interface Protocol Part 10: Unit 184\n\nendmodule",
  "solutionCode": "module dft_interface_protocol_part_10 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-185",
  "title": "DFT Low-Power Design Part 10: Unit 185",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Low-Power Design Part 10: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Low-Power Design Part 10: Unit 185.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_low_power_design_part_10__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Low-Power Design Part 10: Unit 185\n\nendmodule",
  "solutionCode": "module dft_low_power_design_part_10__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-186",
  "title": "DFT Timing Closure Part 10: Unit 186",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Timing Closure Part 10: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Timing Closure Part 10: Unit 186.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_timing_closure_part_10__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Timing Closure Part 10: Unit 186\n\nendmodule",
  "solutionCode": "module dft_timing_closure_part_10__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-187",
  "title": "DFT Resource Sharing Part 10: Unit 187",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Resource Sharing Part 10: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Resource Sharing Part 10: Unit 187.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_resource_sharing_part_10__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Resource Sharing Part 10: Unit 187\n\nendmodule",
  "solutionCode": "module dft_resource_sharing_part_10__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-188",
  "title": "DFT Fault Tolerance Part 10: Unit 188",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Fault Tolerance Part 10: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Fault Tolerance Part 10: Unit 188.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_fault_tolerance_part_10__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Fault Tolerance Part 10: Unit 188\n\nendmodule",
  "solutionCode": "module dft_fault_tolerance_part_10__u (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-189",
  "title": "DFT Verification Testbench Part 10: Unit 189",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Verification Testbench Part 10: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Verification Testbench Part 10: Unit 189.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Verification Testbench Part 10: Unit 189\n\nendmodule",
  "solutionCode": "module dft_verification_testbench_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-190",
  "title": "DFT Hardware Acceleration Part 10: Unit 190",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Hardware Acceleration Part 10: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Hardware Acceleration Part 10: Unit 190.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Hardware Acceleration Part 10: Unit 190\n\nendmodule",
  "solutionCode": "module dft_hardware_acceleration_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-191",
  "title": "DFT Data Flow Control Part 10: Unit 191",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Data Flow Control Part 10: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Data Flow Control Part 10: Unit 191.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_data_flow_control_part_10_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Data Flow Control Part 10: Unit 191\n\nendmodule",
  "solutionCode": "module dft_data_flow_control_part_10_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-192",
  "title": "DFT Corner Case Analysis Part 10: Unit 192",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Corner Case Analysis Part 10: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Corner Case Analysis Part 10: Unit 192.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Corner Case Analysis Part 10: Unit 192\n\nendmodule",
  "solutionCode": "module dft_corner_case_analysis_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-193",
  "title": "DFT Bandwidth Maximizer Part 10: Unit 193",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Bandwidth Maximizer Part 10: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Bandwidth Maximizer Part 10: Unit 193.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_bandwidth_maximizer_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Bandwidth Maximizer Part 10: Unit 193\n\nendmodule",
  "solutionCode": "module dft_bandwidth_maximizer_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-194",
  "title": "DFT Latency Reduction Part 10: Unit 194",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Latency Reduction Part 10: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Latency Reduction Part 10: Unit 194.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_latency_reduction_part_10_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Latency Reduction Part 10: Unit 194\n\nendmodule",
  "solutionCode": "module dft_latency_reduction_part_10_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-195",
  "title": "DFT CDC Isolation Part 10: Unit 195",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT CDC Isolation Part 10: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT CDC Isolation Part 10: Unit 195.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_cdc_isolation_part_10__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT CDC Isolation Part 10: Unit 195\n\nendmodule",
  "solutionCode": "module dft_cdc_isolation_part_10__uni (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-196",
  "title": "DFT Error Handling Part 10: Unit 196",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Error Handling Part 10: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Error Handling Part 10: Unit 196.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_error_handling_part_10__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Error Handling Part 10: Unit 196\n\nendmodule",
  "solutionCode": "module dft_error_handling_part_10__un (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-197",
  "title": "DFT High-Speed Encoding Part 10: Unit 197",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT High-Speed Encoding Part 10: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT High-Speed Encoding Part 10: Unit 197.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_high_speed_encoding_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT High-Speed Encoding Part 10: Unit 197\n\nendmodule",
  "solutionCode": "module dft_high_speed_encoding_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-198",
  "title": "DFT Synthesizable Model Part 10: Unit 198",
  "topic": "dft",
  "track": "backend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DFT Synthesizable Model Part 10: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Synthesizable Model Part 10: Unit 198.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_synthesizable_model_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Synthesizable Model Part 10: Unit 198\n\nendmodule",
  "solutionCode": "module dft_synthesizable_model_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-199",
  "title": "DFT Optimization Part 11: Unit 199",
  "topic": "dft",
  "track": "backend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DFT Optimization Part 11: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Optimization Part 11: Unit 199.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_optimization_part_11__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Optimization Part 11: Unit 199\n\nendmodule",
  "solutionCode": "module dft_optimization_part_11__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "dft-200",
  "title": "DFT Architecture Part 11: Unit 200",
  "topic": "dft",
  "track": "backend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'DFT Architecture Part 11: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for DFT Architecture Part 11: Unit 200.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module dft_architecture_part_11__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement DFT Architecture Part 11: Unit 200\n\nendmodule",
  "solutionCode": "module dft_architecture_part_11__unit (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "DFT",
    "DFT",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
