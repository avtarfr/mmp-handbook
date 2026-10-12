---
id: ode.existence-uniqueness
title: Existence and uniqueness of solutions
kind: theorem
level: core
summary: Proves that an initial-value problem $y' = f(x,y)$, $y(x_0)=y_0$ has exactly one solution on an explicit interval around $x_0$ when $f$ is continuous and Lipschitz in $y$, by showing that Picard's successive approximations converge uniformly, and shows by example what fails when the Lipschitz condition is dropped.
prereqs: [found.uniform-convergence, found.compactness, ode.first-order-methods]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "ch. 5: §5.4 The method of successive approximations, Theorem 4 (equivalence with the integral equation) and Theorem 5 (the approximations exist on $\\lvert x-x_0\\rvert \\le \\alpha$), pp. 200-205, with the boundedness footnote on p. 203; §5.5 The Lipschitz condition, the definition and Theorem 6, pp. 208-209, and the examples $xy^2$ and $y^{2/3}$ there; §5.6 Theorem 7 (Existence Theorem), its proof in four parts, and Theorem 8 (the error estimate), pp. 210-214; §5.7 Theorem 9 (non-local existence on a strip), pp. 217-219; §5.8 Theorem 10 and Corollary 1 (Uniqueness theorem), pp. 222-223; §5.2, the example $y' = 3y^{2/3}$ and its family of solutions, pp. 189-190"
    pages: "186-225"
    role: all hypotheses and conclusions of the theorem as stated here; the telescoping-series proof route, the induction estimate, the error bound, and the differential-inequality route to uniqueness; the Lipschitz condition and the derivative test for it; non-local existence; the non-uniqueness example
  - work: hassani-2013
    loc: "§14.2, pp. 419-421: Theorem 14.2.2 (Peano existence theorem), Definition 14.2.3 (Lipschitz condition on a domain $D \\subset \\mathbb{R}^2$), Theorem 14.2.4 (uniqueness, with the exponential separation bound), Example 14.2.5 ($dy/dx = e^y$), Theorem 14.2.6 (local existence and uniqueness)"
    pages: "419-421"
    role: the Peano theorem, which separates what continuity alone gives from what the Lipschitz condition adds; a second statement of the local theorem with the same interval $\\min(N, K/M)$; the example showing the interval of existence depends on the initial value
  - work: hirsch-smale-devaney-2013
    loc: "§7.2 The Existence and Uniqueness Theorem, pp. 142-146: the discontinuous vector field with no solution (p. 143), the example $x' = 3x^{2/3}$ with its one-parameter family of solutions (p. 143), the Existence and Uniqueness Theorem for $C^1$ vector fields on $\\mathbb{R}^n$ (p. 144), Picard iteration worked for $x'=x$ and for a linear planar system (pp. 144-146), the maximal interval of agreement of two solutions and the blow-up example $x' = 1+x^2$ (p. 146)"
    pages: "142-146"
    role: the $C^1$ form of the hypotheses for systems, the statement that uniqueness propagates to the whole common interval, the non-uniqueness and blow-up examples
  - work: strogatz-1994
    loc: "§2.5 Existence and Uniqueness, pp. 26-28: Example 2.5.1 (non-uniqueness for $\\dot x = x^{1/3}$ from $x_0=0$), the Existence and Uniqueness Theorem for $\\dot x = f(x)$ with $f$ and $f'$ continuous on an open interval, and Example 2.5.2 (blow-up for $\\dot x = 1+x^2$)"
    pages: "26-28"
    role: the autonomous one-dimensional form of the hypotheses, and the blow-up example used to show that the guaranteed interval cannot be enlarged in general
---

:::note[What is at stake]{provenance=original}
Almost no differential equation of practical interest can be solved in closed form, so almost everything done with one — drawing its phase portrait, integrating it numerically, expanding it in a small parameter, arguing from its symmetries — presupposes that "the solution" exists and that the phrase refers to one object. That presupposition is a theorem, and it is not free: it needs a hypothesis slightly stronger than continuity, and it delivers less than one might hope, namely a solution on an interval that may be much shorter than the one of interest. This unit gives the hypothesis, the interval, the proof, and the two examples that show why nothing weaker will do.
:::

:::definition[The initial-value problem, Picard's approximations, and the Lipschitz condition]{provenance=adapted src="coddington-1989:§5.4, pp. 200-202, and §5.5, p. 208; hassani-2013:§14.2, Definition 14.2.3, p. 420"}
Let $f$ be a real-valued function defined on a rectangle

$$
R : \ \lvert x - x_0 \rvert \le a , \quad \lvert y - y_0 \rvert \le b \qquad (a, b > 0) .
$$

Given an interval $I$ that contains $x_0$, a **solution on $I$ of the initial-value problem**

$$
y' = f(x,y) , \qquad y(x_0) = y_0
$$

means a differentiable real-valued $\varphi$ on $I$ with $\varphi(x_0) = y_0$, with $(x,\varphi(x)) \in R$ for every $x \in I$, and with $\varphi'(x) = f(x,\varphi(x))$ for every $x \in I$.

The **integral equation** attached to the problem is

$$
\varphi(x) = y_0 + \int_{x_0}^{x} f\bigl(t, \varphi(t)\bigr)\,dt ,
$$

a solution of which means a continuous $\varphi$ on $I$ whose graph lies in $R$ and which satisfies the displayed identity at every $x \in I$. The **successive approximations**, or **Picard iterates**, are the functions

$$
\varphi_0(x) = y_0 , \qquad \varphi_{k+1}(x) = y_0 + \int_{x_0}^{x} f\bigl(t, \varphi_k(t)\bigr)\,dt \qquad (k = 0, 1, 2, \dots) .
$$

Each one is obtained by feeding the previous one through the right-hand side of the integral equation; a solution of that equation is exactly a function left unchanged by the process.

Finally, let $f$ be defined on a set $S$. Then $f$ **satisfies a Lipschitz condition on $S$** if there is a constant $K > 0$ with

$$
\bigl\lvert f(x,y_1) - f(x,y_2) \bigr\rvert \le K\,\lvert y_1 - y_2 \rvert \qquad \text{for all } (x,y_1), (x,y_2) \in S ,
$$

and $K$ is called a Lipschitz constant. The condition constrains $f$ in its second argument only, uniformly in the first; it says nothing about how $f$ varies with $x$ beyond the continuity assumed separately.
:::

:::statement[Picard-Lindelöf: local existence, uniqueness and an error bound]{provenance=adapted src="coddington-1989:§5.4, Theorem 5, p. 203, §5.6, Theorems 7 and 8, pp. 210, 214, and §5.8, Theorem 10 with Corollary 1, pp. 222-223"}
Let the real-valued $f$ be continuous on the rectangle

$$
R : \ \lvert x - x_0 \rvert \le a , \quad \lvert y - y_0 \rvert \le b \qquad (a, b > 0) ,
$$

let

$$
\lvert f(x,y)\rvert \le M \quad\text{for all } (x,y) \in R , \qquad M > 0 ,
$$

and suppose $f$ satisfies a Lipschitz condition with constant $K$ in $R$. Put

$$
\alpha = \min\{\,a,\ b/M\,\} , \qquad I : \ \lvert x - x_0 \rvert \le \alpha .
$$

Then:

1. **(Existence; Coddington, Theorems 5 and 7.)** The successive approximations $\varphi_k$ all exist as continuous functions on $I$ and their graphs lie in $R$ (his Theorem 5, p. 203), and on $I$ they converge to a limit $\varphi$ which solves $y' = f(x,y)$, $y(x_0) = y_0$ there (his Theorem 7, p. 210). The convergence is moreover **uniform** on $I$: Coddington's statement says only "converge", but his proof and ours both produce a bound on $\lvert \varphi - \varphi_k\rvert$ that is independent of $x$, and step 4 of the proof below uses the uniformity.
2. **(Uniqueness; Coddington, Theorem 10 and its Corollary 1.)** If $\varphi$ and $\psi$ are two solutions of that initial-value problem on an interval $I'$ containing $x_0$, with graphs contained in $R$, then $\varphi(x) = \psi(x)$ for every $x \in I'$. In particular the solution produced in part 1 is the only one on $I$.
3. **(Error bound; Coddington, Theorem 8.)** The $k$th approximation satisfies
   $$
   \bigl\lvert \varphi(x) - \varphi_k(x) \bigr\rvert \ \le \ \frac{M}{K}\,\frac{(K\alpha)^{k+1}}{(k+1)!}\,e^{K\alpha} \qquad \text{for all } x \in I .
   $$

The hypothesis $\lvert f \rvert \le M$ is stated separately by Coddington, who notes that it is in fact automatic: a continuous function on the closed bounded rectangle $R$ is bounded there (p. 203 and :ref[Compactness]{to=found.compactness}), and he allows the reader to take the bound as an extra assumption instead. Where he produces the bound he takes it positive, "there exists a constant $M > 0$" (p. 203); his Theorem 7 writes the hypothesis as $\lvert f\rvert \le M$ without repeating the positivity, which the quotient $b/M$ nevertheless needs, so we carry $M > 0$ in the hypotheses above.
:::

:::idea[Picard-Lindelöf]{provenance=original}
Differentiating is awkward to iterate and integrating is not, so the first move is to replace the differential equation by the equivalent integral equation; a solution is then a fixed point of the map that sends $\varphi$ to $y_0 + \int f(t,\varphi)$. Start with the constant function $y_0$ and apply the map over and over.

Two things must be controlled. The iterates must not wander out of the rectangle where $f$ is defined — this is what the number $b/M$ buys, since the graphs can climb no faster than slope $M$. And the differences between consecutive iterates must shrink fast enough to sum. The Lipschitz condition converts a difference of $f$-values into a difference of the iterates themselves, so each application of the map integrates the previous difference; integrating $k$ times produces a factor $\lvert x-x_0\rvert^k/k!$, and a factorial beats everything. The series of differences is then dominated by a convergent series of constants, so the Weierstrass M-test gives uniform convergence, uniform convergence preserves continuity, and the same Lipschitz estimate lets the limit be taken inside the integral. Uniqueness is the same estimate used once more: the difference of two solutions satisfies an integral inequality that forces it to vanish.
:::

:::proof[Picard-Lindelöf]{provenance=adapted src="coddington-1989:§5.4, Theorems 4 and 5, pp. 200-205, §5.6, pp. 210-214, and §5.8, pp. 224-225"}
**Step 0: the integral equation is equivalent.** Let $\varphi$ be continuous on $I$ with graph in $R$. If $\varphi$ solves the initial-value problem, then $\varphi' (t)= f(t,\varphi(t))$ is continuous on $I$, being the composition of the continuous $f$ with the continuous map $t \mapsto (t,\varphi(t))$; integrating from $x_0$ to $x$ and using $\varphi(x_0) = y_0$ gives the integral equation. Conversely, if $\varphi$ satisfies the integral equation, its integrand is continuous, so the fundamental theorem of calculus makes $\varphi$ differentiable with $\varphi'(x) = f(x,\varphi(x))$, and setting $x = x_0$ kills the integral and gives $\varphi(x_0) = y_0$. (Coddington's Theorem 4.) From here on we work with the integral equation.

**Step 1: the iterates exist on $I$ and stay in $R$.** We show by induction that each $\varphi_k$ is defined and continuous on $I$ and satisfies

$$
\bigl\lvert \varphi_k(x) - y_0 \bigr\rvert \le M\,\lvert x - x_0 \rvert \qquad (x \in I) .
$$

For $k = 0$ the left side is zero. Assume it for $\varphi_k$. Then for $x \in I$ we have $\lvert x - x_0 \rvert \le \alpha \le b/M$, so $\lvert \varphi_k(x) - y_0\rvert \le M\alpha \le b$, and also $\lvert x - x_0\rvert \le \alpha \le a$; hence $(x,\varphi_k(x)) \in R$ and the integrand $t \mapsto f(t,\varphi_k(t))$ is defined and continuous on $I$. Therefore $\varphi_{k+1}$ is defined and continuous (indeed continuously differentiable) on $I$, and

$$
\bigl\lvert \varphi_{k+1}(x) - y_0 \bigr\rvert = \left\lvert \int_{x_0}^{x} f\bigl(t,\varphi_k(t)\bigr)\,dt \right\rvert \le M\,\lvert x - x_0\rvert ,
$$

using $\lvert f \rvert \le M$ on $R$. The absolute value outside the integral covers both $x > x_0$ and $x < x_0$. Both of $\alpha$'s two candidates are used here: $a$ keeps $x$ inside the rectangle horizontally, $b/M$ keeps the graph inside it vertically. (Coddington's Theorem 5.)

**Step 2: consecutive iterates differ by at most a factorial-sized amount.** We claim that for every $p \ge 1$ and $x \in I$,

$$
\bigl\lvert \varphi_p(x) - \varphi_{p-1}(x) \bigr\rvert \ \le \ \frac{M K^{p-1}\,\lvert x - x_0\rvert^{p}}{p!} .
$$

For $p = 1$ this is the estimate of step 1 with $k=0$. Assume it for $p$. Subtracting the defining formulas for $\varphi_{p+1}$ and $\varphi_p$,

$$
\varphi_{p+1}(x) - \varphi_p(x) = \int_{x_0}^{x}\Bigl[f\bigl(t,\varphi_p(t)\bigr) - f\bigl(t,\varphi_{p-1}(t)\bigr)\Bigr]dt .
$$

Both graphs lie in $R$ by step 1, so the Lipschitz condition applies to the integrand and gives $\lvert f(t,\varphi_p) - f(t,\varphi_{p-1})\rvert \le K\lvert \varphi_p(t) - \varphi_{p-1}(t)\rvert$. Hence, using the inductive hypothesis,

$$
\bigl\lvert \varphi_{p+1}(x) - \varphi_p(x)\bigr\rvert \ \le \ K\left\lvert \int_{x_0}^{x} \frac{MK^{p-1}\lvert t-x_0\rvert^{p}}{p!}\,dt\right\rvert = \frac{MK^{p}\,\lvert x-x_0\rvert^{p+1}}{(p+1)!} ,
$$

which is the claim for $p+1$. The Lipschitz condition enters here for the first time, and this is what it does: it converts the bound already in hand on $\varphi_p - \varphi_{p-1}$ into a bound on the next difference $\varphi_{p+1} - \varphi_p$, one power of $\lvert x - x_0\rvert$ and one factor of $K$ further on. It is needed twice more, in step 4 and in step 5.

**Step 3: the iterates converge uniformly on $I$.** Telescoping,

$$
\varphi_k(x) = \varphi_0(x) + \sum_{p=1}^{k}\bigl[\varphi_p(x) - \varphi_{p-1}(x)\bigr] ,
$$

so $\varphi_k$ is the $k$th partial sum of the series $\varphi_0 + \sum_{p \ge 1}(\varphi_p - \varphi_{p-1})$, and convergence of the sequence is convergence of the series. By step 2, on $I$,

$$
\bigl\lvert \varphi_p(x) - \varphi_{p-1}(x)\bigr\rvert \le \frac{M}{K}\,\frac{(K\alpha)^{p}}{p!} =: M_p , \qquad \sum_{p \ge 1} M_p = \frac{M}{K}\bigl(e^{K\alpha} - 1\bigr) < \infty ,
$$

and the constants $M_p$ do not depend on $x$. By the :ref[Weierstrass M-test]{to=found.uniform-convergence} the series converges uniformly on $I$; call its sum $\varphi$. Each $\varphi_k$ is continuous on $I$, and a uniform limit of continuous functions is continuous, so $\varphi$ is continuous on $I$. Letting $k \to \infty$ in the estimate of step 1 gives $\lvert \varphi(x) - y_0\rvert \le M\lvert x - x_0\rvert \le b$, so the graph of $\varphi$ also lies in $R$.

**Step 4: the limit solves the integral equation.** Fix $x \in I$ and subtract:

$$
\left\lvert \int_{x_0}^{x} f\bigl(t,\varphi(t)\bigr)dt - \int_{x_0}^{x} f\bigl(t,\varphi_k(t)\bigr)dt \right\rvert \le K\left\lvert \int_{x_0}^{x}\bigl\lvert \varphi(t) - \varphi_k(t)\bigr\rvert dt\right\rvert \le K\alpha \, \sup_{t \in I}\bigl\lvert \varphi(t) - \varphi_k(t)\bigr\rvert ,
$$

the first inequality by the Lipschitz condition (both graphs are in $R$), the second by bounding the integrand by its supremum over an interval of length at most $\alpha$. The right-hand side tends to $0$ by step 3 — and this is exactly where uniform, as opposed to pointwise, convergence is needed, since the bound must be one number serving all $t$ at once. Letting $k \to \infty$ in

$$
\varphi_{k+1}(x) = y_0 + \int_{x_0}^{x} f\bigl(t,\varphi_k(t)\bigr)\,dt
$$

therefore gives $\varphi(x) = y_0 + \int_{x_0}^{x}f(t,\varphi(t))\,dt$. By step 0, $\varphi$ solves the initial-value problem on $I$. This proves part 1.

**Step 5: uniqueness.** Let $\varphi$ and $\psi$ solve the same initial-value problem on an interval $I'$ containing $x_0$, with graphs in $R$. By step 0 both satisfy the integral equation, so subtracting and using the Lipschitz condition, for $x \ge x_0$ in $I'$,

$$
\bigl\lvert \varphi(x) - \psi(x)\bigr\rvert \le \int_{x_0}^{x}\bigl\lvert f(t,\varphi(t)) - f(t,\psi(t))\bigr\rvert\,dt \le K\int_{x_0}^{x}\bigl\lvert \varphi(t)-\psi(t)\bigr\rvert\,dt .
$$

Set $E(x) = \int_{x_0}^{x}\lvert \varphi - \psi\rvert\,dt$. Then $E(x_0) = 0$, $E \ge 0$, and $E$ is differentiable with $E' = \lvert \varphi - \psi\rvert$ because the integrand is continuous; the display says precisely $E' \le KE$. Hence

$$
\frac{d}{dx}\Bigl[e^{-Kx}E(x)\Bigr] = e^{-Kx}\bigl[E'(x) - KE(x)\bigr] \le 0 ,
$$

so $e^{-Kx}E(x)$ is non-increasing and therefore at most its value $0$ at $x_0$: $E(x) \le 0$ for $x \ge x_0$. Since also $E \ge 0$, we get $E \equiv 0$ and so $\lvert \varphi - \psi\rvert = E' \equiv 0$ on $I' \cap [x_0,\infty)$. For $x \le x_0$ apply the same argument to the functions $\tilde\varphi(x) = \varphi(2x_0 - x)$ and $\tilde\psi(x) = \psi(2x_0-x)$, which solve $y' = -f(2x_0-x,y)$ with the same initial value and the same Lipschitz constant. Hence $\varphi = \psi$ on all of $I'$, which is part 2. (This is Coddington's route: he proves the general comparison estimate of his Theorem 10 by exactly this differential inequality and then reads uniqueness off as the special case in which the two equations and the two initial values coincide.)

**Step 6: the error bound.** Subtracting the series of step 3 from its $k$th partial sum leaves the tail, so by step 2 and the same constants $M_p$,

$$
\bigl\lvert \varphi(x) - \varphi_k(x)\bigr\rvert \le \sum_{p = k+1}^{\infty}\frac{M}{K}\frac{(K\alpha)^{p}}{p!}
\le \frac{M}{K}\,\frac{(K\alpha)^{k+1}}{(k+1)!}\sum_{q = 0}^{\infty}\frac{(K\alpha)^{q}}{q!}
= \frac{M}{K}\,\frac{(K\alpha)^{k+1}}{(k+1)!}\,e^{K\alpha} ,
$$

where the middle step writes $p = k+1+q$ and uses $(k+1+q)! \ge (k+1)!\,q!$. That is part 3. Since $(K\alpha)^{k+1}/(k+1)!$ is a term of the convergent series for $e^{K\alpha}$, it tends to $0$, so the bound does too. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="coddington-1989:§5.5, pp. 208-209, §5.6, p. 210, and §5.7, Theorem 9, pp. 217-219; hassani-2013:§14.2, Theorems 14.2.2 and 14.2.4, pp. 420-421; hirsch-smale-devaney-2013:§7.2, p. 143"}
- **Continuity of $f$** is used in step 0 (to differentiate the integral and to integrate the derivative) and in step 1 (to know the iterates are defined). Dropping it can destroy existence outright: Hirsch, Smale and Devaney give the vector field on $\mathbb{R}$ equal to $1$ for $x<0$ and $-1$ for $x \ge 0$, for which no solution passes through $x = 0$, since the solution would have to decrease at $0$ and increase just to the left of it (p. 143).
- **The bound $M$ and the number $b/M$** first appear in step 1, where $b/M$ is what keeps the graphs inside $R$; that is where the locality of the conclusion comes from, and if $f$ is large the graph may run out of the rectangle quickly and the guaranteed interval shrinks accordingly. $M$ does not stop there: it is the leading factor in the difference estimate of step 2, in the constants $M_p$ of step 3, and hence in the error bound of step 6 and part 3, all of which are proportional to it.
- **The Lipschitz condition** is used in step 2 (to make the differences contract) and in steps 4 and 5. It is not needed for existence: Hassani states the **Peano existence theorem** (Theorem 14.2.2), that continuity of $f$ on the rectangle together with $\lvert f \rvert \le M$ already gives *at least one* solution on $\lvert x - x_0\rvert \le \min(a, b/M)$ — the same interval. Coddington says the same in a note after his Theorem 7 and declines to prove it, the proof needing tools beyond his chapter. What the Lipschitz condition adds is uniqueness, and the method of successive approximations itself: Coddington's Ex. 3, pp. 215-216, exhibits a continuous $f$ with $\lvert f\rvert \le 2$ for which the approximations alternate between $x^2$ and $-x^2$, so that neither convergent subsequence tends to a solution — although the problem does have one.
- **How to check the Lipschitz condition.** Coddington's Theorem 6: if $S$ is a rectangle $\lvert x-x_0\rvert \le a$, $\lvert y - y_0\rvert\le b$ or a strip $\lvert x - x_0\rvert \le a$, $\lvert y\rvert < \infty$, and $f$ is real-valued on $S$ with $\partial f/\partial y$ existing, continuous on $S$ and satisfying $\lvert \partial f/\partial y\rvert \le K$ there, then $f$ satisfies a Lipschitz condition on $S$ with constant $K$. The proof is one line — $f(x,y_1) - f(x,y_2) = \int_{y_2}^{y_1}(\partial f/\partial y)(x,t)\,dt$ — and this is the test used in practice. (Coddington's Ex. 4, p. 210, notes that the continuity of $\partial f/\partial y$ is not needed, the mean value theorem serving instead.) The converse of the test fails: $f(x,y) = x^{2}\lvert y\rvert$ is Lipschitz on $\lvert x\rvert \le 1$, $\lvert y\rvert \le 1$ although $\partial f/\partial y$ does not exist at $(x,0)$ when $x \neq 0$ (Coddington, Ex. 3, pp. 209-210).
- **Being Lipschitz is a property of the region.** $f(x,y) = xy^{2}$ satisfies a Lipschitz condition on the rectangle $\lvert x \rvert \le 1$, $\lvert y\rvert \le 1$, where $\lvert \partial f/\partial y\rvert = \lvert 2xy\rvert \le 2$, but on no strip $\lvert x\rvert \le 1$, $\lvert y \rvert < \infty$: there the quotient $\lvert f(x,y_1) - f(x,0)\rvert/\lvert y_1\rvert$ equals $\lvert x\rvert\lvert y_1\rvert$, which is unbounded in $y_1$ whenever $x \neq 0$ (Coddington, pp. 208-209).
- **Non-local existence.** The locality is a consequence of the rectangle, not of the method. Coddington's Theorem 9: if $f$ is continuous on the **strip** $\lvert x - x_0\rvert \le a$, $\lvert y\rvert < \infty$ and satisfies a Lipschitz condition with constant $K$ there, the approximations exist and converge on the whole interval $\lvert x - x_0\rvert \le a$. The linear equation $y' + g(x)y = h(x)$ with $g$, $h$ continuous and $\lvert g\rvert \le K$ on $\lvert x - x_0\rvert \le a$ is of this kind, which recovers from this theory the global existence proved directly in :ref[Solving first-order equations]{to=ode.first-order-methods}.
- **The interval depends on the initial value.** Hassani's Example 14.2.5: $dy/dx = e^{y}$ with $y(0) = b$ has the solution $y = -\ln(e^{-b} - x)$, defined for $-\infty < x < e^{-b}$, so the right-hand end moves as $b$ is varied.
:::

:::note[The same theorem in the other sources' hypotheses]{provenance=adapted src="hirsch-smale-devaney-2013:§7.2, p. 144; strogatz-1994:§2.5, p. 27; hassani-2013:§14.2, Theorem 14.2.6, p. 421"}
The result is stated in this handbook with Coddington's hypotheses. Hassani assumes the same and reaches the same interval; the two dynamical-systems sources assume more and say less about the interval. The three read as follows.

- **Hassani (Theorem 14.2.6).** Same statement as ours: $F(x,y)$ defined and continuous on the rectangle $\lvert y - c\rvert \le K$, $\lvert x - a \rvert \le N$ and satisfying a Lipschitz condition there, $M = \max\lvert F\rvert$ on the rectangle, gives a unique solution with $f(a)=c$ on $\lvert x - a\rvert \le \min(N, K/M)$. His letters differ from ours — his $K$ is the half-height of the rectangle and his $L$ is the Lipschitz constant — but the content is identical.
- **Hirsch, Smale and Devaney (p. 144).** For an autonomous system $X' = F(X)$, $X(t_0) = X_0$ in $\mathbb{R}^n$ with $F : \mathbb{R}^n \to \mathbb{R}^n$ of class $C^1$, there exist an $a > 0$ and a unique solution $X : (t_0-a, t_0+a) \to \mathbb{R}^n$. This is stronger in dimension and weaker in precision: $C^1$ implies a local Lipschitz condition by the derivative test above, but the number $a$ is not identified. They also observe (p. 146) that uniqueness is not merely local: if two solutions agree at one point and both are defined on an interval $J$, they agree on all of $J$, since the set where they agree is both open, by the local theorem, and closed, by continuity.
- **Strogatz (p. 27).** For $\dot x = f(x)$, $x(0) = x_0$ with $f$ and $f'$ both continuous on an open $x$-interval $R$ that contains $x_0$, there is a solution on some interval $(-\tau,\tau)$ and it is unique. Again $C^1$ in place of Lipschitz, and no formula for $\tau$.

Two conventions to note. Hirsch, Smale and Devaney and Strogatz both state the theorem for **autonomous** equations, where $f$ does not depend on the independent variable; Coddington and Hassani allow dependence on both. And where we use $x$ for the independent variable, the dynamical-systems sources use $t$ and reserve $x$ for the dependent one. Nothing is lost by the autonomous restriction in Hirsch, Smale and Devaney's $n$-dimensional statement, since $y' = f(x,y)$ is the autonomous planar system $x' = 1$, $y' = f(x,y)$ in disguise; Strogatz's one-dimensional statement, which has no room for that extra variable, is genuinely the narrower one.

There is also a route that bypasses the successive approximations as such: observe that the Picard map $\varphi \mapsto y_0 + \int_{x_0}^{\cdot} f(t,\varphi)\,dt$ moves two functions no more than $K\alpha$ times as far apart as they already are, in the supremum distance; when $K\alpha < 1$ it is therefore a contraction on a complete space of continuous functions and has a unique fixed point by the :ref[contraction mapping theorem]{to=funcan.banach-fixed-point}. The proof above avoids the extra hypothesis $K\alpha < 1$: the factorial in step 2 makes the iterates contract eventually whatever the value of $K\alpha$.
:::

:::example[Without the Lipschitz condition: infinitely many solutions]{provenance=adapted src="coddington-1989:§5.2, pp. 189-190, §5.5, p. 209, and §5.8, p. 223; hirsch-smale-devaney-2013:§7.2, p. 143; strogatz-1994:§2.5, Example 2.5.1, p. 27"}
Consider

$$
y' = 3y^{2/3} , \qquad y(0) = 0 .
$$

**The right-hand side is continuous but not Lipschitz.** $f(x,y) = 3y^{2/3}$ is continuous on every rectangle. On a rectangle containing the origin, however, take $y_2 = 0$ and $y_1 = \eta > 0$:

$$
\frac{\lvert f(x,\eta) - f(x,0)\rvert}{\lvert \eta - 0\rvert} = \frac{3\eta^{2/3}}{\eta} = \frac{3}{\eta^{1/3}} \longrightarrow \infty \qquad (\eta \to 0^{+}) ,
$$

so no constant $K$ can serve: $f$ satisfies a Lipschitz condition on no rectangle containing a piece of the line $y = 0$. (Coddington makes the same computation for $y^{2/3}$ on $\lvert x\rvert \le 1$, $\lvert y\rvert\le1$, where the quotient is $y_1^{-1/3}$, p. 209; the derivative test fails for the same reason, $\partial f/\partial y = 2y^{-1/3}$ being unbounded near $y=0$.)

**Separation finds one family of solutions.** For $y \neq 0$, separating as in :ref[Solving first-order equations]{to=ode.first-order-methods} gives $\tfrac13\int y^{-2/3}\,dy = \int dx$, so $y^{1/3} = x + c$ and $y = (x+c)^3$. The initial condition picks $c = 0$ and the solution $y = x^3$.

**But there are infinitely many.** The constant function $y \equiv 0$ is also a solution with $y(0)=0$ — the solution lost by dividing by $y^{2/3}$. Worse, the two can be spliced. For any $\tau \ge 0$ (Coddington splices at any positive $k$, p. 190, and Hirsch, Smale and Devaney likewise take their parameter positive, p. 143; the member $\tau = 0$, which vanishes for $x \le 0$ and equals $x^3$ afterwards, is equally a solution and is our addition to their families) define

$$
y_\tau(x) = \begin{cases} 0, & x \le \tau,\\[1mm] (x-\tau)^{3}, & x > \tau .\end{cases}
$$

This is differentiable everywhere, including at $x = \tau$, where the left derivative is $0$ and the right derivative is $\lim_{h\to0^+} h^3/h = 0$; and it satisfies the equation, since for $x > \tau$ we have $y_\tau' = 3(x-\tau)^2 = 3\bigl[(x-\tau)^3\bigr]^{2/3} = 3y_\tau^{2/3}$, while for $x < \tau$ both sides vanish. Every one of these satisfies $y_\tau(0) = 0$. So the initial-value problem has a one-parameter family of solutions, together with $y \equiv 0$ and with the mirror-image solutions obtained by splicing on the left.

**What this does and does not show.** Existence is not the issue: $f$ is continuous, so Peano's theorem applies and solutions exist. The Lipschitz condition is what fails, and with it uniqueness — exactly the division of labour described in the remark above. The picture is of a solution that may rest at $0$ for an arbitrary time and then set off, with nothing in the equation to say when. Hirsch, Smale and Devaney give the same example (p. 143), and Strogatz gives the companion $\dot x = x^{1/3}$ from $x_0 = 0$, with the two solutions $x \equiv 0$ and $x = (\tfrac23 t)^{3/2}$ (p. 27).
:::

:::example[Picard iteration, and how sharp the error bound is]{provenance=original}
Solve

$$
y' = x^{2} + y , \qquad y(0) = 1
$$

by successive approximations, and compare the result with the error bound of part 3.

**Step 1: the data of the theorem.** Take the rectangle $R : \lvert x\rvert \le \tfrac12$, $\lvert y - 1\rvert \le 2$, so $a = \tfrac12$ and $b = 2$. On $R$ we have $y \in [-1,3]$ and

$$
\lvert f(x,y)\rvert = \lvert x^2 + y\rvert \le \tfrac14 + 3 = \tfrac{13}{4} =: M ,
$$

while $\partial f/\partial y = 1$ is continuous and bounded by $1$, so by the derivative test $f$ is Lipschitz on $R$ with $K = 1$. Hence

$$
\alpha = \min\Bigl\{\tfrac12,\ \tfrac{2}{13/4}\Bigr\} = \min\{0.5,\ 0.6154\} = \tfrac12 ,
$$

and the theorem guarantees a unique solution on $\lvert x\rvert \le \tfrac12$.

**Step 2: iterate.** With $\varphi_0 \equiv 1$ and $\varphi_{k+1}(x) = 1 + \int_0^x (t^2 + \varphi_k(t))\,dt$,

$$
\begin{aligned}
\varphi_1(x) &= 1 + x + \tfrac13 x^{3},\\
\varphi_2(x) &= 1 + x + \tfrac12 x^{2} + \tfrac13 x^{3} + \tfrac1{12}x^{4},\\
\varphi_3(x) &= 1 + x + \tfrac12 x^{2} + \tfrac12 x^{3} + \tfrac1{12}x^{4} + \tfrac1{60}x^{5},\\
\varphi_4(x) &= 1 + x + \tfrac12 x^{2} + \tfrac12 x^{3} + \tfrac18 x^{4} + \tfrac1{60}x^{5} + \tfrac1{360}x^{6},\\
\varphi_5(x) &= 1 + x + \tfrac12 x^{2} + \tfrac12 x^{3} + \tfrac18 x^{4} + \tfrac1{40}x^{5} + \tfrac1{360}x^{6} + \tfrac1{2520}x^{7} .
\end{aligned}
$$

Each iterate adds one more correct term and perturbs the tail: the coefficient of $x^4$, for instance, is wrong in $\varphi_2$ and $\varphi_3$ and settles at $\tfrac18$ from $\varphi_4$ on.

**Step 3: the exact solution, for comparison.** The equation is linear, $y' - y = x^2$, with integrating factor $e^{-x}$; the method of :ref[Solving first-order equations]{to=ode.first-order-methods} gives the particular solution $-(x^2+2x+2)$ and hence

$$
y(x) = 3e^{x} - x^{2} - 2x - 2 ,
$$

whose value at $x=0$ is $1$ and whose derivative is $3e^x - 2x - 2 = x^2 + y$, as required. Its Taylor series is $1 + x + \tfrac12x^2 + \tfrac12x^3 + \tfrac18x^4 + \tfrac1{40}x^5 + \cdots$, which is what the iterates are converging to.

**Step 4: numbers at the edge of the guaranteed interval.** At $x = \alpha = \tfrac12$ the exact value is $y(\tfrac12) = 3e^{1/2} - \tfrac14 - 1 - 2 = 4.946163812 - 3.25 = 1.696163812$. The bound of part 3, with $M/K = 3.25$, $K\alpha = 0.5$ and $e^{K\alpha} = 1.648721271$, is $3.25\,(0.5)^{k+1}e^{0.5}/(k+1)!$.

| $k$ | $\varphi_k(1/2)$ | actual error | bound of part 3 |
|---|---|---|---|
| 1 | $1.541666667$ | $1.54\times10^{-1}$ | $6.70\times10^{-1}$ |
| 2 | $1.671875000$ | $2.43\times10^{-2}$ | $1.12\times10^{-1}$ |
| 3 | $1.693229167$ | $2.93\times10^{-3}$ | $1.40\times10^{-2}$ |
| 4 | $1.695876736$ | $2.87\times10^{-4}$ | $1.40\times10^{-3}$ |
| 5 | $1.696140253$ | $2.36\times10^{-5}$ | $1.16\times10^{-4}$ |

Every error is below its bound, by a factor of about five throughout, and both columns fall by roughly an order of magnitude per iteration — the factorial of step 2 at work. The bound is therefore pessimistic by a constant factor but correct in its rate, which is the useful property: it predicts in advance how many iterations are needed for a prescribed accuracy, before any of them is carried out.

**Step 5: a caution about the interval.** Nothing in the construction says the solution stops at $x = \tfrac12$; here it is in fact an entire function. The rectangle was a device, and a different rectangle gives a different $\alpha$. Enlarging $b$ raises $M$, so increasing $b$ eventually stops helping: with $a = \tfrac12$ and half-height $b$, $M = \tfrac14 + 1 + b$ and $b/M = b/(b + \tfrac54)$, which increases to $1$ as $b \to \infty$, so $\alpha = \tfrac12$ for every $b \ge \tfrac54$ and the horizontal constraint $a$ is what binds. For this equation the strip theorem quoted in the remark does better: $f$ is Lipschitz with $K=1$ on every strip $\lvert x\rvert \le a$, so the solution in fact exists for all $x$.
:::

:::remark[Why the theorem has to be local: blow-up]{provenance=adapted src="strogatz-1994:§2.5, Example 2.5.2, p. 28; hirsch-smale-devaney-2013:§7.2, p. 146"}
The previous example might suggest that $\alpha$ is always an underestimate of no consequence. It is not. Take

$$
y' = 1 + y^{2} , \qquad y(0) = 0 ,
$$

whose right-hand side is a polynomial, hence continuous with continuous $y$-derivative everywhere. Separating gives $\arctan y = x$, so $y = \tan x$, which exists only for $-\pi/2 < x < \pi/2$ and runs to $\pm\infty$ at the ends: the solution reaches infinity at a finite value of the independent variable. Strogatz calls this blow-up and notes its relevance to models of combustion and other runaway processes (p. 28); Hirsch, Smale and Devaney make the same point with $x' = 1+x^2$ and its solutions $\tan(t+c)$ (p. 146).

What does the theorem predict here? On $R : \lvert x \rvert \le a$, $\lvert y\rvert \le b$ we may take $M = 1 + b^2$, so

$$
\alpha = \min\Bigl\{a, \ \frac{b}{1+b^{2}}\Bigr\} \le \max_{b>0}\frac{b}{1+b^{2}} = \frac12 ,
$$

the maximum occurring at $b = 1$. So no choice of rectangle gives a guaranteed interval longer than $\lvert x \rvert \le \tfrac12$, against a true interval of half-length $\pi/2 = 1.5708$. The theorem is pessimistic by a factor of about three — but it is pessimistic about something real, since beyond $\pi/2$ there is nothing to find. No local theorem can distinguish this equation from one whose solutions last forever, because the distinction is not visible in a neighbourhood of the initial point.
:::

:::application[Determinism, and where it fails]{provenance=original}
**Trajectories do not cross.** Newton's equations for a system with coordinates $q$ become a first-order system for the state $(q,\dot q)$ in phase space: $\dot q = v$, $\dot v = F(q,v)/m$. If $F$ is continuously differentiable, the theorem applies in the form quoted from Hirsch, Smale and Devaney, and through each phase point there passes exactly one trajectory. (A force that also depends on $t$ is covered by adjoining $t$ as an extra state variable with $\dot t = 1$, which restores the autonomous form their statement assumes.) This is the mathematical content of classical determinism, and it is also the licence for every phase-portrait argument: the curves drawn in a phase plane cannot cross, because a crossing point would be an initial condition with two solutions. It is what makes the one-dimensional reasoning of :ref[Flows on the line]{to=dyn.flows-on-the-line} valid.

A typical consequence, used constantly and rarely proved: **an equilibrium cannot be reached in finite time**. Let $\dot x = f(x)$ be autonomous with a fixed point $x_\ast$, so that the constant function $x(t) \equiv x_\ast$ is a solution, and assume — this is the hypothesis the argument needs, and it is exactly the one the theorem needs at $x_\ast$ — that $f$ satisfies a Lipschitz condition on some interval around $x_\ast$, for instance because $f$ is $C^1$ there. Suppose some other solution satisfied $x(t_\ast) = x_\ast$ at a finite time $t_\ast$. Both would then solve the initial-value problem at $t_\ast$, so by uniqueness they would be the same solution — and the other one is not constant. Hence a trajectory approaching an equilibrium takes infinitely long to arrive. That is why the separatrix of a pendulum takes forever to reach the inverted position, and why a linear stability analysis predicting $\lvert x - x_\ast\rvert \sim e^{-\lambda t}$ never predicts arrival.

**A mechanical system with no unique future.** That argument is worth no more than its hypothesis, and the hypothesis can fail in a mechanical system. Consider a bead sliding without friction on a curve $z = h(r)$ with an apex at $r = 0$, where $r$ is horizontal distance from the apex. For small slopes the equation of motion along the surface reduces to $\ddot r \approx -g\,h'(r)$. Choose the shape

$$
h(r) = -\frac{2}{3g}\,r^{3/2} , \qquad\text{so that}\qquad -g\,h'(r) = \sqrt{r} \quad (r \ge 0) ,
$$

and take the idealised model $\ddot r = \sqrt r$, with the bead at rest exactly at the apex: $r(0) = 0$, $\dot r(0) = 0$. As a first-order system this is $\dot r = v$, $\dot v = \sqrt r$, whose right-hand side is continuous but, near $r = 0$, not Lipschitz in the state, for the reason seen in the example above. And indeed the problem has infinitely many solutions: $r \equiv 0$, and for every $T \ge 0$

$$
r_T(t) = \begin{cases} 0, & t \le T, \\[1mm] \dfrac{(t-T)^{4}}{144}, & t > T, \end{cases}
$$

since $\ddot r_T = 12(t-T)^2/144 = (t-T)^2/12$ while $\sqrt{r_T} = (t-T)^2/12$ for $t > T$, and both sides vanish for $t<T$; the two one-sided limits of $r_T$, $\dot r_T$ and $\ddot r_T$ agree at $t = T$. The bead may therefore sit motionless at the apex for any length of time and then slide off, with the equations of motion saying nothing about when. This construction is known in the philosophy-of-physics literature as Norton's dome, and it is the cleanest demonstration that classical determinism is a theorem about Lipschitz vector fields rather than an axiom about Newtonian mechanics. The reassurance is that the shape has unbounded curvature at the apex: $h''(r) = -\,r^{-1/2}/(2g) \to -\infty$ as $r \to 0^{+}$, so the dome is not a smooth surface there, and smooth force laws do not produce this behaviour.

**Why numerical work needs the theorem twice.** Any integrator for $y' = f(x,y)$ (:ref[Integrators for ODEs]{to=num.ode-integrators}) computes a sequence of approximate values and is silent about whether there is anything to approximate. Both halves of the theorem are therefore used before the first step is taken: existence, so that the computed sequence has a target, and uniqueness, so that two runs with different step sizes are approximating the same function. The Lipschitz constant is not merely a hypothesis here but an output of the analysis: the classical global error bound for a one-step method of order $p$ and step $h$ on an interval of length $L$ has the form $C h^{p}\bigl(e^{KL}-1\bigr)/K$, with $K$ the Lipschitz constant of $f$, so the same number that makes the solution unique also measures how fast errors — numerical or physical — can be amplified. Finally, blow-up has a numerical signature worth recognising: integrating $y' = 1+y^2$ from $y(0)=0$, an adaptive solver drives its step size towards zero as $x$ approaches $\pi/2 = 1.5708$ and stalls, which is not a bug but the solver detecting that the solution has ceased to exist.
:::
