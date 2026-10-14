---
id: num.interpolation
title: Polynomial and spline interpolation
kind: method
level: core
summary: The unique polynomial through n+1 points, in Lagrange and Newton form, with the exact error formula that explains both its accuracy near the nodes and Runge's divergence away from them, and the cubic spline that replaces it when the nodes are many and equally spaced.
prereqs: [found.taylor-theorem]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§6.6 Splines: piecewise polynomial approximation and the definition of the cubic splines on a partition a = t_0 < ... < t_n = b as the twice continuously differentiable functions agreeing with a cubic on each subinterval, with the remark that classical interpolation by a single polynomial of degree n (named there to Lagrange, Newton and Everett) is good near the nodes but can depart badly from the function further away, pp. 356-358; Theorem 6.6-1 on the existence and uniqueness of the interpolating cubic spline with prescribed end slopes, its proof through the Hermite cubic on each subinterval and the tridiagonal system for the nodal slopes, pp. 358-359; the minimum property (6) for the integral of the square of the second derivative, pp. 359-360"
    pages: "356-360"
    role: the cubic spline, its interpolation theorem with prescribed end derivatives and the route of the proof (Hermite form, continuity of the second derivative, diagonally dominant tridiagonal system), and the minimum-curvature property
  - work: kreyszig-1978
    loc: "§5.2, the opening comparison of direct and iterative methods for a linear system, with the count of 'about n^3/3 arithmetical operations' for the usual direct methods, p. 307; the spline material of §6.6 is listed in the entry above"
    pages: "307, 356-360"
    role: the operation count for a dense linear system, against which the cost of the tridiagonal spline system is compared
---

:::note{provenance=original}
**What it means.** You have a function at a finite set of points -- a table, a measurement, the output of an expensive code -- and you want it in between. There is exactly one polynomial of degree $n$ through $n+1$ points, and an exact formula for what it misses. The formula carries two lessons that pull in opposite directions. Near the nodes, and for a handful of them, polynomial interpolation is extremely accurate and underwrites almost every other method in this part: quadrature rules, finite differences and finite elements are all obtained by integrating or differentiating an interpolant. Pushed to many equally spaced nodes it fails spectacularly, and the cure is not a better polynomial but a different object: a chain of low-degree pieces glued smoothly, the spline.
:::

:::definition[Interpolant, Lagrange basis, divided differences]{provenance=original}
Let $x_0 < x_1 < \cdots < x_n$ be **nodes**, distinct points of an interval $[a,b]$, and let $f_0, \dots, f_n$ be prescribed values; when they come from a function we write $f_i = f(x_i)$. A polynomial $p$ **interpolates** these data if $p(x_i) = f_i$ for $i = 0,\dots,n$. Write $\mathcal{P}_n$ for the real polynomials of degree at most $n$, a vector space of dimension $n+1$.

The **Lagrange basis** for the nodes is

$$
\ell_k(x) = \prod_{\substack{j=0 \\ j \neq k}}^{n} \frac{x - x_j}{x_k - x_j}, \qquad k = 0,\dots,n ,
$$

each $\ell_k \in \mathcal{P}_n$ with $\ell_k(x_i) = \delta_{ik}$; the denominators are non-zero precisely because the nodes are distinct. The **Lagrange form** of the interpolant is

$$
p(x) = \sum_{k=0}^{n} f_k \,\ell_k(x) .
$$

The **divided difference** $f[x_i, x_{i+1}, \dots, x_{i+k}]$ is defined as the coefficient of $x^{k}$ in the polynomial of degree at most $k$ that interpolates the data at the $k+1$ nodes $x_i, \dots, x_{i+k}$ -- its leading coefficient. In particular $f[x_i] = f_i$. The **Newton form** of the interpolant is

$$
p(x) = \sum_{k=0}^{n} f[x_0,\dots,x_k] \prod_{j=0}^{k-1}(x - x_j)
= f[x_0] + f[x_0,x_1](x-x_0) + f[x_0,x_1,x_2](x-x_0)(x-x_1) + \cdots,
$$

the empty product being $1$. Finally write

$$
w(x) = \prod_{i=0}^{n}(x-x_i) ,
$$

the monic **node polynomial** of degree $n+1$, which governs the error.
:::

:::statement[Existence, uniqueness, the Newton recursion and the error]{provenance=original}
Let $x_0, \dots, x_n$ be distinct nodes in $[a,b]$.

**(i) Existence and uniqueness.** For any values $f_0,\dots,f_n$ there is exactly one $p \in \mathcal{P}_n$ with $p(x_i) = f_i$ for every $i$, and it is given by either the Lagrange form or the Newton form above; the two are the same polynomial written in two bases.

**(ii) The divided-difference recursion.** For $k \ge 1$,

$$
f[x_i, \dots, x_{i+k}] = \frac{f[x_{i+1},\dots,x_{i+k}] - f[x_i,\dots,x_{i+k-1}]}{x_{i+k}-x_i} .
$$

**(iii) The error.** Suppose in addition that $f$ is $n+1$ times continuously differentiable on $[a,b]$ and $f_i = f(x_i)$. Then for every $x \in [a,b]$ there is a point $\xi_x$ in the open interval spanned by $x, x_0, \dots, x_n$ with

$$
f(x) - p(x) = \frac{f^{(n+1)}(\xi_x)}{(n+1)!}\; w(x), \qquad w(x) = \prod_{i=0}^{n}(x-x_i) .
$$

In particular

$$
\max_{a \le x \le b} |f(x)-p(x)| \ \le \ \frac{\max_{a\le t\le b}|f^{(n+1)}(t)|}{(n+1)!}\ \max_{a \le x \le b}|w(x)| ,
$$

a product of one factor that depends only on $f$ and one that depends only on where the nodes are put.
:::

:::idea{provenance=original}
Uniqueness is the engine, and it is one line: two interpolants of the same data differ by a polynomial of degree at most $n$ with $n+1$ roots, so they are equal. Existence is then free, because the Lagrange basis writes an interpolant down. The Newton form and its recursion are uniqueness used twice: the difference of the interpolants on $x_0,\dots,x_k$ and on $x_0,\dots,x_{k-1}$ vanishes at the first $k$ nodes and has degree $k$, so it must be the leading coefficient times $(x-x_0)\cdots(x-x_{k-1})$ -- which telescopes into the Newton form.

The error formula is Rolle's theorem counted carefully. Fix a point $x$ away from the nodes and *define* the constant that would make the formula true; then the function $f - p - (\text{that constant}) w$ has $n+2$ zeros, namely the $n+1$ nodes and $x$. Each application of Rolle costs one zero and gains one derivative, so after $n+1$ applications something of the form $f^{(n+1)} - (n+1)!\,(\text{constant})$ has a zero, and that identifies the constant.
:::

:::proof{provenance=original}
**(i) Uniqueness.** Let $p, q \in \mathcal{P}_n$ both interpolate the data. Then $p-q \in \mathcal{P}_n$ vanishes at the $n+1$ distinct nodes. A non-zero real polynomial of degree at most $n$ has at most $n$ roots, so $p - q \equiv 0$. This is the only place the distinctness of the nodes is used, and it is used decisively.

**Existence.** Each $\ell_k$ lies in $\mathcal{P}_n$, being a product of $n$ linear factors, and $\ell_k(x_i) = \delta_{ik}$ because the factor $(x_i - x_i)$ appears in the numerator when $i \neq k$ while at $x_i = x_k$ numerator and denominator coincide. Hence $\sum_k f_k \ell_k$ lies in $\mathcal{P}_n$ and takes the value $f_i$ at $x_i$.

**The Newton form.** Let $p_k \in \mathcal{P}_k$ interpolate the data at $x_0,\dots,x_k$, so $p_n = p$ and $p_0 \equiv f_0$. The difference $d_k = p_k - p_{k-1}$ lies in $\mathcal{P}_k$ and vanishes at $x_0, \dots, x_{k-1}$, because both interpolants agree with the data there. So $d_k$ has the $k$ roots $x_0,\dots,x_{k-1}$ and degree at most $k$, which forces
$$
d_k(x) = c_k \prod_{j=0}^{k-1}(x-x_j)
$$
for a constant $c_k$; comparing coefficients of $x^{k}$, $c_k$ is the leading coefficient of $p_k$, which is by definition $f[x_0,\dots,x_k]$. Summing $p = p_0 + \sum_{k=1}^{n} d_k$ gives the Newton form.

**(ii) The recursion.** Let $u \in \mathcal{P}_{k-1}$ interpolate at $x_i,\dots,x_{i+k-1}$ and $v \in \mathcal{P}_{k-1}$ interpolate at $x_{i+1},\dots,x_{i+k}$. Define
$$
q(x) = \frac{(x - x_i)\,v(x) - (x-x_{i+k})\,u(x)}{x_{i+k}-x_i} .
$$
Then $q \in \mathcal{P}_k$. At $x = x_i$ the first term vanishes and $q(x_i) = u(x_i) = f_i$; at $x = x_{i+k}$ the second vanishes and $q(x_{i+k}) = v(x_{i+k}) = f_{i+k}$; at an interior node $x_m$ with $i<m<i+k$ both $u$ and $v$ equal $f_m$, so $q(x_m) = f_m \bigl((x_m-x_i)-(x_m-x_{i+k})\bigr)/(x_{i+k}-x_i) = f_m$. So $q$ interpolates at all $k+1$ nodes, and by uniqueness it is *the* interpolant. Reading off the coefficient of $x^{k}$ on both sides gives the stated recursion, the left side being $f[x_i,\dots,x_{i+k}]$ and the right $\bigl(f[x_{i+1},\dots,x_{i+k}] - f[x_i,\dots,x_{i+k-1}]\bigr)/(x_{i+k}-x_i)$.

**(iii) The error.** If $x$ is one of the nodes both sides vanish, so let $x$ be none of them; then $w(x) \neq 0$. Put

$$
K = \frac{f(x)-p(x)}{w(x)}, \qquad g(t) = f(t) - p(t) - K\,w(t) .
$$

1. $g$ is $n+1$ times continuously differentiable on $[a,b]$, since $f$ is and $p, w$ are polynomials.
2. $g$ vanishes at the $n+2$ distinct points $x_0,\dots,x_n$ (where $f = p$ and $w = 0$) and $x$ (by the choice of $K$).
3. Rolle's theorem applied to each of the $n+1$ intervals between consecutive zeros gives $n+1$ distinct zeros of $g'$, strictly inside the interval $I_x$ spanned by $x, x_0,\dots,x_n$. (This is the engine that also produces the Lagrange remainder in :ref[Taylor's theorem]{to=found.taylor-theorem}, and the two results coincide in the limit: running all the nodes together at one point $x_0$ turns $p$ into the Taylor polynomial of order $n$ and $w$ into $(x-x_0)^{n+1}$, and the formula below into the Lagrange remainder.) Repeating, $g''$ has $n$ zeros there, and after $n+1$ applications $g^{(n+1)}$ has at least one zero $\xi_x$ in the interior of $I_x$.
4. Differentiate $g$ exactly $n+1$ times: $p^{(n+1)} \equiv 0$ because $\deg p \le n$, and $w^{(n+1)} \equiv (n+1)!$ because $w$ is monic of degree $n+1$. So $g^{(n+1)}(t) = f^{(n+1)}(t) - K(n+1)!$, and $g^{(n+1)}(\xi_x) = 0$ gives $K = f^{(n+1)}(\xi_x)/(n+1)!$.

Substituting $K$ back into its definition gives the formula. The bound follows by taking absolute values and maximising the two factors separately. $\square$
:::

:::remark[Where the hypotheses are used, and Runge's phenomenon]{provenance=adapted src="kreyszig-1978:§6.6, the remark that a single interpolating polynomial is good near the nodes but may depart badly away from them, pp. 357-358"}
- **Distinct nodes.** Used in uniqueness and in the Lagrange denominators. If two nodes merge, the interpolation conditions become inconsistent (different values) or redundant (equal values); the right generalisation is Hermite interpolation, which prescribes derivatives at repeated nodes, and the spline construction below uses the two-node case of it.
- **$f \in C^{n+1}$.** Used in steps 1 and 4 of part (iii). Without it the formula says nothing: $|x|$ on $[-1,1]$ is continuous and interpolated by polynomials of every degree, and the equispaced interpolants diverge.
- **The formula is an identity, not an estimate**, but it is *not* a convergence theorem. As $n$ grows, $(n+1)!$ in the denominator races against two growing quantities: $\max|f^{(n+1)}|$ and $\max|w|$. Nothing forces the race to be won. Indeed it is lost in the standard example, due to Runge. Take
$$
f(x) = \frac{1}{1+x^{2}} \quad\text{on } [-5,5] ,
$$
a function that is smooth on the real line, and interpolate it at $n+1$ equally spaced nodes. Computing the maximum of $|f-p_n|$ on a grid of $20001$ points gives $1.9157$ at $n=10$ and $59.822$ at $n=20$: not convergence but divergence, and all of it within one spacing of the endpoints, while near the middle the interpolant is excellent. :cite[Kreyszig]{work=kreyszig-1978 loc="§6.6, pp. 357-358"} records exactly this behaviour -- good near the nodes, badly off away from them -- as the reason to prefer piecewise polynomials.
- **It is the node polynomial that can be controlled, not $f^{(n+1)}$.** For the same $n = 20$ on $[-5,5]$, $\max|w|$ is $1.1142\times10^{11}$ with equally spaced nodes. Choosing instead the Chebyshev nodes, the zeros of $T_{21}$ rescaled to the interval,
$$
x_i = 5\cos\frac{(2i+1)\pi}{2(n+1)}, \qquad i = 0,\dots,n,
$$
makes $w$ the monic polynomial of degree $21$ of smallest maximum modulus on $[-5,5]$, with $\max|w| = 2(10/4)^{21} = 4.5475\times10^{8}$ (:ref[the minimax property]{to=spec.chebyshev-polynomials}): smaller by a factor of $245$. The computed interpolation errors fall accordingly, to $0.10915$ at $n=10$ and $0.015334$ at $n=20$ -- now decreasing with $n$. The nodes crowd towards the endpoints, which is precisely where the equispaced interpolant misbehaved.
:::

:::statement[Cubic spline interpolation]{provenance=adapted src="kreyszig-1978:§6.6, the definition of Y(P_n), Theorem 6.6-1 and the minimum property (6), pp. 357-360"}
Let $P : a = t_0 < t_1 < \cdots < t_n = b$ be a partition, with $h_j = t_{j+1}-t_j$. A **cubic spline** on $P$ is a function $y \in C^{2}[a,b]$ whose restriction to each $[t_j, t_{j+1}]$ is a polynomial of degree at most $3$; write $S_3(P)$ for the set of them, a vector space.

**(i) Existence and uniqueness** (:cite[Kreyszig, Theorem 6.6-1]{work=kreyszig-1978 loc="§6.6, Thm 6.6-1, pp. 358-359"}). Given values $f_0,\dots,f_n$ and two numbers $\kappa_a, \kappa_b$, there is exactly one $y \in S_3(P)$ satisfying the $n+3$ conditions

$$
y(t_j) = f_j \ \ (j = 0,\dots,n), \qquad y'(a) = \kappa_a, \qquad y'(b) = \kappa_b .
$$

It is found by solving for the nodal slopes $k_j = y'(t_j)$, $j = 1,\dots,n-1$, the tridiagonal system

$$
h_j\, k_{j-1} \;+\; 2\,(h_{j-1}+h_j)\, k_j \;+\; h_{j-1}\, k_{j+1}
\;=\; 3\left( \frac{h_j}{h_{j-1}}\,\Delta_j + \frac{h_{j-1}}{h_j}\,\Delta_{j+1}\right),
\qquad \Delta_j = f_j - f_{j-1},
$$

with $k_0 = \kappa_a$ and $k_n = \kappa_b$ known, after which $y$ on $[t_j,t_{j+1}]$ is the unique cubic with the values $f_j, f_{j+1}$ and slopes $k_j, k_{j+1}$ at the two ends.

**(ii) Minimum curvature** (:cite[Kreyszig, Eq. (6)]{work=kreyszig-1978 loc="§6.6, pp. 359-360"}). If $f \in C^{2}[a,b]$ and $y$ is the spline of part (i) built from $f_j = f(t_j)$, $\kappa_a = f'(a)$, $\kappa_b = f'(b)$, then

$$
\int_a^b \bigl(y''(t)\bigr)^{2}\,dt \ \le \ \int_a^b \bigl(f''(t)\bigr)^{2}\,dt ,
$$

with equality if and only if $f = y$. Among all twice-differentiable functions through the data with those end slopes, the spline is the one of least total squared curvature -- which is why a draughtsman's flexible rod, minimising its bending energy, takes a spline's shape, and why the object is named after the rod.
:::

:::idea{provenance=original}
A cubic on one subinterval is determined by the values and the slopes at its two ends, so prescribing *one slope per node* already forces the pieces to agree in value and in slope at every node. The second derivative is the only thing left to arrange, and it gives one equation per interior node -- exactly as many equations as there are unknown slopes. That the resulting matrix is invertible is the one analytic fact needed, and it comes free: the diagonal entry $2(h_{j-1}+h_j)$ beats the sum $h_j + h_{j-1}$ of its neighbours by a factor of two, and a strictly diagonally dominant matrix is non-singular.

The minimum property is an integration by parts. The spline's third derivative is constant on each subinterval, so integrating $y'''$ against $f'-y'$ piece by piece produces only the differences of $f-y$ at the nodes, and those are zero because $y$ interpolates $f$. Hence $y''$ is orthogonal in $L^{2}$ to $f''-y''$, and Pythagoras does the rest.
:::

:::proof{provenance=adapted src="kreyszig-1978:§6.6, the proof of Theorem 6.6-1 through the Hermite cubic and the continuity of the second derivative, and the integration by parts giving (6), pp. 358-360"}
**(i)** Work on one subinterval first. Fix $j$, write $h = h_j$ and $s = (t-t_j)/h \in [0,1]$.

1. *The Hermite cubic is unique.* A cubic $p$ with prescribed $p(t_j), p(t_{j+1}), p'(t_j), p'(t_{j+1})$ is unique: the difference of two such cubics has double zeros at $t_j$ and at $t_{j+1}$, so it is divisible by $(t-t_j)^2(t-t_{j+1})^2$, a polynomial of degree $4$; a cubic divisible by a quartic is zero.
2. *And it exists,* given explicitly by
$$
p(t) = f_j H_{00}(s) + f_{j+1}H_{01}(s) + h\,k_j\,H_{10}(s) + h\,k_{j+1}H_{11}(s),
$$
$$
H_{00} = 2s^{3}-3s^{2}+1, \quad H_{01} = -2s^{3}+3s^{2}, \quad H_{10} = s^{3}-2s^{2}+s, \quad H_{11} = s^{3}-s^{2} .
$$
Checking the four conditions is direct: at $s=0$ the values are $H_{00}=1$ and $H_{01}=H_{10}=H_{11}=0$; at $s=1$, $H_{01}=1$ and the others vanish; and $dp/dt = (dp/ds)/h$ with $H_{00}'(0)=H_{01}'(0)=H_{11}'(0)=0$, $H_{10}'(0)=1$, and $H_{00}'(1)=H_{01}'(1)=H_{10}'(1)=0$, $H_{11}'(1)=1$.
3. *Two derivatives of the pieces.* Differentiating twice in $t$,
$$
p''(t) = \frac{1}{h^{2}}\Bigl( f_j(12s-6) + f_{j+1}(6-12s) + h k_j (6s-4) + h k_{j+1}(6s-2)\Bigr),
$$
so at the two ends
$$
p''(t_j) = \frac{6(f_{j+1}-f_j)}{h^{2}} - \frac{4k_j + 2k_{j+1}}{h},
\qquad
p''(t_{j+1}) = -\frac{6(f_{j+1}-f_j)}{h^{2}} + \frac{2k_j + 4k_{j+1}}{h} .
$$
4. *Assemble.* Define $y$ on $[t_j,t_{j+1}]$ by step 2, for every $j$, using one slope $k_j$ per node. By construction the pieces agree in value and in first derivative at every interior node, so $y \in C^{1}[a,b]$ whatever the $k_j$. Membership of $C^{2}$ is the condition that the two expressions of step 3 agree at each interior node $t_j$, $1 \le j \le n-1$: the right-hand end of the piece on $[t_{j-1},t_j]$ against the left-hand end of the piece on $[t_j,t_{j+1}]$,
$$
-\frac{6\Delta_j}{h_{j-1}^{2}} + \frac{2k_{j-1}+4k_j}{h_{j-1}}
= \frac{6\Delta_{j+1}}{h_j^{2}} - \frac{4k_j + 2k_{j+1}}{h_j} ,
$$
with $\Delta_j = f_j - f_{j-1}$. Multiplying by $\tfrac12 h_{j-1}h_j$ and collecting the $k$'s on the left gives exactly the stated tridiagonal system.
5. *The system is uniquely solvable.* It has $n-1$ equations in the $n-1$ unknowns $k_1,\dots,k_{n-1}$, with $k_0$ and $k_n$ known and moved to the right-hand side. In row $j$ the diagonal entry is $2(h_{j-1}+h_j)$ and the off-diagonal entries are $h_j$ and $h_{j-1}$, all positive, so
$$
|{\rm diagonal}| = 2(h_{j-1}+h_j) > h_{j-1} + h_j = \sum_{\text{off-diagonal}} |{\cdot}| :
$$
the matrix $A$ is strictly diagonally dominant. Such a matrix is non-singular: if $Az = 0$ with $z \neq 0$, pick an index $i$ with $|z_i|$ maximal, so $|z_i| > 0$; then
$$
|a_{ii}||z_i| = \Bigl| \sum_{m \neq i} a_{im}z_m \Bigr| \le \Bigl(\sum_{m\neq i}|a_{im}|\Bigr)|z_i| < |a_{ii}||z_i| ,
$$
a contradiction. (:cite[Kreyszig]{work=kreyszig-1978 loc="§6.6, p. 359"} draws the same conclusion from his Theorem 5.2-1 on iterative solution under a row-sum condition; the argument above is the direct one.) So the slopes exist and are unique, and with them so is $y$ by step 1. That proves (i).

**(ii)** Let $f \in C^{2}[a,b]$ and let $y$ be the spline built from its values and end slopes, so that $f - y$ vanishes at every node and $f'-y'$ vanishes at $a$ and $b$.

1. *Integrate by parts.* Since $y'' $ is continuous and $y'''$ exists and is continuous on the interior of each subinterval,
$$
\int_a^b y''\,(f''-y'')\,dt = \Bigl[\,y''(f'-y')\,\Bigr]_a^b - \int_a^b y'''\,(f'-y')\,dt .
$$
The boundary term vanishes because $f'-y'$ is zero at both ends; this is the step that uses the prescribed end slopes.
2. *The remaining integral vanishes.* On $[t_j,t_{j+1}]$ the function $y$ is a cubic, so $y''' = c_j$ is constant there, and
$$
\int_{t_j}^{t_{j+1}} y'''(f'-y')\,dt = c_j\Bigl[(f-y)(t_{j+1}) - (f-y)(t_j)\Bigr] = 0
$$
because $y$ interpolates $f$ at the nodes. Summing over $j$ gives $\int_a^b y'''(f'-y') \, dt = 0$, hence $\int_a^b y''(f''-y'')\,dt = 0$.
3. *Pythagoras.* Expand
$$
\int_a^b (f''-y'')^{2} = \int_a^b (f'')^{2} - 2\int_a^b f''y'' + \int_a^b (y'')^{2}
= \int_a^b (f'')^{2} - \int_a^b (y'')^{2} ,
$$
where the last step used $\int y''(f''-y'') = 0$ twice over, in the form $\int f''y'' = \int (y'')^2$. The left side is non-negative, which is the inequality.
4. *Equality.* Equality forces $\int_a^b (f''-y'')^{2} = 0$, and since $f''-y''$ is continuous, $f'' \equiv y''$. Then $f-y$ is affine; it vanishes at $t_0$ and $t_1$, two distinct points, so $f \equiv y$. $\square$
:::

:::remark[Why exactly two extra conditions, and which to choose]{provenance=original}
The count in Theorem (i) -- $n+1$ interpolation conditions plus $2$ end conditions -- is not a coincidence but the dimension of $S_3(P)$:

$$
\dim S_3(P) = n+3 .
$$

To see it, build a spline left to right. Its restriction to $[t_0,t_1]$ is an arbitrary cubic: $4$ parameters. On each later subinterval the cubic must match the value, the slope and the second derivative inherited at the left endpoint, which fixes three of its four coefficients and leaves one free (equivalently, the constant $y'''$ on that piece). That is $1$ parameter for each of the remaining $n-1$ subintervals, so $4 + (n-1) = n+3$ in all. Interpolation at the $n+1$ nodes is $n+1$ independent linear conditions, so exactly two degrees of freedom remain and exactly two end conditions are needed.

Which two is a modelling choice, and the theorem above covers one of them. **Clamped** (or complete) splines prescribe $y'(a)$ and $y'(b)$, as Kreyszig does; use them when the end slopes are known, as they are when the data come from a function you can differentiate. **Natural** splines instead set $y''(a) = y''(b) = 0$; they need no extra information and are the ones that minimise the bending integral over *all* interpolants rather than over those with given end slopes, but they lose accuracy near the ends, since a smooth $f$ rarely has vanishing curvature there. **Periodic** splines match $y'$ and $y''$ at the two ends and are the right choice for data on a circle. Each choice replaces the first and last rows of the same tridiagonal system.
:::

:::method[Interpolating in practice]{provenance=original}
1. **Decide how many nodes the interpolant will use at once.** Few (two to six) and local: use a polynomial. Many: use a spline, or a global polynomial only if you are free to place the nodes.
2. **If you may choose the nodes, choose Chebyshev nodes**, $x_i = \tfrac{a+b}{2} + \tfrac{b-a}{2}\cos\frac{(2i+1)\pi}{2(n+1)}$, which minimise $\max|w|$ and so the error bound. If the nodes are given and equally spaced, do not raise the degree: interpolate locally on a short window of nodes and move the window.
3. **Build the Newton form, not the Lagrange form**, when you will evaluate at many points. Form the divided-difference table by the recursion, column by column; there are $n(n+1)/2$ entries beyond the data, each costing two subtractions and a division, so about $\tfrac32 n^{2}$ operations once. Evaluate by nesting,
$$
p(x) = f[x_0] + (x-x_0)\Bigl( f[x_0,x_1] + (x-x_1)\bigl(f[x_0,x_1,x_2] + \cdots\bigr)\Bigr),
$$
which costs $n$ multiplications, $n$ subtractions and $n$ additions: $3n$ operations per point, against about $2n^{2}$ for the Lagrange form evaluated as written. Adding one more node costs one more column, $O(n)$ work, with nothing rebuilt.
4. **For a spline, assemble and solve the tridiagonal system.** Never call a general linear solver: eliminating one subdiagonal entry costs a division and two multiply-subtracts, and back substitution three operations per row, so the whole solve is about $8n$ operations, against the roughly $n^{3}/3$ that :cite[Kreyszig]{work=kreyszig-1978 loc="§5.2, p. 307"} quotes for the usual direct methods on a dense system (:ref[]{to=num.linear-systems-numerics}). Then store the four Hermite coefficients per subinterval and evaluate by locating the subinterval with a binary search, $O(\log n)$, followed by three multiply-adds.
5. **Check the result against the error formula** rather than against your expectations: compute $\max|w|$ on the interval of interest, bound $|f^{(n+1)}|$ if you can, and compare with the observed difference at a point that is not a node. If the two disagree by orders of magnitude, a node is wrong or the data are not samples of a smooth function.
6. **Never interpolate noisy data.** The interpolant reproduces the noise exactly and its derivatives amplify it. Fit instead, by least squares (:ref[]{to=linalg.projections-least-squares}) or with a smoothing spline.
:::

:::example[Quadratic interpolation and a cubic spline, on the same three points]{provenance=original}
Take $f(x) = \ln x$ at the three nodes $x_0 = 1$, $x_1 = 2$, $x_2 = 4$, so

$$
f_0 = 0, \qquad f_1 = \ln 2 = 0.6931471806, \qquad f_2 = \ln 4 = 1.3862943611 ,
$$

and estimate $\ln 3$. The exact value is $1.0986122887$.

**The quadratic interpolant, Newton form.** The divided-difference table:

$$
f[x_0,x_1] = \frac{0.6931471806-0}{2-1} = 0.6931471806, \qquad
f[x_1,x_2] = \frac{1.3862943611-0.6931471806}{4-2} = 0.3465735903,
$$
$$
f[x_0,x_1,x_2] = \frac{0.3465735903-0.6931471806}{4-1} = -0.1155245301 .
$$

Hence $p(x) = 0.6931471806\,(x-1) - 0.1155245301\,(x-1)(x-2)$ and

$$
p(3) = 0.6931471806 \times 2 - 0.1155245301 \times 2 \times 1 = 1.3862943611 - 0.2310490602 = 1.1552453009 .
$$

As a check, the Lagrange form at $x=3$ uses $\ell_0(3) = \frac{(3-2)(3-4)}{(1-2)(1-4)} = -\tfrac13$, $\ell_1(3) = \frac{(3-1)(3-4)}{(2-1)(2-4)} = 1$, $\ell_2(3) = \frac{(3-1)(3-2)}{(4-1)(4-2)} = \tfrac13$, giving $0 \cdot(-\tfrac13) + 0.6931471806 + \tfrac13 (1.3862943611) = 1.1552453009$: the same number, as uniqueness requires.

**The error, and the point $\xi$ it names.** The actual error is

$$
f(3)-p(3) = 1.0986122887 - 1.1552453009 = -0.0566330122 .
$$

The formula predicts $f(3)-p(3) = \tfrac{1}{3!}f'''(\xi)\,w(3)$ with $f'''(x) = 2/x^{3}$ and $w(3) = (3-1)(3-2)(3-4) = -2$, that is $-2/(3\xi^{3})$. Solving $-2/(3\xi^{3}) = -0.0566330122$ gives $\xi^{3} = 11.7716971$ and

$$
\xi = 2.2748164 ,
$$

which does lie in $(1,4)$, as the theorem says it must. The crude bound, with $\max_{[1,4]}|f'''| = 2$ attained at $x=1$, is $|{\rm error}| \le \tfrac{2}{6}\times 2 = 0.667$: true but twelve times too pessimistic, which is typical, since the bound maximises the two factors at different points.

**The clamped cubic spline on the same data.** Take $n = 2$ with $t_0=1, t_1=2, t_2=4$, so $h_0 = 1$, $h_1 = 2$, and clamp with the true end slopes $\kappa_a = f'(1) = 1$ and $\kappa_b = f'(4) = 0.25$. Here $\Delta_1 = f_1-f_0 = 0.6931471806$ and $\Delta_2 = f_2-f_1 = 0.6931471806$. There is one interior node, so the tridiagonal system is a single equation ($j = 1$):

$$
h_1 k_0 + 2(h_0+h_1)k_1 + h_0 k_2 = 3\left(\frac{h_1}{h_0}\Delta_1 + \frac{h_0}{h_1}\Delta_2\right),
$$
$$
2(1) + 6k_1 + 1(0.25) = 3\bigl(2 \times 0.6931471806 + \tfrac12 \times 0.6931471806\bigr) = 3 \times 1.7328679514 = 5.1986038543 ,
$$

so $6k_1 = 2.9486038543$ and

$$
k_1 = 0.4914339757 ,
$$

against the true $f'(2) = 0.5$: the spline recovers the slope at the interior node to $1.7\%$ without being told it.

Now evaluate on $[t_1,t_2] = [2,4]$, where $h = 2$ and $x = 3$ means $s = \tfrac12$. The Hermite values at $s = \tfrac12$ are $H_{00} = H_{01} = \tfrac12$, $H_{10} = \tfrac18$, $H_{11} = -\tfrac18$, so

$$
y(3) = \tfrac12(0.6931471806) + \tfrac12(1.3862943611) + 2(0.4914339757)\tfrac18 + 2(0.25)\bigl(-\tfrac18\bigr)
$$
$$
= 0.3465735903 + 0.6931471806 + 0.1228584939 - 0.0625 = 1.1000792648 .
$$

The spline's error is $1.0986122887 - 1.1000792648 = -0.0014669761$, smaller than the quadratic's by a factor of $38.6$ -- on the same three data points, with no new information except the two end slopes. As a check on the construction, the second derivative from the left-hand piece at $t_1 = 2$ is
$$
-\frac{6\Delta_1}{h_0^{2}} + \frac{2k_0+4k_1}{h_0} = -4.1588830834 + (2 + 1.9657359028) = -0.1931471806 ,
$$
and from the right-hand piece
$$
\frac{6\Delta_2}{h_1^{2}} - \frac{4k_1+2k_2}{h_1} = 1.0397207708 - \frac{1.9657359028 + 0.5}{2} = -0.1931471806 :
$$
equal, as $C^{2}$ demands.
:::

:::application[How big does a table have to be?]{provenance=original}
Before every physical calculation that uses a tabulated quantity -- an opacity, an equation of state, a collision cross-section, a radiative transfer coefficient, the output of an expensive simulation sampled on a grid -- someone must decide how finely to tabulate. The error formula answers that question in one line, and the answer decides the size of the file.

Suppose a function is to be tabulated at spacing $h$ and read back by **linear** interpolation between the two neighbouring entries. That is the case $n = 1$ of the error formula: on $[x_0, x_0+h]$ the node polynomial $w(x) = (x-x_0)(x-x_0-h)$ has maximum modulus $h^{2}/4$ at the midpoint, so

$$
|f - p| \ \le \ \frac{\max|f''|}{2}\cdot\frac{h^{2}}{4} = \frac{h^{2}}{8}\max|f''| .
$$

For $f = \sin$ on $[0,\pi]$, where $\max|f''| = 1$, an accuracy of $10^{-6}$ needs $h \le \sqrt{8 \times 10^{-6}} = 2.828\times10^{-3}$, that is $\lceil \pi/h \rceil = 1111$ intervals and $1112$ stored values. Evaluating the interpolant on a fine grid near $x = \pi/2$ with $h = \pi/1111$ gives a largest error of $9.995\times10^{-7}$ -- the bound is attained to four digits here, because $f''$ is nearly constant across one interval.

Now read the same table back with a **cubic** through the four nearest entries, evaluating only in the central interval. Then $n = 3$, and on that central interval $w(x) = (x-x_0)(x-x_1)(x-x_2)(x-x_3)$ has maximum modulus at the midpoint, where the four factors are $\tfrac32 h, \tfrac12 h, -\tfrac12 h, -\tfrac32 h$, giving $\max|w| = \tfrac{9}{16}h^{4}$. Hence

$$
|f-p| \ \le \ \frac{\max|f^{(4)}|}{4!}\cdot \frac{9h^{4}}{16} = \frac{3h^{4}}{128}\max|f^{(4)}| ,
$$

and for $\sin$ the same $10^{-6}$ now needs only $h \le (128\times10^{-6}/3)^{1/4} = 8.082\times10^{-2}$: $39$ intervals and $40$ stored values, with one extra entry beyond each end to supply the four-point stencil for the outermost intervals. Direct computation with $h = 0.0808$ around $x = \pi/2$ gives a largest error of $9.984\times10^{-7}$, against the predicted bound $9.990\times10^{-7}$. **The table shrinks by a factor of $28$**, at the cost of four multiply-adds instead of one per lookup -- which is why almost every production table is read with a cubic rule, and why a smooth spline is used when the reader also needs derivatives, as it does when the table feeds a Newton iteration (:ref[]{to=num.root-finding}) or a differential-equation solver (:ref[]{to=num.ode-integrators}).

The same error formula is the common ancestor of the rest of this part. Integrating the interpolant over the nodes gives the quadrature rules and their error terms (:ref[]{to=num.quadrature}); differentiating it gives the finite-difference formulas and their truncation errors (:ref[]{to=num.finite-differences}); and interpolating by piecewise polynomials on a mesh, exactly as the spline does, gives the shape functions of the finite element method (:ref[]{to=num.finite-elements}).
:::
