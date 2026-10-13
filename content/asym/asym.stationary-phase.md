---
id: asym.stationary-phase
title: The method of stationary phase
kind: method
level: core
summary: >-
  Gives the large-parameter behaviour of an oscillatory integral $\int g\,e^{i\lambda f}$: each
  interior point where the phase is stationary and its second derivative is non-zero contributes
  a term of size $\lambda^{-1/2}$ carrying a fixed $\pm\pi/4$ twist, each endpoint contributes a
  term of size $\lambda^{-1}$, and everywhere else the oscillation cancels to all orders.
prereqs:
  - asym.laplace-method
  - asym.asymptotic-series
  - found.gaussian-integrals
  - complex.cauchy-theorem
provenance: adapted
sources:
  - work: evans-2010
    loc: "§4.5.3b Stationary phase, pp. 208-216: the description of the method as Laplace's method with $-1$ in the exponent replaced by $i$ (p. 208); the general oscillatory integral (40) $I_\\varepsilon=\\int_{\\mathbb{R}^n}e^{i\\phi(y)/\\varepsilon}a(y)\\,dy$ with $a\\in C^\\infty_c$ and $\\phi$ smooth (p. 209); Lemma 1, that a linear phase with non-zero gradient gives $O(\\varepsilon^m)$ for every $m$, proved by repeated integration by parts in the coordinate along which the gradient does not vanish (p. 209); Lemma 2, the quadratic case (41), $(2\\pi\\varepsilon)^{-n/2}\\int e^{iy\\cdot Ay/2\\varepsilon}a(y)\\,dy = e^{i\\pi\\,\\mathrm{sgn}A/4}|\\det A|^{-1/2}(a(0)+O(\\varepsilon))$, with $\\mathrm{sgn}A$ the number of positive minus the number of negative eigenvalues, proved by Gaussian regularisation $\\delta\\to0^+$, contour rotation and Plancherel (pp. 210-211); Lemma 3(ii), the Morse lemma, that near a point where $D\\phi=0$ and $\\det D^2\\phi\\ne0$ a smooth change of variable makes $\\phi$ exactly quadratic (pp. 212-214); and the assembled formula (54), $I_\\varepsilon=(2\\pi\\varepsilon)^{n/2}\\sum_k e^{i\\phi(y_k)/\\varepsilon}|\\det D^2\\phi(y_k)|^{-1/2}e^{i\\pi\\,\\mathrm{sgn}(D^2\\phi(y_k))/4}(a(y_k)+O(\\varepsilon))$ under hypotheses (52) and (53), obtained with a partition of unity and described there as an informal explanation (p. 215); the geometric-optics ansatz (28) and the Hamilton-Jacobi equation (31) for the phase (pp. 207-208); and the worked high-frequency wave problem (34)-(39), (55)-(57), in which the stationary set is the ray geometry and the determinant (56) is a product of $1-t\\kappa_i$ over the principal curvatures of the level surface of the initial phase (pp. 208-209, 215-216)"
    pages: "207-216"
    role: the statement in $n$ dimensions with the signature phase factor, the three-lemma proof architecture (integrate by parts away from stationary points, normalise the phase by the Morse lemma, evaluate the resulting Gaussian), and the high-frequency wave application
  - work: rhb-2006
    loc: "§25.8 Approximations to integrals, pp. 905-920: level lines and lines of steepest descent at a saddle of $h=e^{f}$, the expansion (25.61) $f(z)=f_0+\\tfrac12Ae^{i\\alpha}(z-z_0)^2+O((z-z_0)^3)$ and the resulting four directions (pp. 905-908); the rotation of $\\int e^{-z^2}dz$ onto the ray $\\arg z=-\\pi/4$, Eqs. (25.67)-(25.69), giving $\\int_{-\\infty}^{\\infty}e^{is^2}ds=\\sqrt{\\pi}e^{i\\pi/4}$ and the values $C(\\infty)=S(\\infty)=\\tfrac12$ of the Fresnel integrals (pp. 912-914); the Cornu spiral reading of the amplitude-phase diagram, in which only the central, nearly in-phase part of the contour contributes and the two spiralling ends cancel (pp. 914-916); §25.8.3, the stationary phase method proper: the phase written as $\\arg g(z_0)+\\mathrm{Im}f_0+v^2$ on the level line, the substitution (25.72) and the resulting formula (25.73), $\\int h\\,dz\\approx\\pm\\sqrt{2\\pi/A}\\,g(z_0)e^{f_0}e^{i(\\pi-\\alpha)/2}$, identical to the steepest-descents formula (25.66), with the sign fixed by the direction $\\theta$ of traversal and the remark that the ends of the level line may be joined to the valleys at no cost (pp. 916-917); and the worked example evaluating $\\frac1\\pi\\int_0^\\infty\\cos(\\tfrac13s^3+xs)\\,ds$ for $x<0$ from the two real stationary points, adding the two contributions to get $\\pi^{-1/2}(-x)^{-1/4}\\sin(\\tfrac23(-x)^{3/2}+\\tfrac\\pi4)$, the calculation beginning on p. 919 and concluding on p. 920 (pp. 918-920)"
    pages: "905-920"
    role: the one-dimensional picture and the $\\pi/4$ rotation that produces it; the Fresnel integral used here as the model case; the explanation, via the Cornu spiral, of why only a neighbourhood of a stationary point survives; and the two-stationary-point example that the Airy function supplies
---

:::definition[Oscillatory integrals, stationary points, degeneracy]{provenance=adapted src="evans-2010:§4.5.3, Eq. (40) and (52)-(53), pp. 209, 214"}
Fix a real-valued **phase** $f$ and an **amplitude** $g$, both defined on an interval $[a,b]\subseteq\mathbb{R}$, and a large real parameter $\lambda>0$. The object of study is the **oscillatory integral**

$$
I(\lambda) \;=\; \int_a^b g(t)\,e^{i\lambda f(t)}\,dt .
$$

A point $c$ with

$$
f'(c) \;=\; 0
$$

is a **stationary point** (or **critical point**) of the phase; it is **non-degenerate** when $f''(c)\neq0$, and **degenerate** otherwise.

In $n$ dimensions the same integral is written, as :cite[Evans]{work=evans-2010 loc="§4.5.3, Eq. (40), p. 209"} does, with a small parameter $\varepsilon$ in place of a large one:

$$
I_\varepsilon \;=\; \int_{\mathbb{R}^n} a(y)\,e^{i\phi(y)/\varepsilon}\,dy ,
$$

with $a\in C_c^\infty(\mathbb{R}^n)$, $\phi$ smooth and real. The two notations are related by $\varepsilon = 1/\lambda$, and both appear below. The stationary set is now $\{D\phi=0\}$, and a stationary point $y_k$ is non-degenerate when the Hessian $D^2\phi(y_k)$ is non-singular. For a non-singular real symmetric matrix $A$, its **signature**

$$
\operatorname{sgn}A \;=\; (\text{number of positive eigenvalues}) - (\text{number of negative eigenvalues})
$$

records how many of the $n$ directions curve upwards and how many downwards; in one dimension $\operatorname{sgn}f''(c)$ is $+1$ at a minimum of the phase and $-1$ at a maximum.

Two features distinguish this from :ref[]{to=asym.laplace-method}. The integrand here has modulus $\lvert g\rvert$ everywhere, so nothing is exponentially small and nothing is exponentially large: the whole interval looks equally important to the eye. What makes most of it irrelevant is **cancellation**. And the answer decays only like a power of $\lambda$, not exponentially. :cite[Evans]{work=evans-2010 loc="§4.5.3b, p. 208"} describes the method as the variant of Laplace's method got by replacing the $-1$ in the exponent by $i$, and the formulas below bear that out, with one extra ingredient: a fixed phase shift of $\pm\pi/4$ that has no counterpart in the real case.
:::

:::statement[Stationary phase]{provenance=adapted src="evans-2010:§4.5.3, Lemma 1 p. 209, Lemma 2 (41) p. 210, Eq. (54) p. 215; rhb-2006:§25.8.3, Eq. (25.73), p. 916"}
**1. The model integral (Fresnel).** For $\sigma\in\{+1,-1\}$ and $\lambda>0$,

$$
\int_{-\infty}^{\infty} e^{i\sigma\lambda u^{2}/2}\,du \;=\; \sqrt{\frac{2\pi}{\lambda}}\;e^{i\sigma\pi/4},
$$

the integral being understood as the limit of $\int_{-R}^{R}$ as $R\to\infty$.

**2. No stationary point.** Let $g\in C_c^\infty((a,b))$ and let $f$ be smooth with $f'\neq0$ on the support of $g$. Then for every $m\in\mathbb{N}$,

$$
\int_a^b g(t)\,e^{i\lambda f(t)}\,dt \;=\; O(\lambda^{-m}) \qquad (\lambda\to\infty).
$$

**3. One non-degenerate stationary point.** Let $f$ be smooth and real on $[a,b]$, let $g\in C_c^\infty((a,b))$, and suppose $f'$ vanishes at exactly one point $c$ of the support of $g$, with $f''(c)\neq0$. Put $\sigma=\operatorname{sgn}f''(c)$. Then

$$
\int_a^b g(t)\,e^{i\lambda f(t)}\,dt
\;=\; \sqrt{\frac{2\pi}{\lambda\,\lvert f''(c)\rvert}}\;
e^{\,i\lambda f(c)\,+\,i\sigma\pi/4}\;\bigl[\,g(c) + O(\lambda^{-1})\,\bigr] .
$$

**4. Endpoints.** Let $f,g\in C^{3}([a,b])$ with $f'\neq0$ on all of $[a,b]$. Then

$$
\int_a^b g(t)\,e^{i\lambda f(t)}\,dt
\;=\; \frac{1}{i\lambda}\left[\frac{g(b)}{f'(b)}e^{i\lambda f(b)} - \frac{g(a)}{f'(a)}e^{i\lambda f(a)}\right] \;+\; O(\lambda^{-2}) .
$$

**5. The general case.** Let $f$ and $g$ be smooth on $[a,b]$ with $f$ real. If $f$ has finitely many stationary points $c_1,\dots,c_N$, all in the open interval $(a,b)$ and all non-degenerate, and if $f'(a)\neq0$ and $f'(b)\neq0$, then the leading behaviour is the sum of one term of part 3 for each $c_k$, of size $\lambda^{-1/2}$, plus the two endpoint terms of part 4, of size $\lambda^{-1}$:

$$
\int_a^b g\,e^{i\lambda f}\,dt
\;=\; \sum_{k=1}^{N} \sqrt{\frac{2\pi}{\lambda\lvert f''(c_k)\rvert}}\,g(c_k)\,e^{\,i\lambda f(c_k)+i\sigma_k\pi/4}
\;+\; \frac{1}{i\lambda}\left[\frac{g}{f'}e^{i\lambda f}\right]_a^b
\;+\; O(\lambda^{-3/2}) ,
$$

with $\sigma_k=\operatorname{sgn}f''(c_k)$.

**6. In $n$ dimensions.** :cite[Evans]{work=evans-2010 loc="§4.5.3, Eq. (54), p. 215"} states, for $a\in C^\infty_c(\mathbb{R}^n)$, $\phi$ smooth, $D\phi$ vanishing on the support of $a$ only at $y_1,\dots,y_N$ and every $D^2\phi(y_k)$ non-singular,

$$
\int_{\mathbb{R}^n} a(y)\,e^{i\phi(y)/\varepsilon}\,dy
\;=\; (2\pi\varepsilon)^{n/2}\sum_{k=1}^{N}
\frac{e^{i\phi(y_k)/\varepsilon}}{\lvert\det D^2\phi(y_k)\rvert^{1/2}}\,
e^{\,i\pi\operatorname{sgn}(D^2\phi(y_k))/4}\,\bigl[a(y_k)+O(\varepsilon)\bigr]
$$

as $\varepsilon\to0$. He presents this as an informal assembly of his Lemmas 1-3 by a partition of unity rather than as a theorem with a proof. Part 3 is the case $n=1$, $\varepsilon=1/\lambda$, in which $\operatorname{sgn}D^2\phi$ is $\pm1$ and the signature factor becomes $e^{\pm i\pi/4}$.
:::

:::idea{provenance=original}
Away from a stationary point the integrand turns through a full cycle in a $t$-interval of length about $2\pi/(\lambda\lvert f'\rvert)$, so neighbouring cycles cancel in pairs and only the mismatch between them survives; each integration by parts makes that mismatch smaller by a factor $\lambda^{-1}$, and with no boundary to stop the process the contribution is smaller than every power of $1/\lambda$. At a stationary point the phase is flat to first order, so the integrand stays nearly constant over an interval of length about $\lambda^{-1/2}$ — the width at which $\tfrac12\lambda\lvert f''\rvert(t-c)^2$ first reaches order one — and that whole interval adds up in phase. This is why the answer is of size $\lambda^{-1/2}$: one stationary interval of width $\lambda^{-1/2}$, counted without cancellation.

Three steps turn this picture into a formula. Cut the integral into a piece near $c$ and a piece away from it, and dispose of the second by the integration by parts just described. In the first piece change the variable so that the phase becomes *exactly* quadratic — possible because $f''(c)\neq0$, which is the one-dimensional Morse lemma. What is left is the Fresnel integral, the oscillatory twin of the Gaussian, and it is evaluated by rotating the contour through $\pi/4$ onto a ray where it *is* a Gaussian. That rotation is the source of the $e^{i\sigma\pi/4}$: it is not a property of $f$ or $g$ at all, only of the sign of the curvature of the phase.

At an endpoint the cancellation argument still works but the integration by parts leaves a boundary term, and that term, of size $\lambda^{-1}$, is all that an endpoint ever contributes.
:::

:::proof[Part 1: the Fresnel integral]{provenance=adapted src="rhb-2006:§25.8.3, Eqs. (25.67)-(25.69), pp. 912-913"}
Take $\sigma=+1$; the case $\sigma=-1$ follows by conjugating. Rescaling $u=\sqrt{2/\lambda}\,s$ reduces the claim to $\int_{-\infty}^{\infty}e^{is^{2}}ds = \sqrt{\pi}\,e^{i\pi/4}$.

Consider $e^{-z^{2}}$, which is entire, and the closed contour made of the segment $[0,R]$ of the real axis, the circular arc $z=Re^{i\theta}$ with $0\le\theta\le\pi/4$, and the segment of the ray $\arg z=\pi/4$ back to the origin. By :ref[]{to=complex.cauchy-theorem} the integral around it vanishes.

On the arc, $\lvert e^{-z^{2}}\rvert = e^{-R^{2}\cos2\theta}$, and $\cos2\theta\ge 1-4\theta/\pi$ for $0\le\theta\le\pi/4$ (both sides agree at the two ends and the left side is concave there), so

$$
\left\lvert\int_{\text{arc}}e^{-z^{2}}dz\right\rvert
\;\le\; R\int_0^{\pi/4}e^{-R^{2}(1-4\theta/\pi)}\,d\theta
\;=\; \frac{\pi}{4R}\bigl(1-e^{-R^{2}}\bigr)\;\xrightarrow[R\to\infty]{}\;0 .
$$

Letting $R\to\infty$ in the vanishing contour integral therefore gives $\int_0^{\infty}e^{-z^{2}}dz$ along the real axis equal to the same integral along the ray. Parametrising the ray by $z=se^{i\pi/4}$, so that $z^{2}=is^{2}$ and $dz=e^{i\pi/4}ds$, and using $\int_0^\infty e^{-z^2}dz=\sqrt\pi/2$ from :ref[]{to=found.gaussian-integrals},

$$
\frac{\sqrt{\pi}}{2} \;=\; e^{i\pi/4}\int_0^{\infty}e^{-is^{2}}\,ds .
$$

Conjugating and doubling (the integrand is even) gives $\int_{-\infty}^{\infty}e^{is^{2}}ds=\sqrt{\pi}e^{i\pi/4}$, which is :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§25.8.3, Eq. (25.68), p. 913"} identity; they read off from it the values $C(\infty)=S(\infty)=\tfrac12$ of the Fresnel integrals. Restoring the scaling, $\int e^{i\lambda u^{2}/2}du=\sqrt{2\pi/\lambda}\,e^{i\pi/4}$. $\square$
:::

:::proof[Parts 2 and 4: integration by parts]{provenance=adapted src="evans-2010:§4.5.3, Lemma 1, p. 209"}
Both rest on the single identity

$$
e^{i\lambda f(t)} \;=\; \frac{1}{i\lambda f'(t)}\,\frac{d}{dt}\,e^{i\lambda f(t)} ,
$$

legitimate exactly where $f'\neq0$ — this is the step that uses the absence of a stationary point, and the only one.

**Part 4.** With $f'\neq0$ on $[a,b]$, insert the identity and integrate by parts once:

$$
\int_a^b g\,e^{i\lambda f}\,dt
\;=\; \frac{1}{i\lambda}\left[\frac{g}{f'}\,e^{i\lambda f}\right]_a^b
\;-\;\frac{1}{i\lambda}\int_a^b \left(\frac{g}{f'}\right)' e^{i\lambda f}\,dt .
$$

The new amplitude $g_1=(g/f')'$ is continuous, because $f'$ does not vanish on the compact interval and is therefore bounded away from zero there; so $\lvert\int_a^b g_1e^{i\lambda f}dt\rvert\le\int_a^b\lvert g_1\rvert\,dt$, a constant, and the remainder is already $O(\lambda^{-1})$. To reach the $O(\lambda^{-2})$ claimed, integrate by parts once more, which needs $g_1\in C^{1}$ and hence $f,g\in C^{3}$:

$$
-\frac{1}{i\lambda}\int_a^b g_1 e^{i\lambda f}\,dt
= -\frac{1}{(i\lambda)^{2}}\left[\frac{g_1}{f'}e^{i\lambda f}\right]_a^b
+ \frac{1}{(i\lambda)^{2}}\int_a^b\left(\frac{g_1}{f'}\right)' e^{i\lambda f}\,dt
= O(\lambda^{-2}) .
$$

Under the weaker hypothesis $f,g\in C^{2}$ the same first step gives the boundary term plus $o(\lambda^{-1})$, the remainder tending to zero by the Riemann-Lebesgue lemma applied to the continuous amplitude $g_1$ rather than by a second integration by parts.

**Part 2.** Now $g$ has compact support inside $(a,b)$, so the boundary term vanishes identically and the same step gives

$$
\int g\,e^{i\lambda f}\,dt \;=\; -\frac{1}{i\lambda}\int g_1\,e^{i\lambda f}\,dt ,
\qquad g_1 = \left(\frac{g}{f'}\right)' ,
$$

with $g_1$ again smooth and compactly supported in the set where $f'\neq0$. Repeating $m$ times produces $(-i\lambda)^{-m}\int g_m e^{i\lambda f}dt$ with $g_m$ smooth and compactly supported, and the last integral is bounded independently of $\lambda$. This is :cite[Evans's]{work=evans-2010 loc="§4.5.3, Lemma 1, p. 209"} Lemma 1, which he states for a linear phase $p\cdot y$ with $p\neq0$ and proves by differentiating $m$ times along the coordinate in which $p$ does not vanish; the version here is the same computation with a variable $f'$ in the denominator. $\square$
:::

:::proof[Part 3: the stationary contribution]{provenance=adapted src="evans-2010:§4.5.3, Lemma 3(ii) pp. 212-214, Lemma 2 p. 210, Eq. (54) p. 215"}
Write $\sigma=\operatorname{sgn}f''(c)$ and $\mu=\lvert f''(c)\rvert>0$.

**Step 1: localise.** Choose $\delta>0$ so small that $f'$ has no zero other than $c$ in $[c-\delta,c+\delta]$ and $f''$ keeps its sign there, and a cut-off $\chi\in C^\infty_c((c-\delta,c+\delta))$ with $\chi\equiv1$ on $[c-\delta/2,c+\delta/2]$. Split $g=\chi g+(1-\chi)g$. The amplitude $(1-\chi)g$ is smooth, compactly supported in $(a,b)$, and supported where $f'\neq0$, so by part 2 its integral is $O(\lambda^{-m})$ for every $m$. Only $\int \chi g\,e^{i\lambda f}$ remains.

**Step 2: make the phase exactly quadratic.** Taylor's theorem with integral remainder gives, for $t$ near $c$ and using $f'(c)=0$,

$$
f(t)-f(c) \;=\; \tfrac12 (t-c)^{2}h(t), \qquad h(t)=2\int_0^1 (1-s)\,f''\bigl(c+s(t-c)\bigr)\,ds ,
$$

with $h$ smooth and $h(c)=f''(c)$. Shrinking $\delta$ if necessary, $\sigma h>0$ on $[c-\delta,c+\delta]$. Define

$$
u(t) \;=\; (t-c)\sqrt{\sigma h(t)} .
$$

Since $\sigma h$ is smooth and strictly positive, its square root is smooth, so $u$ is smooth, $u(c)=0$ and $u'(c)=\sqrt{\mu}\neq0$. By the inverse function theorem $u$ is a diffeomorphism of a neighbourhood of $c$ onto a neighbourhood of $0$, and by construction

$$
f(t) \;=\; f(c) + \tfrac{\sigma}{2}\,u(t)^{2} .
$$

This is the one-dimensional case of the Morse lemma, :cite[Evans's]{work=evans-2010 loc="§4.5.3, Lemma 3(ii), pp. 212-214"} Lemma 3(ii), whose hypothesis $\det D^2\phi(0)\neq0$ is here exactly $f''(c)\neq0$; in one variable the induction over coordinates that he needs collapses to the explicit formula above. Changing the variable,

$$
\int \chi g\,e^{i\lambda f}\,dt \;=\; e^{i\lambda f(c)}\int_{\mathbb{R}} G(u)\,e^{i\sigma\lambda u^{2}/2}\,du ,
\qquad
G(u) = \chi(t(u))\,g(t(u))\,t'(u) ,
$$

with $G$ smooth and compactly supported and

$$
G(0) \;=\; \frac{g(c)}{u'(c)} \;=\; \frac{g(c)}{\sqrt{\mu}} .
$$

**Step 3: separate the value at the stationary point.** Fix $\zeta\in C_c^\infty(\mathbb{R})$ with $\zeta\equiv1$ near $0$ and write

$$
\int G\,e^{i\sigma\lambda u^{2}/2}du
\;=\; G(0)\int_{\mathbb{R}} e^{i\sigma\lambda u^{2}/2}du
\;-\; G(0)\int (1-\zeta)\,e^{i\sigma\lambda u^{2}/2}du
\;+\; \int \bigl(G-G(0)\zeta\bigr)e^{i\sigma\lambda u^{2}/2}du .
$$

The first integral is part 1. For the second, the phase $\sigma u^{2}/2$ has derivative $\sigma u\neq0$ on the support of $1-\zeta$; integrating by parts as in part 2, with no boundary term because $(1-\zeta)/u$ vanishes at infinity, and noting that each step improves the decay of the amplitude by two powers of $u$, gives $O(\lambda^{-m})$ for every $m$.

**Step 4: the remainder.** The function $G-G(0)\zeta$ is smooth, compactly supported and vanishes at $u=0$, so $G(u)-G(0)\zeta(u) = u\,H(u)$ with $H$ smooth and compactly supported. Using $u\,e^{i\sigma\lambda u^{2}/2} = \frac{\sigma}{i\lambda}\frac{d}{du}e^{i\sigma\lambda u^{2}/2}$ and integrating by parts (no boundary term, $H$ having compact support),

$$
\int u\,H(u)\,e^{i\sigma\lambda u^{2}/2}du \;=\; -\frac{\sigma}{i\lambda}\int H'(u)\,e^{i\sigma\lambda u^{2}/2}\,du .
$$

The integral on the right is of the same shape as the one we started with, with amplitude $H'$ and phase $\sigma u^2/2$; it is $O(1)$ at once, which already gives an absolute error $O(\lambda^{-1})$ — a relative error $O(\lambda^{-1/2})$ at this stage, the leading term being of size $\lambda^{-1/2}$. Feeding it back through steps 3-4 once more shows it is in fact $O(\lambda^{-1/2})$, so the remainder is $O(\lambda^{-3/2})$ — the relative error $O(\lambda^{-1})$ asserted in part 3 and in :cite[Evans's]{work=evans-2010 loc="§4.5.3, Eq. (54), p. 215"} formula (54).

**Step 5: collect.** Combining steps 1-4,

$$
\int_a^b g\,e^{i\lambda f}\,dt
\;=\; e^{i\lambda f(c)}\,\frac{g(c)}{\sqrt{\mu}}\,\sqrt{\frac{2\pi}{\lambda}}\,e^{i\sigma\pi/4} + O(\lambda^{-3/2}) ,
$$

which is part 3. Part 5 follows by applying step 1 with one cut-off per stationary point, part 4 to what is left over (whose support now reaches the endpoints, so the boundary term survives), and adding. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$f$ real is what makes this a different method.** The whole argument uses $\lvert e^{i\lambda f}\rvert=1$: there is no large or small factor to exploit, only cancellation. If $f$ has an imaginary part the integrand has peaks and troughs, and the right tool is :ref[]{to=asym.laplace-method} or, in the complex plane, :ref[]{to=asym.steepest-descent}. The two are not merely analogous: the steepest-descents formula contains the stationary-phase formula as the case where the saddle sits on a level line, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.3, p. 917"} verify that their two formulas, (25.66) and (25.73), coincide.
- **$f'\neq0$ is used exactly once**, in the identity $e^{i\lambda f}=(i\lambda f')^{-1}(e^{i\lambda f})'$, and everything in parts 2 and 4 follows from it. Where $f'$ vanishes the factor $1/f'$ blows up, which is the analytic signature of the fact that a stationary point contributes more than every endpoint.
- **$f''(c)\neq0$ fixes both the power and the phase.** It is the hypothesis behind the change of variable in step 2 — without it $\sqrt{\sigma h}$ is not smooth and $u$ is not a diffeomorphism. If $f''(c)=0$ but $f'''(c)\neq0$, the phase is cubic and the stationary interval has width $\lambda^{-1/3}$ instead of $\lambda^{-1/2}$, so the contribution is of size $\lambda^{-1/3}$ and is given by an Airy function rather than by a Fresnel integral; see :ref[]{to=spec.airy-functions}. The transition between the two, as two stationary points merge, is where a uniform approximation is needed and the formula of part 3 fails: it predicts a contribution that blows up as $f''(c)\to0$.
- **Smoothness of $g$ controls the size of what is left over, not the leading term.** For part 2 we need to differentiate the amplitude $m$ times, so $g\in C^m$ buys $O(\lambda^{-m})$ and no more. A jump in $g$ acts like an endpoint: $g=\chi_{[0,1]}$ in part 4 produces $\lambda^{-1}$ terms at $0$ and $1$ even though the phase is perfectly smooth there.
- **Compact support in $(a,b)$ is what removes the endpoint terms in parts 2 and 3**, and nothing else. Part 5 is the honest statement for an integral over a finite interval: the endpoints always contribute at order $\lambda^{-1}$, one order below the stationary points, so they matter whenever two-term accuracy is wanted, and they are the entire answer when there is no stationary point at all.
- **Non-degeneracy is also what makes the count finite.** If $f'$ vanished on a whole subinterval, that subinterval would contribute at order $1$: the integral $\int_0^1 e^{i\lambda\cdot0}dt=1$ does not decay. The hypothesis of finitely many non-degenerate stationary points in part 5 rules this out, and :cite[Evans]{work=evans-2010 loc="§4.5.3, (52)-(53), p. 214"} imposes it in the same two pieces, (52) and (53).
- **The error estimate is not uniform in the data.** The constant hidden in $O(\lambda^{-3/2})$ depends on bounds for $f''',f''''$ and for the derivatives of $g$ near $c$, and on how far $f''(c)$ is from zero. Two stationary points a distance $d$ apart may be treated separately only when $\lambda d^{2}\lvert f''\rvert\gg1$, which is the condition :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.3, pp. 918-919"} express by saying that the first Cornu spiral must have wound up before the second begins.
:::

:::method[Applying the method]{provenance=original}
1. **Put the integral in the standard form** $\int_a^b g(t)e^{i\lambda f(t)}dt$ with $f$ real and $\lambda$ the large parameter. A real integrand $\int g\cos(\lambda f)$ is the real part of this, so work with the complex form and take real parts at the end. If the large parameter sits inside the integrand in some other way, rescale the variable first until it appears as an overall factor in the exponent, as :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, p. 911"} do with $s=x^{1/2}t$ for the Airy integral.
2. **Solve $f'(t)=0$** and keep the roots lying in $(a,b)$. Discard complex roots: they belong to :ref[]{to=asym.steepest-descent}.
3. **Check non-degeneracy** by computing $f''$ at each root. If some $f''(c_k)=0$, or if two roots are closer than $\lambda^{-1/2}$, stop: the formula below does not apply and a uniform (Airy-type) approximation is needed.
4. **Write down one term per stationary point**,
   $$
   \sqrt{\frac{2\pi}{\lambda\lvert f''(c_k)\rvert}}\;g(c_k)\;\exp\Bigl[i\lambda f(c_k)+i\tfrac{\pi}{4}\operatorname{sgn}f''(c_k)\Bigr] ,
   $$
   remembering that the sign of the $\pi/4$ follows the sign of the curvature of the phase, not the sign of anything else.
5. **Add the endpoint terms** $\dfrac{1}{i\lambda}\Bigl[\dfrac{g}{f'}e^{i\lambda f}\Bigr]_a^b$ if the interval is finite and $g$ does not vanish there, and one such term at every jump of $g$ or of $f'$. They are one power of $\lambda$ smaller than the stationary terms and are the whole answer when there is no stationary point.
6. **Sanity-check the result.** The leading term must have modulus $\lvert g(c)\rvert\sqrt{2\pi/(\lambda\lvert f''(c)\rvert)}$, which has the dimensions of $g$ times the dimensions of $t$; if the original integral is real, the stationary terms must combine into something real, which for two stationary points related by a symmetry means their phases are negatives of each other. Finally compare against a numerical quadrature at one moderate $\lambda$: the stationary terms on their own carry a relative error falling like $\lambda^{-1/2}$, and once the endpoint terms are added the relative error should fall like $\lambda^{-1}$, as part 5 asserts.
:::

:::example[An integral with one interior stationary point and two endpoints]{provenance=original}
Take

$$
I(\lambda) \;=\; \int_0^2 \exp\Bigl[i\lambda\Bigl(\tfrac{1}{3}t^{3}-t\Bigr)\Bigr]\,dt ,
$$

so $g\equiv1$ and $f(t)=\tfrac13 t^{3}-t$.

**Stationary points.** $f'(t)=t^{2}-1$ vanishes at $t=\pm1$, and only $t=c=1$ lies in $(0,2)$. There $f(1)=\tfrac13-1=-\tfrac23$ and $f''(1)=2t\big\vert_{t=1}=2$, which is non-zero, so the point is non-degenerate and $\sigma=+1$.

**The stationary term.** By step 4 of the method,

$$
S(\lambda) \;=\; \sqrt{\frac{2\pi}{2\lambda}}\;e^{\,i(-2\lambda/3+\pi/4)}
\;=\; \sqrt{\frac{\pi}{\lambda}}\;e^{\,i(\pi/4-2\lambda/3)} .
$$

**The endpoint terms.** $f'(0)=-1$, $f(0)=0$, $f'(2)=3$, $f(2)=\tfrac83-2=\tfrac23$, so

$$
E(\lambda) \;=\; \frac{1}{i\lambda}\left[\frac{e^{i\lambda f(2)}}{f'(2)}-\frac{e^{i\lambda f(0)}}{f'(0)}\right]
\;=\; \frac{1}{i\lambda}\left[\frac{e^{\,2i\lambda/3}}{3}+1\right] .
$$

**The number.** At $\lambda=100$,

$$
S(100) = \sqrt{\pi/100}\;e^{\,i(\pi/4-200/3)} = -0.176492923 - 0.016314861\,i ,
$$

since $\pi/4-200/3 = -65.88127$, which is $3.233770$ modulo $2\pi$, and

$$
E(100) = \frac{1}{100\,i}\left[\frac{e^{\,200i/3}}{3}+1\right] = -0.002130060 - 0.007436027\,i ,
$$

so the prediction is

$$
\boxed{\;I(100)\;\approx\;S(100)+E(100)\;=\;-0.178622983 \;-\; 0.023750888\,i\;}
$$

Numerical quadrature of the original integral, split at $t=1$ so that the oscillation is resolved on each side, gives

$$
I(100) \;=\; -0.178593013 \;-\; 0.023923248\,i ,
$$

so the two-term prediction is correct to $1.7\times10^{-4}$ in absolute terms and to $0.097\%$ relative to $\lvert I(100)\rvert=0.18019$. That is consistent with the predicted remainder $O(\lambda^{-3/2})=O(10^{-3})$.

**What each piece is worth.** The stationary term alone misses by $7.9\times10^{-3}$, forty-five times the error of the two-term answer: at $\lambda=100$ the endpoints are not a refinement one can skip. Their ratio to the stationary term is of order $\lambda^{-1/2}=0.1$, exactly as the orders in part 5 predict, and at $\lambda=10^{4}$ it would be $0.01$.
:::

:::application{provenance=original}
**Group velocity of a dispersive wave train.** A one-dimensional linear wave problem with dispersion relation $\omega(k)$ has solutions

$$
u(x,t) \;=\; \int_{-\infty}^{\infty} A(k)\,e^{\,i(kx-\omega(k)t)}\,dk .
$$

Fix a ray $x/t=V$ and let $t\to\infty$. Then $u = \int A(k)e^{it\,\varphi(k)}dk$ with $\varphi(k)=kV-\omega(k)$, so the large parameter is the elapsed time and the stationary points are the wavenumbers with

$$
\omega'(k) \;=\; V .
$$

Part 3 then says $u\sim\sqrt{2\pi/(t\lvert\omega''(k_V)\rvert)}\,A(k_V)e^{i(k_Vx-\omega(k_V)t)\mp i\pi/4}$: an observer travelling at speed $V$ sees, after a long time, only the wavenumber whose **group velocity** is $V$, with an amplitude decaying like $t^{-1/2}$ because the energy originally present spreads over a region growing like $t$. The $t^{-1/2}$, the selection rule $\omega'(k)=V$ and the $\pi/4$ are all read straight off the formula, and the degenerate case $\omega''(k_V)=0$ — where the rule selects a band of wavenumbers rather than one, the decay slows to $t^{-1/3}$ and the Airy function appears — is exactly the failure described in the remark above.

**High-frequency limit of the wave equation, and geometric optics.** :cite[Evans]{work=evans-2010 loc="§4.5.3, pp. 207-216"} uses stationary phase to justify what the geometric-optics ansatz $u^\varepsilon=a^\varepsilon e^{ip^\varepsilon/\varepsilon}$ only suggests. Solving $u_{tt}=\Delta u$ with rapidly oscillating data $g^\varepsilon(x)=a(x)e^{ip(x)/\varepsilon}$ by the Fourier representation and applying his formula (54) to the resulting double integral, he finds that the stationary set is precisely the ray geometry: the stationary conditions reproduce the characteristics of the Hamilton-Jacobi equation $p_t\pm\lvert Dp\rvert=0$ for the phase. The amplitude of the answer carries $\lvert\det D^2_{y,z}\phi\rvert^{-1/2}$, which on the stationary set equals $\prod_{i=1}^{n-1}\lvert 1-t\kappa_i\rvert^{-1/2}$, since his (56), :cite[Evans]{work=evans-2010 loc="§4.5.3, Eq. (56), p. 216"}, gives $\det D^2_{y,z}\phi_+=(-1)^n\prod_{i=1}^{n-1}(1-t\kappa_i)$, where $\kappa_1,\dots,\kappa_{n-1}$ are the principal curvatures of the surface on which the initial phase is constant — so the approximation blows up exactly at the focal times $t=1/\kappa_i$, where neighbouring rays cross and the stationary point becomes degenerate. Stationary phase thus produces both geometrical optics and its caustics, which the formal ansatz cannot see.

**Diffraction and the Cornu spiral.** In Fresnel diffraction the field at a point behind an edge is $\int e^{i\pi u^{2}/2}du$ over the unobstructed aperture, and the amplitude-phase diagram that :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.3, pp. 914-915"} draw — the Cornu spiral — is the graph of the partial integrals. Their picture is the method made visible: the tightly wound ends of the spiral are the regions of rapid phase variation, which cancel, and the straight central stretch is the stationary region, which does not. The oscillations of intensity in the illuminated region and the smooth decay in the geometrical shadow are the two ends of that spiral.

**Asymptotics of special functions.** The integral representations of the Bessel and Airy functions are oscillatory integrals with a parameter, and stationary phase gives their large-argument behaviour directly: for $J_n(x)=\frac1\pi\int_0^\pi\cos(n\theta-x\sin\theta)\,d\theta$ with $x\to\infty$ at fixed $n$, the phase $x\sin\theta-n\theta$ has (for $x>n$) exactly one stationary point in $(0,\pi)$, at $\cos\theta=n/x$; writing the cosine as $\tfrac12(e^{i(n\theta-x\sin\theta)}+e^{-i(n\theta-x\sin\theta)})$ turns that one point into a conjugate pair of contributions, which combine into the familiar $\sqrt{2/(\pi x)}\cos(x-n\pi/2-\pi/4)$ of :ref[]{to=spec.bessel-asymptotics} — the $\pi/4$ being the signature factor of this unit. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.3, worked example, pp. 919-920"} carry out the companion calculation for $\mathrm{Ai}(x)$ with $x<0$, where the two real stationary points at $\pm\sqrt{-x}$ give the oscillatory branch $\pi^{-1/2}(-x)^{-1/4}\sin\bigl(\tfrac23(-x)^{3/2}+\tfrac\pi4\bigr)$, in contrast with the single complex saddle that governs $x>0$ and that belongs to :ref[]{to=asym.steepest-descent}.

**Why path integrals produce classical mechanics.** The stationary points of the action are the classical trajectories, and the weight $e^{iS/\hbar}$ is an oscillatory integrand with $\lambda=1/\hbar$. The formal application of part 6 to the path integral — one term per classical path, with amplitude $\lvert\det\delta^2S\rvert^{-1/2}$ and a phase $\pi/4$ times the signature of the second variation — is the semiclassical (WKB) approximation, with the signature appearing as the Maslov index. The second variation and its degeneracies are the subject of :ref[]{to=var.second-variation-legendre} and :ref[]{to=var.jacobi-conjugate-points}, and the one-dimensional case is :ref[]{to=asym.wkb-approximation}.
:::
