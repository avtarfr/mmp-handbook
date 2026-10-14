---
id: geom.pullbacks-pushforwards
title: Pushforwards, pullbacks and immersions
kind: definition
level: advanced
summary: Gives the one linear map a smooth map induces between tangent spaces, the operation in the opposite direction it induces on covariant tensors and forms, a rule for computing both in coordinates, and the names for maps whose differential is everywhere injective or everywhere surjective.
prereqs: [geom.tangent-vectors, geom.differential-forms, geom.smooth-manifolds, found.implicit-inverse-function]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 3, definition of $dF_p$ and Prop. 3.6, p. 55; the coordinate formulas (3.9)–(3.10) and the names pushforward and tangent map, pp. 61–63; Ch. 4, rank, submersions and immersions with Prop. 4.1, pp. 77–78; Prop. 4.8, p. 80; Rank Theorem 4.12, p. 81; smooth embeddings, Examples 4.18–4.20 and Prop. 4.22, pp. 85–87; Ch. 11, pointwise pullback $dF_p^*$ and the pullback covector field, eq. (11.13) and Prop. 11.25, pp. 284–285; Ch. 12, pullback of covariant tensor fields, Prop. 12.25 and Cor. 12.28, pp. 320–321; Ch. 13, pullback metrics and Prop. 13.9, pp. 330–331; Ch. 14, Lemma 14.16 and Prop. 14.20, pp. 361–362"
    pages: "55, 61-63, 77-78, 80-81, 85-87, 284-285, 320-321, 330-331, 361-362"
    role: the definitions of the differential, the pointwise pullback and the pullback of covariant tensor fields and forms; the coordinate substitution rule; the rank theorem and its immersion and submersion normal forms; the definitions of immersion, submersion and embedding and the counterexamples separating them; the pullback-metric criterion
  - work: docarmo-2016
    loc: "§2-4, Prop. 1 and Prop. 2 with the surrounding discussion of the tangent plane and of $d\\varphi_p$, pp. 86–87; §5-10, the isometric immersion of the flat torus in $\\mathbb{R}^4$ and Definition 7 of an embedding, pp. 440–441"
    pages: "86-87, 440-441"
    role: the curve definition of the differential of a map between surfaces and its independence of the chosen curve; the definition of an embedding for abstract surfaces, and the flat torus as a surface that immerses isometrically in $\mathbb{R}^4$ but not in $\mathbb{R}^3$
  - work: hassani-2013
    loc: "§28.5, Definition 28.5.2 of the pullback on $p$-forms and the two identities (28.37), p. 888"
    pages: "888"
    role: the definition of the pullback of a $p$-form by its action on pushed-forward vectors, and the statements that the pullback commutes with the wedge product and reverses composition
---

:::definition[The differential and the pushforward]{provenance=adapted src="lee-2013:Ch. 3, p. 55 and eqs. (3.9)–(3.10), pp. 61–63; docarmo-2016:§2-4, Props. 1–2, pp. 86–87"}
Let $M$ and $N$ be smooth manifolds (:ref[smooth manifolds]{to=geom.smooth-manifolds}) and let $F : M \to N$ be smooth. Tangent vectors are derivations, as in :ref[tangent vectors and vector fields]{to=geom.tangent-vectors}.

- The **differential of $F$ at $p \in M$** is the map
  $$
  dF_p : T_pM \to T_{F(p)}N, \qquad \bigl(dF_p v\bigr)(f) = v(f \circ F)
  \quad\text{for } f \in C^\infty(N).
  $$
  It is also called the **pushforward** at $p$ and written $F_{*p}$ or $F_*$; do Carmo and much of the physics literature write $d\varphi_p$ or $\varphi_*$.
- In charts $(U, x^i)$ around $p$ and $(V, y^j)$ around $F(p)$, write $F^j = y^j \circ F$ for the component functions of $F$. Then
  $$
  dF_p\left(\frac{\partial}{\partial x^i}\Big|_p\right) = \frac{\partial F^j}{\partial x^i}(p)\,\frac{\partial}{\partial y^j}\Big|_{F(p)} ,
  $$
  with the summation convention: the matrix of $dF_p$ in the coordinate bases is the Jacobian matrix of $F$ read in those charts.
- A smooth curve $\gamma : J \to M$ has velocity $\gamma'(t) = d\gamma_t(d/dt|_t) \in T_{\gamma(t)}M$, and $(F \circ \gamma)'(t) = dF_{\gamma(t)}\bigl(\gamma'(t)\bigr)$. For surfaces in $\mathbb{R}^3$ this *is* do Carmo's definition: $d\varphi_p(w)$ is the velocity at $0$ of $\varphi \circ \alpha$ for any curve $\alpha$ with $\alpha(0) = p$, $\alpha'(0) = w$.

A single tangent vector pushes forward, but a **vector field** in general does not: $F_*X$ would have to assign a vector to each $q \in N$, and $F^{-1}(q)$ may be empty or contain several points carrying different images. Pushforward of vector fields is defined when $F$ is a diffeomorphism, by $(F_*X)_{F(p)} = dF_p(X_p)$. Covariant objects behave better, as the next definition shows.
:::

:::definition[Pullback of covariant tensors, forms and metrics]{provenance=adapted src="lee-2013:eq. (11.13) and Prop. 11.25, pp. 284–285; lee-2013:Ch. 12, pp. 320–321; lee-2013:Ch. 13, pp. 330–331; lee-2013:Lemma 14.16, p. 361; hassani-2013:Definition 28.5.2, p. 888"}
With $F : M \to N$ smooth and $p \in M$:

- The **pointwise pullback** $dF_p^* : T^k\bigl(T^*_{F(p)}N\bigr) \to T^k\bigl(T^*_pM\bigr)$ sends a covariant $k$-tensor $\alpha$ at $F(p)$ to
  $$
  \bigl(dF_p^*\alpha\bigr)(v_1, \dots, v_k) = \alpha\bigl(dF_p v_1, \dots, dF_p v_k\bigr), \qquad v_1, \dots, v_k \in T_pM .
  $$
  For $k = 1$ this is the dual map $dF_p^* : T^*_{F(p)}N \to T^*_pM$, also called the cotangent map.
- The **pullback** of a covariant $k$-tensor field $A$ on $N$ is the $k$-tensor field $F^*A$ on $M$ with $(F^*A)_p = dF_p^*\bigl(A_{F(p)}\bigr)$. It is defined at every $p \in M$, with no condition on $F$, because the value at $p$ is built from the value of $A$ at the single point $F(p)$. For a function $u$ (a $0$-tensor) the convention is $F^*u = u \circ F$.
- A differential $k$-form is an alternating covariant $k$-tensor field (:ref[differential forms]{to=geom.differential-forms}), and pulling back preserves this, so $F^* : \Omega^k(N) \to \Omega^k(M)$.
- If $g$ is a Riemannian metric on $N$ (:ref[Riemannian manifolds]{to=geom.riemannian-metrics}), $F^*g$ is a symmetric $2$-tensor field on $M$; when it is positive definite it is a metric on $M$, the **pullback metric**.
:::

:::definition[Rank, immersions, submersions, embeddings]{provenance=adapted src="lee-2013:Ch. 4, pp. 77–78 and p. 85"}
Let $F : M \to N$ be smooth, $\dim M = m$, $\dim N = n$.

- The **rank of $F$ at $p$** is the rank of the linear map $dF_p$, equivalently the rank of the Jacobian matrix in any charts. If it is the same number $r$ at every point, $F$ has **constant rank** $r$. Since a linear map's rank is at most the dimension of its domain and of its codomain, the rank is at most $\min\{m, n\}$; $F$ has **full rank at $p$** when it attains this bound there.
- $F$ is a **smooth immersion** if $dF_p$ is injective for every $p$ (equivalently, $F$ has constant rank $m$).
- $F$ is a **smooth submersion** if $dF_p$ is surjective for every $p$ (equivalently, constant rank $n$).
- $F$ is a **smooth embedding** if it is a smooth immersion and also a topological embedding, that is, a homeomorphism from $M$ onto $F(M)$ with the subspace topology. Lee emphasises that this is more than a topological embedding that happens to be smooth; do Carmo's Definition 7 for abstract surfaces is the same requirement.
- $F$ is a **local diffeomorphism** if every $p \in M$ has a neighbourhood $U$ with $F(U)$ open and $F|_U : U \to F(U)$ a diffeomorphism.
:::

:::statement{provenance=adapted src="lee-2013:Prop. 3.6, p. 55; lee-2013:Prop. 4.8, p. 80; lee-2013:Rank Theorem 4.12, p. 81; lee-2013:Prop. 4.22, p. 87; lee-2013:Prop. 11.25 and eq. (11.13), pp. 284–285; lee-2013:Prop. 12.25 and Cor. 12.28, pp. 320–321; lee-2013:Prop. 13.9, p. 331; lee-2013:Lemma 14.16, p. 361; hassani-2013:eq. (28.37), p. 888"}
Let $F : M \to N$ and $G : N \to P$ be smooth and let $p \in M$.

1. **Functoriality.** $dF_p$ is linear; $d(G \circ F)_p = dG_{F(p)} \circ dF_p$; $d(\mathrm{Id}_M)_p = \mathrm{Id}_{T_pM}$. If $F$ is a diffeomorphism then $dF_p$ is an isomorphism with inverse $d(F^{-1})_{F(p)}$.
2. **Pullback is contravariant and multiplicative.** For covariant tensor fields $A, B$ on $N$ and a function $u$ on $N$:
   $$
   F^*(A + B) = F^*A + F^*B, \quad F^*(uB) = (u \circ F)\,F^*B, \quad F^*(A \otimes B) = F^*A \otimes F^*B,
   $$
   $$
   (G \circ F)^*B = F^*(G^*B), \qquad (\mathrm{Id}_N)^*B = B .
   $$
   $F^*B$ is smooth whenever $B$ is. On forms, $F^*(\omega \wedge \eta) = F^*\omega \wedge F^*\eta$, and $F^*(du) = d(u \circ F)$ for smooth $u$.
3. **Coordinate rule.** If $y^j$ are coordinates on a neighbourhood of $F(p)$ and $B = B_{i_1 \dots i_k}\,dy^{i_1} \otimes \cdots \otimes dy^{i_k}$ there, then near $p$
   $$
   F^*B = (B_{i_1 \dots i_k} \circ F)\, d F^{i_1} \otimes \cdots \otimes d F^{i_k}, \qquad F^j = y^j \circ F,
   $$
   and the same substitution with $\wedge$ in place of $\otimes$ computes the pullback of a form. If $\dim M = \dim N = n$ and $x^i$ are coordinates near $p$, then for a continuous $u$,
   $$
   F^*\bigl(u\, dy^1 \wedge \cdots \wedge dy^n\bigr) = (u \circ F)\,(\det DF)\, dx^1 \wedge \cdots \wedge dx^n .
   $$
4. **Rank theorem.** If $F$ has constant rank $r$, then for each $p$ there are charts $(U, \varphi)$ centred at $p$ and $(V, \psi)$ centred at $F(p)$ with $F(U) \subset V$, in which
   $$
   \widehat F\bigl(x^1, \dots, x^r, x^{r+1}, \dots, x^m\bigr) = \bigl(x^1, \dots, x^r, 0, \dots, 0\bigr).
   $$
   For a submersion this reads $\widehat F(x^1, \dots, x^n, x^{n+1}, \dots, x^m) = (x^1, \dots, x^n)$, and for an immersion $\widehat F(x^1, \dots, x^m) = (x^1, \dots, x^m, 0, \dots, 0)$.
5. **Immersion plus submersion.** Being a local diffeomorphism is the same thing as being an immersion and a submersion at once. Where the two dimensions agree, $\dim M = \dim N$, either half of that condition already forces the other, so either half alone is enough.
6. **When an injective immersion is an embedding.** An injective smooth immersion $F$ is a smooth embedding if any of the following holds: $F$ is an open map or a closed map; $F$ is proper; $M$ is compact; $M$ has empty boundary and $\dim M = \dim N$.
7. **Pullback-metric criterion.** Let $g$ be a Riemannian metric on $N$. Then the symmetric $2$-tensor field $F^*g$ is positive definite at every point, and so a metric on $M$, exactly in the case that $F$ is an immersion.
:::

:::idea{provenance=original}
Everything here rests on one line: $dF_p$ is defined so that differentiating after composing with $F$ is the same as composing with $F$ after differentiating. Functoriality and the Jacobian formula are both that line applied to a composite. Covariant objects are machines that eat tangent vectors, so feeding them pushed-forward vectors turns a machine on $N$ into a machine on $M$ with no inversion of $F$ anywhere; that is why pullback is unconditional while pushforward of fields is not. Finally, the rank theorem says a constant-rank map is, after a change of coordinates at both ends, exactly its own linearisation, so the local questions about immersions and submersions are answered by linear algebra.
:::

:::proof{provenance=adapted src="lee-2013:Prop. 3.6, p. 55; lee-2013:eqs. (3.9)–(3.10), pp. 61–63; lee-2013:Prop. 4.8, p. 80; lee-2013:Prop. 11.25, p. 285; lee-2013:Cor. 12.28, p. 320; lee-2013:Prop. 13.9 (Exercise 13.10), p. 331; lee-2013:Prop. 14.20, p. 362"}
We prove 1, 2, 3, 5 and 7, and the immersion and submersion cases of 4 from the general statement; the full rank theorem is proved in Lee by applying the :ref[inverse function theorem]{to=found.implicit-inverse-function} to a map whose first $r$ components have been made into the first $r$ coordinates.

1. *Functoriality.* Linearity of $dF_p v$ in $v$ is immediate from $v \mapsto v(f \circ F)$ being linear. For the chain rule, let $v \in T_pM$ and $f \in C^\infty(P)$; then
   $$
   \bigl(d(G\circ F)_p v\bigr)(f) = v\bigl(f \circ G \circ F\bigr) = \bigl(dF_p v\bigr)(f \circ G) = \Bigl(dG_{F(p)}\bigl(dF_p v\bigr)\Bigr)(f),
   $$
   where the middle equality is the definition of $dF_p$ applied to the function $f \circ G \in C^\infty(N)$. Taking $G = F^{-1}$ and using $d(\mathrm{Id})_p = \mathrm{Id}$, which holds because $f \circ \mathrm{Id} = f$, gives the last assertion.
2. *Pullback identities.* Additivity and the two product rules are read off pointwise from the defining formula, because $\alpha \mapsto \alpha(dF_pv_1, \dots, dF_pv_k)$ is linear in $\alpha$ and multiplicative on tensor products. Contravariance is the chain rule of part 1 inserted into the definition:
   $$
   \bigl((G\circ F)^*B\bigr)_p(v_1,\dots,v_k) = B_{G(F(p))}\bigl(dG\,dF\,v_1, \dots\bigr) = \bigl(G^*B\bigr)_{F(p)}\bigl(dFv_1,\dots\bigr) = \bigl(F^*(G^*B)\bigr)_p .
   $$
   Since $dF_p^*$ is linear on each fibre, it carries alternating tensors to alternating tensors, and the wedge product being built from $\otimes$ and antisymmetrisation gives $F^*(\omega \wedge \eta) = F^*\omega \wedge F^*\eta$. For $F^*du = d(u\circ F)$, evaluate both sides on $v \in T_pM$: the left side is $du_{F(p)}(dF_pv) = (dF_pv)(u) = v(u \circ F)$ by the definition of the differential of a function and of $dF_p$, and the right side is $d(u\circ F)_p(v) = v(u \circ F)$ as well.
3. *Coordinate rule.* Apply part 2 repeatedly: $F^*$ of a sum of products of coefficient functions and tensor products of the $dy^i$ replaces each coefficient $B_{i_1\dots i_k}$ by $B_{i_1 \dots i_k} \circ F$ and each $dy^i$ by $F^*(dy^i) = d(y^i \circ F) = dF^i$. In words, substitute the components of $F$ wherever a target coordinate appears and expand. For the top-degree formula, both sides are multiples of $dx^1 \wedge \cdots \wedge dx^n$, so it is enough to evaluate on $(\partial/\partial x^1, \dots, \partial/\partial x^n)$. The left side gives
   $$
   (u\circ F)\;\bigl(dF^1 \wedge \cdots \wedge dF^n\bigr)\!\left(\frac{\partial}{\partial x^1}, \dots, \frac{\partial}{\partial x^n}\right) = (u\circ F)\,\det\left(\frac{\partial F^j}{\partial x^i}\right),
   $$
   because a wedge of $n$ covectors evaluated on $n$ vectors is the determinant of the matrix of pairings, and $dF^j(\partial/\partial x^i) = \partial F^j/\partial x^i$. The right side gives the same, since $dx^1 \wedge \cdots \wedge dx^n$ evaluated on the coordinate frame is $1$.
4. *Normal forms from the rank.* An immersion has constant rank $m$ and a submersion constant rank $n$ by definition, so the two displayed forms are the general one with $r = m$ and $r = n$.
5. *Local diffeomorphisms.* If $F$ is a local diffeomorphism, then near each $p$ it restricts to a diffeomorphism, so $dF_p$ is an isomorphism by part 1; hence $dF_p$ is injective and surjective and $F$ is both an immersion and a submersion. Conversely, if it is both, then $dF_p$ is bijective at every $p$, and the inverse function theorem for manifolds — the chart form of the :ref[inverse function theorem]{to=found.implicit-inverse-function} — makes $F$ a diffeomorphism from a neighbourhood of $p$ onto a neighbourhood of $F(p)$. If $\dim M = \dim N$, injectivity and surjectivity of the linear map $dF_p$ are equivalent, so one hypothesis gives the other.
6. *Pullback-metric criterion.* $F^*g$ is smooth and symmetric for any smooth $F$, so only positivity is at issue. For $v \in T_pM$,
   $$
   (F^*g)_p(v, v) = g_{F(p)}\bigl(dF_pv,\, dF_pv\bigr) \ge 0,
   $$
   with equality exactly when $dF_pv = 0$, because $g_{F(p)}$ is positive definite. So $(F^*g)_p$ is positive definite if and only if $\ker dF_p = 0$. Requiring this at every $p$ is exactly the definition of an immersion. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="lee-2013:Examples 4.18–4.20, pp. 85–86; lee-2013:Prop. 4.22, p. 87; docarmo-2016:§5-10, pp. 440–441"}
- *Why pushforward of fields needs a diffeomorphism.* The formula $(F_*X)_{F(p)} = dF_p(X_p)$ assigns nothing to points off $F(M)$, and assigns two values at a point with two preimages carrying different vectors. Nothing of the kind can go wrong for $F^*A$, whose value at $p$ reads $A$ only at $F(p)$.
- *Injectivity of $dF_p$ is not injectivity of $F$, and conversely.* The curve $t \mapsto (t^3, 0)$ in $\mathbb{R}^2$ is injective and a topological embedding, but it is not an immersion: its velocity vanishes at $t = 0$. The lemniscate $t \mapsto (\sin 2t, \sin t)$ on $(-\pi, \pi)$ is an injective immersion whose image is compact while its domain is not, so it is not a homeomorphism onto its image. The line of irrational slope $t \mapsto (e^{2\pi i t}, e^{2\pi i \alpha t})$ in the torus is an injective immersion with dense image, again not an embedding. Part 6 of the statement is what rules these out: the lemniscate's domain is not compact and the map is not closed; the dense line is not proper.
- *Constant rank, not just rank at a point, is what the normal form needs.* Rank can only jump up under a small perturbation, so a point of full rank has a neighbourhood of full rank, and that is why immersions and submersions automatically have constant rank. A map such as $F(x) = x^2$ on $\mathbb{R}$ has rank $1$ off the origin and rank $0$ at it, and no change of coordinates turns it into a linear map near $0$.
- *The pullback metric may degenerate, and even when it does not, the image may be badly placed.* Where $dF_p$ has a kernel, $F^*g$ has a null direction and is only a semi-definite form. Even for an injective immersion the pullback metric sees only the intrinsic geometry: do Carmo's flat torus carries the pullback of the Euclidean metric of $\mathbb{R}^4$ under an isometric immersion, yet it admits no isometric immersion into $\mathbb{R}^3$ at all, since compactness would force a point of positive Gaussian curvature while the flat torus has curvature $0$ everywhere (:ref[the Theorema Egregium]{to=geom.theorema-egregium}).
:::

:::method[Computing a pullback in coordinates]{provenance=original}
To compute $F^*B$ for a covariant tensor field or form $B$:

1. Fix coordinates $x^1, \dots, x^m$ on the source and $y^1, \dots, y^n$ on the target, and write $F$ as $n$ functions $y^j = F^j(x^1, \dots, x^m)$.
2. Write $B$ in the target coordinates, as a sum of coefficient functions times tensor products (or wedge products) of the $dy^j$.
3. In every coefficient, replace each $y^j$ by $F^j(x)$.
4. Replace each $dy^j$ by the $1$-form $dF^j = \dfrac{\partial F^j}{\partial x^i}\,dx^i$.
5. Expand, using bilinearity for $\otimes$ and antisymmetry ($dx^i \wedge dx^i = 0$, $dx^j \wedge dx^i = -\,dx^i \wedge dx^j$) for $\wedge$. Nothing else is needed: steps 3–5 are exactly part 3 of the statement.

To decide whether $F$ is an immersion, compute the $n \times m$ Jacobian and check that its rank is $m$ at every point; the pullback metric $F^*g$ is then a metric, and its component matrix is $(F^*g)_{ik} = (g_{j\ell} \circ F)\,\dfrac{\partial F^j}{\partial x^i}\dfrac{\partial F^\ell}{\partial x^k}$.
:::

:::example[A saddle as an embedded surface, and the geometry it inherits]{provenance=original}
Let $F : \mathbb{R}^2 \to \mathbb{R}^3$ be
$$
F(s, t) = \bigl(s + t,\; s - t,\; st\bigr),
$$
with target coordinates $(x, y, z)$ and the Euclidean metric $\bar g = dx^2 + dy^2 + dz^2$ (the notation $dx^2$ means the symmetric product $dx\,dx$).

*Step 1: $F$ is an embedding.* The Jacobian has columns
$$
\frac{\partial F}{\partial s} = (1, 1, t), \qquad \frac{\partial F}{\partial t} = (1, -1, s).
$$
Their first two entries form the matrix $\begin{pmatrix} 1 & 1 \\ 1 & -1\end{pmatrix}$, of determinant $-2 \ne 0$, so the two columns are independent at every $(s,t)$ and $F$ is an immersion. It is injective, because $x = s+t$ and $y = s-t$ already determine $s = (x+y)/2$ and $t = (x-y)/2$; these formulas also give a continuous inverse on the image, so $F$ is a homeomorphism onto its image and hence an embedding. Substituting them into $z = st$ shows the image is the graph $z = (x^2 - y^2)/4$, a saddle.

*Step 2: the pullback metric.* By the method, $dx = ds + dt$, $dy = ds - dt$, $dz = t\,ds + s\,dt$, so
$$
F^*\bar g = (ds + dt)^2 + (ds - dt)^2 + (t\,ds + s\,dt)^2 = (2 + t^2)\,ds^2 + 2st\,ds\,dt + (2 + s^2)\,dt^2 .
$$
In the classical notation of :ref[the first fundamental form]{to=geom.first-fundamental-form}, $E = 2 + t^2$, $F_{\mathrm{I}} = st$, $G = 2 + s^2$, and
$$
EG - F_{\mathrm{I}}^2 = (2+t^2)(2+s^2) - s^2t^2 = 4 + 2s^2 + 2t^2 .
$$
This is positive everywhere, as part 7 of the statement promises for an immersion. As a cross-check, $\partial_sF \times \partial_tF = (s+t,\; t-s,\; -2)$, whose squared length is $(s+t)^2 + (t-s)^2 + 4 = 2s^2 + 2t^2 + 4$: the same number.

*Step 3: numbers at one point.* At $(s, t) = (1, 2)$ the component matrix is
$$
\bigl(F^*\bar g\bigr)_{(1,2)} = \begin{pmatrix} 6 & 2 \\ 2 & 3\end{pmatrix}, \qquad \det = 18 - 4 = 14 .
$$
So the area element there is $\sqrt{14}\,ds \wedge dt$ with $\sqrt{14} = 3.741657\ldots$, and the angle $\theta$ between the two coordinate curves satisfies
$$
\cos\theta = \frac{F_{\mathrm{I}}}{\sqrt{EG}} = \frac{2}{\sqrt{18}} = \frac{\sqrt2}{3} = 0.471405\ldots, \qquad \theta = 61.8745^\circ .
$$

*Step 4: a $2$-form.* Pull back $\omega = z\,dx \wedge dy$. Substituting, $F^*\omega = st\,(ds + dt)\wedge(ds - dt) = -2st\,ds\wedge dt$, using $ds \wedge ds = dt \wedge dt = 0$ and $dt \wedge ds = -\,ds \wedge dt$. At $(1,2)$ this is $-4\,ds\wedge dt$.
:::

:::application{provenance=original}
Pullback is how a physical field defined on a big space is read on a small one. The induced metric on a surface in $\mathbb{R}^3$ — the first fundamental form — is the pullback of the Euclidean metric by the parametrisation, which is why a parametrisation must be an immersion for the surface to have a sensible geometry. The same construction gives the induced metric on a spacelike hypersurface in general relativity, used to pose the initial-value problem, and the induced metric on a string or brane worldsheet, whose area is the Nambu–Goto action. In mechanics, a holonomic constraint is an embedding of the constraint manifold into configuration space, and the kinetic-energy metric pulled back along it is what produces the reduced Lagrangian (:ref[holonomic constraints]{to=var.holonomic-constraints}). A change of coordinates is just the identity map pulled back with different charts on domain and codomain, which is why the same substitution rule reproduces the classical transformation laws of :ref[tensors]{to=geom.tensors}, and why the Jacobian determinant appears in the change of variables for integrals of top-degree forms (:ref[integration of forms]{to=geom.stokes-forms}). Submersions appear as the projection of a bundle onto its base (:ref[tangent and vector bundles]{to=geom.vector-bundles}) and as the momentum or energy map whose regular level sets are the invariant submanifolds of a dynamical system.
:::
