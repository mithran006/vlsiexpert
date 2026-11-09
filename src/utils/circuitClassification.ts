import { Problem, SignalConfig, ExpectedOutput } from '../types';

/**
 * Checks whether a topic is a digital hardware description language (VLSI HDL/HVL)
 * where testbenches, Vivado suites, and waveform simulation are applicable.
 * According to specification: keep ONLY for 'verilog', 'systemverilog', 'vhdl', and 'uvm'.
 * Excludes non-VLSI programming such as CV/Robotics, Arduino, Python, Embedded C, Linux, etc.
 */
export function isVlsiHdlTopic(topic?: string): boolean {
  if (!topic) return false;
  const t = topic.toLowerCase();
  return t === 'verilog' || t === 'systemverilog' || t === 'vhdl' || t === 'uvm' || t === 'fpga' || t === 'dft' || t === 'soc_design';
}

/**
 * Checks whether a topic is strictly a digital Hardware Description Language (HDL)
 * where the 3 modeling styles (Structural, Dataflow, and Behavioral) apply.
 * Strictly: 'verilog', 'systemverilog', and 'vhdl'.
 */
export function isHdlTopic(topic?: string): boolean {
  if (!topic) return false;
  const t = topic.toLowerCase();
  return t === 'verilog' || t === 'systemverilog' || t === 'vhdl';
}

/**
 * Checks whether a given problem represents a combinational logic circuit.
 * Combinational circuits are memoryless circuits where the output depends
 * purely on the current input values, and therefore do NOT require a clock or flip-flops.
 */
export function isCombinationalCircuit(
  problem: {
    title?: string;
    topic?: string;
    tags?: string[];
    circuitType?: string;
    starterCode?: string;
    solutionCode?: string;
    description?: string;
    signals?: SignalConfig[];
  } | null | undefined
): boolean {
  if (!problem) return false;
  if (problem.circuitType === 'combinational') return true;
  if (problem.circuitType === 'sequential') return false;

  const title = (problem.title || '').toLowerCase();
  const desc = (problem.description || '').toLowerCase();
  const tags = (problem.tags || []).map(t => t.toLowerCase());

  // 1. Tag-based combinational indicators
  if (tags.some(t => t === 'combinational' || t === 'combinational-logic' || t === 'boolean-algebra' || t === 'logic-gates')) {
    return true;
  }

  // 2. Explicit sequential exclusions (circuits requiring clock, flip-flops, latches, or memory states)
  const sequentialKeywords = [
    'flip-flop', 'flip_flop', 'dff', 'jk flip', 't-ff', 'sr-ff', 'latch', 'transparent latch',
    'counter', 'up counter', 'down counter', 'ring counter', 'johnson counter', 'mod-', 'decade counter',
    'fsm', 'finite state', 'sequence detector', 'traffic light', 'vending machine', 'elevator',
    'shift register', 'siso', 'sipo', 'piso', 'pipo', 'universal shift',
    'fifo', 'ram', 'rom', 'memory', 'dual-port', 'register file', 'lifo', 'stack',
    'clock divider', 'pll', 'synchronizer', 'debounce', 'debouncer', 'pipeline',
    'uart transmitter', 'uart receiver', 'spi master', 'spi slave', 'i2c master', 'i2c slave', 'axi', 'apb',
    'baud rate', 'pwm', 'pulse detector', 'edge detector', 'pulse stretcher', 'monostable',
    'always_ff', 'clocking block', 'cdc', 'glitchless clock', 'icg', 'dpll', 'mac', 'lfsr', 'prng', 'crc-'
  ];

  if (sequentialKeywords.some(kw => title.includes(kw) || desc.includes(kw))) {
    return false;
  }

  // 3. Combinational circuit keywords (pure memoryless logic)
  const combinationalKeywords = [
    'multiplexer', 'mux', 'demultiplexer', 'demux',
    'decoder', 'encoder', 'priority encoder',
    'adder', 'half adder', 'full adder', 'ripple carry', 'carry lookahead', 'cla', 'carry save', 'carry select', 'bcd adder',
    'subtractor', 'half subtractor', 'full subtractor',
    'comparator', 'magnitude comparator',
    'parity generator', 'parity checker', 'even parity', 'odd parity',
    'gray code', 'binary to gray', 'gray to binary', 'code converter', 'bcd to 7-segment', 'excess-3',
    'alu', 'arithmetic logic unit',
    'logic gate', 'and gate', 'or gate', 'xor gate', 'nand gate', 'nor gate', 'xnor gate', 'inverter', 'not gate', 'buffer', 'tri-state',
    'barrel shifter', 'leading zero', 'hamming code', 'syndrome',
    'wallace tree', 'booth multiplier', 'multiplier',
    'always_comb', 'truth table', 'boolean',
    'priority arbiter 4-request fixed', 'fixed priority arbiter'
  ];

  if (combinationalKeywords.some(kw => title.includes(kw) || desc.includes(kw))) {
    return true;
  }

  // 4. Inspect code and port definitions: if no clock/reset exists, it's combinational
  const code = ((problem.solutionCode || '') + ' ' + (problem.starterCode || '')).toLowerCase();
  const hasClockEdge = /\b(posedge|negedge|rising_edge|falling_edge|always_ff)\b/.test(code);
  const hasClockPort = /\b(clk|clock|clk_in|sys_clk)\b/.test(code);

  if (!hasClockEdge && !hasClockPort) {
    return true;
  }

  return false;
}

/**
 * Returns accurate combinational circuit ports, code, and testbench configuration
 * for common combinational benchmark problems, completely eliminating any clock signal.
 */
export function getCombinationalCleanDefinition(
  problem: Problem
): { starterCode: string; solutionCode: string; signals: SignalConfig[]; expectedOutputs: ExpectedOutput[] } | null {
  if (!isCombinationalCircuit(problem)) return null;

  const title = problem.title.toLowerCase();

  // 1. 2-to-1 Multiplexer
  if (title.includes('2-to-1 multiplexer') || title.includes('2:1 mux') || title === '2-to-1 multiplexer') {
    return {
      starterCode: `module multiplexer_2to1 (
    input wire a,
    input wire b,
    input wire sel,
    output wire y
);
    // TODO: Implement 2-to-1 Multiplexer (Combinational)
    // When sel = 0, y = a; when sel = 1, y = b.

endmodule`,
      solutionCode: `module multiplexer_2to1 (
    input wire a,
    input wire b,
    input wire sel,
    output wire y
);
    assign y = sel ? b : a;
endmodule`,
      signals: [
        { name: 'a', type: 'input', initialValue: '0', description: 'Data input 0' },
        { name: 'b', type: 'input', initialValue: '1', description: 'Data input 1' },
        { name: 'sel', type: 'input', initialValue: '0', description: 'Select line' },
        { name: 'y', type: 'output', initialValue: '0', description: 'Selected data output' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'y', value: '0' },
        { cycle: 1, signalName: 'y', value: '1' }
      ]
    };
  }

  // 2. 4-to-1 Multiplexer (Case Statement or Ternary or One-Hot)
  if (title.includes('4-to-1 multiplexer') || title.includes('4:1 mux') || title.includes('one-hot 4-to-1')) {
    return {
      starterCode: `module multiplexer_4to1 (
    input wire [3:0] d,
    input wire [1:0] sel,
    output reg y
);
    // TODO: Implement 4-to-1 Multiplexer (Combinational logic)
    // Selects d[0] for sel=00, d[1] for sel=01, d[2] for sel=10, d[3] for sel=11.

endmodule`,
      solutionCode: `module multiplexer_4to1 (
    input wire [3:0] d,
    input wire [1:0] sel,
    output reg y
);
    always @(*) begin
        case (sel)
            2'b00: y = d[0];
            2'b01: y = d[1];
            2'b10: y = d[2];
            2'b11: y = d[3];
            default: y = 1'b0;
        endcase
    end
endmodule`,
      signals: [
        { name: 'd[3:0]', type: 'input', initialValue: '1010', description: '4-bit Data inputs' },
        { name: 'sel[1:0]', type: 'input', initialValue: '00', description: '2-bit Select lines' },
        { name: 'y', type: 'output', initialValue: '0', description: 'Multiplexed Output' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'y', value: '0' },
        { cycle: 1, signalName: 'y', value: '1' }
      ]
    };
  }

  // 3. 8-to-1 Multiplexer
  if (title.includes('8-to-1 multiplexer') || title.includes('8:1 mux')) {
    return {
      starterCode: `module multiplexer_8to1 (
    input wire [7:0] in,
    input wire [2:0] sel,
    output wire out
);
    // TODO: Implement 8-to-1 Multiplexer (Combinational logic)

endmodule`,
      solutionCode: `module multiplexer_8to1 (
    input wire [7:0] in,
    input wire [2:0] sel,
    output wire out
);
    assign out = in[sel];
endmodule`,
      signals: [
        { name: 'in[7:0]', type: 'input', initialValue: '10101010' },
        { name: 'sel[2:0]', type: 'input', initialValue: '000' },
        { name: 'out', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'out', value: '0' }
      ]
    };
  }

  // 4. 16-to-1 Hierarchical Multiplexer
  if (title.includes('16-to-1')) {
    return {
      starterCode: `module multiplexer_16to1 (
    input wire [15:0] in,
    input wire [3:0] sel,
    output wire out
);
    // TODO: Implement 16-to-1 Multiplexer (Combinational)

endmodule`,
      solutionCode: `module multiplexer_16to1 (
    input wire [15:0] in,
    input wire [3:0] sel,
    output wire out
);
    assign out = in[sel];
endmodule`,
      signals: [
        { name: 'in[15:0]', type: 'input', initialValue: '1010110011110000' },
        { name: 'sel[3:0]', type: 'input', initialValue: '0000' },
        { name: 'out', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'out', value: '0' }
      ]
    };
  }

  // 5. Half Adder (do not match 'full adder using half adders')
  if (title.includes('half adder') && !title.includes('full adder')) {
    return {
      starterCode: `module half_adder (
    input wire a,
    input wire b,
    output wire sum,
    output wire cout
);
    // TODO: Implement Gate-Level / RTL Half Adder (Combinational)

endmodule`,
      solutionCode: `module half_adder (
    input wire a,
    input wire b,
    output wire sum,
    output wire cout
);
    assign sum = a ^ b;
    assign cout = a & b;
endmodule`,
      signals: [
        { name: 'a', type: 'input', initialValue: '0' },
        { name: 'b', type: 'input', initialValue: '0' },
        { name: 'sum', type: 'output', initialValue: '0' },
        { name: 'cout', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'sum', value: '0' },
        { cycle: 0, signalName: 'cout', value: '0' }
      ]
    };
  }

  // 6. Full Adder
  if (title.includes('full adder')) {
    return {
      starterCode: `module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);
    // TODO: Implement Full Adder (Combinational)

endmodule`,
      solutionCode: `module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);
    assign sum = a ^ b ^ cin;
    assign cout = (a & b) | (cin & (a ^ b));
endmodule`,
      signals: [
        { name: 'a', type: 'input', initialValue: '0' },
        { name: 'b', type: 'input', initialValue: '1' },
        { name: 'cin', type: 'input', initialValue: '0' },
        { name: 'sum', type: 'output', initialValue: '1' },
        { name: 'cout', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'sum', value: '1' },
        { cycle: 0, signalName: 'cout', value: '0' }
      ]
    };
  }

  // 7. Ripple Carry Adder (4-bit or with overflow)
  if (title.includes('ripple carry adder') || title.includes('carry lookahead') || title.includes('carry select') || title.includes('carry save')) {
    const is8bit = title.includes('8-bit');
    const width = is8bit ? 8 : 4;
    const maxVal = is8bit ? '00000000' : '0000';
    return {
      starterCode: `module adder_${width}bit (
    input wire [${width - 1}:0] a,
    input wire [${width - 1}:0] b,
    input wire cin,
    output wire [${width - 1}:0] sum,
    output wire cout
);
    // TODO: Implement ${width}-bit Adder (Combinational - No Clock)

endmodule`,
      solutionCode: `module adder_${width}bit (
    input wire [${width - 1}:0] a,
    input wire [${width - 1}:0] b,
    input wire cin,
    output wire [${width - 1}:0] sum,
    output wire cout
);
    assign {cout, sum} = a + b + cin;
endmodule`,
      signals: [
        { name: `a[${width - 1}:0]`, type: 'input', initialValue: is8bit ? '00000101' : '0101' },
        { name: `b[${width - 1}:0]`, type: 'input', initialValue: is8bit ? '00000011' : '0011' },
        { name: 'cin', type: 'input', initialValue: '0' },
        { name: `sum[${width - 1}:0]`, type: 'output', initialValue: is8bit ? '00001000' : '1000' },
        { name: 'cout', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: `sum[${width - 1}:0]`, value: is8bit ? '00001000' : '1000' }
      ]
    };
  }

  // 8. 4-bit Binary Full Subtractor
  if (title.includes('subtractor')) {
    return {
      starterCode: `module subtractor_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    input wire bin,
    output wire [3:0] diff,
    output wire bout
);
    // TODO: Implement 4-bit Binary Subtractor (Combinational)

endmodule`,
      solutionCode: `module subtractor_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    input wire bin,
    output wire [3:0] diff,
    output wire bout
);
    assign {bout, diff} = a - b - bin;
endmodule`,
      signals: [
        { name: 'a[3:0]', type: 'input', initialValue: '1000' },
        { name: 'b[3:0]', type: 'input', initialValue: '0011' },
        { name: 'bin', type: 'input', initialValue: '0' },
        { name: 'diff[3:0]', type: 'output', initialValue: '0101' },
        { name: 'bout', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'diff[3:0]', value: '0101' }
      ]
    };
  }

  // 9. 4-bit Magnitude Comparator
  if (title.includes('magnitude comparator') || title.includes('comparator')) {
    return {
      starterCode: `module magnitude_comparator_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    output wire a_gt_b,
    output wire a_eq_b,
    output wire a_lt_b
);
    // TODO: Implement 4-bit Magnitude Comparator (Combinational)

endmodule`,
      solutionCode: `module magnitude_comparator_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    output wire a_gt_b,
    output wire a_eq_b,
    output wire a_lt_b
);
    assign a_gt_b = (a > b);
    assign a_eq_b = (a == b);
    assign a_lt_b = (a < b);
endmodule`,
      signals: [
        { name: 'a[3:0]', type: 'input', initialValue: '0101' },
        { name: 'b[3:0]', type: 'input', initialValue: '0011' },
        { name: 'a_gt_b', type: 'output', initialValue: '1' },
        { name: 'a_eq_b', type: 'output', initialValue: '0' },
        { name: 'a_lt_b', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'a_gt_b', value: '1' }
      ]
    };
  }

  // 10. Decoders: 3-to-8 Binary Decoder or 2-to-4 or 4-to-16
  if (title.includes('decoder')) {
    if (title.includes('2-to-4')) {
      return {
        starterCode: `module decoder_2to4 (
    input wire [1:0] in,
    input wire en,
    output wire [3:0] out
);
    // TODO: Implement 2-to-4 Binary Decoder with Enable (Combinational)

endmodule`,
        solutionCode: `module decoder_2to4 (
    input wire [1:0] in,
    input wire en,
    output wire [3:0] out
);
    assign out = en ? (4'b0001 << in) : 4'b0000;
endmodule`,
        signals: [
          { name: 'in[1:0]', type: 'input', initialValue: '00' },
          { name: 'en', type: 'input', initialValue: '1' },
          { name: 'out[3:0]', type: 'output', initialValue: '0001' }
        ],
        expectedOutputs: [
          { cycle: 0, signalName: 'out[3:0]', value: '0001' }
        ]
      };
    }

    if (title.includes('bcd to 7-segment') || title.includes('7-segment')) {
      return {
        starterCode: `module bcd_to_7segment (
    input wire [3:0] bcd,
    output reg [6:0] seg
);
    // TODO: Implement BCD to 7-Segment Decoder (a,b,c,d,e,f,g active-high)
    always @(*) begin
        // Map bcd digit 0-9 to 7-segment display
    end

endmodule`,
        solutionCode: `module bcd_to_7segment (
    input wire [3:0] bcd,
    output reg [6:0] seg
);
    always @(*) begin
        case (bcd)
            4'd0: seg = 7'b0111111;
            4'd1: seg = 7'b0000110;
            4'd2: seg = 7'b1011011;
            4'd3: seg = 7'b1001111;
            4'd4: seg = 7'b1100110;
            4'd5: seg = 7'b1101101;
            4'd6: seg = 7'b1111101;
            4'd7: seg = 7'b0000111;
            4'd8: seg = 7'b1111111;
            4'd9: seg = 7'b1101111;
            default: seg = 7'b0000000;
        endcase
    end
endmodule`,
        signals: [
          { name: 'bcd[3:0]', type: 'input', initialValue: '0000' },
          { name: 'seg[6:0]', type: 'output', initialValue: '0111111' }
        ],
        expectedOutputs: [
          { cycle: 0, signalName: 'seg[6:0]', value: '0111111' }
        ]
      };
    }

    // Default 3-to-8 Decoder
    return {
      starterCode: `module decoder_3to8 (
    input wire [2:0] in,
    input wire en,
    output wire [7:0] out
);
    // TODO: Implement 3-to-8 Active-High Binary Decoder (Combinational)

endmodule`,
      solutionCode: `module decoder_3to8 (
    input wire [2:0] in,
    input wire en,
    output wire [7:0] out
);
    assign out = en ? (8'b00000001 << in) : 8'b00000000;
endmodule`,
      signals: [
        { name: 'in[2:0]', type: 'input', initialValue: '000' },
        { name: 'en', type: 'input', initialValue: '1' },
        { name: 'out[7:0]', type: 'output', initialValue: '00000001' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'out[7:0]', value: '00000001' }
      ]
    };
  }

  // 11. Encoders: Priority Encoder 4-to-2 or 8-to-3
  if (title.includes('priority encoder') || title.includes('encoder')) {
    if (title.includes('8-to-3')) {
      return {
        starterCode: `module priority_encoder_8to3 (
    input wire [7:0] in,
    output reg [2:0] out,
    output reg valid
);
    // TODO: Implement Priority Encoder 8-to-3 with Valid Flag (Combinational)

endmodule`,
        solutionCode: `module priority_encoder_8to3 (
    input wire [7:0] in,
    output reg [2:0] out,
    output reg valid
);
    always @(*) begin
        valid = |in;
        casex (in)
            8'b1xxxxxxx: out = 3'd7;
            8'b01xxxxxx: out = 3'd6;
            8'b001xxxxx: out = 3'd5;
            8'b0001xxxx: out = 3'd4;
            8'b00001xxx: out = 3'd3;
            8'b000001xx: out = 3'd2;
            8'b0000001x: out = 3'd1;
            8'b00000001: out = 3'd0;
            default: out = 3'd0;
        endcase
    end
endmodule`,
        signals: [
          { name: 'in[7:0]', type: 'input', initialValue: '10000000' },
          { name: 'out[2:0]', type: 'output', initialValue: '111' },
          { name: 'valid', type: 'output', initialValue: '1' }
        ],
        expectedOutputs: [
          { cycle: 0, signalName: 'out[2:0]', value: '111' }
        ]
      };
    }

    return {
      starterCode: `module priority_encoder_4to2 (
    input wire [3:0] in,
    output reg [1:0] out,
    output reg valid
);
    // TODO: Implement Priority Encoder 4-to-2 (Combinational)

endmodule`,
      solutionCode: `module priority_encoder_4to2 (
    input wire [3:0] in,
    output reg [1:0] out,
    output reg valid
);
    always @(*) begin
        valid = |in;
        casex (in)
            4'b1xxx: out = 2'b11;
            4'b01xx: out = 2'b10;
            4'b001x: out = 2'b01;
            4'b0001: out = 2'b00;
            default: out = 2'b00;
        endcase
    end
endmodule`,
      signals: [
        { name: 'in[3:0]', type: 'input', initialValue: '1000' },
        { name: 'out[1:0]', type: 'output', initialValue: '11' },
        { name: 'valid', type: 'output', initialValue: '1' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'out[1:0]', value: '11' }
      ]
    };
  }

  // 12. Gray Code to Binary / Binary to Gray Code
  if (title.includes('gray code to binary')) {
    return {
      starterCode: `module gray_to_binary_4bit (
    input wire [3:0] gray,
    output wire [3:0] bin
);
    // TODO: Implement Gray to Binary Code Converter (Combinational)

endmodule`,
      solutionCode: `module gray_to_binary_4bit (
    input wire [3:0] gray,
    output wire [3:0] bin
);
    assign bin[3] = gray[3];
    assign bin[2] = bin[3] ^ gray[2];
    assign bin[1] = bin[2] ^ gray[1];
    assign bin[0] = bin[1] ^ gray[0];
endmodule`,
      signals: [
        { name: 'gray[3:0]', type: 'input', initialValue: '0110' },
        { name: 'bin[3:0]', type: 'output', initialValue: '0100' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'bin[3:0]', value: '0100' }
      ]
    };
  }

  if (title.includes('binary to gray code')) {
    return {
      starterCode: `module binary_to_gray_4bit (
    input wire [3:0] bin,
    output wire [3:0] gray
);
    // TODO: Implement Binary to Gray Code Converter (Combinational)

endmodule`,
      solutionCode: `module binary_to_gray_4bit (
    input wire [3:0] bin,
    output wire [3:0] gray
);
    assign gray = bin ^ (bin >> 1);
endmodule`,
      signals: [
        { name: 'bin[3:0]', type: 'input', initialValue: '0100' },
        { name: 'gray[3:0]', type: 'output', initialValue: '0110' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'gray[3:0]', value: '0110' }
      ]
    };
  }

  // 13. Parity Generators / Checkers
  if (title.includes('even parity generator')) {
    return {
      starterCode: `module even_parity_generator_8bit (
    input wire [7:0] data,
    output wire parity
);
    // TODO: Implement Even Parity Generator (Combinational - Output 1 if odd 1s to make even)

endmodule`,
      solutionCode: `module even_parity_generator_8bit (
    input wire [7:0] data,
    output wire parity
);
    assign parity = ^data;
endmodule`,
      signals: [
        { name: 'data[7:0]', type: 'input', initialValue: '01010101' },
        { name: 'parity', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'parity', value: '0' }
      ]
    };
  }

  if (title.includes('odd parity checker')) {
    return {
      starterCode: `module odd_parity_checker_9bit (
    input wire [8:0] data,
    output wire error
);
    // TODO: Implement Odd Parity Checker (Combinational)

endmodule`,
      solutionCode: `module odd_parity_checker_9bit (
    input wire [8:0] data,
    output wire error
);
    assign error = ~(^data);
endmodule`,
      signals: [
        { name: 'data[8:0]', type: 'input', initialValue: '010101011' },
        { name: 'error', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'error', value: '0' }
      ]
    };
  }

  // 14. 8-bit Arithmetic Logic Unit (ALU)
  if (title.includes('arithmetic logic unit') || title.includes('alu')) {
    return {
      starterCode: `module alu_8bit (
    input wire [7:0] a,
    input wire [7:0] b,
    input wire [2:0] opcode,
    output reg [7:0] result,
    output wire zero
);
    // TODO: Implement 8-bit ALU (Combinational logic - No clock)
    // Opcode operations: 0: ADD, 1: SUB, 2: AND, 3: OR, 4: XOR, 5: NOT A, 6: SLL, 7: SRL
    always @(*) begin
        // Implement opcode switch
    end

    assign zero = (result == 8'b0);
endmodule`,
      solutionCode: `module alu_8bit (
    input wire [7:0] a,
    input wire [7:0] b,
    input wire [2:0] opcode,
    output reg [7:0] result,
    output wire zero
);
    always @(*) begin
        case (opcode)
            3'b000: result = a + b;
            3'b001: result = a - b;
            3'b010: result = a & b;
            3'b011: result = a | b;
            3'b100: result = a ^ b;
            3'b101: result = ~a;
            3'b110: result = a << 1;
            3'b111: result = a >> 1;
            default: result = 8'b0;
        endcase
    end

    assign zero = (result == 8'b0);
endmodule`,
      signals: [
        { name: 'a[7:0]', type: 'input', initialValue: '00000101' },
        { name: 'b[7:0]', type: 'input', initialValue: '00000011' },
        { name: 'opcode[2:0]', type: 'input', initialValue: '000' },
        { name: 'result[7:0]', type: 'output', initialValue: '00001000' },
        { name: 'zero', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'result[7:0]', value: '00001000' }
      ]
    };
  }

  // 15. Barrel Shifter 8-bit Combinational
  if (title.includes('barrel shifter')) {
    return {
      starterCode: `module barrel_shifter_8bit (
    input wire [7:0] data_in,
    input wire [2:0] shift_amt,
    input wire mode, // 0 = logical left shift, 1 = logical right shift
    output wire [7:0] data_out
);
    // TODO: Implement 8-bit Combinational Barrel Shifter

endmodule`,
      solutionCode: `module barrel_shifter_8bit (
    input wire [7:0] data_in,
    input wire [2:0] shift_amt,
    input wire mode,
    output wire [7:0] data_out
);
    assign data_out = mode ? (data_in >> shift_amt) : (data_in << shift_amt);
endmodule`,
      signals: [
        { name: 'data_in[7:0]', type: 'input', initialValue: '00001111' },
        { name: 'shift_amt[2:0]', type: 'input', initialValue: '010' },
        { name: 'mode', type: 'input', initialValue: '0' },
        { name: 'data_out[7:0]', type: 'output', initialValue: '00111100' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'data_out[7:0]', value: '00111100' }
      ]
    };
  }

  // Generic fallback for any other combinational circuit that had clk/rst_n inadvertently
  // Remove clock and reset signals
  const tbSignals = problem.testbenchConfig?.signals || [];
  const cleanSignals = tbSignals.filter(
    s => !s.name.toLowerCase().includes('clk') && !s.name.toLowerCase().includes('clock') && !s.name.toLowerCase().includes('rst')
  );

  return {
    starterCode: (problem.starterCode || '')
      .replace(/input\s+(?:wire\s+|logic\s+)?(?:clk|clock)\s*,?\n?/gi, '')
      .replace(/input\s+(?:wire\s+|logic\s+)?(?:rst_n|reset_n|rst|reset)\s*,?\n?/gi, '')
      .replace(/always\s*@\s*\([^)]*\)\s*begin[\s\S]*?end/gi, '// Implement combinational logic using assign or always @(*)'),
    solutionCode: (problem.solutionCode || '')
      .replace(/input\s+(?:wire\s+|logic\s+)?(?:clk|clock)\s*,?\n?/gi, '')
      .replace(/input\s+(?:wire\s+|logic\s+)?(?:rst_n|reset_n|rst|reset)\s*,?\n?/gi, '')
      .replace(/always\s*@\s*\([^)]*clk[^)]*\)\s*begin[\s\S]*?end/gi, 'assign dout = din;'),
    signals: cleanSignals.length > 0 ? cleanSignals : [
      { name: 'din[3:0]', type: 'input', initialValue: '1010' },
      { name: 'dout[3:0]', type: 'output', initialValue: '1010' }
    ],
    expectedOutputs: (problem.testbenchConfig?.expectedOutputs || []).filter(
      e => !e.signalName.toLowerCase().includes('clk')
    )
  };
}

/**
 * Returns accurate sequential circuit ports, RTL code, and testbench configuration
 * for common sequential benchmark problems (Flip-Flops, Counters, Shift Registers, FSMs).
 */
export function getSequentialCleanDefinition(
  problem: Problem
): { starterCode: string; solutionCode: string; signals: SignalConfig[]; expectedOutputs: ExpectedOutput[] } | null {
  const title = (problem.title || '').toLowerCase();

  // 1. D Flip-Flop
  if (title.includes('d flip-flop') || title.includes('dff') || title.includes('d-ff')) {
    const isAsync = !title.includes('synchronous reset') || title.includes('asynchronous');
    return {
      starterCode: `module d_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire d,
    output reg q
);
    // TODO: Implement D Flip-Flop with ${isAsync ? 'Asynchronous' : 'Synchronous'} Reset
    always @(posedge clk${isAsync ? ' or negedge rst_n' : ''}) begin
        // Write flip-flop update logic
    end

endmodule`,
      solutionCode: `module d_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire d,
    output reg q
);
    always @(posedge clk${isAsync ? ' or negedge rst_n' : ''}) begin
        if (!rst_n)
            q <= 1'b0;
        else
            q <= d;
    end
endmodule`,
      signals: [
        { name: 'clk', type: 'clock', initialValue: '0' },
        { name: 'rst_n', type: 'input', initialValue: '1' },
        { name: 'd', type: 'input', initialValue: '0' },
        { name: 'q', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'q', value: '0' },
        { cycle: 1, signalName: 'q', value: '1' }
      ]
    };
  }

  // 2. T Flip-Flop
  if (title.includes('t flip-flop') || title.includes('t-ff')) {
    return {
      starterCode: `module t_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire t,
    output reg q
);
    // TODO: Implement T Flip-Flop with Active-Low Asynchronous Reset

endmodule`,
      solutionCode: `module t_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire t,
    output reg q
);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            q <= 1'b0;
        else if (t)
            q <= ~q;
    end
endmodule`,
      signals: [
        { name: 'clk', type: 'clock', initialValue: '0' },
        { name: 'rst_n', type: 'input', initialValue: '1' },
        { name: 't', type: 'input', initialValue: '1' },
        { name: 'q', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'q', value: '0' }
      ]
    };
  }

  // 3. JK Flip-Flop
  if (title.includes('jk flip-flop') || title.includes('jk-ff')) {
    return {
      starterCode: `module jk_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire j,
    input wire k,
    output reg q
);
    // TODO: Implement JK Flip-Flop with Active-Low Asynchronous Reset

endmodule`,
      solutionCode: `module jk_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire j,
    input wire k,
    output reg q
);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            q <= 1'b0;
        else begin
            case ({j, k})
                2'b00: q <= q;
                2'b01: q <= 1'b0;
                2'b10: q <= 1'b1;
                2'b11: q <= ~q;
            endcase
        end
    end
endmodule`,
      signals: [
        { name: 'clk', type: 'clock', initialValue: '0' },
        { name: 'rst_n', type: 'input', initialValue: '1' },
        { name: 'j', type: 'input', initialValue: '1' },
        { name: 'k', type: 'input', initialValue: '0' },
        { name: 'q', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'q', value: '0' }
      ]
    };
  }

  // 4. Synchronous Up / Down Counters
  if (title.includes('counter')) {
    const isDown = title.includes('down');
    const isBcd = title.includes('bcd') || title.includes('mod-10') || title.includes('decade');
    const width = 4;
    return {
      starterCode: `module up_counter_4bit (
    input wire clk,
    input wire rst_n,
    input wire enable,
    output reg [${width - 1}:0] count
);
    // TODO: Implement ${isBcd ? 'BCD Mod-10' : (isDown ? 'Down' : '4-bit Up')} Counter

endmodule`,
      solutionCode: `module up_counter_4bit (
    input wire clk,
    input wire rst_n,
    input wire enable,
    output reg [${width - 1}:0] count
);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            count <= 4'b0000;
        else if (enable) begin
            ${isBcd ? "if (count == 4'd9) count <= 4'b0000; else count <= count + 1'b1;" :
              isDown ? "count <= count - 1'b1;" : "count <= count + 1'b1;"}
        end
    end
endmodule`,
      signals: [
        { name: 'clk', type: 'clock', initialValue: '0' },
        { name: 'rst_n', type: 'input', initialValue: '1' },
        { name: 'enable', type: 'input', initialValue: '1' },
        { name: 'count[3:0]', type: 'output', initialValue: '0000' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'count[3:0]', value: '0000' },
        { cycle: 1, signalName: 'count[3:0]', value: '0001' }
      ]
    };
  }

  // 5. Shift Registers (SISO, SIPO, PISO, PIPO, Universal)
  if (title.includes('shift register') || title.includes('siso') || title.includes('sipo')) {
    const is8Bit = title.includes('8-bit') || title.includes('8 bit') || title.includes('8bit');
    const width = is8Bit ? 8 : 4;
    const qName = `q[${width - 1}:0]`;
    const sliceEnd = width - 2;
    return {
      starterCode: `module shift_register_${width}bit (
    input wire clk,
    input wire rst_n,
    input wire din,
    output reg [${width - 1}:0] q
);
    // TODO: Implement ${width}-bit SISO/SIPO Shift Register

endmodule`,
      solutionCode: `module shift_register_${width}bit (
    input wire clk,
    input wire rst_n,
    input wire din,
    output reg [${width - 1}:0] q
);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            q <= ${width}'b${'0'.repeat(width)};
        else
            q <= {q[${sliceEnd}:0], din};
    end
endmodule`,
      signals: [
        { name: 'clk', type: 'clock', initialValue: '0' },
        { name: 'rst_n', type: 'input', initialValue: '1' },
        { name: 'din', type: 'input', initialValue: '1' },
        { name: qName, type: 'output', initialValue: '0'.repeat(width) }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: qName, value: '0'.repeat(width) }
      ]
    };
  }

  // 6. Sequence Detectors & FSMs
  if (title.includes('sequence detector') || title.includes('fsm') || title.includes('state machine')) {
    return {
      starterCode: `module sequence_detector (
    input wire clk,
    input wire rst_n,
    input wire din,
    output reg detected
);
    // TODO: Implement Sequence Detector FSM

endmodule`,
      solutionCode: `module sequence_detector (
    input wire clk,
    input wire rst_n,
    input wire din,
    output reg detected
);
    reg [2:0] state, next_state;
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            state <= 3'b000;
            detected <= 1'b0;
        end else begin
            state <= {state[1:0], din};
            detected <= ({state[1:0], din} == 3'b101 && din == 1'b1);
        end
    end
endmodule`,
      signals: [
        { name: 'clk', type: 'clock', initialValue: '0' },
        { name: 'rst_n', type: 'input', initialValue: '1' },
        { name: 'din', type: 'input', initialValue: '1' },
        { name: 'detected', type: 'output', initialValue: '0' }
      ],
      expectedOutputs: [
        { cycle: 0, signalName: 'detected', value: '0' }
      ]
    };
  }

  return null;
}

/**
 * Returns accurate ports, RTL starter/solution code, and testbench signals
 * for ANY digital circuit in the library (both combinational and sequential).
 */
export function getStandardCircuitDefinition(
  problem: Problem
): { starterCode: string; solutionCode: string; signals: SignalConfig[]; expectedOutputs: ExpectedOutput[] } | null {
  // Only apply to digital hardware description topics (Verilog, SystemVerilog, FPGA, DFT, SoC)
  if (!problem || !['verilog', 'systemverilog', 'fpga', 'dft', 'soc_design'].includes(problem.topic)) {
    return null;
  }
  if (isCombinationalCircuit(problem)) {
    return getCombinationalCleanDefinition(problem);
  }
  return getSequentialCleanDefinition(problem);
}

