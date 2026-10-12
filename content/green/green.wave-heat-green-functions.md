---
id: green.wave-heat-green-functions
title: Green's functions for the wave and heat equations
kind: method
level: core
summary: Shows that the causal Green's function of the heat operator is the heat kernel and that of the three-dimensional wave operator is $\delta(t-r/c)/(4\pi c^2 r)$, a delta function on the light cone, derives the retarded potential from it, and identifies Duhamel's principle as convolution in time with the causal Green's function.
prereqs: [green.helmholtz-green-functions, pde.heat-kernel, fourier.delta-identities, found.gaussian-integrals]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§22.4.3, pp. 684-685: the space-time Fourier representation (22.42) with $\\omega = -k_0$, the diffusion Green's function from the $\\omega$ integral with its single pole at $\\omega = -ik^2$ in the lower half-plane, the resulting step function $\\theta(t)$, and the answer (22.45), $G_s(r,t) = (4\\pi t)^{-m/2}e^{-r^2/4t}\\theta(t)$ in $m$ dimensions; §22.4.4, pp. 685-687: the wave equation, the poles of $1/(\\omega^2-k^2)$ on the real axis, the warning that the principal value satisfies only the homogeneous equation and that \"physics determines the contour of integration\", the retarded Green's function obtained by pushing both poles into the lower half-plane and the advanced one by pushing them up, Eqs. (22.46)-(22.49), the reduction (22.52)-(22.53), derived for odd $m$ only with the even case left as Problem 22.26, giving $G^{(\\mathrm{ret})}_s = \\delta(t-r)/4\\pi r$ for $m=3$; p. 688, the Feynman propagator as a linear combination of the advanced and retarded Green's functions, and the observation that higher-dimensional Green's functions are not functions in the ordinary sense and ought to be treated as distributions"
    pages: "684-688"
    role: the contour prescription that selects the retarded Green's function, the heat and wave results, the warning about the principal value, the role of the advanced Green's function in field theory, and the distributional reading
  - work: evans-2010
    loc: "§2.3.1, pp. 45-47: the fundamental solution $\\Phi(x,t) = (4\\pi t)^{-n/2}e^{-\\lvert x\\rvert^2/4t}$ for $t>0$, Theorem 1 on the initial-value problem, the symbolic statement $\\Phi_t-\\Delta\\Phi=0$ with $\\Phi = \\delta_0$ at $t=0$, and the remark on infinite propagation speed; §2.3.1c, pp. 47-48: Duhamel's principle for the heat equation, the family $(12_s)$, the formula (13) and Theorem 2 under the hypothesis $f \\in C_1^2(\\mathbb{R}^n\\times[0,\\infty))$ with compact support in $x$; §2.4.2, pp. 77-79: Duhamel's principle for the wave equation, the family $(40_s)$, the definition (41), Theorem 4 for $n\\ge2$ and $f\\in C^{[n/2]+1}$, the proof by differentiating under the integral sign, and the three-dimensional retarded potential (44); §2.4.1, p. 77, Huygens' principle"
    pages: "45-48, 77-79"
    role: the heat kernel and its interpretation, the two statements of Duhamel's principle with their exact hypotheses, the wave proof, the retarded potential formula, and Huygens' principle
  - work: strauss-2008
    loc: "§3.4, pp. 77-78: the operator method for $u_{tt}-c^2u_{xx} = f$, the ODE analogue (13) with its solution (14), the source operator $s(t)\\psi = (2c)^{-1}\\int_{x-ct}^{x+ct}\\psi$, the resulting $u(t) = \\int_0^t s(t-s)f(s)\\, ds$, and the statement that this is sometimes known as Duhamel's principle: if you can solve the homogeneous equation you can solve the inhomogeneous one"
    pages: "77-78"
    role: the operator reading of Duhamel's principle and the one-dimensional wave formula used as a cross-check
  - work: arfken-2013
    loc: "§10.2, Table 10.1, p. 463, the outgoing Helmholtz Green's function $-e^{ikr}/(4\\pi r)$ in three dimensions, used as the time-harmonic cross-check on the retarded Green's function; §10.1, Example 10.1.2, pp. 453-454, the causal Green's function $\\theta(x-t)\\sin(x-t)$ of $d^2/dx^2+1$ with $y(0)=y'(0)=0$ and the remark that the solution at \"time\" $x$ is influenced only by earlier source contributions, which is causality"
    pages: "453-454, 463"
    role: the time-harmonic consistency check and the one-dimensional causal Green's function of an oscillator, which is the Fourier-transformed wave Green's function
---

:::note[Conventions: causal, retarded, advanced]{provenance=original}
We write the two evolution operators as

$$
L_{\mathrm{heat}} = \frac{\partial}{\partial t} - \kappa\nabla^2 ,
\qquad
L_{\mathrm{wave}} = \frac{\partial^2}{\partial t^2} - c^2\nabla^2 ,
$$

with $\kappa>0$ the diffusivity and $c>0$ the wave speed, and keep the convention of the previous units, $LG = \delta$:

$$
L\,G(\mathbf{r},t) = \delta^{(n)}(\mathbf{r})\,\delta(t) .
$$

Both operators have translation-invariant coefficients, so the Green's function depends only on the separations $\mathbf{r}-\mathbf{r}'$ and $t-t'$ and we may put the source at the origin of space and time. Neither operator has a *unique* Green's function, and the condition that selects one is **causality**: we require

$$
G(\mathbf{r},t) = 0 \qquad\text{for } t<0 ,
$$

so that the response never precedes the impulse. The resulting $G$ is the **causal** or **retarded** Green's function. Reversing the requirement to $G=0$ for $t>0$ gives the **advanced** Green's function; Hassani obtains the two by displacing the poles of the $\omega$ integral downwards and upwards respectively, and notes that the advanced solution is not merely a curiosity, since relativistic quantum field theory builds its propagator from a combination of the two.

Unlike the Green's functions of the previous units, these are genuine distributions: Hassani stresses that in more than one dimension a Green's function need not be a function at all, and the wave case below contains a delta function outright.
:::

:::definition[Causal Green's function of an evolution operator]{provenance=adapted src="hassani-2013:§22.4.3-22.4.4, the step function in Eqs. (22.45) and (22.48), pp. 685-686; evans-2010:§2.3.1, the symbolic statement of the initial condition for $\\Phi$, p. 46"}
Let $L$ be $L_{\mathrm{heat}}$ or $L_{\mathrm{wave}}$ on $\mathbb{R}^n\times\mathbb{R}$. A distribution $G$ is the **causal Green's function** of $L$ if $LG = \delta^{(n)}(\mathbf{r})\delta(t)$ and $G = 0$ for $t<0$. Equivalently, and more usably:

- for $L_{\mathrm{heat}}$: $G$ vanishes for $t<0$, solves $G_t = \kappa\nabla^2 G$ for $t>0$, and $G(\cdot\,,t)\to\delta^{(n)}$ as $t\downarrow0$;
- for $L_{\mathrm{wave}}$: $G$ vanishes for $t<0$, solves $G_{tt} = c^2\nabla^2 G$ for $t>0$, and $G(\cdot\,,t)\to0$, $G_t(\cdot\,,t)\to\delta^{(n)}$ as $t\downarrow0$.

The second description is the one Evans uses when he writes the heat kernel's initial condition as $\Phi = \delta_0$ on $\mathbb{R}^n\times\{t=0\}$; it says that a unit impulse in a first-order equation sets the field itself, while in a second-order equation it sets the field's rate of change — exactly as for the one-dimensional :ref[causal Green's functions]{to=green.causal-green-functions} of ordinary differential operators, where the $p$th-order operator has a jump in the $(p-1)$st derivative.

Given $G$, the solution of $Lu = f$ with zero data at $t=0$ is the space-time convolution

$$
u(\mathbf{r},t) = \int_{-\infty}^{\infty}\!\!\int_{\mathbb{R}^n} G(\mathbf{r}-\mathbf{r}',\,t-t')\, f(\mathbf{r}',t')\; d^nr'\, dt' ,
$$

in which causality truncates the $t'$ integral at $t' = t$.
:::

:::method[The space-time Fourier transform]{provenance=adapted src="hassani-2013:§22.4.3, Eqs. (22.42)-(22.43), p. 684, and §22.4.4, Eq. (22.46) and the pole displacement, pp. 685-686"}
1. **Transform space, keep time.** Set $\tilde G(\mathbf{q},t) = \int G(\mathbf{r},t)e^{-i\mathbf{q}\cdot\mathbf{r}}d^nr$. The spatial Laplacian becomes $-q^2$, so each Fourier mode obeys an *ordinary* differential equation in $t$ with a delta forcing:
   $$
   \tilde G_t + \kappa q^2\tilde G = \delta(t)
   \qquad\text{or}\qquad
   \tilde G_{tt} + c^2q^2\tilde G = \delta(t) ,
   $$
   to be solved with $\tilde G = 0$ for $t<0$. These are the causal Green's functions of a relaxation and of an undamped oscillator, and are written down in :ref[]{to=green.causal-green-functions}.
2. **Or transform time as well.** Then $\partial_t\mapsto -i\omega$ and the equation becomes algebraic: $\tilde G = (\kappa q^2 - i\omega)^{-1}$ or $\tilde G = -(\omega^2-c^2q^2)^{-1}$. The first has its single pole at $\omega = -i\kappa q^2$, already in the lower half-plane, so no prescription is needed and causality is automatic. The second has two poles on the real axis, and causality must be imposed by pushing **both** into the lower half-plane; closing the $\omega$ contour in the lower half-plane for $t>0$ then catches them, while for $t<0$ the contour closes above and encircles nothing, which is where $G=0$ for $t<0$ comes from.
3. **Invert the spatial transform,** reducing the $\mathbf{q}$ integral to a radial one with the angular formula $\int e^{i\mathbf{q}\cdot\mathbf{r}}d\Omega_{\mathbf{q}} = 4\pi\sin(qr)/qr$ in three dimensions.
4. **Convolve** with the source, as in the definition.

Step 2 is Hassani's route, and he warns at it: taking the principal value of the $\omega$ integral for the wave operator — the apparently neutral choice — produces something that solves the wave equation with **zero** on the right-hand side, so that it is no Green's function at all. The contour is not a matter of taste.
:::

:::statement[The heat kernel is the causal Green's function of the heat operator]{provenance=adapted src="hassani-2013:§22.4.3, Eq. (22.45), p. 685; evans-2010:§2.3.1, the definition of $\\Phi$ and Theorem 1, pp. 45-46"}
On $\mathbb{R}^n$, the causal Green's function of $\partial_t - \kappa\nabla^2$ is

$$
G(\mathbf{r},t) = \frac{\theta(t)}{(4\pi\kappa t)^{n/2}}\,\exp\!\left(-\frac{\lvert\mathbf{r}\rvert^2}{4\kappa t}\right) ,
$$

$\theta$ being the Heaviside step. For $\kappa = 1$ this is Hassani's $G_s(r,t) = (4\pi t)^{-m/2}e^{-r^2/4t}\theta(t)$ in $m$ dimensions and Evans's fundamental solution $\Phi$; for $n=1$ it is the :ref[heat kernel]{to=pde.heat-kernel}. Consequently the solution of

$$
u_t - \kappa\nabla^2 u = f \quad\text{in } \mathbb{R}^n\times(0,\infty),
\qquad u = 0 \quad\text{on } \mathbb{R}^n\times\{t=0\}
$$

is

$$
u(\mathbf{r},t) = \int_0^t\!\!\int_{\mathbb{R}^n}\frac{\exp\bigl(-\lvert\mathbf{r}-\mathbf{r}'\rvert^2/4\kappa(t-s)\bigr)}{\bigl(4\pi\kappa(t-s)\bigr)^{n/2}}\; f(\mathbf{r}',s)\; d^nr'\, ds ,
\tag{H}
$$

which is Evans's formula (13). He proves (his Theorem 2) that if $f$ has two continuous spatial derivatives and one continuous time derivative on $\mathbb{R}^n\times[0,\infty)$ and compact support in the space variable, then (H) is of class $C_1^2$, satisfies the equation, and tends to $0$ as $t\downarrow0$.
:::

:::idea{provenance=original}
Each spatial Fourier mode of the heat equation decays independently, at the rate $\kappa q^2$; a unit impulse at $t=0$ excites every mode with amplitude $1$, so the Green's function is the inverse transform of $e^{-\kappa q^2 t}$ — a Gaussian whose width in $\mathbf{q}$ shrinks like $t^{-1/2}$ and whose inverse transform is therefore a Gaussian whose width in $\mathbf{r}$ grows like $t^{1/2}$. That is the whole content of the heat kernel, and the step function appears because the mode equation is first order, so the impulse creates the amplitude rather than changing it.
:::

:::proof{provenance=adapted src="hassani-2013:§22.4.3, pp. 684-685; evans-2010:§2.3.1, p. 45"}
**Step 1 (the mode equation).** By step 1 of the method, $\tilde G_t + \kappa q^2\tilde G = \delta(t)$ with $\tilde G=0$ for $t<0$. Away from $t=0$ the solution is $Ce^{-\kappa q^2t}$; integrating the equation across $t=0$ shows that $\tilde G$ jumps by $1$ there, since $\int\kappa q^2\tilde G\, dt\to0$ over a shrinking interval. Hence

$$
\tilde G(\mathbf{q},t) = \theta(t)\,e^{-\kappa q^2 t} .
$$

**Step 2 (invert).** For $t>0$, by the :ref[Gaussian integral]{to=found.gaussian-integrals} in $n$ dimensions,

$$
G(\mathbf{r},t) = \int\frac{d^nq}{(2\pi)^n}\,e^{i\mathbf{q}\cdot\mathbf{r}}e^{-\kappa t q^2}
= \frac{1}{(2\pi)^n}\left(\frac{\pi}{\kappa t}\right)^{n/2}e^{-\lvert\mathbf{r}\rvert^2/4\kappa t}
= \frac{e^{-\lvert\mathbf{r}\rvert^2/4\kappa t}}{(4\pi\kappa t)^{n/2}} ,
$$

the middle step being the completion of the square $-\kappa tq^2+i\mathbf{q}\cdot\mathbf{r} = -\kappa t\lvert\mathbf{q}-i\mathbf{r}/2\kappa t\rvert^2 - \lvert\mathbf{r}\rvert^2/4\kappa t$ applied coordinate by coordinate, and the arithmetic of the constants being $(2\pi)^{-n}\pi^{n/2} = (2^n\pi^{n/2})^{-1}$, so that the denominator is $(4\pi\kappa t)^{n/2}$.

**Step 3 (checks).** $\int_{\mathbb{R}^n}G(\mathbf{r},t)\, d^nr = \tilde G(\mathbf{0},t) = 1$ for every $t>0$: heat is conserved. And $G(\cdot\,,t)\to\delta^{(n)}$ as $t\downarrow0$, since the mass is $1$ and concentrates in a ball of radius $O(\sqrt{\kappa t})$. Direct differentiation confirms $G_t = \kappa\nabla^2G$ for $t>0$.

**Step 4 (the solution formula).** By the definition's convolution formula, with the $t'$ integral cut at $t'=t$ by the step function and at $t'=0$ because $f$ is given only for $t\ge0$, we get (H). $\square$
:::

:::statement[The retarded Green's function of the three-dimensional wave equation]{provenance=adapted src="hassani-2013:§22.4.4, Eq. (22.53) with $m=3$, p. 687; evans-2010:§2.4.2, Eq. (44), p. 79"}
On $\mathbb{R}^3$, the causal Green's function of $\partial_t^2 - c^2\nabla^2$ is

$$
G(\mathbf{r},t) = \frac{\delta\bigl(t - \lvert\mathbf{r}\rvert/c\bigr)}{4\pi c^2\,\lvert\mathbf{r}\rvert}
\;=\;\frac{\delta\bigl(\lvert\mathbf{r}\rvert - ct\bigr)}{4\pi c\,\lvert\mathbf{r}\rvert}\;\theta(t) .
$$

It is supported entirely on the forward light cone $\lvert\mathbf{r}\rvert = ct$. For $c=1$ this is Hassani's $G^{(\mathrm{ret})}_s(r,t) = \delta(t-r)/(4\pi r)$. The advanced Green's function is the same expression with $t\mapsto -t$, supported on the backward cone.

Consequently the solution of $u_{tt} - c^2\nabla^2 u = f$ with $u = u_t = 0$ at $t=0$ is the **retarded potential**

$$
u(\mathbf{r},t) = \frac{1}{4\pi c^2}\int_{\lvert\mathbf{r}-\mathbf{r}'\rvert < ct}\frac{f\bigl(\mathbf{r}',\, t - \lvert\mathbf{r}-\mathbf{r}'\rvert/c\bigr)}{\lvert\mathbf{r}-\mathbf{r}'\rvert}\; d^3r' ,
\tag{W}
$$

which for $c=1$ is Evans's formula (44). Each volume element of the source contributes as a static source would, but with its strength evaluated at the earlier time $t - \lvert\mathbf{r}-\mathbf{r}'\rvert/c$ at which a signal leaving it would have had to depart to arrive now.
:::

:::idea{provenance=original}
Fourier transform in space again, and each mode is now an undamped oscillator of frequency $cq$ driven by an impulse. The causal response of such an oscillator is $\theta(t)\sin(cqt)/cq$, so the Green's function is the inverse transform of that — and the inverse transform of $\sin(cqt)/cq$ in three dimensions is not a smooth function but a shell: the radial integral turns into $\int_0^\infty\sin(qr)\sin(cqt)\, dq$, which is a delta function in $r-ct$.

Why a shell, and not a blob as in the heat case? Because the modes all travel at the *same* speed $c$ and therefore stay in step: a wave packet assembled at $t=0$ from all wavenumbers with equal amplitude and the same speed remains a sharp front. In the heat equation the decay rate $\kappa q^2$ differs between modes and the packet smears. The sharpness of the front in three dimensions is Huygens' principle, and Evans notes that it holds in odd dimensions $n\ge3$ but fails in even ones, where a disturbance leaves a trailing wake behind the front.
:::

:::proof{provenance=adapted src="hassani-2013:§22.4.4, Eqs. (22.46)-(22.48) and (22.53), pp. 685-687; evans-2010:§2.4.2, p. 79"}
**Step 1 (the mode equation).** By step 1 of the method, $\tilde G_{tt} + c^2q^2\tilde G = \delta(t)$ with $\tilde G=0$ for $t<0$. The homogeneous solutions are $\cos(cqt)$ and $\sin(cqt)$; causality forces $\tilde G$ and $\tilde G_t$ to vanish just before $0$, and integrating the equation across $t=0$ shows that $\tilde G$ stays continuous while $\tilde G_t$ jumps by $1$. The combination with $\tilde G(0)=0$ and $\tilde G_t(0^+)=1$ is

$$
\tilde G(\mathbf{q},t) = \theta(t)\,\frac{\sin(cqt)}{cq} ,
$$

which is the causal Green's function of an oscillator; Arfken, Weber and Harris exhibit the same function in one variable as $\theta(x-t)\sin(x-t)$ for $d^2/dx^2+1$ and point out that it is causality.

**Step 2 (angular integration).** For $t>0$, taking the polar axis of $\mathbf{q}$ along $\mathbf{r}$ and writing $r=\lvert\mathbf{r}\rvert$,

$$
G(\mathbf{r},t) = \frac{1}{(2\pi)^3}\int_0^\infty\!\! dq\; q^2\;\frac{\sin(cqt)}{cq}\cdot\frac{4\pi\sin(qr)}{qr}
= \frac{1}{2\pi^2 c\,r}\int_0^\infty \sin(qr)\,\sin(cqt)\; dq .
$$

**Step 3 (the radial integral is a delta function).** By the product formula $2\sin\alpha\sin\beta = \cos(\alpha-\beta)-\cos(\alpha+\beta)$ and the identity $\int_0^\infty\cos(qa)\, dq = \pi\delta(a)$ (:ref[]{to=fourier.delta-identities}),

$$
\int_0^\infty \sin(qr)\sin(cqt)\; dq
= \frac12\int_0^\infty\Bigl[\cos\bigl(q(r-ct)\bigr) - \cos\bigl(q(r+ct)\bigr)\Bigr] dq
= \frac{\pi}{2}\Bigl[\delta(r-ct) - \delta(r+ct)\Bigr] .
$$

For $t>0$ and $r>0$ the argument $r+ct$ is strictly positive, so the second delta function contributes nothing and

$$
G(\mathbf{r},t) = \frac{1}{2\pi^2 c r}\cdot\frac{\pi}{2}\,\delta(r-ct) = \frac{\delta(r-ct)}{4\pi c\,r}
\qquad (t>0) .
$$

**Step 4 (rewrite on the cone).** $\delta(r-ct) = c^{-1}\delta(t-r/c)$, by the scaling rule for a delta function composed with $t\mapsto r-ct$; hence $G = \delta(t-r/c)/(4\pi c^2 r)$, and this expression already vanishes for $t<0$ when $r>0$, so the step function may be dropped. For $c=1$ and $m=3$ Hassani's general odd-dimensional formula reduces to the same thing.

**Step 5 (the retarded potential).** Convolving as in the definition,

$$
u(\mathbf{r},t) = \int_0^\infty\!\!\int \frac{\delta\bigl(t-t'-\lvert\mathbf{r}-\mathbf{r}'\rvert/c\bigr)}{4\pi c^2\lvert\mathbf{r}-\mathbf{r}'\rvert} f(\mathbf{r}',t')\; d^3r'\, dt' ,
$$

and the $t'$ integral is done by the delta function, which fires at $t' = t-\lvert\mathbf{r}-\mathbf{r}'\rvert/c$. That value of $t'$ is non-negative only for $\lvert\mathbf{r}-\mathbf{r}'\rvert\le ct$, which is the restriction on the spatial domain in (W). $\square$
:::

:::statement[Duhamel's principle]{provenance=adapted src="evans-2010:§2.3.1c, the family $(12_s)$ and Theorem 2, pp. 47-48, and §2.4.2, the family $(40_s)$, Eq. (41) and Theorem 4, pp. 77-78; strauss-2008:§3.4, Eqs. (13)-(14) and the operator method, pp. 77-78"}
Duhamel's principle builds the solution of a forced problem out of solutions of the *unforced* one.

1. **Heat equation.** For $s\ge0$ let $u(\cdot\,,\cdot\,;s)$ solve the homogeneous initial-value problem started at time $s$ with initial datum $f(\cdot\,,s)$:
   $$
   u_t(\cdot\,;s) - \kappa\nabla^2u(\cdot\,;s) = 0 \text{ in } \mathbb{R}^n\times(s,\infty),
   \qquad u(\cdot\,;s) = f(\cdot\,,s) \text{ at } t=s .
   $$
   Then $u(\mathbf{r},t) = \int_0^t u(\mathbf{r},t;s)\, ds$ solves $u_t-\kappa\nabla^2u = f$ with $u=0$ at $t=0$. Evans proves this (Theorem 2) for $f\in C_1^2(\mathbb{R}^n\times[0,\infty))$ with compact support in $\mathbf{r}$, and it is the same thing as formula (H).
2. **Wave equation.** For $s\ge0$ let $u(\cdot\,,\cdot\,;s)$ solve
   $$
   u_{tt}(\cdot\,;s) - c^2\nabla^2u(\cdot\,;s) = 0 \text{ in } \mathbb{R}^n\times(s,\infty),
   \qquad u(\cdot\,;s) = 0,\quad u_t(\cdot\,;s) = f(\cdot\,,s) \text{ at } t=s .
   $$
   Then $u(\mathbf{r},t) = \int_0^t u(\mathbf{r},t;s)\, ds$ solves $u_{tt}-c^2\nabla^2u = f$ with $u = u_t = 0$ at $t=0$. Evans proves this (Theorem 4) for $n\ge2$ and $f\in C^{[n/2]+1}(\mathbb{R}^n\times[0,\infty))$.

Note the asymmetry: in the first-order problem the source is fed in as a *value*, in the second-order problem as a *velocity*. That is the same asymmetry as in the definition of the causal Green's function, and for the same reason.

Strauss presents the principle as an operator identity. The ordinary differential equation $\ddot u + A^2u = f$ with $u(0)=\varphi$, $\dot u(0) = \psi$ has solution $u(t) = S'(t)\varphi + S(t)\psi + \int_0^t S(t-s)f(s)\, ds$ with $S(t) = A^{-1}\sin tA$; the partial differential equation has the same form with $S(t)$ the solution operator that maps an initial velocity to the solution, which for $u_{tt} = c^2u_{xx}$ on the line is $S(t)\psi = (2c)^{-1}\int_{x-ct}^{x+ct}\psi$. His summary is the one to remember: a solver for the free problem is already a solver for the forced one.
:::

:::idea{provenance=original}
A source acting over a time interval can be chopped into a succession of brief impulses. Each impulse, once it has been delivered, is no longer a source: from then on the system evolves freely from whatever state the impulse left it in. So the forced solution is the superposition over $s$ of free evolutions started at time $s$ from the state that the source deposited there — and "the state the source deposited" is $f(\cdot,s)\,ds$ of field for a first-order equation and of velocity for a second-order one.

Stated in terms of Green's functions there is nothing left to prove: Duhamel's formula *is* convolution with the causal Green's function, because the causal Green's function is by definition the free evolution from a point impulse. The two statements of the principle are what the formulas (H) and (W) look like when the spatial convolution is left as "the solution operator" instead of being written out.
:::

:::proof[Wave equation]{provenance=adapted src="evans-2010:§2.4.2, proof of Theorem 4, step 2, p. 78"}
Assume the regularity Evans assumes, which makes $u(\cdot\,,\cdot\,;s)$ of class $C^2$ on $\mathbb{R}^n\times[s,\infty)$ and allows the differentiations below under the integral sign. Put $u(\mathbf{r},t) = \int_0^t u(\mathbf{r},t;s)\, ds$.

**Step 1 (first time derivative).** Differentiating with respect to $t$ picks up a boundary term from the upper limit plus the integral of the derivative:

$$
u_t(\mathbf{r},t) = u(\mathbf{r},t;t) + \int_0^t u_t(\mathbf{r},t;s)\, ds = \int_0^t u_t(\mathbf{r},t;s)\, ds ,
$$

the boundary term vanishing because $u(\cdot\,;s) = 0$ at $t=s$ — this is the first place the initial condition of the family is used.

**Step 2 (second time derivative).** Differentiating again,

$$
u_{tt}(\mathbf{r},t) = u_t(\mathbf{r},t;t) + \int_0^t u_{tt}(\mathbf{r},t;s)\, ds = f(\mathbf{r},t) + \int_0^t u_{tt}(\mathbf{r},t;s)\, ds ,
$$

the boundary term now being $u_t(\cdot\,;s)$ at $t=s$, which is $f(\cdot\,,s)$ by the second initial condition of the family. This is where the source enters, and it enters once, undifferentiated.

**Step 3 (the Laplacian).** The Laplacian acts in $\mathbf{r}$ only, so it passes through the $s$ integral, and each member of the family satisfies the homogeneous equation:

$$
c^2\nabla^2 u(\mathbf{r},t) = \int_0^t c^2\nabla^2u(\mathbf{r},t;s)\, ds = \int_0^t u_{tt}(\mathbf{r},t;s)\, ds .
$$

**Step 4 (subtract).** The two integrals are identical, so $u_{tt} - c^2\nabla^2u = f$. Finally $u(\mathbf{r},0)=0$ because the integral is empty, and $u_t(\mathbf{r},0)=0$ by Step 1 for the same reason. $\square$
:::

:::proof[Heat equation, and its identification with (H)]{provenance=adapted src="evans-2010:§2.3.1c, pp. 47-48; hassani-2013:§22.4.3, p. 685"}
**Step 1 (what the family is).** By Step 2 of the heat proof above, the solution of the homogeneous heat equation started at time $s$ with datum $g$ is the convolution $\bigl(G(\cdot\,,t-s)*g\bigr)(\mathbf{r})$. With $g = f(\cdot\,,s)$,

$$
u(\mathbf{r},t;s) = \int_{\mathbb{R}^n} G(\mathbf{r}-\mathbf{r}',\,t-s)\, f(\mathbf{r}',s)\; d^nr' ,
$$

so integrating over $s\in(0,t)$ reproduces exactly formula (H). Duhamel's principle for the heat equation and the convolution formula (H) are therefore the same statement, written in two ways.

**Step 2 (why it solves the problem).** Formally the computation is Steps 1-4 of the wave proof with one derivative fewer: $u_t = u(\mathbf{r},t;t) + \int_0^t u_t\, ds = f(\mathbf{r},t) + \int_0^t u_t(\mathbf{r},t;s)\, ds$, now with the boundary term supplying $f$ because the family carries the source as its *initial value*; and $\kappa\nabla^2u = \int_0^t\kappa\nabla^2u\, ds = \int_0^t u_t\, ds$. Subtracting gives $u_t-\kappa\nabla^2u=f$.

**Step 3 (why this needs Evans's theorem).** The formal computation differentiates under an integral whose integrand is singular at the endpoint $s=t$, where $G(\cdot\,,t-s)$ blows up. Evans handles this by first moving the singularity onto $f$ — changing variables so that the formula reads $\int_0^t\int G(\mathbf{r}',s)f(\mathbf{r}-\mathbf{r}',t-s)\, d^nr'\, ds$, after which the derivatives fall on the smooth factor $f$ — and then integrating by parts on $(\varepsilon,t)$ and letting $\varepsilon\to0$. This is where his hypotheses on $f$ (two spatial and one time derivative, continuous, with compact support in $\mathbf{r}$) are spent. The wave proof above needs no such care, because there the regularity of the family members is supplied by the explicit solution formulas for the homogeneous problem. $\square$
:::

:::remark[What the two Green's functions say about the two equations]{provenance=original}
- *Support, and propagation speed.* The wave Green's function is supported on the single sphere $\lvert\mathbf{r}\rvert = ct$: a disturbance reaches a point exactly once and then is gone. The heat Green's function is positive everywhere for every $t>0$, however large $\lvert\mathbf{r}\rvert$: Evans's "infinite propagation speed". These are the opposite extremes, and the contrast is made concrete in the second example below.
- *Dimension.* The sharp front is special to odd dimensions $n\ge3$. In two dimensions the Green's function is supported on the whole solid cone $\lvert\mathbf{r}\rvert\le ct$ rather than on its boundary, which is what Evans draws from the representation formulas: in even dimensions the data at a point affect the solution throughout the interior of the cone, so a disturbance has a wake. This is Huygens' principle and its failure. Hassani's reduction to delta functions, (22.52)-(22.53), is derived only for odd $m$, the even case being left as one of his problems, so the even-dimensional statement here is Evans's and not his.
- *The one-dimensional wave case.* There $G = \tfrac{1}{2c}\theta(ct-\lvert x\rvert)$ — a plateau, not a delta function — and (W) becomes the integral of $f$ over the backward characteristic triangle, which is Strauss's formula $u = (2c)^{-1}\iint_\Delta f$. So even the "odd-dimensional" sharpness is a statement about $n\ge3$: in one dimension the front is sharp but the Green's function is a step, and the wake is constant rather than absent.
- *Relation to the Helmholtz Green's function.* Fourier transforming the retarded Green's function in time at frequency $\omega$ gives
  $$
  \int G(\mathbf{r},t)\,e^{i\omega t}\, dt = \frac{e^{i\omega r/c}}{4\pi c^2 r} = -\frac{1}{c^2}\left(-\frac{e^{ikr}}{4\pi r}\right),\qquad k=\frac{\omega}{c},
  $$
  which is $-c^{-2}$ times the outgoing Helmholtz Green's function of :ref[]{to=green.helmholtz-green-functions}. The factor $-c^{-2}$ is exactly what the algebra of substituting $u = \psi e^{-i\omega t}$ into $u_{tt}-c^2\nabla^2u = f$ demands, as the first example below checks. So *retarded* and *outgoing* are the same condition seen in the two domains, and the contour prescription $k\to k+i\delta$ of the previous unit is the Fourier transform of the prescription "push both $\omega$ poles down" used here.
- *Where the delta function went.* In the heat case the Green's function is a smooth function for $t>0$; in the wave case it is not a function at all. Hassani draws the general moral: in more than one dimension Green's functions must be handled as distributions. The practical consequence is that (W) must never be differentiated naively under the integral sign — one differentiates the retarded *argument*, which produces the extra terms responsible for radiation fields in electrodynamics.
- *What is and is not proved here.* That the stated $G$ are the causal Green's functions is established above. That formulas (H) and (W) actually define solutions of the stated regularity is not; that is Evans's Theorems 2 and 4, whose hypotheses on $f$ are quoted in the statement, and we use them rather than reprove them.
:::

:::example[A steady spatial source in the heat equation, and the approach to the steady state]{provenance=original}
Solve $u_t - u_{xx} = \cos x$ on $\mathbb{R}$ with $u(x,0)=0$ ($n=1$, $\kappa=1$).

1. *The one integral needed.* For $\tau>0$, substituting $z = x-y$ and using that $G$ is even,
   $$
   \int_{\mathbb{R}}G(x-y,\tau)\cos y\; dy = \cos x\int_{\mathbb{R}}G(z,\tau)\cos z\; dz
   = \cos x\,\operatorname{Re}\int\frac{e^{-z^2/4\tau}}{\sqrt{4\pi\tau}}\,e^{iz}\, dz = e^{-\tau}\cos x ,
   $$
   the odd part dropping out and the Gaussian integral giving $e^{-\tau}$ (the Fourier transform of $G$ at wavenumber $1$, which is $e^{-\kappa q^2\tau}$ with $\kappa=q=1$ — exactly Step 1 of the proof).
2. *Duhamel.* By (H),
   $$
   u(x,t) = \int_0^t e^{-(t-s)}\cos x\; ds = \cos x\int_0^t e^{-\tau}\, d\tau = \bigl(1-e^{-t}\bigr)\cos x .
   $$
3. *Check the equation.* $u_t = e^{-t}\cos x$ and $u_{xx} = -(1-e^{-t})\cos x$, so
   $$
   u_t - u_{xx} = e^{-t}\cos x + \cos x - e^{-t}\cos x = \cos x ,
   $$
   and $u(x,0)=0$. Both conditions hold.
4. *Numbers and limits.* At $x=0$, $t=\ln 2$: $u = 1-\tfrac12 = 0.5$ exactly. As $t\to\infty$, $u\to\cos x$, which is the steady state: it satisfies $-u_{xx} = \cos x$. The approach is exponential with rate $1 = \kappa q^2$ for $q=1$, so a source of spatial wavelength $2\pi/q$ equilibrates in a time $\sim 1/\kappa q^2$ — the diffusive scaling, and the reason fine spatial structure in a temperature field relaxes first.
:::

:::example[A point source switched on: light cone versus diffusion]{provenance=original}
Compare the responses of the two equations in three dimensions to the same source, a point source of constant strength switched on at $t=0$:

$$
f(\mathbf{r},t) = Q\,\delta^{(3)}(\mathbf{r})\,\theta(t) .
$$

1. *Wave equation.* Formula (W) with the delta function in space gives
   $$
   u(\mathbf{r},t) = \frac{Q}{4\pi c^2 r}\,\theta\!\left(t-\frac{r}{c}\right) .
   $$
   Nothing at all happens at distance $r$ until the moment $t=r/c$; from then on the field is frozen at the static value $Q/(4\pi c^2 r)$, which is the solution of $-c^2\nabla^2u = Q\delta^{(3)}$. With $Q = 4\pi$, $c=1$: at $r=2$ the field is $0$ for $t<2$ and $Q/(4\pi c^2 r) = 4\pi/(4\pi\cdot 2) = 0.5$ for $t>2$.
2. *Heat equation.* Formula (H) with the same source gives, with $\tau = t-s$,
   $$
   u(\mathbf{r},t) = Q\int_0^t\frac{e^{-r^2/4\kappa\tau}}{(4\pi\kappa\tau)^{3/2}}\; d\tau .
   $$
   Substitute $\xi = r/(2\sqrt{\kappa\tau})$, so that $\tau = r^2/(4\kappa\xi^2)$ and $d\tau = -r^2\,d\xi/(2\kappa\xi^3)$, while $(4\pi\kappa\tau)^{3/2} = \pi^{3/2}r^3/\xi^3$. The powers of $\xi$ cancel exactly and
   $$
   u(\mathbf{r},t) = \frac{Q}{2\pi^{3/2}\kappa r}\int_{r/2\sqrt{\kappa t}}^{\infty}e^{-\xi^2}\, d\xi
   = \frac{Q}{4\pi\kappa r}\operatorname{erfc}\!\left(\frac{r}{2\sqrt{\kappa t}}\right) ,
   $$
   using $\int_a^\infty e^{-\xi^2}d\xi = \tfrac{\sqrt\pi}{2}\operatorname{erfc}(a)$.
3. *Checks.* As $t\to\infty$ the complementary error function tends to $1$ and $u\to Q/(4\pi\kappa r)$, the solution of $-\kappa\nabla^2u = Q\delta^{(3)}$: the same static limit as in part 1 with $\kappa$ in place of $c^2$. At short times $\operatorname{erfc}(a) \sim e^{-a^2}/(a\sqrt\pi)$, so $u$ is exponentially small but *not zero* at any $r$ — the contrast with part 1, where it is exactly zero outside the cone.
4. *A number.* Take $Q = 4\pi$, $\kappa = 1$, $r = 1$, $t = \tfrac14$. Then the argument is $r/2\sqrt{\kappa t} = 1$ and
   $$
   u = \operatorname{erfc}(1) = 0.1572992 ,
   $$
   against the eventual steady value $1$. The front of the wave problem, by contrast, would not have arrived at $r=1$ until $t=1/c$.
5. *Diffusive versus ballistic.* The error-function argument shows that the heat response at distance $r$ reaches half its final value when $r/2\sqrt{\kappa t} = \operatorname{erfc}^{-1}(1/2) = 0.4769$, that is at $t \approx 1.10\,r^2/\kappa$ — a time quadratic in $r$, not linear. That is the whole difference between diffusion and propagation, and it is readable straight off the two Green's functions.
:::

:::example[Time-harmonic source: consistency with the Helmholtz Green's function]{provenance=original}
Take $f(\mathbf{r},t) = q\,\delta^{(3)}(\mathbf{r})\cos\omega t$, a point source oscillating for all time (so we drop the initial conditions and use the Green's function directly). Convolving,

$$
u(\mathbf{r},t) = \frac{q}{4\pi c^2 r}\cos\bigl(\omega t - k r\bigr),
\qquad k = \frac{\omega}{c} ,
$$

an outgoing spherical wave whose phase lags the source by $kr$: the retardation made visible.

The same answer must follow from the previous unit. Writing $u = \operatorname{Re}\bigl[\psi(\mathbf{r})e^{-i\omega t}\bigr]$ and $f = \operatorname{Re}\bigl[q\delta^{(3)}e^{-i\omega t}\bigr]$ in $u_{tt}-c^2\nabla^2u = f$ gives $-\omega^2\psi - c^2\nabla^2\psi = q\delta^{(3)}$, that is

$$
\bigl(\nabla^2 + k^2\bigr)\psi = -\frac{q}{c^2}\,\delta^{(3)} ,
$$

so $\psi = -\dfrac{q}{c^2}\,G_{\mathrm{Helmholtz}} = -\dfrac{q}{c^2}\left(-\dfrac{e^{ikr}}{4\pi r}\right) = \dfrac{q\,e^{ikr}}{4\pi c^2 r}$, whose real part against $e^{-i\omega t}$ is the formula above. The two units agree, including the sign, and the agreement is a check on both conventions at once. With $q = 4\pi$, $c=1$, $\omega=1$ and $r=\pi$: $u(\mathbf{r},0) = \cos(-\pi)/\pi = -1/\pi = -0.3183099$.
:::

:::application{provenance=original}
**Electrodynamics.** In the Lorenz gauge each component of the four-potential satisfies $\Box A^\mu = \mu_0 J^\mu$ with $\Box = c^{-2}\partial_t^2-\nabla^2$, so (W) gives the retarded potentials
$$
\phi(\mathbf{r},t) = \frac{1}{4\pi\varepsilon_0}\int\frac{\rho_{\mathrm e}(\mathbf{r}',t-\lvert\mathbf{r}-\mathbf{r}'\rvert/c)}{\lvert\mathbf{r}-\mathbf{r}'\rvert}\, d^3r',
\qquad
\mathbf{A}(\mathbf{r},t) = \frac{\mu_0}{4\pi}\int\frac{\mathbf{J}(\mathbf{r}',t-\lvert\mathbf{r}-\mathbf{r}'\rvert/c)}{\lvert\mathbf{r}-\mathbf{r}'\rvert}\, d^3r' ,
$$
from which the Liénard-Wiechert fields of a moving charge follow by differentiating the retarded argument — and the terms generated by that differentiation, proportional to the acceleration and falling off as $1/r$, are the radiation fields. The choice of the retarded rather than the advanced Green's function is the arrow of time in classical electrodynamics; the symmetric combination is what Feynman-Wheeler absorber theory and the Feynman propagator of field theory are built on, which is Hassani's point about the advanced solution not being discardable.

**Heat sources and thermal design.** The heat Green's function is the workhorse of transient thermal analysis: the temperature rise under a laser spot, a buried power cable, a frictional contact or a weld pool is computed as a convolution of the source history with the Gaussian kernel, and the error-function profile of the second example is the standard "continuous point source" solution used in geothermal borehole design and in machining-temperature estimates. In geophysics the same kernel with $\kappa\sim10^{-6}\,\mathrm{m^2\,s^{-1}}$ gives the diurnal and annual skin depths of the ground temperature, and in semiconductor processing it sets the thermal budget of an anneal.

**Duhamel in engineering practice.** Structural and mechanical engineering uses Duhamel's integral under that name: the response of a linear oscillator to an arbitrary load is $\int_0^t h(t-s)F(s)\, ds$ with $h$ the unit-impulse response, which is exactly the one-mode case of the statement above and is what seismic response spectra are computed from. In control theory the same formula is the convolution of the input with the impulse response, and the step-response form is the $\theta(t-r/c)$ of the second example. The content in every case is Strauss's: solving the free problem once suffices.

**Acoustics and seismology.** Convolution with the retarded Green's function is forward modelling: a seismogram is the Earth's Green's function convolved with the source time function, and the central task of exploration seismology is to deconvolve the one from the other. The sharpness of the three-dimensional kernel — Huygens' principle — is what makes travel-time tomography possible at all, since it is what lets an arrival be assigned a single ray path; in two-dimensional modelling the wake of the even-dimensional Green's function has to be corrected for explicitly.

**Diffusion-limited processes and probability.** The heat Green's function is the transition density of Brownian motion, and (H) reads as the expected accumulated source along Brownian paths; this is the Feynman-Kac link that makes :ref[Brownian motion]{to=prob.brownian-motion} and the heat equation two views of one object, and it is why Monte Carlo path sampling is a legitimate solver for the heat equation with sources.
:::
