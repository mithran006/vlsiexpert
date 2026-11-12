import { Problem, SimulationResult, WaveformSample, SignalConfig, TestVectorAssertion } from '../types';
import { isCombinationalCircuit, getStandardCircuitDefinition } from '../utils/circuitClassification';
import { detectSourceError } from '../utils/errorLineDetector';
import { getCleanStarterCode } from '../utils/codeTemplateService';
import {
  evaluateCvRobotics,
  evaluateEmbeddedC,
  evaluateArduino,
  evaluateMnemonics,
  evaluatePythonHw,
  evaluateRtos,
  evaluateLinux
} from './nonHdlEvaluationService';

export const simulatorEngine = {
  simulate(problem: Problem, userCode: string, forcedValues: Record<string, string> = {}): SimulationResult {
    const config = problem.testbenchConfig || { signals: [], expectedOutputs: [] };
    const samples: WaveformSample[] = [];
    const logs: string[] = [];

    logs.push(`[SIMULATOR] Initializing hardware simulation for '${problem.title}' (${problem.topic.toUpperCase()})...`);

    // Check for empty code
    if (!userCode || userCode.trim().length === 0) {
      return {
        passed: false,
        message: 'Compilation Failed: Code editor is empty.',
        samples: [],
        logs: ['[ERROR] No HDL/code provided in editor.'],
        errorLine: 1,
        errorSnippet: '// Empty editor',
        errorType: 'syntax',
        errorHint: 'Enter your code implementation or start from the clean template.'
      };
    }

    const lines = userCode.split('\n');

    // 0. Check if code is unedited starter template
    const cleanUserTrimmed = userCode.trim();
    const cleanStarter = getCleanStarterCode(problem);
    const isStarterMatch = (problem.starterCode && cleanUserTrimmed === problem.starterCode.trim()) ||
      (cleanStarter && cleanUserTrimmed === cleanStarter.trim());

    if (isStarterMatch) {
      if (problem.solutionCode && problem.solutionCode.trim() !== cleanUserTrimmed) {
        const todoIdx = lines.findIndex(l => /TODO|pass|Write your/i.test(l));
        const errLine = todoIdx !== -1 ? todoIdx + 1 : Math.min(lines.length, 3);
        logs.push(`[SIMULATION NOTE] Starter template code detected on Line ${errLine}.`);
        logs.push(`> ${errLine} | ${lines[errLine - 1]?.trim() || '// Starter placeholder'}`);
        logs.push(`[HINT] Review the problem description and implement your logic before running verification.`);
        return {
          passed: false,
          message: 'Execution Incomplete: Starter template detected. Please implement your solution.',
          samples: [],
          logs,
          errorLine: errLine,
          errorColumn: 1,
          errorSnippet: lines[errLine - 1]?.trim() || '// Starter template',
          errorType: 'logic',
          errorHint: 'Read the problem statement and replace the starter placeholder with your implementation.'
        };
      }
    }

    // 0.1. Pre-compilation static syntax & structural validation with exact line detection
    const syntaxErr = detectSourceError(userCode, problem, null);
    if (syntaxErr && syntaxErr.errorType === 'syntax') {
      logs.push(`[COMPILATION ERROR] Line ${syntaxErr.errorLine}: ${syntaxErr.errorMessage}`);
      logs.push(`> ${syntaxErr.errorLine} | ${syntaxErr.errorSnippet}`);
      logs.push(`[HINT] ${syntaxErr.errorHint}`);
      const defCycles = this.determineCircuitCycles(problem, config);
      const baselineSamples = this.generateTestbenchStimulusSamples(problem, defCycles);
      return {
        passed: false,
        message: syntaxErr.errorMessage,
        samples: baselineSamples,
        logs,
        errorLine: syntaxErr.errorLine,
        errorColumn: syntaxErr.errorColumn || 1,
        errorSnippet: syntaxErr.errorSnippet,
        errorType: 'syntax',
        errorHint: syntaxErr.errorHint
      };
    }

    const lowerCode = userCode.toLowerCase();

    // 1. Embedded C
    if (problem.topic === 'embedded_c') {
      const hasCSyntax = userCode.includes(';') && (
        userCode.includes('void') || userCode.includes('int') || userCode.includes('#include') ||
        userCode.includes('DDR') || userCode.includes('PORT') || userCode.includes('return') ||
        userCode.includes('struct') || userCode.includes('uint') || userCode.includes('volatile')
      );
      if (!hasCSyntax) {
        logs.push('[GCC COMPILER ERROR] Invalid Embedded C code or missing statement terminators (;).');
        return {
          passed: false,
          message: 'Compilation Failed: Syntax error in Embedded C code.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '// Invalid C code',
          errorType: 'syntax',
          errorHint: 'Ensure your code includes required headers and valid C syntax with semicolons.'
        };
      }

      // Check if function body is empty (e.g. only comments/whitespace inside braces)
      const cleanC = userCode.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
      const funcBodies = cleanC.match(/\{([\s\S]*?)\}/g);
      const hasStatements = funcBodies && funcBodies.some(b => b.replace(/[{}]/g, '').trim().length > 0);
      const hasGlobalDecl = /(?:volatile|static|uint\w*|int|bool)\s+[a-zA-Z0-9_$]+\s*=[^;]+;/.test(cleanC);

      if (!hasStatements && !hasGlobalDecl) {
        const errLine = Math.max(1, lines.findIndex(l => l.includes('{')) + 2);
        logs.push(`[COMPILATION ERROR] Line ${errLine}: Function body has no statements. Implementation is incomplete.`);
        return {
          passed: false,
          message: 'Compilation Failed: Function body is empty. Please implement firmware logic.',
          samples: [],
          logs,
          errorLine: errLine,
          errorColumn: 1,
          errorSnippet: lines[errLine - 1]?.trim() || '// Empty function body',
          errorType: 'logic',
          errorHint: 'Write your C peripheral register configuration or algorithm inside the function.'
        };
      }

      return evaluateEmbeddedC(
        problem,
        userCode,
        lines,
        (prob, pass, cycles) => this.generateMcuWaveformSamples(prob, pass, cycles)
      );
    }

    // 2. Mnemonics / Assembly
    if (problem.topic === 'mnemonics') {
      const hasAsmMnemonics = userCode.includes('MOV') || userCode.includes('ADD') || userCode.includes('SUB') ||
        userCode.includes('DJNZ') || userCode.includes('SETB') || userCode.includes('CLR') ||
        userCode.includes('PUSH') || userCode.includes('POP') || userCode.includes('INC') ||
        userCode.includes('ACALL') || userCode.includes('CPL') || userCode.includes('CJNE') || userCode.includes('SWAP');
      if (!hasAsmMnemonics) {
        logs.push('[ASSEMBLER ERROR] Source contains no recognized 8051 / ARM assembly mnemonics.');
        return {
          passed: false,
          message: 'Assembly Failed: No valid mnemonics found.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '; Missing mnemonics',
          errorType: 'syntax',
          errorHint: 'Write valid 8051 instructions (e.g. MOV, ADD, DJNZ, ORG).'
        };
      }

      // Check if instructions exist between ORG and END
      const recognizedAsm = /\b(MOV|ADD|SUBB|ANL|ORL|XRL|CPL|CLR|SETB|SJMP|LJMP|DJNZ|JZ|JNZ|JC|JNC|NOP|RET|CALL|ACALL|LCALL|PUSH|POP|INC|DEC|SWAP)\b/i;
      const cleanAsm = lines.filter(l => {
        const t = l.trim();
        return t && !t.startsWith(';') && !t.startsWith('//') && !t.toUpperCase().startsWith('ORG') && !t.toUpperCase().startsWith('END');
      });

      if (cleanAsm.length === 0 || !cleanAsm.some(l => recognizedAsm.test(l))) {
        const errLine = Math.max(1, lines.findIndex(l => /ORG\s+/i.test(l)) + 2);
        logs.push(`[ASSEMBLER ERROR] Line ${errLine}: No 8051 instructions found between ORG and END.`);
        return {
          passed: false,
          message: 'Assembly Failed: No 8051 instructions found between ORG and END.',
          samples: [],
          logs,
          errorLine: errLine,
          errorColumn: 1,
          errorSnippet: lines[errLine - 1]?.trim() || '; TODO: Instructions',
          errorType: 'logic',
          errorHint: 'Write valid 8051 instructions (e.g. MOV, ADD, DJNZ) between ORG and END.'
        };
      }

      return evaluateMnemonics(
        problem,
        userCode,
        lines,
        (prob, pass, cycles) => this.generateMcuWaveformSamples(prob, pass, cycles)
      );
    }

    // 3. Arduino
    if (problem.topic === 'arduino') {
      const hasArduinoSyntax = userCode.includes('setup') || userCode.includes('loop') ||
        userCode.includes('pinMode') || userCode.includes('digitalWrite') ||
        userCode.includes('analogRead') || userCode.includes('Serial') || userCode.includes('#include');
      if (!hasArduinoSyntax) {
        logs.push('[ARDUINO COMPILER ERROR] Source missing standard setup() or loop() Arduino functions.');
        return {
          passed: false,
          message: 'Compilation Failed: Missing setup() or loop() structure in Arduino source.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '// Missing setup/loop',
          errorType: 'syntax',
          errorHint: 'Arduino sketches require "void setup() { ... }" and "void loop() { ... }".'
        };
      }

      const cleanArd = userCode.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
      const setupBody = cleanArd.match(/setup\s*\([^)]*\)\s*\{([\s\S]*?)\}/)?.[1]?.trim() || '';
      const loopBody = cleanArd.match(/loop\s*\([^)]*\)\s*\{([\s\S]*?)\}/)?.[1]?.trim() || '';

      if (!setupBody && !loopBody) {
        const errLine = Math.max(1, lines.findIndex(l => l.includes('setup')) + 2);
        logs.push(`[ARDUINO ERROR] Line ${errLine}: setup() and loop() are empty.`);
        return {
          passed: false,
          message: 'Compilation Failed: setup() and loop() are empty. Implement pin configuration and operations.',
          samples: [],
          logs,
          errorLine: errLine,
          errorColumn: 1,
          errorSnippet: lines[errLine - 1]?.trim() || 'void setup() { }',
          errorType: 'logic',
          errorHint: 'Configure hardware pins with pinMode() in setup() and write control loops in loop().'
        };
      }

      return evaluateArduino(
        problem,
        userCode,
        lines,
        (prob, pass, cycles) => this.generateMcuWaveformSamples(prob, pass, cycles)
      );
    }

    // 4. MicroPython / Python Hardware
    if (problem.topic === 'python_hw') {
      const hasPySyntax = userCode.includes('import') || userCode.includes('Pin') ||
        userCode.includes('def') || userCode.includes('while') || userCode.includes('time') ||
        userCode.includes('GPIO') || userCode.includes('print');
      if (!hasPySyntax) {
        logs.push('[PYTHON INTERPRETER ERROR] Invalid Python syntax or missing hardware module imports.');
        return {
          passed: false,
          message: 'Execution Failed: Syntax error in Python hardware code.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '# Missing imports/functions',
          errorType: 'syntax',
          errorHint: 'Import required modules like machine, time, or Pin and define functions.'
        };
      }

      // Check if function body contains only pass
      const cleanPy = userCode.replace(/#.*/g, '').trim();
      const isOnlyPass = /def\s+\w+\s*\(.*?\)\s*:\s*(?:#.*?\n\s*)*pass\s*$/.test(userCode.trim()) ||
        cleanPy.replace(/def\s+\w+\s*\(.*?\)\s*:/g, '').replace(/import\s+[a-zA-Z0-9_,\s]+/g, '').replace(/from\s+[a-zA-Z0-9_.]+\s+import\s+[a-zA-Z0-9_,\s*]+/g, '').trim() === 'pass';

      if (isOnlyPass || !cleanPy) {
        const passLine = lines.findIndex(l => l.trim() === 'pass' || l.trim().startsWith('pass')) + 1;
        const errLine = passLine > 0 ? passLine : 4;
        logs.push(`[MICROPYTHON ERROR] Line ${errLine}: Function body contains only placeholder 'pass'.`);
        return {
          passed: false,
          message: 'Execution Failed: Function body contains only placeholder "pass". Please implement hardware logic.',
          samples: [],
          logs,
          errorLine: errLine,
          errorColumn: 1,
          errorSnippet: lines[errLine - 1]?.trim() || 'pass',
          errorType: 'logic',
          errorHint: 'Replace "pass" with your MicroPython hardware control code (e.g. Pin, toggle, read).'
        };
      }

      return evaluatePythonHw(
        problem,
        userCode,
        lines,
        (prob, pass, cycles) => this.generateMcuWaveformSamples(prob, pass, cycles)
      );
    }

    // 5. Computer Vision & Robotics
    if (problem.topic === 'cv_robotics') {
      const hasCvSyntax = userCode.includes('cv2') || userCode.includes('import') ||
        userCode.includes('def') || userCode.includes('VideoCapture') || userCode.includes('np.') ||
        userCode.includes('#include') || userCode.includes('cv::') || userCode.includes('ros') || userCode.includes('return');
      if (!hasCvSyntax) {
        logs.push('[VISION ENGINE ERROR] Source contains no recognized OpenCV, NumPy, or ROS2 vision constructs.');
        return {
          passed: false,
          message: 'Execution Failed: Missing OpenCV / Vision constructs.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '# Missing OpenCV constructs',
          errorType: 'syntax',
          errorHint: 'Import cv2 or numpy and use OpenCV functions (e.g. cv2.cvtColor, cv2.findContours).'
        };
      }

      const cleanCv = userCode.replace(/#.*/g, '').trim();
      const isOnlyPass = /def\s+\w+\s*\(.*?\)\s*:\s*(?:#.*?\n\s*)*pass\s*$/.test(userCode.trim()) ||
        cleanCv.replace(/def\s+\w+\s*\(.*?\)\s*:/g, '').replace(/import\s+[a-zA-Z0-9_,\s]+/g, '').replace(/from\s+[a-zA-Z0-9_.]+\s+import\s+[a-zA-Z0-9_,\s*]+/g, '').trim() === 'pass';

      if (isOnlyPass || !cleanCv) {
        const passLine = lines.findIndex(l => l.trim() === 'pass' || l.trim().startsWith('pass')) + 1;
        const errLine = passLine > 0 ? passLine : 4;
        logs.push(`[VISION ERROR] Line ${errLine}: Vision pipeline contains only placeholder 'pass'.`);
        return {
          passed: false,
          message: 'Execution Failed: Function contains placeholder "pass". Implement OpenCV vision pipeline.',
          samples: [],
          logs,
          errorLine: errLine,
          errorColumn: 1,
          errorSnippet: lines[errLine - 1]?.trim() || 'pass',
          errorType: 'logic',
          errorHint: 'Implement your computer vision image processing pipeline using OpenCV functions.'
        };
      }

      return evaluateCvRobotics(
        problem,
        userCode,
        lines,
        (prob, pass, cycles) => this.generateMcuWaveformSamples(prob, pass, cycles)
      );
    }

    // 6. RTOS
    if (problem.topic === 'rtos_problems') {
      const hasRtosSyntax = userCode.includes('FreeRTOS') || userCode.includes('Task') ||
        userCode.includes('Semaphore') || userCode.includes('Queue') || userCode.includes('vTask') ||
        userCode.includes('xTask') || userCode.includes('Zephyr') || userCode.includes('k_') ||
        userCode.includes('#include') || userCode.includes('void');
      if (!hasRtosSyntax) {
        logs.push('[RTOS KERNEL ERROR] Source contains no recognized FreeRTOS or Zephyr RTOS primitives.');
        return {
          passed: false,
          message: 'Execution Failed: Missing RTOS API primitives.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '// Missing RTOS primitives',
          errorType: 'syntax',
          errorHint: 'Include FreeRTOS headers and task definitions (xTaskCreate, vTaskDelay).'
        };
      }

      const cleanRtos = userCode.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
      const funcBodies = cleanRtos.match(/\{([\s\S]*?)\}/g);
      const hasStatements = funcBodies && funcBodies.some(b => b.replace(/[{}]/g, '').trim().length > 0);
      const hasGlobalDecl = /(?:volatile|static|uint\w*|int|bool|TaskHandle_t)\s+[a-zA-Z0-9_$]+\s*=[^;]+;/.test(cleanRtos);

      if (!hasStatements && !hasGlobalDecl) {
        const errLine = Math.max(1, lines.findIndex(l => l.includes('{')) + 2);
        logs.push(`[RTOS ERROR] Line ${errLine}: RTOS function body is empty.`);
        return {
          passed: false,
          message: 'Execution Failed: RTOS function body is empty. Please implement task logic.',
          samples: [],
          logs,
          errorLine: errLine,
          errorColumn: 1,
          errorSnippet: lines[errLine - 1]?.trim() || '// Empty function',
          errorType: 'logic',
          errorHint: 'Write your RTOS task logic or synchronization calls.'
        };
      }

      return evaluateRtos(
        problem,
        userCode,
        lines,
        (prob, pass, cycles) => this.generateMcuWaveformSamples(prob, pass, cycles)
      );
    }

    // 6.5. Linux EDA & Shell Scripting
    if (problem.topic === 'linux') {
      const hasBashSyntax = userCode.includes('#!/bin') || userCode.includes('grep') ||
        userCode.includes('sed') || userCode.includes('awk') || userCode.includes('find') ||
        userCode.includes('cat') || userCode.includes('echo') || userCode.includes('chmod') ||
        userCode.includes('make') || userCode.includes('export') || userCode.includes('for') ||
        userCode.includes('while') || userCode.includes('|') || userCode.includes('>') ||
        userCode.includes('cut') || userCode.includes('sort') || userCode.includes('uniq');
      
      if (!hasBashSyntax) {
        logs.push('[BASH PARSER ERROR] Source contains no recognized Linux shell utilities, commands, or pipeline syntax.');
        return {
          passed: false,
          message: 'Execution Failed: Missing Linux shell commands.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '# Missing shell commands',
          errorType: 'syntax',
          errorHint: 'Use bash commands like grep, sed, awk, or shell pipelines (|).'
        };
      }

      const cleanBash = userCode
        .replace(/^#!.*/mg, '')
        .replace(/#.*/g, '')
        .trim();

      if (!cleanBash) {
        const errLine = 2;
        logs.push(`[BASH ERROR] Line ${errLine}: No executable commands found in script.`);
        return {
          passed: false,
          message: 'Execution Failed: Script contains no executable commands. Enter shell commands.',
          samples: [],
          logs,
          errorLine: errLine,
          errorColumn: 1,
          errorSnippet: lines[errLine - 1]?.trim() || '# TODO',
          errorType: 'logic',
          errorHint: 'Write your Linux shell command pipeline (e.g. grep, sed, awk, find).'
        };
      }

      return evaluateLinux(problem, userCode, lines);
    }

    // 7. General HDL Syntax Validation (Verilog, SystemVerilog, VHDL, UVM, DFT, FPGA, SoC)
    if (problem.topic === 'verilog' || problem.topic === 'systemverilog' || problem.topic === 'fpga' || problem.topic === 'dft' || problem.topic === 'soc_design') {
      const hasVerilogModule = lowerCode.includes('endmodule') || lowerCode.includes('module') ||
        lowerCode.includes('assign') || lowerCode.includes('always') || lowerCode.includes('interface');
      if (!hasVerilogModule) {
        logs.push('[SYNTAX ERROR] Missing module or endmodule declaration in Verilog/SystemVerilog source.');
        return {
          passed: false,
          message: 'Syntax Error: Missing module declaration.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '// Source code',
          errorType: 'syntax',
          errorHint: 'Declare your circuit interface using "module <module_name> (...); ... endmodule".'
        };
      }
    } else if (problem.topic === 'vhdl') {
      const hasVhdlBlock = lowerCode.includes('architecture') || lowerCode.includes('entity') ||
        lowerCode.includes('component') || lowerCode.includes('package') || lowerCode.includes('process');
      if (!hasVhdlBlock) {
        logs.push('[SYNTAX ERROR] VHDL source requires entity or architecture blocks.');
        return {
          passed: false,
          message: 'Syntax Error: Missing VHDL entity/architecture.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '-- Source code',
          errorType: 'syntax',
          errorHint: 'Declare your VHDL entity and architecture blocks before simulation.'
        };
      }
    } else if (problem.topic === 'uvm') {
      const hasUvmBlock = lowerCode.includes('class') || lowerCode.includes('uvm_') ||
        lowerCode.includes('module') || lowerCode.includes('endclass');
      if (!hasUvmBlock) {
        logs.push('[SYNTAX ERROR] UVM component requires class or module definition.');
        return {
          passed: false,
          message: 'Syntax Error: Invalid UVM code.',
          samples: [],
          logs,
          errorLine: 1,
          errorSnippet: lines[0]?.trim() || '// UVM class',
          errorType: 'syntax',
          errorHint: 'Define a UVM verification component or testbench module.'
        };
      }
    }

    // Check if user code actually contains HDL implementation logic
    const cleanHDL = userCode.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/--.*/g, '');
    const hasHdlLogic =
      /\b(assign|always|always_comb|always_ff|always_latch|initial|generate|component|process)\b/i.test(cleanHDL) ||
      /\b(and|nand|or|nor|xor|xnor|not|buf)\b\s*(?:[a-zA-Z_]\w*\s*)?\(/.test(cleanHDL) ||
      /<=[^=]/.test(cleanHDL) ||
      /\b(dout|out|y|q|sum|cout|data_out|result|led|count)\b\s*<?[=]/i.test(cleanHDL);

    if (!hasHdlLogic) {
      logs.push('[SIMULATOR] Testbench stimulus active. Design contains no active logic or signal assignments driving outputs; outputs default to unasserted (0).');
    }

    // Determine simulation cycle count exactly based on the digital circuit problem
    const numCycles = this.determineCircuitCycles(problem, config);
    
    // Check if circuit is combinational
    const isComb = isCombinationalCircuit(problem);

    // Extract actual declared signals from user's HDL code if available, otherwise infer from problem
    let signalList = this.extractSignalsFromUserCode(userCode, problem);

    // Combinational circuits do NOT require clock or reset signals
    if (isComb) {
      signalList = signalList.filter(
        s => !s.name.toLowerCase().includes('clk') &&
             !s.name.toLowerCase().includes('clock') &&
             !s.name.toLowerCase().includes('rst')
      );
    }

    if (isComb) {
      logs.push(`[SIMULATOR] Combinational logic testbench initialized with ${signalList.length} ports across ${numCycles} stimulus vectors (No clock required).`);
    } else {
      logs.push(`[SIMULATOR] Testbench initialized with ${signalList.length} ports across ${numCycles} clock cycles.`);
    }

    // Classify signals
    const clockSigs = isComb ? [] : signalList.filter(s => s.type === 'clock' || s.name.toLowerCase().includes('clk'));
    const inputSigs = signalList.filter(s => s.type === 'input' && !s.name.toLowerCase().includes('clk'));
    const outputSigs = signalList.filter(s => s.type === 'output' || s.type === 'internal');

    // Separate 1-bit vs multi-bit inputs for dynamic truth-table stimulus generation
    const singleBitInputs = inputSigs.filter(s => {
      const len = s.initialValue ? s.initialValue.length : 1;
      return len <= 1 && !s.name.includes('[');
    });

    const multiBitInputs = inputSigs.filter(s => {
      const len = s.initialValue ? s.initialValue.length : 1;
      return len > 1 || s.name.includes('[');
    });

    let allExpectedMatch = true;
    let prevCycleSignals: Record<string, string> = {};
    outputSigs.forEach(sig => {
      const initVal = sig.initialValue || '0';
      prevCycleSignals[sig.name] = initVal;
      const stripped = sig.name.replace(/\[.*\]/, '');
      prevCycleSignals[stripped] = initVal;
      prevCycleSignals[sig.name.toLowerCase()] = initVal;
      prevCycleSignals[stripped.toLowerCase()] = initVal;
    });
    const vectorAssertions: TestVectorAssertion[] = [];

    // Dynamic test vectors pool
    const testVectorsPool = [
      [0, 5, 12, 15, 6, 10, 3, 9, 7, 2, 14, 1, 8, 11, 13, 4],
      [0, 3, 5, 15, 2, 6, 7, 1, 4, 8, 11, 13, 10, 14, 9, 12],
      [1, 2, 4, 8, 3, 6, 12, 9, 5, 10, 15, 0, 7, 11, 13, 14]
    ];

    // FSM Internal State tracker
    let fsmShiftRegister = '';
    let internalCounter = 0;
    let internalShiftReg = '0000';

    // Check if this problem is a 4-to-1 MUX with individual data and select lines
    const isMux4Individual = signalList.some(s => s.name === 'd0' || s.name === 'D0') &&
                             signalList.some(s => s.name === 's0' || s.name === 'S0');

    for (let c = 0; c < numCycles; c++) {
      const cycleSignals: Record<string, string> = {};

      // 1. Clock signals (only for sequential designs)
      if (!isComb) {
        clockSigs.forEach(sig => {
          cycleSignals[sig.name] = c % 2 === 0 ? '0' : '1';
        });
      }

      // 2. Drive Input Signals with Dynamic Stimuli across cycles
      // Handle Resets (only sequential designs need reset)
      if (!isComb) {
        inputSigs.forEach(sig => {
          const lowerName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) {
            cycleSignals[sig.name] = forcedValues[sig.name];
          } else if (lowerName === 'rst' || lowerName === 'reset' || lowerName === 'srst' || lowerName === 'clr') {
            cycleSignals[sig.name] = c === 0 ? '1' : '0';
          } else if (lowerName === 'rst_n' || lowerName === 'reset_n' || lowerName === 'clrn') {
            cycleSignals[sig.name] = c === 0 ? '0' : '1';
          }
        });
      }

      // Special handling for 4-to-1 MUX with individual ports (matching standard textbook & user diagram)
      const lowerTitle = (problem.title || '').toLowerCase();
      const isMux2 = (lowerTitle.includes('2-to-1') || lowerTitle.includes('2:1') || lowerTitle === '2-to-1 multiplexer') &&
                     inputSigs.some(s => s.name.toLowerCase() === 'sel' || s.name.toLowerCase() === 's');
      const isHalfAdder = lowerTitle.includes('half adder') &&
                          inputSigs.some(s => s.name.toLowerCase() === 'a') &&
                          inputSigs.some(s => s.name.toLowerCase() === 'b');
      const isFullAdder = lowerTitle.includes('full adder') &&
                          inputSigs.some(s => s.name.toLowerCase().includes('cin') || s.name.toLowerCase().includes('c_in'));
      const isHalfSubtractor = lowerTitle.includes('half subtractor') &&
                               inputSigs.some(s => s.name.toLowerCase() === 'a') &&
                               inputSigs.some(s => s.name.toLowerCase() === 'b');
      const isFullSubtractor = lowerTitle.includes('full subtractor') &&
                               inputSigs.some(s => s.name.toLowerCase().includes('bin') || s.name.toLowerCase().includes('b_in'));
      const isBasicGate2 = (lowerTitle.includes('gate') || lowerTitle.includes('xor') || lowerTitle.includes('xnor') ||
                            lowerTitle.includes('nand') || lowerTitle.includes('nor')) &&
                           inputSigs.some(s => s.name.toLowerCase() === 'a') &&
                           inputSigs.some(s => s.name.toLowerCase() === 'b');
      const isMux4Bus = (lowerTitle.includes('4-to-1') || lowerTitle.includes('4:1') || lowerTitle.includes('mux 4')) &&
                        !isMux4Individual;

      if (isMux4Individual) {
        // D0, D1, D2, D3 traces matching waveform diagram:
        const d0_trace = [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0];
        const d1_trace = [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0];
        const d2_trace = [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0];
        const d3_trace = [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1];

        const s0_val = c % 2;
        const s1_val = Math.floor(c / 2) % 2;

        singleBitInputs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) return;
          if (lName === 's0' || lName === 's_0' || lName === 'sel0') cycleSignals[sig.name] = String(s0_val);
          else if (lName === 's1' || lName === 's_1' || lName === 'sel1') cycleSignals[sig.name] = String(s1_val);
          else if (lName === 'd0' || lName === 'in0') cycleSignals[sig.name] = String(d0_trace[c % d0_trace.length]);
          else if (lName === 'd1' || lName === 'in1') cycleSignals[sig.name] = String(d1_trace[c % d1_trace.length]);
          else if (lName === 'd2' || lName === 'in2') cycleSignals[sig.name] = String(d2_trace[c % d2_trace.length]);
          else if (lName === 'd3' || lName === 'in3') cycleSignals[sig.name] = String(d3_trace[c % d3_trace.length]);
        });
      } else if (isMux4Bus) {
        // Bus-based 4-to-1 MUX: sel[1:0] sweeps 00, 01, 10, 11
        const selVal = c % 4;
        const dPatterns = ['1010', '0101', '1100', '0011', '1001', '0110', '1110', '0001'];
        const dVal = dPatterns[c % dPatterns.length];
        inputSigs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) return;
          if (lName.includes('sel') || lName === 's') {
            cycleSignals[sig.name] = selVal.toString(2).padStart(2, '0');
          } else if (lName === 'd' || lName.includes('in') || lName.includes('data')) {
            cycleSignals[sig.name] = dVal;
          }
        });
      } else if (isMux2) {
        // 2-to-1 Multiplexer truth table: sweeps all standard stimulus conditions (sel, a, b)
        const mux2_sel = [0, 0, 1, 1, 0, 0, 1, 1];
        const mux2_a   = [0, 1, 1, 0, 1, 0, 0, 1];
        const mux2_b   = [1, 0, 0, 1, 1, 0, 0, 1];
        const idx = c % mux2_sel.length;
        inputSigs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) return;
          if (lName === 'a' || lName === 'd0' || lName === 'in0') cycleSignals[sig.name] = String(mux2_a[idx]);
          else if (lName === 'b' || lName === 'd1' || lName === 'in1') cycleSignals[sig.name] = String(mux2_b[idx]);
          else if (lName === 'sel' || lName === 's') cycleSignals[sig.name] = String(mux2_sel[idx]);
        });
      } else if (isHalfAdder) {
        // Half Adder truth table: 00, 01, 10, 11
        const a_val = (c >> 1) & 1;
        const b_val = c & 1;
        inputSigs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) return;
          if (lName === 'a') cycleSignals[sig.name] = String(a_val);
          else if (lName === 'b') cycleSignals[sig.name] = String(b_val);
        });
      } else if (isHalfSubtractor) {
        // Half Subtractor truth table: 00, 01, 10, 11
        const a_val = (c >> 1) & 1;
        const b_val = c & 1;
        inputSigs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) return;
          if (lName === 'a') cycleSignals[sig.name] = String(a_val);
          else if (lName === 'b') cycleSignals[sig.name] = String(b_val);
        });
      } else if (isFullAdder) {
        // Full Adder truth table: sweep all 8 combinations (a, b, cin)
        const a_val = (c >> 2) & 1;
        const b_val = (c >> 1) & 1;
        const cin_val = c & 1;
        inputSigs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) return;
          if (lName === 'a') cycleSignals[sig.name] = String(a_val);
          else if (lName === 'b') cycleSignals[sig.name] = String(b_val);
          else if (lName === 'cin' || lName === 'c_in') cycleSignals[sig.name] = String(cin_val);
        });
      } else if (isFullSubtractor) {
        // Full Subtractor truth table: sweep all 8 combinations (a, b, bin)
        const a_val = (c >> 2) & 1;
        const b_val = (c >> 1) & 1;
        const bin_val = c & 1;
        inputSigs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) return;
          if (lName === 'a') cycleSignals[sig.name] = String(a_val);
          else if (lName === 'b') cycleSignals[sig.name] = String(b_val);
          else if (lName === 'bin' || lName === 'b_in') cycleSignals[sig.name] = String(bin_val);
        });
      } else if (isBasicGate2) {
        // Standard 2-input truth table sequence: 00, 01, 10, 11
        const a_val = (c >> 1) & 1;
        const b_val = c & 1;
        inputSigs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (forcedValues[sig.name] !== undefined) return;
          if (lName === 'a') cycleSignals[sig.name] = String(a_val);
          else if (lName === 'b') cycleSignals[sig.name] = String(b_val);
        });
      }

      // Handle 1-Bit Inputs (Truth-table pattern across cycles)
      singleBitInputs.forEach((sig, idx) => {
        if (cycleSignals[sig.name] !== undefined) return;

        const lowerName = sig.name.toLowerCase();
        if (lowerName === 'enable' || lowerName === 'en' || lowerName === 'ce') {
          cycleSignals[sig.name] = c === 0 ? '0' : (c === 14 ? '0' : '1');
        } else if (lowerName === 'load' || lowerName === 'ld') {
          cycleSignals[sig.name] = c === 1 ? '1' : '0';
        } else if (lowerName === 'up_down' || lowerName === 'dir') {
          cycleSignals[sig.name] = c < 8 ? '1' : '0';
        } else if (lowerName === 'scan_en' || lowerName === 'se') {
          cycleSignals[sig.name] = c >= 2 && c <= 9 ? '1' : '0';
        } else if (lowerName === 'cin' || lowerName === 'c_in') {
          cycleSignals[sig.name] = c % 2 === 0 ? '0' : '1';
        } else if (lowerName === 'sel' || lowerName === 's') {
          cycleSignals[sig.name] = Math.floor(c / 2) % 2 === 0 ? '0' : '1';
        } else if (lowerName === 'in' || lowerName === 'din' || lowerName === 'data_in' || lowerName === 'sin') {
          if (forcedValues[sig.name] !== undefined) {
            cycleSignals[sig.name] = forcedValues[sig.name];
          } else if (lowerTitle.includes('shift register') || lowerTitle.includes('siso') || lowerTitle.includes('sipo') || lowerTitle.includes('piso')) {
            // For 8-bit SISO: din=1 for the first 8 clock periods (cycles 1..16), then din=0 for subsequent cycles
            cycleSignals[sig.name] = (c >= 1 && c <= 16) ? '1' : '0';
          } else {
            const seq = [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1];
            cycleSignals[sig.name] = String(seq[c % seq.length]);
          }
        } else if (lowerName === 'd') {
          const dSeq = [0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0];
          cycleSignals[sig.name] = String(dSeq[c % dSeq.length]);
        } else {
          const bitVal = Math.floor(c / Math.pow(2, idx)) % 2;
          cycleSignals[sig.name] = String(bitVal);
        }
      });

      // Handle Multi-Bit Inputs
      multiBitInputs.forEach((sig, idx) => {
        if (cycleSignals[sig.name] !== undefined) return;

        const width = sig.initialValue && sig.initialValue.length > 1 ? sig.initialValue.length : 4;
        const lowerName = sig.name.toLowerCase();

        if (lowerName.includes('sel') || lowerName.includes('opcode') || lowerName.includes('alu_op')) {
          const selVal = c % Math.pow(2, width);
          cycleSignals[sig.name] = selVal.toString(2).padStart(width, '0');
        } else if (lowerName.includes('shift')) {
          const sVal = (c % 4) % Math.pow(2, width);
          cycleSignals[sig.name] = sVal.toString(2).padStart(width, '0');
        } else {
          const vecPool = testVectorsPool[idx % testVectorsPool.length];
          const valNum = vecPool[c % vecPool.length] % Math.pow(2, width);
          cycleSignals[sig.name] = valNum.toString(2).padStart(width, '0');
        }
      });

      // Update internal FSM tracker
      const currentSerialIn = cycleSignals['in'] || cycleSignals['din'] || cycleSignals['data_in'] || cycleSignals['sin'] || cycleSignals['d'] || '0';
      if (cycleSignals['rst'] === '1' || cycleSignals['rst_n'] === '0') {
        fsmShiftRegister = '';
        internalCounter = 0;
        internalShiftReg = '0000';
      } else {
        fsmShiftRegister = (fsmShiftRegister + currentSerialIn).slice(-6);
        const en = cycleSignals['enable'] === undefined || cycleSignals['enable'] === '1' || cycleSignals['en'] === '1';
        if (en) internalCounter++;
        internalShiftReg = (internalShiftReg.slice(1) + currentSerialIn).slice(-4);
      }

      // 3. Compute Output Signals via Design RTL Simulation with multi-level wire relaxation
      const simulatedState = this.simulateCircuitStep(
        userCode,
        cycleSignals,
        isComb ? {} : prevCycleSignals,
        isComb,
        !isComb ? (c % 2 !== 0) : true,
        c
      );

      outputSigs.forEach(outSig => {
        let val = simulatedState[outSig.name] ??
                  simulatedState[outSig.name.toLowerCase()] ??
                  simulatedState[outSig.name.replace(/\[.*\]/, '')];

        if (val === undefined) {
          // If the user's circuit code does not drive this output port, it remains unasserted ('0')
          val = '0';
        }

        const width = outSig.initialValue ? outSig.initialValue.length : (outSig.name.includes('[') ? this.getBusWidth(outSig.name) : 1);
        if (width > 1 && val !== undefined) {
          if (/^[01]+$/.test(val)) {
            if (val.length < width) {
              val = val.padStart(width, '0');
            } else if (val.length > width) {
              val = val.slice(-width);
            }
          } else if (/^\d+$/.test(val)) {
            const num = parseInt(val, 10);
            val = (num & ((1 << width) - 1)).toString(2).padStart(width, '0');
          }
        }

        const finalVal = val ?? '0';
        cycleSignals[outSig.name] = finalVal;
        const strippedName = outSig.name.replace(/\[.*\]/, '');
        cycleSignals[strippedName] = finalVal;
        cycleSignals[outSig.name.toLowerCase()] = finalVal;
        cycleSignals[strippedName.toLowerCase()] = finalVal;
      });

      // 4. Capture Test Vector Stimulus & Verify Assertions against expected reference logic
      const vectorInputs: Record<string, string> = {};
      inputSigs.forEach(s => {
        vectorInputs[s.name] = cycleSignals[s.name] ?? '0';
      });
      if (clockSigs.length > 0) {
        clockSigs.forEach(s => {
          vectorInputs[s.name] = cycleSignals[s.name] ?? '0';
        });
      }

      const actualOutputs: Record<string, string> = {};
      const expectedOutputs: Record<string, string> = {};
      const mismatches: string[] = [];
      let cyclePassed = true;

      // Check if standard reference solution is available
      const stdDef = getStandardCircuitDefinition(problem);
      let refState: Record<string, string> | null = null;
      const refCode = stdDef?.solutionCode || problem.solutionCode;
      if (refCode) {
        refState = this.simulateCircuitStep(
          refCode,
          vectorInputs,
          isComb ? {} : prevCycleSignals,
          isComb,
          !isComb ? (c % 2 !== 0) : true,
          c
        );
      }

      outputSigs.forEach(outSig => {
        const computedVal = cycleSignals[outSig.name] ?? '0';
        actualOutputs[outSig.name] = computedVal;

        const width = outSig.initialValue ? outSig.initialValue.length : (outSig.name.includes('[') ? this.getBusWidth(outSig.name) : 1);

        let refVal: string = (refState ? (refState[outSig.name] ?? refState[outSig.name.toLowerCase()] ?? refState[outSig.name.replace(/\[.*\]/, '')]) : undefined) ??
          this.computeRefOutputValue(
            outSig,
            c,
            problem,
            vectorInputs,
            prevCycleSignals,
            { fsmShiftRegister, internalCounter, internalShiftReg }
          );

        if (width > 1 && refVal) {
          if (/^[01]+$/.test(refVal)) {
            if (refVal.length < width) {
              refVal = refVal.padStart(width, '0');
            } else if (refVal.length > width) {
              refVal = refVal.slice(-width);
            }
          } else if (/^\d+$/.test(refVal)) {
            const num = parseInt(refVal, 10);
            refVal = (num & ((1 << width) - 1)).toString(2).padStart(width, '0');
          }
        }

        expectedOutputs[outSig.name] = refVal;

        const stepLabel = isComb ? `Vector ${c}` : `Cycle ${c}`;

        const isMatch = computedVal === refVal || (
          width > 1 &&
          !/[^01]/.test(computedVal) &&
          !/[^01]/.test(refVal) &&
          parseInt(computedVal, 2) === parseInt(refVal, 2)
        );

        if (!isMatch) {
          allExpectedMatch = false;
          cyclePassed = false;
          mismatches.push(outSig.name);
          const inputStateStr = Object.entries(vectorInputs)
            .filter(([k]) => !k.toLowerCase().includes('clk'))
            .map(([k, v]) => `${k}=${v}`).join(', ');
          logs.push(`[ASSERTION FAIL] ${stepLabel}: Inputs (${inputStateStr}) => '${outSig.name}' expected ${refVal}, got ${computedVal}.`);
        } else {
          logs.push(`[ASSERTION PASS] ${stepLabel}: Signal '${outSig.name}' = ${computedVal} (Matched expected: ${refVal}).`);
        }
      });

      vectorAssertions.push({
        cycle: c,
        timeNs: c * 10,
        inputs: vectorInputs,
        actualOutputs,
        expectedOutputs,
        passed: cyclePassed,
        mismatches: mismatches.length > 0 ? mismatches : undefined
      });

      // Prepare clean canonical signals for waveform sample export (avoid duplicate aliases like 'out' alongside 'out[1:0]')
      const sampleExportSignals: Record<string, string> = {};
      const allCanonicalSigs = [...clockSigs, ...inputSigs, ...multiBitInputs, ...outputSigs];
      if (allCanonicalSigs.length > 0) {
        allCanonicalSigs.forEach(s => {
          if (cycleSignals[s.name] !== undefined) {
            sampleExportSignals[s.name] = cycleSignals[s.name];
          } else if (cycleSignals[s.name.replace(/\[.*\]/, '')] !== undefined) {
            sampleExportSignals[s.name] = cycleSignals[s.name.replace(/\[.*\]/, '')];
          }
        });
      }
      const exportedSignals = Object.keys(sampleExportSignals).length > 0 ? sampleExportSignals : { ...cycleSignals };

      samples.push({ cycle: c, signals: exportedSignals });
      prevCycleSignals = { ...cycleSignals };
    }

    const passed = allExpectedMatch;
    const passedCount = vectorAssertions.filter(v => v.passed).length;
    const totalCount = vectorAssertions.length;

    let errorLine: number | undefined;
    let errorColumn: number | undefined;
    let errorSnippet: string | undefined;
    let errorType: 'syntax' | 'runtime' | 'logic' | undefined;
    let errorHint: string | undefined;

    if (passed) {
      logs.push(
        isComb
          ? `[SUCCESS] Combinational verification passed! 100% match (${passedCount}/${totalCount} vectors) against expected specification.`
          : `[SUCCESS] Dynamic simulation complete! 100% match (${passedCount}/${totalCount} cycles) satisfied all assertion checks.`
      );
    } else {
      logs.push(`[FAIL] Verification mismatch detected on ${totalCount - passedCount}/${totalCount} test vector(s). Review Output Match Table for failing stimuli.`);
      
      const logicErr = detectSourceError(userCode, problem, {
        passed: false,
        message: '',
        samples,
        logs,
        testVectors: vectorAssertions
      });
      if (logicErr) {
        errorLine = logicErr.errorLine;
        errorColumn = logicErr.errorColumn;
        errorSnippet = logicErr.errorSnippet;
        errorType = logicErr.errorType;
        errorHint = logicErr.errorHint;
        logs.push(`[LOGIC ERROR on Line ${logicErr.errorLine}] ${logicErr.errorMessage}`);
        logs.push(`> ${logicErr.errorLine} | ${logicErr.errorSnippet}`);
        logs.push(`[HINT] ${logicErr.errorHint}`);
      }
    }

    return {
      passed,
      message: passed
        ? (isComb ? `Combinational Verification Passed! All ${totalCount} stimulus vectors matched expected output.` : `Simulation Passed! All ${totalCount} dynamic test vectors verified successfully.`)
        : (isComb ? `Verification Failed: ${totalCount - passedCount} output mismatch(es) detected.` : `Simulation Failed: ${totalCount - passedCount} mismatch(es) across ${totalCount} cycles.`),
      samples,
      logs,
      testVectors: vectorAssertions,
      passedTestsCount: passedCount,
      totalTestsCount: totalCount,
      errorLine,
      errorColumn,
      errorSnippet,
      errorType,
      errorHint
    };
  },

  getBusWidth(sigName: string): number {
    const match = sigName.match(/\[(\d+):(\d+)\]/);
    if (match) {
      return Math.abs(parseInt(match[1], 10) - parseInt(match[2], 10)) + 1;
    }
    return 1;
  },

  extractSignalsFromUserCode(userCode: string, problem: Problem): SignalConfig[] {
    const clean = userCode.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/--.*/g, '');
    const standardDef = getStandardCircuitDefinition(problem);

    // 1. Verilog / SystemVerilog Module Port List
    const moduleMatch = clean.match(/module\s+\w+\s*(?:#\s*\([^)]*\)\s*)?\(([\s\S]*?)\);/i);

    if (moduleMatch && moduleMatch[1]) {
      const portDefs = moduleMatch[1].split(',').map(s => s.trim()).filter(Boolean);
      const parsedSignals: SignalConfig[] = [];
      let currentDir: 'input' | 'output' | 'internal' = 'input';
      let currentWidth = 1;

      for (const portStr of portDefs) {
        let isExplicit = false;
        if (/\binput\b/i.test(portStr)) {
          currentDir = 'input';
          isExplicit = true;
        } else if (/\boutput\b/i.test(portStr)) {
          currentDir = 'output';
          isExplicit = true;
        } else if (/\binout\b/i.test(portStr)) {
          currentDir = 'input';
          isExplicit = true;
        }

        // Check bus width e.g. [3:0] or [1:0]
        const busMatch = portStr.match(/\[\s*(\d+)\s*:\s*(\d+)\s*\]/);
        if (busMatch) {
          const msb = parseInt(busMatch[1], 10);
          const lsb = parseInt(busMatch[2], 10);
          currentWidth = Math.abs(msb - lsb) + 1;
        } else if (isExplicit) {
          currentWidth = 1;
        }

        // Port name is last identifier
        const nameMatch = portStr.match(/([a-zA-Z_]\w*)\s*$/);
        if (nameMatch) {
          const name = nameMatch[1];
          const isClock = /^(clk|clock|sck|scl)$/i.test(name);
          parsedSignals.push({
            name: currentWidth > 1 ? `${name}[${currentWidth - 1}:0]` : name,
            type: isClock ? 'clock' : currentDir,
            initialValue: '0'.repeat(currentWidth)
          });
        }
      }

      // Also extract internal registers & wires declared in module body: reg [7:0] q; logic [7:0] q;
      const bodyInternalRegex = /\b(reg|wire|logic)\s+(?:\[\s*(\d+)\s*:\s*(\d+)\s*\])?\s*([a-zA-Z_]\w*(?:\s*,\s*[a-zA-Z_]\w*)*)\s*;/gi;
      let bim: RegExpExecArray | null;
      while ((bim = bodyInternalRegex.exec(clean)) !== null) {
        const msbStr = bim[2];
        const lsbStr = bim[3];
        const width = (msbStr && lsbStr) ? Math.abs(parseInt(msbStr, 10) - parseInt(lsbStr, 10)) + 1 : 1;
        const names = bim[4].split(',').map(s => s.trim()).filter(Boolean);
        for (const nm of names) {
          const baseNm = nm.toLowerCase();
          const exists = parsedSignals.some(s => s.name.toLowerCase() === baseNm || s.name.toLowerCase().startsWith(`${baseNm}[`));
          if (!exists && !/^(clk|clock|rst|rst_n|reset)$/i.test(nm)) {
            parsedSignals.push({
              name: width > 1 ? `${nm}[${width - 1}:0]` : nm,
              type: 'internal',
              initialValue: '0'.repeat(width)
            });
          }
        }
      }

      if (parsedSignals.length >= 2) {
        const hasOnlyGenericDinDout = parsedSignals.every(s => /^(clk|clock|rst|rst_n|din|dout)(\[\d+:\d+\])?$/i.test(s.name));
        if (hasOnlyGenericDinDout && standardDef?.signals && standardDef.signals.length > 0) {
          return standardDef.signals;
        }
        return parsedSignals;
      }
    }

    // 2. VHDL Entity Port List
    const vhdlPortMatch = clean.match(/port\s*\(([\s\S]*?)\)\s*;/i);
    if (vhdlPortMatch && vhdlPortMatch[1]) {
      const decls = vhdlPortMatch[1].split(';').map(s => s.trim()).filter(Boolean);
      const vhdlSignals: SignalConfig[] = [];
      for (const decl of decls) {
        const colonParts = decl.split(':');
        if (colonParts.length === 2) {
          const names = colonParts[0].split(',').map(s => s.trim()).filter(Boolean);
          const typeStr = colonParts[1].toLowerCase();
          const isInput = typeStr.includes('in') && !typeStr.includes('out');
          const isOutput = typeStr.includes('out');
          const busMatch = typeStr.match(/(\d+)\s+downto\s+(\d+)/);
          const width = busMatch ? Math.abs(parseInt(busMatch[1], 10) - parseInt(busMatch[2], 10)) + 1 : 1;
          for (const name of names) {
            const isClock = /^(clk|clock|sck|scl)$/i.test(name);
            vhdlSignals.push({
              name: width > 1 ? `${name}[${width - 1}:0]` : name,
              type: isClock ? 'clock' : (isInput ? 'input' : isOutput ? 'output' : 'internal'),
              initialValue: '0'.repeat(width)
            });
          }
        }
      }
      if (vhdlSignals.length >= 2) {
        return vhdlSignals;
      }
    }

    if (standardDef?.signals && standardDef.signals.length > 0) {
      return standardDef.signals;
    }

    if (problem.testbenchConfig?.signals && problem.testbenchConfig.signals.length > 0) {
      return problem.testbenchConfig.signals;
    }

    return this.inferSignalsFromProblem(problem);
  },

  inferSignalsFromProblem(problem: Problem): SignalConfig[] {
    const standardDef = getStandardCircuitDefinition(problem);
    if (standardDef?.signals && standardDef.signals.length > 0) {
      return standardDef.signals;
    }

    const title = problem.title.toLowerCase();

    if (title.includes('4-to-1 multiplexer') || title.includes('4:1 mux') || title.includes('mux 4')) {
      return [
        { name: 'd[3:0]', type: 'input', initialValue: '0000' },
        { name: 'sel[1:0]', type: 'input', initialValue: '00' },
        { name: 'y', type: 'output', initialValue: '0' }
      ];
    }

    if (title.includes('2-to-1 multiplexer') || title.includes('2:1 mux') || title.includes('mux 2')) {
      return [
        { name: 'a', type: 'input', initialValue: '0' },
        { name: 'b', type: 'input', initialValue: '1' },
        { name: 'sel', type: 'input', initialValue: '0' },
        { name: 'y', type: 'output', initialValue: '0' }
      ];
    }

    if (title.includes('adder') || title.includes('alu')) {
      return [
        { name: 'a[3:0]', type: 'input', initialValue: '0000' },
        { name: 'b[3:0]', type: 'input', initialValue: '0000' },
        { name: 'cin', type: 'input', initialValue: '0' },
        { name: 'sum[3:0]', type: 'output', initialValue: '0000' },
        { name: 'cout', type: 'output', initialValue: '0' }
      ];
    }

    if (title.includes('counter')) {
      return [
        { name: 'clk', type: 'clock', initialValue: '0' },
        { name: 'rst_n', type: 'input', initialValue: '1' },
        { name: 'enable', type: 'input', initialValue: '1' },
        { name: 'count[3:0]', type: 'output', initialValue: '0000' }
      ];
    }

    return [
      { name: 'clk', type: 'clock', initialValue: '0' },
      { name: 'rst_n', type: 'input', initialValue: '1' },
      { name: 'd', type: 'input', initialValue: '0' },
      { name: 'q', type: 'output', initialValue: '0' }
    ];
  },

  /**
   * Executes continuous assignments, gate primitives, combinational blocks,
   * and sequential blocks across design wires with relaxation to convergence.
   */
  simulateCircuitStep(
    userCode: string,
    inputs: Record<string, string>,
    prevState: Record<string, string>,
    isComb: boolean,
    isPosedgeClk: boolean,
    cycle: number
  ): Record<string, string> {
    const cleanCode = userCode.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/--.*/g, '');
    const state: Record<string, string> = isComb ? { ...inputs } : { ...prevState, ...inputs };

    // Register case-insensitive and stripped port name aliases
    Object.entries(inputs).forEach(([k, v]) => {
      state[k.toLowerCase()] = v;
      state[k.toUpperCase()] = v;
      const stripped = k.replace(/\[.*\]/, '');
      if (state[stripped] === undefined) {
        state[stripped] = v;
        state[stripped.toLowerCase()] = v;
      }
    });

    const getSignalWidth = (name: string): number => {
      const busMatch = name.match(/\[(\d+):(\d+)\]/);
      if (busMatch) return Math.abs(parseInt(busMatch[1], 10) - parseInt(busMatch[2], 10)) + 1;
      const codeBusMatch = cleanCode.match(new RegExp(`\\[\\s*(\\d+)\\s*:\\s*(\\d+)\\s*\\]\\s*(?:[a-zA-Z0-9_]+\\s*,\\s*)*${name}\\b`));
      if (codeBusMatch) return Math.abs(parseInt(codeBusMatch[1], 10) - parseInt(codeBusMatch[2], 10)) + 1;
      for (const k of Object.keys(state)) {
        if (k.startsWith(`${name}[`)) {
          const bm = k.match(/\[(\d+):(\d+)\]/);
          if (bm) return Math.abs(parseInt(bm[1], 10) - parseInt(bm[2], 10)) + 1;
        }
      }
      return 1;
    };

    const setSignalValue = (name: string, val: string): boolean => {
      let wasChanged = false;
      const width = getSignalWidth(name);
      let formattedVal = val;
      if (width > 1 && formattedVal) {
        if (/^[01]+$/.test(formattedVal)) {
          if (formattedVal.length < width) {
            formattedVal = formattedVal.padStart(width, '0');
          } else if (formattedVal.length > width) {
            formattedVal = formattedVal.slice(-width);
          }
        } else if (/^\d+$/.test(formattedVal)) {
          const num = parseInt(formattedVal, 10);
          formattedVal = (num & ((1 << width) - 1)).toString(2).padStart(width, '0');
        }
      }

      if (state[name] !== formattedVal) {
        state[name] = formattedVal;
        wasChanged = true;
      }
      const lower = name.toLowerCase();
      if (state[lower] !== formattedVal) {
        state[lower] = formattedVal;
        wasChanged = true;
      }
      const upper = name.toUpperCase();
      if (state[upper] !== formattedVal) {
        state[upper] = formattedVal;
        wasChanged = true;
      }

      const bitSliceMatch = name.match(/^([a-zA-Z_]\w*)\[(\d+)\]$/);
      if (bitSliceMatch) {
        const arr = bitSliceMatch[1];
        const idx = parseInt(bitSliceMatch[2], 10);
        let found = false;
        for (const k of Object.keys(state)) {
          if ((k.startsWith(`${arr}[`) || k.toLowerCase().startsWith(`${arr.toLowerCase()}[`)) && k.includes(':')) {
            found = true;
            const currentBus = (state[k] || '0').split('');
            const targetIdx = currentBus.length - 1 - idx;
            if (targetIdx >= 0 && targetIdx < currentBus.length) {
              currentBus[targetIdx] = formattedVal;
              const newBus = currentBus.join('');
              if (state[k] !== newBus) { state[k] = newBus; wasChanged = true; }
              if (state[arr] !== newBus) { state[arr] = newBus; wasChanged = true; }
            }
          }
        }
        if (!found) {
          const width = getSignalWidth(arr) || 4;
          const currentBus = '0'.repeat(width).split('');
          const targetIdx = width - 1 - idx;
          if (targetIdx >= 0 && targetIdx < width) {
            currentBus[targetIdx] = formattedVal;
            const newBus = currentBus.join('');
            state[`${arr}[${width - 1}:0]`] = newBus;
            state[arr] = newBus;
            wasChanged = true;
          }
        }
      } else if (name.includes('[')) {
        const stripped = name.replace(/\[.*\]/, '');
        if (state[stripped] !== formattedVal) { state[stripped] = formattedVal; wasChanged = true; }
        if (state[stripped.toLowerCase()] !== formattedVal) { state[stripped.toLowerCase()] = formattedVal; wasChanged = true; }
      } else {
        if (width > 1) {
          const busKey = `${name}[${width - 1}:0]`;
          state[busKey] = formattedVal;
          state[busKey.toLowerCase()] = formattedVal;
        }
        Object.keys(state).forEach(k => {
          if (k.startsWith(`${name}[`) || k.toLowerCase().startsWith(`${lower}[`)) {
            if (state[k] !== formattedVal) {
              state[k] = formattedVal;
              wasChanged = true;
            }
          }
        });
      }
      return wasChanged;
    };

    // 1. Continuous assignments: assign lhs = rhs;
    const assignRegex = /assign\s+(?:\{([^}]+)\}|([a-zA-Z_]\w*(?:\[[^\]]+\])?))\s*=\s*([^;]+);/gi;
    const assigns: { concat?: string[]; target?: string; expr: string }[] = [];
    let aMatch: RegExpExecArray | null;
    while ((aMatch = assignRegex.exec(cleanCode)) !== null) {
      assigns.push({
        concat: aMatch[1] ? aMatch[1].split(',').map(s => s.trim()) : undefined,
        target: aMatch[2]?.trim(),
        expr: aMatch[3].trim()
      });
    }

    // 2. VHDL concurrent assignments outside of process: target <= expr;
    const codeOutsideProcess = cleanCode.replace(/process\s*(?:\([^)]*\))?[\s\S]*?end\s+process;?/gi, '');
    const vhdlAssignRegex = /([a-zA-Z_]\w*(?:\([^)]+\)|\[[^\]]+\])?)\s*<=\s*([^;]+);/gi;
    let vMatch: RegExpExecArray | null;
    while ((vMatch = vhdlAssignRegex.exec(codeOutsideProcess)) !== null) {
      if (!cleanCode.includes('always')) {
        assigns.push({
          target: vMatch[1].trim(),
          expr: vMatch[2].trim()
        });
      }
    }

    // 3. Gate-Level Primitives: gate [name] (out, in1, in2, in3, ...);
    const gateRegex = /\b(and|nand|or|nor|xor|xnor|not|buf)\s+(?:[a-zA-Z_]\w*\s*)?\(\s*([a-zA-Z_]\w*(?:\[[^\]]+\])?)\s*,\s*([^)]+)\);/gi;
    const gates: { gateType: string; outPort: string; inPorts: string[] }[] = [];
    let gMatch: RegExpExecArray | null;
    while ((gMatch = gateRegex.exec(cleanCode)) !== null) {
      gates.push({
        gateType: gMatch[1].toLowerCase(),
        outPort: gMatch[2].trim(),
        inPorts: gMatch[3].split(',').map(s => s.trim())
      });
    }

    // 4. Extract always blocks (Verilog / SystemVerilog) with balanced begin-end depth
    const combBlocks: string[] = [];
    const seqBlocks: string[] = [];
    const alwaysHeaderRegex = /always\s*(?:@\s*(?:\*\s*|\([^)]*\))|_comb|_ff\s*@\s*\([^)]*\)|_latch\s*@\s*\([^)]*\))/gi;
    let abMatch: RegExpExecArray | null;
    while ((abMatch = alwaysHeaderRegex.exec(cleanCode)) !== null) {
      const isSeq = /posedge|negedge/i.test(abMatch[0]);
      let startIdx = abMatch.index + abMatch[0].length;
      while (startIdx < cleanCode.length && /\s/.test(cleanCode[startIdx])) startIdx++;

      if (cleanCode.slice(startIdx, startIdx + 5).toLowerCase() === 'begin') {
        let depth = 1;
        let curr = startIdx + 5;
        const bodyStart = curr;
        while (curr < cleanCode.length && depth > 0) {
          const sub = cleanCode.slice(curr);
          const beginMatch = sub.match(/^\bbegin\b/i);
          const endMatch = sub.match(/^\bend\b/i);
          if (beginMatch) {
            depth++;
            curr += 5;
          } else if (endMatch) {
            depth--;
            if (depth === 0) {
              const body = cleanCode.slice(bodyStart, curr).trim();
              if (isSeq) seqBlocks.push(body);
              else combBlocks.push(body);
              break;
            }
            curr += 3;
          } else {
            curr++;
          }
        }
      } else {
        const semiIdx = cleanCode.indexOf(';', startIdx);
        if (semiIdx !== -1) {
          const body = cleanCode.slice(startIdx, semiIdx + 1).trim();
          if (isSeq) seqBlocks.push(body);
          else combBlocks.push(body);
        }
      }
    }

    // 4b. Extract VHDL process blocks: process(clk, rst) ... begin ... end process;
    const vhdlProcessRegex = /(?:[a-zA-Z_]\w*\s*:\s*)?process\s*(?:\(([^)]*)\))?\s*(?:is)?\s*(?:[\s\S]*?\bbegin\b)([\s\S]*?)\bend\s+process;?/gi;
    let vpMatch: RegExpExecArray | null;
    while ((vpMatch = vhdlProcessRegex.exec(cleanCode)) !== null) {
      const sensList = (vpMatch[1] || '').toLowerCase();
      const body = vpMatch[2].trim();
      const isSeq = /clk|clock|rising_edge|falling_edge|'event/i.test(sensList) || /rising_edge|falling_edge|'event/i.test(body);
      if (isSeq) {
        seqBlocks.push(body);
      } else {
        combBlocks.push(body);
      }
    }

    // Execute sequential blocks on clock edge OR when asynchronous reset is active
    const isAsyncReset = !isComb && (inputs['rst'] === '1' || inputs['rst_n'] === '0' || inputs['clr'] === '1');
    if (!isComb && (isPosedgeClk || isAsyncReset)) {
      for (const block of seqBlocks) {
        this.executeProceduralBlock(block, state, prevState, cleanCode, inputs, isPosedgeClk);
      }
    }

    // Iterative relaxation loop for combinational logic and intermediate wires (up to 16 passes)
    for (let pass = 0; pass < 16; pass++) {
      let changed = false;

      // Evaluate continuous assigns
      for (const assign of assigns) {
        if (assign.target) {
          const val = this.evalHdlExpr(assign.expr, state);
          if (val !== null) {
            if (setSignalValue(assign.target, val)) changed = true;
          }
        } else if (assign.concat && assign.concat.length > 0) {
          // E.g. {cout, sum} = a + b + cin
          const numVal = this.evalHdlNum(assign.expr, state);
          if (numVal !== null && assign.concat.length === 2) {
            const msbName = assign.concat[0];
            const lsbName = assign.concat[1];
            const coutBit = String((numVal >> 4) & 1);
            const sumVal = (numVal & 15).toString(2).padStart(4, '0');
            if (setSignalValue(msbName, coutBit)) changed = true;
            if (setSignalValue(lsbName, sumVal)) changed = true;
          }
        }
      }

      // Evaluate gates
      for (const gate of gates) {
        const inVals = gate.inPorts.map(p => {
          const evalRes = this.evalHdlExpr(p, state);
          if (evalRes !== null) {
            return parseInt(evalRes, 2) || parseInt(evalRes, 10) || 0;
          }
          const v = state[p] ?? state[p.toLowerCase()] ?? '0';
          return parseInt(v, 2) || 0;
        });
        let outVal = 0;
        if (gate.gateType === 'and') outVal = inVals.every(v => v === 1) ? 1 : 0;
        else if (gate.gateType === 'nand') outVal = inVals.every(v => v === 1) ? 0 : 1;
        else if (gate.gateType === 'or') outVal = inVals.some(v => v === 1) ? 1 : 0;
        else if (gate.gateType === 'nor') outVal = inVals.some(v => v === 1) ? 0 : 1;
        else if (gate.gateType === 'xor') outVal = (inVals.reduce((acc, v) => acc ^ v, 0)) & 1;
        else if (gate.gateType === 'xnor') outVal = ((inVals.reduce((acc, v) => acc ^ v, 0)) & 1) === 0 ? 1 : 0;
        else if (gate.gateType === 'not') outVal = inVals[0] === 0 ? 1 : 0;
        else if (gate.gateType === 'buf') outVal = inVals[0] || 0;

        const outStr = String(outVal);
        if (setSignalValue(gate.outPort, outStr)) changed = true;
      }

      // Evaluate combinational blocks
      for (const block of combBlocks) {
        const blockChanged = this.executeProceduralBlock(block, state, undefined, cleanCode, inputs);
        if (blockChanged) changed = true;
      }

      if (!changed) break;
    }

    return state;
  },

  executeProceduralBlock(
    block: string,
    state: Record<string, string>,
    prevState?: Record<string, string>,
    cleanCode: string = '',
    inputs: Record<string, string> = {},
    isPosedgeClk: boolean = false
  ): boolean {
    let changed = false;
    // Current cycle inputs and current state take priority over previous cycle state
    const evalState: Record<string, string> = {
      ...(prevState || {}),
      ...inputs,
      ...state
    };

    const getSignalWidth = (name: string): number => {
      const busMatch = name.match(/\[(\d+):(\d+)\]/);
      if (busMatch) return Math.abs(parseInt(busMatch[1], 10) - parseInt(busMatch[2], 10)) + 1;
      if (cleanCode) {
        const codeBusMatch = cleanCode.match(new RegExp(`\\[\\s*(\\d+)\\s*:\\s*(\\d+)\\s*\\]\\s*(?:[a-zA-Z0-9_]+\\s*,\\s*)*${name}\\b`));
        if (codeBusMatch) return Math.abs(parseInt(codeBusMatch[1], 10) - parseInt(codeBusMatch[2], 10)) + 1;
      }
      for (const k of Object.keys(state)) {
        if (k.startsWith(`${name}[`)) {
          const bm = k.match(/\[(\d+):(\d+)\]/);
          if (bm) return Math.abs(parseInt(bm[1], 10) - parseInt(bm[2], 10)) + 1;
        }
      }
      return 1;
    };

    const setSignalValue = (name: string, val: string): boolean => {
      let wasChanged = false;

      // Normalize VHDL range / indexing e.g. dout(3 downto 0) -> dout[3:0] or dout(0) -> dout[0]
      const vhdlRangeNorm = name.match(/^([a-zA-Z_]\w*)\s*\(\s*(\d+)\s+downto\s+(\d+)\s*\)$/i);
      if (vhdlRangeNorm) {
        name = `${vhdlRangeNorm[1]}[${vhdlRangeNorm[2]}:${vhdlRangeNorm[3]}]`;
      }
      const vhdlBitNorm = name.match(/^([a-zA-Z_]\w*)\s*\(\s*(\d+)\s*\)$/);
      if (vhdlBitNorm) {
        name = `${vhdlBitNorm[1]}[${vhdlBitNorm[2]}]`;
      }

      const width = getSignalWidth(name);
      let formattedVal = val;
      if (width > 1 && formattedVal) {
        if (/^[01xXzZ]+$/.test(formattedVal)) {
          if (formattedVal.length < width) {
            const padChar = /^[xX]/.test(formattedVal) ? 'x' : (/^[zZ]/.test(formattedVal) ? 'z' : '0');
            formattedVal = formattedVal.padStart(width, padChar);
          } else if (formattedVal.length > width) {
            formattedVal = formattedVal.slice(-width);
          }
        } else if (/^\d+$/.test(formattedVal)) {
          const num = parseInt(formattedVal, 10);
          formattedVal = (num & ((1 << width) - 1)).toString(2).padStart(width, '0');
        }
      }

      if (state[name] !== formattedVal) {
        state[name] = formattedVal;
        wasChanged = true;
      }
      const lower = name.toLowerCase();
      if (state[lower] !== formattedVal) {
        state[lower] = formattedVal;
        wasChanged = true;
      }
      const upper = name.toUpperCase();
      if (state[upper] !== formattedVal) {
        state[upper] = formattedVal;
        wasChanged = true;
      }

      const bitSliceMatch = name.match(/^([a-zA-Z_]\w*)\[(\d+)\]$/);
      if (bitSliceMatch) {
        const arr = bitSliceMatch[1];
        const idx = parseInt(bitSliceMatch[2], 10);
        let found = false;
        for (const k of Object.keys(state)) {
          if ((k.startsWith(`${arr}[`) || k.toLowerCase().startsWith(`${arr.toLowerCase()}[`)) && k.includes(':')) {
            found = true;
            const currentBus = (state[k] || '0').split('');
            const targetIdx = currentBus.length - 1 - idx;
            if (targetIdx >= 0 && targetIdx < currentBus.length) {
              currentBus[targetIdx] = formattedVal;
              const newBus = currentBus.join('');
              if (state[k] !== newBus) { state[k] = newBus; wasChanged = true; }
              if (state[arr] !== newBus) { state[arr] = newBus; wasChanged = true; }
            }
          }
        }
        if (!found) {
          const width = getSignalWidth(arr) || 4;
          const currentBus = '0'.repeat(width).split('');
          const targetIdx = width - 1 - idx;
          if (targetIdx >= 0 && targetIdx < width) {
            currentBus[targetIdx] = formattedVal;
            const newBus = currentBus.join('');
            state[`${arr}[${width - 1}:0]`] = newBus;
            state[arr] = newBus;
            wasChanged = true;
          }
        }
      } else if (name.includes('[')) {
        const stripped = name.replace(/\[.*\]/, '');
        if (state[stripped] !== formattedVal) { state[stripped] = formattedVal; wasChanged = true; }
        if (state[stripped.toLowerCase()] !== formattedVal) { state[stripped.toLowerCase()] = formattedVal; wasChanged = true; }
      } else {
        if (width > 1) {
          const busKey = `${name}[${width - 1}:0]`;
          state[busKey] = formattedVal;
          state[busKey.toLowerCase()] = formattedVal;
        }
        Object.keys(state).forEach(k => {
          if (k.startsWith(`${name}[`) || k.toLowerCase().startsWith(`${lower}[`)) {
            if (state[k] !== formattedVal) {
              state[k] = formattedVal;
              wasChanged = true;
            }
          }
        });
      }
      return wasChanged;
    };

    const applyAssignment = (target: string, expr: string): void => {
      const trimmedTarget = target.trim();

      // VHDL (others => '0') or (others => '1')
      if (/others\s*=>/i.test(expr)) {
        const pWidth = getSignalWidth(trimmedTarget);
        const bitChar = /others\s*=>\s*['"]?1['"]?/i.test(expr) ? '1' : '0';
        if (setSignalValue(trimmedTarget, bitChar.repeat(pWidth))) changed = true;
        return;
      }

      const val = this.evalHdlExpr(expr, evalState);
      if (val === null) return;

      if (trimmedTarget.startsWith('{') && trimmedTarget.endsWith('}')) {
        const parts = trimmedTarget.slice(1, -1).split(',').map(s => s.trim());
        if (parts.length === 2) {
          const numVal = parseInt(val, 2) || parseInt(val, 10) || 0;
          const msbName = parts[0];
          const lsbName = parts[1];
          const coutBit = String((numVal >> 4) & 1);
          const sumVal = (numVal & 15).toString(2).padStart(4, '0');
          if (setSignalValue(msbName, coutBit)) changed = true;
          if (setSignalValue(lsbName, sumVal)) changed = true;
        } else {
          let offset = 0;
          for (const part of parts) {
            const pWidth = getSignalWidth(part);
            const partVal = val.slice(offset, offset + pWidth) || '0';
            offset += pWidth;
            if (setSignalValue(part, partVal)) changed = true;
          }
        }
      } else {
        if (setSignalValue(trimmedTarget, val)) changed = true;
      }
    };

    // 0. Pre-assignments outside of if/case statements (e.g. valid = |in; or default flag assignments)
    const strippedBlock = block
      .replace(/casex?\s*\([^)]+\)[\s\S]*?endcase/gi, '')
      .replace(/(?:if|else\s+if)\s*\([^)]+\)[\s\S]*?(?:else\s*(?:begin\s*)?[\s\S]*?)?(?:\bend\b|$)/gi, '')
      .replace(/\bif\b[\s\S]*?\bend\s+if\b;?/gi, '');
    const outerDirectRegex = /([a-zA-Z_]\w*(?:\([^)]+\)|\[[^\]]+\])?|\{[^}]+\})\s*(?:<=|=)\s*([^;]+);/gi;
    let odaMatch: RegExpExecArray | null;
    while ((odaMatch = outerDirectRegex.exec(strippedBlock)) !== null) {
      applyAssignment(odaMatch[1], odaMatch[2].replace(/\bend\b/g, ''));
    }

    // 1. Case statement with wildcard/casex support
    const caseMatch = block.match(/casex?\s*\(([^)]+)\)([\s\S]*?)endcase/i);
    if (caseMatch) {
      const caseVarExpr = caseMatch[1].trim();
      const caseBody = caseMatch[2];

      let caseNum = 0;
      if (caseVarExpr.startsWith('{') && caseVarExpr.endsWith('}')) {
        const parts = caseVarExpr.slice(1, -1).split(',').map(s => s.trim());
        const binStr = parts.map(p => evalState[p] ?? evalState[p.toLowerCase()] ?? '0').join('');
        caseNum = parseInt(binStr, 2) || 0;
      } else {
        const v = evalState[caseVarExpr] ?? evalState[caseVarExpr.toLowerCase()] ?? '0';
        caseNum = parseInt(v, 2) || 0;
      }

      const branchRegex = /(?:(\d+)'[bB]([01xXzZ_?]+)|(\d+)'[dD](\d+)|(\d+)|default)\s*:\s*(?:begin\s*)?([\s\S]*?)(?=(?:(?:\d+'[bB][01xXzZ_?]+|\d+'[dD]\d+|\d+|default)\s*:|\bendcase\b|\bend\b|$))/gi;
      let bMatch: RegExpExecArray | null;
      let branchMatched = false;
      let defaultBody: string | undefined;

      while ((bMatch = branchRegex.exec(caseBody)) !== null) {
        const isDefault = bMatch[0].toLowerCase().trim().startsWith('default');
        const binLabel = bMatch[2];
        const decLabel = bMatch[4] || bMatch[5];
        const body = bMatch[6];

        if (isDefault) {
          defaultBody = body;
          continue;
        }

        let isBranchMatch = false;
        if (binLabel) {
          const pat = binLabel.replace(/_/g, '');
          const valBin = (caseNum & ((1 << pat.length) - 1)).toString(2).padStart(pat.length, '0');
          if (pat.length === valBin.length) {
            let matchedBits = true;
            for (let i = 0; i < pat.length; i++) {
              const p = pat[i];
              if (p === 'x' || p === 'X' || p === 'z' || p === 'Z' || p === '?') continue;
              if (p !== valBin[i]) {
                matchedBits = false;
                break;
              }
            }
            isBranchMatch = matchedBits;
          }
        } else if (decLabel) {
          const branchVal = parseInt(decLabel, 10);
          isBranchMatch = branchVal === caseNum;
        }

        if (isBranchMatch) {
          const assignRegex = /([a-zA-Z_]\w*(?:\([^)]+\)|\[[^\]]+\])?|\{[^}]+\})\s*(?:<=|=)\s*([^;]+);/g;
          let am: RegExpExecArray | null;
          while ((am = assignRegex.exec(body)) !== null) {
            applyAssignment(am[1], am[2]);
          }
          branchMatched = true;
          break;
        }
      }

      if (!branchMatched && defaultBody) {
        const assignRegex = /([a-zA-Z_]\w*(?:\([^)]+\)|\[[^\]]+\])?|\{[^}]+\})\s*(?:<=|=)\s*([^;]+);/g;
        let am: RegExpExecArray | null;
        while ((am = assignRegex.exec(defaultBody)) !== null) {
          applyAssignment(am[1], am[2]);
        }
      }
    }

    // 2. Verilog If-Else / Else-If chain statements: if (cond) begin ... end
    if (block.includes('if') && !/\bif\b[\s\S]*?\bthen\b/i.test(block)) {
      const ifBranchRegex = /(if|else\s+if)\s*\(([^)]+)\)\s*(?:begin\s*)?([\s\S]*?)(?=(?:else\s+if|else\b|\bend\b|$))|else\s*(?:begin\s*)?([\s\S]*?)(?=(?:\bend\b|$))/gi;
      let im: RegExpExecArray | null;
      let branchTaken = false;
      while ((im = ifBranchRegex.exec(block)) !== null) {
        if (im[1]) {
          const cond = im[2].trim();
          const body = im[3];
          if (!branchTaken && this.evalHdlBool(cond, evalState, isPosedgeClk)) {
            branchTaken = true;
            const assignRegex = /([a-zA-Z_]\w*(?:\[[^\]]+\])?|\{[^}]+\})\s*(?:<=|=)\s*([^;]+);/g;
            let am: RegExpExecArray | null;
            while ((am = assignRegex.exec(body)) !== null) {
              applyAssignment(am[1], am[2]);
            }
          }
        } else if (im[4] && !branchTaken) {
          branchTaken = true;
          const assignRegex = /([a-zA-Z_]\w*(?:\[[^\]]+\])?|\{[^}]+\})\s*(?:<=|=)\s*([^;]+);/g;
          let am: RegExpExecArray | null;
          while ((am = assignRegex.exec(im[4])) !== null) {
            applyAssignment(am[1], am[2]);
          }
        }
      }
    }

    // 2b. VHDL If-Elsif-Else statements: if cond then ... elsif cond then ... else ... end if;
    if (/\bif\b[\s\S]*?\bthen\b/i.test(block)) {
      const vhdlIfRegex = /(?:if|elsif)\s+(.+?)\s+then([\s\S]*?)(?=(?:elsif\b|else\b|end\s+if\b|$))|else([\s\S]*?)(?=(?:end\s+if\b|$))/gi;
      let vm: RegExpExecArray | null;
      let vhdlBranchTaken = false;
      while ((vm = vhdlIfRegex.exec(block)) !== null) {
        if (vm[1]) {
          const cond = vm[1].trim();
          const body = vm[2];
          if (!vhdlBranchTaken && this.evalHdlBool(cond, evalState, isPosedgeClk)) {
            vhdlBranchTaken = true;
            const assignRegex = /([a-zA-Z_]\w*(?:\([^)]+\)|\[[^\]]+\])?)\s*<=\s*([^;]+);/g;
            let am: RegExpExecArray | null;
            while ((am = assignRegex.exec(body)) !== null) {
              applyAssignment(am[1], am[2]);
            }
          }
        } else if (vm[3] && !vhdlBranchTaken) {
          vhdlBranchTaken = true;
          const assignRegex = /([a-zA-Z_]\w*(?:\([^)]+\)|\[[^\]]+\])?)\s*<=\s*([^;]+);/g;
          let am: RegExpExecArray | null;
          while ((am = assignRegex.exec(vm[3])) !== null) {
            applyAssignment(am[1], am[2]);
          }
        }
      }
    }

    // 3. Direct concatenated assignment inside always block
    const concatAssignRegex = /\{([^}]+)\}\s*(?:<=|=)\s*([^;]+);/gi;
    let caMatch: RegExpExecArray | null;
    while ((caMatch = concatAssignRegex.exec(block)) !== null) {
      applyAssignment(`{${caMatch[1]}}`, caMatch[2].trim().replace(/\bend\b/g, ''));
    }

    return changed;
  },

  evalHdlExpr(expr: string, state: Record<string, string>): string | null {
    try {
      let raw = expr.trim().replace(/;.*$/, '');

      // VHDL (others => '0') or (others => '1')
      if (/^\(?others\s*=>\s*['"]?0['"]?\)?$/i.test(raw)) return '0';
      if (/^\(?others\s*=>\s*['"]?1['"]?\)?$/i.test(raw)) return '1';

      // Direct constants & 4-state bit literals
      const fourStateBinMatch = raw.match(/^(\d+)'[bB]([01xXzZ_]+)$/);
      if (fourStateBinMatch) {
        const width = parseInt(fourStateBinMatch[1], 10);
        const val = fourStateBinMatch[2].replace(/_/g, '');
        return val.length < width ? val.padStart(width, '0') : val;
      }
      const hexMatch = raw.match(/^(\d+)'[hH]([0-9a-fA-F_]+)$/);
      if (hexMatch) return parseInt(hexMatch[2].replace(/_/g, ''), 16).toString(2).padStart(parseInt(hexMatch[1], 10), '0');
      const decMatch = raw.match(/^(\d+)'[dD](\d+)$/);
      if (decMatch) return parseInt(decMatch[2], 10).toString(2).padStart(parseInt(decMatch[1], 10), '0');
      if (/^[01xXzZ]$/.test(raw)) return raw.toUpperCase();
      if (/^'[01xXzZ]'$/.test(raw)) return raw.slice(1, -1).toUpperCase();
      if (/^"[01xXzZ]+"$/.test(raw)) return raw.slice(1, -1).toUpperCase();
      if (raw === "1'b1" || raw === "1'B1") return '1';
      if (raw === "1'b0" || raw === "1'B0") return '0';
      if (raw === "1'bx" || raw === "1'bX") return 'X';
      if (raw === "1'bz" || raw === "1'bZ") return 'Z';

      // 1. Verilog Concatenation & Replication: {expr1, expr2} or {N{expr}}
      if (raw.startsWith('{') && raw.endsWith('}')) {
        const inner = raw.slice(1, -1).trim();

        // Check replication: {N{item}}
        const repMatch = inner.match(/^(\d+)\s*\{\s*([\s\S]*)\s*\}$/);
        if (repMatch) {
          const count = parseInt(repMatch[1], 10);
          const itemVal = this.evalHdlExpr(repMatch[2], state);
          if (itemVal !== null) {
            return itemVal.repeat(count);
          }
        }

        // Split top-level items respecting nested braces
        const items: string[] = [];
        let current = '';
        let depth = 0;
        for (let i = 0; i < inner.length; i++) {
          const ch = inner[i];
          if (ch === '{' || ch === '(' || ch === '[') depth++;
          else if (ch === '}' || ch === ')' || ch === ']') depth--;
          if (ch === ',' && depth === 0) {
            items.push(current.trim());
            current = '';
          } else {
            current += ch;
          }
        }
        if (current.trim()) items.push(current.trim());

        let result = '';
        for (const item of items) {
          const itVal = this.evalHdlExpr(item, state);
          if (itVal === null) return null;
          result += itVal;
        }
        return result;
      }

      // 1b. VHDL Concatenation operator (&): e.g. q(6 downto 0) & din or "0" & q(7 downto 1)
      if (raw.includes('&') && (raw.includes('"') || raw.includes("'") || /downto/i.test(raw) || /\([0-9]+\)/.test(raw))) {
        const parts = raw.split(/\s*&\s*/);
        let concatRes = '';
        let validConcat = true;
        for (const p of parts) {
          const v = this.evalHdlExpr(p.trim(), state);
          if (v !== null) {
            concatRes += v;
          } else {
            validConcat = false;
            break;
          }
        }
        if (validConcat) return concatRes;
      }

      // 2. VHDL conditional assignment: b when sel = '1' else a
      if (raw.includes('when') && raw.includes('else')) {
        const vhdlMatch = raw.match(/(.+)\s+when\s+(.+)\s+else\s+(.+)/i);
        if (vhdlMatch) {
          const valThen = vhdlMatch[1].trim();
          const cond = vhdlMatch[2].trim();
          const valElse = vhdlMatch[3].trim();
          const condVal = this.evalHdlBool(cond, state);
          return condVal ? this.evalHdlExpr(valThen, state) : this.evalHdlExpr(valElse, state);
        }
      }

      // 3. Verilog Ternary: cond ? valThen : valElse
      if (raw.includes('?') && raw.includes(':') && !raw.includes("'b") && !raw.includes("'h") && !raw.includes("'d")) {
        const qIdx = raw.indexOf('?');
        const cIdx = raw.lastIndexOf(':');
        if (qIdx !== -1 && cIdx > qIdx) {
          const cond = raw.slice(0, qIdx).trim();
          const valThen = raw.slice(qIdx + 1, cIdx).trim();
          const valElse = raw.slice(cIdx + 1).trim();
          const condBool = this.evalHdlBool(cond, state);
          return condBool ? this.evalHdlExpr(valThen, state) : this.evalHdlExpr(valElse, state);
        }
      }

      // 4. Multi-bit Range Slicing: arr[msb:lsb] e.g. q[6:0]
      const rangeMatch = raw.match(/^([a-zA-Z_]\w*)\s*\[\s*(\d+)\s*:\s*(\d+)\s*\]$/);
      if (rangeMatch) {
        const arrName = rangeMatch[1];
        const msb = parseInt(rangeMatch[2], 10);
        const lsb = parseInt(rangeMatch[3], 10);
        let arrVal = state[arrName] ?? state[arrName.toLowerCase()];
        if (!arrVal) {
          for (const k of Object.keys(state)) {
            if (k.startsWith(`${arrName}[`) || k.toLowerCase().startsWith(`${arrName.toLowerCase()}[`)) {
              arrVal = state[k];
              break;
            }
          }
        }
        arrVal = arrVal || '0';
        const width = Math.max(arrVal.length, Math.max(msb, lsb) + 1);
        const fullVal = arrVal.padStart(width, '0');
        const rev = fullVal.split('').reverse();
        let sliced = '';
        if (msb >= lsb) {
          for (let i = msb; i >= lsb; i--) {
            sliced += rev[i] ?? '0';
          }
        } else {
          for (let i = msb; i <= lsb; i++) {
            sliced += rev[i] ?? '0';
          }
        }
        return sliced;
      }

      // 5. VHDL Range Slicing: arr(msb downto lsb)
      const vhdlRangeMatch = raw.match(/^([a-zA-Z_]\w*)\s*\(\s*(\d+)\s+downto\s+(\d+)\s*\)$/i);
      if (vhdlRangeMatch) {
        const arrName = vhdlRangeMatch[1];
        const msb = parseInt(vhdlRangeMatch[2], 10);
        const lsb = parseInt(vhdlRangeMatch[3], 10);
        let arrVal = state[arrName] ?? state[arrName.toLowerCase()] ?? '0';
        const width = Math.max(arrVal.length, msb + 1);
        const fullVal = arrVal.padStart(width, '0');
        const rev = fullVal.split('').reverse();
        let sliced = '';
        for (let i = msb; i >= lsb; i--) {
          sliced += rev[i] ?? '0';
        }
        return sliced;
      }

      // 6. Single-Bit Slicing / Indexing: arr[sel] or arr[0] or arr(0)
      const sliceMatch = raw.match(/^([a-zA-Z_]\w*)\s*(?:\[\s*([^\]:]+)\s*\]|\(\s*(\d+)\s*\))$/);
      if (sliceMatch) {
        const arrName = sliceMatch[1];
        const idxExpr = (sliceMatch[2] || sliceMatch[3]).trim();
        let arrVal = state[arrName] ?? state[arrName.toLowerCase()];
        if (!arrVal) {
          for (const k of Object.keys(state)) {
            if (k.startsWith(`${arrName}[`) || k.toLowerCase().startsWith(`${arrName.toLowerCase()}[`)) {
              arrVal = state[k];
              break;
            }
          }
        }
        arrVal = arrVal || '0';
        let idx = 0;
        if (/^\d+$/.test(idxExpr)) idx = parseInt(idxExpr, 10);
        else if (state[idxExpr] !== undefined) idx = parseInt(state[idxExpr], 2) || 0;
        else if (state[idxExpr.toLowerCase()] !== undefined) idx = parseInt(state[idxExpr.toLowerCase()], 2) || 0;
        const bit = arrVal.split('').reverse()[idx] ?? '0';
        return bit;
      }

      // 7. Direct identity
      if (state[raw] !== undefined) return state[raw];
      if (state[raw.toLowerCase()] !== undefined) return state[raw.toLowerCase()];

      // 8. General JavaScript expression evaluation with replacement
      let js = raw
        .replace(/\b(and)\b/gi, '&')
        .replace(/\b(or)\b/gi, '|')
        .replace(/\b(xor)\b/gi, '^')
        .replace(/\b(not)\b\s*/gi, '~')
        .replace(/\b(nand)\b/gi, '~&')
        .replace(/\b(nor)\b/gi, '~|')
        .replace(/\b(xnor)\b/gi, '^~')
        .replace(/1'b1|1'B1|'1'/g, '1')
        .replace(/1'b0|1'B0|'0'/g, '0')
        .replace(/'[01]'/g, m => m.replace(/'/g, ''))
        .replace(/"([01]+)"/g, (m, v) => String(parseInt(v, 2)))
        .replace(/(\d+)'[bB]([01_]+)/g, (_, w, v) => String(parseInt(v.replace(/_/g, ''), 2)))
        .replace(/(\d+)'[hH]([0-9a-fA-F_]+)/g, (_, w, v) => String(parseInt(v.replace(/_/g, ''), 16)))
        .replace(/(\d+)'[dD](\d+)/g, (_, w, v) => v);

      // In-expression VHDL range slices e.g. q(6 downto 0) -> evaluated integer value
      js = js.replace(/([a-zA-Z_]\w*)\s*\(\s*(\d+)\s+downto\s+(\d+)\s*\)/gi, (m, arr, msbStr, lsbStr) => {
        const msb = parseInt(msbStr, 10);
        const lsb = parseInt(lsbStr, 10);
        let arrVal = state[arr] ?? state[arr.toLowerCase()] ?? '0';
        const width = Math.max(arrVal.length, Math.max(msb, lsb) + 1);
        const fullVal = arrVal.padStart(width, '0');
        const rev = fullVal.split('').reverse();
        let sliced = '';
        for (let i = msb; i >= lsb; i--) sliced += rev[i] ?? '0';
        const num = parseInt(sliced, 2);
        return String(isNaN(num) ? 0 : num);
      });

      // In-expression VHDL single bit index e.g. din(0) or q(3)
      js = js.replace(/([a-zA-Z_]\w*)\s*\(\s*(\d+)\s*\)/g, (m, arr, idxStr) => {
        let arrVal = state[arr] ?? state[arr.toLowerCase()] ?? '0';
        const idx = parseInt(idxStr, 10);
        const bit = arrVal.split('').reverse()[idx] ?? '0';
        return bit;
      });

      // In-expression multi-bit range slices e.g. q[6:0] -> evaluated integer value
      js = js.replace(/([a-zA-Z_]\w*)\s*\[\s*(\d+)\s*:\s*(\d+)\s*\]/g, (m, arr, msbStr, lsbStr) => {
        const msb = parseInt(msbStr, 10);
        const lsb = parseInt(lsbStr, 10);
        let arrVal = state[arr] ?? state[arr.toLowerCase()] ?? '0';
        const width = Math.max(arrVal.length, Math.max(msb, lsb) + 1);
        const fullVal = arrVal.padStart(width, '0');
        const rev = fullVal.split('').reverse();
        let sliced = '';
        if (msb >= lsb) {
          for (let i = msb; i >= lsb; i--) sliced += rev[i] ?? '0';
        } else {
          for (let i = msb; i <= lsb; i++) sliced += rev[i] ?? '0';
        }
        const num = parseInt(sliced, 2);
        return String(isNaN(num) ? 0 : num);
      });

      // In-expression single-bit slices e.g. d[sel]
      js = js.replace(/([a-zA-Z_]\w*)\[([^\]]+)\]/g, (m, arr, idxE) => {
        let arrVal = state[arr] ?? state[arr.toLowerCase()];
        if (!arrVal) {
          for (const k of Object.keys(state)) {
            if (k.startsWith(`${arr}[`) || k.toLowerCase().startsWith(`${arr.toLowerCase()}[`)) {
              arrVal = state[k];
              break;
            }
          }
        }
        arrVal = arrVal || '0';
        let idx = 0;
        const trimmed = idxE.trim();
        if (/^\d+$/.test(trimmed)) idx = parseInt(trimmed, 10);
        else if (state[trimmed] !== undefined) idx = parseInt(state[trimmed], 2) || 0;
        else if (state[trimmed.toLowerCase()] !== undefined) idx = parseInt(state[trimmed.toLowerCase()], 2) || 0;
        return arrVal.split('').reverse()[idx] ?? '0';
      });

      // Reduction operators: &in, |in, ^in
      js = js.replace(/&([a-zA-Z_]\w*)/g, (m, id) => {
        const v = state[id] || '0';
        return v.split('').every(c => c === '1') ? '1' : '0';
      });
      js = js.replace(/\|([a-zA-Z_]\w*)/g, (m, id) => {
        const v = state[id] || '0';
        return v.split('').some(c => c === '1') ? '1' : '0';
      });
      js = js.replace(/\^([a-zA-Z_]\w*)/g, (m, id) => {
        const v = state[id] || '0';
        const ones = v.split('').filter(c => c === '1').length;
        return String(ones % 2);
      });

      // Identifier substitution
      const ids = js.match(/[a-zA-Z_]\w*/g) || [];
      for (const id of ids) {
        if (id === 'true' || id === 'false') continue;
        const mapped = state[id] ?? state[id.toLowerCase()];
        if (mapped !== undefined) {
          const num = parseInt(mapped, 2);
          js = js.replace(new RegExp(`\\b${id}\\b`, 'g'), String(isNaN(num) ? 0 : num));
        } else {
          js = js.replace(new RegExp(`\\b${id}\\b`, 'g'), '0');
        }
      }

      // Bitwise NOT unary: replace ~ with ((~val) & 1)
      js = js.replace(/~(\s*(?:\([^)]+\)|\d+|[a-zA-Z_]\w*))/g, '((~$1) & 1)');
      // XNOR: ^~ or ~^
      js = js.replace(/\^~|~\^/g, ' === ');

      const fn = new Function(`"use strict"; return (${js});`);
      const res = fn();
      if (typeof res === 'boolean') return res ? '1' : '0';
      if (typeof res === 'number') {
        if (res === 0 || res === 1) return String(res);
        return res.toString(2);
      }
      return String(res);
    } catch {
      return null;
    }
  },

  evalHdlNum(expr: string, state: Record<string, string>): number | null {
    const val = this.evalHdlExpr(expr, state);
    if (val === null) return null;
    return parseInt(val, 2) || parseInt(val, 10) || 0;
  },

  evalHdlBool(cond: string, state: Record<string, string>, isPosedgeClk?: boolean): boolean {
    try {
      let cleanCond = cond.trim().replace(/^\(|\)$/g, '').trim();

      // VHDL rising_edge(clk) / falling_edge(clk)
      if (/rising_edge\s*\(\s*(?:clk|clock)\s*\)/i.test(cleanCond)) {
        if (isPosedgeClk !== undefined) return isPosedgeClk;
        return true;
      }
      if (/falling_edge\s*\(\s*(?:clk|clock)\s*\)/i.test(cleanCond)) {
        if (isPosedgeClk !== undefined) return !isPosedgeClk;
        return false;
      }
      if (/(?:clk|clock)'event\s+and\s+(?:clk|clock)\s*=\s*'1'/i.test(cleanCond)) {
        if (isPosedgeClk !== undefined) return isPosedgeClk;
        return true;
      }

      // VHDL equality / inequality
      cleanCond = cleanCond
        .replace(/=\s*'([01xXzZ])'/g, '== "$1"')
        .replace(/=\s*"([01xXzZ]+)"/g, '== "$1"')
        .replace(/=\s*'1'/g, '== 1')
        .replace(/=\s*'0'/g, '== 0')
        .replace(/([a-zA-Z_]\w*)\s*=\s*1\b/g, '$1 == 1')
        .replace(/([a-zA-Z_]\w*)\s*=\s*0\b/g, '$1 == 0');

      cleanCond = cleanCond
        .replace(/\band\b/gi, '&&')
        .replace(/\bor\b/gi, '||')
        .replace(/\bnot\b/gi, '!')
        .replace(/=/g, '==');

      const res = this.evalHdlExpr(cleanCond, state);
      if (res === null) return false;
      return res !== '0' && res !== 'false';
    } catch {
      return false;
    }
  },

  evaluateCondition(cond: string, inputs: Record<string, string>, prevState: Record<string, string>): boolean {
    return this.evalHdlBool(cond, { ...prevState, ...inputs });
  },

  computeOutputValue(
    sig: SignalConfig,
    cycle: number,
    problem: Problem,
    userCode: string,
    inputs: Record<string, string>,
    prevState: Record<string, string>,
    context?: { fsmShiftRegister: string; internalCounter: number; internalShiftReg: string }
  ): string {
    const rawSigName = sig.name.replace(/\[.*\]/, '');
    const cleanCode = userCode.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');

    // Fast-path: if user code is the exact reference solution, compute reference output value
    if (problem.solutionCode && userCode.trim() === problem.solutionCode.trim()) {
      return this.computeRefOutputValue(sig, cycle, problem, inputs, prevState, context);
    }

    // 1. Gate-level primitives: and g1(y, a, b); or (y, a, b);
    const gateRegex = new RegExp(`\\b(and|or|xor|nand|nor|xnor|not)\\s+(?:[a-zA-Z0-9_$]+\\s*)?\\(\\s*${rawSigName}\\s*,\\s*([^)]+)\\)`, 'i');
    const gateMatch = cleanCode.match(gateRegex);
    if (gateMatch) {
      const gateType = gateMatch[1].toLowerCase();
      const ports = gateMatch[2].split(',').map(p => p.trim());
      const vals = ports.map(p => this.evalHdlExpr(p, { ...prevState, ...inputs }) ?? '0');
      if (gateType === 'and') return vals.every(v => v === '1') ? '1' : '0';
      if (gateType === 'or') return vals.some(v => v === '1') ? '1' : '0';
      if (gateType === 'xor') return (vals.filter(v => v === '1').length % 2 === 1) ? '1' : '0';
      if (gateType === 'nand') return vals.every(v => v === '1') ? '0' : '1';
      if (gateType === 'nor') return vals.some(v => v === '1') ? '0' : '1';
      if (gateType === 'xnor') return (vals.filter(v => v === '1').length % 2 === 1) ? '0' : '1';
      if (gateType === 'not') return vals[0] === '1' ? '0' : '1';
    }

    // 2. Procedural if-else branching for this signal
    const ifElseRegex = new RegExp(`if\\s*\\(([^)]+)\\)\\s*(?:begin\\s*)?[^;]*?\\b${rawSigName}\\b\\s*<=?\\s*([^;]+);\\s*(?:end\\s*)?else\\s*(?:begin\\s*)?[^;]*?\\b${rawSigName}\\b\\s*<=?\\s*([^;]+);`, 'i');
    const ifMatch = cleanCode.match(ifElseRegex);
    if (ifMatch) {
      const cond = ifMatch[1].trim();
      const branch1 = ifMatch[2].trim();
      const branch2 = ifMatch[3].trim();
      const condVal = this.evalHdlBool(cond, { ...prevState, ...inputs });
      const targetExpr = condVal ? branch1 : branch2;
      const evalVal = this.evalHdlExpr(targetExpr, { ...prevState, ...inputs });
      if (evalVal !== null) return evalVal;
    }

    // 3. Direct continuous assignment or procedural assignment (assign y = ...;)
    const assignRegex = new RegExp(`(?:assign\\s+)?(?:\\{\\s*\\w+\\s*,\\s*)*${rawSigName}\\b[^=]*<?[=]?\\s*([^;\\n]+)`, 'i');
    const match = cleanCode.match(assignRegex);
    if (match && match[1]) {
      const rhsExpr = match[1].trim();
      const evalVal = this.evalHdlExpr(rhsExpr, { ...prevState, ...inputs });
      if (evalVal !== null) {
        return evalVal;
      }
    }

    // Check if user code actually drives this signal
    const isDriven = new RegExp(`(?:\\bassign\\s+[^;]*?\\b${rawSigName}\\b|\\b${rawSigName}\\b\\s*(?:<=|=(?!=))|\\b(?:and|nand|or|nor|xor|xnor|not|buf)\\s*\\([^;)]*?\\b${rawSigName}\\b)`, 'i').test(cleanCode);
    if (!isDriven) {
      return sig.initialValue ? '0'.repeat(sig.initialValue.length) : '0';
    }

    // If user drove the signal with custom HDL that couldn't be parsed directly,
    // evaluate with fallback or return '0' so invalid code does not falsely pass assertions
    const width = sig.initialValue ? sig.initialValue.length : 1;
    return '0'.repeat(width);
  },

  evaluateHdlExpression(
    expr: string,
    sig: SignalConfig,
    inputs: Record<string, string>,
    prevState: Record<string, string>
  ): string | null {
    return this.evalHdlExpr(expr, { ...prevState, ...inputs });
  },

  computeRefOutputValue(
    sig: SignalConfig,
    cycle: number,
    problem: Problem,
    inputs: Record<string, string>,
    prevState: Record<string, string>,
    context?: { fsmShiftRegister: string; internalCounter: number; internalShiftReg: string }
  ): string {
    const width = sig.initialValue ? sig.initialValue.length : 1;
    const lowerTitle = (problem.title || '').toLowerCase();
    const sigName = sig.name.toLowerCase();

    // Reset condition for sequential circuits
    const isReset = inputs['rst'] === '1' || inputs['rst_n'] === '0' || inputs['clr'] === '1';
    if (isReset && (sigName.includes('dout') || sigName.includes('q') || sigName.includes('count') || sigName.includes('out'))) {
      return '0'.repeat(width);
    }

    // 1. 4-to-1 Multiplexer (supports both discrete d0..d3 and bus d[3:0])
    if (lowerTitle.includes('4-to-1') || lowerTitle.includes('4:1') || lowerTitle.includes('mux 4')) {
      const s0 = inputs['s0'] || inputs['S0'] || '0';
      const s1 = inputs['s1'] || inputs['S1'] || '0';
      const selStr = inputs['sel'] || inputs['sel[1:0]'] || `${s1}${s0}`;
      const sel = parseInt(selStr, 2) || 0;

      const d0 = inputs['d0'] ?? inputs['D0'] ?? inputs['in0'];
      const d1 = inputs['d1'] ?? inputs['D1'] ?? inputs['in1'];
      const d2 = inputs['d2'] ?? inputs['D2'] ?? inputs['in2'];
      const d3 = inputs['d3'] ?? inputs['D3'] ?? inputs['in3'];

      if (d0 !== undefined || d1 !== undefined) {
        if (sel === 0) return d0 ?? '0';
        if (sel === 1) return d1 ?? '0';
        if (sel === 2) return d2 ?? '0';
        if (sel === 3) return d3 ?? '0';
      }

      const busVal = inputs['d'] || inputs['d[3:0]'] || inputs['in'] || inputs['in[3:0]'] || '0000';
      return busVal.split('').reverse()[sel] || '0';
    }

    // 2. 8-to-1 Multiplexer
    if (lowerTitle.includes('8-to-1') || lowerTitle.includes('8:1')) {
      const selStr = inputs['sel'] || inputs['sel[2:0]'] || inputs['s'] || '000';
      const sel = parseInt(selStr, 2) || 0;
      const busVal = inputs['in'] || inputs['in[7:0]'] || inputs['d'] || inputs['d[7:0]'] || '00000000';
      return busVal.split('').reverse()[sel] || '0';
    }

    // 3. 16-to-1 Multiplexer
    if (lowerTitle.includes('16-to-1') || lowerTitle.includes('16:1')) {
      const selStr = inputs['sel'] || inputs['sel[3:0]'] || '0000';
      const sel = parseInt(selStr, 2) || 0;
      const busVal = inputs['in'] || inputs['in[15:0]'] || inputs['d'] || '0000000000000000';
      return busVal.split('').reverse()[sel] || '0';
    }

    // 4. 2-to-1 Multiplexer
    if (lowerTitle.includes('2-to-1') || lowerTitle.includes('2:1') || lowerTitle.includes('mux 2')) {
      const sel = inputs['sel'] || inputs['s'] || '0';
      return sel === '1' ? (inputs['b'] ?? inputs['d1'] ?? inputs['in1'] ?? '1') : (inputs['a'] ?? inputs['d0'] ?? inputs['in0'] ?? '0');
    }

    // 5. Decoders
    if (lowerTitle.includes('decoder')) {
      const en = inputs['en'] === undefined || inputs['en'] === '1';
      if (!en) return '0'.repeat(width);

      if (lowerTitle.includes('2-to-4')) {
        const inVal = parseInt(inputs['in'] || inputs['in[1:0]'] || '0', 2) || 0;
        return (1 << inVal).toString(2).padStart(4, '0');
      }
      if (lowerTitle.includes('3-to-8')) {
        const inVal = parseInt(inputs['in'] || inputs['in[2:0]'] || '0', 2) || 0;
        return (1 << inVal).toString(2).padStart(8, '0');
      }
      if (lowerTitle.includes('4-to-16')) {
        const inVal = parseInt(inputs['in'] || inputs['in[3:0]'] || '0', 2) || 0;
        return (1 << inVal).toString(2).padStart(16, '0');
      }
      if (lowerTitle.includes('7-segment') || lowerTitle.includes('7segment')) {
        const bcd = parseInt(inputs['bcd'] || inputs['bcd[3:0]'] || '0', 2) || 0;
        const segMap = ['0111111', '0000110', '1011011', '1001111', '1100110', '1101101', '1111101', '0000111', '1111111', '1101111'];
        return segMap[bcd] || '0000000';
      }
    }

    // 6. Encoders & Priority Encoders
    if (lowerTitle.includes('priority encoder') || lowerTitle.includes('encoder')) {
      const inVal = inputs['in'] || inputs['in[7:0]'] || inputs['in[3:0]'] || '0';
      if (sigName.includes('valid')) {
        return inVal.includes('1') ? '1' : '0';
      }
      let highestBit = 0;
      for (let i = 0; i < inVal.length; i++) {
        if (inVal[inVal.length - 1 - i] === '1') {
          highestBit = i;
        }
      }
      return highestBit.toString(2).padStart(width, '0');
    }

    // 7. Magnitude Comparator
    if (lowerTitle.includes('comparator')) {
      const valA = parseInt(inputs['a'] || inputs['a[3:0]'] || '0', 2) || 0;
      const valB = parseInt(inputs['b'] || inputs['b[3:0]'] || '0', 2) || 0;
      if (sigName.includes('gt') || sigName.includes('greater')) return valA > valB ? '1' : '0';
      if (sigName.includes('lt') || sigName.includes('less')) return valA < valB ? '1' : '0';
      if (sigName.includes('eq') || sigName.includes('equal')) return valA === valB ? '1' : '0';
    }

    // 8. Adders & ALUs
    if (lowerTitle.includes('adder') || lowerTitle.includes('alu')) {
      const valA = parseInt(inputs['A'] || inputs['a'] || inputs['a[3:0]'] || inputs['a[7:0]'] || '0', 2) || 0;
      const valB = parseInt(inputs['B'] || inputs['b'] || inputs['b[3:0]'] || inputs['b[7:0]'] || '0', 2) || 0;
      const valCin = parseInt(inputs['Cin'] || inputs['cin'] || inputs['c_in'] || '0', 2) || 0;

      if (lowerTitle.includes('subtractor') || sigName.includes('diff') || sigName.includes('borrow')) {
        const diff = valA - valB - valCin;
        if (sigName.includes('borrow') || sigName.includes('bout')) {
          return diff < 0 ? '1' : '0';
        }
        return ((diff + Math.pow(2, width)) % Math.pow(2, width)).toString(2).padStart(width, '0');
      }

      if (lowerTitle.includes('alu')) {
        const opcode = parseInt(inputs['opcode'] || inputs['opcode[2:0]'] || '0', 2) || 0;
        let res = 0;
        if (opcode === 0) res = valA + valB;
        else if (opcode === 1) res = valA - valB;
        else if (opcode === 2) res = valA & valB;
        else if (opcode === 3) res = valA | valB;
        else if (opcode === 4) res = valA ^ valB;
        else if (opcode === 5) res = (~valA) & 255;
        else if (opcode === 6) res = (valA << 1) & 255;
        else if (opcode === 7) res = (valA >> 1) & 255;
        if (sigName.includes('zero')) return res === 0 ? '1' : '0';
        return (res & 255).toString(2).padStart(width, '0');
      }

      const sumTotal = valA + valB + valCin;
      if (sigName.includes('cout') || sigName.includes('carry')) {
        return String((sumTotal >> width) & 1);
      }
      return (sumTotal & ((1 << width) - 1)).toString(2).padStart(width, '0');
    }

    // 9. Subtractors
    if (lowerTitle.includes('subtractor')) {
      const valA = parseInt(inputs['a'] || inputs['a[3:0]'] || '0', 2) || 0;
      const valB = parseInt(inputs['b'] || inputs['b[3:0]'] || '0', 2) || 0;
      const valBin = parseInt(inputs['bin'] || inputs['b_in'] || '0', 2) || 0;
      const diff = valA - valB - valBin;
      if (sigName.includes('bout') || sigName.includes('borrow')) return diff < 0 ? '1' : '0';
      return ((diff + 16) % 16).toString(2).padStart(width, '0');
    }

    // 10. Flip-Flops & Latches
    if (lowerTitle.includes('flip-flop') || lowerTitle.includes('dff') || lowerTitle.includes('register')) {
      if (isReset) return '0'.repeat(width);

      const clk = inputs['clk'] || '0';
      const prevClk = prevState['clk'] || '0';
      const isPosedge = clk === '1' && prevClk !== '1';

      if (!isPosedge) {
        return prevState[sig.name] ?? prevState['q'] ?? prevState['dout'] ?? '0'.repeat(width);
      }

      if (sigName.includes('qn') || sigName.includes('q_bar') || sigName.includes('q_n')) {
        const d = inputs['d'] || '0';
        return d === '1' ? '0' : '1';
      }

      if (lowerTitle.includes('t flip-flop') || lowerTitle.includes('t-ff')) {
        const t = inputs['t'] || '1';
        const prevQ = parseInt(prevState['q'] || '0', 2) || 0;
        return t === '1' ? String(prevQ ^ 1) : String(prevQ);
      }

      if (lowerTitle.includes('jk flip-flop') || lowerTitle.includes('jk-ff')) {
        const j = inputs['j'] || '0';
        const k = inputs['k'] || '0';
        const prevQ = parseInt(prevState['q'] || '0', 2) || 0;
        if (j === '0' && k === '0') return String(prevQ);
        if (j === '0' && k === '1') return '0';
        if (j === '1' && k === '0') return '1';
        return String(prevQ ^ 1);
      }

      return inputs['d'] || inputs['din'] || '0';
    }

    // 10b. Shift Registers (SISO, SIPO, PISO, PIPO)
    if (lowerTitle.includes('shift register') || lowerTitle.includes('siso') || lowerTitle.includes('sipo') || lowerTitle.includes('piso') || lowerTitle.includes('pipo')) {
      if (isReset) return '0'.repeat(width);

      const clk = inputs['clk'] || '0';
      const prevClk = prevState['clk'] || '0';
      const isPosedge = clk === '1' && prevClk !== '1';

      if (!isPosedge) {
        return prevState[sig.name] ?? prevState['q'] ?? prevState['dout'] ?? '0'.repeat(width);
      }

      const prevQ = prevState[sig.name] ?? prevState['q'] ?? prevState['dout'] ?? '0'.repeat(width);
      const din = inputs['din'] ?? inputs['sin'] ?? inputs['in'] ?? inputs['d'] ?? '0';
      const dinBit = din[din.length - 1] || '0';

      if (width > 1) {
        // Shift left into LSB: {q[width-2:0], din}
        const cleanPrev = prevQ.length >= width ? prevQ.slice(-width) : prevQ.padStart(width, '0');
        const shifted = (cleanPrev.slice(1) + dinBit).padStart(width, '0');
        return shifted;
      } else {
        // Single bit output (serial out: MSB of shifted register)
        const fullQ = prevState['q'] || prevState['q[7:0]'] || prevState['q[3:0]'] || '00000000';
        return fullQ[0] || dinBit;
      }
    }

    // 11. Counters
    if (lowerTitle.includes('counter')) {
      if (isReset) return '0'.repeat(width);

      const clk = inputs['clk'] || '0';
      const prevClk = prevState['clk'] || '0';
      const isPosedge = clk === '1' && prevClk !== '1';

      if (!isPosedge) {
        return prevState[sig.name] ?? '0'.repeat(width);
      }

      const prevVal = parseInt(prevState[sig.name] || '0', 2) || 0;
      const enable = inputs['enable'] === undefined || inputs['enable'] === '1' || inputs['en'] === '1';
      if (enable) {
        if (lowerTitle.includes('down')) {
          return ((prevVal - 1 + Math.pow(2, width)) % Math.pow(2, width)).toString(2).padStart(width, '0');
        } else if (lowerTitle.includes('bcd') || lowerTitle.includes('mod-10')) {
          return ((prevVal + 1) % 10).toString(2).padStart(width, '0');
        }
        return ((prevVal + 1) % Math.pow(2, width)).toString(2).padStart(width, '0');
      }
      return prevVal.toString(2).padStart(width, '0');
    }

    // 12. Sequence Detectors & FSMs
    if (lowerTitle.includes('sequence detector') || lowerTitle.includes('fsm')) {
      if (isReset) return '0'.repeat(width);
      const stream = context?.fsmShiftRegister || '';
      if (lowerTitle.includes('1011')) return stream.endsWith('1011') ? '1' : '0';
      if (lowerTitle.includes('1101')) return stream.endsWith('1101') ? '1' : '0';
      if (lowerTitle.includes('1010')) return stream.endsWith('1010') ? '1' : '0';
      return stream.endsWith('1011') ? '1' : '0';
    }

    // 13. Basic Gates
    if (lowerTitle.includes('and gate')) {
      const a = inputs['a'] || '0'; const b = inputs['b'] || '0';
      return (a === '1' && b === '1') ? '1' : '0';
    }
    if (lowerTitle.includes('or gate')) {
      const a = inputs['a'] || '0'; const b = inputs['b'] || '0';
      return (a === '1' || b === '1') ? '1' : '0';
    }
    if (lowerTitle.includes('xor gate')) {
      const a = inputs['a'] || '0'; const b = inputs['b'] || '0';
      return a !== b ? '1' : '0';
    }
    if (lowerTitle.includes('nand gate')) {
      const a = inputs['a'] || '0'; const b = inputs['b'] || '0';
      return (a === '1' && b === '1') ? '0' : '1';
    }
    if (lowerTitle.includes('nor gate')) {
      const a = inputs['a'] || '0'; const b = inputs['b'] || '0';
      return (a === '0' && b === '0') ? '1' : '0';
    }
    if (lowerTitle.includes('xnor gate')) {
      const a = inputs['a'] || '0'; const b = inputs['b'] || '0';
      return a === b ? '1' : '0';
    }
    if (lowerTitle.includes('inverter') || lowerTitle.includes('not gate')) {
      const inVal = inputs['a'] || inputs['in'] || '0';
      return inVal === '0' ? '1' : '0';
    }

    // Default fallback
    const defaultDataIn = inputs['din'] ?? inputs['d'] ?? inputs['in'] ?? inputs['data_in'] ?? inputs['sin'];
    if (defaultDataIn !== undefined) {
      return defaultDataIn;
    }
    return sig.initialValue || '0';
  },

  generateMcuWaveformSamples(problem: Problem, passed: boolean, numCycles = 16): WaveformSample[] {
    const isComb = isCombinationalCircuit(problem);
    const samples: WaveformSample[] = [];

    let rawSigs = problem.testbenchConfig?.signals && problem.testbenchConfig.signals.length > 0
      ? problem.testbenchConfig.signals
      : (Array.isArray(problem.signals) && problem.signals.length > 0
          ? problem.signals
          : isComb
            ? [{ name: 'a', type: 'input' as const, initialValue: '0' }, { name: 'b', type: 'input' as const, initialValue: '0' }, { name: 'y', type: 'output' as const, initialValue: '0' }]
            : [{ name: 'clk', type: 'clock' as const, initialValue: '0' }, { name: 'gpio_out', type: 'output' as const, initialValue: '0' }]);

    if (isComb) {
      rawSigs = rawSigs.filter(s =>
        !s.name.toLowerCase().includes('clk') &&
        !s.name.toLowerCase().includes('clock') &&
        !s.name.toLowerCase().includes('rst')
      );
      if (rawSigs.length === 0) {
        rawSigs = [
          { name: 'a', type: 'input' as const, initialValue: '0' },
          { name: 'b', type: 'input' as const, initialValue: '0' },
          { name: 'y', type: 'output' as const, initialValue: '0' }
        ];
      }
    }

    const sigs = rawSigs;

    for (let c = 0; c < numCycles; c++) {
      const cycleSignals: Record<string, string> = {};

      sigs.forEach((sig) => {
        const name = sig.name;
        const lower = name.toLowerCase();

        if (sig.type === 'clock' || lower.includes('clk') || lower.includes('clock') || lower.includes('sck') || lower.includes('scl')) {
          if (!isComb) {
            cycleSignals[name] = c % 2 === 0 ? '0' : '1';
          }
        } else if (sig.type === 'input') {
          if (lower.includes('btn') || lower.includes('button')) {
            cycleSignals[name] = c >= 4 && c <= 11 ? '0' : '1';
          } else if (lower.includes('rx') || lower.includes('miso') || lower.includes('sda')) {
            cycleSignals[name] = (c % 4 < 2) ? '1' : '0';
          } else {
            cycleSignals[name] = (c % 2 === 0) ? '0' : '1';
          }
        } else {
          // Output signal
          if (!passed) {
            cycleSignals[name] = '0';
          } else {
            if (lower.includes('led') || lower.includes('gpio') || lower.includes('relay')) {
              cycleSignals[name] = (Math.floor(c / 2) % 2 === 0) ? '1' : '0';
            } else if (lower.includes('pwm')) {
              cycleSignals[name] = (c % 4 !== 0) ? '1' : '0';
            } else if (lower.includes('tx') || lower.includes('mosi')) {
              cycleSignals[name] = (c % 2 === 0) ? '1' : '0';
            } else if (lower.includes('cs')) {
              cycleSignals[name] = (c >= 2 && c <= 14) ? '0' : '1';
            } else {
              cycleSignals[name] = (c % 2 === 0) ? '1' : '0';
            }
          }
        }
      });

      samples.push({ cycle: c, signals: cycleSignals });
    }

    return samples;
  },

  generateTestbenchStimulusSamples(problem: Problem, numCycles = 16): WaveformSample[] {
    const isComb = isCombinationalCircuit(problem);
    const samples: WaveformSample[] = [];
    const sigs = this.extractSignalsFromUserCode('', problem);

    const clockSigs = isComb ? [] : sigs.filter(s => s.type === 'clock' || s.name.toLowerCase().includes('clk'));
    const inputSigs = sigs.filter(s => s.type === 'input' && !s.name.toLowerCase().includes('clk'));
    const outputSigs = sigs.filter(s => s.type === 'output' || s.type === 'internal');

    for (let c = 0; c < numCycles; c++) {
      const cycleSignals: Record<string, string> = {};

      if (!isComb) {
        clockSigs.forEach(sig => {
          cycleSignals[sig.name] = c % 2 === 0 ? '0' : '1';
        });
        inputSigs.forEach(sig => {
          const lName = sig.name.toLowerCase();
          if (lName === 'rst' || lName === 'reset' || lName === 'clr') {
            cycleSignals[sig.name] = c === 0 ? '1' : '0';
          } else if (lName === 'rst_n' || lName === 'reset_n' || lName === 'clrn') {
            cycleSignals[sig.name] = c === 0 ? '0' : '1';
          }
        });
      }

      inputSigs.forEach(sig => {
        if (cycleSignals[sig.name] !== undefined) return;
        const width = sig.initialValue ? sig.initialValue.length : (sig.name.includes('[') ? this.getBusWidth(sig.name) : 1);
        if (width === 1) {
          cycleSignals[sig.name] = String((c >> (inputSigs.indexOf(sig) % 4)) & 1);
        } else {
          const val = (c * 3) & ((1 << width) - 1);
          cycleSignals[sig.name] = val.toString(2).padStart(width, '0');
        }
      });

      outputSigs.forEach(sig => {
        const width = sig.initialValue ? sig.initialValue.length : (sig.name.includes('[') ? this.getBusWidth(sig.name) : 1);
        cycleSignals[sig.name] = '0'.repeat(width);
      });

      samples.push({ cycle: c, signals: cycleSignals });
    }

    return samples;
  },

  determineCircuitCycles(problem: Problem, config?: { cycles?: number }): number {
    const isComb = isCombinationalCircuit(problem);
    const title = (problem.title || '').toLowerCase();

    if (isComb) {
      // 1-input NOT/Inverter or Buffer: 4 transitions (0, 1, 0, 1)
      if (title.includes('inverter') || title.includes('not gate') || title.includes('buffer')) {
        return 4;
      }

      // 2-input Combinational circuits: exactly 4 truth-table vectors (00, 01, 10, 11)
      if (
        (title.includes('half adder') && !title.includes('full adder')) ||
        title.includes('half subtractor') ||
        title.includes('2-to-1') || title.includes('2:1') || title.includes('mux 2') ||
        title.includes('basic gate') || title.includes('xor') || title.includes('xnor') ||
        title.includes('nand') || title.includes('nor') || title.includes('and gate') ||
        title.includes('or gate') || title.includes('2-input')
      ) {
        return 4;
      }

      // 3-input Combinational circuits: exactly 8 truth-table vectors (000 to 111)
      if (
        title.includes('full adder') || title.includes('full subtractor') ||
        title.includes('3-to-8') || title.includes('majority') ||
        title.includes('3-input') || title.includes('carry lookahead')
      ) {
        return 8;
      }

      // 4-to-1 MUX & Encoders & Comparators: 8 test vectors
      if (
        title.includes('4-to-1') || title.includes('4:1') || title.includes('mux 4') ||
        title.includes('priority encoder') || title.includes('comparator') ||
        title.includes('2-to-4')
      ) {
        return 8;
      }

      // 4-bit ALU / Adders / 8-to-1 MUX / 16-to-1 MUX
      if (title.includes('alu') || title.includes('8-to-1') || title.includes('16-to-1') || title.includes('4-bit adder')) {
        return 16;
      }

      if (config?.cycles && config.cycles > 0 && config.cycles !== 16) {
        return config.cycles;
      }
      return 8;
    } else {
      // Sequential Circuits
      // Flip-Flops & Latches: exactly 8 clock cycles
      if (title.includes('flip-flop') || title.includes('latch') || title.includes('dff')) {
        return 8;
      }

      // Shift Registers (SISO, SIPO, PISO, PIPO): 20 half-cycles (10 clock periods, allowing 8 shifts with din=1 to reach 11111111)
      if (title.includes('shift register') || title.includes('siso') || title.includes('sipo') || title.includes('piso') || title.includes('pipo')) {
        return 20;
      }

      // Mod-6 Counter: 12 clock cycles (2 complete periods: 0..5, 0..5)
      if (title.includes('mod-6') || title.includes('mod 6')) {
        return 12;
      }

      // Mod-10 / BCD / Decade Counter: 12 clock cycles (0..9 rollover)
      if (title.includes('mod-10') || title.includes('mod 10') || title.includes('bcd counter') || title.includes('decade counter')) {
        return 12;
      }

      // 4-bit Counter: 16 clock cycles (0 to 15 rollover)
      if (title.includes('4-bit counter') || title.includes('binary counter') || title.includes('up/down counter') || title.includes('up-down counter')) {
        return 16;
      }

      // Sequence Detectors & FSMs: 12 clock cycles
      if (title.includes('sequence detector') || title.includes('fsm') || title.includes('state machine') || title.includes('traffic light')) {
        return 12;
      }

      if (title.includes('counter')) {
        return 16;
      }

      if (config?.cycles && config.cycles > 0 && config.cycles !== 16) {
        return config.cycles;
      }
      return 12;
    }
  }
};

