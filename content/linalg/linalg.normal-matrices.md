---
id: linalg.normal-matrices
title: Normal matrices and simultaneous diagonalization
kind: theorem
level: core
summary: A complex matrix has an orthonormal eigenbasis exactly when it is normal, and two normal matrices can be given a common orthonormal eigenbasis exactly when they commute.
prereqs: [linalg.hermitian-spectral-theorem, linalg.unitary-orthogonal-matrices, linalg.inner-product-spaces, linalg.gram-schmidt]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§8.12.7 (definition; Hermitian and unitary matrices are normal; the inverse of a normal matrix) p. 272; §8.13.1 (eigenvalues of the adjoint, orthogonality, orthonormalisation in a degenerate eigenspace, spectral resolution Eq. (8.80)) pp. 274-276; §8.13.5 (simultaneous eigenvectors) pp. 278-279"
    pages: "272, 274-276, 278-279"
    role: definition and examples; the adjoint relation and orthogonality of eigenvectors; the spectral resolution; the commutation criterion for a common eigenbasis
  - work: hassani-2013
    loc: "§6.4, Thm 6.4.8 and Cor 6.4.9 (spectral decomposition of a normal operator; orthonormal eigenbasis) pp. 180-181; Lemma 6.4.17 and Thm 6.4.18 (simultaneous diagonalizability iff the commutator vanishes) pp. 186-187"
    pages: "180-181, 186-187"
    role: the orthonormal eigenbasis for a normal operator; the necessary and sufficient commutation condition for simultaneous diagonalization
  - work: arfken-2013
    loc: "§6.5, 'Simultaneous Diagonalization', p. 314 and 'Nonnormal Matrices'/'Defective Matrices', pp. 322, 324"
    pages: "314, 322, 324"
    role: the commutation criterion for a common set of eigenvectors; non-normal matrices need not have orthogonal or complete eigenvectors
---

:::definition[Normal matrix]{provenance=adapted src="rhb-2006:§8.12.7, p. 272"}
An $n \times n$ complex matrix $A$ is **normal** if it commutes with its Hermitian conjugate:

$$
A A^\dagger = A^\dagger A .
$$

Hermitian matrices ($A = A^\dagger$), anti-Hermitian matrices ($A^\dagger = -A$) and unitary matrices ($A^\dagger = A^{-1}$) are normal, since in each case $A^\dagger$ is a function of $A$ that commutes with it; in the real case this covers symmetric, antisymmetric and orthogonal matrices. If $A$ is normal and invertible then $A^{-1}$ is normal.
:::

:::statement[Spectral theorem for normal matrices]{provenance=adapted src="hassani-2013:Thm 6.4.8 and Cor 6.4.9, pp. 180-181; rhb-2006:§8.13.1, pp. 274-276"}
Let $A$ be a normal $n \times n$ complex matrix, with distinct eigenvalues $\lambda_1, \dots, \lambda_p$ and eigenspaces $E_{\lambda_j}$. Then:

1. $\mathbb{C}^n = E_{\lambda_1} \oplus \cdots \oplus E_{\lambda_p}$, the summands being mutually orthogonal, and $\mathbb{C}^n$ has an orthonormal basis $u_1, \dots, u_n$ of eigenvectors of $A$. Equivalently, the matrix $U$ with these columns is unitary and $U^\dagger A U = \Lambda = \operatorname{diag}(\lambda_1', \dots, \lambda_n')$, where the $\lambda_k'$ are the eigenvalues listed with multiplicity.
2. **Spectral resolution.** $\displaystyle A = \sum_{j=1}^{p} \lambda_j P_j = \sum_{k=1}^{n} \lambda_k'\, u_k u_k^\dagger$, where $P_j$ is the orthogonal projection onto $E_{\lambda_j}$, so that $P_j = P_j^\dagger = P_j^2$, $P_i P_j = 0$ for $i \neq j$, and $\sum_j P_j = I$.
3. **The adjoint shares the eigenvectors.** If $A x = \lambda x$ then $A^\dagger x = \overline{\lambda} x$; the same $x$ serves both matrices, and $\sigma(A^\dagger) = \{\overline{\lambda} : \lambda \in \sigma(A)\}$.
4. Eigenvectors belonging to distinct eigenvalues are orthogonal, and within one eigenspace any spanning independent set may be replaced by an orthonormal one by the Gram-Schmidt process.
:::

:::idea{provenance=original}
A normal matrix is a complex combination of two commuting Hermitian ones: put $H = \tfrac12(A + A^\dagger)$ and $K = \tfrac{1}{2i}(A - A^\dagger)$, so that $A = H + iK$, and then normality of $A$ is *exactly* the statement $HK = KH$. So the whole theorem reduces to one question about Hermitian matrices, which :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem} already answers one matrix at a time: can two commuting Hermitian matrices be diagonalized in the same orthonormal basis? They can, because each eigenspace of $H$ is carried into itself by $K$, so the Hermitian spectral theorem can be applied a second time inside each eigenspace, where $H$ is already a scalar. A common orthonormal eigenbasis of $H$ and $K$ is then an eigenbasis of $A = H + iK$, with eigenvalues $\alpha_k + i\beta_k$. The remaining parts — that $A^\dagger$ has the same eigenvectors with conjugated eigenvalues, and that distinct eigenvalues give orthogonal eigenvectors — come from the single observation that $\|Bx\| = \|B^\dagger x\|$ whenever $B$ is normal, applied to $B = A - \lambda I$.
:::

:::proof{provenance=adapted src="rhb-2006:§8.13.1, pp. 274-275; hassani-2013:Thm 6.4.8 and Cor 6.4.9, pp. 180-181"}
**A restriction lemma.** Let $W \subseteq \mathbb{C}^n$ be a subspace of dimension $d \ge 1$ that is carried into itself by a matrix $T$ and by $T^\dagger$. Choose an orthonormal basis $w_1, \dots, w_d$ of $W$, which exists by :ref[Gram-Schmidt]{to=linalg.gram-schmidt}, and set $S_{jk} = (T w_k, w_j)$. Since $T w_k$ lies in $W$, expanding it in that orthonormal basis gives $T w_k = \sum_j S_{jk} w_j$: the matrix $S$ represents $T$ on $W$. The matrix representing $T^\dagger$ on $W$ in the same basis has entries
$$
(T^\dagger w_k, w_j) = (w_k, T w_j) = \overline{(T w_j, w_k)} = \overline{S_{kj}} = (S^\dagger)_{jk},
$$
where the first equality is the definition of the adjoint and the second the conjugate symmetry of the inner product (:ref[]{to=linalg.inner-product-spaces}). So $T^\dagger$ is represented by $S^\dagger$. Because $W$ is invariant under both, the restriction of a product is the product of the restrictions, so $TT^\dagger = T^\dagger T$ on $\mathbb{C}^n$ forces $SS^\dagger = S^\dagger S$, and $T = T^\dagger$ forces $S = S^\dagger$: *a Hermitian matrix restricts to a Hermitian matrix, and a normal one to a normal one.*

**Eigenspaces from an eigenbasis.** If $T$ has an orthonormal eigenbasis $u_1, \dots, u_n$ with $Tu_k = \tau_k u_k$, then for each distinct eigenvalue $\tau$ the span $F_\tau$ of those $u_k$ with $\tau_k = \tau$ is the whole eigenspace $E_\tau(T)$. Indeed $F_\tau \subseteq E_\tau(T)$; and if $Tx = \tau x$, then writing $x = \sum_k (x, u_k)u_k$ and applying $T$ gives $\sum_k \tau_k (x,u_k) u_k = \sum_k \tau (x,u_k)u_k$, so $(\tau_k - \tau)(x, u_k) = 0$ for every $k$ and the coefficients with $\tau_k \neq \tau$ vanish, putting $x$ in $F_\tau$. The distinct $F_\tau$ are mutually orthogonal and together span $\mathbb{C}^n$.

**Lemma: two commuting Hermitian matrices have a common orthonormal eigenbasis.** Let $H$ and $K$ be Hermitian with $HK = KH$. By the Hermitian spectral theorem (:ref[]{to=linalg.hermitian-spectral-theorem}) and the previous paragraph, $\mathbb{C}^n$ is the orthogonal direct sum of the eigenspaces $E_\mu(H)$ over the distinct eigenvalues $\mu$ of $H$. Each is invariant under $K$: if $Hx = \mu x$ then
$$
H(Kx) = (HK)x = (KH)x = K(Hx) = \mu\,(Kx),
$$
which is where the commutation hypothesis enters, and it is invariant under $K^\dagger = K$ for the same reason. By the restriction lemma, $K$ is represented on $E_\mu(H)$ by a Hermitian matrix, so the Hermitian spectral theorem applied a second time — now inside $E_\mu(H)$ — produces an orthonormal basis of $E_\mu(H)$ made of eigenvectors of $K$. Every vector of $E_\mu(H)$ is an eigenvector of $H$, so these are eigenvectors of both. Collecting them over all $\mu$ gives $n$ vectors, orthonormal because they are orthonormal inside each eigenspace and the eigenspaces are mutually orthogonal, hence an orthonormal basis.

**Part 1.** Let $A$ be normal and put
$$
H = \tfrac12 (A + A^\dagger), \qquad K = \tfrac{1}{2i}(A - A^\dagger), \qquad \text{so} \qquad A = H + iK, \quad A^\dagger = H - iK .
$$
Both are Hermitian: $H^\dagger = \tfrac12(A^\dagger + A) = H$, and $K^\dagger = -\tfrac{1}{2i}(A^\dagger - A) = K$. Multiplying out,
$$
A A^\dagger = H^2 + K^2 + i(KH - HK), \qquad A^\dagger A = H^2 + K^2 + i(HK - KH),
$$
so $AA^\dagger - A^\dagger A = 2i(KH - HK)$ and the normality hypothesis says precisely that $HK = KH$. The lemma then gives an orthonormal basis $u_1, \dots, u_n$ with $Hu_k = \alpha_k u_k$ and $K u_k = \beta_k u_k$, the $\alpha_k, \beta_k$ real, whence
$$
A u_k = (H + iK)u_k = (\alpha_k + i\beta_k)\,u_k =: \lambda_k' u_k .
$$
So $\mathbb{C}^n$ has an orthonormal basis of eigenvectors of $A$. The matrix $U = (u_1\ \cdots\ u_n)$ has orthonormal columns, so it is unitary (:ref[]{to=linalg.unitary-orthogonal-matrices}, part 2 of the characterisation), and
$$
(U^\dagger A U)_{jk} = u_j^\dagger A u_k = \lambda_k'\, u_j^\dagger u_k = \lambda_k'\,\delta_{jk},
$$
that is $U^\dagger A U = \Lambda$. The eigenspace decomposition $\mathbb{C}^n = E_{\lambda_1} \oplus \cdots \oplus E_{\lambda_p}$ with mutually orthogonal summands is then the "eigenspaces from an eigenbasis" paragraph applied to $A$.

**Part 3.** First, for *any* normal $B$ and any $x$,
$$
\|Bx\|^2 = x^\dagger B^\dagger B x = x^\dagger B B^\dagger x = \|B^\dagger x\|^2 .
$$
Next, $B = A - \lambda I$ is normal whenever $A$ is: expanding,
$$
B^\dagger B = A^\dagger A - \overline{\lambda}A - \lambda A^\dagger + |\lambda|^2 I , \qquad
B B^\dagger = A A^\dagger - \overline{\lambda}A - \lambda A^\dagger + |\lambda|^2 I ,
$$
and these agree because $A^\dagger A = AA^\dagger$. Combining the two displays with $B = A - \lambda I$ and $B^\dagger = A^\dagger - \overline{\lambda} I$,
$$
A x = \lambda x \iff \|(A - \lambda I)x\| = 0 \iff \|(A^\dagger - \overline{\lambda}I)x\| = 0 \iff A^\dagger x = \overline{\lambda}x ,
$$
using that a vector of norm zero is zero. The same non-zero $x$ witnesses both, so $\sigma(A^\dagger) = \{\overline\lambda : \lambda \in \sigma(A)\}$. (This is the route of Riley, Hobson and Bence, who note that $A - \lambda I$ inherits normality and then read off $B^\dagger x = 0$ from $x^\dagger B^\dagger B x = 0$.)

**Part 4.** Let $Ax = \lambda x$ and $Ay = \mu y$ with $\lambda \neq \mu$. Using part 3 at $y$, so that $A^\dagger y = \overline{\mu}y$, and the conjugate-linearity of $(\cdot,\cdot)$ in its second slot,
$$
\lambda\,(x,y) = (Ax, y) = y^\dagger A x = (x, A^\dagger y) = (x, \overline{\mu}\,y) = \mu\,(x,y) .
$$
Hence $(\lambda - \mu)(x,y) = 0$, and $\lambda \neq \mu$ forces $(x,y) = 0$. Within a single eigenspace there is no such constraint, but $E_\lambda$ is a subspace, so any linearly independent spanning set of it can be replaced by an orthonormal basis of it by :ref[Gram-Schmidt]{to=linalg.gram-schmidt}, and every vector of $E_\lambda$ is still an eigenvector for $\lambda$.

**Part 2.** From $U^\dagger A U = \Lambda$ we get $A = U\Lambda U^\dagger$, and reading the product columnwise, $A = \sum_{k=1}^n \lambda_k'\, u_k u_k^\dagger$. For each distinct eigenvalue $\lambda_j$ let $I_j = \{k : \lambda_k' = \lambda_j\}$ and $P_j = \sum_{k \in I_j} u_k u_k^\dagger$. Then $P_j^\dagger = P_j$, and $P_i P_j = \sum_{k \in I_i}\sum_{l \in I_j} u_k (u_k^\dagger u_l) u_l^\dagger = \delta_{ij}P_j$ by orthonormality, so each $P_j$ is idempotent and $P_iP_j = 0$ for $i \neq j$. Also $\sum_j P_j = \sum_{k=1}^n u_k u_k^\dagger = UU^\dagger = I$. The image of $P_j$ is exactly $E_{\lambda_j}$: it is contained in it because each $u_k$ with $k \in I_j$ lies there, and it contains it because $x \in E_{\lambda_j}$ has $(x, u_k) = 0$ for $k \notin I_j$ by the "eigenspaces from an eigenbasis" paragraph, so $x = \sum_k (x,u_k)u_k = P_j x$. A Hermitian idempotent with image $E_{\lambda_j}$ is the orthogonal projection onto $E_{\lambda_j}$. Finally, grouping the terms of $A = \sum_k \lambda_k' u_ku_k^\dagger$ by eigenvalue gives $A = \sum_j \lambda_j P_j$. $\square$
:::

:::statement[Normality is exactly unitary diagonalizability]{provenance=original}
Conversely, if $U^\dagger A U = \Lambda$ is diagonal for some unitary $U$, then $A = U \Lambda U^\dagger$ and

$$
A A^\dagger = U \Lambda \overline{\Lambda} U^\dagger = U \overline{\Lambda} \Lambda U^\dagger = A^\dagger A ,
$$

because diagonal matrices commute. So for an $n \times n$ complex matrix $A$:

$$
A \text{ is normal} \iff \mathbb{C}^n \text{ has an orthonormal basis of eigenvectors of } A \iff U^\dagger A U \text{ is diagonal for some unitary } U .
$$

Reading off the diagonal gives the sharper classification: a normal matrix is Hermitian exactly when $\sigma(A) \subset \mathbb{R}$, anti-Hermitian exactly when $\sigma(A) \subset i\mathbb{R}$, unitary exactly when $\sigma(A)$ lies on the unit circle, and an orthogonal projection exactly when $\sigma(A) \subseteq \{0, 1\}$.
:::

:::idea{provenance=original}
Once $A = U\Lambda U^\dagger$, every identity between $A$ and $A^\dagger$ becomes the same identity between $\Lambda$ and $\overline{\Lambda}$, because conjugating by a fixed unitary matrix is injective and respects products. So each of the four special classes is read off the diagonal entry by entry: being Hermitian is $\lambda = \overline\lambda$, being unitary is $|\lambda| = 1$, and so on.
:::

:::proof{provenance=original}
**The equivalence.** If $A$ is normal, part 1 of the previous statement gives an orthonormal eigenbasis and the unitary $U$ with $U^\dagger A U = \Lambda$. If $\mathbb{C}^n$ has an orthonormal eigenbasis of $A$, the matrix $U$ of those columns is unitary and the computation $(U^\dagger A U)_{jk} = u_j^\dagger A u_k = \lambda_k'\delta_{jk}$ of that proof makes $U^\dagger A U$ diagonal. If $U^\dagger A U = \Lambda$ is diagonal for some unitary $U$, then the display above shows $A A^\dagger = A^\dagger A$, since $A^\dagger = U\overline{\Lambda}U^\dagger$ and diagonal matrices commute. The three conditions therefore imply one another in a cycle.

**The classification.** Let $A = U\Lambda U^\dagger$ with $U$ unitary, so $A^\dagger = U\overline{\Lambda}U^\dagger$, and note that $U M U^\dagger = U N U^\dagger$ implies $M = N$, because $U$ is invertible. Each line below is read entry by entry on the diagonal, and $\sigma(A)$ is the set of diagonal entries of $\Lambda$.

- $A = A^\dagger \iff \Lambda = \overline{\Lambda} \iff$ every $\lambda_k'$ is real $\iff \sigma(A) \subset \mathbb{R}$.
- $A^\dagger = -A \iff \overline{\Lambda} = -\Lambda \iff \operatorname{Re}\lambda_k' = 0$ for every $k$ $\iff \sigma(A) \subset i\mathbb{R}$.
- $A^\dagger A = I \iff \overline{\Lambda}\Lambda = I \iff |\lambda_k'|^2 = 1$ for every $k$ $\iff \sigma(A)$ lies on the unit circle.
- $A$ is an orthogonal projection, i.e. $A = A^\dagger = A^2$, $\iff \Lambda = \overline\Lambda$ and $\Lambda^2 = \Lambda$ $\iff$ every $\lambda_k'$ is real and satisfies $\lambda^2 = \lambda$ $\iff \sigma(A) \subseteq \{0,1\}$, the only solutions of $\lambda^2 = \lambda$ being $0$ and $1$.

In each case the hypothesis that $A$ is normal is what supplies the $U$ and $\Lambda$ in the first place; without it none of these spectral conditions says anything, as $\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$ shows — its spectrum is $\{0\} \subseteq \{0,1\}$ and it is not a projection. $\square$
:::

:::statement[Simultaneous diagonalization]{provenance=adapted src="hassani-2013:Lemma 6.4.17 and Thm 6.4.18, pp. 186-187; rhb-2006:§8.13.5, pp. 278-279; arfken-2013:§6.5, 'Simultaneous Diagonalization', p. 314"}
Let $A$ and $B$ be normal $n \times n$ complex matrices. Then some single orthonormal basis of $\mathbb{C}^n$ is made of vectors that are eigenvectors of $A$ *and* eigenvectors of $B$ — equivalently, one unitary $U$ makes both $U^\dagger A U$ and $U^\dagger B U$ diagonal — if and only if

$$
[A, B] = A B - B A = 0 .
$$

In particular this holds for two commuting Hermitian matrices, and then the common basis may be chosen real whenever $A$ and $B$ are real symmetric. The criterion extends to any commuting family of normal matrices.
:::

:::idea{provenance=original}
One direction is immediate: two matrices that are diagonal in the same basis commute, because diagonal matrices do. The other direction turns commutation with $A$ into commutation with each of $A$'s spectral projections $P_j$ — the reason being that $B$ maps each eigenspace of $A$ into itself, so it cannot mix the projections up. Once $B$'s projections $Q_\alpha$ and $A$'s projections $P_j$ all commute with each other, the products $P_jQ_\alpha$ are again orthogonal projections, onto the *joint* eigenspaces $E_{\lambda_j} \cap N_{\mu_\alpha}$, and they still sum to the identity. So $\mathbb{C}^n$ splits orthogonally into subspaces on each of which $A$ and $B$ are both scalars, and any orthonormal basis adapted to that splitting is a common eigenbasis.
:::

:::proof{provenance=adapted src="hassani-2013:Lemma 6.4.17 and Thm 6.4.18, pp. 186-187; rhb-2006:§8.13.5, pp. 278-279"}
Write $A = \sum_j \lambda_j P_j$ and $B = \sum_\alpha \mu_\alpha Q_\alpha$ for the spectral resolutions of part 2 of the spectral theorem, with $P_j$ the orthogonal projection onto $E_{\lambda_j} = \ker(A - \lambda_j I)$ and $Q_\alpha$ that onto $N_{\mu_\alpha} = \ker(B - \mu_\alpha I)$; these exist because $A$ and $B$ are normal.

**Necessity.** Suppose $u_1, \dots, u_n$ is a basis with $A u_k = \alpha_k u_k$ and $B u_k = \beta_k u_k$. Then
$$
ABu_k = \beta_k A u_k = \alpha_k\beta_k u_k = \alpha_k B u_k = BA u_k
$$
for every $k$, and two matrices that agree on a basis are equal, so $AB = BA$. (Only the existence of a common eigenbasis is used here, not its orthonormality.)

**A lemma.** If a matrix $T$ commutes with the normal matrix $A$, then $T$ commutes with every spectral projection $P_j$ of $A$. For if $Ax = \lambda_j x$ then $A(Tx) = T(Ax) = \lambda_j(Tx)$, so each $E_{\lambda_j}$ is carried into itself by $T$. Now take any $x$ and write $x = \sum_i P_i x$ with $P_i x \in E_{\lambda_i}$. For $i \neq j$ we have $P_j T P_i x = 0$, because $TP_ix \in E_{\lambda_i}$ is fixed by $P_i$ and $P_jP_i = 0$; and $P_jTP_jx = TP_jx$, because $TP_jx$ lies in $E_{\lambda_j}$, on which $P_j$ is the identity. Hence
$$
P_j T x = \sum_i P_j T P_i x = P_j T P_j x = T P_j x ,
$$
which is the claim. This is the lemma of Hassani, in the form we need.

**All four families of projections commute.** Applying the lemma to the normal matrix $A$ and $T = B$ gives $BP_j = P_jB$ for every $j$. Applying it now to the normal matrix $B$ and $T = P_j$ — legitimate because $P_j$ commutes with $B$ — gives $P_jQ_\alpha = Q_\alpha P_j$ for every $j$ and $\alpha$.

**The joint projections.** Put $R_{j\alpha} = P_jQ_\alpha$. Then
$$
R_{j\alpha}^\dagger = Q_\alpha^\dagger P_j^\dagger = Q_\alpha P_j = P_jQ_\alpha = R_{j\alpha},
\qquad
R_{j\alpha}^2 = P_jQ_\alpha P_jQ_\alpha = P_j^2 Q_\alpha^2 = P_jQ_\alpha = R_{j\alpha},
$$
the middle step of the second line using the commutation just proved. So each $R_{j\alpha}$ is a Hermitian idempotent, hence the orthogonal projection onto its image, and that image is
$$
W_{j\alpha} = E_{\lambda_j} \cap N_{\mu_\alpha} :
$$
every $R_{j\alpha}x = P_j(Q_\alpha x)$ lies in the image of $P_j$, which is $E_{\lambda_j}$, and equals $Q_\alpha(P_jx)$, which lies in $N_{\mu_\alpha}$; conversely a vector in both is fixed by $P_j$ and by $Q_\alpha$, hence by $R_{j\alpha}$. Moreover
$$
\sum_{j,\alpha} R_{j\alpha} = \Bigl(\sum_j P_j\Bigr)\Bigl(\sum_\alpha Q_\alpha\Bigr) = I \cdot I = I ,
$$
and $R_{j\alpha}R_{j'\alpha'} = P_jP_{j'}Q_\alpha Q_{\alpha'} = 0$ unless $j = j'$ and $\alpha = \alpha'$. Therefore every $x$ decomposes as $x = \sum_{j,\alpha}R_{j\alpha}x$ into vectors of the $W_{j\alpha}$, and these subspaces are mutually orthogonal, since for $(j,\alpha) \neq (j',\alpha')$ and $x \in W_{j\alpha}$, $y \in W_{j'\alpha'}$ we get $(x,y) = (R_{j\alpha}x, R_{j'\alpha'}y) = y^\dagger R_{j'\alpha'}R_{j\alpha}x = 0$. Hence $\mathbb{C}^n$ is the orthogonal direct sum of the non-zero $W_{j\alpha}$.

**The common basis.** Pick an orthonormal basis of each non-zero $W_{j\alpha}$ (:ref[Gram-Schmidt]{to=linalg.gram-schmidt}). The union is orthonormal, because the $W_{j\alpha}$ are mutually orthogonal, and spans $\mathbb{C}^n$, so it is an orthonormal basis; each of its members lies in some $E_{\lambda_j} \cap N_{\mu_\alpha}$ and is therefore an eigenvector of $A$ with eigenvalue $\lambda_j$ *and* of $B$ with eigenvalue $\mu_\alpha$. Taking $U$ to be the matrix of these columns, $U$ is unitary and both $U^\dagger A U$ and $U^\dagger B U$ are diagonal.

**The real symmetric case.** If $A$ and $B$ are real symmetric and commute, then each $W_{j\alpha}$ is the solution space of the real homogeneous linear system $(A - \lambda_j I)x = 0$, $(B - \mu_\alpha I)x = 0$ — real because the eigenvalues of a real symmetric matrix are real — so it is the complexification of the real solution space $W_{j\alpha} \cap \mathbb{R}^n$, which has the same dimension. Running Gram-Schmidt over $\mathbb{R}$ inside each real solution space gives a common *real* orthonormal eigenbasis, and the matrix of those columns is real orthogonal.

**A commuting family.** Let $\mathcal{F}$ be a set of pairwise commuting normal matrices. Refine as above: start from the eigenspace decomposition of one member and intersect repeatedly with the eigenspaces of further members, choosing at each step a member that splits at least one summand in two. Each such step strictly increases the number of non-zero summands, and that number never exceeds $n$, so after at most $n-1$ steps no member of $\mathcal{F}$ splits any summand. Call the resulting orthogonal decomposition $\mathbb{C}^n = W_1 \oplus \cdots \oplus W_r$. Each $W_m$ is an intersection of eigenspaces of finitely many members, so by the lemma — applied once for each of those members — every $A \in \mathcal{F}$ commutes with the projection onto $W_m$ and hence carries $W_m$ into itself; and since $A$ splits no summand, $W_m$ lies inside a single eigenspace of $A$, i.e. $A$ acts on $W_m$ as a scalar. An orthonormal basis of each $W_m$ is then a common eigenbasis of the whole family. $\square$
:::

:::note{provenance=original}
Normal is the exact condition for "diagonal in some orthonormal frame": the matrix is a list of complex stretch factors along $n$ perpendicular axes. The commutation criterion is the algebraic reason two observables can be measured at once in quantum mechanics — a common eigenbasis exists precisely when the operators commute — and the practical reason that a symmetry of a system lets you block-diagonalize its dynamical matrix.
:::

:::remark[Where the hypotheses are used]{provenance=original}
**"Orthonormal" cannot be dropped.** $\begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$ has distinct eigenvalues $1, 2$ and so is diagonalizable, but $A A^{\mathsf T} = \begin{pmatrix} 2 & 2 \\ 2 & 4 \end{pmatrix} \neq \begin{pmatrix} 1 & 1 \\ 1 & 5 \end{pmatrix} = A^{\mathsf T} A$, so it is not normal and no *orthonormal* eigenbasis exists. Diagonalizable by a general similarity and diagonalizable by a unitary are different conditions, and only the second is normality.

**Normality cannot be dropped from the commutation criterion.** $A = B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ commute, yet neither is diagonalizable at all. Commuting buys a common *invariant* decomposition, not a common eigenbasis, unless each matrix separately has an eigenbasis.

**Degeneracy leaves a choice, and the choice matters.** If $\lambda$ is a degenerate eigenvalue of $A$, not every orthonormal eigenbasis of $A$ is an eigenbasis of a commuting $B$: one must diagonalize $B$ restricted to each eigenspace $E_\lambda$ of $A$. The theorem asserts that some such choice works, not that any does.

**Real normal is weaker than real symmetric.** $R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ is real and normal, but for $\sin\theta \neq 0$ it has no real eigenvector, so it cannot be diagonalized by a real orthogonal matrix. Among real matrices, orthogonal diagonalizability over $\mathbb{R}$ characterises the symmetric ones, not the normal ones; see :ref[unitary and orthogonal matrices]{to=linalg.unitary-orthogonal-matrices} for the real canonical form.

**Conventions.** Physics texts usually write the condition as $[A, A^\dagger] = 0$ and call $A^\dagger$ the adjoint; mathematical texts write $A^*$. Some books state part 1 of the spectral theorem as "a normal operator is diagonalizable"; read in such a statement that the diagonalizing basis is orthonormal, which is what the proof produces and what the converse above needs.
:::

:::example[A normal matrix that is neither Hermitian nor unitary, and a commuting partner]{provenance=original}
Let $C$ be the cyclic shift of $\mathbb{C}^3$ and $A = I + C$:
$$
C = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0\end{pmatrix}, \qquad
A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1\end{pmatrix} .
$$

**Step 1: $A$ is normal, and why.** $C$ is a permutation matrix, so its columns are the standard basis vectors in some order and are orthonormal: $C$ is unitary, with $C^\dagger = C^{-1} = C^2$ (shifting three times returns to the start, $C^3 = I$). Hence
$$
A^\dagger = I + C^2 , \qquad
A A^\dagger = (I + C)(I + C^2) = I + C + C^2 + C^3 = 2I + C + C^2 ,
$$
and $A^\dagger A = (I+C^2)(I+C)$ gives the same four terms in the other order, so $AA^\dagger = A^\dagger A$. Written out, both equal $\begin{pmatrix} 2&1&1\\1&2&1\\1&1&2\end{pmatrix}$. The structural reason is worth keeping: $A$ and $A^\dagger$ are both polynomials in the one matrix $C$, and any two polynomials in the same matrix commute.

$A$ is not Hermitian, since $A^{\mathsf T} \neq A$, and not unitary, as step 2 will show by exhibiting an eigenvalue of modulus $2$.

**Step 2: the eigenvalues and an orthonormal eigenbasis.** Let $\omega = e^{2\pi i/3} = -\tfrac12 + \tfrac{\sqrt3}{2} i$, so $\omega^3 = 1$ and $1 + \omega + \omega^2 = 0$. For $k = 0, 1, 2$ put
$$
v_k = (1,\ \omega^k,\ \omega^{2k})^{\mathsf T} .
$$
Then $C v_k = (\omega^k, \omega^{2k}, 1)^{\mathsf T} = \omega^k v_k$, using $\omega^{3k} = 1$ for the last entry, so
$$
A v_k = (1 + \omega^k)\, v_k .
$$
The eigenvalues are therefore
$$
\lambda_0 = 2, \qquad \lambda_1 = 1 + \omega = \tfrac12 + \tfrac{\sqrt3}{2}i = e^{i\pi/3}, \qquad \lambda_2 = 1 + \omega^2 = \tfrac12 - \tfrac{\sqrt3}{2}i = e^{-i\pi/3} .
$$
Two checks: $\operatorname{tr}A = 3 = 2 + 2\cos(\pi/3) = 2 + 1$, and $\det A = \lambda_0\lambda_1\lambda_2 = 2\,|e^{i\pi/3}|^2 = 2$, which matches the direct expansion $\det A = 1(1-0) - 1(0-1) = 2$. Since $|\lambda_0| = 2 \neq 1$, $A$ is not unitary, as promised.

The $v_k$ are orthogonal: by the geometric-sum formula,
$$
(v_j, v_k) = v_k^\dagger v_j = \sum_{m=0}^{2}\omega^{mj}\,\overline{\omega^{mk}} = \sum_{m=0}^{2}\omega^{m(j-k)} = 3\,\delta_{jk},
$$
because for $j \neq k$ the sum is $1 + \zeta + \zeta^2 = 0$ with $\zeta = \omega^{j-k} \neq 1$ a cube root of unity. So $u_k = v_k/\sqrt3$ is an orthonormal eigenbasis — exactly what part 1 of the spectral theorem promises — and with $U = (u_0\ u_1\ u_2)$, the discrete Fourier matrix of order 3,
$$
U^\dagger A U = \operatorname{diag}\bigl(2,\ e^{i\pi/3},\ e^{-i\pi/3}\bigr).
$$

**Step 3: the adjoint and the spectral resolution.** Since $C^2 u_k = \omega^{2k}u_k = \overline{\omega^k}\,u_k$ (because $|\omega| = 1$, so $\omega^{2k} = \omega^{-k} = \overline{\omega^k}$), we get $A^\dagger u_k = (1 + \overline{\omega^k})u_k = \overline{\lambda_k}\,u_k$: the same eigenvectors, the conjugated eigenvalues, as part 3 requires. The eigenvalues are distinct, so each eigenspace is one-dimensional, $P_k = u_ku_k^\dagger$, and part 2 reads
$$
A = 2\,u_0u_0^\dagger + e^{i\pi/3}\,u_1u_1^\dagger + e^{-i\pi/3}\,u_2u_2^\dagger ,
$$
which multiplies out to $A$ (one may check the $(1,1)$ entry: $\tfrac13(2 + e^{i\pi/3} + e^{-i\pi/3}) = \tfrac13(2+1) = 1$, and the $(1,2)$ entry: $\tfrac13(2 + e^{i\pi/3}\overline{\omega} + e^{-i\pi/3}\overline{\omega^2}) = \tfrac13(2 + 1) = 1$, since $e^{i\pi/3}\overline\omega = e^{i\pi/3}e^{-2\pi i/3} = e^{-i\pi/3}$ and the two conjugate terms sum to $2\cos(\pi/3) = 1$).

**Step 4: a commuting partner and the role of degeneracy.** Let
$$
B = A + A^\dagger = 2I + C + C^2 = \begin{pmatrix} 2&1&1\\1&2&1\\1&1&2\end{pmatrix},
$$
real symmetric, and commuting with $A$ because both are polynomials in $C$. By the simultaneous-diagonalization theorem the two share an orthonormal eigenbasis, and indeed $Bu_k = (\lambda_k + \overline{\lambda_k})u_k = 2(\operatorname{Re}\lambda_k)u_k$, giving the eigenvalues
$$
4,\qquad 1,\qquad 1 .
$$
So $B$ has a *degenerate* eigenvalue $1$, with the two-dimensional eigenspace $N_1 = \operatorname{span}\{v_1, v_2\}$, and this is where the third trap above becomes concrete. Solving $(B - I)x = 0$ by hand gives the obvious real basis $(-1,1,0)^{\mathsf T}$, $(-1,0,1)^{\mathsf T}$ of $N_1$, and
$$
A\,(-1,1,0)^{\mathsf T} = (0, 1, -1)^{\mathsf T},
$$
which is not a multiple of $(-1,1,0)^{\mathsf T}$: that perfectly good eigenvector of $B$ is not an eigenvector of $A$. Only a particular basis of $N_1$ — up to scalars, $\{v_1, v_2\}$ — diagonalizes $A$ as well. The theorem says such a choice exists, not that every choice works.

The same example illustrates the fourth trap. $A$ is real and normal, but its eigenvalues $e^{\pm i\pi/3}$ are not real, so it has no real eigenvector for them and cannot be diagonalized by a real orthogonal matrix, although the real symmetric $B$ can be: for instance by the real orthonormal basis $(1,1,1)^{\mathsf T}/\sqrt3$, $(1,-1,0)^{\mathsf T}/\sqrt2$, $(1,1,-2)^{\mathsf T}/\sqrt6$, which diagonalizes $B$ but not $A$.
:::

:::application{provenance=original}
**Commuting observables and good quantum numbers.** In quantum mechanics an observable is a Hermitian operator and a measurement leaves the system in an eigenvector of it. Two observables can therefore be assigned definite values at the same time exactly when they have a common eigenvector, and a complete set of such states exists exactly when they commute — which is the simultaneous-diagonalization theorem, and the reason $[\,\cdot\,,\cdot\,]$ is the central object of the theory. Position and momentum do not commute, so no state has both sharp; the classification of the hydrogen atom, by contrast, rests on the fact that $H$, $L^2$ and $L_z$ do commute pairwise. The proof above explains why the labels come in a tuple: the joint eigenspaces are the subspaces $W_{j\alpha} = E_{\lambda_j} \cap N_{\mu_\alpha}$, and the quantum numbers $(n, \ell, m)$ are just the names of the eigenvalues whose intersection the state lies in. Degeneracy is the practical point. An energy level $E_n$ of hydrogen is highly degenerate, so "an eigenbasis of $H$" is far from determined; the extra commuting operators are precisely what selects a basis inside each level, and the fourth trap above warns that an arbitrary basis of a degenerate level will not do.

**Symmetry block-diagonalizes a dynamical matrix.** The worked example is, read physically, a ring of three identical masses with identical nearest-neighbour springs: the matrix $B$ is (up to a constant) the dynamical matrix of that ring, and $C$ is the operator that rotates the ring by one site. Rotating the ring is a symmetry of it, so $C$ commutes with $B$, and the theorem says the normal modes can be chosen to be eigenvectors of $C$ as well. Those eigenvectors are the discrete plane waves $v_k$, with $C v_k = e^{2\pi i k/3}v_k$ — the finite version of Bloch's theorem, the phase $2\pi k/3$ playing the role of the wavenumber. Note what has been bought: the modes were found by diagonalizing the *symmetry*, which was trivial, rather than the dynamical matrix. For a ring of $N$ masses this replaces an $N \times N$ eigenproblem by inspection, and the same argument in the general form — decompose into joint eigenspaces of the symmetry group — is how the vibrational modes of a molecule are sorted by irreducible representation before any force constant is computed. The degeneracy of the ring ($\lambda_1 = \lambda_2$ in the example) is itself a consequence of the symmetry, since $v_1$ and $v_2$ are exchanged by reflecting the ring.

**Why numerical analysts care whether a matrix is normal.** The eigenvalues of a normal matrix are perfectly conditioned: because the diagonalizing matrix $U$ is unitary, a perturbation $A + \Delta A$ moves each eigenvalue by at most $\|\Delta A\|$ in the Euclidean operator norm. For a non-normal matrix the eigenvector matrix can be badly conditioned and the eigenvalues correspondingly violent: the $n \times n$ matrix with ones on the superdiagonal and $\varepsilon$ in the bottom-left corner has eigenvalues of modulus $\varepsilon^{1/n}$, which is $10^{-1}$ for $\varepsilon = 10^{-10}$ and $n = 10$, although the unperturbed matrix is nilpotent with every eigenvalue $0$. So "is this matrix normal?" decides whether computed eigenvalues can be trusted at face value, and it is the reason library routines dispatch Hermitian and unitary input to separate, more accurate algorithms.
:::
