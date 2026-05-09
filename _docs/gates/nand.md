---
title: "NAND Gate"
layout: doc
---

# NAND Gate

The NAND gate outputs 0 **only when all inputs are 1**. It is a **universal gate** (can implement any Boolean function).

## Truth Table (2-input)

| A | B | Y |
|:-:|:-:|:-:|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

## Boolean Expression

```
Y = (A · B)' = A NAND B
```

## CMOS Implementation

- **Pull-down network**: NMOS in **series** (both must be ON to pull low)
- **Pull-up network**: PMOS in **parallel** (either can pull high)
- ⚡ **Why NAND is preferred**: PMOS in parallel is much faster than PMOS in series (as in NOR)
- Standard cell libraries heavily use NAND-based logic for this reason

## Why NAND is Universal

All basic gates can be built from NAND:
- NOT: NAND with inputs tied together
- AND: NAND + NOT
- OR: De Morgan's law
- Any combinational circuit can be built from NAND gates alone

## Applications

- Preferred building block in CMOS standard cell libraries
- NAND flash memory
- AOI (And-Or-Invert) complex gates

## Related

- [AND Gate](and.md)
- [NOR Gate](nor.md) - Also universal
- [NAND2/3/4](../combinational/) - Multi-input variants
- [Combinational Logic](../combinational/index.md)
