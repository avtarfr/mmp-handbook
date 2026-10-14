---
id: funcan.normed-banach-spaces
title: Normed and Banach spaces
kind: definition
level: core
summary: Gives the norm axioms and the metric they induce, the series test for completeness, the standard Banach spaces and the standard incomplete ones, and proves that on a finite-dimensional space every norm is equivalent to every other, so that in finite dimensions the choice of norm never matters and in infinite dimensions it always may.
prereqs: [funcan.metric-spaces, linalg.vector-spaces-bases, found.compactness]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§2.2, Def. 2.2-1 (normed space, Banach space) with the axioms (N1)–(N4) and the induced metric (1), pp. 58–59, the reverse triangle inequality (2) and continuity of the norm, p. 60, and Examples 2.2-2 to 2.2-7 ($\\mathbb{R}^n$ and $\\mathbb{C}^n$, $\\ell^p$, $\\ell^\\infty$, $C[a,b]$, the incomplete spaces, and $L^2[a,b]$ as a completion), pp. 60–62; §2.4, Lemma 2.4-1 (linear combinations) with its proof, pp. 72–73, Thm 2.4-2 (every finite-dimensional subspace is complete), p. 73, Thm 2.4-3 (and hence closed) with the polynomials as a non-closed infinite-dimensional subspace, p. 74, Def. 2.4-4 (equivalent norms) with the remark that they give the same topology and the same Cauchy sequences, p. 75, and Thm 2.4-5 (all norms on a finite-dimensional space are equivalent) with its proof, pp. 75–76; §2.5, Def. 2.5-1 and Lemma 2.5-2 (a compact set is closed and bounded), p. 77, the sequence $(e_n)$ in $\\ell^2$ showing the converse fails, p. 77, Thm 2.5-3 (in finite dimensions compact = closed and bounded), pp. 77–78, Riesz's Lemma 2.5-4, pp. 78–79, and Thm 2.5-5 (a normed space whose closed unit ball is compact is finite-dimensional), p. 80"
    pages: "58-62, 72-80"
    role: the axiom list and its numbering, the catalogue of Banach and non-Banach examples, the linear-combinations lemma and the whole finite-dimensional theory, the definition of equivalent norms, Riesz's lemma and its corollary on the unit ball, and the $\ell^2$ unit-vector example
  - work: folland-1999
    loc: "§5.1, pp. 151–155: seminorms and norms, p. 151, the induced metric, the norm topology, equivalent norms and the definition of a Banach space, p. 152, Thm 5.1 (completeness is equivalent to convergence of every absolutely convergent series) with its proof, p. 152, the $L^1$ example derived from it, p. 153, the product and quotient norms, p. 153, bounded linear maps with Prop. 5.2 and the operator norm (5.3), pp. 153–154, Prop. 5.4, p. 154; Exercise 6 (all norms on a finite-dimensional space are equivalent, via $\\|\\sum a_je_j\\|_1 = \\sum|a_j|$), p. 155, and Exercise 7 (the Neumann series for the inverse), p. 155"
    pages: "151-155"
    role: the series criterion for completeness and its proof route, the definition of equivalent norms as a two-sided constant bound, the seminorm-versus-norm distinction, and the alternative route to finite-dimensional equivalence through the coordinate norm
  - work: stakgold-holst-2011
    loc: "§4.3, pp. 235–241: the norm axioms (4.3.2), the natural metric $d(u,v)=\\|u-v\\|$ with the recovery $\\|u\\| = d(u,0)$, and the remark that a normed space needs only a function of one variable, p. 235; the definition of a Banach space and of a convergent series, pp. 235–236; Examples 1–8, pp. 238–240, including $\\mathbb{R}^n$ with $\\|\\cdot\\|_p$ and its completeness proof, $C[a,b]$ with the sup norm, and $C[a,b]$ with the $L_2$ norm; closure, density, boundedness and compactness, with the closed bounded non-compact unit ball of $C[0,1]$ and the sequence $1,x,x^2,\\dots$, pp. 240–241"
    pages: "235-241"
    role: the norm axioms in the form that separates $\|0\|=0$ from positivity, the derivation of the metric axioms from the norm axioms, the $p$-norms on $\mathbb{R}^n$, and the failure of compactness of the closed unit ball in $C[0,1]$
  - work: evans-2010
    loc: "Appendix D.1, pp. 674–675: the norm axioms with nonnegativity in the codomain, the definitions of convergence, Cauchy sequence, completeness, Banach space and separability, and the $L^p(U)$ example with the identification of functions equal a.e."
    pages: "674-675"
    role: a three-axiom statement of the norm for comparison, and the $L^p$ example as the Banach space that matters in partial differential equations
  - work: reed-simon-1980
    loc: "§I.2, p. 6: the definition of a normed linear space in four conditions, the definition of a bounded linear transformation and of the operator norm, p. 7, the remark that every normed space is a metric space in the induced distance, p. 7, and the completion of a normed space as a normed space, p. 7"
    pages: "6-7"
    role: a four-condition axiom list in which nonnegativity is stated separately, and the statement that the completion of a normed space is again one, in exactly one natural way
---

:::definition[Norm, Banach space, equivalent norms]{provenance=adapted src="kreyszig-1978:§2.2, Def. 2.2-1, pp. 58–59, and Def. 2.4-4, p. 75; folland-1999:§5.1, pp. 151–152; stakgold-holst-2011:§4.3, (4.3.2), p. 235; reed-simon-1980:§I.2, p. 6; evans-2010:App. D.1, p. 674"}
Let $X$ be a vector space over $\mathbb{K}$, where $\mathbb{K}=\mathbb{R}$ or $\mathbb{C}$. A **norm** on $X$ is a real-valued function $x\mapsto\lVert x\rVert$ such that for all $x,y\in X$ and all $\alpha\in\mathbb{K}$:

- **(N1)** $\lVert x\rVert \ge 0$;
- **(N2)** $\lVert x\rVert = 0$ if and only if $x = 0$;
- **(N3)** $\lVert \alpha x\rVert = \lvert\alpha\rvert\,\lVert x\rVert$;
- **(N4)** $\lVert x+y\rVert \le \lVert x\rVert+\lVert y\rVert$ — the **triangle inequality**.

The pair $(X,\lVert\cdot\rVert)$ is a **normed space**. A function satisfying (N1), (N3) and (N4) but not necessarily (N2) is a **seminorm**; :cite[Folland]{work=folland-1999 loc="§5.1, pp. 151–152"} starts from seminorms because $\lVert f\rVert_1 = \int\lvert f\rvert$ is one on the actual functions and becomes a norm only after functions equal almost everywhere are identified.

Every norm induces a metric,

$$
d(x,y) = \lVert x-y\rVert ,
$$

the **metric induced by the norm**, and the norm is recovered from it as $\lVert x\rVert = d(x,0)$. The axioms (M1)–(M4) of :ref[a metric]{to=funcan.metric-spaces} follow: (M1) from (N1), (M2) from (N2), (M3) from (N3) with $\alpha=-1$, and (M4) from (N4) applied to $(x-y)+(y-z)$. A normed space is therefore a metric space, and all the vocabulary of that unit — convergence, Cauchy sequence, open set, closure, density, completeness — applies unchanged.

A **Banach space** is a normed space that is complete in the induced metric.

Two norms $\lVert\cdot\rVert_a$ and $\lVert\cdot\rVert_b$ on the same vector space $X$ are **equivalent** if there are constants $c, C>0$ with

$$
c\,\lVert x\rVert_b \;\le\; \lVert x\rVert_a \;\le\; C\,\lVert x\rVert_b \qquad \text{for all } x \in X .
$$

Because the inequality is two-sided it is a genuine equivalence relation. In a normed space the metric comes from a function of one variable rather than two, and the metric is translation-invariant and homogeneous: $d(x+z,y+z)=d(x,y)$ and $d(\alpha x,\alpha y) = \lvert\alpha\rvert\,d(x,y)$. Not every metric on a vector space has these properties, so not every metric space that happens to be a vector space is a normed space.
:::

:::statement[What norms and completeness give]{provenance=adapted src="kreyszig-1978:§2.2, (2) and the continuity of the norm, p. 60, Examples 2.2-2 to 2.2-7, pp. 60–62, §2.4, Thms 2.4-2, 2.4-3 and 2.4-5, pp. 73–76, §2.5, Thm 2.5-3, pp. 77–78, and Thm 2.5-5, p. 80; folland-1999:§5.1, Thm 5.1, p. 152, and Exercise 6, p. 155; stakgold-holst-2011:§4.3, Examples 3, 5 and 6, pp. 238–240, and p. 241; evans-2010:App. D.1, p. 675"}
Let $X$ be a normed space over $\mathbb{K}$.

1. **The norm is continuous.** $\bigl\lvert\,\lVert x\rVert-\lVert y\rVert\,\bigr\rvert \le \lVert x-y\rVert$, so $x\mapsto\lVert x\rVert$ is $1$-Lipschitz from $X$ to $\mathbb{R}$. Addition and scalar multiplication are continuous as well.
2. **Equivalent norms are interchangeable.** If $\lVert\cdot\rVert_a$ and $\lVert\cdot\rVert_b$ are equivalent they have the same open sets, the same convergent sequences with the same limits, the same Cauchy sequences, the same bounded sets, and the same closed sets; in particular $X$ is complete in one if and only if it is complete in the other.
3. **The series test for completeness.** $X$ is a Banach space if and only if every *absolutely convergent* series in $X$ converges, that is, $\sum_{n\ge1}\lVert x_n\rVert<\infty$ implies that the partial sums $\sum_{n\le N}x_n$ converge in $X$.
4. **Banach spaces.** $\mathbb{K}^n$ with any of the norms
   $$
   \lVert x\rVert_p = \Bigl(\sum_{j=1}^{n}\lvert x_j\rvert^{p}\Bigr)^{1/p}\ \ (1\le p<\infty),
   \qquad \lVert x\rVert_\infty = \max_{j}\lvert x_j\rvert ;
   $$
   the sequence spaces $\ell^p$ ($1\le p<\infty$) and $\ell^\infty$ with the corresponding norms; the convergent sequences $c$ and the null sequences $c_0$ with the $\ell^\infty$ norm; $C[a,b]$ with $\lVert x\rVert_\infty = \max_{t\in[a,b]}\lvert x(t)\rvert$; the bounded continuous functions on any topological space with the uniform norm; and :ref[$L^p(\mu)$]{to=measure.lp-spaces} for $1\le p\le\infty$ on any measure space.
5. **Normed spaces that are not Banach spaces.** $C[a,b]$ with $\lVert x\rVert_1 = \int_a^b\lvert x(t)\rvert\,\mathrm{d}t$, or with $\lVert x\rVert_2 = (\int_a^b\lvert x\rvert^2)^{1/2}$; the polynomials on $[a,b]$ with the sup norm; and the sequences with only finitely many nonzero terms, with any $\ell^p$ norm. Each is a dense subspace of a Banach space and is not closed in it.
6. **Finite dimensions.** Let $X$ be a normed space.
   - **(Linear combinations.)** If $x_1,\dots,x_n \in X$ are linearly independent, there is a constant $c>0$, depending on the $x_j$ and the norm, with
     $$
     \Bigl\lVert \sum_{j=1}^{n}\alpha_jx_j \Bigr\rVert \;\ge\; c\sum_{j=1}^{n}\lvert\alpha_j\rvert
     \qquad\text{for all scalars } \alpha_1,\dots,\alpha_n .
     $$
   - Every finite-dimensional subspace of $X$ is complete, hence closed in $X$.
   - **Every norm on a finite-dimensional vector space is equivalent to every other.**
   - In a finite-dimensional normed space a subset is compact if and only if it is closed and bounded. In an infinite-dimensional normed space this fails: by :cite[Kreyszig's Thm 2.5-5]{work=kreyszig-1978 loc="§2.5, p. 80"}, a normed space whose closed unit ball is compact is finite-dimensional, so in infinite dimensions the closed unit ball is never compact.

Part 6 is what makes finite-dimensional linear algebra metrically featureless: convergence, completeness, continuity and compactness there do not depend on the norm, and one may always choose whichever is convenient. The statements in part 5 and the last clause of part 6 are what is lost in infinite dimensions.
:::

:::idea{provenance=original}
A norm is a metric that respects the linear structure, and every statement in part 1 and part 2 is the consequence of that single compatibility.

The series test (part 3) exploits the fact that in a normed space one may add. A Cauchy sequence can be thinned to a subsequence whose consecutive gaps are summable, and such a subsequence is the partial-sum sequence of an absolutely convergent series; conversely a series with summable norms has Cauchy partial sums. So the two conditions say the same thing about the space, and the series form is easier to verify because one controls one number per term.

Finite dimensions (part 6) all rest on one lemma: on the set of coefficient vectors of norm $1$, the length $\lVert\sum\alpha_jx_j\rVert$ has a positive minimum. The reason is compactness of that set in $\mathbb{K}^n$, which is Bolzano-Weierstrass, together with linear independence, which forbids the minimum from being $0$. Once the lemma is in hand, completeness, closedness and the equivalence of all norms are three readings of the same inequality: a norm on a finite-dimensional space is squeezed between two multiples of the coordinate sum $\sum_j\lvert\alpha_j\rvert$, and so is any competing norm.
:::

:::proof[Parts 1, 2 and 3]{provenance=adapted src="kreyszig-1978:§2.2, p. 60; folland-1999:§5.1, Thm 5.1, p. 152"}
**Part 1.** By (N4), $\lVert x\rVert = \lVert (x-y)+y\rVert \le \lVert x-y\rVert+\lVert y\rVert$, so $\lVert x\rVert-\lVert y\rVert \le \lVert x-y\rVert$. Exchanging $x$ and $y$ and using $\lVert y-x\rVert = \lVert x-y\rVert$ from (N3) gives the same bound for $\lVert y\rVert-\lVert x\rVert$, hence the stated inequality; a $1$-Lipschitz map is continuous. For addition, $\lVert (x_n+y_n)-(x+y)\rVert \le \lVert x_n-x\rVert+\lVert y_n-y\rVert$; for scalar multiplication, $\lVert \alpha_nx_n-\alpha x\rVert \le \lvert\alpha_n\rvert\lVert x_n-x\rVert+\lvert\alpha_n-\alpha\rvert\lVert x\rVert$, and $(\alpha_n)$ is bounded because it converges.

**Part 2.** Suppose $c\lVert\cdot\rVert_b \le \lVert\cdot\rVert_a \le C\lVert\cdot\rVert_b$. Then $\lVert x_n-x\rVert_a\to0$ if and only if $\lVert x_n-x\rVert_b\to0$, because each quantity is squeezed by a positive multiple of the other; the same two-sided squeeze applies to $\lVert x_m-x_n\rVert$, giving the same Cauchy sequences, and to $\sup$ over a set, giving the same bounded sets. Every ball of one norm contains a ball of the other with the same centre and a rescaled radius, so the two collections of open sets coincide, and hence so do the closed sets. Completeness is "every Cauchy sequence converges", and both halves of that sentence have just been shown to be norm-independent. **Two-sidedness is essential**: a one-sided bound $\lVert\cdot\rVert_a \le C\lVert\cdot\rVert_b$ gives only that $b$-convergence implies $a$-convergence.

**Part 3.** *Complete $\Rightarrow$ absolutely convergent series converge.* Let $\sum\lVert x_n\rVert<\infty$ and $s_N = \sum_{n=1}^{N}x_n$. For $N>M$, $\lVert s_N-s_M\rVert \le \sum_{n=M+1}^{N}\lVert x_n\rVert$, which is a tail of a convergent series of nonnegative numbers and so tends to $0$ as $M,N\to\infty$. Thus $(s_N)$ is Cauchy and converges.

*Converse.* Let $(x_n)$ be Cauchy. Choose indices $n_1<n_2<\cdots$ with $\lVert x_m-x_n\rVert<2^{-j}$ for all $m,n\ge n_j$. Put $y_1 = x_{n_1}$ and $y_j = x_{n_j}-x_{n_{j-1}}$ for $j\ge2$. Then $\sum_{j\ge1}\lVert y_j\rVert \le \lVert x_{n_1}\rVert + \sum_{j\ge2}2^{-(j-1)} = \lVert x_{n_1}\rVert+1<\infty$, so by hypothesis the series $\sum_jy_j$ converges; its $k$-th partial sum telescopes to $x_{n_k}$, so the subsequence $(x_{n_k})$ converges. A Cauchy sequence with a convergent subsequence converges to the same limit (:ref[metric spaces]{to=funcan.metric-spaces}, part 3). $\square$
:::

:::proof[Part 6]{provenance=adapted src="kreyszig-1978:§2.4, Lemma 2.4-1, pp. 72–73, Thm 2.4-2, pp. 73–74, and Thm 2.4-5, pp. 75–76"}
**The linear-combinations lemma.** Write $s = \sum_j\lvert\alpha_j\rvert$. If $s=0$ all the $\alpha_j$ vanish and the inequality holds for any $c$. If $s>0$, divide by $s$: with $\beta_j = \alpha_j/s$ the claim becomes
$$
\Bigl\lVert\sum_{j=1}^{n}\beta_jx_j\Bigr\rVert \ \ge\ c
\qquad\text{whenever } \sum_{j=1}^{n}\lvert\beta_j\rvert = 1 . \tag{$\dagger$}
$$
Suppose $(\dagger)$ fails for every $c>0$. Then there are coefficient vectors $\beta^{(m)} = (\beta^{(m)}_1,\dots,\beta^{(m)}_n)$ with $\sum_j\lvert\beta^{(m)}_j\rvert=1$ and $y_m := \sum_j\beta^{(m)}_jx_j$ satisfying $\lVert y_m\rVert\to0$. Each coordinate satisfies $\lvert\beta^{(m)}_j\rvert\le1$, so the vectors $\beta^{(m)}$ lie in a closed bounded subset of $\mathbb{K}^n$; by Bolzano-Weierstrass (:ref[compactness]{to=found.compactness}) a subsequence converges, say $\beta^{(m_i)}\to\beta$ with $\sum_j\lvert\beta_j\rvert=1$, so **not all $\beta_j$ are zero**. Set $y = \sum_j\beta_jx_j$. Then
$$
\lVert y_{m_i}-y\rVert = \Bigl\lVert\sum_j\bigl(\beta^{(m_i)}_j-\beta_j\bigr)x_j\Bigr\rVert \le \sum_j\bigl\lvert\beta^{(m_i)}_j-\beta_j\bigr\rvert\,\lVert x_j\rVert \longrightarrow 0 ,
$$
so $y_{m_i}\to y$, and by continuity of the norm $\lVert y\rVert = \lim\lVert y_{m_i}\rVert = 0$, whence $y=0$ by (N2). But $y$ is a nontrivial linear combination of linearly independent vectors, so $y\ne0$. Contradiction, so $(\dagger)$ holds for some $c>0$. **Linear independence is used exactly once, at the last step**, and nowhere else.

**Finite-dimensional subspaces are complete.** Let $Y\subseteq X$ have $\dim Y = n$ and basis $e_1,\dots,e_n$, and let $(y_m)$ be Cauchy in $Y$, $y_m = \sum_j\alpha^{(m)}_je_j$. By the lemma, with the constant $c$ belonging to $\{e_1,\dots,e_n\}$,
$$
\lVert y_m-y_r\rVert \ \ge\ c\sum_{j=1}^{n}\bigl\lvert\alpha^{(m)}_j-\alpha^{(r)}_j\bigr\rvert \ \ge\ c\,\bigl\lvert\alpha^{(m)}_j-\alpha^{(r)}_j\bigr\rvert
$$
for each $j$. Dividing by $c>0$ shows each coordinate sequence is Cauchy in $\mathbb{K}$, hence convergent, say $\alpha^{(m)}_j\to\alpha_j$. Put $y = \sum_j\alpha_je_j \in Y$; then $\lVert y_m-y\rVert \le \sum_j\lvert\alpha^{(m)}_j-\alpha_j\rvert\,\lVert e_j\rVert\to0$. So $Y$ is complete, and by part 5 of :ref[metric spaces]{to=funcan.metric-spaces} it is closed in $X$.

**All norms on a finite-dimensional space are equivalent.** Let $\dim X = n$ with basis $e_1,\dots,e_n$, and let $\lVert\cdot\rVert_a$, $\lVert\cdot\rVert_b$ be two norms. For $x = \sum_j\alpha_je_j$, the lemma applied in $(X,\lVert\cdot\rVert_a)$ gives a $c>0$ with $\lVert x\rVert_a \ge c\sum_j\lvert\alpha_j\rvert$, while (N3) and (N4) applied in $(X,\lVert\cdot\rVert_b)$ give
$$
\lVert x\rVert_b \ \le\ \sum_{j=1}^{n}\lvert\alpha_j\rvert\,\lVert e_j\rVert_b \ \le\ k\sum_{j=1}^{n}\lvert\alpha_j\rvert ,
\qquad k = \max_j\lVert e_j\rVert_b > 0 .
$$
Combining, $\lVert x\rVert_a \ge (c/k)\lVert x\rVert_b$. Exchanging the roles of $a$ and $b$ gives the other inequality, and the two together are the definition of equivalence.

**Compactness.** In any metric space, compactness forces closedness and boundedness. Conversely, in a finite-dimensional normed space let $M$ be closed and bounded and $(x_m)\subseteq M$. Writing $x_m$ in a basis and using the lemma exactly as above, boundedness of $(\lVert x_m\rVert)$ forces boundedness of the coefficient vectors in $\mathbb{K}^n$; Bolzano-Weierstrass gives a convergent subsequence of coefficients, which assembles into a convergent subsequence of $(x_m)$, whose limit lies in $M$ because $M$ is closed. **Finite dimension is used in reducing to coefficient vectors in $\mathbb{K}^n$**, and the reduction has no analogue in infinite dimensions: in $\ell^2$ the vectors $e_n = (0,\dots,0,1,0,\dots)$ all have norm $1$ and satisfy $\lVert e_n-e_m\rVert = \sqrt{2}$ for $n\ne m$, so they form a closed bounded set with no convergent subsequence. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="kreyszig-1978:§2.2, Example 2.2-7, p. 62, §2.4, p. 74, and §2.5, p. 77 and Thm 2.5-5, p. 80; folland-1999:§5.1, pp. 151–152; stakgold-holst-2011:§4.3, p. 241"}
- **(N2) distinguishes a norm from a seminorm**, and it is the axiom that fails for $\int\lvert f\rvert$ on actual functions. Everything else in this unit holds for a seminorm, with "metric" replaced by "pseudometric"; passing to the quotient by $\{x : \lVert x\rVert = 0\}$ restores (N2), and that quotient is how $L^p$ is built.
- **(N3) is what ties the norm to the linear structure** and is used in part 1, in the lemma and throughout the finite-dimensional theory. A metric on a vector space without it — for instance $d(x,y)=\min(1,\lvert x-y\rvert)$ on $\mathbb{R}$, which is a perfectly good metric inducing the usual topology — comes from no norm, because it is bounded and (N3) forbids a bounded nonzero norm.
- **Completeness is a property of the norm, not of the vector space.** The same set $C[a,b]$ is a Banach space under $\lVert\cdot\rVert_\infty$ and is not under $\lVert\cdot\rVert_1$ or $\lVert\cdot\rVert_2$; see the examples in :ref[metric spaces and completeness]{to=funcan.metric-spaces}. By part 2 this is possible only because those norms are *inequivalent*.
- **Finite dimension in part 6 cannot be weakened to separability or to anything else.** The polynomials form an infinite-dimensional subspace of $C[0,1]$ that is dense and therefore not closed, which is :cite[Kreyszig's]{work=kreyszig-1978 loc="§2.4, p. 74"} example; the finite-dimensional conclusion fails for it in every respect.
- **The failure of compactness of the closed unit ball is the defining feature of infinite dimensions.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.3, p. 241"} make the point with $1,x,x^2,\dots$ in $C[0,1]$: all have sup norm $1$ and no subsequence converges uniformly. This is why "bounded" is so much weaker than "compact" in analysis, why minimising sequences need an extra argument to converge, and why :ref[weak convergence]{to=funcan.weak-convergence} and :ref[compact operators]{to=funcan.compact-operators} exist as subjects.
- **Every normed space has a completion**, a Banach space containing it as a dense subspace, unique up to a linear isometry; :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.2, p. 7"} note that the vector operations and the norm extend to the metric completion in exactly one way. :cite[Kreyszig]{work=kreyszig-1978 loc="§2.2, Example 2.2-7, p. 62"} defines $L^p[a,b]$ this way, as the completion of $C[a,b]$ in $\lVert\cdot\rVert_p$; :ref[$L^p$ spaces]{to=measure.lp-spaces} constructs the same space from the Lebesgue integral and proves completeness directly. Neither description is used as a hypothesis above.
- **This unit says nothing about maps between normed spaces.** Boundedness, continuity and the operator norm, which :cite[Folland]{work=folland-1999 loc="§5.1, Prop. 5.2 and (5.3), pp. 153–154"} and :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.2, pp. 6–7"} introduce alongside the definitions above, are the subject of :ref[bounded linear operators]{to=funcan.bounded-operators}.
:::

:::method[Working with norms]{provenance=original}
1. **To prove a candidate is a norm**, check (N3) and (N4) and then (N2); (N1) is usually free, being either built into the formula or forced by (N2)–(N4) as $0 = \lVert x-x\rVert \le 2\lVert x\rVert$. For $\lVert\cdot\rVert_p$ the only hard axiom is (N4), which is Minkowski's inequality; see :ref[$L^p$ spaces]{to=measure.lp-spaces}.
2. **To prove a space is a Banach space**, prefer the series test of part 3 to a direct Cauchy-sequence argument: one controls a single number per term and the triangle inequality does the rest.
3. **To prove a space is not a Banach space**, exhibit it as a dense non-closed subspace of a known Banach space, or produce one Cauchy sequence whose natural limit leaves the space.
4. **To prove two norms are equivalent**, produce the two constants. If the space is finite-dimensional, do not: quote part 6. If it is infinite-dimensional, expect the answer to be *no*, and look for a sequence with $\lVert x_n\rVert_a = 1$ and $\lVert x_n\rVert_b\to0$, which rules equivalence out.
5. **To find the sharp constants**, normalise one norm to $1$ and minimise or maximise the other. In finite dimensions the extremum is attained, by part 6, so the sharp constants exist and are achieved by an explicit vector.
6. **Choose the norm to match the question.** A sup norm controls the worst point, an $L^1$ norm controls the total, an $L^2$ norm controls the energy. They are inequivalent on any infinite-dimensional function space, so the choice is a modelling decision, not a technicality.
:::

:::example[Sharp equivalence constants, and their failure one dimension at a time]{provenance=original}
On $C[0,1]$ compare

$$
\lVert u\rVert_\infty = \max_{0\le t\le1}\lvert u(t)\rvert ,
\qquad
\lVert u\rVert_1 = \int_0^1\lvert u(t)\rvert\,\mathrm{d}t .
$$

One inequality is immediate: $\lVert u\rVert_1 \le \lVert u\rVert_\infty$, since the interval has length $1$, with equality for constants. The question is whether a reverse constant exists.

**On the two-dimensional subspace $P = \{a+bt\}$.** Here part 6 guarantees one; we find the best. Let $p(t)=a+bt$ with $p \ne 0$, and write $u = \lvert p(0)\rvert = \lvert a\rvert$, $v = \lvert p(1)\rvert = \lvert a+b\rvert$. Since $p$ is affine, $\lVert p\rVert_\infty = \max(u,v)$.

*The $L^1$ norm.* If $p$ does not vanish in $(0,1)$ then $\lvert p\rvert$ is affine there and $\lVert p\rVert_1 = (u+v)/2$. If it vanishes at $t_0 = -a/b \in (0,1)$, the graph of $\lvert p\rvert$ is two triangles of heights $u$ and $v$ and bases $t_0$ and $1-t_0$, and since $\lvert b\rvert = u+v$ in that case,
$$
\lVert p\rVert_1 = \frac{u\,t_0}{2}+\frac{v(1-t_0)}{2} = \frac{u^2+v^2}{2(u+v)} .
$$

*Minimise the ratio.* The sign-changing case is the smaller of the two, since $(u^2+v^2)/(u+v) \le u+v$. Scale so that $\max(u,v)=1$, say $v=1$ and $u\in[0,1]$, and minimise
$$
f(u) = \frac{u^2+1}{2(u+1)} ,\qquad f'(u) = \frac{u^2+2u-1}{2(u+1)^2} ,
$$
which vanishes at $u = \sqrt2-1$. There
$$
f(\sqrt2-1) = \frac{(\sqrt2-1)^2+1}{2\sqrt2} = \frac{4-2\sqrt2}{2\sqrt2} = \sqrt2-1 .
$$

So on $P$,
$$
\boxed{\ (\sqrt2-1)\,\lVert p\rVert_\infty \ \le\ \lVert p\rVert_1 \ \le\ \lVert p\rVert_\infty\ }
\qquad \sqrt2-1 = 0.4142135624 ,
$$
and **both constants are sharp**: the upper one for $p\equiv1$, the lower one for
$$
p_\ast(t) = (\sqrt2-1) - \sqrt2\,t ,
$$
which has $p_\ast(0)=\sqrt2-1$, $p_\ast(1)=-1$, so $\lVert p_\ast\rVert_\infty = 1$, and vanishes at $t_0 = 1-1/\sqrt2 = 0.2928932$, giving
$$
\lVert p_\ast\rVert_1 = \tfrac12(\sqrt2-1)(0.2928932)+\tfrac12(1)(0.7071068) = 0.0606602+0.3535534 = 0.4142136 .
$$
A numerical sweep over all $p$ with $\lVert p\rVert_\infty=1$ returns a minimum $L^1$ norm of $0.41421356$, confirming the algebra.

**On all of $C[0,1]$ there is no such constant.** Take $q_n(t) = t^n$. Then $\lVert q_n\rVert_\infty = 1$ for every $n$, while
$$
\lVert q_n\rVert_1 = \int_0^1 t^n\,\mathrm{d}t = \frac{1}{n+1} \longrightarrow 0 .
$$
A constant $c>0$ with $c\lVert u\rVert_\infty \le \lVert u\rVert_1$ would force $c \le 1/(n+1)$ for every $n$, so $c=0$. The two norms are inequivalent on $C[0,1]$, which is why $C[0,1]$ is complete in one and not in the other.

**What happened between the two cases.** Restricting to $P$ cut the dimension to $2$, and the extremal functions $q_n$ — which concentrate their mass near $t=1$ — cannot be approximated by affine functions. The degradation is gradual: on the polynomials of degree $\le N$ the best constant is positive for each $N$, by part 6, and tends to $0$ as $N\to\infty$, since $q_N$ lies in that space. Part 6 is a statement for each fixed finite dimension, with a constant that is allowed to depend on it, and nothing more.

**A finite-dimensional sanity check.** In $\mathbb{K}^3$ take $x=(3,-4,12)$: $\lVert x\rVert_1 = 19$, $\lVert x\rVert_2 = \sqrt{9+16+144} = 13$, $\lVert x\rVert_\infty = 12$. The sharp general bounds $\lVert x\rVert_\infty \le \lVert x\rVert_2 \le \lVert x\rVert_1 \le \sqrt3\,\lVert x\rVert_2$ read $12\le13\le19\le22.5167$, all satisfied, with the last slack because $x$ is far from the vector $(1,1,1)$ that makes it an equality.
:::

:::application{provenance=original}
**Which errors a numerical method controls.** A finite-element or finite-difference error bound is always stated in a norm, and in infinite dimensions the norms are inequivalent, so the statement does not transfer. An $L^2$ error bound permits a large pointwise error on a small set; an $L^\infty$ bound forbids it and is correspondingly harder to prove. Grid refinement studies that report one norm and are used to justify a claim in another are making an unproved inference. See :ref[finite elements]{to=num.finite-elements}.

**Why finite-dimensional linear algebra needs no analysis.** Every statement about convergence of matrices or vectors in :ref[matrix norms and conditioning]{to=linalg.matrix-norms-conditioning} is norm-independent, by part 6, which is why one may compute a condition number in whichever norm is cheapest and still say "ill-conditioned" meaningfully. The constants relating the norms depend on the dimension, so the statement degrades as a discretisation is refined, and that degradation is exactly the infinite-dimensional obstruction appearing in finite form.

**Function spaces in partial differential equations.** :cite[Evans]{work=evans-2010 loc="App. D.1, p. 675"} lists $L^p$, the Hölder spaces and the Sobolev spaces as the Banach spaces of the subject. Existence proofs produce a solution as the limit of approximations and so need completeness in the norm used for the estimates; the choice of that norm is the choice of what a "solution" is. See :ref[weak solutions and Sobolev spaces]{to=pde.weak-solutions-sobolev}.

**Signal and control engineering.** Peak amplitude is an $L^\infty$ constraint, total energy an $L^2$ constraint, total variation an $L^1$-type constraint on the derivative. Because these are inequivalent, a specification must name all the ones that matter; a controller optimal in one can be arbitrarily bad in another, which is the whole content of the distinction between $H^\infty$ and $H^2$ design.

**Series of operators and of functions.** The series test of part 3 is the reason absolutely convergent expansions may be manipulated at all: the :ref[Neumann series]{to=green.neumann-series} for $(I-K)^{-1}$, the exponential series for :ref[the matrix exponential]{to=linalg.matrix-exponential}, and the Weierstrass $M$-test for :ref[uniform convergence]{to=found.uniform-convergence} are the same statement in three Banach spaces.
:::
