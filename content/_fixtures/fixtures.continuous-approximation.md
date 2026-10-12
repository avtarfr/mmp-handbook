---
id: fixtures.continuous-approximation
title: Approximating an integrable function by continuous periodic ones
kind: theorem
level: core
summary: A bounded Riemann-integrable function on one period is close in integral to a continuous periodic function obeying the same kind of bound, which lets results proved for continuous functions pass to integrable ones.
prereqs: []
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 2, Lemma 3.2, p. 47; proved as Appendix, Lemma 1.5, pp. 285–286"
    pages: "47, 285-286"
    role: statement; first stage of the proof (a step function from upper sums)
---

:::statement{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Lemma 3.2, p. 47"}
Let $f$ be Riemann-integrable on $[-\pi, \pi]$ with $|f(x)| \le B$ for all $x$. For every $\eta > 0$ there is a continuous $2\pi$-periodic function $g$ with

$$
\int_{-\pi}^{\pi} |f(x) - g(x)|\, dx < \eta ,
$$

and with $|g| \le B$ everywhere if $f$ is real-valued, $|g| \le \sqrt{2}\, B$ everywhere if $f$ is complex-valued.
:::

:::idea{provenance=original}
If $f$ jumps, no continuous function is uniformly close to it, so we ask only that the integral of $|f - g|$ be small. The definition of the Riemann integral hands us a step function lying just above $f$. We then round off each jump of the step function by averaging it over a short moving window. An average never leaves the range of the values averaged, so the bound survives, and only short stretches around the jumps change.
:::

:::proof{provenance=adapted src="stein-shakarchi-2003:Appendix, Lemma 1.5, pp. 285–286"}
Assume first that $f$ is real-valued. If $B = 0$ then $f = 0$ and $g = 0$ works, so let $B > 0$.

1. *A step function above $f$.* Since $f$ is Riemann-integrable, there is a partition $-\pi = x_0 < x_1 < \dots < x_N = \pi$ whose upper and lower sums satisfy $U - L < \eta/2$. Let $s$ equal $M_j = \sup_{[x_{j-1}, x_j]} f$ on $[x_{j-1}, x_j)$ for each $j$, and put $s(\pi) = M_N$. Then $f \le s \le B$, and $s \ge f \ge -B$, so $|s| \le B$. Moreover $\int_{-\pi}^{\pi} s = U$ and $\int_{-\pi}^{\pi} f \ge L$, so

   $$
   \int_{-\pi}^{\pi} |s - f|\, dx = \int_{-\pi}^{\pi} (s - f)\, dx \le U - L < \frac{\eta}{2} .
   $$

2. *Rounding off the jumps.* Extend $s$ from $[-\pi, \pi)$ to a $2\pi$-periodic step function $\tilde s$ on $\mathbb{R}$, and for $0 < h < \pi$ define the moving average

   $$
   g(x) = \frac{1}{2h}\int_{x - h}^{x + h} \tilde s(y)\, dy .
   $$

   - $g$ is $2\pi$-periodic, because $\tilde s$ is.
   - $g$ is continuous: moving the window from $x$ to $x'$ adds and removes pieces of length at most $|x' - x|$ on which $|\tilde s| \le B$, so $|g(x') - g(x)| \le (B/h)\,|x' - x|$.
   - $|g| \le B$, because $g(x)$ is an average of values in $[-B, B]$.
   - $g(x) = \tilde s(x)$ whenever $\tilde s$ is constant on $[x - h, x + h]$. In $[-\pi, \pi]$ the jumps of $\tilde s$ can only occur at $x_1, \dots, x_{N-1}$ and at $\pm\pi$. So $g$ and $s$ differ only on a set of total length at most $2h(N - 1) + 2h = 2hN$, where $|s - g| \le 2B$. Hence $\int_{-\pi}^{\pi} |s - g|\, dx \le 4BNh$, which is less than $\eta/2$ once $h < \eta/(8BN)$.

3. *Combining.* By the triangle inequality, $\int_{-\pi}^{\pi} |f - g| \le \int_{-\pi}^{\pi} |f - s| + \int_{-\pi}^{\pi} |s - g| < \eta$.

For complex $f = u + iv$, the real functions $u$ and $v$ are Riemann-integrable with $|u|, |v| \le |f| \le B$. Apply the real case to each with $\eta/2$ in place of $\eta$, obtaining $g_u$ and $g_v$, and put $g = g_u + i g_v$. Then $|g|^2 = g_u^2 + g_v^2 \le 2B^2$, and $\int |f - g| \le \int |u - g_u| + \int |v - g_v| < \eta$. $\square$
:::

:::remark{provenance=original}
Where the hypotheses are used: Riemann integrability is used once, in step 1, to produce the step function from upper and lower sums. Boundedness of $f$, which is part of being Riemann-integrable, supplies the bound on $g$, and that bound is what makes the lemma useful. Combined with $|f - g| \le |f| + |g|$, it turns the small integral of $|f - g|$ into a small integral of $|f - g|^2$. The lemma cannot ask for a small $\sup |f - g|$ instead, because a uniform limit of continuous functions is continuous and $f$ may jump. Nor does it extend to unbounded, improperly integrable functions such as $|x|^{-1/2}$. There no bound on $g$ is available, and $|x|^{-1}$, the square of that function, is not integrable at all.
:::

:::example{provenance=original}
Let $f = 1$ on $[0, \pi)$ and $f = 0$ on $[-\pi, 0)$, so $B = 1$, the partition $-\pi < 0 < \pi$ already makes $f$ a step function, and its periodic extension jumps at $0$ and at $\pm\pi$. The moving average with window half-width $h \le \pi/2$ is

$$
g(x) = \frac{x + h}{2h} \ \text{ for } |x| \le h,
\qquad
g(x) = \frac{\pi + h - x}{2h} \ \text{ for } \pi - h \le x \le \pi ,
$$

with $g = f$ on the rest of $[0, \pi]$ and on $[-\pi + h, -h]$, and $g$ continued periodically. Near $0$, $|f - g| = (x + h)/(2h)$ on $[-h, 0)$ and $(h - x)/(2h)$ on $[0, h]$, each with integral $h/4$. The jump at $\pm\pi$ contributes the same $h/2$ from $[\pi - h, \pi]$ and $[-\pi, -\pi + h]$. Hence

$$
\int_{-\pi}^{\pi} |f - g|\, dx = h,
\qquad
\int_{-\pi}^{\pi} |f - g|^2\, dx = 4 \cdot \frac{h}{12} = \frac{h}{3} .
$$

For $h = 0.01$ these are $0.01$ and $0.00333\ldots$, well inside the bound $4BNh = 0.08$ from step 2. Because $|f - g| \le 1$ here, the second integral is at most the first, which is the mechanism that converts integral closeness into mean-square closeness.
:::
