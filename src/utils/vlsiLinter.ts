export interface LintWarning {
  line?: number;
  type: 'error' | 'warning' | 'hint';
  title: string;
  message: string;
  codeSnippet?: string;
  hintAlone: string;
}

export function lintVerilogCode(code: string, topic?: string): LintWarning[] {
  const warnings: LintWarning[] = [];
  if (!code || topic === 'linux') return warnings;

  const lines = code.split('\n');

  let inSequentialBlock = false;
  let inCombinationalBlock = false;
  let blockStartLine = 0;
  let hasModule = false;
  let hasEndmodule = false;
  let openBraces = 0;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Skip comments
    if (line.startsWith('//') || line.startsWith('/*')) continue;

    if (/\bmodule\b/.test(line)) hasModule = true;
    if (/\bendmodule\b/.test(line)) hasEndmodule = true;

    // Check edge-triggered sequential block
    if (/\balways\s*@\s*\(\s*(posedge|negedge)/.test(line) || /\balways_ff\b/.test(line)) {
      inSequentialBlock = true;
      inCombinationalBlock = false;
      blockStartLine = lineNum;
    }

    // Check combinational block
    if (/\balways\s*@\s*\(\s*\*\s*\)/.test(line) || /\balways_comb\b/.test(line)) {
      inCombinationalBlock = true;
      inSequentialBlock = false;
      blockStartLine = lineNum;
    }

    if (/\bend\b/.test(line) && !/\balways\b/.test(line)) {
      // end of block
    }

    // Check Rule 1: Blocking assignment '=' inside sequential always block
    if (inSequentialBlock) {
      // Look for '=' that is NOT '<=', '==', '!=', '>=', '<='
      const assignmentMatch = line.match(/^([^=<>!]+)\s*=\s*([^=;]+);/);
      if (assignmentMatch && !line.includes('<=') && !line.includes('==') && !line.includes('!=')) {
        const varName = assignmentMatch[1].trim();
        warnings.push({
          line: lineNum,
          type: 'warning',
          title: 'IEEE 1364 Rule: Sequential Assignment',
          message: `Blocking assignment '=' used on variable '${varName}' inside edge-triggered sequential block (Line ${lineNum}).`,
          hintAlone: `Hint: In IEEE 1364/1800 Verilog, edge-triggered sequential blocks (always @(posedge clk)) should use non-blocking assignments ('${varName} <= ...') to prevent simulation race conditions.`
        });
      }
    }

    // Check Rule 2: Non-blocking assignment '<=' inside combinational always block
    if (inCombinationalBlock) {
      if (line.includes('<=') && !line.includes('==') && !line.includes('=')) {
        const varMatch = line.match(/^([^=<>!]+)\s*<=\s*([^=;]+);/);
        const varName = varMatch ? varMatch[1].trim() : 'signal';
        warnings.push({
          line: lineNum,
          type: 'warning',
          title: 'IEEE 1364 Rule: Combinational Assignment',
          message: `Non-blocking assignment '<=' used on variable '${varName}' inside combinational logic block (Line ${lineNum}).`,
          hintAlone: `Hint: Combinational logic blocks (always @(*)) should use blocking assignments ('${varName} = ...') so that signal evaluations propagate immediately in the current delta cycle.`
        });
      }
    }

    // Check Rule 3: Input port assigned on LHS
    if (/^\s*input\b/.test(line)) {
      const inputVarMatch = line.match(/\binput\s+(?:wire\s+|reg\s+)?(?:\[[^\]]+\]\s+)?([a-zA-Z0-9_]+)/);
      if (inputVarMatch) {
        const inputVar = inputVarMatch[1];
        // Check if inputVar is ever assigned to in the rest of code
        const assignReg = new RegExp(`\\b${inputVar}\\s*(<=|=)\\s*`);
        for (let j = i + 1; j < lines.length; j++) {
          if (assignReg.test(lines[j]) && !lines[j].includes('==')) {
            warnings.push({
              line: j + 1,
              type: 'error',
              title: 'VLSI Rule: Input Port Re-assignment',
              message: `Input port '${inputVar}' is assigned to on Line ${j + 1}.`,
              hintAlone: `Hint: In hardware design, input ports are driven externally by top-level modules. You cannot assign values to an input port inside the module.`
            });
            break;
          }
        }
      }
    }
  }

  // Check Rule 4: Module declaration balance
  if (hasModule && !hasEndmodule) {
    warnings.push({
      type: 'error',
      title: 'Verilog Syntax: Missing endmodule',
      message: 'Module declaration started but missing closing "endmodule" statement.',
      hintAlone: 'Hint: Ensure your Verilog code closes with the "endmodule" keyword at the end of the file.'
    });
  }

  // Check Rule 5: Latch inference check in combinational logic
  if (code.includes('always @(*)') || code.includes('always_comb')) {
    if (code.includes('case') && !code.includes('default:')) {
      warnings.push({
        type: 'warning',
        title: 'Synthesis Warning: Unintended Latch Inference',
        message: 'Combinational case statement is missing a default: branch.',
        hintAlone: 'Hint: To avoid inferring unwanted transparent latches in synthesis, every combinational case statement must provide a default: branch or specify all possible input states.'
      });
    }
  }

  return warnings;
}
