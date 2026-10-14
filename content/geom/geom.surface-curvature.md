---
id: geom.surface-curvature
title: The second fundamental form and curvature
kind: definition
level: core
summary: Introduces the Gauss map $N$, which sends each point of an oriented surface to its unit normal, proves that its differential $dN_p$ is a self-adjoint operator on the tangent plane, defines the second fundamental form $\mathrm{II}_p(v) = -\langle dN_p(v), v\rangle$ and identifies its values on unit vectors as normal curvatures, so that the eigenvalues of $-dN_p$ are the principal curvatures and their product and mean are the Gaussian curvature $K$ and the mean curvature $H$, with the coordinate formulas in $E,F,G,e,f,g$.
prereqs: [geom.first-fundamental-form, geom.frenet-serret, linalg.hermitian-spectral-theorem]
provenance: adapted
sources:
  - work: docarmo-2016
    loc: "§3-2, pp. 140–152: Example 2, p. 140 (the sphere, with $N$ pointing to the centre, and the outward field giving $d\\bar N_p = +\\mathrm{id}$); the Gauss map and its differential; Proposition 1 and proof, pp. 142–143 ($dN_p$ is self-adjoint); Definition 2, p. 143 (second fundamental form); Definition 3, p. 143 and pp. 143–144 (normal curvature; $\\mathrm{II}_p(v) = k_n$); Proposition 2, p. 144 (Meusnier); Definition 4, p. 146 (principal curvatures and directions); Euler's formula, p. 147; Definition 6, p. 148 (Gaussian and mean curvature) and Definition 7, p. 148 (elliptic, hyperbolic, parabolic, planar points); Definition 8, p. 149 (umbilical point), Definition 9, p. 150 (asymptotic direction) and Proposition 4, pp. 149–150 (an all-umbilic connected surface lies in a sphere or a plane). §3-3, pp. 156–158: $e, f, g$; the Weingarten equations for $a_{ij}$; $K = (eg-f^2)/(EG-F^2)$ Eq. (4) and $H = (eG - 2fF + gE)/2(EG-F^2)$ Eq. (5); $k = H \\pm \\sqrt{H^2-K}$ Eq. (6)"
    pages: "140-152, 156-158"
    role: every definition, every statement, and the proof routes for self-adjointness, for $\mathrm{II} = k_n$ and for the coordinate formulas
  - work: gelfand-fomin-1963
    loc: "Ch. 1, §5, Example (the surface of least area spanned by a contour), p. 24: the Euler equation $r(1+q^2) - 2spq + t(1+p^2) = 0$ for the area functional, the formula $M = (Eg - 2Ff + Ge)/2(EG-F^2)$ for the mean curvature in terms of the two fundamental forms, its specialization to a graph $z = z(x,y)$, and the conclusion that a surface of least area has zero mean curvature"
    pages: "24"
    role: independent confirmation of the coordinate formula for $H$, and the identification of minimal surfaces as $H = 0$
  - work: evans-2010
    loc: "§8.1.2, Example 4 and the paragraph following Eq. (10), pp. 430–431: the area functional $I[w] = \\int_U (1+|Dw|^2)^{1/2}dx$, its Euler–Lagrange equation (the minimal surface equation), and the statement that $\\operatorname{div}\\bigl(Du/(1+|Du|^2)^{1/2}\\bigr)$ is $n$ times the mean curvature of the graph of $u$"
    pages: "430-431"
    role: mean curvature as the first variation of area, and the divergence form used in the application
---

:::definition[Gauss map, second fundamental form, principal, Gaussian and mean curvature]{provenance=adapted src="docarmo-2016:§3-2, Example 2, p. 140, Defs. 2, 3, 4, 6, 7 and 8, pp. 141–149, and Def. 9, p. 150 (asymptotic direction), with §3-3, pp. 156–157"}
Let $S$ be a regular surface (:ref[regular surfaces and the first fundamental form]{to=geom.first-fundamental-form}).

- **Orientation and Gauss map.** $S$ is **oriented** by a smooth choice of unit normal $N : S \to S^2 \subset \mathbb{R}^3$; the map $N$ is the **Gauss map**. In a parametrization $\mathbf{x}(u,v)$ compatible with the orientation, $N = (\mathbf{x}_u\times\mathbf{x}_v)/\lvert\mathbf{x}_u\times\mathbf{x}_v\rvert$. Since $T_{N(p)}S^2$ and $T_pS$ are both the plane orthogonal to $N(p)$, the differential is an operator on one plane,
  $$
  dN_p : T_pS \to T_pS .
  $$
  Its negative $-dN_p$ is the **shape operator** (Weingarten map).
- **Second fundamental form.** $\mathrm{II}_p(v) = -\langle dN_p(v), v\rangle$ for $v \in T_pS$. Its coefficients in the basis $\{\mathbf{x}_u, \mathbf{x}_v\}$ are
  $$
  e = \langle N, \mathbf{x}_{uu}\rangle = -\langle N_u, \mathbf{x}_u\rangle, \qquad
  f = \langle N, \mathbf{x}_{uv}\rangle = -\langle N_v, \mathbf{x}_u\rangle = -\langle N_u, \mathbf{x}_v\rangle, \qquad
  g = \langle N, \mathbf{x}_{vv}\rangle = -\langle N_v, \mathbf{x}_v\rangle ,
  $$
  so that $\mathrm{II}(a\mathbf{x}_u + b\mathbf{x}_v) = e a^2 + 2f ab + g b^2$.
- **Normal curvature.** Let $C \subset S$ be a regular curve through $p$, with curvature $k$ and principal normal $\mathbf{n}$ at $p$ (:ref[Frenet-Serret]{to=geom.frenet-serret}), and let $\cos\theta = \langle \mathbf{n}, N\rangle$. The **normal curvature** of $C$ at $p$ is $k_n = k\cos\theta$: the signed length of the projection of $k\mathbf{n}$ onto $N$.
- **Principal curvatures and directions.** Write $k_1$ for the largest and $k_2$ for the smallest value that $\mathrm{II}_p$ takes on the unit circle of $T_pS$; these are the **principal curvatures** at $p$. The unit vectors at which they are attained are the **principal directions**. A curve whose tangent is a principal direction at each of its points is a **line of curvature**.
- **Gaussian and mean curvature.**
  $$
  K = \det(dN_p) = k_1k_2, \qquad H = -\tfrac12\operatorname{tr}(dN_p) = \tfrac{k_1+k_2}{2} .
  $$
- **Classification of points.** $p$ is **elliptic** if $K = \det(dN_p) > 0$, **hyperbolic** if $K < 0$, **parabolic** if $K = 0$ with $dN_p \ne 0$, and **planar** if $dN_p = 0$. It is **umbilical** if $k_1 = k_2$ (planar points included). A direction with $k_n = 0$ is **asymptotic**.
- **Sign convention.** do Carmo defines $\mathrm{II}$ with the minus sign shown, and computes the unit sphere with the normal $N(x,y,z) = (-x,-y,-z)$ pointing to its centre (his Examples 2 and 7, pp. 140 and 145): then $dN_p = -\mathrm{id}$ and every normal curvature equals $+1$. With the *outward* normal instead, $dN_p = +\mathrm{id}$ and every normal curvature is $-1$. Reversing the orientation sends $N \mapsto -N$, hence $e,f,g \mapsto -e,-f,-g$ and $dN_p \mapsto -dN_p$: the unordered pair of principal curvatures becomes $\{-k_1,-k_2\}$, so with the ordering $k_1 \ge k_2$ kept, $k_1 \mapsto -k_2$ and $k_2 \mapsto -k_1$. Consequently $H \mapsto -H$, while $K$ is unchanged because the dimension is even.
:::

:::statement[Properties of the shape operator]{provenance=adapted src="docarmo-2016:§3-2, Prop. 1, p. 142, Prop. 2 (Meusnier), pp. 143–144, Euler's formula, pp. 146–147, Def. 6, p. 148, Prop. 4, p. 149, and §3-3, Eqs. (4)–(6), pp. 157–158"}
Let $S$ be an oriented regular surface, $p \in S$.

1. **(Self-adjointness.)** $dN_p : T_pS \to T_pS$ is a self-adjoint linear map: $\langle dN_p(w_1), w_2\rangle = \langle w_1, dN_p(w_2)\rangle$ for all $w_1, w_2 \in T_pS$. Hence $\mathrm{II}_p$ is a quadratic form, $T_pS$ has an orthonormal basis $\{e_1, e_2\}$ of eigenvectors of $dN_p$, and the eigenvalues are real.
2. **(The second fundamental form is a normal curvature.)** If $v \in T_pS$ has $\lvert v\rvert = 1$ and $C$ is any regular curve on $S$ through $p$ with unit tangent $v$ there, then $\mathrm{II}_p(v) = k_n$, the normal curvature of $C$ at $p$. In particular (**Meusnier**) all curves on $S$ through $p$ with the same tangent line have the same normal curvature at $p$.
3. **(Principal curvatures are the eigenvalues.)** With $\{e_1,e_2\}$ as in 1 and $dN_p(e_i) = -k_ie_i$, the numbers $k_1 \ge k_2$ are the largest and smallest values $\mathrm{II}_p$ takes on the unit circle, that is, the principal curvatures, and $e_1, e_2$ are principal directions. For $v = e_1\cos\vartheta + e_2\sin\vartheta$, **Euler's formula** holds:
   $$
   k_n(\vartheta) = \mathrm{II}_p(v) = k_1\cos^2\vartheta + k_2\sin^2\vartheta .
   $$
4. **(Coordinate formulas.)** In a parametrization compatible with the orientation,
   $$
   K = \frac{eg - f^2}{EG - F^2}, \qquad
   H = \frac{eG - 2fF + gE}{2\,(EG - F^2)}, \qquad
   k_{1,2} = H \pm \sqrt{H^2 - K} .
   $$
   In particular $H^2 \ge K$ always, with equality exactly at umbilical points, and the functions $k_1 \ge k_2$ are continuous on $S$ and differentiable away from the umbilics.
5. **(All-umbilic surfaces.)** If every point of a connected regular surface $S$ is umbilical, then $S$ is contained in a sphere or in a plane.
:::

:::idea{provenance=original}
The Gauss map records how the tangent plane tips as one moves along the surface, so its derivative is the natural measure of curvature. Self-adjointness is the key structural fact and it comes from one line of calculus: the mixed second partial derivatives of $\mathbf{x}$ commute, and differentiating $\langle N, \mathbf{x}_u\rangle = 0$ in $v$ and $\langle N, \mathbf{x}_v\rangle = 0$ in $u$ turns both off-diagonal entries into $-\langle N, \mathbf{x}_{uv}\rangle$. Self-adjointness buys the spectral theorem, hence an orthonormal eigenbasis and real eigenvalues, and the eigenvalues of a quadratic form on a circle are its extreme values. Identifying $\mathrm{II}_p(v)$ with a normal curvature is another single differentiation: along a curve on the surface the normal is perpendicular to the velocity, so differentiating that relation trades $\langle N', \boldsymbol{\gamma}'\rangle$ for $-\langle N, \boldsymbol{\gamma}''\rangle$, and $\boldsymbol{\gamma}'' = k\mathbf{n}$. The coordinate formulas are then nothing but linear algebra: the matrix of $dN$ in the basis $\{\mathbf{x}_u,\mathbf{x}_v\}$ is $-\mathrm{I}^{-1}\,\mathrm{II}$, and $K$ and $H$ are its determinant and its trace.
:::

:::proof{provenance=adapted src="docarmo-2016:§3-2, proof of Prop. 1, pp. 142–143, with pp. 144, 146–147 and Prop. 4, pp. 149–150, and §3-3, pp. 156–158"}
**Part 1.** $dN_p$ is linear, so it suffices to check the symmetry on the basis $\{\mathbf{x}_u, \mathbf{x}_v\}$. Along a curve $\boldsymbol{\alpha}(t) = \mathbf{x}(u(t), v(t))$ with $\boldsymbol{\alpha}(0) = p$, the chain rule gives $dN_p(\boldsymbol{\alpha}'(0)) = \frac{d}{dt}N(u(t),v(t))\big|_{0} = N_uu'(0) + N_vv'(0)$, and taking the coordinate curves,
$$
dN_p(\mathbf{x}_u) = N_u, \qquad dN_p(\mathbf{x}_v) = N_v .
$$
The diagonal entries pose no question, so only $\langle N_u, \mathbf{x}_v\rangle = \langle \mathbf{x}_u, N_v\rangle$ must be shown. Differentiate the two identities $\langle N, \mathbf{x}_u\rangle = 0$ and $\langle N, \mathbf{x}_v\rangle = 0$ with respect to $v$ and $u$ respectively:
$$
\langle N_v, \mathbf{x}_u\rangle + \langle N, \mathbf{x}_{uv}\rangle = 0, \qquad
\langle N_u, \mathbf{x}_v\rangle + \langle N, \mathbf{x}_{vu}\rangle = 0 .
$$
By the equality of mixed partial derivatives (here the smoothness of $\mathbf{x}$ is used), $\mathbf{x}_{uv} = \mathbf{x}_{vu}$, so both left-hand first terms equal $-\langle N, \mathbf{x}_{uv}\rangle$ and are therefore equal to each other. A self-adjoint operator on a two-dimensional real inner-product space has real eigenvalues and an orthonormal eigenbasis (:ref[spectral theorem]{to=linalg.hermitian-spectral-theorem}), and $v \mapsto \langle dN_p(v), v\rangle$ is then a quadratic form.

**Part 2.** Let $\boldsymbol{\gamma}(s)$ be a unit-speed parametrization of $C$ with $\boldsymbol{\gamma}(0) = p$, $\boldsymbol{\gamma}'(0) = v$, and write $N(s) = N(\boldsymbol{\gamma}(s))$. Since $N(s) \perp T_{\boldsymbol{\gamma}(s)}S \ni \boldsymbol{\gamma}'(s)$ we have $\langle N(s), \boldsymbol{\gamma}'(s)\rangle \equiv 0$; differentiating,
$$
\langle N'(s), \boldsymbol{\gamma}'(s)\rangle = -\langle N(s), \boldsymbol{\gamma}''(s)\rangle .
$$
At $s = 0$, $N'(0) = dN_p(v)$ and $\boldsymbol{\gamma}''(0) = k\,\mathbf{n}$ by the first Frenet formula, so
$$
\mathrm{II}_p(v) = -\langle dN_p(v), v\rangle = -\langle N'(0), \boldsymbol{\gamma}'(0)\rangle = \langle N, k\mathbf{n}\rangle = k\cos\theta = k_n .
$$
The left-hand side depends only on $v$, not on which curve has that tangent; that is Meusnier's statement.

**Part 3.** By Part 1 write $dN_p(e_i) = -k_ie_i$ in an orthonormal eigenbasis, ordering $k_1 \ge k_2$. For a unit vector $v = e_1\cos\vartheta + e_2\sin\vartheta$, expanding bilinearly,
$$
\mathrm{II}_p(v) = -\langle dN_p(v), v\rangle = \langle k_1e_1\cos\vartheta + k_2e_2\sin\vartheta,\; e_1\cos\vartheta + e_2\sin\vartheta\rangle = k_1\cos^2\vartheta + k_2\sin^2\vartheta ,
$$
which is Euler's formula. Writing it as $k_2 + (k_1-k_2)\cos^2\vartheta$ shows the values range over $[k_2, k_1]$ with the endpoints attained at $\vartheta = \pi/2$ and $\vartheta = 0$; so $k_1, k_2$ are the extreme normal curvatures and $e_1, e_2$ the directions realizing them.

**Part 4.** Write the matrix of $dN_p$ in the basis $\{\mathbf{x}_u,\mathbf{x}_v\}$ as $(a_{ij})$ via $N_u = a_{11}\mathbf{x}_u + a_{21}\mathbf{x}_v$, $N_v = a_{12}\mathbf{x}_u + a_{22}\mathbf{x}_v$ (the Weingarten equations). Taking inner products with $\mathbf{x}_u$ and $\mathbf{x}_v$ and using the definitions of $e, f, g$ and of $E, F, G$ gives four scalar equations which in matrix form are
$$
-\begin{pmatrix} e & f \\ f & g\end{pmatrix}
= \begin{pmatrix} a_{11} & a_{21} \\ a_{12} & a_{22}\end{pmatrix}
\begin{pmatrix} E & F \\ F & G\end{pmatrix}.
$$
Because $EG - F^2 > 0$ the first-fundamental-form matrix is invertible, and taking determinants of both sides gives
$$
eg - f^2 = \det(a_{ij})\,(EG - F^2) = K\,(EG-F^2),
$$
which is the formula for $K$. Inverting explicitly,
$$
\begin{pmatrix} a_{11} & a_{21} \\ a_{12} & a_{22}\end{pmatrix}
= \frac{-1}{EG-F^2}\begin{pmatrix} e & f \\ f & g\end{pmatrix}\begin{pmatrix} G & -F \\ -F & E\end{pmatrix},
$$
whose diagonal entries are $a_{11} = (fF - eG)/(EG-F^2)$ and $a_{22} = (fF - gE)/(EG-F^2)$; hence
$$
H = -\tfrac12(a_{11}+a_{22}) = \frac{eG - 2fF + gE}{2(EG-F^2)} .
$$
Finally $-k_1, -k_2$ are the eigenvalues of $(a_{ij})$, so $k_1, k_2$ are the roots of $k^2 - (k_1+k_2)k + k_1k_2 = k^2 - 2Hk + K = 0$, giving $k = H \pm\sqrt{H^2-K}$. The discriminant is $H^2 - K = \tfrac14(k_1-k_2)^2 \ge 0$, vanishing exactly when $k_1 = k_2$.

**Part 5.** Work in a connected coordinate neighbourhood $V$. Umbilicity at $q$ means $dN_q = \lambda(q)\,\mathrm{id}$ for a scalar $\lambda(q)$, which is smooth because $\lambda = -H$ there. Applying this to the basis vectors, $N_u = \lambda\mathbf{x}_u$ and $N_v = \lambda\mathbf{x}_v$. Differentiate the first in $v$ and the second in $u$ and subtract; the terms $\lambda\mathbf{x}_{uv}$ cancel by equality of mixed partials, leaving
$$
\lambda_v\,\mathbf{x}_u - \lambda_u\,\mathbf{x}_v = \mathbf{0}.
$$
Since $\mathbf{x}_u, \mathbf{x}_v$ are independent, $\lambda_u = \lambda_v = 0$, so $\lambda$ is constant on the connected set $V$. If $\lambda = 0$ then $N$ is a constant vector $N_0$ and $\partial_u\langle\mathbf{x}, N_0\rangle = \partial_v\langle\mathbf{x}, N_0\rangle = 0$, so $\langle \mathbf{x}, N_0\rangle$ is constant and $V$ lies in a plane. If $\lambda \ne 0$, put $\mathbf{y} = \mathbf{x} - \lambda^{-1}N$; then $\mathbf{y}_u = \mathbf{x}_u - \lambda^{-1}N_u = \mathbf{0}$ and likewise $\mathbf{y}_v = \mathbf{0}$, so $\mathbf{y}$ is a fixed point and $\lvert\mathbf{x} - \mathbf{y}\rvert = 1/\lvert\lambda\rvert$: $V$ lies on a sphere. A connected $S$ is covered by finitely many such neighbourhoods along any path between two of its points, and overlapping neighbourhoods force the same plane or the same sphere throughout. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Orientability.** Without a globally defined smooth $N$ there is no Gauss map, and $e, f, g$, $H$, $k_1$, $k_2$ have no global sign. $K$ survives: it is unchanged by $N \mapsto -N$, so a Möbius band has a well-defined Gaussian curvature but no well-defined mean curvature.
- **Equality of mixed partials.** Used twice, in Part 1 and again in Part 5. This is where the smoothness in the definition of a regular surface is spent; a $C^1$ surface has a tangent plane and a first fundamental form but no second fundamental form.
- **$EG - F^2 > 0$.** The inversion in Part 4 is impossible without it. At a singular point of a parametrization the formulas for $K$ and $H$ return $0/0$; the surface may still be perfectly smooth there, as the pole of a sphere is in spherical coordinates, and a different chart must be used.
- **Connectedness in Part 5.** Dropping it makes the conclusion false in the obvious way: the disjoint union of a plane and a sphere is all-umbilic and is neither.
- **Why $-\langle dN_p(v),v\rangle$ and not $+$.** The sign is chosen so that a sphere carrying the normal that points to its centre has $k_1 = k_2 = 1/a > 0$ and $\mathrm{II}$ positive (with the outward normal the same sphere gives $k_1 = k_2 = -1/a$, $K = 1/a^2$ and $H = -1/a$); it is a convention, and some texts take the opposite one. With the sign fixed, $\mathrm{II}_p(v) > 0$ means the surface bends towards $N$ along $v$.
- **$k_1, k_2$ at umbilics.** Part 4 gives continuity of $k_1 \ge k_2$ everywhere, but $\sqrt{H^2-K}$ is not differentiable where $H^2 = K$, so the principal curvatures can fail to be smooth at umbilical points even though $K$ and $H$ are smooth there.
:::

:::method[Computing $K$ and $H$ from a parametrization]{provenance=original}
1. Compute $\mathbf{x}_u, \mathbf{x}_v$ and then $E, F, G$; check $EG - F^2 > 0$.
2. Compute $N = (\mathbf{x}_u\times\mathbf{x}_v)/\sqrt{EG-F^2}$. Record which way it points; every sign below depends on it.
3. Compute the second derivatives $\mathbf{x}_{uu}, \mathbf{x}_{uv}, \mathbf{x}_{vv}$ and then $e = \langle N, \mathbf{x}_{uu}\rangle$, $f = \langle N, \mathbf{x}_{uv}\rangle$, $g = \langle N, \mathbf{x}_{vv}\rangle$. The triple-product form $e = \det[\mathbf{x}_u, \mathbf{x}_v, \mathbf{x}_{uu}]/\sqrt{EG-F^2}$ and its analogues avoid writing $N$ out.
4. $K = (eg-f^2)/(EG-F^2)$ and $H = (eG - 2fF + gE)/\bigl(2(EG-F^2)\bigr)$.
5. $k_{1,2} = H \pm\sqrt{H^2-K}$. Check $k_1k_2 = K$ and $k_1+k_2 = 2H$.
6. If $F = f = 0$ (an orthogonal chart whose coordinate curves are lines of curvature) the work collapses: the principal curvatures are $e/E$ and $g/G$, with $k_1$ the larger of the two and $k_2$ the smaller, and $K = eg/(EG)$, $H = \tfrac12(e/E + g/G)$. Which of $e/E$, $g/G$ is $k_1$ depends on the surface and on the point, so compare them before labelling.
7. **Sanity checks.** A plane must give $e=f=g=0$; a sphere of radius $a$ with the normal pointing to its centre must give $K = 1/a^2$ and $H = 1/a$ (outward normal: $K = 1/a^2$ still, but $H = -1/a$); a cylinder of radius $a$ must give $K = 0$ and $\lvert H\rvert = 1/(2a)$.
:::

:::example[The paraboloid $z = \tfrac12(x^2+y^2)$ again]{provenance=original}
Continue with the chart of :ref[the first fundamental form]{to=geom.first-fundamental-form},
$$
\mathbf{x}(r,\theta) = \bigl(r\cos\theta,\; r\sin\theta,\; \tfrac12 r^2\bigr), \qquad E = 1+r^2,\;\; F = 0,\;\; G = r^2 .
$$

**Step 1: the normal.** With $\mathbf{x}_r = (\cos\theta, \sin\theta, r)$ and $\mathbf{x}_\theta = (-r\sin\theta, r\cos\theta, 0)$,
$$
\mathbf{x}_r\times\mathbf{x}_\theta = \bigl(-r^2\cos\theta,\; -r^2\sin\theta,\; r\bigr), \qquad \lvert\mathbf{x}_r\times\mathbf{x}_\theta\rvert = r\sqrt{1+r^2} = \sqrt{EG-F^2},
$$
so
$$
N = \frac{1}{\sqrt{1+r^2}}\bigl(-r\cos\theta,\; -r\sin\theta,\; 1\bigr).
$$
Its $z$-component is positive: $N$ points up out of the bowl, into the concave side.

**Step 2: the second derivatives and $e,f,g$.**
$$
\mathbf{x}_{rr} = (0,0,1), \qquad \mathbf{x}_{r\theta} = (-\sin\theta, \cos\theta, 0), \qquad \mathbf{x}_{\theta\theta} = (-r\cos\theta, -r\sin\theta, 0),
$$
and therefore
$$
e = \langle N, \mathbf{x}_{rr}\rangle = \frac{1}{\sqrt{1+r^2}}, \qquad
f = \frac{r\cos\theta\sin\theta - r\sin\theta\cos\theta}{\sqrt{1+r^2}} = 0, \qquad
g = \frac{r^2\cos^2\theta + r^2\sin^2\theta}{\sqrt{1+r^2}} = \frac{r^2}{\sqrt{1+r^2}} .
$$
Both $F$ and $f$ vanish, so the meridians and the horizontal circles are lines of curvature and step 6 of the method applies.

**Step 3: the curvatures.**
$$
K = \frac{eg - f^2}{EG-F^2} = \frac{r^2/(1+r^2)}{r^2(1+r^2)} = \frac{1}{(1+r^2)^2},
$$
$$
H = \frac{eG + gE}{2(EG-F^2)} = \frac{\dfrac{r^2}{\sqrt{1+r^2}} + \dfrac{r^2(1+r^2)}{\sqrt{1+r^2}}}{2r^2(1+r^2)} = \frac{2+r^2}{2\,(1+r^2)^{3/2}} .
$$
Since $F = f = 0$, the two coordinate directions are the principal ones, with normal curvatures $e/E = (1+r^2)^{-3/2}$ along the meridian and $g/G = (1+r^2)^{-1/2}$ along the horizontal circle. The second is the larger, so $k_1 = (1+r^2)^{-1/2}$ and $k_2 = (1+r^2)^{-3/2}$.

**Step 4: numbers at $r = 1$,** the point $(1, 0, \tfrac12)$:
$$
K = \frac14 = 0.25, \qquad H = \frac{3}{2\cdot 2^{3/2}} = \frac{3\sqrt2}{8} = 0.5303301 .
$$
Then $H^2 - K = \tfrac{9}{32} - \tfrac{8}{32} = \tfrac1{32}$, so
$$
k_{1,2} = \frac{3\sqrt2}{8} \pm \frac{1}{4\sqrt2}, \qquad k_1 = \frac{1}{\sqrt2} = 0.7071068, \qquad k_2 = \frac{1}{2\sqrt2} = 0.3535534 .
$$
**Check:** $k_1k_2 = \dfrac{1}{\sqrt2}\cdot\dfrac{1}{2\sqrt2} = \dfrac{1}{4} = K$ and $k_1 + k_2 = 0.7071068 + 0.3535534 = 1.0606602 = 2H$. These agree with the direct values $k_1 = (1+r^2)^{-1/2}$ and $k_2 = (1+r^2)^{-3/2}$ at $r=1$. Both principal curvatures are positive, so $K > 0$ and every point of the paraboloid is elliptic: near each of its points the surface stays on a single side of the tangent plane there, as a bowl should. Note also that $k_2 = (1+r^2)^{-3/2}$ is exactly the curvature of the generating parabola $z = \tfrac12 r^2$ at $r$, computed from the plane formula $\kappa = \lvert z''\rvert/(1+(z')^2)^{3/2}$; it must be so, because the meridian is a normal section of the surface.

**Step 5: limits.** As $r \to 0$, $K \to 1$ and $k_1 = k_2 \to 1$: the vertex is an umbilical point and the paraboloid osculates the unit sphere there. As $r \to\infty$, $K \sim r^{-4} \to 0$ and $H \sim \tfrac12 r^{-1} \to 0$: far out, the bowl flattens.
:::

:::application[Surface tension, membranes and shells]{provenance=original}
**Young-Laplace.** The pressure jump across an interface of surface tension $\sigma$ is $\Delta p = 2\sigma H = \sigma(k_1 + k_2)$, with $H$ computed for the normal pointing from the low-pressure side *into* the high-pressure side, i.e. towards the centre of curvature. The factor comes from the first variation of area: for a graph $z = u(x,y)$ the area functional is $\int(1+\lvert Du\rvert^2)^{1/2}dx$, whose Euler–Lagrange equation Evans writes as $\operatorname{div}\bigl(Du/(1+\lvert Du\rvert^2)^{1/2}\bigr) = 0$, the left side being $n = 2$ times the mean curvature of the graph. For a spherical bubble of radius $R$ in air, $k_1 = k_2 = 1/R$ and $\Delta p = 2\sigma/R$ for a single interface, doubled to $4\sigma/R$ for a soap bubble with two. A cylindrical jet has $k_1 = 1/R$, $k_2 = 0$ and $\Delta p = \sigma/R$; comparing the two is the start of the Rayleigh-Plateau analysis of why a jet breaks into drops.

**Minimal surfaces.** A soap film spanning a wire frame has no pressure difference across it, so $H \equiv 0$ everywhere: the two principal curvatures are equal and opposite and every point is a saddle with $K = -k_1^2 \le 0$. This is the geometric form of the statement that the film minimizes area: Gelfand and Fomin derive the Euler equation $r(1+q^2) - 2spq + t(1+p^2) = 0$ for the least-area problem and read it off as $H = 0$ using the same coordinate formula for $H$ proved above. It is also why no soap film has an elliptic point.

**Lipid membranes.** The Canham-Helfrich energy of a biological membrane is $\int \bigl[\tfrac{\kappa_b}{2}(2H - c_0)^2 + \bar\kappa K\bigr]\,dA$, with $\kappa_b$ a bending modulus and $c_0$ a spontaneous curvature. The Gauss-Bonnet theorem (:ref[Gauss-Bonnet]{to=geom.gauss-bonnet}) makes the $K$ term a topological constant, so shape equations for red blood cells and vesicles are driven entirely by $H$.

**Structural stiffness.** A shell with $K \ne 0$ carries load in membrane stress rather than in bending, which is why a dome, an eggshell and a curved drinks can are strong far out of proportion to their thickness, while the same material rolled with $K = 0$ buckles. The $K = 0$ case is also the one in which the shell can be made from a flat sheet without stretching, a point taken up in :ref[Gauss's Theorema Egregium]{to=geom.theorema-egregium}.
:::
