---
id: linalg.eigenvalues-eigenvectors
title: Eigenvalues and eigenvectors
kind: definition
level: core
summary: Defines eigenvalues, eigenvectors, eigenspaces and the characteristic polynomial, distinguishes algebraic from geometric multiplicity, and gives the diagonalizability criterion together with trace and determinant as the sum and product of the eigenvalues.
prereqs: [linalg.determinants, linalg.vector-spaces-bases]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§6.2, the rotation R_z(theta) with no eigenvector in the plane, p. 172; Defs 6.2.1, 6.2.3, 6.2.9, Props 6.2.2, 6.2.4, 6.2.6, Thm 6.2.5, Eqs (6.7)-(6.9) and Example 6.2.8, pp. 172-174"
    pages: "172-174"
    role: definitions of eigenvector, eigenspace, geometric and algebraic multiplicity, spectrum, characteristic polynomial and diagonalizability; existence of an eigenvalue over C; determinant as the product of the eigenvalues; the two multiplicities differ; the plane rotation as the example of a real matrix with no real eigenvector
  - work: rhb-2006
    loc: "§8.13, Eqs (8.67)-(8.68), pp. 272-273; §8.13.1 ('degenerate'), p. 275; §8.14, Eqs (8.85)-(8.87), p. 280"
    pages: "272-273, 275, 280"
    role: the eigenvalue equation and its normalisation; the word 'degenerate' for an eigenvalue with two independent eigenvectors; the characteristic equation; trace as the sum of the eigenvalues
  - work: arfken-2013
    loc: "§6.4, p. 313 (trace and determinant as invariants under a unitary transformation, for a Hermitian matrix) and §6.5, 'Defective Matrices', p. 324"
    pages: "313, 324"
    role: determinant and trace as the product and sum of the eigenvalues in the Hermitian case; the word 'defective'
---

:::definition[Eigenvalue, eigenvector, eigenspace]{provenance=adapted src="hassani-2013:§6.2, Defs 6.2.1 and 6.2.3, Prop 6.2.2, pp. 172-173; rhb-2006:§8.13, Eqs (8.67)-(8.68), pp. 272-273, and §8.13.1 (the word 'degenerate'), p. 275"}
Let $A$ be an $n \times n$ matrix with complex entries, $n \ge 1$, equivalently a linear operator on an $n$-dimensional complex vector space with a basis fixed. A number $\lambda \in \mathbb{C}$ is an **eigenvalue** of $A$ if

$$
A x = \lambda x \quad \text{for some } x \in \mathbb{C}^n,\ x \neq 0,
$$

and any such $x$ is an **eigenvector** of $A$ **for** $\lambda$. The zero vector is excluded; without that exclusion every $\lambda$ would qualify. Any non-zero scalar multiple of an eigenvector for $\lambda$ is again an eigenvector for $\lambda$, so a single eigenvector never comes with a preferred length; for that reason eigenvectors are usually normalised to $x^\dagger x = 1$. (When $\lambda$ has more than one independent eigenvector, as happens below, normalisation leaves far more freedom than a scalar: the choice is then a choice of basis in the eigenspace.)

The set
$$
E_\lambda = \ker(A - \lambda I) = \{x \in \mathbb{C}^n : A x = \lambda x\}
$$
is a subspace of $\mathbb{C}^n$, called the **eigenspace** of $\lambda$; its non-zero vectors are exactly the eigenvectors for $\lambda$. Its dimension $g(\lambda) = \dim E_\lambda \ge 1$ is the **geometric multiplicity** of $\lambda$, and $\lambda$ is **simple** when $g(\lambda) = 1$ and **degenerate** when $g(\lambda) \ge 2$. The set of all eigenvalues is the **spectrum** $\sigma(A)$.
:::

:::definition[Characteristic polynomial and algebraic multiplicity]{provenance=adapted src="hassani-2013:§6.2, Eqs (6.7)-(6.8) and Def 6.2.9, pp. 173-174; rhb-2006:§8.14, Eqs (8.85)-(8.86), p. 280; arfken-2013:§6.5, 'Defective Matrices', p. 324"}
$A x = \lambda x$ has a non-zero solution exactly when $A - \lambda I$ fails to be invertible. Since that happens precisely when its determinant vanishes, $\sigma(A)$ is the zero set of the **characteristic polynomial**

$$
\chi_A(\lambda) = \det(A - \lambda I),
$$

a polynomial of degree exactly $n$ in $\lambda$ with leading term $(-1)^n \lambda^n$. The equation $\chi_A(\lambda) = 0$ is the **characteristic** (or **secular**) **equation**. Over $\mathbb{C}$, if $\lambda_1, \dots, \lambda_p$ are the distinct roots then

$$
\chi_A(\lambda) = \prod_{j=1}^{p} (\lambda_j - \lambda)^{m_j}, \qquad \sum_{j=1}^{p} m_j = n,
$$

and the exponent $m_j = m(\lambda_j) \ge 1$ is the **algebraic multiplicity** of $\lambda_j$.

$A$ is **diagonalizable** if $\mathbb{C}^n$ has a basis consisting of eigenvectors of $A$; collecting such a basis $v_1,\dots,v_n$ as the columns of an invertible $S$ gives $S^{-1} A S = \operatorname{diag}(\mu_1, \dots, \mu_n)$, where $\mu_k$ is the eigenvalue of $v_k$. The $\mu_k$ are the eigenvalues listed with repetitions, each $\lambda_j$ occurring $g(\lambda_j)$ times; they are not the distinct roots $\lambda_1,\dots,\lambda_p$ above unless $p = n$. A matrix that is not diagonalizable is called **defective**.
:::

:::statement[Spectrum, trace and determinant]{provenance=adapted src="hassani-2013:Thm 6.2.5, Props 6.2.4 and 6.2.6, Eq. (6.9), pp. 173-174; rhb-2006:Eq. (8.87), p. 280; arfken-2013:§6.4, p. 313, which states part 3 for a Hermitian matrix"}
Let $A$ be an $n \times n$ complex matrix, $n \ge 1$, with distinct eigenvalues $\lambda_1, \dots, \lambda_p$ of algebraic multiplicities $m_1, \dots, m_p$. Then:

1. $A$ has at least one eigenvalue, and $\sum_j m_j = n$.
2. Eigenvectors belonging to distinct eigenvalues are linearly independent, and $E_{\lambda_i} \cap E_{\lambda_j} = \{0\}$ for $i \neq j$.
3. $\displaystyle \det A = \prod_{j=1}^{p} \lambda_j^{m_j}$ and $\displaystyle \operatorname{tr} A = \sum_{j=1}^{p} m_j \lambda_j$: the determinant is the product and the trace the sum of the $n$ eigenvalues counted with algebraic multiplicity.
4. $A$ is invertible if and only if $0 \notin \sigma(A)$.

Statement 1 uses that a non-constant polynomial over $\mathbb{C}$ has a root; over $\mathbb{R}$ it can fail. Part 3 is asserted for every complex $A$, which is the generality of Hassani's Eq. (6.9) for the determinant and of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eq. (8.87), p. 280"} for the trace; Arfken's §6.4 gives the pair only for a Hermitian matrix, as invariants of a unitary transformation.
:::

:::idea{provenance=original}
The characteristic polynomial carries three of the four claims. Its degree is exactly $n$ because, in the sum over permutations that defines the determinant, only the identity permutation keeps all $n$ diagonal entries and so reaches that degree; the fundamental theorem of algebra then hands over a root, and a root is an eigenvalue because a vanishing determinant means a non-trivial kernel. The determinant and the trace are two of the polynomial's coefficients, each computable in two ways — from the matrix entries, and from the factorization into roots — and equating the two readings is exactly the assertion that they are the product and the sum of the eigenvalues. Independence of eigenvectors for distinct eigenvalues is a separate and shorter argument: applying $A-\lambda_p I$ to a relation annihilates its last term and leaves a shorter relation.
:::

:::proof{provenance=adapted src="hassani-2013:§6.2, Thm 6.2.5, Prop 6.2.4, Prop 6.2.6 and eqs. (6.7)-(6.9), pp. 173-174; rhb-2006:§8.14, the coefficient of lambda^(N-1) and Eq. (8.87), p. 280"}
**Part 1.** By the permutation formula for the determinant (:ref[Determinants]{to=linalg.determinants}),

$$
\chi_A(\lambda) = \det(A-\lambda I) = \sum_{\sigma} \operatorname{sgn}(\sigma)\prod_{i=1}^{n}(A-\lambda I)_{i\sigma(i)} .
$$

Each factor is a polynomial in $\lambda$ of degree at most $1$, and a factor has degree $1$ only when $\sigma(i) = i$. A permutation other than the identity moves at least two indices, so its term has degree at most $n-2$; the identity contributes $\prod_{i}(A_{ii}-\lambda)$, of degree $n$ with leading term $(-1)^n\lambda^n$. Hence $\chi_A$ has degree exactly $n$ with leading coefficient $(-1)^n$, and is non-constant because $n\ge1$. The fundamental theorem of algebra gives a root $\lambda_1\in\mathbb{C}$; then $\det(A-\lambda_1I) = 0$, so $A-\lambda_1I$ is not invertible and its kernel contains some $x\neq0$ with $Ax = \lambda_1x$. So $A$ has an eigenvalue. Its eigenvalues are exactly the roots of $\chi_A$, by the same equivalence read in both directions. Factoring $\chi_A$ completely over $\mathbb{C}$ and collecting equal roots gives $\chi_A(\lambda) = c\prod_{j}(\lambda_j-\lambda)^{m_j}$; comparing degrees gives $\sum_jm_j = n$, and comparing leading coefficients gives $c(-1)^n = (-1)^n$, so $c=1$.

**Part 2.** Let $x_1,\dots,x_p$ be eigenvectors for the distinct eigenvalues $\lambda_1,\dots,\lambda_p$ and suppose $\sum_{j=1}^{p}c_jx_j = 0$. We argue by induction on $p$. For $p=1$, $c_1x_1 = 0$ with $x_1\neq0$ gives $c_1 = 0$. For $p\ge2$, apply $A-\lambda_pI$ to the relation; since $(A-\lambda_pI)x_j = (\lambda_j-\lambda_p)x_j$ and the $x_p$ term dies,

$$
\sum_{j=1}^{p-1}c_j(\lambda_j-\lambda_p)\,x_j = 0 .
$$

By the inductive hypothesis $c_j(\lambda_j-\lambda_p) = 0$ for $j<p$, and $\lambda_j\neq\lambda_p$, so $c_j = 0$ for $j<p$. The original relation then reads $c_px_p = 0$, giving $c_p = 0$ as well. For the intersection: if $v\in E_{\lambda_i}\cap E_{\lambda_j}$ with $i\neq j$ then $\lambda_iv = Av = \lambda_jv$, so $(\lambda_i-\lambda_j)v = 0$ and $v = 0$.

**Part 3.** For the determinant, evaluate both expressions for $\chi_A$ at $\lambda = 0$: the definition gives $\chi_A(0) = \det A$, and the factorization gives $\chi_A(0) = \prod_j\lambda_j^{m_j}$.

For the trace, compare the coefficients of $\lambda^{n-1}$. On the matrix side, only the identity permutation contributes in that degree, as observed in part 1, and

$$
\prod_{i=1}^{n}(A_{ii}-\lambda) = (-1)^n\lambda^n+(-1)^{n-1}\Bigl(\sum_{i=1}^{n}A_{ii}\Bigr)\lambda^{n-1}+\cdots .
$$

On the factorized side, $\chi_A(\lambda) = \prod_j(\lambda_j-\lambda)^{m_j} = (-1)^n\prod_j(\lambda-\lambda_j)^{m_j}$, a product of $n$ linear factors $\lambda-\lambda_j$ in which $\lambda_j$ appears $m_j$ times; expanding it, the coefficient of $\lambda^{n-1}$ is minus the sum of those $n$ roots, so the coefficient of $\lambda^{n-1}$ in $\chi_A$ is $(-1)^{n}\bigl(-\sum_jm_j\lambda_j\bigr) = (-1)^{n-1}\sum_jm_j\lambda_j$. Equating the two gives $\operatorname{tr}A = \sum_jm_j\lambda_j$.

**Part 4.** By part 3, $\det A = \prod_j\lambda_j^{m_j}$, which is non-zero exactly when no $\lambda_j$ equals $0$; and $A$ is invertible exactly when $\det A\neq0$ (:ref[Determinants]{to=linalg.determinants}). $\square$
:::

:::statement[The two multiplicities and diagonalizability]{provenance=original}
With the notation above:

1. $1 \le g(\lambda_j) \le m(\lambda_j)$ for every $j$.
2. $A$ is diagonalizable if and only if $g(\lambda_j) = m(\lambda_j)$ for every $j$, equivalently if and only if $\sum_j g(\lambda_j) = n$.
3. If $A$ has $n$ distinct eigenvalues, then every $m_j = 1$, so $A$ is diagonalizable. This is sufficient but not necessary: the identity matrix has one eigenvalue and is diagonal.
4. Similar matrices have the same characteristic polynomial, hence the same eigenvalues with the same algebraic multiplicities, the same trace and the same determinant; corresponding eigenspaces have the same dimension. If $B = S^{-1} A S$ and $A x = \lambda x$, then $B (S^{-1} x) = \lambda (S^{-1} x)$.
:::

:::idea{provenance=original}
Take part 4 first, since the rest leans on it: a similarity leaves $\det(A-\lambda I)$ alone, because the two copies of $S$ cancel inside the determinant. Then the bound $g\le m$ becomes visible by choosing coordinates well: put a basis of the eigenspace first, and in those coordinates the matrix begins with $g$ columns that are $\lambda$ times the first $g$ standard basis vectors, which forces $g$ factors of $(\lambda-\mu)$ out of the characteristic polynomial. The diagonalizability criterion is then a counting argument: the eigenspaces are independent of one another, so the only way to accumulate $n$ independent eigenvectors is for each eigenspace to be as large as its algebraic multiplicity allows.
:::

:::proof{provenance=original}
**Part 4** comes first, because the other parts use it. Let $B = S^{-1}AS$ with $S$ invertible. Then $B-\lambda I = S^{-1}(A-\lambda I)S$, so similarity invariance of the determinant (:ref[Determinants]{to=linalg.determinants}) gives

$$
\chi_B(\lambda) = \det\bigl(S^{-1}(A-\lambda I)S\bigr) = \det(A-\lambda I) = \chi_A(\lambda)
$$

for every $\lambda$. Equal characteristic polynomials have the same roots with the same exponents, which is the same spectrum with the same algebraic multiplicities; the trace and determinant then agree by part 3 of the previous statement. For the eigenspaces, the map $x\mapsto S^{-1}x$ is linear and injective, and it carries $E_\lambda(A)$ into $E_\lambda(B)$: if $Ax = \lambda x$ then

$$
B(S^{-1}x) = S^{-1}AS\,S^{-1}x = S^{-1}Ax = \lambda\,(S^{-1}x) .
$$

The same computation with $A$ and $B$ exchanged, and $S^{-1}$ in place of $S$, shows $y\mapsto Sy$ carries $E_\lambda(B)$ into $E_\lambda(A)$. The two maps are mutually inverse, so $E_\lambda(A)$ and $E_\lambda(B)$ are isomorphic and have the same dimension.

**Part 1.** $g(\lambda_j)\ge1$ because an eigenspace contains an eigenvector, which is non-zero by definition.

For the upper bound, write $\lambda = \lambda_j$ and $g = g(\lambda)$, choose a basis $v_1,\dots,v_g$ of $E_\lambda$, and extend it to a basis $v_1,\dots,v_n$ of $\mathbb{C}^n$ (:ref[Vector spaces and bases]{to=linalg.vector-spaces-bases}). Let $S$ be the invertible matrix with these columns, so $Se_i = v_i$, and put $B = S^{-1}AS$. For $i\le g$ the $i$th column of $B$ is

$$
Be_i = S^{-1}Av_i = S^{-1}(\lambda v_i) = \lambda e_i ,
$$

so the first $g$ columns of $B-\mu I$ are $(\lambda-\mu)e_1,\dots,(\lambda-\mu)e_g$. Expand $\det(B-\mu I)$ along its first column by cofactors (:ref[Determinants]{to=linalg.determinants}): only the $(1,1)$ entry is non-zero there, so $\det(B-\mu I) = (\lambda-\mu)\det M$, where $M$ is $B-\mu I$ with its first row and column deleted. That deletion turns the old columns $2,\dots,g$ into $(\lambda-\mu)e_1,\dots,(\lambda-\mu)e_{g-1}$, so $M$ has the same shape with $g-1$ in place of $g$. Iterating the expansion $g$ times,

$$
\chi_B(\mu) = (\lambda-\mu)^g\,q(\mu)
$$

for some polynomial $q$. By part 4, $\chi_A = \chi_B$, so $(\lambda-\mu)^g$ divides $\chi_A(\mu)$, and therefore the exponent $m(\lambda)$ in the factorization of $\chi_A$ is at least $g$.

**Part 2.** Suppose $A$ is diagonalizable and fix a basis of $\mathbb{C}^n$ of eigenvectors. Sort its members by eigenvalue, say $k_j$ of them lie in $E_{\lambda_j}$; then $\sum_jk_j = n$, and those $k_j$ members are linearly independent elements of $E_{\lambda_j}$, so $k_j\le g(\lambda_j)$. With part 1 and $\sum_jm_j = n$ from the previous statement,

$$
n = \sum_j k_j \ \le\ \sum_j g(\lambda_j) \ \le\ \sum_j m(\lambda_j) = n ,
$$

so both inequalities are equalities. Since $g(\lambda_j)\le m(\lambda_j)$ term by term, equality of the sums forces $g(\lambda_j) = m(\lambda_j)$ for every $j$.

Conversely, suppose $\sum_jg(\lambda_j) = n$; by part 1 and $\sum_jm_j = n$ this is the same condition as $g(\lambda_j) = m(\lambda_j)$ for all $j$. Choose a basis of each $E_{\lambda_j}$ and concatenate them into a list of $n$ vectors. The list is linearly independent: group a vanishing linear combination by eigenvalue as $\sum_ju_j = 0$ with $u_j\in E_{\lambda_j}$. If some $u_j$ were non-zero, the non-zero ones would be eigenvectors for distinct eigenvalues obeying a non-trivial relation, which part 2 of the previous statement forbids. So every $u_j = 0$, and then every coefficient vanishes because each chosen basis is independent. A list of $n$ independent vectors in $\mathbb{C}^n$ is a basis, and this one consists of eigenvectors, so $A$ is diagonalizable.

**Part 3.** If $A$ has $n$ distinct eigenvalues then $p = n$, and $m_j\ge1$ with $\sum_{j=1}^{n}m_j = n$ forces $m_j = 1$ for each $j$. By part 1, $1\le g(\lambda_j)\le m_j = 1$, so the two multiplicities agree and part 2 makes $A$ diagonalizable. The converse fails: $I_n$ has the single eigenvalue $1$ with $m = g = n$, and is already diagonal. $\square$
:::

:::note{provenance=original}
An eigenvector is a direction that $A$ only stretches, by the factor $\lambda$. If there are enough such directions to make a basis, $A$ acts as $n$ independent one-dimensional stretches and every question about $A$ — powers, inverses, exponentials, long-time behaviour of $\dot x = Ax$ — becomes $n$ scalar questions. The characteristic polynomial is how you find the stretch factors; the gap between algebraic and geometric multiplicity is what can stop the basis from existing.
:::

:::remark[Where the hypotheses matter]{provenance=adapted src="hassani-2013:§6.2, the rotation R_z(theta), p. 172, and Example 6.2.8, p. 174; arfken-2013:§6.5, 'Defective Matrices', p. 324"}
**The field matters.** A rotation of the plane through an angle that is not a multiple of $\pi$ moves every non-zero vector off its own line, as :cite[Hassani]{work=hassani-2013 loc="§6.2, p. 172"} observes of $R_z(\theta)$; concretely, $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ has $\chi(\lambda) = \lambda^2 + 1$ and so no real eigenvalue and no real eigenvector, although as a complex matrix it has the eigenvalues $\pm i$. All statements above are for $\mathbb{C}$; a real matrix is handled by regarding it as complex, and its non-real eigenvalues then come in conjugate pairs.

**Algebraic multiplicity does not bound geometric multiplicity from below.** For $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ the only eigenvalue is $\lambda = 1$ with $m = 2$, but $(A - I)x = 0$ forces the second component of $x$ to vanish, so $g = 1$. The matrix is defective: it has no eigenbasis, and the shortfall $m - g$ is what the Jordan form of :ref[a defective matrix]{to=linalg.jordan-form} records.

**Conventions.** Many texts use $\det(\lambda I - A)$, which is monic, instead of $\det(A - \lambda I)$; the two differ by $(-1)^n$ and have the same roots. "Degenerate" (physics) and "repeated" or "multiple" (mathematics) both signal that an eigenvalue occurs more than once, but they count different things: "repeated" refers to algebraic multiplicity, $m(\lambda)\ge2$, and "degenerate" to geometric multiplicity, $g(\lambda)\ge2$. On a defective matrix the two conditions come apart, so the words are not interchangeable there; the second example below is repeated but not degenerate. The spectrum is sometimes defined as a set and sometimes as a list with multiplicities; we take it as a set.
:::

:::example[A diagonalizable 3 by 3 matrix, worked through]{provenance=original}
Let

$$
A = \begin{pmatrix}4&1&-1\\2&5&-2\\1&1&2\end{pmatrix} .
$$

**The characteristic polynomial.** Expanding $\det(A-\lambda I)$ along the first row,

$$
\chi_A(\lambda) = (4-\lambda)\bigl[(5-\lambda)(2-\lambda)+2\bigr]-\bigl[2(2-\lambda)+2\bigr]-\bigl[2-(5-\lambda)\bigr] .
$$

Since $(5-\lambda)(2-\lambda)+2 = \lambda^2-7\lambda+12$, the three brackets give $-\lambda^3+11\lambda^2-40\lambda+48$, then $2\lambda-6$, then $3-\lambda$, so

$$
\chi_A(\lambda) = -\lambda^3+11\lambda^2-39\lambda+45 = -(\lambda-5)(\lambda-3)^2 .
$$

The factorization is checked by expanding: $(\lambda-5)(\lambda^2-6\lambda+9) = \lambda^3-11\lambda^2+39\lambda-45$. So $\sigma(A) = \{5,3\}$ with $m(5) = 1$ and $m(3) = 2$.

**First check.** $\operatorname{tr}A = 4+5+2 = 11$ and $5+3+3 = 11$; $\det A = \chi_A(0) = 45$ and $5\cdot3\cdot3 = 45$. Computing $\det A$ from the matrix independently, $4(10+2)-1(4+2)-1(2-5) = 48-6+3 = 45$.

**The eigenspaces.** For $\lambda = 5$,

$$
A-5I = \begin{pmatrix}-1&1&-1\\2&0&-2\\1&1&-3\end{pmatrix} ,
$$

whose second row gives $x_1 = x_3$ and whose first row then gives $x_2 = x_1+x_3 = 2x_1$; the third row is satisfied automatically, since $x_1+2x_1-3x_1 = 0$. So $E_5 = \operatorname{span}\{(1,2,1)\}$ and $g(5) = 1 = m(5)$.

For $\lambda = 3$,

$$
A-3I = \begin{pmatrix}1&1&-1\\2&2&-2\\1&1&-1\end{pmatrix} ,
$$

all of whose rows are multiples of $(1,1,-1)$, so the single condition is $x_1+x_2-x_3 = 0$. Hence $E_3$ is a plane, $g(3) = 2 = m(3)$, with basis $(-1,1,0)$ and $(1,0,1)$.

**Diagonalization.** Since $\sum_jg(\lambda_j) = 1+2 = 3$, part 2 of the second statement says $A$ is diagonalizable, and the three eigenvectors found are a basis. Collecting them as columns,

$$
S = \begin{pmatrix}1&-1&1\\2&1&0\\1&0&1\end{pmatrix}, \qquad \det S = 1(1)-(-1)(2)+1(-1) = 2\neq0 ,
$$

and $S^{-1}AS = \operatorname{diag}(5,3,3)$. Rather than invert $S$, verify the equivalent form $AS = S\operatorname{diag}(5,3,3)$ column by column:

$$
A\begin{pmatrix}1\\2\\1\end{pmatrix} = \begin{pmatrix}5\\10\\5\end{pmatrix}, \qquad
A\begin{pmatrix}-1\\1\\0\end{pmatrix} = \begin{pmatrix}-3\\3\\0\end{pmatrix}, \qquad
A\begin{pmatrix}1\\0\\1\end{pmatrix} = \begin{pmatrix}3\\0\\3\end{pmatrix} ,
$$

which are $5$, $3$ and $3$ times the respective columns.
:::

:::example[One entry away: a defective matrix]{provenance=original}
Change the $(2,2)$ entry of the previous matrix from $5$ to $6$:

$$
B = \begin{pmatrix}4&1&-1\\2&6&-2\\1&1&2\end{pmatrix} .
$$

The same expansion along the first row changes in two places: the first bracket becomes $(6-\lambda)(2-\lambda)+2 = \lambda^2-8\lambda+14$, and the third cofactor $\det\begin{pmatrix}2&6-\lambda\\1&1\end{pmatrix} = \lambda-4$ contributes $4-\lambda$ where it contributed $3-\lambda$ before. The middle bracket, $2(2-\lambda)+2$, is unchanged. Hence

$$
\chi_B(\lambda) = -\lambda^3+12\lambda^2-45\lambda+54 = -(\lambda-6)(\lambda-3)^2 ,
$$

so $m(6) = 1$ and $m(3) = 2$, and the two checks hold again: $\operatorname{tr}B = 12 = 6+3+3$ and $\det B = 54 = 6\cdot9$. The spectrum looks much like before. The eigenspaces do not.

For $\lambda = 6$, the rows of $B-6I = \begin{pmatrix}-2&1&-1\\2&0&-2\\1&1&-4\end{pmatrix}$ give $x_1 = x_3$ from the second and then $x_2 = 2x_1+x_3 = 3x_1$ from the first, so $E_6 = \operatorname{span}\{(1,3,1)\}$ and $g(6) = 1$.

For $\lambda = 3$,

$$
B-3I = \begin{pmatrix}1&1&-1\\2&3&-2\\1&1&-1\end{pmatrix} .
$$

Rows one and three are identical and give $x_1+x_2-x_3 = 0$; subtracting twice that from the second row leaves $x_2 = 0$, and then $x_1 = x_3$. So $E_3 = \operatorname{span}\{(1,0,1)\}$ is only a line: $g(3) = 1 < 2 = m(3)$.

Hence $\sum_jg(\lambda_j) = 1+1 = 2 < 3$, and by part 2 of the second statement $B$ has no eigenbasis: it is defective. The two multiplicities differ by exactly one, which is the amount of Jordan structure $B$ carries (:ref[Jordan normal form]{to=linalg.jordan-form}). Note how little the spectrum revealed: the trace and determinant tests passed, the eigenvalues were real and simple to find, and nothing but computing $\dim E_3$ exposed the defect.
:::

:::application{provenance=original}
**Decoupling a linear system.** The reason to want an eigenbasis is that it reduces one $n$-dimensional problem to $n$ one-dimensional ones. For $\dot x = Ax$ with $A$ diagonalizable, substituting $x = Sy$ turns the system into $\dot y = \operatorname{diag}(\lambda_k)y$, whose solutions are $y_k(t) = y_k(0)e^{\lambda_kt}$; the general solution is then a superposition $x(t) = \sum_kc_ke^{\lambda_kt}v_k$ over the eigenvectors. Every qualitative question becomes a question about where the $\lambda_k$ sit: the equilibrium is stable when all $\operatorname{Re}\lambda_k<0$, the slowest decay rate is $\max_k\operatorname{Re}\lambda_k$, and a complex conjugate pair $\alpha\pm i\beta$ is an oscillation of frequency $\beta$ with envelope $e^{\alpha t}$. The same substitution in $x_{t+1} = Ax_t$ turns a discrete model — a population projection matrix, a Markov chain, a numerical iteration — into independent geometric sequences, and the eigenvalue of largest modulus governs the long-run behaviour.

**Where the defect shows up physically.** The gap $m-g$ of the second example is not a curiosity. A damped oscillator $\ddot u+2\gamma\dot u+\omega_0^2u = 0$ written as a first-order system has a defective coefficient matrix exactly at critical damping $\gamma = \omega_0$, where the two roots coincide but only one eigenvector survives; the solution there is $(c_1+c_2t)e^{-\gamma t}$, and the factor of $t$ is what stands in for the eigenvector that is missing. The same thing produces secular growth in perturbation theory at resonance and in orbital mechanics: a repeated root with a shortfall in eigenvectors always contributes polynomial-times-exponential behaviour, which is why engineers avoid designing near such a coincidence.

**Observables and degeneracy.** In quantum mechanics the measurable values of a quantity are the eigenvalues of its operator and the states with a definite value are the eigenvectors, so the spectrum is literally the set of possible outcomes of a measurement. The geometric multiplicity is what physics calls the degree of degeneracy — the $2\ell+1$ states of a given angular momentum, the two spin states of an electron — and it is almost always forced by a symmetry of the Hamiltonian. Splitting a degeneracy by an applied field (the Zeeman and Stark effects) is the statement that a perturbation has reduced some $g(\lambda)$ by breaking the symmetry that protected it. For such operators the eigenbasis is guaranteed and can even be chosen orthonormal; that is the subject of :ref[the spectral theorem for Hermitian matrices]{to=linalg.hermitian-spectral-theorem}.
:::
