---
id: green.born-approximation
title: Scattering and the Born approximation
kind: application
level: advanced
summary: Turns the stationary scattering problem into the Lippmann-Schwinger integral equation by inverting $\nabla^2+k^2$ with the outgoing Green's function, reads the scattering amplitude off the far field, identifies its Neumann series as the Born series, and evaluates the first Born amplitude $-\tfrac{1}{4\pi}\mathcal{F}U(\mathbf q)$ at momentum transfer $q=2k\sin(\theta/2)$ on a Gaussian potential and on a one-dimensional delta potential where the whole series can be summed.
prereqs: [green.helmholtz-green-functions, green.neumann-series, pde.helmholtz-equation, fourier.fourier-transform-rn]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§10.2, Example 10.2.2 (Quantum Mechanical Scattering: Born Approximation), pp. 465-466: the rearrangement (10.45)-(10.46) of the time-independent Schrodinger equation into $\\nabla^2\\psi+k^2\\psi = (2m/\\hbar^2)V\\psi$ with $k^2 = 2mE/\\hbar^2$; the assumed asymptotic form (10.47) $\\psi \\sim e^{i\\mathbf{k}_0\\cdot\\mathbf{r}}+f_k(\\theta,\\varphi)e^{ikr}/r$ with $\\mathbf{k}_0$ along the beam, the remark that the $1/r$ factor makes the scattered flux independent of $r$ and that (10.45) can only describe elastic scattering so that $\\lvert\\mathbf{k}_0\\rvert = k$, and the statement that the scattering cross section is $\\lvert f_k(\\theta,\\varphi)\\rvert^2$; the construction of (10.48) by inverting the operator with the Green's function, the addition of the homogeneous solution $e^{i\\mathbf{k}_0\\cdot\\mathbf{r}}$, and the resulting Lippmann-Schwinger equation (10.49), described there as exact; the replacement of $\\psi$ by the unscattered amplitude (10.50) inside the integral, giving the Born approximation (10.51), with the remark that it is expected to be most accurate for weak potentials and high incident energy. §10.2, Table 10.1, p. 463: the outgoing three-dimensional Helmholtz Green's function $-e^{ik\\lvert\\mathbf{r}_1-\\mathbf{r}_2\\rvert}/(4\\pi\\lvert\\mathbf{r}_1-\\mathbf{r}_2\\rvert)$ used in that construction. §21.3, pp. 1066-1067: the operator form $\\varphi = (1-\\lambda K)^{-1}f$ of a second-kind equation, the sufficient condition (21.55), the statement that the necessary and sufficient condition for convergence is $\\lvert\\lambda\\rvert<\\lvert\\lambda_e\\rvert$ with $\\lambda_e$ the eigenvalue of smallest magnitude of the homogeneous equation, and the identification of the first-order Born approximation (10.51) as the second term of the Neumann series for the scattering problem"
    pages: "463, 465-466, 1066-1067"
    role: the whole route from the Schrodinger equation to the Lippmann-Schwinger equation and the first Born approximation, the elastic condition, the meaning of the amplitude, and the reading of the Born series as a Neumann series with convergence governed by the smallest characteristic value
  - work: rhb-2006
    loc: "Problem 4.36, p. 149: the Born-approximation amplitude $f(\\theta) = (2mV_0/\\hbar^2K^3)(\\sin Kb-Kb\\cos Kb)$ for a uniform well of depth $V_0$ and radius $b$, with the energy written as $\\hbar^2k^2/2m$ and $K = 2k\\sin(\\theta/2)$, together with the note that the differential cross-section is $\\lvert f(\\theta)\\rvert^2$ and the total cross-section its integral $2\\pi\\int_0^\\pi\\lvert f(\\theta)\\rvert^2\\sin\\theta\\,\\mathrm{d}\\theta$ over all solid angles. Problem 17.15, p. 576: the statement that a Born-approximation solution is obtained from a function satisfying $(-\\nabla^2-K^2)y(\\mathbf{r}) = F(\\mathbf{r})$, with the associated Green's function reduced to a radial integral and quoted as $(4\\pi\\lvert\\mathbf{r}-\\mathbf{r}'\\rvert)^{-1}\\exp(iK\\lvert\\mathbf{r}-\\mathbf{r}'\\rvert)$"
    pages: "149, 576"
    role: the momentum-transfer variable $K = 2k\\sin(\\theta/2)$, the definitions of the differential and total cross-sections, the uniform-well amplitude used here as an independent check of our sign conventions, and the sign of the Green's function in the $(-\\nabla^2-K^2)$ convention
  - work: strauss-2008
    loc: "§13.3 (Scattering), pp. 366-370: the description of a scattering problem as an incoming wave, an interaction and an outgoing wave; the plane-wave-off-a-sphere problem (7)-(10) with the incident wave $Ae^{i(\\omega t-kz)}$, the splitting $u = Ae^{i(\\omega t-kz)}+e^{i\\omega t}v(\\mathbf{x})$, the remark that $e^{i\\omega t}e^{\\pm ikr}/r$ is incoming for the $+$ sign and outgoing for the $-$ sign under that time convention, the outgoing radiation condition '$rv$ bounded and $r(\\partial v/\\partial r+ikv)\\to0$ as $r\\to\\infty$', and Theorem 1, p. 370, the exact partial-wave series for the scattered field. §13.4 (Continuous spectrum), pp. 371-373: the one-dimensional problem $-\\psi''+V\\psi = k^2\\psi$ with the decay hypothesis $\\int(1+x^2)\\lvert V\\rvert\\,\\mathrm{d}x<\\infty$, the definition (4) of the reflection and transmission coefficients $R$ and $T$ by $\\psi\\sim e^{-ikx}+Re^{ikx}$ at $+\\infty$ and $\\psi\\sim Te^{-ikx}$ at $-\\infty$, the statement that a solution with these properties exists and is unique for each $k$, and Theorem 1, $\\lvert R\\rvert^2+\\lvert T\\rvert^2 = 1$, proved from the constancy of the Wronskian"
    pages: "366-373"
    role: the structure of a scattering problem and the radiation condition in the opposite time convention; the exact partial-wave alternative to Born; the one-dimensional reflection and transmission coefficients and the unitarity identity used in the second example as the test the first Born approximation fails
---

:::note[Conventions]{provenance=adapted src="arfken-2013:§10.2, Example 10.2.2, Eqs. (10.45)-(10.47) and Table 10.1, pp. 463, 465; strauss-2008:§13.3, Eqs. (7)-(10) and the paragraph on the radiation condition, pp. 367-368"}
Four conventions are fixed once and used throughout.

**Time factor and the meaning of "outgoing".** We suppress a time dependence $e^{-i\omega t}$ with $\omega = \hbar k^2/2m$, so that an outgoing spherical wave carries $e^{+ikr}$. This is the convention of Arfken, Weber and Harris, and it is the one :ref[]{to=green.helmholtz-green-functions} uses. Strauss suppresses $e^{+i\omega t}$ instead; in his book an outgoing spherical wave carries $e^{-ikr}$ and his radiation condition reads $r(\partial v/\partial r+ikv)\to0$, with a plus sign where ours has a minus. The two conventions are complex conjugates of each other and describe the same physics; mixing them silently is the one thing that must not be done, so every formula below is in the $e^{-i\omega t}$ convention, and Strauss's results are conjugated before being used.

**Reduced potential.** The time-independent Schrodinger equation $-\tfrac{\hbar^2}{2m}\nabla^2\psi+V\psi = E\psi$ is rearranged, following Arfken, Weber and Harris, into a Helmholtz equation with a source on the right:
$$
\bigl(\nabla^2+k^2\bigr)\psi = U\psi ,
\qquad
U = \frac{2m}{\hbar^2}\,V ,
\qquad
k^2 = \frac{2mE}{\hbar^2} \;>\;0 .
$$
The **reduced potential** $U$ has the dimensions of an inverse squared length; nothing below needs $\hbar$ or $m$ again.

**Green's function.** We use $\bigl(\nabla^2+k^2\bigr)G = \delta$, so that in three dimensions
$$
G(\mathbf{r}) = -\frac{e^{ikr}}{4\pi r},
\qquad r = \lvert\mathbf{r}\rvert ,
$$
as in :ref[]{to=green.helmholtz-green-functions}. Riley, Hobson and Bence write the same object with the operator $-\nabla^2-K^2$ and therefore quote it with the opposite sign, $+e^{iKr}/(4\pi r)$; the two agree.

**Fourier transform.** Scattering formulas are cleanest with no prefactor on the transform, so throughout this unit
$$
\mathcal{F}U(\mathbf{q}) \;=\; \int e^{-i\mathbf{q}\cdot\mathbf{r}}\,U(\mathbf{r})\,\mathrm{d}^{3}r .
$$
This is **not** the transform of :ref[]{to=fourier.fourier-transform-rn}, which is the symmetric one, $\tilde U(\mathbf{q}) = (2\pi)^{-3/2}\int e^{-i\mathbf{q}\cdot\mathbf{r}}U\,\mathrm{d}^{3}r$, and for which this handbook reserves the tilde. The two differ by a fixed factor,
$$
\mathcal{F}U = (2\pi)^{3/2}\,\tilde U ,
\qquad
(2\pi)^{3/2} = 15.7496\ldots ,
$$
so any formula taken from that unit must be multiplied by $(2\pi)^{3/2}$ before it is used here, and any value computed here must be divided by it before it is compared with one quoted there. The two places below where that unit is cited for a transform say so explicitly. The unnormalised choice is what makes the first Born amplitude exactly $-\mathcal{F}U/4\pi$, with no stray powers of $2\pi$.
:::

:::definition[The scattering set-up, the amplitude and the cross-sections]{provenance=adapted src="arfken-2013:§10.2, Example 10.2.2, Eqs. (10.46)-(10.47) and the paragraph after them, pp. 465; rhb-2006:Problem 4.36 and its closing note, p. 149; strauss-2008:§13.3, opening paragraph, p. 366"}
A **scatterer** is a reduced potential $U$ that is measurable, bounded, and supported in the ball $\lvert\mathbf{r}\rvert\le a$. Fix an energy through $k>0$ and a beam direction through a unit vector $\hat{\mathbf{e}}_{0}$, and put $\mathbf{k}_{0} = k\hat{\mathbf{e}}_{0}$. The **incident wave** is the plane wave
$$
\psi_{\mathrm{inc}}(\mathbf{r}) = e^{i\mathbf{k}_{0}\cdot\mathbf{r}},
$$
which solves $(\nabla^2+k^2)\psi_{\mathrm{inc}} = 0$ precisely because $\lvert\mathbf{k}_{0}\rvert = k$. The same $k$ appears in the incident and the scattered wave because the equation contains nothing that could absorb energy: the scattering is **elastic**, which is the reading Arfken, Weber and Harris give of their Eq. (10.45).

A **scattering solution** is a bounded continuous $\psi$ with
$$
\psi(\mathbf{r}) = e^{i\mathbf{k}_{0}\cdot\mathbf{r}} + f(\hat{\mathbf{n}})\,\frac{e^{ikr}}{r} + O\!\left(r^{-2}\right),
\qquad r\to\infty,\quad \hat{\mathbf{n}} = \mathbf{r}/r ,
$$
the error being uniform in $\hat{\mathbf{n}}$. The coefficient $f$ is the **scattering amplitude**; it has the dimensions of a length and depends on $k$ and on $\hat{\mathbf{n}}$, hence on the scattering angle $\theta$ between $\hat{\mathbf{n}}$ and $\hat{\mathbf{e}}_{0}$ and on the azimuth $\varphi$. The factor $1/r$ is forced by conservation: it makes the flux carried by the scattered wave through a large sphere independent of its radius.

Following Riley, Hobson and Bence, the **differential cross-section** and the **total cross-section** are
$$
\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \lvert f(\theta,\varphi)\rvert^{2},
\qquad
\sigma = \int \lvert f\rvert^{2}\,\mathrm{d}\Omega
= 2\pi\int_{0}^{\pi}\lvert f(\theta)\rvert^{2}\sin\theta\,\mathrm{d}\theta
\quad(\text{central } U).
$$
Arfken, Weber and Harris call $\lvert f\rvert^{2}$ itself the scattering cross section, meaning the differential one.

Finally, the **momentum transfer** is the vector
$$
\mathbf{q} = k\hat{\mathbf{n}} - \mathbf{k}_{0},
\qquad
q = \lvert\mathbf{q}\rvert = 2k\sin\frac{\theta}{2},
$$
the second equality because $\lvert k\hat{\mathbf{n}}-\mathbf{k}_{0}\rvert^{2} = 2k^{2}(1-\cos\theta)$. Riley, Hobson and Bence call this quantity $K$. Note the range: $0\le q\le 2k$. An experiment at wavenumber $k$ therefore samples the scatterer only at momentum transfers of magnitude at most $2k$, that is only at spatial periods $2\pi/q$ down to $\pi/k$ and no finer; the application block reads this as the resolution limit.
:::

:::statement[Lippmann-Schwinger equation, Born series, first Born amplitude]{provenance=adapted src="arfken-2013:§10.2, Example 10.2.2, Eqs. (10.48)-(10.51), pp. 465-466; arfken-2013:§21.3, p. 1067; rhb-2006:Problem 4.36, p. 149"}
Let $U$ be a scatterer and $\mathbf{k}_{0},k$ as in the definition. Write
$$
(\mathcal{T}\phi)(\mathbf{r}) \;=\; -\frac{1}{4\pi}\int_{\lvert\mathbf{r}'\rvert\le a}
\frac{e^{ik\lvert\mathbf{r}-\mathbf{r}'\rvert}}{\lvert\mathbf{r}-\mathbf{r}'\rvert}\,U(\mathbf{r}')\,\phi(\mathbf{r}')\,\mathrm{d}^{3}r' ,
$$
the convolution with the outgoing Green's function of the source $U\phi$.

1. **The integral equation.** Every bounded continuous solution of the **Lippmann-Schwinger equation**
   $$
   \psi = \psi_{\mathrm{inc}} + \mathcal{T}\psi
   \tag{LS}
   $$
   satisfies $(\nabla^{2}+k^{2})\psi = U\psi$ in the sense of distributions on $\mathbb{R}^{3}$, and is a scattering solution in the sense of the definition. In the other direction, (LS) is what one gets by inverting $\nabla^{2}+k^{2}$ with the outgoing Green's function and adding to the result the homogeneous solution $\psi_{\mathrm{inc}}$; Arfken, Weber and Harris obtain it exactly this way and call the resulting equation exact.

2. **The amplitude.** For a solution of (LS) the amplitude of the definition exists and is
   $$
   f(\hat{\mathbf{n}}) = -\frac{1}{4\pi}\int e^{-ik\hat{\mathbf{n}}\cdot\mathbf{r}'}\,U(\mathbf{r}')\,\psi(\mathbf{r}')\,\mathrm{d}^{3}r' .
   \tag{A}
   $$
   This is exact, but it is not a formula for $f$: the unknown $\psi$ stands inside it.

3. **The Born series.** Equation (LS) is a Fredholm equation of the second kind with parameter $1$ and kernel $G(\mathbf{r}-\mathbf{r}')U(\mathbf{r}')$. Its Neumann series (:ref[]{to=green.neumann-series}) is the **Born series**
   $$
   \psi = \sum_{n\ge0}\mathcal{T}^{\,n}\psi_{\mathrm{inc}}
   = \psi_{\mathrm{inc}} + \mathcal{T}\psi_{\mathrm{inc}} + \mathcal{T}^{2}\psi_{\mathrm{inc}} + \cdots ,
   $$
   and whenever it converges uniformly on the support of $U$ it may be inserted in (A), giving $f = \sum_{n\ge1}f^{(n)}$ with $f^{(n)}$ built from $\mathcal{T}^{\,n-1}\psi_{\mathrm{inc}}$. Arfken, Weber and Harris record the general rule for such a series: the condition $\lvert\lambda\rvert\lvert K\rvert_{\max}\lvert b-a\rvert<1$ is sufficient but crude, and the sharp condition is that $\lvert\lambda\rvert$ be smaller than the smallest characteristic value of the homogeneous equation.

4. **The first Born approximation.** Truncating after the first correction, that is replacing $\psi$ by $\psi_{\mathrm{inc}}$ inside (A), gives
   $$
   f_{\mathrm{B}}(\mathbf{q}) = -\frac{1}{4\pi}\int e^{-i\mathbf{q}\cdot\mathbf{r}'}\,U(\mathbf{r}')\,\mathrm{d}^{3}r'
   = -\frac{1}{4\pi}\,\mathcal{F}U(\mathbf{q}),
   \qquad \mathbf{q} = k\hat{\mathbf{n}}-\mathbf{k}_{0} .
   \tag{B}
   $$
   The amplitude in this approximation depends on $\hat{\mathbf{n}}$ and $k$ only through the single variable $\mathbf{q}$. If moreover $U$ is central, $U = U(r)$, then $f_{\mathrm{B}}$ depends only on $q = 2k\sin(\theta/2)$ and
   $$
   f_{\mathrm{B}}(q) = -\frac{1}{q}\int_{0}^{\infty} r\,U(r)\,\sin(qr)\,\mathrm{d}r ,
   \tag{B$'$}
   $$
   which is real whenever $U$ is real, as step 5 of the proof records; the definition of a scatterer does not require reality, and for a complex $U$ --- an absorbing medium, say --- the right-hand side of (B$'$) is complex. Riley, Hobson and Bence quote the special case of a uniform well of depth $V_{0}$ and radius $b$; our (B$'$) with $U = -2mV_{0}/\hbar^{2}$ on $r<b$ reproduces their $f(\theta) = (2mV_{0}/\hbar^{2}K^{3})(\sin Kb-Kb\cos Kb)$ exactly, including the sign, which is the check that fixes all of our conventions together.
:::

:::idea{provenance=original}
A scattering experiment is an inhomogeneous Helmholtz problem in disguise. Move the potential term to the right-hand side and it becomes $(\nabla^{2}+k^{2})\psi = U\psi$: a known operator acting on $\psi$, driven by a source that happens to contain $\psi$ itself. Inverting the operator with the outgoing Green's function therefore does not solve the problem, it converts it into an integral equation; the incident beam enters not as data but as the homogeneous solution one is free to add. Two things then follow almost for free. First, because the source is confined to a ball, the far field of the scattered part is a single outgoing spherical wave whose coefficient is the Fourier transform of the source evaluated at the outgoing wavevector, so the amplitude is read off by one Taylor expansion of $\lvert\mathbf{r}-\mathbf{r}'\rvert$. Second, the integral equation is of the second kind, so it may be iterated: guess that the particle has not been scattered, feed that guess back in, repeat. The first round is the Born approximation, and the amplitude it produces is just the Fourier transform of the potential at the momentum the particle lost.
:::

:::proof{provenance=adapted src="arfken-2013:§10.2, Example 10.2.2, the construction of Eqs. (10.48)-(10.51), pp. 465-466"}
Throughout, $U$ is bounded and supported in $\lvert\mathbf{r}\rvert\le a$, and $\psi$ is bounded and continuous, so every integral written converges absolutely: the only singularity of the kernel is the integrable $\lvert\mathbf{r}-\mathbf{r}'\rvert^{-1}$, and the domain of integration is a ball.

**Step 1: a solution of (LS) solves the differential equation.** By definition $\mathcal{T}\psi = G*(U\psi)$ with $G$ the outgoing Green's function of the note. Applying $\nabla^{2}+k^{2}$ and using $(\nabla^{2}+k^{2})G = \delta$ (that is :ref[]{to=green.helmholtz-green-functions}), the convolution theorem for distributions gives
$$
\bigl(\nabla^{2}+k^{2}\bigr)\mathcal{T}\psi = \delta * (U\psi) = U\psi .
$$
The other term contributes nothing, since $(\nabla^{2}+k^{2})e^{i\mathbf{k}_{0}\cdot\mathbf{r}} = (k^{2}-\lvert\mathbf{k}_{0}\rvert^{2})e^{i\mathbf{k}_{0}\cdot\mathbf{r}} = 0$ — here, and only here, the hypothesis $\lvert\mathbf{k}_{0}\rvert = k$ is used. Hence $(\nabla^{2}+k^{2})\psi = U\psi$.

**Step 2: the far field, and part 2.** Let $r = \lvert\mathbf{r}\rvert > 2a$ and $\lvert\mathbf{r}'\rvert\le a$. Then
$$
\lvert\mathbf{r}-\mathbf{r}'\rvert
= r\sqrt{1-\frac{2\hat{\mathbf{n}}\cdot\mathbf{r}'}{r}+\frac{\lvert\mathbf{r}'\rvert^{2}}{r^{2}}}
= r - \hat{\mathbf{n}}\cdot\mathbf{r}' + R(\mathbf{r},\mathbf{r}'),
\qquad \lvert R\rvert \le \frac{2a^{2}}{r},
$$
the bound coming from expanding the square root and estimating the remainder, which is legitimate because $\lvert\mathbf{r}'\rvert/r<\tfrac12$. Consequently
$$
e^{ik\lvert\mathbf{r}-\mathbf{r}'\rvert} = e^{ikr}e^{-ik\hat{\mathbf{n}}\cdot\mathbf{r}'}\bigl(1+O(ka^{2}/r)\bigr),
\qquad
\frac{1}{\lvert\mathbf{r}-\mathbf{r}'\rvert} = \frac{1}{r}\bigl(1+O(a/r)\bigr),
$$
with constants depending only on $k$ and $a$, uniformly in $\hat{\mathbf{n}}$ and in $\mathbf{r}'$ in the support. Substituting into $\mathcal{T}\psi$ and using that $\lvert U\psi\rvert$ is bounded on a set of finite volume,
$$
(\mathcal{T}\psi)(\mathbf{r}) = \frac{e^{ikr}}{r}\left[-\frac{1}{4\pi}\int e^{-ik\hat{\mathbf{n}}\cdot\mathbf{r}'}U(\mathbf{r}')\psi(\mathbf{r}')\,\mathrm{d}^{3}r'\right] + O\!\left(r^{-2}\right).
$$
Adding $\psi_{\mathrm{inc}}$ gives exactly the asymptotic form required of a scattering solution, with the bracket as $f(\hat{\mathbf{n}})$. That is part 2, and it also finishes part 1: the scattered part is a multiple of $e^{ikr}/r$ to leading order, so $\partial_{r}(\mathcal{T}\psi)-ik\,\mathcal{T}\psi = O(r^{-2}) = o(r^{-1})$, which is the Sommerfeld outgoing condition of :ref[]{to=pde.helmholtz-equation}.

**Step 3: the series, part 3.** Iterating (LS) in the manner of :ref[]{to=green.neumann-series}, with $\lambda = 1$ and the kernel $K(\mathbf{r},\mathbf{r}') = G(\mathbf{r}-\mathbf{r}')U(\mathbf{r}')$, produces the partial sums $\sum_{n=0}^{N}\mathcal{T}^{\,n}\psi_{\mathrm{inc}}$; these are the Born approximations of successive orders. If they converge uniformly on the support of $U$ then the limit may be taken inside the integral in (A), because the support has finite volume and the remaining factor $e^{-ik\hat{\mathbf{n}}\cdot\mathbf{r}'}U(\mathbf{r}')$ is bounded there; this splits $f$ into the stated sum. The convergence itself is not supplied by the theorem of :ref[]{to=green.neumann-series}, whose hypotheses are not met here; see the remark.

**Step 4: the first term, part 4.** Putting $\psi = \psi_{\mathrm{inc}}$ in (A) and combining the two exponentials,
$$
f_{\mathrm{B}} = -\frac{1}{4\pi}\int e^{-ik\hat{\mathbf{n}}\cdot\mathbf{r}'}U(\mathbf{r}')e^{i\mathbf{k}_{0}\cdot\mathbf{r}'}\,\mathrm{d}^{3}r'
= -\frac{1}{4\pi}\int e^{-i(k\hat{\mathbf{n}}-\mathbf{k}_{0})\cdot\mathbf{r}'}U(\mathbf{r}')\,\mathrm{d}^{3}r' ,
$$
which is (B).

**Step 5: central potentials.** For $U = U(r)$ take the polar axis of the $\mathbf{r}'$ integration along $\mathbf{q}$ and write $\mu = \cos\angle(\mathbf{q},\mathbf{r}')$. Then
$$
\int e^{-i\mathbf{q}\cdot\mathbf{r}'}U(r')\,\mathrm{d}^{3}r'
= 2\pi\int_{0}^{\infty}\!\!\int_{-1}^{1} e^{-iqr'\mu}\,U(r')\,r'^{2}\,\mathrm{d}\mu\,\mathrm{d}r'
= 4\pi\int_{0}^{\infty} r'^{2}U(r')\,\frac{\sin qr'}{qr'}\,\mathrm{d}r' ,
$$
using $\int_{-1}^{1}e^{-is\mu}\mathrm{d}\mu = 2\sin s/s$. Dividing by $-4\pi$ gives (B$'$). The result is real whenever $U$ is real, and depends on the direction only through $q = 2k\sin(\theta/2)$.

**Step 6: the check against the uniform well.** With $V = -V_{0}$ for $r<b$ and $0$ outside, so $U = -2mV_{0}/\hbar^{2}$ on $r<b$, formula (B$'$) gives
$$
f_{\mathrm{B}}(q) = \frac{2mV_{0}}{\hbar^{2}q}\int_{0}^{b} r\sin(qr)\,\mathrm{d}r
= \frac{2mV_{0}}{\hbar^{2}q}\cdot\frac{\sin qb - qb\cos qb}{q^{2}} ,
$$
because $\int_{0}^{b}r\sin(qr)\,\mathrm{d}r = [\,q^{-2}\sin qr - q^{-1}r\cos qr\,]_{0}^{b}$. With $q$ written as $K$ this is the expression Riley, Hobson and Bence quote. $\square$
:::

:::remark[Where the hypotheses are used, and where the method breaks]{provenance=original}
- **Elasticity.** $\lvert\mathbf{k}_{0}\rvert = k$ is used in step 1, to make the incident plane wave a homogeneous solution, and already in the definition, where it is what reduces $q = \lvert k\hat{\mathbf{n}}-\mathbf{k}_{0}\rvert$ to $2k\sin(\theta/2)$. Without it the plane wave would contribute a spurious source and (LS) would not solve the right equation.
- **Compact support.** Used only in step 2, but used twice there: to make the error terms uniform, and to keep the far-field integral finite. It can be weakened to rapid decay, but not to arbitrary decay. The Coulomb potential $U\propto1/r$ fails it badly: the expansion of $\lvert\mathbf{r}-\mathbf{r}'\rvert$ is then applied where $\lvert\mathbf{r}'\rvert$ is comparable with $r$, the scattered wave acquires a logarithmic phase, and no amplitude of the assumed form exists. It is a well-known accident that formula (B$'$), applied to a screened Coulomb potential and then unscreened, still produces the correct Rutherford cross-section; the application block does this calculation. The accident does not license the derivation.
- **Outgoing, not incoming.** Replacing $G$ by its conjugate would give a perfectly good solution of the same differential equation with an *incoming* scattered wave. Nothing in the mathematics prefers one; the physical picture of a beam that arrives and is scattered away does. This is the same non-uniqueness that :ref[]{to=green.helmholtz-green-functions} resolves by the radiation condition, and the reason Strauss states his problem with a radiation condition attached.
- **Convergence of the Born series is not covered by our Neumann theorem.** The theorem of :ref[]{to=green.neumann-series} assumes a finite interval and a kernel bounded and continuous on the square. Here the domain is $\mathbb{R}^{3}$, the kernel $G(\mathbf{r}-\mathbf{r}')U(\mathbf{r}')$ has an integrable but unbounded singularity on the diagonal, and on $L^{2}(\mathbb{R}^{3})$ it is not even Hilbert-Schmidt, since $\int\lvert G(\mathbf{r}-\mathbf{r}')\rvert^{2}\mathrm{d}^{3}r = (16\pi^{2})^{-1}\int r^{-2}\mathrm{d}^{3}r$ diverges. The divergence is at large $r$ only, and it is removed by restricting to the ball $\lvert\mathbf{r}\rvert\le a$, which is the space the Born series is used on: part 3 of the statement and step 3 of the proof both ask only for convergence on the support of $U$, and nothing more is needed, since (A) integrates over that support alone. On $L^{2}(\{\lvert\mathbf{r}\rvert\le a\})$ the kernel *is* Hilbert-Schmidt, because $\lvert G(\mathbf{r}-\mathbf{r}')\rvert^{2} = (16\pi^{2})^{-1}\lvert\mathbf{r}-\mathbf{r}'\rvert^{-2}$ has an integrable singularity and $\int_{\lvert\mathbf{r}'\rvert\le a}\int_{\lvert\mathbf{r}\rvert\le a}\lvert\mathbf{r}-\mathbf{r}'\rvert^{-2}\lvert U(\mathbf{r}')\rvert^{2}\,\mathrm{d}^{3}r\,\mathrm{d}^{3}r' \le \lVert U\rVert_{\infty}^{2}\,\tfrac{4}{3}\pi a^{3}\cdot 8\pi a < \infty$. So $\mathcal{T}$ is compact there and does have a discrete set of characteristic values, which is what makes the reading below legitimate; what is lost is the uniform bound of our Neumann theorem, so the convergence must be justified case by case. What does carry over is the *mechanism* that Arfken, Weber and Harris describe on p. 1067: the series converges while the parameter stays inside the smallest characteristic value of the kernel. Here the parameter is fixed at $\lambda = 1$ and the kernel moves with the energy instead, so the statement becomes one about $k$: the wavenumbers at which the homogeneous equation $\chi = \mathcal{T}\chi$ has a nonzero solution are exactly the bound states and resonances of $U$, and these are what bound the convergence. The one-dimensional example below exhibits this with everything in closed form: the series diverges precisely at energies below the binding energy of the potential's single bound state.
- **The first Born approximation is not unitary.** By (B$'$) a real central potential gives a real $f_{\mathrm{B}}$. A real amplitude cannot satisfy the exact conservation identities, which couple the imaginary part of the forward amplitude to the total scattered intensity; the one-dimensional analogue is Strauss's $\lvert R\rvert^{2}+\lvert T\rvert^{2} = 1$, and the second example below shows the first Born approximation overshooting it by a computable amount. The defect is of second order in $U$, which is consistent: the approximation is first order.
- **When to expect accuracy.** Arfken, Weber and Harris state the practical rule: the Born approximation is expected to be best for weak potentials and high incident energy. Both halves are visible in (B): the amplitude is first order in $U$, so weak potentials are favoured; and at large $k$ the factor $e^{-i\mathbf{q}\cdot\mathbf{r}'}$ oscillates rapidly over the scatterer except in a narrow forward cone, so the scattered amplitude is small compared with the incident wave. A usable quantitative test is to measure the first neglected term against the incident wave at the scattering centre, $\lvert(\mathcal{T}\psi_{\mathrm{inc}})(\mathbf{0})\rvert\ll1$; the first example evaluates it.
- **The alternative.** When the series is useless — strong potential, low energy — one solves exactly instead, by separating variables and matching partial waves. Strauss carries this out for a hard sphere and reaches a closed-form series in spherical Bessel and Hankel functions (:ref[]{to=spec.spherical-bessel}). That route needs a geometry that separates; Born needs only that the potential be weak.
:::

:::method[A first Born cross-section]{provenance=original}
Given a potential energy $V$ and a beam energy $E$:

1. **Reduce.** Form $U = 2mV/\hbar^{2}$ and $k = \sqrt{2mE}/\hbar$. Confirm that $U$ decays fast enough to be treated as compactly supported; if $U$ is Coulombic, screen it and unscreen at the end.
2. **Momentum transfer.** Set $q = 2k\sin(\theta/2)$, noting that $q$ runs over $[0,2k]$ as $\theta$ runs over $[0,\pi]$.
3. **Transform.** Compute the unnormalised transform $\mathcal{F}U(\mathbf{q}) = \int e^{-i\mathbf{q}\cdot\mathbf{r}}U(\mathbf{r})\,\mathrm{d}^{3}r$ of the note. For a central $U$ use the radial form of step 5 of the proof,
   $$
   \mathcal{F}U(q) = \frac{4\pi}{q}\int_{0}^{\infty} r\,U(r)\sin(qr)\,\mathrm{d}r ,
   $$
   the one-dimensional sine transform of $rU(r)$. The same radial reduction is carried out in :ref[]{to=fourier.fourier-transform-rn}, but for the symmetric transform, where it reads $\tilde U(q) = (2\pi)^{-3/2}(4\pi/q)\int_{0}^{\infty} rU(r)\sin(qr)\,\mathrm{d}r$; a transform taken from that unit, or from its table of examples, must therefore be multiplied by $(2\pi)^{3/2} = 15.7496\ldots$ before it enters step 4.
4. **Amplitude.** $f_{\mathrm{B}} = -\mathcal{F}U(q)/4\pi$, and $\mathrm{d}\sigma/\mathrm{d}\Omega = \lvert f_{\mathrm{B}}\rvert^{2}$.
5. **Total cross-section.** Change variable from $\theta$ to $q$. Since $q^{2} = 2k^{2}(1-\cos\theta)$ gives $q\,\mathrm{d}q = k^{2}\sin\theta\,\mathrm{d}\theta$,
   $$
   \sigma = 2\pi\int_{0}^{\pi}\lvert f_{\mathrm{B}}\rvert^{2}\sin\theta\,\mathrm{d}\theta
   = \frac{2\pi}{k^{2}}\int_{0}^{2k}\lvert f_{\mathrm{B}}(q)\rvert^{2}\,q\,\mathrm{d}q .
   $$
   This form is almost always the easier integral, and it displays the high-energy behaviour at a glance.
6. **Test the approximation.** Evaluate
   $$
   \varepsilon = \lvert(\mathcal{T}\psi_{\mathrm{inc}})(\mathbf{0})\rvert
   = \frac{1}{k}\left\lvert\int_{0}^{\infty} e^{ikr}\,U(r)\,\sin(kr)\,\mathrm{d}r\right\rvert
   \quad(\text{central } U),
   $$
   the size of the first correction to the wave at the scattering centre relative to the incident wave there. The radial form follows from the angular integral $\int e^{i\mathbf{k}_{0}\cdot\mathbf{r}'}\mathrm{d}\Omega' = 4\pi\sin(kr')/(kr')$. Accept the answer only if $\varepsilon\ll1$.
:::

:::example[A Gaussian potential]{provenance=original}
Take the repulsive Gaussian
$$
U(r) = U_{0}\,e^{-r^{2}/a^{2}},
\qquad U_{0}>0 .
$$
It is not compactly supported, so the proof does not apply to it verbatim: step 2 bounds the remainder by $\lvert R\rvert\le2a^{2}/r$ using $\lvert\mathbf{r}'\rvert\le a$ exactly, and here $U$ is nowhere zero. The repair is to cut the potential at radius $Ca$. The truncated potential is a scatterer in the sense of the definition, so every estimate of the proof applies to it with $a$ replaced by $Ca$; and the discarded tail is small, since $\lvert U\rvert\le U_{0}e^{-C^{2}}$ there and
$$
\int_{\lvert\mathbf{r}'\rvert>Ca}\lvert U\rvert\,\mathrm{d}^{3}r'
= 4\pi U_{0}a^{3}\int_{C}^{\infty}u^{2}e^{-u^{2}}\,\mathrm{d}u
= O\bigl(U_{0}a^{3}C\,e^{-C^{2}}\bigr),
$$
so cutting it changes the amplitude — and every other integral below — by $O(e^{-C^{2}})$, uniformly in $q$. Since $C$ may be taken as large as one pleases, the formulas computed below from the full Gaussian are exact.

**The amplitude.** Step 3 of the method needs $\int_{0}^{\infty}re^{-r^{2}/a^{2}}\sin(qr)\,\mathrm{d}r$. The integrand is even in $r$, so the integral is half the integral over $\mathbb{R}$, which is the imaginary part of
$$
\tfrac12\int_{-\infty}^{\infty} r\,e^{-r^{2}/a^{2}}e^{iqr}\,\mathrm{d}r
= \tfrac12\,\frac{1}{i}\frac{\mathrm{d}}{\mathrm{d}q}\int_{-\infty}^{\infty} e^{-r^{2}/a^{2}}e^{iqr}\,\mathrm{d}r
= \tfrac12\,\frac{1}{i}\frac{\mathrm{d}}{\mathrm{d}q}\Bigl(a\sqrt{\pi}\,e^{-q^{2}a^{2}/4}\Bigr)
= \frac{i\sqrt{\pi}a^{3}q}{4}e^{-q^{2}a^{2}/4}.
$$
Hence $\int_{0}^{\infty}re^{-r^{2}/a^{2}}\sin(qr)\,\mathrm{d}r = \tfrac14\sqrt{\pi}a^{3}q\,e^{-q^{2}a^{2}/4}$ and, by (B$'$),
$$
f_{\mathrm{B}}(q) = -\frac{\sqrt{\pi}}{4}\,U_{0}a^{3}\,e^{-q^{2}a^{2}/4} .
$$
The amplitude is a Gaussian in the momentum transfer, of width $2/a$: a scatterer of size $a$ deflects through angles up to about $1/(ka)$ and little beyond. The sign is negative, as it must be for a repulsive potential in this convention.

**The cross-sections.** $\mathrm{d}\sigma/\mathrm{d}\Omega = \tfrac{1}{16}\pi U_{0}^{2}a^{6}e^{-q^{2}a^{2}/2}$, and step 5 gives
$$
\sigma = \frac{2\pi}{k^{2}}\cdot\frac{\pi U_{0}^{2}a^{6}}{16}\int_{0}^{2k} e^{-q^{2}a^{2}/2}q\,\mathrm{d}q
= \frac{\pi^{2}U_{0}^{2}a^{4}}{8k^{2}}\Bigl(1-e^{-2k^{2}a^{2}}\Bigr).
$$
Two limits are worth noting. At low energy, $ka\ll1$, the bracket is $2k^{2}a^{2}+O(k^{4}a^{4})$ and $\sigma\to\tfrac14\pi^{2}U_{0}^{2}a^{6}$, a constant: the scattering becomes isotropic and energy-independent, which is what $f_{\mathrm{B}}(q)\to f_{\mathrm{B}}(0)$ says. At high energy the bracket saturates at $1$ and $\sigma\sim\pi^{2}U_{0}^{2}a^{4}/8k^{2}$, falling off as $1/E$.

**Numbers.** Measure lengths in units of $a$ and take the dimensionless strength $U_{0}a^{2} = 1$ at $ka = 1$. Then, in units of $a$ and $a^{2}$,
$$
f_{\mathrm{B}}(0) = -\frac{\sqrt{\pi}}{4} = -0.4431135,
\qquad
\left.\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega}\right|_{\theta=0} = \frac{\pi}{16} = 0.1963495 ,
$$
and at $\theta = \pi$, where $q = 2k$, so that the amplitude's exponent $-q^{2}a^{2}/4$ is $-1$ and the cross-section's is $-2$,
$$
\left.\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega}\right|_{\theta=\pi} = \frac{\pi}{16}e^{-2} = 0.02657302 ,
$$
so forward scattering beats backward scattering by the factor $e^{2} = 7.389$. The total cross-section is
$$
\sigma = \frac{\pi^{2}}{8}\bigl(1-e^{-2}\bigr) = 1.2337006\times0.8646647 = 1.0667373 \;a^{2} ,
$$
the number to check the whole calculation against. It is about a third of the geometric cross-section $\pi a^{2} = 3.1415927\,a^{2}$ of a disc of radius $a$, which is the right order of magnitude for a soft scatterer of that size.

**Is it any good?** Step 6 gives
$$
\varepsilon = \frac{1}{k}\left\lvert\int_{0}^{\infty} e^{ikr}U_{0}e^{-r^{2}/a^{2}}\sin(kr)\,\mathrm{d}r\right\rvert
= \left\lvert\int_{0}^{\infty} e^{ir-r^{2}}\sin r\,\mathrm{d}r\right\rvert
= \lvert 0.2690398+0.2801011\,i\rvert
= 0.3884 ,
$$
in the same units. That is not small: the wave at the centre of the scatterer differs from the incident wave by nearly $40\%$, and the computed cross-section should be read as an order of magnitude, not a prediction. Weakening the potential to $U_{0}a^{2} = 0.2$ at the same energy scales $\varepsilon$ to $0.0777$ and $\sigma$ to $0.04\times1.0667373 = 0.04266949\,a^{2}$, and there the first Born approximation is worth quoting.
:::

:::example[A delta potential in one dimension: summing the whole Born series]{provenance=original}
In one dimension everything above can be carried out exactly, which makes the example the honest test of the method. Two warnings first: the potential below is one-dimensional and it is a measure, not a bounded function, so it is not a scatterer in the sense of the definition and neither the definition nor the statement applies to it. Nothing is inherited from them here. The Lippmann-Schwinger equation, the Born series and the amplitudes are all rederived from scratch in closed form, and the one general fact invoked at the end --- that the series converges up to the smallest characteristic value --- is verified directly against the exact answer rather than quoted. The equation is $\psi''+k^{2}\psi = U\psi$ with
$$
U(x) = u_{0}\,\delta(x),
$$
$u_{0}$ real with the dimensions of an inverse length; in the Schrodinger reading, $u_{0} = 2m\alpha/\hbar^{2}$ for a potential energy $\alpha\delta(x)$. The outgoing Green's function of $\mathrm{d}^{2}/\mathrm{d}x^{2}+k^{2}$ is $G_{1}(x) = -\tfrac{i}{2k}e^{ik\lvert x\rvert}$ (:ref[]{to=green.helmholtz-green-functions}), the incident wave is $e^{ikx}$ travelling to the right, and (LS) reads
$$
\psi(x) = e^{ikx} - \frac{iu_{0}}{2k}\,e^{ik\lvert x\rvert}\,\psi(0).
$$
The delta has collapsed the integral entirely: the only unknown left is the single number $\psi(0)$.

**Exact solution.** Setting $x = 0$,
$$
\psi(0) = 1 - \frac{iu_{0}}{2k}\psi(0)
\quad\Longrightarrow\quad
\psi(0) = \frac{1}{1+iu_{0}/2k} = \frac{2k}{2k+iu_{0}} .
$$
Reading off the two ends — with the beam coming in from the left, so that $e^{ikx}$ is the incident wave and the reflection and transmission coefficients $R$ and $T$ are defined by the far-field behaviour exactly as in Strauss's §13.4 (his beam arrives from the other side, which only swaps the roles of the two ends) —
$$
\psi(x)\to T e^{ikx}\ (x\to+\infty),
\qquad
\psi(x)\to e^{ikx}+Re^{-ikx}\ (x\to-\infty),
$$
$$
T = \frac{2k}{2k+iu_{0}},
\qquad
R = -\frac{iu_{0}}{2k}\,\psi(0) = \frac{-iu_{0}}{2k+iu_{0}} .
$$
These satisfy $\lvert R\rvert^{2}+\lvert T\rvert^{2} = (u_{0}^{2}+4k^{2})/(4k^{2}+u_{0}^{2}) = 1$, which is Strauss's Theorem 1 — a check on the exact solution, not an assumption in it.

**The Born series.** Iterating instead of solving gives $\psi(0) = \sum_{n\ge0}(-iu_{0}/2k)^{n}$, a geometric series with ratio $-iu_{0}/2k$. So the Born series converges if and only if
$$
\frac{\lvert u_{0}\rvert}{2k} < 1,
$$
and when it does it sums to the exact $\psi(0)$ above. The $n$-th Born approximation keeps $n$ terms.

**Where the divergence comes from.** For an attractive delta, $u_{0}<0$, the transmission coefficient $T(k) = 2k/(2k+iu_{0})$ has a pole at $k = i\lvert u_{0}\rvert/2$, that is at energy $k^{2} = -u_{0}^{2}/4$: the single bound state of the delta well, whose wavefunction $e^{-\lvert u_{0}\rvert\lvert x\rvert/2}$ one checks directly from the jump condition $\psi'(0^{+})-\psi'(0^{-}) = u_{0}\psi(0)$. The Born series converges exactly when $k>\lvert u_{0}\rvert/2$, that is when the incident energy $k^{2}$ exceeds the binding energy $u_{0}^{2}/4$. This is the general rule of :ref[]{to=green.neumann-series}, made concrete: the radius of convergence is set by the characteristic value of the kernel, and the characteristic value is the bound state.

**Numbers.** Take $u_{0} = 1$ and $k = 2$, so that the ratio is $u_{0}/2k = 1/4$ and the series converges comfortably. The exact coefficients are
$$
T = \frac{4}{4+i} = \frac{16-4i}{17},
\qquad
R = \frac{-i}{4+i} = \frac{-1-4i}{17},
$$
$$
\lvert T\rvert^{2} = \frac{16}{17} = 0.9411765,
\qquad
\lvert R\rvert^{2} = \frac{1}{17} = 0.0588235,
\qquad
\lvert R\rvert^{2}+\lvert T\rvert^{2} = 1 .
$$
The first Born approximation replaces $\psi(0)$ by $1$:
$$
R_{1} = -\frac{i}{4},
\qquad
T_{1} = 1-\frac{i}{4},
\qquad
\lvert R_{1}\rvert^{2} = \frac{1}{16} = 0.0625,
\qquad
\lvert T_{1}\rvert^{2} = \frac{17}{16} = 1.0625 .
$$
Three things are visible at once. The reflected intensity is too large by $1/16-1/17 = 1/272$, a relative error of $6.25\%$. That is the *square* of the series ratio $u_{0}/2k = \tfrac14$, and exactly so: $R = R_{1}/(1+iu_{0}/2k)$, hence $\lvert R\rvert^{2} = \lvert R_{1}\rvert^{2}/(1+u_{0}^{2}/4k^{2})$, and the intensity is quadratic in an amplitude whose next correction is one ratio down. The transmitted intensity exceeds $1$, which is impossible. And the total
$$
\lvert R_{1}\rvert^{2}+\lvert T_{1}\rvert^{2} = \frac{18}{16} = 1.125
$$
breaks Strauss's identity by $12.5\%$, which is $2(u_{0}/2k)^{2}$: the unitarity defect is second order in the potential, exactly the order the first Born approximation drops.

Going to second order, $\psi(0)\approx1-i/4$, gives $R_{2} = -\tfrac{1}{16}-\tfrac{i}{4}$ and $T_{2} = \tfrac{15}{16}-\tfrac{i}{4}$, with
$$
\lvert R_{2}\rvert^{2}+\lvert T_{2}\rvert^{2} = \frac{17}{256}+\frac{241}{256} = \frac{258}{256} = 1.0078125 ,
$$
a defect of $0.78\%$ instead of $12.5\%$. The series repairs unitarity order by order, and no truncation of it ever has unitarity exactly.
:::

:::application{provenance=original}
**Diffraction measures a Fourier transform.** Formula (B) is the reason that scattering is the standard tool for looking at structure. In the first Born approximation the measured intensity is
$$
\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \frac{1}{16\pi^{2}}\bigl\lvert\mathcal{F}U(\mathbf{q})\bigr\rvert^{2},
$$
the squared modulus of the Fourier transform of the scatterer at the momentum transfer $\mathbf{q}$. Rotating the sample and scanning the angle scans $\mathbf{q}$ over a ball of radius $2k$, so a diffraction experiment is a measurement of $\mathcal{F}U$ on that ball. Three consequences are generic:

- *Resolution is set by the wavelength.* Since $q\le2k$, the finest spatial period recorded is the $\pi/k$ of the definition block — half a wavelength. This is why structural work uses X-rays and neutrons rather than light.
- *Only the modulus is measured.* The phase of $\mathcal{F}U(\mathbf{q})$ is lost, and recovering it is the phase problem of crystallography. For a central real potential $f_{\mathrm{B}}$ is real by (B$'$), so the lost information is only a sign — one reason that spherically averaged scattering is easier to invert than single-crystal diffraction.
- *Weak scattering is a feature.* The approximation is linear in $U$, so the inverse problem — infer $U$ from the data — is linear too, and can be solved by an inverse Fourier transform. Multiple scattering, that is the later terms of the Born series, makes the inverse problem nonlinear. The same linearisation under the same name is used in diffraction tomography and in seismic imaging, where it plays the role that the projection-slice theorem plays for straight-ray tomography (:ref[]{to=pde.radon-transform}).

**Rutherford's cross-section as a screened limit.** Take the screened Coulomb (Yukawa) potential
$$
V(r) = \frac{Z_{1}Z_{2}e^{2}}{4\pi\epsilon_{0}}\frac{e^{-\mu r}}{r},
\qquad\text{so}\qquad
U(r) = \beta\frac{e^{-\mu r}}{r},
\quad
\beta = \frac{2m}{\hbar^{2}}\frac{Z_{1}Z_{2}e^{2}}{4\pi\epsilon_{0}} .
$$
Then (B$'$) needs only $\int_{0}^{\infty}e^{-\mu r}\sin(qr)\,\mathrm{d}r = q/(\mu^{2}+q^{2})$, giving
$$
f_{\mathrm{B}}(q) = -\frac{\beta}{\mu^{2}+q^{2}} .
$$
Equivalently $\mathcal{F}\bigl(e^{-\mu r}/r\bigr)(q) = 4\pi/(\mu^{2}+q^{2})$. The same Yukawa transform is listed in :ref[]{to=fourier.fourier-transform-rn} in that unit's symmetric normalisation, as $(2\pi)^{-3/2}\cdot4\pi/(q^{2}+\mu^{2})$; it is our value divided by $(2\pi)^{3/2}$, as the note says it must be.
Letting the screening length $1/\mu$ grow without bound and using $q = 2k\sin(\theta/2)$ together with $\hbar^{2}k^{2}/2m = E$,
$$
\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \frac{\beta^{2}}{q^{4}}
= \left(\frac{\beta}{4k^{2}}\right)^{2}\frac{1}{\sin^{4}(\theta/2)}
= \left(\frac{Z_{1}Z_{2}e^{2}}{16\pi\epsilon_{0}E}\right)^{2}\frac{1}{\sin^{4}(\theta/2)} ,
$$
which is Rutherford's formula, including the constant. The result is famously better than it has any right to be: the remark above explains that the unscreened Coulomb potential does not satisfy the hypotheses under which $f$ was defined, and in fact the exact Coulomb amplitude differs from $f_{\mathrm{B}}$ by a phase — which the cross-section then discards.

**Beyond quantum mechanics.** Nothing in the derivation used quantum mechanics; it used $(\nabla^{2}+k^{2})\psi = U\psi$. The same equation governs a time-harmonic acoustic field in a medium whose sound speed varies, with $U = k^{2}(1-c_{0}^{2}/c(\mathbf{r})^{2})$, and a scalar electromagnetic field in a medium of varying refractive index, with $U = -k^{2}(n(\mathbf{r})^{2}-1)$. In both cases the first Born approximation is the statement that the field scattered by a weak inhomogeneity is the Fourier transform of the contrast, and the convergence condition of the Born series is the statement that multiple scattering inside the inhomogeneity may be neglected. Ultrasound imaging, optical coherence tomography and the interpretation of radar returns from weak targets all rest on it; when the contrast is large — a metal object, a gas bubble — the series fails and one is back to solving (LS), typically by discretising it into a linear system and applying the iterative methods of :ref[]{to=green.neumann-series}.
:::
