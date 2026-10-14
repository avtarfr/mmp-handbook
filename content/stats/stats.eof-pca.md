---
id: stats.eof-pca
title: Principal components and empirical orthogonal functions
kind: method
level: core
summary: Builds the sample covariance matrix of a centred data matrix, shows that its eigenvectors are the directions of successively largest sample variance and that they are the right singular vectors of the data matrix itself, reads the eigenvalues as the variance each direction explains, and identifies the truncated expansion as the best approximation of its rank — which is what an EOF analysis of a space-time field computes.
prereqs: [linalg.svd, linalg.hermitian-spectral-theorem, linalg.quadratic-forms, linalg.projections-least-squares, prob.expectation-variance, prob.multivariate-normal]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§8.18.3, Eqs. (8.131)-(8.136), pp. 302-304: the factorisation $A = USV^\\dagger$ with $U$ and $V$ unitary and $S$ diagonal with non-negative entries $s_i$ in decreasing order; the identities $A^\\dagger A = VS^\\dagger SV^\\dagger$ and $AA^\\dagger = USS^\\dagger U^\\dagger$ which identify the columns of $V$ and $U$ as the normalised eigenvectors of $A^\\dagger A$ and $AA^\\dagger$ and give $s_i^2 = \\lambda_i$; the relations $Av_i = s_iu_i$ and $A^\\dagger u_i = s_iv_i$; and the dyadic form $A = \\sum_{i\\le r}s_iu_i(v_i)^\\dagger$ with $r$ the number of non-zero singular values. §8.17.1, Eqs. (8.113)-(8.116), pp. 290-291: the Lagrange-multiplier argument showing that the unit vectors at which the quadratic form $x^{\\mathsf T}Ax$ is stationary are exactly the eigenvectors of the symmetric matrix $A$, that the stationary value is the corresponding eigenvalue, and the equivalent unconstrained statement for the quotient $\\lambda(x) = x^{\\mathsf T}Ax/x^{\\mathsf T}x$"
    pages: "290-291, 302-304"
    role: the singular value decomposition in the form and ordering used here, including the link between the singular values of a matrix and the eigenvalues of the associated Gram matrices and the dyadic expansion that the truncation cuts off; and the variational characterisation of the eigenvectors of a symmetric matrix as the stationary directions of its quadratic form, which is the step that turns "direction of largest sample variance" into an eigenvalue problem
  - work: grimmett-stirzaker-2020
    loc: "§4.9, pp. 132-134: Definition (4.9.4) of the multivariate normal distribution $N(\\mu, V)$; Theorem (4.9.5), which names $V$ the covariance matrix because $v_{ij} = \\operatorname{cov}(X_i, X_j)$, together with the displayed matrix form $V = \\mathbb{E}[(X-\\mu)'(X-\\mu)]$ written for row vectors; Theorem (4.9.6), that $Y = XD$ is $N(0, D'VD)$ when $X$ is $N(0,V)$ and $D$ has rank $m \\le n$; and Exercise (4.9.3), the variance $\\sum_i a_i^2\\operatorname{var}(X_i) + 2\\sum_{i<j}a_ia_j\\operatorname{cov}(X_i,X_j)$ of a linear combination"
    pages: "132-134"
    role: the covariance matrix of a random vector and the rule for the covariance of a linear image of it, which is the population statement behind the sample computation performed here; also the source of the row-vector convention that the remark warns about. All three results are stated in this section for a multivariate normal vector, and the unit says so where it cites them; the identities themselves involve only second moments
---

:::note[What this unit is, and what is ours]{provenance=original}
Principal component analysis takes a table of numbers — $n$ observations of $p$ variables — and finds the few directions in the $p$-dimensional variable space along which the data actually vary. In the atmospheric and ocean sciences the same computation, applied to a field sampled at $p$ grid points on $n$ occasions, is called **empirical orthogonal function (EOF) analysis**: the eigenvectors are maps, and the coefficients that multiply them are time series. The two names describe one piece of linear algebra.

None of the books in this handbook's library treats principal components under that name. What they supply is the machinery: the singular value decomposition and the variational property of the eigenvectors of a symmetric matrix from :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§8.17.1 and §8.18.3, pp. 290-291 and 302-304"}, and the covariance matrix of a random vector from :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§4.9, pp. 132-134"}. The assembly of those pieces into the statement below, and every number in the example, are ours.
:::

:::definition[Data matrix, sample covariance, principal components, EOFs]{provenance=original}
Let $X$ be a real $n \times p$ **data matrix** with $n \ge 2$: row $t$ is one observation $x_t \in \mathbb{R}^p$, column $j$ is one variable. For a space-time field, $t$ indexes time and $j$ indexes a grid point, so $X_{tj}$ is the value of the field at grid point $j$ at time $t$.

The **column mean** is $\bar x = n^{-1}\sum_{t=1}^{n} x_t$, and $X$ is **centred** when $\bar x = 0$, that is when every column sums to zero. We assume from here on that $X$ has been centred by subtracting $\bar x$ from every row; the matrix before centring is called the raw data and is never used below.

The **sample covariance matrix** of a centred $X$ is the $p \times p$ matrix

$$
S \;=\; \frac{1}{n-1}\,X^{\mathsf T}X ,
\qquad
S_{jk} \;=\; \frac{1}{n-1}\sum_{t=1}^{n} X_{tj}X_{tk} .
$$

It is symmetric and positive semidefinite, since $a^{\mathsf T}Sa = \lVert Xa\rVert^{2}/(n-1) \ge 0$ for every $a \in \mathbb{R}^p$. Its diagonal entries are the sample variances of the $p$ variables, and $\operatorname{tr}S$ is the **total variance** of the data set.

Given a unit vector $a \in \mathbb{R}^p$, the numbers $z_t = x_t \cdot a$ ($t = 1,\dots,n$) are the data projected onto the direction $a$. Their mean is zero, because $X$ is centred, and their sample variance is

$$
\frac{1}{n-1}\sum_{t=1}^{n} (x_t\cdot a)^{2} \;=\; \frac{\lVert Xa\rVert^{2}}{n-1} \;=\; a^{\mathsf T}Sa .
$$

A **principal direction** (in the geosciences, an **empirical orthogonal function**, or EOF) is a unit vector $e_k \in \mathbb{R}^p$ produced by the following rule: $e_1$ maximises $a^{\mathsf T}Sa$ over all unit $a$, and for $k \ge 2$, $e_k$ maximises $a^{\mathsf T}Sa$ over all unit $a$ orthogonal to $e_1, \dots, e_{k-1}$. The corresponding **principal component** (in the geosciences, the **PC time series**, or expansion coefficient) is the column vector

$$
z_k \;=\; X e_k \;\in\; \mathbb{R}^{n} ,
$$

whose $t$th entry is the amount of pattern $e_k$ present in observation $t$. The sample variance of $z_k$ is $e_k^{\mathsf T}Se_k$, written $\lambda_k$, and, provided $X \ne 0$ — equivalently $\operatorname{tr}S > 0$, since $\operatorname{tr}S = \lVert X\rVert_F^2/(n-1)$ — the **explained variance fraction** of mode $k$ is $\lambda_k/\operatorname{tr}S$. For the zero data matrix every $\lambda_k$ vanishes and the fractions are not defined; that case is excluded wherever they are used.

The population counterpart of $S$ is the covariance matrix $V$ of a random vector, $V_{jk} = \operatorname{cov}(X_j, X_k)$. :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="Thm (4.9.5) and Exercise (4.9.3), pp. 132, 134"} state this naming of $V$ at their Theorem (4.9.5), and give the variance $\sum_i a_i^2\operatorname{var}(X_i) + 2\sum_{i<j}a_ia_j\operatorname{cov}(X_i,X_j)$ of a linear combination at their Exercise (4.9.3), which is the population form of the identity $\operatorname{var}(a\cdot X) = a^{\mathsf T}Va$ just computed for a sample. Both are stated there for a vector with the multivariate normal distribution $N(\mu, V)$, which is the only distribution that section treats; neither uses normality, since both are identities between second moments that hold for any random vector with finite variances. Everything below is in any case a statement about the matrix $S$ actually formed from the data, not about $V$.
:::

:::statement[Principal components, the SVD, and optimal truncation]{provenance=original}
Let $X$ be a centred real $n \times p$ data matrix with $n \ge 2$ and sample covariance $S = X^{\mathsf T}X/(n-1)$, and let $r = \operatorname{rank}X$.

**1. The principal directions exist and are the eigenvectors of $S$.** Write the eigenvalues of $S$, which are real and non-negative, in decreasing order $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_p \ge 0$, with an orthonormal basis $e_1,\dots,e_p$ of eigenvectors, $Se_k = \lambda_ke_k$. Then this $e_1,\dots,e_p$ is a valid choice of principal directions, the successive maxima are
$$
\max_{\lVert a\rVert = 1,\; a \perp e_1,\dots,e_{k-1}} a^{\mathsf T}Sa \;=\; \lambda_k ,
$$
and the sample variance of the $k$th principal component is $\lambda_k$. Exactly $r$ of the $\lambda_k$ are non-zero. The choice is unique up to sign whenever $\lambda_{k-1} > \lambda_k > \lambda_{k+1}$, read with the end conventions $\lambda_0 = +\infty$ and $\lambda_{p+1} = -\infty$ (so at $k = 1$ the condition is $\lambda_1 > \lambda_2$ and at $k = p$ it is $\lambda_{p-1} > \lambda_p$), and within any block of equal eigenvalues no direction is singled out at all.

**2. The principal components are uncorrelated, and the variances add up.** For $j \ne k$ the sample covariance of $z_j = Xe_j$ and $z_k = Xe_k$ is $z_j^{\mathsf T}z_k/(n-1) = e_j^{\mathsf T}Se_k = \lambda_k\,e_j\cdot e_k = 0$, and
$$
\sum_{k=1}^{p}\lambda_k \;=\; \operatorname{tr}S ,
$$
so, when $X \ne 0$ and hence $\operatorname{tr}S > 0$, the explained variance fractions $\lambda_k/\operatorname{tr}S$ are non-negative and sum to one.

**3. They come straight out of the SVD of $X$.** Let $X = U\Sigma V^{\mathsf T}$ be a singular value decomposition (:ref[]{to=linalg.svd}). An $n \times p$ matrix has $q = \min(n,p)$ singular values $\sigma_1 \ge \dots \ge \sigma_q \ge 0$; extend the list by $\sigma_k = 0$ for $q < k \le p$, which is consistent because $S$ then has $p - q$ further zero eigenvalues. With that convention one may take, for $k = 1,\dots,p$,
$$
e_k = v_k \quad(\text{the }k\text{th column of }V), \qquad
\lambda_k = \frac{\sigma_k^{2}}{n-1}, \qquad
z_k = Xv_k =
\begin{cases}
\sigma_k u_k, & k \le q,\\
0, & k > q .
\end{cases}
$$
The second case is empty when $p \le n$; when $p > n$ — the case the remark below stresses — $U$ supplies only $u_1,\dots,u_n$, and the remaining principal components vanish. In particular the principal directions never require $S$ to be formed.

**4. Truncation is optimal.** For $1 \le m < r$ let
$$
\widehat X^{(m)} \;=\; \sum_{k=1}^{m} z_k e_k^{\mathsf T} \;=\; \sum_{k=1}^{m}\sigma_k u_kv_k^{\mathsf T}
$$
be the field reconstructed from the first $m$ modes. Then $\widehat X^{(m)}$ minimises $\lVert X - B\rVert_F$ over all $n \times p$ matrices $B$ of rank at most $m$, the minimum value being $\bigl(\sum_{k>m}\sigma_k^{2}\bigr)^{1/2}$, and the fraction of the total variance it retains is
$$
\frac{\sum_{k\le m}\lambda_k}{\operatorname{tr}S} \;=\; \frac{\sum_{k\le m}\sigma_k^{2}}{\sum_{k\le p}\sigma_k^{2}} .
$$
Equivalently, among all $m$-dimensional subspaces of $\mathbb{R}^p$, the span of $e_1,\dots,e_m$ is one onto which the orthogonal projection of the data loses the least squared length.
:::

:::idea{provenance=original}
Two short observations do all the work.

The first is that $a^{\mathsf T}Sa$ depends on $a$ only through its components in an eigenbasis: writing $a = \sum_k c_ke_k$ with $\sum_k c_k^2 = 1$ gives $a^{\mathsf T}Sa = \sum_k \lambda_kc_k^2$, a weighted average of the eigenvalues. An average of numbers cannot exceed the largest of them, and it reaches that value only by putting all the weight on entries equal to the largest — on one eigenvector when the largest eigenvalue is simple, and anywhere in its eigenspace when it is not. So maximising a quadratic form over the unit sphere is not a calculus problem at all once the spectral theorem has been applied; it is the remark that a convex combination is largest at an extreme point. Imposing orthogonality to $e_1,\dots,e_{k-1}$ deletes the first $k-1$ weights and repeats the argument on what is left.

The second is that $S$ and $X$ carry the same information: $X^{\mathsf T}X = (n-1)S$, so the right singular vectors of $X$ are eigenvectors of $S$ and the squared singular values are $(n-1)$ times its eigenvalues. Truncating the principal component expansion is then literally truncating the dyadic sum $\sum_k\sigma_ku_kv_k^{\mathsf T}$, and its optimality is the Eckart-Young theorem already proved in :ref[]{to=linalg.svd}.
:::

:::proof{provenance=adapted src="rhb-2006:§8.17.1, Eqs. (8.113)-(8.116), pp. 290-291; rhb-2006:§8.18.3, Eqs. (8.131)-(8.136), pp. 302-304"}
**Part 1.** $S$ is real symmetric, so by the spectral theorem (:ref[]{to=linalg.hermitian-spectral-theorem}) it has an orthonormal eigenbasis $e_1,\dots,e_p$ with real eigenvalues, which we order decreasingly; they are non-negative because $\lambda_k = e_k^{\mathsf T}Se_k = \lVert Xe_k\rVert^2/(n-1) \ge 0$.

Fix $k$ and let $a$ be a unit vector orthogonal to $e_1,\dots,e_{k-1}$. Expand $a = \sum_{i=1}^{p}c_ie_i$ with $c_i = a\cdot e_i$; orthogonality to the first $k-1$ eigenvectors says $c_1 = \dots = c_{k-1} = 0$, and $\lVert a \rVert = 1$ says $\sum_{i\ge k}c_i^2 = 1$. Then, using $Se_i = \lambda_ie_i$ and $e_i\cdot e_j = \delta_{ij}$,

$$
a^{\mathsf T}Sa \;=\; \sum_{i\ge k}\sum_{j \ge k} c_ic_j\,e_i^{\mathsf T}Se_j \;=\; \sum_{i\ge k}\lambda_ic_i^{2} \;\le\; \lambda_k\sum_{i\ge k}c_i^{2} \;=\; \lambda_k ,
$$

the inequality because $\lambda_i \le \lambda_k$ for every $i \ge k$, by the decreasing ordering, and because every $c_i^2 \ge 0$. The value $\lambda_k$ is attained at $a = e_k$, which is a unit vector orthogonal to $e_1,\dots,e_{k-1}$. So the maximum is $\lambda_k$ and $e_k$ achieves it, which is what the defining rule for $e_k$ asks. The variance of $z_k = Xe_k$ is $\lVert Xe_k\rVert^2/(n-1) = e_k^{\mathsf T}Se_k = \lambda_k$.

The number of non-zero eigenvalues is $\operatorname{rank}S$, and $\operatorname{rank}S = \operatorname{rank}(X^{\mathsf T}X) = \operatorname{rank}X = r$: indeed $Xa = 0$ implies $X^{\mathsf T}Xa = 0$, and conversely $X^{\mathsf T}Xa = 0$ implies $\lVert Xa\rVert^2 = a^{\mathsf T}X^{\mathsf T}Xa = 0$, so the two matrices have the same null space.

For uniqueness, suppose $\lambda_{k-1} > \lambda_k > \lambda_{k+1}$ (read $\lambda_0 = +\infty$ at the left end and $\lambda_{p+1} = -\infty$ at the right, so that for $k = p$ the hypothesis is only $\lambda_{p-1} > \lambda_p$) and let $a$ be any maximiser. In the display above, equality in $\sum_{i\ge k}\lambda_ic_i^2 \le \lambda_k\sum_{i\ge k}c_i^2$ forces $c_i = 0$ for every $i > k$ with $\lambda_i < \lambda_k$, which under the assumed strict gap is every $i>k$; hence $a = c_ke_k$ with $|c_k| = 1$. If instead $\lambda_k = \lambda_{k+1}$, every unit vector in the corresponding eigenspace is a maximiser.

That argument used only the right-hand gap $\lambda_k > \lambda_{k+1}$, and it determines $e_k$ up to sign *given* $e_1,\dots,e_{k-1}$. The left-hand gap $\lambda_{k-1} > \lambda_k$ is what makes the conclusion a statement about the rule and not about one run of it: the constraint set $\{a : \lVert a\rVert = 1,\ a \perp e_1,\dots,e_{k-1}\}$ depends on the earlier choices, and those are themselves arbitrary inside any block of equal eigenvalues. If $\lambda_{k-1} = \lambda_k$, then $e_{k-1}$ may be taken to be any unit vector of the shared eigenspace, and $e_k$ is then forced to be a vector of that same eigenspace orthogonal to it — so $e_k$ moves with $e_{k-1}$ and is not determined up to sign. With both gaps, $\lambda_k$ is a simple eigenvalue, and the left gap also pins down the constraint set: any admissible $e_1,\dots,e_{k-1}$ span the sum of the eigenspaces of $\lambda_1,\dots,\lambda_{k-1}$, and since $\lambda_{k-1} > \lambda_k$ that sum contains every block of equal eigenvalues it meets, so it is the same subspace — the sum of all eigenspaces for eigenvalues exceeding $\lambda_k$ — however the ties among the earlier modes were resolved. Hence $e_k$ is the same line whatever admissible $e_1,\dots,e_{k-1}$ preceded it, which is what "unique up to sign" asserts.

**Part 2.** The $z_k$ have mean zero because the columns of $X$ do, so their sample covariance is $z_j^{\mathsf T}z_k/(n-1) = e_j^{\mathsf T}X^{\mathsf T}Xe_k/(n-1) = e_j^{\mathsf T}Se_k = \lambda_k\,e_j\cdot e_k$, which vanishes for $j \ne k$ by orthonormality. The trace identity is the fact that a square matrix has trace equal to the sum of its eigenvalues, applied to $S$; concretely, $\operatorname{tr}S = \operatorname{tr}(Q\Lambda Q^{\mathsf T}) = \operatorname{tr}(\Lambda Q^{\mathsf T}Q) = \operatorname{tr}\Lambda$ with $Q = (e_1 \cdots e_p)$ orthogonal.

**Part 3.** Let $X = U\Sigma V^{\mathsf T}$ be a singular value decomposition. Then

$$
X^{\mathsf T}X \;=\; V\Sigma^{\mathsf T}U^{\mathsf T}U\Sigma V^{\mathsf T} \;=\; V(\Sigma^{\mathsf T}\Sigma)V^{\mathsf T} ,
$$

using $U^{\mathsf T}U = I$. This is the computation :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eq. (8.132), p. 302"} make at their Eq. (8.132); since $\Sigma^{\mathsf T}\Sigma$ is the $p \times p$ diagonal matrix with entries $\sigma_1^2,\dots,\sigma_q^2$ followed by $p - q$ zeros — that is, with entries $\sigma_k^2$ under the convention $\sigma_k = 0$ for $k > q$ — and $V$ is orthogonal, it exhibits an orthogonal diagonalisation of $X^{\mathsf T}X = (n-1)S$. Hence the columns $v_k$ of $V$ are orthonormal eigenvectors of $S$ with eigenvalues $\sigma_k^2/(n-1)$, and because the SVD convention orders $\sigma_1 \ge \sigma_2 \ge \dots$, these eigenvalues come out already in decreasing order. By part 1 they are an admissible set of principal directions and variances. Finally $Xv_k = \sigma_ku_k$ for $k \le q$, which is their Eq. (8.134), so $z_k = \sigma_ku_k$ there; for $k > q$ the $k$th column of $\Sigma$ is zero, so $z_k = Xv_k = U\Sigma V^{\mathsf T}v_k = 0$, in agreement with $\lambda_k = 0$.

**Part 4.** Substituting $z_k = \sigma_ku_k$ and $e_k = v_k$ into the definition of $\widehat X^{(m)}$ gives $\sum_{k\le m}\sigma_ku_kv_k^{\mathsf T}$, which is the rank-$m$ truncation of the dyadic form of $X$ (:cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="Eq. (8.136), p. 303"} Eq. (8.136)). Its optimality in the Frobenius norm, with the stated minimum, is the Eckart-Young statement of :ref[]{to=linalg.svd}. Dividing $\lVert X\rVert_F^2 = \sum_k\sigma_k^2$ by $n-1$ turns it into $\operatorname{tr}S = \sum_k\lambda_k$, which gives the variance fraction. For the last sentence, let $P$ be the orthogonal projection of $\mathbb{R}^p$ onto an $m$-dimensional subspace; then $XP$ has rank at most $m$, so $\lVert X - XP\rVert_F \ge \lVert X - \widehat X^{(m)}\rVert_F$, and $\widehat X^{(m)} = XP_m$ with $P_m$ the projection onto $\operatorname{span}(e_1,\dots,e_m)$, because $\sum_{k\le m}Xe_ke_k^{\mathsf T} = X\sum_{k\le m}e_ke_k^{\mathsf T}$ and the latter sum is exactly $P_m$ (:ref[]{to=linalg.projections-least-squares}). $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Centring is what makes $S$ a covariance matrix**, and it is the hypothesis most often dropped by accident. Parts 3 and 4 — the identification with the SVD and the Eckart-Young optimality — are facts about an arbitrary matrix $X$ and hold whether or not it is centred; what centring buys is the reading of $a^{\mathsf T}Sa$ as a sample variance, and with it the zero mean of the principal components used in part 2. If the columns of $X$ are not centred, then $X^{\mathsf T}X/(n-1)$ is a matrix of second moments, not of covariances; its leading eigenvector is dominated by the mean $\bar x$ and typically just reproduces it. Concretely, take a single variable with the two values $10$ and $12$, so that $n = 2$ and $n - 1 = 1$. Centred, the formula gives the sample variance $\bigl((-1)^2 + 1^2\bigr)/1 = 2$; applied to the raw column it gives $(10^2 + 12^2)/1 = 244$ instead, of which the mean alone contributes $2\cdot 11^2/1 = 242$. So more than $99\%$ of the quantity being maximised has nothing to do with variability, and the "first mode" of an uncentred analysis is just the mean.
- **The decreasing ordering is used once**, in the inequality $\lambda_i \le \lambda_k$ for $i \ge k$. Without it the argument still shows that stationary directions are eigenvectors — this is the Lagrange-multiplier computation of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§8.17.1, Eqs. (8.113)-(8.116), pp. 290-291"}, who note that stationarity is necessary but not sufficient for a maximum — but it no longer identifies which eigenvector is the maximiser. The convex-combination argument above settles that and is why we do not need the multiplier.
- **Symmetry of $S$ is what gives an orthonormal eigenbasis**, and with it both the uncorrelatedness in part 2 and the completeness used in the expansion $a = \sum c_ie_i$. It is automatic here, because $S$ is built as $X^{\mathsf T}X$; there is no hypothesis to check and no non-symmetric variant of the method.
- **Degenerate eigenvalues destroy the modes, not the subspace.** When $\lambda_k = \lambda_{k+1}$, the individual patterns $e_k$ and $e_{k+1}$ are arbitrary inside a two-dimensional eigenspace and will change completely under a tiny perturbation of the data; only their span, and the sum of the two explained variances, is stable. Near-degeneracy is the usual situation for a propagating signal, whose two phases have nearly equal variance, and it is the standard reason an individual EOF should not be read as a physical mode.
- **Rank is limited by the smaller dimension.** Since $r \le \min(n,p)$, a field on $p = 10^4$ grid points observed on $n = 50$ occasions has at most $50$ non-zero eigenvalues, and at most $49$ after centring, because centring puts the rows in the hyperplane $\sum_t x_t = 0$. Part 3 is then the only practical route: the $p \times p$ matrix $S$ need never be built.
- **Scaling is a modelling choice, not mathematics.** $S$ is not invariant under rescaling the individual variables, so for variables in different units — hectopascals and metres per second — PCA of $S$ is meaningless and one works with the correlation matrix instead, that is, with each column divided by its sample standard deviation. For a field in one unit this choice is usually inappropriate, but a weight proportional to the square root of the area each grid point represents is needed, or dense high-latitude grid points are over-counted.
- **$n-1$ versus $n$** changes every $\lambda_k$ by the same factor and therefore changes no eigenvector and no explained variance fraction. We use $n-1$ for consistency with the unbiased sample variance of :ref[]{to=stats.sampling-distributions}.
- **Row vectors.** :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§4.9, pp. 132-133"} write random vectors as rows, so their covariance matrix is $\mathbb{E}[(X-\mu)'(X-\mu)]$ and their linear map acts on the right, $Y = XD$ with covariance $D'VD$. We use column vectors, in which the same statements read $V = \mathbb{E}[(X-\mu)(X-\mu)^{\mathsf T}]$ and $\operatorname{cov}(D^{\mathsf T}X) = D^{\mathsf T}VD$. The transposes are not a disagreement, only a transcription.
:::

:::method[Computing an EOF analysis]{provenance=original}
1. **Lay out the data matrix.** Rows are observations (times), columns are variables (grid points). Decide first what the "observations" are: EOFs of a field in time and EOFs of the same field transposed are different analyses, related by part 3.
2. **Handle missing values and weights before anything else.** Fill or drop; then, for a field on a sphere, multiply column $j$ by $\sqrt{w_j}$ with $w_j$ the area weight of grid point $j$, so that $\operatorname{tr}S$ is the area-weighted variance. For variables in different units, divide each column by its sample standard deviation instead.
3. **Centre.** Subtract each column's mean. If a trend or a seasonal cycle is to be excluded rather than analysed, remove it here too; otherwise it will be mode 1.
4. **Factor, do not square.** Compute the singular value decomposition $X = U\Sigma V^{\mathsf T}$ (:ref[]{to=linalg.svd}). Forming $S = X^{\mathsf T}X/(n-1)$ and diagonalising it gives the same answer in exact arithmetic but squares the condition number (:ref[]{to=linalg.matrix-norms-conditioning}), and is impossible anyway when $p$ is large.
5. **Read off the modes.** EOF $k$ is the column $v_k$, plotted as a map; the PC time series is $z_k = \sigma_ku_k$; the variance of mode $k$ is $\lambda_k = \sigma_k^2/(n-1)$ and its explained fraction is $\sigma_k^2/\sum_i\sigma_i^2$.
6. **Fix the sign.** Each pair $(v_k, z_k)$ may be replaced by $(-v_k, -z_k)$; software makes an arbitrary choice. Fix it by a stated rule, for example by requiring the value of $v_k$ at a chosen grid point, or the projection of $z_k$ on a chosen index, to be positive, and say which rule you used.
7. **Decide how many modes to keep.** Plot $\lambda_k$ against $k$ and truncate where the spectrum flattens; check whether the gap you are truncating at is larger than the sampling uncertainty in the eigenvalues, which for $n$ independent observations is of order $\lambda_k\sqrt{2/n}$. Keep whole near-degenerate pairs or none of them.
8. **Reconstruct and check.** Form $\widehat X^{(m)} = \sum_{k\le m}z_kv_k^{\mathsf T}$ and verify that $\lVert X - \widehat X^{(m)}\rVert_F^2$ equals $\sum_{k>m}\sigma_k^2$. This is an arithmetic check on the whole computation and costs nothing.
:::

:::example[A field at four grid points, worked through exactly]{provenance=original}
A one-dimensional "field" is measured at $p = 4$ grid points on $n = 5$ occasions. The data, already centred (each column sums to zero), are

$$
X \;=\;
\begin{pmatrix}
4 & 2 & -4 & -2\\
0 & 2 & 0 & -2\\
-2 & 0 & 2 & 0\\
-2 & -4 & 2 & 4\\
0 & 0 & 0 & 0
\end{pmatrix} .
$$

**Step 1: the sample covariance matrix.** With $n - 1 = 4$,

$$
S \;=\; \tfrac14 X^{\mathsf T}X \;=\;
\begin{pmatrix}
6 & 4 & -6 & -4\\
4 & 6 & -4 & -6\\
-6 & -4 & 6 & 4\\
-4 & -6 & 4 & 6
\end{pmatrix},
\qquad \operatorname{tr}S = 24 .
$$

For instance the $(1,2)$ entry is $\tfrac14\bigl(4\cdot2 + 0\cdot2 + (-2)\cdot0 + (-2)\cdot(-4) + 0\bigr) = \tfrac14(8+0+0+8) = 4$.

**Step 2: guess and verify two eigenvectors.** Rows $1$ and $3$ of $S$ are negatives of each other, and so are rows $2$ and $4$; the matrix therefore has rank at most $2$, and the two sign patterns $f = (1,1,-1,-1)^{\mathsf T}$ and $g = (1,-1,-1,1)^{\mathsf T}$ suggest themselves. Multiplying out,

$$
Sf = (6+4+6+4,\; 4+6+4+6,\; -6-4-6-4,\; -4-6-4-6)^{\mathsf T} = 20\,f ,
$$
$$
Sg = (6-4+6-4,\; 4-6+4-6,\; -6+4-6+4,\; -4+6-4+6)^{\mathsf T} = 4\,g .
$$

So $\lambda_1 = 20$ and $\lambda_2 = 4$, with $f \cdot g = 1 - 1 + 1 - 1 = 0$. Since $\lambda_1 + \lambda_2 = 24 = \operatorname{tr}S$ and the remaining eigenvalues are non-negative, they must both be zero: the data lie exactly in a two-dimensional subspace, and $r = 2$.

**Step 3: normalise, and compute the principal components.** $\lVert f\rVert = \lVert g\rVert = 2$, so the EOFs are

$$
e_1 = \tfrac12(1,1,-1,-1)^{\mathsf T}, \qquad e_2 = \tfrac12(1,-1,-1,1)^{\mathsf T} .
$$

EOF 1 is a dipole: the left half of the domain up, the right half down. EOF 2 opposes the two outer grid points to the two inner ones — its signs across grid points $1,2,3,4$ are $+,-,-,+$, so it changes sign between points $1$ and $2$ and between points $3$ and $4$, but not between $2$ and $3$. It is not the grid-scale pattern that alternates at every step: that vector, $(1,-1,1,-1)^{\mathsf T}$, satisfies $S(1,-1,1,-1)^{\mathsf T} = 0$ here, so it carries no sample variance at all and spans one of the two null directions whose zero eigenvalues step 2 accounted for (the other is the uniform pattern $(1,1,1,1)^{\mathsf T}$, also annihilated by $S$). The PC time series are $z_k = Xe_k$:

$$
z_1 = (6,\,2,\,-2,\,-6,\,0)^{\mathsf T}, \qquad z_2 = (2,\,-2,\,-2,\,2,\,0)^{\mathsf T} .
$$

(First entry of $z_1$: $\tfrac12(4 + 2 + 4 + 2) = 6$.) Their sample variances are $\lVert z_1\rVert^2/4 = (36+4+4+36)/4 = 20 = \lambda_1$ and $\lVert z_2\rVert^2/4 = 16/4 = 4 = \lambda_2$, as part 1 promises, and $z_1 \cdot z_2 = 12 - 4 + 4 - 12 + 0 = 0$, as part 2 promises.

**Step 4: explained variance.** 

$$
\frac{\lambda_1}{\operatorname{tr}S} = \frac{20}{24} = \frac56 = 83.33\%,
\qquad
\frac{\lambda_2}{\operatorname{tr}S} = \frac{4}{24} = \frac16 = 16.67\% .
$$

The dipole alone accounts for five sixths of the variance of the field; the two modes together account for all of it.

**Step 5: cross-check against the SVD.** The singular values must be $\sigma_k = \sqrt{(n-1)\lambda_k}$, that is $\sigma_1 = \sqrt{80} = 4\sqrt5 \approx 8.9443$ and $\sigma_2 = \sqrt{16} = 4$, with $\sigma_3 = \sigma_4 = 0$; and indeed $\lVert X\rVert_F^2 = \sum_{t,j}X_{tj}^2 = 96 = 80 + 16$. Truncating after one mode leaves $\lVert X - \widehat X^{(1)}\rVert_F^2 = \sigma_2^2 = 16$, and no rank-one matrix does better.
:::

:::application{provenance=original}
**Climate fields.** Applied to monthly anomalies of sea-level pressure over the northern hemisphere, the leading EOF is the annular seesaw between the polar cap and the midlatitude belt whose PC time series is published as the Arctic Oscillation, or northern annular mode, index; the same analysis restricted to the Atlantic sector gives the North Atlantic Oscillation, the seesaw between the Icelandic low and the Azores high; applied to tropical Pacific sea-surface temperature, the leading EOF is the tongue of warm anomaly whose PC is an El Nino index. The attraction is exactly part 4: a handful of numbers per month reproduces a field of tens of thousands of grid points to within a few per cent of its variance, so a century of maps compresses to a few time series that can be correlated with everything else. The attendant danger is the degeneracy caveat above — the leading EOF is a statistically optimal pattern, and only sometimes also a dynamical mode.

**Model reduction and data assimilation.** Truncating at $m$ modes replaces a state vector of length $p$ by one of length $m$ in the subspace that carries the most variance, which is how a reduced-rank background covariance is built for :ref[]{to=stats.data-assimilation}, and how the "essential dynamics" of a protein is extracted from a molecular-dynamics trajectory: the atomic coordinate matrix has $p = 3N_{\text{atoms}}$ columns, and a handful of collective modes carries most of the fluctuation.

**Measurement and instrumentation.** The same decomposition applied to a set of spectra separates the number of independent chemical species present (the number of eigenvalues above the noise floor) from the noise, and applied to an array of detectors it identifies common-mode drift as a leading mode to be regressed out. In both cases what is being used is that the noise, being uncorrelated between channels, contributes a nearly flat tail to the eigenvalue spectrum, while any shared signal contributes a few large eigenvalues.
:::
