---
title: "Combinational Logic"
layout: doc
---

# Combinational Logic

Combinational logic circuits produce outputs that depend **only on current inputs** (no memory/state). This collection covers fundamental gates, building blocks, and optimized compound gates used in digital design.

## Basic Logic Gates

- [AND](../gates/and.md) - All inputs must be 1
- [OR](../gates/or.md) - Any input is 1
- [NOT (Inverter)](../gates/not.md) - Logical complement
- [Buffer](../gates/buf.md) - Non-inverting driver
- [NAND](../gates/nand.md) - Universal gate, CMOS-efficient
- [NOR](../gates/nor.md) - Universal gate
- [XOR](../gates/xor.md) - Inequality detector, used in adders
- [XNOR](../gates/xnor.md) - Equality detector

## Standard Cell Variants

### Multi-input NAND/NOR Gates
- [NAND2](nand2.md) / [NAND3](nand3.md) / [NAND4](nand4.md)
- [NOR2](nor2.md) / [NOR3](nor3.md) / [NOR4](nor4.md)

### Compound Gates (AOI/OAI)

Optimized area and delay by merging multiple logic levels:

- [AOI21](aoi21.md) - And-Or-Invert: `Y = !((A & B) | C)`
- [AOI22](aoi22.md) - And-Or-Invert: `Y = !((A & B) | (C & D))`
- [OAI21](oai21.md) - Or-And-Invert: `Y = !((A | B) & C)`
- [OAI22](oai22.md) - Or-And-Invert: `Y = !((A | B) & (C | D))`

These gates save area and reduce delay compared to building the same function from separate gates.

## Data Selection

- [MUX2](mux2.md) - 2:1 Multiplexer

## Key Concepts

### Combinational Properties
- **No feedback loops** (distinguishes from sequential)
- **No internal state** - same inputs always produce same outputs
- **Propagation delay** - finite time from input change to stable output

### CMOS Design Considerations
- **NAND vs NOR**: NAND is faster (parallel PMOS vs series PMOS)
- **Stacking effects**: Series transistors increase resistance/delay
- **Logical effort**: Method to estimate gate delays
- **AOI/OAI advantage**: Fewer transistors and levels than separate gates

## Related Topics

- [Arithmetic Circuits](../arithmetic/) - Adders, multipliers, comparators
- [Boolean Logic](../boolean/) - K-maps, minimization, hazards
- [Data Routing](../routing/) - Muxes, demuxes, tri-state
- [Sequential Logic](../sequential/) - Latches, flip-flops, FSMs
