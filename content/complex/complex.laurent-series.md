---
id: complex.laurent-series
title: Laurent series
kind: theorem
level: core
summary: A function analytic in an annulus is the sum of a unique two-sided power series there, whose coefficients are the Cauchy integrals over any circle in the annulus; in practice the coefficients are found by algebra on known expansions rather than by integration.
prereqs: [complex.taylor-series, complex.cauchy-theorem, complex.cauchy-integral-formula, found.power-series, found.uniform-convergence, found.termwise-operations]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 5, §1.3, The Laurent Series, pp. 184-186 (the splitting $f = f_1 + f_2$, the coefficient formula (3), uniqueness as Exercise 1, p. 186)"
    pages: "184-186"
    role: statement; proof route by splitting the function into an inner and an outer part; uniqueness
  - work: arfken-2013
    loc: "§11.5, Laurent Series, Eqs. (11.43)-(11.48), pp. 494-495, and Example 11.5.1, p. 496"
    pages: "494-496"
    role: derivation from Cauchy's formula on the two bounding circles; freedom in the choice of the contour for the coefficients; the practical remark that coefficients need not be found by integration
  - work: rhb-2006
    loc: "§24.11, Laurent series, pp. 855-857"
    pages: "855-857"
    role: cross-check of the statement; terminology (principal part, annulus of convergence)
  - work: hassani-2013
    loc: "§10.6.2, Thm 10.6.5 (Laurent series), pp. 321-322, and Thm 10.6.7 (uniqueness of the expansion), p. 325"
    pages: "321-322, 325"
    role: cross-check of the statement and of the coefficient formula; the uniqueness argument by multiplying through and integrating term by term
---

:::note{provenance=original}
**What it means.** Taylor's theorem needs $f$ analytic on a whole disc. If $f$ misbehaves at the centre -- a pole, an essential singularity, anything at all -- the disc must be punctured, and a one-sided power series can no longer do the job. Allowing negative powers repairs this completely: on any annulus of analyticity there is exactly one two-sided series representing $f$. The negative-power part is the record of what goes wrong inside the hole, and reading off its first coefficient, $a_{-1}$, is the whole content of the residue calculus.
:::

:::definition[Laurent series and annulus]{provenance=adapted src="ahlfors-1979:Ch. 5, §1.3, Eqs. (1)-(2), p. 184; rhb-2006:§24.11, p. 855"}
For $z_0 \in \mathbb{C}$ and $0 \le R_1 < R_2 \le \infty$ write

$$
A(z_0; R_1, R_2) \;=\; \{\, z \in \mathbb{C} : R_1 < \lvert z - z_0\rvert < R_2 \,\}
$$

for the open **annulus** with centre $z_0$ and radii $R_1, R_2$. The degenerate cases $R_1 = 0$ (a punctured disc) and $R_2 = \infty$ are allowed.

A **Laurent series** about $z_0$ is a formal two-sided series

$$
\sum_{n=-\infty}^{\infty} a_n (z - z_0)^n .
$$

Split it into the **regular part** $\sum_{n \ge 0} a_n (z-z_0)^n$ and the **principal part** $\sum_{n \ge 1} a_{-n}(z-z_0)^{-n}$. We attach a value to the two-sided series at $z$ only where both halves converge at $z$; the convention matters, because a two-sided series has no natural order of summation and only the separate convergence of the halves makes the sum independent of one. Setting $w = 1/(z-z_0)$ turns the principal part into an ordinary power series in $w$, so it has a radius of convergence in $w$, say $1/R_1$ with $R_1 \in [0,\infty]$, and converges for $\lvert z - z_0\rvert > R_1$; the regular part converges for $\lvert z-z_0\rvert < R_2$, its own radius. The two therefore have a common domain precisely when $R_1 < R_2$, and on $A(z_0;R_1,R_2)$ the sum is analytic, being a sum of two analytic functions (:ref[]{to=found.power-series}).

Terminology differs: :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§24.11, p. 855"} call the non-negative-power half the **analytic part** rather than the regular part. "Principal part" is standard in both.
:::

:::statement[Laurent's theorem]{provenance=adapted src="ahlfors-1979:Ch. 5, §1.3, pp. 184-186 and Exercise 1, p. 186; arfken-2013:§11.5, Eqs. (11.47)-(11.48), p. 495"}
Let $f$ be analytic on the annulus $A = A(z_0; R_1, R_2)$. Then

$$
f(z) \;=\; \sum_{n=-\infty}^{\infty} a_n\,(z - z_0)^n
\qquad \text{for every } z \in A ,
$$

with coefficients

$$
a_n \;=\; \frac{1}{2\pi i}\oint_{C} \frac{f(\zeta)}{(\zeta - z_0)^{n+1}}\, d\zeta ,
\qquad n \in \mathbb{Z},
$$

where $C$ may be taken to be any circle $\lvert \zeta - z_0\rvert = r$ with $R_1 < r < R_2$, positively oriented, every such $r$ giving the same number. More generally $C$ may be any closed contour in $A$ that winds once counterclockwise about $z_0$.

The series converges absolutely on $A$ and uniformly on every closed sub-annulus $R_1 < \rho_1 \le \lvert z - z_0\rvert \le \rho_2 < R_2$, and it is **unique**: if $\sum_n b_n (z-z_0)^n$ converges to $f$ on $A$ then $b_n = a_n$ for all $n$.
:::

:::idea{provenance=adapted src="ahlfors-1979:Ch. 5, §1.3, pp. 184-185 (the splitting $f = f_1 + f_2$)"}
Split the function, not the integral. Write $f$ as a sum $f_1 + f_2$ in which $f_1$ is analytic on the whole inner disc $\lvert z - z_0\rvert < R_2$ and $f_2$ is analytic on the whole outer region $\lvert z - z_0\rvert > R_1$, with limit $0$ at infinity. Each piece is a Cauchy integral over a circle, so each is handled by expanding the one kernel $1/(\zeta - z)$ as a geometric series -- exactly as in the proof of Taylor's theorem, except that for $f_2$ the roles of $\zeta - z_0$ and $z - z_0$ are interchanged, because now $\lvert \zeta - z_0\rvert$ is the *smaller* of the two. That interchange is what produces negative powers of $z - z_0$. Adding the two expansions gives a two-sided series.

The split itself comes from Cauchy's formula read backwards: the Cauchy integral of $f$ over a circle inside $A$ defines an analytic function *everywhere inside* that circle, and over a circle outside it defines an analytic function everywhere outside. That the difference of the two is $f$ is got by surrounding the point $z$ with a third, small circle, so that the kernel's pole becomes a hole like the hole of the annulus; the several-holes form of Cauchy's theorem then relates the three integrals, and Cauchy's integral formula evaluates the small one as $f(z)$.

Uniqueness needs no new idea: multiply any convergent representation by $(z-z_0)^{-m-1}$ and integrate over a circle, where all terms but one integrate to zero.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 5, §1.3, pp. 185-186; hassani-2013:§10.6.2, Thm 10.6.7, p. 325"}
Fix $z \in A$ and choose radii with $R_1 < r_1 < \lvert z - z_0 \rvert < r_2 < R_2$. Let $C_j$ denote the circle $\lvert \zeta - z_0 \rvert = r_j$, positively oriented.

**Step 1: a Cauchy formula for the annulus, built from the two results we have.** We want to represent $f(z)$ by integrals over $C_1$ and $C_2$ alone. Neither prerequisite gives that directly: Cauchy's integral formula (:ref[]{to=complex.cauchy-integral-formula}) is stated for one simple closed contour with $f$ analytic on and inside it, and the deformation results of :ref[]{to=complex.cauchy-theorem} need the integrand analytic between the contours, which $f(\zeta)/(\zeta - z)$ is not, because of the pole at $\zeta = z$. The remedy is to make that pole a hole of its own.

Choose $\rho > 0$ small enough that the closed disc $\lvert \zeta - z\rvert \le \rho$ lies in the open sub-annulus $r_1 < \lvert \zeta - z_0\rvert < r_2$, and let $\sigma$ be the circle $\lvert \zeta - z\rvert = \rho$, positively oriented. Put

$$
g(\zeta) \;=\; \frac{f(\zeta)}{\zeta - z} .
$$

Then $g$ is analytic on the closed region inside $C_2$ and outside both $C_1$ and $\sigma$: there $f$ is analytic, because the region lies in $A$, and $\zeta \ne z$, because $\sigma$ has been removed. The two inner contours $C_1$ and $\sigma$ are mutually exterior, since the disc bounded by $\sigma$ misses the disc bounded by $C_1$. So the several-holes identity (part 3 of the deformation statement in :ref[]{to=complex.cauchy-theorem}) applies with $C = C_2$ and the two holes $C_1, \sigma$:

$$
\oint_{C_2} g(\zeta)\,d\zeta \;=\; \oint_{C_1} g(\zeta)\,d\zeta \;+\; \oint_{\sigma} g(\zeta)\,d\zeta .
$$

The last integral is where $f(z)$ comes from. On and inside $\sigma$ the function $f$ is analytic and $z$ is an interior point, so Cauchy's integral formula (:ref[]{to=complex.cauchy-integral-formula}) gives $\oint_{\sigma} f(\zeta)(\zeta - z)^{-1} d\zeta = 2\pi i\, f(z)$. Substituting and dividing by $2\pi i$,

$$
f(z) \;=\; \frac{1}{2\pi i}\oint_{C_2}\frac{f(\zeta)}{\zeta - z}\, d\zeta \;-\; \frac{1}{2\pi i}\oint_{C_1}\frac{f(\zeta)}{\zeta - z}\, d\zeta
\;=:\; f_1(z) + f_2(z) .
$$

(Our labelling has $C_1$ inner and $C_2$ outer. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.5, Fig. 11.9 and Eq. (11.43), pp. 494-495"} use the opposite convention, $C_1$ for the outer circle and $C_2$ for the inner one; a reader comparing with that derivation should swap the labels.)

**Step 2: the two pieces are analytic on larger sets, and do not depend on the radii.** Each integral is a Cauchy-type integral $\oint_C \varphi(\zeta)(\zeta - z)^{-1}d\zeta$ with the continuous density $\varphi = f$ on the circle, and the lemma on such integrals (:ref[]{to=complex.cauchy-integral-formula}) makes it an analytic function of $z$ at every $z$ off the circle. So $f_1$ is defined and analytic on $\lvert z - z_0\rvert < r_2$ -- and also outside $C_2$, though we do not need that -- and likewise $f_2$ is analytic at every $z$ outside $C_1$. Neither depends on the choice of radius: if $r_2' $ is another admissible radius, the two integrands agree and $f$ is analytic on the sub-annulus between $C_2$ and $C_2'$, which does not contain $z$, so Cauchy's theorem makes the two integrals equal. Hence $f_1$ is analytic on all of $\lvert z - z_0\rvert < R_2$ and $f_2$ on all of $\lvert z - z_0 \rvert > R_1$. Because $\lvert f_2(z)\rvert \le r_1 \max_{C_1}\lvert f\rvert / (\lvert z - z_0\rvert - r_1) \to 0$ as $\lvert z\rvert \to \infty$, the function $f_2$ also has the limit $0$ at infinity.

**Step 3: expand the inner piece in non-negative powers.** On $C_2$ we have $\lvert z - z_0\rvert < \lvert \zeta - z_0\rvert = r_2$, so the geometric expansion of the Cauchy kernel used in the proof of Taylor's theorem (:ref[]{to=complex.taylor-series}) applies verbatim and converges uniformly in $\zeta \in C_2$. Integrating term by term (:ref[]{to=found.termwise-operations}),

$$
f_1(z) \;=\; \sum_{n=0}^{\infty} \left( \frac{1}{2\pi i}\oint_{C_2}\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\, d\zeta \right)(z-z_0)^n .
$$

**Step 4: expand the outer piece in negative powers.** On $C_1$ the inequality runs the other way: $\lvert \zeta - z_0 \rvert = r_1 < \lvert z - z_0\rvert$. So factor out $z - z_0$ instead of $\zeta - z_0$:

$$
-\frac{1}{\zeta - z} \;=\; \frac{1}{(z-z_0)}\cdot\frac{1}{1 - \dfrac{\zeta - z_0}{z - z_0}}
\;=\; \sum_{m=0}^{\infty} \frac{(\zeta - z_0)^m}{(z-z_0)^{m+1}} ,
$$

the ratio having modulus $r_1/\lvert z - z_0\rvert < 1$ at every $\zeta \in C_1$, uniformly. Write $M_1 = \max_{C_1}\lvert f\rvert$, finite because $f$ is continuous on the compact circle $C_1$. Multiplying through by $f(\zeta)$, the terms of the resulting series are bounded in modulus on $C_1$ by

$$
\frac{M_1}{\lvert z-z_0\rvert}\left(\frac{r_1}{\lvert z-z_0\rvert}\right)^{m},
$$

a convergent geometric majorant independent of $\zeta$, so the convergence is uniform on $C_1$ (:ref[]{to=found.uniform-convergence}) and termwise integration is allowed:

$$
f_2(z) \;=\; \sum_{m=0}^{\infty}\left( \frac{1}{2\pi i}\oint_{C_1} f(\zeta)\,(\zeta - z_0)^m\, d\zeta\right)(z-z_0)^{-m-1} .
$$

Writing $n = -m-1$, the bracket is $\frac{1}{2\pi i}\oint_{C_1} f(\zeta)(\zeta - z_0)^{-n-1}\, d\zeta$, which is the same expression as in Step 3 with $C_1$ in place of $C_2$. Adding Steps 3 and 4 therefore gives a two-sided series for $f$ whose coefficients all have the stated form; by Step 2 the circle used may be any admissible one, since the integrand $f(\zeta)(\zeta-z_0)^{-n-1}$ is analytic on $A$ and Cauchy's theorem makes its integral independent of the radius. Absolute convergence on $A$ and uniform convergence on closed sub-annuli are then properties of the two underlying power series, in $z - z_0$ and in $(z-z_0)^{-1}$ (:ref[]{to=found.power-series}).

**Step 5: uniqueness, which also yields the coefficient formula.** Suppose $f(z) = \sum_{n \in \mathbb{Z}} c_n (z-z_0)^n$ on $A$, convergent in the sense of the definition block, that is, with both halves convergent at each point of $A$. Fix $m \in \mathbb{Z}$ and a radius $r \in (R_1, R_2)$, and let $C$ be the circle of radius $r$. Since the regular part is a power series in $z - z_0$ convergent on a disc of radius $> r$ and the principal part is a power series in $(z-z_0)^{-1}$ convergent on a disc of radius $> 1/r$, both converge uniformly on the circle $\lvert z - z_0\rvert = r$, which is a compact subset of each disc of convergence (:ref[]{to=found.power-series}). Multiply by $(z-z_0)^{-m-1}$, which is bounded on $C$, and integrate over $C$; uniform convergence permits termwise integration (:ref[]{to=found.termwise-operations}) of each half, hence of the whole:

$$
\frac{1}{2\pi i}\oint_C \frac{f(z)}{(z-z_0)^{m+1}}\, dz
\;=\; \sum_{n \in \mathbb{Z}} c_n \cdot \frac{1}{2\pi i}\oint_C (z - z_0)^{n-m-1}\, dz .
$$

Parametrising $z = z_0 + re^{i\theta}$ gives

$$
\frac{1}{2\pi i}\oint_C (z-z_0)^{k}\,dz \;=\; \frac{r^{k+1}}{2\pi}\int_0^{2\pi} e^{i(k+1)\theta}\, d\theta
\;=\; \begin{cases} 1, & k = -1,\\ 0, & k \in \mathbb{Z},\ k \ne -1,\end{cases}
$$

so only the term $n = m$ survives and

$$
c_m \;=\; \frac{1}{2\pi i}\oint_C \frac{f(z)}{(z - z_0)^{m+1}}\, dz .
$$

The right-hand side involves only $f$, not the chosen series, so any two representations have the same coefficients, which is uniqueness.

Finally, the coefficient formula holds over any closed contour $C'$ in $A$ that encircles $z_0$ once counterclockwise, as the statement asserts. The integrand $f(\zeta)(\zeta - z_0)^{-m-1}$ is analytic on all of $A$, and such a $C'$ can be deformed to the circle $C$ within $A$ without crossing the hole; integrals of a function analytic on a multiply connected region over contours deformable into one another there are equal (:ref[]{to=complex.cauchy-theorem}). Hence the integral over $C'$ equals the integral over $C$. $\square$
:::

:::remark[Where the hypotheses are used, and what the series does not tell you]{provenance=adapted src="arfken-2013:§11.5, p. 495"}
- **The annulus, not just the punctured disc, is the natural domain.** The expansion depends on which annulus of analyticity is chosen, not only on $z_0$. The same $f$ has *different* Laurent series about the same centre on different annuli, as the example below shows. Asking for "the Laurent series of $f$ about $z_0$" is ambiguous unless the annulus is named.
- **Analyticity on the whole annulus is used in Step 1.** If $f$ has a singularity in the region between $C_1$ and $C_2$, the several-holes identity no longer applies there -- its hypothesis is analyticity on the whole closed region inside $C_2$ and outside the inner contours -- and the splitting fails. One would have to make that singularity a hole as well, which is exactly how the residue theorem arises.
- **$R_1 = 0$ is the case used by the residue calculus.** Then $A$ is a punctured disc, $f$ has an isolated singularity at $z_0$, and $a_{-1}$ is the residue (:ref[]{to=complex.residue-theorem}).
- **The coefficients need not be computed by integration.** Arfken stresses the point (p. 495): contour integrals for $a_n$ are often intractable, while partial fractions plus geometric and exponential series give the coefficients in a line. Uniqueness is what makes this legitimate -- any way of producing a convergent two-sided series produces *the* Laurent series.
- **A Laurent series diverges at the centre.** Arfken, Weber and Harris put it as: the series always diverges at $z = z_0$, and possibly out as far as $\lvert z - z_0\rvert = R_1$ (p. 495). The mechanism is the one in the definition block: the principal part is a power series in $1/(z-z_0)$, so it cannot converge where $1/(z-z_0)$ is too large.
:::

:::example[One function, two annuli, two different Laurent series]{provenance=original}
Let

$$
f(z) \;=\; \frac{1}{(z-1)(z-3)} .
$$

Its only singularities are simple poles at $z = 1$ and $z = 3$, so about $z_0 = 0$ there are three annuli of analyticity: $\lvert z\rvert < 1$, $1 < \lvert z\rvert < 3$, and $\lvert z \rvert > 3$. Start from the partial fractions

$$
f(z) \;=\; \frac{1}{2}\left( \frac{1}{z-3} - \frac{1}{z-1}\right),
$$

which is checked by combining the right-hand side over the common denominator: $[(z-1)-(z-3)]/[(z-1)(z-3)] \cdot \tfrac12 = f(z)$.

**On $1 < \lvert z\rvert < 3$.** Here $\lvert z/3\rvert < 1$ and $\lvert 1/z\rvert < 1$, so expand the first term in powers of $z/3$ and the second in powers of $1/z$:

$$
\frac{1}{z-3} = -\frac{1}{3}\cdot\frac{1}{1 - z/3} = -\sum_{n=0}^{\infty}\frac{z^n}{3^{\,n+1}},
\qquad
\frac{1}{z-1} = \frac{1}{z}\cdot\frac{1}{1-1/z} = \sum_{n=1}^{\infty} z^{-n}.
$$

Hence

$$
f(z) \;=\; -\frac12\sum_{n=0}^{\infty}\frac{z^n}{3^{\,n+1}} \;-\; \frac12\sum_{n=1}^{\infty} z^{-n},
\qquad\text{i.e.}\quad
a_n = -\frac{1}{2\cdot 3^{\,n+1}}\ (n \ge 0), \qquad a_{-n} = -\tfrac12\ (n \ge 1).
$$

This series has an infinite principal part, yet $f$ has no singularity at $0$ at all: the principal part is reporting the pole at $z=1$, which lies in the hole of the annulus, not a singularity at the centre.

**On $\lvert z\rvert > 3$.** Now both $\lvert 3/z\rvert < 1$ and $\lvert 1/z \rvert< 1$, so both terms are expanded in powers of $1/z$:

$$
\frac{1}{z-3} = \sum_{n=1}^{\infty} \frac{3^{\,n-1}}{z^{n}},
\qquad
\frac{1}{z-1} = \sum_{n=1}^{\infty} \frac{1}{z^{n}},
\qquad
f(z) = \frac12 \sum_{n=1}^{\infty} \frac{3^{\,n-1}-1}{z^{\,n}} .
$$

There is now no regular part at all, consistent with $f(z) \to 0$ as $z \to \infty$. The leading behaviour $a_{-2} = 1$ gives $f(z)\sim 1/z^2$, as it must.

**Numerical check.** At $z = 1.5 + 0.4i$, which lies in $1<\lvert z\rvert<3$ since $\lvert z\rvert = 1.5524$, the closed form gives $f(z) = -0.9209594171 + 0.4048173262\,i$ and the middle series, truncated at $\lvert n\rvert \le 200$, gives the same ten digits. At $z = 5 + i$, with $\lvert z\rvert = 5.0990 > 3$, both the closed form and the outer series give $0.0823529412 - 0.0705882353\,i$. Evaluating the *middle* series at $z = 5+i$ would be meaningless: its regular part diverges there.
:::

:::example[A principal part from an essential singularity]{provenance=original}
Let $f(z) = z^{3}\,e^{2/z}$ on the punctured plane $0 < \lvert z\rvert < \infty$. Substituting $w = 2/z$ in the exponential series,

$$
e^{2/z} \;=\; \sum_{k=0}^{\infty}\frac{2^k}{k!}\,z^{-k},
\qquad\text{so}\qquad
f(z) \;=\; \sum_{k=0}^{\infty}\frac{2^k}{k!}\,z^{\,3-k}
\;=\; \sum_{n=-\infty}^{3} \frac{2^{\,3-n}}{(3-n)!}\, z^{\,n}.
$$

By uniqueness this *is* the Laurent series on that annulus. Three readings of it:

- The principal part never terminates, so $z = 0$ is not a pole of any order: it is an essential singularity (:ref[]{to=complex.singularities}).
- The residue is $a_{-1} = 2^{4}/4! = 16/24 = 2/3$.
- The highest power present is $z^3$, so $f(z)/z^3 \to 1$ as $\lvert z \rvert \to \infty$.

A direct check of the residue: integrating $f$ over $\lvert z\rvert = 1$ numerically gives $\oint f\,dz = 4.18879020\,i$, and $2\pi i \cdot 2/3 = 4.18879020\,i$.
:::

:::application[Impedance, multipoles and the Z-transform]{provenance=original}
Laurent series are the standard language for "expand about a singular point" in the applied sciences.

- **Multipole expansions outside a source.** Let a two-dimensional charge distribution $\rho$ be confined to $\lvert z\rvert \le a$ and let $\Phi$ be its potential outside. Expanding $\ln\lvert z - z'\rvert$ for $\lvert z'\rvert < \lvert z\rvert$ gives, in $\lvert z\rvert > a$,

  $$
  \Phi(z) \;=\; -\frac{\lambda}{2\pi\varepsilon_0}\,\ln\lvert z\rvert
  \;+\; \frac{1}{2\pi\varepsilon_0}\operatorname{Re}\sum_{n\ge 1}\frac{p_n}{n\,z^{\,n}},
  \qquad
  \lambda = \int \rho\, dA, \quad p_n = \int \rho(z')\,z'^{\,n}\, dA .
  $$

  Two things must be said carefully here. First, the $\ln\lvert z\rvert$ term is the **monopole**: it carries the total charge $\lambda$. Second, it is *not* a term of a Laurent series, and no Laurent series can produce it: $\ln z$ is multivalued on the annulus $\lvert z\rvert > a$, so Laurent's theorem does not apply to it at all. The theorem applies to the single-valued remainder, whose Laurent expansion is $\sum_{n \ge 1} c_n z^{-n}$ with no positive powers (it is bounded at infinity). In that expansion $c_1/z$ is the **dipole** -- its coefficient is $p_1/(2\pi\varepsilon_0)$, so up to the fixed constant it *is* the dipole moment -- while $c_2/z^2$ is the **quadrupole** and $c_n/z^n$ the $2^n$-pole, with $c_n = p_n/(2\pi\varepsilon_0 n)$ -- so the Laurent index $-n$ names the $2^n$-pole, with the monopole sitting outside the series. Equivalently, write $\Phi = \operatorname{Re} w$ with $w$ the (multivalued) complex potential and apply Laurent's theorem to $-w'$, which *is* single-valued in $\lvert z\rvert > a$ and equals $E_x - iE_y$: its expansion begins at $z^{-1}$, with the monopole in that coefficient and the $2^n$-pole in the coefficient of $z^{-n-1}$. Either way, the expansion is valid in the stated annulus and nowhere inside it, which is the precise form of the familiar warning that multipole expansions converge only outside the smallest circle enclosing the sources.
- **Response at low and high frequency.** The impedance $Z(\omega)$ of a passive network has poles at its resonances. If the resonances are at radii $\varrho_1 < \varrho_2 < \cdots$ from a chosen centre of expansion, then $Z$ is analytic in each annulus $\varrho_k < \lvert \omega\rvert < \varrho_{k+1}$ bounded by two *consecutive* resonances -- not in one annulus reaching from the lowest to the highest, which would contain the intermediate ones -- and it has one Laurent series in each. Its coefficients there separate the inductive ($\omega^{+1}$) from the capacitive ($\omega^{-1}$) behaviour, and it is the choice of annulus -- that is, which resonances are inside the hole -- which decides what the expansion means physically.
- **The $Z$-transform of a discrete signal.** $X(z) = \sum_n x_n z^{-n}$ *is* a Laurent series, and the region of convergence is an annulus. Uniqueness is what makes the inversion formula $x_n = (2\pi i)^{-1}\oint X(z) z^{n-1}\, dz$ well posed, and the fact that the same $X(z)$ expanded on different annuli recovers different signals (causal, anticausal) is the fact that a Laurent series belongs to its annulus, not just to its centre.
:::
