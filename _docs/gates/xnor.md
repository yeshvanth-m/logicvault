---
title: "XNOR Gate"
layout: doc
---

# XNOR Gate (Exclusive NOR)

The XNOR gate outputs 1 when inputs are **the same** (equality detector). It's the complement of XOR.

## Truth Table (2-input)

| A | B | Y |
|:-:|:-:|:-:|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

## Boolean Expression

```
Y = (A ⊕ B)' = A·B + A'·B' = A ⊙ B
```

Alternatively: **A XNOR B = (A AND B) OR (NOT A AND NOT B)**

## Implementation

- Typically implemented as **XOR + NOT** (inverter)
- Can also use transmission gate logic (similar to XOR)
- Some standard cells provide XNOR directly for area/speed optimization

## Key Properties

- **Equality**: Output is 1 when A = B
- **Commutative**: A ⊙ B = B ⊙ A
- **Self-identity**: A ⊙ A = 1 (always equal to itself)
- **Complement of XOR**: XNOR(A,B) = XOR(A,B)'

## Applications

- **Equality comparators**: Multi-bit comparison (AND all bit XNORs)
- **Syndrome generation**: Error detection circuits
- **Gray code**: Conversion circuits
- **Parity**: Odd parity (when used with XOR trees)
- **Cryptography**: Stream ciphers, correlation functions

## Multi-bit Equality

For n-bit equality:
```
A[n-1:0] == B[n-1:0] = (A[0] XNOR B[0]) AND (A[1] XNOR B[1]) AND ... AND (A[n-1] XNOR B[n-1])
```

## Related

- [XOR Gate](xor.md) - Complement of XNOR
- [Comparators](../arithmetic/comparator.md) - Use XNOR for equality
- [Combinational Logic](../combinational/index.md)
