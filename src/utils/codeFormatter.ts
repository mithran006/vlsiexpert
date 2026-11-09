/**
 * Intelligent Code Formatter & Syntax Beautifier
 * Formats Verilog, SystemVerilog, VHDL, C/C++, Python, Assembly, and Shell scripts.
 */

export function cleanSnippetForInsertion(rawSnippet: string, topic: string, problemTitle?: string): string {
  const defaultEntity = problemTitle
    ? problemTitle.toLowerCase().replace(/[^a-z0-9_]+/g, '_').replace(/^_+|_+$/g, '')
    : 'design_top';

  return rawSnippet
    .replace(/\$1/g, (match, offset, fullStr) => {
      if (fullStr.includes('module ')) return defaultEntity;
      if (fullStr.includes('always_ff') || fullStr.includes('always @')) return '// logic state';
      if (fullStr.includes('assign ')) return 'data_out';
      if (fullStr.includes('case (')) return 'sel';
      if (fullStr.includes('entity ')) return defaultEntity;
      if (fullStr.includes('architecture ')) return defaultEntity;
      if (fullStr.includes('wire [') || fullStr.includes('reg [') || fullStr.includes('logic [')) return '7';
      if (fullStr.includes('Pin(')) return '15';
      if (fullStr.includes('QuantumCircuit(')) return '2';
      if (fullStr.includes('xTaskCreate(')) return 'vTaskCode';
      return 'data_out';
    })
    .replace(/\$2/g, (match, offset, fullStr) => {
      if (fullStr.includes('assign ')) return 'data_in';
      if (fullStr.includes('wire [') || fullStr.includes('reg [') || fullStr.includes('logic [')) return 'bus_signal';
      if (fullStr.includes('entity ')) return 'in_data  : in  std_logic;\n    out_data : out std_logic';
      if (fullStr.includes('Pin(')) return 'Pin.OUT';
      if (fullStr.includes('QuantumCircuit(')) return '2';
      return 'data_in';
    })
    .replace(/\$3/g, 'clk')
    .replace(/\$4/g, 'rst_n')
    .replace(/\$5/g, '0')
    .replace(/\$\d+/g, '');
}

/**
 * Auto-format code according to programming language syntax and indentation rules
 */
export function formatCodeByLanguage(rawCode: string, topic: string): string {
  if (!rawCode || !rawCode.trim()) return rawCode;

  const lines = rawCode.split('\n');
  const t = topic.toLowerCase();
  const isHdl = t === 'verilog' || t === 'systemverilog' || t === 'fpga' || t === 'uvm' || t === 'dft' || t === 'soc_design';
  const isVhdl = t === 'vhdl';
  const isCStyle = t === 'embedded_c' || t === 'arduino' || t === 'rtos_problems';
  const isPython = t === 'python_hw' || t === 'cv_robotics' || t === 'quantum_prog';
  const isBash = t === 'linux';

  let currentIndent = 0;
  const formattedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Preserve empty lines
    if (!line) {
      formattedLines.push('');
      continue;
    }

    // Skip preprocessor directives or comments from modifying base indentation logic
    const isComment = line.startsWith('//') || line.startsWith('#') || line.startsWith('--') || line.startsWith('/*');

    if (isHdl) {
      // Decrease indent before closing blocks
      if (
        line.startsWith('end') ||
        line.startsWith('endmodule') ||
        line.startsWith('endcase') ||
        line.startsWith('endfunction') ||
        line.startsWith('endtask') ||
        line.startsWith('endgenerate') ||
        line.startsWith('endpackage') ||
        line.startsWith('endinterface') ||
        line.startsWith('join') ||
        line.startsWith('join_any') ||
        line.startsWith('join_none') ||
        line.startsWith('}')
      ) {
        currentIndent = Math.max(0, currentIndent - 1);
      } else if (line.startsWith('else') || line.startsWith('default:') || /^(\d+'b[0-9a-fA-F_xXzZ]+|[0-9]+)\s*:/.test(line)) {
        // Aligned case labels or else
        if (line.startsWith('else')) {
          // Keep same indent level
        }
      }

      // Add leading spaces
      const indentStr = '  '.repeat(currentIndent);
      formattedLines.push(indentStr + line);

      // Increase indent after block starters
      const endsWithSemi = line.endsWith(';');
      const isBlockStart =
        line.startsWith('module ') ||
        line.startsWith('package ') ||
        line.startsWith('interface ') ||
        line.endsWith('begin') ||
        /\bbegin\s*(?::\s*\w+)?$/.test(line) ||
        line.startsWith('case ') ||
        line.startsWith('case(') ||
        line.startsWith('unique case') ||
        line.startsWith('priority case') ||
        line.startsWith('casex') ||
        line.startsWith('casez') ||
        line.startsWith('fork') ||
        (line.startsWith('generate') && !endsWithSemi) ||
        (line.startsWith('task ') && !endsWithSemi) ||
        (line.startsWith('function ') && !endsWithSemi) ||
        line.endsWith('{');

      if (isBlockStart && !isComment) {
        currentIndent++;
      }
    } else if (isVhdl) {
      // VHDL Indentation
      const lower = line.toLowerCase();
      if (
        lower.startsWith('end ') ||
        lower.startsWith('end;') ||
        lower.startsWith('end architecture') ||
        lower.startsWith('end entity') ||
        lower.startsWith('end process') ||
        lower.startsWith('end if') ||
        lower.startsWith('end case')
      ) {
        currentIndent = Math.max(0, currentIndent - 1);
      }

      const indentStr = '  '.repeat(currentIndent);
      formattedLines.push(indentStr + line);

      if (
        lower.startsWith('architecture ') ||
        lower.startsWith('entity ') ||
        lower.includes('is begin') ||
        lower.endsWith('begin') ||
        lower.endsWith('then') ||
        lower.endsWith('loop') ||
        lower.endsWith('is')
      ) {
        currentIndent++;
      }
    } else if (isCStyle) {
      // C / C++ / Embedded C / FreeRTOS
      if (line.startsWith('}')) {
        currentIndent = Math.max(0, currentIndent - 1);
      }

      const indentStr = '  '.repeat(currentIndent);
      formattedLines.push(indentStr + line);

      if (line.endsWith('{') && !isComment) {
        currentIndent++;
      }
    } else if (isBash) {
      // Bash shell
      if (line.startsWith('fi') || line.startsWith('done') || line.startsWith('esac') || line.startsWith('}')) {
        currentIndent = Math.max(0, currentIndent - 1);
      }

      const indentStr = '  '.repeat(currentIndent);
      formattedLines.push(indentStr + line);

      if (line.endsWith('then') || line.endsWith('do') || line.endsWith('in') || line.endsWith('{')) {
        currentIndent++;
      }
    } else {
      // Default / Python - preserve line with light clean
      formattedLines.push(lines[i].trimEnd());
    }
  }

  return formattedLines.join('\n');
}
