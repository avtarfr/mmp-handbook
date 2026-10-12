---
id: vcalc.cylindrical-spherical
title: Cylindrical and spherical coordinates
kind: table
level: core
summary: Tabulates grad, div, curl and the Laplacian, together with the line, area and volume elements, in cylindrical and spherical polar coordinates, and derives the Laplacian twice — from the general curvilinear formula and directly by the chain rule — with worked examples in pipe flow and electrostatics.
prereqs: [vcalc.curvilinear-coordinates, vcalc.divergence-curl]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§10.9, pp. 357–363: cylindrical polars (Eqs. (10.44)–(10.52), the unit vectors and scale factors, the volume element) with Table 10.2, p. 360; spherical polars (Eqs. (10.53)–(10.54), the unit vectors, scale factors and volume element) with Table 10.3, p. 363; the alternative radial form $\\frac{1}{r}\\partial^2(r\\Phi)/\\partial r^2$, p. 363; the warning on p. 357 that $(\\nabla^2\\mathbf{a})_i \\neq \\nabla^2 a_i$ in these systems; and §10.10, Table 10.4, p. 369, for the general curvilinear formulas substituted into in the first derivation"
    pages: "357-363, 369"
    role: the two coordinate systems, their unit vectors and scale factors, both operator tables, and the general formulas they specialise
  - work: arfken-2013
    loc: "§3.10: the general orthogonal-coordinate operators, Eqs. (3.138)–(3.143), pp. 185–187; cylindrical coordinates, Eqs. (3.144)–(3.151), pp. 188–190, including the displacement, area and volume elements and the components of the vector Laplacian; spherical polar coordinates, Eqs. (3.152)–(3.160), pp. 190–192, including the ranges of the coordinates, the solid-angle element $d\\Omega = \\sin\\theta\\,d\\theta\\,d\\varphi$ and the vector Laplacian"
    pages: "185-192"
    role: the general formulas, the coordinate ranges and degenerate sets, the area and solid-angle elements, and the vector Laplacian components
  - work: strauss-2008
    loc: "§6.1, pp. 156–160: the chain-rule computation of the plane polar Laplacian from the Jacobian matrix of $x = r\\cos\\theta$, $y = r\\sin\\theta$, and the assembly of the three-dimensional spherical Laplacian from two plane calculations through the chain of variables $(x,y,z) \\to (s,\\varphi,z) \\to (r,\\theta,\\varphi)$"
    pages: "156-160"
    role: the second, independent derivation of the Laplacian by direct differentiation
---

:::definition[Cylindrical polar coordinates]{provenance=adapted src="rhb-2006:§10.9.1, Eqs. (10.44)–(10.52), pp. 357–360; arfken-2013:§3.10, Eqs. (3.144)–(3.146), pp. 188–189"}
Riley, Hobson and Bence give the ranges $\rho \ge 0$, $0 \le \varphi < 2\pi$, $-\infty < z < \infty$; here $\rho = 0$ is excluded, for the reason given below. So, for $\rho > 0$, $0 \le \varphi < 2\pi$ and $-\infty < z < \infty$,

$$
x = \rho\cos\varphi, \qquad y = \rho\sin\varphi, \qquad z = z .
$$

The coordinate surfaces are the cylinders $\rho = \text{const}$ about the $z$-axis, the half-planes $\varphi = \text{const}$ through that axis, and the planes $z = \text{const}$. Differentiating $\mathbf{r} = \rho\cos\varphi\,\mathbf{i} + \rho\sin\varphi\,\mathbf{j} + z\,\mathbf{k}$ and normalising gives the unit basis

$$
\hat{\mathbf{e}}_\rho = \cos\varphi\,\mathbf{i} + \sin\varphi\,\mathbf{j}, \qquad
\hat{\mathbf{e}}_\varphi = -\sin\varphi\,\mathbf{i} + \cos\varphi\,\mathbf{j}, \qquad
\hat{\mathbf{e}}_z = \mathbf{k} ,
$$

which is orthonormal and right-handed, with $\hat{\mathbf{e}}_\rho \times \hat{\mathbf{e}}_\varphi = \hat{\mathbf{e}}_z$. The first two rotate with $\varphi$ and so must be differentiated along with the components of a field. The scale factors are

$$
h_\rho = 1, \qquad h_\varphi = \rho, \qquad h_z = 1, \qquad H = h_\rho h_\varphi h_z = \rho .
$$

The $z$-axis, where $h_\varphi = 0$ and $\varphi$ is undefined, is excluded. Dropping the $z$ coordinate gives **plane polar coordinates** $(\rho,\varphi)$, for which $dA = \rho\,d\rho\,d\varphi$.
:::

:::definition[Spherical polar coordinates]{provenance=adapted src="rhb-2006:§10.9.2, Eqs. (10.53)–(10.54), pp. 361–362; arfken-2013:§3.10, Eqs. (3.152)–(3.153), pp. 190–191"}
In the convention used here and by both sources, $\theta$ is the polar angle measured from the positive $z$-axis and $\varphi$ the azimuth measured from the positive $x$-axis. Arfken gives the ranges $0 \le r < \infty$, $0 \le \theta \le \pi$, $0 \le \varphi < 2\pi$ (Riley, Hobson and Bence write $r \ge 0$ for the first); here $r = 0$ is excluded, for the reason given below. So, for $r > 0$, $0 \le \theta \le \pi$ and $0 \le \varphi < 2\pi$,

$$
x = r\sin\theta\cos\varphi, \qquad y = r\sin\theta\sin\varphi, \qquad z = r\cos\theta .
$$

The coordinate surfaces are spheres $r = \text{const}$ centred at the origin, right circular cones $\theta = \text{const}$ with vertex at the origin and axis the $z$-axis, and half-planes $\varphi = \text{const}$ through that axis. The unit basis is

$$
\begin{aligned}
\hat{\mathbf{e}}_r &= \sin\theta\cos\varphi\,\mathbf{i} + \sin\theta\sin\varphi\,\mathbf{j} + \cos\theta\,\mathbf{k}, \\
\hat{\mathbf{e}}_\theta &= \cos\theta\cos\varphi\,\mathbf{i} + \cos\theta\sin\varphi\,\mathbf{j} - \sin\theta\,\mathbf{k}, \\
\hat{\mathbf{e}}_\varphi &= -\sin\varphi\,\mathbf{i} + \cos\varphi\,\mathbf{j} ,
\end{aligned}
$$

again orthonormal and right-handed, with $\hat{\mathbf{e}}_r \times \hat{\mathbf{e}}_\theta = \hat{\mathbf{e}}_\varphi$; all three depend on position. The scale factors are

$$
h_r = 1, \qquad h_\theta = r, \qquad h_\varphi = r\sin\theta, \qquad H = r^2\sin\theta .
$$

Arfken records that $\theta$ and $\varphi$ are both undefined at $r = 0$ and that $\varphi$ is undefined at $\theta = 0$ and $\theta = \pi$; these are exactly the places where a scale factor vanishes, and they are excluded.
:::

:::statement[Operators in cylindrical polar coordinates]{provenance=adapted src="rhb-2006:Table 10.2, p. 360; arfken-2013:Eqs. (3.146)–(3.151), pp. 189–190"}
For a scalar field $\Phi(\rho,\varphi,z)$ and a vector field $\mathbf{a} = a_\rho\hat{\mathbf{e}}_\rho + a_\varphi\hat{\mathbf{e}}_\varphi + a_z\hat{\mathbf{e}}_z$, off the $z$-axis:

$$
d\mathbf{r} = d\rho\,\hat{\mathbf{e}}_\rho + \rho\,d\varphi\,\hat{\mathbf{e}}_\varphi + dz\,\hat{\mathbf{e}}_z,
\qquad (ds)^2 = (d\rho)^2 + \rho^2(d\varphi)^2 + (dz)^2,
\qquad dV = \rho\,d\rho\,d\varphi\,dz ,
$$

and the three coordinate faces carry $\rho\,d\varphi\,dz$ (normal $\hat{\mathbf{e}}_\rho$), $d\rho\,dz$ (normal $\hat{\mathbf{e}}_\varphi$) and $\rho\,d\rho\,d\varphi$ (normal $\hat{\mathbf{e}}_z$).

$$
\nabla\Phi = \frac{\partial\Phi}{\partial\rho}\,\hat{\mathbf{e}}_\rho + \frac{1}{\rho}\frac{\partial\Phi}{\partial\varphi}\,\hat{\mathbf{e}}_\varphi + \frac{\partial\Phi}{\partial z}\,\hat{\mathbf{e}}_z ,
$$

$$
\nabla\cdot\mathbf{a} = \frac{1}{\rho}\frac{\partial}{\partial\rho}\bigl(\rho\,a_\rho\bigr) + \frac{1}{\rho}\frac{\partial a_\varphi}{\partial\varphi} + \frac{\partial a_z}{\partial z} ,
$$

$$
\nabla\times\mathbf{a} = \frac{1}{\rho}
\begin{vmatrix}
\hat{\mathbf{e}}_\rho & \rho\,\hat{\mathbf{e}}_\varphi & \hat{\mathbf{e}}_z \\[2pt]
\dfrac{\partial}{\partial\rho} & \dfrac{\partial}{\partial\varphi} & \dfrac{\partial}{\partial z} \\[6pt]
a_\rho & \rho\,a_\varphi & a_z
\end{vmatrix} ,
\qquad
\nabla^2\Phi = \frac{1}{\rho}\frac{\partial}{\partial\rho}\!\left( \rho\frac{\partial\Phi}{\partial\rho} \right) + \frac{1}{\rho^2}\frac{\partial^2\Phi}{\partial\varphi^2} + \frac{\partial^2\Phi}{\partial z^2} .
$$

The **vector** Laplacian is not componentwise. Arfken's Eq. (3.151) gives

$$
(\nabla^2\mathbf{a})_\rho = \nabla^2 a_\rho - \frac{a_\rho}{\rho^2} - \frac{2}{\rho^2}\frac{\partial a_\varphi}{\partial\varphi},
\qquad
(\nabla^2\mathbf{a})_\varphi = \nabla^2 a_\varphi - \frac{a_\varphi}{\rho^2} + \frac{2}{\rho^2}\frac{\partial a_\rho}{\partial\varphi},
\qquad
(\nabla^2\mathbf{a})_z = \nabla^2 a_z ,
$$

where $\nabla^2$ on the right is the scalar operator above. Only the $z$-component is the naive one.
:::

:::statement[Operators in spherical polar coordinates]{provenance=adapted src="rhb-2006:Table 10.3, p. 363; arfken-2013:Eqs. (3.154)–(3.160), pp. 191–192"}
For a scalar field $\Phi(r,\theta,\varphi)$ and a vector field $\mathbf{a} = a_r\hat{\mathbf{e}}_r + a_\theta\hat{\mathbf{e}}_\theta + a_\varphi\hat{\mathbf{e}}_\varphi$, away from the origin and the polar axis:

$$
d\mathbf{r} = dr\,\hat{\mathbf{e}}_r + r\,d\theta\,\hat{\mathbf{e}}_\theta + r\sin\theta\,d\varphi\,\hat{\mathbf{e}}_\varphi,
\qquad (ds)^2 = (dr)^2 + r^2(d\theta)^2 + r^2\sin^2\theta\,(d\varphi)^2 ,
$$

$$
dV = r^2\sin\theta\,dr\,d\theta\,d\varphi, \qquad d\Omega = \sin\theta\,d\theta\,d\varphi \ \text{ with } \int d\Omega = 4\pi ,
$$

the sphere $r = \text{const}$ carrying the area element $r^2\,d\Omega$ with normal $\hat{\mathbf{e}}_r$.

$$
\nabla\Phi = \frac{\partial\Phi}{\partial r}\,\hat{\mathbf{e}}_r + \frac{1}{r}\frac{\partial\Phi}{\partial\theta}\,\hat{\mathbf{e}}_\theta + \frac{1}{r\sin\theta}\frac{\partial\Phi}{\partial\varphi}\,\hat{\mathbf{e}}_\varphi ,
$$

$$
\nabla\cdot\mathbf{a} = \frac{1}{r^2}\frac{\partial}{\partial r}\bigl(r^2 a_r\bigr) + \frac{1}{r\sin\theta}\frac{\partial}{\partial\theta}\bigl(\sin\theta\,a_\theta\bigr) + \frac{1}{r\sin\theta}\frac{\partial a_\varphi}{\partial\varphi} ,
$$

$$
\nabla\times\mathbf{a} = \frac{1}{r^2\sin\theta}
\begin{vmatrix}
\hat{\mathbf{e}}_r & r\,\hat{\mathbf{e}}_\theta & r\sin\theta\,\hat{\mathbf{e}}_\varphi \\[2pt]
\dfrac{\partial}{\partial r} & \dfrac{\partial}{\partial\theta} & \dfrac{\partial}{\partial\varphi} \\[6pt]
a_r & r\,a_\theta & r\sin\theta\,a_\varphi
\end{vmatrix} ,
$$

$$
\nabla^2\Phi = \frac{1}{r^2}\frac{\partial}{\partial r}\!\left( r^2\frac{\partial\Phi}{\partial r} \right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\!\left( \sin\theta\,\frac{\partial\Phi}{\partial\theta} \right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2\Phi}{\partial\varphi^2} .
$$

Riley, Hobson and Bence note the equivalent radial form, useful for shortening calculations:

$$
\frac{1}{r^2}\frac{\partial}{\partial r}\!\left( r^2\frac{\partial\Phi}{\partial r} \right) = \frac{1}{r}\frac{\partial^2}{\partial r^2}\bigl( r\Phi \bigr) .
$$

Here too the vector Laplacian is not componentwise; Arfken's Eq. (3.160) gives all three components, each of which couples $a_r$, $a_\theta$ and $a_\varphi$.
:::

:::idea{provenance=original}
There are two honest ways to get these tables, and it is worth seeing both. The short way is to substitute the scale factors into the four general formulas of :ref[]{to=vcalc.curvilinear-coordinates}: all the work was done once and for all there, and here it is arithmetic on products of $1$, $r$ and $\sin\theta$. The long way is to change variables in $\partial_x^2 + \partial_y^2 + \partial_z^2$ directly with the chain rule, which checks the general formula rather than assuming it. Done naively the second route is unpleasant in three dimensions, because every first derivative produces five terms and every second derivative twenty-five. Strauss's device avoids that: the spherical Laplacian is assembled out of *two* plane polar calculations that share the cylindrical radius $s = \sqrt{x^2+y^2}$ — one in the $(x,y)$ plane with angle $\varphi$, one in the $(s,z)$ half-plane with angle $\theta$ — so that only the two-dimensional computation ever has to be done, and it has to be done only once.
:::

:::proof[First derivation: from the general curvilinear formulas]{provenance=adapted src="rhb-2006:§10.10, Table 10.4, p. 369; arfken-2013:Eqs. (3.138)–(3.143), pp. 185–187"}
Both systems are orthogonal, since in each case the three tangent vectors listed in the definitions are mutually perpendicular, and both are labelled in right-handed order. So the formulas of :ref[]{to=vcalc.curvilinear-coordinates} apply with the scale factors recorded there.

**Cylindrical.** With $h_\rho = 1$, $h_\varphi = \rho$, $h_z = 1$ we have $H = \rho$, and the three coefficients appearing in the Laplacian are
$$
\frac{h_\varphi h_z}{h_\rho} = \rho, \qquad \frac{h_z h_\rho}{h_\varphi} = \frac{1}{\rho}, \qquad \frac{h_\rho h_\varphi}{h_z} = \rho .
$$
Substituting into the general Laplacian and dividing through by $H = \rho$,
$$
\nabla^2\Phi = \frac{1}{\rho}\left[ \frac{\partial}{\partial\rho}\!\left(\rho\frac{\partial\Phi}{\partial\rho}\right) + \frac{\partial}{\partial\varphi}\!\left(\frac{1}{\rho}\frac{\partial\Phi}{\partial\varphi}\right) + \frac{\partial}{\partial z}\!\left(\rho\frac{\partial\Phi}{\partial z}\right) \right]
= \frac{1}{\rho}\frac{\partial}{\partial\rho}\!\left(\rho\frac{\partial\Phi}{\partial\rho}\right) + \frac{1}{\rho^2}\frac{\partial^2\Phi}{\partial\varphi^2} + \frac{\partial^2\Phi}{\partial z^2} ,
$$
where the second and third terms simplify because $\rho$ does not depend on $\varphi$ or $z$. The gradient, divergence and curl follow in the same way: in the divergence, $h_\varphi h_z = \rho$, $h_z h_\rho = 1$ and $h_\rho h_\varphi = \rho$, and the overall $1/\rho$ then cancels the $\rho$ in the last term.

**Spherical.** With $h_r = 1$, $h_\theta = r$, $h_\varphi = r\sin\theta$ we have $H = r^2\sin\theta$, and
$$
\frac{h_\theta h_\varphi}{h_r} = r^2\sin\theta, \qquad \frac{h_\varphi h_r}{h_\theta} = \sin\theta, \qquad \frac{h_r h_\theta}{h_\varphi} = \frac{1}{\sin\theta} .
$$
Dividing by $H$ and using that $r$ and $\sin\theta$ are each constant with respect to the other two coordinates,
$$
\nabla^2\Phi = \frac{1}{r^2\sin\theta}\left[ \frac{\partial}{\partial r}\!\left(r^2\sin\theta\,\frac{\partial\Phi}{\partial r}\right) + \frac{\partial}{\partial\theta}\!\left(\sin\theta\frac{\partial\Phi}{\partial\theta}\right) + \frac{\partial}{\partial\varphi}\!\left(\frac{1}{\sin\theta}\frac{\partial\Phi}{\partial\varphi}\right) \right] ,
$$
and pulling the constant $\sin\theta$ out of the first term and $1/\sin\theta$ out of the third gives the stated formula. The divergence likewise uses $h_\theta h_\varphi = r^2\sin\theta$, $h_\varphi h_r = r\sin\theta$ and $h_r h_\theta = r$.

**The radial identity.** Expanding both sides, $\frac{1}{r^2}(r^2\Phi_r)_r = \Phi_{rr} + \frac{2}{r}\Phi_r$, while $\frac{1}{r}(r\Phi)_{rr} = \frac{1}{r}(\Phi + r\Phi_r)_r = \frac{1}{r}(2\Phi_r + r\Phi_{rr})$, which is the same. $\square$
:::

:::proof[Second derivation: directly, by the chain rule]{provenance=adapted src="strauss-2008:§6.1, pp. 156–160"}
Let $u$ be $C^2$. We compute $\nabla^2 u$ without using the general curvilinear formula at all.

**Step 1: the plane.** Let $(\rho,\varphi)$ be plane polars, $x = \rho\cos\varphi$, $y = \rho\sin\varphi$. Inverting the Jacobian matrix of this map gives $\partial\rho/\partial x = \cos\varphi$, $\partial\rho/\partial y = \sin\varphi$, $\partial\varphi/\partial x = -\sin\varphi/\rho$ and $\partial\varphi/\partial y = \cos\varphi/\rho$ — note that $\partial\rho/\partial x$ is *not* the reciprocal of $\partial x/\partial\rho$. Hence the operator identities
$$
\frac{\partial}{\partial x} = \cos\varphi\,\frac{\partial}{\partial\rho} - \frac{\sin\varphi}{\rho}\frac{\partial}{\partial\varphi},
\qquad
\frac{\partial}{\partial y} = \sin\varphi\,\frac{\partial}{\partial\rho} + \frac{\cos\varphi}{\rho}\frac{\partial}{\partial\varphi} .
$$
Apply each one twice, remembering that it also differentiates its own $\varphi$- and $\rho$-dependent coefficients. Sorting the outcome by which derivative of $u$ it multiplies, the two results are

| | $u_{\rho\rho}$ | $u_{\rho\varphi}$ | $u_{\varphi\varphi}$ | $u_\rho$ | $u_\varphi$ |
|---|---|---|---|---|---|
| $u_{xx}$ | $\cos^2\varphi$ | $-\dfrac{2\sin\varphi\cos\varphi}{\rho}$ | $\dfrac{\sin^2\varphi}{\rho^2}$ | $\dfrac{\sin^2\varphi}{\rho}$ | $\dfrac{2\sin\varphi\cos\varphi}{\rho^2}$ |
| $u_{yy}$ | $\sin^2\varphi$ | $+\dfrac{2\sin\varphi\cos\varphi}{\rho}$ | $\dfrac{\cos^2\varphi}{\rho^2}$ | $\dfrac{\cos^2\varphi}{\rho}$ | $-\dfrac{2\sin\varphi\cos\varphi}{\rho^2}$ |

Adding the rows, the two mixed columns cancel exactly — they are equal and opposite, which is the analytic trace of the two directions being perpendicular — and the other three columns sum to $1$, $1/\rho^2$ and $1/\rho$ by $\cos^2 + \sin^2 = 1$. Therefore

$$
u_{xx} + u_{yy} = u_{\rho\rho} + \frac{1}{\rho}u_\rho + \frac{1}{\rho^2}u_{\varphi\varphi} .
\tag{$*$}
$$

**Step 2: cylindrical polars.** The cylindrical coordinates leave $z$ untouched, so adding $u_{zz}$ to $(*)$ gives the cylindrical Laplacian immediately, and $u_{\rho\rho} + \rho^{-1}u_\rho = \rho^{-1}(\rho u_\rho)_\rho$ puts it in the tabulated form.

**Step 3: spherical polars, by using $(*)$ twice.** Write $s = \sqrt{x^2+y^2}$ for the distance from the $z$-axis, so that $u$ may be regarded as a function of $(s,\varphi,z)$ or of $(r,\theta,\varphi)$, with
$$
s = r\sin\theta, \qquad z = r\cos\theta, \qquad r = \sqrt{s^2+z^2} .
$$
Two plane polar systems are now visible.

- In the half-plane $\varphi = \text{const}$, the pair $(r,\theta)$ is plane polar for the Cartesian-like pair $(z,s)$, with $\theta$ measured from the $z$-axis. Applying $(*)$ with $z$ in the role of $x$ and $s$ in the role of $y$:
  $$
  u_{zz} + u_{ss} = u_{rr} + \frac{1}{r}u_r + \frac{1}{r^2}u_{\theta\theta} .
  $$
- In the plane $z = \text{const}$, the pair $(s,\varphi)$ is plane polar for $(x,y)$. Applying $(*)$ again:
  $$
  u_{xx} + u_{yy} = u_{ss} + \frac{1}{s}u_s + \frac{1}{s^2}u_{\varphi\varphi} .
  $$

In both lines $u_{ss}$ means $\partial^2u/\partial s^2$ with $\varphi$ and $z$ held fixed, so it is the same quantity and may be cancelled when the two lines are added. Adding and subtracting one copy of $u_{ss}$,
$$
\nabla^2 u = u_{xx}+u_{yy}+u_{zz} = u_{rr} + \frac{1}{r}u_r + \frac{1}{r^2}u_{\theta\theta} + \frac{1}{s}u_s + \frac{1}{s^2}u_{\varphi\varphi} .
$$

**Step 4: eliminate $s$.** Only $u_s$ and the explicit $s$'s remain. Since $r = \sqrt{s^2+z^2}$ and $\theta = \arctan(s/z)$ at fixed $z$, we have $\partial r/\partial s = s/r = \sin\theta$ and $\partial\theta/\partial s = z/(s^2+z^2) = \cos\theta/r$, while $\varphi$ does not change with $s$. So the chain rule gives $u_s = \sin\theta\,u_r + (\cos\theta/r)\,u_\theta$ and
$$
\frac{1}{s}u_s = \frac{1}{r\sin\theta}\left( \sin\theta\,u_r + \frac{\cos\theta}{r}u_\theta \right) = \frac{1}{r}u_r + \frac{\cos\theta}{r^2\sin\theta}u_\theta ,
\qquad
\frac{1}{s^2}u_{\varphi\varphi} = \frac{1}{r^2\sin^2\theta}u_{\varphi\varphi} .
$$
Substituting,
$$
\nabla^2u = u_{rr} + \frac{2}{r}u_r + \frac{1}{r^2}\left( u_{\theta\theta} + \cot\theta\,u_\theta \right) + \frac{1}{r^2\sin^2\theta}u_{\varphi\varphi} .
$$
Finally $u_{rr} + \frac{2}{r}u_r = \frac{1}{r^2}(r^2u_r)_r$ and $u_{\theta\theta} + \cot\theta\,u_\theta = \frac{1}{\sin\theta}(\sin\theta\,u_\theta)_\theta$, which is the tabulated spherical Laplacian. It agrees with the first derivation. $\square$
:::

:::remark{provenance=original}
**Conventions, and where the formulas stop working.**

- *The names of the angles.* We follow Riley, Hobson and Bence and Arfken: $\theta$ polar, $\varphi$ azimuthal, so that $h_\varphi = r\sin\theta$ and $dV = r^2\sin\theta\,dr\,d\theta\,d\varphi$. Many mathematics texts exchange the two letters, and Strauss warns of this explicitly on p. 158 while himself using the same convention as ours. The formulas are unchanged in substance, but a table copied from a source with the other convention and used with this one swaps $\sin\theta$ for $\sin\varphi$ and is simply wrong. Always check which angle the factor $\sin$ attaches to.
- *The radial symbol.* $\rho$ is the cylindrical radius here and $r$ the spherical one; they differ by $\rho = r\sin\theta$. Sources that write $r$ for both (common in two-dimensional work) invite an error when a plane result is lifted into three dimensions: the plane polar Laplacian has $\rho^{-1}(\rho\Phi_\rho)_\rho$, the spherical one $r^{-2}(r^2\Phi_r)_r$, and the difference in the exponent is the whole difference between $\log\rho$ and $1/r$ as the radial harmonic function.
- *Degenerate sets.* Each table holds only where every scale factor is positive: off the $z$-axis for cylindrical, off the origin and off the polar axis for spherical. A field perfectly smooth at the origin can have components that are undefined there — $\hat{\mathbf{e}}_r$ itself has no limit at $r = 0$ — so a singularity in a component is not by itself a singularity in the field. Conversely a formula verified only for $r > 0$ says nothing about the origin: $\nabla^2(1/r) = 0$ holds for every $r > 0$, yet $1/r$ is not harmonic on $\mathbb{R}^3$, since as a distribution $\nabla^2(1/r) = -4\pi\delta$ (:ref[]{to=vcalc.dirac-delta-basics}).
- *Why the vector Laplacian is not componentwise.* $\nabla^2\mathbf{a}$ is defined by $\nabla(\nabla\cdot\mathbf{a}) - \nabla\times(\nabla\times\mathbf{a})$, and in Cartesian coordinates this reduces to applying the scalar operator to each component, because the basis vectors are constant. Riley, Hobson and Bence make the point (p. 357) that cylindrical and spherical polars fall in the other class: the derivatives of the rotating basis vectors contribute, and the extra terms in Arfken's Eqs. (3.151) and (3.160) are exactly those contributions. The one exception is $(\nabla^2\mathbf{a})_z$ in cylindrical coordinates, because $\hat{\mathbf{e}}_z$ is constant — and that exception is what makes the pipe-flow example below so short.
:::

:::example[Laminar flow in a circular pipe]{provenance=original}
Water ($\mu = 1.0\times10^{-3}\ \mathrm{Pa\,s}$, $\rho_{\mathrm{m}} = 998\ \mathrm{kg\,m^{-3}}$) flows steadily down a straight pipe of radius $a = 5.0\ \mathrm{mm}$ along the $z$-axis. Take the velocity field

$$
\mathbf{v} = v(\rho)\,\hat{\mathbf{e}}_z, \qquad v(\rho) = V\left(1 - \frac{\rho^2}{a^2}\right), \qquad V = 0.20\ \mathrm{m\,s^{-1}} ,
$$

which vanishes at the wall as a viscous fluid must. Everything below uses the cylindrical table.

1. *Incompressibility.* Only $a_z = v(\rho)$ is non-zero, and it does not depend on $z$, so every term of the divergence vanishes: $\nabla\cdot\mathbf{v} = \frac{1}{\rho}\partial_\rho(\rho\cdot 0) + \frac{1}{\rho}\partial_\varphi(0) + \partial_z v(\rho) = 0$. The field is admissible for an incompressible fluid.
2. *Vorticity.* In the curl determinant only the $\rho\hat{\mathbf{e}}_\varphi$ cofactor survives, giving $\nabla\times\mathbf{v} = -\dfrac{dv}{d\rho}\,\hat{\mathbf{e}}_\varphi = \dfrac{2V\rho}{a^2}\,\hat{\mathbf{e}}_\varphi$. It vanishes on the axis and is largest at the wall, where its magnitude is $2V/a = 2(0.20)/(0.0050) = 80\ \mathrm{s^{-1}}$.
3. *Viscous term.* Because $\mathbf{v}$ points along the constant direction $\hat{\mathbf{e}}_z$, the remark's exception applies and $(\nabla^2\mathbf{v})_z = \nabla^2 v$, the scalar Laplacian. With no $\varphi$- or $z$-dependence,
   $$
   \nabla^2 v = \frac{1}{\rho}\frac{d}{d\rho}\!\left(\rho\frac{dv}{d\rho}\right) = \frac{1}{\rho}\frac{d}{d\rho}\!\left(-\frac{2V\rho^2}{a^2}\right) = -\frac{4V}{a^2} ,
   $$
   a constant.
4. *Pressure gradient.* The convective term $(\mathbf{v}\cdot\nabla)\mathbf{v} = v\,\partial_z(v\hat{\mathbf{e}}_z)$ vanishes, since neither $v$ nor $\hat{\mathbf{e}}_z$ depends on $z$. Steady Navier–Stokes therefore reduces to $\nabla p = \mu\nabla^2\mathbf{v}$, whose only non-trivial component is
   $$
   \frac{dp}{dz} = -\frac{4\mu V}{a^2} = -\frac{4(1.0\times10^{-3})(0.20)}{(5.0\times10^{-3})^2} = -32\ \mathrm{Pa\,m^{-1}} .
   $$
   The pressure falls by $32$ Pa per metre of pipe.
5. *Flow rate.* Using the area element $\rho\,d\rho\,d\varphi$ on the face $z = \text{const}$,
   $$
   Q = \int_0^{2\pi}\!\!\int_0^a V\left(1-\frac{\rho^2}{a^2}\right)\rho\,d\rho\,d\varphi = 2\pi V\left(\frac{a^2}{2} - \frac{a^2}{4}\right) = \frac{\pi V a^2}{2} = 7.85\times10^{-6}\ \mathrm{m^3\,s^{-1}} ,
   $$
   that is $7.85\ \mathrm{mL\,s^{-1}}$, and the mean speed is $Q/(\pi a^2) = V/2 = 0.10\ \mathrm{m\,s^{-1}}$.
6. *Independent check.* The Hagen–Poiseuille law $Q = \pi a^4\lvert dp/dz\rvert/(8\mu)$ gives $\lvert dp/dz\rvert = 8\mu Q/(\pi a^4) = 8(1.0\times10^{-3})(7.854\times10^{-6})/(\pi(5.0\times10^{-3})^4) = 32.0\ \mathrm{Pa\,m^{-1}}$, which matches step 4. The Reynolds number $\rho_{\mathrm{m}}(V/2)(2a)/\mu = 998$ is well below the transition near $2300$, so the laminar profile assumed at the start is self-consistent.
:::

:::example[A conducting sphere in a uniform field]{provenance=original}
An uncharged conducting sphere of radius $a = 2.0\ \mathrm{cm}$ sits in a uniform electrostatic field $\mathbf{E}_\infty = E_0\,\mathbf{k}$ with $E_0 = 1.00\times10^{5}\ \mathrm{V\,m^{-1}}$. Take as a trial potential, for $r \ge a$,

$$
\Phi(r,\theta) = -E_0\left( r - \frac{a^3}{r^2} \right)\cos\theta .
$$

1. *It is harmonic.* Write $\Phi = f(r)\cos\theta$ with $f(r) = -E_0(r - a^3r^{-2})$. The angular term of the spherical Laplacian needs
   $$
   \frac{1}{\sin\theta}\frac{d}{d\theta}\!\left(\sin\theta\,\frac{d}{d\theta}\cos\theta\right) = \frac{1}{\sin\theta}\frac{d}{d\theta}\bigl(-\sin^2\theta\bigr) = -2\cos\theta ,
   $$
   and there is no $\varphi$-dependence, so $\nabla^2\Phi = \bigl[\frac{1}{r^2}(r^2f')' - \frac{2}{r^2}f\bigr]\cos\theta$. Now $f' = -E_0(1 + 2a^3r^{-3})$, so $r^2f' = -E_0(r^2 + 2a^3r^{-1})$ and $(r^2f')' = -E_0(2r - 2a^3r^{-2})$. Dividing by $r^2$ gives $-2E_0(r^{-1} - a^3r^{-4})$, while $2f/r^2 = -2E_0(r^{-1} - a^3 r^{-4})$ as well. The two cancel: $\nabla^2\Phi = 0$ for $r > 0$.
2. *It satisfies the boundary conditions.* At $r = a$ the bracket vanishes, so $\Phi = 0$ on the sphere, which is therefore an equipotential as a conductor must be. As $r\to\infty$ the second term dies and $\Phi \to -E_0 r\cos\theta = -E_0 z$, the potential of the uniform field. Since the exterior Dirichlet problem has a unique bounded solution, this is the field.
3. *The field.* From the spherical gradient, $\mathbf{E} = -\nabla\Phi$ has
   $$
   E_r = -\frac{\partial\Phi}{\partial r} = E_0\left(1 + \frac{2a^3}{r^3}\right)\cos\theta,
   \qquad
   E_\theta = -\frac{1}{r}\frac{\partial\Phi}{\partial\theta} = -E_0\left(1 - \frac{a^3}{r^3}\right)\sin\theta .
   $$
   At $r = a$ the tangential component $E_\theta$ vanishes identically, as it must at a conducting surface — a check on the algebra that the boundary condition in step 2 did not supply.
4. *Surface charge.* With $E_r(a,\theta) = 3E_0\cos\theta$, the surface density is $\sigma = \varepsilon_0E_r = 3\varepsilon_0E_0\cos\theta$, whose largest value is at the poles:
   $$
   \sigma_{\max} = 3(8.854\times10^{-12})(1.00\times10^{5}) = 2.66\times10^{-6}\ \mathrm{C\,m^{-2}} = 2.66\ \mu\mathrm{C\,m^{-2}} .
   $$
   The field at the poles is three times the applied field, independently of the radius.
5. *Two consistency checks, both using $dA = a^2\,d\Omega$.* The total induced charge is
   $$
   \oint\sigma\,dA = 3\varepsilon_0E_0a^2\int_0^{2\pi}\!\!\int_0^\pi \cos\theta\,\sin\theta\,d\theta\,d\varphi = 0 ,
   $$
   as it must be for an uncharged sphere, because $\int_0^\pi\cos\theta\sin\theta\,d\theta = 0$. The induced dipole moment along $\mathbf{k}$ is
   $$
   p = \oint \sigma\,(a\cos\theta)\,dA = 3\varepsilon_0E_0a^3\,(2\pi)\int_0^\pi\cos^2\theta\sin\theta\,d\theta = 3\varepsilon_0E_0a^3(2\pi)\tfrac23 = 4\pi\varepsilon_0a^3E_0 ,
   $$
   numerically $8.90\times10^{-11}\ \mathrm{C\,m}$. The potential of a point dipole of that strength is $p\cos\theta/(4\pi\varepsilon_0r^2) = E_0a^3\cos\theta/r^2$, which is exactly the second term of $\Phi$: outside the sphere, the conductor's whole effect is that of an induced dipole at its centre.
:::

:::application{provenance=original}
**Separation of variables and the special functions.** These two Laplacians are the starting point of most of the classical boundary-value problems of physics, because each separates. In cylindrical coordinates, substituting $\Phi = R(\rho)\,e^{im\varphi}e^{\pm kz}$ into $\nabla^2\Phi = 0$ leaves Bessel's equation for $R$, which is why Bessel functions describe a vibrating drumhead, the modes of a circular waveguide and the temperature in a cooling cylinder. In spherical coordinates, $\Phi = R(r)Y(\theta,\varphi)$ leaves the spherical harmonic equation for $Y$ — the angular part of the Laplacian above is precisely the operator whose eigenfunctions the $Y_\ell^m$ are, with eigenvalue $-\ell(\ell+1)$ — and the Euler equation $r^2R'' + 2rR' - \ell(\ell+1)R = 0$ for $R$, with solutions $r^\ell$ and $r^{-\ell-1}$. The $\ell = 1$ pair $r$ and $r^{-2}$ is what the conducting-sphere example used.

**Why the radial identity is worth remembering.** In quantum mechanics the radial Schrödinger equation is tamed by exactly the alternative form $r^{-1}\partial_r^2(r\Phi)$: putting $\Phi = u(r)/r$ turns the three-dimensional radial operator into the plain second derivative $u''(r)$, so the hydrogen atom's radial problem becomes an ordinary one-dimensional eigenvalue problem with an effective potential. The same substitution reduces the spherically symmetric heat and wave equations to one-dimensional ones, which is how the spherical wave $f(r-ct)/r$ is found.

**Everyday engineering.** The pipe-flow example is the design calculation behind pressure drop in any laminar duct, from a capillary viscometer to a microfluidic channel; the conducting-sphere example is the model for field enhancement at a rounded electrode, and the factor $3$ at the poles is why discharge begins there. Both calculations take a few lines only because the operators had already been tabulated in coordinates matched to the geometry — which is the whole reason for this unit.
:::
