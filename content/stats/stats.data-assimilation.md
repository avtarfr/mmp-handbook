---
id: stats.data-assimilation
title: Optimal interpolation and variational data assimilation
kind: method
level: advanced
summary: Derives the best linear unbiased analysis $x_a = x_b + K(y-Hx_b)$ with $K = BH^{\mathsf T}(HBH^{\mathsf T}+R)^{-1}$ by completing the square in the gain, proves that it also minimises the 3D-Var cost function and that the two routes agree exactly when $B$ is invertible, and interpolates a temperature analysis from two stations, obtaining weights $0.740445$ and $-0.135366$, an analysis of $1.9490\,\mathrm{K}$ and an analysis error variance $0.425475\,\mathrm{K^2}$ against a background variance of $1$.
prereqs: [stats.kalman-filter, stats.least-squares-regression, prob.multivariate-normal, prob.stationary-processes, stats.bayesian-inference, linalg.quadratic-forms, linalg.linear-systems, stats.error-propagation]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§31.6, eq. (31.90), pp. 1271-1272: the weighted sum of squares $\\chi^2(a) = (y-f)^{T}\\mathsf{N}^{-1}(y-f)$ for data with known covariance matrix $\\mathsf{N}$, and the identity of least squares with maximum likelihood when the errors are Gaussian; §31.6.1, eqs. (31.92)-(31.99), pp. 1272-1274: the model linear in its parameters with response matrix $R_{ij} = h_j(x_i)$, the normal equations, the estimator $\\hat a = (R^{T}\\mathsf{N}^{-1}R)^{-1}R^{T}\\mathsf{N}^{-1}y$, the covariance $V = (R^{T}\\mathsf{N}^{-1}R)^{-1}$, the statement that these estimators are unbiased and of minimum variance whatever the error density, and the exactness of the quadratic expansion of $\\chi^2$ for a linear model; §31.8, Exercise 31.6, p. 1299: the scalar prototype of the argument used here, in which a linear estimator $\\hat\\mu = \\sum_i a_ix_i$ is required to be unbiased, $\\sum_i a_i = C$, and is then made as efficient as possible by minimising $\\sum_i a_i^2$"
    pages: "1271-1274, 1299"
    role: the least-squares identity behind the variational form (the 3D-Var cost function is RHB's $\\chi^2$ for a two-block design matrix, and its minimiser and curvature are RHB's estimator and covariance), and the unbiased-then-minimum-variance argument of Exercise 31.6, of which the matrix derivation here is the generalisation
  - work: grimmett-stirzaker-2020
    loc: "§7.9 Prediction and conditional expectation, Definition (7.9.5) of the minimum-mean-squared-error predictor, Theorem (7.9.9) on the existence and almost-sure uniqueness of the closest element of a closed linear space, the Projection theorem (7.9.14) with the orthogonality condition $\\mathbb{E}((Y-M)Z)=0$ for all $Z$ in the space, and Theorem (7.9.17) identifying the best predictor with $\\mathbb{E}(Y\\mid X)$, pp. 388-391; §4.9, Theorem (4.9.6) and Definition (4.9.7), pp. 132-133, on affine images of multivariate normal vectors"
    pages: "132-133, 388-391"
    role: the geometric reading of the analysis as an orthogonal projection, which is what makes the analysis error uncorrelated with the innovation, and the normal-theory facts that turn the analysis into a conditional mean when the errors are Gaussian
---

:::note[The problem this solves]{provenance=original}
A weather forecast starts from a state of the atmosphere: wind, temperature and humidity on a grid with far more unknowns than there are measurements. Observations are sparse, irregularly placed, of mixed type, and noisy. The only reason the problem is solvable at all is that a previous forecast, valid now, supplies a first guess everywhere. **Data assimilation** is the business of correcting that guess with the observations, and reporting the uncertainty of the result.

Two formulations are in use, and they look quite different. **Optimal interpolation** writes the correction as a matrix times the observed discrepancies and chooses the matrix to minimise the error variance. **Three-dimensional variational assimilation** (3D-Var) writes down a cost function measuring disagreement with the guess and with the observations, and minimises it. This unit derives the first, derives the second, and shows that under the stated hypotheses they produce the same analysis and the same error covariance. The difference is computational, not statistical: one inverts a matrix of the size of the observation vector, the other descends a function of the size of the state vector, and in operational practice the sizes differ by several orders of magnitude.

The update step of :ref[]{to=stats.kalman-filter} is the same calculation. There the prior covariance was the forecast covariance $P_k^{f}$ produced by the filter's own recursion; here it is a prescribed **background** covariance $B$, because a state of dimension $10^{8}$-$10^{9}$, depending on the model resolution, makes the recursion impossible to run.
:::

:::definition[Background, observations and the analysis]{provenance=original}
Let the unknown **true state** be a fixed (non-random) vector $x \in \mathbb{R}^{n}$. Two sources of information about it are given.

- A **background** (or first guess) $x_b \in \mathbb{R}^{n}$, with **background error** $e_b = x_b - x$ satisfying
  $$
  \mathbb{E}[e_b] = 0 , \qquad \operatorname{Cov}[e_b] = \mathbb{E}\bigl[e_be_b^{\mathsf T}\bigr] = B ,
  $$
  with $B$ symmetric positive semi-definite and known.
- An **observation vector** $y \in \mathbb{R}^{p}$, related to the state by a known $p\times n$ **observation operator** $H$ (linear here),
  $$
  y = Hx + \varepsilon , \qquad \mathbb{E}[\varepsilon] = 0 , \qquad \operatorname{Cov}[\varepsilon] = R ,
  $$
  with $R$ symmetric **positive definite** and known.

Assume further that the two error vectors are uncorrelated, $\mathbb{E}\bigl[e_b\varepsilon^{\mathsf T}\bigr] = 0$. No distributional assumption is made: only first and second moments enter until the final remark.

The quantities built from these are

$$
d \;=\; y - Hx_b \quad (\text{the \textbf{innovation}, or observation-minus-background}),
\qquad
S \;=\; HBH^{\mathsf T} + R \quad (\text{its covariance}) ,
$$

the second because $d = y - Hx_b = \varepsilon - He_b$, whence $\operatorname{Cov}[d] = HBH^{\mathsf T}+R$ by the covariance law of :ref[]{to=stats.error-propagation} and the assumed lack of correlation.

An **analysis** is any estimate $x_a$ of $x$ built from $x_b$ and $y$; it is **linear** if $x_a = Lx_b + Ky$ for fixed matrices $L, K$, and **unbiased** if $\mathbb{E}[x_a - x] = 0$ whatever the true $x$. Its quality is measured by the **analysis error covariance** $A = \mathbb{E}\bigl[(x_a-x)(x_a-x)^{\mathsf T}\bigr]$.
:::

:::statement[The best linear unbiased analysis]{provenance=original}
Under the hypotheses above:

**(i) Unbiasedness fixes $L$.** A linear analysis $x_a = Lx_b + Ky$ is unbiased for every true $x$ exactly when $L = I - KH$, equivalently exactly when it takes the form

$$
x_a \;=\; x_b + K\,(y - Hx_b) \;=\; x_b + Kd .
$$

The correction is thus always a matrix times the innovation; only $K$, the **gain**, is free.

**(ii) The error covariance as a function of the gain.** For such an analysis,

$$
A(K) \;=\; (I-KH)\,B\,(I-KH)^{\mathsf T} + K\,R\,K^{\mathsf T} .
$$

**(iii) The optimal gain.** With $S = HBH^{\mathsf T}+R$ (invertible, since $R$ is positive definite), put

$$
K_\ast \;=\; B\,H^{\mathsf T}S^{-1} .
$$

Then for every $K$,

$$
A(K) \;=\; A(K_\ast) + (K-K_\ast)\,S\,(K-K_\ast)^{\mathsf T} ,
\qquad
A(K_\ast) = (I - K_\ast H)B = B - BH^{\mathsf T}S^{-1}HB ,
$$

so $A(K) - A(K_\ast)$ is positive semi-definite for every $K$, and is zero only for $K = K_\ast$. The analysis $x_a = x_b + K_\ast d$ is therefore the **best linear unbiased estimate** (BLUE) of $x$: it has the smallest error variance for every component, and indeed for every linear functional $u^{\mathsf T}x$ of the state, among all linear unbiased analyses. Computing $x_a$ and $A$ from these formulas is **optimal interpolation**.

**(iv) Orthogonality.** The optimal analysis error is uncorrelated with the innovation: $\mathbb{E}\bigl[(x_a-x)\,d^{\mathsf T}\bigr] = 0$. Conversely this property determines $K_\ast$.

**(v) The information form.** If in addition $B$ is invertible, then $A = A(K_\ast)$ is invertible and

$$
A^{-1} \;=\; B^{-1} + H^{\mathsf T}R^{-1}H ,
\qquad
K_\ast \;=\; A\,H^{\mathsf T}R^{-1} .
$$
:::

:::statement[3D-Var, and its equivalence with optimal interpolation]{provenance=original}
Assume in addition that $B$ is invertible, and define the **3D-Var cost function** $J : \mathbb{R}^{n}\to\mathbb{R}$,

$$
J(x) \;=\; \tfrac12\,(x-x_b)^{\mathsf T}B^{-1}(x-x_b) \;+\; \tfrac12\,(y-Hx)^{\mathsf T}R^{-1}(y-Hx) .
$$

Then:

1. $J$ is strictly convex with Hessian $\nabla^2 J = B^{-1}+H^{\mathsf T}R^{-1}H$, constant in $x$ and positive definite, so $J$ has exactly one minimiser.
2. That minimiser is the best linear unbiased analysis of the previous statement:
   $$
   \operatorname*{arg\,min}_{x} J(x) \;=\; x_b + K_\ast(y - Hx_b) \;=\; x_a .
   $$
3. The inverse Hessian is the analysis error covariance: $\bigl(\nabla^2J\bigr)^{-1} = A$.
4. The minimum value is $J(x_a) = \tfrac12\,d^{\mathsf T}S^{-1}d$, a quadratic form in the innovation alone.

So optimal interpolation and 3D-Var are two ways of computing one object. If the errors are in addition jointly normal, both coincide with the Bayesian posterior: $x \mid y \sim N(x_a, A)$, since $-\log$ of (prior $\times$ likelihood) is $J$ up to a constant, by :ref[]{to=stats.bayesian-inference} and :ref[]{to=prob.multivariate-normal}.
:::

:::idea{provenance=original}
Three short arguments, one for each part.

*Unbiasedness.* The analysis error of $Lx_b+Ky$ contains a term $(L+KH-I)x$ in the unknown true state. Since the estimate must be unbiased for every $x$, and $x$ is not random, that term has to vanish identically, which pins $L$ down with no optimisation at all.

*Optimality.* $A(K)$ is a quadratic function of the matrix $K$ with positive-definite "second derivative" $S$. Completing the square in $K$ — exactly as one minimises $aK^2+bK+c$ — exhibits $A(K)$ as a constant matrix plus $(K-K_\ast)S(K-K_\ast)^{\mathsf T}$, and the second term is positive semi-definite and vanishes only at $K_\ast$. Because the comparison is between whole matrices, this gives optimality for every linear functional of the state at once, not merely for the trace.

*Equivalence.* Setting the gradient of $J$ to zero gives $(B^{-1}+H^{\mathsf T}R^{-1}H)x = B^{-1}x_b + H^{\mathsf T}R^{-1}y$. One algebraic identity, verified by multiplying out, says that the matrix on the left is $A^{-1}$ and that $AH^{\mathsf T}R^{-1} = K_\ast$; with it the solution rearranges into $x_b + K_\ast d$ in two lines. The same identity shows why $2J$ is Riley, Hobson and Bence's weighted $\chi^2$ for the design matrix that stacks the background on top of the observations: the factor $\tfrac12$ is a convention of the variational literature, and it is the same factor that turns their $\tfrac12\,\partial^2\chi^2/\partial a_i\partial a_j$ into our $\nabla^2 J$.
:::

:::proof[Unbiasedness, optimality, the identity, and 3D-Var]{provenance=adapted src="rhb-2006:§31.8, Exercise 31.6, p. 1299; rhb-2006:§31.6.1, eqs. (31.92)-(31.99), pp. 1272-1274"}
**(i) Unbiasedness.** Substituting $x_b = x + e_b$ and $y = Hx+\varepsilon$,

$$
x_a - x = Lx_b + Ky - x = (L + KH - I)\,x + L\,e_b + K\,\varepsilon .
$$

Taking expectations and using $\mathbb{E}[e_b] = \mathbb{E}[\varepsilon] = 0$ leaves $\mathbb{E}[x_a-x] = (L+KH-I)x$. This vanishes for **every** $x \in \mathbb{R}^{n}$ exactly when the matrix $L+KH-I$ is zero, since a matrix annihilating all of $\mathbb{R}^{n}$ is the zero matrix. Hence $L = I-KH$ and $x_a = (I-KH)x_b + Ky = x_b + K(y-Hx_b)$. This is the matrix version of the step in Riley, Hobson and Bence's Exercise 31.6 where unbiasedness of a linear estimator is imposed before efficiency is optimised. Note that the hypothesis that $x$ is a fixed unknown vector, not a random one, is what forces the condition to hold for all $x$.

**(ii) The error covariance.** With $L = I-KH$ the display above gives

$$
x_a - x = (I-KH)\,e_b + K\,\varepsilon .
$$

Since $\mathbb{E}\bigl[e_b\varepsilon^{\mathsf T}\bigr] = 0$, the cross terms in $\mathbb{E}\bigl[(x_a-x)(x_a-x)^{\mathsf T}\bigr]$ vanish and

$$
A(K) = (I-KH)\,\mathbb{E}\bigl[e_be_b^{\mathsf T}\bigr]\,(I-KH)^{\mathsf T} + K\,\mathbb{E}\bigl[\varepsilon\varepsilon^{\mathsf T}\bigr]\,K^{\mathsf T}
= (I-KH)B(I-KH)^{\mathsf T} + KRK^{\mathsf T} .
$$

It is the lack of correlation between background and observation errors, and nothing else, that is used here.

**(iii) Completing the square.** $S = HBH^{\mathsf T}+R$ is positive definite: for $u\ne0$, $u^{\mathsf T}Su = (H^{\mathsf T}u)^{\mathsf T}B(H^{\mathsf T}u) + u^{\mathsf T}Ru > 0$, the first term being $\ge 0$ because $B$ is positive semi-definite and the second $>0$ because $R$ is positive definite (:ref[]{to=linalg.quadratic-forms}). So $S^{-1}$ exists and is positive definite, and $K_\ast = BH^{\mathsf T}S^{-1}$ is defined.

Expand (ii):

$$
A(K) = B - KHB - BH^{\mathsf T}K^{\mathsf T} + K\bigl(HBH^{\mathsf T}+R\bigr)K^{\mathsf T}
     = B - KHB - BH^{\mathsf T}K^{\mathsf T} + KSK^{\mathsf T} .
$$

Separately, since $SK_\ast^{\mathsf T} = SS^{-1}HB = HB$ and $K_\ast S K_\ast^{\mathsf T} = BH^{\mathsf T}S^{-1}HB$,

$$
(K-K_\ast)S(K-K_\ast)^{\mathsf T} = KSK^{\mathsf T} - KHB - BH^{\mathsf T}K^{\mathsf T} + BH^{\mathsf T}S^{-1}HB .
$$

Subtracting, every $K$-dependent term cancels:

$$
A(K) - (K-K_\ast)S(K-K_\ast)^{\mathsf T} = B - BH^{\mathsf T}S^{-1}HB ,
$$

a matrix independent of $K$. Putting $K = K_\ast$ identifies it as $A(K_\ast) = B - K_\ast HB = (I-K_\ast H)B$, and the stated decomposition follows.

For any $u \in \mathbb{R}^{n}$, $u^{\mathsf T}\bigl(A(K)-A(K_\ast)\bigr)u = v^{\mathsf T}Sv \ge 0$ with $v = (K-K_\ast)^{\mathsf T}u$, so the difference is positive semi-definite; taking $u$ to be a coordinate vector gives the componentwise variance statement. If the difference is the zero matrix then $v^{\mathsf T}Sv = 0$ for every $u$, and positive definiteness of $S$ forces $v = 0$ for every $u$, that is $K = K_\ast$.

**(iv) Orthogonality.** From (ii), $x_a - x = (I-KH)e_b + K\varepsilon$ and $d = \varepsilon - He_b$, so

$$
\mathbb{E}\bigl[(x_a-x)d^{\mathsf T}\bigr]
= -(I-KH)BH^{\mathsf T} + KR
= -BH^{\mathsf T} + K\bigl(HBH^{\mathsf T}+R\bigr)
= KS - BH^{\mathsf T} ,
$$

using $\mathbb{E}[e_b\varepsilon^{\mathsf T}]=0$ twice. This vanishes precisely when $K = BH^{\mathsf T}S^{-1} = K_\ast$. Geometrically this is the Projection theorem (7.9.14) of Grimmett and Stirzaker, applied not to $x$ itself — which is a fixed vector, not a member of any $L^2$ space — but to the random part of the problem: the correction $Kd$ is the orthogonal projection of the background error $-e_b$ onto the span of the components of $d$, since $x_a - x = (x_b - x) + Kd = e_b + Kd$ is exactly minus the residual $(-e_b) - Kd$ of that projection. Vanishing of the display above is, up to sign, the orthogonality condition $\mathbb{E}\bigl[\bigl((-e_b) - Kd\bigr)d^{\mathsf T}\bigr] = 0$ of that theorem, and it says that the analysis error is uncorrelated with every linear function of the data: $d$ carries all the information the data hold about $e_b$.

**(v) The information identity.** Assume $B$ invertible. First note

$$
K_\ast HBH^{\mathsf T} = BH^{\mathsf T}S^{-1}\bigl(S-R\bigr) = BH^{\mathsf T} - K_\ast R ,
\qquad\text{so}\qquad
BH^{\mathsf T} - K_\ast HBH^{\mathsf T} = K_\ast R . \tag{$\ast$}
$$

Then

$$
A\bigl(B^{-1}+H^{\mathsf T}R^{-1}H\bigr)
= (I-K_\ast H)B\bigl(B^{-1}+H^{\mathsf T}R^{-1}H\bigr)
= (I-K_\ast H) + \bigl(BH^{\mathsf T}-K_\ast HBH^{\mathsf T}\bigr)R^{-1}H ,
$$

and by $(\ast)$ the last bracket is $K_\ast R$, so the whole expression is $I - K_\ast H + K_\ast RR^{-1}H = I$. Hence $A$ is invertible with $A^{-1} = B^{-1}+H^{\mathsf T}R^{-1}H$. The same identity gives

$$
AH^{\mathsf T}R^{-1} = (I-K_\ast H)BH^{\mathsf T}R^{-1} = \bigl(BH^{\mathsf T}-K_\ast HBH^{\mathsf T}\bigr)R^{-1} = K_\ast RR^{-1} = K_\ast .
$$

**(vi) 3D-Var.** Differentiating the two quadratic forms,

$$
\nabla J(x) = B^{-1}(x-x_b) - H^{\mathsf T}R^{-1}(y-Hx) ,
\qquad
\nabla^2 J = B^{-1}+H^{\mathsf T}R^{-1}H ,
$$

the Hessian being constant because $J$ is quadratic. It is positive definite ($B^{-1}$ is, and $H^{\mathsf T}R^{-1}H$ is positive semi-definite), so $J$ is strictly convex and its unique stationary point is its unique minimum. Setting $\nabla J = 0$,

$$
\bigl(B^{-1}+H^{\mathsf T}R^{-1}H\bigr)x = B^{-1}x_b + H^{\mathsf T}R^{-1}y .
$$

By (v) the matrix on the left is $A^{-1}$. Adding and subtracting $H^{\mathsf T}R^{-1}Hx_b$ on the right,

$$
x = A\Bigl(\bigl(B^{-1}+H^{\mathsf T}R^{-1}H\bigr)x_b + H^{\mathsf T}R^{-1}(y-Hx_b)\Bigr)
  = x_b + AH^{\mathsf T}R^{-1}d
  = x_b + K_\ast d = x_a ,
$$

using (v) once more for $AH^{\mathsf T}R^{-1}=K_\ast$. Claim 3 is the first sentence of (v). For claim 4, write $x_a - x_b = K_\ast d$ and $y - Hx_a = d - HK_\ast d = (I - HK_\ast)d$. Since $HK_\ast = HBH^{\mathsf T}S^{-1} = (S-R)S^{-1} = I - RS^{-1}$, this is $RS^{-1}d$, so

$$
2J(x_a) = d^{\mathsf T}K_\ast^{\mathsf T}B^{-1}K_\ast d + d^{\mathsf T}S^{-1}R\,R^{-1}R\,S^{-1}d
= d^{\mathsf T}S^{-1}\bigl(HBH^{\mathsf T}\bigr)S^{-1}d + d^{\mathsf T}S^{-1}RS^{-1}d
= d^{\mathsf T}S^{-1}d ,
$$

where $K_\ast^{\mathsf T}B^{-1}K_\ast = S^{-1}HB\,B^{-1}BH^{\mathsf T}S^{-1} = S^{-1}HBH^{\mathsf T}S^{-1}$ and the two terms recombine through $HBH^{\mathsf T}+R = S$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **Uncorrelated background and observation errors** is used once, in part (ii), and it is the hypothesis most often violated in practice. If $\mathbb{E}[e_b\varepsilon^{\mathsf T}] = C \ne 0$ — for instance when an observation has already been used to make the background, as happens if the same radiosonde enters two successive analyses — then $A(K)$ acquires the cross terms $(I-KH)CK^{\mathsf T} + KC^{\mathsf T}(I-KH)^{\mathsf T}$, and repeating the derivative of part (ii) gives the optimal gain
$$
K_\ast^{C} = \bigl(BH^{\mathsf T} - C\bigr)\bigl(HBH^{\mathsf T} + R - HC - C^{\mathsf T}H^{\mathsf T}\bigr)^{-1} .
$$
The minus signs are forced by our conventions, and are worth tracing: with $e_b = x_b - x$ and $y = Hx + \varepsilon$ the innovation is $d = \varepsilon - He_b$, so
$$
\operatorname{Cov}[d] = HBH^{\mathsf T} + R - HC - C^{\mathsf T}H^{\mathsf T} , \qquad
\mathbb{E}\bigl[e_b d^{\mathsf T}\bigr] = C - BH^{\mathsf T} ,
$$
and $K_\ast^{C} = -\mathbb{E}[e_bd^{\mathsf T}]\operatorname{Cov}[d]^{-1}$ exactly as in the uncorrelated case; writing a plus in the denominator would not even give a covariance. A scalar check, $H = 1$, $B = 2$, $R = 0.5$, $C = 0.6$: the analysis variance is $A(K) = 2(1-K)^2 + \tfrac12 K^2 + 1.2\,K(1-K)$, minimised at $K = \tfrac{14}{13} = 1.076923$ with $A = \tfrac{32}{65} = 0.492308$, and the formula above returns $1.4/1.3 = \tfrac{14}{13}$ exactly. The plus-sign version would give $K = 2.6/3.7 = 0.702703$, where $A = 0.674361$ — worse by $37\%$.

Using the uncorrelated $K_\ast$ anyway leaves the analysis unbiased, but its true error no longer matches the reported $A$. The cross terms above give the discrepancy exactly:
$$
A_{\text{true}} - A \;=\; (I-K_\ast H)\,C\,K_\ast^{\mathsf T} + K_\ast C^{\mathsf T}(I-K_\ast H)^{\mathsf T} .
$$
A matrix of this form is in general **indefinite**, whatever the sign of $C$, so the reported covariance can err in either direction, and in different directions in different components. Take $n = p = 2$, $H = I$ and
$$
B = \begin{pmatrix}5&4\\4&5\end{pmatrix} , \qquad
R = \begin{pmatrix}4&-3\\-3&5\end{pmatrix} , \qquad
C = \begin{pmatrix}2&\tfrac12\\\tfrac12&\tfrac14\end{pmatrix} ,
$$
all three positive definite, and the joint error covariance $\left(\begin{smallmatrix}B&C\\C^{\mathsf T}&R\end{smallmatrix}\right)$ positive definite as well (its eigenvalues are $0.108328$, $1.938988$, $7.323769$, $9.628915$). Then $S = \left(\begin{smallmatrix}9&1\\1&10\end{smallmatrix}\right)$, the reported variances are $\operatorname{diag}A = (91/89,\,100/89) = (1.022472,\,1.123596)$ and the true ones are $(1.948933,\,0.660144)$: the first component is understated, the second overstated, although $C$ is positive definite. Replacing $C$ by $-C$ keeps the joint covariance positive definite — it is congruent to the original by $\operatorname{diag}(I,-I)$ — and simply exchanges the two directions of error.

Only in the scalar case is there a clean rule, and only for $H > 0$. There $0 < K_\ast H < 1$, the discrepancy is $2(1-K_\ast H)K_\ast C$, and it carries the sign of $C$: positive correlation — the radiosonde case, where the shared observation has pushed background and observation errors the same way — makes the true error *exceed* the reported $A$, so that the system is overconfident, which is worse than being wrong, while negative correlation leaves the reported $A$ merely pessimistic. The check above, $H=1$, $B=2$, $R=\tfrac12$, $C=0.6$, is of this kind: the reported $A = (1-K_\ast)B = 0.4$ against a true $0.592$. Even here the sign of $H$ matters: $H = -1$, $B = 2$, $R = \tfrac12$, $C = 0.4$ gives $K_\ast = -0.8$, a reported $A = 0.4$ and a true $0.272$. Overconfidence is the danger to watch for, but which way the error goes has to be computed, not inferred from the sign of $C$.
- **Unbiased errors.** Part (i) needs $\mathbb{E}[e_b] = 0$. A systematic model bias $\beta = \mathbb{E}[e_b] \ne 0$ propagates straight through: the analysis inherits the bias $(I-KH)\beta$, and no choice of gain removes it, because the derivation of (i) then yields $\mathbb{E}[x_a-x] = (I-KH)\beta$ for every admissible $K$. Bias must be estimated and removed separately; this is why operational systems carry a bias-correction stage ahead of the analysis.
- **$R$ positive definite** is used to invert $S$ in parts (iii)-(iv), and again as $R^{-1}$ itself from part (v) onwards, in the cost function and throughout (vi). $B$ may be singular — a background known exactly along some direction is allowed — and parts (i)-(iv) survive. Part (v) and the whole of 3D-Var need $B^{-1}$, so the variational form is strictly less general than optimal interpolation. This matters: ensemble-based background covariances have rank below $n$ and are singular, which is why they are used through the gain formula, or regularised before $B^{-1}$ is formed.
- **Linearity of $H$.** With a non-linear observation operator $h$ the cost function $J(x) = \tfrac12(x-x_b)^{\mathsf T}B^{-1}(x-x_b)+\tfrac12(y-h(x))^{\mathsf T}R^{-1}(y-h(x))$ is still minimised numerically, but it need not be convex and the minimiser is no longer a linear function of $y$. Linearising $h$ about the background and iterating (incremental 3D-Var) recovers a sequence of problems of the kind treated here; it converges to a stationary point of $J$, not necessarily the global one.
- **No normality is needed** for the BLUE statement, exactly as in the Gauss-Markov theorem of :ref[]{to=stats.least-squares-regression}: only the first two moments enter. Normality buys one extra thing, stated in the last line of the 3D-Var statement, namely that $x_a$ is the conditional mean and therefore the best estimate of *any* form, linear or not.
- **Which costs less.** Optimal interpolation inverts $S$, of size $p\times p$; 3D-Var minimises over $\mathbb{R}^{n}$, usually by a conjugate-gradient method whose cost per iteration is one multiplication by $B$ and one by $H$. For a modern forecasting system $n \sim 10^{8}$-$10^{9}$ and $p \sim 10^{7}$, so neither matrix can be formed and both routes are run in a reduced space; the variational form is preferred because $B$ can be applied as a sequence of filters without ever being stored.
:::

:::method[Optimal interpolation at a point]{provenance=original}
The classical use is to analyse one grid point at a time from nearby observations, which keeps every matrix small. Let the analysis point be $P$ and let $p$ observations be selected within some radius of it.

1. **Specify the background error statistics.** Write $B_{ij} = \sigma_b(i)\,\sigma_b(j)\,\rho(r_{ij})$, with $\sigma_b$ the background error standard deviation and $\rho$ a correlation function of the separation $r_{ij}$, decreasing from $\rho(0)=1$. The choice of $\rho$ must be a valid correlation function, i.e. non-negative definite (:ref[]{to=prob.stationary-processes}); the Gaussian $\rho(r) = e^{-r^2/(2L^2)}$ is the usual default, $L$ being the correlation length.
2. **Form $S = HBH^{\mathsf T}+R$**, the $p\times p$ matrix of background error covariances between the observation locations, plus the observation error covariance $R$ (diagonal if instrument errors are independent).
3. **Form $b = $ the column of background error covariances between $P$ and the observation locations**, that is the row of $BH^{\mathsf T}$ belonging to $P$.
4. **Solve $S\,w = b$** for the weight vector $w$, by Cholesky factorisation (:ref[]{to=linalg.linear-systems}); do not invert $S$.
5. **Analyse.** $x_a(P) = x_b(P) + w^{\mathsf T}d$ with $d$ the vector of innovations at the observation locations.
6. **Report the uncertainty.** The analysis error variance at $P$ is $\sigma_b(P)^2 - w^{\mathsf T}b$, the diagonal entry of $A = B - BH^{\mathsf T}S^{-1}HB$. It is never larger than $\sigma_b(P)^2$, and the reduction $w^{\mathsf T}b$ measures what the observations were worth.
7. **Check.** Verify $2J(x_a) = d^{\mathsf T}S^{-1}d$ against its expectation $p$: the innovations have covariance $S$, so $\mathbb{E}\bigl[d^{\mathsf T}S^{-1}d\bigr] = \operatorname{tr}\bigl(S^{-1}S\bigr) = p$. A value far above $p$ means $B$ or $R$ is too small, far below means they are too large.
:::

:::example[A temperature analysis from two stations]{provenance=original}
**Set-up.** Three points lie on a line: the analysis point $P$ at $0$, station $1$ at $60\,\mathrm{km}$ and station $2$ at $150\,\mathrm{km}$. We analyse a temperature anomaly. The background field is uniform, $x_b = 1.00\,\mathrm{K}$ at all three points, with background error standard deviation $\sigma_b = 1\,\mathrm{K}$ everywhere and correlation

$$
\rho(r) = \exp\bigl(-r^2/(2L^2)\bigr) , \qquad L = 100\,\mathrm{km} .
$$

Both stations measure with independent error of standard deviation $0.5\,\mathrm{K}$, so $R = 0.25\,I_2$ in $\mathrm{K^2}$ and $H$ simply picks out the two station values. The readings are $y_1 = 2.30\,\mathrm{K}$ and $y_2 = 1.10\,\mathrm{K}$.

**Step 1: the covariances.** The three separations needed are $60$, $150$ and $90$ km:

$$
\rho_{P1} = e^{-0.18} = 0.835270 , \qquad
\rho_{P2} = e^{-1.125} = 0.324652 , \qquad
\rho_{12} = e^{-0.405} = 0.666977 .
$$

Hence, in $\mathrm{K^2}$,

$$
b = \begin{pmatrix}0.835270\\ 0.324652\end{pmatrix} ,
\qquad
S = HBH^{\mathsf T}+R = \begin{pmatrix}1 & 0.666977\\ 0.666977 & 1\end{pmatrix} + \begin{pmatrix}0.25&0\\0&0.25\end{pmatrix}
= \begin{pmatrix}1.25 & 0.666977\\ 0.666977 & 1.25\end{pmatrix} .
$$

**Step 2: the weights.** $\det S = 1.25^2 - 0.666977^2 = 1.5625 - 0.444858 = 1.117642$, so solving $Sw = b$,

$$
w_1 = \frac{1.25\,(0.835270) - 0.666977\,(0.324652)}{1.117642} = \frac{0.827552}{1.117642} = 0.740445 ,
$$

$$
w_2 = \frac{1.25\,(0.324652) - 0.666977\,(0.835270)}{1.117642} = \frac{-0.151291}{1.117642} = -0.135366 .
$$

**The second weight is negative.** This is not an error and it is the most instructive number here. Station $1$ alone would receive weight $\rho_{P1}/1.25 = 0.668216$; it is also strongly correlated with station $2$, and through station $1$ the scheme already *predicts* an innovation of $\rho_{12} \times$ (station 1's innovation) at station $2$. Since $\rho_{P1}\rho_{12} = 0.557106$ exceeds $\rho_{P2} = 0.324652$, that prediction overshoots what station $2$ is worth at $P$, and the optimal scheme subtracts the excess. Observations are never weighted in isolation: $S^{-1}$ decorrelates them first. This is the same screening effect that makes the far station's residual informative mainly as a correction to the near one.

**Step 3: the analysis.** The innovations are $d_1 = 2.30-1.00 = 1.30\,\mathrm{K}$ and $d_2 = 1.10-1.00 = 0.10\,\mathrm{K}$, so

$$
x_a(P) = 1.00 + (0.740445)(1.30) + (-0.135366)(0.10) = 1.00 + 0.9625785 - 0.0135366 = 1.949042\,\mathrm{K} .
$$

**Step 4: the error bar.** By step 6 of the method,

$$
A_{PP} = \sigma_b^2 - w^{\mathsf T}b = 1 - \bigl[(0.740445)(0.835270) + (-0.135366)(0.324652)\bigr] = 1 - 0.574525 = 0.425475\,\mathrm{K^2} ,
$$

that is $\pm 0.652285\,\mathrm{K}$, against the background's $\pm 1\,\mathrm{K}$. Station $1$ alone would have given $1 - (0.835270)^2/1.25 = 0.441859\,\mathrm{K^2}$: the second station, negative weight and all, is worth a further reduction of only $0.016384\,\mathrm{K^2}$, because almost everything it knows about $P$ is already known through station $1$.

**Step 5: the same answer from 3D-Var.** Take the state to be the three-vector $(x_P, x_1, x_2)$ with the full $3\times3$ background covariance built from the same $\rho$ (its eigenvalues are $0.074127$, $0.685117$, $2.240756$, all positive, so $B^{-1}$ exists) and $H = \begin{pmatrix}0&1&0\\0&0&1\end{pmatrix}$. Minimising

$$
J(x) = \tfrac12 (x-x_b)^{\mathsf T}B^{-1}(x-x_b) + \tfrac12 (y-Hx)^{\mathsf T}R^{-1}(y-Hx)
$$

numerically from the background as starting point returned

$$
x_a = (1.949042,\; 1.951431,\; 1.265990) , \qquad J(x_a) = 0.873082 ,
$$

whose first component is the analysis of Step 3, to all digits shown; the largest discrepancy between the whole minimiser and $x_b + K_\ast d$ computed from the gain formula was $1.1\times10^{-15}$. The inverse Hessian had diagonal $(0.425475,\,0.180098,\,0.180098)$, the first entry reproducing Step 4 and agreeing with $(I-K_\ast H)B$ to $1.7\times10^{-16}$.

**Step 6: the consistency check.** Independently, $\tfrac12 d^{\mathsf T}S^{-1}d = \tfrac12\bigl[(1.30)(1.394277)+(0.10)(-0.663960)\bigr] = 0.873082$, matching the minimum value above, as claim 4 of the 3D-Var statement requires. Its expectation is $\tfrac12 p = 1$, and the observed $0.873$ is unremarkable for a $\tfrac12\chi^2(2)$ variable, so the assumed $B$ and $R$ are not contradicted by these two innovations.
:::

:::application[Where this is done]{provenance=original}
**Numerical weather prediction.** Every operational forecast centre runs an analysis of this type every few hours. Optimal interpolation was the standard method from the 1970s until the 1990s, when 3D-Var replaced it, chiefly because the variational form handles observations that are non-local functions of the state — satellite radiances, which are weighted vertical integrals, and radar reflectivities — simply by putting the right $H$ into $J$, whereas optimal interpolation needs the covariance between the analysis point and each such integral. The 4D-Var now used in several centres is the same cost function with the model's time evolution added as a constraint over an assimilation window, so that observations are compared with the forecast at their own observation times.

**Reanalysis.** The long gridded records used in climate research are produced by running a fixed forecast model and a fixed assimilation scheme over decades of archived observations. The point of freezing the scheme is that trends in the analysis should then reflect trends in the atmosphere rather than changes in the method, though changes in the observing network still leak in through $K_\ast$, which depends on which observations exist.

**Ocean, land surface and atmospheric composition.** The same algebra analyses sea-surface temperature from satellite and buoy data, soil moisture, and ozone fields. In each case $B$ carries the physics: its correlation length sets how far a single observation is allowed to spread, and anisotropy in $B$ is how flow-dependent structure is injected into an otherwise static scheme.

**Back to filtering.** Cycling the analysis - use the forecast model to propagate $x_a$ forward to the next analysis time, call the result the new background, repeat - is exactly the loop of :ref[]{to=stats.kalman-filter}, with the one difference that $B$ is prescribed rather than propagated as $P_k^{f} = F_kP_{k-1}F_k^{\mathsf T}+Q_k$. Ensemble Kalman filters close that gap by estimating $B$ from the spread of a small ensemble of forecasts, and so sit between the two units: the gain formula of this unit, with a $B$ obtained from the recursion of the previous one.
:::
