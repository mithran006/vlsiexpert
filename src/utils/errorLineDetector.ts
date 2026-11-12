import { Problem, SimulationResult } from '../types';

export interface SourceErrorInfo {
  errorLine: number;
  errorColumn?: number;
  errorSnippet: string;
  errorType: 'syntax' | 'runtime' | 'logic';
  errorMessage: string;
  errorHint: string;
}

/**
 * Accurately analyzes user code across all problem topics to pinpoint the exact
 * line number, snippet, and cause of any syntax or logic error.
 */
export function detectSourceError(
  code: string,
  problem: Problem,
  simulationResult?: SimulationResult | null
): SourceErrorInfo | null {
  if (!code || !code.trim()) {
    return {
      errorLine: 1,
      errorSnippet: '// Empty editor',
      errorType: 'syntax',
      errorMessage: 'Code editor is empty. Please enter implementation.',
      errorHint: 'Write your source code or use clean template.'
    };
  }

  const lines = code.split('\n');
  const topic = (problem.topic || 'verilog').toLowerCase();

  // 1. Check Unmatched Brackets, Parentheses, Braces across lines (except comments/strings)
  const bracketErr = checkBracketBalance(lines, topic);
  if (bracketErr) return bracketErr;

  // 2. Language-Specific Syntax Checks (Before Simulation)
  if (topic === 'verilog' || topic === 'systemverilog' || topic === 'fpga' || topic === 'dft' || topic === 'soc_design' || topic === 'uvm') {
    const verilogError = checkVerilogSyntax(lines, code);
    if (verilogError) return verilogError;
  } else if (topic === 'vhdl') {
    const vhdlError = checkVhdlSyntax(lines, code);
    if (vhdlError) return vhdlError;
  } else if (topic === 'embedded_c' || topic === 'rtos_problems') {
    const cError = checkCSyntax(lines, code);
    if (cError) return cError;
  } else if (topic === 'arduino') {
    const ardError = checkArduinoSyntax(lines, code);
    if (ardError) return ardError;
  } else if (topic === 'python_hw' || topic === 'cv_robotics' || topic === 'quantum_prog') {
    const pyError = checkPythonSyntax(lines, code, topic);
    if (pyError) return pyError;
  } else if (topic === 'linux') {
    const bashError = checkBashSyntax(lines, code);
    if (bashError) return bashError;
  } else if (topic === 'mnemonics') {
    const asmError = checkAsmSyntax(lines, code);
    if (asmError) return asmError;
  }

  // 3. Logic Verification Mismatch Checks (From Simulation)
  if (simulationResult && !simulationResult.passed) {
    if (simulationResult.errorLine) {
      const lineIdx = simulationResult.errorLine - 1;
      const snippet = lines[lineIdx]?.trim() || lines[lineIdx] || '';
      return {
        errorLine: simulationResult.errorLine,
        errorColumn: simulationResult.errorColumn || 1,
        errorSnippet: snippet,
        errorType: simulationResult.errorType || 'logic',
        errorMessage: simulationResult.message || 'Output logic mismatch',
        errorHint: simulationResult.errorHint || 'Check logic assignments on this line.'
      };
    }

    const failedVector = simulationResult.testVectors?.find(v => !v.passed);
    if (failedVector && failedVector.mismatches && failedVector.mismatches.length > 0) {
      const failingSig = failedVector.mismatches[0];
      const cleanSigName = failingSig.replace(/\[.*\]/, '');
      const expectedVal = failedVector.expectedOutputs[failingSig] ?? '?';
      const actualVal = failedVector.actualOutputs[failingSig] ?? '?';

      const driveLine = findSignalDriveLine(lines, cleanSigName);
      if (driveLine) {
        return {
          errorLine: driveLine.lineNum,
          errorColumn: driveLine.colNum,
          errorSnippet: driveLine.snippet,
          errorType: 'logic',
          errorMessage: `Logic Error on Line ${driveLine.lineNum}: Signal '${failingSig}' produced '${actualVal}', expected '${expectedVal}' (Cycle ${failedVector.cycle}).`,
          errorHint: `Verify the logic expression or condition assigning '${cleanSigName}' on Line ${driveLine.lineNum}.`
        };
      }
    }

    const firstCodeLine = lines.findIndex(l => {
      const t = l.trim();
      return t && !t.startsWith('//') && !t.startsWith('/*') && !t.startsWith('#') && !t.startsWith('`');
    });

    const fallbackLine = firstCodeLine !== -1 ? firstCodeLine + 1 : 1;
    return {
      errorLine: fallbackLine,
      errorSnippet: lines[fallbackLine - 1]?.trim() || '',
      errorType: 'logic',
      errorMessage: simulationResult.message || 'Verification failed: Output does not match expected specification.',
      errorHint: 'Review your logic equations, conditions, and reset handling.'
    };
  }

  return null;
}

/**
 * Generic bracket and parenthesis matching across code lines
 */
function checkBracketBalance(lines: string[], topic: string): SourceErrorInfo | null {
  const isPython = topic === 'python_hw' || topic === 'cv_robotics' || topic === 'quantum_prog';
  const isBash = topic === 'linux';
  const isAsm = topic === 'mnemonics';
  if (isAsm) return null;

  interface BracketEntry {
    char: string;
    line: number;
    col: number;
  }
  const stack: BracketEntry[] = [];
  let inBlockComment = false;
  let inTripleQuote: string | null = null; // Python """ or ''' multiline strings

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const raw = lines[i];

    let inString: string | null = null;

    for (let c = 0; c < raw.length; c++) {
      const ch = raw[c];
      const next = raw[c + 1] || '';
      const next2 = raw[c + 2] || '';

      // Python triple quote handling
      if (isPython) {
        if (!inString && !inBlockComment && (ch === '"' || ch === "'") && next === ch && next2 === ch) {
          const quoteType = ch + ch + ch;
          if (!inTripleQuote) {
            inTripleQuote = quoteType;
            c += 2;
            continue;
          } else if (inTripleQuote === quoteType) {
            inTripleQuote = null;
            c += 2;
            continue;
          }
        }
        if (inTripleQuote) continue;
      }

      // Block comment handling (C, C++, Verilog, SystemVerilog)
      if (!inBlockComment && !inString && ch === '/' && next === '*') {
        inBlockComment = true;
        c++;
        continue;
      }
      if (inBlockComment) {
        if (ch === '*' && next === '/') {
          inBlockComment = false;
          c++;
        }
        continue;
      }

      // Single line comments
      if (!inString && !inTripleQuote) {
        if (ch === '/' && next === '/') break;
        if (ch === '-' && next === '-' && topic === 'vhdl') break;
        if (ch === '#' && (isPython || isBash)) break;
      }

      // String literal handling (single line)
      if (ch === '"' || ch === "'") {
        if (!inString) {
          inString = ch;
        } else if (inString === ch && raw[c - 1] !== '\\') {
          inString = null;
        }
        continue;
      }
      if (inString) continue;

      // Track opening brackets
      if (ch === '(' || ch === '[' || ch === '{') {
        stack.push({ char: ch, line: lineNum, col: c + 1 });
      } else if (ch === ')' || ch === ']' || ch === '}') {
        if (stack.length === 0) {
          return {
            errorLine: lineNum,
            errorColumn: c + 1,
            errorSnippet: raw.trim(),
            errorType: 'syntax',
            errorMessage: `Syntax Error on Line ${lineNum}: Unmatched closing '${ch}'.`,
            errorHint: `Remove extra '${ch}' or add the matching opening bracket.`
          };
        }
        const top = stack.pop()!;
        const expected = top.char === '(' ? ')' : top.char === '[' ? ']' : '}';
        if (ch !== expected) {
          return {
            errorLine: lineNum,
            errorColumn: c + 1,
            errorSnippet: raw.trim(),
            errorType: 'syntax',
            errorMessage: `Syntax Error on Line ${lineNum}: Mismatched bracket '${ch}', expected '${expected}' matching '${top.char}' from Line ${top.line}.`,
            errorHint: `Replace '${ch}' with '${expected}' on Line ${lineNum}.`
          };
        }
      }
    }
  }

  if (stack.length > 0) {
    const unclosed = stack[stack.length - 1];
    const expected = unclosed.char === '(' ? ')' : unclosed.char === '[' ? ']' : '}';
    return {
      errorLine: unclosed.line,
      errorColumn: unclosed.col,
      errorSnippet: lines[unclosed.line - 1]?.trim() || unclosed.char,
      errorType: 'syntax',
      errorMessage: `Syntax Error: Unclosed '${unclosed.char}' opened on Line ${unclosed.line} (missing '${expected}').`,
      errorHint: `Add matching '${expected}' to close the expression opened on Line ${unclosed.line}.`
    };
  }

  return null;
}

/**
 * Searches for the line that assigns or drives a given output signal name.
 */
function findSignalDriveLine(lines: string[], sigName: string): { lineNum: number; colNum: number; snippet: string } | null {
  const cleanSig = sigName.trim();
  const assignRegexes = [
    new RegExp(`\\bassign\\s+${cleanSig}\\b`),
    new RegExp(`\\b${cleanSig}\\s*<=`),
    new RegExp(`\\b${cleanSig}\\s*=\\s*[^=]`),
    new RegExp(`\\b${cleanSig}\\b\\s*<=`),
    new RegExp(`outVal|y|dout|sum|cout|q|out|result`)
  ];

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const trimmed = raw.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('module') || trimmed.startsWith('input') || trimmed.startsWith('output')) {
      continue;
    }

    for (const reg of assignRegexes) {
      if (reg.test(trimmed)) {
        return {
          lineNum: i + 1,
          colNum: raw.indexOf(cleanSig) !== -1 ? raw.indexOf(cleanSig) + 1 : 1,
          snippet: trimmed
        };
      }
    }
  }

  return null;
}

/**
 * Verilog / SystemVerilog syntax rules check
 */
function checkVerilogSyntax(lines: string[], fullCode: string): SourceErrorInfo | null {
  let hasModule = false;
  let hasEndmodule = false;
  let moduleLine = 1;
  const beginStack: number[] = [];

  const typoMap: Record<string, string> = {
    'assgn': 'assign',
    'asifn': 'assign',
    'asign': 'assign',
    'modul': 'module',
    'moudle': 'module',
    'modue': 'module',
    'endmodul': 'endmodule',
    'endmoudle': 'endmodule',
    'alway': 'always',
    'allways': 'always',
    'alwasy': 'always',
    'beginn': 'begin',
    'began': 'begin',
    'endd': 'end',
    'inpu': 'input',
    'iput': 'input',
    'outpu': 'output',
    'optput': 'output',
    'wir': 'wire',
    'wier': 'wire',
    'regg': 'reg'
  };

  let insideModule = false;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i].trim();

    if (!line || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*') || line.startsWith('`')) continue;

    const firstWord = (line.split(/[\s(;=,[{]/)[0] || '').toLowerCase();

    // Check keyword typos
    if (typoMap[firstWord]) {
      return {
        errorLine: lineNum,
        errorSnippet: line,
        errorType: 'syntax',
        errorMessage: `Syntax Error on Line ${lineNum}: Misspelled keyword '${firstWord}', did you mean '${typoMap[firstWord]}'?`,
        errorHint: `Change '${firstWord}' to '${typoMap[firstWord]}' on Line ${lineNum}.`
      };
    }

    if (/\bmodule\b/.test(line)) {
      hasModule = true;
      insideModule = true;
      moduleLine = lineNum;
    }
    if (/\bendmodule\b/.test(line)) {
      hasEndmodule = true;
      insideModule = false;
    }

    // Check begin / end pairing
    if (/\bbegin\b/.test(line) && !line.startsWith('//')) {
      beginStack.push(lineNum);
    }
    if (/\bend\b/.test(line) && !/\bendmodule\b|\bendcase\b|\bendfunction\b|\bendtask\b|\bendgenerate\b/.test(line)) {
      if (beginStack.length > 0) {
        beginStack.pop();
      } else {
        return {
          errorLine: lineNum,
          errorSnippet: line,
          errorType: 'syntax',
          errorMessage: `Syntax Error on Line ${lineNum}: Unmatched 'end' keyword (no matching 'begin').`,
          errorHint: `Remove extra 'end' on Line ${lineNum} or add missing 'begin'.`
        };
      }
    }

    if (insideModule && !line.startsWith('module') && !line.startsWith('endmodule')) {
      const codeClean = line.replace(/\/\/.*$/, '').trim();

      // Check trailing operator before semicolon (e.g. assign y = a & ;)
      if (/([&|^+*\/%~-]|&&|\|\||==|!=|<=|>=|<<|>>)\s*;$/.test(codeClean)) {
        return {
          errorLine: lineNum,
          errorSnippet: line,
          errorType: 'syntax',
          errorMessage: `Syntax Error on Line ${lineNum}: Trailing operator with missing right-hand operand before ';'.`,
          errorHint: `Complete the expression or remove the trailing operator on Line ${lineNum}.`
        };
      }

      // Check empty assignment expression (e.g. assign y = ;)
      if (/^(?:assign\s+)?[a-zA-Z0-9_$\[\]:\s]+(?:<=|=)\s*;$/.test(codeClean)) {
        return {
          errorLine: lineNum,
          errorSnippet: line,
          errorType: 'syntax',
          errorMessage: `Syntax Error on Line ${lineNum}: Empty assignment expression before ';'.`,
          errorHint: `Provide an expression to assign on Line ${lineNum}.`
        };
      }

      // Check assignment with equality '==' (e.g. assign y == a & b;)
      if (/^assign\s+[a-zA-Z0-9_$\[\]:\s]+==/.test(codeClean)) {
        return {
          errorLine: lineNum,
          errorSnippet: line,
          errorType: 'syntax',
          errorMessage: `Syntax Error on Line ${lineNum}: Found '==' in continuous assignment. Did you mean '='?`,
          errorHint: `Replace '==' with '=' on Line ${lineNum}.`
        };
      }
    }

    // Check missing semicolon on assign, wire, reg, parameter statements (only for completed statements)
    const codeNoComment = line.replace(/\/\/.*$/, '').trim();
    const isInsidePorts = !insideModule || codeNoComment.startsWith('module') || codeNoComment.includes('(') && !codeNoComment.includes(';');
    const needsSemicolon =
      !isInsidePorts &&
      (/^(assign\s+[a-zA-Z0-9_$]+|(?:wire|reg|logic|localparam|parameter)\s+)/.test(codeNoComment) ||
      (/<=|=/.test(codeNoComment) && !codeNoComment.includes('(') && !codeNoComment.startsWith('if') && !codeNoComment.startsWith('for') && !codeNoComment.startsWith('case') && !codeNoComment.endsWith(',')));

    if (
      needsSemicolon &&
      !codeNoComment.endsWith(';') &&
      !codeNoComment.endsWith('{') &&
      !codeNoComment.endsWith(',') &&
      !codeNoComment.endsWith(':') &&
      !codeNoComment.endsWith('?') &&
      !codeNoComment.endsWith('&') &&
      !codeNoComment.endsWith('|') &&
      !codeNoComment.endsWith('^') &&
      !codeNoComment.endsWith('+') &&
      !codeNoComment.endsWith('-')
    ) {
      const nextLine = lines[i + 1]?.trim() || '';
      if (
        !nextLine.startsWith(';') &&
        !nextLine.startsWith('?') &&
        !nextLine.startsWith(':') &&
        !nextLine.startsWith('+') &&
        !nextLine.startsWith('-') &&
        !nextLine.startsWith('|') &&
        !nextLine.startsWith('&') &&
        !nextLine.startsWith('^') &&
        !nextLine.startsWith('(') &&
        !nextLine.startsWith(')')
      ) {
        return {
          errorLine: lineNum,
          errorSnippet: line,
          errorType: 'syntax',
          errorMessage: `Syntax Error on Line ${lineNum}: Missing semicolon ';' at end of statement.`,
          errorHint: `Add a semicolon ';' at the end of Line ${lineNum}.`
        };
      }
    }
  }

  if (!hasModule) {
    return {
      errorLine: 1,
      errorSnippet: lines[0]?.trim() || '',
      errorType: 'syntax',
      errorMessage: 'Syntax Error on Line 1: Missing "module" declaration in Verilog source.',
      errorHint: 'Declare your module with: module <name> ( <ports> ); ... endmodule'
    };
  }

  if (hasModule && !hasEndmodule) {
    return {
      errorLine: lines.length,
      errorSnippet: lines[lines.length - 1]?.trim() || '',
      errorType: 'syntax',
      errorMessage: `Syntax Error: Module opened on Line ${moduleLine} is missing closing "endmodule".`,
      errorHint: 'Add "endmodule" at the end of the file.'
    };
  }

  if (beginStack.length > 0) {
    const unclosedLine = beginStack[beginStack.length - 1];
    return {
      errorLine: unclosedLine,
      errorSnippet: lines[unclosedLine - 1]?.trim() || '',
      errorType: 'syntax',
      errorMessage: `Syntax Error: 'begin' opened on Line ${unclosedLine} has no matching 'end'.`,
      errorHint: `Add 'end' to close the procedural block starting on Line ${unclosedLine}.`
    };
  }

  return null;
}

/**
 * VHDL syntax check
 */
function checkVhdlSyntax(lines: string[], fullCode: string): SourceErrorInfo | null {
  let hasEntity = false;
  let hasArchitecture = false;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i].trim().toLowerCase();

    if (line.startsWith('--')) continue;

    if (line.includes('entity ') && line.includes(' is')) hasEntity = true;
    if (line.includes('architecture ') && line.includes(' of ')) hasArchitecture = true;

    // Check VHDL assignment operator
    if (line.includes(' = ') && !line.includes('<=') && !line.includes(':=') && !line.includes('when') && !line.includes('generic')) {
      if (/^[a-zA-Z0-9_]+\s*=\s*/.test(line)) {
        return {
          errorLine: lineNum,
          errorSnippet: lines[i].trim(),
          errorType: 'syntax',
          errorMessage: `VHDL Syntax Error on Line ${lineNum}: Use signal assignment '<=' instead of '='.`,
          errorHint: `In VHDL, signal assignments use '<=' (e.g. y <= a and b;).`
        };
      }
    }
  }

  if (!hasEntity && !hasArchitecture) {
    return {
      errorLine: 1,
      errorSnippet: lines[0]?.trim() || '',
      errorType: 'syntax',
      errorMessage: 'VHDL Syntax Error: Missing entity and architecture declarations.',
      errorHint: 'VHDL requires: entity <name> is ... end entity; architecture ... begin ... end architecture;'
    };
  }

  return null;
}

/**
 * Embedded C / RTOS syntax check
 */
function checkCSyntax(lines: string[], fullCode: string): SourceErrorInfo | null {
  const typoMap: Record<string, string> = {
    'vodi': 'void',
    'itn': 'int',
    'shrot': 'short',
    'lng': 'long',
    'whiel': 'while',
    'retrun': 'return',
    'flota': 'float',
    'doubel': 'double',
    'strcut': 'struct',
    'volatle': 'volatile',
    'unsgined': 'unsigned'
  };

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i].trim();

    if (!line || line.startsWith('//') || line.startsWith('/*') || line.startsWith('#')) continue;

    const firstWord = (line.split(/[\s(;=,[{]/)[0] || '').toLowerCase();
    if (typoMap[firstWord]) {
      return {
        errorLine: lineNum,
        errorSnippet: line,
        errorType: 'syntax',
        errorMessage: `C Syntax Error on Line ${lineNum}: Misspelled keyword '${firstWord}', did you mean '${typoMap[firstWord]}'?`,
        errorHint: `Change '${firstWord}' to '${typoMap[firstWord]}' on Line ${lineNum}.`
      };
    }

    // Check missing semicolon
    const codeNoComment = line.replace(/\/\/.*$/, '').trim();
    if (!codeNoComment) continue;

    // Check if line continues on next line due to open brackets
    let openCount = 0;
    for (const c of codeNoComment) {
      if (c === '(' || c === '[' || c === '{') openCount++;
      else if (c === ')' || c === ']' || c === '}') openCount--;
    }
    if (openCount > 0) continue;

    const endsWithContinuation =
      codeNoComment.endsWith(';') ||
      codeNoComment.endsWith('{') ||
      codeNoComment.endsWith('}') ||
      codeNoComment.endsWith(',') ||
      codeNoComment.endsWith(':') ||
      codeNoComment.endsWith('\\') ||
      codeNoComment.endsWith('(') ||
      codeNoComment.endsWith('[') ||
      codeNoComment.endsWith('+') ||
      codeNoComment.endsWith('-') ||
      codeNoComment.endsWith('*') ||
      codeNoComment.endsWith('/') ||
      codeNoComment.endsWith('%') ||
      codeNoComment.endsWith('&') ||
      codeNoComment.endsWith('|') ||
      codeNoComment.endsWith('^') ||
      codeNoComment.endsWith('?') ||
      codeNoComment.endsWith('=') ||
      codeNoComment.endsWith('&&') ||
      codeNoComment.endsWith('||');

    const nextLine = lines[i + 1]?.trim().replace(/\/\/.*$/, '').trim() || '';
    const nextContinues =
      nextLine.startsWith('+') ||
      nextLine.startsWith('-') ||
      nextLine.startsWith('*') ||
      nextLine.startsWith('/') ||
      nextLine.startsWith('%') ||
      nextLine.startsWith('&') ||
      nextLine.startsWith('|') ||
      nextLine.startsWith('^') ||
      nextLine.startsWith('?') ||
      nextLine.startsWith(':') ||
      nextLine.startsWith(';') ||
      nextLine.startsWith(',') ||
      nextLine.startsWith('.') ||
      nextLine.startsWith('->') ||
      nextLine.startsWith(')') ||
      nextLine.startsWith(']');

    const isControlHeader =
      codeNoComment.startsWith('if') ||
      codeNoComment.startsWith('else') ||
      codeNoComment.startsWith('for') ||
      codeNoComment.startsWith('while') ||
      codeNoComment.startsWith('switch') ||
      codeNoComment.startsWith('case') ||
      codeNoComment.startsWith('default') ||
      codeNoComment.startsWith('#') ||
      codeNoComment.startsWith('typedef');

    const isFunctionSignature =
      (codeNoComment.startsWith('void ') ||
       codeNoComment.startsWith('int ') ||
       codeNoComment.startsWith('char ') ||
       codeNoComment.startsWith('float ') ||
       codeNoComment.startsWith('double ') ||
       codeNoComment.startsWith('uint') ||
       codeNoComment.startsWith('bool ')) &&
      codeNoComment.endsWith(')') &&
      (nextLine.startsWith('{') || nextLine.length === 0);

    const requiresSemi =
      !endsWithContinuation &&
      !nextContinues &&
      !isControlHeader &&
      !isFunctionSignature &&
      (codeNoComment.includes('=') ||
       codeNoComment.startsWith('return') ||
       codeNoComment.includes('++') ||
       codeNoComment.includes('--') ||
       /^[a-zA-Z_][a-zA-Z0-9_]*\s*\(.*?\)$/.test(codeNoComment));

    if (requiresSemi) {
      return {
        errorLine: lineNum,
        errorSnippet: line,
        errorType: 'syntax',
        errorMessage: `C Syntax Error on Line ${lineNum}: Missing semicolon ';' at end of statement.`,
        errorHint: `Add ';' at the end of Line ${lineNum}.`
      };
    }
  }

  return null;
}

/**
 * Arduino syntax check
 */
function checkArduinoSyntax(lines: string[], fullCode: string): SourceErrorInfo | null {
  const typoMap: Record<string, string> = {
    'pinmde': 'pinMode',
    'pinmode': 'pinMode',
    'pin_mode': 'pinMode',
    'digtalwrite': 'digitalWrite',
    'digitalwrit': 'digitalWrite',
    'digital_write': 'digitalWrite',
    'digtalread': 'digitalRead',
    'digitalread': 'digitalRead',
    'digital_read': 'digitalRead',
    'analogred': 'analogRead',
    'analog_read': 'analogRead',
    'analogwrit': 'analogWrite',
    'analog_write': 'analogWrite',
    'serail.print': 'Serial.print',
    'serail.begin': 'Serial.begin'
  };

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const lower = lines[i].toLowerCase();
    for (const [typo, correct] of Object.entries(typoMap)) {
      if (lower.includes(typo)) {
        return {
          errorLine: lineNum,
          errorSnippet: lines[i].trim(),
          errorType: 'syntax',
          errorMessage: `Arduino Syntax Error on Line ${lineNum}: Typo '${typo}', did you mean '${correct}'?`,
          errorHint: `Change '${typo}' to '${correct}' on Line ${lineNum}.`
        };
      }
    }
  }

  const hasSetup = /\bvoid\s+setup\s*\(/.test(fullCode);
  const hasLoop = /\bvoid\s+loop\s*\(/.test(fullCode);

  if (!hasSetup || !hasLoop) {
    return {
      errorLine: 1,
      errorSnippet: lines[0]?.trim() || '',
      errorType: 'syntax',
      errorMessage: `Arduino Syntax Error: Missing standard setup() or loop() functions.`,
      errorHint: 'Arduino sketches require both "void setup() { ... }" and "void loop() { ... }".'
    };
  }

  return checkCSyntax(lines, fullCode);
}

/**
 * Python / OpenCV / Quantum syntax check
 */
function checkPythonSyntax(lines: string[], fullCode: string, topic: string): SourceErrorInfo | null {
  const typoMap: Record<string, string> = {
    'def_': 'def',
    'fuction': 'def',
    'whiel': 'while',
    'retrun': 'return',
    'eliff': 'elif',
    'improt': 'import',
    'clss': 'class'
  };

  const cvTypoMap: Record<string, string> = {
    'cv2.cvtcolr': 'cv2.cvtColor',
    'cv2.cvcolor': 'cv2.cvtColor',
    'cv2.imrad': 'cv2.imread',
    'cv2.inrang': 'cv2.inRange',
    'cv2.findcontour': 'cv2.findContours',
    'cv2.cany': 'cv2.Canny',
    'cv2.gausianblur': 'cv2.GaussianBlur',
    'cv2.waitkey': 'cv2.waitKey',
    'cv2.imshoww': 'cv2.imshow',
    'cv2.destroyallwindowss': 'cv2.destroyAllWindows',
    'cv2.momentss': 'cv2.moments'
  };

  const mpyTypoMap: Record<string, string> = {
    'machine.pin(': 'machine.Pin(',
    'machine.i2c(': 'machine.I2C(',
    'machine.adc(': 'machine.ADC(',
    'machine.pwm(': 'machine.PWM(',
    '.valuee(': '.value(',
    '.on_()': '.on()',
    '.off_()': '.off()'
  };

  let inMultilineTripleQuote: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Check for triple quote transitions
    let tempStr = rawLine;
    let quoteIdx = 0;
    while (quoteIdx < tempStr.length) {
      if (!inMultilineTripleQuote) {
        if (tempStr.substring(quoteIdx, quoteIdx + 3) === '"""') {
          inMultilineTripleQuote = '"""';
          quoteIdx += 3;
          continue;
        } else if (tempStr.substring(quoteIdx, quoteIdx + 3) === "'''") {
          inMultilineTripleQuote = "'''";
          quoteIdx += 3;
          continue;
        }
      } else {
        if (tempStr.substring(quoteIdx, quoteIdx + 3) === inMultilineTripleQuote) {
          inMultilineTripleQuote = null;
          quoteIdx += 3;
          continue;
        }
      }
      quoteIdx++;
    }

    if (inMultilineTripleQuote) continue;
    if (!line || line.startsWith('#')) continue;

    const firstWord = (line.split(/[\s(:=]/)[0] || '').toLowerCase();
    if (typoMap[firstWord]) {
      return {
        errorLine: lineNum,
        errorSnippet: line,
        errorType: 'syntax',
        errorMessage: `Python Syntax Error on Line ${lineNum}: Misspelled keyword '${firstWord}', did you mean '${typoMap[firstWord]}'?`,
        errorHint: `Change '${firstWord}' to '${typoMap[firstWord]}' on Line ${lineNum}.`
      };
    }

    // Check OpenCV method typos
    if (topic === 'cv_robotics') {
      const lowerLine = line.toLowerCase();
      for (const [typo, correct] of Object.entries(cvTypoMap)) {
        if (lowerLine.includes(typo)) {
          return {
            errorLine: lineNum,
            errorSnippet: line,
            errorType: 'syntax',
            errorMessage: `OpenCV Syntax Error on Line ${lineNum}: '${typo}' is not a valid OpenCV function, did you mean '${correct}'?`,
            errorHint: `Use '${correct}' instead.`
          };
        }
      }
    }

    // Check MicroPython method typos
    if (topic === 'python_hw') {
      const lowerLine = line.toLowerCase();
      for (const [typo, correct] of Object.entries(mpyTypoMap)) {
        if (lowerLine.includes(typo)) {
          return {
            errorLine: lineNum,
            errorSnippet: line,
            errorType: 'syntax',
            errorMessage: `MicroPython Syntax Error on Line ${lineNum}: Typo in hardware API '${typo}', did you mean '${correct}'?`,
            errorHint: `Use '${correct}' instead.`
          };
        }
      }
    }

    // Check missing colon on def, if, for, while, class, elif, else, with, try, except, finally
    const colonKeywords = /^(def|if|for|while|class|elif|else|with|try|except|finally)\b/;
    if (colonKeywords.test(line)) {
      // Find full header statement in case it spans multiple lines with brackets or backslashes
      let headerText = line.replace(/#.*$/, '').trim();
      let headerEndLine = lineNum;
      let parenBalance = 0;
      for (const ch of headerText) {
        if (ch === '(' || ch === '[' || ch === '{') parenBalance++;
        else if (ch === ')' || ch === ']' || ch === '}') parenBalance--;
      }

      while ((parenBalance > 0 || headerText.endsWith('\\')) && headerEndLine < lines.length) {
        headerEndLine++;
        const nextPart = lines[headerEndLine - 1].replace(/#.*$/, '').trim();
        headerText = headerText.replace(/\\$/, '') + ' ' + nextPart;
        for (const ch of nextPart) {
          if (ch === '(' || ch === '[' || ch === '{') parenBalance++;
          else if (ch === ')' || ch === ']' || ch === '}') parenBalance--;
        }
      }

      const cleanHeader = headerText.trim();
      if (!cleanHeader.endsWith(':')) {
        return {
          errorLine: headerEndLine,
          errorSnippet: lines[headerEndLine - 1]?.trim() || line,
          errorType: 'syntax',
          errorMessage: `Python Syntax Error on Line ${headerEndLine}: Missing colon ':' at end of header.`,
          errorHint: `Add a colon ':' at the end of statement on Line ${headerEndLine}.`
        };
      }

      // Check accidental assignment '=' instead of '==' in conditions
      // Ignore keyword arguments inside call parens or walrus :=
      if (/^(if|elif|while)\b/.test(cleanHeader)) {
        // Strip out function calls and expressions in parens
        let condWithoutParens = cleanHeader.replace(/^(if|elif|while)\s+/, '').replace(/:$/, '').trim();
        // Remove innermost balanced parens iteratively to leave only top-level condition
        let prev = '';
        while (prev !== condWithoutParens) {
          prev = condWithoutParens;
          condWithoutParens = condWithoutParens.replace(/\([^()]*\)/g, '()');
        }
        if (/(?<![=!<>:])=(?![=])/.test(condWithoutParens)) {
          return {
            errorLine: lineNum,
            errorSnippet: line,
            errorType: 'syntax',
            errorMessage: `Python Syntax Error on Line ${lineNum}: Assignment '=' inside condition. Did you mean '==' for comparison?`,
            errorHint: `Replace '=' with '==' on Line ${lineNum}.`
          };
        }
      }
    }
  }

  return null;
}

/**
 * Linux Bash syntax check
 */
function checkBashSyntax(lines: string[], fullCode: string): SourceErrorInfo | null {
  let ifCount = 0;
  let fiCount = 0;
  let ifLine = 1;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i].trim();

    if (!line || line.startsWith('#')) continue;

    if (/\bif\s+\[/.test(line)) {
      ifCount++;
      ifLine = lineNum;
    }
    if (line === 'fi' || line.endsWith('; fi') || line.endsWith(';fi')) {
      fiCount++;
    }
  }

  if (ifCount > fiCount) {
    return {
      errorLine: ifLine,
      errorSnippet: lines[ifLine - 1]?.trim() || 'if',
      errorType: 'syntax',
      errorMessage: `Bash Syntax Error: 'if' on Line ${ifLine} is missing closing 'fi'.`,
      errorHint: `Ensure each 'if' block closes with 'fi'.`
    };
  }

  return null;
}

/**
 * Assembly Mnemonics syntax check
 */
function checkAsmSyntax(lines: string[], fullCode: string): SourceErrorInfo | null {
  const recognizedAsm = /^(MOV|MOVX|MOVC|ADD|ADDC|SUBB|INC|DEC|MUL|DIV|DA|ANL|ORL|XRL|CLR|CPL|RL|RLC|RR|RRC|SWAP|SETB|JC|JNC|JB|JNB|JBC|JZ|JNZ|CJNE|DJNZ|SJMP|AJMP|LJMP|ACALL|LCALL|RET|RETI|NOP|PUSH|POP|ORG|END|EQU|DB|DW)\b/i;
  let hasValidAsm = false;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i].trim();
    if (!line || line.startsWith(';') || line.startsWith('//')) continue;

    // Remove labels like 'START:' or 'LOOP:'
    const codePart = line.replace(/^[a-zA-Z0-9_$]+:\s*/, '').trim();
    if (!codePart) continue;

    const mnemonic = (codePart.split(/[\s,]/)[0] || '').toUpperCase();
    if (recognizedAsm.test(mnemonic)) {
      hasValidAsm = true;
    } else {
      return {
        errorLine: lineNum,
        errorSnippet: line,
        errorType: 'syntax',
        errorMessage: `Assembly Error on Line ${lineNum}: Unrecognized instruction or mnemonic '${mnemonic}'.`,
        errorHint: `Use valid instructions such as MOV, ADD, SUBB, ANL, ORL, DJNZ, or ORG.`
      };
    }
  }

  if (!hasValidAsm) {
    return {
      errorLine: 1,
      errorSnippet: lines[0]?.trim() || '',
      errorType: 'syntax',
      errorMessage: 'Assembly Error: No valid 8051 or ARM assembly instructions found.',
      errorHint: 'Use valid instructions such as MOV, ADD, SUBB, ANL, ORL, DJNZ, or ORG.'
    };
  }

  return null;
}
