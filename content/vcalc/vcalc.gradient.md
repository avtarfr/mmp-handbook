---
id: vcalc.gradient
title: Gradient and directional derivative
kind: definition
level: core
summary: Defines the operator $\nabla$ and the gradient of a scalar field, identifies $\nabla\phi\cdot\hat{\mathbf{a}}$ as the rate of change of $\phi$ per unit distance in the direction $\hat{\mathbf{a}}$, and shows that at a point where it does not vanish $\nabla\phi$ points along the steepest increase of $\phi$ and normal to the level surface through that point.
prereqs:
  - found.partial-derivatives-chain-rule
  - found.implicit-inverse-function
  - linalg.inner-product-spaces
  - vcalc.vector-algebra
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§10.6, p. 347 (scalar and vector fields); §10.7, Eq. (10.25), p. 348 (the operator $\\nabla$); §10.7.1, Eqs. (10.26)–(10.32), pp. 348–350 (gradient, $d\\phi = \\nabla\\phi\\cdot d\\mathbf{r}$, directional derivative, normal derivative, tangent plane); §10.8.1, p. 355 (gradient of a radial field and the special cases $\\nabla r = \\hat{\\mathbf{r}}$)"
    pages: "347-351, 355"
    role: definitions and notation; directional derivative and normal-to-level-surface statements; radial special cases
  - work: arfken-2013
    loc: "§3.5, Eqs. (3.38)–(3.45), pp. 143–145 (first-order change $d\\varphi = \\nabla\\varphi\\cdot d\\mathbf{r}$, the definition of $\\nabla$, force from a potential, steepest-increase interpretation); Examples 3.5.1–3.5.3, Eqs. (3.46)–(3.51), pp. 145–146 (gradient of $r$, of $r^n$ and of a radial potential)"
    pages: "143-146"
    role: the differential route to the definition; the steepest-increase interpretation; radial gradients
  - work: hirsch-smale-devaney-2013
    loc: "§9.3, pp. 202–204: definition of $\\operatorname{grad} V$, the identity $DV_X(Y) = \\operatorname{grad} V(X)\\cdot Y$, the level-set argument via a curve, and Properties of Gradient Systems 1–3"
    pages: "202-204"
    role: the proof route for orthogonality to level sets; gradient systems for the application
  - work: lee-2013
    loc: "Ch. 13, pp. 342–343: $\\operatorname{grad} f = (df)^\\sharp = \\hat{g}^{-1}(df)$, characterised by $\\langle \\operatorname{grad} f, X\\rangle_g = Xf$, with the coordinate expression $g^{ij}(\\partial f/\\partial x^i)\\,\\partial/\\partial x^j$"
    pages: "342-343"
    role: the metric-dependence of the gradient, for the note
---

:::definition[Scalar and vector fields; the operator $\nabla$]{provenance=adapted src="rhb-2006:§10.6, p. 347, and §10.7, Eq. (10.25), p. 348; arfken-2013:§3.5, Eq. (3.44), p. 144"}
Let $U \subseteq \mathbb{R}^3$ be open. A **scalar field** on $U$ is a function $\phi : U \to \mathbb{R}$; a **vector field** on $U$ is a map $\mathbf{F} : U \to \mathbb{R}^3$, written $\mathbf{F} = F_1\mathbf{e}_1 + F_2\mathbf{e}_2 + F_3\mathbf{e}_3$ in the fixed right-handed orthonormal basis of :ref[]{to=vcalc.vector-algebra}. A field is of class $C^k$ when its components are (:ref[]{to=found.partial-derivatives-chain-rule}). The physical examples are the pressure or temperature in a fluid (scalar) and the fluid velocity or the electric field (vector).

The **del** operator (also *nabla*) is the formal vector of partial derivatives
$$
\nabla \;=\; \mathbf{e}_1\frac{\partial}{\partial x_1} + \mathbf{e}_2\frac{\partial}{\partial x_2} + \mathbf{e}_3\frac{\partial}{\partial x_3},
\qquad\text{in index notation}\qquad
(\nabla)_i = \partial_i := \frac{\partial}{\partial x_i}.
$$
It is a *vector differential operator*: it acts on whatever stands to its right, so the order of symbols matters and brackets are not decoration. In particular $\phi\nabla$, whose components are $\phi\,\partial_i$, is again an operator and is a different object from the field $\nabla\phi$ defined next.
:::

:::definition[Gradient, directional derivative, normal derivative]{provenance=adapted src="rhb-2006:§10.7.1, Eqs. (10.26), (10.30) and (10.32), pp. 348–350; hirsch-smale-devaney-2013:§9.3, p. 202"}
Let $\phi$ be a scalar field on an open $U \subseteq \mathbb{R}^3$ whose partial derivatives exist at $\mathbf{a} \in U$. The **gradient** of $\phi$ at $\mathbf{a}$ is the vector
$$
\operatorname{grad}\phi \;=\; \nabla\phi \;=\; \frac{\partial\phi}{\partial x_1}\mathbf{e}_1 + \frac{\partial\phi}{\partial x_2}\mathbf{e}_2 + \frac{\partial\phi}{\partial x_3}\mathbf{e}_3,
\qquad (\nabla\phi)_i = \partial_i\phi .
$$
So $\nabla\phi$ is a vector field on $U$ whenever the partial derivatives exist throughout $U$. The same formula with $n$ terms defines the gradient of a scalar field on an open subset of $\mathbb{R}^n$.

Given a unit vector $\hat{\mathbf{a}}$, we call
$$
\frac{d\phi}{ds} \;=\; D_{\hat{\mathbf{a}}}\phi(\mathbf{a}) \;=\; \frac{d}{dt}\,\phi(\mathbf{a} + t\hat{\mathbf{a}})\Big|_{t=0}
$$
the **directional derivative** along $\hat{\mathbf{a}}$: the rate of change of $\phi$ per unit *distance* travelled in that direction; this is why $\hat{\mathbf{a}}$ is normalised here, unlike the unnormalised $D_v f$ of :ref[]{to=found.partial-derivatives-chain-rule}. A **level surface** (or level set) of $\phi$ is a set $\phi^{-1}(c) = \{\mathbf{x} \in U : \phi(\mathbf{x}) = c\}$, and a point of $U$ is a **regular point** of $\phi$ if $\nabla\phi \ne \mathbf{0}$ there. If $\hat{\mathbf{n}}$ is the unit normal to a level surface pointing towards increasing $\phi$, the **normal derivative** is $\partial\phi/\partial n = D_{\hat{\mathbf{n}}}\phi$.
:::

:::statement[First-order change, directional derivative, steepest ascent]{provenance=adapted src="arfken-2013:§3.5, Eqs. (3.41) and p. 145; rhb-2006:§10.7.1, Eqs. (10.27)–(10.30), pp. 348–349; hirsch-smale-devaney-2013:§9.3, p. 202"}
Let $\phi$ be a scalar field on an open $U \subseteq \mathbb{R}^3$, differentiable at $\mathbf{a} \in U$ in the sense of :ref[]{to=found.partial-derivatives-chain-rule}.

1. **First-order change.** $\phi(\mathbf{a} + \mathbf{h}) - \phi(\mathbf{a}) = \nabla\phi(\mathbf{a})\cdot\mathbf{h} + o(|\mathbf{h}|)$ as $\mathbf{h}\to\mathbf{0}$. Written with differentials, $d\phi = \nabla\phi\cdot d\mathbf{r}$.
2. **Directional derivative.** For every $\mathbf{u} \in \mathbb{R}^3$ the derivative of $\phi$ along $\mathbf{u}$ exists and equals $\nabla\phi(\mathbf{a})\cdot\mathbf{u}$; in particular $d\phi/ds = \nabla\phi(\mathbf{a})\cdot\hat{\mathbf{a}}$ for a unit $\hat{\mathbf{a}}$. More generally, if $\mathbf{r}(u)$ is a differentiable curve in $U$ then
   $$
   \frac{d}{du}\,\phi(\mathbf{r}(u)) = \nabla\phi(\mathbf{r}(u))\cdot\frac{d\mathbf{r}}{du},
   $$
   which for the arc-length parameter $s$ reads $d\phi/ds = \nabla\phi\cdot\hat{\mathbf{t}}$ with $\hat{\mathbf{t}}$ the unit tangent.
3. **Steepest ascent.** If $\nabla\phi(\mathbf{a}) \ne \mathbf{0}$, then over all unit vectors $\hat{\mathbf{a}}$ the number $d\phi/ds = \nabla\phi(\mathbf{a})\cdot\hat{\mathbf{a}}$ is largest, and equal to $|\nabla\phi(\mathbf{a})|$, exactly for $\hat{\mathbf{a}} = \nabla\phi(\mathbf{a})/|\nabla\phi(\mathbf{a})|$; it is smallest, and equal to $-|\nabla\phi(\mathbf{a})|$, exactly for the opposite direction. So $\nabla\phi$ points along the steepest increase of $\phi$ and its length is that steepest rate. If $\nabla\phi(\mathbf{a}) = \mathbf{0}$ then $d\phi/ds = 0$ in every direction.
:::

:::statement[The gradient is normal to the level surface]{provenance=adapted src="hirsch-smale-devaney-2013:§9.3, pp. 203–204, Properties of Gradient Systems, part 1; rhb-2006:§10.7.1, p. 350"}
Let $\phi$ be a $C^1$ scalar field on an open $U \subseteq \mathbb{R}^3$ and let $\mathbf{a} \in U$ be a regular point, $\phi(\mathbf{a}) = c$.

1. $\nabla\phi(\mathbf{a})\cdot\mathbf{v} = 0$ for every $\mathbf{v}$ that is tangent at $\mathbf{a}$ to the level surface $\phi^{-1}(c)$, in the sense that $\mathbf{v} = \boldsymbol{\gamma}'(0)$ for some differentiable curve $\boldsymbol{\gamma}$ with $\boldsymbol{\gamma}(0) = \mathbf{a}$ and $\phi\circ\boldsymbol{\gamma}$ constant.
2. Near $\mathbf{a}$, $\phi^{-1}(c)$ is a surface: after renumbering coordinates so that $\partial_3\phi(\mathbf{a}) \ne 0$, there are a neighbourhood of $\mathbf{a}$ and a $C^1$ function $g$ of two variables such that the part of $\phi^{-1}(c)$ in that neighbourhood is the graph $x_3 = g(x_1,x_2)$. Its tangent vectors at $\mathbf{a}$ fill a plane, and $\nabla\phi(\mathbf{a})$ spans the line orthogonal to it.
3. Consequently, with $\mathbf{r}_0$ the position vector of $\mathbf{a}$ and $\mathbf{n}_0 = \nabla\phi(\mathbf{a})$, the tangent plane to $\phi^{-1}(c)$ at $\mathbf{a}$ is $\{\mathbf{r} : (\mathbf{r}-\mathbf{r}_0)\cdot\mathbf{n}_0 = 0\}$ and the normal line is $\{\mathbf{r} : (\mathbf{r}-\mathbf{r}_0)\times\mathbf{n}_0 = \mathbf{0}\}$. Writing $\hat{\mathbf{n}} = \mathbf{n}_0/|\mathbf{n}_0|$, we have $\nabla\phi(\mathbf{a}) = (\partial\phi/\partial n)\,\hat{\mathbf{n}}$ with $\partial\phi/\partial n = |\nabla\phi(\mathbf{a})|$.
:::

:::idea{provenance=original}
Everything here is the chain rule plus the Cauchy–Schwarz inequality. The chain rule applied to the straight line $t \mapsto \mathbf{a} + t\mathbf{u}$ turns the gradient into a dot product, so all the directional information in $\phi$ at first order is the single vector $\nabla\phi$ tested against directions. Cauchy–Schwarz then says that a dot product against a unit vector is largest when the unit vector is aligned, which is steepest ascent, and is zero when the unit vector is orthogonal. The level surface is where $\phi$ does not change, so its tangent directions are exactly the directions in which the dot product vanishes — which is why the gradient leaves the surface at right angles.
:::

:::proof{provenance=adapted src="hirsch-smale-devaney-2013:§9.3, pp. 202–204; rhb-2006:§10.7.1, Eqs. (10.27)–(10.30), pp. 348–349"}
**Part 1.** Differentiability at $\mathbf{a}$ means $\phi(\mathbf{a}+\mathbf{h}) - \phi(\mathbf{a}) = L\mathbf{h} + o(|\mathbf{h}|)$ for a linear form $L$ on $\mathbb{R}^3$ (:ref[]{to=found.partial-derivatives-chain-rule}). Taking $\mathbf{h} = t\mathbf{e}_i$ and dividing by $t$ shows $L\mathbf{e}_i = \partial_i\phi(\mathbf{a})$, so $L\mathbf{h} = \partial_i\phi(\mathbf{a})h_i = \nabla\phi(\mathbf{a})\cdot\mathbf{h}$ by the index form of the dot product. This is part 1, and it is the precise content of the physicists' $d\phi = \nabla\phi\cdot d\mathbf{r}$.

**Part 2.** Fix $\mathbf{u}$ and put $\psi(t) = \phi(\mathbf{a}+t\mathbf{u})$ for $|t|$ small enough that $\mathbf{a}+t\mathbf{u} \in U$. By the chain rule for a differentiable map composed with a differentiable curve, $\psi$ is differentiable at $0$ with $\psi'(0) = \nabla\phi(\mathbf{a})\cdot\mathbf{u}$; the hypothesis used is differentiability of $\phi$ at $\mathbf{a}$, not merely the existence of its partial derivatives. Replacing the line by a differentiable curve $\mathbf{r}(u)$ and applying the same chain rule at each parameter value gives the curve formula, and the arc-length case is that formula with $|d\mathbf{r}/ds| = 1$, so that $d\mathbf{r}/ds = \hat{\mathbf{t}}$.

**Part 3.** Let $\mathbf{g} = \nabla\phi(\mathbf{a}) \ne \mathbf{0}$ and let $\hat{\mathbf{a}}$ be a unit vector. By part 2, $d\phi/ds = \mathbf{g}\cdot\hat{\mathbf{a}}$. By the Cauchy–Schwarz inequality on $\mathbb{R}^3$ (:ref[]{to=linalg.inner-product-spaces}),
$$
-|\mathbf{g}| \;=\; -|\mathbf{g}|\,|\hat{\mathbf{a}}| \;\le\; \mathbf{g}\cdot\hat{\mathbf{a}} \;\le\; |\mathbf{g}|\,|\hat{\mathbf{a}}| \;=\; |\mathbf{g}|,
$$
with equality on either side only when $\hat{\mathbf{a}}$ and $\mathbf{g}$ are linearly dependent, that is $\hat{\mathbf{a}} = \pm\,\mathbf{g}/|\mathbf{g}|$ since both are then unit vectors; the sign of $\mathbf{g}\cdot\hat{\mathbf{a}}$ decides which. Both bounds are attained, so the maximum is $|\mathbf{g}|$ at $\hat{\mathbf{a}} = \mathbf{g}/|\mathbf{g}|$ and the minimum is $-|\mathbf{g}|$ at $-\mathbf{g}/|\mathbf{g}|$. If instead $\mathbf{g} = \mathbf{0}$, then $\mathbf{g}\cdot\hat{\mathbf{a}} = 0$ for all $\hat{\mathbf{a}}$.

**Normality, part 1 of the second statement.** Let $\boldsymbol{\gamma}$ be a differentiable curve with $\boldsymbol{\gamma}(0) = \mathbf{a}$ lying in $\phi^{-1}(c)$, so $\phi(\boldsymbol{\gamma}(t)) = c$ for all small $t$. Differentiating the constant function $t \mapsto \phi(\boldsymbol{\gamma}(t))$ at $t = 0$ and using the curve form of part 2,
$$
0 = \frac{d}{dt}\,\phi(\boldsymbol{\gamma}(t))\Big|_{t=0} = \nabla\phi(\mathbf{a})\cdot\boldsymbol{\gamma}'(0),
$$
so $\nabla\phi(\mathbf{a})$ is orthogonal to every such tangent vector. Note that this direction of the argument needs no regularity assumption at all: it holds even where $\nabla\phi$ vanishes, where it says nothing.

**Normality, part 2.** Since $\mathbf{a}$ is a regular point, some partial derivative is non-zero there; renumber the coordinates so that $\partial_3\phi(\mathbf{a}) \ne 0$. Then the $C^1$ function $\Phi(x_1,x_2;x_3) = \phi(x_1,x_2,x_3)$ has invertible partial derivative in its last variable at $\mathbf{a}$, so by the implicit function theorem (:ref[]{to=found.implicit-inverse-function}) there are a neighbourhood $W$ of $\mathbf{a}$ and a $C^1$ function $g$ with $\phi^{-1}(c)\cap W = \{(x_1,x_2,g(x_1,x_2))\}$. For each $\mathbf{v}$ in the plane $P = \{\mathbf{v} : \nabla\phi(\mathbf{a})\cdot\mathbf{v} = 0\}$ — a plane, because $\nabla\phi(\mathbf{a}) \ne \mathbf{0}$ makes the condition one non-trivial linear equation — the curve $t \mapsto (a_1 + tv_1,\, a_2 + tv_2,\, g(a_1+tv_1, a_2+tv_2))$ lies in $\phi^{-1}(c)$, passes through $\mathbf{a}$ at $t=0$, and is differentiable; its velocity there is a vector of $P$ with first two components $v_1, v_2$, and since a vector of $P$ is determined by its first two components (the coefficient of $x_3$ in the equation of $P$ being $\partial_3\phi(\mathbf{a}) \ne 0$), that velocity is $\mathbf{v}$ itself. So every vector of $P$ is tangent to the level surface, and by the previous paragraph no vector outside $P$ is. Hence the tangent vectors form exactly $P$, whose orthogonal complement is the line spanned by $\nabla\phi(\mathbf{a})$.

**Normality, part 3.** A point $\mathbf{r}$ lies in the plane through $\mathbf{r}_0$ with normal $\mathbf{n}_0$ precisely when $(\mathbf{r}-\mathbf{r}_0)\cdot\mathbf{n}_0 = 0$, and on the line through $\mathbf{r}_0$ in the direction $\mathbf{n}_0$ precisely when $(\mathbf{r}-\mathbf{r}_0)\times\mathbf{n}_0 = \mathbf{0}$, since a cross product vanishes exactly for parallel vectors (:ref[]{to=vcalc.vector-algebra}). Finally $\nabla\phi(\mathbf{a})$ is a positive multiple of $\hat{\mathbf{n}}$ by construction, and part 3 of the first statement identifies that multiple as $|\nabla\phi(\mathbf{a})| = \partial\phi/\partial n$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Differentiability, not just partial derivatives.* The formula $\nabla\phi$ needs only the three partial derivatives, but every statement above needs differentiability at the point. For $\phi(x_1,x_2,x_3) = x_1x_2/(x_1^2+x_2^2)$ off the $x_3$-axis and $0$ on it, both $\partial_1\phi$ and $\partial_2\phi$ vanish at the origin, so $\nabla\phi(\mathbf{0}) = \mathbf{0}$; yet $\phi = \tfrac12$ along the line $x_1 = x_2$, $x_3=0$, so the directional derivative along $(1,1,0)/\sqrt{2}$ does not exist and $\phi$ is not even continuous at the origin. The counterexamples in :ref[]{to=found.partial-derivatives-chain-rule} are of exactly this kind. Class $C^1$ is the usual sufficient condition.
- *Regularity for the level surface.* Part 1 of the normality statement holds everywhere; parts 2 and 3 need $\nabla\phi(\mathbf{a}) \ne \mathbf{0}$, and that is where the implicit function theorem is applied. Without it a level set need not be a surface and has no tangent plane: for $\phi = x_1^2 + x_2^2 - x_3^2$, the origin is a critical point and $\phi^{-1}(0)$ is a double cone, which has no tangent plane at its vertex. For $\phi = x_1^2+x_2^2+x_3^2$ the level set $\phi^{-1}(0)$ is a single point.
- *Steepest ascent is a statement about unit directions.* Dropping the normalisation makes it vacuous, since $\nabla\phi\cdot\mathbf{u}$ is unbounded in $\mathbf{u}$. This is the one place where our normalised $d\phi/ds$ differs from the unnormalised directional derivative of :ref[]{to=found.partial-derivatives-chain-rule}, and the two differ by the factor $|\mathbf{u}|$.
- *The equality case needs Cauchy–Schwarz with its equality case,* not merely the inequality: without it one would know the maximum is at most $|\nabla\phi|$ but not that the gradient direction is the only maximiser.
- *Radial fields.* For $\phi(\mathbf{r}) = f(r)$ with $r = |\mathbf{r}|$, the chain rule gives $\nabla\phi = f'(r)\,\hat{\mathbf{r}}$, in particular $\nabla r = \hat{\mathbf{r}}$ and $\nabla r^n = n r^{n-1}\hat{\mathbf{r}}$, as in Riley, Hobson and Bence (p. 355) and Arfken, Weber and Harris (Examples 3.5.1 and 3.5.3, pp. 145–146). All of these fail at $r = 0$, where $r$ is not differentiable; Arfken, Weber and Harris note this exclusion for the Coulomb case $n=-1$.
:::

:::note{provenance=adapted src="lee-2013:Ch. 13, pp. 342–343"}
**The gradient depends on the inner product; the differential does not.** The object defined by the partial derivatives alone is the linear form $d\phi : \mathbf{h}\mapsto \partial_i\phi\, h_i$, which needs no notion of length or angle. Turning that form into a *vector* requires an inner product, and the gradient is the vector that represents it: $\nabla\phi$ is the unique vector with $\nabla\phi\cdot\mathbf{v} = d\phi(\mathbf{v})$ for all $\mathbf{v}$. Lee makes exactly this the definition on a Riemannian manifold, writing $\operatorname{grad} f = (df)^\sharp$ for the vector field characterised by $\langle\operatorname{grad} f, X\rangle_g = Xf$, with the coordinate expression $g^{ij}(\partial f/\partial x^i)\,\partial/\partial x^j$. Our formula is the case $g_{ij} = \delta_{ij}$ of his. The practical consequences: the componentwise formula above is valid only in orthonormal Cartesian coordinates (for others see :ref[]{to=vcalc.curvilinear-coordinates}), and in a problem with a non-Euclidean metric — a curved space, or just a rescaling of units between axes — "the direction of steepest increase" changes while $d\phi$ does not.
:::

:::example{provenance=original}
Let
$$
\phi(x,y,z) = x^3y - 2y^2z + z^2 \qquad\text{and}\qquad P = (2,1,-1).
$$

**Step 1: the gradient.** Differentiating,
$$
\nabla\phi = \bigl(3x^2y,\; x^3 - 4yz,\; -2y^2 + 2z\bigr),
$$
so at $P$, $\nabla\phi(P) = (3\cdot 4\cdot 1,\; 8 - 4\cdot 1\cdot(-1),\; -2 + 2(-1)) = (12,\,12,\,-4)$. Its length is $|\nabla\phi(P)| = \sqrt{144+144+16} = \sqrt{304} = 4\sqrt{19} \approx 17.4356$. Since this is non-zero, $P$ is a regular point.

**Step 2: a directional derivative.** In the direction $\mathbf{a} = (2,-1,2)$, which has $|\mathbf{a}| = 3$, the unit vector is $\hat{\mathbf{a}} = \tfrac13(2,-1,2)$ and
$$
\frac{d\phi}{ds} = \nabla\phi(P)\cdot\hat{\mathbf{a}} = \tfrac13\bigl(24 - 12 - 8\bigr) = \tfrac43 .
$$
So $\phi$ increases at $4/3$ per unit length in that direction. The steepest rate at $P$ is $4\sqrt{19} \approx 17.44$, attained in the direction $(12,12,-4)/(4\sqrt{19}) = (3,3,-1)/\sqrt{19}$, and the steepest decrease is $-4\sqrt{19}$ in the opposite direction. Note $4/3$ is far below $4\sqrt{19}$: the angle $\theta$ between $\hat{\mathbf{a}}$ and $\nabla\phi(P)$ has $\cos\theta = (4/3)/(4\sqrt{19}) = 1/(3\sqrt{19}) \approx 0.0765$, so the chosen direction is nearly tangent to the level surface.

**Step 3: the level surface and its tangent plane.** $\phi(P) = 8\cdot 1 - 2\cdot 1\cdot(-1) + 1 = 11$, so $P$ lies on $\phi^{-1}(11)$. By part 3 of the normality statement the tangent plane there is
$$
12(x-2) + 12(y-1) - 4(z+1) = 0,
\qquad\text{that is}\qquad
3x + 3y - z = 10 ,
$$
after dividing by $4$; substituting $P$ gives $6+3+1 = 10$, as it must. The normal line is $\mathbf{r}(t) = (2,1,-1) + t\,(3,3,-1)$.

**Step 4: a check on orthogonality.** The direction $\mathbf{v} = (1,-1,0)$ satisfies $\nabla\phi(P)\cdot\mathbf{v} = 12 - 12 + 0 = 0$, so it should be tangent to the level surface. Indeed, moving from $P$ along $\mathbf{v}$ by $t$ gives
$$
\phi(2+t,\,1-t,\,-1) = (2+t)^3(1-t) + 2(1-t)^2 + 1 = 11 - 4t^2 - 5t^3 - t^4 ,
$$
which agrees with $11$ to first order in $t$ — the change is $O(t^2)$, with no linear term — exactly as orthogonality to the gradient predicts. (Expanding: $(2+t)^3(1-t) = (8+12t+6t^2+t^3)(1-t) = 8 + 4t - 6t^2 - 5t^3 - t^4$, and $2(1-t)^2 = 2 - 4t + 2t^2$; the two linear terms, $+4t$ and $-4t$, cancel, and $-6t^2+2t^2 = -4t^2$.)
:::

:::application{provenance=original}
**Constitutive laws are gradients, and that is why flux crosses level surfaces at right angles.** Fourier's law of heat conduction in an isotropic medium is $\mathbf{q} = -k\,\nabla T$ with $k > 0$ the conductivity, and Fick's law of diffusion is $\mathbf{J} = -D\,\nabla c$. Both say the same two things, and both are statements of the present unit: heat and matter flow in the direction of *steepest decrease* of temperature or concentration, with a rate set by $|\nabla T|$ or $|\nabla c|$; and the flux is everywhere perpendicular to the isotherms $T = \text{const}$ or the level sets of $c$. The second point is what makes a sketch of the level surfaces of $T$ a complete qualitative picture of the flow, and the normal derivative $\partial T/\partial n = |\nabla T|$ the quantity that appears in a Neumann boundary condition $-k\,\partial T/\partial n = q_{\text{in}}$ prescribing the heat entering a surface. In mechanics the same structure appears as $\mathbf{F} = -\nabla V$ for a conservative force: the force is normal to the equipotential surfaces and points downhill in $V$.

**Steepest descent as an algorithm, and gradient flow.** Because $-\nabla\phi$ is the direction of fastest decrease, the simplest way to minimise a smooth $\phi$ numerically is to step along it: $\mathbf{x}_{n+1} = \mathbf{x}_n - \eta\,\nabla\phi(\mathbf{x}_n)$. Its continuous-time limit is the gradient system $\dot{\mathbf{x}} = -\nabla V(\mathbf{x})$ of Hirsch, Smale and Devaney (§9.3, pp. 202–204), and the unit explains its behaviour completely: along a solution, the chain rule gives $\frac{d}{dt}V(\mathbf{x}(t)) = \nabla V\cdot\dot{\mathbf{x}} = -|\nabla V|^2 \le 0$, so $V$ decreases strictly except at the equilibria, which are precisely the critical points of $V$; and the trajectories cross the level sets of $V$ orthogonally. That is both why gradient descent cannot cycle and why it stalls in a long narrow valley, where the steepest direction points across the valley rather than along it. The same picture, with $V$ a free energy, is the relaxational dynamics of a physical system towards equilibrium.
:::
