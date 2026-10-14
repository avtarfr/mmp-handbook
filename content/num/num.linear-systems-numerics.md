---
id: num.linear-systems-numerics
title: Solving linear systems numerically
kind: method
level: core
summary: Gaussian elimination as an LU factorization with row interchanges, its cubic cost and why the interchanges are not optional; the Jacobi and Gauss-Seidel iterations and the spectral radius that decides whether they converge; and the conjugate gradient method, which minimises the energy norm of the error over a Krylov subspace and converges at a rate set by the square root of the condition number.
prereqs: [linalg.linear-systems, linalg.matrix-norms-conditioning, num.floating-point-errors, linalg.jordan-form, funcan.banach-fixed-point, spec.chebyshev-polynomials]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§8.18.2, the LU decomposition, pp. 296-297: the factorization A = LU written out in components for the 3x3 case with unit diagonal in L, Eq. (8.125)-(8.126), the order in which the entries are determined, and the solution of Ax = b as the two triangular systems Ly = b and Ux = y. §27.3, pp. 995-999: §27.3.1 Gaussian elimination with interchange, the rule of reordering the equations before each elimination so that the largest remaining coefficient in modulus sits on the leading diagonal, and the worked three-variable system (27.22); §27.3.2 Gauss-Seidel iteration, the rescaling to unit diagonal (27.24), the splitting C = I - F with F = L + U into strictly lower and strictly upper parts (27.27) and the iteration (27.28) that uses the components of x already updated; §27.3.3, the remark that the operation count for a general matrix equation grows roughly as N^3 while a tridiagonal system costs only O(N), p. 998"
    pages: "296-297, 995-999"
    role: the LU factorization and the two-triangular-solve algorithm; pivoting by largest modulus (elimination with interchange); the Gauss-Seidel iteration in the form that uses the latest components; the cubic cost of a dense solve against the linear cost of a tridiagonal one
  - work: kreyszig-1978
    loc: "§5.2 Application of Banach's theorem to linear equations, pp. 307-313: the opening comparison of direct and iterative methods, with the counts that the usual direct methods need about n^3/3 arithmetical operations and that rounding errors in an iteration are damped out, p. 307; the max metric (1) on R^n, the affine map T x = Cx + b (2) and the contraction constant alpha = max_j sum_k |c_jk| (3), pp. 307-308; Theorem 5.2-1, the row sum criterion (5) and the a posteriori and a priori error bounds (7), p. 309; the splitting A = B - G and the induced iteration (9), p. 309; the Jacobi iteration 5.2-2, Eqs. (10)-(11) and the row sum criterion (12), (12*) in terms of the entries of A, p. 310; the Gauss-Seidel iteration 5.2-3, Eqs. (13)-(14) and the remark, stated without proof, that (12) is also sufficient for it, pp. 311-312; Problem 4, p. 313, which records that spectral radius below 1 is necessary and sufficient for convergence, and Problems 5 and 6, p. 313, giving a system where Jacobi diverges while Gauss-Seidel converges and a system where the reverse happens"
    pages: "307-313"
    role: the contraction-mapping treatment of a stationary iteration, with the row sum criterion, the explicit error bounds, and the matrix forms of the Jacobi and Gauss-Seidel iterations; the operation count for a direct solve; the two counterexamples showing the two iterations are not comparable
  - work: stakgold-holst-2011
    loc: "§10.6 Iterative methods for discretized linear equations, pp. 772-801: Algorithm 10.6.1, the basic linear method u^{i+1} = u^i + B(f - Au^i) for an approximate inverse B, the error recursion (10.6.4) and Theorem 10.6.1, that spectral radius of I - BA below 1 is necessary and sufficient for convergence from an arbitrary start, p. 773; Algorithm 10.6.2, the preconditioned conjugate gradient method of Hestenes and Stiefel, which is the stated algorithm with B = I, p. 778; the statement that the method converges in n steps, p. 778; the error-polynomial representation, the minimisation of the energy norm over the Krylov subspace and the reduction to a minimax problem over the spectrum, p. 779; the resulting contraction bound (10.6.9) through the shifted and scaled Chebyshev polynomials, and Lemma 10.6.9 identifying the ratio of extreme eigenvalues with a condition number, p. 780; the identification of the Richardson, Jacobi, Gauss-Seidel and SOR iterations as choices of B in Eqs. (10.6.27)-(10.6.30), p. 799; Theorem 10.6.4 on regular splittings of an M-matrix, and the spectral radii 1 - O(h^2) for Richardson, Jacobi and Gauss-Seidel and 1 - O(h) for SOR on the model Poisson problem, together with the squaring relation between the Jacobi and Gauss-Seidel spectral radii for consistently ordered matrices with Property A, p. 800"
    pages: "772-801"
    role: the splitting framework as an approximate inverse, the spectral-radius convergence criterion, the conjugate gradient algorithm and its three properties (Krylov minimisation, finite termination, the square-root-of-condition-number contraction bound), and the asymptotic behaviour of the classical iterations on a discretized elliptic problem
---

:::note{provenance=original}
**What it means.** Solving $Ax = b$ is the inner loop of almost every computation in applied science, and there are exactly two strategies. A **direct** method does a fixed amount of arithmetic -- about $n^3/3$ multiply-add pairs -- and returns the answer; its only enemy is rounding, and the whole content of the subject is the row interchanges that keep rounding under control. An **iterative** method produces a sequence converging to the answer; it never touches a matrix entry that is zero, so it is the only option when $n$ is a million and $A$ is sparse, and its content is the question of how fast the sequence converges. This unit gives the direct method, the two classical iterations, and the one iteration that is not classical and not stationary -- the conjugate gradient method -- which in a precise sense extracts the best possible answer from the work it has done.
:::

:::definition[LU factorization, partial pivoting, splitting, residual]{provenance=adapted src="rhb-2006:§8.18.2, Eq. (8.125)-(8.126), pp. 296-297, and §27.3.1, p. 995; kreyszig-1978:§5.2, the splitting A = B - G and the iteration (9), p. 309"}
Let $A$ be a real $n \times n$ matrix and $b \in \mathbb{R}^n$.

An **LU factorization** of $A$ is $A = LU$ with $L$ **unit lower triangular** ($\ell_{ii} = 1$, $\ell_{ij} = 0$ for $j > i$) and $U$ upper triangular. Given one, $Ax = b$ is solved by **forward substitution** $Ly = b$ followed by **back substitution** $Ux = y$, each a triangular system solved one entry at a time.

A **permutation matrix** $P$ is the identity with its rows permuted; $PA$ is $A$ with its rows permuted the same way. **Gaussian elimination with partial pivoting** is the algorithm that, at step $k$, exchanges row $k$ with the row below it carrying the largest entry of column $k$ in modulus, then eliminates below the diagonal. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.3.1, p. 995"} call this "elimination with interchange" and give the reason: it stops a small number arriving on the diagonal and being divided by.

A **splitting** of $A$ is a decomposition $A = M - N$ with $M$ invertible and cheap to invert. It defines the **stationary iteration**
$$
M x^{m+1} = N x^{m} + b, \qquad \text{equivalently} \qquad x^{m+1} = C x^{m} + d, \quad C = M^{-1}N = I - M^{-1}A, \quad d = M^{-1}b ,
$$
with **iteration matrix** $C$. Writing $A = D - L - U$ with $D$ the diagonal, $-L$ the strictly lower part and $-U$ the strictly upper part, the two classical choices are
$$
\textbf{Jacobi: } M = D, \qquad\qquad \textbf{Gauss-Seidel: } M = D - L .
$$
Stakgold and Holst write the same thing as $x^{m+1} = x^m + B(b - Ax^m)$ with $B = M^{-1}$ an **approximate inverse** of $A$, so that $C = I - BA$ is the **error propagator**; Jacobi is $B = D^{-1}$ and Gauss-Seidel is $B = (D-L)^{-1}$.

For an approximation $\hat{x}$ the **residual** is $r = b - A\hat{x}$ and the **error** is $x - \hat{x} = A^{-1}r$. They are different things, and $\kappa(A) = \|A\|\,\|A^{-1}\|$ of :ref[]{to=linalg.matrix-norms-conditioning} is exactly the factor by which they may differ in relative terms.
:::

:::statement[Gaussian elimination: existence, pivots, and cost]{provenance=original}
Let $A$ be $n \times n$.

**(i) Without pivoting.** $A$ has an LU factorization with $L$ unit lower triangular if and only if the elimination never meets a zero pivot; a sufficient condition is that every leading principal submatrix $A_{1:k,1:k}$ is nonsingular, $k = 1,\dots,n$. When it exists and $A$ is nonsingular -- equivalently, when $U$ has no zero on its diagonal -- the factorization is unique. (For singular $A$ it need not be: $\bigl(\begin{smallmatrix}0&0\\0&0\end{smallmatrix}\bigr) = LU$ for every unit lower triangular $L$ and $U = 0$.)

**(ii) With pivoting.** For **every** nonsingular $A$ there is a permutation matrix $P$ with
$$
PA = LU ,
$$
$L$ unit lower triangular and $U$ upper triangular and nonsingular. Partial pivoting produces such a $P$, and the multipliers it produces satisfy $|\ell_{ij}| \le 1$ for all $i > j$.

**(iii) Cost.** Factorization costs
$$
\sum_{k=1}^{n-1}(n-k)^2 = \frac{n^3}{3}-\frac{n^2}{2}+\frac{n}{6}
$$
multiply-subtract pairs together with $n(n-1)/2$ divisions, so $\tfrac23 n^3 + O(n^2)$ individual floating-point operations. Each subsequent right-hand side costs $n(n-1)$ further multiply-subtract pairs and $n$ divisions, that is $O(n^2)$: solving $k$ systems with the same matrix costs $n^3/3 + k n^2$, not $k n^3/3$. :cite[Kreyszig]{work=kreyszig-1978 loc="§5.2, p. 307"} quotes the figure as "about $n^3/3$ arithmetical operations", counting a multiply and the subtraction that follows it as one; the two counts agree up to that convention.

**(iv) Determinant.** $\det A = \det(P)^{-1}\prod_{i} u_{ii} = (-1)^{s}\prod_i u_{ii}$, where $s$ is the number of row interchanges. This is the only practical way to compute a determinant of even moderate size; the cofactor expansion of :ref[]{to=linalg.determinants} costs $n!$ operations.

**(v) Growth.** With partial pivoting, every intermediate entry satisfies
$$
\max_{i,j}\bigl|u_{ij}\bigr| \ \le\ 2^{\,n-1}\max_{i,j}\bigl|a_{ij}\bigr| ,
$$
and the bound is attained. The quantity on the left over the quantity on the right is the **growth factor**, and it is what controls how much accuracy the elimination can lose.
:::

:::idea{provenance=original}
Elimination is a factorization in disguise. Subtracting $\ell_{ik}$ times row $k$ from row $i$ is multiplication on the left by a matrix that differs from the identity in one entry; the product of all of them is unit lower triangular, and so is its inverse, whose entries are precisely the multipliers with no further arithmetic. So the triangular array of multipliers that elimination throws away *is* $L$, and the final upper triangular array is $U$. That is why one factorization serves any number of right-hand sides.

Pivoting enters because the algorithm divides by the pivot. If the pivot is small relative to the entries below it, the multipliers are large, the updated entries are large, and the original data are swamped: the computation loses the information it was given. Choosing the largest available pivot bounds every multiplier by $1$, and the growth statement is the worst that can then happen, each elimination step at most doubling the largest entry.

The cost is one sum: at step $k$ a square block of side $n-k$ is updated, one multiply-subtract per entry.
:::

:::proof{provenance=original}
**(i) and (ii).** Run the elimination. Suppose that after $k-1$ steps the matrix has the form $A^{(k)}$, zero below the diagonal in the first $k-1$ columns. If every entry of column $k$ on or below the diagonal is zero, then the first $k$ columns of $A^{(k)}$ are linearly dependent; since $A^{(k)} = G A$ for an invertible $G$ (a product of the elementary operations so far), that would make $A$ singular. So for nonsingular $A$ some entry in that part of column $k$ is non-zero, and partial pivoting brings the largest in modulus, say $a^{(k)}_{pk}$, onto the diagonal by exchanging rows $k$ and $p$. The multipliers are then
$$
\ell_{ik} = \frac{a^{(k)}_{ik}}{a^{(k)}_{kk}}, \qquad i > k, \qquad\text{so}\qquad |\ell_{ik}| \le 1
$$
by the choice of pivot. Writing $E_k$ for the unit lower triangular matrix that performs step $k$'s eliminations and $P_k$ for its row exchange, $n-1$ steps give $E_{n-1}P_{n-1}\cdots E_1 P_1 A = U$. Pushing all the permutations to the right -- each $P_j$ past an $E_i$ with $i<j$ only permutes the two rows of the multiplier column of $E_i$, producing another unit lower triangular matrix with the same entries reordered -- turns this into $\tilde E\, P A = U$ with $P = P_{n-1}\cdots P_1$ and $\tilde E$ unit lower triangular. Then $L = \tilde E^{-1}$ is unit lower triangular, and $PA = LU$. If no interchange is ever needed, $P = I$ and (i) holds; a non-zero pivot at step $k$ is available without interchange exactly when $\det A_{1:k,1:k} \ne 0$, since that determinant equals $u_{11}\cdots u_{kk}$ by the same factorization restricted to the leading block.

*Uniqueness.* If $L_1U_1 = L_2U_2$ with both $L_i$ unit lower triangular and both $U_i$ nonsingular upper triangular, then $L_2^{-1}L_1 = U_2U_1^{-1}$. The left side is unit lower triangular and the right side is upper triangular, and a matrix that is both is the identity. Hence $L_1 = L_2$ and $U_1 = U_2$.

**(iii) Cost.** At step $k$ the multipliers for rows $k+1,\dots,n$ cost $n-k$ divisions. Each of those $n-k$ rows is then updated in columns $k+1,\dots,n$, which is $n-k$ entries, each one multiply and one subtract: $(n-k)^2$ pairs. Summing over $k = 1,\dots,n-1$ and substituting $j = n-k$,
$$
\sum_{j=1}^{n-1}j^2 = \frac{(n-1)n(2n-1)}{6} = \frac{n^3}{3}-\frac{n^2}{2}+\frac{n}{6},
\qquad
\sum_{j=1}^{n-1}j = \frac{n(n-1)}{2}.
$$
Forward substitution computes $y_i = b_i - \sum_{j<i}\ell_{ij}y_j$, costing $i-1$ pairs, so $n(n-1)/2$ in all and no divisions (the diagonal of $L$ is $1$); back substitution computes $x_i = (y_i - \sum_{j>i}u_{ij}x_j)/u_{ii}$, costing $n-i$ pairs and one division, so $n(n-1)/2$ pairs and $n$ divisions.

**(iv)** Taking determinants in $PA = LU$ and using $\det L = 1$ (unit triangular) and $\det P = (-1)^{s}$ gives the formula.

**(v) Growth.** At step $k$ the updated entries are $a^{(k+1)}_{ij} = a^{(k)}_{ij} - \ell_{ik}a^{(k)}_{kj}$. Since $|\ell_{ik}| \le 1$,
$$
\bigl|a^{(k+1)}_{ij}\bigr| \le \bigl|a^{(k)}_{ij}\bigr| + \bigl|a^{(k)}_{kj}\bigr| \le 2\max_{i,j}\bigl|a^{(k)}_{ij}\bigr| .
$$
So the largest modulus at most doubles at each of the $n-1$ steps, giving the factor $2^{n-1}$. The bound is attained by the matrix with $1$ on the diagonal, $-1$ strictly below it and $1$ throughout the last column: computing with it for $n = 3,4,5,6$ gives growth factors exactly $4, 8, 16, 32$, that is $2^{n-1}$. $\square$
:::

:::statement[Stationary iterations: when they converge]{provenance=adapted src="stakgold-holst-2011:§10.6, Algorithm 10.6.1, the error recursion (10.6.4) and Theorem 10.6.1, p. 773, and (10.6.27)-(10.6.30) and Theorem 10.6.4, pp. 799-800; kreyszig-1978:§5.2, Theorem 5.2-1 with (5) and (7), p. 309, and 5.2-2, 5.2-3, pp. 310-312"}
Let $A = M - N$ be a splitting and $C = M^{-1}N = I - M^{-1}A$ the iteration matrix, so that the error $e^m = x - x^m$ obeys $e^{m+1} = C e^{m}$ and hence $e^m = C^m e^0$.

**(i) The exact criterion.** The iteration converges to $x$ for *every* starting vector $x^0$ if and only if
$$
\rho(C) < 1 ,
$$
$\rho$ being the spectral radius. This is Theorem 10.6.1 of :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§10.6, p. 773"}, and the asymptotic error reduction per step is $\rho(C)$: the number of steps to gain one decimal digit is $-1/\log_{10}\rho(C)$.

**(ii) A checkable sufficient condition, with error bounds.** If
$$
\alpha := \|C\|_\infty = \max_{j}\sum_{k=1}^{n}|c_{jk}| < 1
$$
then the iteration converges, and :cite[Kreyszig's Theorem 5.2-1]{work=kreyszig-1978 loc="§5.2, Thm 5.2-1 and Eq. (7), p. 309"} gives the bounds, in the max metric $d(x,y) = \max_j|x_j - y_j|$,
$$
d(x^{(m)}, x) \ \le\ \frac{\alpha}{1-\alpha}\,d\bigl(x^{(m-1)},x^{(m)}\bigr)
\ \le\ \frac{\alpha^{m}}{1-\alpha}\,d\bigl(x^{(0)},x^{(1)}\bigr) .
$$
The first is computable from two successive iterates and is the one to use as a stopping test; the second is computable in advance.

**(iii) Jacobi.** $C_J = D^{-1}(L+U) = I - D^{-1}A$, that is $x^{m+1}_j = \bigl(b_j - \sum_{k\ne j}a_{jk}x^m_k\bigr)/a_{jj}$, which needs $a_{jj} \ne 0$. Condition (ii) becomes **strict row diagonal dominance**,
$$
\sum_{k \ne j}|a_{jk}| < |a_{jj}| \qquad (j = 1,\dots,n) ,
$$
which is Kreyszig's row sum criterion (12*).

**(iv) Gauss-Seidel.** $C_{GS} = (D-L)^{-1}U$, that is $x^{m+1}_j = \bigl(b_j - \sum_{k<j}a_{jk}x^{m+1}_k - \sum_{k>j}a_{jk}x^{m}_k\bigr)/a_{jj}$: the components already updated in the current sweep are used immediately. Kreyszig states, without proof, that strict row diagonal dominance is sufficient for this iteration too.

**(v) The two are not comparable.** Kreyszig's Problems 5 and 6 (p. 313) exhibit a $3\times3$ system on which Jacobi diverges and Gauss-Seidel converges, and another on which Jacobi converges and Gauss-Seidel diverges. Neither method dominates the other in general. What is true in the important special case is recorded by :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§10.6, p. 800"}: for consistently ordered matrices with Property A -- which the standard finite-difference Laplacian is -- $\rho(C_{GS}) = \rho(C_J)^2$, so Gauss-Seidel does in one sweep what Jacobi does in two.

**(vi) The bad news for discretized PDEs.** For the box-method discretization of Poisson's equation on a uniform mesh of spacing $h$, Stakgold and Holst give $\rho(C_J) = \cos \pi h$ and $\rho(C_{GS}) = \cos^2\pi h$, both of the form $1 - O(h^2)$, while the optimally relaxed SOR iteration achieves $1 - O(h)$. As $h \to 0$ all of them approach $1$: the classical iterations slow down without limit as the mesh is refined. This is the reason multigrid and preconditioned Krylov methods exist (:ref[]{to=num.relaxation-methods}).
:::

:::idea{provenance=original}
Everything follows from $e^m = C^m e^0$. A matrix power tends to zero exactly when every eigenvalue has modulus below one: the Jordan form turns $C^m$ into blocks $\lambda^m$ times a polynomial in $m$, and an exponential beats a polynomial in either direction. The sufficient condition is cruder and cheaper: an induced norm dominates the spectral radius, so a norm below one forces the spectral radius below one, and it does so with a constant one can compute from the matrix entries without finding a single eigenvalue. Kreyszig gets it as a contraction on $\mathbb{R}^n$ with the max metric, and the error bounds are then nothing but the standard bounds of the Banach fixed point theorem.

The difference between Jacobi and Gauss-Seidel is that Gauss-Seidel overwrites in place. It costs the same arithmetic and less storage, and on the matrices that come from discretizing an elliptic equation it halves the number of sweeps -- but that is a property of those matrices, not a theorem about the two methods.
:::

:::proof{provenance=original}
**(i)** Subtracting $x = Cx + d$ from $x^{m+1} = Cx^m + d$ gives $e^{m+1} = Ce^m$, hence $e^m = C^m e^0$, so the question is whether $C^m \to 0$.

*If $\rho(C) \ge 1$:* take an eigenvalue $\lambda$ with $|\lambda| \ge 1$ and an eigenvector $v \ne 0$, and start at $x^0 = x - v$, so $e^0 = v$. Then $e^m = \lambda^m v$ does not tend to $0$.

*If $\rho(C) < 1$:* put $C = S J S^{-1}$ in Jordan form (:ref[]{to=linalg.jordan-form}). It suffices that $J^m \to 0$, and $J$ is block diagonal, so it suffices that $J_k^m \to 0$ for one Jordan block $J_k = \lambda I + N$ of size $s$, where $N$ is nilpotent with $N^{s}=0$. Since $\lambda I$ and $N$ commute, the binomial theorem gives
$$
J_k^{m} = \sum_{t=0}^{s-1}\binom{m}{t}\lambda^{m-t}N^{t},
$$
a sum of $s$ terms each bounded by $m^{t}|\lambda|^{m-t}\|N\|^t/t!$. With $|\lambda| < 1$ each $m^{t}|\lambda|^{m}$ tends to $0$, because $m^t |\lambda|^m = \exp(t\log m - m\log(1/|\lambda|)) \to 0$. Hence $J_k^m \to 0$.

**(ii)** The map $T x = Cx + d$ satisfies, in the max norm,
$$
\|Tx - Ty\|_\infty = \|C(x-y)\|_\infty = \max_j\Bigl|\sum_k c_{jk}(x_k-y_k)\Bigr| \le \Bigl(\max_j \sum_k |c_{jk}|\Bigr)\|x-y\|_\infty = \alpha\,\|x-y\|_\infty ,
$$
so $T$ is a contraction with constant $\alpha$ on the complete metric space $(\mathbb{R}^n, d)$. The Banach fixed point theorem (:ref[]{to=funcan.banach-fixed-point}) gives a unique fixed point, convergence from any start, and exactly the two error bounds quoted. (Consistency with (i): $\rho(C) \le \|C\|_\infty = \alpha < 1$, since an induced norm bounds the spectral radius.)

**(iii)** $M = D$ is invertible precisely when no diagonal entry vanishes, and then $C_J = I - D^{-1}A$ has entries $c_{jk} = -a_{jk}/a_{jj}$ for $k\ne j$ and $0$ for $k = j$. So $\alpha = \max_j \sum_{k\ne j}|a_{jk}|/|a_{jj}|$, and $\alpha < 1$ is the stated dominance.

**(iv)** $M = D - L$ is lower triangular with the $a_{jj}$ on the diagonal, hence invertible under the same condition, and solving $Mx^{m+1} = Ux^m + b$ one row at a time from the top gives the component formula, since row $j$ involves $x^{m+1}_k$ only for $k < j$. The claim about diagonal dominance is Kreyszig's and is reported, not proved, here: he states at the end of §5.2 that condition (12) is sufficient for the Gauss-Seidel iteration as well, referring the reader elsewhere for better conditions.

**(v) and (vi)** are quoted from the two sources as stated; no proof is offered here. $\square$
:::

:::statement[The conjugate gradient method]{provenance=adapted src="stakgold-holst-2011:§10.6, Algorithm 10.6.2 with B = I, p. 778, the Krylov minimisation and minimax reduction, p. 779, and the contraction bound (10.6.9), p. 780"}
Let $A$ be symmetric positive definite, $b$ given, $x$ the exact solution. Write $(u,v)_A = u^{\mathsf T}Av$ and $\|u\|_A = (u,u)_A^{1/2}$ for the **energy** inner product and norm, and
$$
K_i = \operatorname{span}\bigl\{r^0,\, Ar^0,\, \dots,\, A^{i-1}r^0\bigr\}
$$
for the $i$-th **Krylov subspace**. The method of Hestenes and Stiefel is Algorithm 10.6.2 of :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§10.6, p. 778"} with the preconditioner taken to be the identity: starting from any $x^0$, with $r^0 = b - Ax^0$ and $p^0 = r^0$,
$$
\alpha_i = \frac{(r^i, r^i)}{(p^i, Ap^i)},\quad
x^{i+1} = x^i + \alpha_i p^i,\quad
r^{i+1} = r^i - \alpha_i Ap^i,\quad
\beta_{i+1} = \frac{(r^{i+1},r^{i+1})}{(r^i,r^i)},\quad
p^{i+1} = r^{i+1}+\beta_{i+1}p^i .
$$
Each step costs **one** matrix-vector product, two inner products and three vector updates; $A$ is never modified and need not even be stored, only applied.

Then, in exact arithmetic and as long as $r^i \ne 0$:

1. **Orthogonality.** $(r^i, r^j) = 0$ and $(p^i, Ap^j) = 0$ for $j < i$, and $K_i = \operatorname{span}\{r^0,\dots,r^{i-1}\} = \operatorname{span}\{p^0,\dots,p^{i-1}\}$.
2. **Optimality.** $x^i$ is the unique minimiser of $\|x - u\|_A$ over the affine subspace $u \in x^0 + K_i$. No method that uses only the vectors $A^{j}r^0$ can do better in this norm.
3. **Finite termination.** $x^{i} = x$ for some $i \le n$; more sharply, for some $i \le$ the number of **distinct** eigenvalues of $A$.
4. **Rate.** With $\kappa = \kappa_2(A) = \lambda_{\max}/\lambda_{\min}$,
$$
\|x - x^{i}\|_A \ \le\ 2\left(\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\right)^{\!i}\,\|x-x^0\|_A ,
$$
which is Stakgold and Holst's bound (10.6.9) with $B = I$. Compare a stationary iteration, whose rate involves $\kappa$ itself rather than $\sqrt{\kappa}$: the number of conjugate gradient steps needed for a fixed accuracy grows like $\sqrt{\kappa}$, not like $\kappa$.

Positive definiteness is used throughout and cannot be dropped: $(p,Ap)$ appears in a denominator, and $\|\cdot\|_A$ is a norm only for positive definite $A$.
:::

:::idea{provenance=original}
For symmetric positive definite $A$, solving $Ax=b$ is the same as minimising the quadratic $\phi(u) = \tfrac12 u^{\mathsf T}Au - b^{\mathsf T}u$, since $\phi(u) = \tfrac12\|x-u\|_A^2 - \tfrac12 x^{\mathsf T}Ax$. Steepest descent takes the negative gradient, which is the residual, and immediately wastes its work: the next step undoes part of the previous one. The conjugate gradient fix is to search instead along directions that are orthogonal **in the energy inner product**, so that minimising along a new direction never spoils the minimisation already achieved along the old ones. The iterate after $i$ steps is then the exact minimiser over the whole $i$-dimensional space searched so far, not merely over the last line.

The miracle -- and it is specific to symmetric $A$ -- is that building such a direction needs only the previous one. The space searched after $i$ steps is the Krylov space, and the single number $\beta$ suffices to keep the new direction energy-orthogonal to *all* its predecessors, because a symmetric matrix applied to a vector of one Krylov space lands in the next, and everything earlier has already been orthogonalised away.

Optimality over Krylov spaces then converts the convergence question into a question about polynomials: which polynomial of degree $i$ equal to $1$ at the origin is smallest on the spectrum of $A$? If the spectrum is clustered the answer is tiny, which is why preconditioning works; if the spectrum fills an interval $[\lambda_{\min},\lambda_{\max}]$, the answer is given by Chebyshev polynomials and produces the $\sqrt{\kappa}$ rate.
:::

:::proof{provenance=original}
**1. Orthogonality.** We prove by induction on $i$ the statement $H_i$: the vectors $r^0,\dots,r^i$ are mutually orthogonal, $p^0,\dots,p^i$ are mutually $A$-orthogonal, and
$$
\operatorname{span}\{r^0,\dots,r^i\} = \operatorname{span}\{p^0,\dots,p^i\} = K_{i+1}.
$$
$H_0$ holds because $p^0 = r^0$ and $K_1 = \operatorname{span}\{r^0\}$. Assume $H_i$ and $r^{i+1}\ne 0$.

*Step 1: $r^{i+1} \perp p^j$ for $j \le i$.* For $j = i$,
$$
(r^{i+1},p^i) = (r^i,p^i) - \alpha_i(Ap^i,p^i) .
$$
Now $p^i = r^i + \beta_i p^{i-1}$ and $r^i \perp p^{i-1}$ (that is $H_i$: $p^{i-1} \in K_i = \operatorname{span}\{r^0,\dots,r^{i-1}\}$ and $r^i$ is orthogonal to each of those), so $(r^i,p^i) = (r^i,r^i)$, and the definition of $\alpha_i$ makes the right side vanish. For $j < i$: $(r^i,p^j) = 0$ because $p^j \in K_i$, and $(Ap^i,p^j) = 0$ by the $A$-orthogonality in $H_i$. Hence $(r^{i+1},p^j)=0$.

Since $\operatorname{span}\{p^0,\dots,p^i\} = \operatorname{span}\{r^0,\dots,r^i\}$ by $H_i$, step 1 also gives $r^{i+1}\perp r^j$ for $j \le i$.

*Step 2: $p^{i+1}$ is $A$-orthogonal to $p^0,\dots,p^i$.* From $r^{j+1} = r^j - \alpha_j Ap^j$ we get $Ap^j = (r^j - r^{j+1})/\alpha_j$ whenever $\alpha_j \ne 0$, which holds because $(p^j,Ap^j)>0$ and $(r^j,r^j)>0$. For $j < i$,
$$
(Ap^{i+1},p^j) = (Ar^{i+1},p^j) + \beta_{i+1}(Ap^i,p^j) = \bigl(r^{i+1}, Ap^j\bigr) + 0 = \frac{1}{\alpha_j}\bigl(r^{i+1}, r^j - r^{j+1}\bigr) = 0 ,
$$
using the symmetry of $A$ and step 1, since $j+1 \le i$. For $j = i$,
$$
(Ap^{i+1},p^i) = (r^{i+1},Ap^i) + \beta_{i+1}(p^i,Ap^i)
= \frac{1}{\alpha_i}\bigl(r^{i+1}, r^i - r^{i+1}\bigr) + \beta_{i+1}\frac{(r^i,r^i)}{\alpha_i}
= \frac{1}{\alpha_i}\Bigl(-(r^{i+1},r^{i+1}) + \beta_{i+1}(r^i,r^i)\Bigr) = 0
$$
by the definition of $\beta_{i+1}$. **This is where the formula for $\beta$ comes from**: it is the unique choice that makes the new direction $A$-orthogonal to the last one, and steps 1 and 2 show that this one condition secures orthogonality to all the others for free.

*Step 3: the spans.* $r^{i+1} = r^i - \alpha_i Ap^i$ with $r^i \in K_{i+1}$ and $p^i \in K_{i+1}$, so $Ap^i \in K_{i+2}$ and $r^{i+1} \in K_{i+2}$; likewise $p^{i+1} = r^{i+1}+\beta_{i+1}p^i \in K_{i+2}$. Conversely $\operatorname{span}\{r^0,\dots,r^{i+1}\}$ has dimension $i+2$ (the $r^j$ are non-zero and mutually orthogonal), is contained in $K_{i+2}$, and $\dim K_{i+2}\le i+2$; so the two are equal, and the same argument applies to the $p^j$, which are non-zero and mutually $A$-orthogonal. That is $H_{i+1}$.

**2. Optimality.** By construction $x^i \in x^0 + K_i$. Let $e^i = x - x^i$; then $Ae^i = b - Ax^i = r^i$, so for every $v \in K_i$,
$$
(e^i, v)_A = (Ae^i, v) = (r^i, v) = 0
$$
by part 1. So $e^i$ is $A$-orthogonal to $K_i$, that is, $x^i$ is the $A$-orthogonal projection of $x$ onto the affine subspace $x^0+K_i$. For any other $u = x^i + w$ with $w\in K_i$,
$$
\|x-u\|_A^2 = \|e^i - w\|_A^2 = \|e^i\|_A^2 - 2(e^i,w)_A + \|w\|_A^2 = \|e^i\|_A^2 + \|w\|_A^2 > \|e^i\|_A^2
$$
unless $w = 0$ (:ref[]{to=linalg.projections-least-squares}).

**3. Finite termination.** The non-zero residuals are mutually orthogonal in $\mathbb{R}^n$, so there are at most $n$ of them and $r^i = 0$, hence $x^i = x$, for some $i \le n$. For the sharper count, let $\lambda_1,\dots,\lambda_m$ be the distinct eigenvalues of $A$ and put $q(\lambda) = \prod_{j=1}^{m}(1-\lambda/\lambda_j)$, a polynomial of degree $m$ with $q(0)=1$. Since $x^i - x^0 \in K_i$, we may write $x^i = x^0 + s(A)r^0$ with $\deg s \le i-1$, and then
$$
e^i = e^0 - s(A)Ae^0 = q_i(A)e^0, \qquad q_i(\lambda) = 1-\lambda s(\lambda), \quad q_i(0)=1, \ \deg q_i \le i ,
$$
and conversely every such $q_i$ arises from some $u \in x^0+K_i$. By part 2, $\|e^i\|_A = \min\{\|q(A)e^0\|_A : \deg q \le i,\ q(0)=1\}$. Taking $i = m$ and the $q$ above, $q(A) = 0$ because $q$ vanishes at every eigenvalue and $A$ is diagonalisable (:ref[]{to=linalg.hermitian-spectral-theorem}); hence $\|e^m\|_A = 0$.

**4. Rate.** Expand $e^0 = \sum_k c_k v_k$ in an orthonormal eigenbasis $Av_k = \lambda_k v_k$. Then $\|q(A)e^0\|_A^2 = \sum_k q(\lambda_k)^2\lambda_k c_k^2 \le \bigl(\max_k |q(\lambda_k)|\bigr)^2\|e^0\|_A^2$, so by part 2
$$
\frac{\|e^i\|_A}{\|e^0\|_A} \ \le\ \min_{\substack{\deg q\le i\\ q(0)=1}}\ \max_{\lambda\in\sigma(A)}\bigl|q(\lambda)\bigr|
\ \le\ \min_{\substack{\deg q\le i\\ q(0)=1}}\ \max_{\lambda_{\min}\le\lambda\le\lambda_{\max}}\bigl|q(\lambda)\bigr| .
$$
The last minimax problem is solved by the Chebyshev polynomial $T_i$ rescaled to $[\lambda_{\min},\lambda_{\max}]$ and normalised at the origin (:ref[]{to=spec.chebyshev-polynomials}); :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§10.6, Eq. (10.6.9) and Exercises 10.5.2-10.5.3, pp. 779-780"} carry out that step and record the resulting bound, which is the one quoted. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Pivoting is not a refinement; without it the algorithm can return nonsense on a perfectly conditioned problem.** Take
$$
\varepsilon x_1 + x_2 = 1, \qquad x_1 + x_2 = 2, \qquad \varepsilon = 10^{-17},
$$
whose exact solution is $x_1 = 1/(1-\varepsilon)$, $x_2 = (1-2\varepsilon)/(1-\varepsilon)$, both equal to $1$ to sixteen digits. Its condition number is $\kappa_2 = 2.618$: the *problem* is as well conditioned as a problem can be. Eliminating without pivoting uses the multiplier $1/\varepsilon = 10^{17}$; in IEEE double precision $1 - 10^{17}$ and $2 - 10^{17}$ both round to $-10^{17}$, the $1$ and the $2$ being lost entirely, so $x_2 = 1$ and then $x_1 = (1 - x_2)/\varepsilon = 0$. The computed answer is $(0,1)$ against the true $(1,1)$: one hundred per cent error. Exchanging the two rows first gives multiplier $\varepsilon$ and returns $(1,1)$ to full precision. The information destroyed is the coefficient $1$ in the second equation, and what destroys it is the subtraction of a huge number from a small one -- cancellation, in the sense of :ref[]{to=num.floating-point-errors}.
- **The growth factor is why "with partial pivoting" is enough in practice but not in theory.** The bound $2^{n-1}$ of part (v) is attained, so there exist matrices on which elimination with pivoting loses $n-1$ bits. They are rare; on matrices arising from applications the growth factor is almost always below $n$. The theorem is what it is, and a code that must be certain checks the residual afterwards.
- **$\rho(C)<1$ is necessary and sufficient; $\|C\|<1$ is only sufficient.** The gap is real. Diagonal dominance is a *sufficient* condition for Jacobi, and Kreyszig's Problems 5 and 6 show it is not necessary and that the two classical methods do not dominate one another.
- **$a_{jj}\neq 0$ for both iterations.** A zero on the diagonal makes $M$ singular and the iteration undefined, even though the system may be perfectly solvable; a row exchange fixes it, so the hypothesis is about the arrangement of the equations, not about the problem.
- **Symmetry and positive definiteness for the conjugate gradient method.** Symmetry is used in step 2 of the orthogonality proof, where $(Ar,p) = (r,Ap)$, and it is what makes the short three-term recurrence possible. Positive definiteness is used for $\|\cdot\|_A$ to be a norm, for $\alpha_i$ to have a non-zero denominator, and in part 4 where $\lambda_k > 0$. Applied to a non-symmetric or indefinite matrix the recurrence can break down with a zero denominator; the family of methods for that case (GMRES, BiCGSTAB) must store or regenerate the whole Krylov basis.
- **Exact arithmetic for finite termination.** Part 3 is a statement about exact arithmetic only. In floating point the orthogonality of the residuals is lost gradually and the method does not terminate at step $n$. This does not matter, because in practice it is stopped long before $n$ on the strength of part 4 -- which is a statement about the *rate*, and survives rounding.
- **The residual is not the error.** If $\hat x$ is any approximation with residual $r = b - A\hat x$, then $x - \hat x = A^{-1}r$ and $\|b\| = \|Ax\|\le\|A\|\|x\|$, so
$$
\frac{\|x-\hat x\|}{\|x\|}\ \le\ \|A^{-1}\|\,\|r\|\cdot\frac{\|A\|}{\|b\|} = \kappa(A)\,\frac{\|r\|}{\|b\|} ,
$$
and :ref[]{to=linalg.matrix-norms-conditioning} shows this is attained. A tiny residual certifies a tiny error only when $\kappa(A)$ is modest. Every stopping test on $\|r\|$ is therefore a statement about the error only after multiplication by an estimate of $\kappa$.
:::

:::method[Choosing a solver]{provenance=original}
1. **Is the matrix sparse and large?** If $n \lesssim 10^4$ and $A$ is dense, factorize: the cost $n^3/3$ is predictable and the answer is backward stable. If $A$ is sparse with $O(n)$ non-zeros and $n$ is large, a dense factorization is impossible on both counts -- fill-in destroys the sparsity and the cost is cubic -- so iterate.
2. **Factorize once, solve many times.** Never form $A^{-1}$. Compute $PA = LU$ once at cost $n^3/3$ and reuse it for every right-hand side at $n^2$ each. Forming $A^{-1}$ costs the same as $n$ solves, needs $n^2$ storage, and then each application still costs $n^2$ -- with a worse error.
3. **Exploit structure before anything else.** A tridiagonal system costs $O(n)$, not $O(n^3)$ (:ref[]{to=num.interpolation} uses this for splines, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.3.3, p. 998"} give the recurrence); a banded system of bandwidth $m$ costs $O(nm^2)$; a symmetric positive definite system uses the Cholesky factorization $A = R^{\mathsf T}R$ at half the cost of LU and needs no pivoting.
4. **For an iterative solve, check the splitting first.** Verify strict diagonal dominance; if it holds, Jacobi and Gauss-Seidel both converge and the row-sum constant $\alpha$ gives a usable a priori step count. If it fails, compute or estimate $\rho(C)$ before spending time: an iteration with $\rho$ just below $1$ is worse than useless.
5. **For symmetric positive definite $A$, use conjugate gradients and precondition it.** The step count scales as $\sqrt{\kappa}$, and preconditioning -- solving $M^{-1}Ax = M^{-1}b$ with $M$ an easily invertible approximation to $A$ -- is the whole game, because it is the condition number of the *preconditioned* matrix that enters. Incomplete Cholesky and multigrid (:ref[]{to=num.relaxation-methods}) are the standard choices.
6. **Stop on the right quantity.** Use $\|r\|/\|b\| \le \text{tol}$ only with an estimate of $\kappa(A)$ in hand; otherwise use the a posteriori bound of the stationary-iteration statement, which involves only successive iterates.
7. **Always check afterwards.** Compute the residual of the returned $\hat x$ in higher precision if you can. One step of **iterative refinement** -- solve $A\delta = r$ with the factorization you already have, set $\hat x \leftarrow \hat x + \delta$ -- costs $n^2$ and typically recovers the digits lost to a large growth factor.
:::

:::example[The same three ideas on explicit numbers]{provenance=original}
**Part 1: elimination with interchange.** Solve $Ax=b$ with
$$
A = \begin{pmatrix} 1 & 4 & 2\\ 3 & 1 & -1\\ 2 & -5 & 5\end{pmatrix},
\qquad
b = \begin{pmatrix}-1\\-2\\27\end{pmatrix}.
$$
*Step 1.* The largest entry of column $1$ in modulus is $3$, in row $2$: exchange rows $1$ and $2$. The multipliers are $\ell = 1/3$ for the (new) row $2$ and $\ell = 2/3$ for row $3$, both at most $1$ in modulus as the theory promises. Subtracting:
$$
\begin{pmatrix} 3 & 1 & -1 & \big| & -2\\ 0 & \tfrac{11}{3} & \tfrac{7}{3} & \big| & -\tfrac13\\ 0 & -\tfrac{17}{3} & \tfrac{17}{3} & \big| & \tfrac{85}{3}\end{pmatrix}.
$$
*Step 2.* $|{-17/3}| > |11/3|$, so exchange rows $2$ and $3$ -- a second interchange, which plain elimination would not have made. The multiplier is $(11/3)/(-17/3) = -11/17$, and subtracting it gives the third row $6x_3 = 18$.

*Back substitution.* $x_3 = 3$; then $-\tfrac{17}{3}x_2 + \tfrac{17}{3}(3) = \tfrac{85}{3}$ gives $x_2 = -2$; then $3x_1 + (-2) - 3 = -2$ gives $x_1 = 1$. So
$$
x = (1,\,-2,\,3)^{\mathsf T},
$$
which substituted back into the three original equations gives $1-8+6=-1$, $3-2-3=-2$ and $2+10+15=27$: the data exactly.

*The factorization.* The permutation sends the original rows to the order $(2,3,1)$, and
$$
L = \begin{pmatrix}1&0&0\\ \tfrac23&1&0\\ \tfrac13&-\tfrac{11}{17}&1\end{pmatrix},
\qquad
U = \begin{pmatrix}3&1&-1\\0&-\tfrac{17}{3}&\tfrac{17}{3}\\0&0&6\end{pmatrix}.
$$
Multiplying out, row $3$ of $LU$ is $\tfrac13(3,1,-1) - \tfrac{11}{17}(0,-\tfrac{17}{3},\tfrac{17}{3}) + (0,0,6) = (1,4,2)$, the original first row, and the other two rows check the same way: $PA = LU$ exactly. The determinant is $\det A = (+1)\cdot 3\cdot(-\tfrac{17}{3})\cdot 6 = -102$, the sign being $+$ because two interchanges were made; expanding the $3\times3$ determinant by cofactors gives $0 - 68 - 34 = -102$ as well. The operation count predicted by part (iii) is $n^3/3 - n^2/2 + n/6 = 9 - 4.5 + 0.5 = 5$ multiply-subtract pairs and $n(n-1)/2 = 3$ divisions, which is exactly what the two steps above used: a $2\times2$ block updated at step $1$ and a $1\times1$ at step $2$, with three multipliers.

**Part 2: Jacobi and Gauss-Seidel.** Take the symmetric positive definite
$$
A = \begin{pmatrix}4&-1&0\\-1&4&-1\\0&-1&4\end{pmatrix},
\qquad b = \begin{pmatrix}2\\4\\10\end{pmatrix},
\qquad x = \begin{pmatrix}1\\2\\3\end{pmatrix},
$$
the solution being exact as substitution confirms ($4-2=2$, $-1+8-3=4$, $-2+12=10$). The rows of $|C_J|$ sum to $0.25$, $0.5$, $0.25$, so $\alpha = 0.5 < 1$: strictly diagonally dominant, and both iterations converge. The eigenvalues of $A$ are $4-\sqrt2, 4, 4+\sqrt2$, so
$$
\rho(C_J) = \frac{2\cos(\pi/4)}{4} = \frac{\sqrt2}{4} = 0.3535534,
\qquad
\rho(C_{GS}) = 0.125 = \rho(C_J)^2 ,
$$
the second computed from the eigenvalues of $(D-L)^{-1}U$ and agreeing exactly with the squaring relation Stakgold and Holst record for this class of matrix. Starting from $x^0 = 0$ the maximum-norm errors are

| sweep $m$ | Jacobi | Gauss-Seidel |
|---|---|---|
| 1 | $1.0000$ | $8.7500\times10^{-1}$ |
| 2 | $2.5000\times10^{-1}$ | $2.1875\times10^{-1}$ |
| 3 | $1.2500\times10^{-1}$ | $2.7344\times10^{-2}$ |
| 4 | $3.1250\times10^{-2}$ | $3.4180\times10^{-3}$ |
| 6 | $3.9062\times10^{-3}$ | $5.3406\times10^{-5}$ |
| 8 | $4.8828\times10^{-4}$ | $8.3447\times10^{-7}$ |
| 12 | $7.6294\times10^{-6}$ | |

The Gauss-Seidel errors fall by exactly $1/8$ per sweep from $m=2$ on, which is $\rho(C_{GS})$. The Jacobi errors alternate between factors $1/4$ and $1/2$ -- the max-norm picks out different components on alternate sweeps -- but over two sweeps they fall by $1/8 = \rho(C_J)^2$, as the spectral radius requires. Gauss-Seidel reaches $10^{-6}$ in $8$ sweeps ($8.34\times10^{-7}$) where Jacobi needs $14$ ($9.54\times10^{-7}$ at sweep $14$, against $3.81\times10^{-6}$ at sweep $13$). Kreyszig's a priori bound for Jacobi, with $\alpha = 0.5$ and $d(x^{(0)},x^{(1)}) = \|D^{-1}b\|_\infty = 2.5$, predicts an error at most $\alpha^{m}(1-\alpha)^{-1}(2.5) = 5\cdot 2^{-m}$, which at $m=12$ is $1.22\times10^{-3}$: a true bound, pessimistic here by a factor of $160$, as a bound built from a norm rather than a spectral radius must be.

**Part 3: conjugate gradients on the same system.** $\kappa_2(A) = (4+\sqrt2)/(4-\sqrt2) = 2.093836$, so the predicted contraction factor is $(\sqrt\kappa-1)/(\sqrt\kappa+1) = 0.182676$. From $x^0 = 0$, so $r^0 = p^0 = b$ and $\|x - x^0\|_A = \sqrt{x^{\mathsf T}\!Ax} = \sqrt{x^{\mathsf T}b} = \sqrt{40} = 6.3246$:

| $i$ | $\alpha_{i-1}$ | $x^{i}$ | $\|r^i\|_2$ | $\|x-x^i\|_A$ |
|---|---|---|---|---|
| 1 | $0.3125000$ | $(0.6250000,\ 1.2500000,\ 3.1250000)$ | $3.1125$ | $1.5811$ |
| 2 | $0.2484140$ | $(0.8514190,\ 2.0133556,\ 3.0150250)$ | $0.63751$ | $0.30576$ |
| 3 | $0.2300307$ | $(1.0000000,\ 2.0000000,\ 3.0000000)$ | $4.4\times10^{-17}$ | $0$ |

Three steps for a $3\times3$ matrix with three distinct eigenvalues, exactly as part 3 of the statement requires; the residual at step $3$ is at the rounding level and the energy error is zero in our run. Check the bound of part 4 as well. At $i=2$ it reads
$$
\|x-x^2\|_A \;\le\; 2\rho^{2}\,\|x-x^0\|_A = 2(0.182676)^2(6.3246) = 0.42211 ,
$$
against the achieved $0.30576$: the bound holds, with about $28\%$ to spare. In ratio form the achieved contraction is $0.30576/6.3246 = 0.048345$, comfortably under the allowed $2\rho^2 = 0.066741$. At $i=1$ it reads $2\rho\,(6.3246) = 0.36535 \times 6.3246 = 2.3107$ against the achieved $1.5811$: again true, again loose. The reason the bound has room is that it is a minimax value over the whole interval $[\lambda_{\min},\lambda_{\max}]$, whereas conjugate gradients only has to be small on the three points $\{4-\sqrt2,\,4,\,4+\sqrt2\}$ actually in the spectrum; a finite spectrum is easier than a full interval, which is both why the bound has slack here and why clustering the spectrum by preconditioning pays.
:::

:::application[Where the cubic cost and the condition number decide the science]{provenance=original}
**Structural and finite element analysis.** Assembling a finite element model (:ref[]{to=num.finite-elements}) produces a symmetric positive definite stiffness matrix that is sparse and very large: a million degrees of freedom is routine, a billion is not unusual. A dense factorization would need $10^{18}$ operations and $10^{12}$ words of storage for the million-unknown case; a preconditioned conjugate gradient solve needs a few hundred matrix-vector products, each $O(n)$. The condition number of a finite element stiffness matrix grows like $h^{-2}$ as the mesh is refined, so $\sqrt{\kappa} \sim h^{-1}$, and the unpreconditioned step count doubles when the mesh is halved -- which is exactly why industrial codes are built around multigrid preconditioners that make $\kappa$ independent of $h$.

**Least squares and data fitting.** Fitting $m$ data with $n$ parameters leads to the normal equations $A^{\mathsf T}A c = A^{\mathsf T}y$ (:ref[]{to=linalg.projections-least-squares}), which are symmetric positive definite -- but $\kappa(A^{\mathsf T}A) = \kappa(A)^2$. Fitting a degree-$12$ polynomial in the monomial basis on $[0,1]$ uses $13$ coefficients, so the normal matrix is the $13\times13$ Hilbert matrix, whose spectral condition number we compute to be $5.6\times10^{17}$ -- the $12\times12$ one, belonging to the degree-$11$ fit, is already $1.7\times10^{16}$ -- and no algorithm whatever can return a meaningful answer in double precision: by the rule of thumb in :ref[]{to=linalg.matrix-norms-conditioning}, every digit is gone. The cure is not a better solver but a better basis -- orthogonal polynomials (:ref[]{to=spec.orthogonal-polynomials-general}) -- or a QR factorization of $A$ that never forms $A^{\mathsf T}A$ and so works with $\kappa(A)$ rather than its square.

**Implicit time stepping.** Every implicit integrator for a stiff system (:ref[]{to=num.stiffness}) and every implicit scheme for a parabolic PDE requires the solution of a linear system at every time step, with the same matrix if the step size is held fixed. That is the canonical case for factorizing once and reusing: the $n^3/3$ is paid at the first step and $n^2$ at every step thereafter. When the step size is adapted, the trade-off between refactorizing and iterating is the central implementation decision in the solver.

**Circuit simulation and network flow.** Modified nodal analysis produces a sparse, highly unsymmetric matrix whose structure follows the circuit topology, and here pivoting is not an academic concern: the entries span many orders of magnitude, from gate capacitances to supply resistances, and a pivot chosen by position rather than by magnitude will produce the $(0,1)$ of the remark above in a circuit with a billion transistors. Production simulators use a pivoting strategy that balances the magnitude criterion against keeping the factorization sparse, which is the practical form of the growth-factor bound.
:::
