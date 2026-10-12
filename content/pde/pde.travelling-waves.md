---
id: pde.travelling-waves
title: Travelling-wave solutions
kind: method
level: core
summary: Reduces a partial differential equation to an ordinary differential equation for a profile moving at constant speed, shows when the speed is free and when it is selected by the equation, derives the Korteweg-de Vries soliton and an explicit bistable reaction-diffusion front, and states the existence theorem for such fronts.
prereqs: [pde.first-order-characteristics, dyn.flows-on-the-line, dyn.linearization]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§4.2.1, pp. 167–175: the definitions of travelling wave and plane wave, Eqs. (1)–(2), p. 167; the exponential plane-wave solutions and the dispersion relations for the heat, wave, Klein-Gordon, Schrödinger and Airy equations, pp. 167–168, with phase and group velocity, p. 169; the KdV soliton, Eqs. (4)–(11), pp. 169–170; the bistable reaction-diffusion equation, hypotheses (13), the reduced equation (15)–(16), the phase-plane system (17)–(18), the eigenvalues (19)–(20), the energy function $E$ and the claims (22)–(26), pp. 170–175"
    pages: "167-175"
    role: the travelling-wave and plane-wave definitions; the dispersion-relation computations; the soliton derivation; the existence statement for the bistable front and the route of its phase-plane argument
  - work: strauss-2008
    loc: "§14.2, pp. 390–391: the KdV equation in the form $u_t+u_{xxx}+6uu_x=0$, its three invariants, the reduction $-cf'+f'''+6ff'=0$ and its two integrations, the solitary-wave conditions, the solution (3) $f=\\tfrac12 c\\,\\mathrm{sech}^2(\\tfrac12\\sqrt{c}(x-x_0))$, the amplitude-speed relation and the stability discovered numerically by Kruskal and Zabusky"
    pages: "390-391"
    role: the same soliton with an independent derivation and the physical reading of the amplitude-speed relation; the historical observation of a solitary wave
  - work: arfken-2013
    loc: "§9.3, Eqs. (9.23)–(9.28), pp. 413–414: the nonlinear wave equation with wave-dependent speed, the KdV equation in the normalisation $\\psi_t+\\psi\\psi_x+\\psi_{xxx}=0$, the two integrations with the decay conditions, and the soliton $\\psi=3c/\\cosh^2(\\tfrac12\\sqrt{c}(x-ct))$"
    pages: "413-414"
    role: the KdV soliton in a third normalisation, used here to show how the formula depends on the convention
  - work: stein-shakarchi-2003
    loc: "Ch. 1, §1.1, pp. 9–10: $F(x\\pm t)$ as waves travelling left and right at unit speed for $u_{tt}=u_{xx}$, and the change of variables $\\xi=x+t$, $\\eta=x-t$ showing that every twice-differentiable solution is a sum of two such waves"
    pages: "9-10"
    role: the linear wave equation as the simplest case, where every speed is admissible and every profile is
---

:::definition[Travelling wave, plane wave, profile, speed]{provenance=adapted src="evans-2010:§4.2.1, Eqs. (1)–(3), p. 167; stein-shakarchi-2003:Ch. 1, §1.1, p. 9"}
Let an equation be posed for $u(x,t)$ with $x \in \mathbb{R}$. A solution of the form

$$
u(x,t) = v(x - \sigma t) \qquad (x \in \mathbb{R},\ t \in \mathbb{R})
\tag{1}
$$

is a **travelling wave** with **speed** $\sigma$ and **profile** $v$. Its graph at any time is the graph of $v$ translated by $\sigma t$: the shape never changes, only its position. With $x \in \mathbb{R}^n$, a solution

$$
u(x,t) = v(y\cdot x - \sigma t) , \qquad y \in \mathbb{R}^n\setminus\{0\} ,
\tag{2}
$$

is a **plane wave**, with wavefronts the hyperplanes normal to $y$ and speed $\sigma/|y|$ in the direction $y/|y|$. A travelling wave which decays at both ends, $v \to 0$ as $s \to \pm\infty$, is a **solitary wave**; one which connects two distinct constant states, $v(-\infty) \ne v(+\infty)$, is a **front** (or a kink). For a linear equation with constant coefficients it is convenient to allow complex-valued plane waves

$$
u(x,t) = e^{i(y\cdot x - \sigma t)} ,
$$

with $y$ the wave numbers and $\sigma$ the time frequency; substituting into the equation forces a relation $\sigma = \sigma(y)$, the **dispersion relation**. Then $\sigma(y)/|y|$ is the **phase velocity**, the speed at which this single plane wave moves, and $D\sigma(y)$ is the **group velocity**, which is the speed at which a superposition $\int e^{i(y\cdot x-\sigma(y)t)}a(y)\,dy$ transports its energy: by stationary phase the main contribution at large $t$ with $x/t$ fixed comes from the wave numbers with $D\sigma(y) = x/t$.

The simplest case is the linear wave equation $u_{tt} = u_{xx}$: as Stein and Shakarchi observe, $F(x-t)$ and $F(x+t)$ solve it for *every* twice-differentiable $F$, so both speeds $\pm1$ occur and every profile is admissible; and the change of variables $\xi = x+t$, $\eta = x-t$ turns the equation into $v_{\xi\eta} = 0$, whose double integration shows that every twice-differentiable solution is a sum $F(x+t) + G(x-t)$ of two such waves. The interesting questions arise when the equation restricts the profile, the speed, or both.
:::

:::method[The travelling-wave ansatz]{provenance=adapted src="evans-2010:§4.2.1, pp. 169–171"}
1. **Substitute.** Put $u = v(s)$ with $s = x - \sigma t$ into the equation. Since $\partial_t u = -\sigma v'$ and $\partial_x^k u = v^{(k)}$, every term becomes a term in $v$ and its derivatives: the result is an ordinary differential equation for $v$, of the same order as the highest $x$-derivative, containing $\sigma$ as a parameter.
2. **Impose the conditions at infinity.** A solitary wave asks $v, v', v'' \to 0$ as $s \to \pm\infty$; a front asks $v \to v_\pm$ as $s \to \pm\infty$ with $v' \to 0$, where $v_\pm$ must be zeros of the reaction term, since they are constant solutions of the equation.
3. **Reduce the order.** Look for first integrals. A term $v^{(k)}$ integrates once immediately; a factor $v'$ makes the whole equation an exact derivative. For second-order autonomous problems, multiplying by $v'$ and integrating produces an energy relation of the form $\tfrac12(v')^2 + W(v) = \text{const}$.
4. **Use the conditions at infinity to kill the constants.** This is where the ansatz earns its keep: each decay condition fixes one constant of integration, usually to zero, and what remains is a first-order separable equation.
5. **Decide the status of $\sigma$.** Three outcomes occur, and they are not a matter of technique but of the equation:
   - $\sigma$ is **free**: a travelling wave exists for every $\sigma$ in some range (the linear wave equation; the Korteweg-de Vries soliton);
   - $\sigma$ is **selected**: exactly one value admits a solution with the required behaviour at $\pm\infty$ (the bistable front below);
   - no travelling wave exists at all for the required boundary behaviour.

   In the selected case the mechanism is a counting argument in the phase plane: the orbit leaving one equilibrium and the orbit entering the other each form a one-parameter family in $\sigma$, and they coincide only for special $\sigma$.
6. **Verify, and read off the physics.** Substitute back. Then extract what the answer says: the relation between amplitude and speed, the width of the front, and the direction of travel (the sign of $\sigma$ says which state advances).
:::

:::statement[Existence of a front for a bistable nonlinearity]{provenance=adapted src="evans-2010:§4.2.1c, hypotheses (13) and the conclusion at Eq. (26), pp. 170–175"}
Consider the scalar reaction-diffusion equation

$$
u_t - u_{xx} = f(u) \qquad\text{in } \mathbb{R}\times(0,\infty) ,
\tag{3}
$$

and suppose $f : \mathbb{R}\to\mathbb{R}$ is smooth and, for some $a$ with $0 < a < 1$, satisfies

$$
\text{(a) } f(0)=f(a)=f(1)=0; \quad
\text{(b) } f<0 \text{ on } (0,a),\ f>0 \text{ on } (a,1); \quad
\text{(c) } f'(0)<0,\ f'(1)<0; \quad
\text{(d) } \int_0^1 f(z)\,dz>0 .
\tag{4}
$$

Then there is a speed $\sigma < 0$ and a profile $v$ for which $u(x,t) = v(x-\sigma t)$ solves (3) with

$$
\lim_{s\to+\infty}v(s) = 1, \qquad \lim_{s\to-\infty}v(s) = 0, \qquad \lim_{s\to\pm\infty}v'(s) = 0 .
\tag{5}
$$

Evans adds that a more refined analysis, which he does not give, shows that this $\sigma$ is unique: for a nonlinearity satisfying (4) there is exactly one speed at which such a front exists. Contrast this with the soliton below, which exists for a whole half-line of speeds.
:::

:::idea{provenance=original}
The ansatz turns (3) into the second-order equation $v'' + \sigma v' + f(v) = 0$, which is the equation of a particle in the potential $-\int f$ with friction coefficient $\sigma$. Written as a planar system it has saddle points at the two stable states $(0,0)$ and $(1,0)$, because hypothesis (4)(c) makes the linearisation at each have eigenvalues of opposite sign. A front is exactly an orbit running from one saddle to the other, and the saddles each emit or absorb a single orbit, so the two curves must be made to coincide. The parameter $\sigma$ is the friction, and the energy $\tfrac12 w^2 + \int_0^v f$ changes along orbits at the rate $-\sigma w^2$. With no friction the two curves miss each other in one direction, by hypothesis (4)(d); with enough friction they miss in the other; so somewhere in between they meet.
:::

:::proof{provenance=adapted src="evans-2010:§4.2.1c, Eqs. (14)–(26), pp. 170–175"}
Evans presents this argument as an outline, without complete proofs of the geometric claims about the invariant curves; the steps below follow his route, and the places where a claim is asserted rather than established are flagged in the note after the proof.

**Step 1 (the ansatz and the reduced equation).** Putting $u = v(x-\sigma t)$ in (3) gives $-\sigma v' - v'' = f(v)$, that is

$$
v'' + \sigma v' + f(v) = 0 ,
\tag{6}
$$

to be solved with the conditions (5). Note first why the limits must be $0$ and $1$ and not something else: a constant limit $v_\pm$ with $v'\to0$ forces $f(v_\pm) = 0$, so the limits are among $0, a, 1$; and (4)(c) with $f'(a)\ge0$ makes $0$ and $1$ the *stable* constant solutions of (3) and $a$ the unstable one, so a front interpolating between stable states must join $0$ to $1$.

**Step 2 (phase plane).** Set $w = v'$. Then (6) becomes the autonomous planar system

$$
v' = w, \qquad w' = -\sigma w - f(v) ,
\tag{7}
$$

and the conditions (5) become $(v,w)\to(1,0)$ as $s\to+\infty$ and $(v,w)\to(0,0)$ as $s\to-\infty$.

**Step 3 (both equilibria are saddles).** By (4)(a), $(0,0)$ and $(1,0)$ are the equilibria of (7) with $v \in \{0,1\}$. Linearising (7) at $(v_*,0)$ gives the matrix $\begin{pmatrix}0 & 1\\ -f'(v_*) & -\sigma\end{pmatrix}$, with characteristic equation $\lambda^2 + \sigma\lambda + f'(v_*) = 0$ and roots

$$
\lambda^{\pm} = \frac{-\sigma \pm \bigl(\sigma^2 - 4f'(v_*)\bigr)^{1/2}}{2} .
$$

By hypothesis (4)(c), $f'(v_*)<0$ at both $v_*=0$ and $v_*=1$, so the discriminant exceeds $\sigma^2 \ge 0$ and the roots are real, while their product $f'(v_*)$ is negative, so they have opposite signs. Hence both equilibria are saddle points (see :ref[linearisation]{to=dyn.linearization}). Consequently exactly one orbit leaves $(0,0)$ into the quadrant $\{v>0,w>0\}$ — call its closure the unstable curve $W^{\mathrm{u}}$, tangent at $(0,0)$ to the line $w = \lambda^+_0 v$ — and exactly one orbit enters $(1,0)$ from that quadrant — the stable curve $W^{\mathrm{s}}$, tangent at $(1,0)$ to $w = \lambda^-_1(v-1)$. Both curves and both eigenvalues depend on $\sigma$.

**Step 4 (what is to be shown).** A front exists precisely when, for some $\sigma$,

$$
W^{\mathrm{u}} = W^{\mathrm{s}} \quad\text{in } \{v>0,\ w>0\} ,
$$

for then that common orbit is a heteroclinic orbit from $(0,0)$ to $(1,0)$, and reading it as a graph $w = w(v)$ and integrating $v' = w$ recovers $v$.

**Step 5 (an energy that friction drives).** Define

$$
E(v,w) = \frac{w^2}{2} + \int_0^v f(z)\,dz .
$$

Along a solution of (7),

$$
\frac{d}{ds}E\bigl(v(s),w(s)\bigr) = w\,w' + f(v)\,v' = w\bigl(-\sigma w - f(v)\bigr) + f(v)\,w = -\sigma\,w^2 .
$$

So for $\sigma<0$, $E$ is non-decreasing along every orbit, and for $\sigma = 0$ it is constant, so the orbits lie in the level sets of $E$.

**Step 6 (both curves cross a fixed vertical line).** Fix a small $\varepsilon>0$ with $a+\varepsilon<1$ and let $L$ be the vertical segment above $(a+\varepsilon,0)$. Let $R$ be the region whose three straight sides are the segment of $w=0$, the segment of $v=0$, and $L$. Evans argues, for $\sigma<0$, that $W^{\mathrm{u}}$ enters $R$ from the origin and can leave it only across $L$, at some height $w_0(\sigma)$, and that $W^{\mathrm{s}}$ likewise reaches $L$, at some height $w_1(\sigma)$.

**Step 7 (at zero friction the stable curve is higher).** For $\sigma = 0$ each curve lies in a level set of $E$ by Step 5. On $W^{\mathrm{u}}$ that level is $E(0,0) = 0$, so at $v = a+\varepsilon$,

$$
\frac{w_0(0)^2}{2} = -\int_0^{a+\varepsilon} f , \qquad\text{hence}\qquad w_0(0) = \Bigl(-2\int_0^{a+\varepsilon} f\Bigr)^{1/2} ,
$$

which is a positive real number because $f<0$ on $(0,a)$ and $\varepsilon$ is small. On $W^{\mathrm{s}}$ the level is $E(1,0) = \int_0^1 f$, so

$$
w_1(0) = \Bigl(2\int_0^1 f - 2\int_0^{a+\varepsilon} f\Bigr)^{1/2} .
$$

Since $\int_0^1 f>0$ by hypothesis (4)(d), the quantity under the second root exceeds that under the first, and therefore

$$
w_0(0) < w_1(0) .
\tag{8}
$$

This is the only place (4)(d) is used, and it is what gives the front its direction.

**Step 8 (at large friction the unstable curve is higher).** Fix $\beta>0$ and consider the segment $T = \{0\le v\le a+\varepsilon,\ w = \beta v\}$. On $T$, dividing the two equations of (7),

$$
\frac{w'}{v'} = \frac{-\sigma w - f(v)}{w} = -\sigma - \frac{f(v)}{\beta v} .
$$

Because $f$ is smooth with $f(0)=0$, the ratio $|f(v)/v|$ is bounded by some $C$ on $0\le v\le a+\varepsilon$, so $w'/v' \ge -\sigma - C/\beta$, which exceeds $\beta$ once $\sigma<0$ with $|\sigma|$ large enough. The orbit therefore crosses $T$ more steeply than $T$ itself and cannot escape below it, so $W^{\mathrm{u}}$ stays above the line $w = \beta v$ until it reaches $L$, giving $w_0(\sigma) \ge \beta(a+\varepsilon)$. On the other hand Evans asserts $w_1(\sigma) \le w_1(0)$ for all $\sigma\le0$. Choosing $\beta$ large enough that $\beta(a+\varepsilon) > w_1(0)$ and then $\sigma$ sufficiently negative,

$$
w_0(\sigma) > w_1(\sigma) .
\tag{9}
$$

**Step 9 (intermediate value).** The two heights $w_0$ and $w_1$ depend smoothly on $\sigma$, so by (8), (9) and continuity there is a $\sigma<0$ with

$$
w_0(\sigma) = w_1(\sigma) .
$$

At that $\sigma$ the two curves meet at a point of $L$; since both are orbits of the same autonomous system (7), and an orbit through a point is unique, they are the same orbit. This is the heteroclinic connection of Step 4, and it yields a travelling wave of (3) satisfying (5). $\square$
:::

:::note{provenance=original}
Three claims in the proof are asserted by Evans rather than proved, and are repeated here on his authority: that $W^{\mathrm{u}}$ cannot leave the region $R$ except through $L$ and that $W^{\mathrm{s}}$ likewise reaches $L$ (Step 6); that $w_1(\sigma)\le w_1(0)$ for every $\sigma\le0$ (Step 8); and that $w_0$ and $w_1$ depend smoothly on $\sigma$ (Step 9). He also states the uniqueness of the selected speed as the outcome of a more refined analysis which he does not present. The explicit example below is independent of all of this: for one particular cubic $f$ satisfying (4), it exhibits the front and its speed in closed form and verifies them by substitution.
:::

:::remark[Plane waves and dispersion]{provenance=adapted src="evans-2010:§4.2.1a, pp. 167–169"}
For linear constant-coefficient equations, inserting $u = e^{i(y\cdot x - \sigma t)}$ is step 1 of the method with an exponential profile, and the resulting dispersion relation already tells one most of what the equation does.

| Equation | Dispersion relation | What it says |
|---|---|---|
| $u_t - \Delta u = 0$ | $\sigma = -i\lvert y\rvert^2$ | purely imaginary $\sigma$: the factor $e^{-\lvert y\rvert^2t}$ damps, and damps faster the shorter the wave |
| $u_{tt} - \Delta u = 0$ | $\sigma = \pm\lvert y\rvert$ | real $\sigma$, with speed $\lvert\sigma\rvert/\lvert y\rvert = 1$ for every $y$: no damping, no dispersion |
| $u_{tt} - \Delta u + m^2u = 0$ | $\sigma = \pm(\lvert y\rvert^2+m^2)^{1/2}$ | real, but the speed now depends on $\lvert y\rvert$: dispersion, with the slowly oscillating waves travelling faster |
| $iu_t + \Delta u = 0$ | $\sigma = \lvert y\rvert^2$ | dispersion |
| $u_t + u_{xxx} = 0$ | $\sigma = -y^3$ | dispersion, with speed $y^2$ |

Damping shows up as $\operatorname{Im}\sigma \ne 0$ and dispersion as a non-constant phase velocity $\sigma(y)/\lvert y\rvert$. Dispersion is what makes the nonlinear balance of the next example possible: in the Korteweg-de Vries equation the dispersive term $u_{xxx}$ spreads a pulse out while the nonlinear term $uu_x$ steepens it, and a soliton is the shape for which the two exactly cancel.
:::

:::example[The Korteweg-de Vries soliton]{provenance=adapted src="evans-2010:§4.2.1b, Eqs. (4)–(11), pp. 169–170; strauss-2008:§14.2, Eqs. (1)–(3), pp. 390–391"}
Take the Korteweg-de Vries equation in Evans's and Strauss's normalisation,

$$
u_t + 6uu_x + u_{xxx} = 0 \qquad\text{in } \mathbb{R}\times(0,\infty) ,
$$

a model for long surface waves on shallow water, and look for a solitary wave $u = v(x-\sigma t)$.

1. *Substitute.* With $s = x - \sigma t$, the equation becomes $-\sigma v' + 6vv' + v''' = 0$.
2. *Integrate once.* Every term is a derivative: $\bigl(-\sigma v + 3v^2 + v''\bigr)' = 0$, so

   $$
   -\sigma v + 3v^2 + v'' = a
   $$

   for a constant $a$.
3. *Integrate again.* Multiply by $v'$. Then $-\sigma vv' + 3v^2v' + v''v' = av'$, and each side is a derivative, giving

   $$
   \frac{(v')^2}{2} = -v^3 + \frac{\sigma}{2}v^2 + av + b
   $$

   for a second constant $b$.
4. *Impose decay.* A solitary wave has $v, v', v'' \to 0$ as $s \to \pm\infty$. Letting $s\to\infty$ in step 2 gives $a = 0$, and then in step 3 gives $b = 0$. Hence

   $$
   (v')^2 = v^2\bigl(\sigma - 2v\bigr) ,
   $$

   which already forces $\sigma > 0$ for a non-trivial non-negative profile, and bounds the amplitude by $\sigma/2$.
5. *Solve.* Separating variables and substituting $v = \tfrac{\sigma}{2}\operatorname{sech}^2\theta$ reduces the integral to $ds = (2/\sqrt{\sigma})\,d\theta$, so $\theta = \tfrac{\sqrt\sigma}{2}(s-c)$ and

   $$
   u(x,t) = \frac{\sigma}{2}\,\operatorname{sech}^2\!\left(\frac{\sqrt\sigma}{2}\,\bigl(x - \sigma t - c\bigr)\right)
   \qquad (\sigma>0,\ c \in \mathbb{R}) .
   $$

   Substituting this expression into the equation confirms it identically.
6. *What the formula says.* There is a soliton for **every** speed $\sigma>0$: the speed is free, the opposite of the bistable case. Its amplitude is $\sigma/2$ and its width is of order $2/\sqrt\sigma$, so taller solitons are narrower and faster, as Strauss puts it: tall, thin and fast for large $\sigma$; short, fat and slow for small $\sigma$. Numerically, $\sigma = 2$ gives amplitude $1$ and $\sigma = 8$ gives amplitude $4$ at twice the width-inverse, so a soliton four times as tall travels four times as fast and is half as wide.
7. *Conventions differ, and the formula with them.* Arfken, Weber and Harris write the equation as $\psi_t + \psi\psi_x + \psi_{xxx} = 0$, without the factor $6$, and obtain $\psi = 3c\,\operatorname{sech}^2\bigl(\tfrac12\sqrt{c}\,(x-ct)\bigr)$ — amplitude $3c$ rather than $c/2$. The two are the same family: replacing $u$ by $\psi/6$ turns one equation into the other, and $\tfrac{\sigma}{2}\mapsto 3\sigma$ under that substitution. Strauss remarks that the factor $6$ has no special significance; it is chosen to tidy the formula. Always check which normalisation a quoted soliton formula belongs to.
8. *Why solitons are remarkable.* Strauss records the history: J. S. Russell saw a solitary heap of water run along a canal for a mile or two without changing shape in 1834, and Kruskal and Zabusky found numerically in the 1960s that when a fast soliton overtakes a slow one the two emerge from the nonlinear interaction with their shapes and speeds intact, delayed only by a phase shift, and that general initial data decompose as $t\to\infty$ into finitely many solitons plus a decaying dispersive tail. The explanation is that the equation is integrable, with an exact solution available for general data through inverse scattering; the three invariants $\int u$, $\int u^2$ and $\int(\tfrac12u_x^2 - u^3)$ are the first of infinitely many conserved quantities.
:::

:::example{provenance=original}
**An explicit bistable front, with its selected speed.** Take the cubic

$$
f(u) = u(1-u)(u-a), \qquad 0 < a < \tfrac12 ,
$$

in equation (3). It satisfies all four hypotheses (4): the zeros are $0, a, 1$; $f<0$ on $(0,a)$ and $f>0$ on $(a,1)$ by inspection of the three factors; $f'(0) = -a < 0$ and $f'(1) = -(1-a) < 0$; and

$$
\int_0^1 f(z)\,dz = \int_0^1 \bigl(-z^3 + (1+a)z^2 - az\bigr)\,dz = -\frac14 + \frac{1+a}{3} - \frac{a}{2} = \frac{1}{12} - \frac{a}{6} ,
$$

which is positive exactly when $a < \tfrac12$. So the theorem applies and predicts a unique $\sigma<0$.

1. *Guess the shape.* The reduced equation is $v'' + \sigma v' + v(1-v)(v-a) = 0$ with $v(-\infty)=0$, $v(+\infty)=1$. Try an orbit on which $w = v'$ is the quadratic $v' = \kappa\,v(1-v)$, with $\kappa>0$: this vanishes at both equilibria and is positive between them, so it is a candidate for the heteroclinic orbit of Step 4.
2. *Substitute.* Differentiating, $v'' = \kappa(1-2v)v' = \kappa^2 v(1-v)(1-2v)$. Putting both into the reduced equation,

   $$
   \kappa^2 v(1-v)(1-2v) + \sigma\kappa\,v(1-v) + v(1-v)(v-a) = 0 ,
   $$

   and dividing by $v(1-v)$, which is nonzero for $0<v<1$,

   $$
   \kappa^2(1-2v) + \sigma\kappa + (v-a) = 0 .
   $$

3. *Match powers of $v$.* The coefficient of $v$ is $1 - 2\kappa^2$ and the constant term is $\kappa^2 + \sigma\kappa - a$. Both must vanish, so

   $$
   \kappa = \frac{1}{\sqrt2}, \qquad \sigma = \frac{a - \kappa^2}{\kappa} = \sqrt2\Bigl(a - \tfrac12\Bigr) = \frac{2a-1}{\sqrt2} .
   $$

   The guess has worked, and it has produced one value of $\sigma$ and no freedom: the speed is selected, exactly as the theorem says. And $\sigma<0$ precisely when $a<\tfrac12$, which is precisely when $\int_0^1f>0$ — the hypothesis used in Step 7 of the proof.
4. *Integrate for the profile.* Solving $v' = v(1-v)/\sqrt2$ by separation gives the logistic profile

   $$
   v(s) = \frac{1}{1 + e^{-s/\sqrt2}} , \qquad\text{so}\qquad
   u(x,t) = \frac{1}{1 + \exp\bigl(-(x-\sigma t)/\sqrt2\bigr)} ,
   $$

   with $v(-\infty)=0$, $v(+\infty)=1$, $v(0)=\tfrac12$ and $v'(\pm\infty)=0$, as (5) requires. Equivalently $v(s) = \tfrac12\bigl[1+\tanh\bigl(s/(2\sqrt2)\bigr)\bigr]$.
5. *Check.* Substituting this $u$ into $u_t - u_{xx} = u(1-u)(u-a)$ with $\sigma = (2a-1)/\sqrt2$ gives zero identically, for every $a$.
6. *Numbers.* For $a = \tfrac14$: $\sigma = -\tfrac{1}{2\sqrt2} = -0.3535534$, so the front moves to the *left* at that speed, meaning the state $u=1$ advances into the state $u=0$ — which is the state with the larger value of $\int f$, as it should be. The front is centred where $u = \tfrac12$, at $x = \sigma t$, and its width is of order $\sqrt2$: $u = 0.8044$ at $s = 2$ and $u = 0.1956$ at $s = -2$. At the balanced value $a=\tfrac12$ the speed is zero and the front stands still; for $a>\tfrac12$ it reverses, and $u=0$ invades instead.
7. *A caution on generality.* This is one explicit member of the family the theorem covers, not a proof of the theorem: the trick of guessing $v' = \kappa v(1-v)$ works because the nonlinearity is exactly cubic with zeros at $0$ and $1$, and it has no analogue for general $f$. Note also that if $f$ is positive on all of $(0,1)$, so that $f'(0)>0$ and hypothesis (4)(c) fails, none of the above applies: the equilibrium at the origin is then not a saddle, Step 3 breaks down, and the speed is no longer determined by this argument.
:::

:::application{provenance=original}
Fronts of exactly the bistable kind are how a transition spreads through a medium that has two stable states. In combustion, $u$ is a scaled temperature or reactant fraction and the front is a premixed flame, whose selected speed is the laminar burning velocity — a material property, measured in cm/s, that the equation predicts from the reaction kinetics and the thermal diffusivity. In materials science the same equation with $f = -W'(u)$ for a double-well $W$ is the Allen-Cahn equation, and the front is the interface between two phases of a solidifying alloy or two orientations of a magnetic domain; the unequal well depths, which are hypothesis (4)(d), drive the interface towards the deeper well at the speed computed above, and the front width $\sqrt{2}$ in the example is the interface thickness in units of the diffusion length. In neurophysiology the cubic $f$ is the fast part of the FitzHugh-Nagumo reduction of the Hodgkin-Huxley equations, and the front is the leading edge of an action potential travelling along an axon; that the conduction velocity is a definite number, not a free parameter, is exactly the speed selection of the statement above. In population biology the same structure describes an advantageous gene or an invading species spreading into territory held by a resident one.

Solitary waves appear wherever weak nonlinearity balances weak dispersion. The Korteweg-de Vries soliton is the shallow-water wave Russell chased on horseback, and it is also the model for internal waves in a stratified ocean and for ion-acoustic pulses in a plasma; the closely analogous soliton of the nonlinear Schrödinger equation is the basis of soliton transmission in optical fibres, where the pulse shape survives propagation because self-phase modulation cancels group-velocity dispersion. Dispersion relations themselves, the linear part of this unit, are the daily tool for reading a wave-bearing equation: whether it damps, at what rate the short waves go, and at what speed a wave packet actually carries energy, which is the group velocity and not the phase velocity.
:::
