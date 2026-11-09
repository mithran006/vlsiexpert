import { Problem } from '../types';

export const MNEMONICS_PROBLEMS: Problem[] = [
{
  "id": "asm-01",
  "title": "8051 MOV Immediate to Accumulator and Register",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8051 MOV Immediate to Accumulator and Register'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 MOV Immediate to Accumulator and Register\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 MOV Immediate to Accumulator and Register\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 MOV Immediate to Accumulator and Register\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-02",
  "title": "8051 Direct RAM to Register Data Transfer",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8051 Direct RAM to Register Data Transfer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Direct RAM to Register Data Transfer\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Direct RAM to Register Data Transfer\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Direct RAM to Register Data Transfer\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-03",
  "title": "8051 Indirect Addressing with R0/R1 Pointer (@R0)",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for '8051 Indirect Addressing with R0/R1 Pointer (@R0)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Indirect Addressing with R0/R1 Pointer (@R0)\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Indirect Addressing with R0/R1 Pointer (@R0)\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Indirect Addressing with R0/R1 Pointer (@R0)\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-04",
  "title": "8051 DPTR 16-bit Pointer Load & External MOVX",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8051 DPTR 16-bit Pointer Load & External MOVX'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 DPTR 16-bit Pointer Load & External MOVX\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 DPTR 16-bit Pointer Load & External MOVX\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 DPTR 16-bit Pointer Load & External MOVX\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-05",
  "title": "8051 Arithmetic ADD and ADDC with Carry Propagation",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8051 Arithmetic ADD and ADDC with Carry Propagation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Arithmetic ADD and ADDC with Carry Propagation\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Arithmetic ADD and ADDC with Carry Propagation\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Arithmetic ADD and ADDC with Carry Propagation\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-06",
  "title": "8051 Subtraction SUBB with Borrow Handling",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for '8051 Subtraction SUBB with Borrow Handling'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Subtraction SUBB with Borrow Handling\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Subtraction SUBB with Borrow Handling\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Subtraction SUBB with Borrow Handling\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-07",
  "title": "8051 Multiplication MUL AB and Overflow Check",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8051 Multiplication MUL AB and Overflow Check'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Multiplication MUL AB and Overflow Check\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Multiplication MUL AB and Overflow Check\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Multiplication MUL AB and Overflow Check\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-08",
  "title": "8051 Division DIV AB and Remainder Handling in B",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8051 Division DIV AB and Remainder Handling in B'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Division DIV AB and Remainder Handling in B\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Division DIV AB and Remainder Handling in B\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Division DIV AB and Remainder Handling in B\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-09",
  "title": "8051 Decimal Adjust Accumulator (DA A) for BCD",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for '8051 Decimal Adjust Accumulator (DA A) for BCD'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Decimal Adjust Accumulator (DA A) for BCD\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Decimal Adjust Accumulator (DA A) for BCD\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Decimal Adjust Accumulator (DA A) for BCD\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-10",
  "title": "8051 Increment INC and Decrement DEC Operations",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8051 Increment INC and Decrement DEC Operations'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Increment INC and Decrement DEC Operations\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Increment INC and Decrement DEC Operations\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Increment INC and Decrement DEC Operations\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-11",
  "title": "8051 Bitwise ANL, ORL, XRL Logic Instructions",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8051 Bitwise ANL, ORL, XRL Logic Instructions'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Bitwise ANL, ORL, XRL Logic Instructions\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Bitwise ANL, ORL, XRL Logic Instructions\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Bitwise ANL, ORL, XRL Logic Instructions\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-12",
  "title": "8051 Bit Manipulation SETB and CLR on Bit-Addressable RAM",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for '8051 Bit Manipulation SETB and CLR on Bit-Addressable RAM'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Bit Manipulation SETB and CLR on Bit-Addressable RAM\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Bit Manipulation SETB and CLR on Bit-Addressable RAM\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Bit Manipulation SETB and CLR on Bit-Addressable RAM\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-13",
  "title": "8051 Rotate Left RL and RLC through Carry",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8051 Rotate Left RL and RLC through Carry'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Rotate Left RL and RLC through Carry\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Rotate Left RL and RLC through Carry\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Rotate Left RL and RLC through Carry\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-14",
  "title": "8051 Rotate Right RR and RRC through Carry",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8051 Rotate Right RR and RRC through Carry'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Rotate Right RR and RRC through Carry\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Rotate Right RR and RRC through Carry\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Rotate Right RR and RRC through Carry\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-15",
  "title": "8051 Nibble Swap Instruction (SWAP A)",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for '8051 Nibble Swap Instruction (SWAP A)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Nibble Swap Instruction (SWAP A)\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Nibble Swap Instruction (SWAP A)\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Nibble Swap Instruction (SWAP A)\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-16",
  "title": "8051 Compare and Jump if Not Equal (CJNE)",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8051 Compare and Jump if Not Equal (CJNE)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Compare and Jump if Not Equal (CJNE)\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Compare and Jump if Not Equal (CJNE)\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Compare and Jump if Not Equal (CJNE)\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-17",
  "title": "8051 Decrement and Jump if Not Zero (DJNZ Loop)",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8051 Decrement and Jump if Not Zero (DJNZ Loop)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Decrement and Jump if Not Zero (DJNZ Loop)\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Decrement and Jump if Not Zero (DJNZ Loop)\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Decrement and Jump if Not Zero (DJNZ Loop)\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-18",
  "title": "8051 Jump on Bit Status (JB, JNB, JBC)",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for '8051 Jump on Bit Status (JB, JNB, JBC)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Jump on Bit Status (JB, JNB, JBC)\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Jump on Bit Status (JB, JNB, JBC)\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Jump on Bit Status (JB, JNB, JBC)\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-19",
  "title": "8051 Call and Return Subroutine Execution (LCALL/RET)",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for '8051 Call and Return Subroutine Execution (LCALL/RET)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Call and Return Subroutine Execution (LCALL/RET)\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Call and Return Subroutine Execution (LCALL/RET)\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Call and Return Subroutine Execution (LCALL/RET)\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-20",
  "title": "8051 Push and Pop Stack Memory Architecture",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for '8051 Push and Pop Stack Memory Architecture'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: 8051 Push and Pop Stack Memory Architecture\nORG 0000H\n\n; TODO: Write assembly instructions for 8051 Push and Pop Stack Memory Architecture\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: 8051 Push and Pop Stack Memory Architecture\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "8051",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-21",
  "title": "MNEMONICS Pipeline Stage Part 1: Unit 21",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 1: Unit 21'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 1: Unit 21\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 1: Unit 21\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 1: Unit 21\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-22",
  "title": "MNEMONICS Interface Protocol Part 1: Unit 22",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 1: Unit 22'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 1: Unit 22\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 1: Unit 22\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 1: Unit 22\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-23",
  "title": "MNEMONICS Low-Power Design Part 1: Unit 23",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 1: Unit 23'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 1: Unit 23\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 1: Unit 23\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 1: Unit 23\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-24",
  "title": "MNEMONICS Timing Closure Part 1: Unit 24",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 1: Unit 24'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 1: Unit 24\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 1: Unit 24\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 1: Unit 24\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-25",
  "title": "MNEMONICS Resource Sharing Part 1: Unit 25",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 1: Unit 25'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 1: Unit 25\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 1: Unit 25\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 1: Unit 25\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-26",
  "title": "MNEMONICS Fault Tolerance Part 1: Unit 26",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 1: Unit 26'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 1: Unit 26\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 1: Unit 26\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 1: Unit 26\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-27",
  "title": "MNEMONICS Verification Testbench Part 1: Unit 27",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 1: Unit 27'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 1: Unit 27\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 1: Unit 27\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 1: Unit 27\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-28",
  "title": "MNEMONICS Hardware Acceleration Part 1: Unit 28",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 1: Unit 28'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 1: Unit 28\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 1: Unit 28\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 1: Unit 28\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-29",
  "title": "MNEMONICS Data Flow Control Part 1: Unit 29",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 1: Unit 29'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 1: Unit 29\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 1: Unit 29\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 1: Unit 29\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-30",
  "title": "MNEMONICS Corner Case Analysis Part 1: Unit 30",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 1: Unit 30'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 1: Unit 30\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 1: Unit 30\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 1: Unit 30\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-31",
  "title": "MNEMONICS Bandwidth Maximizer Part 1: Unit 31",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 1: Unit 31'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 1: Unit 31\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 1: Unit 31\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 1: Unit 31\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-32",
  "title": "MNEMONICS Latency Reduction Part 1: Unit 32",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 1: Unit 32'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 1: Unit 32\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 1: Unit 32\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 1: Unit 32\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-33",
  "title": "MNEMONICS CDC Isolation Part 1: Unit 33",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 1: Unit 33'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 1: Unit 33\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 1: Unit 33\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 1: Unit 33\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-34",
  "title": "MNEMONICS Error Handling Part 1: Unit 34",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 1: Unit 34'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 1: Unit 34\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 1: Unit 34\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 1: Unit 34\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-35",
  "title": "MNEMONICS High-Speed Encoding Part 1: Unit 35",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 1: Unit 35'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 1: Unit 35\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 1: Unit 35\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 1: Unit 35\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-36",
  "title": "MNEMONICS Synthesizable Model Part 1: Unit 36",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 1: Unit 36'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 1: Unit 36\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 1: Unit 36\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 1: Unit 36\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-37",
  "title": "MNEMONICS Optimization Part 2: Unit 37",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 2: Unit 37'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 2: Unit 37\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 2: Unit 37\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 2: Unit 37\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-38",
  "title": "MNEMONICS Architecture Part 2: Unit 38",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 2: Unit 38'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 2: Unit 38\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 2: Unit 38\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 2: Unit 38\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-39",
  "title": "MNEMONICS Pipeline Stage Part 2: Unit 39",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 2: Unit 39'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 2: Unit 39\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 2: Unit 39\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 2: Unit 39\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-40",
  "title": "MNEMONICS Interface Protocol Part 2: Unit 40",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 2: Unit 40'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 2: Unit 40\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 2: Unit 40\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 2: Unit 40\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-41",
  "title": "MNEMONICS Low-Power Design Part 2: Unit 41",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 2: Unit 41'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 2: Unit 41\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 2: Unit 41\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 2: Unit 41\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-42",
  "title": "MNEMONICS Timing Closure Part 2: Unit 42",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 2: Unit 42'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 2: Unit 42\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 2: Unit 42\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 2: Unit 42\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-43",
  "title": "MNEMONICS Resource Sharing Part 2: Unit 43",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 2: Unit 43'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 2: Unit 43\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 2: Unit 43\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 2: Unit 43\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-44",
  "title": "MNEMONICS Fault Tolerance Part 2: Unit 44",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 2: Unit 44'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 2: Unit 44\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 2: Unit 44\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 2: Unit 44\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-45",
  "title": "MNEMONICS Verification Testbench Part 2: Unit 45",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 2: Unit 45'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 2: Unit 45\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 2: Unit 45\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 2: Unit 45\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-46",
  "title": "MNEMONICS Hardware Acceleration Part 2: Unit 46",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 2: Unit 46'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 2: Unit 46\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 2: Unit 46\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 2: Unit 46\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-47",
  "title": "MNEMONICS Data Flow Control Part 2: Unit 47",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 2: Unit 47'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 2: Unit 47\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 2: Unit 47\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 2: Unit 47\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-48",
  "title": "MNEMONICS Corner Case Analysis Part 2: Unit 48",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 2: Unit 48'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 2: Unit 48\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 2: Unit 48\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 2: Unit 48\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-49",
  "title": "MNEMONICS Bandwidth Maximizer Part 2: Unit 49",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 2: Unit 49'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 2: Unit 49\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 2: Unit 49\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 2: Unit 49\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-50",
  "title": "MNEMONICS Latency Reduction Part 2: Unit 50",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 2: Unit 50'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 2: Unit 50\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 2: Unit 50\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 2: Unit 50\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-51",
  "title": "MNEMONICS CDC Isolation Part 2: Unit 51",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 2: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 2: Unit 51\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 2: Unit 51\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 2: Unit 51\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-52",
  "title": "MNEMONICS Error Handling Part 2: Unit 52",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 2: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 2: Unit 52\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 2: Unit 52\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 2: Unit 52\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-53",
  "title": "MNEMONICS High-Speed Encoding Part 2: Unit 53",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 2: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 2: Unit 53\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 2: Unit 53\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 2: Unit 53\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-54",
  "title": "MNEMONICS Synthesizable Model Part 2: Unit 54",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 2: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 2: Unit 54\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 2: Unit 54\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 2: Unit 54\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-55",
  "title": "MNEMONICS Optimization Part 3: Unit 55",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 3: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 3: Unit 55\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 3: Unit 55\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 3: Unit 55\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-56",
  "title": "MNEMONICS Architecture Part 3: Unit 56",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 3: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 3: Unit 56\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 3: Unit 56\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 3: Unit 56\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-57",
  "title": "MNEMONICS Pipeline Stage Part 3: Unit 57",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 3: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 3: Unit 57\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 3: Unit 57\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 3: Unit 57\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-58",
  "title": "MNEMONICS Interface Protocol Part 3: Unit 58",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 3: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 3: Unit 58\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 3: Unit 58\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 3: Unit 58\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-59",
  "title": "MNEMONICS Low-Power Design Part 3: Unit 59",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 3: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 3: Unit 59\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 3: Unit 59\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 3: Unit 59\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-60",
  "title": "MNEMONICS Timing Closure Part 3: Unit 60",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 3: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 3: Unit 60\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 3: Unit 60\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 3: Unit 60\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-61",
  "title": "MNEMONICS Resource Sharing Part 3: Unit 61",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 3: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 3: Unit 61\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 3: Unit 61\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 3: Unit 61\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-62",
  "title": "MNEMONICS Fault Tolerance Part 3: Unit 62",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 3: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 3: Unit 62\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 3: Unit 62\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 3: Unit 62\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-63",
  "title": "MNEMONICS Verification Testbench Part 3: Unit 63",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 3: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 3: Unit 63\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 3: Unit 63\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 3: Unit 63\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-64",
  "title": "MNEMONICS Hardware Acceleration Part 3: Unit 64",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 3: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 3: Unit 64\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 3: Unit 64\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 3: Unit 64\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-65",
  "title": "MNEMONICS Data Flow Control Part 3: Unit 65",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 3: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 3: Unit 65\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 3: Unit 65\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 3: Unit 65\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-66",
  "title": "MNEMONICS Corner Case Analysis Part 3: Unit 66",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 3: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 3: Unit 66\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 3: Unit 66\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 3: Unit 66\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-67",
  "title": "MNEMONICS Bandwidth Maximizer Part 3: Unit 67",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 3: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 3: Unit 67\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 3: Unit 67\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 3: Unit 67\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-68",
  "title": "MNEMONICS Latency Reduction Part 3: Unit 68",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 3: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 3: Unit 68\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 3: Unit 68\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 3: Unit 68\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-69",
  "title": "MNEMONICS CDC Isolation Part 3: Unit 69",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 3: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 3: Unit 69\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 3: Unit 69\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 3: Unit 69\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-70",
  "title": "MNEMONICS Error Handling Part 3: Unit 70",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 3: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 3: Unit 70\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 3: Unit 70\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 3: Unit 70\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-71",
  "title": "MNEMONICS High-Speed Encoding Part 3: Unit 71",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 3: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 3: Unit 71\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 3: Unit 71\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 3: Unit 71\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-72",
  "title": "MNEMONICS Synthesizable Model Part 3: Unit 72",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 3: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 3: Unit 72\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 3: Unit 72\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 3: Unit 72\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-73",
  "title": "MNEMONICS Optimization Part 4: Unit 73",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 4: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 4: Unit 73\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 4: Unit 73\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 4: Unit 73\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-74",
  "title": "MNEMONICS Architecture Part 4: Unit 74",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 4: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 4: Unit 74\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 4: Unit 74\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 4: Unit 74\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-75",
  "title": "MNEMONICS Pipeline Stage Part 4: Unit 75",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 4: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 4: Unit 75\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 4: Unit 75\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 4: Unit 75\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-76",
  "title": "MNEMONICS Interface Protocol Part 4: Unit 76",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 4: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 4: Unit 76\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 4: Unit 76\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 4: Unit 76\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-77",
  "title": "MNEMONICS Low-Power Design Part 4: Unit 77",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 4: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 4: Unit 77\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 4: Unit 77\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 4: Unit 77\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-78",
  "title": "MNEMONICS Timing Closure Part 4: Unit 78",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 4: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 4: Unit 78\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 4: Unit 78\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 4: Unit 78\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-79",
  "title": "MNEMONICS Resource Sharing Part 4: Unit 79",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 4: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 4: Unit 79\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 4: Unit 79\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 4: Unit 79\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-80",
  "title": "MNEMONICS Fault Tolerance Part 4: Unit 80",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 4: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 4: Unit 80\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 4: Unit 80\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 4: Unit 80\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-81",
  "title": "MNEMONICS Verification Testbench Part 4: Unit 81",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 4: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 4: Unit 81\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 4: Unit 81\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 4: Unit 81\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-82",
  "title": "MNEMONICS Hardware Acceleration Part 4: Unit 82",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 4: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 4: Unit 82\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 4: Unit 82\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 4: Unit 82\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-83",
  "title": "MNEMONICS Data Flow Control Part 4: Unit 83",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 4: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 4: Unit 83\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 4: Unit 83\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 4: Unit 83\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-84",
  "title": "MNEMONICS Corner Case Analysis Part 4: Unit 84",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 4: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 4: Unit 84\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 4: Unit 84\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 4: Unit 84\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-85",
  "title": "MNEMONICS Bandwidth Maximizer Part 4: Unit 85",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 4: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 4: Unit 85\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 4: Unit 85\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 4: Unit 85\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-86",
  "title": "MNEMONICS Latency Reduction Part 4: Unit 86",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 4: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 4: Unit 86\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 4: Unit 86\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 4: Unit 86\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-87",
  "title": "MNEMONICS CDC Isolation Part 4: Unit 87",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 4: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 4: Unit 87\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 4: Unit 87\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 4: Unit 87\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-88",
  "title": "MNEMONICS Error Handling Part 4: Unit 88",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 4: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 4: Unit 88\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 4: Unit 88\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 4: Unit 88\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-89",
  "title": "MNEMONICS High-Speed Encoding Part 4: Unit 89",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 4: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 4: Unit 89\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 4: Unit 89\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 4: Unit 89\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-90",
  "title": "MNEMONICS Synthesizable Model Part 4: Unit 90",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 4: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 4: Unit 90\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 4: Unit 90\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 4: Unit 90\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-91",
  "title": "MNEMONICS Optimization Part 5: Unit 91",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 5: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 5: Unit 91\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 5: Unit 91\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 5: Unit 91\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-92",
  "title": "MNEMONICS Architecture Part 5: Unit 92",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 5: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 5: Unit 92\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 5: Unit 92\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 5: Unit 92\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-93",
  "title": "MNEMONICS Pipeline Stage Part 5: Unit 93",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 5: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 5: Unit 93\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 5: Unit 93\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 5: Unit 93\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-94",
  "title": "MNEMONICS Interface Protocol Part 5: Unit 94",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 5: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 5: Unit 94\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 5: Unit 94\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 5: Unit 94\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-95",
  "title": "MNEMONICS Low-Power Design Part 5: Unit 95",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 5: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 5: Unit 95\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 5: Unit 95\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 5: Unit 95\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-96",
  "title": "MNEMONICS Timing Closure Part 5: Unit 96",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 5: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 5: Unit 96\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 5: Unit 96\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 5: Unit 96\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-97",
  "title": "MNEMONICS Resource Sharing Part 5: Unit 97",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 5: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 5: Unit 97\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 5: Unit 97\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 5: Unit 97\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-98",
  "title": "MNEMONICS Fault Tolerance Part 5: Unit 98",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 5: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 5: Unit 98\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 5: Unit 98\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 5: Unit 98\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-99",
  "title": "MNEMONICS Verification Testbench Part 5: Unit 99",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 5: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 5: Unit 99\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 5: Unit 99\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 5: Unit 99\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-100",
  "title": "MNEMONICS Hardware Acceleration Part 5: Unit 100",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 5: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 5: Unit 100\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 5: Unit 100\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 5: Unit 100\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-101",
  "title": "MNEMONICS Data Flow Control Part 5: Unit 101",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 5: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 5: Unit 101\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 5: Unit 101\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 5: Unit 101\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-102",
  "title": "MNEMONICS Corner Case Analysis Part 5: Unit 102",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 5: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 5: Unit 102\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 5: Unit 102\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 5: Unit 102\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-103",
  "title": "MNEMONICS Bandwidth Maximizer Part 5: Unit 103",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 5: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 5: Unit 103\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 5: Unit 103\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 5: Unit 103\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-104",
  "title": "MNEMONICS Latency Reduction Part 5: Unit 104",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 5: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 5: Unit 104\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 5: Unit 104\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 5: Unit 104\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-105",
  "title": "MNEMONICS CDC Isolation Part 5: Unit 105",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 5: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 5: Unit 105\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 5: Unit 105\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 5: Unit 105\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-106",
  "title": "MNEMONICS Error Handling Part 5: Unit 106",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 5: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 5: Unit 106\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 5: Unit 106\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 5: Unit 106\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-107",
  "title": "MNEMONICS High-Speed Encoding Part 5: Unit 107",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 5: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 5: Unit 107\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 5: Unit 107\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 5: Unit 107\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-108",
  "title": "MNEMONICS Synthesizable Model Part 5: Unit 108",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 5: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 5: Unit 108\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 5: Unit 108\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 5: Unit 108\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-109",
  "title": "MNEMONICS Optimization Part 6: Unit 109",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 6: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 6: Unit 109\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 6: Unit 109\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 6: Unit 109\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-110",
  "title": "MNEMONICS Architecture Part 6: Unit 110",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 6: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 6: Unit 110\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 6: Unit 110\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 6: Unit 110\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-111",
  "title": "MNEMONICS Pipeline Stage Part 6: Unit 111",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 6: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 6: Unit 111\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 6: Unit 111\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 6: Unit 111\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-112",
  "title": "MNEMONICS Interface Protocol Part 6: Unit 112",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 6: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 6: Unit 112\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 6: Unit 112\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 6: Unit 112\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-113",
  "title": "MNEMONICS Low-Power Design Part 6: Unit 113",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 6: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 6: Unit 113\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 6: Unit 113\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 6: Unit 113\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-114",
  "title": "MNEMONICS Timing Closure Part 6: Unit 114",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 6: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 6: Unit 114\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 6: Unit 114\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 6: Unit 114\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-115",
  "title": "MNEMONICS Resource Sharing Part 6: Unit 115",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 6: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 6: Unit 115\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 6: Unit 115\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 6: Unit 115\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-116",
  "title": "MNEMONICS Fault Tolerance Part 6: Unit 116",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 6: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 6: Unit 116\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 6: Unit 116\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 6: Unit 116\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-117",
  "title": "MNEMONICS Verification Testbench Part 6: Unit 117",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 6: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 6: Unit 117\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 6: Unit 117\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 6: Unit 117\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-118",
  "title": "MNEMONICS Hardware Acceleration Part 6: Unit 118",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 6: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 6: Unit 118\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 6: Unit 118\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 6: Unit 118\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-119",
  "title": "MNEMONICS Data Flow Control Part 6: Unit 119",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 6: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 6: Unit 119\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 6: Unit 119\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 6: Unit 119\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-120",
  "title": "MNEMONICS Corner Case Analysis Part 6: Unit 120",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 6: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 6: Unit 120\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 6: Unit 120\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 6: Unit 120\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-121",
  "title": "MNEMONICS Bandwidth Maximizer Part 6: Unit 121",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 6: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 6: Unit 121\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 6: Unit 121\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 6: Unit 121\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-122",
  "title": "MNEMONICS Latency Reduction Part 6: Unit 122",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 6: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 6: Unit 122\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 6: Unit 122\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 6: Unit 122\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-123",
  "title": "MNEMONICS CDC Isolation Part 6: Unit 123",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 6: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 6: Unit 123\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 6: Unit 123\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 6: Unit 123\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-124",
  "title": "MNEMONICS Error Handling Part 6: Unit 124",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 6: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 6: Unit 124\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 6: Unit 124\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 6: Unit 124\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-125",
  "title": "MNEMONICS High-Speed Encoding Part 6: Unit 125",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 6: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 6: Unit 125\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 6: Unit 125\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 6: Unit 125\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-126",
  "title": "MNEMONICS Synthesizable Model Part 6: Unit 126",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 6: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 6: Unit 126\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 6: Unit 126\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 6: Unit 126\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-127",
  "title": "MNEMONICS Optimization Part 7: Unit 127",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 7: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 7: Unit 127\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 7: Unit 127\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 7: Unit 127\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-128",
  "title": "MNEMONICS Architecture Part 7: Unit 128",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 7: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 7: Unit 128\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 7: Unit 128\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 7: Unit 128\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-129",
  "title": "MNEMONICS Pipeline Stage Part 7: Unit 129",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 7: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 7: Unit 129\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 7: Unit 129\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 7: Unit 129\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-130",
  "title": "MNEMONICS Interface Protocol Part 7: Unit 130",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 7: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 7: Unit 130\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 7: Unit 130\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 7: Unit 130\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-131",
  "title": "MNEMONICS Low-Power Design Part 7: Unit 131",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 7: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 7: Unit 131\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 7: Unit 131\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 7: Unit 131\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-132",
  "title": "MNEMONICS Timing Closure Part 7: Unit 132",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 7: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 7: Unit 132\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 7: Unit 132\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 7: Unit 132\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-133",
  "title": "MNEMONICS Resource Sharing Part 7: Unit 133",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 7: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 7: Unit 133\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 7: Unit 133\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 7: Unit 133\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-134",
  "title": "MNEMONICS Fault Tolerance Part 7: Unit 134",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 7: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 7: Unit 134\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 7: Unit 134\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 7: Unit 134\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-135",
  "title": "MNEMONICS Verification Testbench Part 7: Unit 135",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 7: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 7: Unit 135\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 7: Unit 135\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 7: Unit 135\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-136",
  "title": "MNEMONICS Hardware Acceleration Part 7: Unit 136",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 7: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 7: Unit 136\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 7: Unit 136\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 7: Unit 136\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-137",
  "title": "MNEMONICS Data Flow Control Part 7: Unit 137",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 7: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 7: Unit 137\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 7: Unit 137\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 7: Unit 137\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-138",
  "title": "MNEMONICS Corner Case Analysis Part 7: Unit 138",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 7: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 7: Unit 138\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 7: Unit 138\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 7: Unit 138\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-139",
  "title": "MNEMONICS Bandwidth Maximizer Part 7: Unit 139",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 7: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 7: Unit 139\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 7: Unit 139\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 7: Unit 139\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-140",
  "title": "MNEMONICS Latency Reduction Part 7: Unit 140",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 7: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 7: Unit 140\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 7: Unit 140\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 7: Unit 140\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-141",
  "title": "MNEMONICS CDC Isolation Part 7: Unit 141",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 7: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 7: Unit 141\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 7: Unit 141\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 7: Unit 141\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-142",
  "title": "MNEMONICS Error Handling Part 7: Unit 142",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 7: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 7: Unit 142\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 7: Unit 142\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 7: Unit 142\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-143",
  "title": "MNEMONICS High-Speed Encoding Part 7: Unit 143",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 7: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 7: Unit 143\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 7: Unit 143\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 7: Unit 143\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-144",
  "title": "MNEMONICS Synthesizable Model Part 7: Unit 144",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 7: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 7: Unit 144\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 7: Unit 144\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 7: Unit 144\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-145",
  "title": "MNEMONICS Optimization Part 8: Unit 145",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 8: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 8: Unit 145\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 8: Unit 145\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 8: Unit 145\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-146",
  "title": "MNEMONICS Architecture Part 8: Unit 146",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 8: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 8: Unit 146\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 8: Unit 146\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 8: Unit 146\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-147",
  "title": "MNEMONICS Pipeline Stage Part 8: Unit 147",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 8: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 8: Unit 147\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 8: Unit 147\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 8: Unit 147\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-148",
  "title": "MNEMONICS Interface Protocol Part 8: Unit 148",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 8: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 8: Unit 148\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 8: Unit 148\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 8: Unit 148\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-149",
  "title": "MNEMONICS Low-Power Design Part 8: Unit 149",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 8: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 8: Unit 149\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 8: Unit 149\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 8: Unit 149\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-150",
  "title": "MNEMONICS Timing Closure Part 8: Unit 150",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 8: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 8: Unit 150\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 8: Unit 150\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 8: Unit 150\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-151",
  "title": "MNEMONICS Resource Sharing Part 8: Unit 151",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 8: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 8: Unit 151\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 8: Unit 151\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 8: Unit 151\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-152",
  "title": "MNEMONICS Fault Tolerance Part 8: Unit 152",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 8: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 8: Unit 152\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 8: Unit 152\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 8: Unit 152\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-153",
  "title": "MNEMONICS Verification Testbench Part 8: Unit 153",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 8: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 8: Unit 153\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 8: Unit 153\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 8: Unit 153\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-154",
  "title": "MNEMONICS Hardware Acceleration Part 8: Unit 154",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 8: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 8: Unit 154\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 8: Unit 154\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 8: Unit 154\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-155",
  "title": "MNEMONICS Data Flow Control Part 8: Unit 155",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 8: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 8: Unit 155\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 8: Unit 155\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 8: Unit 155\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-156",
  "title": "MNEMONICS Corner Case Analysis Part 8: Unit 156",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 8: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 8: Unit 156\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 8: Unit 156\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 8: Unit 156\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-157",
  "title": "MNEMONICS Bandwidth Maximizer Part 8: Unit 157",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 8: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 8: Unit 157\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 8: Unit 157\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 8: Unit 157\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-158",
  "title": "MNEMONICS Latency Reduction Part 8: Unit 158",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 8: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 8: Unit 158\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 8: Unit 158\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 8: Unit 158\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-159",
  "title": "MNEMONICS CDC Isolation Part 8: Unit 159",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 8: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 8: Unit 159\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 8: Unit 159\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 8: Unit 159\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-160",
  "title": "MNEMONICS Error Handling Part 8: Unit 160",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 8: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 8: Unit 160\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 8: Unit 160\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 8: Unit 160\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-161",
  "title": "MNEMONICS High-Speed Encoding Part 8: Unit 161",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 8: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 8: Unit 161\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 8: Unit 161\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 8: Unit 161\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-162",
  "title": "MNEMONICS Synthesizable Model Part 8: Unit 162",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 8: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 8: Unit 162\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 8: Unit 162\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 8: Unit 162\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-163",
  "title": "MNEMONICS Optimization Part 9: Unit 163",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 9: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 9: Unit 163\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 9: Unit 163\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 9: Unit 163\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-164",
  "title": "MNEMONICS Architecture Part 9: Unit 164",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 9: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 9: Unit 164\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 9: Unit 164\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 9: Unit 164\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-165",
  "title": "MNEMONICS Pipeline Stage Part 9: Unit 165",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 9: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 9: Unit 165\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 9: Unit 165\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 9: Unit 165\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-166",
  "title": "MNEMONICS Interface Protocol Part 9: Unit 166",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 9: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 9: Unit 166\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 9: Unit 166\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 9: Unit 166\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-167",
  "title": "MNEMONICS Low-Power Design Part 9: Unit 167",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 9: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 9: Unit 167\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 9: Unit 167\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 9: Unit 167\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-168",
  "title": "MNEMONICS Timing Closure Part 9: Unit 168",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 9: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 9: Unit 168\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 9: Unit 168\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 9: Unit 168\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-169",
  "title": "MNEMONICS Resource Sharing Part 9: Unit 169",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 9: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 9: Unit 169\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 9: Unit 169\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 9: Unit 169\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-170",
  "title": "MNEMONICS Fault Tolerance Part 9: Unit 170",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 9: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 9: Unit 170\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 9: Unit 170\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 9: Unit 170\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-171",
  "title": "MNEMONICS Verification Testbench Part 9: Unit 171",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 9: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 9: Unit 171\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 9: Unit 171\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 9: Unit 171\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-172",
  "title": "MNEMONICS Hardware Acceleration Part 9: Unit 172",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 9: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 9: Unit 172\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 9: Unit 172\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 9: Unit 172\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-173",
  "title": "MNEMONICS Data Flow Control Part 9: Unit 173",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 9: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 9: Unit 173\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 9: Unit 173\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 9: Unit 173\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-174",
  "title": "MNEMONICS Corner Case Analysis Part 9: Unit 174",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 9: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 9: Unit 174\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 9: Unit 174\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 9: Unit 174\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-175",
  "title": "MNEMONICS Bandwidth Maximizer Part 9: Unit 175",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 9: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 9: Unit 175\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 9: Unit 175\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 9: Unit 175\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-176",
  "title": "MNEMONICS Latency Reduction Part 9: Unit 176",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 9: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 9: Unit 176\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 9: Unit 176\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 9: Unit 176\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-177",
  "title": "MNEMONICS CDC Isolation Part 9: Unit 177",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 9: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 9: Unit 177\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 9: Unit 177\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 9: Unit 177\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-178",
  "title": "MNEMONICS Error Handling Part 9: Unit 178",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 9: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 9: Unit 178\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 9: Unit 178\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 9: Unit 178\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-179",
  "title": "MNEMONICS High-Speed Encoding Part 9: Unit 179",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 9: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 9: Unit 179\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 9: Unit 179\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 9: Unit 179\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-180",
  "title": "MNEMONICS Synthesizable Model Part 9: Unit 180",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 9: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 9: Unit 180\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 9: Unit 180\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 9: Unit 180\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-181",
  "title": "MNEMONICS Optimization Part 10: Unit 181",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 10: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 10: Unit 181\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 10: Unit 181\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 10: Unit 181\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-182",
  "title": "MNEMONICS Architecture Part 10: Unit 182",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 10: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 10: Unit 182\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 10: Unit 182\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 10: Unit 182\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-183",
  "title": "MNEMONICS Pipeline Stage Part 10: Unit 183",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Pipeline Stage Part 10: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 10: Unit 183\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Pipeline Stage Part 10: Unit 183\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Pipeline Stage Part 10: Unit 183\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-184",
  "title": "MNEMONICS Interface Protocol Part 10: Unit 184",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Interface Protocol Part 10: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 10: Unit 184\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Interface Protocol Part 10: Unit 184\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Interface Protocol Part 10: Unit 184\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-185",
  "title": "MNEMONICS Low-Power Design Part 10: Unit 185",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Low-Power Design Part 10: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 10: Unit 185\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Low-Power Design Part 10: Unit 185\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Low-Power Design Part 10: Unit 185\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-186",
  "title": "MNEMONICS Timing Closure Part 10: Unit 186",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Timing Closure Part 10: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 10: Unit 186\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Timing Closure Part 10: Unit 186\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Timing Closure Part 10: Unit 186\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-187",
  "title": "MNEMONICS Resource Sharing Part 10: Unit 187",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Resource Sharing Part 10: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 10: Unit 187\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Resource Sharing Part 10: Unit 187\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Resource Sharing Part 10: Unit 187\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-188",
  "title": "MNEMONICS Fault Tolerance Part 10: Unit 188",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Fault Tolerance Part 10: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 10: Unit 188\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Fault Tolerance Part 10: Unit 188\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Fault Tolerance Part 10: Unit 188\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-189",
  "title": "MNEMONICS Verification Testbench Part 10: Unit 189",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Verification Testbench Part 10: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 10: Unit 189\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Verification Testbench Part 10: Unit 189\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Verification Testbench Part 10: Unit 189\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-190",
  "title": "MNEMONICS Hardware Acceleration Part 10: Unit 190",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Hardware Acceleration Part 10: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 10: Unit 190\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Hardware Acceleration Part 10: Unit 190\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Hardware Acceleration Part 10: Unit 190\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-191",
  "title": "MNEMONICS Data Flow Control Part 10: Unit 191",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Data Flow Control Part 10: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 10: Unit 191\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Data Flow Control Part 10: Unit 191\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Data Flow Control Part 10: Unit 191\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-192",
  "title": "MNEMONICS Corner Case Analysis Part 10: Unit 192",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Corner Case Analysis Part 10: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 10: Unit 192\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Corner Case Analysis Part 10: Unit 192\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Corner Case Analysis Part 10: Unit 192\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-193",
  "title": "MNEMONICS Bandwidth Maximizer Part 10: Unit 193",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Bandwidth Maximizer Part 10: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 10: Unit 193\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Bandwidth Maximizer Part 10: Unit 193\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Bandwidth Maximizer Part 10: Unit 193\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-194",
  "title": "MNEMONICS Latency Reduction Part 10: Unit 194",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Latency Reduction Part 10: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 10: Unit 194\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Latency Reduction Part 10: Unit 194\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Latency Reduction Part 10: Unit 194\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-195",
  "title": "MNEMONICS CDC Isolation Part 10: Unit 195",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS CDC Isolation Part 10: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 10: Unit 195\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS CDC Isolation Part 10: Unit 195\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS CDC Isolation Part 10: Unit 195\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-196",
  "title": "MNEMONICS Error Handling Part 10: Unit 196",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Error Handling Part 10: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 10: Unit 196\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Error Handling Part 10: Unit 196\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Error Handling Part 10: Unit 196\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-197",
  "title": "MNEMONICS High-Speed Encoding Part 10: Unit 197",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS High-Speed Encoding Part 10: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 10: Unit 197\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS High-Speed Encoding Part 10: Unit 197\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS High-Speed Encoding Part 10: Unit 197\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-198",
  "title": "MNEMONICS Synthesizable Model Part 10: Unit 198",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'MNEMONICS Synthesizable Model Part 10: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 10: Unit 198\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Synthesizable Model Part 10: Unit 198\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Synthesizable Model Part 10: Unit 198\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-199",
  "title": "MNEMONICS Optimization Part 11: Unit 199",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'MNEMONICS Optimization Part 11: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 11: Unit 199\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Optimization Part 11: Unit 199\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Optimization Part 11: Unit 199\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "asm-200",
  "title": "MNEMONICS Architecture Part 11: Unit 200",
  "topic": "mnemonics",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'MNEMONICS Architecture Part 11: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Identify source and destination registers.\nStep 2: Execute mnemonic instructions (MOV, ADD, DJNZ, etc.).\nStep 3: Terminate routine cleanly.",
  "starterCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 11: Unit 200\nORG 0000H\n\n; TODO: Write assembly instructions for MNEMONICS Architecture Part 11: Unit 200\nMOV A, #00H\n\nEND\n",
  "solutionCode": "; Assembly Mnemonics: MNEMONICS Architecture Part 11: Unit 200\nORG 0000H\n\nMOV A, #05H\nMOV R0, A\n\nEND\n",
  "hints": [
    "Remember standard operand order: instruction destination, source.",
    "Watch condition flags in Status Word (PSW/xPSR)."
  ],
  "tags": [
    "MNEMONICS",
    "MNEMONICS",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
