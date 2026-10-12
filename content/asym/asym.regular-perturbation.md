---
id: asym.regular-perturbation
title: Regular perturbation expansions
kind: method
level: core
summary: 'Expands the unknown of a problem carrying a small parameter $\epsilon$ in powers of $\epsilon$ and solves the resulting hierarchy order by order: the unit gives the non-degeneracy condition that makes every coefficient computable, the recipe, and the secular terms that destroy the approximation after a time of order $1/\epsilon$.'
prereqs: [found.taylor-theorem, found.implicit-inverse-function, ode.constant-coefficients, ode.variation-of-parameters, ode.harmonic-oscillator, asym.asymptotic-series]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§7.6 Weakly nonlinear oscillators, pp. 215-218: the name and the power-series ansatz (4) (p. 216), the hierarchy obtained by equating coefficients of each power of $\\epsilon$, Eqs. (8)-(13) (pp. 216-217), the resonant forcing and the secular term, Eqs. (15)-(16) (p. 217), the resulting restriction to times $t \\ll 1/\\epsilon$ (p. 217), and the two ways in which the two-term approximation misrepresents the solution for large $t$ (p. 218)"
    pages: "215-218"
    role: the term regular perturbation theory and the ansatz; the rule that the data independent of $\epsilon$ is carried entirely by the leading term; the diagnosis of secular terms as resonant forcing of the leading-order operator, and the time scale on which the truncated expansion remains useful
  - work: stakgold-holst-2011
    loc: "§9.3 Perturbation theory for linear problems, pp. 584-590: the family $P(\\epsilon)$ of boundary-value problems (9.3.1) and its base problem (9.3.2); the coefficients of the expansion obtained by differentiating the problem with respect to $\\epsilon$, Eqs. (9.3.4)-(9.3.5), and the contraction-mapping proof that $P(\\epsilon)$ has exactly one solution for $|\\epsilon| \\le 6$ (pp. 585-586); the implicit-function-theorem argument for the perturbed eigenvalue branch, Eqs. (9.3.22)-(9.3.23) (p. 589); the solvability condition that fixes the first-order eigenvalue shift, Eqs. (9.3.26)-(9.3.30) (pp. 589-590)"
    pages: "584-590"
    role: parametric differentiation as the systematic way to generate the coefficients; the implicit-function-theorem device that makes a perturbation branch well defined and its coefficients unique; the first-order eigenvalue shift of a Sturm-Liouville problem obtained from the solvability condition, with the explicit example $-u'' + (1+\epsilon x^2)u = \mu u$
  - work: rhb-2006
    loc: "§19.2, the worked example on p. 671: the first-order change in the ground-state energy of a quantum system perturbed by an extra Hamiltonian term $H'$ is the expectation value $\\langle 0 | H' | 0 \\rangle$"
    pages: "671"
    role: the quantum-mechanical reading of the first-order eigenvalue shift, used in the application block
---

:::definition[A perturbation family and its regular expansion]{provenance=adapted src="strogatz-1994:§7.6, Eq. (4), p. 216; stakgold-holst-2011:§9.3, Eqs. (9.3.1)-(9.3.2), pp. 584-585"}
Many problems of physics come as a **family** $P(\epsilon)$ indexed by a real parameter $\epsilon$, in which the member $P(0)$ can be solved and the member of interest has $\epsilon$ small but non-zero. Stakgold and Holst write such a family out for a boundary-value problem; Strogatz writes one for an initial-value problem. In either case the unknown is a function $u(\,\cdot\,;\epsilon)$, and the **base problem** is $P(0)$ with its known solution $u_0$.

A **regular perturbation expansion** of order $k$ is the ansatz

$$
u(\,\cdot\,;\epsilon) \;=\; u_0 + \epsilon\,u_1 + \epsilon^{2}u_2 + \cdots + \epsilon^{k}u_k + o(\epsilon^{k}) ,
$$

in which the coefficients $u_1, u_2, \dots$ do not depend on $\epsilon$ and are to be found from $P(\epsilon)$ itself. Strogatz calls the technique *regular perturbation theory*. Three things are being assumed, and each has to be checked rather than hoped for.

- **The limit is of the same type.** Setting $\epsilon = 0$ in $P(\epsilon)$ must leave a problem of the same kind — same order of equation, same number of boundary conditions, same number of roots — and not a degenerate one. When it does not, the family is **singularly** perturbed and this unit's method fails; see :ref[]{to=asym.boundary-layers}.
- **The limit solution is non-degenerate.** The base solution must be isolated in a sense made precise in the next block, so that $u_0$ is the unique starting point of a branch and not one of several merging ones.
- **The expansion is uniform on the region of interest.** The error terms must be small uniformly in the independent variable over the whole interval or domain where the answer is wanted. For an initial-value problem posed on $0 \le t < \infty$ this is the assumption that fails most often, and the `remark` below says how.

Nothing in the ansatz requires the series to converge. In many problems the coefficients $u_j$ grow so fast that the series diverges for every $\epsilon \neq 0$ and is useful only as an :ref[asymptotic series]{to=asym.asymptotic-series}, truncated at a finite order.
:::

:::statement[Regular perturbation of a simple root]{provenance=adapted src="stakgold-holst-2011:§9.3, pp. 588-589"}
Let $U \subseteq \mathbb{R}^{2}$ be open, let $m \ge 1$, and let $F : U \to \mathbb{R}$ be of class $C^{m}$. Suppose $(x_\ast, 0) \in U$ and

$$
F(x_\ast, 0) = 0 , \qquad \frac{\partial F}{\partial x}(x_\ast,0) \;\neq\; 0 .
$$

Then:

1. **(Existence of the branch.)** There are $\delta > 0$ and $\eta > 0$ and exactly one function $x : (-\eta,\eta) \to (x_\ast - \delta, x_\ast + \delta)$ with $x(0) = x_\ast$ and $F(x(\epsilon),\epsilon) = 0$ for all $|\epsilon| < \eta$; moreover $x$ is of class $C^{m}$.
2. **(The expansion exists.)** For every $k \le m$ there are constants $c_1, \dots, c_k$ with
   $$
   x(\epsilon) \;=\; x_\ast + c_1\epsilon + c_2\epsilon^{2} + \cdots + c_k\epsilon^{k} + o(\epsilon^{k}) \qquad (\epsilon \to 0) ,
   $$
   namely $c_j = x^{(j)}(0)/j!$.
3. **(The coefficients are computable in order.)** Substitute the truncated expansion into $F$, expand in powers of $\epsilon$ by Taylor's theorem about $(x_\ast,0)$, and set the coefficient of $\epsilon^{j}$ to zero. For each $j \le k$ the resulting equation has the form
   $$
   \frac{\partial F}{\partial x}(x_\ast,0)\,c_j \;+\; R_j(c_1,\dots,c_{j-1}) \;=\; 0 ,
   $$
   where $R_j$ depends only on the earlier coefficients and on partial derivatives of $F$ at $(x_\ast,0)$. Hence $c_1, \dots, c_k$ are determined successively and uniquely.

Stakgold and Holst use exactly this device — a scalar equation $F(\delta,\epsilon) = 0$ with $\partial F/\partial\delta \neq 0$ at the origin, resolved by the implicit function theorem — to show that a simple eigenvalue of a compact self-adjoint operator moves along a well-defined branch when the operator is perturbed. The statement above is the scalar case on its own, stripped of the operator setting.
:::

:::idea{provenance=original}
Order-by-order bookkeeping looks like an act of faith: one writes down a series whose terms are unknown, substitutes it into the problem, and reads off equations. It works for one reason only. The unknown enters $F$ at first order through $\partial F/\partial x$, so when the powers of $\epsilon$ are collected, the new coefficient $c_j$ appears in the $\epsilon^{j}$ equation *linearly*, multiplied by the single number $\partial F/\partial x(x_\ast,0)$, and everything else in that equation is already known. If that number is not zero, each equation is a one-line division. If it is zero, the $\epsilon^{j}$ equation says nothing about $c_j$, and the whole scheme collapses at the first order where this happens. Everything else — existence of the branch, smoothness, and the fact that the numbers produced really are the Taylor coefficients of a genuine solution — is the implicit function theorem.
:::

:::proof{provenance=original}
1. **The branch.** Apply the :ref[implicit function theorem]{to=found.implicit-inverse-function} to $F$ at $(x_\ast,0)$, solving for $x$ in terms of $\epsilon$. The hypothesis $\partial F/\partial x(x_\ast,0) \neq 0$ is precisely its non-degeneracy condition, and $F \in C^{m}$ gives a solution function $x(\epsilon)$ of class $C^{m}$, unique within a neighbourhood. This proves (1).

2. **The expansion.** Since $x \in C^{m}$ on $(-\eta,\eta)$, :ref[Taylor's theorem]{to=found.taylor-theorem} gives, for each $k \le m$,
   $$
   x(\epsilon) = \sum_{j=0}^{k} \frac{x^{(j)}(0)}{j!}\,\epsilon^{j} + o(\epsilon^{k}) ,
   $$
   with $x^{(0)}(0) = x_\ast$. This is (2), with $c_j = x^{(j)}(0)/j!$.

3. **The shape of the $\epsilon^{j}$ equation.** Write $h = x - x_\ast$ and expand $F$ about $(x_\ast,0)$ by Taylor's theorem in two variables to total order $k$:
   $$
   F(x_\ast + h,\ \epsilon) \;=\; \sum_{\substack{p+q \le k \\ p+q \ge 1}} \frac{1}{p!\,q!}\,\partial_x^{p}\partial_\epsilon^{q}F(x_\ast,0)\; h^{p}\epsilon^{q} \;+\; o\bigl((|h|+|\epsilon|)^{k}\bigr) ,
   $$
   the constant term being absent because $F(x_\ast,0) = 0$. Now put $h = c_1\epsilon + \cdots + c_k\epsilon^{k} + o(\epsilon^{k})$, which is $O(\epsilon)$, so that $h^{p}\epsilon^{q} = O(\epsilon^{p+q})$. Collect the coefficient of $\epsilon^{j}$ for a fixed $j \le k$. A term with $p + q \le j$ can contribute, and the coefficient $c_j$ can appear in it only through a factor of $h$ carrying the power $\epsilon^{j}$; since $h = O(\epsilon)$, that requires $p = 1$ and $q = 0$. Every other contribution to the $\epsilon^{j}$ coefficient is built from $c_1, \dots, c_{j-1}$ and from derivatives of $F$ at $(x_\ast,0)$. Writing those contributions as $R_j(c_1,\dots,c_{j-1})$, the coefficient of $\epsilon^{j}$ is
   $$
   \partial_x F(x_\ast,0)\,c_j + R_j(c_1,\dots,c_{j-1}) .
   $$

4. **Why that coefficient vanishes.** By (1), $F(x(\epsilon),\epsilon) = 0$ identically on $(-\eta,\eta)$. Hence the function $\epsilon \mapsto F(x(\epsilon),\epsilon)$, which is $C^{m}$, has all derivatives zero at $\epsilon = 0$ up to order $m$, so its Taylor polynomial of order $k$ is identically zero and every coefficient of $\epsilon^{j}$, $j \le k$, vanishes.

5. **Solving.** Combining steps 3 and 4, $\partial_x F(x_\ast,0)\,c_j = -R_j(c_1,\dots,c_{j-1})$ for $j = 1,\dots,k$. Because $\partial_x F(x_\ast,0) \neq 0$ — the hypothesis used a second time, now not for existence but for solvability — this determines $c_j$ uniquely from its predecessors, by induction on $j$. This is (3). $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
The condition $\partial_x F(x_\ast,0) \neq 0$ carries the whole statement, and it does so twice: once in the implicit function theorem, to produce a branch at all, and once at every order, to solve for $c_j$. Both failures are visible in two-line examples.

- **A double root.** $F(x,\epsilon) = x^{2} - \epsilon$ has $F(0,0) = 0$ and $\partial_x F(0,0) = 0$. The roots are $x = \pm\sqrt{\epsilon}$: there are two branches for $\epsilon > 0$ and none for $\epsilon < 0$, and neither branch has an expansion in powers of $\epsilon$, because $\sqrt{\epsilon}$ is not differentiable at $0$. The order-$\epsilon$ equation of the method confirms the diagnosis without any knowledge of the answer: it reads $0 \cdot c_1 = 1$, which has no solution. The cure is to change the gauge, expanding in powers of $\epsilon^{1/2}$ instead of $\epsilon$.
- **A root that escapes.** $F(x,\epsilon) = \epsilon x^{2} + x - 1$ loses a root at $\epsilon = 0$: the quadratic has two roots for $\epsilon \neq 0$, the linear limit only one. The surviving branch is regular, $x = 1 - \epsilon + 2\epsilon^{2} + O(\epsilon^{3})$. The other root is $x = -1/\epsilon - 1 + O(\epsilon)$ and runs off to infinity as $\epsilon \to 0$; no expansion in non-negative powers of $\epsilon$ can reach it. This is the algebraic model of the degeneracy that produces boundary layers in differential equations, where setting $\epsilon = 0$ lowers the order and a solution is lost; see :ref[]{to=asym.boundary-layers}.
- **Finite smoothness.** $F \in C^{m}$ bounds the number of terms. With $F$ merely $C^{1}$ the branch exists and is differentiable, so $c_1$ is meaningful, but $c_2$ need not exist.

Nothing above claims convergence. Even for $F$ real-analytic, where the branch is analytic and the series converges for small $|\epsilon|$, the radius of convergence is set by the nearest value of $\epsilon$ at which two branches collide, which is usually not known in advance. For differential equations convergence is the exception; the expansion is normally an :ref[asymptotic series]{to=asym.asymptotic-series} and the honest statement is the $o(\epsilon^{k})$ of the theorem, for fixed $k$ as $\epsilon \to 0$.
:::

:::method[Regular perturbation, order by order]{provenance=adapted src="strogatz-1994:§7.6, pp. 216-217; stakgold-holst-2011:§9.3, Eqs. (9.3.1)-(9.3.5), pp. 584-585"}
1. **Non-dimensionalise first, then name $\epsilon$.** Scale the variables so that the small parameter is a dimensionless ratio. Without this step "small" has no meaning and the ordering of terms is arbitrary.
2. **Inspect the limit problem.** Set $\epsilon = 0$ and ask whether what remains is a problem of the same type with a solvable, isolated solution. If the order of the differential equation drops, a boundary condition becomes unenforceable, or roots disappear, stop: the problem is singular, and :ref[]{to=asym.boundary-layers} is the relevant method.
3. **Insert the ansatz.** Write $u = u_0 + \epsilon u_1 + \epsilon^{2}u_2 + \cdots$ and substitute. Expand every nonlinear function of $u$ in a Taylor series about $u_0$, and expand every coefficient that depends on $\epsilon$ as well.
4. **Collect powers of $\epsilon$ and equate each coefficient to zero.** This is legitimate because the equation is to hold for a range of $\epsilon$, not one value: a function of $\epsilon$ that vanishes identically has all Taylor coefficients zero.
5. **Distribute the data.** Initial or boundary data that do not depend on $\epsilon$ are carried entirely by $u_0$; every higher coefficient gets the corresponding homogeneous data. If the data do depend on $\epsilon$, expand them too and give the $\epsilon^{j}$ part to $u_j$.
6. **Solve the hierarchy downwards.** The $O(1)$ problem is the base problem. Every later problem has the *same* linear operator — the linearisation of the base problem about $u_0$ — with a right-hand side assembled from the coefficients already found. One linear solve per order, in order.
7. **Watch for a kernel.** If that common operator has a non-trivial kernel, the order-$j$ problem is solvable only if its right-hand side satisfies a solvability condition (orthogonality to the kernel of the adjoint; see :ref[]{to=green.fredholm-alternative}). That condition is not an obstacle but the point: it determines a parameter left free at lower order, such as an eigenvalue or a frequency. In initial-value problems on an unbounded interval the same kernel shows up instead as resonant forcing and a secular term; see the next remark.
8. **State the range of validity.** Compare the first term dropped with the last term kept. The truncation at order $k$ is informative only where $|\epsilon^{k+1}u_{k+1}| \ll |\epsilon^{k}u_k|$, and the coefficients $u_j$ often grow with the independent variable, which turns this into a restriction on the variable as well as on $\epsilon$.
:::

:::example[Kepler's equation: the eccentric anomaly to third order]{provenance=original}
A body on an elliptical orbit of eccentricity $e$ has eccentric anomaly $E$ related to the mean anomaly $M$ (which grows linearly in time) by Kepler's equation

$$
E - e\sin E \;=\; M .
$$

This is transcendental in $E$ and has no closed-form inverse, but $e$ is small for most planets, so expand in it. Take $M$ fixed and set $F(E,e) = E - e\sin E - M$. At $e = 0$ the root is $E_\ast = M$, and

$$
\frac{\partial F}{\partial E}(M,0) \;=\; 1 - e\cos E\Big|_{e=0} \;=\; 1 \;\neq\; 0 ,
$$

so the statement above applies: there is a unique smooth branch $E(e)$ with $E(0) = M$. (In fact $\partial_E F = 1 - e\cos E \ge 1 - e > 0$ for all $E$ whenever $0 \le e < 1$, so the root is unique and the branch is global in $E$; only the *expansion in powers of $e$* is a local statement.)

**Order by order.** Write $E = M + eE_1 + e^{2}E_2 + e^{3}E_3 + O(e^{4})$ and expand $\sin E$ about $M$:

$$
\sin E = \sin M + (E - M)\cos M - \tfrac12 (E-M)^{2}\sin M + O\bigl((E-M)^{3}\bigr) .
$$

Substituting and collecting powers of $e$ in $E - e\sin E - M = 0$:

- $O(e)$: $\;E_1 - \sin M = 0$, so $E_1 = \sin M$.
- $O(e^{2})$: $\;E_2 - E_1\cos M = 0$, so $E_2 = \sin M\cos M = \tfrac12\sin 2M$.
- $O(e^{3})$: $\;E_3 - \bigl(E_2\cos M - \tfrac12 E_1^{2}\sin M\bigr) = 0$, so $E_3 = \sin M\cos^{2}M - \tfrac12\sin^{3}M = \sin M - \tfrac32\sin^{3}M$.

Note the shape promised by part 3 of the statement: at every order the new coefficient appears alone, multiplied by $\partial_E F(M,0) = 1$, and everything else is already known. Hence

$$
E \;=\; M + e\sin M + \tfrac12 e^{2}\sin 2M + e^{3}\bigl(\sin M - \tfrac32\sin^{3}M\bigr) + O(e^{4}) .
$$

**A number to check.** Take $M = 1$ (radian) and $e = 0.2$, close to Mercury's eccentricity. Solving $E - 0.2\sin E = 1$ numerically gives $E = 1.185324$ to six decimals. The truncations are

| order kept | value | error |
|---|---|---|
| $0$ | $1.000000$ | $-1.85 \times 10^{-1}$ |
| $1$ | $1.168294$ | $-1.70 \times 10^{-2}$ |
| $2$ | $1.186480$ | $+1.16 \times 10^{-3}$ |
| $3$ | $1.186062$ | $+7.4 \times 10^{-4}$ |

The first two corrections each cut the error by about an order of magnitude, as a series in $e = 0.2$ should. The third does less, because the $O(e^{4})$ coefficient $\tfrac13\sin 4M - \tfrac16\sin 2M$ happens to be large at $M = 1$; adding it gives $1.185416$, error $+9.2\times10^{-5}$. This is normal behaviour and not a sign of failure: the error after keeping $k$ terms is $O(e^{k+1})$ as $e \to 0$ for fixed $k$, which says nothing about the ordering of individual terms at a fixed $e$. (Kepler's equation is the rare case where the convergence question is settled: the series in $e$ converges for $e$ below the Laplace limit, about $0.6627$.)
:::

:::remark[Secular terms: why the expansion expires at $t \sim 1/\epsilon$]{provenance=adapted src="strogatz-1994:§7.6, Eqs. (15)-(17) and the two objections, pp. 217-218"}
On a bounded interval of the independent variable, a regular expansion with smooth coefficients is as good as its last term. On an unbounded interval it usually is not, and the reason is visible in the hierarchy of step 6 of the method.

Consider an oscillatory base problem, so that the common linear operator of the hierarchy is $d^{2}/dt^{2} + \omega_0^{2}$ and the leading solution $u_0$ oscillates at frequency $\omega_0$. The right-hand side of the order-$\epsilon$ problem is built out of $u_0$, so it generally contains a component at that same frequency $\omega_0$. That is resonant forcing of an undamped oscillator, and its response grows linearly: $u_1$ contains a term proportional to $t\sin\omega_0 t$ or $t\cos\omega_0 t$. Strogatz calls such a term, one that grows without bound in $t$, a **secular term**.

A secular term does not mean the calculation is wrong. The bound in the theorem is an estimate at fixed $t$ as $\epsilon \to 0$, and it holds. What a secular term destroys is *uniformity*: the two-term approximation $u_0 + \epsilon u_1$ is a genuine improvement on $u_0$ only while $\epsilon|u_1| \ll |u_0|$, that is while

$$
\epsilon t \;\ll\; 1 , \qquad\text{equivalently}\qquad t \;\ll\; 1/\epsilon .
$$

Beyond that the "correction" is larger than the thing it corrects, and the formula is worse than useless — it can predict amplitudes the exact solution provably cannot reach, as the next example shows.

Strogatz makes two further observations about what has gone wrong, both worth keeping. First, a secular term is often the first Taylor coefficient of something perfectly bounded: $e^{-\epsilon t} = 1 - \epsilon t + O(\epsilon^{2}t^{2})$, so a slow exponential decay of amplitude shows up in a truncated $\epsilon$-expansion as linear *growth*, with the wrong sign and the wrong qualitative behaviour. Recovering the decay from the series would need infinitely many terms, which defeats the purpose. Second, a small shift in frequency, $\omega = \omega_0 + O(\epsilon)$, also appears as a secular term, because $\cos(\omega_0 + \epsilon\omega_1)t = \cos\omega_0 t - \epsilon\omega_1 t\sin\omega_0 t + \cdots$; the phase error accumulates and becomes an $O(1)$ error after $t \sim 1/\epsilon$. Both diagnoses say the same thing: the solution has two time scales, a fast one of order $1$ and a slow one of order $1/\epsilon$, and a series in $\epsilon$ with coefficients depending on $t$ alone cannot represent the slow one. The standard repairs — rescaling the frequency before expanding, or treating $t$ and $\epsilon t$ as independent variables, which Strogatz calls two-timing (§7.6, p. 218) — build the slow scale into the ansatz from the start. They are not developed here.
:::

:::example[A weakly nonlinear oscillator, and the failure of the two-term formula]{provenance=original}
Take the Duffing equation (Strogatz, §7.6, Eq. (3), p. 215) with a soft start from rest:

$$
\ddot x + x + \epsilon x^{3} = 0 , \qquad x(0) = a , \quad \dot x(0) = 0 , \qquad 0 < \epsilon \ll 1 .
$$

**The hierarchy.** Put $x = x_0 + \epsilon x_1 + O(\epsilon^{2})$ and expand $x^{3} = x_0^{3} + O(\epsilon)$. The initial data do not depend on $\epsilon$, so by step 5 they go entirely to $x_0$:

$$
O(1): \quad \ddot x_0 + x_0 = 0 , \quad x_0(0) = a, \ \dot x_0(0) = 0 ;
\qquad
O(\epsilon): \quad \ddot x_1 + x_1 = -x_0^{3} , \quad x_1(0) = 0, \ \dot x_1(0) = 0 .
$$

The base solution is $x_0 = a\cos t$. For the forcing, use $\cos^{3}t = \tfrac34\cos t + \tfrac14\cos 3t$:

$$
\ddot x_1 + x_1 \;=\; -\tfrac34 a^{3}\cos t \;-\; \tfrac14 a^{3}\cos 3t .
$$

The first term on the right is at the natural frequency of the operator on the left — exactly the resonance described in the remark. Solving by :ref[variation of parameters]{to=ode.variation-of-parameters} (or by the standard resonant trial $Ct\sin t$) and imposing $x_1(0) = \dot x_1(0) = 0$,

$$
x_1(t) \;=\; -\frac{3a^{3}}{8}\,t\sin t \;+\; \frac{a^{3}}{32}\bigl(\cos 3t - \cos t\bigr) ,
$$

so the two-term approximation is

$$
x(t) \;\approx\; a\cos t \;+\; \epsilon\left[-\frac{3a^{3}}{8}t\sin t + \frac{a^{3}}{32}(\cos 3t - \cos t)\right] .
$$

The first bracketed term is secular; the second is a bounded third-harmonic correction, the signature of a nonlinearity.

**Numbers.** Take $a = 1$ and $\epsilon = 0.1$. Integrating the equation numerically to twelve-digit tolerance and comparing:

| $t$ | numerical $x(t)$ | two-term formula | error |
|---|---|---|---|
| $1$ | $0.504662$ | $0.503965$ | $-7.0\times10^{-4}$ |
| $5$ | $0.449763$ | $0.460200$ | $+1.0\times10^{-2}$ |
| $20$ | $-0.305609$ | $-0.280878$ | $+2.5\times10^{-2}$ |
| $40$ | $-0.805957$ | $-1.779979$ | $-9.7\times10^{-1}$ |

At $t = 1$ the formula is good to four decimals. At $t = 40$ it is not merely inaccurate but impossible: energy conservation gives

$$
\tfrac12\dot x^{2} + \tfrac12 x^{2} + \tfrac{\epsilon}{4}x^{4} \;=\; \tfrac12 a^{2} + \tfrac{\epsilon}{4}a^{4} ,
$$

and since $\tfrac12\dot x^{2} \ge 0$ while $s \mapsto \tfrac12 s + \tfrac{\epsilon}{4}s^{2}$ is strictly increasing for $s \ge 0$, this forces $x(t)^{2} \le a^{2}$, that is $|x(t)| \le a = 1$, for all $t$. The two-term formula reports $-1.78$. The crossover is where the remark predicts it: $\epsilon t = 1$ at $t = 10$, and the error has grown to a few per cent by $t = 20$ and to order one by $t = 40$, where $\epsilon t = 4$.

**What the secular term was trying to say.** Guess instead that the nonlinearity only shifts the frequency, $x \approx a\cos\omega t$ with $\omega = 1 + \tfrac38\epsilon a^{2}$. Expanding in $\epsilon$ at fixed $t$ reproduces the secular term exactly:

$$
a\cos\bigl[(1 + \tfrac38\epsilon a^{2})t\bigr] \;=\; a\cos t - \frac{3a^{3}}{8}\epsilon\,t\sin t + O(\epsilon^{2}t^{2}) .
$$

So the growth was the expansion of a phase, not of an amplitude — the second of the two diagnoses in the remark. The frequency-shifted formula, with $\omega = 1.0375$, gives $-0.790424$ at $t = 40$ against the numerical $-0.805957$, an error of $1.6\times10^{-2}$ rather than $9.7\times10^{-1}$, and it stays bounded for all time. Finding the shift $\tfrac38\epsilon a^{2}$ without guessing is what the methods named at the end of the remark do.
:::

:::application[First-order shifts: eigenvalues, energy levels, orbits]{provenance=adapted src="stakgold-holst-2011:§9.3, Eqs. (9.3.23) and (9.3.26)-(9.3.30), pp. 589-590; rhb-2006:§19.2, p. 671"}
The single most used consequence of this method in physics is the first-order shift of an eigenvalue, and it is a case where step 7 of the method — the solvability condition — does the work.

Stakgold and Holst take the Sturm-Liouville family

$$
-u'' + (1 + \epsilon x^{2})u = \mu u , \qquad 0 < x < 1 , \qquad u(0) = u(1) = 0 .
$$

At $\epsilon = 0$ the eigenvalues are simple, $\mu_n = n^{2}\pi^{2} + 1$, with normalised eigenfunctions $e_n(x) = \sqrt{2}\sin n\pi x$. Differentiating the problem with respect to $\epsilon$ and setting $\epsilon = 0$ gives an inhomogeneous problem for $\partial_\epsilon u$ whose operator is $-d^{2}/dx^{2} + 1 - \mu_n$, and that operator annihilates $e_n$. So the problem is solvable only if its right-hand side is orthogonal to $e_n$ — and that condition, which at first looks like an obstruction, is what determines the unknown $\partial_\epsilon\mu(0)$:

$$
\mu_n(\epsilon) \;\approx\; \mu_n + \epsilon\int_0^{1} x^{2}e_n^{2}(x)\,dx .
$$

The first-order shift is computable without knowing how the eigenfunction moves. For this example $\int_0^1 x^{2}\cdot 2\sin^{2}(n\pi x)\,dx = \tfrac13 - 1/(2n^{2}\pi^{2})$, so

$$
\mu_n(\epsilon) \;\approx\; n^{2}\pi^{2} + 1 + \epsilon\left(\frac13 - \frac{1}{2n^{2}\pi^{2}}\right) .
$$

For $n = 1$ and $\epsilon = 0.1$ this predicts $\mu_1 \approx 10.897872$; a finite-difference computation of the eigenvalue gives $10.897861$, an agreement to five decimals, and for $\epsilon = 1$ the prediction $11.152277$ against the computed $11.151164$ is still good to three decimals.

In quantum mechanics the same formula is the first thing one reaches for. Riley, Hobson and Bence quote it in the form a physicist uses: if a Hamiltonian acquires an extra small term $H'$, then to first order the ground state's energy moves by the expectation value $\langle 0|H'|0\rangle$, evaluated in the *unperturbed* ground state. That is the display above with $\int_0^1 x^{2}e_n^{2}$ read as $\langle n | x^{2} | n\rangle$ and $\epsilon x^{2}$ as $H'$: Stark and Zeeman shifts, fine structure and the anharmonic corrections to a vibrational spectrum are all computed this way, and the unperturbed eigenfunctions suffice.

Two further standing uses are worth naming. Celestial mechanics is where the method began: the expansion of Kepler's equation in the eccentricity, as in the example above, together with expansions of planetary orbits in the mass ratios, is how ephemerides were computed for two centuries. And in fluid and plasma problems the same scheme appears as a stability calculation — expand about a known equilibrium in the amplitude of a disturbance and read the growth rate off the order-$\epsilon$ problem — in which the solvability condition of step 7 becomes the dispersion relation.
:::
