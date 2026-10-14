---
id: funcan.orthonormal-bases
title: Orthonormal bases in Hilbert space
kind: theorem
level: core
summary: Gives Bessel's inequality for any orthonormal family, the exact criterion for a series $\sum a_k e_k$ to converge, and the equivalence of maximality, Parseval's identity and expandability that defines an orthonormal basis, with the consequence that a separable Hilbert space is $\ell^2$ in disguise.
prereqs: [funcan.projection-theorem, funcan.hilbert-spaces, linalg.gram-schmidt, found.zorn-lemma]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§3.4–§3.6, pp. 155–176: the projection $y = \\sum_{k\\le n}(x,e_k)e_k$ onto a finite span and the derivation of Thm 3.4-6 (Bessel's inequality), pp. 155–157; the Gram-Schmidt formulas, pp. 157–159; Thm 3.5-2 (convergence of $\\sum\\alpha_ke_k$ iff $\\sum|\\alpha_k|^2$ converges, and the coefficients are then the Fourier coefficients), pp. 163–165; Def. 3.6-1 (total orthonormal set) with the footnote on the words \"total\" and \"complete\", p. 168; Thm 3.6-2 (totality iff $M^\\perp=\\{0\\}$, with the remark that completeness of $X$ is essential in (b) and Dixmier's 1953 counterexample), pp. 169–170; Thm 3.6-3 (totality iff Parseval), p. 170; Thm 3.6-4 (separability iff a countable total orthonormal set), pp. 171–172; Thm 3.6-5 (two Hilbert spaces are isomorphic iff they have the same Hilbert dimension), p. 173"
    pages: "155-176"
    role: the statements and proof routes for Bessel, the convergence criterion, the two totality criteria, the separability theorem, the classification by Hilbert dimension, and the terminology
  - work: folland-1999
    loc: "§5.3, pp. 175–178: the Gram-Schmidt construction, p. 175; Bessel's Inequality 5.26 with the countability of the non-zero coefficients, p. 175; Thm 5.27, the equivalence of completeness, Parseval's identity and unconditional expandability, pp. 175–176; Prop. 5.28 (existence of an orthonormal basis, by Zorn's lemma) and Prop. 5.29 (separability iff a countable basis), p. 176; Prop. 5.30 (the unitary map onto $\\ell^2(A)$), p. 177; Exercises 61 and 62 (product bases, and separability of $L^2$ on $[0,1]$, $\\mathbb{R}$ and $\\mathbb{R}^n$), p. 178"
    pages: "175-178"
    role: the three-way equivalence as a single theorem with the cyclic proof, the finite-subset proof of Bessel, the uncountable-index formulation, and the unitary identification with $\\ell^2(A)$
  - work: stakgold-holst-2011
    loc: "§4.6, pp. 275–288: the closed span, spanning sets, separability and the warning that a countable spanning set need not give series expansions (with $\\{1,x,x^2,\\dots\\}$ in $L_2(a,b)$ as the example), pp. 275–276; the definition of a Schauder basis and the computation of coordinates in an orthonormal basis, pp. 276–277; the Riesz-Fischer theorem for $\\sum\\alpha_ke_k$, p. 277; Exercise 4.6.7 (a spanning set that is not a basis), p. 288"
    pages: "275-288"
    role: the distinction between a spanning set, a Schauder basis and an orthonormal basis, and the concrete reading in $L_2(a,b)$
  - work: hassani-2013
    loc: "§7.2, Thm 7.2.1 (Riesz-Fischer: $L^2_w(a,b)$ is complete), Thm 7.2.2 (every complete inner product space with a countable basis is isomorphic to $L^2_w(a,b)$) and Thm 7.2.3 (the monomials $\\{x^k\\}$ form a basis of $L^2_w(a,b)$, attributed to Stone-Weierstrass), p. 222"
    pages: "222"
    role: the physicists' statement of the classification and the concrete total set of monomials that makes $L^2_w(a,b)$ separable
  - work: rhb-2006
    loc: "§17.1, the expansion of a function in an orthonormal basis and the coefficient formula (17.11), p. 558, with Bessel's inequality (17.14) and the remark that equality holds exactly when the sum runs over every basis function, p. 559; §17.3.3, the completeness of the eigenfunctions of a Hermitian operator and the closure relation $\\rho(z)\\sum_n \\hat y_n(x)\\hat y_n^*(z) = \\delta(x-z)$, eq. (17.28), p. 563"
    pages: "558-563"
    role: the form in which completeness is used in physics, as a closure relation and as the justification of eigenfunction expansions
---

:::definition[Orthonormal family, Fourier coefficients, total set, basis]{provenance=adapted src="kreyszig-1978:§3.4, p. 157, and Def. 3.6-1 with its footnote, p. 168; folland-1999:§5.3, p. 175; stakgold-holst-2011:§4.6, pp. 275–277"}
Let $H$ be a Hilbert space with inner product $(u,v)$, linear in the first slot.

A family $\{e_\alpha\}_{\alpha \in A} \subseteq H$ is **orthonormal** if $\|e_\alpha\| = 1$ for every $\alpha$ and $(e_\alpha, e_\beta) = 0$ for $\alpha \ne \beta$. An orthonormal family is linearly independent, and any two of its members are at distance $\|e_\alpha - e_\beta\| = \sqrt2$.

For $u \in H$ the scalars
$$
\hat u(\alpha) = (u, e_\alpha)
$$
are the **Fourier coefficients** of $u$ with respect to the family. The name is justified by the classical case: for $H = L^2(0,2\pi)$ and $e_k(t) = (2\pi)^{-1/2}e^{ikt}$ these are the coefficients of the :ref[Fourier series]{to=fourier.fourier-series} of $u$.

A subset $S \subseteq H$ is **total** (:cite[Kreyszig]{work=kreyszig-1978 loc="Def. 3.6-1, p. 168"}) or **spanning** (:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.6, p. 275"}) if the set of finite linear combinations of its members is dense in $H$. A **total orthonormal family** is called an **orthonormal basis**. The empty family is orthonormal (vacuously), and the set of finite linear combinations of no vectors is $\{0\}$; so by this definition the empty family is the orthonormal basis of the zero space, which is the convention we use whenever $H = \{0\}$ is not excluded by hypothesis.

$H$ is **separable** if it contains a countable dense subset; equivalently, by :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.6, p. 276"}, if it has a countable spanning set.

**A warning about two words.** An orthonormal basis is *not* a basis in the algebraic (Hamel) sense unless $H$ is finite-dimensional: its expansions are infinite series, not finite sums. And "complete" is used in this subject for two unrelated things — completeness of a *metric space*, and the property (a) below of an orthonormal *set*. :cite[Kreyszig]{work=kreyszig-1978 loc="§3.6, footnote 4, p. 168"} reserves the word for the metric sense and says "total" for the other; :cite[Folland]{work=folland-1999 loc="Thm 5.27, p. 175"} and most of the physics literature say "complete orthonormal set". We follow Kreyszig's terminology and point out the clash where it matters.
:::

:::statement[Bessel's inequality and the convergence criterion]{provenance=adapted src="kreyszig-1978:Thm 3.4-6, p. 157, and Thm 3.5-2, p. 164; folland-1999:Bessel's Inequality 5.26, p. 175; stakgold-holst-2011:the Riesz-Fischer theorem, p. 277"}
Let $\{e_\alpha\}_{\alpha \in A}$ be an orthonormal family in a Hilbert space $H$.

1. **Bessel's inequality.** For every $u \in H$,
$$
\sum_{\alpha \in A} |(u,e_\alpha)|^2 \;\le\; \|u\|^2 ,
$$
the sum being the supremum of its finite subsums. In particular at most countably many Fourier coefficients of $u$ are non-zero.
2. **Convergence criterion (Riesz-Fischer).** Let $(e_k)_{k\ge1}$ be an orthonormal *sequence* and $(\alpha_k)$ scalars. The series $\sum_{k\ge1}\alpha_k e_k$ converges in $H$ **if and only if** $\sum_{k\ge1}|\alpha_k|^2$ converges. When it does, its sum $u$ has $\alpha_k = (u,e_k)$, so the series is the Fourier series of its own sum, and $\|u\|^2 = \sum_k |\alpha_k|^2$.
3. In particular, by part 1 the series $\sum_k (u,e_k)e_k$ converges for *every* $u \in H$ — but, without further hypotheses, not necessarily to $u$.
:::

:::statement[What makes an orthonormal family a basis]{provenance=adapted src="folland-1999:Thm 5.27, p. 175, Prop. 5.28, Prop. 5.29, p. 176, and Prop. 5.30, p. 177; kreyszig-1978:Thm 3.6-2, p. 169, Thm 3.6-3, p. 170, Thm 3.6-4, p. 171, and Thm 3.6-5, p. 173"}
Let $\{e_\alpha\}_{\alpha\in A}$ be an orthonormal family in a Hilbert space $H$. The following are equivalent.

- **(a) Maximality.** If $(u,e_\alpha) = 0$ for every $\alpha$, then $u = 0$.
- **(b) Parseval's identity.** $\displaystyle \|u\|^2 = \sum_{\alpha\in A}|(u,e_\alpha)|^2$ for every $u \in H$.
- **(c) Expansion.** $\displaystyle u = \sum_{\alpha\in A}(u,e_\alpha)e_\alpha$ for every $u \in H$, the sum having only countably many non-zero terms and converging in norm regardless of the order in which they are taken.
- **(d) Totality.** The span of $\{e_\alpha\}$ is dense in $H$.

A family with these properties is an orthonormal basis. Further:

4. **Existence.** Every Hilbert space $H \ne \{0\}$ has an orthonormal basis.
5. **Separability.** $H$ is separable if and only if it has a countable orthonormal basis, and then *every* orthonormal basis of $H$ is countable.
6. **Classification.** If $\{e_\alpha\}_{\alpha\in A}$ is an orthonormal basis, then $u \mapsto \hat u$ is a unitary map of $H$ onto $\ell^2(A)$: it is linear, onto, and preserves inner products. Consequently (:cite[Kreyszig]{work=kreyszig-1978 loc="Thm 3.6-5, p. 173"}) two Hilbert spaces over the same field are isomorphic if and only if their orthonormal bases have the same cardinality, the **Hilbert dimension**. Every separable infinite-dimensional Hilbert space is a copy of $\ell^2$.

The polarisation of (b) holds too: for all $u,v \in H$, $(u,v) = \sum_\alpha (u,e_\alpha)\overline{(v,e_\alpha)}$.

:cite[Hassani]{work=hassani-2013 loc="Thms 7.2.2 and 7.2.3, p. 222"} states item 6 in the concrete form a physicist meets it: every complete inner product space with a countable basis is isomorphic to $L^2_w(a,b)$, and the monomials $\{x^k\}_{k\ge0}$ are a basis of that space, which he attributes to the Stone-Weierstrass theorem.
:::

:::idea{provenance=original}
Bessel's inequality is the Pythagorean theorem plus the projection theorem, and nothing else. For a *finite* subfamily $F$, the vector $\sum_{\alpha\in F}(u,e_\alpha)e_\alpha$ is the orthogonal projection of $u$ onto the span of $\{e_\alpha\}_{\alpha\in F}$, because the coefficients were chosen to make the error orthogonal to each $e_\alpha$. The projection theorem then says $\|u\|^2$ splits as (projection)$^2$ + (error)$^2$, so the projection is no longer than $u$, which is Bessel for $F$. Taking the supremum over finite $F$ gives the general case: the inequality is really a statement about every finite sub-sum at once, which is also why no ordering of $A$ is needed.

The convergence criterion is then almost a restatement: the partial sums of $\sum\alpha_ke_k$ are Cauchy exactly when the partial sums of $\sum|\alpha_k|^2$ are, because orthogonality makes $\|\sum_{m}^{n}\alpha_ke_k\|^2 = \sum_m^n|\alpha_k|^2$ exactly. Completeness of $H$ turns "Cauchy" into "convergent"; this is the only place it is used, and it is indispensable.

The equivalence theorem is a cycle. Given maximality, Bessel says the candidate series converges to *something*; subtracting it from $u$ gives a vector orthogonal to every $e_\alpha$, which maximality kills, so the series converges to $u$ — this is (a) $\Rightarrow$ (c). Then (c) $\Rightarrow$ (b) by continuity of the norm along the partial sums, and (b) $\Rightarrow$ (a) because a vector with all coefficients zero has norm zero. The only subtlety is that $A$ may be uncountable; Bessel's countability clause reduces everything to a sequence.
:::

:::proof[Bessel's inequality and the countability of the coefficients]{provenance=adapted src="folland-1999:Bessel's Inequality 5.26, p. 175; kreyszig-1978:§3.4, pp. 155–157"}
**Step 1: reduce to a finite subfamily.** By definition $\sum_{\alpha\in A}|(u,e_\alpha)|^2$ is the supremum of the sums over finite $F \subseteq A$, so it suffices to prove $\sum_{\alpha\in F}|(u,e_\alpha)|^2 \le \|u\|^2$ for each finite $F$.

**Step 2: the finite sum is a projection.** Put $M_F = \operatorname{span}\{e_\alpha : \alpha\in F\}$, a finite-dimensional, hence closed, subspace, and $v = \sum_{\alpha\in F}(u,e_\alpha)e_\alpha \in M_F$. For each $\beta\in F$, orthonormality gives
$$
(u - v, e_\beta) = (u,e_\beta) - \sum_{\alpha\in F}(u,e_\alpha)(e_\alpha,e_\beta) = (u,e_\beta) - (u,e_\beta) = 0 .
$$
So $u - v \perp M_F$, and by the converse half of :ref[the projection theorem]{to=funcan.projection-theorem}, $v = Pu$ is the orthogonal projection of $u$ onto $M_F$.

**Step 3: Pythagoras.** Since $u = v + (u-v)$ with $v \perp u - v$,
$$
\|u\|^2 = \|v\|^2 + \|u-v\|^2 \;\ge\; \|v\|^2 = \sum_{\alpha\in F}|(u,e_\alpha)|^2 ,
$$
the last equality again by orthonormality. Taking the supremum over finite $F$ proves the inequality.

**Step 4: countability.** Let $A_n = \{\alpha : |(u,e_\alpha)| > 1/n\}$, and suppose some $A_n$ were infinite. Choose an integer $N > n^2\|u\|^2$ and a subfamily $F \subseteq A_n$ with exactly $N$ members. Each of its $N$ terms exceeds $n^{-2}$, so
$$
\sum_{\alpha\in F}|(u,e_\alpha)|^2 \;>\; \frac{N}{n^2} \;>\; \|u\|^2 ,
$$
contradicting step 3. So each $A_n$ is finite, and $\{\alpha : (u,e_\alpha)\ne0\} = \bigcup_{n\ge1}A_n$ is countable. $\square$
:::

:::proof[The convergence criterion]{provenance=adapted src="kreyszig-1978:Thm 3.5-2, pp. 164–165; stakgold-holst-2011:the Riesz-Fischer theorem, p. 277"}
Let $(e_k)$ be orthonormal, $s_n = \sum_{k=1}^n \alpha_k e_k$ and $t_n = \sum_{k=1}^n|\alpha_k|^2$.

**Step 1: the two sequences have the same Cauchy behaviour.** For $n > m$, orthonormality gives exactly
$$
\|s_n - s_m\|^2 = \Bigl\|\sum_{k=m+1}^{n}\alpha_ke_k\Bigr\|^2 = \sum_{k=m+1}^{n}|\alpha_k|^2 = t_n - t_m .
$$
So $(s_n)$ is Cauchy in $H$ if and only if $(t_n)$ is Cauchy in $\mathbb{R}$. This identity, not an inequality, is the whole proof.

**Step 2: both sides are complete.** $H$ is **complete**, so $(s_n)$ Cauchy means $\sum\alpha_ke_k$ converges; $\mathbb{R}$ is complete, and $(t_n)$ is increasing, so $(t_n)$ Cauchy means $\sum|\alpha_k|^2$ converges. The two conditions are therefore equivalent to each other.

**Step 3: the coefficients are the Fourier coefficients.** Suppose $s_n \to u$. Fix $j$. For $n \ge j$, $(s_n, e_j) = \alpha_j$ by orthonormality. The inner product is continuous in its first slot, so
$$
(u,e_j) = \lim_{n\to\infty}(s_n,e_j) = \alpha_j .
$$

**Step 4: the norm.** $\|s_n\|^2 = t_n$ by orthonormality, and both sides converge, giving $\|u\|^2 = \sum_k|\alpha_k|^2$.

**Step 5: part 3 of the statement.** For arbitrary $u \in H$, Bessel's inequality says $\sum_k|(u,e_k)|^2 \le \|u\|^2 < \infty$, so by steps 1–2 the series $\sum_k(u,e_k)e_k$ converges in $H$. Nothing so far says its sum is $u$: for the orthonormal sequence $(e_k)_{k\ge2}$ in a space with basis $(e_k)_{k\ge1}$ and $u = e_1$, every coefficient vanishes and the sum is $0 \ne u$. $\square$
:::

:::proof[The equivalence, existence, separability and classification]{provenance=adapted src="folland-1999:Thm 5.27, pp. 175–176, Prop. 5.28 and Prop. 5.29, p. 176, and Prop. 5.30, p. 177; kreyszig-1978:Thm 3.6-2, p. 169, Thm 3.6-3, p. 170, and Thm 3.6-4, pp. 171–172"}
**Step 1: (a) implies (c).** Let $u \in H$. By step 4 of the Bessel proof, only countably many coefficients are non-zero; enumerate those indices as $\alpha_1,\alpha_2,\dots$ in any order. By Bessel and the convergence criterion, $\sum_j (u,e_{\alpha_j})e_{\alpha_j}$ converges; call the sum $v$, and note that reordering changes nothing, since by the criterion the sum of the squares — a series of non-negative terms — is unconditionally convergent and step 1 of that proof then makes the partial sums Cauchy for any ordering. Now compute $(u - v, e_\beta)$ for an arbitrary $\beta \in A$: if $\beta$ is one of the $\alpha_j$ the two terms cancel, and if not then $(u,e_\beta) = 0$ and $(v,e_\beta) = 0$ by continuity of the inner product. So $u - v$ is orthogonal to every $e_\beta$, and **(a)** forces $u = v$.

**Step 2: (c) implies (b).** With the notation of step 1, orthonormality gives $\bigl\|\sum_{j\le m}(u,e_{\alpha_j})e_{\alpha_j}\bigr\|^2 = \sum_{j\le m}|(u,e_{\alpha_j})|^2$; letting $m\to\infty$ and using continuity of the norm together with (c) gives Parseval.

**Step 3: (b) implies (a).** If every coefficient of $u$ vanishes, Parseval gives $\|u\|^2 = 0$, so $u = 0$.

**Step 4: (a) is the same as (d).** This is part 4 of :ref[the projection theorem]{to=funcan.projection-theorem}: the span of a set $S$ is dense in $H$ exactly when $S^\perp = \{0\}$, and $S^\perp = \{0\}$ is precisely (a). **Completeness of $H$ is used here**, inside that theorem.

**Step 5: polarisation.** Given (c) for both $u$ and $v$, continuity of the inner product in both slots applied to the partial sums gives $(u,v) = \sum_\alpha (u,e_\alpha)\overline{(v,e_\alpha)}$, the series converging absolutely by Cauchy-Schwarz in $\ell^2$.

**Step 6: existence.** Order the orthonormal subsets of $H$ by inclusion. The union of a chain of orthonormal sets is orthonormal — any two of its members lie in a common member of the chain — so every chain has an upper bound, and :ref[Zorn's lemma]{to=found.zorn-lemma} gives a maximal orthonormal set. Maximality means no unit vector can be adjoined orthogonally to all of it, which is exactly (a): a non-zero $u$ with all coefficients zero would give the extra member $u/\|u\|$.

**Step 7: separability.** If $H$ has a countable orthonormal basis $(e_k)$, the finite linear combinations of the $e_k$ with coefficients in $\mathbb{Q}+i\mathbb{Q}$ form a countable set, and it is dense: given $u$ and $\varepsilon>0$, choose $n$ with $\|u - \sum_{k\le n}(u,e_k)e_k\| < \varepsilon/2$ by (c), then rationalise each of the $n$ coefficients to within $\varepsilon/(2n)$ and use the triangle inequality. Conversely, if $H$ is separable and $\{e_\alpha\}$ is *any* orthonormal family, the balls of radius $\sqrt2/3$ about its members are pairwise disjoint, because distinct members are $\sqrt2$ apart; a countable dense set must put a point in each, so the family is countable. Applying Gram-Schmidt to a countable dense sequence (after discarding members that are in the span of their predecessors) produces a countable orthonormal family with dense span, hence a basis by step 4.

**Step 8: classification.** Let $\{e_\alpha\}_{\alpha\in A}$ be an orthonormal basis and $U : u \mapsto \hat u$, $\hat u(\alpha) = (u,e_\alpha)$. By Bessel, $\hat u \in \ell^2(A)$, and $U$ is linear because the inner product is linear in its first slot. It preserves inner products by step 5, hence is isometric and injective. It is onto: given $f \in \ell^2(A)$, only countably many $f(\alpha)$ are non-zero, and the convergence criterion makes $\sum_\alpha f(\alpha)e_\alpha$ converge to some $u$ with $\hat u = f$. So $U$ is unitary. Finally, a unitary map carries orthonormal bases to orthonormal bases, so isomorphic spaces have bases of equal cardinality; and conversely a bijection $A \to B$ between index sets induces a unitary map $\ell^2(A)\to\ell^2(B)$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="kreyszig-1978:Thm 3.6-2 and the remark following it, pp. 169–170, and §3.6, footnote 4, p. 168; stakgold-holst-2011:§4.6, pp. 276 and 288; folland-1999:Thm 5.27, p. 175"}
- **Bessel's inequality needs no completeness and no basis.** It holds in any inner product space, for any orthonormal family, and it is what makes everything else finite. Part 3 of the first statement is the sharp form of the warning: the series always converges, but it converges to the projection of $u$ onto the closed span of the family, which is $u$ only when the family is total.
- **Completeness of $H$ is used twice**: in the convergence criterion (step 2), to turn a Cauchy sequence of partial sums into a vector, and in the equivalence (a) $\Leftrightarrow$ (d), through the projection theorem. :cite[Kreyszig]{work=kreyszig-1978 loc="Thm 3.6-2(b) and the following remark, p. 169"} is explicit that completeness is essential in the direction "$M^\perp = \{0\}$ implies $M$ total", and reports that J. Dixmier gave in 1953 an incomplete inner product space containing no total orthonormal set at all. We have not seen Dixmier's example and report the attribution as Kreyszig gives it.
- **Orthonormality, not just orthogonality, is what makes the coefficients free.** For a merely orthogonal family the same results hold with $(u,e_\alpha)$ replaced by $(u,e_\alpha)/\|e_\alpha\|^2$ and $|(u,e_\alpha)|^2$ by $|(u,e_\alpha)|^2/\|e_\alpha\|^2$; the physics literature usually keeps the unnormalised form and carries the weights explicitly.
- **A spanning set is weaker than a Schauder basis, which is weaker than an orthonormal basis.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.6, p. 276"} warn that a countable spanning set gives only approximation by *finite* combinations whose coefficients may change with the accuracy demanded: $\{1,x,x^2,\dots\}$ spans $L_2(a,b)$, yet almost no $L_2$ function is the sum of a power series. Their Exercise 4.6.7 builds a spanning set, $h_n = e_1 + e_{n+1}/(n+1)$, which is independent, has the same closed span as $\{e_k\}$, and yet admits no series expansion of $e_1$. Orthonormality is what removes this gap, by making the coefficients independent of the truncation.
- **The index set need not be countable** in the equivalence theorem, which is why :cite[Folland]{work=folland-1999 loc="Thm 5.27, p. 175"} phrases (c) with an unordered sum: the countability of the non-zero terms, and hence the irrelevance of their order, is a *conclusion* (Bessel), not a hypothesis. Non-separable Hilbert spaces are rare in applications but do occur. Give the almost-periodic functions on $\mathbb{R}$ the inner product $(f,g) = \lim_{T\to\infty}(2T)^{-1}\int_{-T}^{T}f\bar g$; then $\{e^{i\lambda t}\}_{\lambda\in\mathbb{R}}$ is an uncountable orthonormal family, so no countable set can be dense. That inner product space is itself *incomplete*; the Hilbert space in question is its completion, the Besicovitch space $B^2$, in which the same uncountable family sits as an orthonormal basis.
- **"Complete" means two different things**, as the definition block says; a complete orthonormal set in an incomplete inner product space is a perfectly meaningful object, and the Dixmier example above is exactly about when one exists.
:::

:::method[Showing that an orthonormal family is a basis]{provenance=original}
1. **Prefer criterion (a).** Assume $(u,e_\alpha) = 0$ for all $\alpha$ and deduce $u = 0$. This requires no estimate and no expansion, and it is the only criterion that is a single implication rather than a statement about all $u$ at once.
2. **For eigenfunctions of a differential operator,** do not verify (a) directly: cite the theorem that produces them. Regular :ref[Sturm-Liouville]{to=ode.sturm-liouville-theory} problems and :ref[compact self-adjoint operators]{to=funcan.compact-self-adjoint} both deliver a complete orthonormal set of eigenfunctions as part of their conclusion.
3. **For a family built from a dense class,** use totality directly: if the span of $\{e_\alpha\}$ contains a set already known to be dense, it is dense. In $L^2(a,b)$ on a bounded interval, "contains all polynomials" suffices, by the Weierstrass approximation theorem and the density of $C[a,b]$ in $L^2$.
4. **To test a candidate numerically,** take a few functions whose norms you know and compare $\sum_k|(u,e_k)|^2$ against $\|u\|^2$. A persistent shortfall that does not shrink as more terms are added indicates a missing basis element; a shortfall that shrinks like the tail of a convergent series indicates only truncation.
5. **To estimate how many terms are needed,** use Parseval on the tail: the squared $L^2$ error of the $n$-term truncation is exactly $\sum_{k>n}|(u,e_k)|^2$, so the decay rate of the coefficients is the convergence rate of the expansion. Smoothness of $u$ controls that decay; see :ref[smoothness and decay]{to=fourier.smoothness-decay}.
6. **Never drop a basis element** "because its coefficient looks small" without checking the tail: removing a single $e_1$ from a basis leaves an orthonormal family that is still infinite and still independent, but is no longer total.
:::

:::example[Parseval checked exactly, and Bessel seen to be strict]{provenance=original}
Work in the real Hilbert space $H = L^2(0,1)$ with $(f,g) = \int_0^1 fg\,dx$, and take
$$
e_n(x) = \sqrt2\,\sin(n\pi x) , \qquad n = 1,2,3,\dots
$$
These are orthonormal: $2\int_0^1\sin(m\pi x)\sin(n\pi x)dx = \int_0^1[\cos((m-n)\pi x) - \cos((m+n)\pi x)]dx$, which is $0$ for $m\ne n$ and $1$ for $m = n$. They are total, being the normalised eigenfunctions of the regular Sturm-Liouville problem $-y'' = \lambda y$, $y(0)=y(1)=0$ (:ref[Sturm-Liouville theory]{to=ode.sturm-liouville-theory}).

**Step 1: the coefficients of a test function.** Let $u(x) = x(1-x)$. Two integrations by parts give
$$
\int_0^1 x(1-x)\sin(n\pi x)\,dx = \frac{2\bigl(1 - (-1)^n\bigr)}{n^3\pi^3} ,
$$
so
$$
(u,e_n) = \frac{2\sqrt2\bigl(1-(-1)^n\bigr)}{n^3\pi^3} = \begin{cases} \dfrac{4\sqrt2}{n^3\pi^3}, & n \text{ odd},\\[2mm] 0, & n \text{ even}.\end{cases}
$$
The even coefficients vanish because $u$ is symmetric about $x = \tfrac12$ while $e_n$ is antisymmetric there for even $n$.

**Step 2: the two sides of Parseval.** On the left,
$$
\|u\|^2 = \int_0^1 x^2(1-x)^2dx = \frac13 - \frac12 + \frac15 = \frac{1}{30} .
$$
On the right, summing over odd $n = 2j-1$,
$$
\sum_{n\ \mathrm{odd}} \frac{32}{n^6\pi^6} = \frac{32}{\pi^6}\sum_{n\ \mathrm{odd}}\frac{1}{n^6} = \frac{32}{\pi^6}\Bigl(1 - 2^{-6}\Bigr)\zeta(6) = \frac{32}{\pi^6}\cdot\frac{63}{64}\cdot\frac{\pi^6}{945} = \frac{2016}{60480} = \frac{1}{30} ,
$$
using $\zeta(6) = \pi^6/945$ (:ref[the Riemann zeta function and Bernoulli numbers]{to=spec.zeta-bernoulli}) and the fact that the even terms contribute $2^{-6}\zeta(6)$. The two sides agree exactly: $\|u\|^2 = \sum_n |(u,e_n)|^2 = 1/30 = 0.0333333\ldots$ Read backwards, Parseval has just evaluated $\sum_{n\ \mathrm{odd}}n^{-6} = \pi^6/960$.

**Step 3: how fast the series converges.** The first term alone is $32/\pi^6 = 0.0332852$, which is $99.8555\%$ of $1/30$. By item 5 of the method, the squared $L^2$ error of the one-term approximation $u \approx (u,e_1)e_1$ is the tail
$$
\frac{1}{30} - \frac{32}{\pi^6} = 4.8166\times10^{-5} ,
$$
so the relative error in norm is $\sqrt{4.8166\times10^{-5}\cdot30} = 0.0380$, under $4\%$ from a single sine. The coefficients fall like $n^{-3}$ because $u$ vanishes at both endpoints but $u''$ does not.

**Step 4: Bessel, strictly.** Now discard $e_1$ and keep only $F = \{e_n : n \ge 2\}$, still orthonormal. For the same $u$,
$$
\sum_{n\ge2}|(u,e_n)|^2 = \frac{1}{30} - \frac{32}{\pi^6} = 4.8166\times10^{-5} \;<\; \frac{1}{30} = \|u\|^2 ,
$$
so Bessel's inequality is strict, by a factor of about $692$. Criterion (a) fails visibly: $e_1$ itself is a non-zero vector with every $F$-coefficient equal to zero. The deficit $\|u\|^2 - \sum_{n\ge2}|(u,e_n)|^2 = |(u,e_1)|^2$ is exactly the squared length of the part of $u$ that $F$ cannot see — the general fact that Bessel's deficit is the squared distance to the closed span, which is step 3 of the Bessel proof read as an equality.
:::

:::application{provenance=original}
**Eigenfunction expansions and the closure relation.** Solving a boundary-value problem by separation of variables produces a candidate solution as an infinite series in the eigenfunctions; the series means nothing until the eigenfunctions are known to be total, and the identification of the coefficients by taking inner products is step 3 of the convergence proof. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§17.1, pp. 558–559, and §17.3.3, eq. (17.28), p. 563"} present the same content in the form physicists use. They expand $f$ in an orthonormal set $\hat\phi_n$ and read off $c_n = \langle\hat\phi_n|f\rangle$ (their inner product is conjugate-linear in the first slot and carries a weight $\rho$); their Bessel inequality $\langle f|f\rangle \ge \sum_n|c_n|^2$ becomes an equality exactly when the sum runs over the whole basis, which is our (b); and completeness of the eigenfunctions $\hat y_n$ of a Hermitian operator is written as the **closure relation**
$$
\rho(z)\sum_n \hat y_n(x)\hat y_n^*(z) = \delta(x-z) .
$$
The weight $\rho$ there is the one in $\langle f|g\rangle = \int_a^b f^*g\rho\,dx$, and dropping it falsifies the identity for any non-constant weight. This is Parseval's identity in the language of :ref[the Dirac delta]{to=vcalc.dirac-delta-basics}, obtained by applying (c) to the functional "evaluate at $x$". See :ref[eigenfunction expansions]{to=ode.eigenfunction-expansions} and :ref[eigenfunction expansions of Green's functions]{to=green.eigenfunction-expansion-green}.

**Quantum mechanics.** The states of a system form a separable Hilbert space, and the eigenstates of an observable with discrete spectrum form an orthonormal basis; item 6 is the reason Heisenberg's matrix mechanics on $\ell^2$ and Schrödinger's wave mechanics on $L^2$ are the same theory, a point settled historically exactly by the classification above. Parseval's identity is the statement that the probabilities $|\langle n|\psi\rangle|^2$ of the possible measurement outcomes sum to $1$, and the closure relation is written $\sum_n |n\rangle\langle n| = 1$. See :ref[the mathematical framework of quantum mechanics]{to=funcan.quantum-mechanics-framework}.

**Signal processing and data compression.** Parseval says the energy of a signal equals the energy of its coefficient sequence, so discarding small coefficients changes the signal by a controlled amount — exactly the tail estimate of item 5. This is the principle behind transform coding, and the choice of basis (Fourier, wavelet, Karhunen-Loève) is a choice of which family makes the tail decay fastest for the signals at hand. See :ref[Parseval and mean-square convergence]{to=fourier.parseval-mean-square} and :ref[the discrete Fourier transform and the FFT]{to=fourier.dft-fft}.

**Empirical orthogonal functions.** In climate science and other data analysis, a covariance operator on $L^2$ of the spatial domain is diagonalised and its eigenfunctions — the EOFs — are used as the basis; the variance explained by the first $n$ modes is the $n$-term Parseval partial sum, and the residual variance is the Bessel deficit of step 4 above. See :ref[EOF and principal component analysis]{to=stats.eof-pca}.

**Spectral numerical methods.** A spectral method represents the unknown by its first $N$ coefficients in a total orthonormal family and converts the differential equation into equations for those coefficients. The accuracy is governed by the tail, which for smooth data decays faster than any power of $N$; that "spectral accuracy" is Parseval plus the decay of coefficients of smooth functions. See :ref[spectral methods]{to=num.spectral-methods}.
:::
