---
id: fourier.hankel-mellin
title: Hankel and Mellin transforms
kind: definition
level: advanced
summary: 'Defines the Hankel transform of order $\nu$ and the Mellin transform in the normalisation of the cited books, shows that each is the Fourier transform seen through a change of variable — Hankel is the plane Fourier transform restricted to radial functions, Mellin is the line Fourier transform after $t = e^{x}$ — and reads the inversion formula for each off that identification.'
prereqs: [fourier.fourier-transform, fourier.fourier-inversion, fourier.fourier-transform-rn, spec.bessel-first-kind, spec.bessel-asymptotics, spec.bessel-orthogonality, spec.spherical-bessel, spec.gamma-function, spec.beta-function, complex.cauchy-theorem, complex.cauchy-integral-formula, complex.analytic-continuation, complex.residue-theorem, complex.branch-cut-integrals, measure.dominated-convergence, measure.fubini-tonelli, found.gaussian-integrals]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§20.1, 'Some Important Transforms': the Hankel transform (20.8) with weight $t\\,dt$ and kernel $J_n(\\alpha t)$, described as the continuum limit of a Bessel series, p. 965; the Mellin transform (20.9) and the remark that $\\Gamma(\\alpha)$ is the Mellin transform of $e^{-t}$, p. 966. §21.2, 'Integral-Transform Methods': the four transform pairs (21.18)–(21.21), among them the Mellin pair with inversion contour from $\\gamma - i\\infty$ to $\\gamma + i\\infty$ and the self-reciprocal Hankel pair, p. 1054. Exercise 20.2.15: the two-dimensional Fourier pair with kernel $e^{\\pm i(ux+vy)}$ and prefactor $1/2\\pi$, the assertion that for $f(x,y) = f(r)$ the order-zero Hankel pair is a special case of it, and the note that the technique generalises to $\\nu = 0, \\tfrac12, 1, \\tfrac32,\\dots$ and that half-integral orders reduce to Fourier sine and cosine transforms, p. 979"
    pages: "965-966, 979, 1054"
    role: both definitions in the normalisation used here; the Mellin inversion contour placed at a general abscissa; the identification of the order-zero Hankel pair with the two-dimensional Fourier pair for a radial function, which is the route of the first proof; the gamma function as a Mellin transform
  - work: rhb-2006
    loc: "§13.3, 'Concluding remarks': the general integral transform (13.65) with kernel $K(\\alpha,t)$ over $[a,b]$, and the two pairs listed as examples — (i) the Hankel pair $F(k) = \\int_0^\\infty f(x)J_n(kx)x\\,dx$, $f(x) = \\int_0^\\infty F(k)J_n(kx)k\\,dk$, and (ii) the Mellin pair $F(z) = \\int_0^\\infty t^{z-1}f(t)\\,dt$, $f(t) = (2\\pi i)^{-1}\\int_{-i\\infty}^{i\\infty} t^{-z}F(z)\\,dz$, p. 459; §13.1.10, the reduction (13.52) of a two-dimensional radial Fourier transform to a single $J_0$ integral, p. 453"
    pages: "453, 459"
    role: the symmetric statement of the Hankel pair for general order $n$, which is the form this unit adopts; the two-dimensional radial reduction (13.52) underlying the Hankel theorem; the reading of both as instances of one kernel construction; and the Mellin inversion contour written through the origin, which is the convention this unit departs from
  - work: stakgold-holst-2011
    loc: "§7.3, 'Hankel Transform of Order 0 and Applications': Bessel's equation of order zero as a singular Sturm–Liouville problem (7.3.31) with the endpoint condition $\\lim_{x\\to0}xu' = 0$, its Green's function (7.3.33), the completeness relation (7.3.37), and the order-zero pair (7.3.38)–(7.3.39), pp. 450–451; the axisymmetric ring-source problem (7.3.40)–(7.3.43) and the Sommerfeld relation (7.3.44)–(7.3.45), pp. 451–452. Exercise 7.3.4, 'The Mellin transform': the spectral problem $-(rR')' - (\\lambda/r)R = 0$ on $0 < r < \\infty$ with $p(r) = r$, $s(r) = 1/r$, the completeness relation (7.3.51), the pair (7.3.52)–(7.3.53) written with a purely imaginary exponent, and the wedge boundary-value problem of part (d), p. 456"
    pages: "450-452, 456"
    role: the derivation of both pairs as spectral expansions of a singular Sturm–Liouville operator, which is the reason the weights are what they are; the order-zero Hankel pair; the axisymmetric application and the Sommerfeld identity; the imaginary-exponent form of the Mellin pair and the wedge problem used in the method and application
  - work: stein-shakarchi-2003
    loc: "Ch. 6, §2: Prop. 2.1 (iv)–(v), the interchange of differentiation with multiplication by monomials, and Cor. 2.2, that the Fourier transform maps $\\mathcal{S}(\\mathbb{R}^d)$ to itself, p. 181"
    pages: "181"
    role: the one fact the Hankel theorem needs beyond the rules collected in the several-dimensional Fourier unit — that the Fourier transform preserves the Schwartz class in every dimension — which supplies both the integrability used in step 2 of the first proof and the first clause of part 2 of that theorem
  - work: hassani-2013
    loc: "§16, Example 16.0.1: the general integral transform (16.1) with kernel $K(z,t)$ on a contour $C$, and the kernels of the Fourier, Laplace, Euler, Mellin and Hankel transforms, the Mellin kernel written as $K(x,y) = G(x^y)$, which Hassani adds is usually taken to be $x^y$ itself, and the Hankel kernel $yJ_n(xy)$, pp. 493–494; §16.3, Problem 16.1: the change of variables $k = \\ln t$, $ix = \\omega - \\alpha$ carrying the Fourier pair into the Mellin pair $F(\\omega) = \\int_0^\\infty G(t)t^{\\omega-1}dt$, $G(t) = (2\\pi i)^{-1}\\int_{\\alpha - i\\infty}^{\\alpha + i\\infty} F(\\omega)t^{-\\omega}d\\omega$, p. 505"
    pages: "493-494, 505"
    role: the substitution that turns the Fourier transform into the Mellin transform, which is the route of the second proof, and the inversion contour at a general abscissa $\alpha$; the placing of both transforms in one family indexed by their kernels
---

:::definition[The Hankel transform]{provenance=adapted src="arfken-2013:§20.1, (20.8), p. 965; rhb-2006:§13.3, example (i), p. 459; stakgold-holst-2011:§7.3, (7.3.38)–(7.3.39), p. 451"}
Fix $\nu \ge 0$ and let $J_\nu$ be the :ref[Bessel function of the first kind]{to=spec.bessel-first-kind}. Let $f$ be measurable on $(0,\infty)$ with

$$
\int_0^\infty \lvert f(r)\rvert\,r\,dr \;<\; \infty .
$$

The **Hankel transform of order $\nu$** of $f$ is

$$
\mathcal{H}_\nu[f](k) \;=\; F_\nu(k) \;=\; \int_0^\infty f(r)\,J_\nu(kr)\,r\,dr ,
\qquad k > 0 .
$$

The integral converges absolutely for every $k$. The reason is that $J_\nu$ is bounded on $[0,\infty)$: it is continuous there, with $J_\nu(0) = 0$ for $\nu > 0$ and $J_0(0) = 1$, and it is $O(x^{-1/2})$ as $x \to \infty$ by :ref[]{to=spec.bessel-asymptotics}, so it tends to $0$ at infinity. A continuous function on $[0,\infty)$ with limit $0$ at infinity is bounded, say by $M_\nu$. Hence $\lvert f(r)J_\nu(kr)r\rvert \le M_\nu\lvert f(r)\rvert r$, which is integrable by hypothesis.

The **inversion formula** has the same shape with the roles of $r$ and $k$ exchanged:

$$
f(r) \;=\; \int_0^\infty F_\nu(k)\,J_\nu(kr)\,k\,dk .
$$

So $\mathcal{H}_\nu$ is, where it is valid, its own inverse. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.3, example (i), p. 459"} list exactly this pair, and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.1, (20.8), p. 965; §21.2, (21.21), p. 1054"} give the same forward transform and the same self-reciprocity. The statement and proof below establish the inversion formula for $\nu = 0$ on a class of functions for which every step can be justified.

Two remarks on the weight $r\,dr$. It is the Sturm–Liouville weight of Bessel's equation, the one that makes the Bessel functions orthogonal (:ref[]{to=spec.bessel-orthogonality}); :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§7.3, (7.3.31)–(7.3.39), pp. 450–451"} obtain the pair precisely as the spectral expansion of that singular problem on $0 < x < \infty$, with the endpoint condition $\lim_{x\to0}xu' = 0$ selecting the solution regular at the origin, and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.1, p. 965"} describe the transform as the continuum limit of a Bessel series. It is also, up to the factor $2\pi$ from the angular integration, the area element of the plane in polar coordinates, which is the content of the first theorem below.
:::

:::definition[The Mellin transform]{provenance=adapted src="arfken-2013:§20.1, (20.9), p. 966 and §21.2, (21.20), p. 1054; rhb-2006:§13.3, example (ii), p. 459; hassani-2013:§16.3, Problem 16.1, p. 505"}
Let $f$ be measurable on $(0,\infty)$. The **Mellin transform** of $f$ is

$$
\mathcal{M}[f](z) \;=\; F(z) \;=\; \int_0^\infty f(t)\,t^{\,z-1}\,dt ,
$$

defined at those complex $z$ for which the integral converges absolutely. Here $t^{\,z-1} = e^{(z-1)\ln t}$ with the real logarithm of the positive number $t$, so no branch cut is involved. Since $\lvert t^{\,z-1}\rvert = t^{\,\sigma-1}$ with $\sigma = \operatorname{Re}z$, convergence depends only on $\sigma$. The set of good $\sigma$ is an interval, and the reason is one inequality: if the integral converges absolutely at $\sigma_1$ and at $\sigma_2 > \sigma_1$, then for $\sigma_1 \le \sigma \le \sigma_2$ we have $t^{\,\sigma-1} \le t^{\,\sigma_1-1} + t^{\,\sigma_2-1}$ at every $t > 0$ — the first term dominating on $(0,1]$ and the second on $[1,\infty)$ — so it converges absolutely at $\sigma$ as well. The domain of $F$ is therefore a vertical **strip**. What the next statement adds is a sufficient condition, in terms of power bounds on $f$, for a *prescribed* open strip $a < \sigma < b$ to lie inside that domain.

**This unit uses throughout** the inversion formula of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§21.2, (21.20), p. 1054"} and :cite[Hassani]{work=hassani-2013 loc="§16.3, Problem 16.1, p. 505"},

$$
f(t) \;=\; \frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty} F(z)\,t^{-z}\,dz ,
$$

the integral running up a vertical line $\operatorname{Re}z = c$ lying inside the strip. Arfken writes the abscissa $\gamma$ and Hassani writes it $\alpha$; the value of $c$ is free within the strip, and the two proofs below show both why it is free and why some choice must be made.

:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.1, p. 966"} point out that the gamma function is a Mellin transform: $\mathcal{M}[e^{-t}](z) = \Gamma(z)$ is exactly Euler's integral of :ref[]{to=spec.gamma-function}, convergent for $\operatorname{Re}z > 0$.
:::

:::note[Where the sources differ]{provenance=adapted src="rhb-2006:§13.3, example (ii), p. 459; arfken-2013:§21.2, (21.20), p. 1054 and §20.2, Exercise 20.2.15, p. 979; stakgold-holst-2011:§7.3, Exercise 7.3.4, (7.3.52)–(7.3.53), p. 456; hassani-2013:§16, Example 16.0.1, pp. 493–494"}
**The Hankel pair.** All three books that write it out — :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="(20.8), p. 965"}, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="example (i), p. 459"} and, at order zero, :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="(7.3.38)–(7.3.39), p. 451"} — agree on the normalisation used above, weight $r\,dr$ forward and $k\,dk$ back, with no numerical prefactor anywhere. :cite[Hassani]{work=hassani-2013 loc="Example 16.0.1(e), p. 494"} lists the kernel as $yJ_n(xy)$, which is the same thing with the weight absorbed into the kernel. There is nothing to reconcile.

**The Mellin inversion contour.** Here the sources genuinely differ. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="(21.20), p. 1054"} and :cite[Hassani]{work=hassani-2013 loc="Problem 16.1, p. 505"} put the line at a general abscissa, as above. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="example (ii), p. 459"} write the limits as $-i\infty$ to $i\infty$, that is, with the line through the origin. The two are not interchangeable, because the strip of convergence need not contain the imaginary axis: for $f(t) = 1/(1+t)$ the strip is $0 < \operatorname{Re}z < 1$, computed in the second example below, and the integral defining $F$ diverges at $z = 0$. This unit follows Arfken and Hassani and keeps the free abscissa $c$. Where the strip does straddle the imaginary axis and the inversion hypotheses below hold at $c = 0$ as well, the two prescriptions give the same number, since both give $f(t)$.

**A variable on the imaginary axis.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Exercise 7.3.4, (7.3.52)–(7.3.53), p. 456"} reach the pair from the singular spectral problem $-(rR')' - (\lambda/r)R = 0$ on $0 < r < \infty$, with $p(r) = r$ and $s(r) = 1/r$, and write it with a real spectral variable $\nu$ in a purely imaginary exponent, $F_{\mathrm{M}}(\nu) = \int_0^\infty f(r)r^{-i\nu-1}dr$. Setting $z = -i\nu$ turns their forward formula into ours restricted to the line $\operatorname{Re}z = 0$, and their inversion integral over $\nu \in \mathbb{R}$ into ours over that line: $d\nu = i\,dz$, the limits reverse because $z = -i\nu$ runs downwards as $\nu$ runs upwards, and the resulting constant $-i/2\pi$ is $1/2\pi i$. So theirs is the special case $c = 0$ in a different variable, not a different transform.

**The sign in the plane.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 20.2.15, p. 979"} write the two-dimensional Fourier pair with $e^{+i(ux+vy)}$ forward. As recorded in :ref[]{to=fourier.fourier-transform-rn}, the sign is invisible on radial functions, because their transforms are even; so their statement that the order-zero Hankel pair is a special case of the Fourier pair is the same statement as ours, proved below in the convention of that unit.
:::

:::statement[Hankel at order zero is Fourier in the plane]{provenance=adapted src="arfken-2013:§20.2, Exercise 20.2.15, p. 979; rhb-2006:§13.1.10, (13.52), p. 453"}
Let $f : (0,\infty) \to \mathbb{C}$ be such that $g(\boldsymbol\rho) = f(\lvert\boldsymbol\rho\rvert)$ belongs to the Schwartz class $\mathcal{S}(\mathbb{R}^2)$, and write $\tilde g$ for its two-dimensional Fourier transform in the symmetric convention of :ref[]{to=fourier.fourier-transform-rn},

$$
\tilde g(\mathbf{k}) \;=\; \frac{1}{2\pi}\int_{\mathbb{R}^2} g(\boldsymbol\rho)\,e^{-i\mathbf{k}\cdot\boldsymbol\rho}\,d^2\rho .
$$

Then:

1. **Identification.** $\tilde g$ is radial and its profile is the order-zero Hankel transform of the profile of $g$:
   $$
   \tilde g(\mathbf{k}) \;=\; F_0(k) \;=\; \int_0^\infty f(r)\,J_0(kr)\,r\,dr ,
   \qquad k = \lvert\mathbf{k}\rvert .
   $$
   No prefactor survives: in this one convention the two-dimensional Fourier transform of a radial function *is* the order-zero Hankel transform of its profile.
2. **Inversion.** $F_0$ is itself the profile of a Schwartz function on $\mathbb{R}^2$ — because the Fourier transform maps $\mathcal{S}(\mathbb{R}^d)$ into itself, which is :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 6, §2, Cor. 2.2, p. 181"} Corollary 2.2 — and for every $r > 0$
   $$
   f(r) \;=\; \int_0^\infty F_0(k)\,J_0(kr)\,k\,dk .
   $$
   Thus $\mathcal{H}_0^2 = I$ on this class: the order-zero Hankel transform is an involution.
3. **Parseval.** $\displaystyle\int_0^\infty \lvert f(r)\rvert^2\,r\,dr \;=\; \int_0^\infty \lvert F_0(k)\rvert^2\,k\,dk .$
4. **Three dimensions, order $\tfrac12$.** If instead $g(\mathbf{r}) = f(\lvert\mathbf{r}\rvert)$ lies in $\mathcal{S}(\mathbb{R}^3)$, then with the same convention
   $$
   \tilde g(k) \;=\; k^{-1/2}\,\mathcal{H}_{1/2}\!\left[r^{1/2}f(r)\right]\!(k) .
   $$
   :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 20.2.15 and its Note, p. 979"} record that the construction continues through $\nu = 0,\tfrac12,1,\tfrac32,\dots$ — the two cases proved here, $n = 2$ giving $\nu = 0$ and $n = 3$ giving $\nu = \tfrac12$, fit the pattern $\nu = \tfrac{n}{2}-1$, which is our reading of it and not something they assert — and that at the two half-integral orders $\nu = \pm\tfrac12$ what results is a Fourier sine or cosine transform. Their $\nu = -\tfrac12$ lies outside the range $\nu \ge 0$ fixed in the definition above, so of the two orders they name only $\nu = +\tfrac12$ is a Hankel transform in the sense defined here — it is the one in part 4, and the sine transform is the one that appears in its proof. (The cosine transform is the companion statement, since $J_{-1/2}(x) = \sqrt{2/\pi x}\,\cos x$; but $\mathcal{H}_{-1/2}$ is not defined in this unit, and nothing below uses it.) They refer to Sneddon for the general case, and this unit proves only the two cases $n = 2$ and $n = 3$ displayed above.
:::

:::statement[The strip, and Mellin inversion]{provenance=original}
Let $f$ be measurable on $(0,\infty)$ and suppose there are real numbers $a < b$ and a constant $C$ with

$$
\lvert f(t)\rvert \le C\,t^{-a}\ \ (0 < t \le 1),
\qquad
\lvert f(t)\rvert \le C\,t^{-b}\ \ (t \ge 1).
$$

1. **The strip.** These bounds make the integral defining $F(z) = \mathcal{M}[f](z)$ converge absolutely on the open strip $a < \operatorname{Re}z < b$, and there $F$ is holomorphic, with
   $$
   F'(z) \;=\; \int_0^\infty f(t)\,(\ln t)\,t^{\,z-1}\,dt .
   $$
2. **It is a Fourier transform.** Fix $c$ with $a < c < b$ and put $g(x) = e^{cx}f(e^{x})$ for $x \in \mathbb{R}$. Then $g \in L^1(\mathbb{R})$ and, in the convention $\hat g(k) = \int_{-\infty}^{\infty} g(x)e^{-ikx}dx$ of :ref[]{to=fourier.fourier-transform},
   $$
   F(c + i\xi) \;=\; \hat g(-\xi)
   \qquad (\xi \in \mathbb{R}) .
   $$
3. **Inversion.** If in addition $f$ is continuous on $(0,\infty)$ and $\xi \mapsto F(c+i\xi)$ is integrable on $\mathbb{R}$, then for every $t > 0$
   $$
   f(t) \;=\; \frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty} F(z)\,t^{-z}\,dz
   \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty} F(c+i\xi)\,t^{-c-i\xi}\,d\xi .
   $$
   The value does not depend on which admissible $c$ is used: if the hypotheses hold at two abscissas, both integrals equal $f(t)$ and so equal each other.

This is the statement :cite[Hassani's]{work=hassani-2013 loc="§16.3, Problem 16.1, p. 505"} substitution $k = \ln t$ asks for, with hypotheses supplied; the decay bounds and the holomorphy are ours.
:::

:::statement[Operational rules for the Mellin transform]{provenance=original}
Let $F = \mathcal{M}[f]$ with strip $a < \operatorname{Re}z < b$. For $\lambda > 0$, $p > 0$ and $\mu \in \mathbb{R}$:

1. **Scaling.** $\mathcal{M}[f(\lambda t)](z) = \lambda^{-z}F(z)$, on the same strip.
2. **Weighting.** $\mathcal{M}[t^{\mu}f(t)](z) = F(z+\mu)$, on the strip shifted by $-\mu$.
3. **Powers.** $\mathcal{M}[f(t^{p})](z) = p^{-1}F(z/p)$, on the strip $pa < \operatorname{Re}z < pb$.
4. **Reciprocal.** $\mathcal{M}[f(1/t)](z) = F(-z)$, on the strip $-b < \operatorname{Re}z < -a$.
5. **The Euler operator.** Write $D = t\,d/dt$. If $f$ is continuously differentiable and $t^{z}f(t) \to 0$ as $t \to 0^{+}$ and as $t \to \infty$, then
   $$
   \mathcal{M}[Df](z) \;=\; -z\,F(z) ,
   \qquad\text{hence}\qquad
   \mathcal{M}[D^{n}f](z) \;=\; (-z)^{n}F(z)
   $$
   whenever the corresponding limits vanish at each stage.

Rule 5 is the reason the transform exists: it converts the operator $D$, which generates dilations $t \mapsto \lambda t$, into multiplication by $-z$, exactly as the Fourier transform converts $d/dx$ into multiplication by $ik$. Rules 1 and 5 together say that the Mellin transform diagonalises dilations of the half-line, as the Fourier transform diagonalises translations of the line.
:::

:::idea{provenance=original}
Neither transform is new. Each is the Fourier transform read in coordinates adapted to a symmetry, and each inversion formula is Fourier inversion carried back through the change of variable.

For Mellin the symmetry is dilation. The map $t = e^{x}$ carries the multiplicative half-line $(0,\infty)$ onto the additive line $\mathbb{R}$, and under it the Mellin kernel together with its measure, $t^{\,z-1}dt$, becomes $e^{zx}dx$. On the vertical line $z = c + i\xi$ that is a Fourier kernel $e^{i\xi x}$ times a fixed real weight $e^{cx}$, so the Mellin transform on that line is the Fourier transform of $e^{cx}f(e^{x})$. The free abscissa $c$ is not an artefact: it is the exponential weight one is allowed to insert to make $f(e^{x})$ integrable, and different admissible weights give the same answer because each of them returns $f$.

For Hankel the symmetry is rotation about an axis. The Fourier transform on $\mathbb{R}^2$ commutes with rotations, so it maps radial functions to radial functions; and when the angular integral in the plane is done, the plane-wave kernel collapses to $J_0$. The two-dimensional pair is symmetric between $\boldsymbol\rho$ and $\mathbf{k}$, so the resulting one-dimensional pair is symmetric between $r$ and $k$ — which is precisely the self-reciprocity of $\mathcal{H}_0$. The weight $r\,dr$ is the polar area element with the angle integrated out, which is why it appears on both sides.
:::

:::proof[The Hankel theorem]{provenance=adapted src="rhb-2006:§13.1.10, (13.52), p. 453; arfken-2013:§20.2, Exercise 20.2.15, p. 979"}
**Step 1: the angular integral.** Let $g(\boldsymbol\rho) = f(\lvert\boldsymbol\rho\rvert)$ lie in $\mathcal{S}(\mathbb{R}^2)$. Two facts from :ref[]{to=fourier.fourier-transform-rn} apply at once: the transform of a radial Schwartz function is radial, and in the plane the radial reduction reads

$$
\tilde g(k) \;=\; \frac{1}{2\pi}\int_0^\infty 2\pi\,\rho\,f(\rho)\,J_0(k\rho)\,d\rho .
$$

Its hypothesis, $\int_0^\infty \rho\lvert f(\rho)\rvert\,d\rho < \infty$, holds because a Schwartz function decays faster than any power. The two factors of $2\pi$ — one from the symmetric normalisation, one from integrating $e^{-ik\rho\cos\varphi}$ over $\varphi$ — cancel, leaving

$$
\tilde g(k) \;=\; \int_0^\infty f(\rho)\,J_0(k\rho)\,\rho\,d\rho \;=\; F_0(k) ,
$$

which is part 1. The cancellation is special to $n = 2$ and to this normalisation; it is what makes the order-zero pair as clean as it is.

**Step 2: inversion.** Because $g \in \mathcal{S}(\mathbb{R}^2)$, so is $\tilde g$. This is the one ingredient not among the rules of :ref[]{to=fourier.fourier-transform-rn}, and it is :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 6, §2, Cor. 2.2, p. 181"} Corollary 2.2, that the Fourier transform maps $\mathcal{S}(\mathbb{R}^d)$ to itself; they deduce it from their Proposition 2.1 (iv)–(v), which are items 3 of the rules in our unit, since those turn $\mathbf{k}^{\alpha}\partial_{\mathbf k}^{\beta}\tilde g$ into a constant times the transform of $\partial^{\alpha}\bigl(\boldsymbol\rho^{\beta}g\bigr)$ and a transform is bounded by the $L^1$ norm of what it transforms. Their convention differs from the one used here only by the fixed factor $(2\pi)^{-n/2}$ and the dilation $\boldsymbol\xi = \mathbf k/2\pi$ of the transform variable, and $\mathcal{S}(\mathbb{R}^2)$ is closed under both. Two consequences are used below: $\int_0^\infty k\lvert\tilde g(k)\rvert\,dk < \infty$, which is the hypothesis step 1 needs before it can be applied to $\tilde g$ in place of $g$; and the first clause of part 2.

With that in hand, :ref[]{to=fourier.fourier-transform-rn} gives

$$
g(\boldsymbol\rho) \;=\; \frac{1}{2\pi}\int_{\mathbb{R}^2}\tilde g(\mathbf{k})\,e^{+i\mathbf{k}\cdot\boldsymbol\rho}\,d^2k .
$$

The right-hand side is the forward transform of $\tilde g$ evaluated at $-\boldsymbol\rho$. Now $\tilde g$ is radial, so step 1 applies to it word for word, and it says that the forward transform of $\tilde g$ at any point of length $r$ equals $\int_0^\infty \tilde g(k)J_0(kr)k\,dk$. Since $\lvert-\boldsymbol\rho\rvert = \lvert\boldsymbol\rho\rvert = r$, that is the value of the right-hand side. Since the left-hand side is $f(r)$ and $\tilde g(k) = F_0(k)$, this is the displayed formula of part 2. Its first clause, that $F_0$ is the profile of a Schwartz function, is the statement $\tilde g \in \mathcal{S}(\mathbb{R}^2)$ settled at the start of this step by Stein and Shakarchi's corollary; it is an input to the argument, not a consequence of the inversion formula just proved.

**Step 3: Parseval.** Plancherel's identity in the plane, item 6 of the rules in :ref[]{to=fourier.fourier-transform-rn}, says $\int_{\mathbb{R}^2}\lvert\tilde g\rvert^2 d^2k = \int_{\mathbb{R}^2}\lvert g\rvert^2 d^2\rho$. Both sides are integrals of radial functions, so each reduces by the polar area element: $\int_{\mathbb{R}^2}\lvert g\rvert^2 d^2\rho = 2\pi\int_0^\infty\lvert f(r)\rvert^2 r\,dr$, and likewise on the other side with $F_0$. Dividing by $2\pi$ gives part 3.

**Step 4: three dimensions.** For $g \in \mathcal{S}(\mathbb{R}^3)$ radial, the same unit gives the reduction

$$
\tilde g(k) \;=\; \frac{1}{(2\pi)^{3/2}}\,\frac{4\pi}{k}\int_0^\infty r\,f(r)\,\sin(kr)\,dr .
$$

Collect the constants: $4\pi/(2\pi)^{3/2} = 2/(2\pi)^{1/2} = \sqrt{2/\pi}$. Now use the closed form $J_{1/2}(x) = \sqrt{2/\pi x}\,\sin x$ of :ref[]{to=spec.spherical-bessel}, which gives $\sin(kr) = \sqrt{\pi k r/2}\,J_{1/2}(kr)$. Substituting,

$$
\tilde g(k) \;=\; \sqrt{\frac{2}{\pi}}\,\frac{1}{k}\int_0^\infty r f(r)\sqrt{\frac{\pi k r}{2}}\,J_{1/2}(kr)\,dr
\;=\; k^{-1/2}\int_0^\infty \left[r^{1/2}f(r)\right] J_{1/2}(kr)\,r\,dr ,
$$

since $\sqrt{2/\pi}\cdot\sqrt{\pi k/2} = \sqrt{k}$ and one factor $r^{1/2}$ is left over after writing the measure as $r\,dr$. The bracket is the function whose order-$\tfrac12$ Hankel transform is taken, which is part 4. $\square$
:::

:::proof[The Mellin theorems]{provenance=adapted src="hassani-2013:§16.3, Problem 16.1, p. 505"}
**Step 1: the strip.** Let $\sigma = \operatorname{Re}z$. Split the integral at $t = 1$ and use the two bounds:

$$
\int_0^1 \lvert f(t)\rvert t^{\,\sigma-1}dt \le C\int_0^1 t^{\,\sigma-a-1}dt ,
\qquad
\int_1^\infty \lvert f(t)\rvert t^{\,\sigma-1}dt \le C\int_1^\infty t^{\,\sigma-b-1}dt .
$$

The first right-hand integral is finite exactly when $\sigma - a > 0$, the second exactly when $\sigma - b < 0$. So both bounds are finite precisely on $a < \sigma < b$, and there the defining integral converges absolutely. Outside that range the bounds say nothing; a particular $f$ may of course decay better than its bounds, which is why the strip is only guaranteed, not determined, by $a$ and $b$. What the hypothesis $a < b$ supplies is that the range is not empty, and emptiness really does happen: for $f(t) = 1/t$, where the two bounds are attained with $a = b = 1$, the integral is $\int_0^\infty t^{\,\sigma-2}dt$, which diverges for every $\sigma$.

**Step 2: holomorphy.** The Leibniz rule for differentiating under the integral sign (:ref[]{to=found.differentiation-under-integral}) is *not* available here, and exhibiting a dominating function does not make it so: that rule is stated for a bounded interval, a real parameter and a real integrand continuous together with its partial derivatives, whereas our interval is $(0,\infty)$, our parameter is complex, and the integrand is unbounded at $t = 0$ whenever $a > 0$. :ref[]{to=spec.gamma-function} records exactly this obstruction for Euler's integral — which is the case $f(t) = e^{-t}$ of the present one, as noted above — and the route taken there is the route taken here: Morera's theorem.

*A dominating function on each closed substrip.* Fix $a < \sigma_1 \le \sigma_2 < b$ and let $S = \{\sigma_1 \le \operatorname{Re}z \le \sigma_2\}$. For $z \in S$ and $t > 0$,

$$
\lvert f(t)\,t^{\,z-1}\rvert \;=\; \lvert f(t)\rvert\,t^{\,\operatorname{Re}z-1}
\;\le\; \lvert f(t)\rvert\bigl(t^{\,\sigma_1-1} + t^{\,\sigma_2-1}\bigr) \;=:\; h(t) ,
$$

the first power dominating on $(0,1]$ and the second on $[1,\infty)$. Step 1, applied at the two abscissas $\sigma_1$ and $\sigma_2$, says $h$ is integrable. Note that $h$ does not depend on $z$.

*Continuity.* If $z_m \to z$ inside $S$ then $f(t)t^{\,z_m-1} \to f(t)t^{\,z-1}$ for each fixed $t$, because $z \mapsto e^{(z-1)\ln t}$ is continuous, and every term is bounded by $h$. So :ref[]{to=measure.dominated-convergence} gives $F(z_m) \to F(z)$. Every point of the open strip is interior to some such $S$, so $F$ is continuous on the strip.

*Closed-contour integrals vanish.* Let $\gamma$ be a closed contour in the strip. Its image is compact, hence contained in some $S$ as above, and

$$
\int_\gamma\!\int_0^\infty \lvert f(t)\,t^{\,z-1}\rvert\,dt\,\lvert dz\rvert
\;\le\; \operatorname{length}(\gamma)\int_0^\infty h(t)\,dt \;<\; \infty ,
$$

so the two integrations may be exchanged (:ref[]{to=measure.fubini-tonelli}):

$$
\oint_\gamma F(z)\,dz \;=\; \int_0^\infty f(t)\left(\oint_\gamma t^{\,z-1}\,dz\right)dt \;=\; 0 ,
$$

each inner integral vanishing by :ref[Cauchy's theorem]{to=complex.cauchy-theorem}, since for fixed $t > 0$ the function $z \mapsto t^{\,z-1} = e^{(z-1)\ln t}$ is entire. A continuous function all of whose closed-contour integrals vanish is holomorphic, by Morera's theorem (part 4 of the consequences in :ref[]{to=complex.cauchy-integral-formula}). Hence $F$ is holomorphic on the strip. Morera delivers holomorphy outright, so no separate appeal to the Cauchy–Riemann equations is needed, and none is made.

*The derivative.* Fix $z$ in the strip and a circle $C = \{\lvert w - z\rvert = r\}$ whose closed disc lies in the strip. Cauchy's formula for the first derivative (:ref[]{to=complex.cauchy-integral-formula}) gives $F'(z) = (2\pi i)^{-1}\oint_C F(w)(w-z)^{-2}dw$, and the exchange above is available again — the extra factor $\lvert w-z\rvert^{-2}$ is the constant $r^{-2}$ on $C$ — so

$$
F'(z) \;=\; \int_0^\infty f(t)\left(\frac{1}{2\pi i}\oint_C \frac{t^{\,w-1}}{(w-z)^{2}}\,dw\right)dt
\;=\; \int_0^\infty f(t)\,(\ln t)\,t^{\,z-1}\,dt ,
$$

the inner integral being the same Cauchy formula applied to the entire function $w \mapsto t^{\,w-1}$, whose derivative at $z$ is $(\ln t)t^{\,z-1}$. That the final integral converges absolutely is the one place the logarithm has to be absorbed into the powers. For $u \ge 1$ and $\varepsilon > 0$ one has $\ln u \le u^{\varepsilon}/\varepsilon$: the difference $u^{\varepsilon}/\varepsilon - \ln u$ equals $1/\varepsilon > 0$ at $u = 1$ and has derivative $u^{\varepsilon-1} - u^{-1} = (u^{\varepsilon}-1)/u \ge 0$ there and beyond; applying it to $u = 1/t$ and to $u = t$ gives $\lvert\ln t\rvert \le \varepsilon^{-1}t^{-\varepsilon}$ on $(0,1]$ and $\lvert\ln t\rvert \le \varepsilon^{-1}t^{\varepsilon}$ on $[1,\infty)$. Choose $\varepsilon$ small enough that $a < \sigma_1 - \varepsilon$ and $\sigma_2 + \varepsilon < b$; then on $S$

$$
\lvert f(t)(\ln t)t^{\,z-1}\rvert \;\le\; \varepsilon^{-1}\lvert f(t)\rvert\bigl(t^{\,\sigma_1-\varepsilon-1} + t^{\,\sigma_2+\varepsilon-1}\bigr) ,
$$

which step 1, applied now at the abscissas $\sigma_1-\varepsilon$ and $\sigma_2+\varepsilon$, makes integrable. This is part 1 of the statement.

**Step 3: the substitution.** Put $t = e^{x}$, so $dt = e^{x}dx$ and $x$ runs over all of $\mathbb{R}$ as $t$ runs over $(0,\infty)$. This is a smooth increasing bijection, so for $z = c + i\xi$,

$$
F(c+i\xi) \;=\; \int_{-\infty}^{\infty} f(e^{x})\,e^{(c+i\xi-1)x}\,e^{x}\,dx
\;=\; \int_{-\infty}^{\infty} \left[e^{cx}f(e^{x})\right] e^{i\xi x}\,dx
\;=\; \int_{-\infty}^{\infty} g(x)\,e^{i\xi x}\,dx .
$$

By step 1 at $\sigma = c$ this converges absolutely, which says exactly that $g \in L^1(\mathbb{R})$. Comparing with $\hat g(k) = \int g(x)e^{-ikx}dx$ gives $F(c+i\xi) = \hat g(-\xi)$, which is part 2 of the statement. Note which way the sign goes: the Mellin variable runs up the line while the Fourier variable runs down it.

**Step 4: inversion.** Suppose further that $f$ is continuous and $\xi \mapsto F(c+i\xi)$ is integrable. Then $g \in L^1$ and $\hat g \in L^1$, so the integrable version of :ref[]{to=fourier.fourier-inversion} applies: $g$ agrees almost everywhere with a continuous function given by the inversion integral. But $g(x) = e^{cx}f(e^{x})$ is already continuous, and two continuous functions equal almost everywhere are equal everywhere, so for every $x$

$$
g(x) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat g(k)\,e^{ikx}\,dk
\;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty} F(c+i\xi)\,e^{-i\xi x}\,d\xi ,
$$

the second form obtained by the substitution $k = -\xi$, which reverses the limits and the sign of the measure, leaving the integral over $\mathbb{R}$ unchanged. Multiply by $e^{-cx}$ and move it inside:

$$
f(e^{x}) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty} F(c+i\xi)\,e^{-(c+i\xi)x}\,d\xi .
$$

Finally write $t = e^{x}$, so $e^{-(c+i\xi)x} = t^{-z}$ with $z = c+i\xi$, and parametrise the vertical line by $z$: along it $dz = i\,d\xi$, so $d\xi = dz/i$ and the limits $\xi = \mp\infty$ become $z = c \mp i\infty$. This turns the display into $f(t) = (2\pi i)^{-1}\int_{c-i\infty}^{c+i\infty}F(z)t^{-z}dz$, which is part 3. Independence of $c$ needs no further argument: if the hypotheses hold at two abscissas in the strip, each of the two integrals equals $f(t)$. (Moving the contour *directly*, by applying Cauchy's theorem to a long rectangle, is a different and stronger statement: it needs $F(\sigma+iT) \to 0$ as $\lvert T\rvert \to \infty$ uniformly for $\sigma$ between the two abscissas, so that the two horizontal sides contribute nothing. That is the kind of hypothesis checked by hand in the second example below.)

**Step 5: the operational rules.** Each is one substitution.

- *Scaling.* $\int_0^\infty f(\lambda t)t^{\,z-1}dt = \lambda^{-z}\int_0^\infty f(u)u^{\,z-1}du$ after $u = \lambda t$, since $t^{\,z-1}dt = \lambda^{-z}u^{\,z-1}du$.
- *Weighting.* $\int_0^\infty t^{\mu}f(t)t^{\,z-1}dt = \int_0^\infty f(t)t^{\,(z+\mu)-1}dt$, which converges whenever $z+\mu$ lies in the original strip.
- *Powers.* $u = t^{p}$ gives $t = u^{1/p}$ and $t^{\,z-1}dt = p^{-1}u^{\,z/p-1}du$, whence $\mathcal{M}[f(t^{p})](z) = p^{-1}F(z/p)$.
- *Reciprocal.* $u = 1/t$ gives $dt = -u^{-2}du$ and reverses the limits, so $\int_0^\infty f(1/t)t^{\,z-1}dt = \int_0^\infty f(u)u^{\,-z-1}du = F(-z)$.
- *The Euler operator.* $Df = tf'$, so $\mathcal{M}[Df](z) = \int_0^\infty f'(t)t^{z}dt$. Integrate by parts: the boundary term is $\left[f(t)t^{z}\right]_0^\infty$, which vanishes by hypothesis, and what is left is $-z\int_0^\infty f(t)t^{\,z-1}dt = -zF(z)$. Applying this to $Df$ in place of $f$ gives $\mathcal{M}[D^{2}f] = -z\,\mathcal{M}[Df] = z^{2}F$, and induction gives $(-z)^{n}F$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$a < b$ is used in step 1 of the Mellin proof**, and is the one condition that can fail outright. The function $f(t) = 1/t$ has $a = b = 1$: the strip is empty and $f$ has no Mellin transform at any $z$. The transform exists only for functions whose behaviour at the two ends leaves a gap between the two exponents, and the width of that gap is the whole freedom in the inversion contour.
- **Integrability of $F$ along the line is used only in step 4**, to invoke the $L^1$ inversion theorem. Without it the inversion integral must be read as a symmetric principal value, exactly as in the corresponding Fourier statement of :ref[]{to=fourier.fourier-inversion}; the formula is not thereby false, but it is a different theorem.
- **Continuity of $f$ is used in step 4** to upgrade "almost everywhere" to "everywhere". It cannot be dropped: changing $f$ at one point changes neither $F$ nor the right-hand side, so the pointwise formula must fail at that point.
- **The vanishing boundary term in rule 5 is a real restriction.** For $f(t) = e^{-t}$ we have $t^{z}f(t) \to 0$ at both ends when $\operatorname{Re}z > 0$, so rule 5 applies. Here $Df = tf' = -te^{-t}$, whose Mellin transform is $-\Gamma(z+1)$ by rule 2, while rule 5 says it is $-z\Gamma(z)$. Equating the two gives $\Gamma(z+1) = z\Gamma(z)$: the functional equation of :ref[]{to=spec.gamma-function} is rule 5 in disguise. For $f \equiv 1$ the boundary term never vanishes, and indeed $f$ has no strip at all.
- **The Schwartz hypothesis in the Hankel theorem is used twice**, and more strongly than necessary. Step 1 needs only $\int_0^\infty\rho\lvert f\rvert d\rho < \infty$, which is what makes $F_0$ defined. Step 2 needs the transform to be integrable too, so that the inverse Fourier integral converges absolutely; Schwartz decay is the cheapest hypothesis that delivers both, and it is preserved by the transform — Corollary 2.2 of :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, §2, Cor. 2.2, p. 181"}, used in step 2 — which is what makes the involution statement clean. Part 3 says that $\mathcal{H}_0$ preserves the norm of $L^2((0,\infty), r\,dr)$, but it says this only on the profiles of radial Schwartz functions. Promoting it to an isometry of the whole space is a further step, in two parts: those profiles must be dense in $L^2((0,\infty), r\,dr)$, and a norm-preserving map defined on a dense subspace must be extended to the closure. Neither is carried out here. Granted them, the inversion formula holds on $L^2$ in the mean-square sense rather than pointwise.
- **Radial symmetry is used in step 1 and again in step 2.** In step 2 it is applied to $\tilde g$, which is legitimate only because step 2 of the proof in :ref[]{to=fourier.fourier-transform-rn} — the step after the orthogonal-commutation lemma, and deduced from it — shows the transform of a radial function is radial. Without that, the inverse transform would not reduce to a one-dimensional integral and there would be no inversion formula of Hankel type.
- **The cancellation of $2\pi$ in step 1 depends on the convention**, not on the mathematics. In the convention $\hat f(\mathbf k) = \int f e^{-i\mathbf k\cdot\mathbf x}d^2x$ of :ref[]{to=fourier.fourier-transform} the same calculation gives $\hat g(k) = 2\pi F_0(k)$, and the inversion formula then carries a compensating $1/(2\pi)$. The Hankel pair itself is unaffected: it has no free constant, because the forward and inverse formulas are the same formula.
:::

:::method[Choosing and using one of these transforms]{provenance=adapted src="stakgold-holst-2011:§7.3, (7.3.40)–(7.3.43), pp. 451–452, and Exercise 7.3.4(d), p. 456"}
1. **Match the transform to the symmetry of the domain.** A problem on $0 < r < \infty$ that is invariant under rotations about an axis — the radial part of a cylindrical or plane-polar problem — calls for a Hankel transform. A problem on $0 < r < \infty$ that is invariant under dilations $r \mapsto \lambda r$ — a wedge, a cone, an equation whose radial part is of Euler type — calls for a Mellin transform. The test is which operator the transform diagonalises: $\frac{1}{r}\partial_r(r\,\partial_r) - \nu^{2}/r^{2}$ for Hankel, $r\,\partial_r$ for Mellin.
2. **Fix the order, or the strip.** For Hankel, the order $\nu$ is set by the angular dependence: separating the Helmholtz equation in plane polars with an angular factor $e^{i\nu\varphi}$ leaves Bessel's equation of order $\nu$ for the radial factor, so a term $e^{i\nu\varphi}$ in the data forces $\mathcal{H}_\nu$. For Mellin, read the strip off the behaviour of the data at $r \to 0$ and $r \to \infty$ using step 1 of the proof, and keep $c$ inside it.
3. **Transform the equation.** The two key identities are these.
   - *Hankel.* If $u$ and $u'$ decay fast enough at both ends that the boundary terms below vanish, then
     $$
     \mathcal{H}_\nu\!\left[\frac{1}{r}\frac{d}{dr}\!\left(r\frac{du}{dr}\right) - \frac{\nu^{2}}{r^{2}}u\right]\!(k) \;=\; -k^{2}\,U_\nu(k) .
     $$
     This is two integrations by parts, with boundary term $\left[r u' J_\nu(kr) - r u \frac{d}{dr}J_\nu(kr)\right]_0^\infty$, followed by the observation that $J_\nu(kr)$ satisfies Bessel's equation in the form $(r y')' - (\nu^2/r)y = -k^2 r y$, so the surviving integral is $-k^2\int_0^\infty u J_\nu(kr) r\,dr$. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§7.3, (7.3.41), p. 452"} perform exactly this step on the ring-source problem.
   - *Mellin.* Multiply the equation by $r^{2}$ first. In plane polars $r^{2}\nabla^{2}u = D^{2}u + \partial_\varphi^{2}u$ with $D = r\,\partial_r$, so applying $\int_0^\infty (\cdot)\,r^{\,s-1}dr$ and rule 5 turns $\nabla^2 u = 0$ into the ordinary differential equation
     $$
     \frac{\partial^{2}U}{\partial\varphi^{2}}(s,\varphi) + s^{2}U(s,\varphi) \;=\; 0 ,
     \qquad U(s,\varphi) = \int_0^\infty u(r,\varphi)\,r^{\,s-1}\,dr .
     $$
4. **Solve the transformed problem.** It is an ordinary differential equation in the remaining variable, or an algebraic equation if only one variable is left. Impose the boundary conditions, transformed the same way.
5. **Invert.** For Hankel, apply $\mathcal{H}_\nu$ again. For Mellin, evaluate $(2\pi i)^{-1}\int_{c-i\infty}^{c+i\infty}F(z)t^{-z}dz$ — usually by closing the contour to one side and summing residues, which is legitimate when the integrand's contribution over the closing sides tends to zero; see :ref[]{to=complex.residue-theorem} and the second example below for how that is checked.
6. **Check the strip at the end.** The poles of the transformed solution tell you where the contour may be placed and hence which behaviour at $r = 0$ and $r = \infty$ the solution has. A pole crossed when the contour is shifted contributes a power of $r$ to the answer; this is how Mellin inversion produces asymptotic expansions, discussed in :ref[]{to=asym.asymptotic-series}.
:::

:::example[The Gaussian is its own order-zero Hankel transform]{provenance=original}
Take $f(r) = e^{-\alpha r^{2}}$ with $\alpha > 0$. Then $g(\boldsymbol\rho) = e^{-\alpha\lvert\boldsymbol\rho\rvert^{2}}$ is radial and Schwartz on $\mathbb{R}^2$, so the theorem applies and $F_0 = \tilde g$. Compute $\tilde g$ by factorising rather than by the radial integral.

**Step 1: factorise.** With $\boldsymbol\rho = (x,y)$ and $\mathbf{k} = (k_1,k_2)$,

$$
e^{-\alpha(x^{2}+y^{2})} \;=\; e^{-\alpha x^{2}}\,e^{-\alpha y^{2}} ,
$$

a product of one-dimensional factors, so by the separability rule — item 5 of :ref[]{to=fourier.fourier-transform-rn} — the two-dimensional transform is the product of the two one-dimensional ones.

Keep the normalisation in view, because it is the one place this calculation can go wrong. In item 5 each factor is itself a transform in the symmetric convention, so each carries its own $(2\pi)^{-1/2}$, and the two together supply $(2\pi)^{-1/2}\cdot(2\pi)^{-1/2} = 1/2\pi$ — the same $1/2\pi$ that the two-dimensional symmetric convention carries, as it must be. Steps 2 and 3 below therefore compute the two *un-normalised* integrals and apply that single factor $1/2\pi$ once, at the end. Dividing by $\sqrt{2\pi}$ inside each factor *and* by $2\pi$ at the end would divide by $2\pi$ twice.

**Step 2: one dimension, un-normalised.** By :ref[]{to=found.gaussian-integrals}, completing the square in the exponent gives

$$
\int_{-\infty}^{\infty} e^{-\alpha x^{2}}e^{-ik_1x}\,dx \;=\; \sqrt{\frac{\pi}{\alpha}}\;e^{-k_1^{2}/4\alpha} .
$$

**Step 3: multiply and normalise.** Multiplying the two un-normalised answers, one in $k_1$ and one in $k_2$, gives $(\pi/\alpha)\,e^{-(k_1^{2}+k_2^{2})/4\alpha}$; the two prefactors set aside in step 1 now divide this by $2\pi$ in total, and by nothing further, so with $k^{2} = k_1^{2}+k_2^{2}$

$$
F_0(k) \;=\; \tilde g(k) \;=\; \frac{1}{2\pi}\cdot\frac{\pi}{\alpha}\,e^{-k^{2}/4\alpha}
\;=\; \frac{1}{2\alpha}\,e^{-k^{2}/4\alpha} .
$$

**Step 4: read off the fixed point.** The transform is again a Gaussian, with $\alpha$ replaced by $1/4\alpha$ and multiplied by $1/2\alpha$. It equals the original exactly when $1/2\alpha = 1$ and $1/4\alpha = \alpha$, both of which say $\alpha = \tfrac12$. So

$$
\int_0^\infty e^{-r^{2}/2}\,J_0(kr)\,r\,dr \;=\; e^{-k^{2}/2} ,
$$

and $e^{-r^2/2}$ is a fixed point of $\mathcal{H}_0$, as the Gaussian is of the Fourier transform. Consistency check on the involution: applying the formula of step 3 twice sends $\alpha \mapsto 1/4\alpha$ with prefactor $1/2\alpha$, then $1/4\alpha \mapsto \alpha$ with prefactor $1/(2\cdot\tfrac{1}{4\alpha}) = 2\alpha$, and the two prefactors multiply to $1$ — which is part 2 of the theorem, verified by hand.

**A number.** At $\alpha = \tfrac12$ and $k = 2$ the formula gives

$$
\int_0^\infty e^{-r^{2}/2}\,J_0(2r)\,r\,dr \;=\; e^{-2} \;=\; 0.1353352832\ldots ,
$$

and numerical quadrature of the left-hand side returns $0.135335283236612\ldots$, agreeing to every digit shown.
:::

:::example[A Mellin pair, and recovering the function by residues]{provenance=original}
Take $f(t) = 1/(1+t)$ on $(0,\infty)$.

**Step 1: the strip.** As $t \to 0^{+}$, $f(t) \to 1$, so $\lvert f(t)\rvert \le 1 = 1\cdot t^{0}$ on $(0,1]$ and the exponent at the origin is $a = 0$. As $t \to \infty$, $f(t) \le 1/t$, so the exponent at infinity is $b = 1$. By step 1 of the proof the strip is

$$
0 \;<\; \operatorname{Re}z \;<\; 1 ,
$$

and it does not contain the imaginary axis — which is the point made in the note on conventions above.

**Step 2: evaluate the transform.** For $0 < \operatorname{Re}z < 1$ the integral $\int_0^\infty t^{\,z-1}(1+t)^{-1}dt$ is the half-line form of Euler's Beta integral, part 4 of :ref[]{to=spec.beta-function} at $p = z$ and $q = 1-z$: there $p+q = 1$, so the denominator is $(1+t)^{1}$, and the two hypotheses $\operatorname{Re}p > 0$ and $\operatorname{Re}q > 0$ are precisely the two edges of our strip. So the integral is $B(z,1-z) = \Gamma(z)\Gamma(1-z)$, and part 6 of the same unit evaluates that by the reflection formula of :ref[]{to=spec.gamma-function} as $\pi/\sin\pi z$ — for complex $z$ in the strip, which is what is needed here, and not merely for real exponents.

The keyhole-contour computation of :ref[]{to=complex.branch-cut-integrals} returns the same value, but it is carried out there for a *real* exponent $0 < p < 1$, so on its own it settles only the real segment of the strip. It reaches the rest by continuation: both sides are holomorphic on the strip, the left by part 1 of the strip theorem and the right because $\sin\pi z$ has no zero there, and two holomorphic functions agreeing on a segment agree on the connected open set containing it, by the identity theorem of :ref[]{to=complex.analytic-continuation}. Either way

$$
F(z) \;=\; \mathcal{M}\!\left[\frac{1}{1+t}\right]\!(z) \;=\; \frac{\pi}{\sin \pi z} ,
\qquad 0 < \operatorname{Re}z < 1 .
$$

Observe the consistency: $\pi/\sin\pi z$ is holomorphic exactly on $\mathbb{C}\setminus\mathbb{Z}$, and its poles nearest the strip sit at $z = 0$ and $z = 1$, the two endpoints predicted by step 1. This is the usual picture: the ends of the strip are set by how $f$ behaves at $0$ and at $\infty$, and they are where the analytic continuation of $F$ first becomes singular.

**A number.** At $z = \tfrac12$ the formula gives $F(\tfrac12) = \pi/\sin(\pi/2) = \pi$, that is

$$
\int_0^\infty \frac{dt}{\sqrt{t}\,(1+t)} \;=\; \pi \;=\; 3.14159265\ldots ,
$$

which is checked in three lines without any of the above: substituting $t = u^{2}$ turns the left-hand side into $2\int_0^\infty du/(1+u^{2}) = 2\cdot\tfrac{\pi}{2} = \pi$. Numerical quadrature returns $3.1415926535897932\ldots$

**Step 3: invert, and get a series for free.** Fix $c$ with $0 < c < 1$ and take $t > 1$. In the inversion integral $(2\pi i)^{-1}\int_{c-i\infty}^{c+i\infty}\pi t^{-z}(\sin\pi z)^{-1}dz$ the factor $t^{-z} = e^{-z\ln t}$ decays as $\operatorname{Re}z \to +\infty$, because $\ln t > 0$; and $1/\sin\pi z$ decays like $e^{-\pi\lvert\operatorname{Im}z\rvert}$ away from the real axis. So close the contour to the right. Take the rectangle with vertical sides $\operatorname{Re}z = c$ and $\operatorname{Re}z = N+\tfrac12$ and horizontal sides $\operatorname{Im}z = \pm T$, and let $T \to \infty$ first and then $N \to \infty$ through the integers. On the horizontal sides $\lvert\sin\pi z\rvert \ge \sinh\pi T$, and the sides have length $N + \tfrac12 - c$, so their contribution is at most $(N+\tfrac12-c)\,\pi t^{-c}/\sinh\pi T$, which tends to $0$ as $T \to \infty$ with $N$ fixed. On the right-hand side, $\lvert\sin\pi(N+\tfrac12+iy)\rvert = \cosh\pi y$, so that edge contributes at most

$$
\pi\,t^{-(N+1/2)}\int_{-\infty}^{\infty}\frac{dy}{\cosh \pi y} \;=\; \pi\,t^{-(N+1/2)} ,
$$

using $\int_{-\infty}^{\infty}\operatorname{sech}(\pi y)\,dy = 1$; and this tends to $0$ as $N \to \infty$ because $t > 1$. For each fixed $N$ the rectangle encloses the poles $z = 1,\dots,N$ and no others, so the residue theorem applies to it; traversed anticlockwise it runs *down* the side $\operatorname{Re}z = c$, so letting $T \to \infty$ and then $N \to \infty$ leaves

$$
\frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty}\frac{\pi\,t^{-z}}{\sin\pi z}\,dz \;=\; -\sum_{n=1}^{\infty}\operatorname*{Res}_{z=n}\frac{\pi\,t^{-z}}{\sin\pi z} .
$$

The poles to the right of the line are $z = 1, 2, 3, \dots$, and at $z = n$ the function $\sin\pi z$ has a simple zero with derivative $\pi\cos\pi n = \pi(-1)^{n}$, so

$$
\operatorname*{Res}_{z=n}\,\frac{\pi\,t^{-z}}{\sin\pi z} \;=\; \frac{\pi\,t^{-n}}{\pi(-1)^{n}} \;=\; (-1)^{n}t^{-n} .
$$

By :ref[]{to=complex.residue-theorem},

$$
f(t) \;=\; -\sum_{n=1}^{\infty}(-1)^{n}t^{-n}
\;=\; \sum_{n=1}^{\infty}(-1)^{n+1}t^{-n}
\;=\; \frac{1/t}{1+1/t}
\;=\; \frac{1}{1+t} ,
$$

the geometric series converging for $t > 1$. The inversion has returned the function we started from, and in the form of its expansion at large $t$. Closing to the left instead picks up the poles at $z = 0,-1,-2,\dots$ with residues $(-1)^n t^{n}$ and reproduces the expansion $1 - t + t^{2} - \cdots$ valid for $t < 1$. This is the mechanism of step 6 of the method: which way the contour is closed decides which end of the range the resulting expansion describes.
:::

:::application[Axisymmetric potentials in cylindrical coordinates]{provenance=adapted src="stakgold-holst-2011:§7.3, (7.3.40)–(7.3.45), pp. 451–452"}
The Hankel transform is the natural tool for a field produced by a source with an axis of symmetry. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§7.3, (7.3.40)–(7.3.43), pp. 451–452"} take steady heat conduction with absorption, $-\nabla^{2}u + k^{2}u = \text{source}$, driven by a unit ring of sources at radius $a$ in the plane $z = 0$. Because the source and the domain are invariant under rotation about the $z$ axis, an order-zero Hankel transform in the cylindrical radius $r$ removes that variable, exactly as in step 3 of the method; what is left is a one-dimensional problem in $z$, solved by requiring decay as $z \to \pm\infty$, and the answer is read back as an inverse Hankel transform.

The payoff of that calculation is a representation theorem. Letting the ring shrink to a point source at the origin, the solution must agree with the familiar screened potential $e^{-k\sqrt{r^{2}+z^{2}}}/4\pi\sqrt{r^{2}+z^{2}}$, and comparing the two expressions gives what they attribute in essence to Sommerfeld: a spherically symmetric function is written as a superposition of cylindrical waves. At $k = 0$ it reduces to

$$
\frac{1}{\sqrt{r^{2}+z^{2}}} \;=\; \int_0^\infty J_0(\gamma r)\,e^{-\gamma\lvert z\rvert}\,d\gamma ,
$$

which is :cite[their]{work=stakgold-holst-2011 loc="§7.3, (7.3.45), p. 452"} formula (7.3.45). Read as a Hankel transform it says that the order-zero transform of $\gamma \mapsto e^{-\gamma\lvert z\rvert}/\gamma$ is the Coulomb potential at height $z$ above the plane; read physically it resolves a point charge into plane-parallel modes, which is what one wants near a conducting plate or a layered medium, where each mode can be reflected separately. As a check at $r = 1$, $z = \tfrac12$, both sides equal $2/\sqrt5 = 0.8944271909999\ldots$

The same identity is the reason the Hankel transform appears in Green's function constructions for layered problems; compare the direct constructions of :ref[]{to=green.laplace-green-functions}.
:::

:::application[Diffraction by a circular aperture, and a wedge]{provenance=original}
**The Airy pattern.** In the Fraunhofer regime the amplitude diffracted into a direction is proportional to the two-dimensional Fourier transform of the aperture function, as the one-dimensional version in :ref[]{to=fourier.fourier-transform} explains. For a circular hole of radius $a$ the aperture function is radial — it is $1$ for $r < a$ and $0$ beyond — so by part 1 of the Hankel theorem the amplitude is an order-zero Hankel transform:

$$
F_0(k) \;=\; \int_0^{a} J_0(kr)\,r\,dr \;=\; \frac{a}{k}\,J_1(ka) .
$$

The evaluation is one line from the recurrence $\frac{d}{dx}\left[xJ_1(x)\right] = xJ_0(x)$ of :ref[]{to=spec.bessel-first-kind}: substituting $x = kr$ turns the integral into $k^{-2}\int_0^{ka}xJ_0(x)dx = k^{-2}\left[xJ_1(x)\right]_0^{ka}$, and $xJ_1(x)$ vanishes at $0$.

The intensity is $\lvert F_0\rvert^{2}$, that is the Airy pattern $\left[2J_1(ka)/(ka)\right]^{2}$ up to normalisation, and its first dark ring sits at the first positive zero of $J_1$, namely $ka = 3.831705970\ldots$ With $k = (2\pi/\lambda)\sin\theta$ and aperture diameter $D = 2a$ this is

$$
\sin\theta \;=\; \frac{3.831705970}{\pi}\cdot\frac{\lambda}{D} \;=\; 1.2197\,\frac{\lambda}{D} ,
$$

the Rayleigh resolution limit of a telescope or a microscope objective, usually quoted as $1.22\lambda/D$. The factor $1.22$ is nothing but the first zero of $J_1$ divided by $\pi$. Had the aperture been a slit rather than a hole, the same argument in one dimension would have given the first zero of $\sin$, and the factor would have been $1$: the extra $22\%$ is the price of the circular geometry, and it enters through $J_1$ rather than through any physics.

**A wedge.** The Mellin counterpart is the Laplace equation in a wedge $0 < \varphi < \alpha$ of infinite extent, with $u = 0$ on one face and prescribed data $h(r)$ on the other — the problem set as Exercise 7.3.4(d) by :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§7.3, Exercise 7.3.4(d), p. 456"}. The domain is invariant under $r \mapsto \lambda r$ and has no length scale, so by step 1 of the method the Mellin transform is the right one. Step 3 turns the problem into $U_{\varphi\varphi} + s^{2}U = 0$ with $U(s,0) = 0$ and $U(s,\alpha) = H(s)$, whose solution is

$$
U(s,\varphi) \;=\; H(s)\,\frac{\sin s\varphi}{\sin s\alpha} ,
$$

and $u$ is recovered by one inverse Mellin integral. The poles of $1/\sin s\alpha$, at the points $s = m\pi/\alpha$ with $m \in \mathbb{Z}$, are the physics. Near the corner $r$ is small, so $\lvert r^{-s}\rvert = r^{-\sigma}$ is small for very negative $\sigma$ and the contour is pushed to the left; each pole it crosses, at $s = -m\pi/\alpha$ with $m = 1,2,\dots$, contributes a term in $r^{\,m\pi/\alpha}$. The pole at $s = 0$ contributes nothing, because the zero of $\sin s\varphi$ there cancels it. So the leading behaviour at the tip is $r^{\,\pi/\alpha}$, set by the opening angle alone. For a re-entrant wedge, $\alpha > \pi$, the exponent is less than $1$ and the gradient blows up at the tip — the standard corner singularity that forces mesh refinement in numerical work and concentrates stress or electric field at a sharp edge.
:::
