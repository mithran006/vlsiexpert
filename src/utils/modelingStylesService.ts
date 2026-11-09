import { Problem } from '../types';
import { getStandardCircuitDefinition, isCombinationalCircuit } from './circuitClassification';
import { sanitizeFilename } from './exportUtils';

export type ModelingStyle = 'structural' | 'dataflow' | 'behavioral';

export interface ModelingCodeInfo {
  style: ModelingStyle;
  label: string;
  badge: string;
  description: string;
  starterCode: string;
  solutionCode: string;
  keyConstructs: string[];
}

export interface AllModelingStyles {
  structural: ModelingCodeInfo;
  dataflow: ModelingCodeInfo;
  behavioral: ModelingCodeInfo;
}

/**
 * Extracts the exact module header from a Verilog code string:
 * module <name> (<ports>);
 */
function extractModuleHeader(code: string, fallbackName: string): { header: string; moduleName: string } {
  const match = code.match(/module\s+([a-zA-Z0-9_$]+)\s*(?:#\s*\([\s\S]*?\)\s*)?\([\s\S]*?\)\s*;/i);
  if (match) {
    let header = match[0].trim();
    const modIdx = header.search(/\bmodule\b/i);
    if (modIdx > 0) header = header.slice(modIdx).trim();
    return {
      header: '`timescale 1ns / 1ps\n\n' + header,
      moduleName: match[1]
    };
  }
  return {
    header: `\`timescale 1ns / 1ps\n\nmodule ${fallbackName} (\n    // Declare input and output ports\n);`,
    moduleName: fallbackName
  };
}

/**
 * Returns comprehensive Structural, Dataflow, and Behavioral modeling code for any problem.
 */
export function getModelingStylesForProblem(problem: Problem): AllModelingStyles {
  const title = (problem.title || '').toLowerCase();
  const stdDef = getStandardCircuitDefinition(problem);
  const baseSource = (stdDef && (stdDef.starterCode || stdDef.solutionCode)) ||
                     problem.starterCode ||
                     problem.solutionCode ||
                     '';
  const cleanModName = sanitizeFilename(problem.title || 'design').toLowerCase();
  const { header, moduleName } = extractModuleHeader(baseSource, cleanModName);
  const isComb = isCombinationalCircuit(problem);

  // 1. 2-to-1 Multiplexer
  if (title.includes('2-to-1 multiplexer') || title.includes('2:1 mux') || title === '2-to-1 multiplexer') {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Gate-Level Netlist',
        description: 'Implements the multiplexer using gate primitives (NOT, AND, OR) interconnected with internal wires.',
        keyConstructs: ['wire not_sel, w1, w2;', 'not g1 (not_sel, sel);', 'and g2 (w1, a, not_sel);', 'and g3 (w2, b, sel);', 'or g4 (y, w1, w2);'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_2to1 (
    input wire a,
    input wire b,
    input wire sel,
    output wire y
);
    // TODO: Implement 2:1 Multiplexer using STRUCTURAL MODELING
    // Hint: Declare internal wires and instantiate not, and, and or gate primitives.
    // Logic: y = (a & ~sel) | (b & sel)

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_2to1 (
    input wire a,
    input wire b,
    input wire sel,
    output wire y
);
    // Structural Modeling: Gate primitives and wire interconnections
    wire not_sel, w1, w2;

    not g1 (not_sel, sel);
    and g2 (w1, a, not_sel);
    and g3 (w2, b, sel);
    or  g4 (y, w1, w2);

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Continuous Assignment',
        description: 'Implements the multiplexer using continuous assignment with the ternary (? :) operator.',
        keyConstructs: ['assign y = sel ? b : a;', 'assign y = (a & ~sel) | (b & sel);'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_2to1 (
    input wire a,
    input wire b,
    input wire sel,
    output wire y
);
    // TODO: Implement 2:1 Multiplexer using DATAFLOW MODELING
    // Hint: Use continuous assignment 'assign' with ternary operator.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_2to1 (
    input wire a,
    input wire b,
    input wire sel,
    output wire y
);
    // Dataflow Modeling: Continuous assignment with ternary operator
    assign y = sel ? b : a;

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural always Block',
        description: 'Implements the multiplexer using procedural always @(*) block with if-else decision branches.',
        keyConstructs: ['output reg y;', 'always @(*) begin', 'if (sel) y = b; else y = a;', 'end'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_2to1 (
    input wire a,
    input wire b,
    input wire sel,
    output reg y
);
    // TODO: Implement 2:1 Multiplexer using BEHAVIORAL MODELING
    // Hint: Use procedural always @(*) block with if-else logic.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_2to1 (
    input wire a,
    input wire b,
    input wire sel,
    output reg y
);
    // Behavioral Modeling: Procedural always block with if-else
    always @(*) begin
        if (sel) begin
            y = b;
        end else begin
            y = a;
        end
    end

endmodule
`
      }
    };
  }

  // 2. 4-to-1 Multiplexer (Case Statement, Ternary, or One-Hot)
  if (title.includes('4-to-1 multiplexer') || title.includes('4:1 mux') || title.includes('one-hot 4-to-1')) {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Gate Primitives / Decoded Netlist',
        description: 'Implements the 4:1 multiplexer using NOT, AND, and OR gate primitives decoding the 2-bit select lines.',
        keyConstructs: ['wire not_s0, not_s1;', 'not g0 (not_s0, sel[0]);', 'and a0 (m0, d[0], not_s1, not_s0);', 'or o1 (y, m0, m1, m2, m3);'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_4to1 (
    input wire [3:0] d,
    input wire [1:0] sel,
    output wire y
);
    // TODO: Implement 4:1 Multiplexer using STRUCTURAL MODELING
    // Hint: Invert select lines with NOT gates, AND with each data input, OR outputs together.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_4to1 (
    input wire [3:0] d,
    input wire [1:0] sel,
    output wire y
);
    // Structural Modeling: Gate primitives decoding select inputs
    wire not_s0, not_s1;
    wire m0, m1, m2, m3;

    not g0 (not_s0, sel[0]);
    not g1 (not_s1, sel[1]);

    and a0 (m0, d[0], not_s1, not_s0);
    and a1 (m1, d[1], not_s1, sel[0]);
    and a2 (m2, d[2], sel[1], not_s0);
    and a3 (m3, d[3], sel[1], sel[0]);

    or  o1 (y, m0, m1, m2, m3);

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Continuous Nested Ternary',
        description: 'Implements the 4:1 multiplexer using continuous assign with nested conditional operators.',
        keyConstructs: ['assign y = (sel == 2\'b00) ? d[0] : (sel == 2\'b01) ? d[1] : ...;'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_4to1 (
    input wire [3:0] d,
    input wire [1:0] sel,
    output wire y
);
    // TODO: Implement 4:1 Multiplexer using DATAFLOW MODELING
    // Hint: Use continuous assignment 'assign' with nested ternary operator.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_4to1 (
    input wire [3:0] d,
    input wire [1:0] sel,
    output wire y
);
    // Dataflow Modeling: Continuous assignment with nested conditional expression
    assign y = (sel == 2'b00) ? d[0] :
               (sel == 2'b01) ? d[1] :
               (sel == 2'b10) ? d[2] : d[3];

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural case Statement',
        description: 'Implements the 4:1 multiplexer using always @(*) block with a full case statement matching each select condition.',
        keyConstructs: ['output reg y;', 'always @(*) begin', 'case (sel)', '2\'b00: y = d[0];', 'endcase'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_4to1 (
    input wire [3:0] d,
    input wire [1:0] sel,
    output reg y
);
    // TODO: Implement 4:1 Multiplexer using BEHAVIORAL MODELING
    // Hint: Use procedural always @(*) block with case(sel) statement.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_4to1 (
    input wire [3:0] d,
    input wire [1:0] sel,
    output reg y
);
    // Behavioral Modeling: Procedural always block with case statement
    always @(*) begin
        case (sel)
            2'b00: y = d[0];
            2'b01: y = d[1];
            2'b10: y = d[2];
            2'b11: y = d[3];
            default: y = 1'b0;
        endcase
    end

endmodule
`
      }
    };
  }

  // 3. 8-to-1 Multiplexer
  if (title.includes('8-to-1 multiplexer') || title.includes('8:1 mux')) {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Gate Primitive Decoded Netlist',
        description: 'Implements the 8-to-1 multiplexer using inverters and AND gates decoding 3-bit select inputs into an OR tree.',
        keyConstructs: ['wire not_s0, not_s1, not_s2;', 'and a0 (m0, in[0], not_s2, not_s1, not_s0);', 'or o0 (out, m0, m1, m2, m3, m4, m5, m6, m7);'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_8to1 (
    input wire [7:0] in,
    input wire [2:0] sel,
    output wire out
);
    // TODO: Implement 8:1 Multiplexer using STRUCTURAL MODELING
    // Invert select lines with NOT gates, AND with each data bit, OR results together.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_8to1 (
    input wire [7:0] in,
    input wire [2:0] sel,
    output wire out
);
    // Structural Modeling: Gate primitives decoding select bits
    wire not_s0, not_s1, not_s2;
    wire m0, m1, m2, m3, m4, m5, m6, m7;

    not g0 (not_s0, sel[0]);
    not g1 (not_s1, sel[1]);
    not g2 (not_s2, sel[2]);

    and a0 (m0, in[0], not_s2, not_s1, not_s0);
    and a1 (m1, in[1], not_s2, not_s1, sel[0]);
    and a2 (m2, in[2], not_s2, sel[1], not_s0);
    and a3 (m3, in[3], not_s2, sel[1], sel[0]);
    and a4 (m4, in[4], sel[2], not_s1, not_s0);
    and a5 (m5, in[5], sel[2], not_s1, sel[0]);
    and a6 (m6, in[6], sel[2], sel[1], not_s0);
    and a7 (m7, in[7], sel[2], sel[1], sel[0]);

    or  o0 (out, m0, m1, m2, m3, m4, m5, m6, m7);

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Continuous Vector Indexing',
        description: 'Implements the 8-to-1 multiplexer using continuous assign with direct bit indexing.',
        keyConstructs: ['assign out = in[sel];'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_8to1 (
    input wire [7:0] in,
    input wire [2:0] sel,
    output wire out
);
    // TODO: Implement 8:1 Multiplexer using DATAFLOW MODELING
    // Hint: Use assign out = in[sel];

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_8to1 (
    input wire [7:0] in,
    input wire [2:0] sel,
    output wire out
);
    // Dataflow Modeling: Continuous vector index
    assign out = in[sel];

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural Case / Indexing',
        description: 'Implements the 8-to-1 multiplexer inside an always @(*) procedural block.',
        keyConstructs: ['output reg out;', 'always @(*) begin out = in[sel]; end'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_8to1 (
    input wire [7:0] in,
    input wire [2:0] sel,
    output reg out
);
    // TODO: Implement 8:1 Multiplexer using BEHAVIORAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_8to1 (
    input wire [7:0] in,
    input wire [2:0] sel,
    output reg out
);
    // Behavioral Modeling: Procedural assignment
    always @(*) begin
        out = in[sel];
    end

endmodule
`
      }
    };
  }

  // 4. 16-to-1 Multiplexer
  if (title.includes('16-to-1')) {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Hierarchical 4:1 MUX Tree',
        description: 'Implements the 16:1 multiplexer using a hierarchical tree of 4:1 multiplexer stages.',
        keyConstructs: ['wire w0, w1, w2, w3;', 'assign out = (sel[3:2] == 0) ? w0 : ...'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_16to1 (
    input wire [15:0] in,
    input wire [3:0] sel,
    output wire out
);
    // TODO: Implement 16:1 Multiplexer using STRUCTURAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_16to1 (
    input wire [15:0] in,
    input wire [3:0] sel,
    output wire out
);
    // Structural Modeling: Decoded minterm logic
    wire not_s0, not_s1, not_s2, not_s3;
    wire [15:0] m;

    not (not_s0, sel[0]);
    not (not_s1, sel[1]);
    not (not_s2, sel[2]);
    not (not_s3, sel[3]);

    assign m[0]  = in[0]  & not_s3 & not_s2 & not_s1 & not_s0;
    assign m[1]  = in[1]  & not_s3 & not_s2 & not_s1 & sel[0];
    assign m[2]  = in[2]  & not_s3 & not_s2 & sel[1] & not_s0;
    assign m[3]  = in[3]  & not_s3 & not_s2 & sel[1] & sel[0];
    assign m[4]  = in[4]  & not_s3 & sel[2]  & not_s1 & not_s0;
    assign m[5]  = in[5]  & not_s3 & sel[2]  & not_s1 & sel[0];
    assign m[6]  = in[6]  & not_s3 & sel[2]  & sel[1] & not_s0;
    assign m[7]  = in[7]  & not_s3 & sel[2]  & sel[1] & sel[0];
    assign m[8]  = in[8]  & sel[3]  & not_s2 & not_s1 & not_s0;
    assign m[9]  = in[9]  & sel[3]  & not_s2 & not_s1 & sel[0];
    assign m[10] = in[10] & sel[3]  & not_s2 & sel[1] & not_s0;
    assign m[11] = in[11] & sel[3]  & not_s2 & sel[1] & sel[0];
    assign m[12] = in[12] & sel[3]  & sel[2]  & not_s1 & not_s0;
    assign m[13] = in[13] & sel[3]  & sel[2]  & not_s1 & sel[0];
    assign m[14] = in[14] & sel[3]  & sel[2]  & sel[1] & not_s0;
    assign m[15] = in[15] & sel[3]  & sel[2]  & sel[1] & sel[0];

    assign out = |m;

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Continuous Vector Indexing',
        description: 'Implements the 16:1 multiplexer using continuous assign with direct vector indexing in[sel].',
        keyConstructs: ['assign out = in[sel];'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_16to1 (
    input wire [15:0] in,
    input wire [3:0] sel,
    output wire out
);
    // TODO: Implement 16:1 Multiplexer using DATAFLOW MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_16to1 (
    input wire [15:0] in,
    input wire [3:0] sel,
    output wire out
);
    // Dataflow Modeling: Vector index
    assign out = in[sel];

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural Case Statement',
        description: 'Implements the 16:1 multiplexer procedurally inside an always @(*) block.',
        keyConstructs: ['output reg out;', 'always @(*) begin out = in[sel]; end'],
        starterCode: `\`timescale 1ns / 1ps

module multiplexer_16to1 (
    input wire [15:0] in,
    input wire [3:0] sel,
    output reg out
);
    // TODO: Implement 16:1 Multiplexer using BEHAVIORAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module multiplexer_16to1 (
    input wire [15:0] in,
    input wire [3:0] sel,
    output reg out
);
    // Behavioral Modeling: Procedural assignment
    always @(*) begin
        out = in[sel];
    end

endmodule
`
      }
    };
  }

  // 5. Half Adder
  if (title.includes('half adder')) {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Gate Primitives (XOR & AND)',
        description: 'Implements the Half Adder using primitive gates xor and and for sum and carry outputs.',
        keyConstructs: ['xor g1 (sum, a, b);', 'and g2 (cout, a, b);'],
        starterCode: `\`timescale 1ns / 1ps

module half_adder (
    input wire a,
    input wire b,
    output wire sum,
    output wire cout
);
    // TODO: Implement Half Adder using STRUCTURAL MODELING
    // Instantiate primitive gates: xor for sum, and for cout.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module half_adder (
    input wire a,
    input wire b,
    output wire sum,
    output wire cout
);
    // Structural Modeling: Gate primitives
    xor g1 (sum, a, b);
    and g2 (cout, a, b);

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Boolean Expressions',
        description: 'Implements the Half Adder using continuous assign statements with bitwise boolean operators (^ and &).',
        keyConstructs: ['assign sum = a ^ b;', 'assign cout = a & b;'],
        starterCode: `\`timescale 1ns / 1ps

module half_adder (
    input wire a,
    input wire b,
    output wire sum,
    output wire cout
);
    // TODO: Implement Half Adder using DATAFLOW MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module half_adder (
    input wire a,
    input wire b,
    output wire sum,
    output wire cout
);
    // Dataflow Modeling: Continuous assignments with boolean operators
    assign sum = a ^ b;
    assign cout = a & b;

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural Concatenation',
        description: 'Implements the Half Adder using an always @(*) procedural block calculating arithmetic addition.',
        keyConstructs: ['output reg sum, cout;', 'always @(*) begin {cout, sum} = a + b; end'],
        starterCode: `\`timescale 1ns / 1ps

module half_adder (
    input wire a,
    input wire b,
    output reg sum,
    output reg cout
);
    // TODO: Implement Half Adder using BEHAVIORAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module half_adder (
    input wire a,
    input wire b,
    output reg sum,
    output reg cout
);
    // Behavioral Modeling: Procedural arithmetic addition
    always @(*) begin
        {cout, sum} = a + b;
    end

endmodule
`
      }
    };
  }

  // 6. Full Adder
  if (title.includes('full adder') || (title.includes('adder') && !title.includes('half') && !title.includes('4-bit') && !title.includes('ripple') && !title.includes('cla'))) {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Hierarchical Gate Netlist',
        description: 'Implements the 1-bit Full Adder using two XOR gates, two AND gates, and an OR gate.',
        keyConstructs: ['wire s1, c1, c2;', 'xor g1 (s1, a, b);', 'xor g2 (sum, s1, cin);', 'and g3 (c1, a, b);', 'and g4 (c2, s1, cin);', 'or g5 (cout, c1, c2);'],
        starterCode: `\`timescale 1ns / 1ps

module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);
    // TODO: Implement Full Adder using STRUCTURAL MODELING
    // Declare internal wires s1, c1, c2 and instantiate xor, and, or gates.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);
    // Structural Modeling: Gate primitives
    wire s1, c1, c2;

    xor g1 (s1, a, b);
    xor g2 (sum, s1, cin);
    and g3 (c1, a, b);
    and g4 (c2, s1, cin);
    or  g5 (cout, c1, c2);

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Boolean Equations & Concatenation',
        description: 'Implements the Full Adder using continuous assign statements for sum and carry equations.',
        keyConstructs: ['assign sum = a ^ b ^ cin;', 'assign cout = (a & b) | (b & cin) | (a & cin);'],
        starterCode: `\`timescale 1ns / 1ps

module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);
    // TODO: Implement Full Adder using DATAFLOW MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);
    // Dataflow Modeling: Continuous assignments with boolean equations
    assign sum = a ^ b ^ cin;
    assign cout = (a & b) | (b & cin) | (a & cin);

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural Arithmetic Sum',
        description: 'Implements the Full Adder procedurally inside an always @(*) block evaluating {cout, sum} = a + b + cin.',
        keyConstructs: ['output reg sum, cout;', 'always @(*) begin {cout, sum} = a + b + cin; end'],
        starterCode: `\`timescale 1ns / 1ps

module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output reg sum,
    output reg cout
);
    // TODO: Implement Full Adder using BEHAVIORAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output reg sum,
    output reg cout
);
    // Behavioral Modeling: Procedural arithmetic addition
    always @(*) begin
        {cout, sum} = a + b + cin;
    end

endmodule
`
      }
    };
  }

  // 7. 4-bit Ripple Carry Adder
  if (title.includes('4-bit adder') || title.includes('ripple carry') || title.includes('adder_4bit') || title === '4-bit adder') {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Chained Full-Adder Stages',
        description: 'Implements the 4-bit Ripple Carry Adder by chaining 4 full adder bit slices using internal carry wires.',
        keyConstructs: ['wire c1, c2, c3;', 'Bit slice equations for sum[0..3] and cout'],
        starterCode: `\`timescale 1ns / 1ps

module adder_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    input wire cin,
    output wire [3:0] sum,
    output wire cout
);
    // TODO: Implement 4-bit Adder using STRUCTURAL MODELING
    // Hint: Chain internal carry wires c1, c2, c3 across the bit slices.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module adder_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    input wire cin,
    output wire [3:0] sum,
    output wire cout
);
    // Structural Modeling: Chained full adder stages
    wire c1, c2, c3;

    // Bit 0
    assign sum[0] = a[0] ^ b[0] ^ cin;
    assign c1 = (a[0] & b[0]) | (b[0] & cin) | (a[0] & cin);

    // Bit 1
    assign sum[1] = a[1] ^ b[1] ^ c1;
    assign c2 = (a[1] & b[1]) | (b[1] & c1) | (a[1] & c1);

    // Bit 2
    assign sum[2] = a[2] ^ b[2] ^ c2;
    assign c3 = (a[2] & b[2]) | (b[2] & c2) | (a[2] & c2);

    // Bit 3
    assign sum[3] = a[3] ^ b[3] ^ c3;
    assign cout = (a[3] & b[3]) | (b[3] & c3) | (a[3] & c3);

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Continuous Bus Concatenation',
        description: 'Implements the 4-bit Adder in a single continuous assign with vector addition and carry-out bit concatenation.',
        keyConstructs: ['assign {cout, sum} = a + b + cin;'],
        starterCode: `\`timescale 1ns / 1ps

module adder_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    input wire cin,
    output wire [3:0] sum,
    output wire cout
);
    // TODO: Implement 4-bit Adder using DATAFLOW MODELING
    // Hint: Use assign {cout, sum} = a + b + cin;

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module adder_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    input wire cin,
    output wire [3:0] sum,
    output wire cout
);
    // Dataflow Modeling: Continuous vector concatenation addition
    assign {cout, sum} = a + b + cin;

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural Bus Addition',
        description: 'Implements the 4-bit Adder procedurally inside an always @(*) block.',
        keyConstructs: ['output reg [3:0] sum;', 'output reg cout;', 'always @(*) begin {cout, sum} = a + b + cin; end'],
        starterCode: `\`timescale 1ns / 1ps

module adder_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    input wire cin,
    output reg [3:0] sum,
    output reg cout
);
    // TODO: Implement 4-bit Adder using BEHAVIORAL MODELING
    // Hint: Use procedural always @(*) block with vector addition.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module adder_4bit (
    input wire [3:0] a,
    input wire [3:0] b,
    input wire cin,
    output reg [3:0] sum,
    output reg cout
);
    // Behavioral Modeling: Procedural always block
    always @(*) begin
        {cout, sum} = a + b + cin;
    end

endmodule
`
      }
    };
  }

  // 8. D Flip-Flop
  if (title.includes('d flip-flop') || title.includes('dff') || title.includes('d flip flop')) {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Sequential Storage Block',
        description: 'Structural realization of storage elements using sequential clock-edge trigger.',
        keyConstructs: ['always @(posedge clk or negedge rst_n) begin if (!rst_n) q <= 0; else q <= d; end'],
        starterCode: `\`timescale 1ns / 1ps

module d_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire d,
    output reg q
);
    // TODO: Implement D Flip-Flop with asynchronous reset

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module d_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire d,
    output reg q
);
    // Structural/Sequential Storage on clock edge
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            q <= 1'b0;
        else
            q <= d;
    end

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Conditional Clocked Assignment',
        description: 'Implements storage behavior using conditional evaluation on clock edge.',
        keyConstructs: ['always @(posedge clk or negedge rst_n) q <= (!rst_n) ? 1\'b0 : d;'],
        starterCode: `\`timescale 1ns / 1ps

module d_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire d,
    output reg q
);
    // TODO: Implement D Flip-Flop using DATAFLOW MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module d_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire d,
    output reg q
);
    // Dataflow expression on clock edge
    always @(posedge clk or negedge rst_n) begin
        q <= (!rst_n) ? 1'b0 : d;
    end

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Clock Edge Procedural Block',
        description: 'Standard Verilog behavioral modeling using always @(posedge clk or negedge rst_n) with non-blocking assignment (<=).',
        keyConstructs: ['always @(posedge clk or negedge rst_n) begin', 'if (!rst_n) q <= 1\'b0;', 'else q <= d;', 'end'],
        starterCode: `\`timescale 1ns / 1ps

module d_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire d,
    output reg q
);
    // TODO: Implement D Flip-Flop using BEHAVIORAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module d_flip_flop (
    input wire clk,
    input wire rst_n,
    input wire d,
    output reg q
);
    // Behavioral Modeling: Asynchronous active-low reset DFF
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            q <= 1'b0;
        end else begin
            q <= d;
        end
    end

endmodule
`
      }
    };
  }

  // 9. Synchronous Up Counter
  if (title.includes('counter')) {
    const isUpCounter = title.includes('up');
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Register & Incrementer Netlist',
        description: 'Structural architecture separating state registers from increment logic.',
        keyConstructs: ['always @(posedge clk or negedge rst_n) begin if (!rst_n) count <= 0; else if (enable) count <= count + 1; end'],
        starterCode: `\`timescale 1ns / 1ps

module up_counter_4bit (
    input wire clk,
    input wire rst_n,
    input wire enable,
    output reg [3:0] count
);
    // TODO: Implement 4-bit Up Counter using STRUCTURAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module up_counter_4bit (
    input wire clk,
    input wire rst_n,
    input wire enable,
    output reg [3:0] count
);
    // Structural/Sequential Counter
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            count <= 4'b0000;
        end else if (enable) begin
            count <= count + 1'b1;
        end
    end

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Conditional Increment Logic',
        description: 'Implements counter with conditional expression on clock edge.',
        keyConstructs: ['count <= (!rst_n) ? 4\'b0000 : (enable ? count + 1\'b1 : count);'],
        starterCode: `\`timescale 1ns / 1ps

module up_counter_4bit (
    input wire clk,
    input wire rst_n,
    input wire enable,
    output reg [3:0] count
);
    // TODO: Implement 4-bit Up Counter using DATAFLOW MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module up_counter_4bit (
    input wire clk,
    input wire rst_n,
    input wire enable,
    output reg [3:0] count
);
    // Dataflow expression on clock edge
    always @(posedge clk or negedge rst_n) begin
        count <= (!rst_n) ? 4'b0000 : (enable ? (count + 1'b1) : count);
    end

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural always Block with if-else',
        description: 'Standard behavioral counter with synchronous enable and asynchronous active-low reset.',
        keyConstructs: ['always @(posedge clk or negedge rst_n) begin', 'if (!rst_n) count <= 4\'b0000;', 'else if (enable) count <= count + 1\'b1;', 'end'],
        starterCode: `\`timescale 1ns / 1ps

module up_counter_4bit (
    input wire clk,
    input wire rst_n,
    input wire enable,
    output reg [3:0] count
);
    // TODO: Implement 4-bit Up Counter using BEHAVIORAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module up_counter_4bit (
    input wire clk,
    input wire rst_n,
    input wire enable,
    output reg [3:0] count
);
    // Behavioral Modeling: Procedural counter
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            count <= 4'b0000;
        end else if (enable) begin
            count <= count + 1'b1;
        end
    end

endmodule
`
      }
    };
  }

  // 10. 3-to-8 Decoder
  if (title.includes('3-to-8') || (title.includes('decoder') && title.includes('3:8'))) {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Inverter & AND Gate Matrix',
        description: 'Implements the 3-to-8 decoder using NOT inverters and AND gates decoding each minterm with enable.',
        keyConstructs: ['not (not_in0, in[0]);', 'assign out[0] = en & (not_in2 & not_in1 & not_in0);', 'assign out[7] = en & (in[2] & in[1] & in[0]);'],
        starterCode: `\`timescale 1ns / 1ps

module decoder_3to8 (
    input wire [2:0] in,
    input wire en,
    output wire [7:0] out
);
    // TODO: Implement 3-to-8 Decoder using STRUCTURAL MODELING
    // Invert inputs with NOT gates and generate each output bit with an AND condition.

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module decoder_3to8 (
    input wire [2:0] in,
    input wire en,
    output wire [7:0] out
);
    // Structural Modeling: Inverter and AND gate matrix
    wire not_in0, not_in1, not_in2;
    not (not_in0, in[0]);
    not (not_in1, in[1]);
    not (not_in2, in[2]);

    assign out[0] = en & (not_in2 & not_in1 & not_in0);
    assign out[1] = en & (not_in2 & not_in1 & in[0]);
    assign out[2] = en & (not_in2 & in[1] & not_in0);
    assign out[3] = en & (not_in2 & in[1] & in[0]);
    assign out[4] = en & (in[2] & not_in1 & not_in0);
    assign out[5] = en & (in[2] & not_in1 & in[0]);
    assign out[6] = en & (in[2] & in[1] & not_in0);
    assign out[7] = en & (in[2] & in[1] & in[0]);

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Bit-Shift Continuous Assignment',
        description: 'Implements the 3-to-8 decoder using continuous assignment with bit-shift (en ? (8\'b00000001 << in) : 8\'b0).',
        keyConstructs: ['assign out = en ? (8\'b00000001 << in) : 8\'b00000000;'],
        starterCode: `\`timescale 1ns / 1ps

module decoder_3to8 (
    input wire [2:0] in,
    input wire en,
    output wire [7:0] out
);
    // TODO: Implement 3-to-8 Decoder using DATAFLOW MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module decoder_3to8 (
    input wire [2:0] in,
    input wire en,
    output wire [7:0] out
);
    // Dataflow Modeling: Bit shift assignment
    assign out = en ? (8'b00000001 << in) : 8'b00000000;

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural Case Statement',
        description: 'Implements the 3-to-8 decoder procedurally with full case statement matching each input binary pattern.',
        keyConstructs: ['always @(*) begin', 'case (in)', '3\'b000: out = 8\'b00000001;', 'endcase'],
        starterCode: `\`timescale 1ns / 1ps

module decoder_3to8 (
    input wire [2:0] in,
    input wire en,
    output reg [7:0] out
);
    // TODO: Implement 3-to-8 Decoder using BEHAVIORAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module decoder_3to8 (
    input wire [2:0] in,
    input wire en,
    output reg [7:0] out
);
    // Behavioral Modeling: Procedural case statement
    always @(*) begin
        case ({en, in})
            4'b1000: out = 8'b00000001;
            4'b1001: out = 8'b00000010;
            4'b1010: out = 8'b00000100;
            4'b1011: out = 8'b00001000;
            4'b1100: out = 8'b00010000;
            4'b1101: out = 8'b00100000;
            4'b1110: out = 8'b01000000;
            4'b1111: out = 8'b10000000;
            default: out = 8'b00000000;
        endcase
    end

endmodule
`
      }
    };
  }

  // 11. 2-to-4 Decoder
  if (title.includes('2-to-4') || (title.includes('decoder') && title.includes('2:4'))) {
    return {
      structural: {
        style: 'structural',
        label: 'Structural Modeling',
        badge: 'Inverter & AND Gates',
        description: 'Implements the 2-to-4 decoder using NOT inverters and AND gates for each decoded output bit.',
        keyConstructs: ['not (not_in0, in[0]);', 'assign out[0] = en & (not_in1 & not_in0);', 'assign out[3] = en & (in[1] & in[0]);'],
        starterCode: `\`timescale 1ns / 1ps

module decoder_2to4 (
    input wire [1:0] in,
    input wire en,
    output wire [3:0] out
);
    // TODO: Implement 2-to-4 Decoder using STRUCTURAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module decoder_2to4 (
    input wire [1:0] in,
    input wire en,
    output wire [3:0] out
);
    // Structural Modeling: Inverters and AND gates
    wire not_in0, not_in1;
    not (not_in0, in[0]);
    not (not_in1, in[1]);

    assign out[0] = en & (not_in1 & not_in0);
    assign out[1] = en & (not_in1 & in[0]);
    assign out[2] = en & (in[1] & not_in0);
    assign out[3] = en & (in[1] & in[0]);

endmodule
`
      },
      dataflow: {
        style: 'dataflow',
        label: 'Dataflow Modeling',
        badge: 'Bit-Shift Continuous Assignment',
        description: 'Implements the 2-to-4 decoder using continuous assign with bit-shift (en ? (4\'b0001 << in) : 4\'b0).',
        keyConstructs: ['assign out = en ? (4\'b0001 << in) : 4\'b0000;'],
        starterCode: `\`timescale 1ns / 1ps

module decoder_2to4 (
    input wire [1:0] in,
    input wire en,
    output wire [3:0] out
);
    // TODO: Implement 2-to-4 Decoder using DATAFLOW MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module decoder_2to4 (
    input wire [1:0] in,
    input wire en,
    output wire [3:0] out
);
    // Dataflow Modeling: Bit shift assignment
    assign out = en ? (4'b0001 << in) : 4'b0000;

endmodule
`
      },
      behavioral: {
        style: 'behavioral',
        label: 'Behavioral Modeling',
        badge: 'Procedural Case Statement',
        description: 'Implements the 2-to-4 decoder procedurally inside an always @(*) block with case statement.',
        keyConstructs: ['always @(*) begin', 'case (in)', '2\'b00: out = 4\'b0001;', 'endcase'],
        starterCode: `\`timescale 1ns / 1ps

module decoder_2to4 (
    input wire [1:0] in,
    input wire en,
    output reg [3:0] out
);
    // TODO: Implement 2-to-4 Decoder using BEHAVIORAL MODELING

endmodule
`,
        solutionCode: `\`timescale 1ns / 1ps

module decoder_2to4 (
    input wire [1:0] in,
    input wire en,
    output reg [3:0] out
);
    // Behavioral Modeling: Procedural case statement
    always @(*) begin
        case ({en, in})
            3'b100: out = 4'b0001;
            3'b101: out = 4'b0010;
            3'b110: out = 4'b0100;
            3'b111: out = 4'b1000;
            default: out = 4'b0000;
        endcase
    end

endmodule
`
      }
    };
  }

  // 12. Generic Fallback for Other Circuits
  const signals = stdDef?.signals || problem.testbenchConfig?.signals || [];
  const primaryOut = signals.find(s => s.type === 'output')?.name?.replace(/\[.*\]/, '') || 'y';
  const primaryInputs = signals.filter(s => s.type === 'input' && !s.name.includes('clk') && !s.name.includes('rst')).map(s => s.name.replace(/\[.*\]/, ''));
  const firstIn = primaryInputs[0] || 'a';
  const secondIn = primaryInputs[1] || 'b';
  const baseSolution = stdDef?.solutionCode || problem.solutionCode || '';

  return {
    structural: {
      style: 'structural',
      label: 'Structural Modeling',
      badge: 'Gate Primitives & Netlists',
      description: `Structural gate-level representation of ${problem.title} using primitive logic gates or component instantiations.`,
      keyConstructs: ['and, or, xor, not primitives', 'internal wire declarations'],
      starterCode: `${header}
    // TODO: Implement ${problem.title} using STRUCTURAL MODELING
    // Instantiate gate-level primitives (and, or, xor, not) or sub-modules interconnected with wires.

endmodule
`,
      solutionCode: baseSolution.includes('xor') || baseSolution.includes('and') ? baseSolution : `${header}
    // Structural Modeling Implementation
    wire w1, w2;
    and g1 (w1, ${firstIn}, ${secondIn});
    or  g2 (${primaryOut}, w1, ${firstIn});

endmodule
`
    },
    dataflow: {
      style: 'dataflow',
      label: 'Dataflow Modeling',
      badge: 'Continuous Assignment',
      description: `Dataflow representation of ${problem.title} using continuous assignment statements (assign) and expressions.`,
      keyConstructs: ['assign statements', 'boolean, arithmetic & ternary operators'],
      starterCode: `${header}
    // TODO: Implement ${problem.title} using DATAFLOW MODELING
    // Use continuous assignment 'assign' with boolean equations or conditional operators.

endmodule
`,
      solutionCode: baseSolution || `${header}
    // Dataflow Modeling Implementation
    assign ${primaryOut} = ${firstIn} ^ ${secondIn};

endmodule
`
    },
    behavioral: {
      style: 'behavioral',
      label: 'Behavioral Modeling',
      badge: 'Procedural always Blocks',
      description: `Behavioral representation of ${problem.title} using procedural always blocks with algorithmic control constructs.`,
      keyConstructs: [isComb ? 'always @(*) begin' : 'always @(posedge clk) begin', 'if-else or case statements'],
      starterCode: `${header.replace(new RegExp(`output\\s+wire\\s+((?:\\[[^\\]]+\\]\\s*)?${primaryOut})`, 'g'), `output reg $1`)}
    // TODO: Implement ${problem.title} using BEHAVIORAL MODELING
    // Use procedural always block with ${isComb ? 'if-else or case logic' : 'sequential state transitions'}.

endmodule
`,
      solutionCode: isComb ? `${header.replace(new RegExp(`output\\s+wire\\s+((?:\\[[^\\]]+\\]\\s*)?${primaryOut})`, 'g'), `output reg $1`)}
    // Behavioral Modeling Implementation
    always @(*) begin
        ${primaryOut} = ${firstIn} ^ ${secondIn};
    end

endmodule
` : `${header.replace(new RegExp(`output\\s+wire\\s+((?:\\[[^\\]]+\\]\\s*)?${primaryOut})`, 'g'), `output reg $1`)}
    // Behavioral Modeling Implementation
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            ${primaryOut} <= 0;
        else
            ${primaryOut} <= ${firstIn};
    end

endmodule
`
    }
  };
}
