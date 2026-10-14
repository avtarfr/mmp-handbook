---
id: geom.theorema-egregium
title: Gauss's Theorema Egregium
kind: theorem
level: core
summary: Proves Gauss's remarkable theorem that the Gaussian curvature $K$, defined through the second fundamental form and so apparently dependent on how the surface sits in $\mathbb{R}^3$, is in fact computable from $E, F, G$ and their derivatives alone, and is therefore unchanged by any local isometry; the Gauss formula that does it is derived, and the consequences for flat maps of a curved surface are drawn.
prereqs: [geom.surface-curvature, geom.covariant-derivative, geom.first-fundamental-form]
provenance: adapted
sources:
  - work: docarmo-2016
    loc: "§4-2, Definition 1, p. 221 (isometry) and Definition 2, p. 222 (local isometry), Proposition 1 and proof, p. 223 (criterion for a local isometry in local coordinates), Definition 3, p. 229 (conformal map) and Exercise 18, p. 233 (area-preserving and conformal implies isometric) and Exercise 19, pp. 233–234 (radial projection of the sphere onto the circumscribed cylinder is area-preserving); §4-3, pp. 235–238: the natural trihedron $\\{\\mathbf{x}_u,\\mathbf{x}_v,N\\}$ and the system (1) defining the Christoffel symbols $\\Gamma^k_{ij}$; the linear system (2) expressing them through $E,F,G$ and their derivatives; the compatibility relations (3); the derivation of the Gauss formula (5) from $(\\mathbf{x}_{uu})_v = (\\mathbf{x}_{uv})_u$; the statement of the Theorema Egregium and its deduction, pp. 237–238; §4-3, Exercises 1–4, p. 240 (the orthogonal and isothermal formulas for $K$; the failure of the converse; no neighbourhood of a point of a sphere maps isometrically into a plane)"
    pages: "221-223, 229, 233-234, 235-240"
    role: every definition and statement, the derivation of the Gauss formula, the statement and proof of the theorem, and the corollaries on maps
---

:::definition[Local isometry; the Christoffel symbols of a parametrized surface]{provenance=adapted src="docarmo-2016:§4-2, Defs. 1–2, pp. 221–222, Prop. 1, p. 223 and Def. 3, p. 229, together with §4-3, systems (1) and (2), pp. 235–236"}
Let $S, \bar S$ be regular surfaces.

- A diffeomorphism $\varphi : S \to \bar S$ is an **isometry** if $\langle d\varphi_p(v_1), d\varphi_p(v_2)\rangle = \langle v_1, v_2\rangle_p$ for every $p\in S$ and all $v_1, v_2 \in T_pS$: it preserves the first fundamental form. It is a **local isometry at $p$** if some neighbourhood of $p$ is mapped isometrically onto an open subset of $\bar S$. The coordinate criterion is do Carmo's Proposition 1: if $\mathbf{x} : U \to S$ and $\bar{\mathbf{x}} : U \to \bar S$ are parametrizations *with the same parameter domain* and $E = \bar E$, $F = \bar F$, $G = \bar G$ throughout $U$, then $\varphi = \bar{\mathbf{x}}\circ\mathbf{x}^{-1}$ is a local isometry. By contrast $\varphi$ is **conformal** if $\langle d\varphi_p(v_1), d\varphi_p(v_2)\rangle = \lambda^2(p)\langle v_1,v_2\rangle_p$ for a nowhere-zero function $\lambda$; conformal maps preserve angles but not lengths.
- Let $\mathbf{x}$ be a parametrization compatible with the orientation $N$. The triple $\{\mathbf{x}_u, \mathbf{x}_v, N\}$ is a basis of $\mathbb{R}^3$ at every point of the chart, the analogue for a surface of the Frenet trihedron. Expanding the derivatives of its members in it defines the **Christoffel symbols** $\Gamma^k_{ij}$ of $S$ in the parametrization $\mathbf{x}$:
  $$
  \begin{aligned}
  \mathbf{x}_{uu} &= \Gamma^1_{11}\mathbf{x}_u + \Gamma^2_{11}\mathbf{x}_v + e\,N, \\
  \mathbf{x}_{uv} &= \Gamma^1_{12}\mathbf{x}_u + \Gamma^2_{12}\mathbf{x}_v + f\,N, \\
  \mathbf{x}_{vv} &= \Gamma^1_{22}\mathbf{x}_u + \Gamma^2_{22}\mathbf{x}_v + g\,N, \\
  N_u &= a_{11}\mathbf{x}_u + a_{21}\mathbf{x}_v, \qquad N_v = a_{12}\mathbf{x}_u + a_{22}\mathbf{x}_v .
  \end{aligned}
  $$
  Taking the inner product of each of the first three lines with $N$ kills the tangential terms and identifies the normal components as $e$, $f$ and $g$, the quantities introduced in :ref[the second fundamental form and curvature]{to=geom.surface-curvature}. Since $\mathbf{x}_{uv} = \mathbf{x}_{vu}$, the symbols are symmetric in their lower indices, $\Gamma^k_{12} = \Gamma^k_{21}$. The same objects appear index-first in :ref[Christoffel symbols and the covariant derivative]{to=geom.covariant-derivative}; here they are indexed by the surface coordinates $u, v$ with $1 \leftrightarrow u$, $2 \leftrightarrow v$.
:::

:::statement[Theorema Egregium and the Gauss formula]{provenance=adapted src="docarmo-2016:§4-3, system (2), p. 235, Eq. (5) and the Theorema Egregium, p. 237, and Exercises 1–2, p. 240"}
Let $S$ be an oriented regular surface and $\mathbf{x} : U \to S$ a parametrization.

1. **(The Christoffel symbols are intrinsic.)** The six functions $\Gamma^k_{ij}$ satisfy the three pairs of linear equations
   $$
   \begin{aligned}
   \Gamma^1_{11}E + \Gamma^2_{11}F &= \tfrac12 E_u, &\qquad \Gamma^1_{11}F + \Gamma^2_{11}G &= F_u - \tfrac12 E_v, \\
   \Gamma^1_{12}E + \Gamma^2_{12}F &= \tfrac12 E_v, &\qquad \Gamma^1_{12}F + \Gamma^2_{12}G &= \tfrac12 G_u, \\
   \Gamma^1_{22}E + \Gamma^2_{22}F &= F_v - \tfrac12 G_u, &\qquad \Gamma^1_{22}F + \Gamma^2_{22}G &= \tfrac12 G_v .
   \end{aligned}
   $$
   Each pair has determinant $EG - F^2 \ne 0$, so the $\Gamma^k_{ij}$ are determined by $E, F, G$ and their first derivatives alone.
2. **(Gauss formula.)**
   $$
   E\,K \;=\; (\Gamma^2_{11})_v - (\Gamma^2_{12})_u + \Gamma^1_{11}\Gamma^2_{12} + \Gamma^2_{11}\Gamma^2_{22} - \Gamma^1_{12}\Gamma^2_{11} - (\Gamma^2_{12})^2 .
   $$
   (do Carmo writes the same identity with both sides negated.)
3. **(Theorema Egregium.)** The Gaussian curvature of a surface is invariant under local isometries: if $\varphi : V \subseteq S \to \bar S$ is a local isometry, then $\bar K(\varphi(q)) = K(q)$ for every $q \in V$.
4. **(Orthogonal and isothermal charts.)** If $F \equiv 0$,
   $$
   K = -\frac{1}{2\sqrt{EG}}\left[\left(\frac{E_v}{\sqrt{EG}}\right)_v + \left(\frac{G_u}{\sqrt{EG}}\right)_u\right];
   $$
   if moreover $E = G = \lambda(u,v)$, this collapses to $K = -\dfrac{1}{2\lambda}\,\Delta\log\lambda$ with $\Delta = \partial_u^2 + \partial_v^2$.
5. **(The converse fails.)** Two surfaces can have equal Gaussian curvature at corresponding points without that correspondence being an isometry. do Carmo's Exercise 3 (p. 240), which he offers as evidence against any converse to the Gauss theorem, gives the pair $\mathbf{x}(u,v) = (u\cos v, u\sin v, \log u)$ and $\bar{\mathbf{x}}(u,v) = (u\cos v, u\sin v, v)$ for $u > 0$.
:::

:::idea{provenance=original}
$K$ is built from $e, f, g$, which are normal components and so involve the ambient space. The trick is to look not at $K$ itself but at an identity that $e, f, g$ are forced to satisfy. The three vectors $\mathbf{x}_u, \mathbf{x}_v, N$ form a frame, and writing the second derivatives of $\mathbf{x}$ in that frame produces tangential coefficients (the Christoffel symbols) and normal coefficients ($e, f, g$). The tangential coefficients are *not* new data: inner products with $\mathbf{x}_u$ and $\mathbf{x}_v$ turn them into derivatives of $E$, $F$ and $G$. Now impose the one constraint that any smooth map must satisfy, $(\mathbf{x}_{uu})_v = (\mathbf{x}_{uv})_u$, and read off the $\mathbf{x}_v$ component. Everything on one side is made of Christoffel symbols; everything on the other turns out to be $-EK$ after the Weingarten coefficients are substituted. So $EK$ is a formula in $E, F, G$ and their derivatives, and a map that preserves $E, F, G$ preserves it.
:::

:::proof{provenance=adapted src="docarmo-2016:§4-3, pp. 235–238, with the Weingarten coefficients $a_{ij}$ of §3-3, p. 157"}
**Part 1.** Take the inner product of the first three expansions with $\mathbf{x}_u$ and with $\mathbf{x}_v$; the $N$ terms drop out because $N \perp \mathbf{x}_u, \mathbf{x}_v$. That gives the six left-hand sides. For the right-hand sides, differentiate the definitions of $E, F, G$:
$$
E_u = 2\langle \mathbf{x}_{uu}, \mathbf{x}_u\rangle, \qquad E_v = 2\langle\mathbf{x}_{uv},\mathbf{x}_u\rangle, \qquad G_u = 2\langle\mathbf{x}_{uv},\mathbf{x}_v\rangle, \qquad G_v = 2\langle\mathbf{x}_{vv},\mathbf{x}_v\rangle,
$$
and $F_u = \langle\mathbf{x}_{uu},\mathbf{x}_v\rangle + \langle\mathbf{x}_u,\mathbf{x}_{uv}\rangle = \langle\mathbf{x}_{uu},\mathbf{x}_v\rangle + \tfrac12 E_v$, so $\langle\mathbf{x}_{uu},\mathbf{x}_v\rangle = F_u - \tfrac12 E_v$; similarly $F_v = \langle\mathbf{x}_{uv},\mathbf{x}_v\rangle + \langle\mathbf{x}_u,\mathbf{x}_{vv}\rangle$ gives $\langle\mathbf{x}_{vv},\mathbf{x}_u\rangle = F_v - \tfrac12 G_u$. Substituting produces exactly the six equations stated. Each pair is a $2\times2$ linear system in $(\Gamma^1_{ij}, \Gamma^2_{ij})$ with coefficient matrix $\begin{pmatrix}E&F\\F&G\end{pmatrix}$, invertible because $EG-F^2 > 0$ (:ref[regular surfaces]{to=geom.first-fundamental-form}). Hence each $\Gamma^k_{ij}$ is a rational expression in $E, F, G, E_u, E_v, F_u, F_v, G_u, G_v$.

**Part 2.** $\mathbf{x}$ is smooth, so the third mixed partial derivatives commute: $(\mathbf{x}_{uu})_v = (\mathbf{x}_{uv})_u$. Differentiate the two expansions and keep only the $\mathbf{x}_v$ component of each side. On the left,
$$
(\mathbf{x}_{uu})_v = (\Gamma^1_{11})_v\mathbf{x}_u + \Gamma^1_{11}\mathbf{x}_{uv} + (\Gamma^2_{11})_v\mathbf{x}_v + \Gamma^2_{11}\mathbf{x}_{vv} + e_vN + eN_v,
$$
and substituting the expansions of $\mathbf{x}_{uv}$, $\mathbf{x}_{vv}$ and $N_v$ gives the $\mathbf{x}_v$ coefficient
$$
\Gamma^1_{11}\Gamma^2_{12} + (\Gamma^2_{11})_v + \Gamma^2_{11}\Gamma^2_{22} + e\,a_{22}.
$$
On the right,
$$
(\mathbf{x}_{uv})_u = (\Gamma^1_{12})_u\mathbf{x}_u + \Gamma^1_{12}\mathbf{x}_{uu} + (\Gamma^2_{12})_u\mathbf{x}_v + \Gamma^2_{12}\mathbf{x}_{uv} + f_uN + fN_u,
$$
with $\mathbf{x}_v$ coefficient
$$
\Gamma^1_{12}\Gamma^2_{11} + (\Gamma^2_{12})_u + (\Gamma^2_{12})^2 + f\,a_{21}.
$$
Since $\mathbf{x}_u, \mathbf{x}_v, N$ are linearly independent, the two coefficients are equal. Rearranging,
$$
(\Gamma^2_{11})_v - (\Gamma^2_{12})_u + \Gamma^1_{11}\Gamma^2_{12} + \Gamma^2_{11}\Gamma^2_{22} - \Gamma^1_{12}\Gamma^2_{11} - (\Gamma^2_{12})^2 = f\,a_{21} - e\,a_{22}.
$$
Now insert the Weingarten coefficients computed in :ref[the second fundamental form and curvature]{to=geom.surface-curvature}, namely $a_{21} = (eF - fE)/(EG-F^2)$ and $a_{22} = (fF - gE)/(EG-F^2)$ (do Carmo displays all four on p. 157; in the sibling unit they come from multiplying out the matrix identity for the $a_{ij}$):
$$
f a_{21} - e a_{22} = \frac{f(eF - fE) - e(fF - gE)}{EG-F^2} = \frac{efF - f^2E - efF + egE}{EG-F^2} = E\,\frac{eg - f^2}{EG - F^2} = E\,K ,
$$
the two terms in $efF$ cancelling. This is the Gauss formula.

**Part 3.** Let $\varphi$ be a local isometry at $q \in V$ and let $\mathbf{x} : U \to S$ be a parametrization at $q$ with $\mathbf{x}(U) \subseteq V$. Then $\bar{\mathbf{x}} = \varphi\circ\mathbf{x}$ is a parametrization of $\bar S$ at $\varphi(q)$ with the *same* parameter domain $U$. Because $\varphi$ preserves inner products of tangent vectors and $\bar{\mathbf{x}}_u = d\varphi(\mathbf{x}_u)$, $\bar{\mathbf{x}}_v = d\varphi(\mathbf{x}_v)$, we get $\bar E = E$, $\bar F = F$, $\bar G = G$ as functions on $U$. By Part 1 the Christoffel symbols are functions of $E, F, G$ and their derivatives only, so $\bar\Gamma^k_{ij} = \Gamma^k_{ij}$ on $U$. By Part 2,
$$
\bar K = \frac{1}{\bar E}\Bigl[(\bar\Gamma^2_{11})_v - (\bar\Gamma^2_{12})_u + \cdots\Bigr] = \frac{1}{E}\Bigl[(\Gamma^2_{11})_v - (\Gamma^2_{12})_u + \cdots\Bigr] = K
$$
at corresponding parameter values, which is the assertion. (Division by $E$ is legitimate since $E = \lvert\mathbf{x}_u\rvert^2 > 0$.)

**Part 4.** Put $F = 0$ in Part 1. The three pairs decouple and give
$$
\Gamma^1_{11} = \frac{E_u}{2E},\quad \Gamma^2_{11} = -\frac{E_v}{2G},\quad \Gamma^1_{12} = \frac{E_v}{2E},\quad \Gamma^2_{12} = \frac{G_u}{2G},\quad \Gamma^1_{22} = -\frac{G_u}{2E},\quad \Gamma^2_{22} = \frac{G_v}{2G}.
$$
Substituting into the Gauss formula and collecting terms turns the right-hand side into the stated divergence-like expression; this is do Carmo's Exercise 1, and the example below carries the substitution out on a concrete chart. For the isothermal case put $E = G = \lambda$: then $\sqrt{EG} = \lambda$ and
$$
K = -\frac{1}{2\lambda}\left[\left(\frac{\lambda_v}{\lambda}\right)_v + \left(\frac{\lambda_u}{\lambda}\right)_u\right] = -\frac{1}{2\lambda}\bigl[(\log\lambda)_{vv} + (\log\lambda)_{uu}\bigr] = -\frac{1}{2\lambda}\Delta\log\lambda,
$$
using $(\log\lambda)_u = \lambda_u/\lambda$.

**Part 5.** Run the method of :ref[the second fundamental form and curvature]{to=geom.surface-curvature} on do Carmo's pair. Both surfaces give
$$
K(u,v) = -\frac{1}{(1+u^2)^2}
$$
at corresponding parameter values, so the curvatures agree everywhere. Their first fundamental forms, however, are
$$
(E, F, G) = \Bigl(1 + \tfrac{1}{u^2},\; 0,\; u^2\Bigr) \quad\text{and}\quad (\bar E, \bar F, \bar G) = \bigl(1,\; 0,\; 1 + u^2\bigr),
$$
which differ at every $u$ (at $u = 1$, for instance, $E = 2$ against $\bar E = 1$). That the coordinate criterion of the definition is not met proves nothing by itself, since the criterion is only sufficient; but the numbers settle the matter directly. For $\varphi = \bar{\mathbf{x}}\circ\mathbf{x}^{-1}$ we have $d\varphi(\mathbf{x}_u) = \bar{\mathbf{x}}_u$, so at $u = 1$
$$
\lvert d\varphi(\mathbf{x}_u)\rvert^2 = \bar E = 1 \ne 2 = E = \lvert\mathbf{x}_u\rvert^2 ,
$$
and $\varphi$ does not preserve the first fundamental form: this correspondence is not an isometry, even though it matches the Gaussian curvatures. (It is this particular correspondence that fails; the argument does not by itself rule out some other local isometry between the two surfaces.) $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$EG - F^2 \ne 0$.** Used in Part 1 to solve for the Christoffel symbols and again when dividing by $E$ in Part 3. At a singular point of a chart the symbols blow up, which is why the formula must be applied chart by chart.
- **Equality of third mixed partials.** Part 2 differentiates a second derivative, so $\mathbf{x}$ must be $C^3$. For a merely $C^2$ surface $e, f, g$ and $K$ exist but the Gauss formula has no meaning, and the theorem is not available.
- **Local, not global.** The theorem compares $K$ at corresponding points of a local isometry. It says nothing about surfaces being globally congruent, and Part 5 shows the converse direction fails even locally.
- **Only $K$, not $H$.** The mean curvature is *not* intrinsic. The plane and a cylinder of radius $a$ are locally isometric (roll the plane up without stretching) and both have $K = 0$, but $H = 0$ for the plane and $\lvert H\rvert = 1/(2a)$ for the cylinder. The second fundamental form as a whole is extrinsic; only the combination $eg - f^2$, divided by $EG - F^2$, survives.
- **Orientability.** The proof uses a chart-compatible $N$, hence $e, f, g$. But $K$ and the whole right-hand side of the Gauss formula are unchanged by $N \mapsto -N$, so the theorem holds on non-orientable surfaces too, applied in each chart.
- **Isometry versus conformal or area-preserving.** The theorem fails for the weaker notions: the sphere is locally conformal to the plane (Mercator's projection) and is locally area-preserving onto the circumscribed cylinder (do Carmo's Exercise 19, pp. 233–234), yet $K \ne 0$ on the sphere and $K = 0$ on both targets. do Carmo's Exercise 18 (p. 233) closes the gap: a map that is both conformal and area-preserving is an isometry.
:::

:::method[Deciding whether two surfaces can be locally isometric]{provenance=original}
1. Choose convenient charts on each surface and compute $E, F, G$ (:ref[first fundamental form]{to=geom.first-fundamental-form}).
2. Compute $K$ for each. Use the extrinsic route $K = (eg-f^2)/(EG-F^2)$ when the embedding is at hand, and the intrinsic route of Part 4 when only the metric is given.
3. Express $K$ on each surface as a function of a quantity that is itself intrinsic, for example of the geodesic distance from a marked point, so that the comparison does not depend on how the charts are labelled.
4. **If the value sets of $K$ differ, stop:** no local isometry exists between the corresponding regions. This is the usual way the theorem is used, as a cheap obstruction.
5. If the values agree, nothing is proved: by Part 5 the converse is false. One must then construct the isometry, usually by finding charts in which $E, F, G$ match identically and applying the coordinate criterion.
6. **Special case $K \equiv 0$.** A surface with vanishing Gaussian curvature is called developable and is, locally, isometric to a plane; a surface with $K$ constant and nonzero is locally isometric to a sphere ($K>0$) or to the pseudosphere ($K<0$).
:::

:::example[The paraboloid, computed without leaving the surface]{provenance=original}
In :ref[the second fundamental form and curvature]{to=geom.surface-curvature} the paraboloid $z = \tfrac12(x^2+y^2)$ was found to have
$$
K = \frac{1}{(1+r^2)^2}
$$
by way of the Gauss map, the second derivatives of $\mathbf{x}$ and the normal $N$ — all of them references to the ambient $\mathbb{R}^3$. We now recover the same function from the line element alone,
$$
ds^2 = (1+r^2)\,dr^2 + r^2\,d\theta^2, \qquad E = 1+r^2, \quad F = 0, \quad G = r^2,
$$
writing $u = r$, $v = \theta$.

**Step 1: Christoffel symbols.** Since $F = 0$, the formulas of Part 4 apply with $E_u = 2r$, $E_v = 0$, $G_u = 2r$, $G_v = 0$:
$$
\Gamma^1_{11} = \frac{E_u}{2E} = \frac{r}{1+r^2}, \qquad
\Gamma^2_{11} = -\frac{E_v}{2G} = 0, \qquad
\Gamma^1_{12} = \frac{E_v}{2E} = 0,
$$
$$
\Gamma^2_{12} = \frac{G_u}{2G} = \frac{2r}{2r^2} = \frac1r, \qquad
\Gamma^1_{22} = -\frac{G_u}{2E} = -\frac{r}{1+r^2}, \qquad
\Gamma^2_{22} = \frac{G_v}{2G} = 0 .
$$
Only $E, F, G$ and their $r$-derivatives were used.

**Step 2: the Gauss formula.** Substituting into
$E K = (\Gamma^2_{11})_v - (\Gamma^2_{12})_u + \Gamma^1_{11}\Gamma^2_{12} + \Gamma^2_{11}\Gamma^2_{22} - \Gamma^1_{12}\Gamma^2_{11} - (\Gamma^2_{12})^2$,
the first, fourth and fifth terms vanish because $\Gamma^2_{11} = \Gamma^1_{12} = 0$. What is left is the second, third and sixth,
$$
E K = -\frac{\partial}{\partial r}\!\left(\frac1r\right) + \frac{r}{1+r^2}\cdot\frac1r - \frac{1}{r^2}
= \frac{1}{r^2} + \frac{1}{1+r^2} - \frac{1}{r^2} = \frac{1}{1+r^2}.
$$
The two $1/r^2$ terms cancel exactly, which they must: a curvature cannot blow up at $r \to 0$, where the surface is perfectly smooth. Dividing by $E = 1+r^2$,
$$
K = \frac{1}{(1+r^2)^2},
$$
in agreement with the extrinsic computation. At $r = 1$, $K = \tfrac14$ by both routes.

**Step 3: the same by the orthogonal-chart formula.** With $\sqrt{EG} = r\sqrt{1+r^2}$, $E_v = 0$ and $G_u = 2r$,
$$
K = -\frac{1}{2r\sqrt{1+r^2}}\left[0 + \frac{\partial}{\partial r}\!\left(\frac{2r}{r\sqrt{1+r^2}}\right)\right]
= -\frac{1}{2r\sqrt{1+r^2}}\cdot\frac{\partial}{\partial r}\!\left(\frac{2}{\sqrt{1+r^2}}\right)
= -\frac{1}{2r\sqrt{1+r^2}}\cdot\frac{-2r}{(1+r^2)^{3/2}} = \frac{1}{(1+r^2)^2}. \;\checkmark
$$

**Step 4: a consequence.** Because $K > 0$ everywhere on the paraboloid while $K \equiv 0$ on the plane, no piece of the paraboloid, however small, can be flattened onto a plane without changing lengths. Compare a sphere of radius $a$, whose metric in geodesic polar coordinates is $ds^2 = d\rho^2 + a^2\sin^2(\rho/a)\,d\theta^2$: here $E = 1$, $G = a^2\sin^2(\rho/a)$, $\sqrt{EG} = a\sin(\rho/a)$ and $G_\rho = 2a\sin(\rho/a)\cos(\rho/a)$, so
$$
K = -\frac{1}{2a\sin(\rho/a)}\frac{\partial}{\partial\rho}\Bigl(2\cos(\rho/a)\Bigr) = -\frac{1}{2a\sin(\rho/a)}\cdot\left(-\frac{2}{a}\sin(\rho/a)\right) = \frac{1}{a^2},
$$
a number computed without ever mentioning the sphere's embedding. For the Earth, $a = 6371\ \text{km}$ gives $K = 2.4637\times10^{-8}\ \text{km}^{-2}$ — small, but not zero, and that is the whole of the application below.
:::

:::application[Why every flat map of the Earth lies]{provenance=original}
**Cartography.** A map sheet is a piece of plane, with $K = 0$. The Earth's surface has $K = 1/a^2 > 0$. By the Theorema Egregium no map projection, over any region however small, can preserve all distances: the scale bar printed in the corner is valid along some directions and not others. Every projection therefore chooses which property to keep. Mercator's is conformal, so angles and hence compass bearings are right and a rhumb line is straight, at the price of areas inflated towards the poles; Archimedes' radial projection of the sphere onto the circumscribed cylinder — the same map as Lambert's cylindrical equal-area projection — keeps areas, at the price of angles (do Carmo's Exercise 19, pp. 233–234); Gauss's own work on this problem, in the survey of Hanover, is what produced the theorem. Nothing keeps both: by do Carmo's Exercise 18 a projection that was conformal and area-preserving would be an isometry, which is exactly what $K \ne 0$ forbids.

**Flat things stay developable.** A sheet of paper, a rolled steel plate or a sheet-metal duct has $K = 0$ before deformation, and bending without stretching is a local isometry, so $K = 0$ afterwards. Hence a flat sheet can be formed into a cylinder or a cone (both $K = 0$) but never into a sphere or any part of one; dishing a flat blank into a hemisphere requires stretching the material, which is why deep drawing and panel beating thin the metal, and why a world globe is assembled from printed gores rather than from one disc.

**Stiffness by curvature.** Conversely, a sheet already curved in one direction cannot bend in the other without stretching, because that would change $K$ from $0$ to something nonzero. Folding a slice of pizza across its length so it will not droop, the corrugation of a cardboard sheet or a metal roof, and the strength of a curved can lid are all the same statement: curvature in one direction locks out bending in the other.

**Gravitation.** The Theorema Egregium is the historical and conceptual starting point for intrinsic geometry, which in turn is the mathematical language of general relativity. There the curvature of spacetime is defined entirely from the metric, with no ambient space to embed into; the Christoffel symbols of Part 1 and the combination of their derivatives in the Gauss formula are the two-dimensional ancestors of the connection coefficients and of the :ref[Riemann curvature tensor]{to=geom.riemann-curvature}, for which $K$ is the single independent component in dimension two.
:::
