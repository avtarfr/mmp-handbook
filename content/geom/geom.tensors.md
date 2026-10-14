---
id: geom.tensors
title: Tensors and their transformation laws
kind: definition
level: core
summary: Defines contravariant and covariant components through the two bases of a general coordinate system, gives the transformation law of a tensor of type (r,s), builds new tensors by tensor product and contraction, and proves the quotient rule that recognises a tensor from the way it acts on arbitrary vectors.
prereqs: [linalg.linear-maps-matrices, linalg.vector-spaces-bases, vcalc.vector-algebra, vcalc.curvilinear-coordinates, found.partial-derivatives-chain-rule, found.implicit-inverse-function]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "Ch. 26, sections 26.14-26.16, pp. 955-963: the two bases and the reciprocity relation (26.53)-(26.54); the superscript/subscript summation convention; general coordinate transformations and the laws (26.67)-(26.70) for basis vectors and vector components; the laws for second-order tensors and the general law (26.71); the Kronecker delta as a mixed tensor; the worked check that the metric coefficients are tensor components"
    pages: "955-963"
    role: the general-coordinate set-up, the two bases, and the transformation laws
  - work: arfken-2013
    loc: "Ch. 4, section 4.1, pp. 205-213: rank and the two transformation rules Eqs. (4.4)-(4.5); rank-2 laws Eq. (4.6); symmetry and the symmetric/antisymmetric split Eq. (4.13); the Kronecker delta as an isotropic mixed tensor Eqs. (4.14)-(4.15); contraction Eq. (4.16); the direct product and Example 4.1.1; the inverse transformation Eqs. (4.18)-(4.19); the quotient rule, Eqs. (4.20)-(4.24) and the caution on p. 213. Also section 4.3, pp. 218-221, for the covariant basis Eq. (4.37) and the contravariant basis Eq. (4.44)"
    pages: "205-213, 218-221"
    role: the d-dimensional definition of rank, contraction, the direct product, and the statement and proof route of the quotient rule
  - work: hassani-2013
    loc: "Ch. 26, section 26.1, pp. 784-788: Definition 26.1.4 of a tensor of type (r,s) as a multilinear map, Definition 26.1.5 of the tensor product, Theorem 26.1.6 on the induced basis and components, the component transformation law (26.7), and Definition 26.1.9 of contraction"
    pages: "784-788"
    role: the coordinate-free definition, and contraction as a basis-independent operation
---

:::definition[General coordinates and the two bases]{provenance=adapted src="rhb-2006:section 26.14, pp. 955-956; arfken-2013:section 4.3, Eqs. (4.37) and (4.44), pp. 218-220"}
Let $D \subseteq \mathbb{R}^n$ be open and let

$$
x : D \to \mathbb{R}^n , \qquad (u^1, \dots, u^n) \mapsto x(u^1,\dots,u^n)
$$

be an injective $C^2$ map whose Jacobian matrix is nonsingular at every point: a **general coordinate system** on the image. Nothing here requires the coordinate curves to meet at right angles. Coordinate labels are written as **superscripts**, $u^i$, because they will turn out to transform contravariantly.

At each point there are two natural bases of $\mathbb{R}^n$:

- the **covariant basis** $e_i = \dfrac{\partial x}{\partial u^i}$, the displacement per unit increase of $u^i$ with the other coordinates held fixed, tangent to the $u^i$-coordinate curve;
- the **contravariant basis** $e^i = \operatorname{grad} u^i$, normal to the surface $u^i = \text{const}$.

They are bases because the Jacobian is nonsingular, and by the inverse function theorem (:ref[]{to=found.implicit-inverse-function}) each $u^i$ is a $C^2$ function of position, so $e^i$ is defined. The chain rule applied to $u^i\bigl(x(u)\bigr) = u^i$ gives the **reciprocity relation**

$$
e^i \cdot e_j = \delta^i_{\;j} = \begin{cases} 1, & i = j,\\ 0, & i \neq j.\end{cases}
$$

Neither basis need consist of unit vectors, and the two coincide only when the coordinates are Cartesian. For an *orthogonal* system they differ only by scale factors, $e^i = \hat e_i / h_i$ and $e_i = h_i \hat e_i$ (:ref[]{to=vcalc.curvilinear-coordinates}).

**Summation convention.** From here on, an index that occurs twice in a term, once below and once above, is summed from $1$ to $n$. A repeated pair in the same position is not summed; such an expression is a warning that something has gone wrong. In the derivative $\partial u^i / \partial \bar{u}^{\,j}$ the upper index in the denominator counts as a lower index, which makes the balance of indices in every formula below checkable at a glance.

Every vector $v$ has an expansion in each basis,

$$
v = v^i e_i = v_i e^i , \qquad v^i = v\cdot e^i, \qquad v_i = v \cdot e_i ,
$$

obtained by dotting with $e^i$ and with $e_i$ respectively. The numbers $v^i$ are the **contravariant components** of $v$ and the $v_i$ its **covariant components**. They are two descriptions of the one vector, and they agree in Cartesian coordinates.
:::

:::definition[Tensors of type $(r,s)$ and their transformation law]{provenance=adapted src="rhb-2006:section 26.16, Eqs. (26.67)-(26.71), pp. 960-962; arfken-2013:section 4.1, Eqs. (4.4)-(4.6), pp. 206-207"}
Let $\bar{u}^1,\dots,\bar{u}^n$ be a second general coordinate system on the same region, with $\bar u = \bar u(u)$ invertible and $C^1$. Differentiating $x$ by the chain rule gives the two bases in the new system,

$$
\bar{e}_i = \frac{\partial u^k}{\partial \bar{u}^{\,i}}\, e_k , \qquad \bar{e}^{\,i} = \frac{\partial \bar{u}^{\,i}}{\partial u^k}\, e^k ,
$$

the second because $\operatorname{grad}\bar u^{\,i}$ expands by the chain rule in the same way. The two matrices of partial derivatives are inverse to each other, since $\partial \bar u^{\,i}/\partial u^k \cdot \partial u^k / \partial \bar u^{\,j} = \partial \bar u^{\,i}/\partial \bar u^{\,j} = \delta^i_{\;j}$.

Because $v = v^i e_i = \bar v^{\,i}\bar e_i$ is one and the same vector, the components must compensate for the change of basis:

$$
\bar{v}^{\,i} = \frac{\partial \bar{u}^{\,i}}{\partial u^k}\, v^k \quad\text{(contravariant)},
\qquad
\bar{v}_i = \frac{\partial u^k}{\partial \bar{u}^{\,i}}\, v_k \quad\text{(covariant)} .
$$

These two laws are taken as the definition of what it means to be a vector's components, and generalise as follows.

A **tensor of type $(r,s)$** on the region is an assignment, to each general coordinate system, of $n^{r+s}$ numbers $T^{i_1\cdots i_r}{}_{j_1\cdots j_s}$ at each point, such that under any change of coordinates

$$
\bar{T}^{\,i_1\cdots i_r}{}_{j_1\cdots j_s}
= \frac{\partial \bar{u}^{\,i_1}}{\partial u^{a_1}} \cdots \frac{\partial \bar{u}^{\,i_r}}{\partial u^{a_r}}
\; \frac{\partial u^{b_1}}{\partial \bar{u}^{\,j_1}} \cdots \frac{\partial u^{b_s}}{\partial \bar{u}^{\,j_s}}
\; T^{a_1\cdots a_r}{}_{b_1\cdots b_s} .
$$

The number $r$ is its **contravariant degree**, $s$ its **covariant degree**, and $r+s$ its **rank** (Arfken, Weber and Harris) or **order** (Riley, Hobson and Bence); we say rank. Components with upper indices only are **contravariant**, with lower indices only **covariant**, and with both **mixed**. A type $(0,0)$ tensor is a scalar, a type $(1,0)$ tensor a vector. Arfken, Weber and Harris stress that the rank is not limited by $n$: a tensor in $n$ dimensions may carry any number of indices, each running from $1$ to $n$.

The one tensor is represented in the different bases by

$$
T = T^{ij} \, e_i \otimes e_j = T^i{}_j \, e_i \otimes e^j = T_{ij}\, e^i \otimes e^j
$$

and so on for higher rank; the three sets of numbers describe the same object against three different tensor bases. Adding tensors, and multiplying by scalars, is done componentwise, and is only defined for tensors of the same type.

A tensor of type $(0,2)$ or $(2,0)$ is **symmetric** if $T_{ij} = T_{ji}$ and **antisymmetric** if $T_{ij} = -T_{ji}$; writing $T_{ij} = \tfrac12 (T_{ij}+T_{ji}) + \tfrac12 (T_{ij}-T_{ji})$ splits any such tensor into a symmetric and an antisymmetric part, and both halves are tensors because the transformation law treats the two lower slots alike. Symmetry of this kind is preserved by every change of coordinates; the symmetry of a *mixed* pair of indices is not, and is not a meaningful notion.
:::

:::note[The same definition without coordinates]{provenance=adapted src="hassani-2013:Definitions 26.1.4 and 26.1.5 and Theorem 26.1.6, pp. 784-785"}
Hassani starts from the opposite end. Given a vector space $V$ with dual $V^*$, a tensor of type $(r,s)$ *is* a multilinear map

$$
T : \underbrace{V^* \times \cdots \times V^*}_{r} \times \underbrace{V \times \cdots \times V}_{s} \longrightarrow \mathbb{R} ,
$$

with no coordinates mentioned. Choosing a basis $\{e_i\}$ of $V$ and its dual basis $\{\epsilon^j\}$, the products $e_{i_1}\otimes\cdots\otimes e_{i_r}\otimes \epsilon^{j_1}\otimes\cdots\otimes\epsilon^{j_s}$ form a basis of the space of such maps, and the components of $T$ in it are its values on the basis covectors and vectors. Changing the basis then *forces* on the components exactly the law displayed above. The two definitions therefore describe the same objects: the coordinate definition says how the numbers behave, the multilinear one says what the numbers are the components of. In this chapter $V$ is the tangent space at a point, $\{e_i\}$ the covariant basis of the coordinate system and $\{e^j\}$ its reciprocal, which the reciprocity relation identifies as the dual basis. The manifold version is :ref[]{to=geom.vector-bundles}.
:::

:::definition[Tensor product and contraction]{provenance=adapted src="arfken-2013:section 4.1, pp. 209-210, Eq. (4.16) and Example 4.1.1; hassani-2013:Definitions 26.1.5 and 26.1.9, pp. 784, 788"}
Two operations build every tensor met in practice out of vectors.

**Tensor product (direct, or outer, product).** Multiply all the components of a tensor $A$ of type $(r,s)$ by all those of a tensor $B$ of type $(k,l)$, keeping every index:

$$
(A \otimes B)^{i_1\cdots i_r\, p_1 \cdots p_k}{}_{j_1\cdots j_s\, q_1\cdots q_l} = A^{i_1\cdots i_r}{}_{j_1\cdots j_s}\; B^{p_1\cdots p_k}{}_{q_1\cdots q_l} .
$$

The result is a tensor of type $(r+k, s+l)$: each index of the product picks up exactly the derivative factor it carried in $A$ or in $B$, and multiplying the two transformation laws gives the law for the product. The order in which the indices are written is ours to choose, but an index that was upper must stay upper.

**Contraction.** Set one upper and one lower index equal and sum. On a mixed tensor of type $(r,s)$ with $r,s \geq 1$ this produces a tensor of type $(r-1,s-1)$: contraction lowers the rank by two. For a type $(1,1)$ tensor it gives the trace $T^i{}_i$, a scalar. Hassani defines it without coordinates, as a linear map $T^r_s(V)\to T^{r-1}_{s-1}(V)$, which makes its independence of the basis part of the definition.

Contracting an upper with an upper index, or a lower with a lower, is **not** an operation on tensors: the result depends on the coordinate system, as Hassani's Example 26.1.8 shows for a would-be "trace" of a type $(2,0)$ tensor. (With a metric available one may first lower an index and then contract; that is :ref[a different operation]{to=geom.metric-tensor}, and it depends on the metric.)

Two consequences used constantly. First, the Kronecker delta $\delta^i_{\;j}$ *is* a type $(1,1)$ tensor, and has the same components in every coordinate system: its transformation law collapses by the chain rule to $\partial\bar u^{\,i}/\partial\bar u^{\,j} = \delta^i_{\;j}$. Second, the direct product of a covariant and a contravariant vector, contracted, is the scalar $v_i w^i$, whose value is the same in all coordinate systems.
:::

:::statement[The quotient rule]{provenance=adapted src="arfken-2013:section 4.1, Eqs. (4.20)-(4.24), pp. 211-212"}
Suppose that in every general coordinate system on the region a set of $n^2$ numbers $K_{ij}$ is given, and that

$$
B_i = K_{ij}\, A^j
$$

holds in every such system, where:

1. $A^j$ ranges over **all** contravariant vectors at the point (not one fixed vector), and
2. for each such $A$ the resulting $B_i$ are the covariant components of a vector, that is, they obey the covariant transformation law.

Then the $K_{ij}$ are the covariant components of a tensor of type $(0,2)$.

The same conclusion holds for any other arrangement of indices: if contracting an unknown array with arbitrary tensors always yields a tensor, the unknown array is a tensor of the type its indices advertise. Arfken, Weber and Harris state the rule for the list

$$
K^iA_i = B , \qquad K^j{}_iA_j = B_i , \qquad K^j{}_iA_{jk} = B_{ik} , \qquad K^{ijkl}A_{ij} = B_{kl} , \qquad K^{ij}A_k = B^{ijk} ,
$$

and prove the second; the version stated here, with both of $K$'s indices down, is the same argument and is the case needed for the metric in :ref[]{to=geom.metric-tensor}. They add one caution: the rule says nothing when $B$ vanishes identically, because the zero array transforms as a tensor of every type.
:::

:::idea{provenance=adapted src="arfken-2013:section 4.1, p. 212"}
Write the defining relation once in each coordinate system. In the new system it reads $\bar B_i = \bar K_{ij}\bar A^{\,j}$ directly. But $\bar B_i$ can also be computed the long way round: transform $B$ back to the old system, use the relation there, and transform $A$ forward again. That second route produces $\bar A^{\,j}$ multiplied by exactly the combination of derivatives that a $(0,2)$ tensor law would require. Subtracting the two expressions leaves a bracket contracted with $\bar A^{\,j}$ and equal to zero; since $\bar A$ may be chosen freely, each basis choice kills one column of the bracket in turn.
:::

:::proof{provenance=adapted src="arfken-2013:section 4.1, Eqs. (4.21)-(4.24), p. 212"}
Fix a point and two coordinate systems $u$ and $\bar u$.

**1. The relation in the barred system.** By hypothesis 1 the relation holds there for the arbitrary vector $\bar A$, so

$$
\bar B_i = \bar K_{ij}\,\bar A^{\,j} . \tag{i}
$$

**2. The same quantity, computed through the unbarred system.** By hypothesis 2 the $B_i$ are covariant components, so $\bar B_i = (\partial u^m/\partial\bar u^{\,i})\,B_m$. Using the relation in the unbarred system, $B_m = K_{mn}A^n$. Finally $A$ is a contravariant vector, and the inverse of its transformation law (obtained by exchanging the roles of the two systems) is $A^n = (\partial u^n/\partial \bar u^{\,j})\,\bar A^{\,j}$. Chaining the three substitutions,

$$
\bar B_i = \frac{\partial u^m}{\partial \bar u^{\,i}}\,\frac{\partial u^n}{\partial \bar u^{\,j}}\; K_{mn}\;\bar A^{\,j} . \tag{ii}
$$

**3. Subtract.** Both (i) and (ii) give $\bar B_i$, so for each fixed $i$

$$
\left( \bar K_{ij} - \frac{\partial u^m}{\partial \bar u^{\,i}}\,\frac{\partial u^n}{\partial \bar u^{\,j}}\, K_{mn} \right) \bar A^{\,j} = 0 .
$$

**4. Use the arbitrariness of $A$.** Hypothesis 1 lets us choose $\bar A$ to be the vector with $\bar A^{\,j} = \delta^j_{\;p}$ for each $p = 1,\dots,n$ in turn. Each choice leaves a single term of the sum, so the bracket vanishes for every $i$ and every $p$:

$$
\bar K_{ij} = \frac{\partial u^m}{\partial \bar u^{\,i}}\,\frac{\partial u^n}{\partial \bar u^{\,j}}\, K_{mn} ,
$$

which is the transformation law of a tensor of type $(0,2)$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="arfken-2013:section 4.1, pp. 212-213"}
**"For every $A$" is essential, and step 4 is where it is used.** One vector is not enough. In two dimensions take $A$ with components $(1,0)$ in every coordinate system. Then $B_i = K_{i1}$: the relation constrains only the first column of $K$, and the second column may be filled in independently in each coordinate system with numbers that obey no transformation law at all. The resulting array satisfies $B_i = K_{ij}A^j$ everywhere and is not a tensor.

**"In every coordinate system" is used in steps 1 and 2.** The proof compares the relation in two systems; a relation known only in one says nothing about how $K$ transforms.

**$B \neq 0$.** If $B_i = 0$ identically the final bracket is contracted with vectors but the preceding steps give no information, because both routes produce zero whatever $K$ does. This is Arfken, Weber and Harris's caution that the transformation properties of zero are indeterminate.

**Why the rule is worth having.** It is the only practical test for tensor character in physics, where a quantity is usually met through the linear relation it imposes between two measured vectors rather than through its own transformation law. Its most important negative companion is that an array with indices need *not* be a tensor: the partial derivatives $\partial v^i/\partial u^j$ of a vector field pick up a second-derivative term under a change of coordinates and fail the law, which is what forces the covariant derivative of :ref[]{to=geom.covariant-derivative}, and the Christoffel symbols there are the standard example of a three-index array that is not a tensor. Behaviour under *reflections* is a further refinement that the law above does not capture; see :ref[]{to=geom.pseudotensors}.
:::

:::method[Deciding whether an indexed array is a tensor]{provenance=original}
1. Count the indices and note their position. This fixes the type $(r,s)$ to be tested, hence the number of $\partial\bar u/\partial u$ and $\partial u/\partial\bar u$ factors in the law.
2. If the array is built from known tensors by addition (of the same type), tensor product, contraction, or raising and lowering with a metric, it is a tensor; no calculation is needed.
3. If instead the array is defined by a linear relation $B = K A$ that holds in all coordinate systems with $A$ arbitrary and $B$ a tensor, apply the quotient rule.
4. If the array is defined by differentiating something, be suspicious: carry out the change of coordinates explicitly and look for a term containing a second derivative $\partial^2 u / \partial \bar u\, \partial \bar u$. Such a term cannot be cancelled and disqualifies the array.
5. Otherwise, verify the transformation law directly on a change of coordinates that is not linear; a linear change will not detect the failure in step 4.
:::

:::example[A contraction is the same number in two coordinate systems]{provenance=original}
Work in the plane, and let the second coordinate system be

$$
x = u^2 - v^2 , \qquad y = 2uv , \qquad u > 0 ,
$$

which maps the right half-plane bijectively onto the plane cut along the negative $x$-axis, with Jacobian matrix and determinant

$$
J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{pmatrix} 2u & -2v \\ 2v & 2u\end{pmatrix}, \qquad \det J = 4(u^2+v^2) > 0 ,
$$

so it is a general coordinate system. It is not linear, which is what makes the test meaningful.

**The two objects.** Let $\varphi(x,y) = x^2 y$ and let $\omega_i = \partial\varphi/\partial x^i$ be its gradient, a covariant vector. Let $A$ be the rotation field with Cartesian components $A^i = (-y, x)$.

**At a point.** Take $(u,v) = (2,1)$, so $x = 2^2-1^2 = 3$ and $y = 2\cdot 2\cdot 1 = 4$. There

$$
\omega_i = (2xy,\; x^2) = (24,\; 9), \qquad A^i = (-y,\; x) = (-4,\; 3).
$$

Their tensor product is the mixed tensor $T^i{}_j = A^i\omega_j$, with matrix

$$
[T^i{}_j] = \begin{pmatrix} -4 \\ 3\end{pmatrix}\begin{pmatrix} 24 & 9\end{pmatrix} = \begin{pmatrix} -96 & -36 \\ 72 & 27 \end{pmatrix}, \qquad T^i{}_i = -96 + 27 = -69 .
$$

**The same point in the new coordinates.** At $(u,v) = (2,1)$,

$$
J = \begin{pmatrix} 4 & -2 \\ 2 & 4\end{pmatrix}, \qquad \det J = 20, \qquad J^{-1} = \frac{1}{20}\begin{pmatrix} 4 & 2 \\ -2 & 4\end{pmatrix} .
$$

Here $J$ has entries $\partial x^i/\partial u^j$ and $J^{-1}$ has entries $\partial u^i/\partial x^j$. The contravariant law uses $J^{-1}$:

$$
\bar A^{\,u} = \tfrac{1}{5}(-4) + \tfrac{1}{10}(3) = -\tfrac12 , \qquad
\bar A^{\,v} = -\tfrac{1}{10}(-4) + \tfrac{1}{5}(3) = 1 .
$$

The covariant law uses $J$ itself, in the transposed pattern $\bar\omega_i = (\partial x^k/\partial u^i)\,\omega_k$:

$$
\bar\omega_u = 4(24) + 2(9) = 114 , \qquad \bar\omega_v = -2(24) + 4(9) = -12 .
$$

As a check on the covariant law, $\varphi$ expressed in the new coordinates is $2uv(u^2-v^2)^2$, whose partial derivatives at $(2,1)$ are $2v(u^2-v^2)^2 + 8u^2v(u^2-v^2) = 18 + 96 = 114$ and $2u(u^2-v^2)^2 - 8uv^2(u^2-v^2) = 36 - 48 = -12$: the gradient computed in the new coordinates agrees with the transformed one, as it must for a covariant vector.

**The contraction.** In the new coordinates

$$
[\bar T^{\,i}{}_j] = \begin{pmatrix} -\tfrac12 \\ 1 \end{pmatrix}\begin{pmatrix} 114 & -12\end{pmatrix} = \begin{pmatrix} -57 & 6 \\ 114 & -12 \end{pmatrix}, \qquad \bar T^{\,i}{}_i = -57 - 12 = -69 .
$$

The individual components are completely different in the two systems; the contraction is

$$
\boxed{\,T^i{}_i = \bar T^{\,i}{}_i = -69\,}
$$

in both. Note also that the two off-diagonal entries changed sign pattern and that $-96+27$ and $-57-12$ have nothing to do with each other term by term: it is only the sum that is invariant, which is exactly what the chain rule in the proof of contraction delivers.
:::

:::application[Recognising material tensors from a measured linear response]{provenance=adapted src="rhb-2006:section 26.12, Eqs. (26.43)-(26.44), p. 952; arfken-2013:section 4.1, p. 212"}
A laboratory never measures a transformation law. What it measures is a linear response: apply a field, read off a current. In an anisotropic crystal the current density and the applied electric field are related by

$$
j^i = \sigma^i{}_j \, E^j ,
$$

and the nine conductivities $\sigma^i{}_j$ are whatever the experiment returns in the axes the apparatus happens to use. The quotient rule is what licenses treating them as a tensor: $E$ can be applied in any direction, so $E^j$ is arbitrary; $j$ and $E$ are both vectors; the relation holds whatever axes the next laboratory chooses. Hence $\sigma$ is a tensor of type $(1,1)$, and only then is it legitimate to diagonalise it, to speak of principal axes of conduction, or to compare measurements made in different frames. Arfken, Weber and Harris make the same argument for the polarisability relating an induced dipole moment to an applied field, and Riley, Hobson and Bence list magnetic susceptibility, $M_i = \chi_{ij}H_j$, alongside conductivity.

The argument is used at every rank. Hooke's law for an elastic solid relates two second-rank tensors, $p_{ij} = c_{ijkl}e_{kl}$, and the quotient rule promotes the $81$ elastic constants $c_{ijkl}$ to a fourth-rank tensor; that case, with the strain and stress tensors themselves, is :ref[]{to=geom.stress-strain}. In relativity the same reasoning identifies the four-potential as a four-vector from the fact that a scalar wave operator applied to it equals the four-current. What the rule cannot do is manufacture information: if the measured response vanishes in all frames, nothing is learned.
:::
