---
id: linalg.matrix-norms-conditioning
title: Matrix norms and condition numbers
kind: definition
level: core
summary: Defines induced matrix norms and the spectral norm, defines the condition number and expresses it through the singular values, and states how far the solution of a linear system can move when the data are perturbed.
prereqs: [linalg.svd, linalg.inner-product-spaces, linalg.quadratic-forms, found.compactness]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§10.6, 'Linear Operators, Spectral Bounds, and Condition Numbers': spectral radius and the Rayleigh-quotient bounds p. 771; the induced operator norms of an operator on one space, the identity rho(M) = ||M|| for self-adjoint M, Lemma 10.6.1, and the definition of the A-condition number kappa_A(M) = ||M||_A ||M^{-1}||_A, introduced there as an extension of 'the standard notion' kappa(M) = ||M|| ||M^{-1}|| to the A-inner product, p. 772"
    pages: "771-772"
    role: induced operator norms; the spectral norm of a self-adjoint operator equals its spectral radius; the condition number, which we use in the plain (standard) form that the page's A-condition number extends
  - work: strauss-2008
    loc: "§1.5, the discussion of A u = b as a well-posed or ill-posed problem and of ill-conditioned matrices, pp. 26-27"
    pages: "26-27"
    role: the notion of an ill-conditioned matrix, and conditioning as the stability half of well-posedness
  - work: arfken-2013
    loc: "Exercise 5.1.3 and its note on the Hilbert matrix, p. 267"
    pages: "267"
    role: the Hilbert matrix as a standard ill-conditioned example arising from least-squares fitting
---

:::definition[Induced matrix norm]{provenance=adapted src="stakgold-holst-2011:§10.6, p. 772"}
Fix **one** norm $\|\cdot\|$, given on $\mathbb{C}^k$ for every $k$ and so available on the domain and on the codomain alike; as in :cite{work=stakgold-holst-2011 loc="§10.6, p. 772"}, where the operator acts on a single space, it is the same norm on both sides. The **induced** (or **operator**) norm of an $m \times n$ complex matrix $A$ is

$$
\|A\| = \max_{x \neq 0} \frac{\|A x\|}{\|x\|} = \max_{\|x\| = 1} \|A x\| ,
$$

the maximum being attained because the unit sphere is compact and $x \mapsto \|Ax\|$ continuous (:ref[compactness]{to=found.compactness}). It is the smallest number $c$ with $\|Ax\| \le c \|x\|$ for all $x$. Because one and the same norm is used on both spaces, induced norms satisfy $\|I\| = 1$ and are **submultiplicative**: $\|A B\| \le \|A\| \|B\|$ whenever the product is defined. Both properties need that agreement: if different norms are allowed on the two spaces, $\|\cdot\|_\infty$ on the domain and $\|\cdot\|_1$ on the codomain give $\|I_n\| = n$, and $\|\cdot\|_1$ on the domain with $\|\cdot\|_\infty$ on the codomain give $\|M\| = \max_{i,j}|M_{ij}|$, for which the $2 \times 2$ all-ones $A$ has $\|A^2\| = 2 > 1 = \|A\|^2$.

Taking the vector norms $\|x\|_q = \bigl(\sum_i |x_i|^q\bigr)^{1/q}$ for $1 \le q < \infty$, and $\|x\|_\infty = \max_i |x_i|$, gives

$$
\|A\|_1 = \max_{j} \sum_{i} |A_{ij}| \ \ (\text{largest column sum}), \qquad
\|A\|_\infty = \max_{i} \sum_{j} |A_{ij}| \ \ (\text{largest row sum}),
$$

and the **spectral norm** $\|A\|_2$, induced by the Euclidean norm. The **Frobenius norm** $\|A\|_F = \bigl(\sum_{i,j}|A_{ij}|^2\bigr)^{1/2}$ is submultiplicative but is *not* an induced norm, since $\|I_n\|_F = \sqrt{n} \neq 1$ for $n \ge 2$. It is not induced even by a *pair* of norms, one on each space — but that value $\sqrt n$ does not show it, being itself $\|I_n\|$ for the pair ($\|\cdot\|_\infty$ on the domain, $\|\cdot\|_2$ on the codomain). What shows it is the behaviour on rank-one matrices; see step 0 of the proof below.
:::

:::statement[The spectral norm and the spectrum]{provenance=adapted src="stakgold-holst-2011:§10.6, pp. 771-772 (including Lemma 10.6.1)"}
Let $A$ be a complex matrix and $\rho(A) = \max\{|\lambda| : \lambda \in \sigma(A)\}$ its spectral radius (defined for square $A$).

1. $\|A\|_2 = s_1(A)$, the largest singular value of $A$, equivalently $\|A\|_2 = \sqrt{\lambda_{\max}(A^\dagger A)}$; see :ref[the singular value decomposition]{to=linalg.svd}.
2. If $A$ is square then $\rho(A) \le \|A\|$ for every induced norm.
3. If $A$ is Hermitian then $\|A\|_2 = \rho(A) = \max_k |\lambda_k|$, and $\lambda_{\min}(A) \le x^\dagger A x / x^\dagger x \le \lambda_{\max}(A)$ for $x \neq 0$.
4. Inequality 2 can be strict: $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ has $\rho(A) = 0$ and $\|A\|_2 = 1$.
:::

:::idea{provenance=original}
Everything here comes from one change of coordinates. In the singular bases $A$ is a diagonal matrix, so its effect on the unit sphere is a list of independent scalings, and the norm is the largest of them. The spectral radius, by contrast, only tests the single direction of an eigenvector, so it can never exceed a quantity defined as a maximum over all directions; it misses the stretching that happens off the eigenvectors, which is why a nilpotent matrix can have radius zero and norm one. When $A$ is Hermitian there is no off-eigenvector stretching left to miss, and the two agree.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§10.6, pp. 771-772, including Lemma 10.6.1"}
0. **The claims of the definition.** $\|I\| = 1$ because $\|Ix\| = \|x\|$ for every $x$ — which is a statement about one norm, and is where the convention that the same norm is used on both spaces is needed. Submultiplicativity: $\|ABx\| \le \|A\|\,\|Bx\| \le \|A\|\,\|B\|\,\|x\|$, by applying the defining inequality $\|My\| \le \|M\|\,\|y\|$ first to $M = A$ with $y = Bx$ and then to $M = B$; here too the intermediate vector $Bx$ is measured in the one norm shared by the two spaces. For the $1$-norm, $\|Ax\|_1 = \sum_i \bigl| \sum_j A_{ij}x_j \bigr| \le \sum_j |x_j| \sum_i |A_{ij}| \le \bigl( \max_j \sum_i |A_{ij}| \bigr) \|x\|_1$ by the triangle inequality, with equality at $x = e_{j^\ast}$ for a column $j^\ast$ of largest sum. For the $\infty$-norm, $\|Ax\|_\infty = \max_i \bigl| \sum_j A_{ij}x_j \bigr| \le \bigl( \max_i \sum_j |A_{ij}| \bigr)\|x\|_\infty$, with equality at the $x$ having $\|x\|_\infty = 1$ and $x_j = \overline{A_{i^\ast j}}/|A_{i^\ast j}|$ (or $1$ where that entry vanishes) for a row $i^\ast$ of largest sum, since then $(Ax)_{i^\ast} = \sum_j |A_{i^\ast j}|$. Finally $\|I_n\|_F = \sqrt{n} \neq 1$ for $n \ge 2$, and every induced norm has $\|I\| = 1$, so the Frobenius norm is not an induced norm.

**Not even a pair of norms induces $\|\cdot\|_F$**, for $n \ge 2$. This last argument is ours; the cited page does not discuss the Frobenius norm. Suppose some norm $a$ on the domain $\mathbb{C}^n$ and some norm $b$ on the codomain $\mathbb{C}^n$ had $\max_{\|x\|_a = 1}\|Ax\|_b = \|A\|_F$ for every $A$. Write $\|v\|_{a^\ast} = \max_{\|x\|_a = 1} |v^\dagger x|$, a norm on $\mathbb{C}^n$. Test the hypothesis on the rank-one matrices $A = u v^\dagger$: since $(uv^\dagger)x = (v^\dagger x)\,u$,
$$
\max_{\|x\|_a = 1} \|u v^\dagger x\|_b = \|u\|_b \max_{\|x\|_a = 1}|v^\dagger x| = \|u\|_b\,\|v\|_{a^\ast} ,
\qquad \|u v^\dagger\|_F = \|u\|_2 \|v\|_2 ,
$$
the second because $\sum_{i,j}|u_i \overline{v_j}|^2 = \|u\|_2^2\|v\|_2^2$. So $\|u\|_b\,\|v\|_{a^\ast} = \|u\|_2\|v\|_2$ for all $u, v$. Fixing a $v_0$ with $\|v_0\|_2 = 1$ and putting $c = \|v_0\|_{a^\ast} > 0$ gives $\|u\|_b = \|u\|_2/c$ for every $u$; feeding that back with any fixed $u \neq 0$ gives $\|v\|_{a^\ast} = c\,\|v\|_2$ for every $v$. Now take any $x$ with $\|x\|_a = 1$ and use $v = x$ in the definition of $\|\cdot\|_{a^\ast}$: $c\,\|x\|_2 = \|x\|_{a^\ast} \ge |x^\dagger x| = \|x\|_2^2$, so $\|x\|_2 \le c$ on the whole unit sphere of $a$. Hence
$$
\max_{\|x\|_a = 1}\|I_n x\|_b = \max_{\|x\|_a = 1} \frac{\|x\|_2}{c} \ \le\ 1 ,
$$
whereas the hypothesis demands the value $\|I_n\|_F = \sqrt{n} > 1$. No such pair exists. (This is the argument the definition block promises; the value $\|I_n\|_F = \sqrt n$ alone does not settle the question, because $\sqrt n$ is the pair-induced norm of $I_n$ for $\|\cdot\|_\infty$ on the domain and $\|\cdot\|_2$ on the codomain.)

1. **Part 1.** Take an SVD $A = U S V^\dagger$ (:ref[the singular value decomposition]{to=linalg.svd}). For $x \neq 0$ put $y = V^\dagger x$, so $\|y\|_2 = \|x\|_2$ since $V$ is unitary, and
$$
\|Ax\|_2^2 = \|U S y\|_2^2 = \|S y\|_2^2 = \sum_{i \le p} s_i^2 |y_i|^2 \ \le\ s_1^2 \|y\|_2^2 = s_1^2\|x\|_2^2 ,
$$
the first equality again by unitarity. Equality holds at $x = v_1$, where $y = e_1$. Hence $\|A\|_2 = s_1$, and $s_1^2$ is the largest eigenvalue of $A^\dagger A$ by part 1 of the existence statement for the SVD, so $\|A\|_2 = \sqrt{\lambda_{\max}(A^\dagger A)}$.

2. **Part 2.** Let $\lambda$ be an eigenvalue of $A$ with $|\lambda| = \rho(A)$ and $x \neq 0$ an eigenvector. For any induced norm, $\|A\| \ge \|Ax\|/\|x\| = \|\lambda x\|/\|x\| = |\lambda|$ by absolute homogeneity of the vector norm, so $\|A\| \ge \rho(A)$.

3. **Part 3.** A Hermitian matrix is normal, so by part 5 of the SVD existence statement its singular values are the numbers $|\lambda_k|$ sorted decreasingly. With part 1 this gives $\|A\|_2 = \max_k |\lambda_k| = \rho(A)$, which is the matrix case of Lemma 10.6.1 of the cited section. The two-sided Rayleigh estimate $\lambda_{\min}(A) \le x^\dagger A x / x^\dagger x \le \lambda_{\max}(A)$ for $x \neq 0$ is :ref[the Rayleigh bounds]{to=linalg.quadratic-forms}.

4. **Part 4.** For $A = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$ the characteristic polynomial is $\lambda^2$, so $\sigma(A) = \{0\}$ and $\rho(A) = 0$. But $A^\dagger A = \operatorname{diag}(0, 1)$, whose largest eigenvalue is $1$, so $\|A\|_2 = 1$ by part 1. The inequality of part 2 is therefore strict here, and it cannot be reversed in general.

5. **A lemma for the blocks that follow: the inverse.** Nothing in parts 1-4 needs this step; it is recorded here, where the singular bases are at hand, because the condition number defined in the next block and the sensitivity bounds after it both use it. Let $A$ be square and invertible, so $p = n$ and $s_n > 0$. Inverting $A = USV^\dagger$ gives $A^{-1} = V S^{-1} U^\dagger$, and reversing the order of the columns of $V$ and of $U$ turns this into an SVD of $A^{-1}$ with singular values $1/s_n \ge \cdots \ge 1/s_1$. So $\|A^{-1}\|_2 = 1/s_n$ by part 1, and
$$
\kappa_2(A) = \|A\|_2 \|A^{-1}\|_2 = \frac{s_1}{s_n} ,
$$
which is the formula asserted in the definition below. If $A$ is Hermitian positive definite its singular values are its eigenvalues, all positive — by part 5 of the SVD existence statement (:ref[the singular value decomposition]{to=linalg.svd}), as in step 3 above, with the absolute values dropped because the eigenvalues are positive — so $\kappa_2(A) = \lambda_{\max}/\lambda_{\min}$. A unitary $Q$ has $Q^\dagger Q = I$, so every eigenvalue of $Q^\dagger Q$ is $1$ and every singular value of $Q$ is $1$, giving $\kappa_2(Q) = 1$. Two further consequences used below: applying $A^{-1}$ to $Av_i = s_i u_i$ gives $A^{-1}u_i = v_i/s_i$, and the computation of part 1 read from the other end gives $\|Ax\|_2^2 = \sum_i s_i^2|y_i|^2 \ge s_n^2\|x\|_2^2$, that is $\|Ax\|_2 \ge s_n \|x\|_2$ for every $x$. $\square$
:::

:::definition[Condition number]{provenance=adapted src="stakgold-holst-2011:§10.6, p. 772"}
For an invertible square matrix $A$ and an induced norm $\|\cdot\|$, the **condition number** is

$$
\kappa(A) = \|A\| \, \|A^{-1}\| \ \ge \ \|A A^{-1}\| = \|I\| = 1 .
$$

For a singular $A$ one sets $\kappa(A) = \infty$. In the spectral norm, with singular values $s_1 \ge \cdots \ge s_n > 0$,

$$
\kappa_2(A) = \frac{s_1}{s_n} ,
$$

and if $A$ is Hermitian positive definite this is $\lambda_{\max}/\lambda_{\min}$. A matrix with $\kappa$ close to $1$ is called **well-conditioned**, and one with $\kappa$ large **ill-conditioned**. Unitary and orthogonal matrices have $\kappa_2 = 1$.

What the cited page displays is the more general **$A$-condition number** $\kappa_A(M) = \|M\|_A\,\|M^{-1}\|_A$, built from the norm of an $A$-inner product and introduced there as an extension of "the standard notion"; the $\kappa$ above is that standard notion, the case in which the inner product is the Euclidean one.
:::

:::statement[Sensitivity of a linear system]{provenance=original}
Let $A$ be an invertible $n \times n$ matrix, $b \neq 0$, and $x$ the solution of $A x = b$. Fix any induced norm and write $\kappa = \kappa(A)$.

1. **Perturbed right-hand side.** If $A(x + \delta x) = b + \delta b$, then
$$
\frac{1}{\kappa}\, \frac{\|\delta b\|}{\|b\|} \ \le\ \frac{\|\delta x\|}{\|x\|} \ \le\ \kappa\, \frac{\|\delta b\|}{\|b\|} .
$$
In the spectral norm the upper bound is attained. So $\kappa$ is exactly the worst-case amplification of relative error, and no sharper constant exists.
2. **Perturbed matrix.** If $A + \delta A$ is invertible and $(A + \delta A)\hat{x} = b$, then
$$
\frac{\|\hat x - x\|}{\|\hat x\|} \ \le\ \kappa\, \frac{\|\delta A\|}{\|A\|} .
$$
3. **Distance to singularity.** In the spectral norm,
$$
\min\bigl\{\|\delta A\|_2 : A + \delta A \text{ is singular}\bigr\} = s_n = \frac{\|A\|_2}{\kappa_2(A)} ,
$$
the minimum being attained at $\delta A = -s_n u_n v_n^\dagger$. An ill-conditioned matrix is therefore literally a matrix that is relatively close to a singular one.
4. **Rule of thumb.** Solving $A x = b$ in arithmetic with unit roundoff $\varepsilon$ gives a relative error of order $\kappa(A)\, \varepsilon$: about $\log_{10}\kappa(A)$ of the available decimal digits are lost, whatever algorithm is used.
:::

:::idea{provenance=original}
Both bounds are the defining inequality of an induced norm used twice, once for $A$ and once for $A^{-1}$ — and the condition number is precisely the product of those two uses. Which way round you use them decides whether you get the upper or the lower bound, which is why the true amplification is trapped between $\kappa$ and $1/\kappa$ and not merely below $\kappa$. Sharpness is then a matter of aiming: put the data along the direction $A$ stretches most and the error along the one it stretches least. The distance to singularity is the same arithmetic read geometrically: $A$ moves every vector by at least $s_n$, so no smaller perturbation can manufacture a null vector, and one of size exactly $s_n$ can.
:::

:::proof{provenance=original}
Write $\|\cdot\|$ for the fixed induced norm and $\kappa = \|A\|\,\|A^{-1}\|$. Note $x \neq 0$, since $b = Ax \neq 0$.

1. **Part 1, upper bound.** Subtracting $Ax = b$ from $A(x + \delta x) = b + \delta b$ gives $A\,\delta x = \delta b$, so $\delta x = A^{-1}\delta b$ and $\|\delta x\| \le \|A^{-1}\|\,\|\delta b\|$. Separately $\|b\| = \|Ax\| \le \|A\|\,\|x\|$, which rearranges to $1/\|x\| \le \|A\|/\|b\|$. Multiplying the two inequalities,
$$
\frac{\|\delta x\|}{\|x\|} \ \le\ \|A^{-1}\|\,\|\delta b\| \cdot \frac{\|A\|}{\|b\|} = \kappa\, \frac{\|\delta b\|}{\|b\|} .
$$

2. **Part 1, lower bound.** Run the same two steps the other way round: $\delta b = A\,\delta x$ gives $\|\delta b\| \le \|A\|\,\|\delta x\|$, and $x = A^{-1}b$ gives $\|x\| \le \|A^{-1}\|\,\|b\|$, that is $1/\|b\| \le \|A^{-1}\|/\|x\|$. Multiplying,
$$
\frac{\|\delta b\|}{\|b\|} \ \le\ \|A\|\,\|\delta x\| \cdot \frac{\|A^{-1}\|}{\|x\|} = \kappa\, \frac{\|\delta x\|}{\|x\|} ,
$$
which is the lower bound after dividing by $\kappa > 0$.

3. **Part 1, the upper bound is attained in the spectral norm.** Let $A = USV^\dagger$ be an SVD. Take $b = s_1 u_1$; then $x = A^{-1}b = s_1 \cdot v_1/s_1 = v_1$ by step 5 of the previous proof, so $\|x\|_2 = 1$ and $\|b\|_2 = s_1$. Take $\delta b = \epsilon\, u_n$ with $\epsilon \neq 0$; then $\delta x = A^{-1}\delta b = \epsilon\, v_n/s_n$, so $\|\delta x\|_2 = |\epsilon|/s_n$. Hence
$$
\frac{\|\delta x\|_2/\|x\|_2}{\|\delta b\|_2/\|b\|_2} = \frac{|\epsilon|/s_n}{|\epsilon|/s_1} = \frac{s_1}{s_n} = \kappa_2(A) ,
$$
so no constant smaller than $\kappa_2$ can replace it in part 1. (For $n = 1$ the two directions coincide, but then $\kappa_2 = 1$ and the bound is an equality for every $\delta b$ anyway.)

4. **Part 2.** Subtracting $Ax = b$ from $(A + \delta A)\hat x = b$ gives $A\hat x + \delta A\,\hat x = Ax$, hence $A(\hat x - x) = -\delta A\, \hat x$ and $\hat x - x = -A^{-1}\,\delta A\,\hat x$. Taking norms, $\|\hat x - x\| \le \|A^{-1}\|\,\|\delta A\|\,\|\hat x\|$, and $\hat x \neq 0$ because $(A + \delta A)\hat x = b \neq 0$. Dividing by $\|\hat x\|$ and inserting $\|A\|/\|A\|$,
$$
\frac{\|\hat x - x\|}{\|\hat x\|} \ \le\ \|A^{-1}\|\,\|A\| \cdot \frac{\|\delta A\|}{\|A\|} = \kappa\, \frac{\|\delta A\|}{\|A\|} .
$$
The bound is in terms of $\|\hat x\|$, the computed vector, not $\|x\|$; that is what makes it an identity-free consequence of one line of algebra.

5. **Part 3, no singular matrix is nearer than $s_n$.** Suppose $\|\delta A\|_2 < s_n$. For every $x \neq 0$, the triangle inequality and $\|Ax\|_2 \ge s_n\|x\|_2$ (step 5 of the previous proof) give
$$
\|(A + \delta A)x\|_2 \ \ge\ \|Ax\|_2 - \|\delta A\, x\|_2 \ \ge\ \bigl( s_n - \|\delta A\|_2 \bigr)\|x\|_2 \ >\ 0 ,
$$
so $A + \delta A$ has trivial kernel and is invertible. Hence every $\delta A$ making $A + \delta A$ singular has $\|\delta A\|_2 \ge s_n$.

6. **Part 3, and one at exactly that distance.** Put $\delta A = -s_n u_n v_n^\dagger$. For any $x$, $\|u_n v_n^\dagger x\|_2 = |v_n^\dagger x| \,\|u_n\|_2 = |v_n^\dagger x| \le \|x\|_2$ by Cauchy-Schwarz, with equality at $x = v_n$, so $\|\delta A\|_2 = s_n$. And $(A + \delta A)v_n = s_n u_n - s_n u_n = 0$ with $v_n \neq 0$, so $A + \delta A$ is singular. The minimum is therefore $s_n$, attained there, and $s_n = s_1/\kappa_2(A) = \|A\|_2/\kappa_2(A)$ by step 5 of the previous proof.

7. **Part 4 is a rule of thumb, and the only part of this statement not proved.** Its basis is part 2 together with backward stability: a backward-stable solver returns an $\hat x$ that is the exact solution of a nearby system, $(A + \delta A)\hat x = b$ with $\|\delta A\|/\|A\|$ of order $\varepsilon$ (times a modest factor depending on $n$ and on the algorithm). Part 2 then bounds the relative error of $\hat x$ by $\kappa(A)$ times that, and $\log_{10}$ of the bound is the count of lost decimal digits. The clause "whatever algorithm is used" rests on step 3: merely rounding $b$ into the machine perturbs it by a relative $\varepsilon$, and for the worst $b$ and $\delta b$ that perturbation alone is amplified by exactly $\kappa$, so no algorithm can be uniformly better. What the rule of thumb adds to this is the empirical claim that the orders of magnitude are typically attained, which is not a theorem. $\square$
:::

:::note{provenance=original}
A matrix norm measures how much a matrix can stretch a vector; the condition number measures how much *worse* the stretching can be in one direction than in another. That ratio, not the size of the determinant, is what decides whether a linear system can be solved from imperfect data: $\kappa(A)$ is the factor by which relative errors in $b$ or in $A$ may be magnified in the answer, and the quantity to inspect before trusting a numerical solution or a fitted parameter.
:::

:::remark[Traps and conventions]{provenance=adapted src="strauss-2008:§1.5, pp. 26-27; arfken-2013:Exercise 5.1.3 note, p. 267"}
**A small determinant does not mean ill-conditioned, and a large one does not mean well-conditioned.** $\varepsilon I_n$ has determinant $\varepsilon^n$, as small as you like, yet $\kappa_2 = 1$: it is perfectly conditioned, merely scaled. Conversely $\operatorname{diag}(10^{6}, 10^{-6})$ has determinant $1$ and $\kappa_2 = 10^{12}$. Conditioning is about the *ratio* of the extreme singular values, which is invariant under scaling $A \mapsto cA$, while the determinant is not.

**Conditioning is a property of the problem, not of the algorithm.** Strauss (§1.5, pp. 26-27) places it as the stability requirement in well-posedness: a nonsingular matrix with one very small eigenvalue gives a unique solution that nevertheless moves a great deal when $b$ is perturbed slightly, and no choice of solver can repair that. The sharp condition is a small smallest *singular* value, which is the weaker requirement: $s_n \le |\lambda|$ for every eigenvalue $\lambda$, since $\|Ax\|_2 \ge s_n\|x\|_2$ applied to an eigenvector gives $|\lambda| \ge s_n$, so a small eigenvalue forces a small $s_n$ but not conversely. A standard example is the Hilbert matrix $A_{ij} = 1/(i + j + 1)$ with $i, j = 0, \dots, n-1$, which arises when a function is fitted by a power series in the mean-square sense and whose determinant and smallest singular value shrink extremely fast with $n$ (Arfken, Weber and Harris note $\det A = 3.7 \times 10^{-12}$ already at $n = 5$, Exercise 5.1.3, p. 267).

**$\kappa$ depends on the norm.** Different induced norms give different values, though they are equivalent up to factors depending only on $n$ (for example $n^{-1}\kappa_\infty \le \kappa_2 \le n\,\kappa_\infty$), so "ill-conditioned" is norm-independent as a qualitative statement. Always say which norm you mean; $\kappa$ with no subscript usually means $\kappa_2$.

**$\rho(A)$ is not a norm.** It fails the triangle inequality and vanishes on non-zero nilpotent matrices, so it cannot be used in the bounds above; inequality 2 of the spectral-norm statement runs one way only.

**Non-square matrices.** $\kappa_2(A) = s_1/s_r$ with $r = \operatorname{rank} A$ is also used for rectangular $A$ and governs least-squares sensitivity, but then $\|A\|_2 \|A^{+}\|_2$ replaces $\|A\|\|A^{-1}\|$ and the bounds of parts 1-2 need modification.
:::

:::example[A 2 x 2 matrix with condition number exactly 100]{provenance=original}
Take

$$
A = \begin{pmatrix} 101 & 99 \\ 99 & 101 \end{pmatrix} .
$$

**1. Spectrum and singular values.** $A$ is real symmetric, and $A(1,1)^{\mathsf T} = (200, 200)^{\mathsf T}$, $A(1,-1)^{\mathsf T} = (2, -2)^{\mathsf T}$, so the eigenvalues are $200$ and $2$ with orthonormal eigenvectors

$$
w_1 = \tfrac{1}{\sqrt2}(1,1)^{\mathsf T}, \qquad w_2 = \tfrac{1}{\sqrt2}(1,-1)^{\mathsf T} .
$$

Both eigenvalues are positive, so $A$ is symmetric positive definite and its singular values are its eigenvalues: $s_1 = 200$, $s_2 = 2$, with $u_1 = v_1 = w_1$ and $u_2 = v_2 = w_2$.

**2. The norms.** By part 1 of the spectral-norm statement, $\|A\|_2 = 200$. The largest column sum and the largest row sum are both $101 + 99 = 200$, so $\|A\|_1 = \|A\|_\infty = 200$ as well, and $\|A\|_F = \sqrt{2(101^2 + 99^2)} = \sqrt{40004} = 2\sqrt{10001} \approx 200.0100$.

**3. The inverse and the condition numbers.** $\det A = 101^2 - 99^2 = (101-99)(101+99) = 400$, so

$$
A^{-1} = \frac{1}{400}\begin{pmatrix} 101 & -99 \\ -99 & 101\end{pmatrix} .
$$

Then $\|A^{-1}\|_2 = 1/s_2 = \tfrac12$ and $\|A^{-1}\|_1 = (101+99)/400 = \tfrac12$, giving

$$
\kappa_2(A) = \frac{s_1}{s_2} = \frac{200}{2} = 100 , \qquad \kappa_1(A) = 200 \cdot \tfrac12 = 100 .
$$

Note that $\det A = 400$ is not small: conditioning and the determinant are unrelated, as the remark above says.

**4. The worst case is attained.** Take $b = (200, 200)^{\mathsf T}$, which is a multiple of $u_1$; then $x = (1, 1)^{\mathsf T}$, since $Ax = (200, 200)^{\mathsf T}$. Perturb along $u_2$: $\delta b = (0.1, -0.1)^{\mathsf T}$. Then

$$
\delta x = A^{-1}\delta b = \frac{1}{400}\begin{pmatrix} 101 \cdot 0.1 + 99 \cdot 0.1 \\ -99 \cdot 0.1 - 101 \cdot 0.1 \end{pmatrix} = \frac{1}{400}\begin{pmatrix} 20 \\ -20 \end{pmatrix} = \begin{pmatrix} 0.05 \\ -0.05\end{pmatrix} .
$$

The relative sizes are

$$
\frac{\|\delta b\|_2}{\|b\|_2} = \frac{0.1\sqrt2}{200\sqrt2} = 5 \times 10^{-4} , \qquad
\frac{\|\delta x\|_2}{\|x\|_2} = \frac{0.05\sqrt2}{\sqrt2} = 5 \times 10^{-2} ,
$$

a ratio of exactly $100 = \kappa_2(A)$: a perturbation of the data in the fourth decimal place has moved the answer in the second.

**5. The best case, for contrast.** Keep the same $b$ and the same $\|\delta b\|_2$, but point the perturbation along $u_1$ instead: $\delta b = (0.1, 0.1)^{\mathsf T}$. Then $\delta x = \frac{1}{400}(0.2, 0.2)^{\mathsf T} = (5\times10^{-4}, 5\times10^{-4})^{\mathsf T}$ and $\|\delta x\|_2/\|x\|_2 = 5 \times 10^{-4}$, an amplification of $1$. The two experiments differ only in the direction of $\delta b$, and part 1 confines every intermediate case between the factors $1/100$ and $100$.

**6. Distance to singularity.** Part 3 says the nearest singular matrix is at spectral distance $s_2 = 2$ and is reached at $\delta A = -s_2 u_2 u_2^{\mathsf T}$. Here

$$
\delta A = -2 \cdot \tfrac12 \begin{pmatrix} 1 & -1 \\ -1 & 1\end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} , \qquad A + \delta A = \begin{pmatrix} 100 & 100 \\ 100 & 100\end{pmatrix} ,
$$

which is indeed singular, and $\|\delta A\|_2 = 2$. Relative to $\|A\|_2 = 200$, this matrix is only $1\% = 1/\kappa_2(A)$ away from being singular — the geometric meaning of $\kappa_2 = 100$.

**7. Digits.** $\log_{10}\kappa_2(A) = 2$, so part 4 predicts the loss of about two decimal digits. In IEEE double precision, where the unit roundoff is $\varepsilon \approx 1.1 \times 10^{-16}$, a solution of $Ax = b$ should be trusted to a relative accuracy of about $10^{-14}$ and no better.
:::

:::application{provenance=original}
- **Never form the normal equations if you can avoid it.** The singular values of $A^\dagger A$ are the squares of those of $A$, so $\kappa_2(A^\dagger A) = \kappa_2(A)^2$. Solving a least-squares problem through $A^\dagger A x = A^\dagger b$ therefore squares the condition number and doubles the number of decimal digits lost — from $\log_{10}\kappa_2(A)$ to $2\log_{10}\kappa_2(A)$, so that double precision and $\kappa_2(A) = 10^{4}$ leave about eight good digits instead of twelve — while a QR or SVD factorisation of $A$ itself works with $\kappa_2(A)$. This single inequality is why numerical libraries fit models by orthogonal factorisation rather than by the textbook normal equations.

- **Fitting a polynomial, and why high degree fails.** Least-squares fitting of a function on $[0,1]$ by a power series leads to the Hilbert matrix $A_{ij} = 1/(i+j+1)$ with $i, j = 0, \dots, n-1$, whose singular values decay geometrically: $\kappa_2 \approx 4.8 \times 10^{5}$ already at $n = 5$ and $\approx 1.6 \times 10^{13}$ at $n = 10$. At $n = 10$ double precision leaves about three correct digits in the fitted coefficients, whatever the solver. The cure is not a better solver but a better basis — orthogonal polynomials, for which the corresponding Gram matrix is diagonal, and the identity once they are normalised, so that $\kappa_2 = 1$. Without normalisation $\kappa_2$ is the ratio of the extreme squared norms, which stays modest: for the Legendre polynomials, with $\int_{-1}^{1} P_k^2 = 2/(2k+1)$, degrees up to $10$ give $\kappa_2 = 21$.

- **Discretised differential operators get worse as the mesh is refined.** The standard second-difference approximation of $-d^2/dx^2$ on $[0,1]$ with Dirichlet conditions and $N$ interior points, spacing $h = 1/(N+1)$, is symmetric positive definite with eigenvalues $(4/h^2)\sin^2\bigl(k\pi h/2\bigr)$, so
$$
\kappa_2 = \cot^2\!\Bigl( \frac{\pi h}{2} \Bigr) \approx \frac{4}{\pi^2 h^2} ,
$$
which is $4.13 \times 10^{3}$ at $N = 100$ and grows like $N^2$. Accuracy and conditioning therefore pull in opposite directions, the iteration count of conjugate gradients grows like $\sqrt{\kappa_2} \sim N$, and this is the reason multigrid and other preconditioners exist: they replace the system by an equivalent one whose condition number does not blow up with $h$.

- **Inverse problems in the geosciences and in imaging.** Recovering a source distribution from remote measurements — seismic velocity from travel times, atmospheric composition from radiances, an image from projections — discretises to an $Ax = b$ whose singular values decay towards zero, so $\kappa_2$ is enormous and the relation of part 1 says the inversion will amplify measurement noise by that factor. The practical response is to accept a different problem: truncate the :ref[singular value expansion]{to=linalg.svd} or add a Tikhonov penalty, replacing $A$ by a nearby operator of moderate condition number and trading resolution for stability. The condition number is the number that quantifies the trade.

- **Trusting an eigenvector computation.** Route 1 of :ref[the matrix exponential]{to=linalg.matrix-exponential} computes $f(A) = S f(\Lambda) S^{-1}$ from an eigenbasis. The relevant conditioning is not $\kappa(A)$ but $\kappa(S)$, which blows up as $A$ approaches a defective matrix, because two eigenvectors then become nearly parallel. The same quantity controls the sensitivity of computed eigenvalues, which is why nearly degenerate normal modes of a structure, or nearly crossing energy levels, demand care that well-separated ones do not.
:::
