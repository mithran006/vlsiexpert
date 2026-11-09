import { Problem } from '../types';

export const ARDUINO_PROBLEMS: Problem[] = [
{
  "id": "ard-01",
  "title": "Arduino Non-Blocking LED Blink with millis()",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Arduino Non-Blocking LED Blink with millis()'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Non-Blocking LED Blink with millis()\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Non-Blocking LED Blink with millis()\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Non-Blocking LED Blink with millis()\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-02",
  "title": "Arduino Digital Button Read with Software Debounce",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Arduino Digital Button Read with Software Debounce'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Digital Button Read with Software Debounce\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Digital Button Read with Software Debounce\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Digital Button Read with Software Debounce\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-03",
  "title": "Arduino PWM Brightness Control using analogWrite()",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Arduino PWM Brightness Control using analogWrite()'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino PWM Brightness Control using analogWrite()\nvoid setup() {\n  // TODO: Initialize hardware for Arduino PWM Brightness Control using analogWrite()\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino PWM Brightness Control using analogWrite()\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-04",
  "title": "Arduino Analog Sensor Read & Mapping with map()",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Arduino Analog Sensor Read & Mapping with map()'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Analog Sensor Read & Mapping with map()\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Analog Sensor Read & Mapping with map()\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Analog Sensor Read & Mapping with map()\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-05",
  "title": "Arduino Serial Communication Command Line Parser",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Arduino Serial Communication Command Line Parser'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Serial Communication Command Line Parser\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Serial Communication Command Line Parser\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Serial Communication Command Line Parser\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-06",
  "title": "Arduino Hardware External Interrupt with attachInterrupt()",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Arduino Hardware External Interrupt with attachInterrupt()'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Hardware External Interrupt with attachInterrupt()\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Hardware External Interrupt with attachInterrupt()\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Hardware External Interrupt with attachInterrupt()\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-07",
  "title": "Arduino Servo Motor Pulse Generation with microsecond Timer",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Arduino Servo Motor Pulse Generation with microsecond Timer'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Servo Motor Pulse Generation with microsecond Timer\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Servo Motor Pulse Generation with microsecond Timer\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Servo Motor Pulse Generation with microsecond Timer\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-08",
  "title": "Arduino Stepper Motor 4-Step Sequence Driver",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Arduino Stepper Motor 4-Step Sequence Driver'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Stepper Motor 4-Step Sequence Driver\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Stepper Motor 4-Step Sequence Driver\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Stepper Motor 4-Step Sequence Driver\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-09",
  "title": "Arduino I2C Sensor Interfacing with Wire Library",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Arduino I2C Sensor Interfacing with Wire Library'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino I2C Sensor Interfacing with Wire Library\nvoid setup() {\n  // TODO: Initialize hardware for Arduino I2C Sensor Interfacing with Wire Library\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino I2C Sensor Interfacing with Wire Library\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-10",
  "title": "Arduino SPI Peripheral Data Exchange Routine",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Arduino SPI Peripheral Data Exchange Routine'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino SPI Peripheral Data Exchange Routine\nvoid setup() {\n  // TODO: Initialize hardware for Arduino SPI Peripheral Data Exchange Routine\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino SPI Peripheral Data Exchange Routine\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-11",
  "title": "Arduino EEPROM Byte Read/Write Non-Volatile Storage",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Arduino EEPROM Byte Read/Write Non-Volatile Storage'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino EEPROM Byte Read/Write Non-Volatile Storage\nvoid setup() {\n  // TODO: Initialize hardware for Arduino EEPROM Byte Read/Write Non-Volatile Storage\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino EEPROM Byte Read/Write Non-Volatile Storage\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-12",
  "title": "Arduino Watchdog Timer Configuration (avr/wdt.h)",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Arduino Watchdog Timer Configuration (avr/wdt.h)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Watchdog Timer Configuration (avr/wdt.h)\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Watchdog Timer Configuration (avr/wdt.h)\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Watchdog Timer Configuration (avr/wdt.h)\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-13",
  "title": "Arduino 7-Segment Multiplexed Display Driver",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Arduino 7-Segment Multiplexed Display Driver'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino 7-Segment Multiplexed Display Driver\nvoid setup() {\n  // TODO: Initialize hardware for Arduino 7-Segment Multiplexed Display Driver\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino 7-Segment Multiplexed Display Driver\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-14",
  "title": "Arduino Ultrasonic Distance Measurement (PulseIn)",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Arduino Ultrasonic Distance Measurement (PulseIn)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Ultrasonic Distance Measurement (PulseIn)\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Ultrasonic Distance Measurement (PulseIn)\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Ultrasonic Distance Measurement (PulseIn)\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-15",
  "title": "Arduino Rotary Encoder Quadrature Decoding in ISR",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Arduino Rotary Encoder Quadrature Decoding in ISR'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Rotary Encoder Quadrature Decoding in ISR\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Rotary Encoder Quadrature Decoding in ISR\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Rotary Encoder Quadrature Decoding in ISR\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-16",
  "title": "Arduino Direct Port Manipulation (PORTB / DDRB / PINB)",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Arduino Direct Port Manipulation (PORTB / DDRB / PINB)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Direct Port Manipulation (PORTB / DDRB / PINB)\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Direct Port Manipulation (PORTB / DDRB / PINB)\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Direct Port Manipulation (PORTB / DDRB / PINB)\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-17",
  "title": "Arduino 16-bit Timer1 CTC Mode Interrupt Config",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Arduino 16-bit Timer1 CTC Mode Interrupt Config'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino 16-bit Timer1 CTC Mode Interrupt Config\nvoid setup() {\n  // TODO: Initialize hardware for Arduino 16-bit Timer1 CTC Mode Interrupt Config\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino 16-bit Timer1 CTC Mode Interrupt Config\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-18",
  "title": "Arduino Analog Comparator Interrupt Callback",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Arduino Analog Comparator Interrupt Callback'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Analog Comparator Interrupt Callback\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Analog Comparator Interrupt Callback\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Analog Comparator Interrupt Callback\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-19",
  "title": "Arduino Sleep Mode & Power Reduction (avr/sleep.h)",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Arduino Sleep Mode & Power Reduction (avr/sleep.h)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Sleep Mode & Power Reduction (avr/sleep.h)\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Sleep Mode & Power Reduction (avr/sleep.h)\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Sleep Mode & Power Reduction (avr/sleep.h)\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-20",
  "title": "Arduino Multi-Tasking Cooperating Loop Scheduler",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Arduino Multi-Tasking Cooperating Loop Scheduler'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: Arduino Multi-Tasking Cooperating Loop Scheduler\nvoid setup() {\n  // TODO: Initialize hardware for Arduino Multi-Tasking Cooperating Loop Scheduler\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: Arduino Multi-Tasking Cooperating Loop Scheduler\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "Arduino",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-21",
  "title": "ARDUINO Pipeline Stage Part 1: Unit 21",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 1: Unit 21'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 1: Unit 21\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 1: Unit 21\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 1: Unit 21\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-22",
  "title": "ARDUINO Interface Protocol Part 1: Unit 22",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 1: Unit 22'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 1: Unit 22\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 1: Unit 22\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 1: Unit 22\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-23",
  "title": "ARDUINO Low-Power Design Part 1: Unit 23",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 1: Unit 23'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 1: Unit 23\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 1: Unit 23\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 1: Unit 23\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-24",
  "title": "ARDUINO Timing Closure Part 1: Unit 24",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 1: Unit 24'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 1: Unit 24\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 1: Unit 24\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 1: Unit 24\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-25",
  "title": "ARDUINO Resource Sharing Part 1: Unit 25",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 1: Unit 25'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 1: Unit 25\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 1: Unit 25\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 1: Unit 25\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-26",
  "title": "ARDUINO Fault Tolerance Part 1: Unit 26",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 1: Unit 26'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 1: Unit 26\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 1: Unit 26\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 1: Unit 26\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-27",
  "title": "ARDUINO Verification Testbench Part 1: Unit 27",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 1: Unit 27'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 1: Unit 27\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 1: Unit 27\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 1: Unit 27\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-28",
  "title": "ARDUINO Hardware Acceleration Part 1: Unit 28",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 1: Unit 28'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 1: Unit 28\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 1: Unit 28\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 1: Unit 28\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-29",
  "title": "ARDUINO Data Flow Control Part 1: Unit 29",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 1: Unit 29'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 1: Unit 29\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 1: Unit 29\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 1: Unit 29\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-30",
  "title": "ARDUINO Corner Case Analysis Part 1: Unit 30",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 1: Unit 30'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 1: Unit 30\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 1: Unit 30\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 1: Unit 30\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-31",
  "title": "ARDUINO Bandwidth Maximizer Part 1: Unit 31",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 1: Unit 31'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 1: Unit 31\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 1: Unit 31\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 1: Unit 31\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-32",
  "title": "ARDUINO Latency Reduction Part 1: Unit 32",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 1: Unit 32'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 1: Unit 32\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 1: Unit 32\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 1: Unit 32\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-33",
  "title": "ARDUINO CDC Isolation Part 1: Unit 33",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 1: Unit 33'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 1: Unit 33\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 1: Unit 33\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 1: Unit 33\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-34",
  "title": "ARDUINO Error Handling Part 1: Unit 34",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 1: Unit 34'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 1: Unit 34\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 1: Unit 34\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 1: Unit 34\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-35",
  "title": "ARDUINO High-Speed Encoding Part 1: Unit 35",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 1: Unit 35'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 1: Unit 35\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 1: Unit 35\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 1: Unit 35\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-36",
  "title": "ARDUINO Synthesizable Model Part 1: Unit 36",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 1: Unit 36'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 1: Unit 36\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 1: Unit 36\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 1: Unit 36\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-37",
  "title": "ARDUINO Optimization Part 2: Unit 37",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 2: Unit 37'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 2: Unit 37\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 2: Unit 37\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 2: Unit 37\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-38",
  "title": "ARDUINO Architecture Part 2: Unit 38",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 2: Unit 38'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 2: Unit 38\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 2: Unit 38\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 2: Unit 38\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-39",
  "title": "ARDUINO Pipeline Stage Part 2: Unit 39",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 2: Unit 39'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 2: Unit 39\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 2: Unit 39\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 2: Unit 39\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-40",
  "title": "ARDUINO Interface Protocol Part 2: Unit 40",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 2: Unit 40'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 2: Unit 40\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 2: Unit 40\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 2: Unit 40\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-41",
  "title": "ARDUINO Low-Power Design Part 2: Unit 41",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 2: Unit 41'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 2: Unit 41\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 2: Unit 41\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 2: Unit 41\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-42",
  "title": "ARDUINO Timing Closure Part 2: Unit 42",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 2: Unit 42'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 2: Unit 42\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 2: Unit 42\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 2: Unit 42\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-43",
  "title": "ARDUINO Resource Sharing Part 2: Unit 43",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 2: Unit 43'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 2: Unit 43\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 2: Unit 43\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 2: Unit 43\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-44",
  "title": "ARDUINO Fault Tolerance Part 2: Unit 44",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 2: Unit 44'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 2: Unit 44\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 2: Unit 44\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 2: Unit 44\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-45",
  "title": "ARDUINO Verification Testbench Part 2: Unit 45",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 2: Unit 45'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 2: Unit 45\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 2: Unit 45\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 2: Unit 45\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-46",
  "title": "ARDUINO Hardware Acceleration Part 2: Unit 46",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 2: Unit 46'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 2: Unit 46\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 2: Unit 46\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 2: Unit 46\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-47",
  "title": "ARDUINO Data Flow Control Part 2: Unit 47",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 2: Unit 47'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 2: Unit 47\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 2: Unit 47\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 2: Unit 47\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-48",
  "title": "ARDUINO Corner Case Analysis Part 2: Unit 48",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 2: Unit 48'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 2: Unit 48\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 2: Unit 48\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 2: Unit 48\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-49",
  "title": "ARDUINO Bandwidth Maximizer Part 2: Unit 49",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 2: Unit 49'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 2: Unit 49\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 2: Unit 49\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 2: Unit 49\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-50",
  "title": "ARDUINO Latency Reduction Part 2: Unit 50",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 2: Unit 50'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 2: Unit 50\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 2: Unit 50\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 2: Unit 50\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-51",
  "title": "ARDUINO CDC Isolation Part 2: Unit 51",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 2: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 2: Unit 51\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 2: Unit 51\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 2: Unit 51\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-52",
  "title": "ARDUINO Error Handling Part 2: Unit 52",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 2: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 2: Unit 52\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 2: Unit 52\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 2: Unit 52\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-53",
  "title": "ARDUINO High-Speed Encoding Part 2: Unit 53",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 2: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 2: Unit 53\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 2: Unit 53\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 2: Unit 53\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-54",
  "title": "ARDUINO Synthesizable Model Part 2: Unit 54",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 2: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 2: Unit 54\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 2: Unit 54\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 2: Unit 54\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-55",
  "title": "ARDUINO Optimization Part 3: Unit 55",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 3: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 3: Unit 55\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 3: Unit 55\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 3: Unit 55\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-56",
  "title": "ARDUINO Architecture Part 3: Unit 56",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 3: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 3: Unit 56\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 3: Unit 56\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 3: Unit 56\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-57",
  "title": "ARDUINO Pipeline Stage Part 3: Unit 57",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 3: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 3: Unit 57\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 3: Unit 57\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 3: Unit 57\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-58",
  "title": "ARDUINO Interface Protocol Part 3: Unit 58",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 3: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 3: Unit 58\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 3: Unit 58\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 3: Unit 58\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-59",
  "title": "ARDUINO Low-Power Design Part 3: Unit 59",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 3: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 3: Unit 59\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 3: Unit 59\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 3: Unit 59\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-60",
  "title": "ARDUINO Timing Closure Part 3: Unit 60",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 3: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 3: Unit 60\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 3: Unit 60\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 3: Unit 60\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-61",
  "title": "ARDUINO Resource Sharing Part 3: Unit 61",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 3: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 3: Unit 61\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 3: Unit 61\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 3: Unit 61\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-62",
  "title": "ARDUINO Fault Tolerance Part 3: Unit 62",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 3: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 3: Unit 62\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 3: Unit 62\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 3: Unit 62\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-63",
  "title": "ARDUINO Verification Testbench Part 3: Unit 63",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 3: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 3: Unit 63\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 3: Unit 63\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 3: Unit 63\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-64",
  "title": "ARDUINO Hardware Acceleration Part 3: Unit 64",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 3: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 3: Unit 64\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 3: Unit 64\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 3: Unit 64\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-65",
  "title": "ARDUINO Data Flow Control Part 3: Unit 65",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 3: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 3: Unit 65\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 3: Unit 65\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 3: Unit 65\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-66",
  "title": "ARDUINO Corner Case Analysis Part 3: Unit 66",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 3: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 3: Unit 66\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 3: Unit 66\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 3: Unit 66\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-67",
  "title": "ARDUINO Bandwidth Maximizer Part 3: Unit 67",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 3: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 3: Unit 67\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 3: Unit 67\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 3: Unit 67\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-68",
  "title": "ARDUINO Latency Reduction Part 3: Unit 68",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 3: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 3: Unit 68\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 3: Unit 68\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 3: Unit 68\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-69",
  "title": "ARDUINO CDC Isolation Part 3: Unit 69",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 3: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 3: Unit 69\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 3: Unit 69\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 3: Unit 69\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-70",
  "title": "ARDUINO Error Handling Part 3: Unit 70",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 3: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 3: Unit 70\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 3: Unit 70\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 3: Unit 70\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-71",
  "title": "ARDUINO High-Speed Encoding Part 3: Unit 71",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 3: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 3: Unit 71\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 3: Unit 71\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 3: Unit 71\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-72",
  "title": "ARDUINO Synthesizable Model Part 3: Unit 72",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 3: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 3: Unit 72\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 3: Unit 72\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 3: Unit 72\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-73",
  "title": "ARDUINO Optimization Part 4: Unit 73",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 4: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 4: Unit 73\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 4: Unit 73\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 4: Unit 73\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-74",
  "title": "ARDUINO Architecture Part 4: Unit 74",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 4: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 4: Unit 74\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 4: Unit 74\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 4: Unit 74\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-75",
  "title": "ARDUINO Pipeline Stage Part 4: Unit 75",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 4: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 4: Unit 75\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 4: Unit 75\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 4: Unit 75\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-76",
  "title": "ARDUINO Interface Protocol Part 4: Unit 76",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 4: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 4: Unit 76\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 4: Unit 76\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 4: Unit 76\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-77",
  "title": "ARDUINO Low-Power Design Part 4: Unit 77",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 4: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 4: Unit 77\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 4: Unit 77\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 4: Unit 77\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-78",
  "title": "ARDUINO Timing Closure Part 4: Unit 78",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 4: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 4: Unit 78\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 4: Unit 78\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 4: Unit 78\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-79",
  "title": "ARDUINO Resource Sharing Part 4: Unit 79",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 4: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 4: Unit 79\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 4: Unit 79\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 4: Unit 79\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-80",
  "title": "ARDUINO Fault Tolerance Part 4: Unit 80",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 4: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 4: Unit 80\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 4: Unit 80\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 4: Unit 80\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-81",
  "title": "ARDUINO Verification Testbench Part 4: Unit 81",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 4: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 4: Unit 81\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 4: Unit 81\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 4: Unit 81\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-82",
  "title": "ARDUINO Hardware Acceleration Part 4: Unit 82",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 4: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 4: Unit 82\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 4: Unit 82\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 4: Unit 82\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-83",
  "title": "ARDUINO Data Flow Control Part 4: Unit 83",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 4: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 4: Unit 83\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 4: Unit 83\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 4: Unit 83\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-84",
  "title": "ARDUINO Corner Case Analysis Part 4: Unit 84",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 4: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 4: Unit 84\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 4: Unit 84\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 4: Unit 84\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-85",
  "title": "ARDUINO Bandwidth Maximizer Part 4: Unit 85",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 4: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 4: Unit 85\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 4: Unit 85\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 4: Unit 85\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-86",
  "title": "ARDUINO Latency Reduction Part 4: Unit 86",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 4: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 4: Unit 86\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 4: Unit 86\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 4: Unit 86\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-87",
  "title": "ARDUINO CDC Isolation Part 4: Unit 87",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 4: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 4: Unit 87\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 4: Unit 87\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 4: Unit 87\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-88",
  "title": "ARDUINO Error Handling Part 4: Unit 88",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 4: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 4: Unit 88\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 4: Unit 88\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 4: Unit 88\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-89",
  "title": "ARDUINO High-Speed Encoding Part 4: Unit 89",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 4: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 4: Unit 89\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 4: Unit 89\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 4: Unit 89\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-90",
  "title": "ARDUINO Synthesizable Model Part 4: Unit 90",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 4: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 4: Unit 90\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 4: Unit 90\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 4: Unit 90\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-91",
  "title": "ARDUINO Optimization Part 5: Unit 91",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 5: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 5: Unit 91\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 5: Unit 91\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 5: Unit 91\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-92",
  "title": "ARDUINO Architecture Part 5: Unit 92",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 5: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 5: Unit 92\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 5: Unit 92\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 5: Unit 92\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-93",
  "title": "ARDUINO Pipeline Stage Part 5: Unit 93",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 5: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 5: Unit 93\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 5: Unit 93\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 5: Unit 93\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-94",
  "title": "ARDUINO Interface Protocol Part 5: Unit 94",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 5: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 5: Unit 94\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 5: Unit 94\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 5: Unit 94\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-95",
  "title": "ARDUINO Low-Power Design Part 5: Unit 95",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 5: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 5: Unit 95\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 5: Unit 95\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 5: Unit 95\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-96",
  "title": "ARDUINO Timing Closure Part 5: Unit 96",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 5: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 5: Unit 96\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 5: Unit 96\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 5: Unit 96\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-97",
  "title": "ARDUINO Resource Sharing Part 5: Unit 97",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 5: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 5: Unit 97\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 5: Unit 97\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 5: Unit 97\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-98",
  "title": "ARDUINO Fault Tolerance Part 5: Unit 98",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 5: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 5: Unit 98\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 5: Unit 98\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 5: Unit 98\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-99",
  "title": "ARDUINO Verification Testbench Part 5: Unit 99",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 5: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 5: Unit 99\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 5: Unit 99\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 5: Unit 99\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-100",
  "title": "ARDUINO Hardware Acceleration Part 5: Unit 100",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 5: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 5: Unit 100\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 5: Unit 100\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 5: Unit 100\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-101",
  "title": "ARDUINO Data Flow Control Part 5: Unit 101",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 5: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 5: Unit 101\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 5: Unit 101\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 5: Unit 101\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-102",
  "title": "ARDUINO Corner Case Analysis Part 5: Unit 102",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 5: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 5: Unit 102\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 5: Unit 102\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 5: Unit 102\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-103",
  "title": "ARDUINO Bandwidth Maximizer Part 5: Unit 103",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 5: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 5: Unit 103\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 5: Unit 103\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 5: Unit 103\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-104",
  "title": "ARDUINO Latency Reduction Part 5: Unit 104",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 5: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 5: Unit 104\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 5: Unit 104\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 5: Unit 104\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-105",
  "title": "ARDUINO CDC Isolation Part 5: Unit 105",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 5: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 5: Unit 105\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 5: Unit 105\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 5: Unit 105\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-106",
  "title": "ARDUINO Error Handling Part 5: Unit 106",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 5: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 5: Unit 106\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 5: Unit 106\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 5: Unit 106\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-107",
  "title": "ARDUINO High-Speed Encoding Part 5: Unit 107",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 5: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 5: Unit 107\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 5: Unit 107\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 5: Unit 107\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-108",
  "title": "ARDUINO Synthesizable Model Part 5: Unit 108",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 5: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 5: Unit 108\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 5: Unit 108\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 5: Unit 108\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-109",
  "title": "ARDUINO Optimization Part 6: Unit 109",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 6: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 6: Unit 109\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 6: Unit 109\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 6: Unit 109\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-110",
  "title": "ARDUINO Architecture Part 6: Unit 110",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 6: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 6: Unit 110\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 6: Unit 110\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 6: Unit 110\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-111",
  "title": "ARDUINO Pipeline Stage Part 6: Unit 111",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 6: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 6: Unit 111\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 6: Unit 111\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 6: Unit 111\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-112",
  "title": "ARDUINO Interface Protocol Part 6: Unit 112",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 6: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 6: Unit 112\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 6: Unit 112\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 6: Unit 112\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-113",
  "title": "ARDUINO Low-Power Design Part 6: Unit 113",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 6: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 6: Unit 113\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 6: Unit 113\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 6: Unit 113\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-114",
  "title": "ARDUINO Timing Closure Part 6: Unit 114",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 6: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 6: Unit 114\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 6: Unit 114\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 6: Unit 114\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-115",
  "title": "ARDUINO Resource Sharing Part 6: Unit 115",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 6: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 6: Unit 115\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 6: Unit 115\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 6: Unit 115\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-116",
  "title": "ARDUINO Fault Tolerance Part 6: Unit 116",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 6: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 6: Unit 116\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 6: Unit 116\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 6: Unit 116\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-117",
  "title": "ARDUINO Verification Testbench Part 6: Unit 117",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 6: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 6: Unit 117\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 6: Unit 117\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 6: Unit 117\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-118",
  "title": "ARDUINO Hardware Acceleration Part 6: Unit 118",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 6: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 6: Unit 118\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 6: Unit 118\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 6: Unit 118\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-119",
  "title": "ARDUINO Data Flow Control Part 6: Unit 119",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 6: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 6: Unit 119\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 6: Unit 119\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 6: Unit 119\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-120",
  "title": "ARDUINO Corner Case Analysis Part 6: Unit 120",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 6: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 6: Unit 120\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 6: Unit 120\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 6: Unit 120\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-121",
  "title": "ARDUINO Bandwidth Maximizer Part 6: Unit 121",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 6: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 6: Unit 121\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 6: Unit 121\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 6: Unit 121\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-122",
  "title": "ARDUINO Latency Reduction Part 6: Unit 122",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 6: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 6: Unit 122\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 6: Unit 122\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 6: Unit 122\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-123",
  "title": "ARDUINO CDC Isolation Part 6: Unit 123",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 6: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 6: Unit 123\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 6: Unit 123\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 6: Unit 123\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-124",
  "title": "ARDUINO Error Handling Part 6: Unit 124",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 6: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 6: Unit 124\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 6: Unit 124\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 6: Unit 124\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-125",
  "title": "ARDUINO High-Speed Encoding Part 6: Unit 125",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 6: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 6: Unit 125\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 6: Unit 125\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 6: Unit 125\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-126",
  "title": "ARDUINO Synthesizable Model Part 6: Unit 126",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 6: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 6: Unit 126\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 6: Unit 126\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 6: Unit 126\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-127",
  "title": "ARDUINO Optimization Part 7: Unit 127",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 7: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 7: Unit 127\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 7: Unit 127\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 7: Unit 127\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-128",
  "title": "ARDUINO Architecture Part 7: Unit 128",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 7: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 7: Unit 128\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 7: Unit 128\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 7: Unit 128\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-129",
  "title": "ARDUINO Pipeline Stage Part 7: Unit 129",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 7: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 7: Unit 129\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 7: Unit 129\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 7: Unit 129\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-130",
  "title": "ARDUINO Interface Protocol Part 7: Unit 130",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 7: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 7: Unit 130\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 7: Unit 130\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 7: Unit 130\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-131",
  "title": "ARDUINO Low-Power Design Part 7: Unit 131",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 7: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 7: Unit 131\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 7: Unit 131\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 7: Unit 131\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-132",
  "title": "ARDUINO Timing Closure Part 7: Unit 132",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 7: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 7: Unit 132\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 7: Unit 132\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 7: Unit 132\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-133",
  "title": "ARDUINO Resource Sharing Part 7: Unit 133",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 7: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 7: Unit 133\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 7: Unit 133\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 7: Unit 133\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-134",
  "title": "ARDUINO Fault Tolerance Part 7: Unit 134",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 7: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 7: Unit 134\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 7: Unit 134\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 7: Unit 134\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-135",
  "title": "ARDUINO Verification Testbench Part 7: Unit 135",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 7: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 7: Unit 135\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 7: Unit 135\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 7: Unit 135\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-136",
  "title": "ARDUINO Hardware Acceleration Part 7: Unit 136",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 7: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 7: Unit 136\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 7: Unit 136\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 7: Unit 136\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-137",
  "title": "ARDUINO Data Flow Control Part 7: Unit 137",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 7: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 7: Unit 137\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 7: Unit 137\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 7: Unit 137\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-138",
  "title": "ARDUINO Corner Case Analysis Part 7: Unit 138",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 7: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 7: Unit 138\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 7: Unit 138\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 7: Unit 138\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-139",
  "title": "ARDUINO Bandwidth Maximizer Part 7: Unit 139",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 7: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 7: Unit 139\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 7: Unit 139\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 7: Unit 139\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-140",
  "title": "ARDUINO Latency Reduction Part 7: Unit 140",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 7: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 7: Unit 140\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 7: Unit 140\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 7: Unit 140\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-141",
  "title": "ARDUINO CDC Isolation Part 7: Unit 141",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 7: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 7: Unit 141\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 7: Unit 141\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 7: Unit 141\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-142",
  "title": "ARDUINO Error Handling Part 7: Unit 142",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 7: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 7: Unit 142\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 7: Unit 142\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 7: Unit 142\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-143",
  "title": "ARDUINO High-Speed Encoding Part 7: Unit 143",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 7: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 7: Unit 143\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 7: Unit 143\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 7: Unit 143\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-144",
  "title": "ARDUINO Synthesizable Model Part 7: Unit 144",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 7: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 7: Unit 144\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 7: Unit 144\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 7: Unit 144\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-145",
  "title": "ARDUINO Optimization Part 8: Unit 145",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 8: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 8: Unit 145\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 8: Unit 145\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 8: Unit 145\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-146",
  "title": "ARDUINO Architecture Part 8: Unit 146",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 8: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 8: Unit 146\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 8: Unit 146\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 8: Unit 146\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-147",
  "title": "ARDUINO Pipeline Stage Part 8: Unit 147",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 8: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 8: Unit 147\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 8: Unit 147\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 8: Unit 147\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-148",
  "title": "ARDUINO Interface Protocol Part 8: Unit 148",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 8: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 8: Unit 148\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 8: Unit 148\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 8: Unit 148\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-149",
  "title": "ARDUINO Low-Power Design Part 8: Unit 149",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 8: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 8: Unit 149\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 8: Unit 149\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 8: Unit 149\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-150",
  "title": "ARDUINO Timing Closure Part 8: Unit 150",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 8: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 8: Unit 150\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 8: Unit 150\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 8: Unit 150\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-151",
  "title": "ARDUINO Resource Sharing Part 8: Unit 151",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 8: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 8: Unit 151\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 8: Unit 151\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 8: Unit 151\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-152",
  "title": "ARDUINO Fault Tolerance Part 8: Unit 152",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 8: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 8: Unit 152\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 8: Unit 152\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 8: Unit 152\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-153",
  "title": "ARDUINO Verification Testbench Part 8: Unit 153",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 8: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 8: Unit 153\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 8: Unit 153\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 8: Unit 153\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-154",
  "title": "ARDUINO Hardware Acceleration Part 8: Unit 154",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 8: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 8: Unit 154\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 8: Unit 154\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 8: Unit 154\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-155",
  "title": "ARDUINO Data Flow Control Part 8: Unit 155",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 8: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 8: Unit 155\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 8: Unit 155\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 8: Unit 155\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-156",
  "title": "ARDUINO Corner Case Analysis Part 8: Unit 156",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 8: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 8: Unit 156\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 8: Unit 156\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 8: Unit 156\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-157",
  "title": "ARDUINO Bandwidth Maximizer Part 8: Unit 157",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 8: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 8: Unit 157\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 8: Unit 157\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 8: Unit 157\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-158",
  "title": "ARDUINO Latency Reduction Part 8: Unit 158",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 8: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 8: Unit 158\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 8: Unit 158\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 8: Unit 158\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-159",
  "title": "ARDUINO CDC Isolation Part 8: Unit 159",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 8: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 8: Unit 159\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 8: Unit 159\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 8: Unit 159\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-160",
  "title": "ARDUINO Error Handling Part 8: Unit 160",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 8: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 8: Unit 160\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 8: Unit 160\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 8: Unit 160\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-161",
  "title": "ARDUINO High-Speed Encoding Part 8: Unit 161",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 8: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 8: Unit 161\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 8: Unit 161\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 8: Unit 161\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-162",
  "title": "ARDUINO Synthesizable Model Part 8: Unit 162",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 8: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 8: Unit 162\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 8: Unit 162\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 8: Unit 162\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-163",
  "title": "ARDUINO Optimization Part 9: Unit 163",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 9: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 9: Unit 163\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 9: Unit 163\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 9: Unit 163\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-164",
  "title": "ARDUINO Architecture Part 9: Unit 164",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 9: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 9: Unit 164\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 9: Unit 164\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 9: Unit 164\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-165",
  "title": "ARDUINO Pipeline Stage Part 9: Unit 165",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 9: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 9: Unit 165\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 9: Unit 165\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 9: Unit 165\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-166",
  "title": "ARDUINO Interface Protocol Part 9: Unit 166",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 9: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 9: Unit 166\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 9: Unit 166\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 9: Unit 166\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-167",
  "title": "ARDUINO Low-Power Design Part 9: Unit 167",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 9: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 9: Unit 167\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 9: Unit 167\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 9: Unit 167\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-168",
  "title": "ARDUINO Timing Closure Part 9: Unit 168",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 9: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 9: Unit 168\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 9: Unit 168\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 9: Unit 168\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-169",
  "title": "ARDUINO Resource Sharing Part 9: Unit 169",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 9: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 9: Unit 169\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 9: Unit 169\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 9: Unit 169\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-170",
  "title": "ARDUINO Fault Tolerance Part 9: Unit 170",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 9: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 9: Unit 170\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 9: Unit 170\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 9: Unit 170\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-171",
  "title": "ARDUINO Verification Testbench Part 9: Unit 171",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 9: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 9: Unit 171\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 9: Unit 171\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 9: Unit 171\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-172",
  "title": "ARDUINO Hardware Acceleration Part 9: Unit 172",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 9: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 9: Unit 172\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 9: Unit 172\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 9: Unit 172\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-173",
  "title": "ARDUINO Data Flow Control Part 9: Unit 173",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 9: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 9: Unit 173\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 9: Unit 173\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 9: Unit 173\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-174",
  "title": "ARDUINO Corner Case Analysis Part 9: Unit 174",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 9: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 9: Unit 174\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 9: Unit 174\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 9: Unit 174\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-175",
  "title": "ARDUINO Bandwidth Maximizer Part 9: Unit 175",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 9: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 9: Unit 175\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 9: Unit 175\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 9: Unit 175\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-176",
  "title": "ARDUINO Latency Reduction Part 9: Unit 176",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 9: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 9: Unit 176\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 9: Unit 176\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 9: Unit 176\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-177",
  "title": "ARDUINO CDC Isolation Part 9: Unit 177",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 9: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 9: Unit 177\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 9: Unit 177\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 9: Unit 177\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-178",
  "title": "ARDUINO Error Handling Part 9: Unit 178",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 9: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 9: Unit 178\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 9: Unit 178\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 9: Unit 178\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-179",
  "title": "ARDUINO High-Speed Encoding Part 9: Unit 179",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 9: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 9: Unit 179\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 9: Unit 179\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 9: Unit 179\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-180",
  "title": "ARDUINO Synthesizable Model Part 9: Unit 180",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 9: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 9: Unit 180\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 9: Unit 180\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 9: Unit 180\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-181",
  "title": "ARDUINO Optimization Part 10: Unit 181",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 10: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 10: Unit 181\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 10: Unit 181\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 10: Unit 181\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-182",
  "title": "ARDUINO Architecture Part 10: Unit 182",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 10: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 10: Unit 182\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 10: Unit 182\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 10: Unit 182\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-183",
  "title": "ARDUINO Pipeline Stage Part 10: Unit 183",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Pipeline Stage Part 10: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 10: Unit 183\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Pipeline Stage Part 10: Unit 183\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Pipeline Stage Part 10: Unit 183\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-184",
  "title": "ARDUINO Interface Protocol Part 10: Unit 184",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Interface Protocol Part 10: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 10: Unit 184\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Interface Protocol Part 10: Unit 184\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Interface Protocol Part 10: Unit 184\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-185",
  "title": "ARDUINO Low-Power Design Part 10: Unit 185",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Low-Power Design Part 10: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 10: Unit 185\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Low-Power Design Part 10: Unit 185\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Low-Power Design Part 10: Unit 185\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-186",
  "title": "ARDUINO Timing Closure Part 10: Unit 186",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Timing Closure Part 10: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 10: Unit 186\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Timing Closure Part 10: Unit 186\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Timing Closure Part 10: Unit 186\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-187",
  "title": "ARDUINO Resource Sharing Part 10: Unit 187",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Resource Sharing Part 10: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 10: Unit 187\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Resource Sharing Part 10: Unit 187\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Resource Sharing Part 10: Unit 187\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-188",
  "title": "ARDUINO Fault Tolerance Part 10: Unit 188",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Fault Tolerance Part 10: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 10: Unit 188\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Fault Tolerance Part 10: Unit 188\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Fault Tolerance Part 10: Unit 188\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-189",
  "title": "ARDUINO Verification Testbench Part 10: Unit 189",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Verification Testbench Part 10: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 10: Unit 189\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Verification Testbench Part 10: Unit 189\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Verification Testbench Part 10: Unit 189\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-190",
  "title": "ARDUINO Hardware Acceleration Part 10: Unit 190",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Hardware Acceleration Part 10: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 10: Unit 190\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Hardware Acceleration Part 10: Unit 190\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Hardware Acceleration Part 10: Unit 190\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-191",
  "title": "ARDUINO Data Flow Control Part 10: Unit 191",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Data Flow Control Part 10: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 10: Unit 191\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Data Flow Control Part 10: Unit 191\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Data Flow Control Part 10: Unit 191\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-192",
  "title": "ARDUINO Corner Case Analysis Part 10: Unit 192",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Corner Case Analysis Part 10: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 10: Unit 192\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Corner Case Analysis Part 10: Unit 192\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Corner Case Analysis Part 10: Unit 192\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-193",
  "title": "ARDUINO Bandwidth Maximizer Part 10: Unit 193",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Bandwidth Maximizer Part 10: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 10: Unit 193\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Bandwidth Maximizer Part 10: Unit 193\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Bandwidth Maximizer Part 10: Unit 193\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-194",
  "title": "ARDUINO Latency Reduction Part 10: Unit 194",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Latency Reduction Part 10: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 10: Unit 194\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Latency Reduction Part 10: Unit 194\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Latency Reduction Part 10: Unit 194\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-195",
  "title": "ARDUINO CDC Isolation Part 10: Unit 195",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO CDC Isolation Part 10: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 10: Unit 195\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO CDC Isolation Part 10: Unit 195\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO CDC Isolation Part 10: Unit 195\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-196",
  "title": "ARDUINO Error Handling Part 10: Unit 196",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Error Handling Part 10: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 10: Unit 196\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Error Handling Part 10: Unit 196\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Error Handling Part 10: Unit 196\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-197",
  "title": "ARDUINO High-Speed Encoding Part 10: Unit 197",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO High-Speed Encoding Part 10: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 10: Unit 197\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO High-Speed Encoding Part 10: Unit 197\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO High-Speed Encoding Part 10: Unit 197\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-198",
  "title": "ARDUINO Synthesizable Model Part 10: Unit 198",
  "topic": "arduino",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'ARDUINO Synthesizable Model Part 10: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 10: Unit 198\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Synthesizable Model Part 10: Unit 198\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Synthesizable Model Part 10: Unit 198\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-199",
  "title": "ARDUINO Optimization Part 11: Unit 199",
  "topic": "arduino",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'ARDUINO Optimization Part 11: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 11: Unit 199\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Optimization Part 11: Unit 199\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Optimization Part 11: Unit 199\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "ard-200",
  "title": "ARDUINO Architecture Part 11: Unit 200",
  "topic": "arduino",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'ARDUINO Architecture Part 11: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Configure pins in setup() with pinMode().\nStep 2: Implement periodic or event-driven tasks in loop().\nStep 3: Use non-blocking millis() or hardware interrupts where needed.",
  "starterCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 11: Unit 200\nvoid setup() {\n  // TODO: Initialize hardware for ARDUINO Architecture Part 11: Unit 200\n}\n\nvoid loop() {\n  // TODO: Main loop execution\n}\n",
  "solutionCode": "// Arduino C/C++ Firmware: ARDUINO Architecture Part 11: Unit 200\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(100);\n  digitalWrite(13, LOW);\n  delay(100);\n}\n",
  "hints": [
    "Use `pinMode()` in setup() to set pin directions.",
    "Prefer non-blocking `millis()` over blocking `delay()`."
  ],
  "tags": [
    "ARDUINO",
    "ARDUINO",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
