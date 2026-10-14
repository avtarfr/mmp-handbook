---
id: num.ode-integrators
title: Integrators for ODEs
kind: method
level: core
summary: Builds the one-step and multistep integrators for $y' = f(x,y)$ from the Taylor expansion they imitate, defines the local truncation error and the order, proves that a method of order $p$ whose increment is Lipschitz has global error at most $(C/L)(e^{L(b-a)}-1)h^{p}$, and verifies the orders $1$, $2$, $2$ and $4$ of Euler, Heun, Adams-Bashforth and classical Runge-Kutta on a nonlinear problem with a known solution.
prereqs: [ode.existence-uniqueness, found.taylor-theorem, ode.continuous-dependence, ode.linear-systems]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§27.6, pp. 1020-1028: the first-order problem $dy/dx = f(x,y)$ (27.60) as the object to be solved numerically, the forward-difference recurrence $y_{i+1} = y_i + h f(x_i,y_i)$ (27.62)-(27.63) named as Euler's method, the observation that for $y' = -y$ the recurrence is $y_{i+1} = \\lambda y_i$ and needs $|\\lambda| < 1$, i.e. $0 < h < 2$, the central-difference (Milne) scheme (27.64)-(27.65) and its failure through contamination by the growing solution of $y' = +y$, the Taylor-series method (27.66)-(27.70) with $y'' = f_x + f f_y$, the Adams prediction formula (27.73) obtained by integrating a linear fit to $f$ across the step, the predict-then-correct scheme (i)-(iii) on p. 1025, the second-order Runge-Kutta derivation (27.74)-(27.78) with its one free parameter, and the third- and fourth-order schemes (27.79)-(27.80) given there without derivation; §27.7, pp. 1028-1029: several dependent variables advanced together, and the reduction (27.82)-(27.84) of an $R$-th order equation to $R$ first-order equations"
    pages: "1020-1029"
    role: the problem set-up and notation; Euler's method as a forward difference; the two-term Adams formula and the predictor-corrector pattern; the derivation of the second-order Runge-Kutta family with its free parameter and the classical fourth-order coefficients; the reduction of higher-order equations to first-order systems
  - work: strogatz-1994
    loc: "§2.8, pp. 32-34: Euler's method read off the vector field as a step of length $f(x_n)\\Delta t$, the improved Euler method as a trial step followed by a real step taken with the averaged slope, the statement that the error behaves as $\\Delta t$ for Euler and as $(\\Delta t)^2$ for improved Euler so that the methods are called first and second order, the four numbers $k_1,\\dots,k_4$ of the fourth-order Runge-Kutta method and the weighting $\\tfrac16(k_1+2k_2+2k_3+k_4)$, and the warning that an excessively small step is penalised by accumulated round-off"
    pages: "32-34"
    role: the geometric reading of Euler and improved Euler; the vocabulary of first and second order; the classical fourth-order coefficients in the autonomous form; the round-off floor that stops one simply shrinking the step
  - work: hirsch-smale-devaney-2013
    loc: "§7.5, pp. 154-155: Euler, improved Euler and fourth-order Runge-Kutta written for $x' = f(t,x)$ with a vector-valued $x$, each step described as moving along a straight line through $(t_k,x_k)$ whose slope the method supplies, the improved Euler slope being the average $(m_k+n_k)/2$ and the Runge-Kutta slope the weighted average $(m_k + 2n_k + 2p_k + q_k)/6$; §17.3, p. 395: Gronwall's inequality"
    pages: "154-155, 395"
    role: the same three methods stated for systems and for a non-autonomous field, which is the form used here; the description of every method as a choice of replacement slope; Gronwall's inequality as the continuous analogue of the discrete accumulation lemma proved below
---

:::definition[The problem, the grid, and a one-step method]{provenance=adapted src="rhb-2006:§27.6, Eq. (27.60), p. 1020; hirsch-smale-devaney-2013:§7.5, p. 154"}
Throughout, the object to be solved is the initial-value problem
$$
y' = f(x, y), \qquad y(a) = y_a ,
$$
on an interval $[a,b]$, where $y$ may be a vector in $\mathbb{R}^{m}$ and $f$ is defined on a region $R \subseteq [a,b]\times\mathbb{R}^{m}$. By :ref[]{to=ode.existence-uniqueness} a unique solution exists as long as $f$ is continuous and Lipschitz in $y$, and that is the function the methods below try to produce. Nothing is lost by restricting attention to first-order systems: an equation $y^{(R)} = F(x, y, y', \dots, y^{(R-1)})$ becomes the system $y' = p_1,\ p_1' = p_2,\ \dots,\ p_{R-1}' = F$ in the $R$ unknowns $y, p_1, \dots, p_{R-1}$, and every method here is applied componentwise, all components being advanced through a step before any is advanced through the next. Riley, Hobson and Bence set this reduction out in full; it is the first thing done to a high-order equation before it is handed to software, and it is the reason the units on linear systems (:ref[]{to=ode.linear-systems}) and on integrators speak the same language.

Fix a **step size** $h > 0$ and the **grid** $x_n = a + nh$. The methods produce numbers $y_n$ intended to approximate $y(x_n)$; $y_n$ is a vector when $y$ is.

A **one-step method** is a rule
$$
y_{n+1} \;=\; y_n + h\,\Phi(x_n, y_n; h) ,
$$
in which the **increment function** $\Phi$ is built from evaluations of $f$ alone. The method is **explicit** when $\Phi$ can be evaluated from $(x_n, y_n, h)$ by a finite list of substitutions, as all the methods in this unit can; methods for which $y_{n+1}$ appears on both sides are **implicit** and are the subject of :ref[]{to=num.stiffness}.

A **linear multistep method** with $k$ steps is a rule
$$
y_{n+1} \;=\; \sum_{j=0}^{k-1}\alpha_j\,y_{n-j} \;+\; h\sum_{j=-1}^{k-1}\beta_j\,f(x_{n-j},\,y_{n-j}) ,
$$
with constant coefficients; it is explicit when $\beta_{-1} = 0$. Such a method needs $k$ starting values, and only one of them is given by the problem.
:::

:::definition[Local truncation error, order, convergence]{provenance=original}
Let $y$ denote the exact solution. The **local truncation error** of a one-step method at $(x, y(x))$ is the amount by which the exact solution fails to satisfy the method's own recurrence over one step:
$$
\tau(x, h) \;=\; y(x+h) \;-\; y(x) \;-\; h\,\Phi\bigl(x, y(x); h\bigr) .
$$
It is the error a single step would commit if it started from exact data. The method has **order $p$** on $[a,b]$ if there is a constant $C$, independent of $x$ and $h$, with
$$
\lVert\tau(x,h)\rVert \;\le\; C\,h^{\,p+1} \qquad\text{for all } x \in [a,b] \text{ and all small } h ,
$$
and if $p$ is the largest exponent for which this holds. A method of order $p \ge 1$ is **consistent**: dividing by $h$, the recurrence reproduces the differential equation in the limit.

The **global error** is $e_n = y(x_n) - y_n$, the quantity the user actually suffers. The method **converges** if $\max_{n}\lVert e_n\rVert \to 0$ as $h \to 0$ with $b - a$ fixed. The one power of $h$ that separates $\tau$ from the global error is the bookkeeping of the theorem below: roughly $(b-a)/h$ local errors of size $h^{p+1}$ accumulate into a global error of size $h^{p}$.

For a multistep method the local truncation error is defined by the same substitution of the exact solution into the recurrence, and the order is again the largest $p$ with $\lVert\tau\rVert \le Ch^{p+1}$.
:::

:::definition[The five methods used here]{provenance=adapted src="strogatz-1994:§2.8, pp. 32-34; hirsch-smale-devaney-2013:§7.5, pp. 154-155; rhb-2006:§27.6, Eqs. (27.63), (27.73), (27.78), (27.80), pp. 1021, 1025, 1027, 1028"}
Write $f_n = f(x_n, y_n)$. Each rule below says which slope is used to cross the interval $[x_n, x_{n+1}]$; Hirsch, Smale and Devaney's way of putting it is that a method is nothing but a choice of the straight line along which the step is taken.

**Euler's method** uses the slope at the left endpoint:
$$
y_{n+1} = y_n + h f_n .
$$
Strogatz reads it off the vector field directly: travel for time $h$ at the velocity found where you are.

**The improved Euler (Heun) method** takes a trial step with Euler, evaluates the slope there, and crosses with the average of the two slopes:
$$
\tilde y = y_n + h f_n , \qquad
y_{n+1} = y_n + \tfrac{h}{2}\Bigl( f_n + f(x_{n+1}, \tilde y) \Bigr) .
$$

**The midpoint method** instead uses a half-step probe and crosses with the slope found there:
$$
y_{n+1} = y_n + h\,f\Bigl(x_n + \tfrac{h}{2},\; y_n + \tfrac{h}{2} f_n\Bigr) .
$$

**The classical fourth-order Runge-Kutta method (RK4)** uses four slopes:
$$
\begin{aligned}
k_1 &= f(x_n,\, y_n), &\qquad k_2 &= f\bigl(x_n + \tfrac{h}{2},\; y_n + \tfrac{h}{2}k_1\bigr), \\
k_3 &= f\bigl(x_n + \tfrac{h}{2},\; y_n + \tfrac{h}{2}k_2\bigr), &\qquad k_4 &= f\bigl(x_n + h,\; y_n + h k_3\bigr),
\end{aligned}
$$
$$
y_{n+1} = y_n + \tfrac{h}{6}\bigl(k_1 + 2k_2 + 2k_3 + k_4\bigr) .
$$

**The two-step Adams-Bashforth method (AB2)** is not a one-step method: it reuses the slope already computed at the previous grid point,
$$
y_{n+1} = y_n + \tfrac{h}{2}\bigl(3 f_n - f_{n-1}\bigr) .
$$
Riley, Hobson and Bence derive it by fitting a straight line to $f$ through the two points $(x_{n-1}, f_{n-1})$ and $(x_n, f_n)$ and integrating that line across $[x_n, x_{n+1}]$; the extra term $\tfrac{h}{2}(f_n - f_{n-1})$ is a correction to the Euler step. It costs one evaluation of $f$ per step, against two for Heun and the midpoint rule and four for RK4, because $f_{n-1}$ is kept from the previous step.
:::

:::statement[Convergence of a one-step method, and the orders of the five methods]{provenance=original}
**1 (Convergence).** Let $R = [a,b]\times U$ with $U \subseteq \mathbb{R}^{m}$, let the exact solution $y$ of $y' = f(x,y)$, $y(a) = y_a$ stay in $R$ on $[a,b]$, and consider a one-step method started exactly, $y_0 = y_a$, whose iterates $y_n$ also stay in $R$. Suppose

- (L) the increment function satisfies $\lVert \Phi(x, u; h) - \Phi(x, v; h)\rVert \le L\,\lVert u - v\rVert$ for all $(x,u), (x,v) \in R$ and all $h \in (0, h_0]$, with $L > 0$; and
- (T) the local truncation error obeys $\lVert\tau(x,h)\rVert \le C h^{p+1}$ on $[a,b]$ for $h \in (0, h_0]$.

Then for every $h \in (0,h_0]$ and every grid point $x_n \in [a,b]$,
$$
\lVert y(x_n) - y_n \rVert \;\le\; \frac{C}{L}\Bigl(e^{L(x_n - a)} - 1\Bigr)\,h^{p} .
$$
In particular the method converges, with global error $O(h^{p})$: one power of $h$ is lost relative to the local error.

**2 (Orders).** Let $f$ be as smooth as each statement requires on a neighbourhood of the solution. Then

- Euler's method has order $1$, with local truncation error $\tfrac{1}{2}h^{2}y''(x) + O(h^{3})$;
- the Heun and midpoint methods have order $2$;
- AB2 has order $2$, with local truncation error $\tfrac{5}{12}h^{3}y'''(x) + O(h^{4})$;
- RK4 has order $4$.

**3 (The second-order family).** Every method of the two-stage form
$$
y_{n+1} = y_n + h\Bigl[\alpha_1 f_n + \alpha_2 f\bigl(x_n + \beta h,\, y_n + \beta h f_n\bigr)\Bigr]
$$
has order at least $2$ if and only if
$$
\alpha_1 + \alpha_2 = 1 \qquad\text{and}\qquad \alpha_2\beta = \tfrac12 ,
$$
so the family has one free parameter. Heun is $\alpha_1 = \alpha_2 = \tfrac12$, $\beta = 1$; the midpoint method is $\alpha_1 = 0$, $\alpha_2 = 1$, $\beta = \tfrac12$. No member of the family has order $3$ for all $f$.
:::

:::idea{provenance=original}
Every method here is an attempt to imitate the Taylor expansion of the exact solution without differentiating $f$. The expansion $y(x+h) = y + hy' + \tfrac12 h^{2}y'' + \cdots$ needs $y'' = f_x + f_y f$, $y'''$, and so on; computing those by hand is exactly what Runge-Kutta methods avoid, by evaluating $f$ itself at cleverly placed points and combining the values so that the combination reproduces the Taylor coefficients. Matching through $h^{p}$ is what "order $p$" means, and part 3 shows the matching conditions in the smallest nontrivial case.

The convergence statement is an accumulation argument with one twist. Over a step, the previous error is carried forward and distorted by the method, and a fresh local error $\tau$ is added. Hypothesis (L) says the distortion is at worst a factor $1 + hL$, so the errors obey $\varepsilon_{n+1} \le (1+hL)\varepsilon_n + Ch^{p+1}$. The twist is that summing this geometric recursion produces $\bigl((1+hL)^{n} - 1\bigr)/(hL)$, and the factor $hL$ in the denominator cancels one power of $h$ from the numerator $Ch^{p+1}$; that is where the lost power goes. Finally $(1+hL)^{n} \le e^{nhL}$ converts the discrete growth factor into the exponential that :ref[Gronwall's inequality]{to=ode.continuous-dependence} produces for the continuous problem. The exponential is not an artefact: two exact solutions of the same equation really can separate that fast, so no method can do better.
:::

:::proof[Part 1]{provenance=original}
**Step 1 (one step of the recursion).** Write $e_n = y(x_n) - y_n$ and $\varepsilon_n = \lVert e_n\rVert$. By the definition of the local truncation error applied at $x_n$,
$$
y(x_{n+1}) = y(x_n) + h\,\Phi\bigl(x_n, y(x_n); h\bigr) + \tau(x_n, h) ,
$$
while the method gives $y_{n+1} = y_n + h\Phi(x_n, y_n; h)$. Subtracting,
$$
e_{n+1} = e_n + h\Bigl[\Phi\bigl(x_n, y(x_n); h\bigr) - \Phi(x_n, y_n; h)\Bigr] + \tau(x_n, h) .
$$

**Step 2 (estimate it).** Both $(x_n, y(x_n))$ and $(x_n, y_n)$ lie in $R$, by the hypothesis that the exact solution and the iterates stay there. So hypothesis (L) bounds the bracket by $L\varepsilon_n$, and hypothesis (T) bounds $\tau$ by $Ch^{p+1}$. The triangle inequality gives
$$
\varepsilon_{n+1} \;\le\; (1 + hL)\,\varepsilon_n \;+\; C h^{p+1} .
\tag{$*$}
$$

**Step 3 (an accumulation lemma).** *If $\varepsilon_0 = 0$ and $(*)$ holds with $A = 1+hL > 1$ and $B = Ch^{p+1} \ge 0$, then $\varepsilon_n \le B\,(A^{n}-1)/(A-1)$.* Induct on $n$. The case $n = 0$ reads $\varepsilon_0 \le 0$, which is the hypothesis. If the bound holds at $n$ then
$$
\varepsilon_{n+1} \le A\cdot B\frac{A^{n}-1}{A-1} + B = B\,\frac{A^{n+1} - A + A - 1}{A-1} = B\,\frac{A^{n+1}-1}{A-1} ,
$$
which is the bound at $n+1$.

**Step 4 (substitute and simplify).** Here $A - 1 = hL$, so
$$
\varepsilon_n \;\le\; \frac{C h^{p+1}}{hL}\Bigl((1+hL)^{n} - 1\Bigr) = \frac{C}{L}\,h^{p}\Bigl((1+hL)^{n} - 1\Bigr) .
$$
The single power of $h$ cancelled against $hL$ is the one lost between local and global order.

**Step 5 (exponential form).** For $t \ge 0$ the convexity of the exponential gives $1 + t \le e^{t}$, so $(1+hL)^{n} \le e^{nhL} = e^{L(x_n - a)}$ because $nh = x_n - a$. Substituting into Step 4 gives the claim. The starting value is exact, $\varepsilon_0 = 0$, as assumed in Step 3; if instead $\varepsilon_0 > 0$ the same induction yields the extra term $\varepsilon_0 e^{L(x_n-a)}$. $\square$
:::

:::proof[Part 2, except RK4]{provenance=adapted src="rhb-2006:§27.6, Eqs. (27.68)-(27.70) and (27.73), pp. 1023-1025"}
Throughout, $y$ is the exact solution through $(x, y(x))$, so that $y' = f(x,y(x))$, and all derivatives are evaluated at $x$ unless marked otherwise. We use the chain rule in the form Riley, Hobson and Bence record, $y'' = f_x + f_y\,f$, and Taylor's theorem (:ref[]{to=found.taylor-theorem}).

**Euler.** With $\Phi = f(x, y(x))= y'$,
$$
\tau = y(x+h) - y(x) - h y' = \tfrac12 h^{2} y''(x) + O(h^{3}) ,
$$
which is $O(h^{2})$ and no better unless $y'' \equiv 0$. So $p = 1$.

**The two-stage family, and Heun and midpoint with it.** Expand the second stage of the family in part 3 of the statement by Taylor's theorem in two variables, about $(x, y(x))$:
$$
f\bigl(x + \beta h,\; y + \beta h f\bigr) = f + \beta h\bigl(f_x + f_y f\bigr) + \tfrac12\beta^{2}h^{2}\bigl(f_{xx} + 2f f_{xy} + f^{2}f_{yy}\bigr) + O(h^{3}) .
$$
Hence the increment is
$$
h\Phi = (\alpha_1+\alpha_2)h f + \alpha_2\beta h^{2}\bigl(f_x + f_y f\bigr) + O(h^{3}) = (\alpha_1+\alpha_2)h y' + \alpha_2\beta h^{2} y'' + O(h^{3}) .
$$
The exact increment is $y(x+h) - y(x) = h y' + \tfrac12 h^{2}y'' + \tfrac16 h^{3}y''' + O(h^{4})$. Matching the $h$ and $h^{2}$ terms gives exactly the two conditions $\alpha_1 + \alpha_2 = 1$ and $\alpha_2\beta = \tfrac12$, and these are necessary as well as sufficient because $f$ and the combination $f_x + f_y f$ can be prescribed independently at a point. Heun and the midpoint method satisfy them, so both have order at least $2$.

For the last sentence of part 3, carry the expansion one term further. The $h^{3}$ coefficient produced by the family is
$$
\tfrac12\alpha_2\beta^{2}\bigl(f_{xx} + 2ff_{xy} + f^{2}f_{yy}\bigr) ,
$$
while the exact solution has $\tfrac16 y''' = \tfrac16\bigl(f_{xx} + 2ff_{xy} + f^{2}f_{yy}\bigr) + \tfrac16 f_y\bigl(f_x + f_y f\bigr)$. The second group, $\tfrac16 f_y(f_x+f_yf)$, cannot be produced at all: no choice of $\alpha_2, \beta$ puts a term containing $f_y$ into the $h^{3}$ coefficient. So the family never reaches order $3$, and two stages are genuinely not enough. (This is where the extra stages of RK4 earn their keep.)

**AB2.** Substituting the exact solution, and writing $y'(x-h) = y' - hy'' + \tfrac12 h^{2}y''' + O(h^{3})$,
$$
\tfrac{h}{2}\bigl(3y'(x) - y'(x-h)\bigr) = h y' + \tfrac12 h^{2}y'' - \tfrac14 h^{3}y''' + O(h^{4}) .
$$
Subtracting this from $y(x+h) - y(x) = hy' + \tfrac12 h^{2}y'' + \tfrac16 h^{3}y''' + O(h^{4})$, the first two terms cancel and
$$
\tau = \Bigl(\tfrac16 + \tfrac14\Bigr)h^{3}y''' + O(h^{4}) = \tfrac{5}{12}h^{3}y''' + O(h^{4}) ,
$$
so AB2 has order $2$ with the error constant $5/12$. $\square$
:::

:::remark[RK4, and why its order is asserted rather than derived here]{provenance=adapted src="rhb-2006:§27.6, Eq. (27.80), p. 1028; strogatz-1994:§2.8, pp. 33-34"}
Matching the Taylor expansion through $h^{4}$ for a general $f$ imposes eight conditions on the coefficients of a four-stage Runge-Kutta method, and verifying them by hand is several pages of bookkeeping with no idea in it. Riley, Hobson and Bence print the scheme "without derivation" for the same reason, and Strogatz calls the four numbers cunningly chosen and leaves their choice to an exercise. We follow them in stating the order rather than deriving it, and verify it in two independent ways instead.

*Symbolically.* Expanding $y_{n+1}$ and the exact solution in powers of $h$ with computer algebra, for the non-autonomous field
$$
f(x,y) = \tfrac23 + \tfrac57 x + \tfrac{3}{11}y + \tfrac15 x^{2} + \tfrac{7}{13}xy + \tfrac29 y^{2} + \tfrac{1}{17}x^{3} + \tfrac{4}{19}xy^{2} + \tfrac{1}{23}y^{3} + \tfrac{3}{29}x^{2}y + \tfrac{1}{31}y^{4} + \tfrac{1}{37}x^{4}
$$
at $(x,y) = (\tfrac12, \tfrac13)$, the two series agree through $h^{4}$ and first differ at $h^{5}$, with coefficient $0.0250846$. The same computation returns leading powers $h^{2}$ for Euler, $h^{3}$ for Heun and for the midpoint rule, and $h^{4}$ for the third-order scheme Riley, Hobson and Bence give as their Eq. (27.79) — that is, orders $1$, $2$, $2$ and $3$, confirming the hand derivations above and showing that this particular $f$ is generic enough to detect the true order.

*Numerically.* The error table in the first example below halves the step four times and shows the RK4 error falling by factors tending to $16$, which is the signature of order $4$.
:::

:::remark[Where the hypotheses are used]{provenance=original}
**(L), the Lipschitz condition on $\Phi$, is what makes errors merely grow exponentially instead of arbitrarily.** It is inherited from $f$: for Euler, $\Phi = f$, so (L) is the Lipschitz condition of :ref[]{to=ode.existence-uniqueness} itself. For a multi-stage method each stage is a Lipschitz function of the previous one, so if $f$ has Lipschitz constant $K$ in $y$ on $R$ then $\Phi$ has a Lipschitz constant of the form $L = K(1 + c_1 hK + c_2 h^{2}K^{2} + \cdots)$, bounded by a constant multiple of $K$ for $h \le h_0$. Without (L) the recursion in Step 2 has nothing to bound the propagated error by: the first stage of the proof fails immediately, not just the constant.

**(T) must be uniform in $x$.** The constant $C$ involves derivatives of the solution, through $y''$, $y'''$ and so on. On an interval where the solution approaches a singularity these blow up, and the bound is true but empty. The example below is deliberately set on $[0, \tfrac12]$ for this reason: its exact solution $1/(1-\sin x)$ has a pole at $x = \pi/2$, and the error constants degrade badly as that point is approached.

**The iterates must stay in $R$.** This is a hypothesis, not a conclusion, and it is the one that is usually verified after the fact. It can genuinely fail: for $y' = y^{2}$, $y(0) = 1$, whose solution blows up at $x = 1$, an Euler step from near the pole lands far outside any region on which a Lipschitz constant was computed. In practice one integrates, checks that the computed track stayed inside the region used to compute $L$, and reruns with a smaller step if not.

**Order is a statement about smooth $f$.** Each order calculation differentiates $f$ as many times as the expansion requires: order $p$ needs $f \in C^{p}$ near the solution. Applied to an $f$ with a kink — a switch in a control law, a table lookup, a friction law that changes form at zero velocity — RK4 is not fourth order across the kink, and refining the step buys much less than the table of ratios would suggest. The standard remedy is to stop the integration at the discontinuity and restart.

**The exponential factor is sharp.** Taking $f(x,y) = Ly$ makes $\Phi$ exactly $L$-Lipschitz, and two exact solutions separate by precisely $e^{L(x-a)}$ times their initial gap. So no sharper general bound than part 1 exists, and the $e^{L(b-a)}$ is what makes long integrations of systems with positive Lyapunov exponents (:ref[]{to=dyn.lyapunov-exponents}) untrustworthy trajectory by trajectory.

**Round-off sets a floor that the theorem does not see.** Part 1 says the error decreases like $h^{p}$ forever, which is false in floating-point arithmetic: each of the $(b-a)/h$ steps commits a rounding error of relative size about the unit roundoff $u$ (:ref[]{to=num.floating-point-errors}), and these accumulate roughly as $u(b-a)/h$, growing as $h$ shrinks. The total error is therefore U-shaped in $h$, with a minimum near $h \sim u^{1/(p+1)}$. Strogatz makes exactly this point when he warns against simply choosing a tiny step and leaving it there.
:::

:::method[Running an integrator on a real problem]{provenance=adapted src="rhb-2006:§27.6.3, p. 1025 and §27.7, Eqs. (27.82)-(27.84), pp. 1028-1029"}
1. **Reduce to a first-order system.** Introduce $p_r = y^{(r)}$ as in the first definition, so the problem becomes $Y' = F(x, Y)$ with $Y \in \mathbb{R}^{m}$. Advance all components through each step before starting the next.
2. **Non-dimensionalise.** Scale $x$ and each component of $Y$ so that the quantities of interest are of order one. Step-size choices, error tolerances and the convergence table all become meaningful only after this.
3. **Estimate the two constants.** Compute $K = \sup\lVert \partial F/\partial Y\rVert$ over the region you expect to visit; this gives the Lipschitz constant and the factor $e^{K(b-a)}$ that no method can avoid. If $e^{K(b-a)}$ is astronomically large, no accuracy target is achievable and the question being asked of the computation should change.
4. **Choose the method by the cost of $F$.** Count evaluations per step: $1$ for Euler and AB2, $2$ for Heun and midpoint, $4$ for RK4. When $F$ is expensive and the solution is smooth, the higher order wins easily, because reaching a tolerance $\eta$ needs $h \sim (\eta)^{1/p}$ and so $\sim \eta^{-1/p}$ steps.
5. **Start a multistep method with a one-step method** of at least the same order. AB2 needs $y_1$ as well as $y_0$; take it from one RK4 step, whose $O(h^{5})$ error cannot pollute an $O(h^{2})$ computation. Riley, Hobson and Bence note the same need for the central-difference and Adams schemes and suggest a Taylor expansion; a Runge-Kutta step is the modern answer and needs no derivatives of $f$.
6. **Measure the order, do not assume it.** Run at $h$, $h/2$, $h/4$ and tabulate the differences of the answers. Successive differences falling by $2^{p}$ confirm the order and simultaneously confirm that the solution is smooth enough for it.
7. **Control the step by step doubling.** Take one step of size $h$ and two of size $h/2$ from the same point. For a method of order $p$ the difference of the two answers is about $(2^{p}-1)/2^{p}$ times the error of the finer one, which gives an error estimate for free; accept the step if it is below tolerance, and set the next step to $h\,(\eta/\text{estimate})^{1/(p+1)}$ with a safety factor of about $0.9$. Richardson extrapolation can also be used to improve the answer, at the price of losing the error estimate.
8. **Predict and correct, if the method is implicit.** Riley, Hobson and Bence's pattern — predict $y_{n+1}$ with an explicit formula, evaluate $f$ there, then recompute $y_{n+1}$ with the better formula — is the cheap way to use an implicit formula without solving an equation. Iterating the correction converges only when $h$ times the Lipschitz constant is small, which is precisely what fails for the stiff problems of :ref[]{to=num.stiffness}; there the corrector must be solved properly, by Newton's method (:ref[]{to=num.root-finding}).
9. **Check a conserved quantity** if the problem has one. A drift in the energy of a mechanical system is the clearest diagnostic there is, and for long integrations it is a reason to change the class of method entirely (:ref[]{to=num.symplectic-integrators}).
:::

:::example[Four methods on a nonlinear problem with a known solution]{provenance=original}
Take
$$
y' = y^{2}\cos x , \qquad y(0) = 1 ,
$$
whose solution is found by separation: $-1/y = \sin x + c$ with $c = -1$, so
$$
y(x) = \frac{1}{1 - \sin x} ,
$$
valid up to the pole at $x = \pi/2$. We integrate to $b = \tfrac12$, where $y(\tfrac12) = 1/(1 - \sin\tfrac12) = 1.920954780068805$. All arithmetic below was done in $40$-digit precision so that nothing reported is round-off.

**One step by hand, $h = 0.1$.** Here $f(0,1) = 1$, so Euler gives $y_1 = 1.1$. For RK4,
$$
k_1 = 1, \quad k_2 = f(0.05,\, 1.05) = 1.101122162, \quad k_3 = f(0.05,\, 1.0550561) = 1.111752252, \quad k_4 = f(0.1,\, 1.1111752) = 1.228541972 ,
$$
and $y_1 = 1 + \tfrac{0.1}{6}(k_1 + 2k_2 + 2k_3 + k_4) = 1.110904846666$. The exact value is $y(0.1) = 1.110905490709$. The three errors after one step are
$$
\text{Euler } -1.0905\times10^{-2}, \qquad \text{Heun } -7.0774\times10^{-4}, \qquad \text{RK4 } -6.4404\times10^{-7} ,
$$
in the ratio $1 : 6.49\times10^{-2} : 5.91\times10^{-5}$ — already the $h^{2}$, $h^{3}$, $h^{5}$ hierarchy of local errors at a single step size.

**Global errors at $x = \tfrac12$.** Each column gives the error $y_N - y(\tfrac12)$ and, beneath, the factor by which it shrinks when $h$ is halved.

| $h$ | Euler | Heun | midpoint | AB2 | RK4 |
|---|---|---|---|---|---|
| $0.1$ | $-1.56455\times10^{-1}$ | $-1.43004\times10^{-2}$ | $-1.51474\times10^{-2}$ | $-3.18433\times10^{-2}$ | $-2.57489\times10^{-5}$ |
| $0.05$ | $-8.88446\times10^{-2}$ | $-3.88394\times10^{-3}$ | $-4.24395\times10^{-3}$ | $-1.05151\times10^{-2}$ | $-1.70535\times10^{-6}$ |
| $0.025$ | $-4.77691\times10^{-2}$ | $-1.00876\times10^{-3}$ | $-1.12144\times10^{-3}$ | $-2.97218\times10^{-3}$ | $-1.09365\times10^{-7}$ |
| $0.0125$ | $-2.48381\times10^{-2}$ | $-2.56773\times10^{-4}$ | $-2.88046\times10^{-4}$ | $-7.85310\times10^{-4}$ | $-6.91714\times10^{-9}$ |
| $0.00625$ | $-1.26747\times10^{-2}$ | $-6.47541\times10^{-5}$ | $-7.29769\times10^{-5}$ | $-2.01464\times10^{-4}$ | $-4.34786\times10^{-10}$ |
| $0.003125$ | $-6.40362\times10^{-3}$ | $-1.62578\times10^{-5}$ | $-1.83651\times10^{-5}$ | $-5.09951\times10^{-5}$ | $-2.72496\times10^{-11}$ |
| ratios | $1.761,\,1.860,\,1.923,\,1.960,\,1.979$ | $3.682,\,3.850,\,3.929,\,3.965,\,3.983$ | $3.569,\,3.784,\,3.893,\,3.947,\,3.974$ | $3.028,\,3.538,\,3.785,\,3.898,\,3.951$ | $15.10,\,15.59,\,15.81,\,15.91,\,15.96$ |

The five columns converge to the factors $2$, $4$, $4$, $4$ and $16$, confirming orders $1$, $2$, $2$, $2$ and $4$. Heun and the midpoint rule, the two members of the family of part 3 that we singled out, cost the same and differ only in their error constants: $1.665$ against $1.881$, so on this problem Heun's error is smaller by about $11\%$ at a fixed step. Since the error goes as $h^{2}$, that buys only a $6\%$ larger step at a given tolerance, which is no reason to prefer one over the other. AB2 approaches its asymptotic factor more slowly than Heun, as a two-step method with a larger error constant should: at $h = 0.1$ its error is $2.2$ times Heun's, although both are second order.

**Cost at a fixed accuracy.** Read an error constant off the finest row, $|e| \approx C h^{p}$: it is $C = 2.0492$ for Euler, $1.6648$ for Heun and $0.28573$ for RK4. Solving $Ch^{p} = 10^{-5}$ and dividing $\tfrac12$ by the result gives

| method | $h$ for $10^{-5}$ | steps | evaluations of $f$ |
|---|---|---|---|
| Euler | $4.88\times10^{-6}$ | $102\,458$ | $102\,458$ |
| Heun | $2.451\times10^{-3}$ | $205$ | $410$ |
| RK4 | $7.691\times10^{-2}$ | $7$ | $28$ |

So RK4 costs about $3660$ times fewer evaluations than Euler here and about $15$ times fewer than Heun, and both advantages grow without limit as the tolerance tightens: the evaluation count scales as $\eta^{-1}$ for Euler, $\eta^{-1/2}$ for Heun and $\eta^{-1/4}$ for RK4.

**The convergence bound, checked.** Take the region $R = [0,\tfrac12]\times[0,2]$, which contains both the exact solution and every Euler iterate computed above (the largest is $1.7645$). On $R$, $|\partial f/\partial y| = |2y\cos x| \le 4$, so $L = 4$ serves for Euler, whose $\Phi$ is $f$. The local error constant is $C = \tfrac12\max|y''|$, and $y'' = 2y^{3}\cos^{2}x - y^{2}\sin x$ increases on $[0,\tfrac12]$ from $2$ to $9.149247$, so $C = 4.574624$. Part 1 then predicts
$$
|y(\tfrac12) - y_N| \;\le\; \frac{C}{L}\bigl(e^{L/2} - 1\bigr)h \;=\; \frac{4.574624}{4}\bigl(e^{2}-1\bigr)h \;=\; 7.30688\,h .
$$
At $h = 0.1$ this is $0.730688$ against the measured $0.156455$, at $h = 0.05$ it is $0.365344$ against $0.088845$, and at $h = 0.025$ it is $0.182672$ against $0.047769$. The bound holds with a factor of between $3.8$ and $4.7$ to spare, and the slack has the expected cause: it assumes the worst case $|y''| = 9.149$ at every step, whereas $y''$ starts at $2$ and only reaches $3$ at $x = 0.1535$, climbing through $3.424$ at $x = 0.2$ and $3.968$ at $x = 0.25$ before its final $9.149$; and it assumes the error is amplified at the maximal rate throughout.
:::

:::application{provenance=original}
**Every simulation of a continuous system is an instance of this.** The equations of a spacecraft trajectory, a reaction network, a power-system transient, a population model or a climate model's physics column are first-order systems after the reduction above, and all of them are advanced by one of the methods here or a descendant.

**Why RK4 and not something better.** A production solver is usually an embedded Runge-Kutta pair — two methods of adjacent order sharing their stage evaluations, so that the difference of the two answers is an error estimate at almost no extra cost, which drives the step-size controller of step 7. The classical RK4 survives because it is the cheapest scheme whose order is high enough that smooth problems are limited by round-off rather than truncation at a comfortable step size, and because its four stages map cleanly onto a force routine that is called once per stage.

**Where order is the wrong figure of merit.** Two situations in this chapter defeat the analysis above, and each has its own unit. A system with widely separated time scales forces the step far below what accuracy needs, because an explicit method becomes unstable long before it becomes inaccurate; the diagnosis and the implicit cure are in :ref[]{to=num.stiffness}. A Hamiltonian system integrated over millions of periods suffers a slow drift in its energy that no increase of order removes, because the drift is a structural defect rather than a truncation error; the remedy, a method that is exactly symplectic at every step, is in :ref[]{to=num.symplectic-integrators}.

**Method of lines.** Discretising a partial differential equation in space alone (:ref[]{to=num.finite-differences}, :ref[]{to=num.spectral-methods}) leaves a large system of ordinary differential equations in time, to which the methods here apply directly. This is how most time-dependent PDE codes are organised, and it is why the stability restrictions of :ref[]{to=num.von-neumann-stability} and the stiffness of :ref[]{to=num.stiffness} are two views of a single phenomenon: the eigenvalues of the spatial discretisation grow like $(\Delta x)^{-2}$ for a diffusion operator, and the explicit integrator's step must shrink to match.
:::
