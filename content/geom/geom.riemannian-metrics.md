---
id: geom.riemannian-metrics
title: Riemannian manifolds
kind: definition
level: advanced
summary: Puts an inner product on every tangent space of a smooth manifold, shows that this can always be done, and derives from it the lengths, the volume element, the Levi-Civita connection and the signature conventions that the rest of the geometry runs on.
prereqs: [geom.smooth-manifolds, geom.metric-tensor, geom.tangent-vectors, geom.partition-of-unity]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 13, pp. 327–332 (Riemannian metrics, coordinate form, the Euclidean metric, Prop. 13.3 on existence, orthonormal frames, pullback metrics); pp. 337–340 (length of curve segments, the Riemannian distance function, Thm 13.29); pp. 343–344 (nondegeneracy, signature, pseudo-Riemannian and Lorentz metrics); Ch. 15, Props. 15.29 and 15.31, pp. 388–390 (the Riemannian volume form)"
    pages: "327-332, 337-340, 343-344, 388-390"
    role: definitions; existence by a partition of unity; lengths and the distance function; signature and the Lorentz case; the volume form and its coordinate expression
  - work: docarmo-2016
    loc: "§5-10, Def. 5a and the construction of the covariant derivative, pp. 446–447; sectional curvature, p. 448"
    pages: "446-448"
    role: the defining properties of the Levi-Civita connection, its uniqueness and the resulting formula for the Christoffel symbols; curvature of a Riemannian manifold through sectional curvature
  - work: stakgold-holst-2011
    loc: "Ch. 10, §10.4, pp. 727–728 (gravity as a geometric effect; the Einstein equations)"
    pages: "727-728"
    role: the physical reading of a Lorentzian metric in general relativity
---

:::definition[Riemannian and pseudo-Riemannian manifolds]{provenance=adapted src="lee-2013:Ch. 13, pp. 327–330, 337–338, 343–344"}
Let $M$ be a :ref[smooth manifold]{to=geom.smooth-manifolds} of dimension $n$.

- A **Riemannian metric** on $M$ is a covariant 2-tensor field $g$ that is smooth, is symmetric, and is positive definite on $T_pM$ for every $p\in M$; in other words, $g$ picks out an inner product $g_p$ on each tangent space, and does so smoothly in $p$. One then calls $(M,g)$ a **Riemannian manifold**. We write $\langle v,w\rangle_g = g_p(v,w)$ for $v,w \in T_pM$.
- In smooth local coordinates $x^1,\dots,x^n$ the metric is $g = g_{ij}\,dx^i\,dx^j$, with $g_{ij} = \langle \partial/\partial x^i, \partial/\partial x^j\rangle_g$. Each $g_{ij}$ is a smooth function, and the matrix they form is symmetric and positive definite at every point of the chart; it is the :ref[metric tensor]{to=geom.metric-tensor} of the coordinate frame, and $g^{ij}$ denotes its inverse. Repeated indices are summed.
- The **length** of $v \in T_pM$ is $|v|_g = \langle v,v\rangle_g^{1/2}$, and the **angle** between nonzero $v,w$ is the $\theta \in [0,\pi]$ with $\cos\theta = \langle v,w\rangle_g/(|v|_g|w|_g)$. A local frame $(E_1,\dots,E_n)$ is **orthonormal** if $\langle E_i,E_j\rangle_g = \delta_{ij}$ at every point of its domain.
- The **length of a piecewise smooth curve segment** $\gamma:[a,b]\to M$ is $L_g(\gamma) = \int_a^b |\gamma'(t)|_g\,dt$, and for connected $M$ the **Riemannian distance** $d_g(p,q)$ is the infimum of $L_g(\gamma)$ over all piecewise smooth $\gamma$ from $p$ to $q$.
- If $F:M\to N$ is smooth and $h$ is a Riemannian metric on $N$, the **pullback** $F^{*}h$ is the 2-tensor field $(F^{*}h)_p(v,w) = h_{F(p)}(dF_p v, dF_p w)$; it is a Riemannian metric on $M$ exactly when $F$ is an immersion (see :ref[pushforwards and pullbacks]{to=geom.pullbacks-pushforwards}).
- A symmetric 2-tensor on a vector space is **nondegenerate** if $v \mapsto g(v,\cdot)$ is an isomorphism onto the dual space. A change of basis brings any nondegenerate symmetric 2-tensor to a diagonal matrix of $\pm 1$; the pair $(r,s)$ of numbers of $+1$'s and $-1$'s is its **signature**, and is independent of the basis by Sylvester's law of inertia. Relaxing positivity to nondegeneracy, a **pseudo-Riemannian metric** is a smooth symmetric 2-tensor field whose value at every point is nondegenerate, all these values carrying one and the same signature. When that signature is $(n-1,1)$ — or $(1,n-1)$, conventions differing — the field is a **Lorentz metric**.
:::

:::statement[Existence, the Levi-Civita connection, and the volume form]{provenance=adapted src="lee-2013:Prop. 13.3 (p. 329), Props. 15.29 and 15.31 (pp. 389–390); docarmo-2016:§5-10, p. 447"}
Let $M$ be a smooth $n$-manifold.

1. **Existence.** $M$ admits a Riemannian metric.

2. **Levi-Civita connection.** Let $g$ be a Riemannian metric on $M$. There is exactly one covariant derivative $D$, assigning to vector fields $u,w$ a vector field $D_u w$, with these four properties, for all vector fields $u,v,w$ and all smooth real functions $f,h$ on $M$:

   - $D_{fu + h w}v = f\,D_u v + h\,D_w v$;
   - $D_u(fv + hw) = f\,D_u v + (uf)\,v + h\,D_u w + (uh)\,w$, where $uf$ is the derivative of $f$ along $u$;
   - *symmetry*: $D_{x_i}x_j = D_{x_j}x_i$ for the coordinate fields $x_i = \partial/\partial u^i$ of any chart;
   - *compatibility with $g$*: $\dfrac{\partial}{\partial u^{k}}\langle x_i,x_j\rangle_g = \langle D_{x_k}x_i, x_j\rangle_g + \langle x_i, D_{x_k}x_j\rangle_g$.

   Its coefficients $D_{x_i}x_j = \Gamma^{k}_{ij}x_k$ in any chart are the Christoffel symbols of $g$,

   $$
   \Gamma^{k}_{ij} \;=\; \tfrac12\, g^{kl}\Bigl(\frac{\partial g_{il}}{\partial u^{j}} + \frac{\partial g_{jl}}{\partial u^{i}} - \frac{\partial g_{ij}}{\partial u^{l}}\Bigr).
   $$

3. **Volume form.** If in addition $M$ is oriented and $n\ge 1$, there is exactly one smooth $n$-form $\omega_g$ on $M$ with $\omega_g(E_1,\dots,E_n)=1$ for every local *oriented* orthonormal frame $(E_i)$, and in any oriented chart

   $$
   \omega_g = \sqrt{\det(g_{ij})}\;dx^1\wedge\cdots\wedge dx^n .
   $$
:::

:::idea{provenance=original}
All three parts turn a pointwise piece of linear algebra into a global object. For existence, an inner product is available in every chart — copy the Euclidean one — and the set of inner products on a fixed vector space is convex, so a partition of unity can average the local choices without destroying positivity. For the connection, the four required properties are enough to pin down the $n^3$ coefficients $\Gamma^k_{ij}$: symmetry and compatibility give a linear system whose matrix is $g$, and $g$ is invertible. For the volume form, the normalisation on orthonormal frames determines the form on each chart, and two oriented orthonormal frames differ by a rotation, whose determinant is $1$, so the local definitions agree where they overlap.
:::

:::proof{provenance=adapted src="lee-2013:proofs of Prop. 13.3 (p. 329), Props. 15.29 and 15.31 (pp. 389–390); docarmo-2016:§5-10, pp. 446–447"}
**1. Existence.** Cover $M$ by chart domains $U_\alpha$ with coordinate maps $\varphi_\alpha$, and on each $U_\alpha$ let $g_\alpha = \varphi_\alpha^{*}\bar g$ be the pullback of the Euclidean metric, so that $g_\alpha = \delta_{ij}\,dx^i dx^j$ in those coordinates and is therefore a Riemannian metric on $U_\alpha$. Take a smooth partition of unity $\{\psi_\alpha\}$ subordinate to $\{U_\alpha\}$ (:ref[partitions of unity]{to=geom.partition-of-unity}) and set $g = \sum_\alpha \psi_\alpha g_\alpha$, each summand read as $0$ off the support of $\psi_\alpha$.

- The sum is smooth and symmetric: local finiteness of the partition makes it a finite sum near each point.
- It is positive definite. Fix $p$ and $0 \ne v \in T_pM$. Then $g_p(v,v) = \sum_\alpha \psi_\alpha(p)\,g_\alpha|_p(v,v)$ is a sum of nonnegative terms, *because each $g_\alpha$ is positive definite and each $\psi_\alpha \ge 0$*. The functions $\psi_\alpha$ sum to $1$, so at least one is strictly positive at $p$, and its term is strictly positive. Hence $g_p(v,v)>0$.

**2. Levi-Civita connection.** Work in one chart with coordinate fields $x_i$ and write $D_{x_i}x_j = \Gamma^{k}_{ij}x_k$; the first two properties say that $D$ is determined on all vector fields once these coefficients are known, since $D_{u}(v^j x_j) = u^i\bigl(\partial_i v^k + v^j\Gamma^k_{ij}\bigr)x_k$. The symmetry property says $\Gamma^k_{ij}=\Gamma^k_{ji}$.

*Lower an index.* Put $\Gamma_{lij} = \langle D_{x_i}x_j, x_l\rangle_g = g_{lk}\Gamma^{k}_{ij}$; it too is symmetric in $i$ and $j$. Compatibility reads

$$
\partial_k g_{ij} = \Gamma_{jki} + \Gamma_{ikj}.
$$

*Solve.* Write that identity three times, cycling the indices, and combine them so that the symmetry in the last two slots of $\Gamma$ cancels all but one term:

$$
\partial_j g_{il} + \partial_i g_{jl} - \partial_l g_{ij} = (\Gamma_{lji}+\Gamma_{ijl}) + (\Gamma_{lij}+\Gamma_{jil}) - (\Gamma_{jli}+\Gamma_{ilj}) = 2\,\Gamma_{lij},
$$

since $\Gamma_{ijl}=\Gamma_{ilj}$ and $\Gamma_{jil}=\Gamma_{jli}$. So $\Gamma_{lij}$ is forced, and *because $\det(g_{ij})\neq 0$* we may raise the index to get $\Gamma^{k}_{ij} = g^{kl}\Gamma_{lij}$, which is the stated formula. This proves uniqueness. Conversely, defining $\Gamma^k_{ij}$ by that formula in each chart and $D$ by the displayed expression for $D_u(v^jx_j)$ produces an operator with the four properties: the first two hold by inspection, the third because the formula is symmetric in $i$ and $j$, and the fourth by running the computation above backwards. Two charts give the same $D$, because $D$ is determined by the four properties, which refer only to $g$.

**3. Volume form.** *Uniqueness.* On the domain of an oriented orthonormal frame $(E_i)$ with dual coframe $(\varepsilon^i)$, any $n$-form is $f\,\varepsilon^1\wedge\cdots\wedge\varepsilon^n$, and the normalisation forces $f=1$; so $\omega_g = \varepsilon^1\wedge\cdots\wedge\varepsilon^n$ there, and $M$ is covered by such domains by Gram–Schmidt applied to a coordinate frame.

*Existence.* Define $\omega_g$ near each point by that formula and check independence of the frame. If $(\tilde E_i)$ is another oriented orthonormal frame, write $\tilde E_i = A^{j}_{\ i}E_j$. Orthonormality of both frames says $A(p)$ is orthogonal, so $\det A = \pm 1$, and consistency of orientation forces $\det A = +1$. Then

$$
\bigl(\varepsilon^1\wedge\cdots\wedge\varepsilon^n\bigr)(\tilde E_1,\dots,\tilde E_n) = \det\bigl(\varepsilon^{j}(\tilde E_i)\bigr) = \det A = 1,
$$

which is the value $\tilde\varepsilon^1\wedge\cdots\wedge\tilde\varepsilon^n$ also takes; two $n$-forms agreeing on one frame agree everywhere, since $\Lambda^n T_p^{*}M$ is one-dimensional.

*Coordinate expression.* In an oriented chart write $\omega_g = f\,dx^1\wedge\cdots\wedge dx^n$ and $\partial/\partial x^i = A^{j}_{\ i}E_j$ for an oriented orthonormal frame. Evaluating on the coordinate frame gives $f = \det A$. On the other hand

$$
g_{ij} = \bigl\langle A^{k}_{\ i}E_k,\; A^{l}_{\ j}E_l\bigr\rangle_g = \sum_k A^{k}_{\ i}A^{k}_{\ j},
$$

the $(i,j)$ entry of $A^{\mathsf T}A$, so $\det(g_{ij}) = (\det A)^2$ and $f = \pm\sqrt{\det(g_{ij})}$. Both frames being oriented, $f>0$, so the sign is $+$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="lee-2013:p. 344"}
- *Positive definiteness* is used exactly once in part 1, and it is essential: the proof works because a sum of inner products with nonnegative coefficients, not all zero, is again an inner product. Nondegenerate forms have no such convexity — adding $\operatorname{diag}(1,-1)$ to $\operatorname{diag}(-1,1)$ gives $0$ — and indeed Lee records that not every smooth manifold carries a Lorentz metric, while every one carries a Riemannian metric.
- *Only nondegeneracy* is used in part 2. The derivation of $\Gamma_{lij}$ never uses positivity, and the inversion of $g$ needs only $\det(g_{ij})\neq 0$. So a pseudo-Riemannian metric also has a unique Levi-Civita connection, with the same formula — which is what general relativity computes with.
- *Paracompactness* is hidden in part 1: it is what makes a partition of unity subordinate to an arbitrary open cover exist. On a manifold whose topology is not paracompact the construction has nothing to average.
- *Orientability* is used in part 3 twice, to force $\det A = +1$ and to fix the sign of $\sqrt{\det(g_{ij})}$. On a non-orientable manifold there is still a well-defined *density* $|\omega_g|$, enough to integrate functions and so to define volume, but no global $n$-form.
- *Smoothness of $g$* makes $\Gamma^k_{ij}$ smooth; a merely continuous metric still gives lengths and distances, but no connection and no curvature.
:::

:::remark[Distance, geodesics and curvature in this language]{provenance=adapted src="lee-2013:Thm 13.29, pp. 339–340; docarmo-2016:§5-10, p. 448"}
*Distance.* If $M$ is connected, $d_g$ makes $M$ a metric space whose metric topology is the manifold topology. Symmetry and the triangle inequality come from reversing and concatenating curves, and $L_g$ is unchanged by reparametrisation. The substance is that $d_g(p,q)>0$ for $p\ne q$ and that the two topologies agree; both follow from the comparison $c|v|_{\bar g} \le |v|_g \le C|v|_{\bar g}$, valid with positive constants $c,C$ on any compact subset of a chart, which holds because $|v|_g$ is continuous and strictly positive on the compact set of $\bar g$-unit vectors over that subset.

*Geodesics.* A curve is a **geodesic** of $(M,g)$ when $D_{\gamma'}\gamma'=0$, that is $\ddot x^k + \Gamma^{k}_{ij}\dot x^i\dot x^j = 0$ in coordinates. These are exactly the Euler–Lagrange equations of the energy $\tfrac12\int g_{ij}\dot x^i\dot x^j\,dt$, which is why geodesics are also the stationary curves of length; see :ref[Geodesics]{to=geom.geodesics} and :ref[the Euler–Lagrange equation]{to=var.euler-lagrange-equation}.

*Curvature.* The Riemann tensor of the Levi-Civita connection, built in :ref[The Riemann curvature tensor]{to=geom.riemann-curvature} from the same $\Gamma^k_{ij}$, is the curvature of $(M,g)$. do Carmo describes the geometric content for a general $n$: given a 2-plane $\sigma \subset T_pM$, the geodesics leaving $p$ tangent to $\sigma$ sweep out a surface through $p$, and the Gaussian curvature of that surface at $p$ is the **sectional curvature** $K(p,\sigma)$ — the best analogue in $n$ dimensions of the Gaussian curvature of :ref[the second fundamental form]{to=geom.surface-curvature}.
:::

:::method[Putting a metric on a manifold and computing with it]{provenance=original}
1. *Get $g_{ij}$.* If the manifold sits inside $\mathbb{R}^N$ by an immersion $F$, take $g = F^{*}\bar g$: substitute the components of $F$ into $dx_1^2+\cdots+dx_N^2$ and expand, which gives $g_{ij} = \partial_i F\cdot \partial_j F$. If it does not, prescribe $g_{ij}$ in each chart and check that the charts agree, or build one with a partition of unity as in part 1.
2. *Check.* Verify that $(g_{ij})$ is symmetric and that its leading principal minors are positive (Riemannian), or compute its signature (pseudo-Riemannian).
3. *Invert* to get $g^{ij}$, and record $\sqrt{\det(g_{ij})}$.
4. *Lengths and distances.* $L_g(\gamma) = \int \sqrt{g_{ij}\dot x^i\dot x^j}\,dt$. To show a particular curve realises $d_g$, bound $L_g$ below for every competing curve.
5. *Volumes.* $\operatorname{vol}(A) = \int_A \sqrt{\det(g_{ij})}\;du^1\cdots du^n$ over a chart, patched by a partition of unity.
6. *Connection and curvature.* Compute $\Gamma^k_{ij}$ from the formula in part 2, then feed them to the recipe in :ref[The Riemann curvature tensor]{to=geom.riemann-curvature}.
:::

:::example[The hyperbolic upper half-plane]{provenance=original}
Let $M = \{(x,y)\in\mathbb{R}^2 : y>0\}$, a smooth 2-manifold with the single chart $(x,y)$, and put

$$
g = \frac{dx^2+dy^2}{y^2}, \qquad\text{that is}\qquad (g_{ij}) = \frac{1}{y^{2}}\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

*Step 2.* The matrix is symmetric with minors $1/y^2>0$ and $1/y^4>0$, so $g$ is a Riemannian metric; it is smooth because $y>0$ on $M$.

*Step 3.* $(g^{ij}) = y^2 I$ and $\sqrt{\det(g_{ij})} = 1/y^{2}$.

*Step 6: Christoffel symbols.* Only $\partial_y g_{11} = \partial_y g_{22} = -2/y^{3}$ is nonzero. The formula of part 2 gives

$$
\Gamma^{x}_{xy} = \Gamma^{x}_{yx} = -\frac1y, \qquad \Gamma^{y}_{xx} = \frac1y, \qquad \Gamma^{y}_{yy} = -\frac1y,
$$

and $\Gamma^{x}_{xx} = \Gamma^{x}_{yy} = \Gamma^{y}_{xy} = 0$. For instance $\Gamma^{y}_{xx} = \tfrac12 g^{yy}(2\partial_x g_{xy} - \partial_y g_{xx}) = \tfrac12 y^{2}\cdot(2/y^{3}) = 1/y$.

*A geodesic.* Take $\gamma(t) = (0,e^{t})$. Then $|\gamma'|_g = e^{t}/e^{t} = 1$, so $\gamma$ has unit speed, and the geodesic equations hold: the $x$-equation is $0=0$, and the $y$-equation is $\ddot y + \Gamma^{y}_{yy}\dot y^{2} = e^{t} - (1/e^{t})e^{2t} = 0$.

*Step 4: a distance.* The segment of $\gamma$ from $(0,1)$ to $(0,2)$ has length $\int_1^2 dy/y = \ln 2$. No curve does better: for any piecewise smooth $\sigma(t)=(x(t),y(t))$ joining the two points,

$$
L_g(\sigma) = \int \frac{\sqrt{\dot x^{2}+\dot y^{2}}}{y}\,dt \;\ge\; \int \frac{|\dot y|}{y}\,dt \;\ge\; \left|\int_1^2 \frac{dy}{y}\right| = \ln 2 .
$$

Hence $d_g\bigl((0,1),(0,2)\bigr) = \ln 2 \approx 0.6931$.

*Step 5: an area.* The coordinate square $Q = \{1<x<2,\;1<y<2\}$ has

$$
\operatorname{vol}_g(Q) = \int_1^2\!\!\int_1^2 \frac{dx\,dy}{y^{2}} = \int_1^2 \frac{dy}{y^{2}} = \Bigl[-\frac1y\Bigr]_1^2 = \frac12 .
$$

Its Euclidean area is $1$, so the metric shrinks this square by exactly a factor of two.

*Curvature.* Feeding the $\Gamma$'s to the curvature formula, the one independent component is

$$
R^{x}{}_{yxy} = -\partial_y\Gamma^{x}_{yx} + \Gamma^{y}_{yy}\Gamma^{x}_{yx} - \Gamma^{x}_{yx}\Gamma^{x}_{xy} = -\frac{1}{y^{2}} + \frac{1}{y^{2}} - \frac{1}{y^{2}} = -\frac{1}{y^{2}},
$$

where the two terms carrying the vanishing symbols $\Gamma^{x}_{yy}$ and $\Gamma^{y}_{yx}$ have been dropped. Hence $R_{xyxy} = g_{xx}R^{x}{}_{yxy} = -1/y^{4}$, and in two dimensions the scalar curvature is $2R_{xyxy}/\det(g_{ij}) = -2$ at every point. **Half of it, the Gaussian curvature, is $-1$ everywhere** — the model of the hyperbolic plane. Note that the curvature is constant although none of $g_{ij}$, $\Gamma^k_{ij}$ or $\omega_g$ is.
:::

:::example[Minkowski space: a signature that is not Riemannian]{provenance=original}
On $M=\mathbb{R}^4$ with coordinates $(t,x,y,z)$ put $\eta = -c^{2}dt^{2} + dx^{2}+dy^{2}+dz^{2}$. The matrix $\operatorname{diag}(-c^2,1,1,1)$ has determinant $-c^{2}\neq 0$, so $\eta$ is nondegenerate, and the basis $(c^{-1}\partial_t, \partial_x,\partial_y,\partial_z)$ makes it $\operatorname{diag}(-1,1,1,1)$: the signature is $(3,1)$, a Lorentz metric. It is not Riemannian, since $\eta(\partial_t,\partial_t) = -c^{2}<0$. The components are constants, so all $\Gamma^{k}_{ij}$ vanish, the Levi-Civita connection is ordinary differentiation, and the curvature is zero: Minkowski spacetime is flat. Lengths of curves are no longer given by a real square root for every tangent direction, which is why relativity separates timelike, null and spacelike curves instead.
:::

:::application{provenance=adapted src="stakgold-holst-2011:§10.4, p. 727"}
In general relativity spacetime is a four-dimensional manifold carrying a Lorentz metric, and what is felt as gravity is the geometry of that metric rather than a force field: matter and energy distort $g_{ab}$, and free particles follow its geodesics. The effect is large enough to matter in engineering — satellite clocks run at a different rate from clocks on the ground because the metric differs between the two, and the global positioning system corrects for it.

Away from relativity, a Riemannian metric is the right setting whenever a problem has a natural notion of length that is not the Euclidean one.

- *Mechanics.* The kinetic energy $\tfrac12 M_{ij}(q)\dot q^i\dot q^j$ of a constrained system is a Riemannian metric on the configuration manifold, and by :ref[Hamilton's principle]{to=var.hamilton-principle} the free motion is a geodesic of that metric. Constraint forces disappear into the Christoffel symbols.
- *Analysis on curved domains.* The Laplace–Beltrami operator $\Delta_g f = \det(g)^{-1/2}\partial_i\bigl(\det(g)^{1/2}g^{ij}\partial_j f\bigr)$ built from $g$ (see :ref[differential operators in general coordinates]{to=geom.tensor-operators-general-coordinates}) is what replaces $\nabla^2$ for diffusion, waves and quantum mechanics on a curved surface or in a curved region.
- *Ray optics and seismology.* In a medium of refractive index $n(x)$ the metric $n(x)^2\delta_{ij}$ has light rays as its geodesics, and travel times are its distances; seismic tomography inverts measured travel times for the metric.
:::
