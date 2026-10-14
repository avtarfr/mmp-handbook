---
id: dyn.lyapunov-functions
title: Lyapunov functions
kind: theorem
level: core
summary: Gives Lyapunov's criterion — a positive definite function that does not increase along orbits makes an equilibrium stable, and strictly decreases makes it asymptotically stable — proves it, states LaSalle's invariance principle for the non-strict case, and turns both into a recipe for building such functions and for estimating the basin of attraction with a number.
prereqs: [dyn.linearization, ode.existence-uniqueness, ode.continuous-dependence, linalg.quadratic-forms]
provenance: adapted
sources:
  - work: hirsch-smale-devaney-2013
    loc: "§9.2, Stability of Equilibria, pp. 192-199: the derivative of $L$ along the flow (p. 192), the Liapunov Stability Theorem with its hypotheses (a), (b), (c) and the names Liapunov function and strict Liapunov function (p. 193), the remark that there is no systematic way to find one and that energy often serves (p. 193), the nonlinear pendulum with $E = \\tfrac12 v^2 + 1 - \\cos\\theta$ and $\\dot E = -bv^2$ (pp. 194-195), the proof of the theorem (pp. 196-197), the definitions of invariant, positively invariant and entire solution and the statement of Lasalle's Invariance Principle (p. 199)"
    pages: "192-199"
    role: the definitions, both theorems, the proof route for Lyapunov's theorem, and the damped pendulum as the mechanical prototype
  - work: strogatz-1994
    loc: "§7.2, Liapunov Functions, pp. 201-202: the definition of a Liapunov function as an energy-like function that decreases along trajectories, the two conditions (positive definiteness and $\\dot V < 0$), the global conclusion drawn from them, the remark that there is no systematic construction and that sums of squares sometimes work, and Example 7.2.3 in which a free coefficient is chosen to cancel the cross term"
    pages: "201-202"
    role: the global form of the criterion and the consequence that closed orbits are excluded, and the undetermined-coefficient trick for a quadratic ansatz
---

:::definition[Lyapunov functions]{provenance=adapted src="hirsch-smale-devaney-2013:§9.2, pp. 192-193; strogatz-1994:§7.2, p. 201"}
Let $\dot x = F(x)$ with $F$ of class $C^{1}$ on an open set, let $x_*$ be an equilibrium, and let $L : \mathcal{O} \to \mathbb{R}$ be differentiable on an open set $\mathcal{O}$ containing $x_*$. The **derivative of $L$ along the flow** is the function

$$
\dot L(x) \;=\; DL_{x}\bigl(F(x)\bigr) \;=\; \nabla L(x) \cdot F(x) ,
$$

so that by the chain rule $\frac{d}{dt}L(x(t)) = \dot L(x(t))$ for every solution. Note that $\dot L$ is computed from $L$ and $F$ alone: no solution of the differential equation is needed.

$L$ is a **Lyapunov function for $x_*$** if

- (a) $L(x_*) = 0$ and $L(x) > 0$ for every $x \in \mathcal{O}$ with $x \neq x_*$ (that is, $L$ is **positive definite** at $x_*$), and
- (b) $\dot L \le 0$ on $\mathcal{O} \setminus \{x_*\}$.

It is a **strict Lyapunov function** if in addition

- (c) $\dot L < 0$ on $\mathcal{O} \setminus \{x_*\}$.

A set $P$ is **positively invariant** if every solution starting in $P$ is defined and stays in $P$ for all $t \ge 0$, and **invariant** if this holds for all $t \in \mathbb{R}$. An **entire solution** is an orbit $\{x(t) : t \in \mathbb{R}\}$ defined for all time, forward and backward.
:::

:::statement[Lyapunov's stability theorem]{provenance=adapted src="hirsch-smale-devaney-2013:§9.2, the Liapunov Stability Theorem, p. 193"}
Suppose the equilibrium $x_*$ of $\dot x = F(x)$ admits a Lyapunov function $L$ on some open set $\mathcal{O}$ around it. Then:

1. $x_*$ is Lyapunov stable;
2. if moreover $L$ is strict, so that $\dot L$ is negative at every point of $\mathcal{O}$ other than $x_*$, then $x_*$ is asymptotically stable.

What makes this usable is that both hypotheses are checked by differentiating two known functions. Neither the flow nor any solution formula appears, which is why the criterion survives in situations where the equations cannot be integrated at all.
:::

:::statement[LaSalle's invariance principle]{provenance=adapted src="hirsch-smale-devaney-2013:§9.2, Lasalle's Invariance Principle, p. 199"}
Take an equilibrium $x_*$ of $\dot x = F(x)$ and suppose three things hold.

- There is a Lyapunov function $L$ for $x_*$ on an open set $U$ around it — conditions (a) and (b) only, with no strictness demanded anywhere.
- There is a set $P$ with $x_* \in P \subseteq U$ which is closed, is a neighbourhood of $x_*$, and is positively invariant.
- Apart from the equilibrium itself, no orbit that stays in $P$ for all time, forwards and backwards, carries a single constant value of $L$.

Then $x_*$ is asymptotically stable and every point of $P$ is attracted to it, so that $P$ lies inside the basin of attraction.

Two things are gained over the previous theorem. First, $\dot L$ may vanish away from the equilibrium, as long as no complete orbit can sit inside the set where it does; this is the usual situation for a dissipative mechanical system, where the energy stops falling at every instant when the velocity passes through zero. Second, the conclusion names an explicit region of the state space rather than an unspecified small neighbourhood, and that is what turns the criterion into a numerical estimate of a basin.
:::

:::idea{provenance=original}
A positive definite $L$ has sublevel sets $\{L < c\}$ that shrink down onto $x_*$, and condition (b) says that the flow can never move from a smaller sublevel set to a larger one. Stability is exactly that statement: given a ball we must stay inside, take $c$ smaller than the minimum of $L$ on its boundary sphere — a positive number, by positive definiteness and compactness — and the sublevel set $\{L<c\}$ is a trap. For asymptotic stability the extra condition (c) forces $L$ to keep falling, so $L(x(t))$ converges to some limit $c_{\infty}$; if the orbit accumulated anywhere but $x_*$, the flow would carry that accumulation point strictly below $c_{\infty}$, and continuity in the initial condition would carry nearby points of the orbit below $c_{\infty}$ too — which $L(x(t)) > c_{\infty}$ forbids. LaSalle's principle replaces "keeps falling" by "cannot stop falling forever", which is all the argument really needs.
:::

:::proof[Lyapunov's stability theorem]{provenance=adapted src="hirsch-smale-devaney-2013:§9.2, pp. 196-197"}
Write $B_{\delta}$, $\overline{B_{\delta}}$ and $S_{\delta}$ for the open ball, closed ball and sphere of radius $\delta$ about $x_*$.

**Step 1 (a trapping sublevel set).** Let $\delta > 0 $ be small enough that $\overline{B_{\delta}} \subset \mathcal{O}$. The sphere $S_{\delta}$ is compact and misses $x_*$, so by hypothesis (a) and continuity

$$
\alpha \;=\; \min_{x \in S_{\delta}} L(x) \;>\; 0 .
$$

Put $U_{\delta} = \{x \in B_{\delta} : L(x) < \alpha\}$. It is open, and it contains $x_*$ because $L(x_*) = 0 < \alpha$.

**Step 2 (no solution escapes $U_{\delta}$).** Let $x(0) \in U_{\delta}$ and suppose the solution left $\overline{B_{\delta}}$. Being continuous, it would first meet $S_{\delta}$ at some finite time $t_{1} > 0$, and $L(x(t_{1})) \ge \alpha$ by the definition of $\alpha$. But $t \mapsto L(x(t))$ has derivative $\dot L(x(t)) \le 0$ on $[0,t_{1}]$ by hypothesis (b) — the orbit lies in $\overline{B_{\delta}} \subset \mathcal{O}$ there — so $L(x(t_{1})) \le L(x(0)) < \alpha$, a contradiction. Hence the solution stays in $B_{\delta}$; in particular it stays in a compact subset of the domain and so is defined for all $t \ge 0$, and since $L$ keeps decreasing it stays in $U_{\delta}$.

**Step 3 (stability).** Given any neighbourhood $U$ of $x_*$, choose $\delta$ with $\overline{B_{\delta}} \subset U \cap \mathcal{O}$ and run Steps 1-2: the open neighbourhood $U_{\delta} \subseteq U$ has the property that every solution starting in it remains in $B_{\delta} \subseteq U$ for all $t \ge 0$. That is Lyapunov stability.

**Step 4 (the limit of $L$).** Now assume (c) and take $x(0) \in U_{\delta}\setminus\{x_*\}$. By uniqueness of solutions (:ref[]{to=ode.existence-uniqueness}) the orbit never reaches $x_*$ in finite time, so $\dot L(x(t)) < 0$ for all $t \ge 0$ and $t \mapsto L(x(t))$ is strictly decreasing. It is bounded below by $0$, so it has a limit

$$
c_{\infty} = \lim_{t\to\infty} L(x(t)) \;\ge\; 0 ,
\qquad\text{and}\qquad
L(x(t)) > c_{\infty}\ \text{ for every } t \ge 0 .
$$

**Step 5 (the only accumulation point is $x_*$).** The orbit lies in the compact set $\overline{B_{\delta}}$, so it has at least one accumulation point: there are $t_{n} \to \infty$ with $x(t_{n}) \to z_{0} \in \overline{B_{\delta}}$. By continuity $L(z_{0}) = c_{\infty}$. Suppose $z_{0} \neq x_*$. Let $z(s)$ be the solution with $z(0) = z_{0}$ and fix $s > 0$ small enough that $z(s)$ is defined; by (c), $L(z(s)) < L(z_{0}) = c_{\infty}$. The map $y_{0} \mapsto y(s)$ is continuous in the initial value by :ref[]{to=ode.continuous-dependence}, and $L$ is continuous, so there is a neighbourhood $W$ of $z_{0}$ such that every solution with $y(0) \in W$ satisfies $L(y(s)) < c_{\infty}$. Taking $y(0) = x(t_{n})$ for $n$ large enough that $x(t_{n}) \in W$ gives

$$
L\bigl(x(t_{n}+s)\bigr) < c_{\infty} ,
$$

contradicting Step 4. Hence $z_{0} = x_*$.

**Step 6 (convergence).** If $x(t) \not\to x_*$, there would be $\varepsilon > 0$ and $t_{n} \to \infty$ with $|x(t_{n}) - x_*| \ge \varepsilon$; compactness of $\overline{B_{\delta}}$ would give a subsequence converging to some $z_{0}$ with $|z_{0}-x_*| \ge \varepsilon$, contradicting Step 5. So $x(t) \to x_*$ for every initial point of $U_{\delta}$, and with Step 3 this is asymptotic stability. $\square$
:::

:::remark[Where the hypotheses are used, and how the two sources differ]{provenance=adapted src="strogatz-1994:§7.2, p. 201; hirsch-smale-devaney-2013:§9.2, pp. 193, 199"}
- **Positive definiteness (a)** is used twice: to make $\alpha > 0$ in Step 1, and to bound $L(x(t))$ below in Step 4. Without it the sublevel sets need not shrink onto $x_*$ and nothing is trapped. For $L(x,y) = x^{2}-y^{2}$ and the flow $\dot x = -x$, $\dot y = -y$ one has $\dot L = -2L$, which is negative on part of every neighbourhood and positive on the rest, and $L$ says nothing at all.
- **$\dot L \le 0$ (b)** is used only in Step 2, and only on the ball actually reached. This is why the theorem is local: $L$ need not be defined, let alone a Lyapunov function, outside $\mathcal{O}$.
- **The strict inequality (c)** is used in Steps 4 and 5 and nowhere else. It cannot simply be dropped: the harmonic oscillator $\dot x = y$, $\dot y = -x$ has $L = x^{2}+y^{2}$ with $\dot L \equiv 0$, so (a) and (b) hold, the origin is stable — and it is not asymptotically stable, since every orbit is a circle. What LaSalle adds is the observation that this example fails its hypothesis: the circles are entire solutions in $P\setminus\{x_*\}$ on which $L$ is constant.
- **Two sources, two forms.** :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="p. 193"} state the criterion locally, on an open set $\mathcal{O}$ containing the equilibrium, and conclude stability or asymptotic stability. :cite[Strogatz]{work=strogatz-1994 loc="p. 201"} states it globally: for a continuously differentiable $V$ with $V(x)>0$ for all $x \ne x_*$, $V(x_*)=0$ and $\dot V < 0$ for all $x \ne x_*$, he concludes that $x_*$ is globally asymptotically stable and that the system has no closed orbits, referring to Jordan and Smith for the proof. We follow the local version and prove it. Where we want a global conclusion (Example 2 below) we obtain it from LaSalle applied to the compact sublevel sets of a Lyapunov function whose sublevel sets are bounded, which keeps the argument inside what is proved here.
- **No recipe exists.** Both books say so: :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="p. 193"} describe finding a Lyapunov function as a matter of ingenuity or trial and error, and :cite[Strogatz]{work=strogatz-1994 loc="p. 201"} that there is no systematic construction, though sums of squares often serve. The method below collects the cases in which one can be built rather than guessed.
:::

:::method[Building a Lyapunov function and estimating the basin]{provenance=adapted src="strogatz-1994:§7.2, Example 7.2.3, p. 201; hirsch-smale-devaney-2013:§9.2, pp. 193, 199"}
1. **Try the energy.** For a mechanical or electrical model, take $L$ to be the total energy measured from the equilibrium. Then $\dot L$ is minus the dissipated power, automatically $\le 0$, and usually not strict — which is what LaSalle is for.
2. **Quadratic ansatz with undetermined coefficients.** Put $L = ax^{2} + 2bxy + cy^{2}$, positive definite exactly when $a>0$ and $ac > b^{2}$ (:ref[]{to=linalg.quadratic-forms}). Compute $\dot L$ and choose the coefficients so that the indefinite cross terms cancel, leaving a negative definite leading part; this is the trick of :cite[Strogatz's Example 7.2.3]{work=strogatz-1994 loc="p. 201"}.
3. **Borrow one from the linearization.** If $A = DF(x_*)$ has all eigenvalues with negative real part, pick any symmetric positive definite $Q$ and set
   $$
   P = \int_{0}^{\infty} e^{A^{\mathsf T}t}\,Q\,e^{At}\,dt ,
   $$
   which converges because $\lVert e^{At}\rVert$ decays exponentially. Differentiating the integrand gives $\frac{d}{dt}\bigl(e^{A^{\mathsf T}t}Qe^{At}\bigr) = e^{A^{\mathsf T}t}(A^{\mathsf T}Q + QA)e^{At}$, so by the fundamental theorem of calculus,
   $$
   A^{\mathsf T}P + PA = \int_{0}^{\infty}\frac{d}{dt}\Bigl(e^{A^{\mathsf T}t}Qe^{At}\Bigr)dt = \bigl[e^{A^{\mathsf T}t}Qe^{At}\bigr]_{0}^{\infty} = -Q .
   $$
   $P$ is symmetric and positive definite, and $L(u) = u^{\mathsf T}Pu$ satisfies $\dot L = -u^{\mathsf T}Qu$ along the linearized flow, hence $\dot L < 0$ near $x_*$ for the nonlinear flow as well. This always works at a hyperbolic sink; its value is that it produces an explicit $L$ with which to estimate a basin.
4. **Find the region where $\dot L < 0$.** Bound the higher-order terms of $\dot L$ in terms of $r = |x - x_*|$, and solve for the radius at which the bound changes sign.
5. **Convert it into a basin estimate.** Take the largest sublevel set $\{L \le c\}$ that is contained in the region of step 4 and is bounded. It is closed, positively invariant (because $L$ cannot increase) and, if no entire orbit inside it other than the equilibrium keeps $L$ constant, LaSalle puts all of it in the basin of attraction.
6. **If $\dot L \le 0$ but not $<0$,** identify the set $Z = \{\dot L = 0\}$ and ask which orbits can stay in $Z$ forever. Substituting the constraint $\dot L \equiv 0$ into the equations usually forces the orbit to be the equilibrium, and then LaSalle applies.
:::

:::example[A basin of attraction, with a number]{provenance=original}
Consider

$$
\dot x = -2x + y^{2} ,
\qquad
\dot y = -y + x^{2} .
$$

**Step 1 (equilibria and what linearization gives).** Setting both right-hand sides to zero gives $y = x^{2}$ and $2x = y^{2} = x^{4}$, so $x(x^{3}-2) = 0$: the equilibria are the origin and

$$
q = \bigl(2^{1/3},\,2^{2/3}\bigr) = (1.2599210499\ldots,\; 1.5874010520\ldots) .
$$

The Jacobian is $J(x,y) = \begin{pmatrix}-2 & 2y \\ 2x & -1\end{pmatrix}$, and $J(0,0) = \operatorname{diag}(-2,-1)$. By :ref[]{to=dyn.linearization} the origin is a hyperbolic sink, hence asymptotically stable — but linearization says nothing about *how far* the basin extends. That is what the Lyapunov function will supply.

**Step 2 (the function).** Take the simplest positive definite choice, $L(x,y) = x^{2}+y^{2} = r^{2}$. Then

$$
\dot L = 2x(-2x+y^{2}) + 2y(-y+x^{2}) = -4x^{2} - 2y^{2} + 2xy(x+y) .
$$

**Step 3 (bound the two parts).** The quadratic part obeys $-4x^{2}-2y^{2} \le -2(x^{2}+y^{2}) = -2r^{2}$. For the cubic part, $2|x||y| \le x^{2}+y^{2} = r^{2}$ (arithmetic-geometric mean) and $|x|+|y| \le \sqrt{2}\,r$ (Cauchy-Schwarz), so $|2xy(x+y)| \le \sqrt{2}\,r^{3}$. Therefore

$$
\dot L \;\le\; -2r^{2} + \sqrt{2}\,r^{3} \;=\; r^{2}\bigl(\sqrt{2}\,r - 2\bigr) \;<\; 0
\qquad\text{for } 0 < r < \frac{2}{\sqrt 2} = \sqrt{2} .
$$

**Step 4 (conclusion).** On the open disc $\mathcal{O} = \{r < \sqrt2\}$, $L$ is positive definite and $\dot L < 0$ off the origin: a strict Lyapunov function, so the origin is asymptotically stable. For the basin, fix $\rho < \sqrt2$ and let $P = \{r \le \rho\}$. It is closed and a neighbourhood of the origin; it is positively invariant, because $L = r^{2}$ cannot increase along orbits in $\mathcal{O}$; and $L$ is strictly decreasing off the origin, so no entire orbit in $P\setminus\{0\}$ keeps it constant. LaSalle therefore puts $P$ inside the basin of attraction. Letting $\rho \uparrow \sqrt2$:

$$
\{\,x^{2}+y^{2} < 2\,\} \;\subseteq\; \text{basin of attraction of the origin},
\qquad \sqrt{2} = 1.4142135624\ldots
$$

**Step 5 (how conservative is this?).** Two computations bound the error. First, the basin cannot contain the other equilibrium $q$, which lies at distance

$$
|q| = \sqrt{2^{2/3} + 2^{4/3}} = 2.0266334527\ldots
$$

from the origin, so no estimate of this kind can exceed $2.0267$. Second, the estimate $\sqrt2$ came from a crude bound on the cubic term; putting $x = r\cos\theta$, $y = r\sin\theta$ gives exactly

$$
\dot L = r^{2}\bigl[\,a(\theta) + b(\theta)\,r\,\bigr],
\qquad
a(\theta) = -4\cos^{2}\theta - 2\sin^{2}\theta ,
\qquad
b(\theta) = 2\cos\theta\sin\theta\,(\cos\theta+\sin\theta) ,
$$

and $\dot L < 0$ on the punctured disc of radius $\rho$ exactly when $\rho \le \min\{-a(\theta)/b(\theta) : b(\theta) > 0\}$. Minimising that ratio numerically over $\theta$ gives

$$
\rho_{\max} = 2.0237302380\ldots ,
\qquad \text{attained at } \theta = 0.9234330\ldots\ \text{rad} = 52.909^{\circ} .
$$

So this Lyapunov function, used to the full, reaches to within $0.15\%$ of the absolute ceiling set by $q$, while the one-line bound of Step 3 reaches $70\%$ of the way. Both numbers were computed here, the first in closed form and the second by minimising the ratio over a fine grid in $\theta$ and refining.
:::

:::example[LaSalle where the linearization is silent]{provenance=original}
Consider the nonlinearly restored, linearly damped oscillator

$$
\dot x = y ,
\qquad
\dot y = -x^{3} - 2y .
$$

**Step 1 (linearization fails).** The only equilibrium is the origin, since $y = 0$ and $x^{3} = 0$. Its Jacobian is $\begin{pmatrix}0&1\\0&-2\end{pmatrix}$, with $T = -2$ and $D = 0$: an eigenvalue is zero, so the equilibrium is not hyperbolic and :ref[]{to=dyn.linearization} gives no verdict.

**Step 2 (energy).** The mechanical energy for the restoring force $-x^{3}$ is

$$
L(x,y) = \frac{x^{4}}{4} + \frac{y^{2}}{2} ,
$$

positive definite on the whole plane, with

$$
\dot L = x^{3}y + y(-x^{3}-2y) = -2y^{2} \;\le\; 0 .
$$

So $L$ is a Lyapunov function and the origin is stable — but $\dot L$ vanishes on the entire line $y = 0$, so it is not strict and Lyapunov's theorem stops here.

**Step 3 (LaSalle).** Fix $c > 0$ and let $P_{c} = \{L \le c\}$. It is closed and bounded (because $L(x,y) \to \infty$ as $|(x,y)| \to \infty$), it contains the origin in its interior, and it is positively invariant since $\dot L \le 0$. Suppose an entire solution in $P_{c}$ kept $L$ constant. Then $\dot L \equiv 0$ along it, so $y \equiv 0$; differentiating, $\dot y \equiv 0$, and the second equation gives $-x^{3} - 0 \equiv 0$, so $x \equiv 0$. The only such solution is the equilibrium. LaSalle therefore gives asymptotic stability with $P_{c}$ inside the basin — for every $c$, so the origin is globally asymptotically stable.

**Step 4 (a number).** Start at $(x,y) = (2,0)$, where $L = 2^{4}/4 = 4$. Since $L$ never increases, for all $t \ge 0$

$$
\frac{x(t)^{4}}{4} \le 4 \ \Rightarrow\ |x(t)| \le 2 ,
\qquad
\frac{y(t)^{2}}{2} \le 4 \ \Rightarrow\ |y(t)| \le 2\sqrt2 = 2.8284271247\ldots
$$

Numerical integration of this orbit to $t = 60$ (Runge-Kutta, tolerance $10^{-10}$) confirms the bounds and gives an actual maximum speed $\max_{t}|y(t)| = 1.663$, with $L$ down to $3.8 \times 10^{-5}$ at $t = 60$ and $x(60) = 0.111$. The decay is slow — algebraic, not exponential — because the equilibrium is not hyperbolic: near the origin the damping dominates and $\dot x \approx -x^{3}/2$, which gives $x(t) \sim t^{-1/2}$. Asymptotic stability says nothing about the rate, and here there is no exponential one.
:::

:::application{provenance=original}
The oldest and still the largest use of Lyapunov functions is transient stability in power engineering. A synchronous generator tied to a grid obeys the swing equation $M\ddot\delta + B\dot\delta = P_{m} - P_{\max}\sin\delta$ for the rotor angle $\delta$, which is the damped pendulum that :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="§9.2, pp. 194-195, 199"} analyse with $E = \tfrac12 v^{2} + 1 - \cos\theta$, $\dot E = -bv^{2}$, and then with LaSalle to bound the basin. The engineering question after a fault — will the machine return to synchronism, or slip a pole? — is exactly the question of whether the post-fault state lies in the basin of attraction of the stable equilibrium, and the classical *equal-area criterion* is the statement that the energy at the moment the fault clears must not exceed the energy of the saddle: a sublevel set of a Lyapunov function, computed as in Example 1 above. Whole-network versions of the same construction, under the name *transient energy function* methods, let an operator certify stability without integrating the equations of a system with thousands of states.

The same pattern recurs wherever the dynamics cannot be solved but a quantity is known to be dissipated. In chemical kinetics the free energy, or the relative entropy against the equilibrium composition, decreases along reaction trajectories and so certifies that a complex network relaxes to its equilibrium. In control engineering, Lyapunov's criterion is run backwards: one *designs* a feedback law to make a chosen positive definite function decrease, which is how most nonlinear controllers and adaptive schemes are built and proved. And in dissipative mechanics the criterion explains why linearization can be dispensed with at all: the energy is there before any coordinates are chosen, it does not require the equilibrium to be hyperbolic, and, as Example 2 shows, it answers cases where the Jacobian has nothing to say.
:::
