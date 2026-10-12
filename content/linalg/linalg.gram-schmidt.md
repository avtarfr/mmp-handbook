---
id: linalg.gram-schmidt
title: Orthonormal bases and Gram-Schmidt
kind: method
level: core
summary: The Gram-Schmidt recipe that turns a linearly independent list into an orthonormal one spanning the same nested subspaces, the expansion of a vector in an orthonormal basis, and the QR factorization the recipe produces.
prereqs: [linalg.inner-product-spaces, linalg.vector-spaces-bases, linalg.linear-systems]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§3.4, Def. 3.4-1 (orthogonal and orthonormal sets), p. 152; the Pythagorean relation, eqs. (3)–(4), and Lemma 3.4-2 (an orthonormal set is linearly independent), p. 153; expansion in an orthonormal sequence, eqs. (6)–(11), pp. 155–156; Thm 3.4-6 (Bessel inequality) and Fourier coefficients, p. 157; the Gram-Schmidt process with its nested-span property, pp. 157–158"
    pages: "152-158"
    role: orthonormal sets and the Kronecker-delta normalisation; the expansion formula and the orthogonality of the remainder; Bessel's inequality; the Gram-Schmidt process and the property that the first n outputs span the first n inputs
  - work: lee-2013
    loc: "App. B, orthonormal basis and Prop. B.40 (the Gram-Schmidt algorithm), eqs. (B.12)–(B.13), p. 636; Exercise B.41 (the complex case), p. 636"
    pages: "636"
    role: existence of an orthonormal basis in finite dimensions, with the nested-span condition stated as part of the theorem, and its extension to the hermitian product
  - work: arfken-2013
    loc: "§5.2 Gram-Schmidt Orthogonalization, eqs. (5.33)–(5.39), pp. 269–270; the dependence of the output on the order of the inputs, p. 270; Example 5.2.1 and eq. (5.41), pp. 270–271; orthonormalizing ordinary vectors, pp. 272–273"
    pages: "269-273"
    role: the recipe in the form used here, including the choice to subtract projections onto the already-orthonormalised vectors rather than the original ones; the remark that reordering the inputs changes the output; the identification of the unit-weight output on [-1,1] with the normalised Legendre polynomials, cited in the application
  - work: hassani-2013
    loc: "§2.2.2 The Gram-Schmidt Process, eq. (2.13), pp. 33–35; Def. 2.2.4 (orthonormal basis), p. 32; Example 2.2.6, p. 33"
    pages: "32-35"
    role: the recursion in projection-operator form, and the observation that each stage takes linear combinations of the original vectors only
  - work: stakgold-holst-2011
    loc: "§4.6, Problem of Best Approximation and the Fourier sum, eqs. (4.6.4)–(4.6.5), p. 278; coordinates in an orthonormal basis, eq. (4.6.2), p. 277"
    pages: "277-278"
    role: the coefficients in an orthonormal expansion and the Bessel inequality in the finite form
  - work: reed-simon-1980
    loc: "§II.1, Thm II.1 (Pythagorean theorem) and its Bessel corollary, pp. 37–38"
    pages: "37-38"
    role: the Pythagoras/Bessel identity underlying the expansion statement
  - work: rhb-2006
    loc: "§8.1.3(iii) (Bessel's inequality in an orthonormal basis), eq. (8.21), pp. 246–247"
    pages: "246-247"
    role: the inequality form of Bessel's relation, for the remark on conventions
---

:::definition[Orthonormal sets and bases]{provenance=adapted src="kreyszig-1978:§3.4, Def. 3.4-1, eqs. (1)–(2), p. 152; hassani-2013:§2.2, Def. 2.2.4, eq. (2.11), p. 32; lee-2013:App. B, p. 636"}
Let $V$ be an inner product space over $\mathbb{F} = \mathbb{R}$ or $\mathbb{C}$, with the convention of :ref[Inner products and norms]{to=linalg.inner-product-spaces}: $(\cdot,\cdot)$ is linear in its first slot.

A family $(e_\alpha)_{\alpha\in I}$ in $V$ is **orthogonal** if $(e_\alpha,e_\beta) = 0$ for $\alpha\ne\beta$, and **orthonormal** if moreover each $e_\alpha$ has norm $1$, that is

$$
(e_\alpha, e_\beta) = \delta_{\alpha\beta} = \begin{cases} 1 & \alpha = \beta,\\ 0 & \alpha\neq\beta,\end{cases}
$$

$\delta_{\alpha\beta}$ being the Kronecker delta. An **orthonormal basis** of $V$ is an orthonormal family that is also a basis of $V$ in the sense of :ref[Vector spaces and bases]{to=linalg.vector-spaces-bases}.

For a finite orthonormal family $(e_1,\dots,e_n)$ and $x\in V$, the scalars $(x,e_i)$ are the **Fourier coefficients** of $x$ with respect to it, and $\sum_{i=1}^n (x,e_i)e_i$ is its **Fourier sum**.

A matrix $R\in M_{m\times n}(\mathbb{F})$, of any shape, is **upper triangular** if $R_{ik} = 0$ whenever $i>k$; for $m=n$ this is the usual condition that everything below the diagonal vanishes. A matrix $Q\in M_{m\times n}(\mathbb{F})$ has **orthonormal columns** if $Q^{*}Q = I_n$, where $Q^{*}$ is the conjugate transpose; for $m = n$ such a $Q$ is called **unitary** ($\mathbb{F}=\mathbb{C}$) or **orthogonal** ($\mathbb{F}=\mathbb{R}$).
:::

:::statement[Gram-Schmidt]{provenance=adapted src="lee-2013:App. B, Prop. B.40, eqs. (B.12)–(B.13), p. 636, and Exercise B.41, p. 636 (existence and the nested spans); kreyszig-1978:§3.4, pp. 157–158 (existence and the nested spans); hassani-2013:§2.2.2, eq. (2.13), pp. 33–35 (existence)"}
Let $V$ be an inner product space over $\mathbb{F}$ and let $(a_1,\dots,a_n)$ be a linearly independent $n$-tuple in $V$, with $n\ge 1$.

1. There is an orthonormal $n$-tuple $(q_1,\dots,q_n)$ in $V$ with

   $$
   \operatorname{span}\{q_1,\dots,q_k\} = \operatorname{span}\{a_1,\dots,a_k\} \qquad\text{for every } k = 1,\dots,n .
   $$

   Each $q_k$ is a linear combination of $a_1,\dots,a_k$ alone, and the method below constructs it.
2. Such a tuple is unique up to replacing each $q_k$ by $\lambda_k q_k$ with $\lvert\lambda_k\rvert = 1$: any two tuples with the property in part 1 differ by such a rescaling, and conversely every such rescaling of one of them is again orthonormal with the same nested spans. Imposing in addition that $(a_k,q_k)$ be real and positive for every $k$ makes it unique, and the method below produces that one.
3. Consequently every inner product space $V$ with $1\le\dim_{\mathbb{F}}V = n<\infty$ has an orthonormal basis, and any orthonormal basis of a subspace $W\subseteq V$ extends to one of $V$.
:::

:::note[What is ours in that statement]{provenance=original}
Part 1, and the first clause of part 3, are the content of the propositions cited on the block: Lee's Proposition B.40 and Exercise B.41, and the treatments in Kreyszig and Hassani, each of which gives the construction with its nested spans and, in finite dimensions, the existence of an orthonormal basis. Two things in the statement are not in any of them. The first is part 2: the uniqueness up to unit scalars and the normalisation $(a_k,q_k)>0$ that pins the output down. The second is the extension clause of part 3, that an orthonormal basis of a subspace extends to one of $V$; it is obtained here by feeding an extended basis to the method and checking that the method reproduces an orthonormal initial segment unchanged. Both, and their proofs below, are the handbook's own. Part 2 is what the uniqueness half of the QR factorization statement rests on, and the extension clause is used in part 3 of that statement and twice in the proof of the :ref[spectral theorem for Hermitian matrices]{to=linalg.hermitian-spectral-theorem}.
:::

:::idea{provenance=original}
The recipe does all the work; the proof has only to check three things at each stage, in this order: the new remainder is not zero, it is perpendicular to everything built so far, and it has not escaped the span of the inputs read so far. A zero remainder would exhibit $a_k$ inside the span of its predecessors, which linear independence forbids. Perpendicularity is one line of algebra, and it is short precisely because what gets subtracted is a combination of vectors that are already orthonormal. The spans match because every stage only adds and subtracts multiples of vectors already available. Uniqueness runs the same way: once the $k$th span is fixed, $q_k$ can only be the unit vector in it perpendicular to the $(k-1)$st span, and that leaves a scalar of modulus one free.
:::

:::proof{provenance=adapted src="kreyszig-1978:§3.4, eqs. (13)–(14) and the nested-span property, pp. 157–158, with Lemma 3.4-2, p. 153; lee-2013:App. B, Prop. B.40 and eq. (B.13), p. 636, and Exercise B.41, p. 636"}
**Part 1: the method produces such a tuple.** Write $\tilde q_k$, $R_{ik}$, $q_k$ for the quantities the method below produces. We prove by induction on $k$ that for every $k = 1,\dots,n$:

(i) $\tilde q_k\ne 0$, so $R_{kk}>0$ and $q_k$ is defined;
(ii) $(q_1,\dots,q_k)$ is orthonormal;
(iii) $q_k\in\operatorname{span}\{a_1,\dots,a_k\}$;
(iv) $\operatorname{span}\{q_1,\dots,q_k\} = \operatorname{span}\{a_1,\dots,a_k\}$.

*Start.* A list one of whose entries is the zero vector is linearly dependent, so the hypothesis that $(a_1,\dots,a_n)$ is linearly independent gives $a_1\ne 0$ and therefore $R_{11} = \lVert a_1\rVert>0$. Then $q_1 = a_1/R_{11}$ has norm $1$, lies in $\operatorname{span}\{a_1\}$, and spans it, since $a_1 = R_{11}q_1$.

*Step.* Let $2\le k\le n$ and assume (i)–(iv) for all smaller indices.

- *Nothing vanishes.* If $\tilde q_k$ were $0$, step 2b would read $a_k = \sum_{i<k}R_{ik}q_i$, placing $a_k$ in $\operatorname{span}\{q_1,\dots,q_{k-1}\}$, which is $\operatorname{span}\{a_1,\dots,a_{k-1}\}$ by (iv) at $k-1$. An entry of the list lying in the span of its predecessors contradicts linear independence. This is the only use of that hypothesis in the inductive step; it is used once more, in the form $a_1\ne0$, in the Start paragraph. Hence $R_{kk} = \lVert\tilde q_k\rVert>0$, and $q_k = \tilde q_k/R_{kk}$ has norm $1$.
- *Orthogonality.* Fix $j<k$. The inner product is linear in its first slot, so

  $$
  (\tilde q_k, q_j) = (a_k,q_j)-\sum_{i=1}^{k-1}R_{ik}\,(q_i,q_j) = (a_k,q_j) - R_{jk} = 0 ,
  $$

  where the middle equality is orthonormality of $(q_1,\dots,q_{k-1})$, which annihilates every term but $i=j$, and the last is the definition $R_{jk} = (a_k,q_j)$ of step 2a. Dividing by the positive number $R_{kk}$ gives $(q_k,q_j) = 0$. Together with (ii) at $k-1$ and $\lVert q_k\rVert = 1$, this is (ii) at $k$.
- *Spans.* By step 2b, $q_k = R_{kk}^{-1}\bigl(a_k - \sum_{i<k}R_{ik}q_i\bigr)$, and each $q_i$ with $i<k$ lies in $\operatorname{span}\{a_1,\dots,a_i\}$ by (iii); hence $q_k\in\operatorname{span}\{a_1,\dots,a_k\}$, which is (iii) at $k$, and consequently $\operatorname{span}\{q_1,\dots,q_k\}\subseteq\operatorname{span}\{a_1,\dots,a_k\}$. Conversely $a_k = R_{kk}q_k+\sum_{i<k}R_{ik}q_i$ lies in $\operatorname{span}\{q_1,\dots,q_k\}$, and $a_i\in\operatorname{span}\{q_1,\dots,q_{k-1}\}$ for $i<k$ by (iv) at $k-1$. This is (iv) at $k$.

Since each $q_k$ is a combination of $a_1,\dots,a_k$ by (iii), part 1 is proved.

**Part 2: uniqueness up to unit scalars.** Let $(q_1',\dots,q_n')$ be any orthonormal tuple with $\operatorname{span}\{q_1',\dots,q_k'\} = \operatorname{span}\{a_1,\dots,a_k\}$ for every $k$; we show by induction that $q_k' = \lambda_kq_k$ with $\lvert\lambda_k\rvert=1$.

At $k=1$, $q_1'$ lies in $\operatorname{span}\{a_1\} = \operatorname{span}\{q_1\}$, so $q_1' = \lambda_1q_1$, and $\lvert\lambda_1\rvert = \lVert q_1'\rVert = 1$.

Assume $q_i' = \lambda_iq_i$ with $\lvert\lambda_i\rvert = 1$ for all $i<k$; then $q_i = \overline{\lambda_i}\,q_i'$, because a scalar of modulus one has $\lambda_i^{-1} = \overline{\lambda_i}$. By (iv), $q_k'\in\operatorname{span}\{a_1,\dots,a_k\} = \operatorname{span}\{q_1,\dots,q_k\}$, so $q_k' = \sum_{i\le k}c_iq_i$ for some scalars; pairing with $q_j$ and using orthonormality of the unprimed tuple gives $c_j = (q_k',q_j)$. For $j<k$, conjugate-linearity in the second slot and orthonormality of the primed tuple give

$$
(q_k',q_j) = (q_k',\overline{\lambda_j}\,q_j') = \lambda_j\,(q_k',q_j') = 0 .
$$

So $q_k' = c_kq_k$ with $\lvert c_k\rvert = \lVert q_k'\rVert = 1$, completing the induction.

Conversely, every such rescaling is admissible: if $\lvert\lambda_k\rvert = 1$ for each $k$ then $(\lambda_iq_i,\lambda_jq_j) = \lambda_i\overline{\lambda_j}\,\delta_{ij} = \delta_{ij}$, so $(\lambda_1q_1,\dots,\lambda_nq_n)$ is orthonormal, and $\operatorname{span}\{\lambda_1q_1,\dots,\lambda_kq_k\} = \operatorname{span}\{q_1,\dots,q_k\}$ for every $k$ because each $\lambda_k$ is a non-zero scalar. The tuples with the property of part 1 are therefore exactly the unit-scalar rescalings of any one of them.

It remains to see that the extra normalisation selects the method's tuple. By step 2b and orthonormality, $(a_k,q_k) = \bigl(\tilde q_k+\sum_{i<k}R_{ik}q_i,\,q_k\bigr) = (\tilde q_k,q_k) = R_{kk}>0$, so the method's output does satisfy it. Any admissible tuple has $(a_k,q_k') = (a_k,\lambda_kq_k) = \overline{\lambda_k}R_{kk}$, which is real and positive exactly when $\overline{\lambda_k}>0$, that is when $\lambda_k = 1$. So exactly one admissible tuple survives the extra condition, and it is the method's.

**Part 3: orthonormal bases and extensions.** Let $1\le\dim_{\mathbb F}V = n<\infty$ and pick any basis $(a_1,\dots,a_n)$ of $V$, which exists by :ref[Vector spaces and bases]{to=linalg.vector-spaces-bases}. Part 1 converts it into an orthonormal $(q_1,\dots,q_n)$ with $\operatorname{span}\{q_1,\dots,q_n\} = \operatorname{span}\{a_1,\dots,a_n\} = V$; an orthonormal spanning family is a basis, being linearly independent (part 1 of the expansion statement below), so $V$ has an orthonormal basis.

Now let $W\subseteq V$ be a subspace with an orthonormal basis $(e_1,\dots,e_k)$, where $k=0$ and the empty list are allowed if $W = \{0\}$. Extend it to a basis $(e_1,\dots,e_k,b_{k+1},\dots,b_n)$ of $V$, again by :ref[Vector spaces and bases]{to=linalg.vector-spaces-bases}, and feed that list to the method. We claim $q_i = e_i$ for $i\le k$, by induction on $i$: granted $q_j = e_j$ for $j<i$, step 2a gives $R_{ji} = (e_i,e_j) = 0$ for $j<i$ because the $e$'s are orthonormal, so $\tilde q_i = e_i$ and $R_{ii} = \lVert e_i\rVert = 1$, whence $q_i = e_i$. The method's output is therefore an orthonormal basis of $V$ whose first $k$ members are $e_1,\dots,e_k$. $\square$
:::

:::statement[Expansion in an orthonormal family]{provenance=adapted src="kreyszig-1978:§3.4, eqs. (3)–(4) and Lemma 3.4-2, pp. 152–153, eqs. (6)–(11), pp. 155–156, and Thm 3.4-6, p. 157; reed-simon-1980:§II.1, Thm II.1 and its corollary, pp. 37–38; stakgold-holst-2011:§4.6, eqs. (4.6.2) and (4.6.5), pp. 277–278"}
Let $V$ be an inner product space over $\mathbb{F}$.

1. Every orthonormal family in $V$ is linearly independent. Hence an orthonormal family in a space of dimension $n$ has at most $n$ members, and an orthonormal family of exactly $n$ members there is an orthonormal basis.
2. **Pythagoras and Bessel.** Let $(e_1,\dots,e_N)$ be orthonormal and $x\in V$. Put $y = \sum_{i=1}^{N}(x,e_i)e_i$. Then $x - y \perp e_i$ for every $i$, hence $x-y\perp y$, and

   $$
   \lVert x\rVert^2 = \sum_{i=1}^{N}\lvert (x,e_i)\rvert^2 + \lVert x - y\rVert^2 , \qquad\text{so}\qquad \sum_{i=1}^{N}\lvert (x,e_i)\rvert^2 \le \lVert x\rVert^2 .
   $$

   Equality in the second relation holds exactly when $x\in\operatorname{span}\{e_1,\dots,e_N\}$.
3. **Orthonormal basis.** If $(e_1,\dots,e_n)$ is an orthonormal basis of $V$, then for all $x,y\in V$

   $$
   x = \sum_{i=1}^{n}(x,e_i)\,e_i , \qquad
   \lVert x\rVert^2 = \sum_{i=1}^{n}\lvert (x,e_i)\rvert^2 , \qquad
   (x,y) = \sum_{i=1}^{n}(x,e_i)\,\overline{(y,e_i)} .
   $$

   So in an orthonormal basis the components of a vector are obtained by taking $n$ inner products, with no linear system to solve, and the inner product takes the standard form of $\mathbb{F}^n$. Neither holds in a basis that is not orthonormal.
:::

:::idea{provenance=original}
One computation carries all three parts: subtract the Fourier sum and what is left over is perpendicular to every member of the family. Linear independence follows because pairing a vanishing combination with one member of the family reads off that member's coefficient. Pythagoras applied to the splitting of $x$ into the part the family captures and the part it misses gives the norm identity, and Bessel's inequality is nothing but the remark that the missed part has non-negative length. Part 3 is the case in which nothing can be missed.
:::

:::proof{provenance=adapted src="kreyszig-1978:§3.4, Lemma 3.4-2, p. 153, and eqs. (8)–(12), pp. 155–157; stakgold-holst-2011:§4.6, eqs. (4.6.2) and (4.6.4)–(4.6.5), pp. 277–278; reed-simon-1980:§II.1, Thm II.1 and its corollary, pp. 37–38"}
**Part 1.** Let $(e_\alpha)_{\alpha\in I}$ be orthonormal and let $\sum_{i=1}^{N}c_ie_{\alpha_i} = 0$ with $\alpha_1,\dots,\alpha_N$ distinct. Pairing with $e_{\alpha_j}$ and using linearity in the first slot,

$$
0 = \Bigl(\sum_{i=1}^{N}c_ie_{\alpha_i},\,e_{\alpha_j}\Bigr) = \sum_{i=1}^{N}c_i\,\delta_{\alpha_i\alpha_j} = c_j ,
$$

so every coefficient vanishes: the family is linearly independent. In a space of dimension $n$ a linearly independent family has at most $n$ members, and $n$ linearly independent vectors there form a basis (:ref[Vector spaces and bases]{to=linalg.vector-spaces-bases}), so an orthonormal family of exactly $n$ members is an orthonormal basis.

**Part 2.** Put $y = \sum_{i=1}^{N}(x,e_i)e_i$. For each $j\le N$, by linearity in the first slot and orthonormality,

$$
(x-y,e_j) = (x,e_j) - \sum_{i=1}^{N}(x,e_i)(e_i,e_j) = (x,e_j)-(x,e_j) = 0 ,
$$

which is the claim $x-y\perp e_j$. Because $y$ is a combination of the $e_j$ and the inner product is conjugate-linear in its second slot,

$$
(x-y,y) = \sum_{j=1}^{N}\overline{(x,e_j)}\,(x-y,e_j) = 0 ,
$$

so $x-y\perp y$ as well. Expanding $\lVert x\rVert^2 = (y+(x-y),\,y+(x-y))$ and discarding the two cross terms, which vanish by the previous line, gives $\lVert x\rVert^2 = \lVert y\rVert^2+\lVert x-y\rVert^2$. The first term is

$$
\lVert y\rVert^2 = \Bigl(\sum_{i}(x,e_i)e_i,\ \sum_{j}(x,e_j)e_j\Bigr) = \sum_{i}\sum_{j}(x,e_i)\overline{(x,e_j)}\,(e_i,e_j) = \sum_{i=1}^{N}\lvert (x,e_i)\rvert^2 ,
$$

by orthonormality again. This is the displayed identity, and the inequality follows from $\lVert x-y\rVert^2\ge 0$.

For the equality case: equality forces $\lVert x-y\rVert = 0$, hence $x = y\in\operatorname{span}\{e_1,\dots,e_N\}$. Conversely, if $x\in\operatorname{span}\{e_1,\dots,e_N\}$, write $x = \sum_ic_ie_i$; pairing with $e_j$ gives $c_j = (x,e_j)$, so $x = y$ and the remainder is $0$.

**Part 3.** Let $(e_1,\dots,e_n)$ be an orthonormal basis of $V$. Every $x\in V$ lies in $\operatorname{span}\{e_1,\dots,e_n\}$, so the equality case of part 2 gives both $x = \sum_i(x,e_i)e_i$ and $\lVert x\rVert^2 = \sum_i\lvert (x,e_i)\rvert^2$. For the third identity, substitute the expansion of $y$ and use conjugate-linearity in the second slot:

$$
(x,y) = \Bigl(x,\ \sum_{i=1}^{n}(y,e_i)e_i\Bigr) = \sum_{i=1}^{n}\overline{(y,e_i)}\,(x,e_i) = \sum_{i=1}^{n}(x,e_i)\,\overline{(y,e_i)} . \qquad\square
$$
:::

:::statement[QR factorization]{provenance=original}
Let $A\in M_{m\times n}(\mathbb{F})$ with $m\ge n$, and give $\mathbb{F}^m$ its standard inner product.

1. If $\operatorname{rank}A = n$, there are unique matrices $Q\in M_{m\times n}(\mathbb{F})$ with $Q^{*}Q = I_n$ and $R\in M_{n\times n}(\mathbb{F})$ upper triangular with all diagonal entries real and positive, such that $A = QR$. Running the method below on the columns $a_1,\dots,a_n$ of $A$ produces them: the $k$th column of $Q$ is $q_k$, and $R_{ik} = (a_k,q_i)$ for $i<k$ while $R_{kk} = \lVert a_k - \sum_{i<k}(a_k,q_i)q_i\rVert$.
2. Then $\operatorname{span}\{q_1,\dots,q_k\}$ is the span of the first $k$ columns of $A$ for each $k$; in particular the columns of $Q$ are an orthonormal basis of $\operatorname{im}A$.
3. Without the rank hypothesis a factorization $A = QR$ with $Q\in M_{m\times m}(\mathbb{F})$ satisfying $Q^{*}Q = I_m$ — unitary, or orthogonal when $\mathbb{F} = \mathbb{R}$ — and $R\in M_{m\times n}(\mathbb{F})$ upper triangular still exists. This wider form is never unique, whatever the rank of $A$: the diagonal of $R$ is not required to be real and positive here, so $(Q,R)$ may always be replaced by $(QD, D^{*}R)$ with $D$ diagonal and unimodular, and for $m>n$ the last $m-n$ columns of $Q$ do not enter the product at all. It is the rank hypothesis together with the shape of $Q$ and the positive diagonal of $R$ that pin down the factorization of part 1.
:::

:::idea{provenance=original}
Part 1 is the Gram-Schmidt statement rewritten as one matrix equation. The relation $a_k = \sum_{i\le k}R_{ik}q_i$ that the recipe leaves behind is, read column by column, exactly $A = QR$; orthonormality of the outputs is $Q^{*}Q = I_n$; and the fact that only indices $i\le k$ occur is upper triangularity. Uniqueness is the uniqueness clause of that statement, once one checks that any such factorization forces the columns of $Q$ to have the nested spans and the positive inner products it asks for. Part 3 has no independence to lean on, so instead of building $Q$ one column at a time we clear one column of $A$ at a time: a single unitary matrix sends the first column to a multiple of the first standard basis vector and leaves a smaller problem of the same shape.
:::

:::proof{provenance=original}
**Part 1.** If $\operatorname{rank}A = n$ then the $n$ columns $a_1,\dots,a_n$ of $A$ are linearly independent (:ref[Linear systems and rank]{to=linalg.linear-systems}), so the method applies to them. It returns an orthonormal $(q_1,\dots,q_n)$ in $\mathbb{F}^m$ and scalars $R_{ik}$ with $R_{ik}=0$ for $i>k$, with $R_{kk}>0$ real, and with $a_k = \sum_{i=1}^{k}R_{ik}q_i$ for every $k$ (step 3). Let $Q$ be the matrix whose columns are $q_1,\dots,q_n$ and let $R = (R_{ik})$. Then

$$
(Q^{*}Q)_{ij} = \sum_{l=1}^{m}\overline{Q_{li}}\,Q_{lj} = (q_j,q_i) = \delta_{ij} ,
$$

so $Q^{*}Q = I_n$, and the $k$th column of $QR$ is $\sum_iR_{ik}q_i = a_k$, so $A = QR$. This proves existence, with the formulas as stated.

For uniqueness, let $A = QR$ be *any* factorization with $Q^{*}Q = I_n$ and $R$ upper triangular with real positive diagonal, and let $q_1,\dots,q_n$ be the columns of $Q$, which are orthonormal because $Q^{*}Q = I_n$. Reading column $k$ of $A = QR$ gives $a_k = \sum_{i\le k}R_{ik}q_i$, so $\operatorname{span}\{a_1,\dots,a_k\}\subseteq\operatorname{span}\{q_1,\dots,q_k\}$. Both spans have dimension $k$ — the $a_i$ because $\operatorname{rank}A = n$, the $q_i$ because an orthonormal family is linearly independent by part 1 of the expansion statement — so the inclusion is an equality. Pairing the same relation with $q_k$ and using orthonormality gives $(a_k,q_k) = R_{kk}>0$. So $(q_1,\dots,q_n)$ is an orthonormal tuple with the nested spans of the Gram-Schmidt statement and with $(a_k,q_k)$ real and positive, and part 2 of that statement identifies it as the tuple the method produces. The entries of $R$ are then forced as well: pairing $a_k = \sum_{i\le k}R_{ik}q_i$ with $q_i$ gives $R_{ik} = (a_k,q_i)$ for $i\le k$, and in particular $R_{kk} = (a_k,q_k) = \lVert a_k-\sum_{i<k}(a_k,q_i)q_i\rVert$.

**Part 2.** The nested spans of the Gram-Schmidt statement say $\operatorname{span}\{q_1,\dots,q_k\} = \operatorname{span}\{a_1,\dots,a_k\}$, which is the span of the first $k$ columns of $A$. At $k=n$ that span is the column space $\operatorname{im}A$, and $q_1,\dots,q_n$ is an orthonormal family spanning it, hence an orthonormal basis of it.

**Part 3.** Throughout, "unitary" is short for $Q^{*}Q = I_m$ with $Q$ square, which for $\mathbb{F} = \mathbb{R}$ is the orthogonality of the definition block. First a construction used at every stage: *given $v\in\mathbb{F}^m$ there is a unitary $Q_1\in M_{m\times m}(\mathbb{F})$ with $Q_1^{*}v = \lVert v\rVert\,e_1$.* For $v = 0$ take $Q_1 = I_m$. For $v\ne 0$ set $w_1 = v/\lVert v\rVert$ and extend $(w_1)$ to an orthonormal basis $(w_1,\dots,w_m)$ of $\mathbb{F}^m$ by part 3 of the Gram-Schmidt statement; let $Q_1$ have columns $w_1,\dots,w_m$, so $Q_1^{*}Q_1 = I_m$. Its entries are $(Q_1^{*}v)_i = (v,w_i)$, which equals $\lVert v\rVert$ for $i=1$ and $0$ for $i\ge2$ because $v$ is a multiple of $w_1$.

Now induct on the number of columns $n$, with $m\ge n$ throughout. For $n=1$ take $Q = Q_1$ built from $v = a_1$ and $R = \lVert a_1\rVert e_1\in M_{m\times 1}(\mathbb{F})$, which is upper triangular; then $QR = Q_1Q_1^{*}a_1 = a_1 = A$, since $Q_1Q_1^{*} = I_m$ for a square matrix with $Q_1^{*}Q_1 = I_m$.

Let $n\ge 2$ and assume the claim for matrices with $n-1$ columns. Build $Q_1$ from $v = a_1$, the first column of $A$. The first column of $Q_1^{*}A$ is then $\lVert a_1\rVert e_1$, so

$$
Q_1^{*}A = \begin{pmatrix} r & c\\ 0 & A'\end{pmatrix}, \qquad r = \lVert a_1\rVert ,
$$

where $c$ is a row of length $n-1$ and $A'\in M_{(m-1)\times(n-1)}(\mathbb{F})$ with $m-1\ge n-1$. By the induction hypothesis $A' = Q'R'$ with $Q'$ unitary of size $m-1$ and $R'\in M_{(m-1)\times(n-1)}(\mathbb{F})$ upper triangular. Put

$$
Q = Q_1\begin{pmatrix}1&0\\0&Q'\end{pmatrix}, \qquad R = \begin{pmatrix} r& c\\ 0 & R'\end{pmatrix} .
$$

Then $Q$ is unitary, being a product of two unitary matrices; $R$ is upper triangular, because the entry of $R$ in row $i+1$ and column $k+1$ is $R'_{ik}$, which vanishes for $i>k$; and

$$
QR = Q_1\begin{pmatrix}r&c\\0&Q'R'\end{pmatrix} = Q_1Q_1^{*}A = A .
$$

Uniqueness fails here for every $A$, not only for the rank-deficient ones, because nothing now constrains the diagonal of $R$. Let $A = QR$ be a factorization of this form and let $D = \operatorname{diag}(d_1,\dots,d_m)$ with $\lvert d_i\rvert = 1$ for each $i$. Then $(QD)^{*}(QD) = D^{*}Q^{*}QD = D^{*}D = I_m$; the matrix $D^{*}R$ is again upper triangular, since $(D^{*}R)_{ik} = \overline{d_i}\,R_{ik}$ vanishes wherever $R_{ik}$ does; and $(QD)(D^{*}R) = QDD^{*}R = QR = A$. A square $Q$ with $Q^{*}Q = I_m$ is invertible, so $QD = Q$ forces $D = I_m$: every other choice of $D$ gives a genuinely different pair. When $m>n$ there is a second freedom. Rows $n+1,\dots,m$ of an upper triangular $R\in M_{m\times n}(\mathbb{F})$ vanish, because $i>n\ge k$ implies $i>k$; so only the first $n$ columns of $Q$ contribute to $QR$, and the remaining $m-n$ may be replaced by those of any other orthonormal completion.

Two small rank-deficient instances, for concreteness: for $m=n=1$ and $A = (0)$, both $Q=(1)$ and $Q=(-1)$ serve with $R=(0)$; and for $A = \begin{pmatrix}1&0\\0&0\end{pmatrix}$, both $Q = I_2$ and $Q = \operatorname{diag}(1,-1)$ give $A = QR$ with $R = A$. $\square$
:::

:::method[Gram-Schmidt orthonormalization]{provenance=adapted src="arfken-2013:§5.2, eqs. (5.33)–(5.39), pp. 269–270; hassani-2013:§2.2.2, eq. (2.13), pp. 33–35; kreyszig-1978:§3.4, pp. 157–158"}
Input: a linearly independent tuple $(a_1,\dots,a_n)$ in an inner product space. Output: an orthonormal $(q_1,\dots,q_n)$ with the nested spans of the statement above, and the coefficients $R_{ik}$ of the QR factorization.

1. Set $\tilde q_1 = a_1$, $R_{11} = \lVert\tilde q_1\rVert$ and $q_1 = \tilde q_1/R_{11}$. Here $R_{11}>0$ because $a_1\ne 0$.
2. For $k = 2,3,\dots,n$ in turn:
   a. compute the Fourier coefficients of $a_k$ along the vectors already produced, $R_{ik} = (a_k,q_i)$ for $i = 1,\dots,k-1$;
   b. subtract that part off: $\tilde q_k = a_k - \sum_{i=1}^{k-1}R_{ik}\,q_i$;
   c. set $R_{kk} = \lVert\tilde q_k\rVert$ and $q_k = \tilde q_k/R_{kk}$.
3. Set $R_{ik} = 0$ for $i>k$. Then $a_k = \sum_{i=1}^{k} R_{ik}q_i$ for each $k$, which is the factorization $A = QR$ when the $a_k$ are the columns of a matrix $A$.

Step 2a projects onto the $q_i$ already computed rather than onto the original $a_i$, which is what makes $\tilde q_k$ orthogonal to all of $q_1,\dots,q_{k-1}$ in one subtraction: for $j<k$, $(\tilde q_k,q_j) = (a_k,q_j) - \sum_{i<k}R_{ik}(q_i,q_j) = (a_k,q_j)-R_{jk} = 0$ by orthonormality.

**When it works, and how it fails.**

- *Independence is exactly the hypothesis.* $R_{kk} = 0$ in step 2c if and only if $a_k\in\operatorname{span}\{a_1,\dots,a_{k-1}\}$, and then step 2c divides by zero. To orthonormalize a spanning list that is not independent, discard each $a_k$ for which $\tilde q_k = 0$ and carry on; the surviving $q$'s are an orthonormal basis of $\operatorname{span}\{a_1,\dots,a_n\}$, and there are $\dim_{\mathbb{F}}\operatorname{span}\{a_1,\dots,a_n\}$ of them.
- *The output depends on the order of the inputs.* Re-ordering $(a_1,\dots,a_n)$ generally produces a different orthonormal tuple, because the nested spans it must match are different. In particular $q_1$ is always a multiple of $a_1$.
:::

:::note[Numerical behaviour]{provenance=original}
Everything above is exact arithmetic, which is all the three books cited on the method discuss. In floating point the recipe as written — *classical* Gram-Schmidt — loses orthogonality badly on ill-conditioned input: the departure of the computed $Q^{*}Q$ from $I_n$ grows like the square of the condition number of $A$. The **modified** form, in which step 2 is rewritten as $v\leftarrow a_k$ followed by $R_{ik}\leftarrow(v,q_i)$, $v\leftarrow v-R_{ik}q_i$ for $i=1,\dots,k-1$ in sequence, is algebraically the same recipe but loses orthogonality only in proportion to the first power of the condition number, because each coefficient is taken against a vector from which the earlier components have already been removed. Where orthogonality must be guaranteed, QR is computed instead by Householder reflections, which build $Q$ as a product of exactly unitary factors; see :ref[Numerical linear systems]{to=num.linear-systems-numerics} and :ref[Matrix norms and conditioning]{to=linalg.matrix-norms-conditioning}.
:::

:::note[What it means]{provenance=original}
An orthonormal basis is the one kind of basis in which coordinates are free: each component is a single inner product, and lengths and inner products are computed as if the space were $\mathbb{F}^n$. Gram-Schmidt says such a basis always exists and shows how to build one, processing the given vectors one at a time and never looking ahead, so that the first $k$ outputs already span what the first $k$ inputs spanned. Written in matrix form the same computation is the QR factorization, which is the workhorse behind :ref[least squares]{to=linalg.projections-least-squares} and behind orthogonal polynomial families.
:::

:::remark[Where the hypotheses are used, and conventions]{provenance=adapted src="arfken-2013:§5.2, pp. 269–270; hassani-2013:§2.2.2, pp. 33–35; kreyszig-1978:§3.4, pp. 152, 157; lee-2013:App. B, Prop. B.40 and Exercise B.41, p. 636"}
- **Which slot the coefficient sits in.** With the handbook's convention (linear in the first slot) the coefficient is $R_{ik} = (a_k,q_i)$, the *new* vector first. Arfken and Hassani, who are conjugate-linear in the first slot, write the same number as $\langle q_i\mid a_k\rangle$ with the already-orthonormalised vector first. Using the wrong order introduces a complex conjugate and breaks the orthogonality in step 2 as soon as the scalars are not real.
- **Finite dimension in part 3 of the Gram-Schmidt statement.** Lee's Proposition B.40 is an induction on $\dim V$, so it gives an orthonormal *basis* only in finite dimensions. The recipe itself runs on any finite or countable independent list in any inner product space, as Hassani notes; what fails in infinite dimensions is the conclusion that the result spans, and recovering it needs completeness and a limit — see :ref[orthonormal bases]{to=funcan.orthonormal-bases}.
- **Bessel is an equality plus a remainder.** Part 2 of the expansion statement is stated as the identity $\lVert x\rVert^2 = \sum_i\lvert(x,e_i)\rvert^2+\lVert x-y\rVert^2$, from which the inequality follows; the identity is the more useful form, because it names the defect. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§8.1.3(iii), pp. 246–247"} state it as an inequality that becomes an equality when all basis vectors are included.
- **Real versus complex.** Lee states Proposition B.40 for a real inner product and then asks in Exercise B.41 for the hermitian case; both are covered above, with the conjugations placed by our convention. The uniqueness in part 2 is weaker over $\mathbb{C}$ than over $\mathbb{R}$: there the free factors $\lambda_k$ run over the whole unit circle, not just $\{\pm1\}$.
:::

:::example[QR of a four-point sampling matrix]{provenance=original}
Work in $\mathbb{R}^4$ with the standard inner product $(x,y) = \sum_{i=1}^{4}x_iy_i$, and take the sample points $t = 1,2,3,4$. Let

$$
A = \begin{pmatrix}1&1&1\\1&2&4\\1&3&9\\1&4&16\end{pmatrix},
$$

whose columns $a_1,a_2,a_3$ are the values of $1$, $t$ and $t^2$ at those four points. They are linearly independent (a non-zero polynomial of degree $\le2$ has at most two roots), so the method applies.

**Stage 1.** $R_{11} = \lVert a_1\rVert = \sqrt{4} = 2$ and $q_1 = \tfrac12(1,1,1,1)$.

**Stage 2.** $R_{12} = (a_2,q_1) = \tfrac12(1+2+3+4) = 5$, so

$$
\tilde q_2 = a_2-5q_1 = (1,2,3,4)-\tfrac52(1,1,1,1) = \tfrac12(-3,-1,1,3) ,
$$

$R_{22} = \lVert\tilde q_2\rVert = \tfrac12\sqrt{9+1+1+9} = \sqrt5$, and $q_2 = \frac{1}{2\sqrt5}(-3,-1,1,3)$.

**Stage 3.** $R_{13} = (a_3,q_1) = \tfrac12(1+4+9+16) = 15$ and

$$
R_{23} = (a_3,q_2) = \frac{-3\cdot1-1\cdot4+1\cdot9+3\cdot16}{2\sqrt5} = \frac{50}{2\sqrt5} = 5\sqrt5 .
$$

Subtracting, with $15q_1 = \tfrac{15}{2}(1,1,1,1)$ and $5\sqrt5\,q_2 = \tfrac52(-3,-1,1,3)$,

$$
\tilde q_3 = (1,4,9,16)-\bigl(\tfrac{15}{2},\tfrac{15}{2},\tfrac{15}{2},\tfrac{15}{2}\bigr)-\bigl(-\tfrac{15}{2},-\tfrac52,\tfrac52,\tfrac{15}{2}\bigr) = (1,-1,-1,1) ,
$$

so $R_{33} = 2$ and $q_3 = \tfrac12(1,-1,-1,1)$.

**The factorization.**

$$
Q = \begin{pmatrix}
\tfrac12 & -\tfrac{3}{2\sqrt5} & \tfrac12\\
\tfrac12 & -\tfrac{1}{2\sqrt5} & -\tfrac12\\
\tfrac12 & \tfrac{1}{2\sqrt5} & -\tfrac12\\
\tfrac12 & \tfrac{3}{2\sqrt5} & \tfrac12
\end{pmatrix},
\qquad
R = \begin{pmatrix}2&5&15\\0&\sqrt5&5\sqrt5\\0&0&2\end{pmatrix} .
$$

**Checks.** The three columns of $Q$ have squared norms $4\cdot\tfrac14 = 1$, $\tfrac{9+1+1+9}{20} = 1$ and $4\cdot\tfrac14 = 1$; the three pairings are $\frac{-3-1+1+3}{4\sqrt5} = 0$, $\frac{1-1-1+1}{4} = 0$ and $\frac{-3+1-1+3}{4\sqrt5} = 0$. So $Q^{\mathsf T}Q = I_3$. The third column of $QR$ is

$$
15q_1+5\sqrt5\,q_2+2q_3 = \bigl(\tfrac{15}{2},\tfrac{15}{2},\tfrac{15}{2},\tfrac{15}{2}\bigr)+\bigl(-\tfrac{15}{2},-\tfrac52,\tfrac52,\tfrac{15}{2}\bigr)+(1,-1,-1,1) = (1,4,9,16) = a_3 ,
$$

and the other two columns check the same way. Finally $A^{\mathsf T}A = R^{\mathsf T}R$ predicts

$$
\det(A^{\mathsf T}A) = (\det R)^2 = (2\cdot\sqrt5\cdot 2)^2 = 80 ,
$$

which matches the direct computation from

$$
A^{\mathsf T}A = \begin{pmatrix}4&10&30\\10&30&100\\30&100&354\end{pmatrix} .
$$

**What the columns are.** Column $k$ of $Q$ lists the values at $t=1,2,3,4$ of

$$
\tfrac12, \qquad \frac{2t-5}{2\sqrt5}, \qquad \frac{t^2-5t+5}{2} ,
$$

so running the recipe on the sampled monomials has produced a family of polynomials, of degrees $0,1,2$ with positive leading coefficients, that are orthonormal for the sum over those four nodes. That is the discrete analogue of an orthogonal polynomial family, and the reason Gram-Schmidt and polynomial fitting keep meeting.
:::

:::application{provenance=original}
**Fitting by polynomials, stably.** The matrix of the example is what a least-squares fit of a quadratic to four measurements produces, and its $Q$ and $R$ are what the recommended algorithm for that fit uses: solving $Rx = Q^{*}b$ instead of forming the normal equations avoids squaring the condition number. The connection is made precise in :ref[Orthogonal projection and least squares]{to=linalg.projections-least-squares}. In practice, fitting with the orthogonalised columns rather than with raw powers $1,t,t^2,\dots$ is what keeps a high-degree fit from collapsing numerically, and it also means that adding one more term to the fit does not change the coefficients already computed, since the new basis vector is orthogonal to the old ones.

**Orthogonal polynomial families.** Run the recipe on the monomials $1,x,x^2,\dots$ in an inner product $(f,g) = \int_{-1}^{1}f(x)g(x)\,w(x)\,dx$ and it manufactures the classical orthogonal family belonging to the weight $w$. Unit weight gives the Legendre polynomials, with the normalisation $q_n = \sqrt{(2n+1)/2}\,P_n$; this is :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.2, Example 5.2.1 and eq. (5.41), pp. 270–271"}. Here we take instead the Chebyshev weight $w(x) = (1-x^2)^{-1/2}$, where $x = \cos\theta$ turns every integral into one over $\theta$: $\int_{-1}^{1}x^nw(x)\,dx = \int_0^{\pi}\cos^n\theta\,d\theta$, so the moments for $n = 0,1,\dots,6$ are

$$
\pi,\quad 0,\quad \tfrac{\pi}{2},\quad 0,\quad \tfrac{3\pi}{8},\quad 0,\quad \tfrac{5\pi}{16} .
$$

Four stages, each using only those numbers and the vanishing of an odd moment:

- $\lVert1\rVert^2 = \pi$, so $q_0 = 1/\sqrt{\pi}$.
- $(x,q_0) = 0$ by parity and $\lVert x\rVert^2 = \pi/2$, so $q_1 = \sqrt{2/\pi}\,x$.
- $(x^2,q_0) = \sqrt{\pi}/2$ and $(x^2,q_1) = 0$ by parity; the remainder is $x^2-\tfrac12$, whose squared norm is $\tfrac{3\pi}{8}-\tfrac{\pi}{2}+\tfrac{\pi}{4} = \tfrac{\pi}{8}$, so $q_2 = \sqrt{8/\pi}\,\bigl(x^2-\tfrac12\bigr)$.
- $(x^3,q_0) = (x^3,q_2) = 0$ by parity and $(x^3,q_1) = \sqrt{2/\pi}\cdot\tfrac{3\pi}{8} = \tfrac38\sqrt{2\pi}$; the remainder is $x^3-\tfrac34x$, whose squared norm is $\tfrac{5\pi}{16}-\tfrac32\cdot\tfrac{3\pi}{8}+\tfrac{9}{16}\cdot\tfrac{\pi}{2} = \tfrac{\pi}{32}$, so $q_3 = \sqrt{32/\pi}\,\bigl(x^3-\tfrac34x\bigr)$.

Multiplying out the last two,

$$
q_2 = \sqrt{\tfrac{2}{\pi}}\,(2x^2-1), \qquad q_3 = \sqrt{\tfrac{2}{\pi}}\,(4x^3-3x) ,
$$

so the outputs are $\sqrt{1/\pi}\,T_0$ and $\sqrt{2/\pi}\,T_n$ for $n = 1,2,3$, where $T_n$ is the Chebyshev polynomial of the first kind. Other weights produce the Hermite, Laguerre and Jacobi families the same way; see :ref[orthogonal polynomials]{to=spec.orthogonal-polynomials-general}. Physically these are the eigenfunction families in which a separable problem is expanded, and the nested-span property of the construction is what makes a truncated expansion the best approximation of its degree.

**Orthonormalising a basis set.** In electronic-structure calculations the trial orbitals supplied by chemistry are not orthogonal, and the overlap matrix $S_{ij} = (\phi_j,\phi_i)$ clutters every formula. Gram-Schmidt replaces them by an orthonormal set spanning the same space, after which the Hamiltonian matrix elements can be read off directly. If $A$ is the matrix whose columns are the coefficients of the orbitals in some orthonormal reference set, then $S = A^{*}A$, so $A = QR$ gives $S = R^{*}R$ with $R$ upper triangular and positive on the diagonal: Gram-Schmidt on the orbitals is the Cholesky factorization of their overlap matrix. The same step appears whenever a numerical scheme must keep a set of computed vectors from drifting into near-dependence: orthogonalising the Krylov vectors $v, Av, A^2v,\dots$ is the Arnoldi and Lanczos iteration, and repeated QR factorization is the standard algorithm for the eigenvalues of a dense matrix.
:::
