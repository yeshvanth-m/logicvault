---
title: "AND Gate"
layout: doc
---

# AND Gate

The AND gate outputs 1 only when **all** inputs are 1. It implements logical conjunction.

## Truth Table (2-input)

| A | B | Y |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

## Boolean Expression

```
Y = A · B  (or A AND B)
```

## CMOS Implementation

- **Pull-down network**: NMOS transistors in **series** (both must be ON to pull output low)
- **Pull-up network**: PMOS transistors in **parallel** (either can pull output high)
- For multi-input AND gates (3+), watch for stacking effects in NMOS series chain
- Consider using NAND + inverter for better performance

## Applications

- Masking operations
- Control logic
- Address decoding
- Building block for more complex circuits

## Related

- [NAND Gate](nand.md) - Universal gate, often preferred in CMOS
- [Combinational Logic](../combinational/index.md)
