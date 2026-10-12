---
id: linalg.svd
title: Singular value decomposition
kind: theorem
level: core
summary: Every complex m-by-n matrix factors as A = USV* with U, V unitary and S non-negative diagonal; the singular values are the square roots of the min(m,n) largest eigenvalues of A*A, truncating the factorisation gives the best approximation of each rank, and inverting the non-zero part gives the pseudoinverse that solves least squares with minimum norm.
prereqs: [linalg.hermitian-spectral-theorem, linalg.projections-least-squares, linalg.normal-matrices, linalg.gram-schmidt]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§8.18.3, Eqs (8.131)-(8.136) and the worked result Av_i = s_i u_i, A*u_i = s_i v_i, pp. 302-304"
    pages: "302-304"
    role: the shape and conventions of the factorisation; the singular values as square roots of the eigenvalues of A*A and AA*; rank, range and null space from the singular vectors
  - work: reed-simon-1980
    loc: "§VI.5, Thm VI.17 (canonical form for compact operators) and Thm VI.16 (Hilbert-Schmidt theorem), pp. 203-204"
    pages: "203-204"
    role: existence, by applying the spectral theorem to A*A; the dyadic form of the decomposition; singular values as the eigenvalues of |A|
  - work: stakgold-holst-2011
    loc: "Exercises 5.5.3 and 5.5.4, pp. 325-326"
    pages: "325-326"
    role: the pseudoinverse as the operator returning the least-squares solution of minimum norm (defined there for operators, with no factorisation; the formula V S+ U-dagger is ours)
---

:::definition[Singular values and the singular value decomposition]{provenance=adapted src="rhb-2006:§8.18.3, Eqs (8.131)-(8.133), pp. 302-303"}
Let $A$ be a complex $m \times n$ matrix and $p = \min(m, n)$. A **singular value decomposition** (SVD) of $A$ is a factorisation

$$
A = U S V^\dagger
$$

in which $U$ is $m \times m$ unitary, $V$ is $n \times n$ unitary, and $S$ is $m \times n$ with $S_{ij} = 0$ for $i \neq j$ and diagonal entries

$$
s_1 \ge s_2 \ge \cdots \ge s_p \ge 0 ,
$$

the **singular values** of $A$. The columns $u_1, \dots, u_m$ of $U$ are the **left singular vectors** and the columns $v_1, \dots, v_n$ of $V$ the **right singular vectors**. For real $A$ one may take $U$ and $V$ real orthogonal.
:::

:::statement[Existence and basic properties]{provenance=adapted src="reed-simon-1980:§VI.5, Thm VI.17, pp. 203-204; rhb-2006:§8.18.3, Eqs (8.132)-(8.136) and pp. 303-304"}
Every complex $m \times n$ matrix $A$ has a singular value decomposition, and:

1. **Where the singular values come from.** $A^\dagger A$ ($n \times n$) and $A A^\dagger$ ($m \times m$) are Hermitian and positive semidefinite, so their eigenvalues are real and $\ge 0$. The numbers $s_1^2, \dots, s_p^2$ are the $p$ largest eigenvalues of each, in decreasing order; the remaining eigenvalues of the larger of the two matrices are zero. Equivalently $s_i = \sqrt{\lambda_i}$ with $\lambda_i$ the $i$-th largest eigenvalue of $A^\dagger A$. One may take for $V$ any unitary whose columns are an orthonormal eigenbasis of $A^\dagger A$ ordered by decreasing eigenvalue; every column of $U$ belonging to a non-zero singular value is then forced, $u_i = A v_i / s_i$ for each $i$ with $s_i > 0$, and the remaining ones are any orthonormal completion. The columns of $U$ so obtained are an orthonormal eigenbasis of $A A^\dagger$. The two families cannot be chosen independently of each other.
2. **Coupling of the two families.** For $i = 1, \dots, p$,
$$
A v_i = s_i u_i , \qquad A^\dagger u_i = s_i v_i ,
$$
while $A v_i = 0$ for $i > p$ and $A^\dagger u_i = 0$ for $i > p$.
3. **Rank, range, null space, dyadic form.** Let $r$ be the number of non-zero singular values. Then $r = \operatorname{rank} A$; $u_1, \dots, u_r$ are an orthonormal basis of the range of $A$; $v_{r+1}, \dots, v_n$ are an orthonormal basis of its null space; $v_1, \dots, v_r$ are an orthonormal basis of the range of $A^\dagger$; and
$$
A = \sum_{i=1}^{r} s_i\, u_i v_i^\dagger .
$$
4. **Uniqueness.** The singular values are uniquely determined by $A$. The singular vectors are not, and the non-zero and the zero parts are free in different ways. Let $r = \operatorname{rank} A$.
   - *Non-zero singular values.* Let $W \subseteq \{1, \dots, r\}$ be a maximal block of indices on which $s_i$ takes one common value $s > 0$. Writing $U_W$ and $V_W$ for the matrices of the corresponding columns, the pair may be replaced by $U_W Q$ and $V_W Q$ for any $|W| \times |W|$ unitary $Q$ — the *same* $Q$ on both sides, as the coupling $A v_i = s\, u_i$ of part 2 forces. The common phase $u_i \mapsto e^{i\alpha} u_i$, $v_i \mapsto e^{i\alpha} v_i$ is the case $|W| = 1$.
   - *Zero singular values.* The trailing columns $u_{r+1}, \dots, u_m$ and $v_{r+1}, \dots, v_n$ are constrained only by being orthonormal completions, of a basis of $\ker A^\dagger$ and of $\ker A$ respectively. They contribute nothing to $A = \sum_{i \le r} s_i u_i v_i^\dagger$, so here no matching is required: the two completions may be changed by unrelated unitaries, of sizes $m - r$ and $n - r$, which need not even be equal.

   Every SVD of $A$ arises from any one of them by such changes.
5. **Relation to the eigenvalues.** For a general square $A$ the singular values are the eigenvalues of $|A| = (A^\dagger A)^{1/2}$, and bear no simple relation to the eigenvalues of $A$ itself. If $A$ is :ref[normal]{to=linalg.normal-matrices} — that is, $A A^\dagger = A^\dagger A$, which holds in particular for Hermitian and for unitary $A$ — with eigenvalues $\lambda_1, \dots, \lambda_n$ listed with multiplicity, then the singular values are the numbers $|\lambda_k|$ sorted decreasingly.
:::

:::idea{provenance=original}
There is only one Hermitian matrix in sight, $A^\dagger A$, and the spectral theorem hands us an orthonormal eigenbasis for it. Its eigenvalues measure $\|Ax\|_2^2$ along that basis, so their square roots are the stretching factors we are after, and dividing each image $A v_i$ by its own length produces an orthonormal family on the target side. Between those two bases $A$ is diagonal, and that is the factorisation. The rest of the statement — the second eigenvalue list, the coupling, rank, range, null space, the dyadic form, and exactly how much freedom is left — is read off from that one diagonalisation.
:::

:::proof{provenance=adapted src="reed-simon-1980:§VI.5, Thm VI.17, pp. 203-204; rhb-2006:§8.18.3, Eqs (8.132)-(8.136), pp. 302-304"}
1. **$A^\dagger A$ is Hermitian and positive semidefinite.** $(A^\dagger A)^\dagger = A^\dagger A$, since $(XY)^\dagger = Y^\dagger X^\dagger$ and $(A^\dagger)^\dagger = A$. For every $x \in \mathbb{C}^n$,
$$
x^\dagger A^\dagger A x = (A x)^\dagger (A x) = \|A x\|_2^2 \ \ge\ 0 .
$$
Each eigenvalue $\lambda$ of $A^\dagger A$ is real by :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem}, and taking $x$ to be an eigenvector for it the display reads $\lambda \|x\|_2^2 \ge 0$, so $\lambda \ge 0$. The same two lines with $A^\dagger$ in place of $A$ settle $A A^\dagger$.

2. **An orthonormal eigenbasis on the right.** By the spectral theorem pick an orthonormal basis $v_1, \dots, v_n$ of $\mathbb{C}^n$ with $A^\dagger A\, v_i = \lambda_i v_i$, numbered so that $\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_n \ge 0$. Put $s_i = \sqrt{\lambda_i} \ge 0$, and let $r$ be the number of indices with $\lambda_i > 0$; by the ordering these are $i = 1, \dots, r$.

3. **At most $p$ of the $s_i$ are non-zero.** If $A^\dagger A x = 0$ then $\|Ax\|_2^2 = x^\dagger A^\dagger A x = 0$ by step 1, so $\ker(A^\dagger A) = \ker A$ and hence $\operatorname{rank}(A^\dagger A) = \operatorname{rank} A$ (:ref[least squares]{to=linalg.projections-least-squares}, part 4). Since $A^\dagger A$ is diagonalisable with exactly $r$ non-zero eigenvalues, $r = \operatorname{rank} A \le \min(m, n) = p$. In particular $\lambda_i = 0$ for every $i > p$, so the numbers $s_1 \ge \cdots \ge s_p$ carry all of the information and fit on the diagonal of an $m \times n$ matrix.

4. **Normalising the images.** For $i \le r$ put $u_i = A v_i / s_i$, which is legitimate because $s_i > 0$. These vectors are orthonormal:
$$
u_i^\dagger u_j = \frac{(A v_i)^\dagger (A v_j)}{s_i s_j} = \frac{v_i^\dagger A^\dagger A v_j}{s_i s_j} = \frac{\lambda_j\, v_i^\dagger v_j}{s_i s_j} = \frac{s_j}{s_i}\, \delta_{ij} = \delta_{ij} ,
$$
by the definition of $u_i$, then the definition of the adjoint, then step 2, then the orthonormality of the $v_j$. For $i > r$ we have $\lambda_i = 0$, so $\|A v_i\|_2^2 = v_i^\dagger A^\dagger A v_i = 0$ and therefore $A v_i = 0$.

5. **Completing the basis gives the factorisation.** Since $r \le m$ by step 3, the orthonormal set $u_1, \dots, u_r$ extends to an orthonormal basis $u_1, \dots, u_m$ of $\mathbb{C}^m$: take any basis of $(\operatorname{span}\{u_1, \dots, u_r\})^\perp$ and orthonormalise it by :ref[Gram-Schmidt]{to=linalg.gram-schmidt}. Let $U$ and $V$ be the matrices with those columns; both are unitary, their columns being orthonormal bases. Column $j$ of $U^\dagger A V$ is $U^\dagger A v_j$, which by step 4 is $s_j U^\dagger u_j = s_j e_j$ when $j \le r$ and $0$ when $j > r$. As $s_j = 0$ for $r < j \le p$, that is precisely the matrix $S$ of the definition, so $U^\dagger A V = S$, that is, $A = U S V^\dagger$. The construction also establishes the recipe asserted in part 1: $V$ may be any unitary whose columns are an orthonormal eigenbasis of $A^\dagger A$ in decreasing order of eigenvalue, and then $u_i = A v_i / s_i$ is forced whenever $s_i > 0$, the remaining columns being any orthonormal completion.

6. **Part 1, the two eigenvalue lists.** Conversely, from any SVD $A = U S V^\dagger$, unitarity of $U$ and $V$ gives
$$
A^\dagger A = V (S^\dagger S) V^\dagger , \qquad A A^\dagger = U (S S^\dagger) U^\dagger .
$$
Since $S_{ij} = 0$ off the diagonal, $(S^\dagger S)_{jj} = \sum_i |S_{ij}|^2$ is $s_j^2$ for $j \le p$ and $0$ for $j > p$, and likewise $(S S^\dagger)_{ii}$ is $s_i^2$ for $i \le p$ and $0$ for $i > p$; both matrices are diagonal. A unitary similarity does not change eigenvalues, so the eigenvalues of $A^\dagger A$ are $s_1^2, \dots, s_p^2$ together with $n - p$ zeros, those of $A A^\dagger$ the same numbers with $m - p$ zeros, and the columns of $V$ and of $U$ are orthonormal eigenbases of the two matrices.

7. **Part 2, the coupling.** Multiplying $A = U S V^\dagger$ on the right by $V$ gives $A V = U S$. Column $i$ of the left-hand side is $A v_i$; column $i$ of the right-hand side is $s_i u_i$ for $i \le p$ and $0$ for $i > p$, because column $i$ of $S$ then vanishes. That is the first identity. Taking adjoints, $A^\dagger = V S^\dagger U^\dagger$, so $A^\dagger U = V S^\dagger$, and reading columns the same way — $S$ is real, so $S^\dagger = S^{\mathsf T}$ — gives $A^\dagger u_i = s_i v_i$ for $i \le p$ and $A^\dagger u_i = 0$ for $i > p$.

8. **Part 3, rank, range, null space and the dyadic form.** By part 2 together with $s_i = 0$ for $r < i \le p$, $A v_i = 0$ for every $i > r$. Expanding an arbitrary $x$ as $x = \sum_{i=1}^n (v_i^\dagger x)\, v_i$,
$$
A x = \sum_{i=1}^{n} (v_i^\dagger x)\, A v_i = \sum_{i=1}^{r} s_i (v_i^\dagger x)\, u_i = \Bigl( \sum_{i=1}^{r} s_i u_i v_i^\dagger \Bigr) x ,
$$
valid for every $x$, which is the dyadic form. It gives $\operatorname{im} A \subseteq \operatorname{span}\{u_1, \dots, u_r\}$, and the reverse inclusion holds because $A v_i = s_i u_i$ with $s_i \neq 0$; the $u_i$ are orthonormal, hence independent, so $\operatorname{rank} A = r$ and $u_1, \dots, u_r$ is an orthonormal basis of the range. For the null space, $A x = 0$ says $\sum_{i \le r} s_i (v_i^\dagger x) u_i = 0$, which by independence of the $u_i$ and $s_i \neq 0$ forces $v_i^\dagger x = 0$ for every $i \le r$, that is $x \in \operatorname{span}\{v_{r+1}, \dots, v_n\}$; and conversely those $v_i$ are in $\ker A$. Applying what has just been proved to $A^\dagger = \sum_{i \le r} s_i v_i u_i^\dagger$ shows that $v_1, \dots, v_r$ is an orthonormal basis of $\operatorname{im} A^\dagger$.

9. **Part 4, uniqueness of the singular values.** By step 6 the numbers $s_1^2 \ge \cdots \ge s_p^2$ are the $p$ largest eigenvalues of $A^\dagger A$, hence determined by $A$ alone, and the constraint $s_i \ge 0$ fixes the square roots.

10. **Part 4, the freedom in the singular vectors.** Let $A = U S V^\dagger = U' S V'^\dagger$ be two SVDs, with the same $S$ by step 9. By step 6 the columns of $V$ and of $V'$ are both orthonormal eigenbases of $A^\dagger A$ in decreasing order of eigenvalue. Two orthonormal bases adapted to the same eigenspaces in the same order differ exactly by a unitary change of basis inside each eigenspace. Those eigenspaces are $\operatorname{span}\{v_i : i \in W\}$ for each maximal block $W$ of indices carrying one common value $s > 0$, and $\operatorname{span}\{v_{r+1}, \dots, v_n\} = \ker A$ for the eigenvalue $0$. So, columnwise, $V'_W = V_W Q_W$ with $Q_W$ unitary of size $|W|$, while $v'_{r+1}, \dots, v'_n$ is an arbitrary orthonormal basis of $\ker A$. For $i \le r$ the left vectors are then forced, $u'_i = A v'_i / s_i$ by step 5, so
$$
U'_W = A V'_W / s = A V_W Q_W / s = U_W Q_W
$$
with the *same* unitary $Q_W$. The trailing columns $u'_{r+1}, \dots, u'_m$ complete $u'_1, \dots, u'_r$, a basis of $\operatorname{im} A$, to an orthonormal basis of $\mathbb{C}^m$, so they form an arbitrary orthonormal basis of $(\operatorname{im} A)^\perp = \ker A^\dagger$, of dimension $m - r$ and unrelated to the $n - r$ dimensions available on the other side. Conversely each such change does produce an SVD, because inside a block $U_W Q_W (V_W Q_W)^\dagger = U_W Q_W Q_W^\dagger V_W^\dagger = U_W V_W^\dagger$ leaves the dyadic sum of part 3 unchanged, and the trailing columns never enter it.

11. **Part 5, the normal case.** For square $A$ (so $m = n = p$), step 6 gives $A^\dagger A = V \operatorname{diag}(s_1^2, \dots, s_n^2) V^\dagger$, and $B = V \operatorname{diag}(s_1, \dots, s_n) V^\dagger$ is positive semidefinite with $B^2 = A^\dagger A$. It is the only such matrix, so the notation $|A| = (A^\dagger A)^{1/2}$ is unambiguous: a positive semidefinite $C$ with $C^2 = A^\dagger A$ commutes with $A^\dagger A$, hence maps each eigenspace of $A^\dagger A$ into itself, and on the eigenspace for $\mu$ it is a positive semidefinite matrix whose square is $\mu I$, so it is Hermitian with every eigenvalue equal to $\sqrt{\mu}$ and therefore equals $\sqrt{\mu}\, I$ there. The eigenvalues of $|A| = B$ are thus $s_1, \dots, s_n$. If in addition $A$ is normal, :ref[normal matrices]{to=linalg.normal-matrices} supplies a unitary $W$ with $A = W \Lambda W^\dagger$ and $\Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$; then $A^\dagger A = W \overline{\Lambda} \Lambda W^\dagger = W \operatorname{diag}(|\lambda_1|^2, \dots, |\lambda_n|^2) W^\dagger$, so the eigenvalues of $A^\dagger A$ are the $|\lambda_k|^2$ and the singular values, their square roots in decreasing order, are the $|\lambda_k|$ sorted decreasingly. $\square$
:::

:::statement[Spectral norm and best low-rank approximation]{provenance=original}
Let $A$ be $m \times n$ with singular values $s_1 \ge \cdots \ge s_p \ge 0$ and rank $r$, let $\|A\|_2 = \max_{x \neq 0} \|Ax\|_2/\|x\|_2$ and $\|A\|_F = \bigl(\sum_{i,j} |A_{ij}|^2\bigr)^{1/2}$. Then $\|A\|_2 = s_1$ and $\|A\|_F = \bigl(\sum_{i=1}^{p} s_i^2\bigr)^{1/2}$, and for each integer $k$ with $1 \le k < r$ the truncation

$$
A_k = \sum_{i=1}^{k} s_i\, u_i v_i^\dagger
$$

(of rank exactly $k$) is a best rank-$k$ approximation to $A$ in both norms: over all $m \times n$ matrices $B$ with $\operatorname{rank} B \le k$,

$$
\min_B \|A - B\|_2 = \|A - A_k\|_2 = s_{k+1} , \qquad
\min_B \|A - B\|_F = \|A - A_k\|_F = \Bigl(\sum_{i>k} s_i^2\Bigr)^{1/2} .
$$

The Frobenius case is the Eckart-Young theorem (1936), whose integral-operator analogue goes back to Schmidt (1907); Mirsky (1960) extended it to every unitarily invariant norm, which is where the spectral-norm case comes from. The Frobenius minimiser is unique exactly when $s_k > s_{k+1}$; the spectral-norm minimiser is in general not unique. For $k \ge r$ the minimum is $0$, attained by $A$ itself.
:::

:::idea{provenance=original}
Both norms are blind to the unitary factors, so each is a function of the singular values alone, and the error made by chopping the dyadic sum is immediate. The two lower bounds are the real content. In the spectral norm, a matrix of rank at most $k$ must annihilate some direction inside the $(k+1)$-dimensional span of $v_1, \dots, v_{k+1}$, and $A$ stretches every direction there by at least $s_{k+1}$. In the Frobenius norm, split $A - B$ along the range of $B$: the part of $A$ pointing out of that range survives untouched, and a subspace of dimension $k$ can capture at most the $k$ largest eigenvalues' worth of $A A^\dagger$.
:::

:::proof{provenance=original}
Throughout, fix an SVD $A = U S V^\dagger$ as in the existence statement, so that $A = \sum_{i \le r} s_i u_i v_i^\dagger$, and write $(X, Y)_F = \operatorname{tr}(Y^\dagger X)$, which is an inner product on $m \times n$ matrices with $\|X\|_F^2 = (X, X)_F$ and is linear in its first slot.

1. **The dyads are orthonormal in the Frobenius inner product.** For $i, j \le p$, using $\operatorname{tr}(x y^\dagger) = y^\dagger x$ for column vectors,
$$
(u_i v_i^\dagger,\, u_j v_j^\dagger)_F = \operatorname{tr}\bigl( v_j u_j^\dagger u_i v_i^\dagger \bigr) = (u_j^\dagger u_i)\, \operatorname{tr}(v_j v_i^\dagger) = \delta_{ij}\, (v_i^\dagger v_j) = \delta_{ij} ,
$$
by the orthonormality of the $u$'s and then of the $v$'s. Hence $\bigl\| \sum_i c_i u_i v_i^\dagger \bigr\|_F^2 = \sum_i |c_i|^2$ for any scalars $c_i$.

2. **The Frobenius norm and the Frobenius truncation error.** Applying step 1 to $A = \sum_{i \le r} s_i u_i v_i^\dagger$ gives $\|A\|_F^2 = \sum_{i \le r} s_i^2 = \sum_{i \le p} s_i^2$, the omitted terms being zero. Since $A - A_k = \sum_{k < i \le r} s_i u_i v_i^\dagger$, the same step gives $\|A - A_k\|_F^2 = \sum_{i > k} s_i^2$.

3. **The spectral norm and the spectral truncation error.** For any $x$ put $y = V^\dagger x$, so $\|y\|_2 = \|x\|_2$ as $V$ is unitary. Then $\|Ax\|_2 = \|U S y\|_2 = \|S y\|_2$, again by unitarity, and
$$
\|S y\|_2^2 = \sum_{i \le p} s_i^2 |y_i|^2 \ \le\ s_1^2 \|y\|_2^2 ,
$$
with equality at $x = v_1$ (then $y = e_1$); so $\|A\|_2 = s_1$. Running the same computation for $A - A_k$, whose dyadic form has only the indices $k < i \le r$, gives $\|(A - A_k)x\|_2^2 = \sum_{k < i \le r} s_i^2 |v_i^\dagger x|^2 \le s_{k+1}^2 \|x\|_2^2$ with equality at $x = v_{k+1}$, so $\|A - A_k\|_2 = s_{k+1}$. By the range argument of part 3 of the existence statement, applied to $A_k = \sum_{i \le k} s_i u_i v_i^\dagger$ with $s_1, \dots, s_k > 0$ (here $k < r$), $\operatorname{im} A_k = \operatorname{span}\{u_1, \dots, u_k\}$, so $\operatorname{rank} A_k = k$ exactly.

4. **Spectral lower bound.** Let $\operatorname{rank} B \le k$. Then $\dim \ker B \ge n - k$, while $\dim \operatorname{span}\{v_1, \dots, v_{k+1}\} = k+1$, and $(n-k) + (k+1) > n$, so the two subspaces of $\mathbb{C}^n$ intersect in a non-zero vector. Normalise it: $w = \sum_{i \le k+1} c_i v_i$ with $\sum_{i \le k+1} |c_i|^2 = 1$ and $B w = 0$. Then, by part 2 of the existence statement and the orthonormality of the $u_i$,
$$
\|(A - B)w\|_2 = \|A w\|_2 = \Bigl\| \sum_{i \le k+1} c_i s_i u_i \Bigr\|_2 = \Bigl( \sum_{i \le k+1} |c_i|^2 s_i^2 \Bigr)^{1/2} \ \ge\ s_{k+1} ,
$$
the last step because $s_i \ge s_{k+1}$ for every $i \le k+1$ and the $|c_i|^2$ sum to $1$. Since $\|w\|_2 = 1$, this gives $\|A - B\|_2 \ge s_{k+1}$, which with step 3 proves the spectral-norm minimum.

5. **A capture lemma.** *Let $M$ be an $m \times m$ Hermitian positive semidefinite matrix with eigenvalues $\mu_1 \ge \cdots \ge \mu_m \ge 0$ and an orthonormal eigenbasis $w_1, \dots, w_m$, and let $q_1, \dots, q_j$ be orthonormal in $\mathbb{C}^m$ with $j \le k$. Then $\sum_{l \le j} q_l^\dagger M q_l \le \sum_{i \le k} \mu_i$.* To see it, expand $M = \sum_i \mu_i w_i w_i^\dagger$ and set $t_i = \sum_{l \le j} |w_i^\dagger q_l|^2$, so that $\sum_{l \le j} q_l^\dagger M q_l = \sum_i \mu_i t_i$. Now $t_i$ is the squared norm of the orthogonal projection of $w_i$ onto $\operatorname{span}\{q_1, \dots, q_j\}$, hence $0 \le t_i \le \|w_i\|_2^2 = 1$ (:ref[orthogonal projection]{to=linalg.projections-least-squares}, parts 3 and 4), while summing over $i$ instead gives $\sum_i t_i = \sum_{l \le j} \|q_l\|_2^2 = j \le k$, because $w_1, \dots, w_m$ is an orthonormal basis. Therefore
$$
\sum_i \mu_i t_i - \sum_{i \le k} \mu_i = \sum_{i \le k} \mu_i (t_i - 1) + \sum_{i > k} \mu_i t_i \ \le\ \mu_k \sum_{i \le k} (t_i - 1) + \mu_k \sum_{i > k} t_i = \mu_k \Bigl( \sum_i t_i - k \Bigr) \ \le\ 0 ,
$$
where the first inequality uses $t_i - 1 \le 0$ with $\mu_i \ge \mu_k$ for $i \le k$ and $t_i \ge 0$ with $\mu_i \le \mu_k$ for $i > k$, and the second uses $\mu_k \ge 0$ with $\sum_i t_i \le k$.

6. **Frobenius lower bound.** Let $\operatorname{rank} B \le k$, let $L = \operatorname{im} B$, of dimension $j \le k$, and let $Q$ be the orthogonal projection of $\mathbb{C}^m$ onto $L$, so $Q B = B$. Split
$$
A - B = (I - Q)A + (QA - B) .
$$
Every column of the first term lies in $L^\perp$ and every column of the second in $L$, so $(\,(I-Q)A,\, QA - B\,)_F = 0$, the trace being the sum of the columnwise inner products. Hence
$$
\|A - B\|_F^2 = \|(I-Q)A\|_F^2 + \|QA - B\|_F^2 \ \ge\ \|(I-Q)A\|_F^2 = \|A\|_F^2 - \|QA\|_F^2 ,
$$
the last equality being Pythagoras applied to each column of $A$. Writing $Q = \sum_{l \le j} q_l q_l^\dagger$ for an orthonormal basis $q_1, \dots, q_j$ of $L$ and using $Q^\dagger Q = Q$,
$$
\|QA\|_F^2 = \operatorname{tr}(A^\dagger Q A) = \operatorname{tr}(Q A A^\dagger) = \sum_{l \le j} q_l^\dagger A A^\dagger q_l \ \le\ \sum_{i \le k} s_i^2 ,
$$
by step 5 with $M = A A^\dagger$, whose eigenvalues are $s_1^2, \dots, s_p^2$ and zeros by part 1 of the existence statement. Combining, $\|A - B\|_F^2 \ge \|A\|_F^2 - \sum_{i \le k} s_i^2 = \sum_{i > k} s_i^2$, which with step 2 proves the Frobenius minimum.

7. **The Frobenius minimiser is unique when $s_k > s_{k+1}$.** Suppose $\operatorname{rank} B \le k$ and $\|A - B\|_F^2 = \sum_{i>k} s_i^2$. Equality in step 6 forces $B = QA$ and $\sum_{l \le j} q_l^\dagger A A^\dagger q_l = \sum_{i \le k} s_i^2$, so both inequalities of step 5 are tight for $M = A A^\dagger$, $\mu_i = s_i^2$. Here $\mu_k = s_k^2 > 0$ because $k < r$, so tightness of the second gives $\sum_i t_i = j = k$. Tightness of the first says
$$
\sum_{i \le k} (\mu_i - \mu_k)(1 - t_i) + \sum_{i > k} (\mu_k - \mu_i) t_i = 0 ,
$$
a sum of non-negative terms. Choosing $w_i = u_i$ as the eigenbasis of $A A^\dagger$, the hypothesis $s_k > s_{k+1}$ makes $\mu_k - \mu_i > 0$ for every $i > k$, so $t_i = 0$ there; then $\sum_{i \le k} t_i = k$ with each $t_i \le 1$ forces $t_i = 1$ for $i \le k$, that is $u_i \in L$ for $i \le k$. As $\dim L = k$, this gives $L = \operatorname{span}\{u_1, \dots, u_k\}$ and $Q = \sum_{i \le k} u_i u_i^\dagger$. Finally $u_i^\dagger A = (A^\dagger u_i)^\dagger = s_i v_i^\dagger$ by part 2 of the existence statement, so
$$
B = QA = \sum_{i \le k} u_i (u_i^\dagger A) = \sum_{i \le k} s_i u_i v_i^\dagger = A_k .
$$
This also shows $A_k$ does not depend on which SVD was fixed at the start, as it must not: it is the unique minimiser.

8. **It is not unique when $s_k = s_{k+1}$.** Write $s$ for the common value, which is positive because $k < r$. For real $\theta$ let
$$
u'_k = \cos\theta\, u_k + \sin\theta\, u_{k+1}, \quad u'_{k+1} = -\sin\theta\, u_k + \cos\theta\, u_{k+1} ,
$$
and define $v'_k, v'_{k+1}$ by the same formulas. By part 4 of the existence statement — the case of a block $W \supseteq \{k, k+1\}$ of equal singular values, rotated by the same real orthogonal $Q$ on both sides — this is again an SVD of $A$. Its rank-$k$ truncation $A'_k = \sum_{i<k} s_i u_i v_i^\dagger + s\, u'_k v'^{\dagger}_k$ is a best rank-$k$ approximation, by steps 2 and 6 applied to that SVD. But $v'^{\dagger}_k v_{k+1} = \sin\theta$, so $A'_k v_{k+1} = s \sin\theta\, u'_k$, while $A_k v_{k+1} = 0$. For $\sin\theta \neq 0$ the two differ, so there are infinitely many minimisers.

9. **The case $k \ge r$.** Then $\operatorname{rank} A = r \le k$, so $B = A$ is admissible and both minima are $0$. $\square$
:::

:::definition[Pseudoinverse]{provenance=adapted src="stakgold-holst-2011:Exercises 5.5.3-5.5.4, pp. 325-326"}
With $A = U S V^\dagger$ as above and $r$ non-zero singular values, the **Moore-Penrose pseudoinverse** of $A$ is the $n \times m$ matrix

$$
A^{+} = V S^{+} U^\dagger , \qquad (S^{+})_{ii} = \begin{cases} 1/s_i, & s_i > 0, \\ 0, & s_i = 0, \end{cases} \quad (S^{+})_{ij} = 0 \ (i \neq j),
$$

so that $A^{+} = \sum_{i=1}^{r} s_i^{-1} v_i u_i^\dagger$. It does not depend on which SVD of $A$ is used. For any $b \in \mathbb{C}^m$, the vector $x^{+} = A^{+} b$ is the **minimum-norm least-squares solution**: it minimises the residual $\|A x - b\|_2$ over all $x \in \mathbb{C}^n$, and among the minimisers it is the unique one of smallest $\|x\|_2$.

That last property is what :cite{work=stakgold-holst-2011 loc="Exercises 5.5.3-5.5.4, pp. 325-326"} takes as the *definition* of the pseudoinverse, for an operator with closed range and with no factorisation in sight. The formula $A^{+} = V S^{+} U^\dagger$, and the identification of the two, are ours; the cited pages do not contain them. Consequently

- $A A^{+}$ is the orthogonal projection of $\mathbb{C}^m$ onto the range of $A$, and $A^{+} A$ the orthogonal projection of $\mathbb{C}^n$ onto the range of $A^\dagger$, the orthogonal complement of $\ker A$;
- if $A$ is square and invertible then $A^{+} = A^{-1}$;
- if $A$ has full column rank $n$ then $A^{+} = (A^\dagger A)^{-1} A^\dagger$, recovering the normal equations of :ref[least squares]{to=linalg.projections-least-squares}.
:::

:::idea{provenance=original}
In the singular bases $A$ is a diagonal matrix, and for a diagonal matrix the two demands are transparent: the residual splits into coordinates the unknown can set exactly and coordinates it cannot touch at all, and the norm of the unknown splits into coordinates the data forces and coordinates that are free. Setting the free ones to zero is the whole content of the pseudoinverse. Since this description of $A^{+}b$ never mentions a basis, it cannot depend on which SVD was used.
:::

:::proof[Properties of the pseudoinverse]{provenance=original}
Fix an SVD $A = U S V^\dagger$ with $r$ non-zero singular values, let $b \in \mathbb{C}^m$, and for $x \in \mathbb{C}^n$ put $y = V^\dagger x$ and $c = U^\dagger b$. Unitarity gives $\|x\|_2 = \|y\|_2$, and the correspondence $x \leftrightarrow y$ is a bijection of $\mathbb{C}^n$.

1. **The residual in the singular bases.** Since $U$ is unitary, $\|Ax - b\|_2 = \|U(Sy - c)\|_2 = \|Sy - c\|_2$. The matrix $S$ has $(Sy)_i = s_i y_i$ for $i \le p$ and $(Sy)_i = 0$ for $p < i \le m$, and $s_i = 0$ for $r < i \le p$, so
$$
\|Ax - b\|_2^2 = \sum_{i=1}^{r} |s_i y_i - c_i|^2 + \sum_{i=r+1}^{m} |c_i|^2 .
$$
The second sum does not involve $x$ at all. Hence $x$ minimises the residual if and only if $y_i = c_i / s_i$ for every $i \le r$, the coordinates $y_{r+1}, \dots, y_n$ being unconstrained, and the minimal residual is $\bigl( \sum_{i > r} |c_i|^2 \bigr)^{1/2}$.

2. **Minimum norm.** Among those minimisers, $\|x\|_2^2 = \|y\|_2^2 = \sum_{i \le r} |c_i/s_i|^2 + \sum_{i > r} |y_i|^2$, which is smallest exactly when $y_i = 0$ for every $i > r$, and then uniquely so. That choice of $y$ is precisely $S^{+} c$, so the minimum-norm least-squares solution is $x = V S^{+} U^\dagger b = A^{+} b$, as claimed. Taking $b$ to run over $\mathbb{C}^m$ identifies $A^{+}$ with the operator of the cited exercises.

3. **Independence of the SVD.** Steps 1 and 2 characterise $A^{+}b$ as the unique minimum-norm minimiser of $\|Ax - b\|_2$, a description that mentions only $A$ and $b$. So $A^{+}$ is the same matrix for every SVD of $A$.

4. **The two projections.** $S S^{+}$ is the $m \times m$ diagonal matrix with $r$ ones followed by zeros, since $(S S^{+})_{ij} = S_{ii} (S^{+})_{ij} = s_i s_i^{-1} \delta_{ij}$ for $i \le r$ and vanishes otherwise. Hence
$$
A A^{+} = U S V^\dagger V S^{+} U^\dagger = U (S S^{+}) U^\dagger = \sum_{i=1}^{r} u_i u_i^\dagger ,
$$
which is Hermitian and idempotent with range $\operatorname{span}\{u_1, \dots, u_r\} = \operatorname{im} A$, so it is the orthogonal projection onto $\operatorname{im} A$ (:ref[orthogonal projection]{to=linalg.projections-least-squares}, part 5). Identically, $S^{+} S$ is $n \times n$ diagonal with $r$ ones, so $A^{+} A = \sum_{i \le r} v_i v_i^\dagger$ is the orthogonal projection onto $\operatorname{span}\{v_1, \dots, v_r\} = \operatorname{im} A^\dagger = (\ker A)^\perp$.

5. **Square and invertible.** Then $r = m = n$, so $S$ is square with all $s_i > 0$ and $S^{+} = S^{-1}$; hence $A^{+} = V S^{-1} U^\dagger = (U S V^\dagger)^{-1} = A^{-1}$.

6. **Full column rank.** If $\operatorname{rank} A = n$ then $r = n \le m$, and $S^\dagger S = \operatorname{diag}(s_1^2, \dots, s_n^2)$ is invertible, so $A^\dagger A = V (S^\dagger S) V^\dagger$ is invertible with inverse $V (S^\dagger S)^{-1} V^\dagger$. Therefore
$$
(A^\dagger A)^{-1} A^\dagger = V (S^\dagger S)^{-1} V^\dagger \cdot V S^\dagger U^\dagger = V \bigl( (S^\dagger S)^{-1} S^\dagger \bigr) U^\dagger ,
$$
and $(S^\dagger S)^{-1} S^\dagger$ is the $n \times m$ matrix with $(i,i)$ entry $s_i / s_i^2 = 1/s_i$ and all other entries zero, which is $S^{+}$. So $(A^\dagger A)^{-1} A^\dagger = V S^{+} U^\dagger = A^{+}$, and by step 1 the minimiser is unique because no coordinates $y_i$ with $i > r = n$ exist. $\square$
:::

:::note{provenance=original}
The SVD says that every linear map, of any shape and any rank, is the same thing in disguise: choose the right orthonormal basis in the source and in the target, and the map simply scales $r$ perpendicular directions by $s_1, \dots, s_r$ and annihilates the rest. Because the scaling factors come out sorted, truncating the list is the optimal way to simplify the map — which is why the SVD underlies principal component analysis, image and model compression, rank determination, and the regularisation of ill-posed least-squares problems.
:::

:::remark[Traps and conventions]{provenance=original}
**Singular values are not eigenvalues.** For $A = \begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix}$ both eigenvalues are $0$ while the singular values are $2$ and $0$. The two lists agree up to absolute values and ordering exactly for **normal** $A$, meaning $A A^\dagger = A^\dagger A$ (see :ref[normal matrices]{to=linalg.normal-matrices}) — not only for Hermitian $A$: a $2 \times 2$ rotation matrix and $\operatorname{diag}(i, 1)$ are normal without being Hermitian, and both have singular values $1, 1$ and eigenvalues of modulus $1$. (Normality is necessary as well as sufficient, since $\sum_i s_i^2 = \|A\|_F^2 \ge \sum_k |\lambda_k|^2$ for every square $A$, with equality precisely when $A$ is normal.) The two lists coincide, with no absolute values, exactly for positive semidefinite $A$.

**$s_i \ge 0$ and the ordering are conventions, and they are what makes the factorisation nearly unique.** A sign can always be moved into $u_i$ or $v_i$; reversing the order permutes the columns of $U$ and $V$ together. Do not compare two SVDs column by column without fixing both conventions.

**Full versus reduced.** Many texts and all numerical libraries offer a "thin" or "economy" form in which $U$ is $m \times p$ and $V$ is $n \times p$ with orthonormal columns and $S$ is $p \times p$ square. The thin factors are isometries, so $U^\dagger U = I_p$ and $V^\dagger V = I_p$ hold in both forms, while the identities with the factors the other way round can fail. Which one fails depends on the shape: since $p = \min(m, n)$, the thin $U$ is square — hence already unitary, with $U U^\dagger = I_m$ — exactly when $m \le n$, and the thin $V$ is square exactly when $n \le m$. For $m > n$ the thin $U$ is $m \times n$ and $U U^\dagger$ is the rank-$n$ orthogonal projection onto $\operatorname{span}\{u_1, \dots, u_n\}$, not $I_m$; for $n > m$ the same happens to $V V^\dagger$. At most one of the two can fail, and when $m \neq n$ exactly one does; when $m = n$ the thin form *is* the full form, both factors are unitary and neither fails. So "the thin factors are not unitary" is a statement about one named factor, decided by the shape, never about both at once.

**The pseudoinverse is not continuous in $A$.** A singular value that passes through zero makes $A^{+}$ blow up: for $A_\epsilon = \operatorname{diag}(1, \epsilon)$, $A_\epsilon^{+} = \operatorname{diag}(1, 1/\epsilon)$ for $\epsilon \neq 0$ but $A_0^{+} = \operatorname{diag}(1, 0)$. This is why practical computations zero out all singular values below a tolerance rather than inverting them, and it is the quantitative content of :ref[conditioning]{to=linalg.matrix-norms-conditioning}.

**$A^{+} = (A^\dagger A)^{-1} A^\dagger$ needs full column rank.** With dependent columns $A^\dagger A$ is singular and the normal equations have many solutions; the pseudoinverse selects the one of least norm, which the normal equations by themselves do not.

**Notation.** $A^{+}$, $A^{\dagger}$ and $A^{\#}$ all appear in the literature for the pseudoinverse; we reserve $A^\dagger$ for the Hermitian conjugate throughout, as in :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem}. Singular values are written $s_i$ here and $\sigma_i$ in much of the numerical literature.
:::

:::example[A rank-deficient 3 x 3 matrix, worked through completely]{provenance=original}
Take the real matrix

$$
A = \begin{pmatrix} 6 & 9 & 6 \\ 0 & -6 & -12 \\ 6 & 6 & 0 \end{pmatrix} ,
$$

so $m = n = p = 3$ and $A^\dagger = A^{\mathsf T}$.

**1. Form $A^{\mathsf T} A$.** Its $(i,j)$ entry is the dot product of columns $i$ and $j$ of $A$:

$$
A^{\mathsf T} A = \begin{pmatrix} 72 & 90 & 36 \\ 90 & 153 & 126 \\ 36 & 126 & 180 \end{pmatrix} .
$$

**2. Its eigenvalues.** The characteristic polynomial of a $3 \times 3$ matrix is $\lambda^3 - e_1 \lambda^2 + e_2 \lambda - e_3$ with $e_1$ the trace, $e_2$ the sum of the three $2 \times 2$ principal minors and $e_3$ the determinant. Here $e_1 = 72 + 153 + 180 = 405$,

$$
e_2 = (72 \cdot 153 - 90^2) + (72 \cdot 180 - 36^2) + (153 \cdot 180 - 126^2) = 2916 + 11664 + 11664 = 26244 ,
$$

and $e_3 = 0$, because the columns of $A$ satisfy $2 c_1 - 2 c_2 + c_3 = 0$ — check the first row: $2 \cdot 6 - 2 \cdot 9 + 6 = 0$ — so $A$, and hence $A^{\mathsf T} A$, is singular. Thus

$$
\lambda^3 - 405 \lambda^2 + 26244 \lambda = \lambda (\lambda^2 - 405\lambda + 26244) = \lambda(\lambda - 324)(\lambda - 81) ,
$$

since $324 + 81 = 405$ and $324 \cdot 81 = 26244$. So the singular values are

$$
s_1 = \sqrt{324} = 18, \qquad s_2 = \sqrt{81} = 9, \qquad s_3 = 0 ,
$$

and $r = \operatorname{rank} A = 2$.

**3. Right singular vectors.** Solving $(A^{\mathsf T} A - \lambda I)v = 0$ for each eigenvalue and normalising gives

$$
v_1 = \tfrac13 (1, 2, 2)^{\mathsf T}, \qquad v_2 = \tfrac13 (2, 1, -2)^{\mathsf T}, \qquad v_3 = \tfrac13 (2, -2, 1)^{\mathsf T} .
$$

Each has norm $\tfrac13\sqrt{1+4+4} = 1$, and the three are mutually orthogonal ($1\cdot2 + 2\cdot1 - 2\cdot2 = 0$, and similarly for the other two pairs). Verify one eigenvector equation: $A^{\mathsf T} A (1,2,2)^{\mathsf T} = (72 + 180 + 72,\ 90 + 306 + 252,\ 36 + 252 + 360)^{\mathsf T} = (324, 648, 648)^{\mathsf T} = 324\,(1,2,2)^{\mathsf T}$, as required.

**4. Left singular vectors.** By the construction, $u_i = A v_i / s_i$ for $i \le r = 2$:

$$
A v_1 = \tfrac13 (36, -36, 18)^{\mathsf T} = (12, -12, 6)^{\mathsf T} = 18 \cdot \tfrac13 (2, -2, 1)^{\mathsf T}, \quad\text{so}\quad u_1 = \tfrac13 (2, -2, 1)^{\mathsf T} ,
$$

$$
A v_2 = \tfrac13 (9, 18, 18)^{\mathsf T} = (3, 6, 6)^{\mathsf T} = 9 \cdot \tfrac13 (1, 2, 2)^{\mathsf T}, \quad\text{so}\quad u_2 = \tfrac13 (1, 2, 2)^{\mathsf T} .
$$

The third column is any unit vector orthogonal to these two; $u_3 = \tfrac13 (2, 1, -2)^{\mathsf T}$ serves. Checks demanded by the statement: $A v_3 = 0$, so $v_3$ spans $\ker A$; $A^{\mathsf T} u_3 = 0$, so $u_3$ spans $\ker A^{\mathsf T} = (\operatorname{im} A)^\perp$; $A^{\mathsf T} u_1 = (6, 12, 12)^{\mathsf T} = 18 v_1$ and $A^{\mathsf T} u_2 = (6, 3, -6)^{\mathsf T} = 9 v_2$, which is part 2.

**5. The decomposition.** With $U = (u_1\ u_2\ u_3)$, $V = (v_1\ v_2\ v_3)$ and $S = \operatorname{diag}(18, 9, 0)$,

$$
A = 18\, u_1 v_1^{\mathsf T} + 9\, u_2 v_2^{\mathsf T}
= \begin{pmatrix} 4 & 8 & 8 \\ -4 & -8 & -8 \\ 2 & 4 & 4 \end{pmatrix} + \begin{pmatrix} 2 & 1 & -2 \\ 4 & 2 & -4 \\ 4 & 2 & -4 \end{pmatrix} ,
$$

and the two matrices do add up to $A$. As a check on the singular values, $\|A\|_F^2 = 36 + 81 + 36 + 36 + 144 + 36 + 36 = 405$ (the three zero entries of $A$ contribute nothing) and $s_1^2 + s_2^2 = 324 + 81 = 405$.

**6. Best rank-one approximation.** $A_1 = 18\, u_1 v_1^{\mathsf T}$ is the first matrix displayed above, and $A - A_1$ is the second. Its spectral and Frobenius norms are both $s_2 = 9$: indeed $A - A_1 = 9\, u_2 v_2^{\mathsf T}$ is a single dyad, and $\|A - A_1\|_F^2 = 4+1+4+16+4+16+16+4+16 = 81$. No matrix of rank $1$ comes closer in either norm, and because $s_1 > s_2$ this $A_1$ is the only Frobenius minimiser.

**7. Pseudoinverse.** $A^{+} = \tfrac{1}{18} v_1 u_1^{\mathsf T} + \tfrac19 v_2 u_2^{\mathsf T}$, which works out to

$$
A^{+} = \frac{1}{54} \begin{pmatrix} 2 & 2 & 3 \\ 2 & 0 & 2 \\ 0 & -4 & -2 \end{pmatrix} .
$$

Check the projection property: $A A^{+} = I - u_3 u_3^{\mathsf T} = \tfrac19 \begin{pmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5\end{pmatrix}$, which is symmetric, squares to itself, and kills $u_3$ — the orthogonal projection onto $\operatorname{im} A$.

**8. Minimum-norm least squares.** For $b = (54, 0, 0)^{\mathsf T}$,

$$
x^{+} = A^{+} b = (2, 2, 0)^{\mathsf T}, \qquad A x^{+} = (30, -12, 24)^{\mathsf T}, \qquad b - A x^{+} = (24, 12, -24)^{\mathsf T} .
$$

The residual is $36\, u_3$, so it is orthogonal to $\operatorname{im} A$ as it must be, and its norm is $36$. Every least-squares solution is $x^{+} + t v_3$ with $t \in \mathbb{R}$, and since $x^{+} \cdot (2,-2,1) = 4 - 4 + 0 = 0$ the vector $x^{+}$ is orthogonal to $\ker A$, giving

$$
\|x^{+} + t v_3\|_2^2 = \|x^{+}\|_2^2 + t^2 = 8 + t^2 ,
$$

minimal only at $t = 0$. So $\|x^{+}\|_2 = 2\sqrt2 \approx 2.8284$ is the smallest norm among all least-squares solutions, and $\|b - A x^{+}\|_2 = 36$ is the common residual of all of them.
:::

:::application{provenance=original}
- **Empirical orthogonal functions in climate science.** Arrange a gridded field — monthly sea-surface temperature anomalies, say — as a matrix with one row per time and one column per grid point, and compute its SVD. The right singular vectors are the spatial patterns (EOFs), the left singular vectors scaled by the singular values are their time series (principal components), and $s_i^2 / \sum_j s_j^2$ is the fraction of variance that pattern carries. The best low-rank approximation statement is what justifies keeping the first few: no other combination of that many patterns reproduces the data field better, in the least-squares sense. The same computation under the name principal component analysis reduces the dimension of any data matrix.

- **Quantum entanglement.** A pure state of two subsystems, $|\psi\rangle = \sum_{jk} C_{jk} |j\rangle \otimes |k\rangle$, has a coefficient matrix $C$; its SVD is the Schmidt decomposition $|\psi\rangle = \sum_i s_i |u_i\rangle \otimes |\overline{v_i}\rangle$. The singular values are the Schmidt coefficients, $\operatorname{rank} C$ is the Schmidt rank, the state is a product state exactly when that rank is $1$, and the reduced density matrices $C C^\dagger$ and $C^{\mathsf T} \overline{C}$ have the common eigenvalues $s_i^2$, from which the entanglement entropy $-\sum_i s_i^2 \log s_i^2$ (for $\sum_i s_i^2 = 1$) is computed. Truncating to the largest few $s_i$ is the compression step at the heart of matrix-product-state and DMRG methods.

- **Regularising an ill-posed inversion.** In tomography, deconvolution and geophysical inversion one must solve $Ax = b$ for a discretised operator whose singular values decay towards zero. The pseudoinverse multiplies the data component along $u_i$ by $1/s_i$, so noise in the directions with tiny $s_i$ is amplified without limit. Truncated SVD regularisation keeps only the terms with $s_i$ above a threshold, which replaces $A^{+}$ by the pseudoinverse of the best low-rank approximation $A_k$ and trades resolution for stability; the quantitative version of the trade-off is the subject of :ref[condition numbers]{to=linalg.matrix-norms-conditioning}.

- **Rank, and how many digits of it you can believe.** The theoretical rank of a measured matrix is almost never attained numerically, because rounding and measurement error perturb every zero singular value away from zero. The spectral-norm statement says that $A$ is within $s_{k+1}$ of a matrix of rank $k$, so counting the singular values above the noise level is the defensible way to determine rank — the standard test for the order of a linear model, the number of independent reaction pathways in a kinetics matrix, or the dimension of an attractor reconstructed by delay embedding.
:::
