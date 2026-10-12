---
id: pde.schrodinger-equation
title: The Schrodinger equation
kind: application
level: core
summary: States the time-dependent and time-independent Schrodinger equations, shows that separating the time turns the first into an eigenvalue problem whose solutions are the stationary states, works out the free particle, the infinite well and the harmonic oscillator with their normalizations and energy levels, and derives the probability current and the continuity equation that makes the normalization persist.
prereqs: [pde.separation-of-variables, pde.helmholtz-equation, spec.hermite-polynomials, ode.eigenfunction-expansions, vcalc.divergence-theorem]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§11.3, pp. 583–588: the derivation of the time-independent Schrodinger equation from the wave equation (1) by the periodic ansatz (2), the resulting Helmholtz equation (3) with $k = \\omega/v = 2\\pi/\\lambda$, the substitution of the de Broglie wavelength $\\lambda = h/mv$ (4), and the identification $mv^2/2 = E - V$ giving the equation (5) and its operator form (6) $(-\\frac{h^2}{8\\pi^2m}\\Delta + V)\\psi = E\\psi$, with the remark that the energy levels are therefore the spectrum of that operator and that physically meaningful solutions must remain finite and tend to zero at infinity; Example 11.3-1, pp. 585–588: the harmonic oscillator, its potential $V = m\\omega_0^2q^2/2$, the reduction by $b^2 = h/2\\pi m\\omega_0$ and $s = q/b$ to $\\tilde\\psi'' + (\\Lambda - s^2)\\tilde\\psi = 0$ (9), the substitution removing the Gaussian factor to give Hermite's equation (10), the condition $\\Lambda = 2n+1$ (11), the orthonormal eigenfunctions built from Hermite polynomials, and the energy levels $E_n = (n+\\frac12)h\\nu$ (12) with the zero-point energy $h\\nu/2$ and $n$ called the principal quantum number; §11.3, Prob. 5, p. 588, which leaves to the reader the growth of the non-terminating Hermite series; §11.3, Prob. 9–10, pp. 589–590, the three-dimensional oscillator separated in Cartesian coordinates and the degeneracy of its levels; §11.4, pp. 590–591, the Hamilton operator obtained by replacing each $p_j$ by the momentum operator of his §11.2, Eq. (2), namely $\\frac{h}{2\\pi i}\\partial/\\partial q_j$ with no leading minus sign, and each $q_j$ by multiplication by $q_j$"
    pages: "583-591"
    role: the route from the wave equation to the time-independent equation, the operator form and the spectral reading of the energy levels, and the complete harmonic oscillator
  - work: hassani-2013
    loc: "§13.1, Eq. (13.5), p. 396: the time-dependent Schrodinger equation $-\\frac{\\hbar^2}{2m}\\nabla^2\\Psi + V\\Psi = i\\hbar\\,\\partial\\Psi/\\partial t$ with $\\lvert\\Psi\\rvert^2$ the probability density, and the separation of time from it; §14.8.1, pp. 452–453: the substitution $\\psi = A\\exp(iS/\\hbar)$ with $A,S$ real, displayed as (14.49), the two real equations (14.50) it produces, the definitions (14.51) $\\rho = A^2 = \\lvert\\psi\\rvert^2$ and $\\mathbf{J} = A^2\\nabla S/m = \\rho\\mathbf{v}$, the continuity equation (14.52) $\\partial\\rho/\\partial t + \\nabla\\cdot\\mathbf{J} = 0$, and Proposition 14.8.2, that as $\\hbar\\to0$ the solution describes a fluid of non-interacting classical particles with density $\\rho$ and current $\\mathbf{J}$; §14.8, the WKB connection formulas and the Bohr–Sommerfeld condition $\\int_a^b\\sqrt{2m(E-V)}\\,dx/\\hbar = (n+\\tfrac12)\\pi$, p. 452"
    pages: "396, 452-453"
    role: the time-dependent equation in the physicists' notation, the probability current and continuity equation with the classical limit, and the Bohr–Sommerfeld condition
  - work: rhb-2006
    loc: "§21.3.2, p. 741: the Schrodinger equation for the electron in a hydrogen atom, $-\\frac{\\hbar^2}{2m}\\nabla^2u - \\frac{e^2u}{4\\pi\\varepsilon_0 r} = i\\hbar\\,\\partial u/\\partial t$, the stationary-state factor $T(t) = A\\exp(-iEt/\\hbar)$, the observation that the resulting equation is similar to but not the same as Helmholtz's because of the $1/r$ coefficient, and the general point that for any equation built from $\\nabla^2$ in which $\\theta$ and $\\varphi$ appear only inside $\\nabla^2$ the angular factors are spherical harmonics — in particular for a central potential $V(r)$"
    pages: "741"
    role: the stationary-state time factor with its sign, and the statement that a central potential leaves the angular factors unchanged
  - work: reed-simon-1980
    loc: "§VIII.11, pp. 302–304: the mathematical model — a separable Hilbert space $\\mathcal{H}$, physical states as unit vectors determined up to a phase, observables as self-adjoint operators with the probability of a measurement in $[a,b]$ given by the projection-valued measure, dynamics as what they call a continuous one-parameter group of unitary operators $U(t)$, the self-adjoint generator $H$ called the Hamiltonian, the equation $\\frac{d}{dt}[U(t)\\varphi] = iH[U(t)\\varphi]$ for $\\varphi \\in D(H)$ called the Schrodinger equation, the point spectrum of $H$ as the stationary states, and the three mathematical problems: self-adjointness (including the choice of the right self-adjoint extension), spectral analysis, and scattering theory"
    pages: "302-304"
    role: the operator-theoretic formulation, the role of self-adjointness, and the identification of stationary states with the point spectrum
---

:::definition[The two Schrodinger equations]{provenance=adapted src="hassani-2013:§13.1, Eq. (13.5), p. 396; kreyszig-1978:§11.3, Eqs. (5)–(6), p. 585; rhb-2006:§21.3.2, p. 741"}
A non-relativistic particle of mass $m$ moving in a potential $V(\mathbf{r})$ is described by a complex-valued **wave function** $\Psi(\mathbf{r},t)$ satisfying the **time-dependent Schrodinger equation**

$$
-\frac{\hbar^2}{2m}\nabla^2\Psi + V(\mathbf{r})\,\Psi \;=\; i\hbar\,\frac{\partial\Psi}{\partial t} , \tag{1}
$$

where $\hbar = h/2\pi$ and $h$ is Planck's constant. The quantity $\lvert\Psi(\mathbf{r},t)\rvert^2$ is the **probability density** for finding the particle at $\mathbf{r}$ at time $t$, so a physically admissible $\Psi$ must satisfy the **normalization**

$$
\int \lvert\Psi(\mathbf{r},t)\rvert^2\,dV = 1 . \tag{2}
$$

The **time-independent Schrodinger equation** is the eigenvalue problem

$$
-\frac{\hbar^2}{2m}\nabla^2\psi + V(\mathbf{r})\,\psi \;=\; E\,\psi , \qquad\text{that is}\qquad \hat H\psi = E\psi , \tag{3}
$$

with $\hat H = -\frac{\hbar^2}{2m}\nabla^2 + V$ the **Hamiltonian operator**. Kreyszig notes at once what (3) is for, and he puts the claim carefully: the operator form suggests that which energies are possible depends on the spectrum of $\hat H$, and a solution counts as physically meaningful only if it stays finite and tends to zero at infinity — it is that restriction, not the differential equation alone, that quantizes the energy. The identification of the admissible energies *with* the spectrum of $\hat H$ is the stronger statement, and it is Reed and Simon's rather than his: it presupposes a domain on which $\hat H$ is self-adjoint, and the remark below returns to it. Kreyszig's §11.4 records how $\hat H$ is written down: take the classical Hamiltonian $H = E_{\text{kin}} + V$ in terms of positions and momenta, and replace each momentum $p_j$ by the operator $\frac{h}{2\pi i}\partial/\partial q_j = -i\hbar\,\partial/\partial q_j$ (his §11.2, Eq. (2)) and each coordinate $q_j$ by multiplication by $q_j$. Note the sign: $1/i = -i$, so Kreyszig's $\frac{h}{2\pi i}\partial/\partial q_j$, written without a leading minus, *is* the physicists' $-i\hbar\,\partial/\partial q_j$.

**Units and conventions.** Kreyszig writes $h$ where we write $2\pi\hbar$, so his equation (5) reads $\Delta\psi + \frac{8\pi^2m}{h^2}(E-V)\psi = 0$, which is (3). Hassani and Riley, Hobson and Bence use $\hbar$ as above. Reed and Simon work in units with $\hbar = 1$ and write the dynamics as $\frac{d}{dt}[U(t)\varphi] = iH[U(t)\varphi]$, which is (1) with the *opposite* sign of $i$ — their $U(t) = e^{itH}$ against the physicists' $e^{-i\hat Ht/\hbar}$. **We follow the physicists' convention (1)**, so that a stationary state carries the time factor $e^{-iEt/\hbar}$, as in Riley, Hobson and Bence. Nothing physical depends on the choice, since the two are exchanged by complex conjugation, but the sign of the probability current below does.
:::

:::statement[Separation into stationary states]{provenance=adapted src="rhb-2006:§21.3.2, p. 741; kreyszig-1978:§11.3, pp. 583–585; hassani-2013:§13.1, pp. 396–397"}
Separable solutions of (1) of the form $\Psi(\mathbf{r},t) = \psi(\mathbf{r})T(t)$ exist exactly when $\psi$ solves (3) for some constant $E \in \mathbb{C}$, and then

$$
\Psi(\mathbf{r},t) = \psi(\mathbf{r})\,e^{-iEt/\hbar} . \tag{4}
$$

If in addition **$E$ is real**, such a $\Psi$ is a **stationary state**: its probability density $\lvert\Psi\rvert^2 = \lvert\psi\rvert^2$ does not depend on $t$, because the time factor then has modulus one.

That hypothesis has to be carried, because (3) as written is a differential equation with no normalization and no boundary condition attached, and so does not by itself force $E$ to be real: for complex $E$ the time factor has modulus $e^{(\operatorname{Im}E)t/\hbar}$ and the density grows or decays, and the remark below exhibits such a separable solution for the free particle. Reality is automatic at the one place it matters. If $\psi$ is an eigenfunction of $\hat H$ *as a self-adjoint operator* — in particular if $V$ is real and $\psi$ is normalizable — then $E$ is real, as Step 2 of the proof shows in a line.

If the eigenfunctions $\psi_n$ of (3) with eigenvalues $E_n$ form a complete orthonormal set, the general solution of (1) with initial datum $\Psi(\mathbf{r},0) = f(\mathbf{r})$ is

$$
\Psi(\mathbf{r},t) = \sum_n c_n\,\psi_n(\mathbf{r})\,e^{-iE_nt/\hbar} , \qquad c_n = \int \overline{\psi_n}\,f\;dV , \tag{5}
$$

and $\sum_n\lvert c_n\rvert^2 = 1$ when $f$ is normalized. A superposition of two or more stationary states with *different* energies is **not** stationary: its density oscillates at the beat frequencies $(E_n - E_{n'})/\hbar$.

Kreyszig arrives at (3) along a different road, which is worth recording because it explains the equation's shape. He starts from the wave equation for a scalar field, imposes the time-harmonic factor to get the Helmholtz equation $\Delta\psi + k^2\psi = 0$ with $k = 2\pi/\lambda$, and then substitutes de Broglie's $\lambda = h/mv$ for the wavelength of matter waves; since $mv^2/2 = E - V$, the wavenumber becomes $k^2 = 8\pi^2m(E-V)/h^2$, and the Helmholtz equation becomes (3). So the time-independent Schrodinger equation is the :ref[Helmholtz equation]{to=pde.helmholtz-equation} with a position-dependent wavenumber. Riley, Hobson and Bence make the same comparison for hydrogen, where the coefficient involves $1/r$, and record that what one gets there resembles the Helmholtz equation without being it.
:::

:::idea{provenance=original}
Equation (1) is first order in $t$ and second order in space, like the heat equation, but with an $i$ in front of the time derivative — and that single factor of $i$ changes everything. Separating variables produces $T'/T = -iE/\hbar$ instead of the heat equation's real decay rate, so for real $E$ the time factor has modulus one and oscillates instead of decaying. The result is that a Schrodinger eigenmode persists for ever rather than dying out, and an initial state does not relax to anything; it merely has its modes rotate at different rates, which is why quantum evolution is reversible while diffusion is not.

The separation itself is the ordinary argument: divide (1) by $\psi T$, note that one side depends on $\mathbf{r}$ alone and the other on $t$ alone, and apply the separation lemma. The content is in which values of the separation constant are admissible, and that is decided by the requirement that $\psi$ be normalizable — the three examples below show it deciding differently in three cases.
:::

:::proof{provenance=adapted src="rhb-2006:§21.3.2, p. 741; hassani-2013:§13.1, pp. 396–397"}
**Step 1 (separate).** Put $\Psi = \psi(\mathbf{r})T(t)$ into (1) and divide by $\psi T$:

$$
\frac{1}{\psi}\left[-\frac{\hbar^2}{2m}\nabla^2\psi + V\psi\right] = i\hbar\,\frac{T'(t)}{T(t)} .
$$

The left side depends only on $\mathbf{r}$ and the right only on $t$, so by the separation lemma of :ref[separation of variables]{to=pde.separation-of-variables} both equal a constant, which we call $E$. This gives (3) for $\psi$, and $i\hbar T' = ET$ for $T$.

**Step 2 (the time factor).** The equation $T' = -iET/\hbar$ has the general solution $T = Ae^{-iEt/\hbar}$, for any $E\in\mathbb{C}$; absorbing $A$ into $\psi$ gives (4). Now impose the hypothesis that $E$ is real. Then $\lvert T\rvert = 1$, so $\lvert\Psi\rvert^2 = \lvert\psi\rvert^2$ does not depend on $t$ and $\Psi$ is stationary.

Reality is a genuine extra hypothesis and not a consequence of (3) — the remark below exhibits a separable solution with $E$ purely imaginary — but it is automatic in the case the rest of the unit works in. If $V$ is real and $\psi$ is a normalizable eigenfunction of $\hat H$, then, with the inner product linear in its first slot and $\hat H$ symmetric on its domain,

$$
E\lVert\psi\rVert^2 = (\hat H\psi,\psi) = (\psi,\hat H\psi) = \overline E\,\lVert\psi\rVert^2 ,
$$

and $\lVert\psi\rVert \ne 0$, so $E = \overline E$. Finding a domain on which $\hat H$ really is self-adjoint, rather than merely symmetric, is Reed and Simon's first mathematical problem.

**Step 3 (superposition).** Each term of (5) solves (1), by Step 2, and (1) is linear, so any finite sum does; for an infinite sum, the convergence of $\sum\lvert c_n\rvert^2$ and the completeness of $\{\psi_n\}$ give convergence in the mean-square sense (:ref[eigenfunction expansions]{to=ode.eigenfunction-expansions}). At $t=0$ the sum is $\sum c_n\psi_n$, which is the expansion of $f$, so the initial condition holds; the coefficients are $c_n = (f, \psi_n)$ by orthonormality, which is the integral in (5) with our convention that an inner product is linear in its first slot.

**Step 4 (normalization is preserved, and a superposition is not stationary).** By orthonormality,

$$
\int\lvert\Psi\rvert^2 dV = \sum_{n,n'}\overline{c_n}c_{n'}e^{i(E_n-E_{n'})t/\hbar}\int\overline{\psi_n}\psi_{n'}dV = \sum_n\lvert c_n\rvert^2 ,
$$

independent of $t$: the normalization (2) holds at all times if it holds at one. But the density itself is

$$
\lvert\Psi(\mathbf{r},t)\rvert^2 = \sum_{n,n'}\overline{c_n}c_{n'}\,\overline{\psi_n(\mathbf{r})}\psi_{n'}(\mathbf{r})\,e^{i(E_n-E_{n'})t/\hbar} ,
$$

in which every off-diagonal pair with $E_n\ne E_{n'}$ contributes a term oscillating at the frequency $\lvert E_n-E_{n'}\rvert/\hbar$. Only if a single energy is present does the density stand still. $\square$
:::

:::statement[The probability current and the continuity equation]{provenance=adapted src="hassani-2013:§14.8.1, Eqs. (14.49)–(14.52), pp. 452–453"}
For a solution $\Psi$ of (1) with real $V$, define the **probability density** and **probability current density**

$$
\rho = \lvert\Psi\rvert^2 , \qquad
\mathbf{J} = \frac{\hbar}{m}\operatorname{Im}\bigl(\overline\Psi\,\nabla\Psi\bigr) = \frac{\hbar}{2mi}\bigl(\overline\Psi\nabla\Psi - \Psi\nabla\overline\Psi\bigr) . \tag{6}
$$

Then

$$
\frac{\partial\rho}{\partial t} + \nabla\cdot\mathbf{J} = 0 . \tag{7}
$$

Consequently $\frac{d}{dt}\int_\Omega\rho\,dV = -\oint_{\partial\Omega}\mathbf{J}\cdot\hat{\mathbf{n}}\,dS$ for any fixed region $\Omega$, and if $\Psi$ and $\nabla\Psi$ decay suitably at infinity then $\int\rho\,dV$ is constant in time: normalization, once imposed, is permanent.

Hassani obtains (6) and (7) in polar form. Writing $\Psi = A\exp(iS/\hbar)$ with $A$ and $S$ real, equation (1) is *exactly equivalent* to the pair

$$
\frac{\partial S}{\partial t} + \frac{\nabla S\cdot\nabla S}{2m} + V = \frac{\hbar^2}{2m}\frac{\nabla^2A}{A} ,
\qquad
m\frac{\partial A}{\partial t} + \nabla S\cdot\nabla A + \frac A2\nabla^2S = 0 ,
$$

and with $\rho = A^2$ and $\mathbf{J} = A^2\nabla S/m = \rho\mathbf{v}$, where $\mathbf{v} = \nabla S/m$, the second of these is (7). (The italicized claim is :cite[Hassani's]{work=hassani-2013 loc="§14.8.1, after Eq. (14.50), p. 452"}, who calls the pair "completely equivalent" to the original equation, and we report it as he makes it. It should be read on a region where $\Psi$ has no zero: at a node $A = 0$, so the phase $S$ is undefined there and the first equation divides by $A$; and in any case the polar form fixes $S$ only modulo $2\pi\hbar$.) His Proposition 14.8.2 then reads the first equation in the limit $\hbar\to0$: the right side disappears, $S$ satisfies the classical Hamilton–Jacobi equation, and the pair describes a fluid of non-interacting classical particles of mass $m$ in the potential $V$, with density $\rho$ and current $\mathbf{J}$.
:::

:::idea{provenance=original}
Equation (7) is Green's second identity in disguise. Multiply (1) by $\overline\Psi$, multiply the conjugate equation by $\Psi$, and subtract: the potential term cancels, because $V$ is real, and what is left is $i\hbar\,\partial_t\lvert\Psi\rvert^2$ on one side and $-\frac{\hbar^2}{2m}(\overline\Psi\nabla^2\Psi - \Psi\nabla^2\overline\Psi)$ on the other. The bracket is exactly the integrand of Green's second identity, and the product rule turns it into the divergence of $\overline\Psi\nabla\Psi - \Psi\nabla\overline\Psi$. So the cancellation of $V$ is where reality of the potential is used, and the identity $\overline\Psi\nabla^2\Psi - \Psi\nabla^2\overline\Psi = \nabla\cdot(\overline\Psi\nabla\Psi - \Psi\nabla\overline\Psi)$ is where the second-order operator becomes a divergence. A complex potential — an absorbing medium, or a decaying state — breaks the first step and probability is then not conserved, which is exactly what one wants it to mean.
:::

:::proof{provenance=adapted src="hassani-2013:§14.8.1, pp. 452–453"}
**Step 1 (two equations).** Write (1) as

$$
i\hbar\,\partial_t\Psi = -\frac{\hbar^2}{2m}\nabla^2\Psi + V\Psi ,
$$

and take complex conjugates, using $\overline V = V$:

$$
-i\hbar\,\partial_t\overline\Psi = -\frac{\hbar^2}{2m}\nabla^2\overline\Psi + V\overline\Psi .
$$

**Step 2 (combine).** Multiply the first by $\overline\Psi$ and the second by $\Psi$ and subtract the second from the first. The terms $V\lvert\Psi\rvert^2$ cancel — this is where the reality of $V$ enters — leaving

$$
i\hbar\bigl(\overline\Psi\,\partial_t\Psi + \Psi\,\partial_t\overline\Psi\bigr) = -\frac{\hbar^2}{2m}\bigl(\overline\Psi\nabla^2\Psi - \Psi\nabla^2\overline\Psi\bigr) .
$$

The left bracket is $\partial_t(\overline\Psi\Psi) = \partial_t\rho$.

**Step 3 (make the right side a divergence).** By the product rule for the divergence,

$$
\nabla\cdot\bigl(\overline\Psi\nabla\Psi\bigr) = \nabla\overline\Psi\cdot\nabla\Psi + \overline\Psi\nabla^2\Psi ,
$$

and the same with $\Psi$ and $\overline\Psi$ exchanged. Subtracting, the symmetric first terms cancel:

$$
\overline\Psi\nabla^2\Psi - \Psi\nabla^2\overline\Psi = \nabla\cdot\bigl(\overline\Psi\nabla\Psi - \Psi\nabla\overline\Psi\bigr) .
$$

**Step 4 (assemble).** Substituting into Step 2 and dividing by $i\hbar$,

$$
\partial_t\rho = -\frac{\hbar}{2mi}\nabla\cdot\bigl(\overline\Psi\nabla\Psi - \Psi\nabla\overline\Psi\bigr) = -\nabla\cdot\mathbf{J} ,
$$

which is (7), with $\mathbf{J}$ as in (6). The two expressions for $\mathbf{J}$ in (6) agree because $\Psi\nabla\overline\Psi = \overline{\overline\Psi\nabla\Psi}$, so their difference is $2i\operatorname{Im}(\overline\Psi\nabla\Psi)$.

**Step 5 (global conservation).** Integrating (7) over a fixed region $\Omega$ with piecewise smooth boundary and applying :ref[the divergence theorem]{to=vcalc.divergence-theorem},

$$
\frac{d}{dt}\int_\Omega\rho\,dV = -\int_\Omega\nabla\cdot\mathbf{J}\,dV = -\oint_{\partial\Omega}\mathbf{J}\cdot\hat{\mathbf{n}}\,dS .
$$

Taking $\Omega$ to be a large ball and letting its radius grow, the surface term vanishes provided $\lvert\overline\Psi\nabla\Psi\rvert = o(r^{-2})$, and $\int\rho\,dV$ is constant. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what the mathematical theory adds.**

- *Reality of $V$, in Step 2.* Without it the potential terms do not cancel and (7) acquires a source $\frac{2}{\hbar}\operatorname{Im}(V)\rho$: probability leaks away where $\operatorname{Im}V < 0$. Optical-potential models of nuclear reactions use precisely this to represent absorption.
- *Reality of the separation constant $E$, in Step 2 of the separation proof.* The constancy of $\lvert\Psi\rvert^2$ for a separable solution is a consequence of self-adjointness and not of the differential equation, and (3) on its own does not deliver it. Take $V\equiv0$ in one dimension and $E = i\varepsilon$ with $\varepsilon>0$ real. Then $\psi = e^{\alpha x}$ with $\alpha^2 = -2mi\varepsilon/\hbar^2$, that is $\alpha = e^{-i\pi/4}\sqrt{2m\varepsilon}/\hbar$, solves (3), and
  $$
  \Psi = e^{\alpha x}e^{-iEt/\hbar} = e^{\alpha x}e^{\varepsilon t/\hbar}
  $$
  solves (1) with density $\lvert\Psi\rvert^2 = e^{2(\operatorname{Re}\alpha)x}e^{2\varepsilon t/\hbar}$, which grows without bound in $t$. It is a separable solution and it is not stationary. What excludes it is not the equation but the normalization (2): $\operatorname{Re}\alpha = \sqrt{m\varepsilon/\hbar^2}>0$, so $\psi\notin L^2(\mathbb{R})$ and $\psi$ is not an eigenfunction of the self-adjoint $\hat H$ at all. Reed and Simon make this the first of their three mathematical problems: physical reasoning gives a formal expression for $\hat H$ with no domain attached; one must find a domain on which it is essentially self-adjoint, and failing that, survey its self-adjoint extensions and decide which one is to be the observable. Their second problem is the spectral analysis of $\hat H$ — for them its point spectrum is the collection of stationary states, and a system reacts to an outside stimulus by moving between two of them, radiating at a frequency set by the gap between the two energies. Their third is scattering theory, the behaviour as $t\to\infty$.
- *Normalizability as the quantization condition.* Equation (3) is a differential equation with a solution for every $E$; what rules out most $E$ is the demand that the solution be in $L^2$, or satisfy a boundary condition. Kreyszig makes the criterion explicit — a solution counts as physically meaningful only if it stays bounded everywhere and dies away at large distance — and observes that, once a potential field is fixed, (3) possesses such solutions for certain values of $E$ and no others. The three examples below show the three outcomes: a continuous spectrum with no normalizable eigenfunctions at all (free particle), a discrete spectrum from a boundary condition (infinite well), and a discrete spectrum from decay at infinity (oscillator).
- *Completeness, in Step 3 of the separation proof.* Formula (5) presumes that the eigenfunctions span the space of initial data. For the well and the oscillator this is the completeness of a Fourier sine series and of the Hermite functions respectively; for a potential with both bound and scattering states, the sum must be supplemented by an integral over the continuous spectrum, and (5) as written is incomplete.
- *The separation of angular variables survives any central potential.* Riley, Hobson and Bence's general remark applies verbatim to (3): if $V = V(r)$, then $\theta$ and $\varphi$ enter only through $\nabla^2$, so the angular factors are spherical harmonics $Y_\ell^m$ and only the radial equation feels the potential. That is why hydrogen, the three-dimensional oscillator and a free particle share their angular wavefunctions, and why the orbital labels $s,p,d,f$ mean the same thing in every atom.
- *What the time-dependent equation is not.* It is not a wave equation: it is first order in time, so one initial condition determines the evolution, not two, and there is no finite propagation speed. It is not the heat equation either, despite the shape, because the factor $i$ makes the evolution unitary rather than dissipative: $\lvert c_n\rvert$ is constant in (5), where a heat equation would have $e^{-E_nt}$ and lose the high modes. Reed and Simon's formulation makes this structural — the dynamics is a one-parameter group of unitary operators, so it is reversible, and the group is generated by $\hat H$.
:::

:::example[The free particle: a continuous spectrum and no normalizable eigenstates]{provenance=original}
Take $V \equiv 0$ in one dimension. Then (3) is $-\frac{\hbar^2}{2m}\psi'' = E\psi$, whose solutions for $E>0$ are $\psi = e^{\pm ikx}$ with

$$
E = \frac{\hbar^2k^2}{2m} ,
$$

and for $E<0$ are the real exponentials $e^{\pm\kappa x}$ with $E = -\hbar^2\kappa^2/2m$.

**No eigenfunction is normalizable.** $\int_{-\infty}^{\infty}\lvert e^{ikx}\rvert^2dx = \int 1\,dx = \infty$, and $e^{\kappa x}$ blows up at one end. So (3) has no solution satisfying (2) for any $E$: the free particle has no bound states, and its spectrum is the continuous half-line $E\ge0$. Kreyszig's criterion — finite and tending to zero at infinity — excludes every $E$, and the resolution is that the physical states are superpositions,

$$
\Psi(x,t) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty \hat f(k)\,e^{i(kx - \hbar k^2t/2m)}\,dk ,
$$

a wave packet, normalizable when $\hat f\in L^2$. The exponent shows the dispersion relation $\omega = \hbar k^2/2m$. Unlike the wave equation, where $\omega = ck$ and every component of the packet travels at the same speed, here the **group** velocity

$$
\frac{d\omega}{dk} = \frac{\hbar k}{m} = \frac{p}{m}
$$

— the classical velocity of a particle of momentum $p = \hbar k$ — depends on $k$, and the packet therefore spreads: its envelope is broadened at the rate set by $\omega'' = \hbar/m \ne 0$, and a packet of initial width $\Delta x_0$ doubles in width after a time of order $m(\Delta x_0)^2/\hbar$. It is $\omega''\ne0$ that does this and not the $k$-dependence of the phase velocity $\omega/k = \hbar k/2m$, which is exactly half the group velocity here: a medium with $\omega = ck + a$ has phase velocity $c + a/k$, varying with $k$, and spreads nothing at all, because every component of its envelope still moves at $c$.

**The current of a plane wave.** For $\Psi = Ae^{i(kx-\omega t)}$, formula (6) gives

$$
J = \frac{\hbar}{m}\operatorname{Im}\bigl(\overline A e^{-ikx}\cdot ikAe^{ikx}\bigr) = \frac{\hbar k}{m}\lvert A\rvert^2 = v\,\rho ,
$$

with $v = \hbar k/m = p/m$ the classical velocity. So the current is density times velocity, exactly as in fluid mechanics, and the sign of $k$ decides the direction of flow. Here $\rho$ and $J$ are both constant, so (7) holds trivially, $0 = 0$; the example is still worth doing because it fixes the interpretation of $\mathbf{J}$ and the normalization of (6).
:::

:::example[The infinite well: energies, a beating superposition, and the current]{provenance=original}
Take $V = 0$ for $0<x<L$ and $V = +\infty$ outside, which forces $\psi(0) = \psi(L) = 0$.

**The stationary states.** Solving (3) as in the previous example and imposing the two boundary conditions gives $\psi = \sin(k x)$ with $kL = n\pi$, so

$$
\psi_n(x) = \sqrt{\frac2L}\,\sin\frac{n\pi x}{L} , \qquad
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2} \qquad (n = 1,2,\dots) ,
$$

the normalization constant coming from $\int_0^L\sin^2(n\pi x/L)dx = L/2$. Here the quantization comes from the boundary condition rather than from decay at infinity, and the eigenfunctions are an orthonormal basis of $L^2(0,L)$ — the Fourier sine basis — so (5) applies with no continuous part.

*Numbers.* For an electron ($m = 9.1093837\times10^{-31}$ kg) in a well of width $L = 1$ nm, with $\hbar = 1.0545718\times10^{-34}$ J s,

$$
E_1 = \frac{\pi^2\hbar^2}{2mL^2} = 6.024667\times10^{-20}\ \mathrm J = 0.376030\ \mathrm{eV} ,
$$

and $E_n = n^2E_1$, so the first gap is $E_2 - E_1 = 3E_1 = 1.128090$ eV. A photon of that energy has wavelength $hc/(E_2-E_1) = (1239.842\ \mathrm{eV\,nm})/(1.128090\ \mathrm{eV}) = 1099.06$ nm, which is the near infrared, not the visible. The gap falls as $L^{-2}$, so a *narrower* well is needed to reach visible light: the band from $1.77$ eV ($700$ nm) to $3.10$ eV ($400$ nm) corresponds to $L$ between $0.798$ nm and $0.603$ nm. That $L^{-2}$ dependence of the level spacing on size is the mechanism behind the colour of a quantum dot, which is set by its diameter — though a real dot is a well in a semiconductor, so one must add the bulk band gap to the confinement energy and use the carrier's effective mass in place of $m$.

**A superposition, and its beat.** Take the normalized initial state $f = \frac{1}{\sqrt2}(\psi_1+\psi_2)$, so $c_1 = c_2 = 1/\sqrt2$ in (5):

$$
\Psi(x,t) = \frac{1}{\sqrt2}\Bigl[\psi_1(x)e^{-iE_1t/\hbar} + \psi_2(x)e^{-iE_2t/\hbar}\Bigr] .
$$

Its density is $\rho = \tfrac12\bigl[\psi_1^2+\psi_2^2 + 2\psi_1\psi_2\cos\omega_{21}t\bigr]$ with

$$
\omega_{21} = \frac{E_2-E_1}{\hbar} = \frac{3\pi^2\hbar}{2mL^2} = 1.713871\times10^{15}\ \mathrm{s^{-1}} ,
$$

a period of $2\pi/\omega_{21} = 3.666078$ fs for the electron above. The mean position oscillates: since $\int_0^L x\psi_n^2dx = L/2$ for every $n$ and

$$
\int_0^L x\,\psi_1\psi_2\,dx = 2L\int_0^1 u\sin\pi u\sin2\pi u\;du = 2L\cdot\left(-\frac{8}{9\pi^2}\right) = -\frac{16L}{9\pi^2} ,
$$

(using $\sin\pi u\sin2\pi u = \tfrac12[\cos\pi u - \cos3\pi u]$ and $\int_0^1u\cos a u\,du = (\cos a - 1)/a^2 + (\sin a)/a$), we get

$$
\langle x\rangle(t) = \frac L2 - \frac{16L}{9\pi^2}\cos\omega_{21}t = \frac L2 - 0.1801265\,L\cos\omega_{21}t .
$$

The particle sloshes from side to side with amplitude $0.18L$ — a classical-looking motion built from two stationary states, and the clearest demonstration that a superposition of different energies is not stationary.

**The current, and an exact check of the continuity equation.** The probability of being in the left half is

$$
P_{\text{left}}(t) = \int_0^{L/2}\rho\,dx = \frac12\left[\frac12 + \frac12 + 2\cdot\frac{4}{3\pi}\cos\omega_{21}t\right] = \frac12 + \frac{4}{3\pi}\cos\omega_{21}t ,
$$

using $\int_0^{L/2}\psi_n^2dx = \tfrac12$ and $\int_0^{L/2}\psi_1\psi_2\,dx = 2\int_0^{1/2}\sin\pi u\sin2\pi u\,du = \frac{4}{3\pi} = 0.4244132$. Differentiating,

$$
\dot P_{\text{left}} = -\frac{4\omega_{21}}{3\pi}\sin\omega_{21}t = -\frac{4}{3\pi}\cdot\frac{3\pi^2\hbar}{2mL^2}\sin\omega_{21}t = -\frac{2\pi\hbar}{mL^2}\sin\omega_{21}t .
$$

Now compute the current at the midpoint from (6). At $x = L/2$ we have $\psi_1 = \sqrt{2/L}$, $\psi_2 = 0$, $\psi_1' = 0$ and $\psi_2' = -\frac{2\pi}{L}\sqrt{2/L}$, so

$$
\overline\Psi\,\partial_x\Psi\Big\vert_{x=L/2} = \frac12\cdot\sqrt{\tfrac2L}\,e^{iE_1t/\hbar}\cdot\left(-\frac{2\pi}{L}\sqrt{\tfrac2L}\right)e^{-iE_2t/\hbar} = -\frac{2\pi}{L^2}\,e^{-i\omega_{21}t} ,
$$

whose imaginary part is $\frac{2\pi}{L^2}\sin\omega_{21}t$. Hence

$$
J\!\left(\tfrac L2,t\right) = \frac{\hbar}{m}\cdot\frac{2\pi}{L^2}\sin\omega_{21}t = \frac{2\pi\hbar}{mL^2}\sin\omega_{21}t = -\dot P_{\text{left}} ,
$$

which is exactly $\frac{d}{dt}\int_0^{L/2}\rho\,dx = -J(L/2,t)$, the one-dimensional case of Step 5 — the boundary $x=0$ contributing nothing because $\psi_n(0) = 0$. The two sides agree identically in $t$, not just numerically, so this is a complete check of (6) and (7) on a nontrivial solution. Note also that a *single* stationary state here has $J \equiv 0$, because $\psi_n$ is real and $\operatorname{Im}(\psi_n\psi_n') = 0$: nothing flows in a standing wave.
:::

:::example[The harmonic oscillator: zero-point energy from the Hermite equation]{provenance=adapted src="kreyszig-1978:§11.3, Example 11.3-1, Eqs. (7)–(12), pp. 585–588; kreyszig-1978:§11.3, Prob. 5, p. 588; kreyszig-1978:§11.3, Probs. 9–10, pp. 589–590"}
Take $V = \tfrac12 m\omega_0^2x^2$ in one dimension, Kreyszig's Example 11.3-1 in our notation. Equation (3) is

$$
-\frac{\hbar^2}{2m}\psi'' + \tfrac12 m\omega_0^2x^2\psi = E\psi . \tag{8}
$$

**Non-dimensionalize.** Set $b = \sqrt{\hbar/m\omega_0}$ (Kreyszig's $b^2 = h/2\pi m\omega_0$, the same quantity), $s = x/b$ and $\Lambda = 2E/\hbar\omega_0$ (his $\Lambda = 4\pi E/\omega_0h$). Multiplying (8) by $2/\hbar\omega_0$ turns it into

$$
\frac{d^2\tilde\psi}{ds^2} + \bigl(\Lambda - s^2\bigr)\tilde\psi = 0 . \tag{9}
$$

**Strip the Gaussian.** Substituting $\tilde\psi = v(s)e^{-s^2/2}$ into (9): $\tilde\psi'' = (v'' - 2sv' + (s^2-1)v)e^{-s^2/2}$, so (9) becomes

$$
v'' - 2sv' + (\Lambda-1)v = 0 ,
$$

which is Hermite's equation. It has a polynomial solution — and therefore $\tilde\psi$ decays at infinity — exactly when

$$
\Lambda - 1 = 2n , \quad\text{i.e.}\quad \Lambda = 2n+1, \qquad n = 0,1,2,\dots ,
$$

in which case $v = H_n(s)$, the Hermite polynomial (:ref[Hermite polynomials]{to=spec.hermite-polynomials}).

**No other $\Lambda$ is admissible.** The displayed condition is what produces a polynomial; what makes these the *only* energies is that every other solution is thrown out by the normalization (2), and that needs one further fact. Substituting $v = \sum_k a_ks^k$ into Hermite's equation gives the two-term recursion

$$
(k+2)(k+1)\,a_{k+2} = (2k+1-\Lambda)\,a_k ,
$$

which couples $a_k$ to $a_{k+2}$ and so splits the solution space into an even and an odd series. A series terminates only when $\Lambda = 2k+1$ for some $k$ of its own parity. If it does not terminate, then $a_{k+2}/a_k \to 2/k$ for large $k$, and $2/k$ is also the ratio of successive non-zero coefficients of $e^{s^2} = \sum_j s^{2j}/j!$ (there $b_{k+2}/b_k = 1/(j+1)$ with $k = 2j$). A series whose tail has the coefficient ratio of $e^{s^2}$ grows like $s^pe^{s^2}$ for some power $p$, so $\tilde\psi = ve^{-s^2/2}$ grows like $s^pe^{s^2/2}$: it is not in $L^2(\mathbb{R})$ and fails Kreyszig's criterion of staying finite and dying away at infinity. Hence an admissible $\Lambda$ must terminate one of the two series, which is $\Lambda = 2n+1$; and at such a $\Lambda$ the series of the other parity still does not terminate, so the admissible solution is the polynomial one alone, up to a constant multiple. Kreyszig sets this growth estimate as his Problem 5, p. 588, rather than proving it; we need it, because the quantization claim rests on it.

Translating back, $E = \tfrac12\hbar\omega_0\Lambda$ gives

$$
E_n = \left(n+\tfrac12\right)\hbar\omega_0 = \left(n+\tfrac12\right)h\nu , \qquad \nu = \frac{\omega_0}{2\pi} ,
$$

which is Kreyszig's formula (12). The levels are equally spaced, and the lowest is **not** zero: the **zero-point energy** is $\tfrac12 h\nu$. Kreyszig remarks that this half-integral offset is characteristic of the oscillator and was not what Planck assumed in 1900, and he calls $n$ the principal quantum number of the oscillator.

**Check the ground state exactly.** For $n = 0$, $H_0 = 1$, so $\psi_0 = C e^{-x^2/2b^2}$. Then

$$
\psi_0'' = \left(\frac{x^2}{b^4} - \frac{1}{b^2}\right)\psi_0 ,
$$

and with $b^2 = \hbar/m\omega_0$,

$$
-\frac{\hbar^2}{2m}\psi_0'' + \tfrac12m\omega_0^2x^2\psi_0
= \left(-\tfrac12 m\omega_0^2x^2 + \tfrac12\hbar\omega_0\right)\psi_0 + \tfrac12m\omega_0^2x^2\psi_0
= \tfrac12\hbar\omega_0\,\psi_0 ,
$$

so $E_0 = \tfrac12\hbar\omega_0$, confirming the formula at $n = 0$ with no appeal to Hermite's equation. Normalizing, $\int e^{-x^2/b^2}dx = b\sqrt\pi$, so $C = (\pi b^2)^{-1/4}$ and

$$
\psi_0(x) = \frac{1}{(\pi b^2)^{1/4}}e^{-x^2/2b^2} .
$$

*A number.* For a diatomic vibration with $\nu = 10^{14}$ Hz, the spacing is $\hbar\omega_0 = h\nu = 6.62607\times10^{-20}$ J $= 0.413567$ eV, and the zero-point energy is half of that, $0.206783$ eV — comparable with a chemical bond energy, which is why zero-point energy matters in reaction rates and in isotope effects.

**Three dimensions.** Kreyszig's Problems 9 and 10 take $V = \tfrac12 m(\omega_1^2x_1^2+\omega_2^2x_2^2+\omega_3^2x_3^2)$ and separate (3) in Cartesian coordinates, giving $E = \sum_j(n_j+\tfrac12)\hbar\omega_j$ with a product of Hermite functions. For the isotropic case $\omega_1=\omega_2=\omega_3=\omega_0$ he notes that the ground level $E_0 = \tfrac32 h\nu$ is non-degenerate while every higher level is degenerate: $E = (N+\tfrac32)\hbar\omega_0$ is attained by every triple with $n_1+n_2+n_3 = N$, of which there are $\binom{N+2}{2}$. So the multiplicities of $N = 0,1,2,3,4$ are $1, 3, 6, 10, 15$.
:::

:::application{provenance=original}
**Spectroscopy, which is where the energies are read off.** Reed and Simon state the connection plainly: what makes the point spectrum of $\hat H$ worth studying is that its eigenfunctions are the stationary states, between which a disturbed system typically jumps, radiating at a frequency fixed by the energy gap. Every line in an atomic or molecular spectrum is a difference $E_n - E_{n'}$, so the eigenvalue problem (3) is directly measurable. The equally spaced ladder of the oscillator gives the vibrational bands of a diatomic molecule and, through $\hbar\omega_0 = \hbar\sqrt{k/\mu}$, measures the bond stiffness $k$; the $n^2$ ladder of the well gives the absorption edge of a quantum dot, which is why the colour of a cadmium-selenide nanocrystal is set by its diameter.

**Hydrogen and the periodic table.** Riley, Hobson and Bence's hydrogen equation is (3) with $V = -e^2/4\pi\varepsilon_0r$. Because the potential is central, the general point of step 5 in :ref[separation of variables]{to=pde.separation-of-variables} applies: the angular factors are the spherical harmonics $Y_\ell^m$, so the quantum numbers $\ell$ and $m$ and the $2\ell+1$-fold degeneracy are fixed by the Laplacian alone and are the same for every central potential. Only the radial equation knows about the Coulomb tail, and solving it gives the Laguerre functions and the energies $E_n = -13.6\ \mathrm{eV}/n^2$. Everything in the shell structure of the elements that does not depend on the particular potential — the $s,p,d,f$ labels, the counts $2,6,10,14$ — comes from the separation, not from the physics of the Coulomb force.

**Tunnelling, and the sign of $E-V$.** Read Kreyszig's derivation backwards: the local wavenumber is $k(x)^2 = 2m(E-V(x))/\hbar^2$, so (3) is a Helmholtz equation where $E>V$ and a *modified* Helmholtz equation where $E<V$. In the first region the solution oscillates; in the second it grows or decays exponentially. A particle therefore has a nonzero amplitude inside a barrier it could not classically enter, and the transmission through a barrier of width $d$ goes like $e^{-2\kappa d}$ with $\hbar\kappa = \sqrt{2m(V-E)}$. That exponential is the operating principle of the scanning tunnelling microscope — with a work function of about $4$ eV, $\kappa = 1.02\times10^{10}\ \mathrm{m^{-1}}$ and a change of one angstrom in the tip height changes the current by about a factor of ten, since $\ln 10/2\kappa = 1.12$ Å — and of the flash memory cell.

**The classical limit, and semiclassical computation.** Hassani's Proposition 14.8.2 is the precise statement of the correspondence principle in this setting: substituting $\Psi = Ae^{iS/\hbar}$ turns (1) into a pair of real equations, one of which is the continuity equation (7) for $\rho = A^2$ and $\mathbf{J} = \rho\nabla S/m$, and the other of which becomes the Hamilton–Jacobi equation for $S$ when the term $\frac{\hbar^2}{2m}\nabla^2A/A$ is dropped. So as $\hbar\to0$ a wave function behaves like a fluid of non-interacting classical particles following the characteristics of :ref[the Hamilton–Jacobi equation]{to=var.hamilton-jacobi}, with $\nabla S/m$ as the velocity field. Keeping one order further in $\hbar$ gives the WKB approximation, and matching WKB solutions across a turning point produces the Bohr–Sommerfeld condition $\int_a^b\sqrt{2m(E-V)}\,dx = (n+\tfrac12)\pi\hbar$, which Hassani derives from the connection formulas and which reproduces the oscillator's $(n+\tfrac12)$ exactly.

**Numerical quantum mechanics.** Formula (5) is the design of a spectral time-stepper: expand the initial state in eigenfunctions, multiply each coefficient by the unit-modulus factor $e^{-iE_nt/\hbar}$, and sum. Because the factors have modulus one, the scheme is unconditionally stable and exactly norm-preserving, which an explicit finite-difference scheme for (1) is not — the standard alternative, the Crank–Nicolson or Cayley scheme, is chosen precisely because its propagator $(1 - i\hat H\Delta t/2\hbar)/(1+i\hat H\Delta t/2\hbar)$ is unitary and so inherits the conservation law (7). The split-operator method does the same with the kinetic part diagonalized by a fast Fourier transform (:ref[the discrete Fourier transform]{to=fourier.dft-fft}) and the potential part diagonal in position, alternating between the two.
:::
