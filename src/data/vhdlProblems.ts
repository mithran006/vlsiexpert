import { Problem } from '../types';

export const VHDL_PROBLEMS: Problem[] = [
{
  "id": "vhdl-01",
  "title": "VHDL Entity & Architecture Mux 2:1",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Entity & Architecture Mux 2:1'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_entity___architecture_mux is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_entity___architecture_mux;\n\narchitecture Behavioral of vhdl_entity___architecture_mux is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Entity & Architecture Mux 2:1\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_entity___architecture_mux is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_entity___architecture_mux;\n\narchitecture Behavioral of vhdl_entity___architecture_mux is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-02",
  "title": "VHDL std_logic vs std_ulogic Types",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL std_logic vs std_ulogic Types'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_std_logic_vs_std_ulogic_t is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_std_logic_vs_std_ulogic_t;\n\narchitecture Behavioral of vhdl_std_logic_vs_std_ulogic_t is\nbegin\n    -- TODO: Write VHDL architecture for VHDL std_logic vs std_ulogic Types\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_std_logic_vs_std_ulogic_t is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_std_logic_vs_std_ulogic_t;\n\narchitecture Behavioral of vhdl_std_logic_vs_std_ulogic_t is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-03",
  "title": "VHDL Selected Signal Assignment (with...select)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Selected Signal Assignment (with...select)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_selected_signal_assignmen is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_selected_signal_assignmen;\n\narchitecture Behavioral of vhdl_selected_signal_assignmen is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Selected Signal Assignment (with...select)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_selected_signal_assignmen is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_selected_signal_assignmen;\n\narchitecture Behavioral of vhdl_selected_signal_assignmen is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-04",
  "title": "VHDL Conditional Signal Assignment (when...else)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Conditional Signal Assignment (when...else)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_conditional_signal_assign is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_conditional_signal_assign;\n\narchitecture Behavioral of vhdl_conditional_signal_assign is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Conditional Signal Assignment (when...else)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_conditional_signal_assign is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_conditional_signal_assign;\n\narchitecture Behavioral of vhdl_conditional_signal_assign is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-05",
  "title": "VHDL Process Block Sensitivity List Rules",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Process Block Sensitivity List Rules'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_process_block_sensitivity is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_process_block_sensitivity;\n\narchitecture Behavioral of vhdl_process_block_sensitivity is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Process Block Sensitivity List Rules\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_process_block_sensitivity is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_process_block_sensitivity;\n\narchitecture Behavioral of vhdl_process_block_sensitivity is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-06",
  "title": "VHDL 4-bit Ripple Carry Adder",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL 4-bit Ripple Carry Adder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_4_bit_ripple_carry_adder is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_4_bit_ripple_carry_adder;\n\narchitecture Behavioral of vhdl_4_bit_ripple_carry_adder is\nbegin\n    -- TODO: Write VHDL architecture for VHDL 4-bit Ripple Carry Adder\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_4_bit_ripple_carry_adder is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_4_bit_ripple_carry_adder;\n\narchitecture Behavioral of vhdl_4_bit_ripple_carry_adder is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-07",
  "title": "VHDL Full Adder Component Instantiation",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Full Adder Component Instantiation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_full_adder_component_inst is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_full_adder_component_inst;\n\narchitecture Behavioral of vhdl_full_adder_component_inst is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Full Adder Component Instantiation\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_full_adder_component_inst is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_full_adder_component_inst;\n\narchitecture Behavioral of vhdl_full_adder_component_inst is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-08",
  "title": "VHDL D Flip-Flop with Asynchronous Reset",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL D Flip-Flop with Asynchronous Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_d_flip_flop_with_asynchro is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_d_flip_flop_with_asynchro;\n\narchitecture Behavioral of vhdl_d_flip_flop_with_asynchro is\nbegin\n    -- TODO: Write VHDL architecture for VHDL D Flip-Flop with Asynchronous Reset\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_d_flip_flop_with_asynchro is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_d_flip_flop_with_asynchro;\n\narchitecture Behavioral of vhdl_d_flip_flop_with_asynchro is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-09",
  "title": "VHDL D Flip-Flop with Synchronous Reset",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL D Flip-Flop with Synchronous Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_d_flip_flop_with_synchron is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_d_flip_flop_with_synchron;\n\narchitecture Behavioral of vhdl_d_flip_flop_with_synchron is\nbegin\n    -- TODO: Write VHDL architecture for VHDL D Flip-Flop with Synchronous Reset\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_d_flip_flop_with_synchron is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_d_flip_flop_with_synchron;\n\narchitecture Behavioral of vhdl_d_flip_flop_with_synchron is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-10",
  "title": "VHDL T Flip-Flop with Clock Enable",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL T Flip-Flop with Clock Enable'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_t_flip_flop_with_clock_en is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_t_flip_flop_with_clock_en;\n\narchitecture Behavioral of vhdl_t_flip_flop_with_clock_en is\nbegin\n    -- TODO: Write VHDL architecture for VHDL T Flip-Flop with Clock Enable\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_t_flip_flop_with_clock_en is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_t_flip_flop_with_clock_en;\n\narchitecture Behavioral of vhdl_t_flip_flop_with_clock_en is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-11",
  "title": "VHDL 4-bit Up Counter with Reset",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL 4-bit Up Counter with Reset'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_4_bit_up_counter_with_res is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_4_bit_up_counter_with_res;\n\narchitecture Behavioral of vhdl_4_bit_up_counter_with_res is\nbegin\n    -- TODO: Write VHDL architecture for VHDL 4-bit Up Counter with Reset\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_4_bit_up_counter_with_res is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_4_bit_up_counter_with_res;\n\narchitecture Behavioral of vhdl_4_bit_up_counter_with_res is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-12",
  "title": "VHDL 4-bit Up/Down Counter with Load",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL 4-bit Up/Down Counter with Load'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_4_bit_up_down_counter_wit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_4_bit_up_down_counter_wit;\n\narchitecture Behavioral of vhdl_4_bit_up_down_counter_wit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL 4-bit Up/Down Counter with Load\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_4_bit_up_down_counter_wit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_4_bit_up_down_counter_wit;\n\narchitecture Behavioral of vhdl_4_bit_up_down_counter_wit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-13",
  "title": "VHDL Modulo-10 Decade Counter",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Modulo-10 Decade Counter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_modulo_10_decade_counter is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_modulo_10_decade_counter;\n\narchitecture Behavioral of vhdl_modulo_10_decade_counter is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Modulo-10 Decade Counter\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_modulo_10_decade_counter is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_modulo_10_decade_counter;\n\narchitecture Behavioral of vhdl_modulo_10_decade_counter is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-14",
  "title": "VHDL Shift Register (SIPO 4-bit)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Shift Register (SIPO 4-bit)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_shift_register__sipo_4_bi is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_shift_register__sipo_4_bi;\n\narchitecture Behavioral of vhdl_shift_register__sipo_4_bi is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Shift Register (SIPO 4-bit)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_shift_register__sipo_4_bi is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_shift_register__sipo_4_bi;\n\narchitecture Behavioral of vhdl_shift_register__sipo_4_bi is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-15",
  "title": "VHDL Universal Shift Register 4-bit",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Universal Shift Register 4-bit'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_universal_shift_register_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_universal_shift_register_;\n\narchitecture Behavioral of vhdl_universal_shift_register_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Universal Shift Register 4-bit\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_universal_shift_register_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_universal_shift_register_;\n\narchitecture Behavioral of vhdl_universal_shift_register_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-16",
  "title": "VHDL Barrel Shifter Logical Right",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Barrel Shifter Logical Right'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_barrel_shifter_logical_ri is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_barrel_shifter_logical_ri;\n\narchitecture Behavioral of vhdl_barrel_shifter_logical_ri is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Barrel Shifter Logical Right\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_barrel_shifter_logical_ri is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_barrel_shifter_logical_ri;\n\narchitecture Behavioral of vhdl_barrel_shifter_logical_ri is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-17",
  "title": "VHDL 3-to-8 Decoder using Case Statement",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL 3-to-8 Decoder using Case Statement'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_3_to_8_decoder_using_case is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_3_to_8_decoder_using_case;\n\narchitecture Behavioral of vhdl_3_to_8_decoder_using_case is\nbegin\n    -- TODO: Write VHDL architecture for VHDL 3-to-8 Decoder using Case Statement\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_3_to_8_decoder_using_case is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_3_to_8_decoder_using_case;\n\narchitecture Behavioral of vhdl_3_to_8_decoder_using_case is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-18",
  "title": "VHDL Priority Encoder 4-to-2",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Priority Encoder 4-to-2'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_priority_encoder_4_to_2 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_priority_encoder_4_to_2;\n\narchitecture Behavioral of vhdl_priority_encoder_4_to_2 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Priority Encoder 4-to-2\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_priority_encoder_4_to_2 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_priority_encoder_4_to_2;\n\narchitecture Behavioral of vhdl_priority_encoder_4_to_2 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-19",
  "title": "VHDL BCD to 7-Segment Decoder",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL BCD to 7-Segment Decoder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bcd_to_7_segment_decoder is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bcd_to_7_segment_decoder;\n\narchitecture Behavioral of vhdl_bcd_to_7_segment_decoder is\nbegin\n    -- TODO: Write VHDL architecture for VHDL BCD to 7-Segment Decoder\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bcd_to_7_segment_decoder is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bcd_to_7_segment_decoder;\n\narchitecture Behavioral of vhdl_bcd_to_7_segment_decoder is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-20",
  "title": "VHDL 4-bit Magnitude Comparator",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL 4-bit Magnitude Comparator'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_4_bit_magnitude_comparato is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_4_bit_magnitude_comparato;\n\narchitecture Behavioral of vhdl_4_bit_magnitude_comparato is\nbegin\n    -- TODO: Write VHDL architecture for VHDL 4-bit Magnitude Comparator\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_4_bit_magnitude_comparato is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_4_bit_magnitude_comparato;\n\narchitecture Behavioral of vhdl_4_bit_magnitude_comparato is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-21",
  "title": "VHDL Arithmetic Logic Unit (ALU 8-bit)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Arithmetic Logic Unit (ALU 8-bit)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_arithmetic_logic_unit__al is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_arithmetic_logic_unit__al;\n\narchitecture Behavioral of vhdl_arithmetic_logic_unit__al is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Arithmetic Logic Unit (ALU 8-bit)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_arithmetic_logic_unit__al is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_arithmetic_logic_unit__al;\n\narchitecture Behavioral of vhdl_arithmetic_logic_unit__al is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-22",
  "title": "VHDL Moore FSM 101 Detector (2-Process)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Moore FSM 101 Detector (2-Process)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_moore_fsm_101_detector__2 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_moore_fsm_101_detector__2;\n\narchitecture Behavioral of vhdl_moore_fsm_101_detector__2 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Moore FSM 101 Detector (2-Process)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_moore_fsm_101_detector__2 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_moore_fsm_101_detector__2;\n\narchitecture Behavioral of vhdl_moore_fsm_101_detector__2 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-23",
  "title": "VHDL Mealy FSM 1011 Detector (3-Process)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Mealy FSM 1011 Detector (3-Process)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_mealy_fsm_1011_detector__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_mealy_fsm_1011_detector__;\n\narchitecture Behavioral of vhdl_mealy_fsm_1011_detector__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Mealy FSM 1011 Detector (3-Process)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_mealy_fsm_1011_detector__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_mealy_fsm_1011_detector__;\n\narchitecture Behavioral of vhdl_mealy_fsm_1011_detector__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-24",
  "title": "VHDL Traffic Light Controller FSM",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Traffic Light Controller FSM'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_traffic_light_controller_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_traffic_light_controller_;\n\narchitecture Behavioral of vhdl_traffic_light_controller_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Traffic Light Controller FSM\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_traffic_light_controller_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_traffic_light_controller_;\n\narchitecture Behavioral of vhdl_traffic_light_controller_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-25",
  "title": "VHDL Vending Machine FSM Controller",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Vending Machine FSM Controller'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_vending_machine_fsm_contr is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_vending_machine_fsm_contr;\n\narchitecture Behavioral of vhdl_vending_machine_fsm_contr is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Vending Machine FSM Controller\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_vending_machine_fsm_contr is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_vending_machine_fsm_contr;\n\narchitecture Behavioral of vhdl_vending_machine_fsm_contr is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-26",
  "title": "VHDL Clock Divider by 2 (50% Duty)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Clock Divider by 2 (50% Duty)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_clock_divider_by_2__50__d is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_clock_divider_by_2__50__d;\n\narchitecture Behavioral of vhdl_clock_divider_by_2__50__d is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Clock Divider by 2 (50% Duty)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_clock_divider_by_2__50__d is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_clock_divider_by_2__50__d;\n\narchitecture Behavioral of vhdl_clock_divider_by_2__50__d is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-27",
  "title": "VHDL Clock Divider by 3 (Odd Integer)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Clock Divider by 3 (Odd Integer)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_clock_divider_by_3__odd_i is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_clock_divider_by_3__odd_i;\n\narchitecture Behavioral of vhdl_clock_divider_by_3__odd_i is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Clock Divider by 3 (Odd Integer)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_clock_divider_by_3__odd_i is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_clock_divider_by_3__odd_i;\n\narchitecture Behavioral of vhdl_clock_divider_by_3__odd_i is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-28",
  "title": "VHDL Rising Edge Detector (rising_edge)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Rising Edge Detector (rising_edge)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_rising_edge_detector__ris is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_rising_edge_detector__ris;\n\narchitecture Behavioral of vhdl_rising_edge_detector__ris is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Rising Edge Detector (rising_edge)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_rising_edge_detector__ris is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_rising_edge_detector__ris;\n\narchitecture Behavioral of vhdl_rising_edge_detector__ris is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-29",
  "title": "VHDL Single-Port Synchronous RAM 16x8",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Single-Port Synchronous RAM 16x8'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_single_port_synchronous_r is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_single_port_synchronous_r;\n\narchitecture Behavioral of vhdl_single_port_synchronous_r is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Single-Port Synchronous RAM 16x8\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_single_port_synchronous_r is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_single_port_synchronous_r;\n\narchitecture Behavioral of vhdl_single_port_synchronous_r is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-30",
  "title": "VHDL Dual-Port Block RAM Inference",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Dual-Port Block RAM Inference'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_dual_port_block_ram_infer is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_dual_port_block_ram_infer;\n\narchitecture Behavioral of vhdl_dual_port_block_ram_infer is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Dual-Port Block RAM Inference\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_dual_port_block_ram_infer is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_dual_port_block_ram_infer;\n\narchitecture Behavioral of vhdl_dual_port_block_ram_infer is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-31",
  "title": "VHDL Synchronous FIFO 8x8 with Flags",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Synchronous FIFO 8x8 with Flags'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synchronous_fifo_8x8_with is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synchronous_fifo_8x8_with;\n\narchitecture Behavioral of vhdl_synchronous_fifo_8x8_with is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synchronous FIFO 8x8 with Flags\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synchronous_fifo_8x8_with is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synchronous_fifo_8x8_with;\n\narchitecture Behavioral of vhdl_synchronous_fifo_8x8_with is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-32",
  "title": "VHDL Package and Package Body Definition",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Package and Package Body Definition'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_package_and_package_body_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_package_and_package_body_;\n\narchitecture Behavioral of vhdl_package_and_package_body_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Package and Package Body Definition\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_package_and_package_body_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_package_and_package_body_;\n\narchitecture Behavioral of vhdl_package_and_package_body_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-33",
  "title": "VHDL Custom Type & Subtype Declarations",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Custom Type & Subtype Declarations'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_custom_type___subtype_dec is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_custom_type___subtype_dec;\n\narchitecture Behavioral of vhdl_custom_type___subtype_dec is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Custom Type & Subtype Declarations\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_custom_type___subtype_dec is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_custom_type___subtype_dec;\n\narchitecture Behavioral of vhdl_custom_type___subtype_dec is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-34",
  "title": "VHDL Record Data Types for Bus Signals",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Record Data Types for Bus Signals'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_record_data_types_for_bus is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_record_data_types_for_bus;\n\narchitecture Behavioral of vhdl_record_data_types_for_bus is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Record Data Types for Bus Signals\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_record_data_types_for_bus is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_record_data_types_for_bus;\n\narchitecture Behavioral of vhdl_record_data_types_for_bus is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-35",
  "title": "VHDL Unconstrained Array Declarations",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Unconstrained Array Declarations'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_unconstrained_array_decla is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_unconstrained_array_decla;\n\narchitecture Behavioral of vhdl_unconstrained_array_decla is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Unconstrained Array Declarations\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_unconstrained_array_decla is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_unconstrained_array_decla;\n\narchitecture Behavioral of vhdl_unconstrained_array_decla is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-36",
  "title": "VHDL Generic Parameterized Ripple Adder",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Generic Parameterized Ripple Adder'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_generic_parameterized_rip is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_generic_parameterized_rip;\n\narchitecture Behavioral of vhdl_generic_parameterized_rip is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Generic Parameterized Ripple Adder\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_generic_parameterized_rip is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_generic_parameterized_rip;\n\narchitecture Behavioral of vhdl_generic_parameterized_rip is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-37",
  "title": "VHDL Generate Statement (for...generate)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Generate Statement (for...generate)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_generate_statement__for__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_generate_statement__for__;\n\narchitecture Behavioral of vhdl_generate_statement__for__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Generate Statement (for...generate)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_generate_statement__for__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_generate_statement__for__;\n\narchitecture Behavioral of vhdl_generate_statement__for__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-38",
  "title": "VHDL Conditional Generate (if...generate)",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Conditional Generate (if...generate)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_conditional_generate__if_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_conditional_generate__if_;\n\narchitecture Behavioral of vhdl_conditional_generate__if_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Conditional Generate (if...generate)\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_conditional_generate__if_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_conditional_generate__if_;\n\narchitecture Behavioral of vhdl_conditional_generate__if_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-39",
  "title": "VHDL Function for Parity Calculation",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Function for Parity Calculation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_function_for_parity_calcu is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_function_for_parity_calcu;\n\narchitecture Behavioral of vhdl_function_for_parity_calcu is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Function for Parity Calculation\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_function_for_parity_calcu is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_function_for_parity_calcu;\n\narchitecture Behavioral of vhdl_function_for_parity_calcu is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-40",
  "title": "VHDL Procedure for Bus Handshake Transaction",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Procedure for Bus Handshake Transaction'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_procedure_for_bus_handsha is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_procedure_for_bus_handsha;\n\narchitecture Behavioral of vhdl_procedure_for_bus_handsha is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Procedure for Bus Handshake Transaction\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_procedure_for_bus_handsha is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_procedure_for_bus_handsha;\n\narchitecture Behavioral of vhdl_procedure_for_bus_handsha is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-41",
  "title": "VHDL Variable vs Signal Assignment Rules",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Variable vs Signal Assignment Rules'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_variable_vs_signal_assign is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_variable_vs_signal_assign;\n\narchitecture Behavioral of vhdl_variable_vs_signal_assign is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Variable vs Signal Assignment Rules\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_variable_vs_signal_assign is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_variable_vs_signal_assign;\n\narchitecture Behavioral of vhdl_variable_vs_signal_assign is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-42",
  "title": "VHDL Delta Delay Timing Simulator Model",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Delta Delay Timing Simulator Model'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_delta_delay_timing_simula is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_delta_delay_timing_simula;\n\narchitecture Behavioral of vhdl_delta_delay_timing_simula is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Delta Delay Timing Simulator Model\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_delta_delay_timing_simula is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_delta_delay_timing_simula;\n\narchitecture Behavioral of vhdl_delta_delay_timing_simula is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-43",
  "title": "VHDL Assert and Report Severity Levels",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Assert and Report Severity Levels'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_assert_and_report_severit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_assert_and_report_severit;\n\narchitecture Behavioral of vhdl_assert_and_report_severit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Assert and Report Severity Levels\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_assert_and_report_severit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_assert_and_report_severit;\n\narchitecture Behavioral of vhdl_assert_and_report_severit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-44",
  "title": "VHDL TextIO File Reading for Test vectors",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL TextIO File Reading for Test vectors'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_textio_file_reading_for_t is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_textio_file_reading_for_t;\n\narchitecture Behavioral of vhdl_textio_file_reading_for_t is\nbegin\n    -- TODO: Write VHDL architecture for VHDL TextIO File Reading for Test vectors\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_textio_file_reading_for_t is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_textio_file_reading_for_t;\n\narchitecture Behavioral of vhdl_textio_file_reading_for_t is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-45",
  "title": "VHDL TextIO File Writing Simulation Trace",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL TextIO File Writing Simulation Trace'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_textio_file_writing_simul is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_textio_file_writing_simul;\n\narchitecture Behavioral of vhdl_textio_file_writing_simul is\nbegin\n    -- TODO: Write VHDL architecture for VHDL TextIO File Writing Simulation Trace\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_textio_file_writing_simul is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_textio_file_writing_simul;\n\narchitecture Behavioral of vhdl_textio_file_writing_simul is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-46",
  "title": "VHDL IEEE numeric_std signed/unsigned Types",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL IEEE numeric_std signed/unsigned Types'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_ieee_numeric_std_signed_u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_ieee_numeric_std_signed_u;\n\narchitecture Behavioral of vhdl_ieee_numeric_std_signed_u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL IEEE numeric_std signed/unsigned Types\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_ieee_numeric_std_signed_u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_ieee_numeric_std_signed_u;\n\narchitecture Behavioral of vhdl_ieee_numeric_std_signed_u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-47",
  "title": "VHDL Integer to std_logic_vector Conversion",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Integer to std_logic_vector Conversion'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_integer_to_std_logic_vect is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_integer_to_std_logic_vect;\n\narchitecture Behavioral of vhdl_integer_to_std_logic_vect is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Integer to std_logic_vector Conversion\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_integer_to_std_logic_vect is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_integer_to_std_logic_vect;\n\narchitecture Behavioral of vhdl_integer_to_std_logic_vect is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-48",
  "title": "VHDL Resolution Function for Multi-Driver Bus",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Resolution Function for Multi-Driver Bus'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resolution_function_for_m is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resolution_function_for_m;\n\narchitecture Behavioral of vhdl_resolution_function_for_m is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resolution Function for Multi-Driver Bus\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resolution_function_for_m is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resolution_function_for_m;\n\narchitecture Behavioral of vhdl_resolution_function_for_m is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-49",
  "title": "VHDL SPI Master Transmitter Interface",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL SPI Master Transmitter Interface'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_spi_master_transmitter_in is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_spi_master_transmitter_in;\n\narchitecture Behavioral of vhdl_spi_master_transmitter_in is\nbegin\n    -- TODO: Write VHDL architecture for VHDL SPI Master Transmitter Interface\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_spi_master_transmitter_in is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_spi_master_transmitter_in;\n\narchitecture Behavioral of vhdl_spi_master_transmitter_in is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-50",
  "title": "VHDL UART Transmitter 8N1 State Machine",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL UART Transmitter 8N1 State Machine'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_uart_transmitter_8n1_stat is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_uart_transmitter_8n1_stat;\n\narchitecture Behavioral of vhdl_uart_transmitter_8n1_stat is\nbegin\n    -- TODO: Write VHDL architecture for VHDL UART Transmitter 8N1 State Machine\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_uart_transmitter_8n1_stat is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_uart_transmitter_8n1_stat;\n\narchitecture Behavioral of vhdl_uart_transmitter_8n1_stat is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-51",
  "title": "VHDL CDC Isolation Part 1: Unit 51",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 1: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_1__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_1__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_1__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 1: Unit 51\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_1__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_1__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_1__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-52",
  "title": "VHDL Error Handling Part 1: Unit 52",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 1: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_1__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_1__un;\n\narchitecture Behavioral of vhdl_error_handling_part_1__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 1: Unit 52\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_1__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_1__un;\n\narchitecture Behavioral of vhdl_error_handling_part_1__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-53",
  "title": "VHDL High-Speed Encoding Part 1: Unit 53",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 1: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 1: Unit 53\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-54",
  "title": "VHDL Synthesizable Model Part 1: Unit 54",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 1: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 1: Unit 54\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-55",
  "title": "VHDL Optimization Part 2: Unit 55",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 2: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_2__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_2__unit;\n\narchitecture Behavioral of vhdl_optimization_part_2__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 2: Unit 55\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_2__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_2__unit;\n\narchitecture Behavioral of vhdl_optimization_part_2__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-56",
  "title": "VHDL Architecture Part 2: Unit 56",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 2: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_2__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_2__unit;\n\narchitecture Behavioral of vhdl_architecture_part_2__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 2: Unit 56\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_2__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_2__unit;\n\narchitecture Behavioral of vhdl_architecture_part_2__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-57",
  "title": "VHDL Pipeline Stage Part 2: Unit 57",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Pipeline Stage Part 2: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_2__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_2__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_2__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Pipeline Stage Part 2: Unit 57\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_2__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_2__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_2__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-58",
  "title": "VHDL Interface Protocol Part 2: Unit 58",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Interface Protocol Part 2: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_2 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_2;\n\narchitecture Behavioral of vhdl_interface_protocol_part_2 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Interface Protocol Part 2: Unit 58\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_2 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_2;\n\narchitecture Behavioral of vhdl_interface_protocol_part_2 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-59",
  "title": "VHDL Low-Power Design Part 2: Unit 59",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Low-Power Design Part 2: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_2__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_2__;\n\narchitecture Behavioral of vhdl_low_power_design_part_2__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Low-Power Design Part 2: Unit 59\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_2__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_2__;\n\narchitecture Behavioral of vhdl_low_power_design_part_2__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-60",
  "title": "VHDL Timing Closure Part 2: Unit 60",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Timing Closure Part 2: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_2__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_2__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_2__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Timing Closure Part 2: Unit 60\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_2__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_2__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_2__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-61",
  "title": "VHDL Resource Sharing Part 2: Unit 61",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Resource Sharing Part 2: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_2__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_2__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_2__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resource Sharing Part 2: Unit 61\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_2__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_2__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_2__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-62",
  "title": "VHDL Fault Tolerance Part 2: Unit 62",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Fault Tolerance Part 2: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_2__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_2__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_2__u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Fault Tolerance Part 2: Unit 62\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_2__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_2__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_2__u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-63",
  "title": "VHDL Verification Testbench Part 2: Unit 63",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Verification Testbench Part 2: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Verification Testbench Part 2: Unit 63\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-64",
  "title": "VHDL Hardware Acceleration Part 2: Unit 64",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Hardware Acceleration Part 2: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Hardware Acceleration Part 2: Unit 64\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-65",
  "title": "VHDL Data Flow Control Part 2: Unit 65",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Data Flow Control Part 2: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_2_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_2_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_2_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Data Flow Control Part 2: Unit 65\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_2_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_2_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_2_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-66",
  "title": "VHDL Corner Case Analysis Part 2: Unit 66",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Corner Case Analysis Part 2: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Corner Case Analysis Part 2: Unit 66\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-67",
  "title": "VHDL Bandwidth Maximizer Part 2: Unit 67",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Bandwidth Maximizer Part 2: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Bandwidth Maximizer Part 2: Unit 67\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-68",
  "title": "VHDL Latency Reduction Part 2: Unit 68",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Latency Reduction Part 2: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_2_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_2_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_2_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Latency Reduction Part 2: Unit 68\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_2_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_2_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_2_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-69",
  "title": "VHDL CDC Isolation Part 2: Unit 69",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 2: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_2__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_2__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_2__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 2: Unit 69\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_2__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_2__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_2__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-70",
  "title": "VHDL Error Handling Part 2: Unit 70",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 2: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_2__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_2__un;\n\narchitecture Behavioral of vhdl_error_handling_part_2__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 2: Unit 70\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_2__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_2__un;\n\narchitecture Behavioral of vhdl_error_handling_part_2__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-71",
  "title": "VHDL High-Speed Encoding Part 2: Unit 71",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 2: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 2: Unit 71\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-72",
  "title": "VHDL Synthesizable Model Part 2: Unit 72",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 2: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 2: Unit 72\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-73",
  "title": "VHDL Optimization Part 3: Unit 73",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 3: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_3__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_3__unit;\n\narchitecture Behavioral of vhdl_optimization_part_3__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 3: Unit 73\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_3__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_3__unit;\n\narchitecture Behavioral of vhdl_optimization_part_3__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-74",
  "title": "VHDL Architecture Part 3: Unit 74",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 3: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_3__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_3__unit;\n\narchitecture Behavioral of vhdl_architecture_part_3__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 3: Unit 74\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_3__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_3__unit;\n\narchitecture Behavioral of vhdl_architecture_part_3__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-75",
  "title": "VHDL Pipeline Stage Part 3: Unit 75",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Pipeline Stage Part 3: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_3__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_3__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_3__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Pipeline Stage Part 3: Unit 75\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_3__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_3__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_3__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-76",
  "title": "VHDL Interface Protocol Part 3: Unit 76",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Interface Protocol Part 3: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_3 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_3;\n\narchitecture Behavioral of vhdl_interface_protocol_part_3 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Interface Protocol Part 3: Unit 76\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_3 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_3;\n\narchitecture Behavioral of vhdl_interface_protocol_part_3 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-77",
  "title": "VHDL Low-Power Design Part 3: Unit 77",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Low-Power Design Part 3: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_3__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_3__;\n\narchitecture Behavioral of vhdl_low_power_design_part_3__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Low-Power Design Part 3: Unit 77\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_3__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_3__;\n\narchitecture Behavioral of vhdl_low_power_design_part_3__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-78",
  "title": "VHDL Timing Closure Part 3: Unit 78",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Timing Closure Part 3: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_3__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_3__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_3__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Timing Closure Part 3: Unit 78\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_3__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_3__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_3__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-79",
  "title": "VHDL Resource Sharing Part 3: Unit 79",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Resource Sharing Part 3: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_3__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_3__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_3__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resource Sharing Part 3: Unit 79\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_3__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_3__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_3__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-80",
  "title": "VHDL Fault Tolerance Part 3: Unit 80",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Fault Tolerance Part 3: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_3__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_3__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_3__u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Fault Tolerance Part 3: Unit 80\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_3__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_3__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_3__u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-81",
  "title": "VHDL Verification Testbench Part 3: Unit 81",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Verification Testbench Part 3: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Verification Testbench Part 3: Unit 81\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-82",
  "title": "VHDL Hardware Acceleration Part 3: Unit 82",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Hardware Acceleration Part 3: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Hardware Acceleration Part 3: Unit 82\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-83",
  "title": "VHDL Data Flow Control Part 3: Unit 83",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Data Flow Control Part 3: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_3_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_3_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_3_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Data Flow Control Part 3: Unit 83\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_3_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_3_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_3_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-84",
  "title": "VHDL Corner Case Analysis Part 3: Unit 84",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Corner Case Analysis Part 3: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Corner Case Analysis Part 3: Unit 84\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-85",
  "title": "VHDL Bandwidth Maximizer Part 3: Unit 85",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Bandwidth Maximizer Part 3: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Bandwidth Maximizer Part 3: Unit 85\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-86",
  "title": "VHDL Latency Reduction Part 3: Unit 86",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Latency Reduction Part 3: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_3_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_3_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_3_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Latency Reduction Part 3: Unit 86\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_3_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_3_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_3_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-87",
  "title": "VHDL CDC Isolation Part 3: Unit 87",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 3: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_3__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_3__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_3__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 3: Unit 87\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_3__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_3__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_3__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-88",
  "title": "VHDL Error Handling Part 3: Unit 88",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 3: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_3__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_3__un;\n\narchitecture Behavioral of vhdl_error_handling_part_3__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 3: Unit 88\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_3__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_3__un;\n\narchitecture Behavioral of vhdl_error_handling_part_3__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-89",
  "title": "VHDL High-Speed Encoding Part 3: Unit 89",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 3: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 3: Unit 89\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-90",
  "title": "VHDL Synthesizable Model Part 3: Unit 90",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 3: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 3: Unit 90\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-91",
  "title": "VHDL Optimization Part 4: Unit 91",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 4: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_4__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_4__unit;\n\narchitecture Behavioral of vhdl_optimization_part_4__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 4: Unit 91\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_4__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_4__unit;\n\narchitecture Behavioral of vhdl_optimization_part_4__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-92",
  "title": "VHDL Architecture Part 4: Unit 92",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 4: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_4__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_4__unit;\n\narchitecture Behavioral of vhdl_architecture_part_4__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 4: Unit 92\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_4__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_4__unit;\n\narchitecture Behavioral of vhdl_architecture_part_4__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-93",
  "title": "VHDL Pipeline Stage Part 4: Unit 93",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Pipeline Stage Part 4: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_4__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_4__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_4__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Pipeline Stage Part 4: Unit 93\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_4__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_4__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_4__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-94",
  "title": "VHDL Interface Protocol Part 4: Unit 94",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Interface Protocol Part 4: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_4 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_4;\n\narchitecture Behavioral of vhdl_interface_protocol_part_4 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Interface Protocol Part 4: Unit 94\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_4 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_4;\n\narchitecture Behavioral of vhdl_interface_protocol_part_4 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-95",
  "title": "VHDL Low-Power Design Part 4: Unit 95",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Low-Power Design Part 4: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_4__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_4__;\n\narchitecture Behavioral of vhdl_low_power_design_part_4__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Low-Power Design Part 4: Unit 95\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_4__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_4__;\n\narchitecture Behavioral of vhdl_low_power_design_part_4__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-96",
  "title": "VHDL Timing Closure Part 4: Unit 96",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Timing Closure Part 4: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_4__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_4__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_4__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Timing Closure Part 4: Unit 96\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_4__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_4__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_4__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-97",
  "title": "VHDL Resource Sharing Part 4: Unit 97",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Resource Sharing Part 4: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_4__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_4__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_4__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resource Sharing Part 4: Unit 97\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_4__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_4__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_4__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-98",
  "title": "VHDL Fault Tolerance Part 4: Unit 98",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Fault Tolerance Part 4: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_4__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_4__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_4__u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Fault Tolerance Part 4: Unit 98\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_4__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_4__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_4__u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-99",
  "title": "VHDL Verification Testbench Part 4: Unit 99",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Verification Testbench Part 4: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Verification Testbench Part 4: Unit 99\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-100",
  "title": "VHDL Hardware Acceleration Part 4: Unit 100",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Hardware Acceleration Part 4: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Hardware Acceleration Part 4: Unit 100\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-101",
  "title": "VHDL Data Flow Control Part 4: Unit 101",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Data Flow Control Part 4: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_4_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_4_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_4_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Data Flow Control Part 4: Unit 101\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_4_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_4_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_4_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-102",
  "title": "VHDL Corner Case Analysis Part 4: Unit 102",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Corner Case Analysis Part 4: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Corner Case Analysis Part 4: Unit 102\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-103",
  "title": "VHDL Bandwidth Maximizer Part 4: Unit 103",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Bandwidth Maximizer Part 4: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Bandwidth Maximizer Part 4: Unit 103\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-104",
  "title": "VHDL Latency Reduction Part 4: Unit 104",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Latency Reduction Part 4: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_4_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_4_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_4_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Latency Reduction Part 4: Unit 104\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_4_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_4_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_4_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-105",
  "title": "VHDL CDC Isolation Part 4: Unit 105",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 4: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_4__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_4__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_4__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 4: Unit 105\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_4__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_4__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_4__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-106",
  "title": "VHDL Error Handling Part 4: Unit 106",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 4: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_4__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_4__un;\n\narchitecture Behavioral of vhdl_error_handling_part_4__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 4: Unit 106\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_4__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_4__un;\n\narchitecture Behavioral of vhdl_error_handling_part_4__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-107",
  "title": "VHDL High-Speed Encoding Part 4: Unit 107",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 4: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 4: Unit 107\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-108",
  "title": "VHDL Synthesizable Model Part 4: Unit 108",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 4: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 4: Unit 108\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-109",
  "title": "VHDL Optimization Part 5: Unit 109",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 5: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_5__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_5__unit;\n\narchitecture Behavioral of vhdl_optimization_part_5__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 5: Unit 109\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_5__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_5__unit;\n\narchitecture Behavioral of vhdl_optimization_part_5__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-110",
  "title": "VHDL Architecture Part 5: Unit 110",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 5: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_5__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_5__unit;\n\narchitecture Behavioral of vhdl_architecture_part_5__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 5: Unit 110\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_5__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_5__unit;\n\narchitecture Behavioral of vhdl_architecture_part_5__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-111",
  "title": "VHDL Pipeline Stage Part 5: Unit 111",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Pipeline Stage Part 5: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_5__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_5__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_5__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Pipeline Stage Part 5: Unit 111\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_5__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_5__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_5__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-112",
  "title": "VHDL Interface Protocol Part 5: Unit 112",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Interface Protocol Part 5: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_5 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_5;\n\narchitecture Behavioral of vhdl_interface_protocol_part_5 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Interface Protocol Part 5: Unit 112\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_5 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_5;\n\narchitecture Behavioral of vhdl_interface_protocol_part_5 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-113",
  "title": "VHDL Low-Power Design Part 5: Unit 113",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Low-Power Design Part 5: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_5__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_5__;\n\narchitecture Behavioral of vhdl_low_power_design_part_5__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Low-Power Design Part 5: Unit 113\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_5__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_5__;\n\narchitecture Behavioral of vhdl_low_power_design_part_5__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-114",
  "title": "VHDL Timing Closure Part 5: Unit 114",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Timing Closure Part 5: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_5__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_5__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_5__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Timing Closure Part 5: Unit 114\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_5__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_5__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_5__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-115",
  "title": "VHDL Resource Sharing Part 5: Unit 115",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Resource Sharing Part 5: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_5__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_5__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_5__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resource Sharing Part 5: Unit 115\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_5__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_5__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_5__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-116",
  "title": "VHDL Fault Tolerance Part 5: Unit 116",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Fault Tolerance Part 5: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_5__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_5__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_5__u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Fault Tolerance Part 5: Unit 116\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_5__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_5__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_5__u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-117",
  "title": "VHDL Verification Testbench Part 5: Unit 117",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Verification Testbench Part 5: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Verification Testbench Part 5: Unit 117\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-118",
  "title": "VHDL Hardware Acceleration Part 5: Unit 118",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Hardware Acceleration Part 5: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Hardware Acceleration Part 5: Unit 118\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-119",
  "title": "VHDL Data Flow Control Part 5: Unit 119",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Data Flow Control Part 5: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_5_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_5_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_5_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Data Flow Control Part 5: Unit 119\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_5_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_5_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_5_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-120",
  "title": "VHDL Corner Case Analysis Part 5: Unit 120",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Corner Case Analysis Part 5: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Corner Case Analysis Part 5: Unit 120\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-121",
  "title": "VHDL Bandwidth Maximizer Part 5: Unit 121",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Bandwidth Maximizer Part 5: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Bandwidth Maximizer Part 5: Unit 121\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-122",
  "title": "VHDL Latency Reduction Part 5: Unit 122",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Latency Reduction Part 5: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_5_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_5_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_5_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Latency Reduction Part 5: Unit 122\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_5_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_5_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_5_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-123",
  "title": "VHDL CDC Isolation Part 5: Unit 123",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 5: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_5__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_5__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_5__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 5: Unit 123\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_5__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_5__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_5__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-124",
  "title": "VHDL Error Handling Part 5: Unit 124",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 5: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_5__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_5__un;\n\narchitecture Behavioral of vhdl_error_handling_part_5__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 5: Unit 124\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_5__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_5__un;\n\narchitecture Behavioral of vhdl_error_handling_part_5__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-125",
  "title": "VHDL High-Speed Encoding Part 5: Unit 125",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 5: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 5: Unit 125\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-126",
  "title": "VHDL Synthesizable Model Part 5: Unit 126",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 5: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 5: Unit 126\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-127",
  "title": "VHDL Optimization Part 6: Unit 127",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 6: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_6__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_6__unit;\n\narchitecture Behavioral of vhdl_optimization_part_6__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 6: Unit 127\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_6__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_6__unit;\n\narchitecture Behavioral of vhdl_optimization_part_6__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-128",
  "title": "VHDL Architecture Part 6: Unit 128",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 6: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_6__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_6__unit;\n\narchitecture Behavioral of vhdl_architecture_part_6__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 6: Unit 128\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_6__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_6__unit;\n\narchitecture Behavioral of vhdl_architecture_part_6__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-129",
  "title": "VHDL Pipeline Stage Part 6: Unit 129",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Pipeline Stage Part 6: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_6__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_6__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_6__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Pipeline Stage Part 6: Unit 129\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_6__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_6__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_6__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-130",
  "title": "VHDL Interface Protocol Part 6: Unit 130",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Interface Protocol Part 6: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_6 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_6;\n\narchitecture Behavioral of vhdl_interface_protocol_part_6 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Interface Protocol Part 6: Unit 130\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_6 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_6;\n\narchitecture Behavioral of vhdl_interface_protocol_part_6 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-131",
  "title": "VHDL Low-Power Design Part 6: Unit 131",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Low-Power Design Part 6: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_6__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_6__;\n\narchitecture Behavioral of vhdl_low_power_design_part_6__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Low-Power Design Part 6: Unit 131\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_6__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_6__;\n\narchitecture Behavioral of vhdl_low_power_design_part_6__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-132",
  "title": "VHDL Timing Closure Part 6: Unit 132",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Timing Closure Part 6: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_6__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_6__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_6__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Timing Closure Part 6: Unit 132\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_6__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_6__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_6__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-133",
  "title": "VHDL Resource Sharing Part 6: Unit 133",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Resource Sharing Part 6: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_6__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_6__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_6__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resource Sharing Part 6: Unit 133\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_6__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_6__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_6__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-134",
  "title": "VHDL Fault Tolerance Part 6: Unit 134",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Fault Tolerance Part 6: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_6__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_6__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_6__u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Fault Tolerance Part 6: Unit 134\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_6__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_6__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_6__u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-135",
  "title": "VHDL Verification Testbench Part 6: Unit 135",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Verification Testbench Part 6: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Verification Testbench Part 6: Unit 135\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-136",
  "title": "VHDL Hardware Acceleration Part 6: Unit 136",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Hardware Acceleration Part 6: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Hardware Acceleration Part 6: Unit 136\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-137",
  "title": "VHDL Data Flow Control Part 6: Unit 137",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Data Flow Control Part 6: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_6_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_6_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_6_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Data Flow Control Part 6: Unit 137\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_6_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_6_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_6_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-138",
  "title": "VHDL Corner Case Analysis Part 6: Unit 138",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Corner Case Analysis Part 6: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Corner Case Analysis Part 6: Unit 138\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-139",
  "title": "VHDL Bandwidth Maximizer Part 6: Unit 139",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Bandwidth Maximizer Part 6: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Bandwidth Maximizer Part 6: Unit 139\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-140",
  "title": "VHDL Latency Reduction Part 6: Unit 140",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Latency Reduction Part 6: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_6_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_6_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_6_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Latency Reduction Part 6: Unit 140\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_6_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_6_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_6_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-141",
  "title": "VHDL CDC Isolation Part 6: Unit 141",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 6: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_6__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_6__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_6__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 6: Unit 141\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_6__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_6__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_6__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-142",
  "title": "VHDL Error Handling Part 6: Unit 142",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 6: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_6__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_6__un;\n\narchitecture Behavioral of vhdl_error_handling_part_6__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 6: Unit 142\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_6__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_6__un;\n\narchitecture Behavioral of vhdl_error_handling_part_6__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-143",
  "title": "VHDL High-Speed Encoding Part 6: Unit 143",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 6: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 6: Unit 143\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-144",
  "title": "VHDL Synthesizable Model Part 6: Unit 144",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 6: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 6: Unit 144\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-145",
  "title": "VHDL Optimization Part 7: Unit 145",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 7: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_7__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_7__unit;\n\narchitecture Behavioral of vhdl_optimization_part_7__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 7: Unit 145\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_7__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_7__unit;\n\narchitecture Behavioral of vhdl_optimization_part_7__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-146",
  "title": "VHDL Architecture Part 7: Unit 146",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 7: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_7__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_7__unit;\n\narchitecture Behavioral of vhdl_architecture_part_7__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 7: Unit 146\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_7__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_7__unit;\n\narchitecture Behavioral of vhdl_architecture_part_7__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-147",
  "title": "VHDL Pipeline Stage Part 7: Unit 147",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Pipeline Stage Part 7: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_7__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_7__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_7__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Pipeline Stage Part 7: Unit 147\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_7__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_7__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_7__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-148",
  "title": "VHDL Interface Protocol Part 7: Unit 148",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Interface Protocol Part 7: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_7 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_7;\n\narchitecture Behavioral of vhdl_interface_protocol_part_7 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Interface Protocol Part 7: Unit 148\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_7 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_7;\n\narchitecture Behavioral of vhdl_interface_protocol_part_7 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-149",
  "title": "VHDL Low-Power Design Part 7: Unit 149",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Low-Power Design Part 7: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_7__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_7__;\n\narchitecture Behavioral of vhdl_low_power_design_part_7__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Low-Power Design Part 7: Unit 149\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_7__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_7__;\n\narchitecture Behavioral of vhdl_low_power_design_part_7__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-150",
  "title": "VHDL Timing Closure Part 7: Unit 150",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Timing Closure Part 7: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_7__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_7__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_7__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Timing Closure Part 7: Unit 150\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_7__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_7__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_7__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-151",
  "title": "VHDL Resource Sharing Part 7: Unit 151",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Resource Sharing Part 7: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_7__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_7__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_7__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resource Sharing Part 7: Unit 151\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_7__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_7__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_7__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-152",
  "title": "VHDL Fault Tolerance Part 7: Unit 152",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Fault Tolerance Part 7: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_7__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_7__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_7__u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Fault Tolerance Part 7: Unit 152\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_7__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_7__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_7__u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-153",
  "title": "VHDL Verification Testbench Part 7: Unit 153",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Verification Testbench Part 7: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Verification Testbench Part 7: Unit 153\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-154",
  "title": "VHDL Hardware Acceleration Part 7: Unit 154",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Hardware Acceleration Part 7: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Hardware Acceleration Part 7: Unit 154\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-155",
  "title": "VHDL Data Flow Control Part 7: Unit 155",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Data Flow Control Part 7: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_7_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_7_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_7_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Data Flow Control Part 7: Unit 155\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_7_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_7_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_7_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-156",
  "title": "VHDL Corner Case Analysis Part 7: Unit 156",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Corner Case Analysis Part 7: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Corner Case Analysis Part 7: Unit 156\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-157",
  "title": "VHDL Bandwidth Maximizer Part 7: Unit 157",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Bandwidth Maximizer Part 7: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Bandwidth Maximizer Part 7: Unit 157\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-158",
  "title": "VHDL Latency Reduction Part 7: Unit 158",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Latency Reduction Part 7: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_7_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_7_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_7_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Latency Reduction Part 7: Unit 158\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_7_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_7_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_7_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-159",
  "title": "VHDL CDC Isolation Part 7: Unit 159",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 7: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_7__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_7__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_7__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 7: Unit 159\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_7__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_7__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_7__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-160",
  "title": "VHDL Error Handling Part 7: Unit 160",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 7: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_7__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_7__un;\n\narchitecture Behavioral of vhdl_error_handling_part_7__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 7: Unit 160\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_7__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_7__un;\n\narchitecture Behavioral of vhdl_error_handling_part_7__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-161",
  "title": "VHDL High-Speed Encoding Part 7: Unit 161",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 7: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 7: Unit 161\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-162",
  "title": "VHDL Synthesizable Model Part 7: Unit 162",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 7: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 7: Unit 162\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-163",
  "title": "VHDL Optimization Part 8: Unit 163",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 8: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_8__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_8__unit;\n\narchitecture Behavioral of vhdl_optimization_part_8__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 8: Unit 163\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_8__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_8__unit;\n\narchitecture Behavioral of vhdl_optimization_part_8__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-164",
  "title": "VHDL Architecture Part 8: Unit 164",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 8: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_8__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_8__unit;\n\narchitecture Behavioral of vhdl_architecture_part_8__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 8: Unit 164\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_8__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_8__unit;\n\narchitecture Behavioral of vhdl_architecture_part_8__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-165",
  "title": "VHDL Pipeline Stage Part 8: Unit 165",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Pipeline Stage Part 8: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_8__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_8__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_8__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Pipeline Stage Part 8: Unit 165\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_8__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_8__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_8__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-166",
  "title": "VHDL Interface Protocol Part 8: Unit 166",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Interface Protocol Part 8: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_8 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_8;\n\narchitecture Behavioral of vhdl_interface_protocol_part_8 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Interface Protocol Part 8: Unit 166\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_8 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_8;\n\narchitecture Behavioral of vhdl_interface_protocol_part_8 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-167",
  "title": "VHDL Low-Power Design Part 8: Unit 167",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Low-Power Design Part 8: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_8__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_8__;\n\narchitecture Behavioral of vhdl_low_power_design_part_8__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Low-Power Design Part 8: Unit 167\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_8__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_8__;\n\narchitecture Behavioral of vhdl_low_power_design_part_8__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-168",
  "title": "VHDL Timing Closure Part 8: Unit 168",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Timing Closure Part 8: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_8__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_8__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_8__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Timing Closure Part 8: Unit 168\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_8__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_8__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_8__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-169",
  "title": "VHDL Resource Sharing Part 8: Unit 169",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Resource Sharing Part 8: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_8__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_8__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_8__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resource Sharing Part 8: Unit 169\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_8__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_8__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_8__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-170",
  "title": "VHDL Fault Tolerance Part 8: Unit 170",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Fault Tolerance Part 8: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_8__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_8__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_8__u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Fault Tolerance Part 8: Unit 170\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_8__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_8__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_8__u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-171",
  "title": "VHDL Verification Testbench Part 8: Unit 171",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Verification Testbench Part 8: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Verification Testbench Part 8: Unit 171\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-172",
  "title": "VHDL Hardware Acceleration Part 8: Unit 172",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Hardware Acceleration Part 8: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Hardware Acceleration Part 8: Unit 172\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-173",
  "title": "VHDL Data Flow Control Part 8: Unit 173",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Data Flow Control Part 8: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_8_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_8_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_8_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Data Flow Control Part 8: Unit 173\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_8_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_8_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_8_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-174",
  "title": "VHDL Corner Case Analysis Part 8: Unit 174",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Corner Case Analysis Part 8: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Corner Case Analysis Part 8: Unit 174\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-175",
  "title": "VHDL Bandwidth Maximizer Part 8: Unit 175",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Bandwidth Maximizer Part 8: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Bandwidth Maximizer Part 8: Unit 175\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-176",
  "title": "VHDL Latency Reduction Part 8: Unit 176",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Latency Reduction Part 8: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_8_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_8_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_8_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Latency Reduction Part 8: Unit 176\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_8_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_8_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_8_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-177",
  "title": "VHDL CDC Isolation Part 8: Unit 177",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 8: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_8__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_8__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_8__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 8: Unit 177\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_8__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_8__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_8__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-178",
  "title": "VHDL Error Handling Part 8: Unit 178",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 8: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_8__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_8__un;\n\narchitecture Behavioral of vhdl_error_handling_part_8__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 8: Unit 178\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_8__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_8__un;\n\narchitecture Behavioral of vhdl_error_handling_part_8__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-179",
  "title": "VHDL High-Speed Encoding Part 8: Unit 179",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 8: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 8: Unit 179\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-180",
  "title": "VHDL Synthesizable Model Part 8: Unit 180",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 8: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 8: Unit 180\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-181",
  "title": "VHDL Optimization Part 9: Unit 181",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 9: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_9__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_9__unit;\n\narchitecture Behavioral of vhdl_optimization_part_9__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 9: Unit 181\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_9__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_9__unit;\n\narchitecture Behavioral of vhdl_optimization_part_9__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-182",
  "title": "VHDL Architecture Part 9: Unit 182",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 9: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_9__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_9__unit;\n\narchitecture Behavioral of vhdl_architecture_part_9__unit is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 9: Unit 182\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_9__unit is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_9__unit;\n\narchitecture Behavioral of vhdl_architecture_part_9__unit is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-183",
  "title": "VHDL Pipeline Stage Part 9: Unit 183",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Pipeline Stage Part 9: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_9__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_9__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_9__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Pipeline Stage Part 9: Unit 183\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_pipeline_stage_part_9__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_pipeline_stage_part_9__un;\n\narchitecture Behavioral of vhdl_pipeline_stage_part_9__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-184",
  "title": "VHDL Interface Protocol Part 9: Unit 184",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Interface Protocol Part 9: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_9 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_9;\n\narchitecture Behavioral of vhdl_interface_protocol_part_9 is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Interface Protocol Part 9: Unit 184\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_interface_protocol_part_9 is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_interface_protocol_part_9;\n\narchitecture Behavioral of vhdl_interface_protocol_part_9 is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-185",
  "title": "VHDL Low-Power Design Part 9: Unit 185",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Low-Power Design Part 9: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_9__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_9__;\n\narchitecture Behavioral of vhdl_low_power_design_part_9__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Low-Power Design Part 9: Unit 185\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_low_power_design_part_9__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_low_power_design_part_9__;\n\narchitecture Behavioral of vhdl_low_power_design_part_9__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-186",
  "title": "VHDL Timing Closure Part 9: Unit 186",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Timing Closure Part 9: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_9__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_9__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_9__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Timing Closure Part 9: Unit 186\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_timing_closure_part_9__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_timing_closure_part_9__un;\n\narchitecture Behavioral of vhdl_timing_closure_part_9__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-187",
  "title": "VHDL Resource Sharing Part 9: Unit 187",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Resource Sharing Part 9: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_9__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_9__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_9__ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Resource Sharing Part 9: Unit 187\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_resource_sharing_part_9__ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_resource_sharing_part_9__;\n\narchitecture Behavioral of vhdl_resource_sharing_part_9__ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-188",
  "title": "VHDL Fault Tolerance Part 9: Unit 188",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Fault Tolerance Part 9: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_9__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_9__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_9__u is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Fault Tolerance Part 9: Unit 188\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_fault_tolerance_part_9__u is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_fault_tolerance_part_9__u;\n\narchitecture Behavioral of vhdl_fault_tolerance_part_9__u is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-189",
  "title": "VHDL Verification Testbench Part 9: Unit 189",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Verification Testbench Part 9: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Verification Testbench Part 9: Unit 189\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_verification_testbench_pa is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_verification_testbench_pa;\n\narchitecture Behavioral of vhdl_verification_testbench_pa is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-190",
  "title": "VHDL Hardware Acceleration Part 9: Unit 190",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Hardware Acceleration Part 9: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Hardware Acceleration Part 9: Unit 190\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_hardware_acceleration_par is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_hardware_acceleration_par;\n\narchitecture Behavioral of vhdl_hardware_acceleration_par is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-191",
  "title": "VHDL Data Flow Control Part 9: Unit 191",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Data Flow Control Part 9: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_9_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_9_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_9_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Data Flow Control Part 9: Unit 191\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_data_flow_control_part_9_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_data_flow_control_part_9_;\n\narchitecture Behavioral of vhdl_data_flow_control_part_9_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-192",
  "title": "VHDL Corner Case Analysis Part 9: Unit 192",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Corner Case Analysis Part 9: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Corner Case Analysis Part 9: Unit 192\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_corner_case_analysis_part is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_corner_case_analysis_part;\n\narchitecture Behavioral of vhdl_corner_case_analysis_part is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-193",
  "title": "VHDL Bandwidth Maximizer Part 9: Unit 193",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Bandwidth Maximizer Part 9: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Bandwidth Maximizer Part 9: Unit 193\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_bandwidth_maximizer_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_bandwidth_maximizer_part_;\n\narchitecture Behavioral of vhdl_bandwidth_maximizer_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-194",
  "title": "VHDL Latency Reduction Part 9: Unit 194",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Latency Reduction Part 9: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_9_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_9_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_9_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Latency Reduction Part 9: Unit 194\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_latency_reduction_part_9_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_latency_reduction_part_9_;\n\narchitecture Behavioral of vhdl_latency_reduction_part_9_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-195",
  "title": "VHDL CDC Isolation Part 9: Unit 195",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL CDC Isolation Part 9: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_9__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_9__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_9__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL CDC Isolation Part 9: Unit 195\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_cdc_isolation_part_9__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_cdc_isolation_part_9__uni;\n\narchitecture Behavioral of vhdl_cdc_isolation_part_9__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-196",
  "title": "VHDL Error Handling Part 9: Unit 196",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Error Handling Part 9: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_9__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_9__un;\n\narchitecture Behavioral of vhdl_error_handling_part_9__un is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Error Handling Part 9: Unit 196\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_error_handling_part_9__un is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_error_handling_part_9__un;\n\narchitecture Behavioral of vhdl_error_handling_part_9__un is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-197",
  "title": "VHDL High-Speed Encoding Part 9: Unit 197",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL High-Speed Encoding Part 9: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL High-Speed Encoding Part 9: Unit 197\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_high_speed_encoding_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_high_speed_encoding_part_;\n\narchitecture Behavioral of vhdl_high_speed_encoding_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-198",
  "title": "VHDL Synthesizable Model Part 9: Unit 198",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'VHDL Synthesizable Model Part 9: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Synthesizable Model Part 9: Unit 198\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_synthesizable_model_part_ is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_synthesizable_model_part_;\n\narchitecture Behavioral of vhdl_synthesizable_model_part_ is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-199",
  "title": "VHDL Optimization Part 10: Unit 199",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'VHDL Optimization Part 10: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_10__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_10__uni;\n\narchitecture Behavioral of vhdl_optimization_part_10__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Optimization Part 10: Unit 199\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_optimization_part_10__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_optimization_part_10__uni;\n\narchitecture Behavioral of vhdl_optimization_part_10__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "vhdl-200",
  "title": "VHDL Architecture Part 10: Unit 200",
  "topic": "vhdl",
  "track": "frontend",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'VHDL Architecture Part 10: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Import IEEE std_logic_1164 and numeric_std packages.\nStep 2: Declare entity with ports and generic parameters.\nStep 3: Implement architecture with process or concurrent signal assignments.",
  "starterCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_10__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_10__uni;\n\narchitecture Behavioral of vhdl_architecture_part_10__uni is\nbegin\n    -- TODO: Write VHDL architecture for VHDL Architecture Part 10: Unit 200\nend Behavioral;",
  "solutionCode": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\nentity vhdl_architecture_part_10__uni is\n    Port ( clk  : in  STD_LOGIC;\n           rst  : in  STD_LOGIC;\n           din  : in  STD_LOGIC_VECTOR(3 downto 0);\n           dout : out STD_LOGIC_VECTOR(3 downto 0) );\nend vhdl_architecture_part_10__uni;\n\narchitecture Behavioral of vhdl_architecture_part_10__uni is\nbegin\n    process(clk, rst)\n    begin\n        if rst = '1' then\n            dout <= (others => '0');\n        elsif rising_edge(clk) then\n            dout <= din;\n        end if;\n    end process;\nend Behavioral;",
  "hints": [
    "Use `rising_edge(clk)` for synchronous clock edge detection.",
    "Initialize vectors using `(others => '0')`."
  ],
  "tags": [
    "VHDL",
    "VHDL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
