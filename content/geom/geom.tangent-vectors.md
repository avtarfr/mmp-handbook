---
id: geom.tangent-vectors
title: Tangent vectors and vector fields
kind: definition
level: advanced
summary: Defines a tangent vector at a point of a smooth manifold as a derivation of smooth functions, identifies the coordinate vectors as a basis of the tangent space, defines smooth vector fields and their action on functions, and proves that the Lie bracket of two vector fields is again a vector field with the coordinate formula for its components.
prereqs: [geom.smooth-manifolds, found.partial-derivatives-chain-rule, linalg.vector-spaces-bases]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 3, pp. 53–54 (derivations at a point, Prop. 3.2 and Cor. 3.3), p. 55 (the differential of a smooth map), p. 56 (Prop. 3.8, locality), pp. 60–61 (coordinate vectors and Prop. 3.15); Ch. 8, pp. 174–175 (vector fields and the smoothness criterion, Prop. 8.1), pp. 180–181 (Prop. 8.14 and Prop. 8.15, vector fields as derivations of $C^\\infty(M)$), pp. 185–187 (Lie brackets, Lemma 8.25 and Prop. 8.26)"
    pages: "53-56, 60-61, 174-175, 180-181, 185-187"
    role: the derivation definition of a tangent vector, the coordinate basis, the smoothness criteria for vector fields, and the Lie bracket with its coordinate formula
  - work: hassani-2013
    loc: "§28.2, the motivation by directional derivatives along a curve with Example 28.2.2, pp. 867–868, Def. 28.2.3 and Prop. 28.2.4, pp. 868–869; §28.4.1, Def. 28.4.1 and Def. 28.4.2, p. 877, the derivation property of vector fields and the Lie algebra $\\mathfrak{X}(M)$ with the Jacobi identity, pp. 878–879, Def. 28.4.5 (integral curve), p. 879"
    pages: "867-869, 877-879"
    role: the physicists' route from directional derivatives to the derivation definition, germs rather than global functions as the domain, and the Lie-algebra structure of the vector fields with the Jacobi identity
---

:::definition[Tangent vector, tangent space]{provenance=adapted src="lee-2013:Ch. 3, p. 54; hassani-2013:§28.2, Def. 28.2.3, p. 868"}
Let $M$ be a smooth manifold and $p \in M$. A **derivation at $p$** is a linear map $v : C^\infty(M) \to \mathbb{R}$ satisfying the product rule at $p$:

$$
v(fg) = f(p)\, v(g) + g(p)\, v(f) \qquad \text{for all } f, g \in C^\infty(M).
$$

The set of all derivations at $p$ is a real vector space under pointwise operations, written $T_pM$ and called the **tangent space** to $M$ at $p$; its elements are **tangent vectors at $p$**.

Two consequences follow at once from the product rule. First, $v(1) = v(1\cdot 1) = 2\,v(1)$, so $v$ annihilates the constant function $1$ and, by linearity, every constant. Second, if $f(p) = g(p) = 0$ then $v(fg) = 0$.

Tangent vectors act locally: if $f, g \in C^\infty(M)$ agree on some neighbourhood $W$ of $p$, then $v(f) = v(g)$. Indeed, put $h = f - g$. Then $\{h \neq 0\}$ misses $W$, so the support of $h$ — the closure of that set — lies in the closed set $M \setminus W$, and $p$ does not: the support and the point are separated, with $W$ itself an open set between them. Choose a smooth bump function $\chi$ that equals $1$ on $\operatorname{supp} h$ and vanishes on a neighbourhood of $p$, which the separation permits; then $\chi h = h$ while $\chi(p) = h(p) = 0$, so $v(h) = v(\chi h) = 0$ by the second consequence above. Consequently $T_pU$ and $T_pM$ may be identified for any open $U \ni p$, and a tangent vector may be applied to a function defined only near $p$.
:::

:::remark[Two routes to the same space]{provenance=original}
Hassani reaches the same definition from the physicist's side. Let $\gamma$ be a smooth curve in $M$ with $\gamma(0) = p$; then $f \mapsto \frac{d}{du}\big|_{u=0}\, f(\gamma(u))$ is linear and obeys the product rule, by the ordinary product rule for functions of one variable, so it is a tangent vector: the **velocity** of $\gamma$ at $p$. Different curves can give the same derivation — only the first-order behaviour of $\gamma$ at $p$ matters — and this is what makes "a tangent vector is an arrow" into "a tangent vector is a directional derivative".

The two books differ in the domain they give the derivation: Lee uses $C^\infty(M)$, globally defined smooth functions, while Hassani uses $\mathcal{F}^\infty(P)$, functions defined near $p$. By the locality property above the resulting vector spaces are canonically isomorphic, so nothing depends on the choice; we follow Lee and write $C^\infty(M)$, and use locality whenever a function is given only in a chart.
:::

:::statement[Coordinate basis]{provenance=adapted src="lee-2013:Ch. 3, Cor. 3.3, p. 54, and Prop. 3.15, p. 61"}
Take a smooth $n$-manifold $M$, a point $p$ of it, and around $p$ a smooth chart $(U, \varphi)$ whose coordinate functions we write $\varphi = (x^1, \dots, x^n)$. For $i = 1, \dots, n$ define $\partial/\partial x^i|_p \in T_pM$ by

$$
\frac{\partial}{\partial x^i}\Big|_p f \;=\; \frac{\partial \widehat f}{\partial x^i}\bigl(\varphi(p)\bigr), \qquad \widehat f = f \circ \varphi^{-1} ,
$$

in words: push $f$ down into the chart and differentiate the resulting function of $n$ real variables in its $i$-th slot, at the image of $p$. These $n$ **coordinate vectors** form a basis of $T_pM$, which therefore has dimension $n = \dim M$. The components of $v \in T_pM$ in this basis are recovered by letting $v$ act on the coordinate functions:

$$
v = v^i \,\frac{\partial}{\partial x^i}\Big|_p , \qquad v^i = v(x^i) ,
$$

with the summation convention in force. If $(V, \psi)$, $\psi = (\tilde x^1, \dots, \tilde x^n)$, is a second chart containing $p$, the chain rule applied to the transition map gives the change of basis and of components

$$
\frac{\partial}{\partial x^i}\Big|_p = \frac{\partial \tilde x^{\,j}}{\partial x^i}(p)\, \frac{\partial}{\partial \tilde x^{\,j}}\Big|_p , \qquad
\tilde v^{\,j} = \frac{\partial \tilde x^{\,j}}{\partial x^i}(p)\, v^i ,
$$

which is the transformation law that makes $v$ a contravariant vector in the sense of :ref[]{to=geom.tensors}.
:::

:::idea{provenance=original}
Why should there be no derivations beyond the partial derivatives? Because a smooth function is, to first order, its value plus a linear term, and a derivation kills constants and kills products of functions vanishing at the point. Taylor's theorem with an integral remainder makes this exact: near a point, $f$ equals its value plus $\sum_i (x^i - a^i) g_i(x)$ with $g_i$ smooth and $g_i(a) = \partial_i \widehat f(a)$. Applying $v$ annihilates the constant, and the product rule leaves only $\sum_i v(x^i)\, \partial_i \widehat f(a)$. So $v$ is determined by the $n$ numbers $v(x^i)$, and the coordinate vectors realise every choice of them.
:::

:::proof[Coordinate basis]{provenance=adapted src="lee-2013:Ch. 3, Prop. 3.2 and Cor. 3.3, pp. 53–54, and Prop. 3.15, p. 61"}
By locality we may work inside the chart, so assume $M$ is an open set $\widehat U \subseteq \mathbb{R}^n$ containing $a = \varphi(p)$, with the identity chart; the general case follows by transporting along $\varphi$, which is a diffeomorphism onto $\widehat U$.

**Step 1 (they are tangent vectors, and they are independent).** Each $\partial/\partial x^i|_a$ is linear and obeys the product rule, by the ordinary product rule for partial derivatives. If $c^i \,\partial/\partial x^i|_a = 0$, apply it to the coordinate function $x^j$: since $\partial x^j/\partial x^i = \delta^j_i$, we get $c^j = 0$ for each $j$. So the $n$ vectors are linearly independent.

**Step 2 (Taylor with remainder).** Let $\widehat f$ be smooth on a ball $B \subseteq \widehat U$ centred at $a$. For $x \in B$ the segment from $a$ to $x$ stays in $B$, so we may integrate the derivative of $t \mapsto \widehat f(a + t(x-a))$ from $0$ to $1$; the fundamental theorem of calculus and the chain rule then give

$$
\widehat f(x) = \widehat f(a) + \sum_{i=1}^n (x^i - a^i)\, g_i(x), \qquad
g_i(x) = \int_0^1 \frac{\partial \widehat f}{\partial x^i}\bigl(a + t(x-a)\bigr)\, dt .
$$

Each $g_i$ is smooth on $B$, by differentiation under the integral sign, and $g_i(a) = \partial_i \widehat f(a)$.

**Step 3 (apply a derivation).** Let $v$ be a derivation at $a$. The function $x \mapsto \widehat f(a)$ is constant, so $v$ kills it. In each remaining term both factors $(x^i - a^i)$ and $g_i(x) - g_i(a)$ vanish at $a$, so $v$ kills their product; writing $g_i = g_i(a) + (g_i - g_i(a))$ and using the product rule,

$$
v\bigl((x^i - a^i)\,g_i\bigr) = g_i(a)\, v(x^i - a^i) + (a^i - a^i)\,v(g_i) = \frac{\partial \widehat f}{\partial x^i}(a)\, v(x^i) .
$$

Summing, $v(f) = v(x^i)\,\partial_i \widehat f(a) = \bigl(v(x^i)\,\partial/\partial x^i|_a\bigr) f$. Since $f$ was arbitrary, $v = v(x^i)\,\partial/\partial x^i|_a$, so the coordinate vectors span. With Step 1 they are a basis, and $\dim T_pM = n$.

**Step 4 (change of chart).** For $f$ smooth near $p$ and the two charts $x$, $\tilde x$, the chain rule for the transition map $\psi \circ \varphi^{-1}$ reads $\partial (f \circ \varphi^{-1})/\partial x^i = \bigl(\partial \tilde x^{\,j}/\partial x^i\bigr)\, \partial (f \circ \psi^{-1})/\partial \tilde x^{\,j}$, evaluated at the corresponding points. That is the stated change of basis; equating the two expansions of a fixed $v$ and using uniqueness of components gives the law for $\tilde v^{\,j}$. $\square$
:::

:::definition[Vector field]{provenance=adapted src="lee-2013:Ch. 8, pp. 174–175 and Prop. 8.14, p. 180; hassani-2013:§28.4.1, Def. 28.4.2, p. 877 and p. 878"}
A **vector field** $X$ on $M$ assigns to each $p \in M$ a tangent vector $X_p \in T_pM$. In a smooth chart $(U, x^i)$ it has **component functions** $X^i : U \to \mathbb{R}$ determined by

$$
X_p = X^i(p)\, \frac{\partial}{\partial x^i}\Big|_p , \qquad X^i = X(x^i) ,
$$

and $X$ is **smooth** when its component functions are smooth in every smooth chart (equivalently, in the charts of one atlas, since transition maps are smooth and the components transform by the Jacobian of the transition map). The set of smooth vector fields on $M$ is written $\mathfrak{X}(M)$; it is a vector space over $\mathbb{R}$ and a module over $C^\infty(M)$.

A smooth vector field acts on functions: for $f \in C^\infty(U)$, $U$ open, define $Xf : U \to \mathbb{R}$ by $(Xf)(p) = X_p f$. In coordinates $Xf = X^i\, \partial \widehat f/\partial x^i$, so $Xf$ is smooth whenever $f$ is. The resulting map $X : C^\infty(M) \to C^\infty(M)$ is $\mathbb{R}$-linear and satisfies the **derivation identity**

$$
X(fg) = f\,(Xg) + g\,(Xf) ,
$$

which is the pointwise product rule read as an identity between functions. Conversely every $\mathbb{R}$-linear map $D : C^\infty(M) \to C^\infty(M)$ obeying that identity is $f \mapsto Xf$ for a unique smooth $X$, namely the one with $X_p f = (Df)(p)$: that recipe defines a derivation at each $p$, and the field so defined is smooth because $Xf = Df$ is smooth for every smooth $f$. We therefore use the same letter for the field and for the operator.

A **curve** $\gamma : I \to M$ is an **integral curve** of $X$ if its velocity at each time is the value of $X$ there, that is $\dot\gamma(t) = X_{\gamma(t)}$; in coordinates this is the system $\dot x^i = X^i(x)$. Integral curves, the flow they generate and the Lie derivative along it are the subject of :ref[]{to=geom.flows-integral-curves}.
:::

:::definition[Lie bracket]{provenance=adapted src="lee-2013:Ch. 8, p. 186; hassani-2013:§28.4.1, p. 879"}
For $X, Y \in \mathfrak{X}(M)$ the **Lie bracket** $[X, Y]$ is the operator on $C^\infty(M)$

$$
[X, Y] f = X(Yf) - Y(Xf) .
$$

The point of the antisymmetrisation is that neither $XY$ nor $YX$ is itself a vector field, while the difference is.
:::

:::statement[The bracket is a vector field, with its coordinate formula]{provenance=adapted src="lee-2013:Ch. 8, Lemma 8.25 and Prop. 8.26, pp. 186–187; hassani-2013:§28.4.1, p. 879"}
Let $X, Y, Z \in \mathfrak{X}(M)$ and let $(U, x^i)$ be a smooth chart.

1. $[X, Y]$ is a smooth vector field on $M$, and in the chart, with $X = X^i\,\partial/\partial x^i$ and $Y = Y^j\,\partial/\partial x^j$,

   $$
   [X, Y] = \Bigl( X^i \frac{\partial Y^j}{\partial x^i} - Y^i \frac{\partial X^j}{\partial x^i} \Bigr) \frac{\partial}{\partial x^j}
   \;=\; \bigl( X Y^j - Y X^j \bigr)\, \frac{\partial}{\partial x^j} .
   $$

   In particular all second derivatives cancel: the bracket is first order, although its definition is not.
2. $[\,\partial/\partial x^i,\, \partial/\partial x^j\,] = 0$ for all $i, j$: coordinate vector fields commute.
3. The bracket is $\mathbb{R}$-bilinear, antisymmetric, $[X, Y] = -[Y, X]$, and satisfies the **Jacobi identity**

   $$
   \bigl[[X, Y], Z\bigr] + \bigl[[Z, X], Y\bigr] + \bigl[[Y, Z], X\bigr] = 0 ,
   $$

   so $\mathfrak{X}(M)$ with the bracket is a Lie algebra over $\mathbb{R}$ — infinite-dimensional, unlike the finite-dimensional Lie algebras of :ref[]{to=group.lie-groups-algebras}.
:::

:::idea{provenance=original}
Both halves of part 1 come from the same cancellation. Applying $XY$ to a product $fg$ produces the terms one wants, $f\,XYg + g\,XYf$, plus two cross terms $Xf\,Yg + Xg\,Yf$. Those cross terms are symmetric in $X$ and $Y$, so they drop out of the difference $XY - YX$, which is therefore a derivation. In coordinates the same symmetry is the equality of mixed partial derivatives: the second-derivative terms of $XY$ and $YX$ are both $X^iY^j\,\partial_i\partial_j f$ and cancel, leaving only terms in which one derivative has landed on a component function.
:::

:::proof{provenance=adapted src="lee-2013:Ch. 8, Lemma 8.25 and Prop. 8.26, pp. 186–187"}
**Step 1 ($[X,Y]$ is a derivation).** It is $\mathbb{R}$-linear, being a difference of composites of linear maps, and it sends smooth functions to smooth functions, since $X$ and $Y$ do. For $f, g \in C^\infty(M)$, expand each term with the derivation identity twice:

$$
X\bigl(Y(fg)\bigr) = X\bigl(f\,Yg + g\,Yf\bigr) = f\,XYg + Xf\,Yg + g\,XYf + Xg\,Yf ,
$$

and the same with $X$ and $Y$ interchanged,

$$
Y\bigl(X(fg)\bigr) = f\,YXg + Yf\,Xg + g\,YXf + Yg\,Xf .
$$

The two cross terms $Xf\,Yg + Xg\,Yf$ are unchanged by the interchange, so subtracting leaves

$$
[X,Y](fg) = f\,\bigl(XYg - YXg\bigr) + g\,\bigl(XYf - YXf\bigr) = f\,[X,Y]g + g\,[X,Y]f .
$$

By the converse half of the definition of a vector field above, $[X,Y]$ is a smooth vector field.

**Step 2 (coordinate formula).** Since the bracket is now known to be a vector field, its action is local, so we may compute in a single chart, writing $f$ for the coordinate representation and $\partial_i$ for $\partial/\partial x^i$:

$$
X(Yf) = X^i \partial_i \bigl( Y^j \partial_j f \bigr) = X^i (\partial_i Y^j)(\partial_j f) + X^i Y^j\, \partial_i \partial_j f .
$$

Interchanging $X$ and $Y$ and subtracting, the second-derivative terms are $X^iY^j \partial_i\partial_j f - Y^iX^j \partial_i\partial_j f$; relabelling the summed indices $i \leftrightarrow j$ in the second and using $\partial_i\partial_j f = \partial_j\partial_i f$, which holds because $f$ is smooth, they cancel. What remains is

$$
[X,Y]f = \bigl( X^i \partial_i Y^j - Y^i \partial_i X^j \bigr)\, \partial_j f ,
$$

which is the claimed formula. Part 2 follows by taking $X^i$, $Y^j$ constant.

**Step 3 (algebraic identities).** Bilinearity and antisymmetry are immediate from $[X,Y]f = XYf - YXf$. For the Jacobi identity, expand each double bracket as an operator on $C^\infty(M)$:

$$
\bigl[[X,Y],Z\bigr] = XYZ - YXZ - ZXY + ZYX .
$$

The two cyclic permutations give the analogous four-term expressions, so the sum has twelve terms. Only six distinct words of length three can occur — the six orderings of $X$, $Y$, $Z$ — and each therefore appears exactly twice, once with each sign. For $XYZ$: it comes with $+$ from $\bigl[[X,Y],Z\bigr]$ and with $-$ from $\bigl[[Y,Z],X\bigr]$, whose expansion $YZX - ZYX - XYZ + XZY$ contains $-XYZ$; the other five cancel in the same way. Hence the sum is zero. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Smoothness of $f$* is used exactly once, in Step 2, to interchange mixed partial derivatives. It is what makes the bracket first order. For a function with unequal mixed partials the expression $XYf - YXf$ would still make sense but would not be given by the first-order formula.
- *Antisymmetry is essential, not cosmetic.* The composite $XY$ alone is not a vector field. On $\mathbb{R}^2$ take $X = \partial/\partial x$, $Y = \partial/\partial y$, $f = x$, $g = y$. Then $XY(fg) = \partial_x\partial_y(xy) = \partial_x x = 1$, whereas $f\,XYg + g\,XYf = x\,\partial_x\partial_y y + y\,\partial_x\partial_y x = 0$. So $XY$ fails the derivation identity, while $[X,Y] = 0$ here.
- *The bracket is not $C^\infty(M)$-bilinear.* For $h \in C^\infty(M)$ one computes from the coordinate formula that $[X, hY] = h\,[X,Y] + (Xh)\,Y$. So the value of $[X,Y]$ at $p$ is not determined by $X_p$ and $Y_p$ alone: it needs the fields near $p$. This is why the bracket is not a tensor, in contrast with the metric of :ref[]{to=geom.metric-tensor}.
- *Smoothness of the fields* is used so that $Xf$ is again smooth and $Y$ can be applied to it. For merely continuous fields $X(Yf)$ need not exist.
- *The locality of tangent vectors* is what licenses computing in one chart in Step 2 and transporting the answer; it is proved from the product rule and a bump function, so it needs smooth bump functions to exist, which is where second countability of a manifold is eventually used.
:::

:::method[Computing a Lie bracket]{provenance=original}
1. Write both fields in one chart as $X = X^i \partial_i$, $Y = Y^j \partial_j$, listing the components as functions of the coordinates.
2. For each $j$, compute the single number-valued function $X Y^j - Y X^j$ — that is, differentiate the $j$-th component of $Y$ along $X$, differentiate the $j$-th component of $X$ along $Y$, and subtract. Never expand $XY f$ on a test function; the second derivatives only cancel again.
3. Assemble $[X,Y] = (XY^j - YX^j)\,\partial_j$.
4. Check: evaluate at a convenient point, and verify antisymmetry by recomputing $[Y,X]$ or by inspecting the signs. If either field has constant components in the chart, the corresponding term drops.
5. If the fields are given in another coordinate system, either transform the components first, or use that the bracket is chart-independent and compute in whichever chart makes the components simplest.
:::

:::example[A bracket in $\mathbb{R}^3$]{provenance=original}
On $M = \mathbb{R}^3$ with coordinates $(x,y,z)$ take

$$
X = x\,\frac{\partial}{\partial x} + yz\,\frac{\partial}{\partial z} , \qquad
Y = y^2\,\frac{\partial}{\partial x} + x\,\frac{\partial}{\partial y} .
$$

So $X = (X^1,X^2,X^3) = (x, 0, yz)$ and $Y = (y^2, x, 0)$.

1. *First component.* $XY^1 = X(y^2) = 0$, because $X$ has no $\partial/\partial y$ part. $YX^1 = Y(x) = y^2$. So $[X,Y]^1 = -y^2$.
2. *Second component.* $XY^2 = X(x) = x$. $YX^2 = Y(0) = 0$. So $[X,Y]^2 = x$.
3. *Third component.* $XY^3 = X(0) = 0$. $YX^3 = Y(yz) = y^2\,\partial_x(yz) + x\,\partial_y(yz) = xz$. So $[X,Y]^3 = -xz$.
4. *Result.*
   $$
   [X, Y] = -y^2\,\frac{\partial}{\partial x} + x\,\frac{\partial}{\partial y} - xz\,\frac{\partial}{\partial z} .
   $$
5. *A number.* At the point $(2, 3, -1)$ the components are $(-9,\; 2,\; 2)$.
6. *Check by the definition.* Take the test function $f = xz$. Then $Yf = y^2 z$ and $X(Yf) = y^2\,X(z) = y^2 \cdot yz = y^3 z$; while $Xf = x\,z + yz\cdot x = xz + xyz$ and $Y(Xf) = y^2\,\partial_x(xz+xyz) + x\,\partial_y(xz+xyz) = y^2(z + yz) + x\cdot xz = y^2 z + y^3 z + x^2 z$. Subtracting, $[X,Y]f = -y^2z - x^2 z$. The coordinate formula gives $[X,Y](xz) = -y^2\cdot z + x\cdot 0 - xz\cdot x = -y^2 z - x^2 z$. The two agree, and at $(2,3,-1)$ both equal $9 + 4 = 13$.
:::

:::example[The rotation generators]{provenance=original}
On $\mathbb{R}^3$ the infinitesimal rotations about the three axes are the vector fields

$$
L_1 = y\,\frac{\partial}{\partial z} - z\,\frac{\partial}{\partial y}, \qquad
L_2 = z\,\frac{\partial}{\partial x} - x\,\frac{\partial}{\partial z}, \qquad
L_3 = x\,\frac{\partial}{\partial y} - y\,\frac{\partial}{\partial x} ,
$$

that is, $L_i = \varepsilon_{ijk}\,x^j\,\partial/\partial x^k$. Their components are $L_1 = (0, -z, y)$, $L_2 = (z, 0, -x)$, $L_3 = (-y, x, 0)$. By the method,

- $[L_1, L_2]^1 = L_1(z) - L_2(0) = y$,
- $[L_1, L_2]^2 = L_1(0) - L_2(-z) = -\bigl(z\,\partial_x(-z) - x\,\partial_z(-z)\bigr) = -x$,
- $[L_1, L_2]^3 = L_1(-x) - L_2(y) = 0 - 0 = 0$,

so $[L_1, L_2] = y\,\partial_x - x\,\partial_y = -L_3$, and cyclically $[L_i, L_j] = -\varepsilon_{ijk} L_k$. The three fields therefore span a three-dimensional Lie subalgebra of $\mathfrak{X}(\mathbb{R}^3)$, closed under the bracket although $\mathfrak{X}(\mathbb{R}^3)$ itself is infinite-dimensional.

The sign is a convention, not a discrepancy. Quantum mechanics uses the operators $\widehat L_i = -i\hbar\, L_i$, and then $[\widehat L_1, \widehat L_2] = (-i\hbar)^2 [L_1, L_2] = -\hbar^2(-L_3) = i\hbar\,\widehat L_3$, the familiar commutation relation of :ref[]{to=group.angular-momentum}. Each $L_i$ is tangent to every sphere $|x| = r$, since $L_i(x^2+y^2+z^2) = 0$, so the same three fields restrict to vector fields on $S^2$ with the same brackets.
:::

:::application{provenance=original}
Reading a vector field as a first-order differential operator is what lets the same object be a flow, a symmetry and an observable. In fluid mechanics $X$ is the velocity field and $Xf$ is the advective rate of change of a tracer $f$; the bracket $[X,Y]$ then measures the failure of two advections to commute. In mechanics the Hamiltonian vector field of a function is the generator of its flow, and the Lie bracket of two such fields corresponds to the Poisson bracket of the functions (see :ref[]{to=geom.symplectic-manifolds}), which is why conserved quantities form a Lie algebra. In control theory the bracket of two control fields is the direction a system can move by alternating the two controls even when neither points that way — the reason a car can be parked sideways — and the dimension of the Lie algebra they generate decides controllability. In quantum mechanics the generators above become the angular-momentum operators, whose commutators fix the representation theory and hence the spectra of atoms.
:::
