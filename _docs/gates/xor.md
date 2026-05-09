---
title: "XOR Gate"
layout: doc
---

# XOR Gate (Exclusive OR)

The XOR gate outputs 1 when inputs are **different**. It's essential for arithmetic and parity logic.

## Truth Table (2-input)

| A | B | Y |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

## Boolean Expression

```
Y = A ⊕ B = A·B' + A'·B
```

## Implementation Options

### 1. Standard CMOS (from Boolean expression)
- Uses 12-14 transistors
- Straightforward but area/delay inefficient

### 2. Transmission Gate (TG) XOR
- Uses 6 transistors + 2 inverters
- Efficient and commonly used in standard cells
- Pass-transistor logic style

### 3. Pass-Transistor XOR
- Uses 4-6 transistors
- Very compact but may need level restoration

## Key Properties

- **Associative**: (A ⊕ B) ⊕ C = A ⊕ (B ⊕ C)
- **Commutative**: A ⊕ B = B ⊕ A
- **Identity**: A ⊕ 0 = A
- **Self-inverse**: A ⊕ A = 0

## Applications

- **Adders**: Half adder, full adder (sum bit = A ⊕ B ⊕ Cin)
- **Parity**: Even/odd parity generation and checking
- **Comparators**: Equality detection (A = B when A ⊕ B = 0)
- **Encryption**: Simple XOR ciphers
- **Error detection**: CRC, checksums

## Related

- [XNOR Gate](xnor.md) - Complement of XOR
- [Full Adder](../arithmetic/full-adder.md) - Uses XOR for sum
- [Combinational Logic](../combinational/index.md)
