---
title: "2:1 Multiplexer (MUX2)"
layout: doc
---

# 2:1 Multiplexer (MUX2)

Description: Selects one of two inputs `A` or `B` based on select `S`.

Truth table (S selects B when S=1):

| S | A | B | Y |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

Notes:
- Implementations: transmission-gate MUX (efficient), NAND/MUX trees, or AOI/OAI-based cells.
- Widely used for routing signals, implementing multiplexed inputs in flops, and building larger selectors.
