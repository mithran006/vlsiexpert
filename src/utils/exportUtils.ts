import { Problem, SimulationResult, SignalConfig, WaveformSample } from '../types';
import { isCombinationalCircuit, getStandardCircuitDefinition } from './circuitClassification';
import { simulatorEngine } from '../services/simulatorEngine';

/**
 * Get file extension based on topic
 */
export function getExtensionForTopic(topic: string): string {
  switch (topic.toLowerCase()) {
    case 'systemverilog':
    case 'uvm':
    case 'dft':
      return 'sv';
    case 'vhdl':
      return 'vhd';
    case 'embedded_c':
    case 'rtos_problems':
    case 'soc_design':
      return 'c';
    case 'arduino':
      return 'ino';
    case 'python_hw':
    case 'cv_robotics':
    case 'quantum_prog':
      return 'py';
    case 'mnemonics':
      return 'asm';
    case 'linux':
      return 'sh';
    case 'verilog':
    case 'fpga':
    default:
      return 'v';
  }
}

/**
 * Sanitizes a title to make a clean filename
 */
export function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
}

/**
 * Triggers browser download of a text or blob content
 */
export function downloadFile(content: string, filename: string, mimeType: string = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download the user's HDL source code
 */
export function downloadHdlCode(code: string, problem: Problem) {
  const ext = getExtensionForTopic(problem.topic);
  const cleanName = sanitizeFilename(problem.title);
  const filename = `${cleanName}.${ext}`;
  downloadFile(code, filename, 'text/plain');
}

/**
 * Generate executable Verilog/SystemVerilog/VHDL testbench file string
 */
/**
 * Generate executable Verilog/SystemVerilog/VHDL testbench file string
 */
export function generateTestbenchCode(problem: Problem, code: string): string {
  const ext = getExtensionForTopic(problem.topic);
  const cleanName = sanitizeFilename(problem.title);
  const isComb = isCombinationalCircuit(problem);

  // 1. Resolve effective signals from standard definition or testbench config
  const stdDef = getStandardCircuitDefinition(problem);
  const rawSignals: SignalConfig[] = (stdDef?.signals && stdDef.signals.length > 0)
    ? stdDef.signals
    : (problem.testbenchConfig?.signals || problem.signals || []);

  const signals = isComb
    ? rawSignals.filter(s => !s.name.toLowerCase().includes('clk') && !s.name.toLowerCase().includes('rst') && !s.name.toLowerCase().includes('clock'))
    : rawSignals;

  // 2. Extract actual module/entity name declared in user code
  const moduleMatch = code.match(/module\s+([a-zA-Z_]\w*)/i);
  const dutModuleName = moduleMatch ? moduleMatch[1] : cleanName;

  const entityMatch = code.match(/entity\s+([a-zA-Z_]\w*)\s+is/i);
  const dutEntityName = entityMatch ? entityMatch[1] : cleanName;

  // 3. Obtain real testbench stimulus vectors via simulator engine
  let testVectors: any[] = [];
  try {
    const simRes = simulatorEngine.simulate(problem, (stdDef?.solutionCode || problem.solutionCode || code));
    if (simRes?.testVectors && simRes.testVectors.length > 0) {
      testVectors = simRes.testVectors;
    }
  } catch (e) {}

  if (testVectors.length === 0 && problem.testbenchConfig?.expectedOutputs) {
    testVectors = problem.testbenchConfig.expectedOutputs.map(exp => ({
      cycle: exp.cycle,
      inputs: {},
      expectedOutputs: { [exp.signalName]: exp.value }
    }));
  }

  // --- VHDL TESTBENCH GENERATION ---
  if (ext === 'vhd') {
    const vhdlSignals = signals.map(s => {
      const busMatch = s.name.match(/\[(\d+):(\d+)\]/);
      const cleanSig = s.name.replace(/\[.*\]/, '');
      if (busMatch) {
        const msb = busMatch[1];
        const lsb = busMatch[2];
        const initVal = s.initialValue || '0'.repeat(Math.abs(parseInt(msb, 10) - parseInt(lsb, 10)) + 1);
        return `  signal ${cleanSig} : std_logic_vector(${msb} downto ${lsb}) := "${initVal}";`;
      }
      return `  signal ${cleanSig} : std_logic := '${s.initialValue || '0'}';`;
    }).join('\n');

    const portMaps = signals.map(s => {
      const cleanSig = s.name.replace(/\[.*\]/, '');
      return `      ${cleanSig} => ${cleanSig}`;
    }).join(',\n');

    if (isComb) {
      return `-- =========================================================
-- Standard IEEE 1076 / ModelSim / GHDL Compliant VHDL Testbench
-- Module: tb_${dutEntityName}.vhd
-- Problem: ${problem.title} (Combinational Logic - Memoryless)
-- =========================================================

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity tb_${dutEntityName} is
end entity tb_${dutEntityName};

architecture behavior of tb_${dutEntityName} is

  -- Signal Declarations (Combinational - No Clock Required)
${vhdlSignals}

begin

  -- Unit Under Test (UUT) Instantiation
  uut: entity work.${dutEntityName}
    port map (
${portMaps}
    );

  -- Combinational Stimulus Evaluation Process
  stim_proc: process
  begin
    report "Starting Testbench Simulation for Combinational Circuit: ${problem.title}...";
    wait for 10 ns;

${testVectors.map(tv => {
  const inStmts = Object.entries(tv.inputs || {}).map(([k, v]) => {
    const cleanK = k.replace(/\[.*\]/, '');
    return String(v).length > 1 ? `    ${cleanK} <= "${v}";` : `    ${cleanK} <= '${v}';`;
  }).join('\n');
  const expChecks = Object.entries(tv.expectedOutputs || {}).map(([k, v]) => {
    const cleanK = k.replace(/\[.*\]/, '');
    const valStr = String(v).length > 1 ? `"${v}"` : `'${v}'`;
    return `    assert (${cleanK} = ${valStr}) report "Mismatch on Vector ${tv.cycle}: ${cleanK}" severity error;`;
  }).join('\n');
  return `    -- Stimulus Vector ${tv.cycle}\n${inStmts}\n    wait for 10 ns;\n${expChecks}`;
}).join('\n\n')}

    report "Simulation Complete - All combinational vectors verified!";
    wait;
  end process;

end architecture behavior;`;
    }

    return `-- =========================================================
-- Standard IEEE 1076 / ModelSim / GHDL Compliant VHDL Testbench
-- Module: tb_${dutEntityName}.vhd
-- Problem: ${problem.title} (Sequential Circuit)
-- =========================================================

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity tb_${dutEntityName} is
end entity tb_${dutEntityName};

architecture behavior of tb_${dutEntityName} is

  -- Clock period definition
  constant CLK_PERIOD : time := 10 ns;
  signal clk : std_logic := '0';
  signal rst_n : std_logic := '0';

  -- Signal Declarations
${vhdlSignals}

begin

  -- Unit Under Test (UUT) Instantiation
  uut: entity work.${dutEntityName}
    port map (
${portMaps}
    );

  -- Clock Generation Process (100 MHz)
  clk_process : process
  begin
    clk <= '0';
    wait for CLK_PERIOD/2;
    clk <= '1';
    wait for CLK_PERIOD/2;
  end process;

  -- Stimulus Process
  stim_proc: process
  begin
    report "Starting Testbench Simulation for ${problem.title}...";
    rst_n <= '0';
    wait for 20 ns;
    rst_n <= '1';
    wait for 10 ns;

${testVectors.map(tv => {
  const inStmts = Object.entries(tv.inputs || {}).filter(([k]) => !k.toLowerCase().includes('clk')).map(([k, v]) => {
    const cleanK = k.replace(/\[.*\]/, '');
    return String(v).length > 1 ? `    ${cleanK} <= "${v}";` : `    ${cleanK} <= '${v}';`;
  }).join('\n');
  const expChecks = Object.entries(tv.expectedOutputs || {}).map(([k, v]) => {
    const cleanK = k.replace(/\[.*\]/, '');
    const valStr = String(v).length > 1 ? `"${v}"` : `'${v}'`;
    return `    assert (${cleanK} = ${valStr}) report "Mismatch on Cycle ${tv.cycle}: ${cleanK}" severity error;`;
  }).join('\n');
  return `    -- Cycle ${tv.cycle}\n${inStmts}\n    wait for CLK_PERIOD;\n${expChecks}`;
}).join('\n\n')}

    report "Simulation Complete - All tests executed successfully!";
    wait;
  end process;

end architecture behavior;`;
  }

  // --- VERILOG / SYSTEMVERILOG TESTBENCH GENERATION ---
  const formatSigDecl = (s: SignalConfig, isReg: boolean) => {
    const busMatch = s.name.match(/\[(\d+):(\d+)\]/);
    const cleanSig = s.name.replace(/\[.*\]/, '');
    if (busMatch) {
      return `  ${isReg ? 'reg ' : 'wire'} [${busMatch[1]}:${busMatch[2]}] ${cleanSig};`;
    }
    const width = s.initialValue && s.initialValue.length > 1 ? s.initialValue.length : 1;
    if (width > 1) {
      return `  ${isReg ? 'reg ' : 'wire'} [${width - 1}:0] ${cleanSig};`;
    }
    return `  ${isReg ? 'reg ' : 'wire'} ${cleanSig};`;
  };

  const inputSignals = signals.filter(s => s.type === 'input' || (!isComb && s.type === 'clock'));
  const outputSignals = signals.filter(s => s.type === 'output');

  const clockGeneration = isComb
    ? `  // Combinational Circuit: No clock or synchronous resets required`
    : `  // Clock Generation (10ns period = 100MHz clock)\n  initial clk = 0;\n  always #5 clk = ~clk;`;

  return `// =========================================================
// Standard IEEE 1364 / 1800 / ModelSim / Icarus Verilog Testbench
// Module: tb_${dutModuleName}.${ext}
// Problem: ${problem.title} (${isComb ? 'COMBINATIONAL LOGIC' : problem.difficulty.toUpperCase()})
// Generated by VLSI Expert VLSI Platform
// =========================================================

\`timescale 1ns / 1ps

module tb_${dutModuleName};

  // Testbench Signal Declarations
${inputSignals.map(s => formatSigDecl(s, true)).join('\n')}
${outputSignals.map(s => formatSigDecl(s, false)).join('\n')}

  integer error_count = 0;
  integer vector_count = 0;

  // Instantiate Design Under Test (DUT)
  ${dutModuleName} dut (
${signals.map(s => {
  const cleanSig = s.name.replace(/\[.*\]/, '');
  return `    .${cleanSig}(${cleanSig})`;
}).join(',\n')}
  );

${clockGeneration}

  initial begin
    // Setup VCD Waveform Dump for GTKWave / Vivado / ModelSim
    $dumpfile("${cleanName}_wave.vcd");
    $dumpvars(0, tb_${dutModuleName});

    $display("=================================================");
    $display("Starting RTL Testbench: ${problem.title}${isComb ? ' (Combinational)' : ''}");
    $display("=================================================");

    #10;

${testVectors.map(tv => {
  const inAssignments = Object.entries(tv.inputs || {}).filter(([k]) => !k.toLowerCase().includes('clk')).map(([k, v]) => {
    const cleanK = k.replace(/\[.*\]/, '');
    const w = String(v).length;
    return `    ${cleanK} = ${w}'b${v};`;
  }).join('\n');

  const assertions = Object.entries(tv.expectedOutputs || {}).map(([k, v]) => {
    const cleanK = k.replace(/\[.*\]/, '');
    const w = String(v).length;
    return `    if (${cleanK} !== ${w}'b${v}) begin
      $display("[FAIL] Vector ${tv.cycle}: ${cleanK} = %b (Expected: %b)", ${cleanK}, ${w}'b${v});
      error_count = error_count + 1;
    end else begin
      $display("[PASS] Vector ${tv.cycle}: ${cleanK} = %b matched expected", ${cleanK});
    end`;
  }).join('\n');

  return `    // Stimulus Vector ${tv.cycle}
${inAssignments}
    #10;
    vector_count = vector_count + 1;
${assertions}`;
}).join('\n\n')}

    #20;
    $display("=================================================");
    if (error_count == 0) begin
      $display("[SUCCESS] All %0d vectors verified successfully! 100%% MATCH.", vector_count);
    end else begin
      $display("[FAILURE] %0d error(s) detected out of %0d test vectors.", error_count, vector_count);
    end
    $display("=================================================");
    $finish;
  end

endmodule`;
}

/**
 * Generate combined unified top simulation file (TB + DUT)
 */
export function generateCombinedSimulationCode(problem: Problem, code: string): string {
  const ext = getExtensionForTopic(problem.topic);
  const cleanName = sanitizeFilename(problem.title);
  const tb = generateTestbenchCode(problem, code);

  return `// =========================================================
// COMPLETE UNIFIED RTL SIMULATION & SYNTHESIS SUITE
// Problem: ${problem.title}
// Contains: Testbench (tb_${cleanName}) + DUT Source Code (${cleanName})
// =========================================================

${tb}

// =========================================================
// DESIGN UNDER TEST (DUT) SOURCE RTL MODULE
// =========================================================

${code}
`;
}

// Backward-compatible alias
export const generateCombinedVivadoCode = generateCombinedSimulationCode;

/**
 * Download executable Verilog/SystemVerilog/VHDL testbench file
 */
export function downloadTestbench(problem: Problem, code: string) {
  const ext = getExtensionForTopic(problem.topic);
  const cleanName = sanitizeFilename(problem.title);
  const filename = `tb_${cleanName}.${ext}`;
  const content = generateTestbenchCode(problem, code);
  downloadFile(content, filename, 'text/plain');
}

/**
 * Download combined unified simulation suite file (TB + DUT)
 */
export function downloadCombinedHdl(problem: Problem, code: string) {
  const ext = getExtensionForTopic(problem.topic);
  const cleanName = sanitizeFilename(problem.title);
  const filename = `${cleanName}_complete.${ext}`;
  const content = generateCombinedSimulationCode(problem, code);
  downloadFile(content, filename, 'text/plain');
}

/**
 * Save/download both the design RTL source code and HDL testbench
 */
export function downloadBothHdlFiles(problem: Problem, code: string) {
  downloadHdlCode(code, problem);
  setTimeout(() => {
    downloadTestbench(problem, code);
  }, 400);
}

/**
 * Helper to get or compute real cycle-accurate waveform samples for any problem in the library
 */
export function getOrComputeSamples(
  problem: Problem,
  simulationResult: SimulationResult | null | undefined
): WaveformSample[] {
  const isComb = isCombinationalCircuit(problem);
  let rawSamples: WaveformSample[] = [];

  if (simulationResult && Array.isArray(simulationResult.samples) && simulationResult.samples.length > 0) {
    rawSamples = simulationResult.samples;
  } else {
    // Try simulating using problem.solutionCode or problem.starterCode
    try {
      const codeToSim = problem.solutionCode || problem.starterCode || '';
      if (codeToSim.trim()) {
        const res = simulatorEngine.simulate(problem, codeToSim);
        if (res && Array.isArray(res.samples) && res.samples.length > 0) {
          rawSamples = res.samples;
        }
      }
    } catch (e) {
      console.warn('Simulation fallback failed:', e);
    }
  }

  if (rawSamples.length === 0) {
    // Fallback using generateMcuWaveformSamples
    rawSamples = simulatorEngine.generateMcuWaveformSamples(problem, true, 16);
  }

  // Combinational logic: strictly strip clock and reset signals from all samples
  if (isComb) {
    return rawSamples.map(sample => {
      const cleanSignals: Record<string, string> = {};
      Object.entries(sample.signals || {}).forEach(([k, v]) => {
        const lk = k.toLowerCase();
        if (!lk.includes('clk') && !lk.includes('clock') && !lk.includes('rst')) {
          cleanSignals[k] = v;
        }
      });
      return { ...sample, signals: cleanSignals };
    });
  }

  return rawSamples;
}

/**
 * Helper to get effective signal list for any problem in the library
 */
export function getEffectiveSignals(problem: Problem, signalConfigs?: SignalConfig[]): SignalConfig[] {
  const isComb = isCombinationalCircuit(problem);
  let sigs: SignalConfig[] = [];

  if (Array.isArray(signalConfigs) && signalConfigs.length > 0) {
    sigs = signalConfigs;
  } else if (problem.testbenchConfig?.signals && problem.testbenchConfig.signals.length > 0) {
    sigs = problem.testbenchConfig.signals;
  } else if (Array.isArray(problem.signals) && problem.signals.length > 0) {
    sigs = problem.signals;
  } else if (isComb) {
    sigs = [
      { name: 'a', type: 'input', initialValue: '0' },
      { name: 'b', type: 'input', initialValue: '0' },
      { name: 'y', type: 'output', initialValue: '0' }
    ];
  } else {
    sigs = [
      { name: 'clk', type: 'clock', initialValue: '0' },
      { name: 'rst_n', type: 'input', initialValue: '1' },
      { name: 'out', type: 'output', initialValue: '0' }
    ];
  }

  // Strictly filter out clock and reset for combinational circuits
  if (isComb) {
    sigs = sigs.filter(s =>
      !s.name.toLowerCase().includes('clk') &&
      !s.name.toLowerCase().includes('clock') &&
      !s.name.toLowerCase().includes('rst')
    );
    if (sigs.length === 0) {
      sigs = [
        { name: 'a', type: 'input', initialValue: '0' },
        { name: 'b', type: 'input', initialValue: '0' },
        { name: 'y', type: 'output', initialValue: '0' }
      ];
    }
  }

  return sigs;
}

/**
 * Generate standard IEEE 1364 VCD (Value Change Dump) waveform file
 */
export function downloadVcdWaveform(problem: Problem, simulationResult: SimulationResult | null) {
  const cleanName = sanitizeFilename(problem.title);
  const filename = `${cleanName}_waveform.vcd`;

  const samples = getOrComputeSamples(problem, simulationResult);
  const signals = getEffectiveSignals(problem);

  const getSigWidth = (sig: SignalConfig): number => {
    const match = sig.name.match(/\[(\d+):(\d+)\]/);
    if (match) return Math.abs(parseInt(match[1], 10) - parseInt(match[2], 10)) + 1;
    if (sig.initialValue && sig.initialValue.length > 1) return sig.initialValue.length;
    return 1;
  };

  // Map signals to VCD identifier characters (!, ", #, $, %, etc.)
  const sigMap: Record<string, string> = {};
  signals.forEach((sig, index) => {
    sigMap[sig.name] = String.fromCharCode(33 + index); // Starts at ASCII 33 ('!')
  });

  const now = new Date().toISOString();

  let vcd = `$date
   ${now}
$end
$version
   VLSI Expert IEEE 1364 VCD Generator v1.0
$end
$timescale
   1ns
$end
$scope module ${cleanName} $end
`;

  // Declare variables in VCD header with exact bit widths
  signals.forEach(sig => {
    const id = sigMap[sig.name];
    const width = getSigWidth(sig);
    vcd += `$var wire ${width} ${id} ${sig.name} $end\n`;
  });

  vcd += `$upscope $end\n$enddefinitions $end\n$dumpvars\n`;

  // Write initial values at timestamp #0
  if (samples.length > 0) {
    const firstSample = samples[0];
    signals.forEach(sig => {
      const val = firstSample.signals[sig.name] ?? sig.initialValue ?? '0';
      const id = sigMap[sig.name];
      const width = getSigWidth(sig);
      if (width > 1) {
        vcd += `b${val} ${id}\n`;
      } else {
        vcd += `${val.toLowerCase()}${id}\n`;
      }
    });
    vcd += `$end\n`;
  }

  // Write time step state changes (#10, #20, #30...)
  samples.forEach((sample, idx) => {
    const timeNs = (idx + 1) * 10;
    vcd += `#${timeNs}\n`;
    signals.forEach(sig => {
      const val = sample.signals[sig.name] ?? '0';
      const id = sigMap[sig.name];
      const width = getSigWidth(sig);
      if (width > 1) {
        vcd += `b${val} ${id}\n`;
      } else {
        vcd += `${val.toLowerCase()}${id}\n`;
      }
    });
  });

  downloadFile(vcd, filename, 'text/plain');
}

/**
 * Generate formatted ASCII text timing trace table for direct text display and clipboard copying
 */
export function generateAsciiTimingTable(problem: Problem, simulationResult: SimulationResult | null): string {
  const samples = getOrComputeSamples(problem, simulationResult);
  const signals = getEffectiveSignals(problem);
  const isComb = isCombinationalCircuit(problem);

  const colWidths: Record<string, number> = {
    cycle: 6,
    time: 10,
    status: 9
  };
  signals.forEach(s => {
    colWidths[s.name] = Math.max(s.name.length, 5);
  });

  const sep = '='.repeat(78);
  const subSep = '-'.repeat(78);
  let out = `${sep}\n`;
  out += `  VLSI EXPERT • TIMING TRACE & WAVEFORM MATRIX\n`;
  out += `  Problem: ${problem.title} [${problem.topic.toUpperCase()}]\n`;
  out += `  Total Samples: ${samples.length} | Model Type: ${isComb ? 'Combinational Logic' : 'Sequential RTL'}\n`;
  out += `${sep}\n`;

  // Header
  const headers = [
    (isComb ? 'VEC' : 'CYCLE').padEnd(6),
    'TIME (ns)'.padEnd(10),
    ...signals.map(s => s.name.padEnd(colWidths[s.name])),
    'ASSERTION'
  ];
  out += headers.join(' | ') + '\n';
  out += subSep + '\n';

  // Rows
  const testVectors = simulationResult?.testVectors || [];
  samples.forEach((sample, i) => {
    const timeNs = isComb ? `${i * 10} ns` : `${sample.time ?? i * 10} ns`;
    const sigVals = signals.map(s => {
      const val = sample.signals[s.name] ?? '0';
      return val.padEnd(colWidths[s.name]);
    });
    const tv = testVectors[i];
    const status = tv ? (tv.passed ? '✓ PASS' : '✗ FAIL') : (simulationResult?.passed ? '✓ PASS' : 'MATCH');

    out += [
      String(i).padEnd(6),
      timeNs.padEnd(10),
      ...sigVals,
      status
    ].join(' | ') + '\n';
  });

  out += `${sep}\n`;
  return out;
}

/**
 * Generate VCD file text string
 */
export function generateVcdText(problem: Problem, simulationResult: SimulationResult | null): string {
  const cleanName = sanitizeFilename(problem.title);
  const samples = getOrComputeSamples(problem, simulationResult);
  const signals = getEffectiveSignals(problem);

  const getSigWidth = (sig: SignalConfig): number => {
    const match = sig.name.match(/\[(\d+):(\d+)\]/);
    if (match) return Math.abs(parseInt(match[1], 10) - parseInt(match[2], 10)) + 1;
    if (sig.initialValue && sig.initialValue.length > 1) return sig.initialValue.length;
    return 1;
  };

  const sigMap: Record<string, string> = {};
  signals.forEach((sig, index) => {
    sigMap[sig.name] = String.fromCharCode(33 + index);
  });

  const now = new Date().toISOString();
  let vcd = `$date\n   ${now}\n$end\n$version\n   VLSI Expert IEEE 1364 VCD Generator v1.0\n$end\n$timescale\n   1ns\n$end\n$scope module ${cleanName} $end\n`;
  signals.forEach(sig => {
    const id = sigMap[sig.name];
    const width = getSigWidth(sig);
    vcd += `$var wire ${width} ${id} ${sig.name} $end\n`;
  });
  vcd += `$upscope $end\n$enddefinitions $end\n$dumpvars\n`;

  if (samples.length > 0) {
    const firstSample = samples[0];
    signals.forEach(sig => {
      const val = firstSample.signals[sig.name] ?? sig.initialValue ?? '0';
      const id = sigMap[sig.name];
      const width = getSigWidth(sig);
      if (width > 1) {
        vcd += `b${val} ${id}\n`;
      } else {
        vcd += `${val.toLowerCase()}${id}\n`;
      }
    });
    vcd += `$end\n`;
  }

  samples.forEach((sample, idx) => {
    const timeNs = (idx + 1) * 10;
    vcd += `#${timeNs}\n`;
    signals.forEach(sig => {
      const val = sample.signals[sig.name] ?? '0';
      const id = sigMap[sig.name];
      const width = getSigWidth(sig);
      if (width > 1) {
        vcd += `b${val} ${id}\n`;
      } else {
        vcd += `${val.toLowerCase()}${id}\n`;
      }
    });
  });

  return vcd;
}

/**
 * Generate CSV timing trace file for spreadsheet/analysis software
 */
export function downloadCsvTrace(problem: Problem, simulationResult: SimulationResult | null) {
  const cleanName = sanitizeFilename(problem.title);
  const filename = `${cleanName}_trace.csv`;

  const samples = getOrComputeSamples(problem, simulationResult);
  const signalNames = getEffectiveSignals(problem).map(s => s.name);

  // CSV Header
  let csv = `Cycle,Time_ns,${signalNames.join(',')}\n`;

  // CSV Rows
  samples.forEach(sample => {
    const timeNs = sample.cycle * 10;
    const values = signalNames.map(sig => sample.signals[sig] ?? '0');
    csv += `${sample.cycle},${timeNs},${values.join(',')}\n`;
  });

  downloadFile(csv, filename, 'text/csv');
}

/**
 * Downloads SVG string directly as an SVG file on the user's device
 */
export function downloadSvgFile(svgContent: string, filename: string) {
  downloadFile(svgContent, filename, 'image/svg+xml');
}

/**
 * Convert SVG string to PNG image and trigger device download
 */
export function downloadPngFromSvg(svgContent: string, filename: string) {
  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const img = new Image();

  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width || 1200;
    canvas.height = img.height || 800;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#020617'; // slate-950 background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    URL.revokeObjectURL(url);
  };

  img.src = url;
}

/**
 * Helper to draw rounded rectangle on Canvas2D
 */
function drawCanvasRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  fill = false,
  stroke = false
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

/**
 * Format bus value for waveform display
 */
function formatBusVal(val: string): string {
  if (!val) return '0';
  if (val.length > 8) return val.substring(0, 7) + '…';
  return val;
}

/**
 * Generates and downloads crystal-clear high-resolution PNG waveform image
 * Perfect for reports, documentation, homework, and visual timing analysis.
 * NEVER outputs raw text or code — delivers a genuine .png image file.
 */
export function downloadWaveformAsPng(
  problem: Problem,
  simulationResult: SimulationResult | null | undefined,
  signalConfigs?: SignalConfig[]
) {
  const samples = getOrComputeSamples(problem, simulationResult);
  const signals = getEffectiveSignals(problem, signalConfigs);
  const cleanName = sanitizeFilename(problem.title);
  const cyclesCount = Math.max(samples.length, 1);
  const isComb = isCombinationalCircuit(problem);

  // Layout metrics
  const PADDING = 24;
  const HEADER_HEIGHT = 80;
  const RULER_HEIGHT = 34;
  const FOOTER_HEIGHT = 44;
  const SIGNAL_HEIGHT = 52;
  const LEFT_LABEL_WIDTH = 210;
  const STEP_WIDTH = Math.max(56, Math.min(84, Math.floor(1100 / cyclesCount)));

  const logicalWidth = PADDING * 2 + LEFT_LABEL_WIDTH + (cyclesCount * STEP_WIDTH);
  const logicalHeight = PADDING * 2 + HEADER_HEIGHT + RULER_HEIGHT + (signals.length * SIGNAL_HEIGHT) + FOOTER_HEIGHT;

  // 2x Retina DPI scaling for crystal-clear render
  const scale = 2;
  const canvas = document.createElement('canvas');
  canvas.width = Math.floor(logicalWidth * scale);
  canvas.height = Math.floor(logicalHeight * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.scale(scale, scale);

  // 1. Slate-950 Background
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, logicalWidth, logicalHeight);

  // 2. Header Panel
  ctx.fillStyle = '#0f172a';
  drawCanvasRoundRect(ctx, PADDING, PADDING, logicalWidth - PADDING * 2, HEADER_HEIGHT, 10, true, false);

  // Header Gradient Top Line
  const headerGrad = ctx.createLinearGradient(PADDING, PADDING, logicalWidth - PADDING, PADDING);
  headerGrad.addColorStop(0, '#38bdf8');
  headerGrad.addColorStop(0.5, '#818cf8');
  headerGrad.addColorStop(1, '#34d399');
  ctx.fillStyle = headerGrad;
  ctx.fillRect(PADDING + 4, PADDING, logicalWidth - PADDING * 2 - 8, 3);

  // Title
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 17px "JetBrains Mono", Consolas, "Courier New", monospace';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(`DIGITAL TIMING WAVEFORM: ${problem.title.toUpperCase()}`, PADDING + 18, PADDING + 28);

  // Subtitle
  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px "JetBrains Mono", Consolas, monospace';
  const topicLabel = problem.topic ? problem.topic.toUpperCase().replace('_', ' ') : 'HDL';
  const modeLabel = isComb ? 'Combinational Stimulus Vectors' : 'Cycle-Accurate Synchronous Timing';
  ctx.fillText(
    `Topic: ${topicLabel}  •  ${modeLabel}  •  ${cyclesCount} ${isComb ? 'Vectors' : 'Cycles'}  •  VLSI Expert EDA`,
    PADDING + 18,
    PADDING + 54
  );

  // Right-aligned verification badge
  const badgeX = logicalWidth - PADDING - 20;
  const badgeY = PADDING + 28;
  const isPassed = simulationResult?.passed;
  const badgeText = isPassed ? 'VERIFIED PASSED' : 'REFERENCE MODEL';
  const badgeColor = isPassed ? '#34d399' : '#38bdf8';

  ctx.font = 'bold 11px monospace';
  ctx.textAlign = 'right';
  ctx.fillStyle = badgeColor;
  ctx.fillText(`[ ${badgeText} ]`, badgeX, badgeY);

  // 3. Cycle / Time Ruler
  const rulerY = PADDING + HEADER_HEIGHT + 8;
  ctx.fillStyle = '#070d1e';
  ctx.fillRect(PADDING + LEFT_LABEL_WIDTH, rulerY, cyclesCount * STEP_WIDTH, RULER_HEIGHT);

  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(PADDING, rulerY + RULER_HEIGHT);
  ctx.lineTo(logicalWidth - PADDING, rulerY + RULER_HEIGHT);
  ctx.stroke();

  // Column Label
  ctx.fillStyle = '#64748b';
  ctx.font = 'bold 11px monospace';
  ctx.textAlign = 'left';
  ctx.fillText('SIGNAL / PORT', PADDING + 16, rulerY + RULER_HEIGHT / 2);

  // Cycle Ticks and Grid lines
  samples.forEach((sample, cIdx) => {
    const xStart = PADDING + LEFT_LABEL_WIDTH + cIdx * STEP_WIDTH;
    const xMid = xStart + STEP_WIDTH / 2;

    ctx.fillStyle = cIdx % 2 === 0 ? '#cbd5e1' : '#64748b';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(isComb ? `v${sample.cycle}` : `c${sample.cycle}`, xMid, rulerY + RULER_HEIGHT / 2);

    // Dashed grid line down
    ctx.save();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(xStart, rulerY + RULER_HEIGHT);
    ctx.lineTo(xStart, rulerY + RULER_HEIGHT + signals.length * SIGNAL_HEIGHT);
    ctx.stroke();
    ctx.restore();
  });

  // End vertical grid line
  const endX = PADDING + LEFT_LABEL_WIDTH + cyclesCount * STEP_WIDTH;
  ctx.save();
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(endX, rulerY);
  ctx.lineTo(endX, rulerY + RULER_HEIGHT + signals.length * SIGNAL_HEIGHT);
  ctx.stroke();
  ctx.restore();

  // 4. Signals
  const waveformStartY = rulerY + RULER_HEIGHT;

  signals.forEach((sig, sIdx) => {
    const rowY = waveformStartY + sIdx * SIGNAL_HEIGHT;
    const yCenter = rowY + SIGNAL_HEIGHT / 2;
    const yHigh = rowY + 12;
    const yLow = rowY + SIGNAL_HEIGHT - 12;

    // Row background
    ctx.fillStyle = sIdx % 2 === 0 ? '#020617' : '#060a18';
    ctx.fillRect(PADDING, rowY, logicalWidth - PADDING * 2, SIGNAL_HEIGHT);

    // Bottom border
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(PADDING, rowY + SIGNAL_HEIGHT);
    ctx.lineTo(logicalWidth - PADDING, rowY + SIGNAL_HEIGHT);
    ctx.stroke();

    const isClock = sig.type === 'clock' || sig.name.toLowerCase().includes('clk') || sig.name.toLowerCase().includes('clock');
    const isInput = sig.type === 'input';
    const isOutput = sig.type === 'output';

    let sigColor = '#34d399';
    let badgeBg = '#064e3b';
    let badgeText = '#6ee7b7';
    let badgeLabel = 'OUT';

    if (isClock) {
      sigColor = '#38bdf8';
      badgeBg = '#0c4a6e';
      badgeText = '#7dd3fc';
      badgeLabel = 'CLK';
    } else if (isInput) {
      sigColor = '#f59e0b';
      badgeBg = '#78350f';
      badgeText = '#fde68a';
      badgeLabel = 'IN';
    } else if (sig.type === 'internal') {
      sigColor = '#c084fc';
      badgeBg = '#581c87';
      badgeText = '#e9d5ff';
      badgeLabel = 'REG';
    }

    const firstVal = samples[0]?.signals[sig.name] ?? '';
    const isBus = sig.name.includes('[') || (firstVal.length > 1 && (firstVal.startsWith('0x') || firstVal.startsWith('h') || firstVal.length > 1));

    // Left Port Label Card
    ctx.fillStyle = '#0b1224';
    ctx.strokeStyle = '#1e293b';
    drawCanvasRoundRect(ctx, PADDING + 8, rowY + 6, LEFT_LABEL_WIDTH - 20, SIGNAL_HEIGHT - 12, 6, true, true);

    // Signal Name
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 12px "JetBrains Mono", Consolas, monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    const cleanSigName = sig.name.length > 15 ? sig.name.substring(0, 14) + '…' : sig.name;
    ctx.fillText(cleanSigName, PADDING + 16, yCenter);

    // Type Badge
    ctx.fillStyle = badgeBg;
    drawCanvasRoundRect(ctx, PADDING + LEFT_LABEL_WIDTH - 52, yCenter - 9, 32, 18, 4, true, false);
    ctx.fillStyle = badgeText;
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(badgeLabel, PADDING + LEFT_LABEL_WIDTH - 36, yCenter);

    // Render Waveform Trace
    if (isClock) {
      ctx.strokeStyle = sigColor;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      samples.forEach((_, idx) => {
        const xStart = PADDING + LEFT_LABEL_WIDTH + idx * STEP_WIDTH;
        const xMid = xStart + STEP_WIDTH / 2;
        const xEnd = xStart + STEP_WIDTH;

        if (idx === 0) {
          ctx.moveTo(xStart, yLow);
        }
        ctx.lineTo(xStart, yHigh);
        ctx.lineTo(xMid, yHigh);
        ctx.lineTo(xMid, yLow);
        ctx.lineTo(xEnd, yLow);
      });
      ctx.stroke();

      // Subtle fill
      ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.beginPath();
      samples.forEach((_, idx) => {
        const xStart = PADDING + LEFT_LABEL_WIDTH + idx * STEP_WIDTH;
        const xMid = xStart + STEP_WIDTH / 2;
        ctx.rect(xStart, yHigh, xMid - xStart, yLow - yHigh);
      });
      ctx.fill();

    } else if (isBus) {
      // Hexagonal bus cross-hatch with values
      samples.forEach((sample, idx) => {
        const xStart = PADDING + LEFT_LABEL_WIDTH + idx * STEP_WIDTH;
        const xEnd = xStart + STEP_WIDTH;
        const val = sample.signals[sig.name] ?? '0';
        const prevVal = idx > 0 ? (samples[idx - 1].signals[sig.name] ?? '') : null;
        const hasTransition = idx > 0 && prevVal !== val;

        const indent = hasTransition ? 5 : 0;
        ctx.fillStyle = isOutput ? 'rgba(52, 211, 153, 0.12)' : 'rgba(245, 158, 11, 0.12)';
        ctx.strokeStyle = sigColor;
        ctx.lineWidth = 2;

        ctx.beginPath();
        if (hasTransition) {
          ctx.moveTo(xStart, yCenter);
          ctx.lineTo(xStart + indent, yHigh);
          ctx.lineTo(xEnd - 2, yHigh);
          ctx.lineTo(xEnd - 2, yLow);
          ctx.lineTo(xStart + indent, yLow);
          ctx.closePath();
        } else {
          ctx.moveTo(xStart, yHigh);
          ctx.lineTo(xEnd, yHigh);
          ctx.moveTo(xStart, yLow);
          ctx.lineTo(xEnd, yLow);
        }
        ctx.fill();
        ctx.stroke();

        // Print bus text value
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(formatBusVal(val), (xStart + xEnd) / 2, yCenter);
      });

    } else {
      // Single-bit digital signal
      ctx.strokeStyle = sigColor;
      ctx.lineWidth = 2.5;

      let prevLevel: number | null = null;
      ctx.beginPath();

      samples.forEach((sample, idx) => {
        const raw = sample.signals[sig.name] ?? '0';
        const isHigh = raw === '1' || raw.endsWith('1') || (parseInt(raw, 10) > 0 && !isNaN(parseInt(raw, 10)));
        const currLevel = isHigh ? yHigh : yLow;
        const xStart = PADDING + LEFT_LABEL_WIDTH + idx * STEP_WIDTH;
        const xEnd = xStart + STEP_WIDTH;

        if (idx === 0) {
          ctx.moveTo(xStart, currLevel);
        } else if (prevLevel !== null && prevLevel !== currLevel) {
          ctx.lineTo(xStart, currLevel);
        }

        ctx.lineTo(xEnd, currLevel);
        prevLevel = currLevel;

        if (isHigh) {
          ctx.save();
          ctx.fillStyle = isOutput ? 'rgba(52, 211, 153, 0.12)' : 'rgba(245, 158, 11, 0.12)';
          ctx.fillRect(xStart, yHigh, STEP_WIDTH, yLow - yHigh);
          ctx.restore();
        }
      });
      ctx.stroke();

      // Small binary value annotations
      samples.forEach((sample, idx) => {
        const raw = sample.signals[sig.name] ?? '0';
        const isHigh = raw === '1' || raw.endsWith('1') || (parseInt(raw, 10) > 0 && !isNaN(parseInt(raw, 10)));
        const xMid = PADDING + LEFT_LABEL_WIDTH + idx * STEP_WIDTH + STEP_WIDTH / 2;
        ctx.fillStyle = isHigh ? sigColor : '#64748b';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(isHigh ? '1' : '0', xMid, isHigh ? yHigh - 5 : yLow + 6);
      });
    }
  });

  // 5. Footer
  const footerY = logicalHeight - PADDING - FOOTER_HEIGHT + 12;
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(PADDING, footerY);
  ctx.lineTo(logicalWidth - PADDING, footerY);
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('VLSI Expert RTL Timing Analyzer  •  High-Resolution Hardware Waveform Export', PADDING + 16, footerY + 18);

  ctx.textAlign = 'right';
  ctx.fillText(new Date().toLocaleDateString(), logicalWidth - PADDING - 16, footerY + 18);

  // 6. Direct PNG image download
  canvas.toBlob((blob) => {
    if (!blob) {
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${cleanName}_waveform.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cleanName}_waveform.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
}

/**
 * Generates and downloads high-resolution timing waveform image (.svg)
 * Also resilient for all problem library entries.
 */
export function downloadWaveformAsSvg(
  problem: Problem,
  simulationResult: SimulationResult | null | undefined,
  signalConfigs?: SignalConfig[]
) {
  const samples = getOrComputeSamples(problem, simulationResult);
  const signals = getEffectiveSignals(problem, signalConfigs);
  const cleanName = sanitizeFilename(problem.title);
  const cyclesCount = samples.length;

  const STEP_WIDTH = 60;
  const HEADER_HEIGHT = 70;
  const SIGNAL_HEIGHT = 50;
  const LEFT_LABEL_WIDTH = 180;
  const svgWidth = LEFT_LABEL_WIDTH + cyclesCount * STEP_WIDTH + 40;
  const svgHeight = HEADER_HEIGHT + signals.length * SIGNAL_HEIGHT + 30;

  const isComb = isCombinationalCircuit(problem);

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}" width="${svgWidth}" height="${svgHeight}" style="background-color: #020617; font-family: monospace;">`;

  // Header Banner
  svg += `
    <rect width="${svgWidth}" height="50" fill="#0f172a" />
    <text x="20" y="30" fill="#38bdf8" font-size="16" font-weight="bold">${isComb ? 'Combinational Waveform Diagram' : 'Digital Waveform Timing Diagram'}: ${problem.title}</text>
    <text x="${svgWidth - 20}" y="30" fill="#94a3b8" font-size="12" text-anchor="end">${isComb ? 'Stimulus Vectors (No Clock)' : 'Cycle-Accurate Simulation'}</text>
    <line x1="0" y1="50" x2="${svgWidth}" y2="50" stroke="#334155" stroke-width="1" />
  `;

  // Cycle Ruler
  samples.forEach((sample, idx) => {
    const x = LEFT_LABEL_WIDTH + idx * STEP_WIDTH;
    svg += `
      <line x1="${x}" y1="50" x2="${x}" y2="${svgHeight}" stroke="#1e293b" stroke-dasharray="2,2" />
      <text x="${x + 8}" y="65" fill="#64748b" font-size="11" font-weight="bold">${isComb ? 'v' : 'c'}${sample.cycle}</text>
    `;
  });

  // Signal Waveforms
  signals.forEach((sig, sIdx) => {
    const yTop = HEADER_HEIGHT + sIdx * SIGNAL_HEIGHT;
    const yHigh = yTop + 10;
    const yLow = yTop + 35;

    const isClock = sig.type === 'clock' || sig.name.toLowerCase().includes('clk');
    const color = isClock ? '#38bdf8' : sig.type === 'input' ? '#f59e0b' : '#34d399';

    // Label on left
    svg += `
      <rect x="10" y="${yTop + 5}" width="160" height="35" rx="6" fill="#0f172a" stroke="#334155" />
      <text x="20" y="${yTop + 26}" fill="#f8fafc" font-size="12" font-weight="bold">${sig.name}</text>
      <text x="160" y="${yTop + 26}" fill="${color}" font-size="10" text-anchor="end" font-weight="bold">${sig.type.toUpperCase()}</text>
    `;

    // Waveform path
    let pathStr = '';
    let prevY: number | null = null;

    samples.forEach((sample, idx) => {
      const rawVal = sample.signals[sig.name] ?? '0';
      const isHigh = rawVal === '1' || rawVal.endsWith('1') || (parseInt(rawVal, 10) > 0 && !isNaN(parseInt(rawVal, 10)));
      const currY = isHigh ? yHigh : yLow;

      const xStart = LEFT_LABEL_WIDTH + idx * STEP_WIDTH;
      const xEnd = xStart + STEP_WIDTH;

      if (idx === 0) {
        pathStr += `M ${xStart} ${currY}`;
      } else {
        if (prevY !== null && prevY !== currY) {
          pathStr += ` L ${xStart} ${currY}`;
        }
      }
      pathStr += ` L ${xEnd} ${currY}`;
      prevY = currY;
    });

    svg += `<path d="${pathStr}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="square" />`;
  });

  svg += `</svg>`;

  downloadSvgFile(svg, `${cleanName}_waveform.svg`);
}

/**
 * Generates and downloads schematic circuit diagram image (.svg)
 */
export function downloadCircuitAsSvg(
  problem: Problem,
  sample: any,
  signalConfigs: SignalConfig[]
) {
  const cleanName = sanitizeFilename(problem.title);
  const inputs = signalConfigs.filter(s => s.type === 'input' || s.type === 'clock');
  const outputs = signalConfigs.filter(s => s.type === 'output');

  const width = 850;
  const height = 450;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="background-color: #020617; font-family: monospace;">`;

  // Header Title
  svg += `
    <rect width="${width}" height="60" fill="#0f172a" />
    <text x="25" y="38" fill="#c084fc" font-size="18" font-weight="bold">RTL Circuit Diagram: ${problem.title}</text>
    <text x="${width - 25}" y="38" fill="#94a3b8" font-size="12" text-anchor="end">Cycle #${sample?.cycle ?? 0}</text>
    <line x1="0" y1="60" x2="${width}" y2="60" stroke="#334155" stroke-width="1.5" />
  `;

  // Inputs Column (Left)
  svg += `<text x="40" y="90" fill="#f59e0b" font-size="12" font-weight="bold">INPUT PINS</text>`;
  inputs.forEach((sig, idx) => {
    const y = 110 + idx * 55;
    const val = sample?.signals[sig.name] ?? '0';
    const isHigh = val === '1' || val.endsWith('1') || (parseInt(val, 10) > 0 && !isNaN(parseInt(val, 10)));
    const valColor = isHigh ? '#34d399' : '#64748b';

    svg += `
      <rect x="40" y="${y}" width="160" height="40" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
      <text x="55" y="${y + 25}" fill="#f8fafc" font-size="13" font-weight="bold">${sig.name}</text>
      <rect x="155" y="${y + 8}" width="30" height="24" rx="4" fill="${isHigh ? '#059669' : '#334155'}" />
      <text x="170" y="${y + 24}" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">${val}</text>

      <!-- Connecting Wire -->
      <line x1="200" y1="${y + 20}" x2="310" y2="${y + 20}" stroke="${valColor}" stroke-width="2.5" />
    `;
  });

  // Center Block: Synthesized Logic Module
  svg += `
    <rect x="310" y="100" width="230" height="280" rx="16" fill="#0f172a" stroke="#a855f7" stroke-width="3" />
    <text x="425" y="140" fill="#a855f7" font-size="14" font-weight="bold" text-anchor="middle">SYNTHESIZED RTL LOGIC</text>
    <text x="425" y="170" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">${problem.title}</text>

    <!-- Internal Gate Diagram Representation -->
    <rect x="340" y="200" width="170" height="150" rx="10" fill="#020617" stroke="#334155" stroke-width="1" />
    <text x="425" y="240" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">TOP: ${problem.topic.toUpperCase()}</text>
    <text x="425" y="270" fill="#94a3b8" font-size="10" text-anchor="middle">LUTs / Gate Array</text>
    <text x="425" y="310" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Status: ACTIVE</text>
  `;

  // Outputs Column (Right)
  svg += `<text x="650" y="90" fill="#34d399" font-size="12" font-weight="bold">OUTPUT PINS</text>`;
  outputs.forEach((sig, idx) => {
    const y = 110 + idx * 55;
    const val = sample?.signals[sig.name] ?? '0';
    const isHigh = val === '1' || val.endsWith('1') || (parseInt(val, 10) > 0 && !isNaN(parseInt(val, 10)));

    svg += `
      <!-- Connecting Wire -->
      <line x1="540" y1="${y + 20}" x2="650" y2="${y + 20}" stroke="${isHigh ? '#34d399' : '#64748b'}" stroke-width="2.5" />

      <rect x="650" y="${y}" width="160" height="40" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
      <text x="665" y="${y + 25}" fill="#f8fafc" font-size="13" font-weight="bold">${sig.name}</text>
      <rect x="765" y="${y + 8}" width="30" height="24" rx="4" fill="${isHigh ? '#059669' : '#334155'}" />
      <text x="780" y="${y + 24}" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">${val}</text>
    `;
  });

  svg += `</svg>`;

  downloadSvgFile(svg, `${cleanName}_circuit_diagram.svg`);
}

