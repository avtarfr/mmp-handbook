---
id: pde.laplace-fundamental-solution
title: Fundamental solution of Laplace's equation
kind: theorem
level: core
summary: Finds all radial harmonic functions, normalizes them into the fundamental solution $\Phi$ with $-\nabla^2\Phi = \delta_0$ — the logarithm in the plane and $1/(4\pi r)$ in space — and proves that for $f \in C_c^2(\mathbb{R}^n)$ the Newtonian potential $u = \Phi * f$ is $C^2$ and solves Poisson's equation $-\nabla^2 u = f$ in all of $\mathbb{R}^n$.
prereqs: [vcalc.dirac-delta-basics, vcalc.green-identities, vcalc.cylindrical-spherical]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§2.2.1a, p. 21: the search for radial solutions, the reduction of $\\Delta u = 0$ to $v'' + \\frac{n-1}{r}v' = 0$ (Eq. (5)) and its integration to $b\\log r + c$ ($n=2$), $br^{2-n}+c$ ($n\\ge3$); §2.2.1a, Definition and Eq. (6), p. 22, the normalized fundamental solution $\\Phi$ with the gradient and Hessian estimates (7); §2.2.1b, Theorem 1 and its proof, pp. 22–24, that $u = \\Phi * f$ is $C^2$ and satisfies $-\\Delta u = f$ for $f \\in C_c^2(\\mathbb{R}^n)$, together with the warning that differentiating twice under the integral sign is not justified, and the interpretation $-\\Delta\\Phi = \\delta_0$"
    pages: "21-24"
    role: the normalization of $\Phi$ in $\mathbb{R}^n$, the statement and the whole proof route for Poisson's equation, and the error estimates on the three pieces of the integral
  - work: rhb-2006
    loc: "§21.5.3, pp. 757–758: the fundamental solution $F$ defined by $\\nabla^2 F(\\mathbf{r},\\mathbf{r}_0) = \\delta(\\mathbf{r}-\\mathbf{r}_0)$ (Eq. (21.87)), its determination in three dimensions by integrating over a sphere and using the divergence theorem, giving $F = -1/(4\\pi|\\mathbf{r}-\\mathbf{r}_0|)$ (Eq. (21.90)); the two-dimensional case $F = \\frac{1}{2\\pi}\\ln|\\mathbf{r}-\\mathbf{r}_0| + \\text{const}$ (Eq. (21.93)) with the remark that the condition $F \\to 0$ at infinity cannot be imposed there; the electrostatic potential (Eq. (21.91))"
    pages: "757-758"
    role: the flux derivation of the normalizing constant, the opposite sign convention, and the two-dimensional obstruction at infinity
  - work: stakgold-holst-2011
    loc: "§2.5, pp. 175–176: the definition of a fundamental solution for $L$ with pole at $\\xi$ as a distributional solution of $Lu = \\delta(x-\\xi)$, the criterion $(E, L^*\\phi) = \\phi(\\xi)$ for all $\\phi \\in C_0^\\infty$, the non-uniqueness up to solutions of the homogeneous equation, the selection of one solution by symmetry and decay, and the translation rule $E(x,\\xi) = E(x-\\xi,0)$ for constant-coefficient $L$; p. 177, Example 11, that $E(x) = 1/(4\\pi|x|)$ is a fundamental solution for $-\\Delta$; §8.3, pp. 496–497: $-\\Delta E = \\delta(x-\\xi)$ with $E = 1/(4\\pi|x-\\xi|)$ selected by spherical symmetry and decay, the Newtonian potential $u(x) = \\int q(\\xi)\\,d\\xi/(4\\pi|x-\\xi|)$ built by superposition, the convergence of that integral at an interior point by passing to spherical coordinates about $x$, and the harmonicity of $u$ outside the support of $q$"
    pages: "175-177, 496-497"
    role: the distributional definition and the uniqueness-up-to-harmonic remark, the convergence argument for the Newtonian potential, and the superposition reading of it
  - work: strauss-2008
    loc: "§6.1, pp. 158–160: the rotationally invariant harmonic functions, obtained by writing the Laplacian in polar coordinates and integrating $(ru_r)_r = 0$ to $u = c_1\\log r + c_2$ in two dimensions, and $(r^2u_r)_r = 0$ to $u = -c_1 r^{-1} + c_2$ in three"
    pages: "158-160"
    role: the two- and three-dimensional radial solutions found directly from the polar form of the Laplacian
  - work: arfken-2013
    loc: "§3.9, p. 177: Poisson's equation $\\nabla^2\\varphi = -\\rho/\\varepsilon_0$ (Eq. (3.117)), the point charge written with a delta source (Eq. (3.119)), and the resulting identity $\\nabla^2(1/r) = -4\\pi\\delta(\\mathbf{r})$ (Eq. (3.120)) with its two-point form (Eq. (3.121)), described as meaningful only inside an integral"
    pages: "177"
    role: the electrostatic reading, and the identity that fixes the three-dimensional normalization
---

:::statement[The radial harmonic functions]{provenance=adapted src="evans-2010:§2.2.1a, Eq. (5), p. 21; strauss-2008:§6.1, pp. 158, 160"}
Laplace's equation is unchanged by rotations about the origin, so it is natural to look for solutions that depend only on $r = \lvert x\rvert$. Let $v$ be twice differentiable on $(0,\infty)$ and put $u(x) = v(\lvert x\rvert)$ on $\mathbb{R}^n\setminus\{0\}$. Then

$$
\nabla^2 u \;=\; v''(r) + \frac{n-1}{r}\,v'(r) , \tag{1}
$$

so $u$ is harmonic away from the origin if and only if

$$
v'' + \frac{n-1}{r}v' = 0 \qquad (r>0) . \tag{2}
$$

Every solution of (2) is

$$
v(r) =
\begin{cases}
b\log r + c, & n = 2, \\[2pt]
\dfrac{b}{r^{n-2}} + c, & n \ge 3,
\end{cases}
\qquad b, c \text{ constants.} \tag{3}
$$

Strauss obtains the two cases $n = 2$ and $n = 3$ separately from the polar and spherical forms of the Laplacian, writing (2) as $(r u_r)_r = 0$ and $(r^2u_r)_r = 0$ and integrating; Evans does the general $n$ at once, as above. For $n = 1$ the equation reads $v'' = 0$, and the harmonic functions are the affine ones; no singular solution appears, which is why the one-dimensional case gives no hint of what follows.
:::

:::idea{provenance=original}
Writing out $\nabla^2$ for a radial function is a chain-rule computation, and the only thing worth noticing is where the $n-1$ comes from: each of the $n$ coordinate directions contributes a term $v''x_i^2/r^2$ plus a term $v'(1/r - x_i^2/r^3)$, and summing $x_i^2 = r^2$ collapses the first group to $v''$ and the second to $(n-1)v'/r$. Equation (2) is then first order in $v'$: it says that $r^{n-1}v'$ is constant, which is the statement that the flux of $\nabla u$ through the sphere of radius $r$ does not depend on $r$ — exactly what Green's identity with $v\equiv1$ predicts for a harmonic function. Integrating once more gives (3), and the split at $n = 2$ is the familiar split between $\int r^{-1}dr$ and $\int r^{-p}dr$.
:::

:::proof{provenance=adapted src="evans-2010:§2.2.1a, p. 21"}
**Step 1 (derivatives of $r$).** For $x \ne 0$ and each $i$, differentiating $r = (x_1^2+\cdots+x_n^2)^{1/2}$ gives $\partial r/\partial x_i = x_i/r$.

**Step 2 (the Laplacian of a radial function).** By the chain rule, $u_{x_i} = v'(r)\,x_i/r$, and differentiating again, using the product rule and Step 1,

$$
u_{x_ix_i} = v''(r)\frac{x_i^2}{r^2} + v'(r)\left(\frac{1}{r} - \frac{x_i^2}{r^3}\right) .
$$

Summing over $i = 1,\dots,n$ and using $\sum_i x_i^2 = r^2$,

$$
\nabla^2 u = v''(r)\frac{r^2}{r^2} + v'(r)\left(\frac{n}{r} - \frac{r^2}{r^3}\right) = v'' + \frac{n-1}{r}v' ,
$$

which is (1). Hence (2) is equivalent to harmonicity off the origin.

**Step 3 (solve (2)).** Suppose first that $v' $ never vanishes on an interval. Then (2) may be divided by $v'$ and reads $\bigl(\log\lvert v'\rvert\bigr)' = (1-n)/r$, whose solutions are $\log\lvert v'\rvert = (1-n)\log r + \text{const}$, that is

$$
v'(r) = \frac{a}{r^{n-1}} \tag{4}
$$

for a constant $a \neq 0$. Equation (4) also holds, with $a = 0$, when $v' \equiv 0$; and these are the only possibilities, since (2) is a linear first-order equation for $v'$ and (4) is its general solution. (Equivalently, multiply (2) by $r^{n-1}$ to get $(r^{n-1}v')' = 0$ directly, which is Strauss's form.)

**Step 4 (integrate (4)).** For $n = 2$, $v' = a/r$ integrates to $a\log r + c$. For $n \ge 3$, $v' = a r^{1-n}$ integrates to $\frac{a}{2-n}r^{2-n} + c$. Renaming the constant $b$ in each case gives (3). $\square$
:::

:::definition[The fundamental solution]{provenance=adapted src="evans-2010:§2.2.1a, Eq. (6), p. 22; stakgold-holst-2011:§2.5, pp. 175–176 and §8.3, Eqs. (8.3.16)–(8.3.17), p. 496"}
Among the radial harmonic functions (3) we pick out one, normalized so that it is the potential of a unit source. Following Stakgold and Holst, a **fundamental solution for a linear operator $L$ with pole at $\xi$** is a distributional solution of

$$
L E = \delta(x - \xi) ,
$$

which by their criterion means $(E, L^*\phi) = \phi(\xi)$ for every test function $\phi \in C_0^\infty(\mathbb{R}^n)$. Such an $E$ is never unique — any solution of the homogeneous equation may be added — and for an isotropic problem one singles out a particular one by requiring spherical symmetry about the pole and prescribed behaviour at infinity. For a constant-coefficient $L$ it is enough to find the solution with pole at the origin and translate: $E(x,\xi) = E(x-\xi,0)$.

For $L = -\nabla^2$ this selection gives Evans's **fundamental solution of Laplace's equation**

$$
\Phi(x) \;=\;
\begin{cases}
\displaystyle -\frac{1}{2\pi}\log\lvert x\rvert, & n = 2, \\[8pt]
\displaystyle \frac{1}{n(n-2)\alpha(n)}\,\frac{1}{\lvert x\rvert^{\,n-2}}, & n \ge 3,
\end{cases}
\tag{5}
$$

defined for $x \ne 0$. Here, as in :ref[harmonic functions]{to=pde.harmonic-functions}, $\alpha(n)$ denotes the volume of the $n$-dimensional unit ball, so that a ball and a sphere of radius $r$ measure $\lvert B(x,r)\rvert = \alpha(n)r^n$ and $\lvert\partial B(x,r)\rvert = n\alpha(n)r^{n-1}$. In three dimensions $n(n-2)\alpha(n) = 3\cdot1\cdot\tfrac43\pi = 4\pi$, so

$$
\Phi(x) = \frac{1}{4\pi\lvert x\rvert} \qquad (n = 3) ,
$$

which is Stakgold and Holst's $E(x,\xi) = 1/(4\pi\lvert x - \xi\rvert)$. By construction $\Phi$ is harmonic on $\mathbb{R}^n\setminus\{0\}$, and so is $x \mapsto \Phi(x-y)$ away from $x = y$, since Laplace's equation is translation invariant. Evans records the size of its derivatives: there is a constant $C$ with

$$
\lvert D\Phi(x)\rvert \le \frac{C}{\lvert x\rvert^{\,n-1}}, \qquad \lvert D^2\Phi(x)\rvert \le \frac{C}{\lvert x\rvert^{\,n}} \qquad (x\ne 0) . \tag{6}
$$

**Sign conventions, which differ between our sources.** Evans and Stakgold–Holst normalize against $-\nabla^2$, so that $-\nabla^2\Phi = \delta_0$ and $\Phi > 0$ for $n \ge 3$: the potential of a positive point source is positive. Riley, Hobson and Bence normalize against $\nabla^2$ itself, defining $F$ by $\nabla^2 F(\mathbf{r},\mathbf{r}_0) = \delta(\mathbf{r}-\mathbf{r}_0)$, and therefore get the opposite sign,

$$
F(\mathbf{r},\mathbf{r}_0) = -\frac{1}{4\pi\lvert\mathbf{r}-\mathbf{r}_0\rvert} \quad (n=3), \qquad
F(\mathbf{r},\mathbf{r}_0) = \frac{1}{2\pi}\ln\lvert\mathbf{r}-\mathbf{r}_0\rvert + \text{const} \quad (n=2) .
$$

So $F = -\Phi$. **We follow Evans and Stakgold–Holst**: in this unit $-\nabla^2\Phi = \delta_0$. Arfken writes the same content as the identity $\nabla^2(1/r) = -4\pi\delta(\mathbf{r})$, proved in :ref[the Dirac delta in calculations]{to=vcalc.dirac-delta-basics}, which is $-\nabla^2\Phi = \delta_0$ divided by $4\pi$.
:::

:::statement[The normalizing constant is a flux]{provenance=adapted src="rhb-2006:§21.5.3, Eqs. (21.87)–(21.90), p. 757"}
Let $n \ge 2$ and let $\Phi$ be as in (5). Then for every $r > 0$

$$
\oint_{\partial B(0,r)} \frac{\partial\Phi}{\partial n}\; dS \;=\; -1 , \tag{7}
$$

where $\partial/\partial n$ is the derivative along the outward normal of the ball. This single equation is what fixes the constants in (5), and it is how Riley, Hobson and Bence derive them: integrate $\nabla^2 F = \delta$ over a ball centred on the pole, get $1$ on the right, and convert the left side by the divergence theorem into the flux of $\nabla F$ through the sphere; radial symmetry then turns that flux into $(\text{area})\times F'(r)$ and determines $F$.
:::

:::proof{provenance=adapted src="rhb-2006:§21.5.3, p. 757"}
**Step 1 (the normal derivative).** $\Phi$ is radial, $\Phi(x) = v(r)$, so on $\partial B(0,r)$ the outward normal is radial and $\partial\Phi/\partial n = v'(r)$, a constant on the sphere.

**Step 2 (evaluate $v'$).** For $n \ge 3$, $v(r) = \frac{1}{n(n-2)\alpha(n)}r^{2-n}$, so

$$
v'(r) = \frac{2-n}{n(n-2)\alpha(n)}\,r^{1-n} = -\frac{1}{n\alpha(n)}\,r^{1-n} .
$$

For $n = 2$, $v(r) = -\frac{1}{2\pi}\log r$ gives $v'(r) = -\frac{1}{2\pi r}$, which is the same formula since $n\alpha(n) = 2\pi$ when $n = 2$.

**Step 3 (multiply by the area).** The sphere $\partial B(0,r)$ has area $n\alpha(n)r^{n-1}$, so

$$
\oint_{\partial B(0,r)} \frac{\partial\Phi}{\partial n}\; dS = n\alpha(n)r^{n-1}\cdot\left(-\frac{1}{n\alpha(n)}r^{1-n}\right) = -1 ,
$$

independently of $r$, which is (7). $\square$
:::

:::remark{provenance=original}
Equation (7) is the whole content of the normalization, and it also explains why the flux is independent of $r$: by part 2 of :ref[Green's identities]{to=vcalc.green-identities}, the flux of $\nabla\Phi$ through $\partial B(0,r)$ equals $\int_{B(0,r)}\nabla^2\Phi$, which gets no contribution from the region where $\Phi$ is harmonic. All of the $-1$ sits at the origin. Put the other way round: no classical function can have $\nabla^2\Phi = 0$ everywhere and a nonzero flux through a closed surface, so the singularity is not a blemish on $\Phi$ but the source itself.
:::

:::statement[The Newtonian potential solves Poisson's equation]{provenance=adapted src="evans-2010:§2.2.1b, Thm 1, pp. 22–23; stakgold-holst-2011:§8.3, Eq. (8.3.18), p. 496"}
Let $f \in C_c^2(\mathbb{R}^n)$: twice continuously differentiable with compact support. Define the **Newtonian potential** of $f$ as the convolution

$$
u(x) \;=\; \int_{\mathbb{R}^n} \Phi(x-y)\,f(y)\; dy
\;=\;
\begin{cases}
\displaystyle -\frac{1}{2\pi}\int_{\mathbb{R}^2}\log\lvert x-y\rvert\, f(y)\; dy, & n = 2,\\[10pt]
\displaystyle \frac{1}{n(n-2)\alpha(n)}\int_{\mathbb{R}^n}\frac{f(y)}{\lvert x-y\rvert^{\,n-2}}\; dy, & n \ge 3 .
\end{cases}
\tag{8}
$$

Then

1. $u \in C^2(\mathbb{R}^n)$, and
2. $-\nabla^2 u = f$ at every point of $\mathbb{R}^n$.

In three dimensions (8) reads $u(x) = \int f(y)\,dy/(4\pi\lvert x-y\rvert)$, which is Stakgold and Holst's superposition of point-source potentials: the volume element at $y$ carries source strength $f(y)\,dy$ and contributes $f(y)\,dy/(4\pi\lvert x-y\rvert)$ to the potential at $x$. Evans notes that the smoothness demanded of $f$ is far more than is needed, and refers to Gilbarg and Trudinger for weaker hypotheses.
:::

:::idea{provenance=original}
The formula is the superposition one would write down without thinking, but the obvious proof of it is wrong, and seeing why is the point. One cannot simply move two derivatives inside the integral in (8): by the Hessian estimate (6), $\lvert D^2\Phi\rvert$ is of size $\lvert x-y\rvert^{-n}$ near the singularity, which is not integrable in $n$ dimensions, so the differentiated integral does not even converge.

The repair has two moves. First, write the convolution the other way round, $u(x) = \int\Phi(y)f(x-y)\,dy$, so that the derivatives fall on $f$, which is smooth and compactly supported; difference quotients then converge uniformly and give $u \in C^2$ with $\nabla^2u(x) = \int\Phi(y)\,\nabla^2_x f(x-y)\,dy$. Second, cut a ball $B(0,\varepsilon)$ out around the singularity. On the small ball, $\Phi$ is integrable — that is the whole difference between $\Phi$ and $D^2\Phi$ — so that piece is $O(\varepsilon^2)$ or $O(\varepsilon^2\lvert\log\varepsilon\rvert)$ and disappears. Outside the ball, $\Phi$ is smooth and harmonic, so Green's second identity moves both derivatives from $f$ onto $\Phi$, killing the volume term and leaving only boundary terms on the sphere $\partial B(0,\varepsilon)$. One of those terms carries a factor $\Phi$ and vanishes with $\varepsilon$; the other carries $\partial\Phi/\partial\nu$, which by the normalization (7) is exactly $1/\lvert\partial B(0,\varepsilon)\rvert$, so that term is an average of $f$ over a shrinking sphere, and it tends to $-f(x)$. That limit is the theorem.
:::

:::proof{provenance=adapted src="evans-2010:§2.2.1b, pp. 23–24"}
Throughout, $C$ denotes a constant that may change from line to line but does not depend on $\varepsilon$.

**Step 1 ($\Phi$ is locally integrable).** Near the origin $\lvert\Phi(y)\rvert \le C\lvert y\rvert^{2-n}$ for $n\ge3$ and $C\lvert\log\lvert y\rvert\rvert$ for $n=2$. In polar coordinates $dy = n\alpha(n)\rho^{n-1}d\rho$, so

$$
\int_{B(0,\varepsilon)}\lvert\Phi\rvert\,dy \le C\int_0^\varepsilon \rho^{2-n}\rho^{n-1}d\rho = C\varepsilon^2 \quad (n\ge3),
\qquad
\int_{B(0,\varepsilon)}\lvert\Phi\rvert\,dy \le C\varepsilon^2\lvert\log\varepsilon\rvert \quad (n=2). \tag{9}
$$

Both are finite, and both tend to $0$ with $\varepsilon$. The same computation with one power of $\rho$ fewer bounds the surface integral,

$$
\oint_{\partial B(0,\varepsilon)}\lvert\Phi\rvert\,dS \le C\varepsilon \quad (n\ge3),
\qquad
\oint_{\partial B(0,\varepsilon)}\lvert\Phi\rvert\,dS \le C\varepsilon\lvert\log\varepsilon\rvert \quad (n=2). \tag{10}
$$

In particular the integral (8) converges absolutely for every $x$: this is Stakgold and Holst's remark that the singularity of the kernel is mild enough to be cancelled by the volume element.

**Step 2 (move the derivatives onto $f$).** Substituting $y \mapsto x - y$ in (8),

$$
u(x) = \int_{\mathbb{R}^n}\Phi(y)\,f(x-y)\; dy . \tag{11}
$$

Fix $i$ and $h \ne 0$. Subtracting two copies of (11),

$$
\frac{u(x+he_i) - u(x)}{h} = \int_{\mathbb{R}^n}\Phi(y)\,\frac{f(x+he_i-y) - f(x-y)}{h}\; dy .
$$

Because $f \in C^2_c$, its first derivatives are uniformly continuous, so the difference quotient of $f$ converges to $f_{x_i}(x-y)$ uniformly in $y$ as $h \to 0$; and $\Phi$ is integrable on the (bounded) region where the quotients are not zero, by Step 1. Hence we may pass to the limit under the integral:

$$
u_{x_i}(x) = \int_{\mathbb{R}^n}\Phi(y)\,f_{x_i}(x-y)\; dy .
$$

Repeating the argument with $f_{x_i}$ in place of $f$, which is legitimate because $f_{x_i} \in C^1_c$,

$$
u_{x_ix_j}(x) = \int_{\mathbb{R}^n}\Phi(y)\,f_{x_ix_j}(x-y)\; dy \qquad (i,j = 1,\dots,n) . \tag{12}
$$

The right side of (12) is continuous in $x$, again by uniform continuity of $f_{x_ix_j}$ and integrability of $\Phi$, so $u \in C^2(\mathbb{R}^n)$. This is part 1. Note that *no* derivative has been taken of $\Phi$ so far.

**Step 3 (split off the singularity).** Summing (12) over $i = j$ and splitting the domain at radius $\varepsilon$,

$$
\nabla^2 u(x) = \underbrace{\int_{B(0,\varepsilon)}\Phi(y)\,\nabla^2_x f(x-y)\,dy}_{I_\varepsilon}
\;+\;\underbrace{\int_{\mathbb{R}^n\setminus B(0,\varepsilon)}\Phi(y)\,\nabla^2_x f(x-y)\,dy}_{J_\varepsilon} .
$$

By (9), $\lvert I_\varepsilon\rvert \le \lVert D^2f\rVert_\infty\int_{B(0,\varepsilon)}\lvert\Phi\rvert \le C\varepsilon^2$ for $n\ge3$ and $C\varepsilon^2\lvert\log\varepsilon\rvert$ for $n=2$; either way $I_\varepsilon \to 0$.

**Step 4 (integrate by parts once).** In $J_\varepsilon$ the $x$-Laplacian of $f(x-y)$ equals its $y$-Laplacian, because each differentiation in $y$ brings one factor $-1$ and they appear in pairs. On the region $\Omega_\varepsilon = \mathbb{R}^n\setminus B(0,\varepsilon)$ — intersected with a large ball containing the support of $y \mapsto f(x-y)$, outside which everything vanishes — the function $\Phi$ is smooth and $f(x-\cdot)$ is $C^2$, so Green's first identity applies:

$$
J_\varepsilon = \int_{\Omega_\varepsilon}\Phi\,\nabla^2_y f(x-y)\,dy
= -\int_{\Omega_\varepsilon}\nabla\Phi(y)\cdot\nabla_y f(x-y)\,dy
+ \oint_{\partial B(0,\varepsilon)}\Phi(y)\,\frac{\partial f}{\partial\nu}(x-y)\,dS(y) ,
$$

where $\boldsymbol\nu$ is the unit normal on $\partial B(0,\varepsilon)$ pointing *into* the ball, i.e. outward from $\Omega_\varepsilon$ (the sign in Green's identity is fixed by that choice, and there is no contribution from the large sphere, where $f$ vanishes). Call the two terms $K_\varepsilon$ and $L_\varepsilon$. By (10), $\lvert L_\varepsilon\rvert \le \lVert Df\rVert_\infty\oint_{\partial B(0,\varepsilon)}\lvert\Phi\rvert\,dS \le C\varepsilon$ for $n\ge3$ and $C\varepsilon\lvert\log\varepsilon\rvert$ for $n = 2$, so $L_\varepsilon \to 0$.

**Step 5 (integrate by parts again; the volume term dies).** Applying Green's first identity to $K_\varepsilon$ in the other direction,

$$
K_\varepsilon = \int_{\Omega_\varepsilon}\nabla^2\Phi(y)\,f(x-y)\,dy \;-\; \oint_{\partial B(0,\varepsilon)}\frac{\partial\Phi}{\partial\nu}(y)\,f(x-y)\,dS(y) .
$$

The volume term is zero, because $\Phi$ is harmonic on $\Omega_\varepsilon$ — the singularity has been excised, and this is the step that needed the excision.

**Step 6 (the surviving boundary term).** On $\partial B(0,\varepsilon)$ the normal $\boldsymbol\nu$ points towards the origin, $\boldsymbol\nu = -y/\lvert y\rvert$, so by Step 2 of the previous proof

$$
\frac{\partial\Phi}{\partial\nu}(y) = -v'(\varepsilon) = \frac{1}{n\alpha(n)\varepsilon^{n-1}} = \frac{1}{\lvert\partial B(0,\varepsilon)\rvert} .
$$

It is constant on the sphere, and its value is exactly the reciprocal of the sphere's area — this is where the normalization (7) is used. Therefore

$$
K_\varepsilon = -\frac{1}{\lvert\partial B(0,\varepsilon)\rvert}\oint_{\partial B(0,\varepsilon)}f(x-y)\, dS(y)
= -\frac{1}{\lvert\partial B(x,\varepsilon)\rvert}\oint_{\partial B(x,\varepsilon)} f(z)\, dS(z) ,
$$

substituting $z = x - y$, which maps the sphere of radius $\varepsilon$ about $0$ onto the sphere of radius $\varepsilon$ about $x$. The right side is minus the average of $f$ over a sphere shrinking to $x$, and $f$ is continuous, so by the argument of Step 5 of :ref[harmonic functions]{to=pde.harmonic-functions} it tends to $-f(x)$.

**Step 7 (collect).** $\nabla^2 u(x) = I_\varepsilon + K_\varepsilon + L_\varepsilon$ for every $\varepsilon > 0$, and the left side does not depend on $\varepsilon$. Letting $\varepsilon \to 0^+$ and using Steps 3, 4 and 6,

$$
\nabla^2 u(x) = 0 + (-f(x)) + 0 = -f(x) ,
$$

that is $-\nabla^2 u = f$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Compact support of $f$, in Steps 2 and 4.* It makes (8) converge at infinity, makes the difference quotients vanish outside a bounded set, and kills the outer boundary term in Step 4. Without decay the convolution need not exist at all: in three dimensions $f \equiv 1$ gives a divergent integral.
- *$f \in C^2$, in Steps 2, 3 and 4.* Two derivatives are moved onto $f$, and $\lVert D^2f\rVert_\infty$ is used to bound $I_\varepsilon$. Evans states that much less suffices, and the formula remains correct for $f$ merely Hölder continuous with compact support, but that is not what is proved here.
- *The excision of $B(0,\varepsilon)$, in Step 5.* This is the hinge. The term $\int\nabla^2\Phi\,f$ vanishes only because the origin has been removed; if one keeps it and writes $\nabla^2\Phi = -\delta_0$ in the sense of distributions, the same term produces $-f(x)$ directly, which is Evans's "formal computation" and Arfken's way of using $\nabla^2(1/r) = -4\pi\delta(\mathbf{r})$. The proof above is that formal computation made legitimate.
- *$n \ge 2$.* The constants in (5) are singular at $n=2$ (where $r^{2-n}$ is constant) and the logarithm replaces the power. In $n = 1$ there is no singular radial solution at all, and the fundamental solution of $-d^2/dx^2$ is $-\tfrac12\lvert x\rvert$, which grows rather than decays.
- *Behaviour at infinity, and why two dimensions is different.* For $n\ge3$, $\Phi \to 0$ at infinity, and this is the extra condition that picks $\Phi$ out of the family (3): Riley, Hobson and Bence impose $F \to 0$ as $\lvert\mathbf{r}\rvert\to\infty$ and conclude that the additive constant is zero. For $n = 2$ they point out that this condition cannot be imposed, because $\log\lvert x\rvert$ is unbounded in both directions, and the additive constant stays undetermined. The non-uniqueness is exactly Stakgold and Holst's remark that a fundamental solution is determined only up to a solution of the homogeneous equation; adding a constant, or any entire harmonic function, gives another fundamental solution.
- *What the theorem does not say.* It gives *a* solution of $-\nabla^2u = f$ on all of $\mathbb{R}^n$, not the only one: $u + h$ solves the same equation for any harmonic $h$. Uniqueness needs a condition at infinity (for $n\ge3$, decay, by the maximum principle applied on large balls), or boundary data on a bounded region, which is the subject of :ref[Green's functions for Laplace and Poisson problems]{to=green.laplace-green-functions}.
:::

:::example[A smooth source in three dimensions, solved twice]{provenance=original}
Take $n = 3$ and the radial source

$$
f(x) = \begin{cases}(1 - r^2)^3, & r = \lvert x\rvert \le 1,\\ 0, & r > 1,\end{cases}
$$

which is in $C_c^2(\mathbb{R}^3)$ but not $C^3$: with $s = r^2$ the profile $(1-s)^3$ and its first two derivatives in $s$ vanish at $s = 1$, while the third does not. So Evans's hypotheses hold exactly and no more.

**Route 1: solve the ODE.** For a radial $u$, $-\nabla^2 u = -\frac{1}{r^2}(r^2u')'$, so $-\nabla^2u = f$ says $(r^2u')' = -r^2f$ and hence $r^2u'(r) = -M(r)$ with

$$
M(r) = \int_0^r s^2 f(s)\, ds = \frac{r^3}{3} - \frac{3r^5}{5} + \frac{3r^7}{7} - \frac{r^9}{9} \qquad (r\le1), \qquad M(1) = \frac{16}{315} ,
$$

the last value from $\tfrac13 - \tfrac35 + \tfrac37 - \tfrac19 = \tfrac{105 - 189 + 135 - 35}{315}$. Outside the support $M$ is constant, so $u' = -M(1)/r^2$ and the decaying solution is

$$
u(r) = \frac{16}{315\,r} \qquad (r \ge 1) .
$$

Integrating $u' = -M(r)/r^2$ inwards from $r=1$ gives, for $r \le 1$,

$$
u(r) = \frac{1}{8} - \frac{r^2}{6} + \frac{3r^4}{20} - \frac{r^6}{14} + \frac{r^8}{72} .
$$

(Check the match at $r=1$: $\tfrac18 - \tfrac16 + \tfrac3{20} - \tfrac1{14} + \tfrac1{72} = \tfrac{16}{315} = 0.0507937$, and the two expressions for $u'$ both give $-\tfrac{16}{315}$ there. Check the equation: $u'' + 2u'/r = -1 + 3r^2 - 3r^4 + r^6 = -(1-r^2)^3$, so $-\nabla^2 u = f$ inside, as required.)

**Route 2: evaluate the convolution at the centre.** Formula (8) at $x = 0$ with $\Phi = 1/(4\pi\lvert y\rvert)$ and $dy = 4\pi s^2\,ds$ gives

$$
u(0) = \int_{\mathbb{R}^3}\frac{f(y)}{4\pi\lvert y\rvert}\,dy = \int_0^1 \frac{(1-s^2)^3}{4\pi s}\,4\pi s^2\, ds = \int_0^1 s(1-s^2)^3\, ds = \left[-\frac{(1-s^2)^4}{8}\right]_0^1 = \frac18 .
$$

The two routes agree: $u(0) = \tfrac18$ exactly. Notice that the integrand $s(1-s^2)^3$ is bounded even though $\Phi$ blows up at the origin — the factor $s^2$ from the volume element beats the factor $s^{-1}$ from the kernel, which is Step 1 of the proof in one line.

**The far field.** The total source strength is $Q = \int f\,dy = 4\pi M(1) = 64\pi/315$, and outside the support $u = 16/(315r) = Q/(4\pi r) = Q\,\Phi(x)$. A localized source looks like a point source of the same strength from far away; the systematic version of this statement is :ref[the multipole expansion]{to=pde.multipole-expansion}.
:::

:::example[The same problem in the plane: the potential does not decay]{provenance=original}
Take $n = 2$ and a uniform source on the disc of radius $a$: $f = \rho_0$ for $r \le a$ and $f = 0$ for $r > a$. (This $f$ is discontinuous, so it falls outside Evans's hypotheses; we solve the ODE directly and verify the result, and the point of the example is the behaviour at infinity, not the regularity.) With $-\nabla^2 u = -\frac1r(ru')'$,

$$
u(r) = \frac{\rho_0}{4}\bigl(a^2 - r^2\bigr) \quad (r \le a), \qquad
u(r) = -\frac{\rho_0a^2}{2}\log\frac{r}{a} \quad (r \ge a) .
$$

*Check.* Inside, $u' = -\rho_0r/2$ and $u'' = -\rho_0/2$, so $u'' + u'/r = -\rho_0$ and $-\nabla^2u = \rho_0$. Outside, $u$ is a multiple of $\log r$, which is harmonic by (3), so $-\nabla^2u = 0$. At $r = a$ both expressions give $u = 0$, and both give $u' = -\rho_0a/2$: the solution is $C^1$ across the edge, as it must be, and its second derivative jumps there by exactly the jump in $f$.

*What this shows.* The total source strength is $Q = \pi a^2\rho_0$, and the exterior potential is $-\frac{Q}{2\pi}\log(r/a)$, which tends to $-\infty$ as $r\to\infty$ rather than to $0$. In two dimensions the Newtonian potential of a nonzero net source cannot be made to vanish at infinity, which is why Riley, Hobson and Bence keep an undetermined constant in the planar fundamental solution and impose no condition at infinity. The field $-u'(r) = Q/(2\pi r)$ does decay, and it is the field, not the potential, that is physical here: this is the potential of a uniformly charged infinite cylinder of radius $a$, read in the plane transverse to its axis.
:::

:::application{provenance=original}
**Electrostatics and gravitation.** Arfken's route to the fundamental solution is the physicist's: Gauss's law $\nabla\cdot\mathbf{E} = \rho/\varepsilon_0$ with $\mathbf{E} = -\nabla\varphi$ gives Poisson's equation $\nabla^2\varphi = -\rho/\varepsilon_0$, and a point charge $q$ at the origin means $\rho = q\,\delta(\mathbf{r})$. Comparing with the Coulomb potential $\varphi = q/(4\pi\varepsilon_0 r)$ produces $\nabla^2(1/r) = -4\pi\delta(\mathbf{r})$, which Arfken emphasises is meaningful only under an integral sign. In the normalization of this unit, $\varphi = \Phi * (\rho/\varepsilon_0)$, which is Riley, Hobson and Bence's Eq. (21.91),

$$
\varphi(\mathbf{x}) = \int \frac{\rho(\mathbf{y})}{4\pi\varepsilon_0\lvert\mathbf{x}-\mathbf{y}\rvert}\; dV(\mathbf{y}) ,
$$

the integral over all space. The same formula with $-4\pi G$ in place of $1/\varepsilon_0$ is the Newtonian gravitational potential of a mass distribution, which is where the name "Newtonian potential" comes from. The theorem above is the statement that this universally used formula really does solve the field equation, and the proof is where one sees that the $1/r$ singularity of each point contribution is harmless after integration but fatal if one differentiates first.

**Boundary-value problems.** Riley, Hobson and Bence introduce the fundamental solution not for its own sake but as the singular part of a Green's function: for a region $V$ with boundary $S$ one writes $G = F + H$ with $F$ the fundamental solution, carrying the delta, and $H$ harmonic in $V$, chosen to make $G$ satisfy the boundary condition. Every construction in :ref[Green's functions for Laplace and Poisson problems]{to=green.laplace-green-functions} and :ref[the method of images]{to=green.method-of-images} begins this way, and the representation formula they derive from Green's second identity reduces to (8) when the boundary is pushed to infinity and the data vanish there.

**Screened potentials and other operators.** The pattern of the definition — solve the homogeneous equation away from the pole, then fix the strength of the singularity by the integrated form of the equation — is Stakgold and Holst's general recipe, and it is not special to the Laplacian. For $-\nabla^2 + q^2$, which governs steady diffusion in an absorbing medium (and, in particle physics, a massive scalar field), the same recipe gives $e^{-qr}/(4\pi r)$ in three dimensions — the Yukawa or Debye-screened potential — and $K_0(q\lvert x\rvert)/(2\pi)$ in two, as Stakgold and Holst set as their Exercise 2.5.3. The Laplacian is the $q \to 0$ limit, and the comparison shows what the long range of the Coulomb and Newtonian potentials is really due to: the absence of a mass or screening term.

**Numerics: boundary integral and fast multipole methods.** Because (8) is a convolution with an explicit kernel, a charge distribution given on a mesh of $N$ points produces a potential computable at all $N$ points in $O(N\log N)$ or $O(N)$ operations instead of $O(N^2)$, by grouping distant sources — the fast multipole method, and more broadly the boundary-element method, in which an elliptic problem on a region is converted into an integral equation on its boundary using $\Phi$ as the kernel. The local integrability established in Step 1 is what makes those singular boundary integrals convergent, and the inverse-power bounds (6) are what make the far-field grouping accurate.
:::
