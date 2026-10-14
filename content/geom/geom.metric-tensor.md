---
id: geom.metric-tensor
title: The metric tensor
kind: definition
level: core
summary: Defines the metric tensor as the matrix of dot products of the covariant basis vectors, proves that it is a symmetric second-rank tensor whose inverse is the contravariant metric, and shows how it produces the line element, the volume element and the raising and lowering of indices, with a worked non-orthogonal example.
prereqs: [geom.tensors, vcalc.curvilinear-coordinates, linalg.inner-product-spaces, linalg.determinants, found.change-of-variables]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "Ch. 26, section 26.15, pp. 957-960: the definition (26.56) of g_ij, the line element (26.57), the volume element (26.58), the reduction to scale factors for an orthogonal system, the four forms (26.61)-(26.64) of the scalar product, index raising and lowering, the relation e_i = g_ij e^j, the inverse relation (26.65), and the mixed components; also the worked check on p. 963 that g_ij transforms as a covariant second-order tensor"
    pages: "957-960, 963"
    role: definitions, the line and volume elements, index raising and lowering, and the tensor character of the metric
  - work: arfken-2013
    loc: "Ch. 4, section 4.3, pp. 218-221: the covariant basis Eq. (4.37), the line element Eq. (4.39) and the definition Eq. (4.40) of g_ij, the quotient-rule argument for its tensor character, the defining property Eq. (4.41) of the contravariant metric, the raising and lowering relations Eq. (4.42), the contravariant basis Eqs. (4.44)-(4.47), Example 4.3.1 with the spherical-polar and Minkowski metrics, and the scalar product Eq. (4.48)"
    pages: "218-221"
    role: the quotient-rule route to tensor character, the inverse metric as a definition, and the Minkowski example
  - work: hassani-2013
    loc: "Ch. 26, section 26.5, pp. 804-806: a symmetric bilinear form as a type (0,2) tensor, the induced map from V to its dual, Eqs. (26.30)-(26.31) for lowering and raising a vector index, Definition 26.5.2 of nondegeneracy and of an inner product, the extension to tensors of any type, and Eq. (26.33)"
    pages: "804-806"
    role: the coordinate-free statement, and nondegeneracy as the hypothesis that makes raising and lowering possible
  - work: lee-2013
    loc: "Ch. 13, pp. 341-343: the bundle isomorphism induced by a Riemannian metric, the flat and sharp (musical) isomorphisms X_j = g_ij X^i and w^i = g^ij w_j, and the resulting coordinate formula for the gradient"
    pages: "341-343"
    role: the flat/sharp names for lowering and raising, and the gradient as a raised differential
---

:::definition[The metric tensor and its inverse]{provenance=adapted src="rhb-2006:section 26.15, Eqs. (26.56) and (26.62), pp. 957-958; arfken-2013:section 4.3, Eqs. (4.40), (4.41) and (4.47), pp. 219-220"}
Let $u^1,\dots,u^n$ be a general coordinate system with covariant basis $e_i = \partial x/\partial u^i$ and contravariant basis $e^i = \operatorname{grad} u^i$, as in :ref[]{to=geom.tensors}. The **covariant components of the metric tensor** are the $n^2$ functions

$$
g_{ij} = e_i \cdot e_j ,
$$

and the **contravariant components** are

$$
g^{ij} = e^i \cdot e^j .
$$

Both are symmetric, because the dot product is. The **mixed** components are $g^i{}_j = e^i\cdot e_j = \delta^i{}_j$ by reciprocity, so the Kronecker delta is the metric with one index of each kind.

We write $G = [g_{ij}]$ for the matrix of covariant components and

$$
g = \det G
$$

for its determinant. The coordinate system is assumed nonsingular, so (as proved below) $g \neq 0$ and $G$ is invertible.

In an *orthogonal* system the matrix is diagonal, $g_{ij} = h_i^2\,\delta_{ij}$ with no sum, where the $h_i$ are the scale factors of :ref[]{to=vcalc.curvilinear-coordinates}, and $g = h_1^2h_2^2h_3^2$. The point of the general $g_{ij}$ is precisely to handle systems in which the coordinate curves are not perpendicular, where off-diagonal entries survive.
:::

:::statement[What the metric does]{provenance=adapted src="rhb-2006:section 26.15, Eqs. (26.57)-(26.58) and (26.61)-(26.65), pp. 957-959, and p. 963; arfken-2013:section 4.3, Eqs. (4.39), (4.41)-(4.43) and (4.48), pp. 219-221"}
With the hypotheses of the definition, at every point of the region:

1. **Tensor character.** The $g_{ij}$ are the covariant components of a tensor of type $(0,2)$ and the $g^{ij}$ the contravariant components of the same tensor, of type $(2,0)$.
2. **The two matrices are inverse.** $g^{ij}g_{jk} = \delta^i{}_k$; equivalently $[g^{ij}] = G^{-1}$. In particular $g \neq 0$.
3. **The bases are related by the metric.** $e^i = g^{ij}e_j$ and $e_i = g_{ij}e^j$.
4. **Line element.** For a displacement $dx = e_i\,du^i$,
   $$
   (ds)^2 = dx\cdot dx = g_{ij}\,du^i\,du^j ,
   $$
   with the cross terms $i \neq j$ present exactly when the system is not orthogonal. The length of a curve $t \mapsto u(t)$, $a \le t \le b$, is $\int_a^b \sqrt{g_{ij}\,\dot u^i\dot u^j}\;dt$.
5. **Volume element.** In three dimensions $dV = \sqrt{g}\;du^1du^2du^3$, and in general the Jacobian factor of the coordinate change is $\lvert\det[\,e_1\cdots e_n]\rvert = \sqrt{g}$.
6. **Scalar product.** $v\cdot w = g_{ij}v^iw^j = g^{ij}v_iw_j = v^iw_i = v_iw^i$.
7. **Raising and lowering.** The covariant and contravariant components of one vector are related by
   $$
   v_i = g_{ij}v^j , \qquad v^i = g^{ij}v_j ,
   $$
   and the same holds index by index for a tensor of any type: contracting with $g_{ij}$ turns an upper index into a lower one, contracting with $g^{ij}$ does the reverse, and the two operations are mutually inverse.
:::

:::idea{provenance=original}
Everything follows from two facts and no computation worth the name. The first is that $\{e_i\}$ and $\{e^i\}$ are bases of the same space that are dual to one another; so each is expressible in terms of the other, and the coefficients can only be the dot products, which are the $g$'s. The second is that the components of a vector against a basis are obtained by dotting with the *reciprocal* basis; so passing between $v^i$ and $v_i$ is passing between the two bases, and the matrix that does it is the metric. Tensor character then costs one line, because $g_{ij}$ is built from two objects, $e_i$ and $e_j$, each of which already transforms with one $\partial u/\partial\bar u$ factor.
:::

:::proof{provenance=adapted src="rhb-2006:section 26.15, pp. 958-959 and p. 963; arfken-2013:section 4.3, pp. 219-220"}
**1. Tensor character.** Under a change of coordinates the covariant basis transforms as $\bar e_i = (\partial u^k/\partial\bar u^{\,i})e_k$ (:ref[]{to=geom.tensors}). Hence

$$
\bar g_{ij} = \bar e_i\cdot\bar e_j = \frac{\partial u^k}{\partial \bar u^{\,i}}\frac{\partial u^l}{\partial \bar u^{\,j}}\, e_k\cdot e_l = \frac{\partial u^k}{\partial \bar u^{\,i}}\frac{\partial u^l}{\partial \bar u^{\,j}}\, g_{kl} ,
$$

which is the type $(0,2)$ law. The contravariant basis transforms with the inverse derivatives, so the same two lines with $e^i$ in place of $e_i$ give the type $(2,0)$ law for $g^{ij}$. Arfken, Weber and Harris reach the first of these differently: $(ds)^2$ is a scalar and $du^i$ is an arbitrary contravariant vector, so the quotient rule applied twice to item 4 identifies $g_{ij}$ as a $(0,2)$ tensor. Both routes are available; the second needs item 4 first.

**2 and 3. The two matrices are inverse.** The Jacobian of the coordinate map is nonsingular, so $\{e_j\}$ is a basis of $\mathbb{R}^n$ and we may expand the reciprocal basis in it: $e^i = c^{ij}e_j$ for some numbers $c^{ij}$. Dot this with $e^l$ and use the expansion's own reciprocity, $e_j\cdot e^l = \delta_j^{\;l}$:

$$
e^i\cdot e^l = c^{ij}\,(e_j\cdot e^l) = c^{ij}\delta_j^{\;l} = c^{il} .
$$

The left-hand side is $g^{il}$ by definition, so $c^{ij} = g^{ij}$ and $e^i = g^{ij}e_j$, which is the first half of item 3. Now dot $e^i = g^{ij}e_j$ with $e_k$:

$$
\delta^i{}_k = e^i\cdot e_k = g^{ij}\,(e_j\cdot e_k) = g^{ij}g_{jk} ,
$$

which is item 2. Since $[g^{ij}]G = I$, the determinant $g$ cannot vanish, and multiplying $e^i = g^{ij}e_j$ by $g_{ki}$ and summing gives $g_{ki}e^i = g_{ki}g^{ij}e_j = \delta_k^{\;j}e_j = e_k$, the second half of item 3. **This is the step that uses the nonsingularity of the coordinate system**, and nothing else in the proof does.

**4. Line element.** A displacement produced by increments $du^i$ is $dx = (\partial x/\partial u^i)du^i = e_i\,du^i$ to first order. Dotting it with itself,

$$
(ds)^2 = (e_i\,du^i)\cdot(e_j\,du^j) = (e_i\cdot e_j)\,du^i du^j = g_{ij}\,du^i du^j ,
$$

where the middle step is bilinearity of the dot product, not orthogonality: no term is discarded. For a curve, divide by $(dt)^2$ and take the square root, which requires $g_{ij}\dot u^i\dot u^j \geq 0$ — true here because it is $\lvert dx/dt\rvert^2$.

**5. Volume element.** Let $J$ be the matrix whose columns are $e_1,\dots,e_n$, that is the Jacobian matrix of $x$. Its Gram matrix is $J^{\mathsf T}J = [\,e_i\cdot e_j\,] = G$, so

$$
(\det J)^2 = \det(J^{\mathsf T}J) = \det G = g ,
$$

giving $\lvert\det J\rvert = \sqrt{g}$; the change-of-variables theorem (:ref[]{to=found.change-of-variables}) then supplies $dV = \sqrt{g}\,du^1\cdots du^n$. In three dimensions $\det J$ is the scalar triple product $e_1\cdot(e_2\times e_3)$, which is Riley, Hobson and Bence's form of the same statement.

**6 and 7. Scalar products, raising and lowering.** A vector has the two expansions $v = v^ie_i = v_ie^i$, and dotting each with $e_i$ or with $e^i$ and using reciprocity gives $v_i = v\cdot e_i$ and $v^i = v\cdot e^i$. Therefore

$$
v_i = (v^je_j)\cdot e_i = g_{ij}v^j , \qquad v^i = (v_je^j)\cdot e^i = g^{ij}v_j ,
$$

which is item 7 for a vector; by item 2 the two operations undo each other. Item 6 is obtained by expanding $v\cdot w$ with each of the four combinations of the two expansions and using $g_{ij}$, $g^{ij}$ or $\delta^i{}_j$ as the case requires. For a tensor of higher type, the same contraction applied in one slot at a time converts that slot, because the transformation law treats the slots independently: for instance $T^i{}_j = g_{jk}T^{ik}$ and $T_{ij} = g_{ik}g_{jl}T^{kl}$. $\square$
:::

:::remark[Where the hypotheses are used, and which convention we follow]{provenance=adapted src="arfken-2013:section 4.3, Example 4.3.1, p. 221; hassani-2013:section 26.5, Definition 26.5.2 and Proposition 26.5.3, pp. 805-806"}
**Nonsingularity is the whole hypothesis.** Only step 2-3 of the proof used anything beyond bilinearity, and what it used was that $\{e_i\}$ is a basis. Where that fails the structure collapses in a way worth seeing: at the origin of plane polar coordinates $e_\phi = \partial x/\partial\phi = 0$, so $g_{\phi\phi}=0$ and $g = 0$; the covariant components of a vector there are $v_\rho = v\cdot e_\rho$ and $v_\phi = 0$ whatever $v$ is, and no amount of raising will recover $v$. This is why the definition removes the singular points from the domain.

**Hassani's version of the same hypothesis.** In the coordinate-free account the metric is *defined* as a nondegenerate symmetric bilinear form $g$, nondegeneracy meaning that the induced map from $V$ to $V^*$ is invertible, equivalently that $\det[g_{ij}] \neq 0$. Lowering an index is applying that map and raising is applying its inverse; Lee calls the two **flat** and **sharp**, writing $v^\flat$ and $\omega^\sharp$, from the musical signs, and notes the useful consequence that the gradient of a function is the sharp of its differential, $(\operatorname{grad} f)^i = g^{ij}\partial_j f$. Our $g_{ij} = e_i\cdot e_j$ is a special case: it is nondegenerate for the reason just given, and positive definite because it comes from the Euclidean dot product.

**Positive definiteness is *not* used in items 1, 2, 3, 6 or 7.** It is used only to read $\sqrt{g}$ as a volume and $\sqrt{(ds)^2}$ as a length. This matters, because the metrics of relativity are not positive definite. Arfken, Weber and Harris give the Minkowski metric of special relativity as $\operatorname{diag}(1,-1,-1,-1)$ in their Example 4.3.1 and point out explicitly that $ds^2$ need not be positive, so that $ds$ may be imaginary. With that signature $\det G = -1 < 0$ and the volume factor must be written $\sqrt{\lvert g\rvert}$; every statement above except items 4 and 5 goes through unchanged. The general manifold setting, and the name *pseudo-Riemannian* for the indefinite case, is :ref[]{to=geom.riemannian-metrics}.

**A convention to state once.** Riley, Hobson and Bence and Arfken, Weber and Harris both build $g_{ij}$ from an embedding in Euclidean $\mathbb{R}^3$ and therefore always have $g > 0$; Hassani and Lee start from an abstract nondegenerate form and allow either sign. We follow the embedded definition in this unit, and flag the indefinite case where it matters rather than silently merging the two. The sign convention $(+,-,-,-)$ used below for Minkowski space is Arfken, Weber and Harris's; the opposite convention $(-,+,+,+)$ is equally common in the relativity literature and changes the sign of every squared interval.
:::

:::method[Computing the metric of a coordinate system]{provenance=original}
Given the coordinates $u^1,\dots,u^n$ through the Cartesian position $x(u)$:

1. Differentiate: form the $n$ covariant basis vectors $e_i = \partial x/\partial u^i$ as explicit Cartesian column vectors. These are the columns of the Jacobian matrix $J$.
2. Take dot products: $g_{ij} = e_i\cdot e_j$, that is $G = J^{\mathsf T}J$. Compute the full matrix, including off-diagonal entries; zeros there mean the system is orthogonal, and only then may scale factors be used instead.
3. Check nonsingularity: compute $g = \det G$ and record where it vanishes. Remove those points from the domain.
4. Invert: $[g^{ij}] = G^{-1}$. For a diagonal $G$ this is just reciprocals of the diagonal entries.
5. Read off the line element $(ds)^2 = g_{ij}du^idu^j$ and the volume element $\sqrt{\lvert g\rvert}\,du^1\cdots du^n$.
6. To lower an index, contract with $g_{ij}$; to raise one, contract with $g^{ij}$. Verify by checking that $v_iv^i = g_{ij}v^iv^j$ agrees with the Euclidean $\lvert v\rvert^2$ at one point.

The differential operators that this makes available in general coordinates are :ref[]{to=geom.tensor-operators-general-coordinates}.
:::

:::example[A non-orthogonal coordinate system: shear coordinates in the plane]{provenance=original}
Take the plane with coordinates $(u^1,u^2) = (u,v)$ defined by

$$
x = u , \qquad y = v + u^2 ,
$$

a shear whose amount grows with $u$. The coordinate curves $v = \text{const}$ are the parabolas $y = x^2 + \text{const}$ and the curves $u = \text{const}$ are vertical lines; they are *not* perpendicular, so this system is outside the reach of :ref[]{to=vcalc.curvilinear-coordinates}. The map is a bijection of the plane onto itself with inverse $u = x$, $v = y - x^2$.

**Step 1: the basis.** $e_1 = \partial x/\partial u = (1, 2u)$ and $e_2 = (0,1)$.

**Step 2: the metric.**

$$
g_{11} = 1 + 4u^2 , \qquad g_{12} = g_{21} = 2u , \qquad g_{22} = 1 ,
\qquad
G = \begin{pmatrix} 1+4u^2 & 2u \\ 2u & 1\end{pmatrix} .
$$

The off-diagonal entry $2u$ is the whole content of the example: it vanishes only on the line $u=0$, where the two coordinate directions happen to be perpendicular.

**Step 3: the determinant.** $g = (1+4u^2)\cdot 1 - (2u)^2 = 1$ everywhere. The shear preserves area, so the area element is $\sqrt g\,du\,dv = du\,dv = dx\,dy$, as it should be.

**Step 4: the inverse.** Since $g=1$,

$$
[g^{ij}] = G^{-1} = \begin{pmatrix} 1 & -2u \\ -2u & 1+4u^2 \end{pmatrix} .
$$

**Step 5: the line element and a length.**

$$
(ds)^2 = (1+4u^2)\,(du)^2 + 4u\,du\,dv + (dv)^2 ,
$$

the middle term being $2g_{12}du\,dv$. Take the coordinate curve $v = 0$ from $u=0$ to $u=1$: along it $dv = 0$, so its length is

$$
L = \int_0^1 \sqrt{g_{11}}\;du = \int_0^1\sqrt{1+4u^2}\;du = \frac{\sqrt5}{2} + \frac{1}{4}\ln\bigl(2+\sqrt5\bigr) = 1.478943\ldots
$$

In Cartesian terms that curve is the parabola $y=x^2$ from $(0,0)$ to $(1,1)$, whose arc length $\int_0^1\sqrt{1+4x^2}\,dx$ is the same integral — the metric has reproduced the Euclidean length from the coordinates alone.

**Step 6: raising an index.** Let $\varphi(x,y) = y - x^2$, which in the new coordinates is simply $\varphi = v$. Its gradient is a covariant vector with components

$$
\omega_i = \frac{\partial\varphi}{\partial u^i} = (0,\,1) .
$$

Raising with $g^{ij}$,

$$
\omega^1 = g^{11}\omega_1 + g^{12}\omega_2 = -2u , \qquad \omega^2 = g^{21}\omega_1 + g^{22}\omega_2 = 1+4u^2 ,
$$

so the covariant components $(0,1)$ and the contravariant components $(-2u,\,1+4u^2)$ of the one gradient look nothing alike — the clearest possible warning against treating the two kinds of index as interchangeable. Their contraction is

$$
\omega_i\omega^i = 0\cdot(-2u) + 1\cdot(1+4u^2) = 1 + 4u^2 .
$$

Checking against Euclidean geometry: $\operatorname{grad}\varphi = (-2x, 1)$ with $\lvert\operatorname{grad}\varphi\rvert^2 = 4x^2+1$, and $x = u$, so the two agree. At the point $u = 3/2$,

$$
\boxed{\;\omega_i\omega^i = 1 + 4\left(\tfrac32\right)^2 = 10\;}
$$

by either route. Had we forgotten the metric and summed $\omega_i\omega_i = 0^2+1^2 = 1$, we would have been out by a factor of ten.
:::

:::application[The interval of special relativity]{provenance=adapted src="arfken-2013:section 4.3, Example 4.3.1, p. 221"}
The metric earns its keep wherever "distance" is not the Euclidean one. In special relativity the coordinates are $(x^0,x^1,x^2,x^3) = (ct,x,y,z)$ and the metric is the constant Minkowski matrix

$$
[\eta_{\mu\nu}] = [\eta^{\mu\nu}] = \operatorname{diag}(1,-1,-1,-1) ,
$$

given in this form by Arfken, Weber and Harris, who remark that it is included precisely to show that $ds^2$ need not be positive. The line element is then the **interval**

$$
(ds)^2 = \eta_{\mu\nu}\,dx^\mu dx^\nu = c^2(dt)^2 - (dx)^2-(dy)^2-(dz)^2 ,
$$

and the entire kinematic content of the theory is that this number is the same in every inertial frame. A coordinate change here is a Lorentz transformation, and the statement that $\eta$ is a type $(0,2)$ tensor with the same components in every inertial frame is the statement that Lorentz transformations are exactly those that preserve the interval.

Three everyday consequences are pure index gymnastics with $\eta$. Raising and lowering flips the sign of the three spatial components and leaves the time component alone, so that the four-momentum with contravariant components $p^\mu = (E/c,\, p^1, p^2, p^3)$ has covariant components $p_\mu = (E/c,\, -p^1,-p^2,-p^3)$; the contraction $p_\mu p^\mu = E^2/c^2 - \lvert p\rvert^2$, where $\lvert p\rvert$ is the ordinary length of the three-momentum, is therefore a scalar, and setting it equal to its value in the rest frame gives $E^2 = \lvert p\rvert^2c^2 + m^2c^4$ with no further work. Since $\det\eta = -1$, the volume factor is $\sqrt{\lvert\eta\rvert} = 1$ and four-dimensional integrals carry no extra weight in inertial coordinates — a simplification that disappears in general relativity, where the metric varies from point to point and $\sqrt{\lvert g\rvert}$ must be carried through every integral. Finally the sign of $(ds)^2$ classifies separations as timelike, null or spacelike, which is the indefiniteness of the metric doing physical work rather than causing trouble.
:::
