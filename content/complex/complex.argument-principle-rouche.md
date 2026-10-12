---
id: complex.argument-principle-rouche
title: Argument principle and Rouche's theorem
kind: theorem
level: core
summary: The integral of $f'/f$ around a contour counts the zeros minus the poles of $f$ inside it, each with multiplicity; if one function dominates another on the contour, the two have the same number of zeros inside, which locates the roots of polynomials without solving them.
prereqs: [complex.residue-theorem, complex.winding-number]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 4, §5.2, Thm 18 (the argument principle) and its Corollary (Rouche's theorem), pp. 152-153, with the weighted form (49), p. 153; Ch. 4, §3.3, formula (31) counting zeros by the logarithmic derivative, p. 130"
    pages: "130, 152-153"
    role: statement and proof route for both theorems; the interpretation of the left-hand side as a winding number; the typical application to polynomial root location
  - work: arfken-2013
    loc: "§11.7, Counting Poles and Zeros, Eqs. (11.84)-(11.86), pp. 518-519"
    pages: "518-519"
    role: the residue computation for $f'/f$ at a zero or pole; Arfken's form of Rouche's theorem and its proof by counting phase cycles
  - work: rhb-2006
    loc: "§25.3, location of zeros, Eq. (25.17) and the worked example on $z^4+z+1$, pp. 880-882"
    pages: "880-882"
    role: the change-in-argument form of the count; the strategy of applying Rouche's theorem on two circles to trap the zeros in an annulus
---

:::note{provenance=original}
**What it means.** Zeros and poles are invisible to a contour integral of $f$ itself, but very visible to an integral of $f'/f$: that function has a simple pole at every zero and every pole of $f$, with residue the multiplicity, counted positively for zeros and negatively for poles. So one integral counts them. Rouche's theorem turns the count into a practical tool: it says the count is stable under any perturbation smaller in modulus than the function itself on the contour, so a complicated function can be counted by replacing it with the single term that dominates.
:::

:::definition[Counting with multiplicity]{provenance=adapted src="ahlfors-1979:Ch. 4, §5.2, p. 153; arfken-2013:§11.7, p. 518"}
Let $f$ be meromorphic on a region $\Omega$ (:ref[]{to=complex.singularities}) and let $\gamma$ be a cycle in $\Omega$ passing through no zero and no pole of $f$.

A zero of $f$ of order $h$ is **counted $h$ times**, and a pole of order $h$ is counted $h$ times, in the lists $(a_j)$ of zeros and $(b_k)$ of poles below. Write

$$
N_f(\gamma) \;=\; \sum_j n(\gamma, a_j) , \qquad P_f(\gamma) \;=\; \sum_k n(\gamma, b_k) ,
$$

the winding numbers (:ref[]{to=complex.winding-number}) weighting each point. When $\gamma$ is a positively oriented simple closed contour, every $n(\gamma,\cdot)$ is $1$ inside and $0$ outside, so $N_f$ and $P_f$ are simply the number of zeros and of poles enclosed, with multiplicity.
:::

:::statement[The argument principle]{provenance=adapted src="ahlfors-1979:Ch. 4, §5.2, Thm 18 and Eq. (48), pp. 152-153; arfken-2013:§11.7, Eq. (11.85), p. 518"}
Let $f$ be meromorphic on $\Omega$ with zeros $a_j$ and poles $b_k$, and let $\gamma$ be a cycle in $\Omega$, homologous to zero in $\Omega$, avoiding all the $a_j$ and $b_k$. Then the sums below are finite and

$$
\frac{1}{2\pi i}\oint_{\gamma}\frac{f'(z)}{f(z)}\, dz \;=\; N_f(\gamma) - P_f(\gamma) .
$$

**Classical form.** If $\gamma$ is a positively oriented simple closed contour with $\gamma$ and its interior in $\Omega$, and $f$ has neither zero nor pole on $\gamma$, then

$$
\frac{1}{2\pi i}\oint_{\gamma}\frac{f'(z)}{f(z)}\, dz \;=\; N - P ,
$$

where $N$ and $P$ count the zeros and poles inside, with multiplicity.

**Why "argument".** The left-hand side equals $n(\Gamma, 0)$, the winding number about the origin of the image cycle $\Gamma = f\circ\gamma$. Equivalently, writing $\Delta_\gamma[\arg f]$ for the total change in $\arg f(z)$ as $z$ traverses $\gamma$ once,

$$
N - P \;=\; \frac{1}{2\pi}\,\Delta_{\gamma}\bigl[\arg f\bigr] .
$$

**Weighted form.** If $g$ is analytic on $\Omega$, then under the same hypotheses

$$
\frac{1}{2\pi i}\oint_{\gamma} g(z)\,\frac{f'(z)}{f(z)}\, dz \;=\; \sum_j n(\gamma,a_j)\, g(a_j) \;-\; \sum_k n(\gamma,b_k)\, g(b_k) .
$$
:::

:::statement[Rouche's theorem]{provenance=adapted src="ahlfors-1979:Ch. 4, §5.2, Corollary, p. 153"}
Take a cycle $\gamma$ in $\Omega$ which is homologous to zero there and whose index $n(\gamma, z)$ is either $0$ or $1$ at every $z$ off $\gamma$. Let $f, g$ be analytic on $\Omega$ and suppose that at each point $z$ of $\gamma$

$$
\lvert f(z) - g(z)\rvert \;<\; \lvert f(z)\rvert .
$$

Write $Z(h)$ for the number of zeros of $h$ that $\gamma$ encloses, each repeated according to its order. The conclusion is that $Z(f) = Z(g)$.

**Arfken's form.** Let $F, G$ be analytic on and inside a simple closed contour $C$ with $\lvert G\rvert < \lvert F\rvert$ at every point of $C$. Then $Z(F) = Z(F+G)$. This is the same assertion: put $f = F$ and $g = F + G$, so that $f - g = -G$.
:::

:::idea{provenance=original}
Take the logarithmic derivative. If $f(z) = (z-a)^{h}\varphi(z)$ with $\varphi$ analytic and non-zero near $a$, then

$$
\frac{f'}{f} \;=\; \frac{h}{z-a} + \frac{\varphi'}{\varphi} ,
$$

and the second term is analytic near $a$. So $f'/f$ has a simple pole at $a$ with residue $h$ -- and the same computation with $-h$ in place of $h$ shows the residue at a pole of order $h$ is $-h$. The residue theorem then delivers the count.

Rouche's theorem is the argument principle applied to the ratio. The hypothesis says $\lvert g/f - 1\rvert < 1$ on $\gamma$, so the image of $\gamma$ under $F = g/f$ lies in the disc of centre $1$ and radius $1$, which misses the origin. A cycle confined to such a disc has winding number $0$ about the origin, so $F$ has as many zeros as poles inside -- and its zeros are those of $g$, its poles those of $f$.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 4, §5.2, pp. 152-153; arfken-2013:§11.7, Eq. (11.84), p. 518"}
**Step 1: $f'/f$ is meromorphic with the right residues.** Let $z_0 \in \Omega$ be a zero or pole of $f$ of order $h \ge 1$, and set $\mu = h$ at a zero, $\mu = -h$ at a pole. In both cases (:ref[]{to=complex.taylor-series}, :ref[]{to=complex.singularities})

$$
f(z) \;=\; (z - z_0)^{\mu}\,\varphi(z)
$$

with $\varphi$ analytic and non-vanishing on a neighbourhood of $z_0$. Differentiating,

$$
f'(z) \;=\; \mu (z-z_0)^{\mu-1}\varphi(z) + (z-z_0)^{\mu}\varphi'(z) ,
\qquad\text{so}\qquad
\frac{f'(z)}{f(z)} \;=\; \frac{\mu}{z - z_0} + \frac{\varphi'(z)}{\varphi(z)} .
$$

Because $\varphi$ is analytic and non-zero near $z_0$, the last term is analytic there. Hence $f'/f$ has a simple pole at $z_0$ with

$$
\operatorname*{Res}_{z=z_0} \frac{f'}{f} \;=\; \mu ,
$$

that is, $+h$ at a zero of order $h$ and $-h$ at a pole of order $h$. At any other point of $\Omega$, $f$ is analytic and non-zero, so $f'/f$ is analytic.

**Step 2: apply the residue theorem.** The zeros and poles of $f$ have no accumulation point in $\Omega$: poles are isolated by the definition of meromorphic, and zeros are isolated unless $f \equiv 0$, which is excluded since $f$ has no zero on $\gamma$. So $f'/f$ satisfies the hypotheses of the residue theorem on $\Omega$ with singular set the zeros and poles of $f$, and $\gamma$ is a cycle in the complement of that set, homologous to zero in $\Omega$. Therefore (:ref[]{to=complex.residue-theorem})

$$
\frac{1}{2\pi i}\oint_\gamma \frac{f'}{f}\, dz \;=\; \sum_j n(\gamma,a_j)\cdot 1 \;+\; \sum_k n(\gamma, b_k)\cdot(-1)
\;=\; N_f(\gamma) - P_f(\gamma) ,
$$

the zeros and poles being listed with multiplicity so that an order-$h$ point contributes $h$ equal terms rather than a single residue $h$; the residue theorem also guarantees only finitely many terms are non-zero. The classical form is the case $n(\gamma,\cdot)\equiv1$ inside.

**Step 3: the argument interpretation.** Let $\Gamma = f\circ\gamma$, a cycle in $\mathbb{C}\setminus\{0\}$ since $f \ne 0$ on $\gamma$. Parametrising $\gamma$ by $t$ and substituting $w = f(\gamma(t))$,

$$
\frac{1}{2\pi i}\oint_\gamma \frac{f'(z)}{f(z)}\,dz
\;=\; \frac{1}{2\pi i}\int \frac{f'(\gamma(t))\gamma'(t)}{f(\gamma(t))}\, dt
\;=\; \frac{1}{2\pi i}\oint_{\Gamma}\frac{dw}{w}
\;=\; n(\Gamma, 0) .
$$

By the proof of integrality of the index (:ref[]{to=complex.winding-number}), $2\pi i\, n(\Gamma,0)$ is the total increment of a continuous branch of $\log w$ along $\Gamma$, whose imaginary part is the total increment of $\arg f$ along $\gamma$; the real part cancels because $\lvert f\rvert$ returns to its starting value. This gives $N - P = \Delta_\gamma[\arg f]/2\pi$.

**Step 4: the weighted form.** With $g$ analytic on $\Omega$, Step 1 gives

$$
g(z)\,\frac{f'(z)}{f(z)} \;=\; \frac{\mu\, g(z)}{z-z_0} + g(z)\frac{\varphi'(z)}{\varphi(z)}
$$

near $z_0$, and the residue of the first term is $\mu\, g(z_0)$ while the second is analytic. The residue theorem again gives the stated sum.

**Step 5: Rouche's theorem.** The hypothesis $\lvert f - g\rvert < \lvert f\rvert$ on $\gamma$ forces $\lvert f\rvert > 0$ there, hence also $\lvert g \rvert \ge \lvert f\rvert - \lvert f-g\rvert > 0$: neither function vanishes on $\gamma$. Dividing the hypothesis by $\lvert f(z)\rvert$,

$$
\left\lvert \frac{g(z)}{f(z)} - 1 \right\rvert \;<\; 1 \qquad\text{on } \gamma .
$$

Set $F = g/f$, meromorphic on $\Omega$ with zeros the zeros of $g$ and poles the zeros of $f$ (a common zero of $f$ and $g$ cancels, affecting both counts equally and so not the conclusion). The image cycle $F\circ\gamma$ lies in the open disc $\lvert w - 1\rvert < 1$. That disc omits $0$ and its complement is connected and unbounded, so $0$ lies in the unbounded component of the complement of the image, whence $n(F\circ\gamma, 0) = 0$ (:ref[]{to=complex.winding-number}). By Steps 2 and 3 applied to $F$,

$$
0 \;=\; n(F\circ\gamma, 0) \;=\; N_F(\gamma) - P_F(\gamma) \;=\; N_g(\gamma) - N_f(\gamma) .
$$

Since $n(\gamma,\cdot) \in \{0,1\}$, $N_g(\gamma)$ and $N_f(\gamma)$ are the numbers of zeros of $g$ and of $f$ enclosed by $\gamma$, and they are equal. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **No zeros or poles on the contour.** Both $f'/f$ and $\arg f$ are undefined there, and the count genuinely jumps as a zero crosses $\gamma$. This is the only hypothesis that fails in practice, and it fails exactly when a root sits on the test circle.
- **Which function dominates, and why the inequality is strict.** The bound is $\lvert f - g \rvert < \lvert f \rvert$, with the *dominant* function on the right; swapping the roles is a different hypothesis. On $\lvert z\rvert=1$ with $f(z) = z$ and $g(z) = 1$ we have $\lvert f-g\rvert = \lvert z-1\rvert$, which reaches $2 > 1$ at $z = -1$: the hypothesis fails, and so does the conclusion, $f$ having one zero inside and $g$ none. Equality cannot be permitted even at a single point, because $\lvert g/f - 1\rvert = 1$ allows $g(z) = 0$ there, and a zero sitting on $\gamma$ leaves "the number of zeros enclosed" undefined. Concretely, $f(z) = 1$ and $g(z) = 1-z$ satisfy $\lvert f-g\rvert = \lvert z\rvert = 1 = \lvert f\rvert$ at every point of $\lvert z\rvert = 1$, and the zero of $g$ lies exactly on the contour.
- **Multiplicity is unavoidable.** The integral cannot distinguish a double zero from two simple ones. Rouche's theorem therefore tells you how many roots are in a region, never where they are; locating them needs either a smaller region or a different method.
- **The $\{0,1\}$ condition on the index in Rouche.** Without it the conclusion is about weighted counts $N_f(\gamma)$, not about numbers of zeros, and "the same number of zeros enclosed" would be the wrong phrase.
- **Meromorphic, not merely analytic.** The argument principle is stated for meromorphic $f$ precisely so that it can count poles too. For analytic $f$, $P = 0$ and the statement reduces to Ahlfors's earlier formula (31) on p. 130 counting zeros alone.
:::

:::example[Trapping the roots of a quintic]{provenance=original}
Let $p(z) = z^{5} + 3z + 1$. We locate its five roots without solving.

**How many in $\lvert z\rvert < 1$?** On the circle $\lvert z\rvert = 1$ take $f(z) = 3z$ as the dominant part and $g(z) = p(z) = 3z + (z^5+1)$. Then

$$
\lvert f(z) - g(z)\rvert \;=\; \lvert z^{5}+1\rvert \;\le\; \lvert z\rvert^{5} + 1 \;=\; 2
\;<\; 3 \;=\; \lvert 3z\rvert \;=\; \lvert f(z)\rvert .
$$

The inequality is strict at every point of the circle, so Rouche applies: $p$ has as many zeros in $\lvert z\rvert<1$ as $3z$, namely **one**.

**How many in $\lvert z\rvert < 2$?** Now the leading term dominates. On $\lvert z\rvert = 2$ take $f(z) = z^5$:

$$
\lvert p(z) - z^{5}\rvert \;=\; \lvert 3z+1\rvert \;\le\; 3\cdot2+1 \;=\; 7
\;<\; 32 \;=\; \lvert z\rvert^{5} .
$$

So $p$ has **five** zeros in $\lvert z\rvert < 2$: all of them, consistent with the degree.

**Conclusion.** One root lies in $\lvert z \rvert < 1$ and the remaining four in the annulus $1 < \lvert z\rvert< 2$. Since $p$ has real coefficients, the non-real roots come in conjugate pairs; the single small root must therefore be real, and indeed $p(0) = 1 > 0$ while $p(-1) = -3 < 0$, so it lies in $(-1,0)$ by the intermediate value theorem.

**Check.** The actual roots are $-0.3319890$, $1.0050669 \pm 0.9372592\,i$ and $-0.8390724\pm0.9438516\,i$, with moduli $0.3320$, $1.3743$ (twice) and $1.2629$ (twice) -- exactly one inside the unit circle, four in the annulus. Evaluating the argument-principle integral numerically confirms the counts: $\frac{1}{2\pi i}\oint_{\lvert z\rvert=1} p'/p\,dz = 1.000000$ and $\frac{1}{2\pi i}\oint_{\lvert z\rvert=2} p'/p\,dz = 5.000000$.
:::

:::example[Counting a pole against a zero]{provenance=original}
Let

$$
f(z) \;=\; \frac{z^{2}(z-3)}{(z - i)^{3}} ,
$$

meromorphic on $\mathbb{C}$, and let $\gamma$ be the circle $\lvert z\rvert = 2$, positively oriented.

**Inventory.** Inside $\gamma$: a zero of order $2$ at $z=0$ and a pole of order $3$ at $z = i$ (since $\lvert i\rvert = 1 < 2$). Outside: the simple zero at $z=3$. Nothing lies on $\gamma$, since $\lvert 0 \rvert, \lvert i\rvert < 2 < \lvert 3\rvert$. So $N = 2$, $P = 3$ and the argument principle predicts

$$
\frac{1}{2\pi i}\oint_{\lvert z\rvert=2}\frac{f'(z)}{f(z)}\, dz \;=\; 2 - 3 \;=\; -1 .
$$

**Direct confirmation by the logarithmic derivative.** Because $f$ is a product of powers,

$$
\frac{f'}{f} \;=\; \frac{2}{z} + \frac{1}{z-3} - \frac{3}{z-i} ,
$$

obtained by differentiating $\log f = 2\log z + \log(z-3) - 3\log(z-i)$ term by term (valid locally; only the derivative is needed). Integrating over $\lvert z\rvert=2$ and using $\frac{1}{2\pi i}\oint dz/(z-a) = n(\gamma,a)$:

$$
2\cdot 1 + 1\cdot 0 - 3\cdot 1 \;=\; -1 ,
$$

since $n(\gamma,0) = n(\gamma,i) = 1$ and $n(\gamma,3) = 0$. A numerical integration returns $-1.0000000$.

**Reading it as a phase.** Equivalently, as $z$ runs once counterclockwise around $\lvert z\rvert = 2$, the point $f(z)$ winds once *clockwise* about the origin. The excess of pole order over zero order shows up as a reversal of the direction of winding -- which is exactly what a Nyquist plot reports.
:::

:::application[Stability, root finding and mode counting]{provenance=original}
- **Nyquist stability.** A linear feedback system with open-loop transfer function $G(s)$ is closed-loop stable when $1+G(s)$ has no zeros in the right half-plane. Taking $\gamma$ to be the boundary of that half-plane (the imaginary axis closed by a large semicircle), the argument principle gives $N - P = n(\Gamma, -1)$, where $\Gamma$ is the Nyquist plot of $G$ and $P$ is the known number of right-half-plane poles of $G$. The engineer counts encirclements of $-1$ and reads off $N$; stability is $N = 0$. No root of the characteristic polynomial is ever computed.
- **Locating roots in a region.** Rouche's theorem is the standard way to trap polynomial roots in annuli, as in the example above and in the treatment of $z^4+z+1$ by Riley, Hobson and Bence (pp. 880-882), who combine a quadrant-by-quadrant argument count with two applications of Rouche to show that each quadrant contains one root and all four lie between $\lvert z\rvert = 2/3$ and $\lvert z \rvert = 3/2$. Numerical root finders use the same integral as a reliable way to decide how many roots a candidate region contains before subdividing.
- **Counting modes and bound states.** For a dispersion relation $D(\omega) = 0$ or a Jost function $f(k)$, the number of bound states or unstable modes in a region of the complex plane is the number of zeros there, and the contour integral of $D'/D$ counts them robustly even when the zeros are nearly degenerate. Levinson's theorem, relating the total scattering phase shift to the number of bound states, is an argument principle in this form: a change in total argument counts zeros.
- **Perturbation stability.** Rouche's theorem says a zero count cannot change under a perturbation that is small compared with the function on the boundary. This is the precise sense in which "a simple root moves continuously and does not disappear" when a model is perturbed -- and the sense in which a root can escape only by reaching the boundary where the dominance hypothesis fails.
:::
