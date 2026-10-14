---
id: num.finite-differences
title: Finite-difference approximations
kind: method
level: core
summary: Replaces derivatives by difference quotients on a uniform grid, gives each quotient's error as an exact mean-value remainder, defines the local truncation error and the order of a scheme, and applies the recipe to the explicit schemes for the heat and wave equations, whose truncation errors are computed here term by term.
prereqs: [found.taylor-theorem, pde.classification, pde.dalembert]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§8.1, pp. 199-202: the grid notation $u_j \\sim u(j\\,\\Delta x)$ and $u_j^n \\sim u(j\\,\\Delta x, n\\,\\Delta t)$, the backward, forward and centred first differences (1)-(3), the centred second difference (4), the two Taylor expansions used to justify them, the orders $O(\\Delta x)$ and $O(\\Delta x)^2$, the separation of local truncation error, global truncation error and roundoff error (p. 201), and the explicit heat scheme, Eq. (7), p. 201; §8.2, Eqs. (1)-(2), p. 203: the mesh ratio $s = \\Delta t/(\\Delta x)^2$ and the solved form of the scheme, called explicit there; §8.2, Eq. (14), p. 208: ghost points for a Neumann condition; §8.3, Eqs. (1)-(2), p. 211 and Eqs. (5)-(6), p. 212: the centred scheme for $u_{tt} = c^2 u_{xx}$ and the second-order starting row built from the initial velocity; §8.4, Eqs. (1)-(2), pp. 218-219: the five-point scheme for Laplace's equation"
    pages: "199-203, 208, 211-212, 218-219"
    role: the grid and scheme notation used throughout; the four difference quotients and their orders; the vocabulary of local versus global truncation error and roundoff; the explicit heat scheme, the centred wave scheme with its starting row, and the five-point Laplacian
  - work: rhb-2006
    loc: "§27.5, pp. 1019-1020: the Taylor expansion (27.56) about $x_i$, the central difference (27.57) with its error $\\approx (h^2/6) f_i^{(3)}$, the forward difference (27.58) with error $\\approx (h/2) f_i^{(2)}$, the remark that the backward difference carries the same error with the opposite sign, and the central second difference (27.59) with error stated as about $(h^2/12) f_i^{(4)}$"
    pages: "1019-1020"
    role: the explicit leading error constants $h/2$, $h^2/6$ and $h^2/12$ for the three quotients, which the statement below turns into exact mean-value remainders
---

:::definition[Grid, grid functions, difference quotients]{provenance=adapted src="strauss-2008:§8.1, pp. 199-201, Eqs. (1)-(6)"}
Fix a step $h = \Delta x > 0$ and sample a function of one variable at the points $x_j = j\,\Delta x$, $j \in \mathbb{Z}$. A **grid function** is a doubly infinite list of numbers $u_j$, thought of as approximating $u(x_j)$. For a problem in space and time we also fix $\Delta t > 0$, write $t_n = n\,\Delta t$, and use $u_j^n$ for the approximation to $u(x_j, t_n)$; here $n$ is an index, not an exponent.

The four difference quotients used below are the **forward**, **backward** and **centred** first differences and the **centred second difference**,
$$
D^{+}u_j = \frac{u_{j+1} - u_j}{\Delta x},
\qquad
D^{-}u_j = \frac{u_j - u_{j-1}}{\Delta x},
$$
$$
D^{0}u_j = \frac{u_{j+1} - u_{j-1}}{2\,\Delta x},
\qquad
\delta^{2}u_j = \frac{u_{j+1} - 2u_j + u_{j-1}}{(\Delta x)^{2}} .
$$
The same four symbols are used in the time index when needed, so that for instance $(u_j^{n+1} - u_j^{n})/\Delta t$ is the forward difference in $t$.
:::

:::statement[Each quotient's error, with an exact remainder]{provenance=adapted src="rhb-2006:§27.5, Eqs. (27.57)-(27.59), p. 1019; strauss-2008:§8.1, p. 200"}
Let $h > 0$ and let $f$ be real-valued on an interval containing $[x-h, x+h]$.

1. If $f \in C^{2}([x, x+h])$ there is a $\xi \in (x, x+h)$ with
$$
\frac{f(x+h) - f(x)}{h} = f'(x) + \frac{h}{2}\,f''(\xi) .
$$
If $f \in C^{2}([x-h,x])$ there is a $\xi \in (x-h,x)$ with $\bigl(f(x) - f(x-h)\bigr)/h = f'(x) - \tfrac{h}{2}f''(\xi)$.

2. If $f \in C^{3}([x-h, x+h])$ there is a $\xi \in (x-h, x+h)$ with
$$
\frac{f(x+h) - f(x-h)}{2h} = f'(x) + \frac{h^{2}}{6}\,f'''(\xi) .
$$

3. If $f \in C^{4}([x-h, x+h])$ there is a $\xi \in (x-h, x+h)$ with
$$
\frac{f(x+h) - 2f(x) + f(x-h)}{h^{2}} = f''(x) + \frac{h^{2}}{12}\,f^{(4)}(\xi) .
$$

In particular the one-sided quotients are **first order** in $h$ and the two centred ones are **second order**, with the leading error constants $h/2$, $h^2/6$ and $h^2/12$ reported by Riley, Hobson and Bence.
:::

:::idea{provenance=original}
Everything comes from the two Taylor expansions of $f$ about $x$, one stepping forward by $h$ and one stepping back. Subtracting them cancels the even-order terms, so the odd-order derivative $f'$ survives at leading order and the first surviving error is $f'''$; adding them cancels the odd-order terms, so $f''$ survives and the first error is $f^{(4)}$. That is the whole reason the centred quotients gain an order over the one-sided ones. The only extra care needed is that each expansion leaves its own remainder point, and the two must be merged into one: continuity of the top derivative lets the intermediate value theorem replace the average of two of its values by a single value.
:::

:::proof{provenance=adapted src="strauss-2008:§8.1, p. 200; rhb-2006:§27.5, Eq. (27.56), p. 1019"}
**Step 1 (the one-sided quotients).** Taylor's theorem with Lagrange remainder, applied at order one to $f \in C^{2}$, gives a point $\xi \in (x, x+h)$ with $f(x+h) = f(x) + h f'(x) + \tfrac{1}{2}h^{2} f''(\xi)$. Subtract $f(x)$ and divide by $h$: this is claim 1. Applying the same expansion with $-h$ in place of $h$ gives the backward statement, the sign of the remainder flipping because dividing $\tfrac12(-h)^2 f''(\xi)$ by $-h$ produces $-\tfrac{h}{2}f''(\xi)$.

**Step 2 (two expansions to third order).** Let $f \in C^{3}$. Taylor's theorem at order two gives points $\xi_{+} \in (x, x+h)$ and $\xi_{-} \in (x-h, x)$ with
$$
f(x \pm h) = f(x) \pm h f'(x) + \tfrac{1}{2}h^{2} f''(x) \pm \tfrac{1}{6}h^{3} f'''(\xi_{\pm}) .
$$

**Step 3 (subtract).** Subtracting the two displays in Step 2 cancels $f(x)$ and the $f''$ term, leaving
$$
f(x+h) - f(x-h) = 2h f'(x) + \tfrac{1}{6}h^{3}\bigl(f'''(\xi_{+}) + f'''(\xi_{-})\bigr) .
$$
Since $f'''$ is continuous on $[\xi_{-}, \xi_{+}]$, the number $\tfrac12\bigl(f'''(\xi_{+}) + f'''(\xi_{-})\bigr)$ lies between $f'''(\xi_-)$ and $f'''(\xi_+)$, so by the intermediate value theorem it equals $f'''(\xi)$ for some $\xi$ in that interval, hence in $(x-h,x+h)$. The bracket is therefore $2f'''(\xi)$, and dividing by $2h$ gives claim 2.

**Step 4 (add, one order higher).** Let $f \in C^{4}$. Taylor's theorem at order three gives $\eta_{\pm}$ with
$$
f(x \pm h) = f(x) \pm h f'(x) + \tfrac{1}{2}h^{2}f''(x) \pm \tfrac{1}{6}h^{3}f'''(x) + \tfrac{1}{24}h^{4}f^{(4)}(\eta_{\pm}) .
$$
Adding these cancels the two odd-order terms:
$$
f(x+h) - 2f(x) + f(x-h) = h^{2}f''(x) + \tfrac{1}{24}h^{4}\bigl(f^{(4)}(\eta_{+}) + f^{(4)}(\eta_{-})\bigr) .
$$
The continuity of $f^{(4)}$ and the same intermediate-value step turn the bracket into $2f^{(4)}(\xi)$, and dividing by $h^{2}$ gives claim 3, the constant being $2/24 = 1/12$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Smoothness buys the order, and nothing else does.** Each claim uses exactly the differentiability that appears in its remainder term, and the stated order fails as soon as that is dropped.

- *One degree short of $C^2$.* Let $f(x) = |x|^{3/2}$, which is $C^{1}$ on $\mathbb{R}$ with $f'(x) = \tfrac32 |x|^{1/2}\operatorname{sgn} x$ and $f'(0) = 0$, but has no second derivative at $0$. The forward quotient at $x = 0$ is $h^{3/2}/h = h^{1/2}$, so its error is $\sqrt{h}$: it still tends to $0$, but not at rate $h$. Claim 1 is unavailable because there is no $f''$ to evaluate at $\xi$.
- *One degree short of $C^4$.* Let $f(x) = |x|^{7/2}$, which is $C^{3}$ on $\mathbb{R}$: here $f''(x) = \tfrac{35}{4}|x|^{3/2}$ and $f'''(x) = \tfrac{105}{8}|x|^{1/2}\operatorname{sgn} x$ are continuous with $f''(0) = f'''(0) = 0$, while $f^{(4)}(x) = \tfrac{105}{16}|x|^{-1/2}$ blows up at the origin. The centred second difference at $x = 0$ is $(h^{7/2} + h^{7/2})/h^{2} = 2h^{3/2}$, an error of order $h^{3/2}$, not $h^{2}$. Dropping one more degree makes it worse still: for $f(x) = |x|^{3}$, which is $C^{2}$ but not $C^{3}$, the same quotient gives $2h$. So the second-order rate of claim 3 is genuinely bought by the fourth derivative.
- *Continuity, not mere existence, of the top derivative.* Steps 3 and 4 merge two remainder points into one by the intermediate value theorem, which needs $f'''$ (respectively $f^{(4)}$) to be continuous on the closed interval. Without continuity one can still bound the error by the supremum of the top derivative, but the clean mean-value identity is lost.
- *The identities are exact.* Because the remainders are Lagrange remainders and not $O(\cdot)$ symbols, the three displays are equalities, not asymptotic statements. That is what makes the error constants testable at a single finite $h$, as in the first example below.
:::

:::definition[Local truncation error, consistency, order]{provenance=adapted src="strauss-2008:§8.1, p. 201"}
Write a linear evolution problem as $\mathcal{L}u = 0$ (for example $\mathcal{L} = \partial_t - \partial_x^2$), and let $\mathcal{L}_\Delta$ be the difference operator obtained by replacing every derivative in $\mathcal{L}$ by a difference quotient on the grid. The **local truncation error** of the scheme at a grid point is
$$
\tau_j^{n} \;=\; \bigl(\mathcal{L}_\Delta u\bigr)(x_j, t_n),
$$
the residual left when the *exact* solution $u$ of $\mathcal{L}u = 0$ is substituted into the difference equation. The scheme is **consistent** if $\tau_j^n \to 0$ as $\Delta x, \Delta t \to 0$, and has **order $(p, q)$** if $\tau_j^n = O\bigl((\Delta t)^{p} + (\Delta x)^{q}\bigr)$ uniformly on the region of interest.

Strauss separates three distinct errors, and so do we. The local truncation error above is the error made in the *equation* at one point. The **global truncation error** is the error $u(x_j,t_n) - u_j^n$ actually present in the computed solution, built up from all the local ones; he observes that following that accumulation in detail is usually out of reach, and the two can behave quite differently. **Roundoff error** is a separate effect, caused by the finite number of digits the machine keeps at each step, and is treated in :ref[]{to=num.floating-point-errors}.

Consistency alone says nothing about whether the computed solution is anywhere near the true one; what has to be added is stability, which is the subject of :ref[]{to=num.von-neumann-stability}.
:::

:::definition[The explicit scheme for the heat equation]{provenance=adapted src="strauss-2008:§8.1, Eq. (7), p. 201; strauss-2008:§8.2, Eqs. (1)-(2), p. 203; strauss-2008:§8.2, Eq. (14), p. 208"}
For $u_t = u_{xx}$, take the forward difference in $t$ and the centred second difference in $x$:
$$
\frac{u_j^{n+1} - u_j^{n}}{\Delta t} \;=\; \frac{u_{j+1}^{n} - 2u_j^{n} + u_{j-1}^{n}}{(\Delta x)^{2}} .
\tag{H}
$$
With the **mesh ratio**
$$
s \;=\; \frac{\Delta t}{(\Delta x)^{2}}
$$
this solves for the new row in terms of the old one,
$$
u_j^{n+1} \;=\; s\,\bigl(u_{j+1}^{n} + u_{j-1}^{n}\bigr) + (1 - 2s)\,u_j^{n} ,
$$
so the computation marches forward in time with no linear system to solve. A scheme with this property is called **explicit**. Scheme (H) is often labelled FTCS, for forward in time and centred in space.

On a bounded interval with Dirichlet data the end values $u_0^n$ and $u_J^n$ are prescribed. For a Neumann condition $u_x = g$ at an end, Strauss recommends a *ghost point* just outside the interval and a centred difference across the boundary, so that the boundary is treated to the same second-order accuracy as the interior; a one-sided quotient there would contaminate the computation with an $O(\Delta x)$ error by claim 1 above.
:::

:::definition[The explicit scheme for the wave equation]{provenance=adapted src="strauss-2008:§8.3, Eqs. (1)-(2), p. 211 and Eqs. (5)-(6), p. 212; strauss-2008:§8.4, Eqs. (1)-(2), pp. 218-219"}
For $u_{tt} = c^{2}u_{xx}$ with $c > 0$, use the centred second difference in both variables:
$$
\frac{u_j^{n+1} - 2u_j^{n} + u_j^{n-1}}{(\Delta t)^{2}}
\;=\; c^{2}\,\frac{u_{j+1}^{n} - 2u_j^{n} + u_{j-1}^{n}}{(\Delta x)^{2}} .
\tag{W}
$$
Writing $\lambda = c\,\Delta t/\Delta x$ (so that Strauss's parameter is $s = \lambda^{2}$) and solving for the new row,
$$
u_j^{n+1} \;=\; \lambda^{2}\bigl(u_{j+1}^{n} + u_{j-1}^{n}\bigr) + 2\bigl(1 - \lambda^{2}\bigr)u_j^{n} - u_j^{n-1} .
$$
This is again explicit, but it reaches back two rows, so two starting rows are needed. Given $u(x,0) = \varphi(x)$ and $u_t(x,0) = \psi(x)$, Strauss builds them by imposing the centred difference $(u_j^{1} - u_j^{-1})/(2\Delta t) = \psi_j$ and eliminating the fictitious row $u_j^{-1}$ with (W) at $n = 0$, which gives
$$
u_j^{0} = \varphi_j , \qquad
u_j^{1} = \tfrac{1}{2}\lambda^{2}\bigl(\varphi_{j+1} + \varphi_{j-1}\bigr) + \bigl(1 - \lambda^{2}\bigr)\varphi_j + \psi_j\,\Delta t .
$$
A one-sided start $u_j^1 = \varphi_j + \psi_j \Delta t$ would be only first order and would spoil the second-order accuracy of (W).

The corresponding elliptic discretisation, the five-point formula that makes $u_{j,k}$ the average $\tfrac14(u_{j+1,k} + u_{j-1,k} + u_{j,k+1} + u_{j,k-1})$ of its four neighbours, is treated in :ref[]{to=num.relaxation-methods}. Which of the three prototypes one is discretising is decided by the classification of :ref[]{to=pde.classification}, and it controls whether a marching method exists at all: for the elliptic case there is no time direction to march in, and a large linear system must be solved instead.
:::

:::method[Writing down a scheme and finding its order]{provenance=original}
1. **Classify the equation** and decide what kind of problem it is. For a hyperbolic or parabolic equation in time, the grid marches; for an elliptic equation there is no marching direction.
2. **Choose the grid** $x_j = j\,\Delta x$, $t_n = n\,\Delta t$, and name the mesh ratio that will appear ($s = \Delta t/(\Delta x)^2$ for diffusion, $\lambda = c\,\Delta t/\Delta x$ for waves).
3. **Replace each derivative** by a quotient from the definition above. Use centred quotients wherever the equation's symmetry allows; a one-sided quotient in time is what makes a scheme explicit.
4. **Substitute the exact solution** into the resulting difference equation and expand every term by Taylor's theorem about the same grid point $(x_j, t_n)$, keeping two orders beyond the one you expect to survive.
5. **Use the differential equation itself** to convert time derivatives into space derivatives (for $u_t = u_{xx}$: $u_{tt} = u_{xxxx}$, $u_{ttt} = u_{xxxxxx}$). Without this step the leading terms will not combine.
6. **Collect powers** of $\Delta x$ after substituting $\Delta t$ in terms of $\Delta x$ through the mesh ratio. The lowest surviving power is the order; a mesh ratio that annihilates the leading coefficient raises the order.
7. **Match the boundary and starting formulas** to the interior order, using ghost points for derivative conditions and a centred start for a second-order-in-time scheme.
8. **Check the order numerically**: evaluate the residual on a known exact solution at several step sizes and confirm that halving $\Delta x$ divides it by $2^{q}$.
:::

:::example[The error constants are real numbers, and they are right]{provenance=original}
Take $f(x) = e^{x}$ at $x = 1$ with $h = 0.1$, so that every derivative at the point equals $e = 2.718281828459\ldots$ All values below were computed in $25$-digit arithmetic and are quoted to the digits shown.

*Centred second difference.*
$$
\frac{e^{1.1} - 2e^{1} + e^{0.9}}{0.01} = 2.720547818529 .
$$
Its error is $2.720547818529 - 2.718281828459 = 2.265990\times10^{-3}$. Claim 3 predicts a leading error $\tfrac{h^2}{12}f^{(4)}(\xi)$, which for $\xi \approx 1$ is $\tfrac{0.01}{12}\,e = 2.265235\times10^{-3}$. The next term of the expansion is $\tfrac{h^{4}}{360}e = 7.5508\times10^{-7}$, and
$$
2.265235\times10^{-3} + 7.5508\times10^{-7} = 2.265990\times10^{-3},
$$
which reproduces the measured error in all seven figures shown.

*Centred first difference.* $(e^{1.1} - e^{0.9})/0.2 = 2.722814563947$, an error of $4.532735\times10^{-3}$. Claim 2 predicts $\tfrac{h^{2}}{6}e = 4.530470\times10^{-3}$, and adding the next term $\tfrac{h^{4}}{120}e = 2.2652\times10^{-6}$ gives $4.532735\times10^{-3}$: again all seven figures.

*Forward difference.* $(e^{1.1} - e^{1})/0.1 = 2.858841954874$, an error of $1.405601\times10^{-1}$ against the predicted $\tfrac{h}{2}e = 1.359141\times10^{-1}$. The agreement is only to two figures here, and that is as it should be: the remainder $\tfrac{h}{2}f''(\xi)$ is evaluated not at $1$ but at some $\xi \in (1, 1.1)$, where $f''$ is larger by up to the factor $e^{h} = 1.1052$. The measured ratio of error to prediction is $1.405601/1.359141 = 1.0342$, so $f''(\xi) = e^{\xi}$ with $\xi = 1.0336$, comfortably inside the interval the theorem allows. At this step size the one-sided quotient is worse than the centred one by a factor of $31$.
:::

:::example[Truncation error of the heat scheme, and a mesh ratio that gains two orders]{provenance=original}
Let $u$ solve $u_t = u_{xx}$ and let $\tau$ be the local truncation error of (H),
$$
\tau \;=\; \frac{u(x, t+\Delta t) - u(x,t)}{\Delta t} \;-\; \frac{u(x+\Delta x, t) - 2u(x,t) + u(x-\Delta x, t)}{(\Delta x)^{2}} .
$$

**Step 1 (expand).** By Taylor's theorem in $t$, and by the expansion behind claim 3 carried one term further in $x$,
$$
\frac{u(x,t+\Delta t) - u(x,t)}{\Delta t} = u_t + \frac{\Delta t}{2}u_{tt} + \frac{(\Delta t)^{2}}{6}u_{ttt} + O\bigl((\Delta t)^{3}\bigr),
$$
$$
\frac{u(x+\Delta x,t) - 2u(x,t) + u(x-\Delta x,t)}{(\Delta x)^{2}} = u_{xx} + \frac{(\Delta x)^{2}}{12}u_{xxxx} + \frac{(\Delta x)^{4}}{360}u_{xxxxxx} + O\bigl((\Delta x)^{6}\bigr),
$$
all derivatives being taken at $(x,t)$. Written with that explicit $O\bigl((\Delta x)^{6}\bigr)$ remainder, the second line needs $u$ to be $C^{8}$ in $x$ (the expansion is carried to order seven with a Lagrange remainder); $C^{6}$ would give the $(\Delta x)^{4}$ term only with an $o\bigl((\Delta x)^{4}\bigr)$ error. Solutions of the heat equation are $C^{\infty}$ in $x$, so neither requirement bites here.

**Step 2 (use the equation).** The terms $u_t$ and $u_{xx}$ cancel. Differentiating $u_t = u_{xx}$ in $t$ gives $u_{tt} = u_{xxxx}$, and once more $u_{ttt} = u_{xxxxxx}$.

**Step 3 (collect in $\Delta x$).** Put $\Delta t = s(\Delta x)^{2}$:
$$
\tau \;=\; (\Delta x)^{2}\Bigl(\frac{s}{2} - \frac{1}{12}\Bigr)u_{xxxx}
\;+\;(\Delta x)^{4}\Bigl(\frac{s^{2}}{6} - \frac{1}{360}\Bigr)u_{xxxxxx}
\;+\;O\bigl((\Delta x)^{6}\bigr).
$$
So (H) is consistent, of order one in $\Delta t$ and two in $\Delta x$, hence of order two in $\Delta x$ at fixed $s$ — **except** at $s = 1/6$, where the bracket $s/2 - 1/12$ vanishes and the scheme becomes fourth order in $\Delta x$.

**Step 4 (check it).** Take the exact solution $u(x,t) = e^{-t}\sin x$, for which $u_{xxxx} = u$ and $u_{xxxxxx} = -u$, and evaluate $\tau$ at $x = 1$, $t = 0$, where $u = \sin 1 = 0.8414710$.

| $\Delta x$ | $\tau$ at $s = 1/4$ | ratio | $\tau$ at $s = 1/6$ | ratio |
|---|---|---|---|---|
| $0.1$ | $3.499706\times10^{-4}$ | | $-1.557074\times10^{-7}$ | |
| $0.05$ | $8.761306\times10^{-5}$ | $3.9945$ | $-9.737364\times10^{-9}$ | $15.991$ |
| $0.025$ | $2.191080\times10^{-5}$ | $3.9986$ | $-6.086735\times10^{-10}$ | $15.998$ |
| $0.0125$ | $5.478170\times10^{-6}$ | $3.9997$ | $-3.804348\times10^{-11}$ | $15.999$ |

The ratios tend to $4$ and to $16$, confirming orders $2$ and $4$. The predicted leading values agree as well. At $s = 1/4$ and $\Delta x = 0.1$ the formula gives $(0.01)\bigl(\tfrac18 - \tfrac1{12}\bigr)(0.8414710) = 3.506129\times10^{-4}$ against the measured $3.499706\times10^{-4}$. At $s = 1/6$ the surviving coefficient is
$$
\Bigl(\frac{s^{2}}{6} - \frac{1}{360}\Bigr)u_{xxxxxx} = \Bigl(\frac{1}{216} - \frac{1}{360}\Bigr)(-u) = -\frac{u}{540},
$$
so $\tau \approx -(\Delta x)^{4}(0.8414710)/540 = -1.5583\times10^{-7}$ at $\Delta x = 0.1$, against the measured $-1.5571\times10^{-7}$.

A warning the next unit makes precise: $s = 1/6$ is a *consistency* bonus only. It happens to lie inside the stability range of (H), but nothing in this calculation says so.
:::

:::example[Truncation error of the wave scheme, and the step that is exact]{provenance=original}
The same procedure applied to (W) is shorter. For a solution of $u_{tt} = c^{2}u_{xx}$,
$$
\tau = u_{tt} + \frac{(\Delta t)^{2}}{12}u_{tttt} - c^{2}u_{xx} - \frac{c^{2}(\Delta x)^{2}}{12}u_{xxxx} + O\bigl((\Delta x)^{4}\bigr),
$$
the first and third terms cancelling. Differentiating the equation twice in $t$ gives $u_{tttt} = c^{4}u_{xxxx}$, and with $\Delta t = \lambda\,\Delta x/c$,
$$
\tau \;=\; \frac{c^{2}(\Delta x)^{2}}{12}\bigl(\lambda^{2} - 1\bigr)u_{xxxx} \;+\; O\bigl((\Delta x)^{4}\bigr).
$$
Taking $c = 2$ and the exact solution $u = \sin x\,\cos 2t$, at $x = 1$, $t = 0.3$ and $\lambda = 1/2$ the computed residuals are $-1.735517\times10^{-3}$, $-4.340148\times10^{-4}$, $-1.085122\times10^{-4}$ and $-2.712857\times10^{-5}$ for $\Delta x = 0.1, 0.05, 0.025, 0.0125$, with ratios $3.9988$, $3.9997$ and $3.9999$. At this point $u_{xxxx} = \sin 1\,\cos 0.6 = 0.6944960$ (not $\sin 1$: the example is evaluated at $t = 0.3$, not at $t = 0$), so the predicted leading value at $\Delta x = 0.1$ is $\tfrac{4(0.01)}{12}\bigl(-\tfrac34\bigr)(0.6944960) = -1.736240\times10^{-3}$, against the measured $-1.735517\times10^{-3}$.

At $\lambda = 1$ the coefficient vanishes, and the computed residual drops to $5\times10^{-39}$ in $40$-digit arithmetic, that is, to zero. This is not an accident of the leading term. With $c\,\Delta t = \Delta x$ the scheme reads $u_j^{n+1} = u_{j+1}^{n} + u_{j-1}^{n} - u_j^{n-1}$; substituting a travelling wave $u = f(x - ct)$ and writing $z = x_j - ct_n$, the three terms on the right are $f(z + \Delta x)$, $f(z - \Delta x)$ and $f(z + \Delta x)$, whose combination is $f(z - \Delta x)$, and that is exactly $u_j^{n+1}$. The same holds for $g(x+ct)$, so by d'Alembert's formula (:ref[]{to=pde.dalembert}) the scheme reproduces *every* solution of the one-dimensional wave equation exactly when $\lambda = 1$. Strauss observes numerically that $\lambda = 1$ gives an excellent approximation while $\lambda^2 = 2$ gives a useless one; the first half of that is explained here, the second half in :ref[]{to=num.von-neumann-stability}.
:::

:::application{provenance=original}
Finite differences are how most of the partial differential equations of geophysics and engineering are actually solved, and the error constants above are what set the cost of a run.

In an atmospheric or ocean model the horizontal grid spacing is chosen first, from the features that must be resolved, and the vertical diffusion of heat and momentum is then discretised by a scheme of the form (H). Because the order in $\Delta x$ is two, dividing the grid spacing by two to cut the discretisation error by four multiplies the number of columns by four in two horizontal dimensions; the companion stability constraint on $\Delta t$, derived in :ref[]{to=num.von-neumann-stability}, multiplies the number of time steps as well, so the total cost grows by a factor of at least sixteen. That single arithmetic fact is why operational forecasting centres buy resolution in small increments, and why higher-order and spectral discretisations (:ref[]{to=num.spectral-methods}) remain attractive even though each step of them costs more.

In seismic modelling the scheme (W) is the standard tool, and the exactness at $\lambda = 1$ in one dimension is the reason practitioners speak of a magic time step. In more than one space dimension no such step exists, but $\lambda$ is still pushed as close to its stability limit as the geometry allows, both for speed and because, as the formula for $\tau$ shows, the truncation error shrinks as $\lambda \to 1$.
:::
