---
id: pde.lax-milgram
title: The Lax-Milgram theorem and the Dirichlet problem
kind: theorem
level: advanced
summary: Proves that a bounded coercive bilinear form on a Hilbert space represents every bounded linear functional exactly once, proves the Poincare inequality that makes the Dirichlet form coercive, and combines the two into existence, uniqueness and an a priori bound for weak solutions of second-order elliptic Dirichlet problems.
prereqs: [pde.weak-solutions-sobolev, funcan.riesz-representation, funcan.banach-fixed-point]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§8.5, Theorem 8.5.1 (Bounded Operator Theorem) and Theorem 8.5.2 (Lax–Milgram Theorem) with the three hypotheses (1)–(3) and the Banach fixed-point proof, pp. 551–552; §8.5, Exercise 8.5.4, p. 553, which sets the Dirichlet problem for $-\\nabla\\cdot(a\\nabla u)+bu=f$ as an application; §10.3, Theorem 10.3.6 (Poincaré Inequality), p. 705; §10.4, Assumption 10.4.1, Theorem 10.4.1 (Energy Estimate) with the coercivity constant $m=\\min\\{\\lambda/(2\\rho^2),\\lambda/2\\}$ and the a priori bound $\\|u\\|\\le L/m$, and Theorem 10.4.2 (Existence and Uniqueness), pp. 713–715"
    pages: "551-553, 705, 713-715"
    role: statement and proof route of the Lax–Milgram theorem; the statement of the Poincaré inequality; the coercivity and boundedness computation for the elliptic form, the constants, and the existence/uniqueness theorem for the Dirichlet problem
  - work: evans-2010
    loc: "§6.2.1, Theorem 1 (Lax–Milgram Theorem) with hypotheses (i)–(ii) and the Riesz-plus-closed-range proof, pp. 297–298, and the Remark on the symmetric case, p. 299; §6.2.2, Theorem 2 (Energy estimates) and Theorem 3 (First Existence Theorem), pp. 299–301; §5.6.1, Theorem 3 (Estimates for $W^{1,p}_0$), p. 264, the version of Poincaré's inequality for a bounded domain"
    pages: "264, 297-301"
    role: a second statement of Lax–Milgram and of Poincaré's inequality, used for comparison; the remark that symmetry would make the theorem trivial; the shifted form $L+\\mu$ needed when the zeroth-order coefficient has the wrong sign
---

:::definition[Bounded and coercive forms]{provenance=adapted src="stakgold-holst-2011:§8.5, the hypotheses (1)–(3) in the proof of Thm 8.5.2, p. 551; evans-2010:§6.2.1, Thm 1 (i)–(ii), p. 297"}
Throughout, $H$ denotes a :ref[Hilbert space]{to=funcan.hilbert-spaces} over $\mathbb{R}$, its inner product written $(\cdot,\cdot)$ and the norm it induces $\|\cdot\|$. Let $a : H \times H \to \mathbb{R}$ be bilinear. Say that

- $a$ is **bounded** if there is $M > 0$ with $|a(u,v)| \le M\|u\|\,\|v\|$ for all $u,v \in H$;
- $a$ is **coercive** if there is $m > 0$ with $a(u,u) \ge m\|u\|^2$ for all $u \in H$.

A linear $F : H \to \mathbb{R}$ is **bounded** if $|F(v)| \le L\|v\|$ for some $L>0$ and all $v$. No symmetry is required of $a$.

Boundedness is continuity: it says the form cannot grow faster than the product of the norms. Coercivity is the quantitative statement that $a(u,u)$ controls $\|u\|^2$ from below, so that the form is "uniformly positive definite" and not merely positive. Evans writes the two conditions with the constants $\alpha$ and $\beta$; Stakgold and Holst list the same three inequalities as (1)–(3) of their proof, writing them without modulus signs on the left.
:::

:::statement[Poincaré inequality]{provenance=adapted src="stakgold-holst-2011:§10.3, Thm 10.3.6, p. 705"}
Let $\Omega \subseteq \mathbb{R}^n$ be a domain of **finite width**: $\Omega$ lies between two parallel hyperplanes. Let $\Gamma \subseteq \partial\Omega$ have non-zero $(n-1)$-dimensional measure, possibly $\Gamma = \partial\Omega$, and put $W^{1,p}_{0,\Gamma}(\Omega) = \{u \in W^{1,p}(\Omega) : u = 0 \text{ on } \Gamma\}$. Then for $1 \le p < \infty$ there is a constant $\rho = \rho(\Omega,p,\Gamma)$ with

$$
\|u\|_{L^p(\Omega)} \;\le\; \rho\,|u|_{W^{1,p}(\Omega)}
\qquad \text{for every } u \in W^{1,p}_{0,\Gamma}(\Omega),
$$

where $|u|_{W^{1,p}} = \bigl(\sum_{|\alpha|=1}\|D^\alpha u\|^p_{L^p}\bigr)^{1/p}$ is the first-order seminorm. Stakgold and Holst refer the proof to Adams's monograph; this is the form of the inequality they use, and it is the one followed here.

In particular the seminorm $|\cdot|_{W^{1,p}}$, which vanishes on constants and so is not a norm on $W^{1,p}(\Omega)$, *is* a norm on $W^{1,p}_{0,\Gamma}(\Omega)$, and is equivalent there to the full Sobolev norm. For $p=2$ and $\Gamma = \partial\Omega$: on $H^1_0(\Omega)$ the Dirichlet seminorm $|u|_{H^1} = \|\nabla u\|_{L^2}$ and the norm $\|u\|_{H^1}$ are equivalent.
:::

:::statement[The case needed here, with an explicit constant]{provenance=original label="Lemma"}
Let $\Omega \subseteq \mathbb{R}^n$ be open and contained in a slab of width $d$, say $\Omega \subseteq \{x : \beta < x_1 < \beta + d\}$. Then

$$
\|u\|_{L^2(\Omega)} \;\le\; d\,\|\partial_1 u\|_{L^2(\Omega)} \;\le\; d\,|u|_{H^1(\Omega)}
\qquad \text{for every } u \in H^1_0(\Omega) .
$$

So the constant may be taken to be the width of the slab.
:::

:::proof{provenance=original}
**Step 1 (test functions).** Let $\varphi \in C_c^\infty(\Omega)$ and extend it by zero to the whole slab; the extension is smooth, since $\varphi$ vanishes near $\partial\Omega$. Write $x = (x_1, x')$. For each $x_1 \in (\beta,\beta+d)$, the fundamental theorem of calculus along the $x_1$-line gives

$$
\varphi(x_1,x') = \int_\beta^{x_1} \partial_1\varphi(t,x')\,dt ,
$$

because $\varphi$ vanishes at $t = \beta$ (it is zero outside a compact subset of $\Omega$, and $\Omega$ does not reach that hyperplane).

**Step 2 (Cauchy–Schwarz).** Apply the Cauchy–Schwarz inequality to that integral, enlarging the range of $t$ to the whole slab:

$$
|\varphi(x_1,x')|^2 \;\le\; (x_1 - \beta)\int_\beta^{\beta+d}|\partial_1\varphi(t,x')|^2\,dt
\;\le\; d\int_\beta^{\beta+d}|\partial_1\varphi(t,x')|^2\,dt .
$$

The right-hand side no longer depends on $x_1$. This is the only place the finite width is used, and it is used twice: once to bound $x_1 - \beta$ by $d$, and once in the next step.

**Step 3 (integrate).** Integrate in $x_1$ over the interval of length $d$, which multiplies the right-hand side by $d$, and then in $x'$ over $\mathbb{R}^{n-1}$:

$$
\int_\Omega |\varphi|^2\,dx \;\le\; d^2 \int_\Omega |\partial_1\varphi|^2\,dx .
$$

**Step 4 (density).** Let $u \in H^1_0(\Omega)$ and take $\varphi_k \in C_c^\infty(\Omega)$ with $\varphi_k \to u$ in $H^1(\Omega)$, which exist by the definition of $H^1_0$ in :ref[weak derivatives and Sobolev spaces]{to=pde.weak-solutions-sobolev}. Then $\|\varphi_k\|_{L^2} \to \|u\|_{L^2}$ and $\|\partial_1\varphi_k\|_{L^2} \to \|\partial_1 u\|_{L^2}$, so the inequality passes to the limit. Finally $\|\partial_1 u\|_{L^2} \le \|\nabla u\|_{L^2} = |u|_{H^1}$. $\square$
:::

:::remark[The two sources state Poincaré differently]{provenance=adapted src="stakgold-holst-2011:§10.3, Thm 10.3.6, p. 705; evans-2010:§5.6.1, Thm 3, p. 264"}
Evans states the inequality for $U$ **bounded** and $u \in W^{1,p}_0(U)$, as $\|u\|_{L^p(U)} \le C\|Du\|_{L^p(U)}$, and notes the same consequence: on $W^{1,p}_0(U)$ the norms $\|Du\|_{L^p}$ and $\|u\|_{W^{1,p}}$ are equivalent. Stakgold and Holst assume only finite width — an infinite strip or slab qualifies — and allow the function to vanish on part of the boundary only. Neither statement contains the other verbatim, and neither is wrong: they are hypotheses chosen for different later uses. This unit follows Stakgold and Holst, because the elliptic theorem below is theirs and uses their constant $\rho$; the lemma proved above is the special case $p=2$, $\Gamma = \partial\Omega$, with $\rho = d$ made explicit, which is what the worked example needs.

The width bound is not sharp. On $\Omega = (0,\pi)$ the lemma gives $\rho = \pi$, while the best constant is $1$: expanding $u \in H^1_0(0,\pi)$ in the sine basis, $u = \sum_{k\ge1} b_k\sin kx$, gives $\|u\|_{L^2}^2 = \tfrac\pi2\sum b_k^2$ and $\|u'\|_{L^2}^2 = \tfrac\pi2\sum k^2b_k^2 \ge \|u\|_{L^2}^2$, with equality for $u = \sin x$. In general the best constant is $\lambda_1^{-1/2}$, where $\lambda_1$ is the lowest Dirichlet eigenvalue of $-\Delta$ on $\Omega$.
:::

:::statement[Lax–Milgram theorem]{provenance=adapted src="stakgold-holst-2011:§8.5, Thm 8.5.2, p. 551"}
Take $H$ as above. Assume the bilinear form $a$ meets both conditions of the definition, with constants $M$ (boundedness) and $m$ (coercivity), and that the linear functional $F$ obeys $|F(v)| \le L\|v\|$. Then exactly one vector of $H$ solves the **variational problem**

$$
u \in H, \qquad a(u,v) = F(v) \quad\text{for every } v \in H .
\tag{V}
$$

Evans names the two constants $\alpha$ and $\beta$ instead; the content is the same. Stakgold and Holst place the theorem immediately after their Bounded Operator Theorem and describe both as extending :ref[the Riesz representation theorem]{to=funcan.riesz-representation} to the case where the form need not be symmetric.
:::

:::idea{provenance=original}
Riesz representation turns both sides of (V) into inner products: the functional $F$ becomes $(\Phi,\cdot)$ for a single vector $\Phi$, and, for each fixed $u$, the functional $a(u,\cdot)$ becomes $(Au,\cdot)$ for a vector $Au$ depending linearly and boundedly on $u$. Testing against $v = Au - \Phi$ then shows that (V) is nothing but the equation $Au = \Phi$. Coercivity says that $A$ moves vectors at least a fixed fraction of their length in their own direction, so a small step against the residual $Au - \Phi$ is a contraction; the Banach fixed-point theorem converts that into existence and uniqueness in one stroke.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§8.5, Thm 8.5.1 and the proof of Thm 8.5.2, pp. 551–552"}
Let $M$, $m$ and $L$ be the constants of boundedness, coercivity and boundedness of $F$.

**Step 1 (the form is an operator).** Fix $u \in H$. Then $v \mapsto a(u,v)$ is linear, and bounded by $M\|u\|$; so by the Riesz representation theorem there is a unique vector, call it $Au$, with

$$
a(u,v) = (Au, v) \qquad \text{for all } v \in H .
$$

The map $u \mapsto Au$ is linear, because $a$ is linear in its first slot and the Riesz vector is unique: for scalars $\mu_1,\mu_2$ and $u_1, u_2 \in H$, the vector $\mu_1Au_1 + \mu_2Au_2$ represents $a(\mu_1u_1+\mu_2u_2,\cdot)$, so it must equal $A(\mu_1u_1+\mu_2u_2)$. It is bounded: putting $v = Au$ gives $\|Au\|^2 = a(u,Au) \le M\|u\|\,\|Au\|$, whence $\|Au\| \le M\|u\|$ (trivially so if $Au = 0$). This is Stakgold and Holst's Bounded Operator Theorem.

**Step 2 (the functional is a vector).** By Riesz again there is $\Phi \in H$ with $F(v) = (\Phi,v)$ for all $v$, and $\|\Phi\| = \|F\| \le L$.

**Step 3 ((V) is an equation).** Problem (V) now reads $(Au - \Phi, v) = 0$ for all $v \in H$. Choosing $v = Au - \Phi$ gives $\|Au - \Phi\|^2 = 0$; conversely $Au = \Phi$ clearly implies (V). So

$$
\text{(V)} \iff Au = \Phi .
$$

**Step 4 (a contraction).** For a parameter $\sigma > 0$, the equation $Au = \Phi$ is equivalent to the fixed-point equation $u = T(u)$ with

$$
T(u) = u - \sigma\bigl(Au - \Phi\bigr) = (I - \sigma A)u + \sigma\Phi .
$$

Since $T(u) - T(v) = (I-\sigma A)(u-v)$, we need $\|(I - \sigma A)w\| \le \gamma\|w\|$ with $\gamma<1$. Expand, using $(Aw,w) = a(w,w) \ge m\|w\|^2$ and $\|Aw\| \le M\|w\|$:

$$
\|(I-\sigma A)w\|^2 = \|w\|^2 - 2\sigma (Aw,w) + \sigma^2\|Aw\|^2
\le \bigl(1 - 2\sigma m + \sigma^2M^2\bigr)\|w\|^2 .
$$

The bracket is less than $1$ exactly when $\sigma^2M^2 < 2\sigma m$, that is, when $0 < \sigma < 2m/M^2$ — a non-empty range, since $m$ and $M$ are positive. It is also non-negative, since it dominates $\|(I-\sigma A)w\|^2/\|w\|^2$ for $w \neq 0$, so its square root $\gamma$ exists and $\gamma < 1$. Fix such a $\sigma$.

**Step 5 (conclude).** $H$ is complete, and $T$ is a contraction on it, so by :ref[the Banach fixed-point theorem]{to=funcan.banach-fixed-point} $T$ has exactly one fixed point $u$. By Steps 3 and 4 that $u$ is the unique solution of (V). $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- *Coercivity* is used only in Step 4, and it is indispensable. Without it the operator $A$ can fail to be onto. On $H = \ell^2$ take $a(u,v) = \sum_k k^{-1}u_kv_k$: this is bounded ($M=1$) and positive, $a(u,u)>0$ for $u\neq0$, but not coercive, and the corresponding $A$ — multiplication by $k^{-1}$ — has dense, non-closed range. The functional $F(v) = \sum_k k^{-1}v_k$ is bounded, yet $a(u,v)=F(v)$ for all $v$ would force $u_k = 1$ for every $k$, which is not in $\ell^2$. So no solution exists: positivity is not enough.
- *Boundedness of $a$* is used in Step 1, to get an operator at all, and in Step 4, to control $\|Aw\|$. An unbounded form has no $A$ defined on all of $H$, and the whole argument must be recast with form domains.
- *Boundedness of $F$* is used in Step 2. It is exactly the hypothesis the Riesz theorem needs, and it is what the "check the two bounds" step of the recipe in :ref[weak derivatives and Sobolev spaces]{to=pde.weak-solutions-sobolev} verifies in applications.
- *Completeness of $H$* is used in Steps 1, 2 and 5. On an incomplete inner product space the fixed-point iteration converges to nothing, which is precisely the gap that forces one to work in $H^1_0(\Omega)$ rather than in $C_c^\infty(\Omega)$.
- *Symmetry is not assumed, and that is the point.* If $a$ were symmetric, then coercivity and boundedness would make $a$ itself an equivalent inner product on $H$, and a single application of the Riesz theorem to the Hilbert space $(H,a)$ would end the proof — a remark Evans makes explicitly (p. 299). The theorem earns its name on non-symmetric forms, which is where first-order transport terms $\sum b^i u_{x_i}v$ put us.
- *An a priori bound comes free.* Putting $v = u$ in (V) gives $m\|u\|^2 \le a(u,u) = F(u) \le L\|u\|$, hence $\|u\| \le L/m$ (trivially if $u=0$). Stakgold and Holst call this the energy estimate and derive it before knowing that a solution exists; it is also a second, one-line proof of uniqueness, since the difference of two solutions satisfies (V) with $F=0$ and so has norm $\le 0$.
:::

:::statement[Existence, uniqueness and stability for the elliptic Dirichlet problem]{provenance=adapted src="stakgold-holst-2011:§10.4, Assumption 10.4.1, Thm 10.4.1 and Thm 10.4.2, pp. 713–715; stakgold-holst-2011:§8.5, Exercise 8.5.4, p. 553"}
Let $\Omega \subseteq \mathbb{R}^n$ be an open set of finite width, contained in a slab of width $d$. Assume

- $a_{ij} \in L^\infty(\Omega)$ with $|a_{ij}| \le c_1$ almost everywhere, for $i,j = 1,\dots,n$;
- $b \in L^\infty(\Omega)$ with $0 \le b \le c_2$ almost everywhere;
- **strong ellipticity**: there is $\lambda > 0$ with $\sum_{i,j} a_{ij}(x)\eta_i\eta_j \ge \lambda|\eta|^2$ for almost every $x\in\Omega$ and every $\eta\in\mathbb{R}^n$;
- $f \in L^2(\Omega)$.

Set, for $u,v \in H^1_0(\Omega)$,

$$
a(u,v) = \int_\Omega \Bigl(\sum_{i,j=1}^n a_{ij}\,\partial_i u\,\partial_j v \;+\; b\,uv\Bigr) dx ,
\qquad
F(v) = \int_\Omega f v \, dx .
$$

Then there is exactly one $u \in H^1_0(\Omega)$ with $a(u,v) = F(v)$ for all $v \in H^1_0(\Omega)$ — the weak solution of

$$
-\nabla\cdot\bigl(A\nabla u\bigr) + bu = f \ \text{ in } \Omega, \qquad u = 0 \ \text{ on } \partial\Omega,
\qquad A = (a_{ij}) ,
$$

and it obeys the a priori bound

$$
\|u\|_{H^1(\Omega)} \;\le\; \frac{\|f\|_{L^2(\Omega)}}{m},
\qquad m = \min\Bigl\{\frac{\lambda}{2d^2},\ \frac{\lambda}{2}\Bigr\} .
$$

In particular the solution map $f \mapsto u$ is a bounded linear map $L^2(\Omega) \to H^1_0(\Omega)$, so the problem is well posed: a small change of the source produces a small change of the solution, in the energy norm.

This is the pure Dirichlet case of Stakgold and Holst's Theorems 10.4.1 and 10.4.2, which treat a mixed Dirichlet–Neumann problem with inhomogeneous data: setting their Neumann portion $\Gamma_N$ of the boundary and their boundary data $g$ to nothing removes the trace constant $C_{\mathrm{tr}}$, the coefficient $c$ on $\Gamma_N$ and the lift $w$ from their constants, leaving $m$ as above, $M = n^2c_1 + c_2$ and $L = \|f\|_{L^2}$. Their Poincaré constant $\rho$ is written here as the width $d$, by the lemma above. The special case $a_{ij} = a\delta_{ij}$ with $a \ge 1$ and $b \ge 1$ on a smooth bounded plane domain is their Exercise 8.5.4.
:::

:::idea{provenance=original}
Everything is a matter of checking the three constants. Boundedness of $a$ is the Cauchy–Schwarz inequality term by term. Boundedness of $F$ is Cauchy–Schwarz once. Coercivity is where the structure enters: ellipticity bounds $a(u,u)$ below by $\lambda$ times the Dirichlet seminorm alone, which is *not* the $H^1$ norm — the $L^2$ part is missing, and the hypothesis $b\ge0$ contributes nothing to it. Poincaré supplies the missing part: spend half of the seminorm on buying back the $L^2$ norm, and keep the other half.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§10.4, proof of Thm 10.4.1, pp. 713–714, and Thm 10.4.2, p. 715"}
Write $\|\cdot\|$ for $\|\cdot\|_{L^2(\Omega)}$ and recall $\|u\|_{H^1}^2 = \|u\|^2 + |u|_{H^1}^2$ with $|u|_{H^1} = \|\nabla u\|$.

**Step 1 ($a$ and $F$ are well defined and bilinear/linear.)** Every integrand is a product of two $L^2$ functions and an $L^\infty$ coefficient, so each integral converges absolutely; bilinearity and linearity are then immediate from linearity of the integral.

**Step 2 (boundedness of $a$).** By the triangle inequality and Cauchy–Schwarz applied to each term,

$$
|a(u,v)| \le \sum_{i,j}\|a_{ij}\|_\infty\,\|\partial_i u\|\,\|\partial_j v\| + \|b\|_\infty\|u\|\,\|v\| .
$$

Each factor $\|\partial_i u\|$, $\|u\|$ is at most $\|u\|_{H^1}$, and there are $n^2$ terms in the first sum. Hence $|a(u,v)| \le M\|u\|_{H^1}\|v\|_{H^1}$ with $M = n^2c_1 + c_2$.

**Step 3 (boundedness of $F$).** $|F(v)| \le \|f\|\,\|v\| \le \|f\|\,\|v\|_{H^1}$, so $L = \|f\|_{L^2}$ will do.

**Step 4 (coercivity).** Apply strong ellipticity pointwise with $\eta = \nabla u(x)$, and drop the term $\int bu^2$, which is non-negative because $b \ge 0$ — this is the only use of that hypothesis:

$$
a(u,u) = \int_\Omega \sum_{i,j} a_{ij}\,\partial_i u\,\partial_j u \,dx + \int_\Omega b u^2 dx
\;\ge\; \lambda\int_\Omega |\nabla u|^2 dx = \lambda\,|u|_{H^1}^2 .
$$

Now split the right-hand side in half and use the lemma, $\|u\|^2 \le d^2|u|^2_{H^1}$, on one half:

$$
\lambda|u|_{H^1}^2 = \frac{\lambda}{2}|u|^2_{H^1} + \frac{\lambda}{2}|u|^2_{H^1}
\;\ge\; \frac{\lambda}{2d^2}\|u\|^2 + \frac{\lambda}{2}|u|^2_{H^1}
\;\ge\; m\bigl(\|u\|^2 + |u|^2_{H^1}\bigr) = m\|u\|_{H^1}^2 ,
$$

with $m = \min\{\lambda/(2d^2),\lambda/2\}$. This is the computation of Stakgold and Holst's Theorem 10.4.1 with their Poincaré constant $\rho$ replaced by $d$.

**Step 5 (apply the theorem).** $H^1_0(\Omega)$ is a Hilbert space, $a$ is bounded and coercive on it and $F$ is bounded, so Lax–Milgram gives a unique $u \in H^1_0(\Omega)$ with $a(u,v) = F(v)$ for all $v$. The a priori bound is the remark above, $\|u\|_{H^1} \le L/m$. $\square$
:::

:::note[When the coefficients have the wrong sign]{provenance=adapted src="evans-2010:§6.2.2, Thm 2 and Thm 3, pp. 299–301"}
The hypothesis $b \ge 0$ is doing real work, and so is the absence of first-order terms. For the general divergence-form operator $Lu = -\sum_{i,j}(a^{ij}u_{x_i})_{x_j} + \sum_i b^iu_{x_i} + cu$ with $a^{ij},b^i,c \in L^\infty$, Evans proves only the weaker pair of bounds

$$
|B[u,v]| \le \alpha\|u\|_{H^1_0}\|v\|_{H^1_0},
\qquad
\beta\|u\|_{H^1_0}^2 \le B[u,u] + \gamma\|u\|_{L^2}^2
$$

for some $\alpha,\beta>0$ and $\gamma\ge0$ — the first-order term is absorbed with Cauchy's inequality with $\varepsilon$, at the cost of the $\gamma$ term. When $\gamma>0$ the form is not coercive and Lax–Milgram does not apply. Evans's First Existence Theorem recovers what can be recovered: for every $\mu\ge\gamma$ the shifted problem $Lu + \mu u = f$ in $U$, $u=0$ on $\partial U$, has a unique weak solution. That the unshifted problem need not be solvable is no defect of the method: if $-\mu$ is a Dirichlet eigenvalue of $L$, uniqueness genuinely fails, and the right statement is the Fredholm alternative (:ref[the Fredholm alternative]{to=green.fredholm-alternative}).
:::

:::example[A one-dimensional problem, with every constant computed]{provenance=original}
Take $\Omega = (0,\pi)$, $n=1$, $a_{11} \equiv 1$, $b \equiv 0$ and $f(x) = \sin x$. The weak problem is

$$
\text{find } u \in H^1_0(0,\pi) \text{ with } \int_0^\pi u'v'\,dx = \int_0^\pi (\sin x)\,v\,dx \quad \text{for all } v \in H^1_0(0,\pi),
$$

the weak form of $-u'' = \sin x$, $u(0)=u(\pi)=0$.

1. *The constants.* Here $c_1 = 1$, $c_2 = 0$, $\lambda = 1$ and the width is $d = \pi$. So
 $$
 M = n^2c_1 + c_2 = 1, \qquad
 m = \min\Bigl\{\frac{1}{2\pi^2},\ \frac12\Bigr\} = \frac{1}{2\pi^2} = 0.0506606,
 \qquad
 L = \|f\|_{L^2} = \Bigl(\int_0^\pi\sin^2x\,dx\Bigr)^{1/2} = \sqrt{\tfrac\pi2} = 1.2533141 .
 $$
 The theorem therefore guarantees a unique solution with $\|u\|_{H^1} \le L/m = 2\pi^2\sqrt{\pi/2} = 24.7394$.

2. *The solution.* Try $u = \sin x$. It lies in $H^1_0(0,\pi)$: take smooth cut-offs $\chi_k$ equal to $1$ on $[1/k,\pi-1/k]$, vanishing outside $(1/2k,\pi-1/2k)$ and with $|\chi_k'| \le Ck$; then $\chi_k u \in C_c^\infty(0,\pi)$, and $\|(\chi_k-1)u\|_{H^1} \to 0$ because $|u(x)| \le x$ near $0$ makes $\|u\chi_k'\|^2_{L^2} \le (Ck\cdot k^{-1})^2\cdot k^{-1} \to 0$, and symmetrically at $\pi$. Since $-u'' = \sin x$ pointwise, the consistency theorem of :ref[weak derivatives and Sobolev spaces]{to=pde.weak-solutions-sobolev} makes it *the* weak solution. Its norm is
 $$
 \|u\|^2_{H^1} = \int_0^\pi \sin^2 x\,dx + \int_0^\pi\cos^2x\,dx = \frac\pi2+\frac\pi2 = \pi,
 \qquad \|u\|_{H^1} = \sqrt\pi = 1.7724539 .
 $$

3. *How good is the bound?* The guaranteed bound $24.7394$ overshoots the truth $1.7724539$ by a factor of $13.96$. Almost all of the loss is in the Poincaré constant: the lemma's $\rho = d = \pi$ is replaced, by the sharp value $\rho = 1$ for this interval (see the remark above), by $m = \min\{1/2, 1/2\} = 1/2$, and then
 $$
 \frac{L}{m} = 2\sqrt{\tfrac\pi2} = \sqrt{2\pi} = 2.5066283,
 $$
 which exceeds the true norm by exactly $\sqrt2$. The remaining factor $\sqrt2$ is the cost of splitting the seminorm in half in Step 4 of the proof: with the sharp constant, $a(u,u) = |u|^2_{H^1} = \tfrac12\|u\|^2_{H^1}$ for $u = \sin x$, so coercivity with $m=1/2$ is an equality here and cannot be improved.

4. *A consistency check.* The a priori chain $m\|u\|^2_{H^1} \le a(u,u) = F(u) \le L\|u\|_{H^1}$ reads, with the sharp $m$,
 $$
 \tfrac12\cdot\pi = 1.5708 \;\le\; \int_0^\pi\cos^2x\,dx = \tfrac\pi2 = 1.5708 \;=\; \int_0^\pi \sin^2 x\,dx \;\le\; 1.2533141 \times 1.7724539 = 2.2214 ,
 $$
 the first inequality being an equality, as just explained, and the last being Cauchy–Schwarz, strict because $f = \sin x$ and $u = \sin x$ are proportional in $L^2$ but $\|u\|_{L^2} < \|u\|_{H^1}$.

5. *The contraction parameter.* With $m=1/2$ and $M=1$ the proof's iteration is guaranteed to converge for every $\sigma \in (0, 2m/M^2) = (0,1)$, with contraction factor at most $(1-\sigma+\sigma^2)^{1/2}$, smallest at $\sigma = \tfrac12$ where it equals $\sqrt3/2 = 0.8660$. The guarantee is pessimistic here. In the orthogonal basis $e_k = \sin kx$ one has $(e_k,e_j)_{H^1} = \delta_{kj}\tfrac\pi2(1+k^2)$ and $a(e_k,e_j) = \delta_{kj}\tfrac\pi2 k^2$, so the operator $A$ of Step 1 is multiplication by $k^2/(1+k^2)$; then $\|I-\sigma A\| = \max_{k\ge1}\bigl|1-\sigma k^2/(1+k^2)\bigr|$, which equals $3/4$ at $\sigma=\tfrac12$ and $1/2$ at $\sigma=1$. The true optimum sits at the edge of the range the general bound can certify.
:::

:::application{provenance=original}
**Finite elements, and why they converge.** Replacing $H^1_0(\Omega)$ by a finite-dimensional subspace $V_h$ in (V) gives the Galerkin equations $a(u_h,v_h) = F(v_h)$ for all $v_h \in V_h$. Lax–Milgram applies verbatim to $V_h$ — a finite-dimensional subspace of a Hilbert space is closed, hence complete, and $a$ is still bounded and coercive on it — so the discrete problem has a unique solution, with the *same* constants $m$ and $M$ and so the same a priori bound. The constants also control the error: subtracting the two problems gives $a(u-u_h, v_h) = 0$, and from there $\|u-u_h\|_{H^1} \le (M/m)\inf_{v_h\in V_h}\|u-v_h\|_{H^1}$ — Céa's lemma, which Stakgold and Holst state as near-best approximation (Theorem 10.4.3, p. 716). A finite element method is therefore as accurate as the best approximation the mesh can provide, up to the factor $M/m$. See :ref[the finite element method]{to=num.finite-elements}.

**Electrostatics in a composite.** The potential in a region filled with materials of permittivity $\epsilon(x)$, grounded on the boundary, is the weak solution of $-\nabla\cdot(\epsilon\nabla\phi) = \varrho$ with $\phi \in H^1_0$. The theorem applies with $a_{ij} = \epsilon\delta_{ij}$ as soon as $\epsilon$ is measurable, bounded and bounded below by a positive constant. No continuity of $\epsilon$ is needed, which is exactly the situation at a material interface, and the a priori bound is the statement that the stored energy is controlled by the charge.

**Steady diffusion with drift.** Transport terms $\mathbf{v}\cdot\nabla u$ make the form non-symmetric, and this is where Lax–Milgram is not replaceable by Riesz. If the drift is strong relative to the diffusion, the $\gamma$ of the note above is positive, coercivity is lost, and the numerical symptom is the spurious oscillation that afflicts centred differencing of advection-dominated problems (:ref[the advection-diffusion equation]{to=pde.advection-diffusion}).

**Where the method stops.** Lax–Milgram is a statement about *elliptic* problems: coercivity of $a$ on a single space is a form of positivity in all directions at once. Evolution equations have no such form, and their well-posedness rests instead on estimates that control a solution in terms of its past (:ref[energy estimates and well-posedness]{to=pde.energy-estimates}), or on semigroup theory (:ref[evolution equations and operator semigroups]{to=pde.operator-semigroups}).
:::
