---
id: found.change-of-variables
title: Multiple integrals and change of variables
kind: method
level: core
summary: States when a multiple integral may be computed as an iterated integral and gives the change-of-variables formula for a $C^1$ diffeomorphism, with the absolute Jacobian determinant as the local volume factor, specialised to plane polar, cylindrical and spherical coordinates.
prereqs: [found.partial-derivatives-chain-rule, found.implicit-inverse-function, measure.lebesgue-integral, measure.fubini-tonelli]
provenance: adapted
sources:
  - work: folland-1999
    loc: "Thm 2.37 (Fubini–Tonelli for $\\sigma$-finite measures), p. 67, with the remarks and Exercises 47–48, pp. 68–69; Thm 2.39 (the same theorem for complete measures, hence for Lebesgue measurable integrands), p. 68; §2.6, p. 74: definition of a $C^1$ diffeomorphism and Thm 2.47(a)–(b) (change of variables and the volume rule), with its proof on pp. 75–76 and the remark on p. 74 that a generalisation is proved by other methods in his §11.2"
    pages: "67-69, 74-76"
    role: the two theorems with their exact hypotheses; the route of the proof of the change-of-variables formula, which is quoted and not reproduced
  - work: rhb-2006
    loc: "§6.1, Eqs. (6.3)–(6.4), pp. 188–190 (iterated integrals, order reversal and when it is not permissible); §6.4.3, p. 205 (the Jacobian volume element and the spherical polar Jacobian $r^2\\sin\\theta$); §6.4.4, pp. 206–207 (Eqs. (6.16)–(6.17), the composition and reciprocal rules for Jacobians)"
    pages: "188-190, 205-207"
    role: iterated integrals in practice; the Jacobian volume element, its notation and algebraic rules
  - work: arfken-2013
    loc: "§1.10, p. 73 (the Jacobian in a double integral, $dx\\,dy = r\\,dr\\,d\\theta$, and the care needed with unbounded regions); §4.4, Eqs. (4.74)–(4.76), pp. 229–230 (Jacobian matrix and determinant, and $J^{-1} = \\partial(u)/\\partial(x)$)"
    pages: "73, 229-230"
    role: the practical form of the rule, the reciprocal relation, and the transposed layout of the Jacobian matrix
  - work: lee-2013
    loc: "App. C, Examples C.37–C.38, pp. 660–661 (polar and spherical coordinates as local diffeomorphisms, with Jacobian determinants $r$ and $\\rho^2\\sin\\varphi$)"
    pages: "660-661"
    role: the coordinate maps and their domains of injectivity; the alternative naming of the spherical angles
---

:::definition[Iterated integral, Jacobian factor, admissible coordinate map]{provenance=adapted src="rhb-2006:§6.1, Eqs. (6.3)–(6.4), pp. 188–190; folland-1999:§2.6, p. 74"}
- An **iterated integral** of $f$ over a region described by $a \le x \le b$, $y_1(x) \le y \le y_2(x)$ is
  $$
  \int_a^b \left( \int_{y_1(x)}^{y_2(x)} f(x,y)\, dy \right) dx ,
  $$
  the inner integral being computed with $x$ held fixed. The limits of the inner integral may depend on the outer variable; those of the outer integral may not. The convention extends to any number of variables.
- Let $\Omega \subseteq \mathbb{R}^n$ be open. A map $G : \Omega \to \mathbb{R}^n$ is a **$C^1$ diffeomorphism** (Folland's usage) if $G$ is of class $C^1$, injective on $\Omega$, and $\det D_uG \neq 0$ for every $u \in \Omega$. Then $G(\Omega)$ is open and $G^{-1}$ is $C^1$ (:ref[inverse function theorem]{to=found.implicit-inverse-function}).
- For such a $G$ the **Jacobian factor** at $u \in \Omega$ is $\lvert \det D_uG \rvert$, written $\bigl\lvert \partial(x_1,\dots,x_n)/\partial(u_1,\dots,u_n) \bigr\rvert$ when $x = G(u)$. The absolute value is taken: the sign of the determinant records only the orientation of the coordinate ordering.
:::

:::statement[When a multiple integral is an iterated integral]{provenance=adapted src="folland-1999:Thm 2.37, p. 67 and Thm 2.39, p. 68; rhb-2006:§6.1, Eqs. (6.3)–(6.4), pp. 188–190"}
1. **Box, continuous integrand.** If $f$ is continuous on the closed bounded box $R = [a_1,b_1]\times\cdots\times[a_n,b_n] \subseteq \mathbb{R}^n$, then $\int_R f\, d^n x$ equals the iterated integral in each of the $n!$ orders of the variables.
2. **Region with variable limits.** Let $y_1 \le y_2$ be continuous on $[a,b]$, let
   $$
   R = \bigl\{ (x,y) : a \le x \le b,\ y_1(x) \le y \le y_2(x) \bigr\},
   $$
   and let $f$ be continuous on $R$. Then
   $$
   \int_R f \, dA = \int_a^b \left( \int_{y_1(x)}^{y_2(x)} f(x,y)\, dy \right) dx .
   $$
   If the same $R$ can also be written as $\{(x,y) : c \le y \le d,\ x_1(y) \le x \le x_2(y)\}$ with $x_1 \le x_2$ continuous, the iterated integral in the other order has the same value. The same holds in $n$ variables, with the innermost limits depending on all the outer variables.
3. **The general condition.** Let $f$ be Lebesgue measurable on $\mathbb{R}^p \times \mathbb{R}^q$. If $f \ge 0$, or if $\int \lvert f \rvert < \infty$, then both iterated integrals and the multiple integral agree (for $f \ge 0$ all three may be $+\infty$); the inner integrals are then defined for almost every value of the outer variable, and are measurable functions of it. This is Folland's Thm 2.39, the form of Fubini–Tonelli for the completed product measure, which is the one that applies to Lebesgue measurable integrands. If neither hypothesis holds, the two iterated integrals can both exist and be different; see :ref[Fubini and Tonelli]{to=measure.fubini-tonelli}, where these hypotheses and a counterexample belong. Parts 1 and 2 are the cases in which $f$ is bounded on a bounded region, so that $\int \lvert f \rvert < \infty$ automatically.
:::

:::idea[Parts 1 and 2 are part 3 with the hypothesis checked]{provenance=original}
Part 3 asks for absolute integrability; parts 1 and 2 are the situations in which that comes free, because a continuous function on a compact set is bounded and a bounded function on a bounded region has a finite integral of its modulus. So the only work is bookkeeping: extend the integrand by zero outside the region, so that it is defined on the whole of $\mathbb{R}^n$ and part 3 can be quoted, and then split off one variable at a time.
:::

:::proof[Parts 1 and 2, from part 3]{provenance=adapted src="folland-1999:Thm 2.37, p. 67 and Thm 2.39, p. 68"}
**Part 1.** $f$ is continuous on the compact box $R$, hence bounded, say $\lvert f\rvert \le C$. Let $\tilde f = f$ on $R$ and $\tilde f = 0$ elsewhere. Then $\tilde f$ is Lebesgue measurable — for $c \ge 0$ the set $\{\tilde f > c\}$ is $\{x \in R: f(x) > c\}$, the intersection of $R$ with an open set because $f$ is continuous on $R$, and for $c < 0$ it is that set together with the open complement of $R$ — and
$$
\int_{\mathbb{R}^n} \lvert \tilde f\rvert \, d^nx \le C \operatorname{vol}(R) < \infty .
$$
So part 3 applies to $\tilde f$ with the splitting $\mathbb{R}^n = \mathbb{R}^{n-1}\times\mathbb{R}$ and gives
$$
\int_R f\,d^nx = \int_{\mathbb{R}^n}\tilde f \,d^nx = \int_{\mathbb{R}^{n-1}}\left( \int_{\mathbb{R}} \tilde f(x', x_n)\, dx_n\right) d^{n-1}x' ,
$$
where the inner integral is $\int_{a_n}^{b_n} f(x',x_n)\,dx_n$ for $x'$ in the box $R' = [a_1,b_1]\times\cdots\times[a_{n-1},b_{n-1}]$ and $0$ for $x'$ outside it. Repeating the step on $R'$, and $n-1$ times in all, produces the iterated integral with the variables peeled off in the order $x_n, x_{n-1}, \dots, x_1$. Lebesgue measure on $\mathbb{R}^n$ is unchanged by a permutation of the coordinates — the case $T = $ a permutation matrix, $\lvert\det T\rvert = 1$, of the change-of-variables statement below — so relabelling the variables first and then repeating the argument gives each of the $n!$ orders, all equal to $\int_R f$.

**Part 2.** The region
$$
R = \bigl\{(x,y) \in [a,b]\times\mathbb{R} \;:\; y_1(x) \le y \le y_2(x)\bigr\}
$$
is closed, being cut out of the closed set $[a,b]\times\mathbb{R}$ by the two non-strict inequalities $y - y_2(x) \le 0$ and $y_1(x) - y \le 0$ whose left sides are continuous there; and it is bounded, because $y_1$ and $y_2$ are continuous on a compact interval and so bounded. Hence $R$ is compact, and the extension $\tilde f$ of $f$ by zero is measurable with $\int\lvert\tilde f\rvert < \infty$, exactly as in part 1. Part 3 with $p = q = 1$ then gives
$$
\int_R f\, dA = \int_{\mathbb{R}^2}\tilde f \,dA = \int_{\mathbb{R}}\left(\int_{\mathbb{R}} \tilde f(x,y)\,dy\right) dx ,
$$
and for fixed $x \in [a,b]$ the function $\tilde f(x,\cdot)$ is $f(x,\cdot)$ on $[y_1(x), y_2(x)]$ and $0$ off it, while for $x \notin [a,b]$ it vanishes identically. So the right-hand side is $\int_a^b \bigl(\int_{y_1(x)}^{y_2(x)} f(x,y)\,dy\bigr)dx$, which is the claim. If $R$ has the second description as well, the same computation with the two variables exchanged — part 3 gives both iterated integrals, with the same value — yields the other order. In $n$ variables the argument is the same, applied once for each variable, the innermost limits being allowed to depend on all the outer variables because nothing above required the limits to be constants. $\square$
:::

:::note{provenance=original}
Part 3 is the Fubini–Tonelli theorem, in the form Folland states for the completed product measure (his Thm 2.39, p. 68), which is the form that applies to Lebesgue measurable integrands. It is not proved in this unit: it belongs to :ref[Fubini and Tonelli]{to=measure.fubini-tonelli}, along with the construction of the product measure and the counterexample showing that the hypothesis cannot be dropped. Everything here that needs it quotes it.
:::

:::statement[Change of variables]{provenance=adapted src="folland-1999:§2.6, Thm 2.47(a)–(b), p. 74"}
Let $\Omega \subseteq \mathbb{R}^n$ be open and let $G : \Omega \to \mathbb{R}^n$ be a $C^1$ diffeomorphism, so that $G$ is $C^1$, injective, and $\det D_uG \neq 0$ for every $u \in \Omega$. Let $f$ be a Lebesgue measurable function on $G(\Omega)$. If $f \ge 0$, or if $f$ is integrable on $G(\Omega)$, then $f \circ G$ is measurable on $\Omega$ and

$$
\int_{G(\Omega)} f(x)\, d^{n}x \;=\; \int_{\Omega} f\bigl(G(u)\bigr)\, \bigl\lvert \det D_uG \bigr\rvert \, d^{n}u .
$$

Part (b) of the same theorem is the volume rule: for Lebesgue measurable $E \subseteq \Omega$, the image $G(E)$ is measurable and

$$
\operatorname{vol}\bigl(G(E)\bigr) = \int_E \lvert \det D_uG \rvert \, d^n u
$$

— equivalently, the displayed formula applied to $f = \chi_{G(E)}$, which is the indicator function on $G(\Omega)$ that the hypotheses admit. The Jacobian factor is thus the local ratio by which $G$ stretches $n$-dimensional volume.

**Algebra of Jacobian determinants.** For composable $C^1$ changes of variables $x = x(y)$, $y = y(z)$, the chain rule and the multiplicativity of determinants give

$$
\frac{\partial(x_1,\dots,x_n)}{\partial(z_1,\dots,z_n)} = \frac{\partial(x_1,\dots,x_n)}{\partial(y_1,\dots,y_n)}\; \frac{\partial(y_1,\dots,y_n)}{\partial(z_1,\dots,z_n)},
\qquad
\frac{\partial(x_1,\dots,x_n)}{\partial(y_1,\dots,y_n)} = \left[ \frac{\partial(y_1,\dots,y_n)}{\partial(x_1,\dots,x_n)} \right]^{-1},
$$

the second with both sides evaluated at corresponding points. These help when one of the two sets of partial derivatives is much easier to compute than the other.
:::

:::idea[Why the Jacobian factor is the local volume ratio]{provenance=adapted src="folland-1999:§2.6, proof of Thm 2.47, pp. 75–76"}
Near a point $u_0$ the map $G$ agrees, to higher order, with the affine map $u \mapsto G(u_0) + D_{u_0}G\,(u - u_0)$, and an affine map multiplies the volume of every set by $\lvert\det\rvert$ of its linear part — the linear case of the theorem, which follows from Fubini–Tonelli and the one-variable scaling and translation rules. So on a cube small enough that $D_uG$ hardly varies, $G$ multiplies volume by nearly $\lvert\det D_uG\rvert$. Subdividing a cube into many such pieces and adding up gives a sum that is a Riemann-type approximation to $\int\lvert\det D_uG\rvert$, and the mesh can be sent to zero because $D_uG$ is continuous. That gives the volume rule, and the formula for integrals then follows by approximating $f$ by simple functions.
:::

:::proof[The volume rule and the algebra of Jacobian determinants]{provenance=adapted src="folland-1999:§2.6, Thm 2.47(b), p. 74; arfken-2013:§4.4, Eq. (4.75), p. 230; rhb-2006:§6.4.4, Eqs. (6.16)–(6.17), pp. 206–207"}
*The volume rule, given the integral formula.* Let $E \subseteq \Omega$ be Lebesgue measurable; that $G(E)$ is again measurable is part of Folland's statement and is not re-proved here. The function $f = \chi_{G(E)}$ is measurable and non-negative on $G(\Omega)$, so the hypotheses of the displayed formula are met, and its left-hand side is $\int_{G(\Omega)}\chi_{G(E)}\,d^nx = \operatorname{vol}(G(E))$. On the right, $\chi_{G(E)}(G(u)) = 1$ exactly when $G(u) \in G(E)$, which by the injectivity of $G$ happens exactly when $u \in E$; so $\chi_{G(E)}\circ G = \chi_E$ and the right-hand side is $\int_E\lvert\det D_uG\rvert\,d^nu$. This is the volume rule, and it is why injectivity, and not merely the non-vanishing of the determinant, is needed: a map that covered part of $G(\Omega)$ twice would make $\chi_{G(E)}\circ G$ larger than $\chi_E$.

*The composition rule.* Let $x = x(y)$ and $y = y(z)$ be $C^1$ with the composite defined. The :ref[chain rule]{to=found.partial-derivatives-chain-rule} gives $D_z x = (D_yx)(D_zy)$ at corresponding points, and the determinant of a product of square matrices is the product of the determinants, which is the first display.

*The reciprocal rule.* Apply the composition rule with $z = x$, so that the composite is the identity map, whose derivative is $I$ with determinant $1$:
$$
\frac{\partial(x_1,\dots,x_n)}{\partial(y_1,\dots,y_n)}\;\frac{\partial(y_1,\dots,y_n)}{\partial(x_1,\dots,x_n)} = 1 ,
$$
both factors evaluated at corresponding points. This is the second display, and it is part 2 of the :ref[inverse function theorem]{to=found.implicit-inverse-function} read as an identity between determinants — the relation Arfken writes as $J^{-1} = \partial(u)/\partial(x)$. In particular neither determinant can vanish where the other is defined. $\square$
:::

:::note{provenance=original}
The change-of-variables formula itself — the first display of the statement — is not proved in this handbook. Folland's proof (§2.6, pp. 75–76) runs along the lines of the idea above: it settles the linear case first, then bounds the measure of the image of a cube by that of the image of its affine approximation, sums over a fine subdivision and passes to the limit, and finally extends from indicator functions to simple and then to measurable functions by monotone convergence. It needs his decomposition of an open set into cubes with disjoint interiors and the regularity of Lebesgue measure, neither of which is developed here; he also notes (p. 74) that he proves a more general result by different methods in his §11.2. Everything else in this unit is proved from the formula, not alongside it.
:::

:::statement[The three standard coordinate maps]{provenance=adapted src="rhb-2006:§6.4.3, p. 205; lee-2013:App. C, Examples C.37–C.38, pp. 660–661; arfken-2013:§1.10, p. 73"}
Each map below is a $C^\infty$ diffeomorphism from the stated open set onto its image, whose complement in $\mathbb{R}^n$ is a Lebesgue null set; so by the change-of-variables theorem the resulting formula computes the integral over all of $\mathbb{R}^n$.

1. **Plane polar.** $G(r,\varphi) = (r\cos\varphi,\; r\sin\varphi)$ on $(0,\infty) \times (-\pi,\pi)$, with image $\mathbb{R}^2$ minus the closed half-line $\{(x,0) : x \le 0\}$:
   $$
   \det DG = r, \qquad dA = r\, dr\, d\varphi .
   $$
2. **Cylindrical polar.** $G(\rho,\varphi,z) = (\rho\cos\varphi,\; \rho\sin\varphi,\; z)$ on $(0,\infty) \times (-\pi,\pi) \times \mathbb{R}$, with image $\mathbb{R}^3$ minus the closed half-plane $\{(x,0,z) : x \le 0\}$:
   $$
   \det DG = \rho, \qquad dV = \rho\, d\rho\, d\varphi\, dz .
   $$
3. **Spherical polar** (physics convention: $\theta$ the polar angle from the positive $z$-axis, $\varphi$ the azimuth). $G(r,\theta,\varphi) = (r\sin\theta\cos\varphi,\; r\sin\theta\sin\varphi,\; r\cos\theta)$ on $(0,\infty) \times (0,\pi) \times (-\pi,\pi)$, with the same image as in 2:
   $$
   \det DG = r^2 \sin\theta, \qquad dV = r^2 \sin\theta\, dr\, d\theta\, d\varphi .
   $$
   Since $0 < \theta < \pi$, $\sin\theta > 0$ and the absolute value may be dropped.
:::

:::idea[The three coordinate maps]{provenance=original}
Each determinant is a direct computation. The real content is set-theoretic: the map is injective on the stated box because it can be inverted by hand — the radius is the norm of the point, the polar angle comes from the last coordinate, the azimuth from the first two — and the injectivity of the azimuth is just the fact that two angles in an interval of length $2\pi$ with the same sine and cosine are equal. What the box leaves out is a piece of a hyperplane, which is null because each of its one-dimensional sections is a single point, and Tonelli turns that into a statement about $n$-dimensional measure.
:::

:::proof[The three coordinate maps]{provenance=adapted src="rhb-2006:§6.4.3, p. 205; lee-2013:App. C, Examples C.37–C.38, pp. 660–661"}
1. *The determinants.* For plane polar,
   $$
   DG(r,\varphi) = \begin{pmatrix} \cos\varphi & -r\sin\varphi \\ \sin\varphi & r\cos\varphi\end{pmatrix}, \qquad \det DG = r\cos^2\varphi + r\sin^2\varphi = r .
   $$
   For cylindrical polar the matrix is
   $$
   DG(\rho,\varphi,z) = \begin{pmatrix} \cos\varphi & -\rho\sin\varphi & 0 \\ \sin\varphi & \rho\cos\varphi & 0 \\ 0 & 0 & 1\end{pmatrix},
   $$
   and expanding along the last row gives $\det DG = \rho$, the previous determinant. For spherical polar,
   $$
   DG(r,\theta,\varphi) = \begin{pmatrix} \sin\theta\cos\varphi & r\cos\theta\cos\varphi & -r\sin\theta\sin\varphi \\ \sin\theta\sin\varphi & r\cos\theta\sin\varphi & r\sin\theta\cos\varphi \\ \cos\theta & -r\sin\theta & 0\end{pmatrix} ;
   $$
   expanding along the last row, the cofactor of the $(3,1)$ entry is
   $$
   r^2\cos\theta\sin\theta\cos^2\varphi + r^2\sin\theta\cos\theta\sin^2\varphi = r^2\sin\theta\cos\theta ,
   $$
   and that of the $(3,2)$ entry is $-\bigl(r\sin^2\theta\cos^2\varphi + r\sin^2\theta\sin^2\varphi\bigr) = -r\sin^2\theta$, so
   $$
   \det DG = \cos\theta\cdot r^2\sin\theta\cos\theta + (-r\sin\theta)\cdot(-r\sin^2\theta) = r^2\sin\theta\,(\cos^2\theta + \sin^2\theta) = r^2\sin\theta .
   $$
   On each box the determinant is positive, since $r, \rho > 0$ and $\sin\theta > 0$ for $0 < \theta < \pi$.
2. *Injectivity, and the image, for plane polar.* Let $x = G(r,\varphi)$ with $(r,\varphi) \in (0,\infty)\times(-\pi,\pi)$. Then $\lvert x\rvert = r$, so $r$ is determined by $x$; and $x/r = (\cos\varphi,\sin\varphi)$, so $\varphi$ is determined too, because if $\cos\varphi = \cos\varphi'$ and $\sin\varphi = \sin\varphi'$ then $\varphi - \varphi' \in 2\pi\mathbb{Z}$, and the only member of $2\pi\mathbb{Z}$ in $(-2\pi,2\pi)$ is $0$. So $G$ is injective. Its image omits the origin ($r > 0$) and omits the points with $x/\lvert x\rvert = (-1,0)$, which is the case $\varphi = \pm\pi$, excluded from the box; everything else is attained, by taking $r = \lvert x\rvert$ and $\varphi$ the unique angle in $(-\pi,\pi)$ with $(\cos\varphi,\sin\varphi) = x/\lvert x\rvert$. The image is therefore $\mathbb{R}^2$ minus the closed half-line $\{(x,0) : x \le 0\}$.
3. *Cylindrical polar.* The first two coordinates are the plane polar map and the third is the identity, so injectivity and the image follow from step 2 applied in each horizontal plane: the complement of the image is the closed half-plane $\{(x,0,z) : x \le 0\}$.
4. *Spherical polar.* Let $x = G(r,\theta,\varphi)$ on the stated box. Then $\lvert x\rvert^2 = r^2\sin^2\theta(\cos^2\varphi+\sin^2\varphi) + r^2\cos^2\theta = r^2$, so $r = \lvert x\rvert$ is determined. Next $x_3/r = \cos\theta$, and $\cos$ is injective on $(0,\pi)$, so $\theta$ is determined. Then $\sin\theta > 0$ and $r\sin\theta = \sqrt{r^2 - x_3^2} = \lvert(x_1,x_2)\rvert$, so $(x_1,x_2)/(r\sin\theta)$ is a unit vector equal to $(\cos\varphi,\sin\varphi)$, and $\varphi$ is determined as in step 2. So $G$ is injective. Conversely, let $x$ be outside the closed half-plane $\{(x,0,z) : x\le 0\}$; then $(x_1,x_2) \neq (0,0)$ and $(x_1,x_2)/\lvert(x_1,x_2)\rvert \ne (-1,0)$, so putting $r = \lvert x\rvert > 0$, $\theta = \arccos(x_3/r) \in (0,\pi)$ and $\varphi$ the unique angle in $(-\pi,\pi)$ with $(\cos\varphi,\sin\varphi) = (x_1,x_2)/\lvert(x_1,x_2)\rvert$ recovers $x = G(r,\theta,\varphi)$. Points of that half-plane are not attained: $r>0$ excludes the origin, $0<\theta<\pi$ excludes the rest of the $z$-axis, and $\lvert\varphi\rvert < \pi$ excludes the open half-plane $\{(x,0,z): x<0\}$. So the image is the same as in step 3.
5. *The omitted sets are null.* In $\mathbb{R}^2$ the complement of the image lies in the line $L = \{(x,y) : y = 0\}$, which is closed and hence measurable, and by part 3 of the first statement, applied to the non-negative function $\chi_L$,
   $$
   \operatorname{vol}(L) = \int_{\mathbb{R}}\left(\int_{\mathbb{R}} \chi_L(x,y)\, dy\right) dx = \int_{\mathbb{R}} 0 \, dx = 0 ,
   $$
   because for each fixed $x$ the inner integrand is the indicator of the single point $y = 0$. The same computation in $\mathbb{R}^3$, integrating in $y$ first, gives measure $0$ for the plane $\{y = 0\}$ and hence for the closed half-plane inside it. A subset of a null set is null.
6. *The formulas.* Each $G$ is $C^\infty$, injective, and has non-vanishing Jacobian determinant on its box, so it is a $C^1$ diffeomorphism in the sense used here and the change-of-variables theorem applies with $\lvert \det DG\rvert$ equal to $r$, $\rho$ and $r^2\sin\theta$ respectively. Since $\mathbb{R}^n \setminus G(\Omega)$ is null, $\int_{\mathbb{R}^n} f = \int_{G(\Omega)}f$ for every $f$ that is non-negative or integrable, which is the clause at the head of the statement. $\square$
:::

:::note{provenance=original}
**What it means.** Two different reductions are in play. An iterated integral turns one $n$-dimensional integral into $n$ one-dimensional ones; what must be checked is absolute integrability, and what is gained is that each stage is one-variable calculus. A change of variables replaces the region by an easier one; what must be checked is that the new coordinates label each point of the region once, and the price is the Jacobian factor, the local volume distortion of the coordinate map. In practice: choose coordinates that make the region a box, then iterate.
:::

:::method[Computing a multiple integral]{provenance=adapted src="rhb-2006:§6.1, pp. 188–190 and §6.4.3, p. 205; arfken-2013:§1.10, p. 73"}
1. **Describe the region** $R$ by inequalities, and sketch it if $n \le 3$. The limits are a property of $R$, not of the integrand.
2. **Choose coordinates.** Pick a map $G$ making $R$ the image of a box or of a region with simple limits: polar or cylindrical for symmetry about an axis, spherical for symmetry about a point, a linear map for an ellipsoid or a parallelepiped.
3. **Check the map on the open set you will integrate over:** $G$ must be $C^1$, injective and have non-vanishing Jacobian determinant there. Excluding a null set — the origin, a half-plane cut, an axis — to achieve this does not change the integral.
4. **Compute the Jacobian factor** $\lvert \det D_uG \rvert$; if the inverse map is the one given to you, compute $\partial(u)/\partial(x)$ and take the reciprocal.
5. **Substitute:** $f(x) \mapsto f(G(u))$, $d^nx \mapsto \lvert \det D_uG\rvert\,d^nu$, and $R \mapsto G^{-1}(R)$.
6. **Justify iterating, then iterate.** Check that the integrand is non-negative, or that the integral of its absolute value is finite — Tonelli applied to $\lvert f\rvert$ is the usual way — then iterate in whichever order makes the limits simplest. Under the same condition the order may be exchanged, which often turns variable limits into constants.

**How it fails.** Step 3 is where most errors occur: a map that covers part of the region twice doubles that part's contribution, and one whose Jacobian determinant vanishes on a set of positive measure is not a diffeomorphism there at all. Step 6 cannot be skipped when $f$ changes sign and the region is unbounded, or when $f$ is unbounded: both iterated integrals can then exist and differ. For a region with part of its boundary at infinity the integral is a limit over an increasing family of bounded regions, and arguments that "neglect" the corners of that family are not valid — Arfken's warning on p. 73.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and conventions that differ.**

- *Injectivity.* The polar map on $(0,\infty)\times(0,4\pi)$ has Jacobian determinant $r \ne 0$ throughout but wraps the punctured plane twice, and the formula applied to it returns exactly twice the correct answer. Non-vanishing of the determinant is local and does not give injectivity; both are hypotheses.
- *Null sets removed to get a diffeomorphism.* The polar map is not injective on $(0,\infty)\times[-\pi,\pi]$, since the ends of the $\varphi$-interval give the same points; on $[0,\infty)\times[-\pi,\pi]$ the determinant also vanishes, along $r = 0$. The spherical map degenerates likewise at $\theta \in \{0,\pi\}$. Deleting these sets costs nothing, because their images — a half-line in $\mathbb{R}^2$, a half-plane and an axis in $\mathbb{R}^3$ — are Lebesgue null.
- *The integrability hypothesis in Fubini.* Both iterated integrals can exist and disagree when $\int\lvert f\rvert = \infty$; Folland's remarks after Thm 2.37 record this and send the reader to his Exercises 47 and 48 (pp. 68–69) for the examples, and Riley, Hobson and Bence warn about unbounded regions and discontinuous integrands for the same reason. For non-negative integrands no such hypothesis is needed.
- *Which matrix, and whether it is transposed.* Arfken (Eq. (4.74)) and Riley, Hobson and Bence (p. 205) lay the Jacobian matrix out with $\partial x_j/\partial u_i$ in row $i$, the transpose of the convention used here. Transposition does not change a determinant, so every formula above is the same either way; the layout matters only if the matrix itself is wanted.
- *Spherical angle names.* We use the physics convention, $\theta$ the polar angle and $\varphi$ the azimuth, giving $r^2\sin\theta$, as do Riley, Hobson and Bence (p. 205). Lee's Example C.38 writes the same map as $(\rho,\varphi,\theta)$ with $\varphi$ from the positive $z$-axis and $\theta$ the azimuth, and so records the determinant as $\rho^2\sin\varphi$. Only the names differ, but mixing them silently exchanges the two angles.
- *Relation to the elementary statement.* The theorem above is Folland's, for Lebesgue measurable $f$; for continuous $f$ on a bounded region with null boundary it reduces to the Riemann-integral version of calculus texts. Riley, Hobson and Bence state the $n$-dimensional rule without proof (§6.4.4) and derive the volume element geometrically from a parallelepiped.
:::

:::example[A region that becomes a box, and an integral over a ball]{provenance=original}
**(a) Hyperbolic coordinates.** Let $D$ be the part of the open first quadrant between the hyperbolas $xy = 1$ and $xy = 4$ and between the lines $y = x$ and $y = 4x$. Compute the area of $D$ and $\iint_D xy \, dA$.

*Step 1, the region.* $D = \{(x,y) : x>0,\ y>0,\ 1 \le xy \le 4,\ 1 \le y/x \le 4\}$, a curvilinear quadrilateral with no description by simple limits in $x$ and $y$: the roles of the two hyperbolas and the two lines change as $x$ increases.

*Step 2, the coordinates.* The two pairs of boundary curves are level sets of $u = xy$ and $v = y/x$, so take these as the new variables. On the open first quadrant $Q = (0,\infty)^2$ the map $\Psi(x,y) = (xy,\, y/x)$ has the explicit inverse
$$
G(u,v) = \Bigl( \sqrt{u/v},\; \sqrt{uv} \Bigr), \qquad (u,v) \in (0,\infty)^2 ,
$$
as one checks by composing both ways, and $D = G\bigl([1,4]\times[1,4]\bigr)$: a box.

*Step 3, the map is admissible.* $G$ is $C^\infty$ on $(0,\infty)^2$ and injective, having the inverse $\Psi$. The boundary of the box is a null set, so we may work on the open box $B = (1,4)\times(1,4)$ and integrate over $G(B)$: it differs from $D$ by the image of that boundary, which is null by the volume rule, $\operatorname{vol}(G(N)) = \int_N\lvert\det D G\rvert = 0$ for a null $N$.

*Step 4, the Jacobian factor, by the reciprocal rule.* It is easier to differentiate $\Psi$:
$$
\frac{\partial(u,v)}{\partial(x,y)} = \det\begin{pmatrix} y & x \\ -y/x^2 & 1/x\end{pmatrix} = \frac{y}{x} + \frac{xy}{x^2} = \frac{2y}{x} = 2v ,
$$
so by the reciprocal rule $\det D_{(u,v)}G = 1/(2v)$, which is positive, and the Jacobian factor is $1/(2v)$.

*Steps 5 and 6, substitute and iterate.* Both integrands below are non-negative, so Tonelli licenses the iteration in either order. For the area,
$$
\operatorname{area}(D) = \iint_B \frac{du\,dv}{2v} = \left(\int_1^4 du\right)\left(\int_1^4 \frac{dv}{2v}\right) = 3 \cdot \tfrac12\ln 4 = 3\ln 2 \approx 2.079442 .
$$
For the second integral, $xy = u$ in the new variables, so
$$
\iint_D xy\, dA = \iint_B \frac{u}{2v}\,du\,dv = \left(\int_1^4 u\,du\right)\left(\int_1^4\frac{dv}{2v}\right) = \frac{15}{2}\ln 2 \approx 5.198604 .
$$
*Check.* Integrating numerically in the original variables, over $x$ from $1/2$ to $2$ with $y$ between $\max(1/x, x)$ and $\min(4/x, 4x)$, gives $2.0794415$ and $5.1986039$ — the closed forms to seven figures.

**(b) Spherical coordinates.** Compute $I = \int_{B_R}(x^2+y^2)\,dV$ over the ball $\lvert x\rvert \le R$. In spherical polars $x^2+y^2 = r^2\sin^2\theta$ and $dV = r^2\sin\theta\,dr\,d\theta\,d\varphi$, and the ball minus a null set is the image of the box $(0,R)\times(0,\pi)\times(-\pi,\pi)$, so
$$
I = \int_{-\pi}^{\pi}\!\!\int_0^{\pi}\!\!\int_0^{R} r^4\sin^3\theta \, dr\, d\theta\, d\varphi = 2\pi \cdot \frac{R^5}{5}\cdot \int_0^\pi \sin^3\theta\,d\theta = 2\pi\cdot\frac{R^5}{5}\cdot\frac43 = \frac{8\pi R^5}{15},
$$
using $\int_0^\pi\sin^3\theta\,d\theta = \int_{-1}^{1}(1-c^2)\,dc = 4/3$ with $c = \cos\theta$. For $R = 1$ this is $8\pi/15 \approx 1.675516$. The three integrals separated because the integrand factorised and the limits were constants — which is the whole point of choosing coordinates that turn the region into a box.
:::

:::application[Moments of inertia, and the Maxwell speed distribution]{provenance=original}
**A uniform solid ellipsoid.** Let $E = \{x^2/a^2 + y^2/b^2 + z^2/c^2 \le 1\}$ carry total mass $M$ at constant density $\rho = M/\operatorname{vol}(E)$. Its moment of inertia about the $z$-axis is $I_z = \rho\int_E (x^2+y^2)\,dV$. Two changes of variables do the whole computation.

First the linear map $G(u) = (au_1, bu_2, cu_3)$, with constant $\det DG = abc$, which carries the closed unit ball $B$ onto $E$; the volume rule gives $\operatorname{vol}(E) = abc\operatorname{vol}(B) = \tfrac43\pi abc$, and
$$
\int_E (x^2+y^2)\,dV = abc\int_B \bigl(a^2u_1^2 + b^2u_2^2\bigr)\,dV .
$$
Then spherical polars on $B$: $\int_B \lvert u\rvert^2 dV = \int_0^1 r^2\cdot 4\pi r^2\,dr = 4\pi/5$, and since $\int_Bu_1^2 = \int_Bu_2^2 = \int_Bu_3^2$ by the symmetry of $B$ under permuting coordinates, each equals $\tfrac13\cdot4\pi/5 = 4\pi/15$. Hence
$$
I_z = \frac{3M}{4\pi abc}\cdot abc\,(a^2+b^2)\,\frac{4\pi}{15} = \frac{M\,(a^2+b^2)}{5},
$$
which for $a=b=c=R$ is the familiar $\tfrac25 MR^2$ of a uniform sphere. Nothing but the Jacobian factors $abc$ and $r^2\sin\theta$ was needed; attempting the same integral in Cartesian coordinates means three nested square-root limits.

**The Maxwell speed distribution.** In the kinetic theory of gases the velocity $v \in \mathbb{R}^3$ of a molecule of mass $m$ at temperature $T$ has probability density
$$
f(v) = \left(\frac{m}{2\pi kT}\right)^{3/2} e^{-m\lvert v\rvert^2/(2kT)} ,
$$
which is largest at $v = 0$. The distribution of the *speed* $\lvert v\rvert$ is obtained by changing to spherical coordinates in velocity space, where $d^3v = v^2\sin\theta\,dv\,d\theta\,d\varphi$: since $f$ depends only on $v = \lvert v\rvert$, the two angular integrations give the factor $\int_{-\pi}^{\pi}\int_0^\pi \sin\theta\,d\theta\,d\varphi = 4\pi$ and
$$
F(v) = 4\pi v^2\left(\frac{m}{2\pi kT}\right)^{3/2} e^{-mv^2/(2kT)} .
$$
The famous $v^2$ in front is precisely the Jacobian factor, with the surface of the sphere of radius $v$ folded into it. It is also what makes $F(0) = 0$ and puts the most probable speed at
$$
\frac{dF}{dv} = 0 \;\Longrightarrow\; 2v = \frac{mv^2}{kT}\,v \;\Longrightarrow\; v_{\mathrm{mp}} = \sqrt{\frac{2kT}{m}} ,
$$
strictly positive, even though the most probable velocity *vector* is zero. The apparent paradox is entirely a matter of the volume element: few molecules have small speed because there is little room in velocity space at small $\lvert v\rvert$.
:::
