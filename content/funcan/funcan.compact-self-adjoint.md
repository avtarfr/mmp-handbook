---
id: funcan.compact-self-adjoint
title: Spectral theorem for compact self-adjoint operators
kind: theorem
level: core
summary: "A compact self-adjoint operator has real eigenvalues of finite multiplicity that can only accumulate at zero, the largest in modulus equals the operator norm and is reached by maximising the Rayleigh quotient, and the eigenvectors form an orthonormal basis in which the operator is diagonal — the infinite-dimensional replacement for diagonalising a Hermitian matrix, and the reason a self-adjoint boundary-value problem has a complete set of normal modes."
prereqs: [funcan.compact-operators, funcan.adjoint-operators, funcan.orthonormal-bases, funcan.spectrum, funcan.projection-theorem]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§6.3, pp. 371–377: the opening paragraph recalling that a bounded self-adjoint operator need not have eigenvalues at all; Theorem 6.3.1 (the extremal principle: $\\sup_{\\lVert v\\rVert=1}\\lvert(Kv,v)\\rvert$ is attained at a normalised eigenfunction, $\\lvert\\lambda_{1}\\rvert=\\lVert K\\rVert$, and $\\lVert Kv\\rVert\\le\\lvert\\lambda_{1}\\rvert\\lVert v\\rVert$); Theorems 6.3.2 and 6.3.3 (the same principle on the orthogonal complement of the eigenfunctions already found, with (6.3.3) and (6.3.5)); the two possible outcomes of the succession of maximum principles and the separable case (6.3.8)–(6.3.9), p. 372; the proof that $\\lambda_{n}\\to0$, p. 373; Theorem 6.3.4 (expansion theorem) with (6.3.10)–(6.3.11); the argument that the extremal principles produce every nonzero eigenvalue, p. 374; Theorem 6.3.5 and the decomposition (6.3.12); Theorem 6.3.6 (the eigenfunctions of a self-adjoint boundary-value problem are an orthonormal basis), pp. 374–375; the definite and indefinite cases, (6.3.14)–(6.3.15), pp. 375–376"
    pages: "371-377"
    role: the extremal principle and its iteration, which is the proof route followed here; the dichotomy between finitely and infinitely many nonzero eigenvalues; the expansion theorem and the decomposition of an arbitrary vector; the reduction of a self-adjoint boundary-value problem to this theorem; the restatement of the extremal principles for a definite operator
  - work: reed-simon-1980
    loc: "§VI.5, p. 201: multiplication by the coordinate on $L^{2}[0,2]$, the standard non-compact operator for which the Fredholm alternative fails; p. 203: Theorem VI.15 (the Riesz–Schauder theorem: for compact $A$ the spectrum is discrete with no limit point except possibly $0$, and every nonzero spectral value is an eigenvalue of finite multiplicity); Theorem VI.16 (the Hilbert–Schmidt theorem: a compact self-adjoint operator has a complete orthonormal basis of eigenvectors with $\\lambda_{n}\\to0$) with its proof by restriction to the orthogonal complement of the closed span; Theorem VI.17 (canonical form $A=\\sum_{n}\\lambda_{n}(\\psi_{n},\\cdot)\\varphi_{n}$, written in their convention of an inner product conjugate-linear in the first slot) and the singular values, pp. 203–204"
    pages: "201, 203-204"
    role: the clean statement that nonzero spectrum equals point spectrum, the completeness proof by restricting to the orthogonal complement, and the extension to non-self-adjoint compact operators through singular values
  - work: evans-2010
    loc: "Appendix D.5, Theorem 6 (the spectrum of a compact operator: $0\\in\\sigma(K)$, every nonzero spectral value is an eigenvalue, and the eigenvalues can only accumulate at $0$) with its proof, p. 682; Appendix D.6, the Lemma bounding the spectrum of a bounded symmetric operator by $m=\\inf_{\\lVert u\\rVert=1}(Su,u)$ and $M=\\sup_{\\lVert u\\rVert=1}(Su,u)$ and placing both in the spectrum, p. 683; Theorem 7 (a compact symmetric operator on a separable Hilbert space has a countable orthonormal basis of eigenvectors) with its proof, pp. 683–684"
    pages: "682-684"
    role: the proof that the nonzero spectrum consists of isolated eigenvalues; the bound of the spectrum by the numerical range; the completeness proof by showing the restriction to the orthogonal complement of the eigenspaces has zero numerical range and hence vanishes
  - work: hassani-2013
    loc: "§17.5.1, Theorem 17.5.11 (the spectrum of a compact operator on an infinite-dimensional Hilbert space), p. 527; §17.6.1, pp. 529–531: Lemma 17.6.3 ($\\lVert H\\rVert=\\max\\{\\lvert\\langle Hx\\mid x\\rangle\\rvert:\\lVert x\\rVert=1\\}$ for bounded Hermitian $H$); Lemma 17.6.4 (a compact Hermitian operator has an eigenvalue of modulus $\\lVert K\\rVert$) with its full proof; the construction of the spectral decomposition on the orthogonal complement of the eigenspaces found so far, p. 530; Theorem 17.6.5 (Spectral Theorem for compact Hermitian operators) in projection form, with the norm estimate $\\lVert K-\\sum_{j\\le m}\\lambda_{j}P_{j}\\rVert=\\lvert\\lambda_{m+1}\\rvert$; Corollary 17.6.6"
    pages: "527, 529-531"
    role: the proof that an eigenvalue of modulus $\\lVert K\\rVert$ exists, which is the engine of the whole theorem; the projection form of the conclusion and the exact rate at which the spectral series converges in operator norm
  - work: kreyszig-1978
    loc: "§8.3, Theorem 8.3-1 (the set of eigenvalues of a compact operator on a normed space is countable and can accumulate only at $0$) with its proof by Riesz's lemma, pp. 420–422; the summary of §§8.3–8.4 on p. 420, including that for $\\lambda\\ne0$ every eigenspace is finite-dimensional and that $0\\in\\sigma(T)$ when $\\dim X=\\infty$"
    pages: "420-422"
    role: the statement, for a normed space and without self-adjointness, that the eigenvalues are countable with no accumulation away from the origin
---

:::definition[The setting]{provenance=adapted src="stakgold-holst-2011:§6.3, p. 371; reed-simon-1980:§VI.5, Thm VI.16, p. 203; hassani-2013:§17.6.1, p. 529"}
Let $H$ be a Hilbert space over $\mathbb{C}$ with inner product $(u,v)$, linear in the first slot, and let
$$
A\colon H\to H
$$
be **compact** (:ref[]{to=funcan.compact-operators}) and **self-adjoint**, $A^{*}=A$, equivalently $(Au,v)=(u,Av)$ for all $u,v\in H$ (:ref[]{to=funcan.adjoint-operators}). Hassani and other physics texts say *Hermitian* and write $K^{\dagger}=K$; Evans, working over $\mathbb{R}$, says *symmetric*. We assume $A\ne0$, since the zero operator is a degenerate case of every statement below.

A scalar $\lambda$ is an **eigenvalue** with **eigenvector** $e\ne0$ if $Ae=\lambda e$; the **eigenspace** is $N_{\lambda}=\ker(A-\lambda I)$ and its dimension is the **multiplicity** of $\lambda$. (The letter $M$ is reserved below for spans of eigenvectors: $M_{n}=\operatorname{span}\{e_{1},\dots,e_{n}\}$, with $M_{n}^{\perp}$ its orthogonal complement.) The **numerical range** of $A$ is the set of values $(Au,u)$ for unit vectors $u$; because $A$ is self-adjoint these are all real, since $(Au,u)=(u,Au)=\overline{(Au,u)}$. The quantity
$$
R(u)=\frac{(Au,u)}{(u,u)},\qquad u\ne0,
$$
is the **Rayleigh quotient**.

The spectrum $\sigma(A)$, the resolvent set and the distinction between point, continuous and residual spectrum are those of :ref[]{to=funcan.spectrum}.
:::

:::statement[Spectral theorem for compact self-adjoint operators]{provenance=adapted src="stakgold-holst-2011:§6.3, Thms 6.3.1–6.3.5 and (6.3.6)–(6.3.12), pp. 371–374; reed-simon-1980:§VI.5, Thms VI.15 and VI.16, p. 203; evans-2010:Appendix D.5, Thm 6, p. 682, and Appendix D.6, Thm 7, pp. 683–684; hassani-2013:§17.5.1, Thm 17.5.11, p. 527, and §17.6.1, Lemma 17.6.4, Thm 17.6.5 and Cor. 17.6.6, pp. 529–531; kreyszig-1978:§8.3, Thm 8.3-1, p. 421"}
Let $A\ne0$ be compact and self-adjoint on a Hilbert space $H$.

1. **An eigenvalue of maximal size exists, and the Rayleigh quotient finds it.** The supremum
   $$
   \sup_{\lVert v\rVert=1}\lvert(Av,v)\rvert \;=\; \lVert A\rVert
   $$
   is **attained**, at a unit vector $e_{1}$ which is an eigenvector: $Ae_{1}=\lambda_{1}e_{1}$ with $\lvert\lambda_{1}\rvert=\lVert A\rVert>0$. No eigenvalue exceeds $\lvert\lambda_{1}\rvert$ in modulus, and $\lVert Av\rVert\le\lvert\lambda_{1}\rvert\lVert v\rVert$ for every $v$.
2. **Successive extremal principles.** Having found orthonormal eigenvectors $e_{1},\dots,e_{n}$ with eigenvalues $\lambda_{1},\dots,\lambda_{n}$, write $M_{n}=\operatorname{span}\{e_{1},\dots,e_{n}\}$ and let $M_{n}^{\perp}$ be its orthogonal complement, the set of vectors orthogonal to all of them. Then the supremum of $\lvert(Av,v)\rvert$ over unit vectors of $M_{n}^{\perp}$ is attained at a unit eigenvector $e_{n+1}\in M_{n}^{\perp}$, with eigenvalue $\lambda_{n+1}$ satisfying $\lvert\lambda_{n+1}\rvert\le\lvert\lambda_{n}\rvert$, and
   $$
   \lVert Av\rVert\le\lvert\lambda_{n+1}\rvert\,\lVert v\rVert
   \qquad\text{for every }v\in M_{n}^{\perp}.
   $$
   Exactly one of two things happens. Either the supremum is $0$ at some finite stage $n+1$, in which case $A$ has precisely $n$ nonzero eigenvalues counted with multiplicity and $A$ has finite rank; or the process never stops and produces an infinite sequence
   $$
   \lvert\lambda_{1}\rvert\ge\lvert\lambda_{2}\rvert\ge\cdots>0,\qquad \lambda_{n}\to0 .
   $$
3. **Structure of the spectrum.** Every eigenvalue is real. Eigenvectors belonging to different eigenvalues are orthogonal. Every nonzero eigenvalue has finite multiplicity, and the nonzero eigenvalues are countable in number with $0$ as their only possible accumulation point. Moreover $\sigma(A)\setminus\{0\}$ consists of eigenvalues only, and if $\dim H=\infty$ then $0\in\sigma(A)$ (though $0$ need not be an eigenvalue). Those last two sentences — finite multiplicity, countability and accumulation only at $0$, and the identification of the nonzero spectrum with the eigenvalues — hold for every compact operator, self-adjoint or not: they are the Riesz–Schauder theorem. Self-adjointness is what adds the final clause: **the list produced in part 2 contains every nonzero eigenvalue.** That fails without it, as the Volterra operator of the remark below shows: it is compact and has no eigenvalues at all, so part 2 has nothing to produce.
4. **Expansion theorem.** With $\{e_{n}\}$ the orthonormal eigenvectors belonging to the nonzero eigenvalues,
   $$
   Au \;=\; \sum_{n}\lambda_{n}\,(u,e_{n})\,e_{n}
   \qquad\text{for every }u\in H ,
   $$
   the series converging in $H$. Hence $\{e_{n}\}$ is an orthonormal basis of $\overline{\operatorname{ran}A}$, and every $u\in H$ splits in exactly one way as
   $$
   u \;=\; h+\sum_{n}(u,e_{n})\,e_{n},\qquad Ah=0 ,
   $$
   with $h$ the orthogonal projection of $u$ on $\ker A$. The family $\{e_{n}\}$ is an orthonormal basis of all of $H$ if and only if $\ker A=\{0\}$.
5. **Diagonalisation.** Adjoining an orthonormal basis of $\ker A$ to $\{e_{n}\}$ gives an orthonormal basis of $H$ consisting entirely of eigenvectors of $A$; it is countable when $H$ is separable. In projection form, with $\lambda_{1},\lambda_{2},\dots$ now the *distinct* nonzero eigenvalues in decreasing order of modulus and $P_{j}$ the orthogonal projection onto the eigenspace of $\lambda_{j}$,
   $$
   A=\sum_{j}\lambda_{j}P_{j},
   \qquad
   P_{i}P_{j}=0\ (i\ne j),
   \qquad
   \Bigl\lVert A-\sum_{j\le m}\lambda_{j}P_{j}\Bigr\rVert=\lvert\lambda_{m+1}\rvert
   \qquad (m=0,1,2,\dots),
   $$
   so the series converges in operator norm at a rate given exactly by the first discarded eigenvalue. Hassani states this last identity for the case of infinitely many distinct nonzero eigenvalues (Theorem 17.6.5(2), p. 531), where $\lambda_{m+1}$ always exists. If instead there are only $N$ distinct nonzero eigenvalues, the sum is finite and exact at $m=N$, and the identity continues to hold for $m\ge N$ under the convention $\lambda_{m+1}=0$.
:::

:::idea{provenance=original}
A Hermitian matrix is diagonalised by repeatedly maximising the Rayleigh quotient: the maximum over all unit vectors is the largest eigenvalue, the maximum over the vectors orthogonal to the first eigenvector is the next, and so on. In infinite dimensions the step that can fail is the very first one — a supremum over the unit sphere need not be attained, because the unit sphere is not compact. Self-adjointness gives $\lVert A\rVert=\sup_{\lVert v\rVert=1}\lvert(Av,v)\rvert$, so a maximising sequence of unit vectors is at hand; compactness then supplies a convergent subsequence of its *images*, which is just enough to produce an actual maximiser and hence an actual eigenvector. Everything else is bookkeeping: $A$ maps the orthogonal complement of an eigenvector into itself (this uses self-adjointness again), so the argument repeats there, and the resulting eigenvalues cannot fail to tend to zero, since otherwise the rescaled eigenvectors $e_{n}/\lambda_{n}$ — the $e_{n}$ themselves are the normalised ones — would be a bounded sequence whose images $e_{n}$ are mutually at distance $\sqrt2$ — impossible for a compact operator. The expansion theorem is then the statement that what is left after removing all the eigenvectors is annihilated, which the extremal bound $\lVert Av\rVert\le\lvert\lambda_{n+1}\rvert\lVert v\rVert$ delivers in the limit.
:::

:::proof[Part 1: the extremal principle]{provenance=adapted src="hassani-2013:§17.6.1, Lemmas 17.6.3 and 17.6.4 with the proof of 17.6.4, pp. 529–530; stakgold-holst-2011:§6.3, Thm 6.3.1, p. 371; evans-2010:Appendix D.6, the Lemma on bounds for the spectrum, p. 683"}
Write $M=\sup_{\lVert v\rVert=1}\lvert(Av,v)\rvert$.

**Step 1: $M=\lVert A\rVert$.** One inequality is immediate from Cauchy–Schwarz: $\lvert(Av,v)\rvert\le\lVert Av\rVert\lVert v\rVert\le\lVert A\rVert$ for unit $v$, so $M\le\lVert A\rVert$. For the reverse — this is Hassani's Lemma 17.6.3, whose proof he leaves as an exercise, so we give one — note first that $\lvert(Au,u)\rvert\le M\lVert u\rVert^{2}$ for every $u$, by homogeneity. Self-adjointness makes the polarisation identity real:
$$
(A(u+w),u+w)-(A(u-w),u-w)=2(Au,w)+2(Aw,u)=4\,\mathrm{Re}\,(Au,w) .
$$
Hence, by the triangle inequality and the parallelogram law,
$$
4\,\lvert\mathrm{Re}\,(Au,w)\rvert \le M\bigl(\lVert u+w\rVert^{2}+\lVert u-w\rVert^{2}\bigr)=2M\bigl(\lVert u\rVert^{2}+\lVert w\rVert^{2}\bigr).
$$
Take $\lVert u\rVert=1$ and $w=Au/\lVert Au\rVert$ (assuming $Au\ne0$); then $\mathrm{Re}\,(Au,w)=\lVert Au\rVert$ and the right-hand side is $4M$, so $\lVert Au\rVert\le M$. Taking the supremum over unit $u$ gives $\lVert A\rVert\le M$. **Here self-adjointness is used in an essential way**: without it the cross terms do not combine into a real quantity and the identity $\lVert A\rVert=M$ is false.

**Step 2: the supremum is attained, at an eigenvector.** We follow Hassani's proof of his Lemma 17.6.4. By step 1 there are unit vectors $x_{n}$ with $(Ax_{n},x_{n})\to\lambda$, where $\lambda$ is real with $\lvert\lambda\rvert=\lVert A\rVert$ (pass to a subsequence so that the real numbers $(Ax_{n},x_{n})$, which lie in $[-\lVert A\rVert,\lVert A\rVert]$, converge to an endpoint of maximal modulus). Since $A$ is **compact** and $(x_{n})$ is bounded, we may pass to a further subsequence along which $Ax_{n}\to y$ in norm. Now expand
$$
0\le\lVert Ax_{n}-\lambda x_{n}\rVert^{2}
=\lVert Ax_{n}\rVert^{2}-2\lambda\,(Ax_{n},x_{n})+\lambda^{2} ,
$$
using $\lambda$ real and $\lVert x_{n}\rVert=1$. Letting $n\to\infty$ gives $0\le\lVert y\rVert^{2}-2\lambda^{2}+\lambda^{2}$, that is $\lVert y\rVert^{2}\ge\lambda^{2}=\lVert A\rVert^{2}$. On the other hand $\lVert y\rVert=\lim\lVert Ax_{n}\rVert\le\lVert A\rVert$. So $\lVert y\rVert=\lvert\lambda\rvert=\lVert A\rVert\ne0$, and the displayed expression tends to $0$: $Ax_{n}-\lambda x_{n}\to0$. Since $Ax_{n}\to y$ and $\lambda\ne0$, this forces $x_{n}\to y/\lambda$. Put $e_{1}=y/\lambda$, a unit vector, and apply the continuous operator $A-\lambda I$:
$$
(A-\lambda I)e_{1}=\lim_{n}(A-\lambda I)x_{n}=0 .
$$
So $\lambda_{1}=\lambda$ is an eigenvalue with unit eigenvector $e_{1}$ and $\lvert\lambda_{1}\rvert=\lVert A\rVert$, and $(Ae_{1},e_{1})=\lambda_{1}$ shows the supremum is attained there. If $Ae=\mu e$ with $\lVert e\rVert=1$ then $\lvert\mu\rvert=\lVert Ae\rVert\le\lVert A\rVert=\lvert\lambda_{1}\rvert$, so no eigenvalue is larger, and $\lVert Av\rVert\le\lVert A\rVert\lVert v\rVert=\lvert\lambda_{1}\rvert\lVert v\rVert$ is the definition of the operator norm. $\square$
:::

:::proof[Parts 2 and 3: iteration, and the shape of the spectrum]{provenance=adapted src="stakgold-holst-2011:§6.3, proofs of Thms 6.3.2 and 6.3.3, pp. 371–372, the two outcomes and the proof that $\\lambda_{n}\\to0$, pp. 372–373, and the argument on p. 374 that no eigenvalue is missed; reed-simon-1980:§VI.5, Thm VI.15, p. 203; evans-2010:Appendix D.5, Thm 6 and its proof, p. 682; kreyszig-1978:§8.3, Thm 8.3-1, p. 421"}
**Part 2.** Suppose $e_{1},\dots,e_{n}$ have been found. Let $M_{n}^{\perp}$ be the orthogonal complement of their span, a closed subspace and therefore a Hilbert space in its own right (:ref[]{to=funcan.projection-theorem}). The key observation is that $A$ maps $M_{n}^{\perp}$ into itself: for $v\in M_{n}^{\perp}$ and each $k\le n$,
$$
(Av,e_{k})=(v,Ae_{k})=(v,\lambda_{k}e_{k})=\overline{\lambda_{k}}\,(v,e_{k})=0 ,
$$
where the first equality is **self-adjointness** and the last uses $v\perp e_{k}$. (Reality of $\lambda_{k}$, proved below, makes $\overline{\lambda_{k}}=\lambda_{k}$; either way the product vanishes.) The restriction $A|_{M_{n}^{\perp}}$ is again compact — a restriction of a compact operator to a closed invariant subspace is compact, since bounded sequences in the subspace are bounded in $H$ — and again self-adjoint. So part 1 applies on $M_{n}^{\perp}$ and delivers $e_{n+1}$ and $\lambda_{n+1}$ with $\lvert\lambda_{n+1}\rvert=\lVert A|_{M_{n}^{\perp}}\rVert$, and the bound $\lVert Av\rVert\le\lvert\lambda_{n+1}\rvert\lVert v\rVert$ on $M_{n}^{\perp}$. Because $M_{n}^{\perp}\subset M_{n-1}^{\perp}$, the suprema cannot increase: $\lvert\lambda_{n+1}\rvert\le\lvert\lambda_{n}\rvert$. This is Stakgold and Holst's chain of Theorems 6.3.1–6.3.3.

If at some stage the supremum is $0$, then by step 1 of part 1 the restriction has zero norm, so $A$ vanishes on $M_{n}^{\perp}$; every vector there is an eigenvector for the eigenvalue $0$, and $A$ has rank $n$, with range the span of $e_{1},\dots,e_{n}$. Otherwise the process continues for ever.

**Part 2, $\lambda_{n}\to0$.** Suppose not; then $\lvert\lambda_{n}\rvert\ge c>0$ for all $n$, and the vectors $u_{n}=e_{n}/\lambda_{n}$ satisfy $\lVert u_{n}\rVert\le1/c$, a bounded sequence. Compactness would give a convergent subsequence of $(Au_{n})=(e_{n})$. But the $e_{n}$ are orthonormal, so $\lVert e_{n}-e_{m}\rVert=\sqrt2$ for $n\ne m$ and no subsequence is Cauchy. Contradiction. (Stakgold and Holst's argument; equivalently, part 7 of :ref[]{to=funcan.compact-operators} forces $Ae_{n}=\lambda_{n}e_{n}\to0$, hence $\lambda_{n}\to0$.)

**Part 3, reality and orthogonality.** If $Ae=\mu e$ with $e\ne0$ then $\mu\lVert e\rVert^{2}=(Ae,e)$ is real by self-adjointness, so $\mu$ is real. If $Ae=\mu e$ and $Af=\nu f$ with $\mu\ne\nu$, both real, then
$$
\mu(e,f)=(Ae,f)=(e,Af)=\nu(e,f),
$$
so $(\mu-\nu)(e,f)=0$ and $(e,f)=0$.

**Part 3, finite multiplicity and countability.** If some $\mu\ne0$ had an infinite-dimensional eigenspace, that eigenspace would contain an infinite orthonormal sequence $(f_{k})$ with $Af_{k}=\mu f_{k}$, and $\lVert Af_{k}-Af_{l}\rVert=\lvert\mu\rvert\sqrt2$ for $k\ne l$, so $(Af_{k})$ has no convergent subsequence although $(f_{k})$ is bounded — contradicting compactness. (This is Evans's step 1.) The same argument, run with eigenvectors for *distinct* eigenvalues of modulus at least $c>0$, shows that only finitely many such eigenvalues exist; Kreyszig proves this for a general compact operator on a normed space using Riesz's lemma instead of orthogonality. Letting $c=1/m$ and taking the union over $m$ exhibits the nonzero eigenvalues as a countable set accumulating only at $0$.

**Part 3, no eigenvalue is missed.** Let $Av=\mu v$ with $\mu\ne0$ and $v\ne0$, and suppose $\mu$ is not among the $\lambda_{n}$. By the orthogonality just proved, $v\perp e_{n}$ for every $n$, so $v\in M_{n}^{\perp}$ for every $n$ and the extremal bound gives $\lVert Av\rVert\le\lvert\lambda_{n+1}\rvert\lVert v\rVert$ for all $n$. Letting $n\to\infty$ gives $Av=0$, so $\mu v=0$ and $v=0$: a contradiction. (In the finite case the bound is $Av=0$ outright.) Hence the list is complete. $\square$
:::

:::note[The Riesz–Schauder clauses are quoted, not proved here]{provenance=adapted src="reed-simon-1980:§VI.5, Thm VI.15, p. 203; hassani-2013:§17.5.1, Thm 17.5.11, p. 527; evans-2010:Appendix D.5, Thm 6 and its proof, p. 682"}
Two clauses of part 3 are not proved above, because they need no self-adjointness and belong to the theory of a general compact operator: that every nonzero $\eta\in\sigma(A)$ is an eigenvalue, and that $0\in\sigma(A)$ when $\dim H=\infty$. We take them from Reed and Simon's Theorem VI.15, Hassani's Theorem 17.5.11 and Evans's Theorem 6.

Evans's argument for the second is one line and worth recording: if $0\notin\sigma(A)$ then $A$ is boundedly invertible and $I=A\circ A^{-1}$ would be compact by the ideal property, which is impossible in infinite dimensions. His argument for the first runs through the Fredholm alternative for a compact operator — if $\ker(A-\eta I)=\{0\}$ with $\eta\ne0$ then the alternative gives $\operatorname{ran}(A-\eta I)=H$, so $\eta$ is in the resolvent set after all — which is quoted, in Evans's form, in the application of :ref[]{to=funcan.compact-operators}. Reed and Simon instead derive both from their analytic Fredholm theorem.
:::

:::proof[Parts 4 and 5: the expansion and the basis]{provenance=adapted src="stakgold-holst-2011:§6.3, proof of Thm 6.3.4 with (6.3.10)–(6.3.11) and the decomposition (6.3.12) with Thm 6.3.5, pp. 373–374; reed-simon-1980:§VI.5, proof of Thm VI.16, p. 203; evans-2010:Appendix D.6, proof of Thm 7, pp. 683–684; hassani-2013:§17.6.1, Thm 17.6.5 and Cor. 17.6.6, pp. 530–531"}
**Part 4.** Fix $u\in H$ and set $v_{n}=u-\sum_{k\le n}(u,e_{k})e_{k}$, the component of $u$ orthogonal to $e_{1},\dots,e_{n}$, so $v_{n}\in M_{n}^{\perp}$ and, by Bessel's inequality (:ref[]{to=funcan.orthonormal-bases}), $\lVert v_{n}\rVert\le\lVert u\rVert$. Applying $A$ term by term to the finite sum and using $Ae_{k}=\lambda_{k}e_{k}$,
$$
Av_{n}=Au-\sum_{k\le n}\lambda_{k}(u,e_{k})\,e_{k} .
$$
The extremal bound of part 2 on $M_{n}^{\perp}$ now gives
$$
\Bigl\lVert Au-\sum_{k\le n}\lambda_{k}(u,e_{k})e_{k}\Bigr\rVert=\lVert Av_{n}\rVert\le\lvert\lambda_{n+1}\rvert\,\lVert v_{n}\rVert\le\lvert\lambda_{n+1}\rvert\,\lVert u\rVert .
$$
Since $\lambda_{n+1}\to0$ the right-hand side vanishes, which is the expansion. (If the list is finite the bound reads $Av_{n}=0$ and the finite sum is exact.) Consequently every element of $\operatorname{ran}A$ lies in the closed span of $\{e_{n}\}$; conversely each $e_{n}=A(e_{n}/\lambda_{n})$ lies in $\operatorname{ran}A$. So $\{e_{n}\}$, being orthonormal, is an orthonormal basis of $\overline{\operatorname{ran}A}$.

For the splitting, set $h=u-\sum_{n}(u,e_{n})e_{n}$; the series converges by Bessel and the Riesz–Fischer theorem, and applying the expansion just proved gives $Ah=Au-\sum_{n}\lambda_{n}(u,e_{n})e_{n}=0$. Uniqueness: if $Ah=0$ then for each $n$, $\lambda_{n}(h,e_{n})=(h,Ae_{n})=(Ah,e_{n})=0$ and $\lambda_{n}\ne0$, so $h\perp e_{n}$; thus $\ker A$ is exactly the orthogonal complement of the closed span of the $e_{n}$, and the decomposition is the orthogonal one. In particular $\{e_{n}\}$ spans $H$ precisely when $\ker A=\{0\}$. This is Stakgold and Holst's Theorem 6.3.5.

**Part 5.** Taking an orthonormal basis of the closed subspace $\ker A$ — every Hilbert space has one — and adjoining it to $\{e_{n}\}$ gives an orthonormal set whose closed span is $\ker A\oplus\overline{\operatorname{ran}A}=H$ by the splitting, so an orthonormal basis of $H$, and every member of it is an eigenvector ($0$ being the eigenvalue for the adjoined part). Countability when $H$ is separable is Evans's Theorem 7: a separable space has a countable orthonormal basis, so in particular $\ker A$ does.

Two other routes to the same conclusion are worth knowing. Reed and Simon let $\mathcal{M}$ be the closed span of all the eigenvectors; self-adjointness makes $\mathcal{M}^{\perp}$ invariant, the restriction of $A$ there is compact and self-adjoint with no nonzero eigenvalue, so by part 1 its norm is $0$, so $A$ vanishes on $\mathcal{M}^{\perp}$ — but then every vector of $\mathcal{M}^{\perp}$ is an eigenvector with eigenvalue $0$ and therefore lies in $\mathcal{M}$, forcing $\mathcal{M}^{\perp}=\{0\}$. Evans's Theorem 7 is the same argument with the extremal principle replaced by his lemma $\sigma(S)\subset[m,M]$ with $m,M\in\sigma(S)$, which gives $(\tilde Su,u)=0$ on the complement and hence $\tilde S=0$ by polarisation.

**The projection form.** Group the $e_{n}$ by distinct eigenvalue; $P_{j}$ is the (finite-rank) orthogonal projection onto the eigenspace of the $j$th distinct nonzero eigenvalue, which part 5 calls $\lambda_{j}$, and the expansion of part 4 reads $Au=\sum_{j}\lambda_{j}P_{j}u$.

The norm estimate needs the index translation between part 2, which lists eigenvalues with multiplicity, and part 5, which lists them without. Fix $m$ and let
$$
k=\sum_{j\le m}\dim P_{j}H
$$
be the total multiplicity of the first $m$ distinct nonzero eigenvalues. Part 2 produces the $e_{n}$ grouped by eigenvalue in non-increasing order of modulus, so the span of those $m$ eigenspaces is exactly $M_{k}=\operatorname{span}\{e_{1},\dots,e_{k}\}$, and the eigenvalue attached to the *next* vector $e_{k+1}$ is the next distinct one, of modulus $\lvert\lambda_{m+1}\rvert$. Now $A-\sum_{j\le m}\lambda_{j}P_{j}$ vanishes on $M_{k}$ and on $\ker A$ and acts as $A$ on $M_{k}^{\perp}$, where by part 2 its norm is $\lvert\lambda_{m+1}\rvert$, attained at $e_{k+1}$. This is Hassani's Theorem 17.6.5. If there are only $N$ distinct nonzero eigenvalues, then at $m=N$ the list is exhausted, $M_{k}^{\perp}=\ker A$ and the norm is $0$ — the convention $\lambda_{m+1}=0$ recorded in the statement. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="stakgold-holst-2011:§6.3, the opening paragraph, p. 371, Thm 6.3.5, p. 374, and the definite and indefinite cases, pp. 375–376; reed-simon-1980:§VI.5, the multiplication operator example, p. 201, and Thm VI.17, pp. 203–204; evans-2010:Appendix D.5, Thm 6, p. 682; hassani-2013:§17.6.1, Cor. 17.6.6, p. 531"}
- **Self-adjointness is used four times**, and dropping it destroys everything. It gives $\lVert A\rVert=\sup\lvert(Av,v)\rvert$ in step 1 of part 1, so that a maximising sequence for the Rayleigh quotient is a maximising sequence for the norm; it makes the eigenvalues real; it makes the orthogonal complement of an eigenvector invariant, which is what allows the iteration of part 2; and it makes the eigenvectors of distinct eigenvalues orthogonal, so that the $e_{n}$ assemble into an orthonormal family. The sharpest counterexample is the Volterra operator $(Vu)(x)=\int_{0}^{x}u$ on $L^{2}(0,1)$, worked out in :ref[]{to=funcan.compact-operators}: it is compact, it is not self-adjoint, and it has **no eigenvalues at all**, so $\sigma(V)=\{0\}$ and there is nothing to expand in. What survives for a general compact operator is the singular-value decomposition — Reed and Simon's canonical form (their Theorem VI.17, p. 204), which in the convention of this unit reads
$$
Au=\sum_{n}\lambda_{n}\,(u,\psi_{n})\,\varphi_{n}
$$
for two orthonormal families $\{\psi_{n}\}$, $\{\varphi_{n}\}$ and positive $\lambda_{n}\to0$, obtained by applying this theorem to the compact self-adjoint operator $A^{*}A$ (:ref[]{to=linalg.svd}). Reed and Simon write the same operator as $\sum_{n}\lambda_{n}(\psi_{n},\cdot)\varphi_{n}$ because their inner product is conjugate-linear in the *first* slot; ours is linear in the first slot, so the functional $u\mapsto(u,\psi_{n})$ is the one that is linear here. The Volterra operator's singular values are computed in :ref[]{to=funcan.compact-operators} and are perfectly well behaved; it is only the *eigen*-structure that is missing.
- **Compactness is used twice**, and dropping it destroys part 1. It supplies the convergent subsequence of $(Ax_{n})$ that turns a maximising sequence into an actual maximiser, and it forces $\lambda_{n}\to0$ and finite multiplicities. Stakgold and Holst open §6.3 with the warning: a bounded self-adjoint operator may have no eigenvalues whatever. The simplest example is multiplication by the coordinate, $(A\varphi)(x)=x\varphi(x)$, which Reed and Simon give on $L^{2}[0,2]$ (p. 201) to show that the Fredholm alternative fails for a non-compact operator; we take the same operator on $L^{2}[0,1]$. There it is bounded with $\lVert A\rVert=1$ and self-adjoint, $(Au,v)=(u,Av)$ since $x$ is real, but $x\varphi(x)=\mu\varphi(x)$ forces $\varphi=0$ almost everywhere for every $\mu$. Its spectrum is the whole interval $[0,1]$ and is entirely continuous. Recovering a spectral theorem in that generality needs spectral measures rather than eigenvectors, which is :ref[]{to=funcan.spectral-theorem-general}.
- **$A\ne0$** is needed only so that part 1 produces a *nonzero* eigenvalue; for $A=0$ every statement holds vacuously with no $e_{n}$ at all and $\ker A=H$.
- **$\lambda=0$ is the exceptional point and must be handled separately.** It is in the spectrum whenever $\dim H=\infty$, but it may or may not be an eigenvalue, and when it is, its multiplicity may be anything from $1$ to infinite. The theorem says nothing about the structure of $A$ on $\ker A$ because there is nothing to say: $A$ is zero there. This is also the reason the expansion theorem is about $\operatorname{ran}A$, not about $H$: a function with no component in $\overline{\operatorname{ran}A}$ has an eigenfunction expansion that converges to something other than itself.
- **Separability is needed only for countability.** Hassani's Corollary 17.6.6 states that the eigenvectors form an orthonormal basis with no separability hypothesis, which is correct: the basis simply need not be a sequence, because $\ker A$ can be non-separable. The part that is always countable is the family belonging to the nonzero eigenvalues, by part 3. Evans states the theorem for a separable space, where everything is a sequence.
- **Definiteness sharpens part 2 into a clean maximum principle.** Stakgold and Holst note that for a non-negative operator the absolute values can be dropped, $\lambda_{n+1}=\sup\{(Av,v):\lVert v\rVert=1,\ v\in M_{n}^{\perp}\}$, and that for an indefinite operator the positive and negative eigenvalues each obey their own principle, with $\lambda_{1}^{-}\lVert v\rVert^{2}\le(Av,v)\le\lambda_{1}^{+}\lVert v\rVert^{2}$. Without a sign condition the modulus is unavoidable, and the maximiser may belong to either end of the spectrum.
:::

:::method[Diagonalising a compact self-adjoint operator in practice]{provenance=original}
1. **Check the two hypotheses.** Self-adjointness is usually a symmetry of a kernel, $K(x,t)=\overline{K(t,x)}$, or of a matrix, $a_{ij}=\overline{a_{ji}}$. Compactness is usually the square-integrability of the kernel or the decay of the diagonal (:ref[]{to=funcan.compact-operators}). Both must be checked; neither implies the other.
2. **Find the eigenvalues.** If $A$ is the inverse of a differential operator, solve the differential eigenvalue problem instead: $Au=\lambda u$ with $\lambda\ne0$ is $Lu=\lambda^{-1}u$ with the boundary conditions built into $A$ (:ref[]{to=ode.sturm-liouville-theory}). Otherwise look for a basis in which the kernel separates, or compute numerically.
3. **Order and normalise.** List the nonzero eigenvalues by decreasing modulus with multiplicity, apply Gram–Schmidt (:ref[]{to=linalg.gram-schmidt}) inside each eigenspace, and check orthogonality across eigenspaces as an arithmetic check — part 3 guarantees it.
4. **Decide whether the eigenvectors span.** By part 4 this is the single question: is $\ker A=\{0\}$? If $A$ is the inverse of an invertible operator, yes automatically.
5. **Expand, and truncate with a known error.** Write $Au=\sum\lambda_{n}(u,e_{n})e_{n}$. Truncating after $m$ distinct eigenvalues costs exactly $\lvert\lambda_{m+1}\rvert$ in operator norm, by part 5 (and nothing at all once every distinct nonzero eigenvalue has been used, where $\lambda_{m+1}$ is read as $0$) — so the decay rate of the eigenvalues is the convergence rate of every computation built on the expansion.
6. **Bound the largest eigenvalue without solving anything.** Evaluate the Rayleigh quotient $R(v)=(Av,v)/(v,v)$ at any convenient trial vector $v$. By part 1, $\lvert\lambda_{1}\rvert\ge\lvert R(v)\rvert$, and the bound improves as $v$ is varied — this is the Rayleigh–Ritz method (:ref[]{to=var.rayleigh-ritz}) read through the integral operator rather than the differential one.
:::

:::example[The Dirichlet Green's operator on the unit interval, with four numerical checks]{provenance=original}
On $H=L^{2}(0,1)$ take the integral operator $A$ with kernel
$$
K(x,t)=\min(x,t)-xt=
\begin{cases} x(1-t), & x\le t,\\ t(1-x), & t<x,\end{cases}
$$
the Green's function of $-\mathrm{d}^{2}/\mathrm{d}x^{2}$ with $u(0)=u(1)=0$ (:ref[]{to=green.green-function-bvp}).

**Hypotheses.** $K$ is real, symmetric and continuous on the closed unit square, so $A$ is self-adjoint, and $\iint\lvert K\rvert^{2}<\infty$ makes it Hilbert–Schmidt, hence compact (:ref[]{to=funcan.compact-operators}). Both hypotheses hold.

**Eigenvalues and eigenvectors.** If $Au=\lambda u$ with $\lambda\ne0$ then $w=Au=\lambda u$ satisfies $-w''=u=w/\lambda$ with $w(0)=w(1)=0$, so $w''+w/\lambda=0$ and $w(x)=\sin(x/\sqrt\lambda)$ up to a constant, with $\sin(1/\sqrt{\lambda})=0$. Hence
$$
\lambda_{n}=\frac{1}{n^{2}\pi^{2}},\qquad e_{n}(x)=\sqrt2\,\sin(n\pi x),\qquad n=1,2,\dots,
$$
with $\int_{0}^{1}2\sin(m\pi x)\sin(n\pi x)\,\mathrm{d}x=\delta_{mn}$. All are simple and positive, decreasing to $0$ as part 2 requires, and $\ker A=\{0\}$ (if $Au=0$ then $u=-(Au)''=0$), so by part 4 the $\{e_{n}\}$ are an orthonormal basis of $L^{2}(0,1)$ — the familiar sine basis.

**Check 1: the norm.** Part 1 says $\lVert A\rVert=\lambda_{1}=1/\pi^{2}=0.1013212$. The Hilbert–Schmidt bound of :ref[]{to=funcan.compact-operators} gives $\lVert A\rVert\le\bigl(\iint\lvert K\rvert^{2}\bigr)^{1/2}$, and
$$
\iint_{[0,1]^{2}}\bigl(\min(x,t)-xt\bigr)^{2}\mathrm{d}t\,\mathrm{d}x=\frac{1}{90}=0.0111111,
$$
so the bound is $1/\sqrt{90}=0.1054093$ — consistent, and tight to within $4\%$ here. Independently, $\sum_{n}\lambda_{n}^{2}=\pi^{-4}\sum n^{-4}=\pi^{-4}\cdot\pi^{4}/90=1/90$: the two computations of the Hilbert–Schmidt norm agree exactly.

**Check 2: the trace.** Summing the eigenvalues, $\sum_{n}\lambda_{n}=\pi^{-2}\sum n^{-2}=\pi^{-2}\cdot\pi^{2}/6=1/6$. Integrating the kernel along the diagonal, $\int_{0}^{1}K(x,x)\,\mathrm{d}x=\int_{0}^{1}(x-x^{2})\,\mathrm{d}x=\tfrac12-\tfrac13=1/6$. Agreement.

**Check 3: the expansion theorem on a concrete vector.** Take $u\equiv1$. Its coefficients are
$$
(u,e_{n})=\sqrt2\int_{0}^{1}\sin(n\pi x)\,\mathrm{d}x=\frac{\sqrt2\,(1-\cos n\pi)}{n\pi}
=\begin{cases}2\sqrt2/(n\pi),& n\ \text{odd},\\ 0,& n\ \text{even},\end{cases}
$$
so part 4 predicts
$$
(Au)(x)=\sum_{n\ \text{odd}}\frac{1}{n^{2}\pi^{2}}\cdot\frac{2\sqrt2}{n\pi}\cdot\sqrt2\sin(n\pi x)
=\sum_{n\ \text{odd}}\frac{4\sin(n\pi x)}{n^{3}\pi^{3}} .
$$
Computed directly, $(Au)(x)=\int_{0}^{1}\bigl(\min(x,t)-xt\bigr)\mathrm{d}t=\bigl(x-\tfrac{x^{2}}{2}\bigr)-\tfrac{x}{2}=\tfrac{x(1-x)}{2}$, which at $x=\tfrac12$ equals $\tfrac18=0.125$. The series at $x=\tfrac12$ is $\tfrac{4}{\pi^{3}}\bigl(1-\tfrac1{27}+\tfrac1{125}-\tfrac1{343}+\cdots\bigr)$, whose partial sums are $0.129006$, $0.124228$, $0.125260$, $0.124884$, $0.125061$, $0.124964$ — alternating about $0.125$ and squeezing it, as they must, with $\sum_{k\ge0}(-1)^{k}(2k+1)^{-3}=\pi^{3}/32$ giving the limit $4/\pi^{3}\cdot\pi^{3}/32=1/8$ exactly.

**Check 4: the Rayleigh quotient bounds $\lambda_{1}$ from below.** Take the trial function $v(x)=x(1-x)$, which satisfies the boundary conditions but is not an eigenfunction. Then $Av=w$ solves $-w''=v$, $w(0)=w(1)=0$, giving $w(x)=\tfrac{x}{12}-\tfrac{x^{3}}{6}+\tfrac{x^{4}}{12}$, and
$$
(Av,v)=\int_{0}^{1}wv\,\mathrm{d}x=\frac{17}{5040},
\qquad
(v,v)=\int_{0}^{1}x^{2}(1-x)^{2}\mathrm{d}x=\frac{1}{30},
\qquad
R(v)=\frac{17}{168}=0.1011905 .
$$
Part 1 requires $R(v)\le\lambda_{1}=0.1013212$, and indeed it is smaller, by $0.13\%$. Read back through $\lambda_{1}=1/\pi^{2}$, this single polynomial trial function gives $\pi^{2}\le168/17=9.882353$ against $\pi^{2}=9.869604$ — the Rayleigh–Ritz bound for the fundamental frequency of a string, obtained without solving the eigenvalue problem.
:::

:::application{provenance=original}
**Sturm–Liouville theory is a corollary.** Let $L$ be a formally self-adjoint differential operator with real coefficients on $[a,b]$, with boundary conditions making the problem self-adjoint and with $0$ not an eigenvalue (which costs nothing, since $L$ may be shifted by a constant). Its Green's function $g(x,\xi)$ is real and symmetric and generates a compact operator $\mathcal{G}$ on $L^{2}(a,b)$, and the differential eigenvalue problem $Lu=\theta u$ becomes $u=\theta\,\mathcal{G}u$. Parts 1–5 then deliver, in one stroke, the standard facts of :ref[]{to=ode.sturm-liouville-theory} and :ref[]{to=ode.eigenfunction-expansions}: the eigenvalues are real and discrete with $\lvert\theta_{n}\rvert\to\infty$, the eigenfunctions are orthogonal with finite-dimensional eigenspaces, and — because $\mathcal{G}$ has trivial null space, since $Lz=u$ with homogeneous data has the unique solution $z=\mathcal{G}u$ — they form an orthonormal basis. That is Stakgold and Holst's Theorem 6.3.6. The logical direction deserves emphasis: completeness of the normal modes of a vibrating string, a drumhead, a waveguide or a quantum well is not a fact about differential operators. It is a fact about compact self-adjoint operators, transferred to the differential problem through the Green's function. The kernel-level version of all this, including Mercer's theorem and the solution of the inhomogeneous integral equation, is :ref[]{to=green.hilbert-schmidt}.

**Normal modes and the variational characterisation of frequencies.** Part 2 is the Rayleigh–Ritz principle in its exact form: the $n$th eigenvalue is a constrained maximum of the Rayleigh quotient, so trial functions give one-sided bounds and a finite-dimensional trial space gives a convergent scheme (:ref[]{to=var.rayleigh-ritz}, :ref[]{to=var.variational-eigenvalues}, :ref[]{to=linalg.normal-modes}). Check 4 of the example is the whole method in miniature. In structural engineering and in molecular vibration analysis, this is how a lowest resonance is estimated before any mode is computed; part 5's error identity $\lVert A-\sum_{j\le m}\lambda_{j}P_{j}\rVert=\lvert\lambda_{m+1}\rvert$ is the corresponding statement about how many modes must be kept.

**Quantum mechanics: why bound states are discrete.** A Hamiltonian is unbounded and this theorem does not apply to it directly. It applies to the resolvent $(H-z)^{-1}$, which for a confining or sufficiently decaying potential is compact; the discreteness of the bound-state energies, the finite degeneracy of each level, and the orthogonality and completeness of the bound states in the relevant subspace are then parts 3 and 4 read back through $E\mapsto(E-z)^{-1}$. The accumulation of eigenvalues at $0$ for the resolvent is the accumulation of energy levels at the ionisation threshold. The framework is set out in :ref[]{to=funcan.quantum-mechanics-framework}, and the general tool for the non-compact case in :ref[]{to=funcan.spectral-theorem-general}.

**Data analysis: principal components and empirical orthogonal functions.** A covariance operator $C$ defined by a square-integrable covariance kernel is self-adjoint, non-negative and compact. Part 1 says the direction of greatest variance exists and is an eigenvector; part 2 says the successive directions are obtained by the same maximisation restricted to the orthogonal complement; part 5 says that truncating after $m$ components leaves an error of exactly $\lambda_{m+1}$ in operator norm. That is the entire justification of principal component analysis and of empirical orthogonal functions in climate science (:ref[]{to=stats.eof-pca}), and the decay of $\lambda_{n}$ is what makes a handful of patterns describe a field with thousands of degrees of freedom. The matrix case is :ref[]{to=linalg.hermitian-spectral-theorem}; this unit is the statement that nothing is lost when the index set becomes continuous, provided the operator is compact.
:::
