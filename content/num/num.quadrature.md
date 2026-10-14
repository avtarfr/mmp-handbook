---
id: num.quadrature
title: Numerical quadrature
kind: method
level: core
summary: The trapezium and Simpson rules with their exact error terms, the expansion of the trapezium error in even powers of the spacing that makes Richardson extrapolation and the Romberg table work, and the Gauss rules, whose n nodes buy exactness to degree 2n-1 because they are the zeros of an orthogonal polynomial.
prereqs: [num.interpolation, spec.orthogonal-polynomials-general, found.taylor-theorem, asym.euler-maclaurin, spec.legendre-polynomials]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§27.4 Numerical integration, pp. 1000-1009: the strip nomenclature and the exact Taylor expression (27.35) for the area of one strip, pp. 1000-1001; §27.4.1 the trapezium rule (27.36)-(27.37) and its error estimate (27.38), the total error being approximately (b-a)h^2 times the average of f'' over twelve, pp. 1002-1003; §27.4.2 Simpson's rule, the derivation from the local quadratic f(x_i+y) = f_i + ay + by^2 on a double strip, the composite formula (27.40) and the stated error (b-a)h^4 f^{(4)}/180, p. 1004; §27.4.3 Gaussian integration, pp. 1005-1007: the principle of dropping equal spacing, the orthogonality condition for the mimicking polynomials F_n with weight w, the Gauss-Legendre case with nodes at the zeros of P_n and weights w_i = 2/[(1-x_i^2)|P_n'(x_i)|^2], the statement that the n-point rule integrates exactly every polynomial of degree up to 2n-1 with an error of the order of the 2n-th derivative, the three-point values +-0.77460 with weights 5/9 and 8/9, Table 27.8 of nodes and weights p. 1008, and the Gauss-Laguerre, Gauss-Hermite and Gauss-Chebyshev variants (27.44)-(27.47), p. 1009"
    pages: "1000-1009"
    role: the trapezium and Simpson rules and their composite forms; the approximate error expressions against which our exact mean-value forms are checked; the whole Gaussian-quadrature scheme, its nodes, weights and degree of exactness, and the choice of weight function for infinite ranges and endpoint singularities
  - work: kreyszig-1978
    loc: "§4.11 Numerical integration and weak* convergence, pp. 276-284: the general process (3), a rule being a bounded linear functional on C[a,b] with norm (5) equal to the sum of the absolute values of its coefficients, p. 277; Requirement 4.11-2 and the argument of pp. 278-279 that for any n+1 distinct nodes the coefficients making the rule exact on polynomials of degree at most n exist and are unique, by the invertibility of the Vandermonde system (9)-(10); Polya's convergence theorem 4.11-3, p. 279, and Steklov's theorem 4.11-4, p. 280"
    pages: "276-280"
    role: the definition of a quadrature process as a linear functional, the existence and uniqueness of interpolatory weights for prescribed nodes, and the convergence theory as the number of nodes grows (uniform bound on the sum of the absolute weights, and its automatic validity when the weights are non-negative)
---

:::note{provenance=original}
**What it means.** An integral that has no closed form is still a number, and a quadrature rule is a recipe that returns it: sample the integrand at finitely many points and take a weighted sum. Every rule in use is got by integrating an interpolant (:ref[]{to=num.interpolation}), so the interpolation error formula hands over the quadrature error formula, and the whole subject is the question of where to put the nodes. Two answers dominate. Keep the nodes equally spaced, which you must when the data are a table, and use many short panels: that is the trapezium and Simpson rules, and the trapezium rule turns out to have an error series in even powers of the spacing alone, which can be extrapolated away two orders at a time. Or choose the nodes freely, in which case they should be the zeros of an orthogonal polynomial, and $n$ of them give exactness to degree $2n-1$ instead of $n-1$: twice the return for the same number of function evaluations.
:::

:::definition[Quadrature rule, degree of exactness, interpolatory and composite rules]{provenance=adapted src="kreyszig-1978:§4.11, the process (3) and the uniqueness argument (8)-(10), pp. 277-279"}
Let $w$ be a non-negative weight function on $(a,b)$ with $\int_a^b w < \infty$ and all moments $\mu_k = \int_a^b x^k w(x)\,dx$ finite, as in :ref[]{to=spec.orthogonal-polynomials-general}. The unweighted case is $w \equiv 1$ on a bounded interval.

A **quadrature rule** with $n$ nodes is a choice of distinct points $x_1, \dots, x_n$ in $[a,b]$ and real **weights** $W_1, \dots, W_n$, used as

$$
Q(f) = \sum_{i=1}^{n} W_i\, f(x_i) \ \approx\ I(f) = \int_a^b f(x)\, w(x)\,dx .
$$

Both $I$ and $Q$ are linear functionals on $C[a,b]$, and so is the **error functional**

$$
E(f) = I(f) - Q(f) .
$$

The rule has **degree of exactness** $d$ if $E$ vanishes on every polynomial of degree at most $d$ and not on some polynomial of degree $d+1$. Kreyszig regards $Q$ as a bounded functional on $C[a,b]$ with norm $\sum_i |W_i|$, which is the point of view his convergence theorem needs.

The rule is **interpolatory** if its weights are
$$
W_i = \int_a^b \ell_i(x)\, w(x)\,dx , \qquad
\ell_i(x) = \prod_{j \neq i} \frac{x-x_j}{x_i - x_j} ,
$$
the Lagrange basis of :ref[]{to=num.interpolation} for these nodes; equivalently, $Q(f) = I(p)$ where $p$ is the interpolant of $f$ at the nodes. For any prescribed nodes these are the unique weights with degree of exactness at least $n-1$, because exactness on $1, x, \dots, x^{n-1}$ is a linear system whose matrix is a Vandermonde matrix in the distinct nodes, hence invertible.

**Newton-Cotes** rules are the interpolatory rules on equally spaced nodes with $w \equiv 1$. A **composite** rule splits $[a,b]$ into $N$ panels of equal length and applies one short Newton-Cotes rule on each. Writing $h = (b-a)/N$, $x_j = a + jh$ and $f_j = f(x_j)$, the two in universal use are the **composite trapezium rule**

$$
T(h) = h\Bigl(\tfrac12 f_0 + f_1 + f_2 + \cdots + f_{N-1} + \tfrac12 f_N \Bigr)
$$

and, for $N$ even, the **composite Simpson rule**

$$
S(h) = \frac{h}{3}\Bigl( f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + 2f_{N-2} + 4f_{N-1} + f_N \Bigr) .
$$
:::

:::statement[The two Newton-Cotes rules and their errors]{provenance=adapted src="rhb-2006:§27.4.1, (27.36)-(27.38), pp. 1002-1003, and §27.4.2, (27.39)-(27.40) and the error statement, p. 1004"}
Take $w \equiv 1$ throughout this statement.

**(i) One trapezium panel.** If $f \in C^2[c, c+h]$ then there is a $\xi \in (c, c+h)$ with
$$
\int_c^{c+h} f(x)\,dx \;-\; \frac{h}{2}\bigl(f(c) + f(c+h)\bigr) \;=\; -\frac{h^3}{12}\, f''(\xi) .
$$
The rule has degree of exactness $1$.

**(ii) One Simpson panel.** If $f \in C^4[c, c+2h]$ then there is a $\xi \in (c, c+2h)$ with
$$
\int_c^{c+2h} f(x)\,dx \;-\; \frac{h}{3}\bigl(f(c) + 4f(c+h) + f(c+2h)\bigr) \;=\; -\frac{h^5}{90}\, f^{(4)}(\xi) .
$$
The rule has degree of exactness $3$, one more than the degree of the parabola it integrates.

**(iii) Composite trapezium.** If $f \in C^2[a,b]$ there is an $\eta \in (a,b)$ with
$$
I - T(h) \;=\; -\frac{(b-a)\,h^2}{12}\, f''(\eta) .
$$

**(iv) Composite Simpson.** If $f \in C^4[a,b]$ and $N$ is even there is an $\eta \in (a,b)$ with
$$
I - S(h) \;=\; -\frac{(b-a)\,h^4}{180}\, f^{(4)}(\eta) .
$$

Riley, Hobson and Bence state (iii) and (iv) with the mean value replaced by an average of the derivative over $[a,b]$, in their equation (27.38) and the corresponding line for Simpson; the mean-value forms above are the same statements made exact, and are what is proved below.
:::

:::idea{provenance=original}
Each error functional kills polynomials up to some degree, so Taylor's theorem with integral remainder, applied with exactly that many terms, writes the error as a fixed kernel integrated against a derivative of $f$. The kernel does not depend on $f$ at all; it can be computed once from the rule. If it happens to have one sign -- and for these two rules it does -- the integral is squeezed between the extreme values of that derivative, and the intermediate value theorem produces the point $\xi$. The constant in front is then read off by feeding the rule a single monomial.

The extra degree of exactness in Simpson's rule, degree $3$ from a parabola, is the symmetry of the panel: the error functional is even about the midpoint, so it annihilates the odd function $(x-c-h)^3$ for free.

The composite statements follow by summing the panels and averaging: a sum of $N$ values of a continuous function is $N$ times one of its values.
:::

:::proof{provenance=original}
**Lemma (Peano kernel).** Let $E$ be a linear functional on $C^{k}[a,b]$ of the form $E(f) = \int_a^b f\,w - \sum_i W_i f(x_i)$, and suppose $E$ vanishes on every polynomial of degree at most $k-1$. Then for $f \in C^k[a,b]$,
$$
E(f) = \int_a^b K(t)\, f^{(k)}(t)\,dt,
\qquad
K(t) = \frac{1}{(k-1)!}\,E_x\bigl[(x-t)_+^{\,k-1}\bigr] ,
$$
where $u_+ = \max(u,0)$ and $E_x$ means $E$ applied in the variable $x$ with $t$ held fixed. If moreover $K$ does not change sign on $[a,b]$, then there is a $\xi \in (a,b)$ with
$$
E(f) = \frac{f^{(k)}(\xi)}{k!}\; E\bigl(x^{k}\bigr) .
$$

*Proof of the lemma.* Taylor's theorem with integral remainder (:ref[]{to=found.taylor-theorem}) at the left endpoint gives, for every $x \in [a,b]$,
$$
f(x) = \sum_{j=0}^{k-1} \frac{f^{(j)}(a)}{j!}(x-a)^{j} + \frac{1}{(k-1)!}\int_a^{x}(x-t)^{k-1}f^{(k)}(t)\,dt
= \sum_{j=0}^{k-1}\frac{f^{(j)}(a)}{j!}(x-a)^{j} + \frac{1}{(k-1)!}\int_a^{b}(x-t)_+^{k-1}f^{(k)}(t)\,dt ,
$$
the upper limit being extended to $b$ because the truncated power vanishes for $t > x$. Apply $E$. The polynomial part has degree $k-1$ and is annihilated by hypothesis. In the remaining term $E$ is a finite combination of an integral in $x$ and $n$ point evaluations in $x$, all of which commute with the $t$-integral, the integrand $(x,t) \mapsto (x-t)_+^{k-1}f^{(k)}(t)$ being bounded and measurable on the square and continuous off the diagonal. That gives the kernel formula.

Now suppose $K \le 0$ throughout (the case $K \ge 0$ is the same with the inequalities reversed), and put $m = \min_{[a,b]} f^{(k)}$, $M = \max_{[a,b]} f^{(k)}$, which exist because $f^{(k)}$ is continuous on a compact interval. Multiplying $m \le f^{(k)}(t) \le M$ by $K(t) \le 0$ reverses the inequalities, and integrating gives
$$
M\int_a^b K \ \le\ E(f) \ \le\ m \int_a^b K .
$$
Taking $f(x) = x^{k}$, whose $k$-th derivative is the constant $k!$, in the kernel formula gives $\int_a^b K = E(x^k)/k!$, which is therefore non-positive and, for the two rules below, non-zero. Hence $E(f)\big/\int_a^b K$ lies between $m$ and $M$, and since $f^{(k)}$ is continuous it attains that value at some $\xi$; the intermediate value theorem gives $\xi$ in the open interval unless $f^{(k)}$ is constant, in which case any interior point serves. $\square$

**(i) The trapezium panel.** Translate so that $c = 0$; the rule is $Q(f) = \tfrac{h}{2}(f(0)+f(h))$ and $E$ annihilates $1$ and $x$ by direct substitution, so take $k=2$. For $t \in (0,h)$,
$$
K(t) = E_x\bigl[(x-t)_+\bigr] = \int_t^h (x-t)\,dx - \frac{h}{2}\Bigl( (0-t)_+ + (h-t)\Bigr)
= \frac{(h-t)^2}{2} - \frac{h(h-t)}{2} = -\frac{t\,(h-t)}{2} ,
$$
using $(0-t)_+ = 0$. This is $\le 0$ on $[0,h]$ and vanishes only at the two endpoints, so the lemma applies. Finally
$$
E(x^2) = \int_0^h x^2\,dx - \frac{h}{2}\bigl(0 + h^2\bigr) = \frac{h^3}{3} - \frac{h^3}{2} = -\frac{h^3}{6} ,
$$
so $E(f) = f''(\xi)\,(-h^3/6)/2! = -h^3 f''(\xi)/12$. Degree of exactness is exactly $1$ because $E(x^2) \neq 0$.

**(ii) The Simpson panel.** Translate so that the panel is $[-h,h]$ with midpoint $0$; the rule is $Q(f) = \tfrac{h}{3}(f(-h)+4f(0)+f(h))$. Substituting $1, x, x^2$ gives $E = 0$ in each case ($\int_{-h}^{h}x^2 = 2h^3/3$ and $\tfrac{h}{3}(h^2+0+h^2) = 2h^3/3$), and $E(x^3) = 0$ because both the integral over a symmetric interval and the symmetric weighted sum vanish for an odd function. So $E$ annihilates $\mathcal{P}_3$ and we take $k=4$. For $t \in [0,h]$, the three evaluation points contribute only through $x = h$, since $(-h-t)_+ = (0-t)_+ = 0$, and
$$
3!\,K(t) = \int_t^h (x-t)^3\,dx - \frac{h}{3}(h-t)^3 = \frac{(h-t)^4}{4} - \frac{h(h-t)^3}{3}
= -\frac{(h-t)^3\,(h+3t)}{12} \ \le\ 0 .
$$
For $t \in [-h,0]$ the same computation with the term $4(0-t)^3 = -4t^3$ retained gives $K(-t) = K(t)$, so the kernel is even and non-positive throughout. Then
$$
E(x^4) = \int_{-h}^{h}x^4\,dx - \frac{h}{3}\bigl(h^4 + 0 + h^4\bigr) = \frac{2h^5}{5} - \frac{2h^5}{3} = -\frac{4h^5}{15},
$$
and the lemma gives $E(f) = f^{(4)}(\xi)(-4h^5/15)/4! = -h^5 f^{(4)}(\xi)/90$. Since $E(x^4) \neq 0$ the degree of exactness is exactly $3$.

**(iii) and (iv) Composite rules.** Sum part (i) over the $N$ panels $[x_{j}, x_{j+1}]$: there are points $\xi_j$ with
$$
I - T(h) = -\frac{h^3}{12}\sum_{j=0}^{N-1} f''(\xi_j) = -\frac{h^3}{12}\, N\, \overline{f''},
\qquad \overline{f''} = \frac1N\sum_j f''(\xi_j) .
$$
The average $\overline{f''}$ lies between the smallest and the largest of the $f''(\xi_j)$, hence between $\min f''$ and $\max f''$, so by the intermediate value theorem $\overline{f''} = f''(\eta)$ for some $\eta \in (a,b)$. With $Nh = b-a$ this is (iii). Part (iv) is identical, summing part (ii) over the $N/2$ double panels and using $(N/2)h^5 = (b-a)h^4/2$, which with the $1/90$ gives $(b-a)h^4/180$. $\square$
:::

:::statement[The trapezium error runs in even powers of h]{provenance=original}
Let $q \ge 1$ and $f \in C^{2q}[a,b]$, and let $T(h)$ be the composite trapezium rule with $h = (b-a)/N$. Then

$$
T(h) \;=\; I \;+\; \sum_{p=1}^{q-1} c_{2p}\, h^{2p} \;+\; \mathcal{E}_q(h),
\qquad
c_{2p} = \frac{B_{2p}}{(2p)!}\Bigl[f^{(2p-1)}(b) - f^{(2p-1)}(a)\Bigr] ,
$$

with the Bernoulli numbers $B_2 = \tfrac16$, $B_4 = -\tfrac1{30}$, $B_6 = \tfrac1{42}$ of :ref[]{to=asym.euler-maclaurin}, and with

$$
\bigl|\mathcal{E}_q(h)\bigr| \ \le\ \frac{2\,|B_{2q}|}{(2q)!}\; h^{2q} \int_a^b \bigl|f^{(2q)}(x)\bigr|\,dx .
$$

Two features matter and neither is obvious from part (iii) of the previous statement. **Only even powers of $h$ occur.** And **every coefficient depends on $f$ only through the two endpoints**: if $f$ is periodic with period $b-a$, or if all its odd derivatives agree at the two ends, every $c_{2p}$ vanishes and the trapezium rule converges faster than any power of $h$.
:::

:::statement[Richardson extrapolation and the Romberg table]{provenance=original}
**(i) One extrapolation.** Suppose a computable quantity satisfies $A(h) = A + c\,h^{p} + O(h^{r})$ as $h \to 0$, with $r > p > 0$ and $c$ independent of $h$. Then

$$
A_{\text{new}}(h) = \frac{2^{p}A(h/2) - A(h)}{2^{p}-1} = A + O(h^{r}) :
$$

the leading error term is cancelled exactly, at the cost of one more evaluation of $A$.

**(ii) Romberg.** Let $h_i = (b-a)/2^{i}$ and $R_{i,0} = T(h_i)$, and define

$$
R_{i,k} = \frac{4^{k} R_{i,k-1} - R_{i-1,k-1}}{4^{k}-1}, \qquad 1 \le k \le i .
$$

If $f \in C^{2k+2}[a,b]$ then $R_{i,k} - I = O(h_i^{2k+2})$, so each column of the table gains two orders of accuracy over the one to its left, and the diagonal $R_{i,i}$ converges very fast.

**(iii) The first column is Simpson.** $R_{i,1}$ is exactly the composite Simpson rule with spacing $h_i$. So Simpson's rule is not a separate idea: it is one Richardson step applied to the trapezium rule.

The table costs nothing beyond the trapezium sums, and those are nested: the nodes of $T(h_{i-1})$ are half the nodes of $T(h_i)$, so

$$
T(h_i) = \tfrac12 T(h_{i-1}) + h_i \sum_{j \text{ odd},\, 0<j<2^{i}} f(a + j h_i) ,
$$

and the whole table through row $i$ costs $2^{i}+1$ evaluations of $f$ in all.
:::

:::idea{provenance=original}
The even-power expansion is the Euler-Maclaurin formula of :ref[]{to=asym.euler-maclaurin}, which compares a sum over integers with an integral, rescaled to spacing $h$. Each derivative in that formula picks up one factor of $h$ from the chain rule and the whole formula is multiplied by one more factor of $h$ to turn a sum into a trapezium rule; since only odd-order derivatives occur in Euler-Maclaurin, only even powers of $h$ survive. The interior values of $f$ cancel in telescoping pairs, which is why only the endpoints appear.

Given such an expansion, extrapolation is just solving two equations for two unknowns: $A(h)$ and $A(h/2)$ both estimate $A$, with errors in the known ratio $2^{p}$, so the combination that eliminates the error term is forced. Doing it repeatedly, each time against the next surviving power, is the Romberg table.
:::

:::proof{provenance=original}
**The even-power expansion.** Put $g(s) = f(a + sh)$ for $s \in [0,N]$, so $g \in C^{2q}[0,N]$ and $g^{(m)}(s) = h^{m}f^{(m)}(a+sh)$. Euler-Maclaurin summation with parameter $q$ applied to $g$ on the integer interval $[0,N]$ gives
$$
\sum_{j=0}^{N} g(j) = \int_0^{N} g(s)\,ds + \frac{g(0)+g(N)}{2} + \sum_{p=1}^{q}\frac{B_{2p}}{(2p)!}\bigl[g^{(2p-1)}(N)-g^{(2p-1)}(0)\bigr] + R_q ,
\qquad
|R_q| \le \frac{|B_{2q}|}{(2q)!}\int_0^{N}\bigl|g^{(2q)}\bigr| .
$$
Multiply by $h$ and read each piece back in terms of $f$. On the left, $h\sum_{j=0}^{N}g(j) = T(h) + \tfrac{h}{2}(f_0+f_N)$, because $T$ halves the two end values. On the right, the substitution $x = a+sh$ gives $h\int_0^N g = \int_a^b f$, the half-sum term is $\tfrac{h}{2}(f_0+f_N)$ and cancels, and $h\,g^{(2p-1)}(s) = h^{2p}f^{(2p-1)}(a+sh)$, which at $s = N$ and $s=0$ gives $h^{2p}f^{(2p-1)}(b)$ and $h^{2p}f^{(2p-1)}(a)$. Likewise $h|R_q| \le h \cdot \tfrac{|B_{2q}|}{(2q)!}h^{2q}\cdot \tfrac1h\int_a^b|f^{(2q)}|$. Hence
$$
T(h) = I + \sum_{p=1}^{q}c_{2p}h^{2p} + hR_q,
\qquad |hR_q| \le \frac{|B_{2q}|}{(2q)!}h^{2q}\int_a^b\bigl|f^{(2q)}\bigr| .
$$
Moving the last term of the sum into the remainder, $\mathcal{E}_q(h) = c_{2q}h^{2q} + hR_q$, and
$$
|c_{2q}| = \frac{|B_{2q}|}{(2q)!}\Bigl|\int_a^b f^{(2q)}\Bigr| \le \frac{|B_{2q}|}{(2q)!}\int_a^b\bigl|f^{(2q)}\bigr|
$$
by the fundamental theorem of calculus, which doubles the bound. This proves the statement, and the case $q=1$ reproduces the order $h^2$ already known from the mean-value form.

**(i) Richardson.** Write $A(h) = A + ch^{p} + \rho(h)$ with $|\rho(h)| \le Ch^{r}$. Then
$$
\frac{2^{p}A(h/2)-A(h)}{2^{p}-1}
= \frac{2^{p}A + 2^{p}c (h/2)^{p} - A - ch^{p}}{2^{p}-1} + \frac{2^{p}\rho(h/2)-\rho(h)}{2^{p}-1}
= A + 0 + O(h^{r}) ,
$$
since $2^{p}(h/2)^{p} = h^{p}$ makes the two $c$-terms cancel, and the remainder is bounded by $(2^{p}2^{-r}+1)Ch^{r}/(2^{p}-1)$.

**(ii) Romberg.** Induct on $k$. For $k=0$ the previous statement with $q = k+1 = 1$ gives $R_{i,0} - I = O(h_i^{2})$. Suppose that for some $k \ge 1$, and for $f \in C^{2k+2}$,
$$
R_{i,k-1} = I + \sum_{p=k}^{m} d_{p}h_i^{2p} + O(h_i^{2m+2})
$$
for coefficients $d_p$ independent of $i$ -- which is true at $k=1$ by the even-power expansion with $q$ as large as the smoothness allows. Applying (i) with $p$ replaced by $2k$ (so $2^{p}$ becomes $4^{k}$) to the pair $(R_{i-1,k-1}, R_{i,k-1})$, where $h_i = h_{i-1}/2$, cancels the $h^{2k}$ term and leaves an expansion starting at $h_i^{2k+2}$ with coefficients again independent of $i$. That is the inductive step, and it needs $f \in C^{2k+2}$ for the expansion to reach that far.

**(iii) Simpson.** With $h = h_i$ and $2h = h_{i-1}$,
$$
R_{i,1} = \frac{4T(h)-T(2h)}{3} .
$$
Write out both sums. $T(h) = h(\tfrac12 f_0 + f_1 + \cdots + f_{N-1} + \tfrac12 f_N)$ with $N$ even, and $T(2h) = 2h(\tfrac12 f_0 + f_2 + f_4 + \cdots + f_{N-2} + \tfrac12 f_N)$, which uses only the even-indexed nodes. Then
$$
\frac{4T(h)-T(2h)}{3} = \frac{h}{3}\Bigl[(2-1)f_0 + 4\!\!\sum_{j \text{ odd}}\!\! f_j + (4-2)\!\!\sum_{\substack{j \text{ even}\\ 0<j<N}}\!\! f_j + (2-1)f_N\Bigr]
= \frac{h}{3}\Bigl[f_0 + 4\!\!\sum_{j \text{ odd}}\!\! f_j + 2\!\!\sum_{\substack{j \text{ even}\\ 0<j<N}}\!\! f_j + f_N\Bigr],
$$
which is $S(h)$. $\square$
:::

:::statement[Gauss rules]{provenance=adapted src="rhb-2006:§27.4.3, the scheme and the exactness to degree 2n-1, pp. 1005-1007"}
Let $w$ be a weight on $(a,b)$ as above, let $(\pi_n)$ be its **monic** orthogonal family (:ref[]{to=spec.orthogonal-polynomials-general}), and let $x_1 < x_2 < \cdots < x_n$ be the zeros of $\pi_n$, which that unit shows to be real, simple and interior to $(a,b)$. Let $W_i = \int_a^b \ell_i w$ be the interpolatory weights for these nodes. Then:

1. **Exactness.** $E(f) = 0$ for every polynomial $f$ of degree at most $2n-1$.
2. **And no more.** $E(\pi_n^2) = \int_a^b \pi_n^2\, w > 0$, and $\pi_n^2$ has degree $2n$; so the degree of exactness is exactly $2n-1$. No $n$-node rule whatever can do better.
3. **Positive weights.** $W_i = \int_a^b \ell_i^2\, w > 0$ for every $i$, and $\sum_i W_i = \mu_0 = \int_a^b w$.
4. **Uniqueness.** It is the only $n$-node rule with degree of exactness $2n-1$.
5. **Error.** If $f \in C^{2n}[a,b]$ there is a $\xi \in (a,b)$ with
$$
E(f) = \frac{f^{(2n)}(\xi)}{(2n)!}\int_a^b \pi_n(x)^2\,w(x)\,dx .
$$

**Gauss-Legendre.** For $w \equiv 1$ on $[-1,1]$ the nodes are the zeros of the Legendre polynomial $P_n$ and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.4.3, p. 1006"} give the weights as
$$
W_i = \frac{2}{(1-x_i^{2})\,\bigl|P_n'(x_i)\bigr|^{2}} ,
$$
tabulating them to ten decimals for $n$ up to $20$ in their Table 27.8, p. 1008. Since $P_n$ has leading coefficient $(2n)!/(2^{n}(n!)^{2})$ and $\int_{-1}^{1}P_n^2 = 2/(2n+1)$ (:ref[]{to=spec.legendre-polynomials}), the error constant is
$$
\int_{-1}^{1}\pi_n^{2}\,dx = \frac{2}{2n+1}\left(\frac{2^{n}(n!)^{2}}{(2n)!}\right)^{2} = \frac{2^{2n+1}(n!)^{4}}{(2n+1)\bigl((2n)!\bigr)^{2}} ,
$$
which is $\tfrac{2}{3}, \tfrac{8}{45}, \tfrac{8}{175}, \tfrac{128}{11025}$ for $n = 1,2,3,4$. A general interval is reached by the affine substitution $x = \tfrac{a+b}{2}+\tfrac{b-a}{2}z$, which multiplies the integral by $(b-a)/2$.

Other weights absorb whatever is awkward about the integrand, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.4.3, pp. 1005, 1009"} list the standard ones: $e^{-x}$ on $(0,\infty)$ for Gauss-Laguerre, $e^{-x^{2}}$ on $\mathbb{R}$ for Gauss-Hermite, and $(1-x^{2})^{\pm 1/2}$ on $(-1,1)$ for the two Gauss-Chebyshev families, whose nodes and weights they give in closed form, $x_i = \cos\frac{(i-\frac12)\pi}{n}$ with all weights equal to $\pi/n$ in the first-kind case.
:::

:::statement[Convergence as the number of nodes grows]{provenance=adapted src="kreyszig-1978:§4.11, Theorems 4.11-3 (Polya) and 4.11-4 (Steklov), pp. 279-280"}
Let $w \equiv 1$ on $[a,b]$ and let $Q_n$, $n = 1,2,\dots$, be a sequence of rules, $Q_n$ having $n$ nodes and $n$ weights $W_i^{(n)}$, each exact on polynomials of degree at most $n-1$.

**Polya.** $Q_n(f) \to \int_a^b f$ for every $f \in C[a,b]$ **if and only if** there is a constant $c$ with
$$
\sum_{i=1}^{n}\bigl|W_i^{(n)}\bigr| \le c \qquad \text{for all } n .
$$

**Steklov.** If every weight is non-negative, this bound is automatic, since taking $f \equiv 1$ gives $\sum_i W_i^{(n)} = b-a$; so such a sequence converges for every continuous $f$.

By part 3 of the previous statement the Gauss rules have positive weights, so Steklov's theorem applies to them: Gauss quadrature converges for *every* continuous integrand as $n$ grows. The equally spaced Newton-Cotes rules do not have this property. Computing their weights exactly, all are positive up to $8$ nodes; at $9$ nodes negative weights appear for the first time and $\sum_i|W_i^{(n)}|/(b-a) = 6857/4725 = 1.4512$, at $11$ nodes it is $152921/49896 = 3.0648$, and the quantity grows without bound thereafter. Raising the order of a single Newton-Cotes rule is therefore not a convergent strategy, which is the reason composite rules exist.
:::

:::idea{provenance=original}
Everything about Gauss rules comes from one division. A polynomial $f$ of degree $2n-1$ can be divided by $\pi_n$ to give $f = q\pi_n + r$ with $q$ and $r$ of degree below $n$. The rule does not see the quotient term at all, because every node is a root of $\pi_n$; the integral does not see it either, because $\pi_n$ is orthogonal to everything of lower degree, which is exactly what $q$ is. What is left on both sides is the remainder $r$, of degree below $n$, on which any interpolatory rule is exact. The two sides therefore agree -- and the argument plainly fails at degree $2n$, where $q$ can be constant and $\int q \pi_n w$ need not vanish.

Positivity of the weights is the same trick run on $\ell_i^2$, which has degree $2n-2$ and so is integrated exactly, while the rule evaluates it as $W_i$.

The error formula replaces the interpolant at $n$ points by the Hermite interpolant that also matches $n$ derivatives: it has degree $2n-1$, so the rule integrates it exactly, and the difference $f - H$ carries the square of the node polynomial, which has a fixed sign.

Polya's theorem is the uniform boundedness principle in disguise: the rules are bounded functionals on $C[a,b]$, they already converge on the polynomials, which are dense, and a family of functionals that converges on a dense set converges everywhere precisely when its norms are bounded.
:::

:::proof{provenance=original}
**1. Exactness.** Let $\deg f \le 2n-1$. Polynomial division by the monic $\pi_n$ gives $f = q\,\pi_n + r$ with $\deg q \le n-1$ and $\deg r \le n-1$. Then
$$
I(f) = \int_a^b q\,\pi_n\, w + \int_a^b r\,w = 0 + I(r) ,
$$
the first integral vanishing because $\pi_n$ is orthogonal to every polynomial of degree below $n$ (:ref[]{to=spec.orthogonal-polynomials-general}) and $\deg q \le n-1$. On the other side, $\pi_n(x_i) = 0$ for every node, so
$$
Q(f) = \sum_i W_i\bigl(q(x_i)\pi_n(x_i) + r(x_i)\bigr) = Q(r) .
$$
Finally $I(r) = Q(r)$ because the rule is interpolatory and $\deg r \le n-1$. Hence $E(f) = 0$.

**2. The degree is not higher.** Take $f = \pi_n^2$, of degree $2n$. Every node is a root, so $Q(f) = 0$, while $I(f) = \int \pi_n^2 w > 0$ because $w \ge 0$ is a weight and $\pi_n^2 \ge 0$ is not identically zero. For an arbitrary $n$-node rule with nodes $y_i$, the same argument with $\prod_i (x-y_i)^2$ shows no $n$-node rule is exact on all of $\mathcal{P}_{2n}$.

**3. Positivity.** $\ell_i^2$ has degree $2n-2 \le 2n-1$, so by part 1,
$$
\int_a^b \ell_i^2\,w = \sum_j W_j\,\ell_i(x_j)^2 = W_i ,
$$
since $\ell_i(x_j) = \delta_{ij}$. The left side is strictly positive: $\ell_i^2 w \ge 0$ and $\ell_i^2$ is a non-zero polynomial, so it is bounded below by a positive constant on some subinterval where $w$ is not almost everywhere zero. Taking $f \equiv 1$ in part 1 gives $\sum_i W_i = \mu_0$.

**4. Uniqueness.** Suppose nodes $y_1,\dots,y_n$ and weights $V_1,\dots,V_n$ give a rule exact on $\mathcal{P}_{2n-1}$. Put $u(x) = \prod_i (x-y_i)$, monic of degree $n$. For any polynomial $q$ with $\deg q \le n-1$ the product $qu$ has degree at most $2n-1$, so
$$
\int_a^b q\,u\,w = \sum_i V_i\, q(y_i)\,u(y_i) = 0 ,
$$
each $u(y_i)$ being zero. So $u$ is a monic polynomial of degree $n$ orthogonal to $\mathcal{P}_{n-1}$, and the monic orthogonal polynomial with that property is unique, so $u = \pi_n$ and the $y_i$ are the Gauss nodes. The weights are then forced, being the unique ones exact on $\mathcal{P}_{n-1}$.

**5. The error formula.** Let $f \in C^{2n}[a,b]$ and let $H$ be the **Hermite interpolant** of $f$ at the nodes: the unique polynomial of degree at most $2n-1$ with $H(x_i) = f(x_i)$ and $H'(x_i) = f'(x_i)$ for every $i$. (Uniqueness: a difference of two such polynomials has a double root at each of the $n$ nodes, hence is divisible by $\pi_n^2$, of degree $2n$; a polynomial of degree at most $2n-1$ divisible by one of degree $2n$ is zero. Existence then follows because the $2n$ interpolation conditions are a square linear system on the $2n$-dimensional space $\mathcal{P}_{2n-1}$, and a square system with trivial kernel is solvable.)

*Pointwise remainder.* Fix $x$ in $[a,b]$ that is not a node, and set $\lambda = \bigl(f(x)-H(x)\bigr)/\pi_n(x)^2$ and $g(s) = f(s)-H(s)-\lambda\,\pi_n(s)^2$. Then $g$ vanishes at the $n$ nodes and at $x$, that is at $n+1$ distinct points, so by Rolle's theorem $g'$ vanishes at $n$ interior points of the gaps; and $g'$ also vanishes at each of the $n$ nodes, because $f'=H'$ there and $\pi_n^2$ has a double root. These $2n$ zeros of $g'$ are distinct, the nodes not being among the interior points just produced. Applying Rolle $2n-1$ more times, $g^{(2n)}$ has a zero $\zeta$ in $(a,b)$. Since $H^{(2n)} \equiv 0$ and $\pi_n^2$ is monic of degree $2n$, so that $(\pi_n^2)^{(2n)} \equiv (2n)!$, this gives $\lambda = f^{(2n)}(\zeta)/(2n)!$. Hence for every $x$ in $[a,b]$, nodes included,
$$
f(x) - H(x) = \frac{f^{(2n)}(\zeta_x)}{(2n)!}\,\pi_n(x)^2 .
$$

*Integrate.* Let $m$ and $M$ be the minimum and maximum of $f^{(2n)}/(2n)!$ on $[a,b]$. Then $m\,\pi_n(x)^2 \le f(x)-H(x) \le M\,\pi_n(x)^2$ for every $x$. Multiply by $w \ge 0$ and integrate:
$$
m \int_a^b \pi_n^2 w \ \le\ \int_a^b (f-H)\,w \ \le\ M\int_a^b \pi_n^2 w .
$$
By part 1 the rule is exact on $H$, and $H$ agrees with $f$ at the nodes, so $\int_a^b H w = Q(H) = Q(f)$ and the middle quantity is exactly $E(f)$. Dividing by the positive number $\int \pi_n^2 w$ puts $E(f)/\int\pi_n^2 w$ between $m$ and $M$; the continuous function $f^{(2n)}/(2n)!$ attains that value at some $\xi$, interior unless it is constant. $\square$

**Polya and Steklov.** These are Theorems 4.11-3 and 4.11-4 of :cite[Kreyszig]{work=kreyszig-1978 loc="§4.11, pp. 279-280"}; his proof identifies $\|Q_n\| = \sum_i|W_i^{(n)}|$, notes that the polynomials are dense in $C[a,b]$ by the Weierstrass approximation theorem and that convergence already holds on them by exactness, and then appeals to the characterisation of weak* convergence for a sequence of functionals on a Banach space, which requires exactly a uniform bound on the norms (:ref[]{to=funcan.uniform-boundedness-open-mapping}, :ref[]{to=funcan.weak-convergence}).
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$f \in C^{2}$ for the trapezium rule, $C^{4}$ for Simpson, $C^{2n}$ for the $n$-point Gauss rule.** These enter at exactly one place each: the Peano lemma needs $f^{(k)}$ continuous to squeeze the kernel integral and to apply the intermediate value theorem, and the Gauss proof needs $f^{(2n)}$ continuous for the same reason. Drop the smoothness and the formulas say nothing. For $f(x) = \sqrt{x}$ on $[0,1]$, whose second derivative is unbounded at the origin, the composite trapezium error is not $O(h^2)$ but $O(h^{3/2})$: at $N = 4, 8, 16, 32, 64, 128, 256$ panels the computed errors are $2.3384\times10^{-2}$, $8.5364\times10^{-3}$, $3.0855\times10^{-3}$, $1.1077\times10^{-3}$, $3.9586\times10^{-4}$, $1.4101\times10^{-4}$, $5.0118\times10^{-5}$, falling by factors $0.365, 0.361, 0.359, 0.357, 0.356, 0.355$, which are creeping down to $2^{-3/2} = 0.3536$ and not to $2^{-2} = 0.25$. Romberg extrapolation on such an integrand is worse than useless, because it extrapolates a power that is not there.
- **The kernel must not change sign.** That is what converts a bound into an equality with a definite point $\xi$. It holds for the trapezium and Simpson panels, as computed, and for every Gauss rule, because there the role of the kernel is played by $\pi_n^2 \ge 0$. It fails for Newton-Cotes rules of high order, which is another face of their negative weights.
- **Distinct nodes.** Used for the Lagrange basis and so for the very existence of interpolatory weights; the Gauss nodes are distinct because the zeros of an orthogonal polynomial are simple.
- **$w \ge 0$.** Used three times: for $\int\pi_n^2 w > 0$, for the positivity of the weights, and in the last step of the error proof, where multiplying an inequality by $w$ must not reverse it. A signed weight destroys all three.
- **Exactness on $\mathcal{P}_{n-1}$ in Polya's theorem** is what makes the rules converge on the dense set of polynomials; the uniform bound on $\sum|W_i|$ is what transfers that to all of $C[a,b]$. Neither alone suffices, and Kreyszig's statement is an equivalence, so the bound is not merely convenient.
- **Periodicity is a hypothesis too.** The final remark of the even-power expansion is not an approximation but an identity: for a smooth periodic integrand over a full period every $c_{2p}$ vanishes, and the plain trapezium rule is spectrally accurate. This is why Fourier and spectral codes (:ref[]{to=num.spectral-methods}) integrate with the trapezium rule and nothing fancier, and why :ref[]{to=fourier.dft-fft} computes Fourier coefficients by an equally weighted sum.
:::

:::method[Choosing and running a quadrature]{provenance=original}
1. **Decide whether you may choose the nodes.** If the integrand is a table, you may not: use a composite rule on the nodes you have, Simpson if their number is odd (an even number of panels), the trapezium rule otherwise. If you can evaluate $f$ anywhere, use a Gauss rule or Romberg.
2. **Check the smoothness first, not last.** Count how many continuous derivatives the integrand has on the *closed* interval. An endpoint singularity (an inverse square root, a logarithm) invalidates every error formula here; remove it by substitution, by splitting off an analytically integrable piece, or by choosing a Gauss weight that contains it, as Gauss-Chebyshev contains $(1-x^2)^{-1/2}$.
3. **For a smooth integrand on a finite interval, use Gauss-Legendre.** Map to $[-1,1]$ by $x = \tfrac{a+b}{2}+\tfrac{b-a}{2}z$, take the nodes and weights from a table such as :cite[Table 27.8]{work=rhb-2006 loc="p. 1008"}, and multiply the result by $(b-a)/2$. Estimate the error by comparing the $n$-point and $2n$-point rules; the $n$-point error is well approximated by their difference, since the $2n$-point value is far more accurate.
4. **For a tabulated or repeatedly refined integrand, build the Romberg table.** Compute $T(h_0)$ with one panel; then double the number of panels, reusing all previous values through $T(h_i) = \tfrac12T(h_{i-1}) + h_i\sum_{j\text{ odd}}f(a+jh_i)$; then fill the row by $R_{i,k} = (4^{k}R_{i,k-1}-R_{i-1,k-1})/(4^{k}-1)$. Stop when $|R_{i,i}-R_{i-1,i-1}|$ is below the tolerance, and report $R_{i,i}$.
5. **Never extrapolate further than the smoothness allows.** Column $k$ of the Romberg table presupposes $f \in C^{2k+2}$. If the diagonal stops improving, or starts getting worse, the expansion has run out: stop at the last column that was still improving.
6. **Watch the rounding floor.** Each column of the Romberg table amplifies rounding error by roughly $(4^{k}+1)/(4^{k}-1) \le 5/3$, so the floor is only a few times the floor of $T$ itself, about $n\varepsilon\max|f|$ for $n$ evaluations with unit roundoff $\varepsilon$ (:ref[]{to=num.floating-point-errors}). Refining beyond that point buys nothing: the error stops falling and begins to rise.
7. **In several dimensions, do not use a product rule beyond three or four dimensions.** A product of $n$-point rules costs $n^{d}$ evaluations. Beyond that use Monte Carlo, whose error is $O(M^{-1/2})$ independently of the dimension (:ref[]{to=num.monte-carlo}).
:::

:::example[One integral, four rules, with the predicted error constants checked]{provenance=original}
Take
$$
I = \int_0^1 e^{x}\,dx = e - 1 = 1.718281828459045 ,
$$
an integral whose exact value is known, so that every error below is an error and not an estimate. All derivatives of $f(x)=e^{x}$ equal $e^{x}$, which makes the predicted constants explicit.

**Trapezium rule.** With $N$ panels and $h = 1/N$, the predicted error is $I - T(h) = -h^2 e^{\eta}/12$ for some $\eta \in (0,1)$, that is $T(h) - I = h^{2}e^{\eta}/12$. The computed values are

| $N$ | $T(h)$ | $T(h)-I$ | $12\,(T(h)-I)/h^{2}$ | $\eta$ |
|---|---|---|---|---|
| 1 | 1.8591409142 | $1.4086\times10^{-1}$ | 1.690309 | 0.524911 |
| 2 | 1.7539310925 | $3.5649\times10^{-2}$ | 1.711165 | 0.537174 |
| 4 | 1.7272219046 | $8.9401\times10^{-3}$ | 1.716495 | 0.540284 |
| 8 | 1.7205185922 | $2.2368\times10^{-3}$ | 1.717835 | 0.541065 |

Every $\eta$ lies in $(0,1)$, as the theorem requires, and the fourth column settles on $e-1 = 1.718282$, the value forced by the even-power expansion: its leading coefficient is $c_2 = \tfrac{1}{12}[f'(1)-f'(0)] = (e-1)/12$, so $12(T-I)/h^2 \to e-1$ and $\eta \to \ln(e-1) = 0.541325$.

**Simpson's rule.** The prediction is $S(h)-I = h^{4}e^{\eta}/180$:

| $N$ | $S(h)$ | $S(h)-I$ | $180\,(S(h)-I)/h^{4}$ |
|---|---|---|---|
| 2 | 1.7188611519 | $5.7932\times10^{-4}$ | 1.668451 |
| 4 | 1.7183188419 | $3.7013\times10^{-5}$ | 1.705580 |
| 8 | 1.7182841547 | $2.3262\times10^{-6}$ | 1.715091 |

again approaching $e-1$. Each halving of $h$ divides the error by about $16$, as an $h^4$ rule must.

**Romberg.** Build the table from $T(1), T(\tfrac12), \dots, T(\tfrac1{16})$, which together use $17$ evaluations of $f$ because the nodes are nested. The entries, and in brackets their errors:

| $N$ | $R_{i,0}$ | $R_{i,1}$ | $R_{i,2}$ | $R_{i,3}$ | $R_{i,4}$ |
|---|---|---|---|---|---|
| 1 | 1.859140914 | | | | |
| 2 | 1.753931092 | 1.718861152 | | | |
| 4 | 1.727221905 | 1.718318842 | 1.718282688 | | |
| 8 | 1.720518592 | 1.718284155 | 1.718281842 | 1.718281829 | |
| 16 | 1.718841129 | 1.718281974 | 1.718281829 | 1.7182818285 | 1.7182818285 |

with diagonal errors
$$
1.41\times10^{-1},\quad 5.79\times10^{-4},\quad 8.60\times10^{-7},\quad 3.36\times10^{-10},\quad 3.31\times10^{-14} .
$$
Two checks on the construction. The second column reproduces the Simpson values above exactly ($1.718861152$ and $1.718318842$ are $S(\tfrac12)$ and $S(\tfrac14)$), as part (iii) of the Richardson statement says it must. And the errors in each column fall by the predicted factors: column $0$ by $4$, column $1$ by $16$, column $2$ by $64$. Seventeen evaluations have produced thirteen correct digits, where the plain trapezium rule with the same $17$ evaluations gives four.

**Gauss-Legendre.** Substituting $x = (z+1)/2$ turns $I$ into $\tfrac12\int_{-1}^{1}e^{(z+1)/2}dz$. The two-point rule has $z = \pm 1/\sqrt3$, both weights $1$, so the nodes in $x$ are $0.211324865$ and $0.788675135$ with weights $\tfrac12$ each:
$$
G_2 = \tfrac12\bigl(1.235313601 + 2.200479155\bigr) = 1.717896378, \qquad I - G_2 = 3.8545\times10^{-4} .
$$
The three-point rule has $z = 0, \pm\sqrt{3/5}$ with weights $\tfrac89, \tfrac59$, so $x = 0.112701665,\, 0.5,\, 0.887298335$ with weights $\tfrac59\cdot\tfrac12 = 0.277777778$, $\tfrac89\cdot\tfrac12 = 0.444444444$, $0.277777778$:
$$
G_3 = 0.277777778(1.119297958) + 0.444444444(1.648721271) + 0.277777778(2.428559625) = 1.718281004,
$$
$$
I - G_3 = 8.2409\times10^{-7} .
$$
Check these against the error formula. On $[0,1]$ the constant is $\tfrac12 \cdot 2^{-2n}\int_{-1}^{1}\pi_n^2\,dz\,/(2n)!$, the $2^{-2n}$ coming from differentiating $e^{(z+1)/2}$ in $z$ and the $\tfrac12$ from the Jacobian. For $n=2$, with $\int\pi_2^2 = 8/45$, this is $\tfrac12\cdot\tfrac1{16}\cdot\tfrac{8/45}{24} = 2.31481\times10^{-4}$, and $(I-G_2)$ divided by it is $1.665146$, so $\xi = \ln 1.665146 = 0.509913 \in (0,1)$. For $n=3$, with $\int\pi_3^2 = 8/175$, the constant is $\tfrac12\cdot\tfrac1{64}\cdot\tfrac{8/175}{720} = 4.96032\times10^{-7}$, giving $1.661358$ and $\xi = 0.507636 \in (0,1)$. Both error formulas are confirmed to six figures.

**The scoreboard.** Counting evaluations of $f$: Gauss with $3$ points reaches $8.2\times10^{-7}$; Simpson needs $9$ points to reach $2.3\times10^{-6}$, and the trapezium rule would need $h^{2}(e-1)/12 \le 8.24\times10^{-7}$, that is $h \le 2.399\times10^{-3}$ and about $418$ points, to match the three-point Gauss rule. Romberg, which pays the trapezium rule's evaluations but extrapolates them, reaches $3\times10^{-14}$ with $17$.
:::

:::application[Matrix elements, cross-sections and the finite element method]{provenance=original}
Almost every integral a physicist actually computes is a quadrature, and the choice of rule is dictated by the structure of the integrand rather than by taste.

**Angular integrals in scattering and radiative transfer.** A phase function or a scattering amplitude is integrated over $\mu = \cos\theta \in [-1,1]$ against a weight of $1$. The integrand is usually well approximated by a polynomial of modest degree in $\mu$ -- that is precisely what a truncated Legendre expansion says -- so Gauss-Legendre with the number of nodes set by the retained order is exact, not approximate. A radiative-transfer code that keeps $L$ Legendre moments uses an $n$-point Gauss-Legendre angular grid with $2n-1 \ge 2L$, and the discrete ordinates of such codes are nothing but Gauss nodes. If instead the integrand carries $(1-\mu^{2})^{-1/2}$, as grazing-incidence problems do, Gauss-Chebyshev puts the singularity in the weight and the quadrature never evaluates it.

**Matrix elements in quantum mechanics and quantum chemistry.** An expectation value $\int \psi^{*}\hat{O}\psi$ over an infinite range with a Gaussian or exponential envelope is exactly what Gauss-Hermite and Gauss-Laguerre are built for: the envelope is the weight, so it is handled analytically, and the rule needs only to resolve the polynomial prefactor. A harmonic-oscillator matrix element between states $n$ and $m$ has a prefactor of degree $n+m$ in the oscillator coordinate, so $\lceil (n+m+1)/2 \rceil$ Gauss-Hermite nodes evaluate it exactly, in arithmetic with no truncation error at all.

**Element integrals in the finite element method.** Assembling a stiffness matrix (:ref[]{to=num.finite-elements}) means evaluating one small integral per element, millions of times. The integrands are products of polynomial shape functions and a Jacobian, of known degree, so a Gauss rule of just sufficient order is used and the quadrature is exact to rounding. This is why Gauss rules are hard-wired into finite element codes: the alternative, refining a composite rule until it converges, would multiply the cost of assembly by a large factor and give a worse answer.

**Periodic integrands.** Orbit averages, time averages over a cycle, and the Fourier coefficients of a periodic signal are integrals over a full period of a smooth periodic function. There the even-power expansion collapses entirely and the equally spaced trapezium rule is the optimal rule, converging faster than any power of the spacing. Using Simpson's rule instead -- as is often done by reflex -- is strictly worse, because its unequal weights break the symmetry that produced the collapse.

**A warning from the error constants.** Every statement above about accuracy multiplies a power of $h$ by a high derivative of the integrand. A resonance of width $\Gamma$ in a cross-section has $f^{(2n)} \sim \Gamma^{-2n}$ near the peak, so the error constant is astronomically large until $h \lesssim \Gamma$. No amount of extrapolation repairs this; the integral must be split at the resonance and the narrow piece resolved on its own scale. The error formula is useful exactly because it tells you this before the computation rather than after.
:::
