---
id: geom.killing-vectors
title: Killing vector fields and symmetries
kind: definition
level: advanced
summary: Identifies the vector fields whose flows move a Riemannian manifold without distorting it, gives the Killing equation in both coordinate and covariant form, shows that they close under the Lie bracket and that each one produces a quantity conserved along every geodesic, and lists them all for Euclidean space and the round sphere.
prereqs: [geom.riemannian-metrics, geom.flows-integral-curves, geom.covariant-derivative, geom.geodesics, geom.tangent-vectors, geom.smooth-manifolds]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 13, p. 332 (Riemannian isometry, local isometry, flat metric); Problem 13-13, pp. 345–346 (Killing vector fields: definition by the flow, the Lie subalgebra property, and the coordinate form of the Killing equation); Problem 13-14, p. 346 (the Killing fields of the Euclidean metric and a basis for them); Problem 13-15, p. 346 (a Killing field on a product); Ch. 12, Cor. 12.33 and Example 12.35, p. 323 (the Lie derivative of a covariant tensor field through Lie brackets, and its coordinate formula for a 2-tensor); Thm 12.37, p. 324 (a covariant tensor field is invariant under the flow of $V$ exactly when $\\mathcal{L}_Vg$ vanishes), with the definition of invariance (12.11), p. 323; Ch. 9, Thm 9.38 and Cor. 9.39, pp. 229–231 (the Lie derivative of a vector field is the bracket, and its algebraic consequences)"
    pages: "323-324, 332, 345-346"
    role: the definition of an isometry and of a Killing vector field; the coordinate form of the Killing equation; the identification of flow-invariance with a vanishing Lie derivative and the coordinate formula for the Lie derivative of a 2-tensor; the classification of the Killing fields of Euclidean space
  - work: docarmo-2016
    loc: "§4-4, the geodesic equations (4a) for a surface of revolution, the first integral $f^2u' = \\mathrm{const}$ and Clairaut's relation $r\\cos\\theta = \\mathrm{const}$, pp. 259–260; Example 6 (the paraboloid of revolution), pp. 261–262; §4-2, isometries and local isometries of surfaces, pp. 220–222"
    pages: "220-222, 259-262"
    role: isometries of surfaces; the classical first integral of the geodesic equations on a surface of revolution and its reading as Clairaut's relation, which is the conserved quantity attached to the rotational Killing field
---

:::definition[Isometries, Killing fields and the Killing equation]{provenance=adapted src="lee-2013:p. 332; lee-2013:Problem 13-13, pp. 345–346; lee-2013:(12.11), p. 323"}
Let $(M,g)$ and $(\widetilde M,\widetilde g)$ be :ref[Riemannian manifolds]{to=geom.riemannian-metrics}.

- A **(Riemannian) isometry** $F : M \to \widetilde M$ is a diffeomorphism with $F^{*}\widetilde g = g$; written out, $\widetilde g_{F(p)}(dF_pv, dF_pw) = g_p(v,w)$ for all $p\in M$ and $v,w \in T_pM$. A **local isometry** is a local diffeomorphism with the same property, so that every point has a neighbourhood mapped isometrically onto an open set of $\widetilde M$. An isometry preserves lengths of curves, angles, distances and volumes, because each of those is built from $g$ alone.
- Call $K$, smooth and defined on all of $M$, a **Killing vector field** of the metric $g$ when its flow acts by isometries: for every $t$, the time-$t$ map $\theta_t$ of the flow (:ref[flows and integral curves]{to=geom.flows-integral-curves}) satisfies $\theta_t^{*}g = g$ on the open set $M_t$ where it is defined. A tensor field with this property is said to be **invariant under the flow**.
- In coordinates, writing $K = K^k\,\partial/\partial x^k$ and summing repeated indices, the **Killing equation** is
  $$
  K^{k}\,\frac{\partial g_{ij}}{\partial x^{k}} \;+\; g_{kj}\,\frac{\partial K^{k}}{\partial x^{i}} \;+\; g_{ik}\,\frac{\partial K^{k}}{\partial x^{j}} \;=\; 0 ,
  \qquad i,j = 1,\dots,n .
  $$
  Lowering the index with $K_j = g_{jk}K^k$ and using the Levi-Civita connection $\nabla$ of $g$ (:ref[Christoffel symbols and the covariant derivative]{to=geom.covariant-derivative}), the same equation reads
  $$
  \nabla_{i}K_{j} + \nabla_{j}K_{i} = 0 :
  $$
  the covariant derivative of the covector $K_\flat = K_j\,dx^j$ is antisymmetric.

Throughout, $\mathcal{L}_K$ is the Lie derivative along $K$, defined on a covariant tensor field $A$ by $(\mathcal{L}_KA)_p = \frac{d}{dt}\big|_{t=0}(\theta_t^{*}A)_p$.
:::

:::statement[Killing fields: four descriptions, an algebra, and a constant of the motion]{provenance=adapted src="lee-2013:Thm 12.37, p. 324; lee-2013:Example 12.35, p. 323; lee-2013:Problem 13-13, pp. 345–346; lee-2013:Problem 13-14, p. 346"}
Let $(M,g)$ be a Riemannian manifold of dimension $n$ and $K$ a smooth vector field on $M$.

1. **Four equivalent conditions.** The following say the same thing.
   - (a) $K$ is a Killing field: the flow of $K$ acts by isometries of $g$.
   - (b) $\mathcal{L}_Kg = 0$.
   - (c) In every smooth chart, $K^{k}\partial_kg_{ij} + g_{kj}\partial_iK^{k} + g_{ik}\partial_jK^{k} = 0$.
   - (d) $\nabla_iK_j + \nabla_jK_i = 0$, where $K_j = g_{jk}K^k$.

2. **They form a Lie algebra.** The Killing fields of $(M,g)$ are a linear subspace of the smooth vector fields on $M$ and are closed under the Lie bracket; that is, they form a Lie subalgebra of $\mathfrak{X}(M)$.

3. **A conserved quantity along every geodesic.** If $K$ is a Killing field and $\gamma$ is a geodesic of $(M,g)$ (:ref[geodesics]{to=geom.geodesics}), then
   $$
   g\bigl(K_{\gamma(t)},\ \gamma'(t)\bigr) \quad\text{is constant in } t .
   $$
   Each independent Killing field therefore supplies one first integral of the geodesic equations.

4. **Euclidean space, completely.** For $\mathbb{R}^n$ with the Euclidean metric $\bar g = \delta_{ij}\,dx^i dx^j$, the Killing fields are exactly the linear combinations, with constant coefficients, of
   $$
   \frac{\partial}{\partial x^{i}}\ \ (1 \le i \le n)
   \qquad\text{and}\qquad
   x^{i}\frac{\partial}{\partial x^{j}} - x^{j}\frac{\partial}{\partial x^{i}}\ \ (1 \le i < j \le n) ,
   $$
   and these $n + \binom{n}{2} = \tfrac12 n(n+1)$ fields are a basis. They generate the translations and the rotations: the Killing algebra of Euclidean space is the Lie algebra of its group of rigid motions.
:::

:::idea{provenance=original}
A flow preserves a tensor field exactly when the field's derivative along the flow vanishes, so "moves without distorting" becomes the single equation $\mathcal{L}_Kg = 0$; writing that Lie derivative out in a chart gives (c), and trading partial derivatives for covariant ones absorbs the term $K^k\partial_kg_{ij}$ into the Christoffel symbols and leaves the clean antisymmetry (d). The conserved quantity in part 3 is then a two-line computation: differentiating $g(K,\gamma')$ along $\gamma$ produces two terms, one killed by the geodesic equation and the other equal to $\nabla_{(i}K_{j)}\gamma'^i\gamma'^j$, which is the symmetric part of $\nabla K$ contracted with a symmetric pair — zero precisely by (d). For part 2, the bracket of two Killing fields is Killing because $\mathcal{L}_{[V,W]} = \mathcal{L}_V\mathcal{L}_W - \mathcal{L}_W\mathcal{L}_V$ on tensor fields, an identity that falls out of expanding the Lie derivative in Lie brackets and using the Jacobi identity. Part 4 is the observation that in flat coordinates (d) says the matrix $\partial_iK_j$ is antisymmetric, and differentiating that relation once more forces the second derivatives of $K$ to vanish — so a Killing field of Euclidean space is affine, with constant part a translation and linear part an antisymmetric matrix, that is, an infinitesimal rotation.
:::

:::proof[Parts 1 to 4]{provenance=adapted src="lee-2013:Thm 12.37, p. 324; lee-2013:Cor. 12.33 and Example 12.35, p. 323; lee-2013:Problems 13-13 and 13-14, pp. 345–346"}
*Part 1, (a) $\Leftrightarrow$ (b).* Lee's flow-invariance criterion reads: for smooth $V$ and smooth covariant $A$, the equation $\mathcal{L}_VA = 0$ holds exactly when the flow of $V$ carries $A$ to itself. Applied with $V = K$ and $A = g$, invariance is the statement $\theta_t^{*}g = g$ wherever $\theta_t$ is defined; each $\theta_t$ is a diffeomorphism from $M_t$ onto $M_{-t}$, so this is exactly the statement that $\theta_t$ is an isometry of the open set $M_t$ onto $M_{-t}$.

*Part 1, (b) $\Leftrightarrow$ (c).* Take a chart and expand $g = g_{ij}\,dx^i\otimes dx^j$. The Lie derivative is a derivation that commutes with $d$ on functions, so $\mathcal{L}_K(dx^i) = d(\mathcal{L}_Kx^i) = d(Kx^i) = dK^i$, and the product rule gives

$$
\mathcal{L}_Kg = (Kg_{ij})\,dx^i\otimes dx^j + g_{ij}\,dK^i\otimes dx^j + g_{ij}\,dx^i\otimes dK^j
= \Bigl(K^k\partial_kg_{ij} + g_{kj}\partial_iK^k + g_{ik}\partial_jK^k\Bigr)dx^i\otimes dx^j ,
$$

after relabelling the summation indices in the last two terms. Since the $dx^i\otimes dx^j$ are linearly independent at each point, $\mathcal{L}_Kg = 0$ is equivalent to the vanishing of each coefficient, which is (c).

*Part 1, (c) $\Leftrightarrow$ (d).* Write $K_j = g_{jk}K^k$. By the definition of the covariant derivative of a covector field,

$$
\nabla_iK_j + \nabla_jK_i = \partial_i K_j + \partial_j K_i - 2\Gamma^{l}_{ij}K_l ,
$$

the two Christoffel terms coinciding because $\Gamma^l_{ij}$ is symmetric in $i$ and $j$. Expanding the partial derivatives,

$$
\partial_iK_j + \partial_jK_i = g_{jk}\partial_iK^k + g_{ik}\partial_jK^k + K^k\bigl(\partial_ig_{jk} + \partial_jg_{ik}\bigr).
$$

For the Christoffel term, lowering the index in the formula $\Gamma^{l}_{ij} = \tfrac12 g^{lm}(\partial_ig_{jm} + \partial_jg_{im} - \partial_mg_{ij})$ gives $2\Gamma^{l}_{ij}g_{lk} = \partial_ig_{jk} + \partial_jg_{ik} - \partial_kg_{ij}$, so that

$$
2\Gamma^{l}_{ij}K_l = 2\Gamma^{l}_{ij}g_{lk}K^k = K^k\bigl(\partial_ig_{jk} + \partial_jg_{ik}\bigr) - K^k\partial_kg_{ij} .
$$

Subtracting, the terms carrying $\partial_i g_{jk}$ and $\partial_j g_{ik}$ cancel and what remains is

$$
\nabla_iK_j + \nabla_jK_i = K^k\partial_kg_{ij} + g_{kj}\partial_iK^k + g_{ik}\partial_jK^k = (\mathcal{L}_Kg)_{ij},
$$

so (c) and (d) are the same equation written two ways. This also records, for later use, the identity $(\mathcal{L}_Kg)_{ij} = \nabla_iK_j + \nabla_jK_i$.

*Part 2.* Expanding the Lie derivative of a covariant $2$-tensor in Lie brackets gives, for any vector fields $V, X, Y$,

$$
(\mathcal{L}_VA)(X,Y) = V\bigl(A(X,Y)\bigr) - A\bigl([V,X],Y\bigr) - A\bigl(X,[V,Y]\bigr). \tag{$\ast$}
$$

This is $\mathbb{R}$-linear in $V$, so a constant-coefficient combination of Killing fields is Killing and the Killing fields form a linear subspace. For the bracket, apply $(\ast)$ twice. Writing $B = \mathcal{L}_WA$ and expanding $(\mathcal{L}_VB)(X,Y)$ by $(\ast)$ gives nine terms; subtracting the same expression with $V$ and $W$ interchanged, every term in which one of $V, W$ differentiates a function and the other supplies a bracket occurs twice with opposite signs and cancels, as do the two terms $A([V,X],[W,Y])$ and $A([W,X],[V,Y])$. What survives is

$$
\bigl(\mathcal{L}_V\mathcal{L}_WA - \mathcal{L}_W\mathcal{L}_VA\bigr)(X,Y)
= [V,W]\bigl(A(X,Y)\bigr) + A\bigl([W,[V,X]] - [V,[W,X]],\,Y\bigr) + A\bigl(X,\,[W,[V,Y]] - [V,[W,Y]]\bigr).
$$

The Jacobi identity for the Lie bracket turns $[V,[W,X]] - [W,[V,X]]$ into $[[V,W],X]$, so the second and third groups are $-A([[V,W],X],Y)$ and $-A(X,[[V,W],Y])$. Comparing with $(\ast)$ for the field $[V,W]$,

$$
\mathcal{L}_{[V,W]}A = \mathcal{L}_V\mathcal{L}_WA - \mathcal{L}_W\mathcal{L}_VA .
$$

Now let $V, W$ be Killing: $\mathcal{L}_Vg = \mathcal{L}_Wg = 0$. Then $\mathcal{L}_{[V,W]}g = \mathcal{L}_V(0) - \mathcal{L}_W(0) = 0$, so $[V,W]$ is Killing.

*Part 3.* Let $\gamma$ be a geodesic and put $f(t) = g(K,\gamma')$ along it. The Levi-Civita connection is compatible with $g$, so differentiating the product along $\gamma$ gives

$$
f'(t) = g\bigl(\nabla_{\gamma'}K,\ \gamma'\bigr) + g\bigl(K,\ \nabla_{\gamma'}\gamma'\bigr).
$$

The second term vanishes because $\gamma$ is a **geodesic**, $\nabla_{\gamma'}\gamma' = 0$. The first term is, in coordinates, $(\nabla_iK_j)\,\gamma'^i\gamma'^j$. Since $\gamma'^i\gamma'^j$ is symmetric under $i \leftrightarrow j$, only the symmetric part of $\nabla_iK_j$ contributes:

$$
(\nabla_iK_j)\gamma'^i\gamma'^j = \tfrac12\bigl(\nabla_iK_j + \nabla_jK_i\bigr)\gamma'^i\gamma'^j = 0
$$

by the **Killing equation** in form (d). Hence $f' \equiv 0$.

*Part 4.* In the standard coordinates on $\mathbb{R}^n$ the metric has constant components $\delta_{ij}$, so all Christoffel symbols vanish, indices are raised and lowered by $\delta$, and (c) becomes simply

$$
\partial_iK_j + \partial_jK_i = 0, \qquad K_j = K^j .
$$

*The listed fields satisfy it.* For $K = \partial/\partial x^a$ every $\partial_iK_j$ is zero. For $K = x^a\partial/\partial x^b - x^b\partial/\partial x^a$ the components are $K_j = x^a\delta_{jb} - x^b\delta_{ja}$, so $\partial_iK_j = \delta_{ia}\delta_{jb} - \delta_{ib}\delta_{ja}$, which is antisymmetric in $i,j$; hence $\partial_iK_j + \partial_jK_i = 0$.

*There are no others.* Set $S_{ij} = \partial_iK_j$, so the equation says $S_{ij} = -S_{ji}$, and let $T_{kij} = \partial_kS_{ij} = \partial_k\partial_iK_j$. Then $T$ is symmetric in its first two indices, because mixed partial derivatives of the smooth function $K_j$ commute, and antisymmetric in its last two, by the Killing equation differentiated. These two symmetries are incompatible:

$$
T_{kij} = T_{ikj} = -T_{ijk} = -T_{jik} = T_{jki} = T_{kji} = -T_{kij},
$$

using alternately the symmetry in the first pair and the antisymmetry in the last pair; hence $T \equiv 0$. So all second derivatives of $K$ vanish and $K_j(x) = a_j + S_{ij}x^i$ with $a_j$ and $S_{ij}$ constant and $S$ antisymmetric. Splitting the linear part over the pairs $i<j$,

$$
K = a_j\frac{\partial}{\partial x^j} + \sum_{i<j} S_{ij}\left(x^i\frac{\partial}{\partial x^j} - x^j\frac{\partial}{\partial x^i}\right),
$$

which is the asserted combination. The listed fields are linearly independent, because the translations are the fields with $S = 0$ and the rotations are determined by the antisymmetric matrix $S$, which is zero only if all the coefficients are; so they are a basis, and the dimension is $n + \tfrac12 n(n-1) = \tfrac12n(n+1)$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Smoothness of $K$** is what gives it a flow at all, and the equivalence (a) $\Leftrightarrow$ (b) is a statement about that flow. Note also that the flow need not be complete: $\theta_t$ is only defined on an open set $M_t$, and "acts by isometries" has to be read there. Removing a point from $\mathbb{R}^2$ leaves $\partial/\partial x$ a Killing field whose flow is defined only for a finite time at each point.
- **Geodesy is essential in part 3, and only there.** Drop $\nabla_{\gamma'}\gamma' = 0$ and the quantity $g(K,\gamma')$ picks up the term $g(K,\nabla_{\gamma'}\gamma')$, which has no reason to vanish. Concretely, on the round sphere take a unit-speed curve along which $\dot\varphi$ is held constant while $\theta$ varies, so that $\dot\theta^2 = 1 - \sin^2\!\theta\,\dot\varphi^2$. It is not a geodesic, and $g(\partial_\varphi,\gamma') = \sin^2\!\theta\,\dot\varphi$ changes as $\theta$ does. The symmetric-part argument is what makes the Killing equation enter, so a field satisfying only the weaker *conformal* Killing equation $\nabla_iK_j + \nabla_jK_i = \lambda\,g_{ij}$ gives a conserved quantity only for **null** geodesics, where $g(\gamma',\gamma') = 0$ — which is why conformal Killing fields are useful in relativity but not in Riemannian geometry, where no nonzero vector is null.
- **Symmetry of the connection** ($\Gamma^l_{ij} = \Gamma^l_{ji}$) is what let the two Christoffel terms be combined in (c) $\Leftrightarrow$ (d). For a connection with torsion the covariant and coordinate forms of the Killing equation part company.
- **Flatness is used only in part 4**, and twice: it makes the Christoffel symbols vanish so that the Killing equation becomes $\partial_iK_j + \partial_jK_i = 0$, and it makes $\partial_k\partial_i$ commute on the components. On a curved manifold the same differentiation produces curvature terms instead of zero, the second derivatives of $K$ are not forced to vanish, and the Killing algebra can be anything from $\tfrac12n(n+1)$-dimensional down to zero. A metric chosen at random has no Killing fields at all: part 4 is a statement about a very special metric. What *is* general is the mechanism of the counting — in flat space a Killing field is determined by the pair (its value at one point, the antisymmetric matrix $\partial_iK_j$ there), which is $n + \tfrac12n(n-1)$ numbers.
- **Riemannian versus pseudo-Riemannian.** Lee states the definition and the classification for Riemannian metrics. Parts 1, 2 and 3 as proved above use only that $g$ is a smooth symmetric $2$-tensor field with a symmetric metric-compatible connection; positive definiteness is never invoked. They therefore apply verbatim to a Lorentz metric, which is how Killing fields are used in general relativity — but that extension is ours, not a claim made by the source.
:::

:::method[Finding the Killing fields of a metric, and using them]{provenance=original}
1. **Read off the obvious ones.** If, in some chart, none of the components $g_{ij}$ depends on a particular coordinate $x^a$, then $K = \partial/\partial x^a$ satisfies (c) at once: the first term is $\partial_a g_{ij} = 0$ and the other two vanish because $K$ has constant components. A coordinate that is absent from the metric is a symmetry, and this is the quickest way to spot one.
2. **Solve the Killing equation for the rest.** Write (c) as a linear first-order system for the $n$ unknown functions $K^k$ — there are $\tfrac12n(n+1)$ equations, one for each unordered pair $(i,j)$ — and integrate it. Differentiating the system, as in part 4, usually reduces it to a finite-dimensional problem.
3. **Check a candidate.** Given a field, form $(\mathcal{L}_Kg)_{ij} = K^k\partial_kg_{ij} + g_{kj}\partial_iK^k + g_{ik}\partial_jK^k$ and confirm every component vanishes. This is a finite computation needing no flow.
4. **Harvest the first integrals.** For each Killing field $K$ the function $g(K,\gamma') = g_{ij}K^i\dot x^j$ is constant on every geodesic. With enough independent Killing fields the geodesic equations can be integrated by quadrature instead of solved as a second-order system.
5. **Close the algebra.** Compute the brackets of the fields found; by part 2 they stay inside the set, and the structure constants identify the symmetry group.
:::

:::example[The round sphere: rotation, and Clairaut's relation as a conserved quantity]{provenance=original}
Take the unit sphere $S^2$ with the round metric in spherical coordinates, $\theta$ the colatitude and $\varphi$ the longitude:

$$
g = d\theta^2 + \sin^2\!\theta\;d\varphi^2, \qquad (g_{ij}) = \begin{pmatrix}1 & 0\\ 0 & \sin^2\theta\end{pmatrix}.
$$

*The Killing field.* No component of $g$ depends on $\varphi$, so by step 1 of the method $K = \partial/\partial\varphi$ is a Killing field. Checking (c) directly: $K^\theta = 0$, $K^\varphi = 1$, so every $\partial_iK^k$ vanishes and the only surviving term is $K^k\partial_kg_{ij} = \partial_\varphi g_{ij} = 0$. Its flow is rotation about the polar axis, which is visibly an isometry.

*The conserved quantity.* For a geodesic $\gamma(s) = (\theta(s),\varphi(s))$ parametrised by arc length,

$$
L = g(K,\gamma') = g_{\varphi\varphi}\,\dot\varphi = \sin^2\!\theta\;\frac{d\varphi}{ds} ,
$$

and part 3 says $L$ is constant. Let $\psi \in [0,\pi/2]$ be the angle at which the geodesic crosses the parallel of colatitude $\theta$, whose radius is $r = \sin\theta$. The unit vector along that parallel is $(1/\sin\theta)\,\partial/\partial\varphi$, so for a unit-speed curve $\cos\psi = |\sin\theta\,\dot\varphi| = r\,|\dot\varphi|$ and therefore
$$
|L| = r\cos\psi .
$$
That is :cite[do Carmo's]{work=docarmo-2016 loc="§4-4, p. 260"} **Clairaut relation** $r\cos\psi = \text{const}$, which he obtains for a general surface of revolution from the first integral $f^2u' = c$ of the geodesic equations — with the rotational Killing field here supplying the reason behind it. (do Carmo writes the relation with absolute values, as above; the signed quantity $L$ is the one that part 3 produces.)

*Numbers.* The geodesics of the round sphere are its great circles. Take the one through $(1,0,0)$ inclined at $\alpha = 30^{\circ}$ to the equator,

$$
\gamma(s) = (\cos s,\ \sin s\cos\alpha,\ \sin s\sin\alpha) \subset \mathbb{R}^3 ,
$$

a unit-speed curve (its velocity is $(-\sin s, \cos s\cos\alpha, \cos s\sin\alpha)$, of length $1$). In coordinates, $\cos\theta = \sin s\sin\alpha$ and $\tan\varphi = \tan s\cos\alpha$, whence

$$
\sin^2\!\theta = 1 - \sin^2\!s\,\sin^2\!\alpha, \qquad
\frac{d\varphi}{ds} = \frac{\cos\alpha}{1 - \sin^2\!s\,\sin^2\!\alpha},
$$

and the product telescopes to $L = \cos\alpha$, independent of $s$ as promised. With $\alpha = 30^\circ$, $\cos\alpha = \sqrt3/2 = 0.8660254$. Spot checks:

| $s$ | $\sin^2\theta$ | $d\varphi/ds$ | $L$ |
|---|---|---|---|
| $0$ | $1.0000000$ | $0.8660254$ | $0.8660254$ |
| $1$ | $0.8229816$ | $1.0523022$ | $0.8660254$ |
| $1.4$ | $0.7572222$ | $1.1436873$ | $0.8660254$ |

At $s = 0$ the geodesic sits on the equator ($r = 1$) and crosses it at the angle $\alpha$, so Clairaut gives $r\cos\psi = 1\cdot\cos 30^\circ$ — the same number. The relation also predicts the turning point: since $\cos\psi \le 1$, the geodesic cannot reach a parallel of radius $r < L = 0.8660254$, that is, it stays within colatitude $60^\circ \le \theta \le 120^\circ$, which is where the great circle inclined at $30^\circ$ indeed lives.
:::

:::example[Euclidean three-space: a rotation field and the angular momentum of a straight line]{provenance=original}
On $\mathbb{R}^3$ with $\bar g = dx^2 + dy^2 + dz^2$, take the rotation field about the $z$-axis,

$$
K = x\frac{\partial}{\partial y} - y\frac{\partial}{\partial x},
$$

one of the three rotations in the basis of part 4. Its components are $K^1 = -y$, $K^2 = x$, $K^3 = 0$; the metric has constant components, so (c) reduces to $\partial_iK^j + \partial_jK^i = 0$, and the only possibly nonzero entry is $\partial_1K^2 + \partial_2K^1 = 1 + (-1) = 0$. So $K$ is Killing.

*The conserved quantity.* The geodesics of Euclidean space are the straight lines $\gamma(s) = p + sv$ with $|v| = 1$. Along such a line,

$$
\bar g(K,\gamma') = \bigl(-(p_y + sv_y),\ p_x + sv_x,\ 0\bigr)\cdot(v_x,v_y,v_z)
= p_xv_y - p_yv_x + s\,(v_xv_y - v_yv_x) = p_xv_y - p_yv_x ,
$$

the $s$-dependence cancelling identically. The constant is the $z$-component of $p\times v$: the Killing field of rotations about an axis yields conservation of angular momentum about that axis.

*Numbers.* Take $p = (2,1,3)$ and $v = \tfrac13(1,2,2)$, which has $|v| = \tfrac13\sqrt{1+4+4} = 1$. The predicted constant is

$$
p_xv_y - p_yv_x = 2\cdot\tfrac23 - 1\cdot\tfrac13 = \tfrac43 - \tfrac13 = 1 .
$$

At $s = 3$: $\gamma = (3,3,5)$, $K_\gamma = (-3,3,0)$, and $K_\gamma\cdot v = -3\cdot\tfrac13 + 3\cdot\tfrac23 = -1 + 2 = 1$. At $s = -1.5$: $\gamma = (1.5,\,0,\,2)$, $K_\gamma = (0,\,1.5,\,0)$, and $K_\gamma\cdot v = 1.5\cdot\tfrac23 = 1$. The same value, as part 3 requires.

*How many are there.* By part 4 the Killing algebra of $\mathbb{R}^3$ has dimension $\tfrac12\cdot3\cdot4 = 6$: three translations and three rotations. Bracketing two of them stays inside, in agreement with part 2 — for instance, with $K_z = x\partial_y - y\partial_x$ and $K_x = y\partial_z - z\partial_y$,
$$
[K_z, K_x] = x\partial_z - z\partial_x = K_y ,
$$
the third rotation of the basis. The six fields close on the Lie algebra of the Euclidean group of rigid motions.
:::

:::application{provenance=original}
Killing fields are how symmetry is stated when there are no preferred coordinates, which is why they are the working language of general relativity. A spacetime with a timelike Killing field $\partial/\partial t$ is stationary, and part 3 converts it into the conserved energy of a freely falling particle; an axial Killing field $\partial/\partial\varphi$ gives the conserved angular momentum. In the Schwarzschild metric these two alone reduce the four geodesic equations to a single first-order equation for the radius, which is what makes the perihelion precession and light bending calculable in closed form. The number of independent Killing fields is a coordinate-free measure of how symmetric a spacetime is, and the cosmological models are picked out by demanding a large one.

The same mechanism appears wherever a metric has a symmetry. On a surface of revolution, the rotational Killing field gives Clairaut's relation and with it the qualitative behaviour of geodesics — which parallels they can reach and which they must turn back from, as in :cite[do Carmo's]{work=docarmo-2016 loc="Example 6, pp. 261–262"} analysis of the paraboloid, where every non-meridian geodesic is forced to cross itself infinitely often. In optics and acoustics, where ray paths are the geodesics of an effective metric built from the refractive index, a Killing field is a direction in which the medium is uniform and the conserved quantity is Snell's invariant.

Structurally, part 3 is :ref[Noether's theorem]{to=var.noether-theorem} for the geodesic Lagrangian: the flow of $K$ is a one-parameter group of transformations leaving $\tfrac12g_{ij}\dot x^i\dot x^j$ invariant, and the Noether charge it produces is $g(K,\gamma')$. Read in the Hamiltonian language of :ref[symplectic manifolds]{to=geom.symplectic-manifolds}, the function $p \mapsto p(K)$ on $T^{*}M$ Poisson-commutes with the kinetic-energy Hamiltonian, and the Lie algebra of part 2 maps to a Lie algebra of such functions under the Poisson bracket. Finally, Killing fields are the practical route to separating variables: a coordinate that a Killing field translates is one in which the metric components do not appear, and it is exactly the coordinate that separates out of the Laplace–Beltrami operator.
:::
