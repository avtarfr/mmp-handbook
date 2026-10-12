---
id: fourier.smoothness-decay
title: Smoothness and decay of Fourier coefficients
kind: theorem
level: core
summary: Differentiating a periodic function multiplies its Fourier coefficients by $in$, so each extra continuous derivative buys one more power of decay; this makes term-by-term integration of a Fourier series always legitimate, while term-by-term differentiation is legitimate only when the differentiated series still converges uniformly.
prereqs: [fourier.fourier-series, fourier.dirichlet-convergence, fourier.parseval-mean-square, found.termwise-operations, found.uniform-convergence]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§2.3, pp. 130–134: the classes $C^k(S)$ and $D(S)$, pp. 130–131; Thm 2.3.1 and its proof by repeated integration by parts, p. 131; Examples 2 and 3, p. 132; the theorem that a $C^1(S)$ function has a uniformly convergent Fourier series, with the relation $d_m = i m c_m$ and the Schwarz-inequality estimate, p. 134; the Riemann-Lebesgue lemma, Remark 1, p. 130"
    pages: "130-134"
    role: the definitions of the smoothness classes; the statement and proof route of the decay theorem $m^p c_m \\to 0$ for $f \\in C^p(S)$; the relation between the coefficients of $f$ and of $f'$; the proof that a continuously differentiable periodic function has an absolutely and uniformly convergent Fourier series; the worked coefficient behaviour of $|x|$ and of $\\cos a x$
  - work: stein-shakarchi-2003
    loc: "Ch. 2, §2, pp. 42–44: the $O$ notation, p. 42; Cor. 2.4 and its proof by integrating by parts twice, pp. 42–43; the class $C^k$, p. 44"
    pages: "42-44"
    role: the $O$-notation convention; the statement that a twice continuously differentiable function on the circle has coefficients $O(1/|n|^2)$ and therefore an absolutely and uniformly convergent Fourier series; the two-fold integration by parts with the boundary terms killed by periodicity
  - work: strauss-2008
    loc: "§5.4, p. 130 (term-by-term differentiation of the sine series of the constant 1 fails, while term-by-term integration is always valid, Exercise 5.4.11); §5.5, pp. 141–142, the proof of uniform convergence with eqs. (15)–(16) relating the coefficients of $f$ and $f'$ and the Schwarz-inequality estimate"
    pages: "130, 141-142"
    role: the counterexample to term-by-term differentiation and the contrasting statement that term-by-term integration is always valid; the real-coefficient form of the derivative relation and the absolute-convergence estimate; the remark that the argument survives when $f'$ is only piecewise continuous
  - work: arfken-2013
    loc: "§19.1, Exercise 19.1.12, p. 947 (integrating the Fourier expansion of $f(x) = x$ on $-\\pi < x < \\pi$ term by term)"
    pages: "947"
    role: term-by-term integration of a Fourier series used to sum a numerical series, as a worked instance of the integration theorem
---

:::definition[Smoothness classes on the circle, and $O$ notation]{provenance=adapted src="stakgold-holst-2011:§2.3, pp. 130–131; stein-shakarchi-2003:Ch. 2, §2, pp. 42 and 44"}
Write $S$ for the unit circle and identify a function on $S$ with a $2\pi$-periodic function on $\mathbb{R}$. Following :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, pp. 130–131"}:

- $f \in C^k(S)$ means $f$ is continuous and has continuous derivatives of every order up to and including $k$ *on the circle* — equivalently, the periodic extension of $f$ has $k$ continuous derivatives on all of $\mathbb{R}$, so that $f^{(j)}(-\pi) = f^{(j)}(\pi)$ for $0 \le j \le k$. In particular $C^0(S) = C(S)$ is the class of continuous $2\pi$-periodic functions. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 2, §2, p. 44"} write $C^k$ for the same class.
- $f \in D(S)$ (*$f$ obeys Dirichlet conditions*) means $f$ is piecewise continuous and the circle admits a finite subdivision on each of whose subintervals $f$ has a continuous derivative, with one-sided derivatives existing at the subdivision points. Stakgold and Holst point out that $D$ and $C$ are not nested: $D$ admits simple jumps, which $C$ does not, while $D$ excludes continuous functions with a cusp such as $\sqrt{\lvert x\rvert}$.

*Integrable on the circle* means Riemann integrable on $[-\pi,\pi]$ and extended $2\pi$-periodically; such a function is in particular bounded. Fourier coefficients are $c_m = \hat f(m) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(\theta)e^{-im\theta}d\theta$ as in :ref[the Fourier series]{to=fourier.fourier-series}; in real form $f \sim \frac{a_0}{2} + \sum_{m \ge 1}(a_m\cos m\theta + b_m \sin m\theta)$ with $a_m = \hat f(m) + \hat f(-m)$ and $b_m = i\bigl(\hat f(m) - \hat f(-m)\bigr)$.

Finally, $g(m) = O\bigl(h(m)\bigr)$ as $\lvert m\rvert \to \infty$ means that $\lvert g(m)\rvert \le C \lvert h(m)\rvert$ for some constant $C$ and all large $\lvert m\rvert$; $g(m) = o\bigl(h(m)\bigr)$ means $g(m)/h(m) \to 0$, which is the stronger statement.
:::

:::statement[Differentiation multiplies the coefficient by $im$]{provenance=adapted src="stakgold-holst-2011:§2.3, p. 134; strauss-2008:§5.5, eqs. (15)–(16), p. 141"}
Let $f \in C^1(S)$ and let $c_m$ and $d_m$ be the Fourier coefficients of $f$ and of $f'$. Then

$$
d_m = i\,m\,c_m \qquad (m \in \mathbb{Z}),
\qquad\text{equivalently}\qquad
c_m = \frac{d_m}{i m}\ \ (m \ne 0) .
$$

In the real coefficients of :cite[Strauss]{work=strauss-2008 loc="§5.5, eqs. (15)–(16), p. 141"}, writing $A_m, B_m$ for those of $f$ and $A_m', B_m'$ for those of $f'$: $A_m = -B_m'/m$ and $B_m = A_m'/m$. The Fourier series of $f'$ is therefore the term-by-term derivative of the Fourier series of $f$ — as a statement about *coefficients*; whether the differentiated series converges to $f'$ is a separate question, settled below.
:::

:::statement[Smoothness forces decay]{provenance=adapted src="stakgold-holst-2011:§2.3, Thm 2.3.1, p. 131 and the theorem on p. 134; stein-shakarchi-2003:Ch. 2, Cor. 2.4, pp. 42–43"}
Let $p \ge 1$ be an integer.

1. **Decay.** If $f \in C^p(S)$ then $\displaystyle \lim_{\lvert m\rvert \to \infty} m^p c_m = 0$, i.e. $c_m = o\bigl(\lvert m\rvert^{-p}\bigr)$.
2. **One derivative already gives absolute convergence.** If $f \in C^1(S)$ then $\sum_{m \in \mathbb{Z}} \lvert c_m\rvert < \infty$, and the Fourier series of $f$ converges to $f$ absolutely and uniformly on $\mathbb{R}$. :cite[Strauss]{work=strauss-2008 loc="§5.5, p. 142"} notes that the same proof works when $f$ is continuous and $f'$ is merely piecewise continuous, the example being $f(x) = \lvert x\rvert$.
3. **The $C^2$ form.** If $f$ is twice continuously differentiable on the circle then $\hat f(m) = O\bigl(1/\lvert m\rvert^{2}\bigr)$, and the Fourier series of $f$ converges absolutely and uniformly to $f$.

Parts 1 and 3 are two readings of the same computation: with $p = 2$, part 1 gives the formally stronger $o(\lvert m\rvert^{-2})$, while the route of :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 2, Cor. 2.4, pp. 42–43"} gives the explicit constant $2\pi \lvert m\rvert^2 \lvert \hat f(m)\rvert \le \int_{-\pi}^{\pi}\lvert f''\rvert$ (they write the integral over $[0,2\pi]$, which is the same by periodicity).
:::

:::statement[Term-by-term integration and term-by-term differentiation]{provenance=adapted src="strauss-2008:§5.4, p. 130 and Exercise 5.4.11; arfken-2013:Exercise 19.1.12, p. 947"}
Let $f$ be integrable on the circle, with coefficients $c_m$.

1. **Integration is always legitimate.** For every $x \in [-\pi,\pi]$,
   $$
   \int_{-\pi}^{x} f(t)\,dt \;=\; c_0\,(x+\pi) \;+\; \sum_{m \ne 0} \frac{c_m}{i m}\Bigl(e^{imx} - (-1)^m\Bigr) ,
   $$
   and the series on the right converges absolutely and uniformly in $x$. The right-hand side is exactly what term-by-term integration of $\sum_m c_m e^{imt}$ from $-\pi$ to $x$ produces — *even when that series itself diverges*. It is the precise form of the remark of :cite[Strauss]{work=strauss-2008 loc="§5.4, p. 130 and Exercise 5.4.11"}, who calls term-by-term integration "not delicate" and usually valid, in contrast with differentiation, which he calls delicate.
2. **Differentiation is not.** Term-by-term differentiation of a convergent Fourier series may produce a divergent series. Strauss's example: the Fourier sine series of the constant $f \equiv 1$ on $(0,\pi)$ is $\sum_{n\ \mathrm{odd}}\frac{4}{n\pi}\sin nx$, which converges pointwise to $1$ there; differentiating term by term gives $\frac{4}{\pi}\sum_{n\ \mathrm{odd}}\cos nx$, whose terms do not tend to $0$, so the $n$th-term test denies convergence — this is how :cite[Strauss]{work=strauss-2008 loc="§5.4, p. 130"} dismisses it — while $f' \equiv 0$. The single exception on $(0,\pi)$ is $x = \pi/2$: there $\cos nx = 0$ for every odd $n$, so every term vanishes and the series converges, to $0$. Everywhere else in $(0,\pi)$ the terms fail to tend to $0$ and the series diverges, so the differentiated series does not represent $f'$ on the interval.
3. **When it is.** If $f \in C^2(S)$ then the differentiated series $\sum_m i m\, c_m e^{im\theta}$ converges absolutely and uniformly, and its sum is $f'$.
:::

:::statement[The converse: decay forces smoothness]{provenance=original}
Let $k \ge 0$ be an integer and let $(c_m)_{m \in \mathbb{Z}}$ be complex numbers with

$$
\sum_{m \in \mathbb{Z}} \lvert m \rvert^{k}\,\lvert c_m\rvert < \infty .
$$

Then $g(\theta) = \sum_{m} c_m e^{im\theta}$ converges absolutely and uniformly, $g \in C^k(S)$, the coefficients of $g$ are exactly the $c_m$, and for every $0 \le j \le k$

$$
g^{(j)}(\theta) = \sum_{m \in \mathbb{Z}} (im)^j c_m e^{im\theta} ,
$$

each of these series converging absolutely and uniformly. Together with part 1 of the decay theorem this gives a two-sided dictionary: coefficients decaying faster than every power correspond to $f \in C^\infty(S)$.
:::

:::idea{provenance=original}
One integration by parts is the whole story. Moving a derivative off $f$ and onto $e^{-im\theta}$ produces a factor $im$, and the boundary term it leaves behind is killed by periodicity — not by smallness, but by the fact that the two endpoints of a circle are the same point. So $p$ derivatives convert $c_m$ into $\widehat{f^{(p)}}(m)/(im)^p$, and the Riemann-Lebesgue lemma says the numerator still tends to zero. For the converse one reads the same identity backwards: enough decay makes the differentiated series converge uniformly, and uniform convergence of a differentiated series is precisely the hypothesis under which differentiation may be taken inside a sum. Integration behaves better than differentiation because it divides by $m$ rather than multiplying, and dividing by $m$ turns the square-summability that Bessel's inequality gives for free into absolute summability, by the Cauchy-Schwarz inequality against $\sum m^{-2} < \infty$.
:::

:::proof[Differentiation multiplies the coefficient by $im$, and smoothness forces decay]{provenance=adapted src="stakgold-holst-2011:§2.3, Thm 2.3.1, p. 131 and the theorem on p. 134; stein-shakarchi-2003:Ch. 2, Cor. 2.4, pp. 42–43"}
**Step 1: one integration by parts.** Let $f \in C^1(S)$ and $m \in \mathbb{Z}$. Then $f$ and $e^{-im\theta}$ are both continuously differentiable on $[-\pi,\pi]$, so

$$
d_m = \frac{1}{2\pi}\int_{-\pi}^{\pi} f'(\theta)\,e^{-im\theta}\,d\theta
= \frac{1}{2\pi}\Bigl[f(\theta)e^{-im\theta}\Bigr]_{-\pi}^{\pi} + \frac{im}{2\pi}\int_{-\pi}^{\pi} f(\theta)e^{-im\theta}\,d\theta .
$$

The bracket is $f(\pi)e^{-im\pi} - f(-\pi)e^{im\pi} = (-1)^m\bigl(f(\pi)-f(-\pi)\bigr) = 0$, because $f$ is continuous on the circle. Hence $d_m = i m\,c_m$. **This is the step, and the only step, at which periodicity is used.** The real forms follow by taking $a_m = c_m + c_{-m}$ and $b_m = i(c_m - c_{-m})$.

**Step 2: part 1, by iterating.** Let $f \in C^p(S)$. Then $f, f', \dots, f^{(p-1)}$ all belong to $C^1(S)$, so step 1 applies $p$ times in succession and gives

$$
\widehat{f^{(p)}}(m) = (im)^p\,c_m , \qquad\text{that is}\qquad m^p c_m = \frac{\widehat{f^{(p)}}(m)}{i^{\,p}} .
$$

Now $f^{(p)}$ is continuous on the circle, hence integrable, so :ref[the Riemann-Lebesgue lemma]{to=fourier.parseval-mean-square} gives $\widehat{f^{(p)}}(m) \to 0$ as $\lvert m\rvert \to \infty$. Taking absolute values, $\lvert m^p c_m\rvert = \lvert\widehat{f^{(p)}}(m)\rvert \to 0$.

**Step 3: part 2, by Cauchy-Schwarz.** Let $f \in C^1(S)$ and let $d_m = i m c_m$ be the coefficients of $f'$. Splitting off $m = 0$ and inserting $1 = \frac{1}{\lvert m\rvert}\cdot\lvert m\rvert$,

$$
\sum_{m \in \mathbb{Z}} \lvert c_m\rvert
= \lvert c_0\rvert + \sum_{m \ne 0}\frac{\lvert d_m\rvert}{\lvert m\rvert}
\;\le\; \lvert c_0 \rvert + \Bigl(\sum_{m \ne 0}\frac{1}{m^2}\Bigr)^{1/2}\Bigl(\sum_{m \ne 0}\lvert d_m\rvert^2\Bigr)^{1/2} ,
$$

by the Cauchy-Schwarz inequality for sequences. The first factor is $\sqrt{\pi^2/3}$, finite; the second is finite because $f'$ is continuous, hence square integrable, so :ref[Bessel's inequality]{to=fourier.parseval-mean-square} bounds $\sum_m \lvert d_m\rvert^2$ by $\lVert f'\rVert^2$. Therefore $\sum_m \lvert c_m\rvert < \infty$.

Consequently $\lvert c_m e^{im\theta}\rvert = \lvert c_m\rvert$ is a summable majorant independent of $\theta$, so the Fourier series converges absolutely and uniformly by the Weierstrass $M$-test; see :ref[uniform convergence]{to=found.uniform-convergence}. Its sum is continuous, and it agrees with $f$ at every point by :ref[the pointwise convergence theorem]{to=fourier.dirichlet-convergence}, whose hypotheses a $C^1(S)$ function certainly meets.

**Step 4: part 3, with the explicit constant.** Let $f \in C^2(S)$ and $m \ne 0$. Applying step 1 twice,

$$
2\pi\,\lvert m\rvert^2\,\lvert \hat f(m)\rvert = \Bigl\lvert \int_{-\pi}^{\pi} f''(\theta)e^{-im\theta}\,d\theta\Bigr\rvert \le \int_{-\pi}^{\pi}\lvert f''(\theta)\rvert\,d\theta = C ,
$$

a constant independent of $m$ because $f''$ is continuous on a compact set. Hence $\hat f(m) = O(1/\lvert m\rvert^2)$, and since $\sum_{m\ne0} \lvert m\rvert^{-2} < \infty$ the series converges absolutely and uniformly, again with sum $f$. $\square$
:::

:::proof[Term-by-term integration, and when differentiation is allowed]{provenance=adapted src="strauss-2008:§5.4, p. 130 and Exercise 5.4.11"}
Let $f$ be integrable on the circle, with coefficients $c_m$, and define

$$
F(x) = \int_{-\pi}^{x}\bigl(f(t) - c_0\bigr)\,dt , \qquad -\pi \le x \le \pi .
$$

**Step 1: $F$ is continuous on the circle.** As an indefinite integral of an integrable function, $F$ is continuous (indeed Lipschitz, since $f$ is bounded). At the endpoints, $F(-\pi) = 0$ and

$$
F(\pi) = \int_{-\pi}^{\pi} f - 2\pi c_0 = 2\pi c_0 - 2\pi c_0 = 0 ,
$$

by the definition of $c_0$. **Subtracting $c_0$ is exactly what makes $F$ periodic**; without it $F$ would increase by $2\pi c_0$ over one period.

**Step 2: the coefficients of $F$.** Fix $m \ne 0$ and write $g = f - c_0$, so $F(x) = \int_{-\pi}^{x} g$. We want to integrate by parts, moving the derivative off $F$; but $F$ need not be differentiable everywhere, since $g$ is only Riemann integrable. What licenses the step is not a null-set argument about where $F' = g$ — it is the fact that $F$ is an **indefinite Riemann integral**, which lets us exchange the order of integration over the triangle $\{-\pi \le t \le x \le \pi\}$:

$$
\int_{-\pi}^{\pi} F(x)\,e^{-imx}\,dx
= \int_{-\pi}^{\pi}\!\!\int_{-\pi}^{x} g(t)\,e^{-imx}\,dt\,dx
= \int_{-\pi}^{\pi} g(t)\Bigl(\int_{t}^{\pi} e^{-imx}\,dx\Bigr) dt
= \int_{-\pi}^{\pi} g(t)\,\frac{e^{-imt} - e^{-im\pi}}{im}\,dt .
$$

(The exchange is Fubini's theorem for the Riemann integral of the bounded function $g(t)\,e^{-imx}\,\mathbf{1}_{t \le x}$ on the square; it is the integrated form of integration by parts, and it needs nothing of $F$ beyond its definition.) The term $e^{-im\pi}\int_{-\pi}^{\pi}g$ vanishes because $\int_{-\pi}^{\pi} g = F(\pi) = 0$ by step 1 — this is where periodicity of $F$ enters. Dividing by $2\pi$ and noting that the constant $c_0$ inside $g$ contributes nothing for $m \ne 0$,

$$
\hat F(m) = \frac{1}{im}\cdot\frac{1}{2\pi}\int_{-\pi}^{\pi}\bigl(f(t)-c_0\bigr)e^{-imt}\,dt = \frac{c_m}{im} .
$$

**Step 3: the series for $F$ converges absolutely.** As in step 3 of the previous proof, $f$ is bounded, hence square integrable, so Bessel's inequality gives $\sum_m \lvert c_m\rvert^2 < \infty$, and Cauchy-Schwarz gives

$$
\sum_{m \ne 0}\lvert \hat F(m)\rvert = \sum_{m\ne0}\frac{\lvert c_m\rvert}{\lvert m\rvert} \le \Bigl(\sum_{m\ne0}\frac{1}{m^2}\Bigr)^{1/2}\Bigl(\sum_{m}\lvert c_m\rvert^2\Bigr)^{1/2} < \infty .
$$

So $\sum_m \hat F(m)e^{imx}$ converges absolutely and uniformly, to a continuous function. Its coefficients are the $\hat F(m)$ (uniform convergence permits integrating term by term against $e^{-imx}$, by :ref[term-by-term integration of a uniformly convergent series]{to=found.termwise-operations}), which are also the coefficients of the continuous function $F$. By the uniqueness corollary of :ref[Fejér's theorem]{to=fourier.fejer-theorem} the two continuous functions coincide:

$$
F(x) = \hat F(0) + \sum_{m \ne 0}\frac{c_m}{im}e^{imx} \qquad\text{for every } x .
$$

**Step 4: fix the constant and restore $c_0$.** Put $x = -\pi$, where $F(-\pi) = 0$ and $e^{-im\pi} = (-1)^m$; this gives $\hat F(0) = -\sum_{m\ne0}\frac{c_m}{im}(-1)^m$. Substituting back and adding $\int_{-\pi}^{x}c_0\,dt = c_0(x+\pi)$ to both sides gives the stated formula. Term-by-term integration of the original series produces $\int_{-\pi}^{x}c_m e^{imt}dt = \frac{c_m}{im}\bigl(e^{imx} - (-1)^m\bigr)$ for $m \ne 0$ and $c_0(x+\pi)$ for $m = 0$, which is the same expression.

**Step 5: part 3, when differentiation *is* allowed.** Let $f \in C^2(S)$. Then $f' \in C^1(S)$, and by step 1 of the previous proof the coefficients of $f'$ are $d_m = i m\,c_m$. Applying part 2 of the decay theorem to $f'$ in place of $f$ gives $\sum_m \lvert d_m\rvert = \sum_m \lvert m\rvert\lvert c_m\rvert < \infty$, so the differentiated series $\sum_m i m\,c_m e^{im\theta}$ is the Fourier series of $f'$ and converges to $f'$ absolutely and uniformly. Note which hypothesis did the work: $f \in C^1(S)$ alone would give the coefficient identity but no convergence, which is exactly the gap Strauss's example exploits. $\square$
:::

:::proof[The converse]{provenance=original}
Assume $\sum_m \lvert m\rvert^k \lvert c_m\rvert < \infty$.

**Step 1: every series up to order $k$ converges uniformly.** For $m \ne 0$ and $0 \le j \le k$ we have $\lvert m\rvert^{j} \le \lvert m\rvert^{k}$ when $\lvert m \rvert \ge 1$, so

$$
\sum_{m}\bigl\lvert (im)^j c_m e^{im\theta}\bigr\rvert = \sum_m \lvert m\rvert^j \lvert c_m\rvert \le \lvert c_0\rvert + \sum_{m \ne 0}\lvert m\rvert^{k}\lvert c_m\rvert < \infty ,
$$

a bound independent of $\theta$. By the Weierstrass $M$-test each of the $k+1$ series $G_j(\theta) = \sum_m (im)^j c_m e^{im\theta}$, $0 \le j \le k$, converges absolutely and uniformly on $\mathbb{R}$, and each $G_j$ is continuous and $2\pi$-periodic as a uniform limit of such functions.

**Step 2: the sums differentiate into one another.** Fix $0 \le j < k$. The series for $G_j$ converges uniformly, its terms are differentiable, and the series of their derivatives is the series for $G_{j+1}$, which also converges uniformly by step 1. Those are exactly the hypotheses of :ref[term-by-term differentiation]{to=found.termwise-operations}, so $G_j$ is differentiable with $G_j' = G_{j+1}$.

**Step 3: conclusion.** Writing $g = G_0$ and applying step 2 for $j = 0, 1, \dots, k-1$ in turn gives $g^{(j)} = G_j$ for $0 \le j \le k$. Each $G_j$ is continuous and $2\pi$-periodic, so $g \in C^k(S)$ and the displayed formula for $g^{(j)}$ holds.

**Step 4: the coefficients are the $c_m$.** The series for $g$ converges uniformly, so it may be integrated against the bounded function $e^{-in\theta}$ term by term (:ref[term-by-term integration]{to=found.termwise-operations}); orthonormality leaves only the term $m = n$, giving $\hat g(n) = c_n$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Periodicity, not smoothness, kills the boundary term.** Step 1 of the first proof needs $f(\pi) = f(-\pi)$, nothing more. A function that is as smooth as one likes on the closed interval but does not match at the ends gets no benefit: $f(\theta) = \theta$ on $(-\pi,\pi)$ is real-analytic there, yet its periodic extension jumps, and $\hat f(m) = i(-1)^m/m$ decays only like $1/\lvert m\rvert$. This is why the statements are about $C^k(S)$, the circle, and not about $C^k[-\pi,\pi]$.
- **One jump costs exactly one power.** A function in $D(S)$ with a simple jump has coefficients of order $1/\lvert m\rvert$ and no better — this is :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, Thm 2.3.2 and its proof, p. 131"}, whose proof isolates the jump term $e^{-im\xi}\bigl(f(\xi^+)-f(\xi^-)\bigr)$ and observes that it has modulus independent of $m$, so $m c_m$ stays bounded while $m^{1+\varepsilon}c_m$ does not. Hence $\sum\lvert c_m\rvert$ diverges and the convergence cannot be uniform near the jump; that is the mechanism behind :ref[the Gibbs phenomenon]{to=fourier.gibbs-phenomenon}. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, Example 2 and Example 3, p. 132"} tabulate the next two cases: $\lvert x\rvert$, continuous with a derivative in $D$, has $a_m$ of order $1/m^2$; and the periodised $\cos a x$ with $a \notin \mathbb{Z}$, continuous with a derivative jumping at odd multiples of $\pi$, has $m^2 a_m$ bounded.
- **Decay alone, without periodicity of the derivatives, proves nothing about differentiability.** The converse statement needs the full hypothesis $\sum \lvert m\rvert^k\lvert c_m\rvert < \infty$; square-summability of $m^k c_m$ is not enough, because the $M$-test in step 1 needs an $\ell^1$ bound and uniform convergence of the differentiated series is what :ref[term-by-term differentiation]{to=found.termwise-operations} requires.
- **The gap between the two directions is one power.** Part 1 gives $f \in C^p(S) \Rightarrow c_m = o(\lvert m\rvert^{-p})$, while the converse needs $\sum\lvert m\rvert^{k}\lvert c_m\rvert < \infty$, which for a power law means $c_m = O(\lvert m\rvert^{-k-1-\varepsilon})$. So the dictionary is not exact at any finite order; it becomes exact only in the limit, where both sides read "faster than every power" versus $C^\infty(S)$.
- **Term-by-term differentiation fails for the reason the $M$-test fails.** In Strauss's example the function $1$ on $(0,\pi)$ is extended oddly, which creates jumps at $0$ and at $\pi$; the coefficients are of order $1/n$, so multiplying by $n$ leaves coefficients that do not tend to zero. Nothing is wrong with the *coefficient* identity $d_m = imc_m$ — it is the hypothesis $f \in C^1(S)$ that fails, so there is no $f'$ on the circle whose coefficients those would be.
- **Term-by-term integration never fails** because dividing by $m$ can only help, and because the square-summability needed for the Cauchy-Schwarz step is free from Bessel's inequality for any bounded $f$. Note what the conclusion is not: the integrated series is not in general a Fourier series, since the term $c_0(x+\pi)$ is not periodic. It becomes one exactly when $c_0 = 0$.
:::

:::method[Reading and using the decay rate]{provenance=original}
1. **Classify the function on the circle, not on the interval.** Check the endpoint matching $f^{(j)}(-\pi) = f^{(j)}(\pi)$ for $j = 0, 1, 2, \dots$ and stop at the first $j$ that fails. If matching holds up to $j = p$ but not $j = p+1$, expect $c_m$ of order $\lvert m \rvert^{-(p+2)}$ in the generic case with only $o(\lvert m\rvert^{-p})$ guaranteed by the theorem.
2. **Predict the convergence mode.** $\sum\lvert c_m\rvert < \infty$ (guaranteed from $f \in C^1(S)$) means absolute and uniform convergence; a jump means $c_m \sim 1/m$, no absolute convergence, and overshoot near the jump.
3. **To differentiate a Fourier series term by term,** first multiply the coefficients by $im$ and test the new series for uniform convergence (the $M$-test on $\sum\lvert m c_m\rvert$ is usually decisive). If it converges uniformly, the differentiated series is $f'$. If it does not, do not differentiate: either work with the integrated form instead, or move to the distributional derivative of :ref[distributions]{to=fourier.distributions}, where differentiation is always permitted.
4. **To integrate a Fourier series term by term,** just do it; no hypothesis beyond integrability of $f$ is needed. Remember to treat $c_0$ separately: it contributes a linear term, not a periodic one. This is the trick :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 19.1.12, p. 947"} use to turn the series for $f(x) = x$ into a value for $\sum_{n\ge1}(-1)^{n+1}/n^2$.
5. **To estimate a truncation error,** combine the decay rate with :ref[Parseval's identity]{to=fourier.parseval-mean-square}: if $\lvert c_m\rvert \le A\lvert m\rvert^{-q}$ then for $q > 1/2$ the mean-square error of the $N$-term partial sum obeys $\lVert f - S_N(f)\rVert^2 = \sum_{\lvert m\rvert > N}\lvert c_m\rvert^2 \le 2A^2\int_N^{\infty} t^{-2q}dt$, that is $\lVert f - S_N(f)\rVert \le \bigl(2A^2/(2q-1)\bigr)^{1/2} N^{-q+1/2}$, so one extra derivative of smoothness buys one extra power of $N$ in the convergence rate.
:::

:::example[A function that is $C^1$ but not $C^2$ on the circle]{provenance=original}
Let $h$ be the $2\pi$-periodic extension of

$$
h(\theta) = \theta\,(\pi^2 - \theta^2) , \qquad -\pi \le \theta \le \pi .
$$

**Which class is it in?** $h(\pm\pi) = \pm\pi(\pi^2-\pi^2) = 0$, so $h$ is continuous on the circle. Next $h'(\theta) = \pi^2 - 3\theta^2$, and $h'(\pi) = h'(-\pi) = -2\pi^2$: the derivative matches too, so $h \in C^1(S)$. But $h''(\theta) = -6\theta$ gives $h''(\pi) = -6\pi$ and $h''(-\pi) = +6\pi$, which differ; so $h \notin C^2(S)$. Step 1 of the method predicts matching up to $j=1$, hence decay somewhere between $o(m^{-1})$ (guaranteed) and $m^{-3}$ (generic).

**The coefficients.** $h$ is odd, so only sine terms survive and $b_m = \frac{2}{\pi}\int_0^{\pi}(\pi^2\theta - \theta^3)\sin m\theta\,d\theta$. Two standard integrations by parts give

$$
\int_0^\pi \theta \sin m\theta\,d\theta = \frac{(-1)^{m+1}\pi}{m} ,
\qquad
\int_0^\pi \theta^3\sin m\theta\,d\theta = \frac{(-1)^{m+1}\pi^3}{m} + \frac{6(-1)^{m}\pi}{m^3} ,
$$

so the $\pi^3/m$ parts cancel and

$$
b_m = \frac{2}{\pi}\Bigl(-\frac{6(-1)^m \pi}{m^3}\Bigr) = \frac{12\,(-1)^{m+1}}{m^3} ,
\qquad
h(\theta) = 12\sum_{m=1}^{\infty}\frac{(-1)^{m+1}}{m^3}\,\sin m\theta .
$$

The decay is $m^{-3}$, the generic rate, and the theorem's guarantee $m\,b_m \to 0$ is comfortably met with room to spare.

**Check the sum.** At $\theta = \pi/2$ the sines are $1, 0, -1, 0, 1, \dots$, so the series collapses to $12\sum_{j\ge0}(-1)^j(2j+1)^{-3} = 12\beta(3) = 12\cdot\pi^3/32$, while $h(\pi/2) = \frac{\pi}{2}\bigl(\pi^2 - \frac{\pi^2}{4}\bigr) = \frac{3\pi^3}{8}$. These agree: $12\pi^3/32 = 3\pi^3/8 = 11.627354$. Absolute convergence is visible too, since $\sum_m\lvert b_m\rvert = 12\zeta(3) = 14.424683 < \infty$.

**Differentiate once — legitimate.** The differentiated series is $12\sum_m (-1)^{m+1}m^{-2}\cos m\theta$, with $\sum 12\,m^{-2} = 12\zeta(2) = 2\pi^2 = 19.739209 < \infty$: uniformly convergent by the $M$-test, so by step 3 of the method its sum is $h'(\theta) = \pi^2 - 3\theta^2$. Testing at $\theta = 0$:

$$
12\sum_{m=1}^{\infty}\frac{(-1)^{m+1}}{m^2} = 12\cdot\frac{\pi^2}{12} = \pi^2 = h'(0) ,
$$

and at $\theta = \pi$, $12\sum_m (-1)^{m+1}(-1)^m m^{-2} = -12\zeta(2) = -2\pi^2 = h'(\pi)$, as it must be.

**Differentiate twice — not legitimate.** The next formal derivative is $-12\sum_m (-1)^{m+1}m^{-1}\sin m\theta$. Its coefficients are of order $1/m$, so $\sum\lvert{\cdot}\rvert$ diverges and the $M$-test gives nothing. It does converge pointwise on $(-\pi,\pi)$, to $-12\cdot\frac{\theta}{2} = -6\theta = h''(\theta)$; but at $\theta = \pi$ every term is zero, so the series sums to $0$ there while $h''(\pi^-) = -6\pi$. The convergence is therefore not uniform, exactly as $h \notin C^2(S)$ requires. A third formal differentiation gives $-12\sum(-1)^{m+1}\cos m\theta$, whose terms do not tend to $0$: divergent everywhere.

**Integrate once — always legitimate.** Integrating the series for $h$ from $0$ to $x$ term by term, and using $\int_0^x \sin m\theta\,d\theta = (1-\cos mx)/m$,

$$
\int_0^x h(\theta)\,d\theta = \frac{\pi^2x^2}{2} - \frac{x^4}{4} = 12\sum_{m=1}^{\infty}\frac{(-1)^{m+1}\bigl(1 - \cos mx\bigr)}{m^4} .
$$

At $x = \pi$ the factor $1-\cos m\pi$ is $2$ for odd $m$ and $0$ for even $m$, so the right-hand side is $24\sum_{j\ge0}(2j+1)^{-4} = 24\cdot\frac{\pi^4}{96} = \frac{\pi^4}{4}$, and the left-hand side is $\frac{\pi^4}{2} - \frac{\pi^4}{4} = \frac{\pi^4}{4} = 24.352273$. They agree, and the integrated coefficients decay like $m^{-4}$ — one power better than before, as integration always gives.
:::

:::application{provenance=original}
**Convergence rates of spectral methods.** A Fourier spectral solver for a periodic PDE represents the solution by $N$ coefficients; by part 1 of the decay theorem the truncation error is $O(N^{-p})$ when the solution is in $C^p$, and faster than every power — "spectral accuracy" — when it is $C^\infty$. This is why a shock or a corner in the data destroys the advantage of a spectral method over a finite-difference one, and why practitioners inspect the measured decay rate of $\lvert c_m\rvert$ on a log-log plot as a diagnostic: a slope of $-1$ announces a jump, $-2$ a kink, and no straight line at all announces smoothness.

**Smoothing by diffusion.** Solving the heat equation on a ring multiplies the $m$th coefficient of the initial data by $e^{-m^2 t}$. The result decays faster than every power of $m$ for every $t > 0$, so by the converse statement the solution is $C^\infty$ on the circle however rough the initial data were. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, Example 3, p. 132"} make exactly this observation about the temperature in an infinite rod. Run backwards, the same factor amplifies high frequencies, which is the precise sense in which backward heat conduction is ill-posed.

**Numerical differentiation amplifies noise.** Differentiating a measured periodic signal multiplies the $m$th coefficient by $im$. Measurement noise is broadband, so its high-frequency coefficients do not decay; multiplying them by $m$ makes the differentiated signal worse the finer the sampling. The standard remedy — low-pass filtering before differentiating — is the statement that one must restore the decay the derivative destroyed.

**Reading structure off a spectrum.** Because a jump contributes a $1/m$ tail and a kink a $1/m^2$ tail, the asymptotic envelope of a measured Fourier spectrum identifies the strongest singularity of the underlying periodic signal without locating it. In vibration monitoring, the appearance of a $1/m$ tail where a $1/m^3$ tail was expected signals that something in the system has begun to strike rather than to flex.
:::
