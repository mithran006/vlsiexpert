import { Problem } from '../types';
import { VERILOG_PROBLEMS } from './verilogProblems';
import { SYSTEMVERILOG_PROBLEMS } from './systemVerilogProblems';
import { VHDL_PROBLEMS } from './vhdlProblems';
import { FPGA_PROBLEMS } from './fpgaProblems';
import { SOC_DESIGN_PROBLEMS } from './socDesignProblems';
import { VLSI_GRAPH_PROBLEMS } from './vlsiGraphProblems';
import { UVM_PROBLEMS } from './uvmProblems';
import { DFT_PROBLEMS } from './dftProblems';
import { EMBEDDED_C_PROBLEMS } from './embeddedCProblems';
import { MNEMONICS_PROBLEMS } from './mnemonicsProblems';
import { ARDUINO_PROBLEMS } from './arduinoProblems';
import { RTOS_PROBLEMS } from './rtosProblems';
import { LINUX_PROBLEMS } from './linuxProblems';
import { PYTHON_HW_PROBLEMS } from './pythonHwProblems';
import { CV_ROBOTICS_PROBLEMS } from './cvRoboticsProblems';

/**
 * 3,000 Curated Problems across the 15 Core Hardware Subjects (200 Problems for each subject):
 * 1.  Verilog HDL: 200 problems
 * 2.  SystemVerilog: 200 problems
 * 3.  VHDL: 200 problems
 * 4.  FPGA Architecture: 200 problems
 * 5.  SoC Design: 200 problems
 * 6.  VLSI Graph Theory & EDA: 200 problems
 * 7.  UVM Methodology: 200 problems
 * 8.  DFT & Physical Design: 200 problems
 * 9.  Embedded C Firmware: 200 problems
 * 10. Microcontroller Assembly (8051): 200 problems
 * 11. Arduino AVR Hardware: 200 problems
 * 12. RTOS System Programming: 200 problems
 * 13. Linux for EDA: 200 problems
 * 14. Python Hardware (MicroPython): 200 problems
 * 15. Computer Vision & Robotics: 200 problems
 * Total: 3,000 Core Hardware Practice Problems (200 for each subject)
 */
import { getStandardCircuitDefinition, isCombinationalCircuit } from '../utils/circuitClassification';

const rawProblems: Problem[] = [
  ...VERILOG_PROBLEMS,
  ...SYSTEMVERILOG_PROBLEMS,
  ...VHDL_PROBLEMS,
  ...FPGA_PROBLEMS,
  ...SOC_DESIGN_PROBLEMS,
  ...VLSI_GRAPH_PROBLEMS,
  ...UVM_PROBLEMS,
  ...DFT_PROBLEMS,
  ...EMBEDDED_C_PROBLEMS,
  ...MNEMONICS_PROBLEMS,
  ...ARDUINO_PROBLEMS,
  ...RTOS_PROBLEMS,
  ...LINUX_PROBLEMS,
  ...PYTHON_HW_PROBLEMS,
  ...CV_ROBOTICS_PROBLEMS,
];

export const ALL_PROBLEMS: Problem[] = rawProblems.map(p => {
  const std = getStandardCircuitDefinition(p);
  const isComb = isCombinationalCircuit(p);
  const title = (p.title || '').toLowerCase();

  // Determine ideal waveform cycle count based on the specific digital circuit problem
  let targetCycles: number;
  if (isComb) {
    if (
      (title.includes('half adder') && !title.includes('full adder')) ||
      title.includes('half subtractor') ||
      title.includes('2-to-1') || title.includes('2:1') ||
      title.includes('basic gate') || title.includes('xor') || title.includes('xnor') ||
      title.includes('nand') || title.includes('nor')
    ) {
      targetCycles = 4; // 4 truth table vectors: 00, 01, 10, 11
    } else if (
      title.includes('full adder') || title.includes('full subtractor') ||
      title.includes('3-to-8') || title.includes('majority') ||
      title.includes('3-input')
    ) {
      targetCycles = 8; // 8 truth table vectors: 000 to 111
    } else if (title.includes('4-to-1') || title.includes('4:1') || title.includes('priority encoder') || title.includes('comparator')) {
      targetCycles = 8;
    } else {
      targetCycles = p.testbenchConfig?.cycles && p.testbenchConfig.cycles > 4 ? p.testbenchConfig.cycles : 8;
    }
  } else {
    // Sequential circuits
    if (title.includes('flip-flop') || title.includes('latch') || title.includes('dff') || title.includes('shift register')) {
      targetCycles = 8;
    } else if (title.includes('sequence detector') || title.includes('fsm') || title.includes('state machine')) {
      targetCycles = 12;
    } else if (title.includes('counter')) {
      targetCycles = (title.includes('mod-6') || title.includes('mod 6')) ? 12 : 16;
    } else {
      targetCycles = p.testbenchConfig?.cycles && p.testbenchConfig.cycles > 4 ? p.testbenchConfig.cycles : 12;
    }
  }

  if (!std) {
    return {
      ...p,
      testbenchConfig: {
        ...p.testbenchConfig,
        cycles: targetCycles
      }
    };
  }

  return {
    ...p,
    starterCode: std.starterCode || p.starterCode,
    solutionCode: std.solutionCode || p.solutionCode,
    signals: std.signals || p.signals,
    testbenchConfig: {
      ...p.testbenchConfig,
      signals: std.signals || p.testbenchConfig?.signals || p.signals,
      cycles: targetCycles,
      expectedOutputs: std.expectedOutputs || p.testbenchConfig?.expectedOutputs
    }
  };
});

export function getProblemsByTopic(topic: string): Problem[] {
  if (topic === 'all') return ALL_PROBLEMS;
  return ALL_PROBLEMS.filter(p => p.topic === topic);
}

export function getProblemById(id: string): Problem | undefined {
  return ALL_PROBLEMS.find(p => p.id === id);
}
