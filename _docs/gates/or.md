---
title: "OR Gate"
layout: doc
---

# OR Gate

The OR gate outputs 1 when **any** input is 1. It implements logical disjunction.

## Truth Table (2-input)

| A | B | Y |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

## Boolean Expression

```
Y = A + B  (or A OR B)
```

## CMOS Implementation

- **Pull-down network**: NMOS transistors in **parallel** (either can pull output low)
- **Pull-up network**: PMOS transistors in **series** (both must be ON to pull output high)
- ⚠️ **Performance note**: Series PMOS is slower than parallel (PMOS already has lower mobility)
- For multi-input OR gates, consider using NOR + inverter for better timing

## Applications

- Signal combining
- Interrupt logic
- Priority encoding
- Wired-OR configurations (with open-drain)

## Related

- [NOR Gate](nor.md) - Dual of NAND, also a universal gate
- [Combinational Logic](../combinational/index.md)
