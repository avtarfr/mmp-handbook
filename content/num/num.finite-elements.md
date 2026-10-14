---
id: num.finite-elements
title: The finite element method
kind: method
level: advanced
summary: Replaces the weak formulation of an elliptic boundary-value problem by the same equation tested only against piecewise-linear hat functions on a triangulation, which turns it into a sparse symmetric positive-definite linear system; proves Galerkin orthogonality and Cea's quasi-optimality bound, states the interpolation estimate that converts quasi-optimality into an $O(h)$ energy-norm error, and shows on a worked mesh why the method is the one that copes with awkward geometry.
prereqs: [pde.weak-solutions-sobolev, pde.lax-milgram, linalg.quadratic-forms]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§8.5 (Finite element method): the triangulation of $D$ by $D_N$, the interior vertices $V_1,\\dots,V_N$, the trial functions $v_i$ equal to $1$ at $V_i$ and $0$ at every other vertex and linear on each triangle, their pyramid graphs, the approximation (2) $u_N=\\sum U_i v_i$, the derivation of (3) from Green's first identity, the restriction of (3) to the $N$ trial functions, the definitions (4) of $m_{ij}=\\int_D\\nabla v_i\\cdot\\nabla v_j$ and $f_j=\\int_D f v_j$, the system (5), the observations that $U_k$ is the value of $u_N$ at $V_k$ and that $m_{ij}$ is sparse, the bilinear and quadratic variants, the one-dimensional tent functions of Exercise 3 with $\\int (v_j')^2=2$ and $\\int v_j'v_{j+1}'=-1$, the diffusion-equation system (7) with the matrices $M$ (stiffness) and $K$ (mass) displayed on p. 226, and the Euler and backward-Euler steppings of it, pp. 222–227"
    pages: "222-227"
    role: the whole construction at the level this unit needs — triangulation, hat trial functions, the passage from the strong form through Green's identity to the Galerkin equations, the stiffness and load entries, sparsity, the statement that the coefficients are the nodal values, the one-dimensional tent elements and the tridiagonal matrix they produce, and the naming of the matrices
  - work: stakgold-holst-2011
    loc: "§10.2, the Petrov–Galerkin and Galerkin methods (10.2.8)–(10.2.9) and their reduction to the linear system (10.2.13), the linear problem (10.2.14)–(10.2.15), the boundedness, functional-bound and inf–sup conditions (10.2.19)–(10.2.21) with the separate LBB condition (10.2.22) on the subspaces, the near-best or quasi-optimality target (10.2.16), Theorem 10.2.9 (Ladyzhenskaya–Babuska–Brezzi) with the bound $(1+M/m)E_{X_h}(u)$ and its proof through the generalized projection $P_h$ and the estimate $m\\lVert P_hu\\rVert\\le M\\lVert u\\rVert$, and Lemma 10.2.3 (Kato, Xu–Zikatanov) with the improved Hilbert-space constant $M/m$, pp. 675–679; §10.5, Assumptions 10.5.1–10.5.3 (FEM1, FEM2, FEM3) and Definition 10.5.1 of a conforming finite element method, the shape-regularity and quasi-uniformity conditions (10.5.3)–(10.5.4) with $h_K$ and $\\rho_K$ the circumscribed and inscribed sphere diameters, the relation $n=O(h^{-d})$, the reference element and affine-equivalent families, the Lagrange property (10.5.5), Theorem 10.5.1 ($X_h\\subset W^{1,p}$ from elementwise construction plus global continuity) with its Green's-formula proof, the global interpolant $I_hu=\\sum u(x_i)\\phi_i$, the chain $\\lVert u-u_h\\rVert\\le C\\inf\\lVert u-v_h\\rVert\\le C\\lVert u-I_hu\\rVert$, Lemmas 10.5.1–10.5.3 and Theorem 10.5.2 (the interpolation estimate with the factor $h_K^{k+1}/\\rho_K^{m}$), pp. 736–745"
    pages: "675-679, 736-745"
    role: the abstract Galerkin frame and the quasi-optimality theorem with its constant and the Hilbert-space improvement; the three defining requirements of a conforming finite element method; shape regularity and quasi-uniformity; the proof that elementwise polynomials plus global continuity land in $H^1$; and the interpolation estimate that turns quasi-optimality into a rate in $h$
  - work: evans-2010
    loc: "§6.2.1, Theorem 1 (Lax–Milgram) with the hypotheses $\\lvert B[u,v]\\rvert\\le\\alpha\\lVert u\\rVert\\lVert v\\rVert$ and $\\beta\\lVert u\\rVert^{2}\\le B[u,u]$, pp. 297–299; §6.3.2, Theorem 4 (Boundary $H^{2}$-regularity), hypotheses (38)–(41): for $\\partial U$ of class $C^{2}$, $f\\in L^{2}(U)$ and $u\\in H^{1}_0(U)$ a weak solution of $Lu=f$, $u=0$ on $\\partial U$, one has $u\\in H^{2}(U)$ with the estimate (42) $\\lVert u\\rVert_{H^{2}}\\le C(\\lVert f\\rVert_{L^{2}}+\\lVert u\\rVert_{L^{2}})$, p. 315"
    pages: "297-299, 315"
    role: the two hypotheses of the Lax–Milgram theorem in the form used for the discrete problem, and the elliptic regularity theorem that is what actually puts the exact solution into $H^{2}$ so that the interpolation estimate may be applied
---

:::definition[Triangulation, hat functions and the Galerkin system]{provenance=adapted src="strauss-2008:§8.5, Figures 1–2 and Eqs. (1)–(5), pp. 222–224; stakgold-holst-2011:§10.5, Assumptions 10.5.1–10.5.3 and Definition 10.5.1, pp. 737–739"}
Let $\Omega\subset\mathbb{R}^{2}$ be a bounded polygon. The model problem is the one Strauss takes: Poisson's equation on $\Omega$ with the value of the unknown prescribed to be zero all along the boundary,

$$
-\Delta u = f \ \text{ in }\Omega,\qquad u=0 \ \text{ on }\partial\Omega ,
$$

in the weak form of :ref[]{to=pde.weak-solutions-sobolev}: find $u\in H^{1}_{0}(\Omega)$ with

$$
a(u,v)\;:=\;\int_\Omega \nabla u\cdot\nabla v \,\mathrm{d}x \;=\;\int_\Omega f v\,\mathrm{d}x\;=:\;\ell(v)
\qquad\text{for every } v\in H^{1}_{0}(\Omega) .
$$

**Triangulation.** A **triangulation** $\mathcal{T}_h$ of $\Omega$ is a finite family of closed triangles whose union is $\overline\Omega$, with disjoint interiors, and such that the intersection of two distinct triangles is empty, a common vertex, or a common whole edge. Stakgold and Holst call the last condition *conformity* and state it for elements of any shape in any dimension; it is what forbids a vertex of one triangle from landing in the middle of a neighbour's edge. Write $h_K$ for the diameter of the smallest ball containing $K$ and $\rho_K$ for the diameter of the largest ball inside $K$, put $h=\max_K h_K$, and call the family **shape regular** with constant $\sigma$ if

$$
\frac{h_K}{\rho_K}\le\sigma\qquad\text{for every } K\in\mathcal{T}_h ,
$$

which says no triangle is allowed to become arbitrarily thin as the mesh is refined.

**The space and its basis.** Let $V_1,\dots,V_N$ be the vertices of the triangulation that lie in the interior of $\Omega$, and let

$$
V_h=\bigl\{\,v\in C(\overline\Omega)\ :\ v\ \text{is affine on each } K\in\mathcal{T}_h,\ v=0 \text{ on }\partial\Omega\,\bigr\} .
$$

For each interior vertex $V_i$ let $v_i\in V_h$ be the unique element with

$$
v_i(V_j)=\delta_{ij} \qquad (j=1,\dots,N)
$$

and $v_i=0$ at the boundary vertices. Each $v_i$ is determined on each triangle by its three vertex values, so it exists and is unique; its graph is a pyramid of height $1$ with apex over $V_i$, supported on the triangles that touch $V_i$. These are the **hat functions** (Strauss's trial functions). They are a basis of $V_h$, and the expansion of any $v\in V_h$ reads off its nodal values: $v=\sum_j v(V_j)\,v_j$.

That $V_h\subset H^{1}_0(\Omega)$ is a small theorem, not a definition: a function that is a polynomial on each element and merely continuous across the edges has a weak gradient, because in the integration by parts the jump terms on each interior edge appear twice with opposite normals and cancel. Stakgold and Holst prove exactly this.

**The discrete problem.** The **Galerkin approximation** is: find $u_h\in V_h$ with

$$
a(u_h,v_h)=\ell(v_h)\qquad\text{for every } v_h\in V_h .
$$

Writing $u_h=\sum_i U_i v_i$ and testing against each basis function in turn turns this into the $N\times N$ linear system

$$
\sum_{i=1}^{N} A_{ji}\,U_i = F_j \quad (j=1,\dots,N),
\qquad
A_{ji}=\int_\Omega \nabla v_i\cdot\nabla v_j\,\mathrm{d}x,
\qquad
F_j=\int_\Omega f\,v_j\,\mathrm{d}x .
$$

$A$ is the **stiffness matrix** and $F$ the **load vector**; when a time derivative is present the matrix $\int_\Omega v_iv_j$ also appears and is called the **mass matrix**. Two properties are immediate. $A$ is symmetric, and it is positive definite because $\xi^{\mathsf T}A\xi=\int_\Omega\lvert\nabla(\sum_i\xi_iv_i)\rvert^{2}\ge0$ with equality only if $\sum\xi_iv_i$ is constant, hence zero by the boundary condition (:ref[]{to=linalg.quadratic-forms}). And $A$ is **sparse**: $A_{ji}=0$ unless $V_i$ and $V_j$ are joined by an edge, because otherwise the supports of $v_i$ and $v_j$ meet in a set of measure zero. Finally $U_k=u_h(V_k)$, so the unknowns are the nodal values themselves.

**A warning about names.** Strauss writes the matrix with entries $\int\nabla v_i\cdot\nabla v_j$ as $M$ and calls it the stiffness matrix, and writes the matrix with entries $\int v_iv_j$ as $K$ and calls it the mass matrix. The names are his and are standard; the letters are the reverse of the usual engineering ones, in which $K$ is the stiffness and $M$ the mass. This unit keeps Strauss's names and uses neutral letters $A$ for the stiffness matrix and $\ell$, $F$ for the load.
:::

:::statement[Galerkin orthogonality, quasi-optimality, and the rate]{provenance=adapted src="stakgold-holst-2011:§10.2, Eqs. (10.2.16) and (10.2.19)–(10.2.22), Theorem 10.2.9 and Lemma 10.2.3, pp. 677–679; stakgold-holst-2011:§10.5, Theorem 10.5.2, pp. 744–745; evans-2010:§6.2.1, Theorem 1, pp. 297–299; evans-2010:§6.3.2, Theorem 4, p. 315"}
Let $H$ be a real Hilbert space, let $a:H\times H\to\mathbb{R}$ be bilinear with

$$
\lvert a(u,v)\rvert\le M\lVert u\rVert\,\lVert v\rVert\quad (M>0),
\qquad
a(u,u)\ \ge\ m\lVert u\rVert^{2}\quad (m>0),
$$

and let $\ell$ be a bounded linear functional on $H$. Let $V_h\subset H$ be a closed subspace.

**1. Both problems are uniquely solvable.** There is exactly one $u\in H$ with $a(u,v)=\ell(v)$ for all $v\in H$, and exactly one $u_h\in V_h$ with $a(u_h,v_h)=\ell(v_h)$ for all $v_h\in V_h$. This is the Lax–Milgram theorem of :ref[]{to=pde.lax-milgram} applied twice: the hypotheses on $a$ are inherited by the subspace, which is why no separate condition on $V_h$ is needed. (For a non-symmetric Petrov–Galerkin method, where the trial and test spaces differ, the inherited condition fails and must be imposed separately; Stakgold and Holst call it the Ladyzhenskaya–Babuska–Brezzi condition.)

**2. Galerkin orthogonality.**

$$
a(u-u_h,\,v_h)=0\qquad\text{for every } v_h\in V_h .
$$

**3. Quasi-optimality (Cea).**

$$
\lVert u-u_h\rVert \;\le\; \frac{M}{m}\,\inf_{v_h\in V_h}\lVert u-v_h\rVert .
$$

The Galerkin solution is, up to the factor $M/m$, the best approximation to $u$ available in $V_h$. If $a$ is in addition symmetric, then $a$ is an inner product, $u_h$ is the $a$-orthogonal projection of $u$ onto $V_h$, and in the energy norm $\lVert v\rVert_a=a(v,v)^{1/2}$ the constant is exactly $1$:
$\lVert u-u_h\rVert_a=\inf_{v_h}\lVert u-v_h\rVert_a$.

**4. The interpolation estimate.** Let $\mathcal{T}_h$ be shape regular with constant $\sigma$ and let $I_h w$ denote the element of $V_h$ that agrees with $w$ at every vertex. There is a constant $C$ depending only on $\sigma$ with

$$
\lVert w-I_hw\rVert_{L^{2}(\Omega)}\le C h^{2}\lvert w\rvert_{H^{2}(\Omega)},
\qquad
\lvert w-I_hw\rvert_{H^{1}(\Omega)}\le C h\,\lvert w\rvert_{H^{2}(\Omega)},
$$

for every $w\in H^{2}(\Omega)\cap H^{1}_0(\Omega)$. This is the case $k=1$, $p=q=2$, $m=0$ and $m=1$ of the general estimate of Stakgold and Holst, which for an affine-equivalent family reads

$$
\lvert w-I_Kw\rvert_{m,p,K}\ \le\ C\bigl(\mathrm{meas}(\Omega)\bigr)^{(1/q)-(1/p)}\,\frac{h_K^{\,k+1}}{\rho_K^{\,m}}\,\lvert w\rvert_{k+1,p,K}
$$

on each element $K$; at $p=q$ the measure factor is $1$, and shape regularity converts $h_K^{k+1}/\rho_K^{m}$ into $\sigma^{m}h_K^{k+1-m}$.

**5. The a priori error bound.** Combining 3 and 4 with $H=H^{1}_0(\Omega)$ and the Dirichlet form $a$: if the exact solution lies in $H^{2}(\Omega)$ then

$$
\lVert u-u_h\rVert_{H^{1}(\Omega)}\ \le\ C' h\,\lvert u\rvert_{H^{2}(\Omega)} .
$$

That $u\in H^{2}$ is a hypothesis about the domain, not a free gift: Evans's elliptic regularity theorem supplies it when $f\in L^{2}$ and $\partial\Omega$ is of class $C^{2}$, and it is also true for a convex polygon, but it fails at a re-entrant corner.
:::

:::idea{provenance=original}
Everything turns on one observation. The exact solution satisfies the weak equation against *every* test function; the approximation satisfies it against the test functions we kept. Subtracting, the error is invisible to the whole of $V_h$: that is Galerkin orthogonality, and it is the statement that $u_h$ is a projection of $u$ along $V_h$.

A projection cannot be much worse than the best approximation, and in an inner-product space it *is* the best approximation. Coercivity and boundedness say that $a$ is a distorted inner product, distorted by no more than the factor $M/m$, so the Galerkin solution is within that factor of best. This is Cea's lemma, and it splits the problem cleanly in two: an analysis question (how good is the projection?) answered once and for all, and an approximation-theory question (how well can piecewise-linear functions approximate $u$?) answered by Taylor's theorem on each triangle.

The second question is where the rate comes from. On a triangle of size $h$ the linear interpolant of a $C^{2}$ function is wrong by $O(h^{2})$ and its gradient by $O(h)$; shape regularity is exactly the condition that stops the gradient estimate from degenerating when a triangle is thin. Multiply the two answers and the energy-norm error is $O(h)$.
:::

:::proof[Parts 2 and 3; part 4 by Taylor's theorem]{provenance=adapted src="stakgold-holst-2011:§10.2, proof of Theorem 10.2.9 and Lemma 10.2.3, pp. 678–679"}
**2.** The exact solution satisfies $a(u,v)=\ell(v)$ for every $v\in H$, and in particular for every $v_h\in V_h$, because $V_h\subset H$. The discrete solution satisfies $a(u_h,v_h)=\ell(v_h)$ for the same $v_h$. Subtracting and using bilinearity in the first slot gives $a(u-u_h,v_h)=0$. The hypothesis used is only the *conformity* of the method, $V_h\subset H$; nothing else.

**3.** Let $v_h\in V_h$ be arbitrary. Coercivity applied to the error, then part 2 with the test function $u_h-v_h\in V_h$, then boundedness:

$$
m\lVert u-u_h\rVert^{2}
\ \le\ a(u-u_h,\,u-u_h)
\ =\ a\bigl(u-u_h,\,u-u_h\bigr)+a\bigl(u-u_h,\,u_h-v_h\bigr)
$$

$$
=\ a\bigl(u-u_h,\,u-v_h\bigr)
\ \le\ M\,\lVert u-u_h\rVert\,\lVert u-v_h\rVert .
$$

The added term vanishes by part 2 since $u_h-v_h\in V_h$; the two arguments then combine by bilinearity. If $\lVert u-u_h\rVert=0$ the claim is trivial, and otherwise dividing by $m\lVert u-u_h\rVert$ gives $\lVert u-u_h\rVert\le (M/m)\lVert u-v_h\rVert$. Taking the infimum over $v_h$ gives part 3.

Stakgold and Holst reach the constant $1+M/m$ by bounding the norm of the generalized projection $P_h$ and writing $u-u_h=(I-P_h)(u-v_h)$, then remove the leading $1$ in the Hilbert-space case by the Kato–Xu–Zikatanov lemma, which says that a non-trivial idempotent $P\ne 0,I$ on a Hilbert space satisfies $\lVert P\rVert=\lVert I-P\rVert$. The direct argument above gives $M/m$ at once in the Hilbert setting, and is the one we use.

**Symmetric case.** If $a(v,w)=a(w,v)$ then coercivity and boundedness make $a$ an inner product whose norm $\lVert\cdot\rVert_a$ is equivalent to $\lVert\cdot\rVert$. Part 2 says $u-u_h\perp_a V_h$, so for every $v_h$, by Pythagoras in that inner product,

$$
\lVert u-v_h\rVert_a^{2}=\lVert u-u_h\rVert_a^{2}+\lVert u_h-v_h\rVert_a^{2}\ \ge\ \lVert u-u_h\rVert_a^{2} ,
$$

with equality exactly at $v_h=u_h$. So in the energy norm the Galerkin solution is *the* best approximation; the factor $M/m$ in part 3 is the price of measuring in a different norm.

**4, in one dimension and in outline.** On an interval $[x_{j},x_{j+1}]$ of length $h$ let $e=w-I_hw$, which vanishes at both endpoints. By Rolle's theorem $e'$ vanishes at some interior $\xi$, so for any $x$ in the interval $e'(x)=\int_\xi^x w''$, and by Cauchy–Schwarz $\lvert e'(x)\rvert^{2}\le h\int\lvert w''\rvert^{2}$; integrating over the interval gives $\int\lvert e'\rvert^{2}\le h^{2}\int\lvert w''\rvert^{2}$. Since $e$ vanishes at $x_j$, $\lvert e(x)\rvert^2\le h\int\lvert e'\rvert^{2}$ in the same way, and a second integration gives $\int\lvert e\rvert^{2}\le h^{4}\int\lvert w''\rvert^{2}$. Summing over the elements gives part 4 with $C=1$ in one dimension. In two dimensions the same two powers of $h$ appear, by mapping each triangle affinely to a fixed reference triangle, estimating there by the Bramble–Hilbert argument, and mapping back; the Jacobian factors produce $h_K^{k+1}/\rho_K^{m}$, which is where shape regularity enters. Stakgold and Holst give this chain as Lemmas 10.5.1–10.5.3 and Theorem 10.5.2 and attribute the detailed proof to Ciarlet. $\square$
:::

:::remark[Where the hypotheses are used, and what goes wrong without them]{provenance=original}
**Conformity ($V_h\subset H^{1}_0$)** is the only hypothesis in Galerkin orthogonality, and it is why continuity across edges matters: a piecewise-linear function with a jump across an edge is not in $H^1$, its weak gradient picks up a delta on the edge, and the whole argument collapses. Non-conforming elements are used in practice, but they need their own error analysis with an extra consistency term.

**Coercivity** is what makes $A$ invertible and the error bound finite. For the Dirichlet form it comes from the Poincare inequality (:ref[]{to=pde.lax-milgram}), which uses the boundary condition; drop the boundary condition and $a(1,1)=0$, the constant function is in the kernel, and the pure Neumann problem is solvable only up to a constant and only for $f$ with mean zero.

**Shape regularity** is used only in part 4, and the bound genuinely fails without it. Take the flat triangle $K$ with vertices $(0,0)$, $(h,0)$, $(h/2,\varepsilon)$, whose largest angle tends to $\pi$ as $\varepsilon\to0$, and interpolate $w(x,y)=x^{2}$. The affine function through the three vertex values $0$, $h^{2}$, $h^{2}/4$ is $p(x,y)=hx-\tfrac{h^{2}}{4\varepsilon}y$, so $\partial_y(w-p)=h^{2}/(4\varepsilon)$ on all of $K$ and

$$
\lvert w-I_Kw\rvert_{H^1(K)}^{2}\ \ge\ \frac{h^{4}}{16\varepsilon^{2}}\cdot\mathrm{meas}(K)=\frac{h^{5}}{32\varepsilon},
\qquad
h_K^{2}\,\lvert w\rvert^{2}_{H^{2}(K)}=h^{2}\cdot 4\,\mathrm{meas}(K)=2h^{3}\varepsilon .
$$

Their ratio is $h^{2}/(64\varepsilon^{2})$, which is unbounded: the clean estimate $\lvert w-I_Kw\rvert_{H^1}\le Ch_K\lvert w\rvert_{H^2}$ is false for a degenerating family. The estimate that survives is the one Stakgold and Holst actually state, with $h_K^{2}/\rho_K$ in place of $h_K$; here $\rho_K$ is of order $\varepsilon$, that factor is of order $h^{2}/\varepsilon$, and the bound it gives, of order $h^{5}/\varepsilon$ for the square of the seminorm, matches the true error. So the error is not mysteriously large — it is exactly as large as the general theorem says, and shape regularity is the hypothesis that turns the general theorem into a rate in $h$. A mesh refined by flattening rather than shrinking its triangles need not converge in $H^1$ at all. Quasi-uniformity, the stronger condition $h_{K_1}/h_{K_2}\le\nu$ that Stakgold and Holst state alongside, is *not* needed for the bound above; it is deliberately broken by adaptive methods, which refine only where an error indicator is large.

**$u\in H^{2}$** is used in part 5 and nowhere else. On a convex polygon it holds; on an L-shaped domain the solution behaves like $r^{2/3}\sin(2\theta/3)$ near the re-entrant corner, which is in $H^1$ but not in $H^2$, and the uniform-mesh rate drops from $h$ to $h^{2/3}$ in the energy norm. Recovering the full rate there requires grading the mesh towards the corner — which is precisely the freedom that shape regularity without quasi-uniformity leaves open.

**What quasi-optimality does not say.** Part 3 bounds the error by the best approximation error; it says nothing about whether the best approximation is any good. All of the approximation power of the method is in part 4, and all of the geometry is in the triangulation. This separation is the reason the finite element method can be analysed at all on a domain whose shape no coordinate system fits.
:::

:::method[Assembling and solving]{provenance=original}
1. **Triangulate.** Produce a conforming, shape-regular mesh of $\overline\Omega$; record the vertex coordinates and, for each triangle, the indices of its three vertices. Mark the vertices on $\partial\Omega$ as constrained.
2. **Compute the element matrices.** On a triangle $K$ with vertices $P_1,P_2,P_3$, the hat function $\lambda_r$ associated with $P_r$ is affine with $\lambda_r(P_s)=\delta_{rs}$, so $\nabla\lambda_r$ is a constant vector on $K$. Explicitly, with $\mathrm{area}(K)=\tfrac12\lvert\det[P_2-P_1,\,P_3-P_1]\rvert$,
   $$
   \nabla\lambda_r=\frac{1}{2\,\mathrm{area}(K)}\,\bigl(P_{r+2}-P_{r+1}\bigr)^{\perp},
   $$
   where the indices are read modulo $3$ in $\{1,2,3\}$, $(a,b)^{\perp}=(-b,a)$, and $P_1,P_2,P_3$ are listed anticlockwise. (Check on the triangle $(0,0),(1,0),(0,1)$: $\lambda_1=1-x-y$, and the formula gives $\bigl((0,1)-(1,0)\bigr)^{\perp}=(-1,-1)$.) The $3\times3$ element stiffness matrix is then $A^K_{rs}=\mathrm{area}(K)\,\nabla\lambda_r\cdot\nabla\lambda_s$, exactly, because the integrand is constant.
3. **Assemble.** Initialise $A=0$, $F=0$ and loop over triangles, adding $A^{K}_{rs}$ into the global entry $(i_r,i_s)$ for each pair of local vertices and $\int_K f\lambda_r$ into $F_{i_r}$. Skip rows and columns belonging to constrained vertices (or keep them and impose $U=0$ there). The whole loop is $O(\#\mathcal{T}_h)=O(N)$.
4. **Integrate the load.** $\int_K f\lambda_r$ is rarely available in closed form; the usual choice is a quadrature rule exact for the polynomial degree in play (:ref[]{to=num.quadrature}). For linear elements, the one-point rule $\int_K g\approx \mathrm{area}(K)\,g(\text{centroid})$ is exact for affine $g$ and enough to preserve the $O(h)$ rate. For $f\equiv1$ it gives the exact value $\int_K\lambda_r=\mathrm{area}(K)/3$.
5. **Solve.** $A$ is symmetric positive definite and sparse, with about $7$ non-zeros per row for a typical triangulation. Use the Cholesky factorisation of a banded or reordered matrix for moderate $N$, or the conjugate gradient method preconditioned so that the iteration count does not grow with $N$ (:ref[]{to=num.linear-systems-numerics}, :ref[]{to=num.relaxation-methods}). An unpreconditioned iteration is slow because $\operatorname{cond}(A)=O(h^{-2})$, the same growth as for the difference Laplacian.
6. **Check the rate.** Solve on a mesh and on its uniform refinement and compare: the energy-norm error should fall by $2$ and the $L^{2}$ error by $4$. A rate below that is the usual sign that the solution is not in $H^{2}$, that the quadrature in step 4 is too crude, or that the mesh is degenerating.
7. **For a time-dependent problem** keep the same space and leave the time variable continuous: $K\,\dot U = -\kappa A\,U + F(t)$ with $K$ the mass matrix $\int v_iv_j$, then step in time by any method of :ref[]{to=num.ode-integrators}. Strauss writes out both the forward and the backward Euler versions; the backward one requires solving with $K+\kappa\,\Delta t\,A$ at each step, which is the price of avoiding the $\Delta t=O(h^{2})$ restriction of :ref[]{to=num.stiffness}.
:::

:::example[One dimension exactly, two dimensions on four triangles]{provenance=original}
**(a) A one-dimensional problem solved completely.** Take

$$
-u''=f \ \text{ on } (0,1),\qquad u(0)=u(1)=0,\qquad f(x)=\pi^{2}\sin\pi x,
$$

whose exact solution is $u(x)=\sin\pi x$. Use the uniform mesh $x_j=jh$, $h=1/n$, with the tent functions $v_j$ of the definition. Two integrals are needed.

*Stiffness.* $v_j'=1/h$ on $(x_{j-1},x_j)$ and $-1/h$ on $(x_j,x_{j+1})$, so

$$
A_{jj}=\int_0^1 (v_j')^{2}=2h\cdot\frac1{h^{2}}=\frac2h,
\qquad
A_{j,j+1}=\int_{x_j}^{x_{j+1}}\!\!\Bigl(-\frac1h\Bigr)\Bigl(\frac1h\Bigr)=-\frac1h ,
$$

and $A_{ji}=0$ for $\lvert i-j\rvert\ge2$. So $A=h^{-1}\mathrm{tridiag}(-1,2,-1)$, which is Strauss's tridiagonal matrix with $2$ on the diagonal and $-1$ beside it, divided by $h$.

*Load.* With $\int_{0}^{h}\frac{t}{h}\sin\bigl(\pi(x_j-h+t)\bigr)\mathrm{d}t$ and its mirror image combined,

$$
F_j=\pi^{2}\!\int_0^1 \sin(\pi x)\,v_j(x)\,\mathrm{d}x=\frac{2\bigl(1-\cos\pi h\bigr)}{h}\,\sin(\pi x_j) .
$$

*Solving.* Try $U_j=c\sin(\pi x_j)$. The left side of the $j$th equation is

$$
\frac{c}{h}\bigl(2\sin\pi x_j-\sin\pi x_{j-1}-\sin\pi x_{j+1}\bigr)
=\frac{c}{h}\bigl(2-2\cos\pi h\bigr)\sin\pi x_j ,
$$

using $\sin(\theta\pm\pi h)=\sin\theta\cos\pi h\pm\cos\theta\sin\pi h$, whose $\cos\theta$ terms cancel. Comparing with $F_j$ gives $c=1$. So

$$
U_j=\sin(\pi x_j)=u(x_j)\quad\text{exactly, at every node and for every }h .
$$

With $h=\tfrac14$: $A=4\,\mathrm{tridiag}(-1,2,-1)$, $F=\bigl(8-4\sqrt2\bigr)\bigl(\tfrac{\sqrt2}{2},1,\tfrac{\sqrt2}{2}\bigr)=(1.656854,\,2.343146,\,1.656854)$, and the solution of the $3\times3$ system is $U=(\tfrac{\sqrt2}{2},1,\tfrac{\sqrt2}{2})$.

*Why exact?* Not an accident of this $f$. Fix a node $x_k$ and let $G_k$ be the Green's function $G(\cdot,x_k)$ of the problem, so $u(x_k)=\int_0^1 G_k f$ and $a(w,G_k)=w(x_k)$ for every $w\in H^1_0$ (:ref[]{to=green.green-function-bvp}). For $-\mathrm{d}^2/\mathrm{d}x^2$ on an interval, $G_k$ is piecewise linear with its only kink at $x_k$ — a node — so $G_k\in V_h$. Galerkin orthogonality then gives
$u(x_k)-u_h(x_k)=a(u-u_h,\,G_k)=0$. In two dimensions the Green's function has a logarithmic singularity and is not in $V_h$, and nodal exactness is lost.

*The error between the nodes is not zero,* and this is what carries the rate. Computing $\lVert u-u_h\rVert_{L^{2}}$ and $\lvert u-u_h\rvert_{H^{1}}$ exactly, element by element:

| $n$ | $h$ | $\lVert u-u_h\rVert_{L^2}$ | ratio | $\lvert u-u_h\rvert_{H^1}$ | ratio |
|---|---|---|---|---|---|
| $4$  | $0.25$   | $3.928435\times10^{-2}$ | — | $0.4985085$ | — |
| $8$  | $0.125$  | $9.920920\times10^{-3}$ | $3.960$ | $0.2511818$ | $1.9847$ |
| $16$ | $0.0625$ | $2.486501\times10^{-3}$ | $3.990$ | $0.1258332$ | $1.9962$ |

The ratios approach $4$ and $2$: $O(h^{2})$ in $L^{2}$ and $O(h)$ in $H^{1}$, as parts 4 and 5 predict. (Here $\lvert u\rvert_{H^{2}}=\pi^{2}/\sqrt2=6.9789$, and the measured $H^1$ error at $h=1/16$ is $0.1258$, so the constant $C'$ in part 5 is about $0.29$.)

**(b) Two dimensions on the coarsest possible mesh.** Take $\Omega=(0,1)^{2}$, $f\equiv1$, $u=0$ on the boundary. Triangulate by drawing both diagonals of the square: four triangles, four boundary vertices, and one interior vertex $V_1=(\tfrac12,\tfrac12)$. So $N=1$ and the system is a single equation.

On the lower triangle, with vertices $(0,0),(1,0),(\tfrac12,\tfrac12)$, the hat function $v_1$ vanishes at the first two and equals $1$ at the third, and the affine function with those values is $v_1(x,y)=2y$. Hence $\lvert\nabla v_1\rvert^{2}=4$ there, and the triangle has area $\tfrac14$, contributing $4\cdot\tfrac14=1$. By the fourfold symmetry of the mesh the other three contribute the same, so

$$
A_{11}=\int_\Omega\lvert\nabla v_1\rvert^{2}=4 .
$$

For the load, the integral of an affine function over a triangle is its area times the mean of its three vertex values, so each triangle contributes $\tfrac14\cdot\tfrac{0+0+1}{3}=\tfrac1{12}$ and

$$
F_1=\int_\Omega v_1 = 4\cdot\tfrac1{12}=\tfrac13 .
$$

Therefore

$$
u_h\Bigl(\tfrac12,\tfrac12\Bigr)=U_1=\frac{F_1}{A_{11}}=\frac{1/3}{4}=\frac{1}{12}=0.0833333 .
$$

The exact value, from the double sine series $u=\sum_{m,n\ \mathrm{odd}} \dfrac{16}{\pi^{4}mn(m^{2}+n^{2})}\sin m\pi x\,\sin n\pi y$ of :ref[]{to=pde.separation-of-variables}, is

$$
u\Bigl(\tfrac12,\tfrac12\Bigr)=\sum_{m,n\ \mathrm{odd}}\frac{16\,(-1)^{(m+n)/2-1}}{\pi^{4}mn(m^{2}+n^{2})}=0.0736714 ,
$$

so the single-element answer is high by $13.1\%$. That is a respectable showing for one unknown.

**Refining.** Take instead the uniform mesh of $n^{2}$ squares each cut by its lower-left-to-upper-right diagonal. A short computation of the six triangles around an interior node (the same calculation as above, done on right triangles with legs $h$) gives the row

$$
A_{ii}=4,\qquad A_{ij}=-1 \ \text{for the four axis neighbours},\qquad A_{ij}=0 \ \text{for the two diagonal ones},
$$

with no $h$ in it, while $F_i=\int_\Omega v_i = h^{2}$ for $f\equiv1$. So on this mesh the finite element equations are *identical* to the five-point difference scheme of :ref[]{to=num.finite-differences} — the methods coincide here, and they diverge as soon as the mesh or the data stop being so symmetric. Solving:

| $n$ | $h$ | $u_h(\tfrac12,\tfrac12)$ | error | ratio |
|---|---|---|---|---|
| $2$  | $0.5$    | $0.0625000$ | $-1.1171\times10^{-2}$ | — |
| $4$  | $0.25$   | $0.0703125$ | $-3.3589\times10^{-3}$ | $3.33$ |
| $8$  | $0.125$  | $0.0727826$ | $-8.8872\times10^{-4}$ | $3.78$ |
| $16$ | $0.0625$ | $0.0734458$ | $-2.2559\times10^{-4}$ | $3.94$ |
| $32$ | $0.03125$| $0.0736147$ | $-5.6616\times10^{-5}$ | $3.98$ |

The nodal error falls by a factor approaching $4$: second order, one power better than the $O(h)$ of part 5, which is a bound in the energy norm. The $L^{2}$ and pointwise errors of the finite element method on a convex domain are $O(h^{2})$, by a duality argument that trades the extra power for the regularity of an auxiliary problem.
:::

:::application[Why engineering computes this way]{provenance=original}
**Structural analysis, where the names come from.** The method was built by aeronautical and civil engineers in the 1950s to compute stresses in built-up structures, and the vocabulary is theirs: $A$ is the stiffness matrix because for the elasticity bilinear form $a(u,v)=\int \sigma(u):\varepsilon(v)$ it is literally the matrix of spring constants relating nodal displacements to nodal forces, and $F$ is the load. The energy-norm statement of part 3 then has a physical reading: among all displacement fields representable on the mesh, the computed one is the one of least potential energy, which is the Rayleigh–Ritz principle of :ref[]{to=var.rayleigh-ritz} restricted to a finite-dimensional space. Strauss notes that the method was invented to deal with curved and irregular domains, where finite differences fit badly.

**Why it wins over finite differences.** Not accuracy on a square — the example above shows the two methods coinciding there — but geometry and boundary conditions. An aerofoil, a heart ventricle, a turbine blade and a reservoir have no coordinate system; a triangulation has no trouble with any of them, grades itself finely where the solution varies and coarsely elsewhere, and handles a Neumann or Robin condition for free, because such conditions appear as boundary terms in the weak form rather than as extra equations at ghost points.

**Where the error estimate is used in anger.** Part 5 bounds the error by a norm of the unknown solution, which cannot be evaluated. Practical codes therefore use *a posteriori* estimators, computable from $u_h$ alone — typically the element residual $\lVert f+\Delta u_h\rVert_{L^2(K)}$ together with the jumps of $\nabla u_h$ across edges — to decide which elements to refine, and iterate solve, estimate, mark, refine. Stakgold and Holst give exactly this loop as an algorithm. The theory of this unit is what guarantees that the loop is converging to something.

**Beyond Poisson.** The same three lines — weak form, conforming subspace, Galerkin — carry over to linear elasticity, to Stokes flow (where the velocity and pressure spaces must be chosen compatibly, or the inf–sup condition of part 1 fails and the pressure develops a checkerboard oscillation), to the eigenvalue problems of :ref[]{to=ode.sturm-liouville-theory} in several dimensions, and to the time-dependent problems of step 7. The analysis of all of them is the same analysis: Cea's lemma plus an approximation estimate.
:::
