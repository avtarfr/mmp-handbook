---
id: green.method-of-images
title: The method of images
kind: method
level: core
summary: Builds the corrector of a Dirichlet Green's function out of point sources placed outside the region, and carries the construction through for a half-space (one image of strength $-1$) and for a sphere of radius $a$ (one image at the inverse point $a^2\mathbf{r}_0/r_0^2$ of strength $-a/r_0$), recovering the Poisson kernels of both.
prereqs: [green.laplace-green-functions, pde.laplace-fundamental-solution]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§21.5.3, pp. 758-764: the four-step recipe (i)-(iv) for adding image sources outside $V$, the half-space example and Eq. (21.94), the quarter-plane example with three images, the sphere by the ratio condition $\\lvert\\mathbf{r}-\\mathbf{r}_0\\rvert \\propto \\lvert\\mathbf{r}-\\mathbf{r}_1\\rvert$ at the two points $A$ and $B$, the geometrical identity (21.98)-(21.99), the strength $-a/\\lvert\\mathbf{r}_0\\rvert$, the two-dimensional disc with image strength $-1$ and the constant in Eq. (21.101), and the resulting Poisson formula (21.104); §21.5.4, pp. 766-767, the Neumann Green's function of the disc obtained with image strength $q = +1$"
    pages: "758-767"
    role: the recipe, the half-space and sphere constructions, the geometrical identity, the two-dimensional cases and the Neumann variant
  - work: strauss-2008
    loc: "§7.4, pp. 191-195: the Green's function of the half-space $\\{z>0\\}$, Eq. (1), verified against the three defining properties, and the half-space Poisson formula (3)-(4); the reflection $\\mathbf{x}_0^* = a^2\\mathbf{x}_0/\\lvert\\mathbf{x}_0\\rvert^2$ across the sphere, Eq. (5), the Green's function (6) of the ball, the proportionality $\\rho^* = (a/r_0)\\rho$ on $\\lvert\\mathbf{x}\\rvert=a$ (Eq. (8)), the centred case (11), the computation of $\\partial G/\\partial n = (a^2-r_0^2)/(4\\pi a\\rho^3)$ in Eqs. (13)-(15), and the three-dimensional Poisson formula (16); the two-dimensional disc, Eq. (18)"
    pages: "191-195"
    role: the verification route through the three defining properties, the normal derivative on the sphere and the Poisson formulas
  - work: hassani-2013
    loc: "§22.1, Example 22.1.1, pp. 667-668 (the half-space, with the argument that the corrector must depend on $z$ through $(z+z')^2$, the interpretation as two opposite point charges, and the solution (22.4) for charges near an earthed sheet held at $V_0$); Example 22.1.2, pp. 668-669 (the sphere: the ansatz with unknown strength $k$ and unknown image position, the equations $k^2 r' = r''$ and $k^2(a^2+r'^2) = a^2+r''^2$, the roots $k=1$ and $k = a/r'$, and the Green's function (22.6))"
    pages: "667-669"
    role: the determination of the image position and strength from the boundary condition alone, and the electrostatic reading of the construction
  - work: evans-2010
    loc: "§2.2.4b-c, pp. 35-39: the reflection $\\tilde x$ in $\\partial\\mathbb{R}^n_+$ and the corrector $\\phi^x(y) = \\Phi(y-\\tilde x)$; the half-space Poisson kernel and Theorem 14; inversion through the sphere, $\\phi^x(y) = \\Phi(\\lvert x\\rvert(y-\\tilde x))$, the identity $\\lvert x\\rvert^2\\lvert y-\\tilde x\\rvert^2 = \\lvert x-y\\rvert^2$ on $\\partial B(0,1)$, and Poisson's formula (45) for $B(0,r)$ with Theorem 15"
    pages: "35-39"
    role: the statement that the Poisson formulas really do solve the boundary-value problems, and the inversion form of the sphere corrector in $\\mathbb{R}^n$
  - work: arfken-2013
    loc: "Exercise 15.3.8 and Fig. 15.9, p. 741: a point charge $q$ displaced a distance $a$ from the centre of a grounded hollow conducting sphere of radius $r_0$, with image $q' = -qr_0/a$ at $a' = r_0^2/a$"
    pages: "741"
    role: the electrostatic form of the sphere result, as a check on the strength and position of the image
---

:::note[What the method does]{provenance=original}
By the previous unit, finding a Dirichlet Green's function means finding a corrector: a function $H$, harmonic throughout $V$ and continuous up to $S$, such that $F + H$ vanishes on $S$, where $F$ is the fundamental solution with pole at $\mathbf{r}_0$. The method of images produces $H$ from a stock of functions that are automatically harmonic inside $V$: fundamental solutions with poles *outside* $V$. Nothing else about them is needed. The only question is whether finitely many of them, with suitable positions and strengths, can be made to cancel $F$ on $S$ — and for a plane boundary and a spherical boundary the answer is yes, with a single image in each case.
:::

:::method[Constructing a Green's function by images]{provenance=adapted src="rhb-2006:§21.5.3, steps (i)-(iv), pp. 758-759"}
To solve $\nabla^2 u = \rho$ in a region $V$ with $u = f$ given on $S = \partial V$:

1. **Place images.** Choose points $\mathbf{r}_1,\dots,\mathbf{r}_N$ *outside* $V$ and strengths $q_1,\dots,q_N$, to be determined, and think of them as extra point sources $\sum_n q_n\delta(\mathbf{r}-\mathbf{r}_n)$ added to the unit source at $\mathbf{r}_0\in V$.
2. **Form the candidate.** Set
   $$
   G(\mathbf{r},\mathbf{r}_0) = F(\mathbf{r},\mathbf{r}_0) + \sum_{n=1}^N q_n\, F(\mathbf{r},\mathbf{r}_n),
   \qquad
   F(\mathbf{r},\mathbf{r}') = -\frac{1}{4\pi\lvert\mathbf{r}-\mathbf{r}'\rvert}
   $$
   in three dimensions, or $F = (2\pi)^{-1}\ln\lvert\mathbf{r}-\mathbf{r}'\rvert$ in two, where an additive constant is also at one's disposal. Each image term is harmonic on $V$, because its pole is outside $V$; so the sum satisfies $\nabla^2 G = \delta(\mathbf{r}-\mathbf{r}_0)$ in $V$ and has the required singularity there, whatever the $q_n$ and $\mathbf{r}_n$ turn out to be.
3. **Impose the boundary condition.** Fix the positions and strengths by requiring $G(\mathbf{r},\mathbf{r}_0) = 0$ at every $\mathbf{r}\in S$ (for a Neumann Green's function, require $\partial G/\partial n = 1/A$ instead). If $V$ is unbounded, require in addition that $G\to0$ in the directions in which $V$ extends to infinity.
4. **Integrate.** Substitute into the representation formula (D) or (N) of :ref[]{to=green.laplace-green-functions}.

For a boundary made of planes (in three dimensions) or straight lines (in two), step 3 needs no calculation: the image positions are the geometrical mirror images of $\mathbf{r}_0$ in those planes, and the strengths alternate in sign, one image for a single plane, three for a right-angled corner, and an infinite row for a slab. Riley, Hobson and Bence stress that for a general curved boundary the positions and strengths cannot be found at all, and that the method is confined to a short list of geometries.
:::

:::statement[Green's function of a half-space]{provenance=adapted src="strauss-2008:§7.4, Eq. (1) and the three verifications, pp. 191-192; rhb-2006:§21.5.3, Eq. (21.94), p. 759; hassani-2013:§22.1, Example 22.1.1, pp. 667-668; evans-2010:§2.2.4b, the definition on p. 35"}
Let $V = \{\mathbf{r} = (x,y,z) : z > 0\}$ and for $\mathbf{r}_0 = (x_0,y_0,z_0)\in V$ let

$$
\mathbf{r}_0^* = (x_0,y_0,-z_0)
$$

be its mirror image in the plane $z = 0$. Then

$$
G_D(\mathbf{r},\mathbf{r}_0) = -\frac{1}{4\pi\lvert\mathbf{r}-\mathbf{r}_0\rvert} + \frac{1}{4\pi\lvert\mathbf{r}-\mathbf{r}_0^*\rvert}
$$

is a Dirichlet Green's function for $\nabla^2$ on $V$: it is harmonic on $V\setminus\{\mathbf{r}_0\}$, differs from $F(\mathbf{r},\mathbf{r}_0)$ by a function harmonic on $V$, vanishes at every point of the plane $z=0$, and tends to $0$ as $\lvert\mathbf{r}\rvert\to\infty$. Its normal derivative on the boundary is

$$
\frac{\partial G_D}{\partial n}\bigg|_{z=0} = \frac{z_0}{2\pi\bigl[(x-x_0)^2+(y-y_0)^2+z_0^2\bigr]^{3/2}} ,
$$

so the solution of $\nabla^2 u = 0$ in $z>0$ with $u(x,y,0) = f(x,y)$ is

$$
u(x_0,y_0,z_0) = \frac{z_0}{2\pi}\int_{-\infty}^{\infty}\!\!\int_{-\infty}^{\infty}
\frac{f(x,y)\; dx\, dy}{\bigl[(x-x_0)^2+(y-y_0)^2+z_0^2\bigr]^{3/2}} .
\tag{H}
$$

The kernel in (H) is the Poisson kernel of the half-space. Strauss derives (H) in this way; Evans, who writes it in $\mathbb{R}^n$ and calls the construction "reflecting the singularity", proves separately (his Theorem 14) that for $f$ continuous and bounded the formula really does define a bounded harmonic function in $z>0$ that attains the boundary values $f$ in the limit — the Green's function derivation presupposes a solution and so cannot establish existence by itself. Hassani notes that the whole construction is the electrostatics of two opposite point charges placed symmetrically about the plane, which is why their potential vanishes on it.
:::

:::idea{provenance=original}
A plane is a mirror, and the potential of a charge plus an equal and opposite charge at the mirror point vanishes on the mirror, because every point of the plane is equidistant from the two. That one sentence is the whole construction; everything else is checking the bookkeeping, namely that the second charge sits outside the region (so that it adds nothing to the Laplacian there) and that its singularity therefore does not disturb the required behaviour at $\mathbf{r}_0$.

Hassani makes the same point from the other direction, without guessing: the corrector must be harmonic and, by the symmetry of the problem in $x$ and $y$ and the evenness of $\nabla^2$ in $z$, must be a fundamental solution whose pole has the same $x_0,y_0$ and $z$-dependence through either $(z-z_0)^2$ or $(z+z_0)^2$. The first choice gives $G\equiv0$, so the second is forced.
:::

:::proof{provenance=adapted src="strauss-2008:§7.4, the verification of properties (i)-(iii) and the computation of $-\partial G/\partial z$, pp. 191-192; rhb-2006:§21.5.3, p. 760"}
**Step 1 (the corrector is harmonic in $V$).** The function $\mathbf{r}\mapsto (4\pi\lvert\mathbf{r}-\mathbf{r}_0^*\rvert)^{-1}$ is smooth and harmonic except at $\mathbf{r}_0^*$, which has $z = -z_0 < 0$ and so lies outside $V$. Hence $H = G_D - F$ is $C^\infty$ and harmonic on a neighbourhood of $\overline V$, which is condition 2 of the definition of a Green's function; in particular $G_D$ keeps exactly the singularity of $F$ at $\mathbf{r}_0$.

**Step 2 (it vanishes on the boundary).** Let $\mathbf{r} = (x,y,0)$. Then

$$
\lvert\mathbf{r}-\mathbf{r}_0\rvert^2 = (x-x_0)^2+(y-y_0)^2+z_0^2
= \lvert\mathbf{r}-\mathbf{r}_0^*\rvert^2 ,
$$

the two differing only in the sign of $z_0$, which is squared. So the two terms of $G_D$ cancel and $G_D = 0$ on $z=0$. The same computation shows that the cancellation fails at every other point, as it must.

**Step 3 (behaviour at infinity).** Both terms are $O(\lvert\mathbf{r}\rvert^{-1})$, so $G_D\to0$; this is the extra condition that an unbounded region needs, and it is what makes the sphere at infinity contribute nothing to the representation formula.

**Step 4 (the normal derivative).** Using $\nabla\lvert\mathbf{r}-\mathbf{r}'\rvert = (\mathbf{r}-\mathbf{r}')/\lvert\mathbf{r}-\mathbf{r}'\rvert$,

$$
\nabla G_D = \frac{\mathbf{r}-\mathbf{r}_0}{4\pi\lvert\mathbf{r}-\mathbf{r}_0\rvert^3} - \frac{\mathbf{r}-\mathbf{r}_0^*}{4\pi\lvert\mathbf{r}-\mathbf{r}_0^*\rvert^3} .
$$

On $z=0$ the two denominators are equal, call the common value $4\pi\rho^3$, while the $z$-components of the numerators are $z-z_0 = -z_0$ and $z+z_0 = +z_0$. Hence $\partial G_D/\partial z = -2z_0/(4\pi\rho^3)$ there. The outward normal of $\{z>0\}$ is $-\hat{\mathbf{z}}$, so $\partial G_D/\partial n = -\partial G_D/\partial z = z_0/(2\pi\rho^3)$, which is the formula stated.

**Step 5.** Substituting into formula (D) of :ref[]{to=green.laplace-green-functions} with $\rho \equiv 0$, and noting that the part of $S$ at infinity contributes nothing by Step 3, gives (H). $\square$
:::

:::statement[Green's function of a ball or of the region outside a sphere]{provenance=adapted src="strauss-2008:§7.4, Eqs. (5)-(8), (11) and (13)-(16), pp. 193-195; rhb-2006:§21.5.3, Eqs. (21.97)-(21.99) and p. 764, pp. 762-764; hassani-2013:§22.1, Example 22.1.2 and Eq. (22.6), pp. 668-669"}
Fix $a > 0$. For $\mathbf{r}_0\neq\mathbf{0}$ with $r_0 = \lvert\mathbf{r}_0\rvert$, the **inverse point** of $\mathbf{r}_0$ in the sphere $\lvert\mathbf{r}\rvert = a$ is

$$
\mathbf{r}_1 = \frac{a^2}{r_0^2}\,\mathbf{r}_0 ,
$$

the point on the same ray from the origin with $r_0\lvert\mathbf{r}_1\rvert = a^2$. Write $\rho = \lvert\mathbf{r}-\mathbf{r}_0\rvert$ and $\rho^* = \lvert\mathbf{r}-\mathbf{r}_1\rvert$. Then:

1. **The geometrical identity.** For every $\mathbf{r}$ with $\lvert\mathbf{r}\rvert = a$,
   $$
   \rho^* = \frac{a}{r_0}\,\rho .
   \tag{G}
   $$
2. **The Green's function.** For $0 < r_0 < a$,
   $$
   G_D(\mathbf{r},\mathbf{r}_0) = -\frac{1}{4\pi\rho} + \frac{a/r_0}{4\pi\rho^*}
   $$
   is a Dirichlet Green's function for the ball $V = \{\lvert\mathbf{r}\rvert<a\}$. The same formula, read with $r_0 > a$ (so that the image lies inside the sphere), is a Dirichlet Green's function for the exterior region $\{\lvert\mathbf{r}\rvert>a\}$, which then also satisfies $G_D\to0$ at infinity. For the centred case $\mathbf{r}_0 = \mathbf{0}$, where the inverse point is undefined, the Green's function of the ball is $G_D(\mathbf{r},\mathbf{0}) = (4\pi)^{-1}(a^{-1}-r^{-1})$.
3. **The Poisson kernel.** On $\lvert\mathbf{r}\rvert = a$,
   $$
   \frac{\partial G_D}{\partial n} = \frac{a^2-r_0^2}{4\pi a\,\rho^3} ,
   $$
   so the solution of $\nabla^2 u = 0$ in $\lvert\mathbf{r}\rvert<a$ with $u = f$ on $\lvert\mathbf{r}\rvert = a$ is
   $$
   u(\mathbf{r}_0) = \frac{a^2-r_0^2}{4\pi a}\oint_{\lvert\mathbf{r}\rvert=a}\frac{f(\mathbf{r})}{\lvert\mathbf{r}-\mathbf{r}_0\rvert^3}\; dS(\mathbf{r}) .
   \tag{P}
   $$

Formula (P) is Poisson's integral formula in three dimensions, obtained in :ref[]{to=pde.poisson-integral-formula} by a different route; Evans asserts (his Theorem 15) that for continuous $f$ it does define a smooth harmonic function in the ball attaining the boundary values $f$ in the limit, remarking that the proof is like that of his Theorem 14 and leaving it as an exercise. Strauss notes that for $\mathbf{r}_0 = \mathbf{0}$ formula (P) reduces to $u(\mathbf{0}) = \langle f\rangle$, the mean value property of harmonic functions (:ref[]{to=pde.harmonic-functions}).
:::

:::idea{provenance=original}
A sphere is not a mirror, so the strength of the image cannot be $-1$: no pair of equal and opposite point sources has a sphere as an equipotential. What saves the construction is that the sphere is an equipotential of a pair of *unequal* opposite sources, and the required ratio of distances is supplied by elementary geometry: inversion in the sphere, $\mathbf{r}_0\mapsto a^2\mathbf{r}_0/r_0^2$, is exactly the map for which the ratio $\rho^*/\rho$ of distances from the two points is the same constant $a/r_0$ at every point of the sphere. Dividing the image strength by that constant then makes the two terms cancel there.

One can also run the argument backwards and *derive* the position and strength, as Hassani does: write the image as an unknown strength $k$ at an unknown point on the ray through $\mathbf{r}_0$, demand that $k\rho = \rho^*$ hold identically in the angle between $\mathbf{r}$ and $\mathbf{r}_0$, and compare coefficients. Two equations emerge, with two roots; the root $k=1$ puts the image on top of the source and is discarded, leaving $k = a/r_0$. Riley, Hobson and Bence shortcut the comparison by imposing the ratio condition at just the two points where the sphere meets the line through the centre and $\mathbf{r}_0$, which already fixes $\lvert\mathbf{r}_1\rvert = a^2/r_0$, and then verifying that it holds everywhere.
:::

:::proof{provenance=adapted src="rhb-2006:§21.5.3, Eqs. (21.98)-(21.99) and pp. 762-764; strauss-2008:§7.4, Eqs. (7)-(8) and (13)-(15), pp. 193-195; evans-2010:§2.2.4c, the identity on p. 38"}
**Step 1 (proof of (G)).** Expand, using $\lvert\mathbf{r}\rvert^2 = a^2$ and $\lvert\mathbf{r}_1\rvert^2 = a^4/r_0^2$:

$$
\rho^{*2} = \lvert\mathbf{r}\rvert^2 - 2\,\mathbf{r}\cdot\mathbf{r}_1 + \lvert\mathbf{r}_1\rvert^2
= a^2 - \frac{2a^2}{r_0^2}\,\mathbf{r}\cdot\mathbf{r}_0 + \frac{a^4}{r_0^2}
= \frac{a^2}{r_0^2}\Bigl( r_0^2 - 2\,\mathbf{r}\cdot\mathbf{r}_0 + a^2\Bigr) .
$$

Now use $a^2 = \lvert\mathbf{r}\rvert^2$ once more in the last bracket: it becomes $\lvert\mathbf{r}\rvert^2 - 2\mathbf{r}\cdot\mathbf{r}_0+r_0^2 = \rho^2$. Taking square roots gives (G). The step is reversible only on the sphere: it is the single place where $\lvert\mathbf{r}\rvert = a$ is used, and off the sphere the ratio $\rho^*/\rho$ is not constant.

**Step 2 (the corrector is harmonic in $V$).** For the ball, $\lvert\mathbf{r}_1\rvert = a^2/r_0 > a$ because $r_0 < a$, so the image point lies outside $\overline V$ and the image term is smooth and harmonic on a neighbourhood of $\overline V$. For the exterior region, $r_0 > a$ gives $\lvert\mathbf{r}_1\rvert < a$, again outside the region in question. In both cases condition 2 of the definition holds, and $\nabla^2 G_D = \delta(\mathbf{r}-\mathbf{r}_0)$ in $V$.

**Step 3 (it vanishes on the sphere).** At $\lvert\mathbf{r}\rvert = a$, by (G),

$$
G_D = -\frac{1}{4\pi\rho} + \frac{a/r_0}{4\pi\,(a/r_0)\rho} = -\frac{1}{4\pi\rho} + \frac{1}{4\pi\rho} = 0 .
$$

This is where the strength $a/r_0$ is used, and it is the only reason for that particular value.

**Step 4 (the centred case).** If $\mathbf{r}_0 = \mathbf{0}$ the fundamental solution $-1/(4\pi r)$ is already constant on the sphere, so a constant corrector suffices; $G_D = (4\pi)^{-1}(a^{-1}-r^{-1})$ vanishes at $r=a$ and is the Green's function, as computed in :ref[]{to=green.laplace-green-functions}.

**Step 5 (the normal derivative on the sphere).** Differentiating $G_D$ with respect to $\mathbf{r}$,

$$
\nabla G_D = \frac{\mathbf{r}-\mathbf{r}_0}{4\pi\rho^3} - \frac{a}{r_0}\,\frac{\mathbf{r}-\mathbf{r}_1}{4\pi\rho^{*3}} .
$$

Restrict to $\lvert\mathbf{r}\rvert = a$ and replace $\rho^{*3}$ by $(a/r_0)^3\rho^3$ using (G); the coefficient of the second term becomes $\frac{a}{r_0}\bigl(\frac{r_0}{a}\bigr)^3 = \frac{r_0^2}{a^2}$, so

$$
\nabla G_D = \frac{1}{4\pi\rho^3}\left[ (\mathbf{r}-\mathbf{r}_0) - \frac{r_0^2}{a^2}\left(\mathbf{r} - \frac{a^2}{r_0^2}\mathbf{r}_0\right)\right]
= \frac{1}{4\pi\rho^3}\left(1 - \frac{r_0^2}{a^2}\right)\mathbf{r} .
$$

The $\mathbf{r}_0$ terms have cancelled, which is the small miracle that makes the kernel so simple: on the sphere, $\nabla G_D$ is *radial*. The outward normal there is $\hat{\mathbf{n}} = \mathbf{r}/a$, so

$$
\frac{\partial G_D}{\partial n} = \frac{\mathbf{r}}{a}\cdot\nabla G_D = \frac{1}{4\pi\rho^3}\left(1-\frac{r_0^2}{a^2}\right)\frac{\lvert\mathbf{r}\rvert^2}{a} = \frac{a^2-r_0^2}{4\pi a\rho^3} .
$$

**Step 6.** Substituting into formula (D) of :ref[]{to=green.laplace-green-functions} with $\rho\equiv0$ gives (P). $\square$
:::

:::remark[Scope and variants]{provenance=original}
- *Where the hypotheses bite.* Step 1 uses $\lvert\mathbf{r}\rvert=a$ and nothing else; Step 2 uses $r_0\neq a$, so that source and image are on opposite sides of the sphere; Step 3 uses both. If $\mathbf{r}_0$ is placed *on* the sphere the construction degenerates, which is as it should be, since a Green's function has its pole in the interior.
- *The same formula twice.* As Riley, Hobson and Bence observe, the interior and exterior problems for a sphere are covered by one formula, read with $r_0<a$ or $r_0>a$. Arfken, Weber and Harris put the interior case as an exercise in electrostatics with the image charge $q' = -qr_0/a$ at $r_0^2/a$ from the centre, where their $r_0$ is the sphere radius and their $a$ the distance of the charge; that is our $-a/r_0$ at $a^2/r_0$ with the letters exchanged, and the two agree.
- *Two dimensions.* The image sits at the same inverse point, but the strength is $-1$, not $-a/r_0$, because the logarithm turns the ratio (G) into an additive constant rather than a factor. For the disc $\lvert\mathbf{r}\rvert<a$ Riley, Hobson and Bence obtain
  $$
  G_D(\mathbf{r},\mathbf{r}_0) = \frac{1}{2\pi}\left[\ln\lvert\mathbf{r}-\mathbf{r}_0\rvert - \ln\left\lvert\mathbf{r}-\frac{a^2}{r_0^2}\mathbf{r}_0\right\rvert - \ln\frac{r_0}{a}\right],
  $$
  where the last term is the additive constant that two-dimensional fundamental solutions carry, chosen so that (G) makes the bracket vanish on $\lvert\mathbf{r}\rvert = a$; the normal derivative is $(a^2-r_0^2)/(2\pi a\lvert\mathbf{r}-\mathbf{r}_0\rvert^2)$ and (D) then gives the classical two-dimensional Poisson formula
  $$
  u(\rho_0,\phi_0) = \frac{1}{2\pi}\int_0^{2\pi}\frac{(a^2-\rho_0^2)\,f(\phi)\; d\phi}{a^2+\rho_0^2-2a\rho_0\cos(\phi-\phi_0)} .
  $$
  Strauss reaches the same Green's function and remarks that it reproduces the Poisson formula he had found earlier by separation of variables.
- *Neumann by images.* For the disc, Riley, Hobson and Bence leave the image strength as a parameter $q$, compute $\partial G/\partial\rho$ at $\rho=a$, and find that $q = +1$ — the image with the *same* sign as the source — makes it equal to $1/(2\pi a) = 1/L$, which is the Neumann condition. So the Neumann and Dirichlet Green's functions of a disc use the same image point and differ only in the sign of the image.
- *More images, and when they run out.* A right-angled corner in two dimensions needs three images: the reflections of $\mathbf{r}_0$ in each of the two lines, both of strength $-1$, and the reflection in the corner (the image of either of those in the other line), of strength $+1$. This is the arrangement in :cite[Riley, Hobson and Bence's figure]{work=rhb-2006 loc="Fig. 21.13, p. 762"} for the quarter-plane $x>0$, $y>0$ with both axes earthed. A wedge of angle $\pi/m$ needs $2m-1$; a slab needs an infinite row, and a half-ball is handled by reflecting the ball's Green's function in the flat face. A region with no such symmetry has no image system, and one must turn to :ref[eigenfunction expansions]{to=green.eigenfunction-expansion-green} or to numerical solution of the corrector problem.
- *What the method does not prove.* All of the above presupposes that the boundary-value problem has a solution of class $C^2(\overline V)$, since that is the hypothesis of the representation formula. Evans's Theorems 14 and 15 supply the missing half, by asserting directly that (H) and (P) define harmonic functions with the right boundary limits; he proves Theorem 14, the half-space case, and leaves Theorem 15, the ball, as an exercise on the ground that its proof is similar.
:::

:::example[A charged patch on a grounded plane]{provenance=original}
Solve $\nabla^2 u = 0$ in the half-space $z>0$ with boundary data

$$
f(x,y) = \begin{cases} 1, & x^2+y^2 < 1,\\ 0, & x^2+y^2 > 1,\end{cases}
$$

and evaluate $u$ on the axis, at $\mathbf{r}_0 = (0,0,z_0)$.

1. *Set up.* With $x_0 = y_0 = 0$, formula (H) becomes an integral over the unit disc in polar coordinates $x = \varrho\cos\phi$, $y = \varrho\sin\phi$, with $dx\,dy = \varrho\,d\varrho\,d\phi$ and $(x-x_0)^2+(y-y_0)^2 = \varrho^2$:
   $$
   u(0,0,z_0) = \frac{z_0}{2\pi}\int_0^{2\pi}\!\!\int_0^1 \frac{\varrho\; d\varrho\, d\phi}{(\varrho^2+z_0^2)^{3/2}}
   = z_0\int_0^1\frac{\varrho\; d\varrho}{(\varrho^2+z_0^2)^{3/2}} .
   $$
2. *Integrate.* The substitution $s = \varrho^2+z_0^2$, $ds = 2\varrho\,d\varrho$, turns this into $\tfrac12 z_0\int_{z_0^2}^{1+z_0^2}s^{-3/2}\,ds = z_0\bigl[-s^{-1/2}\bigr]_{z_0^2}^{1+z_0^2}$, so
   $$
   u(0,0,z_0) = 1 - \frac{z_0}{\sqrt{1+z_0^2}} .
   $$
3. *The number.* At $z_0 = 1$, $u = 1 - 1/\sqrt{2} = 0.2928932$ to seven figures.
4. *Three checks.* As $z_0\to0^+$, $u\to1$, which is the boundary value at the centre of the patch. As $z_0\to\infty$, $u = 1-(1+z_0^{-2})^{-1/2} = \tfrac12 z_0^{-2}+O(z_0^{-4})$, the far field of a dipole-like source, decaying faster than a point charge because the total "charge" of a Dirichlet problem is not free. And the answer equals $\Omega/2\pi$, where $\Omega = 2\pi(1 - z_0/\sqrt{1+z_0^2})$ is the solid angle that the unit disc subtends at $\mathbf{r}_0$ — a general feature of (H) for data that are the indicator function of a region, since the Poisson kernel integrated over a patch is $1/2\pi$ times the solid angle it subtends.
5. *A range check.* The one-dimensional restriction $z_0\mapsto 1 - z_0(1+z_0^2)^{-1/2}$ is of course not harmonic by itself; the transverse curvature that balances its axial curvature is invisible in a formula evaluated only on the axis. A cheap check of the closed form instead: the Poisson kernel of (H) is *normalised*,
   $$
   \int_{\mathbb{R}^2}\frac{z_0\; dx\, dy}{2\pi\bigl[(x-x_0)^2+(y-y_0)^2+z_0^2\bigr]^{3/2}} = 1
   \qquad\text{for every } z_0 > 0 ,
   $$
   which is the integral of step 2 with the upper limit $\infty$ instead of $1$, and indeed gives $z_0\cdot(1/z_0) = 1$. Equivalently $\int_{z=0}\partial G_D/\partial n\, dS = 1$, by the formula for $\partial G_D/\partial n$ in the statement. So (H) applied to $f\equiv1$ returns $u\equiv1$, as it must, since the constant function $1$ is the solution of that Dirichlet problem. The kernel is also positive, so (H) carries data with $0\le f\le1$ to solutions with $0\le u\le1$, and the value $0.2928932$ is in range.
:::

:::example[The Poisson kernel of the unit ball, with a value one can check]{provenance=original}
Take $a = 1$ and the boundary datum $f = \cos^2\theta$ on the unit sphere, where $\theta$ is the polar angle from the $z$-axis. Evaluate (P) at the interior point $\mathbf{r}_0 = (0,0,\tfrac12)$, so $r_0 = \tfrac12$.

1. *Reduce to one integral.* With $\mathbf{r}_0$ on the axis, $\rho^2 = \lvert\mathbf{r}-\mathbf{r}_0\rvert^2 = 1 + r_0^2 - 2r_0\cos\theta$, which depends on $\theta$ only; using $dS = \sin\theta\, d\theta\, d\phi$ on the unit sphere and doing the $\phi$ integral,
   $$
   u(\mathbf{r}_0) = \frac{1-r_0^2}{4\pi}\cdot 2\pi\int_0^\pi\frac{\cos^2\theta\,\sin\theta\; d\theta}{(1+r_0^2-2r_0\cos\theta)^{3/2}}
   = \frac{1-r_0^2}{2}\int_{-1}^{1}\frac{t^2\; dt}{(1+r_0^2-2r_0 t)^{3/2}} ,
   $$
   substituting $t = \cos\theta$.
2. *Put in the numbers.* With $r_0 = \tfrac12$: $1+r_0^2 = \tfrac54$, $2r_0 = 1$, $(1-r_0^2)/2 = \tfrac38$, so
   $$
   u = \frac38\int_{-1}^{1}\frac{t^2\; dt}{\bigl(\tfrac54 - t\bigr)^{3/2}} .
   $$
3. *Evaluate.* Put $s = \tfrac54 - t$, so that $t = \tfrac54 - s$ and $dt = -ds$, and expand the numerator:
   $$
   \frac{t^2}{s^{3/2}} = \frac{\bigl(\tfrac54-s\bigr)^2}{s^{3/2}} = \frac{25}{16}s^{-3/2} - \frac{5}{2}s^{-1/2} + s^{1/2} .
   $$
   An antiderivative with respect to $s$ is $-\tfrac{25}{8}s^{-1/2} - 5s^{1/2} + \tfrac23 s^{3/2}$, so an antiderivative with respect to $t$ is its negative,
   $$
   \Phi(s) = \frac{25}{8}\,s^{-1/2} + 5\,s^{1/2} - \frac23\, s^{3/2} .
   $$
   As $t$ runs from $-1$ to $1$, $s$ runs from $\tfrac94$ to $\tfrac14$, so the integral equals $\Phi(\tfrac14) - \Phi(\tfrac94)$:
   $$
   \Phi\!\left(\tfrac14\right) = \frac{25}{4} + \frac52 - \frac{1}{12} = \frac{104}{12},
   \qquad
   \Phi\!\left(\tfrac94\right) = \frac{25}{12} + \frac{15}{2} - \frac94 = \frac{88}{12} .
   $$
   Hence the integral is $\tfrac{104-88}{12} = \tfrac43$, and $u = \tfrac38\cdot\tfrac43 = \tfrac12$.
4. *Independent check.* Since $P_2(t) = \tfrac12(3t^2-1)$, the datum is $f = \tfrac13 + \tfrac23 P_2(\cos\theta)$, and $1$ and $r^2P_2(\cos\theta)$ are both harmonic (they are solid harmonics of degree $0$ and $2$). So the solution of this Dirichlet problem is $u = \tfrac13 + \tfrac23 r^2P_2(\cos\theta)$, which at $r = \tfrac12$, $\theta = 0$ gives $\tfrac13 + \tfrac23\cdot\tfrac14\cdot1 = \tfrac13+\tfrac16 = \tfrac12$. The two computations agree exactly.
5. *A second value.* At the centre, (P) gives the average of $f$ over the sphere, $\tfrac{1}{4\pi}\oint\cos^2\theta\, dS = \tfrac12\int_{-1}^1 t^2\, dt = \tfrac13$, matching $u(\mathbf{0}) = \tfrac13$ from the closed form.
:::

:::example[Image charge, image force, and induced charge]{provenance=original}
Electrostatics is where the images are literally charges. Two standard numbers follow at once from the two Green's functions above. Throughout, $\phi$ is the potential, $\nabla^2\phi = -\rho_{\mathrm e}/\varepsilon_0$, and a grounded conductor is the surface $\phi = 0$.

1. *Charge above a grounded plane.* A charge $q$ at height $h$ above the grounded plane $z=0$ has potential, for $z>0$,
   $$
   \phi(\mathbf{r}) = \frac{q}{4\pi\varepsilon_0}\left(\frac{1}{\lvert\mathbf{r}-h\hat{\mathbf{z}}\rvert} - \frac{1}{\lvert\mathbf{r}+h\hat{\mathbf{z}}\rvert}\right),
   $$
   which is $-q/\varepsilon_0$ times the half-space Green's function. The force on the charge is that of the image alone, attractive, of magnitude $q^2/[4\pi\varepsilon_0(2h)^2] = q^2/(16\pi\varepsilon_0 h^2)$. The induced surface charge is $\sigma = \varepsilon_0 E_z|_{z=0}$ with $E_z = -\partial\phi/\partial z$; differentiating and setting $z=0$,
   $$
   \sigma(\varrho) = -\frac{q h}{2\pi(\varrho^2+h^2)^{3/2}} ,
   \qquad
   \int_0^\infty\sigma\,2\pi\varrho\; d\varrho = -qh\Bigl[-(\varrho^2+h^2)^{-1/2}\Bigr]_0^\infty = -q .
   $$
   The plane carries exactly the image charge, spread out; and $\sigma = -q\,\partial G_D/\partial n$, so the Poisson kernel of (H) *is* the induced charge density, up to the factor $-q$.
2. *Charge outside a grounded sphere.* A charge $q$ at distance $d>a$ from the centre of a grounded sphere of radius $a$ has image $q' = -qa/d$ at distance $a^2/d$ from the centre, on the same ray. The separation of the two is $d - a^2/d = (d^2-a^2)/d$, so the force on $q$ is attractive with magnitude
   $$
   F = \frac{1}{4\pi\varepsilon_0}\frac{q\lvert q'\rvert}{\bigl[(d^2-a^2)/d\bigr]^2} = \frac{q^2 a d}{4\pi\varepsilon_0\,(d^2-a^2)^2} .
   $$
   For $a = 1$ and $d = 2$: $q' = -q/2$ (so the sphere carries half the charge's worth, with the opposite sign), the separation is $\tfrac32$, and $F = 2q^2/(4\pi\varepsilon_0\cdot 9) = q^2/(18\pi\varepsilon_0)$.
3. *Limits as checks.* As $d\to\infty$, $F \approx q^2a/(4\pi\varepsilon_0 d^3)$: the sphere looks like an induced dipole, falling off as $d^{-3}$. As $d\to a^+$, write $d = a+\epsilon$; then $d^2-a^2 \approx 2a\epsilon$ and $F\approx q^2 a\cdot a/(4\pi\varepsilon_0\cdot4a^2\epsilon^2) = q^2/(16\pi\varepsilon_0\epsilon^2)$, which is exactly the plane result of part 1 with $h = \epsilon$ — as it must be, since close up a sphere is a plane.
:::

:::application{provenance=original}
**Conductors and shields.** Every undergraduate electrostatics problem with a grounded plane, a grounded sphere, two intersecting planes or a sphere-and-plane pair is an image problem, and the "image charge" of those problems is the corrector of a Green's function. The practical pay-off is the force and the induced charge density computed above: the attraction of an ion to a metal surface (and hence the image-potential contribution to the work function and to physisorption energies), the capacitance of a sphere above a plane, and the field enhancement at a grounded electrode.

**Method of images outside electrostatics.** The same construction solves any problem with the same operator and the same geometry. In steady heat conduction, an image sink across an isothermal wall enforces fixed wall temperature, and an image *source* of the same sign across an insulated wall enforces zero flux — the Neumann variant noted in the remark. In groundwater hydraulics the Theis solution for a pumping well near a constant-head river (image recharge well) or near an impermeable barrier (image pumping well) is the textbook application, and the whole industry of well-field design rests on it. In fluid mechanics the image vortex or image source enforces a no-through-flow boundary at a wall, and the image of a vortex in a cylinder uses the same inversion point $a^2\mathbf{r}_0/r_0^2$.

**Why the sphere result keeps reappearing.** The map $\mathbf{r}\mapsto a^2\mathbf{r}/\lvert\mathbf{r}\rvert^2$ is inversion in the sphere, a conformal map in two dimensions and a map preserving the harmonicity of $\lvert\mathbf{x}\rvert^{2-n}u(a^2\mathbf{x}/\lvert\mathbf{x}\rvert^2)$ in $n$. Evans builds the ball's corrector in exactly that form. That is why the Kelvin inversion appears again in the :ref[Poisson integral formula]{to=pde.poisson-integral-formula} and in the theory of harmonic functions on balls generally, and why the image system of a sphere is a single point rather than a continuum.

**Limits of the method, and what replaces it.** The list of regions with finite image systems is short: half-spaces, slabs, wedges of angle $\pi/m$, balls and the regions assembled from them by reflection. For anything else the corrector must be computed, and the Green's function is then obtained from an :ref[eigenfunction expansion]{to=green.eigenfunction-expansion-green}, from a conformal map in two dimensions, or numerically; the discretised representation formula with unknowns on the surface alone is the boundary-element method, and the image Green's functions above are what such codes use for layered geometries.
:::
