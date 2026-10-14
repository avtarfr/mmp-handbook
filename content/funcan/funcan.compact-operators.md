---
id: funcan.compact-operators
title: Compact operators
kind: definition
level: core
summary: "Defines the operators that carry bounded sets to sets with compact closure, shows that they form a closed two-sided ideal containing every bounded finite-rank operator, identifies them on a separable Hilbert space as exactly the norm limits of finite-rank operators, and gives the working criterion that an integral operator with a square-integrable kernel is compact."
prereqs: [funcan.bounded-operators, funcan.adjoint-operators, funcan.riesz-representation, funcan.orthonormal-bases, funcan.weak-convergence, funcan.hahn-banach, found.compactness, measure.lp-spaces]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§8.1, pp. 405–410: Definition 8.1-1 (compact linear operator); Lemma 8.1-2 (a compact operator is bounded; the identity on an infinite-dimensional space is not compact); Theorem 8.1-3 (the sequential criterion); Theorem 8.1-4 (finite-dimensional domain or range); Theorem 8.1-5 (a uniform operator limit of compact operators is compact) with its diagonal proof; the remark after 8.1-5 that strong convergence is not enough, with the truncation operators on $\\ell^{2}$; Example 8.1-6; Theorem 8.1-7 (weakly convergent sequences go to strongly convergent ones)"
    pages: "405-410"
    role: the definition, the sequential criterion, the vector-space and finite-rank facts, the diagonal proof that the compact operators are norm-closed, the counterexample separating norm convergence from strong convergence, and the weak-to-strong property
  - work: reed-simon-1980
    loc: "§VI.5, pp. 199–201: the definition of a compact operator and the finite-rank example, p. 199; Theorem VI.11 (weak to norm convergence); Theorem VI.12 (norm limits, adjoints, and products with bounded operators); Theorem VI.13 (on a separable Hilbert space every compact operator is a norm limit of finite-rank operators) with its proof by the decreasing suprema $\\lambda_{n}$. §VI.6, pp. 210–211: the definition of a Hilbert–Schmidt operator by $\\operatorname{tr}T^{*}T<\\infty$, Theorem VI.22 (the Hilbert–Schmidt class is a $*$-ideal of compact operators, square-summable singular values, finite-rank operators dense in it) and Theorem VI.23 (an operator on $L^{2}(M,\\mathrm{d}\\mu)$ is Hilbert–Schmidt exactly when it is the integral operator of a kernel in $L^{2}(M\\times M)$, with equality of norms)"
    pages: "199-201, 210-211"
    role: the ideal properties collected in one theorem, the finite-rank approximation theorem on a separable Hilbert space and its proof route, and the identification of Hilbert–Schmidt operators with square-integrable kernels
  - work: hassani-2013
    loc: "§17.5, pp. 523–526: Definition 17.5.1 and Theorem 17.5.2 (the two forms of the definition); Example 17.5.3 (products with bounded operators, linear combinations, polynomials in a compact operator); Definition 17.5.4 and Proposition 17.5.5 (finite rank); Theorem 17.5.6 (norm limits); Theorem 17.5.7 ($K$ compact if and only if $K^{\\dagger}$ is), with the heuristic matrix-truncation argument that precedes it; Definition 17.5.8 and Theorem 17.5.9 (Hilbert–Schmidt operators are compact); Example 17.5.10 (a continuous kernel on a closed rectangle has finite Hilbert–Schmidt trace)"
    pages: "523-526"
    role: the algebraic closure properties stated as a worked example, the trace definition of the Hilbert–Schmidt class, and the computation of $\\operatorname{tr}K^{\\dagger}K$ for an integral operator
  - work: stakgold-holst-2011
    loc: "§5.7, pp. 336–338: the definition; the argument that a compact operator is bounded; the identity operator as the standard non-example; Theorem 5.7.1 ($Ke_{n}\\to0$ along any infinite orthonormal sequence) and its corollary (the inverse of an invertible compact operator is unbounded); Theorem 5.7.2 (norm limits of compact operators) with its diagonal proof. §6.1, pp. 356–358: the definitions of separable, Hilbert–Schmidt and Holmgren kernels, (6.1.18)–(6.1.20); the theorem that a Hilbert–Schmidt operator is compact, with the three-step proof through separable kernels; the examples $\\lvert x-\\xi\\rvert^{-\\alpha}$ on the unit square and $\\mathrm{e}^{-\\lvert x-\\xi\\rvert}$ on the line"
    pages: "336-338, 356-358"
    role: the statement that an orthonormal sequence is annihilated in the limit, the corollary on unbounded inverses, the proof that a Hilbert–Schmidt kernel gives a compact operator by truncating its double Fourier series, and the examples marking the edge of the class
  - work: evans-2010
    loc: "Appendix D.5, pp. 679–682: the definition of a compact operator between Banach spaces; the remark that a compact operator on a Hilbert space turns weak convergence into norm convergence; Theorem 4 (compactness of adjoints) with its proof; Theorem 5 (Fredholm alternative) and Theorem 6 (the spectrum of a compact operator), p. 682"
    pages: "679-682"
    role: the short Hilbert-space proof that the adjoint of a compact operator is compact, and the statement of what compactness buys for the equation $u-Ku=f$
---

:::definition[Compact operator, finite rank, Hilbert–Schmidt class]{provenance=adapted src="kreyszig-1978:§8.1, Def. 8.1-1 and Thm 8.1-3, pp. 405–407; reed-simon-1980:§VI.5, the definition on p. 199, and §VI.6, the definition of the Hilbert–Schmidt class, p. 210; hassani-2013:§17.5, Defs 17.5.1, 17.5.4 and 17.5.8 and Thm 17.5.2, pp. 524–525; stakgold-holst-2011:§5.7, the definition, p. 336"}
Let $X$ and $Y$ be normed spaces. A linear operator $T\colon X\to Y$ is **compact** (the older name, still used by Kreyszig, Reed and Simon and Stakgold and Holst, is *completely continuous*) if it carries every bounded subset of $X$ to a subset of $Y$ whose closure is compact.

Because a subset of a metric space is compact exactly when every sequence in it has a subsequence converging inside it (:ref[]{to=found.compactness}), the definition can be restated for sequences, and that is the form used in practice:

> $T$ is compact exactly when every bounded sequence $(x_{n})\subset X$ admits a subsequence along which the images converge in $Y$.

Two subclasses matter.

- $T$ has **finite rank** if its range $T(X)$ is finite-dimensional. Its rank is $\dim T(X)$.
- Let $H$ be a separable Hilbert space with orthonormal basis $\{e_{i}\}$ (:ref[]{to=funcan.orthonormal-bases}). A bounded operator $T$ on $H$ is **Hilbert–Schmidt** if
  $$
  \operatorname{tr}(T^{*}T) \;=\; \sum_{i}\,(T^{*}Te_{i},e_{i}) \;=\; \sum_{i}\lVert Te_{i}\rVert^{2} \;<\;\infty ,
  $$
  the value being independent of the basis. We write $\lVert T\rVert_{2}=(\operatorname{tr}T^{*}T)^{1/2}$ for the **Hilbert–Schmidt norm**.

Throughout, $\lVert T\rVert$ is the operator norm (:ref[]{to=funcan.bounded-operators}), and $T^{*}$ the Hilbert adjoint (:ref[]{to=funcan.adjoint-operators}). Reed and Simon use the notation $\mathcal{J}_{2}$ for the Hilbert–Schmidt class; Hassani writes the trace with a dagger, $\operatorname{tr}(T^{\dagger}T)$.
:::

:::statement[What compactness gives]{provenance=adapted src="kreyszig-1978:§8.1, Lemma 8.1-2, Thms 8.1-3, 8.1-4, 8.1-5 and 8.1-7, pp. 406–410; reed-simon-1980:§VI.5, Thms VI.11, VI.12 and VI.13, pp. 199–201, and §VI.6, Thms VI.22 and VI.23, pp. 210–211; hassani-2013:§17.5, Example 17.5.3, Prop. 17.5.5, Thms 17.5.6, 17.5.7 and 17.5.9, pp. 524–525; stakgold-holst-2011:§5.7, Thms 5.7.1 and 5.7.2 with the corollary, pp. 336–337, and §6.1, the compactness theorem for Hilbert–Schmidt operators, pp. 357–358; evans-2010:Appendix D.5, Thm 4, p. 679"}
Below $X$, $Y$ and $Z$ denote normed spaces and $H$ a Hilbert space.

1. **Compact implies bounded.** A compact operator is automatically bounded, and so continuous. Boundedness is strictly weaker: for $\dim X=\infty$ the identity $I\colon X\to X$ fails to be compact.
2. **Finite rank.** A bounded operator of finite rank is compact. In particular every linear operator on a finite-dimensional space is compact.
3. **An ideal.** The compact operators from $X$ to $Y$ form a vector subspace of the bounded operators. If $T\colon X\to Y$ is compact and $S\colon Y\to Z$ is bounded, then $ST$ is compact; if $S\colon Z\to X$ is bounded, then $TS$ is compact. So on a single space the compact operators absorb multiplication by bounded operators from either side, and any polynomial in a compact operator with zero constant term is compact.
4. **Norm closedness.** Suppose $Y$ is complete, each $T_{n}\colon X\to Y$ is compact, and $\lVert T_{n}-T\rVert\to0$. Then the limit $T$ is compact too. Convergence in the operator norm is essential here; pointwise ("strong") convergence $T_{n}x\to Tx$ is not enough.
5. **Finite-rank approximation.** On a separable $H$, compactness of an operator is **equivalent** to its being approximable in operator norm, to any accuracy, by operators of finite rank. One direction is parts 2 and 4; the other is Reed and Simon's Theorem VI.13.
6. **Adjoints.** A bounded operator $T$ on a Hilbert space is compact if and only if $T^{*}$ is. (Reed and Simon state this for Banach spaces with the Banach-space adjoint $T'$.)
7. **Weak to strong.** If $T\colon X\to Y$ is compact and $x_{n}\rightharpoonup x$ weakly in $X$, then $Tx_{n}\to Tx$ in norm (:ref[]{to=funcan.weak-convergence}). As a special case, if $\{e_{n}\}$ is an infinite orthonormal sequence in $H$ and $K$ is compact, then $Ke_{n}\to0$.
8. **Inverses are bad.** Should a compact operator be invertible, with $\dim H=\infty$, the inverse cannot be bounded. Put the other way: in infinite dimensions no compact operator has a bounded inverse.
9. **Hilbert–Schmidt operators.** Every Hilbert–Schmidt operator is compact, with $\lVert T\rVert\le\lVert T\rVert_{2}$, and the Hilbert–Schmidt class is itself a two-sided $*$-ideal in which the finite-rank operators are dense in $\lVert\cdot\rVert_{2}$.
10. **Square-integrable kernels.** Let $(M,\mu)$ be a measure space and $H=L^{2}(M,\mathrm{d}\mu)$. Membership of $A$ in the Hilbert–Schmidt class is **equivalent** to the existence of some $K\in L^{2}(M\times M,\mathrm{d}\mu\otimes\mathrm{d}\mu)$ representing it as
    $$
    (Au)(x)=\int_{M}K(x,y)\,u(y)\,\mathrm{d}\mu(y),
    \qquad\text{and then}\qquad
    \lVert A\rVert_{2}^{2}=\iint_{M\times M}\lvert K(x,y)\rvert^{2}\,\mathrm{d}\mu(x)\,\mathrm{d}\mu(y) .
    $$
    Hence **an integral operator whose kernel is square-integrable on the product is compact.** This is the criterion that does nearly all the work in applications; the kernel side of it is set out in :ref[]{to=green.integral-equations}.
:::

:::idea{provenance=original}
Compactness is the property that lets an infinite-dimensional operator behave like a matrix. A bounded operator may spread the unit ball out over infinitely many independent directions with no loss of size — the identity does exactly that — and then nothing finite-dimensional survives. A compact operator cannot: it squeezes the unit ball into a set small enough that sequences in the image must bunch up. Two consequences follow almost mechanically. First, the compact operators are closed under norm limits, because a diagonal subsequence can be chosen that works for every approximating operator at once, and an $\varepsilon/3$ estimate transfers the Cauchy property to the limit. Second, a finite-rank operator is compact because bounded sets in a finite-dimensional space are relatively compact, so anything that can be approximated in norm by finite-rank operators is compact — and on a separable Hilbert space nothing else is. The last part of the statement says when that approximation is available in practice: an $L^{2}$ kernel is a square-summable "infinite matrix" in any product orthonormal basis, and truncating the matrix truncates the operator.
:::

:::proof[Parts 1–4]{provenance=adapted src="kreyszig-1978:§8.1, proofs of Lemma 8.1-2, Thms 8.1-3, 8.1-4 and 8.1-5, pp. 406–409; stakgold-holst-2011:§5.7, the boundedness argument and the proof of Thm 5.7.2, pp. 336–337; hassani-2013:§17.5, Example 17.5.3, p. 524"}
**Part 1.** Let $T$ be compact and suppose $T$ were unbounded. Then there are unit vectors $x_{n}$ with $\lVert Tx_{n}\rVert\to\infty$. The sequence $(x_{n})$ is bounded, so compactness gives a subsequence along which $(Tx_{n})$ converges, hence is bounded — contradicting $\lVert Tx_{n}\rVert\to\infty$. (This is Stakgold and Holst's argument.) For the identity on an infinite-dimensional space, take an infinite orthonormal sequence, or more generally use Riesz's lemma to produce a bounded sequence whose terms stay a fixed distance apart; its image under $I$ is itself, which has no convergent subsequence. The hypothesis $\dim X=\infty$ is exactly what makes such a sequence exist.

**Part 2.** Let $T$ be bounded with $\dim T(X)=m<\infty$, and let $(x_{n})$ be bounded, $\lVert x_{n}\rVert\le c$. Then $\lVert Tx_{n}\rVert\le c\lVert T\rVert$, so $(Tx_{n})$ is a bounded sequence in the $m$-dimensional space $T(X)$. Bounded sets in a finite-dimensional normed space are relatively compact (Bolzano–Weierstrass, coordinate by coordinate in any basis), so $(Tx_{n})$ has a convergent subsequence. If instead $\dim X<\infty$, then $T$ is automatically bounded and $\dim T(X)\le\dim X<\infty$, so the same applies.

**Part 3.** If $T_{1},T_{2}$ are compact and $(x_{n})$ is bounded, extract a subsequence along which $(T_{1}x_{n})$ converges, then a further subsequence along which $(T_{2}x_{n})$ converges too; along it $((\alpha T_{1}+\beta T_{2})x_{n})$ converges. For $ST$ with $S$ bounded: a convergent subsequence of $(Tx_{n})$ is carried to a convergent subsequence by the continuity of $S$. For $TS$ with $S$ bounded: $(Sx_{n})$ is bounded because $S$ is, and $T$ then supplies the subsequence. These are the observations Hassani records in Example 17.5.3; the last one also makes a product of two compact operators compact, so $p(T)$ is compact for any polynomial $p$ with $p(0)=0$.

**Part 4.** This is the one argument with real content, and we follow Kreyszig and Stakgold and Holst. Let $(x_{m})$ be bounded, $\lVert x_{m}\rVert\le c$. Since $T_{1}$ is compact there is a subsequence $(x^{(1)}_{m})$ of $(x_{m})$ with $(T_{1}x^{(1)}_{m})$ convergent; since $T_{2}$ is compact there is a subsequence $(x^{(2)}_{m})$ of $(x^{(1)}_{m})$ with $(T_{2}x^{(2)}_{m})$ convergent; and so on. Put $y_{m}=x^{(m)}_{m}$. For each fixed $k$ the tail of $(y_{m})$ from index $k$ on is a subsequence of $(x^{(k)}_{m})$, so $(T_{k}y_{m})_{m}$ converges, and in particular is Cauchy. That is the diagonal trick.

Now let $\varepsilon>0$. Choose $k$ with $\lVert T-T_{k}\rVert<\varepsilon/(3c)$ — this is where **norm** convergence is used — and then $N$ with $\lVert T_{k}y_{j}-T_{k}y_{l}\rVert<\varepsilon/3$ for $j,l>N$. For such $j,l$,
$$
\lVert Ty_{j}-Ty_{l}\rVert
\le \lVert (T-T_{k})y_{j}\rVert + \lVert T_{k}y_{j}-T_{k}y_{l}\rVert + \lVert (T_{k}-T)y_{l}\rVert
< \frac{\varepsilon c}{3c}+\frac{\varepsilon}{3}+\frac{\varepsilon c}{3c}=\varepsilon .
$$
So $(Ty_{m})$ is Cauchy in $Y$, and converges because $Y$ is complete — the second place a hypothesis is used. By the sequential criterion $T$ is compact. $\square$
:::

:::proof[Parts 5–8]{provenance=adapted src="reed-simon-1980:§VI.5, proofs of Thms VI.11 and VI.13, pp. 199–201; evans-2010:Appendix D.5, proof of Thm 4, p. 679; stakgold-holst-2011:§5.7, proof of Thm 5.7.1 and its corollary, p. 337; kreyszig-1978:§8.1, Thm 8.1-7, p. 410"}
**Part 7 first**, because the others use it. Let $x_{n}\rightharpoonup x$ and put $y_{n}=Tx_{n}$, $y=Tx$. A weakly convergent sequence is bounded (:ref[]{to=funcan.weak-convergence}), so $(x_{n})$ is bounded. For a bounded functional $g$ on $Y$, the composite $g\circ T$ is a bounded functional on $X$, so $g(y_{n})=(g\circ T)(x_{n})\to(g\circ T)(x)=g(y)$: that is, $y_{n}\rightharpoonup y$ weakly. Suppose $y_{n}\not\to y$ in norm. Then some subsequence satisfies $\lVert y_{n_{k}}-y\rVert\ge\varepsilon>0$. The corresponding $x_{n_{k}}$ are bounded, so by compactness a further subsequence has $y_{n_{k_{j}}}\to\tilde y$ in norm with $\lVert \tilde y-y\rVert\ge\varepsilon$, so $\tilde y\ne y$. Norm convergence implies weak convergence, so that sub-subsequence converges weakly to $\tilde y$; but it also converges weakly to $y$, so $g(\tilde y-y)=0$ for every bounded functional $g$ on $Y$. In a general normed space it is the Hahn–Banach theorem (:ref[]{to=funcan.hahn-banach}) that supplies, for each nonzero vector, a bounded functional not vanishing on it; so the functionals separate points, weak limits are unique, and $\tilde y=y$. Contradiction. (When $Y$ is a Hilbert space, Riesz representation (:ref[]{to=funcan.riesz-representation}) does the same job without Hahn–Banach.) For the orthonormal case, Bessel's inequality gives $\sum_{n}\lvert(u,e_{n})\rvert^{2}\le\lVert u\rVert^{2}<\infty$ for every $u$, hence $(e_{n},u)\to0$ for every $u$, which by the Riesz representation theorem (:ref[]{to=funcan.riesz-representation}) is exactly $e_{n}\rightharpoonup0$; so $Ke_{n}\to0$ in norm. (Stakgold and Holst prove this last statement directly, by contradiction, from the continuity of the inner product.)

**Part 8.** Let $K$ be compact and injective with range all of $H$, $\dim H=\infty$. Take an infinite orthonormal sequence $(e_{n})$, which exists because $H$ is infinite-dimensional. By part 7, $\lVert Ke_{n}\rVert\to0$ while $\lVert e_{n}\rVert=1$, so there is no constant $c>0$ with $\lVert Ku\rVert\ge c\lVert u\rVert$; hence $K^{-1}$ is unbounded. (Alternatively: if $K^{-1}$ were bounded, $I=KK^{-1}$ would be compact by part 3, and it is not.)

**Part 6.** We give Evans's Hilbert-space proof. Let $K$ be compact and let $(u_{k})$ be bounded. Bounded sequences in a Hilbert space have weakly convergent subsequences, so pass to one with $u_{k}\rightharpoonup u$. Moving the outer $K^{*}$ across the inner product by the defining property of the adjoint (:ref[]{to=funcan.adjoint-operators}), and using that the resulting quantity is real,
$$
\lVert K^{*}u_{k}-K^{*}u\rVert^{2}
=\bigl(K^{*}(u_{k}-u),\,K^{*}(u_{k}-u)\bigr)
=\bigl(KK^{*}(u_{k}-u),\,u_{k}-u\bigr).
$$
Since $K^{*}$ is bounded it is weakly continuous, so $K^{*}u_{k}\rightharpoonup K^{*}u$; since $K$ is compact, part 7 upgrades this to $KK^{*}u_{k}\to KK^{*}u$ in norm. The right-hand side is then an inner product of a null sequence with a bounded one, so it tends to $0$. Thus $K^{*}u_{k}\to K^{*}u$ in norm, and $K^{*}$ is compact. Applying this to $K^{*}$ gives the converse.

**Part 5.** One direction is parts 2 and 4. For the other, let $K$ be compact on the separable Hilbert space $H$ with orthonormal basis $\{\varphi_{1},\varphi_{2},\dots\}$, let $P_{n}$ be the orthogonal projection onto $\operatorname{span}\{\varphi_{1},\dots,\varphi_{n}\}$, and set
$$
\lambda_{n}=\sup\bigl\{\lVert K\psi\rVert \;:\; \psi\perp\varphi_{1},\dots,\varphi_{n},\ \lVert\psi\rVert=1\bigr\}
= \lVert K(I-P_{n})\rVert .
$$
Enlarging $n$ shrinks the set over which the supremum is taken, so $(\lambda_{n})$ is decreasing and non-negative, and converges to some $\lambda\ge0$. Suppose $\lambda>0$. Choose unit vectors $\psi_{n}\perp\varphi_{1},\dots,\varphi_{n}$ with $\lVert K\psi_{n}\rVert\ge\lambda/2$. Each $\psi_{n}$ is orthogonal to the first $n$ basis vectors, so for every fixed $u\in H$ we have $(\psi_{n},u)=(\psi_{n},(I-P_{n})u)$, whose modulus is at most $\lVert(I-P_{n})u\rVert\to0$ by completeness of the basis; thus $\psi_{n}\rightharpoonup0$. By part 7, $\lVert K\psi_{n}\rVert\to0$, contradicting $\lVert K\psi_{n}\rVert\ge\lambda/2>0$. Hence $\lambda=0$. Since $KP_{n}$ has rank at most $n$ and $\lVert K-KP_{n}\rVert=\lVert K(I-P_{n})\rVert=\lambda_{n}\to0$, the operator $K$ is a norm limit of finite-rank operators. $\square$
:::

:::proof[Parts 9 and 10]{provenance=adapted src="stakgold-holst-2011:§6.1, the proof that a Hilbert–Schmidt operator is compact, pp. 357–358; reed-simon-1980:§VI.6, Thms VI.22 and VI.23, pp. 210–211; hassani-2013:§17.5, Def. 17.5.8 and Example 17.5.10, pp. 525–526"}
**Part 9, compactness.** Let $T$ be Hilbert–Schmidt, $\{e_{i}\}$ an orthonormal basis, $P_{n}$ the projection onto the span of $e_{1},\dots,e_{n}$. For a unit vector $u=\sum_{i}c_{i}e_{i}$ with $c_{i}=(u,e_{i})$ supported on $i>n$, the triangle inequality and Cauchy–Schwarz give
$$
\lVert Tu\rVert = \Bigl\lVert \sum_{i>n}c_{i}\,Te_{i}\Bigr\rVert
\le \sum_{i>n}\lvert c_{i}\rvert\,\lVert Te_{i}\rVert
\le \Bigl(\sum_{i>n}\lvert c_{i}\rvert^{2}\Bigr)^{1/2}\Bigl(\sum_{i>n}\lVert Te_{i}\rVert^{2}\Bigr)^{1/2}
\le \Bigl(\sum_{i>n}\lVert Te_{i}\rVert^{2}\Bigr)^{1/2} .
$$
Hence $\lVert T-TP_{n}\rVert = \lVert T(I-P_{n})\rVert\le\bigl(\sum_{i>n}\lVert Te_{i}\rVert^{2}\bigr)^{1/2}$, which is the tail of the convergent series $\sum_{i}\lVert Te_{i}\rVert^{2}=\lVert T\rVert_{2}^{2}$ and so tends to $0$. Each $TP_{n}$ has rank at most $n$, so $T$ is compact by parts 2 and 4. Taking $n=0$ in the same estimate gives $\lVert T\rVert\le\lVert T\rVert_{2}$. The remaining assertions of part 9 are Reed and Simon's Theorem VI.22, which we take from them.

**Part 10.** Reed and Simon's Theorem VI.23; we take the equivalence from them and record here the direction that is used in practice, with Stakgold and Holst's route. Let $K\in L^{2}(M\times M)$ and let $\{e_{i}\}$ be an orthonormal basis of $L^{2}(M,\mathrm{d}\mu)$. Then $\{e_{i}(x)\overline{e_{j}(y)}\}_{i,j}$ is an orthonormal basis of $L^{2}(M\times M)$, so
$$
K(x,y)=\sum_{i,j}k_{ij}\,e_{i}(x)\overline{e_{j}(y)},
\qquad k_{ij}=\iint K(x,y)\,\overline{e_{i}(x)}\,e_{j}(y)\,\mathrm{d}\mu(x)\,\mathrm{d}\mu(y),
$$
with $\sum_{i,j}\lvert k_{ij}\rvert^{2}=\iint\lvert K\rvert^{2}<\infty$ by Parseval's identity. Given $\varepsilon>0$, choose $n$ so that the tail over every pair $(i,j)$ with $i>n$ *or* $j>n$ is small,
$$
\sum_{\max(i,j)>n}\lvert k_{ij}\rvert^{2}<\varepsilon^{2},
$$
which is possible because the full double sum converges; let $S_{n}$ be the operator with the truncated kernel $\sum_{i,j\le n}k_{ij}e_{i}(x)\overline{e_{j}(y)}$. That kernel is a finite sum of products of a function of $x$ with a function of $y$ — a *separable* (degenerate) kernel in Stakgold and Holst's terminology (:ref[]{to=green.separable-kernels}) — so $S_{n}$ has rank at most $n$ and is compact. The difference $A-S_{n}$ is the integral operator whose kernel is the discarded part $\sum_{\max(i,j)>n}k_{ij}e_{i}(x)\overline{e_{j}(y)}$, of squared $L^{2}$ norm less than $\varepsilon^{2}$ by the choice of $n$, and the elementary bound $\lVert A\rVert\le\bigl(\iint\lvert K\rvert^{2}\bigr)^{1/2}$ — itself just Cauchy–Schwarz applied inside the integral — gives $\lVert A-S_{n}\rVert\le\varepsilon$. So $A$ is a norm limit of finite-rank operators, hence compact. Computing $\lVert A\rVert_{2}^{2}=\sum_{i}\lVert Ae_{i}\rVert^{2}=\sum_{i,j}\lvert(Ae_{i},e_{j})\rvert^{2}=\sum_{i,j}\lvert k_{ji}\rvert^{2}=\iint\lvert K\rvert^{2}$ identifies the two norms. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="kreyszig-1978:§8.1, Lemma 8.1-2(b) and the remark after Thm 8.1-5, pp. 406–409; reed-simon-1980:§VI.5, Thm VI.13, p. 200, and §VI.6, Thm VI.22(e), p. 210; stakgold-holst-2011:§5.7, p. 336, and §6.1, the examples after the compactness theorem, p. 358; hassani-2013:§17.5, p. 525"}
- **Infinite dimension is where the concept lives.** Part 2 says every operator on a finite-dimensional space is compact, so in finite dimensions "compact" is no condition at all. Hassani marks the point in the margin beside Proposition 17.5.5 (p. 524); every statement that distinguishes compact from bounded — parts 1, 5, 7, 8 — carries the hypothesis $\dim=\infty$ either openly or through the existence of an infinite orthonormal sequence.
- **Norm convergence in part 4, not strong convergence.** The proof uses $\lVert T-T_{k}\rVert<\varepsilon/(3c)$ uniformly over the bounded sequence; a pointwise bound would depend on the vector and the $\varepsilon/3$ argument would collapse. Kreyszig's counterexample is the cleanest: on $\ell^{2}$ let $T_{n}x=(\xi_{1},\dots,\xi_{n},0,0,\dots)$ be truncation. Each $T_{n}$ has rank $n$, so is compact, and $T_{n}x\to x$ for every $x$ because the tail $\sum_{j>n}\lvert\xi_{j}\rvert^{2}$ vanishes. The pointwise limit is the identity, which is not compact. In the operator norm the sequence does not converge at all: $\lVert I-T_{n}\rVert=1$ for every $n$, as the basis vector $e_{n+1}$ shows.
- **Completeness of the target in part 4.** The diagonal argument delivers only that $(Ty_{m})$ is *Cauchy*; it is completeness of $Y$ that turns this into convergence. Over an incomplete target the conclusion can fail.
- **Separability in part 5.** Reed and Simon state the finite-rank approximation theorem for a separable Hilbert space, and their proof uses a countable orthonormal basis to build the projections $P_{n}$. They note that the corresponding question on a general Banach space is a different matter and refer it to their notes; we do not state anything about it here. Part 5 is also what makes the compact operators the *closure* of the finite-rank operators — the smallest norm-closed ideal containing them.
- **Hilbert–Schmidt is strictly stronger than compact.** Part 9 is one-way. Reed and Simon's Theorem VI.22(e) quantifies the gap: a compact operator is Hilbert–Schmidt exactly when its singular values are square-summable. A compact operator whose singular values are, say, $1/\log(n+1)$ is compact but not Hilbert–Schmidt. So failing the kernel test of part 10 does not prove an integral operator non-compact; it only means another argument is needed. Stakgold and Holst give exactly such a case: on the unit square the kernel $\lvert x-\xi\rvert^{-\alpha}$ is Hilbert–Schmidt for $0<\alpha<\tfrac12$, and for $\tfrac12\le\alpha<1$ it is not, yet the operator remains compact.
- **The kernel must be square-integrable on the *product*, and the domain matters.** Stakgold and Holst's standard warning is $K(x,\xi)=\mathrm{e}^{-\lvert x-\xi\rvert}$ on the whole line: bounded, symmetric, and bounded as an operator (it is a Holmgren kernel), but $\iint\lvert K\rvert^{2}$ diverges and the operator is *not* compact. Restricting the same kernel to a finite interval makes it Hilbert–Schmidt and compact. Conversely boundedness of the kernel is not needed: $\mathrm{e}^{-x^{2}-\xi^{2}}$ is Hilbert–Schmidt on the whole plane, and an unbounded kernel such as $\lvert x-\xi\rvert^{-1/4}$ on the unit square is too.
- **Part 7 does not reverse in general.** Reed and Simon note that the converse of their Theorem VI.11 holds when $X$ is reflexive and leave the general case aside; we claim nothing beyond the stated direction.
:::

:::method[Showing that an operator is compact]{provenance=original}
In order of how often each step settles the question:

1. **Is the operator an integral operator with a square-integrable kernel?** Compute $\iint\lvert K\rvert^{2}$ over the product of the domain with itself. If it is finite, part 10 gives compactness and the bound $\lVert A\rVert\le\lVert A\rVert_{2}$ at once. Watch for unbounded domains and for singularities of $K$ on the diagonal: both are places where the integral can diverge.
2. **Is it a norm limit of finite-rank operators?** Exhibit a sequence $T_{n}$ of finite-rank operators and *estimate $\lVert T-T_{n}\rVert$*, not $\lVert Tx-T_{n}x\rVert$ for fixed $x$. Truncating a diagonal matrix, truncating a double Fourier series of a kernel, and smoothing a singular kernel away from the diagonal are the three standard constructions.
3. **Is it a product with a compact factor?** By part 3, $STS'$ is compact as soon as one factor is and the others are bounded. This is how compactness is inherited: a bounded solution operator composed with a compact embedding is compact.
4. **Is it an adjoint, or a sum, of operators already known to be compact?** Parts 3 and 6.
5. **Failing all of these, use the definition.** Take a bounded sequence, extract a subsequence by a compactness theorem adapted to the space — Arzelà–Ascoli for continuous functions, a diagonal argument for sequence spaces — and show the image converges.
6. **To prove an operator is *not* compact**, produce a bounded sequence whose image has no convergent subsequence. An orthonormal sequence $(e_{n})$ is the standard probe: by part 7 a compact operator must send it to zero in norm, so if $\lVert Te_{n}\rVert\ge c>0$ for infinitely many $n$, $T$ is not compact.
:::

:::example[The Volterra operator: compact, with every constant checked]{provenance=original}
On $H=L^{2}(0,1)$ with $(u,v)=\int_{0}^{1}u\overline{v}$, define
$$
(Vu)(x)=\int_{0}^{x}u(t)\,\mathrm{d}t .
$$

**Step 1: $V$ is Hilbert–Schmidt, hence compact.** Write $V$ as an integral operator with kernel
$$
K(x,t)=\begin{cases}1,& 0\le t\le x,\\ 0,& x<t\le1,\end{cases}
$$
the indicator of the lower triangle. Then
$$
\iint_{[0,1]^{2}}\lvert K\rvert^{2}\,\mathrm{d}t\,\mathrm{d}x=\int_{0}^{1}\!\!\int_{0}^{x}1\,\mathrm{d}t\,\mathrm{d}x=\int_{0}^{1}x\,\mathrm{d}x=\frac12 ,
$$
so $K\in L^{2}$ of the square and part 10 gives compactness, with $\lVert V\rVert_{2}=1/\sqrt2=0.70711$ and therefore $\lVert V\rVert\le0.70711$.

**Step 2: the singular values exactly.** Since $(Vu,w)=\int_{0}^{1}\overline{w(x)}\int_{0}^{x}u=\int_{0}^{1}u(t)\overline{\int_{t}^{1}w(x)\,\mathrm{d}x}\,\mathrm{d}t$ (Fubini on the triangle, the integrand being absolutely integrable by Cauchy–Schwarz), the adjoint is $(V^{*}w)(t)=\int_{t}^{1}w$. Put $g=V^{*}Vu$. Differentiating twice,
$$
g'(x)=-(Vu)(x)=-\int_{0}^{x}u, \qquad g''(x)=-u(x),
$$
with $g'(0)=0$ and $g(1)=0$. If $V^{*}Vu=\mu u$ with $\mu\neq0$, then $g=\mu u$ and $g''=-u=-g/\mu$, so $g(x)=\cos(x/\sqrt\mu)$ up to a constant, and $g(1)=0$ forces $\cos(1/\sqrt\mu)=0$, that is
$$
\mu_{n}=\frac{1}{\bigl(n-\tfrac12\bigr)^{2}\pi^{2}},
\qquad
s_{n}=\sqrt{\mu_{n}}=\frac{2}{(2n-1)\pi},
\qquad n=1,2,\dots
$$
(The operator $V^{*}V$ is compact and self-adjoint, so :ref[]{to=funcan.compact-self-adjoint} guarantees that these exhaust its nonzero spectrum.) Numerically $s_{1}=2/\pi=0.63662$, $s_{2}=2/(3\pi)=0.21221$, $s_{3}=0.12732$.

**Step 3: the two computations of the Hilbert–Schmidt norm agree.** By part 9 and the singular-value description,
$$
\sum_{n\ge1}s_{n}^{2}=\frac{1}{\pi^{2}}\sum_{n\ge1}\frac{1}{(n-\tfrac12)^{2}}=\frac{1}{\pi^{2}}\cdot\frac{\pi^{2}}{2}=\frac12 ,
$$
using $\sum_{n\ge1}(n-\tfrac12)^{-2}=4\sum_{m\ \mathrm{odd}}m^{-2}=4\cdot\pi^{2}/8=\pi^{2}/2$. This is the same $\tfrac12$ that step 1 got from $\iint\lvert K\rvert^{2}$ — the equality $\lVert A\rVert_{2}^{2}=\iint\lvert K\rvert^{2}$ of part 10, verified. The operator norm is $\lVert V\rVert=s_{1}=0.63662$, comfortably below the Hilbert–Schmidt bound $0.70711$ of step 1, as part 9 requires.

**Step 4: an explicit finite-rank approximation, with its error proved.** Step 2 identified the eigenfunctions of $V^{*}V$ as multiples of $\cos\bigl((n-\tfrac12)\pi x\bigr)$; normalising them (the integral of $\cos^{2}$ over $(0,1)$ is $\tfrac12$ for each of these frequencies) gives
$$
p_{n}(x)=\sqrt2\,\cos\bigl((n-\tfrac12)\pi x\bigr),
\qquad V^{*}Vp_{n}=s_{n}^{2}\,p_{n},
\qquad n=1,2,\dots
$$
Since $V^{*}Vu=0$ forces $\lVert Vu\rVert^{2}=(Vu,Vu)=(u,V^{*}Vu)=0$ and hence $u=0$ by step 5, the operator $V^{*}V$ has trivial kernel, so by :ref[]{to=funcan.compact-self-adjoint} the family $\{p_{n}\}$ is an orthonormal basis of $L^{2}(0,1)$. Set
$$
q_{n}=\frac{Vp_{n}}{s_{n}},
\qquad\text{which works out to}\qquad
q_{n}(x)=\sqrt2\,\sin\bigl((n-\tfrac12)\pi x\bigr),
$$
again an orthonormal family, since $(Vp_{n},Vp_{m})=(V^{*}Vp_{n},p_{m})=s_{n}^{2}\delta_{nm}$ and therefore $(q_{n},q_{m})=s_{n}^{2}\delta_{nm}/(s_{n}s_{m})=\delta_{nm}$. Now define the rank-$N$ operator
$$
V_{N}u=\sum_{n\le N}s_{n}\,(u,p_{n})\,q_{n} .
$$
Expanding $u=\sum_{n}(u,p_{n})p_{n}$ in the basis and applying the bounded operator $V$ term by term gives $Vu=\sum_{n}s_{n}(u,p_{n})q_{n}$, so by orthonormality of $\{q_{n}\}$ and the monotonicity of $(s_{n})$,
$$
\lVert (V-V_{N})u\rVert^{2}=\sum_{n>N}s_{n}^{2}\,\lvert(u,p_{n})\rvert^{2}\le s_{N+1}^{2}\,\lVert u\rVert^{2},
$$
with equality at $u=p_{N+1}$. The error is therefore exactly the largest discarded singular value,
$$
\lVert V-V_{N}\rVert=s_{N+1}=\frac{2}{(2N+1)\pi},
$$
so $N=5$ already gives $\lVert V-V_{5}\rVert=2/(11\pi)=0.057875$, and the error falls off like $1/N$. A direct discretisation confirms the numbers: replacing $[0,1]$ by $2000$ equal cells and $V$ by the corresponding lower-triangular matrix times the cell width gives top singular values $0.63678$, $0.21226$, $0.12736$ against the exact $0.63662$, $0.21221$, $0.12732$, and $\sum s_{n}^{2}=0.50025$ against $0.5$.

**Step 5: what $V$ is not.** $V$ is compact but has no eigenvalues at all: $Vu=\lambda u$ with $\lambda\ne0$ forces $u=\lambda^{-1}\!\int_{0}^{x}u$, hence $u$ is absolutely continuous with $u(0)=0$ and $\lambda u'=u$, so $u=c\,\mathrm{e}^{x/\lambda}$ and $u(0)=0$ gives $c=0$; and $Vu=0$ gives $u=0$ by differentiating. By part 8 its inverse (differentiation, on the range) is unbounded, as it must be.
:::

:::application{provenance=original}
**Why integral equations are solvable and differential equations are not, directly.** The reason a boundary-value problem is recast as an integral equation (:ref[]{to=green.integral-equations}) is part 10. A differential operator is unbounded and has no finite-dimensional shadow; its inverse, the Green's operator, has a square-integrable kernel on a finite domain and is therefore compact. All the structure that makes the problem tractable — a discrete spectrum, finite multiplicities, the Fredholm alternative (:ref[]{to=green.fredholm-alternative}), an eigenfunction expansion (:ref[]{to=funcan.compact-self-adjoint}) — is a property of the compact inverse, inherited by the differential problem rather than possessed by it. Evans's Theorem 5 is the statement in its abstract form: for $K$ compact, the equation $u-Ku=f$ has a unique solution for every $f$ unless the homogeneous equation has a nonzero solution, and then the solution space is finite-dimensional.

**Scattering theory and the Born series.** In quantum scattering the Lippmann–Schwinger equation is $\psi=\psi_{0}+G_{0}V\psi$, and whether the Born series $\sum (G_{0}V)^{n}\psi_{0}$ converges and whether bound states exist are questions about the operator $G_{0}V$. For a potential decaying fast enough, $G_{0}V$ has a square-integrable kernel and part 10 applies; compactness then yields a discrete set of bound states of finite multiplicity, with the continuum lying elsewhere. The same structure appears in :ref[]{to=green.neumann-series} and :ref[]{to=green.born-approximation}.

**Compact embeddings in partial differential equations.** The modern use of compactness in analysis is not that a given operator is compact but that an *inclusion* is: the Rellich–Kondrachov theorem makes the embedding of a Sobolev space into $L^{2}$ on a bounded domain compact. Part 3 then promotes any bounded solution operator into that Sobolev space to a compact operator on $L^{2}$, which is how existence proofs for elliptic problems obtain discrete spectra and how a minimising sequence is made to converge (:ref[]{to=pde.weak-solutions-sobolev}, :ref[]{to=var.variational-eigenvalues}). The hypothesis that the domain be bounded is exactly the hypothesis that fails for $\mathrm{e}^{-\lvert x-\xi\rvert}$ on the line in the remark above: it is the same loss of compactness, seen twice.

**Numerics: why discretisation works, and when it does not.** Part 5 says a compact operator *is* its finite-rank approximations, up to a norm error that goes to zero. This is the theoretical licence for solving an integral equation by collocation or by a Galerkin method on a finite basis (:ref[]{to=green.separable-kernels}, :ref[]{to=num.spectral-methods}): the discretised problem converges to the true one in operator norm, and with it the spectrum. Part 8 is the warning attached: a compact operator has an unbounded inverse, so the discretised matrices become arbitrarily ill-conditioned as the discretisation is refined (:ref[]{to=linalg.matrix-norms-conditioning}). Solving a first-kind integral equation numerically is therefore ill-posed by construction, and must be regularised; step 4 of the example shows the mechanism, with singular values marching down to zero at a known rate.
:::
