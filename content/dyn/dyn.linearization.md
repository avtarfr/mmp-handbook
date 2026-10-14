---
id: dyn.linearization
title: Linearization and the Hartman-Grobman theorem
kind: theorem
level: core
summary: Defines the Jacobian linearization at an equilibrium and the notion of a hyperbolic equilibrium, proves that an equilibrium whose Jacobian has only eigenvalues of negative real part is asymptotically stable with an explicit exponential rate, states the Hartman-Grobman theorem that the nonlinear flow near any hyperbolic equilibrium is topologically conjugate to its linearization, and shows by two examples what goes wrong when hyperbolicity fails.
prereqs: [dyn.linear-planar-classification, ode.existence-uniqueness, linalg.jordan-form]
provenance: adapted
sources:
  - work: hirsch-smale-devaney-2013
    loc: "§8.1, the two examples in which linearization fails, pp. 164-165; §8.2, Nonlinear Sinks and Sources, pp. 166-168: the definition of the linearized system and of a hyperbolic equilibrium (p. 166), the canonical-form reduction and the computation of the dot product of the vector field with the position vector (p. 167), and the Linearization Theorem (p. 168); §8.3, the Stable Curve Theorem, p. 169; §8.4, the definitions of stability and the theorem that an equilibrium whose linearization has only eigenvalues of negative real part is asymptotically stable, pp. 174-175"
    pages: "164-169, 174-175"
    role: the definitions of the linearized system and of hyperbolicity, the route of the proof for a sink (canonical form, then differentiate the squared distance), the statement of the Linearization Theorem, the stable-curve statement for a saddle, and both failure examples
  - work: strogatz-1994
    loc: "§6.3, Fixed Points and Linearization, pp. 150-155: the Jacobian matrix at a fixed point and the linearized system (pp. 150-151), the statement that a linearized saddle, node or spiral is reproduced by the nonlinear system while the borderline cases are not (p. 151), Example 6.3.2, the family whose linearization is a centre for every parameter value (pp. 153-154), and the definition of a hyperbolic fixed point together with the Hartman-Grobman theorem and topological equivalence (p. 155)"
    pages: "150-155"
    role: the derivation of the linearized system from a Taylor expansion of the disturbance, the robust-versus-borderline dichotomy, the parametrised family used as our first failure example, and the phrasing of Hartman-Grobman in terms of topological equivalence of local phase portraits
  - work: stakgold-holst-2011
    loc: "§9.5, The Stability of the Steady State, pp. 625-626: the equilibrium state of $du/dt = F(u)$, the substitution $u = \\bar u + h$ leading to the linearized equation $dh/dt = F_u(\\bar u)h$, the principle of linearized stability as an explicit assumption, and the remark that it is well established for ordinary differential equations"
    pages: "625-626"
    role: the infinite-dimensional form of the same principle used in the application, with the authors' own hedge about its status
---

:::definition[Equilibria, the Jacobian and the linearized system]{provenance=adapted src="strogatz-1994:§6.3, pp. 150-151; hirsch-smale-devaney-2013:§8.2, p. 166"}
Let $F : \mathcal{O} \to \mathbb{R}^{n}$ be $C^{1}$ on an open set $\mathcal{O} \subseteq \mathbb{R}^{n}$ and consider

$$
\dot x \;=\; F(x) .
$$

A point $x_* \in \mathcal{O}$ with $F(x_*) = 0$ is an **equilibrium** (or fixed point). The **Jacobian** of $F$ at $x_*$ is the matrix of first partial derivatives evaluated there,

$$
A \;=\; DF(x_*) \;=\; \Bigl(\frac{\partial F_{i}}{\partial x_{j}}(x_*)\Bigr)_{i,j=1}^{n} ,
$$

a matrix of numbers, not of functions. The **linearized system at $x_*$** is the linear system

$$
\dot u \;=\; A u ,
\qquad u \in \mathbb{R}^{n} ,
$$

for the displacement $u = x - x_*$. In the plane, with $\dot x = f(x,y)$, $\dot y = g(x,y)$ and $f(x_*,y_*) = g(x_*,y_*) = 0$,

$$
A = \begin{pmatrix}
f_{x} & f_{y} \\ g_{x} & g_{y}
\end{pmatrix}_{(x_*,y_*)} .
$$

Differentiability of $F$ at $x_*$ says precisely that the remainder

$$
h(u) \;=\; F(x_* + u) - Au
\qquad\text{satisfies}\qquad
\frac{|h(u)|}{|u|} \longrightarrow 0
\quad\text{as } u \to 0 ,
$$

so $\dot u = Au + h(u)$ is the exact equation for the displacement and the linearized system is what remains when $h$ is dropped.
:::

:::definition[Hyperbolic equilibrium]{provenance=adapted src="hirsch-smale-devaney-2013:§8.2, p. 166; strogatz-1994:§6.3, p. 155"}
An equilibrium $x_*$ is **hyperbolic** if no eigenvalue of $DF(x_*)$ has zero real part. In the plane this excludes exactly the two borderline columns of :ref[]{to=dyn.linear-planar-classification}: a centre ($T = 0$, $D > 0$) and any matrix with $D = 0$. :cite[Strogatz]{work=strogatz-1994 loc="p. 155"} calls the name unfortunate, since it suggests a saddle, and records that it has nevertheless become standard.
:::

:::statement[Linearized stability of a sink]{provenance=adapted src="hirsch-smale-devaney-2013:§8.4, the Theorem on p. 175"}
Let $x_*$ be an equilibrium of $\dot x = F(x)$ with $F$ of class $C^{1}$ near $x_*$. If every eigenvalue of $DF(x_*)$ has negative real part, then $x_*$ is asymptotically stable.
:::

:::statement[The Hartman-Grobman theorem]{provenance=adapted src="hirsch-smale-devaney-2013:§8.2, the Linearization Theorem, p. 168; strogatz-1994:§6.3, p. 155"}
Let $x_*$ be a **hyperbolic** equilibrium of $\dot x = F(x)$, $F$ of class $C^{1}$, and let $A = DF(x_*)$. Then on some neighbourhood of $x_*$ the flow of $\dot x = F(x)$ is topologically conjugate to the flow of $\dot u = Au$ near $0$: there is a homeomorphism $h$ of a neighbourhood of $x_*$ onto a neighbourhood of $0$, with $h(x_*) = 0$, carrying orbits of the nonlinear system onto orbits of the linear one and preserving the direction and the parametrisation of time.

:cite[Strogatz]{work=strogatz-1994 loc="p. 155"} states the same result as topological equivalence of the two local phase portraits, the homeomorphism being required only to send trajectories to trajectories and to preserve the sense of time. Either way the consequence is the one we use: at a hyperbolic equilibrium the local picture — saddle, node or spiral, and its stability — is exactly the one predicted by the Jacobian. :cite[Strogatz]{work=strogatz-1994 loc="p. 151"} puts it as the rule that a linearized saddle, node or spiral is a genuine saddle, node or spiral of the nonlinear system, while the borderline cases (centres, stars, degenerate nodes, non-isolated fixed points) may be changed by the nonlinear terms. Neither book proves the theorem; :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="p. 168"} say the general case needs techniques beyond their scope, and prove it only for sinks and sources.
:::

:::idea{provenance=original}
For a sink the whole proof is one derivative. In coordinates adapted to $A$ the linear field points strictly inwards across every small circle about the equilibrium, which one sees by taking the dot product of $Au$ with $u$: it equals $-\lambda x^{2} - \mu y^{2}$ for a diagonal $A$, a negative multiple of $|u|^{2}$. The nonlinear remainder $h$ is $o(|u|)$, so its contribution to that dot product is $o(|u|^{2})$: for small enough circles it cannot reverse the sign. Since the dot product of the field with the position vector is exactly $\tfrac12\frac{d}{dt}|u|^{2}$, we get a differential inequality for the squared distance, and Gronwall's elementary one-line version of it gives exponential decay. Hartman-Grobman says the same comparison succeeds at every hyperbolic equilibrium, not only at sinks, but there one must match an expanding and a contracting direction at once and the conjugating homeomorphism is no longer explicit.
:::

:::proof[Linearized stability of a sink]{provenance=adapted src="hirsch-smale-devaney-2013:§8.2, pp. 166-167"}
We give the planar case; the argument in $\mathbb{R}^{n}$ is the same once $A$ is put in a real canonical form whose symmetric part is negative definite.

**Step 0 (normalisations).** Replacing $x$ by $u = x - x_*$ moves the equilibrium to the origin and does not change $A$. Replacing $u$ by $Pu$ for an invertible real $P$ replaces $A$ by $P^{-1}AP$ and $h$ by $P^{-1}h(P\,\cdot)$, which is still $o(|u|)$ because $P$ and $P^{-1}$ are bounded. Both changes are homeomorphisms fixing the origin, so they preserve asymptotic stability; we may therefore assume $x_* = 0$ and that $A$ is in whichever real canonical form is convenient.

**Step 1 (the three canonical forms and the inward inequality).** Write $u = (x,y)$, $r^{2} = x^{2}+y^{2}$, and $h = (h_{1},h_{2})$. The eigenvalues of $A$ have negative real parts, so exactly one of the following holds, and in each case we compute $Au \cdot u$.

- *Distinct real eigenvalues $-\lambda < -\mu < 0$.* In an eigenbasis $A = \operatorname{diag}(-\lambda,-\mu)$ and
  $$
  Au \cdot u = -\lambda x^{2} - \mu y^{2} \le -\mu\,(x^{2}+y^{2}) = -\mu r^{2} ,
  $$
  since $\lambda > \mu$.
- *A complex pair $\alpha \pm i\beta$ with $\alpha < 0$, $\beta \neq 0$.* In the real canonical basis $A = \begin{pmatrix}\alpha & \beta \\ -\beta & \alpha\end{pmatrix}$, so the off-diagonal contributions $\beta xy$ and $-\beta xy$ cancel and
  $$
  Au \cdot u = \alpha r^{2} .
  $$
  Put $\mu = -\alpha > 0$.
- *A repeated eigenvalue $-\lambda < 0$.* If the eigenspace is two-dimensional then $A = -\lambda I$ and $Au \cdot u = -\lambda r^{2}$. If it is a line $\mathbb{R}v$, then by :ref[]{to=linalg.jordan-form} there is $w$ with $(A+\lambda I)w = v$; in the basis $(v, \varepsilon w)$ the matrix is $\begin{pmatrix}-\lambda & \varepsilon \\ 0 & -\lambda\end{pmatrix}$ for any $\varepsilon > 0$ we like, whence
  $$
  Au \cdot u = -\lambda r^{2} + \varepsilon xy \le \Bigl(-\lambda + \tfrac{\varepsilon}{2}\Bigr) r^{2} ,
  $$
  using $|xy| \le \tfrac12 r^{2}$. Choosing $\varepsilon = \lambda$ gives the bound with $\mu = \lambda/2 > 0$.

In every case there is $\mu > 0$ and a linear coordinate system in which $Au \cdot u \le -\mu r^{2}$ for all $u$.

**Step 2 (the nonlinear terms cannot reverse the sign).** Since $|h(u)|/|u| \to 0$, there is $\delta > 0$ with $\overline{B_{\delta}} \subset \mathcal{O}$ and

$$
|h(u)| \;\le\; \tfrac{\mu}{2}\,|u|
\qquad\text{for } |u| \le \delta .
$$

By the Cauchy-Schwarz inequality, $|h(u)\cdot u| \le \tfrac{\mu}{2}r^{2}$ there. Hence for a solution inside the ball,

$$
\tfrac12 \frac{d}{dt} r(t)^{2} = u \cdot \dot u = Au \cdot u + h(u)\cdot u
\;\le\; -\mu r^{2} + \tfrac{\mu}{2} r^{2} = -\tfrac{\mu}{2}\,r^{2} .
$$

Here differentiability of $F$ at the equilibrium is what makes $h$ small, and the canonical form of Step 1 is what makes the linear part strictly negative.

**Step 3 (integrate the inequality).** Let $u(0)$ satisfy $|u(0)| \le \delta$ and let $u$ be the solution through it, which exists and is unique by :ref[]{to=ode.existence-uniqueness}, $F$ being $C^{1}$ and hence locally Lipschitz. As long as the solution stays in $\overline{B_{\delta}}$, Step 2 gives $\frac{d}{dt}\bigl(e^{\mu t}r^{2}\bigr) = e^{\mu t}\bigl(\mu r^{2} + \frac{d}{dt}r^{2}\bigr) \le 0$, so

$$
r(t) \;\le\; r(0)\,e^{-\mu t/2} .
$$

In particular $r$ is non-increasing, so the solution never reaches the boundary of $\overline{B_{\delta}}$ and, remaining in a compact subset of $\mathcal{O}$, continues for all $t \ge 0$. The displayed bound therefore holds for all $t \ge 0$.

**Step 4 (read off stability).** Given a neighbourhood $U$ of the origin, choose $\rho \le \delta$ with $\overline{B_{\rho}} \subset U$; by Step 3 every solution starting in $B_{\rho}$ stays in $B_{\rho} \subset U$ for all $t \ge 0$, so the origin is Lyapunov stable. And $r(t) \le r(0)e^{-\mu t/2} \to 0$, so every solution starting in $B_{\delta}$ converges to the origin: the origin is attracting, hence asymptotically stable. $\square$
:::

:::remark[What the proof gives beyond the statement]{provenance=original}
Step 3 proves more than asymptotic stability. It exhibits a radius $\delta$ and a rate: in the adapted coordinates the closed ball of radius $\delta$ is positively invariant and lies in the basin of attraction, and the distance to the equilibrium decays at least like $e^{-\mu t/2}$, where $-\mu$ is (for distinct real eigenvalues) the largest eigenvalue, or (for a complex pair) the common real part, or (for a defective repeated eigenvalue $-\lambda$) $-\lambda/2$. The extra halving in the defective case is the price of the shear: for $A = \begin{pmatrix}-\lambda & 1\\ 0 & -\lambda\end{pmatrix}$ the linear flow itself decays only like $t\,e^{-\lambda t}$, so no estimate of the form $|u(t)| \le C|u(0)|e^{-\lambda t}$ can hold, and a rate strictly smaller than $\lambda$ must be accepted. Returning to the original coordinates multiplies the constant by the condition number of the change of basis but not the rate.
:::

:::remark[Where hyperbolicity is used, and what fails without it]{provenance=adapted src="strogatz-1994:§6.3, Example 6.3.2, pp. 153-154; hirsch-smale-devaney-2013:§8.1, pp. 164-165"}
Hyperbolicity enters the proof above as the strict inequality $Au\cdot u \le -\mu r^{2}$ with $\mu > 0$ in Step 1: it is the gap between the spectrum and the imaginary axis that gives the nonlinear remainder no room to act. When the gap closes, the remainder decides, and the linearization tells us nothing.

**A centre that is not a centre.** For the family studied by :cite[Strogatz]{work=strogatz-1994 loc="Example 6.3.2, p. 153"} and by :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="p. 164"},

$$
\dot x = -y + a\,x(x^{2}+y^{2}) ,
\qquad
\dot y = x + a\,y(x^{2}+y^{2}) ,
$$

the Jacobian at the origin is $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ for every value of $a$: a centre, with $T = 0$ and $D = 1$. The nonlinear system is transparent in polar coordinates. From $r\dot r = x\dot x + y\dot y$ the cubic terms give $r\dot r = a(x^{2}+y^{2})^{2}$, so $\dot r = ar^{3}$; and from $\dot\theta = (x\dot y - y\dot x)/r^{2}$ the cubic terms cancel and $\dot\theta = 1$. Thus the origin is a stable spiral for $a < 0$, an unstable spiral for $a > 0$, and a genuine centre only for $a = 0$. Arbitrarily small nonlinear terms change the answer, and even its sign.

**A zero eigenvalue.** For $\dot x = x^{2}$, $\dot y = -y$ the Jacobian at the origin is $\operatorname{diag}(0,-1)$, so the equilibrium is not hyperbolic. The linearized system $\dot x = 0$, $\dot y = -y$ has an entire line of equilibria, while the nonlinear system has only the origin: $\dot x = x^{2}$ integrates to $x(t) = x_{0}/(1-x_{0}t)$, which blows up in finite time for $x_{0} > 0$ and decays to $0$ for $x_{0} < 0$. No homeomorphism can match a line of equilibria to a single one, so the two flows are not conjugate near the origin. This is the example of :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="p. 165"}.

**What survives at a hyperbolic saddle.** The straight stable and unstable lines of :ref[]{to=dyn.linear-planar-classification} do not survive the nonlinear terms, but curves do: the Stable Curve Theorem of :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="p. 169"} supplies, near a hyperbolic saddle, a smooth curve of initial conditions whose solutions tend to the equilibrium as $t \to \infty$, tangent at the equilibrium to the stable eigendirection, with a mirror statement in backward time; all other nearby solutions leave a fixed small disc.
:::

:::method[Linearizing and classifying the equilibria of a planar system]{provenance=original}
For $\dot x = f(x,y)$, $\dot y = g(x,y)$ with $f,g$ of class $C^{1}$:

1. Solve $f = g = 0$ for all equilibria. Keep them exact where possible; the classification below uses their coordinates.
2. Differentiate once to get $J(x,y) = \begin{pmatrix} f_{x} & f_{y} \\ g_{x} & g_{y}\end{pmatrix}$ as a matrix of functions, then evaluate it at each equilibrium in turn.
3. At each equilibrium compute $T = \operatorname{tr}J$, $D = \det J$ and $\Delta = T^{2}-4D$, and classify by :ref[]{to=dyn.linear-planar-classification}.
4. Check hyperbolicity: the equilibrium is hyperbolic unless $D = 0$, or $T = 0$ with $D > 0$. If it is, Hartman-Grobman licenses the picture of step 3 as the local picture of the nonlinear system, and the eigenvectors give the tangent directions of the stable and unstable curves, or of the slow and fast approach at a node.
5. If it is not hyperbolic, stop and use another tool: a conserved quantity or a Lyapunov function (:ref[]{to=dyn.lyapunov-functions}), a symmetry, or a change to polar coordinates as in the family above. The linearization is then genuinely silent.
6. Assemble the local pictures into a phase portrait by adding the nullclines $f = 0$ and $g = 0$, on which the field is vertical and horizontal respectively.
:::

:::example[Two equilibria of a nonlinear planar system]{provenance=original}
Classify the equilibria of

$$
\dot x = y - x ,
\qquad
\dot y = x^{2} - 4 .
$$

**Step 1 (equilibria).** $\dot y = 0$ gives $x = \pm 2$ and $\dot x = 0$ gives $y = x$, so the equilibria are $P_{+} = (2,2)$ and $P_{-} = (-2,-2)$.

**Step 2 (Jacobian).**

$$
J(x,y) = \begin{pmatrix} -1 & 1 \\ 2x & 0 \end{pmatrix} .
$$

**Step 3 (the saddle at $P_{+}$).** $J(2,2) = \begin{pmatrix}-1&1\\4&0\end{pmatrix}$, so $T = -1$, $D = (-1)(0) - (1)(4) = -4 < 0$. By case 1 of :ref[]{to=dyn.linear-planar-classification} this is a saddle, and $D \neq 0$ makes it hyperbolic. Its eigenvalues solve $\lambda^{2}+\lambda-4 = 0$:

$$
\lambda_{\pm} = \frac{-1 \pm \sqrt{17}}{2} ,
\qquad
\lambda_{+} = 1.5615528128\ldots ,
\qquad
\lambda_{-} = -2.5615528128\ldots
$$

For an eigenvector, the second row of $J - \lambda I$ reads $4v_{1} - \lambda v_{2} = 0$, so $v = (\lambda, 4)$ and the eigendirection through $P_{+}$ has slope $4/\lambda$. Because $\lambda_{+}\lambda_{-} = -4$, that slope is $-\lambda_{\mp}$: the unstable curve leaves $P_{+}$ with slope

$$
\frac{4}{\lambda_{+}} = -\lambda_{-} = \frac{1+\sqrt{17}}{2} = 2.5615528128\ldots ,
$$

and the stable curve arrives with slope $4/\lambda_{-} = -\lambda_{+} = -1.5615528128\ldots$. By Hartman-Grobman these are genuine curves of the nonlinear flow, tangent to those directions at $P_{+}$.

**Step 4 (the spiral at $P_{-}$).** $J(-2,-2) = \begin{pmatrix}-1&1\\-4&0\end{pmatrix}$, so $T = -1$ and $D = (-1)(0) - (1)(-4) = 4 > 0$, hence $\Delta = 1 - 16 = -15 < 0$. By case 3 this is a spiral, stable because $T < 0$, and hyperbolic because $T \neq 0$. Its data are

$$
\alpha = \tfrac{T}{2} = -\tfrac12 ,
\qquad
\omega = \tfrac12\sqrt{4D-T^{2}} = \tfrac{\sqrt{15}}{2} = 1.9364916731\ldots
$$

**Step 5 (two numbers).** One turn of the spiral takes

$$
\frac{2\pi}{\omega} = \frac{4\pi}{\sqrt{15}} = 3.2446229408\ldots
$$

units of time, and over that turn the distance to $P_{-}$ is multiplied by

$$
e^{2\pi\alpha/\omega} = e^{-\pi/\omega} = e^{-2\pi/\sqrt{15}} = 0.1974417904\ldots ,
$$

a shrinkage to about $19.7\%$ per revolution. (These describe the linearized motion exactly and the nonlinear motion to leading order near $P_{-}$; Hartman-Grobman guarantees the qualitative picture, not the rates.)

**Step 6 (sense of rotation).** At $P_{-}$ take the displacement $u = (1,0)$: then $J(-2,-2)u = (-1,-4)$, whose second component is negative, so the spiral turns clockwise.

So the portrait has a saddle at $(2,2)$ and a clockwise stable spiral at $(-2,-2)$; the divergence $\partial_{x}(y-x) + \partial_{y}(x^{2}-4) = -1$ is negative everywhere, which by the criterion of :ref[]{to=dyn.poincare-bendixson} already rules out any closed orbit in the plane.
:::

:::application{provenance=original}
Linearization is how stability is decided in practice wherever a steady state can be found but the full dynamics cannot be solved: the small-signal model of a transistor amplifier, the response of a laser to a perturbation of its steady photon number, the stability of a coexistence state in an ecological model, the onset of oscillation in a feedback controller. In each case one differentiates the right-hand side once at the operating point and looks at two numbers, the trace and the determinant of the Jacobian, as in :ref[]{to=dyn.linear-planar-classification}.

The same principle is used far beyond the finite-dimensional setting. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§9.5, pp. 625-626"} write an evolution problem as $du/dt = F(u)$ in a Hilbert space, set $u = \bar u + h$ around a steady state $\bar u$, and obtain $dh/dt = F_{u}(\bar u)h + r$ with $F_{u}(\bar u)$ the Fréchet derivative and $r$ of higher order in $h$ — exactly the decomposition of our definition block, with the Jacobian replaced by a linear operator. They then adopt the *principle of linearized stability* as an explicit assumption: if all solutions of the linearized equation decay exponentially, so do solutions of the full equation for small enough initial disturbance, and if the linearized equation has an exponentially growing solution, some small disturbance grows. Their stability criterion is that the spectrum of $F_{u}(\bar u)$ lie in the open left half-plane, and they are careful to add that this footing is secure for ordinary differential equations, and for certain families of partial differential equations, while elsewhere the principle remains an assumption they adopt rather than a theorem they prove. The theorem proved above is the ordinary-differential-equation case of that principle, and Hartman-Grobman is the statement that at a hyperbolic steady state the linearization captures not merely the stability but the entire local geometry. Their worked example is a continuously stirred tank reactor in which the flow rate is the control parameter, and the loss of stability of a steady state as the parameter crosses a critical value is what :ref[]{to=dyn.hopf-bifurcation} and :ref[]{to=dyn.one-dimensional-bifurcations} take up.
:::
