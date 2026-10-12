---
id: complex.cauchy-riemann
title: Analyticity and the Cauchy-Riemann equations
kind: theorem
level: core
summary: A complex function is differentiable at a point only if its real and imaginary parts satisfy the Cauchy-Riemann equations there, and it is analytic on an open set if those equations hold with continuous first partial derivatives; the two parts are then harmonic conjugates.
prereqs: [complex.elementary-functions, found.partial-derivatives-chain-rule]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 2, §1.1–1.2, pp. 23–26"
    pages: "23-26"
    role: statement and proof route for both directions; the remark that f' exists implies the four partials exist; harmonicity of u and v; the harmonic conjugate found by integration
  - work: arfken-2013
    loc: "§11.2, Eqs. (11.3)–(11.13), pp. 471–474"
    pages: "471-474"
    role: necessity by taking two directions of approach; the definition of analytic as differentiable and single-valued in a region; harmonicity of u and v and the orthogonality of their level curves
  - work: rhb-2006
    loc: "§24.1–24.2, Eqs. (24.1)–(24.5), pp. 825–828"
    pages: "825-828"
    role: the definition of analytic on a domain; necessity of the Cauchy-Riemann relations from two directions of approach; the explicit statement that existence plus continuity of the four partials plus the relations is sufficient
---

:::definition[Complex differentiability and analyticity]{provenance=adapted src="ahlfors-1979:Ch. 2, §1.1–1.2, pp. 23–24; arfken-2013:§11.2, Eq. (11.3) and the subsection on analytic functions, pp. 471–472; rhb-2006:§24.1, Eq. (24.1), p. 825, and p. 826"}
Let $f$ be defined on a neighbourhood of $z \in \mathbb{C}$. Then $f$ is **complex differentiable** at $z$ if

$$
f'(z) = \lim_{h \to 0} \frac{f(z+h) - f(z)}{h}
$$

exists, the limit being taken over complex $h \to 0$ and required to be the same however $h$ approaches $0$. A function that is single-valued and complex differentiable at every point of an open set $\Omega$ is **analytic** (equivalently **holomorphic**) on $\Omega$; a function analytic on all of $\mathbb{C}$ is **entire**. A point where $f$ is defined on a neighbourhood but not differentiable is a **singular point**.

Writing $f = u + iv$ with $u, v$ real-valued functions of $(x,y)$, we use subscripts for partial derivatives: $u_x = \partial u/\partial x$ and so on.

Differentiability at a point implies continuity there, since $f(z+h) - f(z) = h\cdot\frac{f(z+h)-f(z)}{h} \to 0 \cdot f'(z) = 0$. The sum, product and (where the denominator does not vanish) quotient of differentiable functions are differentiable, with the usual rules; the proofs are the real ones verbatim, because they use only field algebra and the limit laws.
:::

:::statement[Cauchy-Riemann equations]{provenance=adapted src="ahlfors-1979:Ch. 2, §1.2, Eqs. (5)–(6) and the displayed theorem, pp. 25–26; arfken-2013:§11.2, Eqs. (11.9)–(11.12), pp. 471–472"}
Let $f = u + iv$ be defined on an open set $\Omega \subseteq \mathbb{C}$.

1. **Necessity.** If $f$ is complex differentiable at $z_0 = x_0 + iy_0$, then all four partial derivatives $u_x, u_y, v_x, v_y$ exist at $z_0$ and satisfy there the **Cauchy-Riemann equations**

   $$
   u_x = v_y, \qquad u_y = -v_x ,
   $$

   equivalently $\partial f/\partial x = -i\,\partial f/\partial y$; and then $f'(z_0) = u_x + i v_x$.

2. **Sufficiency.** If $u$ and $v$ have continuous first partial derivatives on $\Omega$ and satisfy the Cauchy-Riemann equations at every point of $\Omega$, then $f$ is analytic on $\Omega$, and $f'= u_x + iv_x$ is continuous. (:cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 828"} record the same three conditions — existence, continuity, and the relations — as sufficient, and note that it is continuity that separates them from the necessary conditions.)

3. **Harmonic conjugates.** If in addition $u$ and $v$ have continuous second partial derivatives, then both are **harmonic** on $\Omega$:

   $$
   u_{xx} + u_{yy} = 0, \qquad v_{xx} + v_{yy} = 0 .
   $$

   A pair $(u,v)$ of harmonic functions satisfying the Cauchy-Riemann equations is a pair of **conjugate harmonic functions**; $v$ is determined by $u$ up to an additive constant on a connected $\Omega$, and $u$ is the conjugate of $-v$. Connectedness is needed for that uniqueness clause alone: parts 1 and 2, and the harmonicity of $u$ and $v$, hold on any open set.

   The hypothesis of continuous *second* partials is ours, not the source's, and it is there only to let us interchange the mixed partials of $v$ in the proof. It can be removed: :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 2, §1.2, p. 25"} obtains harmonicity instead from the analyticity of $f'$, which :ref[Cauchy's integral formula]{to=complex.cauchy-integral-formula} supplies for every analytic $f$ with no extra assumption, so an analytic function automatically has partial derivatives of all orders. We assume the hypothesis here because that route is not available until later in the chapter.
:::

:::idea{provenance=original}
Necessity costs nothing: the limit must not depend on the direction of approach, so computing it along the two coordinate directions gives two expressions for the same number $f'(z_0)$, and equating real and imaginary parts gives the two equations. Sufficiency is where work is needed, and the work is all in one step: the Cauchy-Riemann equations are algebra, but to turn the *existence* of partial derivatives into a statement about *every* direction of approach we need the first-order Taylor expansion of a function of two variables, which is exactly what continuity of the partials buys. Once that expansion is available, the Cauchy-Riemann equations say precisely that the real-linear map $(h,k) \mapsto (u_xh + u_yk, v_xh + v_yk)$ is multiplication by the complex number $u_x + iv_x$, and a difference quotient whose numerator is multiplication by a fixed complex number has a limit. Harmonicity is then one more differentiation of each equation.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 2, §1.2, pp. 24–26; arfken-2013:§11.2, Eqs. (11.7)–(11.13), pp. 471–473"}
**Part 1 (necessity).** Suppose $f'(z_0)$ exists. Restrict $h$ to real values: then $y$ is held at $y_0$ and the difference quotient becomes the difference quotient of $x \mapsto f(x + iy_0)$. Its limit exists and equals $f'(z_0)$, so $u_x$ and $v_x$ exist at $z_0$ and

$$
f'(z_0) = u_x + i v_x .
$$

Now restrict $h$ to purely imaginary values $h = ik$ with $k$ real. Since $1/(ik) = -i/k$,

$$
f'(z_0) = \lim_{k\to 0} \frac{f(z_0 + ik) - f(z_0)}{ik} = -i \lim_{k \to 0}\frac{f(z_0 + ik) - f(z_0)}{k} = -i(u_y + iv_y) = v_y - iu_y ,
$$

so $u_y$ and $v_y$ exist at $z_0$ as well. The two expressions for $f'(z_0)$ are the same complex number; equating real parts gives $u_x = v_y$ and imaginary parts gives $v_x = -u_y$. (The combined form is $f_x = -if_y$, which on substituting $f = u+iv$ reproduces the pair.)

**Part 2 (sufficiency).** Fix $z_0 \in \Omega$ and let $h + ik$ be a small complex increment, $h, k$ real. Because $u$ has continuous first partials on the open set $\Omega$, it is differentiable there in the sense of :ref[the calculus of several variables]{to=found.partial-derivatives-chain-rule}:

$$
u(x_0 + h, y_0 + k) - u(x_0,y_0) = u_x h + u_y k + \varepsilon_1(h,k),
$$

with the partials evaluated at $z_0$ and $\varepsilon_1(h,k)/\lvert h + ik\rvert \to 0$ as $h + ik \to 0$; and likewise

$$
v(x_0 + h, y_0 + k) - v(x_0,y_0) = v_x h + v_y k + \varepsilon_2(h,k) .
$$

This is the one place where continuity of the partials does essential work; it is used once more, trivially, at the end of the part, to see that $f' = u_x + iv_x$ is continuous. Adding $i$ times the second to the first,

$$
f(z_0 + h + ik) - f(z_0) = (u_x + iv_x)h + (u_y + iv_y)k + \varepsilon,
\qquad \varepsilon = \varepsilon_1 + i\varepsilon_2 .
$$

Now apply the hypothesis: by the Cauchy-Riemann equations at $z_0$, $u_y + iv_y = -v_x + iu_x = i(u_x + i v_x)$. Hence the two linear terms combine,

$$
f(z_0 + h + ik) - f(z_0) = (u_x + iv_x)(h + ik) + \varepsilon ,
$$

and dividing by $h + ik \ne 0$,

$$
\frac{f(z_0 + h + ik) - f(z_0)}{h+ik} = (u_x + iv_x) + \frac{\varepsilon}{h+ik} .
$$

The last term tends to $0$ as $h + ik \to 0$, because $\lvert \varepsilon\rvert/\lvert h+ik\rvert \le \lvert\varepsilon_1\rvert/\lvert h+ik\rvert + \lvert \varepsilon_2\rvert/\lvert h+ik\rvert \to 0$. So the limit exists, independently of the direction of approach, and $f'(z_0) = u_x + iv_x$. As $z_0 \in \Omega$ was arbitrary, $f$ is analytic on $\Omega$, and $f' = u_x + iv_x$ is continuous because $u_x$ and $v_x$ are.

**Part 3 (harmonicity).** Differentiate $u_x = v_y$ with respect to $x$ and $u_y = -v_x$ with respect to $y$:

$$
u_{xx} = v_{yx}, \qquad u_{yy} = -v_{xy} .
$$

The second partial derivatives of $v$ are continuous by hypothesis, so the mixed partials agree, $v_{yx} = v_{xy}$. Adding the two displayed equations therefore gives $u_{xx} + u_{yy} = 0$. For $v$, note that $-if = v - iu$ is differentiable wherever $f$ is, with real part $v$ and imaginary part $-u$; applying the result just proved to $-if$ gives $v_{xx} + v_{yy} = 0$. (Equivalently, differentiate $u_x = v_y$ with respect to $y$ and $u_y = -v_x$ with respect to $x$ and subtract.)

*Uniqueness of the conjugate.* If $v$ and $\tilde v$ both satisfy the Cauchy-Riemann equations with the same $u$, then $w = v - \tilde v$ has $w_x = w_y = 0$ on $\Omega$, so $w$ is constant on each connected component: constant on $\Omega$ if $\Omega$ is connected. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *The Cauchy-Riemann equations at a single point are not enough.* Let

  $$
  f(z) = \frac{\bar z^{\,2}}{z}\ (z \ne 0), \qquad f(0) = 0 .
  $$

  In polar form $f(re^{i\theta}) = r e^{-3i\theta}$, so $\lvert f(z)\rvert = \lvert z\rvert$ and $f$ is continuous at $0$. On the real axis $f(x) = x$, giving $u_x(0) = 1$, $v_x(0) = 0$; on the imaginary axis $f(iy) = iy$, giving $u_y(0) = 0$, $v_y(0) = 1$. Both Cauchy-Riemann equations hold at the origin. Yet $f(z)/z = e^{-4i\theta}$, which is $1$ along $\theta = 0$ and $-1$ along $\theta = \pi/4$: no limit, so $f$ is not differentiable at $0$. The hypothesis in part 2 is that the equations hold *throughout an open set*, and here they hold at the one point only. Off the origin, comparing the radial and tangential difference quotients at $z_0 = r_0e^{i\theta_0}$ shows the equations fail: moving radially, $dz = e^{i\theta_0}dr$ and $df = e^{-3i\theta_0}dr$, so the quotient is $e^{-4i\theta_0}$, whereas moving along the circle $\lvert z\rvert = r_0$, $dz = ir_0e^{i\theta_0}d\theta$ and $df = -3ir_0e^{-3i\theta_0}d\theta$, so the quotient is $-3e^{-4i\theta_0}$. The two differ, so no derivative exists at $z_0$ either.
- *Continuity of the partials does its real work once*, in getting the first-order expansions in part 2 (it is used again only to read off that $f'$ is continuous, which is immediate). It cannot simply be deleted from that argument: mere existence of the four partials at a point does not give the expansions. It is, however, not the weakest possible hypothesis; it is the one :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 2, §1.2, p. 26"} adopts explicitly, and the one we prove, and it is satisfied by every function met in practice.
- *Single-valuedness is part of the definition of analytic*, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.2, p. 472"} stress. The multivalued $\operatorname{Ln} z$ satisfies the Cauchy-Riemann equations on $\mathbb{C}\setminus\{0\}$ branch by branch but is analytic only after a cut is made (:ref[branch points and branch cuts]{to=complex.branch-points-cuts}).
- *Conjugacy is a relation, not a symmetry.* If $v$ is the conjugate of $u$ then $u$ is the conjugate of $-v$, not of $v$. For $(v,u)$ to be a conjugate pair in that order, the first Cauchy-Riemann equation would have to read $v_x = u_y$; what the equations for $(u,v)$ actually give is $v_x = -u_y$, so the sign is wrong unless $u_y = 0$. Concretely, for $z^2 = (x^2-y^2) + i(2xy)$ we have $v_x = 2y$ and $u_y = -2y$, which is the relation $v_x = -u_y$ and not $v_x = u_y$; and indeed $z^2$ is analytic while $2xy + i(x^2-y^2) = i\overline{z^2}$ is nowhere analytic, its Cauchy-Riemann equations holding at the origin only.
- *A test for non-analyticity.* $f(z) = \bar z$ has $u = x$, $v = -y$, so $u_x = 1 \ne -1 = v_y$ everywhere: $\bar z$ is continuous on $\mathbb{C}$ and differentiable nowhere. The same computation kills $\lvert z\rvert^2 = z\bar z$ except at the origin, and $\operatorname{Re} z$ everywhere.
:::

:::example[Constructing a harmonic conjugate]{provenance=original}
Let $u(x,y) = x^3 - 3xy^2 + 2y$. First check that a conjugate can exist: $u_{xx} = 6x$ and $u_{yy} = -6x$, so $u$ is harmonic on $\mathbb{R}^2$.

1. *Integrate the first equation.* $v_y = u_x = 3x^2 - 3y^2$, so integrating in $y$ at fixed $x$,

   $$
   v(x,y) = 3x^2 y - y^3 + \varphi(x)
   $$

   with $\varphi$ an unknown function of $x$ alone.
2. *Impose the second equation.* $v_x = 6xy + \varphi'(x)$ must equal $-u_y = 6xy - 2$, so $\varphi'(x) = -2$ and $\varphi(x) = -2x + c$.
3. *Conclusion.* $v(x,y) = 3x^2y - y^3 - 2x + c$, and by part 2 of the statement (the partials here are polynomials, hence continuous) $f = u + iv$ is entire.
4. *Identify $f$.* Taking $c = 0$ and comparing with $z^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$ and $-2iz = 2y - 2ix$, we get $f(z) = z^3 - 2iz$. Check at $z = 2+i$: the formula gives $(2+i)^3 - 2i(2+i) = (2 + 11i) + (2 - 4i) = 4 + 7i$, while $u(2,1) = 8 - 6 + 2 = 4$ and $v(2,1) = 12 - 1 - 4 = 7$. They agree.
5. *Derivative two ways.* $f'(z) = 3z^2 - 2i$ gives $f'(2+i) = 3(3+4i) - 2i = 9 + 10i$; and $u_x + iv_x$ at $(2,1)$ is $(12 - 3) + i(12 - 2) = 9 + 10i$.
:::

:::example[Orthogonal level curves]{provenance=adapted src="arfken-2013:§11.2, Eqs. (11.14)–(11.15), pp. 473–474"}
Where $\nabla u \ne 0$, the Cauchy-Riemann equations make the level curves of $u$ and of $v$ meet at right angles, because

$$
\nabla u \cdot \nabla v = u_x v_x + u_y v_y = u_x(-u_y) + u_y(u_x) = 0 .
$$

Take $f(z) = z^2$, so $u = x^2 - y^2$ and $v = 2xy$. The curves $u = c$ are the rectangular hyperbolas $x^2 - y^2 = c$ and the curves $v = d$ are $xy = d/2$. At the point $z_0 = 2+i$ we have $u = 3$, $v = 4$, and the gradients are $\nabla u = (2x, -2y) = (4,-2)$ and $\nabla v = (2y, 2x) = (2,4)$: their dot product is $8 - 8 = 0$, and the tangent directions $(2,4)/\sqrt{20}$ and $(4,-2)/\sqrt{20}$ are perpendicular unit vectors. The orthogonality fails exactly where $f'(z) = 2z$ vanishes, that is at the origin, where the two hyperbola families degenerate into the pairs of lines $y = \pm x$ and $xy = 0$ crossing at $45^{\circ}$ instead of $90^{\circ}$.
:::

:::application{provenance=original}
Part 3 is the bridge between complex analysis and two-dimensional field theory. Any analytic $f = u + iv$ on a plane region supplies, for free, a pair of solutions of Laplace's equation whose level sets are mutually orthogonal, so $f$ can be read as a **complex potential**: in electrostatics the curves $u = \text{const}$ are equipotentials and $v = \text{const}$ are field lines; in ideal fluid flow $u$ is the velocity potential and $v$ the stream function, and $\overline{f'(z)}$ is the velocity field. Problems that are awkward in real variables — the field near an edge, flow past a cylinder, the capacitance of an odd-shaped pair of conductors — become a search for the right analytic function, which is the subject of :ref[conformal mapping]{to=complex.conformal-mappings} and connects to :ref[harmonic functions]{to=pde.harmonic-functions}.

Read the other way, the equations are a tight constraint and so a strong tool. In dispersion theory a response function is analytic in a half-plane because of causality; the Cauchy-Riemann equations then tie its real part (dispersion) to its imaginary part (absorption) point by point, which is the local form of the Kramers-Kronig relations (:ref[dispersion relations]{to=complex.dispersion-relations}). In elasticity, the Airy stress function and its conjugate play the same role, and in aerodynamics the Joukowski aerofoil is literally the image of a circle under an analytic map.
:::
