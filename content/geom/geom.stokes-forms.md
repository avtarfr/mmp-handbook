---
id: geom.stokes-forms
title: Integration of forms and the general Stokes theorem
kind: theorem
level: core
summary: Defines the integral of an $n$-form over an oriented $n$-manifold with boundary, proves that the integral of $d\omega$ over the manifold equals the integral of $\omega$ over its boundary, and derives the fundamental theorem of calculus, Green's theorem, the classical Stokes theorem and the divergence theorem as four readings of that one identity.
prereqs: [geom.exterior-derivative, vcalc.stokes-theorem, geom.differential-forms, geom.smooth-manifolds, geom.partition-of-unity, geom.pullbacks-pushforwards, vcalc.divergence-theorem, vcalc.line-integrals, vcalc.surface-integrals, found.change-of-variables]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 15, pp. 380–387: Prop. 15.5 (a nowhere vanishing $n$-form determines a pointwise orientation) with its remark, and Exercise 15.4 (a local frame is positively or negatively oriented when its domain is connected), pp. 380–381; Prop. 15.21 (a nowhere tangent vector field orients a hypersurface), pp. 384–385; Prop. 15.24 and the name 'Stokes orientation' for the orientation induced on a boundary, p. 386; Example 15.26 (the induced orientation on $\\partial\\mathbb{H}^n$ agrees with the standard one exactly when $n$ is even), pp. 386–387. Ch. 16, pp. 400–415: the argument that functions cannot be integrated invariantly and that alternating tensors can, pp. 401–402; the definition of $\\int_D\\omega$ by erasing the wedges, p. 402; Props. 16.1 and 16.3 (behaviour under an orientation-preserving or orientation-reversing diffeomorphism), pp. 403–404; the chart definition (16.1) with Prop. 16.4, p. 404, and the partition-of-unity definition (16.2) with Prop. 16.5, p. 405; Thm 16.11 (Stokes's theorem) and its proof, pp. 411–414; Example 16.12 (the fundamental theorem as the case $n = 1$) and Cor. 16.13, p. 414. Ch. 16, pp. 422–427: Lemma 16.30 and Thm 16.32 (the divergence theorem on a Riemannian manifold), pp. 423–424; Thm 16.34 (Stokes's theorem for surface integrals) with the diagram (16.15), pp. 426–427"
    pages: "380-387, 400-415, 422-427"
    role: the definition of the integral and of the induced boundary orientation, the statement of the theorem and the proof route through the half-space model, and the two Riemannian corollaries named in the vector-calculus units
  - work: hassani-2013
    loc: "§28.6, pp. 897–899: the integral of an $n$-form in $\\mathbb{R}^n$ and the appearance of the signed Jacobian, p. 897; orientation-preserving and orientation-reversing changes of coordinates and Def. 28.6.1 (orientability as the existence of a nowhere vanishing $n$-form), p. 898; the chartwise definition (28.47), p. 898; Thm 28.6.2 ($\\int_M d\\omega = 0$ when $\\partial M = \\varnothing$) with its proof, and Thm 28.6.3 (the version with boundary), p. 899"
    pages: "897-899"
    role: the definition of orientability by a nowhere vanishing top form, used in the definition here, and the compact-support computation that is the engine of the proof
  - work: arfken-2013
    loc: "§4.7, pp. 244–248: integrals of $1$- and $2$-forms and the signed Jacobian (4.103)–(4.105), pp. 244–245; the statement (4.106) with its three hypotheses and the slab argument (4.107)–(4.108), pp. 245–246; Example 4.7.1 (Green's theorem), pp. 246–247, Example 4.7.2 (the classical Stokes theorem), p. 247, and Example 4.7.3 (Gauss's theorem), p. 248"
    pages: "244-248"
    role: the physicist's statement of the theorem, the remark that orientation must be supplied by the user rather than by the formalism, and the three classical specialisations collected in the second statement
---

:::definition[Orientation, boundary, and the integral of a form]{provenance=adapted src="hassani-2013:Def. 28.6.1 and (28.47), p. 898; lee-2013:pp. 402–405, (16.1)–(16.2); lee-2013:Prop. 15.24, p. 386"}
Throughout, $M$ is a smooth $n$-manifold with or without boundary, $n \ge 1$ (:ref[smooth manifolds]{to=geom.smooth-manifolds}), modelled on the closed half-space $\mathbb{H}^{n} = \{x \in \mathbb{R}^{n} : x^{n} \ge 0\}$. Its **boundary** $\partial M$ is the set of points carried to $\partial\mathbb{H}^n = \{x^n = 0\}$ by some chart; it is an embedded $(n-1)$-dimensional submanifold without boundary.

**Orientation.** $M$ is **orientable** if it carries a nowhere vanishing $n$-form. Two such forms $\mu$ and $\mu'$ satisfy $\mu' = h\mu$ for a nowhere vanishing continuous function $h$, and calling them equivalent when $h > 0$ is an equivalence relation; an **orientation** is a choice of one of its classes, and a representative $\mu$ is an **orientation form**. If $M$ is **connected** then $h$, being continuous and never zero, keeps one sign, so there are exactly two classes and exactly two orientations. On a manifold with $c$ connected components the sign of $h$ may be chosen on each component separately, so there are $2^{c}$. That case is not academic here: the boundary of an annulus is two circles and the boundary of a spherical shell is two spheres, and orienting such a $\partial M$ means orienting each piece. :cite[Hassani]{work=hassani-2013 loc="the paragraph after Def. 28.6.1, p. 898"} states the two-class count without the connectedness hypothesis. :cite[Lee]{work=lee-2013 loc="Prop. 15.5 with its remark, p. 381, and Exercise 15.4, p. 381"} instead defines an orientation as a continuous pointwise choice, and notes that it is connectedness of the domain that forces a frame to be positively or negatively oriented throughout. The count above follows Lee, and so does this unit wherever the two accounts differ. A chart $(U,\varphi)$ is **positively oriented** if $dx^1\wedge\cdots\wedge dx^n$ is a positive multiple of $\mu$ on $U$, and negatively oriented if it is a negative multiple.

**Interior multiplication and the induced orientation.** For a vector $v$ and a $k$-form $\mu$, let $\iota_v\mu$ be the $(k-1)$-form $(\iota_v\mu)(w_1,\dots,w_{k-1}) = \mu(v,w_1,\dots,w_{k-1})$: the first slot is filled in. Let $N$ be a smooth vector field along $\partial M$ that points out of $M$ at every boundary point. Then the pullback of $\iota_N\mu$ to $\partial M$ is a nowhere vanishing $(n-1)$-form there, and the orientation it defines does not depend on which outward-pointing $N$ is used. It is the **induced** or **Stokes orientation** on $\partial M$. Concretely: a basis $(e_1,\dots,e_{n-1})$ of $T_p\partial M$ is positively oriented exactly when $(N_p, e_1,\dots,e_{n-1})$ is a positively oriented basis of $T_pM$ — *outward vector first*.

**The integral.** Let $\omega$ be a continuous, compactly supported $n$-form.

1. *On $\mathbb{R}^n$ or $\mathbb{H}^n$.* Any such $\omega$ on an open set $U$ is $f\,dx^1\wedge\cdots\wedge dx^n$ for one continuous compactly supported $f$, and we set $\int_U \omega = \int_U f\,dV$, the ordinary multiple integral: *erase the wedges*.
2. *In one chart.* If $\operatorname{supp}\omega$ lies in the domain of a single chart $(U,\varphi)$, set
   $$
   \int_M \omega \;=\; \pm \int_{\varphi(U)} \bigl(\varphi^{-1}\bigr)^{*}\omega ,
   $$
   with the plus sign for a positively oriented chart and the minus sign for a negatively oriented one.
3. *In general.* Cover $\operatorname{supp}\omega$ by finitely many such chart domains $U_i$, take a subordinate smooth partition of unity $\{\psi_i\}$ (:ref[partitions of unity]{to=geom.partition-of-unity}), and set $\int_M\omega = \sum_i \int_M \psi_i\omega$.

Steps 2 and 3 are independent of the choices made, because a transition map is a diffeomorphism and the change-of-variables formula of :ref[multiple integrals]{to=found.change-of-variables} produces $\lvert\det DG\rvert$ while the pullback of a top-degree form produces $\det DG$ — the two agree precisely when the transition preserves orientation, which is what positively oriented charts guarantee. For $n = 0$ the integral of a function over an oriented $0$-manifold is the sum of its values with the sign of each point. Finally, if $S \subseteq M$ is an oriented $k$-dimensional submanifold with inclusion $\iota_S$, and $\omega$ is a $k$-form on $M$, then $\int_S \omega$ means $\int_S \iota_S^{*}\omega$.
:::

:::statement[The general Stokes theorem]{provenance=adapted src="lee-2013:Thm 16.11, p. 411; hassani-2013:Thms 28.6.2 and 28.6.3, p. 899; arfken-2013:(4.106), p. 245"}
Take any oriented smooth $n$-dimensional manifold with boundary $M$, where $n \ge 1$, and give $\partial M$ the induced orientation. Suppose $\omega$ is a smooth $(n-1)$-form whose **support is a compact subset** of $M$. Then

$$
\int_{M} d\omega \;=\; \int_{\partial M} \omega ,
$$

the right-hand side being the integral over $\partial M$ of the pullback $\iota_{\partial M}^{*}\omega$. An empty boundary makes that side zero, so

$$
\int_{M} d\omega = 0 \qquad\text{whenever } \partial M = \varnothing .
$$

In particular, on a compact oriented manifold without boundary no exact top-degree form has non-zero integral, so a nowhere vanishing orientation form on such a manifold is never exact.
:::

:::statement[The classical theorems, as four readings of one identity]{provenance=adapted src="arfken-2013:Examples 4.7.1–4.7.3, pp. 246–248; lee-2013:Example 16.12, p. 414; lee-2013:Thm 16.32, p. 424 and Thm 16.34, p. 427"}
Use the three identifications of :ref[the exterior derivative]{to=geom.exterior-derivative}: $\mathbf{A}^{\flat} = A_x dx + A_y dy + A_z dz$, $\beta(\mathbf{A}) = A_x\,dy\wedge dz + A_y\,dz\wedge dx + A_z\,dx\wedge dy$ and $\sigma(g) = g\,dx\wedge dy\wedge dz$, for which $d(\mathbf{A}^{\flat}) = \beta(\nabla\times\mathbf{A})$ and $d(\beta(\mathbf{A})) = \sigma(\nabla\cdot\mathbf{A})$. Then the theorem above specialises as follows.

1. **$n = 1$, the fundamental theorem of calculus.** $M = [a,b]$ with its standard orientation, $\omega = f$ a $0$-form: $\partial M$ is the two-point set $\{a,b\}$ with $b$ positive and $a$ negative, and
   $$
   \int_a^b \frac{df}{dx}\,dx = f(b) - f(a) .
   $$
   More generally, for a smooth curve $\gamma$ from $p$ to $q$ in a manifold, $\int_\gamma df = f(q) - f(p)$: the fundamental theorem for line integrals of :ref[line integrals and conservative fields]{to=vcalc.line-integrals}.
2. **$n = 2$ in the plane, Green's theorem.** $D \subseteq \mathbb{R}^{2}$ a compact region with smooth boundary, oriented by $dx\wedge dy$, and $\omega = P\,dx + Q\,dy$:
   $$
   \oint_{\partial D} \bigl(P\,dx + Q\,dy\bigr) = \iint_{D}\Bigl(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\Bigr)dx\,dy ,
   $$
   with $\partial D$ traversed with $D$ on the left.
3. **$n = 2$ in space, the classical Stokes theorem.** $S \subseteq \mathbb{R}^{3}$ a compact oriented surface with boundary, with unit normal $\hat{\mathbf{n}}$, and $\omega = \mathbf{A}^{\flat}$:
   $$
   \oint_{\partial S} \mathbf{A}\cdot d\mathbf{r} = \iint_{S} (\nabla\times\mathbf{A})\cdot d\mathbf{S} ,
   $$
   $\partial S$ carrying the right-hand traversal relative to $\hat{\mathbf{n}}$. This is :ref[Stokes' theorem]{to=vcalc.stokes-theorem}.
4. **$n = 3$, the divergence theorem.** $V \subseteq \mathbb{R}^{3}$ a compact region with smooth boundary, oriented by $dx\wedge dy\wedge dz$, and $\omega = \beta(\mathbf{A})$:
   $$
   \oint_{\partial V} \mathbf{A}\cdot d\mathbf{S} = \iiint_{V} (\nabla\cdot\mathbf{A})\,dV ,
   $$
   with the outward normal on $\partial V$. This is :ref[the divergence theorem]{to=vcalc.divergence-theorem}.

In each case the orientation convention stated in the vector-calculus unit is exactly the induced orientation of the definition above; that is the content of the sign bookkeeping in the proof.
:::

:::idea{provenance=original}
Both sides of the identity are additive in $\omega$, and a partition of unity splits any $\omega$ into pieces each living inside one chart. So it is enough to prove it for a form supported in a single chart, and then — since $d$ commutes with pullback, and the integral was *defined* by pulling back to a chart — for a form supported in the model half-space $\mathbb{H}^n$ itself.

There the whole theorem is the fundamental theorem of calculus applied once, in one variable. An $(n-1)$-form on $\mathbb{H}^n$ is a sum of $n$ terms, each missing one differential; taking $d$ differentiates the $i$th coefficient in the $i$th direction. Integrating that derivative along the $i$th axis leaves only boundary values. For the $n-1$ directions parallel to the boundary the support is compact and those boundary values are zero; only the direction *transverse* to the boundary survives, and it leaves an integral over the face $x^n = 0$. That is $\int_{\partial M}\omega$, because the pullback of $dx^n$ to the face vanishes and so kills every other term of $\omega$ in exactly the same pattern.

All the subtlety is in one sign, and it is the same sign twice. The orientation that $\partial\mathbb{H}^n$ inherits from $\mathbb{H}^n$ differs from the standard orientation of $\mathbb{R}^{n-1}$ by $(-1)^{n}$, so the two agree exactly when $n$ is even. On the other side, the surviving term in $d\omega$ carries a factor $(-1)^{n-1}$ from moving $dx^{n}$ into place and a further factor $-1$ from the fundamental theorem on $[0,\infty)$, whose product is again $(-1)^{n}$. The same factor stands in front of both sides and cancels, which is why the theorem has no sign in it.
:::

:::proof[The general Stokes theorem]{provenance=adapted src="lee-2013:Thm 16.11, pp. 411–414; hassani-2013:Thm 28.6.2, p. 899"}
**Step 1: reduction to one chart.** Cover the compact set $\operatorname{supp}\omega$ with finitely many chart domains, each of its charts oriented positively or negatively, and pick a smooth partition of unity subordinate to that cover $\{\psi_i\}_{i=1}^{m}$, so that $\sum_i\psi_i \equiv 1$ on a neighbourhood of $\operatorname{supp}\omega$. Each $\psi_i\omega$ is a smooth $(n-1)$-form compactly supported in one chart domain, and $\omega = \sum_i \psi_i\omega$. Applying the antiderivation rule of :ref[the exterior derivative]{to=geom.exterior-derivative} with the $0$-form $\psi_i$ on the left,
$$
\sum_{i} d(\psi_i\omega) = \sum_i \bigl(d\psi_i\wedge\omega + \psi_i\,d\omega\bigr)
= d\Bigl(\sum_i\psi_i\Bigr)\wedge\omega + d\omega = d\omega ,
$$
**because $\sum_i\psi_i$ is constant where $\omega \ne 0$**, so its differential vanishes there. Both sides of the theorem are additive, so it suffices to prove it when $\omega$ is compactly supported in a single chart.

**Step 2: reduction to the model.** Let $(U,\varphi)$ be a positively oriented chart containing $\operatorname{supp}\omega$. By the definition of the integral and the naturality of $d$,
$$
\int_M d\omega = \int_{\varphi(U)}\bigl(\varphi^{-1}\bigr)^{*}(d\omega) = \int_{\varphi(U)} d\Bigl[\bigl(\varphi^{-1}\bigr)^{*}\omega\Bigr],
$$
so the left-hand side is computed from the form $\widehat\omega = (\varphi^{-1})^{*}\omega$ on an open subset of $\mathbb{H}^n$ (or of $\mathbb{R}^n$ for an interior chart). On the other side, $\varphi$ carries $U\cap\partial M$ into $\partial\mathbb{H}^n$ and, since its differential sends outward-pointing vectors to outward-pointing vectors, it does so preserving the induced orientations. Hence $\int_{\partial M}\omega = \int_{\partial\mathbb{H}^n}\widehat\omega$. For a negatively oriented chart both sides acquire the same extra minus sign. It therefore suffices to prove the identity for a compactly supported smooth $(n-1)$-form on $\mathbb{H}^n$, and for one on $\mathbb{R}^n$ with both sides read as zero on the right.

**Step 3: the half-space computation.** Write $\widehat\omega = \sum_{i=1}^{n} \omega_i\,dx^{1}\wedge\cdots\wedge\widehat{dx^{i}}\wedge\cdots\wedge dx^{n}$, the hat marking the omitted factor, with every $\omega_i$ supported in the box $A = [-R,R]^{n-1}\times[0,R]$ for some $R$. Differentiating, only the term $\partial_i\omega_i\,dx^{i}$ survives in each summand, because any other $dx^{j}$ repeats a factor already present; moving $dx^{i}$ into its place costs $i-1$ transpositions, so
$$
d\widehat\omega = \sum_{i=1}^{n} (-1)^{i-1}\,\frac{\partial\omega_i}{\partial x^{i}}\; dx^{1}\wedge\cdots\wedge dx^{n} .
$$
Erase the wedges and integrate each term in its own variable first, which is legitimate because the integrand is continuous on the compact box.

For $i < n$ the variable $x^{i}$ runs over the whole of $[-R,R]$, and the fundamental theorem of calculus gives $\int_{-R}^{R}\partial_i\omega_i\,dx^{i} = \omega_i\big|_{x^{i}=-R}^{\,x^{i}=R} = 0$, **because the support was enclosed strictly inside the box**. Those $n-1$ terms contribute nothing.

For $i = n$ the variable runs over $[0,R]$ only, and the same theorem gives $\int_0^{R}\partial_n\omega_n\,dx^{n} = \omega_n(x',R) - \omega_n(x',0) = -\,\omega_n(x',0)$, writing $x' = (x^1,\dots,x^{n-1})$. Hence
$$
\int_{\mathbb{H}^n} d\widehat\omega = (-1)^{n-1}\cdot(-1)\int_{\mathbb{R}^{n-1}} \omega_n(x',0)\,dx^{1}\cdots dx^{n-1}
= (-1)^{n}\int_{\mathbb{R}^{n-1}} \omega_n(x',0)\,dx^{1}\cdots dx^{n-1}.
$$

**Step 4: the boundary side, and the sign.** On $\partial\mathbb{H}^n$ the function $x^{n}$ is identically zero, so the pullback of $dx^{n}$ to the boundary is zero. Every summand of $\widehat\omega$ except the $i=n$ one contains the factor $dx^{n}$ and therefore pulls back to zero, leaving
$$
\iota^{*}\widehat\omega = \omega_n(x',0)\,dx^{1}\wedge\cdots\wedge dx^{n-1} .
$$
It remains to say with which sign this is integrated. The field $-\partial/\partial x^{n}$ points out of $\mathbb{H}^n$, so by the *outward vector first* rule the standard frame $(\partial_1,\dots,\partial_{n-1})$ of $\partial\mathbb{H}^n$ is positively oriented exactly when $(-\partial_n,\partial_1,\dots,\partial_{n-1})$ is positively oriented for $\mathbb{R}^n$. Moving $\partial_n$ from the front to the back is $n-1$ transpositions, so that frame has the sign $(-1)\cdot(-1)^{n-1} = (-1)^{n}$ relative to $(\partial_1,\dots,\partial_n)$. Therefore
$$
\int_{\partial\mathbb{H}^n}\widehat\omega = (-1)^{n}\int_{\mathbb{R}^{n-1}}\omega_n(x',0)\,dx^{1}\cdots dx^{n-1},
$$
which is precisely the value found in step 3. For an interior chart the model is $\mathbb{R}^n$, every variable runs over the full $[-R,R]$, all $n$ terms vanish as the $i<n$ terms did, and the boundary side is zero because the chart does not meet $\partial M$. $\square$
:::

:::proof[The four classical cases]{provenance=adapted src="arfken-2013:Examples 4.7.1–4.7.3, pp. 246–248; lee-2013:Example 16.12, p. 414"}
Each case is the theorem applied to a particular $\omega$, plus a dictionary entry saying that the integral of that form is the classical integral. The dictionary is three short computations with pullbacks.

**(i) Along a curve.** Let $\gamma : [a,b]\to\mathbb{R}^{3}$ be smooth. Pulling back a $1$-form, $\gamma^{*}(\mathbf{A}^{\flat}) = \bigl[\mathbf{A}(\gamma(t))\cdot\gamma'(t)\bigr]dt$, since $\gamma^{*}(dx) = (dx^1/dt)\,dt$ and likewise for $dy, dz$. So $\int_{\gamma}\mathbf{A}^{\flat}$ is the line integral $\int\mathbf{A}\cdot d\mathbf{r}$ of :ref[line integrals]{to=vcalc.line-integrals}.

**(ii) Over a surface patch.** Let $\mathbf{r} : D\to\mathbb{R}^{3}$, $(u,v)\mapsto\mathbf{r}(u,v)$, be a regular injective patch. The pullback $\mathbf{r}^{*}\bigl(\beta(\mathbf{A})\bigr)$ is a $2$-form on the two-dimensional parameter domain, so it is determined by its value on the coordinate frame $(\partial_u,\partial_v)$ there; by the definition of the pullback that value is $\beta(\mathbf{A})$ evaluated on the pushed-forward vectors $d\mathbf{r}(\partial_u) = \mathbf{r}_u$ and $d\mathbf{r}(\partial_v) = \mathbf{r}_v$, which live in $\mathbb{R}^{3}$. By the determinant formula for wedges of $1$-forms,
$$
(dy\wedge dz)(\mathbf{r}_u,\mathbf{r}_v) = y_u z_v - y_v z_u = (\mathbf{r}_u\times\mathbf{r}_v)_x ,
$$
with the two cyclic partners giving the $y$ and $z$ components. Hence
$$
\mathbf{r}^{*}\bigl(\beta(\mathbf{A})\bigr) = \bigl[\mathbf{A}(\mathbf{r})\cdot(\mathbf{r}_u\times\mathbf{r}_v)\bigr]\,du\wedge dv ,
$$
and $\int_S\beta(\mathbf{A})$ is the flux $\iint_S\mathbf{A}\cdot d\mathbf{S}$ of :ref[surface integrals and flux]{to=vcalc.surface-integrals}, for the orientation in which $\mathbf{r}_u\times\mathbf{r}_v$ is the positive normal.

**(iii) Over a region of $\mathbb{R}^3$.** By erasing the wedges, $\int_V \sigma(g) = \iiint_V g\,dV$ when $V$ carries the standard orientation.

**Case 1.** For $n=1$ and $M=[a,b]$, $d f = f'(x)\,dx$ and the left side is $\int_a^b f'$. The outward vector at $b$ is $+\partial_x$ and at $a$ is $-\partial_x$, so the induced orientation of the $0$-manifold $\{a,b\}$ assigns $+1$ to $b$ and $-1$ to $a$, and the right side is $f(b)-f(a)$. For a curve $\gamma$ in a manifold, apply this on $[a,b]$ to $\gamma^{*}f = f\circ\gamma$ and use naturality of $d$ to move the pullback past the derivative.

**Case 2.** With $\omega = P\,dx + Q\,dy$ on $D$, the method of :ref[the exterior derivative]{to=geom.exterior-derivative} gives $d\omega = (\partial_x Q - \partial_y P)\,dx\wedge dy$, and both integrals are ordinary double and line integrals after erasing the wedges and using (i). For the orientation: at a boundary point let $\nu$ point out of $D$ and $t$ be the positive tangent; *outward first* says $(dx\wedge dy)(\nu,t) > 0$, which means $t$ is $\nu$ rotated by $+90^{\circ}$ — the traversal with $D$ on the left.

**Case 3.** With $\omega = \mathbf{A}^{\flat}$ on $S$, $d\omega = \beta(\nabla\times\mathbf{A})$, so by (ii) the left-hand side $\int_S d\omega$ of the theorem is the flux of the curl and by (i) the right-hand side $\int_{\partial S}\omega$ is the circulation. For the orientation: at a point of $\partial S$ let $\nu$ be tangent to $S$ and pointing out of it and $t$ the positive tangent to $\partial S$. The orientation form of $S$ is $\beta(\hat{\mathbf{n}})$ restricted to $S$, whose value on $(\nu,t)$ is $\hat{\mathbf{n}}\cdot(\nu\times t)$; *outward first* demands this be positive, so $\nu\times t$ points along $\hat{\mathbf{n}}$. That is the right-hand rule exactly as fixed in :ref[Stokes' theorem]{to=vcalc.stokes-theorem}, where $\nu$ is the vector "tangent to $S$ and pointing into it" with the sign reversed and $t$ is the direction of travel.

**Case 4.** With $\omega = \beta(\mathbf{A})$ on $V$, $d\omega = \sigma(\nabla\cdot\mathbf{A})$, so by (iii) the left-hand side is $\iiint_V\nabla\cdot\mathbf{A}\,dV$. On the boundary, let $\hat{\mathbf{n}}$ be the outward unit normal and $(e_1,e_2)$ a positively oriented basis of the tangent plane; *outward first* says $\det[\hat{\mathbf{n}}\;e_1\;e_2] > 0$, that is, $e_1\times e_2$ is a positive multiple of $\hat{\mathbf{n}}$. By (ii) the right-hand side is therefore the flux taken with the **outward** normal, which is the convention of :ref[the divergence theorem]{to=vcalc.divergence-theorem}. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Compact support is not decoration.** It is used twice in step 3: to put the support inside a box at all, and to kill the $n-1$ terms whose differentiation runs along a direction parallel to the boundary, where there is no face to collect the boundary values. Drop it and the theorem fails outright. Take $M = (0,1)$, a $1$-manifold with empty boundary, and $f(x) = x$. Then $\int_M df = \int_0^1 dx = 1$, while the boundary integral is $0$ because there is no boundary. The form $f$ is smooth and bounded but not compactly supported in $M$: the endpoints are missing from the manifold, and the mass of $df$ escapes through them. On a *compact* $M$ every form is compactly supported, which is why the hypothesis is invisible in the classical theorems.
- **Orientability.** Without a nowhere vanishing $n$-form the left-hand side is not even defined, since the chart definition cannot be patched: on the Möbius band two charts disagree on the sign of $dx\wedge dy$ on part of their overlap, and no choice of signs in step 2 of the definition is consistent. Densities, which transform with $\lvert\det DG\rvert$ instead of $\det DG$, can be integrated on any manifold, but they have no exterior derivative, so there is no Stokes theorem for them in this form.
- **The induced orientation carries the whole sign.** The theorem as stated has no sign only because $\partial M$ is given the Stokes orientation. With the opposite choice every instance reads $\int_M d\omega = -\int_{\partial M}\omega$. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 247"} put this bluntly for the user: the formalism fixes the *relative* sign of the two sides and nothing more, and matching the result to a physical convention — anticlockwise, outward, right-handed — is the reader's responsibility. This is also why a sign error in a flux is the commonest failure in applications.
- **The sources differ on simple connectivity, and we follow Lee.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 245"} state the theorem for a *simply connected* region $R$ of a $p$-dimensional manifold, spelling out that this means one with no holes. :cite[Lee]{work=lee-2013 loc="Thm 16.11, p. 411"} and :cite[Hassani]{work=hassani-2013 loc="Thm 28.6.3, p. 899"} ask only for an oriented manifold with boundary and a compactly supported form, with no condition on its topology. The statement above follows Lee and Hassani, and nothing in the proof uses simple connectivity: step 1 needs a finite cover and a partition of unity, which any compact support supplies, and steps 3 and 4 are local. The weaker hypothesis matters in practice, since an annulus, a solid torus and a spherical shell are all admissible, their boundaries having two components; the same difference between the sources is logged for :ref[the divergence theorem]{to=vcalc.divergence-theorem}, which is case 4 above.
- **Smooth boundary, and corners.** $M$ must be a manifold with boundary, so a cube or a solid cylinder is formally excluded: at an edge no chart is a diffeomorphism onto an open subset of $\mathbb{H}^n$. The theorem nevertheless holds for them, by an extension to manifolds with corners, or by exhausting the region with smooth ones. Arfken fills the layer next to the boundary with thin parallelepipeds and lets their thickness shrink, calling the result an indication of the theorem's validity rather than a proof; the cells he uses have corners, so what the argument needs in order to become one is exactly the extension just mentioned.
- **Only one derivative.** Nothing in the proof differentiates twice, so $\omega$ of class $C^1$ suffices; smoothness is assumed only for uniformity with the rest of the chapter. By contrast $d\circ d = 0$, which the proof never uses, needs two derivatives.
- **Partitions of unity, and hence smoothness.** Step 1 is where the $C^{\infty}$ structure is spent, exactly as in the uniqueness half of :ref[the exterior derivative]{to=geom.exterior-derivative}. It also quietly needs the cover to be finite, which compact support supplies.
- **Not a Riemannian statement.** No metric appears anywhere above: $\int_M\omega$ needs an orientation and nothing else. Metrics enter only when one insists on integrating *functions* rather than forms, which is what the classical $dS$ and $dV$ do. :cite[Lee]{work=lee-2013 loc="Thms 16.32 and 16.34, pp. 424 and 427"} re-derives the divergence theorem and the classical Stokes theorem on an arbitrary oriented Riemannian $3$-manifold in exactly that way, by converting $\langle \mathbf{A},\hat{\mathbf{n}}\rangle\,dA$ back into the pullback of $\beta(\mathbf{A})$; those are the general statements that :ref[the divergence theorem]{to=vcalc.divergence-theorem} and :ref[Stokes' theorem]{to=vcalc.stokes-theorem} point to.
:::

:::method[Using the theorem]{provenance=original}
1. **Fix the manifold and its dimension $n$.** The form to be integrated over $M$ must have degree $n$; the form on the boundary, degree $n-1$. If the degrees do not match, the set-up is wrong.
2. **Choose the orientation of $M$** by naming an orientation form (or, in $\mathbb{R}^n$, a normal or a handedness), then read off the boundary orientation by the *outward vector first* rule. Do not guess it from a picture.
3. **Decide which side to compute.** Going from $\int_{\partial M}\omega$ to $\int_M d\omega$ pays off when $d\omega$ is simpler than $\omega$ — most dramatically when $d\omega$ is a constant multiple of the volume form, so that the boundary integral is a volume. Going the other way pays off when $\omega$ vanishes on most of $\partial M$.
4. **Pull back and erase the wedges.** Parametrise each piece, substitute, sort into increasing order, and read the result as an ordinary multiple integral. A parametrisation that reverses orientation contributes with a minus sign.
5. **Exploit the fact that only $\partial M$ matters.** Suppose $\omega$ is closed and $S_1, S_2$ have the same oriented boundary. If the closed surface $S_1 \cup (-S_2)$ obtained by gluing $S_1$ to $S_2$ with reversed orientation is itself the boundary $\partial W$ of a region $W$ on which $\omega$ is defined and closed, then $\int_{S_1}\omega - \int_{S_2}\omega = \int_{\partial W}\omega = \int_W d\omega = 0$, and the awkward surface may be replaced by a convenient one with the same rim. The bounding hypothesis is doing real work and has to be checked: in $\mathbb{R}^{3}\setminus\{0\}$ the upper and lower hemispheres of the unit sphere share the equator as oriented boundary, but the closed $2$-form $\beta(\mathbf{r}/\lvert\mathbf{r}\rvert^{3})$ integrates to $2\pi$ over one and $-2\pi$ over the other, because the sphere they form bounds only a region containing the origin, where the form is not defined.
6. **Check.** The answer must be independent of the parametrisation; and if $\omega = d\eta$ is itself exact and $\partial M = \varnothing$, the answer must be $0$.
:::

:::example[Two sides of one identity, in three dimensions and in four]{provenance=original}
**(a) A surface with a rim.** Let $S$ be the part of the paraboloid $z = 4 - x^{2} - y^{2}$ with $z\ge 0$, oriented by the upward normal, so that $\partial S$ is the circle $x^{2}+y^{2} = 4$ in the plane $z = 0$. Take
$$
\omega = -y^{3}\,dx + x^{3}\,dy + z^{2}\,dz .
$$

*The manifold side.* Differentiating, $d(-y^{3})\wedge dx = -3y^{2}\,dy\wedge dx = 3y^{2}\,dx\wedge dy$, $d(x^{3})\wedge dy = 3x^{2}\,dx\wedge dy$, and $d(z^{2})\wedge dz = 2z\,dz\wedge dz = 0$, so
$$
d\omega = 3\bigl(x^{2}+y^{2}\bigr)\,dx\wedge dy .
$$
Parametrise $S$ as the graph $G(x,y) = (x,\,y,\,4-x^{2}-y^{2})$ over the disc $D$ of radius $2$. Then $G^{*}(dx\wedge dy) = dx\wedge dy$, and $G_x\times G_y = (2x,2y,1)$ points upward, so $G$ is orientation-preserving. In polar coordinates,
$$
\int_S d\omega = \iint_D 3\bigl(x^{2}+y^{2}\bigr)\,dx\,dy
= 3\int_0^{2\pi}\!\!\int_0^{2} r^{2}\cdot r\,dr\,d\theta = 3\cdot 2\pi\cdot\frac{2^{4}}{4} = 24\pi .
$$

*The boundary side.* The outward direction within $S$ at the rim points away from the axis, and *outward first* then makes the positive traversal anticlockwise seen from above. Parametrise it by $t\mapsto(2\cos t,\,2\sin t,\,0)$, $t\in[0,2\pi]$. Since $z \equiv 0$ there, the $dz$ term pulls back to zero, and
$$
\oint_{\partial S}\omega = \int_0^{2\pi}\Bigl[-8\sin^{3}t\cdot(-2\sin t) + 8\cos^{3}t\cdot 2\cos t\Bigr]dt
= 16\int_0^{2\pi}\bigl(\sin^{4}t + \cos^{4}t\bigr)dt .
$$
Using $\sin^{4}+\cos^{4} = 1 - \tfrac12\sin^{2}2t$ and $\int_0^{2\pi}\sin^{2}2t\,dt = \pi$, this is $16\bigl(2\pi - \tfrac{\pi}{2}\bigr) = 24\pi$. The two sides agree:
$$
\int_S d\omega = \oint_{\partial S}\omega = \boxed{24\pi} \approx 75.3982 .
$$
Note that $d\omega$ is closed, being exact, and is defined on all of $\mathbb{R}^{3}$. So any other compact embedded surface $S'$ with the same oriented rim gives $24\pi$ too: $S$ together with $S'$ reversed is a closed surface in $\mathbb{R}^{3}$, every closed surface in $\mathbb{R}^{3}$ bounds a region, and step 5 of the method applies. For the particular family of caps $z = c(4-x^{2}-y^{2})$ one can see it with no topology at all, since $d\omega$ has no $dy\wedge dz$ or $dz\wedge dx$ part and each such cap is a graph over the same disc, so the pullback of $d\omega$ does not involve $c$.

**(b) The same identity where there is no vector calculus.** In $\mathbb{R}^{4}$ with coordinates $(x^1,x^2,x^3,x^4)$, let $B$ be the closed unit ball and $S^{3} = \partial B$ the unit $3$-sphere, with the induced orientation. Take the $3$-form
$$
\omega = \tfrac14\Bigl(x^{1}\,dx^{2}\wedge dx^{3}\wedge dx^{4} - x^{2}\,dx^{1}\wedge dx^{3}\wedge dx^{4} + x^{3}\,dx^{1}\wedge dx^{2}\wedge dx^{4} - x^{4}\,dx^{1}\wedge dx^{2}\wedge dx^{3}\Bigr).
$$
Each term differentiates to a single $4$-form: in the $i$th one, $dx^{i}$ must be moved past $i-1$ factors, contributing $(-1)^{i-1}$, which cancels the sign $(-1)^{i-1}$ already written. All four terms therefore give $+dx^{1}\wedge dx^{2}\wedge dx^{3}\wedge dx^{4}$, and with the factor $\tfrac14$,
$$
d\omega = dx^{1}\wedge dx^{2}\wedge dx^{3}\wedge dx^{4} .
$$
By the theorem, $\int_{S^{3}}\omega = \int_{B}d\omega = \operatorname{vol}_4(B)$. Slicing the ball by $x^{4} = t$ gives a $3$-ball of radius $\sqrt{1-t^{2}}$, so
$$
\operatorname{vol}_4(B) = \int_{-1}^{1}\frac{4\pi}{3}\bigl(1-t^{2}\bigr)^{3/2}dt
= \frac{4\pi}{3}\int_{-\pi/2}^{\pi/2}\cos^{4}\theta\,d\theta = \frac{4\pi}{3}\cdot\frac{3\pi}{8} = \frac{\pi^{2}}{2}.
$$
Hence
$$
\int_{S^{3}}\omega = \frac{\pi^{2}}{2} \approx 4.93480 .
$$
*An independent check.* Writing $N = \sum_i x^{i}\,\partial/\partial x^{i}$ for the radial field, the bracket above is exactly $\iota_N(dx^{1}\wedge\cdots\wedge dx^{4})$. On the unit sphere $N$ is the outward *unit* normal, so by the definition of the induced orientation the pullback of that bracket is the Riemannian area form of $S^{3}$. Thus $\int_{S^3}\omega = \tfrac14\lvert S^{3}\rvert = \tfrac14\cdot 2\pi^{2} = \pi^{2}/2$, as found. The pattern is general: $\tfrac1n\,\iota_N(dx^{1}\wedge\cdots\wedge dx^{n})$ integrates over the unit sphere of $\mathbb{R}^n$ to the volume of the ball, which for $n=3$ is the familiar statement that $\tfrac13\oint \mathbf{r}\cdot d\mathbf{S}$ is the enclosed volume.
:::

:::application{provenance=original}
**Conservation laws in any dimension.** A current in $n$ spacetime dimensions is an $(n-1)$-form $J$, and $dJ = 0$ is the continuity equation. Integrating over the slab of spacetime between two time slices, the theorem says that the charge $\int J$ on the later slice equals that on the earlier one, provided nothing leaves through the sides. That single sentence replaces the separate statements of conservation of charge, of energy and of probability, and it does so without a metric: conservation is a statement about a boundary, not about lengths. The same reading gives Gauss's law — the flux of $\star F$ through a closed surface counts the enclosed charge — and makes the consistency condition $d\star J = 0$ of :ref[the Hodge star and Maxwell's equations]{to=geom.hodge-star-maxwell} automatic.

**Why magnetic flux through a closed surface vanishes.** $\mathbf{B}$ corresponds to a closed $2$-form, and a closed surface has empty boundary, so the flux is $\int_{\partial V}\beta(\mathbf{B}) = \int_V d\beta(\mathbf{B}) = 0$. Conversely, the magnetic flux through two surfaces with the same rim agrees, which is why the flux in Faraday's law can be attributed to the *circuit* rather than to a particular spanning surface.

**Topology from integrals.** If $\omega$ is closed and $M$ compact without boundary, $\int_M\omega$ is unchanged when $\omega$ is altered by an exact form, since $\int_M d\eta = 0$. So integration pairs cohomology classes with manifolds, and a non-zero value proves that $\omega$ is not exact. That is the machinery behind :ref[closed and exact forms]{to=geom.poincare-lemma} and the de Rham theorem, behind the quantisation of magnetic charge (the flux of $F$ through a sphere surrounding a monopole is a topological invariant), and behind the Aharonov–Bohm effect, where the measurable phase is the period $\oint A$ of a locally exact but globally inexact $1$-form.

**Curvature integrals.** The Gauss–Bonnet theorem of :ref[the Gauss–Bonnet theorem]{to=geom.gauss-bonnet} — total Gaussian curvature plus total geodesic curvature of the boundary equals $2\pi\chi$ — is proved by writing the curvature as $d$ of a connection form in a local frame and applying the theorem above. The index theorems of mathematical physics are descendants of the same move.

**Mechanics.** In the phase space of :ref[symplectic manifolds]{to=geom.symplectic-manifolds}, the Poincaré invariant $\oint_{\gamma}\sum_i p_i\,dq^{i}$ equals $\int_{\Sigma}\sum_i dp_i\wedge dq^{i}$ over any surface with rim $\gamma$, so its conservation under the Hamiltonian flow of :ref[the canonical equations]{to=var.canonical-equations} is a statement about the $2$-form rather than about any coordinates. Iterating the wedge gives Liouville's theorem.

**Numerics.** Finite-volume and discrete-exterior-calculus schemes store a $k$-form as its integrals over the $k$-cells of a mesh and define the discrete $d$ as the signed sum over cell boundaries. The theorem then holds *exactly* at machine precision, because it has become the statement that each interior face is counted twice with opposite signs. Conservation of mass or charge in such a solver is therefore structural rather than approximate, which is why these schemes are preferred for long-time integration of conservation laws.
:::
