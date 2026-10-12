---
id: linalg.linear-systems
title: Linear systems and rank
kind: method
level: core
summary: Gaussian elimination with partial pivoting as a recipe for the rank and the complete solution set of Ax = b, together with the rank-nullity law and the Fredholm alternative that say in advance how many solutions and how many consistency conditions there are.
prereqs: [linalg.vector-spaces-bases, linalg.linear-maps-matrices, linalg.determinants]
provenance: adapted
sources:
  - work: lee-2013
    loc: "App. B, rank and nullity, p. 626; Thm B.20 (canonical form) and Cor. B.21 (rank-nullity law), pp. 626–627; Exercise B.22 (rank inequalities), p. 627; row rank and column rank, Prop. B.24, p. 627; Prop. B.25 (rank from submatrices), p. 628"
    pages: "626-628"
    role: rank, nullity and the rank-nullity law; equality of row and column rank; the nonsingular-submatrix criterion for rank
  - work: rhb-2006
    loc: "§8.18 (simultaneous linear equations), pp. 292–293; §8.18.1 (range, null space, eq. (8.119), and the three cases), pp. 293–295; §8.18.2 (square systems), p. 295; §27.3.1 (Gaussian elimination with interchange), pp. 995–996"
    pages: "292-295, 995-996"
    role: the no-solution / unique / infinitely-many trichotomy and the augmented-matrix rank test; the solution set as a coset of the null space; Gaussian elimination with row interchange and why it is needed
  - work: stakgold-holst-2011
    loc: "§3.4, Alternative Theorem for a System of m Equations in n Unknowns, pp. 206–208 (adjoint matrix, the Fredholm Alternative and its proof)"
    pages: "206-208"
    role: the adjoint identity, the Fredholm alternative for an m×n system, and the identification of the range of A with the orthogonal complement of the null space of its adjoint
  - work: arfken-2013
    loc: "§2.1, homogeneous and inhomogeneous linear equations, Cramer's rule, pp. 83–84"
    pages: "83-84"
    role: the determinant condition for a square homogeneous system to have only the trivial solution, and Cramer's rule as the alternative to elimination
---

:::definition[Rank, nullity, echelon form]{provenance=adapted src="lee-2013:App. B, pp. 626–627; rhb-2006:§8.18.1, pp. 293–294"}
Let $\mathbb{F} = \mathbb{R}$ or $\mathbb{C}$, let $A\in M_{m\times n}(\mathbb{F})$ and read $A$ as the linear map $\mathbb{F}^n\to\mathbb{F}^m$, $x\mapsto Ax$.

- The **rank** of $A$ is $\operatorname{rank}A = \dim_{\mathbb{F}}\operatorname{im}A$ and its **nullity** is $\dim_{\mathbb{F}}\ker A$. Riley, Hobson and Bence call $\operatorname{im}A$ the **range** and $\ker A$ the **null space**. The **column rank** is the dimension of the span of the columns of $A$ in $\mathbb{F}^m$, the **row rank** that of the span of its rows in $\mathbb{F}^n$.
- For $b\in\mathbb{F}^m$ the **augmented matrix** $[A \mid b]\in M_{m\times (n+1)}(\mathbb{F})$ is $A$ with $b$ appended as an extra column. The system $Ax = b$ is **homogeneous** if $b = 0$ and **inhomogeneous** otherwise, and **consistent** if it has at least one solution.
- The three **elementary row operations** are: interchanging two rows; scaling a row by a nonzero scalar; adding a scalar multiple of some row to a different row.
- A matrix is in **row echelon form** if every zero row lies below every nonzero row and, in each nonzero row, the first nonzero entry (its **pivot**) stands strictly to the right of the pivot of the row above. A variable $x_j$ is **free** if column $j$ holds no pivot.
- $A^{*}\in M_{n\times m}(\mathbb{F})$ is the **adjoint** (conjugate transpose) of $A$, $(A^{*})_{ji} = \overline{A_{ij}}$; for real $A$ it is $A^{\mathsf T}$. On $\mathbb{F}^k$ we use $(u,v) = \sum_{i=1}^{k} u_i\overline{v_i}$, and $S^{\perp} = \{v : (v,s) = 0 \text{ for all } s\in S\}$.
:::

:::statement[Rank and the rank-nullity law]{provenance=adapted src="lee-2013:App. B, Cor. B.21, p. 627, Exercise B.22, p. 627, Prop. B.24, p. 627, Prop. B.25, p. 628; rhb-2006:§8.18.1, eq. (8.119), p. 293"}
Let $A\in M_{m\times n}(\mathbb{F})$ and put $r = \operatorname{rank}A$.

1. **Rank-nullity.** $r + \dim_{\mathbb{F}}\ker A = n$. More generally, if $T\colon V\to W$ is linear and $\dim_{\mathbb{F}}V<\infty$, then $\dim_{\mathbb{F}}\operatorname{im}T + \dim_{\mathbb{F}}\ker T = \dim_{\mathbb{F}}V$; note that it is the dimension of the *domain* that is split, with no hypothesis on $W$.
2. **Row rank equals column rank**, and both equal $r$; hence $\operatorname{rank}A^{\mathsf T} = \operatorname{rank}A^{*} = r$.
3. $r \le \min(m,n)$, with $r = n$ exactly when $A$ is injective and $r = m$ exactly when $A$ is surjective.
4. $r\ge k$ if and only if some $k\times k$ submatrix of $A$ (chosen by deleting rows and columns) has nonzero determinant.
5. Elementary row operations change neither the rank of a matrix nor the solution set of the system it represents when they are applied to $[A\mid b]$. If $[U\mid c]$ is any row echelon form reached from $[A\mid b]$, then $\operatorname{rank}A$ is the number of pivots of $U$.
:::

:::idea{provenance=original}
The rank-nullity law is one basis construction: glue a basis of the kernel to vectors whose images form a basis of the image, and check that the glued list is a basis of the domain. Dimension then has nowhere else to go. The other parts are that law seen from different sides. Row rank meets column rank by factoring $A$ through its own image, which writes $A$ as a product of a tall and a wide matrix and bounds the rank of the transpose. And an elementary row operation is multiplication on the left by an invertible matrix, which can change neither the kernel nor the solution set — so elimination may be trusted to report the rank, which in echelon form is visible as the number of pivots.
:::

:::proof{provenance=adapted src="lee-2013:App. B, Thm B.20 and Cor. B.21, pp. 626–627, Prop. B.24, pp. 627–628, Prop. B.25, p. 628; rhb-2006:§8.18.1, pp. 293–294"}
**Part 1.** Let $T\colon V\to W$ be linear with $\dim_{\mathbb{F}}V = N<\infty$. For any basis $(z_1,\dots,z_N)$ of $V$, linearity gives $\operatorname{im}T = \operatorname{span}(Tz_1,\dots,Tz_N)$, so $\operatorname{im}T$ is finite-dimensional; write $r = \dim\operatorname{im}T$ and $k = \dim\ker T$. Choose a basis $(u_1,\dots,u_k)$ of $\ker T$ and a basis $(w_1,\dots,w_r)$ of $\operatorname{im}T$, and for each $i$ pick $v_i\in V$ with $Tv_i = w_i$, which is possible by the definition of the image. We claim $(v_1,\dots,v_r,u_1,\dots,u_k)$ is a basis of $V$.

*Independence.* Suppose $\sum_i a_i v_i + \sum_j b_j u_j = 0$. Applying $T$ and using $Tu_j = 0$ gives $\sum_i a_i w_i = 0$, so every $a_i = 0$ because the $w_i$ are independent. The relation collapses to $\sum_j b_j u_j = 0$, so every $b_j = 0$ because the $u_j$ are independent.

*Spanning.* Let $v\in V$. Since $Tv\in\operatorname{im}T$, write $Tv = \sum_i c_i w_i$ and put $v' = \sum_i c_i v_i$. Then $T(v-v') = 0$, so $v - v'\in\ker T$ is a combination of the $u_j$, and $v = v' + (v-v')$ is a combination of the whole list.

Hence $N = r+k$, which is the general form; taking $T$ to be $x\mapsto Ax$ on $V = \mathbb{F}^n$ gives $r + \dim\ker A = n$. The argument never mentioned $\dim W$, which is the point of the closing remark of part 1.

**Part 2.** The columns of $A$ are the vectors $Ae_j$, so they span $\operatorname{im}A$ and the column rank is $\operatorname{rank}A = r$. Choose a basis of the $r$-dimensional subspace $\operatorname{im}A$. Writing the map $x\mapsto Ax$ as the composition of $\tilde A\colon\mathbb{F}^n\to\operatorname{im}A$ (the same formula, with the codomain cut down) and the inclusion $\iota\colon\operatorname{im}A\to\mathbb{F}^m$, the composition rule of :ref[]{to=linalg.linear-maps-matrices} gives a factorisation
$$
A = B\,C, \qquad C\in M_{r\times n}(\mathbb{F}),\quad B\in M_{m\times r}(\mathbb{F}),
$$
with $C$ the matrix of $\tilde A$ and $B$ the matrix of $\iota$ in the chosen basis. Transposing, $A^{\mathsf T} = C^{\mathsf T}B^{\mathsf T}$. Now $\operatorname{im}(C^{\mathsf T}B^{\mathsf T})\subseteq\operatorname{im}C^{\mathsf T}$, and $\operatorname{im}C^{\mathsf T}$ is spanned by the $r$ columns of $C^{\mathsf T}$, so $\operatorname{rank}A^{\mathsf T}\le r = \operatorname{rank}A$. Applying this inequality to $A^{\mathsf T}$ in place of $A$ gives $\operatorname{rank}A = \operatorname{rank}(A^{\mathsf T})^{\mathsf T}\le\operatorname{rank}A^{\mathsf T}$, so the two are equal. The row rank of $A$ is by definition the column rank of $A^{\mathsf T}$, that is $\operatorname{rank}A^{\mathsf T} = r$. Finally $A^{*}$ is obtained from $A^{\mathsf T}$ by conjugating every entry, and conjugating a vanishing linear combination conjugates its coefficients, so a family of vectors in $\mathbb{C}^k$ is independent exactly when the conjugated family is; hence $\operatorname{rank}A^{*} = \operatorname{rank}A^{\mathsf T} = r$.

**Part 3.** Part 1 gives $r = n - \dim\ker A\le n$, with equality exactly when $\ker A = \{0\}$, which is exactly injectivity (:ref[]{to=linalg.linear-maps-matrices}). And $\operatorname{im}A$ is a subspace of $\mathbb{F}^m$, so $r\le m$, with equality exactly when $\operatorname{im}A = \mathbb{F}^m$ — a subspace of the same finite dimension as the ambient space is the whole space (:ref[]{to=linalg.vector-spaces-bases}) — which is surjectivity.

**Part 4.** Suppose $r\ge k$. Then $A$ has $k$ independent columns; the $m\times k$ submatrix $A'$ they form has rank $k$, so by part 2 it has $k$ independent rows. The $k\times k$ submatrix $A''$ cut from those rows has row rank $k$, hence by part 2 again column rank $k$, so its columns are independent and $\det A''\neq 0$ by part 7 of the properties statement in :ref[]{to=linalg.determinants}. Conversely, let some $k\times k$ submatrix $A''$ have $\det A''\neq 0$; its $k$ columns are then independent, by the same part 7. The $k$ columns of $A$ it was cut from are independent too: a vanishing combination of them restricts, on the chosen rows, to a vanishing combination of the columns of $A''$, forcing all coefficients to be zero. Hence $r\ge k$.

**Part 5.** Each elementary row operation on a matrix with $m$ rows is left multiplication by an invertible $E\in M_{m\times m}(\mathbb{F})$: interchanging rows $p,q$ uses the $E$ got from $I_m$ by that interchange, which is its own inverse; scaling row $p$ by $c\neq 0$ uses the diagonal $E$ with $c$ in place $p$, whose inverse has $c^{-1}$ there; and adding $c$ times row $p$ to row $q\neq p$ uses $E = I_m + cF$, where $F$ has a single entry $1$ in position $(q,p)$, whose inverse is $I_m - cF$ because $F^2 = 0$ when $q\neq p$. Since $E$ is invertible, $EAx = 0$ holds exactly when $Ax = 0$, so $\ker(EA) = \ker A$ and part 1 gives $\operatorname{rank}(EA) = n - \dim\ker(EA) = \operatorname{rank}A$. Likewise $Ax = b$ and $(EA)x = Eb$ have the same solutions, and applying the operation to the augmented matrix produces exactly $[EA\mid Eb]$. Finitely many operations compose, so both invariances survive.

For the pivot count, let $[U\mid c]$ be a row echelon form obtained from $[A\mid b]$; deleting the last column commutes with row operations, so $U$ is obtained from $A$ by the same operations and $\operatorname{rank}U = \operatorname{rank}A$. The nonzero rows of $U$ are independent. Indeed, suppose a vanishing combination $\sum_i\lambda_i\,(\text{row }i) = 0$ had some $\lambda_i\neq 0$; let $i_0$ be the smallest index with $\lambda_{i_0}\neq 0$ — necessarily a nonzero row — and let $j_0$ be the column of its pivot. Every nonzero row below $i_0$ has its first nonzero entry strictly to the right of column $j_0$, by the echelon condition, so its entry in column $j_0$ vanishes; the rows above $i_0$ carry coefficient $0$; and zero rows contribute nothing. So the entry of the combination in column $j_0$ is $\lambda_{i_0}U_{i_0j_0}\neq 0$, a contradiction. Hence the row rank of $U$ is its number of nonzero rows, which is its number of pivots, and by part 2 this equals $\operatorname{rank}U = \operatorname{rank}A$. $\square$
:::

:::statement[Solvability of Ax = b]{provenance=adapted src="rhb-2006:§8.18.1, pp. 293–295, and §8.18.2, p. 295; arfken-2013:§2.1, pp. 83–84"}
Let $A\in M_{m\times n}(\mathbb{F})$, $b\in\mathbb{F}^m$ and $r = \operatorname{rank}A$.

1. $Ax = b$ is consistent exactly when $b\in\operatorname{im}A$, equivalently when $\operatorname{rank}[A\mid b] = r$. In the remaining case $\operatorname{rank}[A\mid b] = r+1$ and no solution exists.
2. If $x_{\mathrm p}$ is one solution, the solution set is exactly the coset $x_{\mathrm p} + \ker A$, so it is an affine subspace of $\mathbb{F}^n$ of dimension $n-r$. It is a single point when $r = n$ and is infinite when $r<n$.
3. The homogeneous system $Ax = 0$ always has the solution $x=0$, and has a nonzero solution if and only if $r<n$. If $m<n$ then $r\le m<n$, so a homogeneous system with fewer equations than unknowns always has nonzero solutions.
4. For a square system ($m = n$) the following are equivalent: $r = n$; $\det A\neq 0$; $\ker A = \{0\}$; $Ax = b$ has exactly one solution for every $b\in\mathbb{F}^n$. If instead $\det A = 0$, then for each $b$ the system has either no solution or infinitely many.
:::

:::idea{provenance=original}
Read the system columnwise: $Ax = b$ says that $b$ is the combination of the columns of $A$ with coefficients $x$. Existence then asks whether $b$ lies in the column span, which is why appending $b$ as an extra column and comparing ranks settles it. Uniqueness asks whether the columns satisfy a relation, that is whether $\ker A$ is trivial, and rank-nullity converts that into the count $n-r$. The square case is special only because a single number, the determinant, detects $r=n$.
:::

:::proof{provenance=adapted src="rhb-2006:§8.18.1, pp. 293–295, and §8.18.2, p. 295; arfken-2013:§2.1, pp. 83–84"}
**Part 1.** Writing $a_1,\dots,a_n$ for the columns of $A$, the definition of the matrix product gives $Ax = \sum_j x_j a_j$. So the right-hand sides that can be achieved are exactly the elements of $\operatorname{span}(a_1,\dots,a_n) = \operatorname{im}A$: the system is consistent precisely when $b\in\operatorname{im}A$. The columns of $[A\mid b]$ span $\operatorname{span}(a_1,\dots,a_n,b)$. If $b\in\operatorname{im}A$ this is $\operatorname{im}A$, of dimension $r$. If $b\notin\operatorname{im}A$ then $b$ is independent of a basis of $\operatorname{im}A$ — a relation would express $b$ in terms of it — so adjoining it raises the dimension by exactly one and $\operatorname{rank}[A\mid b] = r+1$.

**Part 2.** Let $Ax_{\mathrm p} = b$. For any $x$, linearity gives $Ax - b = A(x - x_{\mathrm p})$, so $Ax = b$ holds exactly when $x - x_{\mathrm p}\in\ker A$, that is exactly when $x\in x_{\mathrm p}+\ker A$. This coset is an affine subspace whose dimension is $\dim\ker A = n-r$ by rank-nullity. If $r = n$ then $\ker A = \{0\}$ and the coset is the single point $x_{\mathrm p}$. If $r<n$ then $\ker A$ contains a nonzero $y$, hence all its scalar multiples $ty$, $t\in\mathbb{F}$, which are distinct because $\mathbb{F}$ is infinite; so the solution set is infinite.

**Part 3.** $A0 = 0$, so the homogeneous system is always consistent. A nonzero solution exists exactly when $\ker A\neq\{0\}$, that is when $n - r>0$ by rank-nullity. If $m<n$ then part 3 of the rank statement gives $r\le m<n$, so this happens automatically.

**Part 4.** Let $m=n$. By rank-nullity, $r=n$ is equivalent to $\ker A = \{0\}$. By part 7 of the properties statement in :ref[]{to=linalg.determinants}, $\det A\neq 0$ is equivalent to the $n$ columns of $A$ being independent, which — the columns spanning $\operatorname{im}A$ — is equivalent to $r = n$. If $r=n$ then $A$ is invertible, so $x = A^{-1}b$ solves the system and is its only solution by part 2; conversely, if for some $b$ there is exactly one solution, then by part 2 the coset $x_{\mathrm p}+\ker A$ is a single point, so $\ker A=\{0\}$ and $r=n$. Finally, if $\det A = 0$ then $r<n$ and $\ker A\neq\{0\}$; for a given $b$, either $b\notin\operatorname{im}A$ and there is no solution, or $b\in\operatorname{im}A$ and part 2 makes the solution set an infinite coset. $\square$
:::

:::statement[The Fredholm alternative in finite dimensions]{provenance=adapted src="stakgold-holst-2011:§3.4, Alternative Theorem, pp. 206–208"}
Let $A\in M_{m\times n}(\mathbb{F})$ and $b\in\mathbb{F}^m$.

1. **Adjoint identity.** $(Ax, v) = (x, A^{*}v)$ for all $x\in\mathbb{F}^n$ and $v\in\mathbb{F}^m$, and $A^{*}$ is the only matrix with this property.
2. $\operatorname{im}A = (\ker A^{*})^{\perp}$. Hence $Ax = b$ is consistent **if and only if** $(b,v) = 0$ for every $v\in\mathbb{F}^m$ satisfying $A^{*}v = 0$. These $m - \operatorname{rank}A$ independent **consistency conditions** are the whole obstruction.
3. **The alternative.** Exactly one of the following holds: (i) $Ax = b$ has a solution; (ii) there exists $v\in\mathbb{F}^m$ with $A^{*}v = 0$ and $(b,v)\neq 0$.
4. For $m = n$, either $A^{*}v = 0$ forces $v = 0$, in which case $Ax = b$ has exactly one solution for every $b$; or $A^{*}v = 0$ has $d\ge 1$ independent solutions, in which case $Ax=b$ is solvable precisely for the $b$ in a subspace of dimension $n-d$, and then has a $d$-dimensional set of solutions.
:::

:::idea{provenance=original}
One identity carries the whole theorem: $(Ax,v) = (x,A^{*}v)$. Read from left to right it says that any $v$ annihilated by $A^{*}$ is orthogonal to everything $A$ can produce, so a $v$ with $A^{*}v = 0$ and $(b,v)\neq 0$ is a certificate that $Ax=b$ has no solution. What has to be proved is that there are no obstructions beyond these, and that is a dimension count: the orthogonal complement of the image of a matrix is the kernel of its adjoint, and taking the complement of a subspace twice returns something of the original dimension, hence the original subspace.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§3.4, Alternative Theorem and its proof, pp. 207–208"}
**Part 1.** With the convention $(u,v) = \sum_i u_i\overline{v_i}$ fixed in the definition block,
$$
(Ax,v) = \sum_{i=1}^{m}\Bigl(\sum_{j=1}^{n}A_{ij}x_j\Bigr)\overline{v_i}
= \sum_{j=1}^{n}x_j\,\overline{\Bigl(\sum_{i=1}^{m}\overline{A_{ij}}\,v_i\Bigr)}
= \sum_{j=1}^{n}x_j\,\overline{(A^{*}v)_j} = (x,A^{*}v),
$$
the middle step being the exchange of two finite sums together with $\overline{\overline{z}\,w} = z\overline{w}$ and the definition $(A^{*})_{ji} = \overline{A_{ij}}$. For uniqueness, suppose $B\in M_{n\times m}(\mathbb{F})$ also satisfies $(Ax,v) = (x,Bv)$ for all $x,v$. Subtracting, $(x,(A^{*}-B)v) = 0$ for all $x$ and $v$; taking $x = (A^{*}-B)v$ gives $\sum_j\lvert((A^{*}-B)v)_j\rvert^2 = 0$, so $(A^{*}-B)v = 0$ for every $v$, that is $B = A^{*}$.

**A lemma on orthogonal complements.** *For every subspace $S$ of $\mathbb{F}^k$, $\dim S^{\perp} = k - \dim S$ and $(S^{\perp})^{\perp} = S$.* Put $s = \dim S$, choose a basis of $S$ and let $C\in M_{k\times s}(\mathbb{F})$ have those vectors as its columns, so that $S = \operatorname{im}C$. A vector $v$ lies in $S^{\perp}$ exactly when $(v,Cx) = 0$ for all $x\in\mathbb{F}^s$, equivalently — conjugating — when $(Cx,v) = 0$ for all $x$, which by part 1 is $(x,C^{*}v) = 0$ for all $x$, which as above means $C^{*}v = 0$. So
$$
S^{\perp} = \ker C^{*},
$$
and rank-nullity applied to $C^{*}\in M_{s\times k}(\mathbb{F})$, together with $\operatorname{rank}C^{*} = \operatorname{rank}C = s$ (part 2 of the rank statement), gives $\dim S^{\perp} = k - s$. Next, $S\subseteq(S^{\perp})^{\perp}$: if $y\in S$ and $v\in S^{\perp}$ then $(v,y) = 0$ by definition of $S^{\perp}$, hence $(y,v) = \overline{(v,y)} = 0$. Applying the dimension formula twice, $\dim(S^{\perp})^{\perp} = k - (k-s) = s = \dim S$, and a subspace of the same finite dimension as the space containing it is that space, so $(S^{\perp})^{\perp} = S$.

**Part 2.** Taking $C = A$ in the lemma's computation gives $(\operatorname{im}A)^{\perp} = \ker A^{*}$. Taking complements and using the lemma with $S = \operatorname{im}A$,
$$
\operatorname{im}A = \bigl((\operatorname{im}A)^{\perp}\bigr)^{\perp} = (\ker A^{*})^{\perp}.
$$
Combined with part 1 of the solvability statement, $Ax = b$ is consistent exactly when $b\in(\ker A^{*})^{\perp}$, that is exactly when $(b,v) = 0$ for every $v$ with $A^{*}v = 0$. Let $v^{(1)},\dots,v^{(d)}$ be a basis of $\ker A^{*}$; since $(b,v)$ is linear in $b$ and conjugate-linear in $v$, the whole family of conditions is equivalent to the $d$ equations $(b,v^{(i)}) = 0$. Here $d = m - \operatorname{rank}A^{*} = m - \operatorname{rank}A$ by rank-nullity and part 2 of the rank statement. These $d$ conditions are independent: the map $b\mapsto\bigl((b,v^{(1)}),\dots,(b,v^{(d)})\bigr)$ is linear from $\mathbb{F}^m$ to $\mathbb{F}^d$ with matrix $V^{*}$, where $V$ has the $v^{(i)}$ as columns, and $\operatorname{rank}V^{*} = \operatorname{rank}V = d$, so it is surjective and no condition is implied by the others.

**Part 3.** By part 2, statement (i) fails exactly when some $v\in\ker A^{*}$ has $(b,v)\neq 0$, which is statement (ii). So (i) and (ii) are negations of each other and exactly one holds.

**Part 4.** Let $m=n$. If $A^{*}v=0$ forces $v=0$ then $\ker A^{*} = \{0\}$, so $\operatorname{rank}A^{*} = n$ by rank-nullity and $\operatorname{rank}A = n$ by part 2 of the rank statement; part 4 of the solvability statement then gives exactly one solution for every $b$. Otherwise $d = \dim\ker A^{*}\ge 1$. By part 2 the solvable right-hand sides are exactly those in $(\ker A^{*})^{\perp} = \operatorname{im}A$, a subspace of dimension $n - d$ by the lemma. For such a $b$, part 2 of the solvability statement makes the solution set a coset of $\ker A$, whose dimension is $n - \operatorname{rank}A = n-(n-d) = d$. $\square$
:::

:::method[Gaussian elimination with partial pivoting]{provenance=adapted src="rhb-2006:§27.3.1, pp. 995–996, and §8.18.1, pp. 293–295"}
Given $A\in M_{m\times n}(\mathbb{F})$ and $b\in\mathbb{F}^m$, this returns $\operatorname{rank}A$ and the complete solution set of $Ax = b$. Work on the augmented matrix $[A\mid b]$ throughout, so that every row operation is applied to $b$ as well.

1. Set the current row $i\leftarrow 1$ and the current column $j\leftarrow 1$.
2. **Choose a pivot.** Among rows $i,\dots,m$ pick one, say row $k$, whose entry in column $j$ has the largest modulus. If that modulus is zero, column $j$ carries no pivot: set $j\leftarrow j+1$ and repeat this step (stop the elimination if $j>n$).
3. **Interchange.** Swap rows $i$ and $k$. The entry $p$ in position $(i,j)$ is now nonzero; it is the pivot of row $i$.
4. **Eliminate.** For each $k>i$, replace row $k$ by (row $k$) $-\,(A_{kj}/p)\cdot$(row $i$). Column $j$ is now zero below row $i$.
5. Set $i\leftarrow i+1$, $j\leftarrow j+1$ and go back to step 2, stopping when $i>m$ or $j>n$.
6. **Read the rank.** The result $[U\mid c]$ is in row echelon form. The number $r$ of pivots is $\operatorname{rank}A$, and the pivot columns $j_1<\dots<j_r$ identify $r$ linearly independent columns of the original $A$.
7. **Test consistency.** If some row of $[U\mid c]$ has all its first $n$ entries zero but a nonzero last entry, then $\operatorname{rank}[A\mid b] = r+1$: there is no solution. Stop.
8. **Back-substitute.** Give the $n-r$ free variables arbitrary values. Then for $i = r, r-1,\dots,1$ solve the $i$th pivot row for its pivot variable,

   $$
   x_{j_i} = \frac{1}{U_{i j_i}}\Bigl(c_i - \sum_{k>j_i} U_{ik}x_k\Bigr),
   $$

   every $x_k$ on the right being already known.
9. **Describe all solutions.** Running step 8 with all free variables $0$ gives one solution $x_{\mathrm p}$. Running it with the homogeneous right-hand side, one free variable set to $1$ and the rest to $0$, gives $n-r$ vectors that form a basis of $\ker A$. By part 2 of the solvability statement, the solution set is $x_{\mathrm p}$ plus their span.

**When it works, and how it fails.** In exact arithmetic over any field the recipe always terminates, after at most $\min(m,n)$ pivots and about $\tfrac23 n^3$ operations for a square system, and the rank and solution set it returns are exact; step 2 may then pick any nonzero entry. In floating point the choice in step 2 matters: a zero pivot halts plain elimination and a merely small one divides by a near-zero number, amplifying rounding error. Two failure modes survive pivoting. First, the computed rank is unreliable when $A$ is close to a matrix of lower rank, since whether a pivot counts as zero is then a judgement about rounding noise; use :ref[the singular value decomposition]{to=linalg.svd}. Second, partial pivoting holds every multiplier to $\lvert A_{kj}/p\rvert\le 1$ yet still permits the entries of $U$ to grow by a factor $2^{\,n-1}$ over those of $A$, and matrices attaining that bound exist; such growth is essentially never seen in practice, but it does mean the method is not unconditionally stable. See :ref[Numerical linear systems]{to=num.linear-systems-numerics} and :ref[Matrix norms and conditioning]{to=linalg.matrix-norms-conditioning}.
:::

:::note[What it means]{provenance=original}
The rank is the number of genuinely independent equations in the system, and the rank-nullity law turns it into a count: $n-r$ dimensions' worth of freedom in the unknowns, $m-r$ conditions the data must satisfy. The Fredholm alternative names those conditions explicitly — the right-hand side must be orthogonal to every solution of the homogeneous adjoint system — and that form of the answer is what generalises, unchanged in spirit, to differential and integral operators. Elimination is the way all of this is actually computed: one sweep produces the rank, the consistency test and a basis of the null space at once.
:::

:::remark[Where the hypotheses are used, and conventions]{provenance=adapted src="stakgold-holst-2011:§3.4, pp. 206–208; rhb-2006:§8.18.1, p. 293; arfken-2013:§2.1, pp. 83–84"}
- **Real versus complex adjoint.** Stakgold and Holst state the alternative for real matrices, where $A^{*}$ is the transpose. Over $\mathbb{C}$ the conjugate is required: with the convention $(u,v) = \sum_i u_i\overline{v_i}$ used here, $(Ax,v) = (x,A^{*}v)$ holds for the conjugate transpose and fails for the plain transpose. Taking the transpose by mistake gives wrong consistency conditions as soon as $A$ has non-real entries.
- **Finite dimensions.** Part 2 of the Fredholm statement uses that $\operatorname{im}A$ is finite-dimensional, hence closed. For operators on infinite-dimensional spaces the clean equality $\operatorname{im}A = (\ker A^{*})^{\perp}$ becomes $\overline{\operatorname{im}A} = (\ker A^{*})^{\perp}$, and a closed-range hypothesis is needed to recover the finite-dimensional form; this is the content of the Fredholm theory of :ref[compact operators]{to=funcan.compact-operators}.
- **"Fewer equations than unknowns" is about rank, not shape.** Part 3 of the solvability statement uses $m<n$ only through $r\le m$. A system with many more equations than unknowns can still be underdetermined, if its rank is small.
- **The square case is not the general case.** The determinant test in part 4 of the solvability statement needs $m=n$; for rectangular $A$ its determinantal substitute is part 4 of the rank statement.
- **Cramer's rule is not a method.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§2.1, pp. 83–84"} solve small systems by ratios of determinants, which suits $2\times2$ and $3\times3$ systems and symbolic work; its cost grows factorially, so beyond that elimination is the method.
:::

:::example[Three equations, five unknowns, one consistency condition]{provenance=original}
Take $\mathbb{F} = \mathbb{R}$ and
$$
A = \begin{pmatrix} 1 & 2 & -1 & 0 & 3\\ 2 & 4 & -1 & 1 & 5\\ 3 & 6 & -2 & 1 & 8\end{pmatrix},
\qquad b = \begin{pmatrix} 1\\ 3\\ 4\end{pmatrix}.
$$
(The third row of $A$ is the sum of the first two, which is what will make the system degenerate; the recipe does not need to be told this.)

**Steps 1–3: the first pivot.** In column 1 the entry of largest modulus among rows $1,2,3$ is the $3$ in row 3, so interchange rows 1 and 3 of $[A\mid b]$:
$$
\left(\begin{array}{ccccc|c} 3 & 6 & -2 & 1 & 8 & 4\\ 2 & 4 & -1 & 1 & 5 & 3\\ 1 & 2 & -1 & 0 & 3 & 1\end{array}\right).
$$

**Step 4: eliminate.** Subtract $\tfrac23$ of the first row from the second and $\tfrac13$ of it from the third:
$$
\left(\begin{array}{ccccc|c} 3 & 6 & -2 & 1 & 8 & 4\\ 0 & 0 & 1/3 & 1/3 & -1/3 & 1/3\\ 0 & 0 & -1/3 & -1/3 & 1/3 & -1/3\end{array}\right).
$$

**Step 2 again: a column with no pivot.** Column 2 is now zero in rows 2 and 3, so it carries no pivot and we move to column 3. There the two candidates $1/3$ and $-1/3$ have equal modulus; take the first, in row 2, as the pivot. Adding row 2 to row 3 clears it:
$$
[U\mid c] = \left(\begin{array}{ccccc|c} 3 & 6 & -2 & 1 & 8 & 4\\ 0 & 0 & 1/3 & 1/3 & -1/3 & 1/3\\ 0 & 0 & 0 & 0 & 0 & 0\end{array}\right).
$$

**Step 6: the rank.** $U$ is in row echelon form with two pivots, so $\operatorname{rank}A = 2$ by part 5 of the rank statement, and the pivot columns $j_1 = 1$, $j_2 = 3$ pick out two independent columns of the original $A$, namely $(1,2,3)^{\mathsf T}$ and $(-1,-1,-2)^{\mathsf T}$. Rank-nullity then predicts $\dim\ker A = 5-2 = 3$ before any solving is done, and part 4 of the rank statement gives an independent check: the $2\times2$ submatrix of $A$ in rows $1,2$ and columns $1,3$ is $\begin{pmatrix}1 & -1\\ 2 & -1\end{pmatrix}$ with determinant $1\neq 0$, so $\operatorname{rank}A\ge 2$, while $\operatorname{rank}A = 2$ says every $3\times3$ submatrix is singular.

**Step 7: consistency.** The zero row of $U$ has a zero entry in the last column, so the system is consistent.

**Step 8: back-substitution.** The free variables are $x_2$, $x_4$, $x_5$ — the non-pivot columns. The second pivot row gives
$$
\tfrac13 x_3 = \tfrac13 - \tfrac13 x_4 + \tfrac13 x_5, \qquad\text{so}\qquad x_3 = 1 - x_4 + x_5 ,
$$
and the first pivot row then gives
$$
3x_1 = 4 - 6x_2 + 2x_3 - x_4 - 8x_5 = 6 - 6x_2 - 3x_4 - 6x_5, \qquad\text{so}\qquad x_1 = 2 - 2x_2 - x_4 - 2x_5 .
$$

**Step 9: all solutions.** Setting the free variables to zero gives $x_{\mathrm p} = (2,0,1,0,0)^{\mathsf T}$, and indeed $Ax_{\mathrm p} = (2-1,\,4-1,\,6-2)^{\mathsf T} = (1,3,4)^{\mathsf T} = b$. Setting one free variable to $1$ and the others to $0$ with $b$ replaced by $0$ gives three kernel vectors,
$$
k_1 = \begin{pmatrix}-2\\ 1\\ 0\\ 0\\ 0\end{pmatrix},\quad
k_2 = \begin{pmatrix}-1\\ 0\\ -1\\ 1\\ 0\end{pmatrix},\quad
k_3 = \begin{pmatrix}-2\\ 0\\ 1\\ 0\\ 1\end{pmatrix},
$$
so the solution set is $\{x_{\mathrm p}+t_1k_1+t_2k_2+t_3k_3 : t_i\in\mathbb{R}\}$, a three-dimensional affine subspace of $\mathbb{R}^5$ as predicted. Checking $k_2$: $Ak_2 = (-1+1+0,\,-2+1+1,\,-3+2+1)^{\mathsf T} = 0$. The three are independent because their last three entries form the identity pattern $(1,0,0)$, $(0,1,0)$, $(0,0,1)$ in the free positions.

**The consistency condition, found two ways.** Since $A$ is real, $A^{*} = A^{\mathsf T}$, and $A^{\mathsf T}v = 0$ says $v_1\rho_1+v_2\rho_2+v_3\rho_3 = 0$ for the rows $\rho_i$ of $A$. As $\rho_3 = \rho_1+\rho_2$ and $\rho_1,\rho_2$ are independent, this forces $v_1 = v_2 = -v_3$, so $\ker A^{\mathsf T} = \operatorname{span}\{(1,1,-1)^{\mathsf T}\}$ — of dimension $m - r = 3-2 = 1$, as part 2 of the Fredholm statement requires. The single consistency condition is therefore
$$
(b,v) = b_1+b_2-b_3 = 0,
$$
satisfied by $b = (1,3,4)^{\mathsf T}$. Elimination finds the same covector by itself: tracking the operations, the final zero row was formed as $\rho_1+\rho_2-\rho_3$, so the last entry of that row is exactly $b_1+b_2-b_3$. Replace $b$ by $(1,3,5)^{\mathsf T}$, for which $b_1+b_2-b_3 = -1$, and the same elimination ends with the row $(0\;0\;0\;0\;0\mid -1)$: step 7 reports no solution, with $\operatorname{rank}[A\mid b] = 3 = r+1$.
:::

:::application{provenance=original}
**A resistor network: why the ground node must be chosen, and why the currents must balance.** Join each pair of three nodes by a $1\,\Omega$ resistor and inject currents $I_1,I_2,I_3$ from outside. Ohm's law on each resistor and current conservation at each node give, for the node potentials $v_i$,
$$
L v = I, \qquad L = \begin{pmatrix} 2 & -1 & -1\\ -1 & 2 & -1\\ -1 & -1 & 2\end{pmatrix},
$$
the $i$th equation being $\sum_{j\neq i}(v_i-v_j) = I_i$. Every row of $L$ sums to zero, so $L(1,1,1)^{\mathsf T} = 0$: the matrix is singular, and the physics says why — adding the same constant to every potential changes no current. Part 2 of the solvability statement is then the statement that the potentials are determined exactly up to that one constant, which is what "choosing a ground" means. Because $L$ is symmetric, $\ker L^{*} = \ker L = \operatorname{span}\{(1,1,1)^{\mathsf T}\}$, and the Fredholm alternative gives the solvability condition
$$
(I,(1,1,1)^{\mathsf T}) = I_1+I_2+I_3 = 0 :
$$
Kirchhoff's current law for the network as a whole. Inject $I = (1,0,-1)^{\mathsf T}$, which satisfies it. By the symmetry $v\mapsto -v$ under swapping nodes 1 and 3, try $v = (a,0,-a)^{\mathsf T}$; the first equation reads $a+2a = 1$, so $a = \tfrac13$ and $v = (\tfrac13,0,-\tfrac13)^{\mathsf T}$, which satisfies all three equations. The effective resistance between nodes 1 and 3 is $(v_1-v_3)/1 = \tfrac23\,\Omega$ — correct, since the direct $1\,\Omega$ resistor is in parallel with the $2\,\Omega$ path through node 2, giving $(1\cdot 2)/(1+2)$. The whole pattern — a one-dimensional kernel, one consistency condition, a solution fixed up to a gauge choice — is generic for a connected network, and $L$ is its graph Laplacian.

**The same alternative, for differential operators.** The shape of the answer here is what survives into infinite dimensions, and it is the reason the Fredholm alternative is stated at all rather than just "row-reduce and see". The Neumann problem $\nabla^2u = f$ in $\Omega$ with $\partial u/\partial n = g$ on $\partial\Omega$ has constants in the kernel of its adjoint, so it is solvable only if $\int_\Omega f\,\mathrm{d}V = \oint_{\partial\Omega}g\,\mathrm{d}S$, and then only up to an additive constant (:ref[]{to=vcalc.green-identities}); a Fredholm integral equation with a degenerate kernel reduces to exactly the finite system treated here (:ref[]{to=green.separable-kernels}); and for compact operators the alternative holds in the same form, with a closed-range hypothesis replacing finite dimension (:ref[]{to=funcan.compact-operators}). In each case the consistency conditions are orthogonality to the solutions of the homogeneous adjoint problem.

**When the conditions fail: measurement data.** An overdetermined system $Ax = b$ built from measurements almost never satisfies its $m-r$ consistency conditions, because $b$ carries noise. The Fredholm alternative then says plainly that no solution exists, and the practical response is to replace "solve" by "minimise $\lVert Ax-b\rVert$", which projects $b$ onto $\operatorname{im}A$ along $\ker A^{*}$ — the same two subspaces, now used constructively (:ref[]{to=linalg.projections-least-squares}).
:::
