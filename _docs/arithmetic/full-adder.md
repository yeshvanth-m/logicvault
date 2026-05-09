---
layout: default
title: Full Adder
subtitle: A fundamental 1-bit arithmetic circuit that computes the sum of three binary inputs — two data bits and a carry-in — producing a sum bit and a carry-out. It is the core building block of all multi-bit adder architectures.
description: A comprehensive guide to the full adder combinational circuit
breadcrumb:
  - title: Arithmetic Circuits
    url: /docs/arithmetic
  - title: Full Adder
badges:
  - color: green
    text: Combinational
  - color: amber
    text: Arithmetic
  - color: blue
    text: Must Know
---

<section id="quick-facts">
  <div class="qf-grid">
    <div class="qf-card">
      <p class="qf-label">Inputs</p>
      <p class="qf-value">A, B, Cin</p>
    </div>
    <div class="qf-card">
      <p class="qf-label">Outputs</p>
      <p class="qf-value">Sum, Cout</p>
    </div>
    <div class="qf-card">
      <p class="qf-label">Gate count</p>
      <p class="qf-value">~9 gates</p>
    </div>
    <div class="qf-card">
      <p class="qf-label">Logic depth</p>
      <p class="qf-value">3 levels</p>
    </div>
    <div class="qf-card">
      <p class="qf-label">Circuit type</p>
      <p class="qf-value">Combinational</p>
    </div>
    <div class="qf-card">
      <p class="qf-label">Composed of</p>
      <p class="qf-value">2× Half Adder</p>
    </div>
  </div>
</section>

## Truth Table {#truth-table}

<div class="tt-wrap">
  <table class="truth-table">
    <thead>
      <tr>
        <th>A</th><th>B</th><th>Cin</th>
        <th class="out-col divider">Sum</th>
        <th class="out-col">Cout</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="val-0">0</td><td class="val-0">0</td><td class="val-0">0</td><td class="val-0 out-col">0</td><td class="val-0">0</td></tr>
      <tr><td class="val-0">0</td><td class="val-0">0</td><td class="val-1">1</td><td class="val-1 out-col">1</td><td class="val-0">0</td></tr>
      <tr><td class="val-0">0</td><td class="val-1">1</td><td class="val-0">0</td><td class="val-1 out-col">1</td><td class="val-0">0</td></tr>
      <tr><td class="val-0">0</td><td class="val-1">1</td><td class="val-1">1</td><td class="val-0 out-col">0</td><td class="val-1">1</td></tr>
      <tr><td class="val-1">1</td><td class="val-0">0</td><td class="val-0">0</td><td class="val-1 out-col">1</td><td class="val-0">0</td></tr>
      <tr><td class="val-1">1</td><td class="val-0">0</td><td class="val-1">1</td><td class="val-0 out-col">0</td><td class="val-1">1</td></tr>
      <tr><td class="val-1">1</td><td class="val-1">1</td><td class="val-0">0</td><td class="val-0 out-col">0</td><td class="val-1">1</td></tr>
      <tr><td class="val-1">1</td><td class="val-1">1</td><td class="val-1">1</td><td class="val-1 out-col">1</td><td class="val-1">1</td></tr>
    </tbody>
  </table>
</div>

## Boolean Expression {#boolean}

<div class="bool-box">
  <p class="bool-label">Sum</p>
  <p class="bool-expr">
    <span class="out">Sum</span> = <span class="var">A</span> <span class="op">⊕</span> <span class="var">B</span> <span class="op">⊕</span> <span class="var">Cin</span>
  </p>
</div>

<div class="bool-box">
  <p class="bool-label">Carry-out</p>
  <p class="bool-expr">
    <span class="out">Cout</span> = (<span class="var">A</span> <span class="op">·</span> <span class="var">B</span>) <span class="op">+</span> (<span class="var">Cin</span> <span class="op">·</span> (<span class="var">A</span> <span class="op">⊕</span> <span class="var">B</span>))
  </p>
</div>

<div class="bool-box">
  <p class="bool-label">Canonical SOP — Sum (minterms)</p>
  <p class="bool-expr" style="font-size:.78rem;">
    <span class="out">Sum</span> = Σm(1, 2, 4, 7) &nbsp;|&nbsp;
    <span class="out">Cout</span> = Σm(3, 5, 6, 7)
  </p>
</div>

<div class="callout callout-tip">
  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18h6m-3-3v3m-7-6a7 7 0 1 1 14 0 7 7 0 0 1-14 0z"/></svg>
  <p><strong>Key insight:</strong> The Sum output is a 3-input XOR — odd parity of inputs. The carry-out is the majority function: 1 when two or more inputs are 1.</p>
</div>

## Circuit Diagram {#circuit}

<div class="diagram-box">
  <div class="diagram-placeholder">
    <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 3v18"/>
    </svg>
    <p>Circuit diagrams will be added here.<br/>Consider using SVG or gate-level schematic tools.</p>
  </div>
</div>

## RTL Implementation {#verilog}

### Verilog

```verilog
module full_adder (
  input  wire A,
  input  wire B,
  input  wire Cin,
  output wire Sum,
  output wire Cout
);

  assign Sum  = A ^ B ^ Cin;
  assign Cout = (A & B) | (Cin & (A ^ B));

endmodule
```

### VHDL

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity full_adder is
  Port (
    A    : in  STD_LOGIC;
    B    : in  STD_LOGIC;
    Cin  : in  STD_LOGIC;
    Sum  : out STD_LOGIC;
    Cout : out STD_LOGIC
  );
end full_adder;

architecture Behavioral of full_adder is
begin
  Sum  <= A xor B xor Cin;
  Cout <= (A and B) or (Cin and (A xor B));
end Behavioral;
```

## Interview Notes {#interview}

<ul class="interview-list">
  <li>What is the critical path of a full adder and which output drives it?</li>
  <li>How does ripple-carry delay scale with bit-width, and what's the O(n) vs O(log n) alternative?</li>
  <li>Can you implement a full adder using only NAND gates? How many?</li>
  <li>Derive the full adder from two half adders. Why can't a single half adder do the job?</li>
  <li>In FPGA synthesis, how does the carry chain implement a full adder differently from LUT logic?</li>
  <li>What is the generate (G) and propagate (P) signal of a full adder, and why do they matter?</li>
</ul>

## Related Circuits {#related}

<div class="related-grid">
  <a href="../arithmetic/half-adder" class="related-card">
    <span class="related-card-name">Half Adder</span>
    <span class="related-card-cat">Prerequisite</span>
  </a>
  <a href="../arithmetic/ripple-carry" class="related-card">
    <span class="related-card-name">Ripple Carry Adder</span>
    <span class="related-card-cat">Builds on this</span>
  </a>
  <a href="../arithmetic/cla" class="related-card">
    <span class="related-card-name">Carry Lookahead Adder</span>
    <span class="related-card-cat">Optimization</span>
  </a>
  <a href="../arithmetic/full-sub" class="related-card">
    <span class="related-card-name">Full Subtractor</span>
    <span class="related-card-cat">Dual operation</span>
  </a>
</div>
