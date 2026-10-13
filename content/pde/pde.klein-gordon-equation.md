---
id: pde.klein-gordon-equation
title: The Klein-Gordon equation
kind: application
level: core
summary: Introduces the Klein-Gordon equation as the wave equation with a mass term, derives its dispersion relation and reads the relativistic energy-momentum relation off it, verifies its one-dimensional source function across the light cone and records the three-dimensional one, shows that the massless limit gives back the wave equation and the non-relativistic limit the Schrodinger equation, and computes the conserved density that fails to be positive.
prereqs: [pde.classification, pde.dalembert, pde.helmholtz-equation, pde.schrodinger-equation, spec.bessel-first-kind, var.several-independent-variables, vcalc.dirac-delta-basics, fourier.distributions, fourier.delta-identities]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§13.5, pp. 373–378: the Klein-Gordon equation $u_{tt} - c^2\\Delta u + m^2u = 0$ (Eq. (1)), described as one of the simplest hyperbolic PDE models of elementary particles, with $m$ the mass of the particle, and the remark that its only difference from the wave equation is the last term; the nonlinear version (2) as a meson model; the Dirac equation (3) with the gamma matrices and the sense in which it is a square root of Klein-Gordon; the solution of the one-dimensional Cauchy problem (12) by Fourier transform, with the transform of the source function $\\hat S(k,t) = \\sin(t\\sqrt{c^2k^2+m^2})/\\sqrt{c^2k^2+m^2}$ (13) and the closed form $S(x,t) = \\frac{1}{2c}J_0\\bigl(m\\sqrt{t^2-x^2/c^2}\\bigr)$ for $\\lvert x\\rvert<ct$ and $0$ outside (14), with the remark that it has the same jump on the light cone as the wave equation and converges to the wave equation's source function as $m\\to0$; the three-dimensional source function (20), a delta function on the light cone plus a Bessel term inside it, again reducing to the wave equation case at $m=0$; §13.5, Exercise 9, p. 379, the telegraph equation reduced to Klein-Gordon with imaginary mass $m = i/2$; the index entry p. 450 listing Klein-Gordon under hyperbolic equations"
    pages: "373-379, 450"
    role: the equation, its hyperbolic classification, the source functions in one and three dimensions and their massless limits, and the relation to the Dirac and telegraph equations
  - work: hassani-2013
    loc: "§13.1, Eq. (13.6), p. 396: the Klein-Gordon equation $\\nabla^2\\phi - m^2\\phi = \\partial^2\\phi/\\partial t^2$ in natural units $\\hbar = c = 1$, introduced as a relativistic generalization of the Schrodinger equation for a free particle of mass $m$, and listed among the PDEs whose time variable is separated by the method of §13.1; §27.1.1, pp. 832–833: the replacement $E \\to i\\partial/\\partial t$, $\\mathbf{p}\\to-i\\nabla$ that turns $E = p^2/2m$ into the Schrodinger equation and the relativistic relation $E^2 - p^2 = m^2$ into the Klein-Gordon equation, the statement that Klein-Gordon has a second-order time derivative and was initially abandoned because that gave rise to negative probabilities, though it was eventually accepted as a legitimate equation for relativistic particles, and Dirac's factorization of $E^2-p^2-m^2$ that led to a first-order equation"
    pages: "396, 832-833"
    role: the derivation from the relativistic energy-momentum relation, the natural-units form, and the negative-probability objection with its resolution
  - work: gelfand-fomin-1963
    loc: "§38.1, Example 3, p. 181: the Klein-Gordon equation written as $(\\Box - M^2)u = 0$, described as the equation of the scalar field of uncharged spin-zero particles of mass $M$ such as $\\pi^0$ mesons, with the Lagrangian density (120) $\\mathcal{L} = \\frac12\\bigl(u_{x_0}^2 - u_{x_1}^2 - u_{x_2}^2 - u_{x_3}^2 - M^2u^2\\bigr)$ of which it is the Euler equation (118) for a field Lagrangian; §38.2, pp. 181–182, Noether's theorem as the general method for producing field invariants, and the divergence identities (122)–(123) integrated over the boundary of a space-time cylinder"
    pages: "181-182"
    role: the Lagrangian density whose Euler equation is Klein-Gordon, the physical identification of the field, and the variational route to its conservation laws
  - work: reed-simon-1980
    loc: "§VIII.11, pp. 302–304: the mathematical model of quantum mechanics — states as unit vectors of a separable Hilbert space, observables as self-adjoint operators, dynamics as what they call a continuous one-parameter group of unitary operators, with self-adjoint generator $H$ — and the three mathematical problems it raises: self-adjointness, spectral analysis and scattering theory"
    pages: "302-304"
    role: the framework against which the Klein-Gordon equation's failure to be a one-particle Schrodinger equation is measured
---

:::definition[The Klein-Gordon equation]{provenance=adapted src="strauss-2008:§13.5, Eq. (1), pp. 373–374; hassani-2013:§13.1, Eq. (13.6), p. 396; gelfand-fomin-1963:§38.1, Example 3, Eqs. (119)–(120), p. 181"}
The **Klein-Gordon equation** is the wave equation with a zeroth-order term,

$$
u_{tt} - c^2\nabla^2 u + \mu^2 u = 0 , \tag{1}
$$

in which $c$ is the propagation speed and $\mu$ is a positive constant. It is Strauss's equation (1) of §13.5, which he introduces as one of the simplest of the hyperbolic models of elementary particles and whose only difference from the wave equation, as he puts it, is the last term. Gelfand and Fomin identify the field it describes: the scalar field of uncharged spin-zero particles of mass $M$, the $\pi^0$ meson being their example.

**The constant in the mass term, and the three conventions in our sources.** Strauss writes the last term as $m^2u$ with $m$ called the mass of the particle. For the three terms of (1) to have the same dimensions, the coefficient must have the dimensions of an inverse time; in physical units it is

$$
\mu = \frac{Mc^2}{\hbar} ,
$$

$M$ being the mass, and $c/\mu = \hbar/Mc$ is the reduced Compton wavelength of the particle (the Compton wavelength itself being $2\pi$ times that). Hassani avoids the issue by working in natural units $\hbar = c = 1$, in which his equation (13.6) reads $\nabla^2\phi - m^2\phi = \partial^2\phi/\partial t^2$ — that is (1) with $c = 1$ and $\mu = m$. We write $\mu$ for the coefficient, state the relation $\mu = Mc^2/\hbar$ once, and keep $c$ explicit.

**A sign to be careful with.** Gelfand and Fomin display the equation as $(\Box - M^2)u = 0$ and give the Lagrangian density

$$
\mathcal{L} = \tfrac12\bigl(u_{x_0}^2 - u_{x_1}^2 - u_{x_2}^2 - u_{x_3}^2 - M^2u^2\bigr) , \tag{2}
$$

of which they say (1) is the Euler equation for a field (their Eq. (118), the multiple-integral Euler equation of :ref[several independent variables]{to=var.several-independent-variables}). Working out that Euler equation from (2) gives $u_{x_0x_0} - \nabla^2u + M^2u = 0$, which is (1) with $c = 1$; so the sign of the mass term implied by their Lagrangian is the one Strauss and Hassani use, and their displayed $(\Box - M^2)u = 0$ matches it only for the metric signature in which $\Box = \nabla^2 - \partial_{x_0}^2$. In our scanned copy the signs inside their d'Alembertian are not legible. **We follow Strauss and Hassani**, equation (1), whose mass term has the sign that makes the solutions oscillate rather than grow.
:::

:::statement[Plane waves and the dispersion relation]{provenance=adapted src="hassani-2013:§27.1.1, pp. 832–833; strauss-2008:§13.5, Eq. (13), p. 376"}
The function $u = Ae^{i(\mathbf{k}\cdot\mathbf{x}-\omega t)}$ with amplitude $A \ne 0$ solves (1) if and only if

$$
\omega^2 = c^2\lvert\mathbf{k}\rvert^2 + \mu^2 . \tag{3}
$$

Equation (3) is the **dispersion relation** of the Klein-Gordon equation. Writing $k = \lvert\mathbf{k}\rvert$, it has the following consequences.

1. **Phase and group velocity.** For $k = \lvert\mathbf{k}\rvert > 0$,
   $$
   v_{\text{ph}} = \frac{\omega}{k} = c\sqrt{1 + \frac{\mu^2}{c^2k^2}} \;>\; c ,
   \qquad
   v_{\text{gr}} = \frac{d\omega}{dk} = \frac{c^2k}{\omega} \;<\; c ,
   \qquad
   v_{\text{ph}}\,v_{\text{gr}} = c^2 .
   $$
   The phase velocity exceeds $c$ and the group velocity falls short of it; their product is exactly $c^2$. At $k = 0$ the phase velocity is undefined, since $\omega/k$ diverges, and the group velocity is $0$, so the product identity needs $k>0$. For $\mu = 0$ both equal $c$ and the medium is dispersionless.
2. **The relativistic energy-momentum relation.** Substituting $E = \hbar\omega$, $\mathbf{p} = \hbar\mathbf{k}$ and $\mu = Mc^2/\hbar$ turns (3) into
   $$
   E^2 = p^2c^2 + M^2c^4 ,
   $$
   and then $v_{\text{gr}} = c^2k/\omega = pc^2/E$, which is the velocity of a relativistic particle of momentum $p$ and energy $E$.
3. **Both signs of $\omega$ occur.** For each $\mathbf{k}$ there are two roots $\omega = \pm\sqrt{c^2k^2+\mu^2}$, and both give solutions of (1). There is no $\mathbf{k}$ for which $\omega$ lies between $-\mu$ and $\mu$: the spectrum has a gap of width $2\mu$ about zero.

Hassani reads the correspondence in the other direction, and this is how the equation was found: replacing $E$ by $i\hbar\partial/\partial t$ and $\mathbf{p}$ by $-i\hbar\nabla$ turns the non-relativistic relation $E = p^2/2M$ into the Schrodinger equation and the relativistic relation $E^2 - p^2c^2 = M^2c^4$ into (1).
:::

:::idea{provenance=original}
Substituting an exponential into a constant-coefficient equation turns each derivative into a multiplication, so the whole equation collapses to one algebraic relation among $\omega$ and $\mathbf{k}$ — the dispersion relation. Everything qualitative about the equation can be read off it. Here the mass term contributes a constant $\mu^2$ that is added to $c^2k^2$, which has three visible effects: long waves ($ck \ll \mu$) are strongly dispersive and hardly propagate, short waves ($ck\gg\mu$) behave as if the mass were absent, and there is a lowest frequency $\mu$ below which no travelling wave exists at all. The last of these is why a massive field cannot carry a static long-range force, and the first is why a Klein-Gordon pulse spreads where a wave-equation pulse does not.
:::

:::proof{provenance=adapted src="hassani-2013:§27.1.1, p. 832"}
**Step 1 (substitute).** For $u = Ae^{i(\mathbf{k}\cdot\mathbf{x}-\omega t)}$ with $A \ne 0$,

$$
u_{tt} = -\omega^2u , \qquad \nabla^2 u = -\lvert\mathbf{k}\rvert^2u ,
$$

so (1) becomes $\bigl(-\omega^2 + c^2\lvert\mathbf{k}\rvert^2 + \mu^2\bigr)u = 0$. Since $u$ vanishes nowhere, this holds identically if and only if (3) does.

**Step 2 (the velocities).** From (3), $\omega = \sqrt{c^2k^2+\mu^2}$ for the positive root, so

$$
\frac\omega k = \frac{\sqrt{c^2k^2+\mu^2}}{k} = c\sqrt{1+\frac{\mu^2}{c^2k^2}} ,
$$

which exceeds $c$ for every $k>0$ when $\mu>0$. Differentiating (3) in $k$ gives $2\omega\,d\omega/dk = 2c^2k$, hence $v_{\text{gr}} = c^2k/\omega$, and multiplying the two,

$$
v_{\text{ph}}v_{\text{gr}} = \frac\omega k\cdot\frac{c^2k}{\omega} = c^2 .
$$

Since $\omega > ck$ by (3), $v_{\text{gr}} = c^2k/\omega < c$.

**Step 3 (the gap).** By (3), $\omega^2 \ge \mu^2$ for every real $\mathbf{k}$, with equality only at $\mathbf{k} = \mathbf{0}$. So $\lvert\omega\rvert \ge \mu$, and the two branches $\omega = \pm\sqrt{c^2k^2+\mu^2}$ are separated by the interval $(-\mu,\mu)$, which no plane wave occupies. $\square$
:::

:::statement[The one-dimensional source function, and the light cone]{provenance=adapted src="strauss-2008:§13.5, Eqs. (12)–(14) and (20), pp. 376–378"}
Consider the Cauchy problem for (1) on the line,

$$
u_{tt} - c^2u_{xx} + \mu^2u = 0 \quad (-\infty<x<\infty), \qquad u(x,0) = \varphi(x), \quad u_t(x,0) = \psi(x) .
$$

Its **source function** — the solution with $\varphi = 0$, $\psi = \delta$ — is

$$
S(x,t) \;=\;
\begin{cases}
\dfrac{1}{2c}\,J_0\!\left(\mu\sqrt{t^2 - \dfrac{x^2}{c^2}}\right), & \lvert x\rvert < ct,\\[10pt]
0, & \lvert x\rvert > ct \ge 0,
\end{cases}
\tag{4}
$$

where $J_0$ is the first-kind Bessel function of order zero. Strauss obtains it by Fourier transform: the transform satisfies $\hat S_{tt} = -(c^2k^2+\mu^2)\hat S$ with $\hat S(k,0) = 0$ and $\hat S_t(k,0) = 1$, hence

$$
\hat S(k,t) = \frac{\sin\bigl(t\sqrt{c^2k^2+\mu^2}\bigr)}{\sqrt{c^2k^2+\mu^2}} , \tag{5}
$$

and inverting (5) gives (4). Two features are worth naming.

1. **The support is the same light cone as for the wave equation.** $S$ vanishes outside $\lvert x\rvert \le ct$, and Strauss notes that it has the same jump discontinuity on the cone as the wave equation's source function: the mass term changes the solution inside the cone but moves no signal faster, and the domain of dependence is unchanged from :ref[d'Alembert's formula]{to=pde.dalembert}.
2. **The massless limit is the wave equation.** As $\mu\to0$, $J_0 \to J_0(0) = 1$ and (4) becomes $S = \frac{1}{2c}$ on $\lvert x\rvert<ct$ and $0$ outside, which is the source function of the one-dimensional wave equation.

Carrying the same Fourier calculation out in three dimensions, Strauss arrives at

$$
S(\mathbf{x},t) = \frac{1}{2\pi c}\,\delta\bigl(c^2t^2 - r^2\bigr) \;-\; \mu\,H\bigl(c^2t^2-r^2\bigr)\,\frac{J_1\bigl[(\mu/c)\sqrt{c^2t^2-r^2}\bigr]}{4\pi c^2\sqrt{c^2t^2-r^2}} , \tag{6}
$$

where $r = \lvert\mathbf{x}\rvert$. The first term is an impulse carried on the cone itself; the second is spread through the cone's interior and is built from $J_1$. At $\mu = 0$ the second term disappears and (6) is the wave equation's source function, concentrated on the cone alone. So Huygens' principle — a sharp pulse staying sharp — holds for the wave equation in three dimensions and fails for Klein-Gordon: a mass term makes the cone leak into its interior, and an impulse is followed by a decaying tail.
:::

:::idea{provenance=original}
The Fourier transform diagonalizes (1), as it does any constant-coefficient equation: in $k$ the problem is the oscillator $\hat S_{tt} + \omega(k)^2\hat S = 0$ with $\omega(k)^2 = c^2k^2+\mu^2$, whose solution with the stated data is $\sin(\omega t)/\omega$. All the information about the mass is in the single function $\omega(k)$, and the only question left is what the inverse transform of $\sin(t\omega(k))/\omega(k)$ is.

That question has a pretty answer because of a coincidence of integral representations: $J_0$ has one whose integrand is exactly $\sin(t\sqrt{c^2k^2+\mu^2})/\sqrt{c^2k^2+\mu^2}$. Rather than reproduce Strauss's table lookup, the proof below verifies (4) directly — it is a short computation, and it shows where the Bessel equation comes from. The key is that for a function of the invariant combination $s = \sqrt{t^2-x^2/c^2}$, the wave operator reduces to an ordinary differential operator in $s$ which is precisely Bessel's operator of order zero.

Two things then remain that a pointwise substitution cannot give. The first is the cone itself: (4) is discontinuous there, and a jump across a surface normally leaves $\delta$ and $\delta'$ terms in the wave operator, so solving on each side separately proves nothing about the union. They cancel here for two reasons worth separating — the cone is characteristic, which kills the $\delta'$ term, and the Bessel profile is a function of $t^2-x^2/c^2$, which vanishes on the cone to exactly the order that kills the $\delta$ term. The second is the initial data, and those follow from the shrinking support alone: $S$ lives on $[-ct,ct]$ and is bounded by $1/2c$, so it tends to $0$, while its integral comes out as $t + O(t^3)$, which is what makes its $t$-derivative at $0$ a unit point mass.
:::

:::proof{provenance=original}
We verify (4) by substitution. Set $c = 1$ throughout; the general case follows by rescaling $x\mapsto x/c$, which leaves (1) in the form $u_{tt}-u_{xx}+\mu^2u=0$.

**Step 1 (the invariant variable).** Inside the forward cone $\lvert x\rvert<t$ put

$$
s = \sqrt{t^2-x^2} \;>\;0 ,
$$

so that $s_t = t/s$ and $s_x = -x/s$. Differentiating once more,

$$
s_{tt} = \frac1s - \frac{t^2}{s^3} , \qquad s_{xx} = -\frac1s - \frac{x^2}{s^3} .
$$

**Step 2 (the wave operator on a function of $s$).** For $u = f(s)$, the chain rule gives $u_{tt} = f''s_t^2 + f's_{tt}$ and $u_{xx} = f''s_x^2 + f's_{xx}$, so

$$
u_{tt} - u_{xx} = f''\bigl(s_t^2 - s_x^2\bigr) + f'\bigl(s_{tt}-s_{xx}\bigr) .
$$

Now $s_t^2 - s_x^2 = (t^2-x^2)/s^2 = 1$, and

$$
s_{tt}-s_{xx} = \left(\frac1s - \frac{t^2}{s^3}\right) - \left(-\frac1s - \frac{x^2}{s^3}\right) = \frac2s - \frac{t^2-x^2}{s^3} = \frac1s .
$$

Hence, remarkably,

$$
u_{tt}-u_{xx} = f''(s) + \frac{f'(s)}{s} , \tag{7}
$$

an ordinary differential operator in $s$ alone.

**Step 3 (Bessel's equation).** Take $f(s) = J_0(\mu s)$. Then $f' = \mu J_0'(\mu s)$ and $f'' = \mu^2J_0''(\mu s)$, so by (7) and Bessel's equation of order zero, $J_0''(z) + J_0'(z)/z + J_0(z) = 0$ with $z = \mu s$,

$$
u_{tt}-u_{xx} = \mu^2\left[J_0''(\mu s) + \frac{J_0'(\mu s)}{\mu s}\right] = -\mu^2 J_0(\mu s) = -\mu^2 u .
$$

Therefore $u_{tt}-u_{xx}+\mu^2u = 0$: the function $\tfrac12 J_0(\mu\sqrt{t^2-x^2})$ solves the Klein-Gordon equation at every point strictly inside the cone. (With $c$ restored, $s = \sqrt{t^2-x^2/c^2}$ and the constant is $1/2c$, which is (4).)

**Step 4 (across the cone).** Outside the cone $S\equiv0$, which solves (1) trivially. The two pieces meet on $\lvert x\rvert = t$, where the interior limit is $\tfrac12 J_0(0) = \tfrac12$, so $S$ jumps by $\tfrac12$ across the cone (by $1/2c$ once $c$ is restored). Solving on each of the two open sets separately is *not* enough, because a jump across a surface in general leaves $\delta$ and $\delta'$ terms in the wave operator, and what the statement asserts is that $S$ solves the Cauchy problem on the whole line. We show those terms cancel.

Two preliminaries. First, $J_0$ is even and entire, so

$$
J_0(\mu\sqrt w) = \sum_{j\ge0}\frac{(-1)^j}{(j!)^2}\left(\frac{\mu^2 w}{4}\right)^{j}
$$

is an entire function of $w$ with no branch point at $w = 0$. Hence, putting $G(w) = \tfrac12 J_0(\mu\sqrt w)$ and

$$
g(x,t) = G(t^2-x^2) , \qquad \phi(x,t) = t - \lvert x\rvert ,
$$

the profile $g$ is smooth on the whole plane — not merely inside the cone — and $S = H(\phi)\,g$ with $H$ the Heaviside step. Second, Step 3 says exactly that $g_{tt}-g_{xx} = -\mu^2g$ wherever $\phi>0$.

Work on the open half-plane $t>0$. Near the axis $x=0$, the only place where $\phi$ fails to be differentiable, $\phi>0$, so $H(\phi)\equiv1$ and $S = g$ on a neighbourhood; there the equation holds by Step 3. It therefore suffices to work where $x \ne 0$, and there $\phi$ is smooth with

$$
\phi_t = 1 , \qquad \phi_x = -\operatorname{sgn}x , \qquad \phi_{tt} = \phi_{xx} = 0 .
$$

Differentiating the product $S = H(\phi)g$ twice in the sense of distributions, $\partial_t S = \delta(\phi)\phi_tg + H(\phi)g_t$ and

$$
\partial_t^2 S = \delta'(\phi)\phi_t^2\,g + \delta(\phi)\phi_{tt}\,g + 2\delta(\phi)\phi_t\,g_t + H(\phi)\,g_{tt} ,
$$

with the same formula in $x$. Subtracting,

$$
S_{tt}-S_{xx} = \delta'(\phi)\bigl(\phi_t^2-\phi_x^2\bigr)g \;+\; \delta(\phi)\bigl(\phi_{tt}-\phi_{xx}\bigr)g \;+\; 2\delta(\phi)\bigl(\phi_tg_t-\phi_xg_x\bigr) \;+\; H(\phi)\bigl(g_{tt}-g_{xx}\bigr) .
$$

Take the four terms in turn.

- The $\delta'$ term vanishes because $\phi_t^2-\phi_x^2 = 1 - 1 = 0$: the level sets of $\phi$ are **characteristic** for the wave operator. This is where the geometry of the light cone enters, and it is the precise content of the statement that the mass term moves no signal faster.
- The second term vanishes because $\phi$ is affine on each of the two half-planes $x>0$ and $x<0$.
- The third vanishes because $g$ depends on $x$ and $t$ only through $t^2-x^2$. Indeed $g_t = 2tG'(t^2-x^2)$ and $g_x = -2xG'(t^2-x^2)$, so
  $$
  \phi_tg_t - \phi_xg_x = g_t + (\operatorname{sgn}x)\,g_x = 2\bigl(t-\lvert x\rvert\bigr)G'(t^2-x^2) = 2\phi\,G'(t^2-x^2) ,
  $$
  and $\delta(\phi)\,\phi = 0$. So the Bessel profile vanishes on the cone to exactly the order needed.
- The last term is $-\mu^2H(\phi)g = -\mu^2S$, by Step 3.

Hence $S_{tt}-S_{xx}+\mu^2S = 0$ in the sense of distributions on $\{t>0\}$, across the cone and not only on either side of it. The jump $1/2c$ is the same one the wave equation's source function has, which is Strauss's observation; the two computations above are why the mass term leaves it alone.

**Step 5 (the initial data).** It remains to show that $S(\cdot,t)\to0$ and $S_t(\cdot,0)=\delta$ as distributions in $x$ when $t\downarrow0$. Everything needed is the shrinking support $\operatorname{supp}S(\cdot,t)\subseteq[-t,t]$ and the bound $\lvert S\rvert\le\tfrac12$, which holds because $\lvert J_0\rvert\le1$.

First integrate (4) over its support. The series above converges uniformly on compact sets, so it may be integrated term by term:

$$
\int_{-t}^{t}S(x,t)\,dx = \frac12\sum_{j\ge0}\frac{(-1)^j\mu^{2j}}{4^j(j!)^2}\int_{-t}^{t}\bigl(t^2-x^2\bigr)^j dx .
$$

Substituting $x = tu$ and using the beta integral $\int_{-1}^{1}(1-u^2)^j du = 2\cdot4^j(j!)^2/(2j+1)!$, the inner integral is $t^{2j+1}\cdot2\cdot4^j(j!)^2/(2j+1)!$, and every factorial cancels:

$$
\int_{-t}^{t}S(x,t)\,dx = \frac1\mu\sum_{j\ge0}\frac{(-1)^j(\mu t)^{2j+1}}{(2j+1)!} = \frac{\sin\mu t}{\mu} = t + O(t^3) .
$$

Now let $\varphi$ be a test function. Splitting $\varphi(x) = \varphi(0) + [\varphi(x)-\varphi(0)]$ and bounding the second piece by $\lvert x\rvert\sup\lvert\varphi'\rvert$,

$$
\left\lvert\int S(x,t)\varphi(x)\,dx - \varphi(0)\,\frac{\sin\mu t}{\mu}\right\rvert \;\le\; \sup\lvert\varphi'\rvert\int_{-t}^{t}\lvert x\rvert\cdot\tfrac12\,dx \;=\; \tfrac12 t^2\sup\lvert\varphi'\rvert .
$$

So $\langle S(\cdot,t),\varphi\rangle = t\,\varphi(0) + O(t^2)$ for every $\varphi$. Letting $t\downarrow0$ gives $S(\cdot,0)=0$; dividing by $t$ first and using that value,

$$
\langle S_t(\cdot,0),\varphi\rangle = \lim_{t\downarrow0}\frac1t\bigl\langle S(\cdot,t)-S(\cdot,0),\varphi\bigr\rangle = \varphi(0) ,
$$

which says $S_t(\cdot,0)=\delta$. Neither step uses (5), which is the point: the Fourier route is not needed anywhere in this proof. (The two do agree: the integral just computed is $\hat S(0,t)$, which is the value of (5) at $k=0$.)

**Step 6 (the massless limit).** $J_0$ is continuous with $J_0(0) = 1$, and $\mu\sqrt{t^2-x^2/c^2}\to0$ uniformly on compact subsets of the cone as $\mu\to0$. So $S \to \frac{1}{2c}$ pointwise inside the cone and $0$ outside, which is the d'Alembert source function. $\square$
:::

:::statement[The conserved density, and the non-relativistic limit]{provenance=original}
Let $u$ be a complex-valued solution of (1). Define

$$
\rho = \frac{i\hbar}{2Mc^2}\bigl(\bar u\,u_t - u\,\bar u_t\bigr) , \qquad
\mathbf{J} = \frac{\hbar}{M}\operatorname{Im}\bigl(\bar u\,\nabla u\bigr) . \tag{8}
$$

Then $\partial_t\rho + \nabla\cdot\mathbf{J} = 0$. Moreover:

1. **$\rho$ is not positive.** For the plane wave $u = Ae^{i(\mathbf{k}\cdot\mathbf{x}-\omega t)}$,
   $$
   \rho = \frac{\hbar\omega}{Mc^2}\lvert A\rvert^2 , \qquad \mathbf{J} = \frac{\hbar\mathbf{k}}{M}\lvert A\rvert^2 , \qquad \frac{\mathbf{J}}{\rho} = \frac{c^2\mathbf{k}}{\omega} = v_{\text{gr}}\hat{\mathbf{k}} ,
   $$
   so $\rho$ has the sign of $\omega$ and is negative on the branch $\omega<0$ of the dispersion relation.
2. **Non-relativistic limit.** Write $u = e^{-i\omega_0t}\psi$ with $\omega_0 = Mc^2/\hbar = \mu$. Then $\psi$ satisfies
   $$
   i\hbar\,\frac{\partial\psi}{\partial t} = -\frac{\hbar^2}{2M}\nabla^2\psi + \frac{\hbar^2}{2Mc^2}\frac{\partial^2\psi}{\partial t^2} , \tag{9}
   $$
   exactly. Dropping the last term — legitimate when $\lvert\psi_{tt}\rvert \ll \omega_0\lvert\psi_t\rvert$, that is when the residual frequencies are small beside $Mc^2/\hbar$ — gives the free :ref[Schrodinger equation]{to=pde.schrodinger-equation}, and in the same limit $\hbar\omega\to Mc^2$ makes $\rho\to\lvert\psi\rvert^2$, the Schrodinger probability density.

Hassani records the historical consequence of part 1: that the equation's second time derivative made the resulting probabilities capable of coming out negative, that it was set aside at first for that reason, and that it was nevertheless readmitted in the end as a proper equation for relativistic particles; and the wish for a first-order equation is what led Dirac to factor $E^2-p^2-M^2$ and so to the Dirac equation. In Reed and Simon's framework the point is structural: their model demands a *one-parameter unitary group* generated by a self-adjoint $H$, with $\lVert\Psi\rVert = 1$ fixed; (1) is second order in $t$, so its natural phase space is the pair $(u,u_t)$, and the conserved quantity that does come out of it — the energy — is quadratic in the derivatives rather than in $u$ alone.
:::

:::idea{provenance=original}
The computation is the same two lines as for the Schrodinger current, run on a second-order equation. Multiply (1) by $\bar u$, multiply its conjugate by $u$, subtract: the terms in $\mu^2\lvert u\rvert^2$ cancel because $\mu^2$ is real, and the second time derivatives assemble into $\partial_t(\bar uu_t - u\bar u_t)$ while the Laplacians assemble into a divergence. So one gets a conservation law for free. The difference from the Schrodinger case is where the time derivatives sit: there the equation was first order, so the conserved density came out as $\lvert\Psi\rvert^2$, manifestly non-negative; here it involves $u_t$, and nothing forces its sign.

For the non-relativistic limit, the trick is to peel off the rest-energy oscillation $e^{-iMc^2t/\hbar}$, which is the fastest thing in the solution. Doing so cancels the mass term against the $-\omega_0^2$ coming from differentiating the exponential twice — that cancellation is exactly the statement $\mu = \omega_0$ — and leaves a first-order equation in $t$ plus one leftover second derivative, suppressed by $1/c^2$.
:::

:::proof{provenance=original}
**Step 1 (the conservation law).** Write (1) as $u_{tt} = c^2\nabla^2u - \mu^2u$ and its conjugate as $\bar u_{tt} = c^2\nabla^2\bar u - \mu^2\bar u$, using that $c$ and $\mu$ are real. Put

$$
W = \bar u\,u_t - u\,\bar u_t .
$$

Differentiating, the cross terms $\bar u_tu_t$ cancel:

$$
\partial_t W = \bar u\,u_{tt} - u\,\bar u_{tt} = c^2\bigl(\bar u\nabla^2u - u\nabla^2\bar u\bigr) - \mu^2\bigl(\bar uu - u\bar u\bigr) = c^2\bigl(\bar u\nabla^2u - u\nabla^2\bar u\bigr) ,
$$

the mass term dropping out. By the identity of Step 3 of the Schrodinger current proof,

$$
\bar u\nabla^2u - u\nabla^2\bar u = \nabla\cdot\bigl(\bar u\nabla u - u\nabla\bar u\bigr) ,
$$

so $\partial_t W = c^2\nabla\cdot(\bar u\nabla u - u\nabla\bar u)$. Multiplying by $\dfrac{i\hbar}{2Mc^2}$ and noting that $\dfrac{i\hbar}{2M}(\bar u\nabla u - u\nabla\bar u) = -\dfrac{\hbar}{M}\operatorname{Im}(\bar u\nabla u) = -\mathbf{J}$,

$$
\partial_t\rho = -\nabla\cdot\mathbf{J} ,
$$

which is the conservation law, with $\rho$ and $\mathbf{J}$ as in (8).

**Step 2 (the plane wave).** For $u = Ae^{i(\mathbf{k}\cdot\mathbf{x}-\omega t)}$ we have $u_t = -i\omega u$ and $\nabla u = i\mathbf{k}u$, so $\bar uu_t = -i\omega\lvert A\rvert^2$ and $\bar u\nabla u = i\mathbf{k}\lvert A\rvert^2$. Then

$$
\rho = \frac{i\hbar}{2Mc^2}\bigl(-i\omega - \overline{(-i\omega)}\bigr)\lvert A\rvert^2 = \frac{i\hbar}{2Mc^2}(-2i\omega)\lvert A\rvert^2 = \frac{\hbar\omega}{Mc^2}\lvert A\rvert^2 ,
$$

and $\mathbf{J} = \frac{\hbar}{M}\operatorname{Im}(i\mathbf{k}\lvert A\rvert^2) = \frac{\hbar\mathbf{k}}{M}\lvert A\rvert^2$. Dividing, $\mathbf{J}/\rho = c^2\mathbf{k}/\omega$, whose magnitude is $v_{\text{gr}}$ by part 1 of the dispersion statement. Since both roots $\omega = \pm\sqrt{c^2k^2+\mu^2}$ are admissible, $\rho$ takes both signs.

**Step 3 (peel off the rest energy).** Put $u = e^{-i\omega_0t}\psi$ with $\omega_0 = \mu = Mc^2/\hbar$. Then

$$
u_{tt} = e^{-i\omega_0t}\bigl(\psi_{tt} - 2i\omega_0\psi_t - \omega_0^2\psi\bigr) ,
$$

and substituting into (1), after dividing by $e^{-i\omega_0t}$,

$$
\psi_{tt} - 2i\omega_0\psi_t - \omega_0^2\psi - c^2\nabla^2\psi + \mu^2\psi = 0 .
$$

Because $\mu = \omega_0$, the two terms $-\omega_0^2\psi$ and $+\mu^2\psi$ cancel — this is the whole point of the substitution — leaving

$$
\psi_{tt} - 2i\omega_0\psi_t - c^2\nabla^2\psi = 0 .
$$

**Step 4 (rearrange).** Multiply by $\dfrac{\hbar}{2\omega_0} = \dfrac{\hbar^2}{2Mc^2}$ and move the $\psi_t$ term to the left:

$$
i\hbar\,\psi_t = \frac{\hbar^2}{2Mc^2}\psi_{tt} - \frac{\hbar^2}{2M}\nabla^2\psi ,
$$

which is (9). If $\psi$ varies on a time scale $T$ with $\omega_0T \gg 1$, the retained term $i\hbar\psi_t$ is of size $\hbar\lvert\psi\rvert/T$ while the dropped term is of size $\hbar^2\lvert\psi\rvert/(2Mc^2T^2) = \hbar\lvert\psi\rvert/(2\omega_0T^2)$, smaller by the factor $1/(2\omega_0T)$. Dropping it gives the free Schrodinger equation.

**Step 5 (the density in the limit).** In the same regime $u_t = e^{-i\omega_0t}(\psi_t - i\omega_0\psi) \approx -i\omega_0e^{-i\omega_0t}\psi$, so

$$
\rho \approx \frac{i\hbar}{2Mc^2}\bigl(-i\omega_0 - \overline{(-i\omega_0)}\bigr)\lvert\psi\rvert^2 = \frac{\hbar\omega_0}{Mc^2}\lvert\psi\rvert^2 = \lvert\psi\rvert^2 ,
$$

using $\hbar\omega_0 = Mc^2$. So the Klein-Gordon density reduces to the Schrodinger probability density, and in particular becomes positive. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what changes without them.**

- *$\mu$ real, in Step 1 of the last proof and in Step 3 of the dispersion proof.* Both the cancellation of the mass term in the conservation law and the reality of $\omega$ need it. Strauss's Exercise 9 shows what an imaginary mass does: substituting $u = e^{-t/2}v$ into the **telegraph equation** $u_{tt} - c^2\Delta u + \nu u_t = 0$ with $\nu = 1$ gives $v_{tt} - c^2\Delta v - \tfrac14 v = 0$, which is (1) with $\mu = i/2$. (His exercise prints the conclusion in $u$ where $v$ is meant; it is the equation satisfied by $v$.) So a dissipative wave equation is a Klein-Gordon equation with imaginary mass — but the imaginary mass is not itself the damping. With $\mu = i/2$ the dispersion relation (3) reads $\omega^2 = c^2k^2 - \tfrac14$, whose roots are real for $ck>\tfrac12$ and purely imaginary for $ck<\tfrac12$, never genuinely complex: an imaginary mass closes the frequency gap of part 3 of the dispersion statement and replaces oscillation by the pair $e^{\pm\lambda t}$, $\lambda = \sqrt{\tfrac14 - c^2k^2}$, in the long-wave band. One of those branches *grows* — the tachyonic instability — so (1) with imaginary $\mu$ is unstable, not damped. The telegraph equation's damping is the prefactor $e^{-t/2}$ that the substitution strips off, and it is uniform in $k$; the two fit together because $\lambda \le \tfrac12$ for every $k$, with equality only at $k=0$, so $u = e^{-t/2}v$ grows at no wavenumber, and decays strictly at every $k\ne0$. At $k=0$ exactly the two factors cancel and $u$ is constant, as it must be: the $k=0$ telegraph equation is $u_{tt}+u_t=0$, whose solutions are $a + be^{-t}$, and the constant $a$ never dies. Reading the correspondence the other way: a real mass term makes waves disperse but not decay, while an imaginary one destroys the oscillation of the long waves altogether.
- *The classification is unchanged by the mass term.* Strauss's index lists Klein-Gordon under hyperbolic equations, and his point in §13.5 is that the term $\mu^2u$ is of order zero, so the principal part of the operator — the part that decides the type, the characteristics and the domain of dependence (:ref[classification of second-order equations]{to=pde.classification}) — is that of the wave equation. That is why (4) and (6) are supported in the light cone and why Strauss's remark about the jump on the cone holds: the mass changes the solution inside the cone and nothing about the cone itself.
- *Huygens' principle fails.* The second term of (6) is the price of the mass. In three dimensions the wave equation's source function is a pure delta on the cone, so a flash is seen as a flash; with $\mu>0$ a flash is followed by a reverberating tail $\propto J_1$, decaying but never ending. The same contrast appears in :ref[the wave equation in three dimensions]{to=pde.wave-three-dimensions}, where the two-dimensional wave equation also has a tail.
- *What the "negative probability" means and what it does not.* Part 1 of the last statement is a theorem: the conserved density (8) changes sign. Hassani reports the historical reading — the equation was initially abandoned because of it — together with the resolution, that the equation was in the end admitted as a proper description of relativistic particles after all. The modern reading is that $\rho$ is a charge density and not a probability density, so its sign is a sign of charge; the equation is then a field equation rather than a one-particle wave equation, and its quantization describes particles and antiparticles. Gelfand and Fomin take the field view from the start: (1) is the Euler equation of the Lagrangian density (2), and §38.2 obtains its conservation laws from :ref[Noether's theorem]{to=var.noether-theorem}, integrating the divergence identities over the boundary of a space-time cylinder.
- *The square-root equation.* Strauss records the precise sense in which Dirac's equation is a square root of (1). Write $\mathcal{D}$ for the first-order operator built from his gamma matrices,
  $$
  \mathcal{D} = \frac1c\gamma^0\frac{\partial}{\partial t} + \gamma^1\frac{\partial}{\partial x} + \gamma^2\frac{\partial}{\partial y} + \gamma^3\frac{\partial}{\partial z} ,
  $$
  whose square is $\mathcal{D}^2 = c^{-2}\partial_t^2 - \Delta$, the gamma-matrix relations killing every cross term. Strauss's mass symbol here is a lowercase $m$ of inverse-length dimension — it is $\mu/c$ in our notation, which is what lets $m^2$ be added to $-\Delta$, and it is *not* the $M$ of $\mu = Mc^2/\hbar$ — and with it
  $$
  \bigl(\mathcal{D} + im\bigr)\bigl(\mathcal{D} - im\bigr) = \mathcal{D}^2 + m^2 = \frac{1}{c^2}\frac{\partial^2}{\partial t^2} - \Delta + m^2 ,
  $$
  which is $c^{-2}$ times the operator in (1). Strauss displays this as the *square* $(\mathcal{D}+im)^2$; read as a square it would leave the cross term $2im\mathcal{D}$ and reverse the sign of the mass, so it is the product of the two first-order factors, as displayed above, that is the Klein-Gordon operator. Hassani gives the algebraic version in exactly that product form: Dirac looked for $\beta,\alpha_i$ making $(\beta E + \sum\alpha_ip_i - m)(\beta E + \sum\alpha_ip_i + m)$ reduce to $E^2 - \sum p_i^2 - m^2$, which is what forces the coefficients to be matrices satisfying a Clifford algebra.
- *The massless limit is not merely a limit of solutions.* At $\mu = 0$ the dispersion relation (3) loses its gap, the phase and group velocities both become $c$, and the source functions (4) and (6) become the wave equation's. But the character of the field also changes qualitatively: only a massless field has a static solution falling off as $1/r$ and so a long-range force, which is why the photon is massless and the force carried by a massive field is screened at the length $c/\mu = \hbar/Mc$ — the same screening as in the modified Helmholtz equation of :ref[the Helmholtz equation]{to=pde.helmholtz-equation}, with $e^{-\mu r/c}/r$ in place of $1/r$.
:::

:::example[Dispersion for a pion, and the exact relation $v_{\text{ph}}v_{\text{gr}} = c^2$]{provenance=original}
Take the charged pion $\pi^\pm$, with rest energy $Mc^2 = 139.57039$ MeV. (A charged spin-zero particle is described by a complex-valued solution of (1), which is the case the conserved density (8) applies to, with $\rho$ read as a charge density. Gelfand and Fomin's uncharged $\pi^0$ is a real field and is lighter, $Mc^2 = 134.9768$ MeV, giving $c/\mu = 1.461933$ fm in place of the $1.413817$ fm below, and an $\hbar\omega$ column smaller by the factor $134.9768/139.57039$; the velocity and product columns are the same for either particle, since they depend only on the ratio $ck/\mu$.) Using $\hbar c = 197.3269804$ MeV fm, the mass constant and length scale of (1) are

$$
\mu = \frac{Mc^2}{\hbar} , \qquad \frac{c}{\mu} = \frac{\hbar c}{Mc^2} = \frac{197.3269804}{139.57039} = 1.413817\ \mathrm{fm} ,
$$

the reduced Compton wavelength. Evaluate (3) at the three wavenumbers $ck = \tfrac12\mu$, $ck=\mu$ and $ck = 2\mu$, writing $\hbar\omega$ in MeV:

| $ck/\mu$ | $\omega/\mu = \sqrt{1+(ck/\mu)^2}$ | $\hbar\omega$ (MeV) | $v_{\text{gr}}/c = ck/\omega$ | $v_{\text{ph}}/c = \omega/(ck)$ | product |
|---|---|---|---|---|---|
| $0.5$ | $1.1180340$ | $156.0444$ | $0.4472136$ | $2.2360680$ | $1$ |
| $1$ | $1.4142136$ | $197.3823$ | $0.7071068$ | $1.4142136$ | $1$ |
| $2$ | $2.2360680$ | $312.0889$ | $0.8944272$ | $1.1180340$ | $1$ |

The last column is exactly $1$ in every row, which is the identity $v_{\text{ph}}v_{\text{gr}} = c^2$ of Step 2 — an algebraic identity, not a numerical coincidence. At $ck = \mu$, that is at $k = Mc/\hbar$ and so at the Compton wavelength $2\pi\hbar/Mc$, the group velocity is $c/\sqrt2 = 0.7071068\,c$ and the phase velocity $\sqrt2\,c$.

*Check against relativistic kinematics.* The row $ck = \mu$ corresponds to $pc = Mc^2$, hence $E = \sqrt{(pc)^2+(Mc^2)^2} = \sqrt2\,Mc^2 = 197.3823$ MeV, which is the third column; the Lorentz factor is $\gamma = E/Mc^2 = \sqrt2$ and the particle speed $v = c\sqrt{1-\gamma^{-2}} = c\sqrt{1-\tfrac12} = c/\sqrt2$, which is the fourth column. So the group velocity of the Klein-Gordon wave packet is the velocity of the relativistic particle, as part 2 of the statement says, and the superluminal phase velocity carries no signal.

*The gap.* No solution of (1) oscillates more slowly than $\mu$: the lowest frequency, at $k=0$, corresponds to $\hbar\omega = Mc^2 = 139.57039$ MeV. For the wave equation ($\mu=0$) there is no such floor, and arbitrarily slow oscillations exist.
:::

:::example[The source function solves the equation, and its tail]{provenance=original}
Verify (4) and watch the massless limit numerically. Put $c = 1$ and $\mu = 3$, and take the candidate

$$
S(x,t) = \tfrac12 J_0\!\left(3\sqrt{t^2-x^2}\right) \qquad (\lvert x\rvert<t) .
$$

**Exact verification.** By Step 3 of the proof, $S_{tt}-S_{xx}+9S = 0$ identically inside the cone; symbolic differentiation of $J_0(3\sqrt{t^2-x^2})$ and substitution confirms that the residual is exactly zero. Concretely at $t = 2$, $x = 1$, so $s = \sqrt3 = 1.7320508$ and $\mu s = 5.1961524$:

$$
J_0(5.1961524) = -0.1116107 , \qquad S = -0.0558053 .
$$

The sign is worth noting: the source function is *negative* there, which cannot happen for the wave equation, where $S \equiv 1/2c$ inside the cone. The Bessel oscillation is the mass term at work.

**The tail.** Along the ray $x = 0$ the source function is $S(0,t) = \tfrac12J_0(3t)$, which oscillates and decays like $t^{-1/2}$:

| $t$ | $\mu t$ | $S(0,t) = \tfrac12 J_0(3t)$ |
|---|---|---|
| $0.1$ | $0.3$ | $0.4888131$ |
| $0.5$ | $1.5$ | $0.2559138$ |
| $1$ | $3$ | $-0.1300260$ |
| $2$ | $6$ | $0.0753226$ |
| $5$ | $15$ | $-0.0071122$ |

At small $t$ the value is near $1/2c = 0.5$, the wave-equation answer, because $J_0(z)\approx1-z^2/4$ for small $z$; at large $t$ the solution rings. This is the one-dimensional face of the tail inside the light cone that formula (6) exhibits in three dimensions, and it is why Huygens' principle fails for a massive field.

**The massless limit, quantitatively.** At the fixed point $t = 1$, $x = 0$, so $s = 1$:

| $\mu$ | $S = \tfrac12 J_0(\mu)$ | relative departure from $\tfrac12$ |
|---|---|---|
| $1$ | $0.3825988$ | $23.480\%$ |
| $0.3$ | $0.4888131$ | $2.2374\%$ |
| $0.1$ | $0.4987508$ | $0.24984\%$ |
| $0.01$ | $0.4999875$ | $0.0024999\%$ |

The departure is $\tfrac14\mu^2$ to leading order — $0.25$, $0.0225$, $0.0025$, $0.000025$ against the table's $0.23480$, $0.022374$, $0.0024984$, $0.000024999$ — so the solution approaches the d'Alembert source function quadratically in the mass, as Strauss's remark that (4) converges to the wave equation's source function at $m\to0$ requires.
:::

:::application{provenance=original}
**Why the range of a force is set by the mass of its carrier.** Strip the time dependence from (1) with $\mu>0$ and one gets the modified Helmholtz equation $\nabla^2u - (\mu/c)^2u = 0$, whose decaying radial solution is $e^{-\mu r/c}/r$ rather than $1/r$. So a static source of a massive field produces a potential screened at the length $c/\mu = \hbar/Mc$. This is Yukawa's argument: from the observed range of the nuclear force, about $1.4$ fm, one predicts a carrier of rest energy about $140$ MeV, which is the pion — the number computed in the first example above. The massless limit removes the screening and restores the $1/r$ Coulomb and Newtonian potentials of :ref[the fundamental solution of Laplace's equation]{to=pde.laplace-fundamental-solution}, which is why electromagnetism and gravity are long-ranged.

**Waves in a plasma, and in a waveguide.** The relation (3) is not special to particle physics. Transverse electromagnetic waves in a cold plasma obey exactly it, with $\mu$ the plasma frequency $\omega_p$: below $\omega_p$ no wave propagates and the plasma reflects, which is how shortwave radio reaches over the horizon and why radio below a few megahertz cannot escape the ionosphere. A mode in a hollow waveguide obeys it too, with $\mu = c\kappa$ the cutoff set by the transverse eigenvalue of :ref[the Helmholtz equation]{to=pde.helmholtz-equation}; the superluminal phase velocity and subluminal group velocity of the table above are measured facts about waveguides. In each case the Klein-Gordon equation is the equation of the field in a medium with a gap, and the "mass" is whatever sets the gap.

**Dispersion, and the spreading of pulses.** Because $v_{\text{gr}}$ depends on $k$, a Klein-Gordon pulse spreads, unlike a wave-equation pulse in one dimension. Expanding (3) about a carrier wavenumber $k_0$ gives $\omega \approx \omega_0 + v_{\text{gr}}(k-k_0) + \tfrac12\omega''(k_0)(k-k_0)^2$, and the quadratic term $\omega''= c^2\mu^2/\omega^3$ is the group-velocity dispersion that broadens the envelope — the same quantity that limits the bit rate of an optical fibre. The exact source function (4) exhibits the extreme case: an impulse does not stay an impulse but develops the ringing tail tabulated above.

**The non-relativistic limit in practice.** Part 2 of the conserved-density statement is the formal content of the statement that quantum mechanics is the low-energy limit of relativistic field theory, and equation (9) is used as written. Keeping the term $\frac{\hbar^2}{2Mc^2}\psi_{tt}$ to first order and eliminating $\psi_{tt}$ with the leading-order equation produces the relativistic kinetic-energy correction $-p^4/8M^3c^2$, the first of the fine-structure corrections to atomic energy levels and one of the standard tests of the Dirac theory against the Schrodinger theory of :ref[the Schrodinger equation]{to=pde.schrodinger-equation}.

**Numerics: why the two-sign spectrum matters.** A time-stepping scheme for (1) must handle both branches of the dispersion relation, and because $\omega$ grows only linearly in $k$ the stability constraint is the usual Courant condition $c\Delta t \le \Delta x$ of a hyperbolic solver, with the mass term contributing a harmless $O(\mu^2\Delta t^2)$. The genuinely awkward regime is $\mu\Delta t \gg 1$, where the carrier oscillation $e^{-i\mu t}$ must be resolved even though nothing physical happens on that timescale; the standard remedy is the substitution of Step 3 — factor out $e^{-i\mu t}$ and integrate (9), whose time scale is the slow one. This is the same device that underlies the derivation of envelope equations such as the nonlinear Schrodinger equation from the nonlinear Klein-Gordon equation that Strauss writes down as his meson model.
:::
