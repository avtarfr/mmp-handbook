---
id: geom.exponential-map
title: The exponential map
kind: definition
level: advanced
summary: Gives the two constructions that turn a tangent vector at a distinguished point into a point of the manifold -- integrating a left-invariant field on a Lie group, and running a geodesic for unit time on a Riemannian manifold -- shows that both reduce to the matrix exponential or to normal coordinates in the familiar cases, and says exactly how far each one is a diffeomorphism.
prereqs: [geom.flows-integral-curves, group.lie-groups-algebras, geom.geodesics, geom.riemannian-metrics, linalg.matrix-exponential]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 20: one-parameter subgroups and Thm 20.1, p. 516; the matrix exponential, Prop. 20.2, pp. 517–518; the definition of $\\exp : \\mathfrak{g}\\to G$ and Prop. 20.5, p. 518; Examples 20.6–20.7 and Prop. 20.8 (properties of the exponential map), pp. 519–521; Ch. 9, the rescaling lemma 9.3, p. 208, and Thm 9.18 on completeness of left-invariant fields, p. 216"
    pages: "208, 216, 516-521"
    role: the characterisation of one-parameter subgroups as integral curves of left-invariant fields, the definition $\exp X = \gamma(1)$, the identification of the Lie-group exponential of $\mathrm{GL}(n,\mathbb{R})$ with the matrix exponential, and the list of properties including $d(\exp)_0 = \mathrm{Id}$ and the local diffeomorphism
  - work: docarmo-2016
    loc: "§4-6: Lemma 1 (homogeneity of geodesics), p. 287; the definition $\\exp_p(v) = \\gamma(1,v)$ with the sphere and cone examples, p. 288; Prop. 1 (existence on a disc) and Prop. 2 ($d(\\exp_p)_0$ nonsingular), p. 289; normal coordinates and geodesic polar coordinates, pp. 289–290; Prop. 3 (the first fundamental form in geodesic polar coordinates), pp. 291–292"
    pages: "287-292"
    role: the Riemannian exponential map of a surface, the homogeneity lemma and its proof route, the existence of a normal neighbourhood, normal and geodesic polar coordinates, and the values of $E$, $F$, $G$ in those coordinates
  - work: hassani-2013
    loc: "§28.4, the flow written as $F_t = \\exp(tX)$ with the identities (28.20)–(28.23), p. 881; §29.1, completeness of vector fields on a Lie group, Thm 29.1.21 (the exponential map is a diffeomorphism near the origin) and Prop. 29.1.24, pp. 925–926; Example 29.1.23 on why $\\exp$ is called the exponential map, pp. 925–926"
    pages: "881, 925-926"
    role: the notation $\exp(tX)$ for a flow and its group identities, the statement that $\exp$ is a diffeomorphism of a neighbourhood of the origin of $\mathfrak{g}$ onto a neighbourhood of the identity, naturality under Lie group homomorphisms, and the series computation showing $e^{tA}e^{sA} = e^{(t+s)A}$
---

:::definition[The exponential map of a Lie group]{provenance=adapted src="lee-2013:Ch. 20, p. 516 and p. 518; hassani-2013:p. 881 and Thm 29.1.21, p. 925"}
Let $G$ be a Lie group with identity $e$ and Lie algebra $\mathfrak{g}$, realised as the left-invariant vector fields on $G$ or, equivalently, as $T_eG$ (:ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras}).

- A **one-parameter subgroup** of $G$ is a Lie group homomorphism $\gamma : \mathbb{R} \to G$, where $\mathbb{R}$ carries addition. It is a homomorphism *into* $G$, not a subgroup of $G$.
- Left-invariant vector fields are complete, so each $X \in \mathfrak{g}$ has a maximal integral curve $\gamma_X : \mathbb{R}\to G$ with $\gamma_X(0) = e$ (:ref[flows and integral curves]{to=geom.flows-integral-curves}).
- The **exponential map** of $G$ is
  $$
  \exp : \mathfrak{g}\to G, \qquad \exp X = \gamma_X(1).
  $$

Hassani writes the flow of any vector field $X$ as $F_t = \exp(tX)$; on a Lie group with $X$ left-invariant this notation agrees with the definition above, because the flow of $X$ is right translation by $\exp tX$.
:::

:::definition[The exponential map of a Riemannian manifold]{provenance=adapted src="docarmo-2016:§4-6, p. 288 and pp. 289–290"}
Let $(M, g)$ be a Riemannian manifold (:ref[Riemannian manifolds]{to=geom.riemannian-metrics}) and $p \in M$. For $v \in T_pM$ let $\gamma(\,\cdot\,, v)$ be the unique maximal geodesic with $\gamma(0, v) = p$ and $\gamma'(0, v) = v$; existence and uniqueness come from the geodesic equation being a second-order ODE with smooth coefficients (:ref[geodesics]{to=geom.geodesics}).

- The **exponential map at $p$** is
  $$
  \exp_p(v) = \gamma(1, v), \qquad \exp_p(0) = p,
  $$
  defined for those $v$ for which $\gamma(\,\cdot\,, v)$ reaches $t = 1$. Geometrically: walk from $p$ a distance $|v|_g$ along the geodesic in the direction of $v$.
- A **normal neighbourhood** of $p$ is a set $V = \exp_p(U)$, where $U \subset T_pM$ is a neighbourhood of $0$ on which $\exp_p$ is a diffeomorphism.
- **Normal coordinates** centred at $p$ are the coordinates on $V$ obtained from an orthonormal basis of $T_pM$ through $\exp_p$: the point $\exp_p(u^ie_i)$ gets coordinates $(u^1, \dots, u^n)$. **Geodesic polar coordinates** $(\rho, \theta)$ on a surface come instead from polar coordinates in $T_pS$; they omit one radial geodesic, the image of the half-line $\theta = 0$. The images of circles about $0$ are the **geodesic circles**, the images of lines through $0$ the **radial geodesics**.
:::

:::statement{provenance=adapted src="lee-2013:Prop. 20.2, pp. 517–518; lee-2013:Thm 20.1, p. 516; lee-2013:Prop. 20.5, p. 518; lee-2013:Prop. 20.8, pp. 519–521; docarmo-2016:Lemma 1, p. 287; docarmo-2016:Props. 1–2, p. 289; docarmo-2016:Prop. 3, p. 291"}
**A. On a Lie group.** Let $G$ be a Lie group with Lie algebra $\mathfrak{g}$.

1. A curve $\gamma : \mathbb{R}\to G$ is a one-parameter subgroup exactly when, for some left-invariant field $X$, it is the maximal curve that integrates $X$ and has $\gamma(0) = e$. For $X \in \mathfrak{g}$ the map $s \mapsto \exp sX$ is the one-parameter subgroup that $X$ generates.
2. $\exp$ is smooth, and for $X \in \mathfrak{g}$, $s, t\in\mathbb{R}$, $n \in \mathbb{Z}$:
   $$
   \exp\bigl((s+t)X\bigr) = (\exp sX)(\exp tX), \qquad (\exp X)^{-1} = \exp(-X), \qquad (\exp X)^n = \exp(nX).
   $$
3. $(d\exp)_0 : T_0\mathfrak{g}\to T_eG$ is the identity, under the canonical identifications of both with $\mathfrak{g}$; consequently $\exp$ restricts to a diffeomorphism from a neighbourhood of $0$ in $\mathfrak{g}$ onto a neighbourhood of $e$ in $G$.
4. If $\Phi : G \to H$ is a Lie group homomorphism then $\Phi(\exp X) = \exp\bigl(d\Phi_e X\bigr)$ for all $X\in\mathfrak{g}$.
5. For $A$ in $\mathfrak{gl}(n,\mathbb{R})$, the series $e^A = \sum_{k\ge0}A^k/k!$ converges to an invertible matrix, the one-parameter subgroup of $\mathrm{GL}(n,\mathbb{R})$ generated by $A$ is $t\mapsto e^{tA}$, and the exponential map of $\mathrm{GL}(n,\mathbb{R})$ — and of every Lie subgroup of it, restricted to the corresponding subalgebra — is $\exp A = e^A$.

**B. On a Riemannian manifold.** Let $(M,g)$ be Riemannian and $p \in M$.

6. *Homogeneity.* If $\gamma(t, v)$ is defined for $t \in(-\varepsilon,\varepsilon)$ and $\lambda > 0$, then $\gamma(t, \lambda v)$ is defined for $t \in (-\varepsilon/\lambda, \varepsilon/\lambda)$ and $\gamma(t, \lambda v) = \gamma(\lambda t, v)$. Hence $\exp_p(tv) = \gamma(t, v)$ whenever either side is defined.
7. There is $\varepsilon > 0$ such that $\exp_p$ is defined and smooth on the ball $B_\varepsilon \subset T_pM$ of radius $\varepsilon$ about $0$.
8. $\bigl(d\exp_p\bigr)_0 = \mathrm{Id}_{T_pM}$, so $\exp_p$ is a diffeomorphism of some neighbourhood of $0$ onto a normal neighbourhood of $p$.
9. In normal coordinates centred at $p$ on a surface, the geodesics through $p$ are the images of the straight lines $u = at$, $v = bt$, and the coefficients of the first fundamental form at $p$ itself are $E(p) = G(p) = 1$, $F(p) = 0$.
10. In geodesic polar coordinates $(\rho, \theta)$ on a surface,
    $$
    E = 1, \qquad F = 0, \qquad \lim_{\rho\to0}\sqrt{G} = 0, \qquad \lim_{\rho\to0}\bigl(\sqrt G\bigr)_\rho = 1 .
    $$
:::

:::idea{provenance=original}
Both constructions answer the same question: a tangent vector at a point is an infinitesimal displacement, so what finite displacement does it name? Each answers by solving an autonomous differential equation for one unit of time — the integral-curve equation on a Lie group, the geodesic equation on a Riemannian manifold. Both equations are homogeneous under rescaling: doubling the initial vector and halving the time gives the same endpoint. That single fact is what makes $t \mapsto \exp(tX)$ a group homomorphism in the first case and $\exp_p(tv)$ a geodesic in the second, and it is what makes $\exp$ differentiable at the origin with derivative the identity, since along a ray the map is just the parametrised solution. The inverse function theorem then does the rest. In the one case where everything can be written down, $G = \mathrm{GL}(n,\mathbb{R})$, the equation is the linear system $\dot\gamma = \gamma A$, whose solution is the matrix exponential series.
:::

:::proof{provenance=adapted src="lee-2013:proof of Thm 20.1, p. 516; lee-2013:proof of Prop. 20.2, pp. 517–518; lee-2013:proof of Prop. 20.5, p. 519; lee-2013:proof of Prop. 20.8(b),(e),(f), pp. 520–521; docarmo-2016:proof of Lemma 1, p. 287 and proof of Prop. 2, p. 289"}
*A1, one-parameter subgroups.* Let $X \in \mathfrak{g}$ with maximal integral curve $\gamma$ starting at $e$; it is defined on all of $\mathbb{R}$, because left-invariant fields are complete. Left invariance says $X$ is $L_h$-related to itself for every $h\in G$, so $L_h$ carries integral curves of $X$ to integral curves of $X$. Taking $h = \gamma(s)$, the curve $t\mapsto \gamma(s)\gamma(t)$ integrates $X$ and begins at the point $\gamma(s)$; the translation lemma of :ref[flows and integral curves]{to=geom.flows-integral-curves} says $t\mapsto\gamma(s+t)$ is too, with the same starting point. By uniqueness of integral curves they coincide:
$$
\gamma(s)\gamma(t) = \gamma(s+t),
$$
which is exactly the homomorphism property. Conversely, a one-parameter subgroup $\gamma$ has $\gamma(0) = e$, and the left-invariant field $X$ with $X_e = \gamma'(0)$ has $\gamma$ as integral curve, by differentiating $\gamma(t_0 + t) = \gamma(t_0)\gamma(t)$ at $t = 0$.

*A2.* Rescaling: if $\gamma$ is an integral curve of $X$ then $t\mapsto\gamma(st)$ is an integral curve of $sX$, by the chain rule. Hence the one-parameter subgroup generated by $sX$ evaluated at $t=1$ is $\gamma_X(s)$, i.e. $\exp sX = \gamma_X(s)$. Then $\exp((s+t)X) = \gamma_X(s+t) = \gamma_X(s)\gamma_X(t)$ by A1, and the inverse and power formulas follow from $t\mapsto\exp tX$ being a homomorphism of $\mathbb{R}$ into $G$. Smoothness of $\exp$ in $X$ is Lee's argument that the flow of the single vector field $\Theta_{(h,X)} = (X_h, 0)$ on $G\times\mathfrak{g}$ is smooth by the fundamental theorem on flows, and $\exp X$ is a projection of that flow at $t=1$.

*A3.* Let $X\in\mathfrak{g}$ and let $\sigma(t) = tX$, a curve in the vector space $\mathfrak{g}$ with $\sigma'(0) = X$. Then
$$
(d\exp)_0(X) = (\exp\circ\,\sigma)'(0) = \frac{d}{dt}\Big|_{t=0}\exp(tX) = \gamma_X'(0) = X ,
$$
using $\exp(tX) = \gamma_X(t)$ from A2. So $(d\exp)_0$ is the identity, in particular invertible, and :ref[the inverse function theorem]{to=found.implicit-inverse-function} gives the local diffeomorphism.

*A5, the matrix case.* With the Frobenius norm, $|A^k| \le |A|^k$, so the series $\sum A^k/k!$ is dominated termwise by $\sum c^k/k! = e^c$ on $\{|A|\le c\}$ and converges uniformly there; the same bound applies to the termwise derivative, so term-by-term differentiation of $t\mapsto e^{tA}$ is legitimate and gives $\frac{d}{dt}e^{tA} = e^{tA}A$. Under the standard identification of $\mathfrak{gl}(n,\mathbb{R})$ with left-invariant fields on $\mathrm{GL}(n,\mathbb{R})$, the integral curve of $A$ starting at $I$ is the solution of $\dot\gamma = \gamma A$, $\gamma(0) = I$; so $\gamma(t) = e^{tA}$. Finally $\eta(t) = e^{tA}e^{-tA}$ has $\eta'(t) = e^{tA}Ae^{-tA} - e^{tA}Ae^{-tA} = 0$ and $\eta(0) = I$, so $e^{tA}$ is invertible with inverse $e^{-tA}$ and the curve does take values in $\mathrm{GL}(n,\mathbb{R})$. For a Lie subgroup $H$, a one-parameter subgroup of $H$ is one of $G$ with initial velocity in $T_eH$, so the exponential of $H$ is the restriction of that of $G$. (See :ref[the matrix exponential]{to=linalg.matrix-exponential} for the linear-algebra side of this series.)

*B6, homogeneity.* Fix $v$ and $\lambda>0$ and set $\alpha(t) = \gamma(\lambda t, v)$, defined for $|t| < \varepsilon/\lambda$. Then $\alpha(0) = p$ and $\alpha'(0) = \lambda v$ by the chain rule. The geodesic equation is $D_{\alpha'}\alpha' = 0$ with $D$ the covariant derivative along the curve (:ref[Christoffel symbols and the covariant derivative]{to=geom.covariant-derivative}), and reparametrising by a constant factor multiplies it by $\lambda^2$:
$$
D_{\alpha'(t)}\alpha'(t) = \lambda^2\,\bigl(D_{\gamma'}\gamma'\bigr)(\lambda t) = 0 ,
$$
so $\alpha$ is a geodesic with initial data $(p, \lambda v)$. By uniqueness of geodesics, $\alpha(t) = \gamma(t, \lambda v)$. Setting $t = 1$ and renaming gives $\exp_p(tv) = \gamma(t,v)$: a geodesic is a straight ray in $T_pM$ seen through $\exp_p$.

*B7.* Smooth dependence of the geodesic on its initial data gives $\varepsilon_1,\varepsilon_2>0$ and a smooth $\gamma$ on $(-\varepsilon_2,\varepsilon_2)\times B_{\varepsilon_1}$. The interval of definition shrinks as $|v|$ grows, but by B6 it shrinks in a controlled way: $\gamma(t, (\varepsilon_2/2)v)$ exists for $|t| < 2$ whenever $|v| < \varepsilon_1$. So for $\varepsilon < \varepsilon_1\varepsilon_2/2$ and $w \in B_\varepsilon$, $\gamma(1, w) = \exp_p w$ is defined, and it is smooth in $w$ because $\gamma$ is.

*B8.* Identify $T_0(T_pM)$ with $T_pM$. For $v \in T_pM$ take the curve $\alpha(t) = tv$ in $T_pM$; then $\alpha'(0)=v$ and, by B6,
$$
\bigl(d\exp_p\bigr)_0(v) = \frac{d}{dt}\Big|_{t=0}\exp_p(tv) = \frac{d}{dt}\Big|_{t=0}\gamma(t,v) = v .
$$
So $(d\exp_p)_0$ is the identity and the inverse function theorem applies.

*B9.* In normal coordinates the curve $t\mapsto\exp_p(t(ae_1 + be_2))$ is, by B6, the geodesic with initial velocity $ae_1+be_2$, and it has coordinate representation $u = at$, $v = bt$. Since $(d\exp_p)_0 = \mathrm{Id}$ and $(e_1, e_2)$ is orthonormal, the coordinate frame at $p$ is $(e_1, e_2)$, whence $E(p) = \langle e_1,e_1\rangle = 1$, $F(p) = \langle e_1,e_2\rangle = 0$, $G(p) = 1$.

*B10.* $\rho$ is arc length along each radial geodesic $\theta = \mathrm{const}$, so $E = \langle x_\rho, x_\rho\rangle = 1$. For $F$: differentiating $F = \langle x_\rho, x_\theta\rangle$ in $\rho$ and using that the $\theta$-curves are geodesics, so the $\rho$-derivative of $x_\rho$ has no tangential part,
$$
F_\rho = \langle x_{\rho\rho}, x_\theta\rangle + \langle x_\rho, x_{\theta\rho}\rangle = 0 + \tfrac12\,\partial_\theta\langle x_\rho, x_\rho\rangle = \tfrac12\,\partial_\theta(1) = 0 ,
$$
so $F$ does not depend on $\rho$; letting $\rho\to0$, where all the radial geodesics meet at $p$, forces $F = 0$. The two limits for $\sqrt G$ say that the geodesic circles shrink to the point $p$ and that their circumference is $2\pi\rho$ to leading order, which is the statement that in the limit the geometry is Euclidean. $\square$
:::

:::remark[Where the hypotheses are used, and what fails]{provenance=adapted src="lee-2013:p. 521; docarmo-2016:p. 288; hassani-2013:Thm 29.1.21, p. 925"}
- *Completeness is what makes the Lie-group $\exp$ global.* The definition $\exp X = \gamma_X(1)$ needs $\gamma_X$ to reach $t=1$. On a Lie group this is free, because left translation moves any short integral curve anywhere, so left-invariant fields are complete. On a Riemannian manifold nothing of the kind holds, and $\exp_p$ is only defined on a star-shaped neighbourhood of $0$: on the cone minus its vertex, $\exp_p(v)$ fails to exist for $v$ pointing at the vertex once $|v|$ reaches the distance to it.
- *$(d\exp)_0 = \mathrm{Id}$ gives only a local diffeomorphism.* Globally $\exp$ may fail to be injective and may fail to be surjective. On the unit sphere, $\exp_p$ sends every vector of length $\pi$ to the antipode of $p$ and every vector of length $2\pi$ back to $p$, so it is injective only on the open ball of radius $\pi$. On a Lie group, Hassani's Theorem 29.1.21 and Lee's Proposition 20.8(f) both claim only a neighbourhood of the origin.
- *The group law holds along a line, not across the algebra.* $\exp((s+t)X) = \exp sX\exp tX$ is a statement about one $X$. For $X \ne Y$ one has $\exp(X+Y) \ne \exp X \exp Y$ in general; the two agree for all $X,Y$ in a connected group only when the group is abelian, and the discrepancy at second order is governed by $[X, Y]$.
- *The two exponential maps are different constructions.* One integrates a first-order equation determined by the group structure, the other a second-order equation determined by the metric. They share a name because both are built by running an autonomous flow for unit time out of a tangent vector, and both have differential the identity at the origin; they are not instances of one definition, and a unit should say which is meant.
- *The limits in B10 are limits.* $F = 0$ and $E = 1$ hold on the whole chart, but $\sqrt G$ is only pinned down at $\rho = 0$; how it departs from $\rho$ for $\rho>0$ is where the curvature lives, and is the computation behind :ref[the Gauss-Bonnet theorem]{to=geom.gauss-bonnet}.
:::

:::method[Computing an exponential]{provenance=original}
*On a matrix group.* To find $\exp A$ for $A$ in the Lie algebra:

1. Find a polynomial identity satisfied by $A$ — its characteristic or minimal polynomial.
2. Use it to reduce every power $A^k$ in the series $\sum A^k/k!$ to a combination of $I, A, \dots, A^{m-1}$.
3. Collect the scalar series multiplying each of these; they are elementary functions.
4. Check the answer: $\exp A$ must lie in the group (orthogonal, unitary, unit determinant, as the case may be), and $\frac{d}{dt}e^{tA}|_{t=0} = A$.

*On a Riemannian manifold.* To find $\exp_p(v)$:

1. Solve the geodesic equation with $\gamma(0) = p$, $\gamma'(0) = v/|v|$, parametrised by arc length $s$.
2. Evaluate at $s = |v|$; by homogeneity this is $\gamma(1, v) = \exp_p(v)$.
3. For normal coordinates, repeat with $v = u^ie_i$ for an orthonormal basis $(e_i)$ and read the result as a parametrisation; for geodesic polar coordinates use $v = \rho(\cos\theta\,e_1 + \sin\theta\,e_2)$.
4. Check against B9 and B10: the metric must be the identity at $p$, and in polar form $E = 1$, $F = 0$, $\sqrt G \sim \rho$.
:::

:::example[A rotation from its generator]{provenance=original}
Let $n = \tfrac13(2, 1, 2)$, a unit vector, and let $K$ be the matrix with $Kw = n\times w$:
$$
K = \frac13\begin{pmatrix} 0 & -2 & 1\\ 2 & 0 & -2\\ -1 & 2 & 0\end{pmatrix}, \qquad K^\mathsf{T} = -K ,
$$
so $K \in \mathfrak{so}(3)$. Because $n$ is a unit vector, $K^2 = nn^\mathsf{T} - I$ and hence $K^3 = -K$: that is the polynomial identity of step 1. Splitting the series by parity,
$$
e^{\theta K} = I + \Bigl(\theta - \frac{\theta^3}{3!} + \cdots\Bigr)K + \Bigl(\frac{\theta^2}{2!} - \frac{\theta^4}{4!}+\cdots\Bigr)K^2 = I + \sin\theta\,K + (1-\cos\theta)\,K^2 .
$$
Take $\theta = \pi/2$, so $\sin\theta = 1$ and $1 - \cos\theta = 1$. With
$$
K^2 = nn^\mathsf{T} - I = \frac19\begin{pmatrix}-5 & 2 & 4\\ 2 & -8 & 2\\ 4 & 2 & -5\end{pmatrix},
$$
we get
$$
R = e^{(\pi/2)K} = \frac19\begin{pmatrix} 4 & -4 & 7\\ 8 & 1 & -4\\ 1 & 8 & 4 \end{pmatrix}.
$$
*Checks.* $R^\mathsf{T}R = I$ and $\det R = 1$, so $R \in \mathrm{SO}(3)$, as statement A5 requires for the exponential of a skew-symmetric matrix. Its trace is $(4+1+4)/9 = 1$, matching $1 + 2\cos\theta = 1$ for $\theta = \pi/2$. The axis is fixed: $Rn = n$, since $Kn = n\times n = 0$. And $Re_1 = \tfrac19(4, 8, 1)$, a unit vector making angle $\arccos(4/9) = 63.6122^\circ$ with $e_1$ — the correct angle for a $90^\circ$ rotation about an axis that is not perpendicular to $e_1$.
:::

:::example[Normal and geodesic polar coordinates on the unit sphere]{provenance=original}
Let $S^2 \subset\mathbb{R}^3$ be the unit sphere with the induced metric and $p = (0,0,1)$.

*The geodesics.* For a unit vector $v \in T_pS^2$ put $\gamma(s) = \cos s\,p + \sin s\,v$. This curve lies on $S^2$ (since $p \perp v$ and both are unit vectors) and has $\gamma'' = -\gamma$, which is normal to the sphere at $\gamma(s)$; so its tangential acceleration vanishes and it is a geodesic, with $\gamma(0)=p$, $\gamma'(0)=v$ and $|\gamma'| = 1$. By homogeneity (statement B6), for general $v \ne 0$
$$
\exp_p(v) = \cos|v|\,p + \sin|v|\,\frac{v}{|v|}.
$$

*A number.* With $v = \tfrac{\pi}{6}(1,0,0)$, $|v| = \pi/6$ and
$$
\exp_p(v) = \Bigl(\sin\tfrac{\pi}{6},\, 0,\, \cos\tfrac{\pi}{6}\Bigr) = \Bigl(\tfrac12,\, 0,\, \tfrac{\sqrt3}{2}\Bigr) = (0.5,\, 0,\, 0.8660254\ldots),
$$
a point at colatitude $30^\circ$: the walk of length $\pi/6$ along a meridian, as the definition says.

*Geodesic polar coordinates.* Taking $v = \rho(\cos\theta, \sin\theta, 0)$,
$$
x(\rho,\theta) = \bigl(\sin\rho\cos\theta,\ \sin\rho\sin\theta,\ \cos\rho\bigr),
$$
so $x_\rho = (\cos\rho\cos\theta, \cos\rho\sin\theta, -\sin\rho)$ and $x_\theta = (-\sin\rho\sin\theta, \sin\rho\cos\theta, 0)$. Hence
$$
E = 1, \qquad F = 0, \qquad G = \sin^2\rho, \qquad ds^2 = d\rho^2 + \sin^2\!\rho\,d\theta^2 .
$$
This matches statement B10 exactly: $\sqrt G = \sin\rho \to 0$ and $(\sqrt G)_\rho = \cos\rho \to 1$ as $\rho\to0$. In normal coordinates $(u, w) = \rho(\cos\theta,\sin\theta)$ the metric at $p$ itself is $du^2 + dw^2$, as statement B9 says.

*A second number.* The area of the geodesic disc of radius $\rho_0$ is
$$
\int_0^{2\pi}\!\!\int_0^{\rho_0}\sqrt{EG - F^2}\;d\rho\,d\theta = 2\pi\bigl(1 - \cos\rho_0\bigr).
$$
For $\rho_0 = \pi/3$ this is $2\pi(1 - \tfrac12) = \pi = 3.14159\ldots$, whereas the Euclidean value $\pi\rho_0^2 = \pi^3/9 = 3.44514\ldots$ is larger. The deficit is the first visible effect of positive curvature, and $\exp_p$ is what makes the comparison meaningful: both numbers are areas of the same coordinate disc in $T_pS^2$.

*Where it stops being a diffeomorphism.* $\exp_p$ is injective exactly on the open disc $|v| < \pi$; every vector of length $\pi$ is sent to the south pole, and $\sqrt G = \sin\rho$ vanishes there.
:::

:::application{provenance=original}
In quantum mechanics every continuous symmetry acts through an exponential of its generator: the time-evolution operator is $U(t) = e^{-iHt/\hbar}$, a one-parameter subgroup of the unitary group generated by the Hamiltonian, and a rotation by $\theta$ about $n$ acts as $e^{-i\theta\,n\cdot J/\hbar}$, the same construction in :ref[the rotation group and SU(2)]{to=group.so3-su2}. Statement A4 is why a representation of a Lie group is determined near the identity by a representation of its algebra, the working principle behind :ref[angular momentum algebra]{to=group.angular-momentum}. The $3\times3$ example above is Rodrigues's rotation formula, used in robotics and in attitude control to turn an angular-velocity vector into a rotation matrix. On the Riemannian side, normal coordinates at $p$ are the local inertial frame of general relativity: the metric is $\eta_{\mu\nu}$ at $p$ and the Christoffel symbols vanish there, so a freely falling observer sees special relativity to first order, and the leading correction is the curvature that cannot be transformed away (:ref[the Riemann curvature tensor]{to=geom.riemann-curvature}). Geodesic polar coordinates are the natural frame for the local Gauss-Bonnet theorem and for the Bertrand-Puiseux formula, which recovers the Gaussian curvature of a surface from the circumference of a small geodesic circle.
:::
