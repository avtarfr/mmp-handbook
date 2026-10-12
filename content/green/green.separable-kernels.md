---
id: green.separable-kernels
title: Separable kernels
kind: method
level: core
summary: "A kernel that is a finite sum of products of a function of x with a function of t turns a Fredholm equation of the second kind into an n-by-n linear system, so the characteristic values are the roots of a polynomial and the Fredholm alternative is exactly the solvability trichotomy for that system."
prereqs: [green.integral-equations, linalg.linear-systems]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§21.2, the generating-function method, eqs. (21.30)–(21.32), pp. 1056–1057; Separable Kernel, eqs. (21.33)–(21.42), pp. 1057–1059; Example 21.2.3 (homogeneous Fredholm equation), pp. 1059–1060; Exercise 21.2.16(b), p. 1063"
    pages: "1056-1060, 1063"
    role: the definition of a separable (degenerate) kernel and the remark that the class contains all polynomials and many elementary transcendental functions, the reduction to the linear system (1 - lambda A)c = b with the explicit matrix and right-hand side, the secular determinant for the characteristic values, the suggestion that a kernel be expanded in a series of products of special functions, and the observation that a function orthogonal to all the t-factors of the kernel may be added to any solution
  - work: rhb-2006
    loc: "§23.4.1 (Separable kernels), eqs. (23.8)–(23.11) and the two worked examples, pp. 807–808; §23.3, eqs. (23.6)–(23.7) and the solvability discussion, pp. 805–806"
    pages: "805-808"
    role: the same reduction in the form y = f + lambda sum c_i phi_i with the constants fixed by substitution; the observation that the characteristic values are the roots of the determinant; the statement of the alternative in terms of orthogonality of f to the solutions of the adjoint homogeneous equation
  - work: stakgold-holst-2011
    loc: "§6.1, definition of a separable kernel, p. 356, and the proof that a separable operator is compact, p. 357; §6.2, Thm 6.2.1 (the alternative theorem for compact K) with its three remarks, p. 360, and Example 1 (separable kernel: eigenvalue problem and inhomogeneous equation, eqs. (6.2.4)–(6.2.11)), pp. 361–362"
    pages: "356-357, 360-362"
    role: the definition with independent families, the finite rank and compactness, the Fredholm alternative for a compact operator, and the reduction of both the eigenvalue problem and the inhomogeneous problem for a separable kernel to finite matrix problems, including the structure of the zero eigenvalue
  - work: hassani-2013
    loc: "§18.2, Example 18.2.3 (closed-form solution for the kernel xt by exploiting its product form), pp. 553–554"
    pages: "553-554"
    role: the exact solution of a one-term separable equation by introducing the single unknown constant, obtained without any convergence hypothesis on the parameter
  - work: kreyszig-1978
    loc: "§5.4, eq. (1), p. 319"
    pages: "319"
    role: the form of the second-kind Fredholm equation on C[a, b] used here
---

:::definition[Separable kernel]{provenance=adapted src="arfken-2013:§21.2, eq. (21.33), p. 1057; rhb-2006:§23.4.1, eq. (23.8), p. 807; stakgold-holst-2011:§6.1, p. 356, and §6.2, eq. (6.2.4), p. 361"}
A kernel $K$ on $[a,b]\times[a,b]$ is **separable**, or **degenerate**, if it is a finite sum of products of a function of the first variable with a function of the second:
$$
K(x,t) = \sum_{j=1}^{n}\phi_{j}(x)\,\psi_{j}(t),
$$
with $n<\infty$ and all $\phi_j,\psi_j$ in $L^{2}(a,b)$. Stakgold and Holst write the second factor conjugated, $\sum_{i}p_{i}(x)\overline{q_{i}(t)}$, which describes the same class of kernels, and they add the normalisation that the family $\{\phi_{j}\}$ and the family $\{\psi_{j}\}$ are each linearly independent; this costs nothing, since a dependent family can be thinned and the kernel rewritten with a smaller $n$.

The **rank** of a separable kernel is defined to be $\dim\operatorname{ran}\mathcal{K}$, the dimension of the range of the integral operator
$$
(\mathcal{K}u)(x) = \sum_{j=1}^{n}\phi_{j}(x)\int_{a}^{b}\psi_{j}(t)u(t)\,\mathrm{d}t .
$$
It is finite, and for a representation normalised as above it is exactly the number of terms. The display puts $\operatorname{ran}\mathcal{K}$ inside $\operatorname{span}\{\phi_{1},\dots,\phi_{n}\}$, so the rank is at most $n$; and it is at least $n$ because the $\psi_{j}$ are independent, so the $n$ linear functionals $u\mapsto\int_{a}^{b}\psi_{j}u$ are independent as well and some $u_{1},\dots,u_{n}$ make the matrix $\bigl[\int\psi_{j}u_{i}\bigr]$ invertible, whence the images $\mathcal{K}u_{1},\dots,\mathcal{K}u_{n}$ span the whole of $\operatorname{span}\{\phi_{1},\dots,\phi_{n}\}$, which is $n$-dimensional because the $\phi_{j}$ are independent. Since the same containment applies to *any* representation of $K$, no representation can have fewer than $\dim\operatorname{ran}\mathcal{K}$ terms: the normalised $n$ is also the smallest possible number of terms, which is why one number deserves both descriptions.

Separable kernels are Hilbert–Schmidt, and the corresponding operator is compact: it is bounded and its range is finite-dimensional, which is Stakgold and Holst's first step in proving that every Hilbert–Schmidt operator is compact. Arfken, Weber and Harris note that the class is larger than it looks: it contains all polynomials in $x$ and $t$ and many of the elementary transcendental functions, their example being
$$
\cos(t-x) = \cos x\cos t + \sin x\sin t .
$$
Their "many" should be read strictly: being an elementary function of $x-t$ is not enough. On $[0,2\pi]$ the kernel $K(x,t)=\bigl(2+\cos(x-t)\bigr)^{-1}$ is smooth and bounded, yet its Fourier expansion in the difference,
$$
\frac{1}{2+\cos(x-t)} = \frac{1}{\sqrt3}\sum_{k\in\mathbb{Z}}(-1)^{k}\bigl(2-\sqrt3\bigr)^{\lvert k\rvert}\mathrm{e}^{\mathrm{i}k(x-t)},
$$
has no vanishing coefficient. That expansion is the Poisson kernel in disguise, and is worth deriving rather than quoting. Put $r=2-\sqrt3$, the root in $(0,1)$ of $1+r^{2}=4r$; then
$$
1+2r\cos\theta+r^{2} = 4r+2r\cos\theta = 2r\bigl(2+\cos\theta\bigr).
$$
Writing the Poisson identity $\sum_{k\in\mathbb{Z}}r^{\lvert k\rvert}\mathrm{e}^{\mathrm{i}k\vartheta}=(1-r^{2})/(1-2r\cos\vartheta+r^{2})$ at $\vartheta=\theta-\pi$, where $\cos\vartheta=-\cos\theta$ and $\mathrm{e}^{\mathrm{i}k\vartheta}=(-1)^{k}\mathrm{e}^{\mathrm{i}k\theta}$, and dividing by the displayed factor $2r$,
$$
\frac{1}{2+\cos\theta}
= \frac{2r}{1-r^{2}}\sum_{k\in\mathbb{Z}}(-1)^{k}r^{\lvert k\rvert}\mathrm{e}^{\mathrm{i}k\theta},
\qquad
\frac{2r}{1-r^{2}} = \frac{2-\sqrt3}{2\sqrt3-3} = \frac{1}{\sqrt3},
$$
the last step because $2\sqrt3-3=\sqrt3\,(2-\sqrt3)$. Taking $\theta=x-t$ is the display above; we also checked it numerically. Write $c_{k}=(-1)^{k}(2-\sqrt3)^{\lvert k\rvert}/\sqrt3$, so that $\lvert c_{k}\rvert$ decays geometrically with ratio $2-\sqrt3=0.2679<1$ and $\sum_{k}\lvert c_{k}\rvert<\infty$; the series therefore converges absolutely and uniformly on the square and may be integrated term by term against the bounded function $\mathrm{e}^{\mathrm{i}kt}$. Doing so and using $\int_{0}^{2\pi}\mathrm{e}^{\mathrm{i}(k-m)t}\,\mathrm{d}t=2\pi\delta_{km}$ gives $\mathcal{K}\mathrm{e}^{\mathrm{i}kt}=2\pi c_{k}\mathrm{e}^{\mathrm{i}kx}$ for every $k\in\mathbb{Z}$, so the range contains the infinitely many independent functions $\mathrm{e}^{\mathrm{i}kx}$. This kernel therefore has infinite rank and is not separable, although it is a bounded, infinitely differentiable function of $x-t$.
:::

:::statement[Reduction to a linear system, and the Fredholm alternative]{provenance=adapted src="arfken-2013:§21.2, eqs. (21.34)–(21.42), pp. 1058–1059, and Exercise 21.2.16(b), p. 1063; rhb-2006:§23.4.1, eqs. (23.9)–(23.11), p. 807, and §23.3, eq. (23.7), p. 806; stakgold-holst-2011:§6.2, Thm 6.2.1, p. 360, and Example 1, eqs. (6.2.7) and (6.2.11), pp. 361–362"}
Let $K(x,t)=\sum_{j=1}^{n}\phi_{j}(x)\psi_{j}(t)$ be separable with $\{\phi_{j}\}$ independent and $\{\psi_{j}\}$ independent, let $f\in L^{2}(a,b)$ and let $\lambda\neq0$. Define the $n\times n$ matrix $A$ and the vector $b\in\mathbb{C}^{n}$ by
$$
A_{ij} = \int_{a}^{b}\psi_{i}(x)\,\phi_{j}(x)\,\mathrm{d}x ,
\qquad
b_{i} = \int_{a}^{b}\psi_{i}(x)\,f(x)\,\mathrm{d}x .
$$

1. **The correspondence.** A function $y\in L^{2}(a,b)$ solves
   $$
   y(x) = f(x)+\lambda\int_{a}^{b}K(x,t)y(t)\,\mathrm{d}t
   \tag{$\ast$}
   $$
   if and only if
   $$
   y = f+\lambda\sum_{j=1}^{n}c_{j}\phi_{j}
   \qquad\text{for some } c\in\mathbb{C}^{n} \text{ with } (\mathrm{I}-\lambda A)\,c = b .
   $$
   The correspondence $y\leftrightarrow c$ is a bijection between the solution set of $(\ast)$ and the solution set of the linear system, with $c_{j}=\int_{a}^{b}\psi_{j}y$.
2. **Characteristic values.** $\lambda\neq0$ is a characteristic value of the kernel — that is, $y=\lambda\mathcal{K}y$ has a nonzero solution — if and only if
   $$
   \det(\mathrm{I}-\lambda A)=0 .
   $$
   This is a polynomial equation in $\lambda$ of degree at most $n$, so a separable kernel of rank $n$ has at most $n$ characteristic values. At such a $\lambda$, the homogeneous equation has exactly $\dim\ker(\mathrm{I}-\lambda A)$ independent solutions. In addition, $\lambda=0$ is always an eigenvalue of $\mathcal{K}$ itself, of infinite multiplicity when $L^{2}(a,b)$ is infinite-dimensional: every $u$ with $(u,\overline{\psi_{j}})=0$ for all $j$ satisfies $\mathcal{K}u=0$, and those $u$ form a subspace of codimension $n$. (This null space is what Arfken, Weber and Harris isolate in their Exercise 21.2.16(b), where the equation is of the **first** kind, $\int_{a}^{b}K(x,t)\varphi(t)\,\mathrm{d}t=f(x)$: there a function orthogonal to every $\psi_{j}$ may indeed be added to any solution without disturbing the equation, because the operator does not see it. For the second-kind equation $(\ast)$ that is false: $y+u$ solves $(\ast)$ only if $u=\lambda\mathcal{K}u$, which for $u\in\ker\mathcal{K}$ forces $u=0$. The non-uniqueness in $(\ast)$ comes from $\ker(\mathrm{I}-\lambda\mathcal{K})$, part 3 below, not from $\ker\mathcal{K}$.)
3. **The alternative.** Exactly one of the following holds.
   - $\det(\mathrm{I}-\lambda A)\neq0$. Then $(\ast)$ has exactly one solution for every $f$, namely $y=f+\lambda\sum_j c_j\phi_j$ with $c=(\mathrm{I}-\lambda A)^{-1}b$.
   - $\det(\mathrm{I}-\lambda A)=0$, say with $k=\dim\ker(\mathrm{I}-\lambda A)\ge1$. Then the homogeneous equation $y=\lambda\mathcal{K}y$ has a $k$-dimensional solution space; the **adjoint** homogeneous equation
     $$
     g(x) = \overline{\lambda}\int_{a}^{b}\overline{K(t,x)}\,g(t)\,\mathrm{d}t
     $$
     has a solution space of the same dimension $k$; and $(\ast)$ has a solution exactly when the data satisfy the $k$ orthogonality conditions
     $$
     (f,g) = \int_{a}^{b} f(x)\overline{g(x)}\,\mathrm{d}x = 0
     \qquad\text{for each adjoint homogeneous solution } g .
     $$
     Where those conditions hold, the solutions of $(\ast)$ form a $k$-parameter family: any one of them, plus an arbitrary solution of the homogeneous equation.

This is Theorem 6.2.1 of Stakgold and Holst, which holds for every compact $\mathcal{K}$, specialised to the separable case where it can be proved outright; and it is the statement that Riley, Hobson and Bence quote in their §23.3 without proof.
:::

:::idea{provenance=original}
A separable kernel can only ever produce functions in the span of $\phi_{1},\dots,\phi_{n}$. So whatever the solution of $(\ast)$ is, it must be $f$ plus something in that $n$-dimensional span, and the only unknowns are the $n$ coefficients. The integral equation can be nothing but $n$ linear equations in those $n$ numbers — and the way to extract them is to hit the equation with each $\psi_{i}$ and integrate, which collapses every integral to a number. Once that translation is made, nothing is left to prove: every assertion about $(\ast)$ is the corresponding assertion about an $n\times n$ system, read off from :ref[]{to=linalg.linear-systems}. The only point needing care is that the *orthogonality* conditions in the alternative, which live in the function space, match the consistency conditions of the matrix system, which live in $\mathbb{C}^{n}$; that is a short computation identifying the adjoint integral equation with the adjoint matrix equation.
:::

:::proof{provenance=adapted src="arfken-2013:§21.2, eqs. (21.34)–(21.42), pp. 1058–1059; stakgold-holst-2011:§6.2, Example 1, eqs. (6.2.7)–(6.2.11), pp. 361–362; rhb-2006:§23.4.1, eqs. (23.9)–(23.11), p. 807"}
**Part 1, necessity.** Suppose $y$ solves $(\ast)$. Insert the separable form of $K$ and pull the $x$-dependent factors out of the integral, which is legitimate because the sum is finite:
$$
y(x) = f(x)+\lambda\sum_{j=1}^{n}\phi_{j}(x)\int_{a}^{b}\psi_{j}(t)y(t)\,\mathrm{d}t .
$$
The $n$ integrals are numbers; call them $c_{j}=\int_{a}^{b}\psi_{j}y$, each finite by the Cauchy–Schwarz inequality since $\psi_j,y\in L^2$. Then $y = f+\lambda\sum_{j}c_{j}\phi_{j}$, which is the stated shape. To get the system, multiply this identity by $\psi_{i}$ and integrate:
$$
c_{i} = \int_{a}^{b}\psi_{i}y = \int_{a}^{b}\psi_{i}f+\lambda\sum_{j}c_{j}\int_{a}^{b}\psi_{i}\phi_{j} = b_{i}+\lambda\sum_{j}A_{ij}c_{j},
$$
that is $(\mathrm{I}-\lambda A)c=b$.

**Part 1, sufficiency.** Conversely let $c$ satisfy $(\mathrm{I}-\lambda A)c=b$ and set $y=f+\lambda\sum_{j}c_{j}\phi_{j}$. Then
$$
\int_{a}^{b}\psi_{i}y = b_{i}+\lambda\sum_{j}A_{ij}c_{j} = c_{i}
$$
by the system, so
$$
f(x)+\lambda\int_{a}^{b}K(x,t)y(t)\,\mathrm{d}t
= f(x)+\lambda\sum_{j}\phi_{j}(x)\int_{a}^{b}\psi_{j}y
= f(x)+\lambda\sum_{j}c_{j}\phi_{j}(x) = y(x),
$$
so $y$ solves $(\ast)$.

**Part 1, bijectivity.** The map $c\mapsto y=f+\lambda\sum c_{j}\phi_{j}$ is injective because $\lambda\neq0$ and the $\phi_{j}$ are independent, and the two displays above show it maps solutions onto solutions in both directions, with inverse $y\mapsto\bigl(\int\psi_{j}y\bigr)_{j}$.

**Part 2.** Take $f\equiv0$, so $b=0$. By part 1 the nonzero solutions of $y=\lambda\mathcal{K}y$ correspond bijectively to the nonzero solutions of $(\mathrm{I}-\lambda A)c=0$, and the correspondence is linear, so it matches the solution spaces dimension for dimension. By part 4 of the solvability statement in :ref[]{to=linalg.linear-systems}, a square homogeneous system has a nonzero solution exactly when its determinant vanishes; expanding $\det(\mathrm{I}-\lambda A)$ shows it is a polynomial in $\lambda$ of degree at most $n$ with constant term $1$, hence not identically zero, so it has at most $n$ roots. For the last clause, $\mathcal{K}u = \sum_j\phi_j\int\psi_j u$, and because the $\phi_{j}$ are independent this vanishes exactly when $\int\psi_{j}u=0$ for every $j$ — that is, $u$ lies in the orthogonal complement of $\operatorname{span}\{\overline{\psi_{1}},\dots,\overline{\psi_{n}}\}$, a subspace of codimension $n$.

**Part 3, the two branches.** By part 1 the solution sets of $(\ast)$ and of $(\mathrm{I}-\lambda A)c=b$ are in bijection, so $(\ast)$ has exactly one solution for every $f$ exactly when the square system does, which by :ref[]{to=linalg.linear-systems} is exactly when $\det(\mathrm{I}-\lambda A)\neq0$; and then $c=(\mathrm{I}-\lambda A)^{-1}b$. In the other branch put $M=\mathrm{I}-\lambda A$ with $k=\dim\ker M\ge1$. The finite-dimensional Fredholm alternative (:ref[]{to=linalg.linear-systems}) says that $Mc=b$ has a solution exactly when $(b,d)=0$ for each $d\in\ker M^{*}$, that $\dim\ker M^{*}=k$ as well, and that the solution set is then a coset of $\ker M$, of dimension $k$. Transporting the last two facts through the bijection of part 1 gives the stated dimensions.

**Part 3, matching the orthogonality conditions.** It remains to show that the $k$ conditions $(b,d)=0$, $d\in\ker M^{*}$, are the conditions $(f,g)=0$, $g$ an adjoint eigenfunction. The adjoint kernel is
$$
\overline{K(t,x)} = \sum_{j}\overline{\psi_{j}(x)}\;\overline{\phi_{j}(t)},
$$
again separable, with the roles of the two families exchanged and everything conjugated. So part 1 applied to the adjoint homogeneous equation $g=\overline{\lambda}\,\mathcal{K}^{*}g$ shows that its solutions are exactly
$$
g = \overline{\lambda}\sum_{j}d_{j}\,\overline{\psi_{j}},
\qquad d_{j}=\int_{a}^{b}\overline{\phi_{j}}\,g ,
$$
with $d$ running over the kernel of $\mathrm{I}-\overline{\lambda}\,A^{\sharp}$, where
$$
A^{\sharp}_{ij} = \int_{a}^{b}\overline{\phi_{i}(x)}\,\overline{\psi_{j}(x)}\,\mathrm{d}x = \overline{A_{ji}} = (A^{*})_{ij}.
$$
Hence $d\in\ker(\mathrm{I}-\overline{\lambda}A^{*}) = \ker\bigl((\mathrm{I}-\lambda A)^{*}\bigr)=\ker M^{*}$, exactly the vectors appearing in the matrix conditions. Finally compute the inner product in the function space:
$$
(f,g) = \int_{a}^{b}f\,\overline{g}
= \int_{a}^{b}f\;\overline{\overline{\lambda}\sum_{j}d_{j}\overline{\psi_{j}}}
= \lambda\sum_{j}\overline{d_{j}}\int_{a}^{b}f\,\psi_{j}
= \lambda\sum_{j}\overline{d_{j}}\,b_{j}
= \lambda\,(b,d).
$$
Since $\lambda\neq0$, $(f,g)=0$ for all adjoint eigenfunctions $g$ if and only if $(b,d)=0$ for all $d\in\ker M^{*}$. That closes part 3. $\square$
:::

:::method[Solving an equation with a separable kernel]{provenance=adapted src="arfken-2013:§21.2, the generating-function method, eqs. (21.30)–(21.32), pp. 1056–1057, and eqs. (21.33)–(21.42), pp. 1057–1059; rhb-2006:§23.4.1, eqs. (23.8)–(23.11), p. 807; hassani-2013:§18.2, Example 18.2.3, eq. (18.16) and the closing remark, pp. 553–554"}
Given $y(x)=f(x)+\lambda\int_{a}^{b}K(x,t)y(t)\,\mathrm{d}t$ with $\lambda\neq0$:

1. **Separate the kernel.** Write $K(x,t)=\sum_{j=1}^{n}\phi_{j}(x)\psi_{j}(t)$ with as few terms as possible. Expand sums and differences of arguments ($\cos(x-t)$, $\sin(x+t)$, $(x-t)^{2}$, $\mathrm{e}^{x-t}$) and collect powers. Discard any $\phi_{j}$ that is a combination of the others, folding its $\psi_{j}$ into theirs, and likewise on the other side, so that both families end up independent.
2. **Build the small system.** Compute the $n^{2}$ numbers $A_{ij}=\int_{a}^{b}\psi_{i}\phi_{j}$ and the $n$ numbers $b_{i}=\int_{a}^{b}\psi_{i}f$. Note the order of the indices: the row index is the $\psi$, the column index the $\phi$.
3. **Find the characteristic values** by solving the polynomial equation $\det(\mathrm{I}-\lambda A)=0$, which Arfken, Weber and Harris call the secular equation. Dividing each row by $\lambda$ turns it into the ordinary eigenvalue problem for $A$ with eigenvalue $1/\lambda$, which is often the easier form.
4. **Branch on $\lambda$.**
   - If $\det(\mathrm{I}-\lambda A)\neq0$, solve $(\mathrm{I}-\lambda A)c=b$ and return $y=f+\lambda\sum_{j}c_{j}\phi_{j}$. This is the unique solution.
   - If $\det(\mathrm{I}-\lambda A)=0$, first test solvability: find a basis $d^{(1)},\dots,d^{(k)}$ of $\ker\bigl((\mathrm{I}-\lambda A)^{*}\bigr)$ and check $(b,d^{(i)})=0$ for each. If some test fails there is no solution and you are done. If all pass, find one solution $c_{\mathrm{p}}$ of the system (by elimination, which reports the consistency as it goes) and a basis $e^{(1)},\dots,e^{(k)}$ of $\ker(\mathrm{I}-\lambda A)$; the general solution is
     $$
     y = f+\lambda\sum_{j}\bigl(c_{\mathrm{p}}+\textstyle\sum_{i}t_{i}e^{(i)}\bigr)_{j}\phi_{j},
     \qquad t_{1},\dots,t_{k}\in\mathbb{C}\ \text{arbitrary.}
     $$
5. **For the homogeneous equation only** ($f\equiv0$), skip to step 3, then for each root $\lambda$ solve $(\mathrm{I}-\lambda A)c=0$; each independent $c$ gives the eigenfunction $\sum_{j}c_{j}\phi_{j}$, whose normalisation is arbitrary.

**Notes on using it.** When $n=1$ the system is one scalar equation and no linear algebra is needed; Hassani does exactly this for $K(x,t)=xt$, introducing the single constant $A=\int t\,u(t)\,\mathrm{d}t$, and gets the closed-form answer $u(x)=x/(1-\lambda A_{11})$, where in our notation $\phi_{1}(x)=x$, $\psi_{1}(t)=t$ and $A_{11}=\int_{a}^{b}x^{2}\,\mathrm{d}x=(b^{3}-a^{3})/3$, the quantity he writes as the norm of the kernel. The scope of that is exactly what he claims for it: no *smallness* hypothesis on $\lambda$ is needed, which is the virtue of the method over a Neumann series (:ref[]{to=green.neumann-series}), whose convergence in his example needs $\lvert\lambda\rvert(b^{3}-a^{3})<3$. The one value of $\lambda$ that must still be excluded is the characteristic value $\lambda=1/A_{11}=3/(b^{3}-a^{3})$, visible as the zero of his own denominator, where part 2 of the statement above takes over. When $K$ is not separable, the move Arfken, Weber and Harris make is to expand it in a series of special functions: their worked case is the kernel $(1-2xt+x^{2})^{-1/2}$ on $[-1,1]$, whose generating-function expansion $\sum_{n}P_{n}(t)x^{n}$ is a series of products of a function of $x$ with a function of $t$, and they recommend the device whenever such an expansion is available and the interval suits. Their equation is of the *first* kind, with no term outside the integral, so the recipe above — which needs $\lambda\neq0$ and the unknown outside as well as inside — does not apply to it; what they do instead is expand the unknown in the same polynomials and match coefficients. What the device does hand to this unit is the shape of the kernel: a kernel written as a series of products of a function of $x$ with a function of $t$ becomes separable as soon as the series is truncated, and for a second-kind equation the recipe above then solves the truncated problem exactly. That is the Galerkin idea, and the error analysis becomes a question of how well the truncation approximates $K$ in the Hilbert–Schmidt norm.
:::

:::example[A rank-two Legendre kernel: both branches of the alternative]{provenance=original}
Take $[a,b]=[-1,1]$ and
$$
K(x,t) = \frac{1+3xt}{2},
$$
which is separable of rank $2$: with $\phi_{1}=1$, $\psi_{1}(t)=\tfrac12$, $\phi_{2}(x)=3x$, $\psi_{2}(t)=\tfrac{t}{2}$, indeed $\phi_{1}\psi_{1}+\phi_{2}\psi_{2} = \tfrac12+\tfrac{3xt}{2}$. Both families are independent.

**Step 2: the matrix.** Using $\int_{-1}^{1}1\,\mathrm{d}x=2$, $\int_{-1}^{1}x\,\mathrm{d}x=0$ and $\int_{-1}^{1}x^{2}\,\mathrm{d}x=\tfrac23$,
$$
A_{11}=\int_{-1}^{1}\tfrac12\cdot1 = 1,\quad
A_{12}=\int_{-1}^{1}\tfrac12\cdot3x = 0,\quad
A_{21}=\int_{-1}^{1}\tfrac{x}{2}\cdot1 = 0,\quad
A_{22}=\int_{-1}^{1}\tfrac{x}{2}\cdot3x = \tfrac32\cdot\tfrac23 = 1,
$$
so $A=\mathrm{I}$. (This is no accident: $1$ and $x$ are the first two Legendre polynomials, and $K$ is the truncation after two terms of the Legendre expansion of the delta function on $[-1,1]$.)

**Step 3: the characteristic values.** $\det(\mathrm{I}-\lambda\mathrm{I}) = (1-\lambda)^{2}$, so the only characteristic value is $\lambda=1$, and $\dim\ker(\mathrm{I}-A)=2$: it is doubly degenerate. The eigenfunctions are $\sum_{j}c_{j}\phi_{j}$ for arbitrary $c$, that is the whole span of $1$ and $x$. Check directly:
$$
\int_{-1}^{1}\frac{1+3xt}{2}\cdot 1\,\mathrm{d}t = \frac12\cdot 2 + \frac{3x}{2}\cdot 0 = 1,
\qquad
\int_{-1}^{1}\frac{1+3xt}{2}\,t\,\mathrm{d}t = 0+\frac{3x}{2}\cdot\frac23 = x,
$$
so $\mathcal{K}$ fixes both $1$ and $x$: $\lambda=1$ with a two-dimensional eigenspace, as predicted.

**First branch: $\lambda=\tfrac12$, $f(x)=x^{2}$.** Here $\det(\mathrm{I}-\tfrac12\mathrm{I})=\tfrac14\neq0$, so there is exactly one solution. The right-hand side is
$$
b_{1}=\int_{-1}^{1}\tfrac12 t^{2}\,\mathrm{d}t = \tfrac13 ,
\qquad
b_{2}=\int_{-1}^{1}\tfrac{t}{2}\,t^{2}\,\mathrm{d}t = 0 ,
$$
and $(\mathrm{I}-\tfrac12\mathrm{I})c = \tfrac12 c = b$ gives $c=(\tfrac23,0)$. Hence
$$
y(x) = x^{2}+\tfrac12\bigl(\tfrac23\cdot 1 + 0\cdot 3x\bigr) = x^{2}+\tfrac13 .
$$
Verify from scratch:
$$
\tfrac12\int_{-1}^{1}\frac{1+3xt}{2}\Bigl(t^{2}+\tfrac13\Bigr)\mathrm{d}t
=\tfrac14\int_{-1}^{1}\Bigl(t^{2}+\tfrac13\Bigr)\mathrm{d}t + \tfrac{3x}{4}\int_{-1}^{1}t\Bigl(t^{2}+\tfrac13\Bigr)\mathrm{d}t
=\tfrac14\Bigl(\tfrac23+\tfrac23\Bigr)+0 = \tfrac13 ,
$$
and adding $f=x^{2}$ returns $x^{2}+\tfrac13$, as required.

**Second branch, no solution: $\lambda=1$, $f(x)=x^{2}$.** Now $M=\mathrm{I}-A=0$, so $M^{*}=0$ and $\ker M^{*}=\mathbb{C}^{2}$: there are $k=2$ solvability conditions, $b_{1}=b_{2}=0$. But $b_{1}=\tfrac13\neq0$, so the equation
$$
y(x) = x^{2}+\int_{-1}^{1}\frac{1+3xt}{2}\,y(t)\,\mathrm{d}t
$$
has **no** solution. The conditions are the orthogonality statements $(f,1)=0$ and $(f,x)=0$ in disguise: the adjoint eigenfunctions are again $\operatorname{span}\{1,x\}$, because $K$ is real and symmetric and $\lambda=1$ is real, and $(x^{2},1)=\int_{-1}^{1}x^{2}\,\mathrm{d}x=\tfrac23\neq0$.

**Second branch, infinitely many solutions: $\lambda=1$, $f(x)=x^{2}-\tfrac13$.** This $f$ is the Legendre polynomial $P_{2}$ up to a factor, so $(f,1)=\tfrac23-\tfrac23=0$ and $(f,x)=0$: both conditions hold, and $b=0$. Then $Mc=0$ is satisfied by every $c\in\mathbb{C}^{2}$, and the solution set is
$$
y(x) = x^{2}-\tfrac13+\alpha+\beta x, \qquad \alpha,\beta\in\mathbb{C}\ \text{arbitrary},
$$
a two-parameter family, as part 3 requires. Check it: writing $y(t)=t^{2}-\tfrac13+\alpha+\beta t$, the orthogonality of $t^{2}-\tfrac13$ to both $1$ and $t$ leaves
$$
\int_{-1}^{1}\frac{1+3xt}{2}y(t)\,\mathrm{d}t
= \frac12\int_{-1}^{1}\alpha\,\mathrm{d}t + \frac{3x}{2}\int_{-1}^{1}\beta t^{2}\,\mathrm{d}t
= \alpha+\beta x ,
$$
so $f+\mathcal{K}y = x^{2}-\tfrac13+\alpha+\beta x = y$, for every $\alpha$ and $\beta$. Every number in this example was checked symbolically.
:::

:::application{provenance=original}
**Separable potentials in nuclear and few-body physics.** The Lippmann–Schwinger equation for scattering off a potential $V$ is a Fredholm equation of the second kind whose kernel involves $V$; it is solvable in closed form if $V$ is separable in momentum space, $\langle k\lvert V\rvert k'\rangle = \sum_{j}g_{j}(k)\,\lambda_{j}\,g_{j}(k')$. This is exactly the situation of the method above with $n$ small, so the $T$-matrix comes out as the inverse of an $n\times n$ matrix instead of as the solution of an integral equation. The Yamaguchi potential ($n=1$, $g(k)=1/(k^{2}+\beta^{2})$) is the textbook case, and separable expansions of realistic nucleon–nucleon potentials are what make three-body Faddeev calculations tractable. A rank-$n$ separable potential also supports at most $n$ bound states in each partial wave — but that is the finite rank at work, not part 2 of the statement applied to the Lippmann–Schwinger equation: its kernel contains the free resolvent and so depends on the energy, which means the parameter is not held fixed and the characteristic values move as the energy moves. What does transfer is the shape of the argument: because $V$ has rank $n$, a bound state at energy $E$ forces the wavefunction into the $n$-dimensional span of the functions $(H_{0}-E)^{-1}g_{j}$, and the bound-state condition is the vanishing of one $n\times n$ determinant built from the form factors and the free resolvent. The *count* does not follow from the size of that determinant: its entries depend on $E$, and a determinant of $E$-dependent entries can vanish at more than $n$ energies. It follows from the rank itself, by the Birman–Schwinger argument. Take first the attractive case $V\le 0$, in which the counting is usually stated: a bound state at $E<0$ makes $1$ an eigenvalue of the Birman–Schwinger operator $\lvert V\rvert^{1/2}(H_{0}-E)^{-1}\lvert V\rvert^{1/2}$, which inherits rank at most $n$ from $V$ and so has at most $n$ nonzero eigenvalues at any $E$; monotonicity of those eigenvalues in $E$ then allows at most $n$ bound states in all. The hypothesis $V\le 0$ is needed for that operator to be the right one. For a potential of either sign, write $V=U\lvert V\rvert$ with $U=\operatorname{sgn}V$ and $\varphi=\lvert V\rvert^{1/2}\psi$; then $H\psi=E\psi$ rearranges to $\varphi=-\lvert V\rvert^{1/2}(H_{0}-E)^{-1}U\lvert V\rvert^{1/2}\varphi$, so it is $-\lvert V\rvert^{1/2}(H_{0}-E)^{-1}U\lvert V\rvert^{1/2}$ that has eigenvalue $1$, and $U$ collapses to $-\mathrm{I}$ only when $V\le 0$. The rank bound is unaffected by the extra factor, so the count of at most $n$ bound states survives for either sign; only the self-adjointness used for the monotonicity argument needs the attractive case.

**Galerkin and boundary-element discretisation.** Approximating a general kernel by a separable one is not merely a trick for exercises: it is the standard numerical method. Choose *orthonormal* basis functions $\chi_{1},\dots,\chi_{N}$ for the unknown — orthonormality is what makes the next step a projection — replace $K$ by $\sum_{i,j}K_{ij}\chi_{i}(x)\overline{\chi_{j}(t)}$ with $K_{ij}=(\mathcal{K}\chi_{j},\chi_{i})$, which is the orthogonal projection of $\mathcal{K}$ onto $\operatorname{span}\{\chi_{i}\}$ on both sides. The recipe above then gives $A=K$ and $b=K\hat f$, where $\hat f_{i}=(f,\chi_{i})$, so the integral equation becomes the $N\times N$ system $(\mathrm{I}-\lambda K)c=K\hat f$ with answer $y=f+\lambda\sum_{j}c_{j}\chi_{j}$. A Galerkin boundary-element code assembles and factorises the same matrix $\mathrm{I}-\lambda K$, but in a different unknown: projecting the equation onto each $\chi_{i}$ gives $(\mathrm{I}-\lambda K)\hat y=\hat f$ for the coefficients $\hat y_{i}=(y,\chi_{i})$ of the solution itself. The two are one system seen through the change of unknown $\hat y=\hat f+\lambda c$, which is what $y=f+\lambda\sum_{j}c_{j}\chi_{j}$ says after projection. (A Nyström code reaches a system of the same shape by replacing the integral with a quadrature rule instead of projecting; the matrix is then $K(x_{i},x_{j})$ times the weights, and no orthonormal family is involved.) Step 3 becomes the numerical eigenvalue problem for $K$ (:ref[]{to=num.eigenvalue-algorithms}), and the characteristic values of the discretised problem converge to those of the original as $N$ grows.

**Where the alternative bites: the Neumann problem and its discrete twin.** The degenerate branch of part 3 is not a curiosity. The potential problem $\nabla^{2}u=0$ in a region with prescribed normal derivative on the boundary becomes, by the single-layer representation $u=\mathcal{S}\sigma$, the second-kind boundary integral equation $(\pm\tfrac12\mathrm{I}+\mathcal{K}^{*})\sigma=f$, in which $\mathcal{K}$ is the double-layer operator, $\mathcal{K}^{*}$ its adjoint, and the sign is fixed by the side from which the normal derivative is taken. It is the **adjoint** homogeneous equation $(\pm\tfrac12\mathrm{I}+\mathcal{K})v=0$ that the constants solve, because $\mathcal{K}1=\mp\tfrac12$ on a smooth closed boundary. The equation's own homogeneous version does not have them: its null space is spanned by the equilibrium (capacity) density of the surface, which is constant only for a disc or a ball. Part 3 does not say otherwise — it gives the two null spaces the same *dimension*, not the same elements — and the dimension is all that is wanted here. So $k=1$ and the adjoint null space is spanned by a nonzero constant $g$. The condition is on the data, not on $g$: with $g$ constant, $(f,g)=\overline{g}\oint f\,\mathrm{d}S$, so the solvability condition $(f,g)=0$ reads
$$
\oint f\,\mathrm{d}S = 0 ,
$$
the vanishing of the integral of the prescribed normal derivative over the boundary — the physical statement that the total flux through the closed surface must vanish, as it must for a source-free region. ($\oint g\,\mathrm{d}S$, by contrast, is the constant times the area and never vanishes; reading the condition off the wrong slot would produce a requirement that can never be met.) The solution is then pinned down only up to an added constant — one free parameter, matching $k=1$ (:ref[]{to=vcalc.green-identities}, :ref[]{to=green.fredholm-alternative}). A code that ignores this gets a singular matrix at step 4 and, worse, a nearly singular one after discretisation; the cure is to impose the flux condition on the data and pin the constant by an extra equation, which is precisely the $k$-parameter freedom made explicit.
:::
