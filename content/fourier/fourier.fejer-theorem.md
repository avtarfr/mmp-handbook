---
id: fourier.fejer-theorem
title: Cesàro means and Fejér's theorem
kind: theorem
level: core
summary: Averaging the Fourier partial sums replaces the sign-changing Dirichlet kernel by the non-negative Fejér kernel, and the averages converge to the function at every point of continuity, uniformly when the function is continuous; this makes the trigonometric polynomials dense in the continuous periodic functions.
prereqs: [fourier.fourier-series, fourier.dirichlet-convergence, found.uniform-convergence]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 2, §4 (good kernels), pp. 48–50, Thm 4.1; §5.1 (Cesàro means), pp. 51–52; §5.2, Lemma 5.1, Thm 5.2, Cor. 5.3 and Cor. 5.4, pp. 53–54; Lemma 3.2, p. 47"
    pages: "47-54"
    role: the three defining properties of a family of good kernels; the approximation theorem for good kernels; the closed form of the Fejér kernel and the verification that it is a good kernel; the Cesàro-summability theorem and the uniqueness and trigonometric-density corollaries; the lower bound on the integral of the absolute value of the Dirichlet kernel
  - work: folland-1999
    loc: "§8.4, p. 262 (Cesàro means of a numerical series) and Exercise 29, pp. 262–263; §8.5, p. 264 and Exercises 33–35, p. 269"
    pages: "262-264, 269"
    role: the definition of Cesàro means with the first $m+1$ partial sums, and the convention $F_m(x) = \sin^2((m+1)\pi x)/((m+1)\sin^2 \pi x)$ on the circle of circumference one; the statement that the $L^1$ norms of the Dirichlet kernels are unbounded and that the Fourier series of a continuous function need not converge pointwise
  - work: stakgold-holst-2011
    loc: "§2.3, p. 136 (the overshoot can be removed by Cesàro partial sums) and Exercise 2.3.6, p. 144 (the Fejér kernel as a delta sequence)"
    pages: "136, 144"
    role: the normalisation $F_n(x) = \sin^2(nx/2)/(2\pi n \sin^2(x/2))$ used when the convolution carries no factor $1/2\pi$; the delta-sequence reading of the Fejér kernel; the remark that Cesàro partial sums remove the overshoot at a jump
  - work: kreyszig-1978
    loc: "§4.10, pp. 269–274, including the definition of a regular summability method and Thm 4.10-1 (Toeplitz limit theorem); §4.11, Thm 4.11-5 (Weierstrass approximation theorem) and its proof, pp. 280–281"
    pages: "269-274, 280-281"
    role: the notion of a regular summability method and the criterion that makes Cesàro averaging regular; the statement of the Weierstrass approximation theorem for algebraic polynomials and the route from the trigonometric case to it
---

:::definition[Cesàro means, good kernels, the Fejér kernel]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, §4, p. 48 and §5.1–5.2, pp. 51–53; folland-1999:§8.4, p. 262"}
Throughout, *integrable on the circle* means Riemann integrable on $[-\pi,\pi]$ and extended $2\pi$-periodically to $\mathbb{R}$, and

$$
\hat f(n) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(\theta)\,e^{-in\theta}\,d\theta,
\qquad
S_N(f)(\theta) = \sum_{|n| \le N} \hat f(n)\,e^{in\theta}
$$

are the Fourier coefficients and the symmetric partial sums of :ref[the Fourier series]{to=fourier.fourier-series}. Convolution on the circle is $(f * g)(\theta) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(\theta - y)\,g(y)\,dy$, and $S_N(f) = f * D_N$ with $D_N(y) = \sum_{|n| \le N} e^{iny} = \sin\bigl((N+\tfrac12)y\bigr)/\sin(y/2)$ the Dirichlet kernel of :ref[pointwise convergence]{to=fourier.dirichlet-convergence}.

**Cesàro mean.** For a numerical series $\sum_{k \ge 0} c_k$ with partial sums $s_n = \sum_{k \le n} c_k$, the $N$th *Cesàro mean* is the average $\sigma_N = (s_0 + s_1 + \dots + s_{N-1})/N$ of the first $N$ partial sums. If $\sigma_N \to \sigma$, the series is *Cesàro summable* to $\sigma$. Applied to the Fourier series of $f$ this gives the *Fejér means*

$$
\sigma_N(f) = \frac{1}{N}\bigl(S_0(f) + S_1(f) + \dots + S_{N-1}(f)\bigr), \qquad N \in \mathbb{N},
$$

each a trigonometric polynomial of degree at most $N-1$.

**Good kernel.** A family $\{K_n\}_{n \ge 1}$ of integrable functions on the circle is a family of *good kernels* when

- (a) $\frac{1}{2\pi}\int_{-\pi}^{\pi} K_n = 1$ for every $n$: unit mass.
- (b) there is one constant $M$, the same for every $n$, with $\int_{-\pi}^{\pi} \lvert K_n \rvert \le M$: the total absolute mass stays bounded.
- (c) for each fixed $\delta \in (0,\pi)$, $\int_{\delta \le \lvert y \rvert \le \pi} \lvert K_n \rvert \to 0$ as $n \to \infty$: the mass concentrates at the origin.

When $K_n \ge 0$, (b) follows from (a) with $M = 2\pi$. Such a family is also called an *approximate identity*, or, in the language of :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Exercise 2.3.6, p. 144"}, a delta sequence.

**Fejér kernel.** $F_N = \dfrac{1}{N}\bigl(D_0 + D_1 + \dots + D_{N-1}\bigr)$, so that $\sigma_N(f) = f * F_N$ by linearity of the convolution in its second slot.
:::

:::note[Conventions differ]{provenance=adapted src="folland-1999:§8.4, p. 262 and Exercise 33, p. 269; stakgold-holst-2011:Exercise 2.3.6, p. 144"}
Three normalisations are in use and the closed forms look different because of it.

- Ours, following :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 2, Lemma 5.1, p. 53"}: period $2\pi$, the factor $1/2\pi$ in the convolution, $N$ partial sums $S_0,\dots,S_{N-1}$, and $F_N(y) = \sin^2(Ny/2)/\bigl(N\sin^2(y/2)\bigr)$.
- :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Exercise 2.3.6, p. 144"} put no factor in front of the integral, so their kernel absorbs it: $F_n(x) = \sin^2(nx/2)/\bigl(2\pi n \sin^2(x/2)\bigr)$.
- :cite[Folland]{work=folland-1999 loc="§8.4, p. 262 and Exercise 33b, p. 269"} works on the circle of circumference one with characters $e^{2\pi i kx}$ and averages the $m+1$ sums $S_0,\dots,S_m$, giving $F_m(x) = \sin^2\bigl((m+1)\pi x\bigr)/\bigl((m+1)\sin^2 \pi x\bigr)$.

All three are the same object after the change of variable and the change of index; only the labelling of "the $N$th mean" shifts by one. Mixing them silently is the usual source of a stray factor of $2\pi$.
:::

:::statement[Approximation by a good kernel]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Thm 4.1, p. 49"}
Take $f$ integrable on the circle and $\{K_n\}$ any family of good kernels. Convolving against the family recovers $f$ wherever $f$ is unambiguous:

1. $(f * K_n)(x) \to f(x)$ as $n \to \infty$, for each single $x$ at which $f$ is continuous;
2. when $f$ is continuous at every point of the circle, $\sup_x \lvert (f*K_n)(x) - f(x)\rvert \to 0$.

For this reason $\{K_n\}$ is also called an approximate identity: the operation $f \mapsto f * K_n$ approaches the identity operator.
:::

:::statement[Fejér's theorem]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Lemma 5.1 and Thm 5.2, pp. 53–54"}
Let $f$ be integrable on the circle. Then:

1. **The kernel.** $\{F_N\}_{N \ge 1}$ is a family of good kernels, with
   $$
   F_N(y) \;=\; \sum_{\lvert n \rvert < N}\Bigl(1 - \frac{\lvert n \rvert}{N}\Bigr) e^{iny} \;=\; \frac{1}{N}\,\frac{\sin^2(Ny/2)}{\sin^2(y/2)} \;\ge\; 0
   \quad (y \notin 2\pi\mathbb{Z}), \qquad F_N(0) = N .
   $$
2. **At a point.** $\sigma_N(f)(x) \to f(x)$ for each $x$ at which $f$ is continuous. Equivalently: the Fourier series of $f$ is Cesàro summable to the value $f(x)$ there, whether or not it converges there.
3. **Everywhere at once.** If $f$ has no discontinuity on the circle, then $\sigma_N(f) \to f$ uniformly on $\mathbb{R}$.
:::

:::statement[Three corollaries]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Cor. 5.3 and Cor. 5.4, p. 54; kreyszig-1978:Thm 4.11-5, pp. 280–281"}
1. **Uniqueness.** An integrable function on the circle whose Fourier coefficients all vanish is zero wherever it is continuous. Equivalently, the Fourier coefficients determine an integrable function at each of its points of continuity: if $\hat f = \hat g$ coefficientwise, then $f = g$ at every point at which both are continuous.
2. **Trigonometric density (the periodic Weierstrass theorem).** The trigonometric polynomials are dense in $C(S)$, the continuous functions on the circle, for the uniform norm: every continuous function on the circle — that is, every $f$ continuous on $[-\pi,\pi]$ with matching endpoint values $f(-\pi) = f(\pi)$ — is the uniform limit on $[-\pi,\pi]$ of a sequence of trigonometric polynomials, and the sequence $\sigma_N(f)$ will do.
3. **Weierstrass approximation theorem for polynomials.** For every real continuous $g$ on a finite interval $[a,b]$ and every $\varepsilon > 0$ there is a real polynomial $p$ with $\max_{t \in [a,b]} \lvert g(t) - p(t) \rvert < \varepsilon$; that is, the polynomials are dense in the real space $C[a,b]$.
:::

:::idea{provenance=original}
A partial sum is already an average of $f$ against a weight, the Dirichlet kernel, but that weight takes both signs and its total absolute mass grows without bound, so cancellation rather than concentration decides the limit. Averaging the partial sums averages the weights, and the average of the Dirichlet kernels turns out to be a perfect square divided by $N$: non-negative, of unit mass, and squeezed towards the origin as $N$ grows. Once the weight is a genuine probability density piling up at $0$, the conclusion is a one-line idea — an average of numbers that all lie within $\varepsilon$ of $f(x)$ lies within $\varepsilon$ of $f(x)$ — and uniform continuity makes the one $\varepsilon$ work at every $x$ at once. The corollaries follow because each Fejér mean *is* a trigonometric polynomial.
:::

:::proof[Approximation by a good kernel]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Thm 4.1, pp. 49–50"}
Fix $x$ with $f$ continuous at $x$, and let $\varepsilon > 0$. Because $f$ is integrable on the circle it is bounded, say $\lvert f \rvert \le B$.

**Step 1: write the error as one integral.** Property (a) lets us insert $f(x)$ under the integral sign:

$$
(f * K_n)(x) - f(x)
= \frac{1}{2\pi}\int_{-\pi}^{\pi} \bigl[f(x - y) - f(x)\bigr] K_n(y)\,dy .
$$

This is the only place where (a) is used, and it is what makes the whole error an integral of a *difference* of values of $f$.

**Step 2: choose the window.** Continuity of $f$ at $x$ gives a $\delta \in (0,\pi)$ with $\lvert f(x-y) - f(x) \rvert < \varepsilon$ whenever $\lvert y \rvert < \delta$.

**Step 3: split at the window and bound each part.** Taking absolute values in step 1 and splitting the range of integration,

$$
\lvert (f * K_n)(x) - f(x) \rvert
\;\le\; \underbrace{\frac{1}{2\pi}\int_{\lvert y \rvert < \delta} \lvert f(x-y) - f(x)\rvert\, \lvert K_n(y)\rvert \,dy}_{\text{near part}}
\;+\; \underbrace{\frac{1}{2\pi}\int_{\delta \le \lvert y \rvert \le \pi} \lvert f(x-y) - f(x)\rvert\, \lvert K_n(y)\rvert \,dy}_{\text{far part}} .
$$

On the near part the first factor is below $\varepsilon$ by step 2, and the remaining integral is at most $M$ by property (b); the near part is therefore at most $\varepsilon M / 2\pi$ — a bound independent of $n$. On the far part the first factor is at most $2B$, so the far part is at most $\frac{B}{\pi}\int_{\delta \le \lvert y\rvert \le \pi}\lvert K_n \rvert$, which tends to $0$ as $n \to \infty$ by property (c), with $\delta$ now held fixed.

**Step 4: let $n \to \infty$, then $\varepsilon \to 0$.** The far part vanishes in the limit, so

$$
\limsup_{n \to \infty} \ \lvert (f * K_n)(x) - f(x) \rvert \;\le\; \frac{M\varepsilon}{2\pi} .
$$

The left-hand side does not depend on $\varepsilon$ and $\varepsilon > 0$ was arbitrary, so the $\limsup$ is $0$, which is the first claim.

**Step 5: uniformity.** If $f$ is continuous at every point of the circle, then it is continuous on the compact interval $[-2\pi, 2\pi]$ and hence uniformly continuous there; periodicity extends uniform continuity to $\mathbb{R}$. So in step 2 the same $\delta$ serves every $x$, and the bounds in step 3 then involve no $x$ at all. Taking the supremum over $x$ before letting $n \to \infty$ gives $\sup_x \lvert (f*K_n)(x) - f(x)\rvert \to 0$. $\square$
:::

:::proof[Fejér's theorem]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Lemma 5.1, p. 53"}
**Step 1: the coefficients of $F_N$.** By definition $D_n = \sum_{|m| \le n} e^{imy}$, so in the average $F_N = \frac1N\sum_{n=0}^{N-1} D_n$ the exponential $e^{imy}$ appears once for each $n$ with $\lvert m \rvert \le n \le N-1$, that is $N - \lvert m \rvert$ times when $\lvert m \rvert < N$ and never otherwise. Dividing by $N$,

$$
F_N(y) = \sum_{\lvert m \rvert < N}\Bigl(1 - \frac{\lvert m \rvert}{N}\Bigr) e^{imy} .
$$

In particular $F_N$ is a trigonometric polynomial. At $y = 0$ every exponential equals $1$, so $F_N(0) = \frac1N\sum_{\lvert m\rvert < N}(N - \lvert m\rvert) = \frac1N\Bigl(N + 2\sum_{m=1}^{N-1}(N-m)\Bigr) = \frac1N\bigl(N + N(N-1)\bigr) = N .$

**Step 2: the closed form.** Sum the Dirichlet kernels directly instead. For $y \notin 2\pi\mathbb{Z}$ each $D_n(y) = \sin\bigl((n+\frac12)y\bigr)/\sin(y/2)$, so

$$
N F_N(y)\,\sin\tfrac{y}{2} = \sum_{n=0}^{N-1} \sin\Bigl(\bigl(n+\tfrac12\bigr)y\Bigr)
= \operatorname{Im}\Bigl( e^{iy/2}\sum_{n=0}^{N-1} e^{iny}\Bigr)
= \operatorname{Im}\Bigl( e^{iy/2}\,\frac{e^{iNy}-1}{e^{iy}-1}\Bigr) ,
$$

the geometric sum being legitimate because $e^{iy} \ne 1$. Factoring $e^{iNy} - 1 = e^{iNy/2}\bigl(e^{iNy/2} - e^{-iNy/2}\bigr) = 2i\,e^{iNy/2}\sin(Ny/2)$ and likewise $e^{iy} - 1 = 2i\,e^{iy/2}\sin(y/2)$, the quotient is $e^{i(N-1)y/2}\sin(Ny/2)/\sin(y/2)$, so

$$
N F_N(y)\,\sin\tfrac{y}{2} = \operatorname{Im}\bigl(e^{iNy/2}\bigr)\frac{\sin(Ny/2)}{\sin(y/2)} = \frac{\sin^2(Ny/2)}{\sin(y/2)} ,
$$

and dividing by $N\sin(y/2)$ gives $F_N(y) = \sin^2(Ny/2)/\bigl(N\sin^2(y/2)\bigr)$. The right-hand side is a square over a square, hence $\ge 0$.

**Step 3: the three properties.** (a) In the expansion of step 1 every term with $m \ne 0$ integrates to $0$ over a full period and the term $m = 0$ has coefficient $1$, so $\frac{1}{2\pi}\int_{-\pi}^{\pi}F_N = 1$. (b) is automatic from (a) and $F_N \ge 0$, with $M = 2\pi$. (c) Fix $\delta \in (0,\pi)$. For $\delta \le \lvert y \rvert \le \pi$ we have $\lvert y \rvert/2 \in [\delta/2, \pi/2]$, where $\sin$ is increasing and positive, so $\sin^2(y/2) \ge \sin^2(\delta/2) > 0$; with $\sin^2(Ny/2) \le 1$ this gives the pointwise bound $F_N(y) \le 1/\bigl(N \sin^2(\delta/2)\bigr)$ and hence

$$
\int_{\delta \le \lvert y \rvert \le \pi} F_N \;\le\; \frac{2\pi}{N \sin^2(\delta/2)} \;\longrightarrow\; 0 \qquad (N \to \infty) .
$$

So $\{F_N\}$ is a family of good kernels, and since $\sigma_N(f) = f * F_N$, the approximation theorem above delivers both conclusions. $\square$
:::

:::proof[The corollaries]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, Cor. 5.3 and Cor. 5.4, p. 54; kreyszig-1978:Thm 4.11-5, pp. 280–281"}
**1. Uniqueness.** If every $\hat f(n)$ vanishes then every $S_N(f)$ is the zero function, hence so is every average $\sigma_N(f)$. By Fejér's theorem $\sigma_N(f)(x) \to f(x)$ at each point of continuity, and a constant sequence of zeros has limit $0$; so $f(x) = 0$ there. For the second form apply this to $f - g$, which is integrable and continuous at every point where both $f$ and $g$ are, and whose coefficients are $\hat f(n) - \hat g(n) = 0$.

**2. Trigonometric density.** The hypothesis $f(-\pi) = f(\pi)$ is exactly what makes the $2\pi$-periodic extension continuous on the circle, so Fejér's theorem gives $\sup_x\lvert f(x) - \sigma_N(f)(x)\rvert \to 0$; and each $\sigma_N(f)$ is a trigonometric polynomial by step 1 of the previous proof. So the sequence $\sigma_N(f)$ of trigonometric polynomials converges to $f$ uniformly, which is density in the uniform norm.

**3. Polynomials on $[a,b]$.** We follow the route of :cite[Kreyszig]{work=kreyszig-1978 loc="Thm 4.11-5, pp. 280–281"}, replacing his piecewise-linear intermediate approximation by part 2 above.

- *Reduce to equal endpoint values.* Given $g \in C[a,b]$, set $\gamma = \bigl(g(b)-g(a)\bigr)/(b-a)$ and $u(t) = g(t) - \gamma\,(t-a)$, so that $u(a) = u(b)$. If $q$ is a polynomial with $\max\lvert u - q\rvert < \varepsilon$ then $p(t) = q(t) + \gamma (t - a)$ satisfies $g - p = u - q$, hence $\max\lvert g-p\rvert<\varepsilon$. So we may assume $g(a) = g(b)$.
- *Rescale to the circle.* Put $\varphi(x) = g\bigl(a + (b-a)x/2\pi\bigr)$ for $x \in [0,2\pi]$. Then $\varphi$ is continuous with $\varphi(0) = \varphi(2\pi)$, so its $2\pi$-periodic extension is continuous on the circle. Part 2 is stated on $[-\pi,\pi]$, but it is a statement about continuous functions *on the circle*, and $[0,2\pi]$ is another full period: applying part 2 to the shifted function $x \mapsto \varphi(x+\pi)$ and then shifting the approximating polynomial back by $-\pi$ — which keeps it a trigonometric polynomial, since $e^{in(x-\pi)} = (-1)^n e^{inx}$ — gives a trigonometric polynomial $P(x) = \sum_{\lvert n \rvert \le M} c_n e^{inx}$ with $\max_{x \in [0,2\pi]} \lvert \varphi(x) - P(x)\rvert < \varepsilon/2$. Taking real parts if necessary, $P$ may be taken real, a finite combination of $\cos nx$ and $\sin nx$.
- *Replace the trigonometric functions by polynomials.* Each derivative of $x \mapsto \cos nx$ is $\pm n^{j}$ times $\cos nx$ or $\sin nx$, so the $j$th derivative is bounded by $n^{j}$ in absolute value, and the same holds for $\sin nx$ — the chain rule contributes one factor $n$ per differentiation. Taylor's theorem with Lagrange remainder therefore bounds the error of the degree-$k$ Taylor polynomial of $\cos(nx)$ or $\sin(nx)$ about $x = 0$ by $n^{k+1}(2\pi)^{k+1}/(k+1)! = (2\pi n)^{k+1}/(k+1)!$ on $[0,2\pi]$, and this tends to $0$ as $k \to \infty$ for each fixed $n$, the factorial outgrowing any fixed geometric factor. Truncating each of the finitely many ($\lvert n\rvert \le M$) Taylor series far enough out produces a polynomial $r$ in $x$ with $\max_{x \in [0,2\pi]}\lvert P(x) - r(x)\rvert < \varepsilon/2$.
- *Undo the rescaling.* $x \mapsto 2\pi (t-a)/(b-a)$ is an affine map, so $q(t) = r\bigl(2\pi(t-a)/(b-a)\bigr)$ is a polynomial in $t$, and by the triangle inequality $\max_{t}\lvert g(t) - q(t)\rvert < \varepsilon$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Property (a) is used once**, in step 1 of the first proof, to turn the error into an integral of $f(x-y) - f(x)$. Without unit mass the limit would be a multiple of $f(x)$ rather than $f(x)$.
- **Property (b) is what the Dirichlet kernel lacks**, and it is used on the near part, where the only control on the kernel is its total absolute mass. The Dirichlet kernels satisfy (a) but not (b): $\int_{-\pi}^{\pi}\lvert D_N\rvert \ge c\log N$ as $N \to \infty$ :cite[]{work=stein-shakarchi-2003 loc="Ch. 2, §4, p. 50 and Problem 2"}, and :cite[Folland]{work=folland-1999 loc="§8.5, p. 264 and Exercise 34, p. 269"} records the same fact as $\lVert D_m\rVert_1 \to \infty$. Numerically $\frac{1}{2\pi}\int_{-\pi}^{\pi}\lvert D_n\rvert$ equals $2.2234$, $3.1388$ and $4.0702$ at $n = 10$, $100$ and $1000$, consistent with the growth $\tfrac{4}{\pi^2}\log n + O(1)$. Because (b) fails, the argument above gives nothing for $S_N(f)$ — and indeed the Fourier series of a continuous function can diverge at a point :cite[]{work=folland-1999 loc="§8.5, p. 264 and Exercise 35, p. 269"}.
- **Property (c) is used on the far part**, after $\delta$ has been fixed. The order matters: $\delta$ is chosen from $\varepsilon$ *before* $n$ is sent to infinity. Reversing the order proves nothing, which is why the proof ends with a $\limsup$ in $n$ and only then lets $\varepsilon \to 0$.
- **Continuity at $x$ is used only in step 2.** At a jump the general theorem simply says nothing, and it cannot be patched at the level of (a), (b), (c): a family of good kernels is free to favour one side. Take $K_n = 2\pi n\,\mathbf{1}_{[0,1/n]}$ on the circle. It satisfies (a), since $\frac{1}{2\pi}\int K_n = n\cdot\frac1n = 1$; (b) with $M = 2\pi$, since $K_n \ge 0$; and (c), since $K_n$ vanishes on $\delta \le \lvert y\rvert \le \pi$ as soon as $n > 1/\delta$. Yet $(f * K_n)(x) = n\int_0^{1/n} f(x-y)\,dy \to f(x^-)$, the left-hand limit alone, not the mean. What rescues the Fejér case is a property the definition of a good kernel does not require: $F_N$ is **even**, so by (a) each half carries mass $\frac{1}{2\pi}\int_0^{\pi}F_N = \frac{1}{2\pi}\int_{-\pi}^{0}F_N = \frac12$. Suppose then that the one-sided limits $f(x^\pm)$ exist. Splitting step 1 at $y = 0$ and subtracting $f(x^-)$ on $y > 0$ and $f(x^+)$ on $y < 0$ — which is legitimate precisely because each half has mass $\frac12$ — and running steps 2–4 on each half separately gives $\sigma_N(f)(x) \to \tfrac12\bigl(f(x^-) + f(x^+)\bigr)$. So at a jump the conclusion changes rather than fails, but only for an even kernel.
- **Uniform continuity, not mere continuity, is what makes step 5 work.** It comes from compactness of the circle, so it is free here; on $\mathbb{R}$ it would be an extra hypothesis.
- **Nothing is lost by averaging.** Cesàro summation is a *regular* summability method in the sense of :cite[Kreyszig]{work=kreyszig-1978 loc="§4.10, p. 270 and Thm 4.10-1, pp. 270–271"}: its matrix $a_{Nk} = 1/N$ for $k \le N$ and $0$ otherwise satisfies the three conditions of the Toeplitz limit theorem, so every convergent sequence is summable with the same limit. Hence Fejér's theorem does not contradict :ref[the Dirichlet convergence theorem]{to=fourier.dirichlet-convergence}; where the partial sums already converge, the means converge to the same value.
- **Positivity has a consequence the partial sums do not share.** Since $F_N \ge 0$ has unit mass, $\sigma_N(f)$ is an honest weighted average of values of $f$, so $\inf f \le \sigma_N(f) \le \sup f$ for real $f$ and every $N$. No overshoot is possible, in contrast with :ref[the Gibbs phenomenon]{to=fourier.gibbs-phenomenon} of the plain partial sums; :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, p. 136"} make the same remark.
:::

:::method[Approximating a continuous periodic function to a prescribed tolerance]{provenance=original}
1. Check that the function is continuous *on the circle*: continuity on $[-\pi,\pi]$ is not enough, the endpoint values must agree. If they do not, subtract a linear function first, as in step 1 of the proof of corollary 3.
2. Compute the coefficients $\hat f(n)$ for $\lvert n \rvert < N$ once. The Fejér mean needs no new integrals:
   $$
   \sigma_N(f)(\theta) = \sum_{\lvert n \rvert < N}\Bigl(1 - \frac{\lvert n \rvert}{N}\Bigr)\hat f(n)\,e^{in\theta} ,
   $$
   i.e. taper the coefficients of $S_{N-1}(f)$ by the triangular factor $1 - \lvert n\rvert/N$.
3. To certify a tolerance $\varepsilon$ without computing the error, run the proof's two bounds with explicit constants: find $\delta$ from the modulus of continuity of $f$ so that $\lvert y \rvert < \delta$ forces $\lvert f(\theta - y) - f(\theta)\rvert < \varepsilon/2$ for all $\theta$, then take
   $$
   N > \frac{4\,\sup\lvert f\rvert}{\varepsilon\,\sin^{2}(\delta/2)} ,
   $$
   which makes the far part at most $\varepsilon/2$ as well. This bound is pessimistic but needs nothing beyond $\sup\lvert f \rvert$ and $\delta$.
4. For a function with jumps, do not look for uniform convergence: use the means to get convergence at each point of continuity, and use the bound $\inf f \le \sigma_N(f) \le \sup f$ to guarantee no overshoot.
5. If polynomials rather than trigonometric polynomials are wanted on $[a,b]$, follow corollary 3: subtract the chord, rescale to $[0,2\pi]$, taper, then truncate the Taylor series of the finitely many sines and cosines.
:::

:::example[The square wave: the means stay inside the data, the partial sums do not]{provenance=original}
Let $f$ be the $2\pi$-periodic extension of $f(\theta) = \operatorname{sgn}\theta$ on $(-\pi,\pi)$, an integrable function with a jump of size $2$ at $\theta = 0$. It is odd, so only sine terms survive, and a direct integration gives the classical sine series

$$
f(\theta) \sim \frac{4}{\pi}\sum_{j \ge 0} \frac{\sin\bigl((2j+1)\theta\bigr)}{2j+1} ,
\qquad\text{so}\qquad
S_{N}(f)(\theta) = \frac{4}{\pi}\sum_{\substack{k \le N \\ k \ \mathrm{odd}}} \frac{\sin k\theta}{k} .
$$

**The Fejér mean.** Tapering by $1 - k/N$ as in the method gives, for $N = 10$,

$$
\sigma_{10}(f)(\theta)
= \frac{4}{\pi}\sum_{k \in \{1,3,5,7,9\}}\Bigl(1 - \frac{k}{10}\Bigr)\frac{\sin k\theta}{k}
= \frac{2}{315\pi}\bigl(567\sin\theta + 147\sin 3\theta + 63 \sin 5\theta + 27\sin 7\theta + 7 \sin 9\theta\bigr).
$$

Only odd harmonics appear, and $\sin\bigl(k(\pi - \theta)\bigr) = \sin k\theta$ for odd $k$, so both $S_9(f)$ and $\sigma_{10}(f)$ are symmetric about $\theta = \pi/2$. Evaluating there, where every $\sin(k\pi/2) = \pm 1$:

$$
\sigma_{10}(f)\bigl(\tfrac{\pi}{2}\bigr) = \frac{2(567 - 147 + 63 - 27 + 7)}{315\pi} = \frac{926}{315\pi} = 0.935730\ldots ,
\qquad
S_{9}(f)\bigl(\tfrac{\pi}{2}\bigr) = \frac{4}{\pi}\Bigl(1 - \tfrac13 + \tfrac15 - \tfrac17 + \tfrac19\Bigr) = \frac{1052}{315\pi} = 1.063054\ldots
$$

**The comparison.** A numerical search over $\theta \in (0,\pi)$ gives $\max_\theta S_9(f) = 1.18233$, attained at $\theta = \pi/10$, while $\max_\theta \sigma_{10}(f) = 926/(315\pi) = 0.93573$, attained at $\pi/2$. Refining:

| $N$ | $\max_\theta S_{N-1}(f)$ | $\max_\theta \sigma_N(f)$ |
|---|---|---|
| $10$ | $1.18233$ | $0.93573$ |
| $20$ | $1.17981$ | $0.96825$ |
| $50$ | $1.17911$ | $0.98726$ |

The partial sums overshoot the value $1$ by about $18\%$ of the half-jump and keep doing so as $N$ grows; the means stay below $1$ and climb to it. The bound $\inf f \le \sigma_N(f) \le \sup f$ of the remark is exactly the reason, since here $\inf f = -1$ and $\sup f = 1$. At the jump itself, $\sigma_N(f)(0) = 0$ for every $N$ because every term is odd — the mean of the one-sided limits $\pm 1$, as the remark predicts.
:::

:::application{provenance=original}
**Tapered reconstructions in signal processing.** Replacing $\hat f(n)$ by $(1 - \lvert n\rvert/N)\hat f(n)$ is the triangular, or Bartlett, window. An ideal low-pass filter returns a plain partial sum and therefore rings at every edge in the input; a Bartlett-tapered filter returns a Fejér mean, and because the Fejér kernel is a non-negative weight of unit mass the output of a filter applied to a signal confined to $[m, M]$ stays confined to $[m, M]$. For a square-wave input this removes the overshoot of the previous example, which is the observation :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, p. 136"} make about low-pass filters and Cesàro sums. The price is a wider transition region: the kernel's main lobe has width $\sim 2\pi/N$ instead of the partial sum's $\sim \pi/N$.

**Why the trigonometric system is complete.** Corollary 2 is the step that upgrades Bessel's inequality to :ref[Parseval's identity]{to=fourier.parseval-mean-square}: a continuous function can be approximated uniformly, hence in mean square, by trigonometric polynomials, and the best mean-square approximation of each degree is the partial sum. In quantum mechanics the same corollary is what justifies treating $\{e^{in\theta}/\sqrt{2\pi}\}$ as a complete basis for states on a ring, so that no state escapes the expansion.

**Summability where the series itself diverges.** Fejér's theorem recovers the function from its Fourier coefficients under the weakest hypothesis available — mere continuity at the point — and that is how a Fourier coefficient sequence is inverted in practice when nothing is known about smoothness, for example in reconstructing a crystal potential from measured structure factors. The same averaging idea, applied with a different good kernel, gives Abel summation and the Poisson kernel, which solves the Dirichlet problem in the disc.

**Uniform polynomial approximation.** Corollary 3 is the theoretical licence for polynomial models of calibration curves and equations of state: on any finite interval, a continuous law can be matched to any prescribed tolerance by a polynomial. It says nothing about the degree needed, which is why practical fitting uses Chebyshev or spline bases rather than this construction.
:::
