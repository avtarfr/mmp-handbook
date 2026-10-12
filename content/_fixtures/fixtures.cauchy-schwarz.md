---
id: fixtures.cauchy-schwarz
title: The Cauchy–Schwarz inequality
kind: theorem
level: core
summary: In any inner-product space, the size of an inner product is at most the product of the norms.
prereqs: []
provenance: original
sources: []
---

:::definition{provenance=original}
An **inner product** on a complex vector space $V$ is a map $(\cdot,\cdot)\colon V\times V\to\mathbb{C}$ that is linear in its first argument, satisfies $(g,f)=\overline{(f,g)}$, and has $(f,f)>0$ for $f\neq 0$. The **norm** is $\|f\| = (f,f)^{1/2}$.
:::

:::statement{provenance=original}
For all $f, g$ in an inner-product space,

$$
|(f,g)| \le \|f\|\,\|g\|,
$$

with equality if and only if $f$ and $g$ are linearly dependent.
:::

:::idea{provenance=original}
The squared norm of $f - tg$ is never negative. Choosing $t$ to make it as small as possible turns this into the inequality.
:::

:::proof{provenance=original}
If $g = 0$ both sides are zero, so equality holds, and $f, g$ are linearly dependent, as the statement requires. Otherwise, first assume $(f,g)$ is real. For real $t$,

$$
0 \le \|f - t g\|^2 = \|f\|^2 - 2t\,(f,g) + t^2\|g\|^2 .
$$

Take $t = (f,g)/\|g\|^2$, the value that minimises the right-hand side. Substituting gives

$$
0 \le \|f - t g\|^2 = \|f\|^2 - \frac{(f,g)^2}{\|g\|^2},
$$

that is $(f,g)^2 \le \|f\|^2\|g\|^2$.

For general $(f,g) = |(f,g)|e^{i\theta}$, apply the real case to $e^{-i\theta}f$ and $g$: their inner product is $|(f,g)|$, which is real, and $\|e^{-i\theta}f\| = \|f\|$.

For equality, apply the real case to the rotated pair $e^{-i\theta}f$ and $g$. With $t = |(f,g)|/\|g\|^2$, the display above gives $\|e^{-i\theta}f - tg\|^2 = \|f\|^2 - |(f,g)|^2/\|g\|^2$, which is zero when equality holds. By positivity of the inner product, $e^{-i\theta}f = tg$, so $f = e^{i\theta}t\,g$ and $f, g$ are linearly dependent. Conversely, if $f = cg$ then both sides equal $|c|\,\|g\|^2$. $\square$
:::

:::example{provenance=original}
On $V = C[0,1]$ with $(f,g) = \int_0^1 f\,\overline{g}\,dx$, take $f(x) = x$ and $g(x) = 1$. Then $(f,g) = \tfrac12$, $\|g\| = 1$ and $\|f\|^2 = \int_0^1 x^2\,dx = \tfrac13$, so $\|f\| = 1/\sqrt{3}$. The inequality reads $\tfrac12 \le 1/\sqrt{3} \approx 0.577$.
:::
