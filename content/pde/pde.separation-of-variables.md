---
id: pde.separation-of-variables
title: Separation of variables in standard coordinates
kind: method
level: core
summary: Gives the recipe for reducing Laplace's and Helmholtz's equations to ordinary differential equations by seeking product solutions, proves the lemma that makes the separation constants constant, carries the spherical case through in full, and catalogues which special functions - trigonometric, hyperbolic, Bessel, Legendre and spherical harmonic - each of the Cartesian, cylindrical and spherical systems produces.
prereqs: [vcalc.cylindrical-spherical, spec.spherical-harmonics, spec.bessel-first-kind, spec.bessel-second-kind-hankel, spec.bessel-orthogonality, spec.spherical-bessel, spec.modified-bessel, spec.associated-legendre, ode.sturm-liouville-theory, fourier.fourier-series]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§21.1, pp. 713–715: the product ansatz (21.1), the examples of separable and inseparable functions, the separation of the three-dimensional wave equation into the four ODEs (21.6) with separation constants satisfying one algebraic relation, and the solutions (21.7); §21.3, pp. 725–734: the Laplacians (21.23)–(21.25) in plane polars, cylindrical polars and spherical polars; Laplace's equation in plane polars, Eqs. (21.27)–(21.31), with single-valuedness forcing integer $n$ and the $n=0$ case; in cylindrical polars, Eqs. (21.32)–(21.35), with the radial equation becoming Bessel's equation of order $m$ under $\\mu = k\\rho$ and $Y_m$ rejected at $\\rho=0$; in spherical polars, Eqs. (21.38)–(21.49), with the radial equation solved by $r = e^t$ giving $r^\\ell$ and $r^{-(\\ell+1)}$ with $\\lambda = \\ell(\\ell+1)$, the angular equation reduced by $\\mu = \\cos\\theta$ to the associated Legendre equation (21.45), and $Q_\\ell^m$ rejected on the polar axis; pp. 734–737, the uncharged conducting sphere in a uniform field and the hollow split sphere with its coefficients $v_0/2$, $3v_0/4a$, $0$, $-7v_0/16a^3$ and the equator value $v_0/2$; pp. 729–731, the semi-infinite cylinder with its Fourier–Bessel coefficients; §21.3.2, pp. 737–741: the reduction of the wave and diffusion equations to Helmholtz's equation (21.53), Helmholtz in plane polars giving $J_m(k\\rho), Y_m(k\\rho)$ and the combined plane-polar solution Eq. (21.55) at the head of p. 739, the unnumbered three-dimensional cylindrical form on p. 740 with radial argument $\\sqrt{k^2-\\alpha^2}$ and axial factor $E\\mathrm{e}^{\\mathrm{i}\\alpha z}+F\\mathrm{e}^{-\\mathrm{i}\\alpha z}$, and in spherical polars the radial equation (21.56) reduced to Bessel's equation of order $\\ell+\\tfrac12$ by $R = r^{-1/2}S$, giving the separated solution (21.57) and the spherical Bessel functions; the remark that for any equation built from $\\nabla^2$ plus a function of $r$ the angular factors are always spherical harmonics"
    pages: "713-715, 725-741"
    role: the general method, the three coordinate systems worked through for both Laplace and Helmholtz, which solutions are rejected and why, and the catalogue of resulting special functions
  - work: hassani-2013
    loc: "§13.1, pp. 395–397: the list of the standard PDEs (Poisson, Laplace, heat, wave, Schrödinger, Klein–Gordon), the separation of time by $\\Psi(\\mathbf{r},t) = R(\\mathbf{r})T(t)$ with $S$ standing for the spatial operator, the argument that each side of (13.7) must be the constant $\\alpha$, the resulting ODE (13.8) in $t$ and the master equation $\\nabla^2\\Psi + f(\\mathbf{r})\\Psi = 0$ (13.9); the footnote that $\\alpha$ is taken purely imaginary for the Schrödinger equation; §13.2, pp. 398–400: the operator identity $\\nabla^2 = -r^{-2}L^2 + r^{-2}(\\mathbf{r}\\cdot\\nabla)(\\mathbf{r}\\cdot\\nabla) + r^{-2}\\mathbf{r}\\cdot\\nabla$ (13.11)–(13.12), and the splitting of (13.9) with $f = f(r)$ into $L^2Y = \\alpha Y$ (13.13) and the radial equation (13.14)"
    pages: "395-400"
    role: the separation of time as the first step, the single homogeneous master equation it leaves, and the operator form of the angular/radial split
  - work: arfken-2013
    loc: "§9.4 (Separation of Variables), whose heading is at the foot of p. 414: the description of the method and the count of $n-1$ independent separation constants for $n$ independent variables, p. 415; ‘Cartesian Coordinates’, pp. 415–417, the separation of the Helmholtz equation into $X''/X = -l^2$ and its partners with $l^2+m^2+n^2 = k^2$, Eqs. (9.29)–(9.41); ‘Circular Cylindrical Coordinates’, pp. 421–422, the axial equation $Z'' = l^2Z$ (9.58), the azimuthal equation (9.62) with integer $m$ forced by $2\\pi$-periodicity, the abbreviation $n^2 = k^2+l^2$ (9.60), and the radial equation (9.63), which is Bessel’s equation in the variable $n\\rho$, together with the footnote on p. 421 that the signs of the separation constants are a matter of choice; ‘Spherical Polar Coordinates’, pp. 424–427, the azimuthal equation (9.74), the polar equation (9.77) turned by $t = \\cos\\theta$ into the associated Legendre equation (9.79) whose nonsingular solutions force $\\lambda = l(l+1)$ with $l$ a non-negative integer and $l\\ge\\lvert m\\rvert$ (p. 426), the radial equation (9.80), its Laplace solutions $r^l$ and $r^{-l-1}$ (9.81), and the substitution $R = Z(kr)/(kr)^{1/2}$ (9.83) reducing the Helmholtz case to Bessel’s equation of order $l+\\tfrac12$ (9.84)"
    pages: "414-417, 421-427"
    role: a second, independently organized account of the same three separations, used as a check on the equations, on the sign conventions for the separation constants, and on the count of independent constants
  - work: evans-2010
    loc: "§4.1.1, pp. 159–163: separation of variables introduced as one of several techniques for finding more-or-less explicit solutions, with the heat equation separated as $u = v(t)w(x)$ into $v' = \\mu v$ and $\\Delta w = \\mu w$, the eigenvalue problem $-\\Delta w = \\lambda w$ in $U$ with $w = 0$ on $\\partial U$, the series $u = \\sum_k d_k\\mathrm{e}^{-\\lambda_k t}w_k$, and the warning (p. 161) that the separation itself yields only the single product, the sums and series resting on linearity and on a completeness statement deferred to his Chapters 6 and 7"
    pages: "159-163"
    role: the framing of separation of variables as one of the explicit-solution techniques, and the point that superposition and completeness are separate steps the method does not supply
---

:::definition[Separable solutions and separation constants]{provenance=adapted src="rhb-2006:§21.1, Eq. (21.1), pp. 713–714; hassani-2013:§13.1, pp. 396–397"}
Let a linear partial differential equation be given in independent variables $x_1,\dots,x_N$. A solution of the **product form**

$$
u(x_1,\dots,x_N) = X_1(x_1)\,X_2(x_2)\cdots X_N(x_N) \tag{1}
$$

is called **separable** in those variables, and looking for solutions of the form (1) is the **method of separation of variables**. The requirement is only that each factor depend on one variable alone; the factors may, and usually do, share numerical parameters. Riley, Hobson and Bence illustrate the distinction with three functions of $(x,y,z,t)$: $xyz^2\sin bt$ separates completely; $(x^2+y^2)z\cos\omega t$ separates in the last two variables only, since the first two occur in a sum that cannot be factored out; and $xy + zt$ separates in none of them.

The parameters that appear when (1) is substituted into the equation are the **separation constants**. In the examples below they turn out to be the eigenvalues of the ordinary differential operators that the method produces, so the special functions of mathematical physics enter as the eigenfunctions.

Throughout we use the Laplacian in the three standard systems (:ref[cylindrical and spherical coordinates]{to=vcalc.cylindrical-spherical}): with $\rho$ the distance from the $z$-axis, $\varphi$ the azimuth and $r$ the distance from the origin,

$$
\nabla^2 = \frac1\rho\frac{\partial}{\partial\rho}\!\left(\rho\frac{\partial}{\partial\rho}\right) + \frac{1}{\rho^2}\frac{\partial^2}{\partial\varphi^2} \qquad\text{(plane polars)},
$$

$$
\nabla^2 = \frac1\rho\frac{\partial}{\partial\rho}\!\left(\rho\frac{\partial}{\partial\rho}\right) + \frac{1}{\rho^2}\frac{\partial^2}{\partial\varphi^2} + \frac{\partial^2}{\partial z^2} \qquad\text{(cylindrical polars)},
$$

$$
\nabla^2 = \frac{1}{r^2}\frac{\partial}{\partial r}\!\left(r^2\frac{\partial}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\!\left(\sin\theta\frac{\partial}{\partial\theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial\varphi^2} \qquad\text{(spherical polars)} .
$$

The two equations to be separated are **Laplace's equation** $\nabla^2u = 0$ and the **Helmholtz equation** $\nabla^2 u + k^2u = 0$, which reduces to Laplace's when $k = 0$.
:::

:::statement[The separation lemma]{provenance=original}
Let $A \subseteq \mathbb{R}^p$ and $B\subseteq\mathbb{R}^q$ be nonempty sets, let $F : A\to\mathbb{R}$ and $G : B\to\mathbb{R}$, and suppose

$$
F(\mathbf{s}) + G(\mathbf{t}) = 0 \qquad\text{for all } \mathbf{s}\in A,\ \mathbf{t}\in B . \tag{2}
$$

Then $F$ and $G$ are each constant, with $G \equiv -\lambda$ and $F\equiv\lambda$ for a single number $\lambda$.
:::

:::idea{provenance=original}
This is the only genuine piece of logic in the method, and it is a one-line argument: in (2) the variables $\mathbf{s}$ and $\mathbf{t}$ may be moved independently, so freezing one of them exhibits the other's function as a constant. Everything else in separation of variables is calculus and bookkeeping. It is worth stating the lemma separately because the textbook phrase "a function of $x$ alone equals a function of $y$ alone, so both are constant" is used dozens of times in what follows, and because it makes visible what the method actually needs: that the variables range over a *product* set, which is exactly the condition that fails on a domain not bounded by coordinate surfaces.
:::

:::proof{provenance=original}
**Step 1.** Fix any $\mathbf{t}_0 \in B$ and set $\lambda = -G(\mathbf{t}_0)$. Putting $\mathbf{t} = \mathbf{t}_0$ in (2) gives $F(\mathbf{s}) = -G(\mathbf{t}_0) = \lambda$ for every $\mathbf{s}\in A$. So $F$ is the constant $\lambda$.

**Step 2.** Substituting $F \equiv \lambda$ back into (2) gives $G(\mathbf{t}) = -\lambda$ for every $\mathbf{t}\in B$. So $G$ is the constant $-\lambda$. $\square$
:::

:::method[Separation of variables]{provenance=adapted src="rhb-2006:§21.1, pp. 714–715 and §21.3, pp. 725–734; hassani-2013:§13.1, pp. 396–397; arfken-2013:§9.4, pp. 414–415"}
1. **Choose coordinates that fit the boundary.** Pick a coordinate system in which every piece of the boundary is a level surface of one coordinate: a box in Cartesians, a disk or annulus or wedge in plane polars, a cylinder in cylindrical polars, a ball or spherical shell in spherical polars. This is the step that decides whether the method will work at all.
2. **Separate the time, if there is any.** Write $\Psi(\mathbf{r},t) = u(\mathbf{r})T(t)$ and let $S$ denote the whole spatial operator, so that the equation reads $S\Psi = \partial\Psi/\partial t$ (heat, Schrödinger) or $S\Psi = \partial^2\Psi/\partial t^2$ (wave, Klein–Gordon). Dividing by $uT$ puts a function of $\mathbf{r}$ on one side and a function of $t$ on the other; by the separation lemma both equal a constant, Hassani's $\alpha$, and one is left with an ODE in $t$ and a *homogeneous* equation in space,
   $$
   \nabla^2u(\mathbf{r}) + f(\mathbf{r})u(\mathbf{r}) = 0 , \tag{3}
   $$
   which is Hassani's master equation. (Hassani writes the product as $\Psi = RT$ and then lets the letter $\Psi$ stand for the spatial factor as well in his master equation; we reserve $\Psi$ for the full solution and call the spatial factor $u$, which is the letter steps 3–7 and the rest of this unit use, so that $u$ in (3) and $u$ in step 3 are the same object.) For the heat and wave equations $f$ is the constant $k^2$ and (3) is Helmholtz's equation; for the Schrödinger equation $f(\mathbf{r}) = 2m(E - V(\mathbf{r}))/\hbar^2$. Hassani notes that $\alpha$ is conventionally taken real except for the Schrödinger equation, where a purely imaginary $\alpha$ is more convenient because it cancels the $i$ in the equation, and that in every case the admissible $\alpha$ are fixed by the boundary conditions, not by the separation. This time-separation constant is used nowhere else in the unit; the letter $\alpha$ is reused below, in the cylindrical catalogue and the cylinder example, for the unrelated axial separation constant.
3. **Posit a product and divide by it.** Substitute $u = X_1X_2\cdots X_N$ into (3) and divide the result by $u$. Then multiply by whatever factor (typically $r^2$ or $\rho^2$) is needed to make one variable appear in one group of terms only.
4. **Introduce separation constants.** Apply the separation lemma to each split, naming the constants in whatever algebraic form will be convenient later — $-n^2$, $k^2$, $\ell(\ell+1)$. With $N$ variables there are $N-1$ independent constants, and in a Cartesian separation of the wave equation they satisfy one algebraic relation among themselves, as in Riley, Hobson and Bence's example where $\mu^2 = l^2+m^2+n^2$.
5. **Impose the conditions the coordinates hide.** These are not boundary conditions in the physical sense, and forgetting them is the commonest error:
   - *Single-valuedness in an angle.* $\Phi(\varphi+2\pi) = \Phi(\varphi)$ forces the azimuthal separation constant to be $m^2$ with $m$ an integer. (The exception is a genuinely multivalued potential, such as the magnetic scalar potential of a current, where Riley, Hobson and Bence keep the term $\Phi = C\varphi + D$ with $C = I/2\pi$.)
   - *Regularity at the origin or on the axis.* If the region contains $\rho = 0$ or $r = 0$, discard $\rho^{-m}$, $\ln\rho$, $r^{-(\ell+1)}$, $Y_m(k\rho)$, $y_\ell(kr)$. If it contains the polar axis $\theta = 0,\pi$, discard $Q_\ell^m(\cos\theta)$.
   - *Behaviour at infinity.* On an unbounded exterior region, discard the solutions that grow.
   What is left after these deletions is an eigenvalue problem of :ref[Sturm–Liouville]{to=ode.sturm-liouville-theory} type in each variable, and the admissible separation constants are its eigenvalues.
6. **Read off the special functions.** Each separated ODE is one of a short list, and its solutions are the classical special functions; the catalogue is in the note below.
7. **Superpose, and fit the inhomogeneous data by orthogonality.** A single product rarely satisfies the given data. Sum over all admissible separation constants and determine the coefficients from the one inhomogeneous condition by the orthogonality of the eigenfunctions: Fourier coefficients for $\cos m\varphi,\sin m\varphi$, Fourier–Bessel coefficients for $J_m(k_n\rho)$ (:ref[orthogonality and Fourier–Bessel series]{to=spec.bessel-orthogonality}), Legendre coefficients for $P_\ell(\cos\theta)$, and the full double sum over $\ell$ and $m$ in spherical harmonics (:ref[spherical harmonics]{to=spec.spherical-harmonics}) when the data are not axially symmetric.
:::

:::note[Catalogue of separated equations]{provenance=adapted src="rhb-2006:§21.1, Eqs. (21.6)–(21.7), p. 715, §21.3.1, Eqs. (21.27)–(21.49), pp. 726–734, and §21.3.2, Eqs. (21.52)–(21.57), pp. 737–741; arfken-2013:§9.4, Eqs. (9.29)–(9.41), pp. 415–417, Eqs. (9.58)–(9.63), pp. 421–422, and Eqs. (9.74)–(9.84), pp. 424–427"}
For the Helmholtz equation $\nabla^2u + k^2u = 0$; Laplace's equation is the case $k = 0$ throughout. In each system the product is substituted and the equation divided by it, which is legitimate only where no factor vanishes; as in the proof below, the separated ODEs listed here then hold on the whole of each coordinate interval because both sides of each are continuous.

**Cartesian, $u = X(x)Y(y)Z(z)$.** With constants $-l^2, -m^2, -n^2$,

$$
X'' = -l^2X, \qquad Y'' = -m^2Y, \qquad Z'' = -n^2Z, \qquad l^2+m^2+n^2 = k^2 .
$$

Each factor is $Ae^{i l x} + Be^{-ilx}$: a sine and cosine pair if $l^2>0$; a pair of exponentials $e^{\pm\beta x}$, equivalently $\sinh\beta x$ and $\cosh\beta x$, if $l^2<0$, where $\beta = \sqrt{-l^2}$ is real and $l = \mathrm{i}\beta$ is imaginary (the exponent is the real number $\sqrt{-l^{2}}$, not $\sqrt{l^{2}} = \pm l$, which is imaginary here); and the linear function $A + Bx$ if $l^2 = 0$. For Laplace's equation ($k=0$) the three constants sum to zero, so they cannot all share a sign: either one of them vanishes, or one has the opposite sign to another. So *Laplace's equation in a box never produces an oscillating factor in every direction*; some direction carries hyperbolic or linear behaviour instead, which is why a Dirichlet datum on one face decays into the box.

**Plane polars, $u = P(\rho)\Phi(\varphi)$.** With constant $n^2$,

$$
\Phi'' + n^2\Phi = 0, \qquad \rho^2P'' + \rho P' + \bigl(k^2\rho^2 - n^2\bigr)P = 0 .
$$

Single-valuedness makes $n$ an integer. For $k = 0$ the radial equation is the Euler equation $\rho^2P''+\rho P' - n^2P = 0$ with solutions $\rho^{\,n},\rho^{-n}$ (and $1,\ln\rho$ when $n = 0$); for $k\ne0$ the substitution $\mu = k\rho$ turns it into Bessel's equation of order $n$, with solutions $J_n(k\rho)$ and $Y_n(k\rho)$. Riley, Hobson and Bence warn against confusing $Y_n$, the Bessel function of the second kind, with a spherical harmonic $Y_\ell^m$; the latter carries two indices.

**Cylindrical polars, $u = P(\rho)\Phi(\varphi)Z(z)$.** With constants $m^2$ (azimuthal) and $\alpha^2$ (axial),

$$
\Phi'' + m^2\Phi = 0, \qquad Z'' = \alpha^2 Z, \qquad \rho^2P'' + \rho P' + \bigl[(k^2+\alpha^2)\rho^2 - m^2\bigr]P = 0 .
$$

So the solutions are

$$
u = \bigl[A J_m\bigl(\sqrt{k^2+\alpha^2}\,\rho\bigr) + BY_m\bigl(\sqrt{k^2+\alpha^2}\,\rho\bigr)\bigr]\,\bigl[C\cos m\varphi + D\sin m\varphi\bigr]\,\bigl[Ee^{\alpha z}+Fe^{-\alpha z}\bigr] .
$$

*The sign convention in the axial constant.* We write the axial equation as $Z'' = \alpha^2Z$, so that a real $\alpha$ gives exponential behaviour in $z$ and an imaginary $\alpha$ oscillatory behaviour; substituting back into $\nabla^2u + k^2u = 0$ then puts $k^2 + \alpha^2$, not $k^2-\alpha^2$, in the radial equation. Riley, Hobson and Bence write the axial factor as $E\mathrm{e}^{\mathrm{i}\alpha z} + F\mathrm{e}^{-\mathrm{i}\alpha z}$ (p. 740), that is $Z'' = -\alpha^2Z$, and their radial argument is correspondingly $\sqrt{k^2-\alpha^2}$. The two conventions differ only by $\alpha\mapsto\mathrm{i}\alpha$; everything here and in the cylinder example below is in ours.

For Laplace's equation ($k = 0$) the radial argument is $\alpha$ and the solution is $[AJ_m(\alpha\rho)+BY_m(\alpha\rho)][C\cos m\varphi + D\sin m\varphi][Ee^{\alpha z}+Fe^{-\alpha z}]$: Bessel functions radially, trigonometric functions azimuthally, exponentials axially. (Riley, Hobson and Bence call the axial constant $k$ in this case and write the same solution as $[AJ_m(k\rho)+BY_m(k\rho)][C\cos m\varphi+D\sin m\varphi][Ee^{-kz}+Fe^{kz}]$, Eq. (21.35).) When $k^2 + \alpha^2 < 0$ the radial argument becomes imaginary and the Bessel functions are replaced by the :ref[modified Bessel functions]{to=spec.modified-bessel} $I_m, K_m$.

**Spherical polars, $u = R(r)\Theta(\theta)\Phi(\varphi)$.** With constants $\ell(\ell+1)$ and $m^2$,

$$
\Phi'' + m^2\Phi = 0, \qquad
\frac{1}{\sin\theta}\frac{d}{d\theta}\!\left(\sin\theta\frac{d\Theta}{d\theta}\right) + \left[\ell(\ell+1) - \frac{m^2}{\sin^2\theta}\right]\Theta = 0 ,
$$
$$
r^2R'' + 2rR' + \bigl[k^2r^2 - \ell(\ell+1)\bigr]R = 0 .
$$

The polar equation becomes the associated Legendre equation under $\mu = \cos\theta$, with solutions $P_\ell^m(\mu)$ and $Q_\ell^m(\mu)$ (:ref[associated Legendre functions]{to=spec.associated-legendre}), finite polynomial solutions requiring $\ell$ a non-negative integer and $0\le\lvert m\rvert\le\ell$; the product $\Theta\Phi$ regular on the axis is the spherical harmonic $Y_\ell^m(\theta,\varphi)$. The radial equation for $k = 0$ is the Euler equation with solutions $r^\ell$ and $r^{-(\ell+1)}$; for $k\ne0$ the substitution $R = r^{-1/2}S$ with $\mu = kr$ reduces it to Bessel's equation of order $\ell+\tfrac12$, so that $R = r^{-1/2}J_{\ell+1/2}(kr)$ or $r^{-1/2}Y_{\ell+1/2}(kr)$, which after normalization are the :ref[spherical Bessel functions]{to=spec.spherical-bessel} $j_\ell(kr)$ and $y_\ell(kr)$.
:::

:::statement[The separated solutions in spherical polars]{provenance=adapted src="rhb-2006:§21.3.1, Eqs. (21.42)–(21.49), pp. 732–734 and §21.3.2, Eqs. (21.56)–(21.57), pp. 740–741"}
Let $u = R(r)\Theta(\theta)\Phi(\varphi)$ be a solution of Laplace's equation $\nabla^2u = 0$ of product form on a region that is a product of coordinate intervals in $r \in (0,\infty)$, $\theta\in(0,\pi)$ and $\varphi$, where the spherical coordinates are regular. Let the three factors be twice continuously differentiable, and let none of them vanish identically. (Note what this last hypothesis does *not* say: it does not make $u$ itself nonvanishing, and indeed $u$ vanishes somewhere inside the region in all but the simplest cases. Step 1 of the proof shows that this weaker hypothesis is nevertheless all the separation needs.)

**1. What the separation alone gives.** There are constants $m^2$ and $\lambda = \ell(\ell+1)$ — complex numbers, subject to no further restriction — such that $\Phi'' = -m^2\Phi$, such that $M(\mu) = \Theta(\theta)$ with $\mu = \cos\theta$ solves the :ref[associated Legendre equation]{to=spec.associated-legendre} with those parameters, and such that $R$ solves the Euler equation $r^2R'' + 2rR' - \ell(\ell+1)R = 0$. Those three ODEs are the entire content of the separation.

Naming their solutions takes a little care, because the parameters are so far unrestricted. Here $P_\ell^m$ and $Q_\ell^m$ denote that equation’s two standard solutions — Legendre’s function of first kind, and the one of second kind — taken at complex degree $\ell$ and order $m$; :ref[associated Legendre functions]{to=spec.associated-legendre} defines them only for an integer $\ell\ge0$ with $\lvert m\rvert\le\ell$, which is the only case used from part 2 onwards. Generically — that is, for parameters with $\ell\ne-\tfrac12$ and $m\ne0$ at which $P_\ell^m$ and $Q_\ell^m$ are moreover linearly independent —

$$
u(r,\theta,\varphi) = \bigl(Ar^\ell + Br^{-(\ell+1)}\bigr)\bigl(C\cos m\varphi + D\sin m\varphi\bigr)\bigl[E P_\ell^m(\cos\theta) + FQ_\ell^m(\cos\theta)\bigr] , \tag{4}
$$

Each of the three provisos is a real restriction, and the third is not claimed to be a complete list. When $\ell = -\tfrac12$ the two radial exponents $\ell$ and $-(\ell+1)$ coincide and the radial factor is $r^{-1/2}(A + B\ln r)$ instead. When $m = 0$ the azimuthal factor is $C\varphi + D$. And $P_\ell^m, Q_\ell^m$ really can fail to be an independent pair: if $\ell$ is a non-negative integer and $m$ an integer with $m>\ell$, then $P_\ell^m\equiv0$ and the second solution has to be found some other way. No such parameter pair arises in part 2, where $\ell$ and $m$ are integers with $\lvert m\rvert\le\ell$.

**2. With the two regularity conditions.** Suppose in addition that

- $u$ is single-valued in the azimuth, $\Phi(\varphi+2\pi) = \Phi(\varphi)$, and
- $u$ is finite on the polar axis $\theta = 0,\pi$.

Then $m$ is an integer, $\ell$ is a non-negative integer with $0\le\lvert m\rvert\le\ell$, and $F = 0$, so that

$$
u(r,\theta,\varphi) = \bigl(Ar^\ell + Br^{-(\ell+1)}\bigr)\bigl(C\cos m\varphi + D\sin m\varphi\bigr) P_\ell^m(\cos\theta) . \tag{4a}
$$

The three factors are then linked only through $\ell$ and $m$. Finiteness at the origin sets $B = 0$ as well, and decay at infinity sets $A = 0$.

Both extra conditions are needed. Without single-valuedness, $u = \varphi$ is harmonic and of product form but is not of the form (4a) — it is the $m=0$, $C\ne0$ case, and it is exactly the magnetic scalar potential kept in step 5 of the method. Without finiteness on the axis, $u = r^{1/2}P_{1/2}(\cos\theta)$ is a product solution with $\ell = \tfrac12$, so the indices need not be integers at all. This does not contradict part 2, because the second condition fails: $P_{1/2}$ is perfectly finite at the north pole, $P_{1/2}(1) = 1$, but diverges logarithmically at the south pole $\theta\to\pi$, where $\cos\theta\to-1$. Numerically $P_{1/2}(-0.9) = -0.50127$, $P_{1/2}(-0.99999) = -3.4946$ and $P_{1/2}(-1+10^{-7}) = -4.9605$ — slow divergence, but divergence.

**The Helmholtz equation.** For $\nabla^2u + k^2u = 0$ the angular factors and the two conditions on them are unchanged, and only the radial factor differs:

$$
u(r,\theta,\varphi) = r^{-1/2}\bigl[AJ_{\ell+1/2}(kr) + BY_{\ell+1/2}(kr)\bigr]\bigl(C\cos m\varphi+D\sin m\varphi\bigr)\bigl[EP_\ell^m(\cos\theta)+FQ_\ell^m(\cos\theta)\bigr] . \tag{5}
$$

Under the same two regularity conditions, $\ell$ and $m$ are integers with $0\le\lvert m\rvert\le\ell$ and the coefficient of $Q_\ell^m$ vanishes; finiteness at the origin sets $B = 0$ in addition. (Riley, Hobson and Bence call the solution $F$ in their Eq. (21.57), where it collides with their coefficient $F$ of $Q_\ell^m$; we write the solution as $u$, as in (4), so that $F$ here is the coefficient only.)

Riley, Hobson and Bence are careful to point out that nothing in the derivation of (4) forces $\ell$ to be an integer; integrality is imposed afterwards, by the requirement that the polar factor be finite on the axis, and is then inherited by the radial factor.
:::

:::idea{provenance=original}
The separation is done in two cuts, and the order matters. Multiplying the equation by $r^2$ after dividing by $u$ isolates all the $r$-dependence in one group: that is the first cut, and its separation constant is written $\ell(\ell+1)$ because the radial equation it leaves is an Euler equation whose indices are then the tidy pair $\ell, -(\ell+1)$. The remaining equation involves $\theta$ and $\varphi$ only; multiplying it by $\sin^2\theta$ isolates the $\varphi$-dependence, which is the second cut, with constant $m^2$. Single-valuedness in $\varphi$ makes $m$ an integer, and what is left for $\theta$ is the associated Legendre equation once $\cos\theta$ is used as the variable in place of $\theta$.

The one subtlety is that the two conditions fixing the integers come from different places. The integrality of $m$ comes from the geometry of the azimuth — $\varphi$ and $\varphi+2\pi$ are the same direction. The integrality of $\ell$ comes from the behaviour of the Legendre equation at its singular points $\cos\theta = \pm1$, which are the poles of the sphere: only for integer $\ell$ does that equation have a solution bounded there.
:::

:::proof{provenance=adapted src="rhb-2006:§21.3.1, pp. 731–734"}
**Step 1 (first cut, and where the division is legal).** Substitute $u = R(r)\Theta(\theta)\Phi(\varphi)$ into $\nabla^2u = 0$ in spherical polars. One wants to divide by $u$, and $u$ is *not* nonvanishing: in all but the simplest cases it is zero on a surface inside the region, because $P_\ell^m(\cos\theta)$ and $\cos m\varphi$ have interior zeros and $Ar^\ell + Br^{-(\ell+1)}$ has one whenever $AB<0$. So divide only where the division is legal. Put

$$
I_R = \{r : R(r)\ne 0\}, \qquad I_\Theta = \{\theta : \Theta(\theta)\ne 0\}, \qquad I_\Phi = \{\varphi : \Phi(\varphi)\ne 0\} .
$$

Each is open in its own coordinate interval, the three factors being continuous, and each is nonempty — this, and only this, is what the hypothesis that no factor vanishes identically gives, and it is all that is needed. Their product $I_R\times I_\Theta\times I_\Phi$ is exactly the subset of the region where $u \ne 0$, and it is again a product set, which is what the separation lemma requires. On it, dividing by $u$ and multiplying by $r^2$ gives

$$
\underbrace{\frac{1}{R}\frac{d}{dr}\!\left(r^2\frac{dR}{dr}\right)}_{\text{depends on } r \text{ only}}
\;+\;
\underbrace{\frac{1}{\Theta\sin\theta}\frac{d}{d\theta}\!\left(\sin\theta\frac{d\Theta}{d\theta}\right) + \frac{1}{\Phi\sin^2\theta}\frac{d^2\Phi}{d\varphi^2}}_{\text{depends on }(\theta,\varphi)\text{ only}} \;=\; 0 ,
$$

the factor $\sin^2\theta$ being nonzero because $0<\theta<\pi$ on the region. By the separation lemma, with $\mathbf{s} = r$ ranging over $I_R$ and $\mathbf{t} = (\theta,\varphi)$ over $I_\Theta\times I_\Phi$, each group is a constant; call the first $\lambda$, so the second is $-\lambda$.

**Step 1a (an identity true where the division was legal is true everywhere).** Each separated equation below is first obtained only on the set where its own factor is nonzero, and then holds on the whole coordinate interval, by the following argument, which we use without further comment. Take the radial equation $r^2R''+2rR'-\lambda R = 0$, which multiplying the first group of Step 1 by $R$ gives on $I_R$. Let $Z$ be the complement of $I_R$ in the $r$-interval, a closed set. A point of $\partial Z$ is a limit of points of $I_R$, and both sides of the equation are continuous in $r$ ($R$ being $C^2$), so the equation passes to the limit and holds there. On the interior of $Z$ the function $R$ vanishes on a neighbourhood, so $R = R' = R'' = 0$ and both sides are $0$. Since the interval is $I_R\cup\partial Z\cup\operatorname{int}Z$, the equation holds throughout it. The same argument applies verbatim to $\Theta$ on its interval and to $\Phi$ on its own.

**Step 2 (the radial equation).** By Steps 1 and 1a, on the whole $r$-interval

$$
r^2R'' + 2rR' - \lambda R = 0 ,
$$

an Euler equation. Substituting $r = e^t$ and $R(r) = S(t)$, so that $r\,d/dr = d/dt$ and $r^2d^2/dr^2 = d^2/dt^2 - d/dt$, it becomes the constant-coefficient equation $S'' + S' - \lambda S = 0$, with solutions $e^{\lambda_1t}, e^{\lambda_2t}$ where $\lambda_1+\lambda_2 = -1$ and $\lambda_1\lambda_2 = -\lambda$. Hence

$$
R(r) = Ar^{\lambda_1} + Br^{\lambda_2}, \qquad \lambda_1 + \lambda_2 = -1 .
$$

Writing $\lambda_1 = \ell$, the relation $\lambda_1+\lambda_2 = -1$ gives $\lambda_2 = -(\ell+1)$ and $\lambda = -\lambda_1\lambda_2 = \ell(\ell+1)$. Nothing so far requires $\ell$ to be an integer, or even real: it is a name for the first root.

The two roots coincide exactly when $\lambda_1 = \lambda_2 = -\tfrac12$, that is when $\ell = -\tfrac12$ and $\lambda = -\tfrac14$. There $S''+S'-\lambda S = 0$ has the repeated root $-\tfrac12$, so its general solution is $S(t) = (A + Bt)\mathrm{e}^{-t/2}$ and

$$
R(r) = r^{-1/2}\bigl(A + B\ln r\bigr) ,
$$

which is the exceptional radial factor recorded in part 1 of the statement. Every other value of $\ell$ gives two distinct powers.

**Step 3 (second cut).** The second group of Step 1, with $\lambda = \ell(\ell+1)$, reads, on $I_\Theta\times I_\Phi$,

$$
\frac{1}{\Theta\sin\theta}\frac{d}{d\theta}\!\left(\sin\theta\frac{d\Theta}{d\theta}\right) + \frac{1}{\Phi\sin^2\theta}\Phi'' + \ell(\ell+1) = 0 .
$$

Multiply by $\sin^2\theta$:

$$
\underbrace{\frac{\sin\theta}{\Theta}\frac{d}{d\theta}\!\left(\sin\theta\frac{d\Theta}{d\theta}\right) + \ell(\ell+1)\sin^2\theta}_{\theta \text{ only}} \;+\; \underbrace{\frac{\Phi''}{\Phi}}_{\varphi\text{ only}} \;=\; 0 .
$$

By the separation lemma again, applied on the product set $I_\Theta\times I_\Phi$, each of the two groups is a constant: $\Phi''/\Phi \equiv -m^2$ on $I_\Phi$, and the $\theta$-group $\equiv m^2$ on $I_\Theta$.

**Step 4 (the azimuthal factor).** Multiplying by $\Phi$ gives $\Phi'' + m^2\Phi = 0$ on $I_\Phi$, hence on the whole $\varphi$-interval by Step 1a. It gives $\Phi = C\cos m\varphi + D\sin m\varphi$ for $m \ne 0$ and $\Phi = C\varphi + D$ for $m = 0$. Since $\varphi$ and $\varphi + 2\pi$ label the same half-plane, a single-valued $u$ requires $\Phi(\varphi+2\pi) = \Phi(\varphi)$: hence $C = 0$ in the $m = 0$ case, and $m$ must be an integer in the other.

**Step 5 (the polar factor).** With the constant $m^2$ inserted, the $\theta$-group of Step 3 reads, on $I_\Theta$,

$$
\frac{\sin\theta}{\Theta}\frac{d}{d\theta}\!\left(\sin\theta\frac{d\Theta}{d\theta}\right) + \ell(\ell+1)\sin^2\theta = m^2 .
$$

Change the variable to $\mu = \cos\theta$. Then $d\mu/d\theta = -\sin\theta$, so $d/d\theta = -\sin\theta\,d/d\mu = -(1-\mu^2)^{1/2}d/d\mu$, and $\sin\theta\,d\Theta/d\theta = -(1-\mu^2)\,dM/d\mu$ where $M(\mu) = \Theta(\theta)$. Substituting, multiplying through by $M$ and dividing by $\sin^2\theta = 1-\mu^2$,

$$
\frac{d}{d\mu}\!\left[(1-\mu^2)\frac{dM}{d\mu}\right] + \left[\ell(\ell+1) - \frac{m^2}{1-\mu^2}\right]M = 0 , \tag{6}
$$

which is the associated Legendre equation — on the image of $I_\Theta$ under $\theta\mapsto\cos\theta$ to begin with, and then, by Step 1a, on the whole interval. Its solutions are $M = EP_\ell^m(\mu) + FQ_\ell^m(\mu)$.

**Step 6 (integrality of $\ell$, and the axis).** Equation (6) is singular at $\mu = \pm1$, which are the two poles $\theta = 0,\pi$ of the sphere. The function $Q_\ell^m$ diverges there, so a solution finite on the polar axis has $F = 0$; and $P_\ell^m$ is finite there only when $\ell$ is a non-negative integer with $0\le\lvert m\rvert\le\ell$, which is the condition established in :ref[associated Legendre functions]{to=spec.associated-legendre}. This is where integrality of $\ell$ enters, and through $\lambda = \ell(\ell+1)$ it feeds back into the radial exponents of Step 2.

**Step 7 (assemble).** Multiplying the three factors gives (4), which is part 1 of the statement; imposing the single-valuedness of Step 4 and the finiteness on the axis of Step 6 gives part 2 and the form (4a).

**Step 8 (the Helmholtz case).** Repeating Steps 1–6 for $\nabla^2u + k^2u = 0$ changes only Step 1, where the extra term contributes $k^2r^2$ to the $r$-group. So Steps 3–6 are untouched — the angular factors are identical — and the radial equation becomes

$$
r^2R'' + 2rR' + \bigl[k^2r^2 - \ell(\ell+1)\bigr]R = 0 . \tag{7}
$$

Put $R(r) = r^{-1/2}S(r)$. Then $R' = r^{-1/2}S' - \tfrac12 r^{-3/2}S$ and $R'' = r^{-1/2}S'' - r^{-3/2}S' + \tfrac34r^{-5/2}S$, so

$$
r^2R'' + 2rR' = r^{3/2}S'' + r^{1/2}S' - \tfrac14 r^{-1/2}S ,
$$

and multiplying (7) by $r^{1/2}$ gives

$$
r^2S'' + rS' + \left[k^2r^2 - \left(\ell+\tfrac12\right)^2\right]S = 0 ,
$$

using $\ell(\ell+1) + \tfrac14 = (\ell+\tfrac12)^2$. With $\mu = kr$ this is Bessel's equation of order $\ell+\tfrac12$, whose solutions are $J_{\ell+1/2}(kr)$ and $Y_{\ell+1/2}(kr)$. Hence (5). $\square$
:::

:::remark[Where the hypotheses are used: nonvanishing factors, and a product domain for the separation lemma]{provenance=original}
Two hypotheses of the statement are consumed in Step 1, and nowhere else. The first is that no factor vanishes identically. It is far too weak to make $u\ne0$ on the region — no hypothesis short of assuming that outright would — but it is exactly enough to make the set $I_R\times I_\Theta\times I_\Phi$ on which one may divide by $u$ nonempty, and continuity then carries each separated equation across the zeros of its own factor. The second is the product form of the region: Step 1 applies the lemma with $\mathbf{t} = (\theta,\varphi)$ ranging over its angular factor independently of $r$. If the region were, say, a ball dented on one side, the admissible $(\theta,\varphi)$ would depend on $r$, the two groups would not be free to vary independently, and the conclusion that each is constant would be unjustified. (The restriction to $I_R\times I_\Theta\times I_\Phi$ does no damage here, because cutting a product set down factor by factor leaves a product set.) This is the precise reason the method demands a region bounded by coordinate surfaces, and why step 1 of the recipe is the decisive one.
:::

:::remark[Separation finds solutions; it does not prove they are all of them]{provenance=adapted src="evans-2010:§4.1.1, pp. 159–161"}
A single product (4) is one solution; a sum of products is another. That a superposition can meet arbitrary data is a completeness statement about the eigenfunctions, proved separately — Fourier series for the trigonometric factors, :ref[Fourier–Bessel series]{to=spec.bessel-orthogonality} for the radial ones, the completeness of :ref[spherical harmonics]{to=spec.spherical-harmonics} for the angular ones. Uniqueness then comes from the maximum principle or an energy argument (:ref[harmonic functions]{to=pde.harmonic-functions}), not from the separation. Evans makes the same point about his separated heat equation: only the single product $u = \mathrm{e}^{-\lambda t}w$ is produced by the separation itself, and the finite sums and infinite series built from it rest on the linearity of the equation and on a completeness statement he defers to his later chapters.
:::

:::remark[What the sources add: angular factors, time factors, and the Schrödinger exception]{provenance=adapted src="rhb-2006:§21.3.2, pp. 737–741; hassani-2013:§13.2, Eqs. (13.11)–(13.14), pp. 398–400"}
- *Why every equation built from $\nabla^2$ has the same angular factors.* Riley, Hobson and Bence make this the general point of their section: provided $\theta$ and $\varphi$ enter the equation only through $\nabla^2$, the second cut of the proof is untouched, so the angular factors are spherical harmonics whatever the radial term. Hassani's operator version makes it structural: $\nabla^2 = -r^{-2}L^2 + r^{-2}(\mathbf{r}\cdot\nabla)(\mathbf{r}\cdot\nabla) + r^{-2}\mathbf{r}\cdot\nabla$ with $L = \mathbf{r}\times(-i\nabla)$ depending only on the angles, so that for any $f = f(r)$ the master equation (3) splits into the eigenvalue problem $L^2Y = \lambda Y$ on the sphere and a radial ODE containing $f$ and $\lambda$. (Hassani writes this angular eigenvalue $\alpha$; we write $\lambda$, which is the $\lambda = \ell(\ell+1)$ of the proof above, to keep $\alpha$ for the axial constant.) In quantum mechanics this is the statement that angular momentum is conserved in any central potential, and it is why the hydrogen atom, the three-dimensional oscillator and a free particle all have the same angular wavefunctions and differ only radially.
- *Which equations separate the time cleanly.* Step 2 works because the equation is linear with coefficients independent of $t$. Riley, Hobson and Bence note that for the wave equation the resulting time factor $e^{\pm i\omega t}$ with $\omega = kc$ accompanies the spatial Helmholtz solution of the *same* $k$, so that a separated solution has a definite frequency; but in spherical polars the zeros of $j_\ell(kr)$ are not equally spaced in $r$ except when $\ell = 0$, so such a solution has no definite wavelength. For the diffusion equation the time factor is the decaying $e^{-k^2\kappa t}$ instead.
- *The Schrödinger equation is close to Helmholtz but not equal to it.* Riley, Hobson and Bence point this out for the hydrogen atom: the stationary-state equation is $\nabla^2u + \frac{2m}{\hbar^2}\bigl(E + \frac{e^2}{4\pi\varepsilon_0 r}\bigr)u = 0$, which has an $r$-dependent coefficient rather than the constant $k^2$, so the radial equation is not Bessel's. The angular factors are nevertheless spherical harmonics, by the previous point. See :ref[the Schrödinger equation]{to=pde.schrodinger-equation}.
:::

:::remark[Not every separable system is one of these three]{provenance=original}
The method also separates in elliptic, parabolic, prolate and oblate spheroidal, and other coordinate systems, each producing its own family of special functions (Mathieu, Lamé, spheroidal wave functions). The three systems treated here cover the geometries that occur most often, and they are the ones whose special functions this handbook develops.
:::

:::example[Cartesian: Laplace's equation in a cube]{provenance=original}
Solve $\nabla^2u = 0$ in the unit cube $0<x,y,z<1$ with $u = 0$ on the five faces $x=0$, $x=1$, $y=0$, $y=1$, $z=0$, and

$$
u(x,y,1) = \sin\pi x\,\sin\pi y
$$

on the top face.

**Separate.** With $u = X(x)Y(y)Z(z)$ and the constants of the catalogue, $X'' = -l^2X$, $Y''=-m^2Y$, $Z''=-n^2Z$ and $l^2+m^2+n^2 = 0$ (Laplace, so $k=0$). The four homogeneous side faces force $X(0)=X(1)=0$ and $Y(0)=Y(1)=0$, so $X = \sin p\pi x$ and $Y = \sin q\pi y$ with $p,q$ positive integers, and $l^2 = p^2\pi^2$, $m^2 = q^2\pi^2$. Then $n^2 = -(p^2+q^2)\pi^2 < 0$, so the $z$-factor is *hyperbolic*, as the catalogue predicts:

$$
Z(z) = E\sinh\gamma_{pq}z + F\cosh\gamma_{pq}z, \qquad \gamma_{pq} = \pi\sqrt{p^2+q^2} .
$$

The face $z=0$ forces $F = 0$.

**Fit the data.** The datum is already a single eigenfunction, $p = q = 1$, so only one term survives and

$$
u(x,y,z) = \sin\pi x\,\sin\pi y\,\frac{\sinh(\gamma z)}{\sinh\gamma}, \qquad \gamma = \pi\sqrt2 = 4.4428829 .
$$

**Check.** $\nabla^2 u = (-\pi^2 - \pi^2 + \gamma^2)u = (\gamma^2 - 2\pi^2)u = 0$ since $\gamma^2 = 2\pi^2$. All six boundary conditions hold by construction.

**A number.** At the centre of the cube,

$$
u\left(\tfrac12,\tfrac12,\tfrac12\right) = \frac{\sinh(\gamma/2)}{\sinh\gamma} = \frac{1}{2\cosh(\pi/\sqrt2)} = \frac{1}{2\cdot 4.6645326} = 0.1071919 .
$$

The datum has decayed by a factor of about nine over half the height of the cube — the exponential decay of a Dirichlet datum into the interior at the rate set by $\gamma$, which is the Cartesian signature of harmonicity. Had the datum been $\sin 3\pi x\sin 4\pi y$ instead, $\gamma$ would be $5\pi$ and the centre value $1/(2\cosh(5\pi/2)) = 3.9\times10^{-4}$: finer structure on the boundary dies faster, which is the mechanism behind interior smoothing.
:::

:::example[Cylindrical: Dirichlet eigenvalues of a cylinder]{provenance=original}
Find the lowest frequencies at which a scalar field can resonate inside a cylinder of radius $a = 1$ and height $L = 2$ while vanishing on the whole boundary; that is, find the smallest $k$ with a nonzero solution of the Helmholtz equation $\nabla^2u + k^2u = 0$ in the cylinder and $u = 0$ on its curved surface, bottom and top.

**Separate.** From the catalogue, with the region containing the axis $\rho = 0$ we drop $Y_m$, and with $u$ vanishing at $z = 0$ and $z = L$ the axial factor must be $\sin(p\pi z/L)$, so $\alpha^2 = -(p\pi/L)^2$ with $p$ a positive integer. The radial factor is then $J_m(\kappa\rho)$ with the catalogue's radial argument $\kappa = \sqrt{k^2+\alpha^2}$, that is

$$
\kappa^2 = k^2 + \alpha^2 = k^2 - \frac{p^2\pi^2}{L^2} ,
$$

and the condition $u = 0$ on $\rho = a$ requires $J_m(\kappa a) = 0$, i.e. $\kappa a = j_{m,n}$, the $n$th positive zero of $J_m$. Hence the admissible values are

$$
k^2_{m,n,p} = \left(\frac{j_{m,n}}{a}\right)^{\!2} + \left(\frac{p\pi}{L}\right)^{\!2} ,
\qquad
u = J_m\!\left(\frac{j_{m,n}\rho}{a}\right)\bigl(C\cos m\varphi + D\sin m\varphi\bigr)\sin\frac{p\pi z}{L} .
$$

**Numbers.** With $a = 1$ and $L = 2$, the relevant Bessel zeros are $j_{0,1} = 2.4048256$, $j_{1,1} = 3.8317060$, $j_{2,1} = 5.1356223$, $j_{0,2} = 5.5200781$, and $(p\pi/L)^2 = 2.4674011\,p^2$. The seven lowest eigenvalues are

| $(m,n,p)$ | $j_{m,n}^2$ | $(p\pi/L)^2$ | $k^2$ | $k$ | multiplicity |
|---|---|---|---|---|---|
| $(0,1,1)$ | $5.783186$ | $2.467401$ | $8.250587$ | $2.872384$ | 1 |
| $(0,1,2)$ | $5.783186$ | $9.869604$ | $15.652790$ | $3.956361$ | 1 |
| $(1,1,1)$ | $14.681971$ | $2.467401$ | $17.149372$ | $4.141180$ | 2 |
| $(1,1,2)$ | $14.681971$ | $9.869604$ | $24.551575$ | $4.954955$ | 2 |
| $(0,1,3)$ | $5.783186$ | $22.206610$ | $27.989796$ | $5.290538$ | 1 |
| $(2,1,1)$ | $26.374616$ | $2.467401$ | $28.842018$ | $5.370476$ | 2 |
| $(0,2,1)$ | $30.471262$ | $2.467401$ | $32.938663$ | $5.739222$ | 1 |

The modes with $m \ne 0$ come in pairs, $\cos m\varphi$ and $\sin m\varphi$, so they are doubly degenerate; those with $m = 0$ are simple. The lowest mode is $J_0(2.4048256\,\rho)\sin(\pi z/2)$, nodeless inside, with $k = 2.8723835$.

**A check that the separation constants are doing what they should.** Each $k^2$ is a sum of a radial and an axial piece, and the two pieces are the eigenvalues of the two separated operators; the algebraic relation among the separation constants in step 4 of the recipe is here simply $\kappa^2 + (p\pi/L)^2 = k^2$. Lengthening the cylinder, $L\to\infty$, drives the axial piece to zero and the spectrum down onto the two-dimensional values $(j_{m,n}/a)^2$ — the drumskin eigenvalues — as it must.
:::

:::example[Spherical: a sphere held at potential $V_0\cos^3\theta$]{provenance=original}
A sphere of radius $a$ carries the surface potential $h(\theta) = V_0\cos^3\theta$. Find the potential inside and outside, with $u$ bounded at the origin and $u\to0$ at infinity.

**Expand the datum in Legendre polynomials.** From $P_1(\mu) = \mu$ and $P_3(\mu) = \tfrac12(5\mu^3-3\mu)$ we get $\mu^3 = \tfrac25P_3(\mu) + \tfrac35P_1(\mu)$. So with $\mu = \cos\theta$,

$$
h = V_0\left[\tfrac35P_1(\mu) + \tfrac25P_3(\mu)\right] .
$$

**Choose the surviving terms of (4).** The datum is independent of $\varphi$, so $m = 0$ and the polar factors are the Legendre polynomials $P_\ell$; the solution must be finite on the axis, so $F = 0$. Inside the sphere finiteness at the origin kills $r^{-(\ell+1)}$; outside, decay at infinity kills $r^\ell$. Hence

$$
u_{\text{in}} = \sum_{\ell\ge0}A_\ell r^\ell P_\ell(\mu), \qquad u_{\text{out}} = \sum_{\ell\ge0}B_\ell r^{-(\ell+1)}P_\ell(\mu) .
$$

**Match at $r = a$.** By the orthogonality of the $P_\ell$, only $\ell = 1$ and $\ell = 3$ appear, and $A_1a = \tfrac35V_0$, $A_3a^3 = \tfrac25V_0$, $B_1a^{-2} = \tfrac35V_0$, $B_3a^{-4} = \tfrac25V_0$. So

$$
u_{\text{in}} = V_0\left[\frac35\frac ra P_1(\mu) + \frac25\frac{r^3}{a^3}P_3(\mu)\right],
\qquad
u_{\text{out}} = V_0\left[\frac35\frac{a^2}{r^2}P_1(\mu) + \frac25\frac{a^4}{r^4}P_3(\mu)\right] .
$$

**Checks.** Both are harmonic, being superpositions of the solid harmonics $r^\ell P_\ell$ and $r^{-(\ell+1)}P_\ell$ of (4). At $r = a$ both reduce to $V_0[\tfrac35P_1+\tfrac25P_3] = V_0\cos^3\theta$, so the potential is continuous across the surface. Numerically, on the polar axis $\theta = 0$ (where $P_\ell(1) = 1$ for all $\ell$):

$$
\frac{u_{\text{in}}(a/2,0)}{V_0} = \frac35\cdot\frac12 + \frac25\cdot\frac18 = 0.35 ,
\qquad
\frac{u_{\text{out}}(2a,0)}{V_0} = \frac35\cdot\frac14 + \frac25\cdot\frac1{16} = 0.175 .
$$

At the centre, $u_{\text{in}}(0) = 0$, which is the mean value property: $\cos^3\theta$ is odd under $\theta\mapsto\pi-\theta$ and so averages to zero over the sphere. Far away, $u_{\text{out}} \approx \tfrac35V_0a^2\cos\theta/r^2$: the leading behaviour is a dipole, because the datum has no $\ell = 0$ component and hence no net charge — the systematic version of this reading is :ref[multipole expansions]{to=pde.multipole-expansion}.

**The discontinuity in the normal derivative.** Differentiating the two expressions and setting $r = a$,

$$
\left.\frac{\partial u_{\text{in}}}{\partial r}\right|_{r=a} = \frac{V_0}{a}\left[\tfrac35P_1 + \tfrac65P_3\right],
\qquad
\left.\frac{\partial u_{\text{out}}}{\partial r}\right|_{r=a} = -\frac{V_0}{a}\left[\tfrac65P_1 + \tfrac85P_3\right] .
$$

The radial derivative therefore jumps by $-\frac{V_0}{a}\bigl[\tfrac95P_1 + \tfrac{14}{5}P_3\bigr]$ across the surface, which in electrostatics equals $-\sigma/\varepsilon_0$ for the surface charge density $\sigma$ that holds the sphere at the prescribed potential. The potential itself is continuous and its tangential derivative is continuous; only the normal derivative jumps, and the jump measures the source sitting on the surface.
:::

:::application[Electrostatics of conductors]{provenance=adapted src="rhb-2006:§21.3.1, pp. 734, 735–737"}
Riley, Hobson and Bence's two spherical examples are the standard pair. An uncharged conducting sphere in a uniform field $E$ must have a potential that approaches $-Er\cos\theta$ at large $r$ and is constant on $r = a$; since $\cos\theta = P_1(\cos\theta)$, only the $\ell = 1$ terms of (4) can appear, and the two conditions fix them completely, giving $v = -Er(1-a^3/r^3)\cos\theta$ — the sphere behaves as a dipole of moment $4\pi\varepsilon_0a^3E$. A hollow split sphere with its two hemispheres held at $v_0$ and $0$ needs the full Legendre series instead, and the coefficients come out as $v_0/2, 3v_0/4a, 0, -7v_0/16a^3,\dots$; on the equator the series sums to $v_0/2$, the average of the two values, because a Legendre series behaves at a jump exactly as a Fourier series does.
:::

:::application[Normal modes and resonant cavities]{provenance=adapted src="rhb-2006:§21.3.2, p. 739; arfken-2013:§9.4, Example 9.4.3, pp. 422–424"}
The cylindrical example above is a cavity calculation for a single scalar field required to vanish on the whole boundary: an acoustic cavity with pressure-release walls, or — Arfken's reading of the same eigenvalue problem — a particle in a cylindrical box, with $k^2 = 2mE/\hbar^2$. With $\omega = ck$ and $c = 2.998\times10^{10}\,\mathrm{cm\,s^{-1}}$, a cylinder of radius $a = 1$ cm and height $L = 2$ cm has its lowest such mode at $k = 2.8723835\,\mathrm{cm}^{-1}$, that is $\omega/2\pi = ck/2\pi = 13.71$ GHz.

An electromagnetic cavity of the same dimensions is **not** this problem, and resonates lower. A conducting wall forces only the tangential electric field to vanish on it, not every field component, so for a TM mode the axial field $E_z\propto J_m(j_{m,n}\rho/a)\cos(p\pi z/L)$ need have no axial node: $k^2 = (j_{m,n}/a)^2+(p\pi/L)^2$ with $p = 0,1,2,\dots$, whereas the TE modes are built from the zeros $j'_{m,n}$ of $J'_m$ and need $p\ge1$. The lowest mode of this cylinder is therefore TM$_{010}$, with $k = j_{0,1}/a = 2.4048256\,\mathrm{cm}^{-1}$ and $ck/2\pi = 11.47$ GHz, independent of the height $L$; the lowest TE mode, TE$_{111}$, has $k = [(j'_{1,1}/a)^2+(\pi/L)^2]^{1/2} = 2.4202\,\mathrm{cm}^{-1}$ with $j'_{1,1} = 1.8411838$, giving $11.55$ GHz. The separation itself is word for word the one above; only the admissible axial index changes.

The same separation with the $z$-dependence dropped gives the modes of a circular drumskin, whose frequencies are $\omega = j_{m,n}c/a$ with $c^2 = T/\sigma$; Riley, Hobson and Bence compute the four lowest and note that the second and third are two-fold degenerate. The degeneracy is not an accident of the numbers but a consequence of the rotational symmetry of the disk, which pairs $\cos m\varphi$ with $\sin m\varphi$; breaking the symmetry — an elliptical drum — splits each pair. See :ref[normal modes]{to=linalg.normal-modes} and :ref[standing waves and normal modes]{to=pde.vibrating-string-modes}.
:::

:::application[Steady heat conduction with mixed data]{provenance=adapted src="rhb-2006:§21.3.1, pp. 729–731"}
Riley, Hobson and Bence's semi-infinite cylinder, curved surface at $0^\circ$ and base at $T_0$, is the model problem for which a Fourier–Bessel series rather than a Fourier series is required: the base datum is expanded in $J_0(k_n\rho)$ with $k_na$ the zeros of $J_0$, and the coefficients come out as $2T_0/(k_naJ_1(k_na))$ using the recurrence $\frac{d}{dz}[zJ_1(z)] = zJ_0(z)$. The same calculation with a non-axisymmetric base temperature needs the double series over $m$ and $n$, with coefficients extracted by the orthogonality of both the Bessel and the trigonometric factors — step 7 of the recipe in its general form.
:::

:::application{provenance=original}
**Quantum mechanics of central potentials.** The reason the periodic table has the shape it has is step 5 and step 6 of this recipe. For any potential $V(r)$ depending on $r$ alone, the angular factors of the stationary Schrödinger equation are the spherical harmonics $Y_\ell^m$, with $\ell$ a non-negative integer and $2\ell+1$ values of $m$; the potential enters only the radial equation and so fixes the energies but not the angular degeneracy. The $s,p,d,f$ labels are the values $\ell = 0,1,2,3$, and the $2(2\ell+1)$ electrons per subshell are the $2\ell+1$ values of $m$ times two spin states. The operator derivation of :cite[Hassani]{work=hassani-2013 loc="§13.2, pp. 398–400"} shows why: $L^2$ commutes with any $\nabla^2 + f(r)$, so angular momentum and energy can be diagonalized together. See :ref[the Schrödinger equation]{to=pde.schrodinger-equation} and :ref[the Helmholtz equation]{to=pde.helmholtz-equation}.

**Numerical methods.** Separation is also the basis of the fast direct solvers. On a box, a rectangular grid, or a disk, the discrete Laplacian is diagonalized by the discrete analogues of the separated eigenfunctions, so a Poisson solve becomes a forward transform, a division by the eigenvalues $l^2+m^2+n^2$, and an inverse transform — $O(N\log N)$ work instead of the $O(N^{3/2})$ or worse of an iterative solve (:ref[the discrete Fourier transform]{to=fourier.dft-fft}). The same spectral idea, applied with Chebyshev or Legendre expansions in a non-periodic direction, is what makes spectral methods for elliptic problems on tensor-product domains converge faster than any fixed power of the mesh size.
:::
