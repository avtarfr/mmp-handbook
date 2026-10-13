---
id: ode.floquet-theory
title: Floquet theory
kind: theorem
level: advanced
summary: For a linear system whose coefficient matrix has period T, the fundamental matrix normalised at the origin factors as a T-periodic matrix times the exponential of a constant one, so the system is a periodic change of variable away from a constant-coefficient system; the eigenvalues of the monodromy matrix — the Floquet multipliers — do not depend on any choice made and decide decay, boundedness and the existence of periodic solutions, which for Hill's equation reduces to the single test |tr M| < 2.
prereqs: [ode.linear-systems, ode.linear-ode-theory, ode.existence-uniqueness, linalg.matrix-exponential, linalg.jordan-form, linalg.eigenvalues-eigenvectors, linalg.determinants]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "Ch. 1, Exercises 6 and 7, p. 46 (the scalar equation y' + a(x)y = 0 with a of period xi: the translate of a solution is a solution, and every non-trivial solution satisfies phi(x + xi) = c phi(x) with c = exp(-int_0^xi a)); Ch. 3, Sec. 3, Exercise 6, p. 110 (the equation y'' + a_1 y' + a_2 y = 0 with coefficients of period xi: the translate of a solution is a solution, a solution has period xi exactly when phi(0) = phi(xi) and phi'(0) = phi'(xi), and the translated basis is expressed in the basis by four constants a, b, c, d); Ch. 3, Sec. 4, Exercise 3, p. 116 (for y'' + alpha(x)y = 0 with alpha of period xi, in the basis phi_1, phi_2 normalised at 0: W(phi_1, phi_2) = 1 throughout, a non-trivial solution of period xi exists if and only if phi_1(xi) + phi_2'(xi) = 2, and a non-trivial solution with phi(x + xi) = -phi(x) exists if and only if phi_1(xi) + phi_2'(xi) = -2)"
    pages: "46, 110, 116"
    role: the translation property of solutions of a periodic linear equation; the scalar multiplier exp(-int a) in dimension one; the four constants that are the entries of the monodromy matrix in dimension two; the criterion phi(0) = phi(xi), phi'(0) = phi'(xi) for a periodic solution; the unit Wronskian and the two trace conditions tr M = 2 and tr M = -2 for Hill's equation
  - work: strogatz-1994
    loc: "Sec. 8.7, 'Linear Stability of Periodic Orbits', pp. 281-282"
    pages: "281-282"
    role: the name characteristic or Floquet multipliers for the eigenvalues of the linearized Poincare map of a closed orbit; the criterion that the orbit is linearly stable exactly when all of them have modulus less than one; the remark that one multiplier is always 1, coming from translation along the orbit, and is discarded
---

:::definition[Periodic systems, the monodromy matrix and the Floquet multipliers]{provenance=adapted src="coddington-1989:Ch. 1, Exercise 6, p. 46, and Ch. 3, §3, Exercise 6, p. 110"}
Let $A$ be an $n \times n$ matrix of continuous complex-valued functions on all of $\mathbb{R}$, and let $T > 0$ satisfy

$$
A(t + T) = A(t) \qquad \text{for every } t \in \mathbb{R} .
$$

We call $x' = A(t)x$ a **$T$-periodic linear system**. Here $T$ is *a* period, not necessarily the smallest one; every statement below holds for whichever period is chosen, and the conclusions change with it, which is a point we return to.

Because $A$ is continuous on $\mathbb{R}$, the initial-value problem for the system has a unique solution defined on the whole line (:ref[]{to=ode.linear-systems}). Write $\Phi$ for the **principal fundamental matrix at $0$**: the matrix solution of

$$
\Phi'(t) = A(t)\,\Phi(t), \qquad \Phi(0) = I_n ,
$$

whose $j$-th column is the solution with initial vector $e_j$. The **monodromy matrix** of the system relative to this normalisation is

$$
M = \Phi(T) ,
$$

the matrix that advances the state by one period: the solution with $x(0) = x_0$ has $x(T) = Mx_0$. Its eigenvalues $\rho_1, \dots, \rho_n$, listed with algebraic multiplicity, are the **Floquet multipliers** (also called characteristic multipliers, :cite[]{work=strogatz-1994 loc="§8.7, p. 282"}) of the system. A **Floquet exponent** attached to $\rho_j$ is any complex number $\mu_j$ with

$$
e^{\mu_j T} = \rho_j ,
$$

so $\mu_j$ is determined only modulo $2\pi i/T$, while $\operatorname{Re}\mu_j = T^{-1}\log|\rho_j|$ is determined exactly.

In dimension one the whole construction collapses to a single number: for $y' + a(t)y = 0$ with $a$ of period $T$, the solution normalised by $y(0) = 1$ is $\exp\bigl(-\int_0^t a\bigr)$, so $M$ is the $1 \times 1$ matrix $\exp\bigl(-\int_0^T a\bigr)$ and this is the only multiplier :cite[]{work=coddington-1989 loc="Ch. 1, Exercise 6(b), p. 46"}. In dimension two, $M$ is the matrix of the four constants that express the translated basis $t \mapsto \varphi_k(t + T)$ in terms of the basis $\varphi_1, \varphi_2$ normalised at $0$ :cite[]{work=coddington-1989 loc="Ch. 3, §3, Exercise 6(c)-(d), p. 110"}. Coddington poses both of these as exercises; the general statement below is not in the library, and the blocks that prove it are labelled accordingly.
:::

:::statement[Floquet's theorem]{provenance=original}
Let $x' = A(t)x$ be a $T$-periodic linear system as above, with principal fundamental matrix $\Phi$ at $0$ and monodromy matrix $M = \Phi(T)$.

1. **Translation.** $\Phi(t + T) = \Phi(t)\,M$ for every $t \in \mathbb{R}$, and more generally $\Phi(t + kT) = \Phi(t)M^k$ for every $k \in \mathbb{Z}$.
2. **Nonsingularity.** $M$ is invertible; indeed
   $$
   \det M = \exp \int_0^{T} \operatorname{tr} A(s)\, ds ,
   $$
   so no multiplier is zero.
3. **The multipliers are intrinsic.** If $\Psi$ is any fundamental matrix of the system, then $\Psi(t + T) = \Psi(t)\,M_\Psi$ with $M_\Psi = \Psi(0)^{-1} M \Psi(0)$. Monodromy matrices built from different fundamental matrices are therefore similar, and the multipliers $\rho_1, \dots, \rho_n$ depend only on $A$ and $T$.
4. **Normal form.** There are a matrix $P$ of continuously differentiable functions on $\mathbb{R}$, with $P(t+T) = P(t)$ and $\det P(t) \neq 0$ for every $t$, and a constant matrix $R$, such that
   $$
   \Phi(t) = P(t)\, e^{tR}, \qquad e^{TR} = M, \qquad P(0) = I_n .
   $$
   The substitution $x = P(t)y$ turns $x' = A(t)x$ into the constant-coefficient system $y' = Ry$. The eigenvalues of $R$ are a set of Floquet exponents, one for each multiplier.
5. **Floquet solutions.** For each multiplier $\rho$ there is a non-trivial solution with
   $$
   x(t + T) = \rho\, x(t) \qquad \text{for all } t,
   $$
   equivalently $x(t) = e^{\mu t} p(t)$ with $p$ of period $T$ and $e^{\mu T} = \rho$. Such a solution is called a **Floquet solution**, or a Bloch solution.
:::

:::statement[What the multipliers decide]{provenance=adapted src="coddington-1989:Ch. 3, §4, Exercise 3, p. 116; strogatz-1994:§8.7, pp. 281-282"}
With the notation above, let $\rho_1, \dots, \rho_n$ be the Floquet multipliers and $\mu_1, \dots, \mu_n$ corresponding exponents.

1. **Decay.** Every solution satisfies $x(t) \to 0$ as $t \to +\infty$ exactly when every multiplier obeys $|\rho_j| < 1$; equivalently, when every exponent has $\operatorname{Re}\mu_j < 0$. In that case the decay is exponential: for each $r$ with $\max_j |\rho_j| < r < 1$ there is a constant $C$ with $\|x(t)\| \le C\, r^{\,t/T}\|x(0)\|$ for all $t \ge 0$. (This is the criterion :cite[Strogatz]{work=strogatz-1994 loc="§8.7, p. 281"} states for the non-trivial multipliers of a closed orbit of an autonomous system; the application below connects that setting to this one.)
2. **Boundedness.** Every solution is bounded on $[0, \infty)$ if and only if $|\rho_j| \le 1$ for every $j$ *and* every multiplier of modulus $1$ is a semisimple eigenvalue of $M$, meaning that its algebraic and geometric multiplicities agree.
3. **Instability.** If $|\rho_j| > 1$ for some $j$, there is a solution with $\|x(t)\| \to \infty$ as $t \to +\infty$.
4. **Periodic and antiperiodic solutions.** A non-trivial solution of period $T$ exists precisely when $1$ occurs among the multipliers, and a non-trivial solution obeying $x(t + T) = -x(t)$, hence of period $2T$, precisely when $-1$ does.
5. **Hill's equation.** Let $\alpha$ be real, continuous and of period $T$, and consider $y'' + \alpha(t)y = 0$, written as the system $x = (y, y')$ with $A(t) = \begin{pmatrix} 0 & 1 \\ -\alpha(t) & 0\end{pmatrix}$. Then $\operatorname{tr}A \equiv 0$, so $\det M = 1$ and the multipliers are the roots of $\rho^2 - \tau\rho + 1 = 0$ with $\tau = \operatorname{tr} M$. Consequently:
   - if $|\tau| < 2$, every solution is bounded on $\mathbb{R}$;
   - if $|\tau| > 2$, some solution grows exponentially as $t \to +\infty$;
   - $\tau = 2$ exactly when there is a non-trivial solution of period $T$, and $\tau = -2$ exactly when there is a non-trivial solution with $y(t+T) = -y(t)$ :cite[]{work=coddington-1989 loc="Ch. 3, §4, Exercise 3(b)-(c), p. 116"}; in these two borderline cases all solutions are bounded if and only if $M = I_2$, respectively $M = -I_2$.

   In the notation of :cite[Coddington's exercise]{work=coddington-1989 loc="Ch. 3, §4, Exercise 3, p. 116"}, where $\varphi_1, \varphi_2$ are the solutions with $\varphi_1(0) = 1$, $\varphi_1'(0) = 0$ and $\varphi_2(0) = 0$, $\varphi_2'(0) = 1$, the Wronskian $W(\varphi_1, \varphi_2)$ is identically $1$ and $\tau = \varphi_1(T) + \varphi_2'(T)$.
:::

:::idea{provenance=original}
Everything follows from one observation: shifting time by a period carries solutions to solutions, because the coefficient matrix is unchanged by the shift. The shift is therefore a linear map of the $n$-dimensional solution space to itself, and $M$ is its matrix in the basis normalised at $t = 0$. So a *global* question about a system with variable coefficients — do solutions grow? — becomes a *finite-dimensional* question about the powers of one matrix.

The normal form says more: since $M$ is invertible it is the exponential of some matrix $B$ (build $B$ from the Jordan form of $M$, using a logarithm of each eigenvalue and the terminating logarithmic series on the nilpotent part), and dividing $B$ by $T$ gives a constant $R$ whose exponential advances exactly like $M$ over one period. Stripping $e^{tR}$ off $\Phi$ leaves something that repeats with period $T$. The growth of solutions is carried entirely by $e^{tR}$, and the periodic factor only wobbles.
:::

:::proof{provenance=original}
**Step 1: translation.** Put $\Theta(t) = \Phi(t + T)$. Then $\Theta'(t) = \Phi'(t+T) = A(t+T)\Phi(t+T) = A(t)\Theta(t)$, where the last equality is the periodicity of $A$ — this is the only place it is used. So $\Theta$ solves the same matrix equation as $\Phi$ and has $\Theta(0) = \Phi(T) = M$. The matrix $t \mapsto \Phi(t)M$ solves it too, since $(\Phi M)' = \Phi'M = A\Phi M$, and takes the same value $M$ at $t = 0$. By uniqueness for the initial-value problem (:ref[]{to=ode.linear-systems}) applied to each column, $\Phi(t+T) = \Phi(t)M$ for all $t$. Iterating gives $\Phi(t + kT) = \Phi(t)M^k$ for $k \ge 0$, and the relation $\Phi(t) = \Phi(t - T)M$ gives it for negative $k$ once $M$ is known to be invertible, which is Step 2.

**Step 2: the determinant.** Let $w(t) = \det \Phi(t)$. The determinant is linear in each row separately, so differentiating it row by row,
$$
w'(t) = \sum_{j=1}^{n} \det \Phi_{[j]}(t) ,
$$
where $\Phi_{[j]}$ is $\Phi$ with its $j$-th row replaced by the derivative of that row. Row $j$ of $\Phi' = A\Phi$ is $\sum_{k} a_{jk}(t)\,(\text{row } k \text{ of } \Phi)$. Expanding $\det\Phi_{[j]}$ by linearity in that row, every term with $k \neq j$ is a determinant with two equal rows and vanishes, leaving $a_{jj}(t)\, w(t)$. Summing over $j$,
$$
w'(t) = \bigl(\operatorname{tr}A(t)\bigr)\, w(t), \qquad w(0) = 1 ,
$$
a scalar linear equation whose solution is $w(t) = \exp\int_0^t \operatorname{tr}A$. At $t = T$ this is the stated formula, and since an exponential never vanishes, $\det M \neq 0$.

**Step 3: independence of the fundamental matrix.** By :ref[]{to=ode.linear-systems}, any fundamental matrix is $\Psi(t) = \Phi(t)Q$ for the constant nonsingular $Q = \Psi(0)$. Then $\Psi(t+T) = \Phi(t+T)Q = \Phi(t)MQ = \Psi(t)\,Q^{-1}MQ$, so $M_\Psi = Q^{-1}MQ$ is similar to $M$ and has the same eigenvalues with the same multiplicities.

**Step 4: a logarithm of $M$.** We claim that every nonsingular $M \in \mathbb{C}^{n\times n}$ is $e^{B}$ for some $B$. Put $M$ in Jordan form (:ref[]{to=linalg.jordan-form}), $M = SJS^{-1}$ with $J$ the direct sum of blocks $J_k = \lambda_k(I + N_k)$, where $N_k$ is nilpotent and $\lambda_k \neq 0$ because $M$ is nonsingular. Fix any $\log\lambda_k$ with $e^{\log \lambda_k} = \lambda_k$ and set
$$
L_k = (\log \lambda_k)\, I + \ell(N_k), \qquad \ell(X) = \sum_{m \ge 1} \frac{(-1)^{m+1}}{m}\, X^m ,
$$
the sum in $\ell$ being finite because $N_k$ is nilpotent. In the ring of formal power series the identity $\exp(\ell(X)) = 1 + X$ holds, and both sides terminate when $X$ is replaced by a nilpotent matrix, so $e^{\ell(N_k)} = I + N_k$. The two summands in $L_k$ commute (one is a scalar matrix), so $e^{L_k} = \lambda_k (I + N_k) = J_k$ by the product rule for commuting exponentials (:ref[]{to=linalg.matrix-exponential}). Taking $B = S\bigl(\bigoplus_k L_k\bigr)S^{-1}$ and using $e^{SXS^{-1}} = Se^{X}S^{-1}$ gives $e^{B} = M$.

**Step 5: the normal form.** Set $R = B/T$, so $e^{TR} = M$, and define $P(t) = \Phi(t)e^{-tR}$. Then $P$ is continuously differentiable and nonsingular (a product of nonsingular matrices), $P(0) = I_n$, and
$$
P(t + T) = \Phi(t+T)\,e^{-(t+T)R} = \Phi(t)\,M\,e^{-TR}e^{-tR} = \Phi(t)e^{-tR} = P(t) ,
$$
using Step 1, then $e^{-(t+T)R} = e^{-TR}e^{-tR}$ (the exponents commute), then $Me^{-TR} = I_n$. So $P$ has period $T$ and $\Phi(t) = P(t)e^{tR}$. For the change of variable, let $x$ solve the system and put $y = P(t)^{-1}x$; since $x(t) = \Phi(t)c = P(t)e^{tR}c$ for a constant $c$, we get $y(t) = e^{tR}c$, which satisfies $y' = Ry$. Conversely $x = P(t)y$ recovers a solution. Finally, the eigenvalues of $R$ are exponents of the multipliers, with matching multiplicities. Indeed $\ell(N_k)$ is a sum of positive powers of a nilpotent matrix and so is nilpotent, hence $L_k = (\log\lambda_k)I + \ell(N_k)$ has $\log\lambda_k$ as its only eigenvalue, with multiplicity the size of the block $J_k$. Therefore the eigenvalues of $R = S\bigl(\bigoplus_k L_k/T\bigr)S^{-1}$, listed with algebraic multiplicity, are the numbers $(\log\lambda_k)/T$ repeated according to block size, matching the multipliers $\lambda_k$ repeated the same way; and $e^{T \cdot (\log\lambda_k)/T} = \lambda_k$.

**Step 6: Floquet solutions.** Let $Mv = \rho v$ with $v \neq 0$ and put $x(t) = \Phi(t)v$. This is a non-trivial solution, and $x(t+T) = \Phi(t+T)v = \Phi(t)Mv = \rho\, x(t)$ by Step 1. Choose $\mu$ with $e^{\mu T} = \rho$ and set $p(t) = e^{-\mu t}x(t)$; then $p(t+T) = e^{-\mu t}e^{-\mu T}\rho\, x(t) = p(t)$, so $p$ has period $T$ and $x(t) = e^{\mu t}p(t)$. Conversely any $x$ of that form satisfies $x(t+T) = \rho x(t)$. This proves part 5 and completes Floquet's theorem. $\square$
:::

:::proof[What the multipliers decide]{provenance=original label="Proof"}
Write any $t \ge 0$ as $t = kT + s$ with $k \in \mathbb{N} \cup \{0\}$ and $s \in [0, T)$. A solution is $x(t) = \Phi(t)c$ with $c = x(0)$, so by Step 1 above
$$
x(kT + s) = \Phi(s)\, M^{k} c .
$$
On the compact interval $[0,T]$ the continuous functions $s \mapsto \|\Phi(s)\|$ and $s \mapsto \|\Phi(s)^{-1}\|$ attain finite maxima $K$ and $K'$, and $K' > 0$. Hence
$$
\frac{1}{K'}\,\bigl\|M^{k}c\bigr\| \;\le\; \|x(kT+s)\| \;\le\; K\,\bigl\|M^{k}c\bigr\| ,
$$
the lower bound because $\|M^kc\| = \|\Phi(s)^{-1}x(kT+s)\| \le K'\|x(kT+s)\|$. So the behaviour of all solutions as $t \to +\infty$ is the behaviour of the powers $M^k$, and nothing else.

**Powers of $M$.** Use the Jordan form again: $M^k = S J^k S^{-1}$, and a block $\lambda(I+N)$ of size $d$ has
$$
\bigl(\lambda(I+N)\bigr)^{k} = \lambda^{k}\sum_{m=0}^{d-1}\binom{k}{m} N^{m} ,
$$
a finite sum because $N^d = 0$. Writing it out, the entry of the block in the $m$-th superdiagonal is $\lambda^{k-m}\binom{k}{m}$ for $0 \le m \le d-1$, and everything below the diagonal is zero. For fixed $m$ the binomial coefficient $\binom{k}{m} = k(k-1)\cdots(k-m+1)/m!$ is a polynomial in $k$ of degree exactly $m$, so each such entry has modulus comparable to $|\lambda|^{k}k^{m}$ for large $k$. Three cases follow. If $|\lambda| < 1$ every entry of the block tends to $0$, since a geometric factor beats a polynomial one. If $|\lambda| = 1$ the diagonal entries have modulus $1$ and do not tend to $0$, while the entry at $m = 1$, present as soon as $d \ge 2$, has modulus $k$ and is unbounded. If $|\lambda| > 1$ the diagonal entries already blow up. Collecting the blocks: $J^{k} \to 0$ exactly when every eigenvalue has $|\lambda| < 1$, and $\{J^{k}\}$ is bounded exactly when every eigenvalue has $|\lambda| < 1$ or has $|\lambda| = 1$ with all of its blocks of size $d = 1$ — that is, when the modulus-one eigenvalues are semisimple. Since $M^{k} = SJ^{k}S^{-1}$ with $S$ fixed and invertible, the same holds for $M^{k}$, and since $\mathbb{C}^n$ has a basis, $\{M^{k}c\}$ bounded for every $c$ is the same as $\{M^{k}\}$ bounded. Parts 1, 2 and 3 follow, part 3 because an eigenvector $v$ for $|\rho| > 1$ gives $\|M^kv\| = |\rho|^k\|v\| \to \infty$. For the rate in part 1, choose $r$ with $\max_j|\rho_j| < r < 1$; then $\|M^k\| \le C_0 r^{k}$ for some $C_0$ by the display above, and $\|x(kT+s)\| \le KC_0 r^{k}\|c\| \le (KC_0/r)\, r^{\,t/T}\|c\|$ since $k \ge t/T - 1$.

**Part 4.** If $x$ is a non-trivial solution of period $T$ then $x(0) = x(T) = Mx(0)$, and $x(0) \neq 0$ by uniqueness, so $1$ is an eigenvalue of $M$. Conversely an eigenvector for $\rho = 1$ gives a Floquet solution with $x(t+T) = x(t)$ by Step 6. This is the matrix form of the criterion that a solution is periodic exactly when its value and derivative repeat after one period :cite[]{work=coddington-1989 loc="Ch. 3, §3, Exercise 6(b), p. 110"}. The same argument with $x(T) = -x(0)$ handles $\rho = -1$.

**Part 5.** For $y'' + \alpha(t)y = 0$ the coefficient matrix has zero trace, so $\det M = e^{0} = 1$ by Step 2; equivalently the Wronskian of the normalised basis is identically $1$ :cite[]{work=coddington-1989 loc="Ch. 3, §4, Exercise 3(a), p. 116"}. A $2\times2$ matrix satisfies $\rho^2 - (\operatorname{tr}M)\rho + \det M = 0$, which here is $\rho^2 - \tau\rho + 1 = 0$, so $\rho_1\rho_2 = 1$.
- If $|\tau| < 2$ the discriminant $\tau^2 - 4$ is negative, so the roots are a conjugate pair of modulus $\sqrt{\rho_1\rho_2} = 1$, and they are distinct, hence semisimple. Part 2 gives boundedness on $[0,\infty)$; applying the same argument to the time-reversed system, or using $\Phi(t - kT) = \Phi(t)M^{-k}$ with $M^{-1}$ having the same two multipliers inverted and still of modulus $1$, gives boundedness on $(-\infty, 0]$ as well.
- If $|\tau| > 2$ the roots are real, distinct and reciprocal, so one has modulus $> 1$: part 3 applies.
- $\rho = 1$ is a root exactly when $1 - \tau + 1 = 0$, that is $\tau = 2$, and $\rho = -1$ exactly when $1 + \tau + 1 = 0$, that is $\tau = -2$; by part 4 these are the conditions for a non-trivial periodic, respectively antiperiodic, solution. In the normalised basis $\tau = \varphi_1(T) + \varphi_2'(T)$, because that basis is exactly the one whose matrix is $\Phi$. At $\tau = 2$ the only multiplier is $1$ with algebraic multiplicity $2$, so by part 2 all solutions are bounded precisely when $M$ is semisimple, that is $M = I_2$; similarly for $\tau = -2$ and $M = -I_2$. $\square$
:::

:::remark[Where the hypotheses are used, and the trap that catches everyone]{provenance=original}
- **Continuity of $A$ on all of $\mathbb{R}$** is what makes $\Phi$ exist on the whole line, so that $\Phi(T)$ is defined and $\Phi(t+T)$ makes sense (:ref[]{to=ode.existence-uniqueness}). Only continuity is needed, not smoothness: nothing in the proof differentiates $A$.
- **Periodicity with the *same* $T$ in every entry** enters exactly once, in Step 1. It is indispensable, not technical: if $A(t) = A_1(t) + A_2(t)$ with $A_1$ of period $1$ and $A_2$ of period $\sqrt 2$, there is no $T$ at all, no monodromy matrix, and no multipliers. Quasi-periodic systems are a genuinely harder subject.
- **Linearity** is used in Step 3 (every fundamental matrix is $\Phi Q$) and throughout the second proof, where the solution is $\Phi(t)c$ with $c$ constant.
- **Invertibility of $M$** comes from Step 2 and is needed for the multipliers to have logarithms in Step 4. Without it the normal form is false: $e^{TR}$ is always invertible.
- **$T$ is a choice.** Replacing $T$ by $2T$ replaces every multiplier $\rho$ by $\rho^2$, so a system with multipliers $\pm 1$ at period $T$ has both multipliers equal to $1$ at period $2T$. The decay and boundedness criteria are unaffected, since $|\rho| < 1$ if and only if $|\rho^2| < 1$, but the periodicity criterion in part 4 is not: it detects solutions of the period you tested with.
- **The trap: the eigenvalues of $A(t)$ tell you nothing.** It is tempting to freeze $t$, compute the eigenvalues of $A(t)$ and conclude stability when they all have negative real part for every $t$. This is false. Take
  $$
  A(t) = \begin{pmatrix} -1 + \tfrac32\cos^2 t & 1 - \tfrac32 \sin t\cos t \\[2pt] -1 - \tfrac32 \sin t \cos t & -1 + \tfrac32 \sin^2 t \end{pmatrix} ,
  $$
  which has period $T = \pi$. Its trace is $-\tfrac12$ and its determinant is $\tfrac12$ at every $t$, so its eigenvalues are the constants $(-1 \pm i\sqrt7)/4$, with real part $-1/4 < 0$ for all $t$. Yet
  $$
  x_1(t) = e^{t/2}\begin{pmatrix} \cos t \\ -\sin t\end{pmatrix}, \qquad x_2(t) = e^{-t}\begin{pmatrix} \sin t \\ \cos t \end{pmatrix}
  $$
  are solutions, as substitution confirms, and they are the columns of the principal fundamental matrix because $x_1(0) = e_1$ and $x_2(0) = e_2$. Hence
  $$
  M = \Phi(\pi) = \begin{pmatrix} -e^{\pi/2} & 0 \\ 0 & -e^{-\pi}\end{pmatrix} ,
  $$
  with multipliers $-e^{\pi/2} \approx -4.8105$ and $-e^{-\pi} \approx -0.0432$. The first has modulus greater than $1$, so every solution whose initial vector is not a multiple of $e_2$ blows up. As a check, $\det M = e^{-\pi/2}$ agrees with $\exp\int_0^\pi \operatorname{tr}A = e^{-\pi/2}$ from Step 2. The instantaneous eigenvalues describe only the frozen system $x' = A(t_0)x$. The true solution must in addition follow eigenvectors that rotate as $t$ advances — here those of $A(t)$ turn once per period — and that rotation feeds in growth the frozen picture cannot see. Only the monodromy matrix, which integrates over a whole period, accounts for both effects.
:::

:::remark[Real coefficients and the doubled period]{provenance=original}
Suppose $A$ is real. Then $\Phi$ and $M$ are real, but $R$ in part 4 of Floquet's theorem need not be, and no amount of cleverness can make it so. Note first that any normal form $\Phi(t) = P(t)e^{tR}$ of period $T$ has $P(0) = \Phi(0) = I_n$ and therefore $M = \Phi(T) = P(T)e^{TR} = P(0)e^{TR} = e^{TR}$, so a real normal form of period $T$ exists only if $M$ is the exponential of a real matrix. In the example just given, $M = \operatorname{diag}(-e^{\pi/2}, -e^{-\pi})$. If $M$ were $e^{B}$ with $B = TR$ a real $2\times 2$ matrix, the eigenvalues $\beta_1, \beta_2$ of $B$ would satisfy $e^{\beta_i} < 0$ and so could not be real; a real $2 \times 2$ matrix with no real eigenvalue has a conjugate pair, and then $e^{\beta_2} = \overline{e^{\beta_1}}$ would force the two eigenvalues of $M$ to be complex conjugates — but they are distinct real numbers. So a real normal form of period $T$ does not exist here.

Doubling the period repairs this: **there are a real $2T$-periodic nonsingular $P$ and a real constant $R$ with $\Phi(t) = P(t)e^{tR}$.** It suffices to produce a real $S$ with $e^{S} = M^2$, for then $R = S/(2T)$ and $P(t) = \Phi(t)e^{-tR}$ are real, and, exactly as in Step 5 but with $\Phi(t+2T) = \Phi(t)M^2$ and $e^{2TR} = M^2$, we get $P(t+2T) = \Phi(t+2T)e^{-(t+2T)R} = \Phi(t)M^2e^{-2TR}e^{-tR} = P(t)$. To build $S$, split $\mathbb{C}^n$ into the generalised eigenspaces $E_\lambda$ of $M$ and write $M = \lambda(I + N_\lambda)$ on $E_\lambda$ with $N_\lambda$ nilpotent, using the series $\ell$ of Step 4.
- If $\lambda > 0$, set $S = 2(\log\lambda)I + 2\ell(N_\lambda)$ on $E_\lambda$, with the real logarithm; then $e^{S} = \lambda^2(I+N_\lambda)^2 = M^2$ there.
- If $\lambda < 0$, note that $M^2 = \lambda^2(I + N'_\lambda)$ on $E_\lambda$ with $N'_\lambda = 2N_\lambda + N_\lambda^2$ nilpotent, and set $S = (\log \lambda^2)I + \ell(N'_\lambda)$, again with a real logarithm. This is where the squaring is needed: a negative $\lambda$ has no real logarithm, but $\lambda^2$ does.
- If $\lambda \notin \mathbb{R}$, pick one eigenvalue out of each conjugate pair, call it $\lambda$, fix any $\log\lambda$ and set $S = 2(\log\lambda)I + 2\ell(N_\lambda)$ on $E_\lambda$; on $E_{\bar\lambda}$ define $S$ by $Sv = \overline{S\bar v}$, which is legitimate because complex conjugation maps $E_{\bar\lambda}$ onto $E_\lambda$ ($M$ being real), and which gives $e^{S}v = \overline{M^2\bar v} = M^2 v$ there.

For real $\lambda$ the subspace $E_\lambda = \ker (M - \lambda I)^n$ is carried to itself by conjugation and the formulas above are real, so in every case $\overline{Sv} = S\bar v$ for all $v$. A matrix commuting with conjugation in this way has real entries, and $e^{S} = M^2$ block by block. The price of realness is that $P$ repeats only after $2T$; a real Floquet solution attached to a negative multiplier $\rho$ is $e^{\sigma t}q(t)$ with $\sigma = T^{-1}\log|\rho|$ and $q(t+T) = -q(t)$, so it has the doubled period built in.
:::

:::method[Finding the multipliers and reading off the stability]{provenance=original}
1. **Check the hypotheses.** Confirm that $A$ is continuous and that a single $T > 0$ satisfies $A(t+T) = A(t)$ entrywise. For a scalar equation $y^{(n)} + a_1(t)y^{(n-1)} + \cdots + a_n(t)y = 0$ with $T$-periodic coefficients, first rewrite it as a system (:ref[]{to=ode.linear-systems}); the companion matrix inherits the period.
2. **Integrate one period, $n$ times.** Solve $x' = A(t)x$ on $[0, T]$ with each standard basis vector $e_1, \dots, e_n$ as initial data, exactly if the system allows it and numerically otherwise. Assemble the results as the columns of $M$. One period of integration is all that is ever required.
3. **Check the determinant.** Compare $\det M$ with $\exp\int_0^T \operatorname{tr}A$. For a numerical integration this is a cheap and sharp error estimate; for Hill's equation it is the test $\det M = 1$.
4. **Compute the multipliers** $\rho_j$ as the eigenvalues of $M$, and the exponents as $\mu_j = T^{-1}\log \rho_j$, remembering that each $\mu_j$ is fixed only up to adding a multiple of $2\pi i/T$ and that only $\operatorname{Re}\mu_j = T^{-1}\log|\rho_j|$ is unambiguous.
5. **Read the verdict.** All $|\rho_j| < 1$: every solution decays exponentially. Some $|\rho_j| > 1$: there are exponentially growing solutions. All $|\rho_j| \le 1$ with the modulus-one ones semisimple: all solutions bounded, none decaying to zero in general. A multiplier equal to $1$ or $-1$: a periodic or antiperiodic solution exists, and you are on a stability boundary.
6. **In dimension two with $\operatorname{tr}A \equiv 0$,** skip the eigenvalue computation: $\det M = 1$, so the single number $\tau = \operatorname{tr}M$ decides everything by part 5 of the second statement. The stability diagram of a parametrised family is the set where $|\tau| < 2$, and its boundary is the curve $|\tau| = 2$.
7. **To get a Floquet solution,** take an eigenvector $v$ of $M$ for the multiplier of interest and solve the system once more with $x(0) = v$; the resulting solution reproduces itself multiplied by $\rho$ after each period.
:::

:::example[A square-wave Hill equation]{provenance=original}
Take the equation
$$
y'' + \alpha(t)\,y = 0, \qquad \alpha(t) = \begin{cases} 4, & 0 \le t < 1, \\ 1, & 1 \le t < 2,\end{cases} \qquad \alpha(t+2) = \alpha(t) ,
$$
a stiffness that is switched between two values twice per period $T = 2$. The coefficient is piecewise constant rather than continuous, so by a *solution* we mean a $C^1$ function satisfying the equation on each interval of constancy. Nothing in the theory above changes: the initial-value problem still has a unique solution, obtained by solving on $[0,1)$ and using the value and derivative at $t = 1$ as new initial data, the solution still depends linearly on $(y(0), y'(0))$, and Step 1 only used $A(t+T) = A(t)$ together with uniqueness.

**The monodromy matrix.** On an interval of length $h$ where $\alpha \equiv \omega^2$ with $\omega > 0$, the general solution is a combination of $\cos \omega t$ and $\sin\omega t$, so the matrix carrying $(y, y')$ across that interval is
$$
C(\omega, h) = \begin{pmatrix} \cos\omega h & \omega^{-1}\sin\omega h \\ -\omega \sin\omega h & \cos\omega h\end{pmatrix} ,
$$
whose determinant is $\cos^2 + \sin^2 = 1$. Our period consists of $h = 1$ at $\omega_1 = 2$ followed by $h = 1$ at $\omega_2 = 1$, and the second step acts after the first, so
$$
M = C(1, 1)\, C(2, 1) .
$$
Multiplying out, with $c_j = \cos \omega_j$ and $s_j = \sin\omega_j$,
$$
M = \begin{pmatrix} c_1 c_2 - 2 s_1 s_2 & \tfrac12 s_1 c_2 + s_2 c_1 \\[2pt] -s_2 c_1 - 2 s_1 c_2 & c_1c_2 - \tfrac12 s_1 s_2 \end{pmatrix}
= \begin{pmatrix} -1.755140 & -0.104528 \\ -0.632416 & -0.607419 \end{pmatrix} ,
$$
where $\cos 1 = 0.540302$, $\sin 1 = 0.841471$, $\cos 2 = -0.416147$, $\sin 2 = 0.909297$. Its determinant is $1$, as it must be, since $\det C = 1$ for each factor and $\operatorname{tr}A \equiv 0$.

**The trace test.** The trace is
$$
\tau = 2\cos 1 \cos 2 - \Bigl(\frac{\omega_1}{\omega_2} + \frac{\omega_2}{\omega_1}\Bigr)\sin 1 \sin 2 = 2\cos 1\cos 2 - \tfrac52 \sin 1 \sin 2 = -2.362559 .
$$
Since $|\tau| > 2$, part 5 of the second statement says the equation has exponentially growing solutions: the switching destabilises an oscillator that is stable at either fixed stiffness. The multipliers are the roots of $\rho^2 + 2.362559\rho + 1 = 0$,
$$
\rho_{1} = \frac{\tau - \sqrt{\tau^2-4}}{2} = -1.810104, \qquad \rho_2 = \frac{\tau+\sqrt{\tau^2-4}}{2} = -0.552454 ,
$$
and indeed $\rho_1\rho_2 = 1.000000$. The growth rate is
$$
\sigma = \frac{\log|\rho_1|}{T} = \frac{\log 1.810104}{2} = 0.296692 ,
$$
so the unstable Floquet solution has amplitude $e^{\sigma t}$, multiplying by $1.810104$ every $2$ units of time. Because $\rho_1 < 0$, that solution is $e^{\sigma t}q(t)$ with $q(t+2) = -q(t)$, of period $4$.

**Checking the number.** An eigenvector for $\rho_1$ comes from the first row of $M - \rho_1 I$: taking $v_1 = 1$,
$$
v_2 = \frac{\rho_1 - M_{11}}{M_{12}} = \frac{-1.810104 + 1.755140}{-0.104528} = 0.525836 .
$$
Start the equation at $y(0) = 1$, $y'(0) = 0.525836$. On $[0,1]$, $y = \cos 2t + 0.262918\sin 2t$, so $y(1) = \cos 2 + 0.262918\sin 2 = -0.416147 + 0.239071 = -0.177076$ and $y'(1) = -2\sin 2 + 0.525836\cos 2 = -1.818595 - 0.218825 = -2.037420$. On $[1,2]$ the frequency is $1$, so $y(t) = y(1)\cos(t-1) + y'(1)\sin(t-1)$ and
$$
y(2) = -0.177076\,(0.540302) + (-2.037420)(0.841471) = -0.095675 - 1.714430 = -1.810105 .
$$
The predicted value is $\rho_1 y(0) = -1.810104$, and the last digit of the computed $-1.810105$ is the rounding carried by the six-digit intermediate values. The derivative comes out the same way: $y'(2) = -y(1)\sin 1 + y'(1)\cos 1 = -0.951818$, against the predicted $\rho_1 v_2 = -1.810104\,(0.525836) = -0.951818$.

**A stable neighbour.** Halving both intervals, $\alpha = 4$ on $[0,\tfrac12)$ and $\alpha = 1$ on $[\tfrac12, 1)$ with $T = 1$, the same formula gives $\tau = 2\cos\tfrac12\cos 1 - \tfrac52 \sin\tfrac12 \sin 1 = -0.060237$. Now $|\tau| < 2$, the multipliers are $-0.030118 \pm 0.999546\,i$ of modulus exactly $1$, and every solution is bounded. Switching the same two stiffnesses twice as fast turns instability into stability — which is the whole content of a parametric stability chart.
:::

:::application{provenance=original}
- **Parametric resonance.** A pendulum whose support is driven vertically, or a child pumping a swing by changing the effective length twice per swing, obeys Hill's equation $y'' + \alpha(t)y = 0$ with $\alpha$ periodic; the smooth model is Mathieu's equation $y'' + (\delta + \varepsilon\cos 2t)y = 0$. The theory above says that the $(\delta, \varepsilon)$ plane splits into regions $|\tau(\delta,\varepsilon)| < 2$ where the swing stays small and regions $|\tau| > 2$ where it grows exponentially, separated by the curves $\tau = \pm 2$ on which a $T$-periodic or $2T$-periodic solution exists. Those curves are the familiar tongues issuing from $\delta = m^2$, and the tongue at $\delta = 1$ — pumping at twice the natural frequency — is the one the child uses. The same equation with the same analysis governs the radio-frequency quadrupole (Paul) ion trap, where the stable region of the chart is precisely the set of ion masses the trap confines.
- **Stability of limit cycles.** If $\gamma$ is a $T$-periodic solution of an autonomous nonlinear system $x' = f(x)$, the equation for a small deviation is the $T$-periodic linear system $v' = Df(\gamma(t))\,v$, so its Floquet multipliers measure the growth of perturbations. One multiplier is always $1$: differentiating $\gamma'(t) = f(\gamma(t))$ shows that $v = \gamma'$ solves the variational equation, and $\gamma'$ has period $T$. :cite[Strogatz]{work=strogatz-1994 loc="§8.7, p. 282"} calls this the trivial multiplier, discards it as mere time translation, and states that the closed orbit is linearly stable exactly when the remaining $n-1$ multipliers of the linearized :ref[Poincaré map]{to=dyn.poincare-maps} have modulus less than $1$ — which is part 1 of the statement above, read on the complement of the direction along the orbit.
- **Electrons in a one-dimensional crystal.** The stationary Schrödinger equation $-\psi'' + V(t)\psi = E\psi$ with $V$ of period $T$ is Hill's equation with $\alpha = E - V$. For each energy $E$ the trace $\tau(E)$ of the monodromy matrix is a continuous function, and no solution grows exponentially exactly when $|\tau(E)| \le 2$. The energy intervals where this holds are the allowed bands of the solid, the intervals where $|\tau(E)| > 2$ are the forbidden gaps, and the band edges are the energies with $\tau(E) = \pm 2$, where the Floquet solutions are genuinely periodic or antiperiodic. The Floquet solution $e^{\mu t}p(t)$ with $p$ periodic is the Bloch wave, and $\mu = ik$ defines the crystal momentum inside a band.
- **Beam optics.** In an alternating-gradient accelerator the transverse displacement of a particle satisfies Hill's equation with a focusing strength that repeats each lattice cell. Designers compute the one-cell transfer matrix — our $M$ — and require $|\operatorname{tr}M| < 2$, writing $\operatorname{tr}M = 2\cos\Theta$ to read off the phase advance $\Theta$ per cell. The stability criterion is exactly part 5 above.
:::
