---
id: geom.smooth-manifolds
title: Smooth manifolds
kind: definition
level: advanced
summary: Defines a smooth manifold as a topological manifold carrying a maximal atlas of smoothly compatible charts, defines smooth maps and embedded submanifolds, and proves that every regular level set of a smooth map is an embedded submanifold of codimension equal to the dimension of the codomain.
prereqs: [found.implicit-inverse-function, found.topological-spaces, found.continuity-homeomorphism, found.compactness]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 1, pp. 2–3 (topological manifold), pp. 12–13 (transition maps, smooth compatibility, atlas, smooth structure); Ch. 2, pp. 34–35 (smooth maps between manifolds); Ch. 5, p. 98 (embedded submanifold), pp. 101–102 (Thm 5.8, local slice criterion), pp. 105–106 (Thm 5.12, Cor. 5.13, Cor. 5.14 and Example 5.15)"
    pages: "2-3, 12-13, 34-35, 98, 101-102, 105-106"
    role: definitions of topological manifold, chart, smooth atlas and smooth structure; smooth maps; embedded submanifolds and the slice criterion; the regular level set theorem
  - work: hassani-2013
    loc: "§28.1, Def. 28.1.1 and the discussion of charts and $C^\\infty$-related atlases, pp. 860–861; Example 28.1.3 (an atlas for $S^2$ by hemispheres) and Example 28.1.4 (the spherical-angle chart), pp. 861–862; §28.3, Thm 28.3.8 and Example 28.3.9, p. 876"
    pages: "860-862, 876"
    role: the physicists' reading of charts and coordinate functions; the sphere atlas; the regular-value theorem stated through the surjectivity of the differential, with the sphere as its example
---

:::definition[Topological manifold, chart, atlas, smooth structure]{provenance=adapted src="lee-2013:Ch. 1, pp. 3, 12–13; hassani-2013:§28.1, pp. 860–861"}
A topological space $M$ is a **topological $n$-manifold** when it has these three properties:

1. $M$ is Hausdorff: distinct points lie in disjoint open sets.
2. $M$ is second-countable: its topology has a countable basis.
3. $M$ is locally Euclidean of dimension $n$: every point has an open neighbourhood homeomorphic to an open subset of $\mathbb{R}^n$.

A **chart** is a pair $(U, \varphi)$ with $U \subseteq M$ open and $\varphi : U \to \widehat U \subseteq \mathbb{R}^n$ a homeomorphism onto an open set. Writing $\varphi(p) = (x^1(p), \dots, x^n(p))$ defines the **coordinate functions** of the chart; physicists usually name the chart by its coordinates and write $(U, x^i)$.

If $(U, \varphi)$ and $(V, \psi)$ are charts with $U \cap V \neq \varnothing$, the **transition map**

$$
\psi \circ \varphi^{-1} : \varphi(U \cap V) \longrightarrow \psi(U \cap V)
$$

carries one open subset of $\mathbb{R}^n$ to another, and is automatically a homeomorphism. The two charts are **smoothly compatible** if either $U \cap V = \varnothing$ or that transition map is a diffeomorphism, that is, it and its inverse have continuous partial derivatives of every order in the ordinary sense of calculus on $\mathbb{R}^n$.

An **atlas** is a family of charts whose domains cover $M$; it is a **smooth atlas** if its charts are pairwise smoothly compatible, and it is **maximal** if no chart outside it is smoothly compatible with all of its members. A **smooth structure** on $M$ is a maximal smooth atlas, and a **smooth manifold** is a topological manifold together with a smooth structure. A chart belonging to the structure is a **smooth chart**.
:::

:::remark[Why a maximal atlas]{provenance=adapted src="lee-2013:Ch. 1, Prop. 1.17 and its proof, pp. 13–14"}
One never exhibits a maximal atlas. One exhibits a small smooth atlas and appeals to the fact that every smooth atlas is contained in exactly one maximal smooth atlas, namely the collection of all charts smoothly compatible with every chart of the given one; and two smooth atlases determine the same maximal atlas exactly when their union is again a smooth atlas. So, for instance, $\{(\mathbb{R}^n, \mathrm{id})\}$ and the atlas of all unit balls with the identity map determine the same smooth structure on $\mathbb{R}^n$, and any manifold covered by a single chart carries a smooth structure for free, since the compatibility condition is then vacuous.

The smooth structure is extra data, not a property: a topological manifold may admit many inequivalent smooth structures, and some admit none at all.
:::

:::definition[Smooth maps and diffeomorphisms]{provenance=adapted src="lee-2013:Ch. 2, pp. 34–35"}
Let $M$ and $N$ be smooth manifolds. A map $F : M \to N$ is **smooth** when every $p \in M$ lies in the domain of a smooth chart $(U, \varphi)$ of $M$, with $F(p)$ in the domain of a smooth chart $(V, \psi)$ of $N$, such that

$$
F(U) \subseteq V \qquad\text{and}\qquad \psi \circ F \circ \varphi^{-1} : \varphi(U) \to \psi(V) \ \text{ is smooth}.
$$

The map $\widehat F = \psi \circ F \circ \varphi^{-1}$ is the **coordinate representation** of $F$. Requiring $F(U) \subseteq V$ inside the definition, rather than as an afterthought, is what makes every smooth map continuous: on $U$ one has $F = \psi^{-1} \circ \widehat F \circ \varphi$, a composite of continuous maps. Smoothness of the coordinate representation does not depend on which smooth charts are used, because changing chart composes $\widehat F$ with transition maps, which are diffeomorphisms.

A **diffeomorphism** is a smooth bijection with smooth inverse. A real-valued function $f : M \to \mathbb{R}$ is smooth in this sense with $N = \mathbb{R}$ and $\psi = \mathrm{id}$; the set of smooth real-valued functions on $M$ is written $C^\infty(M)$.
:::

:::definition[Embedded submanifold]{provenance=adapted src="lee-2013:Ch. 5, p. 98 and pp. 101–102 (Thm 5.8)"}
Let $M$ be a smooth $n$-manifold and $0 \le k \le n$. A subset $S \subseteq M$ satisfies the **local $k$-slice condition** if every point of $S$ lies in the domain of a smooth chart $(U, \varphi)$ of $M$ in which $S \cap U$ is cut out by freezing the last $n-k$ coordinates:

$$
\varphi(S \cap U) = \bigl\{\, (x^1,\dots,x^n) \in \varphi(U) : x^{k+1} = c^{k+1},\ \dots,\ x^n = c^n \,\bigr\}
$$

for some constants $c^{k+1}, \dots, c^n$. Such a chart is a **slice chart**.

$S$ is an **embedded $k$-dimensional submanifold** of $M$ if, in the subspace topology, it is a topological $k$-manifold carrying a smooth structure for which the inclusion $S \hookrightarrow M$ is a smooth embedding. Lee's local slice criterion says that the two descriptions agree: an embedded $k$-submanifold satisfies the local $k$-slice condition, and conversely a subset satisfying that condition is, with the subspace topology and the charts obtained by dropping the frozen coordinates, an embedded $k$-submanifold. The number $n - k$ is the **codimension** of $S$ in $M$. We use the slice condition as the working definition below, since it is the one a calculation can verify.
:::

:::statement[Regular level set theorem]{provenance=adapted src="lee-2013:Ch. 5, Cor. 5.14, p. 106; hassani-2013:§28.3, Thm 28.3.8, p. 876"}
Fix smooth manifolds $M$ and $N$ of dimensions $m$ and $k$, together with a smooth map $\Phi : M \to N$. At a point $p \in M$, pick smooth charts around $p$ and around $\Phi(p)$ and form the $k \times m$ Jacobian matrix

$$
D\widehat\Phi(\varphi(p)) = \Bigl( \frac{\partial \widehat\Phi^{\,a}}{\partial x^i}(\varphi(p)) \Bigr)_{a = 1,\dots,k;\ i = 1,\dots,m}
$$

of the coordinate representation. Its rank is unambiguous: by the chain rule, changing either chart multiplies this matrix left and right by the invertible Jacobians of transition maps, which cannot alter rank. We call $p$ a **regular point** when that rank attains $k$, the largest a $k \times m$ matrix can have.

The values we can handle are those at which the rank nowhere drops. So declare $c \in N$ **regular** when each $p$ with $\Phi(p) = c$ is a regular point. For $c$ outside the image of $\Phi$ there is no such $p$ at all, so the requirement is empty and $c$ is regular by default.

Then, for regular $c$, the level set $\Phi^{-1}(c)$ is a properly embedded submanifold of $M$ of codimension $\dim N$. Provided it is not empty, this pins down its dimension:

$$
\dim \Phi^{-1}(c) = m - k \qquad (\Phi^{-1}(c) \neq \varnothing).
$$

An empty level set is an embedded submanifold of every dimension at once, so the formula is to be read only in the non-empty case.

Invariantly, the rank condition says that the differential $d\Phi_p$ of :ref[the next unit]{to=geom.tangent-vectors} is surjective; that is how Lee and Hassani state it. For $k = 1$ and $M$ an open subset of $\mathbb{R}^m$ it is just $\nabla \Phi(p) \neq 0$.
:::

:::idea{provenance=original}
The statement is local, and locally everything happens in Euclidean space, because charts turn $\Phi$ into an ordinary smooth map between open subsets of $\mathbb{R}^m$ and $\mathbb{R}^k$. There, surjectivity of the derivative says that $k$ of the $m$ coordinates can be solved for in terms of the other $m-k$: that is exactly the implicit function theorem. Changing to those $m-k$ free coordinates together with the $k$ components of $\Phi$ itself produces a new chart in which the level set is the slice "last $k$ coordinates constant". So the level set satisfies the slice condition, which is what being an embedded submanifold means.
:::

:::proof{provenance=adapted src="lee-2013:Ch. 5, proof of Thm 5.12 and Cor. 5.14, pp. 105–106"}
Write $S = \Phi^{-1}(c)$ and assume $S \neq \varnothing$ (otherwise there is nothing to prove). Fix $p \in S$.

**Step 1 (pass to coordinates).** Choose a smooth chart $(U, \varphi)$ of $M$ with $p \in U$ and a smooth chart $(V, \psi)$ of $N$ with $c \in V$ and $\Phi(U) \subseteq V$; shrinking $U$ if necessary, this is possible because $\Phi$ is continuous. Put $\widehat\Phi = \psi \circ \Phi \circ \varphi^{-1}$, a smooth map from the open set $\widehat U = \varphi(U) \subseteq \mathbb{R}^m$ into $\mathbb{R}^k$, and let $\widehat c = \psi(c)$, $a = \varphi(p)$. Then $\varphi(S \cap U) = \widehat\Phi^{-1}(\widehat c)$, because $\varphi$ and $\psi$ are bijections onto their images, and by the regular-value hypothesis $D\widehat\Phi(a)$ has rank $k$.

**Step 2 (name the solvable block).** Since $D\widehat\Phi(a)$ is a $k \times m$ matrix of rank $k$, it has $k$ linearly independent columns. Relabel the coordinates of $\mathbb{R}^m$ so that these are the last $k$, and split a point as $x = (y, w)$ with $y \in \mathbb{R}^{m-k}$ and $w \in \mathbb{R}^{k}$, $a = (y_0, w_0)$. Then the $k \times k$ matrix $\partial \widehat\Phi / \partial w$ is invertible at $a$. Relabelling is a diffeomorphism of $\mathbb{R}^m$, so it replaces $\varphi$ by another smooth chart.

**Step 3 (implicit function theorem).** By :ref[the implicit function theorem]{to=found.implicit-inverse-function} applied to $\widehat\Phi(y, w) - \widehat c = 0$ at $(y_0, w_0)$, there are open sets $Y \ni y_0$ in $\mathbb{R}^{m-k}$ and $W \ni w_0$ in $\mathbb{R}^{k}$ with $Y \times W \subseteq \widehat U$, and a smooth map $h : Y \to W$ with $h(y_0) = w_0$, such that for $(y,w) \in Y \times W$,

$$
\widehat\Phi(y, w) = \widehat c \iff w = h(y) .
$$

Thus on $Y \times W$ the level set is the graph of $h$.

**Step 4 (flatten the graph).** Define $\Theta : Y \times W \to \mathbb{R}^{m-k} \times \mathbb{R}^{k}$ by

$$
\Theta(y, w) = \bigl(y,\; w - h(y)\bigr).
$$

$\Theta$ is smooth, and it is a diffeomorphism onto its open image because $(y, u) \mapsto (y, u + h(y))$ is a smooth inverse. By Step 3, a point of $Y \times W$ lies in the level set exactly when its last $k$ new coordinates vanish. Hence $(\,\Theta \circ \varphi\,)$, restricted to $\varphi^{-1}(Y \times W)$, is a chart of $M$ — it is smoothly compatible with every smooth chart because it differs from $\varphi$ by a diffeomorphism of open subsets of $\mathbb{R}^m$ — and in it $S$ is the slice $\{x^{m-k+1} = \dots = x^m = 0\}$.

**Step 5 (conclude).** Step 4 produced a slice chart around an arbitrary $p \in S$, so $S$ satisfies the local $(m-k)$-slice condition and is therefore an embedded submanifold of dimension $m-k$, that is, of codimension $k = \dim N$. Finally $S = \Phi^{-1}(c)$ is closed in $M$: $\{c\}$ is closed because $N$ is Hausdorff, and $\Phi$ is continuous. A closed embedded submanifold is properly embedded, because the preimage of a compact set under the inclusion is a closed subset of that compact set, hence compact. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Surjectivity of $d\Phi_p$ at every point of the level set* is used only in Step 2, to produce an invertible $k \times k$ block, and it is indispensable. Take $\Phi(x,y,z) = x^2 + y^2 - z^2$ on $\mathbb{R}^3$. Every $c \ne 0$ is a regular value and $\Phi^{-1}(c)$ is a smooth surface (a hyperboloid). The value $c = 0$ is not regular, because $\nabla\Phi = (2x, 2y, -2z)$ vanishes at the origin, which lies on $\Phi^{-1}(0)$; and indeed the double cone $\Phi^{-1}(0)$ is not a topological $2$-manifold, since deleting the vertex from a small neighbourhood of it disconnects that neighbourhood, which does not happen in $\mathbb{R}^2$. Note that the failure is at one point only, yet it is enough to disqualify the value $c = 0$.
- *Regularity is a condition on the level set, not on $M$.* The theorem does not ask $\Phi$ to be a submersion everywhere; the set of regular points is open, so the restriction of $\Phi$ to a neighbourhood of a regular level set is a submersion, which is all the proof uses.
- *Hausdorff and second-countable* are used twice. Hausdorffness makes $\{c\}$ closed in Step 5 and makes compact subsets closed; both properties are inherited by subspaces, which is why the level set is again a manifold in the subspace topology rather than merely locally Euclidean. Dropping Hausdorffness admits objects such as the line with two origins, which is locally Euclidean but on which limits are not unique.
- *Regularity, not smoothness of $\Phi$, is what does the work.* Drop it and both halves of the conclusion go. The lemniscate $\Phi(x,y) = y^2 - x^2 + x^4$, $\Phi^{-1}(0)$, crosses itself at the origin, where $\nabla\Phi = (-2x + 4x^3,\, 2y)$ vanishes; it is a figure eight, not a $1$-manifold. And $\Phi(x,y) = x^2+y^2$ has $\Phi^{-1}(0) = \{(0,0)\}$, a perfectly good manifold but of dimension $0$, not of the predicted $m - k = 1$.
- *Smooth compatibility of charts* is what makes "smooth function on $M$" well defined at all: if the transition maps were merely continuous, the coordinate representation of $f$ could be smooth in one chart and not in another.
:::

:::method[Showing that a subset of $\mathbb{R}^m$ is a smooth manifold]{provenance=original}
Given $S \subseteq \mathbb{R}^m$, here is how to certify that it is embedded, of dimension $m-k$, and how to produce charts on it:

1. **Find a defining map.** Write $S = \Phi^{-1}(c)$ for a smooth $\Phi : \Omega \to \mathbb{R}^k$ on an open set $\Omega \supseteq S$. Any smooth extension will do; the choice of $\Omega$ can exclude bad points, which is often how a singular locus is avoided.
2. **Compute the Jacobian** $D\Phi = (\partial\Phi^a/\partial x^i)$, a $k \times m$ matrix of functions.
3. **Check rank $k$ at every point of $S$** — not on all of $\Omega$. For $k = 1$ this is $\nabla\Phi \ne 0$; for $k \ge 2$, exhibit a $k \times k$ minor that is nonzero, or compute $\det(D\Phi\,D\Phi^{\mathsf T}) \ne 0$.
4. **Conclude** that $S$ is an embedded submanifold of dimension $m-k$, properly embedded, and compact if it is also bounded.
5. **Charts, if wanted.** Around a given point, the nonzero minor names $k$ coordinates to eliminate; the remaining $m-k$ coordinates restricted to $S$ are a chart there, by Steps 3–4 of the proof above. Transition maps between two such charts are smooth because each is built from the same implicit solutions.
:::

:::example[The sphere, and an atlas for it]{provenance=original}
Let $S^2 = \{x \in \mathbb{R}^3 : |x|^2 = 1\}$.

1. *It is a manifold.* Take $\Phi(x,y,z) = x^2+y^2+z^2$ on $\Omega = \mathbb{R}^3$ and $c = 1$. Then $\nabla\Phi = 2(x,y,z)$, which has norm $2$ at every point of $S^2$ and in particular never vanishes there, so $1$ is a regular value and $S^2$ is an embedded submanifold of $\mathbb{R}^3$ of codimension $1$, hence of dimension $2$. It is closed and bounded, so compact.
2. *A two-chart atlas.* Stereographic projection from the north pole $n = (0,0,1)$ and the south pole $s = (0,0,-1)$ gives
   $$
   \sigma_N(x,y,z) = \frac{(x,y)}{1-z} \quad\text{on } S^2\setminus\{n\}, \qquad
   \sigma_S(x,y,z) = \frac{(x,y)}{1+z} \quad\text{on } S^2\setminus\{s\} .
   $$
   Both are homeomorphisms onto $\mathbb{R}^2$, with
   $$
   \sigma_N^{-1}(u,v) = \frac{1}{u^2+v^2+1}\,\bigl(2u,\; 2v,\; u^2+v^2-1\bigr),
   $$
   as one checks by verifying that this point has norm $1$ and that applying $\sigma_N$ to it returns $(u,v)$. The two domains cover $S^2$, so this is an atlas.
3. *Smooth compatibility.* On the overlap, $u^2+v^2 \neq 0$, and substituting $\sigma_N^{-1}$ into $\sigma_S$ gives the transition map
   $$
   \sigma_S \circ \sigma_N^{-1}(u,v) = \frac{(u,v)}{u^2+v^2},
   $$
   inversion in the unit circle. It is smooth on $\mathbb{R}^2 \setminus \{0\}$ and equals its own inverse, so the two charts are smoothly compatible and the atlas is smooth.
4. *A number.* The Jacobian determinant of the transition map is
   $$
   \det \frac{\partial(\sigma_S \circ \sigma_N^{-1})}{\partial(u,v)} = -\frac{1}{(u^2+v^2)^2},
   $$
   obtained by differentiating the two components and cancelling: the numerator is $(v^2-u^2)(u^2-v^2) - 4u^2v^2 = -(u^2+v^2)^2$. At $(u,v) = (2,1)$ it equals $-1/25 = -0.04$. It is nonzero everywhere on the overlap, as it must be for a diffeomorphism, and it is negative at every point of the overlap. So no consistent orientation of $S^2$ is obtained by declaring both $\sigma_N$ and $\sigma_S$ positively oriented. Replacing $\sigma_S$ by $\widetilde\sigma_S(x,y,z) = (x,-y)/(1+z)$ repairs this: the new transition map is $(u,v) \mapsto (u,-v)/(u^2+v^2)$, whose Jacobian determinant is $+1/(u^2+v^2)^2$, and the two charts then orient $S^2$.
:::

:::example[A torus of revolution as a regular level set]{provenance=original}
Fix $R = 3$ and $r = 1$. On the open set $\Omega = \{(x,y,z) : x^2+y^2 > 0\} \subseteq \mathbb{R}^3$ define

$$
\Phi(x,y,z) = \bigl(\rho - R\bigr)^2 + z^2 , \qquad \rho = \sqrt{x^2+y^2} ,
$$

which is smooth on $\Omega$ because $\rho$ is smooth where $\rho > 0$. Follow the method.

1. *Jacobian.* $\partial_x \Phi = 2(\rho-R)x/\rho$, $\partial_y \Phi = 2(\rho-R)y/\rho$, $\partial_z \Phi = 2z$.
2. *Norm of the gradient.* Using $x^2+y^2 = \rho^2$,
   $$
   |\nabla\Phi|^2 = \frac{4(\rho-R)^2}{\rho^2}\,(x^2+y^2) + 4z^2 = 4\bigl[(\rho-R)^2 + z^2\bigr] = 4\,\Phi .
   $$
3. *Regular value.* Hence on the level set $\Phi = r^2 = 1$ we get $|\nabla\Phi| = 2r = 2 \neq 0$, so $1$ is a regular value and $T = \Phi^{-1}(1)$ is an embedded surface in $\Omega$, and therefore in $\mathbb{R}^3$, since $T$ is contained in $\Omega$ and $\Omega$ is open. It is compact: $T$ is bounded ($2 \le \rho \le 4$, $|z| \le 1$) and closed in $\mathbb{R}^3$, because any limit point has $\rho \ge R - r = 2 > 0$ and so lies in $\Omega$, where $\Phi$ is continuous.
4. *Why $\Omega$ and not $\mathbb{R}^3$.* The formula for $\Phi$ is not differentiable on the $z$-axis. Excluding the axis costs nothing, since the axis misses $T$ by the distance $R - r = 2$.
5. *Where it fails.* For $r = R = 3$ the identity $|\nabla\Phi|^2 = 4\Phi$ still holds, and $|\nabla\Phi| = 2R \ne 0$ on $\Phi^{-1}(R^2)$ within $\Omega$; but the point $(0,0,0)$ satisfies $(\rho-R)^2+z^2 = R^2$ with $\rho = 0$ and lies outside $\Omega$, so it is not covered by the theorem. The set $\{(\rho-3)^2+z^2 = 9\} \subseteq \mathbb{R}^3$ is a pinched torus and is not a manifold at the origin, exactly as the cone in the remark is not one at its vertex.
:::

:::application{provenance=original}
Manifolds enter the applied sciences wherever a system has continuous degrees of freedom subject to constraints. The configuration space of a rigid body with one point fixed is the rotation group, a three-dimensional manifold; that of a double pendulum is a torus $S^1 \times S^1$; the set of unit quaternions used in spacecraft attitude control is $S^3$. In each case the manifold is obtained exactly as the torus above was: a constraint $\Phi = c$ is imposed on an ambient space of raw coordinates, and the regular level set theorem both certifies that the constrained set is smooth and tells us its dimension, which is the number of independent degrees of freedom. Nonlinear constrained optimisation and numerical integrators that must stay on a constraint surface (orthogonality-preserving methods, attitude integrators) rely on the same local chart construction from the proof. In general relativity the whole framework is taken as primitive: spacetime is a four-dimensional smooth manifold with no ambient space at all, and the restriction to smoothly compatible charts is precisely the statement that physical laws must not depend on the coordinates used to record them.
:::
