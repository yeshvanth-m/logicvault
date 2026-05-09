---
title: "Buffer (BUF)"
layout: doc
---

# Buffer (BUF)

A buffer is a **non-inverting driver** used to increase drive strength or isolate signal paths. Functionally equivalent to two inverters in series.

## Truth Table

| A | Y |
|:-:|:-:|
| 0 | 0 |
| 1 | 1 |

## Boolean Expression

```
Y = A
```

## CMOS Implementation

- Typically implemented as **two cascaded inverters** (INV → INV)
- Each stage can be sized to achieve desired drive strength
- Common drive strength variants: BUF_X1, BUF_X2, BUF_X4, BUF_X8, etc.

### Sizing Strategy

For driving large loads:
- First stage: Small (minimize input capacitance)
- Second stage: Large (maximize output drive)
- For very large loads, use multi-stage buffers with exponential sizing

## Applications

### 1. **Drive Strength Enhancement**
- Drive large capacitive loads (long wires, many fanouts)
- Restore signal integrity

### 2. **Clock Distribution**
- Clock tree buffers (balanced rise/fall times)
- Clock buffer cells (CLKBUF) often have matched delays

### 3. **Signal Isolation**
- Prevent load capacitance from affecting source
- Break up long wire RC delays

### 4. **Level Restoration**
- Restore degraded logic levels
- Fix weak signals from pass-transistor logic

### 5. **Delay Insertion**
- Intentional delay for timing adjustment
- Deskew signals in multi-path circuits

## Buffer vs. Inverter

| Property | Buffer | Inverter |
|----------|--------|----------|
| Inversion | No | Yes |
| Transistors | ~4 (2 INV) | 2 |
| Area | 2× inverter | Baseline |
| Delay | 2× INV delay | 1× INV delay |
| Drive | Configurable | Configurable |

## Buffer Insertion

In physical design, **buffer insertion** is used to:
- Meet timing constraints on long nets
- Fix slew violations
- Reduce crosstalk
- Balance delays across paths

## Related

- [NOT Gate (Inverter)](not.md) - Basic building block
- [Tri-state Buffer](../routing/tri-state.md) - Buffer with enable
- [Combinational Logic](../combinational/index.md)
