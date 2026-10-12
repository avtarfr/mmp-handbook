---
id: vcalc.curvilinear-coordinates
title: Orthogonal curvilinear coordinates
kind: method
level: core
summary: Builds the orthonormal tangent frame and the scale factors of a curvilinear coordinate system, gives the line, area and volume elements they produce, and derives the four general formulas for grad, div, curl and the Laplacian, with a fully worked example in parabolic cylindrical coordinates.
prereqs: [vcalc.divergence-curl, vcalc.gradient, vcalc.vector-identities, found.change-of-variables, found.implicit-inverse-function]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§10.10, pp. 364–369: coordinate surfaces and curves, the tangent vectors $\\mathbf{e}_i = \\partial\\mathbf{r}/\\partial u_i$ and scale factors $h_i$, Eqs. (10.55)–(10.58) for $d\\mathbf{r}$ and $(ds)^2$, the volume element on p. 366, the reciprocal relation $\\nabla u_i = \\hat{\\mathbf{e}}_i/h_i$ on p. 367, and Eqs. (10.60)–(10.62) with Table 10.4 (p. 369) for the four operators"
    pages: "364-369"
    role: definitions, the four operator formulas, and the algebraic proof route through the reciprocal basis
  - work: arfken-2013
    loc: "§3.10, pp. 182–187: orthogonal coordinates in $\\mathbb{R}^3$, the metric coefficients $g_{ij}$ and scale factors, Eqs. (3.128)–(3.133); line, surface and volume integrals, Eqs. (3.134)–(3.137); the gradient Eq. (3.138) and the no-mixed-derivatives note under the Laplacian Eq. (3.142), pp. 185–186; the flux and circulation derivations of Eqs. (3.140)–(3.143); and Exercise 3.10.4(a), p. 197"
    pages: "182-187, 197"
    role: the metric definition of the scale factors, the integral elements, the flux-balance reading of the divergence and curl, and the divergence of a basis vector
  - work: lee-2013
    loc: "Problems 16-11 and 16-13, p. 436 (divergence and the geometric Laplacian of a Riemannian metric in arbitrary smooth local coordinates, with Lee's sign convention $\\Delta u = -\\operatorname{div}(\\operatorname{grad} u)$)"
    pages: "436"
    role: the Riemannian form of the two formulas, and the sign convention attached to it
---

:::definition[Curvilinear coordinates, scale factors, the unit basis]{provenance=adapted src="rhb-2006:§10.10, pp. 364–365; arfken-2013:§3.10, pp. 183–184, Eqs. (3.128)–(3.132)"}
Let $D \subseteq \mathbb{R}^3$ be open and let

$$
\mathbf{r} : D \to \mathbb{R}^3, \qquad (u_1, u_2, u_3) \mapsto \mathbf{r}(u_1,u_2,u_3) = \bigl(x(u_1,u_2,u_3),\, y(\cdots),\, z(\cdots)\bigr)
$$

be of class $C^2$, injective, with a $C^1$ inverse — a **curvilinear coordinate system** on the image $\mathbf{r}(D)$. (Riley, Hobson and Bence ask only for continuity, differentiability and a single-valued inverse; $C^2$ is assumed here because the proof below differentiates twice.) Both of our sources allow the conditions to break down on a few exceptional points and curves, such as the origin or the polar axis; here those sets are simply removed from $D$.

- The **coordinate surfaces** through a point are the three level sets $u_i = \text{const}$; each pair of them meets in a **coordinate curve**, along which only one coordinate varies.
- The **tangent vectors** are $\mathbf{e}_i = \partial\mathbf{r}/\partial u_i$, tangent to the $u_i$-curve in the direction of increasing $u_i$. We assume $\mathbf{e}_i \neq \mathbf{0}$ throughout $D$.
- The **scale factors** are their lengths,
  $$
  h_i = \lvert \mathbf{e}_i \rvert = \left\lvert \frac{\partial\mathbf{r}}{\partial u_i} \right\rvert
  = \left[ \left(\frac{\partial x}{\partial u_i}\right)^{2} + \left(\frac{\partial y}{\partial u_i}\right)^{2} + \left(\frac{\partial z}{\partial u_i}\right)^{2} \right]^{1/2} > 0 ,
  $$
  and the **unit basis** is $\hat{\mathbf{e}}_i = \mathbf{e}_i / h_i$. A coordinate $u_i$ need not be a length; $h_i$ carries whatever dimension makes $h_i\,du_i$ one.
- The system is **orthogonal** when $\mathbf{e}_i \cdot \mathbf{e}_j = 0$ for $i \neq j$ at every point of $D$, so that $\hat{\mathbf{e}}_1, \hat{\mathbf{e}}_2, \hat{\mathbf{e}}_3$ is an orthonormal basis at each point. Equivalently, in Arfken's notation the **metric coefficients** $g_{ij} = \mathbf{e}_i \cdot \mathbf{e}_j$ form a diagonal matrix, $g_{ij} = h_i^2\,\delta_{ij}$. Throughout this unit the labelling is also chosen so that the frame is **right-handed**, $\hat{\mathbf{e}}_1 \times \hat{\mathbf{e}}_2 = \hat{\mathbf{e}}_3$.

A vector field is written in the unit basis as $\mathbf{a} = a_1\hat{\mathbf{e}}_1 + a_2\hat{\mathbf{e}}_2 + a_3\hat{\mathbf{e}}_3$; the $a_i$ are its **physical components**, and they carry the dimensions of $\mathbf{a}$ itself. The frame rotates from point to point, so the $\hat{\mathbf{e}}_i$ must be differentiated along with the $a_i$ whenever an operator is applied to $\mathbf{a}$.
:::

:::statement[Line, area and volume elements]{provenance=adapted src="rhb-2006:§10.10, Eqs. (10.55)–(10.58), pp. 365–366; arfken-2013:§3.10, Eqs. (3.133)–(3.137), pp. 184–185"}
Let $u_1,u_2,u_3$ be an orthogonal curvilinear system on $D$ as above. Then, at every point of $D$:

1. **Displacement.** $\displaystyle d\mathbf{r} = \sum_{i=1}^{3} \frac{\partial\mathbf{r}}{\partial u_i}\,du_i = h_1\,du_1\,\hat{\mathbf{e}}_1 + h_2\,du_2\,\hat{\mathbf{e}}_2 + h_3\,du_3\,\hat{\mathbf{e}}_3 .$
2. **Arc length.** Since the $\hat{\mathbf{e}}_i$ are orthonormal,
   $$
   (ds)^2 = d\mathbf{r}\cdot d\mathbf{r} = h_1^2\,(du_1)^2 + h_2^2\,(du_2)^2 + h_3^2\,(du_3)^2 ,
   $$
   with no cross terms; a line integral of $\mathbf{a}$ along a curve is $\int \mathbf{a}\cdot d\mathbf{r} = \sum_i \int a_i\,h_i\,du_i$.
3. **Area.** On a coordinate surface $u_1 = \text{const}$, the patch spanned by $du_2$ and $du_3$ has area $h_2h_3\,du_2\,du_3$ and unit normal $\pm\hat{\mathbf{e}}_1$, so the flux of $\mathbf{a}$ through it is $a_1\,h_2h_3\,du_2\,du_3$; the two other faces are obtained by cycling $1\to2\to3\to1$.
4. **Volume.** The infinitesimal box spanned by $h_i\,du_i\,\hat{\mathbf{e}}_i$ has volume
   $$
   dV = \bigl\lvert h_1\,du_1\,\hat{\mathbf{e}}_1 \cdot (h_2\,du_2\,\hat{\mathbf{e}}_2 \times h_3\,du_3\,\hat{\mathbf{e}}_3) \bigr\rvert = h_1h_2h_3\,du_1\,du_2\,du_3 .
   $$
   The scalar triple product on the left is the determinant whose columns are the $\mathbf{e}_i$, so this says that the Jacobian factor of the map $\mathbf{r}$ is $\lvert\det D\mathbf{r}\rvert = h_1h_2h_3$ (:ref[change of variables]{to=found.change-of-variables}) — orthogonality is what lets the determinant be read off from the three lengths alone.
:::

:::statement[The four operators in orthogonal curvilinear coordinates]{provenance=adapted src="rhb-2006:§10.10, Eqs. (10.60)–(10.62) and Table 10.4, pp. 367–369; arfken-2013:§3.10, Eqs. (3.138)–(3.143), pp. 185–187"}
With the hypotheses of the definition, let $\Phi$ be a $C^1$ scalar field (a $C^2$ one for the Laplacian) and $\mathbf{a} = a_1\hat{\mathbf{e}}_1 + a_2\hat{\mathbf{e}}_2 + a_3\hat{\mathbf{e}}_3$ a $C^1$ vector field on $\mathbf{r}(D)$. Writing $H = h_1h_2h_3$:

$$
\nabla\Phi = \frac{1}{h_1}\frac{\partial\Phi}{\partial u_1}\,\hat{\mathbf{e}}_1 + \frac{1}{h_2}\frac{\partial\Phi}{\partial u_2}\,\hat{\mathbf{e}}_2 + \frac{1}{h_3}\frac{\partial\Phi}{\partial u_3}\,\hat{\mathbf{e}}_3 ,
$$

$$
\nabla\cdot\mathbf{a} = \frac{1}{H}\left[ \frac{\partial}{\partial u_1}\bigl(h_2h_3\,a_1\bigr) + \frac{\partial}{\partial u_2}\bigl(h_3h_1\,a_2\bigr) + \frac{\partial}{\partial u_3}\bigl(h_1h_2\,a_3\bigr) \right] ,
$$

$$
\nabla\times\mathbf{a} = \frac{1}{H}
\begin{vmatrix}
h_1\hat{\mathbf{e}}_1 & h_2\hat{\mathbf{e}}_2 & h_3\hat{\mathbf{e}}_3 \\[2pt]
\dfrac{\partial}{\partial u_1} & \dfrac{\partial}{\partial u_2} & \dfrac{\partial}{\partial u_3} \\[6pt]
h_1a_1 & h_2a_2 & h_3a_3
\end{vmatrix} ,
$$

$$
\nabla^2\Phi = \frac{1}{H}\left[ \frac{\partial}{\partial u_1}\!\left( \frac{h_2h_3}{h_1}\frac{\partial\Phi}{\partial u_1} \right) + \frac{\partial}{\partial u_2}\!\left( \frac{h_3h_1}{h_2}\frac{\partial\Phi}{\partial u_2} \right) + \frac{\partial}{\partial u_3}\!\left( \frac{h_1h_2}{h_3}\frac{\partial\Phi}{\partial u_3} \right) \right] .
$$

The determinant is expanded along its first row, the entries of the middle row acting as operators on the entries of the last; explicitly its $\hat{\mathbf{e}}_1$ component is $\frac{1}{h_2h_3}\bigl[\partial_{u_2}(h_3a_3) - \partial_{u_3}(h_2a_2)\bigr]$, and the other two follow by cycling. Setting all $h_i = 1$ recovers the Cartesian formulas of :ref[]{to=vcalc.divergence-curl}.
:::

:::idea{provenance=adapted src="rhb-2006:§10.10, pp. 367–369"}
Only the gradient has to be computed from scratch, and it comes straight from comparing two expressions for the same differential $d\Phi$: the chain rule gives it in terms of $\partial\Phi/\partial u_i$, and the definition of the gradient gives it as $\nabla\Phi\cdot d\mathbf{r}$, where $d\mathbf{r}$ carries the scale factors. Applying that one formula to $\Phi = u_i$ yields the key relation $\nabla u_i = \hat{\mathbf{e}}_i/h_i$, which turns each basis vector into a gradient: $\hat{\mathbf{e}}_1 = h_1\nabla u_1$ and also $\hat{\mathbf{e}}_1 = \hat{\mathbf{e}}_2\times\hat{\mathbf{e}}_3 = h_2h_3\,\nabla u_2\times\nabla u_3$. The divergence and the curl then follow from the two vanishing identities $\nabla\cdot(\nabla\phi\times\nabla\psi) = 0$ and $\nabla\times\nabla\phi = \mathbf{0}$: each kills the awkward term of a product rule and leaves a single gradient, which the first formula evaluates. The Laplacian is the divergence formula fed with the gradient formula.
:::

:::proof{provenance=adapted src="rhb-2006:§10.10, pp. 367–369; arfken-2013:§3.10, Eqs. (3.138) and (3.142), pp. 185–186"}
Throughout, the frame is orthonormal and right-handed, so $\hat{\mathbf{e}}_1 = \hat{\mathbf{e}}_2\times\hat{\mathbf{e}}_3$, $\hat{\mathbf{e}}_2 = \hat{\mathbf{e}}_3\times\hat{\mathbf{e}}_1$, $\hat{\mathbf{e}}_3 = \hat{\mathbf{e}}_1\times\hat{\mathbf{e}}_2$, and the component of any vector along $\hat{\mathbf{e}}_i$ is its dot product with $\hat{\mathbf{e}}_i$.

**1. The gradient.** Fix a point and let the coordinates change by $du_1,du_2,du_3$. The chain rule for a $C^1$ function of three variables gives $d\Phi = \sum_i (\partial\Phi/\partial u_i)\,du_i$. On the other hand $\Phi$ is a field on $\mathbf{r}(D)$, so by the defining property of the :ref[gradient]{to=vcalc.gradient}, $d\Phi = \nabla\Phi\cdot d\mathbf{r}$. Expand both factors in the unit basis: writing $\nabla\Phi = \sum_i g_i\hat{\mathbf{e}}_i$ and using $d\mathbf{r} = \sum_i h_i\,du_i\,\hat{\mathbf{e}}_i$ from the element statement, orthonormality kills every cross term and leaves $\nabla\Phi\cdot d\mathbf{r} = \sum_i g_i h_i\,du_i$. The three increments $du_i$ are independent, so the coefficients must agree one by one: $g_i h_i = \partial\Phi/\partial u_i$. Since $h_i > 0$ we may divide, which is the gradient formula.

**2. The reciprocal relation.** First, the coordinate functions are twice differentiable as functions of position. The columns of $D\mathbf{r}$ are the three tangent vectors $\mathbf{e}_i$, which are mutually orthogonal and have lengths $h_i > 0$, hence linearly independent; so $\lvert\det D\mathbf{r}\rvert = h_1h_2h_3 \neq 0$ at every point of $D$. Since $\mathbf{r}$ is $C^2$ with nowhere-vanishing Jacobian determinant, the inverse function theorem (:ref[]{to=found.implicit-inverse-function}) makes it a local $C^2$ diffeomorphism; as it is also injective, $\mathbf{r}(D)$ is open and $\mathbf{r}^{-1}$ is $C^2$ on it. In particular each coordinate function $u_j$ is a $C^2$ function of $(x,y,z)$ — a stronger conclusion than the $C^1$ inverse assumed in the definition, and one we need in steps 3 and 5.

Now apply step 1 to $\Phi = u_j$. Its partial derivatives are $\partial u_j/\partial u_i = \delta_{ij}$, so only one term survives:
$$
\nabla u_j = \frac{1}{h_j}\,\hat{\mathbf{e}}_j .
$$
Thus $\hat{\mathbf{e}}_j = h_j \nabla u_j$: in an orthogonal system the frame tangent to the coordinate curves and the frame normal to the coordinate surfaces coincide.

**3. The divergence.** Treat $\mathbf{a} = \sum_i a_i\hat{\mathbf{e}}_i$ one term at a time; the divergence is linear. For the first term, use right-handedness and then step 2 twice:
$$
a_1\hat{\mathbf{e}}_1 = a_1\,(\hat{\mathbf{e}}_2\times\hat{\mathbf{e}}_3) = a_1\,(h_2\nabla u_2)\times(h_3\nabla u_3) = \bigl(a_1h_2h_3\bigr)\,\bigl(\nabla u_2\times\nabla u_3\bigr).
$$
Apply the product rule $\nabla\cdot(f\mathbf{B}) = \nabla f\cdot\mathbf{B} + f\,\nabla\cdot\mathbf{B}$ with $f = a_1h_2h_3$ and $\mathbf{B} = \nabla u_2\times\nabla u_3$. The second term vanishes, because $\nabla\cdot(\nabla\phi\times\nabla\psi) = 0$ for any two $C^2$ scalars (:ref[]{to=vcalc.vector-identities}); this is where $\mathbf{r}$ being $C^2$ is used, since by step 2 it is what makes $u_2$ and $u_3$ twice differentiable functions of position. Hence, using step 2 once more to rewrite $\mathbf{B} = \hat{\mathbf{e}}_2\times\hat{\mathbf{e}}_3/(h_2h_3) = \hat{\mathbf{e}}_1/(h_2h_3)$,
$$
\nabla\cdot(a_1\hat{\mathbf{e}}_1) = \nabla\bigl(a_1h_2h_3\bigr)\cdot\frac{\hat{\mathbf{e}}_1}{h_2h_3} .
$$
The dot product with $\hat{\mathbf{e}}_1$ picks out the first component of the gradient, which step 1 gives as $(1/h_1)\partial_{u_1}(a_1h_2h_3)$. So $\nabla\cdot(a_1\hat{\mathbf{e}}_1) = H^{-1}\partial_{u_1}(h_2h_3a_1)$. Cycling the labels $1\to2\to3\to1$ — which preserves right-handedness — gives the other two terms, and adding them gives the divergence formula.

**4. The Laplacian.** By definition $\nabla^2\Phi = \nabla\cdot(\nabla\Phi)$. Step 1 says that the physical components of $\nabla\Phi$ are $a_i = (1/h_i)\,\partial\Phi/\partial u_i$, which are $C^1$ when $\Phi$ is $C^2$. Substituting them into step 3 gives the stated formula at once. Note that no mixed derivative $\partial^2/\partial u_i\partial u_j$ with $i \neq j$ can appear: orthogonality is exactly what removes them.

**5. The curl.** Again work one term at a time, now using $\hat{\mathbf{e}}_1 = h_1\nabla u_1$ from step 2, so that $a_1\hat{\mathbf{e}}_1 = (a_1h_1)\nabla u_1$. The product rule $\nabla\times(f\mathbf{B}) = \nabla f\times\mathbf{B} + f\,\nabla\times\mathbf{B}$ with $f = a_1h_1$ and $\mathbf{B} = \nabla u_1$ loses its second term because $\nabla\times\nabla\phi = \mathbf{0}$ for a $C^2$ scalar (:ref[]{to=vcalc.vector-identities}), leaving
$$
\nabla\times(a_1\hat{\mathbf{e}}_1) = \nabla\bigl(a_1h_1\bigr)\times\frac{\hat{\mathbf{e}}_1}{h_1} .
$$
Expand the gradient by step 1. Its $\hat{\mathbf{e}}_1$ part crosses with $\hat{\mathbf{e}}_1$ to zero, and the other two use $\hat{\mathbf{e}}_2\times\hat{\mathbf{e}}_1 = -\hat{\mathbf{e}}_3$ and $\hat{\mathbf{e}}_3\times\hat{\mathbf{e}}_1 = \hat{\mathbf{e}}_2$:
$$
\nabla\times(a_1\hat{\mathbf{e}}_1) = \frac{1}{h_3h_1}\frac{\partial (h_1a_1)}{\partial u_3}\,\hat{\mathbf{e}}_2 \;-\; \frac{1}{h_1h_2}\frac{\partial (h_1a_1)}{\partial u_2}\,\hat{\mathbf{e}}_3 .
$$
Cycling gives the contributions of $a_2\hat{\mathbf{e}}_2$ and $a_3\hat{\mathbf{e}}_3$. Collect the three results: the terms along $\hat{\mathbf{e}}_1$ come from $a_3$ and $a_2$ and add up to
$$
\frac{1}{h_2h_3}\left[ \frac{\partial (h_3a_3)}{\partial u_2} - \frac{\partial (h_2a_2)}{\partial u_3} \right] ,
$$
and cyclically for the other two. Multiplying and dividing by $h_1$ makes this $H^{-1}h_1\bigl[\partial_{u_2}(h_3a_3) - \partial_{u_3}(h_2a_2)\bigr]$, which is precisely the cofactor of $h_1\hat{\mathbf{e}}_1$ in the stated determinant; the same holds for the other two entries, so the determinant is a compact way of writing the three components at once. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Orthogonality* enters three times: in step 1, to make $\nabla\Phi\cdot d\mathbf{r}$ separate into three independent terms; in step 3, through $\hat{\mathbf{e}}_1 = \hat{\mathbf{e}}_2\times\hat{\mathbf{e}}_3$, which needs the frame to be orthonormal **and** right-handed, not merely orthogonal; and in the volume element, to make the determinant equal $h_1h_2h_3$. Drop orthogonality and none of the four formulas survives: a non-orthogonal system has $g_{ij} \neq 0$ off the diagonal, the Laplacian acquires mixed derivatives $g^{ij}\partial_i\partial_j$, and the right language is tensor analysis with raised and lowered indices.
- *$h_i > 0$,* that is $\partial\mathbf{r}/\partial u_i \neq \mathbf{0}$, is needed to divide by $h_i$, to define $\hat{\mathbf{e}}_i$ at all, and (in step 2) to keep $\det D\mathbf{r}$ away from zero. It is exactly the condition that fails on the excluded sets: at $r = 0$ in spherical polars $h_\theta = r$ vanishes, and on the polar axis $h_\varphi = r\sin\theta$ vanishes. Equivalently $H = h_1h_2h_3$ is the Jacobian factor, and the coordinates degenerate where it vanishes.
- *Right-handed labelling* is a convenience in the proof but a real hypothesis only for the curl. Step 3 writes $\hat{\mathbf{e}}_1 = \hat{\mathbf{e}}_2\times\hat{\mathbf{e}}_3$, which is false in a left-handed frame; but there the minus sign appears twice — once in $a_1\hat{\mathbf{e}}_1 = -(a_1h_2h_3)\,\nabla u_2\times\nabla u_3$ and once in $\mathbf{B} = \nabla u_2\times\nabla u_3 = -\hat{\mathbf{e}}_1/(h_2h_3)$ — and the two cancel in $\nabla f\cdot\mathbf{B}$. So the gradient, divergence and Laplacian formulas hold whatever the handedness. The curl does not: swapping two coordinates, say $u_1 \leftrightarrow u_2$, reverses the sign of the determinant and hence of $\nabla\times\mathbf{a}$. Spherical polars $(r,\theta,\varphi)$ and cylindrical polars $(\rho,\varphi,z)$ are both listed in right-handed order.
- *The frame is not constant.* Because $\hat{\mathbf{e}}_i$ varies, $\nabla\cdot\hat{\mathbf{e}}_1$ and $\nabla\times\hat{\mathbf{e}}_1$ need not vanish even though $\hat{\mathbf{e}}_1$ has constant length. For the same reason the vector Laplacian is **not** obtained by applying $\nabla^2$ to each physical component separately; see :ref[]{to=vcalc.cylindrical-spherical}.
:::

:::remark[How to read the formulas]{provenance=adapted src="rhb-2006:§10.10, closing paragraph, p. 369; arfken-2013:§3.10, Eq. (3.140), p. 186, and Exercise 3.10.4(a), p. 197"}
- *The non-orthogonal case.* Riley, Hobson and Bence close §10.10 by pointing the reader to the general tensor treatment, which is where a system with $g_{ij} \neq 0$ off the diagonal has to be handled.
- *What the divergence formula means.* The combination $h_2h_3\,a_1$ is the flux of $\mathbf{a}$ per unit $du_2\,du_3$ through a face $u_1 = \text{const}$, and $H\,du_1du_2du_3$ is the volume of the cell. So the formula is the net outflow per unit volume, computed face by face, and that is how Arfken derives it: the two opposite faces of a cell contribute $\pm h_2h_3a_1$ evaluated at $u_1 \pm \tfrac12 du_1$, and it is essential that $h_2h_3$ as well as $a_1$ be evaluated on each face, since the two faces have different areas. The curl formula reads the same way with circulations around the faces instead of fluxes through them.
- *A worked consequence.* Putting $a_1 = 1$, $a_2 = a_3 = 0$ in the divergence formula gives $\nabla\cdot\hat{\mathbf{e}}_1 = H^{-1}\partial_{u_1}(h_2h_3)$, which is Arfken's Exercise 3.10.4(a) and quantifies the previous remark's point that the frame is not constant.
:::

:::note{provenance=adapted src="lee-2013:Problems 16-11 and 16-13, p. 436"}
**The same formulas in Riemannian language.** For a Riemannian metric $g$ in arbitrary smooth local coordinates $x^i$, Lee's Problem 16-11 states the divergence of a vector field with contravariant components $X^i$ as
$$
\operatorname{div} X = \frac{1}{\sqrt{\det g}}\,\frac{\partial}{\partial x^i}\Bigl( X^i \sqrt{\det g} \Bigr) ,
$$
and his Problem 16-13 states the Laplacian as $\Delta u = -\frac{1}{\sqrt{\det g}}\partial_i\bigl( g^{ij}\sqrt{\det g}\,\partial_j u \bigr)$. The minus sign is Lee's convention: he defines the **geometric Laplacian** as $\Delta u = -\operatorname{div}(\operatorname{grad} u)$, the negative of the operator $\nabla^2$ used here and throughout this handbook, so that its eigenvalues are non-negative; he warns explicitly that conventions differ between authors. Up to that sign the two statements contain ours. For an orthogonal system, $g_{ij} = h_i^2\delta_{ij}$ gives $\sqrt{\det g} = h_1h_2h_3 = H$ and $g^{ij} = h_i^{-2}\delta_{ij}$, while a physical component $a_i$ is related to the contravariant one by $X^i = a_i/h_i$ (the basis $\mathbf{e}_i$ has length $h_i$). Substituting turns Lee's two formulas into the divergence and Laplacian stated above.
:::

:::method[Setting up a new orthogonal coordinate system]{provenance=original}
Given a candidate map $\mathbf{r}(u_1,u_2,u_3)$:

1. **Differentiate.** Compute the three tangent vectors $\mathbf{e}_i = \partial\mathbf{r}/\partial u_i$ in Cartesian components. Everything else is algebra on these.
2. **Test orthogonality** by checking $\mathbf{e}_1\cdot\mathbf{e}_2 = \mathbf{e}_2\cdot\mathbf{e}_3 = \mathbf{e}_3\cdot\mathbf{e}_1 = 0$ identically. If any product is non-zero the formulas of this unit do not apply.
3. **Read off the scale factors** $h_i = \lvert\mathbf{e}_i\rvert$ and record where they vanish; delete those sets from $D$ and state the surviving domain, together with the ranges of the $u_i$ on which $\mathbf{r}$ is injective.
4. **Fix the orientation.** Check $\hat{\mathbf{e}}_1\times\hat{\mathbf{e}}_2 = +\hat{\mathbf{e}}_3$; if it comes out $-\hat{\mathbf{e}}_3$, swap two of the coordinates before using the curl.
5. **Write down the elements**: $(ds)^2$, the three face areas $h_2h_3\,du_2du_3$ and its cyclic partners, and $dV = H\,du_1du_2du_3$. These are what integrals need.
6. **Substitute into the four formulas.** Simplify $H$, $h_2h_3/h_1$ and its cyclic partners first; in most useful systems these collapse, which is what makes the Laplacian tractable.
7. **Check against a known field.** Take a simple Cartesian field, express its physical components in the new frame, apply the formulas, and compare with the Cartesian answer. Two or three such tests catch almost every algebraic slip.

**How it fails.** Step 2 is the one that is skipped and should not be: elliptic, parabolic and bipolar systems are orthogonal, but many natural-looking maps (a sheared or a body-fitted grid) are not, and applying these formulas to them is simply wrong. Step 3 is the second: a formula that is correct on $D$ says nothing on the degenerate set, and a field that looks singular on the axis in these coordinates may be perfectly smooth there.
:::

:::example[Parabolic cylindrical coordinates]{provenance=original}
Define, for $u > 0$ and $v > 0$ and all real $z$,

$$
x = \tfrac12\bigl(u^2 - v^2\bigr), \qquad y = uv, \qquad z = z .
$$

1. *Geometry and injectivity.* In complex notation $x + iy = \tfrac12 (u + iv)^2$, so the map is the squaring map $w \mapsto w^2/2$ applied to the open first quadrant of the $w$-plane, whose image is the open upper half plane $y > 0$; squaring is injective there because it doubles arguments lying in $(0,\pi/2)$. The surfaces $u = \text{const}$ and $v = \text{const}$ are confocal parabolic cylinders with the $z$-axis as common focal line, opening in the $-x$ and $+x$ directions.
2. *Tangent vectors.* $\mathbf{e}_u = (u, v, 0)$, $\mathbf{e}_v = (-v, u, 0)$, $\mathbf{e}_z = (0,0,1)$.
3. *Orthogonality.* $\mathbf{e}_u\cdot\mathbf{e}_v = -uv + vu = 0$, and both are perpendicular to $\mathbf{e}_z$ since their third components vanish. The system is orthogonal.
4. *Scale factors.* $h_u = h_v = \sqrt{u^2+v^2}$ and $h_z = 1$, so $H = u^2 + v^2 > 0$ on the whole domain. The two transverse scale factors are equal — the map is conformal in the $xy$-plane, as the complex form predicts, with $\lvert dw^2/2 \,/\, dw\rvert = \lvert w\rvert = \sqrt{u^2+v^2}$.
5. *Orientation.* $\hat{\mathbf{e}}_u \times \hat{\mathbf{e}}_v = (u,v,0)\times(-v,u,0)/(u^2+v^2) = (0,0,u^2+v^2)/(u^2+v^2) = \hat{\mathbf{e}}_z$, so $(u,v,z)$ is already right-handed.
6. *Elements.* $(ds)^2 = (u^2+v^2)\bigl[(du)^2 + (dv)^2\bigr] + (dz)^2$ and $dV = (u^2+v^2)\,du\,dv\,dz$.
7. *The Laplacian.* Here $h_vh_z/h_u = 1$, $h_zh_u/h_v = 1$ and $h_uh_v/h_z = u^2+v^2$, so the general formula collapses to
   $$
   \nabla^2\Phi = \frac{1}{u^2+v^2}\left( \frac{\partial^2\Phi}{\partial u^2} + \frac{\partial^2\Phi}{\partial v^2} \right) + \frac{\partial^2\Phi}{\partial z^2} .
   $$
8. *First check (step 7 of the method).* Take $\Phi = x^2 + y^2$, for which $\nabla^2\Phi = 4$ in Cartesian coordinates. In the new variables $x^2 + y^2 = \tfrac14(u^2-v^2)^2 + u^2v^2 = \tfrac14(u^2+v^2)^2$. Then $\Phi_{uu} = 3u^2 + v^2$ and $\Phi_{vv} = u^2 + 3v^2$, whose sum is $4(u^2+v^2)$; dividing by $u^2+v^2$ gives $\nabla^2\Phi = 4$, as required.
9. *Second check: a vector field.* Take the rigid-rotation field $\mathbf{F} = -y\,\mathbf{i} + x\,\mathbf{j}$, for which $\nabla\cdot\mathbf{F} = 0$ and $\nabla\times\mathbf{F} = 2\mathbf{k}$. Its physical components are
   $$
   F_u = \mathbf{F}\cdot\hat{\mathbf{e}}_u = \frac{-uv\cdot u + \tfrac12(u^2-v^2)\cdot v}{\sqrt{u^2+v^2}} = -\tfrac12 v\sqrt{u^2+v^2}, \qquad
   F_v = \tfrac12 u\sqrt{u^2+v^2}, \qquad F_z = 0 ,
   $$
   so that $h_uF_u = -\tfrac12 v(u^2+v^2)$ and $h_vF_v = \tfrac12 u(u^2+v^2)$. The divergence formula gives
   $$
   \nabla\cdot\mathbf{F} = \frac{1}{u^2+v^2}\Bigl[ \partial_u\bigl(-\tfrac12 v(u^2+v^2)\bigr) + \partial_v\bigl(\tfrac12 u(u^2+v^2)\bigr) \Bigr] = \frac{-uv + uv}{u^2+v^2} = 0 .
   $$
   For the curl, the $\hat{\mathbf{e}}_u$ and $\hat{\mathbf{e}}_v$ components vanish because $F_z = 0$ and nothing depends on $z$, while the $\hat{\mathbf{e}}_z$ component is
   $$
   \frac{1}{h_uh_v}\Bigl[ \partial_u(h_vF_v) - \partial_v(h_uF_u) \Bigr] = \frac{1}{u^2+v^2}\left[ \frac{3u^2+v^2}{2} + \frac{u^2+3v^2}{2} \right] = \frac{2(u^2+v^2)}{u^2+v^2} = 2 .
   $$
   So $\nabla\times\mathbf{F} = 2\hat{\mathbf{e}}_z = 2\mathbf{k}$, matching the Cartesian value. Both checks are independent of the coordinate algebra that produced them, which is the point of step 7.
:::

:::application{provenance=original}
**Separation of variables.** The reason for cataloguing these systems is that the Laplacian above separates in a handful of them, and each separation names a family of special functions. The example's parabolic cylinder coordinates are the case behind diffraction at a straight edge. The edge lies along the $z$-axis, the problem is two-dimensional, so put $\Phi = U(u)V(v)$ with no $z$-dependence in the Helmholtz equation $\nabla^2\Phi + k^2\Phi = 0$. The collapsed Laplacian of the example gives $(u^2+v^2)^{-1}(U''V + UV'') + k^2UV = 0$; multiply by $(u^2+v^2)/(UV)$ and the equation becomes
$$
\frac{U''}{U} + k^2u^2 \;+\; \frac{V''}{V} + k^2v^2 \;=\; 0 .
$$
What makes this separate is that $H = u^2+v^2$ is a **sum** of a function of $u$ and a function of $v$: once it has been cleared from the denominator, the $u$'s and the $v$'s sit in different terms. Setting the first group equal to a constant $\lambda$ and the second to $-\lambda$,
$$
U'' + \bigl(k^2u^2 - \lambda\bigr)U = 0, \qquad V'' + \bigl(k^2v^2 + \lambda\bigr)V = 0 ,
$$
two parabolic cylinder equations: the substitution $s = \sqrt{2k}\,e^{i\pi/4}u$ sends the first to Weber's standard form $d^2U/ds^2 + (\nu + \tfrac12 - \tfrac14 s^2)U = 0$ with $\nu + \tfrac12 = i\lambda/(2k)$.

The straight-edge field is the elementary member of this family, $\lambda = ik$. Then $U = e^{iku^2/2}$ solves the first equation (indeed $U'' = (ik - k^2u^2)U$), and writing $V = e^{-ikv^2/2}f(v)$ reduces the second to $f'' = 2ikv f'$, so that $f(v) = \int_0^v e^{ik\tau^2}\,d\tau$ — a **Fresnel integral**. Since $u^2 - v^2 = 2x$, the product is
$$
\Phi = e^{ikx}\int_0^{v} e^{ik\tau^2}\,d\tau ,
$$
a plane wave modulated by a Fresnel integral of the single parabolic coordinate $v$, and it vanishes on $v = 0$, which is exactly the half-plane $y = 0$, $x > 0$. The modulus of that integral, traced across the geometric shadow boundary, is the fringe pattern at a straight edge. (If instead a propagating factor $e^{ik_zz}$ is kept, the same algebra goes through with $k^2$ replaced by the transverse wavenumber $k_\perp^2 = k^2 - k_z^2$; the separation is only useful when $k_\perp \neq 0$, since at $k_\perp = 0$ the quadratic terms disappear and $U$ and $V$ are mere exponentials.) Cylindrical and spherical polars give Bessel functions and spherical harmonics in the same way (:ref[]{to=vcalc.cylindrical-spherical}); prolate spheroidal coordinates give the functions used for a dipole antenna, and toroidal coordinates those used for the field of a current ring.

**Conservative discretisation.** In computational fluid dynamics and plasma simulation the grid is usually curvilinear, following the geometry of a nozzle, a blade passage or a tokamak flux surface. Finite-volume schemes discretise the divergence in exactly the form derived here: the flux through a face is $h_2h_3\,a_1$ times the face's coordinate extent, and the cell volume is $H\,\Delta u_1\Delta u_2\Delta u_3$. Summing over neighbouring cells then telescopes exactly, because each interior face is counted once with each sign, so the discrete scheme conserves mass and momentum to machine precision — a property that is lost if the operator is expanded out into partial derivatives of the components first.

**Reading a field on the axis.** The remark's warning about the degenerate set is a practical one. Spacecraft and tokamak diagnostics report vector data in the natural curvilinear frame, where the components of a perfectly smooth field blow up or become undefined where a scale factor vanishes. Interpolating such data near the axis without first transforming back to a frame that is continuous there is a standard source of spurious signals.
:::
