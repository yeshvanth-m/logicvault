---
title: "NOT Gate (Inverter)"
layout: doc
---

# NOT Gate / Inverter

The NOT gate (inverter) outputs the **logical complement** of its input.

## Truth Table

| A | Y |
|:-:|:-:|
| 0 | 1 |
| 1 | 0 |

## Boolean Expression

```
Y = Ā  (or NOT A, or !A)
```

## CMOS Implementation

The inverter is the **fundamental building block** of CMOS logic:

- **Pull-up**: Single PMOS (gate connected to input)
- **Pull-down**: Single NMOS (gate connected to input)
- When A=0: PMOS ON, NMOS OFF → Y=1
- When A=1: PMOS OFF, NMOS ON → Y=0

### Key Characteristics

- **Sizing**: Typically Wp/Wn ≈ 2–3 for balanced rise/fall times (compensates for lower PMOS mobility)
- **VTC**: Voltage Transfer Characteristic determines switching threshold and noise margins
- **Logical effort**: g = 1 (reference for delay calculations)

## Applications

- Signal inversion
- Building block for all other gates
- Clock tree buffers (cascaded inverters)
- Level restoration

## Related

- [Buffer](buf.md) - Even number of inverters for drive strength
- [Combinational Logic](../combinational/index.md)
