import { Problem } from '../types';

export const LINUX_PROBLEMS: Problem[] = [
{
  "id": "lnx-01",
  "title": "Bash Script Argument Parsing and Exit Code Checking",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Bash Script Argument Parsing and Exit Code Checking'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Bash Script Argument Parsing and Exit Code Checking\n# TODO: Write shell commands / script for Bash Script Argument Parsing and Exit Code Checking\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Bash Script Argument Parsing and Exit Code Checking\necho \"Running Bash Script Argument Parsing and Exit Code Checking\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Bash",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-02",
  "title": "Grep Regex Pattern Matching for Timing Violations",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Grep Regex Pattern Matching for Timing Violations'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Grep Regex Pattern Matching for Timing Violations\n# TODO: Write shell commands / script for Grep Regex Pattern Matching for Timing Violations\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Grep Regex Pattern Matching for Timing Violations\necho \"Running Grep Regex Pattern Matching for Timing Violations\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Grep",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-03",
  "title": "Sed Stream Editor for In-Place Netlist Search and Replace",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Sed Stream Editor for In-Place Netlist Search and Replace'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Sed Stream Editor for In-Place Netlist Search and Replace\n# TODO: Write shell commands / script for Sed Stream Editor for In-Place Netlist Search and Replace\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Sed Stream Editor for In-Place Netlist Search and Replace\necho \"Running Sed Stream Editor for In-Place Netlist Search and Replace\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Sed",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-04",
  "title": "Awk Scripting for Area & Power Report Column Summation",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Awk Scripting for Area & Power Report Column Summation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Awk Scripting for Area & Power Report Column Summation\n# TODO: Write shell commands / script for Awk Scripting for Area & Power Report Column Summation\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Awk Scripting for Area & Power Report Column Summation\necho \"Running Awk Scripting for Area & Power Report Column Summation\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Awk",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-05",
  "title": "Find & Xargs Pipeline for RTL Verilog File Collection",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Find & Xargs Pipeline for RTL Verilog File Collection'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Find & Xargs Pipeline for RTL Verilog File Collection\n# TODO: Write shell commands / script for Find & Xargs Pipeline for RTL Verilog File Collection\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Find & Xargs Pipeline for RTL Verilog File Collection\necho \"Running Find & Xargs Pipeline for RTL Verilog File Collection\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Find",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-06",
  "title": "Makefile Rule Dependencies and Compilation Targets",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Makefile Rule Dependencies and Compilation Targets'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Makefile Rule Dependencies and Compilation Targets\n# TODO: Write shell commands / script for Makefile Rule Dependencies and Compilation Targets\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Makefile Rule Dependencies and Compilation Targets\necho \"Running Makefile Rule Dependencies and Compilation Targets\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Makefile",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-07",
  "title": "Makefile Pattern Rules (%.v -> %.vvp) Simulation Flow",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Makefile Pattern Rules (%.v -> %.vvp) Simulation Flow'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Makefile Pattern Rules (%.v -> %.vvp) Simulation Flow\n# TODO: Write shell commands / script for Makefile Pattern Rules (%.v -> %.vvp) Simulation Flow\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Makefile Pattern Rules (%.v -> %.vvp) Simulation Flow\necho \"Running Makefile Pattern Rules (%.v -> %.vvp) Simulation Flow\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Makefile",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-08",
  "title": "Linux Named Pipe (FIFO) Inter-Process Data Streaming",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Linux Named Pipe (FIFO) Inter-Process Data Streaming'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Linux Named Pipe (FIFO) Inter-Process Data Streaming\n# TODO: Write shell commands / script for Linux Named Pipe (FIFO) Inter-Process Data Streaming\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Linux Named Pipe (FIFO) Inter-Process Data Streaming\necho \"Running Linux Named Pipe (FIFO) Inter-Process Data Streaming\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Linux",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-09",
  "title": "Environment Variable Setup for EDA Tool Licenses",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Environment Variable Setup for EDA Tool Licenses'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Environment Variable Setup for EDA Tool Licenses\n# TODO: Write shell commands / script for Environment Variable Setup for EDA Tool Licenses\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Environment Variable Setup for EDA Tool Licenses\necho \"Running Environment Variable Setup for EDA Tool Licenses\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Environment",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-10",
  "title": "TCL Script Procedure for Vivado Timing Slack Extraction",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'TCL Script Procedure for Vivado Timing Slack Extraction'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: TCL Script Procedure for Vivado Timing Slack Extraction\n# TODO: Write shell commands / script for TCL Script Procedure for Vivado Timing Slack Extraction\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: TCL Script Procedure for Vivado Timing Slack Extraction\necho \"Running TCL Script Procedure for Vivado Timing Slack Extraction\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "TCL",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-11",
  "title": "Git Version Control Branching & Merge for Hardware IP",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Git Version Control Branching & Merge for Hardware IP'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Git Version Control Branching & Merge for Hardware IP\n# TODO: Write shell commands / script for Git Version Control Branching & Merge for Hardware IP\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Git Version Control Branching & Merge for Hardware IP\necho \"Running Git Version Control Branching & Merge for Hardware IP\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Git",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-12",
  "title": "Bash Traps for Clean Temporary Workspace Cleanup",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Bash Traps for Clean Temporary Workspace Cleanup'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Bash Traps for Clean Temporary Workspace Cleanup\n# TODO: Write shell commands / script for Bash Traps for Clean Temporary Workspace Cleanup\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Bash Traps for Clean Temporary Workspace Cleanup\necho \"Running Bash Traps for Clean Temporary Workspace Cleanup\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Bash",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-13",
  "title": "Process Monitoring & Memory Usage Profiler for Synthesis",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Process Monitoring & Memory Usage Profiler for Synthesis'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Process Monitoring & Memory Usage Profiler for Synthesis\n# TODO: Write shell commands / script for Process Monitoring & Memory Usage Profiler for Synthesis\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Process Monitoring & Memory Usage Profiler for Synthesis\necho \"Running Process Monitoring & Memory Usage Profiler for Synthesis\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Process",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-14",
  "title": "Standard Stream Redirection (stdout & stderr Separation)",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Standard Stream Redirection (stdout & stderr Separation)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Standard Stream Redirection (stdout & stderr Separation)\n# TODO: Write shell commands / script for Standard Stream Redirection (stdout & stderr Separation)\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Standard Stream Redirection (stdout & stderr Separation)\necho \"Running Standard Stream Redirection (stdout & stderr Separation)\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Standard",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-15",
  "title": "Awk Matrix Transposition for Test Vector Generation",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Awk Matrix Transposition for Test Vector Generation'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Awk Matrix Transposition for Test Vector Generation\n# TODO: Write shell commands / script for Awk Matrix Transposition for Test Vector Generation\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Awk Matrix Transposition for Test Vector Generation\necho \"Running Awk Matrix Transposition for Test Vector Generation\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Awk",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-16",
  "title": "Automated Nightly Regression Testbench Runner Script",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'Automated Nightly Regression Testbench Runner Script'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Automated Nightly Regression Testbench Runner Script\n# TODO: Write shell commands / script for Automated Nightly Regression Testbench Runner Script\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Automated Nightly Regression Testbench Runner Script\necho \"Running Automated Nightly Regression Testbench Runner Script\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Automated",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-17",
  "title": "Diff & Patch Generation for ASIC Engineering Change Order (ECO)",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Diff & Patch Generation for ASIC Engineering Change Order (ECO)'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Diff & Patch Generation for ASIC Engineering Change Order (ECO)\n# TODO: Write shell commands / script for Diff & Patch Generation for ASIC Engineering Change Order (ECO)\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Diff & Patch Generation for ASIC Engineering Change Order (ECO)\necho \"Running Diff & Patch Generation for ASIC Engineering Change Order (ECO)\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Diff",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-18",
  "title": "Cron Job Scheduling for Automated Verification Batch",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'Cron Job Scheduling for Automated Verification Batch'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Cron Job Scheduling for Automated Verification Batch\n# TODO: Write shell commands / script for Cron Job Scheduling for Automated Verification Batch\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Cron Job Scheduling for Automated Verification Batch\necho \"Running Cron Job Scheduling for Automated Verification Batch\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Cron",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-19",
  "title": "Tar and Gzip Compressed Archive of Tape-out GDSII Directory",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'Tar and Gzip Compressed Archive of Tape-out GDSII Directory'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: Tar and Gzip Compressed Archive of Tape-out GDSII Directory\n# TODO: Write shell commands / script for Tar and Gzip Compressed Archive of Tape-out GDSII Directory\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: Tar and Gzip Compressed Archive of Tape-out GDSII Directory\necho \"Running Tar and Gzip Compressed Archive of Tape-out GDSII Directory\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "Tar",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-20",
  "title": "SSH Remote Execution and Key-Based EDA Server Dispatch",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'SSH Remote Execution and Key-Based EDA Server Dispatch'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: SSH Remote Execution and Key-Based EDA Server Dispatch\n# TODO: Write shell commands / script for SSH Remote Execution and Key-Based EDA Server Dispatch\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: SSH Remote Execution and Key-Based EDA Server Dispatch\necho \"Running SSH Remote Execution and Key-Based EDA Server Dispatch\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "SSH",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-21",
  "title": "LINUX Pipeline Stage Part 1: Unit 21",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 1: Unit 21'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 1: Unit 21\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 1: Unit 21\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 1: Unit 21\necho \"Running LINUX Pipeline Stage Part 1: Unit 21\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-22",
  "title": "LINUX Interface Protocol Part 1: Unit 22",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 1: Unit 22'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 1: Unit 22\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 1: Unit 22\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 1: Unit 22\necho \"Running LINUX Interface Protocol Part 1: Unit 22\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-23",
  "title": "LINUX Low-Power Design Part 1: Unit 23",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 1: Unit 23'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 1: Unit 23\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 1: Unit 23\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 1: Unit 23\necho \"Running LINUX Low-Power Design Part 1: Unit 23\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-24",
  "title": "LINUX Timing Closure Part 1: Unit 24",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 1: Unit 24'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 1: Unit 24\n# TODO: Write shell commands / script for LINUX Timing Closure Part 1: Unit 24\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 1: Unit 24\necho \"Running LINUX Timing Closure Part 1: Unit 24\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-25",
  "title": "LINUX Resource Sharing Part 1: Unit 25",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 1: Unit 25'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 1: Unit 25\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 1: Unit 25\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 1: Unit 25\necho \"Running LINUX Resource Sharing Part 1: Unit 25\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-26",
  "title": "LINUX Fault Tolerance Part 1: Unit 26",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 1: Unit 26'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 1: Unit 26\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 1: Unit 26\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 1: Unit 26\necho \"Running LINUX Fault Tolerance Part 1: Unit 26\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-27",
  "title": "LINUX Verification Testbench Part 1: Unit 27",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 1: Unit 27'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 1: Unit 27\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 1: Unit 27\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 1: Unit 27\necho \"Running LINUX Verification Testbench Part 1: Unit 27\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-28",
  "title": "LINUX Hardware Acceleration Part 1: Unit 28",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 1: Unit 28'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 1: Unit 28\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 1: Unit 28\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 1: Unit 28\necho \"Running LINUX Hardware Acceleration Part 1: Unit 28\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-29",
  "title": "LINUX Data Flow Control Part 1: Unit 29",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 1: Unit 29'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 1: Unit 29\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 1: Unit 29\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 1: Unit 29\necho \"Running LINUX Data Flow Control Part 1: Unit 29\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-30",
  "title": "LINUX Corner Case Analysis Part 1: Unit 30",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 1: Unit 30'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 1: Unit 30\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 1: Unit 30\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 1: Unit 30\necho \"Running LINUX Corner Case Analysis Part 1: Unit 30\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-31",
  "title": "LINUX Bandwidth Maximizer Part 1: Unit 31",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 1: Unit 31'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 1: Unit 31\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 1: Unit 31\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 1: Unit 31\necho \"Running LINUX Bandwidth Maximizer Part 1: Unit 31\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-32",
  "title": "LINUX Latency Reduction Part 1: Unit 32",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 1: Unit 32'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 1: Unit 32\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 1: Unit 32\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 1: Unit 32\necho \"Running LINUX Latency Reduction Part 1: Unit 32\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-33",
  "title": "LINUX CDC Isolation Part 1: Unit 33",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 1: Unit 33'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 1: Unit 33\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 1: Unit 33\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 1: Unit 33\necho \"Running LINUX CDC Isolation Part 1: Unit 33\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-34",
  "title": "LINUX Error Handling Part 1: Unit 34",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 1: Unit 34'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 1: Unit 34\n# TODO: Write shell commands / script for LINUX Error Handling Part 1: Unit 34\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 1: Unit 34\necho \"Running LINUX Error Handling Part 1: Unit 34\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-35",
  "title": "LINUX High-Speed Encoding Part 1: Unit 35",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 1: Unit 35'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 1: Unit 35\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 1: Unit 35\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 1: Unit 35\necho \"Running LINUX High-Speed Encoding Part 1: Unit 35\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-36",
  "title": "LINUX Synthesizable Model Part 1: Unit 36",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 1: Unit 36'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 1: Unit 36\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 1: Unit 36\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 1: Unit 36\necho \"Running LINUX Synthesizable Model Part 1: Unit 36\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-37",
  "title": "LINUX Optimization Part 2: Unit 37",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 2: Unit 37'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 2: Unit 37\n# TODO: Write shell commands / script for LINUX Optimization Part 2: Unit 37\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 2: Unit 37\necho \"Running LINUX Optimization Part 2: Unit 37\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-38",
  "title": "LINUX Architecture Part 2: Unit 38",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 2: Unit 38'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 2: Unit 38\n# TODO: Write shell commands / script for LINUX Architecture Part 2: Unit 38\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 2: Unit 38\necho \"Running LINUX Architecture Part 2: Unit 38\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-39",
  "title": "LINUX Pipeline Stage Part 2: Unit 39",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 2: Unit 39'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 2: Unit 39\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 2: Unit 39\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 2: Unit 39\necho \"Running LINUX Pipeline Stage Part 2: Unit 39\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-40",
  "title": "LINUX Interface Protocol Part 2: Unit 40",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 2: Unit 40'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 2: Unit 40\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 2: Unit 40\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 2: Unit 40\necho \"Running LINUX Interface Protocol Part 2: Unit 40\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-41",
  "title": "LINUX Low-Power Design Part 2: Unit 41",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 2: Unit 41'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 2: Unit 41\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 2: Unit 41\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 2: Unit 41\necho \"Running LINUX Low-Power Design Part 2: Unit 41\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-42",
  "title": "LINUX Timing Closure Part 2: Unit 42",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 2: Unit 42'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 2: Unit 42\n# TODO: Write shell commands / script for LINUX Timing Closure Part 2: Unit 42\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 2: Unit 42\necho \"Running LINUX Timing Closure Part 2: Unit 42\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-43",
  "title": "LINUX Resource Sharing Part 2: Unit 43",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 2: Unit 43'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 2: Unit 43\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 2: Unit 43\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 2: Unit 43\necho \"Running LINUX Resource Sharing Part 2: Unit 43\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-44",
  "title": "LINUX Fault Tolerance Part 2: Unit 44",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 2: Unit 44'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 2: Unit 44\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 2: Unit 44\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 2: Unit 44\necho \"Running LINUX Fault Tolerance Part 2: Unit 44\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-45",
  "title": "LINUX Verification Testbench Part 2: Unit 45",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 2: Unit 45'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 2: Unit 45\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 2: Unit 45\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 2: Unit 45\necho \"Running LINUX Verification Testbench Part 2: Unit 45\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-46",
  "title": "LINUX Hardware Acceleration Part 2: Unit 46",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 2: Unit 46'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 2: Unit 46\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 2: Unit 46\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 2: Unit 46\necho \"Running LINUX Hardware Acceleration Part 2: Unit 46\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-47",
  "title": "LINUX Data Flow Control Part 2: Unit 47",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 2: Unit 47'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 2: Unit 47\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 2: Unit 47\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 2: Unit 47\necho \"Running LINUX Data Flow Control Part 2: Unit 47\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-48",
  "title": "LINUX Corner Case Analysis Part 2: Unit 48",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 2: Unit 48'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 2: Unit 48\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 2: Unit 48\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 2: Unit 48\necho \"Running LINUX Corner Case Analysis Part 2: Unit 48\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-49",
  "title": "LINUX Bandwidth Maximizer Part 2: Unit 49",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 2: Unit 49'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 2: Unit 49\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 2: Unit 49\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 2: Unit 49\necho \"Running LINUX Bandwidth Maximizer Part 2: Unit 49\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-50",
  "title": "LINUX Latency Reduction Part 2: Unit 50",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 2: Unit 50'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 2: Unit 50\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 2: Unit 50\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 2: Unit 50\necho \"Running LINUX Latency Reduction Part 2: Unit 50\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-51",
  "title": "LINUX CDC Isolation Part 2: Unit 51",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 2: Unit 51'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 2: Unit 51\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 2: Unit 51\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 2: Unit 51\necho \"Running LINUX CDC Isolation Part 2: Unit 51\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-52",
  "title": "LINUX Error Handling Part 2: Unit 52",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 2: Unit 52'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 2: Unit 52\n# TODO: Write shell commands / script for LINUX Error Handling Part 2: Unit 52\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 2: Unit 52\necho \"Running LINUX Error Handling Part 2: Unit 52\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-53",
  "title": "LINUX High-Speed Encoding Part 2: Unit 53",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 2: Unit 53'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 2: Unit 53\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 2: Unit 53\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 2: Unit 53\necho \"Running LINUX High-Speed Encoding Part 2: Unit 53\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-54",
  "title": "LINUX Synthesizable Model Part 2: Unit 54",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 2: Unit 54'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 2: Unit 54\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 2: Unit 54\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 2: Unit 54\necho \"Running LINUX Synthesizable Model Part 2: Unit 54\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-55",
  "title": "LINUX Optimization Part 3: Unit 55",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 3: Unit 55'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 3: Unit 55\n# TODO: Write shell commands / script for LINUX Optimization Part 3: Unit 55\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 3: Unit 55\necho \"Running LINUX Optimization Part 3: Unit 55\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-56",
  "title": "LINUX Architecture Part 3: Unit 56",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 3: Unit 56'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 3: Unit 56\n# TODO: Write shell commands / script for LINUX Architecture Part 3: Unit 56\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 3: Unit 56\necho \"Running LINUX Architecture Part 3: Unit 56\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-57",
  "title": "LINUX Pipeline Stage Part 3: Unit 57",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 3: Unit 57'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 3: Unit 57\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 3: Unit 57\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 3: Unit 57\necho \"Running LINUX Pipeline Stage Part 3: Unit 57\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-58",
  "title": "LINUX Interface Protocol Part 3: Unit 58",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 3: Unit 58'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 3: Unit 58\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 3: Unit 58\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 3: Unit 58\necho \"Running LINUX Interface Protocol Part 3: Unit 58\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-59",
  "title": "LINUX Low-Power Design Part 3: Unit 59",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 3: Unit 59'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 3: Unit 59\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 3: Unit 59\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 3: Unit 59\necho \"Running LINUX Low-Power Design Part 3: Unit 59\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-60",
  "title": "LINUX Timing Closure Part 3: Unit 60",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 3: Unit 60'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 3: Unit 60\n# TODO: Write shell commands / script for LINUX Timing Closure Part 3: Unit 60\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 3: Unit 60\necho \"Running LINUX Timing Closure Part 3: Unit 60\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-61",
  "title": "LINUX Resource Sharing Part 3: Unit 61",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 3: Unit 61'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 3: Unit 61\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 3: Unit 61\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 3: Unit 61\necho \"Running LINUX Resource Sharing Part 3: Unit 61\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-62",
  "title": "LINUX Fault Tolerance Part 3: Unit 62",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 3: Unit 62'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 3: Unit 62\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 3: Unit 62\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 3: Unit 62\necho \"Running LINUX Fault Tolerance Part 3: Unit 62\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-63",
  "title": "LINUX Verification Testbench Part 3: Unit 63",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 3: Unit 63'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 3: Unit 63\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 3: Unit 63\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 3: Unit 63\necho \"Running LINUX Verification Testbench Part 3: Unit 63\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-64",
  "title": "LINUX Hardware Acceleration Part 3: Unit 64",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 3: Unit 64'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 3: Unit 64\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 3: Unit 64\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 3: Unit 64\necho \"Running LINUX Hardware Acceleration Part 3: Unit 64\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-65",
  "title": "LINUX Data Flow Control Part 3: Unit 65",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 3: Unit 65'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 3: Unit 65\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 3: Unit 65\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 3: Unit 65\necho \"Running LINUX Data Flow Control Part 3: Unit 65\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-66",
  "title": "LINUX Corner Case Analysis Part 3: Unit 66",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 3: Unit 66'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 3: Unit 66\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 3: Unit 66\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 3: Unit 66\necho \"Running LINUX Corner Case Analysis Part 3: Unit 66\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-67",
  "title": "LINUX Bandwidth Maximizer Part 3: Unit 67",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 3: Unit 67'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 3: Unit 67\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 3: Unit 67\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 3: Unit 67\necho \"Running LINUX Bandwidth Maximizer Part 3: Unit 67\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-68",
  "title": "LINUX Latency Reduction Part 3: Unit 68",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 3: Unit 68'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 3: Unit 68\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 3: Unit 68\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 3: Unit 68\necho \"Running LINUX Latency Reduction Part 3: Unit 68\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-69",
  "title": "LINUX CDC Isolation Part 3: Unit 69",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 3: Unit 69'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 3: Unit 69\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 3: Unit 69\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 3: Unit 69\necho \"Running LINUX CDC Isolation Part 3: Unit 69\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-70",
  "title": "LINUX Error Handling Part 3: Unit 70",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 3: Unit 70'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 3: Unit 70\n# TODO: Write shell commands / script for LINUX Error Handling Part 3: Unit 70\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 3: Unit 70\necho \"Running LINUX Error Handling Part 3: Unit 70\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-71",
  "title": "LINUX High-Speed Encoding Part 3: Unit 71",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 3: Unit 71'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 3: Unit 71\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 3: Unit 71\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 3: Unit 71\necho \"Running LINUX High-Speed Encoding Part 3: Unit 71\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-72",
  "title": "LINUX Synthesizable Model Part 3: Unit 72",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 3: Unit 72'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 3: Unit 72\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 3: Unit 72\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 3: Unit 72\necho \"Running LINUX Synthesizable Model Part 3: Unit 72\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-73",
  "title": "LINUX Optimization Part 4: Unit 73",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 4: Unit 73'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 4: Unit 73\n# TODO: Write shell commands / script for LINUX Optimization Part 4: Unit 73\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 4: Unit 73\necho \"Running LINUX Optimization Part 4: Unit 73\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-74",
  "title": "LINUX Architecture Part 4: Unit 74",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 4: Unit 74'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 4: Unit 74\n# TODO: Write shell commands / script for LINUX Architecture Part 4: Unit 74\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 4: Unit 74\necho \"Running LINUX Architecture Part 4: Unit 74\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-75",
  "title": "LINUX Pipeline Stage Part 4: Unit 75",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 4: Unit 75'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 4: Unit 75\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 4: Unit 75\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 4: Unit 75\necho \"Running LINUX Pipeline Stage Part 4: Unit 75\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-76",
  "title": "LINUX Interface Protocol Part 4: Unit 76",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 4: Unit 76'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 4: Unit 76\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 4: Unit 76\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 4: Unit 76\necho \"Running LINUX Interface Protocol Part 4: Unit 76\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-77",
  "title": "LINUX Low-Power Design Part 4: Unit 77",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 4: Unit 77'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 4: Unit 77\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 4: Unit 77\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 4: Unit 77\necho \"Running LINUX Low-Power Design Part 4: Unit 77\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-78",
  "title": "LINUX Timing Closure Part 4: Unit 78",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 4: Unit 78'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 4: Unit 78\n# TODO: Write shell commands / script for LINUX Timing Closure Part 4: Unit 78\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 4: Unit 78\necho \"Running LINUX Timing Closure Part 4: Unit 78\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-79",
  "title": "LINUX Resource Sharing Part 4: Unit 79",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 4: Unit 79'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 4: Unit 79\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 4: Unit 79\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 4: Unit 79\necho \"Running LINUX Resource Sharing Part 4: Unit 79\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-80",
  "title": "LINUX Fault Tolerance Part 4: Unit 80",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 4: Unit 80'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 4: Unit 80\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 4: Unit 80\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 4: Unit 80\necho \"Running LINUX Fault Tolerance Part 4: Unit 80\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-81",
  "title": "LINUX Verification Testbench Part 4: Unit 81",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 4: Unit 81'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 4: Unit 81\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 4: Unit 81\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 4: Unit 81\necho \"Running LINUX Verification Testbench Part 4: Unit 81\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-82",
  "title": "LINUX Hardware Acceleration Part 4: Unit 82",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 4: Unit 82'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 4: Unit 82\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 4: Unit 82\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 4: Unit 82\necho \"Running LINUX Hardware Acceleration Part 4: Unit 82\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-83",
  "title": "LINUX Data Flow Control Part 4: Unit 83",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 4: Unit 83'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 4: Unit 83\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 4: Unit 83\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 4: Unit 83\necho \"Running LINUX Data Flow Control Part 4: Unit 83\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-84",
  "title": "LINUX Corner Case Analysis Part 4: Unit 84",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 4: Unit 84'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 4: Unit 84\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 4: Unit 84\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 4: Unit 84\necho \"Running LINUX Corner Case Analysis Part 4: Unit 84\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-85",
  "title": "LINUX Bandwidth Maximizer Part 4: Unit 85",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 4: Unit 85'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 4: Unit 85\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 4: Unit 85\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 4: Unit 85\necho \"Running LINUX Bandwidth Maximizer Part 4: Unit 85\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-86",
  "title": "LINUX Latency Reduction Part 4: Unit 86",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 4: Unit 86'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 4: Unit 86\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 4: Unit 86\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 4: Unit 86\necho \"Running LINUX Latency Reduction Part 4: Unit 86\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-87",
  "title": "LINUX CDC Isolation Part 4: Unit 87",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 4: Unit 87'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 4: Unit 87\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 4: Unit 87\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 4: Unit 87\necho \"Running LINUX CDC Isolation Part 4: Unit 87\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-88",
  "title": "LINUX Error Handling Part 4: Unit 88",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 4: Unit 88'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 4: Unit 88\n# TODO: Write shell commands / script for LINUX Error Handling Part 4: Unit 88\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 4: Unit 88\necho \"Running LINUX Error Handling Part 4: Unit 88\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-89",
  "title": "LINUX High-Speed Encoding Part 4: Unit 89",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 4: Unit 89'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 4: Unit 89\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 4: Unit 89\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 4: Unit 89\necho \"Running LINUX High-Speed Encoding Part 4: Unit 89\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-90",
  "title": "LINUX Synthesizable Model Part 4: Unit 90",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 4: Unit 90'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 4: Unit 90\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 4: Unit 90\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 4: Unit 90\necho \"Running LINUX Synthesizable Model Part 4: Unit 90\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-91",
  "title": "LINUX Optimization Part 5: Unit 91",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 5: Unit 91'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 5: Unit 91\n# TODO: Write shell commands / script for LINUX Optimization Part 5: Unit 91\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 5: Unit 91\necho \"Running LINUX Optimization Part 5: Unit 91\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-92",
  "title": "LINUX Architecture Part 5: Unit 92",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 5: Unit 92'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 5: Unit 92\n# TODO: Write shell commands / script for LINUX Architecture Part 5: Unit 92\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 5: Unit 92\necho \"Running LINUX Architecture Part 5: Unit 92\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-93",
  "title": "LINUX Pipeline Stage Part 5: Unit 93",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 5: Unit 93'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 5: Unit 93\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 5: Unit 93\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 5: Unit 93\necho \"Running LINUX Pipeline Stage Part 5: Unit 93\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-94",
  "title": "LINUX Interface Protocol Part 5: Unit 94",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 5: Unit 94'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 5: Unit 94\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 5: Unit 94\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 5: Unit 94\necho \"Running LINUX Interface Protocol Part 5: Unit 94\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-95",
  "title": "LINUX Low-Power Design Part 5: Unit 95",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 5: Unit 95'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 5: Unit 95\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 5: Unit 95\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 5: Unit 95\necho \"Running LINUX Low-Power Design Part 5: Unit 95\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-96",
  "title": "LINUX Timing Closure Part 5: Unit 96",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 5: Unit 96'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 5: Unit 96\n# TODO: Write shell commands / script for LINUX Timing Closure Part 5: Unit 96\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 5: Unit 96\necho \"Running LINUX Timing Closure Part 5: Unit 96\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-97",
  "title": "LINUX Resource Sharing Part 5: Unit 97",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 5: Unit 97'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 5: Unit 97\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 5: Unit 97\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 5: Unit 97\necho \"Running LINUX Resource Sharing Part 5: Unit 97\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-98",
  "title": "LINUX Fault Tolerance Part 5: Unit 98",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 5: Unit 98'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 5: Unit 98\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 5: Unit 98\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 5: Unit 98\necho \"Running LINUX Fault Tolerance Part 5: Unit 98\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-99",
  "title": "LINUX Verification Testbench Part 5: Unit 99",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 5: Unit 99'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 5: Unit 99\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 5: Unit 99\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 5: Unit 99\necho \"Running LINUX Verification Testbench Part 5: Unit 99\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-100",
  "title": "LINUX Hardware Acceleration Part 5: Unit 100",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 5: Unit 100'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 5: Unit 100\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 5: Unit 100\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 5: Unit 100\necho \"Running LINUX Hardware Acceleration Part 5: Unit 100\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-101",
  "title": "LINUX Data Flow Control Part 5: Unit 101",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 5: Unit 101'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 5: Unit 101\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 5: Unit 101\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 5: Unit 101\necho \"Running LINUX Data Flow Control Part 5: Unit 101\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-102",
  "title": "LINUX Corner Case Analysis Part 5: Unit 102",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 5: Unit 102'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 5: Unit 102\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 5: Unit 102\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 5: Unit 102\necho \"Running LINUX Corner Case Analysis Part 5: Unit 102\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-103",
  "title": "LINUX Bandwidth Maximizer Part 5: Unit 103",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 5: Unit 103'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 5: Unit 103\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 5: Unit 103\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 5: Unit 103\necho \"Running LINUX Bandwidth Maximizer Part 5: Unit 103\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-104",
  "title": "LINUX Latency Reduction Part 5: Unit 104",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 5: Unit 104'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 5: Unit 104\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 5: Unit 104\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 5: Unit 104\necho \"Running LINUX Latency Reduction Part 5: Unit 104\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-105",
  "title": "LINUX CDC Isolation Part 5: Unit 105",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 5: Unit 105'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 5: Unit 105\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 5: Unit 105\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 5: Unit 105\necho \"Running LINUX CDC Isolation Part 5: Unit 105\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-106",
  "title": "LINUX Error Handling Part 5: Unit 106",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 5: Unit 106'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 5: Unit 106\n# TODO: Write shell commands / script for LINUX Error Handling Part 5: Unit 106\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 5: Unit 106\necho \"Running LINUX Error Handling Part 5: Unit 106\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-107",
  "title": "LINUX High-Speed Encoding Part 5: Unit 107",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 5: Unit 107'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 5: Unit 107\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 5: Unit 107\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 5: Unit 107\necho \"Running LINUX High-Speed Encoding Part 5: Unit 107\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-108",
  "title": "LINUX Synthesizable Model Part 5: Unit 108",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 5: Unit 108'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 5: Unit 108\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 5: Unit 108\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 5: Unit 108\necho \"Running LINUX Synthesizable Model Part 5: Unit 108\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-109",
  "title": "LINUX Optimization Part 6: Unit 109",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 6: Unit 109'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 6: Unit 109\n# TODO: Write shell commands / script for LINUX Optimization Part 6: Unit 109\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 6: Unit 109\necho \"Running LINUX Optimization Part 6: Unit 109\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-110",
  "title": "LINUX Architecture Part 6: Unit 110",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 6: Unit 110'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 6: Unit 110\n# TODO: Write shell commands / script for LINUX Architecture Part 6: Unit 110\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 6: Unit 110\necho \"Running LINUX Architecture Part 6: Unit 110\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-111",
  "title": "LINUX Pipeline Stage Part 6: Unit 111",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 6: Unit 111'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 6: Unit 111\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 6: Unit 111\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 6: Unit 111\necho \"Running LINUX Pipeline Stage Part 6: Unit 111\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-112",
  "title": "LINUX Interface Protocol Part 6: Unit 112",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 6: Unit 112'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 6: Unit 112\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 6: Unit 112\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 6: Unit 112\necho \"Running LINUX Interface Protocol Part 6: Unit 112\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-113",
  "title": "LINUX Low-Power Design Part 6: Unit 113",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 6: Unit 113'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 6: Unit 113\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 6: Unit 113\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 6: Unit 113\necho \"Running LINUX Low-Power Design Part 6: Unit 113\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-114",
  "title": "LINUX Timing Closure Part 6: Unit 114",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 6: Unit 114'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 6: Unit 114\n# TODO: Write shell commands / script for LINUX Timing Closure Part 6: Unit 114\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 6: Unit 114\necho \"Running LINUX Timing Closure Part 6: Unit 114\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-115",
  "title": "LINUX Resource Sharing Part 6: Unit 115",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 6: Unit 115'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 6: Unit 115\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 6: Unit 115\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 6: Unit 115\necho \"Running LINUX Resource Sharing Part 6: Unit 115\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-116",
  "title": "LINUX Fault Tolerance Part 6: Unit 116",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 6: Unit 116'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 6: Unit 116\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 6: Unit 116\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 6: Unit 116\necho \"Running LINUX Fault Tolerance Part 6: Unit 116\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-117",
  "title": "LINUX Verification Testbench Part 6: Unit 117",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 6: Unit 117'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 6: Unit 117\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 6: Unit 117\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 6: Unit 117\necho \"Running LINUX Verification Testbench Part 6: Unit 117\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-118",
  "title": "LINUX Hardware Acceleration Part 6: Unit 118",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 6: Unit 118'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 6: Unit 118\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 6: Unit 118\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 6: Unit 118\necho \"Running LINUX Hardware Acceleration Part 6: Unit 118\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-119",
  "title": "LINUX Data Flow Control Part 6: Unit 119",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 6: Unit 119'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 6: Unit 119\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 6: Unit 119\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 6: Unit 119\necho \"Running LINUX Data Flow Control Part 6: Unit 119\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-120",
  "title": "LINUX Corner Case Analysis Part 6: Unit 120",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 6: Unit 120'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 6: Unit 120\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 6: Unit 120\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 6: Unit 120\necho \"Running LINUX Corner Case Analysis Part 6: Unit 120\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-121",
  "title": "LINUX Bandwidth Maximizer Part 6: Unit 121",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 6: Unit 121'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 6: Unit 121\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 6: Unit 121\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 6: Unit 121\necho \"Running LINUX Bandwidth Maximizer Part 6: Unit 121\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-122",
  "title": "LINUX Latency Reduction Part 6: Unit 122",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 6: Unit 122'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 6: Unit 122\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 6: Unit 122\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 6: Unit 122\necho \"Running LINUX Latency Reduction Part 6: Unit 122\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-123",
  "title": "LINUX CDC Isolation Part 6: Unit 123",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 6: Unit 123'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 6: Unit 123\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 6: Unit 123\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 6: Unit 123\necho \"Running LINUX CDC Isolation Part 6: Unit 123\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-124",
  "title": "LINUX Error Handling Part 6: Unit 124",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 6: Unit 124'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 6: Unit 124\n# TODO: Write shell commands / script for LINUX Error Handling Part 6: Unit 124\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 6: Unit 124\necho \"Running LINUX Error Handling Part 6: Unit 124\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-125",
  "title": "LINUX High-Speed Encoding Part 6: Unit 125",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 6: Unit 125'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 6: Unit 125\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 6: Unit 125\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 6: Unit 125\necho \"Running LINUX High-Speed Encoding Part 6: Unit 125\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-126",
  "title": "LINUX Synthesizable Model Part 6: Unit 126",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 6: Unit 126'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 6: Unit 126\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 6: Unit 126\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 6: Unit 126\necho \"Running LINUX Synthesizable Model Part 6: Unit 126\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-127",
  "title": "LINUX Optimization Part 7: Unit 127",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 7: Unit 127'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 7: Unit 127\n# TODO: Write shell commands / script for LINUX Optimization Part 7: Unit 127\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 7: Unit 127\necho \"Running LINUX Optimization Part 7: Unit 127\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-128",
  "title": "LINUX Architecture Part 7: Unit 128",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 7: Unit 128'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 7: Unit 128\n# TODO: Write shell commands / script for LINUX Architecture Part 7: Unit 128\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 7: Unit 128\necho \"Running LINUX Architecture Part 7: Unit 128\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-129",
  "title": "LINUX Pipeline Stage Part 7: Unit 129",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 7: Unit 129'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 7: Unit 129\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 7: Unit 129\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 7: Unit 129\necho \"Running LINUX Pipeline Stage Part 7: Unit 129\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-130",
  "title": "LINUX Interface Protocol Part 7: Unit 130",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 7: Unit 130'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 7: Unit 130\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 7: Unit 130\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 7: Unit 130\necho \"Running LINUX Interface Protocol Part 7: Unit 130\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-131",
  "title": "LINUX Low-Power Design Part 7: Unit 131",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 7: Unit 131'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 7: Unit 131\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 7: Unit 131\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 7: Unit 131\necho \"Running LINUX Low-Power Design Part 7: Unit 131\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-132",
  "title": "LINUX Timing Closure Part 7: Unit 132",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 7: Unit 132'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 7: Unit 132\n# TODO: Write shell commands / script for LINUX Timing Closure Part 7: Unit 132\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 7: Unit 132\necho \"Running LINUX Timing Closure Part 7: Unit 132\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-133",
  "title": "LINUX Resource Sharing Part 7: Unit 133",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 7: Unit 133'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 7: Unit 133\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 7: Unit 133\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 7: Unit 133\necho \"Running LINUX Resource Sharing Part 7: Unit 133\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-134",
  "title": "LINUX Fault Tolerance Part 7: Unit 134",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 7: Unit 134'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 7: Unit 134\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 7: Unit 134\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 7: Unit 134\necho \"Running LINUX Fault Tolerance Part 7: Unit 134\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-135",
  "title": "LINUX Verification Testbench Part 7: Unit 135",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 7: Unit 135'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 7: Unit 135\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 7: Unit 135\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 7: Unit 135\necho \"Running LINUX Verification Testbench Part 7: Unit 135\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-136",
  "title": "LINUX Hardware Acceleration Part 7: Unit 136",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 7: Unit 136'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 7: Unit 136\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 7: Unit 136\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 7: Unit 136\necho \"Running LINUX Hardware Acceleration Part 7: Unit 136\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-137",
  "title": "LINUX Data Flow Control Part 7: Unit 137",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 7: Unit 137'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 7: Unit 137\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 7: Unit 137\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 7: Unit 137\necho \"Running LINUX Data Flow Control Part 7: Unit 137\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-138",
  "title": "LINUX Corner Case Analysis Part 7: Unit 138",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 7: Unit 138'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 7: Unit 138\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 7: Unit 138\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 7: Unit 138\necho \"Running LINUX Corner Case Analysis Part 7: Unit 138\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-139",
  "title": "LINUX Bandwidth Maximizer Part 7: Unit 139",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 7: Unit 139'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 7: Unit 139\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 7: Unit 139\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 7: Unit 139\necho \"Running LINUX Bandwidth Maximizer Part 7: Unit 139\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-140",
  "title": "LINUX Latency Reduction Part 7: Unit 140",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 7: Unit 140'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 7: Unit 140\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 7: Unit 140\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 7: Unit 140\necho \"Running LINUX Latency Reduction Part 7: Unit 140\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-141",
  "title": "LINUX CDC Isolation Part 7: Unit 141",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 7: Unit 141'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 7: Unit 141\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 7: Unit 141\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 7: Unit 141\necho \"Running LINUX CDC Isolation Part 7: Unit 141\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-142",
  "title": "LINUX Error Handling Part 7: Unit 142",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 7: Unit 142'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 7: Unit 142\n# TODO: Write shell commands / script for LINUX Error Handling Part 7: Unit 142\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 7: Unit 142\necho \"Running LINUX Error Handling Part 7: Unit 142\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-143",
  "title": "LINUX High-Speed Encoding Part 7: Unit 143",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 7: Unit 143'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 7: Unit 143\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 7: Unit 143\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 7: Unit 143\necho \"Running LINUX High-Speed Encoding Part 7: Unit 143\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-144",
  "title": "LINUX Synthesizable Model Part 7: Unit 144",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 7: Unit 144'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 7: Unit 144\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 7: Unit 144\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 7: Unit 144\necho \"Running LINUX Synthesizable Model Part 7: Unit 144\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-145",
  "title": "LINUX Optimization Part 8: Unit 145",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 8: Unit 145'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 8: Unit 145\n# TODO: Write shell commands / script for LINUX Optimization Part 8: Unit 145\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 8: Unit 145\necho \"Running LINUX Optimization Part 8: Unit 145\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-146",
  "title": "LINUX Architecture Part 8: Unit 146",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 8: Unit 146'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 8: Unit 146\n# TODO: Write shell commands / script for LINUX Architecture Part 8: Unit 146\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 8: Unit 146\necho \"Running LINUX Architecture Part 8: Unit 146\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-147",
  "title": "LINUX Pipeline Stage Part 8: Unit 147",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 8: Unit 147'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 8: Unit 147\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 8: Unit 147\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 8: Unit 147\necho \"Running LINUX Pipeline Stage Part 8: Unit 147\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-148",
  "title": "LINUX Interface Protocol Part 8: Unit 148",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 8: Unit 148'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 8: Unit 148\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 8: Unit 148\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 8: Unit 148\necho \"Running LINUX Interface Protocol Part 8: Unit 148\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-149",
  "title": "LINUX Low-Power Design Part 8: Unit 149",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 8: Unit 149'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 8: Unit 149\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 8: Unit 149\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 8: Unit 149\necho \"Running LINUX Low-Power Design Part 8: Unit 149\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-150",
  "title": "LINUX Timing Closure Part 8: Unit 150",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 8: Unit 150'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 8: Unit 150\n# TODO: Write shell commands / script for LINUX Timing Closure Part 8: Unit 150\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 8: Unit 150\necho \"Running LINUX Timing Closure Part 8: Unit 150\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-151",
  "title": "LINUX Resource Sharing Part 8: Unit 151",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 8: Unit 151'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 8: Unit 151\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 8: Unit 151\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 8: Unit 151\necho \"Running LINUX Resource Sharing Part 8: Unit 151\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-152",
  "title": "LINUX Fault Tolerance Part 8: Unit 152",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 8: Unit 152'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 8: Unit 152\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 8: Unit 152\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 8: Unit 152\necho \"Running LINUX Fault Tolerance Part 8: Unit 152\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-153",
  "title": "LINUX Verification Testbench Part 8: Unit 153",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 8: Unit 153'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 8: Unit 153\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 8: Unit 153\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 8: Unit 153\necho \"Running LINUX Verification Testbench Part 8: Unit 153\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-154",
  "title": "LINUX Hardware Acceleration Part 8: Unit 154",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 8: Unit 154'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 8: Unit 154\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 8: Unit 154\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 8: Unit 154\necho \"Running LINUX Hardware Acceleration Part 8: Unit 154\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-155",
  "title": "LINUX Data Flow Control Part 8: Unit 155",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 8: Unit 155'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 8: Unit 155\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 8: Unit 155\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 8: Unit 155\necho \"Running LINUX Data Flow Control Part 8: Unit 155\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-156",
  "title": "LINUX Corner Case Analysis Part 8: Unit 156",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 8: Unit 156'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 8: Unit 156\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 8: Unit 156\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 8: Unit 156\necho \"Running LINUX Corner Case Analysis Part 8: Unit 156\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-157",
  "title": "LINUX Bandwidth Maximizer Part 8: Unit 157",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 8: Unit 157'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 8: Unit 157\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 8: Unit 157\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 8: Unit 157\necho \"Running LINUX Bandwidth Maximizer Part 8: Unit 157\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-158",
  "title": "LINUX Latency Reduction Part 8: Unit 158",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 8: Unit 158'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 8: Unit 158\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 8: Unit 158\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 8: Unit 158\necho \"Running LINUX Latency Reduction Part 8: Unit 158\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-159",
  "title": "LINUX CDC Isolation Part 8: Unit 159",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 8: Unit 159'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 8: Unit 159\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 8: Unit 159\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 8: Unit 159\necho \"Running LINUX CDC Isolation Part 8: Unit 159\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-160",
  "title": "LINUX Error Handling Part 8: Unit 160",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 8: Unit 160'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 8: Unit 160\n# TODO: Write shell commands / script for LINUX Error Handling Part 8: Unit 160\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 8: Unit 160\necho \"Running LINUX Error Handling Part 8: Unit 160\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-161",
  "title": "LINUX High-Speed Encoding Part 8: Unit 161",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 8: Unit 161'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 8: Unit 161\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 8: Unit 161\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 8: Unit 161\necho \"Running LINUX High-Speed Encoding Part 8: Unit 161\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-162",
  "title": "LINUX Synthesizable Model Part 8: Unit 162",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 8: Unit 162'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 8: Unit 162\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 8: Unit 162\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 8: Unit 162\necho \"Running LINUX Synthesizable Model Part 8: Unit 162\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-163",
  "title": "LINUX Optimization Part 9: Unit 163",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 9: Unit 163'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 9: Unit 163\n# TODO: Write shell commands / script for LINUX Optimization Part 9: Unit 163\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 9: Unit 163\necho \"Running LINUX Optimization Part 9: Unit 163\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-164",
  "title": "LINUX Architecture Part 9: Unit 164",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 9: Unit 164'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 9: Unit 164\n# TODO: Write shell commands / script for LINUX Architecture Part 9: Unit 164\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 9: Unit 164\necho \"Running LINUX Architecture Part 9: Unit 164\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-165",
  "title": "LINUX Pipeline Stage Part 9: Unit 165",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 9: Unit 165'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 9: Unit 165\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 9: Unit 165\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 9: Unit 165\necho \"Running LINUX Pipeline Stage Part 9: Unit 165\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-166",
  "title": "LINUX Interface Protocol Part 9: Unit 166",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 9: Unit 166'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 9: Unit 166\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 9: Unit 166\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 9: Unit 166\necho \"Running LINUX Interface Protocol Part 9: Unit 166\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-167",
  "title": "LINUX Low-Power Design Part 9: Unit 167",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 9: Unit 167'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 9: Unit 167\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 9: Unit 167\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 9: Unit 167\necho \"Running LINUX Low-Power Design Part 9: Unit 167\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-168",
  "title": "LINUX Timing Closure Part 9: Unit 168",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 9: Unit 168'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 9: Unit 168\n# TODO: Write shell commands / script for LINUX Timing Closure Part 9: Unit 168\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 9: Unit 168\necho \"Running LINUX Timing Closure Part 9: Unit 168\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-169",
  "title": "LINUX Resource Sharing Part 9: Unit 169",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 9: Unit 169'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 9: Unit 169\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 9: Unit 169\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 9: Unit 169\necho \"Running LINUX Resource Sharing Part 9: Unit 169\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-170",
  "title": "LINUX Fault Tolerance Part 9: Unit 170",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 9: Unit 170'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 9: Unit 170\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 9: Unit 170\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 9: Unit 170\necho \"Running LINUX Fault Tolerance Part 9: Unit 170\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-171",
  "title": "LINUX Verification Testbench Part 9: Unit 171",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 9: Unit 171'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 9: Unit 171\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 9: Unit 171\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 9: Unit 171\necho \"Running LINUX Verification Testbench Part 9: Unit 171\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-172",
  "title": "LINUX Hardware Acceleration Part 9: Unit 172",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 9: Unit 172'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 9: Unit 172\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 9: Unit 172\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 9: Unit 172\necho \"Running LINUX Hardware Acceleration Part 9: Unit 172\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-173",
  "title": "LINUX Data Flow Control Part 9: Unit 173",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 9: Unit 173'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 9: Unit 173\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 9: Unit 173\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 9: Unit 173\necho \"Running LINUX Data Flow Control Part 9: Unit 173\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-174",
  "title": "LINUX Corner Case Analysis Part 9: Unit 174",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 9: Unit 174'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 9: Unit 174\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 9: Unit 174\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 9: Unit 174\necho \"Running LINUX Corner Case Analysis Part 9: Unit 174\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-175",
  "title": "LINUX Bandwidth Maximizer Part 9: Unit 175",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 9: Unit 175'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 9: Unit 175\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 9: Unit 175\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 9: Unit 175\necho \"Running LINUX Bandwidth Maximizer Part 9: Unit 175\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-176",
  "title": "LINUX Latency Reduction Part 9: Unit 176",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 9: Unit 176'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 9: Unit 176\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 9: Unit 176\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 9: Unit 176\necho \"Running LINUX Latency Reduction Part 9: Unit 176\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-177",
  "title": "LINUX CDC Isolation Part 9: Unit 177",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 9: Unit 177'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 9: Unit 177\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 9: Unit 177\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 9: Unit 177\necho \"Running LINUX CDC Isolation Part 9: Unit 177\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-178",
  "title": "LINUX Error Handling Part 9: Unit 178",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 9: Unit 178'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 9: Unit 178\n# TODO: Write shell commands / script for LINUX Error Handling Part 9: Unit 178\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 9: Unit 178\necho \"Running LINUX Error Handling Part 9: Unit 178\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-179",
  "title": "LINUX High-Speed Encoding Part 9: Unit 179",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 9: Unit 179'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 9: Unit 179\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 9: Unit 179\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 9: Unit 179\necho \"Running LINUX High-Speed Encoding Part 9: Unit 179\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-180",
  "title": "LINUX Synthesizable Model Part 9: Unit 180",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 9: Unit 180'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 9: Unit 180\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 9: Unit 180\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 9: Unit 180\necho \"Running LINUX Synthesizable Model Part 9: Unit 180\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-181",
  "title": "LINUX Optimization Part 10: Unit 181",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 10: Unit 181'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 10: Unit 181\n# TODO: Write shell commands / script for LINUX Optimization Part 10: Unit 181\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 10: Unit 181\necho \"Running LINUX Optimization Part 10: Unit 181\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-182",
  "title": "LINUX Architecture Part 10: Unit 182",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 10: Unit 182'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 10: Unit 182\n# TODO: Write shell commands / script for LINUX Architecture Part 10: Unit 182\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 10: Unit 182\necho \"Running LINUX Architecture Part 10: Unit 182\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-183",
  "title": "LINUX Pipeline Stage Part 10: Unit 183",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Pipeline Stage Part 10: Unit 183'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 10: Unit 183\n# TODO: Write shell commands / script for LINUX Pipeline Stage Part 10: Unit 183\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Pipeline Stage Part 10: Unit 183\necho \"Running LINUX Pipeline Stage Part 10: Unit 183\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-184",
  "title": "LINUX Interface Protocol Part 10: Unit 184",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Interface Protocol Part 10: Unit 184'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 10: Unit 184\n# TODO: Write shell commands / script for LINUX Interface Protocol Part 10: Unit 184\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Interface Protocol Part 10: Unit 184\necho \"Running LINUX Interface Protocol Part 10: Unit 184\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-185",
  "title": "LINUX Low-Power Design Part 10: Unit 185",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Low-Power Design Part 10: Unit 185'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 10: Unit 185\n# TODO: Write shell commands / script for LINUX Low-Power Design Part 10: Unit 185\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Low-Power Design Part 10: Unit 185\necho \"Running LINUX Low-Power Design Part 10: Unit 185\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-186",
  "title": "LINUX Timing Closure Part 10: Unit 186",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Timing Closure Part 10: Unit 186'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 10: Unit 186\n# TODO: Write shell commands / script for LINUX Timing Closure Part 10: Unit 186\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Timing Closure Part 10: Unit 186\necho \"Running LINUX Timing Closure Part 10: Unit 186\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-187",
  "title": "LINUX Resource Sharing Part 10: Unit 187",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Resource Sharing Part 10: Unit 187'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 10: Unit 187\n# TODO: Write shell commands / script for LINUX Resource Sharing Part 10: Unit 187\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Resource Sharing Part 10: Unit 187\necho \"Running LINUX Resource Sharing Part 10: Unit 187\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-188",
  "title": "LINUX Fault Tolerance Part 10: Unit 188",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Fault Tolerance Part 10: Unit 188'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 10: Unit 188\n# TODO: Write shell commands / script for LINUX Fault Tolerance Part 10: Unit 188\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Fault Tolerance Part 10: Unit 188\necho \"Running LINUX Fault Tolerance Part 10: Unit 188\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-189",
  "title": "LINUX Verification Testbench Part 10: Unit 189",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Verification Testbench Part 10: Unit 189'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 10: Unit 189\n# TODO: Write shell commands / script for LINUX Verification Testbench Part 10: Unit 189\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Verification Testbench Part 10: Unit 189\necho \"Running LINUX Verification Testbench Part 10: Unit 189\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-190",
  "title": "LINUX Hardware Acceleration Part 10: Unit 190",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Hardware Acceleration Part 10: Unit 190'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 10: Unit 190\n# TODO: Write shell commands / script for LINUX Hardware Acceleration Part 10: Unit 190\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Hardware Acceleration Part 10: Unit 190\necho \"Running LINUX Hardware Acceleration Part 10: Unit 190\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-191",
  "title": "LINUX Data Flow Control Part 10: Unit 191",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Data Flow Control Part 10: Unit 191'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 10: Unit 191\n# TODO: Write shell commands / script for LINUX Data Flow Control Part 10: Unit 191\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Data Flow Control Part 10: Unit 191\necho \"Running LINUX Data Flow Control Part 10: Unit 191\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-192",
  "title": "LINUX Corner Case Analysis Part 10: Unit 192",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Corner Case Analysis Part 10: Unit 192'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 10: Unit 192\n# TODO: Write shell commands / script for LINUX Corner Case Analysis Part 10: Unit 192\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Corner Case Analysis Part 10: Unit 192\necho \"Running LINUX Corner Case Analysis Part 10: Unit 192\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-193",
  "title": "LINUX Bandwidth Maximizer Part 10: Unit 193",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Bandwidth Maximizer Part 10: Unit 193'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 10: Unit 193\n# TODO: Write shell commands / script for LINUX Bandwidth Maximizer Part 10: Unit 193\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Bandwidth Maximizer Part 10: Unit 193\necho \"Running LINUX Bandwidth Maximizer Part 10: Unit 193\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-194",
  "title": "LINUX Latency Reduction Part 10: Unit 194",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Latency Reduction Part 10: Unit 194'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 10: Unit 194\n# TODO: Write shell commands / script for LINUX Latency Reduction Part 10: Unit 194\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Latency Reduction Part 10: Unit 194\necho \"Running LINUX Latency Reduction Part 10: Unit 194\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-195",
  "title": "LINUX CDC Isolation Part 10: Unit 195",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX CDC Isolation Part 10: Unit 195'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 10: Unit 195\n# TODO: Write shell commands / script for LINUX CDC Isolation Part 10: Unit 195\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX CDC Isolation Part 10: Unit 195\necho \"Running LINUX CDC Isolation Part 10: Unit 195\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-196",
  "title": "LINUX Error Handling Part 10: Unit 196",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Error Handling Part 10: Unit 196'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 10: Unit 196\n# TODO: Write shell commands / script for LINUX Error Handling Part 10: Unit 196\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Error Handling Part 10: Unit 196\necho \"Running LINUX Error Handling Part 10: Unit 196\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-197",
  "title": "LINUX High-Speed Encoding Part 10: Unit 197",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX High-Speed Encoding Part 10: Unit 197'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 10: Unit 197\n# TODO: Write shell commands / script for LINUX High-Speed Encoding Part 10: Unit 197\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX High-Speed Encoding Part 10: Unit 197\necho \"Running LINUX High-Speed Encoding Part 10: Unit 197\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-198",
  "title": "LINUX Synthesizable Model Part 10: Unit 198",
  "topic": "linux",
  "track": "both",
  "difficulty": "hard",
  "description": "Implement the engineering task for 'LINUX Synthesizable Model Part 10: Unit 198'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 10: Unit 198\n# TODO: Write shell commands / script for LINUX Synthesizable Model Part 10: Unit 198\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Synthesizable Model Part 10: Unit 198\necho \"Running LINUX Synthesizable Model Part 10: Unit 198\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-199",
  "title": "LINUX Optimization Part 11: Unit 199",
  "topic": "linux",
  "track": "both",
  "difficulty": "easy",
  "description": "Implement the engineering task for 'LINUX Optimization Part 11: Unit 199'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 11: Unit 199\n# TODO: Write shell commands / script for LINUX Optimization Part 11: Unit 199\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Optimization Part 11: Unit 199\necho \"Running LINUX Optimization Part 11: Unit 199\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
    "cycles": 4,
    "expectedOutputs": [
      {
        "cycle": 0,
        "signalName": "dout",
        "value": "1010"
      }
    ]
  }
},
{
  "id": "lnx-200",
  "title": "LINUX Architecture Part 11: Unit 200",
  "topic": "linux",
  "track": "both",
  "difficulty": "medium",
  "description": "Implement the engineering task for 'LINUX Architecture Part 11: Unit 200'. Follow best practices for production-grade digital design, firmware, verification, and hardware development.",
  "workedExample": "Step 1: Write Linux shell command or script pipeline.\nStep 2: Use pipes, grep, awk, sed, or make rules.\nStep 3: Check exit status variable ($?).",
  "starterCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 11: Unit 200\n# TODO: Write shell commands / script for LINUX Architecture Part 11: Unit 200\n",
  "solutionCode": "#!/bin/bash\n# Linux EDA & Scripting: LINUX Architecture Part 11: Unit 200\necho \"Running LINUX Architecture Part 11: Unit 200\"\n",
  "hints": [
    "Use pipes (|) to chain text stream processors.",
    "Check exit code ($?) for error handling."
  ],
  "tags": [
    "LINUX",
    "LINUX",
    "Practical"
  ],
  "testbenchConfig": {
    "signals": [
      {
        "name": "clk",
        "type": "clock",
        "initialValue": "0"
      },
      {
        "name": "rst_n",
        "type": "input",
        "initialValue": "1"
      },
      {
        "name": "din",
        "type": "input",
        "initialValue": "1010"
      },
      {
        "name": "dout",
        "type": "output",
        "initialValue": "1010"
      }
    ],
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
