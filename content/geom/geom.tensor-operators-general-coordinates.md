---
id: geom.tensor-operators-general-coordinates
title: Differential operators in general coordinates
kind: method
level: core
summary: Gives the gradient, divergence, Laplacian and curl in an arbitrary coordinate system, orthogonal or not, as formulas built from the metric and the square root of its determinant, proves each from the covariant derivative, and works all three out in a skew coordinate system with numerical checks.
prereqs: [geom.covariant-derivative, geom.metric-tensor, geom.tensors, vcalc.curvilinear-coordinates, linalg.determinants]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§26.20 'Vector operators in tensor form', pp. 971–975: the gradient Eq. (26.91), the contracted Christoffel symbol Eq. (26.92), the determinant lemma Eqs. (26.93)–(26.96), the divergence Eq. (26.97), the Laplacian Eq. (26.98) and its orthogonal specialisation, and the curl as an antisymmetric covariant tensor with its three-dimensional dual on p. 974; the non-unit basis and the relation $v^i = \\hat v^i / h_i$ on p. 972"
    pages: "971-975"
    role: the four formulas, the route through the contracted Christoffel symbol and the determinant lemma, the curl convention
  - work: arfken-2013
    loc: "§4.3 'Tensors in General Coordinates', subsection 'Tensor Derivative Operators', pp. 223–226: the gradient Eq. (4.64), the divergence Eq. (4.65) with $\\Gamma^i{}_{ik}$ reduced at Eq. (4.66), the determinant derivative Eq. (4.67), the compact divergence Eq. (4.69), the Laplacian Eq. (4.70), the curl difference Eq. (4.71), and the warning after it that the $V_i$ are coefficients of non-unit basis vectors"
    pages: "223-226"
    role: a second derivation of the same four formulas, the comparison with orthogonal scale factors, and the warning about which components the formulas take
  - work: lee-2013
    loc: "Problems 16-11 and 16-13, p. 436: the divergence and the geometric Laplacian of a Riemannian metric in arbitrary smooth local coordinates, with Lee's sign convention $\\Delta u = -\\operatorname{div}(\\operatorname{grad} u)$"
    pages: "436"
    role: the same two formulas stated for a Riemannian manifold of any dimension, and the opposite sign convention for the Laplacian
---

:::definition[The data a general coordinate system supplies]{provenance=adapted src="rhb-2006:§26.20, p. 972 and §26.14–§26.15, pp. 955–958; arfken-2013:§4.3, pp. 218–220, Eq. (4.37)"}
Let $D \subseteq \mathbb{R}^3$ be open and let $u^1, u^2, u^3$ be coordinates on $D$, that is, let the position map $r(u^1,u^2,u^3)$ be $C^2$ with a $C^2$ inverse onto its image. (:ref[]{to=geom.tensors} calls this map $x$; it is written $r$ here so that $x$, $y$, $z$ stay free for Cartesian components in the example.) Write $\partial_i = \partial/\partial u^i$. The objects used below are the ones built in :ref[]{to=geom.tensors}, :ref[]{to=geom.metric-tensor} and :ref[]{to=geom.covariant-derivative}:

- the **covariant basis** $e_i = \partial r/\partial u^i$, tangent to the $u^i$-coordinate curve, and the **contravariant basis** $e^i = \nabla u^i$, normal to the $u^i$-coordinate surface, with $e_i \cdot e^j = \delta_i^j$;
- the **metric** $g_{ij} = e_i\cdot e_j$, its inverse $g^{ij}$, and the number
  $$
  g = \det\,[g_{ij}] ,
  $$
  the determinant of the matrix $G = [g_{ij}]$, which is positive on $D$ because $G = (Dr)^{\mathsf T}(Dr)$ with $Dr$ the (invertible) Jacobian matrix of $r$, so that $g = (\det Dr)^2$;
- the **components** of a vector field $v$ in the two bases, $v = v^ie_i = v_ie^i$, with $v^i = v\cdot e^i$ and $v_i = v\cdot e_i$, related by $v_i = g_{ij}v^j$ and $v^i = g^{ij}v_j$;
- the **Christoffel symbols** $\Gamma^k{}_{ij}$ defined by $\partial_j e_i = \Gamma^k{}_{ij}e_k$, which are symmetric in $i$ and $j$, and the **covariant derivative**, written with a semicolon, $v^i{}_{;j} = \partial_j v^i + \Gamma^i{}_{kj}v^k$ and $v_{i;j} = \partial_j v_i - \Gamma^k{}_{ij}v_k$. A scalar has $\phi_{;j} = \partial_j\phi$, since a scalar does not refer to the basis at all.

Nothing here assumes the coordinates are orthogonal. When they happen to be, $g_{ij} = h_i^2\delta_{ij}$ with the scale factors $h_i$ of :ref[]{to=vcalc.curvilinear-coordinates}, so $g = h_1^2h_2^2h_3^2$ and $g^{ij} = h_i^{-2}\delta_{ij}$. Riley, Hobson and Bence emphasise that even then the $e_i$ are not unit vectors: a **physical component** $\hat v^i$, the coefficient of the unit vector $\hat e_i = e_i/h_i$, is related to the contravariant component by $v^i = \hat v^i/h_i$, with no sum on $i$. Arfken, Weber and Harris attach the same warning to the covariant components $v_i$. The formulas of this unit are stated for $v^i$ and $v_i$, never for $\hat v^i$.
:::

:::statement[The four operators in general coordinates]{provenance=adapted src="rhb-2006:§26.20, Eqs. (26.91), (26.97), (26.98) and the curl on p. 974, pp. 972–975; arfken-2013:§4.3, Eqs. (4.64), (4.69), (4.70), (4.71), pp. 223–225"}
With the hypotheses of the definition, let $\phi$ be a $C^1$ scalar field ($C^2$ for the Laplacian) and $v$ a $C^1$ vector field on $D$.

1. **Gradient.** Its covariant components are the plain partial derivatives:
   $$
   \nabla\phi = (\partial_i\phi)\,e^i .
   $$
2. **Divergence.** With $v^j$ the contravariant components,
   $$
   \nabla\cdot v \;=\; v^i{}_{;i} \;=\; \frac{1}{\sqrt{g}}\,\partial_j\!\left(\sqrt{g}\,v^j\right) .
   $$
3. **Laplacian.**
   $$
   \nabla^2\phi \;=\; \frac{1}{\sqrt{g}}\,\partial_j\!\left(\sqrt{g}\,g^{jk}\,\partial_k\phi\right) .
   $$
4. **Curl.** In any dimension the antisymmetric covariant tensor
   $$
   (\operatorname{curl} v)_{ij} \;=\; v_{i;j} - v_{j;i} \;=\; \partial_j v_i - \partial_i v_j
   $$
   is defined, and the Christoffel symbols have dropped out of the right-hand side. In three dimensions Riley, Hobson and Bence associate with it the vector whose contravariant components are
   $$
   (\nabla\times v)^i \;=\; -\frac{1}{2\sqrt{g}}\,\epsilon^{ijk}\,(\operatorname{curl} v)_{jk} \;=\; \frac{1}{\sqrt{g}}\,\epsilon^{ijk}\,\partial_j v_k ,
   $$
   where $\epsilon^{ijk}$ is the permutation symbol, equal to $+1$ on even permutations of $123$, to $-1$ on odd ones and to $0$ otherwise. It is $\epsilon^{ijk}/\sqrt g$, not $\epsilon^{ijk}$, that is a tensor (:ref[]{to=geom.pseudotensors}), and it is a pseudotensor, so the sign of $\nabla\times v$ depends on the handedness of the labelling $u^1,u^2,u^3$.

Setting $g_{ij} = h_i^2\delta_{ij}$ recovers the orthogonal formulas of :ref[]{to=vcalc.curvilinear-coordinates}: $\sqrt g = h_1h_2h_3$ turns statement 3 into $\nabla^2\phi = (h_1h_2h_3)^{-1}\partial_j\bigl(h_1h_2h_3\,h_j^{-2}\partial_j\phi\bigr)$, which is the formula given there once the sum over $j$ is written out.
:::

:::idea{provenance=adapted src="rhb-2006:§26.20, pp. 972–974; arfken-2013:§4.3, pp. 223–225"}
The divergence and the curl are the Cartesian expressions with every partial derivative promoted to a covariant derivative, because that is the only way to produce a tensor. The work is then to get rid of the Christoffel symbols again, and in each case something special happens. The divergence contracts $\Gamma^i{}_{ki}$ over two of its three indices; two of the three metric derivatives in that contraction cancel against each other, and what is left is exactly the combination that appears in the derivative of a determinant, so the whole Christoffel term collapses into $\partial_k\log\sqrt g$ and can be absorbed into a single derivative of $\sqrt g\,v^k$. The curl antisymmetrises in the two lower indices of $\Gamma^k{}_{ij}$, where the symbol is symmetric, so the Christoffel terms simply cancel. The gradient is free: a scalar has no basis to differentiate. The Laplacian is the divergence applied to the gradient, which costs one index raise.
:::

:::proof{provenance=adapted src="rhb-2006:§26.20, Eqs. (26.92)–(26.98), pp. 972–974; arfken-2013:§4.3, Eqs. (4.65)–(4.71), pp. 223–225"}
**1. The gradient.** The gradient of a scalar is the covariant vector field whose components are the covariant derivatives $\phi_{;i}$, and for a scalar the covariant derivative is simply the partial derivative: the correction terms in the covariant derivative all arise from differentiating basis vectors, and a scalar refers to no basis. Hence $\phi_{;i} = \partial_i\phi$, and $\nabla\phi = (\partial_i\phi)\,e^i$ — which is also what the chain rule gives directly, since $e^i = \nabla u^i$. That is statement 1.

**2. Contracting the Christoffel symbol.** From :ref[]{to=geom.covariant-derivative},
$$
\Gamma^i{}_{kj} = \tfrac12\,g^{il}\bigl(\partial_k g_{jl} + \partial_j g_{kl} - \partial_l g_{kj}\bigr) .
$$
Put $j = i$ and sum. The last two terms cancel: in the middle one rename the dummy indices $i\leftrightarrow l$ and then use the symmetry $g^{li} = g^{il}$, which turns $g^{il}\partial_i g_{kl}$ into $g^{il}\partial_l g_{ki}$, the same as the third term. What survives is
$$
\Gamma^i{}_{ki} = \tfrac12\,g^{il}\,\partial_k g_{il} . \tag{1}
$$

**3. The derivative of the determinant.** Let $A = [a_{ij}]$ be an invertible matrix whose entries depend on the coordinates, let $a = \det A$ and let $\Delta^{ij}$ be the cofactor of $a_{ij}$. Expanding the determinant along the $i$th row, $a = \sum_j a_{ij}\Delta^{ij}$ for each fixed $i$, and no cofactor in that sum contains $a_{ij}$; differentiating with respect to the single entry therefore gives $\partial a/\partial a_{ij} = \Delta^{ij}$. The entries of the inverse are $(A^{-1})_{ij} = \Delta^{ji}/a$ (:ref[]{to=linalg.determinants}), so the chain rule gives
$$
\partial_k a \;=\; \frac{\partial a}{\partial a_{ij}}\,\partial_k a_{ij} \;=\; \Delta^{ij}\,\partial_k a_{ij} \;=\; a\,(A^{-1})_{ji}\,\partial_k a_{ij} .
$$
Apply this to $A = [g_{ij}]$, whose inverse is $[g^{ij}]$ and which is symmetric, so that $(A^{-1})_{ji} = g^{ij}$:
$$
\partial_k g = g\,g^{ij}\,\partial_k g_{ij} . \tag{2}
$$
Comparing (1) and (2), and using $g > 0$ to write $\partial_k\sqrt g = (2\sqrt g)^{-1}\partial_k g$,
$$
\Gamma^i{}_{ki} = \frac{1}{2g}\,\partial_k g = \frac{1}{\sqrt g}\,\partial_k \sqrt g . \tag{3}
$$

**4. The divergence.** The divergence is the contraction $v^i{}_{;i}$ of the covariant derivative, which is a tensor of one lower rank, hence a scalar. Writing it out and inserting (3),
$$
v^i{}_{;i} = \partial_i v^i + \Gamma^i{}_{ki}v^k = \partial_i v^i + \frac{v^k}{\sqrt g}\,\partial_k\sqrt g .
$$
Both terms are what the product rule produces from one derivative: multiplying through by $\sqrt g$ gives $\sqrt g\,\partial_j v^j + v^j\partial_j\sqrt g = \partial_j(\sqrt g\,v^j)$. Dividing by $\sqrt g$, which is legitimate because $g>0$, gives statement 2.

**5. The Laplacian.** By definition $\nabla^2\phi = \nabla\cdot(\nabla\phi)$. Step 1 gives the *covariant* components of $\nabla\phi$, while step 4 wants the *contravariant* ones, so raise the index with the metric: $v^j = g^{jk}\partial_k\phi$. These are $C^1$ when $\phi$ is $C^2$ and the coordinates are $C^2$. Substituting into statement 2 gives statement 3.

**6. The curl.** Expand the two covariant derivatives of the covariant components:
$$
v_{i;j} - v_{j;i} = \bigl(\partial_j v_i - \Gamma^k{}_{ij}v_k\bigr) - \bigl(\partial_i v_j - \Gamma^k{}_{ji}v_k\bigr) = \partial_j v_i - \partial_i v_j ,
$$
the Christoffel terms cancelling because $\Gamma^k{}_{ij} = \Gamma^k{}_{ji}$. The left-hand side is a difference of components of a tensor, hence a tensor; it is antisymmetric in $i$ and $j$ by construction. This is valid in every dimension, and it is the reason the curl of a gradient vanishes identically: for $v_i = \partial_i\phi$ the right-hand side is a difference of mixed second partials of a $C^2$ function.

In three dimensions, contract with the permutation symbol as Riley, Hobson and Bence do. Using the antisymmetry of $(\operatorname{curl} v)_{jk}$,
$$
-\frac{1}{2\sqrt g}\,\epsilon^{ijk}(\operatorname{curl} v)_{jk}
= -\frac{1}{2\sqrt g}\,\epsilon^{ijk}\bigl(\partial_k v_j - \partial_j v_k\bigr)
= \frac{1}{\sqrt g}\,\epsilon^{ijk}\,\partial_j v_k ,
$$
the two halves being equal after the dummy indices $j$ and $k$ are exchanged in the first of them, which costs a sign from $\epsilon^{ijk}$. That is statement 4. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *$g > 0$* is used twice in step 3 and once in step 4: to form $\sqrt g$, to divide by it, and to differentiate it. In Euclidean space with a genuine coordinate system this is automatic, since $g = (\det Dr)^2$; but it fails on the sets where the chart degenerates, which is why the polar axis and the origin have to be deleted from the domain of spherical polars before these formulas may be used there. For an indefinite metric, where $g<0$, the same derivation runs with $|g|$ in place of $g$, because (2) and hence $\Gamma^i{}_{ki} = \tfrac12\partial_k\log|g|$ are unaffected by the sign; this is the form used in relativity.
- *The coordinates are $C^2$* so that the $g_{ij}$ are $C^1$ and the Christoffel symbols exist; step 5 differentiates the metric once more against $\phi$, and the vanishing of $\operatorname{curl}\nabla\phi$ in step 6 needs $\phi$ itself to be $C^2$ for the mixed partials to commute.
- *The symmetry $\Gamma^k{}_{ij} = \Gamma^k{}_{ji}$* is the whole content of step 6. It holds because the $e_i$ come from a coordinate system, so $\partial_j e_i = \partial_j\partial_i r = \partial_i\partial_j r$. In a frame that is not the coordinate frame of any chart — an orthonormal frame on a curved surface, say — the symbol is not symmetric, the Christoffel terms do not cancel, and $\partial_j v_i - \partial_i v_j$ is no longer a tensor.
- *Which components go into which formula* is a hypothesis, not a notational detail. The divergence takes contravariant components $v^j$; the curl takes covariant components $v_k$; the Laplacian needs the full inverse metric $g^{jk}$, including the off-diagonal entries that an orthogonal system does not have. Feeding physical components $\hat v^i$ into the divergence formula is the commonest way to get a wrong answer, and both of our sources warn about it.
- *Three dimensions and a handedness* are needed only for the last part of statement 4. The tensor $(\operatorname{curl} v)_{ij}$ exists in every dimension; it has three independent entries only when $n = 3$, which is what lets it be repackaged as a vector. Relabelling $u^1\leftrightarrow u^2$ changes $\det Dr$ from $+\sqrt g$ to $-\sqrt g$ and reverses $\nabla\times v$, so the formula as written presupposes that the coordinates are listed in right-handed order.
- *Conventions differ on the sign of the curl.* Riley, Hobson and Bence set $(\operatorname{curl} v)_{ij} = v_{i;j} - v_{j;i}$, so that the first index is the one being differentiated *against*; the compensating minus sign in front of their $\epsilon^{ijk}$ contraction is what makes $(\nabla\times v)^i$ come out with the familiar Cartesian sign. Books that instead write $(\operatorname{curl} v)_{ij} = \partial_i v_j - \partial_j v_i$ drop that minus sign. The two routes give the same vector; mixing them gives its negative.
:::

:::note[The same two formulas on a Riemannian manifold]{provenance=adapted src="lee-2013:Problems 16-11 and 16-13, p. 436"}
Statements 2 and 3 are not special to three dimensions or to a surface sitting inside $\mathbb{R}^3$. For a Riemannian metric $g$ on an $n$-manifold, in any smooth local coordinates $x^i$, Lee states the divergence of a vector field $X = X^i\partial/\partial x^i$ as
$$
\operatorname{div} X = \frac{1}{\sqrt{\det g}}\,\partial_i\!\left(X^i\sqrt{\det g}\right) ,
$$
where $\det g$ is the determinant of the component matrix $(g_{kl})$, and the Laplacian as
$$
\Delta u = -\frac{1}{\sqrt{\det g}}\,\partial_i\!\left(g^{ij}\sqrt{\det g}\,\partial_j u\right) .
$$
The minus sign is Lee's convention: he defines the geometric Laplacian as $\Delta u = -\operatorname{div}(\operatorname{grad} u)$, the negative of the operator $\nabla^2$ used here and throughout this handbook, so that its eigenvalues are non-negative, and he warns that authors disagree about the sign. Apart from that sign the two statements are statements 2 and 3 verbatim, with $\det g$ playing the role of $g$. See :ref[]{to=geom.riemannian-metrics}.
:::

:::method[Applying the formulas in a given coordinate system]{provenance=original}
1. **Write down the chart and its domain.** Give $r(u^1,u^2,u^3)$ explicitly, and state the open set on which it is injective with a nowhere-singular Jacobian matrix. Delete the degenerate sets; nothing below is valid on them.
2. **Differentiate once.** Compute the three columns $e_i = \partial r/\partial u^i$ in Cartesian components.
3. **Build the metric.** Form the full matrix $g_{ij} = e_i\cdot e_j$, off-diagonal entries included. Do not assume they vanish; test them.
4. **Determinant and inverse.** Compute $g = \det G$ with $G=[g_{ij}]$, check $g>0$ on the domain, take $\sqrt g$, and invert the matrix to get $g^{ij}$. Check the inverse by multiplying out: a slip here poisons every later step. As a cross-check, $\sqrt g$ must equal $|\det Dr|$, the Jacobian factor of the chart.
5. **Fix the orientation,** if you need the curl: compute $e_1\cdot(e_2\times e_3)$ and confirm it is $+\sqrt g$ rather than $-\sqrt g$. If it is negative, swap two coordinates.
6. **Convert the field to the right components.** From a Cartesian field $v$, the covariant components are $v_i = v\cdot e_i$ and the contravariant ones are $v^i = v\cdot e^i$, most easily obtained by solving the linear system $v = v^ie_i$. Raise and lower with $g^{ij}$, $g_{ij}$ as needed: the divergence wants $v^j$, the curl wants $v_k$.
7. **Apply the formula and simplify** the coefficient functions $\sqrt g$ and $\sqrt g\,g^{jk}$ before differentiating; in most useful charts they collapse.
8. **Convert back and check.** A contravariant answer $w^i$ becomes the Cartesian vector $w^ie_i$. Then test the whole chain on a field whose answer you already know in Cartesian coordinates.

**How it fails.** Step 3 is the one that gets skipped: a chart that looks orthogonal at the origin usually is not orthogonal elsewhere, and the Laplacian then needs the cross terms $g^{jk}$, $j \neq k$. Step 6 is the second: physical components and contravariant components differ by a factor $h_i$ even in an orthogonal system, and in a skew system the physical components are not defined at all. Step 5 is the third, and it is silent: nothing in the algebra warns you that the curl came out with the wrong sign.
:::

:::example[Fan coordinates: a genuinely skew chart]{provenance=original}
Take the chart
$$
x = u, \qquad y = uv, \qquad z = w, \qquad (u,v,w)\in (0,\infty)\times\mathbb{R}\times\mathbb{R} .
$$
Its inverse is $u = x$, $v = y/x$, $w = z$, smooth on the half-space $x>0$, so the chart is a diffeomorphism onto it. The surfaces $u = \text{const}$ are the planes $x = \text{const}$; the surfaces $v = \text{const}$ are the half-planes $y = vx$ hinged on the $z$-axis, so the $v$-coordinate fans out from that axis.

**Steps 2–4.** The basis vectors are
$$
e_u = (1, v, 0), \qquad e_v = (0, u, 0), \qquad e_w = (0,0,1),
$$
so that $e_u\cdot e_v = uv$, which is non-zero wherever $v\neq 0$: the chart is not orthogonal, and nothing from :ref[]{to=vcalc.curvilinear-coordinates} applies. The metric, its determinant and its inverse are
$$
[g_{ij}] = \begin{pmatrix} 1+v^2 & uv & 0\\ uv & u^2 & 0\\ 0&0&1\end{pmatrix},
\qquad g = u^2(1+v^2) - u^2v^2 = u^2 , \qquad \sqrt g = u ,
$$
$$
[g^{ij}] = \begin{pmatrix} 1 & -v/u & 0\\ -v/u & (1+v^2)/u^2 & 0\\ 0&0&1\end{pmatrix} .
$$
(Check the inverse by multiplying the two upper-left $2\times2$ blocks: the $(1,1)$ entry is $(1+v^2)\cdot 1 + uv\cdot(-v/u) = 1$, the $(1,2)$ entry is $(1+v^2)(-v/u) + uv(1+v^2)/u^2 = 0$, and the other two go the same way.) Also $\det Dr = u$, and $\sqrt g = u$ agrees with it, as step 4 requires.

**Step 5.** $e_u\cdot(e_v\times e_w) = \det[e_u\;e_v\;e_w] = u = +\sqrt g > 0$, so $(u,v,w)$ is already right-handed.

**Step 7, the Laplacian.** The three coefficient vectors $\sqrt g\,g^{jk}\partial_k\phi$ are
$$
u\phi_u - v\phi_v , \qquad -v\phi_u + \frac{1+v^2}{u}\,\phi_v , \qquad u\phi_w ,
$$
so
$$
\nabla^2\phi = \frac{1}{u}\left[ \partial_u\bigl(u\phi_u - v\phi_v\bigr) + \partial_v\!\left(-v\phi_u + \frac{1+v^2}{u}\phi_v\right) + \partial_w\bigl(u\phi_w\bigr) \right] .
$$
Test it on $\phi = u^3v$, which is the Cartesian field $x^2y$. Here $\phi_u = 3u^2v$, $\phi_v = u^3$, $\phi_w = 0$. The first bracket is $3u^3v - u^3v = 2u^3v$, whose $u$-derivative is $6u^2v$. The second is $-3u^2v^2 + u^2(1+v^2) = u^2(1-2v^2)$, whose $v$-derivative is $-4u^2v$. The third vanishes. Hence
$$
\nabla^2\phi = \frac{6u^2v - 4u^2v}{u} = 2uv = 2y ,
$$
which is $\nabla^2(x^2y)$ computed in Cartesian coordinates. At the point $u=2$, $v=3$, $w=0$ — that is, $(x,y,z) = (2,6,0)$ — the value is $2\cdot 2\cdot 3 = 12$.

**Step 7, the divergence.** Let $F$ be the field with contravariant components $F^u = u^2v$, $F^v = 0$, $F^w = uw$. Then
$$
\nabla\cdot F = \frac1u\Bigl[\partial_u\bigl(u\cdot u^2v\bigr) + \partial_v(0) + \partial_w\bigl(u\cdot uw\bigr)\Bigr] = \frac{3u^2v + u^2}{u} = u(3v+1) .
$$
To check it, convert to Cartesian: $F = F^ue_u + F^we_w = (u^2v,\, u^2v^2,\, uw) = (xy,\, y^2,\, zx)$, whose Cartesian divergence is $y + 2y + x = 3y + x = 3uv + u$. The two agree, and at $u=2$, $v=3$ both give $2\cdot(9+1) = 20$.

**Step 7, the curl.** Let $G$ be the Cartesian field $(0,0,xy)$. Step 6 gives its covariant components $G_i = G\cdot e_i$, namely $G_u = 0$, $G_v = 0$, $G_w = u^2v$. Then
$$
(\nabla\times G)^u = \frac{\partial_v G_w - \partial_w G_v}{u} = \frac{u^2}{u} = u, \qquad
(\nabla\times G)^v = \frac{\partial_w G_u - \partial_u G_w}{u} = \frac{-2uv}{u} = -2v,
$$
and $(\nabla\times G)^w = (\partial_u G_v - \partial_v G_u)/u = 0$. Reassembling,
$$
\nabla\times G = u\,e_u - 2v\,e_v = u(1,v,0) - 2v(0,u,0) = (u, -uv, 0) = (x, -y, 0),
$$
which is indeed $\nabla\times(0,0,xy)$. Note how little the contravariant answer $(u,-2v,0)$ resembles the Cartesian one: the components are coefficients of basis vectors that are neither unit nor orthogonal, and reading them as if they were Cartesian would give a vector of the wrong length and the wrong direction.
:::

:::application{provenance=original}
**Terrain-following coordinates in atmosphere and ocean models.** Weather and circulation codes do not use height as their vertical coordinate near the ground, because the lowest surfaces would then cut through mountains. They use a coordinate that follows the orography: in the simplest version, $x = \xi$, $y = \eta$, $z = h(\xi,\eta) + s$, with $h$ the terrain height and $s \geq 0$ the height above it. This chart is a shear, so $\sqrt g = 1$, but it is strongly non-orthogonal: $e_\xi = (1,0,h_\xi)$ and $e_s = (0,0,1)$ have $e_\xi\cdot e_s = h_\xi$. Working through the method gives
$$
[g^{ij}] = \begin{pmatrix} 1 & 0 & -h_\xi \\ 0 & 1 & -h_\eta \\ -h_\xi & -h_\eta & 1 + h_\xi^2 + h_\eta^2\end{pmatrix},
$$
and statement 3 then gives the Laplacian in the model's own coordinates as
$$
\nabla^2\phi = \phi_{\xi\xi} + \phi_{\eta\eta} + \bigl(1 + h_\xi^2 + h_\eta^2\bigr)\phi_{ss} - 2h_\xi\,\phi_{\xi s} - 2h_\eta\,\phi_{\eta s} - \bigl(h_{\xi\xi} + h_{\eta\eta}\bigr)\phi_s .
$$
Every term after the first two is a metric term that an orthogonal-coordinate formula would not produce. Over steep topography $h_\xi$ is of order one, the cross terms $-2h_\xi\phi_{\xi s}$ are as large as the terms they correct, and a horizontal derivative taken at constant $s$ differs from one taken at constant $z$ by $h_\xi\phi_s$. In hydrostatic models the horizontal pressure gradient is the small difference of two such large terms, and the resulting cancellation error — the long-standing "pressure-gradient error" of sigma-coordinate models, which can drive spurious currents along a continental slope in an ocean at rest — is exactly a failure to evaluate these metric terms consistently with the rest of the discretisation.

**Scalar fields on a curved background.** In general relativity the wave operator on a scalar field is $\Box\phi = (|g|)^{-1/2}\partial_\mu\bigl(\sqrt{|g|}\,g^{\mu\nu}\partial_\nu\phi\bigr)$, which is statement 3 with the modulus inserted as the remark describes, and it is the form actually used in numerical work because it needs only the metric components and their first derivatives — no Christoffel symbols have to be assembled. The same formula on a Riemannian manifold is the Laplace–Beltrami operator, whose eigenvalues are the normal-mode frequencies of a drum of any shape (:ref[]{to=geom.riemannian-metrics}).

**Finite elements on distorted meshes.** An isoparametric finite element is a chart: the reference cube is mapped to a curved hexahedron by the element's own shape functions. Element stiffness matrices are integrals $\int g^{jk}\,\partial_j N_a\,\partial_k N_b\,\sqrt g\;du^1du^2du^3$ over the reference cube, which is statement 3 integrated against a test function. Mesh-quality measures used by solvers — aspect ratio, skewness, Jacobian ratio — are, in this language, statements about how far $g_{jk}$ departs from a multiple of the identity and how close $\sqrt g$ comes to zero.
:::
