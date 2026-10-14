---
id: geom.differential-forms
title: Differential forms
kind: definition
level: core
summary: Builds the exterior algebra of alternating tensors on a vector space, defines the wedge product in the determinant convention and the differential $k$-forms it generates on a manifold, and gives the pullback rule that makes forms the objects a change of coordinates transforms correctly.
prereqs: [geom.tensors, linalg.determinants, geom.smooth-manifolds, geom.tangent-vectors, geom.vector-bundles]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 14, pp. 350–362: Lemma 14.1 (three equivalent characterisations of an alternating tensor), p. 350; the alternation operator Alt, p. 351; elementary alternating tensors and Lemma 14.7, pp. 352–353; Prop. 14.8 (a basis for $\\Lambda^k(V^*)$), p. 353; the wedge product (14.3) with its combinatorial coefficient, p. 355; Prop. 14.11 (bilinearity, associativity, anticommutativity and the determinant formula (14.8)), pp. 356–357; the exterior algebra and the determinant-versus-Alt conventions with (14.9) and (14.10), pp. 357–358; interior multiplication, pp. 358–359; differential forms on a manifold and the local expression, pp. 359–360; the pullback and Lemma 14.16, pp. 360–361; Prop. 14.20 (pullback of a top-degree form) and Cor. 14.21, pp. 361–362"
    pages: "350-362"
    role: the whole algebraic and manifold-level framework in the determinant convention; the statement of the wedge-product properties and of the basis theorem; the two-convention discussion; the pullback rules and the top-degree Jacobian formula with its proof route
  - work: hassani-2013
    loc: "§26.3, pp. 794–798: the component form of the exterior product, p. 795; Thm 26.3.3 (associativity, distributivity, anticommutativity), p. 796; $p$-forms and the pullback by a linear map with Prop. 26.3.5, p. 796; $\\dim\\Lambda^p = \\binom{N}{p}$ (26.22) and the expansion (26.23) over increasing indices, pp. 796–797; Prop. 26.3.8 (independence is equivalent to a non-zero wedge) and Example 26.3.9, pp. 797–798. §28.5, Def. 28.5.1–28.5.2 and (28.37), p. 888"
    pages: "794-798, 888"
    role: the same conventions in index notation, the functorial properties of the pullback, and the criterion that a wedge of vectors is non-zero exactly when they are independent, used here in the remark
  - work: arfken-2013
    loc: "§4.5, pp. 232–238: the reading of $1$-, $2$- and $3$-forms as integrands of line, surface and volume integrals, p. 233; the wedge-product axioms (4.80) and the reduction to ordered index sets, p. 234; Example 4.5.1, pp. 234–235; the orientation of areas and volumes, p. 235; Example 4.5.3 with (4.83) and (4.84), pp. 237–238"
    pages: "232-238"
    role: the axiomatic presentation a physicist meets first, and the identification of $A\\wedge B$ and $A\\wedge B\\wedge C$ in $\\mathbb{R}^3$ with the cross product and the scalar triple product, used in the application
  - work: dummit-foote-2004
    loc: "§11.5, pp. 446–448: the definition of the exterior algebra as $T(M)/\\mathcal{A}(M)$, the wedge product on the quotient and the derivation of anticommutativity from $m\\wedge m = 0$, pp. 446–447; Thm 36 (the description of $\\Lambda^k$ and the universal property for alternating multilinear maps), pp. 447–448"
    pages: "446-448"
    role: the purely algebraic construction by a quotient of the tensor algebra, reported in the note as the definition that avoids any choice of combinatorial normalisation
---

:::definition[Alternating tensors, the wedge product, the exterior algebra]{provenance=adapted src="lee-2013:Ch. 14, pp. 350–357; hassani-2013:§26.3, pp. 795–797"}
Let $V$ be a real vector space of dimension $n$. A covariant $k$-tensor $\alpha$ on $V$ (see :ref[tensors and their transformation laws]{to=geom.tensors}) is **alternating** if interchanging any two of its arguments reverses its sign. Equivalently — and this is the form used most often below — $\alpha$ vanishes on every $k$-tuple that has a repeated entry, and equivalently again it vanishes on every linearly dependent $k$-tuple. The alternating $k$-tensors form a vector space $\Lambda^k(V^*)$, whose elements are also called **$k$-covectors**. Every $0$-tensor and every $1$-tensor is alternating, so $\Lambda^0(V^*) = \mathbb{R}$ and $\Lambda^1(V^*) = V^*$.

Any covariant $k$-tensor can be made alternating by averaging over the symmetric group $S_k$ with signs:

$$
(\operatorname{Alt}\alpha)(v_1,\dots,v_k) \;=\; \frac{1}{k!}\sum_{\sigma \in S_k} (\operatorname{sgn}\sigma)\,
\alpha\bigl(v_{\sigma(1)},\dots,v_{\sigma(k)}\bigr) .
$$

$\operatorname{Alt}\alpha$ is alternating, and $\operatorname{Alt}\alpha = \alpha$ exactly when $\alpha$ already is.

For $\alpha \in \Lambda^k(V^*)$ and $\beta \in \Lambda^l(V^*)$ the **wedge product** (or exterior product) is the $(k+l)$-covector

$$
\alpha \wedge \beta \;=\; \frac{(k+l)!}{k!\,l!}\ \operatorname{Alt}(\alpha \otimes \beta) .
$$

The combinatorial factor is a normalisation, chosen so that the determinant formula of the statement below comes out with no stray factorials; the note records the competing choice. For a $0$-covector, that is a number $c$, the product $c \wedge \alpha$ is just $c\alpha$.

Fix a basis $(E_1,\dots,E_n)$ of $V$ and the dual basis $(\varepsilon^1,\dots,\varepsilon^n)$ of $V^*$. For a **multi-index** $I = (i_1,\dots,i_k)$ with entries in $\{1,\dots,n\}$ put

$$
\varepsilon^{I} \;=\; \varepsilon^{i_1}\wedge\cdots\wedge\varepsilon^{i_k},
\qquad
\varepsilon^{I}(v_1,\dots,v_k) \;=\; \det\bigl[\varepsilon^{i_a}(v_b)\bigr]_{a,b=1}^{k} .
$$

(That the two descriptions agree is part of the statement below.) Call $I$ **increasing** if $i_1 < \cdots < i_k$, and write $\sum'_I$ for a sum over increasing multi-indices only. The direct sum

$$
\Lambda(V^*) \;=\; \bigoplus_{k=0}^{n} \Lambda^{k}(V^*),
\qquad \dim \Lambda(V^*) = 2^n ,
$$

with $\wedge$ as its multiplication, is the **exterior algebra** (or Grassmann algebra) of $V$.
:::

:::note[Three ways the same algebra is set up, and how the conventions differ]{provenance=adapted src="lee-2013:pp. 357–358, (14.9)–(14.10); arfken-2013:§4.5, (4.80), p. 234; dummit-foote-2004:§11.5, pp. 446–448"}
The library sets up the same object in three ways, and the differences are worth keeping straight before any computation.

- **The determinant convention**, used above and throughout this handbook, carries the factor $(k+l)!/(k!\,l!)$. :cite[Lee]{work=lee-2013 loc="pp. 357–358"} adopts it for the whole of his book, and notes that it is the common choice in introductory differential geometry; :cite[Hassani]{work=hassani-2013 loc="Def. 26.3.1, p. 794"} uses the same normalisation, and warns in a footnote there that other authors choose other coefficients.
- **The Alt convention** sets $\alpha \mathbin{\underline{\wedge}} \beta = \operatorname{Alt}(\alpha\otimes\beta)$ with no factor at all. Lee records that with this choice the determinant formula acquires a $1/k!$, becoming $(\omega^1\mathbin{\underline{\wedge}}\cdots\mathbin{\underline{\wedge}}\omega^k)(v_1,\dots,v_k) = \tfrac{1}{k!}\det[\omega^i(v_j)]$, and that it is more usual in complex differential geometry. Mixing the two silently is the commonest source of stray factorials in this subject.
- **The axiomatic route**, which is how :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="(4.80), p. 234"} introduce it for physicists: one simply *demands* that $\wedge$ be bilinear and associative and that $dx_i \wedge dx_j = - dx_j \wedge dx_i$, and computes. No normalisation has to be chosen, because the basis products are taken as given rather than built from $\otimes$.
- **The algebraic route**: :cite[Dummit and Foote]{work=dummit-foote-2004 loc="§11.5, pp. 446–447"} define $\Lambda(M)$, for a module $M$ over a commutative ring, as the tensor algebra $T(M)$ divided by the two-sided ideal generated by the elements $m \otimes m$. Anticommutativity is then a consequence rather than an axiom: expanding $0 = (m+m')\wedge(m+m')$ and cancelling the two square terms leaves $m \wedge m' = -m'\wedge m$. Their Thm 36 gives the universal property — every alternating $k$-multilinear map out of $M^k$ factors uniquely through $\Lambda^k(M)$ — which is what makes the construction canonical. They also warn that anticommutativity on *generators* does not mean $ab = -ba$ for arbitrary elements of $\Lambda(M)$; the correct general rule is the degree-dependent sign below.

The four descriptions agree on everything in this unit. Where a formula below carries a factorial, it is the determinant convention that put it there.
:::

:::statement[Wedge products, and a basis for the alternating tensors]{provenance=adapted src="lee-2013:Prop. 14.8, p. 353 and Prop. 14.11, pp. 356–357; hassani-2013:Thm 26.3.3 and (26.22)–(26.23), pp. 796–797"}
Let $V$ be an $n$-dimensional real vector space.

1. **Algebra.** $\wedge$ is bilinear and associative, and for $\alpha \in \Lambda^k(V^*)$, $\beta \in \Lambda^l(V^*)$,
   $$
   \alpha \wedge \beta \;=\; (-1)^{kl}\, \beta \wedge \alpha .
   $$
   In particular $\alpha\wedge\alpha = 0$ whenever $k$ is odd, but *not* in general when $k$ is even.
2. **Shuffle formula.** With the same $\alpha,\beta$,
   $$
   (\alpha\wedge\beta)(v_1,\dots,v_{k+l})
   \;=\; \sum_{\sigma} (\operatorname{sgn}\sigma)\,
   \alpha\bigl(v_{\sigma(1)},\dots,v_{\sigma(k)}\bigr)\,
   \beta\bigl(v_{\sigma(k+1)},\dots,v_{\sigma(k+l)}\bigr),
   $$
   the sum running over the $\binom{k+l}{k}$ permutations $\sigma$ of $\{1,\dots,k+l\}$ with $\sigma(1)<\cdots<\sigma(k)$ and $\sigma(k+1)<\cdots<\sigma(k+l)$ (the **$(k,l)$-shuffles**).
3. **Determinant formula.** For covectors $\omega^1,\dots,\omega^k \in V^*$ and vectors $v_1,\dots,v_k \in V$,
   $$
   \bigl(\omega^1\wedge\cdots\wedge\omega^k\bigr)(v_1,\dots,v_k) \;=\; \det\bigl[\omega^{i}(v_j)\bigr]_{i,j=1}^{k} .
   $$
4. **Basis.** For $1 \le k \le n$ the $k$-covectors $\varepsilon^{I}$ with $I$ increasing of length $k$ form a basis of $\Lambda^k(V^*)$, so
   $$
   \dim \Lambda^{k}(V^*) = \binom{n}{k} = \frac{n!}{k!\,(n-k)!},
   $$
   and $\Lambda^k(V^*) = \{0\}$ for $k > n$. The expansion of $\alpha \in \Lambda^k(V^*)$ is
   $$
   \alpha \;=\; {\sum_I}' \alpha_I\, \varepsilon^{I},
   \qquad \alpha_I = \alpha(E_{i_1},\dots,E_{i_k}) .
   $$
:::

:::idea{provenance=original}
One identity does all the work. Expanding the definition of $\alpha\wedge\beta$ produces a sum over all $(k+l)!$ permutations, but $\alpha$ and $\beta$ are themselves alternating, so permuting the first $k$ arguments among themselves or the last $l$ among themselves changes nothing but a sign that is immediately cancelled. Each term therefore occurs $k!\,l!$ times, which is exactly the factor the definition divided out; what survives is one term per *shuffle*. Once the product is written as a sum over shuffles, associativity is visible (a triple product is the sum over shuffles into three blocks, however it is bracketed), anticommutativity is the sign of the permutation that swaps the two blocks past each other, and for $k$ one-forms the shuffles are all of $S_k$ and the sum is Leibniz's expansion of a determinant. The basis claim is then a matter of evaluation: an alternating tensor is determined by its values on increasing tuples of basis vectors, and $\varepsilon^I$ is built to have value $1$ on $I$ and $0$ on every other increasing tuple.
:::

:::proof[The shuffle formula, and the four claims that follow from it]{provenance=adapted src="lee-2013:Prop. 14.8, p. 353; lee-2013:Prop. 14.11 with Lemma 14.10, pp. 355–357"}
**Step 1: the shuffle formula (claim 2).** Write out the definition:
$$
(\alpha\wedge\beta)(v_1,\dots,v_{k+l})
= \frac{1}{k!\,l!}\sum_{\pi \in S_{k+l}} (\operatorname{sgn}\pi)\,
\alpha\bigl(v_{\pi(1)},\dots,v_{\pi(k)}\bigr)\beta\bigl(v_{\pi(k+1)},\dots,v_{\pi(k+l)}\bigr),
$$
the $(k+l)!$ of the normalisation having cancelled the $1/(k+l)!$ inside $\operatorname{Alt}$. Group the permutations by the **ordered** pair of sets $\bigl(\{\pi(1),\dots,\pi(k)\},\{\pi(k+1),\dots,\pi(k+l)\}\bigr)$ — equivalently, by the first block alone, which determines the second. The order matters: when $k = l$ the two blocks may be interchanged, and reading the pair as unordered would merge two groups into one of $2\,k!\,l!$ permutations containing two shuffles. With the pair read as ordered, each group contains exactly $k!\,l!$ permutations and exactly one shuffle $\sigma$; and if $\pi$ lies in the group of $\sigma$ then $\pi = \sigma\circ(\mu\times\nu)$ for a permutation $\mu$ of the first block and $\nu$ of the second. **Because $\alpha$ and $\beta$ are alternating**, reordering the arguments by $\mu$ and $\nu$ multiplies the product of values by $(\operatorname{sgn}\mu)(\operatorname{sgn}\nu) = \operatorname{sgn}\pi \cdot \operatorname{sgn}\sigma$, so every term in a group equals the term of its shuffle. The group therefore contributes $k!\,l!$ copies of the shuffle term, and the prefactor cancels them.

**Step 2: associativity and anticommutativity (claim 1).** Bilinearity is immediate from the definition, since $\otimes$ is bilinear and $\operatorname{Alt}$ is linear. Applying step 1 twice to $(\alpha\wedge\beta)\wedge\gamma$ with $\gamma \in \Lambda^m(V^*)$ gives the sum, over all ways of splitting $\{1,\dots,k+l+m\}$ into an increasing $k$-block, an increasing $l$-block and an increasing $m$-block, of the signed product of the three values; the same computation applied to $\alpha\wedge(\beta\wedge\gamma)$ gives the identical sum, so the two bracketings agree. For anticommutativity, the shuffles for $\beta\wedge\alpha$ are obtained from those for $\alpha\wedge\beta$ by moving the $l$-block in front of the $k$-block. That permutation is a composition of $kl$ transpositions — each of the $l$ entries must pass each of the $k$ entries — so each sign changes by $(-1)^{kl}$.

**Step 3: the determinant formula (claim 3).** Take $k$ covectors $\omega^1,\dots,\omega^k$, each of degree $1$. Iterating step 1, the $(1,1,\dots,1)$-shuffles are all of $S_k$ (an increasing block of length one is no constraint), so
$$
\bigl(\omega^1\wedge\cdots\wedge\omega^k\bigr)(v_1,\dots,v_k)
= \sum_{\sigma\in S_k} (\operatorname{sgn}\sigma)\, \omega^1(v_{\sigma(1)})\cdots\omega^k(v_{\sigma(k)}),
$$
which is the Leibniz expansion of $\det[\omega^i(v_j)]$ of :ref[determinants]{to=linalg.determinants}. In particular the two descriptions of $\varepsilon^I$ given in the definition agree, and $\varepsilon^{I}(E_{j_1},\dots,E_{j_k})$ is the determinant of a matrix of Kronecker deltas: it is $0$ if $I$ or $J$ has a repeated entry or if $J$ is not a rearrangement of $I$, and otherwise it is the sign of the rearrangement. For increasing $I$ and $J$ this says $\varepsilon^I(E_{j_1},\dots,E_{j_k}) = 1$ if $J = I$ and $0$ otherwise.

**Step 4: the $\varepsilon^I$ span (claim 4).** Let $\alpha \in \Lambda^k(V^*)$ and set $\alpha_I = \alpha(E_{i_1},\dots,E_{i_k})$ for increasing $I$. Put $\tilde\alpha = \sum'_I \alpha_I \varepsilon^I$. By the last sentence of step 3, $\alpha$ and $\tilde\alpha$ take the same value on every *increasing* tuple of basis vectors. They agree on all the others as well: on a tuple with a repeated entry both vanish, since both are alternating; and a tuple of distinct basis vectors is a rearrangement of an increasing one, which multiplies both values by the same sign. Two multilinear maps that agree on all tuples of basis vectors are equal, so $\alpha = \tilde\alpha$.

**Step 5: the $\varepsilon^I$ are independent, and the dimension.** Suppose $\sum'_I c_I \varepsilon^I = 0$. Evaluating at $(E_{j_1},\dots,E_{j_k})$ for an increasing $J$ picks out $c_J$, so every coefficient vanishes. The increasing multi-indices of length $k$ in $\{1,\dots,n\}$ are the $k$-element subsets, of which there are $\binom{n}{k}$; for $k > n$ there are none, which is why there are no non-zero $k$-covectors above degree $n$. $\square$
:::

:::definition[Differential forms, and the pullback]{provenance=adapted src="lee-2013:pp. 359–361, Lemma 14.16; hassani-2013:Def. 28.5.1–28.5.2 and (28.37), p. 888"}
Let $M$ be a smooth $n$-manifold (:ref[smooth manifolds]{to=geom.smooth-manifolds}). Applying the construction above to each tangent space $T_pM$ (:ref[tangent vectors and vector fields]{to=geom.tangent-vectors}) gives the bundle $\Lambda^k T^*M$ whose fibre at $p$ is $\Lambda^k(T_p^*M)$; it is a smooth vector bundle of rank $\binom{n}{k}$ (:ref[tangent and vector bundles]{to=geom.vector-bundles}). A **differential $k$-form** is a smooth section $\omega$ of this bundle: an assignment, to each point $p$, of an alternating $k$-tensor $\omega_p$ on $T_pM$, depending smoothly on $p$. The space of smooth $k$-forms is written $\Omega^k(M)$, and $\Omega^0(M)$ is just the smooth functions. The wedge product of forms is taken pointwise, $(\omega\wedge\eta)_p = \omega_p \wedge \eta_p$, so it sends $\Omega^k \times \Omega^l$ into $\Omega^{k+l}$.

In a chart with coordinates $(x^1,\dots,x^n)$ the differentials $dx^1,\dots,dx^n$ are the coframe dual to $\partial/\partial x^1,\dots,\partial/\partial x^n$, and writing $dx^{I} = dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ the statement above gives the local expression

$$
\omega \;=\; {\sum_I}'\, \omega_I\, dx^{I},
\qquad
\omega_I \;=\; \omega\!\left(\frac{\partial}{\partial x^{i_1}},\dots,\frac{\partial}{\partial x^{i_k}}\right),
$$

with smooth coefficient functions $\omega_I$. On an open set of $\mathbb{R}^3$, a $0$-form is a function, a $1$-form is $P\,dx + Q\,dy + R\,dz$, a $2$-form is $F\,dy\wedge dz + G\,dz\wedge dx + H\,dx\wedge dy$, and a $3$-form is $K\,dx\wedge dy\wedge dz$; there are no non-zero $4$-forms.

Let $F : M \to N$ be smooth and $\omega \in \Omega^k(N)$. The **pullback** $F^*\omega \in \Omega^k(M)$ is defined by feeding the differential $dF_p : T_pM \to T_{F(p)}N$ (see :ref[pushforwards, pullbacks and immersions]{to=geom.pullbacks-pushforwards}) each argument in turn:

$$
(F^*\omega)_p(v_1,\dots,v_k) \;=\; \omega_{F(p)}\bigl(dF_p(v_1),\dots,dF_p(v_k)\bigr),
\qquad v_1,\dots,v_k \in T_pM ,
$$

and $F^*f = f\circ F$ for a $0$-form $f$. No invertibility of $F$ is needed: forms pull back along *any* smooth map, which is exactly what vector fields do not do.
:::

:::statement[Rules for the pullback]{provenance=adapted src="lee-2013:Lemma 14.16, p. 361 and Prop. 14.20 with Cor. 14.21, pp. 361–362; hassani-2013:Prop. 26.3.5, p. 796 and (28.37), p. 888"}
Let $F : M \to N$ and $G : N \to P$ be smooth.

1. $F^* : \Omega^k(N) \to \Omega^k(M)$ is linear, $F^*(\omega\wedge\eta) = (F^*\omega)\wedge(F^*\eta)$, and $(G\circ F)^* = F^*\circ G^*$; the identity map pulls back to the identity.
2. **Computation rule.** In charts $(x^i)$ on $M$ and $(y^j)$ on $N$, writing $F^j = y^j \circ F$ for the components of $F$,
   $$
   F^*\Bigl({\sum_J}'\, \omega_J \, dy^{j_1}\wedge\cdots\wedge dy^{j_k}\Bigr)
   \;=\; {\sum_J}'\, (\omega_J\circ F)\ dF^{j_1}\wedge\cdots\wedge dF^{j_k} .
   $$
   In words: substitute, and differentiate each coordinate function.
3. **Top degree.** If $\dim M = \dim N = n$ and $u$ is a continuous function on $N$, then on the overlap of the two charts
   $$
   F^*\bigl(u \, dy^1\wedge\cdots\wedge dy^n\bigr)
   \;=\; (u\circ F)\,\bigl(\det DF\bigr)\, dx^1\wedge\cdots\wedge dx^n ,
   $$
   where $DF = [\partial F^j/\partial x^i]$ is the Jacobian matrix in these coordinates. Taking $F$ to be the identity read in two charts $(x^i)$ and $(\tilde x^j)$ on $M$ gives the change-of-coordinates rule
   $$
   d\tilde x^{1}\wedge\cdots\wedge d\tilde x^{n} \;=\; \det\!\left[\frac{\partial \tilde x^{j}}{\partial x^{i}}\right] dx^{1}\wedge\cdots\wedge dx^{n} .
   $$
:::

:::proof[The top-degree formula]{provenance=adapted src="lee-2013:Prop. 14.20, pp. 361–362"}
Parts 1 and 2 are read off from the definition, which is why the source leaves them as an exercise: each is a statement about the values on $k$-tuples of tangent vectors, and $dF_p$ is applied to each slot separately. We prove part 3, which is the one that produces a determinant out of nowhere and is used in every change of variables below.

**Step 0: the coefficient rides along.** Part 3 asks only that $u$ be continuous, while part 2 is a statement about smooth forms. The gap is not real, because the pullback is defined pointwise: for *any* function $u$ on $N$ and any $k$-form $\eta$,
$$
\bigl(F^*(u\,\eta)\bigr)_p = u\bigl(F(p)\bigr)\,(F^*\eta)_p ,
$$
straight from the definition, as $u(F(p))$ is a scalar multiplying the value of $\eta_{F(p)}$. So we apply part 2 to the smooth form $\eta = dy^1\wedge\cdots\wedge dy^n$ and put the factor $u\circ F$ back at the end; continuity of $u$ is then needed only to make $F^*(u\,\eta)$ a continuous section rather than a rough one.

**Step 1: one evaluation suffices.** At each point the fibre $\Lambda^n(T_p^*M)$ is one-dimensional, spanned by $dx^1\wedge\cdots\wedge dx^n$, by the dimension count $\binom{n}{n} = 1$. Two $n$-forms on an $n$-manifold are therefore equal as soon as they agree on the single frame $(\partial/\partial x^1,\dots,\partial/\partial x^n)$.

**Step 2: the left-hand side.** By step 0 and part 2, $F^*(u\,dy^1\wedge\cdots\wedge dy^n) = (u\circ F)\,F^*(dy^1\wedge\cdots\wedge dy^n) = (u\circ F)\,dF^1\wedge\cdots\wedge dF^n$. Each $dF^j$ is a $1$-form, so the determinant formula of claim 3 of the statement applies with $\omega^j = dF^j$ and $v_i = \partial/\partial x^i$:
$$
\bigl(dF^1\wedge\cdots\wedge dF^n\bigr)\!\left(\frac{\partial}{\partial x^1},\dots,\frac{\partial}{\partial x^n}\right)
= \det\!\left[dF^{j}\!\left(\frac{\partial}{\partial x^{i}}\right)\right]
= \det\!\left[\frac{\partial F^{j}}{\partial x^{i}}\right] = \det DF ,
$$
so the left-hand side returns $(u\circ F)\det DF$.

**Step 3: the right-hand side.** By the same determinant formula, $dx^1\wedge\cdots\wedge dx^n$ applied to $(\partial/\partial x^1,\dots,\partial/\partial x^n)$ is the determinant of the identity matrix, namely $1$. So the right-hand side also returns $(u\circ F)\det DF$, and by step 1 the two forms are equal. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Finite dimension** enters only at claims 4 of the statement: the count $\binom{n}{k}$, the vanishing of $\Lambda^k$ above degree $n$, and hence the one-dimensionality of the top fibre that step 1 of the proof relies on. The algebra of $\wedge$ itself needs no dimension hypothesis.
- **Alternation of both factors** is used exactly once, at step 1 of the proof of the shuffle formula, to say that the $k!\,l!$ permutations within a group all give the same signed term. Drop it and the shuffle formula is false; with a general $\alpha$ the sum does not collapse.
- **The sign rule is degree-dependent, not uniform.** $\alpha\wedge\alpha = 0$ holds for odd $k$ but can fail for even $k$: in $\mathbb{R}^4$ with $\alpha = dx^1\wedge dx^2 + dx^3\wedge dx^4$ one finds $\alpha\wedge\alpha = 2\,dx^1\wedge dx^2\wedge dx^3\wedge dx^4 \ne 0$. (This $\alpha$ is also an example of a $2$-covector that is not a single wedge of $1$-covectors.) :cite[Dummit and Foote]{work=dummit-foote-2004 loc="§11.5, p. 447"} make the same warning in the algebraic setting.
- **The normalisation is a hypothesis too.** Every factorial-free formula above — the determinant formula and the Jacobian in part 3 — presupposes the determinant convention of the definition. In the Alt convention both acquire factorials: with $\varepsilon^{I}$ still defined by the determinant, Lee records that the concatenation rule becomes $\varepsilon^{I}\mathbin{\underline{\wedge}}\varepsilon^{J} = \frac{k!\,l!}{(k+l)!}\,\varepsilon^{IJ}$ rather than $\varepsilon^{I}\wedge\varepsilon^{J} = \varepsilon^{IJ}$.
- **Smoothness** is what makes $F^*\omega$ a form rather than a rough section: $dF_p$ must exist at every $p$, and the coefficients of $F^*\omega$ are built from first derivatives of $F$ and the coefficients of $\omega$, so $F$ of class $C^r$ and $\omega$ of class $C^r$ give $F^*\omega$ of class $C^{r-1}$.
- **No invertibility is needed to pull back**, and this asymmetry is the whole reason forms are the natural things to integrate. A vector field can be pushed forward along a diffeomorphism only; a form can be pulled back along a map that collapses dimensions, in which case $F^*\omega$ is simply $0$ in high enough degree. In part 3 the map is between manifolds of equal dimension but need not be invertible: $\det DF$ is allowed to vanish.
- **Independence test.** :cite[Hassani]{work=hassani-2013 loc="Prop. 26.3.8, p. 797"} records the converse use of all this: vectors $v_1,\dots,v_p$ are linearly independent if and only if $v_1\wedge\cdots\wedge v_p \ne 0$. It is the determinant criterion for independence, restated so that no choice of basis or square matrix is needed.
:::

:::method[Computing with forms]{provenance=original}
1. **Reduce to increasing indices.** Use anticommutativity of the $1$-forms, $dx^i\wedge dx^j = -dx^j\wedge dx^i$, to sort every basis product into increasing order, tracking the sign; any product with a repeated differential is zero. Collect coefficients. In $\mathbb{R}^3$ it is often more convenient to use the *cyclic* order $dy\wedge dz$, $dz\wedge dx$, $dx\wedge dy$, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Example 4.5.1, pp. 234–235"} do, because then all the vector-calculus dictionary entries come out with plus signs.
2. **Move functions to the front.** Coefficients are $0$-forms and commute with everything, so $f\,dx \wedge g\,dy = fg\,dx\wedge dy$.
3. **To evaluate a $k$-form on $k$ vectors**, expand it over increasing multi-indices; every basis term is then a determinant,
   $$
   dx^{I}(v_1,\dots,v_k) \;=\; \det\bigl[v_b^{\,i_a}\bigr]_{a,b=1}^{k} ,
   $$
   where $v_b^{\,i}$ is the $i$th coordinate component of $v_b$. In practice: write the $n$ components of each vector in a column, delete every row whose index is absent from $I$, take the determinant of the square array left behind, and weight it by $\omega_I$. Summing over the increasing $I$ gives $\omega(v_1,\dots,v_k)$.
4. **To pull back**, substitute the map into the coefficients, replace each $dy^j$ by $dF^j = \sum_i (\partial F^j/\partial x^i)\,dx^i$, expand, and sort by step 1. Never compute a Jacobian separately: part 3 of the statement says the expansion produces it.
5. **Sanity checks.** The degree must be right; a $k$-form on an $n$-manifold with $k>n$ is zero; and if the map factors through a manifold of dimension less than $k$, the pullback is zero.
:::

:::example[A pullback computed two ways]{provenance=original}
Let $F : \mathbb{R}^2 \to \mathbb{R}^3$ be
$$
F(u,v) = \bigl(x,y,z\bigr) = \bigl(u^2 - v^2,\ 2uv,\ u+v\bigr),
$$
and let $\omega = z\,dx\wedge dy + x\,dy\wedge dz$ be a $2$-form on $\mathbb{R}^3$. We compute $F^*\omega$ and evaluate it at $(u,v) = (1,2)$.

**Route 1: substitute and expand.** The differentials of the components are
$$
dx = 2u\,du - 2v\,dv, \qquad dy = 2v\,du + 2u\,dv, \qquad dz = du + dv .
$$
Wedging, and using $du\wedge du = dv\wedge dv = 0$ and $dv\wedge du = -du\wedge dv$,
$$
dx\wedge dy = \bigl(4u^2 + 4v^2\bigr)\,du\wedge dv ,
\qquad
dy\wedge dz = \bigl(2v - 2u\bigr)\,du\wedge dv .
$$
Substituting the coefficients $z = u+v$ and $x = u^2-v^2$ and collecting,
$$
F^*\omega = \Bigl[4(u+v)(u^2+v^2) - 2(u-v)(u^2-v^2)\Bigr] du\wedge dv
= 2(u+v)\Bigl[2(u^2+v^2) - (u-v)^2\Bigr] du\wedge dv ,
$$
and the bracket is $u^2 + 2uv + v^2 = (u+v)^2$. Hence
$$
F^*\omega = 2\,(u+v)^3\, du\wedge dv .
$$
At $(u,v) = (1,2)$ the coefficient is $2\cdot 3^3 = \boxed{54}$.

**Route 2: evaluate through the definition.** By the definition of the pullback, the coefficient at $(1,2)$ is $\omega_{F(1,2)}\bigl(dF(\partial_u), dF(\partial_v)\bigr)$. Here $F(1,2) = (1-4,\,4,\,3) = (-3,4,3)$, and
$$
dF(\partial_u) = (2u,\,2v,\,1) = (2,4,1), \qquad
dF(\partial_v) = (-2v,\,2u,\,1) = (-4,2,1) .
$$
At the point $(-3,4,3)$ the form is $\omega = 3\,dx\wedge dy - 3\,dy\wedge dz$. Using step 3 of the method, with $a = (2,4,1)$ and $b = (-4,2,1)$,
$$
(dx\wedge dy)(a,b) = \det\begin{pmatrix} 2 & -4 \\ 4 & 2\end{pmatrix} = 20,
\qquad
(dy\wedge dz)(a,b) = \det\begin{pmatrix} 4 & 2 \\ 1 & 1\end{pmatrix} = 2 ,
$$
so $\omega(a,b) = 3(20) - 3(2) = 54$, as before.

**Reading the answer.** Why a zero of order *three* at $v = -u$? One factor is forced, the other two are not, and it is worth keeping them apart.

The forced factor is the first. Along $v = -u$ the map sends $(u,v)$ to $\bigl(u^2-v^2,\,2uv,\,u+v\bigr) = (0,-2u^2,0)$, and the two coefficients of $\omega$ are $z$ and $x$, both of which vanish there. So $\omega$ is the zero $2$-covector at every image point of that line, and its pullback must vanish along the line whatever the tangent vectors do. (The two vectors $dF(\partial_u) = (2u,-2u,1)$ and $dF(\partial_v) = (2u,2u,1)$ do stay independent for $u \ne 0$: the pullback vanishes because of the form, not because the map degenerates.) That argument gives a simple zero and nothing more.

The other two factors are arithmetic. Each of the two terms carries one factor of $u+v$ — the first from $z\circ F = u+v$, the second from $x\circ F = (u+v)(u-v)$ — so
$$
F^*\omega = (u+v)\Bigl[\,4(u^2+v^2) - 2(u-v)^2\,\Bigr]\,du\wedge dv .
$$
On the line $v = -u$ the two terms inside the bracket are $8u^2$ and $-8u^2$: they cancel. A quadratic form that vanishes on the line $u + v = 0$ is divisible by $u+v$, and here the quotient is $2(u+v)$ a second time, since $4(u^2+v^2) - 2(u-v)^2 = 2(u+v)^2$. Nothing in the general theory predicts that second coincidence; it is special to this $\omega$ and this $F$. What *is* general is that $F^*\omega$ at a point depends on $\omega$ only at the image point, so a form can be pulled back through regions where the map is badly behaved and still say something.
:::

:::application{provenance=original}
**Oriented area and volume elements.** The reason $dx\,dy$ in a double integral really behaves like $dx\wedge dy$ is part 3 of the statement: under a change of variables it picks up $\det DF$, which is the Jacobian of :ref[multiple integrals and change of variables]{to=found.change-of-variables} — except that the form keeps the *sign* of the Jacobian, where the classical change-of-variables formula takes its absolute value. The sign is the orientation, and carrying it is what allows forms to be integrated intrinsically, as :ref[integration of forms and the general Stokes theorem]{to=geom.stokes-forms} does. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§4.5, p. 235"} make the same point for physicists: lengths, areas and volumes built from wedge products are oriented quantities.

**Cross products and triple products are three-dimensional accidents.** For $1$-forms $A = A_x dx + A_y dy + A_z dz$ and $B$ likewise, expanding $A\wedge B$ gives the three components of the cross product as the coefficients of $dy\wedge dz$, $dz\wedge dx$, $dx\wedge dy$, and $A\wedge B\wedge C$ is the scalar triple product times $dx\wedge dy\wedge dz$. Both expansions are displayed in the course of :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="Example 4.5.3, pp. 237–238"} Example 4.5.3, but the identifications they state as (4.83) and (4.84) have the Hodge star applied: $*(A\wedge B)$ is the $1$-form whose coefficients are the components of $A\times B$, and $*(A\wedge B\wedge C) = A\cdot(B\times C)$ as a number. The un-starred reading above is a correspondence of coefficients, not an equality between a $2$-form and a vector. The wedge product is what survives in other dimensions: $A\wedge B$ exists in every dimension, but only in $\mathbb{R}^3$ does $\binom{3}{2} = 3$ let its result be disguised as a vector. That coincidence, and the reflection behaviour it carries with it, is the subject of :ref[pseudotensors and the Levi-Civita tensor]{to=geom.pseudotensors}, and turning a $2$-form back into a vector in general requires the extra structure of :ref[the Hodge star]{to=geom.hodge-star-maxwell}.

**Phase space.** On the phase space of a mechanical system with $n$ degrees of freedom, the $2$-form $\omega = \sum_{i=1}^{n} dp_i \wedge dq^i$ is the object that Hamilton's equations preserve, and $\omega^{\wedge n}/n!$ is the Liouville volume whose conservation is Liouville's theorem. This is the content of :ref[symplectic manifolds and Hamiltonian vector fields]{to=geom.symplectic-manifolds}, which builds on :ref[the canonical equations]{to=var.canonical-equations}. The antisymmetry is not decoration: it is what makes $\omega$ pair a coordinate with its conjugate momentum rather than with itself.

**Electromagnetism.** The electromagnetic field is a $2$-form $F$ on spacetime, with the electric field in the components containing $dt$ and the magnetic field in the purely spatial ones; the whole of Maxwell's theory is two equations about $F$. Writing it this way is what makes its behaviour under a change of frame automatic, since a Lorentz transformation acts by pullback. See :ref[the Hodge star and Maxwell's equations]{to=geom.hodge-star-maxwell}.

**Thermodynamics and other state spaces.** On a space of thermodynamic states, the work and heat increments are $1$-forms, not differentials of functions; the distinction is invisible in the notation $\delta W$ but exact in the language of forms, and it is the subject of :ref[the exterior derivative]{to=geom.exterior-derivative}. The same remark applies wherever a "differential" appears in an applied subject without a function behind it.
:::
