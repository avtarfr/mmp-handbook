---
id: geom.frenet-serret
title: Curves and the Frenet-Serret formulas
kind: theorem
level: core
summary: Attaches to a space curve of nonvanishing curvature an orthonormal moving frame $(\mathbf{t}, \mathbf{n}, \mathbf{b})$, derives the three Frenet-Serret formulas that express its rate of turning through the curvature $\kappa$ and the torsion $\tau$ alone, and states the fundamental theorem that $\kappa$ and $\tau$ determine the curve up to a rigid motion, with the uniqueness half proved here.
prereqs: [found.partial-derivatives-chain-rule, vcalc.vector-algebra, vcalc.line-integrals, ode.existence-uniqueness]
provenance: adapted
sources:
  - work: docarmo-2016
    loc: "§1-5, pp. 17–23: the definition of curvature as $\\lvert\\alpha''(s)\\rvert$, the normal and binormal vectors, the osculating plane, the definition of torsion by $b' = \\tau n$, the Frenet trihedron and the Frenet formulas, the Fundamental Theorem of the Local Theory of Curves (p. 20) and the proof of its uniqueness half (pp. 21–22), and Remark 2 on reparametrization by arc length (pp. 22–23); §1-5, Exercise 12, pp. 26–27 (curvature and torsion for an arbitrary parameter)"
    pages: "17-23, 26-27"
    role: all the definitions; the derivation of $\mathbf{b}'$ and $\mathbf{n}'$; the statement of the fundamental theorem and the route of the uniqueness proof; the arbitrary-parameter formulas
  - work: rhb-2006
    loc: "§10.3, pp. 341–344: arc length from an arbitrary parameter, Eq. (10.12); the notation $\\kappa$, $\\rho = 1/\\kappa$, $\\tau$, $\\sigma = 1/\\tau$; the argument that $d\\hat b/ds \\perp \\hat t$; the sign convention $d\\hat b/ds = -\\tau\\hat n$, Eq. (10.14); the Frenet–Serret formulas, Eq. (10.16); and the decomposition of the acceleration of a particle"
    pages: "341-344"
    role: the sign convention followed here, the arc-length integral, and the kinematic decomposition of acceleration
---

:::definition[Arc length, the Frenet trihedron, curvature and torsion]{provenance=adapted src="docarmo-2016:§1-5, pp. 17–20 and Remark 2, pp. 22–23; rhb-2006:§10.3, Eq. (10.12), p. 341 and pp. 342–343"}
Let $I \subseteq \mathbb{R}$ be an open interval. A **regular parametrized curve** is a map $\mathbf{r} : I \to \mathbb{R}^3$ with continuous derivatives of every order and $\mathbf{r}'(u) \ne \mathbf{0}$ for all $u$.

- Its **arc length** measured from $u_0 \in I$ is $s(u) = \int_{u_0}^{u} \lvert \mathbf{r}'(\tilde u)\rvert\, d\tilde u$ (:ref[line integrals]{to=vcalc.line-integrals}). Since $s'(u) = \lvert\mathbf{r}'(u)\rvert > 0$, the function $s$ has a smooth inverse $u(s)$, and $\boldsymbol{\gamma}(s) = \mathbf{r}(u(s))$ traces the same set with $\lvert \boldsymbol{\gamma}'(s)\rvert = 1$. We call $\boldsymbol{\gamma}$ the **unit-speed** (or arc-length) parametrization, and write $\dot{\phantom{x}} = d/ds$.
- The **unit tangent** is $\mathbf{t}(s) = \dot{\boldsymbol{\gamma}}(s)$. Differentiating $\mathbf{t}\cdot\mathbf{t} = 1$ gives $\dot{\mathbf{t}}\cdot\mathbf{t} = 0$, so $\dot{\mathbf{t}} \perp \mathbf{t}$. The **curvature** is
  $$
  \kappa(s) = \lvert \dot{\mathbf{t}}(s)\rvert = \lvert \ddot{\boldsymbol{\gamma}}(s)\rvert \;\ge\; 0 ,
  $$
  and $\rho = 1/\kappa$ is the **radius of curvature**.
- **Standing hypothesis.** From here on $\kappa(s) > 0$ for every $s \in I$. (A point with $\ddot{\boldsymbol{\gamma}} = \mathbf{0}$ is what do Carmo calls a singular point of order $1$; the frame below is not defined there.) The **principal normal** is then the unit vector $\mathbf{n}(s)$ fixed by
  $$
  \dot{\mathbf{t}}(s) = \kappa(s)\,\mathbf{n}(s),
  $$
  and the **binormal** is $\mathbf{b}(s) = \mathbf{t}(s)\times\mathbf{n}(s)$. The ordered triple $(\mathbf{t}, \mathbf{n}, \mathbf{b})$ is an orthonormal right-handed basis of $\mathbb{R}^3$ at each $s$, the **Frenet trihedron**.
- The plane through $\boldsymbol{\gamma}(s)$ spanned by $\mathbf{t}$ and $\mathbf{n}$ is the **osculating plane**; the plane spanned by $\mathbf{n}$ and $\mathbf{b}$ is the **normal plane**, and the one spanned by $\mathbf{t}$ and $\mathbf{b}$ the **rectifying plane**.
- The **torsion** $\tau(s)$ is the number defined by
  $$
  \dot{\mathbf{b}}(s) = -\tau(s)\,\mathbf{n}(s) ,
  $$
  which the statement below shows to be well defined. Where $\tau \ne 0$, $\sigma = 1/\tau$ is the **radius of torsion**.

**Sign convention.** We follow Riley, Hobson and Bence, who set $d\hat b/ds = -\tau\hat n$. do Carmo defines torsion by $b' = \tau n$, with no minus sign, and warns in the same paragraph that authors differ; his $\tau$ is therefore the negative of ours. Every formula below is written in our convention, and the two places where the difference shows (the third Frenet formula and the sign in the arbitrary-parameter formula for $\tau$) are flagged again in the remark.
:::

:::statement[The Frenet-Serret formulas and the fundamental theorem]{provenance=adapted src="docarmo-2016:§1-5, pp. 19–20, where the binormal and normal derivatives and the Frenet formulas are obtained, and the fundamental theorem stated on p. 20; rhb-2006:§10.3, Eqs. (10.13)–(10.16), pp. 342–343"}
Let $\boldsymbol{\gamma} : I \to \mathbb{R}^3$ be a unit-speed curve with $\kappa(s) > 0$ throughout, and let $(\mathbf{t}, \mathbf{n}, \mathbf{b})$ be its Frenet trihedron.

1. **(Torsion is well defined.)** $\dot{\mathbf{b}}(s)$ is a scalar multiple of $\mathbf{n}(s)$, so there is exactly one function $\tau$ with $\dot{\mathbf{b}} = -\tau\mathbf{n}$, and $\tau = -\mathbf{n}\cdot\dot{\mathbf{b}}$ is smooth.
2. **(Frenet-Serret formulas.)**
   $$
   \dot{\mathbf{t}} = \kappa\,\mathbf{n}, \qquad
   \dot{\mathbf{n}} = -\kappa\,\mathbf{t} + \tau\,\mathbf{b}, \qquad
   \dot{\mathbf{b}} = -\tau\,\mathbf{n} .
   $$
   Equivalently, the matrix of the map $(\mathbf{t},\mathbf{n},\mathbf{b}) \mapsto (\dot{\mathbf{t}},\dot{\mathbf{n}},\dot{\mathbf{b}})$ in the frame itself is skew-symmetric with entries $\kappa$ and $\tau$ only.
3. **(Plane curves.)** If $\kappa > 0$ throughout, then $\tau \equiv 0$ on $I$ if and only if $\boldsymbol{\gamma}(I)$ lies in a plane.
4. **(do Carmo's fundamental theorem for curves.)** Let $\kappa(s) > 0$ and $\tau(s)$ be smooth on $I$. Then there is a unit-speed curve $\boldsymbol{\gamma} : I \to \mathbb{R}^3$ whose arc length is $s$, whose curvature is $\kappa$ and whose torsion is $\tau$. Any other curve $\bar{\boldsymbol{\gamma}}$ with the same $\kappa$ and $\tau$ differs from it by a rigid motion: there are an orthogonal linear map $R$ of $\mathbb{R}^3$ with $\det R = +1$ and a vector $\mathbf{c}$ with $\bar{\boldsymbol{\gamma}} = R\circ\boldsymbol{\gamma} + \mathbf{c}$.

do Carmo states part 4 with his own sign for $\tau$. The statement is unaffected by the convention, because the data $\tau$ ranges over all smooth real-valued functions either way: a curve realizing $(\kappa, \tau)$ in his convention realizes $(\kappa, -\tau)$ in ours.
:::

:::idea{provenance=original}
Each of the three frame vectors has constant length $1$, so each derivative is orthogonal to the vector itself; that alone forces the matrix of derivatives in the frame to be skew-symmetric, leaving only three independent entries. Two of them are named $\kappa$ and $\tau$ by definition. The third, the $\mathbf{t}$-component of $\dot{\mathbf{b}}$, is *not* a new quantity: differentiating $\mathbf{b}\cdot\mathbf{t} = 0$ and using $\dot{\mathbf{t}} = \kappa\mathbf{n}$ makes it vanish. So the local geometry is controlled by exactly two scalar functions. The uniqueness half of the fundamental theorem then follows by a stability argument: move one curve by a rigid motion until the two frames agree at a single point, and watch the total squared discrepancy $\lvert\mathbf{t}-\bar{\mathbf{t}}\rvert^2 + \lvert\mathbf{n}-\bar{\mathbf{n}}\rvert^2 + \lvert\mathbf{b}-\bar{\mathbf{b}}\rvert^2$; the Frenet formulas make its derivative cancel identically, so it stays at its initial value $0$.
:::

:::proof{provenance=adapted src="docarmo-2016:§1-5, pp. 19–20 and pp. 21–22 (uniqueness)"}
**Part 1.** $\mathbf{b}$ is a unit vector, so differentiating $\mathbf{b}\cdot\mathbf{b} = 1$ gives $\dot{\mathbf{b}}\cdot\mathbf{b} = 0$: the derivative has no $\mathbf{b}$-component. For the $\mathbf{t}$-component, differentiate $\mathbf{b} = \mathbf{t}\times\mathbf{n}$ by the product rule for the cross product,
$$
\dot{\mathbf{b}} = \dot{\mathbf{t}}\times\mathbf{n} + \mathbf{t}\times\dot{\mathbf{n}} = \kappa\,(\mathbf{n}\times\mathbf{n}) + \mathbf{t}\times\dot{\mathbf{n}} = \mathbf{t}\times\dot{\mathbf{n}},
$$
where $\dot{\mathbf{t}} = \kappa\mathbf{n}$ was used (this is where the hypothesis $\kappa > 0$ enters, since it is what makes $\mathbf{n}$ and hence $\mathbf{b}$ exist). A cross product with $\mathbf{t}$ is orthogonal to $\mathbf{t}$, so $\dot{\mathbf{b}}\cdot\mathbf{t} = 0$. Having no $\mathbf{b}$- and no $\mathbf{t}$-component in an orthonormal basis, $\dot{\mathbf{b}}$ is a multiple of $\mathbf{n}$. Writing that multiple as $-\tau$ defines $\tau$ uniquely, and $\tau = -\mathbf{n}\cdot\dot{\mathbf{b}}$ is smooth because $\mathbf{n}$ and $\mathbf{b}$ are.

**Part 2.** The first and third formulas are the definitions of $\kappa$ and $\tau$. For the middle one, use $\mathbf{n} = \mathbf{b}\times\mathbf{t}$ (valid because the frame is right-handed and orthonormal) and differentiate:
$$
\dot{\mathbf{n}} = \dot{\mathbf{b}}\times\mathbf{t} + \mathbf{b}\times\dot{\mathbf{t}}
= (-\tau\mathbf{n})\times\mathbf{t} + \mathbf{b}\times(\kappa\mathbf{n})
= \tau\,(\mathbf{t}\times\mathbf{n}) + \kappa\,(\mathbf{b}\times\mathbf{n})
= \tau\,\mathbf{b} - \kappa\,\mathbf{t},
$$
using $\mathbf{t}\times\mathbf{n} = \mathbf{b}$ and $\mathbf{b}\times\mathbf{n} = -\mathbf{t}$. So no third scalar appears.

**Part 3.** Suppose $\boldsymbol{\gamma}(I)$ lies in a plane with unit normal $\mathbf{m}$. Then $(\boldsymbol{\gamma}-\boldsymbol{\gamma}(s_0))\cdot\mathbf{m} \equiv 0$; differentiating twice gives $\mathbf{t}\cdot\mathbf{m} = 0$ and $\kappa\,\mathbf{n}\cdot\mathbf{m} = 0$, so, since $\kappa > 0$, both $\mathbf{t}$ and $\mathbf{n}$ are orthogonal to $\mathbf{m}$, whence $\mathbf{b} = \pm\mathbf{m}$ is constant and $\tau = 0$.

Conversely let $\tau \equiv 0$. Then $\dot{\mathbf{b}} = \mathbf{0}$, so $\mathbf{b} \equiv \mathbf{b}_0$ is a fixed unit vector, and
$$
\frac{d}{ds}\bigl[(\boldsymbol{\gamma}(s)-\boldsymbol{\gamma}(s_0))\cdot\mathbf{b}_0\bigr] = \mathbf{t}(s)\cdot\mathbf{b}_0 = 0 .
$$
The bracket vanishes at $s = s_0$, so it vanishes identically: the curve lies in the plane through $\boldsymbol{\gamma}(s_0)$ normal to $\mathbf{b}_0$.

**Part 4, existence.** Fix $s_0 \in I$. Regard the nine components of $(\mathbf{t},\mathbf{n},\mathbf{b})$ as unknowns in the linear system of ordinary differential equations given by the three Frenet formulas, with the coefficients $\kappa(s)$ and $\tau(s)$ as given data and with an arbitrary right-handed orthonormal triple as initial value at $s_0$. The coefficients are smooth, so the system has a unique solution on all of $I$ (:ref[existence and uniqueness for ODEs]{to=ode.existence-uniqueness}; the system is linear, so the solution does not escape in finite time). The skew-symmetry of the coefficient matrix makes the six inner products $\mathbf{t}\cdot\mathbf{t}, \mathbf{t}\cdot\mathbf{n}, \dots$ constant, so the solution stays orthonormal, and $\boldsymbol{\gamma}(s) = \int_{s_0}^{s}\mathbf{t}$ is then a unit-speed curve with the prescribed curvature and torsion. do Carmo states this part and defers its proof to the appendix of his Chapter 4; we record it as his statement.

**Part 4, uniqueness.** Arc length, curvature and torsion are built from inner and cross products of derivatives, and a rigid motion $\mathbf{x}\mapsto R\mathbf{x}+\mathbf{c}$ with $\det R = +1$ leaves all of these unchanged; so we may move $\bar{\boldsymbol{\gamma}}$ by such a motion and assume $\bar{\boldsymbol{\gamma}}(s_0) = \boldsymbol{\gamma}(s_0)$ and $\bar{\mathbf{t}}(s_0) = \mathbf{t}(s_0)$, $\bar{\mathbf{n}}(s_0) = \mathbf{n}(s_0)$, $\bar{\mathbf{b}}(s_0) = \mathbf{b}(s_0)$ (the motion taking one right-handed orthonormal frame to another has positive determinant, which is why no reflection is needed). Put
$$
D(s) = \lvert\mathbf{t}-\bar{\mathbf{t}}\rvert^2 + \lvert\mathbf{n}-\bar{\mathbf{n}}\rvert^2 + \lvert\mathbf{b}-\bar{\mathbf{b}}\rvert^2 .
$$
Both frames obey the Frenet formulas *with the same* $\kappa$ and $\tau$, by hypothesis. Hence
$$
\tfrac12 \dot D = (\mathbf{t}-\bar{\mathbf{t}})\cdot(\dot{\mathbf{t}}-\dot{\bar{\mathbf{t}}}) + (\mathbf{n}-\bar{\mathbf{n}})\cdot(\dot{\mathbf{n}}-\dot{\bar{\mathbf{n}}}) + (\mathbf{b}-\bar{\mathbf{b}})\cdot(\dot{\mathbf{b}}-\dot{\bar{\mathbf{b}}}) .
$$
Substituting the three formulas, the first term is $\kappa\,(\mathbf{t}-\bar{\mathbf{t}})\cdot(\mathbf{n}-\bar{\mathbf{n}})$; the third is $-\tau\,(\mathbf{b}-\bar{\mathbf{b}})\cdot(\mathbf{n}-\bar{\mathbf{n}})$; the second is $-\kappa\,(\mathbf{n}-\bar{\mathbf{n}})\cdot(\mathbf{t}-\bar{\mathbf{t}}) + \tau\,(\mathbf{n}-\bar{\mathbf{n}})\cdot(\mathbf{b}-\bar{\mathbf{b}})$. The four terms cancel in pairs, so $\dot D \equiv 0$. Since $D(s_0) = 0$ and $D \ge 0$, we get $D \equiv 0$, that is $\mathbf{t} \equiv \bar{\mathbf{t}}$ (and likewise for $\mathbf{n}, \mathbf{b}$). Finally $\frac{d}{ds}(\boldsymbol{\gamma}-\bar{\boldsymbol{\gamma}}) = \mathbf{t}-\bar{\mathbf{t}} = \mathbf{0}$, and the difference vanishes at $s_0$, so $\boldsymbol{\gamma} \equiv \bar{\boldsymbol{\gamma}}$. $\square$
:::

:::remark[Where each hypothesis is used]{provenance=original}
- **$\kappa > 0$ everywhere.** This is the hypothesis that does all the work. It is what makes $\mathbf{n} = \dot{\mathbf{t}}/\kappa$, and with it $\mathbf{b}$ and the osculating plane, exist at all; it is used again in Part 3 to pass from $\kappa\,\mathbf{n}\cdot\mathbf{m}=0$ to $\mathbf{n}\cdot\mathbf{m}=0$. Without it the frame can jump. do Carmo's Exercise 10 (p. 26) builds a smooth curve, two half-branches of $z = e^{-1/t^2}$ glued in perpendicular planes at $t=0$, which is regular and has $\kappa(0) = 0$ (his part (b) asks one to show that $k$ is nonzero except at $t = 0$ and $t = \pm\sqrt{2/3}$, so the vanishing is not confined to the join), yet whose osculating planes have different limits from the two sides; there $\tau$ can be set to $0$ although the curve is not planar, so Part 3 genuinely needs $\kappa>0$.
- **Unit speed.** Only here do $\lvert\ddot{\boldsymbol{\gamma}}\rvert$ and $\kappa$ coincide, and only here is $\dot{\mathbf{t}}\perp\mathbf{t}$ automatic. For a general parameter one must either reparametrize or use the formulas of the method below; $\lvert\mathbf{r}''(u)\rvert$ is *not* the curvature, because it also contains the change of speed.
- **Regularity $\mathbf{r}' \ne \mathbf{0}$.** This is what makes $s(u)$ strictly increasing and so invertible; a curve with a cusp, such as $u \mapsto (u^2, u^3)$ at $u = 0$, has no unit-speed reparametrization through that point.
- **Right-handedness.** $\mathbf{n} = \mathbf{b}\times\mathbf{t}$ in Part 2 and the "no reflection needed" step in the uniqueness proof both use that $(\mathbf{t},\mathbf{n},\mathbf{b})$ is positively oriented. A reflection of $\mathbb{R}^3$ preserves $\kappa$ but reverses the sign of $\tau$, which is why the fundamental theorem asks for $\det R = +1$.
- **Convention.** In do Carmo's sign convention the third formula reads $b' = \tau n$ and the middle one $n' = -kt - \tau b$; his arbitrary-parameter formula (his Exercise 12c) carries a minus sign that ours does not. Mixing the two conventions inside one calculation flips the handedness of the answer.
:::

:::method[Curvature and torsion from an arbitrary parameter]{provenance=adapted src="docarmo-2016:§1-5, Exercise 12, pp. 26–27; rhb-2006:§10.3, Eq. (10.12), p. 341"}
Given $\mathbf{r}(u)$ regular, with $\mathbf{r}', \mathbf{r}'', \mathbf{r}'''$ the derivatives with respect to $u$:

1. **Speed and arc length.** $v(u) = \lvert\mathbf{r}'(u)\rvert$, and $s = \int_{u_0}^{u} v$. Never reparametrize unless the integral is elementary; steps 2–4 do not need it.
2. **Curvature.**
   $$
   \kappa = \frac{\lvert \mathbf{r}'\times\mathbf{r}''\rvert}{\lvert\mathbf{r}'\rvert^{3}} .
   $$
3. **Torsion** (requires $\mathbf{r}'\times\mathbf{r}'' \ne \mathbf{0}$, i.e. $\kappa \ne 0$):
   $$
   \tau = \frac{(\mathbf{r}'\times\mathbf{r}'')\cdot\mathbf{r}'''}{\lvert\mathbf{r}'\times\mathbf{r}''\rvert^{2}} .
   $$
   In do Carmo's convention the right-hand side carries a minus sign.
4. **Frame.** $\mathbf{t} = \mathbf{r}'/v$, $\mathbf{b} = (\mathbf{r}'\times\mathbf{r}'')/\lvert\mathbf{r}'\times\mathbf{r}''\rvert$, $\mathbf{n} = \mathbf{b}\times\mathbf{t}$.
5. **Check.** $\kappa$ must come out $\ge 0$; a negative value means an arithmetic slip. For a plane curve step 3 must give $\tau = 0$.

Why steps 2 and 3 are right: write $\mathbf{r}' = v\,\mathbf{t}$ and differentiate with the chain rule $d/du = v\,d/ds$, giving $\mathbf{r}'' = v'\mathbf{t} + \kappa v^2\mathbf{n}$ and then $\mathbf{r}''' = (v''-\kappa^2v^3)\mathbf{t} + (3\kappa v v' + \kappa' v^2)\mathbf{n} + \kappa\tau v^3\mathbf{b}$. Hence $\mathbf{r}'\times\mathbf{r}'' = \kappa v^3\,\mathbf{b}$, which gives step 2 on taking lengths, and $(\mathbf{r}'\times\mathbf{r}'')\cdot\mathbf{r}''' = \kappa^2\tau v^6 = \tau\lvert\mathbf{r}'\times\mathbf{r}''\rvert^2$, which gives step 3.
:::

:::example[A conical spiral]{provenance=original}
Take the curve that winds up the cone $z^2 = x^2+y^2$ with exponentially growing radius,
$$
\mathbf{r}(u) = \bigl(e^{u}\cos u,\; e^{u}\sin u,\; e^{u}\bigr), \qquad u \in \mathbb{R}.
$$

**Step 1: derivatives.** Writing $C = \cos u$, $S = \sin u$ and factoring out $e^u$ each time,
$$
\mathbf{r}' = e^{u}(C-S,\; S+C,\; 1), \quad
\mathbf{r}'' = e^{u}(-2S,\; 2C,\; 1), \quad
\mathbf{r}''' = e^{u}(-2S-2C,\; 2C-2S,\; 1).
$$

**Step 2: speed and arc length.** $\lvert\mathbf{r}'\rvert^2 = e^{2u}\bigl[(C-S)^2+(S+C)^2+1\bigr] = e^{2u}(1+1+1) = 3e^{2u}$ because $(C-S)^2+(C+S)^2 = 2C^2+2S^2 = 2$. So $v(u) = \sqrt{3}\,e^{u}$, and the arc length from $u=0$ to $u=1$ is
$$
s = \int_0^1 \sqrt{3}\,e^{u}\,du = \sqrt{3}\,(e-1) = 2.97615\ldots
$$

**Step 3: the cross product.** Expanding the determinant and taking the common factor $e^{2u}$ out of both rows,
$$
\mathbf{r}'\times\mathbf{r}'' = e^{2u}\bigl(\,S-C,\;\; -(C+S),\;\; 2\,\bigr),
$$
because the third entry is $(C-S)(2C) - (S+C)(-2S) = 2C^2 - 2SC + 2S^2 + 2SC = 2$. Its squared length is
$$
\lvert\mathbf{r}'\times\mathbf{r}''\rvert^2 = e^{4u}\bigl[(S-C)^2 + (C+S)^2 + 4\bigr] = e^{4u}\bigl[(1-2SC)+(1+2SC)+4\bigr] = 6\,e^{4u},
$$
so $\lvert\mathbf{r}'\times\mathbf{r}''\rvert = \sqrt{6}\,e^{2u}$. As a cross-check, the Lagrange identity $\lvert\mathbf{a}\times\mathbf{b}\rvert^2 = \lvert\mathbf{a}\rvert^2\lvert\mathbf{b}\rvert^2 - (\mathbf{a}\cdot\mathbf{b})^2$ (:ref[vector algebra]{to=vcalc.vector-algebra}) with $\lvert\mathbf{r}''\rvert^2 = e^{2u}(4S^2+4C^2+1) = 5e^{2u}$ and $\mathbf{r}'\cdot\mathbf{r}'' = e^{2u}\bigl[-2S(C-S)+2C(S+C)+1\bigr] = 3e^{2u}$ gives $3e^{2u}\cdot 5e^{2u} - (3e^{2u})^2 = 6e^{4u}$, the same answer.

**Step 4: curvature.** $\lvert\mathbf{r}'\rvert^3 = (\sqrt3\,e^{u})^3 = 3\sqrt{3}\,e^{3u}$, so
$$
\kappa(u) = \frac{\sqrt{6}\,e^{2u}}{3\sqrt{3}\,e^{3u}} = \frac{\sqrt{2}}{3}\,e^{-u}.
$$

**Step 5: torsion.** Pairing $\mathbf{r}'\times\mathbf{r}'' = e^{2u}\bigl(S-C,\,-(C+S),\,2\bigr)$ with $\mathbf{r}''' = e^{u}\bigl(-2(S+C),\,2(C-S),\,1\bigr)$,
$$
(\mathbf{r}'\times\mathbf{r}'')\cdot\mathbf{r}''' = e^{3u}\bigl[-2(S-C)(S+C) - 2(C+S)(C-S) + 2\bigr]
= e^{3u}\bigl[-2(S^2-C^2) - 2(C^2-S^2) + 2\bigr] = 2\,e^{3u},
$$
the two quadratic terms cancelling exactly. Hence
$$
\tau(u) = \frac{2e^{3u}}{6e^{4u}} = \frac{1}{3}\,e^{-u}.
$$

**Step 6: the numbers.** At $u = 0$ the curve passes through $(1,0,1)$ with
$$
\kappa(0) = \frac{\sqrt2}{3} = 0.4714045\ldots, \qquad \tau(0) = \frac13 = 0.3333\ldots, \qquad \frac{\kappa}{\tau} = \sqrt2 \text{ (constant)}.
$$
The ratio $\kappa/\tau$ being constant says the curve is a generalized helix: its tangent makes a fixed angle with the cone's axis, here $\arccos\bigl(1/\sqrt3\bigr) = 54.7356^\circ$, since $\mathbf{t}\cdot\hat{\mathbf{z}} = 1/\sqrt3$. Both $\kappa$ and $\tau$ decay like $e^{-u}$: the spiral straightens as it opens out, exactly as the self-similarity of the cone demands.
:::

:::application[Kinematics, track design and elastic rods]{provenance=original}
**Acceleration.** For a particle at $\mathbf{r}(t)$ with speed $v = ds/dt$, the chain rule and the first Frenet formula give
$$
\mathbf{a} = \frac{d}{dt}\,(v\,\mathbf{t}) = \dot v\,\mathbf{t} + \kappa v^2\,\mathbf{n} = \dot v\,\mathbf{t} + \frac{v^2}{\rho}\,\mathbf{n}.
$$
The tangential part changes the speed, the normal part is the centripetal acceleration, and the binormal part is zero whatever the path: an acceleration can never point out of the osculating plane. This decomposition is how banking angles, $g$-loads on a roller coaster and the lateral force on a vehicle in a bend are computed.

**Transition curves.** Because the lateral force is $mv^2\kappa$, a track joining a straight ($\kappa=0$) directly to a circular arc ($\kappa = 1/R$) subjects a passenger to a jump in force. Railways and highways therefore insert a *clothoid*, the plane curve with $\kappa$ proportional to $s$, so that at constant speed the lateral force ramps up linearly and the jerk stays bounded. That such a curve exists and is unique up to a rigid motion is precisely the plane case of the fundamental theorem.

**Charged particles.** A particle of charge $q$ and mass $m$ moving with speed $v$ in a uniform field $\mathbf{B}$ follows a circular helix, the unique curve with constant $\kappa$ and constant $\tau$. Write $\alpha$ for the pitch angle between $\mathbf{v}$ and $\mathbf{B}$ and $\omega = qB/m$ for the gyrofrequency. The orbit is $\bigl(a\cos\omega t,\, a\sin\omega t,\, v\cos\alpha\,t\bigr)$ with gyroradius $a = v\sin\alpha/\omega = mv\sin\alpha/(qB)$, and the formulas of the method give the constants
$$
\kappa = \frac{a\omega^2}{v^2} = \frac{\omega\sin\alpha}{v} = \frac{qB\sin\alpha}{mv}, \qquad
\tau = \frac{\omega\cos\alpha}{v} = \frac{qB\cos\alpha}{mv} .
$$
So the radius of curvature is *not* the gyroradius: $\rho = 1/\kappa = a/\sin^2\alpha$, the two agreeing only for a purely perpendicular orbit, $\alpha = \pi/2$. (At $\alpha = 60^\circ$ with $v = \omega = 1$: $a = 0.8660$, $1/a = 1.1547$, but $\kappa = 0.8660$.) Magnetic-mirror and tokamak confinement arguments are usually phrased in exactly these two constants.

**Rods and polymers.** In Kirchhoff's theory of a thin elastic rod, the strain of the centreline is measured by $\kappa$ and $\tau$ relative to their unstressed values, and the elastic energy is a quadratic form in them. The same two functions are the standard coarse-grained description of double-stranded DNA, where bending stiffness couples to $\kappa$ and the supercoiling that packs the molecule into a cell couples to $\tau$.
:::
