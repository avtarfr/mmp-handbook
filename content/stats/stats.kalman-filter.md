---
id: stats.kalman-filter
title: The Kalman filter
kind: method
level: advanced
summary: Sets up the linear Gaussian state-space model, proves by induction on the Gaussian conditioning formula that the filtering distribution stays normal and obeys a forecast step and an update step with gain $K_k = P_k^{f}H_k^{\mathsf T}S_k^{-1}$, identifies the update with a Bayesian posterior and with weighted least squares, and runs the recursion on a four-point scalar record where the forecast variance falls $1.875 \to 1.0380 \to 1.0023 \to 1.00015$ towards the fixed point $1$ and the final estimate $-0.000376 \pm 0.7071$ reproduces the exact nine-dimensional Gaussian conditional.
prereqs: [prob.multivariate-normal, stats.least-squares-regression, prob.conditional-expectation, prob.markov-chains, stats.bayesian-inference, stats.autoregressive-models, linalg.quadratic-forms, linalg.linear-systems]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§4.9 Multivariate normal distribution, Definition (4.9.4), Theorem (4.9.5), Theorem (4.9.6) (an affine image $Y = XD$ of a normal vector is normal with covariance $D'VD$) and Definition (4.9.7) (every linear combination is univariate normal), pp. 132-133, with Exercises (4.9.3), (4.9.7) and (4.9.9), pp. 134-135, which supply the standard trivariate conditional mean and variance; §4.6, Example (4.6.7), p. 119, the bivariate conditional law $N(\\rho x, 1-\\rho^2)$; §7.9 Prediction and conditional expectation, Definition (7.9.5) of the minimum-mean-squared-error predictor, Theorem (7.9.9) on existence and almost-sure uniqueness of the closest element of a closed linear space, the Projection theorem (7.9.14) with its orthogonality condition $\\mathbb{E}((Y-M)Z) = 0$ for all $Z$ in the space, and Theorem (7.9.17) that the best predictor of $Y$ given $X$ is $\\mathbb{E}(Y \\mid X)$, pp. 388-391; §9.2 Linear prediction, Theorem (9.2.1) with the normal equations (9.2.3) for the best linear predictor of a stationary sequence, and Example (9.2.5), the autoregressive scheme with $c(m) = \\alpha^{|m|}/(1-\\alpha^2)$ whose best linear $k$-step predictor is $\\alpha^k Y_r$ with mean squared error $(1-\\alpha^{2k})/(1-\\alpha^2)$, pp. 436-437"
    pages: "119, 132-135, 388-391, 436-437"
    role: the multivariate normal facts the recursion rests on (affine images stay normal, the conditional law of one block given another is normal), the projection-theorem account of best prediction that replaces them when normality is dropped, and the stationary linear-prediction problem of which the scalar example here is the filtered version
  - work: rhb-2006
    loc: "§31.6, eq. (31.90) and §31.6.1, eqs. (31.92)-(31.99), pp. 1271-1274: the weighted sum of squares $\\chi^2(a) = (y-Ra)^{T}\\mathsf{N}^{-1}(y-Ra)$ for a model linear in its parameters with response matrix $R$ and known noise covariance $\\mathsf{N}$, the normal equations, the estimator $\\hat a = (R^{T}\\mathsf{N}^{-1}R)^{-1}R^{T}\\mathsf{N}^{-1}y$, the covariance $V = (R^{T}\\mathsf{N}^{-1}R)^{-1}$, and the identification of $V^{-1}$ with half the Hessian of $\\chi^2$ and with the Fisher matrix in the Gaussian case; §31.5.5 The Bayesian interpretation, eqs. (31.81)-(31.83), pp. 1264-1265: posterior proportional to likelihood times prior, with the evidence as the normalising factor"
    pages: "1264-1265, 1271-1274"
    role: the least-squares reading of the update step (the information form is RHB's $V^{-1} = R^{T}\\mathsf{N}^{-1}R$ for the two-block design matrix) and the Bayesian reading of it as a posterior
---

:::note[What this unit is for]{provenance=original}
A satellite is tracked, a reactor's core temperature is inferred from thermocouples, a tide gauge is read every hour: in each case a system evolves according to a model that is only approximately right, and is measured by instruments that are only approximately accurate. Neither the model nor the data alone answers the question "where is the system now?".

The Kalman filter answers it, and answers it *recursively*. At every step it carries one mean vector and one covariance matrix, and the arrival of a new observation updates both in closed form. Nothing earlier than the current summary is ever revisited, so the cost per observation does not grow with the length of the record. The reason this is possible is a single structural fact: within the linear Gaussian model, the conditional distribution of the state given all data so far is normal, and a normal distribution is exactly described by a mean and a covariance.

Everything here is a consequence of two results already proved in :ref[]{to=prob.multivariate-normal}: an affine image of a normal vector is normal, and the conditional law of one block of a normal vector given another is normal with a mean affine in the observed block and a covariance that does not depend on it. The first gives the forecast step, the second gives the update step, and induction does the rest.
:::

:::definition[The linear Gaussian state-space model]{provenance=original}
Fix integers $n, p \ge 1$. A **linear Gaussian state-space model** consists of an unobserved **state** sequence $x_0, x_1, x_2, \dots$ in $\mathbb{R}^{n}$ and an observed sequence $y_1, y_2, \dots$ in $\mathbb{R}^{p}$ satisfying, for $k \ge 1$,

$$
x_k \;=\; F_k\,x_{k-1} + w_k ,
\qquad
y_k \;=\; H_k\,x_k + v_k ,
$$

where

- $F_k$ (the **transition matrix**, $n \times n$) and $H_k$ (the **observation matrix**, $p \times n$) are known and non-random;
- the **process noise** $w_k \sim N(0, Q_k)$ on $\mathbb{R}^{n}$ and the **observation noise** $v_k \sim N(0, R_k)$ on $\mathbb{R}^{p}$ have known covariances, with each $R_k$ symmetric **positive definite** and each $Q_k$ symmetric positive semi-definite;
- the initial state is $x_0 \sim N(m_0, P_0)$ with $m_0$ and $P_0$ known, $P_0$ symmetric positive semi-definite;
- the whole collection $x_0, w_1, w_2, \dots, v_1, v_2, \dots$ is **independent**.

Normal vectors are understood in the sense of :ref[]{to=prob.multivariate-normal}, the singular case included: $N(\mu, V)$ with $V$ singular means a vector every linear combination of whose components is univariate normal, with mean vector $\mu$ and covariance matrix $V$. This is why $Q_k$ and $P_0$ are allowed to be semi-definite — a noiseless component of the dynamics is a legitimate model — while $R_k$ must be definite, because an observation with no error at all would determine a linear combination of the state exactly and is excluded here.

Write $Y_k = (y_1, \dots, y_k)$ for the data up to time $k$, with $Y_0$ empty. The three distributions one wants are

$$
\underbrace{p(x_k \mid Y_{k-1})}_{\text{forecast}}, \qquad
\underbrace{p(x_k \mid Y_{k})}_{\text{filtering}}, \qquad
\underbrace{p(y_k \mid Y_{k-1})}_{\text{predictive}} .
$$

Computing the filtering distribution sequentially in $k$ is **filtering**; computing $p(x_j \mid Y_k)$ for $j < k$ is **smoothing** and is not treated here.

The state sequence is a Markov chain in the sense of :ref[]{to=prob.markov-chains} with a continuous state space: $x_k$ depends on the past only through $x_{k-1}$. The pair (hidden Markov state, noisy observation) is the structure the filter exploits.
:::

:::statement[The Kalman filter]{provenance=original}
In the model above, for every $k \ge 1$:

**(i) The filtering distribution is normal.** Conditional on $Y_k = (y_1,\dots,y_k)$,

$$
x_k \;\sim\; N\bigl(m_k,\, P_k\bigr) ,
$$

where $m_k$ depends on the data and $P_k$ does **not**: $P_k$ is a deterministic function of $F_1,\dots,F_k$, $H_1,\dots,H_k$, $Q_1,\dots,Q_k$, $R_1,\dots,R_k$ and $P_0$ alone.

**(ii) The recursion.** Starting from $m_0, P_0$, the pairs $(m_k, P_k)$ are generated by two steps.

*Forecast (time update).*

$$
m_k^{f} = F_k\,m_{k-1} , \qquad
P_k^{f} = F_k\,P_{k-1}\,F_k^{\mathsf T} + Q_k .
$$

Conditional on $Y_{k-1}$, $x_k \sim N(m_k^{f}, P_k^{f})$.

*Update (measurement update).* Form the **innovation** and its covariance,

$$
d_k = y_k - H_k\,m_k^{f} , \qquad
S_k = H_k\,P_k^{f}H_k^{\mathsf T} + R_k ,
$$

then the **Kalman gain**

$$
K_k \;=\; P_k^{f}\,H_k^{\mathsf T}\,S_k^{-1} ,
$$

and set

$$
m_k \;=\; m_k^{f} + K_k\,d_k ,
\qquad
P_k \;=\; \bigl(I - K_kH_k\bigr)P_k^{f} .
$$

The matrix $S_k$ is invertible, so $K_k$ is well defined.

**(iii) The predictive distribution.** Conditional on $Y_{k-1}$, $y_k \sim N(H_km_k^{f}, S_k)$. Hence the innovations $d_1, d_2, \dots$ are independent, with $d_k \sim N(0, S_k)$ unconditionally, and the log-likelihood of the whole record is

$$
\log p(y_1,\dots,y_N) \;=\; -\tfrac12\sum_{k=1}^{N}\Bigl( d_k^{\mathsf T}S_k^{-1}d_k + \log\det S_k + p\log 2\pi \Bigr) .
$$

**(iv) Equivalent forms of the update.** If in addition $P_k^{f}$ is invertible, then $P_k$ is invertible and

$$
P_k^{-1} \;=\; \bigl(P_k^{f}\bigr)^{-1} + H_k^{\mathsf T}R_k^{-1}H_k ,
\qquad
K_k \;=\; P_k\,H_k^{\mathsf T}R_k^{-1} ,
$$

the **information form**: precisions add. Whether or not $P_k^{f}$ is invertible,

$$
P_k \;=\; \bigl(I-K_kH_k\bigr)P_k^{f}\bigl(I-K_kH_k\bigr)^{\mathsf T} + K_kR_kK_k^{\mathsf T} ,
$$

the **Joseph form**, which is manifestly symmetric and positive semi-definite.
:::

:::idea{provenance=original}
Only two facts about normal vectors are needed, and the filter is the alternation of them.

Affine images of normal vectors are normal. So if the state at time $k-1$ is normal given the data so far, then $x_k = F_kx_{k-1} + w_k$ — an affine function of that state and of fresh noise independent of everything already seen — is normal too, and its mean and covariance follow from the usual rules. That is the forecast step; no new idea is involved.

Conditioning a normal vector on part of itself gives a normal vector. So if, given the data so far, the pair $(x_k, y_k)$ is *jointly* normal, then conditioning on the newly observed $y_k$ leaves $x_k$ normal, with mean shifted by $\operatorname{cov}(x_k,y_k)\operatorname{var}(y_k)^{-1}$ times the surprise $y_k - \mathbb{E}(y_k)$ and with covariance reduced by the Schur complement, which is where $K_k$ comes from. That is the update step.

The only thing to watch is that both steps must be carried out *conditionally on the earlier data*, and that this is legitimate: conditioning on $Y_{k-1}$ and then on $y_k$ is the same as conditioning on $Y_k$ at one stroke. The induction then runs, and the reason the covariance recursion decouples from the data is that the conditional covariance in the Gaussian conditioning formula does not involve the value conditioned on.
:::

:::proof[The filter, by induction on $k$]{provenance=adapted src="grimmett-stirzaker-2020:§4.9, Theorem (4.9.6) and Definition (4.9.7), p. 133, and Exercises (4.9.7) and (4.9.9), pp. 134-135"}
Throughout, "normal" includes the singular case, in the linear-combination sense of Definition (4.9.7) of Grimmett and Stirzaker, as in :ref[]{to=prob.multivariate-normal}.

**Step 0: the induction hypothesis.** Let $\mathcal{H}_k$ be the statement: conditional on $Y_k = (y_1,\dots,y_k)$, the state $x_k$ is $N(m_k, P_k)$, with $P_k$ non-random. For $k=0$ this is the assumption $x_0 \sim N(m_0,P_0)$, since $Y_0$ is empty. Assume $\mathcal{H}_{k-1}$ and fix an observed value $Y_{k-1} = \eta$.

**Step 1: the new noises are untouched by the old data.** Write $\mathcal{G}_{k-1}$ for the $\sigma$-field generated by $x_0, w_1,\dots,w_{k-1}, v_1,\dots,v_{k-1}$. By the model equations every $x_j$ with $j \le k-1$ and every $y_j$ with $j \le k-1$ is a function of these variables, so both $x_{k-1}$ and $Y_{k-1}$ are $\mathcal{G}_{k-1}$-measurable. The independence assumption says that the pair $(w_k, v_k)$ is independent of $\mathcal{G}_{k-1}$. Hence, conditionally on $Y_{k-1}=\eta$:

- $x_{k-1} \sim N(m_{k-1}, P_{k-1})$, by $\mathcal{H}_{k-1}$ (here $m_{k-1}$ is the number obtained from the observed $\eta$);
- $w_k \sim N(0,Q_k)$ and $v_k \sim N(0,R_k)$, with the same laws as unconditionally;
- $x_{k-1}$, $w_k$ and $v_k$ are mutually independent.

Only the independence hypothesis of the model is used here; without it the conditional law of $w_k$ would depend on $\eta$ and nothing below would survive.

**Step 2: the forecast.** Conditionally on $Y_{k-1}=\eta$, the vector $(x_{k-1}, w_k, v_k)$ is normal with block-diagonal covariance $\operatorname{diag}(P_{k-1}, Q_k, R_k)$: each block is normal and the three are independent, so every linear combination of all the components is a sum of three independent univariate normals and is therefore univariate normal. Now

$$
\begin{pmatrix} x_k \\ y_k \end{pmatrix}
=
\begin{pmatrix} F_k & I & 0 \\ H_kF_k & H_k & I \end{pmatrix}
\begin{pmatrix} x_{k-1} \\ w_k \\ v_k\end{pmatrix}
$$

is an affine (here linear) image of it, substituting $y_k = H_k(F_kx_{k-1}+w_k) + v_k$. By Theorem (4.9.6) of Grimmett and Stirzaker in the form stated in :ref[]{to=prob.multivariate-normal}, the pair $(x_k,y_k)$ is jointly normal conditionally on $Y_{k-1}=\eta$. Its moments come from linearity of expectation and the covariance law $V \mapsto AVA^{\mathsf T}$:

$$
\mathbb{E}(x_k \mid Y_{k-1}) = F_km_{k-1} =: m_k^{f} ,
\qquad
\operatorname{var}(x_k\mid Y_{k-1}) = F_kP_{k-1}F_k^{\mathsf T} + Q_k =: P_k^{f} ,
$$

the cross-term vanishing because $x_{k-1}$ and $w_k$ are conditionally independent. Likewise

$$
\mathbb{E}(y_k\mid Y_{k-1}) = H_km_k^{f} ,
\qquad
\operatorname{var}(y_k\mid Y_{k-1}) = H_kP_k^{f}H_k^{\mathsf T} + R_k = S_k ,
$$

$$
\operatorname{cov}(x_k, y_k \mid Y_{k-1}) = \operatorname{cov}\bigl(x_k,\, H_kx_k + v_k\bigr) = P_k^{f}H_k^{\mathsf T} ,
$$

again because $v_k$ is conditionally independent of $x_k$. This proves the forecast step and part (iii) of the statement, the predictive law being the second block of a jointly normal pair and hence normal by the marginal rule.

**Step 3: $S_k$ is invertible.** For $u \in \mathbb{R}^{p}$ with $u \ne 0$,

$$
u^{\mathsf T}S_ku \;=\; \bigl(H_k^{\mathsf T}u\bigr)^{\mathsf T}P_k^{f}\bigl(H_k^{\mathsf T}u\bigr) + u^{\mathsf T}R_ku \;>\; 0 ,
$$

the first term being $\ge 0$ because $P_k^{f} = F_kP_{k-1}F_k^{\mathsf T}+Q_k$ is positive semi-definite as a sum of two such, and the second being $>0$ because $R_k$ is positive definite. So $S_k$ is positive definite, hence invertible (:ref[]{to=linalg.quadratic-forms}). This is the one place the hypothesis $R_k \succ 0$ is used.

**Step 4: the update.** Conditioning in stages is legitimate: for any integrable $g$, the tower property of :ref[]{to=prob.conditional-expectation} applied inside the conditional law gives $\mathbb{E}(g(x_k) \mid Y_{k-1}, y_k) = \mathbb{E}(g(x_k)\mid Y_k)$, since $Y_k$ is exactly the pair $(Y_{k-1},y_k)$. So the conditional law of $x_k$ given $Y_k$ may be computed by conditioning the jointly normal pair of Step 2 on its second block.

Apply the conditional formula of :ref[]{to=prob.multivariate-normal}, statement (c), with $V_{11} = P_k^{f}$, $V_{12} = P_k^{f}H_k^{\mathsf T}$, $V_{22} = S_k$. It gives a normal law with

$$
\text{mean} = m_k^{f} + P_k^{f}H_k^{\mathsf T}S_k^{-1}\bigl(y_k - H_km_k^{f}\bigr) = m_k^{f} + K_kd_k ,
$$

$$
\text{covariance} = P_k^{f} - P_k^{f}H_k^{\mathsf T}S_k^{-1}H_kP_k^{f} = P_k^{f} - K_kH_kP_k^{f} = (I-K_kH_k)P_k^{f} .
$$

The covariance is the Schur complement and does not contain $y_k$; since $P_{k-1}$ was non-random by $\mathcal{H}_{k-1}$, so are $P_k^{f}$, $S_k$, $K_k$ and $P_k$. This establishes $\mathcal{H}_k$ and completes the induction.

**Step 5: independence of the innovations.** By Step 2, $d_k = y_k - H_km_k^{f}$ has conditional law $N(0,S_k)$ given $Y_{k-1}$, and $S_k$ is non-random. The conditional law therefore does not depend on $Y_{k-1}$, so $d_k$ is independent of $Y_{k-1}$ with unconditional law $N(0,S_k)$. Since $d_1,\dots,d_{k-1}$ are functions of $Y_{k-1}$, the whole sequence is independent. The likelihood identity is then the factorisation $p(y_1,\dots,y_N) = \prod_k p(y_k\mid Y_{k-1})$ with each factor the $N(H_km_k^{f},S_k)$ density evaluated at $y_k$, whose logarithm is $-\tfrac12(d_k^{\mathsf T}S_k^{-1}d_k + \log\det S_k + p\log2\pi)$.

**Step 6: the Joseph form.** Expand, abbreviating $K = K_k$, $H = H_k$, $P^{f} = P_k^{f}$, $R = R_k$, $S = S_k$:

$$
(I-KH)P^{f}(I-KH)^{\mathsf T} + KRK^{\mathsf T}
= P^{f} - KHP^{f} - P^{f}H^{\mathsf T}K^{\mathsf T} + K\bigl(HP^{f}H^{\mathsf T}+R\bigr)K^{\mathsf T} .
$$

The last bracket is $S$, and $KSK^{\mathsf T} = P^{f}H^{\mathsf T}S^{-1}SS^{-1}HP^{f} = P^{f}H^{\mathsf T}S^{-1}HP^{f} = KHP^{f}$, a symmetric matrix; hence also $P^{f}H^{\mathsf T}K^{\mathsf T} = (KHP^{f})^{\mathsf T} = KHP^{f}$. The right-hand side collapses to $P^{f} - KHP^{f} = (I-KH)P^{f} = P_k$.

**Step 7: the information form.** Suppose $P^{f}$ is invertible. First,

$$
KHP^{f}H^{\mathsf T} = P^{f}H^{\mathsf T}S^{-1}\bigl(S - R\bigr) = P^{f}H^{\mathsf T} - KR ,
\qquad\text{so}\qquad
P^{f}H^{\mathsf T} - KHP^{f}H^{\mathsf T} = KR .
$$

Now multiply out, using this identity at the marked step:

$$
(I-KH)P^{f}\Bigl(\bigl(P^{f}\bigr)^{-1} + H^{\mathsf T}R^{-1}H\Bigr)
= (I-KH) + \bigl(P^{f}H^{\mathsf T} - KHP^{f}H^{\mathsf T}\bigr)R^{-1}H
\overset{(\ast)}{=} I - KH + KRR^{-1}H = I .
$$

So $P_k = (I-KH)P^{f}$ is invertible with inverse $(P^{f})^{-1} + H^{\mathsf T}R^{-1}H$. Finally

$$
P_kH^{\mathsf T}R^{-1} = (I-KH)P^{f}H^{\mathsf T}R^{-1} = \bigl(P^{f}H^{\mathsf T} - KHP^{f}H^{\mathsf T}\bigr)R^{-1} = KRR^{-1} = K ,
$$

by the same identity. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **Linearity of the dynamics and of the observation operator** is used in Step 2, and only there: it is what makes $(x_k,y_k)$ an affine image of a normal vector. Replace $H_k x_k$ by a non-linear $h(x_k)$ and the pair is no longer jointly normal; the filtering distribution is then generally not normal and is not determined by two moments. The standard repairs — linearising $h$ about the forecast (the extended filter) or propagating a sample (ensemble and sigma-point filters) — are approximations, not identities.
- **Gaussianity** is used only to go from "the conditional mean and covariance are these" to "the conditional *distribution* is this". Drop it and keep the first and second moments, and the recursion still computes something meaningful: $m_k$ remains the best *linear* unbiased estimate of $x_k$ from $Y_k$, by the Projection theorem (7.9.14) of Grimmett and Stirzaker quoted in :ref[]{to=prob.conditional-expectation}, because the orthogonality condition $\mathbb{E}\bigl((x_k-m_k)d_j^{\mathsf T}\bigr) = 0$ holds for $j \le k$ by construction. What is lost is that it is the best predictor of any kind: for a non-normal law the conditional mean is a non-linear function of the data and beats every linear rule.
- **Independence of the noises from each other and from the past** is Step 1. If $\operatorname{cov}(w_k,v_k) = C_k \ne 0$ — common when the "observation" is a derived quantity contaminated by the same error as the forecast — then $\operatorname{cov}(x_k,y_k\mid Y_{k-1}) = P_k^{f}H_k^{\mathsf T} + C_k$ and the gain acquires that extra term. Using the stated formula anyway produces a $P_k$ that understates the true error.
- **$R_k$ positive definite** is Step 3, and nothing else. A perfect observation, $R_k = 0$, makes $S_k$ singular whenever $H_kP_k^{f}H_k^{\mathsf T}$ is, and the conditional law degenerates onto an affine subspace. $Q_k$ and $P_0$, by contrast, may be singular, which is why the model is stated with them only semi-definite.
- **Known $F_k,H_k,Q_k,R_k$.** In practice $Q$ and $R$ are not known. Part (iii) is the escape: the log-likelihood of the record is available as a by-product of the filter, so the covariances can be estimated by maximising it, which is the method of :ref[]{to=stats.maximum-likelihood} applied to a dependent sample.
- **Numerical caution.** The form $P_k = (I-K_kH_k)P_k^{f}$ is the cheapest but is not symmetric as written, and rounding can make it indefinite after many steps. The Joseph form costs more and keeps symmetry and positivity, because it is a sum of two expressions of the form $MVM^{\mathsf T}$ with $V$ positive semi-definite; square-root (Cholesky) implementations go further and propagate a factor of $P_k$ instead of $P_k$ itself (:ref[]{to=linalg.linear-systems}).
:::

:::remark[Three readings of the update step]{provenance=adapted src="rhb-2006:§31.6.1, eqs. (31.95)-(31.99), pp. 1273-1274; rhb-2006:§31.5.5, eqs. (31.81)-(31.83), pp. 1264-1265"}
The same two formulas can be reached from three directions, and it is worth seeing that they agree.

**As a conditional law.** The route taken above.

**As a Bayesian posterior.** Treat the forecast $N(m_k^{f},P_k^{f})$ as the prior for $x_k$ and $y_k = H_kx_k+v_k$ as the likelihood. Posterior $\propto$ prior $\times$ likelihood (:ref[]{to=stats.bayesian-inference}) gives an exponent

$$
-\tfrac12\Bigl[(x-m_k^{f})^{\mathsf T}(P_k^{f})^{-1}(x-m_k^{f}) + (y_k-H_kx)^{\mathsf T}R_k^{-1}(y_k-H_kx)\Bigr] ,
$$

a quadratic in $x$ whose matrix is $(P_k^{f})^{-1}+H_k^{\mathsf T}R_k^{-1}H_k$ — the information form of part (iv). The scalar normal-normal conjugacy recorded in :ref[]{to=stats.bayesian-inference}, "precisions add and the mean is the precision-weighted average", is the case $n=p=1$, $H=1$.

**As weighted least squares.** Regard the forecast as an extra block of data. In the notation of :ref[]{to=stats.least-squares-regression}, take the stacked observation vector, design (response) matrix and noise covariance

$$
z = \begin{pmatrix} m_k^{f} \\ y_k\end{pmatrix}, \qquad
R_{\text{des}} = \begin{pmatrix} I \\ H_k \end{pmatrix}, \qquad
\mathsf{N} = \begin{pmatrix} P_k^{f} & 0 \\ 0 & R_k\end{pmatrix} ,
$$

and estimate the parameter vector $x_k$. Riley, Hobson and Bence's normal equations give the estimator $(R_{\text{des}}^{\mathsf T}\mathsf{N}^{-1}R_{\text{des}})^{-1}R_{\text{des}}^{\mathsf T}\mathsf{N}^{-1}z$ with covariance $(R_{\text{des}}^{\mathsf T}\mathsf{N}^{-1}R_{\text{des}})^{-1}$; here

$$
R_{\text{des}}^{\mathsf T}\mathsf{N}^{-1}R_{\text{des}} = (P_k^{f})^{-1}+H_k^{\mathsf T}R_k^{-1}H_k , \qquad
R_{\text{des}}^{\mathsf T}\mathsf{N}^{-1}z = (P_k^{f})^{-1}m_k^{f} + H_k^{\mathsf T}R_k^{-1}y_k ,
$$

which is again the information form. So $m_k$ is a least-squares estimate and $P_k$ is the least-squares covariance matrix, and by the Gauss-Markov theorem of that unit it is the best linear unbiased combination of forecast and observation. This reading is the one the next unit, :ref[]{to=stats.data-assimilation}, develops.
:::

:::method[Running the filter]{provenance=original}
1. **Write the model.** Choose the state $x$ so that the dynamics are linear and the observations are a linear function of it. Fix $F_k, H_k, Q_k, R_k$ and the prior $m_0, P_0$. A deliberately inflated $P_0$ costs little: its influence decays.
2. **Forecast.** $m^{f} \leftarrow F_km_{k-1}$ and $P^{f} \leftarrow F_kP_{k-1}F_k^{\mathsf T}+Q_k$.
3. **Innovation.** $d \leftarrow y_k - H_km^{f}$ and $S \leftarrow H_kP^{f}H_k^{\mathsf T}+R_k$.
4. **Gain.** Solve $S\,K^{\mathsf T} = H_kP^{f}$ for $K^{\mathsf T}$ by Cholesky factorisation of $S$ rather than forming $S^{-1}$ (:ref[]{to=linalg.linear-systems}); $S$ is positive definite, so the factorisation exists. Cost $O(p^3 + np^2)$ per step, independent of $k$.
5. **Update.** $m_k \leftarrow m^{f}+Kd$ and $P_k \leftarrow (I-KH_k)P^{f}$, or the Joseph form if the record is long.
6. **Monitor.** Accumulate $d^{\mathsf T}S^{-1}d$ and $\log\det S$ for the likelihood of part (iii). The standardised innovations should look like independent standard normal variables; if $d^{\mathsf T}S^{-1}d$ is persistently larger than $p$, the assumed $Q$ or $R$ is too small or the model is wrong, and the test of :ref[]{to=stats.hypothesis-testing} on $\sum_k d_k^{\mathsf T}S_k^{-1}d_k \sim \chi^2(Np)$ makes this quantitative.
7. **If the model is time-invariant**, iterate step 2-5 covariances alone until $P^{f}$ stops changing, and use the limiting gain throughout; see the example.
:::

:::example[A scalar red-noise record: four steps, by hand and by brute force]{provenance=original}
**The model.** A quantity follows the AR(1) scheme of :ref[]{to=stats.autoregressive-models} and is measured with independent error:

$$
x_k = \tfrac12 x_{k-1} + w_k , \quad w_k \sim N(0,\tfrac78) ,
\qquad
y_k = x_k + v_k , \quad v_k \sim N(0,1) ,
$$

so $n=p=1$, $F=\tfrac12$, $H=1$, $Q=\tfrac78$, $R=1$. The prior is $x_0 \sim N(0,4)$: deliberately vague, four times the observation variance. The four observations are

$$
y_1 = 1.2, \quad y_2 = 0.4, \quad y_3 = -0.6, \quad y_4 = 0.1 .
$$

**Step 1: the fixed point first.** For a time-invariant scalar model the forecast variance obeys $P^{f} \mapsto F^2\bigl(P^{f} - (P^{f})^2/(P^{f}+R)\bigr)+Q$, whose fixed point solves

$$
\bigl(P^{f}\bigr)^2 + P^{f}\bigl(R - F^2R - Q\bigr) - QR = 0 .
$$

With $R=1$, $F^2 = \tfrac14$ and $Q = \tfrac78$ the coefficient of $P^{f}$ is $1-\tfrac14-\tfrac78 = -\tfrac18$ and the constant term is $-\tfrac78$, so

$$
\bigl(P^{f}\bigr)^2 - \tfrac18P^{f} - \tfrac78 = 0
\quad\Longrightarrow\quad
P^{f}_{\infty} = 1 ,
$$

the other root $-\tfrac78$ being negative and so inadmissible for a variance.

The limiting gain and filtered variance are then $K_\infty = 1/(1+1) = \tfrac12$ and $P_\infty = (1-\tfrac12)\cdot 1 = \tfrac12$. Consistency check of the fixed point: $F^2P_\infty + Q = \tfrac14\cdot\tfrac12+\tfrac78 = \tfrac18+\tfrac78 = 1 = P^{f}_\infty$.

**Step 2: the four steps, in exact arithmetic.** With $m_0=0$, $P_0=4$:

| $k$ | $m_k^{f}$ | $P_k^{f}$ | $S_k$ | $K_k$ | $d_k$ | $m_k$ | $P_k$ |
|---|---|---|---|---|---|---|---|
| 1 | $0$ | $\tfrac{15}{8}=1.875$ | $\tfrac{23}{8}$ | $\tfrac{15}{23}=0.652174$ | $1.2$ | $\tfrac{18}{23}=0.782609$ | $0.652174$ |
| 2 | $0.391304$ | $\tfrac{191}{184}=1.038043$ | $\tfrac{375}{184}$ | $\tfrac{191}{375}=0.509333$ | $0.008696$ | $0.395733$ | $0.509333$ |
| 3 | $0.197867$ | $\tfrac{3007}{3000}=1.002333$ | $\tfrac{6007}{3000}$ | $\tfrac{3007}{6007}=0.500583$ | $-0.797867$ | $-0.201532$ | $0.500583$ |
| 4 | $-0.100766$ | $\tfrac{48063}{48056}=1.000146$ | $\tfrac{96119}{48056}$ | $\tfrac{48063}{96119}=0.500036$ | $0.200766$ | $-0.000376$ | $0.500036$ |

One line in full, to show the arithmetic. At $k=2$: $m_2^{f} = \tfrac12\cdot\tfrac{18}{23} = \tfrac{9}{23} = 0.391304$ and $P_2^{f} = \tfrac14\cdot\tfrac{15}{23}+\tfrac78 = \tfrac{15}{92}+\tfrac78 = \tfrac{30+161}{184} = \tfrac{191}{184}$. Then $S_2 = \tfrac{191}{184}+1 = \tfrac{375}{184}$, $K_2 = \tfrac{191}{375}$, $d_2 = 0.4 - \tfrac{9}{23} = \tfrac{1}{115} = 0.008696$, and $m_2 = \tfrac{9}{23}+\tfrac{191}{375}\cdot\tfrac{1}{115} = \tfrac{742}{1875} = 0.395733$, $P_2 = \bigl(1-\tfrac{191}{375}\bigr)\tfrac{191}{184} = \tfrac{191}{375}$. (With $R=1$ one always has $P_k = K_k$ here, since $P_k = P_k^{f}R/(P_k^{f}+R)$.)

**Step 3: how fast the variance converges.** The departures from the fixed point are

$$
P_k^{f}-1 : \quad 0.875,\ \ 0.0380435,\ \ 0.00233333,\ \ 0.000145663 ,
$$

with successive ratios $0.04348$, $0.06133$, $0.06243$, approaching $F^2(1-K_\infty)^2 = \tfrac14\cdot\tfrac14 = \tfrac{1}{16} = 0.0625$. Three observations have already wiped out the vague prior: by $k=3$ the variance is within $0.2\%$ of its limit.

**Step 4: the answer, and an independent check.** The filtered estimate after four observations is

$$
\boxed{\,x_4 \mid Y_4 \;\sim\; N\bigl(-0.000376,\; 0.500036\bigr)\,}, \qquad
\text{i.e. } x_4 = -0.0004 \pm 0.7071 .
$$

As a check that owes nothing to the recursion, note that $(x_0,x_1,\dots,x_4,y_1,\dots,y_4)$ is one nine-dimensional normal vector: it is the image of the nine independent variables $(x_0,w_1,\dots,w_4,v_1,\dots,v_4)$ under an explicit $9\times 9$ matrix $M$, so its covariance is $M\operatorname{diag}(4,\tfrac78,\tfrac78,\tfrac78,\tfrac78,1,1,1,1)M^{\mathsf T}$. Conditioning the $x_4$ component on the four $y$ components by the single Schur-complement formula of :ref[]{to=prob.multivariate-normal} — one $4\times4$ inversion, no recursion — was carried out in exact rational arithmetic and gave

$$
\text{mean} = -\tfrac{361}{961190} = -0.00037558 , \qquad
\text{variance} = \tfrac{48063}{96119} = 0.50003641 ,
$$

the same rationals the table produces. The point of the filter is that the direct route needs a $k \times k$ inversion that grows with the record, while the recursion needs one $1\times1$ division per step.

**Reading the numbers.** The data are noisy ($R=1$) and the signal is modestly persistent ($F=\tfrac12$), so the filter settles on trusting each new observation exactly half as much as it trusts its own forecast, and halves the variance from $1$ to $\tfrac12$ at each update. The final estimate is near zero although the last observation was $+0.1$: the previous value was estimated at $-0.20$, the forecast from it was $-0.10$, and the innovation $+0.20$ was only half believed.
:::

:::application[Where the recursion earns its keep]{provenance=original}
**Navigation and tracking.** The original use. The state is position, velocity and attitude; $F$ encodes the equations of motion over one time step, $Q$ the unmodelled accelerations, and the observations are ranges, Doppler shifts or inertial readings. Every satellite navigation receiver runs a filter of this kind, and the reported accuracy is the diagonal of $P_k$.

**Estimating a trend as it happens.** A trend plus red noise is a two-component state, $x_k = (\text{level},\text{slope})$, with $F = \begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$. The filter then produces an estimate of the current level and slope from all data so far, with uncertainties, and does not need to be refitted when a new point arrives. This is the recursive counterpart of :ref[]{to=stats.least-squares-regression}, and the two agree when the model is static ($F=I$, $Q=0$).

**Calibration and fault detection.** Part (iii) turns the filter into a test. The standardised innovations are independent standard normals when the model is right, so a run of same-signed innovations, or a $d_k^{\mathsf T}S_k^{-1}d_k$ far above $p$, is evidence of a drifting instrument or a wrong $F$. Monitoring the innovations is cheaper and more sensitive than monitoring the state estimate itself.

**Geophysical and climate analysis.** When the state is a discretised field with $n$ in the millions, $P_k$ cannot be stored, let alone propagated, and the exact recursion is replaced by approximations that keep its structure: the gain is built from a prescribed or ensemble-estimated covariance. That is the subject of :ref[]{to=stats.data-assimilation}, where the forecast covariance $P_k^{f}$ becomes the prescribed background covariance $B$ and the update step becomes optimal interpolation.
:::
