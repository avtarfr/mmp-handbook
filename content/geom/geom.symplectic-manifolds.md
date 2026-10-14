---
id: geom.symplectic-manifolds
title: Symplectic manifolds and Hamiltonian vector fields
kind: definition
level: advanced
summary: Equips an even-dimensional manifold with a closed nondegenerate 2-form, shows that a cotangent bundle carries one canonically and that every such form looks standard in suitable coordinates, and turns each smooth function into a vector field whose flow preserves both the form and the phase-space volume.
prereqs: [geom.differential-forms, var.canonical-equations, geom.exterior-derivative, geom.flows-integral-curves, geom.vector-bundles, geom.poincare-lemma, geom.smooth-manifolds, geom.tangent-vectors]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 22: nondegenerate 2-covectors and symplectic tensors, p. 565; Example 22.2 and the standard tensor (22.1)–(22.2), p. 565; symplectic complements and Lemma 22.3, pp. 565–566; Prop. 22.7 (canonical form for a symplectic tensor), pp. 566–567; Prop. 22.8 ($\\omega^n \\neq 0$), p. 567; symplectic forms, symplectic manifolds, orientability and symplectomorphisms, Example 22.9, p. 568; the tautological 1-form (22.3)–(22.4) and Prop. 22.11 with $\\omega = -d\\tau$, pp. 569–570; Thm 22.13 (Darboux) and Darboux coordinates, p. 571, proved by Moser's method on pp. 573–574; Hamiltonian vector fields and (22.9), pp. 574–575; Prop. 22.16, p. 575; symplectic and (locally) Hamiltonian fields, Prop. 22.17 and (22.10), pp. 575–576; Hamiltonian systems and Hamilton's equations (22.11), p. 576; Poisson brackets (22.15)–(22.16), p. 578; Prop. 22.19 and Cor. 22.20, p. 579; conserved quantities, infinitesimal symmetries and Prop. 22.21, pp. 579–580; Cartan's magic formula, Thm 14.35, p. 372; Thm 12.37 (invariance under a flow), p. 324"
    pages: "324, 372, 565-580"
    role: definitions of symplectic tensor, symplectic form and symplectomorphism; canonical form for a symplectic tensor and the criterion $\omega^n \neq 0$; the tautological 1-form and the canonical symplectic form on a cotangent bundle; statement of the Darboux theorem; the definition and coordinate formula for a Hamiltonian vector field; the Poisson bracket, its algebraic properties and the identity $X_{\{f,g\}} = -[X_f, X_g]$; symplectic versus Hamiltonian vector fields; Cartan's magic formula and the flow-invariance criterion
  - work: hassani-2013
    loc: "§26.4: Def. 26.4.1 (nondegenerate 2-form, symplectic vector space, symplectic transformation), the flat and sharp maps (26.26) and Box 26.4.2, p. 801; Prop. 26.4.3 (canonical basis), pp. 801–802; Prop. 26.4.4, p. 803; the symplectic group Prop. 26.4.6, p. 803; §28.7: Def. 28.7.1 and the maps $\\flat,\\sharp$, p. 902; Thm 28.7.2 (Darboux) with the volume element $\\mu_\\omega$ and Def. 28.7.3 (symplectic charts, canonical transformations), p. 902; Example 28.7.4 with (28.48)–(28.49), pp. 902–904; Example 28.7.6 and Box 28.7.7 (phase space as $T^*N$), pp. 904–905; Def. 28.7.8 and Prop. 28.7.9 with (28.51)–(28.52), p. 905; Thm 28.7.10 (conservation of energy), p. 906; Prop. 28.7.11 and Cor. 28.7.12 (Liouville's theorem), pp. 907–908; Def. 28.7.13 and Prop. 28.7.14, p. 908; §28.5: Def. 28.5.8 (interior product) and Thm 28.5.10, p. 891"
    pages: "801-804, 891, 902-908"
    role: the musical isomorphisms $\flat$ and $\sharp$ attached to a 2-form; the interior product and the Lie-derivative identity $\mathcal{L}_X = \iota_X d + d\iota_X$; phase space as a cotangent bundle; the Hamiltonian vector field as $\omega^\sharp(dH)$ and Hamilton's equations in canonical coordinates; conservation of energy; the proof that a Hamiltonian flow is a canonical transformation and Liouville's theorem on phase volume; the Poisson bracket and its coordinate form
  - work: gelfand-fomin-1963
    loc: "Ch. 4, §16 (the Hamiltonian and the canonical system), pp. 67–70; §17 (first integrals of the canonical system, the Poisson bracket and eq. (13)), pp. 70–71"
    pages: "67-71"
    role: the classical Poisson bracket and the criterion that a function is a first integral of the canonical system exactly when its bracket with the Hamiltonian vanishes
---

:::definition[Symplectic forms, Darboux coordinates and the Liouville volume]{provenance=adapted src="lee-2013:p. 565, p. 568, p. 571; hassani-2013:Def. 26.4.1 and Box 26.4.2, p. 801; hassani-2013:Def. 28.7.1 and Def. 28.7.3, p. 902"}
Fix $V$, a real vector space of finite dimension, and let $\omega$ be a $2$-covector on it (:ref[differential forms]{to=geom.differential-forms}). Attached to $\omega$ is the linear map

$$
\omega^{\flat} : V \to V^{*}, \qquad \omega^{\flat}(v) = \omega(v, \cdot\,) .
$$

Call $\omega$ **nondegenerate** when $\omega^{\flat}$ is invertible; equivalently, when the only $v$ with $\omega(v, w) = 0$ for every $w$ is $v = 0$; equivalently again, when the matrix $\omega_{ij} = \omega(E_i, E_j)$ in one — hence in every — basis is nonsingular. A nondegenerate $2$-covector is a **symplectic tensor**, and $(V,\omega)$ is then a **symplectic vector space**. The inverse of $\omega^\flat$ is written $\omega^{\sharp} : V^{*} \to V$.

Now let $M$ be a :ref[smooth manifold]{to=geom.smooth-manifolds}.

- A $2$-form $\omega$ on $M$ is **nondegenerate** if $\omega_p$ is a symplectic tensor on $T_pM$ for every $p$.
- A **symplectic form** on $M$ is a $2$-form that is both **closed** ($d\omega = 0$, see :ref[the exterior derivative]{to=geom.exterior-derivative}) and nondegenerate. The pair $(M,\omega)$ is a **symplectic manifold**; the form is also called a **symplectic structure**.
- A diffeomorphism $F : (M_1,\omega_1) \to (M_2,\omega_2)$ with $F^{*}\omega_2 = \omega_1$ is a **symplectomorphism**. In mechanics the same map, from a symplectic manifold to itself, is called a **canonical transformation**.
- Coordinates $(x^1,\dots,x^n,y^1,\dots,y^n)$ on an open set of a $2n$-dimensional $M$ in which
  $$
  \omega = \sum_{i=1}^{n} dx^i \wedge dy^i
  $$
  are **Darboux coordinates**, also called symplectic or canonical coordinates. On $\mathbb{R}^{2n}$ this formula in the standard coordinates defines the **standard symplectic form**.
- When $\dim M = 2n$, the **Liouville volume form** of $(M,\omega)$ is $\omega^n/n!$, where $\omega^n = \omega\wedge\cdots\wedge\omega$ has $n$ factors. Part 1 of the statement says it is a volume form, so a symplectic manifold has a canonical notion of **phase volume** $\int_A \omega^n/n!$, with no metric anywhere in sight.

Two pieces of notation recur. The **interior product** of a vector field $X$ with a $k$-form $\alpha$ is the $(k-1)$-form

$$
(\iota_X\alpha)(X_1,\dots,X_{k-1}) = \alpha(X, X_1,\dots,X_{k-1}),
$$

also written $X \lrcorner\, \alpha$; on functions $\iota_X f = 0$. And $\mathcal{L}_X$ is the Lie derivative along $X$ (:ref[flows and integral curves]{to=geom.flows-integral-curves}), extended to tensor fields by $(\mathcal{L}_XA)_p = \frac{d}{dt}\big|_{t=0}\bigl(\theta_t^{*}A\bigr)_p$ for the flow $\theta$ of $X$.
:::

:::definition[Hamiltonian vector fields and the Poisson bracket]{provenance=adapted src="lee-2013:pp. 574–576, 578; hassani-2013:Def. 28.7.8 and Prop. 28.7.9, p. 905; hassani-2013:Def. 28.7.13, p. 908"}
Let $(M,\omega)$ be a symplectic manifold. Nondegeneracy makes $\omega^{\flat}$ a bundle isomorphism $TM \to T^{*}M$, so a $1$-form can be converted into a vector field. Applying this to the differential of a function:

- The **Hamiltonian vector field** of $f \in C^{\infty}(M)$ is the unique smooth vector field $X_f$ with
  $$
  \iota_{X_f}\omega = df, \qquad\text{equivalently}\qquad \omega(X_f, Y) = Yf \ \text{ for every vector field } Y .
  $$
  Hassani writes the same field as $X_f = \omega^{\sharp}(df)$. It is the symplectic counterpart of the gradient, but, as part 4 below shows, it behaves quite unlike one.
- A **Hamiltonian system** is a symplectic manifold together with a chosen $H \in C^{\infty}(M)$, the **Hamiltonian**; the integral curves of $X_H$ are the **trajectories** of the system, and the flow of $X_H$ is its **Hamiltonian flow**.
- A function $f$ constant on every trajectory is a **conserved quantity** (a first integral) of the system.
- The **Poisson bracket** of $f, g \in C^{\infty}(M)$ is
  $$
  \{f, g\} = \omega(X_f, X_g) = df(X_g) = X_g f \in C^{\infty}(M).
  $$
  Two functions **Poisson commute** when $\{f,g\} = 0$. The last expression is the one to remember: $\{f,g\}$ measures how fast $f$ changes along the Hamiltonian flow of $g$.
- A vector field $X$ on $M$ is **symplectic** if $\omega$ is invariant under its flow; **Hamiltonian** if $X = X_f$ for some $f \in C^{\infty}(M)$; **locally Hamiltonian** if every point has a neighbourhood on which $X$ is Hamiltonian.
:::

:::note[Signs, orderings and which book does what]{provenance=adapted src="lee-2013:Prop. 22.11, pp. 569–570 and Prop. 22.8, p. 567; hassani-2013:Thm 28.7.2, p. 902 and Prop. 28.7.14, p. 908; gelfand-fomin-1963:§17, p. 71"}
Everything below uses $\iota_{X_f}\omega = df$ and $\omega = \sum_i dx^i\wedge dy^i$ in Darboux coordinates. With that pair of choices:

- The Poisson bracket comes out as $\{f,g\} = \sum_i(\partial_{x^i}f\,\partial_{y^i}g - \partial_{y^i}f\,\partial_{x^i}g)$, which is :cite[Gelfand and Fomin's]{work=gelfand-fomin-1963 loc="§17, p. 71"} classical bracket $[\Phi, H]$ with $(y_i, p_i)$ in place of $(x^i, y^i)$, and :cite[Hassani's]{work=hassani-2013 loc="Prop. 28.7.14, p. 908"} bracket in canonical coordinates $(q^i, p_i)$. The three agree, so the handbook's :ref[canonical equations]{to=var.canonical-equations} and this unit use one and the same sign.
- On a cotangent bundle the canonical form is $\omega = -d\tau$, not $+d\tau$, where $\tau$ is the tautological $1$-form; :cite[Lee]{work=lee-2013 loc="Prop. 22.11, p. 569"} is explicit about the minus, and it is exactly what makes $\omega = \sum_i dq^i\wedge dp_i$ rather than its negative.
- The **ordering** inside the Liouville form is a genuine fork. Lee's computation of $\omega^n$ gives $\omega^n/n! = dx^1\wedge dy^1\wedge\cdots\wedge dx^n\wedge dy^n$, alternating the two families. :cite[Hassani]{work=hassani-2013 loc="Thm 28.7.2, p. 902"} instead writes the volume element of a symplectic chart as $\mu_\omega = dx^1\wedge\cdots\wedge dx^n\wedge dy^1\wedge\cdots\wedge dy^n$, all the $x$'s first. Sorting one into the other takes $0 + 1 + \cdots + (n-1)$ transpositions, so
  $$
  \frac{\omega^n}{n!} = (-1)^{n(n-1)/2}\,\mu_\omega .
  $$
  For $n = 1$ the two agree; for $n = 2$ they differ by a sign. Nothing in this unit depends on the choice, because every statement here is about a form being *preserved*, but an orientation or an integral computed from one convention and compared with the other will be out by that sign.
- Hassani's Darboux theorem (Thm 28.7.2) is stated for a $2$-form on a $2n$-manifold as the equivalence "$d\omega = 0$ if and only if canonical charts exist". Read literally that would make every closed $2$-form, the zero form included, locally standard, which is false; the nondegeneracy of $\omega$ is carried silently from the surrounding section on symplectic forms. The statement below follows Lee, who asks for a symplectic form outright.
:::

:::statement[What a symplectic structure provides]{provenance=adapted src="lee-2013:Props. 22.7–22.8, pp. 566–567; lee-2013:p. 568; lee-2013:Prop. 22.11, pp. 569–570; lee-2013:Thm 22.13, p. 571; lee-2013:(22.9) and Props. 22.16–22.17, pp. 574–576; lee-2013:(22.15)–(22.16), Prop. 22.19 and Cor. 22.20, pp. 578–579; lee-2013:Prop. 22.21, p. 580; hassani-2013:Prop. 28.7.9, p. 905; hassani-2013:Thm 28.7.10, p. 906; hassani-2013:Prop. 28.7.11 and Cor. 28.7.12, pp. 907–908"}
Let $(M,\omega)$ be a symplectic manifold and $f, g, h, H \in C^{\infty}(M)$.

1. **Even dimension, orientability, volume.** $M$ has even dimension $2n$; the $2n$-form $\omega^n$ vanishes nowhere; consequently $M$ is orientable and $\omega^n/n!$ is a volume form on it.

2. **Darboux's theorem.** Every point of $M$ lies in the domain of Darboux coordinates centred at it. There is thus no local invariant of a symplectic structure: all symplectic manifolds of the same dimension look alike near a point.

3. **Cotangent bundles.** Let $Q$ be a smooth manifold and $\pi : T^{*}Q \to Q$ the projection of :ref[the cotangent bundle]{to=geom.vector-bundles}. The **tautological $1$-form** $\tau$ on the total space $T^{*}Q$, defined at the point $(q,\varphi)$ by $\tau_{(q,\varphi)} = d\pi^{*}_{(q,\varphi)}\varphi$ — that is, $\tau_{(q,\varphi)}(v) = \varphi\bigl(d\pi_{(q,\varphi)}(v)\bigr)$ — is a smooth $1$-form, and the $2$-form
   $$
   \omega = -\,d\tau
   $$
   is symplectic; it is the **canonical symplectic form** of the cotangent bundle. In the natural coordinates $(q^i, p_i)$ induced by coordinates $q^i$ on $Q$,
   $$
   \tau = p_i\,dq^i, \qquad \omega = \sum_{i=1}^{n} dq^i\wedge dp_i ,
   $$
   so natural coordinates are automatically Darboux coordinates.

4. **Hamiltonian vector fields.** $X_f$ exists, is unique and is smooth. In any Darboux coordinates
   $$
   X_f = \sum_{i=1}^{n}\left(\frac{\partial f}{\partial y^i}\frac{\partial}{\partial x^i} - \frac{\partial f}{\partial x^i}\frac{\partial}{\partial y^i}\right),
   $$
   so on $T^{*}Q$ with natural coordinates the trajectories of $H$ are the solutions of **Hamilton's equations**
   $$
   \dot q^i = \frac{\partial H}{\partial p_i}, \qquad \dot p_i = -\frac{\partial H}{\partial q^i} .
   $$
   Moreover $f$ is constant along every integral curve of $X_f$, and at each regular point of $f$ the field $X_f$ is tangent to the level set of $f$. In particular the energy $H$ is conserved by its own flow.

5. **The Poisson bracket.** In Darboux coordinates
   $$
   \{f,g\} = \sum_{i=1}^{n}\left(\frac{\partial f}{\partial x^i}\frac{\partial g}{\partial y^i} - \frac{\partial f}{\partial y^i}\frac{\partial g}{\partial x^i}\right),
   $$
   and on $T^{*}Q$ in natural coordinates $\{q^i,q^j\} = 0$, $\{p_i,p_j\} = 0$, $\{q^i,p_j\} = \delta^i_j$. The bracket is $\mathbb{R}$-bilinear, antisymmetric, satisfies the Jacobi identity
   $$
   \{\{f,g\},h\} + \{\{g,h\},f\} + \{\{h,f\},g\} = 0 ,
   $$
   and relates to the Lie bracket of vector fields by
   $$
   X_{\{f,g\}} = -\,[X_f, X_g] .
   $$
   Hence $\bigl(C^{\infty}(M), \{\cdot,\cdot\}\bigr)$ is a Lie algebra, and $f \mapsto X_f$ is a Lie algebra antihomomorphism onto the Hamiltonian vector fields.

6. **Conserved quantities.** Along the flow of $X_H$ a function evolves by $\dot f = \{f, H\}$; so $f$ is a conserved quantity of $(M,\omega,H)$ if and only if $\{f,H\} = 0$. Conserved quantities are closed under the bracket.

7. **Hamiltonian flows preserve $\omega$, and Liouville's theorem.** If $\theta$ is the flow of $X_H$ then $\theta_t^{*}\omega = \omega$ on the set where $\theta_t$ is defined: every time-$t$ map is a symplectomorphism, a canonical transformation. Consequently $\theta_t^{*}(\omega^n/n!) = \omega^n/n!$, so the Hamiltonian flow preserves phase volume. This is **Liouville's theorem**. More generally a smooth vector field is symplectic exactly when it is locally Hamiltonian; and when $H^1_{\mathrm{dR}}(M) = 0$ — this vanishing being exactly what is required — each locally Hamiltonian field turns out to be the Hamiltonian field of a function defined on all of $M$.
:::

:::idea{provenance=original}
Nondegeneracy is a statement of linear algebra at each point, and all of part 1 and part 2's pointwise shadow come from running Gram–Schmidt with $\omega$ in place of an inner product: pick $A_1 \ne 0$, find $B_1$ pairing with it, split off the plane they span, and recurse on its $\omega$-orthogonal complement. Pairs come out two at a time, which is why the dimension is even; and in the resulting basis $\omega^n$ is a nonzero multiple of the top basis covector, which is what makes $\omega^n$ a volume form. The cotangent bundle carries a $1$-form for a tautological reason — a point of $T^{*}Q$ *is* a covector, so it can be pulled back to the point itself — and in natural coordinates that form is $p_i\,dq^i$, whose exterior derivative is the standard symplectic form up to sign. Everything about $X_f$ and $\{f,g\}$ is then bookkeeping with $\omega^{\flat}$ in Darboux coordinates. The one genuinely non-formal input is closedness, and it enters through Cartan's formula $\mathcal{L}_X = \iota_X d + d\,\iota_X$: for a Hamiltonian field the second term is $d(df) = 0$ and the first contains $d\omega$, so when $d\omega = 0$ the whole Lie derivative vanishes and the flow moves $\omega$ not at all. Liouville's theorem is then automatic, because a map preserving $\omega$ preserves anything built out of $\omega$.
:::

:::proof[Parts 1, 3, 4, 5, 6 and 7]{provenance=adapted src="lee-2013:proofs of Props. 22.7–22.8, pp. 567; lee-2013:proof of Prop. 22.11, pp. 569–570; lee-2013:the computation of (22.9), pp. 574–575; lee-2013:proofs of Props. 22.16, 22.17 and 22.19, pp. 575–576, 579; lee-2013:Thm 14.35, p. 372; lee-2013:Thm 12.37, p. 324; hassani-2013:Thm 28.5.10, p. 891; hassani-2013:proof of Prop. 28.7.11, p. 908"}
*Part 1: a symplectic basis.* Work in one tangent space $V = T_pM$ with $\omega = \omega_p$. We induct on $m = \dim V$, the case $m = 0$ being vacuous. For $m \ge 1$, choose $A_1 \ne 0$; **nondegeneracy** supplies $B_1$ with $\omega(A_1,B_1) \ne 0$, and rescaling $B_1$ makes $\omega(A_1,B_1) = 1$. Since $\omega$ is alternating, $\omega(A_1,A_1) = 0$, so $B_1$ is not a multiple of $A_1$ and $S = \operatorname{span}(A_1,B_1)$ is $2$-dimensional. Let

$$
S^{\perp} = \{v \in V : \omega(v,w) = 0 \ \text{for all } w \in S\} .
$$

Then $\dim S + \dim S^{\perp} = \dim V$: the map $v \mapsto \omega(v,\cdot)|_S$ from $V$ to $S^{*}$ has kernel $S^{\perp}$ and is onto, because any $\varphi \in S^{*}$ extends to $V^{*}$ and $\omega^\flat$ is surjective, so the rank–nullity theorem applies. Also $S \cap S^{\perp} = \{0\}$, since $\omega|_S$ has matrix $\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$, which is invertible; hence $V = S \oplus S^{\perp}$ and $\omega|_{S^{\perp}}$ is again nondegenerate. By the inductive hypothesis $S^{\perp}$ has even dimension and a basis $(A_2,B_2,\dots,A_n,B_n)$ with $\omega(A_i,A_j) = \omega(B_i,B_j) = 0$ and $\omega(A_i,B_j) = \delta_{ij}$; adjoining $A_1, B_1$ gives such a basis of $V$, and $\dim V = 2n$.

Let $(\alpha^i,\beta^i)$ be the dual basis. The relations just listed say precisely that $\omega = \sum_i \alpha^i\wedge\beta^i$. Expanding the $n$-fold wedge, every term with a repeated index dies, the $n!$ surviving terms are equal because $2$-forms commute under $\wedge$, and so

$$
\omega^n = n!\;\alpha^1\wedge\beta^1\wedge\cdots\wedge\alpha^n\wedge\beta^n \ne 0 .
$$

As $p$ varies this is a nowhere-vanishing $2n$-form on $M$, which is exactly an orientation together with a volume form; dividing by $n!$ normalises it so that it reads $dx^1\wedge dy^1\wedge\cdots\wedge dx^n\wedge dy^n$ in Darboux coordinates.

*Part 3: the cotangent bundle.* Let $q^i$ be coordinates on $Q$ and $(q^i,p_i)$ the induced natural coordinates on $T^{*}Q$, so that the point with these coordinates is the covector $p_i\,dq^i$ at the point with coordinates $q^i$. In them $\pi(q,p) = q$, hence $d\pi^{*}(dq^i) = dq^i$, and therefore

$$
\tau_{(q,p)} = d\pi^{*}_{(q,p)}\bigl(p_i\,dq^i\bigr) = p_i\,dq^i .
$$

Its components are linear, so $\tau$ is smooth. Then

$$
\omega = -d\tau = -\,dp_i\wedge dq^i = \sum_i dq^i\wedge dp_i ,
$$

which is closed because it is exact, and nondegenerate because at each point it is the standard symplectic tensor of part 1 with $(A_i,B_i) = (\partial/\partial q^i, \partial/\partial p_i)$. The sign in $\omega = -d\tau$ is what turns $dp_i\wedge dq^i$ into $dq^i\wedge dp_i$.

*Part 4: the coordinate formula.* Fix Darboux coordinates and write $X_f = \sum_i\bigl(a^i\,\partial/\partial x^i + b^i\,\partial/\partial y^i\bigr)$. Feeding this into $\omega = \sum_i dx^i\wedge dy^i$ and using $\iota_X(\alpha\wedge\beta) = (\iota_X\alpha)\wedge\beta - \alpha\wedge(\iota_X\beta)$ for $1$-forms gives

$$
\iota_{X_f}\omega = \sum_i\bigl(a^i\,dy^i - b^i\,dx^i\bigr).
$$

Setting this equal to $df = \sum_i\bigl(\partial_{x^i}f\,dx^i + \partial_{y^i}f\,dy^i\bigr)$ and comparing coefficients of the independent $1$-forms $dx^i, dy^i$ yields $a^i = \partial f/\partial y^i$ and $b^i = -\partial f/\partial x^i$, which is the stated formula. Existence and uniqueness of $X_f$ are immediate from **nondegeneracy**: $\omega^{\flat}$ is a bundle isomorphism, so $X_f = (\omega^{\flat})^{-1}(df)$ is defined and unique, and it is smooth because $\omega^\flat$ and $df$ are. Writing out $\gamma'(t) = X_H|_{\gamma(t)}$ in natural coordinates on $T^{*}Q$ gives Hamilton's equations.

That $f$ is constant along the integral curves of $X_f$ is a one-line consequence of $\omega$ being **alternating**:

$$
X_f f = df(X_f) = \omega(X_f, X_f) = 0 .
$$

Since the derivative of $f$ along $X_f$ vanishes, $f\circ\gamma$ is constant for every integral curve $\gamma$; and where $df_p \ne 0$ the level set of $f$ through $p$ is an embedded hypersurface whose tangent space is $\ker df_p$, which contains $X_f|_p$.

*Part 5: the bracket.* The coordinate formula follows from $\{f,g\} = X_g f$ and part 4. For the three algebraic properties, note first that $f \mapsto X_f$ is $\mathbb{R}$-linear, so bilinearity and antisymmetry are read off from $\{f,g\} = \omega(X_f,X_g)$ together with the antisymmetry of $\omega$. For $X_{\{f,g\}} = -[X_f,X_g]$ it is enough, again by **nondegeneracy**, to check that

$$
\omega\bigl(X_{\{f,g\}}, Y\bigr) + \omega\bigl([X_f,X_g], Y\bigr) = 0
$$

for every vector field $Y$. The first term is $d\{f,g\}(Y) = Y\{f,g\} = Y X_g f$. For the second, use that $X_g$ is symplectic (part 7, whose proof below does not use part 5) so that $\mathcal{L}_{X_g}\omega = 0$, and expand that Lie derivative on the pair $(X_f, Y)$ by the derivation rule for a $2$-tensor:

$$
0 = X_g\bigl(\omega(X_f,Y)\bigr) - \omega\bigl([X_g,X_f],Y\bigr) - \omega\bigl(X_f,[X_g,Y]\bigr).
$$

The first term is $X_g(df(Y)) = X_gYf$. The third is $df([X_g,Y]) = X_gYf - YX_gf = X_gYf - \omega(X_{\{f,g\}},Y)$. Substituting both and cancelling $X_gYf$ leaves $-\omega([X_g,X_f],Y) + \omega(X_{\{f,g\}},Y) = 0$, which is the displayed identity since $[X_g,X_f] = -[X_f,X_g]$.

The Jacobi identity now follows without further geometry. Using $\{f,\cdot\} $ twice and the identity just proved,

$$
\{f,\{g,h\}\} = X_{\{g,h\}}f = -[X_g,X_h]f = -X_gX_hf + X_hX_gf = -X_g\{f,h\} + X_h\{f,g\},
$$

that is, $\{f,\{g,h\}\} = \{\{f,g\},h\} - \{\{f,h\},g\}$. Antisymmetry rewrites the left-hand side as $-\{\{g,h\},f\}$ and the subtracted term as $-\{\{h,f\},g\}$, so the identity becomes $-\{\{g,h\},f\} = \{\{f,g\},h\} + \{\{h,f\},g\}$, which is the cyclic sum vanishing.

*Part 6.* Let $\gamma$ be a trajectory, so $\gamma' = X_H\circ\gamma$. Then $(f\circ\gamma)'(t) = df(X_H) = X_Hf = \{f,H\}$ at $\gamma(t)$. Hence $f$ is constant on every trajectory if and only if $\{f,H\}$ vanishes on every trajectory, and since a trajectory passes through each point of $M$, if and only if $\{f,H\} \equiv 0$. If $\{f,H\} = \{g,H\} = 0$, apply the Jacobi identity to the triple $(f,g,H)$: it gives $\{\{f,g\},H\} = -\{\{g,H\},f\} - \{\{H,f\},g\}$, and both terms on the right vanish because $\{g,H\} = 0$ and $\{H,f\} = -\{f,H\} = 0$. So conserved quantities are closed under the bracket. Taking $f = H$ recovers conservation of energy from antisymmetry.

*Part 7.* By Cartan's magic formula, valid for any vector field and any form,

$$
\mathcal{L}_X\omega = \iota_X(d\omega) + d(\iota_X\omega).
$$

**Closedness** kills the first term, so $\mathcal{L}_X\omega = d(\iota_X\omega)$ for every $X$. If $X = X_H$ then $\iota_{X_H}\omega = dH$ and $d(dH) = 0$, so $\mathcal{L}_{X_H}\omega = 0$; and a covariant tensor field has vanishing Lie derivative along $X$ exactly when it is invariant under the flow of $X$, so $\theta_t^{*}\omega = \omega$ wherever $\theta_t$ is defined. Pullback commutes with $\wedge$, hence $\theta_t^{*}(\omega^n) = (\theta_t^{*}\omega)^n = \omega^n$ and the Liouville volume is preserved; integrating, $\int_{\theta_t(A)}\omega^n/n! = \int_A\omega^n/n!$ for every domain $A$ on which this makes sense.

The general statement is the same computation read backwards. $X$ is symplectic iff $\mathcal{L}_X\omega = 0$ iff the $1$-form $\iota_X\omega$ is closed. If $X$ is locally Hamiltonian, then near each point $\iota_X\omega = df$ is exact, hence closed. Conversely if $\iota_X\omega$ is closed then by :ref[the Poincaré lemma]{to=geom.poincare-lemma} each point has a neighbourhood on which $\iota_X\omega = df$ for some $f$, and nondegeneracy upgrades this to $X = X_f$ there. Finally, the closed $1$-forms are all exact exactly when $H^1_{\mathrm{dR}}(M) = 0$: in that case $\iota_X\omega = df$ globally, so a symplectic $X$ is globally Hamiltonian; and conversely, given a closed $1$-form $\sigma$, the field $X = (\omega^{\flat})^{-1}\sigma$ is symplectic, hence by hypothesis equals some $X_f$, and then $\sigma = \iota_X\omega = df$ is exact. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Nondegeneracy** is what makes $f \mapsto X_f$ possible at all: it is the invertibility of $\omega^{\flat}$. Drop it and almost everything collapses. The extreme case $\omega = 0$ on $\mathbb{R}^2$ is closed and alternating, but $\iota_X\omega = df$ has no solution unless $df = 0$, so no function generates a flow. Nondegeneracy also forces the dimension to be even, by the pairing argument in part 1, and supplies the volume form, since $\omega^n \ne 0$ is equivalent to nondegeneracy. Hassani records the same equivalence as his Prop. 26.4.4.
- **Closedness** is used in exactly two places, and both fail without it. (i) In part 7 the term $\iota_X(d\omega)$ in Cartan's formula drops only because $d\omega = 0$; with $d\omega \ne 0$ a Hamiltonian flow need not preserve $\omega$, and Liouville's theorem is lost. (ii) The Jacobi identity is derived from $X_{\{f,g\}} = -[X_f,X_g]$, which in turn used $\mathcal{L}_{X_g}\omega = 0$, that is, part 7. So without closedness the bracket need not be a Lie bracket.

  A concrete failure: on $\mathbb{R}^4$ with coordinates $(x^1,y^1,x^2,y^2)$ take
  $$
  \omega = dx^1\wedge dy^1 + e^{x^1}\,dx^2\wedge dy^2 .
  $$
  It is nondegenerate — its matrix is block diagonal with determinant $e^{2x^1} \ne 0$ — but $d\omega = e^{x^1}\,dx^1\wedge dx^2\wedge dy^2 \ne 0$. Solving $\iota_X\omega = df$ gives
  $$
  X_f = \frac{\partial f}{\partial y^1}\frac{\partial}{\partial x^1} - \frac{\partial f}{\partial x^1}\frac{\partial}{\partial y^1} + e^{-x^1}\left(\frac{\partial f}{\partial y^2}\frac{\partial}{\partial x^2} - \frac{\partial f}{\partial x^2}\frac{\partial}{\partial y^2}\right),
  $$
  so $\{f,g\} = \partial_{x^1}f\,\partial_{y^1}g - \partial_{y^1}f\,\partial_{x^1}g + e^{-x^1}\bigl(\partial_{x^2}f\,\partial_{y^2}g - \partial_{y^2}f\,\partial_{x^2}g\bigr)$. Take $f = y^1$, $g = x^2$, $h = y^2$. Then $\{g,h\} = e^{-x^1}$ while $\{f,g\} = \{h,f\} = 0$, so the cyclic sum reduces to $\{\{g,h\},f\} = \{e^{-x^1}, y^1\} = -e^{-x^1}$, which equals $-1$ on the hyperplane $x^1 = 0$. The Jacobi identity fails, by a margin that is exactly as large as $d\omega$.
- **Alternating** is used on its own in part 4: $\omega(X_f,X_f) = 0$ is the whole proof that $f$ is conserved by its own flow. A symmetric nondegenerate form — a metric — gives the gradient instead, and a function is emphatically *not* constant along its own gradient flow.
- **Darboux's theorem needs both hypotheses and is proved elsewhere.** It is the one statement above not proved here. Lee proves it by Moser's method: interpolate between $\omega$ and its constant-coefficient approximation at $p$ by $\omega_t$, solve $\iota_{V_t}\omega_t = \alpha$ for a time-dependent field, and let its flow carry one to the other. Hassani states it without proof. The contrast with Riemannian geometry is the point: a metric has local invariants (curvature), a symplectic form has none.
- **$H^1_{\mathrm{dR}}(M) = 0$** is needed only for the last clause of part 7, and it genuinely bites. On $M = \mathbb{R}^2\setminus\{0\}$ with $\omega = dx\wedge dy$, take
  $$
  X = \frac{x\,\partial/\partial x + y\,\partial/\partial y}{x^2+y^2},
  \qquad\text{so}\qquad
  \iota_X\omega = \frac{x\,dy - y\,dx}{x^2+y^2} = d\vartheta ,
  $$
  the angle form. It is closed, so $\mathcal{L}_X\omega = d(\iota_X\omega) = 0$ and $X$ is symplectic — its flow pushes points radially outward at the rate $\dot r = 1/r$, carrying the annulus $a \le r \le b$ to $\sqrt{a^2+2t} \le r \le \sqrt{b^2+2t}$ and preserving its area $\pi(b^2-a^2)$, as it must. But $d\vartheta$ is not exact on $M$, where $H^1_{\mathrm{dR}} \cong \mathbb{R}$, so there is no global $f$ with $X = X_f$: the only candidate is the polar angle, which is not single-valued. Locally, on any half-plane, a branch of $\vartheta$ does the job.
:::

:::method[Working on a symplectic manifold]{provenance=original}
1. **Get Darboux coordinates.** If the manifold is a cotangent bundle $T^{*}Q$ — which it is in mechanics, with $Q$ the configuration space — use the natural coordinates $(q^i,p_i)$: part 3 says they are already Darboux coordinates. Otherwise find coordinates in which $\omega = \sum_i dx^i\wedge dy^i$; Darboux's theorem promises they exist locally.
2. **Check that a given $2$-form is symplectic.** Compute $d\omega$ and confirm it vanishes; then write the matrix $\omega_{ij}$ in a coordinate frame and confirm $\det(\omega_{ij}) \ne 0$ at every point. Equivalently, check $\omega^n \ne 0$.
3. **Build $X_f$.** Either solve $\iota_{X}\omega = df$ coefficient by coefficient, or, in Darboux coordinates, write down $X_f = \sum_i(\partial_{y^i}f\,\partial_{x^i} - \partial_{x^i}f\,\partial_{y^i})$ directly.
4. **Test a conserved quantity** by computing $\{f,H\}$ in coordinates: it vanishes identically if and only if $f$ is constant on every trajectory. This is cheaper than solving the equations of motion, and is how first integrals are found in practice.
5. **Test a canonical transformation.** A diffeomorphism $F$ is a symplectomorphism iff $F^{*}\omega = \omega$. In Darboux coordinates with $F = (X(x,y), Y(x,y))$ this reads $\sum_i dX^i\wedge dY^i = \sum_i dx^i\wedge dy^i$; for a linear $F$ with matrix $A$ it is the matrix condition $A^{\mathsf T}JA = J$, with $J$ the matrix of $\omega$.
6. **Phase volume.** Compute $\omega^n/n!$ once in Darboux coordinates; by part 7 you may then move any region along any Hamiltonian flow without recomputing its volume.
:::

:::example[A planar oscillator: energy, angular momentum and phase volume]{provenance=original}
Take $Q = \mathbb{R}^2$ with coordinates $q = (q^1,q^2)$, so $M = T^{*}Q = \mathbb{R}^4$ with natural coordinates $(q^1,q^2,p_1,p_2)$ and $\omega = dq^1\wedge dp_1 + dq^2\wedge dp_2$. Let the Hamiltonian be that of an isotropic oscillator of unit mass and spring constant $k = 4$:

$$
H = \tfrac12\bigl(p_1^2 + p_2^2\bigr) + 2\bigl((q^1)^2 + (q^2)^2\bigr).
$$

*The Hamiltonian vector field.* By part 4,

$$
X_H = p_1\frac{\partial}{\partial q^1} + p_2\frac{\partial}{\partial q^2} - 4q^1\frac{\partial}{\partial p_1} - 4q^2\frac{\partial}{\partial p_2},
$$

so Hamilton's equations are $\dot q^i = p_i$, $\dot p_i = -4q^i$: two uncoupled oscillators of angular frequency $2$.

*A trajectory.* Start at $(q^1,q^2,p_1,p_2) = (1,0,0,3)$. The solution is

$$
q^1 = \cos 2t,\quad p_1 = -2\sin 2t,\qquad q^2 = \tfrac32\sin 2t,\quad p_2 = 3\cos 2t .
$$

(Check: $\dot q^2 = 3\cos 2t = p_2$ and $\dot p_2 = -6\sin 2t = -4\cdot\tfrac32\sin 2t = -4q^2$.)

*Energy.* $H = \tfrac12(4\sin^2 2t + 9\cos^2 2t) + 2(\cos^2 2t + \tfrac94\sin^2 2t) = \tfrac{13}{2}$, constant, as part 4 requires. Numerically at $t = 0.4$: $q^1 = 0.6967067$, $p_1 = -1.4347122$, $q^2 = 1.0760341$, $p_2 = 2.0901201$, and

$$
H = \tfrac12(2.0583 + 4.3686) + 2(0.48540 + 1.15785) = 3.21345 + 3.28655 = 6.5 ,
$$

against $H = \tfrac12\cdot 9 + 2\cdot 1 = 6.5$ at $t = 0$.

*Angular momentum is conserved, without solving anything.* Put $L = q^1p_2 - q^2p_1$. Then $\partial_{q^1}L = p_2$, $\partial_{q^2}L = -p_1$, $\partial_{p_1}L = -q^2$, $\partial_{p_2}L = q^1$, while $\partial_{q^i}H = 4q^i$ and $\partial_{p_i}H = p_i$. By part 5,

$$
\{L,H\} = \bigl(p_2p_1 + 4q^1q^2\bigr) + \bigl(-p_1p_2 - 4q^1q^2\bigr) = 0 ,
$$

so by part 6, $L$ is a conserved quantity. Checking against the trajectory: $L = 1\cdot 3 - 0\cdot 0 = 3$ at $t=0$, and at $t = 0.4$

$$
L = 0.6967067\times 2.0901201 - 1.0760341\times(-1.4347122) = 1.456222 + 1.543778 = 3.000000 .
$$

*Phase volume.* Here $n = 2$ and $\omega^2/2! = dq^1\wedge dp_1\wedge dq^2\wedge dp_2$. The time-$t$ map acts on the $(q^1,p_1)$ plane by the matrix

$$
A(t) = \begin{pmatrix}\cos 2t & \tfrac12\sin 2t\\[2pt] -2\sin 2t & \cos 2t\end{pmatrix},
\qquad \det A(t) = \cos^2 2t + \sin^2 2t = 1 ,
$$

and likewise on $(q^2,p_2)$, so the Jacobian determinant of $\theta_t$ is $1\cdot 1 = 1$ and phase volume is preserved — Liouville's theorem made arithmetic. At $t = 0.4$ the entries are $0.6967067$, $0.3586780$, $-1.4347122$, $0.6967067$, and $0.6967067^2 + 0.3586780\times 1.4347122 = 0.485400 + 0.514600 = 1.000000$.

*A map that is not canonical.* The dilation $(q,p)\mapsto(2q,p)$ pulls $\omega$ back to $2\,dq^1\wedge dp_1 + 2\,dq^2\wedge dp_2 = 2\omega$, so it is not a symplectomorphism and multiplies phase volume by $2^2 = 4$. No Hamiltonian flow can reach it.
:::

:::application{provenance=original}
Symplectic geometry is the coordinate-free form of Hamiltonian mechanics. The configuration space of a mechanical system is a manifold $Q$ — a circle for a pendulum, $SO(3)$ for a rigid body, a submanifold of $\mathbb{R}^{3N}$ for constrained particles — and part 3 says its phase space $T^{*}Q$ comes with a symplectic form for free, with no choice of coordinates and no metric. The Legendre transformation of :ref[the canonical equations]{to=var.canonical-equations} is what moves a Lagrangian on $TQ$ to a Hamiltonian on $T^{*}Q$, and Hamilton's equations are then nothing but the statement that the motion is an integral curve of $X_H$. Because the formulation is coordinate-free, the "canonical transformations" that classical mechanics uses to simplify a problem — action–angle variables, generating functions, the Hamilton–Jacobi substitution of :ref[the Hamilton–Jacobi equation]{to=var.hamilton-jacobi} — are exactly the symplectomorphisms, and a change of variables is legitimate precisely when it preserves $\omega$.

Liouville's theorem is the foundation of statistical mechanics. A probability density $\rho$ on phase space evolves so that $\rho\,\omega^n/n!$ is carried along by the flow; since the flow preserves $\omega^n/n!$, the density is constant along trajectories, which is Liouville's equation $\partial_t\rho + \{\rho, H\} = 0$ and the reason the microcanonical ensemble — uniform measure on an energy shell — is stationary. In accelerator and plasma physics the same statement is the conservation of emittance: a beam's phase-space area cannot be reduced by any Hamiltonian optics, only reshaped.

The correspondence $\{\cdot,\cdot\} \leftrightarrow \tfrac{1}{i\hbar}[\cdot,\cdot]$ between the Poisson bracket and the commutator is the bridge to quantum mechanics; the relations $\{q^i,p_j\} = \delta^i_j$ of part 5 become the canonical commutation relations, and part 5's statement that $C^\infty(M)$ is a Lie algebra is what makes the comparison meaningful. In numerical work, symplectic integrators (leapfrog, Störmer–Verlet and their higher-order relatives) are designed so that each step is exactly a symplectomorphism; they do not conserve energy exactly, but because they preserve a nearby symplectic structure their energy error stays bounded over times at which an ordinary Runge–Kutta scheme has drifted away, which is why solar-system integrations over millions of years are done with them. Finally, the identification of a conserved quantity with a symmetry — a function $f$ with $\{f,H\} = 0$ generates a flow preserving $H$, and conversely — is the Hamiltonian face of :ref[Noether's theorem]{to=var.noether-theorem}, and on a Riemannian manifold the symmetries in question are generated by :ref[Killing vector fields]{to=geom.killing-vectors}.
:::
