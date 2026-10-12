---
id: fixtures.parseval-identity
title: Parseval's identity
kind: theorem
level: core
summary: For integrable functions, Bessel's inequality is an equality; the energy of f equals the energy of its coefficients.
prereqs: [fixtures.cauchy-schwarz, fixtures.bessel-inequality, fixtures.continuous-approximation, fixtures.fejer-theorem]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 3, §1.2 (proof of mean-square convergence, Lemma 1.2), pp. 76–79, and Thm 1.3(ii), p. 80"
    pages: "76-80"
    role: statement; proof route via mean-square convergence
---

:::statement{provenance=adapted src="stein-shakarchi-2003:Ch. 3, Thm 1.3, p. 80"}
If $f$ is Riemann-integrable on $[-\pi, \pi]$, then

$$
\sum_{n=-\infty}^{\infty} |\hat f(n)|^2 = \|f\|^2 .
$$
:::

:::idea{provenance=original}
The proof of :ref[Bessel's inequality]{to=fixtures.bessel-inequality} shows that the gap between $\|f\|^2$ and the partial sum of $|\hat f(n)|^2$ is exactly $\|f - S_N f\|^2$. So Parseval's identity holds precisely when the truncated Fourier sums converge to $f$ in mean square. Proving that convergence is where the real work lies.
:::

:::proof{provenance=adapted src="stein-shakarchi-2003:Ch. 3, §1.2 and Lemma 1.2, pp. 76–79"}
From the Pythagorean splitting in :ref[Bessel's inequality]{to=fixtures.bessel-inequality},

$$
\|f\|^2 - \sum_{|n|\le N} |\hat f(n)|^2 = \|f - S_N f\|^2 ,
$$

so it suffices to show $\|f - S_N f\|\to 0$. A **trigonometric polynomial of degree at most $M$** is a finite sum $\sum_{|n|\le M} c_n e^{inx}$. Two facts are needed.

1. *Trigonometric polynomials are dense in mean square.* For every $\varepsilon > 0$ there is a trigonometric polynomial $P$ with $\|f - P\| < \varepsilon$. We reach $P$ in two moves. The first is the only place where the *boundedness* of $f$, which Riemann integrability guarantees, is used; elsewhere integrability only makes the integrals exist.

   *From $f$ to a continuous function.* Because $f$ is Riemann-integrable, it is bounded, say $|f| \le B$ with $B > 0$. By :ref[the continuous-approximation lemma]{to=fixtures.continuous-approximation}, for every $\eta > 0$ there is a continuous $2\pi$-periodic $g$ with $|g| \le \sqrt{2}\,B$ and $\int_{-\pi}^{\pi} |f - g|\, dx < \eta$. Then $|f - g| \le |f| + |g| \le 3B$ everywhere, so

   $$
   \|f - g\|^2 = \frac{1}{2\pi}\int_{-\pi}^{\pi} |f - g|\,|f - g|\, dx
   \le \frac{3B}{2\pi}\int_{-\pi}^{\pi} |f - g|\, dx
   < \frac{3B\eta}{2\pi} .
   $$

   Choosing $\eta = \pi\varepsilon^2/(6B)$ gives $\|f - g\| < \varepsilon/2$. The boundedness of $f$ is essential here: a small integral of $|f - g|$ controls the integral of $|f - g|^2$ only because $|f - g|$ is bounded.

   *From $g$ to a trigonometric polynomial.* By :ref[Fejér's theorem]{to=fixtures.fejer-theorem}, some Fejér mean $P$ of $g$ satisfies $|g - P| < \varepsilon/2$ everywhere. Squaring and averaging over $[-\pi, \pi]$ gives $\|g - P\| < \varepsilon/2$. The triangle inequality for $\|\cdot\|$, which follows from :ref[the Cauchy–Schwarz inequality]{to=fixtures.cauchy-schwarz} by expanding $\|u+v\|^2$, then gives $\|f - P\| < \varepsilon$.
2. *The Fourier sum is the best approximation.* Let $P$ have degree at most $M$ and take $N \ge M$. Then $S_N f - P$ is a trigonometric polynomial of degree at most $N$. The proof of Bessel's inequality shows that $f - S_N f$ is orthogonal to each $e_m$ with $|m| \le N$, so it is orthogonal to $S_N f - P$. Writing $f - P = (f - S_N f) + (S_N f - P)$, Pythagoras gives
   $$
   \|f - P\|^2 = \|f - S_N f\|^2 + \|S_N f - P\|^2 \ge \|f - S_N f\|^2 .
   $$

Combining the two, with $P$ from fact 1 of degree $M$: $\|f - S_N f\| \le \|f - P\| < \varepsilon$ for all $N \ge M$, which proves the identity. $\square$
:::

:::remark{provenance=original}
Where the hypotheses are used: Riemann integrability makes $\hat f(n)$ and $\|f\|$ exist and, through boundedness, lets a small $\int|f-g|$ control $\|f-g\|^2$ in fact 1. Without boundedness the statement can fail to make sense: $f(x) = |x|^{-1/2}$ is improperly integrable, but $\int |f|^2 = \infty$, so $\|f\|^2$ is infinite.
:::

:::example{provenance=original}
Let $f = 1$ on $|x| \le \pi/3$ and $f = 0$ on $\pi/3 < |x| \le \pi$. This $f$ jumps at $\pm\pi/3$, so it is Riemann-integrable but not continuous.

The coefficients are $\hat f(0) = \frac{1}{2\pi}\cdot\frac{2\pi}{3} = \frac13$ and, for $n \ne 0$,

$$
\hat f(n) = \frac{1}{2\pi}\int_{-\pi/3}^{\pi/3} e^{-inx}\, dx
= \frac{1}{2\pi}\cdot\frac{e^{in\pi/3} - e^{-in\pi/3}}{in}
= \frac{\sin(n\pi/3)}{\pi n} .
$$

Since $\sin^2(n\pi/3) = \frac34$ when $3 \nmid n$ and $0$ when $3 \mid n$, we get $|\hat f(n)|^2 = \frac{3}{4\pi^2 n^2}$ for $n$ not a multiple of 3 and $0$ otherwise, with the same value at $n$ and $-n$. As $f^2 = f$, the mean square is $\|f\|^2 = \frac13$. Parseval's identity reads

$$
\frac19 + 2\sum_{n \ge 1,\ 3 \nmid n} \frac{3}{4\pi^2 n^2} = \frac13
\quad\Longrightarrow\quad
\sum_{n \ge 1,\ 3 \nmid n} \frac{1}{n^2} = \frac{4\pi^2}{27} \approx 1.46216 .
$$

As a check, deleting the multiples of 3 from $\sum_{n \ge 1} 1/n^2 = \pi^2/6$ removes $\frac19 \cdot \frac{\pi^2}{6}$ and leaves $\frac89 \cdot \frac{\pi^2}{6} = \frac{4\pi^2}{27}$.
:::

:::application{provenance=original}
In signal processing and climate time-series analysis, Parseval's identity says that a signal's mean square equals its spectral power summed over all frequencies. The zero frequency carries the squared mean $|\hat f(0)|^2$, so the variance is the power summed over the nonzero frequencies. This is what lets a periodogram be read as a decomposition of variance by timescale.
:::
