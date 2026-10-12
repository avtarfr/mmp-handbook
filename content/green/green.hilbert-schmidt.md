---
id: green.hilbert-schmidt
title: Hilbert-Schmidt theory
kind: theorem
level: core
summary: "For a Hermitian Hilbert-Schmidt kernel the characteristic values are real, the eigenfunctions are orthogonal and span the range of the operator, the kernel itself expands bilinearly in them, and the inhomogeneous second-kind equation is solved term by term with a resolvent whose poles are exactly the characteristic values."
prereqs: [green.integral-equations, funcan.compact-self-adjoint, funcan.orthonormal-bases]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§21.4 (Hilbert-Schmidt theory), pp. 1069–1075: symmetrisation of a kernel, eqs. (21.62)–(21.63); self-adjointness and the orthogonality and reality computation, eqs. (21.64)–(21.76); completeness and the bilinear expansion of the kernel, eqs. (21.77)–(21.80); the inhomogeneous equation, eqs. (21.81)–(21.89), and the Green's-function reading, eqs. (21.92)–(21.95); Example 21.4.1, p. 1076; Exercise 21.4.1 (the Hermitian extension) and Exercise 21.4.4 with its Note, pp. 1077–1078"
    pages: "1069-1078"
    role: the symmetrisation trick for a weighted kernel; the direct proof that the characteristic values are real and the eigenfunctions orthogonal; the bilinear expansion of the kernel; the eigenfunction solution of the inhomogeneous equation and its failure when the parameter is a characteristic value; the warning that the bilinear expansion can fail for a singular equation
  - work: rhb-2006
    loc: "§23.7 (Schmidt-Hilbert theory), eqs. (23.49)–(23.56) and the worked example, pp. 817–819"
    pages: "817-819"
    role: the statement that the eigenvalues of a Hermitian kernel are real and the eigenfunctions orthogonal and complete; the derivation of the coefficients of the solution of the inhomogeneous equation; the resolvent kernel as a sum over eigenfunctions; the solvability condition when the parameter equals an eigenvalue
  - work: stakgold-holst-2011
    loc: "§6.2, Example 2 (the kernel 1 - max(x, xi) and its eigenfunctions), pp. 363–364, and Example 3 (the non-Hilbert-Schmidt kernel on the line), pp. 365–366; §6.3 (The spectrum of a self-adjoint compact operator), Thms 6.3.1–6.3.8, pp. 371–377, with the expansion theorem 6.3.4 and eq. (6.3.11), p. 373, Thm 6.3.5, p. 374, the bilinear expansion of the iterated kernels (6.3.17) and Mercer's theorem (6.3.18), p. 377, and the trace inequality (6.3.19), p. 377; §6.4 (The inhomogeneous equation), eqs. (6.4.5)–(6.4.13b), pp. 381–383"
    pages: "363-366, 371-377, 381-383"
    role: the extremal characterisation of the eigenvalues, the expansion theorem for the range of the operator, when the eigenfunctions form a basis of the whole space, the bilinear expansions and Mercer's theorem, the trace inequality for the largest eigenvalue, and the complete case analysis of the inhomogeneous equation including the degenerate case and the minimum-norm solution; the reflected form of the example kernel used here, and the bounded non-compact kernel with no eigenvalues
  - work: hassani-2013
    loc: "§18.2, eqs. (18.17)–(18.22) and Example 18.2.4, pp. 554–556"
    pages: "554-556"
    role: the eigenfunction solution of the inhomogeneous Fredholm equation in bra-ket notation, including the form of the solution when the parameter is a characteristic value and the coefficients in the corresponding eigenspace are left free
  - work: reed-simon-1980
    loc: "§VI.6, Thm VI.23, p. 210"
    pages: "210"
    role: the identification of Hilbert-Schmidt operators with integral operators whose kernel is square-integrable on the product, used here to know that the operator is compact
---

:::definition[Hermitian kernels, characteristic values, eigenfunctions]{provenance=adapted src="arfken-2013:§21.4, eqs. (21.61), (21.64)–(21.67), pp. 1069–1070; rhb-2006:§23.7, eq. (23.49), p. 817; stakgold-holst-2011:§6.3, p. 371"}
Let $[a,b]$ be a finite interval and let $K$ be a Hilbert–Schmidt kernel on $[a,b]\times[a,b]$ (:ref[]{to=green.integral-equations}) that is **Hermitian**,
$$
K(x,t) = \overline{K(t,x)} ,
$$
the case $K(x,t)=K(t,x)$ with $K$ real being the **symmetric** one that Arfken, Weber and Harris and Riley, Hobson and Bence treat. With the inner product $(u,w)=\int_{a}^{b}u\overline{w}$, the operator $\mathcal{K}$ is then self-adjoint and compact.

A scalar $\lambda\neq0$ is a **characteristic value** of the equation, with **eigenfunction** $y\neq0$, if
$$
y(x) = \lambda\int_{a}^{b}K(x,t)\,y(t)\,\mathrm{d}t ,
\qquad\text{equivalently}\qquad
\mathcal{K}y = \lambda^{-1}y .
$$
So the characteristic values are the reciprocals of the nonzero eigenvalues of $\mathcal{K}$. We write $\lambda_{1},\lambda_{2},\dots$ for the characteristic values, repeated according to multiplicity and ordered so that $\lvert\lambda_{1}\rvert\le\lvert\lambda_{2}\rvert\le\cdots$, and $e_{1},e_{2},\dots$ for a corresponding orthonormal family of eigenfunctions, $(e_{m},e_{n})=\delta_{mn}$.

**Symmetrising a weighted kernel.** Arfken, Weber and Harris note that an equation
$$
\varphi(x) = f(x)+\lambda\int_{a}^{b}K(x,t)\,\rho(t)\,\varphi(t)\,\mathrm{d}t
$$
with $K$ symmetric has the *non*-symmetric total kernel $K(x,t)\rho(t)$; multiplying by $\sqrt{\rho(x)}$ and substituting $\psi=\sqrt{\rho}\,\varphi$ gives
$$
\psi(x) = \sqrt{\rho(x)}f(x)+\lambda\int_{a}^{b}\Bigl[K(x,t)\sqrt{\rho(x)\rho(t)}\Bigr]\psi(t)\,\mathrm{d}t ,
$$
whose total kernel is symmetric. Their equations (21.62)–(21.63) state no condition on the weight $\rho$; the hypothesis $\rho>0$ on $[a,b]$ is added here, since it is what makes $\sqrt{\rho}$ real and the substitution $\psi=\sqrt{\rho}\,\varphi$ reversible, and it also keeps the new kernel Hermitian rather than merely formally symmetric. Many kernels that arise with a weight can be brought into the scope of this unit this way.
:::

:::statement[Hilbert–Schmidt theory]{provenance=adapted src="arfken-2013:§21.4, eqs. (21.74)–(21.80), pp. 1071–1072; rhb-2006:§23.7, eqs. (23.49), (23.54), (23.55), pp. 817–818; stakgold-holst-2011:§6.3, Thms 6.3.4, 6.3.5, 6.3.7 and 6.3.8, pp. 373–377, and §6.4, eqs. (6.4.6)–(6.4.13a), pp. 381–383; hassani-2013:§18.2, eqs. (18.20)–(18.22), pp. 554–555"}
Let $K$ be a Hermitian Hilbert–Schmidt kernel on the finite square $[a,b]\times[a,b]$, not identically zero, and let $\mathcal{K}$, $\lambda_{n}$, $e_{n}$ be as in the definition.

1. **Reality and orthogonality.** Every characteristic value is real, and eigenfunctions belonging to different characteristic values are orthogonal. Each characteristic value has finite multiplicity, and within one eigenspace an orthonormal basis may be chosen by Gram–Schmidt (:ref[]{to=linalg.gram-schmidt}), so the family $\{e_{n}\}$ above exists. There is at least one characteristic value, $\lvert\lambda_{1}\rvert^{-1}=\lVert\mathcal{K}\rVert$, and if there are infinitely many then $\lvert\lambda_{n}\rvert\to\infty$.
2. **Expansion theorem.** For every $u\in L^{2}(a,b)$,
   $$
   \mathcal{K}u \;=\; \sum_{n}\lambda_{n}^{-1}(u,e_{n})\,e_{n}
   $$
   in $L^{2}$. Hence $\{e_{n}\}$ is an orthonormal basis of $\overline{\operatorname{ran}\mathcal{K}}$. It is an orthonormal basis of all of $L^{2}(a,b)$ exactly when $\mathcal{K}$ has trivial null space; in general $u$ splits uniquely as $u = h+\sum_{n}(u,e_{n})e_{n}$ with $\mathcal{K}h=0$.
3. **Bilinear expansions.** For $m\ge2$ the iterated kernel $K_{m}$ has the expansion
   $$
   K_{m}(x,t) = \sum_{n}\lambda_{n}^{-m}\,e_{n}(x)\,\overline{e_{n}(t)} ,
   $$
   convergent in mean square in either variable for each fixed value of the other. (Which values: when $K$ is merely square-integrable, the section $K_{m}(\cdot,t)$ is itself defined only for almost every $t$, and the expansion is asserted at exactly those $t$. The qualification is about the set of $t$, not about the mode of convergence, which is mean square throughout.) If $K_{2}$ is continuous on the closed square, the convergence is uniform there. For $m=1$ the same expansion holds under the extra hypotheses of **Mercer's theorem**: if $K$ is continuous and all but finitely many characteristic values have the same sign, then
   $$
   K(x,t) = \sum_{n}\lambda_{n}^{-1}\,e_{n}(x)\,\overline{e_{n}(t)}
   \qquad\text{uniformly on } [a,b]\times[a,b].
   $$
4. **The inhomogeneous equation.** Consider
   $$
   y(x) = f(x)+\lambda\int_{a}^{b}K(x,t)\,y(t)\,\mathrm{d}t ,
   \qquad f\in L^{2}(a,b),\ \lambda\neq0 .
   \tag{$\ast$}
   $$
   - If $\lambda$ is not a characteristic value, $(\ast)$ has exactly one solution,
     $$
     y = f + \lambda\sum_{n}\frac{(f,e_{n})}{\lambda_{n}-\lambda}\,e_{n} ,
     $$
     the series converging in $L^{2}$. Equivalently $y = f+\lambda\int_{a}^{b}R(x,t;\lambda)f(t)\,\mathrm{d}t$ with the **resolvent kernel**
     $$
     R(x,t;\lambda) = \sum_{n}\frac{e_{n}(x)\,\overline{e_{n}(t)}}{\lambda_{n}-\lambda} .
     $$
   - If $\lambda=\lambda_{p}$ for some $p$, let $e_{m_{1}},\dots,e_{m_{k}}$ be the orthonormal eigenfunctions belonging to $\lambda_{p}$. Then $(\ast)$ has a solution precisely when the $k$ conditions $(f,e_{m_{i}})=0$ all hold, and in that case the solutions are
     $$
     y = f + \lambda_{p}\sum_{n\,:\,\lambda_{n}\neq\lambda_{p}}\frac{(f,e_{n})}{\lambda_{n}-\lambda_{p}}\,e_{n}
     \;+\;\sum_{i=1}^{k}c_{i}\,e_{m_{i}} ,
     \qquad c_{1},\dots,c_{k}\in\mathbb{C}\ \text{arbitrary} ,
     $$
     a $k$-parameter family, of which the one with all $c_{i}=0$ has the smallest norm.
:::

:::idea{provenance=original}
Everything follows from one move: a Hermitian kernel makes $\mathcal{K}$ self-adjoint, and a Hilbert–Schmidt kernel makes it compact, so the spectral theorem for compact self-adjoint operators applies and $\mathcal{K}$ is diagonal in the orthonormal family $\{e_{n}\}$. In that basis the integral equation $(1-\lambda\mathcal{K})y=f$ splits into one scalar equation for each coefficient, $(1-\lambda/\lambda_{n})(y,e_{n})=(f,e_{n})$, which one solves by dividing — unless the factor on the left vanishes, that is unless $\lambda$ is a characteristic value, and then the equation reads $0=(f,e_{n})$, which is either a condition on the data or a coefficient left free. The bilinear expansion of the kernel is the same diagonalisation read as a statement about $K$ rather than about $\mathcal{K}$: the coefficients of $K(\cdot,t)$ in the basis are $\lambda_{n}^{-1}\overline{e_{n}(t)}$. The only delicate points are convergence: of the coefficient series (easy, because $\lambda_{n}^{-1}\to0$ makes the coefficients *smaller* than those of $f$) and of the bilinear expansion for $m=1$ (genuinely delicate, which is why Mercer's theorem needs hypotheses).
:::

:::proof{provenance=adapted src="arfken-2013:§21.4, eqs. (21.69)–(21.76), pp. 1071–1072, and eqs. (21.85)–(21.89), pp. 1073–1075; stakgold-holst-2011:§6.3, Thm 6.3.4 and its proof, p. 373, Thm 6.3.5, p. 374, and §6.4, eqs. (6.4.6)–(6.4.12), pp. 381–382; rhb-2006:§23.7, eqs. (23.51)–(23.54), pp. 817–818"}
**Part 1.** That $\mathcal{K}$ is bounded and compact is the statement quoted in :ref[]{to=green.integral-equations} (Reed and Simon's characterisation of Hilbert–Schmidt operators, with Stakgold and Holst's proof that they are compact). Self-adjointness is a direct computation: for $u,w\in L^{2}$,
$$
(\mathcal{K}u,w) = \int_{a}^{b}\!\!\int_{a}^{b}K(x,t)u(t)\overline{w(x)}\,\mathrm{d}t\,\mathrm{d}x
= \int_{a}^{b}u(t)\,\overline{\int_{a}^{b}\overline{K(x,t)}\,w(x)\,\mathrm{d}x}\,\mathrm{d}t
= (u,\mathcal{K}w),
$$
where the order of integration may be exchanged because the double integral converges absolutely: the function $(x,t)\mapsto u(t)\overline{w(x)}$ lies in $L^{2}$ of the square, with $\iint\lvert u(t)\rvert^{2}\lvert w(x)\rvert^{2}=\lVert u\rVert^{2}\lVert w\rVert^{2}$, so Cauchy–Schwarz on the square bounds $\iint\lvert K(x,t)u(t)\overline{w(x)}\rvert$ by $\bigl(\iint\lvert K\rvert^{2}\bigr)^{1/2}\lVert u\rVert\lVert w\rVert<\infty$. The last step uses the Hermitian symmetry $\overline{K(x,t)}=K(t,x)$.

Reality and orthogonality can now be quoted from the spectral theorem, but it is worth seeing them directly, following Arfken, Weber and Harris. Let $\mathcal{K}e=\mu e$ and $\mathcal{K}e'=\mu'e'$ with $e,e'\neq0$. Then
$$
\mu(e,e') = (\mathcal{K}e,e') = (e,\mathcal{K}e') = \overline{\mu'}\,(e,e') .
$$
Taking $e'=e$ gives $(\mu-\overline{\mu})\|e\|^{2}=0$, and $\|e\|\neq0$, so $\mu$ is real; hence the characteristic values $\lambda_{n}=\mu_{n}^{-1}$ are real too. Taking $\mu\neq\mu'$, both now real, gives $(\mu-\mu')(e,e')=0$ and therefore $(e,e')=0$.

The remaining assertions of part 1 are the content of the spectral theorem for compact self-adjoint operators (:ref[]{to=funcan.compact-self-adjoint}): each nonzero eigenvalue has finite multiplicity, the nonzero eigenvalues can only accumulate at $0$, and — this is Stakgold and Holst's Theorem 6.3.1, their extremal principle — the supremum of $\lvert(\mathcal{K}v,v)\rvert$ over unit vectors is attained at a normalised eigenfunction whose eigenvalue has modulus $\lVert\mathcal{K}\rVert$ and is the largest in modulus. Since $\mathcal{K}\neq0$ there is at least one such eigenvalue, giving $\lvert\lambda_{1}\rvert^{-1}=\lVert\mathcal{K}\rVert$; and $\mu_{n}\to0$ translates into $\lvert\lambda_{n}\rvert\to\infty$.

**Part 2.** This is Stakgold and Holst's expansion theorem 6.3.4. Their argument, in our notation: for $u\in L^{2}$ put $v_{N}=u-\sum_{n\le N}(u,e_{n})e_{n}$, which is orthogonal to $e_{1},\dots,e_{N}$ by construction. The extremal principle applied on the orthogonal complement of $\operatorname{span}\{e_{1},\dots,e_{N}\}$ gives $\lVert\mathcal{K}v\rVert\le\lvert\mu_{N+1}\rvert\lVert v\rVert$ for every $v$ there, so
$$
\Bigl\lVert \mathcal{K}u-\sum_{n\le N}\mu_{n}(u,e_{n})e_{n}\Bigr\rVert
= \lVert\mathcal{K}v_{N}\rVert \le \lvert\mu_{N+1}\rvert\,\lVert v_{N}\rVert \le \lvert\mu_{N+1}\rvert\,\lVert u\rVert ,
$$
using $\mathcal{K}e_{n}=\mu_{n}e_{n}$ and Bessel's inequality $\lVert v_{N}\rVert\le\lVert u\rVert$. Since $\mu_{N+1}\to0$, the right-hand side tends to $0$ and the series converges to $\mathcal{K}u$; with $\mu_{n}=\lambda_{n}^{-1}$ this is the displayed formula. (Should the nonzero eigenvalues be finite in number, the extremal principle gives $\mathcal{K}v_{N}=0$ outright for $N$ past the last one, and the finite sum is exact.) Consequently every element of $\operatorname{ran}\mathcal{K}$ is an $L^{2}$-limit of combinations of the $e_{n}$, so $\{e_{n}\}$ is an orthonormal basis of $\overline{\operatorname{ran}\mathcal{K}}$. (Theorem 6.3.4 is printed as a basis for $\operatorname{ran}\mathcal{K}$ itself; the closure is the reading we state, since the closed span of an orthonormal family is closed while $\operatorname{ran}\mathcal{K}$ in general is not — see the fourth bullet of the remark.) For the splitting, set $h=u-\sum_{n}(u,e_{n})e_{n}$; the series converges by Bessel, and $\mathcal{K}h = \mathcal{K}u-\sum_{n}\mu_{n}(u,e_{n})e_{n}=0$ by the formula just proved, so $h\in\ker\mathcal{K}$; uniqueness holds because $\ker\mathcal{K}$ is orthogonal to every $e_{n}$ (if $\mathcal{K}h=0$ then $\mu_{n}(h,e_{n})=(h,\mathcal{K}e_{n})=(\mathcal{K}h,e_{n})=0$ and $\mu_{n}\neq0$). In particular $\{e_{n}\}$ is a basis of $L^{2}$ exactly when $\ker\mathcal{K}=\{0\}$, which is Stakgold and Holst's Theorem 6.3.5.

**Part 3.** Fix $t$ and expand $K_{m}(\cdot,t)$. Because $K$ is Hermitian, so is every $K_{m}$, and
$$
\int_{a}^{b}K_{m}(x,t)\,\overline{e_{n}(x)}\,\mathrm{d}x
= \overline{\int_{a}^{b}\overline{K_{m}(x,t)}\,e_{n}(x)\,\mathrm{d}x}
= \overline{\int_{a}^{b}K_{m}(t,x)e_{n}(x)\,\mathrm{d}x}
= \overline{(\mathcal{K}^{m}e_{n})(t)} = \mu_{n}^{m}\,\overline{e_{n}(t)} ,
$$
using $\mu_{n}$ real. So the Fourier coefficients of $K_{m}(\cdot,t)$ in the basis $\{e_{n}\}$ are $\mu_{n}^{m}\overline{e_{n}(t)}$, and the Fourier series is $\sum_{n}\mu_{n}^{m}e_{n}(x)\overline{e_{n}(t)}$ as claimed. For $m\ge2$ the relation $K_{m}(\cdot,t)=\mathcal{K}K_{m-1}(\cdot,t)$ puts $K_{m}(\cdot,t)$ in $\operatorname{ran}\mathcal{K}$, where by part 2 the Fourier series does converge to the function in mean square; by symmetry the same holds in the other variable. (Stakgold and Holst say this for each fixed value of the second variable; for a kernel that is only square-integrable the function $K_{m}(\cdot,t)$ is defined for almost every $t$, which is the qualification carried in part 3.) The uniform-convergence refinement when $K_{2}$ is continuous is Stakgold and Holst's Theorem 6.3.7, and the $m=1$ case under continuity of $K$ plus a sign condition on all but finitely many characteristic values is their Theorem 6.3.8, Mercer's theorem. We take both from them without proof; the delicacy is exactly that $K(\cdot,t)$ need not lie in $\operatorname{ran}\mathcal{K}$, so part 2 does not apply.

**Part 4, the coefficients.** Let $y\in L^{2}$ solve $(\ast)$, that is $y=f+\lambda\mathcal{K}y$. Take the inner product with $e_{n}$ and use self-adjointness with $\mu_{n}=\lambda_{n}^{-1}$ real:
$$
(y,e_{n}) = (f,e_{n})+\lambda(\mathcal{K}y,e_{n}) = (f,e_{n})+\lambda(y,\mathcal{K}e_{n}) = (f,e_{n})+\frac{\lambda}{\lambda_{n}}(y,e_{n}),
$$
hence
$$
\Bigl(1-\frac{\lambda}{\lambda_{n}}\Bigr)(y,e_{n}) = (f,e_{n}),
\qquad\text{that is}\qquad
(\lambda_{n}-\lambda)\,(y,e_{n}) = \lambda_{n}\,(f,e_{n}).
\tag{C}
$$
This single relation carries both cases, exactly as the corresponding relation (6.4.6) does for Stakgold and Holst.

**Part 4, $\lambda$ not a characteristic value.** Then $\lambda_{n}-\lambda\neq0$ for every $n$, so (C) determines $(y,e_{n}) = \lambda_{n}(f,e_{n})/(\lambda_{n}-\lambda)$. Since $y-f=\lambda\mathcal{K}y$ lies in $\operatorname{ran}\mathcal{K}$, part 2 gives
$$
y-f = \lambda\mathcal{K}y = \lambda\sum_{n}\lambda_{n}^{-1}(y,e_{n})\,e_{n}
= \lambda\sum_{n}\frac{(f,e_{n})}{\lambda_{n}-\lambda}\,e_{n},
$$
which is the stated formula; so a solution, if it exists, is unique. The series converges in $L^{2}$: because $\lambda_{n}\to\infty$ (or the family is finite), the quantity $\lvert\lambda_{n}/(\lambda_{n}-\lambda)\rvert$ is bounded by some $C$ over all $n$, so $\sum_{n}\lvert(y,e_{n})\rvert^{2}\le C^{2}\sum_{n}\lvert(f,e_{n})\rvert^{2}\le C^{2}\lVert f\rVert^{2}<\infty$ by Bessel, and the Riesz–Fischer theorem (:ref[]{to=funcan.orthonormal-bases}) makes the series converge. Conversely, define $y$ by the formula and check it solves $(\ast)$: applying $\mathcal{K}$ term by term (legitimate since $\mathcal{K}$ is bounded and the series converges in $L^{2}$),
$$
f+\lambda\mathcal{K}y
= f+\lambda\mathcal{K}f+\lambda^{2}\sum_{n}\frac{(f,e_{n})}{\lambda_{n}-\lambda}\lambda_{n}^{-1}e_{n}
= f+\lambda\sum_{n}\Bigl[\frac{1}{\lambda_{n}}+\frac{\lambda}{\lambda_{n}(\lambda_{n}-\lambda)}\Bigr](f,e_{n})\,e_{n},
$$
where $\mathcal{K}f=\sum_{n}\lambda_{n}^{-1}(f,e_{n})e_{n}$ by part 2. The bracket is
$$
\frac{(\lambda_{n}-\lambda)+\lambda}{\lambda_{n}(\lambda_{n}-\lambda)} = \frac{1}{\lambda_{n}-\lambda},
$$
so the right-hand side is $y$. For the resolvent form, one first has to know that $R(\cdot,\cdot;\lambda)$ is a function at all, which the $L^{2}$ convergence of the solution series does not say. It is: the eigenvalues of a Hilbert–Schmidt operator are square-summable, $\sum_{n}\lambda_{n}^{-2}=\sum_{n}\mu_{n}^{2}\le\iint\lvert K\rvert^{2}<\infty$, and $\lvert\lambda_{n}\rvert\to\infty$ makes $\lvert\lambda_{n}-\lambda\rvert^{-1}$ comparable to $\lvert\lambda_{n}\rvert^{-1}$ for large $n$, so $\sum_{n}\lvert\lambda_{n}-\lambda\rvert^{-2}<\infty$; since the products $e_{n}(x)\overline{e_{n}(t)}$ are orthonormal in $L^{2}([a,b]\times[a,b])$, the series for $R$ converges there and $R$ is itself a Hilbert–Schmidt kernel. Now insert $(f,e_{n})=\int_{a}^{b}f(t)\overline{e_{n}(t)}\,\mathrm{d}t$ and exchange sum and integral, which that $L^{2}$ convergence on the square permits.

**Part 4, $\lambda=\lambda_{p}$.** Group the indices into the resonant ones $m_{1},\dots,m_{k}$, for which $\lambda_{n}=\lambda_{p}$, and the rest. For a resonant index, (C) reads $0 = \lambda_{p}(f,e_{m_{i}})$, and $\lambda_{p}\neq0$; so if some $(f,e_{m_{i}})\neq0$ no solution exists. Suppose all $k$ conditions hold. Then (C) leaves $(y,e_{m_{i}})$ completely undetermined — call it $c_{i}$ — and fixes $(y,e_{n})=\lambda_{n}(f,e_{n})/(\lambda_{n}-\lambda_{p})$ for every non-resonant $n$. Running the computation of the previous paragraph again, with the resonant terms now contributing $c_{i}e_{m_{i}}$ to $y-f$ and $\lambda_{p}\cdot\lambda_{p}^{-1}c_{i}e_{m_{i}}=c_{i}e_{m_{i}}$ to $\lambda_{p}\mathcal{K}y$, shows that every choice of the $c_{i}$ gives a solution and that these are all of them. Since the $e_{m_{i}}$ are orthonormal and orthogonal to the rest, $\lVert y\rVert^{2}$ is the norm of the $c$-free part plus $\sum_{i}\lvert c_{i}\rvert^{2}$, minimised by $c=0$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="arfken-2013:§21.4, p. 1072, p. 1073, Exercises 21.4.1 and 21.4.4, pp. 1077–1078; stakgold-holst-2011:§6.3, Thm 6.3.5, p. 374, Thms 6.3.7–6.3.8 and the trace inequality (6.3.19), p. 377, Exercise 6.3.2, p. 378, the opening paragraph of §6.3, p. 371, and §6.2, Thm 6.2.1 with its remarks, p. 360, and Example 3, pp. 365–366; rhb-2006:§23.7, p. 817"}
- **Hermitian symmetry** is not a local convenience but the hypothesis every part rests on. It enters at the very first step of the proof, where it makes $\mathcal{K}$ self-adjoint, and the rest of part 1 is then the spectral theorem for compact *self-adjoint* operators. Part 2 uses it again through that theorem: the extremal bound $\lVert\mathcal{K}v\rVert\le\lvert\mu_{N+1}\rvert\lVert v\rVert$ is a statement about self-adjoint operators, and $\mathcal{K}$ carries the orthogonal complement of $\operatorname{span}\{e_{1},\dots,e_{N}\}$ into itself only because it is self-adjoint. Part 4 uses it a third time, to move $\mathcal{K}$ across the inner product in deriving (C). Beyond these uses through self-adjointness, symmetry is used twice at the level of the kernel: in the direct reality-and-orthogonality computation of part 1, and in the identification of the Fourier coefficients of $K_{m}$ in part 3 (where the $\mu_{n}$ being real is also needed). Drop the hypothesis and there is nothing left: a real non-symmetric kernel can have complex characteristic values and need not have any eigenfunctions at all. Stakgold and Holst give the Volterra operator as such an example, and point out what survives — one replaces $\mathcal{K}$ by $\mathcal{K}^{*}\mathcal{K}$ and $\mathcal{K}\mathcal{K}^{*}$ and gets a singular-value decomposition instead of an eigenfunction expansion (:ref[]{to=linalg.svd}). Arfken, Weber and Harris mostly assume $K$ real and symmetric and then drop the complex conjugates; their Exercise 21.4.1 asks for the Hermitian case, which is what is stated here.
- **The Hilbert–Schmidt condition** is what makes $\mathcal{K}$ compact, and compactness is what gives the discrete spectrum, the finite multiplicities and the accumulation of $\mu_{n}$ at $0$. It does this by itself, with no help from the interval: the characterisation quoted in :ref[]{to=green.integral-equations} asks only that $K$ be square-integrable on the product, and a Gaussian kernel $\mathrm{e}^{-x^{2}-t^{2}}$ is square-integrable on the whole plane and so compact there. What the finite interval buys is the rest of the unit — continuity on a compact square, which is what Mercer's theorem and the uniform expansion of part 3 ask for, the convergence of the trace integral $\int K_{m}(x,x)$, and the Sturm–Liouville reading in the application. Both books warn by example, and in both examples it is the square-integrability that fails. Arfken, Weber and Harris invite the reader to apply the theory to
  $$
  \varphi(x)=\lambda\int_{0}^{\infty}\mathrm{e}^{-xt}\varphi(t)\,\mathrm{d}t ,
  $$
  of which they say that it has an infinite number of solutions in all, one of them being the non-normalisable $\varphi(x)=x^{-1/2}$ at $\lambda=\pi^{-1/2}$. (They say nothing about how many solutions belong to that one value of $\lambda$.) Their Note puts the anomaly down to the infinite range of integration, which makes the equation singular; and on p. 1073 they warn that for a singular equation the bilinear expansion need not exist. Stakgold and Holst give $K(x,t)=\mathrm{e}^{-\lvert x-t\rvert}/2$ on the whole line (their §6.2, Example 3, pp. 365–366), which is symmetric and bounded — a Holmgren kernel, with $\lVert\mathcal{K}\rVert=1$ — but not Hilbert–Schmidt, since $\iint\lvert K\rvert^{2}$ diverges; it is not compact, and it has **no** eigenvalues whatever, the interval $0\le\lambda\le1$ lying instead in its continuous spectrum. They recall the example at the head of §6.3, p. 371, as the standing warning that boundedness and self-adjointness alone buy nothing.
- **Completeness is of the range, not of the space.** Part 2 says $\{e_{n}\}$ spans $\overline{\operatorname{ran}\mathcal{K}}$. Arfken, Weber and Harris state the completeness they need in exactly this guarded form — a function that can be written as $\mathcal{K}h$ has an eigenfunction expansion — and Riley, Hobson and Bence assert completeness without the qualification. The qualification matters: if $\mathcal{K}$ has a nontrivial null space, there are functions with no expansion in the $e_{n}$, and the solution formula of part 4 still holds because $y-f$, not $y$, is the object being expanded.
- **$\lambda=0$ is a separate question.** Part 4 assumes $\lambda\neq0$; the case $\lambda=0$ of $(\ast)$ is the first-kind equation $\mathcal{K}y=f$, and Stakgold and Holst remark that orthogonality of $f$ to $\ker\mathcal{K}^{*}$ is then necessary but usually *not* sufficient, because $\operatorname{ran}\mathcal{K}$ need not be closed. Formally the solution would be $y=\sum\lambda_{n}(f,e_{n})e_{n}$, and the factors $\lambda_{n}\to\infty$ show what goes wrong: the series diverges unless the coefficients of $f$ decay fast enough. That divergence is the ill-posedness of first-kind equations, quantified.
- **Mercer's hypotheses.** Continuity alone is not enough for the $m=1$ bilinear expansion to converge uniformly; Stakgold and Holst say so explicitly before stating Mercer's theorem, whose extra hypothesis is that all but finitely many characteristic values share a sign — automatic for a positive kernel such as a Green's function of a definite operator. For $m\ge2$ the hypotheses are weaker because $K_{m}$ lies in the range of $\mathcal{K}$.
- **A bonus from part 3.** Setting $x=t$ in the expansion of $K_{m}$ and integrating gives $\sum_{n}\lambda_{n}^{-m}=\int_{a}^{b}K_{m}(x,x)\,\mathrm{d}x$ — valid for $m\ge2$, where part 3 supplies the expansion unconditionally, and at $m=1$ only under Mercer's hypotheses, which is exactly the caveat Stakgold and Holst attach to their (6.3.19). From it they derive the trace inequality $\lvert\lambda_{1}\rvert^{-1}\le\bigl(\int_{a}^{b}K_{m}(x,x)\,\mathrm{d}x\bigr)^{1/m}$ for a positive operator — a computable upper bound for $\lVert\mathcal{K}\rVert$, sharpening as $m$ grows.
:::

:::example[The kernel min(x, t): eigenfunctions, Mercer's expansion and a solved equation]{provenance=original}
Take $[a,b]=[0,1]$ and
$$
K(x,t)=\min(x,t),
$$
which is real, symmetric, continuous and bounded, hence Hilbert–Schmidt on the unit square. It is the Green's function of $-\mathrm{d}^{2}/\mathrm{d}x^{2}$ with $y(0)=0$, $y'(1)=0$ (:ref[]{to=green.green-function-bvp}). (The same kernel reflected in $x\mapsto1-x$, namely $1-\max(x,\xi)$, is the running example of :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§6.2, Example 2, pp. 363–364"}, with the same characteristic values and the cosines in place of the sines; the Mercer check, the closed form and the degenerate case below are ours.)

**The eigenfunctions.** Set $\omega_{n}=(n-\tfrac12)\pi$ and $e_{n}(x)=\sqrt2\,\sin(\omega_{n}x)$ for $n=1,2,\dots$. These are orthonormal on $[0,1]$: $2\int_{0}^{1}\sin(\omega_{m}x)\sin(\omega_{n}x)\mathrm{d}x=\delta_{mn}$. To see that they are the eigenfunctions, compute for any $\omega$ with $\cos\omega=0$:
$$
\int_{0}^{1}\min(x,t)\sin(\omega t)\,\mathrm{d}t
= \int_{0}^{x}t\sin(\omega t)\,\mathrm{d}t + x\int_{x}^{1}\sin(\omega t)\,\mathrm{d}t .
$$
The first integral is $-\dfrac{x\cos(\omega x)}{\omega}+\dfrac{\sin(\omega x)}{\omega^{2}}$ by parts; the second is $\dfrac{x\bigl(\cos(\omega x)-\cos\omega\bigr)}{\omega}=\dfrac{x\cos(\omega x)}{\omega}$ because $\cos\omega=0$. The two $x\cos(\omega x)/\omega$ terms cancel, leaving
$$
\mathcal{K}e_{n} = \omega_{n}^{-2}\,e_{n} .
$$
So the characteristic values are $\lambda_{n}=\omega_{n}^{2}=(n-\tfrac12)^{2}\pi^{2}$, that is $\pi^{2}/4,\ 9\pi^{2}/4,\ 25\pi^{2}/4,\dots$, all positive and tending to infinity, with $\lvert\lambda_{1}\rvert^{-1}=4/\pi^{2}=0.4053=\lVert\mathcal{K}\rVert$. There is no null space here ($\mathcal{K}u=0$ forces $u=-(\mathcal{K}u)''=0$), so by part 2 the $e_{n}$ form an orthonormal basis of $L^{2}(0,1)$ — they are the familiar quarter-wave sine basis.

**Mercer's expansion, checked at a point.** All the characteristic values are positive and $K$ is continuous, so Mercer's theorem applies:
$$
\min(x,t) = \sum_{n=1}^{\infty}\frac{2\sin(\omega_{n}x)\sin(\omega_{n}t)}{\omega_{n}^{2}}
\qquad\text{uniformly on }[0,1]^{2}.
$$
Test it at $x=t=1$, where $\sin\omega_{n}=(-1)^{n+1}$ so every term is positive and the left side is $1$:
$$
\sum_{n=1}^{\infty}\frac{2}{\omega_{n}^{2}} = \frac{2}{\pi^{2}}\sum_{n=1}^{\infty}\frac{1}{(n-\tfrac12)^{2}} = \frac{2}{\pi^{2}}\cdot\frac{\pi^{2}}{2} = 1 ,
$$
using $\sum_{n\ge1}(n-\tfrac12)^{-2}=\pi^{2}/2$ (which is $\sum_{m\ \mathrm{odd}}4/m^{2}=4\cdot\pi^{2}/8$). Numerically the first $20{,}000$ terms give $0.99999$, consistent.

**Solving an inhomogeneous equation.** Take $f(x)=x$ and $\lambda=1$:
$$
y(x) = x + \int_{0}^{1}\min(x,t)\,y(t)\,\mathrm{d}t .
$$
Since $\lambda=1$ is not among the $\lambda_{n}$ (the smallest is $\pi^{2}/4=2.467$), part 4 gives a unique solution. The coefficients of $f$ are
$$
(f,e_{n}) = \sqrt2\int_{0}^{1}x\sin(\omega_{n}x)\,\mathrm{d}x
= \sqrt2\Bigl[-\frac{\cos\omega_{n}}{\omega_{n}}+\frac{\sin\omega_{n}}{\omega_{n}^{2}}\Bigr]
= \frac{\sqrt2\,(-1)^{n+1}}{\omega_{n}^{2}} ,
$$
so
$$
y(x) = x + 2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}\sin(\omega_{n}x)}{\omega_{n}^{2}\bigl(\omega_{n}^{2}-1\bigr)} .
$$

**The same answer in closed form.** Differentiate the integral equation twice. Writing the integral as $\int_{0}^{x}ty\,\mathrm{d}t+x\int_{x}^{1}y\,\mathrm{d}t$, the terms $\pm xy(x)$ cancel on differentiating, leaving $y'(x)=1+\int_{x}^{1}y\,\mathrm{d}t$ and then $y''=-y$. The equation itself gives $y(0)=0$ and the first derivative gives $y'(1)=1$. So $y=\sin x/\cos 1$, and at $x=1$ this is $\tan 1 = 1.5574077$. The series at $x=1$ is $1+2\sum_{n}\bigl[\omega_{n}^{2}(\omega_{n}^{2}-1)\bigr]^{-1}$, whose first four terms are $0.27619$, $0.0021235$, $0.00026714$, $0.00006898$; summing eleven terms and doubling gives $0.5574026$, so the series value is $1.5574026$ against $\tan1=1.5574077$ — agreement to the expected truncation error.

**Where the poles are.** The closed form $y=\sin(\sqrt\lambda\,x)/(\sqrt\lambda\cos\sqrt\lambda)$, obtained the same way for general $\lambda$, blows up exactly when $\cos\sqrt\lambda=0$, that is at $\lambda=\omega_{n}^{2}=\lambda_{n}$ — the poles of the resolvent, exactly as part 4 predicts. And the degenerate case behaves as advertised: at $\lambda=\lambda_{1}=\pi^{2}/4$ the data $f=x$ has $(f,e_{1})=4\sqrt2/\pi^{2}\neq0$, so there is no solution; replacing $f$ by $\sin(3\pi x/2)=e_{2}/\sqrt2$, which is orthogonal to $e_{1}$, makes the equation solvable, with the one-parameter family
$$
y = \frac{e_{2}}{\sqrt2}+\frac{\lambda_{1}}{\sqrt2\,(\lambda_{2}-\lambda_{1})}\,e_{2}+c\,e_{1}
= \Bigl(1+\frac{\pi^{2}/4}{2\pi^{2}}\Bigr)\sin\frac{3\pi x}{2}+c\sqrt2\sin\frac{\pi x}{2},
$$
since $\lambda_{2}-\lambda_{1} = (9-1)\pi^{2}/4=2\pi^{2}$.
:::

:::application{provenance=original}
**Sturm–Liouville problems are this theorem in disguise.** Stakgold and Holst make the connection the point of their §6.3: take a formally self-adjoint differential operator $L$ of order $p$ with real coefficients and $p$ boundary functionals making the problem self-adjoint, build the Green's function $g(x,\xi)$ of $L$ with those boundary conditions, and the eigenvalue problem $Lu=\theta u$ becomes $u=\theta\,\mathcal{G}u$ with $\mathcal{G}$ the integral operator of $g$. That $g$ is real and symmetric, and $\mathcal{G}$ compact, so parts 1 and 2 apply and deliver the standard facts of :ref[]{to=ode.sturm-liouville-theory}: real eigenvalues, orthogonal eigenfunctions, and completeness. Their Theorem 6.3.6 states the conclusion in one line: for a self-adjoint boundary-value problem, the eigenfunctions are an orthonormal basis of the whole space. The proof is the integral-equation argument above together with the observation that $\mathcal{G}$ has no null space, because $Lz=u$ with homogeneous boundary data has the unique solution $z=\mathcal{G}u$. The example worked above is the smallest instance: $\min(x,t)$ is the Green's function, and the quarter-wave sines are the eigenfunctions. The direction of the implication is worth noticing. The discreteness and completeness of the normal modes of a vibrating string, a quantum well or a resonant cavity are not facts about differential equations; they are facts about compact self-adjoint integral operators, inherited by the differential problem through its Green's function.

**Bounding a fundamental frequency.** The trace identity $\sum_{n}\lambda_{n}^{-m}=\int_{a}^{b}K_{m}(x,x)\,\mathrm{d}x$ — free for $m\ge2$, and available at $m=1$ here because $\min(x,t)$ is continuous with all characteristic values positive, so Mercer's theorem applies — is a practical tool: it converts a spectral quantity into an integral of the kernel, computable without solving the eigenvalue problem. For the example above, $m=1$ gives $\sum_{n}\omega_{n}^{-2}=\int_{0}^{1}x\,\mathrm{d}x=\tfrac12$ — a closed-form evaluation of $\sum(n-\tfrac12)^{-2}\pi^{-2}$, matching the Mercer check — and the trace inequality then bounds the lowest eigenvalue of the boundary-value problem by $\lambda_{1}\ge 2$, against the true value $\pi^{2}/4=2.467$. Taking $m=2$ gives $\sum_{n}\omega_{n}^{-4}=\int_{0}^{1}K_{2}(x,x)\mathrm{d}x$ and a sharper bound, and this is how a lowest resonant frequency can be estimated from the response kernel alone. It is the integral-equation twin of the Rayleigh–Ritz bound (:ref[]{to=var.rayleigh-ritz}).

**Resolvent poles, response functions and resonances.** Part 4 says the solution of the driven problem is $\sum_{n}\frac{(f,e_{n})}{\lambda_{n}-\lambda}e_{n}$ up to the term $f$: a sum over modes, each weighted by the overlap of the drive with that mode and by a factor that blows up as the drive parameter approaches the mode's characteristic value. This is the universal shape of a linear response function, and the resolvent kernel $R(x,t;\lambda)$ is the response at $x$ to a unit drive at $t$. Reading it as a function of $\lambda$ gives a meromorphic function whose poles sit at the eigenvalues and whose residues are the projections onto the eigenspaces — the same object as the eigenfunction expansion of a Green's function (:ref[]{to=green.eigenfunction-expansion-green}). The degenerate case of part 4 is resonance: when the drive is tuned to a mode, a bounded response exists only if the drive is orthogonal to that mode, and then the mode's amplitude is undetermined by the equation and must be fixed by something else — initial conditions, or damping that the model left out.

**Truncating the expansion: compression and regularisation.** Because $\lambda_{n}^{-1}\to0$, the bilinear expansion of part 3 is dominated by a few terms, and discarding the rest is both the standard way to compress a smooth kernel and the standard way to regularise a first-kind equation: keeping only the terms with $\lvert\lambda_{n}\rvert$ below a cutoff replaces $\mathcal{K}$ by a separable kernel of small rank (:ref[]{to=green.separable-kernels}) and makes the inversion stable at the cost of resolution. For a non-Hermitian kernel the same construction with singular values in place of eigenvalues is the truncated singular-value decomposition (:ref[]{to=linalg.svd}), which is what image deblurring and tomographic reconstruction actually use.
:::
