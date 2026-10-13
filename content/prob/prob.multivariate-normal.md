---
id: prob.multivariate-normal
title: The multivariate normal distribution
kind: definition
level: core
summary: Defines the $N(\mu, V)$ density on $\mathbb{R}^n$, proves its normalisation, mean and covariance matrix by orthogonal diagonalisation, shows that linear images, marginals and conditionals are all normal with explicit parameters, and works a three-dimensional example whose conditional law is $N(9/5, 13/5)$.
prereqs: [prob.joint-distributions, prob.expectation-variance, linalg.hermitian-spectral-theorem, linalg.quadratic-forms, found.gaussian-integrals, found.change-of-variables]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§4.9 Multivariate normal distribution, pp. 131-133: the quadratic form (4.9.1) $Q(x)=xAx'$ with $A$ real symmetric of non-zero determinant, the diagonalisation (4.9.2)-(4.9.3) by an orthogonal $B$, the definition of positive definiteness and the criterion $\\lambda_i>0$, the calculation of $\\int K\\exp(-\\tfrac12 Q)$ that fixes $K=\\sqrt{(2\\pi)^{-n}\\lvert A\\rvert}$, the argument that $\\mathbb{E}X_i=0$ from $f(x)=f(-x)$, Definition (4.9.4) of $N(\\mu,V)$ with $A$ replaced by $V^{-1}$, Theorem (4.9.5) ($\\mathbb{E}(X)=\\mu$ and $v_{ij}=\\operatorname{cov}(X_i,X_j)$), Theorem (4.9.6) (if $X$ is $N(0,V)$ and $Y=XD$ with $D$ of rank $m\\le n$ then $Y$ is $N(0,D'VD)$) with its change-of-variables proof for $m=n$ and the statement that the case $m<n$ is omitted, Definition (4.9.7) (every linear combination is univariate normal) and the discussion of the singular case; §4.5, Example (4.5.9), p. 113: the standard bivariate normal density (4.5.10), its marginals, $\\operatorname{cov}(X,Y)=\\rho$, the equivalence of independence and $\\rho=0$, and the general bivariate normal with the quadratic form $Q(x,y)$; grimmett-stirzaker-2020:§4.6, Example (4.6.7), p. 119: the conditional law $N(\\rho x, 1-\\rho^2)$ and $\\mathbb{E}(Y\\mid X)=\\rho X$; Exercises (4.9.1)-(4.9.3), (4.9.5), (4.9.7) and (4.9.9), pp. 134-135: the symmetric square root, the standard multivariate normal $Y=(X-\\mu)W^{-1}$, the distribution of $\\sum a_iX_i$, the variable $Y=\\pm X$ that is marginally normal without the pair being bivariate normal, and the conditional mean and variance for the standard trivariate normal; grimmett-stirzaker-2020:§5.8, Example (5.8.6), pp. 209-210: the joint characteristic function $\\exp(-\\tfrac12 tVt')$ of $N(0,V)$ and the remark that Theorem (4.9.5) follows from it; Problem (4.14.62), p. 165: multivariate normal sampling by the Cholesky factorisation $V=L'L$, $Z=\\mu+XL$"
    pages: "113, 119, 131-135, 165, 209-210"
    role: the definition of the distribution and almost all of the structure proved here - the orthogonal-diagonalisation route to the normalising constant, the mean and covariance matrix, invariance of type under linear maps, the equivalent definition through linear combinations, the singular case, the bivariate special cases used as checks, the trivariate conditional mean and variance used to verify the general conditional formula, the characteristic function, and the Cholesky sampling recipe; also the row-vector convention, recorded here because it differs from ours
  - work: rhb-2006
    loc: "§30.15.2 The multivariate Gaussian distribution, pp. 1209-1211: the general form $f(x)=N\\exp(-\\tfrac12(x-\\mu)^{T}A(x-\\mu))$ in column-vector notation, the moment generating function $\\exp(\\mu^{T}t+\\tfrac12 t^{T}A^{-1}t)$, the identification $\\operatorname{Cov}[X_i,X_j]=(A^{-1})_{ij}$ and hence $A=V^{-1}$, the normalised density (30.148), the worked evaluation of $\\int\\exp(-\\tfrac12 y^{T}V^{-1}y)\\,d^{n}y=(2\\pi)^{n/2}(\\det V)^{1/2}$ by orthogonal diagonalisation (30.149), the remark that the transformed variables are independent Gaussians of variance $\\lambda_i$, and eq. (30.150) with the statement that $\\chi_n^2=(x-\\mu)^{T}V^{-1}(x-\\mu)$ is chi-squared of order $n$, reduced to order $n-m$ under $m$ linear constraints; §30.12, pp. 1203-1205: the covariance matrix (30.139) and correlation matrix, and the transformation law $V_Y=SV_XS^{T}$ for the covariance matrices of linearly related variables, stated as exact in the linear case"
    pages: "1203-1205, 1209-1211"
    role: the column-vector convention followed here, the moment generating function and the identification of $A$ as the inverse covariance matrix, the diagonalisation evaluation of the normalising integral, the chi-squared reading of the exponent, and the covariance transformation law
---

:::note[Why this distribution and no other]{provenance=original}
Three facts make the multivariate normal the working distribution of the physical sciences. It is the limit law of sums, by :ref[the central limit theorem]{to=prob.central-limit-theorem}, so it describes any quantity assembled from many small independent contributions. It is closed under every linear operation - sums, projections, rotations, marginalisation and conditioning all return normal laws - so a linear model with normal inputs has normal outputs and the bookkeeping never leaves the family. And it is determined entirely by a mean vector and a covariance matrix, so quoting a best-fit parameter set with its error matrix is a complete statement of the result, not a summary of one.

The price is one hypothesis that is easy to forget: *jointly* normal is much stronger than normal one coordinate at a time. The remark below gives a pair of standard normal variables that is not bivariate normal at all, and for which zero correlation does not give independence.
:::

:::definition[The multivariate normal density]{provenance=adapted src="grimmett-stirzaker-2020:§4.9, the discussion of (4.9.1)-(4.9.3) and Definition (4.9.4), pp. 131-132; rhb-2006:§30.15.2, the form preceding (30.148) and eq. (30.148), pp. 1209-1210"}
Throughout, $x$, $\mu$ and $t$ are **column** vectors in $\mathbb{R}^n$ and $M^{T}$ is the transpose of $M$. A real symmetric $n\times n$ matrix $V$ is **positive definite** if $u^{T}Vu > 0$ for every $u \ne 0$; by the spectral theorem (:ref[]{to=linalg.hermitian-spectral-theorem}) this holds exactly when all eigenvalues of $V$ are strictly positive, and then $V$ is invertible with $\det V > 0$.

A random vector $X = (X_1,\dots,X_n)^{T}$ has the **multivariate normal** (or multinormal) distribution $N(\mu, V)$, with $\mu \in \mathbb{R}^n$ and $V$ symmetric positive definite, if its joint density is

$$
f(x) \;=\; \frac{1}{(2\pi)^{n/2}\,(\det V)^{1/2}}\,
\exp\Bigl(-\tfrac12\,(x-\mu)^{T}V^{-1}(x-\mu)\Bigr) ,
\qquad x \in \mathbb{R}^n .
$$

The case $\mu = 0$, $V = I$ is the **standard** multivariate normal, a vector of $n$ independent $N(0,1)$ variables. For $n = 1$ the formula is the familiar $N(\mu,\sigma^2)$ density with $V = (\sigma^2)$. For $n=2$, writing $V = \begin{pmatrix}\sigma_1^2 & \rho\sigma_1\sigma_2\\ \rho\sigma_1\sigma_2 & \sigma_2^2\end{pmatrix}$ with $\lvert\rho\rvert<1$, it is the **bivariate normal** density

$$
f(x_1,x_2) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}}
\exp\left(-\frac{1}{2(1-\rho^2)}\left[\Bigl(\frac{x_1-\mu_1}{\sigma_1}\Bigr)^{\!2} - 2\rho\,\frac{(x_1-\mu_1)(x_2-\mu_2)}{\sigma_1\sigma_2} + \Bigl(\frac{x_2-\mu_2}{\sigma_2}\Bigr)^{\!2}\right]\right) ,
$$

which is the form :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§4.5, Example (4.5.9), p. 113"} write out; their standard case is $\mu=0$, $\sigma_1=\sigma_2=1$.

**A convention to watch.** Grimmett and Stirzaker use **row** vectors and write the exponent as $-\tfrac12 (x-\mu)V^{-1}(x-\mu)'$, with $x'$ for the transpose; Riley, Hobson and Bence use column vectors and write $-\tfrac12(x-\mu)^{T}V^{-1}(x-\mu)$, which is what we use. The two expressions are the same scalar, but every matrix identity below changes shape between them: a linear map is $Y = XD$ in the row convention and $Y = D^{T}X$ in the column convention, and the induced covariance is $D'VD$ either way. We follow the column convention of Riley, Hobson and Bence throughout and translate the statements we take from Grimmett and Stirzaker; no result depends on the choice.

The **singular** case $\det V = 0$ is excluded by the definition, because $V^{-1}$ does not exist. It is covered by the alternative definition below.
:::

:::statement[The parameters, and the equivalent definition by linear combinations]{provenance=adapted src="grimmett-stirzaker-2020:§4.9, Theorem (4.9.5), Definition (4.9.7) and the discussion of the singular case, pp. 132-133; grimmett-stirzaker-2020:§5.8, Example (5.8.6), pp. 209-210; rhb-2006:§30.15.2, the moment generating function and the identification $A=V^{-1}$, pp. 1209-1210"}
Let $X \sim N(\mu, V)$ with $V$ positive definite. Then

1. $\mathbb{E}(X) = \mu$, that is $\mathbb{E}(X_i) = \mu_i$ for each $i$;
2. $V$ is the **covariance matrix**: $v_{ij} = \operatorname{cov}(X_i, X_j)$, so the diagonal entries are the variances and $V = \mathbb{E}\bigl((X-\mu)(X-\mu)^{T}\bigr)$;
3. the moment generating function and the characteristic function are
   $$
   M_X(t) = \mathbb{E}\bigl(e^{t^{T}X}\bigr) = \exp\Bigl(t^{T}\mu + \tfrac12 t^{T}Vt\Bigr) ,
   \qquad
   \varphi_X(t) = \mathbb{E}\bigl(e^{it^{T}X}\bigr) = \exp\Bigl(it^{T}\mu - \tfrac12 t^{T}Vt\Bigr) ,
   $$
   both valid for every $t \in \mathbb{R}^n$ (see :ref[]{to=prob.generating-functions} and :ref[]{to=prob.characteristic-functions});
4. the quadratic form in the exponent is a chi-squared variable: $(X-\mu)^{T}V^{-1}(X-\mu) \sim \chi^2(n)$. Riley, Hobson and Bence add that if the $X_i$ are required to satisfy $m$ independent linear constraints $\sum_i c_iX_i = 0$ then the same quadratic form is $\chi^2(n-m)$.

**An equivalent definition.** Grimmett and Stirzaker also define the multivariate normal by the property that

$$
a^{T}X = a_1X_1 + \cdots + a_nX_n \ \text{ has a univariate normal distribution for every } a \in \mathbb{R}^n .
$$

Every $X$ with the density above satisfies this. The converse holds with one exception: if some non-trivial linear combination is degenerate, $\mathbb{P}(a^{T}X = b) = 1$ with $a\ne0$, then $a^{T}Va = \operatorname{var}(a^{T}X) = 0$, so $V$ is singular and no density exists. Such an $X$ is said to have a **singular** multivariate normal distribution; it lives on a proper affine subspace of $\mathbb{R}^n$. When the distribution is non-singular the two definitions agree. The linear-combination definition is the more useful one in practice, because it needs no inverse and survives degeneracy.
:::

:::statement[Linear images, marginals and conditionals are normal]{provenance=adapted src="grimmett-stirzaker-2020:§4.9, Theorem (4.9.6) with the remark that the case $m<n$ is omitted, p. 133, and Exercises (4.9.3), (4.9.7) and (4.9.9), pp. 134-135; grimmett-stirzaker-2020:§4.6, Example (4.6.7), p. 119; rhb-2006:§30.12, eqs. (30.140)-(30.141), p. 1205"}
Let $X \sim N(\mu, V)$ on $\mathbb{R}^n$.

- **(a) Affine images.** Let $D$ be an $n\times m$ matrix of rank $m \le n$, let $c \in \mathbb{R}^m$, and set $Y = D^{T}X + c$. Then
  $$
  Y \sim N\bigl(D^{T}\mu + c,\; D^{T}VD\bigr) \quad\text{on } \mathbb{R}^m .
  $$
  In particular every $a^{T}X$ is univariate normal with mean $a^{T}\mu$ and variance $a^{T}Va$, and the covariance law $V_Y = SV_XS^{T}$ that Riley, Hobson and Bence derive for general linearly related variables is the special case of (a) in their notation. Grimmett and Stirzaker state (a) for $m \le n$ and prove it for $m=n$, remarking that the proof for $m<n$ is harder and referring elsewhere for it; we follow them and prove the $m=n$ case, then obtain the cases we need from the characteristic function.
- **(b) Marginals.** Every sub-vector of $X$ is multivariate normal, with the corresponding sub-vector of $\mu$ and the corresponding sub-matrix of $V$. In particular each $X_i \sim N(\mu_i, v_{ii})$.
- **(c) Conditionals.** Split $X$, $\mu$ and $V$ into blocks of sizes $p$ and $q = n-p$,
  $$
  X = \begin{pmatrix}X_1\\X_2\end{pmatrix}, \quad
  \mu = \begin{pmatrix}\mu_1\\\mu_2\end{pmatrix}, \quad
  V = \begin{pmatrix}V_{11} & V_{12}\\ V_{21} & V_{22}\end{pmatrix},
  \qquad V_{21}=V_{12}^{T} .
  $$
  Then, conditional on $X_2 = x_2$, the vector $X_1$ is multivariate normal:
  $$
  X_1 \mid \{X_2 = x_2\} \;\sim\; N\Bigl(\;\mu_1 + V_{12}V_{22}^{-1}(x_2-\mu_2),\;\; V_{11} - V_{12}V_{22}^{-1}V_{21}\;\Bigr) .
  $$
  The conditional mean is affine in the observed $x_2$; the conditional covariance $S = V_{11}-V_{12}V_{22}^{-1}V_{21}$, the **Schur complement** of $V_{22}$ in $V$, does **not** depend on $x_2$ at all. Hence, in the language of :ref[]{to=prob.conditional-expectation},
  $$
  \mathbb{E}(X_1 \mid X_2) = \mu_1 + V_{12}V_{22}^{-1}(X_2-\mu_2), \qquad \operatorname{var}(X_1\mid X_2) = S \ \text{(a constant matrix)} ,
  $$
  so for jointly normal variables the best mean-square predictor is already the best *linear* predictor.
- **(d) Independence equals zero correlation.** $X_1$ and $X_2$ are independent if and only if $V_{12} = 0$. Componentwise: jointly normal variables are independent exactly when they are uncorrelated.
- **(e) Sampling.** If $C$ is any $n\times n$ matrix with $CC^{T} = V$ and $W$ is standard multivariate normal, then $\mu + CW \sim N(\mu, V)$. Such a $C$ is automatically invertible, since $(\det C)^2 = \det V > 0$. Two standard choices of $C$ are the symmetric square root of $V$ and the Cholesky factor. Grimmett and Stirzaker state the Cholesky version in their row convention: with $L$ lower triangular and $V = L'L$, the row vector $Z = \mu + XL$ is $N(\mu,V)$; transposing gives $C = L^{T}$ here.
:::

:::idea{provenance=original}
One change of variables does nearly everything. Because $V$ is real symmetric, the spectral theorem supplies an orthogonal $Q$ with $V = Q\Lambda Q^{T}$ and $\Lambda = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$. Setting $y = Q^{T}(x-\mu)$ rotates the quadratic form into $\sum_i y_i^2/\lambda_i$ and leaves the volume element alone, because $\lvert\det Q\rvert = 1$. The density then factorises into $n$ one-dimensional Gaussians with variances $\lambda_i$, and every statement about the general case becomes a statement about independent one-dimensional Gaussians: the normalising constant is a product of $n$ Gaussian integrals, the mean is $0$ by symmetry, the covariance matrix is $\Lambda$ rotated back, and positive definiteness is exactly the condition that makes all $n$ integrals converge.

Conditioning needs a second, purely algebraic device. The matrix $V$ factorises as a product of a lower-triangular, a block-diagonal and an upper-triangular matrix - block Gaussian elimination - and reading the factorisation off in the exponent completes the square in $x_1$ with $x_2$ held fixed. What is left over is a quadratic form in $x_2$ alone, which cancels against the marginal density, and the determinant splits in the same way. The conditional law drops out with no integration at all.
:::

:::proof[Normalisation, mean and covariance]{provenance=adapted src="grimmett-stirzaker-2020:§4.9, the evaluation of $\int K\exp(-\tfrac12 Q)$ and the symmetry argument, p. 132; rhb-2006:§30.15.2, the worked integral (30.149), p. 1210"}
Let $V$ be symmetric positive definite with eigenvalues $\lambda_1,\dots,\lambda_n > 0$. By the spectral theorem (:ref[]{to=linalg.hermitian-spectral-theorem}) there is an orthogonal $Q$ with $V = Q\Lambda Q^{T}$, $\Lambda = \operatorname{diag}(\lambda_i)$, whence $V^{-1} = Q\Lambda^{-1}Q^{T}$ and $\det V = \lambda_1\cdots\lambda_n$.

**Step 1: the integral.** Substitute $y = Q^{T}(x-\mu)$, so $x = \mu + Qy$. The Jacobian determinant is $\det Q = \pm1$, so $dx = dy$. The exponent becomes

$$
(x-\mu)^{T}V^{-1}(x-\mu) = y^{T}Q^{T}Q\Lambda^{-1}Q^{T}Qy = y^{T}\Lambda^{-1}y = \sum_{i=1}^{n}\frac{y_i^2}{\lambda_i} ,
$$

using $Q^{T}Q = I$. Hence the integral of $\exp(-\tfrac12(x-\mu)^{T}V^{-1}(x-\mu))$ over $\mathbb{R}^n$ factorises, and by the one-dimensional Gaussian integral (:ref[]{to=found.gaussian-integrals})

$$
\int_{\mathbb{R}^n} e^{-\frac12\sum_i y_i^2/\lambda_i}\,dy \;=\; \prod_{i=1}^{n}\int_{-\infty}^{\infty} e^{-y_i^2/(2\lambda_i)}\,dy_i \;=\; \prod_{i=1}^{n}\sqrt{2\pi\lambda_i} \;=\; (2\pi)^{n/2}(\det V)^{1/2} .
$$

So the stated constant makes $f$ integrate to $1$. **This is the step that needs positive definiteness**: if some $\lambda_i \le 0$ the corresponding factor diverges (for $\lambda_i<0$) or is undefined (for $\lambda_i=0$), and no constant can repair it.

**Step 2: the mean.** With $Y = Q^{T}(X-\mu)$, step 1 shows that the density of $Y$ is $\prod_i (2\pi\lambda_i)^{-1/2}e^{-y_i^2/2\lambda_i}$, a product of $N(0,\lambda_i)$ densities. So the $Y_i$ are independent, each with mean $0$ and variance $\lambda_i$; each is integrable because a Gaussian has all moments. Hence $\mathbb{E}(Y) = 0$ and, by linearity, $\mathbb{E}(X) = \mu + Q\,\mathbb{E}(Y) = \mu$. (Grimmett and Stirzaker reach the same conclusion from the symmetry $f(x) = f(-x)$ of the centred density.)

**Step 3: the covariance matrix.** $\operatorname{cov}(Y) = \Lambda$, since the $Y_i$ are independent with variances $\lambda_i$. Then $X - \mu = QY$, and for any matrix $A$ and vector $Z$ with mean $0$, $\mathbb{E}(AZ(AZ)^{T}) = A\,\mathbb{E}(ZZ^{T})A^{T}$. Therefore

$$
\mathbb{E}\bigl((X-\mu)(X-\mu)^{T}\bigr) = Q\Lambda Q^{T} = V ,
$$

that is $\operatorname{cov}(X_i,X_j) = v_{ij}$.

**Step 4: the transforms.** For the moment generating function, complete the square. With $u = x-\mu$,

$$
t^{T}x - \tfrac12 u^{T}V^{-1}u = t^{T}\mu + t^{T}u - \tfrac12 u^{T}V^{-1}u
= t^{T}\mu + \tfrac12 t^{T}Vt - \tfrac12 (u - Vt)^{T}V^{-1}(u-Vt) ,
$$

as expanding the last bracket confirms, using the symmetry of $V^{-1}$. Integrating $f(x)e^{t^{T}x}$ over $x$ therefore leaves $\exp(t^{T}\mu + \tfrac12 t^{T}Vt)$ times the integral of a density centred at $\mu + Vt$, which is $1$. This is the form :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§30.15.2, p. 1209"} obtain, with their $A = V^{-1}$. The characteristic function follows by analytic continuation to imaginary argument, exactly as in the one-dimensional case (:ref[]{to=prob.characteristic-functions}); it is the result :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.8, Example (5.8.6), pp. 209-210"} obtain by this same rotation.

**Step 5: the chi-squared statement.** In the coordinates of step 1, $(X-\mu)^{T}V^{-1}(X-\mu) = \sum_i Y_i^2/\lambda_i$, and $Y_i/\sqrt{\lambda_i}$ are independent $N(0,1)$. A sum of $n$ squared independent standard normals is $\chi^2(n)$ by definition. $\square$
:::

:::proof[Affine images, marginals, conditionals and independence]{provenance=adapted src="grimmett-stirzaker-2020:§4.9, proof of Theorem (4.9.6) for $m=n$, p. 133"}
**(a) Affine images, invertible case.** Let $D$ be $n\times n$ and invertible, $Y = D^{T}X + c$. The map $x \mapsto y = D^{T}x + c$ is a bijection of $\mathbb{R}^n$ with inverse $x = (D^{T})^{-1}(y-c)$ and Jacobian determinant $\lvert\det D\rvert^{-1}$, so by the change of variables formula (:ref[]{to=found.change-of-variables}) the density of $Y$ is $f\bigl((D^{T})^{-1}(y-c)\bigr)\,\lvert\det D\rvert^{-1}$. Put $W = D^{T}VD$ and $\nu = D^{T}\mu + c$. Then $W^{-1} = D^{-1}V^{-1}(D^{T})^{-1}$ and, with $z = y - \nu$,

$$
\bigl((D^{T})^{-1}z\bigr)^{T}V^{-1}\bigl((D^{T})^{-1}z\bigr) = z^{T}D^{-1}V^{-1}(D^{T})^{-1}z = z^{T}W^{-1}z ,
$$

while $\det W = (\det D)^2\det V$, so $\lvert\det D\rvert^{-1}(\det V)^{-1/2} = (\det W)^{-1/2}$. The density of $Y$ is therefore the $N(\nu, W)$ density. Positive definiteness of $W$ is inherited: $u^{T}Wu = (Du)^{T}V(Du) > 0$ for $u \ne 0$ since $D$ is invertible.

**(a) Affine images, general rank.** For $D$ of rank $m < n$, compute the characteristic function of $Y = D^{T}X + c$ directly from step 4 above: for $s \in \mathbb{R}^m$,

$$
\varphi_Y(s) = \mathbb{E}\bigl(e^{is^{T}(D^{T}X+c)}\bigr) = e^{is^{T}c}\,\varphi_X(Ds)
= \exp\Bigl(i s^{T}(D^{T}\mu + c) - \tfrac12 s^{T}D^{T}VDs\Bigr) ,
$$

which is the characteristic function of $N(D^{T}\mu + c,\, D^{T}VD)$; the matrix $D^{T}VD$ is positive definite because $Ds \ne 0$ for $s\ne0$ when $D$ has rank $m$. By the uniqueness half of the inversion theorem (:ref[]{to=prob.characteristic-functions}) the distributions agree. Grimmett and Stirzaker state this case without proof, referring to another text; the characteristic-function argument is the standard way to supply it.

**(b) Marginals.** Take $D$ in (a) to be the $n\times p$ matrix whose columns are the standard basis vectors $e_{i_1},\dots,e_{i_p}$ of the chosen coordinates and $c=0$. It has rank $p$, $D^{T}\mu$ is the corresponding sub-vector of $\mu$, and $D^{T}VD$ is the corresponding $p\times p$ sub-matrix of $V$.

**(c) Conditionals.** Write $u = x_1-\mu_1$, $v = x_2-\mu_2$ and $S = V_{11}-V_{12}V_{22}^{-1}V_{21}$. Block Gaussian elimination factorises $V$ as

$$
V = \begin{pmatrix} I & V_{12}V_{22}^{-1}\\ 0 & I\end{pmatrix}
\begin{pmatrix} S & 0\\ 0 & V_{22}\end{pmatrix}
\begin{pmatrix} I & 0\\ V_{22}^{-1}V_{21} & I\end{pmatrix} ,
$$

as multiplying out confirms, the $(1,1)$ block being $S + V_{12}V_{22}^{-1}V_{21} = V_{11}$. Two consequences follow at once, because the outer factors are triangular with unit diagonal and so have determinant $1$ and easily inverted:

$$
\det V = \det S \cdot \det V_{22} ,
\qquad
V^{-1} = \begin{pmatrix} I & 0\\ -V_{22}^{-1}V_{21} & I\end{pmatrix}
\begin{pmatrix} S^{-1} & 0\\ 0 & V_{22}^{-1}\end{pmatrix}
\begin{pmatrix} I & -V_{12}V_{22}^{-1}\\ 0 & I\end{pmatrix} .
$$

Applying the second display to $(u,v)$ and writing $w = u - V_{12}V_{22}^{-1}v$ gives the completed square

$$
(x-\mu)^{T}V^{-1}(x-\mu) \;=\; w^{T}S^{-1}w \;+\; v^{T}V_{22}^{-1}v .
$$

($S$ is positive definite: it is the inverse of the top-left block of $V^{-1}$, which is positive definite because $V$ is.) The marginal density of $X_2$ is the $N(\mu_2, V_{22})$ density, by (b). Dividing, and using $\det V = \det S\det V_{22}$ to split the constant,

$$
f_{X_1\mid X_2}(x_1\mid x_2) = \frac{f(x)}{f_{X_2}(x_2)}
= \frac{1}{(2\pi)^{p/2}(\det S)^{1/2}}\exp\bigl(-\tfrac12 w^{T}S^{-1}w\bigr) ,
$$

which is the $N(\mu_1 + V_{12}V_{22}^{-1}(x_2-\mu_2),\,S)$ density, since $w = x_1 - \bigl(\mu_1+V_{12}V_{22}^{-1}(x_2-\mu_2)\bigr)$. No integration was performed: the whole content is the factorisation of $V$.

**(d) Independence.** If $V_{12}=0$ then $S = V_{11}$ and the conditional density of $X_1$ given $X_2=x_2$ does not depend on $x_2$, so $f = f_{X_1}f_{X_2}$ and the blocks are independent. Conversely independent blocks have $\operatorname{cov}(X_{1i},X_{2j})=0$, which is $V_{12}=0$.

**(e) Sampling.** If $W \sim N(0,I)$ and $CC^{T}=V$ then $\mu + CW$ has mean $\mu$ and covariance $C I C^{T} = V$. Taking determinants in $CC^{T}=V$ gives $(\det C)^2 = \det V$, which is strictly positive because $V$ is positive definite, so $C$ is invertible and (a) applies with $D^{T} = C$: the law is $N(\mu, V)$. (If $V$ is only non-negative definite, $C$ may be singular and (a) no longer applies, but $\mu+CW$ is still multivariate normal in the linear-combination sense, since $a^{T}(\mu+CW) = a^{T}\mu + (C^{T}a)^{T}W$ is univariate normal for every $a$.) $\square$
:::

:::remark[Where the hypotheses are used, and the trap of marginal normality]{provenance=original}
- **Positive definiteness is needed for the density and nowhere else.** It enters exactly once, in step 1, to make the $n$ Gaussian integrals converge; everything downstream inherits it. Merely non-negative definite $V$ still defines a perfectly good distribution through the characteristic function $\exp(it^{T}\mu - \tfrac12 t^{T}Vt)$, but that distribution is concentrated on an affine subspace of dimension $\operatorname{rank}V$ and has no density on $\mathbb{R}^n$. The simplest instance is $X_2 = X_1$ with $X_1\sim N(0,1)$: the law of $(X_1,X_2)$ sits on a line, $V = \begin{pmatrix}1&1\\1&1\end{pmatrix}$ is singular, and $\det V = 0$ kills the normalising constant.
- **Invertibility of $V_{22}$, not of $V$, is what conditioning needs.** The factorisation in (c) uses $V_{22}^{-1}$ and nothing else. If the conditioning block is itself degenerate, the observed coordinates carry a deterministic relation and one of them must be dropped before conditioning.
- **Jointly normal is strictly stronger than marginally normal.** :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§4.9, Exercise (4.9.5), pp. 134-135"} set this exercise: let $X \sim N(0,1)$, fix $a>0$, and let $Y = X$ when $\lvert X\rvert < a$ and $Y = -X$ when $\lvert X\rvert \ge a$. Then $Y$ is again $N(0,1)$, since the transformation reflects a symmetric density about the origin on part of its range; yet $\lvert Y\rvert = \lvert X\rvert$ always, so the pair is confined to two lines and has no bivariate normal density. Their $\rho(a) = \operatorname{cov}(X,Y)$ runs continuously from $-1$ (at $a=0$, where $Y=-X$) to $+1$ (as $a\to\infty$, where $Y=X$), so some intermediate $a$ makes $X$ and $Y$ uncorrelated while they remain completely dependent. **Statement (d) is therefore about jointly normal variables and collapses without that hypothesis.**
- **Normality of every linear combination is the right hypothesis, and pairwise checks do not suffice.** Verifying that $X_1$, $X_2$ and $X_1+X_2$ are each normal does not make $(X_1,X_2)$ bivariate normal; the definition quantifies over *all* $a$, and the example above fails it at $a=(1,1)^{T}$ or $a=(1,-1)^{T}$ depending on the cut-off.
- **The conditional covariance being constant is special to the normal family.** For a general joint law $\operatorname{var}(Y\mid X)$ depends on $X$, and the best predictor is a curve rather than a line. Here both degeneracies happen at once, which is precisely why least-squares linear regression is *exactly* optimal under a normal model and only approximately so otherwise.
- **A check on the conditional formula.** For the standard trivariate normal with unit variances and correlations $\rho_1 = \rho(X,Y)$, $\rho_2 = \rho(Y,Z)$, $\rho_3 = \rho(Z,X)$, statement (c) with $X_1 = Z$ and $X_2 = (X,Y)^{T}$ gives $V_{12} = (\rho_3,\rho_2)$ and $V_{22}^{-1} = (1-\rho_1^2)^{-1}\begin{pmatrix}1&-\rho_1\\-\rho_1&1\end{pmatrix}$, hence
  $$
  \mathbb{E}(Z\mid X,Y) = \frac{(\rho_3-\rho_1\rho_2)X + (\rho_2-\rho_1\rho_3)Y}{1-\rho_1^2},
  \quad
  \operatorname{var}(Z\mid X,Y) = \frac{1-\rho_1^2-\rho_2^2-\rho_3^2+2\rho_1\rho_2\rho_3}{1-\rho_1^2} ,
  $$
  which is exactly what :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§4.9, Exercise (4.9.9), p. 135"} ask the reader to show. Their $\rho_2$ and $\rho_3$ are labelled cyclically, as that agreement fixes. The bivariate case $p=q=1$ with unit variances reduces to $\mathbb{E}(Y\mid X) = \rho X$ and $\operatorname{var}(Y\mid X) = 1-\rho^2$, which is :cite[their Example (4.6.7)]{work=grimmett-stirzaker-2020 loc="§4.6, Example (4.6.7), p. 119"}.
:::

:::method[Working with a multivariate normal]{provenance=original}
1. **Write down $\mu$ and $V$, and check $V$.** It must be symmetric; it must be positive definite if a density is wanted. Cheap checks: every diagonal entry positive, every $2\times2$ principal minor positive, $\det V > 0$. A full check is Sylvester's criterion or a Cholesky factorisation, which fails exactly when $V$ is not positive definite (:ref[]{to=linalg.quadratic-forms}).
2. **Reduce to the standard case when you need an integral.** Either rotate, $Y = Q^{T}(X-\mu)$ with $Q$ from the spectral theorem, or whiten, $W = C^{-1}(X-\mu)$ with $CC^{T}=V$. Both turn the problem into one about independent $N(0,1)$ variables.
3. **For any linear function, do not integrate.** Read the answer off (a): $D^{T}X+c$ is normal with mean $D^{T}\mu+c$ and covariance $D^{T}VD$. Sums, differences, averages and projections are all of this form.
4. **For a marginal, delete rows and columns.** Keep the entries of $\mu$ and $V$ belonging to the coordinates retained; discard the rest. No integration.
5. **For a conditional, use the Schur complement.** Order the coordinates so that the observed ones come last, form $S = V_{11}-V_{12}V_{22}^{-1}V_{21}$, and read off the conditional mean $\mu_1 + V_{12}V_{22}^{-1}(x_2-\mu_2)$ and covariance $S$.
6. **Check.** Three identities cost nothing and catch most errors: $\det V = \det S\cdot\det V_{22}$; the conditional variance of any coordinate must be no larger than its unconditional variance; and setting $V_{12}=0$ must return the marginal.
7. **To simulate, factor once.** Compute the Cholesky factor $C$ with $CC^{T}=V$ once, then each sample is $\mu + CW$ with $W$ a fresh vector of independent standard normals.
:::

:::example[A three-dimensional normal: marginal, conditional and a tail probability]{provenance=original}
Take $n=3$ with

$$
\mu = \begin{pmatrix}1\\-1\\2\end{pmatrix},
\qquad
V = \begin{pmatrix}4 & 2 & 1\\ 2 & 3 & 1\\ 1 & 1 & 2\end{pmatrix} .
$$

**Step 1: is $V$ a legitimate covariance matrix?** It is symmetric. Its leading principal minors are $4 > 0$, $\det\begin{pmatrix}4&2\\2&3\end{pmatrix} = 8 > 0$ and

$$
\det V = 4(3\cdot2 - 1\cdot1) - 2(2\cdot2-1\cdot1) + 1(2\cdot1-3\cdot1) = 20 - 6 - 1 = 13 > 0 ,
$$

so $V$ is positive definite by Sylvester's criterion. (Numerically its eigenvalues are $1.30798$, $1.64310$, $6.04892$; they sum to $9 = \operatorname{tr}V$ and multiply to $13 = \det V$, two checks at once.) Hence $X \sim N(\mu,V)$ has the density of the definition, with normalising constant $(2\pi)^{-3/2}13^{-1/2} = 0.0176100$.

**Step 2: a marginal.** By (b), $(X_1,X_2)^{T} \sim N\!\left(\begin{pmatrix}1\\-1\end{pmatrix}, \begin{pmatrix}4&2\\2&3\end{pmatrix}\right)$, so $X_1\sim N(1,4)$, $X_2\sim N(-1,3)$ and $\rho(X_1,X_2) = 2/\sqrt{4\cdot3} = 1/\sqrt3 = 0.57735$.

**Step 3: condition $X_1$ on the other two.** Take $p=1$, $q=2$, so

$$
V_{11} = (4), \qquad V_{12} = (2\ \ 1), \qquad V_{22} = \begin{pmatrix}3&1\\1&2\end{pmatrix},
\qquad \det V_{22} = 5, \qquad V_{22}^{-1} = \frac15\begin{pmatrix}2&-1\\-1&3\end{pmatrix}.
$$

Then

$$
V_{12}V_{22}^{-1} = \frac15\,(2\ \ 1)\begin{pmatrix}2&-1\\-1&3\end{pmatrix} = \frac15\,(3\ \ 1) ,
$$

and the Schur complement is

$$
S = V_{11} - V_{12}V_{22}^{-1}V_{21} = 4 - \frac15(3\ \ 1)\begin{pmatrix}2\\1\end{pmatrix} = 4 - \frac{7}{5} = \frac{13}{5} = 2.6 .
$$

Observe $x_2 = (0,3)^{T}$, so $x_2 - \mu_2 = (1,1)^{T}$ and the conditional mean is

$$
\mu_1 + V_{12}V_{22}^{-1}(x_2-\mu_2) = 1 + \frac15(3+1) = \frac95 = 1.8 .
$$

Therefore

$$
\boxed{\,X_1 \mid \{X_2 = 0,\ X_3 = 3\} \ \sim\ N\!\left(\tfrac95,\ \tfrac{13}{5}\right).}
$$

**Step 4: the checks.** The determinant identity holds: $\det S\cdot\det V_{22} = \tfrac{13}{5}\cdot 5 = 13 = \det V$. The conditional variance $2.6$ is smaller than the unconditional variance $4$, as observing correlated coordinates must make it. And the conditional mean has moved up from $1$ to $1.8$, consistent with $X_2$ and $X_3$ both having been observed above their means while both covariances with $X_1$ are positive. A Monte Carlo run of $4\times10^{6}$ draws, keeping those with $X_2$ and $X_3$ within $0.05$ of the conditioning values, gave a sample mean $1.819$ and sample variance $2.685$ from $2106$ retained draws, agreeing with $1.8$ and $2.6$ to within the sampling error.

**Step 5: a probability.** With the conditional law in hand,

$$
\mathbb{P}\bigl(X_1 \le 3 \mid X_2 = 0, X_3 = 3\bigr)
= \Phi\!\left(\frac{3 - 9/5}{\sqrt{13/5}}\right) = \Phi(0.744208) = 0.771625 .
$$

The unconditional answer is $\Phi((3-1)/2) = \Phi(1) = 0.841345$. Conditioning has therefore made the value $3$ *less* surprising, not more: the upper tail $\mathbb{P}(X_1 > 3)$ rises from $0.158655$ to $0.228375$, and the standardised distance from the centre falls from $z = 1$ to $z = 0.744208$. Two effects compete, and the one that wins is the shift of the centre. Observing $X_2$ and $X_3$ above their means pulls the mean of $X_1$ up from $1$ to $1.8$, which moves $3$ closer; it also shrinks the standard deviation from $2$ to $\sqrt{13/5} = 1.612452$, which on its own would move $3$ further away in units of the spread. The break-even point is the conditional mean that would leave $z$ at $1$ with the new spread, namely $3 - 1.612452 = 1.387548$; the actual conditional mean $1.8$ is larger than that, so the mean shift dominates. All numerical values here were computed and cross-checked symbolically.
:::

:::application[Error ellipses, least squares, Gaussian fields and filters]{provenance=original}
**Error matrices and confidence regions.** A fit reports parameters $\hat\theta$ with a covariance matrix $V$, and the standard interpretation is that $\hat\theta$ is approximately $N(\theta, V)$. Statement 4 above then says that $(\hat\theta-\theta)^{T}V^{-1}(\hat\theta-\theta)$ is $\chi^2(n)$, which is where contours of constant $\Delta\chi^2$ as confidence regions come from: the $1\sigma$, $2\sigma$ ellipsoids are level sets of the quadratic form, with axes along the eigenvectors of $V$ and semi-axes proportional to $\sqrt{\lambda_i}$. Marginalising a parameter away is statement (b) - delete its row and column - while *fixing* it is statement (c), and the two give different error bars on the remaining parameters, the conditional one always smaller. Confusing the two is a common source of understated uncertainties.

**Linear least squares.** With normal errors, the maximum-likelihood estimate minimises a quadratic form and is itself a linear function of the data, hence normal by (a); its covariance matrix is the usual $(A^{T}\Sigma^{-1}A)^{-1}$. Statement (c) is the reason linear regression is optimal and not merely convenient in this setting.

**Gaussian random fields.** A field $\phi(x)$ whose finite-dimensional distributions are multivariate normal is specified completely by a mean function and a two-point correlation function; this is the standard model for the cosmic microwave background, for turbulence at fixed scale, and for the Gaussian free field. Conditioning on measurements at some points to predict the field elsewhere is statement (c) applied to the covariance kernel - in geostatistics and machine learning the same formula is called kriging, or Gaussian process regression.

**Kalman filtering and data assimilation.** Because a normal prior through a linear model with normal noise gives a normal posterior, the entire filtering recursion reduces to updating a mean vector and a covariance matrix by statements (a) and (c). This is why the Kalman filter is finite-dimensional while general nonlinear filtering is not.

**Equilibrium statistical mechanics.** A system of harmonic degrees of freedom at temperature $T$ has Boltzmann weight $\exp(-\tfrac12 q^{T}Kq/k_BT)$, which is exactly the $N(0, k_BT\,K^{-1})$ density. Equipartition, the fluctuation-dissipation relation between the response matrix $K^{-1}$ and the covariance of the displacements, and normal-mode decomposition are statements 2, 3 and the rotation of step 1 respectively. The Ornstein-Uhlenbeck process of :ref[]{to=prob.stochastic-differential-equations} has multivariate normal finite-dimensional laws for the same reason.
:::
