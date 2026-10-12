---
id: pde.first-order-characteristics
title: First-order equations and characteristics
kind: method
level: core
summary: Turns a first-order quasilinear equation with data on a curve into a system of ordinary differential equations along characteristics, gives the recipe and the non-characteristic condition under which it determines a unique local solution, proves it, and works out the transport equation and three further examples.
prereqs: [ode.existence-uniqueness, found.implicit-inverse-function, found.partial-derivatives-chain-rule]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§2.1, pp. 18–19 (the transport equation, homogeneous and with a source); §3.2.1, p. 94 (the standing hypothesis that $F$ and $g$ are smooth) and §3.2.2a–b, pp. 96–98 (the characteristic ODE in the linear and quasilinear cases, Eqs. (17), (20) and (21)); §3.2.3c, p. 101 and §3.2.4, Lemma 2 and Thm 2, pp. 102–105 (the non-characteristic condition, local invertibility and the local existence theorem, whose solution is $C^2$); §3.2.5a–b, Eqs. (50), (54)–(55) and Example 4, pp. 105–108 (the non-characteristic condition for linear and quasilinear equations, the uniqueness clause for the quasilinear problem, and the global obstructions)"
    pages: "18-19, 94, 96-98, 101-108"
    role: the quasilinear form of the equation; the characteristic ODE system, the non-characteristic condition, the smoothness hypothesis and the statement and route of the local existence theorem; the transport-equation formulas; the warning that projected characteristics may cross
  - work: stakgold-holst-2011
    loc: "§8.1, Definition (characteristic surface) and Corollaries 8.1.1–8.1.2, pp. 462; the first-order discussion with Eqs. (8.1.7)–(8.1.12), pp. 462–465, including Eq. (8.1.8) with its linear and semilinear cases on p. 463, the determinant condition (8.1.9), the characteristic equation (8.1.10), the existence-uniqueness statement in the characteristic \"strip\" on p. 464 and the absorptive transport example (8.1.11)–(8.1.12), pp. 464–465"
    pages: "462-465"
    role: characteristic curve defined by the failure of the data to determine the derivatives; the determinant condition; the statement about the characteristic strip and the propagation of discontinuities
  - work: hassani-2013
    loc: "Definition 21.1.2 and Box 21.1.4, p. 638; Example 21.1.5, pp. 638–639, where the two-by-two determinant gives $b\\,dx - a\\,dy = 0$ and hence $dy/dx = b/a$"
    pages: "638-639"
    role: the same determinant derivation of the characteristic direction, and the statement that the Cauchy problem has no solution at a point of a characteristic
  - work: arfken-2013
    loc: "§9.2, Eqs. (9.1)–(9.9) and the four numbered conclusions on p. 406, pp. 404–407, with Example 9.2.1, p. 407"
    pages: "404-407"
    role: what goes wrong when the data curve is a characteristic or meets one twice; the change of variables that turns the equation into an ODE along the characteristic
---

:::definition[Quasilinear first-order equations and their characteristics]{provenance=adapted src="evans-2010:§3.2.2b, Eq. (20), p. 97, and §3.2.5b, Eq. (54), p. 107 (the quasilinear form); stakgold-holst-2011:§8.1, Eq. (8.1.8) with the linear and semilinear cases, p. 463, and Eqs. (8.1.9)–(8.1.10), p. 464 (the determinant condition)"}
A first-order equation in two independent variables is **quasilinear** if it can be written

$$
a(x,y,u)\,u_x + b(x,y,u)\,u_y = c(x,y,u) ,
\tag{1}
$$

so that the derivatives of $u$ appear linearly but their coefficients may involve $u$. This generality is Evans's: his Eq. (20) is exactly the case in which $u$ may enter the coefficient of every derivative. Stakgold and Holst's first-order equation (8.1.8) is the narrower $a(x,y)u_x + b(x,y)u_y + c(x,y,u) = 0$, in which $a$ and $b$ do not depend on $u$ at all; the two narrower cases named next are theirs. Equation (1) is **semilinear** if $a$ and $b$ do not depend on $u$ but $c$ does, and **linear** if in addition $c = -q(x,y)u + F(x,y)$.

In $n$ variables Evans writes the quasilinear equation with its source term on the left,

$$
\mathbf{b}(x,u)\cdot Du + c(x,u) = 0 , \qquad x \in \mathbb{R}^n ,
$$

where $\mathbf{b}$ is the whole coefficient vector of the gradient — not the scalar $b$ of (1) — and consequently his $c$ is the negative of the right-hand side of (1).

The **characteristic equations** of (1) are the ordinary differential equations

$$
\frac{dx}{ds} = a(x,y,z), \qquad \frac{dy}{ds} = b(x,y,z), \qquad \frac{dz}{ds} = c(x,y,z) ,
\tag{2}
$$

for three unknown functions $x(s), y(s), z(s)$. A solution of (2) is a **characteristic strip** — a curve in $(x,y,z)$-space, carrying both a point of the plane and the value of $u$ there. Its shadow $s \mapsto (x(s), y(s))$ in the plane of the independent variables is a **projected characteristic**, or simply a **characteristic curve** of (1). (Stakgold and Holst use the word *strip* for a different object, a region of the plane, and put it in quotation marks; the statement below records that usage. Bolded, the term always means the solution of (2).) The whole point of (2) is that the third equation closes the system: no derivative of $u$ appears in it, so the three functions can be computed without knowing $u$ anywhere else.

A smooth curve $\Gamma$ in the $x$–$y$ plane carrying the data $u = g$ is called **characteristic at a point** $P \in \Gamma$ if $u_x$ and $u_y$ cannot be computed at $P$ from the data on $\Gamma$ together with equation (1). Writing $(dx, dy)$ for a tangent direction of $\Gamma$ at $P$, differentiating $u$ along $\Gamma$ gives $u_x\,dx + u_y\,dy = du$, with $du$ known; equation (1) gives $a u_x + b u_y = c$, with $c$ known once $u(P)$ is. These two linear equations for $(u_x, u_y)$ are solvable precisely when

$$
\begin{vmatrix} dx & dy \\ a & b \end{vmatrix} = b\,dx - a\,dy \ne 0 ,
\tag{3}
$$

so $\Gamma$ is characteristic at $P$ exactly when $b\,dx - a\,dy = 0$ there, that is, when the vector $(a,b)$ evaluated at $P$ is tangent to $\Gamma$. Where $a \ne 0$ this says the characteristic direction has slope $dy/dx = b/a$, which is (2) with $s$ eliminated. A curve on which (3) holds at every point is called **non-characteristic**.
:::

:::method[Solving a quasilinear first-order equation by characteristics]{provenance=adapted src="evans-2010:§3.2.2b and §3.2.4, pp. 97–98 and 102–105; arfken-2013:§9.2, Eqs. (9.8)–(9.9), pp. 406–407"}
Given equation (1) and data $u = g$ on a curve $\Gamma$:

1. **Parametrise the data.** Write $\Gamma$ as $\bigl(f(\tau), h(\tau)\bigr)$ with $f, h \in C^1$ and $(f', h') \ne (0,0)$, and let $g(\tau)$ be the prescribed value of $u$ at the parameter $\tau$.
2. **Check that $\Gamma$ is non-characteristic.** Verify

   $$
   J(\tau) \;=\; a\bigl(f, h, g\bigr)\,h'(\tau) - b\bigl(f, h, g\bigr)\,f'(\tau) \;\ne\; 0 ,
   $$

   which is condition (3) with $(dx, dy) = (f', h')$, up to sign. If $J$ vanishes at a point, stop: the method gives nothing there.
3. **Solve the characteristic equations.** Integrate (2) in $s$ for each fixed $\tau$, with initial conditions

   $$
   x(0,\tau) = f(\tau), \qquad y(0,\tau) = h(\tau), \qquad z(0,\tau) = g(\tau) .
   $$

   For a linear or semilinear equation the first two equations decouple from the third and are solved first; for a genuinely quasilinear equation all three must be solved together.
4. **Invert the change of variables.** Solve $x = x(s,\tau)$, $y = y(s,\tau)$ for $s = s(x,y)$ and $\tau = \tau(x,y)$. Step 2 guarantees this is possible near $\Gamma$.
5. **Read off the solution.** Set

   $$
   u(x,y) = z\bigl(s(x,y), \tau(x,y)\bigr) .
   $$

6. **Say where it holds.** The formula is valid on the region swept out by the characteristics on which step 4 succeeded. Check the extent of that region: in the quasilinear case characteristics may cross, and the formula fails there even though every step above was legitimate.

A useful shortcut for linear equations with constant $a, b$: changing to the variables $s' = ax + by$ and $t' = bx - ay$ converts (1) into $(a^2+b^2)\,\partial u/\partial s' + \dots = 0$, an ordinary differential equation in $s'$ with $t'$ as a parameter, which is steps 3 to 5 carried out in one move.
:::

:::statement[Local existence and uniqueness]{provenance=adapted src="evans-2010:§3.2.1, p. 94 (the smoothness hypothesis), §3.2.4, Lemma 2 and Thm 2, pp. 102–105, and §3.2.5b, pp. 107–108; stakgold-holst-2011:§8.1, p. 464"}
Evans fixes a standing hypothesis at the start of his treatment of characteristics: the equation and the data are **smooth**. In the notation of (1) that means $a, b, c$ smooth functions of $(x,y,z)$ on an open set, $\Gamma$ a smooth curve $\tau \mapsto (f(\tau), h(\tau))$, and $g$ smooth. Suppose that at $\tau = \tau_0$

$$
a\,h'(\tau_0) - b\,f'(\tau_0) \ne 0, \qquad a, b \text{ evaluated at } \bigl(f(\tau_0), h(\tau_0), g(\tau_0)\bigr) .
$$

This is Evans's non-characteristic condition $\mathbf{b}(x^0, z_0)\cdot\boldsymbol{\nu}(x^0) \ne 0$, with $z_0 = g(\tau_0)$ and $\boldsymbol{\nu}$ his outward unit normal to $\partial U$ at the data point, written out for a parametrised plane curve: the tangent of $\Gamma$ there is $(f', h')$, so a normal is $(h', -f')$ and $(a,b)\cdot(h',-f') = a h' - b f'$. Then there is a neighbourhood $V$ of the point $P_0 = (f(\tau_0), h(\tau_0))$ in which the problem

$$
a(x,y,u)u_x + b(x,y,u)u_y = c(x,y,u), \qquad u = g \text{ on } \Gamma ,
$$

has exactly one solution; that solution is $C^2$, and it is the function produced by steps 3 to 5 of the method. The regularity of the solution is the conclusion of Evans's Theorem 2, and the uniqueness clause is his specialisation of that theorem to the quasilinear case.

The proof below is Evans's route run for the three-equation system (2) alone, which is all the quasilinear case needs, and it uses less than his hypothesis: $C^1$ coefficients, a $C^1$ curve and $C^1$ data are enough for every step, and what they yield is a solution of class $C^1$, unique among $C^1$ solutions on $V$. The $C^2$ conclusion stated above is the one Evans proves, under his smoothness hypothesis.

For a **linear** equation the hypothesis simplifies, because $a$ and $b$ do not depend on $z$: the condition is that the vector field $(a,b)$ is nowhere tangent to $\Gamma$, and it involves neither the data $g$ nor the derivatives of $u$. In that case Stakgold and Holst state, for the linear version of their first-order equation and without proof, a stronger conclusion: when $\Gamma$ is nowhere characteristic, a unique solution exists on the whole characteristic "strip" — their word, in quotation marks, for the region of the plane that the two characteristics through the ends of $\Gamma$ fence off between them — and not merely near one point, and it depends continuously on the data there. They add that a jump in the prescribed values of $u$ at a point of $\Gamma$ travels along the characteristic through that point, so that the solution is then a weak one in the sense of distributions.
:::

:::idea{provenance=original}
Equation (1) says that one particular directional derivative of $u$, in the direction $(a,b)$, equals $c$. So along a curve whose tangent is that direction, $u$ satisfies an ordinary differential equation. The three equations (2) are exactly that curve and that ordinary differential equation written together, and they close because the direction depends only on $x, y$ and the value of $u$, never on its derivatives. Two things then have to be checked. First, that the characteristics issuing from $\Gamma$ fill out a neighbourhood without overlapping, which is the inverse function theorem applied to $(s,\tau) \mapsto (x,y)$, and whose Jacobian determinant is precisely the non-characteristic quantity. Second, that the function so assembled really solves the equation: one line of the chain rule gives this, because $\partial z/\partial s$ is both $c$ and the directional derivative $a u_x + b u_y$.
:::

:::proof{provenance=adapted src="evans-2010:§3.2.4, Lemma 2 and Thm 2, pp. 102–105"}
**Step 1 (the characteristic strips exist and are smooth in both variables).** The right-hand sides of (2) are $C^1$, hence locally Lipschitz in $(x,y,z)$, so by :ref[the existence and uniqueness theorem for ordinary differential equations]{to=ode.existence-uniqueness} there is, for each $\tau$ near $\tau_0$, a unique solution $s \mapsto \bigl(x(s,\tau), y(s,\tau), z(s,\tau)\bigr)$ of (2) with the initial values of step 3 of the method, defined for $|s| < s_0$ with $s_0 > 0$ independent of $\tau$ on a small enough $\tau$-interval. Because the initial data $f, h, g$ are $C^1$ in $\tau$ and the right-hand sides are $C^1$, the solution depends $C^1$ on $\tau$ as well.

**Step 2 (the map $(s,\tau) \mapsto (x,y)$ is locally invertible).** At $s = 0$ we have $x(0,\tau) = f(\tau)$ and $y(0,\tau) = h(\tau)$, so $x_\tau = f'$, $y_\tau = h'$ there, while (2) gives $x_s = a$, $y_s = b$ evaluated on the data. Hence

$$
\det \frac{\partial(x,y)}{\partial(s,\tau)}\bigg|_{(0,\tau_0)}
= x_s y_\tau - x_\tau y_s
= a\,h'(\tau_0) - b\,f'(\tau_0) ,
$$

which is nonzero by the non-characteristic hypothesis. By :ref[the inverse function theorem]{to=found.implicit-inverse-function} there are a neighbourhood $W$ of $(0,\tau_0)$ and a neighbourhood $V$ of $P_0$ such that $(s,\tau) \mapsto (x,y)$ is a $C^1$ bijection of $W$ onto $V$ with $C^1$ inverse $(x,y) \mapsto (s(x,y), \tau(x,y))$.

**Step 3 (the assembled function solves the equation).** Define $u(x,y) = z(s(x,y),\tau(x,y))$ on $V$; it is $C^1$ as a composition of $C^1$ maps. Fix $(s,\tau) \in W$ and differentiate the identity $z(s,\tau) = u\bigl(x(s,\tau), y(s,\tau)\bigr)$ with respect to $s$. By the chain rule and then by (2),

$$
\frac{\partial z}{\partial s} = u_x\,\frac{\partial x}{\partial s} + u_y\,\frac{\partial y}{\partial s} = a\,u_x + b\,u_y ,
$$

all three functions $a, b$ and the derivatives being evaluated at the point $(x(s,\tau), y(s,\tau))$ with $z = u$ there. But the third equation of (2) says $\partial z/\partial s = c$. Hence $a u_x + b u_y = c$ at every point of $V$, which is (1). Putting $s = 0$ gives $u(f(\tau), h(\tau)) = z(0,\tau) = g(\tau)$, so the data are matched.

**Step 4 (uniqueness).** Let $\tilde u$ be any $C^1$ solution on $V$ with $\tilde u = g$ on $\Gamma$. Fix $\tau$ and solve the ordinary differential equations

$$
\frac{d\tilde x}{ds} = a\bigl(\tilde x, \tilde y, \tilde u(\tilde x, \tilde y)\bigr), \qquad
\frac{d\tilde y}{ds} = b\bigl(\tilde x, \tilde y, \tilde u(\tilde x, \tilde y)\bigr),
$$

with $\tilde x(0) = f(\tau)$, $\tilde y(0) = h(\tau)$; the right-hand sides are $C^1$ in $(\tilde x, \tilde y)$ because $a, b$ and $\tilde u$ are, so a unique solution exists for small $|s|$. Put $\tilde z(s) = \tilde u(\tilde x(s), \tilde y(s))$. By the chain rule and then because $\tilde u$ satisfies (1),

$$
\frac{d\tilde z}{ds} = a\,\tilde u_x + b\,\tilde u_y = c\bigl(\tilde x, \tilde y, \tilde z\bigr) .
$$

So $(\tilde x, \tilde y, \tilde z)$ solves the system (2) with the same initial values as $(x(\cdot,\tau), y(\cdot,\tau), z(\cdot,\tau))$. The right-hand sides of (2) are locally Lipschitz, so the two solutions coincide. In particular $\tilde u(x(s,\tau), y(s,\tau)) = z(s,\tau) = u(x(s,\tau),y(s,\tau))$, and since by Step 2 these points fill $V$, $\tilde u = u$ on $V$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *The non-characteristic condition* is used only in Step 2, and nowhere else; it is exactly what makes the Jacobian nonzero. If it fails at $\tau_0$, the characteristic through that point of $\Gamma$ is tangent to $\Gamma$, the map $(s,\tau) \mapsto (x,y)$ is singular, and no neighbourhood of $P_0$ is swept out. Arfken draws the three consequences explicitly: data on a curve that *is* a characteristic are either inconsistent with the equation or merely redundant, and in neither case do they determine $u$ off that curve; a data curve meeting the same characteristic twice generally over-determines the problem, so no solution exists; and only a non-characteristic curve lets a boundary condition reach points off it.
- *Smoothness of the coefficients.* Evans assumes it throughout, and he needs it for his $C^2$ conclusion. The proof above needs only that $a, b, c$ are $C^1$, and it uses that twice, both times to get local Lipschitz continuity so that the ordinary differential equations have unique solutions — in Step 1 for existence and in Step 4 for uniqueness. Continuity alone would give existence but not uniqueness, and then the construction would not single out a solution.
- *The conclusion is local.* This is not laziness. For a linear equation the characteristics are fixed curves, determined by $(a,b)$ alone, and the solution extends along each of them as far as they go, which is Stakgold and Holst's characteristic "strip"; the obstruction is then geometric, arising where the vector field $(a,b)$ has a zero inside the region or where a characteristic re-enters through the data curve. For a genuinely quasilinear equation the characteristics depend on the data through $z$, and projected characteristics starting at different points of $\Gamma$ can intersect at a finite distance. Where two of them carrying different values of $u$ meet, no single-valued $C^1$ solution can exist: the derivatives of $u$ blow up as that time is approached, and the solution must be continued in a weaker sense (see :ref[conservation laws and shocks]{to=pde.conservation-laws-shocks}).
- *No smoothness of the data is needed for the formula.* Steps 3 to 5 produce a function whenever $g$ is merely continuous, or even discontinuous, and it is the only sensible candidate; it is then a weak, not a classical, solution. Stakgold and Holst record that a jump in $g$ at a point of $\Gamma$ travels along the characteristic through that point and nowhere else.
:::

:::example[The transport equation]{provenance=adapted src="evans-2010:§2.1, Eqs. (2)–(5), pp. 18–19"}
Let $b \in \mathbb{R}^n$ be a constant vector and solve

$$
u_t + b\cdot Du = f \ \text{ in } \mathbb{R}^n\times(0,\infty), \qquad u = g \ \text{ on } \mathbb{R}^n\times\{t=0\} ,
$$

where $Du$ is the gradient in $x$ alone. In the notation of (1), with $(x,t)$ in place of $(x,y)$, the coefficient vector of the derivatives is $(b, 1) \in \mathbb{R}^{n+1}$ and the right-hand side is $f$.

1. *Data curve and the non-characteristic check.* The data surface is $\Gamma = \{t = 0\}$, with unit normal $(0,\dots,0,1)$. The coefficient vector has last component $1$, so $(b,1)\cdot(0,1) = 1 \ne 0$ everywhere on $\Gamma$: the condition of step 2 holds for every $b$ and every point, which is why the initial-value problem for transport is always solvable.
2. *Characteristics.* The characteristic equations are $\dot x = b$, $\dot t = 1$, $\dot z = f$. The first two give $t = s$ and $x = x^0 + sb$, so we may use $t$ as the parameter: the projected characteristics are the straight lines through $(x^0, 0)$ with direction $(b,1)$.
3. *The equation along a characteristic.* On the line through $(x,t)$ put $\zeta(s) = u(x + (s-t)b,\ s)$, which traces the values of $u$ along that line and equals $u(x,t)$ at $s = t$ and $g(x - tb)$ at $s = 0$. By the chain rule $\zeta'(s) = u_t + b\cdot Du$ evaluated on the line, which is $f(x + (s-t)b,\ s)$.
4. *Integrate.* Integrating $\zeta'$ from $0$ to $t$,

   $$
   u(x,t) = g(x - tb) + \int_0^t f\bigl(x + (s-t)b,\ s\bigr)\,ds .
   $$

   For $f \equiv 0$ this is $u(x,t) = g(x - tb)$: the initial profile is carried rigidly at velocity $b$, unchanged in shape.
5. *A number.* Take $n = 2$, $b = (3,-1)$, $f \equiv 0$ and $g(x) = e^{-|x|^2}$. Then $u(x,t) = e^{-|x - tb|^2}$, and at $x = (1,2)$, $t = 1$ we get $x - b = (-2, 3)$, so $u = e^{-13} = 2.2603 \times 10^{-6}$, while $u$ at the same point at $t = 0$ is $e^{-5} = 6.7379\times 10^{-3}$: the pulse has moved away.
6. *Regularity.* The formula with $f \equiv 0$ defines a function for any $g$ whatever. It is a classical solution exactly when $g \in C^1$; for rougher $g$ it is the weak solution, and a jump in $g$ at $x^0$ travels along the line $x = x^0 + tb$.
:::

:::example{provenance=original}
**(a) A linear equation with absorption and a source.** Solve

$$
u_t + 2u_x + 3u = e^{-x}, \qquad u(x,0) = \cos x .
$$

1. *Form and check.* Here $(a,b) = (2,1)$ in the variables $(x,t)$, and $c = e^{-x} - 3u$. The data curve $t = 0$ has tangent $(1,0)$, so $J = 2\cdot 0 - 1\cdot 1 = -1 \ne 0$: non-characteristic everywhere.
2. *Characteristics.* $\dot x = 2$, $\dot t = 1$ give $t = s$, $x = x_0 + 2t$, so the projected characteristics are the lines $x - 2t = x_0$.
3. *The ordinary differential equation along a characteristic.* With $z(t) = u(x_0 + 2t, t)$,

   $$
   \frac{dz}{dt} = u_t + 2u_x = e^{-x} - 3u = e^{-x_0 - 2t} - 3z, \qquad z(0) = \cos x_0 .
   $$

4. *Solve it.* Multiplying by the integrating factor $e^{3t}$ gives $(e^{3t}z)' = e^{t - x_0}$, so $e^{3t}z = \cos x_0 + e^{-x_0}(e^{t}-1)$ and

   $$
   z(t) = e^{-3t}\cos x_0 + e^{-x_0}\bigl(e^{-2t} - e^{-3t}\bigr) .
   $$

5. *Return to $(x,t)$.* Substituting $x_0 = x - 2t$ and simplifying $e^{-(x-2t)}(e^{-2t}-e^{-3t}) = e^{-x}(1 - e^{-t})$,

   $$
   u(x,t) = e^{-3t}\cos(x - 2t) + e^{-x}\bigl(1 - e^{-t}\bigr) .
   $$

6. *Check.* $u(x,0) = \cos x$, and substituting into the equation gives $u_t + 2u_x + 3u = e^{-x}$ identically. As $t \to \infty$ the transient $e^{-3t}\cos(x-2t)$ dies and $u \to e^{-x}$, the steady state of $2u_x + 3u = e^{-x}$. At $x = 1$, $t = \tfrac12$ the two terms are $e^{-3/2}\cos 0 = e^{-3/2}$ and $e^{-1}(1 - e^{-1/2}) = e^{-1} - e^{-3/2}$, which cancel to give exactly $u(1,\tfrac12) = e^{-1} = 0.3678794$.

**(b) A genuinely quasilinear equation.** Solve $u_t + u\,u_x = 0$ with $u(x,0) = 1 + x$.

1. *Characteristics.* $\dot t = 1$, $\dot x = z$, $\dot z = 0$. So $z \equiv 1 + x_0$ is constant along each characteristic, and then $x = x_0 + (1+x_0)t$. The non-characteristic quantity on $t = 0$ is again $1 \ne 0$.
2. *Invert.* From $x = x_0(1+t) + t$ we get $x_0 = (x-t)/(1+t)$, which is legitimate for $t > -1$.
3. *Solution.* $u = 1 + x_0 = \dfrac{1+x}{1+t}$. Substituting back, $u_t = -(1+x)/(1+t)^2$ and $u\,u_x = (1+x)/(1+t)^2$, so the equation holds, and $u(x,0) = 1+x$.
4. *Where it holds, and why.* The characteristics are lines of slope $dx/dt = 1 + x_0$, which *increases* with $x_0$: they fan out for $t > 0$ and never meet, so the formula is valid for all $t > 0$ and the solution flattens like $1/(1+t)$. Extended backwards they converge, and all of them pass through $(x,t) = (-1,-1)$; the solution indeed blows up as $t \to -1^+$. Had the initial data been decreasing instead, the characteristics would have crossed at a positive time and the classical solution would have ceased to exist there.

**(c) Data on a characteristic.** For $2u_x + 3u_y = 0$ the characteristics are the lines $3x - 2y = \text{const}$. Prescribing $u$ on the line $\Gamma = \{3x = 2y\}$, parametrised by $(2\tau, 3\tau)$, gives $J = a h' - b f' = 2\cdot 3 - 3\cdot 2 = 0$: the data curve is characteristic at every point. The equation forces $u$ to be constant along $\Gamma$, so prescribing $u = \tau$ there admits no solution at all, while prescribing the constant $u = 5$ admits infinitely many, namely $u = F(3x-2y)$ for every $C^1$ function $F$ with $F(0) = 5$. The two failure modes — no existence and no uniqueness — appear in the same example, depending only on the data.
:::

:::application{provenance=original}
The transport equation is the advection step of every atmosphere and ocean model. A tracer — water vapour, ozone, a pollutant, a dye — of concentration $u$ carried by a prescribed wind field $\mathbf{v}(x,t)$ satisfies $u_t + \mathbf{v}\cdot Du = S$, with $S$ the sources and sinks; its characteristics are the trajectories of air parcels, and solving along them is what "Lagrangian" and "semi-Lagrangian" advection schemes do literally: to find $u$ at a grid point at the new time level, they trace the characteristic backwards to the previous level and interpolate there. The method also explains the Courant condition for an explicit grid-based scheme, which says that the numerical domain of dependence of a grid point must contain the characteristic through it; violating it means computing a value from data that the exact solution does not depend on, and the result is unstable (see :ref[von Neumann stability analysis]{to=num.von-neumann-stability}).

Elsewhere, the eikonal picture of geometrical optics and the ray equations of seismology are characteristic systems of first-order equations; the Hamilton-Jacobi equation of mechanics is one too, with the characteristics being the trajectories in phase space (see :ref[the Hamilton-Jacobi equation]{to=var.hamilton-jacobi}). In traffic and in gas dynamics the quasilinear case is the physical one, and part (b) of the example is the whole story in miniature: where characteristics spread, a smooth solution persists and flattens; where they converge, the gradient steepens without bound and a shock forms.
:::
