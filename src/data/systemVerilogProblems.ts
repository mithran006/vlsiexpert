import { Problem } from '../types';

export const SYSTEMVERILOG_PROBLEMS: Problem[] = [
{
  "id": "sver-01",
  "title": "SystemVerilog 2-State logic vs 4-State bit Types",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SystemVerilog 2-State logic vs 4-State bit Types'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_2_state_logic_vs (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SystemVerilog 2-State logic vs 4-State bit Types\n\nendmodule",
  "solutionCode": "module systemverilog_2_state_logic_vs (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SystemVerilog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-02",
  "title": "Packed vs Unpacked Struct Definitions",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Packed vs Unpacked Struct Definitions'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module packed_vs_unpacked_struct_defi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Packed vs Unpacked Struct Definitions\n\nendmodule",
  "solutionCode": "module packed_vs_unpacked_struct_defi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Packed",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-03",
  "title": "Packed Union vs Tagged Union Data Modeling",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Packed Union vs Tagged Union Data Modeling'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module packed_union_vs_tagged_union_d (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Packed Union vs Tagged Union Data Modeling\n\nendmodule",
  "solutionCode": "module packed_union_vs_tagged_union_d (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Packed",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-04",
  "title": "Dynamic Array Allocation and Resizing",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Dynamic Array Allocation and Resizing'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module dynamic_array_allocation_and_r (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Dynamic Array Allocation and Resizing\n\nendmodule",
  "solutionCode": "module dynamic_array_allocation_and_r (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Dynamic",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-05",
  "title": "Associative Array with String Indexing",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Associative Array with String Indexing'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module associative_array_with_string_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Associative Array with String Indexing\n\nendmodule",
  "solutionCode": "module associative_array_with_string_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Associative",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-06",
  "title": "SystemVerilog Queue Operations (push_back, pop_front)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SystemVerilog Queue Operations (push_back, pop_front)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_queue_operations (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SystemVerilog Queue Operations (push_back, pop_front)\n\nendmodule",
  "solutionCode": "module systemverilog_queue_operations (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SystemVerilog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-07",
  "title": "Enum Data Types with Custom Encoding Values",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Enum Data Types with Custom Encoding Values'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module enum_data_types_with_custom_en (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Enum Data Types with Custom Encoding Values\n\nendmodule",
  "solutionCode": "module enum_data_types_with_custom_en (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Enum",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-08",
  "title": "Class Constructor and Object Instantiation with new()",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Class Constructor and Object Instantiation with new()'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module class_constructor_and_object_i (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Class Constructor and Object Instantiation with new()\n\nendmodule",
  "solutionCode": "module class_constructor_and_object_i (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Class",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-09",
  "title": "Inheritance and super.new() Class Extension",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Inheritance and super.new() Class Extension'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module inheritance_and_super_new___cl (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Inheritance and super.new() Class Extension\n\nendmodule",
  "solutionCode": "module inheritance_and_super_new___cl (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Inheritance",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-10",
  "title": "Virtual Functions and Dynamic Polymorphism",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Virtual Functions and Dynamic Polymorphism'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module virtual_functions_and_dynamic_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Virtual Functions and Dynamic Polymorphism\n\nendmodule",
  "solutionCode": "module virtual_functions_and_dynamic_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Virtual",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-11",
  "title": "Shallow Copy (new) vs Deep Copy Methods",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Shallow Copy (new) vs Deep Copy Methods'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module shallow_copy__new__vs_deep_cop (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Shallow Copy (new) vs Deep Copy Methods\n\nendmodule",
  "solutionCode": "module shallow_copy__new__vs_deep_cop (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Shallow",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-12",
  "title": "Abstract Base Class (pure virtual functions)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Abstract Base Class (pure virtual functions)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module abstract_base_class__pure_virt (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Abstract Base Class (pure virtual functions)\n\nendmodule",
  "solutionCode": "module abstract_base_class__pure_virt (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Abstract",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-13",
  "title": "Parameterized Class Definitions #(type T=int)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Parameterized Class Definitions #(type T=int)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module parameterized_class_definition (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Parameterized Class Definitions #(type T=int)\n\nendmodule",
  "solutionCode": "module parameterized_class_definition (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Parameterized",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-14",
  "title": "Static Class Properties and Static Methods",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Static Class Properties and Static Methods'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module static_class_properties_and_st (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Static Class Properties and Static Methods\n\nendmodule",
  "solutionCode": "module static_class_properties_and_st (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Static",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-15",
  "title": "Array of Class Handles Allocation and Garbage Collection",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Array of Class Handles Allocation and Garbage Collection'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module array_of_class_handles_allocat (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Array of Class Handles Allocation and Garbage Collection\n\nendmodule",
  "solutionCode": "module array_of_class_handles_allocat (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Array",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-16",
  "title": "Randomization rand and randc Variable Modifiers",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Randomization rand and randc Variable Modifiers'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module randomization_rand_and_randc_v (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Randomization rand and randc Variable Modifiers\n\nendmodule",
  "solutionCode": "module randomization_rand_and_randc_v (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Randomization",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-17",
  "title": "Constraint Block with inside Range Operator",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Constraint Block with inside Range Operator'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module constraint_block_with_inside_r (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Constraint Block with inside Range Operator\n\nendmodule",
  "solutionCode": "module constraint_block_with_inside_r (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Constraint",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-18",
  "title": "Inline Randomization Constraints (randomize() with {})",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Inline Randomization Constraints (randomize() with {})'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module inline_randomization_constrain (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Inline Randomization Constraints (randomize() with {})\n\nendmodule",
  "solutionCode": "module inline_randomization_constrain (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Inline",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-19",
  "title": "Solve...Before Constraint Dependency Ordering",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Solve...Before Constraint Dependency Ordering'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module solve___before_constraint_depe (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Solve...Before Constraint Dependency Ordering\n\nendmodule",
  "solutionCode": "module solve___before_constraint_depe (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Solve...Before",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-20",
  "title": "Distribution Constraints with dist Operator (:= and :/ weights)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Distribution Constraints with dist Operator (:= and :/ weights)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module distribution_constraints_with_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Distribution Constraints with dist Operator (:= and :/ weights)\n\nendmodule",
  "solutionCode": "module distribution_constraints_with_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Distribution",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-21",
  "title": "Soft Constraints (soft keyword override)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Soft Constraints (soft keyword override)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module soft_constraints__soft_keyword (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Soft Constraints (soft keyword override)\n\nendmodule",
  "solutionCode": "module soft_constraints__soft_keyword (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Soft",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-22",
  "title": "Array Randomization with foreach Loop Constraints",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Array Randomization with foreach Loop Constraints'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module array_randomization_with_forea (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Array Randomization with foreach Loop Constraints\n\nendmodule",
  "solutionCode": "module array_randomization_with_forea (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Array",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-23",
  "title": "Unique Constraint for Arrays (unique keyword)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Unique Constraint for Arrays (unique keyword)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module unique_constraint_for_arrays__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Unique Constraint for Arrays (unique keyword)\n\nendmodule",
  "solutionCode": "module unique_constraint_for_arrays__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Unique",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-24",
  "title": "pre_randomize() and post_randomize() Callback Hooks",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'pre_randomize() and post_randomize() Callback Hooks'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module pre_randomize___and_post_rando (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for pre_randomize() and post_randomize() Callback Hooks\n\nendmodule",
  "solutionCode": "module pre_randomize___and_post_rando (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "pre_randomize()",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-25",
  "title": "Covergroup Definition and Explicit .sample()",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Covergroup Definition and Explicit .sample()'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module covergroup_definition_and_expl (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Covergroup Definition and Explicit .sample()\n\nendmodule",
  "solutionCode": "module covergroup_definition_and_expl (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Covergroup",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-26",
  "title": "Coverpoint Bins Specification (explicit, default, auto)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Coverpoint Bins Specification (explicit, default, auto)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module coverpoint_bins_specification_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Coverpoint Bins Specification (explicit, default, auto)\n\nendmodule",
  "solutionCode": "module coverpoint_bins_specification_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Coverpoint",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-27",
  "title": "Cross Coverage Between Multiple Coverpoints",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Cross Coverage Between Multiple Coverpoints'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module cross_coverage_between_multipl (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Cross Coverage Between Multiple Coverpoints\n\nendmodule",
  "solutionCode": "module cross_coverage_between_multipl (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Cross",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-28",
  "title": "Transition Bins Specification (0 => 1 => 2 sequences)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Transition Bins Specification (0 => 1 => 2 sequences)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module transition_bins_specification_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Transition Bins Specification (0 => 1 => 2 sequences)\n\nendmodule",
  "solutionCode": "module transition_bins_specification_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
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
  "id": "sver-29",
  "title": "Wildcard Bins for Don't Care Bit Matching",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Wildcard Bins for Don't Care Bit Matching'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module wildcard_bins_for_don_t_care_b (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Wildcard Bins for Don't Care Bit Matching\n\nendmodule",
  "solutionCode": "module wildcard_bins_for_don_t_care_b (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Wildcard",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-30",
  "title": "Ignore Bins and Illegal Bins Specification",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Ignore Bins and Illegal Bins Specification'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module ignore_bins_and_illegal_bins_s (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Ignore Bins and Illegal Bins Specification\n\nendmodule",
  "solutionCode": "module ignore_bins_and_illegal_bins_s (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Ignore",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-31",
  "title": "Conditional Coverage Sampling with iff Guard Clause",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Conditional Coverage Sampling with iff Guard Clause'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module conditional_coverage_sampling_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Conditional Coverage Sampling with iff Guard Clause\n\nendmodule",
  "solutionCode": "module conditional_coverage_sampling_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Conditional",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-32",
  "title": "Immediate Assertion (assert, assume, cover)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Immediate Assertion (assert, assume, cover)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module immediate_assertion__assert__a (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Immediate Assertion (assert, assume, cover)\n\nendmodule",
  "solutionCode": "module immediate_assertion__assert__a (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Immediate",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-33",
  "title": "Deferred Immediate Assertion (assert #0 and assert final)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Deferred Immediate Assertion (assert #0 and assert final)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module deferred_immediate_assertion__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Deferred Immediate Assertion (assert #0 and assert final)\n\nendmodule",
  "solutionCode": "module deferred_immediate_assertion__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Deferred",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-34",
  "title": "SVA Implication Overlapping Operator (|->)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SVA Implication Overlapping Operator (|->)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_implication_overlapping_op (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA Implication Overlapping Operator (|->)\n\nendmodule",
  "solutionCode": "module sva_implication_overlapping_op (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-35",
  "title": "SVA Implication Non-Overlapping Operator (|=>)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SVA Implication Non-Overlapping Operator (|=>)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_implication_non_overlappin (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA Implication Non-Overlapping Operator (|=>)\n\nendmodule",
  "solutionCode": "module sva_implication_non_overlappin (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-36",
  "title": "SVA Consecutive Repetition Operator ([*n])",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SVA Consecutive Repetition Operator ([*n])'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_consecutive_repetition_ope (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA Consecutive Repetition Operator ([*n])\n\nendmodule",
  "solutionCode": "module sva_consecutive_repetition_ope (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-37",
  "title": "SVA Non-Consecutive Repetition Operator ([=n])",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SVA Non-Consecutive Repetition Operator ([=n])'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_non_consecutive_repetition (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA Non-Consecutive Repetition Operator ([=n])\n\nendmodule",
  "solutionCode": "module sva_non_consecutive_repetition (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-38",
  "title": "SVA Goto Repetition Operator ([->n])",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SVA Goto Repetition Operator ([->n])'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_goto_repetition_operator__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA Goto Repetition Operator ([->n])\n\nendmodule",
  "solutionCode": "module sva_goto_repetition_operator__ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-39",
  "title": "SVA Sequences with Local Variable Bindings",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SVA Sequences with Local Variable Bindings'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_sequences_with_local_varia (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA Sequences with Local Variable Bindings\n\nendmodule",
  "solutionCode": "module sva_sequences_with_local_varia (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-40",
  "title": "SVA Multi-Clock Domain Sequences",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SVA Multi-Clock Domain Sequences'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_multi_clock_domain_sequenc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA Multi-Clock Domain Sequences\n\nendmodule",
  "solutionCode": "module sva_multi_clock_domain_sequenc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-41",
  "title": "SVA disable iff Asynchronous Reset Filter",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SVA disable iff Asynchronous Reset Filter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_disable_iff_asynchronous_r (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA disable iff Asynchronous Reset Filter\n\nendmodule",
  "solutionCode": "module sva_disable_iff_asynchronous_r (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-42",
  "title": "SVA $rose, $fell, and $stable Functions",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SVA $rose, $fell, and $stable Functions'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva__rose___fell__and__stable_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA $rose, $fell, and $stable Functions\n\nendmodule",
  "solutionCode": "module sva__rose___fell__and__stable_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-43",
  "title": "SVA $past History Value Checker",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SVA $past History Value Checker'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva__past_history_value_checke (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA $past History Value Checker\n\nendmodule",
  "solutionCode": "module sva__past_history_value_checke (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-44",
  "title": "SVA $onehot and $onehot0 Functions",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SVA $onehot and $onehot0 Functions'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva__onehot_and__onehot0_funct (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA $onehot and $onehot0 Functions\n\nendmodule",
  "solutionCode": "module sva__onehot_and__onehot0_funct (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-45",
  "title": "SystemVerilog Mailbox Message Passing Queue",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SystemVerilog Mailbox Message Passing Queue'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_mailbox_message_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SystemVerilog Mailbox Message Passing Queue\n\nendmodule",
  "solutionCode": "module systemverilog_mailbox_message_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SystemVerilog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-46",
  "title": "Semaphore Key Allocation (get, put, try_get)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Semaphore Key Allocation (get, put, try_get)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module semaphore_key_allocation__get_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Semaphore Key Allocation (get, put, try_get)\n\nendmodule",
  "solutionCode": "module semaphore_key_allocation__get_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Semaphore",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-47",
  "title": "Named Event Triggering (-> and @) and Event .triggered",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Named Event Triggering (-> and @) and Event .triggered'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module named_event_triggering_____and (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Named Event Triggering (-> and @) and Event .triggered\n\nendmodule",
  "solutionCode": "module named_event_triggering_____and (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Named",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-48",
  "title": "Fork-Join Parallel Thread Execution",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Fork-Join Parallel Thread Execution'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module fork_join_parallel_thread_exec (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Fork-Join Parallel Thread Execution\n\nendmodule",
  "solutionCode": "module fork_join_parallel_thread_exec (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Fork-Join",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-49",
  "title": "Fork-Join_Any Thread Execution and First-Done Sync",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Fork-Join_Any Thread Execution and First-Done Sync'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module fork_join_any_thread_execution (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Fork-Join_Any Thread Execution and First-Done Sync\n\nendmodule",
  "solutionCode": "module fork_join_any_thread_execution (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Fork-Join_Any",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-50",
  "title": "Fork-Join_None Background Spawning Threads",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Fork-Join_None Background Spawning Threads'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module fork_join_none_background_spaw (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Fork-Join_None Background Spawning Threads\n\nendmodule",
  "solutionCode": "module fork_join_none_background_spaw (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Fork-Join_None",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-51",
  "title": "Disable Fork Thread Killer and wait fork Barrier",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Disable Fork Thread Killer and wait fork Barrier'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module disable_fork_thread_killer_and (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Disable Fork Thread Killer and wait fork Barrier\n\nendmodule",
  "solutionCode": "module disable_fork_thread_killer_and (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Disable",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-52",
  "title": "Program Block Testbench Isolation",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Program Block Testbench Isolation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module program_block_testbench_isolat (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Program Block Testbench Isolation\n\nendmodule",
  "solutionCode": "module program_block_testbench_isolat (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Program",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-53",
  "title": "Final Block End-of-Simulation Status Summary",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Final Block End-of-Simulation Status Summary'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module final_block_end_of_simulation_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Final Block End-of-Simulation Status Summary\n\nendmodule",
  "solutionCode": "module final_block_end_of_simulation_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Final",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-54",
  "title": "always_comb Synthesizable Combinational Block",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'always_comb Synthesizable Combinational Block'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module always_comb_synthesizable_comb (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for always_comb Synthesizable Combinational Block\n\nendmodule",
  "solutionCode": "module always_comb_synthesizable_comb (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "always_comb",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-55",
  "title": "always_ff Synthesizable Flip-Flop Sequential Block",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'always_ff Synthesizable Flip-Flop Sequential Block'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module always_ff_synthesizable_flip_f (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for always_ff Synthesizable Flip-Flop Sequential Block\n\nendmodule",
  "solutionCode": "module always_ff_synthesizable_flip_f (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "always_ff",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-56",
  "title": "always_latch Transparent Latch Inference Block",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'always_latch Transparent Latch Inference Block'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module always_latch_transparent_latch (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for always_latch Transparent Latch Inference Block\n\nendmodule",
  "solutionCode": "module always_latch_transparent_latch (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "always_latch",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-57",
  "title": "unique case and priority case Violations",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'unique case and priority case Violations'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module unique_case_and_priority_case_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for unique case and priority case Violations\n\nendmodule",
  "solutionCode": "module unique_case_and_priority_case_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "unique",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-58",
  "title": "inside Operator in Case Statements",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'inside Operator in Case Statements'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module inside_operator_in_case_statem (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for inside Operator in Case Statements\n\nendmodule",
  "solutionCode": "module inside_operator_in_case_statem (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "inside",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-59",
  "title": "Package Declaration, Import and Name Scoping",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Package Declaration, Import and Name Scoping'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module package_declaration__import_an (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Package Declaration, Import and Name Scoping\n\nendmodule",
  "solutionCode": "module package_declaration__import_an (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Package",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-60",
  "title": "Streaming Operators (Pack {>>} and Unpack {<<})",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Streaming Operators (Pack {>>} and Unpack {<<})'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module streaming_operators__pack_____ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Streaming Operators (Pack {>>} and Unpack {<<})\n\nendmodule",
  "solutionCode": "module streaming_operators__pack_____ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Streaming",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-61",
  "title": "Task and Function pass-by-ref Arguments",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Task and Function pass-by-ref Arguments'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module task_and_function_pass_by_ref_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Task and Function pass-by-ref Arguments\n\nendmodule",
  "solutionCode": "module task_and_function_pass_by_ref_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Task",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-62",
  "title": "Void Functions without Return Values",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Void Functions without Return Values'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module void_functions_without_return_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Void Functions without Return Values\n\nendmodule",
  "solutionCode": "module void_functions_without_return_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Void",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-63",
  "title": "System Function $clog2 for Address Bus Sizing",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'System Function $clog2 for Address Bus Sizing'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module system_function__clog2_for_add (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for System Function $clog2 for Address Bus Sizing\n\nendmodule",
  "solutionCode": "module system_function__clog2_for_add (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "System",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-64",
  "title": "System Function $countones for Parity Calculation",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'System Function $countones for Parity Calculation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module system_function__countones_for (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for System Function $countones for Parity Calculation\n\nendmodule",
  "solutionCode": "module system_function__countones_for (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "System",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-65",
  "title": "System Function $isunknown for X/Z Propagation Checks",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'System Function $isunknown for X/Z Propagation Checks'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module system_function__isunknown_for (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for System Function $isunknown for X/Z Propagation Checks\n\nendmodule",
  "solutionCode": "module system_function__isunknown_for (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "System",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-66",
  "title": "DPI-C Import C Function into SystemVerilog",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DPI-C Import C Function into SystemVerilog'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module dpi_c_import_c_function_into_s (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for DPI-C Import C Function into SystemVerilog\n\nendmodule",
  "solutionCode": "module dpi_c_import_c_function_into_s (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "DPI-C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-67",
  "title": "DPI-C Export SystemVerilog Task to C Code",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'DPI-C Export SystemVerilog Task to C Code'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module dpi_c_export_systemverilog_tas (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for DPI-C Export SystemVerilog Task to C Code\n\nendmodule",
  "solutionCode": "module dpi_c_export_systemverilog_tas (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "DPI-C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-68",
  "title": "SystemVerilog Bind Construct for SVA Module Attachment",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SystemVerilog Bind Construct for SVA Module Attachment'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_bind_construct_f (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SystemVerilog Bind Construct for SVA Module Attachment\n\nendmodule",
  "solutionCode": "module systemverilog_bind_construct_f (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SystemVerilog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-69",
  "title": "Timeunit and Timeprecision Compilation Scope",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Timeunit and Timeprecision Compilation Scope'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module timeunit_and_timeprecision_com (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Timeunit and Timeprecision Compilation Scope\n\nendmodule",
  "solutionCode": "module timeunit_and_timeprecision_com (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Timeunit",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-70",
  "title": "Const Ref Function Arguments for Read-Only Structs",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Const Ref Function Arguments for Read-Only Structs'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module const_ref_function_arguments_f (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Const Ref Function Arguments for Read-Only Structs\n\nendmodule",
  "solutionCode": "module const_ref_function_arguments_f (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Const",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-71",
  "title": "Alias Statement for Bidirectional Net Aliasing",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Alias Statement for Bidirectional Net Aliasing'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module alias_statement_for_bidirectio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Alias Statement for Bidirectional Net Aliasing\n\nendmodule",
  "solutionCode": "module alias_statement_for_bidirectio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Alias",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-72",
  "title": "Extern Method Declaration inside Classes",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Extern Method Declaration inside Classes'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module extern_method_declaration_insi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Extern Method Declaration inside Classes\n\nendmodule",
  "solutionCode": "module extern_method_declaration_insi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Extern",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-73",
  "title": "Nested and Local Class Definitions",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Nested and Local Class Definitions'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module nested_and_local_class_definit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Nested and Local Class Definitions\n\nendmodule",
  "solutionCode": "module nested_and_local_class_definit (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Nested",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-74",
  "title": "Typedef Forward Declarations",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Typedef Forward Declarations'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module typedef_forward_declarations (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Typedef Forward Declarations\n\nendmodule",
  "solutionCode": "module typedef_forward_declarations (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Typedef",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-75",
  "title": "Bit-Stream Operators on Nested Structs",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Bit-Stream Operators on Nested Structs'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module bit_stream_operators_on_nested (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Bit-Stream Operators on Nested Structs\n\nendmodule",
  "solutionCode": "module bit_stream_operators_on_nested (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Bit-Stream",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-76",
  "title": "Automatic Variables in Task Loops",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Automatic Variables in Task Loops'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module automatic_variables_in_task_lo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Automatic Variables in Task Loops\n\nendmodule",
  "solutionCode": "module automatic_variables_in_task_lo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Automatic",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-77",
  "title": "Covergroup Option Settings (at_least, auto_bin_max)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Covergroup Option Settings (at_least, auto_bin_max)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module covergroup_option_settings__at (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Covergroup Option Settings (at_least, auto_bin_max)\n\nendmodule",
  "solutionCode": "module covergroup_option_settings__at (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Covergroup",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-78",
  "title": "Cross Coverage with binsof and intersect Filters",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Cross Coverage with binsof and intersect Filters'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module cross_coverage_with_binsof_and (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Cross Coverage with binsof and intersect Filters\n\nendmodule",
  "solutionCode": "module cross_coverage_with_binsof_and (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Cross",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-79",
  "title": "SVA throughout Sequence Multi-Cycle Condition",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SVA throughout Sequence Multi-Cycle Condition'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_throughout_sequence_multi_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA throughout Sequence Multi-Cycle Condition\n\nendmodule",
  "solutionCode": "module sva_throughout_sequence_multi_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-80",
  "title": "SVA within Sequence Containment Operator",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SVA within Sequence Containment Operator'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_within_sequence_containmen (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA within Sequence Containment Operator\n\nendmodule",
  "solutionCode": "module sva_within_sequence_containmen (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-81",
  "title": "SVA intersect Sequence Alignment Operator",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SVA intersect Sequence Alignment Operator'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_intersect_sequence_alignme (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA intersect Sequence Alignment Operator\n\nendmodule",
  "solutionCode": "module sva_intersect_sequence_alignme (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-82",
  "title": "SVA matched Method on Sub-Sequences",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SVA matched Method on Sub-Sequences'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_matched_method_on_sub_sequ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA matched Method on Sub-Sequences\n\nendmodule",
  "solutionCode": "module sva_matched_method_on_sub_sequ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-83",
  "title": "SVA expect Statement for Procedural Sequences",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SVA expect Statement for Procedural Sequences'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_expect_statement_for_proce (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA expect Statement for Procedural Sequences\n\nendmodule",
  "solutionCode": "module sva_expect_statement_for_proce (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-84",
  "title": "SVA Property with Arguments and Default Values",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SVA Property with Arguments and Default Values'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module sva_property_with_arguments_an (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SVA Property with Arguments and Default Values\n\nendmodule",
  "solutionCode": "module sva_property_with_arguments_an (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SVA",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-85",
  "title": "SystemVerilog Macro Stringification (`\")",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SystemVerilog Macro Stringification (`\")'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_macro_stringific (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SystemVerilog Macro Stringification (`\")\n\nendmodule",
  "solutionCode": "module systemverilog_macro_stringific (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SystemVerilog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-86",
  "title": "SystemVerilog Macro Token Concatenation (``)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SystemVerilog Macro Token Concatenation (``)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_macro_token_conc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SystemVerilog Macro Token Concatenation (``)\n\nendmodule",
  "solutionCode": "module systemverilog_macro_token_conc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SystemVerilog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-87",
  "title": "SystemVerilog $cast Return Code Error Handling",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SystemVerilog $cast Return Code Error Handling'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog__cast_return_cod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SystemVerilog $cast Return Code Error Handling\n\nendmodule",
  "solutionCode": "module systemverilog__cast_return_cod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SystemVerilog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-88",
  "title": "Random Stability and RNG Process Seeding",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Random Stability and RNG Process Seeding'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module random_stability_and_rng_proce (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Random Stability and RNG Process Seeding\n\nendmodule",
  "solutionCode": "module random_stability_and_rng_proce (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Random",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-89",
  "title": "std::randomize() Function for Standalone Variables",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'std::randomize() Function for Standalone Variables'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module std__randomize___function_for_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for std::randomize() Function for Standalone Variables\n\nendmodule",
  "solutionCode": "module std__randomize___function_for_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "std::randomize()",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-90",
  "title": "Dynamic Array Slicing and Assignment",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Dynamic Array Slicing and Assignment'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module dynamic_array_slicing_and_assi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Dynamic Array Slicing and Assignment\n\nendmodule",
  "solutionCode": "module dynamic_array_slicing_and_assi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Dynamic",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-91",
  "title": "Queue Built-in Methods (delete, insert, size)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Queue Built-in Methods (delete, insert, size)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module queue_built_in_methods__delete (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Queue Built-in Methods (delete, insert, size)\n\nendmodule",
  "solutionCode": "module queue_built_in_methods__delete (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Queue",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-92",
  "title": "Associative Array Methods (first, next, prev, last)",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Associative Array Methods (first, next, prev, last)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module associative_array_methods__fir (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for Associative Array Methods (first, next, prev, last)\n\nendmodule",
  "solutionCode": "module associative_array_methods__fir (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "Associative",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-93",
  "title": "DPI-C Open Array Arguments Handling",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'DPI-C Open Array Arguments Handling'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module dpi_c_open_array_arguments_han (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for DPI-C Open Array Arguments Handling\n\nendmodule",
  "solutionCode": "module dpi_c_open_array_arguments_han (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "DPI-C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-94",
  "title": "SystemVerilog Comprehensive Verification Top Module",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SystemVerilog Comprehensive Verification Top Module'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_comprehensive_ve (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SystemVerilog Comprehensive Verification Top Module\n\nendmodule",
  "solutionCode": "module systemverilog_comprehensive_ve (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SystemVerilog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-95",
  "title": "SYSTEMVERILOG Low-Power Design Part 1: Unit 95",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Low-Power Design Part 1: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Low-Power Design Part 1: Unit 95\n\nendmodule",
  "solutionCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-96",
  "title": "SYSTEMVERILOG Timing Closure Part 1: Unit 96",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Timing Closure Part 1: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Timing Closure Part 1: Unit 96\n\nendmodule",
  "solutionCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-97",
  "title": "SYSTEMVERILOG Resource Sharing Part 1: Unit 97",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Resource Sharing Part 1: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Resource Sharing Part 1: Unit 97\n\nendmodule",
  "solutionCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-98",
  "title": "SYSTEMVERILOG Fault Tolerance Part 1: Unit 98",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Fault Tolerance Part 1: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Fault Tolerance Part 1: Unit 98\n\nendmodule",
  "solutionCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-99",
  "title": "SYSTEMVERILOG Verification Testbench Part 1: Unit 99",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Verification Testbench Part 1: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Verification Testbench Part 1: Unit 99\n\nendmodule",
  "solutionCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-100",
  "title": "SYSTEMVERILOG Hardware Acceleration Part 1: Unit 100",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Hardware Acceleration Part 1: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Hardware Acceleration Part 1: Unit 100\n\nendmodule",
  "solutionCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-101",
  "title": "SYSTEMVERILOG Data Flow Control Part 1: Unit 101",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Data Flow Control Part 1: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Data Flow Control Part 1: Unit 101\n\nendmodule",
  "solutionCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-102",
  "title": "SYSTEMVERILOG Corner Case Analysis Part 1: Unit 102",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Corner Case Analysis Part 1: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Corner Case Analysis Part 1: Unit 102\n\nendmodule",
  "solutionCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-103",
  "title": "SYSTEMVERILOG Bandwidth Maximizer Part 1: Unit 103",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Bandwidth Maximizer Part 1: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Bandwidth Maximizer Part 1: Unit 103\n\nendmodule",
  "solutionCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-104",
  "title": "SYSTEMVERILOG Latency Reduction Part 1: Unit 104",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Latency Reduction Part 1: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Latency Reduction Part 1: Unit 104\n\nendmodule",
  "solutionCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-105",
  "title": "SYSTEMVERILOG CDC Isolation Part 1: Unit 105",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG CDC Isolation Part 1: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG CDC Isolation Part 1: Unit 105\n\nendmodule",
  "solutionCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-106",
  "title": "SYSTEMVERILOG Error Handling Part 1: Unit 106",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Error Handling Part 1: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Error Handling Part 1: Unit 106\n\nendmodule",
  "solutionCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-107",
  "title": "SYSTEMVERILOG High-Speed Encoding Part 1: Unit 107",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG High-Speed Encoding Part 1: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG High-Speed Encoding Part 1: Unit 107\n\nendmodule",
  "solutionCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-108",
  "title": "SYSTEMVERILOG Synthesizable Model Part 1: Unit 108",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Synthesizable Model Part 1: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Synthesizable Model Part 1: Unit 108\n\nendmodule",
  "solutionCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-109",
  "title": "SYSTEMVERILOG Optimization Part 2: Unit 109",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Optimization Part 2: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Optimization Part 2: Unit 109\n\nendmodule",
  "solutionCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-110",
  "title": "SYSTEMVERILOG Architecture Part 2: Unit 110",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Architecture Part 2: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Architecture Part 2: Unit 110\n\nendmodule",
  "solutionCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-111",
  "title": "SYSTEMVERILOG Pipeline Stage Part 2: Unit 111",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Pipeline Stage Part 2: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Pipeline Stage Part 2: Unit 111\n\nendmodule",
  "solutionCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-112",
  "title": "SYSTEMVERILOG Interface Protocol Part 2: Unit 112",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Interface Protocol Part 2: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Interface Protocol Part 2: Unit 112\n\nendmodule",
  "solutionCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-113",
  "title": "SYSTEMVERILOG Low-Power Design Part 2: Unit 113",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Low-Power Design Part 2: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Low-Power Design Part 2: Unit 113\n\nendmodule",
  "solutionCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-114",
  "title": "SYSTEMVERILOG Timing Closure Part 2: Unit 114",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Timing Closure Part 2: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Timing Closure Part 2: Unit 114\n\nendmodule",
  "solutionCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-115",
  "title": "SYSTEMVERILOG Resource Sharing Part 2: Unit 115",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Resource Sharing Part 2: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Resource Sharing Part 2: Unit 115\n\nendmodule",
  "solutionCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-116",
  "title": "SYSTEMVERILOG Fault Tolerance Part 2: Unit 116",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Fault Tolerance Part 2: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Fault Tolerance Part 2: Unit 116\n\nendmodule",
  "solutionCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-117",
  "title": "SYSTEMVERILOG Verification Testbench Part 2: Unit 117",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Verification Testbench Part 2: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Verification Testbench Part 2: Unit 117\n\nendmodule",
  "solutionCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-118",
  "title": "SYSTEMVERILOG Hardware Acceleration Part 2: Unit 118",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Hardware Acceleration Part 2: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Hardware Acceleration Part 2: Unit 118\n\nendmodule",
  "solutionCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-119",
  "title": "SYSTEMVERILOG Data Flow Control Part 2: Unit 119",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Data Flow Control Part 2: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Data Flow Control Part 2: Unit 119\n\nendmodule",
  "solutionCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-120",
  "title": "SYSTEMVERILOG Corner Case Analysis Part 2: Unit 120",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Corner Case Analysis Part 2: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Corner Case Analysis Part 2: Unit 120\n\nendmodule",
  "solutionCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-121",
  "title": "SYSTEMVERILOG Bandwidth Maximizer Part 2: Unit 121",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Bandwidth Maximizer Part 2: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Bandwidth Maximizer Part 2: Unit 121\n\nendmodule",
  "solutionCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-122",
  "title": "SYSTEMVERILOG Latency Reduction Part 2: Unit 122",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Latency Reduction Part 2: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Latency Reduction Part 2: Unit 122\n\nendmodule",
  "solutionCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-123",
  "title": "SYSTEMVERILOG CDC Isolation Part 2: Unit 123",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG CDC Isolation Part 2: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG CDC Isolation Part 2: Unit 123\n\nendmodule",
  "solutionCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-124",
  "title": "SYSTEMVERILOG Error Handling Part 2: Unit 124",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Error Handling Part 2: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Error Handling Part 2: Unit 124\n\nendmodule",
  "solutionCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-125",
  "title": "SYSTEMVERILOG High-Speed Encoding Part 2: Unit 125",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG High-Speed Encoding Part 2: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG High-Speed Encoding Part 2: Unit 125\n\nendmodule",
  "solutionCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-126",
  "title": "SYSTEMVERILOG Synthesizable Model Part 2: Unit 126",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Synthesizable Model Part 2: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Synthesizable Model Part 2: Unit 126\n\nendmodule",
  "solutionCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-127",
  "title": "SYSTEMVERILOG Optimization Part 3: Unit 127",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Optimization Part 3: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Optimization Part 3: Unit 127\n\nendmodule",
  "solutionCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-128",
  "title": "SYSTEMVERILOG Architecture Part 3: Unit 128",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Architecture Part 3: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Architecture Part 3: Unit 128\n\nendmodule",
  "solutionCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-129",
  "title": "SYSTEMVERILOG Pipeline Stage Part 3: Unit 129",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Pipeline Stage Part 3: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Pipeline Stage Part 3: Unit 129\n\nendmodule",
  "solutionCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-130",
  "title": "SYSTEMVERILOG Interface Protocol Part 3: Unit 130",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Interface Protocol Part 3: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Interface Protocol Part 3: Unit 130\n\nendmodule",
  "solutionCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-131",
  "title": "SYSTEMVERILOG Low-Power Design Part 3: Unit 131",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Low-Power Design Part 3: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Low-Power Design Part 3: Unit 131\n\nendmodule",
  "solutionCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-132",
  "title": "SYSTEMVERILOG Timing Closure Part 3: Unit 132",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Timing Closure Part 3: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Timing Closure Part 3: Unit 132\n\nendmodule",
  "solutionCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-133",
  "title": "SYSTEMVERILOG Resource Sharing Part 3: Unit 133",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Resource Sharing Part 3: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Resource Sharing Part 3: Unit 133\n\nendmodule",
  "solutionCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-134",
  "title": "SYSTEMVERILOG Fault Tolerance Part 3: Unit 134",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Fault Tolerance Part 3: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Fault Tolerance Part 3: Unit 134\n\nendmodule",
  "solutionCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-135",
  "title": "SYSTEMVERILOG Verification Testbench Part 3: Unit 135",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Verification Testbench Part 3: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Verification Testbench Part 3: Unit 135\n\nendmodule",
  "solutionCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-136",
  "title": "SYSTEMVERILOG Hardware Acceleration Part 3: Unit 136",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Hardware Acceleration Part 3: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Hardware Acceleration Part 3: Unit 136\n\nendmodule",
  "solutionCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-137",
  "title": "SYSTEMVERILOG Data Flow Control Part 3: Unit 137",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Data Flow Control Part 3: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Data Flow Control Part 3: Unit 137\n\nendmodule",
  "solutionCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-138",
  "title": "SYSTEMVERILOG Corner Case Analysis Part 3: Unit 138",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Corner Case Analysis Part 3: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Corner Case Analysis Part 3: Unit 138\n\nendmodule",
  "solutionCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-139",
  "title": "SYSTEMVERILOG Bandwidth Maximizer Part 3: Unit 139",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Bandwidth Maximizer Part 3: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Bandwidth Maximizer Part 3: Unit 139\n\nendmodule",
  "solutionCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-140",
  "title": "SYSTEMVERILOG Latency Reduction Part 3: Unit 140",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Latency Reduction Part 3: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Latency Reduction Part 3: Unit 140\n\nendmodule",
  "solutionCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-141",
  "title": "SYSTEMVERILOG CDC Isolation Part 3: Unit 141",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG CDC Isolation Part 3: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG CDC Isolation Part 3: Unit 141\n\nendmodule",
  "solutionCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-142",
  "title": "SYSTEMVERILOG Error Handling Part 3: Unit 142",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Error Handling Part 3: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Error Handling Part 3: Unit 142\n\nendmodule",
  "solutionCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-143",
  "title": "SYSTEMVERILOG High-Speed Encoding Part 3: Unit 143",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG High-Speed Encoding Part 3: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG High-Speed Encoding Part 3: Unit 143\n\nendmodule",
  "solutionCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-144",
  "title": "SYSTEMVERILOG Synthesizable Model Part 3: Unit 144",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Synthesizable Model Part 3: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Synthesizable Model Part 3: Unit 144\n\nendmodule",
  "solutionCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-145",
  "title": "SYSTEMVERILOG Optimization Part 4: Unit 145",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Optimization Part 4: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Optimization Part 4: Unit 145\n\nendmodule",
  "solutionCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-146",
  "title": "SYSTEMVERILOG Architecture Part 4: Unit 146",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Architecture Part 4: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Architecture Part 4: Unit 146\n\nendmodule",
  "solutionCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-147",
  "title": "SYSTEMVERILOG Pipeline Stage Part 4: Unit 147",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Pipeline Stage Part 4: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Pipeline Stage Part 4: Unit 147\n\nendmodule",
  "solutionCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-148",
  "title": "SYSTEMVERILOG Interface Protocol Part 4: Unit 148",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Interface Protocol Part 4: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Interface Protocol Part 4: Unit 148\n\nendmodule",
  "solutionCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-149",
  "title": "SYSTEMVERILOG Low-Power Design Part 4: Unit 149",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Low-Power Design Part 4: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Low-Power Design Part 4: Unit 149\n\nendmodule",
  "solutionCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-150",
  "title": "SYSTEMVERILOG Timing Closure Part 4: Unit 150",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Timing Closure Part 4: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Timing Closure Part 4: Unit 150\n\nendmodule",
  "solutionCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-151",
  "title": "SYSTEMVERILOG Resource Sharing Part 4: Unit 151",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Resource Sharing Part 4: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Resource Sharing Part 4: Unit 151\n\nendmodule",
  "solutionCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-152",
  "title": "SYSTEMVERILOG Fault Tolerance Part 4: Unit 152",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Fault Tolerance Part 4: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Fault Tolerance Part 4: Unit 152\n\nendmodule",
  "solutionCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-153",
  "title": "SYSTEMVERILOG Verification Testbench Part 4: Unit 153",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Verification Testbench Part 4: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Verification Testbench Part 4: Unit 153\n\nendmodule",
  "solutionCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-154",
  "title": "SYSTEMVERILOG Hardware Acceleration Part 4: Unit 154",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Hardware Acceleration Part 4: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Hardware Acceleration Part 4: Unit 154\n\nendmodule",
  "solutionCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-155",
  "title": "SYSTEMVERILOG Data Flow Control Part 4: Unit 155",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Data Flow Control Part 4: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Data Flow Control Part 4: Unit 155\n\nendmodule",
  "solutionCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-156",
  "title": "SYSTEMVERILOG Corner Case Analysis Part 4: Unit 156",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Corner Case Analysis Part 4: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Corner Case Analysis Part 4: Unit 156\n\nendmodule",
  "solutionCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-157",
  "title": "SYSTEMVERILOG Bandwidth Maximizer Part 4: Unit 157",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Bandwidth Maximizer Part 4: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Bandwidth Maximizer Part 4: Unit 157\n\nendmodule",
  "solutionCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-158",
  "title": "SYSTEMVERILOG Latency Reduction Part 4: Unit 158",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Latency Reduction Part 4: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Latency Reduction Part 4: Unit 158\n\nendmodule",
  "solutionCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-159",
  "title": "SYSTEMVERILOG CDC Isolation Part 4: Unit 159",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG CDC Isolation Part 4: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG CDC Isolation Part 4: Unit 159\n\nendmodule",
  "solutionCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-160",
  "title": "SYSTEMVERILOG Error Handling Part 4: Unit 160",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Error Handling Part 4: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Error Handling Part 4: Unit 160\n\nendmodule",
  "solutionCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-161",
  "title": "SYSTEMVERILOG High-Speed Encoding Part 4: Unit 161",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG High-Speed Encoding Part 4: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG High-Speed Encoding Part 4: Unit 161\n\nendmodule",
  "solutionCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-162",
  "title": "SYSTEMVERILOG Synthesizable Model Part 4: Unit 162",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Synthesizable Model Part 4: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Synthesizable Model Part 4: Unit 162\n\nendmodule",
  "solutionCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-163",
  "title": "SYSTEMVERILOG Optimization Part 5: Unit 163",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Optimization Part 5: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Optimization Part 5: Unit 163\n\nendmodule",
  "solutionCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-164",
  "title": "SYSTEMVERILOG Architecture Part 5: Unit 164",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Architecture Part 5: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Architecture Part 5: Unit 164\n\nendmodule",
  "solutionCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-165",
  "title": "SYSTEMVERILOG Pipeline Stage Part 5: Unit 165",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Pipeline Stage Part 5: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Pipeline Stage Part 5: Unit 165\n\nendmodule",
  "solutionCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-166",
  "title": "SYSTEMVERILOG Interface Protocol Part 5: Unit 166",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Interface Protocol Part 5: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Interface Protocol Part 5: Unit 166\n\nendmodule",
  "solutionCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-167",
  "title": "SYSTEMVERILOG Low-Power Design Part 5: Unit 167",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Low-Power Design Part 5: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Low-Power Design Part 5: Unit 167\n\nendmodule",
  "solutionCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-168",
  "title": "SYSTEMVERILOG Timing Closure Part 5: Unit 168",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Timing Closure Part 5: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Timing Closure Part 5: Unit 168\n\nendmodule",
  "solutionCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-169",
  "title": "SYSTEMVERILOG Resource Sharing Part 5: Unit 169",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Resource Sharing Part 5: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Resource Sharing Part 5: Unit 169\n\nendmodule",
  "solutionCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-170",
  "title": "SYSTEMVERILOG Fault Tolerance Part 5: Unit 170",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Fault Tolerance Part 5: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Fault Tolerance Part 5: Unit 170\n\nendmodule",
  "solutionCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-171",
  "title": "SYSTEMVERILOG Verification Testbench Part 5: Unit 171",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Verification Testbench Part 5: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Verification Testbench Part 5: Unit 171\n\nendmodule",
  "solutionCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-172",
  "title": "SYSTEMVERILOG Hardware Acceleration Part 5: Unit 172",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Hardware Acceleration Part 5: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Hardware Acceleration Part 5: Unit 172\n\nendmodule",
  "solutionCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-173",
  "title": "SYSTEMVERILOG Data Flow Control Part 5: Unit 173",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Data Flow Control Part 5: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Data Flow Control Part 5: Unit 173\n\nendmodule",
  "solutionCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-174",
  "title": "SYSTEMVERILOG Corner Case Analysis Part 5: Unit 174",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Corner Case Analysis Part 5: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Corner Case Analysis Part 5: Unit 174\n\nendmodule",
  "solutionCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-175",
  "title": "SYSTEMVERILOG Bandwidth Maximizer Part 5: Unit 175",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Bandwidth Maximizer Part 5: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Bandwidth Maximizer Part 5: Unit 175\n\nendmodule",
  "solutionCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-176",
  "title": "SYSTEMVERILOG Latency Reduction Part 5: Unit 176",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Latency Reduction Part 5: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Latency Reduction Part 5: Unit 176\n\nendmodule",
  "solutionCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-177",
  "title": "SYSTEMVERILOG CDC Isolation Part 5: Unit 177",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG CDC Isolation Part 5: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG CDC Isolation Part 5: Unit 177\n\nendmodule",
  "solutionCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-178",
  "title": "SYSTEMVERILOG Error Handling Part 5: Unit 178",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Error Handling Part 5: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Error Handling Part 5: Unit 178\n\nendmodule",
  "solutionCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-179",
  "title": "SYSTEMVERILOG High-Speed Encoding Part 5: Unit 179",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG High-Speed Encoding Part 5: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG High-Speed Encoding Part 5: Unit 179\n\nendmodule",
  "solutionCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-180",
  "title": "SYSTEMVERILOG Synthesizable Model Part 5: Unit 180",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Synthesizable Model Part 5: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Synthesizable Model Part 5: Unit 180\n\nendmodule",
  "solutionCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-181",
  "title": "SYSTEMVERILOG Optimization Part 6: Unit 181",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Optimization Part 6: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Optimization Part 6: Unit 181\n\nendmodule",
  "solutionCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-182",
  "title": "SYSTEMVERILOG Architecture Part 6: Unit 182",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Architecture Part 6: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Architecture Part 6: Unit 182\n\nendmodule",
  "solutionCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-183",
  "title": "SYSTEMVERILOG Pipeline Stage Part 6: Unit 183",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Pipeline Stage Part 6: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Pipeline Stage Part 6: Unit 183\n\nendmodule",
  "solutionCode": "module systemverilog_pipeline_stage_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-184",
  "title": "SYSTEMVERILOG Interface Protocol Part 6: Unit 184",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Interface Protocol Part 6: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Interface Protocol Part 6: Unit 184\n\nendmodule",
  "solutionCode": "module systemverilog_interface_protoc (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-185",
  "title": "SYSTEMVERILOG Low-Power Design Part 6: Unit 185",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Low-Power Design Part 6: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Low-Power Design Part 6: Unit 185\n\nendmodule",
  "solutionCode": "module systemverilog_low_power_design (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-186",
  "title": "SYSTEMVERILOG Timing Closure Part 6: Unit 186",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Timing Closure Part 6: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Timing Closure Part 6: Unit 186\n\nendmodule",
  "solutionCode": "module systemverilog_timing_closure_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-187",
  "title": "SYSTEMVERILOG Resource Sharing Part 6: Unit 187",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Resource Sharing Part 6: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Resource Sharing Part 6: Unit 187\n\nendmodule",
  "solutionCode": "module systemverilog_resource_sharing (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-188",
  "title": "SYSTEMVERILOG Fault Tolerance Part 6: Unit 188",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Fault Tolerance Part 6: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Fault Tolerance Part 6: Unit 188\n\nendmodule",
  "solutionCode": "module systemverilog_fault_tolerance_ (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-189",
  "title": "SYSTEMVERILOG Verification Testbench Part 6: Unit 189",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Verification Testbench Part 6: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Verification Testbench Part 6: Unit 189\n\nendmodule",
  "solutionCode": "module systemverilog_verification_tes (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-190",
  "title": "SYSTEMVERILOG Hardware Acceleration Part 6: Unit 190",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Hardware Acceleration Part 6: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Hardware Acceleration Part 6: Unit 190\n\nendmodule",
  "solutionCode": "module systemverilog_hardware_acceler (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-191",
  "title": "SYSTEMVERILOG Data Flow Control Part 6: Unit 191",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Data Flow Control Part 6: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Data Flow Control Part 6: Unit 191\n\nendmodule",
  "solutionCode": "module systemverilog_data_flow_contro (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-192",
  "title": "SYSTEMVERILOG Corner Case Analysis Part 6: Unit 192",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Corner Case Analysis Part 6: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Corner Case Analysis Part 6: Unit 192\n\nendmodule",
  "solutionCode": "module systemverilog_corner_case_anal (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-193",
  "title": "SYSTEMVERILOG Bandwidth Maximizer Part 6: Unit 193",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Bandwidth Maximizer Part 6: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Bandwidth Maximizer Part 6: Unit 193\n\nendmodule",
  "solutionCode": "module systemverilog_bandwidth_maximi (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-194",
  "title": "SYSTEMVERILOG Latency Reduction Part 6: Unit 194",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Latency Reduction Part 6: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Latency Reduction Part 6: Unit 194\n\nendmodule",
  "solutionCode": "module systemverilog_latency_reductio (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-195",
  "title": "SYSTEMVERILOG CDC Isolation Part 6: Unit 195",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG CDC Isolation Part 6: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG CDC Isolation Part 6: Unit 195\n\nendmodule",
  "solutionCode": "module systemverilog_cdc_isolation_pa (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-196",
  "title": "SYSTEMVERILOG Error Handling Part 6: Unit 196",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Error Handling Part 6: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Error Handling Part 6: Unit 196\n\nendmodule",
  "solutionCode": "module systemverilog_error_handling_p (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-197",
  "title": "SYSTEMVERILOG High-Speed Encoding Part 6: Unit 197",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG High-Speed Encoding Part 6: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG High-Speed Encoding Part 6: Unit 197\n\nendmodule",
  "solutionCode": "module systemverilog_high_speed_encod (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-198",
  "title": "SYSTEMVERILOG Synthesizable Model Part 6: Unit 198",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Synthesizable Model Part 6: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Synthesizable Model Part 6: Unit 198\n\nendmodule",
  "solutionCode": "module systemverilog_synthesizable_mo (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-199",
  "title": "SYSTEMVERILOG Optimization Part 7: Unit 199",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Optimization Part 7: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Optimization Part 7: Unit 199\n\nendmodule",
  "solutionCode": "module systemverilog_optimization_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "sver-200",
  "title": "SYSTEMVERILOG Architecture Part 7: Unit 200",
  "topic": "systemverilog",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SYSTEMVERILOG Architecture Part 7: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Define IEEE 1800 SystemVerilog construct.\nStep 2: Use always_ff / always_comb or OOP verification classes.\nStep 3: Ensure 4-state / 2-state type safety.",
  "starterCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    // TODO: Implement SystemVerilog logic for SYSTEMVERILOG Architecture Part 7: Unit 200\n\nendmodule",
  "solutionCode": "module systemverilog_architecture_par (\n    input logic clk,\n    input logic rst_n,\n    input logic [7:0] data_in,\n    output logic [7:0] data_out\n);\n    always_ff @(posedge clk or negedge rst_n) begin\n        if (!rst_n)\n            data_out <= '0;\n        else\n            data_out <= data_in;\n    end\nendmodule",
  "hints": [
    "Use SystemVerilog `always_ff` and `always_comb` constructs.",
    "Use '0 or '1 unbased unsized literals for flexible bit-widths."
  ],
  "tags": [
    "SYSTEMVERILOG",
    "SYSTEMVERILOG",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
