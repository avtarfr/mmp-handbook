---
id: fourier.fourier-transform-rn
title: Fourier transform in several dimensions
kind: method
level: core
summary: "How to compute Fourier transforms on $\\mathbb{R}^n$: factorise when the function is a product, reduce to a single radial integral when it is spherically symmetric, and read off the transforms of the Yukawa and Coulomb potentials."
prereqs: [fourier.fourier-transform, fourier.fourier-inversion, found.gaussian-integrals, measure.fubini-tonelli, measure.dominated-convergence]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§13.1.10, the three-dimensional transform pair (13.47)–(13.50), the delta representation (13.51), the worked example reducing a spherically symmetric transform to a radial integral, and the two-dimensional result (13.52), pp. 451–453"
    pages: "451-453"
    role: the convention used throughout this unit, the transform pair and delta representation in $\\mathbb{R}^3$, and the reduction of a radial transform to one integral by choosing the polar axis along $\\mathbf{k}$
  - work: hassani-2013
    loc: "§9.2, Example 9.2.3 (Fourier transform of the Coulomb and Yukawa potentials) with the full computation, pp. 282–283; Example 9.2.4 (extended charge distribution and the form factor), pp. 283–284; the $r$- and $k$-representation discussion, p. 282"
    pages: "282-284"
    role: the Yukawa computation followed in the worked example, the reading of $\\alpha$ as an inverse range, the passage to the Coulomb limit, and the form-factor application
  - work: arfken-2013
    loc: "§20.2, the three-dimensional transform pair (20.36)–(20.37) and its reading as an expansion in plane waves, p. 973; Example 20.2.5, the transforms of the Yukawa potential (20.41), of $1/r$ (20.42), of $1/r^2$ (20.43) and of the hydrogenic $1s$ orbital (20.44), pp. 973–974"
    pages: "973-974"
    role: the alternative sign convention, the transform results quoted for comparison, the warning that $1/r$ cannot be transformed directly, and the parameter-differentiation trick giving the transform of $e^{-Zr}$
  - work: stein-shakarchi-2003
    loc: "Ch. 6, §2, the definition of $\\hat f$ on $\\mathbb{R}^d$ and Prop. 2.1 (i)–(vi) including the rotation rule, p. 181; the definition of a radial function and Cor. 2.3, p. 182; Thm 2.4 (inversion and Plancherel on $\\mathbb{R}^d$) with its proof, of which Step 1 is the separability of the Gaussian and Step 4 the convolution rule, pp. 182–184"
    pages: "181-184"
    role: the transformation rules in $d$ dimensions, the proof that the transform commutes with rotations and hence maps radial functions to radial functions, the separability of the Gaussian, and the statements of inversion and Plancherel in $d$ dimensions
  - work: strauss-2008
    loc: "§12.3, 'Three dimensions', the transform pair in $\\mathbb{R}^3$ and the inversion formula, p. 348"
    pages: "348"
    role: the same pair in the angular-frequency convention without a symmetric prefactor, used in the note on conventions
---

:::definition[The transform on $\mathbb{R}^n$, and the convention of this unit]{provenance=adapted src="rhb-2006:§13.1.10, (13.47)–(13.50), p. 452; stein-shakarchi-2003:Ch. 6, §2, p. 181"}
For $f : \mathbb{R}^n \to \mathbb{C}$ absolutely integrable, **this unit uses throughout** the symmetric convention of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.10, (13.49)–(13.50), p. 452"}:

$$
\tilde f(\mathbf{k}) = \frac{1}{(2\pi)^{n/2}}\int_{\mathbb{R}^n} f(\mathbf{r})\,e^{-i\mathbf{k}\cdot\mathbf{r}}\,d^n r ,
\qquad
f(\mathbf{r}) = \frac{1}{(2\pi)^{n/2}}\int_{\mathbb{R}^n}\tilde f(\mathbf{k})\,e^{i\mathbf{k}\cdot\mathbf{r}}\,d^n k ,
$$

with $\mathbf{k}\cdot\mathbf{r} = k_1r_1+\cdots+k_nr_n$ and $d^nr$ Lebesgue measure. Writing $\mathbf k\cdot\mathbf r$ as a sum shows that the kernel factorises, $e^{-i\mathbf k\cdot\mathbf r} = \prod_{j=1}^n e^{-ik_jr_j}$: the $n$-dimensional transform is $n$ one-dimensional transforms, one per coordinate. Composing the two formulas gives the delta representation $\delta^{(n)}(\mathbf r) = (2\pi)^{-n}\int e^{i\mathbf k\cdot\mathbf r}d^nk$ of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.10, (13.51), p. 452"}; see :ref[delta identities]{to=fourier.delta-identities}.

A function $f$ on $\mathbb{R}^n$ is **radial** (spherically symmetric) if it depends only on $\lvert\mathbf r\rvert$, that is if there is $f_0$ on $[0,\infty)$ with $f(\mathbf r) = f_0(\lvert\mathbf r\rvert)$. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, §2, p. 182"} note the equivalent formulation: $f$ is radial exactly when $f(R\mathbf r) = f(\mathbf r)$ for every rotation $R$, because any two points of the same length are carried onto one another by some rotation. We write $r = \lvert\mathbf r\rvert$ and $k = \lvert\mathbf k\rvert$ and abuse notation by writing $f(r)$ and $\tilde f(k)$.
:::

:::note[Conventions in the sources]{provenance=adapted src="arfken-2013:§20.2, (20.36)–(20.37), p. 973; stein-shakarchi-2003:Ch. 6, §2, p. 181; strauss-2008:§12.3, p. 348"}
The three conventions in the cited books differ in the prefactor and in the sign in the exponent.

| Source | Forward transform | Inverse |
|---|---|---|
| This unit, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="(13.49), p. 452"}, :cite[Hassani]{work=hassani-2013 loc="§9.2, p. 282"} | $(2\pi)^{-n/2}\int f e^{-i\mathbf k\cdot\mathbf r}d^nr$ | $(2\pi)^{-n/2}\int \tilde f e^{+i\mathbf k\cdot\mathbf r}d^nk$ |
| :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="(20.36)–(20.37), p. 973"} | $(2\pi)^{-3/2}\int f e^{+i\mathbf k\cdot\mathbf r}d^3r$ | $(2\pi)^{-3/2}\int g e^{-i\mathbf k\cdot\mathbf r}d^3k$ |
| :cite[Strauss]{work=strauss-2008 loc="§12.3, p. 348"} | $\int f e^{-i\mathbf k\cdot\mathbf x}d\mathbf x$ | $(2\pi)^{-3}\int F e^{+i\mathbf k\cdot\mathbf x}d\mathbf k$ |
| :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, §2, p. 181"} | $\int f(x)e^{-2\pi i x\cdot\xi}dx$ | $\int \hat f(\xi)e^{2\pi i x\cdot\xi}d\xi$ |

Converting is mechanical: Strauss's $F$ is $(2\pi)^{n/2}\tilde f$, Stein and Shakarchi's $\hat f(\xi)$ is $(2\pi)^{n/2}\tilde f(2\pi\xi)$, and Arfken's $g(\mathbf k)$ is $\tilde f(-\mathbf k)$. Arfken's opposite sign is invisible on radial functions, because their transforms are even. Two ways to see it: item 4 of the rules below applies to $R = -I$, which is orthogonal in every dimension (though a rotation only when $n$ is even, since $\det(-I) = (-1)^n$), and gives $\tilde f(-\mathbf k) = \widetilde{f(-\,\cdot\,)}(\mathbf k) = \tilde f(\mathbf k)$ for even $f$; or directly, $\sin(\mathbf k\cdot\mathbf r)$ integrates to zero against a radial density. Either way, every result quoted from Arfken below is radial, so the two conventions agree there. When a statement of :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, Prop. 2.1 and Thm 2.4, pp. 181–183"} is used below it is restated in the convention of this unit, never mixed with it.
:::

:::statement[Rules in $n$ dimensions]{provenance=adapted src="stein-shakarchi-2003:Ch. 6, Prop. 2.1 and Thm 2.4, pp. 181–183; rhb-2006:§13.1.10, pp. 451–452"}
Let $f$ lie in the Schwartz space $\mathcal{S}(\mathbb{R}^n)$ of smooth functions all of whose derivatives decay faster than every power of $1/\lvert\mathbf r\rvert$. Then, in the convention of this unit:

1. **Translation and modulation.** $f(\mathbf r + \mathbf h) \longmapsto e^{i\mathbf k\cdot\mathbf h}\tilde f(\mathbf k)$ and $e^{i\mathbf h\cdot\mathbf r}f(\mathbf r)\longmapsto \tilde f(\mathbf k - \mathbf h)$.
2. **Dilation.** For $\delta > 0$, $f(\delta\mathbf r)\longmapsto \delta^{-n}\tilde f(\mathbf k/\delta)$.
3. **Derivatives.** $\partial f/\partial r_j \longmapsto i k_j \tilde f(\mathbf k)$, hence $\nabla f \longmapsto i\mathbf k\tilde f$ and $\nabla^2 f\longmapsto -\lvert\mathbf k\rvert^2\tilde f$. Conversely $-ir_jf(\mathbf r)\longmapsto \partial\tilde f/\partial k_j$.
4. **Rotations and reflections.** $f(R\mathbf r)\longmapsto \tilde f(R\mathbf k)$ for every orthogonal $R$. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, Prop. 2.1 (vi), p. 181"} state this for rotations; the proof below uses only $\lvert\det R\rvert = 1$ and $R^{-1} = R^{\mathsf T}$, so it covers the orthogonal matrices of determinant $-1$ as well, $R = -I$ in odd dimensions among them.
5. **Separability.** If $f(\mathbf r) = \prod_{j=1}^n f_j(r_j)$ then $\tilde f(\mathbf k) = \prod_{j=1}^n \tilde f_j(k_j)$, each factor a one-dimensional transform.
6. **Inversion and Plancherel.** The inverse formula above recovers $f$, and $\int_{\mathbb{R}^n}\lvert\tilde f\rvert^2 d^nk = \int_{\mathbb{R}^n}\lvert f\rvert^2 d^nr$.
7. **Convolution.** $\widetilde{f*g}(\mathbf k) = (2\pi)^{n/2}\tilde f(\mathbf k)\tilde g(\mathbf k)$, where $(f*g)(\mathbf r) = \int f(\mathbf y)g(\mathbf r-\mathbf y)d^ny$.

Items 1–4 are :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 6, Prop. 2.1 (i)–(vi), p. 181"} Proposition 2.1 (item 4 for rotations, as noted there); item 5 is the factorisation carried out in Step 1 of the proof of their :cite[Theorem 2.4]{work=stein-shakarchi-2003 loc="Ch. 6, Thm 2.4, Step 1, pp. 182–183"}, where it is applied to the Gaussian, and in general it is immediate from the product form of the kernel recorded in the definition above; items 6–7 are that theorem and Step 4 of its proof. All are restated here in our convention; the prefactor in item 7 is the price of the symmetric normalisation and is absent in theirs.
:::

:::statement[Radial functions, and the radial reduction]{provenance=adapted src="stein-shakarchi-2003:Ch. 6, Cor. 2.3, p. 182; rhb-2006:§13.1.10, worked example and (13.52), pp. 452–453"}
**Radial in, radial out.** If $f \in \mathcal{S}(\mathbb{R}^n)$ is radial then $\tilde f$ is radial.

**Reduction in three dimensions.** If $f(\mathbf r) = f(r)$ is radial on $\mathbb{R}^3$ and $\int_0^\infty r^2\lvert f(r)\rvert\,dr < \infty$, then for $k > 0$

$$
\tilde f(k) = \frac{1}{(2\pi)^{3/2}}\int_0^\infty 4\pi r^2 f(r)\,\frac{\sin kr}{kr}\,dr
= \frac{1}{(2\pi)^{3/2}}\,\frac{4\pi}{k}\int_0^\infty r\,f(r)\,\sin(kr)\,dr ,
$$

and $\tilde f(0) = (2\pi)^{-3/2}\int_0^\infty 4\pi r^2 f(r)\,dr$, the value obtained by letting $k \to 0$.

**Reduction in two dimensions.** If $f(\boldsymbol\rho) = f(\rho)$ is radial on $\mathbb{R}^2$ and $\int_0^\infty \rho\lvert f(\rho)\rvert\,d\rho < \infty$ — the same absolute-convergence condition as above, with $r^{n-1}$ in place of $r^2$, needed to interchange the radial and angular integrations — then, by :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.10, (13.52), p. 453"}, who state the formula without a convergence hypothesis,

$$
\tilde f(k) = \frac{1}{2\pi}\int_0^\infty 2\pi\rho\,f(\rho)\,J_0(k\rho)\,d\rho ,
$$

with $J_0$ the :ref[Bessel function of order zero]{to=spec.bessel-first-kind}. The $n$-dimensional version of this, and its inversion, is the Hankel transform; see :ref[Hankel and Mellin transforms]{to=fourier.hankel-mellin}.
:::

:::idea{provenance=original}
Two structural facts do all the work, and they pull in opposite directions. Factorisation says that if the function splits as a product over coordinates, so does its transform, which reduces an $n$-fold integral to $n$ one-fold ones; this is how the Gaussian is handled. Rotation invariance says that the transform commutes with rotations, so a function with no preferred direction has a transform with no preferred direction either; this lets us align the axes with $\mathbf k$ after the fact, which collapses the angular part of the integral and again leaves a single radial integral. In three dimensions the angular integral is elementary — the exponential $e^{-ikr\cos\theta}$ integrates against $\sin\theta\,d\theta$ to give $2\sin(kr)/(kr)$ — and everything reduces to a sine transform of $rf(r)$. The Coulomb potential then needs one more idea: its integral does not converge, so it is reached as the limit of the Yukawa potential, whose exponential factor supplies the missing decay.
:::

:::proof[Rotations, and the radial reduction]{provenance=adapted src="stein-shakarchi-2003:Ch. 6, Prop. 2.1 (vi) and Cor. 2.3, pp. 181–182; rhb-2006:§13.1.10, worked example, p. 452"}
**Step 1: the transform commutes with orthogonal maps.** Let $R$ be orthogonal and $g(\mathbf r) = f(R\mathbf r)$. Substituting $\mathbf y = R\mathbf r$, whose Jacobian has $\lvert\det R\rvert = 1$ (the determinant itself is $\pm1$, and only its modulus enters),

$$
\tilde g(\mathbf k) = \frac{1}{(2\pi)^{n/2}}\int f(R\mathbf r)e^{-i\mathbf k\cdot\mathbf r}d^nr
= \frac{1}{(2\pi)^{n/2}}\int f(\mathbf y)\,e^{-i\mathbf k\cdot R^{-1}\mathbf y}\,d^ny .
$$

Because $R$ is orthogonal, $R^{-1} = R^{\mathsf T}$ and hence $\mathbf k\cdot R^{-1}\mathbf y = R\mathbf k\cdot\mathbf y$, so the last integral is $\tilde f(R\mathbf k)$. This is item 4 of the rules, in the orthogonal generality stated there; rotations are the case $\det R = +1$, which is the one :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, Prop. 2.1 (vi), p. 181"} state.

**Step 2: radial in, radial out.** If $f$ is radial then $f(R\mathbf r) = f(\mathbf r)$ for every rotation $R$, so step 1 gives $\tilde f(R\mathbf k) = \tilde f(\mathbf k)$ for every $R$; by the same equivalence, $\tilde f$ is radial. The only property of $f$ used is its rotation invariance, which is why this holds in every dimension.

**Step 3: choose the axis after the fact.** Now let $n = 3$ and let $f$ be radial. By step 2 we may compute $\tilde f$ at any one $\mathbf k$ of length $k$ and the answer will serve for all of them, so choose spherical polar coordinates with the polar axis along $\mathbf k$. Then $\mathbf k\cdot\mathbf r = kr\cos\theta$ and $d^3r = r^2\sin\theta\,dr\,d\theta\,d\varphi$, giving

$$
\tilde f(k) = \frac{1}{(2\pi)^{3/2}}\int_0^\infty\!\!\int_0^\pi\!\!\int_0^{2\pi} f(r)\,e^{-ikr\cos\theta}\,r^2\sin\theta\,d\varphi\,d\theta\,dr .
$$

The hypothesis $\int_0^\infty r^2\lvert f\rvert dr<\infty$ makes the triple integral absolutely convergent, so by :ref[Fubini's theorem]{to=measure.fubini-tonelli} it may be evaluated in any order. This is the step that fails for the Coulomb potential.

**Step 4: do the angles.** Nothing depends on $\varphi$, so that integral contributes $2\pi$. For the polar angle substitute $u = \cos\theta$, $du = -\sin\theta\,d\theta$:

$$
\int_0^\pi e^{-ikr\cos\theta}\sin\theta\,d\theta = \int_{-1}^{1}e^{-ikru}\,du = \frac{e^{ikr}-e^{-ikr}}{ikr} = \frac{2\sin kr}{kr} .
$$

**Step 5: collect.** Multiplying the three pieces,

$$
\tilde f(k) = \frac{2\pi}{(2\pi)^{3/2}}\int_0^\infty r^2 f(r)\,\frac{2\sin kr}{kr}\,dr = \frac{1}{(2\pi)^{3/2}}\frac{4\pi}{k}\int_0^\infty r f(r)\sin(kr)\,dr ,
$$

which is the claim. As $k\to 0$ the factor $\sin(kr)/(kr)\to1$ pointwise and is bounded by $1$ everywhere, so $\lvert 4\pi r^2f(r)\sin(kr)/(kr)\rvert \le 4\pi r^2\lvert f(r)\rvert$, which is integrable by hypothesis; :ref[dominated convergence]{to=measure.dominated-convergence} then gives $\tilde f(0) = (2\pi)^{-3/2}\int 4\pi r^2 f(r)dr$, the total mass of $f$ up to the prefactor. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Absolute convergence is used in step 3**, to interchange the three integrations. For $f(r) = 1/r$ the radial integral $\int_0^\infty r^2\cdot r^{-1}dr = \int_0^\infty r\,dr$ diverges, so the hypothesis fails and the reduction is not available. Both :cite[Hassani]{work=hassani-2013 loc="§9.2, Example 9.2.3, p. 282"} and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.2, Example 20.2.5, p. 974"} say so explicitly and obtain the Coulomb transform only as a limit. Note that the trouble is at infinity, not at the origin: $r^2\cdot r^{-1}$ is perfectly integrable near $0$, which is why the singular-looking $1/r$ is in fact the easy end.
- **Rotation invariance of $f$ is used in step 3**, and nowhere else. Without it, aligning the axis with $\mathbf k$ would change the integrand, and the angular integral would not collapse. For a function with an axis of symmetry but not full spherical symmetry the same trick gives a double, not a single, integral.
- **Orthogonality of $R$, not just invertibility, is used in step 1**, twice: once for $\lvert\det R\rvert = 1$, so the volume element is unchanged, and once for $\mathbf k\cdot R^{-1}\mathbf y = R\mathbf k\cdot\mathbf y$. A general linear change of variables $A$ gives instead $f(A\mathbf r)\longmapsto \lvert\det A\rvert^{-1}\tilde f(A^{-\mathsf T}\mathbf k)$, with the inverse transpose rather than $A$ itself; the two coincide exactly for orthogonal $A$.
- **The limit $\alpha\to 0$ in the Yukawa formula is not automatic.** The pointwise limit of $\sqrt{2/\pi}\,(k^2+\alpha^2)^{-1}$ is $\sqrt{2/\pi}\,k^{-2}$, and the sources take this as the transform of $1/r$; making it a theorem rather than a convention requires reading $1/r$ as a tempered distribution and the convergence as convergence of distributions, for which see :ref[tempered distributions]{to=fourier.tempered-distributions}. The limit is not uniform near $k = 0$, which is the analytic trace of the fact that the Coulomb potential has infinite range.
- **Separability needs a genuine product, not merely a radial function.** The Gaussian is the one function that is both radial and a product, which is exactly why it can be transformed either way and why it is the test case for every convention.
- **In two dimensions the angular integral is not elementary**, because $\int_0^{2\pi}e^{-ik\rho\cos\varphi}d\varphi = 2\pi J_0(k\rho)$ rather than a ratio of elementary functions. Three dimensions is the lucky case; the general pattern is the Hankel transform of order $n/2 - 1$.
:::

:::method[Computing a transform on $\mathbb{R}^n$]{provenance=original}
1. **Fix the convention first and write it down.** Nearly every discrepancy between two published transforms of the same function is a factor of $(2\pi)^{n/2}$ or a sign; see the table above. Carry the convention through to the final answer.
2. **Look for a product.** If $f(\mathbf r) = \prod_j f_j(r_j)$, transform each factor separately in one dimension and multiply. This covers Gaussians, products of exponentials, and anything built by separation of variables.
3. **Otherwise look for spherical symmetry.** If $f$ is radial, check $\int_0^\infty r^{n-1}\lvert f\rvert dr < \infty$, then use the radial reduction: in $\mathbb{R}^3$ compute the single integral $\frac{4\pi}{k}\int_0^\infty r f(r)\sin(kr)\,dr$ and divide by $(2\pi)^{3/2}$; in $\mathbb{R}^2$ use the $J_0$ formula.
4. **If the radial integral diverges, insert a convergence factor.** Replace $f(r)$ by $f(r)e^{-\alpha r}$ with $\alpha > 0$, transform, then let $\alpha \to 0$ in the answer. This is how $1/r$ is handled, and the parameter $\alpha$ usually has a physical reading as an inverse screening length.
5. **Differentiate in a parameter to get new pairs for free.** Differentiation with respect to a parameter commutes with the transform, since they integrate over different variables; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.2, (20.44), p. 974"} use exactly this to get the transform of $e^{-Zr}$ from that of $e^{-\alpha r}/r$.
6. **Check three things.** (i) $\tilde f(0)$ must equal $(2\pi)^{-n/2}\int f\,d^nr$. (ii) If $f$ is real and even, $\tilde f$ is real. (iii) Plancherel: $\int\lvert\tilde f\rvert^2 d^nk$ must equal $\int\lvert f\rvert^2d^nr$ when both are finite. A numerical quadrature of the radial integral at one value of $k$ is the fastest check of all.
:::

:::example[Yukawa and Coulomb potentials, and the hydrogenic $1s$ orbital]{provenance=original}
**The Yukawa potential.** Take $f(r) = e^{-\alpha r}/r$ with $\alpha > 0$ on $\mathbb{R}^3$. It is radial, and $\int_0^\infty r^2\lvert f\rvert dr = \int_0^\infty re^{-\alpha r}dr = \alpha^{-2} < \infty$, so step 3 of the method applies. The radial integral is elementary because the factor $r$ cancels:

$$
\int_0^\infty r\cdot\frac{e^{-\alpha r}}{r}\sin(kr)\,dr = \int_0^\infty e^{-\alpha r}\sin(kr)\,dr = \frac{k}{\alpha^2+k^2} ,
$$

the standard integral obtained by writing $\sin kr = \mathrm{Im}\,e^{ikr}$ and integrating $e^{-(\alpha-ik)r}$. Hence

$$
\widetilde{\left(\frac{e^{-\alpha r}}{r}\right)}(k) = \frac{1}{(2\pi)^{3/2}}\cdot\frac{4\pi}{k}\cdot\frac{k}{k^2+\alpha^2}
= \frac{4\pi}{(2\pi)^{3/2}}\cdot\frac{1}{k^2+\alpha^2}
= \sqrt{\frac{2}{\pi}}\;\frac{1}{k^2+\alpha^2} ,
$$

using $4\pi/(2\pi)^{3/2} = 2/\sqrt{2\pi} = \sqrt{2/\pi}$. This is :cite[Hassani's]{work=hassani-2013 loc="§9.2, Example 9.2.3, p. 283"} result $\tilde V_\alpha = (2q/\sqrt{2\pi})(k^2+\alpha^2)^{-1}$ for charge $q$, and :cite[Arfken, Weber and Harris']{work=arfken-2013 loc="§20.2, (20.41), p. 974"} equation (20.41), who note that without the prefactor the answer is the familiar $4\pi/(k^2+\alpha^2)$.

**A number.** At $\alpha = 1$ and $k = 2$,

$$
\sqrt{\frac{2}{\pi}}\cdot\frac{1}{4+1} = \frac{0.7978845608}{5} = 0.1595769122 ,
$$

equivalently $4\pi/5 = 2.5132741229$ in the unnormalised convention. A direct numerical evaluation of $\frac{4\pi}{k}\int_0^\infty e^{-r}\sin 2r\,dr$ returns $2.5132741229$, so the two agree to ten digits.

**The Coulomb limit.** Letting $\alpha \to 0$,

$$
\widetilde{\left(\frac1r\right)}(k) = \sqrt{\frac{2}{\pi}}\,\frac{1}{k^2} ,
$$

which is :cite[Arfken, Weber and Harris']{work=arfken-2013 loc="§20.2, (20.42), p. 974"} equation (20.42), $(2\pi)^{-3/2}\,4\pi/k^2$, and :cite[Hassani's]{work=hassani-2013 loc="§9.2, p. 283"} $\tilde V_{\mathrm{Coul}} = (2q/\sqrt{2\pi})k^{-2}$. At $k = 2$ its value is $0.7978845608/4 = 0.1994711402$. The warning of the remark applies: the direct integral does not converge, and this equality is a statement about distributions.

**One more pair for free.** Differentiating the Yukawa result with respect to $\alpha$ under the integral sign, and noting $-\partial_\alpha(e^{-\alpha r}/r) = e^{-\alpha r}$,

$$
\widetilde{\bigl(e^{-\alpha r}\bigr)}(k) = -\frac{\partial}{\partial\alpha}\left[\sqrt{\frac2\pi}\frac{1}{k^2+\alpha^2}\right] = \sqrt{\frac{2}{\pi}}\;\frac{2\alpha}{(k^2+\alpha^2)^2} ,
$$

the transform of the unnormalised hydrogenic $1s$ orbital, matching :cite[Arfken, Weber and Harris']{work=arfken-2013 loc="§20.2, (20.44), p. 974"} $8\pi Z/[(2\pi)^{3/2}(k^2+Z^2)^2]$ since $8\pi/(2\pi)^{3/2} = 2\sqrt{2/\pi}$. At $\alpha = 1$, $k = 2$ this is $0.7978845608\times 2/25 = 0.0638307649$, again confirmed to ten digits by numerical quadrature of $\frac{4\pi}{k}\int_0^\infty re^{-r}\sin 2r\,dr = 1.0053096491$ divided by $(2\pi)^{3/2} = 15.7496099457$.

**Check by separability.** For the Gaussian $f(\mathbf r) = e^{-\lvert\mathbf r\rvert^2}$ both routes are open. As a product, $f = \prod_{j=1}^3 e^{-r_j^2}$ and each one-dimensional transform is $(2\pi)^{-1/2}\int e^{-r^2}e^{-ikr}dr = 2^{-1/2}e^{-k^2/4}$, so $\tilde f(\mathbf k) = 2^{-3/2}e^{-\lvert\mathbf k\rvert^2/4}$. As a radial function, the reduction gives $(2\pi)^{-3/2}(4\pi/k)\int_0^\infty re^{-r^2}\sin kr\,dr$, and at $k = 1.5$ the integral evaluates to $0.3787177$, so the formula returns $(15.7496099)^{-1}\times(4\pi/1.5)\times 0.3787177 = 0.2014486$; the product route gives $2^{-3/2}e^{-0.5625} = 0.3535534\times0.5697828 = 0.2014486$. The two agree, as they must.
:::

:::application{provenance=original}
**Screened interactions.** The pair $e^{-\alpha r}/r \longleftrightarrow \mathrm{const}/(k^2+\alpha^2)$ is the most used transform in many-body physics. Read forwards it says that a screened Coulomb interaction has a momentum-space form regular at $k = 0$; read backwards it says that any interaction whose momentum dependence is $(k^2+\alpha^2)^{-1}$ has exponential range $1/\alpha$ in real space. :cite[Hassani]{work=hassani-2013 loc="§9.2, Example 9.2.3, p. 283"} records that this is why Yukawa introduced $\alpha$: the short range of the nuclear force demanded it, and for electromagnetism, where the range is unbounded, $\alpha = 0$.

**Scattering and the Born approximation.** In the Born approximation the scattering amplitude is proportional to the Fourier transform of the potential evaluated at the momentum transfer $\mathbf q$. For the Coulomb potential this gives an amplitude $\propto 1/q^2$ and hence a cross-section $\propto 1/q^4$, which is Rutherford's law; the $1/k^2$ computed above is the whole of that derivation. See :ref[the Born approximation]{to=green.born-approximation}.

**Form factors.** :cite[Hassani]{work=hassani-2013 loc="§9.2, Example 9.2.4, pp. 283–284"} extends the calculation to a charge spread with density $\rho$: the transform of the potential factorises as $\tilde V(\mathbf k) = 4\pi q\tilde\rho(\mathbf k)/\lvert\mathbf k\rvert^2$, so a plot of $k^2\tilde V(k)$ against $k$ displays $\tilde\rho$, the form factor, directly. A constant means a point charge; any departure means structure. Hassani notes that the relativistic version of this argument was the evidence for point-like constituents inside the proton in 1968.

**Solving equations with constant coefficients.** Because $\nabla^2 \longmapsto -\lvert\mathbf k\rvert^2$, Poisson's equation $\nabla^2\phi = -4\pi\rho$ becomes $\lvert\mathbf k\rvert^2\tilde\phi = 4\pi\tilde\rho$ and the screened equation $(\nabla^2 - \alpha^2)\phi = -4\pi\rho$ becomes $(\lvert\mathbf k\rvert^2+\alpha^2)\tilde\phi = 4\pi\tilde\rho$. Inverting the first recovers the Coulomb Green function $1/(4\pi\lvert\mathbf r\rvert)$ and the second the Yukawa one; this is the standard route to the fundamental solutions in :ref[Laplace's equation]{to=pde.laplace-fundamental-solution} and :ref[the Helmholtz equation]{to=pde.helmholtz-equation}.

**Crystallography and imaging.** A diffraction experiment measures $\lvert\tilde f(\mathbf k)\rvert^2$ for the electron density $f$ of a sample, and the rotation rule is what makes powder diffraction work: averaging over orientations of the sample is averaging $\tilde f$ over rotations of $\mathbf k$, so for a radial density nothing is lost. The same rule underlies the reconstruction of radially symmetric objects from a single one-dimensional profile in small-angle scattering.
:::
