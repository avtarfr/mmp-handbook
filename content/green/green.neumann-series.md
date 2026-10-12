---
id: green.neumann-series
title: Neumann series
kind: theorem
level: core
summary: "For a second-kind integral equation with a bounded kernel and a small enough parameter, substituting the equation into itself converges: the solution is the Neumann series in the iterated kernels, summed by the resolvent kernel, with an explicit error bound from the contraction mapping theorem and three usable sufficient conditions for convergence."
prereqs: [green.integral-equations, funcan.banach-fixed-point, found.uniform-convergence]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§5.4 (Application of Banach's theorem to integral equations), eqs. (1)–(6) and Thm 5.4-1, pp. 319–321; Problems 4 and 7 (Neumann series, iterated and resolvent kernels), pp. 324–325"
    pages: "319-321, 324-325"
    role: the contraction estimate on C[a, b] with constant |mu| c (b - a), Theorem 5.4-1 (existence, uniqueness and convergence of the iteration from an arbitrary starting function), and the identification of the iteration with the Neumann series in the iterated kernels
  - work: rhb-2006
    loc: "§23.5 (Neumann series), eqs. (23.34)–(23.38) and the worked example, pp. 813–815"
    pages: "813-815"
    role: the iterated kernels and the recurrence they obey; the n-th order approximation; the resolvent kernel as a power series in the parameter; the square-integral sufficient condition for convergence
  - work: arfken-2013
    loc: "§21.3 (Neumann series), eqs. (21.49)–(21.55), pp. 1064–1066; Example 21.3.1 and the remark on the sharp radius of convergence, pp. 1066–1067"
    pages: "1064-1067"
    role: the successive-approximation construction and its operator reading as a binomial expansion of the inverse; the sufficient condition |lambda| |K|max (b - a) < 1 and the statement that the sharp condition is that |lambda| be smaller than the smallest characteristic value; the Dyson and Born series as instances
  - work: hassani-2013
    loc: "§18.1, the iteration and eqs. (18.8)–(18.11), pp. 546–548; §18.2, eqs. (18.12)–(18.13) and Example 18.2.1, pp. 549–550; Example 18.2.3, pp. 553–554"
    pages: "546-550, 553-554"
    role: the iteration written in operator form, the series in the iterated kernels, and the L-two convergence condition that the operator norm times the parameter be less than one
  - work: stakgold-holst-2011
    loc: "§4.4, Example 3 (the linear Fredholm equation as a fixed-point problem, eqs. (4.4.7)–(4.4.10)), pp. 250–251; §6.4 (Neumann series), eqs. (6.4.1)–(6.4.4) and Example 1, pp. 379–381"
    pages: "250-251, 379-381"
    role: the contraction argument in the uniform norm and the resulting Neumann series with its convergence condition; the observation that the series actually converges out to the spectral radius, shown explicitly on a one-term separable kernel
---

:::definition[Iterated kernels, the Neumann series and the resolvent kernel]{provenance=adapted src="rhb-2006:§23.5, eqs. (23.35)–(23.37), pp. 813–814; kreyszig-1978:§5.4, Problems 4 and 7, pp. 324–325; stakgold-holst-2011:§6.1, eqs. (6.1.25)–(6.1.27), pp. 358–359"}
Let $K$ be a kernel on $[a,b]\times[a,b]$ and $\mathcal{K}$ its integral operator, as in :ref[]{to=green.integral-equations}. The **iterated kernels** are
$$
K_{1}(x,z) = K(x,z), \qquad
K_{m}(x,z) = \int_{a}^{b} K(x,s)\,K_{m-1}(s,z)\,\mathrm{d}s \quad (m\ge 2),
$$
so that $K_m$ is the kernel of $\mathcal{K}^{m}$.

Given the second-kind Fredholm equation $y = f + \lambda\mathcal{K}y$, the **iterates** generated from a starting function $y_{0}$ are
$$
y_{n+1} = f + \lambda\mathcal{K}y_{n}, \qquad n=0,1,2,\dots
$$
With the particular choice $y_{0}=f$, the $n$-th iterate is the **$n$-th order approximation**
$$
y_{n}(x) = f(x) + \sum_{m=1}^{n}\lambda^{m}\int_{a}^{b}K_{m}(x,z)f(z)\,\mathrm{d}z ,
$$
and its formal limit
$$
y(x) = f(x) + \sum_{m=1}^{\infty}\lambda^{m}\int_{a}^{b}K_{m}(x,z)f(z)\,\mathrm{d}z
$$
is the **Neumann series** for the solution. Summing the series under the integral sign writes it as
$$
y(x) = f(x) + \lambda\int_{a}^{b} R(x,z;\lambda)\,f(z)\,\mathrm{d}z ,
\qquad
R(x,z;\lambda) = \sum_{m=0}^{\infty}\lambda^{m}K_{m+1}(x,z),
$$
and $R$ is the **resolvent kernel**. The same definitions apply verbatim to the Volterra equation, with the upper limit $b$ replaced by $x$ throughout.
:::

:::statement[Convergence of the Neumann series]{provenance=adapted src="kreyszig-1978:§5.4, eqs. (3), (5), (6) and Thm 5.4-1, pp. 319–321; arfken-2013:§21.3, eqs. (21.52)–(21.55), pp. 1065–1066; rhb-2006:§23.5, eqs. (23.35)–(23.38), pp. 813–814; hassani-2013:§18.2, eqs. (18.12)–(18.13), p. 549"}
Let $[a,b]$ be a finite interval, let $K$ be continuous on the square $[a,b]\times[a,b]$ with
$$
\lvert K(x,t)\rvert \le c \quad\text{for all } (x,t)\in[a,b]\times[a,b],
$$
let $f$ be continuous on $[a,b]$, and suppose
$$
\lvert\lambda\rvert\,c\,(b-a) \;<\; 1 . \tag{S}
$$
Then:

1. **Existence and uniqueness.** The equation $y = f+\lambda\mathcal{K}y$ has exactly one continuous solution $y$ on $[a,b]$.
2. **Convergence of the iteration.** For *any* continuous starting function $y_{0}$, the iterates $y_{n+1}=f+\lambda\mathcal{K}y_{n}$ converge to $y$ uniformly on $[a,b]$, with the error bound
   $$
   \max_{x\in[a,b]}\lvert y_{n}(x)-y(x)\rvert \;\le\; \frac{\alpha^{n}}{1-\alpha}\,\max_{x\in[a,b]}\lvert y_{1}(x)-y_{0}(x)\rvert ,
   \qquad \alpha = \lvert\lambda\rvert\,c\,(b-a) < 1 .
   $$
3. **The series.** The iterated kernels satisfy $\lvert K_{m}(x,z)\rvert\le c^{m}(b-a)^{m-1}$, the resolvent series for $R(x,z;\lambda)$ converges uniformly on the square, and
   $$
   y(x) = f(x) + \sum_{m=1}^{\infty}\lambda^{m}\!\int_{a}^{b}\!K_{m}(x,z)f(z)\,\mathrm{d}z
   = f(x) + \lambda\int_{a}^{b} R(x,z;\lambda)f(z)\,\mathrm{d}z .
   $$
4. **No characteristic values in the disc.** Under (S) the homogeneous equation $y=\lambda\mathcal{K}y$ has only the solution $y\equiv0$, so no $\lambda$ obeying (S) is a characteristic value.

Two further sufficient conditions appear in the sources and are weaker than (S) in the cases that matter.

- **Square-integral condition** (Riley, Hobson and Bence): the series converges in a domain of $\lvert\lambda\rvert$ provided
  $$
  \lvert\lambda\rvert^{2}\int_{a}^{b}\!\!\int_{a}^{b}\lvert K(x,z)\rvert^{2}\,\mathrm{d}z\,\mathrm{d}x \;<\;1 . \tag{S$'$}
  $$
- **Operator-norm condition** (Hassani; Stakgold and Holst): if $K$ is a Hilbert–Schmidt kernel and $\lvert\lambda\rvert\,\lVert\mathcal{K}\rVert<1$, then $1-\lambda\mathcal{K}$ is invertible on $L^{2}(a,b)$ and $y=\sum_{n\ge0}\lambda^{n}\mathcal{K}^{n}f$ converges in $L^{2}$. $(\mathrm{S}')$ is this condition with the Hilbert–Schmidt bound $\lVert\mathcal{K}\rVert\le(\iint\lvert K\rvert^{2})^{1/2}$ put in for $\lVert\mathcal{K}\rVert$.
:::

:::idea{provenance=original}
Read $y=f+\lambda\mathcal{K}y$ as "$y$ is $f$, corrected by $\lambda\mathcal{K}y$". If the correction is small, guess $y\approx f$, put the guess back in to get a better one, and repeat; each round pushes the error down by a factor of $\lvert\lambda\rvert\lVert\mathcal{K}\rVert$-ish, and the accumulated corrections are the terms $\lambda^{m}\mathcal{K}^{m}f$. The whole content of the theorem is that the map $y\mapsto f+\lambda\mathcal{K}y$ is a contraction on the complete space $C[a,b]$ when $\lvert\lambda\rvert c(b-a)<1$, so :ref[the contraction mapping theorem]{to=funcan.banach-fixed-point} supplies the fixed point, the uniqueness, the convergence from any starting function and the error bound at once. The algebra of the series is then just the geometric series $(1-\lambda\mathcal{K})^{-1}=\sum\lambda^{m}\mathcal{K}^{m}$, legitimised by the same estimate.
:::

:::proof{provenance=adapted src="kreyszig-1978:§5.4, eqs. (2)–(6) and Thm 5.4-1, pp. 319–321; stakgold-holst-2011:§4.4, Example 3, pp. 250–251; rhb-2006:§23.5, p. 814"}
Work in $X=C[a,b]$, the continuous functions on the finite closed interval with the metric
$$
d(u,w) = \max_{x\in[a,b]}\lvert u(x)-w(x)\rvert ,
$$
which is complete. Define $T\colon X\to X$ by
$$
(Tu)(x) = f(x)+\lambda\int_{a}^{b}K(x,t)u(t)\,\mathrm{d}t .
$$
$T$ really does map $X$ into $X$: for continuous $u$ the integrand is continuous on the square, so $x\mapsto\int_a^b K(x,t)u(t)\,\mathrm{d}t$ is continuous by uniform continuity of $K$ on the compact square, and $f$ is continuous. A fixed point of $T$ is exactly a continuous solution of the integral equation.

**Step 1: $T$ is a contraction.** For $u,w\in X$ and any $x$,
$$
\lvert (Tu)(x)-(Tw)(x)\rvert
= \Bigl\lvert\lambda\int_{a}^{b}K(x,t)\bigl[u(t)-w(t)\bigr]\mathrm{d}t\Bigr\rvert
\le \lvert\lambda\rvert\,c\int_{a}^{b}\lvert u(t)-w(t)\rvert\,\mathrm{d}t
\le \lvert\lambda\rvert\,c\,(b-a)\,d(u,w),
$$
using the bound $\lvert K\rvert\le c$ — which exists because $K$ is continuous on a compact square — and then replacing $\lvert u-w\rvert$ by its maximum. Taking the maximum over $x$ on the left,
$$
d(Tu,Tw)\le \alpha\,d(u,w), \qquad \alpha = \lvert\lambda\rvert\,c\,(b-a).
$$
Hypothesis (S) says $\alpha<1$, so $T$ is a contraction.

**Step 2: parts 1 and 2.** :ref[The contraction mapping theorem]{to=funcan.banach-fixed-point} applied to $T$ on the complete metric space $X$ gives a unique fixed point $y\in X$, convergence of $y_{n}=T^{n}y_{0}$ to $y$ for every $y_{0}\in X$, and the a-priori bound $d(y_{n},y)\le\frac{\alpha^{n}}{1-\alpha}d(y_{1},y_{0})$. Convergence in the metric $d$ is uniform convergence on $[a,b]$. This is parts 1 and 2.

**Step 3: the bound on the iterated kernels.** By induction. For $m=1$, $\lvert K_{1}\rvert = \lvert K\rvert\le c = c^{1}(b-a)^{0}$. Assuming $\lvert K_{m-1}\rvert\le c^{m-1}(b-a)^{m-2}$ for some $m\ge2$,
$$
\lvert K_{m}(x,z)\rvert \le \int_{a}^{b}\lvert K(x,s)\rvert\,\lvert K_{m-1}(s,z)\rvert\,\mathrm{d}s
\le c\cdot c^{m-1}(b-a)^{m-2}\cdot(b-a) = c^{m}(b-a)^{m-1},
$$
which closes the induction.

**Step 4: the series, part 3.** The $m$-th term of the resolvent series is bounded by $\lvert\lambda\rvert^{m}c^{m+1}(b-a)^{m} = c\,\alpha^{m}$, a constant times a convergent geometric series; by the Weierstrass criterion (:ref[]{to=found.uniform-convergence}) $\sum_{m\ge0}\lambda^{m}K_{m+1}(x,z)$ converges uniformly on the square, so $R(\cdot,\cdot;\lambda)$ is continuous there.

Next identify the iterates with the partial sums. Take $y_{0}=f$. Then $y_{1}=f+\lambda\mathcal{K}f$, and if $y_{n}=f+\sum_{m=1}^{n}\lambda^{m}\mathcal{K}^{m}f$ then
$$
y_{n+1} = f+\lambda\mathcal{K}y_{n} = f+\lambda\mathcal{K}f+\sum_{m=1}^{n}\lambda^{m+1}\mathcal{K}^{m+1}f = f+\sum_{m=1}^{n+1}\lambda^{m}\mathcal{K}^{m}f ,
$$
so by induction $y_{n}$ is the $n$-th partial sum. Because $\mathcal{K}^{m}$ is the integral operator of $K_{m}$ — which is the definition of $K_m$, read off by iterating $\mathcal{K}$ and exchanging the order of the finitely many integrations, legitimate since all integrands are continuous on compact sets — the partial sum is the $n$-th order approximation of the definition block. Part 2 says $y_{n}\to y$ uniformly, which is the first displayed formula of part 3. Finally, in
$$
y(x) = f(x)+\sum_{m=1}^{\infty}\lambda^{m}\int_{a}^{b}K_{m}(x,z)f(z)\,\mathrm{d}z
$$
the series of continuous functions of $x$ converges uniformly (same geometric bound, now with the extra factor $(b-a)\max\lvert f\rvert$), so the sum and the integral may be exchanged, which gives the resolvent form.

**Step 5: part 4.** If $y=\lambda\mathcal{K}y$ with $y$ continuous, then $y$ is a fixed point of $T$ with $f\equiv0$; so is $y\equiv0$; uniqueness in part 1 forces $y\equiv0$. $\square$
:::

:::remark[Where the hypotheses are used, and how far they can be relaxed]{provenance=adapted src="arfken-2013:§21.3, eqs. (21.55) and the discussion after Example 21.3.1, pp. 1066–1067; stakgold-holst-2011:§6.4, eqs. (6.4.2)–(6.4.4) and the discussion of Example 1, pp. 379–381; rhb-2006:§23.5, eq. (23.38), p. 814, and §23.6, pp. 815–816; hassani-2013:§18.1, p. 548"}
- **Where (S) enters.** Condition (S) is used once, in step 1, and only to make $\alpha<1$. Continuity of $K$ is used twice: to produce the bound $c$ on a compact square, and to keep $T$ inside $C[a,b]$. The finiteness of $b-a$ is used in the estimate $\int_a^b\lvert u-w\rvert\le(b-a)d(u,w)$; on an infinite interval the same argument needs $\int\lvert K(x,t)\rvert\mathrm{d}t$ bounded instead.
- **(S) is far from sharp.** Arfken, Weber and Harris are explicit about this: their Example 21.3.1 has a Neumann series that converges comfortably although (S) fails, and they report that the necessary and sufficient condition is $\lvert\lambda\rvert<\lvert\lambda_{e}\rvert$, where $\lambda_{e}$ is the characteristic value of smallest modulus of the corresponding homogeneous equation. Stakgold and Holst make the same point in their convention: the series they obtain is valid out to the spectral radius of $\mathcal{K}$, not merely to $\lVert\mathcal{K}\rVert$, and they verify it on a one-term separable kernel where the sum can be continued analytically to a rational function of the parameter. In this handbook's convention their statement reads: the Neumann series converges for $\lvert\lambda\rvert<\lvert\lambda_{e}\rvert$, with $\lvert\lambda_{e}\rvert^{-1}$ the spectral radius of $\mathcal{K}$. Neither book proves the sharp statement, and neither do we; it is a consequence of the spectral theory of compact operators (:ref[]{to=funcan.spectrum}).
- **Beyond the radius.** Convergence of the series is sufficient but not necessary for a solution to exist. Even when the series diverges, the resolvent usually continues as a meromorphic function of $\lambda$ whose poles are the characteristic values; Riley, Hobson and Bence describe Fredholm's construction of $R=D(x,z;\lambda)/d(\lambda)$ as a ratio of two power series that converge for *all* $\lambda$, so that the solution is unique and finite whenever $d(\lambda)\neq0$ and the zeros of $d$ are the characteristic values. We do not reproduce that construction; see also :ref[]{to=green.hilbert-schmidt} for the symmetric case, where the continuation is written down explicitly as an eigenfunction expansion.
- **Volterra is different in kind.** For a Volterra equation the factor $(b-a)^{m}$ in step 3 is replaced by $(x-a)^{m}/m!$, and the series then converges for *every* $\lambda$. That is the subject of :ref[]{to=green.volterra-equations}; Hassani states it as his Theorem 18.1.2, and it is the reason he treats Volterra equations first.
- **Which condition to use.** (S) is the easiest to check and the crudest. $(\mathrm{S}')$ is better whenever $K$ is peaked, since it averages $\lvert K\rvert^{2}$ instead of taking its maximum; it is also the natural condition for an $L^{2}$ kernel that is unbounded. The sharp condition requires knowing the characteristic values, which is usually harder than solving the equation.
:::

:::example[Three convergence conditions, measured against the truth]{provenance=original}
Take $[a,b]=[0,1]$, $f\equiv1$ and the separable kernel
$$
K(x,t) = \mathrm{e}^{\,x-t},
$$
so the equation is
$$
y(x) = 1 + \lambda\int_{0}^{1}\mathrm{e}^{\,x-t}\,y(t)\,\mathrm{d}t .
$$

**The iterated kernels.** Because $K(x,s)K(s,t)=\mathrm{e}^{x-s}\mathrm{e}^{s-t}=\mathrm{e}^{x-t}$ has no $s$ left in it,
$$
K_{2}(x,t) = \int_{0}^{1}\mathrm{e}^{\,x-t}\,\mathrm{d}s = \mathrm{e}^{\,x-t} = K(x,t),
$$
and by induction every $K_{m}=K$. So the resolvent kernel is a geometric series with constant ratio:
$$
R(x,t;\lambda)=\sum_{m=0}^{\infty}\lambda^{m}\mathrm{e}^{\,x-t} = \frac{\mathrm{e}^{\,x-t}}{1-\lambda}
\qquad (\lvert\lambda\rvert<1).
$$

**The iterates.** With $y_{0}=f=1$ and $\int_{0}^{1}\mathrm{e}^{-t}\,\mathrm{d}t = 1-\mathrm{e}^{-1}$,
$$
y_{1}(x) = 1+\lambda(1-\mathrm{e}^{-1})\mathrm{e}^{x},
\qquad
y_{2}(x) = 1+\lambda(1-\mathrm{e}^{-1})\mathrm{e}^{x}+\lambda^{2}(1-\mathrm{e}^{-1})\mathrm{e}^{x},
$$
and in general $y_{n}(x) = 1+(1-\mathrm{e}^{-1})\mathrm{e}^{x}\sum_{m=1}^{n}\lambda^{m}$: the second step is $1+\lambda\int_0^1 \mathrm{e}^{x-t}[1+\lambda(1-\mathrm{e}^{-1})\mathrm{e}^{t}]\mathrm{d}t$, and $\int_0^1\mathrm{e}^{-t}\mathrm{e}^{t}\mathrm{d}t=1$ reproduces the same shape. Hence for $\lvert\lambda\rvert<1$
$$
y(x) = 1 + \frac{\lambda(1-\mathrm{e}^{-1})}{1-\lambda}\,\mathrm{e}^{x} .
$$

**Check.** Substituting $y=1+\beta\mathrm{e}^{x}$ into the equation gives $1+\lambda\mathrm{e}^{x}[(1-\mathrm{e}^{-1})+\beta]$, which equals $1+\beta\mathrm{e}^{x}$ exactly when $\beta(1-\lambda)=\lambda(1-\mathrm{e}^{-1})$ — the value above. At $\lambda=\tfrac12$ the solution is $y(x)=1+(1-\mathrm{e}^{-1})\mathrm{e}^{x}$, and at $x=1$ this is $1+\mathrm{e}-1=\mathrm{e}=2.718281\ldots$, a number worth remembering as the check on the whole calculation.

**Now compare the three conditions.** The exact solution has a single pole, at $\lambda=1$, so the Neumann series converges exactly for $\lvert\lambda\rvert<1$.

- Condition (S): $c=\max_{[0,1]^{2}}\mathrm{e}^{x-t}=\mathrm{e}$ and $b-a=1$, so (S) reads $\lvert\lambda\rvert<\mathrm{e}^{-1}=0.3679$.
- Condition $(\mathrm{S}')$: $\int_{0}^{1}\!\!\int_{0}^{1}\mathrm{e}^{2(x-t)}\mathrm{d}x\,\mathrm{d}t = \frac{\mathrm{e}^{2}-1}{2}\cdot\frac{1-\mathrm{e}^{-2}}{2}=\frac{\mathrm{e}^{2}+\mathrm{e}^{-2}-2}{4}=1.38110$, so $(\mathrm{S}')$ reads $\lvert\lambda\rvert<1/\sqrt{1.38110}=0.8509$.
- The sharp condition: $\mathcal{K}u = \mathrm{e}^{x}\int_{0}^{1}\mathrm{e}^{-t}u(t)\,\mathrm{d}t$ has rank one, and $\mathcal{K}\mathrm{e}^{x} = \mathrm{e}^{x}\int_{0}^{1}\mathrm{e}^{-t}\mathrm{e}^{t}\mathrm{d}t = \mathrm{e}^{x}$. So $1$ is the only nonzero eigenvalue of $\mathcal{K}$, the only characteristic value is $\lambda_{e}=1$, and the sharp radius is $\lvert\lambda\rvert<1$.

The three numbers $0.3679 < 0.8509 < 1$ are exactly the hierarchy the remark describes. At $\lambda=\tfrac12$, which (S) rejects, the series converges perfectly well; its terms shrink by a factor $2$ each step, which the error bound of part 2 reports as $\alpha=\mathrm{e}/2>1$ — no information at all — while the true geometric ratio is $\tfrac12$.

**The homogeneous equation.** At $\lambda=1$ the equation $y=1+\int_{0}^{1}\mathrm{e}^{x-t}y\,\mathrm{d}t$ has no solution: putting $y=1+\beta\mathrm{e}^{x}$ gives $\beta = (1-\mathrm{e}^{-1})+\beta$, which is impossible. But the homogeneous equation $y=\int_{0}^{1}\mathrm{e}^{x-t}y\,\mathrm{d}t$ has the one-dimensional family $y=\beta\mathrm{e}^{x}$. This is the Fredholm alternative at work (:ref[]{to=green.separable-kernels}): $f\equiv1$ fails the solvability condition, since here $K$ is real with $K^{*}(x,t)=\mathrm{e}^{\,t-x}$, the adjoint homogeneous equation $g=\overline{\lambda}\,\mathcal{K}^{*}g$ at $\lambda=1$ has the solutions $g(x)=\gamma\mathrm{e}^{-x}$ (indeed $\int_{0}^{1}\mathrm{e}^{\,t-x}\gamma\mathrm{e}^{-t}\mathrm{d}t=\gamma\mathrm{e}^{-x}$), and for $\gamma=1$, $(f,g)=\int_{0}^{1}\mathrm{e}^{-x}\,\mathrm{d}x = 1-\mathrm{e}^{-1}\neq0$.
:::

:::application{provenance=original}
**Perturbation theory is a Neumann series.** This is the reason the result matters far beyond integral equations, and both Arfken, Weber and Harris and Hassani point it out.

*The Dyson series.* In quantum mechanics the evolution operator in the interaction picture satisfies
$$
U(t,t_{0}) = 1 - \frac{\mathrm{i}}{\hbar}\int_{t_{0}}^{t} V(t_{1})\,U(t_{1},t_{0})\,\mathrm{d}t_{1},
$$
a Volterra equation of the second kind for the operator-valued unknown $U$, with $f=1$ and $\lambda=-\mathrm{i}/\hbar$. Its Neumann series
$$
U(t,t_{0}) = 1 - \frac{\mathrm{i}}{\hbar}\int_{t_{0}}^{t}\!V(t_{1})\,\mathrm{d}t_{1}
+\Bigl(\frac{-\mathrm{i}}{\hbar}\Bigr)^{2}\int_{t_{0}}^{t}\!\mathrm{d}t_{1}\int_{t_{0}}^{t_{1}}\!\mathrm{d}t_{2}\,V(t_{1})V(t_{2})+\cdots
$$
is the Dyson series, and the iterated kernels are exactly the time-ordered products. Because the equation is of Volterra type, the series converges for every coupling strength when $V$ is bounded (:ref[]{to=green.volterra-equations}) — the ordering of the times supplies the factorials $1/m!$ that a Fredholm equation does not have.

*The Born series.* The time-independent scattering problem in position space is the Lippmann–Schwinger equation, a Fredholm equation of the second kind with the free outgoing Green's function as kernel and the incident wave as $f$. Truncating its Neumann series after the first correction is the first Born approximation; the whole series is the Born series (:ref[]{to=green.born-approximation}). Here the Fredholm character is real: for a strong enough potential $\lambda$ passes a characteristic value, the series diverges, and the characteristic values that spoil it are the bound states and resonances. Convergence of the Born series is thus not a technicality but a statement about the physics — it fails precisely when the scatterer can hold the particle.

*Iterative numerics.* On the computational side, discretising $y=f+\lambda\mathcal{K}y$ by a quadrature rule turns it into a linear system $(\mathrm{I}-\lambda A)c=b$, and the Neumann series is then the Richardson iteration $c_{n+1}=b+\lambda Ac_{n}$ for that system. Part 2 of the statement is the familiar fact that such an iteration converges at a geometric rate whenever the iteration matrix has norm less than one, and the error bound is the usual one; the remark about the sharp radius is the usual statement that convergence is governed by the spectral radius rather than the norm (:ref[]{to=num.linear-systems-numerics}). What the integral-equation setting adds is that the $m$-th term has a meaning — the contribution of paths that scatter $m$ times — so truncating the series is a physical approximation and not only a numerical one.
:::
