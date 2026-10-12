---
id: found.taylor-several-variables
title: Taylor expansion and critical points in several variables
kind: theorem
level: core
summary: Gives the second-order Taylor expansion of a $C^2$ function of $n$ variables in Peano and mean-value form, and classifies a critical point as a strict local minimum, a strict local maximum or a saddle according as the Hessian there is positive definite, negative definite or indefinite, with no conclusion when it is singular and semidefinite.
prereqs: [found.partial-derivatives-chain-rule, found.taylor-theorem, linalg.quadratic-forms]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§5.7, Eqs. (5.18)–(5.20), pp. 160–162 (Taylor expansion in two and $n$ variables); §5.8, pp. 162–167 (stationary points: the two-variable criteria on p. 164, the eigenvalue criteria and the remark on vanishing eigenvalues on p. 167)"
    pages: "160-167"
    role: the expansion in physicists' notation; classification of stationary points by definiteness and by eigenvalue sign
  - work: lee-2013
    loc: "App. C, Thm C.15 and Eqs. (C.7)–(C.9), p. 648 (Taylor's theorem to order $k$ with integral remainder); Prop. C.6, p. 646 (symmetry of the Hessian)"
    pages: "646, 648"
    role: the general-order expansion with explicit remainder; symmetry of the second-derivative matrix
---

:::definition[Gradient, Hessian, critical point, definiteness]{provenance=adapted src="rhb-2006:§5.8, pp. 162–163 and pp. 166–167; lee-2013:App. C, Prop. C.6, p. 646"}
Let $U \subseteq \mathbb{R}^n$ be open and $f : U \to \mathbb{R}$.

- If $f$ is differentiable at $a \in U$, its **gradient** there is the column vector $\nabla f(a) = \bigl(\partial f/\partial x_1(a), \dots, \partial f/\partial x_n(a)\bigr)^{\mathsf T}$, so that $Df(a)h = \nabla f(a) \cdot h$.
- If $f$ is of class $C^2$ on $U$, its **Hessian** at $a$ is the $n \times n$ matrix
  $$
  H_f(a) = \left( \frac{\partial^2 f}{\partial x_i \, \partial x_j}(a) \right)_{i,j \le n},
  $$
  the entry in row $i$ and column $j$ being $\partial_i\bigl(\partial_j f\bigr)(a)$ — the rightmost index differentiated first, the convention fixed in :ref[the unit on partial derivatives]{to=found.partial-derivatives-chain-rule}. That unit's equality of mixed partials makes $H_f(a)$ symmetric because $f$ is $C^2$, so which index is read first makes no difference here.
- $a \in U$ is a **critical point** (or stationary point) of $f$ if $f$ is differentiable at $a$ and $\nabla f(a) = 0$.
- $a$ is a **local minimum** of $f$ if $f(x) \ge f(a)$ for all $x$ in some ball $B_r(a) \subseteq U$, and a **strict local minimum** if $f(x) > f(a)$ for all $x \in B_r(a)$ with $x \neq a$; local maxima are defined with the inequalities reversed. A **saddle point** is a critical point that is neither a local minimum nor a local maximum.
- A real symmetric $n \times n$ matrix $H$ is **positive definite** if $h^{\mathsf T} H h > 0$ for every $h \ne 0$, **positive semidefinite** if $h^{\mathsf T} H h \ge 0$ for every $h$, **negative (semi)definite** if $-H$ is positive (semi)definite, and **indefinite** if $u^{\mathsf T} H u > 0$ and $w^{\mathsf T} H w < 0$ for some $u, w \in \mathbb{R}^n$. Its eigenvalues are real, and the eigenvalue test of :ref[quadratic forms]{to=linalg.quadratic-forms} makes $H$ positive definite exactly when all of them are positive and positive semidefinite exactly when none of them is negative. Applied to $-H$, whose eigenvalues are $-\lambda$ for each eigenvalue $\lambda$ of $H$, the same test makes $H$ negative definite exactly when all are negative and negative semidefinite exactly when none is positive. The indefinite case is not among the ones that unit states, but it follows from those two: being indefinite is exactly failing both semidefiniteness conditions, so $H$ is indefinite exactly when some eigenvalue is positive and some is negative.
:::

:::statement[Second-order Taylor expansion]{provenance=adapted src="rhb-2006:§5.7, Eqs. (5.18) and (5.20), pp. 160–162; lee-2013:App. C, Thm C.15, p. 648"}
Let $U \subseteq \mathbb{R}^n$ be open, let $f : U \to \mathbb{R}$ be of class $C^2$ on $U$ and let $a \in U$. Then, as $h \to 0$,

$$
f(a + h) = f(a) + \sum_{j=1}^{n} \frac{\partial f}{\partial x_j}(a)\, h_j + \frac{1}{2} \sum_{j=1}^{n} \sum_{k=1}^{n} \frac{\partial^2 f}{\partial x_j \, \partial x_k}(a)\, h_j h_k + o\bigl(\lvert h \rvert^2\bigr),
$$

that is, the difference between $f(a+h)$ and the quadratic polynomial written here, divided by $\lvert h \rvert^2$, tends to $0$. The single sum is $\nabla f(a)\cdot h$ and the double sum is $h^{\mathsf T} H_f(a)\, h$.

If $f$ is of class $C^{k+1}$ on $U$ and $W \subseteq U$ is convex with $a \in W$, the expansion continues to order $k$ for every $x \in W$: $f(x)$ equals its $k$th Taylor polynomial at $a$ plus a remainder given by an explicit integral of the $(k+1)$st partial derivatives along the segment from $a$ to $x$.

Neither cited source states the $o(\lvert h\rvert^2)$ remainder; what each of them does state, and how the display follows, is set out in the remark on provenance below.
:::

:::statement[Mean-value form of the second-order expansion]{provenance=original}
Let $U \subseteq \mathbb{R}^n$ be open, let $f : U \to \mathbb{R}$ be of class $C^2$ on $U$, let $a \in U$ and let $h \in \mathbb{R}^n$ be such that the closed segment $\{a + th : 0 \le t \le 1\}$ lies in $U$. Then there is some $\theta \in (0,1)$, depending on $a$ and $h$, with

$$
f(a + h) = f(a) + \nabla f(a) \cdot h + \tfrac{1}{2}\, h^{\mathsf T} H_f(a + \theta h)\, h .
$$

Neither cited source states this form; see the remark on provenance below.
:::

:::idea[Both expansions, from one variable]{provenance=original}
Restrict $f$ to the segment through $a$ in the direction $h$. The function $g(t) = f(a+th)$ of the single variable $t$ has $g'(t) = \nabla f(a+th)\cdot h$ and $g''(t) = h^{\mathsf T} H_f(a+th)\,h$, by the chain rule, so one-variable Taylor's theorem with the Lagrange remainder applied to $g$ on $[0,1]$ *is* the mean-value form. The $o(\lvert h\rvert^2)$ form follows from it by replacing $H_f(a+\theta h)$ with $H_f(a)$: what that costs is at most $\lvert h \rvert^2$ times the amount by which the second partial derivatives vary on the ball of radius $\lvert h\rvert$ about $a$, and that amount tends to $0$ as $h \to 0$ precisely because $f$ is $C^2$.
:::

:::proof[Mean-value form]{provenance=adapted src="lee-2013:App. C, Thm C.15 and its proof, p. 648"}
Let $U$, $f$, $a$ and $h$ be as in the statement. If $h = 0$ every $\theta$ works, so assume $h \neq 0$.

- *The one-variable function is defined on an open set containing $[0,1]$.* The set $T = \{t \in \mathbb{R} : a + th \in U\}$ is the preimage of the open set $U$ under the continuous map $t \mapsto a+th$, hence open, and it contains $[0,1]$ because the closed segment lies in $U$ — the hypothesis on $h$. Every $t \in [0,1]$, the end points included, therefore has an open interval about it inside $T$, so derivatives taken below at $t = 0$ and $t = 1$ are two-sided ones, exactly like those at interior points. No other property of $T$ is used.
- *Its derivatives are the directional derivatives of $f$.* On $T$ put $g(t) = f(a+th)$. The map $t \mapsto a+th$ is affine, so the :ref[chain rule]{to=found.partial-derivatives-chain-rule} applies and gives
  $$
  g'(t) = \sum_{j=1}^{n} \frac{\partial f}{\partial x_j}(a+th)\, h_j = \nabla f(a+th)\cdot h ,
  $$
  and applying it once more to each term,
  $$
  g''(t) = \sum_{j=1}^{n}\sum_{k=1}^{n} \frac{\partial^2 f}{\partial x_k \,\partial x_j}(a+th)\, h_j h_k = h^{\mathsf T} H_f(a+th)\, h .
  $$
  Because $f$ is $C^2$ on $U$, all the first and second partial derivatives appearing here are continuous, so $g''$ is continuous on $T$ and in particular on $[0,1]$.
- *Apply the one-variable theorem.* :ref[Taylor's theorem]{to=found.taylor-theorem} with $N = 1$, expansion point $0$ and evaluation point $1$ requires exactly that $g''$ exist and be continuous on $[0,1]$, which the previous step supplies. Its Lagrange remainder gives a point $\theta$ between $0$ and $1$ with
  $$
  g(1) = g(0) + g'(0) + \tfrac{1}{2} g''(\theta) .
  $$
  As that unit states the conclusion, $\theta$ lies in the closed interval $[0,1]$, and that is all the rest of this unit uses: every later appeal to the mean-value form needs only $\lvert \theta h\rvert \le \lvert h\rvert$. The strict inclusion $\theta \in (0,1)$ asserted in the statement comes from the sharper version recorded in that unit's remark on its hypotheses, where it is enough that $g'$ be continuous on $[0,1]$ and $g''$ exist at every interior point, and $\theta$ may then be taken strictly between the end points. Both conditions hold here, since $g$ is $C^2$ on the open set $T \supseteq [0,1]$.
- *Read the terms back.* $g(1) = f(a+h)$, $g(0) = f(a)$, $g'(0) = \nabla f(a)\cdot h$ and $g''(\theta) = h^{\mathsf T}H_f(a+\theta h)h$, which is the display of the statement. $\square$

The reduction to the single variable $t$ along the segment is the route of Lee's Thm C.15; he carries it to order $k$ and keeps an integral remainder, whereas the Lagrange remainder of our one-variable unit is what produces the intermediate point $\theta$.
:::

:::proof[The $o(\lvert h \rvert^2)$ form]{provenance=original}
Write $H = H_f(a)$ and let $P(h) = f(a) + \nabla f(a)\cdot h + \tfrac12 h^{\mathsf T}Hh$ be the quadratic polynomial of the statement, whose two sums are the ones displayed there.

- *A ball on which the mean-value form is available.* $U$ is open, so fix $r > 0$ with $B_r(a) \subseteq U$. For $0 < \lvert h\rvert < r$ the closed segment from $a$ to $a+h$ lies in the convex set $B_r(a) \subseteq U$, so the mean-value form applies and yields a $\theta = \theta(h) \in (0,1)$ with
  $$
  f(a+h) - P(h) = \tfrac12\, h^{\mathsf T}\bigl[ H_f(a+\theta h) - H \bigr] h .
  $$
- *A crude bound for a quadratic form.* For any real $n \times n$ matrix $A$,
  $$
  \bigl\lvert h^{\mathsf T} A h \bigr\rvert \le \sum_{j,k} \lvert A_{jk}\rvert \lvert h_j\rvert \lvert h_k \rvert \le \Bigl(\max_{j,k} \lvert A_{jk}\rvert\Bigr) \Bigl( \sum_{j} \lvert h_j \rvert \Bigr)^{2} \le n \Bigl(\max_{j,k}\lvert A_{jk}\rvert\Bigr) \lvert h \rvert^2 ,
  $$
  the last step by the Cauchy–Schwarz inequality $\bigl(\sum_j \lvert h_j\rvert\bigr)^2 \le n \sum_j h_j^2$.
- *The matrix in question is small.* For $0 \le s < r$ put
  $$
  \omega(s) = \max_{j,k} \; \sup_{\lvert u \rvert \le s} \left\lvert \frac{\partial^2 f}{\partial x_j\,\partial x_k}(a+u) - \frac{\partial^2 f}{\partial x_j \,\partial x_k}(a) \right\rvert .
  $$
  Each second partial derivative is continuous at $a$, because $f$ is $C^2$; there are finitely many of them, so $\omega(s) \to 0$ as $s \to 0^+$. Since $\lvert \theta h\rvert \le \lvert h \rvert$, the entries of $H_f(a+\theta h) - H$ are bounded in modulus by $\omega(\lvert h\rvert)$.
- *Conclude.* Combining the three previous steps, $\lvert f(a+h) - P(h)\rvert \le \tfrac12 n\, \omega(\lvert h\rvert)\, \lvert h\rvert^2$ for $0 < \lvert h \rvert < r$, so
  $$
  \frac{\lvert f(a+h) - P(h)\rvert}{\lvert h\rvert^{2}} \le \tfrac12 n\, \omega(\lvert h\rvert) \xrightarrow[h \to 0]{} 0 ,
  $$
  which is the assertion $f(a+h) = P(h) + o(\lvert h\rvert^2)$. $\square$

Only a ball about $a$ was used, so this form needs no convexity hypothesis on $U$, as the statement records.
:::

:::remark{provenance=adapted src="rhb-2006:§5.7, Eqs. (5.18) and (5.20), pp. 160–162, and §5.8, pp. 164 and 167; lee-2013:App. C, Thm C.15 and Eqs. (C.7)–(C.9), p. 648"}
**What the sources state, and what is ours.**

- *The $o(\lvert h\rvert^2)$ remainder.* Riley, Hobson and Bence write Eqs. (5.18) and (5.20) as a formal series ending in "$+\cdots$", with no remainder estimate at all. Lee's Thm C.15 does give an exact remainder, but it is not the one displayed above: taking $k = 1$ there — the case whose hypothesis is exactly $f \in C^2$ — produces the *first*-order Taylor polynomial, with
  $$
  f(a+h) = f(a) + \nabla f(a)\cdot h + R_1(h), \qquad
  R_1(h) = \sum_{j=1}^{n}\sum_{k=1}^{n} h_j h_k \int_0^1 (1-t)\, \frac{\partial^2 f}{\partial x_j \, \partial x_k}(a+th)\, dt ,
  $$
  valid whenever the segment from $a$ to $a+h$ lies in a convex subset of $U$, so for all small $\lvert h\rvert$. This $R_1(h)$ is *not* $o(\lvert h\rvert^2)$: it carries the quadratic term itself. (For $n = 1$, $f(x) = x^2$ and $a = 0$ the first-order polynomial is $0$ while $R_1(h) = h^2$.)
- *How the display follows from it, which is ours.* $R_1$ splits. Since $\int_0^1 (1-t)\,dt = \tfrac12$, subtracting and adding the value of each second partial derivative at $a$ gives
  $$
  R_1(h) = \tfrac12\, h^{\mathsf T} H_f(a)\, h \;+\; \sum_{j=1}^{n}\sum_{k=1}^{n} h_j h_k \int_0^1 (1-t)\left[ \frac{\partial^2 f}{\partial x_j\,\partial x_k}(a+th) - \frac{\partial^2 f}{\partial x_j\,\partial x_k}(a) \right] dt ,
  $$
  and it is the second piece alone that is $o(\lvert h\rvert^2)$, because the second partial derivatives are continuous at $a$ and so the brackets tend to $0$ uniformly in $t \in [0,1]$ as $h \to 0$. The displayed expansion is therefore a consequence of Lee's case $k = 1$ and not that case itself. The splitting is ours, and so is the route actually taken in the two proofs above, which reaches the same $o(\lvert h\rvert^2)$ statement from the mean-value form instead of from the integral remainder.
- *The mean-value form.* Neither source states it. It is :ref[Taylor's theorem]{to=found.taylor-theorem} with the Lagrange remainder, applied to the one-variable function $t \mapsto f(a+th)$ on $[0,1]$, and the reduction to that one variable is the only thing it shares with Lee's Thm C.15.
- *The word "strict" in the classification.* Riley, Hobson and Bence give the two-variable criteria on p. 164 and the eigenvalue criteria on p. 167, and both are phrased with "minima" and "maxima"; neither says *strict*. The strengthening to strict local extrema in parts 1 and 2 of the next statement goes beyond those pages and is ours. What supplies it is the remainder estimate in the proof below: it bounds $\lvert R(h)\rvert$ by a fraction of $\lambda_1\lvert h\rvert^2$, which gives a sign of $f(a+h) - f(a)$ at *every* $h \ne 0$ in a punctured ball, not merely a weak inequality.
:::

:::statement[Classification of a critical point by the Hessian]{provenance=adapted src="rhb-2006:§5.8, pp. 164 and 167"}
Let $U \subseteq \mathbb{R}^n$ be open, let $f : U \to \mathbb{R}$ be of class $C^2$ on $U$, let $a \in U$ satisfy $\nabla f(a) = 0$, and put $H = H_f(a)$.

1. If $H$ is positive definite, $a$ is a strict local minimum of $f$.
2. If $H$ is negative definite, $a$ is a strict local maximum of $f$.
3. If $H$ is indefinite, $a$ is a saddle point; more precisely, every ball $B_r(a) \subseteq U$ contains points where $f > f(a)$ and points where $f < f(a)$.

In two variables, with $D = \det H = f_{xx}f_{yy} - f_{xy}^2$ evaluated at $a$:

- $D > 0$ and $f_{xx} > 0$: strict local minimum (then $f_{yy} > 0$ automatically);
- $D > 0$ and $f_{xx} < 0$: strict local maximum (then $f_{yy} < 0$ automatically);
- $D < 0$: saddle point;
- $D = 0$: the test does not classify the point. (It is not quite silent: the next statement says what is still excluded and what is not.)
:::

:::idea[Why the Hessian decides]{provenance=adapted src="rhb-2006:§5.8, pp. 166–167"}
At a critical point the linear term of the expansion is absent, so $f(a+h) - f(a)$ is the quadratic form $\tfrac12 h^{\mathsf T}Hh$ plus an error small compared with $\lvert h\rvert^2$. In an orthonormal eigenbasis of $H$ the form becomes $\tfrac12\sum_r \lambda_r a_r^2$, so the signs of the eigenvalues say which signs the form takes. A *definite* form does more: on the unit sphere it is bounded away from zero, by the extreme eigenvalue, and that margin is a fixed multiple of $\lvert h \rvert^2$, which the error cannot overcome. When the form takes both signs one need only walk along the two directions that witness this.
:::

:::proof[Classification of a critical point]{provenance=adapted src="rhb-2006:§5.8, pp. 164, 166–167"}
Throughout, $\nabla f(a) = 0$ and $H = H_f(a)$, which is symmetric because $f$ is $C^2$. The second-order expansion proved above then reads
$$
f(a+h) - f(a) = \tfrac12\, h^{\mathsf T}Hh + R(h), \qquad \frac{R(h)}{\lvert h\rvert^2} \to 0 \text{ as } h \to 0 .
$$

The five numbered items below are the steps of the argument, not the parts of the statement: items 1 and 2 together prove part 1, item 3 proves part 2, item 4 proves part 3, and item 5 is the two-variable specialisation. Each item names the part it serves.

1. *Part 1, the quadratic form has a margin.* The eigenvalues $\lambda_1 \le \cdots \le \lambda_n$ of $H$ are real and, by the eigenvalue test for definiteness, all positive, so $\lambda_1 > 0$. The Rayleigh bound of :ref[quadratic forms]{to=linalg.quadratic-forms} gives $h^{\mathsf T}Hh \ge \lambda_1 \lvert h\rvert^2$ for every $h$.
2. *Part 1 concluded: positive definite gives a strict local minimum.* Because $R(h) = o(\lvert h\rvert^2)$ and $U$ is open, there is $r > 0$ with $B_r(a) \subseteq U$ and $\lvert R(h)\rvert \le \tfrac14 \lambda_1 \lvert h\rvert^2$ whenever $\lvert h \rvert < r$ — this is the definition of the limit in the display, with $\tfrac14\lambda_1$ as the tolerance, and it is here that positive *definiteness*, not mere semidefiniteness, is used: the tolerance has to be a positive multiple of $\lvert h\rvert^2$. Hence for $0 < \lvert h \rvert < r$
   $$
   f(a+h) - f(a) \ge \tfrac12\lambda_1\lvert h\rvert^2 - \tfrac14\lambda_1\lvert h\rvert^2 = \tfrac14 \lambda_1 \lvert h \rvert^2 > 0 ,
   $$
   so $a$ is a strict local minimum.
3. *Part 2: negative definite.* Apply part 1 to $-f$, which is $C^2$, has $\nabla(-f)(a) = 0$ and $H_{-f}(a) = -H$ positive definite; a strict local minimum of $-f$ at $a$ is a strict local maximum of $f$.
4. *Part 3: indefinite gives a saddle.* Choose $u$ with $u^{\mathsf T}Hu > 0$; then $u \neq 0$. For $t \neq 0$ with $a + tu \in U$,
   $$
   f(a+tu) - f(a) = t^2\left( \tfrac12 u^{\mathsf T}Hu + \frac{R(tu)}{t^2} \right), \qquad \frac{R(tu)}{t^{2}} = \lvert u\rvert^{2}\,\frac{R(tu)}{\lvert tu\rvert^{2}} \xrightarrow[t \to 0]{} 0 ,
   $$
   so the bracket is positive for all small enough $\lvert t\rvert \neq 0$ and $f(a+tu) > f(a)$ there. The same argument with $w$, for which $w^{\mathsf T}Hw < 0$, gives points with $f < f(a)$. Every ball $B_\rho(a) \subseteq U$ contains $a + tu$ and $a+tw$ for all small $\lvert t \rvert \ne 0$, so each contains points of both kinds; in particular $a$ is neither a local minimum nor a local maximum, that is, a saddle point.
5. *The two-variable criteria, from parts 1–3.* Here $H$ has eigenvalues $\lambda_1, \lambda_2$ with $\lambda_1\lambda_2 = \det H = D$ and $\lambda_1 + \lambda_2 = \operatorname{tr} H = f_{xx} + f_{yy}$, and $f_{xx} = e_1^{\mathsf T}He_1$ with $e_1 = (1,0)^{\mathsf T}$.
   - If $D > 0$ the two eigenvalues share a sign. Were both negative, $H$ would be negative definite and $f_{xx} = e_1^{\mathsf T}He_1$ would be negative; so if also $f_{xx} > 0$, both are positive, $H$ is positive definite and part 1 applies. Moreover $f_{yy} = (D + f_{xy}^2)/f_{xx} > 0$, which is the parenthetical claim.
   - If $D > 0$ and $f_{xx} < 0$, apply the previous case to $-f$, whose determinant is again $D$ and whose $(1,1)$ entry is $-f_{xx} > 0$.
   - If $D < 0$ the eigenvalues have opposite signs, so $H$ is indefinite and part 3 applies.
   - If $D = 0$ then $0$ is an eigenvalue. If $\operatorname{tr}H \neq 0$ the eigenvalues are $0$ and $\operatorname{tr}H$, of one sign only, so $H$ is semidefinite; if $\operatorname{tr}H = 0$ both eigenvalues vanish and $H = 0$, since a symmetric matrix is orthogonally diagonalisable. Either way $H$ is singular and semidefinite, so none of parts 1–3 applies, and the next statement shows that the three-way classification cannot be completed from $H$ alone — although, when $H \neq 0$, it still excludes one of the two kinds of extremum. $\square$

Reading the signs of the quadratic form off the eigenvalues of $H$, after expanding the displacement in an orthonormal eigenbasis, is the route of Riley, Hobson and Bence (pp. 166–167, with the two-variable criteria on p. 164). Step 1 reaches the one consequence of that expansion it needs — the lower bound $\lambda_1\lvert h\rvert^2$ — by quoting the Rayleigh bound of :ref[quadratic forms]{to=linalg.quadratic-forms} instead of expanding; step 5 uses the eigenvalue signs directly, as they do. They argue with the quadratic approximation itself; the remainder estimates in steps 2 and 4, which are what turn a sign of the form into a sign of $f(a+h)-f(a)$, are ours.
:::

:::statement[The converse, and the cases the Hessian does not decide]{provenance=original}
Let $U \subseteq \mathbb{R}^n$ be open, let $f : U \to \mathbb{R}$ be of class $C^2$ on $U$, let $a \in U$ satisfy $\nabla f(a) = 0$ and put $H = H_f(a)$, as in the previous statement.

4. If $a$ is a local minimum of $f$, then $H$ is positive semidefinite; if $a$ is a local maximum, $H$ is negative semidefinite.
5. Suppose $H$ is semidefinite and singular, so that none of parts 1–3 applies (part 4 may still apply). Then:
   - if $H$ is positive semidefinite and $H \neq 0$, $a$ is not a local maximum, by part 4; but each of the three remaining possibilities occurs — a strict local minimum, a local minimum that is not strict, and no local extremum at all — and $H$ does not distinguish them, since all three occur among functions with the same $\nabla f(a) = 0$ and the same $H_f(a)$;
   - if $H$ is negative semidefinite and $H \neq 0$, symmetrically, $a$ is not a local minimum, and the three mirror-image possibilities — a strict local maximum, a non-strict local maximum, and no local extremum — all occur;
   - if $H = 0$, nothing is excluded: $a$ may be a strict local minimum, a strict local maximum, a non-strict local extremum, or no local extremum at all.

So in the singular semidefinite case the Hessian fixes at most the sign of the extremum that is still possible, never whether there is one.
:::

:::idea[The converse, and why the degenerate cases are undecidable]{provenance=original}
Part 4 is the expansion read along a single ray: if $f$ does not fall below $f(a)$ nearby, then the quadratic term, which dominates for small $t$, cannot be negative in any direction. Part 5 asks for the opposite of a theorem — functions that the Hessian cannot tell apart — so it has to be settled by constructing them, and the eigenbasis of $H$ hands them over. Split the coordinates into the directions where the form is positive and the directions where it vanishes; adding a quartic in the vanishing directions changes neither the gradient nor the Hessian at $a$, and its sign, or its absence, decides what happens there.
:::

:::proof[The converse, and the cases the Hessian does not decide]{provenance=original}
Write $H = H_f(a)$, symmetric since $f$ is $C^2$, and keep the expansion $f(a+h) - f(a) = \tfrac12 h^{\mathsf T}Hh + R(h)$ with $R(h) = o(\lvert h\rvert^2)$, as in the previous proof.

*Part 4.* Let $a$ be a local minimum, so $f(a+h) \ge f(a)$ for $\lvert h\rvert < \rho$, some $\rho > 0$. Fix $h \ne 0$. For $0 < t < \rho/\lvert h\rvert$ the point $a + th$ lies in that ball, so
$$
0 \le f(a+th) - f(a) = t^2\left( \tfrac12 h^{\mathsf T}Hh + \lvert h\rvert^2 \frac{R(th)}{\lvert th\rvert^2} \right).
$$
Dividing by $t^2 > 0$ and letting $t \to 0^+$, the last term vanishes and $h^{\mathsf T}Hh \ge 0$ remains. As $h$ was arbitrary, $H$ is positive semidefinite. If $a$ is a local maximum, apply this to $-f$ to get $-H$ positive semidefinite, that is $H$ negative semidefinite.

*Part 5, the constructions.* Let $H$ be positive semidefinite and singular. By the principal-axes theorem (:ref[quadratic forms]{to=linalg.quadratic-forms}) choose an orthonormal basis $q_1, \dots, q_n$ of eigenvectors, with eigenvalues $\lambda_1, \dots, \lambda_n$; none is negative, by semidefiniteness, and at least one is $0$, by singularity, so we may order them as $\lambda_1, \dots, \lambda_p > 0$ and $\lambda_{p+1} = \cdots = \lambda_n = 0$ with $0 \le p \le n-1$. Put $y_j(x) = q_j \cdot (x - a)$, so that $y = (y_1, \dots, y_n)$ are orthonormal coordinates centred at $a$, and let
$$
q(y) = \tfrac12\sum_{j \le p} \lambda_j y_j^{2},
$$
which is the quadratic form of $H$ in these coordinates: $q(y(x)) = \tfrac12 (x-a)^{\mathsf T}H(x-a)$.

Each $y_j$ is an affine function of $x$ with $\nabla y_j = q_j$, so for a polynomial $\varphi$ in $y$ with no constant and no linear term, the function $x \mapsto f(a) + \varphi(y(x))$ has gradient $0$ at $a$, and its Hessian at $a$ is $\sum_{j,k}\partial^2\varphi/\partial y_j\partial y_k(0)\, q_jq_k^{\mathsf T}$. In particular each of
$$
\Phi_1 = f(a) + q(y) + \sum_{j>p} y_j^{4}, \qquad
\Phi_2 = f(a) + q(y), \qquad
\Phi_3 = f(a) + q(y) - y_n^{4}
$$
is a polynomial in $x$ of class $C^\infty$ with gradient $0$ and Hessian exactly $H$ at $a$: the quartic terms contribute nothing to either, and $q$ contributes $\sum_{j\le p}\lambda_j q_jq_j^{\mathsf T} = H$.

Now suppose in addition $H \neq 0$, that is $p \ge 1$.

- $\Phi_1$ has a strict local minimum at $a$ — indeed a strict global one. For $y \neq 0$ both $q(y) \ge 0$ and $\sum_{j>p}y_j^4 \ge 0$, and they vanish together only if $y_j = 0$ for $j \le p$ (as $\lambda_j > 0$ there) and for $j > p$, that is only if $y = 0$.
- $\Phi_2$ has a local minimum at $a$ that is not strict: $q \ge 0$ always, while $\Phi_2 = f(a)$ on the whole subspace $\{y_1 = \cdots = y_p = 0\}$, of dimension $n - p \ge 1$.
- $\Phi_3$ has no local extremum at $a$. Along $x = a + s q_n$ (a direction with $\lambda_n = 0$, available because $p < n$) it equals $f(a) - s^4 < f(a)$ for $s \neq 0$, so $a$ is not a local minimum; along $x = a + sq_1$ it equals $f(a) + \tfrac12\lambda_1 s^2 > f(a)$ for $s \ne 0$, so $a$ is not a local maximum either.

All three have the same gradient $0$ and the same Hessian $H$ at $a$, which proves that no criterion depending on those two can separate them; and by part 4 none of them has a local maximum at $a$, since $H$ has the positive eigenvalue $\lambda_1$ and so is not negative semidefinite. The negative semidefinite case is this one applied to $-f$.

*Part 5, the case $H = 0$.* Then $p = 0$ and $q \equiv 0$. The four functions
$$
f(a) + \lvert x - a\rvert^{4}, \qquad f(a) - \lvert x-a\rvert^{4}, \qquad f(a), \qquad f(a) + y_1(x)^{3}
$$
are all $C^\infty$ with gradient $0$ and Hessian $0$ at $a$, and have there, respectively, a strict local minimum, a strict local maximum, a local extremum that is both a non-strict minimum and a non-strict maximum, and no local extremum at all — the last because $y_1(x)^3$ takes both signs arbitrarily close to $a$. So nothing is excluded. $\square$
:::

:::note{provenance=original}
**What it means.** Near a critical point a $C^2$ function looks, to the accuracy that matters, like the constant $f(a)$ plus the quadratic form $\tfrac12 h^{\mathsf T} H h$: the first-order term has been switched off, so the second-order term decides the local shape. Classifying the critical point is then nothing but asking what signs that quadratic form takes, a question about the eigenvalues of a symmetric matrix. The test is silent exactly when $H$ is semidefinite and singular — the form vanishes along some direction without ever changing sign — because the quadratic approximation is then too coarse along those null directions and the higher-order terms take over. A form that does change sign still decides, however degenerate it is.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *The segment must lie in $U$.* The mean-value form is the one-variable theorem applied to $g(t) = f(a+th)$ on $[0,1]$, and $g$ is defined only where $a + th \in U$; on a domain that is not convex there may be no intermediate point at which to evaluate the Hessian. The $o(\lvert h\rvert^2)$ form is local and needs only a ball around $a$.
- *$C^2$ is used twice.* It makes $H$ symmetric — without it "definiteness" could refer only to the symmetric part, since $h^{\mathsf T} H h = h^{\mathsf T}\bigl(\tfrac12(H + H^{\mathsf T})\bigr)h$ for every $h$ — and it is what gives the second-order expansion a remainder small compared with $\lvert h \rvert^2$, which is what turns a sign of the quadratic form into a sign of $f(a+h) - f(a)$ in parts 1–3.
- *Singular and semidefinite really is undecidable.* Both $f(x,y) = x^2 + y^4$ and $g(x,y) = x^2 - y^4$ have a critical point at the origin with Hessian $\operatorname{diag}(2,0)$, positive semidefinite and singular. The origin is a strict local minimum of $f$, whereas $g(0,y) = -y^4 < 0$ for $y \ne 0$ and $g(x,0) = x^2 > 0$ for $x \neq 0$, so it is a saddle point of $g$. Neither can be a local maximum, which is part 5. The third possibility is realised by $p(x,y) = x^2$, with the same gradient and the same Hessian at the origin again: there $p$ has a local minimum that is not strict, since $p = 0$ along the whole $y$-axis. For $H = 0$ take $u(x,y) = (x^2+y^2)^2$, with a strict local minimum at the origin, $-u$, with a strict local maximum, and $v(x,y) = x^3 - 3xy^2$, whose value on the line $y = 0$ is $x^3$ and so changes sign at the origin.
- *The test classifies, it does not locate.* Points where $f$ fails to be differentiable, and boundary points of the region of interest, are not critical points and are not covered; on a compact set the maximum and minimum may well be attained there.
- *The same criteria in other books.* Riley, Hobson and Bence (p. 164) give the minimum test as "$f_{xx}$ and $f_{yy}$ both positive and $f_{xy}^2 < f_{xx}f_{yy}$", equivalent to the determinant form above because $f_{xx} > 0$ with $f_{xx}f_{yy} > f_{xy}^2 \ge 0$ forces $f_{yy} > 0$; p. 167 gives the $n$-variable test by the signs of the eigenvalues of the Hessian and notes that it may fail when some eigenvalues vanish and the non-zero ones share a sign, which is the case of part 5.
- *Constrained problems are different.* Parts 1–5 describe a critical point of $f$ on an open set. If the variables are tied by equations, the first-order condition is not $\nabla f = 0$ but a multiplier condition. That is the subject of :ref[Lagrange multipliers]{to=found.lagrange-multipliers}, a later unit which takes this one as a prerequisite; the pointer is forward, and nothing in the present unit uses it.
:::

:::example[Two critical-point problems, in two and in three variables]{provenance=original}
**(a) $f(x,y) = x^4 + y^4 - 4xy$ on $\mathbb{R}^2$.**

*Critical points.* $\partial f/\partial x = 4x^3 - 4y$ and $\partial f/\partial y = 4y^3 - 4x$, so $\nabla f = 0$ means $y = x^3$ and $x = y^3 = x^9$, that is $x(x^8-1) = 0$. Over the reals $x \in \{0, 1, -1\}$, giving the three critical points $(0,0)$, $(1,1)$, $(-1,-1)$.

*Hessian.* $f_{xx} = 12x^2$, $f_{yy} = 12y^2$, $f_{xy} = -4$, so
$$
H_f(x,y) = \begin{pmatrix} 12x^2 & -4 \\ -4 & 12y^2\end{pmatrix}.
$$

*Classification.* At $(0,0)$: $H = \begin{pmatrix} 0 & -4\\ -4 & 0\end{pmatrix}$ and $D = \det H = -16 < 0$, so by the two-variable criteria $(0,0)$ is a saddle point; $f(0,0) = 0$. At $(\pm1,\pm1)$ (both signs together): $H = \begin{pmatrix}12 & -4\\ -4 & 12\end{pmatrix}$, $D = 144 - 16 = 128 > 0$ and $f_{xx} = 12 > 0$, so both are strict local minima, with the common value
$$
f(1,1) = f(-1,-1) = 1 + 1 - 4 = -2 .
$$
The eigenvalues of that $H$ are $12 \mp 4$, namely $8$ and $16$, both positive, as part 1 requires.

*Check that $-2$ is the global minimum.* From $4xy \le 2(x^2+y^2)$ (which is $2(x-y)^2 \ge 0$),
$$
f(x,y) \ge x^4 + y^4 - 2x^2 - 2y^2 = (x^2-1)^2 + (y^2-1)^2 - 2 \ge -2 ,
$$
with equality only if $x^2 = y^2 = 1$ and $x = y$, that is at the two minima just found. So $\min_{\mathbb{R}^2} f = -2$.

**(b) $f(x,y,z) = x^2+y^2+z^2-2xyz$ on $\mathbb{R}^3$,** where the two-variable determinant test has nothing to say and the eigenvalues must be used.

*Critical points.* $\nabla f = 2(x - yz,\; y - xz,\; z - xy)$, so we need $x = yz$, $y = xz$, $z = xy$. Multiplying the first two gives $xy = xyz^2$, so $xy(1-z^2) = 0$; with $z = xy$ this reads $z(1-z^2) = 0$, so $z \in \{0,1,-1\}$, and the symmetric argument applies to $x$ and $y$. If one coordinate is $0$ then all three are, by the equations; otherwise each is $\pm 1$ and $x = yz$ forces the product $xyz = 1$. The critical points are therefore the origin and the four points $(1,1,1)$, $(1,-1,-1)$, $(-1,1,-1)$, $(-1,-1,1)$.

*Hessian.*
$$
H_f(x,y,z) = 2\begin{pmatrix} 1 & -z & -y \\ -z & 1 & -x \\ -y & -x & 1 \end{pmatrix}.
$$

*At the origin* $H = 2I$, positive definite, so the origin is a strict local minimum, with $f = 0$. (It is not a global minimum: $f(t,t,t) = 3t^2 - 2t^3 \to -\infty$.)

*At $(1,1,1)$,*
$$
H = \begin{pmatrix} 2 & -2 & -2 \\ -2 & 2 & -2 \\ -2 & -2 & 2\end{pmatrix} = 4I - 2J, \qquad J = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.
$$
$J$ has eigenvalue $3$ on $(1,1,1)^{\mathsf T}$ and eigenvalue $0$ on the plane $x+y+z=0$, so $H$ has eigenvalues $4 - 2\cdot 3 = -2$ (once) and $4 - 2\cdot 0 = 4$ (twice). These have both signs, so $H$ is indefinite and $(1,1,1)$ is a saddle point, with $f(1,1,1) = 3 - 2 = 1$. The other three points are the same by the symmetry $(x,y,z)\mapsto(-x,-y,z)$ and its relatives, which fix $f$.

Note that $\det H = (-2)(4)(4) = -32 < 0$ here while $\det(2I) = 8 > 0$ at the origin: in three variables a negative determinant only says the eigenvalues' product is negative, which it also would be for a negative definite $3\times 3$ matrix. The sign of the determinant is a test only when $n = 2$.
:::

:::application[Stable equilibria and transition states on a potential-energy surface]{provenance=original}
A mechanical or molecular system with coordinates $x = (x_1,\dots,x_n)$ and potential energy $V(x)$ is in equilibrium exactly where $\nabla V(x) = 0$, since the generalised forces are $-\partial V/\partial x_j$. Which kind of equilibrium it is, is the question this unit answers with $H = H_V(x_*)$:

- $H$ positive definite: a strict local minimum of the energy, a **stable** equilibrium. Expanding $V$ to second order, $V \approx V(x_*) + \tfrac12 h^{\mathsf T}Hh$, is exactly the harmonic approximation, and the squared frequencies of the small oscillations are the eigenvalues of the mass-weighted Hessian $M^{-1/2}HM^{-1/2}$ (:ref[normal modes]{to=linalg.normal-modes}); positive definiteness of $H$ is what makes them positive, so that the motion oscillates rather than runs away.
- $H$ indefinite with exactly one negative eigenvalue and all the others positive: an **index-1 saddle**, the transition state of chemical kinetics. The system is stable against all displacements except along the eigenvector of the negative eigenvalue, which is the reaction coordinate; the corresponding "frequency" is imaginary, and that is the quantity transition-state theory removes from the partition function of the saddle.
- $H$ singular and semidefinite: the harmonic approximation fails along the null directions. Genuine instances are the rigid translations and rotations of an isolated molecule of $N$ atoms, in the $n = 3N$ nuclear coordinates: they leave $V$ unchanged, so they are exactly zero eigenvalues of $H$ at every stationary point. The three translations always count; of the rotations, three are independent if the molecule is nonlinear, but only two if it is linear, because a rotation about the molecular axis moves no nucleus. The number of zero eigenvalues is therefore $6$ for a nonlinear molecule, $5$ for a linear one — every diatomic, and $\mathrm{CO_2}$ — and $3$ for a single atom, which has no rotations at all. The remaining eigenvalues are the vibrations, which is the familiar count of $3N - 6$ normal modes, or $3N - 5$ for a linear molecule. These zero modes are projected out before the vibrational analysis rather than classified.

As a two-coordinate model, take $V(x,y) = (x^2-1)^2 + 2y^2$ (energies in units of some $\epsilon$, lengths in units of some $a$). Then $\nabla V = (4x(x^2-1),\, 4y)$, so the stationary points are $(\pm1, 0)$ and $(0,0)$, and $H_V = \operatorname{diag}(12x^2-4,\,4)$.

- At $(\pm 1, 0)$: $H_V = \operatorname{diag}(8, 4)$, positive definite — two stable equilibria, of equal energy $V = 0$, with harmonic frequencies $\sqrt{8\epsilon/(ma^2)}$ and $\sqrt{4\epsilon/(ma^2)}$ for a particle of mass $m$.
- At $(0,0)$: $H_V = \operatorname{diag}(-4, 4)$, eigenvalues $-4$ and $4$ — an index-1 saddle, the transition state between the two wells, at energy $V = 1$. The barrier is $\Delta V = 1 - 0 = 1$ (that is, $\epsilon$), the reaction coordinate is the $x$ direction, and the $y$ direction remains a stable vibration of the transition state with frequency $\sqrt{4\epsilon/(ma^2)}$.

An Arrhenius rate $\propto e^{-\Delta V/k_BT}$ needs only the barrier, a number obtained from the critical points; the Hessian supplies the prefactor.
:::
