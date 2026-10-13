---
id: pde.advection-diffusion
title: Advection, diffusion and reaction
kind: application
level: core
summary: "Adding transport and reaction to the diffusion equation: the Peclet number that says which of advection and diffusion wins, the change to a moving frame that solves the linear problem exactly, and the travelling fronts that a bistable reaction term supports."
prereqs: [pde.heat-kernel, pde.first-order-characteristics, pde.travelling-waves]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§0.1, Remark 1 and Eq. (0.1.9), p. 6 (convective flux); §0.3, reaction-diffusion models, Eq. (0.3.1), p. 12 and Eq. (0.3.11), p. 14, and energy-balance climate models, Eqs. (0.3.12)–(0.3.18), pp. 14–16; §8.2, Exercise 8.2.1, p. 486 (drift curves for a pollutant)"
    pages: "5-6, 12-16, 486"
    role: the convection term as an addition to the Fourier flux; reaction-diffusion systems as models of chemical reactors and catalyst pellets; the moving-coordinate reduction for a time-dependent drift
  - work: evans-2010
    loc: "§4.2.1c, travelling waves for a bistable equation, Eqs. (12)–(26), pp. 170–175; §4.1, the Turing instability, Eqs. (26)–(33), pp. 165–166"
    pages: "165-166, 170-175"
    role: "statement followed for the bistable travelling front: hypotheses on $f$, the reduced ordinary differential equation, the energy function $E$ and the existence of a negative velocity"
  - work: strauss-2008
    loc: "§1.3, derivation of the diffusion equation from Fick's law, p. 15; §2.4, Exercises 16 and 18, p. 54"
    pages: "15, 54"
    role: the conservation-law derivation; the books' own framing of the moving-frame and exponential-factor reductions as exercises
  - work: grimmett-stirzaker-2020
    loc: "§13.3, Example (10), the Wiener process with drift, and Eq. (7), the forward equation, pp. 583–584"
    pages: "583-584"
    role: "the probabilistic reading: the advection-diffusion equation is the forward equation of Brownian motion with constant drift"
---

:::definition[Advection, diffusion, reaction]{provenance=adapted src="stakgold-holst-2011:§0.1, Remark 1, Eq. (0.1.9), p. 6; stakgold-holst-2011:§0.3, Eq. (0.3.1), p. 12, Eq. (0.3.11), p. 14 and Eqs. (0.3.13)–(0.3.18), pp. 15–16; strauss-2008:§1.3, p. 15"}
Let $u(x,t)$ be the concentration of a substance carried along a pipe. Conservation of mass on an arbitrary interval says $u_t = -J_x + p$, where $J$ is the flux and $p$ the volume rate of production. Two mechanisms contribute to $J$:

- **diffusion**, by Fick's law $J_{\mathrm{diff}} = -D\,u_x$ with $D>0$ the diffusivity, as in :cite{work=strauss-2008 loc="p. 15"};
- **advection** (also called convection), the bodily transport of the substance by a fluid moving with velocity $V$: $J_{\mathrm{adv}} = V u$. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Remark 1, p. 6"} introduce exactly this term by replacing Fourier's law $J = -k\,\mathrm{grad}\,u$ with $J = -k\,\mathrm{grad}\,u + Cu\mathbf{v}$ for a medium moving with velocity $\mathbf{v}$, and note that for an incompressible fluid, where $\mathrm{div}\,\mathbf{v} = 0$, this adds a term proportional to $\mathbf{v}\cdot\mathrm{grad}\,u$ to the heat equation.

With $D$ and $V$ constant and $p = 0$ this gives the **advection-diffusion equation**

$$
u_t + V\,u_x = D\,u_{xx} .
$$

If instead the production term depends on the concentration itself, $p = f(u)$, the result is a **reaction-diffusion equation**

$$
u_t = D\,u_{xx} + f(u) .
$$

:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.3, Eq. (0.3.11), p. 14"} derive such systems for a first-order irreversible reaction in a catalyst pellet, where $f$ carries the Arrhenius factor $e^{-B/u}$ of their Eq. (0.3.1) :cite{work=stakgold-holst-2011 loc="p. 12"}; later in the same section they build an energy-balance climate model of the same shape, with $f(u) = QS(x)a(u) - (A + Bu)$ :cite{work=stakgold-holst-2011 loc="Eqs. (0.3.13)–(0.3.18), pp. 15–16"}. Dropping $D$ leaves the first-order equation $u_t + Vu_x = 0$ of :ref[characteristics]{to=pde.first-order-characteristics}; dropping $V$ and $f$ leaves the heat equation of :ref[the heat kernel]{to=pde.heat-kernel}.
:::

:::definition[The Peclet number]{provenance=original}
Fix a length $L$ characteristic of the problem — a pipe length, the width of an initial release, the size of a grid cell. Advection moves the substance across that length in the time $L/V$; diffusion spreads it across that length in the time $L^2/D$. The ratio of these times is the dimensionless **Peclet number**

$$
\mathrm{Pe} = \frac{L^2/D}{L/V} = \frac{V L}{D} .
$$

Equivalently, scaling $x = L\xi$ and $t = (L^2/D)\tau$ in the advection-diffusion equation gives

$$
u_\tau + \mathrm{Pe}\,u_\xi = u_{\xi\xi} ,
$$

so $\mathrm{Pe}$ is the only parameter left: all advection-diffusion problems with the same Peclet number and the same shaped data are the same problem. Large $\mathrm{Pe}$ means transport dominates and the equation is nearly the first-order one; small $\mathrm{Pe}$ means diffusion dominates and the velocity is a small correction.
:::

:::statement[Solution in a moving frame]{provenance=original}
Let $D > 0$ and $V \in \mathbb{R}$ be constants, let $g$ be continuous and bounded on $\mathbb{R}$, and let

$$
S_D(x,t) = \frac{1}{\sqrt{4\pi D t}}\,e^{-x^2/4Dt}
$$

be the heat kernel with diffusivity $D$. Then

$$
u(x,t) = \int_{-\infty}^{\infty} S_D\bigl(x - Vt - y,\, t\bigr)\, g(y)\,dy , \qquad t>0 ,
$$

is infinitely differentiable for $t>0$, solves $u_t + Vu_x = D u_{xx}$, and tends to $g(x_0)$ as $(x,t)\to(x_0,0)$ with $t>0$. In words: *the profile diffuses exactly as if $V$ were zero, while the whole pattern is carried along at speed $V$.* Three consequences:

1. **Mean and width.** Suppose in addition that $g \ge 0$, that its total mass $M = \int g$ is finite and positive, and that its second moment is finite, $\int y^2 g(y)\,dy < \infty$. Then $\int u(x,t)\,dx = M$ for all $t$, the centre of mass is at $\bar x(t) = \bar x(0) + Vt$, and the variance about it is $\mathrm{var}(t) = \mathrm{var}(0) + 2Dt$. (A finite first moment need not be assumed: Cauchy-Schwarz applied to $|y|\sqrt{g}\cdot\sqrt{g}$ gives $\int |y|\,g \le \bigl(\int y^2 g\bigr)^{1/2}\bigl(\int g\bigr)^{1/2} < \infty$. Some decay hypothesis is needed, and the second moment is the stronger of the two: $g(y) = (1+y^2)^{-1}$ is bounded, continuous and non-negative with finite mass but with neither a mean nor a variance, while $g(y) = (1+|y|^3)^{-1}$ has a finite mass and a finite mean, the integrands there decaying like $|y|^{-3}$ and $|y|^{-2}$, yet $\int y^2 g = \infty$ because there the integrand decays only like $|y|^{-1}$.)
2. **Relative spread.** Keep the hypotheses of part 1 and let $V > 0$. By the time the cloud has travelled a distance $L$, that is at $t = L/V$, diffusion has added $2DL/V$ to the variance, so the standard deviation is
   $$
   \sqrt{\mathrm{var}(0) + 2DL/V} .
   $$
   For a release that starts concentrated, meaning $\mathrm{var}(0)$ negligible beside $2DL/V$, this is close to $\sqrt{2DL/V} = L\sqrt{2/\mathrm{Pe}}$ with $\mathrm{Pe} = VL/D$. (The hypotheses of part 1 force $\mathrm{var}(0) > 0$ strictly, since a continuous $g \ge 0$ of positive mass cannot be concentrated at a point; the limiting value $\mathrm{var}(0)=0$ belongs to the point release of the example below, which the statement does not cover but the kernel itself handles.) The cloud therefore stays sharp relative to the distance travelled exactly when $\mathrm{Pe}$ is large and the initial width is small compared with $L$.
3. **A linear decay term.** If $u_t + Vu_x = Du_{xx} - r u$ with $r$ constant, then $u = e^{-rt}w$ where $w$ solves the equation without the decay term, so the formula above acquires the factor $e^{-rt}$.
:::

:::idea{provenance=original}
The equation treats $x$ and $t$ asymmetrically only through the drift, and a drift is exactly what a change of observer removes. Sitting on the fluid, that is substituting $y = x - Vt$, the advection term and the time derivative combine into the material derivative, and what is left is the heat equation. Everything then follows from the heat kernel, read in the new coordinate.
:::

:::proof{provenance=original}
**Step 1 (change of frame).** Suppose $w$ is a solution of $w_t = D w_{yy}$ and set $u(x,t) = w(x - Vt, t)$. By the chain rule, with $y = x - Vt$,

$$
u_t(x,t) = w_t(y,t) - V\,w_y(y,t), \qquad u_x = w_y, \qquad u_{xx} = w_{yy} ,
$$

so $u_t + V u_x = w_t = D w_{yy} = D u_{xx}$: the change of variable converts solutions of the heat equation into solutions of the advection-diffusion equation. The computation is reversible, so it is a bijection between the two solution sets.

**Step 2 (apply the heat kernel).** Let $w(y,t) = \int S_D(y-z,t)g(z)\,dz$. By :ref[the heat-kernel theorem]{to=pde.heat-kernel}, applied with diffusivity $D$, $w$ is $C^\infty$ for $t>0$, solves $w_t = Dw_{yy}$, and $w(y,t)\to g(y_0)$ as $(y,t)\to(y_0,0)$. Step 1 turns this into the stated $u$, which is therefore $C^\infty$ and solves the equation; and since $(x,t)\to(x_0,0)$ forces $(x-Vt,t)\to(x_0,0)$, the initial condition carries over.

**Step 3 (mass, mean, variance).** Each is a property of $S_D$ transported by Step 1. $\int S_D(\cdot,t) = 1$ gives conservation of mass by Tonelli's theorem, the integrand being non-negative. Treating $u(\cdot,t)/M$ as a probability density — legitimate because $M$ is finite and positive by hypothesis — it is the convolution of the two densities $g/M$ and $S_D(\cdot,t)$, translated by $Vt$. The mean and variance of $g/M$ exist because its second moment was assumed finite, which as noted in part 1 also makes its first moment finite, and those of $S_D(\cdot,t)$ are $0$ and $2Dt$ by the definition of $S_D$. Convolution of two densities with finite second moments adds their means and adds their variances, and a translation adds to the mean only. This is part 1. Substituting $t = L/V$ into $\mathrm{var}(t) = \mathrm{var}(0) + 2Dt$ gives part 2, with $2DL/V = L^2\cdot 2D/(VL) = 2L^2/\mathrm{Pe}$, so that the term diffusion contributes to the standard deviation is $L\sqrt{2/\mathrm{Pe}}$.

**Step 4 (decay term).** If $u = e^{-rt}w$ then $u_t + Vu_x - Du_{xx} + ru = e^{-rt}\bigl(w_t - rw + Vw_x - Dw_{xx} + rw\bigr) = e^{-rt}(w_t + Vw_x - Dw_{xx})$, which vanishes precisely when $w$ solves the undecayed equation. $\square$
:::

:::note{provenance=adapted src="stakgold-holst-2011:§8.2, Exercise 8.2.1, p. 486; strauss-2008:§2.4, Exercises 16 and 18, p. 54"}
Both reductions used above are the ones the books themselves point to. :cite[Strauss]{work=strauss-2008 loc="Exercises 16 and 18, p. 54"} sets the moving frame $y = x - Vt$ for $u_t - ku_{xx} + Vu_x = 0$ and the factor $e^{-bt}$ for $u_t - ku_{xx} + bu = 0$ as exercises with exactly those hints. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Exercise 8.2.1, p. 486"} pose the same problem for a pollutant of concentration $C$ with constant diffusivity $D$ and a *time-dependent* wind $U(t)$, asking for the transformation $t' = t$, $x' = x - \mathcal{V}(t)$ that removes the convection term, and they call the curves $x - \mathcal{V}(t) = \text{constant}$ **drift curves**. For $\mathcal{V}(t) = \int_0^t V(s)\,ds$ Step 1 goes through unchanged with $Vt$ replaced by $\mathcal{V}(t)$, since $\partial_t \mathcal{V} = V(t)$ is all that the chain rule uses: the cloud follows the drift curve through its release point while spreading as $\sqrt{2Dt}$.
:::

:::statement[Travelling fronts of a bistable reaction-diffusion equation]{provenance=adapted src="evans-2010:§4.2.1c, Eqs. (12)–(16) and (26), pp. 170–175"}
Consider the scalar reaction-diffusion equation

$$
u_t - u_{xx} = f(u) \qquad \text{in } \mathbb{R}\times(0,\infty) ,
$$

where $f : \mathbb{R}\to\mathbb{R}$ is smooth and, for some point $0 < a < 1$, satisfies

- (a) $f(0) = f(a) = f(1) = 0$;
- (b) $f < 0$ on $(0,a)$ and $f > 0$ on $(a,1)$;
- (c) $f'(0) < 0$ and $f'(1) < 0$;
- (d) $\int_0^1 f(z)\,dz > 0$.

A **travelling wave** is a solution of the form $u(x,t) = v(x - \sigma t)$. Substituting into the equation gives the ordinary differential equation

$$
v'' + \sigma v' + f(v) = 0 ,
$$

and to it one *imposes* the conditions that make the wave a front between the two stable states, Evans' (16):

$$
\lim_{s\to+\infty}v(s) = 1,\qquad \lim_{s\to-\infty}v(s) = 0,\qquad \lim_{s\to\pm\infty}v'(s)=0 .
$$

These limits do not follow from the substitution; they are part of what is being asked for. Evans shows by a phase-plane argument that there exists a velocity $\sigma < 0$ for which this problem has a solution, so the equation has a travelling wave interpolating between the two stable states $0$ and $1$; and he states that a more refined analysis shows this velocity is **unique** :cite{work=evans-2010 loc="p. 175"}. Hypothesis (c) is what makes $0$ and $1$ stable as constant solutions, with the intermediate constant $a$ unstable; the front is therefore an invasion of one stable state by the other. This is the existence theorem of :ref[travelling waves]{to=pde.travelling-waves}, restated here because the identity below and the examples need its hypotheses in front of them; that unit works Evans' argument through in detail.
:::

:::note{provenance=adapted src="evans-2010:§4.2.1c, pp. 171–175"}
No proof is given here, for two reasons. The phase-plane route — writing $w = v'$, reading a front as a trajectory joining the saddle at $(0,0)$ to the saddle at $(1,0)$, and moving $\sigma$ until the unstable and stable curves meet — is set out step by step in :ref[travelling waves]{to=pde.travelling-waves}, and repeating it here would duplicate that unit. And the source itself stops short of a complete argument: Evans says he outlines the analysis "without complete proofs" :cite{work=evans-2010 loc="p. 171"}, and the uniqueness of $\sigma$ is asserted rather than demonstrated :cite{work=evans-2010 loc="p. 175"}. What this unit adds is what can be settled in full: the identity below, which fixes the sign of $\sigma$ from $f$ alone, and the exact front in the second example.
:::

:::statement[The velocity is fixed by the areas]{provenance=adapted src="evans-2010:§4.2.1c, the function $E$ and its derivative, p. 173"}
Let $f$ be continuous and let $v$ solve $v'' + \sigma v' + f(v) = 0$ on $\mathbb{R}$ with $v(-\infty) = 0$, $v(+\infty) = 1$ and $v'(\pm\infty) = 0$, with $v' \in L^2(\mathbb{R})$. Then

$$
\sigma \int_{-\infty}^{\infty} v'(s)^2\,ds \;=\; -\int_0^1 f(z)\,dz .
$$

In particular $\sigma$ has the opposite sign to $\int_0^1 f$, so Evans' hypothesis (d) forces $\sigma<0$: the state $1$, the one with the greater "area" under $f$, advances. If $\int_0^1 f = 0$ the front is stationary.
:::

:::proof{provenance=adapted src="evans-2010:p. 173"}
Evans' energy is $E(v,w) = \tfrac12 w^2 + \int_0^{v} f(z)\,dz$ evaluated along a trajectory, with $w = v'$. Along a solution,

$$
\frac{d}{ds}E\bigl(v(s),v'(s)\bigr) = v'v'' + f(v)\,v' = v'\bigl(v'' + f(v)\bigr) = -\sigma\, v'(s)^2 ,
$$

the last step by the differential equation. The right-hand side is integrable on $\mathbb{R}$ because $v'\in L^2$, so $s \mapsto E(v(s),v'(s))$ is an antiderivative of an integrable function. It is $E$ itself, not its derivative, that has limits at the two ends: $E$ is continuous, and $v\to 0$, $v'\to 0$ as $s\to-\infty$ while $v\to1$, $v'\to0$ as $s\to+\infty$, so $E(v(s),v'(s))\to E(0,0)=0$ and $\to E(1,0)=\int_0^1 f$ respectively. Hence, by the fundamental theorem of calculus,

$$
\int_{-\infty}^{\infty}\frac{d}{ds}E\,ds = E(1,0) - E(0,0) = \int_0^1 f(z)\,dz ,
$$

the two end values being the limits just identified. Equating this with the integral of $-\sigma (v')^2$ gives $\int_0^1 f = -\sigma\int (v')^2$. Since $\int (v')^2 > 0$ (otherwise $v$ is constant and cannot have two different limits), the sign statement follows. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *$D>0$ in the moving-frame theorem.* Step 2 is the heat-kernel theorem, which needs $D>0$. With $D = 0$ the solution is $g(x-Vt)$, pure translation with no spreading, and the problem is the first-order one; the moving frame is then the characteristic (:ref[characteristics]{to=pde.first-order-characteristics}).
- *$V$ constant* is used only in Step 1, and only through $\partial_t(Vt) = V$; a $V$ depending on $t$ alone is as easy, as the note above says. A $V$ depending on $x$ is a different problem: the frame change is no longer a rigid shift, the flux $Vu$ contributes $V_x u$ as well, and no reduction to the heat equation is available in general.
- *Bistability, that is Evans' (c).* If $f'(0)>0$ the state $0$ is unstable and the structure of the travelling-wave problem changes: $(0,0)$ is then not a saddle, and the conclusion of the theorem — one wave with one velocity — need not hold. Hypotheses (a)-(d) are stated exactly as Evans gives them, and the statement above claims nothing outside them.
- *$\int_0^1 f \ne 0$ is what makes the front move*, by the identity. It is a statement about areas, not about shapes: two nonlinearities with the same $\int_0^1 f$ but very different profiles give fronts of the same sign of velocity, though not the same speed, because $\int(v')^2$ differs.
- *The Peclet number needs a length.* $\mathrm{Pe}$ is not a property of the equation alone; different choices of $L$ give different numbers for the same physical set-up, and a statement such as "advection dominates" is meaningless until $L$ is named.
:::

:::example[A release into a river]{provenance=original}
A mass $M$ of tracer is released at $x=0$, $t=0$ into a channel with mean speed $V = 0.5\,\mathrm{m/s}$ and longitudinal dispersion coefficient $D = 5\,\mathrm{m^2/s}$.

A point release is not one of the continuous bounded data the statement above admits, so we do not use its formula. What we use instead is the drifting kernel itself: by Step 1 of the proof, $u(x,t) = M\,S_D(x - Vt,\,t)$, that is

$$
u(x,t) = \frac{M}{\sqrt{4\pi D t}}\,\exp\!\Bigl(-\frac{(x-Vt)^2}{4Dt}\Bigr) ,
$$

solves $u_t + Vu_x = Du_{xx}$ for every $t>0$, carries mass $M$ at every time, and concentrates at $x = 0$ as $t \to 0^+$ — the point-source reading of the kernel described in :ref[the heat kernel]{to=pde.heat-kernel}. It is a Gaussian of mean $Vt$ and variance $2Dt$, which is what parts 1 and 2 of the statement would say if $\mathrm{var}(0)=0$ were allowed in them. It is not — those parts need a continuous $g\ge0$, whose variance is positive — so read the point release as the limiting case they approach, and the formulas below as read off the kernel directly rather than quoted from the statement.

Take $L = 1000\,\mathrm{m}$, the distance to a water intake downstream.

1. *Peclet number.* $\mathrm{Pe} = VL/D = (0.5)(1000)/5 = 100$. Advection dominates: the tracer arrives as a recognisable pulse, not a slow seepage.
2. *Arrival.* The maximum of the travelling profile reaches the intake at $t = L/V = 2000\,\mathrm{s} = 33.3\,\mathrm{min}$. The concentration *measured at the intake* peaks a little earlier, at $t = 1980.1\,\mathrm{s}$: the $t^{-1/2}$ prefactor is still falling while the cloud arrives, and it pulls the maximum about $1\%$ early.
3. *Width.* At $t = L/V$ the standard deviation of the cloud is $\sqrt{2Dt} = \sqrt{2\cdot5\cdot2000} = 141.4\,\mathrm{m}$, which is $L\sqrt{2/\mathrm{Pe}} = 1000\sqrt{0.02} = 141.4\,\mathrm{m}$: the formula of part 2 in its $\mathrm{var}(0)=0$ limit.
4. *Peak concentration.* $u_{\max} = M/\sqrt{4\pi D t} = M/354.5$, in units of mass per metre: a release of $10\,\mathrm{kg}$ gives $28.2\,\mathrm{g/m}$ at the peak.
5. *Duration.* Two standard deviations either side of the centre the Gaussian factor is $e^{-2} = 0.135$, so the intake sees concentrations above about $14\%$ of the peak for a time $4\sqrt{2Dt}/V = 4(141.4)/0.5 = 1131\,\mathrm{s}$, about $19\,\mathrm{min}$. (The letter $\sigma$ is reserved in this unit for the velocity of a travelling front.)
6. *What would change at low Peclet number.* Were the channel ten times slower, $\mathrm{Pe} = 10$ and the relative spread $\sqrt{2/\mathrm{Pe}} = 0.45$: the cloud would be nearly as long as its journey, and tracer would have reached the intake long before the peak did, since the Gaussian is positive everywhere: the leading edge of the cloud runs ahead of its centre, downstream of the peak.
:::

:::example[An exact bistable front]{provenance=original}
Take the cubic $f(u) = u(1-u)(u-a)$ with $0 < a < \tfrac12$, so that Evans' hypotheses hold: $f$ vanishes at $0,a,1$; $f<0$ on $(0,a)$ and $f>0$ on $(a,1)$; $f'(0) = -a < 0$ and $f'(1) = a-1 < 0$; and

$$
\int_0^1 f(z)\,dz = \int_0^1\bigl(z^2 - z^3 - az + az^2\bigr)dz = \frac{1}{12} - \frac{a}{6} = \frac{1-2a}{12} > 0 .
$$

*Find the front.* Try the logistic profile $v(s) = \bigl(1+e^{-bs}\bigr)^{-1}$, which satisfies $v' = b\,v(1-v)$ and therefore $v'' = b\,v'(1-2v) = b^2 v(1-v)(1-2v)$. Substituting into $v''+\sigma v'+f(v)=0$ and dividing by $v(1-v)$, which is positive,

$$
b^2(1-2v) + \sigma b + (v - a) = 0
\qquad\Longleftrightarrow\qquad
(1 - 2b^2)\,v + \bigl(b^2 + \sigma b - a\bigr) = 0 .
$$

This holds for all $v$ exactly when both brackets vanish:

$$
b = \frac{1}{\sqrt2}, \qquad \sigma = \frac{a - b^2}{b} = \sqrt2\Bigl(a - \tfrac12\Bigr) .
$$

So the front and its velocity are

$$
u(x,t) = \frac{1}{1 + \exp\bigl(-(x-\sigma t)/\sqrt2\bigr)}, \qquad \sigma = \sqrt{2}\,\bigl(a-\tfrac12\bigr) < 0 ,
$$

with $v(-\infty)=0$, $v(+\infty)=1$, $v'(\pm\infty)=0$, exactly as the statement requires — and $\sigma<0$, as the area identity demands.

*Check the identity.* With $a = \tfrac14$: $\sigma = \sqrt2(-\tfrac14) = -0.353553$ and $\int_0^1 f = \tfrac{1}{24} = 0.0416667$. For the integral of $(v')^2$, use $v' = \tfrac{1}{\sqrt2}v(1-v)$ and $v(1-v) = \tfrac14\operatorname{sech}^2(s/2\sqrt2)$, together with $\int\operatorname{sech}^4\theta\,d\theta = \tfrac43$:

$$
\int_{-\infty}^{\infty}(v')^2 ds = \frac12\cdot\frac{1}{16}\int \operatorname{sech}^4\!\Bigl(\frac{s}{2\sqrt2}\Bigr)ds
= \frac{1}{32}\cdot 2\sqrt2 \cdot \frac43 = \frac{\sqrt2}{12} = 0.117851 .
$$

Then $\sigma\int(v')^2 = (-0.353553)(0.117851) = -0.0416667 = -\int_0^1 f$. The identity is satisfied to every digit, for every $a$. (The front itself, and the way the guess $v' = b\,v(1-v)$ selects $b$ and $\sigma$, is worked out at more length in :ref[travelling waves]{to=pde.travelling-waves}; what is new here is the check against the area identity.)

*Numbers with dimensions.* For $u_t = D u_{xx} + r\,u(1-u)(u-a)$, scaling $x = \sqrt{D/r}\,\xi$ and $t = \tau/r$ returns the equation above, so the physical speed is $\sqrt{Dr}\,|\sigma|$ and the front thickness is $\sqrt{D/r}$ times the dimensionless one. The profile rises from $0.1$ to $0.9$ over $2\sqrt2\ln 9 = 6.215$ dimensionless units. For a gas-phase front with $D = 0.2\,\mathrm{cm^2/s}$ and $r = 10^4\,\mathrm{s^{-1}}$ and $a = \tfrac14$, the speed is $\sqrt{2000}\cdot0.353553 = 15.8\,\mathrm{cm/s}$ and the front is $6.215\sqrt{2\times10^{-5}} = 0.028\,\mathrm{cm}$ thick: thin and fast, which is what a flame looks like.
:::

:::application{provenance=original}
**Which term to keep.** The Peclet number decides how to model, how to measure and how to compute. In a river or a ventilation duct $\mathrm{Pe}$ is in the hundreds, so a pollutant arrives as a translating pulse and the measurement that matters is its arrival time $L/V$; in a stagnant pore, a gel, or across a cell membrane $\mathrm{Pe}$ is far below one and the velocity can be dropped. Chromatography lives in between: the retention time is set by $V$ and the peak width, which sets the resolution, by $D$ — and by part 2 of the moving-frame statement the peak width relative to the distance travelled is $\sqrt{2/\mathrm{Pe}}$, so the resolving power of a column improves only as $\sqrt{\mathrm{Pe}}$, that is as the square root of its length.

**Numerical warning.** When the advection-diffusion equation is discretised, the relevant Peclet number uses the *cell* size: $\mathrm{Pe}_{\text{cell}} = V\Delta x/D$. Centred differences for $Vu_x$ combined with centred differences for $Du_{xx}$ produce a scheme whose coefficients lose their sign once $\mathrm{Pe}_{\text{cell}} > 2$, and the computed solution then oscillates around steep fronts — the same loss of a discrete maximum principle seen in :ref[the maximum principle]{to=pde.heat-maximum-principle}. The classical responses are to refine until $\mathrm{Pe}_{\text{cell}} \le 2$ or to use one-sided (upwind) differences for the advection term; see :ref[finite differences]{to=num.finite-differences}.

**The probabilistic reading.** :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="Example (10), p. 584"} derive, for a one-dimensional Brownian particle with constant drift rate $m$ and instantaneous variance $\beta^2$, the forward equation $\partial_t f = -m\,\partial_y f + \tfrac12\beta^2\partial_{yy} f$ and observe that the corresponding process is $\beta W(t) + mt$. (They write $\sigma$ for what is called $\beta$ here; in this unit $\sigma$ is the front velocity.) That is precisely the moving-frame theorem, in probabilistic clothing: $V = m$, $D = \tfrac12\beta^2$, and "carry the diffusing profile along at speed $V$" is "add a deterministic drift $mt$ to a Wiener path". The same correspondence makes the advection-diffusion equation the simplest :ref[Fokker-Planck equation]{to=prob.fokker-planck}.

**Fronts.** The bistable front is the mechanism behind a long list of propagating transitions: the nerve impulse in the Nagumo model, where $u$ is a membrane potential and the two stable states are rest and excitation; flame propagation, where $u$ is a scaled temperature and the Arrhenius factor of :cite{work=stakgold-holst-2011 loc="§0.3, Eq. (0.3.1), p. 12"} supplies the nonlinearity; the advance of an advantageous gene through a population; and phase transitions in which one phase invades another. In every case the two numbers the model has to deliver are the ones computed above: the speed, which the area identity ties to $\int_0^1 f$, and the thickness $\sqrt{D/r}$, which says how fine a mesh or how fast a camera is needed to see it. When a reaction is coupled to two diffusing species with different diffusivities, uniform states that are stable without diffusion can become unstable with it — the Turing instability, which :cite[Evans]{work=evans-2010 loc="§4.1, pp. 165–166"} analyses as a condition on the eigenvalues, and which is the standard account of biological pattern formation.
:::
