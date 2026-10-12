---
id: complex.trigonometric-integrals
title: Trigonometric integrals by residues
kind: method
level: core
summary: An integral of a rational function of sine and cosine over one full period becomes a contour integral on the unit circle under $z = e^{i\theta}$, and is then $2\pi i$ times the sum of the residues, inside the circle, of the transformed integrand $R(\cdot,\cdot)/(iz)$.
prereqs: [complex.residue-theorem, complex.contour-integrals]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§11.8, Trigonometric Integrals, Range $(0,2\\pi)$, Eqs. (11.91)-(11.94), pp. 522-523, with Examples 11.8.1-11.8.2, pp. 523-524"
    pages: "522-524"
    role: the substitution and the resulting recipe; the warning to use the residues of $f/z$; the use of $z^{k}+z^{-k}$ for $\\cos k\\theta$
  - work: ahlfors-1979
    loc: "Ch. 4, §5.3, case 1, Eq. (51) and the discussion following it, pp. 155-156"
    pages: "155-156"
    role: the substitution $z=e^{i\\theta}$; the observation that $\\cos\\theta$ takes the same values on $(0,\\pi)$ and on $(\\pi,2\\pi)$, so that the integral over the half-period is half the integral over the full period
  - work: hassani-2013
    loc: "§11.3.3, Functions of Trigonometric Functions, with Examples 11.3.6-11.3.7, pp. 350-352"
    pages: "350-352"
    role: cross-check of the recipe (the substitution and the resulting unit-circle integral); the standard integral $\\int_0^{\\pi}d\\theta/(a+\\cos\\theta)^2$ that our second example computes at $a=2$
  - work: rhb-2006
    loc: "§24.13.1, Integrals of sinusoidal functions, Eqs. (24.64)-(24.67), pp. 861-862"
    pages: "861-862"
    role: cross-check of the recipe; the requirement that the transformed integrand have no pole on the unit circle; the use of $\\tfrac12(z^{n}+z^{-n})$ for $\\cos n\\theta$
---

:::note{provenance=original}
**What it means.** On the unit circle $z = e^{i\theta}$, the sine and cosine of $\theta$ are rational functions of $z$, and $d\theta$ is $dz/(iz)$. So a real integral over one full period turns into a contour integral of a rational function around the unit circle -- and a contour integral of a rational function is just a finite sum of residues. The method is completely mechanical: no antiderivative, no trigonometric identity, no partial fractions in $\theta$. Its one real step is deciding which poles lie inside the circle.
:::

:::definition[The substitution]{provenance=adapted src="arfken-2013:§11.8, Eqs. (11.92)-(11.93), pp. 522-523"}
Let $R(s,c) = P(s,c)/Q(s,c)$ be a rational function of two variables such that $\theta \mapsto R(\sin\theta, \cos\theta)$ is finite for every real $\theta$, and consider

$$
I \;=\; \int_0^{2\pi} R(\sin\theta, \cos\theta)\, d\theta .
$$

Substituting $z = e^{i\theta}$, so that $\theta$ running from $0$ to $2\pi$ traces the unit circle $\lvert z\rvert = 1$ once counterclockwise, and reading the result through the parametrisation definition of a contour integral (:ref[]{to=complex.contour-integrals}), which is what licenses the exchange of $\int_0^{2\pi}\cdots\,d\theta$ for $\oint\cdots dz$,

$$
\sin\theta \;=\; \frac{z - z^{-1}}{2i} ,
\qquad
\cos\theta \;=\; \frac{z + z^{-1}}{2} ,
\qquad
d\theta \;=\; \frac{dz}{iz} ,
$$

and more generally $\cos k\theta = \tfrac12(z^{k}+z^{-k})$, $\sin k\theta = \tfrac{1}{2i}(z^{k}-z^{-k})$ for integer $k$. Hence

$$
I \;=\; \oint_{\lvert z\rvert = 1} F(z)\, dz ,
\qquad
F(z) \;=\; \frac{1}{iz}\, R\!\left( \frac{z-z^{-1}}{2i},\ \frac{z+z^{-1}}{2} \right) ,
$$

and $F$ is a rational function of $z$.

The hypothesis on $R$ is a condition along the real circle $s^2+c^2=1$, and it transfers directly to the unit circle in the $z$-plane: for $\lvert z\rvert = 1$ we have $z = e^{i\theta}$ with $\theta$ real, so the two arguments of $R$ in the display are the real numbers $\sin\theta$ and $\cos\theta$, which satisfy $s^2+c^2=1$. Hence $R$ is finite at every point of $\lvert z\rvert = 1$, and since the remaining factor $1/(iz)$ is finite there too, **$F$ has no pole on $\lvert z\rvert = 1$**. That is the form in which the hypothesis is used below.
:::

:::method[Evaluating a trigonometric integral by residues]{provenance=adapted src="arfken-2013:§11.8, Eqs. (11.92)-(11.94), pp. 522-523; ahlfors-1979:Ch. 4, §5.3, pp. 155-156"}
1. **Get a full period.** If the integral is over an interval shorter than $2\pi$, extend it using symmetry or periodicity before substituting. For instance, if the integrand is unchanged by $\theta \mapsto 2\pi - \theta$ (true whenever it depends on $\theta$ only through $\cos\theta$), then $\int_0^{\pi} = \tfrac12\int_0^{2\pi}$. If no such device works, this method does not apply directly.
2. **Substitute.** Replace $\sin k\theta$, $\cos k\theta$ and $d\theta$ by the expressions above and simplify to a single rational $F(z)$. Keep $\cos k\theta$ as $\tfrac12(z^k + z^{-k})$ rather than first expanding it in powers of $\cos\theta$: it is less work.
3. **Clear negative powers.** Multiply numerator and denominator by the smallest power of $z$ that makes $F$ a ratio of polynomials. Do not forget the factor $1/(iz)$ from $d\theta$: it is a genuine pole of the integrand at $z=0$ unless the rest of $F$ cancels it. (Arfken states this as the rule that one needs the residues of $f/z$, not of $f$.)
4. **Find the poles and keep the ones inside.** Factor the denominator. Discard poles with $\lvert z\rvert > 1$. By the definition block there is no pole with $\lvert z\rvert = 1$, so every pole is strictly inside or strictly outside; if one turns up on the circle, the hypothesis that the denominator of $R$ does not vanish on $s^2+c^2=1$ has failed, the original integral diverges, and at best a principal value can be assigned to it -- which is a different method.
5. **Sum the residues.** By the residue theorem (:ref[]{to=complex.residue-theorem}),
   $$
   I \;=\; 2\pi i \sum_{\lvert z_j\rvert < 1} \operatorname*{Res}_{z = z_j} F .
   $$
6. **Check.** The answer must be real whenever the original integrand is real. If $R \ge 0$ on the circle, the answer must be non-negative -- and strictly positive unless $R$ vanishes identically on the circle, since a continuous non-negative integrand with a non-zero value has a positive integral. A quick numerical quadrature of the original integral is the surest check.
:::

:::remark[Where the hypotheses are used, and useful short-cuts]{provenance=original}
- **Finiteness of the integrand at every real $\theta$** is the one hypothesis to verify first: it is what keeps the poles of $F$ off $\lvert z\rvert = 1$ and the original integral convergent. A convenient *sufficient* condition is that $Q$ have no zero on the real circle $s^2+c^2=1$, but that is strictly stronger than needed, because a zero of $Q$ there may be cancelled by a zero of $P$ once $s,c$ are restricted to the circle. For instance $R(s,c) = c^2/(1-s)$ has $Q(1,0) = 0$, yet on the circle $c^2 = (1-s)(1+s)$, so $R(\sin\theta,\cos\theta) = 1 + \sin\theta$ is finite throughout and the integral is $2\pi$. Riley, Hobson and Bence impose the condition directly in the $z$-plane, requiring the transformed integrand to have finitely many poles inside the circle and none on it (p. 861); with the hypothesis as stated here the two formulations agree.
- **Rationality in $\sin\theta,\cos\theta$** is what makes $F$ rational, hence single-valued with finitely many poles. An integrand such as $\sqrt{1+\cos\theta}$ produces a branch point and is outside this method.
- **A full period is essential.** Over a sub-interval the image of $\theta$ is an arc, not a closed curve, and there is no contour to apply the residue theorem to. Step 1 is therefore not a convenience but a requirement.
- **Reciprocal pairs of poles.** When the denominator is a palindromic quadratic $z^2 - 2bz + 1$, its roots satisfy $z_1 z_2 = 1$, so exactly one lies inside the unit circle unless both are on it. Noticing this saves computing both moduli. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Example 11.8.1, p. 523"} make the step explicitly, writing that since $z_1z_2 = 1$ one root is within the unit circle and the other outside; :cite[Hassani]{work=hassani-2013 loc="Examples 11.3.6-11.3.7, pp. 351-352"} reaches the same conclusion in his parallel examples but states it directly, without invoking the product of the roots. All three examples below lean on the device -- the third after the substitution $u = z^{2}$.
- **Odd integrands integrate to zero.** If $R$ is odd under $\theta\mapsto-\theta$, the integral over a full period vanishes, and the residue sum must come out zero; this is a good consistency check rather than a method.
:::

:::example[A full computation with a double pole at the origin]{provenance=original}
Evaluate

$$
I \;=\; \int_0^{2\pi}\frac{\sin^{2}\theta}{2 - \cos\theta}\, d\theta .
$$

**Step 1.** The range is already a full period. The denominator satisfies $2 - \cos\theta \ge 1 > 0$, so the integrand is finite everywhere and the integral converges.

**Steps 2-3: substitute and clear.** With $z = e^{i\theta}$,

$$
\sin^{2}\theta \;=\; \left(\frac{z - z^{-1}}{2i}\right)^{2} \;=\; -\frac{z^{2} - 2 + z^{-2}}{4} ,
\qquad
2 - \cos\theta \;=\; 2 - \frac{z+z^{-1}}{2} \;=\; -\frac{z^{2}-4z+1}{2z} .
$$

Therefore

$$
F(z) \;=\; \frac{1}{iz}\cdot\frac{-\frac{1}{4}\bigl(z^2 - 2 + z^{-2}\bigr)}{-\frac{1}{2z}\bigl(z^{2}-4z+1\bigr)}
\;=\; \frac{z^{2}-2+z^{-2}}{2i\,(z^{2}-4z+1)}
\;=\; \frac{(z^{2}-1)^{2}}{2i\,z^{2}\,(z^{2}-4z+1)} ,
$$

using $z^2 - 2 + z^{-2} = (z - z^{-1})^2 = (z^2-1)^2/z^2$.

**Step 4: poles.** The denominator vanishes at $z = 0$ (order $2$, since $(z^2-1)^2 \to 1 \ne 0$ there) and at the roots of $z^2-4z+1 = 0$, namely

$$
z_{\pm} \;=\; 2 \pm \sqrt3 ,
\qquad z_+ z_- = 1 ,
$$

so exactly one of them, $z_- = 2-\sqrt3 = 0.2679492$, is inside the unit circle; $z_+ = 3.7320508$ is outside. No pole lies on $\lvert z\rvert = 1$.

**Step 5a: residue at $z = 0$ (order 2).** By the derivative rule (:ref[]{to=complex.residue-theorem}),

$$
\operatorname*{Res}_{z=0} F \;=\; \frac{1}{2i}\,\frac{d}{dz}\left[\frac{(z^{2}-1)^{2}}{z^{2}-4z+1}\right]_{z=0} .
$$

With $N = (z^2-1)^2$ and $D = z^2-4z+1$: $N(0)=1$, $N'(0) = 4z(z^2-1)\big|_0 = 0$, $D(0)=1$, $D'(0) = -4$. So $(N/D)'(0) = (N'D - ND')/D^2\big|_0 = (0 - 1\cdot(-4))/1 = 4$, and

$$
\operatorname*{Res}_{z=0} F \;=\; \frac{4}{2i} \;=\; -2i .
$$

**Step 5b: residue at $z = z_-$ (simple).** Write $z^2-4z+1 = (z-z_+)(z-z_-)$. Then

$$
\operatorname*{Res}_{z=z_-} F \;=\; \frac{(z_-^{2}-1)^{2}}{2i\,z_-^{2}\,(z_- - z_+)} .
$$

Now $z_-^2 = 7 - 4\sqrt3$, so $z_-^2 - 1 = 6-4\sqrt3$ and $(z_-^2-1)^2 = 84 - 48\sqrt3$; also $z_- - z_+ = -2\sqrt3$. Hence

$$
\operatorname*{Res}_{z=z_-} F \;=\; \frac{84-48\sqrt3}{2i\,(7-4\sqrt3)(-2\sqrt3)}
\;=\; \frac{12(7-4\sqrt3)}{-4i\sqrt3\,(7-4\sqrt3)}
\;=\; \frac{12}{-4i\sqrt3} \;=\; \frac{-3}{i\sqrt3} \;=\; i\sqrt3 .
$$

**Step 5c: assemble.**

$$
I \;=\; 2\pi i\bigl(-2i + i\sqrt3\bigr) \;=\; 2\pi i^{2}(\sqrt3 - 2) \;=\; 2\pi\,(2 - \sqrt3) .
$$

**Step 6: check.** $2\pi(2-\sqrt3) = 2\pi(0.2679492) = 1.6835744$, positive as it must be. Numerical quadrature of the original integral gives $1.6835744$, and symbolic integration confirms the closed form $2\pi(2-\sqrt3)$.
:::

:::example[A double pole away from the origin]{provenance=original}
Evaluate

$$
J \;=\; \int_0^{2\pi}\frac{d\theta}{(2-\cos\theta)^{2}} .
$$

(This is a standard integral: :cite[Hassani]{work=hassani-2013 loc="Example 11.3.7, pp. 351-352"} works $\int_0^{\pi}d\theta/(a+\cos\theta)^2$ for general $a>1$, of which the present $J$ is twice the case $a=2$. The point here is the double pole away from the origin, and the steps and numbers below are our own.)

**Substitute.** Using $2-\cos\theta = -(z^2-4z+1)/(2z)$ from the previous example,

$$
(2-\cos\theta)^{2} \;=\; \frac{(z^{2}-4z+1)^{2}}{4z^{2}} ,
\qquad
F(z) \;=\; \frac{1}{iz}\cdot\frac{4z^{2}}{(z^{2}-4z+1)^{2}} \;=\; \frac{-4i\,z}{(z - z_+)^{2}(z-z_-)^{2}} ,
$$

with $z_\pm = 2\pm\sqrt3$ as before. Note that the factor $1/z$ from $d\theta$ has been cancelled by the $z^2$ from the squared denominator: there is no pole at the origin this time.

**Poles inside.** Only $z_- = 2-\sqrt3$, now a **double** pole.

**Residue.**

$$
\operatorname*{Res}_{z=z_-} F \;=\; -4i\,\frac{d}{dz}\left[\frac{z}{(z-z_+)^{2}}\right]_{z=z_-}
\;=\; -4i\left[\frac{(z-z_+)^{2} - 2z(z-z_+)}{(z-z_+)^{4}}\right]_{z=z_-}
\;=\; -4i\,\frac{-(z_- + z_+)}{(z_- - z_+)^{3}} .
$$

Since $z_-+z_+ = 4$ and $(z_--z_+)^3 = (-2\sqrt3)^3 = -24\sqrt3$,

$$
\operatorname*{Res}_{z=z_-} F \;=\; -4i\cdot\frac{-4}{-24\sqrt3} \;=\; \frac{-4i}{6\sqrt3} \;=\; \frac{-2i}{3\sqrt3} .
$$

**Assemble.**

$$
J \;=\; 2\pi i\cdot\frac{-2i}{3\sqrt3} \;=\; \frac{4\pi}{3\sqrt3} \;=\; \frac{4\sqrt3\,\pi}{9} .
$$

**Check.** $4\sqrt3\pi/9 = 2.4183992$. Numerical quadrature of the original integral returns $2.4183992$, and symbolic integration gives $4\sqrt3\pi/9$. The answer must exceed $J_{\min} = 2\pi/9 = 0.698$ (the value if the denominator were always at its largest, $9$) and be less than $2\pi = 6.283$ (its value if the denominator were always at its smallest, $1$); it is.
:::

:::example[A quarter period, recovered by two symmetries]{provenance=original}
Evaluate

$$
K \;=\; \int_0^{\pi/2}\frac{d\theta}{4 - \sin^{2}\theta} .
$$

**Step 1: get a full period.** The integrand depends on $\theta$ only through $\sin^{2}\theta$, which has period $\pi$ and is unchanged by $\theta\mapsto\pi-\theta$. The reflection matches $(0,\pi/2)$ with $(\pi/2,\pi)$, so $\int_0^{\pi} = 2\int_0^{\pi/2}$; the periodicity then gives $\int_0^{2\pi} = 2\int_0^{\pi}$. Hence

$$
K \;=\; \frac14 \int_0^{2\pi}\frac{d\theta}{4-\sin^{2}\theta} .
$$

The denominator satisfies $4 - \sin^2\theta \ge 3 > 0$, so the denominator of $R$ does not vanish on the real circle and the integral converges.

**Steps 2-3: substitute and clear.** With $z = e^{i\theta}$, $\sin^{2}\theta = -\tfrac14(z^{2}-2+z^{-2})$, so

$$
4 - \sin^{2}\theta \;=\; 4 + \frac{z^{2}-2+z^{-2}}{4} \;=\; \frac{z^{4}+14z^{2}+1}{4z^{2}} ,
$$

and therefore

$$
F(z) \;=\; \frac{1}{iz}\cdot\frac{4z^{2}}{z^{4}+14z^{2}+1} \;=\; \frac{4z}{i\,(z^{4}+14z^{2}+1)} ,
\qquad
K \;=\; \frac14\oint_{\lvert z\rvert = 1} F(z)\, dz .
$$

The factor $1/z$ from $d\theta$ has been cancelled, so there is no pole at the origin.

**Step 4: poles.** Put $u = z^{2}$. Then $u^{2}+14u+1 = 0$ gives $u = -7\pm4\sqrt3$, and the two values multiply to $49-48 = 1$. Since $(2-\sqrt3)^{2} = 7-4\sqrt3$, we get $u = -(7-4\sqrt3)$ with square roots $z = \pm i(2-\sqrt3)$, of modulus $0.2679492 < 1$, and $u = -(7+4\sqrt3)$ with square roots of modulus $2+\sqrt3 = 3.7320508 > 1$. So exactly two poles lie inside the unit circle, namely $z_{\pm} = \pm i(2-\sqrt3)$, both simple because $z^4+14z^2+1$ has four distinct roots. None lies on the circle.

**Step 5: residues.** The denominator has derivative $4z^{3}+28z$, so by the quotient rule (:ref[]{to=complex.residue-theorem}), at either inside pole $z_j$,

$$
\operatorname*{Res}_{z=z_j} F \;=\; \frac{4z_j}{i\,(4z_j^{3}+28z_j)} \;=\; \frac{1}{i\,(z_j^{2}+7)} .
$$

Both inside poles have $z_j^{2} = -(7-4\sqrt3)$, hence $z_j^{2}+7 = 4\sqrt3$, and each residue is $1/(4\sqrt3\,i)$. The two together give $1/(2\sqrt3\,i)$.

**Assemble.**

$$
K \;=\; \frac14\cdot 2\pi i\cdot\frac{1}{2\sqrt3\,i} \;=\; \frac{\pi}{4\sqrt3} \;=\; \frac{\sqrt3\,\pi}{12} .
$$

**Step 6: check.** $\sqrt3\pi/12 = 0.4534498$; numerical quadrature of $K$ returns $0.4534498$, and of the full-period integral $1.8137994 = 4K$. A crude bracket confirms the size: the denominator lies between $3$ and $4$, so $K$ must lie between $(\pi/2)/4 = 0.3927$ and $(\pi/2)/3 = 0.5236$; it does.
:::

:::application[Orbital averages, lattice sums and filter design]{provenance=original}
- **Averages over an orbit or a cycle.** Time averages in celestial mechanics are integrals over one revolution of rational functions of the true anomaly: $\langle r^{-n}\rangle$ with $r = a(1-e^2)/(1+e\cos\theta)$ is exactly of the form treated here, and the method delivers the classical results such as $\langle r^{-1}\rangle$ and $\langle r^{-2}\rangle$ in closed form in the eccentricity. The same integrals appear in the virial analysis of a Keplerian orbit and in radiation-reaction averages.
- **Angular averages in scattering and transport.** The mean free path or the transport cross-section involves $\int_0^{2\pi}$ or $\int_0^{\pi}$ of a rational function of $\cos\theta$ -- the Rutherford and screened-Coulomb kernels are of this type -- and the residue method evaluates them without expanding in Legendre polynomials.
- **Lattice and Green's-function sums.** The real-space Green's function of a tight-binding chain is $G(n) = \frac{1}{2\pi}\int_0^{2\pi} \frac{e^{in\theta}}{E - 2t\cos\theta}\, d\theta$, which the substitution turns into a residue computation on the unit circle: the denominator becomes $-t\bigl(z^{2} - (E/t)z + 1\bigr)$, a palindromic quadratic, so its two roots are a reciprocal pair. The dichotomy is therefore not *inside versus outside* -- a reciprocal pair never has both roots outside, nor both inside -- but *on the circle versus off it*. For $\lvert E\rvert > 2\lvert t\rvert$, outside the band, the roots are real, one strictly inside and one strictly outside, the hypothesis of the method holds, and $G(n)$ decays geometrically in $\lvert n\rvert$ like the inside root. For $\lvert E\rvert < 2\lvert t\rvert$, inside the band, the roots are $e^{\pm i k}$ with $2t\cos k = E$: both lie *on* the circle, the method does not apply as it stands, and the integral has to be defined by the retarded prescription $E \to E + i0$, which pushes one root just inside and the other just outside and returns an oscillating, non-decaying $G(n) \propto e^{ik\lvert n\rvert}$. So it is the band condition that decides where the reciprocal pair sits, and the $i0$ is not a decoration but the thing that makes the in-band Green's function well defined.
- **Digital filters.** For a discrete-time filter with transfer function $H(e^{i\theta})$, the gain, the energy $\frac{1}{2\pi}\int_0^{2\pi}\lvert H\rvert^2 d\theta$ and the autocorrelation coefficients are integrals of rational functions of $e^{i\theta}$ over a period. The residue method is the standard evaluation, and the fact that the poles must lie strictly inside the unit circle is the stability condition for the filter.
:::
