---
id: num.relaxation-methods
title: Relaxation methods for elliptic problems
kind: method
level: core
summary: Sets up the five-point discrete Poisson problem, writes the Jacobi, Gauss-Seidel and successive over-relaxation sweeps for it, computes the spectral radius of each error propagator exactly on the unit square ($\cos \pi h$, $\cos^2 \pi h$ and $(1-\sin\pi h)/(1+\sin\pi h)$), and turns those into iteration counts and operation counts that are checked against a run.
prereqs: [num.finite-differences, num.linear-systems-numerics]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§8.4, pp. 218-221: the centred approximation (1) to $u_{xx}+u_{yy}=0$, the choice $\\Delta x = \\Delta y$ and the averaging form (2) with its template, p. 219; the discrete mean value property and the discrete maximum principle it forces, and the uniqueness argument from them which also shows the $N \\times N$ system is nonsingular, pp. 219-220; the absence of a marching method and the size of $N$, p. 219; Jacobi iteration (3), p. 220, with the remarks that it converges, that it is too slow to be used, and that it is the same computation as the two-dimensional explicit heat scheme with $\\Delta t = (\\Delta x)^2/4$; the Gauss-Seidel sweep (4), p. 221, with the stated order of operations and the observation that it is about twice as fast as Jacobi; successive over-relaxation (5), p. 221, with the fixed-point check that its limit satisfies (2), and the remark that choosing the relaxation factor in practice is left to specialist texts"
    pages: "218-221"
    role: the five-point discretisation in averaging form, the discrete mean value property and maximum principle, uniqueness and nonsingularity of the discrete system, the three iterations in grid form, the Jacobi-equals-heat-equation observation, and the qualitative ranking of the three methods
  - work: stakgold-holst-2011
    loc: "§10.6, pp. 799-801: the splitting $A = D - L - L^{T}$ and the four classical iterations as choices of approximate inverse $B$, Eqs. (10.6.27)-(10.6.30), p. 799; the reformulation as a matrix splitting $A = M - R$, the fact that convergence is governed entirely by $\\rho(M^{-1}R)$, and Theorem 10.6.4, that for an M-matrix the splitting obtained by zeroing the off-diagonal entries is regular and the iteration converges; the closed-form eigenvalues of the model Poisson matrix and the resulting spectral radii, p. 800: Richardson $1 - O(h^2)$, Jacobi $\\cos \\pi h \\approx 1 - \\tfrac12\\pi^2h^2$, Gauss-Seidel $\\cos^2 \\pi h \\approx 1 - \\pi^2 h^2$ and SOR $\\approx 1 - O(h)$, with the statement that for consistently ordered matrices with Property A the Gauss-Seidel spectral radius is the square of the Jacobi one, and the note that the same dependence on $h$ holds in one and two dimensions; the deterioration $\\rho(E) \\to 1$ as $h \\to 0$; the iteration-count estimate from $|\\ln \\varepsilon|/|\\ln \\rho(E)|$ with $\\varepsilon = O(h^s)$ at discretisation-error level, p. 801; Table 10.1, p. 803, comparing the complexities of the classical, conjugate-gradient, domain-decomposition and multilevel solvers; and pp. 790-792, that the classical sweeps damp the high-frequency error components efficiently while the low-frequency ones stall, which is the motivation for multigrid"
    pages: "790-792, 799-801, 803"
    role: the matrix-splitting framework and the convergence criterion $\rho(M^{-1}R)<1$; the M-matrix convergence theorem; the spectral radii of the model problem and their $h \to 0$ behaviour; the iteration-count and complexity estimates; the smoothing picture that explains why the classical methods stall
---

:::definition[The discrete Poisson problem]{provenance=adapted src="strauss-2008:§8.4, Eqs. (1)-(2), pp. 218-219"}
Let $\Omega = (0,1)^{2}$, let $h = 1/(m+1)$, and place the grid points $(x_j, y_k) = (jh, kh)$ for $0 \le j,k \le m+1$. The $N = m^{2}$ points with $1 \le j,k \le m$ are **interior**; the rest lie on the boundary. We solve
$$
-\,u_{xx} - u_{yy} = f \ \text{ in } \Omega, \qquad u = 0 \ \text{ on } \partial\Omega
$$
by replacing each second derivative with the centred second difference of :ref[]{to=num.finite-differences}. Writing $U_{j,k}$ for the approximation to $u(x_j,y_k)$ and taking equal steps in both directions, the **five-point scheme** is
$$
\frac{4U_{j,k} - U_{j+1,k} - U_{j-1,k} - U_{j,k+1} - U_{j,k-1}}{h^{2}} \;=\; f_{j,k},
\qquad 1 \le j,k \le m,
\tag{P}
$$
with $U_{j,k} = 0$ whenever $(j,k)$ is a boundary index. Collecting one equation per interior node turns (P) into the matrix problem $A\,U = F$, in which $A$ holds the left-hand coefficients, $F$ holds the values $f_{j,k}$, and both have size $N$.

For $f \equiv 0$, dividing (P) by $4/h^2$ puts it in the form Strauss uses,
$$
U_{j,k} \;=\; \tfrac14\bigl(U_{j+1,k} + U_{j-1,k} + U_{j,k+1} + U_{j,k-1}\bigr),
$$
the statement that each value is the average of its four neighbours. This is the exact discrete counterpart of the mean value property of harmonic functions (:ref[]{to=pde.harmonic-functions}), and it forces a discrete maximum principle: a non-constant solution cannot attain its largest or smallest value at an interior point, since such a point could not be the average of its neighbours. Strauss derives the uniqueness of the solution of (P) from that principle, and then nonsingularity of $A$ from uniqueness.

The decisive structural point is that **there is no marching direction**. For the heat and wave equations the new row was computed from the old; an elliptic problem couples all $N$ unknowns at once, and $N$ is large — a grid of $100$ intervals in each direction already gives $N \approx 10^{4}$. Direct elimination is possible (:ref[]{to=num.linear-systems-numerics}) but its cost grows faster than linearly in $N$, which is what motivates the iterations below.
:::

:::definition[Splitting, and the three sweeps]{provenance=adapted src="stakgold-holst-2011:§10.6, Eqs. (10.6.28)-(10.6.30), p. 799; strauss-2008:§8.4, Eqs. (3)-(5), pp. 220-221"}
Split $A = D - L - U$, with $D$ the diagonal part, $-L$ the strictly lower triangular part and $-U$ the strictly upper triangular part, the ordering of the unknowns being fixed once and for all. For the five-point matrix, $D = (4/h^{2})I$. An iteration of the form
$$
U^{(n+1)} \;=\; U^{(n)} + B\bigl(F - A\,U^{(n)}\bigr)
$$
for an approximate inverse $B$ of $A$ has **error propagation matrix** $E = I - BA$: subtracting the identity $U^{\ast} = U^{\ast} + B(F - AU^{\ast})$ satisfied by the exact discrete solution gives $U^{(n+1)} - U^{\ast} = E\,(U^{(n)} - U^{\ast})$, so the error after $n$ sweeps is $E^{n}$ applied to the initial error. The three classical choices, in Stakgold and Holst's notation, are
$$
B_{\mathrm{J}} = D^{-1},
\qquad
B_{\mathrm{GS}} = (D-L)^{-1},
\qquad
B_{\omega} = \omega\,(D - \omega L)^{-1} ,
$$
giving **Jacobi**, **Gauss-Seidel** and **successive over-relaxation** (SOR) with **relaxation factor** $\omega$. On the grid, with $g_{j,k} = h^{2}f_{j,k}$, these read

- **Jacobi.** $\displaystyle U^{(n+1)}_{j,k} = \tfrac14\bigl(U^{(n)}_{j+1,k} + U^{(n)}_{j-1,k} + U^{(n)}_{j,k+1} + U^{(n)}_{j,k-1} + g_{j,k}\bigr)$: every value on the right is taken from the previous sweep, so the order of the nodes does not matter and the whole old array must be kept.
- **Gauss-Seidel.** The same formula, but sweeping the nodes in a fixed order (say row by row from the bottom, left to right within a row) and using each new value the moment it is available. With the lexicographic order this uses the updated $U_{j-1,k}$ and $U_{j,k-1}$ and the old $U_{j+1,k}$ and $U_{j,k+1}$. No second array is needed.
- **SOR.** Compute the Gauss-Seidel value $\widetilde U_{j,k}$ and then move *past* it:
$$
U^{(n+1)}_{j,k} \;=\; U^{(n)}_{j,k} + \omega\bigl(\widetilde U_{j,k} - U^{(n)}_{j,k}\bigr) .
$$
$\omega = 1$ is Gauss-Seidel; $\omega > 1$ is over-relaxation.

**A convention to watch.** Strauss writes the SOR step as $U^{(n+1)}_{j,k} = U^{(n)}_{j,k} + \omega\bigl(\text{sum of the four neighbours} - 4U^{(n)}_{j,k}\bigr)$, in which Gauss-Seidel is the case $\omega = 1/4$. His $\omega$ is therefore one quarter of the $\omega$ used here and by Stakgold and Holst. Everything below uses the convention in which Gauss-Seidel is $\omega = 1$; a factor quoted from Strauss must be multiplied by four before it is substituted into any formula here.
:::

:::statement[Convergence, and the rates for the model problem]{provenance=adapted src="stakgold-holst-2011:§10.6, Thm 10.6.4 and the spectral radii, pp. 799-800"}
Let $E$ be the error propagation matrix of one of the three iterations above, applied to the five-point matrix $A$ of (P) on the unit square with $h = 1/(m+1)$.

1. **Convergence.** $U^{(n)} \to U^{\ast}$ for every starting vector if and only if the spectral radius satisfies $\rho(E) < 1$, and then the error is reduced asymptotically by the factor $\rho(E)$ per sweep. Stakgold and Holst record that for an M-matrix $A$ the splitting obtained by setting the off-diagonal entries to zero is regular and the resulting iteration converges, and that Jacobi and Gauss-Seidel both arise from regular splittings of such a matrix.

2. **Jacobi.** The eigenvalues of $E_{\mathrm{J}} = I - D^{-1}A$ are
$$
\mu_{p,q} = \tfrac12\bigl(\cos p\pi h + \cos q\pi h\bigr), \qquad 1 \le p,q \le m,
$$
so $\rho(E_{\mathrm{J}}) = \cos \pi h$.

3. **Gauss-Seidel.** For a consistently ordered matrix with Property A — which the five-point matrix with the lexicographic ordering is — the Gauss-Seidel spectral radius is the square of the Jacobi one, so $\rho(E_{\mathrm{GS}}) = \cos^{2}\pi h$.

4. **SOR.** $\rho(E_{\omega}) \ge |1-\omega|$ for every matrix with non-zero diagonal, so convergence requires $0 < \omega < 2$. For this model problem the optimal factor and the rate it achieves are
$$
\omega_{\mathrm{opt}} = \frac{2}{1 + \sin\pi h},
\qquad
\rho\bigl(E_{\omega_{\mathrm{opt}}}\bigr) = \omega_{\mathrm{opt}} - 1 = \frac{1 - \sin \pi h}{1 + \sin\pi h} .
$$

5. **Rates as $h \to 0$.** Expanding the logarithms,
$$
-\ln\rho(E_{\mathrm{J}}) \sim \tfrac12\pi^{2}h^{2},
\qquad
-\ln\rho(E_{\mathrm{GS}}) \sim \pi^{2}h^{2},
\qquad
-\ln\rho(E_{\omega_{\mathrm{opt}}}) \sim 2\pi h .
$$
Gauss-Seidel is asymptotically twice as fast as Jacobi; optimal SOR is faster than Gauss-Seidel by the factor $2/(\pi h)$, which grows without bound as the grid is refined. All three rates tend to zero with $h$: Stakgold and Holst emphasise that $\rho(E) \to 1$ in every case, so every classical method slows down as the problem is refined.
:::

:::idea{provenance=original}
Two observations do all the work. First, the five-point matrix on a rectangle has explicitly known eigenvectors — the products of discrete sines, the same ones that separation of variables produces for the continuous problem — so the Jacobi error propagator, which is a polynomial in $A$, is diagonalised at once and its spectral radius can simply be read off. The slowest mode is the smoothest one, $p = q = 1$, whose eigenvalue is only $O(h^{2})$ below $1$: Jacobi averages neighbours, and averaging barely changes a function that is already nearly constant over a few grid spacings. Second, Gauss-Seidel and SOR are not polynomials in $A$ and cannot be diagonalised this way, but SOR's determinant can be computed from triangularity alone, and that single determinant already forces $\omega$ into $(0,2)$ and sets a floor $|1-\omega|$ under the spectral radius. Over-relaxation works by pushing $\omega$ up until the floor $|1-\omega|$ rises to meet the falling spectral radius, and the two meet at $\omega_{\mathrm{opt}}$.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§10.6, p. 800"}
**Part 1 (convergence criterion).** The error satisfies $e^{(n)} = E^{n}e^{(0)}$. A standard fact about matrix powers is that $E^{n} \to 0$ for every starting vector if and only if $\rho(E) < 1$, and that $\|E^{n}\|^{1/n} \to \rho(E)$; see :ref[]{to=linalg.eigenvalues-eigenvectors} and :ref[]{to=num.linear-systems-numerics}. The M-matrix statement is Stakgold and Holst's Theorem 10.6.4, reported here as they give it.

**Part 2 (Jacobi eigenvalues).** For $1 \le p,q \le m$ define the grid function
$$
v^{(p,q)}_{j,k} \;=\; \sin(p\pi j h)\,\sin(q\pi k h) .
$$
It vanishes at $j = 0$ and at $j = m+1$, because $\sin\bigl(p\pi(m+1)h\bigr) = \sin(p\pi) = 0$, and likewise in $k$; so it respects the homogeneous boundary condition built into (P). Using $\sin\bigl((j\pm1)\alpha\bigr) = \sin j\alpha\cos\alpha \pm \cos j\alpha\sin\alpha$, the two terms with $\cos j\alpha$ cancel on addition and
$$
v^{(p,q)}_{j+1,k} + v^{(p,q)}_{j-1,k} = 2\cos(p\pi h)\, v^{(p,q)}_{j,k},
$$
with the same identity in $k$. Hence
$$
A\,v^{(p,q)} = \lambda_{p,q}\,v^{(p,q)},
\qquad
\lambda_{p,q} = \frac{4 - 2\cos p\pi h - 2\cos q\pi h}{h^{2}} .
$$
These $m^{2} = N$ grid functions are linearly independent (they are the columns of a tensor product of two discrete sine transforms), so they are a full eigenbasis. Since $D = (4/h^{2})I$, the Jacobi propagator is $E_{\mathrm{J}} = I - (h^{2}/4)A$, a polynomial in $A$ with the same eigenvectors, and its eigenvalues are
$$
1 - \frac{h^{2}}{4}\lambda_{p,q} = 1 - \frac{4 - 2\cos p\pi h - 2\cos q\pi h}{4} = \tfrac12\bigl(\cos p\pi h + \cos q\pi h\bigr),
$$
which is claim 2. The largest in modulus occurs at $p = q = 1$, giving $\cos\pi h$, and at $p = q = m$, giving $\cos(\pi - \pi h) = -\cos\pi h$; both have modulus $\cos \pi h$, and every other pair gives something smaller. So $\rho(E_{\mathrm{J}}) = \cos\pi h < 1$, and the iteration converges.

**Part 4a (the floor under the SOR spectral radius).** From $B_\omega = \omega(D-\omega L)^{-1}$ and $A = D - L - U$,
$$
E_{\omega} = I - \omega(D-\omega L)^{-1}A = (D-\omega L)^{-1}\bigl[(D - \omega L) - \omega(D - L - U)\bigr] = (D-\omega L)^{-1}\bigl[(1-\omega)D + \omega U\bigr].
$$
The matrix $D - \omega L$ is lower triangular with diagonal $D$, and $(1-\omega)D + \omega U$ is upper triangular with diagonal $(1-\omega)D$. The determinant of a triangular matrix is the product of its diagonal entries, so
$$
\det E_{\omega} = \frac{(1-\omega)^{N}\det D}{\det D} = (1-\omega)^{N} .
$$
The determinant is also the product of the $N$ eigenvalues, each of modulus at most $\rho(E_\omega)$, so $\rho(E_{\omega})^{N} \ge |1-\omega|^{N}$, that is $\rho(E_{\omega}) \ge |1-\omega|$. Convergence needs $\rho < 1$, hence $|1-\omega| < 1$, hence $0 < \omega < 2$.

**Part 5 (the rates).** For small $h$, $\cos\pi h = 1 - \tfrac12\pi^{2}h^{2} + O(h^{4})$, so $-\ln\cos\pi h = \tfrac12\pi^{2}h^{2} + O(h^{4})$ and the Gauss-Seidel rate is twice that, since the logarithm of a square is twice the logarithm. For SOR write $\sigma = \sin\pi h$; then
$$
-\ln\frac{1-\sigma}{1+\sigma} = \ln\frac{1+\sigma}{1-\sigma} = 2\Bigl(\sigma + \frac{\sigma^{3}}{3} + \cdots\Bigr) = 2\pi h + O(h^{3}) . \qquad\square
$$
:::

:::remark[Where the hypotheses are used, and what is not proved here]{provenance=original}
**The eigenvector computation needs the rectangle and the uniform grid.** Part 2 is exact only because the domain is a product of intervals, the grid is uniform, the stencil is the same at every interior node, and the boundary condition is homogeneous Dirichlet. On an L-shaped domain, or with a variable coefficient, the sines are no longer eigenvectors and the spectral radius has to be estimated rather than computed. The *qualitative* conclusion $\rho = 1 - O(h^2)$ survives, because it is driven by the smallest eigenvalue of $A$, which is $O(1)$ while the largest is $O(h^{-2})$: the condition number of the discrete Laplacian is $O(h^{-2})$ whatever the domain, and that is the real culprit.

**Gauss-Seidel depends on the ordering, Jacobi does not.** Permuting the unknowns changes $L$ and $U$ and so changes $E_{\mathrm{GS}}$; it leaves $E_{\mathrm{J}} = I - D^{-1}A$ similar to itself. Claim 3 is stated for a *consistently ordered* matrix with *Property A*, which is the hypothesis Stakgold and Holst attach to it; with a red-black ordering of the grid the identity still holds, but with an arbitrary permutation it need not. This is also why Strauss is careful to prescribe the sweep order when he writes the Gauss-Seidel formula.

**Claim 4 is only half proved here.** The floor $\rho(E_\omega) \ge |1-\omega|$, and hence the necessity of $0 < \omega < 2$, is proved above from the determinant alone and holds for any matrix with non-zero diagonal. The *value* of $\omega_{\mathrm{opt}}$ is a separate classical result of Young's, which requires the consistent-ordering hypothesis and relates the SOR eigenvalues $\xi$ to the Jacobi eigenvalues $\mu$ through $(\xi + \omega - 1)^{2} = \xi\,\omega^{2}\mu^{2}$. No book in this handbook's library proves it; Stakgold and Holst state only that $\rho(E_{\mathrm{SOR}}) \approx 1 - O(h)$, and Strauss says explicitly that he leaves the choice of relaxation factor to specialist texts. The formula is quoted here because it is what practitioners use, and it is verified numerically in the example below rather than taken on trust.

**Spectral radius is an asymptotic statement.** $\rho(E)$ governs the error reduction per sweep *eventually*. $E_{\mathrm{J}}$ is symmetric for this problem, so for Jacobi the bound bites immediately; $E_{\mathrm{GS}}$ and $E_{\omega}$ are not symmetric, and for SOR near $\omega_{\mathrm{opt}}$ the eigenvalues are nearly defective, so there is a transient during which the error falls more slowly than $\rho^{n}$. The example below shows exactly that: Jacobi and Gauss-Seidel take the predicted number of sweeps, SOR takes about a quarter more.

**Jacobi is a disguised heat-equation solve.** Strauss points out that one Jacobi sweep is one step of the explicit scheme for $v_t = v_{xx} + v_{yy}$ with $\Delta x = \Delta y = h$ and $\Delta t = h^{2}/4$, so that relaxing to a steady state *is* integrating the heat equation to $t = \infty$. The two-dimensional von Neumann analysis of :ref[]{to=num.von-neumann-stability} gives the amplification factor $1 - 4s_1\sin^{2}(\theta_1/2) - 4s_2\sin^{2}(\theta_2/2)$ with $s_1 = s_2 = 1/4$, and on the Dirichlet grid the admissible phases are $\theta_i = p\pi h$ with $1 \le p \le m$. At $p = q = 1$ this is $1 - 2\sin^{2}(\pi h/2) = \cos\pi h$, which is exactly $\rho(E_{\mathrm{J}})$ from Part 2 — the two calculations are the same calculation. It also shows that the Jacobi sweep sits precisely at the two-dimensional stability limit $s_1 + s_2 = 1/2$, so it is the largest explicit step available: Jacobi is slow not because the step is timid but because the heat equation itself takes a time of order $1$ to reach equilibrium, needing $O(h^{-2})$ steps of size $h^2/4$.

**Why the classical methods stall, and what replaces them.** Stakgold and Holst show that a Gauss-Seidel sweep damps the high-frequency components of the error quickly while the smooth components barely move — which is just the statement that $\mu_{p,q}$ is near $1$ for small $p,q$. Representing the smooth error on a coarser grid, where it is no longer smooth, and correcting there, is the multigrid idea, and it removes the $h$-dependence of the rate altogether.
:::

:::method[Solving a discrete elliptic problem by relaxation]{provenance=original}
1. **Discretise** on a uniform grid with the five-point stencil, and fold the boundary values into the right-hand side, so that the unknowns are the interior values only.
2. **Scale the equation** so that the diagonal is $1$ after dividing: each node's update is the average of its four neighbours plus $h^{2}f_{j,k}/4$.
3. **Pick the sweep.** Gauss-Seidel dominates Jacobi in both speed and storage and should be preferred unless the sweeps are to be run in parallel, where Jacobi (or a red-black Gauss-Seidel) is the natural choice because all nodes of one colour are independent.
4. **Choose $\omega$.** For a rectangle use $\omega_{\mathrm{opt}} = 2/(1+\sin\pi h)$. Otherwise estimate $\rho(E_{\mathrm{J}})$ by monitoring the ratio of successive Jacobi residual norms, then set $\omega = 2/\bigl(1 + \sqrt{1 - \rho(E_{\mathrm{J}})^{2}}\bigr)$. Erring on the high side of $\omega_{\mathrm{opt}}$ is far safer than erring low: above the optimum the spectral radius is exactly $\omega - 1$, so it rises with unit slope, while below it the rise is much steeper. On the grid of the example, $\omega = 1.50$ gives $\rho = 0.500$ and $\omega = 1.60$ gives $\rho = 0.600$, but dropping only to $\omega = 1.44$ already gives $\rho = 0.511$ and $\omega = 1.40$ gives $\rho = 0.611$.
5. **Stop on the residual**, not on the step: iterate until $\|F - AU^{(n)}\|_\infty$ falls below a tolerance set by the discretisation error, which for the five-point scheme is $O(h^{2})$. Iterating far past that is wasted work, since the discrete solution is not the one wanted anyway.
6. **Predict the cost before running.** Sweeps needed $\approx |\ln\varepsilon| / \bigl(-\ln\rho(E)\bigr)$; work per sweep $\approx 5N$ floating-point operations for Jacobi or Gauss-Seidel and $\approx 8N$ for SOR, with $N$ the number of interior nodes.
7. **Check the answer against the grid refinement**, not against the iteration count: halve $h$ and confirm the solution changes by a factor of four less than the previous change, which is the second-order convergence of the discretisation.
:::

:::example[A problem with an exactly known discrete solution]{provenance=original}
Solve $-u_{xx}-u_{yy} = f$ on $(0,1)^{2}$ with $u = 0$ on the boundary and
$$
f(x,y) = 2\pi^{2}\sin\pi x\,\sin\pi y ,
$$
whose exact solution is $u(x,y) = \sin\pi x\,\sin\pi y$, with $u(\tfrac12,\tfrac12) = 1$.

**Step 1 (the discrete solution in closed form).** The grid values of $f$ are $2\pi^{2}v^{(1,1)}_{j,k}$, a multiple of the first eigenvector of Part 2 of the proof. So the discrete solution is the same multiple of that eigenvector divided by the eigenvalue:
$$
U^{\ast} = \frac{2\pi^{2}}{\lambda_{1,1}}\,v^{(1,1)},
\qquad
\lambda_{1,1} = \frac{4\bigl(1 - \cos\pi h\bigr)}{h^{2}} .
$$
At the centre, where $v^{(1,1)} = 1$, this gives

| $m$ | $h$ | $\lambda_{1,1}$ | $U^{\ast}_{\text{centre}}$ | error | ratio |
|---|---|---|---|---|---|
| $3$ | $1/4$ | $18.7451660$ | $1.05302929$ | $5.302929\times10^{-2}$ | |
| $7$ | $1/8$ | $19.4868397$ | $1.01295075$ | $1.295075\times10^{-2}$ | $4.0947$ |
| $15$ | $1/16$ | $19.6758729$ | $1.00321896$ | $3.218964\times10^{-3}$ | $4.0233$ |

The ratios tend to $4$: the discretisation is second order, as :ref[]{to=num.finite-differences} says it should be. Note that $\lambda_{1,1} \to 2\pi^{2} = 19.7392088$, the eigenvalue of the continuous operator.

**Step 2 (relax on the $h = 1/8$ grid).** There are $N = 49$ unknowns. The predicted rates are
$$
\rho(E_{\mathrm{J}}) = \cos\tfrac{\pi}{8} = 0.92387953,
\qquad
\rho(E_{\mathrm{GS}}) = 0.85355339,
\qquad
\omega_{\mathrm{opt}} = \frac{2}{1+\sin(\pi/8)} = 1.44646269 ,
$$
the last giving $\rho(E_{\omega_{\mathrm{opt}}}) = \omega_{\mathrm{opt}} - 1 = 0.44646269$. Forming the three propagators explicitly and computing their eigenvalues confirms all three to ten figures, and scanning $\omega$ over $[1, 1.99]$ in steps of $0.001$ puts the numerical minimum of $\rho(E_{\omega})$ at $\omega = 1.447$ with value $0.4470$, which is Young's formula to the resolution of the scan.

**Step 3 (count the sweeps).** Starting from $U^{(0)} = 0$ and iterating until the maximum-norm error $\|U^{(n)} - U^{\ast}\|_{\infty}$ has fallen by a factor $10^{-10}$:

| method | predicted $\ln(10^{-10})/\ln\rho$ | sweeps actually taken |
|---|---|---|
| Jacobi | $290.8$ | $291$ |
| Gauss-Seidel | $145.4$ | $146$ |
| SOR at $\omega_{\mathrm{opt}}$ | $28.6$ | $35$ |

Jacobi and Gauss-Seidel land within one sweep of the asymptotic prediction, and Gauss-Seidel takes almost exactly half as many as Jacobi, as claim 5 says. SOR takes about a quarter more than the asymptotic count, the transient predicted in the remark above; it is still better than Gauss-Seidel by a factor of $4.2$, against the asymptotic $2/(\pi h) = 5.09$.

**Step 4 (the cost, in operations).** At $5$ operations per node per sweep, Gauss-Seidel used about $5 \times 49 \times 146 \approx 3.6\times10^{4}$ operations and SOR about $8 \times 49 \times 35 \approx 1.4\times10^{4}$. Extrapolating with claim 5: on a grid with $h = 1/1000$, so $N \approx 10^{6}$, Gauss-Seidel would need $|\ln\varepsilon|/(\pi^{2}h^{2}) \approx 2.3\times10^{6}$ sweeps for the same tolerance and SOR about $3.7\times10^{3}$. In two dimensions $h \asymp N^{-1/2}$, so the sweep counts are $O(N)$ and $O(N^{1/2})$ and the total costs $O(N^{2})$ and $O(N^{3/2})$; the two-dimensional column of Stakgold and Holst's complexity table gives $O(N^{2}\ln N)$ and $O(N^{3/2}\ln N)$, the extra logarithm coming from taking the tolerance down to discretisation-error level, $\varepsilon = O(h^{2}) = O(N^{-1})$, as the grid is refined. The same table puts multilevel methods at $O(N\ln N)$ and nested multilevel and domain decomposition at $O(N)$.
:::

:::application{provenance=original}
Every problem whose steady state is governed by a potential leads to the system (P): electrostatics with a prescribed charge density, steady heat conduction in a slab, Darcy flow in an aquifer, the stream function of a two-dimensional incompressible flow, and the gravitational potential of a mass distribution (:ref[]{to=pde.laplace-fundamental-solution}).

The place where these solvers are run hardest is the pressure projection of an incompressible flow solver. Enforcing $\nabla\cdot\mathbf{u} = 0$ at each time step requires the solution of a Poisson equation for the pressure on the whole grid, and because this happens *every* time step, the relaxation cost, not the physics, dominates the run. The numbers in the example are the reason: at $h = 1/1000$, plain Gauss-Seidel would need millions of sweeps per time step, which is simply not available, while optimally relaxed SOR needs thousands and a multigrid solver tens. The progression Jacobi $\to$ Gauss-Seidel $\to$ SOR $\to$ multigrid is a progression in the exponent of $N$, and in a production code only the last two are usable.

Relaxation also has a long pre-computer history: Southwell's hand-relaxation of structural and fluid problems in the 1930s and 1940s is literally the Gauss-Seidel sweep, performed with a pencil on a drawing of the grid, with the residual at each node written down and the largest one "relaxed" first. The over-relaxation trick, of overshooting the local correction, was discovered in that practice before it was analysed.

Finally, the smoothing property noted in the remark — that a sweep kills rough error and leaves smooth error — is used on its own, outside any solver, as an image-processing operation and as a pre-conditioner inside Krylov methods, where a few sweeps are applied not to solve the system but to make it easier for something else to solve.
:::
