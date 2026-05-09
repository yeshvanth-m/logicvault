---
layout: default
title: Welcome to LogicVault
---

<div class="page-header" style="margin-bottom: 3rem;">
  <h1 class="page-title" style="font-size: 3rem;">LogicVault</h1>
  <p class="page-subtitle" style="max-width: 100%;">
    A comprehensive vault of digital logic documentation and experiments. From basic gates to complex sequential circuits, 
    explore combinational and sequential logic design with detailed explanations, truth tables, and RTL implementations.
  </p>
</div>

<section class="section">
  <div class="section-header">
    <h2 class="section-title">Getting Started</h2>
  </div>
  <div class="prose">
    <p>
      LogicVault is organized into logical categories to help you learn and reference digital logic circuits efficiently. 
      Use the sidebar navigation to explore different circuit types, or jump directly to specific topics.
    </p>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2 class="section-title">Featured Circuits</h2>
  </div>
  <div class="related-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
    <a href="{{ '/docs/arithmetic/full-adder' | relative_url }}" class="related-card">
      <span class="related-card-name">Full Adder</span>
      <span class="related-card-cat">Arithmetic • Combinational</span>
    </a>
    <a href="{{ '/docs/arithmetic/half-adder' | relative_url }}" class="related-card">
      <span class="related-card-name">Half Adder</span>
      <span class="related-card-cat">Arithmetic • Basic</span>
    </a>
    <a href="{{ '/docs/gates/and' | relative_url }}" class="related-card">
      <span class="related-card-name">AND Gate</span>
      <span class="related-card-cat">Logic Gates • Fundamental</span>
    </a>
    <a href="{{ '/docs/mux/2to1' | relative_url }}" class="related-card">
      <span class="related-card-name">2-to-1 MUX</span>
      <span class="related-card-cat">Multiplexer • Combinational</span>
    </a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2 class="section-title">What You'll Find</h2>
  </div>
  <div class="qf-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
    <div class="qf-card">
      <p class="qf-label">Combinational Logic</p>
      <p class="qf-value" style="font-size: 0.75rem; font-weight: normal;">Gates, MUXes, Decoders, Encoders, Adders</p>
    </div>
    <div class="qf-card">
      <p class="qf-label">Sequential Logic</p>
      <p class="qf-value" style="font-size: 0.75rem; font-weight: normal;">Latches, Flip-Flops, Counters, FSMs</p>
    </div>
    <div class="qf-card">
      <p class="qf-label">RTL Code</p>
      <p class="qf-value" style="font-size: 0.75rem; font-weight: normal;">Verilog and VHDL implementations</p>
    </div>
    <div class="qf-card">
      <p class="qf-label">Interview Prep</p>
      <p class="qf-value" style="font-size: 0.75rem; font-weight: normal;">Common questions and insights</p>
    </div>
  </div>
</section>

<div class="callout callout-info" style="margin-top: 2rem;">
  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="8"/>
  </svg>
  <p><strong>Note:</strong> This is a living documentation project. Content is continually being added and refined. 
  Star the repository on GitHub to stay updated!</p>
</div>
