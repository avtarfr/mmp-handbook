---
id: fixtures.bessel-inequality
title: Bessel's inequality for Fourier coefficients
kind: theorem
level: core
summary: The squared Fourier coefficients of a square-integrable function have a finite sum bounded by its mean square.
prereqs: []
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 3, §1, Lemma 1.2 and the discussion after Thm 1.3, pp. 78–80"
    pages: "78-80"
    role: statement and orthogonality argument
---

:::definition{provenance=original}
For a function $f$ that is Riemann-integrable on $[-\pi, \pi]$, extended $2\pi$-periodically, the **Fourier coefficients** are

$$
\hat f(n) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)\, e^{-inx}\, dx, \qquad n \in \mathbb{Z},
$$

and the **mean square** of $f$ is $\|f\|^2 = \frac{1}{2\pi}\int_{-\pi}^{\pi} |f(x)|^2\, dx$. The functions $e_n(x) = e^{inx}$ are orthonormal for the inner product $(f, g) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f\,\overline{g}\,dx$, and $\hat f(n) = (f, e_n)$.
:::

:::statement{provenance=adapted src="stein-shakarchi-2003:p. 80"}
For every such $f$,

$$
\sum_{n=-\infty}^{\infty} |\hat f(n)|^2 \le \|f\|^2 .
$$

In particular $\hat f(n) \to 0$ as $|n| \to \infty$.
:::

:::idea{provenance=original}
Subtracting a truncated Fourier sum from $f$ leaves a remainder orthogonal to every exponential used. Pythagoras then splits $\|f\|^2$ into two non-negative pieces, one of which is the partial sum of the coefficients' squares.
:::

:::proof{provenance=adapted src="stein-shakarchi-2003:pp. 78–79"}
Fix $N$ and put $S_N = \sum_{|n| \le N} \hat f(n)\, e_n$. For $|m| \le N$, orthonormality gives $(S_N, e_m) = \hat f(m) = (f, e_m)$, so the remainder $g = f - S_N$ satisfies $(g, e_m) = 0$. Since $S_N$ is a combination of those $e_m$, we get $(g, S_N) = 0$.

Expanding $\|f\|^2 = \|g + S_N\|^2$ with this orthogonality gives

$$
\|f\|^2 = \|g\|^2 + \|S_N\|^2 \ge \|S_N\|^2 = \sum_{|n| \le N} |\hat f(n)|^2 ,
$$

where the last equality is orthonormality once more. The bound does not depend on $N$. The partial sums of the non-negative series are therefore bounded, so the series converges, and its sum is at most $\|f\|^2$. A convergent series has terms tending to zero, which gives $\hat f(n) \to 0$. $\square$
:::

:::remark{provenance=original}
Where the hypotheses are used: integrability of $|f|^2$ makes $\|f\|$ finite, and only orthonormality of the $e_n$ is used. The same proof therefore works for any orthonormal family in any inner-product space.
:::
