---
id: pde.operator-semigroups
title: Evolution equations and operator semigroups
kind: theorem
level: advanced
summary: Reads a linear evolution equation as an ordinary differential equation in a Banach space, proves that the solution operators of such an equation form a contraction semigroup whose generator is densely defined and closed and whose resolvent is the Laplace transform of the semigroup, states the Hille-Yosida characterisation of the operators that generate one, and identifies the heat semigroup and its generator explicitly.
prereqs: [funcan.unbounded-operators, funcan.spectrum, pde.heat-kernel, fourier.plancherel, measure.lp-spaces]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§7.4.1a, the abstract problem (1)–(2) and the definition of a semigroup and of a contraction semigroup, (4)–(7), pp. 409–410; §7.4.1b, the generator (8)–(9) and Theorem 1 (differential properties) with its proof, pp. 410–411; Theorem 2 (properties of generators) with its proof, pp. 411–412; §7.4.1c, the resolvent set and resolvent operator, pp. 412–413, and Theorem 3(ii), (14), with its proof, pp. 413–414; §7.4.2, Theorem 4 (Hille-Yosida) with the Yosida approximation (18) and the concluding Remark on $\\omega$-contractive semigroups, (23), pp. 414–416; §7.4.3a, Theorem 5 and its proof, pp. 416–418"
    pages: "409-418"
    role: the whole abstract framework and all the statements proved or quoted here; the Yosida-approximation route sketched in the note; the recipe in the method block, which follows the proof of their Theorem 5
  - work: grimmett-stirzaker-2020
    loc: "§6.9, the transition probabilities (3) and Theorem (4) (the transition semigroup $\\{P_t\\}$, $P_0=I$, stochasticity, and the Chapman-Kolmogorov equations as the semigroup property), p. 289; the generator $G$ and the row-sum condition (15), p. 293; §6.10(A), the Kolmogorov forward equation (1)–(2) and backward equation (3) with the derivation by conditioning, and the matrix exponential (4) for finite state space, pp. 297–298"
    pages: "289, 293, 297-298"
    role: the transition semigroup of a continuous-time Markov chain as an instance of the definition; the identification of the generator matrix; the Kolmogorov equations as the abstract differential property; the exponential formula in finite dimensions
---

:::definition[Semigroups, generators and resolvents]{provenance=adapted src="evans-2010:§7.4.1a, Eq. (1)–(2) and the definitions (4)–(7), pp. 409–410; evans-2010:§7.4.1b, Eq. (8)–(9), p. 410; evans-2010:§7.4.1c, the definitions of $\rho(A)$ and $R_\lambda$, pp. 412–413"}
Following :cite[Evans]{work=evans-2010 loc="§7.4.1a, p. 409"}, let $X$ be a **real** Banach space and $A : D(A)\to X$ a linear, possibly :ref[unbounded]{to=funcan.unbounded-operators}, operator whose domain $D(A)$ is a linear subspace of $X$. The **abstract Cauchy problem** is

$$
u'(t) = A\,u(t) \quad (t\ge 0), \qquad u(0) = u_0 ,
$$

for an unknown $u : [0,\infty)\to X$, with $'=d/dt$ meaning the limit of difference quotients in the norm of $X$. The interesting case is $X$ a space of functions of the space variables and $A$ a differential operator in those variables, when $A$ is necessarily unbounded.

A family $\{S(t)\}_{t\ge0}$ of bounded linear operators $X\to X$ is a **semigroup** if

1. $S(0)u = u$ for all $u\in X$;
2. $S(t+s)u = S(t)S(s)u = S(s)S(t)u$ for all $s,t\ge0$ and $u\in X$;
3. $t\mapsto S(t)u$ is continuous from $[0,\infty)$ into $X$, for each $u\in X$.

It is a **contraction semigroup** if in addition $\lVert S(t)\rVert\le1$ for all $t\ge0$, the operator norm, so that $\lVert S(t)u\rVert\le\lVert u\rVert$. Condition 3 is strong continuity, and elsewhere the object just defined is usually called a *strongly continuous* or *$C_0$* semigroup; Evans builds strong continuity into the word "semigroup", and we follow him. Think of $S(t)u_0$ as "run the equation for time $t$ starting from $u_0$": condition 2 says that running for $s$ and then for $t$ is the same as running for $s+t$. As :cite[Evans]{work=evans-2010 loc="§7.4.1a, p. 410"} puts it, that condition is just the assumption of existence and uniqueness for the Cauchy problem from every starting point.

The **(infinitesimal) generator** of a contraction semigroup is the operator $A$ with

$$
D(A) = \Bigl\{\,u\in X \;:\; \lim_{t\to0^+}\frac{S(t)u-u}{t}\ \text{exists in } X \,\Bigr\},
\qquad
Au = \lim_{t\to0^+}\frac{S(t)u-u}{t}\ \ (u\in D(A)) .
$$

Finally, for a closed operator $A$, a real number $\lambda$ lies in the **resolvent set** $\rho(A)$ if $\lambda I - A : D(A)\to X$ is one-to-one and onto, and then the **resolvent operator** is $R_\lambda = (\lambda I - A)^{-1} : X\to X$, which is bounded by the closed graph theorem (:ref[]{to=funcan.uniform-boundedness-open-mapping}). Compare :ref[]{to=funcan.spectrum}, which defines $\rho(A)$ for bounded operators over $\mathbb{C}$; Evans takes $X$ real and $\lambda$ real throughout §7.4, and so does everything below.
:::

:::statement[Generators, their resolvents, and the Hille-Yosida theorem]{provenance=adapted src="evans-2010:§7.4.1b, Thm 1, p. 410, and Thm 2, p. 411; evans-2010:§7.4.1c, Thm 3(ii) and Eq. (14), p. 413; evans-2010:§7.4.2, Thm 4 and Eq. (17), p. 414, and the Remark with Eq. (23), p. 416"}
Let $\{S(t)\}_{t\ge0}$ be a contraction semigroup on a real Banach space $X$, with generator $A$.

1. **Differential property.** If $u\in D(A)$ then $S(t)u\in D(A)$ for every $t\ge0$, the map $t\mapsto S(t)u$ is differentiable for $t>0$, and
   $$
   \frac{d}{dt}S(t)u = A\,S(t)u = S(t)\,Au \qquad (t>0).
   $$
   Since $t\mapsto S(t)Au$ is continuous, $t\mapsto S(t)u$ is $C^1$ on $(0,\infty)$. So $u(t)=S(t)u_0$ solves the abstract Cauchy problem whenever $u_0\in D(A)$.
2. **Properties of the generator.** $D(A)$ is dense in $X$, and $A$ is a closed operator: if $u_k\in D(A)$ with $u_k\to u$ and $Au_k\to v$ in $X$, then $u\in D(A)$ and $Au=v$.
3. **The resolvent is the Laplace transform of the semigroup.** Every $\lambda>0$ lies in $\rho(A)$, and
   $$
   R_\lambda u = \int_0^{\infty} e^{-\lambda t}\,S(t)u\;dt \qquad (u\in X) ,
   \tag{L}
   $$
   the integral converging as a Banach-space-valued improper Riemann integral. Consequently $\lVert R_\lambda\rVert \le 1/\lambda$ for every $\lambda>0$.
4. **Hille-Yosida theorem.** Suppose $A$ is closed and densely defined on $X$. Then some contraction semigroup has $A$ for its generator exactly when the resolvent condition
   $$
   (0,\infty)\subseteq\rho(A) \qquad\text{and}\qquad \lVert R_\lambda\rVert \le \frac{1}{\lambda} \quad\text{for all }\lambda>0
   \tag{HY}
   $$
   is satisfied. Evans states the equivalence; the semigroup is in addition unique, which is not part of his statement but follows from part 3, since the generator fixes $R_\lambda u$ for every $\lambda>0$ and $R_\lambda u$ is the Laplace transform of the bounded continuous function $t\mapsto S(t)u$, which determines it.
5. **The $\omega$-contractive variant.** Call $\{S(t)\}_{t\ge0}$ $\omega$-contractive, for $\omega\in\mathbb{R}$, if $\lVert S(t)\rVert\le e^{\omega t}$ for all $t\ge0$. For closed, densely defined $A$ the criterion is again a bound on the resolvent, now on a shifted half-line: $A$ generates such a semigroup precisely when $(\omega,\infty)\subseteq\rho(A)$, with $\lVert R_\lambda\rVert\le(\lambda-\omega)^{-1}$ at every $\lambda$ of that half-line. Part 4 is the case $\omega=0$. :cite[Evans]{work=evans-2010 loc="§7.4.2, Remark and Eq. (23), p. 416"} records this as an easy variant of part 4 and needs it for parabolic equations, where $\omega>0$.

Parts 1, 2 and 3 are proved below; part 4 is proved here only in the direction "generator $\Rightarrow$ (HY)", which is part 3, and part 5 is stated without proof, on the authority of Evans's remark.
:::

:::idea{provenance=original}
Three short arguments carry parts 1 to 3, and each is the same trick: move an operator past a limit using the commutation rule 2 and the uniform bound $\lVert S(t)\rVert\le1$.

For part 1, the difference quotient of $t\mapsto S(t)u$ at $t$ is $S(t)$ applied to the difference quotient at $0$; boundedness lets $S(t)$ pass through the limit, which is $Au$. For part 2, the obstacle is that $D(A)$ might be small, and the cure is averaging: $t^{-1}\int_0^tS(s)u\,ds$ tends to $u$ by continuity and lies in $D(A)$ for every $u$, because applying $S(r)$ to the average just slides the window of integration, and the slid window differs from the original by two short pieces whose difference quotient converges. Part 3 is the observation that the Laplace transform of a semigroup inverts $\lambda I - A$: applying $S(h)$ to $\int_0^\infty e^{-\lambda t}S(t)u\,dt$ shifts the integration variable, and the mismatch between the shifted and the unshifted integral is a short initial piece whose average over $[0,h]$ tends to $u$ — which is where the $-u$ in $(\lambda I-A)R_\lambda u=u$ comes from.

The hard half of Hille-Yosida, that (HY) is enough, is a different matter and is not proved here; the note below says what it does.
:::

:::proof{provenance=adapted src="evans-2010:§7.4.1b, proof of Thm 1, p. 411, and proof of Thm 2, pp. 411–412; evans-2010:§7.4.1c, proof of Thm 3(ii), pp. 413–414"}
Throughout, $u\in D(A)$ where required, and $\lVert S(t)\rVert\le1$ is used freely.

**Step 1: $S(t)$ maps $D(A)$ into itself and commutes with $A$.** For $t\ge0$ and $s>0$, rule 2 gives $S(s)S(t)u = S(t)S(s)u$, so

$$
\frac{S(s)\bigl(S(t)u\bigr) - S(t)u}{s} \;=\; S(t)\left(\frac{S(s)u-u}{s}\right) .
$$

As $s\to0^+$ the bracket tends to $Au$ and $S(t)$ is bounded, hence continuous, so the right-hand side tends to $S(t)Au$. By the definition of the generator the left-hand side therefore has a limit, so $S(t)u\in D(A)$ and $A S(t)u = S(t)Au$.

**Step 2: the derivative (part 1).** The same display, read as a forward difference quotient at $t$, shows

$$
\lim_{h\to0^+}\frac{S(t+h)u-S(t)u}{h} = S(t)Au .
$$

For the backward quotient take $0<h<t$ and split

$$
\frac{S(t)u - S(t-h)u}{h} - S(t)Au
= S(t-h)\left(\frac{S(h)u-u}{h} - Au\right) + \bigl(S(t-h)-S(t)\bigr)Au .
$$

The first term has norm at most $\lVert h^{-1}(S(h)u-u)-Au\rVert$, **because $\lVert S(t-h)\rVert\le1$**, and this tends to $0$ by the definition of $Au$; the second tends to $0$ by strong continuity (rule 3) applied to the vector $Au$. So the two one-sided derivatives agree and $\frac{d}{dt}S(t)u = S(t)Au = AS(t)u$, the last equality by Step 1. Both expressions are continuous in $t$, so $t\mapsto S(t)u$ is $C^1$ on $(0,\infty)$.

**Step 3: $D(A)$ is dense (part 2, first half).** Fix $u\in X$ and $t>0$ and set $u^t = \int_0^t S(s)u\,ds$, a Banach-space-valued Riemann integral of a continuous integrand. Since $s\mapsto S(s)u$ is continuous at $0$ with value $u$, we have $u^t/t\to u$ as $t\to0^+$. It remains to show $u^t\in D(A)$. For $r>0$, rule 2 gives $S(r)S(s)u = S(r+s)u$, so

$$
\frac{S(r)u^t - u^t}{r} = \frac1r\left(\int_0^t S(r+s)u\,ds - \int_0^t S(s)u\,ds\right)
= \frac1r\int_t^{t+r} S(s)u\,ds \;-\; \frac1r\int_0^{r} S(s)u\,ds ,
$$

after substituting $s\mapsto s-r$ in the first integral and cancelling the overlap $[r,t]$. As $r\to0^+$ the two averages tend to $S(t)u$ and to $u$ respectively, by continuity of $s\mapsto S(s)u$. Hence $u^t\in D(A)$ with $Au^t = S(t)u - u$, and the vectors $u^t/t\in D(A)$ converge to $u$. As $u$ was arbitrary, $D(A)$ is dense.

**Step 4: $A$ is closed (part 2, second half).** For $u\in D(A)$, integrating the identity of Step 2 from $0$ to $t$ (legitimate because $s\mapsto S(s)u$ is continuous on $[0,t]$ and $C^1$ on $(0,t)$ with continuous derivative $S(s)Au$) gives

$$
S(t)u - u = \int_0^t S(s)\,Au\;ds .
\tag{$\ast$}
$$

Let $u_k\in D(A)$ with $u_k\to u$ and $Au_k\to v$. Then $\lVert S(s)Au_k - S(s)v\rVert\le\lVert Au_k-v\rVert$ uniformly in $s$, so passing to the limit in $(\ast)$ written for $u_k$ gives $S(t)u-u = \int_0^t S(s)v\,ds$. Divide by $t$ and let $t\to0^+$: the right-hand side tends to $v$ by continuity of $s\mapsto S(s)v$ at $0$. So the defining limit for $u$ exists and equals $v$, that is $u\in D(A)$ and $Au=v$.

**Step 5: the resolvent formula (part 3).** Fix $\lambda>0$ and set $\tilde R_\lambda u = \int_0^\infty e^{-\lambda t}S(t)u\,dt$. The integrand has norm at most $e^{-\lambda t}\lVert u\rVert$, so the improper integral converges absolutely and

$$
\lVert \tilde R_\lambda u\rVert \le \int_0^\infty e^{-\lambda t}\lVert u\rVert\,dt = \frac{\lVert u\rVert}{\lambda} .
\tag{$\dagger$}
$$

Apply $S(h)$ for $h>0$ and substitute $\tau = t+h$:

$$
S(h)\tilde R_\lambda u = \int_0^\infty e^{-\lambda t}S(t+h)u\,dt
= e^{\lambda h}\int_h^\infty e^{-\lambda\tau}S(\tau)u\,d\tau
= e^{\lambda h}\left(\tilde R_\lambda u - \int_0^h e^{-\lambda\tau}S(\tau)u\,d\tau\right) .
$$

Therefore

$$
\frac{S(h)\tilde R_\lambda u - \tilde R_\lambda u}{h}
= \frac{e^{\lambda h}-1}{h}\,\tilde R_\lambda u \;-\; e^{\lambda h}\cdot\frac1h\int_0^h e^{-\lambda\tau}S(\tau)u\,d\tau
\;\xrightarrow[h\to0^+]{}\; \lambda\,\tilde R_\lambda u - u ,
$$

the first term because $(e^{\lambda h}-1)/h\to\lambda$, the second because the average of a continuous integrand over $[0,h]$ tends to its value at $0$, which is $u$. Hence $\tilde R_\lambda u\in D(A)$ and

$$
(\lambda I - A)\tilde R_\lambda u = u \qquad\text{for every } u\in X ,
$$

so $\lambda I - A$ is onto. For injectivity, let $u\in D(A)$. Each Riemann sum $\sum_i e^{-\lambda t_i}S(t_i)u\,\Delta t_i$ lies in $D(A)$ by Step 1, and applying $A$ to it gives $\sum_i e^{-\lambda t_i}S(t_i)Au\,\Delta t_i$ by Step 1 again; letting the mesh and then the truncation point go to their limits, both sums converge, so **closedness of $A$** (Step 4) gives $\tilde R_\lambda u\in D(A)$ with $A\tilde R_\lambda u = \tilde R_\lambda Au$. Hence

$$
\tilde R_\lambda(\lambda I - A)u = \lambda\tilde R_\lambda u - \tilde R_\lambda A u = \lambda \tilde R_\lambda u - A\tilde R_\lambda u = u ,
$$

using the previous display at the last step. So $\lambda I-A$ is one-to-one and onto, $\lambda\in\rho(A)$, $R_\lambda = \tilde R_\lambda$ is given by (L), and $\lVert R_\lambda\rVert\le1/\lambda$ by $(\dagger)$. This is the "only if" half of part 4. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Contractivity** is used exactly once in the proof, in the backward difference quotient of Step 2, to bound $\lVert S(t-h)\rVert$ uniformly as $h\to0^+$; and once more in Step 5, to make the Laplace integral converge for every $\lambda>0$. Replacing it by $\lVert S(t)\rVert\le e^{\omega t}$ changes only the range of $\lambda$ for which the integral converges, which is why part 5 of the statement has the same shape with $\lambda-\omega$ in place of $\lambda$.
- **Closedness of $A$** is what makes the resolvent bounded (closed graph theorem) and is used in Step 5 to pull $A$ through the integral. It cannot be dropped from Hille-Yosida: if $A$ is not closed, $(\lambda I-A)^{-1}$ need not be a bounded operator and (HY) does not even make sense as stated.
- **Density of $D(A)$** does not appear in the proof above, because part 2 produces it. It is a hypothesis in part 4 because there one starts from a bare operator $A$ and must know in advance that it has the property every generator has.
- **The resolvent condition is where the content is.** Take $X = L^2(0,1)$, $Au=u'$ with $D(A)=H^1(0,1)$, the Sobolev space of :ref[]{to=pde.weak-solutions-sobolev} on the interval. This $A$ is densely defined and closed, because the graph norm is the $H^1$ norm and $H^1(0,1)$ is complete. But for *every* real $\lambda$ the function $u_\lambda(x)=e^{\lambda x}$ lies in $D(A)$ and satisfies $(\lambda I-A)u_\lambda = \lambda e^{\lambda x}-\lambda e^{\lambda x}=0$, so $\lambda I-A$ is never one-to-one: $\rho(A)=\varnothing$, (HY) fails as badly as it can, and $A$ generates no semigroup. Shrinking the domain to $D(A) = \{u\in H^1(0,1) : u(1)=0\}$ — which is meaningful because functions in $H^1(0,1)$ are absolutely continuous — repairs it. Now $(\lambda I-A)u=f$ with $u(1)=0$ has the unique solution $u(x)=\int_x^1 e^{-\lambda(y-x)}f(y)\,dy$, and extending $f$ by zero to $\mathbb{R}$ exhibits $u$ as $f$ integrated against the kernel $z\mapsto e^{-\lambda z}\mathbf{1}_{z>0}$, whose $L^1$ norm is $\lambda^{-1}$; so $\lVert u\rVert_2\le\lambda^{-1}\lVert f\rVert_2$ by Young's inequality and (HY) holds. The semigroup is the truncated left translation $S(t)u(x)=u(x+t)$ for $x+t<1$ and $0$ otherwise, which satisfies $\lVert S(t)u\rVert_2^2 = \int_t^1\lvert u\rvert^2\le\lVert u\rVert_2^2$ and vanishes identically for $t\ge1$: formula (L) applied to it returns $\int_0^{1-x}e^{-\lambda t}u(x+t)\,dt$, which is the solution just written, so by the uniqueness in part 4 this is the semigroup generated by $A$. One boundary condition is the whole difference between an operator that generates nothing and one that generates a contraction semigroup.
:::

:::note[What the hard half of Hille-Yosida does]{provenance=adapted src="evans-2010:§7.4.2, proof of Thm 4, steps 2–6, pp. 414–416"}
We proved only that a generator satisfies (HY). For the converse :cite[Evans]{work=evans-2010 loc="§7.4.2, Eq. (18)–(21), pp. 414–415"} replaces the unbounded $A$ by the bounded **Yosida approximation** $A_\lambda = -\lambda I + \lambda^2 R_\lambda = \lambda A R_\lambda$, for which the exponential $S_\lambda(t) = e^{tA_\lambda}$ is an honest convergent power series and is a contraction because $\lVert R_\lambda\rVert\le\lambda^{-1}$ forces $\lVert S_\lambda(t)\rVert\le e^{-\lambda t}e^{\lambda^2 t\lVert R_\lambda\rVert}\le1$. He then shows $A_\lambda u\to Au$ for $u\in D(A)$ — here the density of $D(A)$ enters, through $\lambda R_\lambda u\to u$ for all $u\in X$ — and that $\lVert S_\lambda(t)u - S_\mu(t)u\rVert\le t\lVert A_\lambda u - A_\mu u\rVert$, so that $S(t)u=\lim_{\lambda\to\infty}S_\lambda(t)u$ exists, first on $D(A)$ and then on $X$ by density and the uniform bound. The limit is a contraction semigroup, and a last argument identifies its generator as $A$. The point of recording the route is that it is constructive: it is the same idea as replacing an unbounded operator by a bounded approximation and passing to the limit, which is how one proves the spectral theorem for unbounded operators in :ref[]{to=funcan.spectral-theorem-general}.
:::

:::method[Showing that a differential operator generates a semigroup]{provenance=adapted src="evans-2010:§7.4.3a, Thm 5 and its proof, pp. 416–418"}
To put an evolution equation $u_t + Lu = 0$ into semigroup form, where $L$ is an elliptic operator in the space variables with coefficients that do **not** depend on $t$:

1. **Choose the space and the domain.** Take $X$ to be the space in which you want the solution to live, typically $L^2$ of the spatial region, and let $D(A)$ be the subspace cut out by the boundary conditions and by the regularity you expect — for the Dirichlet problem on a bounded domain $U$ with smooth boundary, $X=L^2(U)$ and $D(A)=H_0^1(U)\cap H^2(U)$. Set $Au=-Lu$.
2. **Check that $D(A)$ is dense in $X$.** For the domains above this is immediate, since they contain $C_c^\infty(U)$.
3. **Check that $A$ is closed.** This is where an *a priori* estimate is needed: a bound of the form $\lVert u\rVert_{H^2}\le C(\lVert Au\rVert_{L^2}+\lVert u\rVert_{L^2})$ turns $L^2$-convergence of $u_k$ and $Au_k$ into $H^2$-convergence of $u_k$, which puts the limit back in $D(A)$.
4. **Solve the resolvent equation.** Show that $\lambda u - Au = f$, that is $Lu+\lambda u=f$ with the boundary conditions, has exactly one solution in $D(A)$ for every $f\in X$ and every $\lambda$ beyond some $\omega$. This is the elliptic existence theory: see :ref[]{to=pde.lax-milgram}, and then elliptic regularity to lift the weak solution into $H^2$.
5. **Estimate the resolvent.** Test the equation against $u$ itself and use the coercivity estimate $\beta\lVert u\rVert_{H_0^1}^2\le B[u,u]+\gamma\lVert u\rVert_{L^2}^2$ for the bilinear form $B$ of $L$, with constants $\beta>0$ and $\gamma\ge0$; this is :cite[Evans's]{work=evans-2010 loc="§7.4.3a, Eq. (27), p. 417"} energy estimate (27). This gives $(\lambda-\gamma)\lVert u\rVert_{L^2}^2\le\lVert f\rVert_{L^2}\lVert u\rVert_{L^2}$, hence $\lVert R_\lambda\rVert\le(\lambda-\gamma)^{-1}$ for $\lambda>\gamma$. See :ref[]{to=pde.energy-estimates} for estimates of this kind.
6. **Conclude.** By part 5 of the statement, $A$ generates a $\gamma$-contractive semigroup, and $u(t)=S(t)u_0$ solves the evolution problem, with $t\mapsto u(t)$ a $C^1$ map into $X$ whenever $u_0\in D(A)$.

:cite[Evans]{work=evans-2010 loc="§7.4.3a, p. 418"} notes two trade-offs. The method needs the coefficients of $L$ to be independent of $t$, which the Galerkin construction of weak solutions does not; but it delivers a more regular solution from the start, since $u(t)$ lies in $D(A)$ rather than merely in $H_0^1$.
:::

:::example[The heat semigroup on the line]{provenance=original}
Take $X = L^2(\mathbb{R})$ and let $S(t)$ be convolution with the :ref[heat kernel]{to=pde.heat-kernel} of diffusivity $1$,

$$
S(t)f = G_t * f, \qquad G_t(x) = \frac{1}{\sqrt{4\pi t}}e^{-x^2/4t}\ \ (t>0), \qquad S(0)=I .
$$

Write $\hat g(k)=\int g(x)e^{-ikx}dx$ as in :ref[]{to=fourier.fourier-transform}, so that $\lVert g\rVert_2^2 = (2\pi)^{-1}\lVert\hat g\rVert_2^2$ by :ref[Plancherel]{to=fourier.plancherel}. (The computations below are carried out in $L^2(\mathbb{R};\mathbb{C})$, in which the real space $L^2(\mathbb{R};\mathbb{R})$ of the abstract theory sits isometrically; all the operators here are real, so no norm is affected.) Since $\hat G_t(k)=e^{-tk^2}$, the convolution theorem gives

$$
\widehat{S(t)f}(k) = e^{-tk^2}\hat f(k) .
$$

**It is a contraction semigroup.** $e^{-sk^2}e^{-tk^2}=e^{-(s+t)k^2}$ gives rule 2; $\lvert e^{-tk^2}\rvert\le1$ and Plancherel give $\lVert S(t)f\rVert_2\le\lVert f\rVert_2$; and $\lVert S(t)f-f\rVert_2^2 = (2\pi)^{-1}\int\lvert e^{-tk^2}-1\rvert^2\lvert\hat f\rvert^2dk\to0$ as $t\to0^+$ by dominated convergence, with dominating function $4\lvert\hat f\rvert^2$, which is rule 3.

**Its generator is $d^2/dx^2$ on $H^2(\mathbb{R})$.** Let $H^2(\mathbb{R}) = \{f\in L^2 : k^2\hat f\in L^2\}$, equivalently the $f$ whose first two weak derivatives are in $L^2$. For $t>0$ the multiplier of $t^{-1}(S(t)-I)$ is $m_t(k) = (e^{-tk^2}-1)/t$, which satisfies $\lvert m_t(k)\rvert\le k^2$ (because $\lvert e^{-x}-1\rvert\le x$ for $x\ge0$) and $m_t(k)\to-k^2$ pointwise. If $f\in H^2$ then $\lvert m_t\hat f + k^2\hat f\rvert^2\le 4k^4\lvert\hat f\rvert^2\in L^1$, so dominated convergence gives $t^{-1}(S(t)f-f)\to f''$ in $L^2$. Conversely, if $t^{-1}(S(t)f-f)\to g$ in $L^2$ then $m_t\hat f\to\hat g$ in $L^2$, hence almost everywhere along a sequence $t_j\to0^+$; the pointwise limit is $-k^2\hat f$, so $\hat g=-k^2\hat f$ and $f\in H^2$. Thus $D(A)=H^2(\mathbb{R})$ and $Af=f''$.

**A worked case.** Let $f(x)=e^{-x^2}$. Convolving two Gaussians adds their variances: $f$ is $\sqrt{\pi}$ times the density of variance $\tfrac12$ and $G_t$ is the density of variance $2t$, so

$$
S(t)f(x) = \frac{1}{\sqrt{1+4t}}\,e^{-x^2/(1+4t)} .
$$

Three checks on the abstract statements.

1. *Semigroup law.* Replacing $t$ by $s$ and then applying $S(t)$ replaces $1+4s$ by $1+4s+4t$, which is the value of $1+4\tau$ at $\tau=s+t$. So $S(t)S(s)f=S(s+t)f$.
2. *Generator.* Differentiating the displayed formula at $t=0$ gives $-2e^{-x^2}+4x^2e^{-x^2}=(4x^2-2)e^{-x^2}$, and indeed $f''(x)=(4x^2-2)e^{-x^2}$.
3. *Contraction, with a number.* $\lVert S(t)f\rVert_2^2 = (1+4t)^{-1}\int e^{-2x^2/(1+4t)}dx = \sqrt{\pi/2}\,(1+4t)^{-1/2}$, so
   $$
   \frac{\lVert S(t)f\rVert_2}{\lVert f\rVert_2} = (1+4t)^{-1/4} .
   $$
   At $t=2$ this is $9^{-1/4}=3^{-1/2}=0.577350269\ldots$, and since $\lVert f\rVert_2=(\pi/2)^{1/4}=1.119515135\ldots$, we get $\lVert S(2)f\rVert_2 = 0.646352365\ldots\le\lVert f\rVert_2$, as part 3 of the statement requires.

**The resolvent, two ways.** Formula (L) with $\lambda=1$ and $x=0$ gives

$$
R_1f(0) = \int_0^\infty e^{-t}\,\frac{1}{\sqrt{1+4t}}\,dt
= \frac{e^{1/4}}{2}\int_{1/4}^{\infty} v^{-1/2}e^{-v}\,dv
= \frac{\sqrt{\pi}}{2}\,e^{1/4}\operatorname{erfc}(\tfrac12) = 0.545641361\ldots ,
$$

substituting $1+4t = 4v$ and recognising the incomplete gamma function $\Gamma(\tfrac12,\tfrac14)=\sqrt{\pi}\operatorname{erfc}(\tfrac12)$ (see :ref[]{to=spec.error-function}). Independently, $R_1 = (I - d^2/dx^2)^{-1}$ is convolution with $\tfrac12e^{-\lvert x\rvert}$, so

$$
R_1f(0) = \frac12\int_{-\infty}^{\infty} e^{-\lvert y\rvert}e^{-y^2}dy = \int_0^\infty e^{-y-y^2}dy = e^{1/4}\int_0^\infty e^{-(y+1/2)^2}dy = \frac{\sqrt{\pi}}{2}e^{1/4}\operatorname{erfc}(\tfrac12) ,
$$

the same number. The bound of part 3 is comfortably satisfied: $\lVert R_1\rVert\le1$, and indeed the multiplier of $R_1$ is $(1+k^2)^{-1}$, whose supremum is $1$.
:::

:::application[Markov chains, diffusions and quantum evolution]{provenance=adapted src="grimmett-stirzaker-2020:§6.9, Thm (4), p. 289, and the generator (15), p. 293; grimmett-stirzaker-2020:§6.10(A), Eq. (1)–(4), pp. 297–298"}
**Continuous-time Markov chains.** Let $X$ be a continuous-time Markov chain on a countable state space $S$, homogeneous, with transition probabilities $p_{ij}(t)=\mathbb{P}(X(t)=j\mid X(0)=i)$ and $P_t$ the matrix of these. :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§6.9, Thm (4), p. 289"} prove that $P_0=I$, that each $P_t$ is stochastic, and that the Chapman-Kolmogorov equations $P_{s+t}=P_sP_t$ hold; they call $\{P_t : t\ge0\}$ the **transition semigroup**, and they note explicitly that the Chapman-Kolmogorov relation *is* the semigroup property. That is rules 1 and 2 of the definition above, so probability theory arrives at the same structure from the other direction. The chain's generator $G=(g_{ij})$ has non-negative off-diagonal entries and rows summing to zero, which is :cite[their]{work=grimmett-stirzaker-2020 loc="§6.9, Eq. (15), p. 293"} condition (15), and the **Kolmogorov forward and backward equations**

$$
P_t' = P_tG, \qquad P_t' = GP_t ,
$$

derived by conditioning on $X(t)$ and on $X(h)$ respectively, are exactly the two halves of part 1 of the statement, $\frac{d}{dt}S(t)u = S(t)Au = AS(t)u$. When $S$ is finite the generator is a bounded operator, $D(A)$ is everything, and :cite[their]{work=grimmett-stirzaker-2020 loc="§6.10(A), Eq. (4), p. 298"} Eq. (4) solves the equations as the matrix exponential $P_t=\sum_n t^nG^n/n!$. The abstract theory is what survives when $S$ is infinite and $G$ is unbounded, and :ref[]{to=prob.continuous-time-markov-chains} takes the probabilistic side further.

For a two-state chain with rates $2$ out of state $1$ and $3$ out of state $2$,

$$
G = \begin{pmatrix}-2 & 2\\ 3 & -3\end{pmatrix},
\qquad
P_t = e^{tG} = \frac15\begin{pmatrix}3&2\\3&2\end{pmatrix} + \frac{e^{-5t}}{5}\begin{pmatrix}2&-2\\-3&3\end{pmatrix} ,
$$

since $G$ has eigenvalues $0$ and $-5$. At $t=0$ this is $I$; at $t=0.2$ it gives $p_{11}=(3+2e^{-1})/5 = 0.747151776\ldots$, and as $t\to\infty$ every row tends to the stationary distribution $(0.6,0.4)$, at the rate $e^{-5t}$ set by the non-zero eigenvalue. The row sums are $1$ for every $t$, as the zero row sums of $G$ require.

**Diffusion.** The example above is the semigroup side of the heat equation: $S(t)$ is the transition semigroup of Brownian motion run at twice the usual speed, since the law of standard Brownian motion at time $t$ has variance $t$ while $G_t$ has variance $2t$. Taking $A=\tfrac12 d^2/dx^2$ instead gives standard Brownian motion exactly, and the resolvent formula (L) becomes the statement that the Green's function of $\lambda - \tfrac12d^2/dx^2$ is the expected occupation density of a path killed at rate $\lambda$; see :ref[]{to=prob.brownian-motion}. On a bounded domain the same construction with Dirichlet conditions gives the semigroup of :ref[]{to=pde.heat-bounded-domains}, and the method block is the route to it.

**Quantum mechanics.** The unitary counterpart is :ref[Stone's theorem]{to=funcan.stone-theorem}: strongly continuous one-parameter *groups* of unitaries on a complex Hilbert space correspond to self-adjoint generators, $U(t)=e^{-itH}$, which is how the :ref[Schrödinger equation]{to=pde.schrodinger-equation} is solved for a general Hamiltonian. The two theories are siblings: contraction semigroups run one way in time and dissipate, unitary groups run both ways and conserve, and in both the content is a condition on the resolvent of the generator.
:::
