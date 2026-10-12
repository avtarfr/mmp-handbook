---
id: ode.eigenfunction-expansions
title: Eigenfunction expansions
kind: theorem
level: core
summary: The eigenfunctions of a regular Sturm-Liouville problem form a complete orthogonal family, so every square-integrable function has a mean-square convergent expansion in them with coefficients given by weighted inner products, and the expansion turns a forced boundary-value problem into a term-by-term division by $\lambda_n-\sigma$.
prereqs: [ode.sturm-liouville-theory, linalg.inner-product-spaces, measure.lp-spaces]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§5.4, three notions of convergence, Thm 3 ($L^2$ convergence), Thm 5 (least-square approximation) with its proof, Bessel's inequality (18), Thm 6 and the definition of completeness (19), Corollary 7, pp. 124–133; Thm 2 (uniform convergence) and Thm 4 (pointwise convergence), pp. 128–129; §11.3, Thm 2 (completeness) and its proof, pp. 311–313; §11.4, Thm 1 and the Sturm-Liouville problem (7)–(8), pp. 314–316; §11.5, Thm 1 (the Fredholm alternative) with its proof, eqs. (1)–(7), and the separation-of-variables argument (8)–(11), pp. 318–320"
    pages: "124-133, 311-320"
    role: definitions of pointwise, uniform and mean-square convergence; the least-square property of the Fourier coefficients and its proof by completing the square; Bessel's inequality; the equivalence of mean-square convergence with Parseval's equality and the definition of a complete set; the statement that the eigenfunctions of a Sturm-Liouville problem are complete; the statement, proof route and solution formula for the forced problem, including the hypothesis on the forcing and the dichotomy at an eigenvalue
  - work: hassani-2013
    loc: "§19.1, Thm 19.1.9, pp. 568–569, with the compact-resolvent construction, p. 567; §19.2, eqs. (19.5)–(19.7), p. 569"
    pages: "567-569"
    role: the completeness assertion for a regular Sturm-Liouville system and the compactness argument behind it; the Liouville substitution that carries the general problem into the normal form for which the theorem is stated
  - work: stakgold-holst-2011
    loc: "§6.3, Thm 6.3.4 (expansion theorem) with its proof, pp. 373–374, Thm 6.3.5 and Thm 6.3.6, p. 375; the reduction of a self-adjoint boundary-value problem to an integral equation, pp. 374–375"
    pages: "373-375"
    role: the expansion theorem for a compact self-adjoint integral operator and the deduction that the eigenfunctions of a self-adjoint boundary-value problem form an orthonormal basis; the Green's-function route by which completeness is proved
  - work: rhb-2006
    loc: "§17.1, the inner product (17.6), orthonormal bases (17.9)–(17.11), Bessel's inequality (17.14), pp. 557–559; §17.3.3, the closure relation (17.28)–(17.29), p. 563; §17.5, the eigenfunction solution of an inhomogeneous equation, pp. 569–570"
    pages: "557-559, 563, 569-570"
    role: the weighted inner product and the formula for the coefficients against an orthonormal basis; the closure (completeness) relation written as a delta function; the eigenfunction-expansion solution of $Ly=f$ with the eigenvalue in the denominator
  - work: arfken-2013
    loc: "§8.5, summary items 3–6, p. 398"
    pages: "398"
    role: the statement that a Hermitian operator on a Hilbert space has a complete set of eigenfunctions which may therefore be used as an expansion basis
---

:::definition[Expansion coefficients]{provenance=adapted src="strauss-2008:§5.4, eq. (4) and the three definitions of convergence (5)–(7), pp. 125–126, and the definition of the $L^2$ norm (12), p. 131; rhb-2006:§17.1, eqs. (17.6), (17.9) and (17.11), pp. 557–558"}
Keep the data of a regular Sturm-Liouville problem on $[a,b]$ from :ref[the previous unit]{to=ode.sturm-liouville-theory}: the operator $Lu = -(pu')' + qu$, the weight $w > 0$, the separated boundary conditions, the weighted inner product

$$
(f,g)_w = \int_a^b w\,f\,\overline g\,\mathrm d x , \qquad \lVert f\rVert_w = (f,f)_w^{1/2} ,
$$

and the eigenvalues $\lambda_1 < \lambda_2 < \cdots$ with real eigenfunctions $\varphi_1,\varphi_2,\dots$. By part 2 of the Sturm-Liouville theorem these may be, and from now on are, normalised:

$$
(\varphi_m,\varphi_n)_w = \delta_{mn} .
$$

Write $L^2_w(a,b)$ for the set of measurable $f$ on $(a,b)$ with $\lVert f\rVert_w < \infty$, that is $\int_a^b w\,|f|^2\,\mathrm d x < \infty$ — a space of the kind studied in :ref[$L^p$ spaces]{to=measure.lp-spaces}. For $f \in L^2_w(a,b)$ the **expansion coefficients** of $f$ and its **partial sums** are

$$
c_n = (f,\varphi_n)_w = \int_a^b w\,f\,\varphi_n\,\mathrm d x , \qquad
S_N = \sum_{n=1}^{N} c_n\,\varphi_n ,
$$

and $\sum_n c_n \varphi_n$ is the **eigenfunction expansion**, or generalised Fourier series, of $f$. Before the eigenfunctions are normalised the coefficient is $c_n = (f,\varphi_n)_w / (\varphi_n,\varphi_n)_w$, which is the form in which Strauss and Riley-Hobson-Bence write it.

A series $\sum_n f_n$ **converges in mean square** (or in $L^2_w$) to $f$ on $(a,b)$ if $\lVert f - \sum_{n\le N} f_n\rVert_w \to 0$ as $N \to\infty$; this is weaker than uniform convergence and neither implies nor is implied by pointwise convergence. Strauss sets out all three notions with examples separating them.
:::

:::statement[Least squares and Bessel's inequality]{provenance=adapted src="strauss-2008:§5.4, Thm 5 and eqs. (15)–(18), pp. 131–133"}
Let $\{\varphi_n\}$ be any orthonormal family in $L^2_w(a,b)$ — completeness is not assumed — and let $f \in L^2_w(a,b)$. Fix $N$.

1. **Least-square approximation.** Among all choices of constants $d_1,\dots,d_N$, the quantity $\bigl\lVert f - \sum_{n\le N} d_n\varphi_n\bigr\rVert_w$ is smallest exactly when $d_n = c_n$ for every $n \le N$. The best approximation to $f$ from $\operatorname{span}\{\varphi_1,\dots,\varphi_N\}$ is the partial sum of its own expansion.
2. **The error.** $\lVert f - S_N\rVert_w^2 = \lVert f\rVert_w^2 - \sum_{n\le N}|c_n|^2 .$
3. **Bessel's inequality.** $\sum_{n=1}^{\infty}|c_n|^2 \le \lVert f\rVert_w^2$; in particular the series on the left converges.
:::

:::idea{provenance=adapted src="strauss-2008:§5.4, proof of Thm 5, pp. 132–133"}
Expand the squared error. Orthonormality kills every cross term between different $\varphi$'s, so what is left is a quadratic polynomial in the coefficients $d_n$ with *no* products $d_nd_m$, $n\neq m$. Completing the square in each $d_n$ separately isolates the coefficients inside a sum of squares plus a remainder that does not involve them at all; the minimum is therefore at the point where every square vanishes, and the remainder is the minimal error. Since that remainder is a norm it is non-negative, which is Bessel's inequality.
:::

:::proof{provenance=adapted src="strauss-2008:§5.4, proof of Thm 5 and the derivation of (16)–(18), pp. 132–133"}
1. *Expand.* For any constants $d_n$, writing $E_N$ for the squared error and using sesquilinearity,

   $$
   E_N = \Bigl\lVert f - \sum_{n\le N} d_n\varphi_n\Bigr\rVert_w^2
   = \lVert f\rVert_w^2 - \sum_{n\le N}\bigl[\,\overline{d_n}\,(f,\varphi_n)_w + d_n\,\overline{(f,\varphi_n)_w}\,\bigr]
   + \sum_{m,n\le N} d_m\overline{d_n}\,(\varphi_m,\varphi_n)_w .
   $$

2. *Use orthonormality.* By $(\varphi_m,\varphi_n)_w = \delta_{mn}$ the double sum collapses to $\sum_{n\le N}|d_n|^2$. With $c_n = (f,\varphi_n)_w$ the middle bracket is $\overline{d_n}c_n + d_n\overline{c_n}$, so

   $$
   E_N = \lVert f\rVert_w^2 + \sum_{n\le N}\bigl(|d_n|^2 - \overline{d_n}c_n - d_n\overline{c_n}\bigr) .
   $$

3. *Complete the square, one coefficient at a time.* For each $n$, $|d_n|^2 - \overline{d_n}c_n - d_n\overline{c_n} = |d_n - c_n|^2 - |c_n|^2$. Hence

   $$
   E_N = \lVert f\rVert_w^2 - \sum_{n\le N}|c_n|^2 + \sum_{n\le N}\bigl|d_n - c_n\bigr|^2 .
   $$

   The coefficients $d_n$ now appear only in the last sum, which is a sum of non-negative terms.

4. *Parts 1 and 2.* The last sum is zero exactly when $d_n = c_n$ for all $n \le N$, and positive otherwise; so that choice, and only that choice, minimises $E_N$, and the minimum value is $\lVert f\rVert_w^2 - \sum_{n\le N}|c_n|^2$. Putting $d_n = c_n$ gives part 2.

5. *Part 3.* Since $E_N$ is a squared norm, $\lVert f\rVert_w^2 - \sum_{n\le N}|c_n|^2 \ge 0$, so the partial sums of $\sum|c_n|^2$ are bounded above by $\lVert f\rVert_w^2$. A series of non-negative terms with bounded partial sums converges, and its sum obeys the same bound. $\square$
:::

:::statement[Completeness of the eigenfunctions]{provenance=adapted src="strauss-2008:§5.4, Thm 3, Thm 6 and the definition of completeness (19), pp. 128 and 133, with §11.3, Thm 2, p. 311, and §11.4, Thm 1, p. 314; hassani-2013:§19.1, Thm 19.1.9, pp. 568–569; stakgold-holst-2011:§6.3, Thm 6.3.6, p. 375"}
Let $\{\varphi_n\}$ be the normalised eigenfunctions of a regular Sturm-Liouville problem on $[a,b]$.

1. **Mean-square convergence.** For every $f \in L^2_w(a,b)$,
   $$
   \lVert f - S_N\rVert_w \longrightarrow 0 \qquad (N\to\infty) .
   $$
   No continuity or differentiability of $f$ is required, and no boundary condition.
2. **Parseval's equality.** Equivalently,
   $$
   \sum_{n=1}^{\infty} \bigl|c_n\bigr|^2 \;=\; \lVert f\rVert_w^2 ,
   \qquad\text{and more generally}\qquad
   \sum_{n=1}^{\infty} c_n\,\overline{d_n} = (f,g)_w
   $$
   for $f,g \in L^2_w(a,b)$ with coefficients $c_n$ and $d_n$. An orthonormal family for which the first identity holds for every $f\in L^2_w(a,b)$ is called **complete**; so the statement is that the eigenfunctions of a regular Sturm-Liouville problem are complete.
3. **Uniqueness of the expansion.** If $f\in L^2_w(a,b)$ has $(f,\varphi_n)_w = 0$ for every $n$, then $\lVert f\rVert_w = 0$. Two functions of $L^2_w(a,b)$ with the same coefficients therefore agree except on a set of measure zero, and if both are continuous they agree everywhere.

Part 1 is quoted, not proved here; see the note. Parts 2 and 3 are deduced from it below.
:::

:::idea{provenance=original}
Part 2 is a restatement of part 1 and nothing more: by part 2 of the least-squares statement, the squared error $\lVert f - S_N\rVert_w^2$ *is* the gap $\lVert f\rVert_w^2 - \sum_{n\le N}|c_n|^2$ in Bessel's inequality, so the error tends to zero precisely when the gap closes. The polarised form then follows because an inner product is determined by the norms of $f+g$ and $f-g$. Part 3 is Parseval read backwards: if all the coefficients vanish, Parseval leaves $\lVert f\rVert_w^2 = 0$.
:::

:::proof{provenance=adapted src="strauss-2008:§5.4, proof of Thm 6 and eq. (16), p. 133"}
1. *Parts 1 and 2 are the same statement.* Part 2 of the least-squares statement, which needed only orthonormality, gives the exact identity
   $$
   \lVert f - S_N\rVert_w^2 = \lVert f\rVert_w^2 - \sum_{n\le N}|c_n|^2
   $$
   for every $N$. The left side tends to $0$ if and only if the subtracted sum tends to $\lVert f\rVert_w^2$, that is, if and only if Parseval's equality holds. So part 1 and the first identity of part 2 are equivalent, and part 1 gives both.

2. *The polarised form.* Fix $f,g \in L^2_w(a,b)$ with coefficients $c_n,d_n$. The map $f \mapsto (c_n)$ is linear, so $f \pm g$ has coefficients $c_n \pm d_n$. Applying Parseval to $f+g$ and to $f-g$ and subtracting,
   $$
   \sum_n \bigl(|c_n+d_n|^2 - |c_n-d_n|^2\bigr) = \lVert f+g\rVert_w^2 - \lVert f-g\rVert_w^2 .
   $$
   Both sides expand by sesquilinearity: the left is $2\sum_n(c_n\overline{d_n} + \overline{c_n}d_n)$ and the right is $2\bigl((f,g)_w + \overline{(f,g)_w}\bigr)$, so the real parts of $\sum_n c_n\overline{d_n}$ and $(f,g)_w$ agree. Repeating with $ig$ in place of $g$ — whose coefficients are $i d_n$ — matches the imaginary parts as well. (For real-valued $f,g$ the first computation alone suffices.) The series converges absolutely, by Cauchy-Schwarz in $\ell^2$ together with Bessel's inequality for $f$ and for $g$.

3. *Part 3.* If every $c_n = 0$, Parseval gives $\lVert f\rVert_w^2 = 0$, hence $\int_a^b w|f|^2 = 0$; since $w > 0$, $|f|^2 = 0$ almost everywhere. Applied to a difference $f - g$, this gives the uniqueness claim, and for continuous $f-g$ a continuous non-negative function with zero integral against the positive weight $w$ vanishes identically. $\square$
:::

:::note[Part 1 is quoted, not proved here]{provenance=adapted src="strauss-2008:§11.3, Thm 2 with the proof for trial functions, pp. 311–313, and §11.4, Thm 1, p. 314, with the remark on p. 316; hassani-2013:§19.1, Thm 19.1.9 and the compact-resolvent construction, pp. 567–569; stakgold-holst-2011:§6.3, Thm 6.3.4 and Thms 6.3.5–6.3.6, pp. 373–375"}
Completeness is the one deep statement in Sturm-Liouville theory, and like part 4 of :ref[the Sturm-Liouville theorem]{to=ode.sturm-liouville-theory} it is quoted here with pointers rather than proved. Three routes appear in the sources.

- **Compact resolvent** (Hassani). Shift $\lambda$ so that $0$ is not an eigenvalue and invert the operator by an explicit kernel built from two solutions; the inverse is a Hilbert-Schmidt, hence compact, operator whose null space is trivial, so by the spectral theory of compact self-adjoint operators its eigenfunctions span the whole space. Hassani's Theorem 19.1.9 lists completeness among the conclusions for a regular Sturm-Liouville system, stated for the normal form $u''-qu = \lambda u$ and transported to the general equation by the Liouville substitution of §19.2.
- **Green's function and integral equations** (Stakgold and Holst). Their Theorem 6.3.4, the expansion theorem, says that every function in the range of a compact self-adjoint integral operator $K$ expands in the eigenfunctions belonging to its nonzero eigenvalues; Theorem 6.3.5 adds that all the eigenfunctions together, including those of the zero eigenvalue, form a basis. Applied to the Green's function of a self-adjoint boundary-value problem — a real symmetric kernel whose integral operator has trivial null space — this yields their Theorem 6.3.6: for a self-adjoint boundary-value problem, its own eigenfunctions are an orthonormal basis. They state it for a formally self-adjoint $L$ of even order with self-adjoint boundary functionals, on the unweighted $L^2(a,b)$.
- **Minimisation** (Strauss). His Theorem 11.3.2 derives completeness from two facts: the eigenvalues are successive minima of the Rayleigh quotient $\lVert\nabla w\rVert^2/\lVert w\rVert^2$, and $\lambda_N\to\infty$. The remainder $r_N = f - S_N$ is orthogonal to $\varphi_1,\dots,\varphi_N$, so it is admissible in the minimum principle, which therefore gives $\lambda_{N+1} \le \lVert\nabla r_N\rVert^2/\lVert r_N\rVert^2$; and an energy identity, using the eigenvalue equation and the boundary condition, bounds the *numerator* by $\lVert\nabla f\rVert^2$. His conclusion (12) is
  $$
  \lVert r_N\rVert^2 \;\le\; \frac{\lVert\nabla r_N\rVert^2}{\lambda_N} \;\le\; \frac{\lVert\nabla f\rVert^2}{\lambda_N} ,
  $$
  whose right-hand side has a fixed numerator and so tends to $0$. (His minimum principle (6) supplies the divisor $\lambda_{N+1}$ while (12) is printed with $\lambda_N$; as $\lambda_N \le \lambda_{N+1}$ the printed form is the weaker of the two, and either serves once $\lambda_N\to\infty$.) Strauss carries this out for $f$ a trial function and refers to advanced texts for a general $f\in L^2$; his Theorem 11.4.1 extends the conclusion to the variable-coefficient problem with the weighted inner product, and he records on p. 316 that the same conclusions hold for Sturm-Liouville problems, citing Coddington-Levinson and Courant-Hilbert.

The machinery lives in :ref[compact operators]{to=funcan.compact-operators}, :ref[compact self-adjoint operators]{to=funcan.compact-self-adjoint}, :ref[orthonormal bases]{to=funcan.orthonormal-bases} and :ref[Hilbert-Schmidt kernels]{to=green.hilbert-schmidt}; the variational route is :ref[the variational characterisation of eigenvalues]{to=var.variational-eigenvalues}. Arfken's summary puts the same conclusion in operator language: the eigenfunctions of a Hermitian operator on a Hilbert space form a complete family, spanning the space and usable as an expansion basis.
:::

:::statement[Forced problems and the Fredholm alternative]{provenance=adapted src="strauss-2008:§11.5, Thm 1 with eqs. (1), (5) and (7), pp. 318–319, specialised to one dimension by §11.4, eq. (7), p. 315"}
Consider the forced problem on $[a,b]$,

$$
-\bigl(p\,u'\bigr)' + q\,u \;=\; \sigma\,w\,u + F ,
$$

with the same separated boundary conditions, where $\sigma$ is a given constant and $F$ is a given real function. Strauss states the result for the elliptic equation $-\nabla\cdot(p\nabla u) + qu = \sigma m u + f$ with homogeneous Dirichlet, Neumann or Robin conditions; in one dimension it reads:

1. **If $\sigma$ is not an eigenvalue** of the homogeneous problem, there is exactly one solution — existence is quoted from Strauss, whose Theorem 1(a) asserts it; the proof below establishes only uniqueness, the coefficients and $L^2_w$ convergence, as the remark sets out — for every $F$ with
   $$
   \int_a^b \frac{F(x)^2}{w(x)}\,\mathrm d x < \infty ,
   $$
   and it is
   $$
   u(x) = \sum_{n=1}^{\infty} \frac{1}{\lambda_n - \sigma}\Bigl(\int_a^b F\,\varphi_n\,\mathrm d x\Bigr)\varphi_n(x) ,
   $$
   the series converging in $L^2_w(a,b)$.
2. **If $\sigma = \lambda_N$ is an eigenvalue**, then depending on $F$ the problem has no solution whatever, or else infinitely many. Precisely, a solution exists if and only if
   $$
   \int_a^b F\,\varphi_N\,\mathrm d x = 0 ,
   $$
   and in that case the solutions are
   $$
   u(x) = \sum_{n \neq N} \frac{1}{\lambda_n - \lambda_N}\Bigl(\int_a^b F\,\varphi_n\,\mathrm d x\Bigr)\varphi_n(x) \;+\; C\,\varphi_N(x) , \qquad C \in \mathbb R .
   $$

Note that $\int_a^b F\varphi_n\,\mathrm d x = (F/w,\,\varphi_n)_w$: the raw forcing $F$ is paired with $\varphi_n$ *without* the weight, and the hypothesis $\int F^2/w < \infty$ says exactly that $F/w \in L^2_w(a,b)$. Writing $F = wG$ turns the two into $(G,\varphi_n)_w$ and $G \in L^2_w(a,b)$.
:::

:::idea{provenance=adapted src="strauss-2008:§11.5, proof of Thm 1, pp. 318–319"}
Pair the equation with one eigenfunction at a time. Green's formula moves the operator from $u$ onto $\varphi_n$ with no boundary term left over, because $u$ and $\varphi_n$ both satisfy the boundary conditions; the eigenvalue equation then replaces $L\varphi_n$ by $\lambda_n w\varphi_n$, and what survives is a single scalar equation $(\lambda_n - \sigma)(u,\varphi_n)_w = \int F\varphi_n$. So the differential equation becomes, mode by mode, a division by $\lambda_n - \sigma$. Completeness is what licenses reassembling the quotients into $u$; and when some $\lambda_N$ equals $\sigma$ the division is by zero, which is where the dichotomy comes from.
:::

:::proof{provenance=adapted src="strauss-2008:§11.5, proof of Thm 1, eqs. (3)–(7), pp. 318–319"}
1. *One scalar equation per mode.* Let $u \in C^2[a,b]$ solve the problem. Multiply the equation by $\varphi_n$ and integrate:
   $$
   \int_a^b \varphi_n\,Lu\,\mathrm d x = \sigma\int_a^b w\,u\,\varphi_n\,\mathrm d x + \int_a^b F\,\varphi_n\,\mathrm d x .
   $$
   By Green's formula for $L$ (step 1 of the proof in :ref[the previous unit]{to=ode.sturm-liouville-theory}), $\int\varphi_n Lu - \int u L\varphi_n$ is a boundary term, and it vanishes because $u$ and $\varphi_n$ satisfy the same separated boundary conditions. Replacing $L\varphi_n = \lambda_n w\varphi_n$ gives $\int \varphi_n Lu = \lambda_n (u,\varphi_n)_w$, so
   $$
   \bigl(\lambda_n - \sigma\bigr)\,(u,\varphi_n)_w = \int_a^b F\,\varphi_n\,\mathrm d x \qquad\text{for every } n. \tag{$\ast$}
   $$

2. *Part 1, uniqueness and the formula.* If no $\lambda_n$ equals $\sigma$, $(\ast)$ determines every coefficient: $(u,\varphi_n)_w = (\lambda_n-\sigma)^{-1}\int F\varphi_n$. By part 3 of the completeness statement a function of $L^2_w$ is determined by its coefficients, so there is at most one solution, and by part 1 of that statement it is the sum of its own expansion — which is the displayed series.

3. *Part 1, convergence.* Put $\delta = \inf_n|\lambda_n - \sigma| $, which is positive: the $\lambda_n$ increase to $+\infty$, so only finitely many lie within distance $1$ of $\sigma$, and none equals it. Let $b_n = \int_a^b F\varphi_n\,\mathrm d x = (F/w,\varphi_n)_w$. Parseval applied to $F/w$, which lies in $L^2_w$ by hypothesis, gives
   $$
   \sum_n b_n^2 = \lVert F/w\rVert_w^2 = \int_a^b \frac{F^2}{w}\,\mathrm d x < \infty ,
   $$
   and therefore, by orthonormality,
   $$
   \Bigl\lVert \sum_{n\le N}\frac{b_n}{\lambda_n - \sigma}\varphi_n\Bigr\rVert_w^2
   = \sum_{n\le N}\frac{b_n^2}{(\lambda_n-\sigma)^2} \le \frac{1}{\delta^2}\int_a^b\frac{F^2}{w}\,\mathrm d x .
   $$
   The partial sums form a Cauchy sequence in $L^2_w$ by the same estimate applied to the tail, so the series converges in $L^2_w$. This is where the hypothesis $\int F^2/w < \infty$ is used, and where $\lambda_n \to\infty$ is used.

4. *Part 2, the obstruction.* If $\sigma = \lambda_N$, then $(\ast)$ with $n=N$ has a vanishing left-hand side, so $\int F\varphi_N\,\mathrm d x = 0$ is forced: without it there is no solution. The condition is the orthogonality of the forcing to the resonant mode.

5. *Part 2, the solutions.* Suppose $\int F\varphi_N = 0$. The eigenvalue is simple, so $\varphi_N$ spans the solutions of the homogeneous problem with $\sigma = \lambda_N$, and $L(C\varphi_N) - \lambda_N w (C\varphi_N) = 0$: adding $C\varphi_N$ to a solution gives a solution. Conversely $(\ast)$ fixes $(u,\varphi_n)_w$ for every $n \neq N$ and says nothing about $(u,\varphi_N)_w$, which is therefore the free constant $C$. The displayed family is thus exactly the set of solutions, and it is infinite. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Orthonormality alone* carries the least-squares statement and Bessel's inequality; those hold for any orthonormal family in any inner-product space, eigenfunctions or not.
- *Completeness* is what upgrades Bessel's inequality to Parseval's equality and so converts the least-squares property into actual convergence. Drop it and the conclusions fail outright: $\{\varphi_2,\varphi_3,\dots\}$ is still orthonormal, but $f = \varphi_1$ has all coefficients zero against it, so the partial sums converge to $0 \neq f$.
- *$w>0$* is used in part 3 of the completeness statement, to turn $\int w|f|^2 = 0$ into $f = 0$.
- *$\int F^2/w < \infty$ and $\lambda_n\to\infty$* are both used in step 3 of the last proof, the first to make $\sum b_n^2$ finite and the second to make $\delta > 0$. Without the growth of the eigenvalues, $\sigma$ could be a limit of eigenvalues and the series could diverge.
- *Separated boundary conditions on $u$.* Step 1 needs the boundary term of Green's formula to vanish for the pair $u,\varphi_n$, so $u$ must satisfy the *same* homogeneous conditions. Inhomogeneous boundary data must first be removed by subtracting any function that carries it.

**What the proof does and does not deliver.** The computation above establishes uniqueness, produces the coefficients and shows that the series converges in $L^2_w$; it does not verify by itself that the sum is twice differentiable and satisfies the equation pointwise. Strauss states existence as part of his Theorem 1 and argues as above; smoothness of the sum requires extra decay of $b_n$, which extra smoothness of $F$ supplies. The same caution applies to term-by-term differentiation of the series in the separation-of-variables argument, which Strauss carries out under explicit differentiability assumptions and defers to the weak-derivative framework of his Chapter 12.

**Three modes of convergence.** Mean-square convergence holds for every $f \in L^2_w$ and says nothing at a single point: Strauss notes that there exist integrable functions whose Fourier series diverge at every point, and continuous functions whose series diverge at many points. For better convergence one pays with hypotheses, and Strauss's two further theorems are stated for the model problem $X'' + \lambda X = 0$ with symmetric boundary conditions:

- *Uniform* convergence on $[a,b]$ if $f$, $f'$ and $f''$ exist and are continuous on $[a,b]$ **and** $f$ satisfies the boundary conditions. The second half is not decoration: the sine series of $f\equiv 1$ on $(0,\pi)$ cannot converge uniformly, since every partial sum vanishes at the endpoints while $f$ does not.
- *Pointwise* convergence on $(a,b)$, for the classical full, sine and cosine series, if $f$ is continuous on $[a,b]$ and $f'$ piecewise continuous on $[a,b]$. If $f$ itself is only piecewise continuous, with piecewise continuous derivative, the series still converges at every point of the whole line; its sum is $\tfrac12[f(x+)+f(x-)]$ for $a<x<b$, and $\tfrac12[f_{\mathrm{ext}}(x+)+f_{\mathrm{ext}}(x-)]$ everywhere, $f_{\mathrm{ext}}$ being the periodic, odd periodic or even periodic extension that goes with the series. So at a jump inside the interval the series picks the midpoint of the two one-sided limits, and outside the interval it describes the extension, not $f$.

**The closure relation.** Substituting the coefficient formula into the expansion and exchanging sum and integral gives, formally,

$$
w(z)\sum_n \varphi_n(x)\,\overline{\varphi_n(z)} = \delta(x-z) ,
$$

which Riley-Hobson-Bence call the closure or completeness relation, noting that $w(z)$ may be replaced by $w(x)$ since the right side is supported at $x=z$. It is an identity between :ref[distributions]{to=fourier.distributions}, not between functions, and it is the same object as the bilinear expansion of a Green's function; see :ref[eigenfunction expansions of Green's functions]{to=green.eigenfunction-expansion-green}.

**The Fredholm alternative.** Part 2 of the last statement is the differential-equation form of a pattern that recurs throughout linear analysis: for $(L-\sigma)u = F$ either $L-\sigma$ is invertible and the solution is unique, or $\sigma$ is an eigenvalue and solvability requires $F$ to be orthogonal to the corresponding null space, in which case the solution is unique only up to that null space. See :ref[the Fredholm alternative]{to=green.fredholm-alternative}.
:::

:::method[Solving a forced Sturm-Liouville problem by eigenfunction expansion]{provenance=adapted src="rhb-2006:§17.5, pp. 569–570; strauss-2008:§11.5, eqs. (2)–(5), pp. 318–319"}
To solve $-(pu')' + qu - \sigma\,w\,u = F$ on $[a,b]$ with homogeneous separated boundary conditions:

1. **Normalise the problem.** Put the equation into the form $-(pu')' + qu = \lambda w u$ for the homogeneous problem, by the integrating-factor recipe of :ref[the self-adjoint form]{to=ode.self-adjoint-operators} if necessary. Read off $p$, $q$, $w$.
2. **Solve the eigenvalue problem.** Find $\lambda_n$ and $\varphi_n$, and normalise so that $(\varphi_m,\varphi_n)_w = \delta_{mn}$.
3. **Check the forcing.** Confirm $\int_a^b F^2/w < \infty$. If the boundary data are inhomogeneous, subtract any convenient function satisfying them and move the result into $F$.
4. **Project.** Compute $b_n = \int_a^b F\,\varphi_n\,\mathrm d x$. (If the forcing is naturally written as $F = wG$, this is $(G,\varphi_n)_w$.)
5. **Divide mode by mode.** If $\sigma$ is not an eigenvalue, the solution is $u = \sum_n b_n\varphi_n/(\lambda_n - \sigma)$. If $\sigma = \lambda_N$, first test $b_N$: if $b_N \neq 0$ there is no solution; if $b_N = 0$, drop the $n=N$ term and add an arbitrary multiple of $\varphi_N$.
6. **Judge the truncation.** The coefficients decay like $b_n/\lambda_n$, so the series converges faster than the expansion of $F$ itself; the smoother $F$ is, the fewer terms are needed. For a definite answer at a point, compute partial sums until successive values agree to the accuracy wanted.
:::

:::example{provenance=original}
**An expansion and a forced problem for the Euler operator.** Continue with the regular problem of :ref[the previous unit]{to=ode.sturm-liouville-theory} on $[1,2]$:

$$
-\bigl(x^3u'\bigr)' - x\,u = \lambda\,x\,u , \quad u(1)=u(2)=0 ,
\qquad
\lambda_n = \Bigl(\frac{n\pi}{\ln 2}\Bigr)^2 , \quad
\varphi_n(x) = \sqrt{\frac{2}{\ln 2}}\;\frac{1}{x}\sin\!\Bigl(\frac{n\pi\ln x}{\ln 2}\Bigr) ,
$$

now normalised: $\lVert x^{-1}\sin(n\pi\ln x/\ln 2)\rVert_w^2 = \tfrac12\ln 2$, so the factor $\sqrt{2/\ln 2} = 1.69864$ makes $(\varphi_m,\varphi_n)_w = \delta_{mn}$. Here $w = x$, and the substitution $s = \ln x/\ln 2$, $\mathrm d x/x = \ln 2\,\mathrm d s$, turns every integral into one over $(0,1)$.

**Part A: expanding $f(x) = 1/x$.** It is in $L^2_w(1,2)$, since $\lVert f\rVert_w^2 = \int_1^2 x\cdot x^{-2}\,\mathrm d x = \ln 2 = 0.693147$. Its coefficients are

$$
c_n = (f,\varphi_n)_w = \sqrt{\tfrac{2}{\ln 2}}\int_1^2 \frac{1}{x}\sin\!\Bigl(\frac{n\pi\ln x}{\ln 2}\Bigr)\mathrm d x
= \sqrt{\tfrac{2}{\ln 2}}\,\ln 2\int_0^1\!\sin(n\pi s)\,\mathrm d s
= \sqrt{2\ln 2}\;\frac{1-\cos n\pi}{n\pi} ,
$$

so $c_n = 0$ for even $n$ and $c_n = 2\sqrt{2\ln 2}/(n\pi)$ for odd $n$; numerically $c_1 = 0.749563$, $c_3 = 0.249854$, $c_5 = 0.149913$. Writing the expansion without the normalisation constants,

$$
\frac{1}{x} \;=\; \sum_{n\ \mathrm{odd}} \frac{4}{n\pi}\,\frac{1}{x}\sin\!\Bigl(\frac{n\pi\ln x}{\ln 2}\Bigr)
\qquad\text{in } L^2_w(1,2) ,
$$

which under $s = \ln x/\ln 2$ is the classical sine series of the constant $1$ on $(0,1)$. That is no accident: the Liouville substitution of Hassani's §19.2 is here $u = v(t)/x$ with $t = \int_1^x\sqrt{w/p}\,\mathrm d s = \int_1^x \mathrm d s/s = \ln x$ and $[pw]^{-1/4} = (x^4)^{-1/4} = 1/x$, and it turns the problem into $-v'' = \lambda v$ on $(0,\ln 2)$ with $v(0)=v(\ln 2)=0$. Our $s$ is that $t$ rescaled to $(0,1)$. Checking Parseval:

$$
\sum_{n\ \mathrm{odd}} |c_n|^2 = \frac{8\ln 2}{\pi^2}\sum_{n\ \mathrm{odd}}\frac{1}{n^2}
= \frac{8\ln 2}{\pi^2}\cdot\frac{\pi^2}{8} = \ln 2 = \lVert f\rVert_w^2 . \checkmark
$$

Read the other way, Parseval *gives* $\sum_{n\ \mathrm{odd}} n^{-2} = \pi^2/8$.

**Part B: a forced problem with $\sigma=0$.** Solve

$$
-\bigl(x^3 u'\bigr)' - x\,u = 1 , \qquad u(1) = u(2) = 0 .
$$

Here $F \equiv 1$ and $\sigma = 0$, which is not an eigenvalue since $\lambda_1 = 20.5423 > 0$. The hypothesis holds: $\int_1^2 F^2/w\,\mathrm d x = \int_1^2 \mathrm d x/x = \ln 2 < \infty$. The projections are the same integrals as in Part A, because $F/w = 1/x = f$:

$$
b_n = \int_1^2 1\cdot\varphi_n(x)\,\mathrm d x = (f,\varphi_n)_w = c_n .
$$

So the solution is

$$
u = \sum_{n}\frac{c_n}{\lambda_n}\varphi_n
= \sum_{n\ \mathrm{odd}} \frac{4}{n\pi}\Bigl(\frac{\ln 2}{n\pi}\Bigr)^{2}\frac{1}{x}\sin\!\Bigl(\frac{n\pi\ln x}{\ln 2}\Bigr)
= \sum_{n\ \mathrm{odd}} \frac{4(\ln 2)^2}{n^3\pi^3}\,\frac{1}{x}\sin\!\Bigl(\frac{n\pi\ln x}{\ln 2}\Bigr) .
$$

*Checking against a closed form.* Set $t = \ln x$ and $u = V(t)/x$. Since $x^2u''+3xu'+u = (x\,\mathrm d/\mathrm d x+1)^2u$ and $(x\,\mathrm d/\mathrm d x+1)\bigl(e^{-t}V\bigr) = e^{-t}V'$, applying the operator twice gives $x^2u''+3xu'+u = V''(t)/x$. The equation $-(x^3u')' - xu = 1$ is $-x\,(x^2u''+3xu'+u) = 1$, that is $V'' = -1$, with $V(0)=V(\ln 2)=0$. Hence

$$
V(t) = \tfrac12\,t\,(\ln 2 - t) , \qquad
u(x) = \frac{\ln x\,\bigl(\ln 2 - \ln x\bigr)}{2x} .
$$

Its sine series in $s = t/\ln 2$ is $V = \tfrac12(\ln 2)^2 s(1-s)$ with $s(1-s) = \sum_{n\ \mathrm{odd}} 8\,\sin(n\pi s)/(n^3\pi^3)$, reproducing the coefficients above exactly.

*A number.* At $x = \sqrt 2$ the closed form gives $u = (\ln 2)^2/(8\sqrt 2) = 0.0424664$. The partial sums of the series are $0.0438275$ (one term), $0.0422042$, $0.0425548$, $0.0424271$, $0.0424872$, $0.0424543$ (six terms, $n$ up to $11$), bracketing the exact value as the alternating $1/n^3$ terms shrink.

**Part C: resonance.** Now take $\sigma = \lambda_1$, so the problem is

$$
-\bigl(x^3u'\bigr)' - x\,u - \lambda_1\,x\,u = F , \qquad u(1)=u(2)=0 .
$$

With $F \equiv 1$ the test integral is $b_1 = c_1 = 0.749563 \neq 0$, so **there is no solution**: the forcing has a component along the resonant mode, and nothing can absorb it. With $F = x\,\varphi_2(x)$ instead, $b_1 = (\varphi_2,\varphi_1)_w = 0$ and $b_n = \delta_{2n}$, so solutions exist and are

$$
u = \frac{\varphi_2}{\lambda_2 - \lambda_1} + C\varphi_1 = \frac{\varphi_2}{61.6269} + C\varphi_1 , \qquad C\in\mathbb R ,
$$

a one-parameter family. This is directly verifiable: applying $-(x^3\cdot)' - x - \lambda_1 x$ to $\varphi_2/(\lambda_2-\lambda_1)$ gives $(\lambda_2-\lambda_1)x\varphi_2/(\lambda_2-\lambda_1) = x\varphi_2 = F$, and it annihilates $C\varphi_1$.
:::

:::application[Separation of variables, justified]{provenance=adapted src="strauss-2008:§11.5, the separation-of-variables argument, eqs. (8)–(11), pp. 319–320"}
For $w\,u_t = (p u_x)_x - q u$ on $[a,b]$ with homogeneous separated boundary conditions, expand $u(\cdot,t)$ in the eigenfunctions at each fixed $t$: completeness gives $u = \sum_n a_n(t)\varphi_n(x)$ for *some* coefficients, as yet unknown functions of $t$. Substituting and matching coefficients turns the partial differential equation into the decoupled scalar equations $a_n' = -\lambda_n a_n$, whence $a_n(t) = a_n(0)e^{-\lambda_n t}$ with $a_n(0) = (u(\cdot,0),\varphi_n)_w$ read off from the initial data. This is Strauss's point, and it is a point about logic: the usual expansion is forced rather than guessed, since the expansion exists *because* the eigenfunctions are complete and not because the solution was assumed to be a sum of products. The step from the series to the term-by-term differentiation needs its own hypotheses, which Strauss states (square-integrability of $u$ and $\nabla u$, plus differentiability enough to differentiate the series termwise). See :ref[separation of variables]{to=pde.separation-of-variables} and :ref[the heat equation on a bounded domain]{to=pde.heat-bounded-domains}.
:::

:::application{provenance=original}
- **Steady forcing and resonance.** Part C above is the mathematics of resonance. A driven string, a driven circuit, a cavity pumped at a mode frequency: if the drive has any overlap with the resonant eigenfunction, the steady problem has no bounded steady solution and the response grows in time; if the drive is orthogonal to it, a steady solution exists but is determined only up to a free oscillation in that mode. The denominators $\lambda_n - \sigma$ are the amplification factors, largest for the modes nearest resonance. See :ref[the damped and driven oscillator]{to=ode.harmonic-oscillator}.
- **Quantum mechanics.** Completeness of the eigenfunctions of a Hermitian Hamiltonian is the superposition principle: any state expands in energy eigenstates, $|c_n|^2$ is the probability of measuring $E_n$, and Parseval's equality is the statement that these probabilities sum to one. The forced problem with $\sigma$ not an eigenvalue is the resolvent $(H-\sigma)^{-1}$, and the expansion $\sum_n \varphi_n\varphi_n^{*}/(\lambda_n - \sigma)$ is its spectral representation — the object perturbation theory expands. See :ref[the quantum-mechanical framework]{to=funcan.quantum-mechanics-framework}.
- **Green's functions.** Setting $F = \delta(x-\xi)$ in the solution formula gives $g(x,\xi) = \sum_n \varphi_n(x)\varphi_n(\xi)/(\lambda_n - \sigma)$, the bilinear or eigenfunction expansion of the Green's function; its symmetry in $x$ and $\xi$ is manifest, and its poles in $\sigma$ sit exactly at the eigenvalues. See :ref[Green's functions for boundary-value problems]{to=green.green-function-bvp} and :ref[their eigenfunction expansions]{to=green.eigenfunction-expansion-green}.
- **Least squares and truncation in practice.** Part 1 of the least-squares statement is why modal truncation is the standard reduced-order model in structural dynamics and in climate and ocean models: *once a set of modes is chosen*, the expansion coefficients are the best possible coefficients in the energy-weighted norm, and no fitting is needed to find them. Which modes to keep is a separate question, and the answer is not automatically "the first $N$": for a set $S$ of indices the squared error is $\lVert f\rVert_w^2 - \sum_{n\in S}|c_n|^2$, so the best $N$-mode subspace is the one spanned by the $N$ eigenfunctions with the largest $|c_n|$. The first $N$ are optimal exactly when $|c_1| \ge |c_2| \ge \cdots$, which is typical but not guaranteed — in Part A above $c_2 = 0$ while $c_3 = 0.249854$, so $\operatorname{span}\{\varphi_1,\varphi_3\}$ gives squared error $0.068876$ against $0.131303$ for $\operatorname{span}\{\varphi_1,\varphi_2\}$. What is always true, and what makes truncation cheap to assess, is that the error is exactly the discarded sum $\sum_{n\notin S}|c_n|^2$.
:::
