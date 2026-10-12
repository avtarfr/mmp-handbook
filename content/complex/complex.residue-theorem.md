---
id: complex.residue-theorem
title: The residue theorem
kind: theorem
level: core
summary: The integral of an analytic function over a closed contour equals $2\pi i$ times the sum of its residues at the enclosed singularities, each weighted by the winding number; at a pole of order $n$ the residue is a single derivative of $(z-z_0)^n f(z)$.
prereqs: [complex.singularities, complex.laurent-series, complex.taylor-series, complex.contour-integrals, complex.winding-number, found.power-series]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 4, §5.1, Definition 3 and Thm 17 (the residue theorem), pp. 148-150; the residue as the coefficient $B_1$ of the singular part and the simple-pole rule, pp. 150-151; the classical boundary form, Definition 4 and the statements following it, pp. 151-152"
    pages: "148-152"
    role: statement with winding numbers; proof route through periods and homology; the classical form for a cycle bounding a region
  - work: arfken-2013
    loc: "§11.7, Calculus of Residues, Eqs. (11.62)-(11.64), p. 510, and the residue formulas (11.66), (11.68), pp. 510-511, with Example 11.7.1, p. 511"
    pages: "510-511"
    role: deformation-of-contour derivation; the formulas for residues at simple and higher-order poles; practical remarks on power-series shortcuts
  - work: rhb-2006
    loc: "§24.11, Eq. (24.58), the shortcut $g(z_0)/h'(z_0)$ for a simple pole of $g/h$, p. 858; §24.12, The residue theorem, pp. 858-860"
    pages: "858-860"
    role: cross-check of the statement; the shortcut $f_1(z_0)/f_2'(z_0)$ for a simple pole of $f_1/f_2$
  - work: hassani-2013
    loc: "§11.1, Thm 11.1.1 (the residue theorem) and the definition of the residue, pp. 339-341; §11.2, Thm 11.2.3 (residue at a pole of order $m$), p. 344"
    pages: "339-341, 344"
    role: cross-check of the statement and of the residue formulas
---

:::note{provenance=original}
**What it means.** Cauchy's theorem says a closed contour integral vanishes when there is nothing singular inside. The residue theorem says what it equals when there is: one number per enclosed singularity, read off its Laurent series, times $2\pi i$. Nothing about the contour matters except which singularities it winds around and how many times. This converts a large class of integrals -- including real integrals that have no elementary antiderivative -- into finite algebra.
:::

:::definition[Residue]{provenance=adapted src="ahlfors-1979:Ch. 4, §5.1, Definition 3, p. 149"}
Let $z_0$ be an isolated singularity of $f$, so that $f$ is analytic on a punctured disc $0 < \lvert z - z_0\rvert < \delta$ and has there a unique Laurent expansion $f(z) = \sum_{n\in\mathbb{Z}} a_n (z-z_0)^n$ (:ref[]{to=complex.laurent-series}). The **residue** of $f$ at $z_0$ is

$$
\operatorname*{Res}_{z = z_0} f \;=\; a_{-1} \;=\; \frac{1}{2\pi i}\oint_{\lvert \zeta - z_0\rvert = r} f(\zeta)\, d\zeta
\qquad (0 < r < \delta).
$$

Equivalently, and this is Ahlfors's formulation: the residue is the unique complex number $R$ for which $f(z) - R/(z - z_0)$ is the derivative of a single-valued analytic function on the punctured disc. Here is why the two agree.

*The number $a_{-1}$ works.* Write $f(z) - a_{-1}(z-z_0)^{-1} = \sum_{n \ne -1} a_n (z-z_0)^n$ and set

$$
F(z) \;=\; \sum_{n \ne -1} \frac{a_n}{n+1}\,(z-z_0)^{n+1} .
$$

Both halves of this series converge on the punctured disc. For the non-negative powers this is because $\lvert n+1\rvert \ge 1$ for every integer $n \ne -1$, so no coefficient is enlarged and the radius of convergence cannot shrink. For the negative powers, put $w = (z-z_0)^{-1}$: the principal part of $f$ is $\sum_{m\ge1}a_{-m}w^{m}$, convergent for $\lvert w\rvert < 1/R_1$, and the corresponding part of $F$ is $-\sum_{m\ge1}(a_{-m-1}/m)\,w^{m}$, whose coefficients are those of $w^{-1}\sum_{k\ge2}a_{-k}w^{k}$ divided by $m$ -- again no enlargement, and the shift by one power changes nothing about where it converges. A power series may be differentiated term by term inside its disc of convergence (:ref[]{to=found.power-series}), applied to each half separately. Hence $F$ is analytic and single-valued on the punctured disc with $F' = f - a_{-1}(z-z_0)^{-1}$.

*No other number works.* If $f - R(z-z_0)^{-1} = G'$ with $G$ analytic and single-valued on the punctured disc, integrate over a circle $\lvert \zeta - z_0\rvert = r$. The integral of a derivative of a single-valued analytic function over a closed contour is $0$ (:ref[]{to=complex.contour-integrals}), so

$$
0 \;=\; \oint f(\zeta)\,d\zeta \;-\; R\oint\frac{d\zeta}{\zeta - z_0} \;=\; 2\pi i\,a_{-1} - 2\pi i R ,
$$

giving $R = a_{-1}$.
:::

:::statement[The residue theorem]{provenance=adapted src="ahlfors-1979:Ch. 4, §5.1, Thm 17, p. 150, and the boundary form, p. 152"}
Let $f$ be analytic on a region $\Omega$ except for isolated singularities at the points of a set $S \subset \Omega$ with no accumulation point in $\Omega$. Let $\gamma$ be a cycle lying in $\Omega\setminus S$ and homologous to zero with respect to $\Omega$ (:ref[]{to=complex.winding-number}). Then $n(\gamma, a) \ne 0$ for only finitely many $a \in S$, and

$$
\frac{1}{2\pi i}\oint_{\gamma} f(z)\, dz \;=\; \sum_{a \in S} n(\gamma, a)\, \operatorname*{Res}_{z=a} f .
$$

**Classical form.** If $\gamma$ is a positively oriented simple closed contour whose interior $D$ together with $\gamma$ lies in $\Omega$, and $f$ is analytic on $\overline{D} = D \cup \gamma$ apart from finitely many isolated singularities $a_1, \dots, a_k \in D$, then every $n(\gamma, a_j) = 1$ and

$$
\oint_{\gamma} f(z)\, dz \;=\; 2\pi i \sum_{j=1}^{k} \operatorname*{Res}_{z = a_j} f .
$$
:::

:::statement[Computing residues]{provenance=adapted src="arfken-2013:§11.7, Eqs. (11.66) and (11.68), p. 510; ahlfors-1979:Ch. 4, §5.1, p. 151; rhb-2006:§24.11, Eq. (24.58), p. 858"}
Let $z_0$ be an isolated singularity of $f$.

1. **Simple pole.** If $z_0$ is a pole of order $1$,
   $$
   \operatorname*{Res}_{z=z_0} f \;=\; \lim_{z \to z_0} (z - z_0)\, f(z) .
   $$
2. **Pole of order $n$.** If $z_0$ is a pole of order at most $n$,
   $$
   \operatorname*{Res}_{z=z_0} f \;=\; \frac{1}{(n-1)!}\,\lim_{z\to z_0} \frac{d^{\,n-1}}{dz^{\,n-1}}\Bigl[(z - z_0)^{n} f(z)\Bigr] .
   $$
3. **Quotient with a simple zero in the denominator.** If $f = f_1/f_2$ with $f_1, f_2$ analytic at $z_0$, $f_1(z_0) \ne 0$, $f_2(z_0) = 0$ and $f_2'(z_0) \ne 0$, then $z_0$ is a simple pole and
   $$
   \operatorname*{Res}_{z=z_0} f \;=\; \frac{f_1(z_0)}{f_2'(z_0)} .
   $$
4. **Essential singularity.** No general formula exists; the residue must be read off a Laurent expansion (:ref[]{to=complex.singularities}). Arfken, Weber and Harris note (p. 510) that essential singularities do have well-defined residues, that in principle the coefficient integral can be used, and that the easiest route is often to find the Laurent expansion first.
:::

:::idea{provenance=original}
Subtract off the bad part. Near each singularity $a$, the single term $R_a/(z - a)$ with $R_a$ the residue carries all of the obstruction to finding an antiderivative: by the definition above, $f(z) - R_a/(z-a)$ *is* a derivative near $a$, so its integral over any small loop around $a$ vanishes. Consequently the integral of $f$ around a small loop at $a$ is the integral of $R_a/(z-a)$, which is $2\pi i R_a$.

The theorem is then pure bookkeeping on the contour. A cycle $\gamma$ homologous to zero in $\Omega$ is, as far as integrals of functions analytic on $\Omega\setminus S$ are concerned, equivalent to the collection of small circles around the singularities, each counted $n(\gamma,a)$ times -- that is the content of the general Cauchy theorem. Summing the small-circle contributions gives the formula.

The computational rules come from the same place. Multiplying by $(z-z_0)^n$ turns a Laurent series with a pole of order $\le n$ into a Taylor series in which the residue has moved to the coefficient of $(z-z_0)^{n-1}$, and Taylor coefficients are derivatives.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 4, §5.1, pp. 149-150; arfken-2013:§11.7, Eqs. (11.62)-(11.64), p. 510"}
**Step 1: only finitely many singularities count.** The set $U = \{a \in \mathbb{C}\setminus\gamma : n(\gamma,a) = 0\}$ is open and contains everything outside a large circle (:ref[]{to=complex.winding-number}). Hence its complement $K$ is closed and bounded, so compact. If infinitely many points of $S$ lay in $K$ they would accumulate somewhere in $K$; that accumulation point would be in $\Omega$ (because points of $K$ with non-zero index cannot lie in the complement of $\Omega$, $\gamma$ being homologous to zero there), contradicting the hypothesis that $S$ has no accumulation point in $\Omega$. So $n(\gamma, a) \ne 0$ for finitely many $a \in S$ only; call them $a_1,\dots,a_k$ and write $n_j = n(\gamma, a_j)$.

**Step 2: the local contribution of one singularity.** For each $j$ choose $\delta_j > 0$ so small that the punctured disc $0 < \lvert z - a_j\rvert < \delta_j$ lies in $\Omega \setminus S$, and let $C_j$ be the circle $\lvert z - a_j\rvert = \delta_j/2$, positively oriented. By the definition of the residue,

$$
\oint_{C_j} f(z)\, dz \;=\; 2\pi i \operatorname*{Res}_{z = a_j} f .
$$

**Step 3: replace $\gamma$ by the circles.** Consider the cycle

$$
\sigma \;=\; \gamma - \sum_{j=1}^{k} n_j\, C_j ,
$$

a cycle in the open set $\Omega' = \Omega \setminus S$. We claim $\sigma$ is homologous to zero in $\Omega'$, i.e. $n(\sigma, b) = 0$ for every $b \notin \Omega'$. There are two kinds of such $b$.

- If $b \notin \Omega$: then $n(\gamma, b) = 0$ because $\gamma \sim 0$ in $\Omega$, and $n(C_j, b) = 0$ for each $j$ because $b$ lies outside the small disc bounded by $C_j$ (that disc is contained in $\Omega$). So $n(\sigma,b) = 0$.
- If $b \in S$: then $n(C_j, b) = 1$ if $b = a_j$ and $0$ otherwise, the discs being disjoint and small. Hence $n(\sigma, b) = n(\gamma, b) - n_j$ if $b = a_j$ for some $j$, which is $0$ by the definition of $n_j$; and $n(\sigma,b) = n(\gamma,b) - 0 = 0$ for the remaining $b \in S$, since those have $n(\gamma,b)=0$ by Step 1.

**Step 4: apply the general Cauchy theorem.** $f$ is analytic on $\Omega'$ and $\sigma \sim 0$ in $\Omega'$, so $\oint_\sigma f\, dz = 0$ (:ref[]{to=complex.winding-number}). Therefore

$$
\oint_\gamma f(z)\, dz \;=\; \sum_{j=1}^{k} n_j \oint_{C_j} f(z)\, dz \;=\; 2\pi i\sum_{j=1}^{k} n_j \operatorname*{Res}_{z=a_j} f ,
$$

which is the assertion, the omitted singularities contributing $n(\gamma,a) = 0$. The classical form follows because a positively oriented simple closed contour has index $1$ at every interior point and $0$ outside (:ref[]{to=complex.winding-number}).

**Step 5: the residue formulas.** Let $z_0$ be a pole of order at most $n$, so the Laurent series is $f(z) = \sum_{m \ge -n} a_m (z-z_0)^m$. Then

$$
(z-z_0)^{n} f(z) \;=\; \sum_{m \ge -n} a_m (z-z_0)^{m+n} \;=\; \sum_{p \ge 0} a_{p-n}(z-z_0)^{p}
$$

is a convergent power series on the punctured disc; its sum extends analytically across $z_0$, so it *is* the Taylor series of that extension (:ref[]{to=complex.taylor-series}). The coefficient of $(z-z_0)^{n-1}$ is $a_{-1}$, and Taylor coefficients are derivatives:

$$
a_{-1} \;=\; \frac{1}{(n-1)!}\,\frac{d^{\,n-1}}{dz^{\,n-1}}\Bigl[(z-z_0)^n f(z)\Bigr]\bigg|_{z = z_0} ,
$$

the derivative being that of the analytic extension, which is what the limit in the statement computes. Taking $n = 1$ gives rule 1. For rule 3, write $f_2(z) = (z-z_0) h(z)$ with $h$ analytic and $h(z_0) = f_2'(z_0) \ne 0$ -- possible since $f_2$ has a simple zero (:ref[]{to=complex.taylor-series}). Then $(z - z_0) f(z) = f_1(z)/h(z) \to f_1(z_0)/f_2'(z_0)$, which is non-zero, so the pole is simple with that residue. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **"No accumulation point in $\Omega$" is what Step 1 consumes.** Its role is to make the residue sum finite. Step 1 shows that the points of $S$ with non-zero index lie in a compact set $K$; if infinitely many points of $S$ lay in $K$ they would accumulate at a point of $K$, and that point would belong to $\Omega$, which the hypothesis forbids. Without the hypothesis the sum on the right-hand side can have infinitely many non-zero terms and need not converge, so there is nothing left to prove or disprove. Note that the hypothesis does not exclude an accumulation of poles just outside $\Omega$: for $f(z) = 1/\sin(\pi/z)$ on $\Omega = \{0<\lvert z\rvert<2\}$ the poles $1/n$ accumulate at $0$, which is not in $\Omega$, and the theorem applies there without difficulty to any cycle homologous to zero in $\Omega$.
- **Homologous to zero, not merely closed.** Take $\Omega = \{0 < \lvert z\rvert < 2\}$, $f(z) = 1/z^{2}$ (which has no singularity in $\Omega$) and $\gamma$ the circle $\lvert z\rvert = 1$. Then $\oint_\gamma f = 0$, consistent with the theorem, but for $f(z) = 1/z$ we get $2\pi i$ although $f$ has no singularity in $\Omega$ either. The resolution is that $\gamma$ is *not* homologous to zero in this $\Omega$: $n(\gamma, 0) = 1$ and $0 \notin \Omega$. Dropping the homology hypothesis makes the theorem false.
- **Rule 2 needs only "order at most $n$".** Using too large an $n$ is harmless, merely more differentiation; using too small an $n$ gives a wrong answer, because $(z-z_0)^n f(z)$ then still has a pole and no Taylor series.
- **Rule 2 is often the hard way.** Arfken, Weber and Harris warn on p. 510 that rule 2 can work out messier than a well-chosen series expansion, and they illustrate the point in item 4 of Example 11.7.1 on p. 511: for $z/\sin^2 z$ at $z = \pi$, differentiating is laborious, while substituting $w = z-\pi$ and expanding $(w+\pi)/\sin^2 w$ gives the residue by inspection. Expanding is usually faster whenever the function is built from known series.
- **The theorem does not require poles.** Essential singularities are included, and their residues are perfectly well defined; it is only the *computation* that has no closed formula.
:::

:::example[A contour integral with a double pole]{provenance=original}
Evaluate

$$
I \;=\; \oint_{\lvert z\rvert = 2} \frac{e^{z}}{z^{2}(z-1)}\, dz ,
$$

the circle positively oriented.

**Locate the singularities.** The integrand is analytic except where the denominator vanishes: $z = 0$ (where $z^2$ gives a pole of order $2$, since $e^z/(z-1) \to -1 \ne 0$ there) and $z = 1$ (a simple pole). Both lie inside $\lvert z\rvert = 2$, and neither lies on it. The contour is simple and positively oriented, so the classical form applies with both residues counted once.

**Residue at $z = 1$ (rule 1).**

$$
\operatorname*{Res}_{z=1} \;=\; \lim_{z\to1}(z-1)\frac{e^z}{z^2(z-1)} \;=\; \frac{e^{1}}{1^{2}} \;=\; e .
$$

**Residue at $z = 0$ (rule 2 with $n = 2$).**

$$
\operatorname*{Res}_{z=0} \;=\; \frac{1}{1!}\,\frac{d}{dz}\left[\frac{e^{z}}{z-1}\right]_{z=0}
\;=\; \left[\frac{e^{z}(z-1) - e^{z}}{(z-1)^{2}}\right]_{z=0}
\;=\; \frac{e^{z}(z-2)}{(z-1)^{2}}\bigg|_{z=0}
\;=\; \frac{1\cdot(-2)}{1} \;=\; -2 .
$$

As a cross-check by expansion: $e^z/(z-1) = (1 + z + \tfrac{z^2}{2}+\cdots)\cdot\bigl(-1 - z - z^2 - \cdots\bigr) = -1 - 2z - \cdots$, so dividing by $z^2$ gives $-z^{-2} - 2z^{-1} - \cdots$ and the residue is $-2$.

**Assemble.**

$$
I \;=\; 2\pi i\,(e - 2) \;=\; 2\pi i \cdot 0.7182818285 \;=\; 4.5130978310\, i .
$$

**Numerical check.** Parametrising $z = 2e^{i\theta}$ and integrating numerically gives $I = 4.5130978310\,i$ to ten digits, with real part $10^{-22}$.
:::

:::example[Residues at a simple pole of a quotient, and at an essential singularity]{provenance=original}
**(a) Quotient rule.** Find the residues of $f(z) = z/(z^{4}+4)$ at its poles. The poles are the fourth roots of $-4$, namely $z = \sqrt{2}\,e^{i\pi/4},\ \sqrt2\,e^{3i\pi/4},\ \sqrt2\,e^{5i\pi/4},\ \sqrt2\,e^{7i\pi/4}$, i.e. $\pm1\pm i$; each is simple because $\frac{d}{dz}(z^4+4) = 4z^3 \ne 0$ there. Rule 3 gives

$$
\operatorname*{Res}_{z = z_j} f \;=\; \frac{z_j}{4z_j^{3}} \;=\; \frac{1}{4 z_j^{2}} .
$$

At $z_1 = 1+i$, $z_1^{2} = 2i$, so the residue is $1/(8i) = -i/8$. At $z_2 = -1+i$, $z_2^2 = -2i$ and the residue is $i/8$. The two poles in the upper half-plane thus have residues summing to $0$ -- which is why $\int_{-\infty}^{\infty} x\,dx/(x^4+4)$ vanishes, as it must by oddness.

**(b) Essential singularity.** Find $\operatorname{Res}_{z=0} z^{2}\sin(1/z)$. There is no formula to apply; expand. With $\sin\zeta = \sum_{k\ge0}(-1)^{k}\zeta^{2k+1}/(2k+1)!$ at $\zeta = 1/z$,

$$
z^{2}\sin\frac1z \;=\; \sum_{k=0}^{\infty}\frac{(-1)^{k}}{(2k+1)!}\,z^{\,1-2k} ,
$$

a Laurent series on $0<\lvert z\rvert<\infty$ with infinitely many negative powers, so $z=0$ is essential. The exponent $1-2k$ equals $-1$ only at $k=1$, so

$$
\operatorname*{Res}_{z=0} z^{2}\sin\frac1z \;=\; \frac{(-1)^{1}}{3!} \;=\; -\frac16 .
$$

Numerically, integrating $z^{2}\sin(1/z)$ over $\lvert z\rvert = 1$ gives $-1.0471975512\,i$, and $2\pi i\cdot(-1/6) = -1.0471975512\,i$. Note the contrast with part (a): here the residue is *not* obtainable from any derivative formula, because no finite power of $z$ removes the singularity.
:::

:::application[Where the residue theorem does the work]{provenance=original}
- **Real integrals with no elementary antiderivative.** The methods built directly on this theorem handle integrals over a period of rational trigonometric functions (:ref[]{to=complex.trigonometric-integrals}), Fourier-type integrals over the whole line (:ref[]{to=complex.infinite-integrals}), integrands with powers and logarithms (:ref[]{to=complex.branch-cut-integrals}), and divergent integrals read as principal values (:ref[]{to=complex.principal-value-integrals}). These cover most of the integrals that appear in response theory, diffraction and signal analysis.
- **Inverting transforms.** The Bromwich inversion of a Laplace transform, $f(t) = (2\pi i)^{-1}\int_L \tilde f(s) e^{st}\,ds$, and the inversion of the $Z$-transform are both evaluated by closing the contour and summing residues. Each pole of $\tilde f(s)$ contributes one exponential $e^{s_j t}$ with amplitude its residue: the poles *are* the normal modes, and the residues their amplitudes.
- **Mode sums and Green's functions.** In a field-theory or electrodynamics calculation, a frequency or momentum integral of a propagator is done by residues, and the physical content -- which modes propagate, with what weight, and with what causal structure -- is read off from which poles the contour encloses. The choice of contour relative to the poles is exactly the choice of boundary condition (retarded, advanced, Feynman).
- **Counting and stability.** Applied to $f'/f$, the theorem counts zeros and poles inside a contour (:ref[]{to=complex.argument-principle-rouche}), which is the basis of the Nyquist stability criterion and of root-finding in a prescribed region.
:::
