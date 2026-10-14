---
id: stats.least-squares-regression
title: Least-squares fitting
kind: method
level: core
summary: Sets up the linear fitting problem with a known noise covariance, solves it in closed form for the parameters and their full covariance matrix, proves the Gauss-Markov theorem that this is the best linear unbiased estimator whatever the noise distribution, shows that for Gaussian noise the minimised chi-squared has $n-M$ degrees of freedom, and fits Planck's constant from six photoelectric points as $h = (6.615 \pm 0.093)\times10^{-34}\,\mathrm{J\,s}$ with $\chi^2 = 2.20$ on $4$ degrees of freedom.
prereqs: [linalg.projections-least-squares, stats.estimators, stats.sampling-distributions, stats.maximum-likelihood, linalg.svd, linalg.quadratic-forms, linalg.unitary-orthogonal-matrices, linalg.hermitian-spectral-theorem, prob.multivariate-normal]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§31.6, pp. 1271-1272: the model $y_i = f(x_i;a)+n_i$ with the $x_i$ known exactly, the multivariate Gaussian noise of known covariance matrix $\\mathsf{N}$, the likelihood $L \\propto \\exp(-\\tfrac12\\chi^2)$, the quadratic form $\\chi^2(a) = (y-f)^T \\mathsf{N}^{-1}(y-f)$ of eq. (31.90) with its diagonal special case, the definition of the least-squares estimators by $\\partial\\chi^2/\\partial a_i = 0$ (31.91), the identity of LS and ML estimators for Gaussian noise, and the remark that the method is used anyway when the noise is not Gaussian; §31.6.1, eqs. (31.92)-(31.99), pp. 1272-1274: the model linear in the parameters, $f(x;a) = \\sum_i a_i h_i(x)$ with linearly independent basis functions, the response matrix $R_{ij} = h_j(x_i)$, the statement that in this case the LS estimators are unbiased and minimum-variance whatever the density from which the errors are drawn, the gradient $\\nabla\\chi^2 = -2R^T \\mathsf{N}^{-1}(y-Ra)$ with its component-by-component verification, the solution $\\hat a = (R^T \\mathsf{N}^{-1}R)^{-1}R^T \\mathsf{N}^{-1}y \\equiv Sy$, the covariance $V = S\\mathsf{N}S^T = (R^T \\mathsf{N}^{-1}R)^{-1}$ with its proof, the identification of $V^{-1}$ with half the Hessian of $\\chi^2$ and with the Fisher matrix in the Gaussian case, the exactness of the quadratic expansion of $\\chi^2$ for a linear model, and the consequent ellipsoidal confidence regions; pp. 1275-1276: the straight-line fit with $\\mathsf{N} = \\sigma^2 I$, the reduction $\\hat a = (R^TR)^{-1}R^Ty$ (31.101), the explicit slope and intercept (31.102) with the remark that the fitted line passes through the centroid of the data, and the covariance matrix (31.103); §31.6.2, pp. 1276-1277: non-linear least squares by Newton iteration on the gradient, and the warning about local minima; §31.3.6, eq. (31.39) and Table 31.2, pp. 1242-1244: the constant $c$ of a confidence ellipsoid from the chi-squared distribution of order $M$"
    pages: "1242-1244, 1271-1277"
    role: the whole framework of this unit - the model, the chi-squared quadratic form, the response matrix, the normal equations, the closed-form estimator and its covariance matrix, the straight-line special case, and the iterative treatment of non-linear models
  - work: arfken-2013
    loc: "§23.7, pp. 1168-1169: the unweighted straight-line fit through the origin by minimising $\\sum_j (at_j-y_j)^2$, with the slope (23.96) and the comment that its numerator is built like a sample covariance; pp. 1169-1170, Figs. 23.10 and 23.11 with eq. (23.98): the fit when the abscissae rather than the ordinates carry the error, and the symmetric fit minimising the perpendicular distances, parametrised by the angle $\\alpha$ of the line with $\\tan 2\\alpha = 2\\sum_j t_j y_j/\\sum_j (t_j^2-y_j^2)$; pp. 1170-1172, eqs. (23.99)-(23.105): the weighted sum of squares called chi-square, the two assumptions that make it a sum of squares of independent standard normal variables, its gamma density (23.101), its mean $n$ and variance $2n$ (23.103)-(23.104), the tail probability (23.105) with Table 23.2, and the rule that fitting $r$ parameters to $n$ points leaves $n-r$ effective degrees of freedom; Example 23.7.2, pp. 1173-1174: a three-point weighted fit in which the estimate is dominated by the most precise measurement"
    pages: "1168-1174"
    role: the chi-squared statistic as a goodness-of-fit measure with $n-M$ degrees of freedom, the rule for counting them, and the two variants of the straight-line fit in which the error is on the abscissa or on both coordinates
---

:::note[What this unit is for]{provenance=original}
A fit is an estimation problem in disguise. Given points that should lie on a curve of known shape but unknown parameters, and given how noisy each point is, the parameters are to be estimated and their uncertainties quoted. If the noise is Gaussian this is maximum likelihood (:ref[]{to=stats.maximum-likelihood}) and nothing new is needed - except that for a model linear in its parameters the maximisation can be done once and for all, in closed form, giving the parameters *and* their covariance matrix from one matrix inversion.

Three things make this worth a unit of its own. The closed form is exact, not asymptotic. Its optimality survives the loss of normality: the Gauss-Markov theorem below needs only that the errors have zero mean and the stated covariance. And the minimised value of the objective function is itself a test of whether the model was right, with a distribution known in advance.
:::

:::definition[The fitting problem and the chi-squared form]{provenance=adapted src="rhb-2006:§31.6, pp. 1271-1272, and §31.6.1, eqs. (31.92)-(31.94), pp. 1272-1273"}
Let data be a list of pairs $(x_i, y_i)$, $i = 1,\dots,n$, in which the $x_i$ are known exactly and each $y_i$ carries a measurement error. Assume

$$
y_i \;=\; f(x_i; a) + \eta_i ,
$$

where $f(\,\cdot\,;a)$ is a function of known form depending on $M$ unknown parameters $a = (a_1,\dots,a_M)$, and the noise vector $\eta = (\eta_1,\dots,\eta_n)$ has zero mean and **known** covariance matrix

$$
\mathsf{N}_{ij} \;=\; \operatorname{Cov}[\eta_i,\eta_j] ,
$$

assumed symmetric positive definite. (We write $n$ for the number of data points and $\mathsf{N}$ for the noise covariance; Riley, Hobson and Bence use the letter $N$ for both.) The $x_i$ may be vectors; nothing below changes.

The **chi-squared function** of the parameters is the quadratic form

$$
\chi^{2}(a) \;=\; \bigl(y - f(a)\bigr)^{\mathsf T}\mathsf{N}^{-1}\bigl(y - f(a)\bigr)
\;=\; \sum_{i,j=1}^{n}\bigl[y_i - f(x_i;a)\bigr]\bigl(\mathsf{N}^{-1}\bigr)_{ij}\bigl[y_j - f(x_j;a)\bigr] ,
$$

with $f(a)$ the column vector of model values $f(x_i;a)$. When the errors are uncorrelated, $\mathsf{N} = \operatorname{diag}(\sigma_1^{2},\dots,\sigma_n^{2})$ and this collapses to the familiar weighted sum

$$
\chi^{2}(a) \;=\; \sum_{i=1}^{n}\left(\frac{y_i - f(x_i;a)}{\sigma_i}\right)^{2} .
$$

The **least-squares estimators** $\hat a$ are the parameter values minimising $\chi^{2}$, found in the interior from $\partial\chi^{2}/\partial a_i = 0$.

The model is **linear in the parameters** if

$$
f(x;a) \;=\; \sum_{j=1}^{M} a_j\,h_j(x)
$$

for a fixed, linearly independent set of **basis functions** $h_1,\dots,h_M$, which may themselves be arbitrarily non-linear in $x$. Collecting their values at the data points into the $n\times M$ **response matrix**

$$
R_{ij} \;=\; h_j(x_i) ,
$$

the model vector is $f(a) = Ra$ and

$$
\chi^{2}(a) \;=\; (y - Ra)^{\mathsf T}\mathsf{N}^{-1}(y - Ra) .
$$

Throughout the statements below, $R$ is assumed to have rank $M$, which requires $n \ge M$ and says that no parameter combination leaves the model values at the data points unchanged.
:::

:::statement[The linear least-squares solution]{provenance=adapted src="rhb-2006:§31.6.1, eqs. (31.95)-(31.99), pp. 1273-1274"}
For a model linear in its parameters, with $R$ of rank $M$ and $\mathsf{N}$ symmetric positive definite:

1. $\chi^{2}$ has a unique minimiser, the solution of the **normal equations**

$$
R^{\mathsf T}\mathsf{N}^{-1} R\,\hat a \;=\; R^{\mathsf T}\mathsf{N}^{-1} y ,
\qquad\text{that is}\qquad
\hat a \;=\; \bigl(R^{\mathsf T}\mathsf{N}^{-1}R\bigr)^{-1}R^{\mathsf T}\mathsf{N}^{-1}y \;\equiv\; Sy .
$$

2. $\hat a$ is a **linear** function of the data and is **unbiased**, $\mathbb{E}[\hat a] = a$, for every $a$.
3. Its covariance matrix is

$$
V \;=\; \operatorname{Cov}[\hat a_i,\hat a_j] \;=\; S\,\mathsf{N}\,S^{\mathsf T} \;=\; \bigl(R^{\mathsf T}\mathsf{N}^{-1}R\bigr)^{-1} ,
$$

so the matrix inverted to find the parameters already *is* their covariance matrix. Equivalently $V^{-1} = \tfrac12\,\partial^{2}\chi^{2}/\partial a_i\partial a_j$, which is independent of the data.
4. $\chi^{2}$ is exactly quadratic:

$$
\chi^{2}(a) \;=\; \chi^{2}(\hat a) + (a - \hat a)^{\mathsf T}V^{-1}(a-\hat a) ,
$$

with no higher terms, so the surfaces of constant $\chi^{2}$ are the concentric ellipsoids of :ref[]{to=linalg.quadratic-forms} centred on $\hat a$.

If in addition the noise is Gaussian, $\eta \sim N(0,\mathsf{N})$ in the sense of :ref[]{to=prob.multivariate-normal}, then $L \propto \exp(-\tfrac12\chi^{2})$, so the least-squares and maximum-likelihood estimators coincide, $V^{-1}$ is the Fisher matrix of :ref[]{to=stats.estimators}, and $\hat a$ attains the Cramer-Rao bound exactly, at every $n$.
:::

:::statement[Gauss-Markov]{provenance=original}
Keep the linear model $y = Ra + \eta$ with $R$ of rank $M$, and assume only that

$$
\mathbb{E}[\eta] = 0 , \qquad \operatorname{Cov}[\eta] = \mathsf{N} \ \text{ symmetric positive definite and known.}
$$

No distributional assumption is made. Let $\tilde a = Cy$ be any estimator that is linear in the data and unbiased for every value of $a$. Then

$$
\operatorname{Cov}[\tilde a] - \operatorname{Cov}[\hat a] \ \text{ is positive semi-definite,}
$$

with $\hat a = Sy$ the least-squares estimator. In particular $\operatorname{var}[\tilde a_i] \ge \operatorname{var}[\hat a_i] = V_{ii}$ for each parameter, and the same holds for every linear combination $u^{\mathsf T}a$ of the parameters. Equality for all $u$ forces $C = S$.

The least-squares estimator is thus the **best linear unbiased estimator**: among rules of the form "a fixed matrix times the data", it is the one of smallest variance, whatever the law of the noise.
:::

:::idea{provenance=original}
Both statements are one geometric picture.

Whiten the problem. Because $\mathsf{N}$ is symmetric positive definite it has a symmetric positive definite square root, and dividing through by it turns the weighted form $\chi^{2}$ into an ordinary squared length: with $z = \mathsf{N}^{-1/2}y$ and $B = \mathsf{N}^{-1/2}R$,

$$
\chi^{2}(a) \;=\; \lVert z - Ba\rVert^{2} .
$$

Minimising a squared distance from a point to the column space of $B$ is exactly the problem solved in :ref[]{to=linalg.projections-least-squares}: the answer is the orthogonal projection of $z$ onto that space, characterised by the residual being perpendicular to it, which is the normal equations. The covariance then follows because a linear map sends a covariance matrix $\mathsf{N}$ to $S\mathsf{N}S^{\mathsf T}$, and the whitening makes that collapse.

Gauss-Markov is the Pythagorean theorem in the same picture. Any other linear unbiased rule differs from the projection by a matrix that annihilates the model space, so its error splits into the projection error plus an orthogonal piece; the two are uncorrelated, their covariances add, and adding a covariance matrix can only make the total larger.

Finally, the leftover $\chi^{2}(\hat a)$ is the squared length of the part of $z$ perpendicular to an $M$-dimensional subspace. For Gaussian noise $z$ is a standard normal vector, whose law is rotation-invariant, so that squared length is a sum of $n-M$ independent squared standard normals: a chi-squared variable with $n-M$ degrees of freedom. The $M$ lost dimensions are the parameters that have been fitted.
:::

:::proof[The solution, its covariance, and the Gauss-Markov bound]{provenance=adapted src="rhb-2006:§31.6.1, the gradient (31.95), the solution (31.98) and the covariance (31.99), pp. 1273-1274"}
Write $W = \mathsf{N}^{-1}$, symmetric positive definite.

**Step 1: the gradient.** Expanding the quadratic form,

$$
\chi^{2}(a) \;=\; y^{\mathsf T}Wy - 2a^{\mathsf T}R^{\mathsf T}Wy + a^{\mathsf T}R^{\mathsf T}WR\,a ,
$$

where the two cross terms were combined using $W^{\mathsf T} = W$. Differentiating in $a_p$, only the last two terms contribute, and

$$
\frac{\partial\chi^{2}}{\partial a_p} \;=\; -2\bigl(R^{\mathsf T}Wy\bigr)_p + 2\bigl(R^{\mathsf T}WR\,a\bigr)_p ,
\qquad\text{that is}\qquad
\nabla\chi^{2} \;=\; -2R^{\mathsf T}W(y - Ra) .
$$

**Step 2: the normal equations and uniqueness.** Setting the gradient to zero gives $R^{\mathsf T}WR\,\hat a = R^{\mathsf T}Wy$. The matrix $A = R^{\mathsf T}WR$ is positive definite: for $v \ne 0$, $v^{\mathsf T}Av = (Rv)^{\mathsf T}W(Rv) > 0$, because $Rv \ne 0$ (rank $M$, so $R$ is injective) and $W$ is positive definite. **Both hypotheses are used here**, and each separately: rank $M$ to get $Rv\neq0$, positive definiteness of $\mathsf{N}$ to get a strictly positive value. Hence $A$ is invertible, the stationary point is unique, and since the Hessian $\partial^{2}\chi^{2}/\partial a_i\partial a_j = 2A_{ij}$ is positive definite and constant, $\chi^{2}$ is strictly convex and the stationary point is its global minimum. This gives claim 1 with $S = A^{-1}R^{\mathsf T}W$, and claim 4 is Taylor's theorem for a quadratic, exact because all third derivatives vanish.

**Step 3: unbiasedness.** $\hat a = Sy = S(Ra + \eta) = SRa + S\eta$, and

$$
SR \;=\; A^{-1}R^{\mathsf T}WR \;=\; A^{-1}A \;=\; I_M ,
$$

so $\hat a = a + S\eta$ and $\mathbb{E}[\hat a] = a$, using $\mathbb{E}[\eta] = 0$. Claim 2.

**Step 4: the covariance.** From $\hat a - a = S\eta$,

$$
V \;=\; \mathbb{E}\bigl[S\eta\,\eta^{\mathsf T}S^{\mathsf T}\bigr] \;=\; S\,\mathsf{N}\,S^{\mathsf T}
\;=\; A^{-1}R^{\mathsf T}W\,\mathsf{N}\,W R A^{-1} ,
$$

using $S^{\mathsf T} = W R A^{-1}$ ($A$ and $W$ are symmetric). Since $W\mathsf{N}W = W$, the middle collapses to $R^{\mathsf T}WR = A$, leaving $V = A^{-1}AA^{-1} = A^{-1}$. Claim 3. Note that only $\mathbb{E}[\eta] = 0$ and $\operatorname{Cov}[\eta] = \mathsf{N}$ were used in Steps 3 and 4: no normality.

**Step 5: Gauss-Markov.** Let $\tilde a = Cy$ be linear and unbiased. Unbiasedness means $\mathbb{E}[Cy] = CRa = a$ for **every** $a$, which forces

$$
CR \;=\; I_M .
$$

Put $D = C - S$. Then $DR = CR - SR = I_M - I_M = 0$ by Step 3. Now

$$
\operatorname{Cov}[\tilde a] \;=\; C\mathsf{N}C^{\mathsf T} \;=\; (S+D)\mathsf{N}(S+D)^{\mathsf T}
\;=\; S\mathsf{N}S^{\mathsf T} + S\mathsf{N}D^{\mathsf T} + D\mathsf{N}S^{\mathsf T} + D\mathsf{N}D^{\mathsf T} .
$$

The cross terms vanish: $S\mathsf{N}D^{\mathsf T} = A^{-1}R^{\mathsf T}W\mathsf{N}D^{\mathsf T} = A^{-1}R^{\mathsf T}D^{\mathsf T} = A^{-1}(DR)^{\mathsf T} = 0$, and the other is its transpose. Hence

$$
\operatorname{Cov}[\tilde a] \;=\; V + D\,\mathsf{N}\,D^{\mathsf T} ,
$$

and $D\mathsf{N}D^{\mathsf T}$ is positive semi-definite, since $u^{\mathsf T}D\mathsf{N}D^{\mathsf T}u = (D^{\mathsf T}u)^{\mathsf T}\mathsf{N}(D^{\mathsf T}u)\ge 0$. That is the claim; taking $u = e_i$ gives the statement for a single parameter and general $u$ the statement for a linear combination. Equality for all $u$ forces $D^{\mathsf T}u = 0$ for all $u$, since $\mathsf{N}$ is positive definite, hence $D = 0$ and $C = S$. $\square$
:::

:::statement[The minimised chi-squared is a goodness-of-fit statistic]{provenance=adapted src="arfken-2013:§23.7, eqs. (23.99)-(23.101) and the degrees-of-freedom rule, pp. 1170-1172"}
Assume in addition that the noise is Gaussian, $\eta \sim N(0,\mathsf{N})$, and keep $R$ of rank $M$. Then the minimised value

$$
\chi^{2}_{\min} \;=\; \chi^{2}(\hat a) \;=\; \bigl(y - R\hat a\bigr)^{\mathsf T}\mathsf{N}^{-1}\bigl(y - R\hat a\bigr)
$$

is distributed as $\chi^{2}(n-M)$, and is **independent** of $\hat a$. Hence

$$
\mathbb{E}\bigl[\chi^{2}_{\min}\bigr] = n-M ,
\qquad
\operatorname{var}\bigl[\chi^{2}_{\min}\bigr] = 2(n-M) .
$$

Arfken, Weber and Harris state the counting rule in this form: fitting $M$ parameters to $n$ points leaves $n - M$ effective degrees of freedom. A fit is judged by comparing $\chi^{2}_{\min}$ with $n-M$ and quoting the upper tail probability $\Pr\bigl(\chi^{2}(n-M) > \chi^{2}_{\min}\bigr)$; a value far above $n-M$ indicates a wrong model or understated errors, and one far below indicates overstated errors or too many parameters.

If $\mathsf{N}$ is known only up to an overall scale, $\mathsf{N} = \sigma^{2}\mathsf{W}$ with $\mathsf{W}$ known and $\sigma$ unknown, then $\hat a$ is unchanged (the scale cancels in the normal equations),

$$
\hat\sigma^{2} \;=\; \frac{\chi^{2}_{\min}\bigl[\mathsf{W}\bigr]}{\,n-M\,}
$$

is an unbiased estimator of $\sigma^{2}$, where $\chi^{2}_{\min}[\mathsf{W}]$ is the minimised form computed with $\mathsf{W}$ in place of $\mathsf{N}$, and the covariance estimate is $\hat\sigma^{2}(R^{\mathsf T}\mathsf{W}^{-1}R)^{-1}$. No goodness-of-fit test is then available, because the fit has been used to set the error scale.
:::

:::proof[Degrees of freedom]{provenance=original}
Whiten: let $\mathsf{N}^{1/2}$ be the symmetric positive definite square root of $\mathsf{N}$ (it exists by the spectral theorem, :ref[]{to=linalg.hermitian-spectral-theorem}), and set

$$
z \;=\; \mathsf{N}^{-1/2}y , \qquad B \;=\; \mathsf{N}^{-1/2}R , \qquad \zeta \;=\; \mathsf{N}^{-1/2}\eta .
$$

Then $\chi^{2}(a) = \lVert z - Ba\rVert^{2}$, $z = Ba + \zeta$, and $\zeta \sim N(0, I_n)$: the whitened noise is a standard normal vector, by the affine transformation rule for multivariate normals (:ref[]{to=prob.multivariate-normal}). The matrix $B$ still has rank $M$, since $\mathsf{N}^{-1/2}$ is invertible.

Let $P$ be the orthogonal projection of $\mathbb{R}^{n}$ onto the $M$-dimensional column space of $B$ (:ref[]{to=linalg.projections-least-squares}). The minimiser of $\lVert z - Ba\rVert^{2}$ makes $Ba$ equal to $Pz$, so

$$
\chi^{2}_{\min} \;=\; \lVert (I-P)z\rVert^{2} \;=\; \lVert (I-P)\zeta\rVert^{2} ,
$$

the second equality because $(I-P)Ba = 0$ for every $a$, $Ba$ lying in the range of $P$.

Now choose an orthonormal basis of $\mathbb{R}^{n}$ whose first $M$ vectors span the range of $B$ and whose last $n-M$ span its orthogonal complement, and let $u = Q^{\mathsf T}\zeta$ be the coordinates of $\zeta$ in that basis, $Q$ orthogonal. By the rotation invariance of the standard normal law used in :ref[]{to=stats.sampling-distributions} - orthogonal maps preserve $\lVert\cdot\rVert$ and have unit Jacobian, so the density $(2\pi)^{-n/2}e^{-\lVert u\rVert^{2}/2}$ is unchanged - the coordinates $u_1,\dots,u_n$ are again independent standard normals. In these coordinates

$$
\chi^{2}_{\min} \;=\; \sum_{k=M+1}^{n}u_k^{2} ,
\qquad
\hat a - a \;=\; (B^{\mathsf T}B)^{-1}B^{\mathsf T}\zeta \ \text{ depends only on } u_1,\dots,u_M ,
$$

the second because $B^{\mathsf T}\zeta = B^{\mathsf T}P\zeta$ ($B^{\mathsf T}(I-P) = 0$, the columns of $B$ being in the range of $P$). So $\chi^{2}_{\min}$ is a sum of $n-M$ independent squared standard normals, that is a $\chi^{2}(n-M)$ variable, and it is a function of coordinates independent of those determining $\hat a$. The mean $n-M$ and variance $2(n-M)$ are those of the chi-squared law recorded in :ref[]{to=stats.sampling-distributions}.

For the scale-only-unknown case, apply the above with $\mathsf{W}$ in place of $\mathsf{N}$: then $\chi^{2}_{\min}[\mathsf{W}]/\sigma^{2} \sim \chi^{2}(n-M)$, whose mean is $n-M$, so $\hat\sigma^{2}$ is unbiased. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$R$ of rank $M$.** Used in Step 2 to invert $A = R^{\mathsf T}\mathsf{N}^{-1}R$. If it fails, some combination of parameters is invisible to the data - fitting $a_1 + a_2 x$ and $a_3 x$ simultaneously, say - and $\chi^{2}$ has a flat valley rather than a minimum point. Near-degeneracy is the practical danger: $A$ is then ill-conditioned, and the fitted parameters are enormous and anticorrelated while the fitted *curve* is perfectly well determined. The cure is not a better inversion routine but a better basis. The singular value decomposition of :ref[]{to=linalg.svd} diagnoses it (the ratio of largest to smallest singular value of $\mathsf{N}^{-1/2}R$ is the condition number of :ref[]{to=linalg.matrix-norms-conditioning}) and supplies the minimum-norm solution when the rank really is deficient. Riley, Hobson and Bence make the same point for polynomial fitting and recommend replacing $1,x,x^{2},\dots$ by polynomials orthogonal over the data points, which makes $A$ diagonal.

**$\mathsf{N}$ positive definite and known.** Positive definiteness is used in Step 2 and in the equality case of Step 5; it fails if two data points are perfectly correlated, which is a statement that one of them is redundant. That $\mathsf{N}$ is *known* is the most often violated assumption in practice: error bars are themselves estimated. When only the scale is unknown, the last paragraph of the statement applies; when the shape is unknown too, nothing here is valid and the problem becomes one of variance estimation.

**$\mathbb{E}[\eta] = 0$.** Used in Steps 3 and 5. A systematic offset common to all points is absorbed into any parameter that can imitate it (an intercept) and biases the others; no amount of data removes it, and the quoted $V$ does not describe it.

**The $x_i$ exact.** Assumed throughout. When the abscissae carry the error instead, the roles of the coordinates are exchanged and one fits $x$ against $y$, which gives a *different* line. When both carry comparable error, :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§23.7, eq. (23.98) and Fig. 23.11, pp. 1169-1170"} minimise the sum of squared perpendicular distances instead, parametrising the line by the angle $\alpha$ it makes with the abscissa and obtaining $\tan 2\alpha = 2\sum_j x_j y_j / \sum_j (x_j^{2}-y_j^{2})$. That estimator is appropriate when the two coordinates are measured with equal precision; it is not the same as either one-sided fit.

**Normality.** Used *only* for the identification with maximum likelihood, for the Cramer-Rao statement, and for the distribution of $\chi^{2}_{\min}$. It is not used for claims 1-4 nor for Gauss-Markov. This is the practical importance of the Gauss-Markov theorem: a fit remains the best linear unbiased estimate even when the errors are not Gaussian, although its $\chi^{2}$ then has no tabulated distribution and the goodness-of-fit reading is lost.

**Linear in the parameters, not in $x$.** The basis functions may be anything - powers, sinusoids, exponentials with fixed decay rates. Fitting an exponential with an *unknown* rate is not a linear problem, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§31.6.2, pp. 1276-1277"} treat that case by Newton iteration on $\nabla\chi^{2}$, starting from a guess and solving the linear system $\sum_j (\partial^{2}\chi^{2}/\partial a_i\partial a_j)\,\delta a_j = -\partial\chi^{2}/\partial a_i$ repeatedly. Everything above then holds only approximately and locally, and they warn that $\chi^{2}$ may have many local minima, so that the quality of the initial guess decides which one is found.

**A difference in how the optimality is stated.** :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§31.6.1, p. 1273"} write that for a model linear in the parameters the least-squares estimators are unbiased and of minimum variance, whatever the probability density the measurement errors come from. The theorem proved above is the same assertion with one restriction added: minimum-variance **among estimators that are linear functions of the data**. The restriction cannot be dropped. For heavy-tailed noise a non-linear estimator can beat least squares badly - the lighthouse example of :ref[]{to=stats.maximum-likelihood} is exactly such a case, where the least-squares estimate of a location parameter is the sample mean and is useless, while the maximum-likelihood estimate is not linear in the data and is excellent. This unit follows the restricted statement, which is the one that is true without further assumptions; under normality the two coincide, because then the best linear unbiased estimator is also the best unbiased estimator by the Cramer-Rao argument of claim 4.
:::

:::method[Fitting a linear model]{provenance=original}
1. **Write the model as a basis expansion.** Choose $h_1,\dots,h_M$ with $f(x;a) = \sum_j a_j h_j(x)$. For a straight line, $h_1 = 1$ and $h_2 = x$.
2. **Build the response matrix** $R_{ij} = h_j(x_i)$, of size $n\times M$, and the noise covariance $\mathsf{N}$. For independent errors $\mathsf{N}^{-1} = \operatorname{diag}(w_1,\dots,w_n)$ with weights $w_i = 1/\sigma_i^{2}$.
3. **Form and solve the normal equations.** Compute $A = R^{\mathsf T}\mathsf{N}^{-1}R$ and $b = R^{\mathsf T}\mathsf{N}^{-1}y$, then solve $A\hat a = b$ by Cholesky factorisation (:ref[]{to=num.linear-systems-numerics}), not by forming $A^{-1}$, unless $M$ is small. For $M = 2$ the explicit $2\times2$ inverse is quicker and is used in the example.
4. **Read off the errors.** $V = A^{-1}$; the standard error on $\hat a_i$ is $\sqrt{V_{ii}}$ and the correlation coefficient of $\hat a_i$ with $\hat a_j$ is $V_{ij}/\sqrt{V_{ii}V_{jj}}$. Quote the whole matrix, not just the diagonal: the off-diagonal entries are needed by anything downstream, as in :ref[]{to=stats.error-propagation}.
5. **Decorrelate if the correlation is large.** Replacing $x$ by $x - \bar x_w$, where $\bar x_w = \sum_i w_i x_i/\sum_i w_i$ is the weighted mean abscissa, makes $A$ diagonal for a straight line and the two parameters uncorrelated. The fitted line is unchanged; only the parametrisation is.
6. **Test the fit.** Compute $\chi^{2}_{\min}$, compare with $n-M$, and quote the tail probability. Only then believe the error bars.
7. **Confidence regions.** For a joint statement about several parameters use the ellipsoid $(a-\hat a)^{\mathsf T}V^{-1}(a-\hat a) \le c$, with $c$ the upper point of a chi-squared distribution with $M$ degrees of freedom at the wanted level: $c = 1$ gives the one-parameter one-sigma interval for $M=1$, while for $M=2$ a joint $68.3\%$ region needs $c = 2.30$. :ref[]{to=stats.confidence-intervals} develops this.
:::

:::example[Planck's constant from the photoelectric effect]{provenance=original}
A caesium-coated photocathode is illuminated with six mercury lines in turn and the retarding voltage $V$ that just stops the photocurrent is measured for each. Einstein's relation predicts

$$
V \;=\; \frac{h}{e}\,\nu - \frac{\varphi}{e} ,
$$

a straight line in the frequency $\nu$ whose slope gives $h/e$ and whose intercept gives the work function. Writing $x = \nu/10^{14}\,\mathrm{Hz}$, the data are

| $x$ | $V/\mathrm{V}$ | $\sigma/\mathrm{V}$ | $w = 1/\sigma^{2}$ |
|---|---|---|---|
| $5.187$ | $0.258$ | $0.015$ | $4444.444$ |
| $5.490$ | $0.361$ | $0.020$ | $2500.000$ |
| $6.879$ | $0.951$ | $0.012$ | $6944.444$ |
| $7.404$ | $1.140$ | $0.030$ | $1111.111$ |
| $8.219$ | $1.515$ | $0.018$ | $3086.420$ |
| $8.976$ | $1.805$ | $0.025$ | $1600.000$ |

Here $M = 2$, with $h_1 = 1$ and $h_2 = x$, so $R$ has a column of ones and a column of the $x_i$, and $\mathsf{N}^{-1} = \operatorname{diag}(w_i)$.

**The normal matrix.** Its entries are weighted sums:

$$
A = R^{\mathsf T}\mathsf{N}^{-1}R = \begin{pmatrix} S_0 & S_1\\ S_1 & S_2\end{pmatrix},
\qquad
b = R^{\mathsf T}\mathsf{N}^{-1}y = \begin{pmatrix} T_0 \\ T_1 \end{pmatrix},
$$

with $S_k = \sum_i w_i x_i^{k}$ and $T_k = \sum_i w_i x_i^{k} y_i$. From the table,

$$
S_0 = 19686.420,\quad S_1 = 132504.717,\quad S_2 = 921857.121,
$$

$$
T_0 = 17483.926,\quad T_1 = 130065.071,
$$

and the determinant is

$$
\Delta = S_0S_2 - S_1^{2} = 18\,148\,066\,234 - 17\,557\,500\,103 = 5.90566\times10^{8} .
$$

**The parameters.** Inverting the $2\times2$ matrix,

$$
\hat m = \frac{S_0T_1 - S_1T_0}{\Delta} = \frac{2.43813\times10^{8}}{5.90566\times10^{8}} = 0.412846\ \mathrm{V\,per\,10^{14}\,Hz} ,
$$

$$
\hat c = \frac{S_2T_0 - S_1T_1}{\Delta} = \frac{-1.11655\times10^{9}}{5.90566\times10^{8}} = -1.890650\ \mathrm{V} .
$$

**The covariance matrix** is $V = A^{-1} = \Delta^{-1}\begin{pmatrix} S_2 & -S_1 \\ -S_1 & S_0\end{pmatrix}$, so

$$
\sigma_{\hat c} = \sqrt{S_2/\Delta} = 0.039509\ \mathrm{V},
\qquad
\sigma_{\hat m} = \sqrt{S_0/\Delta} = 0.005774 ,
$$

$$
\operatorname{Cov}[\hat c,\hat m] = -S_1/\Delta = -2.2437\times10^{-4} ,
\qquad
\rho = \frac{-S_1}{\sqrt{S_0S_2}} = -0.9836 .
$$

The two parameters are almost perfectly anticorrelated, because the data sit far from $x=0$ and a small increase in slope is compensated by a large decrease in intercept. Re-fitting in the variable $x - \bar x_w$ with $\bar x_w = S_1/S_0 = 6.7308$ makes the correlation exactly zero and the height of the line at that point is determined to $\sigma = 1/\sqrt{S_0} = 0.00713\,\mathrm{V}$ - five and a half times better than the intercept at the origin.

**Goodness of fit.** The fitted values $\hat c + \hat m x_i$ and the pulls $(y_i - \hat c - \hat m x_i)/\sigma_i$ are

$$
0.2508,\ 0.3759,\ 0.9493,\ 1.1661,\ 1.5025,\ 1.8151 ;
\qquad
0.481,\ -0.744,\ 0.140,\ -0.869,\ 0.693,\ -0.402 .
$$

Squaring and adding the pulls,

$$
\chi^{2}_{\min} = 0.2315+0.5532+0.0196+0.7547+0.4798+0.1618 = 2.2006
$$

on $n - M = 4$ degrees of freedom. The expected value is $4$ with standard deviation $\sqrt{8}=2.83$, and the upper tail is $\Pr(\chi^{2}(4) > 2.2006) = 0.699$: an unremarkable fit, with no sign that the straight line is wrong or that the error bars are mis-stated.

**The physics.** The slope is $h/e$ in volt-seconds once the $10^{14}$ is restored:

$$
\frac{h}{e} = (4.12846 \pm 0.05774)\times10^{-15}\ \mathrm{V\,s} ,
$$

$$
h = (6.6145 \pm 0.0925)\times10^{-34}\ \mathrm{J\,s} ,
$$

using $e = 1.602177\times10^{-19}\,\mathrm{C}$. The accepted value $6.62607\times10^{-34}\,\mathrm{J\,s}$ lies $0.12$ standard errors away. The intercept gives the work function $\varphi = -\hat c = 1.891 \pm 0.040\ \mathrm{eV}$, and the threshold frequency is

$$
\nu_0 = -\hat c/\hat m = 4.5796\times10^{14}\ \mathrm{Hz}
\qquad (\lambda_0 = 654.6\ \mathrm{nm}) ,
$$

whose standard error must be computed from the *full* covariance matrix, since $\nu_0$ depends on both parameters. With $\partial\nu_0/\partial \hat c = -1/\hat m$ and $\partial\nu_0/\partial\hat m = \hat c/\hat m^{2}$, first-order propagation (:ref[]{to=stats.error-propagation}) gives $\sigma_{\nu_0} = 0.0347\times10^{14}\,\mathrm{Hz}$. Had the correlation been ignored, the two terms would have added instead of largely cancelling and the error would have come out more than three times too large.

The numbers to check are $\hat m = 0.412846$, $\hat c = -1.890650$, $\chi^{2}_{\min} = 2.2006$ on $4$ degrees of freedom, and $h = 6.6145\times10^{-34}\,\mathrm{J\,s}$.
:::

:::application[Calibration, trends, and everything downstream]{provenance=original}
**Calibration curves.** Every instrument that converts a reading into a physical quantity carries a fitted calibration, and the covariance matrix of its parameters is what propagates into the uncertainty on every later measurement made with it. Quoting only the diagonal of $V$ - "slope $\pm$, intercept $\pm$" - loses the anticorrelation and, as the threshold frequency above shows, can inflate a downstream error by a large factor.

**Trends in time series.** Fitting a straight line to a record of global mean temperature, sea level or station pressure is the same calculation with $x$ the date. The subtlety is that $\mathsf{N}$ is then *not* diagonal: geophysical noise is autocorrelated, as in :ref[]{to=stats.autoregressive-models}, and treating it as white understates $\sigma_{\hat m}$ badly, sometimes by a factor of several. The machinery above handles it correctly provided the autocovariance is supplied, since nothing in the derivation required $\mathsf{N}$ to be diagonal.

**Orbit and trajectory determination.** Fitting six orbital elements to many tracking observations is linear least squares after one linearisation about a reference orbit, iterated as in the non-linear scheme. The same structure, applied recursively as data arrive rather than all at once, is the :ref[]{to=stats.kalman-filter}, in which $V$ is updated at each step instead of being computed from scratch.

**Model selection and testing.** Because $\chi^{2}_{\min}$ has a known distribution, the difference of the minimised values of two nested models is itself a test statistic: adding a parameter must reduce $\chi^{2}$ by at least about one unit to be worth anything, and the formal version of that statement is the likelihood-ratio test of :ref[]{to=stats.hypothesis-testing}. The same ellipsoids $(a-\hat a)^{\mathsf T}V^{-1}(a-\hat a) = c$ that bound confidence regions are the contours used to display parameter degeneracies in fields from cosmology to pharmacokinetics.
:::
