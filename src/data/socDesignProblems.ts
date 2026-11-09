import { Problem } from '../types';

export const SOC_DESIGN_PROBLEMS: Problem[] = [
{
  "id": "soc-01",
  "title": "AMBA APB3 Slave Peripheral Bridge",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'AMBA APB3 Slave Peripheral Bridge'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA APB3 Slave Peripheral Bridge.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_apb3_slave_peripheral_bri (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA APB3 Slave Peripheral Bridge\n\nendmodule",
  "solutionCode": "module amba_apb3_slave_peripheral_bri (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-02",
  "title": "AMBA APB4 Wait State (PREADY) Generator",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'AMBA APB4 Wait State (PREADY) Generator'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA APB4 Wait State (PREADY) Generator.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_apb4_wait_state__pready__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA APB4 Wait State (PREADY) Generator\n\nendmodule",
  "solutionCode": "module amba_apb4_wait_state__pready__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-03",
  "title": "AMBA APB4 Slave Error (PSLVERR) Handler",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'AMBA APB4 Slave Error (PSLVERR) Handler'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA APB4 Slave Error (PSLVERR) Handler.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_apb4_slave_error__pslverr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA APB4 Slave Error (PSLVERR) Handler\n\nendmodule",
  "solutionCode": "module amba_apb4_slave_error__pslverr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-04",
  "title": "AMBA AHB-Lite Single Transfer Data Phase",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'AMBA AHB-Lite Single Transfer Data Phase'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA AHB-Lite Single Transfer Data Phase.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_ahb_lite_single_transfer_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA AHB-Lite Single Transfer Data Phase\n\nendmodule",
  "solutionCode": "module amba_ahb_lite_single_transfer_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-05",
  "title": "AMBA AHB-Lite Burst Transfer (INCR4/WRAP4)",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'AMBA AHB-Lite Burst Transfer (INCR4/WRAP4)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA AHB-Lite Burst Transfer (INCR4/WRAP4).\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_ahb_lite_burst_transfer__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA AHB-Lite Burst Transfer (INCR4/WRAP4)\n\nendmodule",
  "solutionCode": "module amba_ahb_lite_burst_transfer__ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-06",
  "title": "AMBA AXI4 Read Address Channel (AR) Handshake",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'AMBA AXI4 Read Address Channel (AR) Handshake'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA AXI4 Read Address Channel (AR) Handshake.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_axi4_read_address_channel (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA AXI4 Read Address Channel (AR) Handshake\n\nendmodule",
  "solutionCode": "module amba_axi4_read_address_channel (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-07",
  "title": "AMBA AXI4 Write Address & Data Channel Handshake",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'AMBA AXI4 Write Address & Data Channel Handshake'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA AXI4 Write Address & Data Channel Handshake.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_axi4_write_address___data (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA AXI4 Write Address & Data Channel Handshake\n\nendmodule",
  "solutionCode": "module amba_axi4_write_address___data (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-08",
  "title": "AMBA AXI4 Write Response Channel (B) Logic",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'AMBA AXI4 Write Response Channel (B) Logic'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA AXI4 Write Response Channel (B) Logic.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_axi4_write_response_chann (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA AXI4 Write Response Channel (B) Logic\n\nendmodule",
  "solutionCode": "module amba_axi4_write_response_chann (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-09",
  "title": "AMBA AXI4 Out-of-Order Transaction ID Tracking",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'AMBA AXI4 Out-of-Order Transaction ID Tracking'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA AXI4 Out-of-Order Transaction ID Tracking.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_axi4_out_of_order_transac (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA AXI4 Out-of-Order Transaction ID Tracking\n\nendmodule",
  "solutionCode": "module amba_axi4_out_of_order_transac (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-10",
  "title": "AMBA AXI4-Stream Video Stream FIFO Packer",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'AMBA AXI4-Stream Video Stream FIFO Packer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA AXI4-Stream Video Stream FIFO Packer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_axi4_stream_video_stream_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA AXI4-Stream Video Stream FIFO Packer\n\nendmodule",
  "solutionCode": "module amba_axi4_stream_video_stream_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-11",
  "title": "AMBA AXI4-Lite Register Map Subordinate",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'AMBA AXI4-Lite Register Map Subordinate'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for AMBA AXI4-Lite Register Map Subordinate.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module amba_axi4_lite_register_map_su (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement AMBA AXI4-Lite Register Map Subordinate\n\nendmodule",
  "solutionCode": "module amba_axi4_lite_register_map_su (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "AMBA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-12",
  "title": "SoC DMA Controller Scatter-Gather Descriptor Fetch",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SoC DMA Controller Scatter-Gather Descriptor Fetch'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC DMA Controller Scatter-Gather Descriptor Fetch.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_dma_controller_scatter_gat (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC DMA Controller Scatter-Gather Descriptor Fetch\n\nendmodule",
  "solutionCode": "module soc_dma_controller_scatter_gat (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-13",
  "title": "SoC PLIC Platform-Level Interrupt Controller Gateway",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SoC PLIC Platform-Level Interrupt Controller Gateway'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC PLIC Platform-Level Interrupt Controller Gateway.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_plic_platform_level_interr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC PLIC Platform-Level Interrupt Controller Gateway\n\nendmodule",
  "solutionCode": "module soc_plic_platform_level_interr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-14",
  "title": "SoC NVIC Nested Vectored Interrupt Arbiter",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SoC NVIC Nested Vectored Interrupt Arbiter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC NVIC Nested Vectored Interrupt Arbiter.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_nvic_nested_vectored_inter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC NVIC Nested Vectored Interrupt Arbiter\n\nendmodule",
  "solutionCode": "module soc_nvic_nested_vectored_inter (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-15",
  "title": "SoC 2D Mesh Network-on-Chip (NoC) XY Router",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SoC 2D Mesh Network-on-Chip (NoC) XY Router'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC 2D Mesh Network-on-Chip (NoC) XY Router.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_2d_mesh_network_on_chip__n (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC 2D Mesh Network-on-Chip (NoC) XY Router\n\nendmodule",
  "solutionCode": "module soc_2d_mesh_network_on_chip__n (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-16",
  "title": "SoC Credit-Based Flow Control NoC Buffer",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SoC Credit-Based Flow Control NoC Buffer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC Credit-Based Flow Control NoC Buffer.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_credit_based_flow_control_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC Credit-Based Flow Control NoC Buffer\n\nendmodule",
  "solutionCode": "module soc_credit_based_flow_control_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-17",
  "title": "SoC L1 Instruction Cache Controller Tag Check",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SoC L1 Instruction Cache Controller Tag Check'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC L1 Instruction Cache Controller Tag Check.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_l1_instruction_cache_contr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC L1 Instruction Cache Controller Tag Check\n\nendmodule",
  "solutionCode": "module soc_l1_instruction_cache_contr (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-18",
  "title": "SoC MESI Cache Coherence Protocol Controller",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SoC MESI Cache Coherence Protocol Controller'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC MESI Cache Coherence Protocol Controller.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_mesi_cache_coherence_proto (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC MESI Cache Coherence Protocol Controller\n\nendmodule",
  "solutionCode": "module soc_mesi_cache_coherence_proto (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-19",
  "title": "SoC Power Domain Isolation Cell Control",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SoC Power Domain Isolation Cell Control'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC Power Domain Isolation Cell Control.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_power_domain_isolation_cel (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC Power Domain Isolation Cell Control\n\nendmodule",
  "solutionCode": "module soc_power_domain_isolation_cel (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-20",
  "title": "SoC Clock Gating Cell (ICG) Synthesis Model",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SoC Clock Gating Cell (ICG) Synthesis Model'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SoC Clock Gating Cell (ICG) Synthesis Model.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_clock_gating_cell__icg__sy (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SoC Clock Gating Cell (ICG) Synthesis Model\n\nendmodule",
  "solutionCode": "module soc_clock_gating_cell__icg__sy (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SoC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-21",
  "title": "SOC_DESIGN Pipeline Stage Part 1: Unit 21",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 1: Unit 21'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 1: Unit 21.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 1: Unit 21\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-22",
  "title": "SOC_DESIGN Interface Protocol Part 1: Unit 22",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 1: Unit 22'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 1: Unit 22.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 1: Unit 22\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-23",
  "title": "SOC_DESIGN Low-Power Design Part 1: Unit 23",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 1: Unit 23'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 1: Unit 23.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 1: Unit 23\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-24",
  "title": "SOC_DESIGN Timing Closure Part 1: Unit 24",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 1: Unit 24'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 1: Unit 24.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 1: Unit 24\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-25",
  "title": "SOC_DESIGN Resource Sharing Part 1: Unit 25",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 1: Unit 25'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 1: Unit 25.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 1: Unit 25\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-26",
  "title": "SOC_DESIGN Fault Tolerance Part 1: Unit 26",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 1: Unit 26'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 1: Unit 26.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 1: Unit 26\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-27",
  "title": "SOC_DESIGN Verification Testbench Part 1: Unit 27",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 1: Unit 27'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 1: Unit 27.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 1: Unit 27\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-28",
  "title": "SOC_DESIGN Hardware Acceleration Part 1: Unit 28",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 1: Unit 28'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 1: Unit 28.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 1: Unit 28\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-29",
  "title": "SOC_DESIGN Data Flow Control Part 1: Unit 29",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 1: Unit 29'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 1: Unit 29.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 1: Unit 29\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-30",
  "title": "SOC_DESIGN Corner Case Analysis Part 1: Unit 30",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 1: Unit 30'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 1: Unit 30.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 1: Unit 30\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-31",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 1: Unit 31",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 1: Unit 31'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 1: Unit 31.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 1: Unit 31\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-32",
  "title": "SOC_DESIGN Latency Reduction Part 1: Unit 32",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 1: Unit 32'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 1: Unit 32.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 1: Unit 32\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-33",
  "title": "SOC_DESIGN CDC Isolation Part 1: Unit 33",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 1: Unit 33'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 1: Unit 33.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 1: Unit 33\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-34",
  "title": "SOC_DESIGN Error Handling Part 1: Unit 34",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 1: Unit 34'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 1: Unit 34.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 1: Unit 34\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-35",
  "title": "SOC_DESIGN High-Speed Encoding Part 1: Unit 35",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 1: Unit 35'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 1: Unit 35.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 1: Unit 35\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-36",
  "title": "SOC_DESIGN Synthesizable Model Part 1: Unit 36",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 1: Unit 36'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 1: Unit 36.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 1: Unit 36\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-37",
  "title": "SOC_DESIGN Optimization Part 2: Unit 37",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 2: Unit 37'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 2: Unit 37.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 2: Unit 37\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-38",
  "title": "SOC_DESIGN Architecture Part 2: Unit 38",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 2: Unit 38'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 2: Unit 38.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 2: Unit 38\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_2 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-39",
  "title": "SOC_DESIGN Pipeline Stage Part 2: Unit 39",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 2: Unit 39'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 2: Unit 39.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 2: Unit 39\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-40",
  "title": "SOC_DESIGN Interface Protocol Part 2: Unit 40",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 2: Unit 40'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 2: Unit 40.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 2: Unit 40\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-41",
  "title": "SOC_DESIGN Low-Power Design Part 2: Unit 41",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 2: Unit 41'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 2: Unit 41.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 2: Unit 41\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-42",
  "title": "SOC_DESIGN Timing Closure Part 2: Unit 42",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 2: Unit 42'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 2: Unit 42.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 2: Unit 42\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-43",
  "title": "SOC_DESIGN Resource Sharing Part 2: Unit 43",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 2: Unit 43'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 2: Unit 43.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 2: Unit 43\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-44",
  "title": "SOC_DESIGN Fault Tolerance Part 2: Unit 44",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 2: Unit 44'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 2: Unit 44.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 2: Unit 44\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-45",
  "title": "SOC_DESIGN Verification Testbench Part 2: Unit 45",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 2: Unit 45'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 2: Unit 45.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 2: Unit 45\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-46",
  "title": "SOC_DESIGN Hardware Acceleration Part 2: Unit 46",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 2: Unit 46'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 2: Unit 46.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 2: Unit 46\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-47",
  "title": "SOC_DESIGN Data Flow Control Part 2: Unit 47",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 2: Unit 47'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 2: Unit 47.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 2: Unit 47\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-48",
  "title": "SOC_DESIGN Corner Case Analysis Part 2: Unit 48",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 2: Unit 48'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 2: Unit 48.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 2: Unit 48\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-49",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 2: Unit 49",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 2: Unit 49'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 2: Unit 49.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 2: Unit 49\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-50",
  "title": "SOC_DESIGN Latency Reduction Part 2: Unit 50",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 2: Unit 50'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 2: Unit 50.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 2: Unit 50\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-51",
  "title": "SOC_DESIGN CDC Isolation Part 2: Unit 51",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 2: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 2: Unit 51.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 2: Unit 51\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-52",
  "title": "SOC_DESIGN Error Handling Part 2: Unit 52",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 2: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 2: Unit 52.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 2: Unit 52\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-53",
  "title": "SOC_DESIGN High-Speed Encoding Part 2: Unit 53",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 2: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 2: Unit 53.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 2: Unit 53\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-54",
  "title": "SOC_DESIGN Synthesizable Model Part 2: Unit 54",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 2: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 2: Unit 54.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 2: Unit 54\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-55",
  "title": "SOC_DESIGN Optimization Part 3: Unit 55",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 3: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 3: Unit 55.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 3: Unit 55\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-56",
  "title": "SOC_DESIGN Architecture Part 3: Unit 56",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 3: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 3: Unit 56.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 3: Unit 56\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_3 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-57",
  "title": "SOC_DESIGN Pipeline Stage Part 3: Unit 57",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 3: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 3: Unit 57.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 3: Unit 57\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-58",
  "title": "SOC_DESIGN Interface Protocol Part 3: Unit 58",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 3: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 3: Unit 58.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 3: Unit 58\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-59",
  "title": "SOC_DESIGN Low-Power Design Part 3: Unit 59",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 3: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 3: Unit 59.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 3: Unit 59\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-60",
  "title": "SOC_DESIGN Timing Closure Part 3: Unit 60",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 3: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 3: Unit 60.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 3: Unit 60\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-61",
  "title": "SOC_DESIGN Resource Sharing Part 3: Unit 61",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 3: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 3: Unit 61.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 3: Unit 61\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-62",
  "title": "SOC_DESIGN Fault Tolerance Part 3: Unit 62",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 3: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 3: Unit 62.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 3: Unit 62\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-63",
  "title": "SOC_DESIGN Verification Testbench Part 3: Unit 63",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 3: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 3: Unit 63.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 3: Unit 63\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-64",
  "title": "SOC_DESIGN Hardware Acceleration Part 3: Unit 64",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 3: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 3: Unit 64.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 3: Unit 64\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-65",
  "title": "SOC_DESIGN Data Flow Control Part 3: Unit 65",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 3: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 3: Unit 65.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 3: Unit 65\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-66",
  "title": "SOC_DESIGN Corner Case Analysis Part 3: Unit 66",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 3: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 3: Unit 66.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 3: Unit 66\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-67",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 3: Unit 67",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 3: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 3: Unit 67.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 3: Unit 67\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-68",
  "title": "SOC_DESIGN Latency Reduction Part 3: Unit 68",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 3: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 3: Unit 68.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 3: Unit 68\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-69",
  "title": "SOC_DESIGN CDC Isolation Part 3: Unit 69",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 3: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 3: Unit 69.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 3: Unit 69\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-70",
  "title": "SOC_DESIGN Error Handling Part 3: Unit 70",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 3: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 3: Unit 70.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 3: Unit 70\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-71",
  "title": "SOC_DESIGN High-Speed Encoding Part 3: Unit 71",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 3: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 3: Unit 71.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 3: Unit 71\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-72",
  "title": "SOC_DESIGN Synthesizable Model Part 3: Unit 72",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 3: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 3: Unit 72.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 3: Unit 72\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-73",
  "title": "SOC_DESIGN Optimization Part 4: Unit 73",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 4: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 4: Unit 73.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 4: Unit 73\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-74",
  "title": "SOC_DESIGN Architecture Part 4: Unit 74",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 4: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 4: Unit 74.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 4: Unit 74\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_4 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-75",
  "title": "SOC_DESIGN Pipeline Stage Part 4: Unit 75",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 4: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 4: Unit 75.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 4: Unit 75\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-76",
  "title": "SOC_DESIGN Interface Protocol Part 4: Unit 76",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 4: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 4: Unit 76.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 4: Unit 76\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-77",
  "title": "SOC_DESIGN Low-Power Design Part 4: Unit 77",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 4: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 4: Unit 77.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 4: Unit 77\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-78",
  "title": "SOC_DESIGN Timing Closure Part 4: Unit 78",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 4: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 4: Unit 78.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 4: Unit 78\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-79",
  "title": "SOC_DESIGN Resource Sharing Part 4: Unit 79",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 4: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 4: Unit 79.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 4: Unit 79\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-80",
  "title": "SOC_DESIGN Fault Tolerance Part 4: Unit 80",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 4: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 4: Unit 80.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 4: Unit 80\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-81",
  "title": "SOC_DESIGN Verification Testbench Part 4: Unit 81",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 4: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 4: Unit 81.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 4: Unit 81\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-82",
  "title": "SOC_DESIGN Hardware Acceleration Part 4: Unit 82",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 4: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 4: Unit 82.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 4: Unit 82\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-83",
  "title": "SOC_DESIGN Data Flow Control Part 4: Unit 83",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 4: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 4: Unit 83.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 4: Unit 83\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-84",
  "title": "SOC_DESIGN Corner Case Analysis Part 4: Unit 84",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 4: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 4: Unit 84.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 4: Unit 84\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-85",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 4: Unit 85",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 4: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 4: Unit 85.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 4: Unit 85\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-86",
  "title": "SOC_DESIGN Latency Reduction Part 4: Unit 86",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 4: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 4: Unit 86.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 4: Unit 86\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-87",
  "title": "SOC_DESIGN CDC Isolation Part 4: Unit 87",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 4: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 4: Unit 87.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 4: Unit 87\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-88",
  "title": "SOC_DESIGN Error Handling Part 4: Unit 88",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 4: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 4: Unit 88.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 4: Unit 88\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-89",
  "title": "SOC_DESIGN High-Speed Encoding Part 4: Unit 89",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 4: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 4: Unit 89.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 4: Unit 89\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-90",
  "title": "SOC_DESIGN Synthesizable Model Part 4: Unit 90",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 4: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 4: Unit 90.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 4: Unit 90\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-91",
  "title": "SOC_DESIGN Optimization Part 5: Unit 91",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 5: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 5: Unit 91.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 5: Unit 91\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-92",
  "title": "SOC_DESIGN Architecture Part 5: Unit 92",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 5: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 5: Unit 92.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 5: Unit 92\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_5 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-93",
  "title": "SOC_DESIGN Pipeline Stage Part 5: Unit 93",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 5: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 5: Unit 93.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 5: Unit 93\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-94",
  "title": "SOC_DESIGN Interface Protocol Part 5: Unit 94",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 5: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 5: Unit 94.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 5: Unit 94\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-95",
  "title": "SOC_DESIGN Low-Power Design Part 5: Unit 95",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 5: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 5: Unit 95.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 5: Unit 95\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-96",
  "title": "SOC_DESIGN Timing Closure Part 5: Unit 96",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 5: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 5: Unit 96.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 5: Unit 96\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-97",
  "title": "SOC_DESIGN Resource Sharing Part 5: Unit 97",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 5: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 5: Unit 97.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 5: Unit 97\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-98",
  "title": "SOC_DESIGN Fault Tolerance Part 5: Unit 98",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 5: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 5: Unit 98.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 5: Unit 98\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-99",
  "title": "SOC_DESIGN Verification Testbench Part 5: Unit 99",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 5: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 5: Unit 99.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 5: Unit 99\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-100",
  "title": "SOC_DESIGN Hardware Acceleration Part 5: Unit 100",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 5: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 5: Unit 100.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 5: Unit 100\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-101",
  "title": "SOC_DESIGN Data Flow Control Part 5: Unit 101",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 5: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 5: Unit 101.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 5: Unit 101\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-102",
  "title": "SOC_DESIGN Corner Case Analysis Part 5: Unit 102",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 5: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 5: Unit 102.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 5: Unit 102\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-103",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 5: Unit 103",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 5: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 5: Unit 103.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 5: Unit 103\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-104",
  "title": "SOC_DESIGN Latency Reduction Part 5: Unit 104",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 5: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 5: Unit 104.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 5: Unit 104\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-105",
  "title": "SOC_DESIGN CDC Isolation Part 5: Unit 105",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 5: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 5: Unit 105.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 5: Unit 105\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-106",
  "title": "SOC_DESIGN Error Handling Part 5: Unit 106",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 5: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 5: Unit 106.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 5: Unit 106\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-107",
  "title": "SOC_DESIGN High-Speed Encoding Part 5: Unit 107",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 5: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 5: Unit 107.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 5: Unit 107\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-108",
  "title": "SOC_DESIGN Synthesizable Model Part 5: Unit 108",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 5: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 5: Unit 108.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 5: Unit 108\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-109",
  "title": "SOC_DESIGN Optimization Part 6: Unit 109",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 6: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 6: Unit 109.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 6: Unit 109\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-110",
  "title": "SOC_DESIGN Architecture Part 6: Unit 110",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 6: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 6: Unit 110.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 6: Unit 110\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_6 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-111",
  "title": "SOC_DESIGN Pipeline Stage Part 6: Unit 111",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 6: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 6: Unit 111.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 6: Unit 111\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-112",
  "title": "SOC_DESIGN Interface Protocol Part 6: Unit 112",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 6: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 6: Unit 112.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 6: Unit 112\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-113",
  "title": "SOC_DESIGN Low-Power Design Part 6: Unit 113",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 6: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 6: Unit 113.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 6: Unit 113\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-114",
  "title": "SOC_DESIGN Timing Closure Part 6: Unit 114",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 6: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 6: Unit 114.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 6: Unit 114\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-115",
  "title": "SOC_DESIGN Resource Sharing Part 6: Unit 115",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 6: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 6: Unit 115.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 6: Unit 115\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-116",
  "title": "SOC_DESIGN Fault Tolerance Part 6: Unit 116",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 6: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 6: Unit 116.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 6: Unit 116\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-117",
  "title": "SOC_DESIGN Verification Testbench Part 6: Unit 117",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 6: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 6: Unit 117.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 6: Unit 117\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-118",
  "title": "SOC_DESIGN Hardware Acceleration Part 6: Unit 118",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 6: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 6: Unit 118.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 6: Unit 118\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-119",
  "title": "SOC_DESIGN Data Flow Control Part 6: Unit 119",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 6: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 6: Unit 119.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 6: Unit 119\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-120",
  "title": "SOC_DESIGN Corner Case Analysis Part 6: Unit 120",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 6: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 6: Unit 120.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 6: Unit 120\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-121",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 6: Unit 121",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 6: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 6: Unit 121.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 6: Unit 121\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-122",
  "title": "SOC_DESIGN Latency Reduction Part 6: Unit 122",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 6: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 6: Unit 122.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 6: Unit 122\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-123",
  "title": "SOC_DESIGN CDC Isolation Part 6: Unit 123",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 6: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 6: Unit 123.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 6: Unit 123\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-124",
  "title": "SOC_DESIGN Error Handling Part 6: Unit 124",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 6: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 6: Unit 124.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 6: Unit 124\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-125",
  "title": "SOC_DESIGN High-Speed Encoding Part 6: Unit 125",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 6: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 6: Unit 125.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 6: Unit 125\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-126",
  "title": "SOC_DESIGN Synthesizable Model Part 6: Unit 126",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 6: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 6: Unit 126.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 6: Unit 126\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-127",
  "title": "SOC_DESIGN Optimization Part 7: Unit 127",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 7: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 7: Unit 127.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 7: Unit 127\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-128",
  "title": "SOC_DESIGN Architecture Part 7: Unit 128",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 7: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 7: Unit 128.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 7: Unit 128\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_7 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-129",
  "title": "SOC_DESIGN Pipeline Stage Part 7: Unit 129",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 7: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 7: Unit 129.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 7: Unit 129\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-130",
  "title": "SOC_DESIGN Interface Protocol Part 7: Unit 130",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 7: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 7: Unit 130.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 7: Unit 130\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-131",
  "title": "SOC_DESIGN Low-Power Design Part 7: Unit 131",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 7: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 7: Unit 131.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 7: Unit 131\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-132",
  "title": "SOC_DESIGN Timing Closure Part 7: Unit 132",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 7: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 7: Unit 132.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 7: Unit 132\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-133",
  "title": "SOC_DESIGN Resource Sharing Part 7: Unit 133",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 7: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 7: Unit 133.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 7: Unit 133\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-134",
  "title": "SOC_DESIGN Fault Tolerance Part 7: Unit 134",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 7: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 7: Unit 134.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 7: Unit 134\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-135",
  "title": "SOC_DESIGN Verification Testbench Part 7: Unit 135",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 7: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 7: Unit 135.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 7: Unit 135\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-136",
  "title": "SOC_DESIGN Hardware Acceleration Part 7: Unit 136",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 7: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 7: Unit 136.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 7: Unit 136\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-137",
  "title": "SOC_DESIGN Data Flow Control Part 7: Unit 137",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 7: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 7: Unit 137.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 7: Unit 137\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-138",
  "title": "SOC_DESIGN Corner Case Analysis Part 7: Unit 138",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 7: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 7: Unit 138.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 7: Unit 138\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-139",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 7: Unit 139",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 7: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 7: Unit 139.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 7: Unit 139\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-140",
  "title": "SOC_DESIGN Latency Reduction Part 7: Unit 140",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 7: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 7: Unit 140.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 7: Unit 140\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-141",
  "title": "SOC_DESIGN CDC Isolation Part 7: Unit 141",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 7: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 7: Unit 141.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 7: Unit 141\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-142",
  "title": "SOC_DESIGN Error Handling Part 7: Unit 142",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 7: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 7: Unit 142.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 7: Unit 142\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-143",
  "title": "SOC_DESIGN High-Speed Encoding Part 7: Unit 143",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 7: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 7: Unit 143.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 7: Unit 143\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-144",
  "title": "SOC_DESIGN Synthesizable Model Part 7: Unit 144",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 7: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 7: Unit 144.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 7: Unit 144\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-145",
  "title": "SOC_DESIGN Optimization Part 8: Unit 145",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 8: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 8: Unit 145.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 8: Unit 145\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-146",
  "title": "SOC_DESIGN Architecture Part 8: Unit 146",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 8: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 8: Unit 146.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 8: Unit 146\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_8 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-147",
  "title": "SOC_DESIGN Pipeline Stage Part 8: Unit 147",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 8: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 8: Unit 147.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 8: Unit 147\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-148",
  "title": "SOC_DESIGN Interface Protocol Part 8: Unit 148",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 8: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 8: Unit 148.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 8: Unit 148\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-149",
  "title": "SOC_DESIGN Low-Power Design Part 8: Unit 149",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 8: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 8: Unit 149.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 8: Unit 149\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-150",
  "title": "SOC_DESIGN Timing Closure Part 8: Unit 150",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 8: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 8: Unit 150.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 8: Unit 150\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-151",
  "title": "SOC_DESIGN Resource Sharing Part 8: Unit 151",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 8: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 8: Unit 151.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 8: Unit 151\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-152",
  "title": "SOC_DESIGN Fault Tolerance Part 8: Unit 152",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 8: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 8: Unit 152.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 8: Unit 152\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-153",
  "title": "SOC_DESIGN Verification Testbench Part 8: Unit 153",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 8: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 8: Unit 153.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 8: Unit 153\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-154",
  "title": "SOC_DESIGN Hardware Acceleration Part 8: Unit 154",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 8: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 8: Unit 154.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 8: Unit 154\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-155",
  "title": "SOC_DESIGN Data Flow Control Part 8: Unit 155",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 8: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 8: Unit 155.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 8: Unit 155\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-156",
  "title": "SOC_DESIGN Corner Case Analysis Part 8: Unit 156",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 8: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 8: Unit 156.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 8: Unit 156\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-157",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 8: Unit 157",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 8: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 8: Unit 157.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 8: Unit 157\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-158",
  "title": "SOC_DESIGN Latency Reduction Part 8: Unit 158",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 8: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 8: Unit 158.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 8: Unit 158\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-159",
  "title": "SOC_DESIGN CDC Isolation Part 8: Unit 159",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 8: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 8: Unit 159.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 8: Unit 159\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-160",
  "title": "SOC_DESIGN Error Handling Part 8: Unit 160",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 8: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 8: Unit 160.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 8: Unit 160\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-161",
  "title": "SOC_DESIGN High-Speed Encoding Part 8: Unit 161",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 8: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 8: Unit 161.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 8: Unit 161\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-162",
  "title": "SOC_DESIGN Synthesizable Model Part 8: Unit 162",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 8: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 8: Unit 162.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 8: Unit 162\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-163",
  "title": "SOC_DESIGN Optimization Part 9: Unit 163",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 9: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 9: Unit 163.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 9: Unit 163\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-164",
  "title": "SOC_DESIGN Architecture Part 9: Unit 164",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 9: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 9: Unit 164.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 9: Unit 164\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_9 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-165",
  "title": "SOC_DESIGN Pipeline Stage Part 9: Unit 165",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 9: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 9: Unit 165.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 9: Unit 165\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-166",
  "title": "SOC_DESIGN Interface Protocol Part 9: Unit 166",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 9: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 9: Unit 166.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 9: Unit 166\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-167",
  "title": "SOC_DESIGN Low-Power Design Part 9: Unit 167",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 9: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 9: Unit 167.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 9: Unit 167\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-168",
  "title": "SOC_DESIGN Timing Closure Part 9: Unit 168",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 9: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 9: Unit 168.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 9: Unit 168\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-169",
  "title": "SOC_DESIGN Resource Sharing Part 9: Unit 169",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 9: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 9: Unit 169.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 9: Unit 169\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-170",
  "title": "SOC_DESIGN Fault Tolerance Part 9: Unit 170",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 9: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 9: Unit 170.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 9: Unit 170\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-171",
  "title": "SOC_DESIGN Verification Testbench Part 9: Unit 171",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 9: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 9: Unit 171.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 9: Unit 171\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-172",
  "title": "SOC_DESIGN Hardware Acceleration Part 9: Unit 172",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 9: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 9: Unit 172.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 9: Unit 172\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-173",
  "title": "SOC_DESIGN Data Flow Control Part 9: Unit 173",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 9: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 9: Unit 173.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 9: Unit 173\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-174",
  "title": "SOC_DESIGN Corner Case Analysis Part 9: Unit 174",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 9: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 9: Unit 174.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 9: Unit 174\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-175",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 9: Unit 175",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 9: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 9: Unit 175.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 9: Unit 175\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-176",
  "title": "SOC_DESIGN Latency Reduction Part 9: Unit 176",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 9: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 9: Unit 176.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 9: Unit 176\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-177",
  "title": "SOC_DESIGN CDC Isolation Part 9: Unit 177",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 9: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 9: Unit 177.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 9: Unit 177\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-178",
  "title": "SOC_DESIGN Error Handling Part 9: Unit 178",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 9: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 9: Unit 178.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 9: Unit 178\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-179",
  "title": "SOC_DESIGN High-Speed Encoding Part 9: Unit 179",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 9: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 9: Unit 179.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 9: Unit 179\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-180",
  "title": "SOC_DESIGN Synthesizable Model Part 9: Unit 180",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 9: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 9: Unit 180.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 9: Unit 180\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-181",
  "title": "SOC_DESIGN Optimization Part 10: Unit 181",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 10: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 10: Unit 181.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 10: Unit 181\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-182",
  "title": "SOC_DESIGN Architecture Part 10: Unit 182",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 10: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 10: Unit 182.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 10: Unit 182\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-183",
  "title": "SOC_DESIGN Pipeline Stage Part 10: Unit 183",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Pipeline Stage Part 10: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Pipeline Stage Part 10: Unit 183.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Pipeline Stage Part 10: Unit 183\n\nendmodule",
  "solutionCode": "module soc_design_pipeline_stage_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-184",
  "title": "SOC_DESIGN Interface Protocol Part 10: Unit 184",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Interface Protocol Part 10: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Interface Protocol Part 10: Unit 184.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Interface Protocol Part 10: Unit 184\n\nendmodule",
  "solutionCode": "module soc_design_interface_protocol_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-185",
  "title": "SOC_DESIGN Low-Power Design Part 10: Unit 185",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Low-Power Design Part 10: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Low-Power Design Part 10: Unit 185.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Low-Power Design Part 10: Unit 185\n\nendmodule",
  "solutionCode": "module soc_design_low_power_design_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-186",
  "title": "SOC_DESIGN Timing Closure Part 10: Unit 186",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Timing Closure Part 10: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Timing Closure Part 10: Unit 186.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Timing Closure Part 10: Unit 186\n\nendmodule",
  "solutionCode": "module soc_design_timing_closure_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-187",
  "title": "SOC_DESIGN Resource Sharing Part 10: Unit 187",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Resource Sharing Part 10: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Resource Sharing Part 10: Unit 187.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Resource Sharing Part 10: Unit 187\n\nendmodule",
  "solutionCode": "module soc_design_resource_sharing_pa (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-188",
  "title": "SOC_DESIGN Fault Tolerance Part 10: Unit 188",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Fault Tolerance Part 10: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Fault Tolerance Part 10: Unit 188.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Fault Tolerance Part 10: Unit 188\n\nendmodule",
  "solutionCode": "module soc_design_fault_tolerance_par (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-189",
  "title": "SOC_DESIGN Verification Testbench Part 10: Unit 189",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Verification Testbench Part 10: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Verification Testbench Part 10: Unit 189.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Verification Testbench Part 10: Unit 189\n\nendmodule",
  "solutionCode": "module soc_design_verification_testbe (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-190",
  "title": "SOC_DESIGN Hardware Acceleration Part 10: Unit 190",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Hardware Acceleration Part 10: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Hardware Acceleration Part 10: Unit 190.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Hardware Acceleration Part 10: Unit 190\n\nendmodule",
  "solutionCode": "module soc_design_hardware_accelerati (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-191",
  "title": "SOC_DESIGN Data Flow Control Part 10: Unit 191",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Data Flow Control Part 10: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Data Flow Control Part 10: Unit 191.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Data Flow Control Part 10: Unit 191\n\nendmodule",
  "solutionCode": "module soc_design_data_flow_control_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-192",
  "title": "SOC_DESIGN Corner Case Analysis Part 10: Unit 192",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Corner Case Analysis Part 10: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Corner Case Analysis Part 10: Unit 192.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Corner Case Analysis Part 10: Unit 192\n\nendmodule",
  "solutionCode": "module soc_design_corner_case_analysi (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-193",
  "title": "SOC_DESIGN Bandwidth Maximizer Part 10: Unit 193",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Bandwidth Maximizer Part 10: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Bandwidth Maximizer Part 10: Unit 193.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Bandwidth Maximizer Part 10: Unit 193\n\nendmodule",
  "solutionCode": "module soc_design_bandwidth_maximizer (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-194",
  "title": "SOC_DESIGN Latency Reduction Part 10: Unit 194",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Latency Reduction Part 10: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Latency Reduction Part 10: Unit 194.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Latency Reduction Part 10: Unit 194\n\nendmodule",
  "solutionCode": "module soc_design_latency_reduction_p (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-195",
  "title": "SOC_DESIGN CDC Isolation Part 10: Unit 195",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN CDC Isolation Part 10: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN CDC Isolation Part 10: Unit 195.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN CDC Isolation Part 10: Unit 195\n\nendmodule",
  "solutionCode": "module soc_design_cdc_isolation_part_ (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-196",
  "title": "SOC_DESIGN Error Handling Part 10: Unit 196",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Error Handling Part 10: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Error Handling Part 10: Unit 196.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Error Handling Part 10: Unit 196\n\nendmodule",
  "solutionCode": "module soc_design_error_handling_part (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-197",
  "title": "SOC_DESIGN High-Speed Encoding Part 10: Unit 197",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN High-Speed Encoding Part 10: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN High-Speed Encoding Part 10: Unit 197.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN High-Speed Encoding Part 10: Unit 197\n\nendmodule",
  "solutionCode": "module soc_design_high_speed_encoding (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-198",
  "title": "SOC_DESIGN Synthesizable Model Part 10: Unit 198",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SOC_DESIGN Synthesizable Model Part 10: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Synthesizable Model Part 10: Unit 198.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Synthesizable Model Part 10: Unit 198\n\nendmodule",
  "solutionCode": "module soc_design_synthesizable_model (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-199",
  "title": "SOC_DESIGN Optimization Part 11: Unit 199",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SOC_DESIGN Optimization Part 11: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Optimization Part 11: Unit 199.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_optimization_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Optimization Part 11: Unit 199\n\nendmodule",
  "solutionCode": "module soc_design_optimization_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "soc-200",
  "title": "SOC_DESIGN Architecture Part 11: Unit 200",
  "topic": "soc_design",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SOC_DESIGN Architecture Part 11: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Declare module interface and ports.\nStep 2: Implement synthesizable RTL logic for SOC_DESIGN Architecture Part 11: Unit 200.\nStep 3: Assign outputs using non-blocking statements in sequential blocks.",
  "starterCode": "module soc_design_architecture_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    // TODO: Implement SOC_DESIGN Architecture Part 11: Unit 200\n\nendmodule",
  "solutionCode": "module soc_design_architecture_part_1 (\n    input wire clk,\n    input wire rst_n,\n    input wire [3:0] din,\n    output reg [3:0] dout\n);\n    always @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            dout <= 4'b0000;\n        else\n            dout <= din;\n    end\nendmodule",
  "hints": [
    "Use non-blocking assignments (<=) for sequential flip-flop logic.",
    "Verify clock edge and active-low asynchronous reset condition."
  ],
  "tags": [
    "SOC_DESIGN",
    "SOC_DESIGN",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
