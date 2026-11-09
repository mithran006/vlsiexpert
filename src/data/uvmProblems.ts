import { Problem } from '../types';

export const UVM_PROBLEMS: Problem[] = [
{
  "id": "uvm-01",
  "title": "UVM Component vs Object Hierarchy Foundation",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Component vs Object Hierarchy Foundation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_component_vs_object_hierar (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Component vs Object Hierarchy Foundation\n\nendmodule",
  "solutionCode": "module uvm_component_vs_object_hierar (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-02",
  "title": "UVM Factory Registration `uvm_component_utils",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Factory Registration `uvm_component_utils'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_factory_registration__uvm_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Factory Registration `uvm_component_utils\n\nendmodule",
  "solutionCode": "module uvm_factory_registration__uvm_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-03",
  "title": "UVM Factory Type Override (set_type_override_by_type)",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Factory Type Override (set_type_override_by_type)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_factory_type_override__set (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Factory Type Override (set_type_override_by_type)\n\nendmodule",
  "solutionCode": "module uvm_factory_type_override__set (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-04",
  "title": "UVM Phasing: build_phase and connect_phase",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Phasing: build_phase and connect_phase'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_phasing__build_phase_and_c (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Phasing: build_phase and connect_phase\n\nendmodule",
  "solutionCode": "module uvm_phasing__build_phase_and_c (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-05",
  "title": "UVM Phasing: run_phase and Sub-Phases (reset/main)",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Phasing: run_phase and Sub-Phases (reset/main)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_phasing__run_phase_and_sub (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Phasing: run_phase and Sub-Phases (reset/main)\n\nendmodule",
  "solutionCode": "module uvm_phasing__run_phase_and_sub (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-06",
  "title": "UVM Config DB (uvm_config_db#(int)::set/get)",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Config DB (uvm_config_db#(int)::set/get)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_config_db__uvm_config_db__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Config DB (uvm_config_db#(int)::set/get)\n\nendmodule",
  "solutionCode": "module uvm_config_db__uvm_config_db__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-07",
  "title": "UVM Sequence Item Definition & Field Macros",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Sequence Item Definition & Field Macros'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_sequence_item_definition__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Sequence Item Definition & Field Macros\n\nendmodule",
  "solutionCode": "module uvm_sequence_item_definition__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-08",
  "title": "UVM Sequence Body Execution with `uvm_do",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Sequence Body Execution with `uvm_do'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_sequence_body_execution_wi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Sequence Body Execution with `uvm_do\n\nendmodule",
  "solutionCode": "module uvm_sequence_body_execution_wi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-09",
  "title": "UVM Sequencer Arbitration and Queue Management",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Sequencer Arbitration and Queue Management'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_sequencer_arbitration_and_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Sequencer Arbitration and Queue Management\n\nendmodule",
  "solutionCode": "module uvm_sequencer_arbitration_and_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-10",
  "title": "UVM Driver TLM get_next_item & item_done Handshake",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Driver TLM get_next_item & item_done Handshake'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_driver_tlm_get_next_item__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Driver TLM get_next_item & item_done Handshake\n\nendmodule",
  "solutionCode": "module uvm_driver_tlm_get_next_item__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-11",
  "title": "UVM Monitor Pin Wiggling to Analysis Port Transaction",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Monitor Pin Wiggling to Analysis Port Transaction'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_monitor_pin_wiggling_to_an (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Monitor Pin Wiggling to Analysis Port Transaction\n\nendmodule",
  "solutionCode": "module uvm_monitor_pin_wiggling_to_an (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-12",
  "title": "UVM Agent Active vs Passive Topology Creation",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Agent Active vs Passive Topology Creation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_agent_active_vs_passive_to (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Agent Active vs Passive Topology Creation\n\nendmodule",
  "solutionCode": "module uvm_agent_active_vs_passive_to (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-13",
  "title": "UVM Scoreboard Implementation with Analysis Imp",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Scoreboard Implementation with Analysis Imp'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_scoreboard_implementation_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Scoreboard Implementation with Analysis Imp\n\nendmodule",
  "solutionCode": "module uvm_scoreboard_implementation_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-14",
  "title": "UVM TLM Analysis FIFO Decoupled Synchronization",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM TLM Analysis FIFO Decoupled Synchronization'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_tlm_analysis_fifo_decouple (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM TLM Analysis FIFO Decoupled Synchronization\n\nendmodule",
  "solutionCode": "module uvm_tlm_analysis_fifo_decouple (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-15",
  "title": "UVM Objection Mechanism (raise_objection / drop_objection)",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Objection Mechanism (raise_objection / drop_objection)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_objection_mechanism__raise (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Objection Mechanism (raise_objection / drop_objection)\n\nendmodule",
  "solutionCode": "module uvm_objection_mechanism__raise (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-16",
  "title": "UVM Virtual Sequence Multi-Agent Coordination",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Virtual Sequence Multi-Agent Coordination'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_virtual_sequence_multi_age (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Virtual Sequence Multi-Agent Coordination\n\nendmodule",
  "solutionCode": "module uvm_virtual_sequence_multi_age (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-17",
  "title": "UVM Register Abstraction Layer (RAL) Reg Model",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Register Abstraction Layer (RAL) Reg Model'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_register_abstraction_layer (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Register Abstraction Layer (RAL) Reg Model\n\nendmodule",
  "solutionCode": "module uvm_register_abstraction_layer (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-18",
  "title": "UVM RAL Front-Door vs Back-Door Read/Write",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM RAL Front-Door vs Back-Door Read/Write'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_ral_front_door_vs_back_doo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM RAL Front-Door vs Back-Door Read/Write\n\nendmodule",
  "solutionCode": "module uvm_ral_front_door_vs_back_doo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-19",
  "title": "UVM Callback Class Definition and Hook Invocation",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Callback Class Definition and Hook Invocation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_callback_class_definition_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Callback Class Definition and Hook Invocation\n\nendmodule",
  "solutionCode": "module uvm_callback_class_definition_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-20",
  "title": "UVM Report Server Severity Masking & Verbosity",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Report Server Severity Masking & Verbosity'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_report_server_severity_mas (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Report Server Severity Masking & Verbosity\n\nendmodule",
  "solutionCode": "module uvm_report_server_severity_mas (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-21",
  "title": "UVM Pipeline Stage Part 1: Unit 21",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 1: Unit 21'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_1__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 1: Unit 21\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_1__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-22",
  "title": "UVM Interface Protocol Part 1: Unit 22",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 1: Unit 22'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_1_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 1: Unit 22\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_1_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-23",
  "title": "UVM Low-Power Design Part 1: Unit 23",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 1: Unit 23'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_1__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 1: Unit 23\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_1__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-24",
  "title": "UVM Timing Closure Part 1: Unit 24",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 1: Unit 24'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_1__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 1: Unit 24\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_1__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-25",
  "title": "UVM Resource Sharing Part 1: Unit 25",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 1: Unit 25'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_1__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 1: Unit 25\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_1__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-26",
  "title": "UVM Fault Tolerance Part 1: Unit 26",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 1: Unit 26'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_1__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 1: Unit 26\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_1__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-27",
  "title": "UVM Verification Testbench Part 1: Unit 27",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 1: Unit 27'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 1: Unit 27\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-28",
  "title": "UVM Hardware Acceleration Part 1: Unit 28",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 1: Unit 28'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 1: Unit 28\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-29",
  "title": "UVM Data Flow Control Part 1: Unit 29",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 1: Unit 29'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_1__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 1: Unit 29\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_1__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-30",
  "title": "UVM Corner Case Analysis Part 1: Unit 30",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 1: Unit 30'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 1: Unit 30\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-31",
  "title": "UVM Bandwidth Maximizer Part 1: Unit 31",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 1: Unit 31'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 1: Unit 31\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-32",
  "title": "UVM Latency Reduction Part 1: Unit 32",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 1: Unit 32'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_1__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 1: Unit 32\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_1__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-33",
  "title": "UVM CDC Isolation Part 1: Unit 33",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 1: Unit 33'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_1__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 1: Unit 33\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_1__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-34",
  "title": "UVM Error Handling Part 1: Unit 34",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 1: Unit 34'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_1__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 1: Unit 34\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_1__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-35",
  "title": "UVM High-Speed Encoding Part 1: Unit 35",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 1: Unit 35'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 1: Unit 35\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-36",
  "title": "UVM Synthesizable Model Part 1: Unit 36",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 1: Unit 36'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 1: Unit 36\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-37",
  "title": "UVM Optimization Part 2: Unit 37",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 2: Unit 37'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_2__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 2: Unit 37\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_2__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-38",
  "title": "UVM Architecture Part 2: Unit 38",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 2: Unit 38'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_2__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 2: Unit 38\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_2__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-39",
  "title": "UVM Pipeline Stage Part 2: Unit 39",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 2: Unit 39'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_2__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 2: Unit 39\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_2__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-40",
  "title": "UVM Interface Protocol Part 2: Unit 40",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 2: Unit 40'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_2_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 2: Unit 40\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_2_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-41",
  "title": "UVM Low-Power Design Part 2: Unit 41",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 2: Unit 41'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_2__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 2: Unit 41\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_2__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-42",
  "title": "UVM Timing Closure Part 2: Unit 42",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 2: Unit 42'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_2__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 2: Unit 42\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_2__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-43",
  "title": "UVM Resource Sharing Part 2: Unit 43",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 2: Unit 43'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_2__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 2: Unit 43\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_2__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-44",
  "title": "UVM Fault Tolerance Part 2: Unit 44",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 2: Unit 44'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_2__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 2: Unit 44\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_2__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-45",
  "title": "UVM Verification Testbench Part 2: Unit 45",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 2: Unit 45'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 2: Unit 45\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-46",
  "title": "UVM Hardware Acceleration Part 2: Unit 46",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 2: Unit 46'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 2: Unit 46\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-47",
  "title": "UVM Data Flow Control Part 2: Unit 47",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 2: Unit 47'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_2__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 2: Unit 47\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_2__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-48",
  "title": "UVM Corner Case Analysis Part 2: Unit 48",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 2: Unit 48'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 2: Unit 48\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-49",
  "title": "UVM Bandwidth Maximizer Part 2: Unit 49",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 2: Unit 49'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_2 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 2: Unit 49\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_2 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-50",
  "title": "UVM Latency Reduction Part 2: Unit 50",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 2: Unit 50'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_2__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 2: Unit 50\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_2__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-51",
  "title": "UVM CDC Isolation Part 2: Unit 51",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 2: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_2__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 2: Unit 51\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_2__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-52",
  "title": "UVM Error Handling Part 2: Unit 52",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 2: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_2__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 2: Unit 52\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_2__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-53",
  "title": "UVM High-Speed Encoding Part 2: Unit 53",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 2: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_2 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 2: Unit 53\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_2 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-54",
  "title": "UVM Synthesizable Model Part 2: Unit 54",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 2: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_2 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 2: Unit 54\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_2 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-55",
  "title": "UVM Optimization Part 3: Unit 55",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 3: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_3__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 3: Unit 55\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_3__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-56",
  "title": "UVM Architecture Part 3: Unit 56",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 3: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_3__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 3: Unit 56\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_3__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-57",
  "title": "UVM Pipeline Stage Part 3: Unit 57",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 3: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_3__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 3: Unit 57\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_3__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-58",
  "title": "UVM Interface Protocol Part 3: Unit 58",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 3: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_3_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 3: Unit 58\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_3_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-59",
  "title": "UVM Low-Power Design Part 3: Unit 59",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 3: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_3__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 3: Unit 59\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_3__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-60",
  "title": "UVM Timing Closure Part 3: Unit 60",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 3: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_3__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 3: Unit 60\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_3__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-61",
  "title": "UVM Resource Sharing Part 3: Unit 61",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 3: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_3__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 3: Unit 61\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_3__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-62",
  "title": "UVM Fault Tolerance Part 3: Unit 62",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 3: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_3__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 3: Unit 62\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_3__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-63",
  "title": "UVM Verification Testbench Part 3: Unit 63",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 3: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 3: Unit 63\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-64",
  "title": "UVM Hardware Acceleration Part 3: Unit 64",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 3: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 3: Unit 64\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-65",
  "title": "UVM Data Flow Control Part 3: Unit 65",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 3: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_3__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 3: Unit 65\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_3__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-66",
  "title": "UVM Corner Case Analysis Part 3: Unit 66",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 3: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 3: Unit 66\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-67",
  "title": "UVM Bandwidth Maximizer Part 3: Unit 67",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 3: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_3 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 3: Unit 67\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_3 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-68",
  "title": "UVM Latency Reduction Part 3: Unit 68",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 3: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_3__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 3: Unit 68\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_3__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-69",
  "title": "UVM CDC Isolation Part 3: Unit 69",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 3: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_3__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 3: Unit 69\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_3__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-70",
  "title": "UVM Error Handling Part 3: Unit 70",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 3: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_3__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 3: Unit 70\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_3__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-71",
  "title": "UVM High-Speed Encoding Part 3: Unit 71",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 3: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_3 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 3: Unit 71\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_3 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-72",
  "title": "UVM Synthesizable Model Part 3: Unit 72",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 3: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_3 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 3: Unit 72\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_3 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-73",
  "title": "UVM Optimization Part 4: Unit 73",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 4: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_4__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 4: Unit 73\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_4__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-74",
  "title": "UVM Architecture Part 4: Unit 74",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 4: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_4__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 4: Unit 74\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_4__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-75",
  "title": "UVM Pipeline Stage Part 4: Unit 75",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 4: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_4__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 4: Unit 75\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_4__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-76",
  "title": "UVM Interface Protocol Part 4: Unit 76",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 4: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_4_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 4: Unit 76\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_4_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-77",
  "title": "UVM Low-Power Design Part 4: Unit 77",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 4: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_4__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 4: Unit 77\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_4__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-78",
  "title": "UVM Timing Closure Part 4: Unit 78",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 4: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_4__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 4: Unit 78\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_4__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-79",
  "title": "UVM Resource Sharing Part 4: Unit 79",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 4: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_4__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 4: Unit 79\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_4__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-80",
  "title": "UVM Fault Tolerance Part 4: Unit 80",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 4: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_4__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 4: Unit 80\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_4__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-81",
  "title": "UVM Verification Testbench Part 4: Unit 81",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 4: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 4: Unit 81\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-82",
  "title": "UVM Hardware Acceleration Part 4: Unit 82",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 4: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 4: Unit 82\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-83",
  "title": "UVM Data Flow Control Part 4: Unit 83",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 4: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_4__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 4: Unit 83\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_4__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-84",
  "title": "UVM Corner Case Analysis Part 4: Unit 84",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 4: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 4: Unit 84\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-85",
  "title": "UVM Bandwidth Maximizer Part 4: Unit 85",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 4: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_4 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 4: Unit 85\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_4 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-86",
  "title": "UVM Latency Reduction Part 4: Unit 86",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 4: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_4__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 4: Unit 86\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_4__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-87",
  "title": "UVM CDC Isolation Part 4: Unit 87",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 4: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_4__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 4: Unit 87\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_4__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-88",
  "title": "UVM Error Handling Part 4: Unit 88",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 4: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_4__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 4: Unit 88\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_4__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-89",
  "title": "UVM High-Speed Encoding Part 4: Unit 89",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 4: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_4 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 4: Unit 89\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_4 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-90",
  "title": "UVM Synthesizable Model Part 4: Unit 90",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 4: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_4 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 4: Unit 90\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_4 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-91",
  "title": "UVM Optimization Part 5: Unit 91",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 5: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_5__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 5: Unit 91\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_5__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-92",
  "title": "UVM Architecture Part 5: Unit 92",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 5: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_5__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 5: Unit 92\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_5__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-93",
  "title": "UVM Pipeline Stage Part 5: Unit 93",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 5: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_5__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 5: Unit 93\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_5__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-94",
  "title": "UVM Interface Protocol Part 5: Unit 94",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 5: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_5_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 5: Unit 94\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_5_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-95",
  "title": "UVM Low-Power Design Part 5: Unit 95",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 5: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_5__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 5: Unit 95\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_5__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-96",
  "title": "UVM Timing Closure Part 5: Unit 96",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 5: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_5__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 5: Unit 96\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_5__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-97",
  "title": "UVM Resource Sharing Part 5: Unit 97",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 5: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_5__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 5: Unit 97\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_5__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-98",
  "title": "UVM Fault Tolerance Part 5: Unit 98",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 5: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_5__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 5: Unit 98\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_5__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-99",
  "title": "UVM Verification Testbench Part 5: Unit 99",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 5: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 5: Unit 99\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-100",
  "title": "UVM Hardware Acceleration Part 5: Unit 100",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 5: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 5: Unit 100\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-101",
  "title": "UVM Data Flow Control Part 5: Unit 101",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 5: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_5__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 5: Unit 101\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_5__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-102",
  "title": "UVM Corner Case Analysis Part 5: Unit 102",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 5: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 5: Unit 102\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-103",
  "title": "UVM Bandwidth Maximizer Part 5: Unit 103",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 5: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_5 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 5: Unit 103\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_5 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-104",
  "title": "UVM Latency Reduction Part 5: Unit 104",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 5: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_5__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 5: Unit 104\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_5__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-105",
  "title": "UVM CDC Isolation Part 5: Unit 105",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 5: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_5__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 5: Unit 105\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_5__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-106",
  "title": "UVM Error Handling Part 5: Unit 106",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 5: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_5__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 5: Unit 106\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_5__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-107",
  "title": "UVM High-Speed Encoding Part 5: Unit 107",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 5: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_5 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 5: Unit 107\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_5 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-108",
  "title": "UVM Synthesizable Model Part 5: Unit 108",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 5: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_5 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 5: Unit 108\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_5 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-109",
  "title": "UVM Optimization Part 6: Unit 109",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 6: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_6__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 6: Unit 109\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_6__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-110",
  "title": "UVM Architecture Part 6: Unit 110",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 6: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_6__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 6: Unit 110\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_6__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-111",
  "title": "UVM Pipeline Stage Part 6: Unit 111",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 6: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_6__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 6: Unit 111\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_6__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-112",
  "title": "UVM Interface Protocol Part 6: Unit 112",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 6: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_6_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 6: Unit 112\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_6_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-113",
  "title": "UVM Low-Power Design Part 6: Unit 113",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 6: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_6__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 6: Unit 113\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_6__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-114",
  "title": "UVM Timing Closure Part 6: Unit 114",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 6: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_6__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 6: Unit 114\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_6__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-115",
  "title": "UVM Resource Sharing Part 6: Unit 115",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 6: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_6__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 6: Unit 115\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_6__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-116",
  "title": "UVM Fault Tolerance Part 6: Unit 116",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 6: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_6__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 6: Unit 116\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_6__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-117",
  "title": "UVM Verification Testbench Part 6: Unit 117",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 6: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 6: Unit 117\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-118",
  "title": "UVM Hardware Acceleration Part 6: Unit 118",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 6: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 6: Unit 118\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-119",
  "title": "UVM Data Flow Control Part 6: Unit 119",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 6: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_6__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 6: Unit 119\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_6__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-120",
  "title": "UVM Corner Case Analysis Part 6: Unit 120",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 6: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 6: Unit 120\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-121",
  "title": "UVM Bandwidth Maximizer Part 6: Unit 121",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 6: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_6 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 6: Unit 121\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_6 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-122",
  "title": "UVM Latency Reduction Part 6: Unit 122",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 6: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_6__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 6: Unit 122\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_6__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-123",
  "title": "UVM CDC Isolation Part 6: Unit 123",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 6: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_6__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 6: Unit 123\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_6__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-124",
  "title": "UVM Error Handling Part 6: Unit 124",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 6: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_6__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 6: Unit 124\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_6__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-125",
  "title": "UVM High-Speed Encoding Part 6: Unit 125",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 6: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_6 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 6: Unit 125\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_6 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-126",
  "title": "UVM Synthesizable Model Part 6: Unit 126",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 6: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_6 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 6: Unit 126\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_6 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-127",
  "title": "UVM Optimization Part 7: Unit 127",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 7: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_7__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 7: Unit 127\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_7__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-128",
  "title": "UVM Architecture Part 7: Unit 128",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 7: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_7__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 7: Unit 128\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_7__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-129",
  "title": "UVM Pipeline Stage Part 7: Unit 129",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 7: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_7__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 7: Unit 129\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_7__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-130",
  "title": "UVM Interface Protocol Part 7: Unit 130",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 7: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_7_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 7: Unit 130\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_7_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-131",
  "title": "UVM Low-Power Design Part 7: Unit 131",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 7: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_7__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 7: Unit 131\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_7__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-132",
  "title": "UVM Timing Closure Part 7: Unit 132",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 7: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_7__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 7: Unit 132\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_7__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-133",
  "title": "UVM Resource Sharing Part 7: Unit 133",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 7: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_7__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 7: Unit 133\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_7__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-134",
  "title": "UVM Fault Tolerance Part 7: Unit 134",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 7: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_7__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 7: Unit 134\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_7__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-135",
  "title": "UVM Verification Testbench Part 7: Unit 135",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 7: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 7: Unit 135\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-136",
  "title": "UVM Hardware Acceleration Part 7: Unit 136",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 7: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 7: Unit 136\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-137",
  "title": "UVM Data Flow Control Part 7: Unit 137",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 7: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_7__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 7: Unit 137\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_7__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-138",
  "title": "UVM Corner Case Analysis Part 7: Unit 138",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 7: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 7: Unit 138\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-139",
  "title": "UVM Bandwidth Maximizer Part 7: Unit 139",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 7: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_7 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 7: Unit 139\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_7 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-140",
  "title": "UVM Latency Reduction Part 7: Unit 140",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 7: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_7__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 7: Unit 140\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_7__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-141",
  "title": "UVM CDC Isolation Part 7: Unit 141",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 7: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_7__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 7: Unit 141\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_7__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-142",
  "title": "UVM Error Handling Part 7: Unit 142",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 7: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_7__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 7: Unit 142\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_7__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-143",
  "title": "UVM High-Speed Encoding Part 7: Unit 143",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 7: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_7 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 7: Unit 143\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_7 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-144",
  "title": "UVM Synthesizable Model Part 7: Unit 144",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 7: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_7 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 7: Unit 144\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_7 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-145",
  "title": "UVM Optimization Part 8: Unit 145",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 8: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_8__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 8: Unit 145\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_8__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-146",
  "title": "UVM Architecture Part 8: Unit 146",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 8: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_8__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 8: Unit 146\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_8__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-147",
  "title": "UVM Pipeline Stage Part 8: Unit 147",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 8: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_8__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 8: Unit 147\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_8__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-148",
  "title": "UVM Interface Protocol Part 8: Unit 148",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 8: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_8_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 8: Unit 148\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_8_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-149",
  "title": "UVM Low-Power Design Part 8: Unit 149",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 8: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_8__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 8: Unit 149\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_8__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-150",
  "title": "UVM Timing Closure Part 8: Unit 150",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 8: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_8__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 8: Unit 150\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_8__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-151",
  "title": "UVM Resource Sharing Part 8: Unit 151",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 8: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_8__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 8: Unit 151\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_8__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-152",
  "title": "UVM Fault Tolerance Part 8: Unit 152",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 8: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_8__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 8: Unit 152\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_8__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-153",
  "title": "UVM Verification Testbench Part 8: Unit 153",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 8: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 8: Unit 153\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-154",
  "title": "UVM Hardware Acceleration Part 8: Unit 154",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 8: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 8: Unit 154\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-155",
  "title": "UVM Data Flow Control Part 8: Unit 155",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 8: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_8__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 8: Unit 155\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_8__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-156",
  "title": "UVM Corner Case Analysis Part 8: Unit 156",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 8: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 8: Unit 156\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-157",
  "title": "UVM Bandwidth Maximizer Part 8: Unit 157",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 8: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_8 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 8: Unit 157\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_8 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-158",
  "title": "UVM Latency Reduction Part 8: Unit 158",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 8: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_8__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 8: Unit 158\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_8__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-159",
  "title": "UVM CDC Isolation Part 8: Unit 159",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 8: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_8__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 8: Unit 159\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_8__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-160",
  "title": "UVM Error Handling Part 8: Unit 160",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 8: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_8__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 8: Unit 160\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_8__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-161",
  "title": "UVM High-Speed Encoding Part 8: Unit 161",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 8: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_8 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 8: Unit 161\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_8 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-162",
  "title": "UVM Synthesizable Model Part 8: Unit 162",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 8: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_8 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 8: Unit 162\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_8 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-163",
  "title": "UVM Optimization Part 9: Unit 163",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 9: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_9__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 9: Unit 163\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_9__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-164",
  "title": "UVM Architecture Part 9: Unit 164",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 9: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_9__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 9: Unit 164\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_9__unit_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-165",
  "title": "UVM Pipeline Stage Part 9: Unit 165",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 9: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_9__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 9: Unit 165\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_9__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-166",
  "title": "UVM Interface Protocol Part 9: Unit 166",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 9: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_9_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 9: Unit 166\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_9_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-167",
  "title": "UVM Low-Power Design Part 9: Unit 167",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 9: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_9__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 9: Unit 167\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_9__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-168",
  "title": "UVM Timing Closure Part 9: Unit 168",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 9: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_9__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 9: Unit 168\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_9__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-169",
  "title": "UVM Resource Sharing Part 9: Unit 169",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 9: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_9__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 9: Unit 169\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_9__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-170",
  "title": "UVM Fault Tolerance Part 9: Unit 170",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 9: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_9__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 9: Unit 170\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_9__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-171",
  "title": "UVM Verification Testbench Part 9: Unit 171",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 9: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 9: Unit 171\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-172",
  "title": "UVM Hardware Acceleration Part 9: Unit 172",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 9: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 9: Unit 172\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-173",
  "title": "UVM Data Flow Control Part 9: Unit 173",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 9: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_9__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 9: Unit 173\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_9__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-174",
  "title": "UVM Corner Case Analysis Part 9: Unit 174",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 9: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 9: Unit 174\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-175",
  "title": "UVM Bandwidth Maximizer Part 9: Unit 175",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 9: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_9 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 9: Unit 175\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_9 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-176",
  "title": "UVM Latency Reduction Part 9: Unit 176",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 9: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_9__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 9: Unit 176\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_9__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-177",
  "title": "UVM CDC Isolation Part 9: Unit 177",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 9: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_9__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 9: Unit 177\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_9__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-178",
  "title": "UVM Error Handling Part 9: Unit 178",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 9: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_9__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 9: Unit 178\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_9__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-179",
  "title": "UVM High-Speed Encoding Part 9: Unit 179",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 9: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_9 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 9: Unit 179\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_9 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-180",
  "title": "UVM Synthesizable Model Part 9: Unit 180",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 9: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_9 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 9: Unit 180\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_9 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-181",
  "title": "UVM Optimization Part 10: Unit 181",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 10: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_10__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 10: Unit 181\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_10__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-182",
  "title": "UVM Architecture Part 10: Unit 182",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 10: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_10__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 10: Unit 182\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_10__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-183",
  "title": "UVM Pipeline Stage Part 10: Unit 183",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Pipeline Stage Part 10: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_pipeline_stage_part_10__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Pipeline Stage Part 10: Unit 183\n\nendmodule",
  "solutionCode": "module uvm_pipeline_stage_part_10__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-184",
  "title": "UVM Interface Protocol Part 10: Unit 184",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Interface Protocol Part 10: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_interface_protocol_part_10 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Interface Protocol Part 10: Unit 184\n\nendmodule",
  "solutionCode": "module uvm_interface_protocol_part_10 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-185",
  "title": "UVM Low-Power Design Part 10: Unit 185",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Low-Power Design Part 10: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_low_power_design_part_10__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Low-Power Design Part 10: Unit 185\n\nendmodule",
  "solutionCode": "module uvm_low_power_design_part_10__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-186",
  "title": "UVM Timing Closure Part 10: Unit 186",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Timing Closure Part 10: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_timing_closure_part_10__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Timing Closure Part 10: Unit 186\n\nendmodule",
  "solutionCode": "module uvm_timing_closure_part_10__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-187",
  "title": "UVM Resource Sharing Part 10: Unit 187",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Resource Sharing Part 10: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_resource_sharing_part_10__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Resource Sharing Part 10: Unit 187\n\nendmodule",
  "solutionCode": "module uvm_resource_sharing_part_10__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-188",
  "title": "UVM Fault Tolerance Part 10: Unit 188",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Fault Tolerance Part 10: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_fault_tolerance_part_10__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Fault Tolerance Part 10: Unit 188\n\nendmodule",
  "solutionCode": "module uvm_fault_tolerance_part_10__u (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-189",
  "title": "UVM Verification Testbench Part 10: Unit 189",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Verification Testbench Part 10: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Verification Testbench Part 10: Unit 189\n\nendmodule",
  "solutionCode": "module uvm_verification_testbench_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-190",
  "title": "UVM Hardware Acceleration Part 10: Unit 190",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Hardware Acceleration Part 10: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Hardware Acceleration Part 10: Unit 190\n\nendmodule",
  "solutionCode": "module uvm_hardware_acceleration_part (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-191",
  "title": "UVM Data Flow Control Part 10: Unit 191",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Data Flow Control Part 10: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_data_flow_control_part_10_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Data Flow Control Part 10: Unit 191\n\nendmodule",
  "solutionCode": "module uvm_data_flow_control_part_10_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-192",
  "title": "UVM Corner Case Analysis Part 10: Unit 192",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Corner Case Analysis Part 10: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Corner Case Analysis Part 10: Unit 192\n\nendmodule",
  "solutionCode": "module uvm_corner_case_analysis_part_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-193",
  "title": "UVM Bandwidth Maximizer Part 10: Unit 193",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Bandwidth Maximizer Part 10: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_bandwidth_maximizer_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Bandwidth Maximizer Part 10: Unit 193\n\nendmodule",
  "solutionCode": "module uvm_bandwidth_maximizer_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-194",
  "title": "UVM Latency Reduction Part 10: Unit 194",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Latency Reduction Part 10: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_latency_reduction_part_10_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Latency Reduction Part 10: Unit 194\n\nendmodule",
  "solutionCode": "module uvm_latency_reduction_part_10_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-195",
  "title": "UVM CDC Isolation Part 10: Unit 195",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM CDC Isolation Part 10: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_cdc_isolation_part_10__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM CDC Isolation Part 10: Unit 195\n\nendmodule",
  "solutionCode": "module uvm_cdc_isolation_part_10__uni (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-196",
  "title": "UVM Error Handling Part 10: Unit 196",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Error Handling Part 10: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_error_handling_part_10__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Error Handling Part 10: Unit 196\n\nendmodule",
  "solutionCode": "module uvm_error_handling_part_10__un (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-197",
  "title": "UVM High-Speed Encoding Part 10: Unit 197",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM High-Speed Encoding Part 10: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_high_speed_encoding_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM High-Speed Encoding Part 10: Unit 197\n\nendmodule",
  "solutionCode": "module uvm_high_speed_encoding_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-198",
  "title": "UVM Synthesizable Model Part 10: Unit 198",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UVM Synthesizable Model Part 10: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_synthesizable_model_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Synthesizable Model Part 10: Unit 198\n\nendmodule",
  "solutionCode": "module uvm_synthesizable_model_part_1 (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-199",
  "title": "UVM Optimization Part 11: Unit 199",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'UVM Optimization Part 11: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_optimization_part_11__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Optimization Part 11: Unit 199\n\nendmodule",
  "solutionCode": "module uvm_optimization_part_11__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "uvm-200",
  "title": "UVM Architecture Part 11: Unit 200",
  "topic": "uvm",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'UVM Architecture Part 11: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module uvm_architecture_part_11__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for UVM Architecture Part 11: Unit 200\n\nendmodule",
  "solutionCode": "module uvm_architecture_part_11__unit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "UVM",
    "UVM",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
