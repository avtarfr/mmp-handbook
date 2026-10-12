---
id: complex.conformal-mappings
title: Conformal mappings
kind: method
level: core
summary: An analytic map with non-vanishing derivative turns and rescales a small figure without distorting it, Mobius maps carry circles and lines to circles and lines, and a harmonic function composed with such a map stays harmonic -- which is how an awkward two-dimensional Laplace problem is transported to a geometry one can solve by inspection.
prereqs: [complex.cauchy-riemann, complex.elementary-functions]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 3, §2.3 (conformal mapping) and §2.4 (length and area), pp. 73-76; §3.1 the linear group and its decomposition, §3.2 the cross ratio with Theorems 12-14, §3.3 symmetry, pp. 76-82; §4.1 level curves and the power map, pp. 89-90; Ch. 6, §1.1, Theorem 1 (Riemann mapping theorem), p. 230"
    pages: "73-82, 89-90, 230"
    role: conformality at a point and its partial converse; the local scale factor and the area factor; Mobius transformations as a group, their decomposition into elementary maps, invariance of the cross ratio and the circle-to-circle theorem; the power map on sectors; the statement of the Riemann mapping theorem
  - work: rhb-2006
    loc: "§24.7, the four listed properties of a conformal transformation, Eqs. (24.25)-(24.29), the half-plane-to-disk map of Fig. 24.4 and the Schwarz-Christoffel formula (24.30), pp. 839-843; §25.2, transporting a known solution of Laplace's equation to a new geometry, pp. 876-878"
    pages: "839-843, 876-878"
    role: the magnification and rotation relations and the transport of Laplace's equation and of constant boundary values; the alternative definition of "conformal" as an analytic map with an analytic inverse; the wedge example and the Schwarz-Christoffel formula
  - work: hassani-2013
    loc: "§10.3, Conformal Maps: the two requirements a useful change of variable must meet, Proposition 10.3.1, the list of elementary maps and Eq. (10.8), Example 10.3.2 (inversion sends a circle to a circle or a line), pp. 304-307"
    pages: "304-307"
    role: the definition of a conformal mapping as an angle-preserving mapping, the reason angle preservation is the property a field-line picture needs, and the inversion calculation for circles
---

:::note{provenance=original}
**What it means.** Analytic functions are rigid in a very useful way. Near a point where $f'(z_0) \neq 0$, the map $z \mapsto f(z)$ does to a small figure exactly what multiplication by the single complex number $f'(z_0)$ does: it turns it through $\arg f'(z_0)$ and scales it by $\lvert f'(z_0)\rvert$. Every direction is turned by the same angle and every length scaled by the same factor, so angles between curves survive and small shapes are reproduced, merely rotated and resized. That is all "conformal" means.

Two consequences make it a working tool rather than a curiosity. First, a harmonic function pulled back through an analytic map is still harmonic, and a level set is still a level set, so a solved Laplace problem in one region becomes a solved Laplace problem in every region analytically equivalent to it. Second, the simplest non-trivial analytic maps -- the Mobius maps $(az+b)/(cz+d)$ -- move circles, lines, half-planes and disks around freely, and the power and exponential maps open and close corners. Between them they reach most of the two-dimensional geometries that electrostatics and ideal fluid flow actually present.
:::

:::definition[Conformal at a point]{provenance=adapted src="ahlfors-1979:Ch. 3, §2.3, pp. 73-74; hassani-2013:§10.3, p. 305; rhb-2006:§24.7, pp. 839-840"}
Let $\Omega \subseteq \mathbb{C}$ be open, let $f : \Omega \to \mathbb{C}$ be continuous, and let $z_0 \in \Omega$. Let $\gamma_1, \gamma_2$ be smooth arcs in $\Omega$ through $z_0$ with non-vanishing tangents there, and let $\gamma_1' , \gamma_2'$ be their images under $f$, that is $t \mapsto f(\gamma_j(t))$.

The map $f$ is **conformal at $z_0$** if, for every such pair, the image arcs have non-vanishing tangents at $f(z_0)$ and the angle from $\gamma_1'$ to $\gamma_2'$ there equals the angle from $\gamma_1$ to $\gamma_2$ at $z_0$, **including its sign**. A map is conformal on $\Omega$ if it is conformal at every point of $\Omega$; it is a **conformal equivalence** of $\Omega$ onto $\Omega_0$ if in addition it is a bijection of $\Omega$ onto $\Omega_0$.

If the angles come out equal in size but reversed in sign, the map is called **indirectly conformal**; $z \mapsto \overline{z}$ is the basic example.

**A clash of definitions, worth knowing about.** This is the sense used by Hassani (p. 305), for whom a conformal mapping is one under which the angle at which two given curves cross is unchanged, and by Ahlfors (p. 73), who says that $w = f(z)$ is conformal at every point where $f'(z) \neq 0$. Riley, Hobson and Bence (pp. 839-840) reserve the word for something else: for them a mapping is conformal when $w = g(z)$ and its inverse $z = h(w)$ are both analytic apart from isolated points, that is, when it is a conformal *equivalence* in the above language, with the isolated bad points tolerated. Their properties (i)-(iv) are then stated with the exception clause "except at points at which $g'(z)$, and hence $h'(z)$, is zero or infinite" attached -- quoted as printed, although $h$ was introduced one page earlier as the inverse $z = h(w)$, a function of $w$. The two usages agree wherever $g$ is injective with $g' \neq 0$, which is the only situation in which either is used below; this unit follows the pointwise definition and says "conformal equivalence" when bijectivity is meant.
:::

:::statement[Analytic maps are conformal where the derivative does not vanish]{provenance=adapted src="ahlfors-1979:Ch. 3, §2.3, Eqs. (1)-(2) and §2.4, Eq. (6), pp. 73-76; rhb-2006:§24.7, Eqs. (24.26)-(24.27), p. 841"}
Let $f$ be analytic on an open set $\Omega$ and let $z_0 \in \Omega$ with $f'(z_0) \neq 0$. Then:

1. **Angles.** $f$ is conformal at $z_0$. More precisely, every smooth arc through $z_0$ with non-vanishing tangent has an image arc whose tangent direction at $f(z_0)$ is the original tangent direction turned through $\arg f'(z_0)$ -- the same angle for every arc.
2. **Lengths.** $\displaystyle \lim_{z \to z_0} \frac{\lvert f(z) - f(z_0)\rvert}{\lvert z - z_0\rvert} = \lvert f'(z_0)\rvert$, so the local change of scale is $\lvert f'(z_0)\rvert$ in every direction.
3. **Areas.** For a set $E \subset \Omega$ with area and on which $f$ is injective, $\displaystyle \operatorname{area} f(E) = \iint_E \lvert f'(z)\rvert^2\, dx\, dy$: the local area factor is $\lvert f'(z)\rvert^2$.
4. **Local invertibility.** $f$ is injective on some neighbourhood of $z_0$, and the inverse is analytic there with derivative $1/f'(z_0)$ at $f(z_0)$.

A partial converse holds. Suppose $f = u + iv$ has continuous first partial derivatives on $\Omega$. If $f$ preserves angles at every point in the above sense, then $u$ and $v$ satisfy the Cauchy-Riemann equations, so $f$ is analytic. If instead only the isotropy of the scale change is assumed, then at each point either the Cauchy-Riemann equations hold or the conjugate equations do, so $f$ is locally either analytic or the conjugate of an analytic function. Ahlfors derives both statements from the same circle argument (p. 74).
:::

:::idea{provenance=original}
A smooth arc is described by $t \mapsto \gamma(t)$, and its image by $t \mapsto f(\gamma(t))$. The chain rule gives the image tangent as a product,
$$
\frac{d}{dt} f(\gamma(t)) = f'(\gamma(t))\, \gamma'(t) ,
$$
and multiplication of complex numbers adds arguments and multiplies moduli. So at $z_0$ every tangent vector is turned by the one angle $\arg f'(z_0)$ and stretched by the one factor $\lvert f'(z_0)\rvert$, no matter which arc it belonged to. A difference of two turned angles is the difference of the original two: that is conformality. The converse direction is the same identity read backwards: the most general real-linear map of the plane is $h \mapsto \alpha h + \beta \overline{h}$, and such a map turns all directions by one angle only when $\beta = 0$, which is the Cauchy-Riemann condition.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 3, §2.3-§2.4, pp. 73-76"}
Write $w(t) = f(\gamma(t))$.

1. Since $f$ is analytic and $\gamma$ differentiable, $w'(t_0) = f'(z_0)\gamma'(t_0)$. Both factors are non-zero -- $f'(z_0) \neq 0$ by hypothesis and $\gamma'(t_0) \neq 0$ because the arc was assumed to have a non-vanishing tangent -- so $w'(t_0) \neq 0$ and the image arc has a tangent at $f(z_0)$. Taking arguments,
   $$
   \arg w'(t_0) = \arg f'(z_0) + \arg \gamma'(t_0) \pmod{2\pi} .
   $$
   The added term does not depend on the arc. Applying this to two arcs and subtracting, the angle between the image tangents equals the angle between the original tangents, with its sign, which is claim 1.

2. Claim 2 is the definition of the derivative with moduli taken: $\lvert f(z) - f(z_0)\rvert / \lvert z - z_0\rvert \to \lvert f'(z_0)\rvert$.

3. For claim 3, regard $f$ as the real map $(x,y) \mapsto (u,v)$. The change-of-variables formula gives $\operatorname{area} f(E) = \iint_E \lvert u_x v_y - u_y v_x\rvert\,dx\,dy$. By the Cauchy-Riemann equations $u_x = v_y$ and $u_y = -v_x$, so the Jacobian determinant is $u_x^2 + u_y^2 = \lvert f'\rvert^2$, which is already non-negative. Hence the area factor is $\lvert f'\rvert^2$, as claimed. (This is also why a conformal map cannot reverse orientation: its Jacobian determinant is a square.)

4. Claim 4 is the inverse function theorem of real calculus applied to the same real map: the Jacobian determinant at $z_0$ is $\lvert f'(z_0)\rvert^2 \neq 0$, so $f$ is a diffeomorphism of a neighbourhood of $z_0$ onto a neighbourhood of $f(z_0)$. Writing $g$ for the inverse and differentiating $g(f(z)) = z$ along any direction shows $g$ is complex-differentiable with $g'(f(z_0)) = 1/f'(z_0)$.

For the converse, let $h \to 0$ in $\mathbb{C}$. Continuity of the partials makes $f$ real-differentiable, and the real derivative can always be written
$$
f(z_0 + h) - f(z_0) = \alpha h + \beta \overline{h} + o(\lvert h\rvert),
\qquad
\alpha = \tfrac12\!\left(\frac{\partial f}{\partial x} - i \frac{\partial f}{\partial y}\right),
\quad
\beta = \tfrac12\!\left(\frac{\partial f}{\partial x} + i \frac{\partial f}{\partial y}\right) .
$$
Take $h = \rho e^{i\theta}$ and divide by $h$: the leading behaviour of the quotient is $\alpha + \beta e^{-2i\theta}$, which as $\theta$ runs over $[0,2\pi)$ traces the circle of centre $\alpha$ and radius $\lvert\beta\rvert$ twice. Angle preservation requires the argument of that quotient to be independent of $\theta$, and the argument is constant on a circle only if the circle degenerates to a point, that is $\beta = 0$: this is $\partial f/\partial x = -i\,\partial f/\partial y$, the Cauchy-Riemann equations in complex form. Isotropy of the scale change requires instead the *modulus* to be independent of $\theta$, and the modulus is constant on a circle only if $\lvert\beta\rvert = 0$ or the centre is the origin, giving $\beta = 0$ (analytic) or $\alpha = 0$ (conjugate of analytic). $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="ahlfors-1979:Ch. 3, §2.3, pp. 74-75 and §4.1, p. 90; rhb-2006:§24.7, p. 841 and §25.2, p. 878"}
- **$f'(z_0) \neq 0$ is what makes angles survive.** It enters claim 1 twice: to give the image arc a tangent at all, and to make $\arg f'(z_0)$ a well-defined turning angle. Where $f'(z_0) = 0$ the angle is not merely undefined, it is genuinely wrong. If $f(z) - f(z_0)$ has a zero of order $m \geq 2$ at $z_0$, then $f(z) - f(z_0) = (z-z_0)^m\,\varphi(z)$ with $\varphi(z_0) \neq 0$, and an angle $\theta$ at $z_0$ opens into an angle $m\theta$ at $f(z_0)$. The cleanest case is $f(z) = z^2$ at the origin: $\lvert w \rvert = \lvert z\rvert^2$ and $\arg w = 2 \arg z$, so the first quadrant becomes the upper half-plane and the right angle at the origin is flattened to $\pi$. Riley, Hobson and Bence make exactly this point (p. 878) about the maps $w = z^2$ and $w = z^{1/2}$ they use: because $g'$ is $0$ or $\infty$ at the origin, no angle statement is violated there. Riley, Hobson and Bence call the points where $g' = 0$ the **critical points** of the transformation (p. 841), because the rotation angle $\arg g'$ is undefined there.
- **Conformality is local; it is not injectivity.** $f'$ can be non-zero throughout $\Omega$ and $f$ still fold $\Omega$ over itself, as $f(z) = z^2$ does on the annulus $1 < \lvert z\rvert < 2$, or $f(z) = e^z$ on any horizontal strip of height more than $2\pi$. Claim 4 gives injectivity only on *some* neighbourhood of each point; Ahlfors illustrates the global failure with a region whose image covers part of itself twice (p. 75), the picture that motivates a :ref[Riemann surface]{to=complex.riemann-surfaces}.
- **The sign of the angle needs analyticity, not merely conjugate-analyticity.** $z \mapsto \overline{z}$ preserves every angle in size and reverses every one in sense, and it preserves lengths exactly. It fails the definition above, and it is indeed not analytic. This is why the partial converse has two branches: isotropy of scale alone cannot tell $f$ from $\overline{f}$.
- **Continuity of the partials is needed for the converse, not for the forward direction.** Without some regularity, pointwise angle preservation at a single point is too weak to force differentiability, which is why Ahlfors assumes $\partial f/\partial x$ and $\partial f /\partial y$ continuous before running the circle argument.
:::

:::definition[Mobius transformation]{provenance=adapted src="ahlfors-1979:Ch. 3, §3.1, Eq. (7), pp. 76-78; hassani-2013:§10.3, Eq. (10.8), p. 306"}
A **Mobius transformation** (Ahlfors: *linear transformation*; Hassani: *homographic transformation*) is a map of the extended plane $\widehat{\mathbb{C}} = \mathbb{C}\cup\{\infty\}$ of the form
$$
S(z) = \frac{az+b}{cz+d}, \qquad a,b,c,d \in \mathbb{C}, \qquad ad - bc \neq 0 ,
$$
with the conventions $S(\infty) = a/c$ and $S(-d/c) = \infty$ when $c \neq 0$, and $S(\infty) = \infty$ when $c = 0$. These are the values the formula tends to, so $S$ is continuous on $\widehat{\mathbb{C}}$ with its spherical topology.

Three facts follow at once from the formula.

- **Bijectivity.** $S$ has the inverse $S^{-1}(w) = (dw-b)/(-cw+a)$, again of the same form with the same non-zero determinant, so $S$ is a bijection of $\widehat{\mathbb{C}}$ onto itself. Away from $z = -d/c$ and $z = \infty$ it is analytic with $S'(z) = (ad-bc)/(cz+d)^2 \neq 0$, hence conformal there. (The condition $ad - bc \neq 0$ is exactly what keeps $S$ from collapsing to a constant.)
- **Group.** Composition corresponds to multiplication of the coefficient matrices $\begin{pmatrix} a & b\\ c& d\end{pmatrix}$, so the Mobius transformations form a group; multiplying all four coefficients by the same non-zero scalar leaves $S$ unchanged, and normalising $ad-bc=1$ still leaves the choice of an overall sign.
- **Decomposition.** If $c \neq 0$, division gives
  $$
  \frac{az+b}{cz+d} \;=\; \frac{a}{c} \;+\; \frac{bc-ad}{c^2}\cdot\frac{1}{z + d/c} ,
  $$
  so $S$ is a translation, then the inversion $z \mapsto 1/z$, then a multiplication by a constant (a rotation composed with a scaling), then another translation. If $c = 0$ then $S(z) = (a/d)z + b/d$ and no inversion is needed.
:::

:::definition[Cross ratio]{provenance=adapted src="ahlfors-1979:Ch. 3, §3.2, Eq. (9), p. 78"}
For distinct $z_2, z_3, z_4 \in \widehat{\mathbb{C}}$, the **cross ratio** $(z, z_2, z_3, z_4)$ is the value at $z$ of the unique Mobius transformation carrying $z_2, z_3, z_4$ to $1, 0, \infty$ in that order. When none of the three is $\infty$,
$$
(z, z_2, z_3, z_4) \;=\; \frac{z - z_3}{z - z_4} \cdot \frac{z_2 - z_4}{z_2 - z_3} ,
$$
and when one of them is $\infty$ the two factors containing it are deleted.

**Convention warning.** Which of the four arguments goes to $1$, $0$ and $\infty$, and in which order, differs between books; the formula above is the one in Ahlfors, §3.2. Any statement below involving a cross ratio is stated for this convention, and a reader importing a formula from elsewhere should check it on the three values $z = z_2, z_3, z_4$, where this one must give $1, 0, \infty$.
:::

:::statement[What Mobius transformations do to circles]{provenance=adapted src="ahlfors-1979:Ch. 3, §3.2, Theorems 12-14, pp. 79-80; hassani-2013:§10.3, Example 10.3.2, p. 306"}
Call a **circle in the extended sense** either a Euclidean circle in $\mathbb{C}$ or a Euclidean line together with the point $\infty$. (On the Riemann sphere both are genuine circles, which is the justification for the single word.) Let $S$ be a Mobius transformation.

1. **Invariance of the cross ratio.** For any four distinct points $z_1, z_2, z_3, z_4$ of $\widehat{\mathbb{C}}$,
   $$
   (S z_1, S z_2, S z_3, S z_4) = (z_1, z_2, z_3, z_4) .
   $$
2. **Three points determine the map.** Given distinct $z_1, z_2, z_3$ and distinct $w_1, w_2, w_3$ in $\widehat{\mathbb{C}}$, there is exactly one Mobius transformation with $S(z_j) = w_j$ for $j = 1,2,3$, and it is obtained by solving
   $$
   (w, w_1, w_2, w_3) = (z, z_1, z_2, z_3)
   $$
   for $w$. In particular a Mobius transformation with three fixed points is the identity.
3. **Circles go to circles.** $S$ carries every circle in the extended sense onto a circle in the extended sense. Consequently it carries each of the two complementary discs (or half-planes) bounded by such a circle onto one of the two bounded by the image circle.
4. **Reality test.** $(z_1,z_2,z_3,z_4)$ is real exactly when the four points lie on one circle in the extended sense.
:::

:::idea{provenance=original}
Statement 2 is bookkeeping: a cross ratio *is* the map that normalises three points to $1, 0, \infty$, so saying two cross ratios agree says that one normalising map followed by the inverse of the other sends each $z_j$ to $w_j$. Statement 1 then follows because $(\,\cdot\,, Sz_2, Sz_3, Sz_4) \circ S$ normalises $z_2, z_3, z_4$ and so must be $(\,\cdot\,, z_2,z_3,z_4)$. For statement 3 the trick is not to attack $(az+b)/(cz+d)$ at all. Instead, note that circles and lines have a *single* equation in $z$ and $\overline{z}$, check that each of the three elementary pieces of the decomposition preserves the shape of that equation, and compose.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 3, §3.1-§3.2, pp. 77-80; hassani-2013:§10.3, Example 10.3.2, p. 306"}
**Statement 2.** Let $T$ be the Mobius transformation $z \mapsto (z,z_1,z_2,z_3)$ and $U$ the one $w \mapsto (w,w_1,w_2,w_3)$; both exist, because the decomposition in the definition shows the explicit formula is a Mobius transformation, and both are invertible. Then $S = U^{-1}T$ is a Mobius transformation with $S(z_j) = U^{-1}(T z_j) = w_j$, because $T$ sends $z_j$ to whichever of $1, 0, \infty$ is the $j$th, and $U$ sends $w_j$ to that same one. If $S_1, S_2$ both do this then $S_2^{-1}S_1$ fixes $z_1,z_2,z_3$; a Mobius transformation fixing three points has $(az+b) - z(cz+d) = 0$, a polynomial of degree at most $2$, with three distinct roots in $\widehat{\mathbb{C}}$, so it vanishes identically and $S_2^{-1}S_1$ is the identity. Hence $S$ is unique.

**Statement 1.** Put $T z = (z, z_2, z_3, z_4)$. The map $T S^{-1}$ is a Mobius transformation sending $Sz_2, Sz_3, Sz_4$ to $1,0,\infty$, so by the uniqueness just proved $T S^{-1}$ *is* the cross-ratio map $w \mapsto (w, Sz_2, Sz_3, Sz_4)$. Evaluating both at $w = Sz_1$ gives $(Sz_1, Sz_2,Sz_3,Sz_4) = T z_1 = (z_1,z_2,z_3,z_4)$.

**Statement 3.** Every circle in the extended sense is the solution set of
$$
A \lvert z \rvert^2 + \overline{B} z + B \overline{z} + C = 0,
\qquad A, C \in \mathbb{R},\quad B \in \mathbb{C}, \quad \lvert B\rvert^2 > AC ,
\tag{$*$}
$$
together with $\infty$ when $A = 0$. Indeed, for $A \neq 0$ division by $A$ and completing the square turn $(*)$ into $\lvert z + B/A\rvert^2 = (\lvert B\rvert^2 - AC)/A^2$, a circle of positive radius; for $A = 0$ the equation is $2\operatorname{Re}(\overline{B}z) + C = 0$ with $B \neq 0$, a line. Conversely every circle and every line can be written this way.

Now take the three elementary maps of the decomposition in turn and substitute.

- *Translation* $w = z + \beta$, i.e. $z = w - \beta$. Expanding $(*)$ regroups into $A\lvert w\rvert^2 + \overline{B'}w + B'\overline{w} + C' = 0$ with $B' = B - A\beta$ and $C' = C - 2\operatorname{Re}(\overline{B}\beta) + A\lvert\beta\rvert^2$, both of the required type ($C'$ real). The quantity $\lvert B'\rvert^2 - AC'$ is unchanged by a direct computation, so it stays positive.
- *Multiplication* $w = \alpha z$ with $\alpha \neq 0$, i.e. $z = w/\alpha$. Substituting and multiplying by $\lvert\alpha\rvert^2$ gives $A\lvert w\rvert^2 + \overline{B\alpha}\,w + B\alpha\,\overline{w} + C\lvert\alpha\rvert^2 = 0$, again of the form $(*)$ with $B' = B\alpha$, $C' = C\lvert\alpha\rvert^2$, and $\lvert B'\rvert^2 - AC' = \lvert\alpha\rvert^2(\lvert B\rvert^2 - AC) > 0$.
- *Inversion* $w = 1/z$, i.e. $z = 1/w$. Substituting into $(*)$ and multiplying through by $\lvert w\rvert^2$ gives
  $$
  C\lvert w\rvert^2 + B w + \overline{B}\,\overline{w} + A = 0 ,
  $$
  which is $(*)$ with $A' = C$, $B' = \overline{B}$, $C' = A$; and $\lvert B'\rvert^2 - A'C' = \lvert B\rvert^2 - AC > 0$. So inversion preserves the family, swapping the roles of the $\lvert z\rvert^2$ coefficient and the constant -- which is exactly why it can turn a circle through the origin ($C = 0$) into a line ($A' = 0$) and back. Hassani runs this computation in the concrete form $\lvert z - a\rvert = r$ and finds a circle unless $r = \lvert a\rvert$, that is unless the original circle passes through the origin, in which case the image is a line.

Since $S$ is a composition of maps of these three kinds, it preserves the family $(*)$. A circle in the extended sense separates $\widehat{\mathbb{C}}$ into two connected pieces; $S$ is a homeomorphism of $\widehat{\mathbb{C}}$, so it maps those two pieces homeomorphically onto the two pieces cut out by the image circle, which gives the last sentence of statement 3.

**Statement 4.** By statement 2 choose $S$ with $S z_2, S z_3, S z_4 = 1, 0, \infty$; then $(z_1,z_2,z_3,z_4) = S z_1$ by definition, and by statement 1 the question "is the cross ratio real?" is the question "does $Sz_1$ lie on $\mathbb{R}\cup\{\infty\}$?". The four points $z_1,z_2,z_3,z_4$ lie on a common circle in the extended sense if and only if their images do, by statement 3 applied to $S$ and to $S^{-1}$; and $Sz_2, Sz_3, Sz_4 = 1,0,\infty$ already determine that circle to be $\mathbb{R}\cup\{\infty\}$, since three distinct points lie on exactly one circle in the extended sense. So the four points are concyclic exactly when $S z_1 \in \mathbb{R}\cup\{\infty\}$, which is the claim. $\square$
:::

:::statement[Harmonic functions ride along]{provenance=adapted src="rhb-2006:§24.7, property (iv) and Eqs. (24.28)-(24.29), p. 841, and §25.2, p. 876; hassani-2013:§10.3, Proposition 10.3.1(b), p. 306"}
Let $g : \Omega \to \Omega_0$ be analytic, with $\Omega, \Omega_0 \subseteq \mathbb{C}$ open, and let $\Phi_0 : \Omega_0 \to \mathbb{R}$ be twice continuously differentiable. Then
$$
\Delta\big(\Phi_0 \circ g\big)(z) \;=\; \lvert g'(z)\rvert^2 \, \big(\Delta \Phi_0\big)(g(z))
\qquad \text{for all } z \in \Omega ,
$$
where $\Delta = \partial_x^2 + \partial_y^2$. In particular:

1. If $\Phi_0$ is harmonic on $\Omega_0$, then $\Phi = \Phi_0 \circ g$ is harmonic on $\Omega$ -- with no hypothesis on $g'$ at all.
2. If $g$ is in addition a conformal equivalence of $\Omega$ onto $\Omega_0$, the correspondence $\Phi_0 \leftrightarrow \Phi_0 \circ g$ is a bijection between the harmonic functions on $\Omega_0$ and those on $\Omega$.
3. Level sets correspond: $\{\Phi = c\} = g^{-1}\{\Phi_0 = c\}$. So if $\Phi_0$ takes the constant value $c$ on a boundary arc $\Gamma_0 \subseteq \partial\Omega_0$, and $g$ extends continuously to $\Gamma = g^{-1}(\Gamma_0) \subseteq \partial\Omega$, then $\Phi$ takes the value $c$ on $\Gamma$.
4. Where $\Phi_0 = \operatorname{Re} F$ for an analytic $F$ on $\Omega_0$, we may take $\Phi = \operatorname{Re}(F\circ g)$, and then the gradient magnitudes are related by $\lvert \nabla \Phi (z)\rvert = \lvert F'(g(z))\rvert\,\lvert g'(z)\rvert$.

Riley, Hobson and Bence reach claim 1 by the route $F = f \circ h$ with $h = g^{-1}$: an analytic function of an analytic function is analytic, and the real and imaginary parts of an analytic function are harmonic (their Eqs. (24.28)-(24.29)). They note separately (p. 876, footnote) that the solution being transported need not be given as the real part of an analytic function. Hassani states claim 1 as part (b) of Proposition 10.3.1, phrased as the preservation of harmonicity in passing from the coordinates $(x,y)$ to the image coordinates $(x',y')$; the symbol it uses for the function being transported is the same one its hypotheses give to the mapping, and what the book then puts to work in its examples is claim 1 above, with an arbitrary harmonic function carried along.
:::

:::idea{provenance=original}
One identity does everything, and it is cleanest in the Wirtinger derivatives $\partial = \tfrac12(\partial_x - i\partial_y)$ and $\bar\partial = \tfrac12(\partial_x + i \partial_y)$, in which $\Delta = 4\partial\bar\partial$. Analyticity of $g$ says $\bar\partial g = 0$ and $\partial \overline{g} = 0$: $g$ carries no $\overline{z}$ dependence. So in the chain rule for $\Phi_0 \circ g$ the mixed terms drop out, and what survives is the single factor $\lvert g'\rvert^2$. The factor is non-negative, so it cannot create or destroy the vanishing of the Laplacian -- which is why claim 1 needs nothing about $g'$, while the *inverse* direction (claim 2) needs $g$ to be invertible.
:::

:::proof{provenance=original}
Write $\partial = \tfrac12(\partial_x - i \partial_y)$ and $\bar\partial = \tfrac12(\partial_x + i\partial_y)$, so that $\Delta = 4\,\partial\bar\partial$ (expand the product: the cross terms $\mp \tfrac{i}{4}\partial_x\partial_y$ cancel). For a function $\Psi$ of $z$ and $\overline{z}$ the chain rule along an analytic $g$ reads
$$
\bar\partial\,(\Psi \circ g) \;=\; (\partial \Psi)(g)\, \bar\partial g \;+\; (\bar\partial\Psi)(g)\, \bar\partial \overline{g}
\;=\; (\bar\partial \Psi)(g)\,\overline{g'} ,
$$
because $\bar\partial g = 0$ (that is the Cauchy-Riemann condition, see :ref[]{to=complex.cauchy-riemann}) and $\bar\partial\overline{g} = \overline{\partial g} = \overline{g'}$. Applying the same rule to $\partial$ gives $\partial(\Psi\circ g) = (\partial\Psi)(g)\,g'$.

Now take $\Psi = \Phi_0$ and compose the two steps:
$$
\partial\bar\partial(\Phi_0\circ g)
= \partial\big[(\bar\partial\Phi_0)(g)\,\overline{g'}\big]
= (\partial\bar\partial\Phi_0)(g)\,g'\,\overline{g'} + (\bar\partial\Phi_0)(g)\,\partial\overline{g'} .
$$
The second term vanishes: $g'$ is analytic, so $\overline{g'}$ is anti-analytic and $\partial \overline{g'} = \overline{\bar\partial g'} = 0$. Multiplying by $4$ and using $g'\overline{g'} = \lvert g'\rvert^2$,
$$
\Delta(\Phi_0\circ g) = \lvert g'\rvert^2\,(\Delta\Phi_0)\circ g ,
$$
which is the identity. Claim 1 is immediate. For claim 2, apply claim 1 to $g$ and to the analytic inverse $g^{-1}$ (analytic by claim 4 of the conformality statement, since a conformal equivalence has $g' \neq 0$ throughout: a zero of $g'$ of order $m-1$ would make $g$ locally $m$-to-one, contradicting injectivity); the two compositions are mutually inverse. Claim 3 is set theory: $\Phi(z) = c$ exactly when $\Phi_0(g(z)) = c$. For claim 4, $F \circ g$ is analytic, so $\operatorname{Re}(F\circ g)$ is harmonic and equals $\Phi_0\circ g$; and for an analytic $F$ with $\Phi_0 = \operatorname{Re}F$ one has $\lvert\nabla\Phi_0\rvert = \lvert F'\rvert$, because $F' = \partial_x \Phi_0 - i\,\partial_y\Phi_0$ by the Cauchy-Riemann equations. Applying this to $F \circ g$ and using $(F\circ g)' = F'(g)\,g'$ gives the stated product. $\square$
:::

:::method[Solving a two-dimensional Laplace problem by mapping]{provenance=adapted src="rhb-2006:§25.2, pp. 876-878; hassani-2013:§10.3, pp. 305-308"}
Given: a region $\Omega \subseteq \mathbb{C}$ and a function prescribed on $\partial\Omega$; wanted: the harmonic $\Phi$ on $\Omega$ with those boundary values. (The physical content is in :ref[]{to=pde.harmonic-functions}; here $\Omega$ is a cross-section of a cylindrically symmetric three-dimensional problem, so that the third coordinate drops out.)

1. **Normalise the geometry.** Place the origin and axes so that the boundary pieces lie along rays, lines or circles. Note where the data change value: those points will be the ones you have to track through every map.
2. **Choose a model region** whose Dirichlet problem you can already solve: the upper half-plane and the unit disk (:ref[Poisson integral formula]{to=pde.poisson-integral-formula}), the horizontal strip, the sector.
3. **Build the map as a composition** of standard pieces, following the boundary rather than the interior:
   - $z \mapsto z + \beta$, $z\mapsto \alpha z$: translate, rotate, rescale.
   - $z \mapsto z^\beta$ with $\beta > 0$ ($\arg w = \beta \arg z$, $\lvert w\rvert = \lvert z\rvert^\beta$): the sector $\varphi_1 < \arg z < \varphi_2$ onto the sector $\beta\varphi_1 < \arg w < \beta\varphi_2$. Ahlfors states the restriction as a necessary one -- the mapping is one to one only if $\beta(\varphi_2-\varphi_1)\le 2\pi$ -- and in that case the one sector is mapped onto the other (p. 90). Use $\beta = \pi/\alpha$ to open a wedge of opening $\alpha$ into a half-plane.
   - $z \mapsto e^z$: the strip $y_1 < \operatorname{Im}z < y_2$ with $y_2 - y_1 \leq 2\pi$ onto the sector $y_1 < \arg w < y_2$; and $z \mapsto \log z$ the other way.
   - Mobius maps: half-plane $\leftrightarrow$ disk, disk $\leftrightarrow$ disk, and any three boundary points to any three. For the upper half-plane onto the unit disk with a chosen interior point $z_0$ going to the centre, use $w = e^{i\varphi}(z-z_0)/(z - \overline{z_0})$, which has $\lvert w\rvert < 1$ exactly because an interior point is nearer to $z_0$ than to its reflection $\overline{z_0}$ (Riley, Hobson and Bence, p. 842); fix $\varphi$ by prescribing the image of one boundary point.
   Check each piece on the *boundary* points identified in step 1, and keep a branch of $\arg$ or $\log$ fixed once and for all.
4. **Transport the data.** The value prescribed at $\zeta \in \partial\Omega_0$ is the value prescribed at $g^{-1}(\zeta) \in \partial\Omega$. Constants stay constant (claim 3 of the transport statement); a non-constant profile gets reparametrised, which is where a map that is simple on the boundary pays off.
5. **Solve in the model region** -- by inspection if the data are piecewise constant on rays or arcs, otherwise by the Poisson integral or a known complex potential.
6. **Pull back**: $\Phi(z) = \Phi_0(g(z))$. If you want the field as well, carry the analytic potential $F$ with $\operatorname{Re}F = \Phi_0$ across instead, and read the field magnitude off $\lvert (F\circ g)'\rvert = \lvert F'(g)\rvert\,\lvert g'\rvert$.
7. **Check.** Verify the boundary values on each piece directly in the $z$ variable; verify harmonicity by exhibiting $\Phi$ as the real or imaginary part of something analytic; and locate the points where $g' = 0$ or $g' = \infty$, since the field, though not the potential, typically misbehaves there.
:::

:::remark[Which regions can be reached]{provenance=adapted src="ahlfors-1979:Ch. 6, §1.1, Theorem 1, p. 230 and Ch. 3, §3.2, p. 80; rhb-2006:§24.7, Eq. (24.30), p. 843"}
The method of the previous block only needs a map to exist. Two results say when it does.

**Riemann mapping theorem** (Ahlfors, Ch. 6, Theorem 1, p. 230). Let $\Omega$ be a simply connected region that is not the whole plane, and let $z_0 \in \Omega$. There is a unique analytic $f$ on $\Omega$ with $f(z_0) = 0$ and $f'(z_0) > 0$ that maps $\Omega$ one-to-one onto the disk $\lvert w\rvert < 1$. Hence any two such regions are conformally equivalent, through the disk. The theorem is an existence statement -- Ahlfors's proof takes $f$ to be the member of a normal family with the largest derivative at $z_0$ -- and it hands you no formula, which is why one still composes elementary maps by hand.

Two caveats the hypotheses carry. *Simply connected* is essential: an annulus is not conformally equivalent to a disk, and two annuli are equivalent only when their radius ratios agree, so the conformal type of a multiply connected region has moduli. *Not the whole plane* is essential too: by Liouville's theorem (:ref[]{to=complex.liouville-maximum-modulus}) a bounded analytic function on $\mathbb{C}$ is constant, so $\mathbb{C}$ admits no bounded injective analytic map at all.

**Schwarz-Christoffel formula** (Riley, Hobson and Bence, Eq. (24.30), p. 843). For a polygon the map can be written down. Given points $x_1,\dots,x_n$ on the real axis and interior angles $\phi_1,\dots,\phi_n$,
$$
w \;=\; A\int_0^z (\xi - x_1)^{(\phi_1/\pi)-1}(\xi - x_2)^{(\phi_2/\pi)-1}\cdots(\xi-x_n)^{(\phi_n/\pi)-1}\,d\xi \;+\; B
$$
sends $\{\operatorname{Im}z > 0\}$ bijectively to the inside of a closed polygon; the vertex $w_j$ is the image of $x_j$, and the angle of the polygon at $w_j$ is $\phi_j$. Each factor contributes a turn of $\pi - \phi_j$ -- the exterior angle at that vertex -- as $\xi$ passes $x_j$ along the real axis, since $\arg(\xi - x_j)$ drops from $\pi$ to $0$ there and the exponent multiplies that drop by $(\phi_j/\pi) - 1$; this is how the corners are produced. The constants $A$ and $B$ are a rotation-with-scaling and a translation of the polygon. The prices paid are that the $x_j$ corresponding to a *prescribed* polygon must be found numerically, and that the integral is rarely elementary.
:::

:::example{provenance=original}
**Steady temperature in a half-disk.** Let
$$
\Omega = \{\, z : \lvert z\rvert < 1,\ \operatorname{Im} z > 0 \,\}
$$
be the cross-section of a long half-cylinder. The flat face is held at $T = 0$ (the diameter $-1 < x < 1$) and the curved face at $T = 100$ (the arc $\lvert z \rvert = 1$, $\operatorname{Im}z>0$). Find the steady temperature $T$ inside, and its value at $z = i/2$.

**Step 1: a Mobius map to a quadrant.** Try
$$
\zeta = g_1(z) = \frac{1+z}{1-z} .
$$
Follow the boundary. It sends $-1 \mapsto 0$, $0 \mapsto 1$ and $1 \mapsto \infty$; three points of the circle $\mathbb{R}\cup\{\infty\}$, so by statement 3 the diameter lands in $\mathbb{R}\cup\{\infty\}$, and because $0 \mapsto 1 > 0$ the open diameter lands in the positive real axis. For the arc, put $z = e^{i\theta}$ with $0 < \theta < \pi$ and pull out a half-angle:
$$
\frac{1+e^{i\theta}}{1-e^{i\theta}}
= \frac{e^{-i\theta/2}+e^{i\theta/2}}{e^{-i\theta/2}-e^{i\theta/2}}
= \frac{2\cos(\theta/2)}{-2i\sin(\theta/2)}
= i\cot(\theta/2) ,
$$
and $\cot(\theta/2) > 0$ for $0<\theta<\pi$, so the arc lands in the positive imaginary axis. The two boundary pieces of $\Omega$ therefore go to the two edges of the first quadrant. The whole unit circle therefore goes to the imaginary axis together with $\infty$ (it contains $\pm i \mapsto \pm i$ as well), and $\Omega$ is one of the four connected pieces into which the unit circle and the real axis cut $\widehat{\mathbb{C}}$. Since $g_1$ is a homeomorphism of $\widehat{\mathbb{C}}$ and $g_1(i/2) = 3/5 + 4i/5$ lies in the open first quadrant, $g_1$ maps $\Omega$ onto
$$
Q = \{\,\zeta : \operatorname{Re}\zeta > 0,\ \operatorname{Im}\zeta>0\,\} .
$$
**Step 2: square the quadrant into a half-plane.** $g_2(\zeta) = \zeta^2$ doubles arguments, so it maps $Q$ ($0 < \arg\zeta<\pi/2$) onto the upper half-plane $0 < \arg W < \pi$, carrying the positive real axis to the positive real axis and the positive imaginary axis to the negative real axis. Note $g_2'(0) = 0$: the corner of $Q$ is flattened. That is harmless, because $0 \notin Q$.

**Step 3: transport the data and solve.** The composite $g = g_2\circ g_1$ sends the diameter ($T=0$) to $\{W > 0\}$ and the arc ($T = 100$) to $\{W<0\}$. In the upper half-plane the harmonic function with those two constant values is
$$
T_0(W) = \frac{100}{\pi}\,\arg W \qquad (0 \le \arg W \le \pi) ,
$$
harmonic because $\arg W = \operatorname{Im}\operatorname{Log}W$ with $\operatorname{Log}$ analytic off the non-positive real axis, and equal to $0$ on $\{W>0\}$, to $100$ on $\{W<0\}$ by inspection.

**Step 4: pull back.** For $\zeta \in Q$ we have $\arg\zeta \in (0,\pi/2)$, so $\arg(\zeta^2) = 2\arg\zeta$ with no branch ambiguity, and
$$
\boxed{\;T(z) \;=\; \frac{200}{\pi}\,\arg\frac{1+z}{1-z}\;}
$$
with the principal argument. In real coordinates, $\dfrac{1+z}{1-z} = \dfrac{(1+z)(1-\overline{z})}{\lvert 1-z\rvert^2} = \dfrac{1-\lvert z\rvert^2 + 2iy}{\lvert 1-z\rvert^2}$, whose real part is positive on the disk, so
$$
T(x,y) = \frac{200}{\pi}\arctan\!\left(\frac{2y}{1-x^2-y^2}\right), \qquad x^2+y^2<1,\ y>0 .
$$

**Step 5: the number.** At $z = i/2$: $2y = 1$ and $1 - \lvert z\rvert^2 = 3/4$, so the argument of the arctangent is $4/3$ and
$$
T(i/2) = \frac{200}{\pi}\arctan\frac43 = 59.0334\ldots \ ^\circ .
$$
Through the maps: $\zeta = g_1(i/2) = (1+i/2)/(1-i/2) = (3/4+i)/(5/4) = \tfrac35 + \tfrac45 i$, then $W = \zeta^2 = -\tfrac{7}{25} + \tfrac{24}{25}i$, and $\arg W = \pi - \arctan(24/7) = 2\arctan(4/3) = 1.854590\ldots$, giving $T = (100/\pi)(1.854590\ldots) = 59.0334\ldots$, the same.

**Step 6: checks.**
- *Boundary.* On $y = 0$, $\lvert x\rvert<1$: $\arctan 0 = 0$, so $T = 0$. Approaching $\lvert z\rvert = 1$ from inside with $y>0$: the denominator $1-x^2-y^2 \to 0^+$ while $2y$ stays positive, so the arctangent tends to $\pi/2$ and $T \to 100$. Both faces are right.
- *Harmonicity.* $T = (200/\pi)\operatorname{Im}\operatorname{Log}\big((1+z)/(1-z)\big)$, and $(1+z)/(1-z)$ is analytic on $\Omega$ with values in the right half-plane, where $\operatorname{Log}$ is analytic; so $T$ is the imaginary part of an analytic function, hence harmonic. A finite-difference Laplacian at $z = 0.3+0.4i$ with step $10^{-6}$ gives $1.5\times10^{-10}$, consistent with zero at that step size.
- *A spot value.* $T(0.3+0.4i) = (200/\pi)\arctan\!\big(0.8/(1-0.09-0.16)\big) = (200/\pi)\arctan(1.0\overline{6}) = 52.0529\ldots$, between $0$ and $100$ as a maximum principle requires.
- *The corner points.* $g'$ blows up at $z = 1$ and $g_2' = 0$ at $\zeta = 0$ (that is $z = -1$). Both are the two points where the boundary data jump, and $T$ has no limit there -- as it should not, since the two faces meet at a corner carrying two different temperatures.

(The value $59.0334\ldots$, the spot value and the finite-difference Laplacian were computed in double and in $25$-digit arithmetic and agree.)
:::

:::application{provenance=original}
**Corners decide how big the field gets.** The power map is not just a device for simplifying a region; the exponent it carries is a physical prediction. Let the region near a corner be the wedge $W_\alpha = \{\,0 < \arg z < \alpha\,\}$ with both faces grounded, $\Phi = 0$. Apply $w = z^{\pi/\alpha}$, which opens $W_\alpha$ into the upper half-plane; the harmonic functions there vanishing on the whole real axis and growing slowest are multiples of $\operatorname{Im} w$. Pulling back,
$$
\Phi(z) = c\,\operatorname{Im}\big(z^{\pi/\alpha}\big) = c\,r^{\pi/\alpha}\sin\!\Big(\frac{\pi\theta}{\alpha}\Big),
\qquad
\lvert\nabla\Phi\rvert = \frac{c\,\pi}{\alpha}\,r^{(\pi/\alpha)-1} .
$$
The exponent $(\pi/\alpha) - 1$ changes sign at $\alpha = \pi$. At a convex corner ($\alpha<\pi$) the field goes to zero; at a re-entrant corner ($\alpha>\pi$) it blows up, and at the extreme $\alpha = 2\pi$ -- the edge of a thin conducting sheet, or the tip of a crack -- it grows like $r^{-1/2}$. This is the reason high-voltage hardware has rounded edges, the reason lightning rods are pointed, and, with the displacement field replaced by stress, the inverse-square-root singularity at a crack tip that linear elastic fracture mechanics is built on. One conformal map gives the exponent in all these cases, and gives it exactly.

**Where else it is used.**
- *Electrostatics and magnetostatics in two dimensions.* Riley, Hobson and Bence transport the field of a charged plane to a charged half-plane and to a right-angled wedge with $w = z^2$ and $w = z^{1/2}$ (pp. 877-878), and combine a wedge map with the :ref[method of images]{to=green.method-of-images} to place a line charge in a conducting wedge (p. 878). Hassani maps the outside of two parallel cylinders at different potentials onto an annulus with a single inversion $z' = 1/(z-c)$, where the potential is a logarithm of the radius, and so obtains in closed form the potential around two charged cylinders held at different potentials (pp. 307-308).
- *Ideal fluid flow.* The complex potential of a uniform stream, $F(w) = U w$, pulled back by the Joukowski map $w = z + a^2/z$, is the classical flow past a circular cylinder; pulled back by a Joukowski map off-centred, it is the flow past an aerofoil, which is how two-dimensional lift was first computed.
- *Steady heat conduction and diffusion.* The temperature problem of the worked example is the same mathematics with $\Phi$ a temperature and $\nabla\Phi$ a heat flux; conformal mapping gives shape factors for conduction through awkward cross-sections.
- *Mathematics downstream.* Conformal invariance of the Dirichlet integral $\iint\lvert\nabla\Phi\rvert^2$ -- immediate from the area factor $\lvert g'\rvert^2$ cancelling the gradient factor $\lvert g'\rvert^{-2}$ -- is what makes harmonic measure, hyperbolic geometry on the disk and two-dimensional critical phenomena conformally invariant theories.
:::
