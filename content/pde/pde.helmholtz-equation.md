---
id: pde.helmholtz-equation
title: The Helmholtz equation
kind: method
level: core
summary: Reduces the wave and diffusion equations to the Helmholtz equation by separating a time-harmonic factor, collects its elementary solutions - plane waves, cylindrical waves and the spherical waves built from spherical Bessel and Hankel functions - and states and proves the Sommerfeld radiation condition that picks out the outgoing solution and forces a field that is source-free on all of space to vanish.
prereqs: [pde.separation-of-variables, spec.spherical-bessel, spec.bessel-second-kind-hankel, vcalc.green-identities, pde.laplace-fundamental-solution]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§6.6, Problem 16, p. 347: the separation $u = e^{-i\\sigma t}w$ of the wave equation leading to $-\\Delta w = \\lambda w$ in $\\mathbb{R}^n$ with $\\lambda = \\sigma^2$; part (a), that $w = e^{i\\sigma\\omega\\cdot x}$ solves it when $\\lvert\\omega\\rvert = 1$ and gives the travelling wave $u = e^{i\\sigma(\\omega\\cdot x - t)}$; part (b), that $\\Phi = e^{i\\sigma\\lvert x\\rvert}/4\\pi\\lvert x\\rvert$ satisfies $-\\Delta\\Phi = \\lambda\\Phi + \\delta_0$ in $\\mathbb{R}^3$; part (c), the Sommerfeld radiation condition $\\lim_{r\\to\\infty}r(w_r - i\\sigma w) = 0$ with $w_r = Dw\\cdot x/\\lvert x\\rvert$, and the assertion that the plane wave of (a) fails it while $\\Phi$ satisfies it; §6.6, Problem 17, p. 348: that a complex-valued solution of $-\\Delta w = \\sigma^2w$ in $\\mathbb{R}^3$ satisfying the radiation condition vanishes identically, with the hints — the identity $0 = \\int_{B(0,R)}(\\bar w\\Delta w - w\\Delta\\bar w) = \\int_{\\partial B(0,R)}(\\bar w w_r - w\\bar w_r)$, the consequence $\\int_{\\partial B(0,R)}(\\lvert w_r\\rvert^2 + \\sigma^2\\lvert w\\rvert^2)\\,dS = \\int_{\\partial B(0,R)}\\lvert w_r - i\\sigma w\\rvert^2\\,dS \\to 0$, and the representation $w(x_0) = \\int_{\\partial B(0,R)}(\\Phi w_r - w\\Phi_r)\\,dS$; the reference to Colton for more on the condition, p. 348"
    pages: "347-348"
    role: the statement of the radiation condition in the form used here, the two test cases, and the uniqueness theorem with the route of its proof
  - work: rhb-2006
    loc: "§21.3.2, pp. 737–741: the separation of space and time in the wave equation $\\nabla^2u = c^{-2}u_{tt}$, Eq. (21.53), leaving $\\nabla^2F + k^2F = 0$ and $T'' + k^2c^2T = 0$ with $T = Ae^{i\\omega t}+Be^{-i\\omega t}$, $\\omega = kc$ (Eq. (21.54)); the same for the diffusion equation $\\kappa\\nabla^2u = u_t$, giving $T = Ae^{-k^2\\kappa t}$; the naming of $\\nabla^2F+k^2F=0$ as Helmholtz's equation and the remark that it reduces to Laplace's when $k=0$; Helmholtz in plane polars with solution $J_m(k\\rho),Y_m(k\\rho)$ and the rejection of $Y_m$ at the origin; in cylindrical polars, the separated solution with radial argument $\\sqrt{k^2-\\alpha^2}\\,\\rho$; in spherical polars, the radial equation (21.56) $r^2R''+2rR'+[k^2r^2-\\ell(\\ell+1)]R = 0$ reduced to Bessel's equation of order $\\ell+\\frac12$ by $R = r^{-1/2}S$, the separated solution (21.57), and the observation that a separated solution has a definite frequency $\\omega = kc$ but no definite wavelength because the zeros of $j_\\ell(kr)$ are unequally spaced except for $\\ell = 0$"
    pages: "737-741"
    role: the time-harmonic reduction with its two time factors, and the three coordinate systems with the special functions they give
  - work: hassani-2013
    loc: "§19.7.2, pp. 593–594: the Helmholtz equation (19.38) as the case of constant $f(r)$ in the master equation, arising from the diffusion, wave and free-particle Schrödinger equations once time is separated; the radial equation (19.39); the definition (19.40) of the spherical Bessel functions $z_\\ell(x) = \\sqrt{\\pi/2}\\,Z_{\\ell+1/2}(x)/\\sqrt{x}$; the general radial solution (19.41) $R_\\ell = Aj_\\ell(kr)+By_\\ell(kr)$ with $B = 0$ when the origin is included, and the resulting solution (19.42) $\\psi_k = \\sum_{\\ell m}A_{\\ell m}j_\\ell(kr)Y_\\ell^m$; §19.7.4, p. 594, that $e^{i\\mathbf{k}\\cdot\\mathbf{r}}$ solves the Helmholtz equation when $\\mathbf{k}\\cdot\\mathbf{k} = k^2$ and may therefore be expanded as in (19.42)"
    pages: "593-594"
    role: the normalization relating spherical Bessel functions to Bessel functions of half-integer order, the general interior solution, and the plane wave as a solution
  - work: arfken-2013
    loc: "§10.2, pp. 462–463: Table 10.1 of fundamental Green's functions for $\\nabla^2$, $\\nabla^2+k^2$ and $\\nabla^2-k^2$ in one, two and three dimensions, with the boundary conditions stated in its footnote — outgoing wave for Helmholtz, decay at infinity for modified Helmholtz and for the three-dimensional Laplace equation; the entries $-\\frac{i}{2k}e^{ik\\lvert x_1-x_2\\rvert}$, $-\\frac{i}{4}H_0^{(1)}(k\\lvert\\boldsymbol\\rho_1-\\boldsymbol\\rho_2\\rvert)$ and $-e^{ik\\lvert\\mathbf{r}_1-\\mathbf{r}_2\\rvert}/4\\pi\\lvert\\mathbf{r}_1-\\mathbf{r}_2\\rvert$; the statement that an outgoing wave means asymptotic dependence $\\exp(+ikr)$, and the remark on the sign of $G$ depending on the sign convention for the operator; the remark on p. 462, made there about the two- and three-dimensional Laplace Green's functions $\\frac{1}{2\\pi}\\ln\\lvert\\boldsymbol\\rho_1-\\boldsymbol\\rho_2\\rvert$ and $-1/4\\pi\\lvert\\mathbf{r}_1-\\mathbf{r}_2\\rvert$, that there is a real difference between two-dimensional and three-dimensional physics"
    pages: "462-463"
    role: the outgoing-wave boundary condition as the physicists state it, the modified Helmholtz equation, and the one- and two-dimensional analogues in which the Hankel function replaces the exponential
---

:::definition[Time-harmonic reduction and the Helmholtz equation]{provenance=adapted src="rhb-2006:§21.3.2, Eqs. (21.52)–(21.54), p. 737; hassani-2013:§19.7.2, Eq. (19.38), p. 593; evans-2010:§6.6, Problem 16, p. 347"}
A field oscillating at a single angular frequency $\omega$ is **time-harmonic**: it has the form

$$
u(\mathbf{x},t) = e^{-i\omega t}\,w(\mathbf{x}) , \tag{1}
$$

the physical field being $\operatorname{Re}u$. Substituting (1) into the wave equation $\nabla^2u = c^{-2}u_{tt}$ gives

$$
\nabla^2 w + k^2 w = 0 , \qquad k = \frac{\omega}{c} , \tag{2}
$$

the **Helmholtz equation**, with $k$ the **wavenumber**. Equation (2) reduces to Laplace's equation when $k = 0$. We also meet the **modified Helmholtz equation** $\nabla^2 w - k^2w = 0$, which is (2) with $k^2$ replaced by $-k^2$: its radial solutions grow or decay exponentially instead of oscillating, and its only bounded solution on all of $\mathbb{R}^n$ is $w \equiv 0$. (It does have solutions that oscillate in some directions while decaying in others — $\cos(ax)e^{-\sqrt{k^2+a^2}\,z}$ is one — and those evanescent fields are what the waveguide and tunnelling paragraphs below are about; what it has not got is a bounded oscillation filling space.)

**Sign and time conventions, which differ between our sources.** Riley, Hobson and Bence separate time without choosing a sign, writing $T(t) = Ae^{i\omega t}+Be^{-i\omega t}$ with $\omega = kc$, and get (2) either way, since only $\omega^2$ enters. Evans fixes $u = e^{-i\sigma t}w$ and writes the equation as $-\Delta w = \lambda w$ with $\lambda = \sigma^2$, so his $\sigma$ is our $k$ in units with $c = 1$. Arfken fixes the convention at the other end, by declaring an **outgoing wave** to be one whose asymptotic radial dependence is $\exp(+ikr)$. **We use $e^{-i\omega t}$ throughout**, which makes $e^{i(kr-\omega t)}$ travel outwards and so agrees with Arfken: with the opposite time convention $e^{+i\omega t}$, the outgoing solution would be $e^{-ikr}$ instead, and every sign in the radiation condition below would flip.

Hassani records why (2) is the equation to study: separating time out of the diffusion equation, the wave equation, or the Schrödinger equation of a free particle leaves (2) in each case, the only difference being the time factor one has discarded. For the wave equation it is $e^{\pm i\omega t}$ with $\omega = kc$; for the diffusion equation $\kappa\nabla^2u = u_t$ it is the decaying $e^{-k^2\kappa t}$, so that there $k^2$ is a decay rate rather than a frequency.
:::

:::method[Solving a time-harmonic problem]{provenance=adapted src="rhb-2006:§21.3.2, pp. 737–741; arfken-2013:§10.2, Table 10.1 and its footnote, p. 463; evans-2010:§6.6, Problem 16(c), p. 347"}
1. **Strip the time.** Write the field as $e^{-i\omega t}w(\mathbf{x})$ and reduce the equation to (2) with $k = \omega/c$. Everything from here on is a problem for a complex-valued function of position; the physical field is recovered at the end as $\operatorname{Re}\bigl(e^{-i\omega t}w\bigr)$, and amplitudes and phases are the modulus and argument of $w$.
2. **Choose coordinates and separate.** Apply the recipe of :ref[separation of variables]{to=pde.separation-of-variables}. The special functions are those of the catalogue there, now with $k \ne 0$: $J_m(k\rho), Y_m(k\rho)$ in plane polars, $J_m(\sqrt{k^2-\alpha^2}\rho)$ in cylindrical polars, and the spherical Bessel functions $j_\ell(kr), y_\ell(kr)$ in spherical polars.
3. **Interior problem: discard what is singular, then quantize.** If the region contains the origin, drop $Y_m$ and $y_\ell$. A homogeneous boundary condition on a closed surface then admits a solution only for special values of $k$ — the eigenvalues — and the frequencies $\omega = ck$ are the resonances of the cavity.
4. **Exterior problem: impose a condition at infinity.** The Helmholtz equation in an unbounded region does not have enough boundary data to be determined, because its solutions oscillate rather than decay and the usual "vanishes at infinity" is too weak to rule anything out. The missing condition is the **Sommerfeld radiation condition**, which in Evans's form reads
   $$
   \lim_{r\to\infty} r\left(\frac{\partial w}{\partial r} - ikw\right) = 0 \qquad (n = 3), \tag{3}
   $$
   and which Arfken states in the equivalent working form that the asymptotic radial dependence must be $e^{+ikr}$: energy flows outwards from the source and none comes in from infinity. Statement (3) is what makes the exterior problem well posed; see the uniqueness theorem below.
5. **For the modified Helmholtz equation, use decay instead.** With $\nabla^2 - k^2$ the radial solutions are exponentially growing or decaying rather than oscillatory, and the right condition at infinity is simply that $w \to 0$ — Arfken's choice in his Table 10.1, where the three-dimensional modified-Helmholtz Green's function is $-e^{-k\lvert\mathbf{r}_1-\mathbf{r}_2\rvert}/4\pi\lvert\mathbf{r}_1-\mathbf{r}_2\rvert$, the screened potential.
6. **Build the solution from the elementary waves.** Plane waves $e^{i\mathbf{k}\cdot\mathbf{x}}$ are the natural basis for a problem with planar symmetry, outgoing spherical waves $h_\ell^{(1)}(kr)Y_\ell^m$ for a radiating or scattering problem, and $j_\ell(kr)Y_\ell^m$ for the field inside a sphere. The plane-wave expansion of :ref[spherical Bessel functions]{to=spec.spherical-bessel} converts between the first two.
:::

:::statement[The elementary solutions]{provenance=adapted src="evans-2010:§6.6, Problem 16(a),(b), p. 347; hassani-2013:§19.7.2, Eqs. (19.39)–(19.42) and §19.7.4, pp. 593–594; rhb-2006:§21.3.2, Eqs. (21.55)–(21.57), pp. 738–741; arfken-2013:§10.2, Table 10.1, p. 463"}
1. **Plane waves.** For a constant vector $\mathbf{k}$, the function $w(\mathbf{x}) = e^{i\mathbf{k}\cdot\mathbf{x}}$ solves (2) if and only if $\mathbf{k}\cdot\mathbf{k} = k^2$. Writing $\mathbf{k} = k\boldsymbol\omega$ with $\lvert\boldsymbol\omega\rvert = 1$, the corresponding time-harmonic field is the travelling wave $u = e^{ik(\boldsymbol\omega\cdot\mathbf{x} - ct)}$, moving with speed $c$ in the direction $\boldsymbol\omega$.
2. **Spherical waves.** In $\mathbb{R}^3$ the functions

   $$
   w^\pm(\mathbf{x}) = \frac{e^{\pm ik r}}{r}, \qquad r = \lvert\mathbf{x}\rvert ,
   $$

   solve (2) at every point with $r>0$; $w^+$ is outgoing and $w^-$ incoming. More precisely, Evans records that

   $$
   \Phi(\mathbf{x}) = \frac{e^{ikr}}{4\pi r} \quad\text{satisfies}\quad -\nabla^2\Phi = k^2\Phi + \delta_0 \ \text{ in } \mathbb{R}^3 ,
   $$

   so $\Phi$ is the outgoing fundamental solution of the Helmholtz operator: it reduces to the fundamental solution $1/4\pi r$ of :ref[Laplace's equation]{to=pde.laplace-fundamental-solution} as $k\to0$. Arfken's Table 10.1 lists the same object as $-e^{ik\lvert\mathbf{r}_1-\mathbf{r}_2\rvert}/4\pi\lvert\mathbf{r}_1-\mathbf{r}_2\rvert$, the sign difference being his convention $\nabla^2G + k^2G = \delta$ against Evans's $-\nabla^2\Phi - k^2\Phi = \delta$.
3. **The separated solutions in spherical polars.** The radial equation is

   $$
   R'' + \frac2rR' + \left[k^2 - \frac{\ell(\ell+1)}{r^2}\right]R = 0 ,
   $$

   whose solutions are the spherical Bessel functions $R = Aj_\ell(kr) + By_\ell(kr)$, which Hassani builds out of the half-integer-order Bessel functions through the normalization $z_\ell(x) = \sqrt{\pi/2}\;Z_{\ell+1/2}(x)/\sqrt x$. So

   $$
   w = \sum_{\ell=0}^\infty\sum_{m=-\ell}^{\ell}\bigl[A_{\ell m}j_\ell(kr) + B_{\ell m}y_\ell(kr)\bigr]Y_\ell^m(\theta,\varphi) ,
   $$

   with every $B_{\ell m} = 0$ if the region contains the origin, since $y_\ell$ is singular there. The outgoing combination is the spherical Hankel function $h_\ell^{(1)} = j_\ell + iy_\ell$, and $h_0^{(1)}(kr) = -ie^{ikr}/kr$ recovers part 2.
4. **Cylindrical waves.** In cylindrical polars $(\rho,\varphi,z)$ the separated solutions are

   $$
   w = Z_m(\kappa\rho)\,e^{im\varphi}\,e^{i\alpha z} , \qquad \kappa = \sqrt{k^2-\alpha^2} , \qquad m \in \mathbb{Z} ,
   $$

   where $Z_m$ stands, as in Hassani's normalization above, for either of $J_m$ and $Y_m$ — only $J_m$ if the region contains the axis, since $Y_m$ is singular there — and $\alpha$ is the separation constant of the $z$ direction. The radial argument $\kappa\rho = \sqrt{k^2-\alpha^2}\,\rho$ is Riley, Hobson and Bence's. The three wavenumbers are tied by $\kappa^2 + \alpha^2 = k^2$, which is the dispersion relation of a waveguide. For $\alpha^2 < k^2$ the factor $Z_m(\kappa\rho)$ oscillates in $\rho$ and the wave propagates along the axis; for $\alpha^2 > k^2$ the argument is imaginary and the radial factor is no longer oscillatory. In the plane, $\alpha = 0$ and the solutions are $J_m(k\rho)e^{im\varphi}$ and $Y_m(k\rho)e^{im\varphi}$.
5. **Lower dimensions.** In two dimensions the role of $e^{ikr}/4\pi r$ is played by $-\tfrac i4 H_0^{(1)}(k\rho)$, with a Hankel function in place of the exponential; in one dimension by $-\tfrac{i}{2k}e^{ik\lvert x\rvert}$. Arfken tabulates all three. He also warns that the step from two dimensions to three is a genuine change and not a change of notation — a remark he makes on the previous page about the *Laplace* Green's functions, where $\frac{1}{2\pi}\ln\lvert\boldsymbol\rho_1-\boldsymbol\rho_2\rvert$ grows at infinity while $-1/4\pi\lvert\mathbf{r}_1-\mathbf{r}_2\rvert$ decays, and which applies just as well to the entries here.
:::

:::idea{provenance=original}
Parts 1 and 2 are two-line verifications, and the only thing worth watching is where each one fails. A plane wave is bounded but does not decay in any direction, so it is a legitimate solution of (2) on all of $\mathbb{R}^3$ with no source anywhere: the Helmholtz equation on all space has a huge supply of global solutions, which is exactly why a condition at infinity is needed to make an exterior problem well posed. A spherical wave does decay, like $1/r$, but it has a singularity at the origin, and the singularity is the source. Part 2 says that the singularity is precisely a unit point source: near $r = 0$ the factor $e^{ikr}$ is $1 + O(r)$, so $\Phi$ looks like the Laplace fundamental solution $1/4\pi r$, whose Laplacian is $-\delta_0$, and the correction accounts for the term $k^2\Phi$.

Part 3 is the separation already carried out in spherical polars, read with $k\ne0$: nothing changes in the angular factors, and the radial factor becomes a Bessel function of half-integer order.
:::

:::proof{provenance=adapted src="evans-2010:§6.6, Problem 16(a),(b), p. 347; hassani-2013:§19.7.4, p. 594"}
**Step 1 (plane waves).** For $w = e^{i\mathbf{k}\cdot\mathbf{x}}$ we have $\partial w/\partial x_j = ik_jw$ and hence $\partial^2w/\partial x_j^2 = -k_j^2w$. Summing over $j$,

$$
\nabla^2 w = -\lvert\mathbf{k}\rvert^2 w ,
$$

so $\nabla^2w + k^2w = (k^2 - \lvert\mathbf{k}\rvert^2)w$, which vanishes identically if and only if $\lvert\mathbf{k}\rvert = k$ (as $w$ is nowhere zero). Writing $\mathbf{k} = k\boldsymbol\omega$ and restoring the time factor, $u = e^{-i\omega t}e^{ik\boldsymbol\omega\cdot\mathbf{x}} = e^{ik(\boldsymbol\omega\cdot\mathbf{x}-ct)}$ using $\omega = kc$, which is constant on the planes $\boldsymbol\omega\cdot\mathbf{x} - ct = \text{const}$ moving with speed $c$.

**Step 2 (spherical waves, away from the origin).** For a radial $w = v(r)$, the Laplacian is $v'' + 2v'/r$ (the case $n = 3$ of the formula in :ref[the fundamental solution]{to=pde.laplace-fundamental-solution}), which can be written $\frac1r(rv)''$. With $v = e^{\pm ikr}/r$ we get $rv = e^{\pm ikr}$ and $(rv)'' = -k^2e^{\pm ikr}$, so

$$
\nabla^2 v = \frac1r\bigl(-k^2e^{\pm ikr}\bigr) = -k^2 v ,
$$

and $\nabla^2v + k^2v = 0$ for $r>0$.

**Step 3 (the source at the origin).** Put $\Phi = e^{ikr}/4\pi r$ and let $\phi$ be a test function. Write $\Phi = \frac{1}{4\pi r} + \Psi$ with

$$
\Psi = \frac{e^{ikr}-1}{4\pi r} ,
$$

which is bounded near the origin, since $e^{ikr}-1 = O(r)$; indeed $\Psi \to ik/4\pi$ as $r\to0$. Then:

- $\frac{1}{4\pi r}$ is the Laplace fundamental solution, so $-\nabla^2\bigl(\frac1{4\pi r}\bigr) = \delta_0$ in the sense of distributions (:ref[the Dirac delta in calculations]{to=vcalc.dirac-delta-basics}).
- By Step 2, $-\nabla^2\Phi = k^2\Phi$ pointwise for $r>0$; subtracting the previous item, $-\nabla^2\Psi = k^2\Phi$ for $r>0$. This also holds in the sense of distributions on all of $\mathbb{R}^3$, with no term supported at $\mathbf{0}$, and the reason is that $\Psi$ is too mild a function to carry one. Indeed, work outside a small ball, where $\Psi$ is smooth: :ref[Green's second identity]{to=vcalc.green-identities} on $\{r>\varepsilon\}$ turns $\int\Psi\nabla^2\phi$ into $\int\phi\nabla^2\Psi$ plus a boundary term on $r=\varepsilon$, giving

  $$
  -\int_{r>\varepsilon}\Psi\,\nabla^2\phi\;dV \;=\; k^2\!\int_{r>\varepsilon}\Phi\,\phi\;dV \;+\; \oint_{r=\varepsilon}\bigl(\Psi\,\phi_r - \phi\,\Psi_r\bigr)dS .
  $$

  Expanding the exponential, $\Psi = \frac{ik}{4\pi} - \frac{k^2r}{8\pi} + O(r^2)$, so $\Psi$ and $\Psi_r$ are both bounded near the origin while the sphere $r = \varepsilon$ has area $4\pi\varepsilon^2$: the boundary term is $O(\varepsilon^2)$ and drops out as $\varepsilon\to0$. Both volume integrals converge, the first because $\Psi$ is bounded and the second because $\lvert\Phi\rvert\le1/4\pi r$ is locally integrable. So $-\nabla^2\Psi = k^2\Phi$ as distributions, and the only singular contribution in $\Phi$ sits in $\frac{1}{4\pi r}$.

Adding the two statements gives $-\nabla^2\Phi = k^2\Phi + \delta_0$ in $\mathbb{R}^3$, which is Evans's part (b).

**Step 4 (the radial equation and the spherical Bessel functions).** This is Step 8 of the proof in :ref[separation of variables]{to=pde.separation-of-variables}: the substitution $R = r^{-1/2}S$ turns the radial equation into Bessel's equation of order $\ell+\tfrac12$ in the variable $kr$. Hassani's normalization $z_\ell(x) = \sqrt{\pi/2}\,Z_{\ell+1/2}(x)/\sqrt x$ is exactly the factor $r^{-1/2}$ together with a constant chosen so that $j_\ell(x)\sim x^\ell/(2\ell+1)!!$ at small $x$; with it, $R = Aj_\ell(kr)+By_\ell(kr)$. $\square$
:::

:::statement[The Sommerfeld radiation condition and uniqueness]{provenance=adapted src="evans-2010:§6.6, Problems 16(c) and 17, pp. 347–348"}
Throughout, $k$ is real and nonzero, $w$ is complex-valued and defined at least outside some ball, and $w_r = \nabla w\cdot\mathbf{x}/\lvert\mathbf{x}\rvert$ is its radial derivative. The **Sommerfeld radiation condition** on $w$ is

$$
\lim_{r\to\infty} r\bigl(w_r - ikw\bigr) = 0 , \tag{3}
$$

the limit being uniform in the direction $\mathbf{x}/r$: for every $\varepsilon>0$ there is an $R_0$ with $\lvert r(w_r-ikw)\rvert \le \varepsilon$ at every point with $r\ge R_0$. (This is Evans's reading, and it is what makes the surface estimate of Step 6 below work.) Then:

1. Of the three solutions of (2) found above — all of them solutions away from the origin, where the first two are singular — the outgoing fundamental solution $\Phi = e^{ikr}/4\pi r$ satisfies (3), while the incoming one $e^{-ikr}/4\pi r$ and the plane wave $e^{ik\boldsymbol\omega\cdot\mathbf{x}}$ both fail it.
2. **Uniqueness.** If $w$ solves $-\nabla^2w = k^2w$ on all of $\mathbb{R}^3$ and satisfies (3), then $w \equiv 0$.

Part 2 is the statement that makes the condition useful: it says that the exterior Helmholtz problem — the equation outside an obstacle, data on the obstacle, and (3) at infinity — has at most one solution, because the difference of two solutions would solve the source-free problem everywhere and hence vanish. Evans sets both parts as problems, with the hints reproduced in the proof below, and refers to Colton for a fuller treatment.
:::

:::idea{provenance=original}
Condition (3) is a statement about which way the energy goes. For a field behaving like $A(\theta,\varphi)e^{ikr}/r$ at large $r$, the radial derivative is $ikA e^{ikr}/r$ plus a term of order $r^{-2}$, so $w_r - ikw$ is $O(r^{-2})$ and (3) holds; for $A e^{-ikr}/r$ the two terms *add* instead of cancelling, leaving $-2ikw$, which is $O(r^{-1})$, and $r(w_r-ikw)$ does not go to zero. So (3) selects $e^{+ikr}$ over $e^{-ikr}$, which with the time convention $e^{-i\omega t}$ means outgoing over incoming. A plane wave fails for a different reason: its radial derivative is $ik(\boldsymbol\omega\cdot\hat{\mathbf{x}})w$, so $w_r - ikw$ is $ik(\boldsymbol\omega\cdot\hat{\mathbf{x}} - 1)w$, which does not decay at all in any direction other than $\boldsymbol\omega$ — the plane wave is coming in from infinity on one side as much as it is going out on the other.

The uniqueness proof has two halves. First, Green's second identity applied to $w$ and $\bar w$ on a large ball gives a conserved flux: because $\bar w\Delta w - w\Delta\bar w = 0$ for a solution with real $k^2$, the boundary integral $\int(\bar ww_r - w\bar w_r)\,dS$ vanishes for every $R$. That integral is $2i\operatorname{Im}\int\bar ww_r$, so the radiation condition — which controls $w_r - ikw$ — combines with it to force $\int_{\partial B(0,R)}(\lvert w_r\rvert^2 + k^2\lvert w\rvert^2)dS \to 0$: the field carries no energy at all through large spheres, and both $w$ and $w_r$ die faster than $1/r$ in the mean-square sense. Second, Green's identity against the fundamental solution represents $w$ at any point as an integral over $\partial B(0,R)$; the first half shows that integral tends to zero, so $w$ vanishes at that point.
:::

:::proof{provenance=adapted src="evans-2010:§6.6, Problems 16(c) and 17, pp. 347–348"}
**Step 1 ($\Phi$ satisfies (3), exactly).** With $\Phi = e^{ikr}/4\pi r$,

$$
\Phi_r = \frac{d}{dr}\frac{e^{ikr}}{4\pi r} = \frac{ike^{ikr}}{4\pi r} - \frac{e^{ikr}}{4\pi r^2} = ik\Phi - \frac{\Phi}{r} ,
$$

so $r(\Phi_r - ik\Phi) = -\Phi = -e^{ikr}/4\pi r$, whose modulus is $1/4\pi r \to 0$. Condition (3) holds, with the quantity in it of size exactly $1/4\pi r$.

**Step 2 (the incoming wave fails).** With $\Psi = e^{-ikr}/4\pi r$ the same computation gives $\Psi_r = -ik\Psi - \Psi/r$, so

$$
r(\Psi_r - ik\Psi) = r\left(-2ik\Psi - \frac{\Psi}{r}\right) = -2ikr\Psi - \Psi ,
$$

of modulus $\bigl\lvert{-2ik r\Psi - \Psi}\bigr\rvert \to k/2\pi$ as $r\to\infty$, since $\lvert r\Psi\rvert = 1/4\pi$ and $\Psi\to0$. The limit is nonzero because $k \ne 0$.

**Step 3 (the plane wave fails).** For $w = e^{ik\boldsymbol\omega\cdot\mathbf{x}}$, $\nabla w = ik\boldsymbol\omega w$ and so $w_r = ik(\boldsymbol\omega\cdot\hat{\mathbf{x}})w$ with $\hat{\mathbf{x}} = \mathbf{x}/r$. Hence

$$
r\bigl(w_r - ikw\bigr) = ikr\bigl(\boldsymbol\omega\cdot\hat{\mathbf{x}} - 1\bigr)w ,
$$

and $\lvert w\rvert = 1$. Along any ray with $\boldsymbol\omega\cdot\hat{\mathbf{x}} \ne 1$ the modulus is $k r\lvert\boldsymbol\omega\cdot\hat{\mathbf{x}}-1\rvert$, which grows without bound. So (3) fails, and badly.

**Step 4 (a vanishing flux).** Now let $w$ solve $-\nabla^2w = k^2w$ on $\mathbb{R}^3$ and satisfy (3). Then $\Delta w = -k^2w$ and, taking complex conjugates and using that $k^2$ is real, $\Delta\bar w = -k^2\bar w$. Therefore

$$
\bar w\,\Delta w - w\,\Delta\bar w = -k^2\bar ww + k^2w\bar w = 0 \qquad\text{everywhere},
$$

and :ref[Green's second identity]{to=vcalc.green-identities} on the ball $B(0,R)$ gives

$$
0 = \int_{B(0,R)}\bigl(\bar w\Delta w - w\Delta\bar w\bigr)\,dV = \oint_{\partial B(0,R)}\bigl(\bar w\,w_r - w\,\bar w_r\bigr)\,dS \qquad\text{for every } R>0 . \tag{4}
$$

Since $w\bar w_r = \overline{\bar ww_r}$, the integrand of (4) is $2i\operatorname{Im}(\bar ww_r)$, so (4) says $\operatorname{Im}\oint_{\partial B(0,R)}\bar w\,w_r\,dS = 0$.

**Step 5 (expand the radiation condition).** Expanding the square,

$$
\lvert w_r - ikw\rvert^2 = \lvert w_r\rvert^2 + k^2\lvert w\rvert^2 - 2\operatorname{Re}\bigl(\overline{w_r}\,ikw\bigr)
= \lvert w_r\rvert^2 + k^2\lvert w\rvert^2 - 2k\operatorname{Im}\bigl(\bar w\,w_r\bigr) ,
$$

using $\operatorname{Re}(ik\,\overline{w_r}w) = -k\operatorname{Im}(\overline{w_r}w) = k\operatorname{Im}(\bar w w_r)$ for real $k$. Integrating over $\partial B(0,R)$ and inserting Step 4, the last term drops out:

$$
\oint_{\partial B(0,R)}\lvert w_r - ikw\rvert^2\,dS = \oint_{\partial B(0,R)}\bigl(\lvert w_r\rvert^2 + k^2\lvert w\rvert^2\bigr)\,dS . \tag{5}
$$

**Step 6 (both sides tend to zero).** By (3), whose limit is uniform in direction, there is for each $\varepsilon>0$ an $R_0$ with $\lvert w_r - ikw\rvert \le \varepsilon/r$ at *every* point with $r \ge R_0$. The sphere $\partial B(0,R)$ has area $4\pi R^2$, so the left side of (5) is at most $4\pi R^2\cdot\varepsilon^2/R^2 = 4\pi\varepsilon^2$ for $R\ge R_0$. Hence

$$
\oint_{\partial B(0,R)}\bigl(\lvert w_r\rvert^2 + k^2\lvert w\rvert^2\bigr)\,dS \;\longrightarrow\; 0 \qquad (R\to\infty) . \tag{6}
$$

Both terms are non-negative, so each tends to zero separately; and since $k\ne0$, (6) controls $\lvert w\rvert$ as well as $\lvert w_r\rvert$.

**Step 7 (represent $w$ on a large sphere).** Fix $\mathbf{x}_0$ and let $R > \lvert\mathbf{x}_0\rvert$. Apply Green's second identity on $B(0,R)$ to the pair $w$ and $\Phi(\cdot-\mathbf{x}_0)$, excising a small ball about $\mathbf{x}_0$ exactly as in the proof of the representation formula for Laplace's equation. The volume terms cancel, because both functions satisfy the same equation $\Delta v = -k^2v$ away from $\mathbf{x}_0$; the excised sphere contributes $w(\mathbf{x}_0)$ in the limit, because $\Phi$ has the same singularity as the Laplace fundamental solution (Step 3 of the previous proof). What remains is Evans's representation

$$
w(\mathbf{x}_0) = \oint_{\partial B(0,R)}\bigl(\Phi\,w_r - w\,\Phi_r\bigr)\,dS , \qquad \Phi = \Phi(\mathbf{x}-\mathbf{x}_0) . \tag{7}
$$

**Step 8 (let $R\to\infty$).** On $\partial B(0,R)$ with $R > 2\lvert\mathbf{x}_0\rvert$ we have $\lvert\mathbf{x}-\mathbf{x}_0\rvert \ge R/2$, so $\lvert\Phi\rvert \le 1/(2\pi R)$ and, from the identity $\nabla\Phi = \bigl(ik - 1/\rho\bigr)\Phi\,\hat{\boldsymbol\rho}$ of Step 1 with $\rho = \lvert\mathbf{x}-\mathbf{x}_0\rvert$, also $\lvert\Phi_r\rvert \le \lvert\nabla\Phi\rvert \le k\lvert\Phi\rvert + \lvert\Phi\rvert/\rho \le k/(2\pi R) + 1/(\pi R^2) \le C/R$ for large $R$. By the Cauchy–Schwarz inequality on the sphere,

$$
\left\lvert\oint_{\partial B(0,R)}\Phi\,w_r\,dS\right\rvert \le \left(\oint\lvert\Phi\rvert^2dS\right)^{1/2}\left(\oint\lvert w_r\rvert^2dS\right)^{1/2}
\le \left(\frac{4\pi R^2}{4\pi^2R^2}\right)^{1/2}\left(\oint\lvert w_r\rvert^2dS\right)^{1/2} ,
$$

whose first factor is bounded and whose second tends to $0$ by (6). The same estimate applies to $\oint w\,\Phi_r\,dS$, using the $\lvert w\rvert^2$ half of (6). Hence the whole right-hand side of (7) vanishes in the limit, while its left-hand side is a fixed number independent of $R$. Hence $w(\mathbf{x}_0) = 0$, and since $\mathbf{x}_0$ was arbitrary, $w \equiv 0$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *$k$ real and nonzero, in Steps 2, 4 and 6.* Step 4 needs $k^2 = \overline{k^2}$, which is where "real" is used; a complex $k$ (an absorbing medium) makes the flux identity (4) false, and then the right condition at infinity is plain decay, as for the modified Helmholtz equation. Step 2 needs $k \ne 0$ to make the incoming wave fail, and Step 6 needs it to extract $\lvert w\rvert$ from (6). At $k = 0$ the statement collapses: the outgoing and incoming fundamental solutions $e^{+ikr}/4\pi r$ and $e^{-ikr}/4\pi r$ both become the single function $1/4\pi r$, so there is nothing left to choose between, and the condition at infinity reverts to $w\to0$.
- *Three dimensions, in Steps 6 and 8.* The factor $r$ in (3) and the area $4\pi R^2$ are matched to $n = 3$. In $n$ dimensions the condition carries $r^{(n-1)/2}$ instead, matching the $r^{-(n-1)/2}$ decay of an outgoing wave; in two dimensions the outgoing solution is $H_0^{(1)}(k\rho)$, which decays like $\rho^{-1/2}$, and the condition reads $\lim\rho^{1/2}(w_\rho - ikw) = 0$.
- *The condition is not implied by decay.* This is the whole point. Both $e^{ikr}/r$ and $e^{-ikr}/r$ tend to zero at infinity, and so does any combination of them; "$w\to0$" therefore fails to distinguish a radiating source from one absorbing energy from infinity, and fails to make the exterior problem uniquely solvable. Nor is boundedness enough, as the plane wave shows: it is bounded, source-free and not identically zero, so part 2 of the statement would be false with (3) weakened to boundedness.
- *What part 2 does and does not say.* It is a statement about solutions on *all* of $\mathbb{R}^3$ with no source. It does not say that an exterior problem has no solution — only that it has at most one, which is what one wants. The existence of that one solution is proved by constructing it from the outgoing Green's function, which is the subject of :ref[Green's functions for the Helmholtz equation]{to=green.helmholtz-green-functions}.
- *Interior resonances are the other side of the same coin.* For a bounded region with homogeneous boundary data, (2) has nonzero solutions for a discrete set of $k$ and only for those; for an exterior region with the radiation condition, it has none. That contrast is why cavity problems are eigenvalue problems and radiation problems are not.
- *A separated solution has a frequency but not a wavelength.* Riley, Hobson and Bence make this observation about (2) in spherical polars: the time factor $e^{-i\omega t}$ with $\omega = kc$ is a pure frequency, but the zeros of $j_\ell(kr)$ are not equally spaced in $r$ except for $\ell = 0$, so the radial profile has no single wavelength. It acquires one only asymptotically, where $j_\ell(kr) \approx \sin(kr - \ell\pi/2)/kr$.
:::

:::example[The radiation condition, tested exactly]{provenance=original}
Take $k = 2$ and compare three solutions of $\nabla^2w + 4w = 0$ in $\mathbb{R}^3$ (away from the origin where necessary), computing $Q(r) = \sup_{\lvert\mathbf{x}\rvert = r}\lvert r(w_r - 2iw)\rvert$ exactly.

| $w$ | $w_r$ | $r(w_r - ikw)$ | $\lvert\,\cdot\,\rvert$ at $r = 10$ | $r\to\infty$ |
|---|---|---|---|---|
| $\dfrac{e^{2ir}}{4\pi r}$ | $2iw - \dfrac wr$ | $-w$ | $\dfrac{1}{40\pi} = 0.0079577$ | $\to 0$ |
| $\dfrac{e^{-2ir}}{4\pi r}$ | $-2iw - \dfrac wr$ | $-4irw - w$ | $\dfrac{\sqrt{16r^2+1}}{4\pi r}\Big\vert_{r=10} = 0.3184093$ | $\to \dfrac{k}{2\pi} = 0.3183099$ |
| $e^{2iz}$ (i.e. $\boldsymbol\omega = \hat{\mathbf{z}}$) | $2i\cos\theta\,w$ | $2ir(\cos\theta - 1)w$ | $0$ at $\theta=0$, $40$ at $\theta=\pi$ | unbounded |

The first row is Step 1 of the proof with the numbers put in: the quantity in (3) has modulus exactly $1/4\pi r$, so it decays like $1/r$ and the limit is zero. The second row is Step 2: the modulus is $\sqrt{16r^2+1}/4\pi r$, which tends to $k/2\pi = 1/\pi = 0.3183099$ and at $r=10$ is already $0.3184093$, within $0.04\%$ of its limit. The third row is Step 3: along the $-z$ axis, $\cos\theta = -1$ and the modulus is $4r$, which at $r = 10$ is $40$ and grows without bound; only along the single ray $\theta = 0$ does it vanish.

A superposition makes the selectivity vivid. The standing wave

$$
w = \frac{\sin 2r}{2r} = \frac{1}{4i}\left(\frac{e^{2ir}}{r} - \frac{e^{-2ir}}{r}\right) = j_0(2r)
$$

is a solution of $\nabla^2w+4w = 0$ on *all* of $\mathbb{R}^3$, with no singularity at the origin (where $w \to 1$), and it decays like $1/r$. It is a counterexample to any uniqueness statement based on decay alone; and indeed it is half incoming and half outgoing, so it fails (3). Explicitly, combining the first two rows of the table linearly,

$$
r\bigl(w_r - ikw\bigr) = e^{-ikr} - \frac{\sin kr}{kr} ,
$$

whose modulus tends to $1$ rather than to $0$ — numerically $0.98226$ at $r=10$, $1.00437$ at $r=50$ and $1.00213$ at $r=100$. Part 2 of the statement is consistent with the existence of this solution precisely because the solution fails (3).
:::

:::example[Resonances of a spherical shell cavity]{provenance=original}
Find the values of $k$ for which $\nabla^2w + k^2w = 0$ has a nonzero solution in the shell $1 \le r \le 2$ with $w = 0$ on both bounding spheres.

**Separate.** The region excludes the origin, so both spherical Bessel functions survive and the radial factor for each $\ell$ is $R(r) = Aj_\ell(kr) + By_\ell(kr)$. The two boundary conditions give a homogeneous $2\times2$ system for $(A,B)$, which has a nonzero solution exactly when

$$
D_\ell(k) \;=\; j_\ell(k)\,y_\ell(2k) - y_\ell(k)\,j_\ell(2k) \;=\; 0 . \tag{8}
$$

**The case $\ell = 0$ in closed form.** Here $j_0(x) = \sin x/x$ and $y_0(x) = -\cos x/x$, so

$$
D_0(k) = \frac{\sin k}{k}\cdot\frac{-\cos 2k}{2k} + \frac{\cos k}{k}\cdot\frac{\sin 2k}{2k} = \frac{\sin 2k\cos k - \cos 2k\sin k}{2k^2} = \frac{\sin k}{2k^2} .
$$

So $D_0(k) = 0$ exactly when $k = n\pi$, $n = 1,2,\dots$. This is no accident: for $\ell = 0$ the substitution $R = \chi/r$ turns the radial equation into $\chi'' + k^2\chi = 0$ with $\chi(1) = \chi(2) = 0$, which is a string of length $1$ — the shell behaves, in its spherically symmetric modes, exactly like a one-dimensional box of width $1$, the thickness of the shell.

**Higher $\ell$, numerically.** Solving (8) for the first few roots:

| $\ell$ | $k_{\ell,1}$ | $k_{\ell,2}$ | $k_{\ell,3}$ | degeneracy $2\ell+1$ |
|---|---|---|---|---|
| $0$ | $3.141593$ | $6.283185$ | $9.424778$ | 1 |
| $1$ | $3.286007$ | $6.360678$ | $9.477196$ | 3 |
| $2$ | $3.555788$ | $6.513068$ | $9.581270$ | 5 |
| $3$ | $3.922520$ | $6.735565$ | $9.735534$ | 7 |

The $\ell = 0$ roots are $\pi, 2\pi, 3\pi$ to six figures, confirming the closed form. The lowest resonance of the cavity is $k = \pi$, simple; the next is $k = 3.286007$, threefold degenerate. Reading down any column, the roots rise with $\ell$, as they must: a larger $\ell$ adds the repulsive term $\ell(\ell+1)/r^2$ to the radial equation, which pushes the eigenvalue up. Reading along a row instead — successive roots at fixed $\ell$ — the spacing tends to $\pi$, the $\ell=0$ value, because at large $k$ the centrifugal term becomes negligible beside $k^2$: at $\ell=3$ the two gaps printed are $2.813045$ and $2.999969$.
:::

:::example[A pulsating sphere: the radiation condition doing work]{provenance=original}
A sphere of radius $a$ in air oscillates radially at angular frequency $\omega$, its surface moving with radial velocity amplitude $U_0$. Find the radiated sound field and the acoustic power.

**Set up.** The acoustic pressure satisfies the wave equation, so $p = \operatorname{Re}\bigl(e^{-i\omega t}w\bigr)$ with $\nabla^2w+k^2w=0$, $k = \omega/c$, outside the sphere. The problem is spherically symmetric, so only $\ell = 0$ appears; of the two $\ell=0$ solutions $e^{\pm ikr}/r$, the radiation condition keeps only the outgoing one. **This is the step that makes the problem solvable at all**: without (3), any combination of the two would do, and the answer would not be determined by the data on $r = a$. So

$$
w(r) = A\,\frac{e^{ikr}}{r} .
$$

**Apply the surface condition.** Linearized momentum balance, $\rho_0\partial\mathbf{v}/\partial t = -\nabla p$, gives for the time-harmonic parts $-i\omega\rho_0 v_r = -w'(r)$, so $v_r = w'(r)/(i\omega\rho_0)$. Using $w' = ikw - w/r$ and imposing $v_r = U_0$ at $r = a$,

$$
U_0 = \frac{1}{i\omega\rho_0}\,A\,\frac{e^{ika}}{a}\left(ik - \frac1a\right)
\quad\Longrightarrow\quad
A = \frac{i\omega\rho_0 a^2 U_0\,e^{-ika}}{ika - 1},
\qquad
\lvert A\rvert = \frac{\omega\rho_0 a^2U_0}{\sqrt{1 + k^2a^2}} .
$$

**Radiated power.** Far from the sphere, $v_r \to w/(\rho_0c)$, so the time-averaged intensity is $\lvert w\rvert^2/2\rho_0c = \lvert A\rvert^2/2\rho_0cr^2$ and the power through a large sphere is

$$
P = 4\pi r^2\cdot\frac{\lvert A\rvert^2}{2\rho_0cr^2} = \frac{2\pi\lvert A\rvert^2}{\rho_0 c} = \frac{2\pi\rho_0c\,k^2a^4U_0^2}{1+k^2a^2} .
$$

**Numbers.** Air at room conditions: $\rho_0 = 1.2\ \mathrm{kg\,m^{-3}}$, $c = 343\ \mathrm{m\,s^{-1}}$. Take $a = 0.05\ \mathrm m$, $f = 100\ \mathrm{Hz}$ and $U_0 = 0.01\ \mathrm{m\,s^{-1}}$. Then

$$
k = \frac{2\pi f}{c} = 1.831832\ \mathrm{m^{-1}}, \qquad ka = 0.0915916 ,
$$

$$
\lvert A\rvert = 0.0187710\ \mathrm{Pa\,m}, \qquad P = 5.37872\times10^{-6}\ \mathrm W .
$$

So the pressure amplitude at $1$ m is $0.0188$ Pa — root-mean-square $0.01327$ Pa, which against the reference $2\times10^{-5}$ Pa is $56.4$ dB SPL — and the sphere radiates about $5.4$ microwatts.

**The two limits, and why small loudspeakers are inefficient.** For $ka \gg 1$ the formula gives $P \to 2\pi\rho_0ca^2U_0^2 = (4\pi a^2)\cdot\tfrac12\rho_0cU_0^2$: the whole surface radiates as if it were a piece of plane wave, at the best possible rate. For $ka\ll1$,

$$
P \approx 2\pi\rho_0c\,k^2a^4U_0^2 ,
$$

smaller by the factor $k^2a^2/(1+k^2a^2)$, which here is $0.00832$. A source much smaller than a wavelength radiates with efficiency proportional to $(ka)^2$, and since $k\propto f$ the power at fixed surface velocity falls off as $f^2$ — which is why a small driver needs a large enclosure, a horn, or a great deal of excursion to produce bass.
:::

:::application{provenance=original}
**Acoustics, antennas and scattering.** Every steady-state radiation calculation is an exterior Helmholtz problem closed by the radiation condition: a loudspeaker in a baffle, a dipole antenna, an ultrasound transducer. For scattering, one splits the field into a prescribed incident part and an unknown scattered part, $w = w_{\text{inc}} + w_{\text{sc}}$, and imposes (3) on $w_{\text{sc}}$ alone — not on $w$, which contains the incident plane wave and therefore cannot satisfy it, as Step 3 of the proof shows. That split is exactly what the uniqueness theorem makes legitimate: the scattered field is the unique outgoing solution with the boundary data that the incident field forces on the obstacle. The far-field pattern $A(\theta,\varphi)$ in $w_{\text{sc}}\sim A(\theta,\varphi)e^{ikr}/r$ is the scattering amplitude, and $\lvert A\rvert^2$ integrated over directions is the scattering cross-section; see :ref[scattering and the Born approximation]{to=green.born-approximation}.

**Waveguides and optical fibres.** In a cylinder, step 2 of the recipe with the catalogue of :ref[separation of variables]{to=pde.separation-of-variables} gives modes $J_m(\kappa\rho)e^{im\varphi}e^{i\beta z}$ with $\kappa^2 + \beta^2 = k^2$. A mode propagates only when $\beta^2 > 0$, that is when $k$ exceeds the cutoff $\kappa$ fixed by the boundary condition; below cutoff, $\beta$ is imaginary and the mode is evanescent. The relation $\kappa^2+\beta^2 = k^2$ is the algebraic relation among separation constants of step 4 of that recipe, and here it is the dispersion relation of the guide — which is where waveguide dispersion, and hence pulse spreading in a fibre, comes from.

**Cavity resonances and the density of states.** The interior problem of step 3 gives the resonant frequencies of a cavity: a microwave oven, an organ pipe, a laser cavity. Counting eigenvalues below $k$ in a box of volume $V$ gives Weyl's asymptotic $N(k)\approx Vk^3/6\pi^2$, which multiplied by two polarizations is the mode count behind the Rayleigh–Jeans and then the Planck radiation law. The shell example above shows the structure in miniature: a discrete set of $k$, with multiplicity $2\ell+1$ forced by the rotational symmetry.

**Quantum mechanics of a free particle, and the modified equation in a barrier.** The time-independent Schrödinger equation $-\frac{\hbar^2}{2m}\nabla^2\psi = E\psi$ is the Helmholtz equation with $k^2 = 2mE/\hbar^2$; Hassani reaches it exactly this way, and the solutions regular at the origin are $j_\ell(kr)Y_\ell^m$. Where the potential exceeds the energy, $k^2$ becomes negative and the equation turns into the modified Helmholtz equation, whose solutions decay exponentially — quantum tunnelling, in the form in which it is actually computed. The same substitution turns the Coulomb-screening problem into the modified equation, whose three-dimensional Green's function Arfken tabulates as the Yukawa potential $e^{-kr}/4\pi r$. See :ref[the Schrödinger equation]{to=pde.schrodinger-equation}.

**Numerical methods, and why the radiation condition is a nuisance.** A computational domain is finite, so the condition at infinity has to be faked: by a non-reflecting or absorbing boundary condition, which enforces (3) approximately on an artificial outer boundary; by a perfectly matched layer, which continues the solution into complex coordinates so that outgoing waves decay and incoming ones would grow; or by reformulating the problem as a boundary integral equation on the obstacle using the outgoing Green's function, which satisfies (3) exactly and so needs no outer boundary at all. The last route is the fully faithful one, and it is why the boundary-element method dominates exterior acoustics and electromagnetic scattering. It also inherits the one difficulty of the Helmholtz equation that the Laplace equation does not have: the interior resonances of step 3 appear as frequencies at which the integral operator becomes singular, even though the exterior problem itself remains uniquely solvable.
:::
