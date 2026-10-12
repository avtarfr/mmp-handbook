---
id: vcalc.surface-integrals
title: Surface integrals and flux
kind: definition
level: core
summary: Defines a regular parametrized surface patch, its scalar surface element $dS = \lvert \mathbf{r}_u \times \mathbf{r}_v\rvert\,du\,dv$ and its vector element $d\mathbf{S} = \hat{\mathbf{n}}\,dS$, proves that both are independent of the parametrization, fixes the orientation conventions for closed and open surfaces, and gives the graph and projection formulas used to compute a flux integral.
prereqs: [found.change-of-variables, vcalc.vector-algebra, found.partial-derivatives-chain-rule]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§11.5, Eqs. (11.8)–(11.9) and Fig. 11.5, pp. 389–390 (the four kinds of surface integral; the orientation conventions for closed and open surfaces; the limit-of-a-sum definition of flux); §11.5.1, Eq. (11.10) and Fig. 11.6, pp. 391–392 (projection onto a coordinate plane and the resulting formula for $dS$)"
    pages: "389-392"
    role: the kinds of surface integral, the orientation conventions, the projection formula and the warning about surfaces met more than once by a vertical line
  - work: arfken-2013
    loc: "§3.7, 'Surface Integrals', p. 161 with Fig. 3.13 (the element of area as a vector $d\\boldsymbol{\\sigma} = \\hat{\\mathbf{n}}\\,dA$; the two conventions for the positive normal, and the $\\mathbf{u}\\times\\mathbf{v}$ right-hand rule for an open surface)"
    pages: "161"
    role: the vector area element and the careful statement of the right-hand rule for an open surface
  - work: docarmo-2016
    loc: "§2-3, Proposition 1 (Change of Parameters), p. 72 (a change of coordinates between two parametrizations of the same surface is automatically a diffeomorphism); §2-5, pp. 98–100: the first fundamental form coefficients $E, F, G$, the identity $\\lvert \\mathbf{x}_u \\wedge \\mathbf{x}_v\\rvert = \\sqrt{EG - F^2}$, the proof that $\\int \\lvert \\mathbf{x}_u \\wedge \\mathbf{x}_v\\rvert\\,du\\,dv$ is unchanged by a change of parameters, and Definition 2 (area of a bounded region); §2-6, Definition 1, p. 106 (orientable surface); Exercise 5, p. 102 (area of a graph)"
    pages: "72, 98-102, 106"
    role: the area element, its parametrization invariance with proof, the automatic smoothness of a change of parameters, and the definition of orientability
  - work: strauss-2008
    loc: "Appendix §A.3, 'Curves and surfaces', pp. 421–422: a surface as a $C^1$ map from a plane parameter domain, the sphere in spherical coordinates, graphs as a special case, piecewise $C^1$ surfaces, and Theorem 5 (a level set with non-vanishing gradient is a $C^1$ surface)"
    pages: "421-422"
    role: the definition of a parametrized and of a piecewise $C^1$ surface, and the level-set criterion
---

:::definition[Regular patch, surface element, orientation, flux]{provenance=adapted src="docarmo-2016:§2-5, pp. 98–100 and Def. 2, p. 100; rhb-2006:§11.5, pp. 389–390; arfken-2013:§3.7, p. 161; strauss-2008:§A.3, pp. 421–422"}
Let $D \subseteq \mathbb{R}^2$ be a connected set that is the closure of a bounded open set, with coordinates $(u,v)$.

- A **regular parametrized patch** is a map $\mathbf{r} : D \to \mathbb{R}^3$ that is $C^1$, injective on the interior of $D$, and satisfies $\mathbf{r}_u \times \mathbf{r}_v \ne \mathbf{0}$ there, where $\mathbf{r}_u = \partial\mathbf{r}/\partial u$ and $\mathbf{r}_v = \partial\mathbf{r}/\partial v$. Its image is the **surface** $S = \mathbf{r}(D)$, and $(u,v)$ are its parameters. A **piecewise $C^1$ surface** is a finite union of such patches meeting along boundary curves, for example the six faces of a cube.
- The two vectors $\mathbf{r}_u, \mathbf{r}_v$ span the tangent plane at $\mathbf{r}(u,v)$. The **first fundamental form** of the patch records three numbers attached to that plane, whose classical names are $E$, $F$ and $G$:
  $$
  E = \mathbf{r}_u\cdot\mathbf{r}_u, \qquad F = \mathbf{r}_u\cdot\mathbf{r}_v, \qquad G = \mathbf{r}_v\cdot\mathbf{r}_v .
  $$
  By the Lagrange identity $\lvert \mathbf{a}\times\mathbf{b}\rvert^2 + (\mathbf{a}\cdot\mathbf{b})^2 = \lvert\mathbf{a}\rvert^2\lvert\mathbf{b}\rvert^2$ (:ref[vector algebra]{to=vcalc.vector-algebra}),
  $$
  \lvert \mathbf{r}_u \times \mathbf{r}_v \rvert = \sqrt{EG - F^2} .
  $$
- The **scalar surface element** is $dS = \lvert \mathbf{r}_u \times \mathbf{r}_v\rvert\, du\, dv$; it is the area of the parallelogram spanned by $\mathbf{r}_u\,du$ and $\mathbf{r}_v\,dv$. The **area** of $S$ and the **surface integral of a scalar field** $\varphi$ over $S$ are
  $$
  A(S) = \iint_D \lvert \mathbf{r}_u \times \mathbf{r}_v\rvert\, du\, dv , \qquad
  \int_S \varphi\, dS = \iint_D \varphi\bigl(\mathbf{r}(u,v)\bigr)\, \lvert \mathbf{r}_u \times \mathbf{r}_v\rvert\, du\, dv .
  $$
- A **unit normal** at $\mathbf{r}(u,v)$ is one of the two unit vectors orthogonal to the tangent plane; the parametrization picks out
  $$
  \hat{\mathbf{n}} = \frac{\mathbf{r}_u \times \mathbf{r}_v}{\lvert \mathbf{r}_u \times \mathbf{r}_v\rvert} .
  $$
  An **orientation** of a surface is a continuous choice of unit normal on it. A surface admitting one is **orientable**; equivalently (do Carmo's Def. 1) it can be covered by patches whose changes of parameters all have positive Jacobian determinant. The **vector surface element** is then $d\mathbf{S} = \hat{\mathbf{n}}\, dS = (\mathbf{r}_u \times \mathbf{r}_v)\, du\, dv$.
- The **flux** of a continuous vector field $\mathbf{F}$ through an oriented surface $S$ is
  $$
  \int_S \mathbf{F}\cdot d\mathbf{S} \;=\; \int_S \mathbf{F}\cdot\hat{\mathbf{n}}\, dS \;=\; \iint_D \mathbf{F}\bigl(\mathbf{r}(u,v)\bigr)\cdot\bigl(\mathbf{r}_u\times\mathbf{r}_v\bigr)\, du\, dv .
  $$
  The integrals $\int_S \varphi\, d\mathbf{S}$ and $\int_S \mathbf{F}\times d\mathbf{S}$ are defined componentwise in the same way; they are vectors, whereas $\int_S \varphi\, dS$ and the flux are scalars. For a closed surface $S$ the notation $\oint_S$ is used.
:::

:::statement[Orientation conventions]{provenance=adapted src="rhb-2006:§11.5, Fig. 11.5 and pp. 389–390; arfken-2013:§3.7, p. 161 with Fig. 3.13"}
Two conventions fix the sign of a flux, and every statement about flux depends on which one is in force.

1. **Closed surface.** A closed surface encloses a volume $V$; the positive normal points *out* of $V$. A closed surface need not be simply connected — the surface of a torus is closed — but it must bound a volume.
2. **Open surface.** The boundary of an open surface is one or more closed curves, and a direction of traversal is chosen on each. Then $\hat{\mathbf{n}}$ is given by the right-hand rule relative to that direction: standing at a boundary point, let $\mathbf{u}$ point along the direction of travel and $\mathbf{v}$ point into the surface, tangent to it; the positive normal is the direction of $\mathbf{u}\times\mathbf{v}$. Used at one boundary curve of a connected $S$, the rule fixes $\hat{\mathbf{n}}$ there and so, by continuity of the normal field, everywhere on $S$ — which then fixes the traversal of each of the remaining boundary curves. Arfken insists on this formulation rather than on any appeal to "outward" or "upward", precisely so that it covers a surface that curls round on itself, his own illustration being a spherical surface with a hole cut in it.

An open surface need not be simply connected, but it does have to have two sides. The Möbius strip has one, admits no continuous normal field, and carries no flux at all.
:::

:::statement[The surface element does not depend on the parametrization]{provenance=adapted src="docarmo-2016:§2-3, Prop. 1, p. 72 and §2-5, p. 100"}
Let $\mathbf{r} : D \to \mathbb{R}^3$ and $\bar{\mathbf{r}} : \bar D \to \mathbb{R}^3$ be regular patches with the same image $S$, and let $h = \mathbf{r}^{-1}\circ\bar{\mathbf{r}}$, the **change of parameters**, carry the interior of $\bar D$ onto the interior of $D$. That $h$ is a $C^1$ diffeomorphism is not an extra assumption but a theorem: for two regular patches covering the same surface it is automatic, being do Carmo's change-of-parameters proposition (§2-3, Proposition 1, p. 72), which he proves from the inverse function theorem. He states it for his smooth surfaces; the same argument applied to $C^1$ patches returns a $C^1$ diffeomorphism, which is what is used below. Then for every continuous $\varphi$ on $S$,

$$
\iint_{\bar D} \varphi\bigl(\bar{\mathbf{r}}\bigr)\,\lvert \bar{\mathbf{r}}_{\bar u} \times \bar{\mathbf{r}}_{\bar v}\rvert\, d\bar u\, d\bar v
=
\iint_{D} \varphi\bigl(\mathbf{r}\bigr)\,\lvert \mathbf{r}_{u} \times \mathbf{r}_{v}\rvert\, d u\, d v ,
$$

so $A(S)$ and $\int_S \varphi\, dS$ are properties of $S$ alone. The two unit normals agree where $\det Dh > 0$ and are opposite where $\det Dh < 0$; hence $\int_S \mathbf{F}\cdot d\mathbf{S}$ is determined by $S$ together with a choice of orientation, and changing the orientation changes its sign.
:::

:::statement[Three practical forms of the surface element]{provenance=adapted src="rhb-2006:§11.5.1, Eq. (11.10), pp. 391–392; docarmo-2016:§2-5, Exercise 5, p. 102; strauss-2008:§A.3, Thm 5 and p. 422"}
1. **Graph.** For $S : z = h(x,y)$ with $h \in C^1$ on $D \subseteq \mathbb{R}^2$, the parametrization $\mathbf{r}(x,y) = (x, y, h(x,y))$ gives $\mathbf{r}_x\times\mathbf{r}_y = (-h_x, -h_y, 1)$, hence
   $$
   d\mathbf{S} = (-h_x, -h_y, 1)\, dx\, dy, \qquad dS = \sqrt{1 + h_x^2 + h_y^2}\; dx\, dy ,
   $$
   with the upward orientation. Every regular patch is locally of this form, with respect to one of the three coordinate planes.
2. **Level set, projected onto a coordinate plane.** Let $S$ be part of $\{f = 0\}$ with $f \in C^1$ and $\nabla f \ne \mathbf{0}$ on $S$, so that $\hat{\mathbf{n}} = \pm\nabla f/\lvert \nabla f\rvert$. Suppose a piece of $S$ both projects one-to-one onto a region $R$ of the $xy$-plane **and** has $f_z \ne 0$ at each of its points, so that it is nowhere vertical. Then on that piece
   $$
   dS = \frac{dA}{\lvert \hat{\mathbf{n}}\cdot\hat{\mathbf{k}}\rvert} = \frac{\lvert \nabla f\rvert}{\lvert f_z\rvert}\, dA ,
   \qquad dA = dx\, dy ,
   $$
   both $\lvert\nabla f\rvert$ and $f_z$ being evaluated on $S$. The two conditions are independent: $f_z \ne 0$ is a hypothesis here and not a consequence of one-to-one projection (see the remark below). If a line parallel to the $z$-axis meets $S$ more than once — as happens for every closed surface — the surface must first be cut into pieces on which the projection is one-to-one, and the results added. Projections onto the other two coordinate planes are used in the same way, and a piece that is vertical over the $xy$-plane is handled by projecting it onto one of those instead.
3. **Sphere of radius $a$.** With $\mathbf{r}(\theta,\phi) = a(\sin\theta\cos\phi, \sin\theta\sin\phi, \cos\theta)$ on the closed rectangle $D = [0,\pi]\times[0,2\pi]$, which is a parameter domain of the kind the definition asks for,
   $$
   \mathbf{r}_\theta\times\mathbf{r}_\phi = a\,\sin\theta\;\mathbf{r}, \qquad dS = a^2\sin\theta\, d\theta\, d\phi, \qquad \hat{\mathbf{n}} = \hat{\mathbf{r}} ,
   $$
   the outward normal. On the interior $(0,\pi)\times(0,2\pi)$ the map is regular and injective, as required; what it does on the rest of $D$ is to collapse the edges $\theta = 0$ and $\theta = \pi$ to the two poles, where $\mathbf{r}_\theta\times\mathbf{r}_\phi = \mathbf{0}$, and to cover the meridian $\phi = 0$ twice, at $\phi = 0$ and again at $\phi = 2\pi$. Those edges are a set of zero area in $D$, so deleting them changes no integral.
:::

:::idea{provenance=original}
Both claims come down to the change-of-variables formula for double integrals. A change of parameters multiplies $\mathbf{r}_u$ and $\mathbf{r}_v$ by the Jacobian matrix of $h$, so their cross product is multiplied by $\det Dh$; the modulus of that factor is exactly what the change-of-variables formula contributes when the region of integration is pulled back. The two cancel, which is why the area element is geometric. The sign of $\det Dh$ survives in the direction of the cross product, which is why the *normal*, and so the flux, is geometric only after an orientation has been chosen.
:::

:::proof{provenance=adapted src="docarmo-2016:§2-5, p. 100"}
Write $(u,v) = h(\bar u, \bar v)$, so $\bar{\mathbf{r}} = \mathbf{r}\circ h$ on the interior of $\bar D$.

**Step 1 (how the tangent vectors transform).** By the chain rule (:ref[chain rule]{to=found.partial-derivatives-chain-rule}),

$$
\bar{\mathbf{r}}_{\bar u} = \mathbf{r}_u\,\frac{\partial u}{\partial \bar u} + \mathbf{r}_v\,\frac{\partial v}{\partial \bar u},
\qquad
\bar{\mathbf{r}}_{\bar v} = \mathbf{r}_u\,\frac{\partial u}{\partial \bar v} + \mathbf{r}_v\,\frac{\partial v}{\partial \bar v} .
$$

**Step 2 (how the cross product transforms).** Expanding the cross product of these two expressions, the two terms in $\mathbf{r}_u\times\mathbf{r}_u$ and $\mathbf{r}_v\times\mathbf{r}_v$ vanish and the remaining two combine:

$$
\bar{\mathbf{r}}_{\bar u}\times\bar{\mathbf{r}}_{\bar v}
= \Bigl(\frac{\partial u}{\partial \bar u}\frac{\partial v}{\partial \bar v} - \frac{\partial u}{\partial \bar v}\frac{\partial v}{\partial \bar u}\Bigr)\,\mathbf{r}_u\times\mathbf{r}_v
= \bigl(\det Dh\bigr)\; \mathbf{r}_u\times\mathbf{r}_v .
$$

Taking lengths, $\lvert \bar{\mathbf{r}}_{\bar u}\times\bar{\mathbf{r}}_{\bar v}\rvert = \lvert \det Dh\rvert\,\lvert \mathbf{r}_u\times\mathbf{r}_v\rvert$. Both cross products are nonzero by regularity, so this identity exhibits again what the change-of-parameters proposition already guarantees: $\det Dh$ vanishes nowhere.

**Step 3 (change variables).** The integrand on the left is therefore

$$
\varphi\bigl(\mathbf{r}(h(\bar u,\bar v))\bigr)\,\lvert \mathbf{r}_u\times\mathbf{r}_v\rvert\bigl(h(\bar u,\bar v)\bigr)\;\lvert\det Dh\rvert ,
$$

which is precisely the integrand produced by the :ref[change-of-variables formula]{to=found.change-of-variables} applied to the map $h$ and to the continuous function $\psi = (\varphi\circ\mathbf{r})\,\lvert\mathbf{r}_u\times\mathbf{r}_v\rvert$ on the interior of $D$. Since $h$ is a $C^1$ diffeomorphism between the interiors and $\psi$ is bounded on a bounded region, the formula applies and the two integrals are equal. The boundaries, being Lebesgue null in the plane, contribute nothing.

**Step 4 (normals and flux).** By Step 2 the two unit normals satisfy $\bar{\hat{\mathbf{n}}} = \operatorname{sgn}(\det Dh)\,\hat{\mathbf{n}}$. On a connected parameter domain $\det Dh$ has constant sign, since it is continuous and never zero; so the two parametrizations induce either the same normal field or the opposite one. Applying Steps 1–3 to $\varphi = \mathbf{F}\cdot\hat{\mathbf{n}}$ gives

$$
\iint_{\bar D} \mathbf{F}\cdot\bigl(\bar{\mathbf{r}}_{\bar u}\times\bar{\mathbf{r}}_{\bar v}\bigr)\, d\bar u\, d\bar v = \operatorname{sgn}(\det Dh)\iint_{D} \mathbf{F}\cdot\bigl(\mathbf{r}_{u}\times\mathbf{r}_{v}\bigr)\, du\, dv ,
$$

so the flux is well defined once the orientation is fixed, and reverses sign with it. $\square$
:::

:::method[Computing a surface integral]{provenance=adapted src="rhb-2006:§11.5.1, pp. 391–392; arfken-2013:§3.7, p. 161"}
1. **Describe the surface** and decide whether it is closed or open. If it is open, note the direction in which its perimeter is to be traversed; if closed, note which side is the outside.
2. **Choose a parametrization** $\mathbf{r}(u,v)$ on a parameter domain $D$ that covers $S$ once: spherical angles on a sphere, $(\rho,\phi)$ or $(\phi,z)$ on a cylinder, $(x,y)$ on a graph. Cut $S$ into pieces if no single patch covers it, which is unavoidable for a closed surface.
3. **Compute $\mathbf{r}_u\times\mathbf{r}_v$** once and for all. Its length gives $dS$; its direction gives $\hat{\mathbf{n}}$.
4. **Fix the sign.** Compare the direction of $\mathbf{r}_u\times\mathbf{r}_v$ with the convention of step 1 at one convenient point of the patch, and insert an overall minus sign if they disagree. Doing this at one point suffices, because the direction varies continuously.
5. **Substitute and integrate.** Express $\mathbf{F}$ or $\varphi$ in the parameters, form the double integral over $D$, and evaluate it as an iterated integral (:ref[multiple integrals]{to=found.change-of-variables}).
6. **Add the pieces.** For a cut surface, sum the contributions, each with its own sign fixed by step 4.

**How it fails.** The commonest errors are a parametrization that covers part of $S$ twice, which doubles that part's contribution; forgetting step 4, which flips the sign of a flux; and projecting a closed surface onto a coordinate plane without cutting it, which silently cancels the two halves. If $\mathbf{r}_u\times\mathbf{r}_v$ vanishes on a curve or at isolated points, those sets have zero area and may be deleted, but a parametrization whose cross product vanishes on a set of positive area is not a regular patch there at all.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and conventions that differ.**

- *Regularity, $\mathbf{r}_u\times\mathbf{r}_v \ne \mathbf{0}$.* This is what makes the tangent plane two-dimensional and the normal well defined; it is also what makes the change of parameters a diffeomorphism in Step 2. The spherical patch violates it at $\theta = 0, \pi$, where $\sin\theta = 0$, and the cone $\mathbf{r}(u,v) = (u\cos v, u\sin v, u)$ violates it at its apex $u = 0$. In both cases the bad set has zero area and is simply removed.
- *Injectivity.* Needed for $S$ to be covered once. On $(0,\pi)\times(0,4\pi)$ the spherical patch is regular everywhere but covers the sphere twice, and every integral computed from it is twice the right answer.
- *Orientability.* Steps 1–3 of the proof never mention the normal, so *areas and scalar surface integrals are defined on non-orientable surfaces too*; it is only the flux that needs a globally continuous $\hat{\mathbf{n}}$. The Möbius strip is the standard example where none exists.
- *$f_z \ne 0$ in the projection formula.* A one-to-one projection does not supply it. Take $f = z^3 - y$ on the slab $\lvert x\rvert < 1$, $\lvert z\rvert < 1$: here $\nabla f = (0, -1, 3z^2)$ never vanishes, so $S = \{y = z^3\}$ is a legitimate level surface, and $S$ projects one-to-one onto the $xy$-plane, since $y$ determines $z = y^{1/3}$. Yet $f_z = 3z^2$ vanishes on the whole line $z = 0$ of $S$, where the normal $(0,-1,0)$ is horizontal, the surface is vertical, and the displayed $dS$ has a zero denominator. What the derivation needs is $\lvert\hat{\mathbf{n}}\cdot\hat{\mathbf{k}}\rvert \ne 0$, which is $f_z \ne 0$; one-to-one projection only prevents the surface from doubling back. (This surface is in fact a graph $y = z^3$ over the $xz$-plane, so the right move for it is to project the other way, as form 2 says.)
- *The modulus in the projection formula.* Riley, Hobson and Bence write Eq. (11.10) as $dS = \lvert\nabla f\rvert\, dA/(\partial f/\partial z)$, without a modulus sign in the denominator; as they say, both quantities are evaluated on $S$. That form is correct where $\partial f/\partial z > 0$, which holds on the upper piece of a surface such as a sphere when $f$ is chosen with an outward-increasing gradient, and it is the piece they project in their example. For the lower piece $\partial f /\partial z < 0$ and the formula returns a negative $dS$; the version with $\lvert f_z\rvert$ above holds on both and is what the derivation $dS = dA/\lvert\hat{\mathbf{n}}\cdot\hat{\mathbf{k}}\rvert$ gives directly, since $dS$ and $dA$ are both areas.
- *$\sqrt{EG - F^2}$ versus $\lvert\mathbf{r}_u\times\mathbf{r}_v\rvert$.* These are equal, by the Lagrange identity. The first form is the one that survives on an abstract surface with a metric, where there is no ambient space and so no cross product, and is the one used in :ref[the first fundamental form]{to=geom.first-fundamental-form}; the second is quicker when $\mathbf{r}$ is given explicitly in $\mathbb{R}^3$.
- *Notation.* Arfken writes the vector element $d\boldsymbol{\sigma}$ and the scalar one $dA$; Riley, Hobson and Bence write $d\mathbf{S}$ and $dS$, which we follow. Nothing but the symbols differs.
:::

:::example[Area of a piece of the surface $z = xy$]{provenance=original}
Let $S$ be the part of the graph $z = xy$ lying over the closed unit disc $D = \{x^2 + y^2 \le 1\}$.

1. *Surface element.* Here $h = xy$, so $h_x = y$, $h_y = x$, and by form 1 above $dS = \sqrt{1 + x^2 + y^2}\, dx\, dy$.
2. *Change to plane polars* (:ref[change of variables]{to=found.change-of-variables}): $x^2 + y^2 = \rho^2$ and $dx\,dy = \rho\, d\rho\, d\phi$, so
   $$
   A(S) = \int_0^{2\pi}\!\!\int_0^1 \sqrt{1 + \rho^2}\;\rho\, d\rho\, d\phi = 2\pi \int_0^1 \rho\sqrt{1+\rho^2}\, d\rho .
   $$
3. *Evaluate.* With $s = 1 + \rho^2$, $ds = 2\rho\, d\rho$, the inner integral is $\tfrac12\int_1^2 \sqrt{s}\, ds = \tfrac13\bigl(2^{3/2} - 1\bigr)$, so
   $$
   A(S) = \frac{2\pi}{3}\bigl(2\sqrt{2} - 1\bigr) = 3.82945 \ \text{(5 d.p.)} .
   $$
4. *Sanity check.* The disc itself has area $\pi = 3.14159$, and the surface lies above it with slope $\lvert\nabla h\rvert = \rho \le 1$, so its area must exceed $\pi$ but not by more than the factor $\max\sqrt{1+\rho^2} = \sqrt{2}$, i.e. it lies between $3.1416$ and $4.4429$. It does.
:::

:::example[Flux through a paraboloid cap]{provenance=original}
Let $S$ be the part of the paraboloid $z = 4 - x^2 - y^2$ with $z \ge 0$, oriented so that the normal has a positive $z$-component (upward), and let

$$
\mathbf{F} = (y,\; -x,\; z) .
$$

1. *Parametrize as a graph* over the disc $D = \{x^2 + y^2 \le 4\}$: $h = 4 - x^2 - y^2$, so $h_x = -2x$, $h_y = -2y$ and
   $$
   d\mathbf{S} = (-h_x, -h_y, 1)\, dx\, dy = (2x,\; 2y,\; 1)\, dx\, dy .
   $$
   Its third component is $+1 > 0$, so this is already the required orientation and no sign change is needed (step 4 of the method).
2. *Form the integrand.* On $S$,
   $$
   \mathbf{F}\cdot(2x, 2y, 1) = 2xy - 2xy + (4 - x^2 - y^2) = 4 - x^2 - y^2 .
   $$
   The two circulating components of $\mathbf{F}$ cancel against the normal: they are tangent to the circles $x^2+y^2 = \text{const}$, which lie in $S$.
3. *Integrate in plane polars.*
   $$
   \int_S \mathbf{F}\cdot d\mathbf{S} = \int_0^{2\pi}\!\!\int_0^2 (4 - \rho^2)\,\rho\, d\rho\, d\phi = 2\pi\Bigl[2\rho^2 - \frac{\rho^4}{4}\Bigr]_0^2 = 2\pi(8 - 4) = 8\pi .
   $$
4. *Check by a second parametrization.* Using $(\rho,\phi)$ directly, $\mathbf{r} = (\rho\cos\phi, \rho\sin\phi, 4-\rho^2)$ gives $\mathbf{r}_\rho\times\mathbf{r}_\phi = (2\rho^2\cos\phi,\, 2\rho^2\sin\phi,\, \rho)$, whose third component is positive, and $\mathbf{F}\cdot(\mathbf{r}_\rho\times\mathbf{r}_\phi) = (4-\rho^2)\rho$: the same integral, as the parametrization-independence statement requires.
5. *Check the sign convention.* Reversing the orientation to point downward changes the answer to $-8\pi$. Were $S$ closed off by the disc $z = 0$, $x^2+y^2\le 4$ and read as the boundary of the enclosed solid, the upward normal on the cap would be the outward one, so $8\pi$ is the outward flux through the curved part.
:::

:::application{provenance=original}
Flux is how a conservation law is written down before it is turned into a differential equation. The mass of fluid crossing a surface per unit time is $\int_S \rho\mathbf{v}\cdot d\mathbf{S}$; the heat crossing it is $-\int_S k\nabla T\cdot d\mathbf{S}$ by Fourier's law; the electric charge enclosed is $\varepsilon_0\oint_S \mathbf{E}\cdot d\mathbf{S}$ by Gauss's law, and the magnetic flux through a circuit is $\int_S \mathbf{B}\cdot d\mathbf{S}$, whose rate of change is the induced electromotive force. In each case the orientation convention is what makes "in" and "out", or the sign of an induced current, unambiguous — which is why Arfken insists on stating the right-hand rule carefully.

Scalar surface integrals carry the quantities that do not have a direction: the total surface charge $\int_S \sigma\, dS$, the area of a membrane in a surface-tension energy, the drag integral $\int_S \tau\, dS$ over a wetted hull, the radiating area of a heat sink. The parametrization-independence proved above is what lets an engineer compute such a quantity in whatever coordinates the geometry suggests and still get the same number; and in numerical practice it is what justifies replacing a curved panel by a flat quadrilateral of the same area, the basis of boundary-element and panel methods.

The two integral theorems that follow — :ref[the divergence theorem]{to=vcalc.divergence-theorem} and :ref[Stokes' theorem]{to=vcalc.stokes-theorem} — are statements about exactly these integrals, and are the reason the conventions above have to be fixed once and used consistently.
:::
