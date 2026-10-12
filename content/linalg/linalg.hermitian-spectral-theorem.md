---
id: linalg.hermitian-spectral-theorem
title: Spectral theorem for Hermitian matrices
kind: theorem
level: core
summary: A Hermitian matrix has real eigenvalues, orthogonal eigenvectors for distinct eigenvalues, and an orthonormal eigenbasis, so some unitary matrix of eigenvector columns diagonalizes it; a real symmetric matrix can be diagonalized by a real orthogonal matrix.
prereqs: [linalg.eigenvalues-eigenvectors, linalg.gram-schmidt, linalg.inner-product-spaces, linalg.determinants]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§6.3 (eigenvalues real, eigenvectors orthogonal, completeness) pp. 310-311; §6.4 (unitary diagonalization, columns of the transformation, trace and determinant) pp. 311-313"
    pages: "310-313"
    role: statement route for reality, orthogonality and the existence of an orthonormal eigenbasis; unitary diagonalization and the role of the eigenvector columns; what degeneracy leaves free
  - work: rhb-2006
    loc: "§8.13.1-§8.13.2 (Gram-Schmidt inside a degenerate eigenspace, completeness, spectral resolution Eq. (8.80), reality of the eigenvalues) pp. 274-277; §8.16-§8.17 (real symmetric case diagonalized by an orthogonal S) pp. 287, 289"
    pages: "274-277, 287, 289"
    role: reality of the eigenvalues; orthonormalisation within a degenerate eigenspace; the spectral resolution; the real symmetric case with a real orthogonal transformation
  - work: hassani-2013
    loc: "§6.4, Thm 6.4.3 (an invariant subspace of a normal operator reduces it) p. 177, Cor 6.4.9 (orthonormal eigenbasis for a normal operator) p. 181 and Cor 6.4.13 (a Hermitian matrix is unitarily diagonalizable) p. 182"
    pages: "177, 181-182"
    role: the orthonormal eigenbasis and the unitary diagonalization, stated for operators; the reduction to the orthogonal complement of an eigenvector, which is the induction step of our proof
---

:::definition[Hermitian matrix]{provenance=adapted src="rhb-2006:§8.12.5, p. 271; arfken-2013:§6.3, p. 310"}
For a complex $m \times n$ matrix $A$, the **Hermitian conjugate** (adjoint) $A^\dagger$ is the conjugate transpose, $(A^\dagger)_{ij} = \overline{A_{ji}}$. On $\mathbb{C}^n$ we use the inner product
$$
(x, y) = \sum_{i=1}^{n} x_i \overline{y_i} = y^\dagger x ,
$$
which is linear in the first slot and conjugate-linear in the second, with $\|x\|^2 = (x, x)$.

A square matrix $A$ is **Hermitian** if $A = A^\dagger$, equivalently if $(A x, y) = (x, A y)$ for all $x, y \in \mathbb{C}^n$. For a matrix with real entries this is the condition $A = A^{\mathsf T}$, i.e. that $A$ is **symmetric**. A matrix $U$ is **unitary** if $U^\dagger U = I$, and a real matrix $Q$ is **orthogonal** if $Q^{\mathsf T} Q = I$; see :ref[unitary and orthogonal matrices]{to=linalg.unitary-orthogonal-matrices}.
:::

:::statement[Spectral theorem]{provenance=adapted src="arfken-2013:§6.3, pp. 310-311 and §6.4, pp. 311-313; rhb-2006:§8.13.1-§8.13.2, pp. 274-277; hassani-2013:Cor 6.4.9, p. 181 and Cor 6.4.13, p. 182"}
Let $A$ be an $n \times n$ complex matrix with $A = A^\dagger$. Then:

1. **Reality.** Every eigenvalue of $A$ is real.
2. **Orthogonality.** If $A x = \lambda x$, $A y = \mu y$ and $\lambda \neq \mu$, then $(x, y) = 0$.
3. **Orthonormal eigenbasis.** There is an orthonormal basis $u_1, \dots, u_n$ of $\mathbb{C}^n$ with $A u_k = \lambda_k u_k$, the $\lambda_k$ real and listed with repetitions. Within a degenerate eigenspace the basis is not forced on you: any linearly independent set spanning the eigenspace can be orthonormalised by the Gram-Schmidt process, and the result is still an eigenbasis of that eigenspace.
4. **Unitary diagonalization.** Equivalently, the matrix $U = (u_1 \ \cdots \ u_n)$ whose columns are such a basis is unitary and
$$
U^\dagger A U = \Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n), \qquad \text{so} \qquad A = U \Lambda U^\dagger .
$$
5. **Spectral resolution.** Writing this out columnwise, $\displaystyle A = \sum_{k=1}^{n} \lambda_k\, u_k u_k^\dagger$, and $\operatorname{tr} A = \sum_k \lambda_k$, $\det A = \prod_k \lambda_k$.
6. **Real symmetric case.** If in addition $A$ is real, then $A = A^{\mathsf T}$, the eigenvalues are real, and the $u_k$ may be chosen real, so that $S = (u_1 \ \cdots \ u_n)$ is a real orthogonal matrix with $S^{\mathsf T} A S = \Lambda$.
:::

:::idea{provenance=original}
Parts 1 and 2 are one manoeuvre done twice: move $A$ from one side of the inner product to the other, which is free because $A = A^\dagger$, and compare the two readings of the same number. A conjugate appears on one side and not on the other, and that mismatch is what makes the eigenvalue real and makes eigenvectors belonging to different eigenvalues perpendicular. Part 3 is where the work is. It is an induction that peels off one direction at a time: over $\mathbb{C}$ there is always at least one eigenvalue, and the hyperplane perpendicular to its eigenvector is again carried into itself by $A$ — this is the third use of $A = A^\dagger$ — so the same argument runs in one dimension lower. Parts 4 and 5 then only restate part 3: an orthonormal basis written as the columns of a matrix is a unitary matrix, and $A = U\Lambda U^\dagger$ read entry by entry is the spectral resolution.
:::

:::proof{provenance=adapted src="arfken-2013:§6.3, Eqs. (6.17)-(6.21), pp. 310-311, and §6.4, Eqs. (6.22)-(6.24), pp. 311-312; rhb-2006:§8.13.2, Eqs. (8.81)-(8.84), pp. 276-277; hassani-2013:§6.4, Thm 6.4.3, p. 177, Cor 6.4.9, p. 181, and Cor 6.4.13, p. 182"}
Throughout we use hermiticity in the form $(Ax,y) = (x,Ay)$ recorded in the definition, and conjugate-linearity of $(\cdot,\cdot)$ in its second slot.

**Part 1.** Let $A x = \lambda x$ with $x\neq0$. Then

$$
\lambda\,(x,x) = (\lambda x, x) = (Ax,x) = (x,Ax) = (x,\lambda x) = \overline{\lambda}\,(x,x) ,
$$

the second-to-last step using $A = A^\dagger$ and the last conjugate-linearity in the second slot. Since $x\neq0$ gives $(x,x) = \|x\|^2>0$, we may cancel it and conclude $\lambda = \overline\lambda$, that is $\lambda\in\mathbb{R}$.

**Part 2.** Let $Ax = \lambda x$, $Ay = \mu y$ with $\lambda\neq\mu$; both are real by part 1. Then

$$
\lambda\,(x,y) = (Ax,y) = (x,Ay) = (x,\mu y) = \overline{\mu}\,(x,y) = \mu\,(x,y) ,
$$

where the last equality uses that $\mu$ is real. Hence $(\lambda-\mu)(x,y) = 0$, and $\lambda\neq\mu$ forces $(x,y) = 0$.

**Part 3.** We prove, by induction on $d$, the following statement: *if $W$ is a complex inner product space with $\dim_{\mathbb{C}}W = d\ge1$ and $T\colon W\to W$ is linear with $(Tx,y) = (x,Ty)$ for all $x,y\in W$, then $W$ has an orthonormal basis of eigenvectors of $T$, and the corresponding eigenvalues are real.* Taking $W = \mathbb{C}^n$ and $T = A$ gives part 3.

For $d=1$, any unit vector $u$ of $W$ spans it, so $Tu$ is a multiple of $u$ and $(u)$ is such a basis; the eigenvalue is real by the computation of part 1, which used nothing but $(Tx,y) = (x,Ty)$.

Let $d\ge2$ and assume the statement in dimension $d-1$. Fixing any basis of $W$ represents $T$ by a $d\times d$ complex matrix, which has an eigenvalue by part 1 of :ref[Eigenvalues and eigenvectors]{to=linalg.eigenvalues-eigenvectors}; so there are $\lambda_1\in\mathbb{C}$ and $u_1\in W$ with $u_1\neq0$ and $Tu_1 = \lambda_1u_1$, and we may scale $u_1$ to $\|u_1\| = 1$. By part 1, $\lambda_1$ is real. Put

$$
W_1 = \{w\in W : (w,u_1) = 0\} .
$$

*$W_1$ has dimension $d-1$.* Extend $(u_1)$ to an orthonormal basis $(u_1,f_2,\dots,f_d)$ of $W$, which is possible by part 3 of the Gram-Schmidt statement in :ref[Orthonormal bases and Gram-Schmidt]{to=linalg.gram-schmidt}. By the expansion statement there, $w = (w,u_1)u_1+\sum_{i\ge2}(w,f_i)f_i$ for every $w\in W$, so $(w,u_1) = 0$ holds exactly when $w\in\operatorname{span}\{f_2,\dots,f_d\}$. Hence $W_1 = \operatorname{span}\{f_2,\dots,f_d\}$, an inner product space of dimension $d-1$ under the restricted inner product.

*$T$ maps $W_1$ into itself.* For $w\in W_1$,

$$
(Tw,u_1) = (w,Tu_1) = (w,\lambda_1u_1) = \overline{\lambda_1}\,(w,u_1) = 0 ,
$$

the first equality being the hypothesis on $T$. So $Tw\in W_1$.

The restriction of $T$ to $W_1$ is linear and still satisfies $(Tx,y) = (x,Ty)$ for $x,y\in W_1$, so the induction hypothesis supplies an orthonormal basis $u_2,\dots,u_d$ of $W_1$ consisting of eigenvectors of $T$ with real eigenvalues. Each $u_i$ with $i\ge2$ lies in $W_1$ and is therefore orthogonal to $u_1$, so $(u_1,\dots,u_d)$ is orthonormal; it has $d$ members in a space of dimension $d$, hence is a basis by part 1 of the expansion statement. This completes the induction.

*The freedom inside a degenerate eigenspace.* Let $\lambda$ be an eigenvalue of $A$ and let $(w_1,\dots,w_d)$ be any linearly independent list spanning $E_\lambda$. Gram-Schmidt applied inside the inner product space $E_\lambda$ returns an orthonormal basis of $E_\lambda$, and each output is a linear combination of $w_1,\dots,w_d$, hence still an element of the subspace $E_\lambda$, hence still an eigenvector for $\lambda$. Doing this in each eigenspace and taking the union gives an orthonormal set, because vectors drawn from eigenspaces of different eigenvalues are orthogonal by part 2 and those drawn from one eigenspace are orthonormal by construction.

It remains to see that this set is a basis of $\mathbb{C}^n$, that is that $\sum_\lambda\dim E_\lambda = n$, the sum running over the distinct eigenvalues. One inequality comes from the eigenbasis $u_1,\dots,u_n$ just constructed: sorting its members by eigenvalue, the $k_\lambda$ of them lying in $E_\lambda$ are linearly independent elements of $E_\lambda$, so $k_\lambda\le\dim E_\lambda$, and summing over $\lambda$ gives $n = \sum_\lambda k_\lambda\le\sum_\lambda\dim E_\lambda$. The other comes from the union itself: being orthonormal it is linearly independent, by part 1 of the expansion statement in :ref[Orthonormal bases and Gram-Schmidt]{to=linalg.gram-schmidt}, and it has $\sum_\lambda\dim E_\lambda$ members in $\mathbb{C}^n$, so $\sum_\lambda\dim E_\lambda\le n$. Hence the two are equal to $n$, and an orthonormal list of $n$ vectors in $\mathbb{C}^n$ is an orthonormal basis.

**Part 4.** Let $U = (u_1\ \cdots\ u_n)$ for such a basis. Then

$$
(U^\dagger U)_{ij} = \sum_{l=1}^{n}\overline{U_{li}}\,U_{lj} = (u_j,u_i) = \delta_{ij} ,
$$

so $U^\dagger U = I$: $U$ is unitary and $U^{-1} = U^\dagger$. Column $j$ of $AU$ is $Au_j = \lambda_ju_j$, which is also column $j$ of $U\Lambda$; so $AU = U\Lambda$, and multiplying on the left by $U^\dagger$ gives $U^\dagger AU = \Lambda$, on the right by $U^\dagger$ gives $A = U\Lambda U^\dagger$.

**Part 5.** Read $A = U\Lambda U^\dagger$ entry by entry:

$$
A_{ij} = \sum_{k=1}^{n}U_{ik}\lambda_k\overline{U_{jk}} = \sum_{k=1}^{n}\lambda_k\,(u_k)_i\,\overline{(u_k)_j} = \Bigl(\sum_{k=1}^{n}\lambda_k\,u_ku_k^\dagger\Bigr)_{ij} .
$$

For the last two identities, $\Lambda = U^{-1}AU$ is similar to $A$, so it has the same trace and the same determinant (:ref[Eigenvalues and eigenvectors]{to=linalg.eigenvalues-eigenvectors}, second statement, part 4); and for a diagonal matrix those are $\sum_k\lambda_k$ and $\prod_k\lambda_k$ read off the diagonal.

**Part 6.** Let $A$ be real with $A = A^{\mathsf T}$; then $A = A^\dagger$, so every eigenvalue of $A$ is real by part 1. Give $\mathbb{R}^n$ the real inner product $x\cdot y = \sum_ix_iy_i$, which is symmetric, so that $A = A^{\mathsf T}$ reads $(Aw)\cdot z = w\cdot(Az)$.

We prove by induction on $d$: *if $W\subseteq\mathbb{R}^n$ is a subspace with $\dim_{\mathbb{R}}W = d\ge1$ and $AW\subseteq W$, then $W$ has an orthonormal basis of real eigenvectors of $A$.* Part 6 is the case $W = \mathbb{R}^n$, which satisfies $A\mathbb{R}^n\subseteq\mathbb{R}^n$ because $A$ is real.

*One real eigenvector in $W$.* The point of the induction is that the restriction of $A$ to $W$ must be made to look symmetric again, and for that the basis of $W$ has to be orthonormal. So take an orthonormal basis $(f_1,\dots,f_d)$ of $W$, which exists by part 3 of the Gram-Schmidt statement in :ref[Orthonormal bases and Gram-Schmidt]{to=linalg.gram-schmidt} applied to the real inner product space $W$ (the statement is proved there over $\mathbb{R}$ as well as over $\mathbb{C}$). Let $B\in M_{d\times d}(\mathbb{R})$ be the matrix of $A|_W$ in that basis, so $Af_j = \sum_iB_{ij}f_i$; pairing with $f_i$ and using orthonormality gives $B_{ij} = (Af_j)\cdot f_i$. Then

$$
B_{ji} = (Af_i)\cdot f_j = f_i\cdot(Af_j) = (Af_j)\cdot f_i = B_{ij} ,
$$

the middle equality being $A = A^{\mathsf T}$ and the last the symmetry of the real inner product. So $B$ is real symmetric, hence Hermitian as a complex matrix. Read as a complex matrix it has an eigenvalue (:ref[Eigenvalues and eigenvectors]{to=linalg.eigenvalues-eigenvectors}, first statement, part 1, which applies because $d\ge1$), and that eigenvalue $\lambda$ is real by part 1 above. Therefore $B-\lambda I_d$ is a *real* matrix with $\det(B-\lambda I_d) = 0$, so its columns are linearly dependent over $\mathbb{R}$ (:ref[Determinants]{to=linalg.determinants}): there is a real $c\neq0$ in $\mathbb{R}^d$ with $(B-\lambda I_d)c = 0$. Setting $u = \sum_jc_jf_j$, a non-zero real vector of $W$,

$$
Au = \sum_jc_jAf_j = \sum_i\Bigl(\sum_jB_{ij}c_j\Bigr)f_i = \lambda\sum_ic_if_i = \lambda u .
$$

Scale $u$ to $\lVert u\rVert = 1$. If $d = 1$ then $(u)$ is the required basis and we are done.

*Peeling it off.* Let $d\ge2$ and put $W' = \{w\in W : w\cdot u = 0\}$. Expanding any $w\in W$ in an orthonormal basis of $W$ whose first member is $u$ — which Gram-Schmidt supplies, by part 3 of the Gram-Schmidt statement applied inside $W$ — shows $\dim_{\mathbb{R}}W' = d-1$, exactly as in part 3. And $AW'\subseteq W'$: for $w\in W'$ we have $Aw\in W$ because $AW\subseteq W$, and

$$
(Aw)\cdot u = w\cdot(Au) = \lambda\,(w\cdot u) = 0 .
$$

By the induction hypothesis $W'$ has an orthonormal basis $u_2,\dots,u_d$ of real eigenvectors of $A$; each lies in $W'$ and so is orthogonal to $u$, so $(u,u_2,\dots,u_d)$ is an orthonormal list of $d$ vectors in $W$, hence a basis of $W$, and all of its members are real eigenvectors of $A$. This closes the induction.

Applying it to $W = \mathbb{R}^n$ gives a real orthonormal basis $u_1,\dots,u_n$ of $\mathbb{R}^n$ of eigenvectors of $A$, with real eigenvalues $\lambda_1,\dots,\lambda_n$. Then $S = (u_1\ \cdots\ u_n)$ satisfies $S^{\mathsf T}S = I$ and $S^{\mathsf T}AS = \Lambda$ by the computation of part 4 with every conjugation removed. $\square$
:::

:::note{provenance=original}
A Hermitian matrix is, after a rotation of the coordinate axes, just a list of real numbers: it stretches $n$ mutually perpendicular directions by $n$ real factors and does nothing else. This is why Hermitian operators model observables (real measured values, orthogonal states) and why a real symmetric matrix always has principal axes. Reach for it whenever a matrix built as a Gram matrix, a Hessian, an energy or an adjacency matrix turns out to equal its own adjoint.
:::

:::remark[Where the hypotheses are used, and conventions]{provenance=original}
**Real eigenvalues are not enough.** $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has the single real eigenvalue $1$ but a one-dimensional eigenspace, so no eigenbasis exists; it is not symmetric. Part 3 is a statement about $A = A^\dagger$, not about where the spectrum lies.

**Diagonalizability is not enough; orthogonality is exactly enough.** $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$ and $\begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$ have the same eigenvalues, and the second is diagonalizable, but only the first is symmetric and only the first has orthogonal eigenvectors. The converse of parts 3-4 holds in the sharp form: if $U^\dagger A U$ is diagonal with real entries for some unitary $U$, then $A = U \Lambda U^\dagger$ satisfies $A^\dagger = A$. Dropping "real entries" gives exactly the normal matrices; see :ref[normal matrices]{to=linalg.normal-matrices}.

**No Hermitian matrix is defective.** Part 3 supplies $n$ independent eigenvectors, so geometric and algebraic multiplicity agree for every eigenvalue of a Hermitian matrix.

**Conventions.** Some books state part 4 as "$U A U^{-1}$ is diagonal", with the *columns of $U^{-1}$*, not of $U$, being the eigenvectors; that is the same statement with $U$ replaced by $U^\dagger$. Mathematical texts write $A^*$ for $A^\dagger$ and say "self-adjoint" where physics texts say "Hermitian". Our inner product is linear in the first argument; texts that take it linear in the second obtain $(x, Ay) = (A x, y)$ in the same form, because $A$ is Hermitian, so no statement above changes.
:::

:::example[A real symmetric matrix with a degenerate eigenvalue]{provenance=original}
Let

$$
H = \begin{pmatrix}6&2&-4\\2&3&-2\\-4&-2&6\end{pmatrix} = H^{\mathsf T} .
$$

**Eigenvalues.** Expanding $\det(H-\lambda I)$ along the first row, with $(3-\lambda)(6-\lambda)-4 = \lambda^2-9\lambda+14$,

$$
\det(H-\lambda I) = (6-\lambda)(\lambda^2-9\lambda+14)-2(4-2\lambda)-4(8-4\lambda) = -\lambda^3+15\lambda^2-48\lambda+44 ,
$$

which factors as $-(\lambda-11)(\lambda-2)^2$. The eigenvalues $11,2,2$ are real, as part 1 requires, and the two checks hold: $\operatorname{tr}H = 6+3+6 = 15 = 11+2+2$ and $\det H = 44 = 11\cdot2\cdot2$.

**The simple eigenvalue.** The rows of $H-11I = \begin{pmatrix}-5&2&-4\\2&-8&-2\\-4&-2&-5\end{pmatrix}$ reduce to $x_1 = -x_3$ and $2x_2 = -x_3$, so $E_{11} = \operatorname{span}\{(2,1,-2)\}$. Since $\|(2,1,-2)\| = 3$, take

$$
u_1 = \tfrac13(2,1,-2), \qquad Hu_1 = \tfrac13(22,11,-22) = 11u_1 .
$$

**The degenerate eigenvalue.** Every row of $H-2I = \begin{pmatrix}4&2&-4\\2&1&-2\\-4&-2&4\end{pmatrix}$ is a multiple of $(2,1,-2)$, so $E_2$ is the plane $2x_1+x_2-2x_3 = 0$, of dimension $2$: here $g = m = 2$, as part 3 requires, since an eigenbasis of $\mathbb{R}^3$ has to take two of its three members from $E_2$. A convenient spanning pair is

$$
v_1 = (1,0,1), \qquad v_2 = (0,2,1) ,
$$

and these are *not* orthogonal: $v_1\cdot v_2 = 1$. Part 3 says Gram-Schmidt inside $E_2$ fixes that. First $\|v_1\| = \sqrt2$, so $q_1 = \tfrac{1}{\sqrt2}(1,0,1)$. Then $v_2\cdot q_1 = 1/\sqrt2$ and

$$
v_2-\tfrac{1}{\sqrt2}q_1 = (0,2,1)-\tfrac12(1,0,1) = \tfrac12(-1,4,1) ,
$$

of norm $\tfrac12\sqrt{18} = \tfrac{3}{\sqrt2}$, so $q_2 = \tfrac{1}{3\sqrt2}(-1,4,1)$. Both are still in $E_2$ — check $2(-1)+4-2(1) = 0$ — hence still eigenvectors for $\lambda = 2$.

**Orthogonality across eigenspaces** is automatic by part 2, and visibly so: $u_1\cdot q_1 = \frac{2-2}{3\sqrt2} = 0$ and $u_1\cdot q_2 = \frac{-2+4-2}{9\sqrt2} = 0$.

**The diagonalizing matrix.** Put

$$
S = \begin{pmatrix}
2/3 & 1/\sqrt2 & -1/(3\sqrt2)\\
1/3 & 0 & 4/(3\sqrt2)\\
-2/3 & 1/\sqrt2 & 1/(3\sqrt2)
\end{pmatrix} .
$$

Its columns are orthonormal: each was normalised to length $1$ above, the two pairings $u_1\cdot q_1$ and $u_1\cdot q_2$ were just computed, and $q_1\cdot q_2 = 0$ holds by the Gram-Schmidt construction of $q_2$ — which one can also read off directly, $q_1\cdot q_2 = \frac{-1+0+1}{6} = 0$. So $S^{\mathsf T}S = I_3$ and $S^{\mathsf T}HS = \operatorname{diag}(11,2,2)$, which is part 6.

**The spectral resolution, checked.** Part 5 reads $H = 11\,u_1u_1^{\mathsf T}+2\,q_1q_1^{\mathsf T}+2\,q_2q_2^{\mathsf T}$. Because the three projectors sum to $I$, this is the same as $H = 2I+9\,u_1u_1^{\mathsf T}$, and

$$
9\,u_1u_1^{\mathsf T} = 9\cdot\tfrac19\begin{pmatrix}4&2&-4\\2&1&-2\\-4&-2&4\end{pmatrix} = H-2I ,
$$

which is exactly the matrix $H-2I$ written out above.
:::

:::example[A complex Hermitian matrix of size two]{provenance=original}
Let

$$
H = \begin{pmatrix}1&1+i\\1-i&0\end{pmatrix} .
$$

It is Hermitian: the diagonal is real and the off-diagonal entries are conjugates. Since $(1+i)(1-i) = 2$,

$$
\det(H-\lambda I) = (1-\lambda)(-\lambda)-2 = \lambda^2-\lambda-2 = (\lambda-2)(\lambda+1) ,
$$

so the eigenvalues are $2$ and $-1$: real, and summing to $\operatorname{tr}H = 1$ with product $\det H = -2$.

For $\lambda = 2$, the first row of $H-2I$ gives $-x_1+(1+i)x_2 = 0$, so $x = (1+i,1)$ spans $E_2$; its squared norm is $2+1 = 3$. For $\lambda = -1$, the first row of $H+I$ gives $2x_1+(1+i)x_2 = 0$, hence $x_2 = -\tfrac{2}{1+i}x_1 = -(1-i)x_1$, so $x = (1,-1+i)$ spans $E_{-1}$, again of squared norm $3$. Normalising,

$$
u_1 = \tfrac{1}{\sqrt3}(1+i,\,1), \qquad u_2 = \tfrac{1}{\sqrt3}(1,\,-1+i) .
$$

Part 2 is confirmed directly: $(u_1,u_2) = \tfrac13\bigl[(1+i)\overline{1}+1\cdot\overline{(-1+i)}\bigr] = \tfrac13\bigl[(1+i)+(-1-i)\bigr] = 0$. Note where the conjugate sits — without it the two vectors would not come out orthogonal.

**Spectral resolution.** With

$$
u_1u_1^\dagger = \tfrac13\begin{pmatrix}2&1+i\\1-i&1\end{pmatrix}, \qquad
u_2u_2^\dagger = \tfrac13\begin{pmatrix}1&-1-i\\-1+i&2\end{pmatrix} ,
$$

part 5 predicts

$$
2u_1u_1^\dagger-u_2u_2^\dagger = \tfrac13\begin{pmatrix}4-1&2+2i+1+i\\2-2i+1-i&2-2\end{pmatrix} = \tfrac13\begin{pmatrix}3&3+3i\\3-3i&0\end{pmatrix} = \begin{pmatrix}1&1+i\\1-i&0\end{pmatrix} = H .
$$

Inside the bracket each slot is $2(u_1u_1^\dagger)_{ij}-(u_2u_2^\dagger)_{ij}$ with the common factor $\tfrac13$ pulled out; in the $(2,1)$ slot that is $2(1-i)-(-1+i) = 2-2i+1-i = 3-3i$, where the minus sign in front of $u_2u_2^\dagger$ and the minus signs inside it combine, and in the $(1,2)$ slot it is the conjugate $3+3i$.

Equivalently $U = \tfrac{1}{\sqrt3}\begin{pmatrix}1+i&1\\1&-1+i\end{pmatrix}$ satisfies $U^\dagger U = I_2$ and $U^\dagger HU = \operatorname{diag}(2,-1)$.
:::

:::application{provenance=original}
**Observables and measurement.** Quantum mechanics represents a measurable quantity by a Hermitian operator, and the theorem is what makes that representation coherent: part 1 says the possible measured values are real, part 2 says states with different values are distinguishable (orthogonal), and part 3 says every state can be expanded in states of definite value, with $\lvert(\psi,u_k)\rvert^2$ the probability of the outcome $\lambda_k$. Part 5 is the resolution of the identity that textbook derivations insert between operators, and the geometric multiplicity of an eigenvalue is the degeneracy of that energy level. For $2\times2$ problems the matrix of the second example is the generic case: any Hermitian $2\times2$ matrix is $aI+\mathbf{b}\cdot\boldsymbol{\sigma}$ with $a$ and $\mathbf{b}$ real, so its eigenvalues are $a\pm\lvert\mathbf{b}\rvert$ and its eigenvectors are the spin states along $\mathbf{b}$.

**Principal axes.** A real symmetric matrix met as a physical tensor acquires, through part 6, a frame in which it is diagonal and which is still a genuine rotation or reflection of space. For the inertia tensor these are the principal axes and the eigenvalues are the principal moments, which is why a rigid body has three special axes about which it can spin without wobble; for the stress tensor they are the principal stresses and the directions of zero shear; for the strain tensor they give the directions of pure extension; for the Hessian of a potential they give the directions of pure curvature, with the signs of the eigenvalues classifying the critical point. In each case the content of part 6 is that the diagonalizing change of coordinates is orthogonal, so lengths and angles — and therefore the physics — are unchanged.

**Small oscillations and data.** A system near a stable equilibrium has a symmetric stiffness matrix and a symmetric positive-definite mass matrix, and the simultaneous diagonalization of the two is what produces normal modes with definite frequencies, each oscillating independently (:ref[Generalized eigenproblems and normal modes]{to=linalg.normal-modes}). The same theorem underlies principal component analysis: a covariance matrix is symmetric by construction, its orthonormal eigenvectors are the principal directions of a cloud of data, and the eigenvalues are the variances along them, so part 5 decomposes the covariance into uncorrelated contributions ranked by size. Because the eigenvalues are real they can be ordered, which is what makes the Rayleigh quotient a usable bound on them (:ref[Quadratic forms and the Rayleigh quotient]{to=linalg.quadratic-forms}).
:::
