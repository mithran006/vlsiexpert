import { Problem } from '../types';

export const EMBEDDED_C_PROBLEMS: Problem[] = [
{
  "id": "emb-c-01",
  "title": "Volatile Register Pointer Memory-Mapped I/O Access",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Volatile Register Pointer Memory-Mapped I/O Access'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Volatile Register Pointer Memory-Mapped I/O Access.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Volatile Register Pointer Memory-Mapped I/O Access\nvoid volatile_register_pointer_memo_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid volatile_register_pointer_memo_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Volatile",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-02",
  "title": "Bitwise Set, Clear, Toggle Macro Implementation",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Bitwise Set, Clear, Toggle Macro Implementation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Bitwise Set, Clear, Toggle Macro Implementation.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Bitwise Set, Clear, Toggle Macro Implementation\nvoid bitwise_set__clear__toggle_mac_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid bitwise_set__clear__toggle_mac_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Bitwise",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-03",
  "title": "Bitfield Structure Overlay for Hardware Peripherals",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Bitfield Structure Overlay for Hardware Peripherals'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Bitfield Structure Overlay for Hardware Peripherals.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Bitfield Structure Overlay for Hardware Peripherals\nvoid bitfield_structure_overlay_for_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid bitfield_structure_overlay_for_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Bitfield",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-04",
  "title": "GPIO Pin Direction and Output Register Driver",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'GPIO Pin Direction and Output Register Driver'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for GPIO Pin Direction and Output Register Driver.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement GPIO Pin Direction and Output Register Driver\nvoid gpio_pin_direction_and_output__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid gpio_pin_direction_and_output__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "GPIO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-05",
  "title": "Timer Periodic Tick Millisecond Counter",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Timer Periodic Tick Millisecond Counter'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Timer Periodic Tick Millisecond Counter.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Timer Periodic Tick Millisecond Counter\nvoid timer_periodic_tick_millisecon_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid timer_periodic_tick_millisecon_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Timer",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-06",
  "title": "UART Interrupt-Driven Circular Ring Buffer (Rx/Tx)",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'UART Interrupt-Driven Circular Ring Buffer (Rx/Tx)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for UART Interrupt-Driven Circular Ring Buffer (Rx/Tx).",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement UART Interrupt-Driven Circular Ring Buffer (Rx/Tx)\nvoid uart_interrupt_driven_circular_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid uart_interrupt_driven_circular_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
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
  "id": "emb-c-07",
  "title": "SPI Master Mode 0 Byte Transfer Routine",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'SPI Master Mode 0 Byte Transfer Routine'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for SPI Master Mode 0 Byte Transfer Routine.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement SPI Master Mode 0 Byte Transfer Routine\nvoid spi_master_mode_0_byte_transfe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid spi_master_mode_0_byte_transfe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
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
  "id": "emb-c-08",
  "title": "I2C Master Start, Address, ACK Detection Routine",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'I2C Master Start, Address, ACK Detection Routine'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for I2C Master Start, Address, ACK Detection Routine.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement I2C Master Start, Address, ACK Detection Routine\nvoid i2c_master_start__address__ack_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid i2c_master_start__address__ack_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
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
  "id": "emb-c-09",
  "title": "ADC Single-Ended Voltage Conversion & Averaging",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ADC Single-Ended Voltage Conversion & Averaging'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for ADC Single-Ended Voltage Conversion & Averaging.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement ADC Single-Ended Voltage Conversion & Averaging\nvoid adc_single_ended_voltage_conve_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid adc_single_ended_voltage_conve_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "ADC",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-10",
  "title": "Interrupt Service Routine (ISR) Shared Flag Safety",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Interrupt Service Routine (ISR) Shared Flag Safety'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Interrupt Service Routine (ISR) Shared Flag Safety.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Interrupt Service Routine (ISR) Shared Flag Safety\nvoid interrupt_service_routine__isr_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid interrupt_service_routine__isr_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Interrupt",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-11",
  "title": "Nested Vectored Interrupt Priority Masking in C",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Nested Vectored Interrupt Priority Masking in C'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Nested Vectored Interrupt Priority Masking in C.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Nested Vectored Interrupt Priority Masking in C\nvoid nested_vectored_interrupt_prio_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid nested_vectored_interrupt_prio_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
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
  "id": "emb-c-12",
  "title": "Watchdog Timer Refresh & Timeout Supervisor",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Watchdog Timer Refresh & Timeout Supervisor'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Watchdog Timer Refresh & Timeout Supervisor.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Watchdog Timer Refresh & Timeout Supervisor\nvoid watchdog_timer_refresh___timeo_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid watchdog_timer_refresh___timeo_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Watchdog",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-13",
  "title": "Software Debouncing State Machine for Pushbuttons",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Software Debouncing State Machine for Pushbuttons'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Software Debouncing State Machine for Pushbuttons.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Software Debouncing State Machine for Pushbuttons\nvoid software_debouncing_state_mach_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid software_debouncing_state_mach_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Software",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-14",
  "title": "Circular Queue Ring Buffer with Mutex Safety",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Circular Queue Ring Buffer with Mutex Safety'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Circular Queue Ring Buffer with Mutex Safety.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Circular Queue Ring Buffer with Mutex Safety\nvoid circular_queue_ring_buffer_wit_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid circular_queue_ring_buffer_wit_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Circular",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-15",
  "title": "Finite State Machine (FSM) Function Pointer Table",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Finite State Machine (FSM) Function Pointer Table'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Finite State Machine (FSM) Function Pointer Table.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Finite State Machine (FSM) Function Pointer Table\nvoid finite_state_machine__fsm__fun_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid finite_state_machine__fsm__fun_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Finite",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-16",
  "title": "Flash Memory Block Sector Erase & Page Write",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Flash Memory Block Sector Erase & Page Write'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Flash Memory Block Sector Erase & Page Write.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Flash Memory Block Sector Erase & Page Write\nvoid flash_memory_block_sector_eras_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid flash_memory_block_sector_eras_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Flash",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-17",
  "title": "CRC-16-CCITT Fast Lookup Table Calculation in C",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'CRC-16-CCITT Fast Lookup Table Calculation in C'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for CRC-16-CCITT Fast Lookup Table Calculation in C.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement CRC-16-CCITT Fast Lookup Table Calculation in C\nvoid crc_16_ccitt_fast_lookup_table_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid crc_16_ccitt_fast_lookup_table_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
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
  "id": "emb-c-18",
  "title": "Packed Struct Network Packet Protocol Parser",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Packed Struct Network Packet Protocol Parser'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Packed Struct Network Packet Protocol Parser.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Packed Struct Network Packet Protocol Parser\nvoid packed_struct_network_packet_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid packed_struct_network_packet_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
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
  "id": "emb-c-19",
  "title": "Endianness Swap 16-bit and 32-bit (HTONS / NTOHL)",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Endianness Swap 16-bit and 32-bit (HTONS / NTOHL)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Endianness Swap 16-bit and 32-bit (HTONS / NTOHL).",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Endianness Swap 16-bit and 32-bit (HTONS / NTOHL)\nvoid endianness_swap_16_bit_and_32__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid endianness_swap_16_bit_and_32__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Endianness",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-20",
  "title": "Direct Memory Access (DMA) Descriptor Buffer Chain",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Direct Memory Access (DMA) Descriptor Buffer Chain'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for Direct Memory Access (DMA) Descriptor Buffer Chain.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement Direct Memory Access (DMA) Descriptor Buffer Chain\nvoid direct_memory_access__dma__des_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid direct_memory_access__dma__des_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "Direct",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-21",
  "title": "EMBEDDED_C Pipeline Stage Part 1: Unit 21",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 1: Unit 21'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 1: Unit 21.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 1: Unit 21\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-22",
  "title": "EMBEDDED_C Interface Protocol Part 1: Unit 22",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 1: Unit 22'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 1: Unit 22.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 1: Unit 22\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-23",
  "title": "EMBEDDED_C Low-Power Design Part 1: Unit 23",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 1: Unit 23'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 1: Unit 23.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 1: Unit 23\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-24",
  "title": "EMBEDDED_C Timing Closure Part 1: Unit 24",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 1: Unit 24'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 1: Unit 24.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 1: Unit 24\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-25",
  "title": "EMBEDDED_C Resource Sharing Part 1: Unit 25",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 1: Unit 25'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 1: Unit 25.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 1: Unit 25\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-26",
  "title": "EMBEDDED_C Fault Tolerance Part 1: Unit 26",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 1: Unit 26'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 1: Unit 26.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 1: Unit 26\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-27",
  "title": "EMBEDDED_C Verification Testbench Part 1: Unit 27",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 1: Unit 27'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 1: Unit 27.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 1: Unit 27\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-28",
  "title": "EMBEDDED_C Hardware Acceleration Part 1: Unit 28",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 1: Unit 28'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 1: Unit 28.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 1: Unit 28\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-29",
  "title": "EMBEDDED_C Data Flow Control Part 1: Unit 29",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 1: Unit 29'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 1: Unit 29.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 1: Unit 29\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-30",
  "title": "EMBEDDED_C Corner Case Analysis Part 1: Unit 30",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 1: Unit 30'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 1: Unit 30.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 1: Unit 30\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-31",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 1: Unit 31",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 1: Unit 31'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 1: Unit 31.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 1: Unit 31\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-32",
  "title": "EMBEDDED_C Latency Reduction Part 1: Unit 32",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 1: Unit 32'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 1: Unit 32.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 1: Unit 32\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-33",
  "title": "EMBEDDED_C CDC Isolation Part 1: Unit 33",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 1: Unit 33'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 1: Unit 33.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 1: Unit 33\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-34",
  "title": "EMBEDDED_C Error Handling Part 1: Unit 34",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 1: Unit 34'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 1: Unit 34.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 1: Unit 34\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-35",
  "title": "EMBEDDED_C High-Speed Encoding Part 1: Unit 35",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 1: Unit 35'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 1: Unit 35.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 1: Unit 35\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-36",
  "title": "EMBEDDED_C Synthesizable Model Part 1: Unit 36",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 1: Unit 36'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 1: Unit 36.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 1: Unit 36\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-37",
  "title": "EMBEDDED_C Optimization Part 2: Unit 37",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 2: Unit 37'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 2: Unit 37.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 2: Unit 37\nvoid embedded_c_optimization_part_2_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_2_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-38",
  "title": "EMBEDDED_C Architecture Part 2: Unit 38",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 2: Unit 38'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 2: Unit 38.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 2: Unit 38\nvoid embedded_c_architecture_part_2_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_2_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-39",
  "title": "EMBEDDED_C Pipeline Stage Part 2: Unit 39",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 2: Unit 39'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 2: Unit 39.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 2: Unit 39\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-40",
  "title": "EMBEDDED_C Interface Protocol Part 2: Unit 40",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 2: Unit 40'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 2: Unit 40.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 2: Unit 40\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-41",
  "title": "EMBEDDED_C Low-Power Design Part 2: Unit 41",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 2: Unit 41'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 2: Unit 41.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 2: Unit 41\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-42",
  "title": "EMBEDDED_C Timing Closure Part 2: Unit 42",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 2: Unit 42'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 2: Unit 42.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 2: Unit 42\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-43",
  "title": "EMBEDDED_C Resource Sharing Part 2: Unit 43",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 2: Unit 43'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 2: Unit 43.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 2: Unit 43\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-44",
  "title": "EMBEDDED_C Fault Tolerance Part 2: Unit 44",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 2: Unit 44'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 2: Unit 44.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 2: Unit 44\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-45",
  "title": "EMBEDDED_C Verification Testbench Part 2: Unit 45",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 2: Unit 45'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 2: Unit 45.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 2: Unit 45\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-46",
  "title": "EMBEDDED_C Hardware Acceleration Part 2: Unit 46",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 2: Unit 46'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 2: Unit 46.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 2: Unit 46\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-47",
  "title": "EMBEDDED_C Data Flow Control Part 2: Unit 47",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 2: Unit 47'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 2: Unit 47.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 2: Unit 47\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-48",
  "title": "EMBEDDED_C Corner Case Analysis Part 2: Unit 48",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 2: Unit 48'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 2: Unit 48.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 2: Unit 48\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-49",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 2: Unit 49",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 2: Unit 49'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 2: Unit 49.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 2: Unit 49\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-50",
  "title": "EMBEDDED_C Latency Reduction Part 2: Unit 50",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 2: Unit 50'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 2: Unit 50.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 2: Unit 50\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-51",
  "title": "EMBEDDED_C CDC Isolation Part 2: Unit 51",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 2: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 2: Unit 51.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 2: Unit 51\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-52",
  "title": "EMBEDDED_C Error Handling Part 2: Unit 52",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 2: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 2: Unit 52.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 2: Unit 52\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-53",
  "title": "EMBEDDED_C High-Speed Encoding Part 2: Unit 53",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 2: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 2: Unit 53.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 2: Unit 53\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-54",
  "title": "EMBEDDED_C Synthesizable Model Part 2: Unit 54",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 2: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 2: Unit 54.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 2: Unit 54\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-55",
  "title": "EMBEDDED_C Optimization Part 3: Unit 55",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 3: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 3: Unit 55.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 3: Unit 55\nvoid embedded_c_optimization_part_3_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_3_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-56",
  "title": "EMBEDDED_C Architecture Part 3: Unit 56",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 3: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 3: Unit 56.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 3: Unit 56\nvoid embedded_c_architecture_part_3_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_3_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-57",
  "title": "EMBEDDED_C Pipeline Stage Part 3: Unit 57",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 3: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 3: Unit 57.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 3: Unit 57\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-58",
  "title": "EMBEDDED_C Interface Protocol Part 3: Unit 58",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 3: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 3: Unit 58.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 3: Unit 58\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-59",
  "title": "EMBEDDED_C Low-Power Design Part 3: Unit 59",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 3: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 3: Unit 59.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 3: Unit 59\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-60",
  "title": "EMBEDDED_C Timing Closure Part 3: Unit 60",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 3: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 3: Unit 60.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 3: Unit 60\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-61",
  "title": "EMBEDDED_C Resource Sharing Part 3: Unit 61",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 3: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 3: Unit 61.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 3: Unit 61\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-62",
  "title": "EMBEDDED_C Fault Tolerance Part 3: Unit 62",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 3: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 3: Unit 62.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 3: Unit 62\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-63",
  "title": "EMBEDDED_C Verification Testbench Part 3: Unit 63",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 3: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 3: Unit 63.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 3: Unit 63\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-64",
  "title": "EMBEDDED_C Hardware Acceleration Part 3: Unit 64",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 3: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 3: Unit 64.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 3: Unit 64\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-65",
  "title": "EMBEDDED_C Data Flow Control Part 3: Unit 65",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 3: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 3: Unit 65.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 3: Unit 65\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-66",
  "title": "EMBEDDED_C Corner Case Analysis Part 3: Unit 66",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 3: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 3: Unit 66.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 3: Unit 66\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-67",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 3: Unit 67",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 3: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 3: Unit 67.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 3: Unit 67\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-68",
  "title": "EMBEDDED_C Latency Reduction Part 3: Unit 68",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 3: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 3: Unit 68.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 3: Unit 68\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-69",
  "title": "EMBEDDED_C CDC Isolation Part 3: Unit 69",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 3: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 3: Unit 69.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 3: Unit 69\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-70",
  "title": "EMBEDDED_C Error Handling Part 3: Unit 70",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 3: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 3: Unit 70.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 3: Unit 70\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-71",
  "title": "EMBEDDED_C High-Speed Encoding Part 3: Unit 71",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 3: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 3: Unit 71.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 3: Unit 71\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-72",
  "title": "EMBEDDED_C Synthesizable Model Part 3: Unit 72",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 3: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 3: Unit 72.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 3: Unit 72\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-73",
  "title": "EMBEDDED_C Optimization Part 4: Unit 73",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 4: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 4: Unit 73.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 4: Unit 73\nvoid embedded_c_optimization_part_4_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_4_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-74",
  "title": "EMBEDDED_C Architecture Part 4: Unit 74",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 4: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 4: Unit 74.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 4: Unit 74\nvoid embedded_c_architecture_part_4_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_4_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-75",
  "title": "EMBEDDED_C Pipeline Stage Part 4: Unit 75",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 4: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 4: Unit 75.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 4: Unit 75\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-76",
  "title": "EMBEDDED_C Interface Protocol Part 4: Unit 76",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 4: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 4: Unit 76.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 4: Unit 76\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-77",
  "title": "EMBEDDED_C Low-Power Design Part 4: Unit 77",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 4: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 4: Unit 77.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 4: Unit 77\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-78",
  "title": "EMBEDDED_C Timing Closure Part 4: Unit 78",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 4: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 4: Unit 78.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 4: Unit 78\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-79",
  "title": "EMBEDDED_C Resource Sharing Part 4: Unit 79",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 4: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 4: Unit 79.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 4: Unit 79\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-80",
  "title": "EMBEDDED_C Fault Tolerance Part 4: Unit 80",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 4: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 4: Unit 80.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 4: Unit 80\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-81",
  "title": "EMBEDDED_C Verification Testbench Part 4: Unit 81",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 4: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 4: Unit 81.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 4: Unit 81\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-82",
  "title": "EMBEDDED_C Hardware Acceleration Part 4: Unit 82",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 4: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 4: Unit 82.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 4: Unit 82\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-83",
  "title": "EMBEDDED_C Data Flow Control Part 4: Unit 83",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 4: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 4: Unit 83.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 4: Unit 83\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-84",
  "title": "EMBEDDED_C Corner Case Analysis Part 4: Unit 84",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 4: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 4: Unit 84.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 4: Unit 84\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-85",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 4: Unit 85",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 4: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 4: Unit 85.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 4: Unit 85\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-86",
  "title": "EMBEDDED_C Latency Reduction Part 4: Unit 86",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 4: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 4: Unit 86.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 4: Unit 86\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-87",
  "title": "EMBEDDED_C CDC Isolation Part 4: Unit 87",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 4: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 4: Unit 87.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 4: Unit 87\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-88",
  "title": "EMBEDDED_C Error Handling Part 4: Unit 88",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 4: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 4: Unit 88.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 4: Unit 88\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-89",
  "title": "EMBEDDED_C High-Speed Encoding Part 4: Unit 89",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 4: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 4: Unit 89.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 4: Unit 89\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-90",
  "title": "EMBEDDED_C Synthesizable Model Part 4: Unit 90",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 4: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 4: Unit 90.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 4: Unit 90\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-91",
  "title": "EMBEDDED_C Optimization Part 5: Unit 91",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 5: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 5: Unit 91.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 5: Unit 91\nvoid embedded_c_optimization_part_5_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_5_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-92",
  "title": "EMBEDDED_C Architecture Part 5: Unit 92",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 5: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 5: Unit 92.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 5: Unit 92\nvoid embedded_c_architecture_part_5_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_5_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-93",
  "title": "EMBEDDED_C Pipeline Stage Part 5: Unit 93",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 5: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 5: Unit 93.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 5: Unit 93\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-94",
  "title": "EMBEDDED_C Interface Protocol Part 5: Unit 94",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 5: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 5: Unit 94.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 5: Unit 94\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-95",
  "title": "EMBEDDED_C Low-Power Design Part 5: Unit 95",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 5: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 5: Unit 95.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 5: Unit 95\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-96",
  "title": "EMBEDDED_C Timing Closure Part 5: Unit 96",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 5: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 5: Unit 96.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 5: Unit 96\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-97",
  "title": "EMBEDDED_C Resource Sharing Part 5: Unit 97",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 5: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 5: Unit 97.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 5: Unit 97\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-98",
  "title": "EMBEDDED_C Fault Tolerance Part 5: Unit 98",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 5: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 5: Unit 98.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 5: Unit 98\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-99",
  "title": "EMBEDDED_C Verification Testbench Part 5: Unit 99",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 5: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 5: Unit 99.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 5: Unit 99\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-100",
  "title": "EMBEDDED_C Hardware Acceleration Part 5: Unit 100",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 5: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 5: Unit 100.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 5: Unit 100\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-101",
  "title": "EMBEDDED_C Data Flow Control Part 5: Unit 101",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 5: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 5: Unit 101.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 5: Unit 101\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-102",
  "title": "EMBEDDED_C Corner Case Analysis Part 5: Unit 102",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 5: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 5: Unit 102.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 5: Unit 102\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-103",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 5: Unit 103",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 5: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 5: Unit 103.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 5: Unit 103\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-104",
  "title": "EMBEDDED_C Latency Reduction Part 5: Unit 104",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 5: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 5: Unit 104.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 5: Unit 104\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-105",
  "title": "EMBEDDED_C CDC Isolation Part 5: Unit 105",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 5: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 5: Unit 105.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 5: Unit 105\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-106",
  "title": "EMBEDDED_C Error Handling Part 5: Unit 106",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 5: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 5: Unit 106.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 5: Unit 106\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-107",
  "title": "EMBEDDED_C High-Speed Encoding Part 5: Unit 107",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 5: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 5: Unit 107.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 5: Unit 107\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-108",
  "title": "EMBEDDED_C Synthesizable Model Part 5: Unit 108",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 5: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 5: Unit 108.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 5: Unit 108\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-109",
  "title": "EMBEDDED_C Optimization Part 6: Unit 109",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 6: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 6: Unit 109.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 6: Unit 109\nvoid embedded_c_optimization_part_6_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_6_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-110",
  "title": "EMBEDDED_C Architecture Part 6: Unit 110",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 6: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 6: Unit 110.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 6: Unit 110\nvoid embedded_c_architecture_part_6_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_6_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-111",
  "title": "EMBEDDED_C Pipeline Stage Part 6: Unit 111",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 6: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 6: Unit 111.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 6: Unit 111\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-112",
  "title": "EMBEDDED_C Interface Protocol Part 6: Unit 112",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 6: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 6: Unit 112.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 6: Unit 112\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-113",
  "title": "EMBEDDED_C Low-Power Design Part 6: Unit 113",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 6: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 6: Unit 113.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 6: Unit 113\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-114",
  "title": "EMBEDDED_C Timing Closure Part 6: Unit 114",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 6: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 6: Unit 114.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 6: Unit 114\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-115",
  "title": "EMBEDDED_C Resource Sharing Part 6: Unit 115",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 6: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 6: Unit 115.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 6: Unit 115\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-116",
  "title": "EMBEDDED_C Fault Tolerance Part 6: Unit 116",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 6: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 6: Unit 116.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 6: Unit 116\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-117",
  "title": "EMBEDDED_C Verification Testbench Part 6: Unit 117",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 6: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 6: Unit 117.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 6: Unit 117\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-118",
  "title": "EMBEDDED_C Hardware Acceleration Part 6: Unit 118",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 6: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 6: Unit 118.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 6: Unit 118\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-119",
  "title": "EMBEDDED_C Data Flow Control Part 6: Unit 119",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 6: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 6: Unit 119.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 6: Unit 119\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-120",
  "title": "EMBEDDED_C Corner Case Analysis Part 6: Unit 120",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 6: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 6: Unit 120.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 6: Unit 120\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-121",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 6: Unit 121",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 6: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 6: Unit 121.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 6: Unit 121\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-122",
  "title": "EMBEDDED_C Latency Reduction Part 6: Unit 122",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 6: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 6: Unit 122.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 6: Unit 122\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-123",
  "title": "EMBEDDED_C CDC Isolation Part 6: Unit 123",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 6: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 6: Unit 123.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 6: Unit 123\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-124",
  "title": "EMBEDDED_C Error Handling Part 6: Unit 124",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 6: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 6: Unit 124.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 6: Unit 124\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-125",
  "title": "EMBEDDED_C High-Speed Encoding Part 6: Unit 125",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 6: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 6: Unit 125.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 6: Unit 125\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-126",
  "title": "EMBEDDED_C Synthesizable Model Part 6: Unit 126",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 6: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 6: Unit 126.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 6: Unit 126\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-127",
  "title": "EMBEDDED_C Optimization Part 7: Unit 127",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 7: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 7: Unit 127.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 7: Unit 127\nvoid embedded_c_optimization_part_7_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_7_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-128",
  "title": "EMBEDDED_C Architecture Part 7: Unit 128",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 7: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 7: Unit 128.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 7: Unit 128\nvoid embedded_c_architecture_part_7_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_7_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-129",
  "title": "EMBEDDED_C Pipeline Stage Part 7: Unit 129",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 7: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 7: Unit 129.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 7: Unit 129\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-130",
  "title": "EMBEDDED_C Interface Protocol Part 7: Unit 130",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 7: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 7: Unit 130.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 7: Unit 130\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-131",
  "title": "EMBEDDED_C Low-Power Design Part 7: Unit 131",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 7: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 7: Unit 131.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 7: Unit 131\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-132",
  "title": "EMBEDDED_C Timing Closure Part 7: Unit 132",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 7: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 7: Unit 132.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 7: Unit 132\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-133",
  "title": "EMBEDDED_C Resource Sharing Part 7: Unit 133",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 7: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 7: Unit 133.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 7: Unit 133\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-134",
  "title": "EMBEDDED_C Fault Tolerance Part 7: Unit 134",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 7: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 7: Unit 134.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 7: Unit 134\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-135",
  "title": "EMBEDDED_C Verification Testbench Part 7: Unit 135",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 7: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 7: Unit 135.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 7: Unit 135\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-136",
  "title": "EMBEDDED_C Hardware Acceleration Part 7: Unit 136",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 7: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 7: Unit 136.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 7: Unit 136\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-137",
  "title": "EMBEDDED_C Data Flow Control Part 7: Unit 137",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 7: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 7: Unit 137.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 7: Unit 137\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-138",
  "title": "EMBEDDED_C Corner Case Analysis Part 7: Unit 138",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 7: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 7: Unit 138.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 7: Unit 138\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-139",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 7: Unit 139",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 7: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 7: Unit 139.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 7: Unit 139\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-140",
  "title": "EMBEDDED_C Latency Reduction Part 7: Unit 140",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 7: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 7: Unit 140.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 7: Unit 140\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-141",
  "title": "EMBEDDED_C CDC Isolation Part 7: Unit 141",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 7: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 7: Unit 141.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 7: Unit 141\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-142",
  "title": "EMBEDDED_C Error Handling Part 7: Unit 142",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 7: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 7: Unit 142.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 7: Unit 142\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-143",
  "title": "EMBEDDED_C High-Speed Encoding Part 7: Unit 143",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 7: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 7: Unit 143.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 7: Unit 143\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-144",
  "title": "EMBEDDED_C Synthesizable Model Part 7: Unit 144",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 7: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 7: Unit 144.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 7: Unit 144\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-145",
  "title": "EMBEDDED_C Optimization Part 8: Unit 145",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 8: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 8: Unit 145.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 8: Unit 145\nvoid embedded_c_optimization_part_8_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_8_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-146",
  "title": "EMBEDDED_C Architecture Part 8: Unit 146",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 8: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 8: Unit 146.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 8: Unit 146\nvoid embedded_c_architecture_part_8_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_8_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-147",
  "title": "EMBEDDED_C Pipeline Stage Part 8: Unit 147",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 8: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 8: Unit 147.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 8: Unit 147\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-148",
  "title": "EMBEDDED_C Interface Protocol Part 8: Unit 148",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 8: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 8: Unit 148.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 8: Unit 148\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-149",
  "title": "EMBEDDED_C Low-Power Design Part 8: Unit 149",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 8: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 8: Unit 149.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 8: Unit 149\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-150",
  "title": "EMBEDDED_C Timing Closure Part 8: Unit 150",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 8: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 8: Unit 150.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 8: Unit 150\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-151",
  "title": "EMBEDDED_C Resource Sharing Part 8: Unit 151",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 8: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 8: Unit 151.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 8: Unit 151\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-152",
  "title": "EMBEDDED_C Fault Tolerance Part 8: Unit 152",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 8: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 8: Unit 152.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 8: Unit 152\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-153",
  "title": "EMBEDDED_C Verification Testbench Part 8: Unit 153",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 8: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 8: Unit 153.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 8: Unit 153\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-154",
  "title": "EMBEDDED_C Hardware Acceleration Part 8: Unit 154",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 8: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 8: Unit 154.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 8: Unit 154\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-155",
  "title": "EMBEDDED_C Data Flow Control Part 8: Unit 155",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 8: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 8: Unit 155.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 8: Unit 155\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-156",
  "title": "EMBEDDED_C Corner Case Analysis Part 8: Unit 156",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 8: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 8: Unit 156.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 8: Unit 156\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-157",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 8: Unit 157",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 8: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 8: Unit 157.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 8: Unit 157\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-158",
  "title": "EMBEDDED_C Latency Reduction Part 8: Unit 158",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 8: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 8: Unit 158.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 8: Unit 158\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-159",
  "title": "EMBEDDED_C CDC Isolation Part 8: Unit 159",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 8: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 8: Unit 159.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 8: Unit 159\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-160",
  "title": "EMBEDDED_C Error Handling Part 8: Unit 160",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 8: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 8: Unit 160.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 8: Unit 160\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-161",
  "title": "EMBEDDED_C High-Speed Encoding Part 8: Unit 161",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 8: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 8: Unit 161.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 8: Unit 161\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-162",
  "title": "EMBEDDED_C Synthesizable Model Part 8: Unit 162",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 8: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 8: Unit 162.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 8: Unit 162\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-163",
  "title": "EMBEDDED_C Optimization Part 9: Unit 163",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 9: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 9: Unit 163.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 9: Unit 163\nvoid embedded_c_optimization_part_9_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_9_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-164",
  "title": "EMBEDDED_C Architecture Part 9: Unit 164",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 9: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 9: Unit 164.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 9: Unit 164\nvoid embedded_c_architecture_part_9_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_9_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-165",
  "title": "EMBEDDED_C Pipeline Stage Part 9: Unit 165",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 9: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 9: Unit 165.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 9: Unit 165\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-166",
  "title": "EMBEDDED_C Interface Protocol Part 9: Unit 166",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 9: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 9: Unit 166.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 9: Unit 166\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-167",
  "title": "EMBEDDED_C Low-Power Design Part 9: Unit 167",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 9: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 9: Unit 167.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 9: Unit 167\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-168",
  "title": "EMBEDDED_C Timing Closure Part 9: Unit 168",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 9: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 9: Unit 168.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 9: Unit 168\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-169",
  "title": "EMBEDDED_C Resource Sharing Part 9: Unit 169",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 9: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 9: Unit 169.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 9: Unit 169\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-170",
  "title": "EMBEDDED_C Fault Tolerance Part 9: Unit 170",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 9: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 9: Unit 170.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 9: Unit 170\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-171",
  "title": "EMBEDDED_C Verification Testbench Part 9: Unit 171",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 9: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 9: Unit 171.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 9: Unit 171\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-172",
  "title": "EMBEDDED_C Hardware Acceleration Part 9: Unit 172",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 9: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 9: Unit 172.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 9: Unit 172\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-173",
  "title": "EMBEDDED_C Data Flow Control Part 9: Unit 173",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 9: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 9: Unit 173.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 9: Unit 173\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-174",
  "title": "EMBEDDED_C Corner Case Analysis Part 9: Unit 174",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 9: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 9: Unit 174.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 9: Unit 174\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-175",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 9: Unit 175",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 9: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 9: Unit 175.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 9: Unit 175\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-176",
  "title": "EMBEDDED_C Latency Reduction Part 9: Unit 176",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 9: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 9: Unit 176.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 9: Unit 176\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-177",
  "title": "EMBEDDED_C CDC Isolation Part 9: Unit 177",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 9: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 9: Unit 177.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 9: Unit 177\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-178",
  "title": "EMBEDDED_C Error Handling Part 9: Unit 178",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 9: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 9: Unit 178.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 9: Unit 178\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-179",
  "title": "EMBEDDED_C High-Speed Encoding Part 9: Unit 179",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 9: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 9: Unit 179.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 9: Unit 179\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-180",
  "title": "EMBEDDED_C Synthesizable Model Part 9: Unit 180",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 9: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 9: Unit 180.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 9: Unit 180\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-181",
  "title": "EMBEDDED_C Optimization Part 10: Unit 181",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 10: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 10: Unit 181.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 10: Unit 181\nvoid embedded_c_optimization_part_1_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_1_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-182",
  "title": "EMBEDDED_C Architecture Part 10: Unit 182",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 10: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 10: Unit 182.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 10: Unit 182\nvoid embedded_c_architecture_part_1_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_1_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-183",
  "title": "EMBEDDED_C Pipeline Stage Part 10: Unit 183",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Pipeline Stage Part 10: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Pipeline Stage Part 10: Unit 183.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Pipeline Stage Part 10: Unit 183\nvoid embedded_c_pipeline_stage_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_pipeline_stage_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-184",
  "title": "EMBEDDED_C Interface Protocol Part 10: Unit 184",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Interface Protocol Part 10: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Interface Protocol Part 10: Unit 184.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Interface Protocol Part 10: Unit 184\nvoid embedded_c_interface_protocol__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_interface_protocol__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-185",
  "title": "EMBEDDED_C Low-Power Design Part 10: Unit 185",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Low-Power Design Part 10: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Low-Power Design Part 10: Unit 185.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Low-Power Design Part 10: Unit 185\nvoid embedded_c_low_power_design_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_low_power_design_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-186",
  "title": "EMBEDDED_C Timing Closure Part 10: Unit 186",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Timing Closure Part 10: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Timing Closure Part 10: Unit 186.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Timing Closure Part 10: Unit 186\nvoid embedded_c_timing_closure_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_timing_closure_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-187",
  "title": "EMBEDDED_C Resource Sharing Part 10: Unit 187",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Resource Sharing Part 10: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Resource Sharing Part 10: Unit 187.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Resource Sharing Part 10: Unit 187\nvoid embedded_c_resource_sharing_pa_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_resource_sharing_pa_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-188",
  "title": "EMBEDDED_C Fault Tolerance Part 10: Unit 188",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Fault Tolerance Part 10: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Fault Tolerance Part 10: Unit 188.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Fault Tolerance Part 10: Unit 188\nvoid embedded_c_fault_tolerance_par_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_fault_tolerance_par_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-189",
  "title": "EMBEDDED_C Verification Testbench Part 10: Unit 189",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Verification Testbench Part 10: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Verification Testbench Part 10: Unit 189.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Verification Testbench Part 10: Unit 189\nvoid embedded_c_verification_testbe_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_verification_testbe_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-190",
  "title": "EMBEDDED_C Hardware Acceleration Part 10: Unit 190",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Hardware Acceleration Part 10: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Hardware Acceleration Part 10: Unit 190.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Hardware Acceleration Part 10: Unit 190\nvoid embedded_c_hardware_accelerati_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_hardware_accelerati_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-191",
  "title": "EMBEDDED_C Data Flow Control Part 10: Unit 191",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Data Flow Control Part 10: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Data Flow Control Part 10: Unit 191.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Data Flow Control Part 10: Unit 191\nvoid embedded_c_data_flow_control_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_data_flow_control_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-192",
  "title": "EMBEDDED_C Corner Case Analysis Part 10: Unit 192",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Corner Case Analysis Part 10: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Corner Case Analysis Part 10: Unit 192.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Corner Case Analysis Part 10: Unit 192\nvoid embedded_c_corner_case_analysi_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_corner_case_analysi_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-193",
  "title": "EMBEDDED_C Bandwidth Maximizer Part 10: Unit 193",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Bandwidth Maximizer Part 10: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Bandwidth Maximizer Part 10: Unit 193.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Bandwidth Maximizer Part 10: Unit 193\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_bandwidth_maximizer_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-194",
  "title": "EMBEDDED_C Latency Reduction Part 10: Unit 194",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Latency Reduction Part 10: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Latency Reduction Part 10: Unit 194.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Latency Reduction Part 10: Unit 194\nvoid embedded_c_latency_reduction_p_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_latency_reduction_p_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-195",
  "title": "EMBEDDED_C CDC Isolation Part 10: Unit 195",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C CDC Isolation Part 10: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C CDC Isolation Part 10: Unit 195.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C CDC Isolation Part 10: Unit 195\nvoid embedded_c_cdc_isolation_part__init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_cdc_isolation_part__init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-196",
  "title": "EMBEDDED_C Error Handling Part 10: Unit 196",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Error Handling Part 10: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Error Handling Part 10: Unit 196.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Error Handling Part 10: Unit 196\nvoid embedded_c_error_handling_part_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_error_handling_part_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-197",
  "title": "EMBEDDED_C High-Speed Encoding Part 10: Unit 197",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C High-Speed Encoding Part 10: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C High-Speed Encoding Part 10: Unit 197.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C High-Speed Encoding Part 10: Unit 197\nvoid embedded_c_high_speed_encoding_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_high_speed_encoding_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-198",
  "title": "EMBEDDED_C Synthesizable Model Part 10: Unit 198",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'EMBEDDED_C Synthesizable Model Part 10: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Synthesizable Model Part 10: Unit 198.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Synthesizable Model Part 10: Unit 198\nvoid embedded_c_synthesizable_model_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_synthesizable_model_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-199",
  "title": "EMBEDDED_C Optimization Part 11: Unit 199",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'EMBEDDED_C Optimization Part 11: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Optimization Part 11: Unit 199.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Optimization Part 11: Unit 199\nvoid embedded_c_optimization_part_1_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_optimization_part_1_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "emb-c-200",
  "title": "EMBEDDED_C Architecture Part 11: Unit 200",
  "topic": "embedded_c",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'EMBEDDED_C Architecture Part 11: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Include standard integer and boolean types.\nStep 2: Declare volatile pointers or peripheral struct overlays.\nStep 3: Implement bitwise manipulation functions for EMBEDDED_C Architecture Part 11: Unit 200.",
  "starterCode": "#include <stdint.h>\n#include <stdbool.h>\n\n// TODO: Implement EMBEDDED_C Architecture Part 11: Unit 200\nvoid embedded_c_architecture_part_1_init(void) {\n    // Write your C firmware logic here\n}\n",
  "solutionCode": "#include <stdint.h>\n#include <stdbool.h>\n\nstatic volatile uint32_t status_reg = 0;\n\nvoid embedded_c_architecture_part_1_init(void) {\n    status_reg = 0x01; // Enable peripheral / configure hardware\n}\n",
  "hints": [
    "Use `volatile` keyword when accessing hardware registers or ISR-shared variables.",
    "Use bitwise shifts `(1 << bit_pos)` to construct mask fields."
  ],
  "tags": [
    "EMBEDDED_C",
    "EMBEDDED_C",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
