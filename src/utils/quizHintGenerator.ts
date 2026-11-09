import { QuizQuestion } from '../data/quizData';

/**
 * Generates an educational, non-spoiling hint for a quiz question.
 * Crucially, it NEVER reveals the correct answer option or text.
 */
export function getQuizHint(question: QuizQuestion): string {
  // 1. If explicit hint exists on question, return it
  if (question.hint && question.hint.trim().length > 0) {
    return question.hint.trim();
  }

  const qText = question.question.toLowerCase();
  const cat = question.category.toLowerCase();
  const topic = question.topicId.toLowerCase();

  // 2. High-precision conceptual matchers based on keywords in Question & Category

  // Verilog & HDL
  if (qText.includes('blocking') && qText.includes('non-blocking')) {
    return 'Consider IEEE Verilog event regions (Active vs Non-Blocking Assignment / NBA). Which operator schedules updates after all right-hand sides are evaluated to avoid clock-edge race conditions in sequential logic?';
  }
  if (qText.includes('wire') && qText.includes('reg')) {
    return 'Remember that in Verilog-2001, "reg" represents procedural variable syntax rather than a guaranteed physical register. What kind of logic is synthesized if all branches are specified inside an always @(*) block?';
  }
  if (qText.includes('tri-state') || qText.includes('high-impedance') || qText.includes('high-z')) {
    return 'Recall how high-impedance (1\'bz) is conditionally assigned on bidirectional buses when the output enable signal is deasserted.';
  }
  if (qText.includes('fsm') || qText.includes('state machine') || qText.includes('mealy') || qText.includes('moore')) {
    return 'Contrast how outputs are formed: does the combinational output path depend directly on primary inputs as well as state registers, or strictly on the registered state bits alone?';
  }
  if (qText.includes('setup time') || qText.includes('t_setup') || qText.includes('setup slack')) {
    return 'Focus on the synchronization window relative to the active clock edge. Does setup time dictate data stability before the clock arrives or after?';
  }
  if (qText.includes('hold time') || qText.includes('t_hold') || qText.includes('hold slack')) {
    return 'Consider clock skew and the minimum time data must remain unchanged immediately AFTER the active clock transition to prevent race-through.';
  }
  if (qText.includes('metastability') || qText.includes('synchronizer') || qText.includes('mtbf')) {
    return 'Think about asynchronous signal transitions arriving inside the setup/hold aperture. How does cascaded 2-flip-flop synchronizers increase Mean Time Between Failures?';
  }
  if (qText.includes('gray code') || qText.includes('fifo') || qText.includes('clock domain crossing') || qText.includes('cdc')) {
    return 'In multi-bit domain crossings, simultaneous bit toggles cause multi-bit synchronization hazards. Which coding scheme guarantees that adjacent numeric values differ by exactly one single bit?';
  }
  if (qText.includes('jk flip-flop') || qText.includes('toggle mode')) {
    return 'Recall the 4 excitation states of a JK flip-flop: No Change (0,0), Reset (0,1), Set (1,0), and Toggle. What happens when both inputs are energized?';
  }
  if (qText.includes('multiplexer') || qText.includes('mux')) {
    return 'Think about binary tree stages. How many 2-input selector stages are needed to build a larger power-of-two multiplexer?';
  }

  // SystemVerilog & UVM
  if (topic === 'systemverilog' || topic === 'uvm') {
    if (qText.includes('always_comb') || qText.includes('always_latch') || qText.includes('always_ff')) {
      return 'Consider compile-time intent checking in SystemVerilog. Which procedural block enforces zero unintended latches and automatically calculates the sensitivity list?';
    }
    if (qText.includes('factory') || qText.includes('override')) {
      return 'Think about polymorphism in UVM: how do type-overrides and instance-overrides allow swapping testbench components without modifying original source code?';
    }
    if (qText.includes('phase') || qText.includes('build_phase') || qText.includes('run_phase')) {
      return 'Recall phase execution ordering in UVM: which structural phases run top-down versus bottom-up, and which phase is the only time-consuming (task-based) phase?';
    }
    if (qText.includes('objection') || qText.includes('raise_objection') || qText.includes('drop_objection')) {
      return 'Think about test termination coordination: how does the objection mechanism prevent the simulation from ending while transactions are in-flight?';
    }
    if (qText.includes('sequence') || qText.includes('sequencer') || qText.includes('driver')) {
      return 'Review TLM communication between sequences and drivers: how does get_next_item() and item_done() handshake transaction packets?';
    }
  }

  // DFT & ATPG
  if (topic === 'dft') {
    if (qText.includes('scan') || qText.includes('scan chain')) {
      return 'Think about converting sequential flip-flops into shift registers during test mode to make internal state observable and controllable.';
    }
    if (qText.includes('stuck-at') || qText.includes('fault')) {
      return 'Consider the classical fault model: to test for a node stuck at 0, what value must be driven to excite the fault, and how is the effect propagated to a primary output?';
    }
    if (qText.includes('jtag') || qText.includes('1149.1') || qText.includes('tap')) {
      return 'Review the IEEE 1149.1 Test Access Port signals (TCK, TMS, TDI, TDO) and how the 16-state TAP FSM transitions based on TMS levels on the rising edge of TCK.';
    }
    if (qText.includes('bist') || qText.includes('lfsr') || qText.includes('misr')) {
      return 'Consider pseudo-random pattern generation (PRPG) using Linear Feedback Shift Registers and output compaction into a signature register.';
    }
  }

  // Embedded C & Microcontrollers
  if (topic === 'embedded_c' || topic === 'mnemonics' || topic === 'arduino') {
    if (qText.includes('volatile')) {
      return 'Consider how aggressive compiler optimization works. If a memory address can be altered asynchronously by hardware registers or ISRs, which qualifier prevents caching the value in a CPU register?';
    }
    if (qText.includes('isr') || qText.includes('interrupt')) {
      return 'Reflect on interrupt latency and context switching: why should blocking calls, unbounded delays, dynamic memory allocations, and heavy I/O never be placed inside an ISR?';
    }
    if (qText.includes('atomic') || qText.includes('critical section')) {
      return 'Think about read-modify-write cycles interrupted mid-execution. How can race conditions on shared global flags between the main thread and ISR be eliminated?';
    }
    if (qText.includes('djnz')) {
      return 'Break down the mnemonic letters: "D" for Decrement operand by 1, and "JNZ" for Jump if Not Zero.';
    }
    if (qText.includes('cjne')) {
      return 'Break down the mnemonic: Compare operands, and Jump if Not Equal. Also note how the Carry flag is affected if operand 1 is less than operand 2.';
    }
    if (qText.includes('pull-up') || qText.includes('open-drain') || qText.includes('floating')) {
      return 'Consider high-impedance inputs: when an external switch is open, an un-terminated input line floats into an indeterminate logic state. Which internal resistor pulls the voltage rail to a known logic high?';
    }
    if (qText.includes('millis') || qText.includes('delay')) {
      return 'Contrast blocking delay() with non-blocking timers. How does tracking elapsed hardware timer ticks allow concurrent sensor polling and LED blinking?';
    }
  }

  // RTOS
  if (topic === 'rtos_problems') {
    if (qText.includes('priority inversion')) {
      return 'Consider a high-priority task blocked on a mutex held by a low-priority task, while a medium-priority task preempts the low-priority task. Which inheritance protocol dynamically boosts the holder\'s priority?';
    }
    if (qText.includes('mutex') && qText.includes('semaphore')) {
      return 'Focus on task ownership and synchronization vs resource exclusion: which primitive has strict ownership semantics (only the locking task can unlock), and which is used for signaling?';
    }
    if (qText.includes('deadlock')) {
      return 'Recall Coffman\'s conditions for deadlock: mutual exclusion, hold-and-wait, no preemption, and circular wait. How does strict hierarchical resource ordering break circular wait?';
    }
  }

  // CMOS & VLSI Design
  if (topic === 'cmos' || topic === 'electronics_devices' || topic === 'linear_ic') {
    if (qText.includes('mobility') || qText.includes('width') || qText.includes('ratio') || qText.includes('pmos') || qText.includes('nmos')) {
      return 'Recall the physical difference in charge carrier mobility in silicon: electrons (nMOS) exhibit ~2x to 3x higher drift mobility than holes (pMOS). How must pMOS channel width (Wp) be scaled relative to nMOS (Wn) for symmetric rise and fall delays?';
    }
    if (qText.includes('dynamic power') || qText.includes('power dissipation') || qText.includes('alpha * c * v^2 * f')) {
      return 'Review the CMOS dynamic switching power formula P = α · C_L · V_dd² · f. Notice the quadratic dependency on supply voltage compared to linear dependency on frequency.';
    }
    if (qText.includes('finfet') || qText.includes('gaa') || qText.includes('nanosheet') || qText.includes('short channel')) {
      return 'Consider electrostatic gate control over the conduction channel: wrapping the gate oxide on multiple sides (3D Fin or all 4 sides in GAA nanosheets) dramatically suppresses drain-induced barrier lowering (DIBL) and subthreshold leakage.';
    }
    if (qText.includes('body effect') || qText.includes('threshold voltage') || qText.includes('vth')) {
      return 'Consider source-to-bulk reverse bias (V_SB > 0). How does expanding the depletion region under the channel increase the required gate threshold voltage?';
    }
  }

  // Semiconductor Packaging & 3D TSVs
  if (topic === 'semiconductor_packaging') {
    if (qText.includes('tsv') || qText.includes('through-silicon via')) {
      return 'Think about vertical electrical interconnects etched directly through silicon dies: how does microscopic pitch and ultra-short vertical path reduce RC parasitics compared to long wire bonds?';
    }
    if (qText.includes('hbm') || qText.includes('high bandwidth memory')) {
      return 'Consider wide parallel buses (1024 to 2048 bits) placed on silicon passive interposers (2.5D integration) adjacent to the compute GPU die, avoiding standard high-capacitance PCB traces.';
    }
  }

  // FPGA & SoC
  if (topic === 'fpga' || topic === 'soc_design') {
    if (qText.includes('lut') || qText.includes('look-up table')) {
      return 'Remember that FPGA combinational logic is not built from discrete NAND/NOR gates, but small SRAM-based Look-Up Tables acting as programmed truth tables with multiplexer trees.';
    }
    if (qText.includes('dsp') || qText.includes('bram')) {
      return 'Recall dedicated hard silicon blocks in modern FPGAs: dual-port Block RAMs provide dense on-chip storage while DSP48 slices execute single-cycle multiply-accumulate (MAC) operations.';
    }
  }

  // Quantum Computing
  if (topic === 'quantum_prog') {
    if (qText.includes('hadamard') || qText.includes('superposition')) {
      return 'Consider which unitary gate maps orthogonal basis states |0⟩ and |1⟩ into an equal linear combination (|0⟩ + |1⟩)/√2 and (|0⟩ - |1⟩)/√2.';
    }
    if (qText.includes('cnot') || qText.includes('bell state') || qText.includes('entanglement')) {
      return 'Think about 2-qubit entangling operations: a Hadamard on qubit 0 followed by a CNOT targeted on qubit 1 creates the maximally entangled Bell state (|00⟩ + |11⟩)/√2.';
    }
  }

  // 3. Fallback: derive an insightful pedagogical hint from the question and category
  // Extract key non-spoiling context from explanation without revealing the direct answer
  const explanation = question.explanation || '';
  const cleanExp = sanitizeExplanationToHint(explanation, question);

  if (cleanExp) {
    return cleanExp;
  }

  return `Focus on the fundamental rules of ${question.category || 'this topic'}. Analyze the trade-offs, standard industry conventions, and circuit/system behavior described in the question.`;
}

/**
 * Sanitizes an explanation to extract its core concept as a hint,
 * rigorously removing any direct answers or option text.
 */
function sanitizeExplanationToHint(explanation: string, question: QuizQuestion): string {
  if (!explanation || explanation.length < 10) return '';

  let hintText = explanation;

  // Mask out any exact occurrence of the correct answer string from the explanation
  const correctOptionText = question.options[question.correctAnswer];
  if (correctOptionText && correctOptionText.length > 2) {
    // Case-insensitive replacement of the exact correct answer phrase
    const escaped = correctOptionText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
    hintText = hintText.replace(regex, '[the key property]');
  }

  // Remove direct phrases like "The correct answer is", "Therefore option A is correct", etc.
  hintText = hintText
    .replace(/(?:the\s+)?correct\s+answer\s+is\s+[^.,;]+/gi, 'the fundamental principle governs')
    .replace(/option\s+[A-D]\s+is\s+correct/gi, 'this condition applies')
    .replace(/hence,?\s+option\s+[A-D]/gi, 'hence this behavior')
    .trim();

  // If the explanation starts with a direct declaration, convert to a guiding thought
  if (/^when\b/i.test(hintText)) {
    return `Observe what happens: ${hintText}`;
  }
  if (/^in\b/i.test(hintText)) {
    return `Recall that ${hintText}`;
  }
  if (/^because\b/i.test(hintText)) {
    return `Think about why: ${hintText}`;
  }

  return `Consider this key concept: ${hintText}`;
}
