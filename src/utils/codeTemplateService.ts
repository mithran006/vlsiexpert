import { Problem } from '../types';
import { isVlsiHdlTopic, getStandardCircuitDefinition } from './circuitClassification';
import { getExtensionForTopic, sanitizeFilename } from './exportUtils';
import { getStandardProblemBenchmark } from '../services/problemBenchmarkService';

const DEFAULT_LIBRARIES_BY_TOPIC: Record<string, string> = {
  embedded_c: '#include <stdint.h>\n#include <stdbool.h>\n#include <stdio.h>\n',
  arduino: '#include <Arduino.h>\n',
  rtos_problems: '#include <stdint.h>\n#include <stdbool.h>\n#include "FreeRTOS.h"\n#include "task.h"\n',
  python_hw: 'import sys\nimport os\nimport time\n',
  cv_robotics: 'import cv2\nimport numpy as np\n',
  linux: '#!/bin/bash\n',
  mnemonics: '; 8051 Microcontroller Assembly\nORG 0000H\n'
};

/**
 * Extracts only library include / import directives from a given code string.
 */
function extractLibraryLines(code: string): string[] {
  if (!code) return [];
  const lines = code.split('\n');
  const libLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed.startsWith('#include') ||
      trimmed.startsWith('import ') ||
      trimmed.startsWith('from ') ||
      trimmed.startsWith('require(')
    ) {
      if (!libLines.includes(trimmed)) {
        libLines.push(trimmed);
      }
    }
  }

  return libLines;
}

/**
 * Strips solution logic from Verilog/SystemVerilog, preserving library and top module interface alone.
 */
function stripCodeInsideVerilog(rawCode: string, title: string): string {
  const match = rawCode.match(/([\s\S]*?module\s+[a-zA-Z0-9_$]+\s*(?:#\s*\([\s\S]*?\)\s*)?\([\s\S]*?\)\s*;)/i);
  if (match) {
    let header = match[1].trim();
    // Strip any preceding comments or existing timescale so we produce a clean library directive
    const modIdx = header.search(/\bmodule\b/i);
    if (modIdx > 0) {
      header = header.slice(modIdx).trim();
    }
    // Prepend library timescale directive
    header = '`timescale 1ns / 1ps\n\n' + header;
    return `${header}\n    // TODO: Implement ${title}\n\nendmodule\n`;
  }

  const cleanName = sanitizeFilename(title);
  return `\`timescale 1ns / 1ps\n\nmodule ${cleanName} (\n    // Declare input and output ports\n);\n    // TODO: Implement ${title}\n\nendmodule\n`;
}

/**
 * Strips solution logic from VHDL, preserving library and top entity/architecture alone.
 */
function stripCodeInsideVhdl(rawCode: string, title: string): string {
  const cleanName = sanitizeFilename(title);
  const entityMatch = rawCode.match(/entity\s+([a-zA-Z0-9_$]+)\s+is[\s\S]*?end\s+(?:entity\s+)?(?:\1\s*)?;/i);
  const archMatch = rawCode.match(/architecture\s+([a-zA-Z0-9_$]+)\s+of\s+([a-zA-Z0-9_$]+)\s+is/i);

  const entityName = entityMatch ? entityMatch[1] : (archMatch ? archMatch[2] : cleanName);
  const archName = archMatch ? archMatch[1] : 'rtl';
  const entityBlock = entityMatch ? entityMatch[0].trim() : `entity ${entityName} is\nend entity ${entityName};`;

  return `library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\nuse IEEE.NUMERIC_STD.ALL;\n\n${entityBlock}\n\narchitecture ${archName} of ${entityName} is\nbegin\n    -- TODO: Implement ${title}\n\nend architecture ${archName};\n`;
}

/**
 * Strips solution logic from Python, preserving imports and function signatures.
 */
function stripCodeInsidePython(rawCode: string, title: string): string {
  const defMatch = rawCode.match(/(def\s+[a-zA-Z0-9_$]+\s*\(.*?\)\s*:)/);
  const libs = extractLibraryLines(rawCode);
  const libPrefix = libs.length > 0 ? libs.join('\n') + '\n\n' : (DEFAULT_LIBRARIES_BY_TOPIC.python_hw || '');

  if (defMatch) {
    return `${libPrefix}# TODO: Implement ${title}\n${defMatch[1]}\n    # Write your solution here\n    pass\n`;
  }

  const funcName = sanitizeFilename(title).toLowerCase();
  return `${libPrefix}# TODO: Implement ${title}\ndef solve_${funcName}():\n    # Write your solution here\n    pass\n`;
}

/**
 * Strips solution logic from C / Arduino, preserving headers and function signatures.
 */
function stripCodeInsideC(rawCode: string, title: string, topic: string): string {
  const libs = extractLibraryLines(rawCode);
  const libPrefix = libs.length > 0 ? libs.join('\n') + '\n\n' : (DEFAULT_LIBRARIES_BY_TOPIC[topic] || '');

  if (topic === 'arduino') {
    return `${libPrefix}// Arduino Core: ${title}\nvoid setup() {\n    // Initialize hardware pins & peripherals\n}\n\nvoid loop() {\n    // Main execution loop logic\n}\n`;
  }

  const funcMatch = rawCode.match(/((?:void|int|uint\w*|bool)\s+[a-zA-Z0-9_$]+\s*\(.*?\)\s*\{)/);
  if (funcMatch) {
    return `${libPrefix}// ${title}\n${funcMatch[1]}\n    // TODO: Write your implementation here\n    return 0;\n}\n`;
  }

  return `${libPrefix}// ${title}\nint main(void) {\n    // TODO: Write your firmware logic here\n    return 0;\n}\n`;
}

/**
 * Returns the Design starter code to display in the editor.
 * Guarantees that every problem in the library has ONLY the library directive and top module alone,
 * with any internal RTL implementation code completely removed.
 */
export function getCleanStarterCode(problem: Problem): string {
  const isVlsi = isVlsiHdlTopic(problem.topic);
  if (!isVlsi) {
    const benchmark = getStandardProblemBenchmark(problem);
    if (benchmark && benchmark.starterCode && benchmark.starterCode.trim().length > 10) {
      return benchmark.starterCode;
    }
  }
  const standardDef = getStandardCircuitDefinition(problem);

  // Raw source to extract top module port interface from (prioritizing benchmark/solution definition)
  const rawSource = (standardDef && (standardDef.solutionCode || standardDef.starterCode)) ||
                    problem.solutionCode ||
                    problem.starterCode ||
                    '';

  if (isVlsi) {
    const ext = getExtensionForTopic(problem.topic);
    if (ext === 'vhd' || problem.topic === 'vhdl') {
      return stripCodeInsideVhdl(rawSource, problem.title);
    }
    return stripCodeInsideVerilog(rawSource, problem.title);
  }

  if (problem.topic === 'python_hw' || problem.topic === 'cv_robotics') {
    return stripCodeInsidePython(rawSource, problem.title);
  }

  if (problem.topic === 'embedded_c' || problem.topic === 'arduino' || problem.topic === 'rtos_problems') {
    return stripCodeInsideC(rawSource, problem.title, problem.topic);
  }

  if (problem.topic === 'linux') {
    return `#!/bin/bash\n# Script: ${problem.title}\n# TODO: Write your Linux shell commands/pipeline below\n\n`;
  }

  if (problem.topic === 'mnemonics') {
    return `; 8051 Microcontroller Assembly: ${problem.title}\nORG 0000H\n; TODO: Write your 8051 instructions below\n\nEND\n`;
  }

  return DEFAULT_LIBRARIES_BY_TOPIC[problem.topic] || '// Write your implementation here\n';
}

/**
 * Returns the Testbench starter code to display in the editor.
 */
export function getCleanTestbenchCode(problem: Problem): string {
  const ext = getExtensionForTopic(problem.topic);
  const cleanName = sanitizeFilename(problem.title);

  if (ext === 'vhd') {
    return `library ieee;\nuse ieee.std_logic_1164.all;\nuse ieee.numeric_std.all;\n\nentity tb_${cleanName} is\nend entity tb_${cleanName};\n\narchitecture behavior of tb_${cleanName} is\nbegin\n    -- Testbench verification stimulus\nend architecture behavior;\n`;
  }

  return `\`timescale 1ns / 1ps\n\nmodule tb_${cleanName};\n    // Testbench verification stimulus\n\nendmodule\n`;
}
