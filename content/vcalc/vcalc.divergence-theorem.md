---
id: vcalc.divergence-theorem
title: The divergence theorem
kind: theorem
level: core
summary: States Gauss's theorem — the outward flux of a $C^1$ field through the boundary of a bounded region equals the integral of its divergence over the region — proves it for regions bounded by $C^1$ graphs in each coordinate direction, derives the gradient and curl companion identities, and uses it to turn conservation of mass into the continuity equation.
prereqs: [vcalc.surface-integrals, vcalc.divergence-curl, found.change-of-variables, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "Appendix §A.3, Divergence Theorem 7 and the worked check that follows it, p. 423; Green's Theorem 6, p. 422, and the equivalent two-dimensional divergence form, Eq. (8), p. 423"
    pages: "422-423"
    role: the statement with its exact hypotheses (bounded spatial domain, piecewise $C^1$ boundary surface, $C^1$ field on the closed region), and the two-dimensional form
  - work: evans-2010
    loc: "Appendix §C.2, Theorem 1 (Gauss–Green theorem), parts (i) and (ii), and Theorem 2 (integration by parts), p. 667"
    pages: "667"
    role: the $n$-dimensional statement, the componentwise form $\int_U u_{x_i}\,dx = \int_{\partial U} u\nu_i\,dS$, and the integration-by-parts corollary
  - work: rhb-2006
    loc: "§11.3, pp. 384–385 (Green's theorem in a plane, proved by writing the double integral as an iterated one and applying the fundamental theorem of calculus in each direction in turn — the route Steps 1–3 below follow in three variables); §11.8, Eq. (11.18), p. 401 (statement and the subdivision argument), and the worked example on p. 401; §11.8.2, Eqs. (11.21)–(11.22) and the worked derivation, p. 403 (the gradient and curl companions, obtained with a constant vector); §11.8.3, p. 404 (the continuity equation) and p. 405 (point sources and $\\nabla\\cdot\\mathbf{v} = Q\\delta(\\mathbf{r})$)"
    pages: "384-385, 401, 403-405"
    role: the iterated-integral proof route; the constant-vector trick for the companion identities; the continuity equation; what happens at a point source
  - work: arfken-2013
    loc: "§3.8, Eqs. (3.81)–(3.82) and Example 3.8.1, pp. 164–165 (Gauss' theorem, the subdivision picture, and the vanishing of the integral over all of $\\mathbb{R}^3$); Eqs. (3.88)–(3.90), p. 166 (the gradient and curl companions via a constant vector $\\mathbf{a}$)"
    pages: "164-166"
    role: the companion identities and the arbitrary-constant-vector device; a check of the theorem on a tetrahedron
  - work: lee-2013
    loc: "Ch. 16, Theorem 16.32 (The Divergence Theorem) with the operator $\\operatorname{div}$ defined by $d(X \\mathbin{\\lrcorner} dV_g) = (\\operatorname{div}X)\\,dV_g$, pp. 423–424"
    pages: "423-424"
    role: the general proof, as a corollary of Stokes's theorem on an oriented Riemannian manifold with boundary
---

:::definition[Simple region]{provenance=original}
Call a compact set $V \subseteq \mathbb{R}^3$ **$z$-simple** if there are a compact region $D \subseteq \mathbb{R}^2$ whose boundary is a piecewise $C^1$ curve and functions $\psi_1 \le \psi_2$ of class $C^1$ on $D$, with $\psi_1 < \psi_2$ at every interior point of $D$, such that

$$
V = \bigl\{ (x,y,z) \;:\; (x,y) \in D, \;\; \psi_1(x,y) \le z \le \psi_2(x,y) \bigr\} .
$$

Define **$x$-simple** and **$y$-simple** in the same way with the roles of the coordinates permuted, and call $V$ a **simple region** if it is simple in all three directions. An axis-aligned box is one, and so is the corner tetrahedron $\{x, y, z \ge 0,\; x+y+z \le c\}$, which in each of the three directions has one affine face as its top and one as its bottom; so is the solid between two $C^1$ graphs when it is also simple the other two ways.

Convex polyhedra in general are *not* simple regions, because the definition asks for $\psi_1, \psi_2$ of class $C^1$ and a solid whose top is made of more than one face has a crease where two of them meet. The functions are forced by $V$, so there is nothing to choose: for the regular octahedron $\lvert x\rvert + \lvert y\rvert + \lvert z\rvert \le 1$ they are $D = \{\lvert x\rvert + \lvert y\rvert \le 1\}$, $\psi_2 = 1 - \lvert x\rvert - \lvert y\rvert$ and $\psi_1 = -\psi_2$, and $\psi_2$ is not differentiable at interior points of $D$ such as $(0, \tfrac12)$. So the octahedron is not $z$-simple, and by its symmetry in the three coordinates not simple in any direction. A cube resting on one vertex fails in the same way, with three faces above and three below; so does a tetrahedron with three upper faces, such as the one on the vertices $(0,0,0)$, $(1,0,0)$, $(0,1,0)$, $(\tfrac13,\tfrac13,1)$, whose apex lies over the interior of its base triangle. Each of these solids is instead a *finite union* of simple regions, cut along the offending creases, and that is what Step 5 of the proof below exists to handle.

The boundary $\partial V$ of a $z$-simple region consists of the top $z = \psi_2$ and the bottom $z = \psi_1$, both graphs over $D$, together with the lateral part lying over $\partial D$, on which the outward unit normal $\hat{\mathbf{n}}$ is horizontal, so that $\hat{\mathbf{n}}\cdot\hat{\mathbf{k}} = 0$ there. (That part is the vertical cylinder $\{(x,y) \in \partial D,\; \psi_1 \le z \le \psi_2\}$, and it degenerates to a curve over whatever part of $\partial D$ carries $\psi_1 = \psi_2$, as the whole rim of the disc does for the two hemispheres of a ball.)

A simple region is a closed set. When the theorem below is applied to one, $V$ is to be read as its interior and $\overline V$ as the simple region itself; the boundary has zero volume, so which of the two carries the volume integral makes no difference to it.
:::

:::statement[Divergence theorem (Gauss's theorem)]{provenance=adapted src="strauss-2008:Appendix §A.3, Divergence Theorem 7, p. 423; evans-2010:Appendix §C.2, Thm 1, p. 667; rhb-2006:§11.8, Eq. (11.18), p. 401"}
Let $V \subseteq \mathbb{R}^3$ be a bounded *open* region — Strauss's "bounded spatial domain" — whose boundary surface $S = \partial V$ is piecewise $C^1$, so that the closed region is $\overline V = V \cup S$; let $\hat{\mathbf{n}}$ be the unit outward normal on $S$, and let $\mathbf{F}$ be a vector field of class $C^1$ on $\overline V$. Then

$$
\int_V \nabla\cdot\mathbf{F}\; dV \;=\; \oint_S \mathbf{F}\cdot\hat{\mathbf{n}}\; dS \;=\; \oint_S \mathbf{F}\cdot d\mathbf{S} .
$$

This is Strauss's Theorem 7. Evans states the same result for a bounded open $U \subseteq \mathbb{R}^n$ with $\partial U$ of class $C^1$ and $\mathbf{u} \in C^1(\overline U; \mathbb{R}^n)$, and derives it from the componentwise form

$$
\int_U \frac{\partial u}{\partial x_i}\, dx = \int_{\partial U} u\,\nu_i\, dS \qquad (i = 1,\dots,n), \quad u \in C^1(\overline U),
$$

with $\boldsymbol{\nu}$ the outward normal; taking $u = u_i$ and summing over $i$ gives the divergence form. The theorem holds whether or not $V$ is simply connected: the region between two concentric spheres is admissible, with the normal pointing out of $V$ on both components of $S$, hence *into* the inner cavity.
:::

:::statement[Companion identities]{provenance=adapted src="rhb-2006:§11.8.2, Eqs. (11.21)–(11.22) and the worked derivation, p. 403; evans-2010:Appendix §C.2, Thm 2, p. 667; arfken-2013:§3.8, Eqs. (3.89)–(3.90), p. 166"}
Under the same hypotheses, with $\varphi$ a $C^1$ scalar field and $\mathbf{b}$ a $C^1$ vector field on $\overline V$:

$$
\int_V \nabla\varphi\; dV = \oint_S \varphi\, d\mathbf{S}, \qquad\qquad
\int_V \nabla\times\mathbf{b}\; dV = \oint_S d\mathbf{S}\times\mathbf{b} ,
$$

both equalities between vectors. Three consequences are used constantly:

- $\oint_S d\mathbf{S} = \mathbf{0}$ for every closed surface (take $\varphi \equiv 1$).
- $\displaystyle \operatorname{vol}(V) = \frac13\oint_S \mathbf{r}\cdot d\mathbf{S}$, since $\nabla\cdot\mathbf{r} = 3$.
- **Integration by parts.** For $u, v \in C^1(\overline V)$, applying the componentwise form to $uv$ gives
  $$
  \int_V \frac{\partial u}{\partial x_i}\, v\; dV = -\int_V u\,\frac{\partial v}{\partial x_i}\; dV + \oint_S u\,v\,\nu_i\; dS ,
  $$
  which is Evans's Theorem 2 and the source of :ref[Green's identities]{to=vcalc.green-identities}.
:::

:::idea{provenance=original}
In one variable the fundamental theorem of calculus says that integrating a derivative over an interval leaves only the values at the two ends. The divergence theorem is the same statement in three variables, done one coordinate at a time. Integrate $\partial F_3/\partial z$ first in $z$: over a region squeezed between two graphs, the inner integral is the value of $F_3$ on the top minus its value on the bottom. The geometric content is then a single observation about the surface element: on the top and bottom of the region, the horizontal area element $dx\,dy$ is exactly $\pm \hat{\mathbf{n}}\cdot\hat{\mathbf{k}}\, dS$, and on the sides $\hat{\mathbf{n}}\cdot\hat{\mathbf{k}}$ vanishes. So the two-term difference is precisely the flux of $F_3\hat{\mathbf{k}}$ out of the whole boundary. Repeating with $x$ and $y$ and adding the three gives the theorem. Nothing else is involved; the apparent power of the theorem comes from the fact that cutting a region into pieces makes all the internal faces cancel in pairs, which is why the result extends from blocks to arbitrary regions.
:::

:::proof{provenance=adapted src="rhb-2006:§11.3, pp. 384–385 and §11.8, p. 401; evans-2010:Appendix §C.2, p. 667"}
We prove the theorem for a region whose closure is a simple region; the hypotheses on $\mathbf{F}$ are those of the statement. Throughout the proof $V$ denotes that closed region, as in the definition, which costs nothing: $S$ has zero volume, so the volume integrals are the same either way.

**Step 1 (one component, in the matching direction).** Let $V$ be $z$-simple, with $D$, $\psi_1$, $\psi_2$ as in the definition, and write $F_3$ for the third component of $\mathbf{F}$. Since $\partial F_3/\partial z$ is continuous on the compact set $V$, the triple integral may be computed as an iterated integral (:ref[iterated integrals]{to=found.change-of-variables}), innermost in $z$:

$$
\int_V \frac{\partial F_3}{\partial z}\; dV
= \iint_D \left( \int_{\psi_1(x,y)}^{\psi_2(x,y)} \frac{\partial F_3}{\partial z}(x,y,z)\, dz \right) dx\, dy
= \iint_D \Bigl[ F_3\bigl(x,y,\psi_2\bigr) - F_3\bigl(x,y,\psi_1\bigr) \Bigr]\, dx\, dy ,
$$

the inner integral being evaluated by the fundamental theorem of calculus in the variable $z$ alone, with $x$ and $y$ held fixed.

**Step 2 (the same difference, read as a flux).** The top of $\partial V$ is the graph $z = \psi_2$ over $D$, whose outward normal points upward; by the graph formula for the surface element (:ref[surface integrals]{to=vcalc.surface-integrals}),

$$
\hat{\mathbf{n}}\, dS = \bigl(-\partial_x\psi_2,\; -\partial_y\psi_2,\; 1\bigr)\, dx\, dy
\qquad\text{so}\qquad
\hat{\mathbf{n}}\cdot\hat{\mathbf{k}}\; dS = dx\, dy .
$$

On the bottom $z = \psi_1$ the outward normal points downward, which is the opposite choice, so there $\hat{\mathbf{n}}\cdot\hat{\mathbf{k}}\, dS = -dx\, dy$. On the lateral part the outward normal is horizontal, so $\hat{\mathbf{n}}\cdot\hat{\mathbf{k}} = 0$ and that part contributes nothing. Hence

$$
\oint_S F_3\,\bigl(\hat{\mathbf{n}}\cdot\hat{\mathbf{k}}\bigr)\, dS = \iint_D F_3(x,y,\psi_2)\, dx\, dy - \iint_D F_3(x,y,\psi_1)\, dx\, dy ,
$$

which is the right-hand side of Step 1. Combining,

$$
\int_V \frac{\partial F_3}{\partial z}\; dV = \oint_S F_3\,n_3\; dS . \tag{$\ast$}
$$

**Step 3 (the other two components).** Because $V$ is also $x$-simple and $y$-simple, the argument of Steps 1 and 2 applies with the coordinates permuted. Each direction brings its own data: being $x$-simple means that $V$ lies between two $C^1$ graphs $x = \chi_1(y,z) \le \chi_2(y,z)$ over a compact region $D' \subseteq \mathbb{R}^2$ in the $(y,z)$-plane, and these have nothing to do with the $D$, $\psi_1$, $\psi_2$ of Step 1; likewise for $y$. With that reading, Steps 1 and 2 give

$$
\int_V \frac{\partial F_1}{\partial x}\; dV = \oint_S F_1\,n_1\; dS, \qquad
\int_V \frac{\partial F_2}{\partial y}\; dV = \oint_S F_2\,n_2\; dS .
$$

Note that each of the three identities needs $V$ to be simple in its own direction; this is the only place where the shape of $V$ is used, and it is used three times.

**Step 4 (add).** Summing the three identities and using $\nabla\cdot\mathbf{F} = \partial_xF_1 + \partial_yF_2 + \partial_zF_3$ and $\mathbf{F}\cdot\hat{\mathbf{n}} = F_1n_1 + F_2n_2 + F_3n_3$ gives

$$
\int_V \nabla\cdot\mathbf{F}\; dV = \oint_S \mathbf{F}\cdot\hat{\mathbf{n}}\; dS .
$$

**Step 5 (regions assembled from simple pieces).** Suppose $V = V_1 \cup \dots \cup V_m$, where the $V_i$ are simple regions meeting only along pieces of their boundaries. Adding the theorem over the pieces, every face interior to $V$ occurs in exactly two of the surface integrals, carrying the outward normal of one piece and therefore the inward normal of the other. The two contributions are equal and opposite and cancel, while the volume integrals add to $\int_V$. What survives on the surface side is the integral over the part of $\bigcup_i \partial V_i$ lying in $\partial V$, with the normal pointing out of $V$. So the theorem holds for $V$. $\square$
:::

:::note{provenance=adapted src="lee-2013:Ch. 16, Thm 16.32, pp. 423–424"}
**The general case.** The statement above is for any bounded region with a piecewise $C^1$ boundary, which is more than Steps 1–5 deliver: a ball, for instance, is $z$-simple with graphs $\psi_{1,2} = \mp\sqrt{a^2 - x^2 - y^2}$ that are continuous on the closed disc but not $C^1$ up to its rim. Two devices close the gap, and neither is proved here. The elementary one is exhaustion: apply the theorem to the region between the two graphs over the disc of radius $a - \varepsilon$, whose boundary now also has a short cylindrical band of area $4\pi(a-\varepsilon)\sqrt{2a\varepsilon - \varepsilon^2} \to 0$; as $\varepsilon \to 0$ the volume integrals converge because $\nabla\cdot\mathbf{F}$ is bounded, the band's flux tends to $0$ for the same reason, and the two cap integrals converge to the integral over the sphere. The structural one is Lee's Theorem 16.32, which obtains the divergence theorem on any oriented Riemannian manifold with boundary as a corollary of Stokes's theorem for differential forms; see :ref[Stokes' theorem for forms]{to=geom.stokes-forms}. Strauss and Evans both state the theorem without proof and refer the reader elsewhere, and we follow them in taking it as given in the stated generality.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *$\mathbf{F}$ of class $C^1$ on the closed region.* Step 1 needs $\partial F_3/\partial z$ to exist and be integrable on $V$; Step 2 needs $F_3$ to have boundary values on $S$. A field that is $C^1$ only in the open region can fail: $\mathbf{F} = \hat{\mathbf{r}}/r^2$ on the punctured ball $0 < r \le a$ has $\nabla\cdot\mathbf{F} = 0$ everywhere it is defined, so the left side is $0$, while the outward flux through $r = a$ is $(1/a^2)(4\pi a^2) = 4\pi$. The theorem is not contradicted — the hypothesis fails at the origin — and the discrepancy is exactly what the :ref[Dirac delta]{to=vcalc.dirac-delta-basics} is introduced to bookkeep: writing $\nabla\cdot(\hat{\mathbf{r}}/r^2) = 4\pi\delta^{(3)}(\mathbf{r})$ restores the identity. Riley, Hobson and Bence make the same point with a point source of strength $Q$ in an incompressible fluid (p. 405), where $\nabla\cdot\mathbf{v} = Q\delta(\mathbf{r})$ and the flux is $Q$ or $0$ according to whether $S$ encloses the source.
- *Boundedness of $V$ and the closed surface.* The flux integral is over a *closed* surface bounding a region of nonzero volume. For an open surface the statement is meaningless; the standard manoeuvre, as in Riley, Hobson and Bence's example on p. 401, is to cap the open surface so that the union is closed, apply the theorem, and subtract the cap's flux.
- *Simple connectivity is not required.* Nothing in the proof uses it, and Riley, Hobson and Bence state the theorem for simply and multiply connected closed surfaces alike, asking only that the surface be closed and enclose a non-zero volume (p. 401). A solid torus is admissible, and so is a spherical shell $a \le r \le b$, whose boundary has two components, with the outward normal $+\hat{\mathbf{r}}$ on $r = b$ and $-\hat{\mathbf{r}}$ on $r = a$; forgetting the sign on the inner sphere is the commonest error in applications. Arfken, cited above for the companion identities, does impose the hypothesis: he states Gauss' theorem for a field continuous with its first derivatives over "a simply connected region of $\mathbb{R}^3$", adding that a region containing a hole, like a doughnut, is not one (p. 164). Neither his subdivision argument nor ours uses that restriction, so the two sources differ in strength and not in content; we follow Riley, Hobson and Bence, and the difference is logged in `verification/discrepancies.md`.
- *Orientability is automatic here.* The boundary of a region in $\mathbb{R}^3$ is always two-sided, so the flux is always defined — unlike the situation for a general open surface.
- *Where the proof could not be shortened.* Step 3 cannot be replaced by "by symmetry" unless $V$ really is simple in all three directions. The solid between the paraboloid $z = x^2+y^2$ and the plane $z = 1$ is $z$-simple with $C^1$ graphs, but as a region over the $(y,z)$-plane its graphs $x = \pm\sqrt{z - y^2}$ are not $C^1$ up to the curve $z = y^2$. The identity $(\ast)$ for the third component holds for it directly; the other two need the general statement or the exhaustion argument.
- *Dimension.* Evans's version holds in $\mathbb{R}^n$ for every $n \ge 1$. For $n = 2$ it is the divergence form of Green's theorem, $\int_D \nabla\cdot\mathbf{f}\, dA = \oint_C \mathbf{f}\cdot\hat{\mathbf{n}}\, ds$ with $\hat{\mathbf{n}}\, ds = (dy, -dx)$, which Strauss gives as his Eq. (8); for $n = 1$ it is the fundamental theorem of calculus, the "surface" being two points with normals $\pm 1$.
:::

:::example[A tetrahedron, both sides computed]{provenance=original}
Let $V$ be the tetrahedron with vertices $(0,0,0)$, $(2,0,0)$, $(0,2,0)$, $(0,0,2)$, that is $\{x,y,z \ge 0,\; x+y+z \le 2\}$, and let $\mathbf{F} = (x^2,\, y^2,\, z^2)$. This $V$ is a simple region, so the proof above applies to it directly.

1. *Volume side.* $\nabla\cdot\mathbf{F} = 2(x+y+z)$, so by the symmetry of $V$ in the three coordinates
   $$
   \int_V \nabla\cdot\mathbf{F}\; dV = 6\int_V x\; dV = 6\int_0^2 x\,\frac{(2-x)^2}{2}\, dx = 6\cdot\frac{2^4}{24} = 4 ,
   $$
   where the cross-section of $V$ at height $x$ is a right triangle of area $(2-x)^2/2$, and $\int_0^a x(a-x)^2\,dx/2 = a^4/24$.
2. *Surface side: the three coordinate faces.* On $\{x = 0\}$ the outward normal is $-\hat{\mathbf{i}}$, so $\mathbf{F}\cdot\hat{\mathbf{n}} = -x^2 = 0$ there. The same happens on $\{y=0\}$ and $\{z=0\}$. These three faces contribute nothing — each component of $\mathbf{F}$ vanishes on the face it is normal to.
3. *Surface side: the oblique face.* On $x+y+z = 2$ the outward unit normal is $\hat{\mathbf{n}} = (1,1,1)/\sqrt3$, and the face projects one-to-one onto the triangle $T = \{x,y\ge 0,\, x+y \le 2\}$ with $dS = \sqrt3\, dx\, dy$ (the graph $z = 2-x-y$ has $\sqrt{1 + 1 + 1} = \sqrt3$). Hence
   $$
   \int_{\text{oblique}} \mathbf{F}\cdot\hat{\mathbf{n}}\, dS = \iint_T \frac{x^2+y^2+z^2}{\sqrt3}\,\sqrt3\; dx\, dy = \iint_T \bigl(x^2 + y^2 + (2-x-y)^2\bigr)\, dx\, dy .
   $$
   The three terms are equal by the symmetry of $T$ under permuting $x$, $y$ and $2-x-y$, so this is
   $$
   3\iint_T x^2\, dx\, dy = 3\int_0^2 x^2 (2-x)\, dx = 3\Bigl[\frac{2x^3}{3} - \frac{x^4}{4}\Bigr]_0^2 = 3\Bigl(\frac{16}{3} - 4\Bigr) = 4 .
   $$
4. *Comparison.* Both sides equal $4$. As a dimensional check, the face has area $2\sqrt3 = 3.4641$ and $\mathbf{F}\cdot\hat{\mathbf{n}} = (x^2+y^2+z^2)/\sqrt3$ runs from $4/\sqrt3 = 2.309$ at the vertices to $(3\cdot\frac49)/\sqrt3 = 0.770$ at the centroid, so the flux must lie between $2.67$ and $8.00$; it does.
:::

:::example[A curved boundary: paraboloid and plane]{provenance=original}
Let $V$ be the solid bounded below by $z = x^2+y^2$ and above by $z = 1$, and let $\mathbf{F} = \mathbf{r} = (x,y,z)$.

1. *Volume side.* $\nabla\cdot\mathbf{r} = 3$, and the horizontal cross-section at height $z$ is a disc of radius $\sqrt z$, of area $\pi z$, so
   $$
   \int_V 3\; dV = 3\int_0^1 \pi z\; dz = \frac{3\pi}{2} .
   $$
2. *Surface side: the lid.* On $z = 1$, $x^2+y^2 \le 1$, the outward normal is $+\hat{\mathbf{k}}$ and $\mathbf{r}\cdot\hat{\mathbf{k}} = z = 1$, so the flux is the area of the disc, $\pi$.
3. *Surface side: the paraboloid.* Here the outward normal points away from the axis and downward. Writing the surface as the graph $z = h(x,y) = x^2+y^2$ over the unit disc, the *upward* element is $(-h_x,-h_y,1)\,dx\,dy = (-2x,-2y,1)\,dx\,dy$; the outward one is its negative, $(2x, 2y, -1)\, dx\, dy$. Then
   $$
   \mathbf{r}\cdot(2x,2y,-1) = 2x^2 + 2y^2 - z = 2\rho^2 - \rho^2 = \rho^2
   $$
   on the surface, and in plane polars
   $$
   \int_{\text{parab}} \mathbf{r}\cdot d\mathbf{S} = \int_0^{2\pi}\!\!\int_0^1 \rho^2\cdot\rho\, d\rho\, d\phi = \frac{2\pi}{4} = \frac{\pi}{2} .
   $$
4. *Comparison.* $\pi + \pi/2 = 3\pi/2$, matching step 1. Note how step 3 would have come out $-\pi/2$ with the orientation taken carelessly, and the two sides would then have differed by $\pi$ — the usual symptom of a sign slip in a flux.
5. *The volume, for free.* The same field gives $\operatorname{vol}(V) = \frac13\oint \mathbf{r}\cdot d\mathbf{S} = \frac13\cdot\frac{3\pi}{2} = \frac{\pi}{2}$, which agrees with $\int_0^1 \pi z\, dz$.
:::

:::application{provenance=adapted src="rhb-2006:§11.8.3, p. 404"}
The theorem's main use is to convert a conservation law, which is naturally a statement about a region and its boundary, into a partial differential equation, which is a statement at a point. Consider a fluid of density $\rho(\mathbf{r},t)$ moving with velocity $\mathbf{v}(\mathbf{r},t)$, with no creation or destruction of matter. For any fixed region $V$ in the fluid, the mass inside is $\int_V \rho\, dV$, and the only way it can change is by transport across $S = \partial V$, at the rate $\oint_S \rho\mathbf{v}\cdot d\mathbf{S}$ outwards. So

$$
\frac{d}{dt}\int_V \rho\, dV = -\oint_S \rho\mathbf{v}\cdot d\mathbf{S} .
$$

Taking the derivative inside the integral on the left (legitimate for $\rho$ and $\partial\rho/\partial t$ continuous, :ref[differentiation under the integral sign]{to=found.differentiation-under-integral}) and the divergence theorem on the right,

$$
\int_V \left( \frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\mathbf{v}) \right) dV = 0 .
$$

The region $V$ was arbitrary and the integrand is continuous, so the integrand vanishes identically: a continuous function whose integral vanishes over every region is zero, since otherwise it would keep one sign on a small ball around a point where it is nonzero. This is the **continuity equation**

$$
\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\mathbf{v}) = 0 ,
$$

which reduces to $\nabla\cdot\mathbf{v} = 0$ for an incompressible fluid. The identical argument with $\rho$ read as charge density and $\rho\mathbf{v}$ as current density gives charge conservation; with $\rho$ read as heat content and the flux given by Fourier's law $-k\nabla T$, it gives the :ref[heat equation]{to=pde.heat-kernel}; and with a source term $\sigma$ on the right it gives the general transport equation of :ref[conservation laws]{to=pde.conservation-laws-shocks}. Gauss's law of electrostatics, $\oint_S \mathbf{E}\cdot d\mathbf{S} = q/\varepsilon_0$, becomes $\nabla\cdot\mathbf{E} = \rho/\varepsilon_0$ by the same route, and the integration-by-parts identity above is the first step in every finite-element formulation of an elliptic boundary-value problem (:ref[finite elements]{to=num.finite-elements}).
:::
