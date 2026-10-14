---
id: funcan.uniform-boundedness-open-mapping
title: Uniform boundedness and open mapping theorems
kind: theorem
level: advanced
summary: "Two of the three pillars of linear functional analysis, both consequences of Baire's category theorem: a family of bounded operators on a Banach space that is bounded at every point is bounded in norm, and a bounded operator from one Banach space onto another maps open sets to open sets — from which the bounded inverse and closed graph theorems follow, and with them the fact that a symmetric operator defined on a whole Hilbert space cannot be unbounded."
prereqs: [funcan.metric-spaces, funcan.normed-banach-spaces, funcan.bounded-operators, funcan.hilbert-spaces]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§4.7, pp. 247–254: Definition 4.7-1 (rare, meager, nonmeager); Baire's category theorem 4.7-2 with its nested-ball proof; the uniform boundedness theorem 4.7-3 with its proof through the closed sets $A_{k}$; application 4.7-4 (the space of polynomials with the max-coefficient norm is not complete); application 4.7-5 (a continuous $2\\pi$-periodic function whose Fourier series diverges at a point), with the Dirichlet kernel $q_{n}$, the identification of $\\lVert f_{n}\\rVert$ with the Lebesgue constant and the proof that it is unbounded. §4.12, pp. 285–289: Definition 4.12-1 (open mapping), Theorem 4.12-2 (open mapping and bounded inverse) and Lemma 4.12-3 with its three-stage proof (a)–(c); Problems 5, 7, 8 and 9, p. 290. §4.13, pp. 291–294: Definition 4.13-1 (closed linear operator), the closed graph theorem 4.13-2 with its proof through the projection $P$, Theorem 4.13-3 (the sequential criterion for closedness) and Example 4.13-4 (differentiation on $C[0,1]$ is closed but unbounded, and its domain is not closed)"
    pages: "247-254, 285-290, 291-294"
    role: the whole skeleton — the category definitions, Baire's theorem and its proof, the uniform boundedness theorem and its proof, the two classical applications, the open mapping theorem with the lemma that carries it, and the closed graph theorem with the differentiation counterexample
  - work: folland-1999
    loc: "§5.3, pp. 161–164: Theorem 5.9 (Baire category theorem, both forms); the reformulation of openness for a linear map between normed spaces; Theorem 5.10 (open mapping theorem) with its two-stage proof; Corollary 5.11 (a bounded bijection is an isomorphism); Theorem 5.12 (closed graph theorem) and the remark on what it buys in practice; Theorem 5.13 (uniform boundedness principle), parts (a) and (b), with the short proof through the closed sets $E_{n}$; Exercises 29–32"
    pages: "161-164"
    role: the form of the uniform boundedness principle that needs only pointwise boundedness on a nonmeager set; the compact proofs of the open mapping and closed graph theorems; the observation that completeness of either space cannot be dropped, with the counterexamples
  - work: reed-simon-1980
    loc: "§III.5, pp. 81–83: Theorem III.8 (principle of uniform boundedness) and the corollary that a separately continuous bilinear map on Banach spaces is jointly continuous; Theorem III.10 (open mapping theorem) with the reductions that precede its proof; Theorem III.11 (inverse mapping theorem); Theorem III.12 (closed graph theorem), whose proof is followed at the foot of p. 83 by the three statements (a), (b), (c) that explain what it saves; p. 86: the discussion of those three statements, the Corollary (Hellinger–Toeplitz theorem) with its proof, and the discussion of what it means for unbounded observables in quantum mechanics"
    pages: "81-83, 86"
    role: the reduction of the open mapping theorem to a statement about one ball; the bilinear corollary of uniform boundedness; the Hellinger–Toeplitz theorem and the reason it matters in physics
  - work: stakgold-holst-2011
    loc: "§5.9, pp. 347–348: Theorem 5.9.1 (closed graph theorem), Theorem 5.9.2 (bounded inverse theorem), Theorem 5.9.3 (Banach–Schauder or open mapping theorem), Theorem 5.9.4 (Banach–Steinhaus theorem), the remark that these three results are equivalent, and the listing of the Hahn–Banach, Banach–Schauder and Banach–Steinhaus theorems as the three basic principles of linear functional analysis"
    pages: "347-348"
    role: the naming and grouping of the theorems, and the statement that the open mapping, bounded inverse and closed graph theorems are equivalent to one another
  - work: evans-2010
    loc: "Appendix D.3, p. 677: the definition of a closed linear operator between Banach spaces, Theorem 1 (closed graph theorem), and the deduction that for $\\eta$ in the resolvent set the inverse $(A-\\eta I)^{-1}$ is a bounded linear operator"
    pages: "677"
    role: the application of the closed graph theorem that justifies calling the resolvent a bounded operator
---

:::definition[Category, open maps, graphs]{provenance=adapted src="kreyszig-1978:§4.7, Def. 4.7-1, p. 247, §4.12, Def. 4.12-1, p. 286, and §4.13, Def. 4.13-1, p. 292; folland-1999:§5.3, the terminology after Thm 5.9 and the definition of the graph, pp. 161–162; evans-2010:Appendix D.3, the definition of a closed operator, p. 677"}
Let $X$ be a metric space. A subset $M\subset X$ is

- **nowhere dense** (Kreyszig: *rare*) if its closure has empty interior — it contains no ball;
- **meager**, or *of the first category*, if it is a countable union of nowhere dense sets;
- **nonmeager**, or *of the second category*, otherwise. A set is called **residual** when what it omits is meager.

Let $X,Y$ be metric spaces. A map $f\colon X\to Y$ is **open** if $f(U)$ is open in $Y$ for every open $U\subset X$. For a *linear* map between normed spaces this simplifies: since a linear map commutes with translations and with dilations, $f$ is open exactly when $f(B)$ contains a ball centred at $0$ in $Y$, where $B$ is the open unit ball of $X$. Openness is not continuity and does not follow from it; Kreyszig's reminder is $t\mapsto\sin t$ on $\mathbb{R}$, continuous but carrying the open interval $(0,2\pi)$ to the closed set $[-1,1]$.

Let $T\colon \mathcal{D}(T)\to Y$ be linear with domain $\mathcal{D}(T)\subset X$. Its **graph** is
$$
\Gamma(T)=\{(x,Tx)\;:\;x\in\mathcal{D}(T)\}\subset X\times Y ,
$$
and $T$ is **closed** if $\Gamma(T)$ is a closed subset of $X\times Y$ with the norm $\lVert(x,y)\rVert=\lVert x\rVert+\lVert y\rVert$. Unwinding the definition gives the form used in practice:
$$
T\ \text{is closed}\iff
\bigl[\,x_{n}\in\mathcal{D}(T),\ x_{n}\to x,\ Tx_{n}\to y\ \Rightarrow\ x\in\mathcal{D}(T)\ \text{and}\ Tx=y\,\bigr].
$$
Compare continuity, which asserts that $x_{n}\to x$ *by itself* forces $Tx_{n}\to Tx$. Closedness is weaker: it assumes the image sequence already converges and only identifies the limit.

Part 5 of the second statement below, and its proof, are the one place where a Hilbert space is needed. There $H$ is a complex Hilbert space (:ref[]{to=funcan.hilbert-spaces}) with inner product $(x,y)$, **linear in the first slot** and conjugate-linear in the second, so that $\lVert x\rVert^{2}=(x,x)$. Two of its properties are used: the inner product is continuous in each slot separately, since $\lvert(x,y)-(x',y)\rvert\le\lVert x-x'\rVert\lVert y\rVert$ by Cauchy–Schwarz; and it is non-degenerate, so that $(z,v)=0$ for every $z$ forces $v=0$ (take $z=v$). Reed and Simon write the inner product conjugate-linear in the first slot instead; the symmetry hypothesis $(Ax,y)=(x,Ay)$ is the same statement in either convention.
:::

:::statement[Baire's category theorem]{provenance=adapted src="kreyszig-1978:§4.7, Thm 4.7-2, p. 247; folland-1999:§5.3, Thm 5.9, p. 161; reed-simon-1980:§III.5, p. 81"}
A nonempty complete metric space is nonmeager in itself. Equivalently: if a complete metric space $X$ is written as a countable union $X=\bigcup_{k\ge1}A_{k}$ of closed sets, then at least one $A_{k}$ contains a ball. Equivalently again (Folland's form (a)): in a complete metric space the intersection of countably many dense open sets is dense.

The converse fails — an incomplete normed space can be nonmeager in itself — so completeness is sufficient, not necessary.
:::

:::statement[Uniform boundedness, or the Banach–Steinhaus theorem]{provenance=adapted src="kreyszig-1978:§4.7, Thm 4.7-3, p. 249; folland-1999:§5.3, Thm 5.13, p. 163; reed-simon-1980:§III.5, Thm III.8, p. 81; stakgold-holst-2011:§5.9, Thm 5.9.4, p. 348"}
Let $X$ be a normed space, $Y$ a normed space, and $\mathcal{F}$ a family of bounded linear operators from $X$ to $Y$.

1. **(Folland's form.)** If the set of $x$ at which $\sup_{T\in\mathcal{F}}\lVert Tx\rVert<\infty$ is nonmeager in $X$, then $\sup_{T\in\mathcal{F}}\lVert T\rVert<\infty$.
2. **(The usual form.)** If $X$ is a Banach space and for every $x\in X$ there is a constant $c_{x}$ with
   $$
   \lVert Tx\rVert\le c_{x}\qquad\text{for all }T\in\mathcal{F},
   $$
   then there is a single constant $c$ with $\lVert T\rVert\le c$ for all $T\in\mathcal{F}$.

Part 2 follows from part 1 because a Banach space is nonmeager in itself. Note what is *not* assumed: the family need not be countable, need not be a sequence, and nothing is assumed about convergence. The useful reading is often the contrapositive — if the norms $\lVert T\rVert$ are unbounded and $X$ is complete, then some single $x$ has $\sup_{T}\lVert Tx\rVert=\infty$.
:::

:::statement[Open mapping, bounded inverse, closed graph]{provenance=adapted src="kreyszig-1978:§4.12, Thm 4.12-2 and Lemma 4.12-3, pp. 286–287, and §4.13, Thm 4.13-2, p. 292; folland-1999:§5.3, Thm 5.10, Cor. 5.11 and Thm 5.12, pp. 162–163; reed-simon-1980:§III.5, Thms III.10, III.11 and III.12, pp. 82–83, and the Corollary on p. 86; stakgold-holst-2011:§5.9, Thms 5.9.1–5.9.3, p. 347; evans-2010:Appendix D.3, Thm 1, p. 677"}
Let $X$ and $Y$ be **Banach** spaces.

1. **Open mapping theorem (Banach–Schauder).** A bounded linear operator $T\colon X\to Y$ that is **onto** $Y$ is an open mapping.
2. **Bounded inverse theorem.** If in addition $T$ is injective, then $T^{-1}\colon Y\to X$ is a bounded linear operator. So a bounded linear bijection between Banach spaces is an isomorphism of normed spaces.
3. **Equivalence of complete norms.** If $\lVert\cdot\rVert_{1}$ and $\lVert\cdot\rVert_{2}$ are two norms on one vector space $X$, each making it complete, and $\lVert x\rVert_{2}\le C\lVert x\rVert_{1}$ for all $x$, then the norms are equivalent: $a\lVert x\rVert_{1}\le\lVert x\rVert_{2}\le C\lVert x\rVert_{1}$ for some $a>0$. (Apply part 2 to the identity map.)
4. **Closed graph theorem.** A closed linear operator $T\colon\mathcal{D}(T)\to Y$ whose domain $\mathcal{D}(T)$ is a **closed** subspace of $X$ — in particular one defined on all of $X$ — is bounded. Conversely, a bounded operator with closed domain is closed.
5. **Hellinger–Toeplitz theorem.** Let $H$ be a Hilbert space and $A\colon H\to H$ a linear operator defined on **all** of $H$ with $(Ax,y)=(x,Ay)$ for all $x,y\in H$. Then $A$ is bounded.

Statements 1, 2 and 4 are equivalent to one another: Stakgold and Holst record this, and the proofs below derive 2 from 1 and 4 from 2.
:::

:::note[Names, and the company these theorems keep]{provenance=adapted src="stakgold-holst-2011:§5.9, the list of the three basic principles and the names attached to them, p. 347"}
Three theorems are traditionally singled out as the foundations of the linear theory, and Stakgold and Holst list them in that way. One is the extension theorem for functionals, due to Hahn and Banach (:ref[]{to=funcan.hahn-banach}), which rests on Zorn's lemma (:ref[]{to=found.zorn-lemma}) rather than on completeness. The other two are the subject of this unit: Banach and Schauder's open mapping theorem, and the principle of uniform boundedness, which carries the names of Banach and Steinhaus. Both of the latter are consequences of Baire's theorem, and completeness is where their force comes from.
:::

:::idea{provenance=original}
Both theorems convert a *pointwise* hypothesis into a *uniform* conclusion, and both do it the same way. Complete a metric space and you gain one thing: it cannot be assembled out of countably many negligible pieces. So if a space is covered by countably many closed sets defined by some bound — "$\lVert Tx\rVert\le n$ for every $T$ in the family", or "$y$ is within $n$ of the image of the unit ball" — one of those sets must be fat enough to contain a ball. A ball is all that linearity needs: translating it to the origin and rescaling turns a bound on a ball into a bound on the whole space. That is the uniform boundedness theorem in two sentences. The open mapping theorem needs one extra manoeuvre, because Baire's theorem produces a ball inside the *closure* of the image of the unit ball, and a closure is not good enough. The manoeuvre is a geometric series: hit the target to within half, correct the remainder to within a quarter using the rescaled statement, and so on; the corrections form an absolutely convergent series, which converges because $X$ is complete, and its sum is an exact preimage. The closed graph theorem is then free: the graph of a closed operator is itself a Banach space, and the projection from the graph onto $X$ is a bounded bijection, so its inverse $x\mapsto(x,Tx)$ is bounded — which says exactly that $T$ is.
:::

:::proof[Baire's category theorem]{provenance=adapted src="kreyszig-1978:§4.7, proof of Thm 4.7-2, pp. 247–248; folland-1999:§5.3, proof of Thm 5.9(a), p. 161"}
Let $X\ne\emptyset$ be complete and suppose, for contradiction, that $X=\bigcup_{k\ge1}M_{k}$ with every $M_{k}$ nowhere dense. We build a point lying in no $M_{k}$.

Since $\overline{M_{1}}$ contains no ball and $X$ does, $\overline{M_{1}}\ne X$, so its complement is nonempty and open; choose a closed ball $\overline{B}_{1}=\overline{B}(p_{1};r_{1})$ inside it with $r_{1}<\tfrac12$. Inductively, suppose the closed ball $\overline{B}_{k}$ of radius $r_{k}<2^{-k}$ has been chosen with $\overline{B}_{k}\cap M_{k}=\emptyset$. The set $\overline{M_{k+1}}$ contains no ball, so it does not contain the open ball $B_{k}$; hence $B_{k}\setminus\overline{M_{k+1}}$ is nonempty and open, and we may choose inside it a closed ball $\overline{B}_{k+1}$ of radius $r_{k+1}<2^{-(k+1)}$. By construction $\overline{B}_{1}\supset\overline{B}_{2}\supset\cdots$ and $\overline{B}_{k}\cap M_{k}=\emptyset$.

The centres satisfy $d(p_{m},p_{n})<2^{-m}$ for $n>m$, since both lie in $\overline{B}_{m}$; so $(p_{k})$ is Cauchy and, **by completeness**, converges to some $p\in X$. For each fixed $m$ the tail $(p_{k})_{k\ge m}$ lies in the closed set $\overline{B}_{m}$, so $p\in\overline{B}_{m}$, and therefore $p\notin M_{m}$. As $m$ was arbitrary, $p$ lies in no $M_{m}$, contradicting $X=\bigcup M_{k}$.

For the second form, if $X=\bigcup A_{k}$ with each $A_{k}$ closed and none containing a ball, then each $A_{k}$ is nowhere dense and the above applies. $\square$
:::

:::proof[Uniform boundedness]{provenance=adapted src="folland-1999:§5.3, proof of Thm 5.13, p. 163; kreyszig-1978:§4.7, proof of Thm 4.7-3, pp. 249–250; reed-simon-1980:§III.5, proof of Thm III.8, p. 81"}
For $n\in\mathbb{N}$ put
$$
E_{n}=\{x\in X:\ \lVert Tx\rVert\le n\ \text{for every }T\in\mathcal{F}\}=\bigcap_{T\in\mathcal{F}}\{x:\lVert Tx\rVert\le n\} .
$$
Each set in the intersection is closed, because $x\mapsto\lVert Tx\rVert$ is continuous ($T$ is bounded, the norm is continuous), and intersections of closed sets, however many, stay closed; so every $E_{n}$ is closed. The hypothesis of part 1 says that $\bigcup_{n}E_{n}$ contains a nonmeager set, hence is itself nonmeager, hence — being a countable union — cannot have all its terms nowhere dense. Some $E_{n}$ is therefore not nowhere dense; being closed, it contains a ball $B(x_{0};r)$.

Now transport that ball to the origin. If $\lVert x\rVert<r$ then $x_{0}+x\in E_{n}$ and $x_{0}\in E_{n}$, so for every $T\in\mathcal{F}$
$$
\lVert Tx\rVert=\lVert T(x_{0}+x)-Tx_{0}\rVert\le\lVert T(x_{0}+x)\rVert+\lVert Tx_{0}\rVert\le 2n .
$$
Taking the supremum over $\lVert x\rVert<r$ and rescaling by $r$ gives $\lVert T\rVert\le2n/r$ for every $T\in\mathcal{F}$, a bound independent of $T$. That proves part 1.

Part 2: if $X$ is a Banach space then by Baire's theorem $X$ is nonmeager in itself, and the hypothesis says the set where the family is pointwise bounded is all of $X$; apply part 1 with $c=2n/r$. $\square$
:::

:::proof[Open mapping theorem]{provenance=adapted src="folland-1999:§5.3, proof of Thm 5.10, p. 162; kreyszig-1978:§4.12, proof of Lemma 4.12-3 and of Thm 4.12-2, pp. 287–289; reed-simon-1980:§III.5, the reductions and proof of Thm III.10, pp. 82–83"}
Write $B_{r}=\{x\in X:\lVert x\rVert<r\}$. By the reduction noted in the definition, it suffices to prove that $T(B_{1})$ contains a ball about $0$ in $Y$.

**Stage 1: a ball inside the closure.** Since every $x\in X$ lies in $B_{n}$ for $n$ large, $X=\bigcup_{n\ge1}B_{n}$, and **surjectivity** gives $Y=\bigcup_{n\ge1}T(B_{n})\subset\bigcup_{n\ge1}\overline{T(B_{n})}$. Each $\overline{T(B_{n})}$ is closed, and $Y$ is **complete**, so Baire's theorem says some $\overline{T(B_{n})}$ contains a ball. The dilation $y\mapsto y/n$ is a homeomorphism of $Y$ carrying $\overline{T(B_{n})}$ onto $\overline{T(B_{1})}$, so $\overline{T(B_{1})}$ contains a ball $B(y_{0};4\rho)$ for some $y_{0}\in Y$ and $\rho>0$.

Next remove the centre. Pick $\tilde y=T\tilde x\in T(B_{1})$ with $\lVert \tilde y-y_{0}\rVert<2\rho$, so that $B(\tilde y;2\rho)\subset B(y_{0};4\rho)\subset\overline{T(B_{1})}$. If $\lVert y\rVert<2\rho$ then $y+\tilde y\in\overline{T(B_{1})}$, so
$$
y=(y+\tilde y)-T\tilde x\in\overline{T(B_{1})}-T(B_{1})\subset\overline{T(B_{2})},
$$
using linearity and $\lVert \tilde x\rVert<1$. (The vectors $x_{1},x_{2},\dots$ of stage 2 below are unrelated to $\tilde x$.) Halving, we conclude: there is $\rho>0$ with
$$
\lVert y\rVert<\rho\ \Longrightarrow\ y\in\overline{T(B_{1})},
\qquad\text{hence, by dilation,}\qquad
\lVert y\rVert<\rho\,2^{-n}\ \Longrightarrow\ y\in\overline{T(B_{2^{-n}})} .
\tag{$\ast$}
$$

**Stage 2: removing the closure.** Let $\lVert y\rVert<\rho/2$. By $(\ast)$ with $n=1$, $y\in\overline{T(B_{1/2})}$, so there is $x_{1}\in B_{1/2}$ with $\lVert y-Tx_{1}\rVert<\rho/4$. By $(\ast)$ with $n=2$, the remainder $y-Tx_{1}$ lies in $\overline{T(B_{1/4})}$, so there is $x_{2}\in B_{1/4}$ with $\lVert y-Tx_{1}-Tx_{2}\rVert<\rho/8$. Continuing, we obtain $x_{k}\in B_{2^{-k}}$ with
$$
\Bigl\lVert y-\sum_{k\le n}Tx_{k}\Bigr\rVert<\rho\,2^{-n-1}\qquad(n=1,2,\dots).
$$
Since $\sum_{k}\lVert x_{k}\rVert<\sum_{k}2^{-k}=1$, the series $\sum_{k}x_{k}$ is absolutely convergent and therefore converges in the **complete** space $X$, to some $x$ with $\lVert x\rVert<1$. By continuity of $T$, $Tx=\lim_{n}\sum_{k\le n}Tx_{k}=y$. So $y\in T(B_{1})$.

Thus $T(B_{1})$ contains the ball of radius $\rho/2$ about $0$ in $Y$, and $T$ is open.

Finally, for a general open $A\subset X$ and $y=Tx\in T(A)$: $A$ contains a ball $B(x;r)$, so $r^{-1}(A-x)$ contains $B_{1}$, and by what was just proved $T(r^{-1}(A-x))=r^{-1}(T(A)-y)$ contains a ball about $0$; hence $T(A)$ contains a ball about $y$. As $y$ was arbitrary, $T(A)$ is open. $\square$
:::

:::proof[Bounded inverse, closed graph, Hellinger–Toeplitz]{provenance=adapted src="kreyszig-1978:§4.12, Thm 4.12-2, p. 289, and §4.13, proof of Thm 4.13-2, pp. 292–293; folland-1999:§5.3, Cor. 5.11 and proof of Thm 5.12, pp. 162–163; reed-simon-1980:§III.5, Thms III.11 and III.12, p. 83, and the Corollary on p. 86"}
**Bounded inverse (part 2).** Let $T$ be a bounded bijection. For open $A\subset X$, the preimage of $A$ under $T^{-1}$ is $T(A)$, which is open by part 1; so $T^{-1}$ is continuous, and being linear (the inverse of a linear bijection is linear) it is bounded.

**Equivalence of norms (part 3).** Let $X_{1}=(X,\lVert\cdot\rVert_{1})$ and $X_{2}=(X,\lVert\cdot\rVert_{2})$, both complete. The identity $\iota\colon X_{1}\to X_{2}$ is a linear bijection, and bounded because $\lVert x\rVert_{2}\le C\lVert x\rVert_{1}$. By part 2 its inverse is bounded: $\lVert x\rVert_{1}\le C'\lVert x\rVert_{2}$, which is the stated two-sided bound with $a=1/C'$.

**Closed graph (part 4).** Suppose $\mathcal{D}(T)$ is closed in $X$ and $T$ is closed. First, $X\times Y$ with $\lVert(x,y)\rVert=\lVert x\rVert+\lVert y\rVert$ is complete: a Cauchy sequence $(x_{n},y_{n})$ has both coordinates Cauchy, hence convergent, hence converges in the product norm. Now $\Gamma(T)$ is a closed subspace of a Banach space, so is itself a Banach space, and $\mathcal{D}(T)$ is a closed subspace of $X$, so is a Banach space too. Consider
$$
P\colon \Gamma(T)\to\mathcal{D}(T),\qquad P(x,Tx)=x .
$$
$P$ is linear, bijective (its inverse is $x\mapsto(x,Tx)$), and bounded, since $\lVert P(x,Tx)\rVert=\lVert x\rVert\le\lVert x\rVert+\lVert Tx\rVert=\lVert(x,Tx)\rVert$. By part 2, $P^{-1}$ is bounded: there is $b$ with $\lVert x\rVert+\lVert Tx\rVert\le b\lVert x\rVert$ for all $x\in\mathcal{D}(T)$. In particular $\lVert Tx\rVert\le b\lVert x\rVert$, so $T$ is bounded. The converse is immediate: if $T$ is bounded with closed domain and $x_{n}\to x$, $Tx_{n}\to y$ with $x_{n}\in\mathcal{D}(T)$, then $x\in\mathcal{D}(T)$ by closedness of the domain and $Tx_{n}\to Tx$ by continuity, so $y=Tx$.

**Hellinger–Toeplitz (part 5).** We follow Reed and Simon and show that $\Gamma(A)$ is closed; since $\mathcal{D}(A)=H$ is closed, part 4 then gives boundedness. Let $x_{n}\to x$ and $Ax_{n}\to y$. For any $z\in H$,
$$
(z,y)=\lim_{n}(z,Ax_{n})=\lim_{n}(Az,x_{n})=(Az,x)=(z,Ax),
$$
where the first equality is continuity of the inner product in its second slot (applied to $Ax_{n}\to y$), the second is the symmetry hypothesis, the third is continuity of the inner product again (now applied to $x_{n}\to x$), and the fourth is symmetry once more. Hence $(z,y-Ax)=0$ for every $z$, so $y=Ax$ and $(x,y)\in\Gamma(A)$. $\square$
:::

:::remark[Where completeness is used, and what fails without it]{provenance=adapted src="kreyszig-1978:§4.7, Application 4.7-4, pp. 250–251, §4.12, Problem 5, p. 290, and §4.13, Example 4.13-4 with the comment that follows it, pp. 294; folland-1999:§5.3, the remark before Exercise 27 and Exercises 29–31, pp. 163–164; reed-simon-1980:§III.5, the emphasis after Thm III.12, p. 83"}
- **Uniform boundedness needs $X$ complete, not $Y$.** Completeness enters only once, to make $X$ nonmeager in itself. Kreyszig turns this into a test for incompleteness: on the space of polynomials with $\lVert x\rVert=\max_{i}\lvert a_{i}\rvert$ (the largest coefficient), let $f_{n}(x)=a_{0}+a_{1}+\dots+a_{n-1}$ be the sum of the first $n$ coefficients. Each $f_{n}$ is a bounded functional with $\lVert f_{n}\rVert\le n$, and for a fixed polynomial of degree $N$ the values $\lvert f_{n}(x)\rvert\le(N+1)\max_{i}\lvert a_{i}\rvert$ are bounded in $n$ — so the family is pointwise bounded. But $x(t)=1+t+\dots+t^{n-1}$ has norm $1$ and $f_{n}(x)=n$, so $\lVert f_{n}\rVert\ge n$ and the norms are unbounded. The only hypothesis available to fail is completeness, so this space is not a Banach space.
- **Folland's part 1 is genuinely stronger.** It asks only that the pointwise bound hold on a nonmeager set, not on all of $X$, and it does not mention completeness at all. The gain is real: a set can be nonmeager and still small in other senses, and in applications one often controls a family only on a dense or generic set.
- **The open mapping theorem needs both spaces complete, and surjectivity.** Completeness of $Y$ licenses Baire in stage 1; completeness of $X$ makes the absolutely convergent series of stage 2 converge. Drop either and the theorem fails, and Folland supplies one counterexample for each side. For an incomplete *target*, his Exercise 29 takes $\mathcal{Y}=\ell^{1}$ and the incomplete dense subspace $X=\{f:\sum n\lvert f(n)\rvert<\infty\}$ with the $\ell^{1}$ norm; the map $S=T^{-1}$, where $Tf(n)=nf(n)$, is bounded from $\mathcal{Y}$ onto $X$ but not open. For an incomplete *domain*, his Exercise 31 takes Banach spaces $X,\mathcal{Y}$ and an unbounded linear $S\colon X\to\mathcal{Y}$; the graph $\Gamma(S)$ is then not complete, and the projection $\Gamma(S)\to X$, $(x,Sx)\mapsto x$, is bounded and onto the Banach space $X$ but not open. Surjectivity cannot be dropped either: the inclusion of $\ell^{1}$ into $\ell^{2}$ is bounded and injective between Banach spaces but not onto, and its inverse on the range is unbounded.
- **The closed graph theorem needs the domain closed, and that is exactly what fails in the examples one cares about.** Kreyszig's Example 4.13-4: on $X=C[0,1]$ let $Tx=x'$ with $\mathcal{D}(T)$ the continuously differentiable functions. $T$ is closed — if $x_{n}\to x$ and $x_{n}'\to y$ uniformly, then integrating $x_{n}'$ and passing to the limit gives $x(t)=x(0)+\int_{0}^{t}y$, so $x$ is differentiable with $x'=y$ — but $T$ is unbounded, as $x_{n}(t)=t^{n}$ shows, with $\lVert x_{n}\rVert=1$ and $\lVert x_{n}'\rVert=n$. The theorem is not contradicted: $\mathcal{D}(T)$ is a dense but **not closed** subspace of $C[0,1]$. Kreyszig draws the moral explicitly — were the domain closed, the operator would have to be bounded.
- **Closed and bounded are independent conditions.** Closedness does not give boundedness (previous bullet) and boundedness does not give closedness unless the domain is closed (restrict a bounded operator to a non-closed dense subspace). Reed and Simon stress that in their closed graph theorem $T$ is defined on all of $X$, precisely because the unbounded operators of :ref[]{to=funcan.unbounded-operators} are closed operators on proper dense domains.
- **Hellinger–Toeplitz is a theorem about domains, read backwards.** Part 5 says a symmetric operator defined everywhere on a Hilbert space is bounded. Contrapositively, an unbounded symmetric operator *cannot* be defined on all of $H$; it must live on a proper dense domain. Reed and Simon call this the cause of much technical pain, since the energy, position and momentum operators of quantum mechanics are all unbounded and symmetric, and even defining $A+B$ or $AB$ requires care about $\mathcal{D}(A)\cap\mathcal{D}(B)$ — which can be $\{0\}$ even for two dense domains.
:::

:::method[Using the three theorems]{provenance=original}
1. **To upgrade pointwise bounds to a uniform bound**, check that the domain space is complete and that each member of the family is individually bounded, then apply uniform boundedness. Typical uses: a sequence of approximation operators converges on a dense set and is pointwise bounded, so it converges everywhere; a weakly convergent sequence is bounded; a separately continuous bilinear form is jointly continuous (Reed and Simon's corollary).
2. **To prove that something cannot work**, run uniform boundedness backwards. Compute or bound $\lVert T_{n}\rVert$ from below, show the bound diverges, and conclude that some single input breaks the scheme. The input is not constructed — this is a pure existence argument — but the conclusion is definitive.
3. **To prove an inverse is bounded**, do not estimate it. Check that both spaces are complete and that the operator is a bounded bijection, and invoke the bounded inverse theorem. This is how one knows the resolvent $(A-\eta I)^{-1}$ of a bounded operator is bounded for $\eta$ in the resolvent set (:ref[]{to=funcan.spectrum}). Evans draws that conclusion from the Closed Graph Theorem instead (Appendix D.3, p. 677), which by part 4 comes to the same thing; parts 1, 2 and 4 are equivalent.
4. **To prove an everywhere-defined operator is bounded**, use the closed graph theorem instead of an estimate. Folland's phrasing of the saving: to show $Tx_{n}\to Tx$ whenever $x_{n}\to x$, you are allowed to *assume* that $Tx_{n}$ converges to something and need only identify the limit. That is usually much easier, because the limit can be identified by testing against a dense set or by an integral identity.
5. **To compare two norms on the same space**, if both are complete and one dominates the other, they are equivalent. There is no need to produce the reverse constant.
:::

:::example[Why high-order Newton–Cotes quadrature fails, with the constants computed]{provenance=original}
A quadrature rule on $[0,1]$ using $n$ nodes is a linear functional
$$
Q_{n}(f)=\sum_{k=0}^{n-1}w_{k}^{(n)}f(x_{k}^{(n)})
$$
on the Banach space $C[0,1]$ with the supremum norm. Its norm is
$$
\lVert Q_{n}\rVert=\sum_{k=0}^{n-1}\bigl\lvert w_{k}^{(n)}\bigr\rvert ,
$$
since $\lvert Q_{n}(f)\rvert\le\lVert f\rVert\sum_{k}\lvert w_{k}\rvert$ always, and a continuous $f$ of norm $1$ can be chosen to equal $\operatorname{sign}w_{k}$ at each node (finitely many points, so interpolate linearly between them), giving equality.

**The rule.** Take the **closed Newton–Cotes** rule: equally spaced nodes $x_{k}=k/(n-1)$, and weights obtained by integrating the Lagrange interpolation basis, $w_{k}=\int_{0}^{1}\prod_{j\ne k}\frac{x-x_{j}}{x_{k}-x_{j}}\mathrm{d}x$. By construction $Q_{n}(p)=\int_{0}^{1}p$ for every polynomial $p$ of degree at most $n-1$, and in particular $\sum_{k}w_{k}=Q_{n}(1)=1$ for every $n$.

**The weights eventually change sign.** For $n\le8$ and for $n=10$ all the weights are positive, so $\lVert Q_{n}\rVert=\sum_{k}w_{k}=1$. At $n=9$ a weight goes negative and $\lVert Q_{9}\rVert=6857/4725=1.451217$. At $n=11$ the weights are
$$
\frac{1}{598752}\bigl(16067,\;106300,\;-48525,\;272400,\;-260550,\;427368,\;-260550,\;272400,\;-48525,\;106300,\;16067\bigr),
$$
which sum to $1$ as they must, while their absolute values sum to
$$
\lVert Q_{11}\rVert=\frac{152921}{49896}=3.0647948 .
$$
Continuing: $\lVert Q_{13}\rVert=7.5317$, $\lVert Q_{15}\rVert=20.344$, $\lVert Q_{21}\rVert=544.18$, $\lVert Q_{31}\rVert=2.1196\times10^{5}$. The growth is geometric, and $\sup_{n}\lVert Q_{n}\rVert=\infty$.

**The conclusion from uniform boundedness.** $C[0,1]$ is a Banach space and each $Q_{n}$ is a bounded functional, so the contrapositive of part 2 of the uniform boundedness theorem applies: since $\sup_{n}\lVert Q_{n}\rVert=\infty$, the family cannot be pointwise bounded. **There exists a continuous function $f$ on $[0,1]$ with $\sup_{n}\lvert Q_{n}(f)\rvert=\infty$** — for which the Newton–Cotes approximations do not merely fail to converge to $\int_{0}^{1}f$, they blow up. No such $f$ is exhibited; the theorem asserts existence only.

**The positive half of the statement, for contrast.** Suppose instead a family of rules has $\sup_{n}\lVert Q_{n}\rVert=M<\infty$ and $Q_{n}(p)\to\int_{0}^{1}p$ for every polynomial $p$. Given $f\in C[0,1]$ and $\varepsilon>0$, the Weierstrass approximation theorem — the polynomials are dense in $C[0,1]$ for the supremum norm, proved in :ref[]{to=fourier.fejer-theorem} — supplies a polynomial $p$ with $\lVert f-p\rVert<\varepsilon$, and then
$$
\Bigl\lvert Q_{n}(f)-\int_{0}^{1}f\Bigr\rvert
\le\lVert Q_{n}\rVert\,\lVert f-p\rVert+\Bigl\lvert Q_{n}(p)-\int_{0}^{1}p\Bigr\rvert+\Bigl\lvert\int_{0}^{1}(p-f)\Bigr\rvert
\le (M+1)\varepsilon+\Bigl\lvert Q_{n}(p)-\int_{0}^{1}p\Bigr\rvert ,
$$
and the last term tends to $0$. So convergence on a dense set plus a uniform norm bound gives convergence everywhere. Gaussian quadrature has all weights positive, hence $\lVert Q_{n}\rVert=1$ for every $n$, and therefore converges for every continuous integrand; that, and not the order of exactness, is the structural reason it is preferred (:ref[]{to=num.quadrature}).

**Checking the numbers.** Two arithmetic checks are available at every $n$, from exactness on $f\equiv1$ and on $f(x)=x$: the weights must sum to $1$, and $\sum_{k}w_{k}x_{k}$ must equal $\tfrac12$. For $n=11$ the displayed numerators sum to $598752$, giving $\sum_{k}w_{k}=1$; and weighting the $k$th numerator by $k$ gives $2993760$, so $\sum_{k}w_{k}x_{k}=2993760/(10\cdot598752)=\tfrac12$ exactly. A third check ties the norm to the sign pattern: since the weights sum to $1$, the norm exceeds $1$ by twice the total size of the negative weights,
$$
\lVert Q_{11}\rVert-1=\frac{2\,(48525+260550+260550+48525)}{598752}=\frac{1236300}{598752}=2.0647948 ,
$$
which matches $152921/49896-1$. It is this cancellation between large weights of opposite sign that destroys the rule: the exact integral of a polynomial survives it, but an arbitrary continuous function does not.
:::

:::application{provenance=original}
**Divergent Fourier series of a continuous function.** The oldest application of uniform boundedness is Kreyszig's 4.7-5. On the Banach space of continuous $2\pi$-periodic functions, let $f_{n}$ be the functional sending $x$ to the value its Fourier partial sum of order $n$ takes at the origin. Writing the partial sum as an integral against the Dirichlet kernel shows that $\lVert f_{n}\rVert$ is the Lebesgue constant $\tfrac{1}{2\pi}\int_{0}^{2\pi}\lvert q_{n}\rvert$, with $q_{n}(t)=\sin\bigl((n+\tfrac12)t\bigr)/\sin(t/2)$, and bounding $\lvert\sin(t/2)\rvert\le t/2$ turns this into a multiple of a partial sum of the harmonic series, which diverges. Uniform boundedness therefore produces a periodic continuous function at whose origin the Fourier series fails to converge. The structure is identical to the quadrature example: a dense set of good inputs (trigonometric polynomials, there; polynomials, here) plus unbounded norms forces a bad input to exist. This is the negative half of the convergence theory in :ref[]{to=fourier.dirichlet-convergence}, and the reason the positive results there need a smoothness hypothesis, or a summation method as in :ref[]{to=fourier.fejer-theorem}.

**Numerical analysis: stability is a norm bound.** The pattern "consistency on a dense set plus uniform stability implies convergence" is the Lax equivalence principle, and the uniform boundedness theorem is what makes the stability hypothesis unavoidable rather than merely convenient: if a family of discretisation operators is not uniformly bounded, some data must break it. The quadrature example is the simplest instance; the same argument governs interpolation at a fixed node family (Lebesgue constants again, :ref[]{to=num.interpolation}) and finite-difference schemes (:ref[]{to=num.von-neumann-stability}).

**Quantum mechanics: unbounded observables need domains.** Hellinger–Toeplitz is the reason the mathematical framework of quantum mechanics is more delicate than the finite-dimensional analogy suggests. Position, momentum and energy are symmetric and unbounded, so part 5 forbids them from being defined on the whole Hilbert space; every one of them carries a dense domain, and the physics of self-adjointness — whether an operator has a unique self-adjoint extension, and hence a well-defined time evolution — is a question about those domains (:ref[]{to=funcan.unbounded-operators}, :ref[]{to=funcan.symmetric-self-adjoint}, :ref[]{to=funcan.quantum-mechanics-framework}). Part 5 also supplies half of the reason the canonical commutation relation $[x,p]=\mathrm{i}\hbar I$ cannot hold with both operators defined on all of $H$. Hellinger–Toeplitz is the first half: $x$ and $p$ are symmetric, so everywhere-defined versions of them would be **bounded**. The second half is a purely algebraic fact about bounded operators, which Hellinger–Toeplitz does not give and which is worth separating out. If $A$ and $B$ are bounded with $[A,B]=cI$ and $c\ne0$, rescale so that $c=1$; then induction on $n$, using $[A,B^{n+1}]=[A,B^{n}]B+B^{n}[A,B]$, gives $[A,B^{n}]=nB^{n-1}$, whence
$$
n\lVert B^{n-1}\rVert=\lVert AB^{n}-B^{n}A\rVert\le2\lVert A\rVert\,\lVert B\rVert\,\lVert B^{n-1}\rVert .
$$
If no power of $B$ vanishes this forces $n\le2\lVert A\rVert\lVert B\rVert$ for every $n$, which is false; and if $B^{m}=0$ for a smallest $m\ge1$, then $mB^{m-1}=[A,B^{m}]=AB^{m}-B^{m}A=0$ gives $B^{m-1}=0$, which contradicts the minimality of $m$ when $m\ge2$ and reads $I=B^{0}=0$ when $m=1$ — false either way. No bounded pair satisfies the relation. Putting the two halves together: $x$ and $p$ must live on proper dense domains, and $[x,p]=\mathrm{i}\hbar I$ can hold only on a subspace where both sides make sense. (The trace argument familiar from finite dimensions — take traces of $[x,p]=\mathrm{i}\hbar I$ and get $0=\mathrm{i}\hbar\dim H$ — is unavailable here, because in infinite dimensions $I$ is not trace class and neither side need have a trace.)

**Weak boundedness and weak convergence.** A weakly convergent sequence in a normed space is bounded, and a weakly bounded set is strongly bounded. Both follow by applying uniform boundedness to the family of functionals $\hat x(\Lambda)=\Lambda(x)$ on the Banach space $X^{*}$: pointwise boundedness is weak boundedness, and the uniform conclusion is a norm bound. This is used without comment throughout :ref[]{to=funcan.weak-convergence} and in the direct method for variational problems, where a minimising sequence is first shown to be bounded and then has a weakly convergent subsequence extracted.

**Equivalence of complete norms, and why Sobolev norms are unambiguous.** Part 3 says a vector space carries at most one complete norm topology up to equivalence once one norm dominates another. In practice this removes a whole class of worries: two natural definitions of the same function space, each complete, with an obvious inequality one way, are automatically equivalent, and no constant need be chased in the other direction. This is the standard argument behind the equivalence of the various norms on Sobolev spaces (:ref[]{to=pde.weak-solutions-sobolev}) and of the graph norm with the original norm for a bounded operator.
:::
