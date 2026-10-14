---
id: geom.exterior-derivative
title: The exterior derivative
kind: definition
level: core
summary: Defines the operator $d$ that raises the degree of a differential form by one, characterises it as the unique antiderivation extending the differential of a function and squaring to zero, proves that it commutes with every pullback, and reads off that gradient, curl and divergence in $\mathbb{R}^3$ are its three instances.
prereqs: [geom.differential-forms, vcalc.divergence-curl, vcalc.gradient, geom.smooth-manifolds, geom.tangent-vectors, geom.pullbacks-pushforwards, geom.partition-of-unity]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 14, pp. 362–371: the motivation from closed $1$-forms and the coordinate definition (14.18)–(14.20), pp. 362–363; Prop. 14.23 (linearity, the antiderivation rule, $d\\circ d = 0$ and naturality on open subsets of $\\mathbb{R}^n$) with its proof, pp. 364–365; Thm 14.24 (existence and uniqueness on a manifold) and the bump-function locality argument, pp. 365–366; the description of $d$ as an antiderivation of degree $+1$ whose square is zero, p. 366; Prop. 14.26 (naturality on manifolds), pp. 366–367; closed and exact forms, p. 367; Example 14.27 and the commuting diagram (14.27) relating $d$ to grad, curl and div, pp. 367–368; Prop. 14.29 (the invariant formula for a $1$-form) with its proof, p. 369"
    pages: "362-371"
    role: the definition by the coordinate formula, the existence-and-uniqueness characterisation and its proof route, naturality under pullback, and the identification of $d$ with the three classical operators
  - work: hassani-2013
    loc: "§28.5, Thm 28.5.3 (the five defining properties of $d$) and Example 28.5.4 (the curl as $d$ on a $1$-form), p. 889; Example 28.5.5 and Box 28.5.6 (the homogeneous Maxwell equations as $dF = 0$), pp. 889–890; Thm 28.5.11 (the invariant formula in all degrees), p. 891"
    pages: "889-891"
    role: the same operator presented axiomatically rather than built in coordinates, the general invariant formula quoted in the remark, and the relativistic application
  - work: arfken-2013
    loc: "§4.6, pp. 238–241: the axioms (4.85) for $d$, p. 239; Example 4.6.1, the check that the sign $(-1)^p$ is forced and the discussion of $d(d\\omega) = 0$, pp. 239–240; Eqs. (4.86)–(4.90), the exterior derivatives of a $0$-form, a $1$-form and a $2$-form in $\\mathbb{R}^3$ in the cyclic basis, p. 240; Eqs. (4.91)–(4.92), the two vanishing identities, p. 241"
    pages: "238-241"
    role: the axiomatic route a physicist meets first, the cyclic-basis form of the $\mathbb{R}^3$ dictionary used in the second statement, and the derivation of $\nabla\times\nabla f = 0$ and $\nabla\cdot(\nabla\times\mathbf{A}) = 0$ from $d\circ d = 0$
---

:::definition[The exterior derivative]{provenance=adapted src="lee-2013:(14.19)–(14.20), p. 363 and (14.22), p. 365; hassani-2013:Thm 28.5.3, p. 889"}
Let $U$ be an open subset of $\mathbb{R}^n$, or of the closed half-space $\mathbb{H}^n = \{x\in\mathbb{R}^n : x^n \ge 0\}$ — the second case is needed because the charts of a manifold with boundary land there — and let $\omega \in \Omega^k(U)$ be a smooth $k$-form, written in the increasing-multi-index notation of :ref[differential forms]{to=geom.differential-forms} as $\omega = {\sum_I}'\,\omega_I\,dx^{I}$. Its **exterior derivative** is the $(k+1)$-form obtained by differentiating each coefficient and wedging the result onto the basis form it belonged to:

$$
d\omega \;=\; {\sum_I}'\, d\omega_I \wedge dx^{I}
\;=\; {\sum_I}' \sum_{i=1}^{n} \frac{\partial \omega_I}{\partial x^{i}}\, dx^{i}\wedge dx^{I} .
$$

Here $d\omega_I$ is the ordinary differential of the function $\omega_I$. For $k = 0$ the formula reads $df = (\partial f/\partial x^{i})\,dx^{i}$, so $d$ on functions is nothing new; the content of the definition is that the same rule makes sense in every degree.

Now let $M$ be a smooth $n$-manifold, with or without boundary (:ref[smooth manifolds]{to=geom.smooth-manifolds}). For $\omega \in \Omega^k(M)$ and a smooth chart $\varphi : U \to \widehat{U} \subseteq \mathbb{R}^n$, define $d\omega$ on $U$ by carrying the form to $\widehat{U}$, differentiating there, and carrying the answer back:

$$
d\omega \;=\; \varphi^{*}\Bigl( d\bigl[(\varphi^{-1})^{*}\omega\bigr]\Bigr) .
$$

Part 5 of the statement below — naturality, the fact that $d$ commutes with every pullback — is what makes this independent of the chart: a transition map is a diffeomorphism between open subsets of $\mathbb{R}^n$ or of $\mathbb{H}^n$, and naturality applied to it converts one chart's recipe into the other's. So the pieces agree on overlaps and define a single $(k+1)$-form on $M$. In the coordinates of any chart, $d\omega$ is then given by the displayed formula with $x^i$ the coordinate functions.

A form $\omega$ is **closed** if $d\omega = 0$, and **exact** if $\omega = d\eta$ for some smooth form $\eta$ of one degree lower. Part 3 below says every exact form is closed; whether the converse holds is a question about the shape of $M$, and is the subject of :ref[closed and exact forms]{to=geom.poincare-lemma}.
:::

:::statement[What $d$ is, and the fact that there is only one]{provenance=adapted src="lee-2013:Prop. 14.23, p. 364; lee-2013:Thm 14.24, p. 365; lee-2013:Prop. 14.26, p. 366; lee-2013:Prop. 14.29, p. 369; hassani-2013:Thm 28.5.3, p. 889"}
Let $M$ be a smooth manifold with or without boundary. There is exactly one family of operators $d : \Omega^k(M) \to \Omega^{k+1}(M)$, one for each $k \ge 0$, with the following four properties.

1. **Linearity.** $d(a\omega + b\eta) = a\,d\omega + b\,d\eta$ for real constants $a, b$ and forms of equal degree.
2. **Antiderivation.** For $\omega \in \Omega^{k}(M)$ and $\eta \in \Omega^{l}(M)$,
   $$
   d(\omega\wedge\eta) \;=\; d\omega\wedge\eta \;+\; (-1)^{k}\,\omega\wedge d\eta .
   $$
   The sign depends on the degree of the **left** factor only.
3. **The square vanishes.** $d(d\omega) = 0$ for every form $\omega$.
4. **Functions.** For $f \in \Omega^{0}(M) = C^{\infty}(M)$, $df$ is the usual differential, $df(X) = Xf$ for every smooth vector field $X$.

That family is the one built chart by chart in the definition. It has two further properties, neither of which has to be assumed:

5. **Naturality.** If $F : M \to N$ is smooth then $F^{*}(d\omega) = d(F^{*}\omega)$ for every $\omega \in \Omega^{k}(N)$: it does not matter whether one differentiates before or after a change of variables.
6. **Invariant formula in degree one.** For $\omega \in \Omega^{1}(M)$ and smooth vector fields $X, Y$,
   $$
   d\omega(X,Y) \;=\; X\bigl(\omega(Y)\bigr) \;-\; Y\bigl(\omega(X)\bigr) \;-\; \omega\bigl([X,Y]\bigr),
   $$
   with $[X,Y]$ the Lie bracket of :ref[tangent vectors and vector fields]{to=geom.tangent-vectors}. No coordinates appear on either side.
:::

:::statement[Gradient, curl and divergence are the same operator]{provenance=adapted src="arfken-2013:(4.86)–(4.92), pp. 240–241; lee-2013:Example 14.27 and diagram (14.27), pp. 367–368"}
Let $V \subseteq \mathbb{R}^{3}$ be open, with Cartesian coordinates $(x,y,z)$. Attach to a smooth vector field $\mathbf{A} = (A_x, A_y, A_z)$ on $V$ its **$1$-form** and its **$2$-form**,

$$
\mathbf{A}^{\flat} \;=\; A_x\,dx + A_y\,dy + A_z\,dz,
\qquad
\beta(\mathbf{A}) \;=\; A_x\,dy\wedge dz + A_y\,dz\wedge dx + A_z\,dx\wedge dy ,
$$

and to a smooth function $g$ its **$3$-form** $\sigma(g) = g\,dx\wedge dy\wedge dz$. Each of $\flat$, $\beta$ and $\sigma$ is a bijection onto $\Omega^{1}(V)$, $\Omega^{2}(V)$, $\Omega^{3}(V)$ respectively, because $\binom{3}{1} = \binom{3}{2} = 3$ and $\binom{3}{3} = 1$. Then for every smooth $f$ and $\mathbf{A}$ on $V$:

$$
df \;=\; (\nabla f)^{\flat},
\qquad
d\bigl(\mathbf{A}^{\flat}\bigr) \;=\; \beta(\nabla\times\mathbf{A}),
\qquad
d\bigl(\beta(\mathbf{A})\bigr) \;=\; \sigma(\nabla\cdot\mathbf{A}) ,
$$

with $\nabla f$, $\nabla\times\mathbf{A}$ and $\nabla\cdot\mathbf{A}$ as defined in :ref[the gradient]{to=vcalc.gradient} and :ref[divergence, curl and the Laplacian]{to=vcalc.divergence-curl}. Consequently the two identities

$$
\nabla\times(\nabla f) = \mathbf{0},
\qquad
\nabla\cdot(\nabla\times\mathbf{A}) = 0
$$

of :ref[vector identities]{to=vcalc.vector-identities} are the two instances of $d\circ d = 0$ available in three dimensions.
:::

:::idea{provenance=original}
In a chart there is only one sensible thing to do to $\omega = {\sum_I}'\,\omega_I\,dx^I$: differentiate the coefficients, since the basis forms $dx^I$ are constant. Wedging $d\omega_I$ on the **left** is forced if the Leibniz rule is to hold with a sign that depends on degree, and that same placement makes the second derivative appear as $\partial_i\partial_j\omega_I\,dx^i\wedge dx^j$ — symmetric coefficients contracted against an antisymmetric basis, hence zero. So $d\circ d = 0$ is exactly the equality of mixed partial derivatives, wearing different clothes.

The one thing a coordinate definition owes us is independence of the coordinates. That is not checked by comparing two charts directly; it follows from a stronger statement that is easier to prove, namely that $d$ commutes with the pullback by *any* smooth map, because a change of chart is the pullback by a transition map. Uniqueness then costs nothing: properties 1–4 force the coordinate formula at every point, once one knows that $d\omega$ near a point depends only on $\omega$ near that point, which a bump function supplies.

The $\mathbb{R}^{3}$ dictionary is then pure bookkeeping. A vector field has three components; so does a $1$-form and so does a $2$-form in three variables. Write $\mathbf{A}$ as a $1$-form and apply $d$, and the three coefficients that come out are the three components of the curl; write it as a $2$-form instead and the single coefficient that comes out is the divergence.
:::

:::proof[Properties 1–5]{provenance=adapted src="lee-2013:Prop. 14.23 and Thm 14.24, pp. 364–366; lee-2013:Prop. 14.26, pp. 366–367; lee-2013:Prop. 14.29, p. 369"}
**Step 1: a convenience, on non-increasing indices.** In $\mathbb{R}^n$, $d(u\,dx^{I}) = du\wedge dx^{I}$ holds for *every* multi-index $I$ of length $k$, not only the increasing ones. If $I$ repeats an index then $dx^I = 0$ and both sides vanish. Otherwise let $\tau$ be the permutation sorting $I$ into an increasing $J$; then $dx^{I} = (\operatorname{sgn}\tau)\,dx^{J}$, and multiplying the definition applied to $u\,dx^{J}$ by $\operatorname{sgn}\tau$ gives the claim. Linearity (property 1) is immediate from the definition, since each $\omega \mapsto \partial\omega_I/\partial x^i$ is linear.

**Step 2: the antiderivation rule in $\mathbb{R}^n$ (property 2).** By linearity it is enough to take $\omega = u\,dx^{I}$ of degree $k$ and $\eta = v\,dx^{J}$ of degree $l$. The coefficients are $0$-forms, so they commute past everything and $\omega\wedge\eta = uv\,dx^{I}\wedge dx^{J}$. By step 1 and the product rule for the differential of a function,
$$
d(\omega\wedge\eta) = d(uv)\wedge dx^{I}\wedge dx^{J}
= (v\,du + u\,dv)\wedge dx^{I}\wedge dx^{J} .
$$
The first piece is $du\wedge dx^{I}\wedge v\,dx^{J} = d\omega\wedge\eta$. In the second, $dv$ has degree $1$ and $dx^{I}$ degree $k$, so moving $dv$ to the right of $dx^{I}$ costs $(-1)^{k}$ by the anticommutation rule of :ref[differential forms]{to=geom.differential-forms}, leaving $(-1)^{k}\,u\,dx^{I}\wedge dv\wedge dx^{J} = (-1)^{k}\,\omega\wedge d\eta$. **It is the degree of the left factor that the sign records**, because that is how many $1$-forms $dv$ must cross.

**Step 3: $d\circ d = 0$ in $\mathbb{R}^n$ (property 3).** First for a function $u$. Applying the definition twice,
$$
d(du) = d\Bigl(\frac{\partial u}{\partial x^{j}}dx^{j}\Bigr)
= \frac{\partial^{2} u}{\partial x^{i}\partial x^{j}}\,dx^{i}\wedge dx^{j}
= \sum_{i<j}\Bigl(\frac{\partial^{2} u}{\partial x^{i}\partial x^{j}} - \frac{\partial^{2} u}{\partial x^{j}\partial x^{i}}\Bigr) dx^{i}\wedge dx^{j} = 0,
$$
where the middle sum was split into $i<j$ and $i>j$ and the names of the summation indices swapped in the second half, and the bracket vanishes **because $u$ is $C^{2}$**, so its mixed partials agree. For a general $\omega = {\sum_I}'\,\omega_I\,dx^{I}$, apply $d$ to $d\omega = {\sum_I}'\,d\omega_I\wedge dx^{I}$ using step 2 with left factor $d\omega_I$ of degree $1$:
$$
d(d\omega) = {\sum_I}'\Bigl[ d(d\omega_I)\wedge dx^{I} - d\omega_I \wedge d\bigl(dx^{I}\bigr)\Bigr] .
$$
The first term is zero by the case just done. The second is zero because $dx^{I} = dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ is a wedge of differentials of the coordinate functions: repeated use of step 2 writes $d(dx^{I})$ as a sum of terms each containing a factor $d(dx^{i_a}) = 0$.

**Step 4: naturality on open sets (property 5, Euclidean case).** First, for a smooth map $F$ and a smooth function $u$ on the target, $F^{*}(du) = d(u\circ F)$: both are $1$-forms, and on a tangent vector $v$ at $p$,
$$
(F^{*}du)(v) = du_{F(p)}\bigl(dF_p v\bigr) = (dF_p v)u = v(u\circ F) = d(u\circ F)(v),
$$
by the definition of the pushforward in :ref[pushforwards, pullbacks and immersions]{to=geom.pullbacks-pushforwards}. Now take $\omega = u\,dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ on an open subset of the target. Since pullback preserves wedge products,
$$
F^{*}(d\omega) = F^{*}\bigl(du\wedge dx^{i_1}\wedge\cdots\wedge dx^{i_k}\bigr)
= d(u\circ F)\wedge dF^{i_1}\wedge\cdots\wedge dF^{i_k},
$$
writing $F^{j}$ for the $j$th component of $F$. On the other side, $F^{*}\omega = (u\circ F)\,dF^{i_1}\wedge\cdots\wedge dF^{i_k}$, and applying step 2 to this product and then step 3 to each $d(dF^{i_a})$ leaves only
$$
d(F^{*}\omega) = d(u\circ F)\wedge dF^{i_1}\wedge\cdots\wedge dF^{i_k} .
$$
The two agree, and the general case follows by linearity.

**Step 5: the definition on a manifold is unambiguous.** Let $(U,\varphi)$ and $(V,\psi)$ be charts meeting at $p$. On $\varphi(U\cap V)$ the transition map $\psi\circ\varphi^{-1}$ is a diffeomorphism between open subsets of $\mathbb{R}^n$ (or of the half-space, at a boundary point), so step 4 applies to it. Pulling the $\psi$-recipe back by that transition map turns it into the $\varphi$-recipe, using $(\psi\circ\varphi^{-1})^{*}\circ(\psi^{-1})^{*} = (\varphi^{-1})^{*}$ from the functoriality of pullback. Hence the two charts assign the same $(k+1)$-form near $p$, and properties 1–4 transfer from $\mathbb{R}^n$ to $M$ because pullback by a diffeomorphism respects sums, wedge products and degrees. Property 5 on manifolds follows by writing $F$ in charts at $p$ and at $F(p)$ and applying the Euclidean case to its coordinate representative.

**Step 6: uniqueness.** Suppose $D$ is any family of operators with properties 1–4. First, $D$ is **local**: if two forms $\omega_1,\omega_2$ agree on an open set $W$, then $D\omega_1 = D\omega_2$ on $W$. Indeed, put $\theta = \omega_1 - \omega_2$ and fix $p \in W$. Choose a smooth bump function $\chi$ that equals $1$ near $p$ and vanishes outside $W$ (:ref[partitions of unity]{to=geom.partition-of-unity}). Then $\chi\theta$ is identically zero, so $0 = D(\chi\theta) = d\chi\wedge\theta + \chi\,D\theta$ by properties 2 and 4 with $\chi$ a $0$-form. Evaluating at $p$, where $\chi \equiv 1$ on a neighbourhood and hence $d\chi_p = 0$ and $\chi(p) = 1$, gives $D\theta|_p = 0$.

Now take any $\omega$ and any chart $(U,x^i)$ around $p$. Using bump functions again, replace the locally defined functions $\omega_I$ and $x^i$ by globally defined smooth ones agreeing with them near $p$; locality says this does not change $D\omega$ at $p$. Expanding $\omega = {\sum_I}'\,\omega_I\,dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ and applying properties 1, 2 and 3, every term in which $D$ lands on a factor $dx^{i_a} = D x^{i_a}$ dies, and property 4 identifies $D\omega_I$ with $d\omega_I$. What is left is exactly the coordinate formula of the definition. So $D\omega = d\omega$ at $p$, and $p$ was arbitrary.

**Step 7: the invariant formula (property 6).** Both sides are additive in $\omega$ and local in $\omega$: the left-hand side because the coordinate formula computes $d\omega$ at $p$ from the values of $\omega$ near $p$ alone, the right-hand side because if $\omega$ vanishes on a neighbourhood of $p$ then so do $\omega(X)$, $\omega(Y)$ and $\omega([X,Y])$ there. Fix $p$ and a chart $(U,x^{i})$ around it. Exactly as in step 6, a bump function equal to $1$ near $p$ and supported in $U$ replaces the chart-defined functions $\omega_i$ and $x^{i}$ by globally defined smooth functions agreeing with them near $p$, and locality says this changes neither side at $p$. After that replacement $\omega = \sum_i \omega_i\,dx^{i}$ is a finite sum of globally defined terms of the shape $u\,dv$ with $u,v$ smooth functions, so by additivity it suffices to check $\omega = u\,dv$. On the left, $d(u\,dv) = du\wedge dv$ by the definition, and the determinant formula for a wedge of two $1$-forms gives
$$
(du\wedge dv)(X,Y) = du(X)\,dv(Y) - du(Y)\,dv(X) = (Xu)(Yv) - (Yu)(Xv).
$$
On the right, using $\omega(Y) = u\,(Yv)$ and the product rule for the action of a vector field on a function,
$$
X\bigl(u\,Yv\bigr) - Y\bigl(u\,Xv\bigr) - u\,[X,Y]v
= (Xu)(Yv) + u\,XYv - (Yu)(Xv) - u\,YXv - u\bigl(XYv - YXv\bigr),
$$
and the four terms carrying a factor $u$ cancel in pairs, leaving $(Xu)(Yv) - (Yu)(Xv)$. $\square$
:::

:::proof[The dictionary in $\mathbb{R}^{3}$]{provenance=adapted src="arfken-2013:(4.86)–(4.92), pp. 240–241"}
**Degree zero.** $df = \partial_x f\,dx + \partial_y f\,dy + \partial_z f\,dz$ is the definition of $d$ on a function and the definition of $\nabla f$ side by side, so $df = (\nabla f)^{\flat}$.

**Degree one.** Apply $d$ to $\mathbf{A}^{\flat}$ and expand each differential:
$$
d\bigl(\mathbf{A}^{\flat}\bigr) = dA_x\wedge dx + dA_y\wedge dy + dA_z\wedge dz .
$$
In $dA_x\wedge dx$ the term $\partial_x A_x\,dx\wedge dx$ dies, leaving $\partial_y A_x\,dy\wedge dx + \partial_z A_x\,dz\wedge dx$; similarly for the other two. Sorting the six surviving products into the cyclic basis $dy\wedge dz$, $dz\wedge dx$, $dx\wedge dy$ — which costs a sign exactly when the pair is in the reversed cyclic order — collects them as
$$
d\bigl(\mathbf{A}^{\flat}\bigr) = (\partial_y A_z - \partial_z A_y)\,dy\wedge dz + (\partial_z A_x - \partial_x A_z)\,dz\wedge dx + (\partial_x A_y - \partial_y A_x)\,dx\wedge dy ,
$$
whose three coefficients are the three components of $\nabla\times\mathbf{A}$. That is $\beta(\nabla\times\mathbf{A})$.

**Degree two.** In $d(\beta(\mathbf{A}))$ every term is a $3$-form, so only one basis element survives in each: of the three summands of $dA_x\wedge dy\wedge dz$ only $\partial_x A_x\,dx\wedge dy\wedge dz$ has no repeated differential, and likewise $dA_y\wedge dz\wedge dx$ contributes $\partial_y A_y\,dy\wedge dz\wedge dx$ and $dA_z\wedge dx\wedge dy$ contributes $\partial_z A_z\,dz\wedge dx\wedge dy$. Both $dy\wedge dz\wedge dx$ and $dz\wedge dx\wedge dy$ equal $dx\wedge dy\wedge dz$, since each is a cyclic shift, that is a product of two transpositions. Hence
$$
d\bigl(\beta(\mathbf{A})\bigr) = \bigl(\partial_x A_x + \partial_y A_y + \partial_z A_z\bigr)\,dx\wedge dy\wedge dz = \sigma(\nabla\cdot\mathbf{A}) .
$$

**The two identities.** Take $\mathbf{A} = \nabla f$. Then $\mathbf{A}^{\flat} = df$, so $\beta(\nabla\times\nabla f) = d(df) = 0$; since $\beta$ is injective, $\nabla\times\nabla f = \mathbf{0}$. Take instead any $\mathbf{A}$ and set $\mathbf{B} = \nabla\times\mathbf{A}$, so that $\beta(\mathbf{B}) = d(\mathbf{A}^{\flat})$. Then $\sigma(\nabla\cdot\mathbf{B}) = d(\beta(\mathbf{B})) = d(d(\mathbf{A}^{\flat})) = 0$, and $\sigma$ is injective, so $\nabla\cdot(\nabla\times\mathbf{A}) = 0$. Both identities need $f$ and $\mathbf{A}$ to be $C^{2}$, which is where step 3 above used the symmetry of mixed partials. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Two derivatives, not one.** The only analytic input anywhere is the equality of mixed second partial derivatives, used once, in step 3. It is what makes $d\circ d = 0$, and through that it is what makes the whole theory of closed and exact forms, and both classical identities above, work. For a $C^{1}$ but not $C^{2}$ coefficient the expression $d(d\omega)$ need not even be defined; for functions whose mixed partials exist but are discontinuous and unequal, the two orders of differentiation genuinely disagree, and so would the two ways of computing $d(df)$.
- **Smoothness of the map, in naturality.** Step 4 differentiates $u\circ F$ and the components $F^{j}$, so $F$ must be differentiable; no injectivity, surjectivity or equality of dimensions is needed, which is why $d$ transfers along maps that collapse or fold. This generosity is exactly what step 5 cashes in: chart overlaps are a special case.
- **Bump functions, in the uniqueness proof.** Step 6 is the one place that needs a smooth function equal to $1$ near a point and vanishing outside a given open set, and step 7 reuses it. Such functions exist because the manifold is smooth in the $C^{\infty}$ sense; in the real-analytic category there are no cutoffs at all, since a real-analytic function on a connected manifold that vanishes on a non-empty open subset vanishes identically. What that costs is this route to uniqueness, not uniqueness itself. On $\mathbb{R}^{n}$ with its real-analytic structure the coordinate functions $x^{i}$ and the coefficients $\omega_I$ are already defined globally, so nothing has to be cut off and properties 1–4 force the coordinate formula directly. So the dependence on bump functions is a feature of this proof, not of the theorem.
- **The sign cannot be dropped.** Properties 1, 3 and 4 with a *signless* Leibniz rule $D(\alpha\wedge\eta) = D\alpha\wedge\eta + \alpha\wedge D\eta$ are already contradictory, before any coordinate formula is invoked. Take the $2$-form $\theta = y\,dx\wedge dz$ in $\mathbb{R}^{3}$ and group it in the two available ways. Note first that $D(dx) = D(Dx) = 0$ and likewise $D(dz) = 0$, by properties 3 and 4. Grouping as $\theta = (y\,dx)\wedge dz$ gives $D\theta = D(y\,dx)\wedge dz = (dy\wedge dx)\wedge dz = -\,dx\wedge dy\wedge dz$; grouping as $\theta = dx\wedge(y\,dz)$ gives $D\theta = dx\wedge D(y\,dz) = dx\wedge dy\wedge dz$. The same form receives two opposite values. With the factor $(-1)^{k}$ in place both groupings give $-\,dx\wedge dy\wedge dz$, which is also what the coordinate definition gives for $d(y\,dx\wedge dz) = dy\wedge dx\wedge dz$. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Example 4.6.1, p. 239"} check the sign differently, by tracking $dx^{\mu}$ through the $p$ differentials of the left factor.
- **Four properties or five.** :cite[Lee]{work=lee-2013 loc="Thm 14.24, p. 365"} characterises $d$ on a whole manifold by properties 1–4 and *derives* naturality from the coordinate construction, which is the route taken above. :cite[Hassani]{work=hassani-2013 loc="Thm 28.5.3, p. 889"} instead states existence and uniqueness on a neighbourhood of each point and lists five properties, taking naturality as the fifth *axiom*. Neither account is contained in the other — a local uniqueness statement with naturality assumed does not by itself say that four properties suffice globally — so the claim above that properties 5 and 6 "need not be assumed" is Lee's, and it is Lee that the statement and proof follow.
- **Degree matters, not dimension.** Nothing above is special to three dimensions except the second statement, which uses $\binom{3}{1} = \binom{3}{2}$ to disguise a $2$-form as a vector field. In $\mathbb{R}^{n}$ the gradient and the divergence still have form counterparts, but the curl does not: $d$ on $1$-forms produces a $2$-form with $\binom{n}{2}$ components, which is a vector field only when $n = 3$. Turning a $2$-form back into a vector field in general needs the extra structure of :ref[the Hodge star]{to=geom.hodge-star-maxwell}.
- **Invariant formulas in higher degree.** The coordinate-free formula of property 6 generalises. :cite[Hassani]{work=hassani-2013 loc="Thm 28.5.11, p. 891"} gives, for a $p$-form $\omega$ and vector fields $X_1,\dots,X_{p+1}$,
  $$
  d\omega(X_1,\dots,X_{p+1}) = \sum_{i}(-1)^{i+1}X_i\,\omega\bigl(\dots \widehat{X_i}\dots\bigr)
  + \sum_{i<j}(-1)^{i+j}\omega\bigl([X_i,X_j],\dots \widehat{X_i}\dots \widehat{X_j}\dots\bigr),
  $$
  the hats marking omitted arguments; :cite[Lee]{work=lee-2013 loc="Prop. 14.32, p. 370"} states and proves the same identity. We have proved only the case $p = 1$, which is the one used in practice.
:::

:::method[Computing $d\omega$]{provenance=original}
1. **Write $\omega$ with its coefficients on the left**, as a sum of terms $\omega_I\,dx^{I}$ with $I$ increasing. Anything else is sorted first, as in the method of :ref[differential forms]{to=geom.differential-forms}.
2. **Differentiate each coefficient and wedge on the left**: replace $\omega_I\,dx^{I}$ by $d\omega_I\wedge dx^{I}$, where $d\omega_I = \sum_i (\partial\omega_I/\partial x^{i})\,dx^{i}$. Do not differentiate the basis forms; $d(dx^{I}) = 0$.
3. **Discard every product with a repeated differential**, then sort what remains back into increasing order, tracking signs.
4. **Check the degree**: $d$ raises it by exactly one, so $d\omega = 0$ automatically if $\omega$ is a top-degree form on an $n$-manifold.
5. **Check $d(d\omega) = 0$** on the answer. This catches sign errors in step 3 more reliably than re-reading the algebra.
6. **In a non-Cartesian chart**, apply the same recipe to the coordinate expression of $\omega$ in that chart. No connection coefficients or scale factors appear: $d$ needs no metric, which is why its formula is the same in every coordinate system, unlike the curl formulas of :ref[orthogonal curvilinear coordinates]{to=vcalc.curvilinear-coordinates}.
:::

:::example[A $1$-form in $\mathbb{R}^{3}$, differentiated and tested twice]{provenance=original}
Take on $\mathbb{R}^{3}$ the smooth $1$-form
$$
\omega \;=\; x y^{2}\,dx \;+\; y z^{3}\,dy \;+\; z x^{2}\,dz .
$$

**Step 1: differentiate.** Following the method, $d\omega = d(xy^{2})\wedge dx + d(yz^{3})\wedge dy + d(zx^{2})\wedge dz$. Expanding each differential and dropping repeats,
$$
d(xy^{2})\wedge dx = 2xy\,dy\wedge dx, \qquad
d(yz^{3})\wedge dy = 3yz^{2}\,dz\wedge dy, \qquad
d(zx^{2})\wedge dz = 2xz\,dx\wedge dz .
$$
Sorting each into the cyclic basis costs one sign apiece:
$$
d\omega \;=\; -3yz^{2}\,dy\wedge dz \;-\; 2xz\,dz\wedge dx \;-\; 2xy\,dx\wedge dy .
$$

**Step 2: check against the curl.** The vector field is $\mathbf{A} = (xy^{2},\,yz^{3},\,zx^{2})$, and
$$
\nabla\times\mathbf{A} = \bigl(\partial_y(zx^{2}) - \partial_z(yz^{3}),\ \partial_z(xy^{2}) - \partial_x(zx^{2}),\ \partial_x(yz^{3}) - \partial_y(xy^{2})\bigr)
= \bigl(-3yz^{2},\,-2xz,\,-2xy\bigr),
$$
which are the three coefficients just found, in the cyclic order. The second statement is confirmed on this example.

**Step 3: evaluate on a pair of vectors.** At $p = (1,2,3)$ the coefficients are $-3\cdot 2\cdot 9 = -54$, $-2\cdot 1\cdot 3 = -6$ and $-2\cdot 1 \cdot 2 = -4$, so
$$
d\omega|_{p} = -54\,dy\wedge dz - 6\,dz\wedge dx - 4\,dx\wedge dy .
$$
Feed it the tangent vectors $u = (1,0,-1)$ and $v = (2,1,1)$. Each basis $2$-form returns a $2\times 2$ determinant of the corresponding components:
$$
(dy\wedge dz)(u,v) = \begin{vmatrix} 0 & 1\\ -1 & 1\end{vmatrix} = 1,
\quad
(dz\wedge dx)(u,v) = \begin{vmatrix} -1 & 1\\ 1 & 2\end{vmatrix} = -3,
\quad
(dx\wedge dy)(u,v) = \begin{vmatrix} 1 & 2\\ 0 & 1\end{vmatrix} = 1 .
$$
Hence
$$
d\omega|_{p}(u,v) = (-54)(1) + (-6)(-3) + (-4)(1) = \boxed{-40} .
$$
The three determinants are the components of $u\times v = (1,-3,1)$, so this is the scalar $(\nabla\times\mathbf{A})\cdot(u\times v)$ at $p$ — the circulation density of $\mathbf{A}$ through the parallelogram spanned by $u$ and $v$, which is what a $2$-form measures.

**Step 4: test the invariant formula.** Take the vector fields $X = \partial_x$ and $Y = x\,\partial_y$, whose bracket is $[X,Y] = (\partial_x x)\partial_y = \partial_y$. The right-hand side of property 6 is
$$
X\bigl(x\,yz^{3}\bigr) - Y\bigl(xy^{2}\bigr) - \omega(\partial_y)
= yz^{3} - x\cdot 2xy - yz^{3} = -2x^{2}y .
$$
The left-hand side: of the three basis $2$-forms, only $dx\wedge dy$ survives on the pair $(1,0,0)$, $(0,x,0)$, with value $x$, so $d\omega(X,Y) = -2xy\cdot x = -2x^{2}y$. The two agree identically, and at $p = (1,2,3)$ both equal $-4$. Had the bracket term been dropped, the right-hand side would have been $-2x^{2}y + yz^{3}$, which is not even a tensor in $X$ and $Y$.
:::

:::application{provenance=original}
**Thermodynamics tells closed from exact.** On a state space with coordinates $(V,T)$ an increment of heat is a $1$-form $\delta Q = C_V\,dT + \ell\,dV$, not the differential of a state function. The question of whether a function $Q$ with $\delta Q = dQ$ exists is the question of whether $\delta Q$ is exact, and $d(\delta Q) = (\partial_V C_V - \partial_T \ell)\,dV\wedge dT$ is the computable obstruction: if it is non-zero, no such $Q$ can exist, because exact forms are closed. Dividing by $T$ can make the obstruction vanish, and the resulting exact form is $dS$. The whole of the second law's bookkeeping is the distinction between a closed $1$-form and an exact one, which is :ref[closed and exact forms]{to=geom.poincare-lemma}.

**Maxwell's homogeneous equations are one line.** Assemble the electric and magnetic fields into the spacetime $2$-form $F = -E_x\,dt\wedge dx - E_y\,dt\wedge dy - E_z\,dt\wedge dz + B_x\,dy\wedge dz + B_y\,dz\wedge dx + B_z\,dx\wedge dy$ (units with $c = 1$). Computing $dF$ by the method above produces four coefficients, which are precisely the three components of $\nabla\times\mathbf{E} + \partial_t\mathbf{B}$ and the scalar $\nabla\cdot\mathbf{B}$. So Faraday's law and the absence of magnetic monopoles together say exactly $dF = 0$, as :cite[Hassani]{work=hassani-2013 loc="Box 28.5.6, p. 890"} records. Because $d$ commutes with pullback, this equation is automatically Lorentz invariant: a change of frame acts on $F$ by pullback, and pullback of $0$ is $0$. The inhomogeneous pair needs a metric and is treated in :ref[the Hodge star and Maxwell's equations]{to=geom.hodge-star-maxwell}.

**Gauge potentials.** Writing $F = dA$ for a $1$-form $A$ makes $dF = 0$ automatic, by $d\circ d = 0$; and $A$ is determined by $F$ only up to adding $d\chi$, which is the gauge freedom. The same two sentences describe the vector potential of magnetostatics ($\mathbf{B} = \nabla\times\mathbf{A}$ forces $\nabla\cdot\mathbf{B} = 0$, and $\mathbf{A}$ is free up to a gradient) and the connection forms of gauge theories in any dimension.

**Conservation laws and integrability.** A conserved current in $n$ spacetime dimensions is an $(n-1)$-form $J$ with $dJ = 0$; this single equation is the continuity equation of :ref[the divergence theorem]{to=vcalc.divergence-theorem} with no index juggling. In the same spirit, a system of first-order partial differential equations written as the vanishing of a set of $1$-forms is integrable only if the exterior derivatives of those forms vanish on the common solution set — the Frobenius condition, and the reason $d$ appears in control theory and in non-holonomic mechanics.

**Why $d$ is cheap.** Unlike the covariant derivative of :ref[covariant differentiation]{to=geom.covariant-derivative}, $d$ needs no metric and no connection, so it is the same operator in Cartesian, spherical or arbitrary curvilinear coordinates. In numerical work this is the basis of mimetic and finite-element exterior-calculus discretisations, which represent $k$-forms by their integrals over $k$-dimensional cells of a mesh and define $d$ by signed sums over cell boundaries; $d\circ d = 0$ then holds exactly in floating point, because it becomes a statement about the mesh rather than about derivatives.
:::
