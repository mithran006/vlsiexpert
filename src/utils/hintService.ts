import { Problem, SimulationResult } from '../types';
import { getModelingStylesForProblem, ModelingStyle } from './modelingStylesService';

export interface PostExecutionHint {
  type: 'syntax' | 'logic_mismatch' | 'timing_hazard' | 'structure' | 'general';
  title: string;
  summary: string;
  detailedPoints: string[];
  suggestedAction: string;
}

export interface ModelingStyleHint {
  style: ModelingStyle;
  label: string;
  badge: string;
  description: string;
  isCurrentStyle: boolean;
  guidance: string;
  keyConstructs: string[];
  syntaxSnippet: string;
  synthesisTip: string;
  suggestedAction: string;
  referenceStarter: string;
  referenceSolution: string;
}

export interface AllModelingHintsResult {
  detectedStyle: ModelingStyle;
  summary: string;
  isExecutionPassed: boolean;
  hints: {
    structural: ModelingStyleHint;
    dataflow: ModelingStyleHint;
    behavioral: ModelingStyleHint;
  };
}

/**
 * Accurately analyzes user code to determine whether it is predominantly
 * Structural (gate primitives/netlists), Dataflow (continuous assign),
 * or Behavioral (procedural always/process blocks).
 */
export function detectModelingStyle(code: string): ModelingStyle {
  if (!code) return 'dataflow';
  const clean = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ''); // strip comments

  // 1. Structural check: Gate primitives (and, nand, or, nor, xor, xnor, not, buf)
  const gatePrimitiveRegex = /\b(and|nand|or|nor|xor|xnor|not|buf)\s*(?:#\s*\([^)]*\)\s*)?(?:[a-zA-Z0-9_$]+\s*)?\(/i;
  if (gatePrimitiveRegex.test(clean)) {
    return 'structural';
  }

  // 2. Behavioral check: procedural blocks
  const behavioralRegex = /\b(always\s*@|always_comb|always_ff|always_latch|initial|process\s*\(|case\s*\(|if\s*\()/i;
  if (behavioralRegex.test(clean)) {
    return 'behavioral';
  }

  // 3. Dataflow check: continuous assign statements
  if (/\bassign\s+/.test(clean)) {
    return 'dataflow';
  }

  return 'dataflow';
}

/**
 * Generates an intelligent, context-aware debugging hint ONLY after code execution
 * when the code produces errors or fails testbench assertions.
 */
export function generatePostExecutionHint(
  problem: Problem,
  userCode: string,
  simulationResult: SimulationResult | null
): PostExecutionHint | null {
  if (!simulationResult || simulationResult.passed) {
    // No syntax/assertion failure hint if simulation hasn't run or passed
    return null;
  }

  const code = userCode || '';
  const lowerCode = code.toLowerCase();
  const errorMessage = (simulationResult.message || '').toLowerCase();
  const logs = simulationResult.logs || [];
  const logText = logs.join('\n').toLowerCase();

  // 1. Syntax / Compilation Failures
  if (errorMessage.includes('syntax') || errorMessage.includes('compilation') || logText.includes('syntax error')) {
    const detailedPoints: string[] = [];

    if (problem.topic === 'verilog' || problem.topic === 'systemverilog' || problem.topic === 'fpga' || problem.topic === 'dft') {
      if (!lowerCode.includes('endmodule')) {
        detailedPoints.push('Missing `endmodule` keyword at the end of your module definition.');
      }
      if (!lowerCode.includes('module')) {
        detailedPoints.push('Ensure your file starts with `module <module_name> (<port_list>);`.');
      }
      if ((code.match(/begin/g) || []).length !== (code.match(/end/g) || []).length) {
        detailedPoints.push('Unbalanced `begin ... end` block count detected. Check that every `begin` has a corresponding `end`.');
      }
      if (code.includes('always @') && !code.includes('begin') && code.split('\n').length > 5) {
        detailedPoints.push('Multi-statement `always` blocks require `begin` and `end` delimiters.');
      }
    } else if (problem.topic === 'vhdl') {
      if (!lowerCode.includes('architecture') || !lowerCode.includes('entity')) {
        detailedPoints.push('VHDL designs require both an `entity <name> is ... end entity;` and `architecture <arch> of <name> is ... end architecture;` construct.');
      }
    } else if (problem.topic === 'embedded_c') {
      detailedPoints.push('Check for missing statement terminators (`;`) or unclosed curly braces (`{ }`).');
    }

    if (detailedPoints.length === 0) {
      detailedPoints.push('Verify all port identifiers, wire/reg declarations, and semi-colons (`;`) at the end of each statement.');
      detailedPoints.push('Ensure all signals driven in procedural `always` blocks are declared as `reg` (or `logic` in SystemVerilog).');
    }

    return {
      type: 'syntax',
      title: 'Syntax & Compilation Diagnostic',
      summary: 'The hardware compiler encountered syntax errors while parsing your code.',
      detailedPoints,
      suggestedAction: 'Review the line declarations highlighted above and ensure standard HDL syntax formatting.'
    };
  }

  // 2. Logic / Testbench Assertion Failures
  const topicPoints: string[] = [];

  // Check specific problem hints if available
  if (problem.hints && problem.hints.length > 0) {
    topicPoints.push(problem.hints[0]);
    if (problem.hints.length > 1) {
      topicPoints.push(problem.hints[1]);
    }
  }

  // Hardware pattern checks
  if (problem.topic === 'verilog' || problem.topic === 'systemverilog') {
    // Sequential logic checks
    const hasClk = problem.testbenchConfig.signals.some(s => s.type === 'clock' || s.name.toLowerCase().includes('clk'));
    if (hasClk) {
      if (code.includes('=') && !code.includes('<=') && code.includes('always @(posedge')) {
        topicPoints.push('Sequential Warning: Use non-blocking assignments (`<=`) inside edge-triggered clocked `always @(posedge clk)` blocks to avoid race conditions.');
      }
      if (lowerCode.includes('rst') || lowerCode.includes('reset')) {
        topicPoints.push('Reset Check: Ensure your register reset condition initializes all output registers to their designated starting state (e.g. `0`).');
      }
    }

    // FSM checks
    if (lowerCode.includes('fsm') || lowerCode.includes('state') || problem.title.toLowerCase().includes('fsm') || problem.title.toLowerCase().includes('sequence')) {
      topicPoints.push('FSM Diagnostic: Ensure your next-state logic handles all states and includes a `default:` branch to prevent inferred latches.');
    }

    // Combinational checks
    if (code.includes('case') && !code.includes('default')) {
      topicPoints.push('Inferred Latch Risk: Your `case` statement does not specify a `default:` case. Add `default: ...` to guarantee complete combinational coverage.');
    }
  } else if (problem.topic === 'vhdl') {
    topicPoints.push('Ensure signal assignments use `<=` for signals and `:=` for variables inside processes.');
  } else if (problem.topic === 'linux') {
    topicPoints.push('Ensure your bash command outputs the exact requested file list or format without unnecessary text.');
  } else if (problem.topic === 'embedded_c' || problem.topic === 'mnemonics') {
    topicPoints.push('Verify memory-mapped register bitwise operations (`|=` for set, `&= ~` for clear).');
  }

  if (topicPoints.length === 0) {
    topicPoints.push('Compare your DUT output signal transitions with the expected stimulus values in the problem description.');
    topicPoints.push('Check arithmetic bitwidths to verify there is no unintentional truncation or overflow.');
  }

  return {
    type: 'logic_mismatch',
    title: 'Post-Execution Logic Diagnostic',
    summary: 'Your module compiled, but the testbench assertions detected an output mismatch during simulation.',
    detailedPoints: topicPoints.slice(0, 3),
    suggestedAction: 'Trace the waveform timing diagram below to compare your DUT response against expected cycle-by-cycle transitions.'
  };
}

/**
 * Generates post-execution modeling hints for ALL THREE hardware modeling styles
 * (Structural, Dataflow, and Behavioral) after code execution.
 */
export function generateAllModelingHints(
  problem: Problem,
  userCode: string,
  simulationResult: SimulationResult | null
): AllModelingHintsResult {
  const models = getModelingStylesForProblem(problem);
  const detectedStyle = detectModelingStyle(userCode);
  const isPassed = !!(simulationResult && simulationResult.passed);

  const styleNames: Record<ModelingStyle, string> = {
    structural: 'Structural Modeling (Gate-Level Netlist)',
    dataflow: 'Dataflow Modeling (Continuous Assignment)',
    behavioral: 'Behavioral Modeling (Procedural always / Process)'
  };

  const summary = isPassed
    ? `✓ Simulation Verified! Your active code implemented this circuit using ${styleNames[detectedStyle]}. Here is how to model the same circuit in all 3 paradigms:`
    : `Simulation completed with ${detectedStyle} modeling. Review the architectural hints below for all 3 modeling styles:`;

  // 1. Structural Hint
  const structuralGuidance = detectedStyle === 'structural'
    ? (isPassed 
        ? 'Your gate-level structural design passed all assertions! Gate primitives map directly to ASIC/FPGA standard cell libraries.'
        : 'In structural modeling, verify all internal wires are declared (`wire w1, w2;`) and that primitive port order follows `gate_type inst_name (output, input1, input2);`.')
    : `To implement this circuit using Structural Modeling, instantiate primitive gates (and, or, not, xor) interconnected by internal wire declarations to construct the Boolean logic network.`;

  const structuralSnippet = models.structural.keyConstructs.slice(0, 4).join('\n') || 'wire w1;\nand g1 (y, a, b);';

  const structuralHint: ModelingStyleHint = {
    style: 'structural',
    label: models.structural.label,
    badge: models.structural.badge,
    description: models.structural.description,
    isCurrentStyle: detectedStyle === 'structural',
    guidance: structuralGuidance,
    keyConstructs: models.structural.keyConstructs,
    syntaxSnippet: structuralSnippet,
    synthesisTip: 'Gate-level structural descriptions give precise control over logic depth, glitch minimization, and cell technology binding.',
    suggestedAction: detectedStyle === 'structural' ? 'Verify netlist connections with reference schematic.' : 'Try coding this circuit using gate primitives (and, or, xor, not).',
    referenceStarter: models.structural.starterCode,
    referenceSolution: models.structural.solutionCode
  };

  // 2. Dataflow Hint
  const dataflowGuidance = detectedStyle === 'dataflow'
    ? (isPassed
        ? 'Your continuous assignment dataflow logic verified successfully! Dataflow assign statements synthesize into optimal combinational logic trees.'
        : 'In dataflow modeling, ensure your `assign` equations cover all truth-table permutations without dangling terms. Check operator precedence with parentheses.')
    : `To implement this circuit using Dataflow Modeling, express the output signals using continuous assignment (\`assign output = expression;\`) with Boolean operators (&, |, ^, ~) or conditional ternary muxing (\`sel ? b : a\`).`;

  const dataflowSnippet = models.dataflow.keyConstructs.slice(0, 4).join('\n') || 'assign y = (sel) ? b : a;';

  const dataflowHint: ModelingStyleHint = {
    style: 'dataflow',
    label: models.dataflow.label,
    badge: models.dataflow.badge,
    description: models.dataflow.description,
    isCurrentStyle: detectedStyle === 'dataflow',
    guidance: dataflowGuidance,
    keyConstructs: models.dataflow.keyConstructs,
    syntaxSnippet: dataflowSnippet,
    synthesisTip: 'Logic synthesis tools easily optimize continuous assignments through Boolean factoring, Karnaugh mapping, and constant folding.',
    suggestedAction: detectedStyle === 'dataflow' ? 'Double-check Boolean logic operators and bit-slice boundaries.' : 'Try expressing this circuit with clean `assign` statements.',
    referenceStarter: models.dataflow.starterCode,
    referenceSolution: models.dataflow.solutionCode
  };

  // 3. Behavioral Hint
  const behavioralGuidance = detectedStyle === 'behavioral'
    ? (isPassed
        ? 'Your behavioral procedural implementation passed all verification tests! Procedural descriptions allow concise algorithmic expression.'
        : 'In behavioral modeling, ensure all branch paths (`if-else`, `case`) assign the output to avoid inferred transparent latches. In clocked blocks, use non-blocking (`<=`) assignments.')
    : `To implement this circuit using Behavioral Modeling, enclose the control flow inside an \`always @(*)\` block for combinational logic or \`always @(posedge clk)\` for sequential logic with \`case\` or \`if-else\` constructs.`;

  const behavioralSnippet = models.behavioral.keyConstructs.slice(0, 4).join('\n') || 'always @(*) begin\n  case (sel)\n    1\'b0: y = a;\n    1\'b1: y = b;\n  endcase\nend';

  const behavioralHint: ModelingStyleHint = {
    style: 'behavioral',
    label: models.behavioral.label,
    badge: models.behavioral.badge,
    description: models.behavioral.description,
    isCurrentStyle: detectedStyle === 'behavioral',
    guidance: behavioralGuidance,
    keyConstructs: models.behavioral.keyConstructs,
    syntaxSnippet: behavioralSnippet,
    synthesisTip: 'Always assign a default value before case/if branches in combinational always blocks to eliminate unintended transparent latch creation.',
    suggestedAction: detectedStyle === 'behavioral' ? 'Check complete branch coverage and blocking vs non-blocking rules.' : 'Try implementing this logic inside a procedural `always @(*)` or `always @(posedge clk)` block.',
    referenceStarter: models.behavioral.starterCode,
    referenceSolution: models.behavioral.solutionCode
  };

  return {
    detectedStyle,
    summary,
    isExecutionPassed: isPassed,
    hints: {
      structural: structuralHint,
      dataflow: dataflowHint,
      behavioral: behavioralHint
    }
  };
}
