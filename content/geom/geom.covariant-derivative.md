---
id: geom.covariant-derivative
title: Christoffel symbols and the covariant derivative
kind: definition
level: core
summary: Defines the Christoffel symbols as the components of the derivatives of the basis vectors, derives them from the metric, shows that they are not tensor components, builds the covariant derivative of a tensor of any type, and uses it to define parallel transport, worked out on the sphere.
prereqs: [geom.metric-tensor, geom.tensors, vcalc.curvilinear-coordinates, ode.linear-systems, ode.existence-uniqueness, linalg.determinants]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "Ch. 26, sections 26.18-26.19, pp. 965-971: the definition (26.75)-(26.76) of the Christoffel symbol of the second kind, the derivative (26.77) of the contravariant basis, the transformation law (26.78) and the conclusion that the symbols are not tensor components, the symmetry in the lower indices, the three cyclic relations (26.79)-(26.81) and the metric formula (26.82), the cylindrical-polar worked example (26.83), the failure (26.84) of the partial derivative to be a tensor, the covariant derivatives (26.87)-(26.89) and the collected rules for a second-rank tensor, and the covariant derivative (26.90) of a scalar"
    pages: "965-971"
    role: "the main development: definition, metric formula, transformation law, and the covariant derivative of tensors of any type"
  - work: arfken-2013
    loc: "Ch. 4, section 4.3, pp. 222-224: the obstruction Eqs. (4.51)-(4.52), the definition Eqs. (4.53)-(4.54) of the Christoffel symbols of the second kind and their symmetry, the covariant derivative Eqs. (4.56)-(4.58) of contravariant and covariant vectors, the Christoffel symbol of the first kind Eqs. (4.59)-(4.60), the derivative of the metric as a sum of two first-kind symbols, and the metric formula Eqs. (4.61)-(4.63)"
    pages: "222-224"
    role: the second route to the metric formula through the Christoffel symbol of the first kind, and the second-derivative obstruction
  - work: docarmo-2016
    loc: "Ch. 4, section 4-4, pp. 241-246: Definition 1 of the covariant derivative of a vector field as the tangential part of the ordinary derivative, Eq. (1) showing that it depends only on the Christoffel symbols and the velocity, Definitions 3-6 for fields along a curve, parallel fields and parallel transport, Proposition 1 that parallel transport preserves inner products and Proposition 2 on existence and uniqueness, and the remark that parallel transport is a linear isometry between tangent planes"
    pages: "241-246"
    role: "parallel transport: the definition, existence and uniqueness, and the isometry property"
  - work: stakgold-holst-2011
    loc: "Ch. 10, section 10.4, p. 728: the Levi-Civita connection characterised by annihilating the metric, the covariant derivative written with Christoffel symbols, the failure of covariant derivatives to commute and the Riemann tensor that measures it, and the Einstein field equations with the Einstein and stress-energy tensors"
    pages: "728"
    role: the name and defining property of the Levi-Civita connection, and the general-relativity application
---

:::definition[Christoffel symbols]{provenance=adapted src="rhb-2006:section 26.18, Eqs. (26.75)-(26.77), pp. 965-966; arfken-2013:section 4.3, Eqs. (4.53)-(4.54) and (4.59), pp. 222-223"}
In a general coordinate system the basis vectors $e_i = \partial x/\partial u^i$ change from point to point, so their derivatives do not vanish. Each derivative is itself a vector and may be expanded in the basis. The coefficients are the **Christoffel symbols of the second kind** $\Gamma^k{}_{ij}$:

$$
\frac{\partial e_i}{\partial u^j} = \Gamma^k{}_{ij}\, e_k ,
\qquad\text{equivalently}\qquad
\Gamma^k{}_{ij} = e^k\cdot\frac{\partial e_i}{\partial u^j} ,
$$

the second form obtained by dotting the first with $e^k$ and using reciprocity. There are $n^3$ of them at each point — $27$ in three dimensions — and they depend on the coordinate system, not only on the point. Differentiating the reciprocity relation $e^i\cdot e_j = \delta^i{}_j$ and substituting gives the companion rule for the other basis,

$$
\frac{\partial e^i}{\partial u^j} = -\,\Gamma^i{}_{kj}\, e^k ,
$$

with the opposite sign. The **Christoffel symbol of the first kind** is the same object with its upper index lowered,

$$
[ij,k] = g_{mk}\,\Gamma^m{}_{ij} = e_k\cdot\frac{\partial e_i}{\partial u^j} ,
$$

a notation due to Arfken, Weber and Harris that is convenient in the derivation below. In Cartesian coordinates the $e_i$ are constant, so every $\Gamma^k{}_{ij}$ and every $[ij,k]$ is zero.

Despite carrying three indices, the $\Gamma^k{}_{ij}$ are **not** the components of a tensor; the statement below says precisely how they transform and why.
:::

:::statement[The metric formula, the symmetry, and the transformation law]{provenance=adapted src="rhb-2006:section 26.18, Eqs. (26.78) and (26.82), pp. 966-967; arfken-2013:section 4.3, Eqs. (4.61)-(4.63), pp. 223-224"}
Let $u^1,\dots,u^n$ be a general coordinate system with metric $g_{ij}$ (:ref[]{to=geom.metric-tensor}), and suppose the coordinate map $x$ is $C^3$ so that the symbols are differentiable. Then:

1. **Symmetry.** $\Gamma^k{}_{ij} = \Gamma^k{}_{ji}$, and likewise $[ij,k]=[ji,k]$.
2. **Derivative of the metric.** $\dfrac{\partial g_{ij}}{\partial u^k} = [ik,j] + [jk,i] = \Gamma^l{}_{ik}\,g_{lj} + \Gamma^l{}_{jk}\,g_{il}$.
3. **The metric formula.** The symbols are determined by the metric and its first derivatives alone:
   $$
   \Gamma^m{}_{ij} = \tfrac12\, g^{mk}\left( \frac{\partial g_{jk}}{\partial u^i} + \frac{\partial g_{ki}}{\partial u^j} - \frac{\partial g_{ij}}{\partial u^k} \right) .
   $$
4. **Transformation law.** Under a change of coordinates $u \to \bar u$,
   $$
   \bar\Gamma^{\,k}{}_{ij} = \frac{\partial\bar u^{\,k}}{\partial u^n}\frac{\partial u^l}{\partial\bar u^{\,i}}\frac{\partial u^m}{\partial\bar u^{\,j}}\,\Gamma^n{}_{lm} \;+\; \frac{\partial\bar u^{\,k}}{\partial u^l}\,\frac{\partial^2 u^l}{\partial\bar u^{\,i}\,\partial\bar u^{\,j}} .
   $$
   The first term is the type $(1,2)$ tensor law; the second term, containing a second derivative, is not of that form, so the $\Gamma^k{}_{ij}$ are not tensor components. The second term does not depend on $\Gamma$, so the **difference of two sets of Christoffel symbols on the same region is a tensor**.
:::

:::idea{provenance=original}
The symmetry is the equality of mixed partial derivatives in disguise: $\partial e_i/\partial u^j$ and $\partial e_j/\partial u^i$ are both $\partial^2 x/\partial u^i\partial u^j$. The metric formula then comes from a trick that is worth remembering rather than re-deriving. Differentiating $g_{ij}=e_i\cdot e_j$ produces a *sum* of two Christoffel symbols; one such equation cannot be solved for one symbol. Writing the same equation three times with the indices $i,j,k$ cycled gives three sums of two, and the particular combination "second plus third minus first" is arranged so that four of the six terms cancel in pairs and the survivors are two copies of the same symbol. Lowering an index with $g^{mk}$ finishes it. The transformation law is a direct computation: express the barred basis and reciprocal basis in terms of the unbarred ones and differentiate, and the product rule emits exactly one term in which the derivative lands on the transformation coefficients rather than on a basis vector. That is the offending term.
:::

:::proof{provenance=adapted src="rhb-2006:section 26.18, pp. 966-967; arfken-2013:section 4.3, pp. 223-224"}
**1. Symmetry.** Because $e_i = \partial x/\partial u^i$ and $x$ is at least $C^2$,

$$
\frac{\partial e_i}{\partial u^j} = \frac{\partial^2 x}{\partial u^j\,\partial u^i} = \frac{\partial^2 x}{\partial u^i\,\partial u^j} = \frac{\partial e_j}{\partial u^i} .
$$

Dotting with $e^k$ gives $\Gamma^k{}_{ij} = \Gamma^k{}_{ji}$, and contracting with $g_{mk}$ gives the same for the first-kind symbols. **This step uses that the basis comes from coordinates**; see the remark.

**2. Derivative of the metric.** Differentiate $g_{ij}=e_i\cdot e_j$ by the product rule and insert the definition twice:

$$
\frac{\partial g_{ij}}{\partial u^k} = \frac{\partial e_i}{\partial u^k}\cdot e_j + e_i\cdot\frac{\partial e_j}{\partial u^k}
= \Gamma^l{}_{ik}\,e_l\cdot e_j + \Gamma^l{}_{jk}\,e_i\cdot e_l
= \Gamma^l{}_{ik}\,g_{lj} + \Gamma^l{}_{jk}\,g_{il} ,
$$

which in first-kind notation is $[ik,j]+[jk,i]$.

**3. The metric formula.** Write item 2 three times, cycling $i\to j\to k\to i$:

$$
\partial_k g_{ij} = \Gamma^l{}_{ik}g_{lj} + \Gamma^l{}_{jk}g_{il}, \qquad
\partial_i g_{jk} = \Gamma^l{}_{ji}g_{lk} + \Gamma^l{}_{ki}g_{jl}, \qquad
\partial_j g_{ki} = \Gamma^l{}_{kj}g_{li} + \Gamma^l{}_{ij}g_{kl} .
$$

Add the second and third and subtract the first. Using the symmetry from item 1 and the symmetry of $g$, the term $\Gamma^l{}_{ki}g_{jl}$ cancels against $\Gamma^l{}_{ik}g_{lj}$, and $\Gamma^l{}_{kj}g_{li}$ cancels against $\Gamma^l{}_{jk}g_{il}$. What remains is $\Gamma^l{}_{ji}g_{lk}+\Gamma^l{}_{ij}g_{kl} = 2\,\Gamma^l{}_{ij}g_{kl}$, so

$$
\frac{\partial g_{jk}}{\partial u^i} + \frac{\partial g_{ki}}{\partial u^j} - \frac{\partial g_{ij}}{\partial u^k} = 2\,\Gamma^l{}_{ij}\,g_{kl} .
$$

Contract with $g^{mk}$ and use $g^{mk}g_{kl}=\delta^m{}_l$ (**the nondegeneracy of the metric is used here, and only here**) to get item 3. Arfken, Weber and Harris organise the same cancellation through the first-kind symbols, obtaining $[ij,k]$ from the three derivatives first and raising the index afterwards; the arithmetic is identical.

**4. Transformation law.** In the barred system $\bar\Gamma^{\,k}{}_{ij} = \bar e^{\,k}\cdot\partial\bar e_i/\partial\bar u^{\,j}$. Substitute the two basis transformation laws of :ref[]{to=geom.tensors}, namely $\bar e^{\,k} = (\partial\bar u^{\,k}/\partial u^n)\,e^n$ and $\bar e_i = (\partial u^l/\partial \bar u^{\,i})\,e_l$. Differentiating the second by the product rule,

$$
\frac{\partial\bar e_i}{\partial\bar u^{\,j}} = \frac{\partial^2 u^l}{\partial\bar u^{\,j}\partial\bar u^{\,i}}\,e_l + \frac{\partial u^l}{\partial\bar u^{\,i}}\,\frac{\partial u^m}{\partial\bar u^{\,j}}\,\frac{\partial e_l}{\partial u^m} ,
$$

where the chain rule converted $\partial/\partial\bar u^{\,j}$ acting on $e_l$ into $\partial u^m/\partial\bar u^{\,j}$ times $\partial/\partial u^m$. Now dot with $\bar e^{\,k}$. In the first term $e^n\cdot e_l = \delta^n{}_l$ collapses the sum and leaves $(\partial\bar u^{\,k}/\partial u^l)(\partial^2u^l/\partial\bar u^{\,i}\partial\bar u^{\,j})$; in the second, $e^n\cdot\partial e_l/\partial u^m = \Gamma^n{}_{lm}$ by definition. Adding the two gives item 4.

For the last sentence of item 4: if $\Gamma$ and $\tilde\Gamma$ are two such arrays on the same region, both transforming by item 4, their difference $\Gamma - \tilde\Gamma$ loses the second-derivative term, which is the same for both, and obeys the pure type $(1,2)$ law. $\square$
:::

:::definition[The covariant derivative]{provenance=adapted src="rhb-2006:section 26.19, Eqs. (26.84)-(26.90) and the collected rules on p. 971, pp. 968-971; arfken-2013:section 4.3, Eqs. (4.56)-(4.58), pp. 222-223"}
Partial differentiation destroys tensor character. Transforming $\partial v^i/\partial u^j$ and differentiating the transformation coefficients along the way produces

$$
\frac{\partial \bar v^{\,i}}{\partial \bar u^{\,j}} = \frac{\partial \bar u^{\,i}}{\partial u^l}\frac{\partial u^k}{\partial \bar u^{\,j}}\frac{\partial v^l}{\partial u^k} \;+\; \frac{\partial u^k}{\partial\bar u^{\,j}}\frac{\partial^2\bar u^{\,i}}{\partial u^k\partial u^l}\,v^l ,
$$

whose second term spoils the type $(1,1)$ law. The cure is to differentiate the *vector*, basis and all, rather than its components. From $v = v^ie_i$,

$$
\frac{\partial v}{\partial u^j} = \frac{\partial v^i}{\partial u^j}\,e_i + v^i\,\frac{\partial e_i}{\partial u^j} = \frac{\partial v^i}{\partial u^j}\,e_i + v^i\,\Gamma^k{}_{ij}\,e_k
= \left( \frac{\partial v^i}{\partial u^j} + \Gamma^i{}_{kj}\,v^k \right) e_i ,
$$

the last step exchanging the two dummy labels $i$ and $k$ inside the second term so that $e_i$ factors out. The bracket is the **covariant derivative** of $v$, written with a semicolon (a comma denoting the plain partial derivative):

$$
v^i{}_{;\,j} = \frac{\partial v^i}{\partial u^j} + \Gamma^i{}_{kj}\,v^k = v^i{}_{,\,j} + \Gamma^i{}_{kj}\,v^k .
$$

Since $\partial v/\partial u^j = v^i{}_{;j}\,e_i$ is a genuine vector for each $j$, and $du^j$ is an arbitrary contravariant vector, the quotient rule of :ref[]{to=geom.tensors} identifies $v^i{}_{;j}$ as the mixed components of a type $(1,1)$ tensor, written $\nabla v$. The same calculation starting from $v = v_ie^i$, using the minus sign in the derivative of $e^i$, gives the covariant form

$$
v_{i\,;\,j} = \frac{\partial v_i}{\partial u^j} - \Gamma^k{}_{ij}\,v_k .
$$

For a tensor of any type the rule is: differentiate the components, then add one Christoffel term per index — **with a plus sign and the symbol's upper index for each contravariant index, with a minus sign for each covariant index** — and in every term the index of differentiation sits in the last lower slot of the symbol. For second rank this reads

$$
T^{ij}{}_{;\,k} = T^{ij}{}_{,\,k} + \Gamma^i{}_{lk}T^{lj} + \Gamma^j{}_{lk}T^{il} ,\qquad
T^i{}_{j\,;\,k} = T^i{}_{j\,,\,k} + \Gamma^i{}_{lk}T^l{}_j - \Gamma^l{}_{jk}T^i{}_l ,\qquad
T_{ij\,;\,k} = T_{ij\,,\,k} - \Gamma^l{}_{ik}T_{lj} - \Gamma^l{}_{jk}T_{il} ,
$$

and these are the components of one third-rank tensor $\nabla T$ against the three tensor bases. A scalar has no basis vectors to differentiate, so

$$
\varphi_{;\,j} = \varphi_{,\,j} = \frac{\partial\varphi}{\partial u^j} ,
$$

which is already a covariant vector. In Cartesian coordinates every $\Gamma$ vanishes and the covariant derivative is the partial derivative.
:::

:::statement[The metric is covariantly constant]{provenance=adapted src="rhb-2006:section 26.18, Eq. (26.79), p. 966; stakgold-holst-2011:section 10.4, p. 728"}
With the Christoffel symbols defined from the metric as above,

$$
g_{ij\,;\,k} = 0 , \qquad g^{ij}{}_{;\,k} = 0 , \qquad \delta^i{}_{j\,;\,k} = 0 .
$$

Consequently raising and lowering indices commutes with covariant differentiation: $(g_{il}T^{l}{}_{j})_{;k} = g_{il}\,T^l{}_{j\,;k}$, so one may raise an index before or after differentiating and get the same tensor. A rule for differentiating that annihilates the metric in this way is called a **Levi-Civita connection**; Stakgold and Holst characterise it exactly so, and it is the connection used throughout this chapter.
:::

:::proof{provenance=adapted src="rhb-2006:section 26.18, Eq. (26.79), p. 966"}
Apply the covariant-derivative rule for a type $(0,2)$ tensor to $g$:

$$
g_{ij\,;\,k} = \frac{\partial g_{ij}}{\partial u^k} - \Gamma^l{}_{ik}\,g_{lj} - \Gamma^l{}_{jk}\,g_{il} .
$$

Item 2 of the statement above says that the first term is exactly $\Gamma^l{}_{ik}g_{lj}+\Gamma^l{}_{jk}g_{il}$, so the right-hand side is zero. For the contravariant metric, differentiate $g^{ij}g_{jk}=\delta^i{}_k$ covariantly. The covariant derivative obeys the product rule (it is a partial derivative plus terms linear in the components, and both respect products), and $\delta^i{}_k$ has constant components with its two Christoffel terms cancelling, so $\delta^i{}_{k\,;l}=0$; hence $g^{ij}{}_{;\,l}\,g_{jk} = 0$, and contracting with $g^{km}$ gives $g^{im}{}_{;\,l}=0$. $\square$
:::

:::definition[Parallel transport]{provenance=adapted src="docarmo-2016:section 4-4, Definitions 1, 4, 5 and 6 and Eq. (1), pp. 241-245"}
Let $t\mapsto u(t)$, $t\in[a,b]$, be a $C^1$ curve in the coordinate region, and let $v(t)$ be a vector field defined along it, with contravariant components $v^i(t)$. Its **covariant derivative along the curve** is

$$
\frac{Dv^i}{dt} = \frac{dv^i}{dt} + \Gamma^i{}_{jk}\bigl(u(t)\bigr)\,v^j(t)\,\frac{du^k}{dt} ,
$$

obtained from $v^i{}_{;k}$ by contracting with the velocity $\dot u^k$; it is therefore a vector, and it depends on the curve only through the point and the velocity there. The field is **parallel along the curve** if $Dv^i/dt = 0$ for all $t$, and the value $v(t_1)$ of the parallel field with prescribed initial value $v(t_0)=v_0$ is the **parallel transport** of $v_0$ from $u(t_0)$ to $u(t_1)$ along that curve.

Do Carmo arrives at the same equation from outside: for a surface sitting in $\mathbb{R}^3$, the covariant derivative is the ordinary derivative $dv/dt$ followed by orthogonal projection onto the tangent plane, and a field is parallel when its ordinary derivative is purely normal to the surface — it does not turn as seen from within the surface. His Eq. (1) shows that the projection depends only on the Christoffel symbols and the velocity, which is what makes the notion intrinsic.
:::

:::statement[Parallel transport exists, is unique, and preserves the metric]{provenance=adapted src="docarmo-2016:section 4-4, Propositions 1 and 2 and the remark on p. 245, pp. 244-245"}
Let $t\mapsto u(t)$ be a $C^1$ curve on $[a,b]$ lying in a region where the metric is $C^1$, and let $t_0\in[a,b]$.

1. **Existence and uniqueness.** For each $v_0$ there is exactly one parallel field $v(t)$ along the curve with $v(t_0)=v_0$, defined on the whole of $[a,b]$.
2. **Linearity and isometry.** The map $P: v_0\mapsto v(t_1)$ is linear, and if $v(t)$ and $w(t)$ are both parallel then $g_{ij}v^iw^j$ is constant along the curve. In particular parallel transport preserves lengths and the angles between vectors, so it is a linear isometry from the tangent space at $u(t_0)$ onto the tangent space at $u(t_1)$.
3. **Independence of the parametrisation.** Reparametrising a regular curve rescales $Dv/dt$ by the nonzero factor $dt/d\sigma$ and so does not change which fields are parallel.
:::

:::proof{provenance=adapted src="docarmo-2016:section 4-4, Proposition 1, p. 244"}
**1.** The condition $Dv^i/dt = 0$ reads

$$
\frac{dv^i}{dt} = -\,\Gamma^i{}_{jk}\bigl(u(t)\bigr)\,\dot u^k(t)\; v^j(t) ,
$$

a system of $n$ first-order ordinary differential equations that is *linear and homogeneous* in the unknowns $v^1,\dots,v^n$, with coefficient matrix $A^i{}_j(t) = -\Gamma^i{}_{jk}(u(t))\dot u^k(t)$ continuous on $[a,b]$. A linear system with continuous coefficients has a unique solution for each initial value, and that solution exists on the whole interval on which the coefficients are continuous, with no possibility of blow-up (:ref[]{to=ode.linear-systems}, :ref[]{to=ode.existence-uniqueness}). Linearity of $P$ in item 2 is the linearity of the solution map of a linear system.

**2.** Let $v,w$ be parallel. Since $g$ is covariantly constant, the product rule for the covariant derivative along the curve gives

$$
\frac{d}{dt}\bigl( g_{ij}v^iw^j \bigr) = \frac{Dg_{ij}}{dt}v^iw^j + g_{ij}\frac{Dv^i}{dt}w^j + g_{ij}v^i\frac{Dw^j}{dt} = 0 + 0 + 0 = 0 ,
$$

because the left-hand side is a scalar, whose ordinary and covariant derivatives agree, and each of the three terms vanishes: the first by $g_{ij;k}=0$, the other two by parallelism. Hence $g_{ij}v^iw^j$ is constant; taking $w=v$ gives constancy of $\lvert v\rvert$, so $\cos\angle(v,w) = g_{ij}v^iw^j/(\lvert v\rvert\,\lvert w\rvert)$ is a ratio of constants and is itself constant. Since $P$ is a linear map between spaces of the same dimension that preserves lengths, it is injective and therefore an isomorphism, that is, an isometry onto. Do Carmo proves the same proposition geometrically for surfaces: both $dv/dt$ and $dw/dt$ are normal to the tangent plane, so the derivative of $v\cdot w$ is zero.

**3.** Under $t = t(\sigma)$ the chain rule multiplies every term of $Dv^i/dt$ by $dt/d\sigma$, and $dt/d\sigma \neq 0$ for a regular reparametrisation, so the vanishing of one expression is equivalent to the vanishing of the other. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="rhb-2006:section 26.18, p. 965; stakgold-holst-2011:section 10.4, p. 728"}
**The coordinate basis, in the symmetry.** $\Gamma^k{}_{ij}=\Gamma^k{}_{ji}$ was proved by exchanging the order of two partial derivatives of $x$, which requires $x$ to be $C^2$ and, more importantly, requires $e_i$ to be $\partial x/\partial u^i$ for an actual coordinate system. Connection coefficients defined the same way for a frame that is *not* the coordinate frame — for instance the orthonormal frame $\hat e_i = e_i/h_i$ of an orthogonal system — are not symmetric in their lower indices, and the metric formula does not apply to them. Everything in this unit is written in the coordinate basis.

**Nondegeneracy of the metric, in the metric formula.** The contraction with $g^{mk}$ that solves $2\Gamma^l{}_{ij}g_{kl}$ for $\Gamma^m{}_{ij}$ needs $[g_{ij}]$ to be invertible. Where it is not — on the axis of polar coordinates, for example — the symbols are undefined, which is visible in the cylindrical case below where $\Gamma^\phi{}_{\rho\phi}=1/\rho$ blows up at $\rho = 0$. That blow-up is a defect of the coordinates, not of the space: in Cartesian coordinates covering the same points all the symbols are zero.

**Metric compatibility, in the isometry.** If the connection did not annihilate the metric, transport would still exist and be unique — item 1 of the transport statement uses only linearity of the ODE — but lengths would drift, and the whole idea of moving a vector "without changing it" would be empty. Compatibility is exactly what rules that out.

**What is *not* assumed: path independence.** Nothing above says that transporting a vector from $p$ to $q$ gives the same answer along two different curves, and in general it does not. Equivalently, covariant derivatives need not commute: Stakgold and Holst note that in flat space $v^a{}_{;bc} - v^a{}_{;cb} = 0$, whereas on a curved manifold the difference equals $R^a{}_{dbc}v^d$, and the array $R^a{}_{dbc}$ built from the Christoffel symbols and their derivatives is what is left over. That array is the Riemann curvature tensor of :ref[]{to=geom.riemann-curvature}; the example below exhibits the failure of path independence on the sphere as a concrete rotation angle, and :ref[]{to=geom.gauss-bonnet} ties the angle to the enclosed curvature.

**Why the $\Gamma$ cannot be a tensor, said once more.** In Cartesian coordinates every $\Gamma^k{}_{ij}$ is zero, and in plane polar coordinates they are not. A tensor whose components all vanish in one coordinate system has vanishing components in all of them, because every term of the transformation law carries a factor of a component. So no tensor can have these components, and item 4 of the statement shows precisely which extra term is to blame.
:::

:::method[Christoffel symbols and covariant derivatives from a metric]{provenance=original}
1. Write the metric $g_{ij}$ in the chosen coordinates, as a matrix, and invert it to get $g^{ij}$. For a diagonal metric both are diagonal and the inversion is free.
2. List the independent symbols. Symmetry in the lower pair leaves $n^2(n+1)/2$ of them: $18$ in three dimensions, $6$ in two.
3. For each, use $\Gamma^m{}_{ij} = \tfrac12 g^{mk}(\partial_i g_{jk} + \partial_j g_{ki} - \partial_k g_{ij})$. With a diagonal metric only $k=m$ contributes, which reduces the work to three derivatives per symbol.
4. Sanity-check: a symbol can be nonzero only if some $g_{ij}$ actually depends on a coordinate appearing among $i,j,m$. If the metric has constant entries, all symbols vanish.
5. Assemble covariant derivatives by the index rule: copy the partial derivative, then add $+\Gamma^{(\text{upper})}{}_{l\,k}$ terms for upper indices and $-\Gamma^{l}{}_{(\text{lower})\,k}$ terms for lower ones, with $k$ the differentiation index always last.
6. Check the result on the metric itself: $g_{ij;k}$ must come out zero. This catches sign and index-order errors immediately.
7. For transport along a curve, substitute into $\dot v^i = -\Gamma^i{}_{jk}v^j\dot u^k$ and solve the linear system. Verify that $g_{ij}v^iv^j$ is constant along the solution.
:::

:::example[Parallel transport around a circle of latitude on the sphere]{provenance=original}
Take the unit sphere with the usual colatitude and longitude $(u^1,u^2) = (\theta,\varphi)$, for which

$$
(ds)^2 = (d\theta)^2 + \sin^2\theta\,(d\varphi)^2 ,
\qquad
[g_{ij}] = \begin{pmatrix} 1 & 0 \\ 0 & \sin^2\theta\end{pmatrix},
\qquad
[g^{ij}] = \begin{pmatrix} 1 & 0 \\ 0 & \sin^{-2}\theta\end{pmatrix} .
$$

**Step 1-3: the symbols.** The only coordinate-dependent entry is $g_{\varphi\varphi}=\sin^2\theta$, and it depends only on $\theta$, so a symbol survives only when it can use $\partial_\theta g_{\varphi\varphi} = 2\sin\theta\cos\theta$. Applying the formula with the metric diagonal:

$$
\Gamma^\theta{}_{\varphi\varphi} = \tfrac12 g^{\theta\theta}\bigl(-\partial_\theta g_{\varphi\varphi}\bigr) = -\sin\theta\cos\theta ,
\qquad
\Gamma^\varphi{}_{\theta\varphi} = \Gamma^\varphi{}_{\varphi\theta} = \tfrac12 g^{\varphi\varphi}\,\partial_\theta g_{\varphi\varphi} = \frac{\cos\theta}{\sin\theta} = \cot\theta ,
$$

and all other symbols vanish. Note $\Gamma^\varphi{}_{\theta\varphi}\to\infty$ at the poles: the coordinates, not the sphere, break down there.

**Step 6: the check.** $g_{\varphi\varphi;\theta} = \partial_\theta g_{\varphi\varphi} - 2\Gamma^l{}_{\varphi\theta}g_{l\varphi} = 2\sin\theta\cos\theta - 2\cot\theta\cdot\sin^2\theta = 0$, as required.

**Step 7: transport along a latitude circle.** Fix a colatitude $\theta_0$ with $0<\theta_0<\pi/2$ and run once round the circle $\theta = \theta_0$, using $\varphi$ itself as the parameter, so $\dot\theta = 0$ and $\dot\varphi = 1$. The transport equations are

$$
\frac{dv^\theta}{d\varphi} + \Gamma^\theta{}_{\varphi\varphi}\,v^\varphi = 0 ,
\qquad
\frac{dv^\varphi}{d\varphi} + \Gamma^\varphi{}_{\theta\varphi}\,v^\theta = 0 ,
$$

that is

$$
\frac{dv^\theta}{d\varphi} = \sin\theta_0\cos\theta_0\; v^\varphi , \qquad \frac{dv^\varphi}{d\varphi} = -\cot\theta_0\; v^\theta .
$$

The mixed coefficients are an artefact of the basis not being orthonormal. Change to the physical components $a = v^\theta$ and $b = \sin\theta_0\, v^\varphi$, which are the components against the unit vectors and satisfy $\lvert v\rvert^2 = a^2+b^2$. Then

$$
\frac{da}{d\varphi} = \cos\theta_0\, b , \qquad \frac{db}{d\varphi} = \sin\theta_0\frac{dv^\varphi}{d\varphi} = -\cos\theta_0\, a .
$$

Writing $z = a+ib$ turns this into $dz/d\varphi = -i\cos\theta_0\,z$, so

$$
z(\varphi) = e^{-i\varphi\cos\theta_0}\,z(0) .
$$

The transported vector keeps its length, as item 2 of the transport statement promised, and rotates in the local orthonormal frame at the constant rate $\cos\theta_0$ per radian of longitude. After one full circuit, $\varphi: 0\to2\pi$, it has turned through

$$
\Delta = 2\pi\cos\theta_0 .
$$

**A number.** Take $\theta_0 = \pi/3$, the circle $30^\circ$ north of the equator. Then $\cos\theta_0 = 1/2$ and

$$
\boxed{\;\Delta = 2\pi\cdot\tfrac12 = \pi \;}
$$

so a vector carried once around that circle comes back **exactly reversed**: $v(2\pi) = -v(0)$. Starting from the unit vector pointing due south, $(v^\theta,v^\varphi) = (1,0)$, the solution is $a=\cos(\varphi/2)$, $b=-\sin(\varphi/2)$, which at $\varphi=2\pi$ is $(a,b) = (-1,0)$.

The transport is therefore genuinely path-dependent: along the circle the vector is reversed, while along any path staying at a fixed point it is unchanged. The discrepancy from the identity, $2\pi - \Delta = 2\pi(1-\cos\theta_0)$, is numerically equal to the area of the spherical cap the circle encloses, which is the local Gauss-Bonnet theorem (:ref[]{to=geom.gauss-bonnet}) and the reason the obstruction is called curvature (:ref[]{to=geom.riemann-curvature}). At the equator, $\theta_0=\pi/2$, the rotation is zero: the equator is a great circle, hence a geodesic (:ref[]{to=geom.geodesics}), and transport along it is trivial in this frame.
:::

:::application[The Foucault pendulum]{provenance=original}
A Foucault pendulum swings in a vertical plane whose horizontal direction is a tangent vector to the Earth's surface. Over one swing the suspension exerts no horizontal torque about the vertical, so the only change in that direction is the change forced by the support being dragged along a circle of latitude by the Earth's rotation: the swing direction is parallel-transported along that circle, in exactly the sense defined above. Over one sidereal day the support completes one circuit of the latitude circle $\theta_0 = 90^\circ - \lambda$, where $\lambda$ is the latitude, and the calculation just performed applies verbatim with $\cos\theta_0 = \sin\lambda$.

The plane of swing therefore rotates relative to the ground by

$$
\Delta = 2\pi\sin\lambda \quad\text{per sidereal day} ,
$$

clockwise in the northern hemisphere. At $\lambda = 45^\circ$ this is $2\pi\sin 45^\circ = 4.4429$ radians, or $254.56^\circ$ per sidereal day. With the sidereal day equal to $23.9345$ hours, the precession rate is

$$
\frac{254.56^\circ}{23.9345\ \text{h}} = 10.64^\circ\ \text{per hour} ,
$$

so the plane takes $360/10.64 = 33.8$ hours to come back to its starting direction — more than a day, which is the observation that made the original 1851 demonstration persuasive. The two extreme cases are the ones the geometry predicts: at the pole, $\lambda = 90^\circ$, the latitude circle degenerates to a point, the holonomy is a full turn, and the plane appears to rotate once per day as the ground turns beneath it; at the equator, $\lambda = 0$, the path is a geodesic, the holonomy vanishes and the pendulum does not precess at all.

The precession rate itself is the classical $\Omega\sin\lambda$ of rotating-frame mechanics; what the geometry adds is the reason the answer depends on latitude through the *enclosed* solid angle rather than on anything local to the pendulum.
:::

:::application[The covariant derivative in general relativity]{provenance=adapted src="stakgold-holst-2011:section 10.4, p. 728"}
The same machinery, with the same Christoffel symbols, carries much heavier loads. Stakgold and Holst set out the chain in a page. Spacetime is a pseudo-Riemannian four-manifold; its metric $g_{ab}$ determines a Levi-Civita connection, characterised by annihilating the metric exactly as in the statement above, and written in components as $v^a{}_{;b} = v^a{}_{,b} + \Gamma^a{}_{cb}v^c$ with the Christoffel symbols of the surface. On a curved manifold covariant derivatives do not commute: the combination $v^a{}_{;bc} - v^a{}_{;cb}$, which vanishes identically in flat space where partial derivatives commute, equals $R^a{}_{dbc}\,v^d$, and

$$
R^a{}_{dbc} = \Gamma^a{}_{bd,c} - \Gamma^a{}_{cd,b} + \Gamma^a{}_{ec}\Gamma^e{}_{bd} - \Gamma^a{}_{eb}\Gamma^e{}_{cd}
$$

is what is left over — the Riemann tensor, built from the symbols and their first derivatives alone, and so from the metric and its first two derivatives. Contracting it gives the Ricci tensor $R_{ab}$ and the scalar curvature $R$, and from them the Einstein tensor $G_{ab} = R_{ab} - \tfrac12 R\,g_{ab}$, which encodes the deformation of spacetime. The field equations

$$
G_{ab} = \kappa\,T_{ab} , \qquad \kappa = \frac{8\pi G}{c^4} ,
$$

then set it equal to the stress-energy tensor that encodes matter and energy. Everything on the left-hand side descends from the one definition in this unit; the covariant derivative is the whole of the differential apparatus of the theory. The curvature tensor itself is :ref[]{to=geom.riemann-curvature}, and the manifold language is :ref[]{to=geom.riemannian-metrics}.
:::
