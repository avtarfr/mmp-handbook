---
id: funcan.hilbert-spaces
title: Hilbert spaces
kind: definition
level: core
summary: A Hilbert space is an inner product space that is complete; this unit says which of the standard inner product spaces are complete and which are not, proves the completeness of $\ell^2$, and uses the parallelogram law as the test that decides whether a given Banach space is a Hilbert space at all.
prereqs: [funcan.normed-banach-spaces, linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§3.1, Def. 3.1-1 (inner product space, Hilbert space) with the axioms (IP1)–(IP4), the induced norm (1) and metric (2), pp. 128–129, sesquilinearity and the parallelogram equality (4), p. 130, Def. 3.1-2 (orthogonality), p. 131, Examples 3.1-3 to 3.1-6 ($\\mathbb{R}^n$, $\\mathbb{C}^n$, $C[a,b]$ with the integral inner product and its completion $L^2[a,b]$, and the sequence space $\\ell^2$), pp. 131–133, Example 3.1-7 ($\\ell^p$ with $p \\ne 2$ is not an inner product space, shown by $x=(1,1,0,\\dots)$, $y=(1,-1,0,\\dots)$), p. 133, Example 3.1-8 ($C[a,b]$ in the sup norm is not an inner product space), p. 134, and the polarization identities (9) and (10), p. 134; §3.2, Lemma 3.2-2 (continuity of the inner product), p. 138, Thm 3.2-3 (every inner product space has a Hilbert space completion, unique up to isomorphism) with the definition of an isomorphism, pp. 139–140, and Thm 3.2-4 (a subspace is complete iff closed; finite-dimensional subspaces are complete; subsets of a separable space are separable), p. 140; §1.5, Example 1.5-4 (completeness of $\\ell^p$), pp. 35–36"
    pages: "35-36, 128-140"
    role: the definition of a Hilbert space, the catalogue of examples and non-examples, the parallelogram law used as a test with its two counterexample pairs, the completion theorem, and the subspace theorem
  - work: reed-simon-1980
    loc: "§II.1, pp. 36–40: the inner product axioms with the convention that the product is linear in the *second* variable and the explicit warning that other texts differ, p. 36; orthonormal sets, Thm II.1 (Pythagoras), Bessel and Schwarz, pp. 37–38; the parallelogram law and Thm II.2 (an inner product space is a normed space), p. 38; the definition of a Hilbert space as a complete inner product space, of a pre-Hilbert space, and of an isomorphism implemented by a unitary operator, and the completion of an inner product space, pp. 39–40; Example 2 revisited ($L^2[a,b]$ complete, and the completion of $C[a,b]$ in the mean-square norm), p. 39; Examples 3–6 ($\\ell_2$, $L^2(\\mathbb{R}^n,d\\mu)$, direct sums, vector-valued $L^2$) and the statement that every separable infinite-dimensional Hilbert space is isomorphic to $\\ell_2$, pp. 39–40"
    pages: "36-41"
    role: the definition, the catalogue of constructions (direct sums, vector-valued $L^2$), the canonical role of $\ell^2$, and the opposite sesquilinearity convention
  - work: hassani-2013
    loc: "§7.1, Def. 7.1.1 (Cauchy sequence in a normed linear space) and Def. 7.1.2 (complete vector space) with Example 7.1.3 ($\\mathbb{R}$, $\\mathbb{C}$ complete, $\\mathbb{Q}$ not), p. 216; Prop. 7.1.4 (every finite-dimensional inner product space over $\\mathbb{R}$ or $\\mathbb{C}$ is complete) with its coordinate proof, p. 217; Example 7.1.5 (the ramp functions $f_k$ in $C^0(-1,1)$, Cauchy in the mean-square norm with a discontinuous limit), p. 217; the definition of a Banach space and Def. 7.1.6 (a complete inner product space is a Hilbert space), p. 218"
    pages: "216-218"
    role: the finite-dimensional completeness proposition, the concrete sequence showing the continuous functions are not complete in the mean-square norm, and the physicists' statement of the definition
  - work: folland-1999
    loc: "§5.5, the inner product axioms, p. 171; pre-Hilbert spaces, the Schwarz inequality 5.19 with the equality case, Prop. 5.20 (the induced norm is a norm), the definition of a Hilbert space, and the $L^2(\\mu)$ example with the pointwise bound $|fg| \\le \\frac12(|f|^2+|g|^2)$, p. 172; $\\ell^2(A)$ as $L^2$ of counting measure, with completeness referred to Thm 6.6, p. 173; Prop. 5.21 (continuity of the inner product), 5.22 (parallelogram law) and 5.23 (Pythagoras), p. 173; the note that quantum physics takes the scalar product linear in the second variable, p. 180"
    pages: "171-173, 180"
    role: the measure-theoretic definition of $L^2$ and $\ell^2(A)$ as one construction, and the record of the physics convention
  - work: stakgold-holst-2011
    loc: "§4.5, the definition of a Hilbert space as a complete inner product space and of a Euclidean space $E^n$, p. 264; the parallelogram law (4.5.7) with the remark that it holds only for norms that come from an inner product, p. 264; orthogonality and Pythagoras, p. 264; Example 5 ($C[a,b]$ with the sup norm is a Banach space whose norm is not from an inner product) and Example 6 (the Sobolev space $H^1(\\Omega)$ as a completion), p. 272; Exercises 4.5.1 (only $p=2$ satisfies the parallelogram law), 4.5.3 (the polarization identities (4.5.16) and (4.5.17), and the uniqueness of an inner product generating a given norm) and 4.5.4 (the Jordan-von Neumann theorem), pp. 272–273"
    pages: "264-273"
    role: the Jordan-von Neumann characterisation as stated in the library, the uniqueness of the inner product behind a norm, and the Sobolev space as a Hilbert space obtained by completion
---

:::definition[Hilbert space]{provenance=adapted src="kreyszig-1978:§3.1, Def. 3.1-1, pp. 128–129; reed-simon-1980:§II.1, pp. 39–40; hassani-2013:§7.1, Def. 7.1.6, p. 218; folland-1999:§5.5, p. 172; stakgold-holst-2011:§4.5, p. 264"}
Let $X$ be an inner product space over $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$, in the sense of :ref[inner products and norms]{to=linalg.inner-product-spaces}: a vector space carrying a map $(\cdot,\cdot) : X\times X\to\mathbb{K}$ that is linear in its first slot, conjugate-symmetric, and positive definite. It carries the **induced norm** and **induced metric**

$$
\lVert x\rVert = (x,x)^{1/2} , \qquad d(x,y) = \lVert x-y\rVert = (x-y,\,x-y)^{1/2} ,
$$

so every inner product space is a normed space and hence a metric space.

A **Hilbert space** is an inner product space that is **complete** in that metric. An inner product space that is not assumed complete is a **pre-Hilbert space**.

Thus the three structures nest:

$$
\text{inner product space} \;\subset\; \text{normed space},
\qquad
\text{Hilbert space} \;\subset\; \text{Banach space} ,
$$

and a Hilbert space is exactly a Banach space whose norm happens to come from an inner product. Which Banach spaces those are is decided below.

Completeness is the whole content of the word "Hilbert". Everything *geometric* — Cauchy-Schwarz, the triangle inequality, Pythagoras, orthogonality, the parallelogram law, polarization — holds in any inner product space and is proved in :ref[inner products and norms]{to=linalg.inner-product-spaces} without completeness. What completeness buys is that limits of Cauchy sequences exist, and from that follow the three theorems that make Hilbert space worth a name: :ref[the projection theorem]{to=funcan.projection-theorem}, the convergence of :ref[orthonormal expansions]{to=funcan.orthonormal-bases}, and :ref[the Riesz representation theorem]{to=funcan.riesz-representation}. None of them survives in a merely pre-Hilbert space.
:::

:::statement[Which inner product spaces are Hilbert spaces]{provenance=adapted src="kreyszig-1978:§3.1, Examples 3.1-3 to 3.1-8, pp. 131–134, §3.2, Thms 3.2-3 and 3.2-4, pp. 139–140, and §1.5, Example 1.5-4, pp. 35–36; reed-simon-1980:§II.1, pp. 39–40; hassani-2013:§7.1, Prop. 7.1.4 and Example 7.1.5, p. 217; folland-1999:§5.5, pp. 172–173; stakgold-holst-2011:§4.5, p. 264 and Exercises 4.5.1 and 4.5.4, pp. 272–273"}
1. **Hilbert spaces.**
   - $\mathbb{R}^n$ and $\mathbb{C}^n$ with $(x,y) = \sum_j x_j\overline{y_j}$. More generally **every finite-dimensional inner product space over $\mathbb{R}$ or $\mathbb{C}$ is a Hilbert space.**
   - $\ell^2 = \{\,x = (x_1,x_2,\dots) : \sum_j\lvert x_j\rvert^2<\infty\,\}$ with $(x,y) = \sum_j x_j\overline{y_j}$, the series converging absolutely by Cauchy-Schwarz.
   - $L^2(X,\mathcal{M},\mu)$ for any measure space, with $(f,g) = \int_X f\,\overline{g}\,\mathrm{d}\mu$, the integral being finite because $\lvert fg\rvert \le \tfrac12(\lvert f\rvert^2+\lvert g\rvert^2)$. Completeness is the $p=2$ case of the Riesz-Fischer theorem of :ref[$L^p$ spaces]{to=measure.lp-spaces}. Taking $\mu$ to be counting measure on a set $A$ recovers $\ell^2(A)$, so the two previous items are one construction.
   - Direct sums: if $H_1,H_2,\dots$ are Hilbert spaces, the sequences $(x_n)$ with $x_n\in H_n$ and $\sum_n\lVert x_n\rVert^2_{H_n}<\infty$ form a Hilbert space $\bigoplus_n H_n$ under the sum of the inner products.
   - Any closed subspace of a Hilbert space; and the Sobolev space $H^1(\Omega)$, the completion of the continuously differentiable functions in the norm from $(u,v) = \int_\Omega(\nabla u\cdot\nabla v + uv)$.
2. **Pre-Hilbert spaces that are not Hilbert spaces.**
   - $C[a,b]$ with $(x,y) = \int_a^b x\overline{y}$. Its completion is $L^2[a,b]$.
   - The sequences with only finitely many nonzero entries, with the $\ell^2$ inner product.
   - The polynomials on $[a,b]$, with any of the inner products above.

   Each is a dense, non-closed subspace of a Hilbert space.
3. **Subspaces.** If $Y$ is a subspace of a Hilbert space $H$, then $Y$ is itself a Hilbert space exactly when $Y$ is closed in $H$; every finite-dimensional subspace is closed, hence a Hilbert space; and if $H$ is separable so is every subset of it.
4. **Completion.** Every inner product space $X$ is isomorphic to a dense subspace of a Hilbert space $H$, and $H$ is unique up to isomorphism. Here an **isomorphism** of inner product spaces is a linear bijection $T$ with $(Tx,Ty) = (x,y)$ for all $x,y$; such a $T$ is automatically isometric, and between Hilbert spaces it is called **unitary**.
5. **The test: which norms come from an inner product.** By the parallelogram law (:ref[inner products and norms]{to=linalg.inner-product-spaces}, parts 5 and 7), a norm on a vector space $W$ is induced by an inner product if and only if
   $$
   \lVert x+y\rVert^2+\lVert x-y\rVert^2 = 2\lVert x\rVert^2+2\lVert y\rVert^2
   \qquad\text{for all } x,y \in W,
   $$
   and the inner product is then uniquely determined by polarization. Consequently:
   - a Banach space is a Hilbert space precisely when its norm satisfies this identity;
   - $\ell^p$ and $L^p$ for $p \ne 2$ are Banach spaces and **not** Hilbert spaces;
   - $C[a,b]$ with the sup norm is a Banach space and **not** a Hilbert space.
6. **$\ell^2$ is the model.** Every separable infinite-dimensional Hilbert space is isomorphic to $\ell^2$; every $n$-dimensional one is isomorphic to $\mathbb{K}^n$. Hilbert spaces are therefore classified by one cardinal number, the size of an orthonormal basis; the proof belongs to :ref[orthonormal bases in Hilbert space]{to=funcan.orthonormal-bases}.
:::

:::idea{provenance=original}
Part 1 is three completeness proofs with one structure, the scheme of :ref[metric spaces and completeness]{to=funcan.metric-spaces}: a Cauchy sequence in the space forces a Cauchy sequence of scalars in each coordinate, those converge because $\mathbb{K}$ is complete, and the limits are assembled into a candidate which must then be shown to lie in the space and to be approached in the *norm* and not merely coordinatewise. The second of those two checks is where the summability condition $\sum\lvert x_j\rvert^2<\infty$ is verified, and the trick is to prove it for every finite partial sum with a bound that does not depend on how many terms are taken, and only then let the number of terms go to infinity.

Part 2 is the same calculation read backwards: an approximating sequence stays inside the subspace while its limit does not.

Part 5 is the only item that is not about completeness. An inner product has more structure than a norm — it knows angles, not just lengths — and the parallelogram law is the exact algebraic shadow of that extra structure on the norm. To refute it for a given norm one needs only two well-chosen vectors, which is why the counterexamples below are two lines each.
:::

:::proof[Completeness of $\ell^2$, and the non-examples of part 2]{provenance=adapted src="kreyszig-1978:§1.5, Example 1.5-4, pp. 35–36, and §3.1, Examples 3.1-6 to 3.1-8, pp. 133–134; hassani-2013:§7.1, Prop. 7.1.4, p. 217"}
**$\ell^2$ is complete.** Let $\bigl(x^{(m)}\bigr)_{m\ge1}$ be Cauchy in $\ell^2$, with $x^{(m)} = \bigl(x^{(m)}_1,x^{(m)}_2,\dots\bigr)$.

1. *Coordinates.* For every $j$, $\bigl\lvert x^{(m)}_j - x^{(n)}_j\bigr\rvert \le \bigl\lVert x^{(m)}-x^{(n)}\bigr\rVert$, so the $j$-th coordinates form a Cauchy sequence of scalars. By completeness of $\mathbb{K}$ it converges; call the limit $x_j$, and put $x = (x_1,x_2,\dots)$.
2. *A bound uniform in the number of terms.* Given $\varepsilon>0$ choose $N$ with $\lVert x^{(m)}-x^{(n)}\rVert\le\varepsilon$ for $m,n>N$. For every $k$ and every $m,n>N$, the finite sum satisfies
   $$
   \sum_{j=1}^{k}\bigl\lvert x^{(m)}_j - x^{(n)}_j\bigr\rvert^2 \ \le\ \bigl\lVert x^{(m)}-x^{(n)}\bigr\rVert^2 \ \le\ \varepsilon^2 .
   $$
   Let $n\to\infty$: the sum has **finitely many** terms, each converging by step 1, so the non-strict inequality passes to the limit and $\sum_{j=1}^{k}\lvert x^{(m)}_j - x_j\rvert^2 \le \varepsilon^2$ for every $k$ and every $m>N$. **It is because the bound $\varepsilon^2$ does not depend on $k$** that we may now let $k\to\infty$:
   $$
   \bigl\lVert x^{(m)}-x\bigr\rVert^2 = \sum_{j=1}^{\infty}\bigl\lvert x^{(m)}_j - x_j\bigr\rvert^2 \ \le\ \varepsilon^2 \qquad (m>N) . \tag{$\ast$}
   $$
3. *The limit is in the space.* $(\ast)$ says $x^{(m)}-x \in \ell^2$. Since $x^{(m)}\in\ell^2$ and $\ell^2$ is a vector space — by Minkowski's inequality, the $p=2$ case in :ref[$L^p$ spaces]{to=measure.lp-spaces} — we get $x = x^{(m)}-(x^{(m)}-x) \in \ell^2$.
4. *Convergence in norm.* $(\ast)$ says exactly $\lVert x^{(m)}-x\rVert\le\varepsilon$ for $m>N$, that is $x^{(m)}\to x$ in $\ell^2$.

**Finite-dimensional inner product spaces are complete.** Let $\dim X = n$ and let $e_1,\dots,e_n$ be an orthonormal basis, available by Gram-Schmidt (:ref[Gram-Schmidt orthogonalisation]{to=linalg.gram-schmidt}). Writing $x^{(m)} = \sum_k\alpha^{(m)}_ke_k$, orthonormality gives
$$
\bigl\lVert x^{(m)}-x^{(r)}\bigr\rVert^2 = \sum_{k=1}^{n}\bigl\lvert\alpha^{(m)}_k-\alpha^{(r)}_k\bigr\rvert^2 ,
$$
so a Cauchy sequence of vectors is exactly $n$ Cauchy sequences of scalars; their limits $\alpha_k$ assemble into $x = \sum_k\alpha_ke_k \in X$, and the same identity gives $\lVert x^{(m)}-x\rVert\to0$. There is no step 3 here, because a finite linear combination of basis vectors is automatically in the space. (This also follows from part 6 of :ref[normed and Banach spaces]{to=funcan.normed-banach-spaces}, which needs no inner product.)

**The three non-examples of part 2.** In each case the space is a subspace of a Hilbert space and the proof is the same: exhibit a sequence in the subspace converging, in the ambient norm, to a point outside it, so the subspace is not closed and part 3 applies.
- *Finitely supported sequences in $\ell^2$.* Take $x^{(m)} = (1,\tfrac12,\dots,\tfrac1m,0,0,\dots)$. For $n>m$, $\lVert x^{(n)}-x^{(m)}\rVert^2 = \sum_{j=m+1}^{n}j^{-2} \le \sum_{j>m}j^{-2}\to0$, so the sequence is Cauchy; its $\ell^2$ limit is $(1/j)_{j\ge1}$, which has infinitely many nonzero entries.
- *$C[a,b]$ in the mean-square norm.* :cite[Hassani's]{work=hassani-2013 loc="§7.1, Example 7.1.5, p. 217"} ramps $f_k$ on $[-1,1]$, equal to $0$ for $x\le-1/k$, to $(kx+1)/2$ in between and to $1$ for $x\ge1/k$, are continuous and Cauchy in the mean-square norm, and converge to a function with a jump at $0$. :ref[Metric spaces and completeness]{to=funcan.metric-spaces} carries the same conclusion for a different sequence.
- *Polynomials.* They are dense in $L^2(a,b)$ and are not all of it, so they are not closed. $\square$
:::

:::proof[Part 5: the test, and its two applications]{provenance=adapted src="kreyszig-1978:§3.1, Examples 3.1-7 and 3.1-8, pp. 133–134; stakgold-holst-2011:§4.5, Exercises 4.5.1, 4.5.3 and 4.5.4, pp. 272–273"}
The identity itself, and the fact that it characterises inner-product norms, are parts 5 and 7 of :ref[inner products and norms]{to=linalg.inner-product-spaces}; the characterisation is the Jordan-von Neumann theorem, which :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.5, Exercise 4.5.4, p. 273"} set out in the library as a guided exercise: assuming the law, the polarization formula *defines* a function $f(u,v)$, and one checks in turn that it is continuous in $v$, additive in $u$, and homogeneous, hence an inner product; by their Exercise 4.5.3 no other inner product can give the same norm. Only the forward direction is needed to refute, and it is what the two computations use.

**$\ell^p$, $p\ne2$, is not a Hilbert space.** Take $x = (1,1,0,0,\dots)$ and $y = (1,-1,0,0,\dots)$, both in $\ell^p$ for every $p$. Then $x+y = (2,0,0,\dots)$ and $x-y = (0,2,0,\dots)$, so
$$
\lVert x+y\rVert_p = \lVert x-y\rVert_p = 2 ,
\qquad
\lVert x\rVert_p = \lVert y\rVert_p = 2^{1/p} .
$$
The parallelogram law would require $4+4 = 2\cdot2^{2/p}+2\cdot2^{2/p}$, that is $2^{2/p} = 2$, that is $p = 2$. So for $p\ne2$ the $\ell^p$ norm is induced by no inner product; since $\ell^p$ is complete, it is a Banach space that is not a Hilbert space.

**$C[a,b]$ with the sup norm is not a Hilbert space.** It is enough to exhibit two continuous functions violating the law; the worked example below does so on $[0,1]$ with explicit numbers, and the same two functions, rescaled by $t\mapsto(t-a)/(b-a)$, work on any $[a,b]$ because the sup norm is unchanged by that substitution. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="kreyszig-1978:§3.1, pp. 130, 133–134, and §3.2, Thms 3.2-3 and 3.2-4, pp. 139–140; reed-simon-1980:§II.1, pp. 36, 39–40; folland-1999:§5.5, pp. 172, 180; stakgold-holst-2011:§4.5, Exercise 4.5.3, pp. 272–273"}
- **Completeness is used nowhere in the geometry and everywhere in the analysis.** Cauchy-Schwarz, Pythagoras and the parallelogram law are identities, true in any pre-Hilbert space. The existence of a nearest point in a closed convex set, of an orthogonal projection, of the sum of an orthonormal expansion, and of the vector representing a bounded functional are all existence statements, and each fails in a pre-Hilbert space. The non-closed subspaces of part 2 are where to look for counterexamples: in the finitely supported sequences, the vector $(1/j)$ has no nearest point in any reasonable sense, because the infimum of the distance is $0$ and is not attained.
- **Closedness, not completeness, is the hypothesis one checks on a subspace.** Part 3 reduces one to the other, and it is the finite-dimensional case that makes approximation arguments work: a best approximation by polynomials of degree $\le N$ exists because that subspace is closed, while a best approximation by polynomials of unrestricted degree need not.
- **Positive definiteness, $(x,x)=0 \Rightarrow x=0$, is what makes $d$ a metric rather than a pseudometric.** On the actual square-integrable functions $(f,f)=0$ only forces $f=0$ almost everywhere; $L^2$ is a space of equivalence classes for exactly this reason, which is the same repair as for $\lVert\cdot\rVert_p$ in :ref[$L^p$ spaces]{to=measure.lp-spaces}.
- **The parallelogram test needs only two vectors, and it is a *necessary* condition used contrapositively.** To show a norm *is* an inner-product norm one must verify the identity for all pairs, which is usually done by exhibiting the inner product instead.
- **Uniqueness in part 4 is up to isomorphism, not equality.** Two completions of $C[a,b]$ in the mean-square norm are different sets of objects related by a unitary map; in particular $L^2[a,b]$ built as a completion (:cite[Kreyszig]{work=kreyszig-1978 loc="§3.1, Example 3.1-5, p. 132"}) and $L^2[a,b]$ built from the Lebesgue integral (:ref[$L^p$ spaces]{to=measure.lp-spaces}) are isomorphic, and this unit uses neither construction as a hypothesis.
- **Separability in part 6 is a real restriction**, even though every Hilbert space arising in physics is separable. Drop it and the classification is by a larger cardinal; the statement "every Hilbert space is $\ell^2$" is false without it.
- **The slot that is linear.** This handbook, with :cite[Kreyszig]{work=kreyszig-1978 loc="§3.1, p. 130"} and :cite[Folland]{work=folland-1999 loc="§5.5, p. 171"}, takes $(\cdot,\cdot)$ linear in the **first** argument. :cite[Reed and Simon]{work=reed-simon-1980 loc="§II.1, p. 36"} take it linear in the **second** and say so explicitly, and :cite[Folland]{work=folland-1999 loc="§5.5, note to §5.5, p. 180"} records that the physics literature, writing $\langle x\vert y\rangle$, does the same. The two conventions are related by $(x,y)_{\text{here}} = \overline{(x,y)_{\text{theirs}}}$ and no statement in this unit changes; what does change is which argument a scalar may be pulled out of unconjugated, so a formula transcribed from one convention into the other must have its conjugations checked.
:::

:::method[Deciding what a given space is]{provenance=original}
Given a vector space $W$ with a candidate structure, settle three questions in order.

1. **Is there an inner product, or only a norm?** If a formula $(x,y)$ is given, check conjugate symmetry, linearity in the first slot, and $(x,x)>0$ for $x\ne0$ — positivity is usually the only one with content. If only a norm is given, test the parallelogram law on two vectors chosen to make $x+y$ and $x-y$ simple: for a sequence or function space, take two "bumps" with disjoint supports, which makes $\lVert x+y\rVert = \lVert x-y\rVert$ and reduces the law to an arithmetic identity. If it fails, the space carries no inner product and the matter is closed.
2. **Is it complete?** Prefer not to prove it from scratch. Identify $W$ as a subspace of a known Hilbert space — $\ell^2$, $L^2(\mu)$, or a direct sum of these — and then by part 3 the question is whether $W$ is **closed**. If $W$ is defined by finitely many continuous linear conditions, or is finite-dimensional, it is closed. If $W$ is defined by a condition that can be lost in the limit — "finitely many nonzero terms", "polynomial", "continuous", "compactly supported" — expect it to be dense and not closed.
3. **If it is not complete, name its completion.** The completion exists and is unique by part 4, and in practice it is already a familiar space: $L^2$ for the continuous functions in the mean-square norm, $\ell^2$ for the finitely supported sequences, $H^1$ for the continuously differentiable functions in the Dirichlet norm. Work in the completion, and recover statements about the original space by density.

To recover the inner product from a norm already known to satisfy the parallelogram law, use polarization: over $\mathbb{R}$, $4(x,y) = \lVert x+y\rVert^2-\lVert x-y\rVert^2$; over $\mathbb{C}$, add $i\bigl(\lVert x+iy\rVert^2-\lVert x-iy\rVert^2\bigr)$.
:::

:::example[The parallelogram test, run twice]{provenance=original}
**Test 1: the sup norm on $C[0,1]$.** Take
$$
f(t) = t , \qquad g(t) = t^2 .
$$
Then $\lVert f\rVert_\infty = \lVert g\rVert_\infty = 1$, both maxima at $t=1$. Next,
$$
(f+g)(t) = t+t^2 , \qquad \lVert f+g\rVert_\infty = 2 \ \ (\text{at } t=1),
$$
since $t+t^2$ increases on $[0,1]$; and
$$
(f-g)(t) = t-t^2 , \qquad \lVert f-g\rVert_\infty = \tfrac14 \ \ (\text{at } t=\tfrac12),
$$
since $t-t^2$ has derivative $1-2t$. Therefore
$$
\lVert f+g\rVert_\infty^2+\lVert f-g\rVert_\infty^2 = 4+\tfrac{1}{16} = \tfrac{65}{16} = 4.0625 ,
\qquad
2\lVert f\rVert_\infty^2+2\lVert g\rVert_\infty^2 = 4 .
$$
The two sides differ by $0.0625$, so the parallelogram law fails and **the sup norm on $C[0,1]$ comes from no inner product**. $C[0,1]$ is a Banach space, and it is not a Hilbert space.

**Test 2: $\ell^3$.** Take the first two standard unit vectors $e_1 = (1,0,0,\dots)$ and $e_2 = (0,1,0,\dots)$. Then $\lVert e_1\rVert_3 = \lVert e_2\rVert_3 = 1$, while $e_1\pm e_2$ has two entries of modulus $1$, so
$$
\lVert e_1+e_2\rVert_3 = \lVert e_1-e_2\rVert_3 = 2^{1/3} = 1.2599210 .
$$
Hence
$$
\lVert e_1+e_2\rVert_3^2+\lVert e_1-e_2\rVert_3^2 = 2\cdot2^{2/3} = 2^{5/3} = 3.1748021 ,
\qquad
2+2 = 4 .
$$
Again the law fails, and $\ell^3$ is a Banach space that is not a Hilbert space. The same computation with a general $p$ gives $2^{(p+2)/p}$ against $4$, equal only at $p=2$ — the scalar statement behind part 5.

**The contrast: $L^2(0,1)$.** Take $f\equiv1$ and $g(t)=t$ with $(f,g) = \int_0^1 t\,\mathrm{d}t = \tfrac12$. Then
$$
\lVert f\rVert^2 = 1 , \qquad \lVert g\rVert^2 = \int_0^1t^2\,\mathrm{d}t = \tfrac13 ,
$$
$$
\lVert f+g\rVert^2 = \int_0^1(1+t)^2\,\mathrm{d}t = \tfrac73 ,
\qquad
\lVert f-g\rVert^2 = \int_0^1(1-t)^2\,\mathrm{d}t = \tfrac13 ,
$$
and the law holds exactly: $\tfrac73+\tfrac13 = \tfrac83 = 2(1)+2(\tfrac13)$. Cauchy-Schwarz is also strict here, $\lvert(f,g)\rvert = 0.5$ against $\lVert f\rVert\lVert g\rVert = 3^{-1/2} = 0.5773503$, as it must be since $f$ and $g$ are linearly independent, and the angle between them is
$$
\theta = \arccos\frac{1/2}{1\cdot3^{-1/2}} = \arccos\frac{\sqrt3}{2} = 30^\circ
$$
exactly. The constant function and the ramp make an angle of thirty degrees on the unit interval: that is the kind of statement an inner product licenses and a norm alone does not.
:::

:::example[Completeness made quantitative, and where it stops]{provenance=original}
Work in $\ell^2$ and let $S \subset \ell^2$ be the subspace of sequences with only finitely many nonzero terms. Put

$$
x = \Bigl(1,\tfrac12,\tfrac13,\dots\Bigr) , \qquad x^{(m)} = \Bigl(1,\tfrac12,\dots,\tfrac1m,0,0,\dots\Bigr) \in S .
$$

**$x$ is in $\ell^2$ and $x^{(m)}$ converges to it.** By the Basel sum,
$$
\lVert x\rVert^2 = \sum_{j=1}^{\infty}\frac{1}{j^2} = \frac{\pi^2}{6} = 1.6449341 ,
\qquad \lVert x\rVert = 1.2825499 ,
$$
so $x \in \ell^2$, and the tail is
$$
\lVert x-x^{(m)}\rVert^2 = \sum_{j>m}\frac{1}{j^2} .
$$
At $m=10$ the partial sum is $\sum_{j\le10}j^{-2} = 1.5497677$, so
$$
\lVert x-x^{(10)}\rVert^2 = 1.6449341-1.5497677 = 0.0951664 ,
\qquad \lVert x-x^{(10)}\rVert = 0.3084904 ,
$$
about $24\%$ of $\lVert x\rVert$. At $m=100$ the distance is $0.0997505$, about $7.8\%$. The integral comparison $\sum_{j>m}j^{-2} \in (1/(m+1),\,1/m)$ shows the distance decays like $m^{-1/2}$, which is slow: to get within $10^{-3}$ one needs $m \approx 10^{6}$.

**Where the two spaces part company.** The sequence $\bigl(x^{(m)}\bigr)$ is Cauchy, since $\lVert x^{(n)}-x^{(m)}\rVert^2 = \sum_{m<j\le n}j^{-2} \le 1/m$ for $n>m$. In $\ell^2$ it converges, to $x$. In $S$ it cannot converge: a limit in $S$ would also be a limit in $\ell^2$, hence equal to $x$ by uniqueness of limits, and $x \notin S$. So $S$ is an inner product space, dense in $\ell^2$ and not complete; it is a pre-Hilbert space and not a Hilbert space, and $\ell^2$ is its completion.

**The numerical moral.** Every element of $S$ is a vector one can actually store. The theorem that $\ell^2$ is complete is the statement that a sequence of such finite vectors, improving in the sense of a computable error estimate, has something to converge to — and the example shows the limit may be an object with infinitely many nonzero entries, outside every space one can represent exactly. Truncating at $m=10$ costs $0.308$ in norm; the completeness theorem is what entitles one to speak of the error at all.
:::

:::application{provenance=original}
**Quantum mechanics.** The state space of a quantum system is a separable complex Hilbert space, by hypothesis of the theory; for a particle in three dimensions it is $L^2(\mathbb{R}^3)$. Completeness is what makes an eigenfunction expansion converge to a state rather than to nothing, what makes a projection onto an eigenspace exist, and what makes the time evolution of :ref[Stone's theorem]{to=funcan.stone-theorem} well defined. The inner product, not merely the norm, is what supplies the transition amplitude $(\psi,\varphi)$ and hence the Born probability $\lvert(\psi,\varphi)\rvert^2$ — and Cauchy-Schwarz is what keeps that probability at most $1$. See :ref[the mathematical framework of quantum mechanics]{to=funcan.quantum-mechanics-framework}.

**Least squares and estimation.** Fitting data by minimising a sum or integral of squares is minimising a distance in an $\ell^2$ or $L^2$ norm, and the normal equations are the orthogonality conditions that the minimiser must satisfy; see :ref[projections and least squares]{to=linalg.projections-least-squares}. The existence of the minimiser in infinite dimensions is :ref[the projection theorem]{to=funcan.projection-theorem}, which needs completeness; this is why "least squares" is a theorem in $L^2$ and only a hope in $L^1$ or $L^\infty$, where the parallelogram law fails and the nearest point need not exist, nor be unique when it does.

**Fourier analysis.** :ref[Parseval's identity]{to=fourier.parseval-mean-square} says the Fourier coefficient map is a unitary isomorphism $L^2(-\pi,\pi) \to \ell^2(\mathbb{Z})$, which is part 6 made explicit, and :ref[Plancherel's theorem]{to=fourier.plancherel} is its continuous analogue. Every statement that a signal's energy is conserved by a transform is the statement that the transform is unitary between two Hilbert spaces.

**Probability.** The finite-variance random variables on a probability space form $L^2(\Omega,\mathcal{F},\mathbb{P})$, with $(X,Y)=\mathbb{E}[X\overline{Y}]$; uncorrelated means orthogonal, variance is squared norm, and :ref[conditional expectation]{to=prob.conditional-expectation} is an orthogonal projection onto a closed subspace. Pythagoras in this space is the variance decomposition, and the parallelogram law is the identity $\operatorname{Var}(X+Y)+\operatorname{Var}(X-Y) = 2\operatorname{Var}X+2\operatorname{Var}Y$.

**Partial differential equations.** Variational methods minimise an energy that is a squared Hilbert norm, usually a Sobolev one; :ref[the Lax-Milgram theorem]{to=pde.lax-milgram} and the Rayleigh-Ritz method of :ref[Rayleigh-Ritz]{to=var.rayleigh-ritz} both run in a Hilbert space and both use completeness to produce the minimiser. The same completeness underlies the convergence of :ref[finite elements]{to=num.finite-elements}, where the approximating subspaces are finite-dimensional and hence closed, and the limit is taken in the ambient Hilbert space.

**Why not a Banach space.** The worked examples show that $C[0,1]$ in the sup norm and $\ell^p$ for $p\ne2$ are perfectly good complete spaces with no inner product, and therefore no orthogonality, no projection, no Parseval. Whenever a method relies on decomposing a vector into orthogonal pieces — normal modes, principal components, multipoles, spherical harmonics — it is relying on an inner product, and the first question to ask of any new function space is whether its norm passes the parallelogram test.
:::
