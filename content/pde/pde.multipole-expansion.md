---
id: pde.multipole-expansion
title: Multipole expansions
kind: application
level: core
summary: Expands the potential of a localized source outside a sphere containing it, first in Legendre polynomials from the generating function and then in spherical harmonics by the addition theorem, defines the monopole, dipole and quadrupole moments that the terms carry, and shows that the lowest nonvanishing moment is independent of the choice of origin while all higher ones are not.
prereqs: [spec.spherical-harmonics, pde.laplace-fundamental-solution, spec.legendre-polynomials, vcalc.dirac-delta-basics]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§15.3, pp. 736–739: the potential of a point charge $q$ at $z=a$ written through the Legendre generating function, Eqs. (15.58)–(15.62), giving the two expansions valid for $r>a$ and $r<a$ and the combined Laplace expansion (15.63) of $1/\\lvert\\mathbf{r}_1-\\mathbf{r}_2\\rvert$ in $r_</r_>$; the electric dipole built from $\\pm q$ at $z=\\pm a$ with the cancellation of alternate terms, Eqs. (15.64)–(15.65), the point-dipole limit $a\\to0$ at fixed $\\mu = 2qa$, Eq. (15.66), the linear quadrupole of Fig. 15.7, and the linear multipole expansion (15.67) with moments $\\mu_0 = \\sum q_i$, $\\mu_1 = \\sum q_ia_i$, $\\mu_2 = \\sum q_ia_i^2$; p. 739, the statement that only the lowest nonvanishing moment is unchanged by moving the expansion centre, and the three closing observations (continuous distributions, non-linear arrays, and the applicability to any inverse-square force); §16.3, pp. 797–802: the spherical harmonic addition theorem (16.57), the Laplace expansion in spherical harmonics (16.66), the general multipole expansion (16.72)–(16.74) with $M_l^m = \\frac{4\\pi}{2l+1}\\sum_i q_ir_i^lY_l^m(\\theta_i,\\varphi_i)^*$, the warning that authors scale the moments differently, the values $M_0^0 = (4\\pi)^{1/2}q_{\\text{tot}}$ and $M_1^0 = (4\\pi/3)^{1/2}\\sum q_iz_i$, the Cartesian forms of $M_l^m$ for $l\\le2$, and the count of $2l+1$ components against the larger space of degree-$l$ monomials"
    pages: "736-739, 797-802"
    role: both forms of the expansion, the derivation from the generating function and from the addition theorem, the definitions and normalizations of the moments, and the origin-dependence statement
  - work: rhb-2006
    loc: "§21.3.1, p. 734: the uncharged conducting sphere of radius $a$ in a uniform field, solved by keeping only the $\\ell=1$ terms of the separated solution, giving $v = -Er(1-a^3/r^3)\\cos\\theta$ and the conclusion that the sphere acts as a dipole of moment $4\\pi\\varepsilon_0a^3E$; §29.1, pp. 1077–1078: the symmetry argument that fixes which components of a permanent electric dipole moment a molecule may have, worked for HCl, CO$_2$ and O$_3$, with the conclusion that symmetry forbids components but never compels them"
    pages: "734, 1077-1078"
    role: the induced-dipole example, and the symmetry argument that makes multipole moments vanish
  - work: stakgold-holst-2011
    loc: "§2.1, Example 6, pp. 99–100: the dipole obtained as the distributional limit of a positive source $1/\\varepsilon$ at $\\xi + (\\varepsilon/2)\\mathbf{l}$ and a negative one at $\\xi - (\\varepsilon/2)\\mathbf{l}$, with action $(\\iota,\\phi) = \\partial\\phi/\\partial l\\,(\\xi)$, and the remark that this is a distributional derivative of the delta; §2.2, Eq. (2.2.9), p. 118, that $(\\partial/\\partial\\xi_i)\\delta(x-\\xi)$ is the volume density of a unit dipole at $\\xi$ with axis along $x_i$, and Eq. (2.2.10), the double layer of density $b$ on a surface"
    pages: "99-100, 118"
    role: the point dipole and higher point multipoles as derivatives of the delta, which is what makes the expansion a statement about distributions as well as about far fields
---

:::definition[Point multipoles]{provenance=adapted src="stakgold-holst-2011:§2.1, Example 6, pp. 99–100 and §2.2, Eq. (2.2.9), p. 118; arfken-2013:§15.3, Eq. (15.66), p. 738"}
A **point dipole** at $\boldsymbol\xi$ with axis the unit vector $\mathbf{l}$ is the limit, as $\varepsilon\to0$, of a source of strength $+1/\varepsilon$ at $\boldsymbol\xi + \tfrac{\varepsilon}{2}\mathbf{l}$ together with one of strength $-1/\varepsilon$ at $\boldsymbol\xi - \tfrac{\varepsilon}{2}\mathbf{l}$. Stakgold and Holst take the limit in the sense of distributions: for a test function $\phi$,

$$
\frac{1}{\varepsilon}\left[\phi\!\left(\boldsymbol\xi + \tfrac{\varepsilon}{2}\mathbf{l}\right) - \phi\!\left(\boldsymbol\xi - \tfrac{\varepsilon}{2}\mathbf{l}\right)\right] \;\longrightarrow\; \frac{\partial\phi}{\partial l}(\boldsymbol\xi) ,
$$

so the point dipole is the distribution $\phi\mapsto \partial\phi/\partial l\,(\boldsymbol\xi)$. Equivalently, its volume source density is a derivative of the delta: $(\partial/\partial\xi_i)\,\delta(\mathbf{x}-\boldsymbol\xi)$ is the density of a unit dipole at $\boldsymbol\xi$ with axis along $x_i$. Note that the charges must be made stronger as they are brought together, or nothing survives.

Arfken takes the same limit at the level of the potential: the two charges $\pm q$ at $z = \pm a$ produce a potential whose $a\to0$ limit at fixed $\mu = 2qa$ is

$$
\psi = \frac{\mu}{4\pi\varepsilon_0}\frac{P_1(\cos\theta)}{r^2} ,
$$

the potential of a point dipole of moment $\mu$ at the origin, oriented along the polar axis. A **linear $2^n$-pole** is obtained by iterating the construction $n$ times, and contributes $P_n(\cos\theta)/r^{n+1}$; $n = 0,1,2$ are the monopole, dipole and quadrupole.

Throughout, $r_>$ and $r_<$ denote the larger and the smaller of two radii, and $\Omega = (\theta,\varphi)$ a direction. We use the physicists' spherical harmonics $Y_\ell^m$ of :ref[spherical harmonics]{to=spec.spherical-harmonics}, in which the addition theorem reads as in (3) below.
:::

:::statement[The Laplace expansion of the inverse distance]{provenance=adapted src="arfken-2013:§15.3, Eqs. (15.60)–(15.63), pp. 736–737 and §16.3, Eq. (16.66), p. 800"}
Let $\mathbf{r}_1,\mathbf{r}_2$ be measured from a common origin, with magnitudes $r_1,r_2$ and angular coordinates $\Omega_1,\Omega_2$, and let $\chi$ be the angle between them. Then

$$
\frac{1}{\lvert\mathbf{r}_1-\mathbf{r}_2\rvert} \;=\; \frac{1}{r_>}\sum_{\ell=0}^{\infty}\left(\frac{r_<}{r_>}\right)^{\!\ell} P_\ell(\cos\chi)
\;=\;\sum_{\ell=0}^{\infty}\frac{r_<^{\,\ell}}{r_>^{\,\ell+1}}P_\ell(\cos\chi) , \tag{1}
$$

the series converging except when $r_1 = r_2$. Inserting the spherical harmonic addition theorem turns (1) into

$$
\frac{1}{\lvert\mathbf{r}_1-\mathbf{r}_2\rvert} \;=\; \sum_{\ell=0}^{\infty}\frac{4\pi}{2\ell+1}\frac{r_<^{\,\ell}}{r_>^{\,\ell+1}}\sum_{m=-\ell}^{\ell}Y_\ell^m(\Omega_1)^*\,Y_\ell^m(\Omega_2) , \tag{2}
$$

which holds in a coordinate system of arbitrary orientation, the angle $\chi$ having been traded for the two directions separately. The addition theorem used here is

$$
P_\ell(\cos\chi) = \frac{4\pi}{2\ell+1}\sum_{m=-\ell}^{\ell}Y_\ell^m(\Omega_1)^*\,Y_\ell^m(\Omega_2) . \tag{3}
$$

Arfken notes that the rate of convergence of (1) improves as $r_>/r_<$ grows, and that the expansion of a point charge's potential *inside* the sphere through the charge — the case $r_< = r$ — is obtained from the same generating function by rearranging the square root the other way.
:::

:::idea{provenance=original}
Everything follows from the Legendre generating function

$$
\bigl(1 - 2ht + h^2\bigr)^{-1/2} = \sum_{\ell=0}^\infty P_\ell(t)\,h^\ell \qquad (\lvert h\rvert<1) ,
$$

because the law of cosines makes $\lvert\mathbf{r}_1-\mathbf{r}_2\rvert$ exactly of that shape. Writing $\lvert\mathbf{r}_1-\mathbf{r}_2\rvert^2 = r_1^2 + r_2^2 - 2r_1r_2\cos\chi$ and pulling out whichever of $r_1,r_2$ is larger leaves $(1-2ht+h^2)^{-1/2}$ with $t = \cos\chi$ and $h = r_</r_>$, which is less than one. Pulling out the *smaller* radius would give $h>1$ and a divergent series, which is why the expansion must be organized around $r_>$ and why a multipole expansion is a statement about the field outside the source, never inside it.

The passage from (1) to (2) is a change of bookkeeping with one real gain. In (1) the single function $P_\ell(\cos\chi)$ couples the two directions, so the expansion is only useful when one of them is fixed — Arfken's charge on the polar axis. The addition theorem (3) factorizes that coupling into a sum of products, each factor depending on one direction alone. Once that is done, the source variables and the field variables appear in separate factors, and the sum over the source can be carried out once and for all. The numbers it produces are the multipole moments.
:::

:::proof{provenance=adapted src="arfken-2013:§15.3, Eqs. (15.58)–(15.63), pp. 736–737"}
**Step 1 (the law of cosines).** With $\chi$ the angle between $\mathbf{r}_1$ and $\mathbf{r}_2$,

$$
\lvert\mathbf{r}_1-\mathbf{r}_2\rvert = \bigl(r_1^2 + r_2^2 - 2r_1r_2\cos\chi\bigr)^{1/2} .
$$

**Step 2 (pull out the larger radius).** Let $r_> = \max(r_1,r_2)$, $r_< = \min(r_1,r_2)$ and $h = r_</r_> \in [0,1)$. The expression inside the square root is symmetric in $r_1,r_2$, so

$$
\lvert\mathbf{r}_1-\mathbf{r}_2\rvert = r_>\bigl(1 - 2h\cos\chi + h^2\bigr)^{1/2} ,
$$

and therefore

$$
\frac{1}{\lvert\mathbf{r}_1-\mathbf{r}_2\rvert} = \frac{1}{r_>}\bigl(1-2h\cos\chi+h^2\bigr)^{-1/2} .
$$

**Step 3 (insert the generating function).** Since $\lvert h\rvert<1$ and $\lvert\cos\chi\rvert\le1$, the generating function of the :ref[Legendre polynomials]{to=spec.legendre-polynomials} applies with $t = \cos\chi$ and gives

$$
\frac{1}{\lvert\mathbf{r}_1-\mathbf{r}_2\rvert} = \frac{1}{r_>}\sum_{\ell=0}^\infty P_\ell(\cos\chi)\,h^\ell ,
$$

which is (1). The series diverges at $h = 1$, that is at $r_1 = r_2$, where the two radii are equal; note that $\lvert\mathbf{r}_1-\mathbf{r}_2\rvert$ itself is perfectly finite there unless also $\chi = 0$, so the restriction is a limitation of the expansion and not of the function.

**Step 4 (factorize the angle).** Substituting the addition theorem (3) into (1) and exchanging the two finite inner sums with the outer one gives (2) term by term. $\square$
:::

:::statement[The multipole expansion]{provenance=adapted src="arfken-2013:§16.3, Eqs. (16.72)–(16.74), p. 801 and §15.3, Eq. (15.67), p. 739"}
Let charges $q_i$ sit at points $\mathbf{r}_i$, all inside the sphere $\lvert\mathbf{r}\rvert = a$ centred at the origin. For a field point with $r > a$,

$$
\psi(\mathbf{r}) \;=\; \frac{1}{4\pi\varepsilon_0}\sum_{\ell=0}^\infty\sum_{m=-\ell}^{\ell} M_\ell^m\,\frac{Y_\ell^m(\theta,\varphi)}{r^{\ell+1}} ,
\qquad
M_\ell^m \;=\; \frac{4\pi}{2\ell+1}\sum_i q_i\,r_i^{\,\ell}\,Y_\ell^m(\theta_i,\varphi_i)^* . \tag{4}
$$

The numbers $M_\ell^m$ are the **multipole moments** of the distribution. For a continuous density $\rho$ the sums over $i$ become integrals, $M_\ell^m = \frac{4\pi}{2\ell+1}\int \rho(\mathbf{r}')\,r'^{\,\ell}\,Y_\ell^m(\Omega')^*\,dV'$.

If the charges lie on the polar axis, at $z = a_i$, the sum collapses to $m = 0$ and (4) becomes Arfken's linear multipole expansion

$$
\psi = \frac{1}{4\pi\varepsilon_0 r}\left[\mu_0 + \frac{\mu_1}{r}P_1(\cos\theta) + \frac{\mu_2}{r^2}P_2(\cos\theta) + \cdots\right],
\qquad
\mu_n = \sum_i q_i a_i^{\,n} , \tag{5}
$$

with $\mu_0$ the **monopole moment** (the total charge), $\mu_1$ the **dipole moment** and $\mu_2$ the **quadrupole moment**. Both expansions converge for $r$ larger than every $r_i$, that is at field points farther from the origin than any part of the source.

**Normalizations differ between authors.** Arfken warns of this explicitly: his $M_\ell^m$ of (4) is the choice that makes the expansion formula simplest, and it does not reproduce the traditional scalings of the low-order moments. With his convention

$$
M_0^0 = \sqrt{4\pi}\sum_i q_i , \qquad M_1^0 = \sqrt{\tfrac{4\pi}{3}}\sum_i q_i z_i ,
$$

so the monopole moment is $\sqrt{4\pi}$ times the total charge and $M_1^0$ is $\sqrt{4\pi/3}$ times the $z$-component of the usual dipole vector. We follow Arfken's convention and state the factors wherever a traditional moment is wanted.
:::

:::idea{provenance=original}
Take the Laplace expansion (2), put $\mathbf{r}_1 = \mathbf{r}_i$ (a source point) and $\mathbf{r}_2 = \mathbf{r}$ (the field point), and note that the hypothesis $r > a$ decides once and for all which radius is the larger: $r_> = r$ and $r_< = r_i$ for every $i$. The $\ell$th term then factors into $r_i^{\ell}Y_\ell^m(\Omega_i)^*$, which involves the source only, times $Y_\ell^m(\Omega)/r^{\ell+1}$, which involves the field point only. Summing over the charges touches only the first factor, and what comes out is a finite list of numbers that is all the far field ever needs to know about the source. That is the whole content of the expansion: the exterior field of a localized source is determined by countably many numbers, and the first few of them dominate.
:::

:::proof{provenance=adapted src="arfken-2013:§16.3, p. 801"}
**Step 1 (superpose).** By linearity, the potential of the charges is the sum of their individual Coulomb potentials,

$$
\psi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\sum_i \frac{q_i}{\lvert\mathbf{r}-\mathbf{r}_i\rvert} ,
$$

each term being $4\pi\varepsilon_0^{-1}q_i$ times the fundamental solution of :ref[Laplace's equation]{to=pde.laplace-fundamental-solution} centred at $\mathbf{r}_i$.

**Step 2 (expand each term).** For each $i$ we have $r_i \le a < r$, so in (2) the roles are fixed: $r_< = r_i$, $r_> = r$. Hence

$$
\frac{1}{\lvert\mathbf{r}-\mathbf{r}_i\rvert} = \sum_{\ell=0}^\infty\frac{4\pi}{2\ell+1}\frac{r_i^{\,\ell}}{r^{\,\ell+1}}\sum_{m=-\ell}^{\ell}Y_\ell^m(\Omega_i)^*\,Y_\ell^m(\Omega) .
$$

**Step 3 (exchange the sums).** The sum over $i$ is finite and each expansion converges absolutely for $r > a$ (the terms are dominated by $(a/r)^\ell$ times a bounded factor, by the bound $\lvert Y_\ell^m\rvert \le \sqrt{(2\ell+1)/4\pi}$ that follows from the addition theorem at $\chi = 0$). So the order of summation may be changed:

$$
\psi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\sum_{\ell=0}^\infty\sum_{m=-\ell}^{\ell}\left[\frac{4\pi}{2\ell+1}\sum_i q_ir_i^{\,\ell}Y_\ell^m(\Omega_i)^*\right]\frac{Y_\ell^m(\Omega)}{r^{\ell+1}} ,
$$

and the bracket is $M_\ell^m$, which is (4).

**Step 4 (the axial case).** If every $\mathbf{r}_i$ lies on the positive polar axis, $\theta_i = 0$, then $Y_\ell^m(0,\varphi_i) = \sqrt{(2\ell+1)/4\pi}\;\delta_{m0}$, so only $m = 0$ survives in $M_\ell^m$; and $Y_\ell^0(\theta,\varphi) = \sqrt{(2\ell+1)/4\pi}\,P_\ell(\cos\theta)$. Substituting both into (4),

$$
\psi = \frac{1}{4\pi\varepsilon_0}\sum_\ell \frac{4\pi}{2\ell+1}\cdot\frac{2\ell+1}{4\pi}\left(\sum_i q_ia_i^{\,\ell}\right)\frac{P_\ell(\cos\theta)}{r^{\ell+1}}
= \frac{1}{4\pi\varepsilon_0}\sum_\ell \frac{\mu_\ell\,P_\ell(\cos\theta)}{r^{\ell+1}} ,
$$

which is (5). $\square$
:::

:::statement[Only the lowest nonvanishing moment is independent of the origin]{provenance=adapted src="arfken-2013:§15.3, p. 739"}
Move the expansion centre from $\mathbf{0}$ to $\mathbf{r}_p$, so that each $\mathbf{r}_i$ is replaced by $\mathbf{r}_i - \mathbf{r}_p$ and the moments change accordingly. Then the lowest nonvanishing moment of the distribution is unchanged, while every higher moment is in general changed. In particular:

- the monopole moment — the total charge — is always independent of the choice of centre;
- the dipole moment is independent of it only when the total charge is zero;
- the quadrupole moment is independent of it only when the total charge and the dipole moment both vanish.
:::

:::proof{provenance=original}
It is enough to argue with the axial moments (5); the same computation with $\mathbf{r}_i\to\mathbf{r}_i - \mathbf{r}_p$ gives the general case, and Arfken's argument is the one in Step 3.

**Step 1 (shift the moments).** With all charges on the axis and the centre moved to $z = z_p$, the new moments are

$$
\tilde\mu_n = \sum_i q_i\,(a_i - z_p)^n = \sum_{j=0}^{n}\binom{n}{j}(-z_p)^{\,n-j}\sum_i q_ia_i^{\,j} = \sum_{j=0}^n\binom nj (-z_p)^{n-j}\mu_j ,
$$

by the binomial theorem. So $\tilde\mu_n$ is a combination of $\mu_0,\dots,\mu_n$ with $\mu_n$ appearing with coefficient $1$.

**Step 2 (the lowest one).** Let $N$ be the smallest index with $\mu_N \neq 0$, so $\mu_0=\cdots=\mu_{N-1} = 0$. Step 1 with $n = N$ leaves only the $j = N$ term:

$$
\tilde\mu_N = \mu_N .
$$

So the lowest nonvanishing moment is unchanged, and in particular is still nonvanishing, so $N$ itself does not depend on the centre either.

**Step 3 (the higher ones).** For $n > N$, Step 1 gives $\tilde\mu_n = \mu_n + \binom{n}{N}(-z_p)^{n-N}\mu_N + (\text{terms with } \mu_j,\ N<j<n)$, and the displayed term is nonzero whenever $z_p \ne 0$. So $\tilde\mu_n \ne \mu_n$ in general. Arfken's version of this step is the observation that the binomial expansion of $\lvert\mathbf{r}-\mathbf{r}_p\rvert^{-n}$ has the form $r^{-n} + Cr_p r^{-(n+1)} + \cdots$, so that moving the centre feeds each term of the expansion into all the later ones but never into the earlier ones. $\square$
:::

:::remark{provenance=original}
**How many components a moment has, and why.** For a unit charge at $(x,y,z)$ the moments $M_\ell^m$ of (4) are, in Cartesian form, homogeneous polynomials of degree $\ell$. Arfken tabulates them for $\ell \le 2$; for example $M_0^0 = (4\pi)^{1/2}$, $M_1^0 = (4\pi/3)^{1/2}z$, $M_1^{\pm1} = \mp(2\pi/3)^{1/2}(x\pm iy)$, and $M_2^0 = (4\pi/5)^{1/2}\tfrac12(2z^2-x^2-y^2)$. There are $2\ell+1$ values of $m$, but the space of homogeneous polynomials of degree $\ell$ in three variables has dimension $\binom{\ell+2}{2}$, which is larger from $\ell = 2$ on: six monomials $x^2,y^2,z^2,xy,xz,yz$ against five values of $m$. Arfken resolves the discrepancy by identifying the missing direction: the combination $r^2 = x^2+y^2+z^2$ is rotationally invariant and so belongs with $M_0^0$, but it carries the wrong power of $r$ to contribute to a solution of Laplace's equation, and therefore cannot appear in a potential. The same happens at $\ell = 3$, where ten monomials split into seven that span the $M_3^m$ and three with the symmetry of $M_1^m$ but again the wrong radial behaviour. In Cartesian language this is the statement that the quadrupole tensor may be taken traceless.

**Symmetry makes moments vanish, and it is worth checking before computing.** Riley, Hobson and Bence make this the opening of their chapter on representation theory, with three molecules. Hydrogen chloride has no symmetry operation to forbid a dipole moment and has one. Carbon dioxide is linear and symmetric: a rotation about the long axis kills any perpendicular component, and a rotation by $\pi$ about a perpendicular axis through the carbon, or a reflection in the plane through the carbon, reverses the parallel component while carrying the molecule to an indistinguishable copy — so that component is zero too, and CO$_2$ has no permanent dipole moment. Ozone is bent, and only the component perpendicular to its two-fold axis is forbidden. Their summary is the one to remember: symmetry shows that components are forbidden; it never shows that the remaining ones are nonzero, only that they may be.

**What the expansion is not.** It is an expansion of the field *outside* a sphere containing the whole source. Arfken's Eq. (15.62) is the companion statement for a field point inside a spherical shell of charge, where the roles of $r$ and $a$ in (1) are exchanged and the series runs in powers of $r/a$; a field point in the middle of a distribution needs both, split at $r$, as in the Green's-function expansion of :ref[Green's functions for Laplace and Poisson problems]{to=green.laplace-green-functions}. Nor is the expansion restricted to electrostatics: Arfken's third closing observation is that it applies to any inverse-square force, so that the shape of the Earth is described by mass multipoles, and the leading term of gravitational radiation is set by the time dependence of the mass quadrupole.
:::

:::example[A planar quadrupole: four charges, no monopole, no dipole]{provenance=original}
Take $a>0$ and place charges

$$
+q \text{ at } (\pm a,0,0), \qquad -q \text{ at } (0,\pm a,0) ,
$$

four equal magnitudes at the corners of a square in the equatorial plane, alternating in sign. Work in units with $4\pi\varepsilon_0 = 1$.

**The low moments vanish.** The total charge is $q+q-q-q = 0$, so $M_0^0 = 0$. The dipole vector is $q(a,0,0)+q(-a,0,0)-q(0,a,0)-q(0,-a,0) = \mathbf{0}$, so $M_1^m = 0$ for all $m$. Both vanishings are forced by symmetry: the configuration is carried to itself by $\mathbf{r}\mapsto-\mathbf{r}$ with the charges unchanged, so every odd-$\ell$ moment is zero, and by the rotation through $\pi/2$ about the $z$-axis combined with $q\mapsto-q$, which kills the $m = 0$ terms.

**The quadrupole moments.** All four charges have $r_i = a$ and $\theta_i = \pi/2$, with $\varphi_i = 0,\pi$ (charge $+q$) and $\pi/2, 3\pi/2$ (charge $-q$). Since $Y_2^{\pm1}\propto\sin\theta\cos\theta\,e^{\pm i\varphi}$ vanishes at $\theta = \pi/2$, $M_2^{\pm1} = 0$. For $m = 0$, $Y_2^0(\pi/2,\varphi)$ is the same constant for all four charges, and the charges sum to zero, so $M_2^0 = 0$. Only $m = \pm2$ survives. With $Y_2^{\pm2}(\theta,\varphi) = \sqrt{15/32\pi}\,\sin^2\theta\,e^{\pm2i\varphi}$,

$$
\sum_i q_i Y_2^{2}(\Omega_i)^* = \sqrt{\frac{15}{32\pi}}\Bigl[q e^{0} + qe^{-2\pi i} - qe^{-\pi i} - qe^{-3\pi i}\Bigr] = \sqrt{\frac{15}{32\pi}}\,\bigl[q+q+q+q\bigr] = 4q\sqrt{\frac{15}{32\pi}} ,
$$

so

$$
M_2^{2} = M_2^{-2} = \frac{4\pi}{5}\,a^2\cdot 4q\sqrt{\frac{15}{32\pi}} = \frac{2\sqrt{30\pi}}{5}\,qa^2 = 3.8832518\,qa^2 .
$$

**The leading far field.** Substituting into (4), and using $e^{2i\varphi}+e^{-2i\varphi} = 2\cos2\varphi$,

$$
\psi \;\approx\; \frac{1}{r^3}\bigl[M_2^2Y_2^2 + M_2^{-2}Y_2^{-2}\bigr]
= \frac{4\pi}{5}\cdot 4q a^2\cdot\frac{15}{32\pi}\cdot\frac{2\sin^2\theta\cos2\varphi}{r^3}
= \frac{3qa^2\sin^2\theta\cos2\varphi}{r^3} . \tag{6}
$$

*Cross-check against the Cartesian form.* The traceless quadrupole tensor $Q_{jk} = \sum_i q_i(3x_jx_k - r_i^2\delta_{jk})$ of this configuration is diagonal with $Q_{xx} = 6qa^2$, $Q_{yy} = -6qa^2$, $Q_{zz} = 0$ (each $+q$ contributes $(2,-1,-1)qa^2$ and each $-q$ contributes $(1,-2,1)qa^2$ to the diagonal). The standard Cartesian quadrupole potential $\tfrac12 r^{-3}Q_{jk}\hat n_j\hat n_k$ is then $\tfrac12 r^{-3}\cdot6qa^2(\hat n_x^2-\hat n_y^2) = 3qa^2\sin^2\theta\cos2\varphi/r^3$, which is (6).

**Numerical check and the rate of convergence.** Set $a = 1$, $q = 1$. At the point $r = 5$, $\theta = \pi/2$, $\varphi = 0$ — that is, $(5,0,0)$ — the exact potential is

$$
\frac{1}{4} + \frac{1}{6} - \frac{2}{\sqrt{26}} = 0.02443440 ,
$$

while (6) gives $3/125 = 0.02400000$. Comparing at several points:

| $r$ | $\theta$ | $\varphi$ | exact | from (6) | error |
|---|---|---|---|---|---|
| $5$ | $\pi/2$ | $0$ | $0.02443440$ | $0.02400000$ | $4.34\times10^{-4}$ |
| $10$ | $\pi/2$ | $0$ | $0.00301276$ | $0.00300000$ | $1.28\times10^{-5}$ |
| $20$ | $\pi/2$ | $0$ | $0.00037539$ | $0.00037500$ | $3.93\times10^{-7}$ |
| $5$ | $\pi/3$ | $0.3$ | $0.01465879$ | $0.01485604$ | $-1.97\times10^{-4}$ |
| $10$ | $\pi/3$ | $0.3$ | $0.00185111$ | $0.00185701$ | $-5.89\times10^{-6}$ |

Each doubling of $r$ divides the error by about $32 = 2^5$, so the error decays like $r^{-5}$ — exactly the size of the next surviving term, $\ell = 4$. The odd-$\ell$ terms are absent by the inversion symmetry noted above, so the first correction to a quadrupole here is a hexadecapole, not an octupole.

**The moments are origin-independent here.** Because the monopole and dipole moments both vanish, the previous statement says the quadrupole moments cannot change if the expansion centre is moved. Checking directly: shifting all four charges by a vector $\mathbf{d}$ changes $\sum q_i(3x_jx_k - r^2\delta_{jk})$ by terms proportional to $\sum q_i x_j$ (the dipole, zero) and $\sum q_i$ (the total charge, zero). So $Q_{jk}$ is unchanged, as claimed.
:::

:::example[When the dipole moment depends on where you put the origin]{provenance=original}
Place $+2q$ at $z = a$ and $+q$ at $z = -a$ — two charges of the *same* sign, so the monopole moment does not vanish. Using the axial moments (5) with the origin at $z = 0$:

$$
\mu_0 = 2q + q = 3q, \qquad \mu_1 = 2q\cdot a + q\cdot(-a) = qa, \qquad \mu_2 = 2qa^2 + qa^2 = 3qa^2 .
$$

Now move the centre to $z = z_p$. By Step 1 of the proof,

$$
\tilde\mu_0 = 3q, \qquad \tilde\mu_1 = \mu_1 - z_p\mu_0 = qa - 3qz_p, \qquad \tilde\mu_2 = \mu_2 - 2z_p\mu_1 + z_p^2\mu_0 = 3qa^2 - 2qaz_p + 3qz_p^2 .
$$

The monopole moment is unmoved, as it must be. The dipole moment is not: it is $qa$ about the origin, zero about $z_p = a/3$ — the charge-weighted centre — and $-2qa$ about $z_p = a$. So the sentence "this configuration has dipole moment $qa$" is meaningless without saying about which point, whereas "this configuration has total charge $3q$" is not.

*The field does not care.* At $r = 10a$ on the positive axis, the exact potential (units $4\pi\varepsilon_0=1$, $q=a=1$) is $2/9 + 1/11 = 0.31313131$. From the origin, (5) gives $\mu_0/r + \mu_1/r^2 + \mu_2/r^3 = 0.3 + 0.01 + 0.003 = 0.31300000$. From the centre $z_p = 1/3$, the field point is at distance $r' = 10 - 1/3 = 9.6666667$ and the moments are $\tilde\mu_0 = 3$, $\tilde\mu_1 = 0$, $\tilde\mu_2 = 3 - 2/3 + 1/3 = 2.6666667$, giving $3/9.6666667 + 0 + 2.6666667/9.6666667^3 = 0.31034483 + 0.00295215 = 0.31329698$. The two truncations miss the exact value by $-1.31\times10^{-4}$ and $+1.66\times10^{-4}$: both are accurate to four digits, and they bracket the answer. Including the next ($\ell = 3$) term improves each to $0.3131000$ and $0.3130934$ respectively, against the exact $0.3131313$. Moving the origin reshuffles the moments but is bound to leave the sum of the series alone; the choice $z_p = a/3$ buys a vanishing dipole term at the price of a changed radial variable and a changed quadrupole.
:::

:::application{provenance=original}
**Induced dipoles and polarizability.** Riley, Hobson and Bence's conducting sphere is the cleanest instance of a multipole moment being *produced* rather than measured. An uncharged conducting sphere of radius $a$ in a uniform field $E$ must have a potential that tends to $-Er\cos\theta$ far away and is constant on the surface; since $\cos\theta = P_1(\cos\theta)$, only the $\ell=1$ terms of the separated solution can appear (:ref[separation of variables]{to=pde.separation-of-variables}), and the two conditions determine them, giving $v = -Er(1-a^3/r^3)\cos\theta$. Comparing the second term with the point-dipole potential $\mu P_1(\cos\theta)/4\pi\varepsilon_0r^2$ identifies an induced dipole moment $4\pi\varepsilon_0a^3E$: the polarizability of a conducting sphere is $4\pi\varepsilon_0a^3$, three times its volume times $\varepsilon_0$. The same calculation with a dielectric instead of a conductor gives the Clausius–Mossotti factor, and that is how the refractive index of a dilute suspension is computed.

**Nuclear and molecular moments as experimental quantities.** The $\ell = 2$ moment of a nucleus is measurable through its interaction with the electric field gradient of the surrounding electrons, and a nonzero value is direct evidence that the nucleus is not spherical — prolate for a positive quadrupole moment, oblate for a negative one. The origin-independence statement is what makes such a number well defined: a nucleus has zero dipole moment (by parity), so its quadrupole moment is its lowest nonvanishing one and does not depend on where the coordinate origin is put. By the same token a quoted molecular dipole moment is meaningful only for a neutral molecule, which is why one reads of the dipole moment of water but of the quadrupole moment of an ion.

**Gravity: geodesy and gravitational waves.** The expansion applies unchanged to Newtonian gravity, with $\rho$ the mass density and the sign reversed. Because mass density is positive, the monopole moment never vanishes, so the gravitational dipole moment of a body is always origin-dependent — and the origin that makes it vanish is the centre of mass. This is why the gravitational field of the Earth is quoted as a series of $J_\ell$ coefficients about the centre of mass, with the flattening appearing as $J_2 \approx 1.08\times10^{-3}$ and everything beyond it four orders of magnitude smaller; satellite orbits are fitted to those coefficients, and the measured drift of the coefficients tracks the melting of ice sheets. In general relativity the leading radiative term is the second time derivative of the mass quadrupole, as Arfken notes; the mass monopole and dipole cannot radiate because they are conserved.

**Fast summation.** The expansion is the mathematical content of the fast multipole method. To evaluate the potential of $N$ sources at $N$ targets, group the sources into cells; for a target far from a cell, replace the sources in the cell by the first few of its multipole moments, computed once for the whole cell. The error is controlled by the convergence rate in (1), which is governed by $r_</r_>$ — the ratio of the cell radius to the distance — and the example above shows how fast that is in practice: truncating at the quadrupole gave three-digit accuracy at five cell radii. This turns an $O(N^2)$ computation into $O(N)$, and it is the standard tool in astrophysical $N$-body simulation, molecular dynamics with Coulomb interactions, and boundary-element solvers built on the fundamental solution of :ref[Laplace's equation]{to=pde.laplace-fundamental-solution}.

**Partial waves in scattering.** The same factorization of a two-point function into products of one-point functions is what makes partial-wave analysis possible. Arfken derives the companion expansion $e^{i\mathbf{k}\cdot\mathbf{r}} = 4\pi\sum_{\ell m}i^\ell j_\ell(kr)Y_\ell^m(\Omega_k)^*Y_\ell^m(\Omega_r)$ from the same addition theorem, with spherical Bessel functions replacing the powers of $r$; it converts an incident plane wave into a superposition of spherical waves, each of which is scattered independently by a central potential. See :ref[the Helmholtz equation]{to=pde.helmholtz-equation} and :ref[spherical Bessel functions]{to=spec.spherical-bessel}.
:::
