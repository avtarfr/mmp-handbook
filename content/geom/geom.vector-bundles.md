---
id: geom.vector-bundles
title: Tangent and vector bundles
kind: definition
level: advanced
summary: Packages a vector space attached to every point of a manifold into a single smooth manifold that looks locally, but usually not globally, like a product, and identifies the tangent, cotangent and tensor bundles as the examples that carry the rest of differential geometry.
prereqs: [geom.tangent-vectors, geom.smooth-manifolds, linalg.vector-spaces-bases]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 3, pp. 65–67 (the tangent bundle and its natural charts, Prop. 3.18); Ch. 10, pp. 249–261 (vector bundles, local trivializations, Prop. 10.4, Lemma 10.5 on transition functions, sections, frames, Prop. 10.19 and Cor. 10.20); Ch. 11, pp. 275–276 (the cotangent bundle, Prop. 11.9); Ch. 12, pp. 316–317 (tensor bundles and tensor fields); Problem 16-6, p. 435 (the hairy ball theorem)"
    pages: "65-67, 249-261, 275-276, 316-317, 435"
    role: all definitions; the tangent bundle as a vector bundle and the Jacobian transition functions; the equivalence of global frames with global trivializations; the cotangent and tensor bundles; the existence of nowhere-vanishing vector fields on spheres
---

:::definition[Vector bundles, sections and frames]{provenance=adapted src="lee-2013:Ch. 10, pp. 249–250, 255–257"}
Let $M$ be a topological space.

- Take a space $E$ and a continuous surjection $\pi:E\to M$. Call the preimage $E_p = \pi^{-1}(p)$ the **fibre** above $p$. The pair is a **real vector bundle of rank $k$ over $M$** when two things hold. First, every fibre is equipped with the structure of a real vector space of dimension $k$. Second, the bundle is *locally a product*: around any point of $M$ one can find an open $U$ and a homeomorphism $\Phi$ from $\pi^{-1}(U)$ onto $U\times\mathbb{R}^{k}$ which keeps track of the base point, $\pi_U\circ\Phi = \pi$ with $\pi_U$ the projection to $U$, and which restricts on each single fibre $E_q$, $q\in U$, to a linear isomorphism onto $\{q\}\times\mathbb{R}^k$. Such a $\Phi$ is a **local trivialization of $E$ over $U$**.
- $E$ is the **total space**, $M$ the **base**, $\pi$ the **projection**. A bundle of rank $1$ is a **line bundle**.
- If $M$ and $E$ are smooth manifolds, $\pi$ is smooth, and the local trivializations may be taken to be diffeomorphisms, $E$ is a **smooth vector bundle** and such a trivialization is a **smooth local trivialization**.
- A local trivialization over all of $M$ is a **global trivialization**; a bundle admitting one is **trivial**, and a smooth bundle admitting a smooth one is **smoothly trivial**. The **product bundle** $M\times\mathbb{R}^k \to M$ is the basic trivial example.
- Where two smooth local trivializations $\Phi$ over $U$ and $\Psi$ over $V$ overlap, $\Phi\circ\Psi^{-1}(p,v) = (p,\tau(p)v)$ for a smooth map $\tau: U\cap V\to GL(k,\mathbb{R})$, the **transition function** between them.
- A **section** of $E$ is a continuous $\sigma: M\to E$ with $\pi\circ\sigma = \mathrm{Id}_M$, so that $\sigma(p)\in E_p$ for every $p$; a **local section** is the same thing defined on an open $U\subseteq M$. The **zero section** assigns to each $p$ the zero vector of $E_p$. For a smooth bundle, $\Gamma(E)$ denotes the smooth global sections; they form a vector space under pointwise operations and a module over $C^{\infty}(M)$ under $(f\sigma)(p) = f(p)\sigma(p)$.
- Sections $\sigma_1,\dots,\sigma_k$ over $U$, taken in that order, make up a **local frame for $E$ over $U$** when, at every $p\in U$, the $k$ values $\sigma_1(p),\dots,\sigma_k(p)$ are a basis of the fibre $E_p$. The frame is **global** if $U$ is all of $M$ and **smooth** if every $\sigma_i$ is.
:::

:::statement[The tangent, cotangent and tensor bundles; triviality]{provenance=adapted src="lee-2013:Prop. 3.18 (p. 66), Prop. 10.4 (p. 252), Lemma 10.5 (pp. 252–253), Prop. 10.19 and Cor. 10.20 (pp. 258–259), Prop. 11.9 (p. 276), Ch. 12 (pp. 316–317)"}
Let $M$ be a smooth $n$-manifold.

1. **The tangent bundle.** The disjoint union $TM = \coprod_{p\in M} T_pM$ of :ref[the tangent spaces]{to=geom.tangent-vectors}, with the projection $\pi(p,v)=p$, carries a natural topology and smooth structure making it a $2n$-dimensional smooth manifold; with its fibrewise vector space structure it is a smooth vector bundle of rank $n$ over $M$. A chart $(U,\varphi)$ of $M$ with coordinate functions $x^i$ yields the smooth local trivialization

   $$
   \Phi\Bigl(v^{i}\frac{\partial}{\partial x^{i}}\Big|_p\Bigr) = \bigl(p,\;(v^1,\dots,v^n)\bigr),
   $$

   and when two charts overlap, the transition function relating their trivializations sends $p$ to the Jacobian, at $p$, of the map that converts one set of coordinates into the other.

2. **Frames and triviality.** Over an open set $U$, smooth frames and smooth trivializations of a smooth bundle determine one another: a trivialization $\Phi$ gives the frame $\sigma_i(p) = \Phi^{-1}(p,e_i)$, and conversely every smooth frame over $U$ arises this way from some smooth trivialization over $U$. Taking $U=M$: a smooth bundle can be trivialized smoothly over the whole base precisely when it carries a smooth global frame. For $E=TM$ this says that $TM$ is a product exactly when $M$ is parallelizable.

3. **Cotangent and tensor bundles.** The disjoint union $T^{*}M = \coprod_p T_p^{*}M$ of the dual spaces is a smooth vector bundle of rank $n$ over $M$, for which the coordinate covector fields dual to $(\partial/\partial x^i)$ are smooth local sections. More generally, replacing each fibre by the space $T^{(k,l)}(T_pM)$ of mixed tensors of type $(k,l)$ on $T_pM$ gives a smooth vector bundle $T^{(k,l)}TM$ of rank $n^{k+l}$. Its sections are the **tensor fields** of type $(k,l)$; the cases $(1,0)$ and $(0,1)$ return $TM$ and $T^{*}M$, and the case $(0,0)$ returns the trivial line bundle $M\times\mathbb{R}$, whose sections are the real functions on $M$.
:::

:::idea{provenance=original}
A bundle is built by prescribing the fibres and the trivializations and then letting the transition functions do the rest. For $TM$ the trivializations come for free: a chart gives a basis of each tangent space in its domain, so listing a tangent vector's $n$ components next to the $n$ coordinates of its base point is a bijection onto an open subset of $\mathbb{R}^{2n}$. Two charts list the same tangent vector differently, but the chain rule says the two lists differ by the Jacobian of the coordinate change, which is invertible and depends smoothly on the point — exactly what a transition function must be. For part 2 the same observation runs backwards: a frame is a way of writing each fibre element as a list of $k$ numbers, which is what a trivialization is; the only work is checking that the dictionary is smooth in both directions, and that is where inverting a matrix of smooth functions enters.
:::

:::proof{provenance=adapted src="lee-2013:proofs of Prop. 3.18 (pp. 66–67), Prop. 10.4 (p. 252), Lemma 10.5 (pp. 252–253) and Prop. 10.19 (pp. 259–260)"}
**1. The tangent bundle.** Given a chart $(U,\varphi)$ with coordinate functions $x^i$, define $\tilde\varphi:\pi^{-1}(U)\to\mathbb{R}^{2n}$ by

$$
\tilde\varphi\Bigl(v^{i}\frac{\partial}{\partial x^{i}}\Big|_p\Bigr) = \bigl(x^1(p),\dots,x^n(p),\,v^1,\dots,v^n\bigr).
$$

- *It is a bijection onto an open set.* Its image is $\varphi(U)\times\mathbb{R}^n$, open in $\mathbb{R}^{2n}$, and the inverse sends $(x,v)$ to $v^i\partial/\partial x^i$ at $\varphi^{-1}(x)$. This uses that the coordinate vectors are a basis of each tangent space over $U$.
- *Two such charts are smoothly compatible.* If $(V,\psi)$ is a second chart with coordinates $\tilde x^{j}$, then on the overlap the chain rule gives $\tilde v^{j} = \bigl(\partial\tilde x^{j}/\partial x^{i}\bigr)v^{i}$, so $\tilde\psi\circ\tilde\varphi^{-1}(x,v) = \bigl(\psi\circ\varphi^{-1}(x),\,J(x)v\bigr)$ with $J(x)$ the Jacobian of $\psi\circ\varphi^{-1}$. Both components are smooth, the first because $M$ is a smooth manifold and the second because it is linear in $v$ with smooth coefficients.

These charts therefore give $TM$ a smooth structure of dimension $2n$, with $\pi$ smooth because in charts it is $(x,v)\mapsto x$. The map $\Phi = (\varphi^{-1}\times \mathrm{Id})\circ\tilde\varphi$ is then a diffeomorphism $\pi^{-1}(U)\to U\times\mathbb{R}^n$, is linear on each fibre, and satisfies $\pi_U\circ\Phi = \pi$: it is a smooth local trivialization. The computation above identifies the transition function as $\tau(p) = J(\varphi(p))$.

**2. Frames and triviality.** Let $E\to M$ be a smooth bundle of rank $k$ and $(\sigma_i)$ a smooth local frame over $U$. Define $\Psi: U\times\mathbb{R}^k\to\pi^{-1}(U)$ by $\Psi(p,v) = v^{i}\sigma_i(p)$.

- $\Psi$ is a bijection, because the $\sigma_i(p)$ form a basis of $E_p$ for each $p$, and it is linear on each $\{p\}\times\mathbb{R}^k$.
- $\Psi$ is smooth, and so is its inverse. Both are local questions, so fix $q\in U$ and choose a smooth local trivialization $\Phi$ of $E$ over a neighbourhood $V\subseteq U$ of $q$. Write $\Phi\circ\sigma_i(p) = \bigl(p,\sigma_i^1(p),\dots,\sigma_i^k(p)\bigr)$ with $\sigma_i^j$ smooth. Then $\Phi\circ\Psi(p,v) = \bigl(p, v^{i}\sigma^{1}_{i}(p),\dots,v^{i}\sigma^{k}_{i}(p)\bigr)$, which is smooth. The matrix $\bigl(\sigma^{j}_{i}(p)\bigr)$ is invertible at each $p$, *because the $\sigma_i(p)$ are a basis and $\Phi$ is a fibrewise isomorphism*; matrix inversion is smooth on $GL(k,\mathbb{R})$, so the entries of the inverse matrix are smooth functions of $p$, and substituting them gives a smooth formula for $(\Phi\circ\Psi)^{-1}$.

Hence $\Psi$ is a diffeomorphism and $\Phi' = \Psi^{-1}$ is a smooth local trivialization; its associated frame $\Phi'^{-1}(p,e_i) = \Psi(p,e_i)=\sigma_i(p)$ is the one we started with. Conversely any smooth local trivialization $\Phi$ produces the smooth local frame $\sigma_i = \Phi^{-1}(\cdot,e_i)$, which is a frame because $\Phi$ restricts to an isomorphism on each fibre. Taking $U = M$ in both directions gives the stated equivalence, and applying it to $E = TM$, whose smooth global frames are by definition what a parallelizable manifold has, gives the last sentence.

**3. Cotangent and tensor bundles.** Repeat part 1 with $T_pM$ replaced by $T_p^{*}M$: a chart gives the dual basis $(\lambda^i|_p)$ of $(\partial/\partial x^i|_p)$ at each $p\in U$, hence a bijection $\pi^{-1}(U)\to\varphi(U)\times\mathbb{R}^{n}$ recording the $n$ components $\omega_i$ of a covector. The chain rule for the coordinate vector fields transposes into $\omega_i = (\partial\tilde x^{j}/\partial x^{i})\,\tilde\omega_j$ for the components of a covector, so the transition function is again a smooth $GL(n,\mathbb{R})$-valued map — this time the inverse transpose of the Jacobian — and the same argument as in part 1 applies. For $T^{(k,l)}TM$, take the basis of $T^{(k,l)}(T_pM)$ built from tensor products of the $\partial/\partial x^i|_p$ and the $\lambda^{j}|_p$; there are $n^{k+l}$ of them, the components of a mixed tensor transform by the corresponding product of Jacobians and inverse-transpose Jacobians, which is smooth and invertible, and the construction goes through unchanged. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="lee-2013:Ch. 10 (pp. 250–252) and Problem 16-6 (p. 435)"}
- *Local triviality is a local hypothesis only, and that is the whole point.* The Möbius bundle — the quotient of $\mathbb{R}^2$ by $(x,y)\sim(x+1,-y)$, fibred over the circle by the first coordinate — satisfies every clause of the definition but is not trivial: a global section is a continuous $f$ on $\mathbb{R}$ with $f(x+1) = -f(x)$, which must vanish somewhere by the intermediate value theorem, so there is no global frame and part 2 denies a global trivialization. Dropping condition (ii) from the definition would leave a family of vector spaces with no way to compare neighbouring fibres.
- *Linearity of $\Phi$ on fibres* is used in both directions of part 2; without it a trivialization would carry no information about the vector space structure, and the matrix $(\sigma^{j}_i)$ in the proof would not be the change-of-basis matrix it needs to be.
- *Smoothness of the transition functions* is what makes the charts of part 1 compatible. If the coordinate change on $M$ were merely $C^1$, the Jacobian would be only continuous and $TM$ would be a topological, not a smooth, manifold.
- *Invertibility of $(\sigma^{j}_i(p))$ at every point* — not just at one point — is needed in part 2, because smoothness of $\Psi^{-1}$ is proved by inverting that matrix throughout a neighbourhood. A $k$-tuple of smooth sections that is a basis at one point only generates a frame on some neighbourhood of that point, not globally.
- *The equivalence in part 2 is not vacuous.* Lee's hairy ball theorem says a nowhere-vanishing vector field exists on $S^{n}$ exactly when $n$ is odd. So $TS^{2}$ has no global frame and is not trivial, even though $S^2$ is as well behaved a manifold as one could want; while $TS^{1}$ and $TS^{3}$ are trivial.
:::

:::method[Recognising or building a vector bundle]{provenance=original}
Given a family $\{E_p\}_{p\in M}$ of $k$-dimensional vector spaces and $E = \coprod_p E_p$ with the obvious projection $\pi$:

1. Cover $M$ by open sets $U_\alpha$ on which a *basis* $(\sigma^{\alpha}_1,\dots,\sigma^{\alpha}_k)$ of $E_p$ is given for every $p\in U_\alpha$, varying in whatever way the construction supplies.
2. Define $\Phi_\alpha:\pi^{-1}(U_\alpha)\to U_\alpha\times\mathbb{R}^k$ by reading off components in that basis. Each $\Phi_\alpha$ is automatically a fibrewise isomorphism.
3. On each overlap compute the change-of-basis matrix $\tau_{\alpha\beta}(p)$ with $\sigma^{\beta}_i(p) = \tau_{\alpha\beta}(p)^{j}{}_{i}\,\sigma^{\alpha}_j(p)$, and check that $p\mapsto \tau_{\alpha\beta}(p)$ is smooth into $GL(k,\mathbb{R})$. This is the only real work.
4. Declare the maps $(\varphi_\alpha\times\mathrm{Id})\circ\Phi_\alpha$ to be charts on $E$; step 3 makes them smoothly compatible, so $E$ is a smooth manifold and a smooth rank-$k$ bundle.
5. To decide whether the result is trivial, look for a global frame; to show it is not, exhibit an obstruction to one (a section that must vanish, as for the Möbius bundle, or a theorem such as the hairy ball theorem).
:::

:::example[The transition function of $TS^{2}$ in stereographic charts]{provenance=original}
Give $S^2\subset\mathbb{R}^3$ the two stereographic charts

$$
\varphi_N(x,y,z) = \frac{(x,y)}{1-z} \quad (z\neq 1), \qquad \varphi_S(x,y,z) = \frac{(x,y)}{1+z} \quad (z\neq -1).
$$

*The coordinate transition map.* If $u = \varphi_N(p)$ then $|u|^2 = (x^2+y^2)/(1-z)^2 = (1-z^2)/(1-z)^2 = (1+z)/(1-z)$, so

$$
\varphi_S\circ\varphi_N^{-1}(u) = \frac{(x,y)}{1+z} = \frac{(x,y)}{1-z}\cdot\frac{1-z}{1+z} = \frac{u}{|u|^{2}} \qquad (u\neq 0).
$$

*The transition function of the bundle.* By part 1 it is the Jacobian of this map. Differentiating $u^{i}/|u|^2$,

$$
\tau(u)^{i}{}_{j} = \frac{\delta^{i}_{j}}{|u|^{2}} - \frac{2u^{i}u^{j}}{|u|^{4}} .
$$

*A numerical check.* Take $u = (1,2)$, so $|u|^2 = 5$. Then $(1+z)/(1-z)=5$ gives $z = 2/3$, $1-z = 1/3$ and $(x,y) = (1-z)u = (1/3,2/3)$; the point is $p = (1/3,\,2/3,\,2/3)$, and indeed $\tfrac19+\tfrac49+\tfrac49 = 1$. Its second chart image is $\varphi_S(p) = (1/3,2/3)/(5/3) = (1/5,2/5) = u/|u|^2$, as the formula predicts. The transition matrix there is

$$
\tau(1,2) = \frac15\begin{pmatrix}1&0\\0&1\end{pmatrix} - \frac{2}{25}\begin{pmatrix}1&2\\2&4\end{pmatrix} = \frac{1}{25}\begin{pmatrix}3&-4\\-4&-3\end{pmatrix},
$$

with $\det\tau(1,2) = (-9-16)/625 = -1/25$, which agrees with the general value $\det\tau(u) = -|u|^{-4} = -1/25$. So the tangent vector $\partial/\partial u^1$ at $p$, with components $(1,0)$ in the chart $\varphi_N$, has components

$$
\tau(1,2)\begin{pmatrix}1\\0\end{pmatrix} = \left(\tfrac{3}{25},\,-\tfrac{4}{25}\right)
$$

in the chart $\varphi_S$. **The determinant is negative at every $u$, so the two charts induce opposite orientations**; and because $\tau$ is nowhere constant and the pair of charts cannot be reduced to one, the two trivializations really do have to be glued. By the hairy ball theorem no third trivialization covers the whole sphere: $TS^2$ is a rank-$2$ bundle over $S^2$ that is not a product.
:::

:::application{provenance=original}
Vector bundles are the language in which fields that take values in a space attached to each point are written, and the twisting measured by the transition functions is physical.

- *Gauge theories.* A matter field in electrodynamics or the standard model is a section of a vector bundle over spacetime; the gauge group is the structure group into which the transition functions take values, and the gauge potential is a connection that says how to differentiate sections (the Christoffel symbols of :ref[the covariant derivative]{to=geom.covariant-derivative} are the special case $E = TM$). A change of gauge is a change of local trivialization, and the field strength is the obstruction to trivializing the connection away.
- *Band theory and the Berry phase.* For a crystal the occupied electronic states form a bundle over the Brillouin torus. The system is an ordinary insulator when that bundle is trivial and a topological insulator when it is not; the integer that distinguishes them, the Chern number, is computed from the transition functions and is what quantizes the Hall conductance.
- *Mechanics.* Velocities live in $TQ$ and momenta in $T^{*}Q$ for a configuration manifold $Q$, which is why the Lagrangian is a function on the tangent bundle and the Hamiltonian a function on the cotangent bundle; see :ref[the canonical equations]{to=var.canonical-equations} and :ref[symplectic manifolds]{to=geom.symplectic-manifolds}.
- *Continuum physics.* Stress, strain and conductivity are sections of tensor bundles over the body or the sample, so that a statement such as "the stress is symmetric" is a statement about a section of a subbundle of $T^{(0,2)}TM$, independent of coordinates; see :ref[stress and strain]{to=geom.stress-strain}.
:::
