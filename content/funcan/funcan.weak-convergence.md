---
id: funcan.weak-convergence
title: Weak convergence
kind: definition
level: advanced
summary: Defines weak convergence as convergence of every bounded linear functional along the sequence, collects what survives from the norm theory (uniqueness of the limit, boundedness, lower semicontinuity of the norm) and what does not (the norm itself is not continuous), and gives the working test in $\ell^2$ and $\ell^p$ -- bounded plus coordinatewise.
prereqs: [funcan.riesz-representation, funcan.normed-banach-spaces, funcan.hilbert-spaces, funcan.orthonormal-bases, funcan.uniform-boundedness-open-mapping, funcan.hahn-banach]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§4.8, pp. 256–263: Def. 4.8-1 (strong convergence), p. 256; Def. 4.8-2 (weak convergence) with the notation $x_{n}\\rightharpoonup x$, p. 257; Lemma 4.8-3 (uniqueness of the weak limit, subsequences, boundedness) with its proof through the canonical mapping, p. 258; Thm 4.8-4 (strong implies weak; the converse fails; weak implies strong in finite dimensions) with the orthonormal-sequence counterexample and the dual-basis proof, pp. 259–260; the report of I. Schur's 1921 theorem that the two notions agree in $\\ell^{1}$, p. 260; Example 4.8-5 (Hilbert space), p. 260; Example 4.8-6 ($\\ell^{p}$, $1<p<\\infty$: bounded plus coordinatewise) and Lemma 4.8-7 (the total-subset criterion) with its $\\varepsilon/3$ proof, pp. 261–262; Problems 1–10, pp. 262–263. §4.3, Thm 4.3-3 and Cor. 4.3-4 (a vector killed by every bounded functional is zero), p. 223. §4.6, Lemma 4.6-1 ($\\lVert g_{x}\\rVert = \\lVert x\\rVert$ for the canonical embedding), p. 240; Def. 4.6-3 (reflexivity), p. 241; Thm 4.6-6 (every Hilbert space is reflexive), p. 242"
    pages: "223, 240-242, 256-263"
    role: the definitions and notation, the three basic properties with the proof route through the canonical embedding and the uniform boundedness theorem, the finite-dimensional theorem, the total-subset criterion and its specialisation to $\ell^p$, and the Schur attribution
  - work: reed-simon-1980
    loc: "§IV.5, pp. 111–113: the definition of the weak topology on a Banach space as the weakest topology making every $\\ell \\in X^{*}$ continuous, and the resulting description of convergence, pp. 111–112; the Proposition (a) the weak topology is weaker than the norm topology, (b) every weakly convergent sequence is norm bounded, (c) the weak topology is Hausdorff, with the remark that (b) holds for sequences but not for nets, p. 112; Example 1 (in a Hilbert space with orthonormal basis, weak convergence is coordinatewise convergence together with boundedness), p. 112; Thm IV.19 (a linear functional is weakly continuous iff norm continuous) and the fact that the weak closure of the unit sphere is the unit ball in infinite dimensions, p. 113"
    pages: "111-113"
    role: the topological formulation, the sequence-versus-net warning, the Hilbert-space criterion stated in terms of an orthonormal basis, and the measure of how weak the weak topology is
  - work: stakgold-holst-2011
    loc: "§4.8, pp. 294–297: Thm 4.8.3 (a vector annihilated by every bounded functional is zero) and Thm 4.8.4 ($X'$ is a Banach space even when $X$ is not), p. 294; the canonical map $J$ into $X''$ and the definition of reflexivity, p. 294; the list of strong, weak and weak-$*$ convergence as three distinct notions, and the fact that all Hilbert spaces are reflexive, p. 295; Thm 4.8.5 (strong implies weak) and Thm 4.8.6 (the three notions coincide in finite dimensions) with their proofs, and Thm 4.8.7 (weakly convergent sequences are bounded), pp. 295–296; weak sequential compactness and Thms 4.8.8–4.8.9 (Eberlein–Shmulian), pp. 296–297. §10.7, p. 812: the remark that in the finite-dimensional spaces of practical algorithms the three notions coincide, so numerical analysis works with strong convergence"
    pages: "294-297, 812"
    role: the three-way list including weak-$*$ convergence, the completeness of the dual that makes the boundedness proof work in any normed space, the finite-dimensional theorem, and the weak sequential compactness of bounded sets in a reflexive space
  - work: evans-2010
    loc: "Appendix D.4, pp. 678–679: the definition of $u_{k}\\rightharpoonup u$ for a real Banach space, the assertions that strong convergence implies weak, that weakly convergent sequences are bounded and that $\\lVert u\\rVert \\le \\liminf_{k}\\lVert u_{k}\\rVert$; Thm 3 (bounded sequences in a reflexive space have weakly convergent subsequences); Mazur's theorem; the $L^{p}$ example with the warning that weak convergence gives no pointwise information because the functions may oscillate ever faster, p. 679. Appendix D.5, p. 679: a compact operator carries weakly convergent sequences to strongly convergent ones. §8.2, pp. 439–442: the direct method — coercivity gives a bounded minimising sequence, reflexivity gives a weakly convergent subsequence, and convexity of $L$ in the gradient gives weak lower semicontinuity (Thm 1), hence a minimiser (Thm 2); the remark that the proof works because the gradient enters the convexity inequality linearly"
    pages: "439-442, 678-680"
    role: the lower semicontinuity of the norm, weak compactness in reflexive spaces, the weak-to-strong upgrade under a compact operator, and the direct method of the calculus of variations as the principal application
  - work: folland-1999
    loc: "§5.4, pp. 168–171: the weak topology on a normed space $X$ as the one generated by $X^{*}$, and weak convergence as convergence in it, pp. 168–169; the weak-$*$ topology on $X^{*}$ as the topology of pointwise convergence on $X$, weaker than the weak topology, the two agreeing exactly when $X$ is reflexive, p. 169; the strong and weak operator topologies on $L(X,\\mathcal{Y})$, p. 169; Alaoglu's theorem (the closed unit ball of $X^{*}$ is weak-$*$ compact), pp. 169–170; Exercises 47b (weakly convergent and weak-$*$ convergent sequences are norm bounded), 48a (the closed unit ball is weakly closed) and 49a (no nonempty weakly open subset of an infinite-dimensional Banach space is bounded in norm), p. 170, and Exercise 51 (a subspace is norm closed iff weakly closed), p. 171"
    pages: "168-171"
    role: the distinction between weak and weak-$*$ convergence and the role of reflexivity in it, the operator topologies, Alaoglu's theorem, and the facts about weakly closed sets quoted in the remark
---

:::definition[Strong, weak and weak-$*$ convergence]{provenance=adapted src="kreyszig-1978:§4.8, Def. 4.8-1, p. 256, and Def. 4.8-2, p. 257; stakgold-holst-2011:§4.8, the three notions listed on p. 295; evans-2010:Appendix D.4, p. 678; folland-1999:§5.4, pp. 168–169"}
Let $X$ be a normed space over $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$ and let $X'$ be its dual: the space whose elements are the bounded linear functionals on $X$, normed by $\lVert f\rVert = \sup_{\lVert u\rVert\le1}|f(u)|$. The space $X'$ is always complete in that norm, whatever $X$ is, because the scalars are (:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thm 4.8.4, p. 294"}); the proof of part 4 below turns on this.

A sequence $(x_n)$ in $X$ **converges strongly** to $x \in X$ if $\lVert x_n - x\rVert \to 0$. This is ordinary convergence in the norm; the adjective is used only to mark the contrast with what follows. We write $x_n \to x$.

The sequence **converges weakly** to $x \in X$ if the numbers $f(x_n)$ converge to $f(x)$ for every single $f \in X'$:
$$
x_n \rightharpoonup x \quad\Longleftrightarrow\quad f(x_n) \to f(x) \ \text{ in } \mathbb{K}, \quad \text{for every } f \in X' .
$$
The vector $x$ is the **weak limit**. Two things in this definition deserve to be said aloud. First, it is a statement about a whole family of numerical sequences at once, one for each $f$, and nothing is asked of them uniformly in $f$. Second, the limit $x$ is required to be an element of $X$: weak convergence is not a device for manufacturing limits that the space does not contain.

If the space is a Hilbert space $H$, every bounded functional is an inner product by :ref[the Riesz representation theorem]{to=funcan.riesz-representation}, so the definition collapses to a statement about inner products:
$$
x_n \rightharpoonup x \quad\Longleftrightarrow\quad (x_n , z) \to (x , z) \quad\text{for every } z \in H ,
$$
which is :cite[Kreyszig's]{work=kreyszig-1978 loc="Example 4.8-5, p. 260"} Example 4.8-5. Our inner product is linear in the first slot, as throughout :ref[this chapter]{to=funcan.hilbert-spaces}; the slot in which $z$ sits is immaterial here, since $\overline{a_n} \to \overline{a}$ exactly when $a_n \to a$.

A third notion lives on a dual space. If $X$ is a normed space, a sequence $(f_n)$ in $X'$ **converges weak-$*$** to $f \in X'$, written $f_n \overset{*}{\rightharpoonup} f$, if $f_n(u) \to f(u)$ for every $u \in X$: pointwise convergence of functionals. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.8, p. 295"} list the three side by side. Weak-$*$ convergence on $X'$ asks less than weak convergence on $X'$, which would test against all of $X''$; :cite[Folland]{work=folland-1999 loc="§5.4, p. 169"} records the comparison at the level of topologies: the weak and the weak-$*$ topology on $X'$ coincide precisely when $X$ is reflexive, and where the topologies coincide so do the two notions of sequential convergence. Every Hilbert space is reflexive (:cite[Kreyszig]{work=kreyszig-1978 loc="Thm 4.6-6, p. 242"}), so in Hilbert space there is nothing new here.

**Weak convergence is convergence in a topology.** :cite[Reed and Simon]{work=reed-simon-1980 loc="§IV.5, p. 111"} and :cite[Folland]{work=folland-1999 loc="§5.4, pp. 168–169"} define the **weak topology** on $X$ to be the coarsest topology for which every $f \in X'$ is still continuous; weak convergence of a sequence is convergence in that topology. This handbook treats only sequences, which is all the applications need, but the distinction is not idle: several of the statements below are true for sequences and false for nets, and the point is flagged in the remark.

**Two theorems are quoted ahead of their place in this part.** Part 4 below uses :ref[the uniform boundedness theorem]{to=funcan.uniform-boundedness-open-mapping} and part 2 uses the separation corollary of :ref[the Hahn-Banach theorem]{to=funcan.hahn-banach}. Both are genuine prerequisites and both are listed as such, but both are treated later in this part than this unit; they are used here as quoted results, and nothing in this unit enters their proofs, so the dependence is one-way.

**Notation.** The half-arrow $\rightharpoonup$ is used by :cite[Kreyszig]{work=kreyszig-1978 loc="§4.8, p. 257"}, :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.8, p. 295"} and :cite[Evans]{work=evans-2010 loc="Appendix D.4, p. 678"} alike. Some texts, :cite[Reed and Simon]{work=reed-simon-1980 loc="§IV.5, p. 112"} among them, write $x_n \xrightarrow{\ w\ } x$ instead.
:::

:::statement[What weak convergence does and does not inherit]{provenance=adapted src="kreyszig-1978:Lemma 4.8-3, p. 258, Thm 4.8-4, p. 259, Example 4.8-6, p. 261, and Lemma 4.8-7, p. 261; reed-simon-1980:the Proposition and Example 1, §IV.5, p. 112; stakgold-holst-2011:Thms 4.8.5–4.8.7, pp. 295–296, and Thm 4.8.9, p. 297; evans-2010:Appendix D.4, p. 678"}
Let $X$ be a normed space and $(x_n)$ a sequence in $X$.

1. **Weak convergence deserves its name.** Norm convergence forces it: if $x_n \to x$ then $x_n \rightharpoonup x$, and the two limits are the same vector.
2. **The weak limit is unique.** If $x_n \rightharpoonup x$ and $x_n \rightharpoonup y$ then $x = y$.
3. **Subsequences inherit it.** If $x_n \rightharpoonup x$, every subsequence of $(x_n)$ converges weakly to $x$.
4. **Weakly convergent sequences are norm bounded:** $\sup_n \lVert x_n\rVert < \infty$. No completeness of $X$ is needed.
5. **The norm is weakly lower semicontinuous**, not weakly continuous: if $x_n \rightharpoonup x$ then
$$
\lVert x \rVert \;\le\; \liminf_{n\to\infty}\lVert x_n\rVert ,
$$
and the inequality is often strict.
6. **The working criterion.** Let $M \subset X'$ be a **total** set, meaning that the finite linear combinations of members of $M$ are dense in $X'$. Then $x_n \rightharpoonup x$ if and only if
   - (A) $(\lVert x_n\rVert)$ is bounded, **and**
   - (B) $f(x_n) \to f(x)$ for every $f \in M$.
7. **Two specialisations.**
   - In a Hilbert space $H$ with orthonormal basis $(e_\alpha)_{\alpha\in A}$, the index set $A$ arbitrary: $x_n \rightharpoonup x$ if and only if $(\lVert x_n\rVert)$ is bounded and $(x_n,e_\alpha) \to (x,e_\alpha)$ for each fixed $\alpha$. No countability is asked of $A$, so $H$ need not be separable; :cite[Reed and Simon]{work=reed-simon-1980 loc="§IV.5, Example 1, p. 112"} likewise state their Example 1 for an arbitrary index set.
   - In $\ell^p$ with $1 < p < \infty$: $x_n \rightharpoonup x$ if and only if $(\lVert x_n\rVert_p)$ is bounded and each coordinate converges, $\xi^{(n)}_j \to \xi_j$ for every fixed $j$. This is :cite[Kreyszig's]{work=kreyszig-1978 loc="Example 4.8-6, p. 261"} Example 4.8-6, obtained from part 6 with $M$ the coordinate functionals, which form a Schauder basis of the dual $\ell^q$.
8. **Finite dimensions, and only finite dimensions.** If $\dim X < \infty$ then weak convergence implies strong convergence, so the two notions coincide. In every infinite-dimensional Hilbert space they differ: an orthonormal sequence $(e_n)$ satisfies $e_n \rightharpoonup 0$ while $\lVert e_n - e_m\rVert = \sqrt2$ for $n \ne m$, so $(e_n)$ has no strong limit at all.
9. **Why one puts up with it (quoted, not proved here).** In a reflexive Banach space — in particular in any Hilbert space, and in $L^p$ for $1<p<\infty$ — **every bounded sequence has a weakly convergent subsequence**. :cite[Evans]{work=evans-2010 loc="Appendix D.4, Thm 3, p. 678"} states it as a weak compactness theorem; :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thms 4.8.8–4.8.9, p. 297"} state it as the Eberlein–Shmulian theorem and in the equivalent form that reflexivity is *characterised* by this property. Both refer the proof elsewhere, and so do we: it is the one statement in this unit we use without proving.

:cite[Kreyszig]{work=kreyszig-1978 loc="§4.8, p. 260"} adds a warning against reading part 8 as "infinite dimensions always separate the two": he reports that in $\ell^1$ weak and strong convergence are again equivalent, a theorem of I. Schur from 1921. So the right dividing line is not dimension but the geometry of the particular space.
:::

:::idea{provenance=original}
A vector in a normed space can be probed in two ways: by its own size, or by the numbers a measuring instrument returns when applied to it. Weak convergence says every instrument eventually reads the same as it would on the limit, and says nothing about size. The two differ because in infinite dimensions a sequence can run off in ever-new directions: each fixed instrument is sensitive to only "finitely much" of the space in the relevant sense, so it stops noticing, while the vectors themselves stay a fixed distance apart. An orthonormal sequence is the model — Bessel's inequality says every fixed $z$ has square-summable coefficients, so $(e_n,z)\to0$, while the $e_n$ sit at mutual distance $\sqrt2$ forever.

The three good properties all come from the same move: turn the vectors into functionals. The map $x \mapsto g_x$, $g_x(f) = f(x)$, sends $X$ isometrically into the dual of $X'$; weak convergence of $(x_n)$ says exactly that the $g_{x_n}$ converge pointwise on $X'$. Pointwise convergent means pointwise bounded, $X'$ is complete whatever $X$ is, and the uniform boundedness theorem then converts pointwise boundedness into bounded norms — which are the norms $\lVert x_n\rVert$. Uniqueness of the limit comes from the other Hahn–Banach corollary, that the functionals separate points. Lower semicontinuity is a single application of Cauchy–Schwarz (or, in a general normed space, of the norming functional, which needs no completeness either): you can test the limit against itself, and the test cannot read more than the norms it is applied to.

The criterion in part 6 is an $\varepsilon/3$ argument and nothing more. Boundedness is what makes the approximation of an arbitrary $f$ by elements of $\operatorname{span} M$ uniform along the sequence; without it the error $\lVert f - h\rVert\,\lVert x_n\rVert$ is uncontrolled, and the criterion is false.
:::

:::proof[Parts 1 to 5]{provenance=adapted src="kreyszig-1978:Lemma 4.8-3 and its proof, p. 258, Thm 4.8-4(a), p. 259, Lemma 4.6-1, p. 240, and Cor. 4.3-4, p. 223; stakgold-holst-2011:Thm 4.8.5, pp. 295–296, Thm 4.8.3 and Thm 4.8.4, p. 294"}
**Part 1.** Let $x_n \to x$ and fix $f \in X'$. Then
$$
|f(x_n) - f(x)| = |f(x_n - x)| \le \lVert f\rVert\,\lVert x_n - x\rVert \longrightarrow 0 ,
$$
the inequality being the **boundedness** of $f$ and nothing else. As $f$ was arbitrary, $x_n \rightharpoonup x$.

**Part 2.** Suppose $x_n \rightharpoonup x$ and $x_n \rightharpoonup y$. For each $f \in X'$ the numerical sequence $(f(x_n))$ has the two limits $f(x)$ and $f(y)$; limits of sequences of scalars are unique, so $f(x) = f(y)$, that is $f(x-y) = 0$. This holds for **every** bounded functional, and a vector annihilated by all of them is zero — :cite[Kreyszig's]{work=kreyszig-1978 loc="Cor. 4.3-4, p. 223"} Corollary 4.3-4, a consequence of :ref[the Hahn-Banach theorem]{to=funcan.hahn-banach}, or in a Hilbert space the one-line argument of taking $f = (\,\cdot\,, x-y)$ and reading off $\lVert x-y\rVert^2 = 0$. Hence $x = y$.

**Part 3.** For fixed $f$ the sequence $(f(x_n))$ converges in $\mathbb{K}$, so each of its subsequences converges to the same number. A subsequence of $(x_n)$ produces exactly such a subsequence of numbers, for every $f$.

**Part 4.** Define, for each $n$, a functional on the dual space by
$$
g_n : X' \to \mathbb{K}, \qquad g_n(f) = f(x_n) .
$$
Each $g_n$ is linear in $f$ and bounded, and in fact $\lVert g_n\rVert = \lVert x_n\rVert$: this is the canonical embedding of $X$ into its bidual, :cite[Kreyszig's]{work=kreyszig-1978 loc="Lemma 4.6-1, p. 240"} Lemma 4.6-1, whose proof is again Corollary 4.3-4. So the quantity we want to bound, $\lVert x_n\rVert$, has been rewritten as an operator norm.

Now fix $f \in X'$. By hypothesis $(f(x_n))$ converges, hence is a bounded sequence of scalars: there is $c_f < \infty$, depending on $f$ but not on $n$, with
$$
|g_n(f)| = |f(x_n)| \le c_f \qquad \text{for all } n .
$$
Thus $\{g_n\}$ is a family of bounded linear functionals on $X'$ that is bounded at each point of $X'$. The **domain** $X'$ is a Banach space for any normed $X$ whatsoever, because the scalars are complete (:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thm 4.8.4, p. 294"}), so :ref[the uniform boundedness theorem]{to=funcan.uniform-boundedness-open-mapping} applies and gives $\sup_n\lVert g_n\rVert < \infty$. Since $\lVert g_n\rVert = \lVert x_n\rVert$, part 4 is proved — and note where completeness was needed: of $X'$, never of $X$.

**Part 5.** If $x = 0$ the assertion reads $0 \le \liminf_n\lVert x_n\rVert$ and there is nothing to prove, so assume $x \ne 0$ throughout; this is also the hypothesis the norming functional will need below.

Take first a Hilbert space, where the computation is transparent. Testing against the limit itself, weak convergence gives $(x_n,x) \to (x,x) = \lVert x\rVert^2$. The limit is real and non-negative, so the moduli converge to it as well, $|(x_n,x)| \to \lVert x\rVert^2$, and each modulus is bounded by Cauchy–Schwarz:
$$
\lVert x\rVert^2 = \lim_{n\to\infty}\bigl|(x_n , x)\bigr| \le \liminf_{n\to\infty}\lVert x_n\rVert\,\lVert x\rVert .
$$
Divide by $\lVert x\rVert > 0$. In a general normed space, replace "testing against $x$" by the norming functional of :cite[Kreyszig's]{work=kreyszig-1978 loc="Thm 4.3-3, p. 223"} Theorem 4.3-3, which is stated for a non-zero vector and so applies to our $x$: there is $f \in X'$ with $\lVert f\rVert = 1$ and $f(x) = \lVert x\rVert$. Then $f(x_n) \to f(x) = \lVert x\rVert$, a real non-negative limit, so again $|f(x_n)| \to \lVert x\rVert$, and $|f(x_n)| \le \lVert f\rVert\,\lVert x_n\rVert = \lVert x_n\rVert$ gives
$$
\lVert x \rVert = \lim_{n\to\infty}|f(x_n)| \le \liminf_{n\to\infty}\lVert x_n\rVert .
$$
:cite[Evans]{work=evans-2010 loc="Appendix D.4, p. 678"} records the conclusion in this form. $\square$
:::

:::proof[The criterion, its specialisations, and finite dimensions]{provenance=adapted src="kreyszig-1978:Lemma 4.8-7 with its proof, pp. 261–262, Example 4.8-6, p. 261, and Thm 4.8-4(b),(c) with its proof, pp. 259–260; reed-simon-1980:§IV.5, Example 1, p. 112"}
**Part 6, the easy direction.** If $x_n \rightharpoonup x$ then (A) is part 4 and (B) is the definition restricted to $M$.

**Part 6, the substantial direction.** Assume (A) and (B). Put
$$
c = \max\Bigl\{\ \sup_n\lVert x_n\rVert ,\ \lVert x\rVert\ \Bigr\} ,
$$
finite by **(A)**. Let $f \in X'$ and $\varepsilon > 0$ be given.

1. *Approximate the test functional.* Since $M$ is **total**, $\operatorname{span}M$ is dense in $X'$, so there is $h \in \operatorname{span}M$ with
$$
\lVert f - h\rVert < \frac{\varepsilon}{3(1+c)} .
$$
2. *Use the hypothesis on $h$.* Write $h = \sum_{i=1}^{m}\lambda_i f_i$ with $f_i \in M$. Each $f_i(x_n) \to f_i(x)$ by **(B)**, and the sum is finite, so $h(x_n) \to h(x)$. Choose $N$ with $|h(x_n) - h(x)| < \varepsilon/3$ for all $n > N$.
3. *Split the difference three ways.* For $n > N$,
$$
|f(x_n) - f(x)| \le \underbrace{|(f-h)(x_n)|}_{\le\,\lVert f-h\rVert\,\lVert x_n\rVert} + \underbrace{|h(x_n) - h(x)|}_{<\,\varepsilon/3} + \underbrace{|(h-f)(x)|}_{\le\,\lVert f-h\rVert\,\lVert x\rVert} .
$$
4. *Collect.* The first and third terms are each at most $\lVert f-h\rVert\,c < \varepsilon c/(3(1+c)) < \varepsilon/3$. Hence $|f(x_n) - f(x)| < \varepsilon$ for $n > N$.

Since $f \in X'$ and $\varepsilon$ were arbitrary, $x_n \rightharpoonup x$.

**Part 7, the Hilbert case.** Let $(e_\alpha)_{\alpha\in A}$ be an orthonormal basis of $H$, with $A$ any index set, and let $M = \{(\,\cdot\,,e_\alpha) : \alpha \in A\} \subset H'$. The conjugate-linear isometric bijection $J : H \to H'$, $(Jz)(u) = (u,z)$, of :ref[the Riesz representation theorem]{to=funcan.riesz-representation} carries $\operatorname{span}\{e_\alpha : \alpha\in A\}$ onto $\operatorname{span}M$ and, being a surjective isometry, carries dense sets to dense sets. The span of an orthonormal **basis** is dense in $H$ by :ref[the characterisation of orthonormal bases]{to=funcan.orthonormal-bases}; hence $\operatorname{span}M$ is dense in $H'$, that is $M$ is total, and part 6 applies verbatim. Spans are finite linear combinations throughout, so the argument never counts the index set; separability of $H$ is nowhere used. This is the content of :cite[Reed and Simon's]{work=reed-simon-1980 loc="§IV.5, Example 1, p. 112"} Example 1.

**Part 7, the $\ell^p$ case.** For $1<p<\infty$ the dual of $\ell^p$ is $\ell^q$ with $p^{-1}+q^{-1}=1$, and the coordinate sequences $e_j = (\delta_{ji})_i$ form a Schauder basis of $\ell^q$, so their span is dense; the functional attached to $e_j$ is "take the $j$-th coordinate". :cite[Kreyszig]{work=kreyszig-1978 loc="Example 4.8-6, p. 261"} draws exactly this conclusion from the lemma, and we follow him.

**Part 8, the counterexample.** Let $(e_n)$ be orthonormal in a Hilbert space $H$ and let $f \in H'$. By Riesz, $f = (\,\cdot\,,z)$ for some $z$, and :ref[Bessel's inequality]{to=funcan.orthonormal-bases} gives $\sum_{n\ge1}|(e_n,z)|^2 \le \lVert z\rVert^2 < \infty$. A convergent series has terms tending to zero, so $f(e_n) = (e_n,z) \to 0 = f(0)$. As $f$ was arbitrary, $e_n \rightharpoonup 0$. Strong convergence fails because orthonormality and Pythagoras give $\lVert e_n - e_m\rVert^2 = \lVert e_n\rVert^2 + \lVert e_m\rVert^2 = 2$ for $n \ne m$, so $(e_n)$ is not Cauchy.

**Part 8, the finite-dimensional theorem.** Let $\dim X = k$, let $\{v_1,\dots,v_k\}$ be a basis and write $x_n = \sum_{j} a_j^{(n)}v_j$, $x = \sum_j a_j v_j$. Let $f_1,\dots,f_k$ be the dual basis, $f_i(v_j) = \delta_{ij}$. Each $f_i$ is **bounded**, and the one line that proves it is worth writing out, since it is the step that fails in infinite dimensions. The coordinate sum $\lVert\sum_j a_jv_j\rVert_1 = \sum_j|a_j|$ is itself a norm on $X$, and on a finite-dimensional space all norms are equivalent (:ref[normed and Banach spaces]{to=funcan.normed-banach-spaces}), so there is a constant $c>0$ with $\sum_j|a_j| \le c\lVert x\rVert$ for every $x = \sum_j a_jv_j$. Hence $|f_i(x)| = |a_i| \le c\lVert x\rVert$. So $f_i \in X'$, and weak convergence gives $a_i^{(n)} = f_i(x_n) \to f_i(x) = a_i$ for each $i$. Then
$$
\lVert x_n - x\rVert = \Bigl\lVert \sum_{j=1}^{k}\bigl(a_j^{(n)} - a_j\bigr)v_j \Bigr\rVert \le \sum_{j=1}^{k}\bigl|a_j^{(n)} - a_j\bigr|\;\lVert v_j\rVert \longrightarrow 0 ,
$$
a finite sum of null sequences. Hence $x_n \to x$ strongly. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="kreyszig-1978:§4.8, Lemma 4.8-7 and Problems 6, 7 and 10, pp. 261–263; reed-simon-1980:§IV.5, the Proposition and Problems 39 and 40, pp. 112–113; folland-1999:§5.4, Exercises 47b, 48a and 49a, p. 170, and Exercise 51, p. 171; evans-2010:Appendix D.4, pp. 678–679"}
- **Boundedness, hypothesis (A), cannot be dropped from the criterion of part 6.** In $\ell^2$ take $w_n = n\,e_n$. Every coordinate functional sees $w_n \to 0$, since the $k$-th coordinate of $w_n$ vanishes as soon as $n \ne k$. But with $z = (1,\tfrac12,\tfrac13,\dots) \in \ell^2$ the functional $(\,\cdot\,,z)$ returns $(w_n,z) = n\cdot\frac1n = 1$ for every $n$, which does not tend to $(0,z)=0$. So $(w_n)$ converges on a total set and is not weakly convergent — consistent with part 4, since $\lVert w_n\rVert = n$ is unbounded.
- **Totality of $M$ cannot be dropped either.** In $\ell^2$ let $M = \{(\,\cdot\,,e_1)\}$, whose span is one-dimensional and hence far from dense, and let $x_n = (-1)^n e_2$. Then $(\lVert x_n\rVert)$ is bounded and $(x_n,e_1) = 0$ converges, yet $(x_n,e_2) = (-1)^n$ has no limit, so there is no weak limit.
- **Completeness of $X$ is nowhere used.** Part 4 needs the uniform boundedness theorem applied on the domain $X'$, and $X'$ is complete even when $X$ is not. Weak convergence is therefore a notion for normed spaces, not only Banach spaces; what completeness (indeed reflexivity) buys is the *compactness* of part 9, not the basic properties.
- **Part 4 is a statement about sequences, not about nets.** :cite[Reed and Simon]{work=reed-simon-1980 loc="§IV.5, p. 112"} emphasise this and set the construction of a weakly convergent unbounded net as an exercise. The reason is visible in the proof: a net of scalars that converges is bounded eventually, but "eventually" is not a uniform statement over the index set in the way the uniform boundedness theorem needs.
- **The norm is genuinely only semicontinuous.** Part 5 gives $\lVert x\rVert \le \liminf\lVert x_n\rVert$ and no more: for an orthonormal sequence the left side is $0$ and the right side is $1$. The quantity $\lVert x_n\rVert^2 - \lVert x\rVert^2$ that survives in the limit measures how much "energy" escapes to infinity. In a Hilbert space there is an exact accounting: if $x_n \rightharpoonup x$ then
$$
\lVert x_n - x\rVert^2 = \lVert x_n\rVert^2 - 2\,\operatorname{Re}(x_n , x) + \lVert x\rVert^2 \longrightarrow \Bigl(\lim_n \lVert x_n\rVert^2\Bigr) - \lVert x\rVert^2
$$
whenever the limit on the right exists, because $(x_n,x) \to (x,x) = \lVert x\rVert^2$ by weak convergence. Two consequences: weak convergence together with $\lVert x_n\rVert \to \lVert x\rVert$ forces **strong** convergence, and that is the only way to recover it. The computation is ours; we have not taken it from a cited source.
- **Weak limits are not pointwise limits.** :cite[Evans]{work=evans-2010 loc="Appendix D.4, p. 679"} warns that $f_k \rightharpoonup f$ in $L^p$ says nothing about $f_k(x)$ at any point, even along a subsequence: the functions may oscillate ever faster, and the weak limit records only their local averages. Part D of the example below shows this concretely.
- **Weakly closed is strictly stronger than closed — except for convex sets.** :cite[Folland]{work=folland-1999 loc="Exercise 48a, p. 170"} has the closed unit ball weakly closed, and :cite[Folland]{work=folland-1999 loc="Exercise 51, p. 171"} has a subspace norm closed exactly when it is weakly closed. The unit *sphere* is not weakly closed: in infinite dimensions its weak closure is the whole ball, which is recorded by :cite[Reed and Simon]{work=reed-simon-1980 loc="§IV.5, p. 113"}. The flavour of that collapse is also in :cite[Folland's]{work=folland-1999 loc="Exercise 49a, p. 170"} Exercise 49a, which says that once $X$ is a Banach space of infinite dimension, no nonempty weakly open subset of it is bounded in norm — so no weak neighbourhood can be squeezed inside a shell around the sphere. The general principle is Mazur's theorem, quoted by :cite[Evans]{work=evans-2010 loc="Appendix D.4, p. 678"}: a convex norm-closed set is weakly closed. Convexity is exactly the hypothesis that fails for the sphere.
- **Weak Cauchy does not imply weakly convergent in general.** Call $(x_n)$ *weak Cauchy* if $(f(x_n))$ is a Cauchy sequence of scalars for every $f \in X'$, and call $X$ *weakly complete* if every weak Cauchy sequence in $X$ converges weakly in $X$. :cite[Kreyszig]{work=kreyszig-1978 loc="§4.8, Problem 10, p. 263"} sets as a problem one implication only: **if $X$ is reflexive then $X$ is weakly complete**. Nothing here says the converse, and part 9 must not be read backwards into it — the Eberlein–Shmulian characterisation quoted there is an equivalence between reflexivity and weak sequential *compactness* of bounded sets, which is a different property from weak completeness. Reflexivity is a sufficient condition for weak completeness, not an announced necessary one.
:::

:::method[Deciding whether a sequence converges weakly, and to what]{provenance=original}
1. **Check boundedness first.** If $\lVert x_n\rVert \to \infty$ along any subsequence, stop: by part 4 the sequence is not weakly convergent. This test is cheap and kills most candidates.
2. **Guess the limit coordinatewise.** Fix an orthonormal basis (or, in $\ell^p$, the coordinates) and compute $\lim_n (x_n , e_k)$ for each fixed $k$. Call the resulting numbers $c_k$.
3. **Check that the guess lies in the space.** The candidate limit is $x = \sum_k c_k e_k$, which exists in $H$ only if $\sum_k |c_k|^2 < \infty$. (Steps 1 and 2 guarantee this, by truncation: for each fixed $K$, $\sum_{k\le K}|c_k|^2 = \lim_n\sum_{k\le K}|(x_n,e_k)|^2 \le \liminf_n\lVert x_n\rVert^2$, the last step being :ref[Bessel's inequality]{to=funcan.orthonormal-bases} applied to each $x_n$; now let $K \to \infty$ on the left.) If the coordinate limits are not square-summable, the sequence was not bounded and step 1 should have caught it.
4. **Invoke the criterion.** Boundedness from step 1 plus coordinatewise convergence from step 2 give $x_n \rightharpoonup x$ by part 7. Do not try to verify the definition against a general $f$; that is what the criterion is for.
5. **Then ask whether the convergence is strong.** Only $\liminf_n\lVert x_n\rVert$ is guaranteed to be meaningful here, by part 5, so start with it: if $\liminf_n\lVert x_n\rVert > \lVert x\rVert$ the convergence is certainly not strong. Otherwise examine $\lVert x_n\rVert$ itself. If $\lVert x_n\rVert \to \lVert x\rVert$, the convergence is strong, by the identity in the remark; if $\lVert x_n\rVert$ converges to something larger, the convergence is weak and not strong and the difference $\lim_n\lVert x_n\rVert^2 - \lVert x\rVert^2$ is exactly $\lim_n\lVert x_n - x\rVert^2$. If $\lVert x_n\rVert$ has no limit at all — which part 4 permits, since boundedness is all that is guaranteed — pass to a subsequence along which it does and read the verdict there.
6. **To get strong convergence anyway, apply a compact operator.** If $K$ is compact and $x_n \rightharpoonup x$, then $Kx_n \to Kx$ in norm (see :ref[compact operators]{to=funcan.compact-operators}). In practice this is how weak limits are made useful: extract a weakly convergent subsequence by part 9, then push it through a compact embedding.
7. **For a functional on a dual space, test weak-$*$ instead**, which asks only pointwise convergence on $X$ and is therefore easier to verify; the two coincide if the underlying space is reflexive.
:::

:::example[Four sequences in $\ell^2$ and one in $L^2(0,1)$]{provenance=original}
Throughout, $(e_k)_{k\ge1}$ is the standard orthonormal basis of $\ell^2$ and $(x,y) = \sum_k x_k\overline{y_k}$.

**Part A: weak but not strong, with the energy gap measured.** For $n \ge 1$ set
$$
u_n = \bigl(1 + 2^{-n}\bigr)e_1 + 3\,e_{n+1} .
$$
*Step 1 (boundedness).* By Pythagoras, $\lVert u_n\rVert^2 = (1+2^{-n})^2 + 9$. This increases as $n$ decreases, so the largest value is at $n=1$: $\lVert u_1\rVert^2 = (1.5)^2+9 = 11.25$, and $\lVert u_n\rVert \le \sqrt{11.25} = 3.354102$ for all $n$. Bounded.

*Step 2 (coordinates).* The first coordinate is $1+2^{-n} \to 1$. For fixed $k \ge 2$, the $k$-th coordinate of $u_n$ equals $3$ when $n = k-1$ and $0$ for every other $n$, so it tends to $0$. The coordinate limits are $(1,0,0,\dots)$.

*Step 3 (the limit is in the space and the criterion applies).* The candidate is $u = e_1 \in \ell^2$. Steps 1 and 2 are hypotheses (A) and (B) of part 6 with the total set $M = \{(\,\cdot\,,e_k)\}$, so
$$
u_n \rightharpoonup e_1 .
$$

*Step 4 (a concrete functional, checked numerically).* Take $z = (1,\tfrac12,\tfrac13,\dots)$, so $\lVert z\rVert^2 = \pi^2/6$ and $z \in \ell^2$. Then
$$
(u_n , z) = \bigl(1+2^{-n}\bigr)\cdot 1 + 3\cdot\frac{1}{n+1} .
$$
At $n = 4$ this is $1.0625 + 0.6 = 1.6625$; at $n = 100$ it is $1.0000000 + 0.0297030 = 1.0297030$; and the limit is $1 = (e_1 , z)$, as it must be.

*Step 5 (not strong, and the gap).* $\lVert u_n\rVert^2 \to 1 + 9 = 10$, so $\lVert u_n\rVert \to \sqrt{10} = 3.162278$, whereas $\lVert u\rVert = 1$. The inequality of part 5 holds strictly: $1 < 3.162278$. The identity in the remark predicts $\lVert u_n - u\rVert^2 \to 10 - 1 = 9$, and directly
$$
\lVert u_n - e_1\rVert^2 = 4^{-n} + 9 \longrightarrow 9 , \qquad \lVert u_n - e_1\rVert \to 3 .
$$
**The sequence converges weakly to $e_1$ and stays a distance $3$ away from it.**

**Part B: weak plus convergent norms gives strong.** Set $v_n = e_1 + n^{-1}e_{n+1}$. The same three steps give $v_n \rightharpoonup e_1$. Here $\lVert v_n\rVert^2 = 1 + n^{-2} \to 1 = \lVert e_1\rVert^2$, and indeed $\lVert v_n - e_1\rVert = 1/n \to 0$: the convergence is strong, exactly as step 5 of the method predicts.

**Part C: boundedness is not optional.** Set $w_n = n\,e_n$. Each coordinate tends to $0$, so hypothesis (B) holds with $x = 0$ for the total set of coordinate functionals. But $(w_n , z) = n\cdot(1/n) = 1$ for the same $z$ as in Part A, so $(w_n,z) \not\to 0$ and $(w_n)$ does not converge weakly. The failure is of hypothesis (A): $\lVert w_n\rVert = n$.

**Part D: oscillation in $L^2(0,1)$, and why weak limits do not commute with squaring.** Let $f_n(t) = \sqrt2\,\sin(n\pi t)$ on $(0,1)$, which is orthonormal there, with $\lVert f_n\rVert = 1$. By part 8, $f_n \rightharpoonup 0$. Tested against $g(t) = t$:
$$
(f_n , g) = \sqrt2\int_0^1 t\,\sin(n\pi t)\,dt = \sqrt2\left[\frac{-t\cos(n\pi t)}{n\pi}\right]_0^1 + \frac{\sqrt2}{n\pi}\int_0^1\cos(n\pi t)\,dt = \frac{\sqrt2\,(-1)^{n+1}}{n\pi} ,
$$
the last integral vanishing for every $n\ge1$. At $n = 5$ this is $\sqrt2/(5\pi) = 0.0900316$, and at $n = 50$ it is $-0.0090032$: the inner product decays like $1/n$ while $\lVert f_n\rVert$ stays at $1$. Now square: $f_n^2 = 2\sin^2(n\pi t) = 1 - \cos(2n\pi t)$, and the functions $c_n(t) = \sqrt2\cos(2n\pi t)$ are themselves orthonormal in $L^2(0,1)$, since $\int_0^1 2\cos^2(2n\pi t)\,dt = 1$ and $\int_0^1 2\cos(2n\pi t)\cos(2m\pi t)\,dt = 0$ for $n\ne m$; so part 8 applied to $(c_n)$ gives $c_n \rightharpoonup 0$, hence $\cos(2n\pi\,\cdot\,) \rightharpoonup 0$ and
$$
f_n^2 \rightharpoonup 1 \quad\text{while}\quad \bigl(\text{weak-}\lim f_n\bigr)^2 = 0 .
$$
**The weak limit of the square is $1$, not $0$.** Weak convergence is compatible with linear operations and with nothing else.
:::

:::application{provenance=original}
**The direct method in the calculus of variations.** This is the reason weak convergence was invented, and :cite[Evans]{work=evans-2010 loc="§8.2, pp. 439–442"} lays it out in three moves. To minimise $I[w] = \int_U L(Dw,w,x)\,dx$ over an admissible class, take a minimising sequence $(u_k)$. A coercivity bound $L \ge \alpha|p|^q$ makes $(u_k)$ *bounded* in the Sobolev space $W^{1,q}(U)$ but gives no strongly convergent subsequence, because the space is infinite-dimensional. Part 9 supplies a weakly convergent subsequence, $u_{k_j} \rightharpoonup u$. The functional $I$ is then typically not weakly continuous — and :cite[Evans]{work=evans-2010 loc="§8.2, p. 439"} hedges that word deliberately, saying it holds "in essentially all cases of interest" rather than always. Part D of the example shows the mechanism in miniature, a quadratic whose weak limit is not the quadratic of the weak limit. The hedge is needed, because nonlinearity by itself is not the obstruction: on $L^2(0,1)$ the nonlinear functional $u \mapsto \bigl(\int_0^1 u\,dt\bigr)^2$ *is* weakly continuous, being a continuous function of the single weakly continuous reading $u \mapsto \int_0^1 u\,dt$. What fails is a functional that integrates a nonlinear expression pointwise, since there the oscillation is not averaged away before the nonlinearity acts. Convexity of $L$ in the gradient nevertheless makes $I$ weakly *lower* semicontinuous, $I[u]\le\liminf I[u_{k_j}]$, and that one-sided inequality is all a minimisation needs. :cite[Evans's]{work=evans-2010 loc="§8.2, p. 442"} remark puts the mechanism precisely: the gradient enters the convexity inequality linearly, and weak convergence respects linear expressions. See :ref[functionals and the first variation]{to=var.functionals-first-variation} and :ref[weak solutions and Sobolev spaces]{to=pde.weak-solutions-sobolev}.

**Existence theory for elliptic equations, and the finite element method.** The same pattern underlies :ref[the Lax-Milgram theorem]{to=pde.lax-milgram} and the convergence proofs for :ref[finite elements]{to=num.finite-elements} and :ref[the Rayleigh-Ritz method]{to=var.rayleigh-ritz}: a Galerkin sequence is bounded by an energy estimate, hence has a weak limit, and the weak limit is shown to solve the weak formulation because the formulation is linear in the test function. Note the contrast :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§10.7, p. 812"} draw: once the problem is discretised the spaces are finite-dimensional, where by part 8 weak and strong convergence coincide, so the practising numerical analyst measures only norms — the weak topology does its work in the existence proof, not in the computation.

**Compactness as the bridge back to strong convergence.** A compact operator turns weak convergence into strong: if $K$ is compact and $u_k \rightharpoonup u$ then $Ku_k \to Ku$, which :cite[Evans]{work=evans-2010 loc="Appendix D.5, p. 679"} uses to prove that adjoints of compact operators are compact and to run the Fredholm alternative. In partial differential equations the compact object is usually a Sobolev embedding, and the two-step pattern "extract weakly, upgrade by compactness" is the standard existence argument. See :ref[compact operators]{to=funcan.compact-operators} and :ref[the spectral theorem for compact self-adjoint operators]{to=funcan.compact-self-adjoint}.

**Homogenization, turbulence and effective media.** Part D is a physical statement in disguise, but the bookkeeping has to be done with care, because the energy density $a|e|^2$ is quadratic in the field $e$ and only *linear* in the conductivity $a$; what refuses to pass to the weak limit is their product. Take the one-dimensional laminate. On $(0,1)$ let $a_n$ alternate between the values $1$ and $9$ on $2n$ equal intervals, and let $u_n$ solve the steady conduction problem $-(a_nu_n')'=0$ with $u_n(0)=0$, $u_n(1)=1$. The flux $j_n = a_nu_n'$ is then a constant, fixed by $\int_0^1u_n' = 1$ to be
$$
j_n = \Bigl(\int_0^1 a_n^{-1}\Bigr)^{-1} = \frac{2}{1 + \tfrac19} = 1.8 \qquad\text{for every } n ,
$$
the harmonic mean of $1$ and $9$. Each of the three fields below is a function taking two values alternately on the same $2n$ intervals, so one lemma settles all of them. *If $b_n$ takes two values alternately on the $2n$ equal intervals and $\bar b$ is its mean, then $b_n \rightharpoonup \bar b$ in $L^2(0,1)$.* Indeed the primitive $B_n(x) = \int_0^x(b_n - \bar b)$ vanishes at every multiple of the period $1/n$, in particular at $x=1$, and satisfies $\lVert B_n\rVert_\infty \le \delta/(2n)$ with $\delta$ the gap between the two values; so for $g \in C^1[0,1]$ an integration by parts gives $\bigl|\int_0^1(b_n-\bar b)g\bigr| = \bigl|\int_0^1 B_ng'\bigr| \le \delta\lVert g'\rVert_{L^1}/(2n) \to 0$. The functions $b_n$ are bounded in $L^2(0,1)$ and $C^1[0,1]$ is dense in $L^2(0,1) \cong L^2(0,1)'$, hence total, so part 6 applies. Now read off three weak limits on this one sequence:

- the conductivity $a_n \rightharpoonup \bar a = 5$, the arithmetic mean;
- the field $e_n = u_n' = j_n/a_n$, which takes the values $1.8$ and $0.2$, satisfies $e_n \rightharpoonup \bar e = 1$;
- the energy density $a_ne_n^2 = j_ne_n$, which takes the values $3.24$ and $0.36$, satisfies $a_ne_n^2 \rightharpoonup 1.8$.

So the limiting energy density is $1.8$ and not $\bar a\,\bar e^{\,2} = 5$: it is strictly **smaller** than the energy the average field would carry in a conductor of the average conductivity. Equivalently the effective conductivity is $a^\ast = 1.8$, the harmonic mean of the constituents and not their arithmetic mean, which is the extreme case of the Reuss and Voigt bounds $a_{\mathrm{harm}} \le a^\ast \le a_{\mathrm{arith}}$; a laminate measured across its layers attains the lower one. The mechanism is not the semicontinuity of part 5, which compares a vector with its weak limit in a *fixed* norm, whereas here the quadratic form oscillates along with the field. It is the failure Part D exhibits, in the form "the weak limit of a product is not the product of the weak limits": $a_n \rightharpoonup 5$ and $e_n \rightharpoonup 1$, yet $a_ne_n \equiv 1.8$, so $a_ne_n \rightharpoonup 1.8 \ne 5$. That this particular product has a limit at all is no accident — the flux is constant — and it is the elementary case of the compensated-compactness phenomenon that makes homogenization work. The same failure is the closure problem for the Reynolds-averaged equations of turbulence: the average of $u^2$ is not the square of the average, and the Reynolds stress is the difference.

**Quantum mechanics: probability that escapes, and probability that only seems to.** Let $(\psi_n)$ be normalised states in $L^2(\mathbb{R})$ with $\psi_n \rightharpoonup 0$. The semicontinuity gap of part 5 is then $\lim\lVert\psi_n\rVert^2 - \lVert 0\rVert^2 = 1$: none of the probability survives into the limit. It is tempting to read that $1$ as probability that has run off to infinity, so that every fixed observation region eventually sees nothing. **Weak convergence does not license that reading**, and the reason is exactly the one Part D of the example makes.

*What weak nullity says.* Every fixed *linear* reading dies: $(\psi_n,\chi)\to0$ for each fixed state $\chi$, so the overlap with any fixed state tends to $0$ and no fixed state is ever approached.

*What it does not say.* What a fixed observation region $B$ sees is $\int_B\lvert\psi_n\rvert^2 = \lVert\chi_B\psi_n\rVert^2$, which is *quadratic* in $\psi_n$, and the whole content of Part D is that quadratic readings need not follow the weak limit. Part D is in fact a counterexample in disguise. The functions $f_n(t)=\sqrt2\,\sin(n\pi t)$ are the normalised energy eigenstates of a particle in an infinite square well on $(0,1)$; they converge weakly to $0$ with $\lVert f_n\rVert = 1$, and yet
$$
\int_0^1 \lvert f_n(t)\rvert^2\,dt = 1 \qquad\text{for every } n .
$$
Extended by zero these are states of $L^2(\mathbb{R})$ and are weakly null there too, since the restriction to $(0,1)$ of a test function in $L^2(\mathbb{R})$ is a test function in $L^2(0,1)$. The whole probability stays inside the box forever; no region sees less of the particle as $n$ grows, and nothing escapes in position at all. What runs off to infinity here is the momentum, the energy being $E_n \propto n^2$. So weak nullity leaves three mechanisms open — the packet spreads, the packet translates away, or the packet merely oscillates faster and faster — and only the first two move probability out of a fixed region.

*The statement that is strictly stronger.* "Every fixed observation region eventually sees nothing" is $\lVert\chi_B\psi_n\rVert\to0$ for every bounded $B$, that is, $\psi_n \to 0$ in $L^2_{\mathrm{loc}}$. Weak convergence cannot give it: if it did, multiplication by $\chi_B$ would turn every weakly convergent sequence into a strongly convergent one and so would be a compact operator (:ref[compact operators]{to=funcan.compact-operators}), which it is not — it is an orthogonal projection with infinite-dimensional range, acting as the identity on that range.

*When the escape picture is right.* Assume $\psi_n \to 0$ in $L^2_{\mathrm{loc}}$ and the reading becomes correct: the probability really does leave every laboratory, and the gap of $1$ is exactly what left. A travelling packet does this. Fix $\varphi$ normalised and put $\psi_n(x) = \varphi(x-n)$. For $g$ continuous with support in $[-R,R]$, Cauchy-Schwarz gives $\lvert(\psi_n,g)\rvert \le \lVert g\rVert\bigl(\int_{-R-n}^{R-n}\lvert\varphi\rvert^2\bigr)^{1/2} \to 0$, since the tail of a fixed square-integrable function past distance $n$ vanishes; such $g$ are total in $L^2(\mathbb{R})$ and $\lVert\psi_n\rVert=1$, so part 6 gives $\psi_n \rightharpoonup 0$. And for bounded $B \subseteq [-R,R]$, $\int_B\lvert\psi_n\rvert^2 = \int_{B-n}\lvert\varphi\rvert^2 \to 0$ by the same tail estimate. Scattering theory is built on separating this behaviour from the bound states, where the weak limit is attained and the norm is not lost; see :ref[the mathematical framework of quantum mechanics]{to=funcan.quantum-mechanics-framework}.

**Statistics and signal processing.** Weak convergence in $L^2$ is convergence of all second-order statistics against fixed test functions, which is what an instrument with a fixed response actually measures. A signal that oscillates faster than any filter can follow converges weakly to its mean while retaining its variance — the reason a low-pass measurement cannot distinguish a smooth field from a rapidly fluctuating one of the same average, and the reason variance must be tracked separately. See :ref[linear filters]{to=stats.linear-filters} and :ref[stationary processes]{to=prob.stationary-processes}.
:::
