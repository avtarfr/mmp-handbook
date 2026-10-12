---
id: fixtures.geometric-series
title: Geometric series
kind: theorem
level: core
summary: When a geometric series converges, and to what.
prereqs: []
provenance: original
sources: []
---

:::definition{provenance=original}
For a complex number $r$, the **geometric series** with ratio $r$ is $\sum_{n=0}^{\infty} r^n$, and its partial sums are $S_N(r) = \sum_{n=0}^{N} r^n$.
:::

:::statement{provenance=original}
The geometric series converges exactly when $|r| < 1$, and then

$$
\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}.
$$
:::

:::idea{provenance=original}
Multiplying a partial sum by $1-r$ makes everything cancel except two terms. That gives a closed form for $S_N$, and the question becomes whether $r^{N+1}$ tends to zero.
:::

:::proof{provenance=original}
For $r \neq 1$, write $(1-r)S_N = \sum_{n=0}^{N} r^n - \sum_{n=1}^{N+1} r^n = 1 - r^{N+1}$, so

$$
S_N(r) = \frac{1 - r^{N+1}}{1-r}.
$$

If $|r| < 1$ then $|r^{N+1}| = |r|^{N+1} \to 0$, hence $S_N(r) \to 1/(1-r)$.

If $|r| \ge 1$ then $|r^n| \ge 1$ for every $n$. The terms do not tend to zero, so the series cannot converge, because the terms of a convergent series always tend to zero. (This also covers $r = 1$, where the closed form above does not apply.) $\square$
:::

:::example{provenance=original}
A ball dropped from height $h$ rebounds to $60\%$ of its previous height after every bounce. The total distance it travels is

$$
h + 2\sum_{n=1}^{\infty} (0.6)^n h = h + 2h\left(\frac{1}{1-0.6} - 1\right) = h + 3h = 4h.
$$
:::

:::exercise{provenance=original}
Show that $\sum_{n=0}^{\infty} n r^{n} = r/(1-r)^2$ for $|r|<1$ by differentiating the partial-sum formula, and explain why differentiating the infinite series term by term is justified.
:::
