---
id: green.volterra-equations
title: Volterra equations
kind: theorem
level: core
summary: "A second-kind Volterra equation with a continuous kernel has exactly one continuous solution for every value of the parameter, so it has no characteristic values at all; the proof is that some power of the iteration map is a contraction, with a factorial in the bound. Abel's weakly singular equation of the first kind is then inverted in closed form."
prereqs: [green.neumann-series, green.integral-equations, funcan.banach-fixed-point, spec.beta-function, spec.gamma-function]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§5.4, eq. (7), Thm 5.4-2 and its proof, eqs. (8)–(10), pp. 321–322; the completion of the proof and Lemma 5.4-3 (fixed point of a map a power of which is a contraction), p. 323; the remark that a Volterra equation is a Fredholm equation whose kernel vanishes above the diagonal, p. 323"
    pages: "321-323"
    role: the statement of the theorem with its exact hypotheses on the triangular region, the induction bound with the factorial, the fixed-point lemma used to conclude, and the proof of that lemma
  - work: hassani-2013
    loc: "§18.1, the iteration bound eq. (18.5) and the operator-norm estimate leading to Thm 18.1.2, pp. 544–545"
    pages: "544-545"
    role: Theorem 18.1.2, that a second-kind Volterra equation has no nonzero characteristic value, that the operator one inverts is invertible for every parameter value, and the series form of the unique solution in the iterated kernels
  - work: stakgold-holst-2011
    loc: "§4.4, Example 4 (the nonlinear and linear Volterra equations), eqs. (4.4.11)–(4.4.15) and the factorial estimates (4.4.13)–(4.4.14), pp. 251–252; §6.1, Example 1 (Abel's integral equation and the tautochrone), eq. (6.1.1), p. 352"
    pages: "251-252, 352"
    role: the same contraction argument carried out for the nonlinear Volterra equation under a Lipschitz condition, with the explicit factorial bound and the conclusion that the linear equation has no eigenvalues and that the result holds for an arbitrarily long interval; Abel's equation as the tautochrone problem, the remark that the prescribed data may have to satisfy conditions for a solution to exist, and the free-fall bound on those data
  - work: arfken-2013
    loc: "§21.2, Example 21.2.2 (the generalized Abel equation solved by Laplace transform), eqs. (21.27)–(21.29), pp. 1055–1056 — eq. (21.26) is the Fourier-transform solution of the preceding example, not the Abel equation; Exercise 21.2.6 (the beta-function route) and Exercise 21.2.7, pp. 1061–1062; §21.3, the remark that for a Volterra equation the Neumann series converges for all values of the parameter, p. 1067"
    pages: "1055-1056, 1061-1062, 1067"
    role: the generalized Abel equation, its inversion formula, the two routes to it (Laplace convolution and multiplication by a power followed by a beta integral), and the statement that the Volterra Neumann series converges for every parameter value
  - work: rhb-2006
    loc: "§23.2, p. 805 (a Volterra equation as a Fredholm equation whose kernel vanishes for z > x); §23.5, eqs. (23.34)–(23.37), pp. 813–814"
    pages: "805, 813-814"
    role: the identification of a Volterra equation with a Fredholm equation whose kernel vanishes above the diagonal; the Neumann series and iterated kernels in the form used here
---

:::definition[Volterra equations and Abel's equation]{provenance=adapted src="kreyszig-1978:§5.4, eq. (7), p. 321; arfken-2013:§21.2, Example 21.2.2, eq. (21.27), p. 1055; stakgold-holst-2011:§6.1, Example 1, eq. (6.1.1), p. 352"}
Fix a finite interval $[a,b]$ and let
$$
R = \{(x,t) : a\le t\le x\le b\}
$$
be the closed triangle below the diagonal. A **Volterra equation of the second kind** is
$$
y(x) = f(x)+\lambda\int_{a}^{x}K(x,t)\,y(t)\,\mathrm{d}t , \qquad a\le x\le b ,
$$
with $f$ and $K$ given, $K$ defined on $R$, and $\lambda$ a scalar parameter; a **Volterra equation of the first kind** is
$$
\int_{a}^{x}K(x,t)\,y(t)\,\mathrm{d}t = f(x) .
$$
Only the values of $K$ on $R$ enter, so a Volterra equation is the Fredholm equation on $[a,b]$ whose kernel has been extended by $K(x,t)=0$ for $t>x$ — a kernel that need not be continuous across the diagonal.

**Abel's equation** is the first-kind Volterra equation with the weakly singular kernel $(x-t)^{-\alpha}$,
$$
\int_{0}^{x}\frac{y(t)}{(x-t)^{\alpha}}\,\mathrm{d}t = f(x), \qquad 0<\alpha<1 ,
$$
which Arfken, Weber and Harris call the **generalized Abel equation**; the classical case is $\alpha=\tfrac12$. The kernel blows up as $t\uparrow x$, so this is a **singular** integral equation. What puts it outside the theorem below, however, is that it is of the first kind: the theorem is about second-kind equations, and the remark after it shows that Abel's kernel in a second-kind equation would cause no trouble at all. Abel's equation is therefore stated and solved separately.
:::

:::statement[Second-kind Volterra equations are always uniquely solvable]{provenance=adapted src="kreyszig-1978:§5.4, Thm 5.4-2 and Lemma 5.4-3, pp. 321–323; hassani-2013:§18.1, Thm 18.1.2 and eq. (18.5), pp. 544–545; stakgold-holst-2011:§4.4, Example 4, eqs. (4.4.13)–(4.4.15), pp. 251–252"}
Let $f$ be continuous on $[a,b]$ and let $K$ be continuous on the triangular region $R=\{a\le t\le x\le b\}$. Then:

1. **Unique solvability, for every $\lambda$.** For *every* scalar $\lambda$ the equation
   $$
   y(x) = f(x)+\lambda\int_{a}^{x}K(x,t)\,y(t)\,\mathrm{d}t
   $$
   has exactly one continuous solution $y$ on $[a,b]$. No restriction on $\lambda$ is needed, and the conclusion holds however long the interval is.
2. **No characteristic values.** Taking $f\equiv0$, the only solution of the homogeneous equation is $y\equiv0$, whatever $\lambda$ may be: a second-kind Volterra equation has no characteristic value, equivalently the operator $1-\lambda\mathcal{K}$ is a bijection of $C[a,b]$ for every $\lambda$, with bounded inverse $\sum_{m\ge0}\lambda^{m}\mathcal{K}^{m}$ supplied by part 3, so the spectrum of the Volterra operator $\mathcal{K}$ contains no nonzero point.
3. **The Neumann series converges everywhere.** With $c=\max_{R}\lvert K\rvert$, the iterated kernels obey
   $$
   \lvert K_{m}(x,t)\rvert \le c^{m}\,\frac{(x-t)^{m-1}}{(m-1)!} \qquad\text{on } R ,
   $$
   so the Neumann series of :ref[]{to=green.neumann-series} converges uniformly on $[a,b]$ for every $\lambda$, and the unique solution is
   $$
   y(x) = f(x)+\sum_{m=1}^{\infty}\lambda^{m}\int_{a}^{x}K_{m}(x,t)\,f(t)\,\mathrm{d}t ,
   \qquad
   K_{m}(x,t)=\int_{t}^{x}K(x,s)K_{m-1}(s,t)\,\mathrm{d}s .
   $$
   The iterated kernels of :ref[]{to=green.integral-equations} are defined with the full range $\int_{a}^{b}$; the limits $t$ to $x$ written here are not a new definition but the same one evaluated, since for the Volterra kernel extended by $K=0$ above the diagonal the integrand vanishes for $s<t$ and for $s>x$. Step 5 of the proof carries out that reconciliation.

Hassani states parts 1 and 2 as his Theorem 18.1.2. He derives them from the pointwise bound
$$
\bigl\lvert(\lambda\mathcal{K})^{m}[u](x)\bigr\rvert \le \lvert\lambda\rvert^{m}c^{m}\lVert u\rVert_{\infty}\frac{(x-a)^{m}}{m!},
$$
with $c=\max_{R}\lvert K\rvert$ (his $M$), which he then replaces by $x=b$ and calls an operator-norm inequality; as printed, his right-hand side still carries the factor $\lVert u\rVert_{\infty}$, which for an operator norm has to be divided out, giving $\lVert(\lambda\mathcal{K})^{m}\rVert\le\lvert\lambda\rvert^{m}c^{m}(b-a)^{m}/m!$. Either way $\sum_{m}\lVert(\lambda\mathcal{K})^{m}\rVert$ converges, by comparison with $\mathrm{e}^{c\lvert\lambda\rvert(b-a)}$, for every $\lambda$, and he identifies the sum of the series with the inverse of $1-\lambda\mathcal{K}$. Kreyszig states part 1 as his Theorem 5.4-2, with the same factorial estimate; Stakgold and Holst prove the corresponding statement for the nonlinear Volterra equation $u(x)=f(x)+\int_{a}^{x}k(x,y,u(y))\,\mathrm{d}y$ under a Lipschitz condition $\lvert k(x,y,z_{2})-k(x,y,z_{1})\rvert\le M\lvert z_{1}-z_{2}\rvert$ on $k$, of which the linear case is the choice $k(x,y,z)=\lambda K(x,y)z$.
:::

:::idea{provenance=original}
For a Fredholm equation the iteration map $T u = f+\lambda\mathcal{K}u$ shrinks distances by at most $\lvert\lambda\rvert c(b-a)$ per step, and that is a contraction only if $\lambda$ is small. For a Volterra equation the integral runs only up to $x$, so the first step loses a factor $(x-a)$ rather than $(b-a)$; the second step integrates *that* and loses $(x-a)^{2}/2$; after $m$ steps the factor is $(x-a)^{m}/m!$. A factorial beats any geometric growth, so however large $\lvert\lambda\rvert$ is, some power $T^{m}$ *is* a contraction. A map whose $m$-th power is a contraction has a unique fixed point too — that is a short lemma — and we are done. The triangular support of the kernel is thus not a technical convenience: it is the whole reason the Volterra theory is unconditional, and it is the same mechanism that makes the Dyson series converge where the Born series need not.
:::

:::proof{provenance=adapted src="kreyszig-1978:§5.4, eqs. (8)–(10) and Lemma 5.4-3 with its proof, pp. 321–323; stakgold-holst-2011:§4.4, Example 4, eqs. (4.4.12)–(4.4.14), pp. 251–252"}
Work in the complete metric space $X=C[a,b]$ with $d(u,w)=\max_{[a,b]}\lvert u-w\rvert$, and define
$$
(Tu)(x) = f(x)+\lambda\int_{a}^{x}K(x,t)u(t)\,\mathrm{d}t .
$$
$T$ maps $X$ into $X$: the integrand is continuous on $R$, which is closed and bounded, so $x\mapsto\int_{a}^{x}K(x,t)u(t)\,\mathrm{d}t$ is continuous. Fixed points of $T$ are exactly the continuous solutions. Since $K$ is continuous on the compact set $R$, it is bounded there; put $c=\max_{R}\lvert K\rvert$ and $\kappa=\lvert\lambda\rvert c$.

**Step 1: the factorial estimate.** We claim that for all $u,w\in X$, all $m\ge1$ and all $x\in[a,b]$,
$$
\bigl\lvert (T^{m}u)(x)-(T^{m}w)(x)\bigr\rvert \;\le\; \kappa^{m}\,\frac{(x-a)^{m}}{m!}\,d(u,w).
\tag{E}
$$
For $m=1$,
$$
\lvert (Tu)(x)-(Tw)(x)\rvert = \Bigl\lvert\lambda\int_{a}^{x}K(x,t)[u(t)-w(t)]\,\mathrm{d}t\Bigr\rvert
\le \kappa\int_{a}^{x}\lvert u-w\rvert\,\mathrm{d}t \le \kappa\,(x-a)\,d(u,w),
$$
using $\lvert K\rvert\le c$ on $R$ and bounding $\lvert u-w\rvert$ by its maximum. Suppose (E) holds for some $m\ge1$. Applying $T$ once more and inserting the inductive bound inside the integral,
$$
\bigl\lvert (T^{m+1}u)(x)-(T^{m+1}w)(x)\bigr\rvert
\le \kappa\int_{a}^{x}\bigl\lvert (T^{m}u)(t)-(T^{m}w)(t)\bigr\rvert\,\mathrm{d}t
\le \kappa^{m+1}\,\frac{d(u,w)}{m!}\int_{a}^{x}(t-a)^{m}\,\mathrm{d}t ,
$$
and $\int_{a}^{x}(t-a)^{m}\mathrm{d}t = (x-a)^{m+1}/(m+1)$, which turns $1/m!$ into $1/(m+1)!$. That closes the induction. Taking the maximum over $x$ and using $x-a\le b-a$,
$$
d(T^{m}u,T^{m}w) \le \alpha_{m}\,d(u,w), \qquad
\alpha_{m} = \frac{\bigl[\lvert\lambda\rvert c\,(b-a)\bigr]^{m}}{m!} .
$$

**Step 2: some power is a contraction.** For fixed $\lambda$ the numbers $\alpha_{m}$ are the terms of the convergent series for $\mathrm{e}^{\lvert\lambda\rvert c(b-a)}$, so $\alpha_{m}\to0$; choose and fix an $m$ with $\alpha_{m}<1$. Then $B=T^{m}$ is a contraction on $X$. This is where the Volterra structure is used, and it is the only place: nothing is assumed about the size of $\lambda$.

**Step 3: a map one of whose powers is a contraction has a unique fixed point.** This is Kreyszig's Lemma 5.4-3, which we prove. Let $B=T^{m}$ be a contraction with constant $\alpha<1$ on the complete space $X$, and note that $T$ is continuous, being Lipschitz by (E) with $m=1$. By :ref[the contraction mapping theorem]{to=funcan.banach-fixed-point}, $B$ has a unique fixed point $y$, and $B^{n}u_{0}\to y$ for every $u_{0}\in X$.

*$y$ is a fixed point of $T$.* Apply the convergence statement to the starting point $Tu_{0}$: since $B$ and $T$ are both powers of $T$ they commute, so
$$
B^{n}(Tu_{0}) = T\bigl(B^{n}u_{0}\bigr) \longrightarrow Ty
$$
by continuity of $T$, while $B^{n}(Tu_{0})\to y$ because $y$ attracts every starting point. A sequence has one limit, so $Ty=y$.

*It is the only one.* If $Tz=z$ then $Bz=T^{m}z=z$, so $z$ is a fixed point of $B$ and therefore $z=y$.

*Every iterate of $T$ converges to $y$, not only the iterates of $B$.* Given $u_{0}\in X$ and $n\ge0$, write $n=qm+j$ with $0\le j<m$; then $T^{n}u_{0}=B^{q}\bigl(T^{j}u_{0}\bigr)$, because both are $T$ applied $n$ times. The contraction mapping theorem gives $B^{q}v\to y$ as $q\to\infty$ for each of the $m$ starting points $v=T^{j}u_{0}$, $j=0,\dots,m-1$, so each of the $m$ arithmetic subsequences of $(T^{n}u_{0})_{n}$ tends to $y$; since they cover all $n$, $T^{n}u_{0}\to y$. This is the form in which step 5 uses the conclusion.

**Step 4: parts 1 and 2.** Step 3 applied to our $T$ gives exactly one continuous $y$ with $Ty=y$, which is part 1, valid for every $\lambda$ by step 2. For part 2 take $f\equiv0$: then $y\equiv0$ is a fixed point, so by uniqueness it is the only one, and no $\lambda$ admits a nonzero solution of $y=\lambda\mathcal{K}y$. In operator terms, part 1 says that $(1-\lambda\mathcal{K})y=f$ has a solution for every $f\in C[a,b]$, so $1-\lambda\mathcal{K}$ is onto $C[a,b]$, and the uniqueness says it is injective; it is therefore a bijection of $C[a,b]$ for every $\lambda$. Bijectivity alone would need the open mapping theorem to make the inverse bounded, and we do not appeal to it: part 3 exhibits the inverse outright as the sum of the Neumann series $\sum_{m\ge0}\lambda^{m}\mathcal{K}^{m}$, whose terms are bounded in operator norm by $\lVert(\lambda\mathcal{K})^{m}\rVert\le\bigl[\lvert\lambda\rvert c(b-a)\bigr]^{m}/m!$ — this is estimate (E) read with $w=0$ and $f\equiv0$, where $T$ is just $\lambda\mathcal{K}$ — so the series converges in operator norm and $\lVert(1-\lambda\mathcal{K})^{-1}\rVert\le\mathrm{e}^{\lvert\lambda\rvert c(b-a)}$.

**Step 5: part 3.** The bound on $K_{m}$ is the same induction as (E), run on the kernels. The base case is $m=1$: $\lvert K_{1}\rvert=\lvert K\rvert\le c$, which is the claim with $(x-t)^{0}/0!=1$. For the inductive step take $m\ge2$, so that the previous index $m-1$ is at least $1$ and the factorial $(m-2)!$ in the inductive hypothesis is defined. Suppose, then, that $\lvert K_{m-1}(s,t)\rvert\le c^{m-1}(s-t)^{m-2}/(m-2)!$ for $t\le s$. Then for $t\le x$
$$
\lvert K_{m}(x,t)\rvert \le \int_{t}^{x}\lvert K(x,s)\rvert\,\lvert K_{m-1}(s,t)\rvert\,\mathrm{d}s
\le \frac{c^{m}}{(m-2)!}\int_{t}^{x}(s-t)^{m-2}\,\mathrm{d}s
= c^{m}\frac{(x-t)^{m-1}}{(m-1)!},
$$
where the limits of the inner integral are $t$ to $x$ because $K_{m-1}(s,t)=0$ for $s<t$ and $K(x,s)=0$ for $s>x$. Integrating that bound over $t$ gives, for every $x\in[a,b]$,
$$
\int_{a}^{x}\lvert K_{m}(x,t)\rvert\,\mathrm{d}t
\le \frac{c^{m}}{(m-1)!}\int_{a}^{x}(x-t)^{m-1}\,\mathrm{d}t
= c^{m}\,\frac{(x-a)^{m}}{m!}
\le c^{m}\,\frac{(b-a)^{m}}{m!} ,
$$
so the $m$-th term of the Neumann series is bounded on $[a,b]$ by
$$
\lvert\lambda\rvert^{m}\max\lvert f\rvert\int_{a}^{x}\lvert K_{m}(x,t)\rvert\,\mathrm{d}t
\;\le\; \max\lvert f\rvert\;\frac{\bigl[\lvert\lambda\rvert c\,(b-a)\bigr]^{m}}{m!} ,
$$
the factor $\lvert\lambda\rvert^{m}$ having been absorbed into the bracket. These are the terms of a convergent exponential series, so by the Weierstrass criterion the Neumann series converges uniformly for every $\lambda$. Its sum is the limit of the iterates $T^{n}f$ (the identification of iterates with partial sums is proved in :ref[]{to=green.neumann-series} and uses nothing about the limits of integration), and those converge to $y$ by the last paragraph of step 3. So the series represents the unique solution. $\square$
:::

:::statement[Abel's equation]{provenance=adapted src="arfken-2013:§21.2, Example 21.2.2, eqs. (21.27)–(21.29), pp. 1055–1056, and Exercise 21.2.6, p. 1061"}
Fix $0<\alpha<1$ and consider the generalized Abel equation
$$
\int_{0}^{x}\frac{y(t)}{(x-t)^{\alpha}}\,\mathrm{d}t = f(x), \qquad x>0 .
$$
Arfken, Weber and Harris obtain the solution
$$
y(x) = \frac{\sin\pi\alpha}{\pi}\,\frac{\mathrm{d}}{\mathrm{d}x}\int_{0}^{x}\frac{f(t)}{(x-t)^{1-\alpha}}\,\mathrm{d}t .
$$
The two steps behind it, each of independent use, are:

1. **Integrated form.** If $y$ is a solution, then for every $z>0$
   $$
   \int_{0}^{z} y(t)\,\mathrm{d}t \;=\; \frac{\sin\pi\alpha}{\pi}\int_{0}^{z}\frac{f(x)}{(z-x)^{1-\alpha}}\,\mathrm{d}x .
   $$
   This holds whenever the double integral converges absolutely, and the proof below gets that from $\int_{0}^{z}\lvert y\rvert<\infty$ alone: integrability of $y$ on $[0,z]$ is all that is used, so continuity of $y$ — which any classical solution has anyway — is far more than the step needs.
2. **Differentiation.** Differentiating step 1 in $z$ gives the formula, at every point where the right-hand side of step 1 is differentiable.

The beta integral that drives it (:ref[]{to=spec.beta-function}) is
$$
\int_{t}^{z}\frac{\mathrm{d}x}{(z-x)^{1-\alpha}(x-t)^{\alpha}} \;=\; B(1-\alpha,\alpha) \;=\; \Gamma(\alpha)\Gamma(1-\alpha) \;=\; \frac{\pi}{\sin\pi\alpha},
$$
the same value for every $0\le t<z$; the middle equality is $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ at $p+q=1$, and the last is Euler's reflection formula (:ref[]{to=spec.gamma-function}), which is where the constant $\sin\pi\alpha$ in the inversion formula comes from.
:::

:::idea{provenance=original}
The kernel $(x-t)^{-\alpha}$ depends only on $x-t$, so the equation is a convolution and the natural moves are the ones that diagonalise convolution. Arfken, Weber and Harris take the Laplace transform, where the equation becomes multiplication by $\Gamma(1-\alpha)s^{\alpha-1}$ and inverting means multiplying by $s^{1-\alpha}$ — a transform that cannot be inverted directly, so they first divide by $s$ (which integrates) and then differentiate at the end. The route taken below does the same thing without transforms: convolving with the *complementary* power $(z-x)^{\alpha-1}$ turns the composite kernel into a beta integral whose value is a constant, so the two fractional powers annihilate each other and leave the plain integral of $y$. The final differentiation is the price of the division by $s$, in either route.
:::

:::proof{provenance=adapted src="arfken-2013:§21.2, Exercise 21.2.6 and its note, p. 1061, and eq. (21.29), p. 1056"}
**The beta integral.** Fix $0\le t<z$ and substitute $x = t+(z-t)s$, $\mathrm{d}x=(z-t)\,\mathrm{d}s$, so that $z-x=(z-t)(1-s)$ and $x-t=(z-t)s$:
$$
\int_{t}^{z}\frac{\mathrm{d}x}{(z-x)^{1-\alpha}(x-t)^{\alpha}}
= (z-t)^{\alpha-1+(-\alpha)+1}\int_{0}^{1}(1-s)^{\alpha-1}s^{-\alpha}\,\mathrm{d}s
= B(1-\alpha,\alpha).
$$
The powers of $(z-t)$ cancel exactly, which is the point of choosing the exponent $\alpha-1$ for the multiplier. The remaining integral is the beta function $B(p,q)=\int_{0}^{1}s^{p-1}(1-s)^{q-1}\mathrm{d}s$ (:ref[]{to=spec.beta-function}) at $p=1-\alpha$, $q=\alpha$, finite because both exponents $-\alpha$ and $\alpha-1$ exceed $-1$ for $0<\alpha<1$; and $B(1-\alpha,\alpha)=\Gamma(1-\alpha)\Gamma(\alpha)/\Gamma(1)=\Gamma(\alpha)\Gamma(1-\alpha)$, which is $\pi/\sin\pi\alpha$ by Euler's reflection formula $\Gamma(\alpha)\Gamma(1-\alpha)=\pi/\sin\pi\alpha$ (:ref[]{to=spec.gamma-function}). (Numerically, at $\alpha=\tfrac14$ both sides are $4.44288$; at $\alpha=\tfrac12$ both are $\pi$.)

**Step 1.** Multiply the equation, written at the point $x$, by $(z-x)^{\alpha-1}$ and integrate over $0\le x\le z$:
$$
\int_{0}^{z}\frac{f(x)}{(z-x)^{1-\alpha}}\,\mathrm{d}x
= \int_{0}^{z}\frac{1}{(z-x)^{1-\alpha}}\int_{0}^{x}\frac{y(t)}{(x-t)^{\alpha}}\,\mathrm{d}t\,\mathrm{d}x .
$$
The double integral is over the triangle $0\le t\le x\le z$, on which the integrand is $y(t)$ times a positive function; it converges absolutely, because integrating $\lvert y(t)\rvert$ last and using the beta integral gives the finite value $\frac{\pi}{\sin\pi\alpha}\int_{0}^{z}\lvert y\rvert$. So the order may be exchanged (Fubini). Doing the $x$-integral first, with $t$ fixed and $x$ ranging over $[t,z]$:
$$
\int_{0}^{z}\frac{f(x)}{(z-x)^{1-\alpha}}\,\mathrm{d}x
= \int_{0}^{z} y(t)\Bigl[\int_{t}^{z}\frac{\mathrm{d}x}{(z-x)^{1-\alpha}(x-t)^{\alpha}}\Bigr]\mathrm{d}t
= \frac{\pi}{\sin\pi\alpha}\int_{0}^{z}y(t)\,\mathrm{d}t ,
$$
the bracket being the constant just computed. Rearranging gives step 1 of the statement.

**Step 2.** The left-hand side of step 1 is $\int_{0}^{z}y$. Wherever the right-hand side is differentiable in $z$, differentiating both sides gives $y(z)$ on the left, which is the formula. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="kreyszig-1978:§5.4, pp. 321–323; arfken-2013:§21.2, p. 1056 and p. 1061, and §21.3, p. 1067 (the Volterra Neumann series converges at every parameter value for a square-integrable kernel); stakgold-holst-2011:§4.4, Example 4, p. 252, and §6.1, Example 1, p. 352; hassani-2013:§18.1, p. 545"}
- **Continuity of $K$ on the closed triangle** is used twice in the Volterra proof: to keep $T$ inside $C[a,b]$, and to produce the bound $c$. The bound is all the estimate (E) needs, so continuity can be weakened to boundedness plus enough measurability for the integrals to exist — but then the solution need not be continuous and one works in $L^{\infty}$ or $L^{2}$ instead. Boundedness itself is a convenience of *this* proof rather than a limit on the conclusion: Arfken, Weber and Harris record (p. 1067) that square-integrability of the kernel already suffices, in the Volterra case, for the Neumann series to converge at every value of $\lambda$. Abel's kernel shows that even square-integrability is not where the conclusion stops — but it is not an instance of Arfken's criterion, because it fails that criterion too: at $\alpha=\tfrac12$ the kernel $(x-t)^{-1/2}$ is unbounded on the triangle *and* not square-integrable there, since $\iint_{R}(x-t)^{-1}\mathrm{d}t\,\mathrm{d}x$ diverges logarithmically at the diagonal. It is a case lying past both hypotheses, for which the conclusion happens to be true all the same, and the way to see that is to compute rather than to invoke a criterion. The beta integral computed below gives, at $\alpha=\tfrac12$, the constant second iterate $K_{2}(x,t)=B(\tfrac12,\tfrac12)=\pi$, and the same computation gives $K_{m}(x,t)=\pi^{m/2}(x-t)^{m/2-1}/\Gamma(m/2)$, whose integral $\pi^{m/2}x^{m/2}/\Gamma(\tfrac{m}{2}+1)$ is summable for every $\lambda$; so the *second*-kind equation with Abel's kernel is uniquely solvable for every $\lambda$ after all. For $f\equiv1$ the sum is $\sum_{m\ge0}(\lambda\sqrt{\pi x})^{m}/\Gamma(\tfrac{m}{2}+1)$, which we checked numerically against the equation at $\lambda=3$. What takes Abel's equation outside the theorem is therefore not the singularity of its kernel but that it is of the **first** kind, with no term outside the integral, and so has a completely different solvability theory — which is why it is stated and proved separately below.
- **The triangular support** is what produces the factorials. For the Fredholm equation the same induction gives only $(b-a)^{m}$, and the convergence condition of :ref[]{to=green.neumann-series} is then genuinely restrictive. Kreyszig and Riley–Hobson–Bence both note that a Volterra equation *is* a Fredholm equation with a kernel vanishing above the diagonal; the content of this unit is that this particular family of Fredholm kernels has empty nonzero spectrum.
- **Arbitrarily long intervals.** Stakgold and Holst stress that their conclusion survives however large $b$ is taken, provided their Lipschitz bound continues to hold there. This is because the hypothesis never involves the size of $\lvert\lambda\rvert c(b-a)$, only that it is finite; the price is that the chosen $m$ in step 2 grows with it, so the *rate* of convergence degrades even though convergence does not fail.
- **Abel: hypotheses on $f$.** Arfken, Weber and Harris state the inversion formula without spelling out conditions on $f$, and the proof above shows why some are needed: step 1 is an identity about any solution, but step 2 requires the function $z\mapsto\int_{0}^{z}f(x)(z-x)^{\alpha-1}\mathrm{d}x$ to be differentiable, and the formula then gives $y$ only where that holds. The argument also shows the uniqueness and the obstruction at once: step 1 determines $\int_{0}^{z}y$ for every $z$, hence $y$ as a distribution, so a solution is unique if it exists; but it exists only if that primitive is differentiable, which is a smoothness condition on $f$. Stakgold and Holst, discussing Abel's equation as their opening example, make the same point — read purely mathematically, $f$ may have to satisfy conditions for a solution to exist — and add that the physical interpretation imposes a further restriction, namely that the solution generate a feasible arclength, which forces $f(y)\ge(2y/g)^{1/2}$: the prescribed time of descent cannot beat free fall.
- **$0<\alpha<1$** is used in the convergence of the beta integral (both exponents must exceed $-1$) and in $\sin\pi\alpha\neq0$. At $\alpha=0$ the equation is $\int_{0}^{x}y=f$, inverted by one differentiation; at $\alpha\ge1$ the kernel is not locally integrable and the left-hand side is generally infinite.
:::

:::example[A Volterra equation summed by iteration, and an Abel inversion]{provenance=original}
**Part 1: iteration for every $\lambda$.** Solve
$$
y(x) = x + 2\int_{0}^{x}\mathrm{e}^{\,x-t}\,y(t)\,\mathrm{d}t
$$
on $[0,b]$ for any $b>0$. Here $f(x)=x$, $K(x,t)=\mathrm{e}^{x-t}$ is continuous on the triangle, and $\lambda=2$ — well outside anything the Fredholm condition would allow on a long interval, yet part 1 guarantees a unique continuous solution.

*By differentiation.* Write the equation as $y(x)=x+2\mathrm{e}^{x}\int_{0}^{x}\mathrm{e}^{-t}y(t)\,\mathrm{d}t$ and differentiate:
$$
y'(x) = 1+2\mathrm{e}^{x}\!\int_{0}^{x}\!\mathrm{e}^{-t}y\,\mathrm{d}t + 2y(x) = 1+\bigl(y(x)-x\bigr)+2y(x) = 3y(x)-x+1 ,
$$
where the middle step used the integral equation itself to replace the integral term. With $y(0)=0$ (set $x=0$ in the equation), the linear ODE $y'-3y=1-x$ has particular solution $\tfrac{x}{3}-\tfrac29$ and hence
$$
y(x) = \tfrac29\,\mathrm{e}^{3x}+\tfrac{x}{3}-\tfrac29 .
$$
Checked at $x=1$: $y(1)=\tfrac29\mathrm{e}^{3}+\tfrac13-\tfrac29 = 4.5745638$, and substituting this $y$ back into the right-hand side of the integral equation reproduces it to $17$ significant digits (numerical quadrature at $x=0.3,0.7,1.0,1.5$).

*By iteration.* Start from $y_{0}=f=x$. Using $\int_{0}^{x}t\mathrm{e}^{-t}\mathrm{d}t = 1-(x+1)\mathrm{e}^{-x}$,
$$
y_{1}(x) = x+2\mathrm{e}^{x}\bigl[1-(x+1)\mathrm{e}^{-x}\bigr] = 2\mathrm{e}^{x}-x-2 ,
$$
and continuing,
$$
y_{2}(x)=4x\mathrm{e}^{x}-6\mathrm{e}^{x}+3x+6,
\qquad
y_{3}(x)=4x^{2}\mathrm{e}^{x}-12x\mathrm{e}^{x}+18\mathrm{e}^{x}-5x-18 .
$$
At $x=1$ these give $1.000000$, $2.436564$, $3.563436$, $4.182818$, and the next iterate $4.446551$, climbing to $4.574564$: convergence, as promised, with no smallness condition on $\lambda$. The factorial in part 3 is visible in the rate — the gaps to the limit are $3.575$, $2.138$, $1.011$, $0.392$, $0.128$, shrinking by factors $0.60$, $0.47$, $0.39$, $0.33$ — a ratio that keeps falling, as a factorial bound requires, rather than settling at a fixed geometric value. The crude estimate of step 2 does not see this: with $b=1$ the constant is $\kappa=\lvert\lambda\rvert c=2\mathrm{e}=5.437$, and $\alpha_{m}=\kappa^{m}/m!$ rises to $39.6$ at $m=5$ and first drops below $1$ only at $m=13$ ($\alpha_{13}=0.582$). Convergence from the start is therefore much better than the proof promises; the proof only has to establish that it happens eventually.

**Part 2: an Abel inversion.** Solve
$$
\int_{0}^{x}\frac{y(t)}{\sqrt{x-t}}\,\mathrm{d}t = x ,
$$
that is $\alpha=\tfrac12$, $f(x)=x$. By the formula, with $\sin(\pi/2)=1$,
$$
y(x) = \frac{1}{\pi}\frac{\mathrm{d}}{\mathrm{d}x}\int_{0}^{x}\frac{t}{\sqrt{x-t}}\,\mathrm{d}t .
$$
Substituting $t=xs$ gives $\int_{0}^{x}t(x-t)^{-1/2}\mathrm{d}t = x^{3/2}\int_{0}^{1}s(1-s)^{-1/2}\mathrm{d}s = x^{3/2}B(2,\tfrac12)$, and
$$
B(2,\tfrac12) = \frac{\Gamma(2)\Gamma(\tfrac12)}{\Gamma(\tfrac52)} = \frac{\sqrt\pi}{\tfrac34\sqrt\pi} = \frac43 ,
$$
so $y(x)=\frac{1}{\pi}\cdot\frac43\cdot\frac32\sqrt{x} = \frac{2}{\pi}\sqrt{x}$.

*Check, independently of the formula.* Substitute $y(t)=\frac{2}{\pi}\sqrt t$ and put $t=xs$:
$$
\int_{0}^{x}\frac{2\sqrt t/\pi}{\sqrt{x-t}}\,\mathrm{d}t
= \frac{2x}{\pi}\int_{0}^{1}\frac{\sqrt s}{\sqrt{1-s}}\,\mathrm{d}s
= \frac{2x}{\pi}B\bigl(\tfrac32,\tfrac12\bigr)
= \frac{2x}{\pi}\cdot\frac{\Gamma(\tfrac32)\Gamma(\tfrac12)}{\Gamma(2)}
= \frac{2x}{\pi}\cdot\frac{\tfrac12\sqrt\pi\cdot\sqrt\pi}{1} = x ,
$$
as required. Both parts of the example were verified symbolically.
:::

:::application{provenance=original}
**The tautochrone, which is where Abel's equation came from.** A bead slides without friction down a wire in a vertical plane, starting from rest at height $y$ and ending at the origin. Conservation of energy gives speed $\sqrt{2g(y-\eta)}$ at height $\eta$, so the time of descent is
$$
T(y) = \int_{0}^{y}\frac{\mathrm{d}s}{\sqrt{2g(y-\eta)}}
= \int_{0}^{y}\frac{u(\eta)}{\sqrt{y-\eta}}\,\mathrm{d}\eta ,
\qquad u(\eta) = \frac{1}{\sqrt{2g}}\,\frac{\mathrm{d}s}{\mathrm{d}\eta} ,
$$
with $s(\eta)$ the arclength from the bottom: Abel's equation with $\alpha=\tfrac12$, as Stakgold and Holst present it in their opening example. Abel's question was the inverse one — prescribe the descent time and find the wire — and the inversion formula answers it. Ask for a **tautochrone**, a curve whose descent time is the same from every height, so $T(y)\equiv T$. Then
$$
u(y) = \frac{1}{\pi}\frac{\mathrm{d}}{\mathrm{d}y}\int_{0}^{y}\frac{T\,\mathrm{d}\eta}{\sqrt{y-\eta}}
= \frac{1}{\pi}\frac{\mathrm{d}}{\mathrm{d}y}\bigl(2T\sqrt{y}\bigr) = \frac{T}{\pi\sqrt{y}} ,
$$
and therefore
$$
\Bigl(\frac{\mathrm{d}s}{\mathrm{d}y}\Bigr)^{2} = 1+\Bigl(\frac{\mathrm{d}x}{\mathrm{d}y}\Bigr)^{2} = \frac{2gT^{2}}{\pi^{2}y} = \frac{a}{y},
\qquad a=\frac{2gT^{2}}{\pi^{2}} ,
$$
so $\mathrm{d}x/\mathrm{d}y=\sqrt{a/y-1}$. That is the differential equation of a cycloid generated by a circle of diameter $a$, and reading the relation backwards, $T=\pi\sqrt{a/(2g)}$ is the descent time from *every* starting height. A bead released on the arc swings to the lowest point in the time $T$ and back out to the other side in the same time, so $T$ is a quarter of the full period: the cycloidal pendulum has period
$$
4T = 4\pi\sqrt{\frac{a}{2g}} = 2\pi\sqrt{\frac{2a}{g}} ,
$$
which is the period $2\pi\sqrt{L/g}$ of a simple pendulum of length $L=2a$, four times the radius $a/2$ of the generating circle. With $a=1\ \mathrm{m}$ and $g=9.80665\ \mathrm{m\,s^{-2}}$ that is $T=0.70937\ \mathrm{s}$ and $4T=2.83749\ \mathrm{s}$, independently of the amplitude — Huygens's isochronous pendulum, recovered from an integral equation. The same inversion, with $T(y)$ measured rather than prescribed, is how a profile is reconstructed from timing data.

**Abel inversion in diagnostics and astronomy.** The $\alpha=\tfrac12$ kernel is not confined to mechanics. Any measurement that integrates a spherically or cylindrically symmetric quantity along chords produces it: the line-of-sight emission of an axisymmetric plasma column at impact parameter $r$ is $\int_{r}^{R}\varepsilon(\rho)\,2\rho\,\mathrm{d}\rho/\sqrt{\rho^{2}-r^{2}}$, which is Abel's equation in the variable $\rho^{2}$. Inverting it to get the local emissivity $\varepsilon(\rho)$ from the measured profile is called Abel inversion, and it is standard in plasma spectroscopy, flame diagnostics, shock-tube interferometry and the deprojection of the surface brightness of a spherical star cluster or galaxy. The remark above is the practical warning attached to all of these: the inversion involves a derivative of the data, so measurement noise is differentiated and amplified, and real codes smooth or fit the data before applying the formula.

**Why Volterra structure makes evolution problems safe.** Part 1 is the reason causal problems are better behaved than boundary-value problems. An initial-value problem for a *linear* ODE converts into a linear second-kind Volterra equation (:ref[]{to=green.integral-equations}), and part 1 applies to it as it stands: exactly one solution, on the whole interval, with no smallness condition. For a general initial-value problem $y'=F(x,y)$, $y(a)=y_{0}$, the equivalent Volterra equation $y(x)=y_{0}+\int_{a}^{x}F(t,y(t))\,\mathrm{d}t$ is **nonlinear**, so part 1 — a theorem about linear equations — does not reach it; what does is the Lipschitz version of the same contraction argument, which is the one Stakgold and Holst carry out and which is the Picard–Lindelöf theorem (:ref[]{to=ode.existence-uniqueness}). The mechanism is identical in the two cases, and it is the triangular range of integration in both. The same mechanism is at work in the Dyson series of time-dependent perturbation theory and in the retarded response kernels of linear-response theory: time ordering restricts the integral to the past, the factorials appear, and the series converges for every coupling. Fredholm structure, by contrast, means the data at one end are coupled to the data at the other, characteristic values exist, and solvability becomes conditional — the Fredholm alternative (:ref[]{to=green.separable-kernels}, :ref[]{to=green.fredholm-alternative}). Hassani organises his chapter around exactly this contrast, and says he takes up the Volterra case first for being the easier one; part 2 of the statement above is the precise sense in which it is easier.

**Volterra equations of the second kind in viscoelasticity and renewal theory.** The constitutive law of a linear viscoelastic material, $\sigma(x) = \int_{0}^{x}G(x-t)\dot\varepsilon(t)\,\mathrm{d}t$ with a relaxation modulus $G$, is a Volterra equation whenever one of the histories is to be recovered from the other; likewise the renewal equation $m(x)=F(x)+\int_{0}^{x}m(x-t)\,\mathrm{d}F(t)$ of reliability theory, and the age-structured population balances of epidemiology. In every case part 1 says the model is well posed for any loading and any kernel strength, and part 3 says that marching forward in small steps — which is what a numerical Volterra solver does — converges, because each step only ever uses values already computed.
:::
