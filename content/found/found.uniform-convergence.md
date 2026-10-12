---
id: found.uniform-convergence
title: Uniform convergence
kind: theorem
level: core
summary: Uniform convergence is convergence at a rate independent of the point; it is detected by the Cauchy criterion or the Weierstrass M-test, and it is the hypothesis under which a limit of continuous functions is continuous.
prereqs: [found.limits-of-sequences, found.series-convergence-tests, found.absolute-convergence, fourier.dirichlet-convergence]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "§2.3 Uniform Convergence, pp. 35-37: definition and the continuity of a uniform limit (p. 36), Cauchy criterion for uniform convergence (p. 36), majorants and the Weierstrass M test (p. 37)"
    pages: "35-37"
    role: definition of pointwise and uniform convergence; continuity of a uniform limit, with the three-part estimate used to prove it; Cauchy criterion for uniform convergence and the route of its proof; M-test in majorant form
  - work: arfken-2013
    loc: "§1.1, Table 1.1 of values of the Riemann zeta function (p. 17); §1.2, uniform convergence of a series (p. 21), Example 1.2.1 (pp. 21-22), Weierstrass M (majorant) test (pp. 22-23), Example 1.2.2 and Abel's test (p. 23), properties of uniformly convergent series (p. 24)"
    pages: "17, 21-24"
    role: series form of the definition and of the M-test, with the comparison route of the M-test's proof; the independence of absolute and uniform convergence; Abel's test, as stated there for functions on an interval; the tabulated value of $\zeta(2)$ against which the worked example's number is checked
  - work: rhb-2006
    loc: "§12.1 The Dirichlet conditions, pp. 415-416 (the conditions, and convergence of the Fourier series to the function at every point of continuity); §12.4 Discontinuous functions, p. 420 (at a finite discontinuity the series converges to the mean of the two one-sided values)"
    pages: "415-416, 420"
    role: the hypotheses and conclusion of the pointwise convergence theorem for Fourier series, quoted in the heat-equation application to identify the sum of the sine series at $t = 0$
---

:::note{provenance=original}
**What it means.** Pointwise convergence lets each point converge at its own speed, and that is too weak to carry continuity, integrals or derivatives across the limit. Uniform convergence demands one speed for the whole set, which is exactly the strength needed: it is convergence in the supremum distance, so the graphs of $f_n$ eventually lie in a narrow band around the graph of $f$. In practice one proves uniform convergence by bounding the terms of a series by constants and summing the constants, which is the M-test, and one then uses it to justify term-by-term operations.
:::

:::definition[Pointwise and uniform convergence]{provenance=adapted src="ahlfors-1979:§2.3, pp. 35-36; arfken-2013:§1.2, p. 21"}
Let $E$ be a non-empty set and let $f_n, f : E \to \mathbb{C}$. Both notions below are about the index $N$ beyond which the error is smaller than a prescribed $\varepsilon > 0$, and they differ only in whether that index may be chosen after looking at the point.

- **Pointwise:** $f_n \to f$ pointwise on $E$ when $f_n(x) \to f(x)$ holds separately at each $x \in E$; to each $\varepsilon > 0$ and each $x \in E$ there then corresponds an index $N$, which may depend on both, with $\lvert f_n(x) - f(x) \rvert < \varepsilon$ at every $n > N$.
- **Uniform:** $f_n \to f$ uniformly on $E$ when one index serves every point at once: to each $\varepsilon > 0$ there corresponds an index $N$, depending on $\varepsilon$ alone, with
  $$
  \lvert f_n(x) - f(x) \rvert < \varepsilon \qquad \text{for all } n > N \text{ and all } x \in E .
  $$

The compact form of the second condition is $\sup_{x \in E} \lvert f_n(x) - f(x) \rvert \to 0$; for $E = [a,b]$ and continuous functions it is convergence in the maximum metric of $C[a,b]$. Uniform convergence implies pointwise convergence, with the same limit function.

A series $\sum_{n \ge 1} u_n$ of functions on $E$ **converges uniformly** on $E$ if its partial sums $s_n = u_1 + \dots + u_n$ converge uniformly on $E$; writing $S$ for the sum, this says that the tails satisfy $\sup_{x \in E}\lvert S(x) - s_n(x)\rvert \to 0$. Both notions depend on the set $E$: a series may converge uniformly on a subset of $E$ and not on $E$.
:::

:::statement[Cauchy criterion for uniform convergence]{provenance=adapted src="ahlfors-1979:§2.3, p. 36"}
Let $f_n : E \to \mathbb{C}$. Then $(f_n)$ has a uniform limit on $E$ exactly when its terms become uniformly close to each other: for each $\varepsilon > 0$ some index $N$, chosen without reference to the point, satisfies

$$
\lvert f_m(x) - f_n(x) \rvert < \varepsilon \qquad \text{whenever } m, n > N \text{ and } x \in E .
$$

For a series $\sum u_n$ the same criterion reads $\bigl\lvert \sum_{n=m+1}^{m+p} u_n(x) \bigr\rvert < \varepsilon$ for every $m \ge N$, every $p \ge 1$ and every $x \in E$. As in the numerical case, the test names no candidate limit.
:::

:::idea[Cauchy criterion for uniform convergence]{provenance=original}
One direction is the triangle inequality. For the other, the candidate limit is not given, so it has to be built: at each fixed point the values form a Cauchy sequence of numbers, and the completeness of $\mathbb{C}$ supplies their limit. The point of the hypothesis is that the index in it was chosen without reference to the point, so when the limit is taken inside the inequality the index that survives still serves every point at once.
:::

:::proof[Cauchy criterion for uniform convergence]{provenance=adapted src="ahlfors-1979:§2.3, p. 36"}
**Necessity.** Suppose $f_n \to f$ uniformly and let $\varepsilon > 0$. Choose $N$ with $\lvert f_n(x) - f(x)\rvert < \varepsilon/2$ for all $n > N$ and all $x \in E$. For $m, n > N$ and any $x \in E$,

$$
\lvert f_m(x) - f_n(x)\rvert \le \lvert f_m(x) - f(x)\rvert + \lvert f(x) - f_n(x)\rvert < \varepsilon ,
$$

and $N$ depends on $\varepsilon$ alone because the two bounds used did.

**Sufficiency: build the limit.** Suppose the displayed condition holds. Fix $x \in E$. Reading the condition at that single point says that $(f_n(x))_{n}$ is a Cauchy sequence of complex numbers, so by the :ref[Cauchy criterion for numerical sequences]{to=found.limits-of-sequences} it converges; define $f(x)$ to be its limit. This defines a function $f$ on $E$, and it is the only possible uniform limit, since a uniform limit is in particular a pointwise one.

**Sufficiency: the convergence is uniform.** Let $\varepsilon > 0$ and take $N$ from the hypothesis for $\varepsilon/2$, so that $\lvert f_m(x) - f_n(x)\rvert < \varepsilon/2$ whenever $m, n > N$ and $x \in E$. Fix such an $n$ and such an $x$ and let $m \to \infty$: the left-hand side tends to $\lvert f(x) - f_n(x)\rvert$ by continuity of the modulus, and a non-strict inequality survives the limit, so

$$
\lvert f(x) - f_n(x)\rvert \le \varepsilon/2 < \varepsilon \qquad \text{for all } n > N \text{ and all } x \in E .
$$

The index $N$ was produced by the hypothesis from $\varepsilon$ alone, with no reference to $x$, so this is uniform convergence.

**The series form.** Apply what has been proved to the partial sums $s_n$, and use $s_{m+p}(x) - s_m(x) = \sum_{n=m+1}^{m+p}u_n(x)$ together with the reindexing of pairs $(m, p) \leftrightarrow (m, m+p)$ used for :ref[numerical series]{to=found.series-convergence-tests}. $\square$
:::

:::statement[A uniform limit of continuous functions is continuous]{provenance=adapted src="ahlfors-1979:§2.3, p. 36; arfken-2013:§1.2, p. 24, property 1"}
Let $E$ be a subset of $\mathbb{R}$ or of $\mathbb{C}$, let each $f_n : E \to \mathbb{C}$ be continuous at $x_0 \in E$, and let $f_n \to f$ uniformly on $E$. Then $f$ is continuous at $x_0$. Consequently, if every $f_n$ is continuous on $E$ and the convergence is uniform on $E$, the limit $f$ is continuous on $E$.

The same holds for a series: if every $u_n$ is continuous on $E$ and $\sum_{n \ge 1} u_n$ converges uniformly on $E$, its sum is continuous on $E$.
:::

:::idea[A uniform limit of continuous functions is continuous]{provenance=original}
Compare $f(x)$ with $f(x_0)$ through an intermediary: one approximating function $f_n$, at both points. Two of the three resulting errors are the distance from $f_n$ to $f$, and the third is a continuity estimate for $f_n$. Giving each a third of the budget closes the argument. Uniformity is what lets a single $n$ serve at $x_0$ and at every nearby $x$, which matters because the nearby points are only identified afterwards, once $n$ has fixed how close they must be.
:::

:::proof[A uniform limit of continuous functions is continuous]{provenance=adapted src="ahlfors-1979:§2.3, p. 36"}
Let $\varepsilon > 0$.

1. **Choose the approximating index first.** By uniform convergence there is an $n$ with
   $$
   \lvert f_n(y) - f(y)\rvert < \varepsilon/3 \qquad \text{for every } y \in E .
   $$
   Fix that $n$. This is the step that needs uniformity: the bound must hold at $x_0$ and at every point we may later want to use, and those points are not yet known.

2. **Use continuity of that one function.** Since $f_n$ is continuous at $x_0$, there is a $\delta > 0$ such that every $x \in E$ with $\lvert x - x_0\rvert < \delta$ satisfies $\lvert f_n(x) - f_n(x_0)\rvert < \varepsilon/3$.

3. **Add the three errors.** For such an $x$, inserting $f_n(x)$ and $f_n(x_0)$ and applying the triangle inequality twice,
   $$
   \lvert f(x) - f(x_0)\rvert \le \lvert f(x) - f_n(x)\rvert + \lvert f_n(x) - f_n(x_0)\rvert + \lvert f_n(x_0) - f(x_0)\rvert < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon ,
   $$
   the outer terms by step 1 and the middle one by step 2. As $\varepsilon > 0$ was arbitrary, $f$ is continuous at $x_0$. Doing this at every $x_0 \in E$ gives continuity on $E$.

4. **The series form.** Each partial sum $s_n = u_1 + \dots + u_n$ is a finite sum of functions continuous on $E$, hence continuous on $E$, and uniform convergence of the series is uniform convergence of $(s_n)$; so parts 1 to 3 apply to the partial sums and give continuity of the sum. $\square$
:::

:::statement[Weierstrass M-test]{provenance=adapted src="arfken-2013:§1.2, pp. 22-23; ahlfors-1979:§2.3, p. 37"}
Let $u_n : E \to \mathbb{C}$ and suppose there are constants $M_n \ge 0$ with

$$
\lvert u_n(x) \rvert \le M_n \quad \text{for all } x \in E \text{ and all } n, \qquad \sum_{n \ge 1} M_n < \infty .
$$

Then $\sum_{n \ge 1} u_n$ converges uniformly on $E$, and it converges absolutely at every point of $E$. The bounds $M_n$ must not depend on $x$; that is the whole content of the test.
:::

:::idea[Weierstrass M-test]{provenance=original}
The numerical series $\sum M_n$ does all the work. Its Cauchy criterion makes every far-out block of $M_n$ small, and the block of $u_n$ at the same place is smaller in modulus at every point of $E$. The index at which the blocks become small was computed from the numbers $M_n$ alone, so it cannot depend on the point, and that is uniformity.
:::

:::proof[Weierstrass M-test]{provenance=adapted src="arfken-2013:§1.2, pp. 22-23; ahlfors-1979:§2.3, p. 37"}
**Uniform convergence.** Let $\varepsilon > 0$. The series $\sum_{n\ge1}M_n$ converges, so by the :ref[Cauchy criterion for a series]{to=found.series-convergence-tests} there is an index $N$ with

$$
\sum_{n=m+1}^{m+p} M_n < \varepsilon \qquad \text{for all } m \ge N \text{ and } p \ge 1 .
$$

For every $x \in E$ and the same $m$ and $p$, the triangle inequality and the hypothesis $\lvert u_n(x)\rvert \le M_n$ give

$$
\Bigl\lvert \sum_{n=m+1}^{m+p} u_n(x)\Bigr\rvert \ \le \ \sum_{n=m+1}^{m+p} \lvert u_n(x)\rvert \ \le \ \sum_{n=m+1}^{m+p} M_n \ < \ \varepsilon .
$$

The index $N$ came from the numbers $M_n$, which do not depend on $x$; the second inequality is where that independence is used. So the series satisfies the Cauchy criterion for uniform convergence, and by the statement proved above it converges uniformly on $E$.

**Absolute convergence at each point.** Fix $x \in E$. Then $0 \le \lvert u_n(x)\rvert \le M_n$ with $\sum M_n$ convergent, so by the :ref[comparison test]{to=found.series-convergence-tests} the series $\sum_n \lvert u_n(x)\rvert$ converges; that is :ref[absolute convergence]{to=found.absolute-convergence} at $x$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="arfken-2013:§1.2, Example 1.2.1, pp. 21-22, Example 1.2.2 and Abel's test, p. 23; ahlfors-1979:§2.3, p. 37"}
- **Pointwise is strictly weaker than uniform.** On $E = [0,1]$ the functions $f_n(x) = x^n$ converge pointwise to the function that is $0$ on $[0,1)$ and $1$ at $x = 1$. Each $f_n$ is continuous, the limit is not, so the convergence cannot be uniform; indeed $\sup_{x \in [0,1]}\lvert f_n(x) - f(x)\rvert = 1$ for every $n$. Arfken's Example 1.2.1 makes the same point with the series $\sum_{n \ge 0}(1-x)x^n$ on $[0,1]$, whose sum is $1$ on $[0,1)$ and $0$ at $x=1$. Restricting to $[0, \rho]$ with $\rho < 1$ restores uniform convergence, which is why statements about uniform convergence always name the set.
- **The continuity theorem gives no converse.** A pointwise limit of continuous functions can be continuous without the convergence being uniform, so the theorem is a sufficient condition only.
- **Absolute and uniform convergence are independent.** The M-test establishes uniform convergence only for series that also converge absolutely (Ahlfors, p. 37; Arfken, p. 23), so it cannot detect the uniform convergence of $\sum_{n \ge 1} (-1)^n/(n + x^2)$ on $\mathbb{R}$, which converges uniformly but not absolutely (Arfken, Example 1.2.2, p. 23). For such series one uses the Cauchy criterion or Abel's test. Arfken states that test on an interval, not on a general set $E$: if $u_n(x) = a_n f_n(x)$ where $\sum a_n$ converges, where $f_{n+1}(x) \le f_n(x)$ for all $x$ in $[a,b]$ and all $n$, and where $0 \le f_n(x) \le M$ on $[a,b]$ with $M$ independent of $x$, then $\sum u_n$ converges uniformly on $[a,b]$ (Arfken, p. 23). We use it only in that form, on an interval. Conversely a series can converge absolutely at every point without converging uniformly, as the first bullet shows.
- **Two forms of the M-test.** Arfken requires $\lvert u_n(x)\rvert \le M_n$ for all $n$ (p. 22); Ahlfors asks only for $\lvert u_n(x) \rvert \le M \, a_n$ with a single constant $M$ and for all sufficiently large $n$, with $\sum a_n$ convergent (p. 37). The two give the same conclusion, since finitely many terms and a fixed factor affect neither uniformity nor convergence of the comparand.
:::

:::note[Abel's test is quoted, not proved]{provenance=adapted src="arfken-2013:§1.2, p. 23"}
Of the three tests for uniform convergence named above, two are proved in this unit: the Cauchy criterion and the M-test. Abel's test is only quoted. Arfken does not prove it either, referring for the proof to Knopp and to Whittaker and Watson (p. 23), neither of which is among this handbook's sources. It is used once below, in step 4 of the application, and only in the interval form in which the remark states it.
:::

:::example[A series handled completely by the M-test]{provenance=original}
Consider

$$
S(x) = \sum_{n \ge 1} \frac{\cos(nx)}{n^2} , \qquad x \in \mathbb{R} .
$$

**Step 1: uniform convergence.** Since $\lvert\cos\theta\rvert \le 1$ for every real $\theta$,

$$
\left\lvert \frac{\cos(nx)}{n^2}\right\rvert \le \frac{1}{n^2} = M_n \qquad \text{for all } x \in \mathbb{R} ,
$$

and $\sum_{n\ge1}n^{-2}$ is a convergent $p$-series ($p = 2 > 1$). The bounds $M_n$ do not involve $x$, so the M-test applies on the whole of $\mathbb{R}$: the series converges uniformly on $\mathbb{R}$, and absolutely at every point.

**Step 2: the sum is continuous.** Each term is continuous on $\mathbb{R}$ and the convergence is uniform there, so $S$ is continuous on $\mathbb{R}$; it is also $2\pi$-periodic, since every term is.

**Step 3: a uniform error bound.** For $n \ge N+1$ the function $x \mapsto x^{-2}$ is at least $n^{-2}$ on $[n-1, n]$, so $n^{-2} \le \int_{n-1}^{n}x^{-2}\,dx$, and summing,

$$
\sup_{x \in \mathbb{R}} \lvert S(x) - s_N(x)\rvert \ \le \ \sum_{n > N}\frac{1}{n^2} \ \le \ \int_{N}^{\infty}\frac{dx}{x^2} = \frac1N .
$$

So $N = 1000$ terms give the value of $S$ to within $10^{-3}$ simultaneously at every real $x$ — a statement about the whole function, which is the practical difference uniformity makes.

**Step 4: a value to check against.** At $x = \pi$, $\cos(n\pi) = (-1)^n$, so $S(\pi) = \sum_{n\ge1}(-1)^n/n^2$. This series converges absolutely, so its terms may be regrouped freely: splitting $\zeta(2) = \sum_{n \ge 1}n^{-2}$ into even and odd indices gives $\sum_{n \text{ even}}n^{-2} = \tfrac14\zeta(2)$, whence

$$
S(\pi) = \sum_{n \text{ even}} \frac{1}{n^2} - \sum_{n \text{ odd}} \frac{1}{n^2} = 2\sum_{n \text{ even}}\frac{1}{n^2} - \zeta(2) = -\tfrac12 \zeta(2) = -\frac{\pi^2}{12} ,
$$

using at the end the closed form $\zeta(2) = \pi^2/6$, which is the case $s = 2$ of the evaluation of the zeta function at even integers (:ref[Riemann zeta function and Bernoulli numbers]{to=spec.zeta-bernoulli}); it is not proved here, and nothing in the rest of the example depends on it. What the example needs is a number, and Arfken's Table 1.1 (p. 17) supplies one independently of the closed form: $\zeta(2) = 1.64493\,40668$, so $S(\pi) = -\tfrac12\zeta(2) = -0.82246\,70334$, which is indeed $-\pi^2/12$ to the ten digits given. The partial sum $s_{1000}(\pi) = -0.8224665339$ differs from it by $5.0\times10^{-7}$ — inside the bound $1/1000$ of step 3, as it must be.
:::

:::example[Pointwise convergence with a continuous limit, yet not uniform]{provenance=original}
On $E = [0,1]$ let

$$
g_n(x) = \frac{n x}{1 + n^2 x^2} .
$$

**The pointwise limit is $0$.** At $x = 0$ every $g_n(0) = 0$. For fixed $x > 0$, dropping the $1$ in the denominator gives $0 \le g_n(x) \le nx/(n^2x^2) = 1/(nx) \to 0$.

**The supremum does not move.** Differentiating,

$$
g_n'(x) = \frac{n\,(1 - n^2x^2)}{(1+n^2x^2)^2} ,
$$

which is positive for $x < 1/n$ and negative for $x > 1/n$, so $g_n$ increases to a maximum at $x = 1/n \in [0,1]$ and then decreases. The maximum value is

$$
g_n\!\left(\frac1n\right) = \frac{1}{1+1} = \frac12 \qquad \text{for every } n .
$$

Hence $\sup_{x \in [0,1]}\lvert g_n(x) - 0\rvert = \tfrac12$ for every $n$, which does not tend to $0$: the convergence is not uniform. The spike keeps its height and merely slides towards the origin, so no single index can bring the error below $\tfrac12$ everywhere at once.

Note what this does and does not show. The limit $0$ is continuous, and each $g_n$ is continuous, yet the convergence is not uniform — so the continuity theorem above is a sufficient condition and nothing more. Checking $\sup_E \lvert g_n - g\rvert$ is the only reliable test; the continuity of the limit is no evidence either way.
:::

:::application[Fourier solution of the heat equation]{provenance=original}
A thin rod occupying $0 \le x \le \pi$ with both ends held at temperature $0$ and initial profile $f$ has temperature

$$
u(x,t) = \sum_{n \ge 1} b_n\, e^{-n^2 k t}\sin(nx) , \qquad b_n = \frac{2}{\pi}\int_0^{\pi} f(y)\sin(ny)\,dy ,
$$

with $k > 0$ the diffusivity. Writing this down is easy; the analytic content is whether the series means anything, and the M-test answers it.

**The sets of pairs, read inside $\mathbb{C}$.** The theorems above are stated for a set $E$ that is a subset of $\mathbb{R}$ or of $\mathbb{C}$, and the sets used here are sets of pairs. Identify the pair $(x,t)$ with the complex number $x + it$ once and for all, so that every such set is a subset of $\mathbb{C}$ and the theorems apply verbatim. The identification carries the Euclidean distance of the plane to the modulus, $\lvert (x+it) - (x_0 + it_0)\rvert = \sqrt{(x-x_0)^2 + (t-t_0)^2}$, and the modulus is all that the continuity theorem and the Cauchy criterion use; continuity of a function of $(x,t)$ in the ordinary plane sense is therefore the same thing as continuity of the corresponding function on a subset of $\mathbb{C}$. Nothing analytic about $\mathbb{C}$ — no differentiability in the complex sense — is being invoked.

**Uniform convergence away from $t = 0$.** The coefficients are bounded: $\lvert b_n\rvert \le C$ with $C = (2/\pi)\int_0^{\pi}\lvert f\rvert$, which is finite for any integrable initial profile, however rough. Fix $t_0 > 0$ and regard the terms as functions of the pair $(x,t)$ on the set $E = [0,\pi]\times[t_0,\infty)$, read as a subset of $\mathbb{C}$ as just agreed. Then

$$
\bigl\lvert b_n e^{-n^2kt}\sin(nx)\bigr\rvert \ \le \ C e^{-n^2 k t_0} = M_n \qquad \text{on } E ,
$$

and $\sum_n M_n$ converges — by the ratio test, since $M_{n+1}/M_n = e^{-(2n+1)kt_0} \to 0$. So the series converges uniformly on $E$, and since each term is continuous in $(x,t)$, the temperature field is continuous there. This is the smoothing property of diffusion in analytic dress: a discontinuous initial profile gives a continuous temperature at every positive time.

**Why the set must be named.** The constants $M_n$ become $C$, which is not summable, when $t_0 = 0$, so the M-test is silent there. It is silent because the conclusion is false, and the failure is worth locating exactly. For this paragraph strengthen the hypothesis on the initial profile: let $f$ satisfy the Dirichlet conditions on $[0,\pi]$ — at most finitely many discontinuities, all of them finite jumps, at most finitely many maxima and minima, and $\int_0^{\pi}\lvert f\rvert < \infty$ — and let it jump at an interior point $x_\ast$, so that the one-sided values $f(x_\ast^-)$ and $f(x_\ast^+)$ exist and differ. Integrability alone, the only assumption used above, does not suffice for what follows: the pointwise convergence theorem quoted in step 1 asks for the Dirichlet conditions, and with mere integrability nothing in this handbook identifies the sum of the sine series at $t = 0$, or even guarantees that it converges there.

1. **What the series does at $t = 0$.** Setting $t = 0$ leaves $\sum_n b_n \sin(nx)$, which is the Fourier series of the odd $2\pi$-periodic extension of $f$; that extension inherits the Dirichlet conditions. Under those conditions the series converges at every point, to the value of the function where it is continuous and to the mean of the two one-sided values at a jump (Riley, Hobson and Bence, §12.1, p. 416 and §12.4, p. 420; see :ref[Pointwise convergence of Fourier series]{to=fourier.dirichlet-convergence}). Write $\sigma$ for its sum. Because $f$ has only finitely many discontinuities, $x_\ast$ has points of continuity arbitrarily close on both sides, and at those points $\sigma = f$; hence $\sigma(x) \to f(x_\ast^-)$ as $x \uparrow x_\ast$ and $\sigma(x) \to f(x_\ast^+)$ as $x \downarrow x_\ast$. The two limits differ, so $\sigma$ is discontinuous at $x_\ast$ whatever value it takes there.

2. **Sets that contain a piece of $t = 0$ around the jump.** Suppose $E'$ contains $J \times \{0\}$ for some interval $J$ around $x_\ast$. Each truncation $u_N(x,t) = \sum_{n \le N} b_n e^{-n^2 k t}\sin(nx)$ is a finite sum of functions continuous on the whole plane, that is on $\mathbb{C}$ under the identification above, so if the series converged uniformly on $E'$ the continuity theorem would make $u$ continuous on $E'$, hence continuous in $x$ along $J \times \{0\}$ — where $u(x,0) = \sigma(x)$, discontinuous at $x_\ast$ by step 1. So it does not. One can also see how badly it fails, with no appeal to the theorem: $u_N(\cdot,0)$ is continuous at $x_\ast$, so its values just either side of $x_\ast$ are close to the single number $u_N(x_\ast,0)$, while $\sigma$ is close to $f(x_\ast^-)$ on one side and to $f(x_\ast^+)$ on the other, and one number cannot be nearer than half the gap to both. Hence
   $$
   \sup_{x \in J}\bigl\lvert \sigma(x) - u_N(x,0)\bigr\rvert \ \ge \ \tfrac12 \bigl\lvert f(x_\ast^+) - f(x_\ast^-)\bigr\rvert \qquad \text{for every } N ,
   $$
   a floor that no number of terms lowers. For the profile $f = 1$ on $(\pi/4, 3\pi/4)$ and $f = 0$ outside it, whose two jumps have size $1$, the floor is $\tfrac12$.

3. **Sets that only approach $t = 0$.** The case one actually meets is $E' = [0,\pi] \times (0,T]$, which contains no point with $t = 0$. There $u$ is continuous, so the continuity theorem by itself yields no contradiction; one step bridges the gap. Suppose the series converged uniformly on $E'$ and let $\varepsilon > 0$. By the Cauchy criterion there is an $N_0$ with $\lvert u_M - u_N\rvert < \varepsilon/2$ on $E'$ whenever $M, N > N_0$. Each difference $u_M - u_N$ is continuous on the whole plane and $E'$ is dense in its closure $[0,\pi]\times[0,T]$, so approaching a point of the closure along points of $E'$ carries the bound across: $\lvert u_M - u_N \rvert \le \varepsilon/2 < \varepsilon$ on $[0,\pi]\times[0,T]$. The truncations are therefore uniformly Cauchy, hence uniformly convergent, on $[0,\pi]\times[0,T]$ — which step 2 forbids, since that set contains $[0,\pi]\times\{0\}$ and so an interval around $x_\ast$ at $t = 0$.

4. **Reaching $t = 0$ is not by itself the obstruction.** The closure must contain a segment of $t = 0$ *across the jump*; merely meeting $t = 0$ is not enough. At the end of the rod, on $E' = \{0\}\times[0,\infty)$, every term vanishes because $\sin 0 = 0$, so the convergence is uniform there with zero error at every $N$, although the closure meets $t = 0$. The same holds on any single vertical segment $\{x_0\}\times[0,T]$, for any $x_0 \in [0,\pi]$ and any $T > 0$: put $a_n = b_n \sin(n x_0)$ and $\varphi_n(t) = e^{-n^2 k t}$, so that $\sum a_n$ converges by step 1, $\varphi_{n+1}(t) \le \varphi_n(t)$ for every $t \in [0,T]$, and $0 \le \varphi_n(t) \le 1$ there — the three hypotheses of Abel's test exactly as the remark above states them, on the interval $[0,T]$ in the role of $[a,b]$ and with $\varphi_n$ in the role of its $f_n$. The test then gives uniform convergence in $t$ on $[0,T]$, an interval that includes the endpoint $t = 0$. Non-uniformity is thus a statement about letting $x$ cross the jump while $t \downarrow 0$, not about small $t$ alone.

Uniformity on $t \ge t_0 > 0$, and not on $t \ge 0$, is therefore the correct statement, and the deterioration as $t_0 \downarrow 0$ is why a truncated series needs more and more terms as one looks closer to the initial instant.

**A usable error bound.** Return to the set $E = [0,\pi]\times[t_0,\infty)$ and the truncation $u_N$. For $n > N$ we have $n^2 \ge n(N+1)$, so

$$
\sup_{(x,t)\in E}\lvert u(x,t) - u_N(x,t)\rvert \ \le \ C\sum_{n > N} e^{-n^2 kt_0} \ \le \ C \sum_{n>N}e^{-n(N+1)kt_0} = C\,\frac{e^{-(N+1)^2kt_0}}{1 - e^{-(N+1)kt_0}} ,
$$

summing the geometric series at the end. With $k = 1$, $t_0 = 0.05$ and $N = 20$ this is $4.1\times10^{-10}\,C$, against a true tail of $3.0\times10^{-10}\,C$: twenty terms suffice at that time, for all $x$ at once. The same argument — not the same bound, since the extra factors change the geometric sum — applied to the series of $x$- or $t$-derivatives (whose terms carry extra factors $n$ or $n^2$ and so are still dominated by summable constants), is what licenses differentiating the series term by term and confirming that $u$ solves $u_t = k u_{xx}$ — see :ref[Integrating and differentiating series term by term]{to=found.termwise-operations}.
:::
