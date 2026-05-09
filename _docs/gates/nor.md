---
title: "NOR Gate"
layout: doc
---

# NOR Gate

The NOR gate outputs 1 **only when all inputs are 0**. It is a **universal gate** (like NAND).

## Truth Table (2-input)

| A | B | Y |
|:-:|:-:|:-:|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

## Boolean Expression

```
Y = (A + B)' = A NOR B
```

## CMOS Implementation

- **Pull-down network**: NMOS in **parallel** (either can pull low)
- **Pull-up network**: PMOS in **series** (both must be ON to pull high)
- ⚠️ **Performance issue**: Series PMOS is slow (PMOS stacking + lower mobility)
- This is why **NOR is slower than NAND** in CMOS designs

## Why NOR is Universal

All basic gates can be built from NOR:
- NOT: NOR with inputs tied together
- OR: NOR + NOT
- AND: De Morgan's law
- Used less than NAND due to speed penalty

## Applications

- Set-Reset latches (cross-coupled NOR)
- Some FPGA architectures
- Memory decoders (where speed is less critical)

## Related

- [OR Gate](or.md)
- [NAND Gate](nand.md) - Preferred in CMOS
- [NOR2/3/4](../combinational/) - Multi-input variants
- [Combinational Logic](../combinational/index.md)
