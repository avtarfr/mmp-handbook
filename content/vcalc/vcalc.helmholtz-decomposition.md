---
id: vcalc.helmholtz-decomposition
title: Helmholtz decomposition and potentials
kind: theorem
level: core
summary: States and proves the two theorems of potential theory as Arfken gives them — a field is determined by its divergence, its curl and its boundary normal component on a simply connected region, and a field whose source and circulation densities vanish at infinity splits into an irrotational part $-\nabla\varphi$ and a solenoidal part $\nabla\times\mathbf{A}$ with the two Poisson integrals as potentials — and describes the gauge freedom in $\varphi$ and $\mathbf{A}$.
prereqs: [vcalc.divergence-theorem, vcalc.stokes-theorem, vcalc.line-integrals, vcalc.green-identities, vcalc.dirac-delta-basics, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§3.9, 'Potential Theory', pp. 171–180: Eqs. (3.96)–(3.100), pp. 171–172 (scalar potential, path independence, $\\nabla\\times\\mathbf{F}=\\mathbf{0}$, and the paragraph on p. 172 asserting their equivalence); Eq. (3.102), p. 172, with the verification $\\nabla\\times\\mathbf{A}=\\mathbf{B}$ in the unnumbered text on p. 173 and the paragraph there beginning 'While we have shown' (the explicit vector potential for a solenoidal field, and the statement that $\\mathbf{A}$ is far from unique); Example 3.9.2, p. 174 (three vector potentials for a constant $\\mathbf{B}$, reconciled by adding $\\nabla\\varphi$); Example 3.9.3 with Eqs. (3.108)–(3.111), pp. 174–175 (electromagnetic potentials and the Lorentz gauge); the uniqueness theorem and its proof, pp. 177–178; Helmholtz's theorem, its statement, the formulas (3.123)–(3.125), the verification, and the closing paragraph straddling pp. 179–180 that reads $s$ as the charge density divided by $\\varepsilon_0$ and $\\mathbf{c}$ as $\\mu_0$ times the current density, pp. 178–180"
    pages: "171-180"
    role: the statements of both theorems exactly as this unit gives them, the integral formulas for $\varphi$ and $\mathbf{A}$, the proof route, and the gauge discussion
  - work: rhb-2006
    loc: "§10.8.2, 'Combinations of grad, div and curl', which opens on p. 355: Eqs. (10.37)–(10.38) and (10.41), p. 356 ($\\nabla\\times\\nabla\\phi = \\mathbf{0}$, $\\nabla\\cdot(\\nabla\\times\\mathbf{a}) = 0$ and the identity $\\nabla\\times(\\nabla\\times\\mathbf{a}) = \\nabla(\\nabla\\cdot\\mathbf{a}) - \\nabla^2\\mathbf{a}$), and Eq. (10.42) with the warning that the componentwise form is available only where the basis vectors are constant, p. 357; §11.4, p. 389 (the scalar potential is unique up to a constant; a solenoidal $\\mathbf{b}$ admits $\\mathbf{a}$ with $\\mathbf{b} = \\nabla\\times\\mathbf{a}$, and $\\mathbf{a} + \\nabla\\psi + \\mathbf{c}$ serves equally well; multivalued scalar potentials)"
    pages: "355-357, 389"
    role: the two vanishing identities, the curl-curl identity used in the proof with its coordinate caveat, and the gauge freedom
  - work: strauss-2008
    loc: "§7.1, Eq. (G1), p. 180 (Green's first identity, used in the uniqueness proof) and p. 182 (the energy argument that a vanishing Dirichlet integral forces a constant)"
    pages: "180-182"
    role: the identity and the energy argument behind the uniqueness theorem
---

:::statement[Scalar and vector potentials]{provenance=adapted src="arfken-2013:§3.9, Eqs. (3.96)–(3.100), pp. 171–172 and Eq. (3.102), p. 172, verified on p. 173; rhb-2006:§10.8.2, Eqs. (10.37)–(10.38), p. 356 and §11.4, p. 389"}
Two one-line identities govern everything in this unit: for $\phi \in C^2$ and $\mathbf{a} \in C^2$,

$$
\nabla\times\nabla\phi = \mathbf{0}, \qquad\qquad \nabla\cdot(\nabla\times\mathbf{a}) = 0 .
$$

So a gradient is irrotational and a curl is solenoidal. The converses are the content of potential theory:

1. **Scalar potential.** On a simply connected region, a $C^1$ field $\mathbf{F}$ with $\nabla\times\mathbf{F} = \mathbf{0}$ can be written $\mathbf{F} = -\nabla\varphi$; Arfken calls $\varphi$ a scalar potential, and the three conditions $\mathbf{F} = -\nabla\varphi$, $\oint\mathbf{F}\cdot d\mathbf{r} = 0$ and $\nabla\times\mathbf{F} = \mathbf{0}$ are equivalent there. The step from the vanishing circulation to the vanishing curl is :ref[Stokes' theorem]{to=vcalc.stokes-theorem} applied to small loops, which is how Arfken takes it (p. 172); the rest is :ref[the theorem on conservative fields]{to=vcalc.line-integrals}, with the physicists' sign. $\varphi$ is determined up to one additive constant.

   *Why simple connectivity is needed.* Arfken imposes it too: the section opens "over a given simply connected region of space (one with no holes)" (p. 171), and the equivalence of his three conditions, Eqs. (3.96), (3.99) and (3.100), is stated within that setting (p. 172). The hypothesis cannot be dropped. On $\mathbb{R}^3$ minus the $z$-axis the field $(-y, x, 0)/(x^2+y^2)$ has zero curl everywhere yet circulation $2\pi$ around any loop encircling the axis (:ref[line integrals]{to=vcalc.line-integrals}), so a curl-free field there need not be a gradient.
2. **Vector potential.** A $C^1$ field $\mathbf{B}$ with $\nabla\cdot\mathbf{B} = 0$ admits a field $\mathbf{A}$ with $\mathbf{B} = \nabla\times\mathbf{A}$. Arfken's Eq. (3.102), p. 172, exhibits one explicitly,
   $$
   \mathbf{A} = \hat{\mathbf{e}}_y\!\int_{x_0}^{x}\!\! B_z(x,y,z)\, dx \;+\; \hat{\mathbf{e}}_z\!\left[\int_{y_0}^{y}\!\! B_x(x_0,y,z)\, dy - \int_{x_0}^{x}\!\! B_y(x,y,z)\, dx\right] ,
   $$
   and the text on p. 173 verifies $\nabla\times\mathbf{A} = \mathbf{B}$ for it, the $x$-component being the one that uses $\nabla\cdot\mathbf{B} = 0$. Riley, Hobson and Bence state the existence of such an $\mathbf{A}$ without proof (p. 389).
3. **Gauge freedom.** $\mathbf{A}$ is far from unique — Arfken's own phrase, in the paragraph on p. 173 that follows the verification: for any scalar $\psi$ and any constant vector $\mathbf{k}$ (Riley, Hobson and Bence call this constant vector $\mathbf{c}$; that letter is reserved here for Arfken's circulation density in Helmholtz's theorem below),
   $$
   \mathbf{A}' = \mathbf{A} + \nabla\psi + \mathbf{k} \qquad\text{also satisfies}\qquad \nabla\times\mathbf{A}' = \mathbf{B} ,
   $$
   by the first identity above. Arfken's formula also depends on the arbitrary base point $(x_0, y_0)$, and a second formula with $x$ and $y$ interchanged (his Eq. (3.103)) gives yet another $\mathbf{A}$. Replacing $\mathbf{A}$ by $\mathbf{A} + \nabla\psi$ is called a **gauge transformation**.
:::

:::statement[Uniqueness from divergence, curl and boundary data]{provenance=adapted src="arfken-2013:§3.9, pp. 177–178"}
Let $V$ be a *bounded* simply connected region with piecewise $C^1$ boundary, and let $\mathbf{P}$ and $\mathbf{P}'$ be $C^1$ fields on the closed region $\overline V$ that agree in all three of

$$
\nabla\cdot\mathbf{P} = \nabla\cdot\mathbf{P}', \qquad \nabla\times\mathbf{P} = \nabla\times\mathbf{P}', \qquad \mathbf{P}\cdot\hat{\mathbf{n}} = \mathbf{P}'\cdot\hat{\mathbf{n}} \ \text{ on } \partial V .
$$

Then $\mathbf{P} = \mathbf{P}'$ everywhere in $V$. Read as a recipe: three pieces of data pin a field down on such a region — how much it spreads out, how much it circulates, and how much of it crosses the boundary.

Boundedness is our hypothesis, not Arfken's. He asks only for a simply connected region, and his proof, which is the one given below, runs through Green's first identity; that identity is available on a *bounded* region with piecewise $C^1$ boundary and not otherwise (:ref[Green's identities]{to=vcalc.green-identities}). The hypothesis is load-bearing rather than decorative: on $V = \mathbb{R}^3$, which is simply connected and has no boundary at all, the boundary condition would be vacuous and the conclusion false, since every constant field has zero divergence and zero curl. Arfken applies the theorem to all of space in his proof of Helmholtz's theorem; Step 5 of our second proof below therefore replaces that appeal by a limit over balls, and the difference from the source is recorded in `verification/discrepancies.md`.

A caveat of Arfken's applies here and to Helmholtz's theorem below. Suppose the divergence or the curl of the field makes sense at some point only as a delta function; that point still belongs to the region, and is not to be excised from it. A point charge sitting inside $V$ is therefore covered, with $\nabla\cdot\mathbf{P}$ understood as a multiple of $\delta^{(3)}$ (:ref[the Dirac delta]{to=vcalc.dirac-delta-basics}) — whereas removing the point would replace $V$ by a region that is not simply connected in the same way, and the conclusion could fail.
:::

:::statement[Helmholtz's theorem]{provenance=adapted src="arfken-2013:§3.9, Eqs. (3.122)–(3.125) and the closing paragraph straddling pp. 179–180, pp. 178–180"}
Suppose a field $\mathbf{P}$ has a source density and a circulation density that both die away at infinity. Then $\mathbf{P}$ splits into two summands, the first of them irrotational and the second solenoidal. Explicitly, with

$$
s = \nabla\cdot\mathbf{P} \quad\text{(the source density)}, \qquad \mathbf{c} = \nabla\times\mathbf{P} \quad\text{(the circulation density)},
$$

the decomposition is

$$
\mathbf{P} = -\nabla\varphi + \nabla\times\mathbf{A},
\qquad
\varphi(\mathbf{r}_1) = \frac{1}{4\pi}\int \frac{s(\mathbf{r}_2)}{r_{12}}\; d\tau_2 ,
\qquad
\mathbf{A}(\mathbf{r}_1) = \frac{1}{4\pi}\int \frac{\mathbf{c}(\mathbf{r}_2)}{r_{12}}\; d\tau_2 ,
$$

where $r_{12} = \lvert\mathbf{r}_1 - \mathbf{r}_2\rvert$ and the integrals are over all space. The first part is irrotational because $\nabla\times\nabla\varphi = \mathbf{0}$ and the second is solenoidal because $\nabla\cdot(\nabla\times\mathbf{A}) = 0$, so the two pieces carry the whole of the divergence and the whole of the curl respectively.

In electromagnetic language, $s$ is the charge density divided by $\varepsilon_0$ and $\mathbf{c}$ is the current density times $\mu_0$; Arfken says the theorem is what legitimizes splitting the quantities of electromagnetic theory into an irrotational $\mathbf{E}$ and a solenoidal $\mathbf{B}$, each with its own potential.
:::

:::note{provenance=original}
**On the hypothesis.** The hypothesis is stated above exactly as Arfken states it: the source and circulation densities vanish at infinity. He also uses, in appealing to the uniqueness theorem, that the field itself vanishes at infinity. Mere vanishing is not by itself enough for the two integrals to converge — for $\varphi(\mathbf{r}_1)$ to converge one needs $s$ to decay faster than $1/r^2$, which holds in the case of chief interest, where $s$ and $\mathbf{c}$ have bounded support, as in the first example below. Convergence is not the only thing mere vanishing fails to give: the integration by parts in Step 3 of the second proof below needs $\mathbf{c} = o(1/r)$, and the identification of $\mathbf{P}^{\star}$ with $\mathbf{P}$ in Step 5 needs a decay rate for the field, neither of which follows from vanishing alone. The remark below sets out all three conditions and which step needs which. We follow the source and state the hypothesis as given; a reader applying the theorem to a slowly decaying source should check those conditions first.
:::

:::idea{provenance=original}
The uniqueness theorem is the energy argument of :ref[Green's identities]{to=vcalc.green-identities} in disguise. The difference of two candidate fields has zero divergence, zero curl and zero normal component. Zero curl on a simply connected region means it is a gradient; zero divergence then makes its potential harmonic; and Green's first identity converts the vanishing boundary data of a harmonic function into the vanishing of $\int\lvert\nabla\varphi\rvert^2$, which forces the field itself to vanish.

Helmholtz's theorem is then proved without any further analysis, by *checking* rather than constructing. The two candidate potentials are built out of $1/r_{12}$ for one reason only: $\nabla^2(1/r) = -4\pi\delta^{(3)}$, so applying the Laplacian to either integral sifts the source back out. That gives the proposed field the right divergence and the right curl — the curl computation needing one extra observation, that a circulation density is itself divergence-free, which kills the unwanted $\nabla(\nabla\cdot\mathbf{A})$ term. Having the right divergence and curl, it is the right field — not by the uniqueness theorem itself, which speaks only of bounded regions, but by running that theorem's energy argument on the ball $r < R$ and letting $R$ grow, the boundary term on the sphere being what the decay of the field kills.
:::

:::proof[The uniqueness theorem]{provenance=adapted src="arfken-2013:§3.9, p. 178; strauss-2008:§7.1, Eq. (G1), p. 180"}
**Step 1 (reduce to the homogeneous case).** Let $\mathbf{Q} = \mathbf{P} - \mathbf{P}'$. By linearity of $\nabla\cdot$ and $\nabla\times$ and of the normal component,

$$
\nabla\cdot\mathbf{Q} = 0 \ \text{ in } V, \qquad \nabla\times\mathbf{Q} = \mathbf{0} \ \text{ in } V, \qquad \mathbf{Q}\cdot\hat{\mathbf{n}} = 0 \ \text{ on } \partial V .
$$

It suffices to show $\mathbf{Q} \equiv \mathbf{0}$.

**Step 2 (a potential for $\mathbf{Q}$).** $\mathbf{Q}$ is $C^1$ and irrotational on the simply connected region $V$, so by part 1 of the first statement there is $\phi$ with $\mathbf{Q} = -\nabla\phi$ (:ref[conservative fields]{to=vcalc.line-integrals}). Since $\mathbf{Q}$ is $C^1$ on $\overline V$, so is $\nabla\phi$, and $\phi \in C^2(\overline V)$ — which is what Step 4 will need. Here, and only here, simple connectivity is used.

**Step 3 ($\phi$ is harmonic, and its normal derivative vanishes).** Taking the divergence, $0 = \nabla\cdot\mathbf{Q} = -\nabla^2\phi$, so $\nabla^2\phi = 0$ in $V$. On $\partial V$, $\partial\phi/\partial n = \hat{\mathbf{n}}\cdot\nabla\phi = -\mathbf{Q}\cdot\hat{\mathbf{n}} = 0$.

**Step 4 (Green's first identity).** $V$ is bounded with piecewise $C^1$ boundary and $\phi \in C^2(\overline V)$, so Green's first identity is available (:ref[Green's identities]{to=vcalc.green-identities}) — this is where boundedness is used. Apply (G1) with $u = v = \phi$:

$$
\oint_{\partial V} \phi\,\frac{\partial\phi}{\partial n}\; dS = \int_V \lvert\nabla\phi\rvert^2\; dV + \int_V \phi\,\nabla^2\phi\; dV .
$$

The left side vanishes because $\partial\phi/\partial n = 0$ on $\partial V$ (Step 3) — this is where the boundary hypothesis is used — and the last term vanishes because $\phi$ is harmonic. Hence

$$
\int_V \lvert\nabla\phi\rvert^2\; dV = \int_V \mathbf{Q}\cdot\mathbf{Q}\; dV = 0 .
$$

**Step 5 (conclude).** The integrand $\lvert\mathbf{Q}\rvert^2$ is continuous and non-negative with zero integral, so it vanishes identically: were it positive at a point it would exceed half that value on a ball around the point, making the integral positive. Thus $\mathbf{Q} \equiv \mathbf{0}$ and $\mathbf{P} = \mathbf{P}'$. $\square$
:::

:::proof[Helmholtz's theorem]{provenance=adapted src="arfken-2013:§3.9, pp. 178–179; rhb-2006:§10.8.2, Eq. (10.41), p. 356 and Eq. (10.42), p. 357"}
**The case proved.** The statement above is Arfken's, with his hypothesis that the two densities vanish at infinity. What is proved here is the case his integral formulas are really written for, and it is declared in full before the argument starts rather than being assembled as it goes:

- $\mathbf{P}$ is $C^2$ on $\mathbb{R}^3$, so that $s = \nabla\cdot\mathbf{P}$ is $C^1$ and $\mathbf{c} = \nabla\times\mathbf{P}$ is $C^1$ with $\nabla\cdot\mathbf{c} = 0$;
- $s$ and $\mathbf{c}$ vanish outside some ball $r \le a$ (compact support);
- $\mathbf{P} = O(r^{-2})$ as $r \to \infty$.

Compact support does three things. It makes the two integrals converge, since each is an integral of a bounded density against the locally integrable kernel $1/r_{12}$ over a bounded set. It makes the single differentiation of Step 3 legitimate under the integral sign, because $\lvert\nabla_1(1/r_{12})\rvert = r_{12}^{-2}$ is locally integrable too and the domain is a fixed compact set (:ref[differentiation under the integral sign]{to=found.differentiation-under-integral}); the second derivatives are never taken naively, the two Laplacians being read through the identity $\nabla^2(1/r) = -4\pi\delta^{(3)}$ of :ref[the Dirac delta]{to=vcalc.dirac-delta-basics}, which is itself a statement about integrals of exactly this shape. And it makes the surface term discarded in Step 3 vanish identically for large spheres rather than merely in a limit. The decay $\mathbf{P} = O(r^{-2})$ is the quantitative form of Arfken's "the vector involved vanishes at infinity", and Step 5 is where it is used. What each hypothesis can be weakened to is set out in the remark below.

Write $\mathbf{P}^{\star} = -\nabla\varphi + \nabla\times\mathbf{A}$ for the proposed field, with $\varphi$ and $\mathbf{A}$ the two integrals of the statement. Subscripts on $\nabla$ record which variable is being differentiated.

**Step 1 (the divergence comes out right).** Since $\nabla\cdot(\nabla\times\mathbf{A}) = 0$,

$$
\nabla_1\cdot\mathbf{P}^{\star} = -\nabla_1^2\varphi(\mathbf{r}_1)
= -\frac{1}{4\pi}\int \left[\nabla_1^2\frac{1}{r_{12}}\right] s(\mathbf{r}_2)\; d\tau_2
= -\frac{1}{4\pi}\int \bigl[-4\pi\,\delta^{(3)}(\mathbf{r}_1-\mathbf{r}_2)\bigr]\, s(\mathbf{r}_2)\; d\tau_2 = s(\mathbf{r}_1) ,
$$

using :ref[$\nabla^2(1/r) = -4\pi\delta^{(3)}$]{to=vcalc.dirac-delta-basics} and then the sifting property. So $\mathbf{P}^{\star}$ has the same divergence as $\mathbf{P}$.

**Step 2 (prepare the curl).** Since $\nabla\times\nabla\varphi = \mathbf{0}$, we need $\nabla\times(\nabla\times\mathbf{A}) = \mathbf{c}$. Use the identity

$$
\nabla\times(\nabla\times\mathbf{A}) = \nabla(\nabla\cdot\mathbf{A}) - \nabla^2\mathbf{A} ,
$$

which in Cartesian components reads $[\nabla\times(\nabla\times\mathbf{A})]_j = [\nabla(\nabla\cdot\mathbf{A})]_j - \nabla^2A_j$. Riley, Hobson and Bence's Eq. (10.41) is the vector identity, and they attach to the componentwise step, their Eq. (10.42), the warning that it is available only when the basis vectors are constant in direction, as in Cartesian coordinates, and not in cylindrical or spherical polars (§10.8.2, p. 357). We work in Cartesian coordinates throughout.

**Step 3 (the unwanted term vanishes).** Differentiating under the integral sign and noting that $s$ and $\mathbf{c}$ do not depend on $\mathbf{r}_1$,

$$
\nabla_1\cdot\mathbf{A}(\mathbf{r}_1) = \frac{1}{4\pi}\int \mathbf{c}(\mathbf{r}_2)\cdot\nabla_1\frac{1}{r_{12}}\; d\tau_2
= -\frac{1}{4\pi}\int \mathbf{c}(\mathbf{r}_2)\cdot\nabla_2\frac{1}{r_{12}}\; d\tau_2 ,
$$

the sign change because $1/r_{12}$ depends on $\mathbf{r}_1-\mathbf{r}_2$, so that differentiating with respect to $\mathbf{r}_2$ instead of $\mathbf{r}_1$ reverses the result. Now integrate by parts in $\mathbf{r}_2$. Fix $\mathbf{r}_1$ and take $R > \max(a, 2r_1)$, so that the ball $V_R = \{r_2 < R\}$ contains the whole support of $\mathbf{c}$ in its interior. Write $g = 1/r_{12}$; away from $\mathbf{r}_2 = \mathbf{r}_1$ the product rule gives $\nabla_2\cdot(g\,\mathbf{c}) = \mathbf{c}\cdot\nabla_2 g + g\,\nabla_2\cdot\mathbf{c}$. Apply :ref[the divergence theorem]{to=vcalc.divergence-theorem} on $V_R$ with the ball $r_{12} < \varepsilon$ removed, where $g\,\mathbf{c}$ is $C^1$. The inner sphere contributes at most $\varepsilon^{-1}\cdot 4\pi\varepsilon^2\cdot\max\lvert\mathbf{c}\rvert \to 0$, while both volume integrands are absolutely integrable near $\mathbf{r}_1$ ($g = r_{12}^{-1}$ and $\lvert\nabla_2 g\rvert = r_{12}^{-2}$, against $d\tau_2 \sim r_{12}^2\,dr_{12}$). Letting $\varepsilon \to 0$ therefore gives

$$
\int_{V_R} \mathbf{c}\cdot\nabla_2 g\; d\tau_2 = \oint_{r_2 = R} g\,\mathbf{c}\cdot d\mathbf{S}_2 \;-\; \int_{V_R} g\,\bigl(\nabla_2\cdot\mathbf{c}\bigr)\, d\tau_2 .
$$

**The surface term is exactly zero**, not merely small: $\mathbf{c}$ vanishes on the sphere $r_2 = R$, because $R > a$ and $\mathbf{c}$ is supported in $r_2 \le a$. This is where the compact support declared in the preamble is used, and it is the one place where Arfken's hypothesis that $\mathbf{c}$ merely vanishes at infinity would not suffice. For a $\mathbf{c}$ without compact support the term is bounded only by $4\pi R^2\cdot\max_{r_2=R}\lvert\mathbf{c}\rvert/(R-r_1)$, hence by $8\pi R\max_{r_2=R}\lvert\mathbf{c}\rvert$ once $R > 2r_1$, because the sphere's area grows like $R^2$ while the kernel decays only like $R^{-1}$; so it dies as $R \to \infty$ only if $\mathbf{c} = o(1/r)$, and for $\lvert\mathbf{c}\rvert\sim 1/r$ — a circulation density that does vanish at infinity — the bound does not tend to zero at all. Since $\mathbf{c}$ is supported in $r_2 \le a$, the remaining volume integral is already the integral over all of space, and no limit in $R$ is needed:

$$
\nabla_1\cdot\mathbf{A}(\mathbf{r}_1) = \frac{1}{4\pi}\int \bigl[\nabla_2\cdot\mathbf{c}(\mathbf{r}_2)\bigr]\,\frac{1}{r_{12}}\; d\tau_2 = 0 ,
$$

because $\mathbf{c} = \nabla\times\mathbf{P}$ is a curl and $\nabla\cdot(\nabla\times\mathbf{P}) = 0$ (here $\mathbf{P} \in C^2$ is used). Hence the term $\nabla(\nabla\cdot\mathbf{A})$ in Step 2 is zero.

**Step 4 (the curl comes out right).** It remains to show $-\nabla^2\mathbf{A} = \mathbf{c}$. The vector Laplacian acts componentwise in Cartesian coordinates, so for each $j$, exactly as in Step 1,

$$
-\nabla_1^2 A_j(\mathbf{r}_1) = -\frac{1}{4\pi}\int c_j(\mathbf{r}_2)\left[\nabla_1^2\frac{1}{r_{12}}\right] d\tau_2
= -\frac{1}{4\pi}\int c_j(\mathbf{r}_2)\bigl[-4\pi\,\delta^{(3)}(\mathbf{r}_1-\mathbf{r}_2)\bigr]\, d\tau_2 = c_j(\mathbf{r}_1) .
$$

Combining with Steps 2 and 3, $\nabla\times\mathbf{P}^{\star} = \mathbf{c} = \nabla\times\mathbf{P}$.

**Step 5 (identify $\mathbf{P}^{\star}$ with $\mathbf{P}$).** Put $\mathbf{Q} = \mathbf{P} - \mathbf{P}^{\star}$. By Steps 1 and 4, $\nabla\cdot\mathbf{Q} = 0$ and $\nabla\times\mathbf{Q} = \mathbf{0}$ on the whole of $\mathbb{R}^3$. The uniqueness theorem cannot be applied with $V = \mathbb{R}^3$: that region is unbounded and has no boundary, so its boundary hypothesis would be empty, and the conclusion false, as any constant field shows. We run the *argument* of that theorem on the balls $V_R = \{r < R\}$ instead and let $R \to \infty$.

Since $\mathbb{R}^3$ is simply connected and $\mathbf{Q}$ is $C^1$ and irrotational, $\mathbf{Q} = -\nabla\chi$ with $\chi \in C^2(\mathbb{R}^3)$, and $\nabla^2\chi = -\nabla\cdot\mathbf{Q} = 0$. Each $V_R$ is bounded with a smooth boundary, so Green's first identity applies there with $u = v = \chi$; the term in $\nabla^2\chi$ drops out, and $\partial\chi/\partial n = \hat{\mathbf{r}}\cdot\nabla\chi = -\mathbf{Q}\cdot\hat{\mathbf{r}}$ on $r = R$, so

$$
\int_{V_R} \lvert\mathbf{Q}\rvert^2\, dV \;=\; -\oint_{r=R} \chi\,\bigl(\mathbf{Q}\cdot\hat{\mathbf{r}}\bigr)\, dS .
$$

The constant in $\chi$ may be used to sharpen this. Since $\nabla\cdot\mathbf{Q} = 0$ in $V_R$, the divergence theorem gives $\oint_{r=R}\mathbf{Q}\cdot\hat{\mathbf{r}}\, dS = 0$, so $\chi$ may be replaced by $\chi - k$ for any constant $k$. Choose $k$ to be the value of $\chi$ at one point of the sphere $r = R$. Any two points of that sphere are joined by a great-circle arc of length at most $\pi R$, along which $\chi$ changes at a rate at most $\lvert\nabla\chi\rvert = \lvert\mathbf{Q}\rvert$, so $\lvert \chi - k\rvert \le \pi R\, M(R)$ on the sphere, where $M(R) = \max_{r=R}\lvert\mathbf{Q}\rvert$. With the sphere's area $4\pi R^2$,

$$
\int_{V_R} \lvert\mathbf{Q}\rvert^2\, dV \;\le\; 4\pi R^2 \cdot \pi R\,M(R)\cdot M(R) \;=\; 4\pi^2 R^3 M(R)^2 .
$$

The left side increases with $R$, so if the right side tends to $0$ along some sequence $R \to \infty$ then $\int_{V_R}\lvert\mathbf{Q}\rvert^2\, dV = 0$ for every $R$; the integrand is continuous and non-negative, so $\mathbf{Q} \equiv \mathbf{0}$, exactly as in Step 5 of the first proof. The theorem therefore follows as soon as $R^3M(R)^2 \to 0$ along a sequence — that is, as soon as $\lvert\mathbf{Q}\rvert$ decays faster than $r^{-3/2}$.

It does so under the hypotheses declared in the preamble, which is where the compact support of $s$ and $\mathbf{c}$ and the decay $\mathbf{P} = O(r^{-2})$ are used. Indeed for $r_1 = \lvert\mathbf{r}_1\rvert \ge 2a$ every source point has $r_{12} \ge r_1 - a \ge r_1/2$, so

$$
\lvert\varphi(\mathbf{r}_1)\rvert \le \frac{1}{4\pi}\cdot\frac{2}{r_1}\int\lvert s\rvert\, d\tau_2 ,
\qquad
\lvert\nabla_1\varphi(\mathbf{r}_1)\rvert \le \frac{1}{4\pi}\int \frac{\lvert s\rvert}{r_{12}^2}\, d\tau_2 \le \frac{1}{\pi r_1^2}\int\lvert s\rvert\, d\tau_2 ,
$$

using $\lvert\nabla_1(1/r_{12})\rvert = 1/r_{12}^2$, and the same bounds hold for $\mathbf{A}$ and its derivatives with $\lvert\mathbf{c}\rvert$ in place of $\lvert s\rvert$. Hence $\mathbf{P}^{\star} = -\nabla\varphi + \nabla\times\mathbf{A}$ is $O(r^{-2})$, so $M(R) = O(R^{-2})$ and $R^3M(R)^2 = O(R^{-1}) \to 0$. Therefore $\mathbf{P}^{\star} = \mathbf{P}$, that is,

$$
\mathbf{P} = -\nabla\varphi + \nabla\times\mathbf{A} ,
$$

with $-\nabla\varphi$ irrotational and $\nabla\times\mathbf{A}$ solenoidal. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what the freedom is.**

- *Simple connectivity, in Step 2 of the first proof only.* Drop it, keeping every other hypothesis, and uniqueness fails. Take the capped cylindrical shell $V = \{1 \le \rho \le 2,\; 0 \le z \le h\}$, which is bounded and has piecewise $C^1$ boundary but is not simply connected, and on it the field $\mathbf{Q} = (-y, x, 0)/(x^2+y^2)$, which is $C^1$ on $\overline V$ because $\rho \ge 1$ there. Then $\nabla\cdot\mathbf{Q} = 0$, $\nabla\times\mathbf{Q} = \mathbf{0}$, and $\mathbf{Q}\cdot\hat{\mathbf{n}} = 0$ on the whole of $\partial V$: on the two cylindrical walls the normal is $\pm\hat{\boldsymbol{\rho}}$ while $\mathbf{Q}$ is azimuthal, and on the two annular caps $z = 0$ and $z = h$ the normal is $\mp\hat{\mathbf{k}}$ while $\mathbf{Q}$ has no $z$-component. Yet $\mathbf{Q} \ne \mathbf{0}$, so $\mathbf{P}$ and $\mathbf{P} + \mathbf{Q}$ share all three data. What fails is exactly Step 2: $\mathbf{Q}$ has no single-valued potential on $V$, its circulation round a circle $\rho = \text{const}$ being $2\pi$ (see the second example of :ref[line integrals]{to=vcalc.line-integrals}). The caps matter. The region between two *infinite* coaxial cylinders falls outside the theorem for a second and independent reason, that it is unbounded, and so isolates nothing; closing it off at $z = 0$ and $z = h$ costs nothing, since $\mathbf{Q}\cdot\hat{\mathbf{n}}$ vanishes on the new faces too.
- *The normal component, not the tangential one.* Specifying $\mathbf{P}\cdot\hat{\mathbf{n}}$ is what makes the left side of Step 4 vanish. Prescribing instead the tangential components would not close the argument in this form.
- *Decay at infinity, in Steps 3 and 5 of the second proof — and how much of it each step needs.* Neither step is served by Arfken's hypothesis that the densities merely vanish at infinity, and the two need different things, so the proof above declares compact support in its preamble and both steps then have what they require outright.

  Step 3 discards the surface term $\oint_{r_2=R}(1/r_{12})\,\mathbf{c}\cdot d\mathbf{S}_2$. That term is bounded by $4\pi R^2\max_{r_2=R}\lvert\mathbf{c}\rvert/(R-r_1)$, hence by $8\pi R\max_{r_2=R}\lvert\mathbf{c}\rvert$ once $R > 2r_1$: the sphere's area grows like $R^2$ while the kernel decays only like $R^{-1}$. So it tends to zero if and only if $\mathbf{c} = o(1/r)$, and for $\lvert\mathbf{c}\rvert\sim 1/r$ — a field that does vanish at infinity — it does not, leaving $\nabla\cdot\mathbf{A} = 0$, on which Steps 2 and 4 both rest, unestablished. The correct condition for Step 3 in general is therefore $\mathbf{c} = o(1/r)$, and it is logged with the convergence condition in `verification/discrepancies.md`. Under compact support the term is identically zero for every $R > a$ and no limit is needed.

  Step 5 needs more again. Its bound $4\pi^2R^3M(R)^2$ tends to zero only if $\lvert\mathbf{Q}\rvert$ decays faster than $r^{-3/2}$, and that rate is got there from the compact support of $s$ and $\mathbf{c}$ together with $\mathbf{P} = O(r^{-2})$. Arfken does not need it, because he applies his uniqueness theorem directly on all of space, which the statement above does not permit. Our Step 5 is the limiting argument that replaces that appeal, and the difference from the source is likewise recorded in `verification/discrepancies.md`.

  Convergence of the two integrals is a third, separate condition: as the note above says, $\varphi$ needs $s$ to decay faster than $1/r^2$. Compact support gives all three conditions at once, which is why the proof is written for that case.
- *What is unique and what is not.* The *decomposition* into irrotational plus solenoidal is pinned down by the theorem, because the two pieces are reconstructed from $s$ and $\mathbf{c}$. The *potentials* are not: $\varphi$ may be shifted by a constant, and $\mathbf{A}$ by any $\nabla\psi$ plus a constant vector. Arfken's Example 3.9.2 exhibits three different vector potentials for a constant field $\mathbf{B} = B_z\hat{\mathbf{e}}_z$, namely $B_zx\,\hat{\mathbf{e}}_y$, $-B_zy\,\hat{\mathbf{e}}_x$ and $\tfrac12(\mathbf{B}\times\mathbf{r})$, and reconciles them by adding $\nabla(Cxy)$. The particular $\mathbf{A}$ produced by the Helmholtz integral has $\nabla\cdot\mathbf{A} = 0$, as Step 3 shows; in electromagnetism that choice is the Coulomb gauge.
- *A field can be decomposed without the integral formulas applying.* The second example below splits a field that grows linearly at infinity. The theorem's integral formulas say nothing about it, but the decomposition exists, found by inspection. Conversely, a field decaying at infinity whose source decays only like $1/r^2$ may defeat the formulas, as the note above says.
- *Arfken's delta caveat.* The two theorems are stated to include points where $\nabla\cdot\mathbf{P}$ or $\nabla\times\mathbf{P}$ exists only as a delta. This matters: the field of a point charge is the main application, and it is covered only because the singular point is kept inside the region, with $s$ read as $q\delta^{(3)}/\varepsilon_0$.
- *Three dimensions, and what replaces this in general.* The construction uses $1/r$, the fundamental solution of the Laplacian in $\mathbb{R}^3$, and the curl, which exists only in three dimensions. The statement that survives in any dimension and on curved spaces is the Hodge decomposition of :ref[differential forms]{to=geom.differential-forms}, of which this is the case of a 1-form in $\mathbb{R}^3$.
:::

:::example[A field with source but no circulation: a ball whose source grows with the radius]{provenance=original}
Let $a > 0$ and take the source density

$$
s(\mathbf{r}) = \begin{cases} 12\,r/a, & r < a,\\ 0, & r > a,\end{cases}
\qquad \mathbf{c} = \mathbf{0} ,
$$

a source that vanishes at the centre, grows linearly out to the value $12$ just inside $r = a$, and is switched off beyond. Both densities have bounded support, so the Helmholtz integrals converge, and $\mathbf{A} = \mathbf{0}$ because $\mathbf{c} = \mathbf{0}$. We compute $\varphi$ and recover $\mathbf{P} = -\nabla\varphi$. The decay condition of the proof above will hold too; its smoothness condition holds everywhere except on the single sphere $r = a$, where $s$ jumps, and step 4 below comes back to that.

1. *The spherical average of $1/r_{12}$.* For $\lvert\mathbf{r}_1\rvert = r$ fixed, average $1/\lvert\mathbf{r}_1-\mathbf{r}_2\rvert$ over the sphere $\lvert\mathbf{r}_2\rvert = t$. With $\mu$ the cosine of the angle between the two vectors, $r_{12} = \sqrt{r^2+t^2-2rt\mu}$ and
   $$
   \frac12\int_{-1}^{1}\frac{d\mu}{\sqrt{r^2+t^2-2rt\mu}} = \frac{1}{2rt}\Bigl[\sqrt{r^2+t^2+2rt} - \sqrt{r^2+t^2-2rt}\Bigr] = \frac{(r+t) - \lvert r-t\rvert}{2rt} = \frac{1}{\max(r,t)} .
   $$
2. *The potential.* Since $s$ is radial, slice the ball into shells of radius $t$ and area $4\pi t^2$ and use step 1 on each shell. The factor $4\pi$ cancels against the $1/4\pi$ in front of the Helmholtz integral, leaving
   $$
   \varphi(r) = \int_0^a \frac{s(t)\,t^2}{\max(r,t)}\, dt = \frac{12}{a}\int_0^a \frac{t^3}{\max(r,t)}\, dt .
   $$
   For $r \le a$ split the range at $t = r$:
   $$
   \varphi(r) = \frac{12}{a}\left[\frac1r\int_0^r t^3\, dt + \int_r^a t^2\, dt\right] = \frac{12}{a}\left[\frac{r^3}{4} + \frac{a^3 - r^3}{3}\right] = 4a^2 - \frac{r^3}{a} ,
   $$
   and for $r \ge a$ the whole ball has $\max(r,t) = r$, so $\varphi(r) = (12/a)\cdot a^4/(4r) = 3a^3/r$. Hence
   $$
   \varphi(r) = \begin{cases} 4a^2 - \dfrac{r^3}{a}, & r \le a,\\[2mm] \dfrac{3a^3}{r}, & r \ge a .\end{cases}
   $$
   Both expressions give $\varphi = 3a^2$ at $r = a$, so $\varphi$ is continuous.
3. *The field.* $\mathbf{P} = -\nabla\varphi = -\varphi'(r)\,\hat{\mathbf{r}}$, so
   $$
   \mathbf{P} = \frac{3r^2}{a}\,\hat{\mathbf{r}} \quad (r \le a), \qquad \mathbf{P} = \frac{3a^3}{r^2}\,\hat{\mathbf{r}} \quad (r \ge a) ,
   $$
   continuous at $r = a$ with magnitude $3a$ on both sides: the field grows as $r^2$ out to the surface and then falls as $r^{-2}$.
4. *Check the data, on each side of $r = a$ separately.* By the radial formula $\nabla\cdot(f(r)\hat{\mathbf{r}}) = r^{-2}(r^2f)'$: inside, $r^{-2}(3r^4/a)' = 12r/a = s$; outside, $r^{-2}(3a^3)' = 0 = s$. And $\nabla\times(f(r)\hat{\mathbf{r}}) = \mathbf{0}$ for any radial $f$, so $\mathbf{c} = \mathbf{0}$ as required. The field decays like $r^{-2}$, so it vanishes at infinity at the rate the proof's Step 5 asks for.

   The check *has* to be made piecewise, and it is worth saying why. The density $s$ jumps from $12$ to $0$ across $r = a$, and since $\nabla^2\varphi = -s$, the second derivative of $\varphi$ must jump by the same amount: $\varphi'' = -6r/a \to -6$ from inside and $\varphi'' = 6a^3/r^3 \to +6$ from outside. So $\varphi$ is $C^1$ but not $C^2$ at $r = a$, and $\mathbf{P} = -\nabla\varphi$ is continuous there but not differentiable — $\lvert\mathbf{P}\rvert$ has a kink, with slope $+6$ approaching the sphere from inside and $-6$ from outside. The divergence $\nabla\cdot\mathbf{P}$ therefore does not exist on the sphere $r = a$ at all, which is exactly why the verification above is carried out separately on $r < a$ and on $r > a$.

   That this costs nothing is a statement about measure, not about smoothness: $r = a$ is a single surface, of zero volume, so it contributes nothing to either Helmholtz integral and nothing to any flux balance, and $\nabla\cdot\mathbf{P} = s$ holds at every point off it. The example is thus marginally outside the letter of the proof's hypothesis $\mathbf{P}\in C^2(\mathbb{R}^3)$, on a zero-volume set; a density with a jump across a surface is the normal situation in electrostatics, and the honest reading is that the formulas are being checked wherever the derivatives they contain exist. The second example below, whose field is a polynomial, has no such surface anywhere.
5. *A number.* Take $a = 2$, so $s = 6r$ inside the ball of radius $2$. Then $\varphi(0) = 16$ and $\varphi(2) = 12$, while $\lvert\mathbf{P}\rvert = 1.5$ at $r = 1$, rises to $6$ at $r = 2$, and is back to $1.5$ at $r = 4$. The flux out of the sphere $r = 4$ is $1.5\times 4\pi(16) = 96\pi$, and
   $$
   \int s\, d\tau = \int_0^2 6t\cdot 4\pi t^2\, dt = 24\pi\left[\frac{t^4}{4}\right]_0^2 = 96\pi :
   $$
   the divergence theorem is satisfied, as it must be.
6. *What it is.* This is the electrostatic field of a ball whose charge density grows in proportion to the distance from the centre, with $s = \rho/\varepsilon_0$. It is worth contrasting with the uniform ball, whose field rises *linearly* inside; here the enclosed charge grows like $r^4$ rather than $r^3$, so the field rises as $r^2$ instead. Outside the ball, both look alike — only the total charge is visible, which is the content of the $3a^3/r$ tail.
:::

:::example[A field with both parts, split by inspection]{provenance=original}
Take

$$
\mathbf{F} = (x + y,\;\; y - x,\;\; 2z) \qquad\text{on all of } \mathbb{R}^3 .
$$

1. *Its data.* $\nabla\cdot\mathbf{F} = 1 + 1 + 2 = 4$ and
   $$
   \nabla\times\mathbf{F} = \bigl(\partial_y(2z) - \partial_z(y-x),\; \partial_z(x+y) - \partial_x(2z),\; \partial_x(y-x) - \partial_y(x+y)\bigr) = (0,0,-2) .
   $$
   Neither vanishes, so both parts of the decomposition are present.
2. *Guess the pieces.* Try
   $$
   \varphi = -\left(\frac{x^2+y^2}{2} + z^2\right), \qquad \mathbf{A} = \Bigl(0,\, 0,\, \frac{x^2+y^2}{2}\Bigr) .
   $$
   Then $-\nabla\varphi = (x, y, 2z)$ and $\nabla\times\mathbf{A} = (\partial_yA_3,\; -\partial_xA_3,\; 0) = (y, -x, 0)$.
3. *Check.* Their sum is $(x+y,\; y-x,\; 2z) = \mathbf{F}$. Moreover $\nabla\cdot(-\nabla\varphi) = -\nabla^2\varphi = 4$ and $\nabla\times(\nabla\times\mathbf{A}) = \nabla\times(y,-x,0) = (0,0,-2)$, so the irrotational piece carries all the divergence and the solenoidal piece all the curl, as Helmholtz's theorem says they must.
4. *Gauge freedom, made explicit.* Replace $\mathbf{A}$ by $\mathbf{A}' = \mathbf{A} + \nabla(Kxy) = \bigl(Ky,\; Kx,\; \tfrac12(x^2+y^2)\bigr)$ for any constant $K$. Then
   $$
   \nabla\times\mathbf{A}' = \bigl(\partial_yA'_3 - \partial_zA'_2,\; \partial_zA'_1 - \partial_xA'_3,\; \partial_xA'_2 - \partial_yA'_1\bigr) = (y,\; -x,\; K - K) = (y,-x,0) ,
   $$
   unchanged. Note that $\nabla\cdot\mathbf{A} = 0$ while $\nabla\cdot\mathbf{A}' = 0$ too here, so this family stays in the Coulomb gauge; a $\psi$ with $\nabla^2\psi \ne 0$ would leave it.
5. *Why the integral formulas do not apply.* $\mathbf{F}$ grows linearly with $\lvert\mathbf{r}\rvert$, and $s = 4$, $\mathbf{c} = (0,0,-2)$ are constants: they do not vanish at infinity, and the integrals $\int s/r_{12}\, d\tau_2$ and $\int\mathbf{c}/r_{12}\, d\tau_2$ both diverge. The decomposition nevertheless exists. The theorem gives a sufficient condition and a formula, not a characterization of the fields that split.
:::

:::application{provenance=adapted src="arfken-2013:§3.9, Example 3.9.3 and Eqs. (3.108)–(3.111), pp. 174–175"}
Electromagnetism is built on this decomposition. Because $\nabla\cdot\mathbf{B} = 0$ always, $\mathbf{B}$ has a vector potential, $\mathbf{B} = \nabla\times\mathbf{A}$; substituting into Faraday's law shows that $\mathbf{E} + \partial\mathbf{A}/\partial t$ is irrotational, hence a gradient, which defines the scalar potential:

$$
\mathbf{B} = \nabla\times\mathbf{A}, \qquad \mathbf{E} = -\nabla\varphi - \frac{\partial\mathbf{A}}{\partial t} .
$$

Six field components have been replaced by four potential components, and the gauge freedom $\mathbf{A}\mapsto\mathbf{A}+\nabla\psi$ remains, which amounts to a free choice of $\nabla\cdot\mathbf{A}$. Arfken's Example 3.9.3 makes the choice $c^{-2}\partial_t\varphi + \nabla\cdot\mathbf{A} = 0$, the Lorentz gauge, which decouples the equations into $\nabla^2\varphi - c^{-2}\partial_t^2\varphi = -\rho/\varepsilon_0$ and $c^{-2}\partial_t^2\mathbf{A} - \nabla^2\mathbf{A} = \mu_0\mathbf{J}$: two wave equations, one with the charge density as source and one with the current density. The invariance of all predictions under gauge transformations is, as Arfken remarks, the precursor of gauge theory in modern physics.

In fluid mechanics the same split separates a flow into a potential part and a vortical part. Removing the irrotational part is what every incompressible Navier–Stokes solver does at each time step: given a provisional velocity field, project out its gradient part by solving a Poisson equation for the pressure, leaving a divergence-free field. That projection *is* the Helmholtz decomposition, and in the discrete setting its uniqueness is what makes the pressure well determined up to a constant. In magnetostatics the vector potential of a current loop is the Helmholtz integral $\mathbf{A} = (\mu_0/4\pi)\int \mathbf{J}/r_{12}\, d\tau_2$, from which the Biot–Savart law follows by taking the curl; and in image processing and computer graphics the decomposition of a vector field into curl-free and divergence-free parts is a standard tool for smoothing and for detecting sources and vortices in measured flow fields.
:::
