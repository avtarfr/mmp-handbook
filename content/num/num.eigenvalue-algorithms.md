---
id: num.eigenvalue-algorithms
title: Computing eigenvalues
kind: method
level: core
summary: The three iterations every practical eigenvalue computation is built from - power iteration, whose error falls by the ratio of the two largest eigenvalues at each step; inverse iteration with a shift, which turns that ratio into a quantity the user controls and becomes cubically convergent when the shift is the Rayleigh quotient; and the QR algorithm, which is power iteration run on a whole nested family of subspaces at once - with their convergence rates, their costs and a residual bracket that says when to stop.
prereqs: [linalg.hermitian-spectral-theorem, linalg.eigenvalues-eigenvectors, linalg.gram-schmidt, linalg.quadratic-forms, linalg.matrix-norms-conditioning, num.linear-systems-numerics, num.floating-point-errors]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§6.4, Finding a Diagonalizing Transformation, p. 314: the observation that numerical diagonalization proceeds by successive approximation, because explicit formulas for the roots of high-degree secular equations do not exist; the sketch of the Jacobi rotation method, the remark that it has been supplanted by more efficient but less transparent methods, and the footnote citing a configuration-interaction computation on a matrix of dimension above 10^9. Spectral decomposition, pp. 315-316: f(H) = sum |c_mu> f(lambda_mu) <c_mu| and H^{-1}c_mu = c_mu/lambda_mu. Positive definite and singular operators, p. 317: the expectation value of a positive definite operator is at least its smallest eigenvalue, and a zero eigenvalue signals singularity. Exercise 6.4.1, p. 317: eigenvalues, trace and determinant are unaltered by a similarity transformation. Exercise 6.4.5, p. 318: A^{-1} has the same eigenvectors as A, with eigenvalues 1/lambda_i. Exercise 6.4.9, p. 318: the Jacobi rotation that annihilates a_ij, with tan 2theta = 2a_ij/(a_jj - a_ii), and the reduction of the off-diagonal sum of squares by 2a_ij^2"
    pages: "313-318"
    role: why eigenvalue methods are iterative and what the state of the art achieves; the inverse and the shifted inverse as functions of the matrix with the same eigenvectors; similarity invariance, which is what makes the QR iteration legitimate; the Jacobi method as the predecessor of the QR algorithm
  - work: rhb-2006
    loc: "§8.13, pp. 273-274: the worked result that if Ax = lambda x for a non-singular A then A^{-1}x = x/lambda, so the inverse has the same eigenvectors with reciprocal eigenvalues; and the normalisation convention x-dagger x = 1 for eigenvectors"
    pages: "273-274"
    role: the reciprocal-eigenvalue fact underlying inverse iteration, and the normalisation of eigenvectors
  - work: kreyszig-1978
    loc: "§9.2, Thm 9.2-1, p. 465: the spectrum of a bounded self-adjoint operator lies in [m, M] with m and M the infimum and supremum of (Tx, x) over unit vectors; Thm 9.2-2, p. 466: ||T|| = max(|m|, |M|). Problem 8, p. 469: the quotient q(x) = (Tx, x)/(x, x) is called the Rayleigh quotient, and the spectrum lies between its infimum and supremum. Problem 9, p. 469: for a Hermitian matrix with eigenvalues lambda_1 >= ... >= lambda_n, lambda_1 = max q(x) and lambda_n = min q(x), with the intermediate eigenvalues obtained by restricting to the orthogonal complement of the earlier eigenvectors. §5.2, Problem 4, p. 313: Gershgorin's theorem, that every eigenvalue lambda of C = (c_jk) satisfies |c_jj - lambda| <= sum_{k != j} |c_jk| for some j"
    pages: "313, 465-469"
    role: the Rayleigh quotient and the fact that it is bounded by the extreme eigenvalues of a self-adjoint operator; Gershgorin's theorem as the cheap way to locate the spectrum before choosing a shift
  - work: stakgold-holst-2011
    loc: "§6.5, Eigenvalue Estimation Based on Spectral Theory, pp. 401-402: for a positive compact symmetric operator K with orthonormal eigenbasis, a unit trial element z is given the mass distribution |(z, e_n)|^2 on the lambda axis, with mean m = (Kz, z) and variance sigma^2 = ||Kz - mz||^2 (6.5.17) and (6.5.19); the Rayleigh bound m <= lambda_1 (6.5.20); and Theorem 6.5.5, that the closed interval [m - sigma, m + sigma] contains an eigenvalue, proved by observing that otherwise every mass point would lie further than sigma from the mean. Exercise 6.5.2, p. 406: for a nonnegative symmetric Hilbert-Schmidt K and a trial function f_0 with Kf_0 nonzero, the moments a_k = (f_i, f_{k-i}) satisfy a_k > 0 and the quotients a_{k+1}/a_k increase monotonically to lambda_1 provided f_0 is not orthogonal to the first eigenfunction"
    pages: "401-402, 406"
    role: the residual bracket used here as a stopping criterion, with its mass-distribution proof; the power iteration in its operator form, with the monotone convergence of the moment quotients to the largest eigenvalue
  - work: hassani-2013
    loc: "§6.2, Eqs. (6.5)-(6.8) and Theorem 6.2.5, pp. 173-174: lambda is an eigenvalue exactly when A - lambda*1 fails to be invertible, that is when det(A - lambda*1) = 0; this determinant is the characteristic polynomial, its roots are the eigenvalues, and every operator on a finite-dimensional complex space therefore has at least one eigenvalue"
    pages: "173-174"
    role: the identification of the eigenvalues with the roots of a degree-n polynomial, which is the reason no finite algorithm can produce them
---

:::note[What it means]{provenance=adapted src="hassani-2013:§6.2, Eqs. (6.5)-(6.7) and Thm 6.2.5, pp. 173-174; arfken-2013:§6.4, Finding a Diagonalizing Transformation, p. 314"}
The eigenvalues of an $n\times n$ matrix are the roots of its characteristic polynomial, a polynomial of degree $n$ :cite[]{work=hassani-2013 loc="Eq. (6.7), p. 173"}. From the fifth degree onwards there is no formula in radicals for the roots of a general polynomial, so there is no finite sequence of arithmetic operations and root extractions that produces the eigenvalues of a general matrix. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§6.4, p. 314"} draw the practical conclusion: numerical diagonalization proceeds by successive approximation, and it has to.

Every method in use is therefore an iteration, and essentially all of them are built from one idea: multiply a vector by a matrix repeatedly and the direction of largest growth takes over. The three sections below are that idea, applied to $A$ (power iteration), to $(A-\sigma I)^{-1}$ (inverse iteration, which lets you aim at any part of the spectrum you like), and to a whole nested family of subspaces at once (the QR algorithm, which is how a dense eigenvalue problem is actually solved). Forming the characteristic polynomial and sending it to a root finder (:ref[]{to=num.root-finding}) is not on the list: its coefficients are catastrophically ill-conditioned functions of the matrix entries, and the information they carry about the small eigenvalues is destroyed before the root finder is called.
:::

:::definition[The iterations, the Rayleigh quotient and the residual]{provenance=adapted src="kreyszig-1978:§9.2, Eq. (1) and Thm 9.2-1, p. 465, and Problems 8-9, p. 469; stakgold-holst-2011:§6.5, (6.5.17) and (6.5.19)-(6.5.20), pp. 401-402"}
Throughout, $A \in M_n(\mathbb{C})$, vectors are columns, $(x,y) = y^{*}x$ (the handbook's convention, linear in its first argument), and $\lVert x\rVert = (x,x)^{1/2}$.

The **Rayleigh quotient** of a non-zero vector $q$ is

$$
\rho(q) \;=\; \frac{(Aq,q)}{(q,q)} ,
$$

the name used by :cite[Kreyszig]{work=kreyszig-1978 loc="§9.2, Problem 8, p. 469"}, who records that for a bounded self-adjoint operator the whole spectrum lies between the infimum and the supremum of $\rho$; for a Hermitian matrix with eigenvalues $\lambda_1 \ge \cdots \ge \lambda_n$ the extremes are attained, $\lambda_1 = \max_q \rho(q)$ and $\lambda_n = \min_q \rho(q)$ (:ref[]{to=linalg.quadratic-forms}). The **residual** of a unit vector $q$ is

$$
\eta(q) \;=\; \lVert Aq - \rho(q)\,q\rVert ,
$$

which is $\lVert Kz - mz\rVert$ in the notation of :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§6.5, (6.5.19), p. 401"}, who read it as the standard deviation of a mass distribution on the eigenvalue axis.

Four iterations are defined below. In each, $q_0$ is a unit vector chosen by the user.

- **Power iteration.** $\displaystyle q_{k+1} = \frac{Aq_k}{\lVert Aq_k\rVert}$.
- **Inverse iteration with shift $\sigma$.** Solve $(A - \sigma I)z_{k+1} = q_k$ and set $q_{k+1} = z_{k+1}/\lVert z_{k+1}\rVert$. The shift $\sigma$ is fixed, and $A - \sigma I$ is factorized once (:ref[]{to=num.linear-systems-numerics}).
- **Rayleigh quotient iteration.** The same, but with the shift recomputed at every step: $\sigma_k = \rho(q_k)$, then $(A - \sigma_k I)z_{k+1} = q_k$ and $q_{k+1} = z_{k+1}/\lVert z_{k+1}\rVert$.
- **The QR iteration.** Put $A_0 = A$. For $k \ge 1$, factor $A_{k-1} = Q_kR_k$ with $Q_k$ unitary and $R_k$ upper triangular (:ref[]{to=linalg.gram-schmidt}) and *multiply the factors back in the other order*:
$$
A_{k-1} = Q_kR_k, \qquad A_k = R_kQ_k .
$$
Write $\bar Q_k = Q_1Q_2\cdots Q_k$ and $\bar R_k = R_kR_{k-1}\cdots R_1$ for the accumulated factors.

The angle $\theta(q, S) \in [0,\pi/2]$ between a unit vector $q$ and a subspace $S$ is defined by $\cos\theta = \lVert P_Sq\rVert$, with $P_S$ the orthogonal projector onto $S$; so $\sin\theta = \lVert (I-P_S)q\rVert$ is the distance from $q$ to $S$. Convergence "to an eigenvector" always means $\theta \to 0$, never $q_k \to v$: an iterate is determined only up to a scalar of modulus one, and for a negative eigenvalue the sign genuinely alternates.
:::

:::statement[Power iteration]{provenance=original}
Let $A$ be Hermitian with eigenvalues $\lambda_1,\dots,\lambda_n$ listed with multiplicity and ordered so that

$$
\lvert\lambda_1\rvert > \lvert\lambda_2\rvert \ge \cdots \ge \lvert\lambda_n\rvert ,
$$

and let $v_1,\dots,v_n$ be a corresponding orthonormal eigenbasis (:ref[]{to=linalg.hermitian-spectral-theorem}). The strict first inequality forces $\lambda_1$ to be a simple eigenvalue. Let $q_0$ be a unit vector with $(q_0,v_1) \neq 0$, let $\theta_k$ be the angle between $q_k$ and $\operatorname{span}\{v_1\}$, and put $D = \max_i\lvert\lambda_1-\lambda_i\rvert$. Then for every $k \ge 0$:

1. $\displaystyle \tan\theta_k \;\le\; \Bigl\lvert\frac{\lambda_2}{\lambda_1}\Bigr\rvert^{\,k}\tan\theta_0$, so $\theta_k \to 0$ geometrically with ratio $\lvert\lambda_2/\lambda_1\rvert$;
2. $\displaystyle \bigl\lvert\lambda_1 - \rho(q_k)\bigr\rvert \;\le\; D\,\sin^{2}\theta_k \;\le\; D\,\tan^{2}\theta_0\,\Bigl\lvert\frac{\lambda_2}{\lambda_1}\Bigr\rvert^{\,2k} ,$

so the eigenvector converges at the rate $\lvert\lambda_2/\lambda_1\rvert$ and the eigenvalue estimate at the *square* of that rate. If in addition $\lambda_1$ is the algebraically largest eigenvalue, then $\rho(q_k) \le \lambda_1$ for every $k$, so the estimates approach $\lambda_1$ from below.
:::

:::idea{provenance=original}
In the eigenbasis, multiplying by $A$ multiplies the $i$th coordinate by $\lambda_i$. After $k$ steps the coordinate along $v_1$ has been multiplied by $\lambda_1^k$ and every other coordinate by something no larger than $\lambda_2^k$ in modulus, so the ratio of what we do not want to what we do want is multiplied by $\lvert\lambda_2/\lambda_1\rvert$ each time. Normalising at every step changes nothing in that ratio; it only keeps the numbers inside the range of the floating-point format. The Rayleigh quotient does better than the vector because it is stationary at an eigenvector: the error in $\rho$ is a weighted average of the gaps $\lambda_1-\lambda_i$ with weights equal to the *squares* of the unwanted coordinates.
:::

:::proof{provenance=original}
Normalising at each step only rescales, so $q_k = A^kq_0/\lVert A^kq_0\rVert$ by induction. Expand $q_0 = \sum_i c_iv_i$ in the orthonormal eigenbasis, so $\sum_i\lvert c_i\rvert^2 = 1$ and $c_1 = (q_0,v_1) \neq 0$ by hypothesis.

1. *The angle.* Since $A^kq_0 = \sum_i c_i\lambda_i^{\,k}v_i$ and the $v_i$ are orthonormal, the component of $A^kq_0$ along $v_1$ has modulus $\lvert c_1\rvert\,\lvert\lambda_1\rvert^k$ and the component orthogonal to $v_1$ has norm $\bigl(\sum_{i\ge2}\lvert c_i\rvert^2\lvert\lambda_i\rvert^{2k}\bigr)^{1/2}$. Dividing the second by the first — both are positive, the first because $c_1\neq0$ and $\lambda_1\neq0$ — gives the tangent of the angle exactly:
$$
\tan\theta_k = \frac{\bigl(\sum_{i\ge2}\lvert c_i\rvert^2\lvert\lambda_i\rvert^{2k}\bigr)^{1/2}}{\lvert c_1\rvert\,\lvert\lambda_1\rvert^{k}} .
$$
By the ordering, $\lvert\lambda_i\rvert \le \lvert\lambda_2\rvert$ for every $i\ge2$, so the numerator is at most $\lvert\lambda_2\rvert^{k}\bigl(\sum_{i\ge2}\lvert c_i\rvert^2\bigr)^{1/2}$. Dividing, and recognising $\bigl(\sum_{i\ge2}\lvert c_i\rvert^2\bigr)^{1/2}/\lvert c_1\rvert$ as $\tan\theta_0$, gives claim 1.

2. *The Rayleigh quotient.* Write $q_k = \sum_i d_iv_i$ with $\sum_i\lvert d_i\rvert^2 = 1$. Hermiticity is used here: because the $v_i$ are orthonormal and $Av_i = \lambda_iv_i$,
$$
\rho(q_k) = (Aq_k,q_k) = \sum_i \lambda_i\lvert d_i\rvert^2 .
$$
Subtracting this from $\lambda_1 = \lambda_1\sum_i\lvert d_i\rvert^2$ and noting that the $i=1$ term cancels,
$$
\lambda_1 - \rho(q_k) = \sum_{i\ge2}(\lambda_1-\lambda_i)\lvert d_i\rvert^2 .
$$
Every $\lambda_i$ is real, again by Hermiticity, so this is a real number of modulus at most $D\sum_{i\ge2}\lvert d_i\rvert^2$. That sum is exactly $\sin^2\theta_k$, since $\lvert d_1\rvert = \cos\theta_k$. The second inequality in claim 2 follows from claim 1 and $\sin\theta\le\tan\theta$.

3. *One-sidedness.* If $\lambda_1 \ge \lambda_i$ for all $i$, every term of the last display is non-negative, so $\lambda_1-\rho(q_k)\ge0$. $\square$
:::

:::remark[A residual bracket: when to stop]{provenance=adapted src="stakgold-holst-2011:§6.5, Thm 6.5.5 with (6.5.17) and (6.5.19), pp. 401-402"}
The bounds above contain $\theta_0$ and $\lambda_2/\lambda_1$, neither of which is known while the computation is running. The following bound uses only quantities already on hand, and it is where the residual $\eta(q)$ earns its place.

**Lemma.** Let $A$ be Hermitian and $q$ a unit vector. Then the closed interval $[\rho(q)-\eta(q),\ \rho(q)+\eta(q)]$ contains an eigenvalue of $A$.

*Proof.* Write $q = \sum_id_iv_i$ in an orthonormal eigenbasis, $\sum_i\lvert d_i\rvert^2=1$, and $\rho = \rho(q)$. Then $Aq-\rho q = \sum_i(\lambda_i-\rho)d_iv_i$, so by orthonormality $\eta(q)^2 = \sum_i(\lambda_i-\rho)^2\lvert d_i\rvert^2$. If no eigenvalue lay within $\eta(q)$ of $\rho$, every factor $(\lambda_i-\rho)^2$ with $d_i\neq0$ would exceed $\eta(q)^2$, and the sum would exceed $\eta(q)^2\sum_i\lvert d_i\rvert^2 = \eta(q)^2$, a contradiction. $\square$

:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§6.5, Thm 6.5.5, p. 402"} state and prove this for a positive compact symmetric operator on a Hilbert space, where $\rho$ and $\eta$ are the mean and the standard deviation of the mass distribution that the trial element $z$ puts on the eigenvalue axis, and they note that the result is Chebyshev's inequality in disguise. The proof above is that argument in finite dimensions. Two cautions carry over. First, the bracket names *an* eigenvalue, not the one you are chasing: to conclude that $\lambda_1 \in [\rho-\eta,\rho+\eta]$ one needs to know in addition that no other eigenvalue is that close, which is the point of the source's condition $m - \sigma > \lambda_2$. Second, the bracket is honest but pessimistic by roughly one factor of the residual, because by part 2 of the statement above the actual error in $\rho$ is of order $\eta^2/\mathrm{gap}$ once $q$ is close.
:::

:::remark[Where the hypotheses are used, and the operator form of the same iteration]{provenance=adapted src="stakgold-holst-2011:§6.5, Exercise 6.5.2, p. 406"}
- **$\lvert\lambda_1\rvert > \lvert\lambda_2\rvert$ strictly.** Used in step 1 to make the ratio in the numerator contract. It fails for $A = \operatorname{diag}(1,-1)$ and $q_0 = (1,1)^{T}/\sqrt2$: then $q_k = (1,(-1)^k)^{T}/\sqrt2$ for every $k$, the iteration oscillates for ever between two vectors, and $\rho(q_k) = 0$, which is not an eigenvalue at all. For a real non-symmetric matrix the same failure occurs whenever the dominant eigenvalues are a complex conjugate pair, as for a rotation matrix. When $\lambda_1$ is a repeated eigenvalue the statement survives unchanged if $\lambda_2$ is read as the largest modulus *strictly* below $\lvert\lambda_1\rvert$ and $v_1$ is replaced by the whole $\lambda_1$-eigenspace: the proof uses only that the unwanted coordinates are multiplied by something smaller.
- **$(q_0,v_1) \neq 0$.** Used to divide by $\lvert c_1\rvert$. In exact arithmetic an iteration started orthogonal to $v_1$ stays orthogonal to it and converges to the dominant eigenvector of the rest of the spectrum. In floating point it does not: rounding injects a component along $v_1$ of relative size about the unit roundoff $u$ (:ref[]{to=num.floating-point-errors}), and from then on that component grows by $\lvert\lambda_1/\lambda_2\rvert$ per step, so the iteration turns towards $v_1$ after roughly $\ln(1/u)/\ln\lvert\lambda_1/\lambda_2\rvert$ additional steps. A random $q_0$ makes the event $c_1 = 0$ one of probability zero, which is why starting vectors are chosen at random in practice.
- **Hermiticity.** Used twice in step 2 and nowhere in step 1. Claim 1 holds for any diagonalizable $A$ with the constant $\tan\theta_0$ replaced by a constant involving the condition number of the eigenvector matrix. Claim 2 does not: without an orthonormal eigenbasis the expansion $\rho = \sum_i\lambda_i\lvert d_i\rvert^2$ is false, and the Rayleigh quotient converges only at the first-order rate $\lvert\lambda_2/\lambda_1\rvert^k$. Doubling the exponent is a reward for symmetry.
- **The normalisation.** Nothing in the mathematics needs it; the floating-point format does. Without it the iterates grow or shrink like $\lvert\lambda_1\rvert^k$ and overflow or underflow within a few hundred steps.
- **The same iteration in a Hilbert space.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§6.5, Exercise 6.5.2, p. 406"} set out the power iteration for a nonnegative symmetric Hilbert-Schmidt operator $K$ in a form that avoids normalising at all: from a trial function $f_0$ with $Kf_0 \neq 0$ they form $f_n = K^nf_0$, define the moments $a_k = (f_i, f_{k-i})$ — a quantity that depends only on $k$, not on the split — and state that the quotients $a_{k+1}/a_k$ increase monotonically and are bounded above by the largest eigenvalue $\lambda_1$, with convergence to $\lambda_1$ whenever $f_0$ is not orthogonal to the first eigenfunction. Their hypothesis that $f_0$ is not orthogonal to that eigenfunction is our $c_1\neq0$; their monotonicity is a sharper statement than our part 2 and is bought with the extra hypothesis that $K$ is nonnegative. The example below exhibits both in the same computation.
:::

:::statement[Inverse iteration with a shift, and the Rayleigh quotient iteration]{provenance=original}
Let $A$ be Hermitian with eigenvalues $\lambda_1,\dots,\lambda_n$ and orthonormal eigenbasis $v_1,\dots,v_n$, and let $\sigma\in\mathbb{R}$ not be an eigenvalue of $A$.

1. *The shifted inverse.* $(A-\sigma I)^{-1}$ is Hermitian, has the same eigenvectors as $A$, and has eigenvalues $(\lambda_i-\sigma)^{-1}$. Consequently its dominant eigenvalue corresponds to the eigenvalue of $A$ **nearest** $\sigma$.
2. *Inverse iteration.* Suppose some $\lambda_j$ is strictly nearest $\sigma$, that is $\lvert\lambda_j-\sigma\rvert < \delta := \min_{i\neq j}\lvert\lambda_i-\sigma\rvert$, and let $q_0$ be a unit vector with $(q_0,v_j)\neq0$. Let $\theta_k$ be the angle between the inverse iterate $q_k$ and $\operatorname{span}\{v_j\}$. Then
$$
\tan\theta_k \;\le\; \Bigl(\frac{\lvert\lambda_j-\sigma\rvert}{\delta}\Bigr)^{k}\tan\theta_0 ,
\qquad
\bigl\lvert\lambda_j - \rho(q_k)\bigr\rvert \;\le\; D\sin^2\theta_k ,
$$
with $D = \max_i\lvert\lambda_j-\lambda_i\rvert$. The convergence factor $\lvert\lambda_j-\sigma\rvert/\delta$ is at the user's disposal: it is small exactly when $\sigma$ is a good guess.
3. *Cubic convergence of the Rayleigh quotient iteration.* Let $q_k$ be a unit vector, $\sigma_k=\rho(q_k)$, $\theta_k$ the angle from $q_k$ to $\operatorname{span}\{v_j\}$ and $\delta_k = \min_{i\neq j}\lvert\lambda_i-\sigma_k\rvert$. If $\sigma_k$ is not an eigenvalue, then one step of inverse iteration with the shift $\sigma_k$ produces $q_{k+1}$ with
$$
\tan\theta_{k+1} \;\le\; \frac{\lvert\lambda_j-\sigma_k\rvert}{\delta_k}\tan\theta_k \;\le\; \frac{D}{\delta_k}\,\sin^{2}\theta_k\,\tan\theta_k .
$$
Once $\theta_k$ is small enough that $\delta_k$ is bounded below by half the gap between $\lambda_j$ and the rest of the spectrum, the error is therefore cubed at every step.
:::

:::idea{provenance=original}
Everything here is the previous theorem applied to a different matrix. Inverting turns the eigenvalue nearest $\sigma$ — the one the power method is worst at finding — into the one of largest modulus, which the power method is best at finding :cite[]{work=rhb-2006 loc="§8.13, p. 273"}. The cost is one linear solve per step instead of one matrix-vector product, and since the matrix $A-\sigma I$ is the same at every step it is factorized once. The Rayleigh quotient iteration then notices that a shift is only as good as the information behind it, and feeds the current eigenvalue estimate back in as the next shift. Each step gains twice over: the shift is better by the *square* of the angle, which is the Rayleigh quotient's own accuracy, and the step then reduces the angle in proportion to the shift error. Two times the error squared, once more linearly: the exponent is three.
:::

:::proof{provenance=original}
1. Set $B = (A-\sigma I)^{-1}$. Since $\sigma$ is real and $A$ is Hermitian, $A-\sigma I$ is Hermitian, and it is invertible because $\sigma$ is not an eigenvalue; the inverse of an invertible Hermitian matrix is Hermitian, as $(B^{*}) = ((A-\sigma I)^{*})^{-1} = B$. From $Av_i = \lambda_iv_i$ we get $(A-\sigma I)v_i = (\lambda_i-\sigma)v_i$, and applying $B$ to both sides and dividing by the non-zero scalar $\lambda_i-\sigma$ gives $Bv_i = (\lambda_i-\sigma)^{-1}v_i$. This is the familiar statement that the inverse keeps the eigenvectors and reciprocates the eigenvalues :cite[]{work=rhb-2006 loc="§8.13, p. 273"} :cite[]{work=arfken-2013 loc="Exercise 6.4.5, p. 318"}, applied to the shifted matrix. The map $t\mapsto(t-\sigma)^{-1}$ is largest in modulus at the $\lambda_i$ closest to $\sigma$, which proves the last clause.

2. The inverse iteration is the power iteration for $B$, since $q_{k+1}$ is $Bq_k$ normalised. $B$ is Hermitian with the same eigenvectors $v_i$, and by hypothesis its eigenvalue $(\lambda_j-\sigma)^{-1}$ is strictly largest in modulus, with the next largest of modulus $1/\delta$. The power iteration statement applied to $B$ gives
$$
\tan\theta_k \le \Bigl(\frac{1/\delta}{1/\lvert\lambda_j-\sigma\rvert}\Bigr)^{k}\tan\theta_0 = \Bigl(\frac{\lvert\lambda_j-\sigma\rvert}{\delta}\Bigr)^{k}\tan\theta_0 .
$$
The Rayleigh quotient bound is part 2 of that statement applied to $A$ itself — not to $B$ — with $v_j$ in the role of $v_1$: its proof used only that $v_j$ is a unit eigenvector of a Hermitian matrix and that $\sin\theta_k$ is the norm of the part of $q_k$ orthogonal to it, both of which hold here.

3. The first inequality is a direct one-step estimate, and needs no assumption beyond the one made: that $\sigma_k$ is not an eigenvalue. Expand $q_k = \sum_id_iv_i$ in the orthonormal eigenbasis. One step of inverse iteration with the shift $\sigma_k$ replaces $q_k$ by the normalisation of $(A-\sigma_kI)^{-1}q_k = \sum_i(\lambda_i-\sigma_k)^{-1}d_iv_i$, which is defined because no $\lambda_i$ equals $\sigma_k$. A tangent is unchanged by scaling, so, taking $d_j\neq0$ (otherwise $\tan\theta_k=\infty$ and there is nothing to prove),
$$
\tan\theta_{k+1} = \frac{\bigl(\sum_{i\neq j}\lvert d_i\rvert^{2}/\lvert\lambda_i-\sigma_k\rvert^{2}\bigr)^{1/2}}{\lvert d_j\rvert/\lvert\lambda_j-\sigma_k\rvert}
\;\le\; \frac{\lvert\lambda_j-\sigma_k\rvert}{\delta_k}\,\frac{\bigl(\sum_{i\neq j}\lvert d_i\rvert^{2}\bigr)^{1/2}}{\lvert d_j\rvert}
\;=\; \frac{\lvert\lambda_j-\sigma_k\rvert}{\delta_k}\tan\theta_k ,
$$
where the inequality is $\lvert\lambda_i-\sigma_k\rvert\ge\delta_k$ for every $i\neq j$. (This is the computation behind part 2, run for a single step; part 2 itself may not be invoked here, because its hypothesis that $\lambda_j$ is strictly nearest the shift is exactly what part 3 declines to assume. Without that hypothesis the estimate still holds, the factor merely failing to be smaller than $1$.) For the second inequality, part 2 of the power iteration statement, applied to $A$ and $v_j$, bounds the shift error itself: $\lvert\lambda_j-\sigma_k\rvert = \lvert\lambda_j-\rho(q_k)\rvert \le D\sin^2\theta_k$. Substituting gives the stated bound. If $\theta_k$ is small enough that $\delta_k \ge \tfrac12\min_{i\neq j}\lvert\lambda_i-\lambda_j\rvert =: \tfrac12 g$, then $\tan\theta_{k+1} \le (2D/g)\sin^2\theta_k\tan\theta_k \le (2D/g)\tan^3\theta_k$, a cubic recursion, which contracts as soon as $\tan^2\theta_k < g/(2D)$. $\square$
:::

:::statement[The QR algorithm]{provenance=original}
Let $A\in M_n(\mathbb{C})$ and let $A_k$, $\bar Q_k$, $\bar R_k$ be as in the definition, with every $R_k$ taken to have non-negative diagonal. Write $E_j = \operatorname{span}\{e_1,\dots,e_j\}$ for the span of the first $j$ standard basis vectors.

1. *Similarity.* $A_k = \bar Q_k^{*}A\,\bar Q_k$ for every $k$. Every iterate therefore has the same eigenvalues, trace and determinant as $A$ :cite[]{work=arfken-2013 loc="Exercise 6.4.1, p. 317"}, and if $A$ is Hermitian then so is every $A_k$.
2. *It is power iteration on a flag.* $A^k = \bar Q_k\bar R_k$. If $A$ is invertible, the first $j$ columns of $\bar Q_k$ are an orthonormal basis of $A^kE_j$, simultaneously for $j=1,\dots,n$.
3. *Convergence.* Suppose $A = X\Lambda X^{-1}$ is diagonalizable with $\Lambda = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$ and
$$
\lvert\lambda_1\rvert > \lvert\lambda_2\rvert > \cdots > \lvert\lambda_n\rvert > 0 ,
$$
and suppose every leading principal submatrix of $X^{-1}$ is invertible, equivalently that $X^{-1} = LU$ with $L$ unit lower triangular and $U$ upper triangular (:ref[]{to=num.linear-systems-numerics}). Then there is a constant $C$, depending on $A$ but not on $k$, such that for each $j = 1,\dots,n-1$,
$$
\lvert (A_k)_{mi}\rvert \;\le\; C\Bigl\lvert\frac{\lambda_{j+1}}{\lambda_j}\Bigr\rvert^{k} \quad\text{for all } i\le j < m ,
\qquad\text{and}\qquad
(A_k)_{jj} \longrightarrow \lambda_j \ \text{ as } k\to\infty ,
$$
the last also for $j=n$. In particular the subdiagonal entries go to zero, the iterates become upper triangular in the limit, and the eigenvalues appear on the diagonal in order of decreasing modulus.
:::

:::idea{provenance=original}
Run the power iteration on $e_1$ and you get the dominant eigenvector. Run it on $e_1$ and $e_2$ at once and both columns swing towards $v_1$, so the second carries no new information — unless you orthogonalize against the first at every step, which is exactly what taking a QR factorization does. What survives in column $j$ is then the part of the dominant behaviour that the first $j-1$ columns have not already claimed, so the span of the first $j$ columns converges to the invariant subspace belonging to the $j$ largest eigenvalues, at the rate $\lvert\lambda_{j+1}/\lambda_j\rvert$ set by the gap at that position in the list. The two lines of the algorithm, "factor and multiply back in the other order", do this for all $j$ at once while keeping the matrix similar to $A$. Once the span of the first $j$ columns is invariant, the block of $A_k$ below the leading $j\times j$ corner vanishes; that happening for every $j$ simultaneously is triangularity, and the diagonal of a triangular matrix is its spectrum.
:::

:::proof{provenance=original}
**1. Similarity.** From $A_{k-1}=Q_kR_k$ and the unitarity of $Q_k$ we get $R_k = Q_k^{*}A_{k-1}$, hence $A_k = R_kQ_k = Q_k^{*}A_{k-1}Q_k$. Induction on $k$, with $A_0=A$ and $\bar Q_0 = I$, gives $A_k = \bar Q_k^{*}A\bar Q_k$. A similarity transformation changes neither the characteristic polynomial nor therefore the eigenvalues, trace or determinant :cite[]{work=arfken-2013 loc="Exercise 6.4.1, p. 317"}; and if $A^{*}=A$ then $A_k^{*} = \bar Q_k^{*}A^{*}\bar Q_k = A_k$.

**2. The power-iteration identity.** For $k=1$ the claim $A^1 = \bar Q_1\bar R_1$ is the factorization $A = Q_1R_1$. Assume $A^k = \bar Q_k\bar R_k$. By part 1, $A\bar Q_k = \bar Q_kA_k$, and $A_k = Q_{k+1}R_{k+1}$ by definition, so
$$
A^{k+1} = A\,\bar Q_k\bar R_k = \bar Q_kA_k\bar R_k = \bar Q_kQ_{k+1}R_{k+1}\bar R_k = \bar Q_{k+1}\bar R_{k+1} .
$$
For the second sentence, let $\bar q_1,\dots,\bar q_n$ be the columns of $\bar Q_k$. Reading column $i$ of $A^k = \bar Q_k\bar R_k$ and using that $\bar R_k$ is upper triangular gives $A^ke_i = \sum_{m\le i}(\bar R_k)_{mi}\bar q_m$, so $A^kE_j \subseteq \operatorname{span}\{\bar q_1,\dots,\bar q_j\}$. If $A$ is invertible then so is $A^k$, so $A^kE_j$ has dimension $j$ and the inclusion is an equality. The $\bar q_m$ are orthonormal because $\bar Q_k$ is unitary.

**3. Convergence.** Fix $j$ with $1\le j\le n-1$ and write $r_j = \lvert\lambda_{j+1}/\lambda_j\rvert < 1$. Let $x_1,\dots,x_n$ be the columns of $X$, so $Ax_i = \lambda_ix_i$, and let $S_j = \operatorname{span}\{x_1,\dots,x_j\}$, which is $A$-invariant. Note $A$ is invertible, since $\lvert\lambda_n\rvert>0$.

*Step (a): an explicit basis of $A^kE_j$.* Using $A^k = X\Lambda^kX^{-1}$ and the hypothesis $X^{-1}=LU$,
$$
A^k = X\Lambda^kLU = X\bigl(\Lambda^kL\Lambda^{-k}\bigr)\Lambda^kU .
$$
Both $U$ and $\Lambda^k$ are invertible and upper triangular, so $\Lambda^kU$ maps $E_j$ onto $E_j$ and
$$
A^kE_j = XN_kE_j, \qquad N_k := \Lambda^kL\Lambda^{-k}, \quad (N_k)_{im} = L_{im}\Bigl(\frac{\lambda_i}{\lambda_m}\Bigr)^{k} .
$$
$N_k$ is unit lower triangular. Split it into blocks along the $j$th row and column, $N_k = \begin{pmatrix}N^{11}&0\\N^{21}&N^{22}\end{pmatrix}$ with $N^{11}$ of size $j\times j$. Then $N_kE_j$ is spanned by the columns of $\begin{pmatrix}N^{11}\\N^{21}\end{pmatrix}$, and multiplying on the right by the invertible $(N^{11})^{-1}$ does not change that span, so
$$
N_kE_j = \text{column span of } \begin{pmatrix}I_j\\ \Delta_k\end{pmatrix}, \qquad \Delta_k := N^{21}(N^{11})^{-1} .
$$
*Step (b): $\Delta_k$ is small.* The entries of $N^{21}$ are $L_{im}(\lambda_i/\lambda_m)^k$ with $i>j\ge m$; since the moduli decrease strictly, $\lvert\lambda_i/\lambda_m\rvert \le \lvert\lambda_{j+1}/\lambda_j\rvert = r_j$ for all such $i,m$, so every entry is at most $\ell\,r_j^{\,k}$ in modulus, where $\ell = \max_{i>m}\lvert L_{im}\rvert$. The matrix $N^{11}$ is $I_j$ plus a strictly lower triangular matrix whose entries are bounded by $\ell$ uniformly in $k$ (each is $L_{im}$ times a number of modulus below one); a strictly lower triangular $j\times j$ matrix is nilpotent of index $j$, so $(N^{11})^{-1} = \sum_{p<j}(I_j-N^{11})^{p}$ is bounded in norm uniformly in $k$. Hence $\lVert\Delta_k\rVert \le c_1r_j^{\,k}$ for a constant $c_1$ independent of $k$.

*Step (c): $A^kE_j$ is close to $S_j$, in both directions.* By steps (a) and (b), $A^kE_j$ is spanned by the vectors $y_i = x_i + \sum_{m>j}(\Delta_k)_{mi}x_m$ for $i\le j$. Let $u = \sum_{i\le j}c_iy_i$ be any element of $A^kE_j$ and put $u_0 = \sum_{i\le j}c_ix_i \in S_j$. Then $u = X\binom{c}{\Delta_kc}$ and $u-u_0 = X\binom{0}{\Delta_kc}$, so
$$
\lVert u-u_0\rVert \le \lVert X\rVert\,\lVert\Delta_k\rVert\,\lvert c\rvert
\quad\text{and}\quad
\lVert u\rVert \ge \sigma_{\min}(X)\,\lvert c\rvert ,
$$
whence $\lVert u-u_0\rVert \le \varepsilon_k\lVert u\rVert$ with $\varepsilon_k := \kappa_2(X)\lVert\Delta_k\rVert \le C_0r_j^{\,k}$ (:ref[]{to=linalg.matrix-norms-conditioning}). Exchanging the roles of $u$ and $u_0$ in the same two estimates — given $w = \sum_{i\le j}c_ix_i\in S_j$, compare it with $w' = \sum_{i\le j}c_iy_i\in A^kE_j$ — gives $\operatorname{dist}(w, A^kE_j) \le \varepsilon_k\lVert w\rVert$ as well. So, writing $P_k$ and $P$ for the orthogonal projectors onto $A^kE_j$ and $S_j$, both $\lVert (I-P)P_k\rVert$ and $\lVert (I-P_k)P\rVert$ are at most $\varepsilon_k$, and from the identity $P_k-P = P_k(I-P) - (I-P_k)P$ together with $\lVert P_k(I-P)\rVert = \lVert (I-P)P_k\rVert$ (adjoints of each other, both projectors being self-adjoint),
$$
\lVert P_k - P\rVert \le 2\varepsilon_k .
$$

*Step (d): the block below the corner.* Let $i\le j<m$. By part 2, $\bar q_i\in A^kE_j$ and $\bar q_m\perp A^kE_j$, so $(A_k)_{mi} = (A\bar q_i,\bar q_m)$ is a component of $(I-P_k)A\bar q_i$ and is bounded by its norm. Write $\bar q_i = u_0+r$ with $u_0\in S_j$ and $\lVert r\rVert\le\varepsilon_k$, as step (c) permits. Then $Au_0\in S_j$ because $S_j$ is invariant, so $\lVert (I-P_k)Au_0\rVert \le \varepsilon_k\lVert Au_0\rVert \le \varepsilon_k\lVert A\rVert(1+\varepsilon_k)$ by the second estimate of step (c), while $\lVert (I-P_k)Ar\rVert\le\lVert A\rVert\varepsilon_k$. Adding, and assuming $\varepsilon_k\le1$ (true for large $k$),
$$
\lvert (A_k)_{mi}\rvert \le \lVert (I-P_k)A\bar q_i\rVert \le 3\lVert A\rVert\varepsilon_k \le C r_j^{\,k} .
$$
Enlarging $C$ to cover the finitely many small $k$ with $\varepsilon_k>1$ gives the stated bound for all $k$.

*Step (e): the diagonal.* The trace of the leading $j\times j$ block of $A_k$ is $\sum_{i\le j}(A\bar q_i,\bar q_i) = \operatorname{tr}(P_kAP_k) = \operatorname{tr}(AP_k)$. Since $\lvert\operatorname{tr}M\rvert\le n\lVert M\rVert$ and $\lVert A(P_k-P)\rVert\le2\varepsilon_k\lVert A\rVert$ by step (c),
$$
\bigl\lvert \operatorname{tr}(AP_k) - \operatorname{tr}(AP)\bigr\rvert \le 2n\lVert A\rVert\varepsilon_k \xrightarrow[k\to\infty]{} 0 .
$$
In an orthonormal basis whose first $j$ vectors span $S_j$, invariance makes $A$ block upper triangular with leading block $B$ the matrix of $A$ restricted to $S_j$, and $PAP$ is $B$ in the corner and zero elsewhere; since $S_j$ is spanned by eigenvectors for $\lambda_1,\dots,\lambda_j$, $\operatorname{tr}(AP) = \operatorname{tr}B = \lambda_1+\cdots+\lambda_j$. So the trace of the leading $j\times j$ block of $A_k$ tends to $\lambda_1+\cdots+\lambda_j$ for $j=1,\dots,n-1$, and for $j=n$ it equals $\operatorname{tr}A = \lambda_1+\cdots+\lambda_n$ exactly, by part 1. Subtracting consecutive cases,
$$
(A_k)_{jj} = \Bigl(\text{trace of leading } j\times j\Bigr) - \Bigl(\text{trace of leading } (j-1)\times(j-1)\Bigr) \longrightarrow \lambda_j
$$
for every $j$, the case $j=1$ needing only the first bracket. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Distinct moduli, in part 3.** Step (b) needs $\lvert\lambda_i/\lambda_m\rvert\le r_j<1$ for $i>j\ge m$, which is exactly the strict ordering. Without it the algorithm need not converge at all: for $A = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ the QR factorization is $Q=A$, $R=I$, so $A_1 = RQ = A$ and every iterate equals $A$, whose off-diagonal entries never decay. Here $\lambda = \pm1$ have equal modulus. The same obstruction appears for every real matrix with a complex conjugate pair of eigenvalues, since a real iteration cannot converge to a real triangular matrix with non-real diagonal; the practical remedy is to stop at the real Schur form, in which such a pair survives as a $2\times2$ diagonal block, and to read its eigenvalues off directly.
- **The $LU$ factorization of $X^{-1}$.** Used only in step (a), to arrange that $A^kE_j$ is a graph over $S_j$. Without it the diagonal can converge to the eigenvalues *in the wrong order*. Take $A = \operatorname{diag}(1,2)$ with the eigenvalues listed as $\lambda_1 = 2$, $\lambda_2 = 1$, so that $X = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $X^{-1}=X$ has a vanishing leading entry and no $LU$ factorization. The moduli are distinct, but $A$ is already upper triangular with $Q_1=I$, so every iterate is $\operatorname{diag}(1,2)$ and $(A_k)_{11} = 1 \neq \lambda_1$. Nothing is lost numerically — the eigenvalues are still on the diagonal — but the clean ordering is.
- **$\lvert\lambda_n\rvert>0$.** Used in part 2 to know that $A^kE_j$ has dimension $j$. A singular $A$ is handled by shifting: the eigenvalues of $A+cI$ are $\lambda_i+c$, and the iteration is run on the shifted matrix.
- **Hermiticity is not assumed** in any part of this statement, unlike the two earlier ones. What Hermiticity buys is part 1's last clause: every iterate stays Hermitian, so only half the matrix need be stored and touched, and the tridiagonal form of the method below is available.
- **Non-negative diagonal in $R_k$.** A convenience, not a necessity: it makes the factorization unique for invertible $A_{k-1}$ (:ref[]{to=linalg.gram-schmidt}) and so makes "the" QR iteration well defined. Any other choice of phases changes each $A_k$ by a diagonal unitary conjugation, which alters no modulus in the statement.
:::

:::method[Computing eigenvalues in practice]{provenance=original}
Decide first which eigenvalues you need; that decides the algorithm.

1. **Locate the spectrum cheaply.** Gershgorin's theorem — every eigenvalue $\lambda$ of $C=(c_{jk})$ satisfies $\lvert c_{jj}-\lambda\rvert \le \sum_{k\neq j}\lvert c_{jk}\rvert$ for at least one $j$ :cite[]{work=kreyszig-1978 loc="§5.2, Problem 4, p. 313"} — costs $O(n^2)$ and brackets every eigenvalue in a union of discs. Use it to choose shifts and to check an answer for gross error.
2. **The dominant eigenvalue only, with $A$ large and sparse:** power iteration. One matrix-vector product per step; cost per step is the cost of that product. Stop when $\eta(q_k)$ is below the tolerance, and report the bracket $[\rho-\eta,\rho+\eta]$ of the lemma above. Expect $\ln(1/\text{tol})/\ln\lvert\lambda_1/\lambda_2\rvert$ steps, so stop early and change method if the ratio is near one.
3. **One eigenvalue near a known $\sigma$, or an eigenvector for an eigenvalue you already have:** inverse iteration. Factor $A-\sigma I$ once with pivoted $LU$ (:ref[]{to=num.linear-systems-numerics}), at cost $\tfrac23n^3$ for a dense matrix and far less for a banded one, then reuse the factors each step at $O(n^2)$. Convergence factor $\lvert\lambda_j-\sigma\rvert/\delta$: a shift good to three digits usually gives the eigenvector in three or four steps.
4. **Refining to full accuracy:** switch to the Rayleigh quotient iteration once $\theta$ is small. It cubes the error, but $A-\sigma_kI$ changes every step, so each step costs a fresh factorization. Two or three steps are enough; do not start from a poor guess, since the iteration is only locally convergent and can converge to an eigenvalue you did not want.
5. **All the eigenvalues of a dense matrix:** never iterate on the full matrix. First reduce $A$ by unitary similarities to upper Hessenberg form (zero below the first subdiagonal), or to tridiagonal form if $A$ is Hermitian. This costs $O(n^3)$ once and is exact in the sense that it terminates: counting a multiply and an add as one operation each, applying a Householder reflection to an $m\times p$ block costs $4mp$, so the reduction costs about $\sum_k\bigl[4(n-k)^2+4n(n-k)\bigr] \approx \tfrac{10}{3}n^3$ in general and about $\tfrac43n^3$ when symmetry lets the two-sided update be done at once.
6. **Then run shifted QR with deflation.** The Hessenberg form is preserved by a QR step, and this is what makes the algorithm affordable: with Givens rotations a Hessenberg QR step costs about $6n^2$ operations — $n-1$ rotations acting on two rows of length $n-k+1$ at $6$ operations per column, about $3n^2$ in all, and the same again applying them from the right — against about $\tfrac43n^3$ for a QR factorization of a full matrix. A tridiagonal step costs $O(n)$. Use the shift $\sigma_k = (A_k)_{nn}$, or Wilkinson's shift (the eigenvalue of the trailing $2\times2$ block nearer to $(A_k)_{nn}$) when a real matrix may have complex eigenvalues. When $\lvert (A_k)_{n,n-1}\rvert$ falls below $u(\lvert(A_k)_{n-1,n-1}\rvert+\lvert(A_k)_{nn}\rvert)$, accept $(A_k)_{nn}$ as an eigenvalue, **deflate** — delete the last row and column — and continue on the leading $(n-1)\times(n-1)$ block. With shifts this takes two or three steps per eigenvalue in practice, so the whole iteration costs $O(n^2)$ for a tridiagonal matrix and the $\tfrac43n^3$ reduction dominates.
7. **Eigenvectors.** Accumulate $\bar Q_k$ if you want them all, which multiplies the cost by several; for a few, run one or two steps of inverse iteration with the computed eigenvalue as the shift, which is cheaper and more accurate.
8. **Check the answer.** Compute $\eta$ for each computed pair and use the bracket. Compare $\sum_i\lambda_i$ with $\operatorname{tr}A$ and $\prod_i\lambda_i$ with $\det A$, both invariant under the similarities used :cite[]{work=arfken-2013 loc="Exercise 6.4.1, p. 317"}.

The older **Jacobi method** — repeated plane rotations, each chosen to annihilate one off-diagonal entry, with $\tan2\theta = 2a_{ij}/(a_{jj}-a_{ii})$, each rotation reducing the sum of squares of the off-diagonal entries by $2a_{ij}^2$ :cite[]{work=arfken-2013 loc="§6.4 and Exercise 6.4.9, pp. 314, 318"} — is still the most transparent way to see that a symmetric matrix can be diagonalized by iteration, and is still used where accuracy on tiny eigenvalues matters. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§6.4, p. 314"} describe it as superseded by more efficient though less transparent methods; step 6 is what superseded it.
:::

:::example[All three iterations on one $4\times4$ matrix]{provenance=original}
Take the real symmetric matrix

$$
A = \begin{pmatrix} 6&2&1&0\\ 2&5&1&1\\ 1&1&4&2\\ 0&1&2&3\end{pmatrix} ,
\qquad
\det(A-\lambda I) = (\lambda-5)\,(\lambda^3-13\lambda^2+43\lambda-36) .
$$

The factor $\lambda-5$ is visible, and the cubic has three real roots, so the eigenvalues in decreasing order are

$$
\lambda_1 = 8.382699939755810,\quad \lambda_2 = 5,\quad \lambda_3 = 3.326149857358553,\quad \lambda_4 = 1.291150202885637 ,
$$

the irrational ones computed to the digits shown and checked against $\sum\lambda_i = \operatorname{tr}A = 18$ and $\prod\lambda_i = \det A = 180$. $A$ is positive definite, and the ratios that govern the three algorithms are
$$
\frac{\lambda_2}{\lambda_1} = 0.5964665,\qquad \frac{\lambda_3}{\lambda_2} = 0.6652300,\qquad \frac{\lambda_4}{\lambda_3} = 0.3881816 .
$$

**(a) Power iteration, by hand to begin with.** Start at $q_0 = e_1$; the exact dominant eigenvector is $v_1 = (0.6579120, 0.5834795, 0.4006479, 0.2572641)^{T}$, so $(q_0,v_1) = 0.658 \neq 0$ and the hypothesis holds. The unnormalised iterates $A^ke_1$ are integer vectors,
$$
(6,2,1,0),\quad (41,23,12,4),\quad (304,213,120,59),\quad (2370,1852,1115,630),
$$
and their first entries are the moments $a_k = (A^ke_1,e_1)$ of the Stakgold-Holst exercise: $a_0,\dots,a_6 = 1, 6, 41, 304, 2370, 19039, 155666$. The quotients
$$
\frac{a_1}{a_0}=6,\quad \frac{41}{6}=6.8333,\quad \frac{304}{41}=7.41463,\quad \frac{2370}{304}=7.79605,\quad \frac{19039}{2370}=8.03333,\quad \frac{155666}{19039}=8.17616
$$
increase monotonically and stay below $\lambda_1 = 8.38270$, exactly as that exercise asserts for a nonnegative symmetric operator.

Normalising at each step and recording the Rayleigh quotient, the angle to $v_1$ and the residual:

| $k$ | $\rho(q_k)$ | $\lambda_1-\rho(q_k)$ | $\sin\theta_k$ | $\eta(q_k)$ | bracket |
|---|---|---|---|---|---|
| 5 | 8.367694690 | $1.50\times10^{-2}$ | $6.644\times10^{-2}$ | $2.256\times10^{-1}$ | $[8.14207,\ 8.59332]$ |
| 10 | 8.382615289 | $8.47\times10^{-5}$ | $5.002\times10^{-3}$ | $1.692\times10^{-2}$ | $[8.36569,\ 8.39954]$ |
| 15 | 8.382699457 | $4.82\times10^{-7}$ | $3.776\times10^{-4}$ | $1.277\times10^{-3}$ | $[8.38142,\ 8.38398]$ |
| 20 | 8.382699937 | $2.75\times10^{-9}$ | $2.851\times10^{-5}$ | $9.644\times10^{-5}$ | $[8.38260,\ 8.38280]$ |

Every bracket contains $\lambda_1 = 8.3826999$, as the lemma guarantees, and every one is pessimistic by about a factor of $\eta$, as predicted. The ratio of successive $\sin\theta_k$ at $k=20$ is $0.5964665$ and the ratio of successive Rayleigh errors is $0.3557723$; the predicted values are $\lambda_2/\lambda_1 = 0.5964665$ and $(\lambda_2/\lambda_1)^2 = 0.3557723$. The explicit bounds also hold with room to spare: $\tan\theta_0 = 1.1447$, so part 1 allows $\tan\theta_{20}\le 1.1447\times0.5964665^{20} = 3.72\times10^{-5}$ against the observed $2.85\times10^{-5}$, and with $D = \lambda_1-\lambda_4 = 7.0915$ part 2 allows $5.76\times10^{-9}$ against the observed $2.75\times10^{-9}$.

**(b) Inverse iteration at an interior eigenvalue.** Take $\sigma = 3.5$, a guess at $\lambda_3$. The distances are $\lvert\lambda_i-\sigma\rvert = 4.883,\ 1.5,\ 0.1739,\ 2.209$, so $\lambda_3$ is strictly nearest, $\delta = 1.5$, and the predicted convergence factor is $0.17385/1.5 = 0.11590$. From $q_0 = e_1$:

| $k$ | $\rho(q_k)$ | $\rho(q_k)-\lambda_3$ | $\sin\theta_k$ |
|---|---|---|---|
| 1 | 3.374449339 | $4.83\times10^{-2}$ | $1.607\times10^{-1}$ |
| 3 | 3.326156621 | $6.76\times10^{-6}$ | $2.032\times10^{-3}$ |
| 5 | 3.326149859 | $1.23\times10^{-9}$ | $2.716\times10^{-5}$ |

The observed ratio $\sin\theta_5/\sin\theta_4 = 2.716\times10^{-5}/2.347\times10^{-4} = 0.1157$ matches the predicted $0.1159$. Five steps against the twenty of part (a), for an eigenvalue the power method cannot reach at all.

**(c) Rayleigh quotient iteration.** Start from $q_0 = (0,0,1,1)^{T}/\sqrt2$, for which $\rho(q_0) = 5.5$. The successive Rayleigh quotients and angles are
$$
\begin{aligned}
\rho_1 &= 5.018153235, &\sin\theta_1 &= 1.330\times10^{-1},\\
\rho_2 &= 4.999999414, &\sin\theta_2 &= 1.094\times10^{-3},\\
\rho_3 &= 5 - 1.6\times10^{-19}, &\sin\theta_3 &= 3.456\times10^{-10},\\
\rho_4 &= 5 - 1.6\times10^{-57}, &\sin\theta_4 &= 3.156\times10^{-29} .
\end{aligned}
$$
The iteration has found $\lambda_2 = 5$. Cubing each angle predicts the next: $(1.094\times10^{-3})^3 = 1.31\times10^{-9}$ against $3.46\times10^{-10}$, and $(3.456\times10^{-10})^3 = 4.13\times10^{-29}$ against $3.156\times10^{-29}$. In double precision this would have reached full accuracy at step three; the computation above was done in 60-digit arithmetic so that the cubic law could be seen twice.

**(d) The unshifted QR algorithm.** The hypotheses of part 3 hold: the four moduli are distinct and non-zero, and the leading principal minors of $X^{-1} = X^{T}$ (the eigenvector matrix is orthogonal here) are $-0.6579$, $-0.3369$, $0.7739$, $1$, all non-zero. The subdiagonal entries of $A_k$:

| $k$ | $\lvert(A_k)_{21}\rvert$ | $\lvert(A_k)_{32}\rvert$ | $\lvert(A_k)_{43}\rvert$ |
|---|---|---|---|
| 10 | $1.692\times10^{-2}$ | $6.605\times10^{-2}$ | $8.256\times10^{-6}$ |
| 20 | $9.644\times10^{-5}$ | $1.123\times10^{-3}$ | $6.307\times10^{-10}$ |
| 30 | $5.497\times10^{-7}$ | $1.905\times10^{-5}$ | $4.900\times10^{-14}$ |

The ratios of successive values at $k=30$ are $0.5964665$, $0.6652300$ and $0.3881816$: each subdiagonal entry decays at exactly the ratio $\lvert\lambda_{j+1}/\lambda_j\rvert$ belonging to its own position, confirming the rates in part 3. The diagonal at $k=30$ is $(8.3826999,\ 5.0000000,\ 3.3261499,\ 1.2911502)$, the eigenvalues in order of decreasing modulus.

Part 2 of the statement can be checked on the same run. The first column of $\bar Q_k$ is the power iterate from $e_1$, so column one of $A_k$ below the diagonal should reproduce the power iteration of part (a): at $k=20$ its norm is $9.64399\times10^{-5}$ and $(A_{20})_{11} = 8.382699937$, which are exactly the residual $\eta(q_{20})$ and the Rayleigh quotient $\rho(q_{20})$ in the table of part (a).

**(e) Shifted QR.** Repeat with the shift $\sigma_k = (A_k)_{44}$ at every step, that is, factor $A_k-\sigma_kI = Q_{k+1}R_{k+1}$ and set $A_{k+1} = R_{k+1}Q_{k+1}+\sigma_kI$. Starting from $\lvert(A_0)_{43}\rvert = 2$:
$$
\lvert(A_k)_{43}\rvert = 7.51\times10^{-1},\ 6.58\times10^{-1},\ 2.30\times10^{-1},\ 3.54\times10^{-3},\ 1.12\times10^{-8},\ 3.41\times10^{-25}
\quad (k=1,\dots,6),
$$
with $(A_6)_{44} = 1.291150202885637$, matching $\lambda_4$ to all sixteen digits shown. The last three entries show the cubic law again, $(3.54\times10^{-3})^3 = 4.4\times10^{-8}$ and $(1.12\times10^{-8})^3 = 1.4\times10^{-24}$; this is the Rayleigh quotient iteration of part (c), hidden in the corner of the matrix. Six steps and one deflation, against the thirty of part (d) for a result still only accurate to seven digits in the first subdiagonal.
:::

:::application[Normal modes, and why nobody computes the whole spectrum]{provenance=original}
Discretise $-u'' = \lambda u$ on $(0,1)$ with $u(0)=u(1)=0$ by second differences on a grid of $N = 200$ interior points, $h = 1/201$ (:ref[]{to=num.finite-differences}). The matrix is $h^{-2}$ times the tridiagonal matrix with $2$ on the diagonal and $-1$ beside it, and its eigenvalues are known exactly, $\lambda_k = 4h^{-2}\sin^2(k\pi h/2)$, which makes it a fair test. The smallest is $\lambda_1 = 9.869403$ against the continuum value $\pi^2 = 9.869604$, a relative error of $-2.0\times10^{-5}$ of the expected size $O(h^2)$; the largest is $\lambda_{200} = 1.6159\times10^{5}$.

A physicist wants the low modes: they are the ones the continuum problem has, and the high ones are discretisation artefacts. The numbers show why the choice of algorithm is not a detail.

- **Power iteration is useless here.** It converges to the *largest* eigenvalue, and does so at the ratio $\lambda_{199}/\lambda_{200} = 0.9998168$. Reaching ten digits would take $\ln(10^{-10})/\ln(0.9998168) \approx 1.26\times10^{5}$ matrix-vector products, for an eigenvalue of no physical interest.
- **Inverse iteration is immediate.** With $\sigma = 0$ the convergence factor is $\lambda_1/\lambda_2 = 0.2500153$, so ten digits take $\ln(10^{-10})/\ln(0.25) \approx 17$ steps. Each step is one solve with a tridiagonal matrix, $O(N)$ work after a single $O(N)$ factorization (:ref[]{to=num.linear-systems-numerics}): the whole computation costs less than two steps of the power iteration cost on a dense matrix of the same size.
- **Shift-invert reaches the interior.** For the tenth mode, put $\sigma = 985$. The nearest eigenvalue is $\lambda_{10} = 984.952862$ at distance $0.0471$ and the next nearest is $\lambda_9$ at distance $186.9$, so the convergence factor is $2.522\times10^{-4}$: three steps shrink the eigenvector angle by $(2.522\times10^{-4})^{3} = 1.6\times10^{-11}$, eleven digits in the eigenvector, and, by the squaring in part 2 of the power iteration statement, far more than that in the eigenvalue. ($\lambda_{10}$ differs from the continuum $100\pi^2 = 986.9604$ by $-2.0\times10^{-3}$ in relative terms, a hundred times the error in $\lambda_1$ — the discretisation error grows with the mode number, which is the real limit on how far up the spectrum this grid can be trusted.)

The same three-way choice recurs wherever a matrix eigenvalue problem comes out of physics: the normal modes of a structure or a molecule (:ref[]{to=linalg.normal-modes}), the band energies of a tight-binding Hamiltonian, the stationary distribution of a Markov chain (the classic use of the power method, since the distribution *is* the dominant eigenvector), and the stability of a fixed point, where only the sign of the largest real part is wanted. For a dense matrix of moderate size, the reduction plus shifted QR of the method above returns the whole spectrum for a small multiple of $n^3$ operations and is what every library routine does. For the very large sparse problems of quantum chemistry it is not available at any price: a dense $n^3$ is unthinkable and even storing $\bar Q_k$ is impossible, so one computes a few eigenvalues by Krylov subspace methods, built on the same matrix-vector product as the power iteration but extracting far more from it, exactly as the conjugate gradient method does for linear systems (:ref[]{to=num.linear-systems-numerics}). :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§6.4, p. 314 and footnote"} give the scale that this makes possible: a configuration-interaction calculation that obtained eigenvalues and eigenvectors of a matrix of dimension beyond $10^9$.
:::
