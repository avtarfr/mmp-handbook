---
id: vcalc.divergence-curl
title: Divergence, curl and the Laplacian
kind: definition
level: core
summary: Defines $\nabla\cdot\mathbf{F}$, $\nabla\times\mathbf{F}$ and $\nabla^2\phi$ in Cartesian coordinates and proves that for a $C^1$ field the divergence at a point is the limit of outward flux per unit volume over shrinking cubes, while the component of the curl along a unit vector is the limit of circulation per unit area over shrinking squares normal to it.
prereqs:
  - vcalc.gradient
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§10.7.2, Eqs. (10.33)–(10.34), p. 352 (divergence, solenoidal fields, the Laplacian); §10.7.3, Eq. (10.35), p. 353 (curl as a determinant, irrotational fields), and Eq. (10.36), p. 353 (curl of a rigid rotation); §10.8.1, p. 355 (Laplacian of a radial field)"
    pages: "352-353, 355"
    role: the Cartesian definitions and the terms solenoidal and irrotational; the rigid-rotation computation
  - work: arfken-2013
    loc: "§3.5, Eq. (3.52), p. 146 (divergence); pp. 147–149, Eqs. (3.55)–(3.57) (outward flow from a volume element, the continuity equation, solenoidal fields); Eq. (3.58), p. 149 (curl); pp. 150–152, Eqs. (3.60)–(3.61) (circulation round a small rectangle, irrotational fields); §3.6, Eq. (3.62) and Example 3.6.1, p. 154 (Laplacian, radial Laplacian)"
    pages: "146-152, 154"
    role: the flux and circulation computations that the proof follows; the continuity equation
  - work: hassani-2013
    loc: "§21.2.2, p. 647: $\\nabla^2F(r) = F'' + (m-1)F'/r = r^{1-m}\\,(r^{m-1}F')'$ for a function of $r = (x_1^2+\\dots+x_m^2)^{1/2}$ alone in $\\mathbb{R}^m$"
    pages: "647"
    role: the radial Laplacian in $m$ dimensions, for the note
---

:::definition[Divergence, curl and the Laplacian]{provenance=adapted src="rhb-2006:§10.7.2, Eqs. (10.33)–(10.34), p. 352, and §10.7.3, Eq. (10.35), p. 353; arfken-2013:§3.5, Eqs. (3.52) and (3.58), pp. 146 and 149, and §3.6, Eq. (3.62), p. 154"}
Let $U \subseteq \mathbb{R}^3$ be open, let $\mathbf{F} = F_1\mathbf{e}_1 + F_2\mathbf{e}_2 + F_3\mathbf{e}_3$ be a vector field on $U$ whose partial derivatives exist, and let $\phi$ be a scalar field on $U$ with second partial derivatives. In the Cartesian basis and the index notation of :ref[]{to=vcalc.vector-algebra}:

- The **divergence** of $\mathbf{F}$ is the scalar field
  $$
  \operatorname{div}\mathbf{F} \;=\; \nabla\cdot\mathbf{F} \;=\; \frac{\partial F_1}{\partial x_1} + \frac{\partial F_2}{\partial x_2} + \frac{\partial F_3}{\partial x_3} \;=\; \partial_iF_i .
  $$
  A field with $\nabla\cdot\mathbf{F} = 0$ throughout $U$ is called **solenoidal**.
- The **curl** of $\mathbf{F}$ is the vector field
  $$
  \operatorname{curl}\mathbf{F} \;=\; \nabla\times\mathbf{F} \;=\;
  \begin{vmatrix} \mathbf{e}_1 & \mathbf{e}_2 & \mathbf{e}_3 \\[2pt] \dfrac{\partial}{\partial x_1} & \dfrac{\partial}{\partial x_2} & \dfrac{\partial}{\partial x_3} \\[4pt] F_1 & F_2 & F_3 \end{vmatrix},
  \qquad (\nabla\times\mathbf{F})_i = \varepsilon_{ijk}\,\partial_jF_k ,
  $$
  the determinant being expanded along its first row **from the top down**, so that each derivative in the second row acts on the component of $\mathbf{F}$ in the third row and on nothing else. Explicitly its first component is $\partial_2F_3 - \partial_3F_2$, and the others follow by cyclic permutation of $(1,2,3)$. A field with $\nabla\times\mathbf{F} = \mathbf{0}$ throughout $U$ is called **irrotational**.
- The **Laplacian** of $\phi$ is the divergence of its gradient,
  $$
  \nabla^2\phi \;=\; \nabla\cdot\nabla\phi \;=\; \frac{\partial^2\phi}{\partial x_1^2} + \frac{\partial^2\phi}{\partial x_2^2} + \frac{\partial^2\phi}{\partial x_3^2} \;=\; \partial_i\partial_i\phi
  \;=\; \delta_{ij}\,\partial_i\partial_j\phi .
  $$
  It is also written $\Delta\phi$. The operator $\nabla^2 = \partial_i\partial_i$ applied to each Cartesian component of a vector field gives the **vector Laplacian**, $(\nabla^2\mathbf{F})_i = \nabla^2F_i$; this componentwise formula is a Cartesian accident, and the coordinate-free definition is the one in :ref[]{to=vcalc.vector-identities}.

Together with the gradient, $\nabla\cdot$ and $\nabla\times$ are the only first-order differential operators that $\nabla$ produces: $\nabla$ needs a scalar field to its right, $\nabla\cdot$ and $\nabla\times$ need a vector field, so $\nabla(\nabla\phi)$, $\nabla\cdot(\nabla\cdot\mathbf{F})$, $\nabla\times(\nabla\cdot\mathbf{F})$ and $\nabla(\nabla\times\mathbf{F})$ are meaningless. Which second-order combinations do make sense, and how they are related, is the subject of :ref[]{to=vcalc.vector-identities}.
:::

:::statement[Divergence is flux density, curl is circulation density]{provenance=adapted src="arfken-2013:§3.5, pp. 147–148, Eq. (3.55), and pp. 150–151, Eq. (3.60)"}
Let $\mathbf{F}$ be a vector field of class $C^1$ on an open $U \subseteq \mathbb{R}^3$ and let $\mathbf{a} \in U$.

1. **Flux.** For $h > 0$ small enough that it lies in $U$, let $Q_h$ be the closed cube of side $2h$ centred at $\mathbf{a}$ with faces normal to the coordinate axes, and let
   $$
   \Phi(h) \;=\; \int_{\partial Q_h} \mathbf{F}\cdot\hat{\mathbf{n}}\; dA
   $$
   be the total flux of $\mathbf{F}$ out of $Q_h$, the sum of the six face integrals with $\hat{\mathbf{n}}$ the outward unit normal. Then
   $$
   \lim_{h\to 0^+}\ \frac{\Phi(h)}{8h^3} \;=\; (\nabla\cdot\mathbf{F})(\mathbf{a}),
   $$
   the denominator being the volume of $Q_h$. So the divergence at a point is the outward flux per unit volume in the limit of a small volume around it: it is positive at a source, negative at a sink, and zero for a flow that conserves whatever it transports.
2. **Circulation.** Let $\hat{\mathbf{u}}, \hat{\mathbf{v}}, \hat{\mathbf{n}}$ be a right-handed orthonormal triple, so $\hat{\mathbf{u}}\times\hat{\mathbf{v}} = \hat{\mathbf{n}}$. For $h > 0$ small let $S_h = \{\mathbf{a} + s\hat{\mathbf{u}} + t\hat{\mathbf{v}} : |s| \le h,\ |t|\le h\}$ be the square of side $2h$ centred at $\mathbf{a}$ in the plane normal to $\hat{\mathbf{n}}$, and let
   $$
   C(h) \;=\; \oint_{\partial S_h} \mathbf{F}\cdot d\boldsymbol{\ell}
   $$
   be the circulation of $\mathbf{F}$ round its boundary, traversed anticlockwise as seen from the side $\hat{\mathbf{n}}$ points to. Then
   $$
   \lim_{h\to 0^+}\ \frac{C(h)}{4h^2} \;=\; (\nabla\times\mathbf{F})(\mathbf{a})\cdot\hat{\mathbf{n}},
   $$
   the denominator being the area of $S_h$. So the component of the curl along a direction is the circulation per unit area round a small loop normal to that direction; the curl itself is the vector whose component in each direction gives that circulation density, and it vanishes at a point exactly when all three of these densities do.
:::

:::idea{provenance=original}
Both limits are the same one-line calculation done twice. On a face of the cube, flux is a component of $\mathbf{F}$ integrated over an area; pair each face with the opposite one, and what is left is a difference of that component across a gap of width $2h$, which the mean value theorem converts into $2h$ times a derivative. Three pairs of faces give the three terms of the divergence. For the loop, pair each side with the one opposite; the same difference appears, but now the two surviving derivatives are of *different* components in *different* directions, and they enter with opposite signs because the two sides are traversed in opposite senses. That antisymmetric combination is exactly what the $\varepsilon$-$\delta$ identity turns into a component of the curl.
:::

:::proof{provenance=adapted src="arfken-2013:§3.5, pp. 147–148 and pp. 150–151"}
**Part 1.** Fix $k \in \{1,2,3\}$ and consider the two faces of $Q_h$ normal to $\mathbf{e}_k$. On the far one the outward normal is $+\mathbf{e}_k$ and on the near one it is $-\mathbf{e}_k$, so $\mathbf{F}\cdot\hat{\mathbf{n}}$ is $+F_k$ and $-F_k$ respectively, and the two together contribute
$$
\int_{D_h}\Bigl[F_k(\mathbf{y} + h\mathbf{e}_k) - F_k(\mathbf{y} - h\mathbf{e}_k)\Bigr]dA(\mathbf{y}),
$$
where $\mathbf{y}$ runs over the square $D_h$ of side $2h$ through $\mathbf{a}$ normal to $\mathbf{e}_k$, of area $4h^2$. Only the $k$th component appears, because the other two components of $\mathbf{F}$ are tangent to these faces.

Apply the mean value theorem on $[-h,h]$ to $t \mapsto F_k(\mathbf{y}+t\mathbf{e}_k)$, differentiable because $\mathbf{F}$ is $C^1$: the bracket equals $2h\,\partial_kF_k(\boldsymbol{\xi})$ for some point $\boldsymbol{\xi}$ on the segment joining the two face points, hence a point of $Q_h$. Write $\partial_kF_k(\boldsymbol{\xi}) = \partial_kF_k(\mathbf{a}) + \rho_k(\mathbf{y},h)$. The hypothesis that $\partial_kF_k$ is **continuous** at $\mathbf{a}$ makes the error uniform: given $\epsilon > 0$ there is $\delta > 0$ with $|\partial_kF_k(\mathbf{x}) - \partial_kF_k(\mathbf{a})| < \epsilon$ whenever $|\mathbf{x}-\mathbf{a}| < \delta$, and every point of $Q_h$ satisfies this once $h\sqrt{3} < \delta$. So for such $h$ the pair of faces contributes
$$
2h\Bigl(4h^2\,\partial_kF_k(\mathbf{a}) + \int_{D_h}\rho_k\, dA\Bigr),
\qquad \Bigl|\int_{D_h}\rho_k\,dA\Bigr| \le 4h^2\epsilon .
$$
Summing over $k = 1,2,3$ and dividing by the volume $8h^3$,
$$
\left|\frac{\Phi(h)}{8h^3} - \partial_kF_k(\mathbf{a})\right| \;\le\; 3\epsilon
\qquad\text{for all } h < \delta/\sqrt{3},
$$
and $\partial_kF_k(\mathbf{a}) = (\nabla\cdot\mathbf{F})(\mathbf{a})$. As $\epsilon > 0$ was arbitrary, the limit is as claimed.

**Part 2.** Parametrise the four sides of $\partial S_h$ in the anticlockwise sense determined by $\hat{\mathbf{n}} = \hat{\mathbf{u}}\times\hat{\mathbf{v}}$ and write $\mathbf{G}(s,t) = \mathbf{F}(\mathbf{a} + s\hat{\mathbf{u}} + t\hat{\mathbf{v}})$. The tangent is $+\hat{\mathbf{u}}$ on the side $t = -h$, $+\hat{\mathbf{v}}$ on $s = +h$, $-\hat{\mathbf{u}}$ on $t = +h$ and $-\hat{\mathbf{v}}$ on $s = -h$, so
$$
C(h) = \int_{-h}^{h}\Bigl[\mathbf{G}(s,-h) - \mathbf{G}(s,h)\Bigr]\cdot\hat{\mathbf{u}}\; ds
\;+\;\int_{-h}^{h}\Bigl[\mathbf{G}(h,t) - \mathbf{G}(-h,t)\Bigr]\cdot\hat{\mathbf{v}}\; dt .
$$
Treat the two brackets by the mean value theorem exactly as in part 1, now along the directions $\hat{\mathbf{v}}$ and $\hat{\mathbf{u}}$: the scalar functions $t\mapsto \mathbf{G}(s,t)\cdot\hat{\mathbf{u}}$ and $s \mapsto \mathbf{G}(s,t)\cdot\hat{\mathbf{v}}$ are differentiable with derivatives $(\hat{\mathbf{v}}\cdot\nabla)(\mathbf{F}\cdot\hat{\mathbf{u}})$ and $(\hat{\mathbf{u}}\cdot\nabla)(\mathbf{F}\cdot\hat{\mathbf{v}})$ evaluated along the segment, by the directional-derivative formula of :ref[]{to=vcalc.gradient}. Hence the first bracket is $-2h\bigl[(\hat{\mathbf{v}}\cdot\nabla)(\mathbf{F}\cdot\hat{\mathbf{u}})\bigr]$ and the second is $+2h\bigl[(\hat{\mathbf{u}}\cdot\nabla)(\mathbf{F}\cdot\hat{\mathbf{v}})\bigr]$, each at some point of $S_h$. Continuity of the first partial derivatives of $\mathbf{F}$ at $\mathbf{a}$ again makes the replacement by their values at $\mathbf{a}$ uniform in the same sense, so dividing by the area $4h^2 = (2h)(2h)$ gives
$$
\lim_{h\to 0^+}\frac{C(h)}{4h^2} = \bigl[(\hat{\mathbf{u}}\cdot\nabla)(\mathbf{F}\cdot\hat{\mathbf{v}}) - (\hat{\mathbf{v}}\cdot\nabla)(\mathbf{F}\cdot\hat{\mathbf{u}})\bigr](\mathbf{a})
= \bigl(\hat{u}_i\hat{v}_j - \hat{v}_i\hat{u}_j\bigr)\partial_iF_j(\mathbf{a}),
$$
the constant vectors $\hat{\mathbf{u}}, \hat{\mathbf{v}}$ passing through the derivatives.

It remains to recognise this as $(\nabla\times\mathbf{F})\cdot\hat{\mathbf{n}}$. Using $(\nabla\times\mathbf{F})_k = \varepsilon_{kij}\partial_iF_j$ and $\hat{n}_k = \varepsilon_{klm}\hat{u}_l\hat{v}_m$,
$$
(\nabla\times\mathbf{F})\cdot\hat{\mathbf{n}} = \varepsilon_{kij}\,\varepsilon_{klm}\,\hat{u}_l\hat{v}_m\,\partial_iF_j
= (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})\,\hat{u}_l\hat{v}_m\,\partial_iF_j
= \bigl(\hat{u}_i\hat{v}_j - \hat{v}_i\hat{u}_j\bigr)\partial_iF_j,
$$
by the $\varepsilon$-$\delta$ identity of :ref[]{to=vcalc.vector-algebra} after the cyclic shift $\varepsilon_{kij} = \varepsilon_{ijk}$. The two expressions agree, which proves part 2. $\square$
:::

:::remark{provenance=adapted src="rhb-2006:§10.7.3, Eq. (10.36), p. 353; arfken-2013:§3.5, Eqs. (3.57) and (3.61), pp. 149 and 152"}
**Where the hypotheses are used, and how to read the two operators.**

- *Why $C^1$ and not just differentiability of the components.* Mere existence of the partial derivatives defines $\nabla\cdot\mathbf{F}$ and $\nabla\times\mathbf{F}$ pointwise, but the two limits need the derivatives to be *continuous at $\mathbf{a}$*: that is what allows the mean-value points $\boldsymbol{\xi}$, which lie somewhere in the shrinking cube or square and are not under our control, to be replaced by $\mathbf{a}$ with a uniformly small error. Without continuity the mean values need not converge to the value at $\mathbf{a}$ and the flux-per-volume ratio can fail to have a limit, even though $\nabla\cdot\mathbf{F}(\mathbf{a})$ exists as a number.
- *Why cubes and squares, and what the limits really say.* Nothing in the proof depends on the shapes beyond the fact that opposite faces or sides are parallel and a distance $2h$ apart. The statements are therefore the local, differential form of the two integral theorems: the global versions, over an arbitrary region and an arbitrary surface, are :ref[]{to=vcalc.divergence-theorem} and :ref[]{to=vcalc.stokes-theorem}, and part 2 is the reason the curl appears in Stokes' theorem contracted with the surface normal.
- *A rigid rotation has constant curl.* Riley, Hobson and Bence (p. 353) take $\mathbf{v} = \boldsymbol{\omega}\times\mathbf{r}$, the velocity field of a body in rigid rotation at a constant rate $\boldsymbol{\omega}$ about a fixed axis through the origin, and compute its curl: taking $\boldsymbol{\omega} = \omega\mathbf{e}_3$ gives $\mathbf{v} = \omega(-x_2, x_1, 0)$ and $\nabla\times\mathbf{v} = 2\omega\,\mathbf{e}_3 = 2\boldsymbol{\omega}$. So the curl of a velocity field is **twice** the local angular velocity, not the angular velocity itself; the factor $2$ is a standard trap, and the quantity $\nabla\times\mathbf{v}$ is called the vorticity. A paddle wheel held in the flow spins where the curl is non-zero and does not where it vanishes.
- *Irrotational and solenoidal are not opposites.* They are independent conditions on different derivatives of $\mathbf{F}$, and a field may satisfy both: in a charge-free region the electrostatic field has $\nabla\cdot\mathbf{E} = 0$ and $\nabla\times\mathbf{E} = \mathbf{0}$, which is what makes it the gradient of a harmonic potential (:ref[]{to=pde.harmonic-functions}).
- *Divergence-free does not mean "no flow".* Arfken, Weber and Harris put it as: within a region where the divergence vanishes, the field lines entering a small volume must leave it, so they cannot begin or end there (p. 149). Field lines of a solenoidal field close up or run to the boundary.
:::

:::note{provenance=adapted src="hassani-2013:§21.2.2, p. 647; arfken-2013:§3.6, Example 3.6.1, p. 154; rhb-2006:§10.8.1, p. 355"}
**The Laplacian of a radial function.** If $\phi(\mathbf{x}) = f(r)$ with $r = |\mathbf{x}|$ and $f$ twice differentiable, then for $r > 0$
$$
\nabla^2\phi = f''(r) + \frac{m-1}{r}f'(r) = \frac{1}{r^{m-1}}\frac{d}{dr}\Bigl(r^{m-1}\frac{df}{dr}\Bigr)
\qquad\text{in } \mathbb{R}^m,
$$
which for $m = 3$ is $f'' + 2f'/r$. Hassani derives this directly from $\partial r/\partial x_i = x_i/r$ (p. 647), and Arfken, Weber and Harris get the $m=3$ case by composing the radial gradient with the radial divergence (Example 3.6.1, p. 154). The extra first-order term is purely geometric: it is there because the direction $\hat{\mathbf{r}}$ changes from point to point. Two consequences used constantly: $\nabla^2r^n = n(n+1)r^{n-2}$ in three dimensions, so $r^n$ is harmonic exactly for $n = 0$ and $n = -1$; and the Coulomb and Newton potentials $1/r$ therefore satisfy Laplace's equation away from the origin, with everything concentrated at the origin, where none of these derivatives is defined (:ref[]{to=pde.laplace-fundamental-solution}).
:::

:::example{provenance=original}
**(a) The flux limit, computed exactly.** Take $\mathbf{F} = (x^3,\, y^2,\, z^2)$ and $\mathbf{a} = (1,1,1)$. From the definition,
$$
\nabla\cdot\mathbf{F} = 3x^2 + 2y + 2z, \qquad (\nabla\cdot\mathbf{F})(\mathbf{a}) = 3 + 2 + 2 = 7 .
$$
Now compute the flux out of the cube $Q_h$ of side $2h$ centred at $\mathbf{a}$ without taking any limit. On the two faces normal to $\mathbf{e}_1$ the integrand $F_1 = x^3$ is constant, equal to $(1\pm h)^3$, and each face has area $4h^2$, so that pair contributes
$$
4h^2\bigl[(1+h)^3 - (1-h)^3\bigr] = 4h^2\bigl[2(3h + h^3)\bigr] = 24h^3 + 8h^5 .
$$
The faces normal to $\mathbf{e}_2$ contribute $4h^2[(1+h)^2-(1-h)^2] = 16h^3$, and those normal to $\mathbf{e}_3$ the same. Hence
$$
\Phi(h) = 56h^3 + 8h^5,
\qquad
\frac{\Phi(h)}{8h^3} = 7 + h^2 \;\xrightarrow[h\to 0^+]{}\; 7 ,
$$
matching $(\nabla\cdot\mathbf{F})(\mathbf{a}) = 7$. The error $h^2$ comes from the third derivative of $x^3$, which survives the cancellation of even-order terms between opposite faces; for a field whose components are at most quadratic the ratio would be exactly the divergence for every $h$.

**(b) The circulation limit, computed exactly.** Take $\mathbf{G} = (-y^3,\, x^3,\, 0)$, $\mathbf{a} = (1,0,0)$ and $\hat{\mathbf{n}} = \mathbf{e}_3$, so $\hat{\mathbf{u}} = \mathbf{e}_1$, $\hat{\mathbf{v}} = \mathbf{e}_2$. Here
$$
(\nabla\times\mathbf{G})_3 = \partial_1G_2 - \partial_2G_1 = 3x^2 + 3y^2,
\qquad (\nabla\times\mathbf{G})(\mathbf{a})\cdot\mathbf{e}_3 = 3 ,
$$
and the other two components of $\nabla\times\mathbf{G}$ vanish identically. Round the square $|x-1|\le h$, $|y| \le h$ anticlockwise, the two horizontal sides give $\int_{1-h}^{1+h}(-(-h)^3)\,dx$ and $\int_{1+h}^{1-h}(-h^3)\,dx$, that is $2h^4$ each; the two vertical sides give $(1+h)^3\cdot 2h$ and $(1-h)^3\cdot(-2h)$. Adding,
$$
C(h) = 4h^4 + 2h\bigl[(1+h)^3 - (1-h)^3\bigr] = 4h^4 + 2h(6h + 2h^3) = 12h^2 + 8h^4,
$$
so $C(h)/(4h^2) = 3 + 2h^2 \to 3$, again the predicted value. Note that $\mathbf{G}$ is not a rotation of any rigid body — its circulation density grows like $3(x^2+y^2)$ — yet the local statement needs no such structure.

**(c) A Laplacian, and a harmonic function.** For $\phi = x^3 - 3xy^2 + z^2$,
$$
\nabla^2\phi = 6x - 6x + 2 = 2
$$
everywhere, so $\phi$ satisfies Poisson's equation $\nabla^2\phi = 2$ and the part $x^3-3xy^2$ on its own is harmonic. For a radial check, put $f(r) = 1/r$ in the note's formula with $m = 3$: $f' = -r^{-2}$ and $f'' = 2r^{-3}$, so
$$
\nabla^2\frac1r = 2r^{-3} + \frac{2}{r}\bigl(-r^{-2}\bigr) = 2r^{-3} - 2r^{-3} = 0
\qquad (r > 0),
$$
confirming by hand that the Coulomb potential is harmonic away from its singularity. Finally $\nabla\times\nabla\phi = \mathbf{0}$ for this $\phi$, as the reader can check from $\nabla\phi = (3x^2-3y^2,\, -6xy,\, 2z)$; that this is no accident is the content of :ref[]{to=vcalc.vector-identities}.
:::

:::application{provenance=adapted src="arfken-2013:§3.5, Eqs. (3.55)–(3.56), p. 148; rhb-2006:§10.7.2, p. 352"}
**Conservation laws are divergences.** Let $\rho(\mathbf{x},t)$ be the density of some conserved substance and $\mathbf{v}$ the velocity of the medium carrying it, so that $\rho\mathbf{v}$ is the flow rate per unit area. Part 1 of the statement identifies $\nabla\cdot(\rho\mathbf{v})$ as how much leaves each unit of volume in each unit of time, so if the substance is neither created nor destroyed the amount inside a small volume can change only by flowing through its boundary, and
$$
\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\mathbf{v}) = 0
$$
— the continuity equation, in the form Arfken, Weber and Harris derive from the flux of a volume element (Eq. (3.56), p. 148). The same equation with $\rho$ the electric charge density and $\mathbf{J} = \rho\mathbf{v}$ the current density is charge conservation; with a source term $\sigma$ on the right it describes production or decay. For an incompressible fluid $\rho$ is constant and the equation collapses to $\nabla\cdot\mathbf{v} = 0$: incompressibility *is* solenoidality, which is why the term appears in fluid mechanics at all. Combining the continuity equation with Fourier's law $\mathbf{q} = -k\nabla T$ of :ref[]{to=vcalc.gradient} gives $\rho c\,\partial T/\partial t = \nabla\cdot(k\nabla T) = k\nabla^2T$ for constant $k$, which is the heat equation of :ref[]{to=pde.heat-kernel}: this is where the Laplacian comes from physically, as the divergence of a gradient flux.

**Curl measures what circulates.** In fluid mechanics $\boldsymbol{\zeta} = \nabla\times\mathbf{v}$ is the vorticity, and the remark's factor of $2$ says that a fluid element in a region of uniform vorticity spins with angular velocity $\boldsymbol{\zeta}/2$. In electromagnetism the two curl equations $\nabla\times\mathbf{E} = -\partial\mathbf{B}/\partial t$ and $\nabla\times\mathbf{B} = \mu_0\mathbf{J} + \mu_0\epsilon_0\,\partial\mathbf{E}/\partial t$, together with $\nabla\cdot\mathbf{B} = 0$ and $\nabla\cdot\mathbf{E} = \rho/\epsilon_0$, are Maxwell's equations; read through this unit they say that the circulation of $\mathbf{E}$ round a small loop measures the rate of change of magnetic flux through it, that magnetic field lines have no sources, and that the flux of $\mathbf{E}$ out of a small volume measures the charge inside. Every one of the four is a statement about a flux density or a circulation density, which is why they take this form.
:::
