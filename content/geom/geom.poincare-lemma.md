---
id: geom.poincare-lemma
title: Closed and exact forms
kind: theorem
level: advanced
summary: Proves the Poincare lemma by exhibiting an explicit homotopy operator $K$ on a star-shaped domain with $dK + Kd = \mathrm{id}$, so that every closed $p$-form with $p \ge 1$ is exact there; shows by the angle form on the punctured plane and the solid-angle form on punctured space that the conclusion fails without star-shapedness, and reads the failure as the first de Rham cohomology groups.
prereqs: [geom.exterior-derivative, geom.differential-forms, geom.stokes-forms, vcalc.line-integrals, found.differentiation-under-integral, found.connectedness-homotopy]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 11, Proposition 11.44, p. 294 (every exact covector field is closed), Example 11.48 and Theorem 11.49 with its proof, pp. 296–297 (the definition of a star-shaped set, the Poincare lemma for 1-forms, and the proof by integrating along the segments $\\gamma_x(t) = tx$ with differentiation under the integral sign), Corollary 11.50, p. 297 (local exactness), Example 11.51, p. 298 (the practical antidifferentiation recipe); Ch. 17, pp. 440–441 (closed and exact forms, the spaces $Z^p$ and $B^p$, the definition of $H^p_{\\mathrm{dR}}(M)$ as their quotient, and Example 17.1), Theorem 17.13, p. 446 (contractible manifolds have vanishing cohomology in positive degree), Theorem 17.14 and Corollaries 17.15–17.16, p. 447 (the Poincare lemma for star-shaped open subsets of $\\mathbb{R}^n$ or $\\mathbb{H}^n$, local exactness, and $H^p_{\\mathrm{dR}}(\\mathbb{R}^n) = 0$)"
    pages: "294, 296-298, 440-441, 446-447"
    role: the statement of the Poincare lemma for star-shaped domains and the definition of star-shaped; the proof route (straight-line homotopy from the centre, differentiate under the integral sign, recognise a total $t$-derivative), which we carry from $p = 1$ to general $p$; the punctured-plane counterexample; the de Rham cohomology groups and the vanishing theorems
  - work: hassani-2013
    loc: "§28.5, pp. 894–895 (closed and exact forms, the name 'Poincare lemma' for $d \\circ d = 0$, the definition of a region contractable to a point, Theorem 28.5.15, the converse of the Poincare lemma, Example 28.5.16, the four-potential $F = d\\eta$, and the gauge freedom $\\eta \\mapsto \\eta + d\\alpha$)"
    pages: "894-895"
    role: the physicists' naming convention, the statement of the converse on a contractable region, and the electromagnetic four-potential as the application that motivates it
  - work: arfken-2013
    loc: "§4.6, Eqs. (4.85), the axioms for $d$ including $d(d\\omega) = 0$, and Example 4.6.1, pp. 239–240 (the identity $d \\circ d = 0$ called Poincare's lemma, with the explanation that it rests on the equality of mixed partial derivatives, and the translation into $\\nabla\\times\\nabla f = 0$ and $\\nabla\\cdot(\\nabla\\times A) = 0$)"
    pages: "239-240"
    role: the easy direction, that exact implies closed, and the reason it holds; the clash of naming between the physics and mathematics literature
---

:::note[The question, and a warning about the name]{provenance=original}
Because $d \circ d = 0$ (:ref[The exterior derivative]{to=geom.exterior-derivative}), every form that is a derivative is annihilated by the derivative. The question of this unit is the converse: if $d\omega = 0$, must $\omega = d\eta$ for some $\eta$?

The answer depends on the shape of the domain and not at all on the form. On a ball the answer is yes in every degree; on $\mathbb{R}^2$ with one point removed it is already no in degree $1$; on $\mathbb{R}^3$ with one point removed it is yes in degree $1$ and no in degree $2$. Measuring the gap between "closed" and "exact" is the beginning of de Rham cohomology, and it is the mechanism by which a differential-geometric computation detects a hole.

**A warning on the name.** Arfken calls the identity $d(d\omega) = 0$ itself "Poincare's lemma", and Hassani does the same, reserving "converse of the Poincare lemma" for the statement that closed forms are exact on a topologically simple region. Lee and most of the mathematical literature use "the Poincare lemma" for the converse. The two usages are exactly opposite. This unit follows Lee: **the Poincare lemma** below is the statement that closed implies exact on a star-shaped domain, and the easy direction is recorded without a name.
:::

:::definition[Closed, exact, and the de Rham cohomology groups]{provenance=adapted src="lee-2013:Ch. 17, pp. 440–441"}
Fix a smooth $n$-dimensional manifold $M$, whose boundary may be empty or not, and write $\Omega^p(M)$ for its smooth $p$-forms (:ref[Differential forms]{to=geom.differential-forms}). Call $\omega \in \Omega^p(M)$

- **closed** if $d\omega = 0$;
- **exact** if $\omega = d\eta$ for some $\eta \in \Omega^{p-1}(M)$, called a **primitive** or **potential** for $\omega$.

Because $d$ is linear, the closed and the exact $p$-forms are linear subspaces of $\Omega^p(M)$:

$$
Z^p(M) = \ker\bigl(d: \Omega^p \to \Omega^{p+1}\bigr), \qquad
B^p(M) = \operatorname{im}\bigl(d: \Omega^{p-1} \to \Omega^{p}\bigr) ,
$$

with the convention $\Omega^p(M) = 0$ for $p < 0$ and $p > n$, so that $B^0(M) = 0$. Since $d\circ d = 0$ we have $B^p(M) \subseteq Z^p(M)$, and the quotient

$$
H^p_{\mathrm{dR}}(M) \;=\; Z^p(M)\big/B^p(M)
$$

is the **$p$-th de Rham cohomology group** of $M$. It is a real vector space; Lee notes that the word "group" is traditional only because other cohomology theories produce groups rather than vector spaces. Two closed forms differing by an exact form are **cohomologous** and define the same class $[\omega]$. By construction,

$$
H^p_{\mathrm{dR}}(M) = 0 \quad\Longleftrightarrow\quad \text{every closed $p$-form on $M$ is exact}.
$$

Finally, call a subset $U$ of a finite-dimensional vector space **star-shaped** when some **centre** $c \in U$ sees all of $U$: the straight segment joining $c$ to any other member of $U$ never leaves $U$. Convexity is the special case in which every point is a centre, so convex sets are star-shaped; a non-convex example is $\mathbb{R}^2$ with the closed ray $\{(a,0) : a \ge 0\}$ deleted, which is star-shaped about $c = (-1,0)$: a segment from $c$ to a point with non-zero second coordinate has non-zero second coordinate everywhere except at $c$ itself, and a segment from $c$ to a surviving point of the $x$-axis runs along the negative axis.
:::

:::statement[The easy direction]{provenance=adapted src="lee-2013:Proposition 11.44, p. 294; arfken-2013:§4.6, Eq. (4.85) and Example 4.6.1, pp. 239–240"}
Every exact form is closed: if $\omega = d\eta$ then $d\omega = d(d\eta) = 0$.

Arfken points out what this rests on. In coordinates, $d(df) = \sum_{i,j}\partial_j\partial_i f\,dx^j\wedge dx^i$, and the coefficient array $\partial_j\partial_i f$ is symmetric in $(i,j)$ for a $C^2$ function while $dx^j\wedge dx^i$ is antisymmetric, so the sum cancels in pairs. The identity is therefore the equality of mixed partial derivatives in disguise, and it fails for a function whose mixed partials differ. In $\mathbb{R}^3$ the two instances of $d\circ d = 0$ are $\nabla\times\nabla f = 0$ and $\nabla\cdot(\nabla\times A) = 0$ (:ref[Vector identities]{to=vcalc.vector-identities}).

In coordinates, closedness of a 1-form $\omega = \omega_i\,dx^i$ is the system

$$
\frac{\partial\omega_j}{\partial x^i} = \frac{\partial\omega_i}{\partial x^j} \qquad\text{for all } i, j ,
$$

which is Lee's criterion and is what one actually checks in practice.
:::

:::statement[The Poincare lemma]{provenance=adapted src="lee-2013:Theorem 11.49, p. 296 and Theorem 17.14 with Corollaries 17.15–17.16, p. 447; hassani-2013:§28.5, Theorem 28.5.15, p. 895"}
Let $U \subseteq \mathbb{R}^n$ be an open star-shaped set and let $p \ge 1$. Then every closed $p$-form on $U$ is exact:

$$
\omega \in \Omega^p(U), \quad d\omega = 0 \quad\Longrightarrow\quad \omega = d\eta \ \text{ for some } \eta \in \Omega^{p-1}(U) .
$$

Equivalently $H^p_{\mathrm{dR}}(U) = 0$ for every $p \ge 1$. The proof below produces $\eta$ by an explicit formula. Lee states the theorem for star-shaped open subsets of $\mathbb{R}^n$ or of the half-space $\mathbb{H}^n$, which costs nothing extra in the proof.

Two corollaries, both Lee's:

- **Local exactness.** On any smooth manifold, every point has a neighbourhood on which every closed form is exact, since every point has a coordinate ball, and a ball is convex. Whether a given closed form is exact is therefore always a global question.
- $H^p_{\mathrm{dR}}(\mathbb{R}^n) = 0$ for all $p \ge 1$, $\mathbb{R}^n$ being convex.

For $p = 0$ the conclusion is false and is not asserted: a closed $0$-form is a function with $df = 0$, that is, a locally constant function, and there are no $(-1)$-forms for it to be the derivative of. On a connected $U$, $H^0_{\mathrm{dR}}(U) = \mathbb{R}$, the constants.

**Two stronger statements, and what they cost.** Lee's Theorem 17.13 replaces "star-shaped" by "contractible", by way of the homotopy invariance of de Rham cohomology; a star-shaped $U$ is contractible via $H(x,t) = c + t(x - c)$, so that theorem contains this one. Hassani states the result for a region "contractable to a point", but his definition of that phrase — that every closed curve in the region can be shrunk to a point within it — is the definition of *simple connectedness*, which is strictly weaker than contractibility and is not enough in degrees above $1$: the sphere $S^2$ is simply connected but carries a closed $2$-form that is not exact, as the second example below shows in the equivalent setting of $\mathbb{R}^3 \setminus \{0\}$. We follow Lee and state the hypothesis as star-shapedness, which is what the proof given here actually uses; the discrepancy with Hassani's phrasing is recorded in `verification/discrepancies.md`.
:::

:::idea{provenance=original}
The whole proof is one formula. A star-shaped domain comes with a distinguished family of paths: from the centre $c$, which we may take to be the origin, the segment $t \mapsto tx$ reaches every point $x$ of $U$ without leaving it, and it varies smoothly with $x$. That lets us average the form along those segments.

Concretely, define an operator $K$ lowering degree by one, which contracts a $p$-form with the position vector and integrates the result along the segment with a weight $t^{p-1}$. The claim is that $K$ is a *homotopy operator*:

$$
d(K\omega) + K(d\omega) = \omega \qquad\text{on } \Omega^p(U),\ p \ge 1 .
$$

Granting this, the theorem is immediate: if $\omega$ is closed, the second term dies and $\omega = d(K\omega)$, so $K\omega$ is the primitive we wanted — written down, not merely shown to exist.

Why should such an identity hold? Differentiating $K\omega$ produces two kinds of term, one from differentiating the explicit factor $x^{i_a}$ and one from differentiating inside the integrand. The first kind yields $p$ copies of the averaged form; the second kind splits further, and precisely the part of it that does not involve the radial direction is cancelled by $K(d\omega)$, which is built the same way out of $d\omega$. What survives is the radial derivative, and the two survivors assemble into $\int_0^1 \frac{d}{dt}\bigl[t^p\,\omega_I(tx)\bigr]\,dt$, a total derivative in $t$. The fundamental theorem of calculus evaluates it as $\omega_I(x) - 0$, the lower limit vanishing because $p \ge 1$. That last cancellation is the entire role of the hypothesis $p \ge 1$, and the entire reason the lemma says nothing about functions.
:::

:::proof[The Poincare lemma]{provenance=adapted src="lee-2013:Theorem 11.49 with its proof, pp. 296–297"}
Lee proves the case $p = 1$ by integrating $\omega$ along the segments $\gamma_x(t) = tx$ and differentiating under the integral sign; we run the same three moves in general degree, with the contraction against the position vector doing in degree $p$ what multiplication by $x^i$ does in degree $1$.

**Step 0 (normalise the centre).** Suppose $U$ is star-shaped about $c$. Translation is a diffeomorphism of $\mathbb{R}^n$, and pullback along a diffeomorphism commutes with $d$; closedness and exactness are therefore both preserved by it (:ref[Pushforwards and pullbacks]{to=geom.pullbacks-pushforwards}). Translating by $-c$ we may and do assume $c = 0$, so that $tx \in U$ whenever $x \in U$ and $t \in [0,1]$.

**Step 1 (define the operator).** For $p \ge 1$ and $\omega \in \Omega^p(U)$ set, for $x \in U$ and tangent vectors $v_1, \dots, v_{p-1}$,

$$
(K\omega)_x(v_1,\dots,v_{p-1}) \;=\; \int_0^1 t^{\,p-1}\,\omega_{tx}\bigl(x,\ v_1,\dots,v_{p-1}\bigr)\,dt .
$$

The integrand is smooth in $t$ and in $x$ jointly, and $[0,1]$ is compact, so $K\omega$ is a smooth $(p-1)$-form. Writing $\omega = \sum_{I}\omega_I\,dx^I$ over increasing multi-indices $I = (i_1 < \dots < i_p)$ and expanding the determinant $dx^I(x, v_1,\dots,v_{p-1})$ along its first column gives the coordinate form

$$
K\omega \;=\; \sum_{I}\ \sum_{a=1}^{p}\ (-1)^{a-1}\,g_I(x)\,x^{i_a}\;dx^{I \setminus i_a},
\qquad
g_I(x) = \int_0^1 t^{\,p-1}\,\omega_I(tx)\,dt ,
$$

where $dx^{I\setminus i_a} = dx^{i_1}\wedge\dots\wedge\widehat{dx^{i_a}}\wedge\dots\wedge dx^{i_p}$, the hat marking an omitted factor. The same formula, read with $p+1$ in place of $p$, defines $K$ on $(p+1)$-forms, and applied to a monomial $f\,dx^{j_0}\wedge\dots\wedge dx^{j_p}$ with arbitrary (not necessarily increasing) indices it gives

$$
K\bigl(f\,dx^{j_0}\wedge\dots\wedge dx^{j_p}\bigr)
= \sum_{b=0}^{p}(-1)^{b}\,\Bigl(\int_0^1 t^{\,p}f(tx)\,dt\Bigr)\,x^{j_b}\;dx^{j_0}\wedge\dots\wedge\widehat{dx^{j_b}}\wedge\dots\wedge dx^{j_p},
$$

which is what we shall apply to $d\omega$. Note $K$ is defined on *all* forms, closed or not; that is what makes the identity of Step 4 available.

**Step 2 (differentiate $K\omega$).** By the Leibniz rule for $d$,

$$
d(K\omega) = \sum_I\sum_{a=1}^{p}(-1)^{a-1}\Bigl[\,g_I\,dx^{i_a} + x^{i_a}\sum_{j}\partial_j g_I\,dx^{j}\,\Bigr]\wedge dx^{I\setminus i_a} .
$$

In the first bracketed term, moving $dx^{i_a}$ back into its place in $dx^I$ costs $a-1$ transpositions, so $(-1)^{a-1}dx^{i_a}\wedge dx^{I\setminus i_a} = dx^I$; summing over the $p$ values of $a$ gives

$$
\text{(first part)} \;=\; \sum_I p\,g_I(x)\,dx^I .
$$

For the second, the integrand of $g_I$ is smooth in $(t,x)$ on the compact $t$-interval, so we may differentiate under the integral sign (:ref[Differentiation under the integral sign]{to=found.differentiation-under-integral}); the chain rule applied to $x \mapsto \omega_I(tx)$ brings down a factor $t$, so

$$
\partial_j g_I(x) = \int_0^1 t^{\,p}\,(\partial_j\omega_I)(tx)\,dt \;=:\; h_{I,j}(x) ,
$$

and

$$
\text{(second part)} \;=\; \sum_I\sum_{a=1}^{p}\sum_{j}(-1)^{a-1}\,x^{i_a}\,h_{I,j}\;dx^{j}\wedge dx^{I\setminus i_a} .
$$

This is the only place differentiation under the integral sign is used.

**Step 3 (apply $K$ to $d\omega$).** Since $d\omega = \sum_I\sum_j (\partial_j\omega_I)\,dx^j\wedge dx^I$, the monomial formula of Step 1 applies to each term with the $(p+1)$-tuple of indices $(j, i_1, \dots, i_p)$. The $b = 0$ term of that formula picks out $x^j$ and leaves $dx^I$; the term $b = a \ge 1$ picks out $x^{i_a}$, carries the sign $(-1)^a$ and leaves $dx^j\wedge dx^{I\setminus i_a}$. The weight is $\int_0^1 t^{\,p}(\partial_j\omega_I)(tx)\,dt = h_{I,j}$, the same function as in Step 2. Hence

$$
K(d\omega) \;=\; \sum_I\sum_j h_{I,j}\Bigl[\,x^{j}\,dx^I \;+\; \sum_{a=1}^{p}(-1)^{a}\,x^{i_a}\,dx^{j}\wedge dx^{I\setminus i_a}\,\Bigr] .
$$

**Step 4 (add, and recognise a total derivative).** The double sums in Steps 2 and 3 are termwise opposite, because $(-1)^{a-1} = -(-1)^{a}$, so they cancel exactly. What is left is

$$
d(K\omega) + K(d\omega) \;=\; \sum_I \Bigl[\,p\,g_I(x) \;+\; \sum_j x^{j}\,h_{I,j}(x)\Bigr]\,dx^I .
$$

Now $\sum_j x^j (\partial_j\omega_I)(tx) = \dfrac{d}{dt}\bigl[\omega_I(tx)\bigr]$ by the chain rule, so the bracket is

$$
\int_0^1 \Bigl[\,p\,t^{\,p-1}\,\omega_I(tx) \;+\; t^{\,p}\,\frac{d}{dt}\omega_I(tx)\Bigr]dt
= \int_0^1 \frac{d}{dt}\Bigl[\,t^{\,p}\,\omega_I(tx)\Bigr]dt
= \Bigl[\,t^{\,p}\,\omega_I(tx)\Bigr]_{t=0}^{t=1}
= \omega_I(x) ,
$$

the lower limit vanishing because $p \ge 1$ makes $t^p \to 0$ while $\omega_I(tx) \to \omega_I(0)$ stays bounded. Therefore

$$
d(K\omega) + K(d\omega) = \sum_I \omega_I(x)\,dx^I = \omega .
$$

**Step 5 (conclude).** If in addition $d\omega = 0$, the second term is zero and $\omega = d(K\omega)$. Setting $\eta = K\omega$, which is a smooth $(p-1)$-form on all of $U$ by Step 1, finishes the proof. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Star-shapedness** enters in exactly one place and enters absolutely: the segment $t \mapsto tx$, $t \in [0,1]$, must lie in $U$ for every $x \in U$, or the integrals defining $K$ are not even defined, $\omega_I(tx)$ being meaningless where $tx \notin U$. Nothing else in Steps 1–4 refers to the shape of $U$. The first example below shows the conclusion really does fail without it.
- **$p \ge 1$** is used once, at the lower limit in Step 4. For $p = 0$ the bracket would be $[\,\omega(tx)\,]_0^1 = \omega(x) - \omega(0)$, and the constant $\omega(0)$ is precisely the obstruction: the closed $0$-forms on a connected $U$ are the constants, none of which except $0$ is exact.
- **Smoothness** is used for differentiation under the integral sign in Step 2 and for the chain rule in Step 4. $C^1$ coefficients suffice for the argument as written, but the easy direction needs $C^2$ for the equality of mixed partials, so $C^\infty$ is the comfortable hypothesis.
- **Openness of $U$** is used implicitly throughout, to speak of partial derivatives at every point of $U$. Lee's version also covers star-shaped open subsets of the half-space $\mathbb{H}^n$, where one-sided derivatives do the work.
- **The centre does not matter, but the family of paths does.** Step 0 moves the centre to the origin; a different centre gives a different primitive, differing by a closed $(p-1)$-form. That non-uniqueness is unavoidable — it is gauge freedom, discussed in the application.

**What a weaker hypothesis buys.** Star-shapedness is far from necessary. Lee obtains the same conclusion for any contractible manifold, as a corollary of a stronger invariance: a homotopy equivalence between two manifolds induces an isomorphism of their de Rham groups. Anything homotopy equivalent to a single point therefore has $H^p_{\mathrm{dR}} = 0$ in every degree $p \ge 1$. In degree $1$ alone, simple connectedness suffices. The price of the general theorem is the machinery of homotopy operators on $M \times I$; the price of the version proved here is a hypothesis one can check by looking at the picture, and a formula one can evaluate.
:::

:::method[Finding a primitive]{provenance=adapted src="lee-2013:Theorem 11.49, pp. 296–297 and Example 11.51, p. 298"}
Given $\omega$ on a domain $U$, to decide exactness and produce a potential:

1. **Test closedness.** Compute $d\omega$. If $d\omega \ne 0$ the form is not exact and there is nothing further to do. For a 1-form this is the check $\partial_i\omega_j = \partial_j\omega_i$.
2. **Check the shape of the domain.** Is $U$ star-shaped (in particular, convex)? If so, the lemma applies in every degree $p \ge 1$. If not, the form may still be exact, but exactness must be established by other means, and the examples below show it can genuinely fail.
3. **Apply the formula.** Translate the centre to the origin and evaluate

$$
\eta = K\omega = \sum_{I}\sum_{a=1}^{p}(-1)^{a-1}\Bigl(\int_0^1 t^{\,p-1}\omega_I(tx)\,dt\Bigr)x^{i_a}\,dx^{I\setminus i_a} .
$$

   For $\omega_I$ homogeneous of degree $m$ the integral is simply $\omega_I(x)/(m + p)$, so for polynomial coefficients the whole computation is a division of each monomial by a small integer.
4. **Verify.** Compute $d\eta$ and confirm it is $\omega$. This is cheap and catches sign slips, of which there are many opportunities.
5. **Or antidifferentiate directly.** For a 1-form on a rectangle, Lee's Example 11.51 is usually quicker: integrate $\omega_1$ in $x^1$ holding the other variables fixed, which fixes $f$ up to a function of $(x^2,\dots,x^n)$; impose $\partial_2 f = \omega_2$ to pin that function down up to a function of $(x^3,\dots,x^n)$; and continue. Closedness is what makes each step consistent. The formula of step 3 is the one to use when a uniform, verifiable answer is wanted in higher degree.

**Non-uniqueness.** Any two primitives differ by a closed $(p-1)$-form, since $d(\eta - \eta') = 0$. For $p = 1$ on a connected domain this is an additive constant; for $p \ge 2$ it is the far larger freedom $\eta \mapsto \eta + d\alpha$ noted by Hassani, with $\alpha$ an arbitrary $(p-2)$-form.
:::

:::example[A closed 2-form on $\mathbb{R}^3$, its potential, and a flux]{provenance=original}
Take the magnetic-type field $B = (x^2,\ -2xy,\ xy)$ on $\mathbb{R}^3$, whose divergence is $2x - 2x + 0 = 0$, and let $\omega$ be its flux 2-form,

$$
\omega = x^2\,dy\wedge dz \;-\; 2xy\,dz\wedge dx \;+\; xy\,dx\wedge dy .
$$

Then $d\omega = (\nabla\cdot B)\,dx\wedge dy\wedge dz = 0$, so $\omega$ is closed, and $\mathbb{R}^3$ is convex, so the lemma applies with $p = 2$.

**Step 1: increasing-index components.** Using $dz\wedge dx = -\,dx\wedge dz$,

$$
\omega = 2xy\,dx\wedge dz + xy\,dx\wedge dy + x^2\,dy\wedge dz,
\qquad
\omega_{13} = 2xy,\quad \omega_{12} = xy, \quad \omega_{23} = x^2 .
$$

**Step 2: the radial integrals.** Here $p = 2$, so $g_I(x) = \int_0^1 t\,\omega_I(tx)\,dt$. Every component is homogeneous of degree $2$, so $\omega_I(tx) = t^2\omega_I(x)$ and $g_I = \omega_I\int_0^1 t^3\,dt = \omega_I/4$:

$$
g_{13} = \frac{xy}{2}, \qquad g_{12} = \frac{xy}{4}, \qquad g_{23} = \frac{x^2}{4} .
$$

**Step 3: assemble $\eta = K\omega$.** For $I = (i_1 < i_2)$ the formula contributes $g_I\,x^{i_1}\,dx^{i_2} - g_I\,x^{i_2}\,dx^{i_1}$, with $(x^1,x^2,x^3) = (x,y,z)$:

$$
\begin{aligned}
I = (1,3): &\quad \tfrac{xy}{2}\,x\,dz - \tfrac{xy}{2}\,z\,dx = \tfrac{x^2y}{2}\,dz - \tfrac{xyz}{2}\,dx, \\
I = (1,2): &\quad \tfrac{xy}{4}\,x\,dy - \tfrac{xy}{4}\,y\,dx = \tfrac{x^2y}{4}\,dy - \tfrac{xy^2}{4}\,dx, \\
I = (2,3): &\quad \tfrac{x^2}{4}\,y\,dz - \tfrac{x^2}{4}\,z\,dy = \tfrac{x^2y}{4}\,dz - \tfrac{x^2z}{4}\,dy .
\end{aligned}
$$

Adding,

$$
\eta \;=\; -\frac{xy(y + 2z)}{4}\,dx \;+\; \frac{x^2(y - z)}{4}\,dy \;+\; \frac{3x^2y}{4}\,dz .
$$

**Step 4: verify.** With $P, Q, R$ the three coefficients, the curl components are

$$
\partial_y R - \partial_z Q = \frac{3x^2}{4} - \Bigl(-\frac{x^2}{4}\Bigr) = x^2 ,
$$
$$
\partial_z P - \partial_x R = -\frac{xy}{2} - \frac{3xy}{2} = -2xy ,
$$
$$
\partial_x Q - \partial_y P = \frac{x(y - z)}{2} - \Bigl(-\frac{x(y + z)}{2}\Bigr) = xy ,
$$

since $Q = \tfrac14 x^2(y-z)$ gives $\partial_x Q = \tfrac12 x(y-z)$ and $P = -\tfrac14(xy^2 + 2xyz)$ gives $\partial_y P = -\tfrac12 x(y+z)$. These three numbers are exactly $(x^2, -2xy, xy) = B$, so $d\eta = \omega$.

**Step 5: a number both ways.** Let $S$ be the unit square $0 \le x \le 1$, $0 \le y \le 1$ in the plane $z = 1$, oriented by $+\hat z$, with boundary traversed counterclockwise. The flux of $\omega$ through it is

$$
\int_S \omega = \int_0^1\!\!\int_0^1 xy \,dx\,dy = \frac14 .
$$

By :ref[the general Stokes theorem]{to=geom.stokes-forms}, this must equal $\oint_{\partial S}\eta$. On $z = 1$ the relevant coefficients are $P = -\tfrac{xy(y+2)}{4}$ and $Q = \tfrac{x^2(y-1)}{4}$, and $dz = 0$. The four sides give

$$
\underbrace{\int_0^1 P(s,0,1)\,ds}_{=\,0}
\;+\; \underbrace{\int_0^1 Q(1,s,1)\,ds}_{\int_0^1 \frac{s-1}{4}ds \,=\, -\frac18}
\;+\; \underbrace{\int_1^0 P(s,1,1)\,ds}_{\int_1^0 -\frac{3s}{4}\,ds \,=\, +\frac38}
\;+\; \underbrace{\int_1^0 Q(0,s,1)\,ds}_{=\,0}
\;=\; -\frac18 + \frac38 \;=\; \boxed{\frac14} ,
$$

agreeing with the surface integral. The primitive delivered by the formula is therefore a genuine vector potential for $B$ in the sense of :ref[the Helmholtz decomposition]{to=vcalc.helmholtz-decomposition}.
:::

:::example[Two closed forms that are not exact]{provenance=adapted src="lee-2013:Example 11.43, p. 294, Example 11.48, p. 296 and Example 17.1, p. 441"}
**(a) The angle form on the punctured plane.** On $U = \mathbb{R}^2\setminus\{0\}$ put

$$
\omega = \frac{x\,dy - y\,dx}{x^2 + y^2} .
$$

It is closed: writing $\omega = \omega_1 dx + \omega_2 dy$ with $\omega_1 = -y/(x^2+y^2)$ and $\omega_2 = x/(x^2+y^2)$,

$$
\partial_x\omega_2 = \frac{(x^2+y^2) - x\cdot 2x}{(x^2+y^2)^2} = \frac{y^2 - x^2}{(x^2+y^2)^2}
= \frac{-(x^2+y^2) + y\cdot 2y}{(x^2+y^2)^2} = \partial_y\omega_1 .
$$

It is **not** exact on $U$. Suppose $\omega = df$. Let $\gamma(\theta) = (\cos\theta, \sin\theta)$, $\theta \in [0, 2\pi]$, be the unit circle. Then $\gamma^*\omega = (\cos^2\theta + \sin^2\theta)\,d\theta = d\theta$, so

$$
\oint_\gamma \omega = \int_0^{2\pi} d\theta = 2\pi .
$$

But the integral of an exact 1-form round a closed curve is $f(\gamma(2\pi)) - f(\gamma(0)) = 0$ (:ref[Line integrals]{to=vcalc.line-integrals}), and $2\pi \ne 0$. Hence $H^1_{\mathrm{dR}}(\mathbb{R}^2\setminus\{0\}) \ne 0$. Restricted to the right half-plane $x > 0$ — which *is* star-shaped — the same $\omega$ is exact, equal to $d\arctan(y/x)$; in polar coordinates $\omega = d\theta$ wherever a single-valued branch of $\theta$ exists. The obstruction is thus not local but the impossibility of choosing one branch of the angle all the way round the hole.

**(b) The solid-angle form on punctured space.** On $V = \mathbb{R}^3\setminus\{0\}$, with $r = \lvert\mathbf r\rvert$, put

$$
\sigma = \frac{x\,dy\wedge dz + y\,dz\wedge dx + z\,dx\wedge dy}{r^3} ,
$$

the flux 2-form of the inverse-square field $\hat{\mathbf r}/r^2$. It is closed, because $d\sigma = \nabla\cdot(\hat{\mathbf r}/r^2)\,dx\wedge dy\wedge dz$ and that divergence vanishes away from the origin. It is not exact: were $\sigma = d\eta$, then by Stokes' theorem on the closed surface $S^2$, which has empty boundary,

$$
\int_{S^2}\sigma = \int_{S^2} d\eta = \int_{\partial S^2}\eta = 0 ,
$$

whereas restricting $\sigma$ to the unit sphere gives the area element and

$$
\int_{S^2}\sigma = \int_0^{2\pi}\!\!\int_0^\pi \sin\theta\,d\theta\,d\varphi = 4\pi \ne 0 .
$$

So $H^2_{\mathrm{dR}}(\mathbb{R}^3\setminus\{0\}) \ne 0$. Note the degrees: $V$ is simply connected — any loop can be slid off the origin — yet the lemma fails in degree $2$. This is the counterexample promised above to Hassani's phrasing of the hypothesis, and it shows why "contractible", not "simply connected", is the right word. By contrast $H^1_{\mathrm{dR}}(V) = 0$: on punctured space every closed 1-form *is* exact.

**The pattern.** A closed $p$-form fails to be exact when there is a $p$-dimensional closed surface in the domain over which it integrates to something non-zero, because exact forms integrate to zero over such surfaces. The punctured plane has a circle enclosing the hole; punctured space has a sphere enclosing it. The $2\pi$ and the $4\pi$ are not accidents of normalisation: they are the total angle and the total solid angle, and dividing them out gives generators of the cohomology that take integer values on cycles.
:::

:::application[Potentials, gauge freedom, and holes that physics can measure]{provenance=original}
**When a potential exists.** Three standard moves in physics are instances of the lemma. A force field with $\nabla\times F = 0$ on a star-shaped region has a potential energy $F = -\nabla V$, which is the case $p = 1$. A magnetic field with $\nabla\cdot B = 0$ has a vector potential $B = \nabla\times A$ there, which is the case $p = 2$ and is what the worked example constructs. And in thermodynamics a differential $\delta Q = \sum_i X_i\,dY_i$ is an exact differential of a state function exactly when it is closed as a 1-form on the (convex) space of states, which is why $dU$ and $dS$ exist as state functions while heat and work separately do not.

**Gauge freedom is non-uniqueness of the primitive.** In :ref[The Hodge star and Maxwell's equations]{to=geom.hodge-star-maxwell} the homogeneous Maxwell equations are the single statement $dF = 0$ for the Faraday 2-form on spacetime. The lemma turns this into $F = dA$ on any star-shaped region of spacetime, with $A$ the four-potential; Hassani does this computation and reads off $F_{\alpha\beta} = \partial_\alpha A_\beta - \partial_\beta A_\alpha$. The replacement $A \mapsto A + d\chi$ leaves $F$ unchanged because $d\circ d = 0$, and that is the whole of electromagnetic gauge invariance: it is the ambiguity of a primitive, no more and no less. Hassani notes that the generalisation of this freedom to non-abelian structure groups is the organising principle of the standard model.

**Where the hole is physical.** Remove a thin solenoid from space and the region outside it is no longer simply connected. Outside the solenoid $B = 0$, so $A$ is closed; but $\oint A\cdot d\mathbf{l} = \Phi$, the enclosed flux, which is not zero, so $A$ is not exact there. By example (a), that non-exactness is a cohomology class, and in the Aharonov–Bohm effect it is measured: the interference pattern of electrons passing on either side of the solenoid shifts by a phase $q\Phi/\hbar$ (SI units) even though the electrons never enter a region with a magnetic field. Likewise, a magnetic monopole of charge $g$ at the origin would make $B$ a closed but non-exact 2-form on $\mathbb{R}^3\setminus\{0\}$, a constant multiple of the $\sigma$ of example (b), the constant being fixed by the requirement that the flux through a sphere about the origin be the monopole charge; no globally defined vector potential exists, and Dirac's argument that the potential must be built from two patches with a consistent overlap is what quantises the product of the electric and magnetic charges.

**Where the hole is a count.** Integrating closed forms over cycles is the computational face of de Rham's theorem, which identifies $H^p_{\mathrm{dR}}(M)$ with the real singular cohomology of $M$ and hence makes it a topological invariant. In applied settings this is the engine of topological data analysis and of the discrete theories used for electromagnetic and fluid solvers, where the dimension of a discrete analogue of $H^1$ counts independent current loops in a conductor and determines how many extra constraints a well-posed scheme needs. The counting of :ref[the Gauss-Bonnet theorem]{to=geom.gauss-bonnet} is the same phenomenon seen through curvature rather than through forms.
:::
