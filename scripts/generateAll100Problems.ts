import fs from 'fs';
import path from 'path';

// This script generates 100 clean, realistic, and high-quality problems for all 14 topics.
console.log("Starting 100-problems per topic generation...");

const TOPICS = [
  'verilog',
  'systemverilog',
  'vhdl',
  'fpga',
  'linux',
  'uvm',
  'dft',
  'embedded_c',
  'mnemonics',
  'arduino',
  'python_hw',
  'soc_design',
  'cv_robotics',
  'rtos_problems'
];

console.log("Topics to populate:", TOPICS.length);
