---
id: geom.first-fundamental-form
title: Regular surfaces and the first fundamental form
kind: definition
level: core
summary: Defines a regular surface in $\mathbb{R}^3$ by charts, proves that the tangent vectors at a point fill a two-dimensional plane spanned by $\mathbf{x}_u$ and $\mathbf{x}_v$, and introduces the first fundamental form $I_p(w) = \lvert w\rvert^2$ with coefficients $E, F, G$, from which lengths of curves, angles between them and areas of regions are computed without further reference to the ambient space.
prereqs: [vcalc.surface-integrals, found.partial-derivatives-chain-rule, found.implicit-inverse-function]
provenance: adapted
sources:
  - work: docarmo-2016
    loc: "§2-2, Definition 1 and conditions 1–3, pp. 54–56 (regular surface; parametrization; the regularity condition as injectivity of $d\\mathbf{x}_q$); §2-4, Proposition 1 and its proof, pp. 85–87 (the set of tangent vectors is $d\\mathbf{x}_q(\\mathbb{R}^2)$; the associated basis $\\{\\mathbf{x}_u,\\mathbf{x}_v\\}$ and the coordinates of a tangent vector), p. 89 (unit normal $N = \\mathbf{x}_u\\wedge\\mathbf{x}_v/\\lvert\\mathbf{x}_u\\wedge\\mathbf{x}_v\\rvert$ and angle between surfaces); §2-5, Definition 1 and Eq. (1), pp. 94–95 (the first fundamental form and the coefficients $E, F, G$), pp. 97–98 (arc length Eq. (2), angle of two curves, angle of the coordinate curves, the line element $ds^2$), pp. 99–100 (regular domain and region; parametrization-independence of $\\int\\lvert\\mathbf{x}_u\\wedge\\mathbf{x}_v\\rvert$; Definition 2, area; $\\lvert\\mathbf{x}_u\\wedge\\mathbf{x}_v\\rvert = \\sqrt{EG-F^2}$)"
    pages: "54-56, 85-87, 89-90, 94-100"
    role: every definition and statement of the unit, and the proof route for the tangent plane
  - work: lee-2013
    loc: "Ch. 13, 'Riemannian metrics', pp. 327–329: a Riemannian metric as a smooth positive-definite symmetric $2$-tensor field, its coordinate expression $g_{ij}\\,dx^i dx^j$, the induced metric on a submanifold of $\\mathbb{R}^n$ by pullback, and the length of a curve as the integral of the norm of its velocity"
    pages: "327-329"
    role: the reading of $I_p$ as the induced Riemannian metric, and the index notation $g_{ij}$ used alongside $E, F, G$
---

:::definition[Regular surface, tangent plane, first fundamental form]{provenance=adapted src="docarmo-2016:§2-2, Def. 1, pp. 54–55, §2-4, pp. 86–87 and p. 89, and §2-5, Def. 1, pp. 94–95; lee-2013:Ch. 13, pp. 327–329"}
**Regular surface.** A set $S \subseteq \mathbb{R}^3$ is a **regular surface** if for every $p \in S$ there are an open set $V \subseteq \mathbb{R}^3$ containing $p$, an open set $U \subseteq \mathbb{R}^2$, and a map $\mathbf{x} : U \to V \cap S$ *onto* $V \cap S$ such that

1. $\mathbf{x}$ is smooth: writing $\mathbf{x}(u,v) = (x(u,v), y(u,v), z(u,v))$, all partial derivatives of all orders of the three components exist and are continuous on $U$;
2. $\mathbf{x}$ is a homeomorphism onto $V \cap S$, that is, $\mathbf{x}^{-1} : V\cap S \to U$ exists and is continuous;
3. (**regularity**) for every $q \in U$ the differential $d\mathbf{x}_q : \mathbb{R}^2 \to \mathbb{R}^3$ is injective.

Such an $\mathbf{x}$ is a **parametrization** (or local coordinate system) at $p$, and $V \cap S$ a **coordinate neighbourhood**. Writing $\mathbf{x}_u = \partial\mathbf{x}/\partial u$ and $\mathbf{x}_v = \partial\mathbf{x}/\partial v$, the matrix of $d\mathbf{x}_q$ has columns $\mathbf{x}_u(q)$ and $\mathbf{x}_v(q)$, so condition 3 says exactly that these two vectors are linearly independent, equivalently $\mathbf{x}_u\times\mathbf{x}_v \ne \mathbf{0}$.

do Carmo requires derivatives of *all* orders in condition 1, remarking (p. 90) that in practice one rarely needs more than four, and that the blanket $C^\infty$ hypothesis is adopted only to avoid tracking the minimum smoothness case by case. We keep his convention.

**Tangent plane.** A **tangent vector** to $S$ at $p$ is a vector $\boldsymbol{\alpha}'(0)$ for some smooth curve $\boldsymbol{\alpha} : (-\varepsilon,\varepsilon) \to S$ with $\boldsymbol{\alpha}(0) = p$. By the statement below these vectors form a two-dimensional subspace $T_p S \subset \mathbb{R}^3$, the **tangent plane**, and $\{\mathbf{x}_u(q), \mathbf{x}_v(q)\}$, with $q = \mathbf{x}^{-1}(p)$, is a basis of it, the **basis associated with $\mathbf{x}$**. A parametrization also singles out one of the two unit vectors orthogonal to $T_pS$,
$$
N = \frac{\mathbf{x}_u\times\mathbf{x}_v}{\lvert\mathbf{x}_u\times\mathbf{x}_v\rvert}.
$$

**First fundamental form.** Since $T_pS \subset \mathbb{R}^3$, the Euclidean inner product of $\mathbb{R}^3$ restricts to an inner product $\langle\,\cdot\,,\cdot\,\rangle_p$ on $T_pS$. The **first fundamental form** of $S$ at $p$ is the associated quadratic form
$$
I_p : T_pS \to \mathbb{R}, \qquad I_p(w) = \langle w, w\rangle_p = \lvert w\rvert^2 \;\ge\; 0 .
$$
In the basis associated with a parametrization its **coefficients** are the three functions
$$
E = \langle \mathbf{x}_u, \mathbf{x}_u\rangle, \qquad F = \langle \mathbf{x}_u, \mathbf{x}_v\rangle, \qquad G = \langle \mathbf{x}_v, \mathbf{x}_v\rangle ,
$$
smooth on $U$, and for $w = a\,\mathbf{x}_u + b\,\mathbf{x}_v$,
$$
I_p(w) = E a^2 + 2F ab + G b^2 .
$$
Classically one writes the **line element**
$$
ds^2 = E\,du^2 + 2F\,du\,dv + G\,dv^2 ,
$$
meaning the statement about arc length below. In index notation the same object is the symmetric matrix $(g_{ij}) = \begin{pmatrix} E & F \\ F & G\end{pmatrix}$ with $ds^2 = g_{ij}\,dx^i dx^j$; Lee calls it the Riemannian metric induced on $S$ by the inclusion into $\mathbb{R}^3$. The sibling unit :ref[The metric tensor]{to=geom.metric-tensor} develops the index form; :ref[Riemannian manifolds]{to=geom.riemannian-metrics} drops the ambient space altogether.

A parametrization with $F \equiv 0$ is **orthogonal**; one with $E = G$ and $F = 0$ is **isothermal**.

**Regions.** A **domain** of $S$ is a connected open subset whose boundary is the image of a circle under a differentiable homeomorphism that is regular except at finitely many points; a **region** is a domain together with its boundary, and it is **bounded** if it lies in some ball of $\mathbb{R}^3$.
:::

:::statement[What the first fundamental form measures]{provenance=adapted src="docarmo-2016:§2-4, Prop. 1, p. 86, §2-5, Eq. (2), pp. 97–98, and §2-5, Def. 2, p. 100"}
Let $S$ be a regular surface, $\mathbf{x} : U \to S$ a parametrization, $q \in U$ and $p = \mathbf{x}(q)$.

1. **(Tangent plane.)** The set of tangent vectors to $S$ at $p$ is exactly the two-dimensional subspace $d\mathbf{x}_q(\mathbb{R}^2) = \operatorname{span}\{\mathbf{x}_u(q), \mathbf{x}_v(q)\}$. In particular it does not depend on the parametrization. If $\boldsymbol{\alpha}(t) = \mathbf{x}(u(t), v(t))$, then $\boldsymbol{\alpha}'(0) = u'(0)\,\mathbf{x}_u + v'(0)\,\mathbf{x}_v$: the coordinates of a tangent vector in the associated basis are the derivatives of the parameter curve.
2. **(Lengths.)** For a smooth curve $\boldsymbol{\alpha}(t) = \mathbf{x}(u(t), v(t))$ on $S$, the arc length from $0$ to $t$ is
   $$
   s(t) = \int_0^t \sqrt{I\bigl(\boldsymbol{\alpha}'(\tilde t)\bigr)}\, d\tilde t = \int_0^t \sqrt{E (u')^2 + 2F u'v' + G (v')^2}\; d\tilde t .
   $$
3. **(Angles.)** Two curves on $S$ meeting at $t = t_0$ cross at the angle $\theta$ with
   $$
   \cos\theta = \frac{\langle \boldsymbol{\alpha}'(t_0), \boldsymbol{\beta}'(t_0)\rangle}{\lvert\boldsymbol{\alpha}'(t_0)\rvert\,\lvert\boldsymbol{\beta}'(t_0)\rvert}.
   $$
   For the two coordinate curves of $\mathbf{x}$ this reads $\cos\varphi = F/\sqrt{EG}$; hence the coordinate curves are orthogonal at every point if and only if $F \equiv 0$.
4. **(Areas.)** $\lvert\mathbf{x}_u\times\mathbf{x}_v\rvert = \sqrt{EG - F^2}$, and this is strictly positive on $U$. If $R \subset S$ is a bounded region contained in the coordinate neighbourhood of $\mathbf{x}$ and $Q = \mathbf{x}^{-1}(R)$ is compact, then
   $$
   A(R) = \iint_Q \sqrt{EG - F^2}\; du\, dv
   $$
   is independent of the parametrization and is called the **area** of $R$.

Everything in 2–4 is computed from $E$, $F$, $G$ alone. This is the sense in which the first fundamental form carries the *metric* geometry of $S$: a traveller confined to the surface, able to measure only lengths of paths, angles and areas, has access to exactly these three functions.
:::

:::idea{provenance=original}
Condition 3 in the definition of a regular surface is the whole point. It says the parameter plane is mapped onto the surface without collapsing a direction, and so the two coordinate velocity vectors $\mathbf{x}_u, \mathbf{x}_v$ are independent. Every curve on $S$ through $p$ can be read in the chart as a curve in $U$, and the chain rule writes its velocity as a combination of $\mathbf{x}_u$ and $\mathbf{x}_v$; conversely every such combination is realized by a straight line in $U$. That gives the tangent plane in one short argument, with both inclusions. Once the tangent plane is known to be a plane sitting inside $\mathbb{R}^3$, it inherits the ambient dot product, and expanding that dot product in the basis $\{\mathbf{x}_u, \mathbf{x}_v\}$ produces the three numbers $E, F, G$ and nothing else. Lengths, angles and areas are all built from dot products of tangent vectors, so all three reduce to $E$, $F$, $G$.
:::

:::proof{provenance=adapted src="docarmo-2016:§2-4, Prop. 1 and its proof, pp. 86–87, with §2-5, pp. 95, 97–98 and p. 100"}
**Part 1.** Two inclusions.

*Every tangent vector lies in $d\mathbf{x}_q(\mathbb{R}^2)$.* Let $w = \boldsymbol{\alpha}'(0)$ with $\boldsymbol{\alpha} : (-\varepsilon,\varepsilon) \to \mathbf{x}(U)$ smooth and $\boldsymbol{\alpha}(0) = p$. Because $\mathbf{x}$ is a homeomorphism onto its image (condition 2), $\boldsymbol{\beta} = \mathbf{x}^{-1}\circ\boldsymbol{\alpha}$ is a well-defined curve in $U$, and it is smooth: by condition 3, $d\mathbf{x}_q$ is injective, so some $2\times 2$ minor of the Jacobian is invertible, and the inverse function theorem (:ref[inverse function theorem]{to=found.implicit-inverse-function}) applied to $\mathbf{x}$ followed by the corresponding coordinate projection produces a smooth local inverse that agrees with $\mathbf{x}^{-1}$ on $S$. Writing $\boldsymbol{\beta}(t) = (u(t), v(t))$ and differentiating $\boldsymbol{\alpha} = \mathbf{x}\circ\boldsymbol{\beta}$ by the chain rule (:ref[chain rule]{to=found.partial-derivatives-chain-rule}),
$$
w = \boldsymbol{\alpha}'(0) = u'(0)\,\mathbf{x}_u(q) + v'(0)\,\mathbf{x}_v(q) = d\mathbf{x}_q\bigl(\boldsymbol{\beta}'(0)\bigr),
$$
which is the coordinate statement at the end of Part 1 as well.

*Every element of $d\mathbf{x}_q(\mathbb{R}^2)$ is tangent.* Given $\mathbf{z} \in \mathbb{R}^2$, the segment $\boldsymbol{\gamma}(t) = q + t\mathbf{z}$ stays in the open set $U$ for $\lvert t\rvert$ small, and $\boldsymbol{\alpha} = \mathbf{x}\circ\boldsymbol{\gamma}$ is a smooth curve on $S$ through $p$ with $\boldsymbol{\alpha}'(0) = d\mathbf{x}_q(\mathbf{z})$.

So the set of tangent vectors equals $d\mathbf{x}_q(\mathbb{R}^2)$, which by condition 3 is a two-dimensional subspace. The left-hand description makes no mention of $\mathbf{x}$, so the plane is independent of the chart.

**Part 2.** By Part 1, $\boldsymbol{\alpha}'(t) = u'\mathbf{x}_u + v'\mathbf{x}_v$. Expanding the inner product bilinearly,
$$
\lvert\boldsymbol{\alpha}'\rvert^2 = \langle u'\mathbf{x}_u + v'\mathbf{x}_v,\; u'\mathbf{x}_u + v'\mathbf{x}_v\rangle = E(u')^2 + 2Fu'v' + G(v')^2 = I(\boldsymbol{\alpha}'),
$$
the cross terms combining because the inner product is symmetric. Arc length is $\int\lvert\boldsymbol{\alpha}'\rvert$ (:ref[line integrals]{to=vcalc.line-integrals}), which is the claimed formula.

**Part 3.** The angle formula is the definition of the angle between two vectors of $\mathbb{R}^3$, applied to two tangent vectors. For the coordinate curves $t \mapsto \mathbf{x}(t, v_0)$ and $t\mapsto \mathbf{x}(u_0, t)$ the velocities are $\mathbf{x}_u$ and $\mathbf{x}_v$, with lengths $\sqrt E$ and $\sqrt G$, so $\cos\varphi = F/\sqrt{EG}$. This vanishes exactly when $F = 0$, and $\sqrt{EG} > 0$ because $\mathbf{x}_u$ and $\mathbf{x}_v$ are nonzero.

**Part 4.** The identity $\lvert\mathbf{a}\times\mathbf{b}\rvert^2 + \langle\mathbf{a},\mathbf{b}\rangle^2 = \lvert\mathbf{a}\rvert^2\lvert\mathbf{b}\rvert^2$ (:ref[vector algebra]{to=vcalc.vector-algebra}) with $\mathbf{a} = \mathbf{x}_u$, $\mathbf{b} = \mathbf{x}_v$ gives $\lvert\mathbf{x}_u\times\mathbf{x}_v\rvert^2 = EG - F^2$, and the left side is nonzero by condition 3, so $EG - F^2 > 0$. Independence of the parametrization is the statement already proved in :ref[surface integrals and flux]{to=vcalc.surface-integrals}: if $\bar{\mathbf{x}}$ is a second parametrization covering $R$ and $h = \mathbf{x}^{-1}\circ\bar{\mathbf{x}}$ is the change of parameters, then $\lvert\bar{\mathbf{x}}_{\bar u}\times\bar{\mathbf{x}}_{\bar v}\rvert = \lvert\mathbf{x}_u\times\mathbf{x}_v\rvert\,\lvert\det Dh\rvert$, and the change-of-variables theorem for double integrals absorbs the Jacobian factor. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Condition 3 (regularity).** Used three times: to make $T_pS$ two-dimensional at all; to get the smooth local inverse in Part 1 through the inverse function theorem; and to guarantee $EG - F^2 > 0$, without which the area integrand could vanish and the matrix $(g_{ij})$ fail to be positive definite. The cone $\mathbf{x}(u,v) = (v\cos u, v\sin u, v)$ fails it at $v = 0$: there $\mathbf{x}_u = \mathbf{0}$, $EG - F^2 = 0$, and the vertex has no tangent plane.
- **Condition 2 (homeomorphism).** This is what rules out a parameter plane folded so that it touches itself. The map $\mathbf{x}(u,v) = (\sin u\,,\, \sin 2u\,,\, v)$ on $(0, 2\pi)\times\mathbb{R}$ is smooth and satisfies condition 3, but its image is a self-crossing cylinder whose "tangent plane" at a crossing point is not well defined; the inverse is not continuous there.
- **Smoothness beyond $C^1$.** The tangent plane, $E, F, G$ and all of Parts 1–4 need only $C^1$. do Carmo gives the graph of $z = \sqrt[3]{(x^2+y^2)^2}$ as a set that has a tangent plane at the origin yet is not a regular surface in his sense, because $z_{xx}$ does not exist there :cite[]{work=docarmo-2016 loc="§2-4, Example 3, p. 90"}. The higher derivatives are needed only from :ref[the second fundamental form]{to=geom.surface-curvature} onwards.
- **$R$ inside one chart.** Part 4 assumes the region lies in a single coordinate neighbourhood. That is a restriction on the formula, not on the notion of area: most surfaces have a chart covering everything except a set of curves, which contributes nothing to the integral, as in the example below.
- **The ambient inner product.** $I_p$ is defined by restricting the dot product of $\mathbb{R}^3$. Nothing in Parts 2–4 uses the ambient space again, which is the observation that :ref[Gauss's Theorema Egregium]{to=geom.theorema-egregium} turns into a theorem.
:::

:::method[Computing with $E$, $F$, $G$]{provenance=original}
Given a parametrization $\mathbf{x}(u,v)$ of a surface:

1. Differentiate: $\mathbf{x}_u$, $\mathbf{x}_v$.
2. Form $E = \mathbf{x}_u\cdot\mathbf{x}_u$, $F = \mathbf{x}_u\cdot\mathbf{x}_v$, $G = \mathbf{x}_v\cdot\mathbf{x}_v$. Check $EG - F^2 > 0$ on the whole parameter domain; where it fails, the parametrization is singular and the chart must be changed.
3. For a curve given in the chart by $t\mapsto (u(t), v(t))$, its length is $\int \sqrt{E\dot u^2 + 2F\dot u\dot v + G\dot v^2}\,dt$.
4. For the angle between two chart directions $(a_1,b_1)$ and $(a_2,b_2)$, use the polarized form $\langle w_1, w_2\rangle = Ea_1a_2 + F(a_1b_2+a_2b_1) + Gb_1b_2$ in $\cos\theta = \langle w_1,w_2\rangle/(\lvert w_1\rvert\lvert w_2\rvert)$.
5. For the area of $R$, integrate $\sqrt{EG-F^2}$ over $\mathbf{x}^{-1}(R)$.
6. **Shortcut for a graph.** If $S$ is $z = h(x,y)$ with $\mathbf{x}(x,y) = (x, y, h)$, then $\mathbf{x}_x = (1,0,h_x)$, $\mathbf{x}_y = (0,1,h_y)$ and
   $$
   E = 1 + h_x^2, \quad F = h_xh_y, \quad G = 1 + h_y^2, \quad EG - F^2 = 1 + h_x^2 + h_y^2 .
   $$
7. **Sanity checks.** $E > 0$ and $G > 0$ always; $F = 0$ means the chart is orthogonal; setting all the surface's parameters to a flat case should return $ds^2 = du^2 + dv^2$.
:::

:::example[The paraboloid $z = \tfrac12(x^2+y^2)$]{provenance=original}
Parametrize the paraboloid by polar coordinates in the base plane,
$$
\mathbf{x}(r, \theta) = \Bigl(r\cos\theta,\; r\sin\theta,\; \tfrac12 r^2\Bigr), \qquad r > 0, \;\; 0 < \theta < 2\pi .
$$
This chart misses only the vertex and one meridian, a set of zero area.

**Step 1: the coefficients.**
$$
\mathbf{x}_r = (\cos\theta,\; \sin\theta,\; r), \qquad \mathbf{x}_\theta = (-r\sin\theta,\; r\cos\theta,\; 0),
$$
so
$$
E = \cos^2\theta + \sin^2\theta + r^2 = 1 + r^2, \qquad
F = -r\cos\theta\sin\theta + r\sin\theta\cos\theta + 0 = 0, \qquad
G = r^2\sin^2\theta + r^2\cos^2\theta = r^2 .
$$
Hence $EG - F^2 = r^2(1+r^2) > 0$ for $r > 0$: the chart is regular and orthogonal, and
$$
ds^2 = (1+r^2)\,dr^2 + r^2\,d\theta^2 .
$$
(Check: setting the height to zero would replace $E$ by $1$ and give the Euclidean polar line element $dr^2 + r^2d\theta^2$, as it must.)

**Step 2: a length.** Take the spiral that climbs the bowl with $r = \theta$, from $\theta = 0$ to $\theta = 1$. Here $\dot r = 1$ and $\dot\theta = 1$, so
$$
L = \int_0^1 \sqrt{(1+\theta^2)\cdot 1 + \theta^2\cdot 1}\; d\theta = \int_0^1\sqrt{1+2\theta^2}\;d\theta .
$$
With $\int\sqrt{1+2\theta^2}\,d\theta = \tfrac{\theta}{2}\sqrt{1+2\theta^2} + \tfrac{1}{2\sqrt2}\operatorname{arcsinh}(\sqrt2\,\theta)$,
$$
L = \frac{\sqrt3}{2} + \frac{\sqrt2}{4}\operatorname{arcsinh}\sqrt2 = 0.8660254 + 0.4052486 = 1.2712739 .
$$
For comparison, the same spiral drawn flat in the base plane has length $\int_0^1\sqrt{1+\theta^2}\,d\theta = 1.1477936$; climbing the bowl costs about $10.8\%$ extra.

**Step 3: an angle.** At the point $r = 1$, $\theta = 0$ (that is, $(1,0,\tfrac12)$), the spiral's chart direction is $(\dot r, \dot\theta) = (1,1)$ and the meridian $\theta = \text{const}$ has direction $(1,0)$. Since $F = 0$, the polarized form gives $\langle w_1, w_2\rangle = E\cdot 1\cdot 1 = 2$, while $\lvert w_1\rvert = \sqrt{E + G} = \sqrt3$ and $\lvert w_2\rvert = \sqrt E = \sqrt2$. So
$$
\cos\theta_{\text{cross}} = \frac{2}{\sqrt3\sqrt2} = \sqrt{\tfrac23} = 0.8164966, \qquad \theta_{\text{cross}} = 35.2644^\circ .
$$

**Step 4: an area.** The part of the paraboloid lying over the disc $x^2 + y^2 \le 3$ is $R = \mathbf{x}(Q)$ with $Q = (0,\sqrt3\,]\times(0,2\pi)$, and
$$
A(R) = \int_0^{2\pi}\!\!\int_0^{\sqrt3} \sqrt{r^2(1+r^2)}\; dr\, d\theta
= 2\pi\int_0^{\sqrt3} r\sqrt{1+r^2}\; dr
= 2\pi\left[\frac{(1+r^2)^{3/2}}{3}\right]_0^{\sqrt3}
= \frac{2\pi}{3}\bigl(4^{3/2} - 1\bigr) .
$$
Since $4^{3/2} = 8$,
$$
\boxed{\,A(R) = \frac{14\pi}{3} = 14.66077\,}
$$
against $3\pi = 9.42478$ for the flat disc underneath it. The same answer follows from the graph shortcut: $h = \tfrac12(x^2+y^2)$ gives $\sqrt{1+h_x^2+h_y^2} = \sqrt{1+x^2+y^2}$, and $\iint_{x^2+y^2\le 3}\sqrt{1+x^2+y^2}\,dx\,dy$ is the same integral in disguise.
:::

:::application[Induced metrics in physics]{provenance=original}
**The metric is the data.** Almost every surface calculation in physics is run on $E, F, G$ rather than on the embedding. On the sphere of radius $a$, $\mathbf{x}(\vartheta,\varphi) = a(\sin\vartheta\cos\varphi, \sin\vartheta\sin\varphi, \cos\vartheta)$ gives $E = a^2$, $F = 0$, $G = a^2\sin^2\vartheta$, so $ds^2 = a^2(d\vartheta^2 + \sin^2\vartheta\, d\varphi^2)$ and $\sqrt{EG-F^2} = a^2\sin\vartheta$. That factor $\sin\vartheta$ is the $d\Omega$ of every spherical-harmonic expansion, every radiation pattern and every solid-angle integral; it comes from the first fundamental form and nothing else.

**Membranes and shells.** In continuum mechanics the strain of a thin sheet is defined as half the change in its first fundamental form between the reference and the deformed configuration, $\epsilon_{ij} = \tfrac12(g_{ij} - g_{ij}^{(0)})$. Stretching energy is a quadratic form in that difference. A deformation that leaves $E, F, G$ unchanged costs no stretching energy at all, which is why paper bends freely but tears rather than stretches.

**General relativity.** The induced metric on a spacelike hypersurface is exactly this construction one dimension up: restrict the ambient metric to the tangent space at each point. It is the "first fundamental form" of the $3{+}1$ initial-value formulation, paired there with a second fundamental form that plays the role of its time derivative.

**Surface integrals and transport.** The flux and area integrals of :ref[surface integrals and flux]{to=vcalc.surface-integrals} all carry the factor $\sqrt{EG-F^2}$. In heat and mass transfer over a curved interface, or in computing the radiating area of a corrugated fin, getting this factor right is the whole calculation: the paraboloid above has $55\%$ more area than its shadow.
:::
