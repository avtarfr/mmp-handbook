---
id: ode.first-order-methods
title: Solving first-order equations
kind: method
level: core
summary: Gives the six standard closed-form methods for a first-order first-degree equation — separation, exactness, integrating factors, the linear formula, the substitutions for homogeneous and for Bernoulli equations — each with the hypotheses it needs, the reason it works, and worked examples with checkable numbers.
prereqs: [found.partial-derivatives-chain-rule, found.differentiation-under-integral, found.implicit-inverse-function, vcalc.line-integrals]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§5.3 Exact and inexact differentials, pp. 155–156 (exact differentials, the criterion (5.9), integrating factors); ch. 14, §14.2, pp. 470–478: the two standard forms (p. 470), separable-variable equations §14.2.1 (p. 471), exact equations §14.2.2 and Eqs. (14.4)–(14.8) (pp. 472–473), inexact equations and integrating factors §14.2.3, Eqs. (14.9)–(14.12) (pp. 473–474), linear equations §14.2.4, Eqs. (14.14)–(14.17) (pp. 474–475), homogeneous equations §14.2.5, Eqs. (14.18)–(14.19) (pp. 475–476), Bernoulli's equation §14.2.7, Eq. (14.21) (pp. 477–478)"
    pages: "155-156, 470-478"
    role: the classification into six solvable types and the solution recipe for each; the two one-variable integrating-factor formulas; the exactness criterion for a differential; the assertion that an inexact differential can always be made exact
  - work: coddington-1989
    loc: "ch. 5: §5.2 Equations with variables separated, Theorem 1 and the examples of lost solutions, pp. 186–190; Ex. 4, p. 191 (homogeneous equations and the substitution $y = ux$); §5.3 Exact equations, Theorems 2 and 3 and their proofs, pp. 192–197; Exs. 2–6, pp. 198–199 (integrating factors: the definition, the one-variable criteria and their converses, and the linear equation); §5.4, p. 200 (what a solution of an initial-value problem is)"
    pages: "186-200"
    role: precise hypotheses and both directions of the separable and exact theorems; the construction of the potential; the requirement that an integrating factor be nowhere zero; the converses of the one-variable criteria; the standard examples of solutions lost by dividing by zero
  - work: arfken-2013
    loc: "§7.2 First-Order Equations, pp. 331–339: the general form (7.2) and separable equations (p. 331), exact differentials, the criterion (7.9) and the closed formula (7.10) (p. 333), the existence of integrating factors (p. 334), equations homogeneous in $x$ and $y$ (p. 334), linear first-order ODEs, Eqs. (7.11)–(7.17) (pp. 336–337), and the two theorems on p. 337 (general solution as particular plus homogeneous; one linearly independent homogeneous solution)"
    pages: "331-339"
    role: the closed two-integral formula for the potential of an exact equation; the derivation of the integrating factor of a linear equation; the structure theorems for the linear equation; the observation that separability and exactness are independent
  - work: hassani-2013
    loc: "§14.2, Theorem 14.2.1, p. 420: explicit general solution of $p_1 y' + p_0 y = q$ with $p_0, p_1, q$ continuous on an interval, Eqs. (14.7)–(14.8)"
    pages: "420"
    role: the statement that the general first-order linear equation has an explicit solution on any interval of continuity, in the unnormalised form with a differently scaled integrating factor
---

:::note[What the six methods have in common]{provenance=original}
There is no procedure that solves every first-order equation in closed form. What there is instead is a short list of shapes that can be recognised by inspection, each of which collapses to an integration. Two ideas do all the work.

- **Separate.** If the $x$-dependence and the $y$-dependence can be pushed to opposite sides of the equation, each side is integrated on its own and the solution is the resulting relation between $x$ and $y$.
- **Make exact.** If the left-hand side of $A\,dx + B\,dy = 0$ is the total differential $dU$ of a single function $U$, the equation says $dU = 0$, so the solution curves are the level curves $U = \text{const}$. When it is not such a differential, multiplying by an integrating factor can make it one.

The other four types are reductions to these two: a linear equation is made exact by an integrating factor that can always be written down, and the homogeneous and Bernoulli substitutions turn their equations into a separable and a linear one respectively. All of them but one involve a division — by a factor $\sigma(y)$, by $B$ or $A$, by $F(v) - v$, by $y^n$ — and each division can discard solutions or shrink the region where the work is valid. The exception is the exact-equation method as given below, which divides by nothing and loses nothing; that is part of why it is the shape the others are reduced to. For the rest, keeping track of what was divided by is part of the method, not an afterthought.
:::

:::definition[First-order first-degree equations and their solutions]{provenance=adapted src="rhb-2006:§14.2, p. 470; arfken-2013:§7.2, Eq. (7.2), p. 331; coddington-1989:§5.4, p. 200"}
A **first-order** equation contains no derivative of $y$ beyond $dy/dx$, and it is of **first degree** when $dy/dx$ appears to the first power only. Such an equation can be written in either of two interchangeable ways,

$$
\frac{dy}{dx} = F(x,y) , \qquad\qquad A(x,y)\,dx + B(x,y)\,dy = 0 ,
$$

related by $F = -A/B$ wherever $B \neq 0$. The first form is the one to use when $y$ is to be found as a function of $x$; the second treats the two variables alike, which is what the exactness methods below need. Riley, Hobson and Bence call these the two standard forms and choose between them according to the type of equation at hand.

A **solution on an interval** $I$ is a differentiable function $\varphi : I \to \mathbb{R}$ whose graph lies in the region where the data are defined and which satisfies $\varphi'(x) = F(x, \varphi(x))$ at every $x \in I$. A solution of the **initial-value problem** $y' = F(x,y)$, $y(x_0) = y_0$ is a solution on an interval containing $x_0$ with $\varphi(x_0) = y_0$.

The **general solution** carries one arbitrary constant. (Riley, Hobson and Bence take the general solution of an $n$th-order equation to contain $n$ arbitrary parameters, or constants; they say explicitly that they assume this rather than prove it, a fully general proof being difficult, p. 470.) Fixing the constant from an initial condition gives a **particular solution**.

Most of the methods below deliver the answer not as $y = \varphi(x)$ but as an **implicit solution**: a relation

$$
U(x,y) = k
$$

together with the statement that every differentiable function defined implicitly by that relation is a solution. Where $\partial U/\partial y \neq 0$ the :ref[implicit function theorem]{to=found.implicit-inverse-function} converts the relation into a function $y = \varphi(x)$ locally; where $\partial U/\partial y = 0$ the solution curve has a vertical tangent and $y$ cannot be solved for, although $x$ may be solvable as a function of $y$. This is why the differential form, which is symmetric in the two variables, is often the honest place to stop.
:::

:::statement[Separable equations]{provenance=adapted src="coddington-1989:§5.2, Theorem 1, p. 188; rhb-2006:§14.2.1, Eq. (14.3), p. 471"}
An equation has **separated variables** when it can be written

$$
h(y)\,\frac{dy}{dx} = g(x) ,
$$

Coddington defines the class by the quotient instead, calling $y' = f(x,y)$ separated when $f$ can be written as $g(x)/h(y)$ (p. 186), and then multiplies up to the displayed form. The two forms pick out the same equations but not the same solutions: where $h$ vanishes or is undefined the displayed form can hold and the quotient form cannot, which is the content of the proviso at the end of this block. Riley, Hobson and Bence write the same class as a product, $dy/dx = f(x)\,\sigma(y)$, which is the case $h = 1/\sigma$.

**Theorem (Coddington, Theorem 1).** Assume $g$ is continuous and real-valued on $a < x < b$ and $h$ is continuous and real-valued on $c \le y \le d$. Pick antiderivatives: any $G$ with $G' = g$ and any $H$ with $H' = h$. The solutions are then exactly the functions cut out by the relation

$$
H(y) = G(x) + k , \qquad k \ \text{constant},
$$

in the following two senses, for an interval $I$ contained in $a \le x \le b$ (Coddington's wording: he assumes $g$ continuous on the open interval but allows $I$ inside the closed one).

1. Suppose that, for one such $k$, the relation determines implicitly a differentiable real-valued $\varphi$ throughout $I$. Then $h(y)y' = g(x)$ holds along $\varphi$ on $I$.
2. Suppose instead that $\varphi$ is given as a solution of $h(y)y' = g(x)$ on $I$. Then some constant $k$ makes the relation hold along $\varphi$ throughout $I$.

For the quotient form of the equation Coddington adds a proviso, since dividing by $h$ is dividing: such a $\varphi$ solves $y' = g(x)/h(y)$ on $I$ as long as $h(\varphi(x))$ is non-zero at each point of $I$.
:::

:::idea[Separable equations]{provenance=original}
Both directions are the chain rule, read forwards and backwards. The function $x \mapsto H(\varphi(x)) - G(x)$ has derivative $h(\varphi(x))\varphi'(x) - g(x)$, which is exactly the left side minus the right side of the equation. So "$\varphi$ solves the equation" and "$H(\varphi) - G$ is constant" are two ways of saying that one function has zero derivative. Writing $h(y)\,dy = g(x)\,dx$ and integrating each side separately is a shorthand for the substitution $u = \varphi(t)$ in the integral of the left-hand side.
:::

:::proof[Separable equations]{provenance=adapted src="coddington-1989:§5.2, pp. 187-188"}
1. **The relation gives a solution.** Suppose $H(y) = G(x) + k$ defines a differentiable $\varphi$ on $I$, so that $H(\varphi(x)) = G(x) + k$ for all $x \in I$. Differentiate in $x$: the left side is differentiable because $H$ is (its derivative $h$ is continuous) and $\varphi$ is, and the chain rule gives
   $$
   H'(\varphi(x))\,\varphi'(x) = G'(x), \qquad\text{that is}\qquad h(\varphi(x))\,\varphi'(x) = g(x) ,
   $$
   which is the equation $h(y)y' = g(x)$ satisfied by $\varphi$ on $I$. If moreover $h(\varphi(x)) \neq 0$ throughout $I$, dividing gives $\varphi' = g/h(\varphi)$, the equation in the form $y' = g(x)/h(y)$. This is where Coddington's proviso is used, and it is the only place it is needed.

2. **A solution satisfies the relation.** Conversely let $\varphi$ solve $h(\varphi)\varphi' = g$ on $I$ and fix $x_0 \in I$. By step 1 read backwards, $h(\varphi(t))\varphi'(t)$ is the derivative of $t \mapsto H(\varphi(t))$, so the equation says that $H \circ \varphi$ and $G$ have the same derivative on $I$. Integrating from $x_0$ to $x$ and using the fundamental theorem of calculus — legitimate because both derivatives are continuous on $I$ —
   $$
   H(\varphi(x)) - H(\varphi(x_0)) = G(x) - G(x_0) .
   $$
   Setting $k = H(\varphi(x_0)) - G(x_0)$ gives $H(\varphi(x)) = G(x) + k$ on $I$.

3. **Why "separating" is the same computation.** In step 2 the integral $\int_{x_0}^{x} h(\varphi(t))\varphi'(t)\,dt$ was evaluated by recognising the integrand as a derivative; the substitution $u = \varphi(t)$, $du = \varphi'(t)\,dt$ turns it into $\int_{\varphi(x_0)}^{\varphi(x)} h(u)\,du$. That substitution is precisely what the formal manipulation $h(y)\,dy = g(x)\,dx$ records. $\square$
:::

:::method[Separating the variables]{provenance=adapted src="rhb-2006:§14.2.1, p. 471"}
1. Try to factor the right-hand side as $f(x)\,\sigma(y)$. Equations that do not look separable often become so after one factorisation.
2. **Record the zeros of $\sigma$.** Each root $y_\ast$ of $\sigma(y_\ast) = 0$ gives a constant solution $y \equiv y_\ast$. These are exactly the solutions that the next step may destroy.
3. Divide by $\sigma(y)$, multiply by $dx$, and integrate each side with respect to its own variable, remembering a single constant of integration.
4. Solve the resulting relation for $y$ if it can be solved; otherwise leave it implicit. Impose the initial condition to fix the constant, and check by substitution.
5. State the interval on which the answer is valid: it ends where the denominator $\sigma(y(x))$ reaches zero, where an integral diverges, or where $y$ itself ceases to exist.
:::

:::remark[Solutions lost by dividing]{provenance=adapted src="coddington-1989:§5.2, pp. 189-190"}
Separation can miss solutions, and Coddington makes the point with two examples.

- For $y' = y^2$, separating gives $y = -1/(x + k)$. The identically zero function also solves the equation and is not of that form for any $k$.
- For $y' = 3y^{2/3}$, separating gives $y = (x+k)^3$, and again $y \equiv 0$ is a solution outside the family. This equation has worse behaviour still, and :ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness} returns to it.

The remedy is the bookkeeping in step 2 of the method: list the roots of $\sigma$ before dividing. In Example 1 below, the two constant solutions found that way turn out to be the asymptotes that every other solution approaches, so the lost solutions are not a technicality but the main features of the phase picture.
:::

:::statement[Exact equations and the criterion for exactness]{provenance=adapted src="coddington-1989:§5.3, Theorems 2 and 3, pp. 193, 195; rhb-2006:§5.3, Eq. (5.9), p. 156, and §14.2.2, Eqs. (14.4)-(14.7), p. 472; arfken-2013:§7.2, Eqs. (7.6)-(7.9), p. 333"}
The equation $A(x,y) + B(x,y)y' = 0$, written in differential form as $A\,dx + B\,dy = 0$, is **exact in a region** $R$ if there is a function $U$ with continuous first partial derivatives in $R$ such that

$$
\frac{\partial U}{\partial x} = A , \qquad \frac{\partial U}{\partial y} = B \qquad\text{throughout } R .
$$

Equivalently, $A\,dx + B\,dy$ is the total differential $dU$ of a single function — an **exact differential** in the sense of Riley, Hobson and Bence, §5.3. (Coddington writes $M$ and $N$ where we write $A$ and $B$, and $F$ where we write $U$; the two theorems below are his, in our letters.)

**Theorem (solutions of an exact equation; Coddington, Theorem 2).** Let $A + By' = 0$ be exact in a rectangle $R$, and let $U$ be real-valued with $U_x = A$ and $U_y = B$ throughout $R$. Then every differentiable function defined implicitly by a relation

$$
U(x,y) = k \qquad (k \text{ constant})
$$

is a solution; and conversely, no solution with graph in $R$ is of any other kind. In short, the solutions in $R$ are exactly the differentiable functions that the level relations of $U$ define implicitly.

**Theorem (criterion; Coddington, Theorem 3).** Let $A$ and $B$ be real-valued functions with continuous first partial derivatives on a rectangle

$$
R : \ \lvert x - x_0\rvert \le a , \quad \lvert y - y_0 \rvert \le b \qquad (a, b > 0) .
$$

Then $A + By' = 0$ is exact in $R$ if and only if

$$
\frac{\partial A}{\partial y} = \frac{\partial B}{\partial x} \qquad \text{in } R .
$$
:::

:::remark[Which form of the criterion we follow]{provenance=adapted src="coddington-1989:§5.3, Theorem 3, p. 195; rhb-2006:§5.3, p. 156; arfken-2013:§7.2, p. 333"}
The three sources state the criterion with different amounts of hypothesis, and this unit follows Coddington's version, where both the differentiability assumptions and the shape of the region are named.

- Coddington asks for continuous first partial derivatives of $A$ and $B$ on a **rectangle** and gets an "if and only if".
- Riley, Hobson and Bence derive $\partial A/\partial y = \partial B/\partial x$ from the equality of mixed partials and then record that the criterion is sufficient as well as necessary (p. 156), without naming a region on which that holds.
- Arfken, Weber and Harris are more cautious in the other direction: they draw only the one-way conclusion, that exactness forces the criterion (p. 333), and obtain the potential afterwards by integration.

The region matters. On a region that is not simply connected the criterion can hold without a single-valued $U$ existing: on $\mathbb{R}^2$ minus the origin,

$$
A = \frac{-y}{x^2+y^2} , \qquad B = \frac{x}{x^2+y^2}
$$

satisfy $A_y = B_x = (y^2 - x^2)/(x^2+y^2)^2$, yet $A\,dx + B\,dy = d\theta$ and the polar angle $\theta$ gains $2\pi$ around a loop enclosing the origin, so no continuous $U$ exists on the whole punctured plane. This is the same phenomenon as a curl-free field that is not a gradient field (:ref[Line integrals and conservative fields]{to=vcalc.line-integrals}); a rectangle is convex, so every loop inside it bounds a region also inside it, and the obstruction cannot arise there. Taking the criterion as sufficient without a hypothesis on the region, as the shortest statements of it do, is therefore a genuine restriction on where it may be applied.
:::

:::idea[The criterion for exactness]{provenance=original}
One direction is just that mixed partial derivatives commute: if $A$ and $B$ are a gradient's two components then $A_y$ and $B_x$ are both the mixed second derivative of $U$.

The other direction has to produce $U$ out of nothing. Integrate $A$ in $x$ along the horizontal segment that runs from the rectangle's vertical centre line $x = x_0$ out to $(x,y)$; that forces $U_x = A$ but leaves an unknown function of $y$, which is fixed by integrating $B$ along the centre line itself, from the centre $(x_0,y_0)$ up to $(x_0,y)$. The resulting $U$ then has $U_y = B$ for one reason only: differentiating the horizontal integral under the integral sign produces $\int A_y$, the hypothesis replaces $A_y$ by $B_x$, and the fundamental theorem of calculus turns $\int B_x$ back into $B$. The rectangle is what guarantees that the two segments used lie inside the region.
:::

:::proof[The criterion for exactness, and Theorem 2]{provenance=adapted src="coddington-1989:§5.3, pp. 193-196, Eq. (3.8)"}
**Necessity.** Suppose the equation is exact in $R$, with $U_x = A$ and $U_y = B$. By the hypothesis of Theorem 3 the two first partials of $U$ are then $C^1$ on $R$, so $U$ is $C^2$ there, and the equality of mixed partials for a $C^2$ function (:ref[Partial derivatives and the chain rule]{to=found.partial-derivatives-chain-rule}) gives $A_y = U_{xy} = U_{yx} = B_x$ in $R$.

**Sufficiency.** Assume $A_y = B_x$ in $R$ and define, for $(x,y) \in R$,

$$
U(x,y) = \int_{x_0}^{x} A(s,y)\,ds + \int_{y_0}^{y} B(x_0,t)\,dt .
$$

Both integrals are defined: $R$ is a rectangle centred at $(x_0,y_0)$, so the horizontal segment from $(x_0,y)$ to $(x,y)$ and the vertical segment from $(x_0,y_0)$ to $(x_0,y)$ both lie in $R$, where $A$ and $B$ are continuous.

1. **$U_x = A$.** The second integral does not involve $x$, and $A(\cdot,y)$ is continuous, so the fundamental theorem of calculus gives $\partial U/\partial x = A(x,y)$ at every point of $R$, the derivative being the one-sided one at the two vertical edges.

2. **$U_y = B$, first at interior points.** Fix $x$ and let $y$ range over the *open* interval $\lvert y - y_0\rvert < b$, which is the form in which the prerequisite is stated: its parameter set must be open, whereas our $y$ runs over a closed interval. On that open interval we may differentiate the first integral with respect to $y$ under the integral sign, because $A$ and $A_y$ are continuous on the product of it with the closed $s$-interval between $x_0$ and $x$ (:ref[Differentiation under the integral sign]{to=found.differentiation-under-integral}); the second integral is differentiated by the fundamental theorem. Hence, for $\lvert y - y_0\rvert < b$,
   $$
   \frac{\partial U}{\partial y} = \int_{x_0}^{x} \frac{\partial A}{\partial y}(s,y)\,ds + B(x_0,y)
   = \int_{x_0}^{x} \frac{\partial B}{\partial x}(s,y)\,ds + B(x_0,y)
   = B(x,y) ,
   $$
   where the middle equality is the hypothesis $A_y = B_x$ — the only step that uses it — and the last is the fundamental theorem applied to $s \mapsto B(s,y)$.

   *The two edges.* To reach the top and bottom of $R$, integrate what has just been proved: for $\lvert y - y_0 \rvert < b$ the function $y \mapsto U(x,y)$ has the continuous derivative $B(x,y)$, so $U(x,y) = U(x,y_0) + \int_{y_0}^{y}B(x,t)\,dt$ there. Both sides are continuous in $y$ on the closed interval $\lvert y - y_0\rvert \le b$ — the left because $A$ and $B$ are continuous on $R$, the right because $B$ is — so the identity holds at $y = y_0 \pm b$ as well, and differentiating it with the fundamental theorem gives $\partial U/\partial y = B(x,y)$ throughout $R$, one-sidedly on the two horizontal edges.

3. Since $U_x = A$ and $U_y = B$ are continuous, $U$ has continuous first partials, so the equation is exact in $R$.

   (Coddington reaches $U_y = B$ differently: he writes down a second integral formula for $U$, with the roles of the two variables exchanged, and verifies that it agrees with the first by an identity between two iterated integrals. The computation in step 2 does the same work by differentiating the first formula directly.)

**Theorem 2.** Let $U_x = A$, $U_y = B$ in $R$ and let $\varphi$ be differentiable on an interval $I$ with graph in $R$. The chain rule gives

$$
\frac{d}{dx}\,U\bigl(x,\varphi(x)\bigr) = A\bigl(x,\varphi(x)\bigr) + B\bigl(x,\varphi(x)\bigr)\varphi'(x) \qquad (x \in I) .
$$

Read from right to left: if $\varphi$ solves $A + By' = 0$ on $I$, the right side vanishes identically, so $x \mapsto U(x,\varphi(x))$ has zero derivative on the interval $I$ and is therefore a constant $k$; thus $\varphi$ is defined implicitly by $U = k$. Read from left to right: if $U(x,\varphi(x)) = k$ on $I$, the left side vanishes, so $\varphi$ solves the equation. $\square$
:::

:::method[Solving an exact equation]{provenance=adapted src="rhb-2006:§14.2.2, Eqs. (14.7)-(14.8), pp. 472-473; arfken-2013:§7.2, Eq. (7.10), p. 333"}
1. Write the equation as $A\,dx + B\,dy = 0$.
2. **Test.** Compute $\partial A/\partial y$ and $\partial B/\partial x$. If they differ, the equation is inexact; go to the integrating-factor method below.
3. **Integrate in $x$ with $y$ held fixed:** $U(x,y) = \int A(x,y)\,dx + f(y)$, the "constant" of integration being allowed to depend on $y$.
4. **Fix $f$:** differentiate the result with respect to $y$, set it equal to $B(x,y)$, and solve for $f'(y)$. Every $x$ must cancel at this point; if it does not, step 2 was wrong. Integrate $f'$.
5. The solution is $U(x,y) = k$. Fix $k$ from the initial condition and solve for $y$ if possible.

Arfken, Weber and Harris give the result of steps 3 and 4 in closed form,

$$
U(x,y) = \int_{x_0}^{x} A(s,y)\,ds + \int_{y_0}^{y} B(x_0,t)\,dt ,
$$

which is the function constructed in the proof above; their Eq. (7.10). They also note that separability and exactness are independent properties: every separable equation is exact, but an exact equation need not be separable (p. 333).
:::

:::statement[Integrating factors]{provenance=adapted src="rhb-2006:§14.2.3, Eqs. (14.9)-(14.12), pp. 473-474; coddington-1989:§5.3, Exs. 2, 3, 4 and 5, pp. 198-199, and Theorem 3, p. 195"}
**Standing hypotheses.** Throughout this block $A$ and $B$ are real-valued with continuous first partial derivatives on a rectangle

$$
R : \ \lvert x - x_0\rvert \le a , \quad \lvert y - y_0 \rvert \le b \qquad (a, b > 0) ,
$$

which are the conditions Coddington imposes for his integrating-factor exercises (Ex. 3, p. 198), and $\mu$ is a function on $R$ with continuous first partial derivatives and **nowhere zero** there. Call such a $\mu$ an **integrating factor** on $R$ for $A\,dx + B\,dy = 0$ if

$$
\mu A\,dx + \mu B\,dy = 0 \quad\text{is exact in } R .
$$

The case of interest is the one in which the original equation is **inexact**, $\partial A/\partial y \neq \partial B/\partial x$ somewhere in $R$; nothing in the definition requires it, and Coddington's definition (Ex. 2, p. 198) does not either.

Because $\mu A$ and $\mu B$ again have continuous first partial derivatives on $R$, the criterion theorem above applies to them, so on this rectangle exactness of the multiplied equation is equivalent to a computable condition:

$$
\mu \ \text{is an integrating factor on } R \iff \frac{\partial (\mu A)}{\partial y} = \frac{\partial(\mu B)}{\partial x} \quad\text{in } R .
$$

(This is Coddington's Ex. 3, p. 198, which writes the right-hand condition out as $\mu(A_y - B_x) = B\mu_x - A\mu_y$ and refers it to his Theorem 3.) The hypothesis that the region is a rectangle is doing real work in this equivalence: on a region that is not of this kind the criterion can hold with no potential existing, as the remark above shows.

Riley, Hobson and Bence assert that the differential $A\,dx + B\,dy$ can always be made exact in this way, but that when $\mu$ depends on both variables there is no general method for finding it; it must then be found by inspection or trial (p. 473). Two cases are systematic.

1. **A factor of $x$ alone.** Suppose $B$ is nowhere zero on $R$, so that
   $$
   \alpha = \frac{1}{B}\left(\frac{\partial A}{\partial y} - \frac{\partial B}{\partial x}\right)
   $$
   is defined and continuous on $R$, and suppose $\alpha$ is independent of $y$. Being continuous, $\alpha$ has an antiderivative, and
   $$
   \mu(x) = \exp\!\left(\int \alpha(x)\,dx\right)
   $$
   — the exponential of any one of them — is an integrating factor on $R$. (Coddington, Ex. 4(b), p. 199, whose hypothesis is exactly that the test quantity be continuous and independent of $y$.)
2. **A factor of $y$ alone.** Suppose $A$ is nowhere zero on $R$, so that
   $$
   \beta = \frac{1}{A}\left(\frac{\partial B}{\partial x} - \frac{\partial A}{\partial y}\right)
   $$
   is defined and continuous on $R$, and suppose $\beta$ is independent of $x$. Then, for the same reason,
   $$
   \mu(y) = \exp\!\left(\int \beta(y)\,dy\right)
   $$
   is an integrating factor on $R$. (Coddington, Ex. 5(b), p. 199.)

(Riley, Hobson and Bence call these two test quantities $f(x)$ and $g(y)$; they are renamed here because $f$, $g$ and $h$ already have other meanings in the separable-equation blocks above.) Computing $\alpha$ and $\beta$ is therefore also the test for whether a one-variable factor exists at all. Coddington's exercises state the converses: under the same standing hypotheses, if the equation has an integrating factor depending on $x$ alone, then $\alpha$ above is a continuous function of $x$ alone (Ex. 4(a), p. 199), and correspondingly for $y$ (Ex. 5(a)).
:::

:::idea[Integrating factors]{provenance=original}
Write out the exactness condition for $\mu A\,dx + \mu B\,dy$ and all the unknown-function terms collect into one: a single term $\mu_y A$ on the left and a single term $\mu_x B$ on the right. If $\mu$ is allowed to depend on both variables that leaves one partial differential equation for one unknown function, which is underdetermined — hence infinitely many integrating factors and no procedure. If $\mu$ is restricted to one variable, one of the two terms disappears and what is left is an ordinary separable equation for $\mu$, solvable exactly when its right-hand side happens to involve that one variable only.
:::

:::proof[Integrating factors]{provenance=adapted src="rhb-2006:§14.2.3, pp. 473-474; coddington-1989:§5.3, Theorem 3, p. 195, and Exs. 3, 4 and 5, pp. 198-199"}
Throughout, $A$, $B$ and $R$ satisfy the standing hypotheses of the statement, so that a $\mu$ with continuous first partials and no zero on $R$ is an integrating factor there precisely when $\partial(\mu A)/\partial y = \partial(\mu B)/\partial x$ on $R$ — the equivalence recorded in the statement, which is the criterion theorem applied to $\mu A$ and $\mu B$.

**Case 1: $\mu = \mu(x)$.** Then $\partial(\mu A)/\partial y = \mu A_y$, because $\mu$ does not depend on $y$, while the product rule gives $\partial(\mu B)/\partial x = \mu B_x + \mu' B$. So $\mu$ is an integrating factor exactly when

$$
\mu A_y = \mu B_x + \mu' B , \qquad\text{that is}\qquad \frac{\mu'}{\mu} = \frac{A_y - B_x}{B} = \alpha ,
$$

the division by $B$ being legitimate because $B$ is nowhere zero on $R$, and the division by $\mu$ because $\mu$ is not either.

The left side of that equation depends on $x$ alone, so it can have a solution $\mu(x)$ only if $\alpha$ too is independent of $y$ — which is the hypothesis of case 1, and which also proves the converse quoted in the statement: for an integrating factor $\mu(x)$ as above, $(A_y - B_x)/B$ equals $\mu'/\mu$ and is therefore a continuous function of $x$ alone. Granted the hypothesis, $\alpha$ is continuous on $R$ ($A_y$, $B_x$ and $B$ are continuous there and $B \neq 0$), so it has an antiderivative; $\mu'/\mu = \alpha$ is separable, with solution $\ln\lvert\mu\rvert = \int\alpha$, that is $\mu = \exp\!\left(\int\alpha\right)$. This $\mu$ is positive, hence nowhere zero, and continuously differentiable, since its logarithmic derivative $\alpha$ is continuous — so it meets the conditions a factor must meet. Reading the display backwards, it does satisfy the criterion, hence makes the equation exact on $R$. This is Coddington's Ex. 4 in both directions.

**Case 2: $\mu = \mu(y)$.** Identical with the roles of the variables exchanged, under the hypothesis that $A$ is nowhere zero on $R$ and $\beta$ is independent of $x$: now $\partial(\mu B)/\partial x = \mu B_x$ and $\partial(\mu A)/\partial y = \mu A_y + \mu' A$, so the criterion reads $\mu'/\mu = (B_x - A_y)/A = \beta$ and $\mu = \exp\!\left(\int \beta\right)$. $\square$
:::

:::remark[What an integrating factor can cost]{provenance=original}
- **It must not vanish.** Multiplying by $\mu$ does not change the solution set as long as $\mu \neq 0$, since $A + By' = 0$ and $\mu A + \mu B y' = 0$ then have the same solutions pointwise. Where $\mu$ vanishes the second equation is satisfied automatically and can acquire solutions the first does not have; this is why "nowhere zero" is part of the definition.
- **It is not unique.** If $\mu_1$ and $\mu_2$ are both integrating factors with potentials $U_1$ and $U_2$, then both families of level curves consist of the same solution curves, so $U_2$ is constant along every curve on which $U_1$ is: locally, each potential is a function of the other. The application below exhibits two different integrating factors for the same differential and checks that relation explicitly.
- **The tests divide.** The expression $\alpha = (A_y - B_x)/B$ is undefined where $B = 0$, and $\beta$ where $A = 0$. A one-variable factor may exist and still be invisible to the tests on a region meeting such a curve, so apply the tests on a region where the relevant denominator keeps a fixed sign.
:::

:::statement[The linear equation]{provenance=adapted src="rhb-2006:§14.2.4, Eqs. (14.14)-(14.17), pp. 474-475; arfken-2013:§7.2, Eqs. (7.11)-(7.17) and the two theorems, pp. 336-337"}
A **linear** first-order equation is one of the form

$$
\frac{dy}{dx} + P(x)\,y = Q(x) ,
$$

with $P$ and $Q$ continuous on an interval $I$. Fix $x_0 \in I$ and set

$$
\mu(x) = \exp\!\left(\int_{x_0}^{x} P(t)\,dt\right) > 0 .
$$

Then:

1. Multiplying the equation by $\mu$ turns its left-hand side into the derivative of a single function:
   $$
   \frac{d}{dx}\bigl[\mu(x)y\bigr] = \mu(x)Q(x) .
   $$
   This is what calling $\mu$ an **integrating factor** means here. (Only continuity of $P$ and $Q$ is assumed, so this is one step short of the statement above, whose standing hypotheses ask for $A = Py - Q$ and $B = 1$ to have continuous first partials and hence for $P$ and $Q$ to be $C^1$; when they are, that statement applies verbatim on any rectangle lying over $I$, since $B \equiv 1$ is nowhere zero and the test quantity is $(A_y - B_x)/B = P$, a function of $x$ alone. This includes the case $P \equiv 0$, where the original equation is already exact and $\mu \equiv 1$ — an integrating factor by that definition, which does not ask the equation to be inexact.)
2. The general solution on $I$ is
   $$
   y(x) = \frac{1}{\mu(x)}\left[C + \int_{x_0}^{x}\mu(t)Q(t)\,dt\right] , \qquad C \text{ an arbitrary constant}.
   $$
3. Through every point $(x_1, y_1)$ of the strip $x_1 \in I$, $y_1 \in \mathbb{R}$ there passes exactly one solution, and that solution is defined on the whole of $I$ — not merely near $x_1$.
4. (Arfken, Weber and Harris, p. 337.) The general solution of the inhomogeneous equation is any one particular solution plus the general solution $C/\mu(x)$ of the homogeneous equation $y' + Py = 0$; equivalently, the solution is unique up to an arbitrary multiple of the homogeneous solution. The homogeneous equation has only one linearly independent solution.
:::

:::idea[The linear equation]{provenance=original}
In differential form the equation is $\bigl(P(x)y - Q(x)\bigr)dx + dy = 0$, so $B \equiv 1$ and the test quantity $(A_y - B_x)/B$ equals $P(x)$ — automatically a function of $x$ alone. The linear equation is thus the one case where the one-variable recipe never fails, and its integrating factor can be written down from the coefficient. After multiplying, the whole left side is the derivative of the single product $\mu y$, so one integration finishes the problem. Because the integrals involved exist across the entire interval of continuity, nothing stops the solution part-way: linear equations have no finite-time breakdown.
:::

:::proof[The linear equation]{provenance=adapted src="arfken-2013:§7.2, Eqs. (7.12)-(7.17) and p. 337; rhb-2006:§14.2.4, pp. 474-475"}
1. **What the factor must satisfy.** Let $\mu$ be differentiable and positive on $I$. By the product rule,
   $$
   \frac{d}{dx}\bigl[\mu y\bigr] = \mu y' + \mu' y ,
   $$
   while multiplying the equation by $\mu$ gives $\mu y' + \mu P y = \mu Q$. The two left sides agree for every differentiable $y$ precisely when $\mu' = \mu P$. So the search for an integrating factor is the search for a solution of that one equation; this is Arfken's route, and it bypasses the general theory above.

2. **Solving for the factor.** $\mu' = \mu P$ is separable, and $P$ is continuous on $I$, so $t \mapsto P(t)$ has an antiderivative there and $\mu(x) = \exp\bigl(\int_{x_0}^{x}P\bigr)$ is a solution with $\mu(x_0) = 1$. Being an exponential it is positive on all of $I$, so dividing by it later is always legal. (Any constant multiple of this $\mu$ serves equally well; the constant cancels in step 3, which is why the constant of integration in $\int P$ is conventionally dropped.)

3. **One integration.** With that $\mu$, the equation is equivalent to $\bigl[\mu y\bigr]' = \mu Q$ on $I$. The right side is continuous, hence integrable, and integrating from $x_0$ to $x$,
   $$
   \mu(x)y(x) - y(x_0) = \int_{x_0}^{x}\mu(t)Q(t)\,dt ,
   $$
   using $\mu(x_0) = 1$. Writing $C = y(x_0)$ and dividing by $\mu(x) > 0$ gives the formula in part 2. Conversely, differentiating that formula returns $\bigl[\mu y\bigr]' = \mu Q$, so every member of the family is a solution: the family is exactly the set of solutions, which is what part 1 and part 2 assert.

4. **Existence and uniqueness on the whole interval.** Given $(x_1,y_1)$ with $x_1 \in I$, part 3 shows that a solution with $y(x_1) = y_1$ must have $C = \mu(x_1)y_1 - \int_{x_0}^{x_1}\mu Q$, one value and no other, and that this choice does produce such a solution. Its formula is defined and differentiable at every point of $I$, because $\mu$ is positive and continuous there and $\mu Q$ is integrable on every subinterval. Hence exactly one solution, on all of $I$. For a nonlinear equation neither conclusion holds in general: see :ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness}.

5. **The structure statements.** If $u$ and $w$ both solve the inhomogeneous equation, subtracting the two equations gives $(u-w)' + P(u-w) = 0$, so the difference solves the homogeneous equation; and by part 2 with $Q \equiv 0$ the homogeneous solutions are exactly the multiples $C/\mu$. Two of them, $C_1/\mu$ and $C_2/\mu$, are proportional, so the homogeneous equation has a one-dimensional solution space: at most one linearly independent solution, Arfken's second theorem. $\square$
:::

:::method[Solving a linear equation]{provenance=adapted src="rhb-2006:§14.2.4, p. 475"}
1. Divide through by the coefficient of $y'$ to reach $y' + P(x)y = Q(x)$, and note the interval $I$ on which $P$ and $Q$ are continuous — in particular, exclude the points where the original coefficient of $y'$ vanishes.
2. Compute $\mu(x) = \exp\!\left(\int P(x)\,dx\right)$, dropping the constant of integration.
3. Multiply by $\mu$ and recognise the left side as $(\mu y)'$.
4. Integrate once and divide by $\mu$: $y = \mu^{-1}\bigl[C + \int \mu Q\bigr]$. Fix $C$ from the initial condition.
:::

:::note[The same theorem without normalising]{provenance=adapted src="hassani-2013:§14.2, Theorem 14.2.1, Eqs. (14.7)-(14.8), p. 420"}
Hassani states the solution formula for the unnormalised equation $p_1(x)y' + p_0(x)y = q(x)$, requiring $p_0$, $p_1$ and $q$ to be continuous on an open interval (his $(a,b)$, which has nothing to do with the rectangle dimensions $a$, $b$ used in the exactness criterion above), and obtains the general solution

$$
y = \frac{1}{\mu(x)p_1(x)}\left[C + \int^{x}_{x_1}\mu(t)q(t)\,dt\right] , \qquad \mu(x) = \frac{1}{p_1(x)}\exp\!\left(\int_{x_0}^{x}\frac{p_0(t)}{p_1(t)}\,dt\right) .
$$

This is the same result as part 2 above, with a differently scaled integrating factor: his $\mu$ carries an extra factor $1/p_1$, so his $\mu p_1$ plays the role of our $\mu$. His theorem is stated with no separate hypothesis that $p_1$ is non-vanishing, although the formulas divide by $p_1$; a point where $p_1$ vanishes is a singular point of the equation, and there step 1 of the method above cannot be carried out. We use the normalised form throughout.
:::

:::method[Homogeneous equations]{provenance=adapted src="rhb-2006:§14.2.5, Eqs. (14.18)-(14.19), pp. 475-476; arfken-2013:§7.2, p. 334; coddington-1989:§5.2, Ex. 4, p. 191"}
A function $w$ is **homogeneous of degree $n$** if $w(\lambda x, \lambda y) = \lambda^{n}w(x,y)$ for all $\lambda$ and all $x,y$. The equation $y' = F(x,y)$ is called **homogeneous** when its right-hand side can be written as a quotient

$$
F(x,y) = \frac{N(x,y)}{D(x,y)}
$$

in which $N$ and $D$ are homogeneous of one and the same degree $n$. (The name clashes with "homogeneous" as applied to a linear equation with zero right-hand side; Arfken, Weber and Harris (p. 334) and Coddington (p. 191) both warn about the collision, which is standard and unavoidable. Riley, Hobson and Bence write the quotient as $A/B$, with the opposite sign convention to the differential form $A\,dx + B\,dy = 0$ of the definition block above, where $F = -A/B$; the neutral letters $N$ and $D$ are used here to keep the two apart.) Riley, Hobson and Bence point out the practical test: in each term of the numerator and of the denominator, the powers of $x$ and $y$ must add up to the same number.

**Why the substitution works.** With $N$ and $D$ homogeneous of degree $n$, the quotient $F = N/D$ satisfies $F(\lambda x, \lambda y) = F(x,y)$: it is homogeneous of degree $0$. Taking $\lambda = 1/x$ on the half-plane $x > 0$,

$$
F(x,y) = F\!\left(1, \frac{y}{x}\right) ,
$$

so the right-hand side depends on $x$ and $y$ only through the ratio $v = y/x$; write it $F(v)$, reusing the letter for the one-variable function. (For $x<0$ take $\lambda = -1/x$ and repeat with $F(-1,\cdot)$.) Substituting $y = vx$, so that $y' = v + xv'$,

$$
v + x\frac{dv}{dx} = F(v) \qquad\Longrightarrow\qquad \frac{dv}{F(v) - v} = \frac{dx}{x} ,
$$

which has separated variables.

**Recipe.**

1. Check that every term of the numerator and of the denominator has the same total degree.
2. Record the roots of $F(v) - v$: each root $v_\ast$ gives a straight-line solution $y = v_\ast x$ through the origin, and these are the solutions the next step divides away.
3. Substitute $y = vx$, separate as displayed, and integrate both sides.
4. Replace $v$ by $y/x$.
:::

:::method[Bernoulli's equation]{provenance=adapted src="rhb-2006:§14.2.7, Eq. (14.21), pp. 477-478"}
**Bernoulli's equation** is

$$
\frac{dy}{dx} + P(x)\,y = Q(x)\,y^{n} , \qquad n \neq 0, 1 .
$$

The two excluded values are the ones for which it is already linear. The extra factor $y^n$ makes it nonlinear, but the substitution

$$
v = y^{1-n}
$$

removes the nonlinearity. Indeed $v' = (1-n)y^{-n}y'$, so dividing the equation by $y^{n}$ and substituting,

$$
y^{-n}y' + P\,y^{1-n} = Q \qquad\Longrightarrow\qquad \frac{1}{1-n}\,v' + P\,v = Q \qquad\Longrightarrow\qquad \frac{dv}{dx} + (1-n)P(x)\,v = (1-n)Q(x) ,
$$

a linear equation in $v$, to be solved by the method above and then inverted through $y = v^{1/(1-n)}$.

**Recipe.**

1. Arrange the equation in the displayed form and read off $n$.
2. Note the division by $y^{n}$: for $n > 0$ the function $y \equiv 0$ solves the original equation and is lost, and for non-integer $n$ the work is confined to $y > 0$, where $y^{n}$ and $y^{1-n}$ are defined.
3. Solve the linear equation for $v = y^{1-n}$.
4. Return to $y$ and impose the initial condition.
:::

:::example[Separation, with the lost solutions as asymptotes]{provenance=original}
Solve $\displaystyle \frac{dy}{dx} = x\,(y^{2}-1)$ with $y(0) = 0$.

**Step 1: the constant solutions.** The right-hand side factors as $f(x)\,\sigma(y)$ with $f(x) = x$ and $\sigma(y) = y^2-1$, so the equation is separable. The roots of $\sigma$ are $y = 1$ and $y = -1$, giving the two constant solutions $y \equiv 1$ and $y \equiv -1$. Neither satisfies the initial condition, but they are recorded before dividing.

**Step 2: separate and integrate.** On the strip $-1 < y < 1$, where $\sigma \neq 0$,

$$
\frac{dy}{y^{2}-1} = x\,dx , \qquad \frac{1}{y^2-1} = \frac{1}{2}\left(\frac{1}{y-1} - \frac{1}{y+1}\right) ,
$$

so integrating both sides gives $\tfrac12 \ln\left\lvert\dfrac{y-1}{y+1}\right\rvert = \dfrac{x^{2}}{2} + c$, that is

$$
\frac{y-1}{y+1} = \Lambda\, e^{x^{2}} , \qquad \Lambda = \pm e^{2c} \text{ a non-zero constant}.
$$

**Step 3: the initial condition.** Putting $x = 0$, $y = 0$ gives $-1 = \Lambda$. Hence $y - 1 = -e^{x^2}(y+1)$, and solving for $y$,

$$
y(x) = \frac{1 - e^{x^{2}}}{1 + e^{x^{2}}} = -\tanh\!\left(\frac{x^{2}}{2}\right) ,
$$

the last step by multiplying numerator and denominator by $e^{-x^2/2}$.

**Step 4: check.** Differentiating, $y' = -x\,\operatorname{sech}^2(x^2/2)$, while $x(y^2-1) = x\bigl(\tanh^2(x^2/2) - 1\bigr) = -x\operatorname{sech}^2(x^2/2)$. They agree, and $y(0) = -\tanh 0 = 0$. Numerically $y(1) = -\tanh(1/2) = -0.4621171573$ and $y(2) = -\tanh 2 = -0.9640275801$.

**Step 5: where the lost solutions went.** The solution exists for all real $x$ and satisfies $y(x) \to -1$ as $x \to \pm\infty$, approaching the constant solution $y \equiv -1$ discarded in step 2. The other discarded solution, $y \equiv 1$, is the repelling one: any initial value $y(0) > 1$ gives, by the same formula with $\Lambda > 0$, a solution that blows up at a finite $x$. The two constant solutions are therefore the organising features of the picture, which is the practical reason for step 2 of the method.
:::

:::example[An inexact equation solved with an integrating factor]{provenance=original}
Solve $\bigl(2y^{2} + 2x + 1\bigr)\,dx + 2y\,dy = 0$ with $y(0) = 1$, on the half-plane $y > 0$.

**Step 1: it is inexact.** With $A = 2y^2 + 2x + 1$ and $B = 2y$,

$$
\frac{\partial A}{\partial y} = 4y , \qquad \frac{\partial B}{\partial x} = 0 ,
$$

which differ wherever $y \neq 0$, so the equation is not exact on any rectangle in $y > 0$. Nor is it separable, since $y' = -(2y^2+2x+1)/(2y)$ does not factor, and it is not linear in $y$.

**Step 2: a factor of $x$ alone.** Take as the region a rectangle $R$ inside $y > 0$, where $B = 2y$ is nowhere zero, so that the test quantity of case 1 is defined:

$$
\alpha = \frac{1}{B}\left(\frac{\partial A}{\partial y} - \frac{\partial B}{\partial x}\right) = \frac{4y - 0}{2y} = 2 ,
$$

a constant, hence certainly a continuous function independent of $y$. Case 1 therefore applies and

$$
\mu(x) = \exp\!\left(\int 2\,dx\right) = e^{2x}
$$

is an integrating factor on $R$; it is positive, hence nowhere zero, as required.

**Step 3: the multiplied equation is exact.** Multiplying through by $e^{2x}$,

$$
e^{2x}\bigl(2y^{2} + 2x + 1\bigr)dx + 2y\,e^{2x}\,dy = 0 , \qquad \frac{\partial}{\partial y}\Bigl[e^{2x}(2y^2+2x+1)\Bigr] = 4y\,e^{2x} = \frac{\partial}{\partial x}\bigl(2y\,e^{2x}\bigr) ,
$$

confirming exactness.

**Step 4: the potential.** Integrating the $dx$ coefficient in $x$ at fixed $y$, with $\int 2x\,e^{2x}dx = x e^{2x} - \tfrac12 e^{2x}$,

$$
U(x,y) = \tfrac12 (2y^2+1)e^{2x} + x e^{2x} - \tfrac12 e^{2x} + h(y) = e^{2x}\bigl(y^{2} + x\bigr) + h(y) .
$$

Differentiating in $y$ gives $2y\,e^{2x} + h'(y)$, which must equal $2y\,e^{2x}$; so $h' = 0$ and $h$ is a constant, absorbed into $k$. The solution is therefore

$$
e^{2x}\bigl(y^{2}+x\bigr) = C .
$$

**Step 5: the initial condition and the answer.** At $(0,1)$ the left side is $1$, so $C = 1$ and

$$
y(x) = \sqrt{e^{-2x} - x} \qquad (y > 0) .
$$

Check: $y(0) = 1$; and differentiating, $2yy' = -2e^{-2x} - 1 = -2(y^2 + x) - 1 = -(2y^2+2x+1)$, which is the equation. Numerically $y(0.2) = \sqrt{e^{-0.4}-0.2} = 0.6857988379$.

**An independent check.** The substitution $u = y^2$ turns the equation into $u' + 2u = -(2x+1)$, a linear equation whose integrating factor is the same $e^{2x}$; since $\int (2x+1)e^{2x}dx = x e^{2x}$, it gives $e^{2x}u = -xe^{2x} + C$, that is $u = y^2 = Ce^{-2x} - x$, and $u(0)=1$ fixes $C = 1$ again.

**Step 6: the interval.** The expression under the root is positive for every $x \le 0$ and vanishes where $e^{-2x} = x$, that is at $x_\ast = 0.4263027510$; so the solution exists on $-\infty < x < x_\ast$, with $y \to 0$ at the right end and $y \sim e^{-x} \to \infty$ as $x \to -\infty$. At $x_\ast$ the curve has $dy/dx = -(2y^2+2x+1)/(2y) \to -\infty$: it meets the line $y = 0$ with a vertical tangent, which is what the differential form predicts, since at $y = 0$ the equation reads $(2x+1)\,dx = 0$ and so forces $dx = 0$ as long as $x \neq -\tfrac12$. The level curve $e^{2x}(y^2+x) = 1$ continues smoothly into $y < 0$, but the solution *as a function* $y = \varphi(x)$ with $\varphi > 0$ ends at $x_\ast$ — which is also where the rectangle of step 2, which had to stay inside $y > 0$, runs out.
:::

:::example[A linear equation: a driven relaxation]{provenance=original}
A body with a single thermal time constant exchanges heat with surroundings at temperature $T_{\mathrm{out}}(t)$ according to Newton's law of cooling,

$$
\frac{dT}{dt} = -\kappa\bigl(T - T_{\mathrm{out}}(t)\bigr) , \qquad \kappa > 0 .
$$

Take $\kappa = 0.25\ \mathrm{h}^{-1}$, a daily outdoor cycle $T_{\mathrm{out}}(t) = 10 + 8\cos(\omega t)\ {}^{\circ}\mathrm{C}$ with $\omega = 2\pi/24 = 0.2617993878\ \mathrm{h}^{-1}$, and an initial temperature $T(0) = 20\,^{\circ}\mathrm{C}$.

**Step 1: put it in linear form.** $\dfrac{dT}{dt} + \kappa T = \kappa\bigl(10 + 8\cos\omega t\bigr)$, so $P \equiv \kappa$ and $Q(t) = \kappa(10 + 8\cos\omega t)$, both continuous on all of $\mathbb{R}$. Part 3 of the linear theorem therefore gives a unique solution defined for all $t$.

**Step 2: the integrating factor.** $\mu(t) = \exp\!\left(\int \kappa\,dt\right) = e^{\kappa t}$, and the equation becomes $\bigl(e^{\kappa t}T\bigr)' = \kappa\,e^{\kappa t}\bigl(10 + 8\cos\omega t\bigr)$.

**Step 3: integrate.** With $\int e^{\kappa t}\cos\omega t\,dt = e^{\kappa t}\,\dfrac{\kappa\cos\omega t + \omega\sin\omega t}{\kappa^{2}+\omega^{2}}$ (check by differentiating),

$$
e^{\kappa t}T = 10\,e^{\kappa t} + \frac{8\kappa\bigl(\kappa\cos\omega t + \omega \sin\omega t\bigr)}{\kappa^{2}+\omega^{2}}\,e^{\kappa t} + C ,
$$

so, writing the bracket as a single cosine with a phase,

$$
T(t) = 10 + \frac{8\kappa}{\sqrt{\kappa^{2}+\omega^{2}}}\cos(\omega t - \phi) + C e^{-\kappa t} , \qquad \tan\phi = \frac{\omega}{\kappa} .
$$

**Step 4: the numbers.** Here $\omega/\kappa = 1.047197551$, so

$$
\phi = \arctan(1.047197551) = 0.8084487926\ \mathrm{rad} , \qquad \frac{\kappa}{\sqrt{\kappa^2+\omega^2}} = 0.6906211226 ,
$$

giving a driven amplitude $8 \times 0.6906211226 = 5.524968980\,^{\circ}\mathrm{C}$. The initial condition fixes $C = 20 - 10 - 5.524968980\cos\phi = 6.184339721$.

**Step 5: read the answer.** After the transient $Ce^{-\kappa t}$ has died away (a few multiples of $1/\kappa = 4$ h), the body oscillates about $10\,^{\circ}\mathrm{C}$ with amplitude $5.52\,^{\circ}\mathrm{C}$ instead of the outdoor $8\,^{\circ}\mathrm{C}$, and its extremes lag the outdoor ones by

$$
\frac{\phi}{\omega} = \frac{0.8084487926}{0.2617993878} = 3.088046918\ \mathrm{h} .
$$

Checks on the formula: $T(0) = 20.00000000$ as imposed; $T(6) = 15.37566281$, $T(12) = 6.492239865$, and after two days $T(48) = 13.81569828$. Since $48\omega = 4\pi$, the purely periodic part there is $10 + 5.524968980\cos(-\phi) = 13.81566028$, and the gap between the two is $3.79979\times10^{-5}$ — exactly the surviving transient $Ce^{-12}$, as it must be.
:::

:::example[A homogeneous equation: a logarithmic spiral]{provenance=original}
Solve $\displaystyle \frac{dy}{dx} = \frac{x + 2y}{2x - y}$ with $y(1) = 0$.

**Step 1: degrees.** Every term of the numerator and of the denominator is of total degree $1$, so the equation is homogeneous of degree $1$ and the substitution $y = vx$ applies on $x > 0$.

**Step 2: the straight-line solutions.** Here $F(v) = (1+2v)/(2-v)$, and

$$
F(v) - v = \frac{1 + 2v - v(2-v)}{2-v} = \frac{1 + v^{2}}{2 - v} ,
$$

whose numerator never vanishes. So there are no straight-line solutions to lose; the division in the next step costs nothing. (At $v = 2$, that is on the line $y = 2x$, the original right-hand side is undefined.)

**Step 3: separate and integrate.** With $y = vx$,

$$
x\frac{dv}{dx} = \frac{1+v^{2}}{2-v} \qquad\Longrightarrow\qquad \frac{2-v}{1+v^{2}}\,dv = \frac{dx}{x} ,
$$

and integrating each side,

$$
2\arctan v - \tfrac12 \ln\bigl(1+v^{2}\bigr) = \ln x + c .
$$

**Step 4: the initial condition.** At $x = 1$, $y = 0$ we have $v = 0$, and both sides vanish, so $c = 0$.

**Step 5: recognise the curve.** Put $v = y/x = \tan\theta$ and $r = \sqrt{x^2+y^2}$, so that $1 + v^2 = \sec^2\theta$ and $x = r\cos\theta$. Then $\tfrac12\ln(1+v^2) = -\ln\cos\theta$ and the relation becomes

$$
2\theta + \ln\cos\theta = \ln x = \ln r + \ln\cos\theta , \qquad\text{that is}\qquad r = e^{2\theta} :
$$

a logarithmic spiral through $(1,0)$. Check: on $r = e^{2\theta}$ one has $dr/d\theta = 2r$, so

$$
\frac{dy}{dx} = \frac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta} = \frac{2\sin\theta+\cos\theta}{2\cos\theta - \sin\theta} = \frac{r\cos\theta + 2r\sin\theta}{2r\cos\theta - r\sin\theta} = \frac{x+2y}{2x-y} ,
$$

as required. At $\theta = \pi/4$ the curve is at $r = e^{\pi/2} = 4.810477381$, that is $x = y = 3.401521177$, and $2\arctan(y/x) = \pi/2 = \ln r$ confirms the implicit relation.

**Step 6: where $y$ stops being a function of $x$.** The denominator $2x - y$ vanishes when $\tan\theta = 2$, that is at $\theta = \arctan 2 = 1.107148718$, where $r = 9.154974892$ and $x$ attains its largest value $4.094229238$ on this arc. The spiral continues happily past that point, but as a solution of the equation in the form $y = \varphi(x)$ the answer ends there, with a vertical tangent — the situation anticipated in the definition block.
:::

:::example[A Bernoulli equation: logistic growth]{provenance=original}
Solve $\displaystyle \frac{dy}{dt} = a y - \frac{a}{K}y^{2}$ with $a = 0.5\ \mathrm{yr}^{-1}$, $K = 1000$ and $y(0) = 50$.

**Step 1: identify it.** Written as $y' - ay = -(a/K)y^{2}$ this is Bernoulli's equation with $P = -a$, $Q = -a/K$ and $n = 2$, so $n \neq 0,1$ and the substitution is $v = y^{1-n} = y^{-1}$. Since $n = 2 > 0$, the function $y \equiv 0$ solves the original equation and will be lost; it is the extinct state, and the initial value $50$ is not it.

**Step 2: linearise.** With $v = 1/y$ one has $v' = -y'/y^{2}$, so dividing the equation by $y^{2}$ and substituting,

$$
\frac{y'}{y^{2}} = \frac{a}{y} - \frac{a}{K} \qquad\Longrightarrow\qquad -v' = av - \frac{a}{K} \qquad\Longrightarrow\qquad \frac{dv}{dt} + a v = \frac{a}{K} ,
$$

which is the general Bernoulli reduction $v' + (1-n)Pv = (1-n)Q$ with $1-n = -1$.

**Step 3: solve the linear equation.** The integrating factor is $\mu = e^{at}$, so $\bigl(e^{at}v\bigr)' = (a/K)e^{at}$ and

$$
e^{at}v = \frac{e^{at}}{K} + C , \qquad v(t) = \frac{1}{K} + C\,e^{-at} .
$$

**Step 4: back to $y$, with the initial condition.** $v(0) = 1/50$ gives $C = 1/50 - 1/1000 = 19/1000$, so

$$
y(t) = \frac{1}{v(t)} = \frac{K}{1 + 19\,e^{-at}} = \frac{1000}{1 + 19\,e^{-t/2}} .
$$

**Step 5: check the numbers.** Substituting back into $y' = ay(1 - y/K)$ gives zero identically. The values are $y(0) = 50$, $y(5) = 390.6837592$, $y(10) = 886.5083241$ and $y(20) = 999.1381448$; the population passes half the carrying capacity at $t = \ln(19)/a = 5.888877958$ yr, and $y \to K = 1000$ as $t \to \infty$ — approaching the other constant solution, $y \equiv K$, which separation would have discarded at the same point in the argument. Note that the equation is separable too; the Bernoulli route is preferable here because it replaces a partial-fraction integration by a linear equation that can be solved in one line.
:::

:::application[Integrating factors in thermodynamics: entropy and the adiabatic invariant]{provenance=original}
The clearest physical appearance of these methods is not as a way of solving an equation but as a way of recognising a state function. For a simple compressible system the first law says that the heat absorbed along a path is

$$
\delta Q = dE + p\,dV ,
$$

where $E$ is the internal energy (written $U$ in most thermodynamics texts, and renamed here because $U$ already denotes the potential of an exact differential). The central fact of thermodynamics is that $\delta Q$ is not the differential of any function of state: heat absorbed depends on the path, not only on its endpoints. In the language above, $\delta Q$ is an inexact differential, and the content of the second law is that a particular integrating factor makes it exact.

**The ideal gas, explicitly.** Take a fixed amount of ideal gas, $n$ moles, with constant heat capacity $C_V$, so that $E = C_V T$ and $p = nRT/V$, and use $(T,V)$ as the two state variables. Then

$$
\delta Q = C_V\,dT + \frac{nRT}{V}\,dV ,
$$

so in the notation of this unit $A = C_V$ and $B = nRT/V$ with $x = T$, $y = V$. The exactness test fails:

$$
\frac{\partial A}{\partial V} = 0 , \qquad \frac{\partial B}{\partial T} = \frac{nR}{V} \neq 0 .
$$

So no function of the state $(T,V)$ has $\delta Q$ as its differential, which is the precise sense in which "the heat content of a state" does not exist.

**Both one-variable tests succeed.** This differential is unusual in that the two tests of the integrating-factor statement both apply. With $x = T$ and $y = V$,

$$
\alpha = \frac{1}{B}\left(\frac{\partial A}{\partial V} - \frac{\partial B}{\partial T}\right) = \frac{V}{nRT}\left(0 - \frac{nR}{V}\right) = -\frac{1}{T} ,
\qquad
\beta = \frac{1}{A}\left(\frac{\partial B}{\partial T} - \frac{\partial A}{\partial V}\right) = \frac{nR}{C_V V} ,
$$

the first a function of $T$ alone and the second a function of $V$ alone. Case 1 therefore gives $\mu = \exp\!\left(\int(-1/T)\,dT\right) = 1/T$ and case 2 gives $\mu = \exp\!\left(\int nR/(C_VV)\,dV\right) = V^{nR/C_V}$. The two factors compute two different things, and both are physically familiar.

**First integrating factor: $1/T$.** Multiplying by $1/T$ gives $(C_V/T)\,dT + (nR/V)\,dV$, and now

$$
\frac{\partial}{\partial V}\left(\frac{C_V}{T}\right) = 0 = \frac{\partial}{\partial T}\left(\frac{nR}{V}\right) ,
$$

so the multiplied differential is exact, with potential

$$
S(T,V) = C_V\ln T + nR\ln V ,
$$

the entropy of the ideal gas, up to the additive constant that no potential of a differential ever fixes; we set that constant to zero, which is the choice used below. One checks directly that $\partial S/\partial T = C_V/T$ and $\partial S/\partial V = nR/V$.

**Second integrating factor: $V^{nR/C_V}$, and what it computes.** Following case 2 with the $\beta$ just computed,

$$
\mu(V) = \exp\!\left(\int \frac{nR}{C_V V}\,dV\right) = V^{nR/C_V} = V^{\gamma-1} ,
$$

using $nR = C_p - C_V$ and $\gamma = C_p/C_V$, so that $nR/C_V = \gamma - 1$. Multiplying $\delta Q$ by it gives $C_V V^{\gamma-1}dT + nR\,T\,V^{\gamma-2}dV$, whose two mixed derivatives are both $nRV^{\gamma-2}$, and whose potential is

$$
\Phi(T,V) = C_V\,T\,V^{\gamma-1} .
$$

The level curves $\Phi = \text{const}$ are $TV^{\gamma-1} = \text{const}$: the adiabats of the ideal gas. This is exactly what the theory predicts, in two ways. First, $\delta Q = 0$ is a first-order equation in the differential form $A\,dT + B\,dV = 0$, and once an integrating factor is found, its potential is constant along the solution curves — so an adiabatic process is a solution curve of $\delta Q = 0$, and $TV^{\gamma-1}$ is the quantity conserved along it. Second, the remark on non-uniqueness above says that two potentials of the same differential must be functions of one another, and indeed

$$
\Phi = C_V\,T\,V^{\gamma-1} = C_V\exp\!\left(\frac{C_V\ln T + nR\ln V}{C_V}\right) = C_V\,e^{S/C_V} ,
$$

with $S$ normalised as above; a different additive constant $S_0$ in $S$ only replaces this by $\Phi = C_V e^{(S-S_0)/C_V}$. Either way $\Phi$ is a function of $S$ alone, as it must be: the adiabats are the curves of constant entropy.

**What the mathematics does and does not deliver.** Riley, Hobson and Bence's assertion that an inexact differential in two variables can always be made exact (p. 473) is what makes a function like $S$ available at all for a system with two independent state variables; it says nothing about which factor to choose, and here it offers two with equal ease. The physical content of the second law is that one of them, $1/T$ with $T$ the absolute temperature, works simultaneously for every system and for systems with more state variables than two, where the mere existence of an integrating factor is no longer automatic. The first-order theory supplies the framework and the bookkeeping; the universality of $1/T$ is physics.

A second, more mundane use of the same machinery is the driven relaxation of the third example: Newton's law of cooling, an $RC$ or $RL$ circuit, a first-order sensor, and the linearised response of any system with a single relaxation time all have the form $y' + y/\tau = u(t)/\tau$, where $u$ is the input — the ambient temperature, the applied voltage, the true gas temperature. In the notation of the linear-equation statement above this is $P \equiv 1/\tau$ and $Q = u/\tau$, the whole right-hand side. The integrating factor $e^{t/\tau}$ turns it into one integral, and the answer always has the same two parts — a transient $\propto e^{-t/\tau}$ that remembers the initial condition, and a driven response that does not. For sinusoidal forcing at angular frequency $\omega$ the driven part has its amplitude reduced by the factor $(1 + \omega^2\tau^2)^{-1/2}$ and is delayed by $\arctan(\omega\tau)/\omega$: a first-order low-pass filter. For a thermocouple with $\tau = 4\ \mathrm{s}$ reading a gas temperature that oscillates at $0.1\ \mathrm{Hz}$, $\omega\tau = 2.513274123$, so the recorded swing is only $0.3696978476$ of the true swing and arrives $1.897306001\ \mathrm{s}$ late out of a $10\ \mathrm{s}$ period. Reading those two numbers backwards is how such an instrument is calibrated.
:::
