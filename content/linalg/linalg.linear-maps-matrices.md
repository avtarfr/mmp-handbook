---
id: linalg.linear-maps-matrices
title: Linear maps and matrices
kind: definition
level: core
summary: Linear maps, their kernel and image, the matrix of a map in a chosen pair of ordered bases, and the rules by which composition becomes matrix multiplication and a change of basis becomes a similarity transformation.
prereqs: [linalg.vector-spaces-bases]
provenance: adapted
sources:
  - work: lee-2013
    loc: "App. B, \"Linear Maps\" (linearity, kernel, image, isomorphism), pp. 622–623; matrix of a map and matrix multiplication, pp. 623–624; invertibility, Exercise B.19, p. 625; \"Change of Basis\", transition matrix and eq. (B.2), pp. 625–626; dimension of $L(V;W)$, p. 626"
    pages: "622-626"
    role: definitions of linear map, kernel, image, isomorphism; matrix in a pair of bases; composition as matrix product; change-of-basis and similarity formulas; the space of linear maps
  - work: rhb-2006
    loc: "§8.2 (linear operators, components in a basis), eqs. (8.23)–(8.24), pp. 247–248; §8.2.1 (sums, products, inverse), p. 249; §8.15 (change of basis and similarity transformations), eqs. (8.90)–(8.94), pp. 283–284"
    pages: "247-249, 283-284"
    role: the physicists' notation for the components of an operator; the change-of-basis matrix with the convention used here, and the name "similarity transformation"
  - work: hassani-2013
    loc: "§2.3, Def. 2.3.2 (linear map, operator, endomorphism) and the vector space $\\mathcal{L}(\\mathcal{V},\\mathcal{W})$, p. 39; Box 2.3.6 (a map is fixed by its action on a basis), p. 40"
    pages: "39-40"
    role: terminology (operator, endomorphism); a linear map is determined by its values on a basis
  - work: kreyszig-1978
    loc: "Remark on notation (operators $T$, image $Tx$ without parentheses), p. 50"
    pages: "50"
    role: the notation convention for operators
---

:::definition[Linear map, kernel, image]{provenance=adapted src="lee-2013:App. B, p. 622; hassani-2013:§2.3, Def. 2.3.2, p. 39; kreyszig-1978:p. 50"}
Fix the scalar field $\mathbb{F}$ ($\mathbb{R}$ or $\mathbb{C}$), and let $V$ and $W$ both be vector spaces over it. A map $T\colon V\to W$ is **linear** if

$$
T(av + bw) = a\,Tv + b\,Tw \qquad \text{for all } v,w\in V \text{ and } a,b\in\mathbb{F}.
$$

The same scalars must act on both sides, so $V$ and $W$ having a common scalar field is part of the definition. We write $Tv$ rather than $T(v)$ except where brackets are needed for grouping.

- The **kernel** is $\ker T = \{v\in V : Tv = 0\}$ and the **image** is $\operatorname{im} T = \{Tv : v\in V\}$. Both are subspaces, of $V$ and of $W$ respectively, and $T$ is injective if and only if $\ker T = \{0\}$.
- $T$ is an **isomorphism** if it is linear and bijective; then $T^{-1}$ is linear as well, and $V$ and $W$ are **isomorphic**.
- A linear map $V\to V$ is a **linear operator** on $V$, or an **endomorphism** of $V$; a linear map $V\to\mathbb{F}$ is a **linear functional**.
- $L(V,W)$ denotes the set of linear maps $V\to W$. With $(S+T)v = Sv+Tv$ and $(cT)v = c(Tv)$ it is itself a vector space over $\mathbb{F}$.
:::

:::definition[The matrix of a linear map]{provenance=adapted src="lee-2013:App. B, pp. 623–624; rhb-2006:§8.2, eqs. (8.23)–(8.24), pp. 247–248"}
Let $E = (e_1,\dots,e_n)$ be an ordered basis of $V$ and $F = (f_1,\dots,f_m)$ one of $W$, and let $T\in L(V,W)$. Each $Te_j$ expands uniquely in $F$, and the coefficients define the **matrix of $T$ in the bases $E$ and $F$**, written $[T]_{F\leftarrow E} = A \in M_{m\times n}(\mathbb{F})$:

$$
T e_j = \sum_{i=1}^{m} A_{ij}\, f_i \qquad (j = 1,\dots,n).
$$

So the $j$th column of $A$ holds the components of $Te_j$. Writing $[v]_E\in\mathbb{F}^n$ for the column of components of $v$ in $E$,

$$
[Tv]_F = A\,[v]_E, \qquad\text{that is}\qquad (Tv)_i = \sum_{j=1}^{n} A_{ij} v_j .
$$

For an operator on $V$ we take $F = E$ and write $[T]_E$. The **product** of $A\in M_{m\times n}(\mathbb{F})$ and $B\in M_{n\times p}(\mathbb{F})$ is $(AB)_{ik} = \sum_{j=1}^{n} A_{ij}B_{jk}$, and $I_n$ is the matrix with $1$ on the diagonal and $0$ elsewhere. A square matrix $A$ is **invertible** (**nonsingular**) if $AB = BA = I_n$ for some $B$, which is then unique and written $A^{-1}$.
:::

:::statement[Matrices represent linear maps faithfully]{provenance=adapted src="lee-2013:App. B, pp. 623–626, Exercises B.13 and B.19, pp. 623, 625; hassani-2013:§2.3, Box 2.3.6, p. 40"}
Let $V$, $W$ and $U$ be finite-dimensional over $\mathbb{F}$, carrying ordered bases $E$, $F$ and $G$ of lengths $n$, $m$ and $p$.

1. A linear map is determined by its values on a basis: given any $w_1,\dots,w_n\in W$ there is exactly one $T\in L(V,W)$ with $Te_j = w_j$ for $j=1,\dots,n$.
2. $T\mapsto [T]_{F\leftarrow E}$ is an isomorphism of vector spaces $L(V,W)\to M_{m\times n}(\mathbb{F})$. In particular $\dim_{\mathbb{F}} L(V,W) = mn$.
3. **Composition is multiplication.** If $T\in L(V,W)$ and $S\in L(W,U)$ then $[S\circ T]_{G\leftarrow E} = [S]_{G\leftarrow F}\,[T]_{F\leftarrow E}$, and $[\mathrm{id}_V]_E = I_n$.
4. For $n = m$, $T\in L(V,W)$ is an isomorphism if and only if $[T]_{F\leftarrow E}$ is invertible, and then $[T^{-1}]_{E\leftarrow F} = \bigl([T]_{F\leftarrow E}\bigr)^{-1}$.
:::

:::idea{provenance=original}
Two facts do all the work. A vector has exactly one expansion in a given basis, so "a vector of $V$" and "a column of $n$ scalars" carry the same information; and a linear map respects linear combinations, so "a map $V\to W$" and "a list of $n$ vectors of $W$", namely the images of the basis, also carry the same information. Compose the two translations and a map becomes a table of $mn$ scalars. Only part 3 needs a calculation, and that calculation is just the definition of the matrix product read backwards; parts 2 and 4 then follow because a bijection that respects addition, scalars and composition must carry invertibility to invertibility.
:::

:::proof{provenance=adapted src="lee-2013:App. B, pp. 623–624, Exercises B.13 and B.19, pp. 623, 625; hassani-2013:§2.3, Box 2.3.6, p. 40"}
Throughout, write $A = [T]_{F\leftarrow E}$, and recall that every $v\in V$ has one and only one expansion $v = \sum_j v_j e_j$ because $E$ is a basis (:ref[]{to=linalg.vector-spaces-bases}).

**Step 0: the matrix acts on components.** Apply $T$ to that expansion. Linearity, used $n-1$ times, gives $Tv = \sum_j v_j\,Te_j$, and inserting $Te_j = \sum_i A_{ij}f_i$ and collecting the coefficient of each $f_i$ gives
$$
Tv \;=\; \sum_{i=1}^{m}\Bigl(\sum_{j=1}^{n} A_{ij}v_j\Bigr) f_i .
$$
Since the expansion in $F$ is unique, the $i$th component of $Tv$ is $\sum_j A_{ij}v_j$, which is the identity $[Tv]_F = A[v]_E$ asserted in the definition. Every part below rests on it.

**Part 1, uniqueness.** If $S,T\in L(V,W)$ satisfy $Se_j = Te_j$ for all $j$, then for any $v = \sum_j v_j e_j$ linearity gives $Sv = \sum_j v_j Se_j = \sum_j v_j Te_j = Tv$, so $S = T$. Only linearity and the spanning half of "basis" were used here.

**Part 1, existence.** Given $w_1,\dots,w_n\in W$, define $T$ by $Tv = \sum_j v_j w_j$, where $(v_1,\dots,v_n)$ are the components of $v$ in $E$. This is a well-defined map because those components exist and are unique. It is linear because components are: the components of $av + bv'$ are $av_j + bv'_j$, whence $T(av+bv') = \sum_j (av_j+bv'_j)w_j = aTv + bTv'$. Finally $e_j$ has components $\delta_{kj}$, so $Te_j = w_j$.

**Part 2.** Write $\Phi(T) = [T]_{F\leftarrow E}$. It is linear: $(aS+bT)e_j = a\,Se_j + b\,Te_j$ by the definition of the operations on $L(V,W)$, and expanding both sides in $F$ and using uniqueness of the expansion gives $\Phi(aS+bT) = a\Phi(S)+b\Phi(T)$ entry by entry. It is injective: if $\Phi(T) = 0$ then $Te_j = 0$ for every $j$, and the zero map also sends every $e_j$ to $0$, so $T = 0$ by the uniqueness half of part 1. It is surjective: given $A\in M_{m\times n}(\mathbb{F})$, apply the existence half of part 1 to $w_j = \sum_i A_{ij}f_i$; the resulting $T$ has $\Phi(T) = A$. Hence $\Phi$ is an isomorphism. The $mn$ matrices with a single entry $1$ and the rest $0$ are a basis of $M_{m\times n}(\mathbb{F})$ — they span it, since $A = \sum_{i,j}A_{ij}$ times the $(i,j)$ one, and a vanishing combination has every coefficient zero because each coefficient *is* an entry of the combination — so $\dim_{\mathbb{F}}M_{m\times n}(\mathbb{F}) = mn$, and an isomorphism preserves dimension.

**Part 3.** Let $B = [S]_{G\leftarrow F}$, so $Sf_i = \sum_k B_{ki}g_k$. Then
$$
(S\circ T)e_j \;=\; S\Bigl(\sum_{i} A_{ij} f_i\Bigr) \;=\; \sum_i A_{ij}\,Sf_i \;=\; \sum_i A_{ij}\sum_k B_{ki} g_k \;=\; \sum_k \Bigl(\sum_i B_{ki}A_{ij}\Bigr) g_k ,
$$
the second equality by linearity of $S$ and the last by exchanging two finite sums. The bracket is $(BA)_{kj}$, so by uniqueness of the expansion in $G$ the matrix of $S\circ T$ is $BA$, which is the claim. For the identity, $\mathrm{id}_V e_j = e_j = \sum_i \delta_{ij}e_i$, so $[\mathrm{id}_V]_E = I_n$.

**Part 4, forwards.** Let $T$ be an isomorphism, so $T^{-1}$ exists and is linear. Apply part 3 to $T^{-1}\circ T = \mathrm{id}_V$ and to $T\circ T^{-1} = \mathrm{id}_W$:
$$
[T^{-1}]_{E\leftarrow F}\,A = I_n, \qquad A\,[T^{-1}]_{E\leftarrow F} = I_m .
$$
With $n = m$ these say that $A$ is invertible with $A^{-1} = [T^{-1}]_{E\leftarrow F}$.

**Part 4, backwards.** Let $A$ be invertible. By the surjectivity shown in part 2, applied to the pair of bases $F$ and $E$, there is an $S\in L(W,V)$ with $[S]_{E\leftarrow F} = A^{-1}$. Part 3 gives $[S\circ T]_E = A^{-1}A = I_n = [\mathrm{id}_V]_E$ and $[T\circ S]_F = AA^{-1} = I_m = [\mathrm{id}_W]_F$, so by the injectivity shown in part 2 we get $S\circ T = \mathrm{id}_V$ and $T\circ S = \mathrm{id}_W$. Hence $T$ is bijective, with inverse $S$. The hypothesis $n=m$ entered when $A$ was required to be square. $\square$
:::

:::statement[Change of basis and similarity]{provenance=adapted src="rhb-2006:§8.15, eqs. (8.90)–(8.94), pp. 283–284; lee-2013:App. B, Change of Basis, eqs. (B.1)–(B.2), pp. 625–626"}
Let $\tilde E = (\tilde e_1,\dots,\tilde e_n)$ be a second ordered basis of $V$ and define the **transition matrix** $P\in M_{n\times n}(\mathbb{F})$ by expanding the new basis in the old one,

$$
\tilde e_j = \sum_{i=1}^{n} P_{ij}\, e_i \qquad (j=1,\dots,n).
$$

Then $P$ is invertible, and:

1. $[v]_E = P\,[v]_{\tilde E}$ for every $v \in V$; equivalently $[v]_{\tilde E} = P^{-1}[v]_E$. Components therefore transform by $P^{-1}$ while the basis vectors transform by $P$.
2. If $\tilde F$ is a second ordered basis of $W$ with transition matrix $Q$, then for every $T\in L(V,W)$

   $$
   [T]_{\tilde F\leftarrow \tilde E} = Q^{-1}\,[T]_{F\leftarrow E}\,P .
   $$

3. For an operator $T$ on $V$, taking the same change of basis in domain and codomain gives $[T]_{\tilde E} = P^{-1}[T]_E\,P$. Two matrices $A, \tilde A\in M_{n\times n}(\mathbb{F})$ are called **similar** when $\tilde A = P^{-1}AP$ for some invertible $P$, and the passage from $A$ to $P^{-1}AP$ is a **similarity transformation**. So the matrices representing one operator in different bases are exactly the matrices similar to any one of them.
:::

:::idea{provenance=original}
A change of basis changes no vector and no map; it changes only the dictionary used to write them down. The dictionary itself is a map — the identity of $V$, read from the new basis into the old one — so the transition matrix $P$ is nothing but $[\mathrm{id}_V]_{E\leftarrow\tilde E}$. Once that is seen, there is nothing left to prove: insert identity maps on either side of $T$ and apply the composition rule of the previous statement. The inverse $P^{-1}$ appears on the domain side because the dictionary has to be read backwards there.
:::

:::proof{provenance=adapted src="rhb-2006:§8.15, eqs. (8.90)–(8.94), pp. 283–284; lee-2013:App. B, eqs. (B.1)–(B.2), pp. 625–626"}
**The transition matrix is the matrix of the identity, and is invertible.** The defining relation $\tilde e_j = \sum_i P_{ij}e_i$ says exactly that $\mathrm{id}_V\,\tilde e_j$ expands in $E$ with coefficients $P_{ij}$, that is,
$$
P = [\mathrm{id}_V]_{E\leftarrow\tilde E} .
$$
Since $\mathrm{id}_V$ is an isomorphism and both bases have the same length $n$, part 4 of the previous statement makes $P$ invertible, with $P^{-1} = [\mathrm{id}_V]_{\tilde E\leftarrow E}$.

**Part 1.** By Step 0 of the previous proof applied to $\mathrm{id}_V$ with domain basis $\tilde E$ and codomain basis $E$,
$$
[v]_E = [\mathrm{id}_V v]_E = [\mathrm{id}_V]_{E\leftarrow\tilde E}\,[v]_{\tilde E} = P\,[v]_{\tilde E},
$$
and multiplying on the left by $P^{-1}$ gives the second form. The contrast with the display defining $P$ is the whole content of the last sentence of part 1: the same matrix $P$ sends new basis vectors to old-basis data and old components to new components only after inversion.

**Part 2.** Write $T = \mathrm{id}_W\circ T\circ \mathrm{id}_V$ and read each factor in the bases that make the composition rule applicable:
$$
[T]_{\tilde F\leftarrow\tilde E} = [\mathrm{id}_W]_{\tilde F\leftarrow F}\,[T]_{F\leftarrow E}\,[\mathrm{id}_V]_{E\leftarrow\tilde E} = Q^{-1}\,[T]_{F\leftarrow E}\,P ,
$$
using part 3 of the previous statement twice, and then the identification of the two outer factors as $Q^{-1}$ and $P$ established above. Nothing here requires $n = m$.

**Part 3, the formula.** Put $W = V$, $F = E$ and $\tilde F = \tilde E$, so $Q = P$.

**Part 3, "exactly the matrices similar to it".** One inclusion is the formula just proved: any two matrices of one operator $T$, in bases $E$ and $\tilde E$, are related by $[T]_{\tilde E} = P^{-1}[T]_E P$, hence similar. For the other, let $A = [T]_E$ and let $P$ be any invertible matrix; we must produce a basis in which $T$ has matrix $P^{-1}AP$. Define $\tilde e_j = \sum_i P_{ij}e_i$. These $n$ vectors are linearly independent: if $\sum_j c_j\tilde e_j = 0$ then $\sum_i\bigl(\sum_j P_{ij}c_j\bigr)e_i = 0$, so $Pc = 0$ by uniqueness of the expansion in $E$, so $c = 0$ because $P$ is invertible. Being $n = \dim V$ independent vectors, they are a basis (:ref[]{to=linalg.vector-spaces-bases}), their transition matrix is $P$ by construction, and part 3 gives $[T]_{\tilde E} = P^{-1}AP$. $\square$
:::

:::note[What it means]{provenance=original}
Linearity is the property that lets you compute a map's effect on any vector from its effect on $n$ basis vectors, and the matrix is just the table of those $n$ answers. Everything matrices do they do because of this: multiplying matrices is doing one map after another, and inverting a matrix is undoing a map. The change-of-basis rule is the other half of the story: a matrix is a map *plus a choice of coordinates*, so the matrix changes when the coordinates do while the map does not. Quantities built from a matrix that survive $A\mapsto P^{-1}AP$ — the :ref[determinant]{to=linalg.determinants}, the trace, the :ref[eigenvalues]{to=linalg.eigenvalues-eigenvectors} — belong to the operator itself.
:::

:::remark[Conventions that differ between books]{provenance=adapted src="rhb-2006:§8.2, eq. (8.23), p. 248, and §8.15, eqs. (8.90), (8.94), pp. 283–284; lee-2013:App. B, eqs. (B.1)–(B.2), pp. 624–626; hassani-2013:§2.3, p. 39"}
- **Index placement.** We write $A_{ij}$ for the entry in row $i$ and column $j$, as :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§8.3, p. 249"} do. Lee writes $A^i_j$, with the row index raised, to fit the summation convention of tensor analysis; the matrix is the same. This handbook raises indices only in the tensor units.
- **Direction of the transition matrix.** The formulas above depend on which basis is expanded in which. We expand the *new* basis in the *old* one, so $\tilde e_j = \sum_i P_{ij} e_i$ and $[T]_{\tilde E} = P^{-1}[T]_E P$; this is the convention of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§8.15, eqs. (8.90), (8.94), pp. 283–284"}, whose $S$ is our $P$. Lee's transition matrix $B$ goes the other way, $e_i = \sum_j B^j_i \tilde e_j$, so Lee's change-of-basis formula reads $\tilde A = BAB^{-1}$. The two matrices are inverse to each other, and quoting either formula with the other book's $P$ gives the wrong answer. Check which convention a source uses before substituting.
- **Operator versus matrix.** Riley, Hobson and Bence distinguish the operator $\mathsf{A}$ from its matrix $\mathsf{A}$ of components in a basis; Hassani calls an operator on $V$ an endomorphism. We keep the distinction in the notation $[T]_{F\leftarrow E}$, because the change-of-basis statement is about it.
- **Infinite dimensions.** Parts 2–4 of the representation statement use finite bases and fail without them: an injective linear operator on an infinite-dimensional space need not be surjective (shifting a sequence one place to the right), so "injective implies invertible" is a finite-dimensional fact. See :ref[bounded operators]{to=funcan.bounded-operators}.
:::

:::example[Two operators on quadratic polynomials, in two bases]{provenance=original}
Let $V$ be the real polynomials of degree at most $2$, with the ordered basis $E = (1,\,t,\,t^2)$, and let
$$
Tp = (1+t)\,p' + p, \qquad Sp = p' .
$$
Both send $V$ to $V$: $p'$ has degree at most $1$, so $(1+t)p'$ has degree at most $2$. Both are linear, since differentiation and multiplication by a fixed polynomial are.

**Step 1: the matrices in $E$.** Apply each operator to the three basis vectors and read off the coefficients, which by the definition are the columns:
$$
T1 = 1, \quad Tt = (1+t)+t = 1+2t, \quad Tt^2 = 2t(1+t)+t^2 = 2t+3t^2,
$$
$$
S1 = 0, \quad St = 1, \quad St^2 = 2t,
$$
so
$$
[T]_E = \begin{pmatrix} 1 & 1 & 0\\ 0 & 2 & 2\\ 0 & 0 & 3\end{pmatrix},
\qquad
[S]_E = \begin{pmatrix} 0 & 1 & 0\\ 0 & 0 & 2\\ 0 & 0 & 0\end{pmatrix}.
$$

**Step 2: composition is the product.** Directly, $(S\circ T)1 = S1 = 0$, $(S\circ T)t = S(1+2t) = 2$ and $(S\circ T)t^2 = S(2t+3t^2) = 2+6t$, so
$$
[S\circ T]_E = \begin{pmatrix} 0 & 2 & 2\\ 0 & 0 & 6\\ 0 & 0 & 0\end{pmatrix},
$$
and multiplying the two matrices of step 1 in the order $[S]_E[T]_E$ gives the rows $(0,2,2)$, $(0,0,6)$, $(0,0,0)$ — the same matrix. The reversed product $[T]_E[S]_E$ has first row $(0,1,2)$ and is a different matrix, as it must be, because $T\circ S \ne S\circ T$ here: $(T\circ S)t^2 = T(2t) = 2+4t$ while $(S\circ T)t^2 = 2+6t$.

**Step 3: a second basis.** Take $\tilde E = \bigl(1,\,1+t,\,(1+t)^2\bigr)$. Expanding the new basis in the old one, $1+t = 1 + t$ and $(1+t)^2 = 1+2t+t^2$, so
$$
P = \begin{pmatrix} 1 & 1 & 1\\ 0 & 1 & 2\\ 0 & 0 & 1\end{pmatrix},
\qquad
P^{-1} = \begin{pmatrix} 1 & -1 & 1\\ 0 & 1 & -2\\ 0 & 0 & 1\end{pmatrix},
$$
the inverse being checked by multiplying out. In the variable $s = 1+t$ we have $\mathrm{d}/\mathrm{d}t = \mathrm{d}/\mathrm{d}s$ and $1+t = s$, so $T$ acts on $s^k$ by $T s^k = s\cdot k s^{k-1} + s^k = (k+1)s^k$: the new basis vectors are eigenvectors, and
$$
[T]_{\tilde E} = \begin{pmatrix} 1 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 3\end{pmatrix}.
$$
The change-of-basis statement predicts this from $[T]_E$ alone. Computing $P^{-1}[T]_E P$: first
$$
[T]_E P = \begin{pmatrix} 1 & 2 & 3\\ 0 & 2 & 6\\ 0 & 0 & 3\end{pmatrix},
\qquad\text{then}\qquad
P^{-1}\bigl([T]_E P\bigr) = \begin{pmatrix} 1 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 3\end{pmatrix},
$$
as claimed. Note $\operatorname{tr} = 6$ and $\det = 6$ for both matrices, while the matrices themselves differ.

**Step 4: a vector, both ways.** Let $v = 3 - t + 2t^2$, so $[v]_E = (3,-1,2)^{\mathsf T}$. Then $P^{-1}[v]_E = (3+1+2,\,-1-4,\,2)^{\mathsf T} = (6,-5,2)^{\mathsf T}$, which is right: substituting $t = s-1$ gives $v = 6 - 5s + 2s^2$. Now compute $Tv$ in each description. In $E$,
$$
[T]_E\,[v]_E = (3-1,\,-2+4,\,6)^{\mathsf T} = (2,2,6)^{\mathsf T} \ \longleftrightarrow\ 2 + 2t + 6t^2 ,
$$
which agrees with $Tv = (1+t)(-1+4t) + (3-t+2t^2) = (-1+3t+4t^2)+(3-t+2t^2)$. In $\tilde E$,
$$
[T]_{\tilde E}\,[v]_{\tilde E} = (1\cdot 6,\,2\cdot(-5),\,3\cdot 2)^{\mathsf T} = (6,-10,6)^{\mathsf T} \ \longleftrightarrow\ 6 - 10s + 6s^2 ,
$$
and expanding $6-10(1+t)+6(1+t)^2 = 2+2t+6t^2$ recovers the same polynomial. The two matrices are different tables; the map they tabulate is one map.
:::

:::application{provenance=original}
**Optical systems multiply.** In the paraxial approximation a light ray crossing a reference plane is described by two numbers, its height $y$ above the axis and its slope $\theta$, and every element of a rotationally symmetric system acts linearly on the pair $(y,\theta)$. Free propagation through a distance $d$ and a thin lens of focal length $f$ have the ray-transfer matrices
$$
F(d) = \begin{pmatrix} 1 & d\\ 0 & 1\end{pmatrix}, \qquad L(f) = \begin{pmatrix} 1 & 0\\ -1/f & 1\end{pmatrix},
$$
the first because $y$ grows by $d\theta$ while $\theta$ is unchanged, the second because a thin lens bends the ray without displacing it. Because composition of maps is multiplication of matrices, a whole instrument is the ordered product of its elements' matrices — right to left, in the order the light meets them. For an object at distance $u$ in front of the lens and a screen at distance $v$ behind it,
$$
F(v)\,L(f)\,F(u) = \begin{pmatrix} 1 - v/f & u+v-uv/f \\ -1/f & 1-u/f \end{pmatrix}.
$$
A sharp image means that the final height does not depend on the initial slope — all rays leaving one object point arrive at one screen point — that is, that the top-right entry vanishes. Dividing $u+v-uv/f = 0$ by $uv$ gives the thin-lens equation $1/u+1/v = 1/f$, and at that setting the top-left entry becomes $1-v/f = -v/u$, the transverse magnification. With $f = 10$ cm and $u = 15$ cm this gives $v = 30$ cm and a magnification of $-2$: twice the size, inverted. The handbook's "composition is multiplication" is thus the whole design calculus for lens systems, and the same algebra, with other $2\times 2$ matrices, is how laser resonators, electron-optical columns and beam transport lines in accelerators are analysed.

**Why physical tensors are given by their transformation law.** The moment of inertia of a rigid body is an operator $I$ on $\mathbb{R}^3$: it sends an angular velocity to the corresponding angular momentum, $\mathbf{L} = I\boldsymbol{\omega}$. That is a statement about the body, not about anyone's coordinate axes. Choosing orthonormal axes turns it into a matrix of nine numbers, and rotating the axes replaces that matrix by $P^{-1}[I]P$ — which is why textbooks define a Cartesian tensor by how its components change, and why the familiar questions about a body are asked in the similarity-invariant language of this unit. The principal moments are the :ref[eigenvalues]{to=linalg.eigenvalues-eigenvectors} of $I$, the principal axes a basis in which $[I]$ is diagonal, and the rotational kinetic energy $\tfrac12(\boldsymbol{\omega}, I\boldsymbol{\omega})$ a basis-independent number. The same remark applies verbatim to the stress and strain tensors of continuum mechanics, to the dielectric tensor of an anisotropic crystal, and — with unitary rather than merely invertible $P$ — to a change of basis in quantum mechanics, where the matrix of an observable changes but its spectrum does not.
:::
