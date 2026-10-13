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
    loc: "§15.3, pp. 736–739: the potential of a point charge $q$ at $z=a$ written through the Legendre generating function, Eqs. (15.58)–(15.62), giving the two expansions valid for $r>a$ and $r<a$ and the combined Laplace expansion (15.63) of $1/\\lvert\\mathbf{r}_1-\\mathbf{r}_2\\rvert$ in $r_</r_>$; the electric dipole built from $\\pm q$ at $z=\\pm a$ with the cancellation of alternate terms, Eqs. (15.64)–(15.65), the point-dipole limit $a\\to0$ at fixed $\\mu = 2qa$, Eq. (15.66), the linear quadrupole of Fig. 15.7, and the linear multipole expansion (15.67) with moments $\\mu_0 = \\sum q_i$, $\\mu_1 = \\sum q_ia_i$, $\\mu_2 = \\sum q_ia_i^2$; p. 739, the statement that only the lowest nonvanishing moment is unchanged by moving the expansion centre, and the three closing observations (continuous distributions, non-linear arrays, and the applicability to any inverse-square force); §16.3, pp. 797–802: the spherical harmonic addition theorem (16.57), the Laplace expansion in spherical harmonics (16.66), the general multipole expansion (16.72)–(16.74) with $M_l^m = \\frac{4\\pi}{2l+1}\\sum_i q_ir_i^lY_l^m(\\theta_i,\\varphi_i)^*$, the warning that authors scale the moments differently, the values $M_0^0 = (4\\pi)^{1/2}q_{\\text{tot}}$ and $M_1^0 = (4\\pi/3)^{1/2}\\sum q_iz_i$, the Cartesian forms of $M_l^m$ for $l\\le2$, and the count of $2l+1$ components against the larger space of degree-$l$ monomials; Eq. (16.61), pp. 798–799, the plane wave expanded in spherical waves by the same addition theorem"
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

which is (1). The generating-function expansion is guaranteed only for $\lvert h\rvert < 1$; at $h = 1$, that is at $r_1 = r_2$, absolute convergence is lost, and Arfken excludes that case. Note that $\lvert\mathbf{r}_1-\mathbf{r}_2\rvert$ itself is perfectly finite there unless also $\chi = 0$, so what the exclusion limits is the expansion rather than the function.

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

each term being $q_i/\varepsilon_0$ times the fundamental solution $\Phi(\mathbf{x}) = 1/(4\pi\lvert\mathbf{x}\rvert)$ of :ref[Laplace's equation]{to=pde.laplace-fundamental-solution} centred at $\mathbf{r}_i$, since $(q_i/\varepsilon_0)\Phi(\mathbf{r}-\mathbf{r}_i) = q_i/(4\pi\varepsilon_0\lvert\mathbf{r}-\mathbf{r}_i\rvert)$.

**Step 2 (expand each term).** For each $i$ we have $r_i \le a < r$, so in (2) the roles are fixed: $r_< = r_i$, $r_> = r$. Hence

$$
\frac{1}{\lvert\mathbf{r}-\mathbf{r}_i\rvert} = \sum_{\ell=0}^\infty\frac{4\pi}{2\ell+1}\frac{r_i^{\,\ell}}{r^{\,\ell+1}}\sum_{m=-\ell}^{\ell}Y_\ell^m(\Omega_i)^*\,Y_\ell^m(\Omega) .
$$

**Step 3 (exchange the sums).** The sum over $i$ is finite, and each expansion converges absolutely for $r > a$. To see that, bound the inner sum by the Cauchy–Schwarz inequality and then use $\sum_{m=-\ell}^{\ell}\lvert Y_\ell^m(\Omega)\rvert^2 = (2\ell+1)/4\pi$, which is the addition theorem (3) at $\chi = 0$:

$$
\sum_{m=-\ell}^{\ell}\bigl\lvert Y_\ell^m(\Omega_i)^*\,Y_\ell^m(\Omega)\bigr\rvert
\;\le\; \Bigl(\sum_m \lvert Y_\ell^m(\Omega_i)\rvert^2\Bigr)^{1/2}\Bigl(\sum_m \lvert Y_\ell^m(\Omega)\rvert^2\Bigr)^{1/2}
\;=\; \frac{2\ell+1}{4\pi} .
$$

The $\ell$th term of the expansion of $1/\lvert\mathbf{r}-\mathbf{r}_i\rvert$ is therefore at most $\frac{4\pi}{2\ell+1}\cdot\frac{r_i^{\ell}}{r^{\ell+1}}\cdot\frac{2\ell+1}{4\pi} = r_i^{\ell}/r^{\ell+1} \le r^{-1}(a/r)^{\ell}$ in modulus, a convergent geometric series since $a < r$. (Applying the pointwise bound $\lvert Y_\ell^m\rvert \le \sqrt{(2\ell+1)/4\pi}$ to each of the $2\ell+1$ terms separately would leave a factor $2\ell+1$, which Cauchy–Schwarz removes.) So the order of summation may be changed:

$$
\psi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\sum_{\ell=0}^\infty\sum_{m=-\ell}^{\ell}\left[\frac{4\pi}{2\ell+1}\sum_i q_ir_i^{\,\ell}Y_\ell^m(\Omega_i)^*\right]\frac{Y_\ell^m(\Omega)}{r^{\ell+1}} ,
$$

and the bracket is $M_\ell^m$, which is (4).

**Step 4 (the axial case, for $a_i$ of either sign).** Let every charge sit on the polar axis, at $z = a_i$ with $a_i$ positive, negative or zero. A charge with $a_i > 0$ has $r_i = a_i$ and $\theta_i = 0$; one with $a_i < 0$ has $r_i = \lvert a_i\rvert = -a_i$ and $\theta_i = \pi$. By part 3 of :ref[spherical harmonics]{to=spec.spherical-harmonics} the two axis values are

$$
Y_\ell^m(0,\varphi) = \sqrt{\frac{2\ell+1}{4\pi}}\,\delta_{m0},
\qquad
Y_\ell^m(\pi,\varphi) = (-1)^\ell\sqrt{\frac{2\ell+1}{4\pi}}\,\delta_{m0} ,
$$

both real, so in either case only $m = 0$ survives in $M_\ell^m$, and the two cases combine into the single formula

$$
r_i^{\,\ell}\,Y_\ell^0(\theta_i,\varphi_i)^* = \lvert a_i\rvert^{\,\ell}\,(\operatorname{sgn} a_i)^{\ell}\sqrt{\frac{2\ell+1}{4\pi}} = a_i^{\,\ell}\sqrt{\frac{2\ell+1}{4\pi}} ,
$$

because $(-1)^\ell = (\operatorname{sgn} a_i)^\ell$ when $a_i < 0$. (A charge at the origin, $a_i = 0$, contributes $0$ for $\ell \ge 1$ and $q_i$ for $\ell = 0$, which is what $a_i^{\,\ell}$ gives with $0^0 = 1$.) At the field point $Y_\ell^0(\theta,\varphi) = \sqrt{(2\ell+1)/4\pi}\,P_\ell(\cos\theta)$. Substituting both into (4),

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

:::idea{provenance=original}
A moment is a weighted sum of a solid harmonic over the charges, and a solid harmonic of degree $\ell$ is a homogeneous harmonic polynomial of that degree. Translating such a polynomial keeps it harmonic and keeps its degree-$\ell$ part exactly where it was; everything the translation creates is of *lower* degree. So moving the centre adds to each moment a combination of moments of strictly lower order and nothing else. If the lower ones are all zero there is nothing to add, which is the theorem; if they are not, the added terms are visible, which gives the converse in the cases named.
:::

:::proof{provenance=original}
**Step 1 (moments as a linear functional on harmonic polynomials).** For $\ell \ge 0$ and $\lvert m\rvert \le \ell$ put

$$
S_\ell^m(\mathbf{x}) \;=\; r^{\ell}\,Y_\ell^m(\Omega)^* , \qquad \mathbf{x} = r\,\Omega .
$$

By part 7 of :ref[spherical harmonics]{to=spec.spherical-harmonics}, $r^\ell Y_\ell^m$ is a homogeneous polynomial of degree $\ell$ in $x,y,z$ which is harmonic on $\mathbb{R}^3$, and by the conjugation relation of part 2 there, $Y_\ell^m{}^* = (-1)^m Y_\ell^{-m}$, so $S_\ell^m = (-1)^m r^\ell Y_\ell^{-m}$ is one too. Write $H_\ell$ for the complex span of $S_\ell^{-\ell},\dots,S_\ell^{\ell}$; relabelling $m \mapsto -m$ shows this is also the span of the solid harmonics $r^\ell Y_\ell^m$.

$H_\ell$ is in fact *all* of the homogeneous harmonic polynomials of degree $\ell$. For if $P$ is one, then $P$ is harmonic on the whole of $\mathbb{R}^3$ and regular at the origin, so the second sentence of part 7 writes it as $P = \sum_{l,m}A_{lm}r^lY_l^m$; each $r^lY_l^m$ is homogeneous of degree $l$, and homogeneous polynomials of distinct degrees are linearly independent, so matching degrees against the homogeneous $P$ leaves only $l = \ell$ and puts $P$ in $H_\ell$.

Define the linear functional $\Lambda(P) = \sum_i q_i\,P(\mathbf{r}_i)$ on polynomials. Then (4) reads $M_\ell^m = \frac{4\pi}{2\ell+1}\Lambda(S_\ell^m)$, and the moments about the new centre $\mathbf{r}_p$ — got by replacing each $\mathbf{r}_i$ by $\mathbf{r}_i - \mathbf{r}_p$ — are

$$
\tilde M_\ell^m \;=\; \frac{4\pi}{2\ell+1}\sum_i q_i\,S_\ell^m(\mathbf{r}_i - \mathbf{r}_p) \;=\; \frac{4\pi}{2\ell+1}\,\Lambda\bigl(S_\ell^m(\,\cdot\, - \mathbf{r}_p)\bigr) .
$$

In this language, *all* the moments of order $\ell$ vanish precisely when $\Lambda$ vanishes on $H_\ell$.

**Step 2 (what a translation does to a harmonic polynomial).** Let $P$ be a homogeneous harmonic polynomial of degree $N$ and set $Q(\mathbf{x}) = P(\mathbf{x}-\mathbf{r}_p)$. Then $Q$ is a polynomial of degree $N$, and it is harmonic, because $\nabla^2$ is translation invariant. Split $Q$ into its homogeneous parts, $Q = \sum_{d=0}^{N} Q_d$. Each $\nabla^2 Q_d$ is homogeneous of degree $d-2$, and homogeneous polynomials of distinct degrees are linearly independent, so $\nabla^2 Q = 0$ forces $\nabla^2 Q_d = 0$ for every $d$ separately: each homogeneous part of a harmonic polynomial is itself harmonic. Finally, expanding $P(\mathbf{x}-\mathbf{r}_p)$ and collecting terms of top degree gives $Q_N = P$, since $P$ is homogeneous of degree $N$. Hence

$$
P(\mathbf{x}-\mathbf{r}_p) \;=\; P(\mathbf{x}) \;+\; \sum_{d<N} Q_d(\mathbf{x}) , \qquad Q_d \in H_d . \tag{7}
$$

This is the step that the axial moments cannot supply on their own: a shift off the axis destroys the axial symmetry, so the scalar binomial expansion of $(a_i - z_p)^n$ in Step 5 below settles only the axial case.

**Step 3 (the lowest nonvanishing moment is unchanged).** Let $N$ be the smallest order at which some moment is nonzero, so by Step 1 $\Lambda$ vanishes on $H_d$ for every $d < N$. Apply (7) with $P = S_N^m$, whose lower homogeneous parts $Q_d$ lie in $H_d$ with $d<N$:

$$
\tilde M_N^m = \frac{4\pi}{2N+1}\Bigl[\Lambda(S_N^m) + \sum_{d<N}\Lambda(Q_d)\Bigr] = \frac{4\pi}{2N+1}\Lambda(S_N^m) = M_N^m
$$

for every $m$ and every $\mathbf{r}_p$. So the whole set of order-$N$ moments survives the shift unchanged; in particular it is still not all zero, so the order $N$ itself does not depend on the centre either.

**Step 4 (the three named cases).** The converses in the three bullets of the statement come out of (7) at low order, and need no choice of phase convention.

- *Monopole.* $H_0$ consists of the constants, so $P(\mathbf{x}-\mathbf{r}_p) = P(\mathbf{x})$ and $\tilde M_0^0 = M_0^0$ for every $\mathbf{r}_p$. This is Step 3 with $N = 0$: the total charge is always centre-independent.
- *Dipole.* Every linear form is harmonic, so $H_1$ is the space of all $P(\mathbf{x}) = \alpha x+\beta y+\gamma z$, and for such a $P$, $P(\mathbf{x}-\mathbf{r}_p) = P(\mathbf{x}) - P(\mathbf{r}_p)$. Hence $\Lambda(P(\,\cdot\,-\mathbf{r}_p)) = \Lambda(P) - P(\mathbf{r}_p)\sum_i q_i$. The three order-1 moments are the values of $\Lambda$ on the basis $S_1^{-1},S_1^0,S_1^1$ of $H_1$, so they are all unchanged exactly when $\Lambda(P(\,\cdot\,-\mathbf{r}_p)) = \Lambda(P)$ for every $P\in H_1$; by the displayed identity that happens for every $\mathbf{r}_p$ if and only if the total charge $\sum_i q_i$ vanishes, since otherwise a $P$ and an $\mathbf{r}_p$ with $P(\mathbf{r}_p)\ne0$ move one of them.
- *Quadrupole.* Take the real element $S_2^0(\mathbf{x}) = \sqrt{5/16\pi}\,(2z^2-x^2-y^2)$ of $H_2$ and $\mathbf{r}_p = (x_p,y_p,z_p)$. Since
  $$
  2(z-z_p)^2 - (x-x_p)^2 - (y-y_p)^2 = (2z^2-x^2-y^2) - 4z_pz + 2x_px + 2y_py + \bigl(2z_p^2-x_p^2-y_p^2\bigr) ,
  $$
  we get, with $c = \frac{4\pi}{5}\sqrt{5/16\pi} = \tfrac12\sqrt{4\pi/5}$,
  $$
  \tilde M_2^0 - M_2^0 = c\Bigl[-4z_p\sum_i q_iz_i + 2x_p\sum_i q_ix_i + 2y_p\sum_i q_iy_i + \bigl(2z_p^2-x_p^2-y_p^2\bigr)\sum_i q_i\Bigr] .
  $$
  The right-hand side is a polynomial in $\mathbf{r}_p$, so it vanishes for every shift only if its linear part does, which kills all three components of the dipole vector $\sum_i q_i\mathbf{r}_i$, and its quadratic part does, which kills the total charge. Together with Step 3 this is the third bullet.

**Step 5 (the axial moments, and how they change).** On the polar axis the general moments collapse to the $\mu_n$ of (5), and the shift is a scalar computation. With the centre moved to $z = z_p$ and all charges at $z = a_i$, the binomial theorem gives

$$
\tilde\mu_n = \sum_i q_i\,(a_i - z_p)^n = \sum_{j=0}^{n}\binom{n}{j}(-z_p)^{\,n-j}\sum_i q_ia_i^{\,j} = \sum_{j=0}^n\binom nj (-z_p)^{n-j}\mu_j ,
$$

which is (7) read in the one-dimensional case: $\tilde\mu_n$ is $\mu_n$ plus a combination of the strictly lower moments. For $n > N$ it gives $\tilde\mu_n = \mu_n + \binom{n}{N}(-z_p)^{n-N}\mu_N + (\text{terms with }\mu_j,\ N<j<n)$, whose second term is nonzero for every $z_p \ne 0$. So moments above the lowest really do move, and the "in general" in the statement cannot be dropped. Arfken reaches the same conclusion from the shape of the binomial expansion of $\lvert\mathbf{r}-\mathbf{r}_p\rvert^{-n}$, which feeds each term of the expansion into the later ones and never into the earlier ones. $\square$
:::

:::remark[How many components a moment has, and why]{provenance=adapted src="arfken-2013:§16.3, pp. 801–802"}
For a unit charge at $(x,y,z)$ the moments $M_\ell^m$ of (4) are, in Cartesian form, homogeneous polynomials of degree $\ell$. Arfken tabulates them for $\ell \le 2$; for example $M_0^0 = (4\pi)^{1/2}$, $M_1^0 = (4\pi/3)^{1/2}z$, $M_1^{\pm1} = \mp(2\pi/3)^{1/2}(x\pm iy)$, and $M_2^0 = (4\pi/5)^{1/2}\tfrac12(2z^2-x^2-y^2)$. There are $2\ell+1$ values of $m$, but the space of homogeneous polynomials of degree $\ell$ in three variables has dimension $\binom{\ell+2}{2}$, which is larger from $\ell = 2$ on: six monomials $x^2,y^2,z^2,xy,xz,yz$ against five values of $m$. Arfken resolves the discrepancy by identifying the missing direction: the combination $r^2 = x^2+y^2+z^2$ is rotationally invariant and so belongs with $M_0^0$, but it carries the wrong power of $r$ to contribute to a solution of Laplace's equation, and therefore cannot appear in a potential. The same happens at $\ell = 3$, where ten monomials split into seven that span the $M_3^m$ and three with the symmetry of $M_1^m$ but again the wrong radial behaviour. In Cartesian language this is the statement that the quadrupole tensor may be taken traceless.

:::

:::remark[Symmetry makes moments vanish, and it is worth checking before computing]{provenance=adapted src="rhb-2006:§29.1, pp. 1077–1078"}
Riley, Hobson and Bence open their chapter on representation theory with this, using three molecules. Hydrogen chloride has no symmetry operation to forbid a dipole moment, and has one. Carbon dioxide is linear and symmetric: a rotation about the long axis kills any perpendicular component, and a rotation by $\pi$ about a perpendicular axis through the carbon, or a reflection in the plane through the carbon, reverses the parallel component while carrying the molecule to an indistinguishable copy — so that component is zero too, and CO$_2$ has no permanent dipole moment. Ozone is bent, and only the component perpendicular to its two-fold axis is forbidden. The moral to carry away is one-sided: a symmetry operation can rule a component out, but no symmetry argument ever produces a nonzero moment. What survives the symmetry test is merely permitted, and whether it is actually there has to be settled by computation or by experiment.

:::

:::remark[What the expansion is not]{provenance=adapted src="arfken-2013:§15.3, Eq. (15.62), p. 736 and p. 739"}
It is an expansion of the field *outside* a sphere containing the whole source. Arfken's Eq. (15.62) is the companion statement for a field point *closer to the origin than the charge*: one single charge $q$ at $z = a$, seen from $r < a$, with the roles of $r$ and $a$ in (1) exchanged and the series running in powers of $r/a$. No shell appears in that statement, and none could: inside a uniform spherical shell of radius $a$ carrying total charge $q$ the potential is the constant $q/4\pi\varepsilon_0 a$, with no $P_n$ series at all. A field point in the middle of a distribution needs both expansions, split at $r$, as in the Green's-function expansion of :ref[Green's functions for Laplace and Poisson problems]{to=green.laplace-green-functions}. Nor is the expansion restricted to electrostatics: Arfken's third closing observation is that it applies to any inverse-square force, so that the shape of the Earth is described by mass multipoles, and the leading term of gravitational radiation is set by the time dependence of the mass quadrupole.
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

:::application[Induced dipoles and polarizability]{provenance=adapted src="rhb-2006:§21.3.1, p. 734"}
Riley, Hobson and Bence's conducting sphere is the cleanest instance of a multipole moment being *produced* rather than measured. An uncharged conducting sphere of radius $a$ in a uniform field $E$ must have a potential that tends to $-Er\cos\theta$ far away and is constant on the surface; since $\cos\theta = P_1(\cos\theta)$, only the $\ell=1$ terms of the separated solution can appear (:ref[separation of variables]{to=pde.separation-of-variables}), and the two conditions determine them, giving $v = -Er(1-a^3/r^3)\cos\theta$. Comparing the second term with the point-dipole potential $\mu P_1(\cos\theta)/4\pi\varepsilon_0r^2$ identifies an induced dipole moment $4\pi\varepsilon_0a^3E$: the polarizability of a conducting sphere is $4\pi\varepsilon_0a^3$, three times its volume times $\varepsilon_0$. The same calculation with a dielectric instead of a conductor gives the Clausius–Mossotti factor, and that is how the refractive index of a dilute suspension is computed.
:::

:::application{provenance=original}
**Nuclear and molecular moments as experimental quantities.** The $\ell = 2$ moment of a nucleus is measurable through its interaction with the electric field gradient of the surrounding electrons, and a nonzero value is direct evidence that the nucleus is not spherical — prolate for a positive quadrupole moment, oblate for a negative one. The origin-independence statement is what makes such a number well defined: a nucleus has zero dipole moment (by parity), so its quadrupole moment is its lowest nonvanishing one and does not depend on where the coordinate origin is put. By the same token a quoted molecular dipole moment is meaningful only for a neutral molecule, which is why one reads of the dipole moment of water but of the quadrupole moment of an ion.

**Gravity: geodesy and gravitational waves.** The expansion applies unchanged to Newtonian gravity, with $\rho$ the mass density and the sign reversed. Because mass density is positive, the monopole moment never vanishes, so the gravitational dipole moment of a body is always origin-dependent — and the origin that makes it vanish is the centre of mass. This is why the gravitational field of the Earth is quoted as a series of $J_\ell$ coefficients about the centre of mass, with the flattening appearing as $J_2 \approx 1.08\times10^{-3}$ and everything beyond it some three orders of magnitude smaller ($J_3 \approx -2.5\times10^{-6}$, $J_4 \approx -1.6\times10^{-6}$, each about $1/430$ of $J_2$); satellite orbits are fitted to those coefficients, and the measured drift of the coefficients tracks the melting of ice sheets. In general relativity the leading radiative term is the second time derivative of the mass quadrupole, as Arfken notes; the mass monopole and dipole cannot radiate because they are conserved.

**Fast summation.** The expansion is the mathematical content of the fast multipole method. To evaluate the potential of $N$ sources at $N$ targets, group the sources into cells; for a target far from a cell, replace the sources in the cell by the first few of its multipole moments, computed once for the whole cell. The error is controlled by the convergence rate in (1), which is governed by $r_</r_>$ — the ratio of the cell radius to the distance — and the example above shows how fast that is in practice: truncating at the quadrupole gave three-digit accuracy at five cell radii. This turns an $O(N^2)$ computation into $O(N)$, and it is the standard tool in astrophysical $N$-body simulation, molecular dynamics with Coulomb interactions, and boundary-element solvers built on the fundamental solution of :ref[Laplace's equation]{to=pde.laplace-fundamental-solution}.
:::

:::application[Partial waves in scattering]{provenance=adapted src="arfken-2013:§16.3, Eq. (16.61), pp. 798–799"}
The same factorization of a two-point function into products of one-point functions is what makes partial-wave analysis possible. Arfken's Eq. (16.61) is the companion expansion $e^{i\mathbf{k}\cdot\mathbf{r}} = 4\pi\sum_{\ell m}i^\ell j_\ell(kr)Y_\ell^m(\Omega_k)^*Y_\ell^m(\Omega_r)$, reached by expanding $e^{ikr\cos\chi}$ in Legendre polynomials, recognising the coefficient integral as the integral representation of $j_\ell$, and then applying the same addition theorem. Spherical Bessel functions take the place of the powers of $r$, and the identity converts an incident plane wave into a superposition of spherical waves, each of which is scattered independently by a central potential. See :ref[the Helmholtz equation]{to=pde.helmholtz-equation} and :ref[spherical Bessel functions]{to=spec.spherical-bessel}.
:::
