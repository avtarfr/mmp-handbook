---
id: asym.steepest-descent
title: The method of steepest descents
kind: method
level: core
summary: >-
  Evaluates $\int_C g(z)e^{\lambda f(z)}dz$ for large $\lambda$ by deforming the contour onto a
  path through a saddle point of $f$ on which the imaginary part of $f$ is frozen, so that the
  oscillation disappears and the integral becomes a real Gaussian; gives the leading-order
  formula $g(z_0)e^{\lambda f(z_0)}e^{i\theta}\sqrt{2\pi/(\lambda|f''(z_0)|)}$ and the rule that
  fixes the direction $\theta$.
prereqs:
  - asym.laplace-method
  - complex.cauchy-theorem
  - complex.taylor-series
  - found.gaussian-integrals
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§12.7 Method of Steepest Descents, pp. 585-590: the four conditions under which the method applies to $f(t)=\\int_C F(z,t)\\,dz$ (p. 585); the writing $F=e^{w}=e^{u+iv}$ with $u=\\ln|F|$, the impossibility of an interior extremum of $u$ (Jensen's theorem, Exercise 12.7.1) and the consequent saddle structure (p. 586); the Taylor expansion (12.101)-(12.103) with $w''(z_0)=|w''|e^{i\\alpha}$, $z-z_0=re^{i\\theta}$, giving maximal increase of $u$ at $\\alpha+2\\theta=2n\\pi$, maximal decrease at $\\alpha+2\\theta=(2n+1)\\pi$ and level lines at $\\theta=-\\alpha/2+(\\pi/4,3\\pi/4,5\\pi/4,7\\pi/4)$, together with the observation that the steepest lines of $u$ are level lines of $v$ so that the phase does not change along them (p. 587); the assembled approximation (12.104)-(12.106), $f(t)\\approx F(z_0,t)e^{i\\theta}\\sqrt{2\\pi/|w''(z_0,t)|}$ with $\\theta=-\\arg w''(z_0,t)/2+(\\pi/2$ or $3\\pi/2)$ and the factor $2$ accounting for both halves of the path (p. 588); the extension (12.107)-(12.108) to an integrand $g(z,t)F(z,t)$ in which $g$ is slowly varying and is replaced by $g(z_0,t)$, with the warning that the dominance of the saddle neighbourhood must be checked in each problem (pp. 588-589); Example 12.7.1, the leading term of Stirling's formula from $\\Gamma(t+1)=t^{t+1}\\int_0^\\infty e^{t(\\ln z-z)}dz$, saddle at $z=1$, $\\arg w''=\\pi$, $\\theta=0$ (p. 589); and Example 12.7.2, $H(t)=\\int e^{-t(z^2-1/4)}\\cos(tz)(1+z^2)^{-1}dz$, where replacing $\\cos tz$ by $e^{itz}$ moves the saddle to $z_0=i/2$ off the real axis and the method removes the oscillation, with the numerical comparison $H_{\\text{exact}}=0.23284$ against $H_{\\text{saddle}}=0.23633$ at $t=100$ (p. 590)"
    pages: "585-590"
    role: the statement of the leading-order formula in the form used here, including the direction rule for $\\theta$ and the separate treatment of a slowly varying prefactor $g$; the saddle-point geometry derived from the Taylor expansion; and the observation that the steepest-descent lines are the lines of constant phase
  - work: rhb-2006
    loc: "§25.8 Approximations to integrals, pp. 905-912: the class of integrands $g(z)\\exp[f(z)]$ and the plan of moving the contour to where the integrand is Gaussian (p. 905); §25.8.1, level lines of $h=e^{f}=e^{\\varphi}e^{i\\psi}$, the orthogonality of $\\nabla\\varphi$ and $\\nabla\\psi$, the impossibility of a finite maximum or minimum of $\\varphi$ or $\\psi$ where $f$ is analytic (because $\\varphi_{xx}$ and $\\varphi_{yy}$ have opposite signs), the resulting saddle, and the fact that a steepest path cannot close on itself (pp. 905-907); the expansion (25.60)-(25.63) with $f''(z_0)=Ae^{i\\alpha}$ and $z-z_0=\\rho e^{i\\theta}$, the two crossing level lines at $\\theta=\\tfrac12(\\pm\\tfrac12\\pi-\\alpha)$ and $\\tfrac12(\\pm\\tfrac32\\pi-\\alpha)$, and the four directions $\\theta=-\\tfrac12\\alpha$, $\\tfrac12(\\pm\\pi-\\alpha)$, $\\pi-\\tfrac12\\alpha$ of constant phase, of which the two with $\\cos(2\\theta+\\alpha)<0$ form the line of steepest descents (pp. 907-908); §25.8.2, the exactly soluble model $f=-\\beta z^2$, the requirement that $g$ be free of rapid variation, zeros and singularities near the saddle and that rapidly varying factors be moved into the exponent as a logarithm, the substitution (25.65) $\\tfrac12Ae^{i\\alpha}(z-z_0)^2=-s^2$ with $dz=\\pm\\sqrt{2/A}\\,e^{i(\\pi-\\alpha)/2}ds$, and the omnibus formula (25.66) $\\int_Cg e^{f}dz=\\pm\\sqrt{2\\pi/A}\\,g(z_0)e^{f_0}e^{i(\\pi-\\alpha)/2}$ with the sign rule $+$ when $-\\tfrac12\\pi<\\theta\\le\\tfrac12\\pi$ (pp. 908-910); the check on $\\int_{-\\infty}^{\\infty}e^{10t-t^2}dt=\\sqrt{\\pi}e^{25}$, exact because the exponent is quadratic, with the verification along the imaginary direction that the path really sits in a minimum (pp. 910-911); and the Airy example $F(x)=\\pi^{-1}\\int_0^\\infty\\cos(\\tfrac13s^3+xs)ds$, rescaled by $s=x^{1/2}t$, saddles at $t=\\pm i$, the choice of $t=+i$ and the discussion of why the other saddle is a worse choice, giving $F(x)\\sim(2\\sqrt{\\pi}x^{1/4})^{-1}e^{-2x^{3/2}/3}$ (pp. 911-912)"
    pages: "905-912"
    role: the geometry of level lines and lines of steepest descent, the sector argument that licenses the deformation, the explicit substitution and sign rule, the insistence that rapidly varying prefactors belong in the exponent, and the worked choice between two competing saddles
  - work: hassani-2013
    loc: "§12.5 Method of Steepest Descent, pp. 382-385: the integral (12.23) $I(\\alpha)=\\int_Ce^{\\alpha f(z)}g(z)dz$ with $|\\alpha|$ large, the normalisation of $\\alpha$ to be real and positive by absorbing its phase into $f$, and the attribution of the technique to Debye and of the motivating partition-function integral to statistical mechanics (p. 382); the argument that violent oscillation of $\\mathrm{Im}\\,\\alpha f$ would destroy the estimate, leading to the twin demands $f'(z_0)=0$ (12.24) and $\\mathrm{Im}f$ constant along the deformed contour, and the harmonicity argument that $z_0$ is a saddle (p. 382); the expansion (12.25)-(12.28) with $z-z_0=r_1e^{i\\theta_1}$ and $\\tfrac12f''(z_0)=r_2e^{i\\theta_2}$, the constant-phase condition $2\\theta_1+\\theta_2=n\\pi$, the two perpendicular lines it produces, and the selection $n=1,3$ by $\\cos(2\\theta_1+\\theta_2)=-1$ (p. 383); the change of variable (12.29)-(12.31) $f(z)-f(z_0)=-t^2$ with $z=z_0+tr_2^{-1/2}e^{i\\theta_1}$ under the convention $0\\le\\theta_1<\\pi$; the term-by-term expansion (12.32)-(12.33) of $g$ about $z_0$ against the Gaussian moments $\\int e^{-\\alpha t^2}t^{2k}dt=\\alpha^{-k-1/2}\\Gamma(k+\\tfrac12)$; and the leading term (12.34) $I(\\alpha)\\approx e^{\\alpha f(z_0)}\\sqrt{2\\pi/\\alpha}\\,e^{i\\theta_1}g(z_0)|f''(z_0)|^{-1/2}$, applied in Example 12.5.1 to $\\Gamma(\\alpha+1)$ and in Example 12.5.2 to the Hankel function $H^{(1)}_\\nu(\\alpha)$ with saddles at $z_0=\\pm i$ (pp. 384-386)"
    pages: "382-386"
    role: the version of the leading-order formula with the large parameter $\\lambda$ kept explicit, which is the form this unit states; the sign convention $0\\le\\theta_1<\\pi$ that replaces the $\\pm$ of the other two books; and the construction of the higher-order terms by expanding the prefactor against Gaussian moments
---

:::definition[Saddle points, level lines, steepest paths, valleys]{provenance=adapted src="rhb-2006:§25.8.1, Eqs. (25.58)-(25.63), pp. 905-908; arfken-2013:§12.7, Eqs. (12.100)-(12.103), pp. 586-587; hassani-2013:§12.5, Eqs. (12.23)-(12.28), pp. 382-383"}
Let $f$ and $g$ be analytic in a region containing a contour $C$, let $\lambda>0$ be a large real parameter, and consider

$$
I(\lambda) \;=\; \int_{C} g(z)\,e^{\lambda f(z)}\,dz .
$$

:cite[Hassani]{work=hassani-2013 loc="§12.5, p. 382"} notes that a complex $\lambda$ may always be made real and positive by absorbing its phase into $f$; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, p. 585"} and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8, p. 905"} instead absorb $\lambda$ into $f$ altogether and write the integrand as $g\,e^{f}$. We keep $\lambda$ visible, since it is the quantity the expansion is in.

Write

$$
f(z) \;=\; \varphi(x,y) + i\,\psi(x,y) , \qquad z = x+iy ,
$$

so that $\lvert e^{\lambda f}\rvert = e^{\lambda\varphi}$ and $\arg e^{\lambda f} = \lambda\psi$. Since $f$ is analytic, $\varphi$ and $\psi$ are harmonic and conjugate, so:

- The curves $\varphi=\text{const}$, on which the modulus of the integrand is constant, are the **level lines**. The curves $\psi=\text{const}$, on which its phase is constant, are the **lines of steepest descent or ascent**. Because $\nabla\varphi\perp\nabla\psi$, the two families cross at right angles, and the direction in which $\lvert e^{\lambda f}\rvert$ changes fastest is the direction in which the phase does not change at all. That coincidence is the whole point of the method.
- $\varphi$ has no interior maximum or minimum where $f$ is analytic: at one, $\varphi_{xx}$ and $\varphi_{yy}$ would have the same sign, contradicting $\varphi_{xx}+\varphi_{yy}=0$. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, p. 586, Exercise 12.7.1"} call the corresponding statement for $\lvert F\rvert$ Jensen's theorem.

A point $z_0$ with

$$
f'(z_0) \;=\; 0
$$

is a **saddle point** of $f$. There $\nabla\varphi=\nabla\psi=0$: both the modulus and the phase of the integrand are stationary. Writing

$$
f''(z_0) \;=\; A\,e^{i\alpha}, \qquad A=\lvert f''(z_0)\rvert>0 , \qquad z-z_0 = \rho\,e^{i\theta} ,
$$

the Taylor expansion $f(z)=f(z_0)+\tfrac12 f''(z_0)(z-z_0)^2+O(\rho^3)$ gives

$$
\varphi - \varphi(z_0) = \tfrac12 A\rho^{2}\cos(2\theta+\alpha)+O(\rho^{3}) ,
\qquad
\psi - \psi(z_0) = \tfrac12 A\rho^{2}\sin(2\theta+\alpha)+O(\rho^{3}) .
$$

Hence, to second order:

- the **level lines** through $z_0$ are the two perpendicular lines made up of the four directions with $\cos(2\theta+\alpha)=0$;
- the lines of constant phase are the two perpendicular lines made up of the four directions with $\sin(2\theta+\alpha)=0$, bisecting the level lines at $\pi/4$;
- of the latter, the pair with $\cos(2\theta+\alpha)=-1$, that is

$$
\theta \;=\; \frac{\pi-\alpha}{2} \quad\text{or}\quad \theta \;=\; \frac{\pi-\alpha}{2}+\pi ,
$$

are the directions in which $\lvert e^{\lambda f}\rvert$ falls off fastest. These two are antiparallel, so together they form a single smooth curve through $z_0$: the **line of steepest descents**. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.1, p. 908"} point out that the plural is deliberate — the modulus decreases on *both* sides of the saddle.

A **valley** is a region in which $\varphi\to-\infty$, so that the integrand tends to zero; the level lines through the saddles divide the plane into valleys and the hills between them. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, pp. 908-909"} call these regions **sectors**; earlier, in :cite[§25.8.1]{work=rhb-2006 loc="§25.8.1, p. 907"}, the same authors observe that a steepest path cannot close on itself, since $\varphi$ decreases monotonically along it until it meets a singularity of $f$.
:::

:::statement[The saddle-point formula]{provenance=adapted src="hassani-2013:§12.5, Eq. (12.34), p. 385; arfken-2013:§12.7, Eqs. (12.106) and (12.108), pp. 588-589; rhb-2006:§25.8.2, Eq. (25.66) p. 909 and the sign rule p. 910"}
Let $f$ and $g$ be analytic in a region containing the contour $C$, let $z_0$ be a saddle point of $f$ with $f''(z_0)=Ae^{i\alpha}$ and $A\neq0$, and suppose that

1. $C$ may be deformed, without crossing a singularity of $f$ or $g$ and without changing its endpoints or the valleys in which they lie, into a contour $C_0$ that crosses $z_0$ along the line of steepest descents;
2. $g$ is continuous and non-zero at $z_0$ and varies slowly compared with $e^{\lambda f}$ near $z_0$;
3. the contribution to $\int_{C_0}$ from outside any fixed neighbourhood of $z_0$ is exponentially smaller than the contribution from inside it.

Then, as $\lambda\to+\infty$,

$$
\int_{C} g(z)\,e^{\lambda f(z)}\,dz
\;\sim\; g(z_0)\,e^{\lambda f(z_0)}\;e^{i\theta}\;\sqrt{\frac{2\pi}{\lambda\,A}} ,
$$

where $\theta$ is the direction, in the sense of traversal of $C_0$, in which the deformed contour passes through $z_0$:

$$
\theta \;=\; \frac{\pi-\alpha}{2} \quad\text{or}\quad \frac{\pi-\alpha}{2}+\pi ,
$$

the choice being fixed by the orientation of $C$. If several saddle points must be crossed, the contributions are added.

The three books state this identically up to bookkeeping. :cite[Hassani]{work=hassani-2013 loc="§12.5, Eq. (12.34), p. 385"} writes $I(\alpha)\approx e^{\alpha f(z_0)}\sqrt{2\pi/\alpha}\,e^{i\theta_1}g(z_0)\lvert f''(z_0)\rvert^{-1/2}$ with the large parameter $\alpha$ explicit, as here. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, Eqs. (12.106), (12.108), pp. 588-589"} absorb $\lambda$ into their exponent $w$ and write $g(z_0)F(z_0)e^{i\theta}\sqrt{2\pi/\lvert w''(z_0)\rvert}$ with $\theta=-\tfrac12\arg w''+(\tfrac\pi2$ or $\tfrac{3\pi}{2})$, which is the same pair of directions. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, Eq. (25.66) p. 909, sign rule p. 910"} write $\pm\sqrt{2\pi/A}\,g(z_0)e^{f_0}e^{i(\pi-\alpha)/2}$ and resolve the sign, on the following page, by the rule that it is $+$ when the direction of traversal satisfies $-\tfrac\pi2<\theta\le\tfrac\pi2$; since $-e^{i(\pi-\alpha)/2}=e^{i[(\pi-\alpha)/2+\pi]}$, their $\pm$ is exactly the choice between the two values of $\theta$ above.
:::

:::note[Three conventions for one sign]{provenance=adapted src="hassani-2013:§12.5, Eq. (12.31), p. 384; rhb-2006:§25.8.2, pp. 909-910; arfken-2013:§12.7, Eq. (12.106), p. 588"}
The two admissible directions differ by $\pi$ and hence by an overall minus sign in the answer, so a convention is needed and the books choose differently.

- :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, pp. 909-910"} keep the factor $e^{i(\pi-\alpha)/2}$ and attach $\pm$ in front, taking $+$ when the traversal direction $\theta$ lies in $(-\tfrac\pi2,\tfrac\pi2]$ — in their words, when the path crosses the saddle in the direction of increasing real part.
- :cite[Hassani]{work=hassani-2013 loc="§12.5, Eq. (12.31), p. 384"} fixes $0\le\theta_1<\pi$ and orients the real parameter $t$ accordingly, so that no $\pm$ appears in his formula; the price is that the orientation of the contour must be checked against his choice, and reversed with a minus sign if it disagrees.
- :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, Eq. (12.106), p. 588"} list both values of $\theta$ and say only that the choice is settled by the sense of traversal at $z_0$, and that nothing but the sign depends on it.

This unit follows the third: $\theta$ *is* the traversal direction, and no separate sign appears. Whichever convention is used, the orientation of the original contour is what decides, and getting it wrong changes the sign of the answer — in the worked example below it would flip the sign of a cosine.
:::

:::idea{provenance=original}
Two obstacles stand between $\int g\,e^{\lambda f}dz$ and Laplace's method. The exponent is complex, so the integrand oscillates and the contributions cancel rather than concentrate; and even its modulus $e^{\lambda\varphi}$ has no peak, because a harmonic function has no interior maximum. Cauchy's theorem removes both at once. The contour may be moved, and we move it to a curve on which $\operatorname{Im}f$ is constant. On such a curve the oscillating factor is a single constant phase that comes outside the integral, and what remains is a real integral with a genuine maximum of $e^{\lambda\varphi}$.

Where can that maximum be? Only at a point where the curve of constant phase has a critical point of $\varphi$ along it, and the no-maximum theorem forces that point to be a saddle: $f'(z_0)=0$. Near it $f$ is quadratic, so on the steepest path the integrand is a Gaussian in the arclength, of width $\lambda^{-1/2}$, and :ref[]{to=asym.laplace-method} finishes the job. The two factors in the answer are then visible in advance: $e^{\lambda f(z_0)}$ is the height of the pass, and $\sqrt{2\pi/(\lambda A)}$ is the width of the Gaussian, with $A=\lvert f''(z_0)\rvert$ measuring how sharply the ground falls away. The one quantity the local picture cannot supply is the direction $e^{i\theta}$ in which the path crosses: that depends on where the contour came from and where it is going.
:::

:::proof[Derivation of the formula]{provenance=adapted src="rhb-2006:§25.8.2, Eqs. (25.64)-(25.66), pp. 909-910; hassani-2013:§12.5, Eqs. (12.29)-(12.34), pp. 384-385; arfken-2013:§12.7, Eqs. (12.104)-(12.108), pp. 588-589"}
**Step 1: move the contour.** $g e^{\lambda f}$ is analytic in the region between $C$ and $C_0$, so by :ref[]{to=complex.cauchy-theorem} the two integrals agree, provided the deformation sweeps no singularity and the endpoints are held fixed. When the endpoints are at infinity, it is enough that they stay inside the same valleys throughout, since the integrand is exponentially small there and the joining arcs contribute nothing in the limit. This is hypothesis 1, and it is a global condition: the local analysis below says nothing about whether it holds.

**Step 2: freeze the phase.** On $C_0$, $\operatorname{Im}f=\psi(z_0)$ is constant by construction, and $\varphi\le\varphi(z_0)$ with equality only at $z_0$, so

$$
\lambda\bigl(f(z)-f(z_0)\bigr) \;=\; -\lambda\,s(z) , \qquad s(z)\ge0 \ \text{real}.
$$

Put $s = \tau^{2}$ with $\tau$ real, negative before the saddle and positive after it. The integral becomes

$$
\int_{C_0} g\,e^{\lambda f}\,dz \;=\; e^{\lambda f(z_0)}\int_{-\infty}^{\infty} g(z(\tau))\,\frac{dz}{d\tau}\,e^{-\lambda\tau^{2}}\,d\tau ,
$$

an integral of exactly the shape treated in :ref[]{to=asym.laplace-method}, with a maximum of the exponent at the interior point $\tau=0$.

**Step 3: the local change of variable.** Near $z_0$, $f(z)-f(z_0)=\tfrac12Ae^{i\alpha}(z-z_0)^{2}+O((z-z_0)^{3})$. Dropping the cubic remainder and writing $z-z_0=\rho e^{i\theta}$ with $\theta$ the steepest-descent direction, so that $e^{i(2\theta+\alpha)}=-1$,

$$
\lambda\bigl(f(z)-f(z_0)\bigr) \;=\; -\tfrac12\lambda A\rho^{2} \;=\; -\lambda\tau^{2} ,
\qquad
\tau = \sqrt{\tfrac{A}{2}}\;\rho ,
\qquad
dz = e^{i\theta}\,d\rho = e^{i\theta}\sqrt{\tfrac{2}{A}}\;d\tau .
$$

This is :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§25.8.2, Eq. (25.65), p. 909"} substitution, written there as $dz=\pm\sqrt{2/A}\,e^{i(\pi-\alpha)/2}ds$; the sign they carry is our choice of which of the two antiparallel directions $\theta$ names, and it is fixed by the orientation of $C$ because $\tau$ must increase along the contour.

**Step 4: evaluate.** By hypothesis 2, $g$ may be replaced by $g(z_0)$ over the width $\rho\sim(\lambda A)^{-1/2}$ of the Gaussian. Counting powers crudely this costs $O(\lambda^{-1/2})$ relative to the leading term, but the bound is not sharp. Expanding $g(z(\tau))\,dz/d\tau$ in powers of $\tau$, the term of first order is odd in $\tau$ and integrates to zero against $e^{-\lambda\tau^{2}}$, so the first surviving correction is the quadratic one and the true relative error is $O(\lambda^{-1})$. This is why :cite[Hassani's]{work=hassani-2013 loc="§12.5, Eq. (12.33), p. 385"} expansion runs in the Gaussian moments $\lambda^{-k-1/2}$, with nothing in between. By hypothesis 3 the limits may be extended to $\pm\infty$, the added tails being exponentially small. With $\int_{-\infty}^{\infty}e^{-\lambda\tau^{2}}d\tau=\sqrt{\pi/\lambda}$ from :ref[]{to=found.gaussian-integrals},

$$
\int_{C} g\,e^{\lambda f}\,dz
\;\sim\; g(z_0)\,e^{\lambda f(z_0)}\,e^{i\theta}\sqrt{\frac{2}{A}}\,\sqrt{\frac{\pi}{\lambda}}
\;=\; g(z_0)\,e^{\lambda f(z_0)}\,e^{i\theta}\sqrt{\frac{2\pi}{\lambda A}} .
$$

**Step 5: several saddles.** If the deformation of step 1 can only be carried out through a chain of saddles joined by valleys, step 2 applies on each stretch separately and the results add; the error in neglecting the overlap is exponentially small provided the saddles are well separated. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, p. 589"} close their treatment by warning that hypothesis 3 — that the saddle neighbourhood really does dominate — has to be verified case by case, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, p. 909"} say the same of the multi-saddle case. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Analyticity is used only in step 1, and it is used globally.** Everything else is Laplace's method on a curve. But step 1 is where the method can silently fail: if the deformation from $C$ to $C_0$ crosses a pole of $g$ or a branch cut of $f$, the answer acquires a residue or a cut integral that the saddle-point formula knows nothing about. The deformation must also respect the valleys containing the ends of $C$; a path that would end on a hill is not a legitimate deformation however much better its saddle looks.
- **$f''(z_0)\neq0$ sets the width and the direction.** If $f''(z_0)=0$ as well, two saddles have coalesced; the local exponent is cubic, the width of the pass is $\lambda^{-1/3}$ rather than $\lambda^{-1/2}$, and the answer involves an Airy function (:ref[]{to=spec.airy-functions}) instead of a Gaussian. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.1, p. 907"} note that the Taylor expansion must then be carried to the first non-vanishing term. The same failure appears as an infinity in the formula above, since $A\to0$.
- **"$g$ slowly varying" is a real restriction, not a formality.** :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, p. 909"} require that $g$ have no zeros or singularities near the saddle and that rapidly varying factors be moved into the exponent, usually as a logarithm. A factor $z^{\nu}$ with $\nu$ comparable to $\lambda$ *moves the saddle*, and treating it as a constant prefactor gives the wrong answer; written as $e^{\nu\ln z}$ it correctly shifts $f$. A zero of $g$ at $z_0$ makes the leading term vanish and the true leading behaviour is $O(\lambda^{-3/2})$, from the next term of the expansion.
- **The contribution of the rest of the contour is assumed, not proved.** Hypothesis 3 is what makes the extension of the integration limits to $\pm\infty$ harmless, and it is the hypothesis most often left unchecked. It holds automatically when $\varphi$ decreases to $-\infty$ along $C_0$ on both sides, since the discarded tails are then smaller than $e^{\lambda\varphi(z_0)-\lambda\delta}$ for some $\delta>0$.
- **With several saddles, the largest $\operatorname{Re}f(z_0)$ wins — but only among those the contour actually crosses.** A saddle with a bigger $\operatorname{Re}f$ that is not on any admissible deformation contributes nothing at all; the worked example below has one such, and if it contributed the integral would be exponentially large instead of exponentially small. When the deformation does cross two saddles of equal $\operatorname{Re}f$, their contributions interfere and the answer oscillates in $\lambda$. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, p. 912"} discuss the other reason to prefer one saddle over another: a nearby second saddle spoils the quadratic approximation even when it is subdominant.
- **The formula is the first term of a series, and the series is asymptotic.** :cite[Hassani]{work=hassani-2013 loc="§12.5, Eq. (12.33), p. 385"} continues the expansion by developing $g$ in a Taylor series about $z_0$ and integrating term by term against the Gaussian moments $\int e^{-\lambda\tau^{2}}\tau^{2k}d\tau=\lambda^{-k-1/2}\Gamma(k+\tfrac12)$. In that calculation the change of variable of step 3 is used in its quadratic form, so his higher coefficients account for the variation of $g$; the contributions of the cubic and higher terms of $f$ enter the same orders and must be expanded as well, as is done explicitly for the Gamma integral in :ref[]{to=asym.stirling-formula}. The resulting series is asymptotic, not convergent (:ref[]{to=asym.asymptotic-series}).
- **The real-axis case is Laplace's method and the level-line case is stationary phase.** If $C$ already passes through $z_0$ along the steepest path — as it does for the Gamma integral — no deformation is needed and the method reduces to :ref[]{to=asym.laplace-method}. If instead the contour is taken along a level line, where the modulus rather than the phase is constant, the same final formula is obtained by a different route: that is :ref[]{to=asym.stationary-phase}, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.3, p. 917"} verify that their two formulas agree.
:::

:::method[Carrying out a saddle-point calculation]{provenance=original}
1. **Get the integral into the form $\int_C g(z)e^{\lambda f(z)}dz$**, with $\lambda$ large and real and with every rapidly varying factor inside the exponent. Powers such as $z^{\nu}$ with large $\nu$, and factorials, belong in $f$ as logarithms; only genuinely slowly varying factors stay in $g$. If the large parameter is buried, rescale the variable first to expose it, as :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, p. 911"} do with $s=x^{1/2}t$ for the Airy integral.
2. **Find the saddles** by solving $f'(z)=0$, and compute $f(z_0)$ and $f''(z_0)=Ae^{i\alpha}$ at each.
3. **Map the landscape.** Determine the valleys, that is the sectors at infinity in which $\operatorname{Re}f\to-\infty$, and locate the endpoints of $C$ in them. Then decide which chain of saddles joins the starting valley to the finishing valley. This is the step that decides the answer, and it is not local: a saddle with a larger $\operatorname{Re}f$ that lies on no admissible chain does not contribute.
4. **Fix the direction.** At each saddle on the chain, the steepest-descent line runs along $\theta=(\pi-\alpha)/2$ and $\theta=(\pi-\alpha)/2+\pi$; take $\theta$ to be whichever of the two points along the direction of traversal, which is determined by which valley the path is coming from.
5. **Write down one term per saddle**, $g(z_0)e^{\lambda f(z_0)}e^{i\theta}\sqrt{2\pi/(\lambda A)}$, and add them.
6. **Check.** Compare $\operatorname{Re}f$ at the saddles used with any crude bound on the integral: a prediction that grows faster than the bound means the wrong chain was chosen. If the original integral is real, the sum must come out real, which for a conjugate pair of saddles means the two terms are conjugate — a sensitive test of the directions chosen in step 4. Finally evaluate the integral numerically at one moderate $\lambda$; for analytic $f$ and $g$ at a non-degenerate saddle the correction to each saddle's term is $O(\lambda^{-1})$ relative to it, there being no half-integer order between.
:::

:::example[A quartic phase with two contributing saddles]{provenance=original}
Take $g\equiv1$ and

$$
I(\lambda) \;=\; \int_{-\infty}^{\infty} \exp\Bigl[\lambda\Bigl(i\,t-\tfrac14 t^{4}\Bigr)\Bigr]\,dt ,
\qquad
f(z) = i z-\tfrac14 z^{4} .
$$

On the real axis the integrand has modulus $e^{-\lambda t^{4}/4}$, so the integral converges absolutely and satisfies the crude bound

$$
\lvert I(\lambda)\rvert \;\le\; \int_{-\infty}^{\infty} e^{-\lambda t^{4}/4}\,dt \;=\; \tfrac12\,\Gamma(\tfrac14)\,(4/\lambda)^{1/4} ,
$$

which we will use in step 6. Replacing $t$ by $-t$ and conjugating leaves the integrand unchanged, so $I(\lambda)$ is real.

**Saddles.** $f'(z)=i-z^{3}=0$ gives $z^{3}=i$, so

$$
z_1 = e^{i\pi/6},\qquad z_2 = e^{i5\pi/6},\qquad z_3 = e^{i3\pi/2}=-i .
$$

At a saddle $z^{4}=z\cdot z^{3}=iz$, so $f(z_k)=iz_k-\tfrac14 iz_k=\tfrac34 i z_k$, which saves all the arithmetic:

$$
f(z_1) = \tfrac34 e^{i2\pi/3} = -\tfrac38+\tfrac{3\sqrt3}{8}i ,
\qquad
f(z_2) = \tfrac34 e^{i4\pi/3} = -\tfrac38-\tfrac{3\sqrt3}{8}i ,
\qquad
f(z_3) = \tfrac34 .
$$

Also $f''(z)=-3z^{2}$, so

$$
f''(z_1) = -3e^{i\pi/3} = 3e^{i4\pi/3},
\qquad
f''(z_2) = -3e^{i5\pi/3} = 3e^{i2\pi/3},
$$

giving $A=3$ at both, with $\alpha=4\pi/3$ at $z_1$ and $\alpha=2\pi/3$ at $z_2$.

**The landscape.** For large $\lvert z\rvert$ the quartic dominates and $\operatorname{Re}f\approx-\tfrac14\lvert z\rvert^{4}\cos4\theta$, so the valleys are the four sectors with $\cos4\theta>0$, centred on $\theta=0,\ \pi/2,\ \pi,\ 3\pi/2$; call them $V_0,V_1,V_2,V_3$. The contour runs from $-\infty$, in $V_2$, to $+\infty$, in $V_0$.

The steepest path through $z_3=-i$ is the imaginary axis: on $z=i\tau$ the exponent $f=-\tau-\tfrac14\tau^{4}$ is real with a maximum at $\tau=-1$, so that path descends from $z_3$ into $V_3$ one way and into $V_1$ the other. It therefore joins $V_3$ to $V_1$ and cannot be part of any path from $V_2$ to $V_0$. The chain that *is* available is

$$
V_2 \;\longrightarrow\; z_2 \;\longrightarrow\; V_1 \;\longrightarrow\; z_1 \;\longrightarrow\; V_0 ,
$$

so $z_1$ and $z_2$ contribute and $z_3$ does not. The bound above confirms this: $\operatorname{Re}f(z_3)=3/4>0$, so a contribution from $z_3$ would be of size $e^{3\lambda/4}$, impossible for a quantity bounded by $O(\lambda^{-1/4})$.

**Directions.** At each saddle $\theta=(\pi-\alpha)/2$ or that plus $\pi$:

- at $z_2$ (reached first, coming from the lower left and leaving to the upper right): $\theta_2 = (\pi-2\pi/3)/2 = \pi/6$;
- at $z_1$ (reached second, coming from the upper left and leaving to the lower right): $\theta_1 = (\pi-4\pi/3)/2 = -\pi/6$.

Both point into the right half plane, consistent with a contour traversed from left to right, which is :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§25.8.2, p. 910"} rule of thumb.

**Assembling.** With $A=3$ and $g\equiv1$,

$$
I(\lambda) \;\sim\; \sqrt{\frac{2\pi}{3\lambda}}\left[
e^{\lambda(-3/8-3\sqrt3 i/8)}e^{i\pi/6}
+ e^{\lambda(-3/8+3\sqrt3 i/8)}e^{-i\pi/6}\right] .
$$

The two terms are complex conjugates, so the sum is real, as it must be:

$$
\boxed{\;I(\lambda)\;\sim\;2\sqrt{\frac{2\pi}{3\lambda}}\;e^{-3\lambda/8}\,
\cos\!\left(\frac{3\sqrt3}{8}\lambda-\frac{\pi}{6}\right)\;}
$$

**The number.** At $\lambda=20$: $e^{-3\lambda/8}=e^{-7.5}$, $2\sqrt{2\pi/60}=0.6472086$, $\tfrac{3\sqrt3}{8}\cdot20=12.99038$, so the argument of the cosine is $12.46678$ and the cosine is $0.9950452$. The prediction is

$$
I(20) \;\approx\; 3.561873\times10^{-4} .
$$

Numerical quadrature of the original real integral gives

$$
I(20) \;=\; 3.541078\times10^{-4} ,
$$

a relative error of $0.59\%$. At $\lambda=40$ the prediction is $1.326920\times10^{-7}$ against the exact $1.325479\times10^{-7}$, a relative error of $0.11\%$. The $O(\lambda^{-1})$ accuracy the method claims is accuracy relative to each saddle's own contribution, and not relative to their sum: the error of the sum, measured against the exact value, is $+5.9\times10^{-3}$ at $\lambda=20$, $+1.1\times10^{-3}$ at $40$, $-9.3\times10^{-4}$ at $60$ and $-4.3\times10^{-3}$ at $240$, so it does not fall like $\lambda^{-1}$ at all. The reason is that the first correction shifts the argument of the cosine as well as the amplitude, and a shift of size $\lambda^{-1}$ in the argument costs little near a maximum of the cosine and arbitrarily much, in relative terms, near a zero of it, where the sum itself is small.

**What the example shows.** The answer is exponentially *small*, of size $e^{-3\lambda/8}$, even though the integrand has modulus $1$ at $t=0$: the smallness is pure cancellation, and no amount of care on the real axis would reveal it. It is also *oscillatory* in $\lambda$, and the oscillation comes from the imaginary parts of $f$ at the two saddles — a single saddle can never produce it. Finally, had the directions been taken as $\theta_1=5\pi/6$ and $\theta_2=7\pi/6$, the result would have been the same cosine with the opposite sign, and at $\lambda=20$ the prediction would have been wrong not by $0.59\%$ but by $200\%$.
:::

:::application{provenance=original}
**Stirling's formula and the Gamma function.** The oldest and still the most used application is $\Gamma(\lambda+1)=\int_0^\infty e^{-t}t^{\lambda}dt$. Writing $t^{\lambda}=e^{\lambda\ln t}$ — step 1 of the method, moving the rapidly varying factor into the exponent — and rescaling $t=\lambda u$ puts the integral in standard form with a saddle at $u=1$ on the real axis, where the contour already runs along the steepest path, so $\theta=0$ and the formula gives $\sqrt{2\pi\lambda}\,\lambda^{\lambda}e^{-\lambda}$ at once. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, Example 12.7.1, p. 589"} and :cite[Hassani]{work=hassani-2013 loc="§12.5, Example 12.5.1, p. 385"} both present exactly this calculation, and Arfken remarks that the method is probably the easiest route to the leading term. The corrections, and the extension to complex argument, are the subject of :ref[]{to=asym.stirling-formula}.

**Asymptotics of Bessel, Hankel and Airy functions.** Every special function with a contour-integral representation yields its large-argument behaviour this way, and the structure of the answer is read off the saddle geometry. :cite[Hassani]{work=hassani-2013 loc="§12.5, Example 12.5.2, p. 386"} applies the formula to $H^{(1)}_\nu(\lambda)=\frac{1}{i\pi}\int_C e^{(\lambda/2)(z-1/z)}z^{-\nu-1}dz$, where $f'=0$ gives $z_0=\pm i$ and the contour selects $z_0=+i$, with $f(i)=i$ producing the travelling-wave factor $e^{i\lambda}$ and $\theta_1=3\pi/4$ producing the phase $-\pi/4$ that appears in every Bessel asymptotic formula (:ref[]{to=spec.bessel-asymptotics}, :ref[]{to=spec.bessel-integral-representations}). :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.8.2, pp. 911-912"} do the same for $\mathrm{Ai}(x)$ with $x>0$: the saddles sit at $t=\pm i$ after rescaling, the one at $+i$ is chosen, and the result $(2\sqrt\pi x^{1/4})^{-1}e^{-2x^{3/2}/3}$ is the decaying branch that identifies the function. The oscillatory branch, for $x<0$, comes from two real stationary points and belongs to :ref[]{to=asym.stationary-phase}; the fact that the same function is governed by different saddles in different sectors of the complex plane is the Stokes phenomenon of :ref[]{to=asym.wkb-approximation}.

**Statistical mechanics: the partition function and the equivalence of ensembles.** :cite[Hassani]{work=hassani-2013 loc="§12.5, p. 382"} introduces the method precisely as Debye's technique for the contour integral that represents the partition function. The canonical pattern is that the microcanonical density of states is recovered from the canonical partition function by an inverse Laplace transform,

$$
\Omega(E) \;=\; \frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty} Z(\beta)\,e^{\beta E}\,d\beta
\;=\; \frac{1}{2\pi i}\int e^{\,N[\,\beta\epsilon-\beta\! f(\beta)\,]}\,d\beta ,
$$

with $N$ the particle number playing the role of $\lambda$. The saddle-point condition is the thermodynamic relation that fixes the temperature given the energy per particle, the exponent at the saddle is $N$ times the entropy, and the Gaussian width gives the $O(N^{-1/2})$ relative fluctuations. That the two ensembles agree to leading order, and differ by a factor $\sqrt{2\pi N\,\sigma^2}$ in the prefactor, *is* the saddle-point formula. The same calculation in probabilistic language is the Legendre transform at the heart of :ref[]{to=prob.large-deviations}, and the Gaussian correction is the local central limit refinement of :ref[]{to=prob.central-limit-theorem}.

**Inverting Laplace transforms.** The Bromwich integral $f(t)=\frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty}\bar f(s)e^{st}ds$ is in standard form with $\lambda=t$, and the long-time behaviour of $f$ follows from the saddle of $st+\ln\bar f(s)$ — or, when $\bar f$ has a branch point, from the steepest path wrapped around the cut. Diffusion fronts, dispersive pulse arrivals and the late-time tails of Green functions are all computed this way; see :ref[]{to=fourier.laplace-transform} and :ref[]{to=complex.branch-cut-integrals}.

**Numerical mathematics: quadrature along the steepest path.** The formula's own construction suggests an algorithm. Deforming an oscillatory integral onto the steepest-descent contour and then applying Gauss-Hermite quadrature turns a problem whose cost grows with $\lambda$ into one whose cost *falls* with $\lambda$, because the integrand becomes a smooth Gaussian bump of width $\lambda^{-1/2}$ with no oscillation at all. This is the basis of numerical steepest descent for highly oscillatory integrals, and it is the practical counterpart of :ref[]{to=num.quadrature} failing on $\int e^{i\lambda f}$ for large $\lambda$. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, Example 12.7.2, p. 590"} make the point in miniature: for $H(t)=\int e^{-t(z^{2}-1/4)}\cos(tz)(1+z^{2})^{-1}dz$ at $t=100$ the integrand on the real axis oscillates so fast that ordinary quadrature is painful, while the saddle at $z_0=i/2$ gives $0.23633$ against the exact $0.23284$ with no numerical work at all.
:::
