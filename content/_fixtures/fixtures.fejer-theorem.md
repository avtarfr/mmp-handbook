---
id: fixtures.fejer-theorem
title: Fejér's theorem
kind: theorem
level: core
summary: The averages of the Fourier partial sums of a continuous periodic function converge to it uniformly, so every continuous periodic function is a uniform limit of trigonometric polynomials.
prereqs: []
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 2, §4, Thm 4.1, and §5.2, Lemma 5.1, Thm 5.2 and Cor. 5.4, pp. 49–54"
    pages: "49-50, 53-54"
    role: statement; proof route through the Fejér kernel as a non-negative kernel of unit mass
---

:::definition{provenance=original}
Let $f$ be continuous on $\mathbb{R}$ and $2\pi$-periodic, with Fourier coefficients $\hat f(n) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)\,e^{-inx}\,dx$. A **trigonometric polynomial of degree at most $M$** is a finite sum $P(x) = \sum_{|n| \le M} c_n e^{inx}$ with complex coefficients $c_n$. The **Fourier partial sums** of $f$ and their running averages, the **Fejér means**, are

$$
S_n f(x) = \sum_{|k| \le n} \hat f(k)\, e^{ikx},
\qquad
\sigma_N f = \frac{1}{N}\bigl(S_0 f + S_1 f + \dots + S_{N-1} f\bigr), \quad N \in \mathbb{N}.
$$

Each $\sigma_N f$ is a trigonometric polynomial of degree at most $N - 1$.
:::

:::statement{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Thm 5.2 and Cor. 5.4, pp. 53–54"}
If $f$ is continuous and $2\pi$-periodic, then $\sigma_N f \to f$ uniformly on $\mathbb{R}$ as $N \to \infty$. Consequently, for every $\varepsilon > 0$ there is a trigonometric polynomial $P$ with $|f(x) - P(x)| < \varepsilon$ for all $x$.
:::

:::idea{provenance=original}
Each Fejér mean turns out to be a weighted average of the values of $f$ near $x$. The weight, called the Fejér kernel, is non-negative, has total mass one, and piles up near the centre of the window as $N$ grows. An average of values that are all close to $f(x)$ is close to $f(x)$, and uniform continuity makes the values close at every $x$ simultaneously. The partial sums $S_N f$ are also averages of $f$, but against a weight that takes both signs, and this argument does not work for them.
:::

:::proof{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Thm 4.1 and Lemma 5.1, pp. 49–50, 53"}
1. *The mean as a weighted average.* Substitute the integral for $\hat f(k)$ into $S_n f$, exchange the finite sum with the integral, and put $y = x - t$; periodicity of the integrand lets us keep the range $[-\pi, \pi]$. Averaging over $n = 0, \dots, N-1$ gives

   $$
   \sigma_N f(x) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x - t)\, F_N(t)\, dt,
   \qquad
   F_N(t) = \sum_{|k| < N}\Bigl(1 - \frac{|k|}{N}\Bigr) e^{ikt}.
   $$

   The weight of $e^{ikt}$ is the share of the sums $S_0, \dots, S_{N-1}$ that contain it: exactly those $S_n$ with $n \ge |k|$, which number $N - |k|$.

2. *The kernel is a squared modulus.* Multiplying out $\bigl|\sum_{j=0}^{N-1} e^{ijt}\bigr|^2 = \sum_{j, l = 0}^{N-1} e^{i(j - l)t}$, a difference $k = j - l$ with $|k| < N$ arises from $N - |k|$ pairs. Comparing with step 1, then summing the geometric series and using $|e^{is} - 1| = 2|\sin(s/2)|$, we get for $t \notin 2\pi\mathbb{Z}$

   $$
   F_N(t) = \frac{1}{N}\Bigl|\sum_{j=0}^{N-1} e^{ijt}\Bigr|^2
   = \frac{1}{N}\left|\frac{e^{iNt} - 1}{e^{it} - 1}\right|^2
   = \frac{\sin^2(Nt/2)}{N \sin^2(t/2)} .
   $$

3. *Three properties of the kernel.* (a) $F_N \ge 0$, by the first expression in step 2. (b) $\frac{1}{2\pi}\int_{-\pi}^{\pi} F_N(t)\,dt = 1$, because each $e^{ikt}$ with $k \ne 0$ integrates to zero over a period and the $k = 0$ term has weight 1. (c) If $0 < \delta \le |t| \le \pi$, then $\sin^2(t/2) \ge \sin^2(\delta/2)$, since $\sin$ is increasing on $[0, \pi/2]$; hence $F_N(t) \le 1/(N \sin^2(\delta/2))$ there.

4. *The estimate.* By (b) we may subtract $f(x)$ inside the integral:

   $$
   \sigma_N f(x) - f(x) = \frac{1}{2\pi}\int_{-\pi}^{\pi} \bigl(f(x - t) - f(x)\bigr) F_N(t)\, dt .
   $$

   This is where continuity and periodicity of $f$ are used. A continuous function on the compact interval $[-2\pi, 2\pi]$ is bounded and uniformly continuous, and periodicity carries both properties to all of $\mathbb{R}$. So $|f| \le B$ for some $B$, and for a given $\varepsilon > 0$ there is $\delta \in (0, \pi)$ with $|f(x - t) - f(x)| < \varepsilon/2$ for every $x$ whenever $|t| < \delta$. On $|t| < \delta$ the integrand is at most $\frac{\varepsilon}{2} F_N(t)$ by (a), so by (b) that part contributes at most $\varepsilon/2$. On $\delta \le |t| \le \pi$ the integrand is at most $2B / (N\sin^2(\delta/2))$ by (c), and that part contributes at most the same amount. Therefore

   $$
   \sup_{x}\, |\sigma_N f(x) - f(x)| \le \frac{\varepsilon}{2} + \frac{2B}{N \sin^2(\delta/2)} < \varepsilon
   \quad\text{whenever}\quad N > \frac{4B}{\varepsilon \sin^2(\delta/2)} .
   $$

   The bound does not depend on $x$, so the convergence is uniform. For the consequence, take $P = \sigma_N f$ with such an $N$. $\square$
:::

:::remark{provenance=original}
Where the hypotheses are used: continuity and periodicity enter only in step 4, through boundedness and uniform continuity. Without them uniform convergence must fail, because every $\sigma_N f$ is continuous and a uniform limit of continuous functions is continuous. For example, the $2\pi$-periodic extension of $x \mapsto x$ from $(-\pi, \pi]$ is continuous on $(-\pi, \pi)$ but jumps at $\pi$, so no sequence of trigonometric polynomials converges to it uniformly. Non-negativity of the kernel, property (a), is what the partial sums lack: their kernel $\sum_{|k| \le N} e^{ikt}$ takes negative values, so the first estimate in step 4 is not available for $S_N f$.
:::

:::example{provenance=original}
Take $f(x) = \cos x$, so $\hat f(\pm 1) = \tfrac12$ and every other coefficient is zero. Then $S_0 f = 0$ and $S_n f = \cos x$ for $n \ge 1$, so

$$
\sigma_N f(x) = \frac{0 + (N-1)\cos x}{N} = \Bigl(1 - \frac{1}{N}\Bigr)\cos x,
\qquad
\sup_x |f(x) - \sigma_N f(x)| = \frac{1}{N},
$$

with the supremum attained at $x = 0$. For $N = 20$ the uniform error is $0.05$, although $S_n f = f$ exactly for every $n \ge 1$. Averaging buys convergence for every continuous function at the price of speed. Only uniform approximation is needed when the theorem is used as a density result, so the slower rate does no harm there.
:::

:::application{provenance=original}
Replacing the coefficients $\hat f(k)$ of a truncated Fourier series by $(1 - |k|/N)\hat f(k)$ produces exactly $\sigma_N f$. In signal processing this is the triangular (Bartlett) taper. Because $F_N$ is a non-negative weight of unit mass, a real $f$ satisfies $\min f \le \sigma_N f \le \max f$ for every $N$. The tapered sum therefore never overshoots at a jump, unlike the plain truncation with its Gibbs overshoot.
:::
