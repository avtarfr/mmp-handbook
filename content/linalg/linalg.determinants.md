---
id: linalg.determinants
title: Determinants
kind: theorem
level: core
summary: The determinant as the unique alternating multilinear function of the columns taking the value one at the identity, with its behaviour under transposition, elementary operations, cofactor expansion and products, the non-vanishing criterion for invertibility, and its reading as a signed volume.
prereqs: [linalg.vector-spaces-bases, linalg.linear-maps-matrices, vcalc.vector-algebra, found.change-of-variables, measure.lebesgue-measure]
provenance: adapted
sources:
  - work: lee-2013
    loc: "App. B, Prop. B.26 (symmetric group and sign) and eq. (B.3), pp. 628–629; Prop. B.28 (properties), pp. 629–631; Thm B.31 and Cors. B.32–B.34 (product rule, inverse, similarity), p. 632; determinant of an operator, p. 633; Prop. B.35 (expansion by minors), pp. 633–634; Prop. B.36 (Cramer's rule for the inverse), p. 634; Prop. B.37 (triangular), p. 634; Ch. 16, the determinant as a signed volume, p. 401"
    pages: "628-634, 401"
    role: definition by permutations; the full property list; product rule and invertibility; cofactor expansion and the inverse by cofactors; invariance under similarity; the parallelepiped-volume reading
  - work: dummit-foote-2004
    loc: "§11.4, the definition of an alternating multilinear function and Prop. 22 (adjacent interchanges, the any-pair vanishing condition), p. 436; Prop. 23 and the axiomatic definition of a determinant function, p. 437; Thm 24 (existence and uniqueness), p. 437; Cor. 25 (rows, transpose), p. 438; Thm 26 (Cramer's rule) and Cor. 27 (vanishing and dependence), pp. 438–439; Thm 28 (product rule) and Thm 29 (cofactor expansion), p. 439; Thm 30 (cofactor formula for the inverse), p. 440"
    pages: "436-440"
    role: the characterisation as the unique alternating multilinear function of the columns with value 1 at the identity; the adjacent-arguments form of "alternating" and its equivalence with the any-pair form; the adjugate identity; equivalence of det A = 0 with linear dependence of the columns
  - work: rhb-2006
    loc: "§8.9 (minor, cofactor, Laplace expansion), pp. 259–260; the 3×3 determinant as a scalar triple product, eq. (8.48), p. 261; §8.9.1 (properties (i)–(vii)), pp. 261–262"
    pages: "259-262"
    role: the terms minor, cofactor and Laplace expansion; the list of elementary-operation properties; the volume of a parallelepiped in three dimensions
  - work: arfken-2013
    loc: "§2.1, definition by parity of permutations and eq. (2.10) in terms of the Levi-Civita symbol, pp. 85–86; properties, p. 87"
    pages: "85-87"
    role: the Levi-Civita form of the defining sum, and the warning that a determinant of large entries can be tiny
  - work: folland-1999
    loc: "§2.6, Thm 2.44 and its proof, pp. 73–74: for $T\\in GL(n,\\mathbb{R})$, $\\int f = \\lvert\\det T\\rvert\\int f\\circ T$ and $m(T(E)) = \\lvert\\det T\\rvert\\,m(E)$ for every Lebesgue measurable $E$"
    pages: "73-74"
    role: the measure-theoretic content of the volume statement — the linear change-of-variables rule for Lebesgue measure, used in the proof of the volume statement
---

:::definition[Sign of a permutation, and the determinant]{provenance=adapted src="lee-2013:App. B, Prop. B.26 and eq. (B.3), pp. 628–629, and Props. B.35–B.37 (minor, cofactor, transposed cofactor matrix, upper triangular), pp. 633–634; arfken-2013:§2.1, pp. 85–86; dummit-foote-2004:§11.4, p. 436 (alternating multilinear) and p. 437 (the determinant axioms); rhb-2006:§8.9 (minor, cofactor, Laplace expansion), pp. 259–260"}
Let $S_n$ be the group of bijections of $\{1,\dots,n\}$ under composition. Every $\sigma\in S_n$ is a composition of finitely many transpositions, and the number of factors is even for every such decomposition or odd for every such decomposition; accordingly $\operatorname{sgn}\sigma = +1$ or $-1$. The map $\operatorname{sgn}\colon S_n\to\{\pm 1\}$ is a group homomorphism.

For $A\in M_{n\times n}(\mathbb{F})$, with $\mathbb{F} = \mathbb{R}$ or $\mathbb{C}$, the **determinant** is

$$
\det A = \sum_{\sigma\in S_n} (\operatorname{sgn}\sigma)\, A_{1\sigma(1)}A_{2\sigma(2)}\cdots A_{n\sigma(n)} .
$$

When it is the columns that matter we write $\det(a_1,\dots,a_n)$, meaning $\det A$ for the $A$ whose $j$th column is $a_j\in\mathbb{F}^n$; $\lvert A\rvert$ is another common notation for $\det A$. For $n=0$ the sum is not empty: $S_0$ has exactly one element, the empty bijection, whose empty product of entries is $1$, so $\det A = 1$.

Auxiliary notions. A function $D\colon(\mathbb{F}^n)^n\to\mathbb{F}$ is **multilinear** if it is linear in each argument when the others are held fixed, and **alternating** if $D(a_1,\dots,a_n) = 0$ whenever $a_i = a_j$ for some $i\neq j$. For $A\in M_{n\times n}(\mathbb{F})$ and $1\le i,j\le n$, the **minor** $M_{ij}$ is the $(n-1)\times(n-1)$ matrix left after deleting row $i$ and column $j$ of $A$, and the **cofactor** is $C_{ij} = (-1)^{i+j}\det M_{ij}$. The **adjugate** $\operatorname{adj}A$ is the $n\times n$ matrix with entries $(\operatorname{adj}A)_{ij} = C_{ji}$. The matrix $A$ is **upper triangular** if $A_{ij} = 0$ whenever $i > j$.
:::

:::statement[Properties of the determinant]{provenance=adapted src="dummit-foote-2004:§11.4, Thm 24, p. 437, Cor. 25, p. 438, Cor. 27, pp. 438–439, Thms 28–29, p. 439; lee-2013:App. B, Prop. B.28, pp. 629–631, Thm B.31 and Cors. B.32–B.34, p. 632, p. 633, Props. B.35–B.37, pp. 633–634; rhb-2006:§8.9.1, properties (i)–(vii), pp. 261–262"}
Let $A, B\in M_{n\times n}(\mathbb{F})$ with $n\ge 1$.

1. **Characterisation.** $(a_1,\dots,a_n)\mapsto \det(a_1,\dots,a_n)$ is multilinear and alternating, and $\det I_n = 1$. It is the only function $(\mathbb{F}^n)^n\to\mathbb{F}$ with these three properties.
2. **Transpose.** $\det A^{\mathsf T} = \det A$. Consequently every statement below about columns holds verbatim for rows.
3. **Elementary operations.** Multiplying one column of $A$ by $c\in\mathbb{F}$ multiplies $\det A$ by $c$; interchanging two columns reverses the sign of $\det A$; adding a scalar multiple of one column to a *different* column leaves $\det A$ unchanged. Hence $\det(cA) = c^n\det A$, and $\det A = 0$ if $A$ has a zero column or two equal columns.
4. **Triangular matrices.** If $A$ is upper triangular (or lower triangular), then $\det A = A_{11}A_{22}\cdots A_{nn}$.
5. **Cofactor (Laplace) expansion.** For each fixed row index $i$ and each fixed column index $j$,

   $$
   \det A = \sum_{k=1}^{n} A_{ik}C_{ik} = \sum_{k=1}^{n} A_{kj}C_{kj} .
   $$

6. **Product rule.** $\det(AB) = (\det A)(\det B)$, hence also $\det(AB) = \det(BA)$.
7. **Invertibility.** The following are equivalent: $A$ is invertible; $\det A \neq 0$; the columns of $A$ are linearly independent. When $\det A\neq 0$,

   $$
   A^{-1} = \frac{1}{\det A}\operatorname{adj}A, \qquad \det(A^{-1}) = \frac{1}{\det A},
   $$

   and in general $A\operatorname{adj}A = (\operatorname{adj}A)A = (\det A)\,I_n$ whether or not $A$ is invertible.
8. **Similarity invariance.** $\det(PAP^{-1}) = \det A$ for every invertible $P\in M_{n\times n}(\mathbb{F})$. Therefore, if $V$ is a vector space over $\mathbb{F}$ with $\dim_{\mathbb{F}}V = n<\infty$ and $T$ is a linear operator on $V$, the number $\det T := \det [T]_E$ is the same for every ordered basis $E$ of $V$, and $T$ is an isomorphism if and only if $\det T\neq 0$.
:::

:::idea{provenance=original}
Three properties are read straight off the defining sum: it is linear in each column, because each of its $n!$ terms takes exactly one factor from each column; it reverses sign when two columns are swapped, because swapping composes every permutation with one transposition; and it equals $1$ at the identity, because only the identity permutation contributes. Four more parts are read off the same sum with no extra machinery: reindexing it by $\sigma^{-1}$ gives the transpose rule, the three elementary operations are the first two properties plus one cancellation, a triangular matrix kills every permutation but the identity, and the cofactor expansion is column linearity, followed by the observation that a last column equal to $e_n$ may simply be deleted and a count of the interchanges that move a chosen row and column into that position. Two parts need an idea beyond the sum, and both come from one lemma: a multilinear alternating function of $n$ columns is completely determined by its value on the standard basis, since expanding each column in that basis and discarding the terms with a repeated basis vector leaves exactly the permutation sum. Uniqueness is the lemma applied to a rival determinant function and the product rule is the lemma applied to $(b_1,\dots,b_n)\mapsto\det(Ab_1,\dots,Ab_n)$; the adjugate identity, the inverse and the invertibility criterion are then bookkeeping with the cofactor expansion.
:::

:::proof{provenance=adapted src="lee-2013:App. B, Prop. B.28, pp. 629–631, Thm B.31, p. 632, Props. B.35 and B.37, pp. 633–634; dummit-foote-2004:§11.4, Props. 22–23, pp. 436–437, Thm 24, p. 437, Cor. 25, p. 438, Thms 28–30, pp. 439–440"}
**Step 1: the sum is linear in each column.** Fix $q$ and a permutation $\sigma$. Among the factors $A_{1\sigma(1)},\dots,A_{n\sigma(n)}$ of the corresponding term, exactly one comes from column $q$, namely $A_{\sigma^{-1}(q)\,q}$, because $\sigma$ is a bijection. The term is therefore that entry times a product of entries from the other columns, so it is a linear function of column $q$ with the remaining columns fixed; a sum of such functions is again one.

**Step 2: $\det I_n = 1$.** If $\sigma\neq\mathrm{id}$ there is an $i$ with $\sigma(i)\neq i$, and then the factor $(I_n)_{i\sigma(i)}$ is $0$. Only $\sigma=\mathrm{id}$ survives, contributing $\operatorname{sgn}(\mathrm{id})\cdot 1\cdots 1 = 1$.

**Step 3: interchanging two columns reverses the sign.** Let $\tau\in S_n$ be the transposition of $p\neq q$ and let $A'$ be $A$ with columns $p$ and $q$ exchanged, so that $A'_{ij} = A_{i\,\tau(j)}$ for all $i,j$. Then
$$
\det A' = \sum_{\sigma\in S_n}(\operatorname{sgn}\sigma)\prod_{i=1}^{n} A_{i\,\tau(\sigma(i))} .
$$
Substitute $\rho = \tau\sigma$. As $\sigma$ runs once through $S_n$, so does $\rho$, and $\operatorname{sgn}\sigma = \operatorname{sgn}(\tau^{-1}\rho) = (\operatorname{sgn}\tau)(\operatorname{sgn}\rho) = -\operatorname{sgn}\rho$, because $\operatorname{sgn}$ is a homomorphism and a transposition is odd. The sum becomes $-\det A$.

**Step 4: equal columns give $0$.** If columns $p\neq q$ of $A$ coincide, then exchanging them returns the same matrix, so step 3 gives $\det A = -\det A$, that is $2\det A = 0$. Here the hypothesis $\mathbb{F} = \mathbb{R}$ or $\mathbb{C}$ is used: $2$ is invertible, so $\det A = 0$. With steps 1 and 2 this proves the first sentence of part 1.

**Step 5: part 2.** By definition $(A^{\mathsf T})_{ij} = A_{ji}$, so
$$
\det A^{\mathsf T} = \sum_{\sigma}(\operatorname{sgn}\sigma)\prod_{i=1}^{n} A_{\sigma(i)\,i} .
$$
In each product reindex the factors by $j = \sigma(i)$, which is legitimate because multiplication in $\mathbb{F}$ is commutative and $\sigma$ is a bijection: the product equals $\prod_{j} A_{j\,\sigma^{-1}(j)}$. Writing $\tau = \sigma^{-1}$ and using $(\operatorname{sgn}\sigma)(\operatorname{sgn}\sigma^{-1}) = \operatorname{sgn}(\mathrm{id}) = 1$ with values in $\{\pm 1\}$, so that $\operatorname{sgn}\tau = \operatorname{sgn}\sigma$, and letting $\tau$ run through $S_n$ in place of $\sigma$, the sum becomes $\det A$.

**Step 6 (the key lemma): a multilinear alternating function is its value at the standard basis, times the determinant.** Let $D\colon(\mathbb{F}^n)^n\to\mathbb{F}$ be multilinear and alternating. First, $D$ reverses sign when two arguments are exchanged: with all other arguments fixed and $x,y$ in slots $p$ and $q$, expanding $0 = D(\dots,x+y,\dots,x+y,\dots)$ by linearity in both slots gives
$$
0 = D(\dots,x,\dots,x,\dots) + D(\dots,x,\dots,y,\dots) + D(\dots,y,\dots,x,\dots) + D(\dots,y,\dots,y,\dots),
$$
whose first and last terms vanish because $D$ is alternating. Consequently $D(e_{\sigma(1)},\dots,e_{\sigma(n)}) = (\operatorname{sgn}\sigma)\,D(e_1,\dots,e_n)$: write $\sigma$ as a composition of transpositions and apply the sign reversal once per factor, the parity of the count being well defined by the definition of $\operatorname{sgn}$. Now expand each argument of $D(a_1,\dots,a_n)$ in the standard basis, $a_j = \sum_i A_{ij}e_i$, and use multilinearity in each slot in turn:
$$
D(a_1,\dots,a_n) = \sum_{i_1,\dots,i_n} A_{i_1 1}\cdots A_{i_n n}\, D(e_{i_1},\dots,e_{i_n}).
$$
Every term in which two of the indices agree has two equal arguments and so vanishes; the surviving index tuples are precisely $(\sigma(1),\dots,\sigma(n))$ for $\sigma\in S_n$. Hence
$$
D(a_1,\dots,a_n) = \Bigl(\sum_{\sigma}(\operatorname{sgn}\sigma)\prod_{j} A_{\sigma(j)\,j}\Bigr) D(e_1,\dots,e_n) = (\det A^{\mathsf T})\,D(e_1,\dots,e_n) = (\det A)\,D(e_1,\dots,e_n),
$$
the last equality by step 5.

**Step 7: part 1, uniqueness.** If $D$ is multilinear, alternating and $D(I_n) = D(e_1,\dots,e_n) = 1$, step 6 gives $D(A) = \det A$ for every $A$. So no second such function exists.

**Step 8: part 3.** Scaling column $i$ by $c$ multiplies $\det A$ by $c$, by linearity in that slot (step 1); doing it to all $n$ columns gives $\det(cA) = c^n\det A$, and taking $c=0$ in one column shows that a zero column forces $\det A = 0$. The sign change under an interchange is step 3 and the vanishing for two equal columns is step 4. Finally, for $q\neq p$, linearity in slot $q$ gives
$$
\det(\dots,a_p,\dots,a_q + c\,a_p,\dots) = \det(\dots,a_p,\dots,a_q,\dots) + c\det(\dots,a_p,\dots,a_p,\dots),
$$
and the second determinant has columns $p$ and $q$ equal, so it is $0$ by step 4. The restriction $q\neq p$ is essential: adding $c$ times a column to *itself* is scaling by $1+c$.

**Step 9: part 4.** Let $A$ be upper triangular, so $A_{ij} = 0$ whenever $i>j$. A term of the defining sum is nonzero only if $A_{i\sigma(i)}\neq 0$ for every $i$, hence only if $\sigma(i)\ge i$ for every $i$. Summing these $n$ inequalities gives $\sum_i\sigma(i)\ge\sum_i i$, with the two sides equal because $\sigma$ permutes $\{1,\dots,n\}$; so every inequality is an equality and $\sigma = \mathrm{id}$. The single surviving term is $A_{11}\cdots A_{nn}$. If instead $A$ is lower triangular, $A^{\mathsf T}$ is upper triangular with the same diagonal, and step 5 applies.

**Step 10: part 5.** *(a) A last column equal to $e_n$ may be deleted.* Let $B$ be $n\times n$ with $B_{in} = \delta_{in}$. The factor of a term that comes from column $n$ is $B_{\sigma^{-1}(n)\,n}$, which vanishes unless $\sigma(n) = n$; and for such $\sigma$ that factor is $1$. The permutations fixing $n$ are exactly those of $\{1,\dots,n-1\}$, with the same sign computed there, so $\det B$ equals the determinant of $B$ with its last row and last column removed.

*(b) Expansion along a column.* Fix $j$ and expand $a_j = \sum_i A_{ij}e_i$ in the $j$th slot. By step 1,
$$
\det A = \sum_{i=1}^{n} A_{ij}\,\det Y_{ij},
$$
where $Y_{ij}$ is $A$ with its $j$th column replaced by $e_i$.

*(c) Identifying $\det Y_{ij}$.* Move column $j$ of $Y_{ij}$ to the last position by $n-j$ interchanges of adjacent columns, then move row $i$ to the last position by $n-i$ interchanges of adjacent rows. Each column interchange reverses the sign by step 3; each row interchange does too, by step 3 applied to the transpose together with step 5. None of these moves changes the relative order of the other rows and columns, so the result is a matrix whose last column is $e_n$ and whose first $n-1$ rows and columns form exactly $A$ with row $i$ and column $j$ deleted, that is $M_{ij}$. By (a) its determinant is $\det M_{ij}$, so
$$
\det Y_{ij} = (-1)^{(n-j)+(n-i)}\det M_{ij} = (-1)^{i+j}\det M_{ij} = C_{ij}.
$$
Substituting into (b) gives $\det A = \sum_{k} A_{kj}C_{kj}$, the expansion along column $j$. For the expansion along a row, note from the definitions that $M_{ij}(A^{\mathsf T}) = \bigl(M_{ji}(A)\bigr)^{\mathsf T}$, so by step 5 the cofactors satisfy $C_{ij}(A^{\mathsf T}) = C_{ji}(A)$; expanding $\det A^{\mathsf T}$ along its column $i$ and using step 5 once more yields $\det A = \sum_k A_{ik}C_{ik}$.

**Step 11: part 6.** Fix $A$ and define $D(b_1,\dots,b_n) = \det(Ab_1,\dots,Ab_n)$. It is multilinear, because $b\mapsto Ab$ is linear and $\det$ is multilinear, and alternating, because $b_p = b_q$ forces $Ab_p = Ab_q$ and step 4 applies. The $j$th column of $AB$ is $Ab_j$, so $D(B) = \det(AB)$, while step 6 gives
$$
D(B) = (\det B)\,D(e_1,\dots,e_n) = (\det B)\,\det(Ae_1,\dots,Ae_n) = (\det B)(\det A),
$$
since $Ae_j$ is the $j$th column of $A$. Hence $\det(AB) = (\det A)(\det B)$, and the right-hand side is symmetric in $A$ and $B$, so $\det(AB) = \det(BA)$.

**Step 12: part 7.** *(a) The adjugate identity.* Fix $i$ and $j$ and consider $\sum_k A_{ik}C_{jk}$. For $i=j$ this is the row expansion of step 10, namely $\det A$. For $i\neq j$, let $A'$ be $A$ with row $j$ replaced by a copy of row $i$. Then $A'$ has two equal rows, so $\det A' = 0$ by steps 4 and 5. The minors $M_{jk}$ delete row $j$ — the only row that was altered — so $A'$ and $A$ have the same cofactors along row $j$, while $A'_{jk} = A_{ik}$. Expanding $\det A'$ along its row $j$ therefore gives $0 = \sum_k A_{ik}C_{jk}$. In both cases
$$
\sum_{k} A_{ik}\,C_{jk} = \delta_{ij}\det A ,
$$
and since $(\operatorname{adj}A)_{kj} = C_{jk}$ the left-hand side is $(A\operatorname{adj}A)_{ij}$. Hence $A\operatorname{adj}A = (\det A)I_n$ for every $A$. Applying this to $A^{\mathsf T}$, and using $C_{ij}(A^{\mathsf T}) = C_{ji}(A)$ from step 10 — which says $\operatorname{adj}(A^{\mathsf T}) = (\operatorname{adj}A)^{\mathsf T}$ — and transposing, gives $(\operatorname{adj}A)A = (\det A)I_n$.

*(b) $\det A\neq 0$ implies $A$ invertible.* Divide (a) by $\det A$: the matrix $(\det A)^{-1}\operatorname{adj}A$ is a two-sided inverse, so $A$ is invertible and $A^{-1} = (\det A)^{-1}\operatorname{adj}A$.

*(c) $A$ invertible implies $\det A\neq 0$.* By part 6 and step 2, $(\det A)(\det A^{-1}) = \det(AA^{-1}) = \det I_n = 1$, so neither factor is zero and $\det(A^{-1}) = (\det A)^{-1}$.

*(d) Dependent columns give $\det A = 0$.* If $a_q = \sum_{p\neq q}c_p a_p$, then linearity in slot $q$ writes $\det A$ as $\sum_{p\neq q}c_p$ times determinants each of which has the column $a_p$ in two different slots; all vanish by step 4.

*(e) Independent columns give $\det A\neq 0$.* The $n$ columns are then $n$ independent vectors in the $n$-dimensional space $\mathbb{F}^n$, hence a basis of it (:ref[]{to=linalg.vector-spaces-bases}). So each standard basis vector expands as $e_i = \sum_j B_{ji}a_j$ for some scalars $B_{ji}$; comparing columns, this says $AB = I_n$ for $B = (B_{ji})$. By part 6, $(\det A)(\det B) = 1$, so $\det A\neq 0$.

Items (b)–(e) give the three-way equivalence of part 7.

**Step 13: part 8.** By part 6 and step 12(c), $\det(PAP^{-1}) = (\det P)(\det A)(\det P)^{-1} = \det A$. By part 3 of the change-of-basis statement in :ref[]{to=linalg.linear-maps-matrices}, any two matrices of one operator $T$ in ordered bases of $V$ are similar, so $\det[T]_E$ does not depend on the basis and $\det T$ is well defined. Finally $T$ is an isomorphism exactly when $[T]_E$ is invertible (part 4 of the representation statement there), which by part 7 is exactly when $\det T\neq 0$. $\square$
:::

:::statement[Determinant as a signed volume]{provenance=adapted src="rhb-2006:§8.9, eq. (8.48), p. 261; lee-2013:Ch. 16, p. 401"}
Work over $\mathbb{F} = \mathbb{R}$ and let $\lambda_n$ be Lebesgue measure on $\mathbb{R}^n$.

1. For $a_1,\dots,a_n\in\mathbb{R}^n$, the parallelepiped they span,

   $$
   P(a_1,\dots,a_n) = \Bigl\{\textstyle\sum_{i=1}^{n} t_i a_i \;:\; 0\le t_i\le 1 \Bigr\},
   $$

   satisfies $\lambda_n\bigl(P(a_1,\dots,a_n)\bigr) = \lvert\det(a_1,\dots,a_n)\rvert$. It has zero volume exactly when the $a_i$ are linearly dependent.
2. More generally, if $T\colon\mathbb{R}^n\to\mathbb{R}^n$ is linear and $E\subseteq\mathbb{R}^n$ is Lebesgue measurable, then $T(E)$ is measurable and $\lambda_n(T(E)) = \lvert\det T\rvert\,\lambda_n(E)$, read with the convention $0\cdot\infty = 0$ in the one case where it is needed, $\det T = 0$ and $\lambda_n(E) = \infty$. So $\lvert\det T\rvert$ is the factor by which $T$ scales every volume, and the sign of $\det T$ records whether $T$ preserves or reverses orientation.
3. For $n=3$, if $a$, $b$, $c$ are the rows of $A$ (or, equally, its columns), then $\det A = a\cdot(b\times c)$, the scalar triple product, which is the signed volume of $P(a,b,c)$.
:::

:::idea{provenance=original}
A linear map is its own derivative, so the change-of-variables formula applies to it with a *constant* Jacobian factor and immediately gives part 2 for invertible $T$: the integral that measures $T(E)$ is $\lvert\det T\rvert$ times the one that measures $E$. A singular $T$ squashes space into a hyperplane, which has no volume at all, so both sides vanish. Part 1 is then the special case $E = [0,1]^n$, because the parallelepiped spanned by the columns of $A$ is precisely the image of the unit cube under $A$. Part 3 is a two-line computation with the cofactor expansion.
:::

:::proof{provenance=adapted src="folland-1999:§2.6, Thm 2.44, pp. 73–74"}
Throughout, identify the linear map $T$ with its matrix in the standard basis of $\mathbb{R}^n$ (:ref[]{to=linalg.linear-maps-matrices}), so that $\det T$ is the determinant of that matrix, its $j$th column is $Te_j$, and its image is the span of those columns; part 8 of the properties statement says the number $\det T$ does not depend on this choice of basis.

**Part 2, the invertible case.** Suppose $\det T\neq 0$. As a map $\mathbb{R}^n\to\mathbb{R}^n$, $T$ is of class $C^1$ (its components are linear in the coordinates), it is bijective — part 7 of the properties statement makes the matrix $T$ invertible, and the linear map given by $T^{-1}$ is then a two-sided inverse of it — and its derivative at every point is $T$ itself, because a linear map is already its own best linear approximation. So $T$ is a $C^1$ diffeomorphism of $\mathbb{R}^n$ onto $\mathbb{R}^n$ with $\det D_uT = \det T$ for every $u$. The volume rule of :ref[]{to=found.change-of-variables} then says that $T(E)$ is Lebesgue measurable for measurable $E$ and
$$
\lambda_n\bigl(T(E)\bigr) = \int_E \lvert\det D_uT\rvert\,\mathrm{d}^n u = \lvert\det T\rvert\,\lambda_n(E),
$$
the integrand being the constant $\lvert\det T\rvert$. This is Folland's Theorem 2.44, whose proof factors $T$ into elementary maps and treats each with the Fubini-Tonelli theorem.

**Part 2, the singular case.** Suppose $\det T = 0$. By part 7 of the properties statement the columns of $T$ are dependent, so $\operatorname{im}T$ has dimension at most $n-1$ and is contained in the span $H$ of some $n-1$ independent vectors $b_1,\dots,b_{n-1}$, which may be extended by a $b_n$ to a basis of $\mathbb{R}^n$ (:ref[]{to=linalg.vector-spaces-bases}). Let $R$ be the invertible linear map with $Rb_i = e_i$, so that $R(H) = \{x : x_n = 0\}$. That hyperplane is Lebesgue null: for every $N\in\mathbb{N}$ and every $\varepsilon>0$ the set $\{x : x_n = 0,\ \lvert x_i\rvert\le N\}$ sits inside the box $[-N,N]^{n-1}\times[-\varepsilon,\varepsilon]$, of measure $(2N)^{n-1}\,2\varepsilon$, so by monotonicity its measure is $0$; and $\{x_n=0\}$ is the countable union over $N$ of these sets, so it too is null (:ref[]{to=measure.lebesgue-measure}). Applying the invertible case to $R^{-1}$ gives $\lambda_n(H) = \lvert\det R^{-1}\rvert\cdot 0 = 0$. Hence $T(E)\subseteq\operatorname{im}T\subseteq H$ is a subset of a null set, so it is measurable with $\lambda_n(T(E)) = 0$, while $\lvert\det T\rvert\lambda_n(E) = 0\cdot\lambda_n(E) = 0$ as well, with the usual convention $0\cdot\infty = 0$ when $E$ has infinite measure.

**Part 2, the orientation clause.** Call an ordered basis $(v_1,\dots,v_n)$ of $\mathbb{R}^n$ positively oriented when $\det(v_1,\dots,v_n)>0$, which is the standard convention and makes $(e_1,\dots,e_n)$ positively oriented. If $T$ is invertible then $(Tv_1,\dots,Tv_n)$ is again a basis, and the $j$th column of the matrix $T\cdot(v_1\ \cdots\ v_n)$ is $Tv_j$, so the product rule gives
$$
\det(Tv_1,\dots,Tv_n) = (\det T)\,\det(v_1,\dots,v_n).
$$
Thus $T$ preserves the orientation of every basis when $\det T>0$ and reverses the orientation of every basis when $\det T<0$ — which is the content of the clause.

**Part 1.** Let $A$ be the matrix with columns $a_1,\dots,a_n$. For $t\in\mathbb{R}^n$ the vector $At$ is $\sum_i t_i a_i$, so $P(a_1,\dots,a_n) = A\bigl([0,1]^n\bigr)$. The unit cube is measurable with $\lambda_n([0,1]^n) = 1$, so part 2 gives $\lambda_n(P) = \lvert\det A\rvert$. By part 7 of the properties statement this vanishes exactly when the columns $a_1,\dots,a_n$ are linearly dependent.

**Part 3.** Let $a,b,c$ be the rows of $A$. Expanding along the first row (part 5 of the properties statement) and writing the three $2\times 2$ minors out,
$$
\det A = a_1(b_2c_3-b_3c_2) - a_2(b_1c_3-b_3c_1) + a_3(b_1c_2-b_2c_1).
$$
The three brackets, with the signs as shown, are the components $(b\times c)_1$, $(b\times c)_2$, $(b\times c)_3$ of the cross product (:ref[]{to=vcalc.vector-algebra}), so the right-hand side is $a\cdot(b\times c)$. Reading the same three vectors as the columns of a matrix gives the transpose, whose determinant is the same by part 2 of the properties statement. Finally, $\lvert\det A\rvert$ is the volume of $P(a,b,c)$ by part 1, and its sign is the orientation of the triple $(a,b,c)$ by the clause just proved, so $\det A$ is the signed volume. $\square$
:::

:::note[What it means]{provenance=original}
A single number decides whether a square system can be solved: $\det A\ne 0$ says the columns of $A$ are independent, so $A$ is invertible. The reason one number can do this is part 1 — demanding multilinearity, vanishing on repeated columns, and the value $1$ at the identity leaves no freedom at all, so every identity about determinants is forced. Geometrically $\lvert\det A\rvert$ is the volume of the box spanned by the columns, which is why it vanishes exactly when the box is flat. Reach for the determinant for small matrices, for symbolic work, for the characteristic polynomial, and for Jacobians in change-of-variables formulas — not for deciding numerically whether a large matrix is close to singular.
:::

:::remark[Where the hypotheses are used, and conventions]{provenance=adapted src="dummit-foote-2004:§11.4, the definition of alternating and Prop. 22(1),(3), p. 436, the determinant axioms, p. 437, and Cor. 27, pp. 438–439; arfken-2013:§2.1, eq. (2.10), p. 86; lee-2013:App. B, eq. (B.3), p. 629"}
- **Which "alternating".** We take alternating to mean *vanishing whenever two arguments coincide*. :cite[Dummit and Foote]{work=dummit-foote-2004 loc="§11.4, p. 436"} define the word by the apparently weaker requirement that the value vanish whenever two *consecutive* arguments are equal, and then derive the any-pair form as part (3) of their Prop. 22 on the same page; it is in that sense that the word enters their determinant axioms on p. 437. For a multilinear function the two requirements are therefore the same condition, and we use the any-pair form as the axiom in part 1. Over $\mathbb{R}$ and $\mathbb{C}$ it is in turn equivalent to changing sign under an interchange of two arguments — step 6 of the proof derives the sign change from the vanishing, and setting $x=y$ in the sign change recovers $2D = 0$ and so the vanishing. The last equivalence fails over a field of characteristic $2$, where $-1 = 1$ makes every symmetric function sign-changing and only the vanishing condition gives the determinant.
- **Scalars.** Everything above except part 7 holds verbatim over any commutative ring, which is the setting of Dummit and Foote. There part 7 reads: $A$ is invertible if and only if $\det A$ is a unit of the ring. Over an integral domain, $\det A = 0$ still holds exactly when the columns are linearly dependent. Our restriction to $\mathbb{F}=\mathbb{R},\mathbb{C}$ loses nothing here.
- **Which index runs over the permutation.** We sum over permutations of the *column* index with the row index ascending. So does :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§2.1, eq. (2.10), p. 86"}, whose $D_n = \sum_{ij\ldots}\varepsilon_{ij\ldots}a_{1i}a_{2j}\cdots$ is our sum written with the Levi-Civita symbol $\varepsilon_{ij\ldots}$ in place of $\operatorname{sgn}\sigma$, and with the indices allowed to range freely because $\varepsilon$ kills the non-permutations. :cite[Dummit and Foote]{work=dummit-foote-2004 loc="§11.4, Thm 24, p. 437"} do the opposite, permuting the row index: $\det A = \sum_\sigma \varepsilon(\sigma)A_{\sigma(1)1}\cdots A_{\sigma(n)n}$. That is the one genuine difference, and it changes nothing, by part 2.
- **Part 5 at $n=1$** needs the convention $\det(\,) = 1$ for the empty $0\times 0$ matrix; with it, the expansion of a $1\times1$ determinant reads $\det(a) = a$.
- **Not a numerical tool.** The defining sum has $n!$ terms and cofactor expansion is nearly as expensive, so determinants of large matrices are computed from an LU factorisation (see :ref[Linear systems and rank]{to=linalg.linear-systems}). The size of $\det A$ is also a bad proxy for conditioning: :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§2.1, p. 86"} exhibit a $3\times3$ integer matrix with entries near $10$ whose determinant is $1$, and $\det(\varepsilon I_n) = \varepsilon^n$ is tiny for a perfectly well-conditioned matrix. Use :ref[the singular value decomposition]{to=linalg.svd} or :ref[a condition number]{to=linalg.matrix-norms-conditioning} instead.
:::

:::example[A $3\times3$ determinant four ways, and a $4\times4$ by elimination]{provenance=original}
**Part A: the matrix**
$$
B = \begin{pmatrix} 2 & 1 & 0\\ 1 & -1 & 2\\ 0 & 3 & 1\end{pmatrix}.
$$

*From the definition.* With $n=3$ there are $3! = 6$ terms. Writing each as $(\operatorname{sgn}\sigma)B_{1\sigma(1)}B_{2\sigma(2)}B_{3\sigma(3)}$ and listing $\sigma$ by its values $(\sigma(1),\sigma(2),\sigma(3))$:
$$
\begin{array}{llr}
(1,2,3), & \operatorname{sgn} = +1: & +\,2\cdot(-1)\cdot 1 = -2\\
(1,3,2), & \operatorname{sgn} = -1: & -\,2\cdot 2\cdot 3 = -12\\
(2,1,3), & \operatorname{sgn} = -1: & -\,1\cdot 1\cdot 1 = -1\\
(3,2,1), & \operatorname{sgn} = -1: & -\,0\cdot(-1)\cdot 0 = 0\\
(2,3,1), & \operatorname{sgn} = +1: & +\,1\cdot 2\cdot 0 = 0\\
(3,1,2), & \operatorname{sgn} = +1: & +\,0\cdot 1\cdot 3 = 0
\end{array}
$$
Adding, $\det B = -2-12-1 = -15$.

*By cofactor expansion along the first row.* The three minors are
$$
M_{11} = \begin{pmatrix} -1 & 2\\ 3 & 1\end{pmatrix},\quad
M_{12} = \begin{pmatrix} 1 & 2\\ 0 & 1\end{pmatrix},\quad
M_{13} = \begin{pmatrix} 1 & -1\\ 0 & 3\end{pmatrix},
$$
with determinants $-7$, $1$ and $3$, so $C_{11} = -7$, $C_{12} = -1$, $C_{13} = 3$ and
$$
\det B = 2(-7) + 1(-1) + 0\cdot 3 = -15 .
$$

*By the triple product.* The rows are $a = (2,1,0)$, $b = (1,-1,2)$, $c = (0,3,1)$. Then
$$
b\times c = \bigl((-1)(1)-(2)(3),\; (2)(0)-(1)(1),\; (1)(3)-(-1)(0)\bigr) = (-7,-1,3),
$$
which is exactly the row of cofactors just computed — as part 3 of the volume statement says it must be — and $a\cdot(b\times c) = -14-1+0 = -15$. So the parallelepiped on $a,b,c$ has volume $15$, and the triple is negatively oriented.

*By the inverse.* The nine cofactors are
$$
(C_{ij}) = \begin{pmatrix} -7 & -1 & 3\\ -1 & 2 & -6\\ 2 & -4 & -3\end{pmatrix},
\qquad\text{so}\qquad
\operatorname{adj}B = (C_{ji}) = \begin{pmatrix} -7 & -1 & 2\\ -1 & 2 & -4\\ 3 & -6 & -3\end{pmatrix}.
$$
Multiplying out, $B\operatorname{adj}B = \operatorname{adj}B\,B = -15\,I_3$, confirming part 7 and giving
$$
B^{-1} = \frac{1}{-15}\operatorname{adj}B = \frac{1}{15}\begin{pmatrix} 7 & 1 & -2\\ 1 & -2 & 4\\ -3 & 6 & 3\end{pmatrix}.
$$

**Part B: a $4\times4$ determinant by elimination.** Let
$$
A = \begin{pmatrix} 2 & 1 & 0 & 3\\ 1 & -1 & 2 & 1\\ 0 & 3 & 1 & -2\\ 4 & 0 & 1 & 1\end{pmatrix}.
$$
Row-reduce with partial pivoting, counting interchanges. Column 1: the largest entry in modulus is $4$, in row 4, so interchange rows 1 and 4 (first interchange). Subtracting $\tfrac14$ and $\tfrac12$ of the new first row from rows 2 and 4 clears the column:
$$
\begin{pmatrix} 4 & 0 & 1 & 1\\ 0 & -1 & 7/4 & 3/4\\ 0 & 3 & 1 & -2\\ 0 & 1 & -1/2 & 5/2\end{pmatrix}.
$$
Column 2: the largest remaining entry is $3$, in row 3, so interchange rows 2 and 3 (second interchange), then add $\tfrac13$ of the new second row to row 3 and subtract $\tfrac13$ of it from row 4:
$$
\begin{pmatrix} 4 & 0 & 1 & 1\\ 0 & 3 & 1 & -2\\ 0 & 0 & 25/12 & 1/12\\ 0 & 0 & -5/6 & 19/6\end{pmatrix}.
$$
Column 3: $\lvert 25/12\rvert > \lvert -5/6\rvert$, so no interchange; adding $\tfrac25$ of row 3 to row 4 gives the last entry $\tfrac{19}{6}+\tfrac25\cdot\tfrac1{12} = \tfrac{19}{6}+\tfrac1{30} = \tfrac{16}{5}$. The result is upper triangular with diagonal $4,\,3,\,\tfrac{25}{12},\,\tfrac{16}{5}$.

By part 3, the determinant is left alone when a multiple of some row is added to a different row, and it flips sign at every interchange; by part 4, a triangular matrix has the product of its diagonal for determinant. Two interchanges were used, so the two sign flips cancel and
$$
\det A = (-1)^2\cdot 4\cdot 3\cdot\frac{25}{12}\cdot\frac{16}{5} = 80 .
$$
As a check, expand along the first row of $A$. Deleting row 1 and columns 1, 2, 4 gives minors of determinant $-6$, $-17$ and $-25$ (column 3 need not be touched, since $A_{13}=0$), so $C_{11} = -6$, $C_{12} = +17$, $C_{14} = +25$ and
$$
\det A = 2(-6) + 1(17) + 0 + 3(25) = -12+17+75 = 80 .
$$
The two routes agree. They cost very differently. Elimination needed one multiplier per row cleared, five in all here, and a handful of multiply-and-subtract steps; its general cost is of order $n^3$. The defining sum for a $4\times4$ already has $4! = 24$ signed products, and cofactor expansion is no better asymptotically. At $n = 20$ the comparison is $20!\approx 2.4\times 10^{18}$ terms against a few thousand arithmetic operations, which is why determinants of anything but small matrices are computed by elimination.
:::

:::application{provenance=original}
**The Jacobian factor in every change of variables is a determinant because volume is.** Part 2 of the volume statement is the linear case of the rule that an integral picks up the factor $\lvert\det D_uG\rvert$ under a substitution $x = G(u)$ (:ref[]{to=found.change-of-variables}): a smooth map is locally linear, and the determinant of its derivative is the local volume stretch. That is the whole reason that $\mathrm{d}x\,\mathrm{d}y = r\,\mathrm{d}r\,\mathrm{d}\varphi$ in the plane and $\mathrm{d}^3x = r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\varphi$ in space — the numbers $r$ and $r^2\sin\theta$ are determinants — and why a vanishing Jacobian flags a coordinate system that has collapsed, as spherical coordinates do on the polar axis. The same reading explains the sign: orientation-reversing substitutions are exactly those with negative determinant, which is why the absolute value appears in volume formulas but not in the oriented integrals of differential forms.

**Antisymmetry of fermions is the alternating property.** The state of $N$ identical fermions must change sign when any two particles are exchanged. Given $N$ one-particle orbitals $\varphi_1,\dots,\varphi_N$ and particle coordinates $x_1,\dots,x_N$ (position and spin), the Slater determinant
$$
\Psi(x_1,\dots,x_N) = \frac{1}{\sqrt{N!}}\det\bigl[\varphi_i(x_j)\bigr]_{i,j=1}^{N}
$$
does exactly that: exchanging two particles exchanges two columns, and part 3 says the value changes sign. The Pauli exclusion principle is then not an extra postulate but part 3 again — if two orbitals are equal, two rows coincide and $\Psi\equiv 0$, so that state does not exist. The product rule has a physical reading too: a change of the one-particle basis, $\varphi\mapsto U\varphi$, replaces the matrix $[\varphi_i(x_j)]$ by $U[\varphi_i(x_j)]$, so part 6 multiplies $\Psi$ by $\det U$, and with $U$ unitary $\lvert\det U\rvert = 1$ leaves the state unchanged up to a phase — which is why a Slater determinant describes an occupied *subspace* rather than a particular list of orbitals.

**Determinants decide when a homogeneous problem has a non-trivial solution.** Setting a determinant to zero is the standard route to an eigenvalue condition: the frequencies of a vibrating system come from a secular determinant $\det(K-\omega^2M) = 0$ (:ref[]{to=linalg.normal-modes}), the allowed modes of a waveguide or the energy levels in a tight-binding model come from the same kind of condition, and the independence of solutions of a linear differential equation is tested by the Wronskian determinant (:ref[]{to=ode.linear-ode-theory}). In each case the underlying fact is part 7: a square homogeneous system has a solution other than zero exactly when its determinant vanishes.
:::
