---
id: geom.gauss-bonnet
title: The Gauss-Bonnet theorem
kind: theorem
level: advanced
summary: States and proves the local and global Gauss-Bonnet theorems, which tie the total Gaussian curvature of a region, the total geodesic curvature of its boundary and the turning at its corners to a single integer, the Euler-Poincare characteristic $\chi = F - E + V$ of the region; the consequences are that a compact orientable surface has total curvature $2\pi\chi$ whatever its shape, and that a geodesic triangle's angle excess is the curvature it encloses.
prereqs: [geom.theorema-egregium, geom.geodesics, geom.surface-curvature, geom.first-fundamental-form, geom.covariant-derivative, vcalc.stokes-theorem]
provenance: adapted
sources:
  - work: docarmo-2016
    loc: "§4-4, Prop. 3, p. 255 (the algebraic value of the covariant derivative in an orthogonal chart) and Lemma 2, p. 254. §4-5, pp. 267–286: the opening account of Gauss's version for geodesic triangles, p. 267; the definition of a simple closed piecewise regular curve, its vertices and its external angles including the cusp convention, pp. 268–270; the theorem of turning tangents, p. 270 (stated there without proof, after Hopf); simple regions, positively oriented boundaries and the integral over a region, p. 271; the local Gauss-Bonnet theorem and its proof, pp. 272–273; the interpretation of $K$ through parallel transport, Eq. (2), p. 274; regular regions, triangulations, the Euler-Poincare characteristic and Propositions 1–5, pp. 275–277; the global Gauss-Bonnet theorem and its proof by triangulation and counting, pp. 277–279; Corollary 1, p. 279 and Corollary 2, p. 280; applications 1–6, pp. 280–283, including the angle excess of a geodesic triangle; Poincare's index theorem, p. 286, and Exercise 2, p. 286 (the total curvature of a torus of revolution)"
    pages: "254-255, 267-286"
    role: every definition, both statements, both proofs, the corollaries, and the applications to geodesic triangles and to vector fields
  - work: lee-2013
    loc: "Problem 18-9, p. 489: the Euler characteristic of a smooth manifold defined as $\\sum_p (-1)^p \\dim H^p_{dR}(M)$, its homotopy invariance, and its vanishing for a compact orientable odd-dimensional manifold"
    pages: "489"
    role: the cohomological definition of the Euler characteristic, cited in the remark to explain why the combinatorial count is a topological invariant
---

:::definition[Regions, corners and the Euler-Poincare characteristic]{provenance=adapted src="docarmo-2016:§4-5, pp. 268–271 and 275–277"}
Let $S$ be an oriented regular surface.

- Call a map $\alpha : [0,l] \to S$ **simple, closed and piecewise regular** when three things hold: it returns to where it started, $\alpha(0) = \alpha(l)$; it visits no point twice, so that $\alpha$ is injective on $[0,l)$; and for some subdivision $0 = t_0 < t_1 < \cdots < t_{k+1} = l$ it is differentiable with nonvanishing derivative on each open piece $(t_i, t_{i+1})$. The points $\alpha(t_i)$ are its **vertices** and the pieces between them its **regular arcs**. At a vertex both one-sided limits $\alpha'(t_i - 0)$ and $\alpha'(t_i + 0)$ exist and are nonzero.
- The **external angle** $\theta_i$ at $\alpha(t_i)$ is the angle from $\alpha'(t_i-0)$ to $\alpha'(t_i+0)$ of smallest absolute value, taken with the sign of $\det\bigl(\alpha'(t_i-0),\alpha'(t_i+0),N\bigr)$, so that $-\pi < \theta_i < \pi$. When $\lvert\theta_i\rvert = \pi$ the vertex is a **cusp**, and do Carmo fixes the sign by a separate convention using the two branches of the curve in a chart. The **interior angle** is $\varphi_i = \pi - \theta_i$.
- A **simple region** $R \subseteq S$ is a connected open set together with its boundary, homeomorphic to a closed disk, whose boundary $\partial R$ is the trace of such a curve. The curve is **positively oriented** if, at each point of a regular arc, the positive orthonormal basis $\{\alpha'(t), h(t)\}$ has $h(t)$ pointing into $R$: walking along $\alpha$ with one's head along $N$, the region stays on the left.
- A **regular region** is a compact connected $R \subseteq S$ whose boundary is a finite union of disjoint simple closed piecewise regular curves. A compact surface counts as a regular region with empty boundary.
- A **triangle** is a simple region with exactly three vertices, all with $\theta_i \ne 0$. To **triangulate** a regular region $R$ is to give finitely many triangles that together cover $R$ and overlap only along a shared whole edge or at a shared single vertex. Writing $F$, $E$, $V$ for its numbers of triangles, edges and vertices, the **Euler-Poincare characteristic** of the triangulation is
  $$
  \chi = F - E + V .
  $$
- For a differentiable $f$ on $S$ and a region inside one chart, $\int_R f\,d\sigma := \iint_{\mathbf{x}^{-1}(R)} f\sqrt{EG-F^2}\,du\,dv$; this is independent of the chart within one orientation class, and summing over the triangles of a triangulation extends it to any regular region.
:::

:::statement[Gauss-Bonnet, local and global]{provenance=adapted src="docarmo-2016:§4-5, the local theorem p. 272, Props. 1–4 pp. 275–276, the global theorem p. 277, Eq. (2) p. 274, Cor. 1 p. 279, Cor. 2 p. 280, and application 6 pp. 282–283"}
Let $S$ be an oriented regular surface, $K$ its Gaussian curvature and $k_g$ the geodesic curvature of a curve in it.

1. **(Topological input, stated without proof.)** Every regular region admits a triangulation; it admits one whose triangles each lie in a single chart of a given orientation-compatible family, with adjacent triangles inducing opposite orientations on a shared edge; and $\chi$ is the same for every triangulation of $R$, so it may be written $\chi(R)$. A compact connected surface in $\mathbb{R}^3$ has $\chi(S) \in \{2, 0, -2, \dots\}$, two such surfaces are homeomorphic exactly when their characteristics agree, and $g = (2-\chi(S))/2$ is the **genus**, the number of handles.
2. **(Local Gauss-Bonnet.)** Let $\mathbf{x} : U \to S$ be an *isothermal* parametrization, $F = 0$ and $E = G = \lambda(u,v) > 0$, with $U$ homeomorphic to an open disk and $\mathbf{x}$ compatible with the orientation. Let $R \subseteq \mathbf{x}(U)$ be a simple region whose boundary is the trace of a positively oriented $\alpha$, parametrized by arc length, with vertices $\alpha(s_0),\dots,\alpha(s_k)$ and external angles $\theta_0,\dots,\theta_k$. Then
   $$
   \sum_{i=0}^{k}\int_{s_i}^{s_{i+1}} k_g(s)\,ds \;+\; \iint_R K\,d\sigma \;+\; \sum_{i=0}^{k}\theta_i \;=\; 2\pi .
   $$
3. **(Corollary 1.)** The same identity is true in every simple region of an arbitrary regular surface; the isothermal chart may be dropped.
4. **(Global Gauss-Bonnet.)** Let $R \subseteq S$ be a regular region whose boundary consists of the positively oriented closed curves $C_1,\dots,C_n$, and let $\theta_1,\dots,\theta_p$ be all of their external angles. Then
   $$
   \sum_{i=1}^{n}\int_{C_i} k_g(s)\,ds \;+\; \iint_R K\,d\sigma \;+\; \sum_{l=1}^{p}\theta_l \;=\; 2\pi\chi(R) .
   $$
5. **(Corollary 2: total curvature.)** If $S$ is a compact orientable surface then
   $$
   \iint_S K\,d\sigma = 2\pi\chi(S) .
   $$
   The left-hand side is unchanged by any deformation of $S$ that does not change its topology.
6. **(Angle excess.)** For a geodesic triangle $T$ with interior angles $\varphi_1,\varphi_2,\varphi_3$,
   $$
   \sum_{i=1}^{3}\varphi_i - \pi = \iint_T K\,d\sigma ,
   $$
   so the angle sum exceeds $\pi$ where $K > 0$, equals $\pi$ where $K = 0$ and falls short where $K < 0$. When $K \ne 0$ on $T$ the right-hand side is the area of the spherical image $N(T)$ under the Gauss map, which is how Gauss himself stated it.
7. **(Holonomy.)** If $R$ is a simple region without vertices and $w$ is parallel-transported once around $\partial R$, the angle $\varphi$ it makes with a fixed chart direction changes by
   $$
   \Delta\varphi = \iint_R K\,d\sigma .
   $$
:::

:::idea{provenance=original}
In the plane, walking once round a closed curve turns the tangent through exactly $2\pi$, with the corners contributing their external angles: that is the theorem of turning tangents. On a surface the same walk is measured against a *moving* reference frame — the coordinate direction $\mathbf{x}_u$ — and the mismatch between the turning you feel (the geodesic curvature, which measures turning relative to parallel transport) and the turning the chart records is a term that Green's theorem converts into an area integral. The Theorema Egregium identifies the integrand of that area integral as $-K$. So the local theorem is nothing but turning tangents plus Green's theorem plus the Gauss formula. The global theorem then comes from arithmetic: triangulate the region, add up the local identity over all $F$ triangles, and watch the boundary integrals over interior edges cancel in pairs while the corner angles reorganize themselves, by a count of faces, edges and vertices, into $2\pi(F-E+V)$.
:::

:::proof{provenance=adapted src="docarmo-2016:§4-4, Lemma 2 p. 254 and Prop. 3 p. 255; docarmo-2016:§4-5, pp. 272–273 and 277–279"}
**Lemma (geodesic curvature in an orthogonal chart).** *Let $\mathbf{x}$ be an orthogonal parametrization ($F = 0$) compatible with the orientation, let $w(t)$ be a differentiable unit tangent field along $t\mapsto\mathbf{x}(u(t),v(t))$, and let $\varphi(t)$ be a smoothly varying branch of the angle measured from $\mathbf{x}_u$ round to $w(t)$. Then*
$$
\left[\frac{Dw}{dt}\right] = \frac{1}{2\sqrt{EG}}\left(G_u\frac{dv}{dt} - E_v\frac{du}{dt}\right) + \frac{d\varphi}{dt} .
$$

*Proof of the lemma.* Set $e_1 = \mathbf{x}_u/\sqrt{E}$ and $e_2 = \mathbf{x}_v/\sqrt{G}$, an orthonormal frame with $e_1\wedge e_2 = N$. For two unit fields along the curve, the algebraic values of their covariant derivatives differ by the rate of change of the angle between them (do Carmo's Lemma 2), so with $e_1$ as the reference field
$$
\left[\frac{Dw}{dt}\right] = \left[\frac{De_1}{dt}\right] + \frac{d\varphi}{dt} .
$$
For the first term, $[De_1/dt] = \langle de_1/dt,\, N\wedge e_1\rangle = \langle de_1/dt,\, e_2\rangle = \langle (e_1)_u, e_2\rangle\,u' + \langle (e_1)_v, e_2\rangle\,v'$. Now $F = 0$ gives $\langle \mathbf{x}_u,\mathbf{x}_v\rangle = 0$, so differentiating it in $u$ yields $\langle\mathbf{x}_{uu},\mathbf{x}_v\rangle = -\langle\mathbf{x}_u,\mathbf{x}_{uv}\rangle = -\tfrac12 E_v$. Hence
$$
\langle (e_1)_u, e_2\rangle = \left\langle \frac{\mathbf{x}_{uu}}{\sqrt E} - \frac{E_u\,\mathbf{x}_u}{2E^{3/2}},\ \frac{\mathbf{x}_v}{\sqrt G}\right\rangle = \frac{\langle\mathbf{x}_{uu},\mathbf{x}_v\rangle}{\sqrt{EG}} = -\frac{E_v}{2\sqrt{EG}},
$$
the second term dropping out because $\langle\mathbf{x}_u,\mathbf{x}_v\rangle = 0$; the same computation in the other variable gives $\langle (e_1)_v, e_2\rangle = \langle\mathbf{x}_{uv},\mathbf{x}_v\rangle/\sqrt{EG} = G_u/(2\sqrt{EG})$. Substituting proves the lemma. Taking $w = \alpha'$ and $t = s$ turns it into a formula for $k_g$. $\square$

**Part 2: the local theorem.** Write the boundary curve in the chart as $u = u(s)$, $v = v(s)$, and on each closed arc $[s_i, s_{i+1}]$ pick a smooth branch $\varphi_i(s)$ of the angle that $\alpha'(s)$ makes with $\mathbf{x}_u$. By the lemma, on each regular arc
$$
k_g(s) = \frac{1}{2\sqrt{EG}}\left(G_u\frac{dv}{ds} - E_v\frac{du}{ds}\right) + \frac{d\varphi_i}{ds} .
$$
Integrate over each $[s_i,s_{i+1}]$ and add. The first group is a line integral $\oint (P\,du + Q\,dv)$ around $\partial R$ with
$$
P = -\frac{E_v}{2\sqrt{EG}}, \qquad Q = \frac{G_u}{2\sqrt{EG}},
$$
so Green's theorem in the $uv$ plane (:ref[Stokes' theorem and Green's theorem in the plane]{to=vcalc.stokes-theorem}) replaces it by $\iint (Q_u - P_v)\,du\,dv$:
$$
\sum_i \int_{s_i}^{s_{i+1}} k_g\,ds = \iint_{\mathbf{x}^{-1}(R)}\left[\left(\frac{G_u}{2\sqrt{EG}}\right)_{\!u} + \left(\frac{E_v}{2\sqrt{EG}}\right)_{\!v}\right]du\,dv \;+\; \sum_i\int_{s_i}^{s_{i+1}}\frac{d\varphi_i}{ds}\,ds .
$$
Here the hypothesis that the chart is isothermal enters for the first time. With $E = G = \lambda$ we have $\sqrt{EG} = \lambda$ and the bracket is
$$
\frac12\left[\left(\frac{\lambda_u}{\lambda}\right)_{\!u} + \left(\frac{\lambda_v}{\lambda}\right)_{\!v}\right] = \frac{1}{2}\Delta\log\lambda = -K\lambda ,
$$
the last step being the isothermal form of the Gauss formula proved in :ref[Gauss's Theorema Egregium]{to=geom.theorema-egregium}, namely $K = -(1/2\lambda)\Delta\log\lambda$. Since $\sqrt{EG-F^2} = \lambda$ as well, $\iint (-K\lambda)\,du\,dv = -\iint_R K\,d\sigma$, and therefore
$$
\sum_i \int_{s_i}^{s_{i+1}} k_g\,ds = -\iint_R K\,d\sigma + \sum_i\bigl(\varphi_i(s_{i+1}) - \varphi_i(s_i)\bigr).
$$
The isothermal hypothesis is needed a second time now. Because the chart is conformal, angles measured in the $uv$ plane are the angles on $S$, so the theorem of turning tangents — a statement about plane curves, which do Carmo quotes from Hopf without proof — may be applied to the image curve:
$$
\sum_i\bigl(\varphi_i(s_{i+1}) - \varphi_i(s_i)\bigr) + \sum_i \theta_i = \pm 2\pi ,
$$
the sign being $+$ for a positively oriented curve, as the case of a circle in the plane shows. Substituting and rearranging gives the local theorem.

**Part 4: the global theorem.** Triangulate $R$ so that every triangle lies in an isothermal chart compatible with the orientation, with every triangle boundary positively oriented; such a triangulation exists by the topological input. Apply the local theorem to each triangle and add the $F$ identities. Each *interior* edge belongs to two triangles and is traversed once in each direction, so its $k_g$ integrals cancel; only the boundary curves $C_i$ survive. Writing $\theta_{jk}$, $k = 1,2,3$, for the external angles of the triangle $T_j$,
$$
\sum_i\int_{C_i} k_g\,ds + \iint_R K\,d\sigma + \sum_{j,k}\theta_{jk} = 2\pi F .
$$
It remains to turn $\sum_{j,k}\theta_{jk}$ into $2\pi F - 2\pi\chi(R)$ plus the boundary corners. Pass to interior angles, $\varphi_{jk} = \pi - \theta_{jk}$:
$$
\sum_{j,k}\theta_{jk} = 3\pi F - \sum_{j,k}\varphi_{jk}.
$$
Split the edges and vertices into interior and exterior ones, $E = E_i + E_e$ and $V = V_i + V_e$. Every triangle has three edges; an interior edge is shared by two triangles and an exterior edge by one, so $3F = 2E_i + E_e$, whence $3\pi F = 2\pi E_i + \pi E_e$. The boundary curves are closed, so along them edges and vertices alternate and $E_e = V_e$. Now count the interior angles by the vertex they sit at:
- around an interior vertex the angles fill a full turn, contributing $2\pi V_i$;
- an exterior vertex that the triangulation introduced in the middle of a regular arc has angles filling a half turn, contributing $\pi V_{et}$, where $V_{et}$ is their number;
- an exterior vertex that is a corner $\theta_l$ of some $C_i$ contributes the interior angle $\pi - \theta_l$ of the region there, so these contribute $\sum_l(\pi - \theta_l)$, and their number is $V_{ec} = p$, with $V_e = V_{et} + V_{ec}$.

Therefore
$$
\sum_{j,k}\theta_{jk} = 2\pi E_i + \pi E_e - 2\pi V_i - \pi V_{et} - \sum_l(\pi - \theta_l).
$$
Use $\sum_l \pi = \pi V_{ec}$ and $\pi V_{et} + \pi V_{ec} = \pi V_e$, then add and subtract $\pi E_e$ and use $E_e = V_e$ once more:
$$
2\pi E_i + \pi E_e = 2\pi E_i + 2\pi E_e - \pi E_e = 2\pi E - \pi V_e ,
$$
so that
$$
\sum_{j,k}\theta_{jk} = 2\pi E - \pi V_e - 2\pi V_i - \pi V_e + \sum_l\theta_l = 2\pi E - 2\pi V + \sum_l \theta_l .
$$
Substituting this into the summed identity and moving the terms,
$$
\sum_i\int_{C_i} k_g\,ds + \iint_R K\,d\sigma + \sum_l\theta_l = 2\pi F - 2\pi E + 2\pi V = 2\pi\chi(R).
$$

**Parts 3, 5, 6 and 7.** A simple region has $\chi = 1$ — triangulate a disk and count — so part 4 contains part 3, and in particular the local identity holds with no isothermal hypothesis. A compact surface is a regular region with no boundary, so every $k_g$ integral and every $\theta_l$ is absent and part 5 follows. For part 6, a geodesic triangle has $k_g \equiv 0$ on all three arcs and $\chi = 1$, so $\iint_T K\,d\sigma + \sum_i\theta_i = 2\pi$; substituting $\theta_i = \pi - \varphi_i$ gives $\iint_T K\,d\sigma = \sum_i \varphi_i - \pi$. Part 7 repeats the first half of the proof of part 2 with $w$ a parallel field rather than $\alpha'$: then $[Dw/ds] = 0$ identically, so integrating the lemma around a vertex-free boundary gives $0 = -\iint_R K\,d\sigma + \Delta\varphi$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Orientability.** It is used three times: to give the external angles their signs, to fix what "positively oriented" means, and to define $k_g$ at all, which is a signed quantity. Everything above is therefore stated, as do Carmo states it, for an oriented surface, and part 5 for an orientable compact one; on a non-orientable surface the proof as given has no starting point, since there is no global $N$ with which to sign anything.
- **Isothermal chart.** The proof of part 2 uses it twice, and only for convenience. The curvature step works in any orthogonal chart, because the orthogonal-chart formula of :ref[Gauss's Theorema Egregium]{to=geom.theorema-egregium} already gives $\bigl(E_v/2\sqrt{EG}\bigr)_v + \bigl(G_u/2\sqrt{EG}\bigr)_u = -K\sqrt{EG}$. It is the *turning-tangents* step that needs conformality, so that angles in the parameter plane are angles on the surface. do Carmo says exactly this, and part 3 removes the hypothesis afterwards.
- **Compactness of $R$.** A regular region is compact, which is what makes the triangulation finite and the sums above finite. Without it the counting argument has nothing to count: the plane has $\iint K\,d\sigma = 0$ and no finite $\chi$ in this sense.
- **Simple, non-self-intersecting boundary.** Turning tangents fails for a curve that crosses itself — a figure eight turns through $0$, not $2\pi$ — so a region bounded by a self-intersecting curve is outside the theorem until it is cut into simple pieces.
- **Finitely many corners, each with $\lvert\theta_i\rvert \le \pi$.** The external angle is only defined where both one-sided tangents exist and are nonzero. A boundary with infinitely many corners, or a curve with a vanishing one-sided tangent, is not piecewise regular and is excluded.
- **Positive orientation.** It fixes the sign $+2\pi$ rather than $-2\pi$ in turning tangents. Reversing the orientation of $\partial R$ flips the signs of every $k_g$ and every $\theta_i$ and would give $-2\pi\chi(R)$.
- **What is assumed rather than proved.** Three ingredients are quoted: that triangulations exist with the properties in part 1, that $\chi$ does not depend on the triangulation, and the theorem of turning tangents. do Carmo also presents these without proof, referring to Ahlfors and Sario for the first two and to Hopf for the third, and we do the same. The independence of $\chi$ from the triangulation is less mysterious from another direction: Lee defines the Euler characteristic of a smooth manifold as $\sum_p (-1)^p\dim H^p_{dR}(M)$, manifestly free of any choice of triangulation, and sets it as a problem to show that this number is a homotopy invariant.
- **Smoothness class.** $K$ must be integrable and $k_g$ defined, so $C^3$ as in the Gauss formula; the proof also needs the boundary arcs to be $C^2$ for $k_g$ to exist.
:::

:::method[Using Gauss-Bonnet]{provenance=original}
1. **Decide what you know and what you want.** The identity has four slots — boundary turning, enclosed curvature, corners, topology. Three known values give the fourth. Most applications fix the topology and one other slot.
2. **Kill a term by choosing the region well.** A boundary made of geodesic arcs kills the $k_g$ integral; a smooth boundary kills the corner sum; a closed surface kills both.
3. **Get the topology right.** For a simple region (a disk) $\chi = 1$; for an annulus or a region between two disjoint closed boundary curves $\chi = 0$; for a sphere $\chi = 2$; for a torus $\chi = 0$; for a surface of genus $g$, $\chi = 2 - 2g$.
4. **As an obstruction.** If the identity forces a contradiction, the configuration does not exist. Two examples, both do Carmo's: on a surface with $K \le 0$ two geodesics leaving a point cannot meet again so as to bound a simple region, since $\iint_R K\,d\sigma + \theta_1 + \theta_2 = 2\pi$ with $\theta_i < \pi$ is then impossible; and a compact surface with $K > 0$ has $\chi > 0$, so it is homeomorphic to a sphere.
5. **As a conservation law.** On a compact surface, $\iint K\,d\sigma$ cannot be changed by any deformation. Pushing curvature out of one part of the surface simply piles it up elsewhere.
6. **Check the sign conventions before trusting a number.** Orient the boundary so that the region is on the left, and verify on a case you know — a flat disk, where $\oint k_g\,ds = 2\pi$ and $K = 0$ — before applying the formula to a hard case.
:::

:::example[Three regions, three checks]{provenance=original}
Throughout, the sphere of radius $a$ has $K = 1/a^2$, established intrinsically in :ref[Gauss's Theorema Egregium]{to=geom.theorema-egregium}.

**(a) A geodesic triangle: the corners carry everything.** On the sphere of radius $a = 6371\ \mathrm{km}$, take the region bounded by the meridian arcs at longitudes $0^\circ$ and $50^\circ$ running from the north pole down to the equator, together with the arc of the equator between them, and call it $T$. All three sides are great-circle arcs, hence geodesics, so $k_g \equiv 0$. The interior angles are $50^\circ$ at the pole and $90^\circ$ where each meridian crosses the equator. By part 6,
$$
\iint_T K\,d\sigma = \Bigl(\tfrac{\pi}{2} + \tfrac{\pi}{2} + \tfrac{50\pi}{180}\Bigr) - \pi = \frac{50\pi}{180} = 0.8726646 .
$$
Independently, the region is the slice of the northern hemisphere cut by a $50^\circ$ wedge, of area $(50/360)\times 2\pi a^2$, so
$$
\iint_T K\,d\sigma = \frac{1}{a^2}\cdot\frac{50}{360}\cdot 2\pi a^2 = \frac{50\pi}{180} = 0.8726646 . \;\checkmark
$$
The two agree for every $a$, as they must, since the left side is dimensionless. The area itself is $0.8726646\times 6371^2 = 3.5421\times 10^{7}\ \mathrm{km}^2$, about $7\%$ of the Earth's surface.

**(b) A spherical cap: the boundary carries everything.** On the unit sphere take the cap $\theta \le \theta_0$ above the parallel of colatitude $\theta_0 = 60^\circ$. The boundary is smooth, so there are no corners, and the region is a disk, so $\chi = 1$. The parallel is not a geodesic; its geodesic curvature has absolute value $\cot\theta_0$, by do Carmo's computation from $k^2 = k_g^2 + k_n^2$ with $k = 1/\sin\theta_0$ (the circle has radius $\sin\theta_0$) and $k_n = 1$; with the orientation that makes the boundary positively oriented around the cap, the sign is positive for $\theta_0 < \pi/2$. Its length is $2\pi\sin\theta_0$. Hence
$$
\oint k_g\,ds = 2\pi\sin\theta_0\cdot\frac{\cos\theta_0}{\sin\theta_0} = 2\pi\cos\theta_0 = 2\pi\times 0.5 = \pi ,
$$
while the cap has area $2\pi(1 - \cos\theta_0) = \pi$ and $K = 1$, so $\iint_R K\,d\sigma = \pi$. The total is
$$
\pi + \pi + 0 = 2\pi = 2\pi\chi(R). \;\checkmark
$$
Note how the two terms trade off as $\theta_0$ grows: at $\theta_0 \to 0$ the small circle supplies almost all of the $2\pi$ and the curvature almost none; at $\theta_0 = \pi/2$ the equator is a geodesic and supplies nothing, the hemisphere's curvature supplying the whole $2\pi$.

**(c) A torus: total curvature zero, computed twice.** Parametrize the torus of revolution $\Sigma$ with tube radius $r$ and centre-circle radius $A > r$ by
$$
\mathbf{x}(u,v) = \bigl((A + r\cos u)\cos v,\ (A + r\cos u)\sin v,\ r\sin u\bigr), \qquad 0 \le u, v < 2\pi .
$$
Then $E = r^2$, $F = 0$, $G = (A + r\cos u)^2$, and the second fundamental form gives $e = r$, $f = 0$, $g = (A+r\cos u)\cos u$, so
$$
K = \frac{eg - f^2}{EG - F^2} = \frac{\cos u}{r\,(A + r\cos u)}, \qquad d\sigma = \sqrt{EG-F^2}\,du\,dv = r(A + r\cos u)\,du\,dv .
$$
The two factors $r(A + r\cos u)$ cancel exactly, leaving $K\,d\sigma = \cos u\,du\,dv$ and
$$
\iint_\Sigma K\,d\sigma = \int_0^{2\pi}\!\!\int_0^{2\pi}\cos u\,du\,dv = 0 .
$$
This is do Carmo's Exercise 2, done without Gauss-Bonnet. Part 5 predicts the same, since the torus has $\chi = 0$. With $A = 3$, $r = 1$ the cancellation is worth watching in detail: on the outer half $\lvert u\rvert < \pi/2$ the curvature is positive, peaking at $K = 1/4$ on the outer equator, and contributes $\int_0^{2\pi}\!\int_{-\pi/2}^{\pi/2}\cos u\,du\,dv = +4\pi$; on the inner half it is negative, reaching $K = -1/2$ on the inner equator, and contributes $-4\pi$. The positive bulge and the negative saddle cancel to the last digit, and they must, for every $A > r$: the integrand does not remember $A$ or $r$ at all.
:::

:::application{provenance=original}
**Holonomy and geometric phase.** Part 7 says that carrying a vector around a loop on a curved surface and bringing it home leaves it rotated by the enclosed curvature. This is the prototype of every geometric phase in physics. In Berry's phase the "surface" is the space of parameters of a Hamiltonian, the "curvature" is the Berry curvature and the rotation is the phase a quantum state picks up on a cyclic adiabatic excursion; the phase of a spin-$\tfrac12$ in a slowly rotated magnetic field is exactly half the solid angle swept out, which is the sphere's $\iint K\,d\sigma$. The same structure governs the Aharonov-Bohm phase, the rotation of the polarization of light in a coiled optical fibre (Pancharatnam's phase) and the holonomies of gauge theory, where $K$ becomes a field strength.

**The Foucault pendulum.** The swing plane of a Foucault pendulum is parallel-transported along the circle of latitude the pendulum rides on as the Earth turns. For latitude $\lambda$ the cap north of that parallel has, by part (b) of the example with $\cos\theta_0 = \sin\lambda$, total curvature $2\pi(1 - \sin\lambda)$, so that is the holonomy; the remaining $2\pi\sin\lambda$ is the precession an observer on the ground sees in one sidereal day. In Paris, $\lambda = 48.8566^\circ$, giving $360^\circ\times\sin\lambda = 271.1^\circ$ per day, or $11.30^\circ$ per hour, the figure the pendulum in the Pantheon keeps.

**Topology from a measurement.** Corollary 2 turns a geometric integral into an integer. If one can measure curvature over a closed surface — a vesicle, a protein shell, a crystallite — then $\iint K\,d\sigma/2\pi$ counts the handles, and nothing about shape, stretching or local detail can change it. In the elasticity of thin shells this is why the Gaussian-curvature term in the bending energy contributes a constant for a closed shell and can be dropped; it reappears the moment the shell opens a pore or buds off a daughter vesicle, because $\chi$ jumps. Viral capsids and fullerenes are the standard illustration: a closed shell built of hexagons and pentagons has $\chi = 2$, and the counting of part 1 forces exactly twelve pentagons however large the shell, which is why $\mathrm{C}_{60}$ and icosahedral capsids look the way they do.

**Defects and the hairy ball theorem.** do Carmo's companion result, Poincare's index theorem, says that the indices of the isolated zeros of a vector field on a compact surface sum to $\chi(S)$. On a sphere $\chi = 2 \ne 0$, so no nonvanishing tangent field exists: a wind field on the Earth always has a calm point, and hair on a ball cannot be combed flat. The same count fixes the total topological charge of defects in a two-dimensional nematic liquid crystal or a superfluid film confined to a curved substrate, and in cosmology and condensed-matter field theory it is the two-dimensional ancestor of the index theorems that tie the integral of a curvature to a conserved integer.
:::
