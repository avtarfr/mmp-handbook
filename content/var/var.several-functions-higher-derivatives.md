---
id: var.several-functions-higher-derivatives
title: Several functions and higher derivatives
kind: theorem
level: core
summary: A functional of several unknown functions gives one Euler-Lagrange equation per function, and an integrand containing derivatives up to order m gives the Euler-Poisson equation of order 2m.
prereqs: [var.functionals-first-variation, var.euler-lagrange-equation]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 2, §9 Theorem and Remarks 1–2, pp. 34–36; §11, Eqs. (17)–(22) and Remark, pp. 40–42"
    pages: "34-36, 40-42"
    role: statements of the system of Euler equations and of the Euler-Poisson equation; null Lagrangians; the remark on the smoothness needed for the repeated integration by parts
  - work: arfken-2013
    loc: "§22.2, Eqs. (22.31)–(22.35), p. 1097; Exercise 22.1.3, p. 1093"
    pages: "1093, 1097"
    role: one-component-at-a-time argument; second-derivative integrand
  - work: rhb-2006
    loc: "§22.3.1 and §22.3.3, Eqs. (22.12) and (22.14), p. 782"
    pages: "782"
    role: the general higher-order equation and its endpoint conditions
---

:::statement{provenance=adapted src="gelfand-fomin-1963:§9 Theorem, p. 35 and §11, Eq. (22), p. 42"}
**(a) Several unknown functions.** Let $F(x, y_1, \dots, y_n, p_1, \dots, p_n)$ have continuous first partial derivatives, and let $y = (y_1, \dots, y_n)$, with each $y_i \in C^1[a,b]$ and prescribed values $y_i(a)$, $y_i(b)$, be stationary for

$$
J[y] = \int_a^b F\bigl(x, y_1, \dots, y_n, y_1', \dots, y_n'\bigr)\,dx ,
$$

that is, $\delta J[y; h] = 0$ for all $h = (h_1, \dots, h_n)$ with $h_i \in C^1[a,b]$ and $h_i(a) = h_i(b) = 0$. Then each $F_{y_i'}$ is $C^1$ along $y$ and

$$
\frac{d}{dx}F_{y_i'} = F_{y_i}, \qquad i = 1, \dots, n .
$$

**(b) Higher derivatives (Euler-Poisson equation).** Let $m \ge 1$, let $F(x, y, p_1, \dots, p_m)$ have continuous partial derivatives of order up to $m + 1$, and write $F_{y^{(k)}}$ for $\partial F/\partial p_k$ (with $F_{y^{(0)}} = F_y$). Let $y \in C^{2m}[a,b]$, with $y, y', \dots, y^{(m-1)}$ prescribed at both ends, be stationary for

$$
J[y] = \int_a^b F\bigl(x, y, y', \dots, y^{(m)}\bigr)\,dx
$$

under all variations $h \in C^m[a,b]$ with $h^{(j)}(a) = h^{(j)}(b) = 0$ for $0 \le j \le m - 1$, that is, $\delta J[y; h] = 0$ for all such $h$. Note the two classes: the curve $y$ is assumed to lie in the smaller class $C^{2m}[a,b]$, while it is tested against the wider class of competitors $y + \varepsilon h$ with $h \in C^m[a,b]$, which are only $C^m$. Then

$$
\sum_{k=0}^{m} (-1)^k \frac{d^k}{dx^k} F_{y^{(k)}}\bigl(x, y, \dots, y^{(m)}\bigr) = 0 , \qquad a \le x \le b .
$$
:::

:::idea{provenance=original}
For several functions, vary one component at a time: with all other components frozen, the problem is a one-function problem, and the single Euler-Lagrange equation applies to it. For higher derivatives, the first variation contains $h, h', \dots, h^{(m)}$. Integrating the term with $h^{(k)}$ by parts $k$ times moves every derivative onto the coefficient. The boundary terms vanish because the variation and its first $m - 1$ derivatives vanish at the ends, and the fundamental lemma finishes the argument.
:::

:::proof{provenance=adapted src="arfken-2013:p. 1097; gelfand-fomin-1963:pp. 35, 41–42"}
*(a)* Fix $i$ and take $h$ with $h_j = 0$ for $j \ne i$. Then $\varepsilon \mapsto J[y + \varepsilon h]$ involves only the $i$-th component, and the computation of :ref[the first variation]{to=var.functionals-first-variation} (whose proof works verbatim with more arguments) gives

$$
0 = \delta J[y; h] = \int_a^b \bigl(F_{y_i}\,h_i + F_{y_i'}\,h_i'\bigr)\,dx \qquad\text{for all } h_i \in C^1_0[a,b] ,
$$

where $F_{y_i}$, $F_{y_i'}$ are evaluated along $y$ and are continuous functions of $x$. This is exactly the relation from which Steps 2 to 4 of the proof of :ref[the Euler-Lagrange theorem]{to=var.euler-lagrange-equation} deduce that $F_{y_i'}$ is $C^1$ with derivative $F_{y_i}$. That argument used nothing about where the two continuous coefficients came from.

*(b)* **Step 1 (first variation).** As in the one-derivative case, the mean value theorem and uniform continuity on a compact set give

$$
\delta J[y; h] = \int_a^b \sum_{k=0}^{m} F_{y^{(k)}}\,h^{(k)}\,dx = 0 .
$$

**Step 2 (regularity of the coefficients).** Put $c_k(x) = F_{y^{(k)}}(x, y(x), \dots, y^{(m)}(x))$. Because $F$ has continuous derivatives of order $m + 1$ and $y \in C^{2m}$, the chain rule shows that $c_k$ can be differentiated $k$ times with continuous result: each differentiation raises the order of the derivatives of $y$ that appear by one (at most to $m + k \le 2m$) and the order of the derivatives of $F$ by one (at most to $k + 1 \le m + 1$).

**Step 3 (integrate by parts $k$ times).** For $1 \le k \le m$,

$$
\int_a^b c_k\,h^{(k)}\,dx = \Bigl[\sum_{j=0}^{k-1} (-1)^j c_k^{(j)}\,h^{(k-1-j)}\Bigr]_a^b + (-1)^k\int_a^b c_k^{(k)}\,h\,dx .
$$

Every boundary term contains a derivative $h^{(k-1-j)}$ of order at most $k - 1 \le m - 1$, which vanishes at $a$ and $b$. Hence

$$
\int_a^b \Bigl(\sum_{k=0}^m (-1)^k c_k^{(k)}\Bigr)\,h\,dx = 0 .
$$

**Step 4 (fundamental lemma).** The bracket is continuous. The test functions $h \in C^m$ with $h^{(j)}(a) = h^{(j)}(b) = 0$ for $j < m$ include the bumps $\bigl((x - c)(d - x)\bigr)^{m+1}$ used in :ref[the fundamental lemma]{to=var.functionals-first-variation}, since these vanish to order $m + 1$ at $c$ and $d$. That proof therefore applies and the bracket vanishes identically. $\square$
:::

:::remark{provenance=adapted src="gelfand-fomin-1963:§9 Remarks 1–2, p. 36; gelfand-fomin-1963:§11 Remark, p. 42"}
**Where the hypotheses are used.**

- In (a), the components $h_i$ can be varied *independently*. This fails when the $y_i$ are tied together by a constraint, and then multipliers are needed (see :ref[pointwise constraints]{to=var.holonomic-constraints}).
- In (b), $y \in C^{2m}$ and $F \in C^{m+1}$ are used only in Step 2, to make the repeated integration by parts legitimate. As in the one-derivative case, a generalised du Bois-Reymond lemma shows that a stationary $y \in C^m$ automatically has the needed smoothness of the combinations $c_k$, but we do not prove that here.
- The $2m$ end conditions on $y, \dots, y^{(m-1)}$ are used in Step 3. If some of them are dropped, the corresponding boundary terms survive and become natural boundary conditions (see :ref[free endpoints]{to=var.natural-boundary-conditions}).
- **Different integrands, same equations.** If $\Phi(x, y_1, \dots, y_n)$ is $C^2$, then adding $\frac{d}{dx}\Phi = \Phi_x + \sum_i \Phi_{y_i}y_i'$ to $F$ changes $J$ only by $\Phi(b, y(b)) - \Phi(a, y(a))$, which is the same for all admissible curves. So the Euler-Lagrange equations do not change. Such total derivatives are called *null Lagrangians*. The same holds when $F$ is multiplied by a nonzero constant.
:::

:::example[A coupled system]{provenance=original}
Find the extremal of $J[y, z] = \int_0^1 \bigl(y'^2 + z'^2 + 2yz\bigr)\,dx$ with $y(0) = 0$, $y(1) = 1$, $z(0) = z(1) = 0$.

1. *Equations.* $F_{y'} = 2y'$, $F_y = 2z$, $F_{z'} = 2z'$, $F_z = 2y$. Part (a) gives $y'' = z$ and $z'' = y$.
2. *Decouple.* With $u = y + z$ and $v = y - z$ we get $u'' = u$, $v'' = -v$, with $u(0) = v(0) = 0$ and $u(1) = v(1) = 1$. So $u = \sinh x/\sinh 1$, $v = \sin x/\sin 1$, and

   $$
   y = \frac12\Bigl(\frac{\sinh x}{\sinh 1} + \frac{\sin x}{\sin 1}\Bigr), \qquad z = \frac12\Bigl(\frac{\sinh x}{\sinh 1} - \frac{\sin x}{\sin 1}\Bigr).
   $$

3. *Values.* $y(\tfrac12) = 0.50658$ and $z(\tfrac12) = -0.06317$.
4. *Value of $J$.* Integrating $y'^2 + z'^2$ by parts and using the equations, the integral reduces to the boundary term $[\,yy' + zz'\,]_0^1 = y'(1) = \frac12(\coth 1 + \cot 1) = 0.97756$. The competitor $y = x$, $z = 0$ gives $J = 1$.
:::

:::example[Clamped beam]{provenance=original}
A beam of length $L = 2$ m and bending stiffness $EI = 1000\ \mathrm{N\,m^2}$, clamped horizontally at both ends, carries a uniform load $q = 600\ \mathrm{N/m}$. Its deflection $w(x)$ (positive downward) minimises the potential energy

$$
J[w] = \int_0^L \Bigl(\frac{EI}{2}\,w''^2 - q\,w\Bigr)\,dx , \qquad w(0) = w'(0) = w(L) = w'(L) = 0 .
$$

1. *Euler-Poisson equation* ($m = 2$): $F_w = -q$, $F_{w'} = 0$, $F_{w''} = EI\,w''$, so $-q + \frac{d^2}{dx^2}\bigl(EI\,w''\bigr) = 0$, that is, $EI\,w'''' = q$.
2. *Solve.* Integrating four times and imposing the four clamping conditions gives $w = \dfrac{q}{24\,EI}\,x^2(L - x)^2$. Check: $x^2(L - x)^2 = x^4 - 2Lx^3 + L^2x^2$ has fourth derivative $24$, and $w$ and $w'$ vanish at both ends because of the double roots.
3. *Number.* The largest deflection is at mid-span: $w(1) = \dfrac{600}{24\cdot 1000}\cdot 1 \cdot 1 = 0.025$ m, which agrees with the textbook formula $qL^4/(384\,EI)$.
:::

:::application{provenance=original}
Part (a) is the mathematical core of Lagrangian mechanics with several degrees of freedom (see :ref[Hamilton's principle]{to=var.hamilton-principle}). It also gives ray equations in three-dimensional inhomogeneous media, where $y(x)$ and $z(x)$ describe the ray. Part (b) governs every energy that penalises curvature: Euler-Bernoulli beams and plates in structural engineering, smoothing splines in data analysis (minimising $\int f''^2$ plus a misfit gives piecewise cubics), and the bending energy of lipid membranes and DNA in biophysics.
:::
