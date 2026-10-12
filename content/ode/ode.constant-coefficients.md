---
id: ode.constant-coefficients
title: Constant-coefficient equations
kind: method
level: core
summary: 'One identity, $L(e^{\lambda x}q) = e^{\lambda x}\sum_j p^{(j)}(\lambda)q^{(j)}/j!$, delivers the whole method -- a fundamental set $x^{r}e^{\lambda_j x}$ read off the roots of the characteristic polynomial, the real form for a complex pair, and a polynomial-times-exponential particular solution whose degree rises by the multiplicity of the forcing exponent, which is resonance.'
prereqs: [ode.linear-ode-theory]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "Ch. 2, §7, Eq. (7.1), Thm 11 and Thm 12, pp. 71-73; §4-§5 (independence and the Wronskian for $n=2$), pp. 60-61; §6, Ex. 2, p. 70 (particular solution for $L(y) = Ae^{\\alpha x}$ in the resonant and non-resonant cases)"
    pages: "60-61, 70-73"
    role: the identity $L(e^{rx}) = p(r)e^{rx}$ and the differentiation-in-$r$ route to the solutions $x^{k}e^{rx}$; statement that these $n$ functions form a basis; the proof that polynomial-times-exponential combinations cannot vanish identically
  - work: hassani-2013
    loc: "§14.7, Eqs. (14.37)-(14.39) and Thm 14.7.1, pp. 446-447; Thm 14.7.3 and Example 14.7.4, pp. 448-449"
    pages: "446-449"
    role: the basis theorem in terms of the factorised characteristic polynomial; the statement of the undetermined-coefficients theorem for forcing $e^{\lambda x}S(x)$, including the degree increase by the multiplicity
  - work: rhb-2006
    loc: "§15.1.1, Eqs. (15.8)-(15.14) (auxiliary equation; real, complex and repeated roots), pp. 492-493; §15.1.2 (standard trial functions and the rule for multiplying by a power of $x$), pp. 494-495"
    pages: "492-495"
    role: the term auxiliary equation; the real combination $Ae^{\alpha x}\sin(\beta x + \phi)$ for a complex pair; the practical trial-function table and the instruction to multiply by the smallest power of $x$ that removes overlap with the complementary function
  - work: arfken-2013
    loc: "§7.3, Eq. (7.18) and the surrounding discussion, pp. 342-343"
    pages: "342-343"
    role: the general constant-coefficient equation of arbitrary order, the algebraic equation for $m$, and the conversion of a complex-exponential pair into real trigonometric form
---

:::definition[The characteristic polynomial]{provenance=adapted src="coddington-1989:Ch. 2, §7, p. 71; hassani-2013:§14.7, Eqs. (14.37)-(14.39), p. 446; rhb-2006:§15.1, Eqs. (15.8)-(15.10), p. 492"}
Let $a_1, \dots, a_n$ be constants (real or complex) and

$$
L(y) \;=\; y^{(n)} + a_1 y^{(n-1)} + a_2 y^{(n-2)} + \cdots + a_n y .
$$

Its **characteristic polynomial** is

$$
p(\lambda) \;=\; \lambda^{n} + a_1\lambda^{n-1} + a_2\lambda^{n-2} + \cdots + a_n ,
$$

so that $L$ is obtained from $p$ by replacing $\lambda^{k}$ with $d^{k}/dx^{k}$. The equation $p(\lambda) = 0$ is called the characteristic equation, or (in much of the physics literature) the **auxiliary equation**. By the fundamental theorem of algebra it factorises as

$$
p(\lambda) \;=\; (\lambda - \lambda_1)^{k_1}(\lambda - \lambda_2)^{k_2}\cdots(\lambda - \lambda_m)^{k_m} ,
\qquad k_1 + k_2 + \cdots + k_m = n ,
$$

with $\lambda_1, \dots, \lambda_m$ the distinct roots and $k_j$ the **multiplicity** of $\lambda_j$. Since the coefficients are constants they are continuous on every interval, so the whole of :ref[]{to=ode.linear-ode-theory} applies on $I = \mathbb{R}$: the solution space of $L(y) = 0$ has dimension $n$ there.
:::

:::statement[The exponential-shift identity]{provenance=adapted src="coddington-1989:Ch. 2, §7, Eq. (7.1) and the computation of $\\partial^k L(e^{rx})/\\partial r^k$, pp. 71-72"}
For every $\lambda \in \mathbb{C}$ and every function $q$ with $n$ derivatives,

$$
L\bigl(e^{\lambda x}q(x)\bigr) \;=\; e^{\lambda x}\sum_{j=0}^{n}\frac{p^{(j)}(\lambda)}{j!}\,q^{(j)}(x) .
\tag{$\ast$}
$$

In particular $L(e^{\lambda x}) = p(\lambda)e^{\lambda x}$, and for an integer $k \ge 0$

$$
L\bigl(x^{k}e^{\lambda x}\bigr) \;=\; e^{\lambda x}\sum_{j=0}^{k}\binom{k}{j}\,p^{(j)}(\lambda)\,x^{k-j} .
$$
:::

:::statement[A fundamental set from the roots]{provenance=adapted src="coddington-1989:Ch. 2, §7, Thms 11 and 12, pp. 71-73; hassani-2013:§14.7, Thm 14.7.1, p. 447"}
Let $\lambda_1, \dots, \lambda_m$ be the distinct roots of $p$, with multiplicities $k_1, \dots, k_m$. Then the $n$ functions

$$
x^{r}e^{\lambda_j x}, \qquad r = 0, 1, \dots, k_j - 1, \quad j = 1, \dots, m ,
$$

are solutions of $L(y) = 0$, they are linearly independent on every interval $I$, and they are therefore a fundamental set: every solution of $L(y) = 0$ is

$$
y(x) \;=\; \sum_{j=1}^{m}\bigl(c_{j,0} + c_{j,1}x + \cdots + c_{j,k_j-1}x^{k_j-1}\bigr)e^{\lambda_j x}
$$

with uniquely determined constants $c_{j,r}$.
:::

:::statement[Undetermined coefficients for polynomial-times-exponential forcing]{provenance=adapted src="hassani-2013:§14.7, Thm 14.7.3, p. 448"}
Let $S$ be a polynomial of degree $d$. Then $L(y) = e^{\lambda x}S(x)$ always has a particular solution $y_p = e^{\lambda x}q(x)$ with $q$ again a polynomial, and the degree of $q$ is

$$
\deg q \;=\;
\begin{cases}
d , & p(\lambda) \ne 0 , \\[2pt]
d + k_j , & \lambda = \lambda_j \text{ a root of } p \text{ of multiplicity } k_j .
\end{cases}
$$

So resonance costs exactly the multiplicity in extra powers of $x$. Two riders, both visible in the proof: for $p(\lambda) \ne 0$ the polynomial $q$ is unique, while in the resonant case the $k_j$ lowest coefficients of $q$ are left free by the equation and may be set to zero, since $x^{r}e^{\lambda_j x}$ with $r < k_j$ is already part of the complementary function.
:::

:::idea{provenance=original}
Differentiating $e^{\lambda x}$ reproduces it, so $L$ acting on $e^{\lambda x}$ can only multiply it by a number, and that number is $p(\lambda)$. Everything else follows from watching how this degenerates. Reading $L(e^{\lambda x}) = p(\lambda)e^{\lambda x}$ as an identity in $\lambda$ and differentiating it $k$ times in $\lambda$ — legitimate because $L$ differentiates in $x$, and the two derivatives commute — produces $x^{k}e^{\lambda x}$ on the left and the derivatives $p^{(j)}(\lambda)$ on the right. A root of multiplicity $k$ is exactly a $\lambda$ at which $p$ and its first $k-1$ derivatives vanish, so the right-hand side vanishes for $x^{0}e^{\lambda x}, \dots, x^{k-1}e^{\lambda x}$: the multiplicity of the root is the number of extra powers of $x$ it supplies. Collecting the identities for all $k$ gives one formula, $(\ast)$, which says that $L$ acts on $e^{\lambda x}\times\{\text{polynomials}\}$ as the constant-coefficient operator $\sum_j p^{(j)}(\lambda)D^{j}/j!$ on the polynomial alone. That operator is triangular in the degree, with $p(\lambda)$ on the diagonal; it is invertible when $p(\lambda) \ne 0$, and when $\lambda$ is a root of multiplicity $k$ it kills polynomials of degree $< k$ and is "$k$ integrations" on the rest. Hence the degree of the answer goes up by exactly $k$. That degree increase is resonance.
:::

:::proof[The exponential-shift identity]{provenance=adapted src="coddington-1989:Ch. 2, §7, pp. 71-72"}
**Step 1 (the bare exponential).** $\frac{d^{k}}{dx^{k}}e^{\lambda x} = \lambda^{k}e^{\lambda x}$, so

$$
L(e^{\lambda x}) = \bigl(\lambda^{n} + a_1\lambda^{n-1} + \cdots + a_n\bigr)e^{\lambda x} = p(\lambda)e^{\lambda x} .
$$

**Step 2 (differentiate in $\lambda$).** Both sides are entire in $\lambda$ and polynomial in $x$ times $e^{\lambda x}$, so we may differentiate $k$ times with respect to $\lambda$ and interchange $\partial_\lambda^{k}$ with the $x$-derivatives in $L$. On the left, $\partial_\lambda^{k}e^{\lambda x} = x^{k}e^{\lambda x}$. On the right, Leibniz's rule for the product $p(\lambda)\cdot e^{\lambda x}$ gives

$$
L\bigl(x^{k}e^{\lambda x}\bigr) \;=\; \partial_\lambda^{k}\bigl(p(\lambda)e^{\lambda x}\bigr) \;=\; \sum_{j=0}^{k}\binom{k}{j}p^{(j)}(\lambda)\,x^{k-j}e^{\lambda x} ,
$$

the sum stopping at $j = k$ because $\partial_\lambda^{k-j}e^{\lambda x} = x^{k-j}e^{\lambda x}$.

**Step 3 (rewrite as an operator on $q$).** For $q(x) = x^{k}$ we have $q^{(j)}(x) = \frac{k!}{(k-j)!}x^{k-j}$ for $j \le k$ and $q^{(j)} = 0$ for $j > k$, so

$$
\frac{p^{(j)}(\lambda)}{j!}\,q^{(j)}(x) = \frac{k!}{j!\,(k-j)!}\,p^{(j)}(\lambda)\,x^{k-j} = \binom{k}{j}p^{(j)}(\lambda)\,x^{k-j} .
$$

Thus $(\ast)$ holds for every monomial, hence by linearity of both sides for every polynomial $q$. Finally, $p^{(j)} \equiv 0$ for $j > n$, so for a general $n$-times differentiable $q$ the sum in $(\ast)$ is the finite sum written, and the identity extends to it: both sides are linear in $q$ and, expanded by the Leibniz rule, the coefficient of $q^{(j)}$ on the left is $\sum_{i \ge j}\binom{i}{j}a_{n-i}\lambda^{i-j} = p^{(j)}(\lambda)/j!$, where $a_0 := 1$. $\square$
:::

:::proof[A fundamental set from the roots]{provenance=adapted src="coddington-1989:Ch. 2, §7, Thms 11 and 12, pp. 71-73"}
**Step 1 (they are solutions).** Let $\lambda_j$ have multiplicity $k_j$. Writing $p(\lambda) = (\lambda - \lambda_j)^{k_j}g(\lambda)$ and differentiating, every derivative $p^{(i)}$ with $i < k_j$ still carries a factor $(\lambda - \lambda_j)$, so

$$
p(\lambda_j) = p'(\lambda_j) = \cdots = p^{(k_j-1)}(\lambda_j) = 0 .
$$

For $0 \le r \le k_j - 1$, the identity of Step 2 of the previous proof gives $L(x^{r}e^{\lambda_j x}) = \sum_{i=0}^{r}\binom{r}{i}p^{(i)}(\lambda_j)x^{r-i}e^{\lambda_j x}$, and every index $i$ occurring satisfies $i \le r \le k_j - 1$, so every term vanishes. Hence $x^{r}e^{\lambda_j x}$ solves $L(y) = 0$.

**Step 2 (there are $n$ of them).** Summing the multiplicities, $k_1 + \cdots + k_m = \deg p = n$.

**Step 3 (independence: reduce to a statement about polynomials).** Suppose constants $c_{j,r}$ satisfy

$$
P_1(x)e^{\lambda_1 x} + P_2(x)e^{\lambda_2 x} + \cdots + P_m(x)e^{\lambda_m x} = 0
\qquad\text{on an interval } I,
$$

where $P_j(x) = \sum_{r=0}^{k_j-1}c_{j,r}x^{r}$. We must show every $P_j$ is the zero polynomial. Suppose not, and (relabelling) let $P_1 \not\equiv 0$. Multiply the identity by $e^{-\lambda_1 x}$, which never vanishes:

$$
P_1(x) + P_2(x)e^{(\lambda_2-\lambda_1)x} + \cdots + P_m(x)e^{(\lambda_m-\lambda_1)x} = 0 .
$$

**Step 4 (differentiate away one exponential at a time).** Differentiate this identity $\deg P_1 + 1$ times. The first term dies. In every other term, $\frac{d}{dx}\bigl(Q(x)e^{\mu x}\bigr) = \bigl(\mu Q + Q'\bigr)e^{\mu x}$ with $\mu = \lambda_i - \lambda_1 \ne 0$, so each differentiation replaces the polynomial $Q$ by $\mu Q + Q'$, which has the *same* degree and the same leading coefficient scaled by the nonzero $\mu$; in particular a nonzero polynomial stays nonzero. We are left with

$$
\widetilde{P}_2(x)e^{(\lambda_2-\lambda_1)x} + \cdots + \widetilde{P}_m(x)e^{(\lambda_m-\lambda_1)x} = 0
$$

with $\deg \widetilde{P}_i = \deg P_i$ and $\widetilde{P}_i \not\equiv 0$ whenever $P_i \not\equiv 0$. One exponential has been eliminated at no cost.

**Step 5 (iterate and conclude).** Repeating Steps 3 and 4 at most $m-1$ more times leaves a single term $R(x)e^{\mu x} = 0$ on $I$ with $\deg R = \deg P_{i_0}$ for some index $i_0$ with $P_{i_0} \not\equiv 0$. Since $e^{\mu x} \ne 0$, $R$ vanishes at every point of the interval $I$, which has infinitely many points, so $R \equiv 0$ — contradicting that $R$ is nonzero of the same degree. Hence all $P_j \equiv 0$, i.e. all $c_{j,r} = 0$: the $n$ functions are linearly independent on $I$.

**Step 6 (they span).** They are $n$ linearly independent solutions, so by :ref[the dimension theorem]{to=ode.linear-ode-theory} they form a basis of the $n$-dimensional solution space, and the coefficients in the expansion of a given solution are unique. $\square$
:::

:::proof[Undetermined coefficients]{provenance=original}
By $(\ast)$, for a polynomial $q$,

$$
L\bigl(e^{\lambda x}q\bigr) = e^{\lambda x}\,M_\lambda[q], \qquad
M_\lambda \;=\; \sum_{j\ge 0}\frac{p^{(j)}(\lambda)}{j!}\,D^{j} , \quad D = \frac{d}{dx} .
$$

So we must solve $M_\lambda[q] = S$ for a polynomial $q$. Let $d = \deg S$.

**Step 1 (non-resonant case $p(\lambda) \ne 0$).** $M_\lambda$ maps the space $\mathcal{P}_d$ of polynomials of degree $\le d$ into itself, since $D$ lowers degree. In the basis $1, x, \dots, x^{d}$ its matrix is triangular with every diagonal entry equal to $p(\lambda)$, because the $j = 0$ term is multiplication by $p(\lambda)$ and all other terms strictly lower the degree. Its determinant is $p(\lambda)^{d+1} \neq 0$, so $M_\lambda$ is a bijection of $\mathcal{P}_d$: there is exactly one $q \in \mathcal{P}_d$ with $M_\lambda[q] = S$. Its degree is exactly $d$, since the coefficient of $x^{d}$ in $M_\lambda[q]$ is $p(\lambda)$ times that of $q$.

**Step 2 (resonant case: $\lambda$ a root of multiplicity $k$).** Then $p(\lambda) = \cdots = p^{(k-1)}(\lambda) = 0$ and $p^{(k)}(\lambda) \ne 0$, so the sum defining $M_\lambda$ starts at $j = k$:

$$
M_\lambda[q] \;=\; \sum_{j \ge k}\frac{p^{(j)}(\lambda)}{j!}\,q^{(j)} \;=\; N_\lambda\bigl[q^{(k)}\bigr],
\qquad
N_\lambda = \sum_{i\ge 0}\frac{p^{(k+i)}(\lambda)}{(k+i)!}\,D^{i} .
$$

$N_\lambda$ has the form treated in Step 1 with $p(\lambda)$ replaced by the nonzero number $p^{(k)}(\lambda)/k!$, so there is a unique polynomial $Q$ of degree $d$ with $N_\lambda[Q] = S$.

**Step 3 (undo the $k$ derivatives).** Choose any polynomial $q$ with $q^{(k)} = Q$, for instance by integrating $Q$ $k$ times with zero constants. Then $\deg q = d + k$ and $M_\lambda[q] = N_\lambda[Q] = S$, so $y_p = e^{\lambda x}q$ solves $L(y) = e^{\lambda x}S$. The $k$ constants of integration are free: they change $q$ by a polynomial of degree $< k$, that is, they change $y_p$ by a member of the complementary function $x^{r}e^{\lambda x}$, $r < k$. Choosing them zero gives $\deg q = d + k$ exactly, and no $q$ of lower degree can work, since $q^{(k)}$ must equal the degree-$d$ polynomial $Q$. $\square$
:::

:::remark[Real equations and complex roots]{provenance=adapted src="rhb-2006:§15.1.1, Eq. (15.12), p. 493; arfken-2013:§7.3, p. 343; hassani-2013:§14.7, p. 447"}
Suppose $a_1, \dots, a_n$ are real, so that $p$ has real coefficients. Then non-real roots come in conjugate pairs of equal multiplicity: if $\lambda = \alpha + i\beta$ with $\beta \ne 0$ is a root of multiplicity $k$, so is $\bar\lambda = \alpha - i\beta$. For each $r < k$ the two complex solutions $x^{r}e^{(\alpha\pm i\beta)x}$ may be replaced by the two real ones

$$
x^{r}e^{\alpha x}\cos\beta x , \qquad x^{r}e^{\alpha x}\sin\beta x ,
$$

their half-sum and half-difference-over-$i$; the replacement is invertible, so it carries a fundamental set to a fundamental set. For $r = 0$, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eq. (15.12), p. 493"} write the same pair in amplitude-phase form,

$$
c_1e^{(\alpha+i\beta)x} + c_2e^{(\alpha-i\beta)x} = e^{\alpha x}\bigl(d_1\cos\beta x + d_2\sin\beta x\bigr) = Ae^{\alpha x}\sin(\beta x + \phi) ,
$$

with $A$ and $\phi$ arbitrary constants; this is the form a physicist wants, since $A$ is the amplitude and $\phi$ the phase. A real-valued solution is obtained from real $d_1, d_2$, equivalently from $c_2 = \bar c_1$.
:::

:::method[Solving $L(y) = f$ with constant coefficients]{provenance=adapted src="rhb-2006:§15.1.1-15.1.3, pp. 492-495; hassani-2013:§14.7, pp. 446-449"}
1. **Write down $p(\lambda)$** by replacing $d^{k}y/dx^{k}$ with $\lambda^{k}$, and find its roots with their multiplicities. (For $n \le 4$ this is algebra; beyond that, numerically.)
2. **Write the complementary function.** Each root $\lambda_j$ of multiplicity $k_j$ contributes $(c_{j,0} + c_{j,1}x + \cdots + c_{j,k_j-1}x^{k_j-1})e^{\lambda_j x}$. If the equation is real and you want a real answer, convert each conjugate pair to $e^{\alpha x}(\cdots\cos\beta x + \cdots\sin\beta x)$ as in the remark.
3. **Split the forcing** $f$ into terms of the form $e^{\lambda x}S(x)$ with $S$ a polynomial, using superposition: a particular solution of $L(y) = f_1 + f_2$ is the sum of particular solutions for $f_1$ and $f_2$. A pure polynomial is the case $\lambda = 0$; $\cos\omega x$ and $\sin\omega x$ are handled either by taking real and imaginary parts of the case $\lambda = i\omega$, or by the trial pair $b_1\cos\omega x + b_2\sin\omega x$.
4. **Choose the trial form** for each piece: $y_p = e^{\lambda x}q(x)$ with $\deg q = \deg S$ if $p(\lambda) \ne 0$, and $\deg q = \deg S + k$ if $\lambda$ is a root of multiplicity $k$. In the resonant case drop the $k$ lowest powers of $x$ from $q$ (they duplicate the complementary function), i.e. take $q(x) = x^{k}\bigl(b_0 + b_1x + \cdots + b_{\deg S}x^{\deg S}\bigr)$. Equivalently, in the recipe of :cite{work=rhb-2006 loc="pp. 494-495"}: take the trial function suggested by $f$ and multiply it by the smallest power of $x$ that leaves no term already present in the complementary function.
5. **Fix the coefficients** by substituting the trial form into the equation and matching powers of $x$ in each exponential. The computation is $\sum_{j}p^{(j)}(\lambda)q^{(j)}/j! = S$, which is quickest to use directly: the derivatives $p^{(j)}(\lambda)$ are a few numbers, computed once.
6. **Add and impose the data.** The general solution is complementary function plus particular integral (:ref[]{to=ode.linear-ode-theory}); then solve the linear system that the $n$ initial or boundary conditions impose on $c_{j,r}$.
:::

:::example[A third-order equation with a resonant forcing]{provenance=original}
Solve

$$
y''' - 3y'' + 4y \;=\; e^{2x} + 12x , \qquad y(0) = y'(0) = y''(0) = 0 .
$$

1. **Characteristic polynomial.** $p(\lambda) = \lambda^{3} - 3\lambda^{2} + 4 = (\lambda - 2)^{2}(\lambda + 1)$. (Check: $(\lambda^2 - 4\lambda + 4)(\lambda + 1) = \lambda^3 - 3\lambda^2 + 4$.) Roots: $\lambda = 2$ with multiplicity $2$, and $\lambda = -1$, simple.
2. **Complementary function.** $y_c = (c_1 + c_2x)e^{2x} + c_3e^{-x}$.
3. **Derivatives of $p$**, needed in step 5 of the method: $p'(\lambda) = 3\lambda^{2} - 6\lambda$, $p''(\lambda) = 6\lambda - 6$, $p'''(\lambda) = 6$. Hence

   $$
   p(2) = 0, \quad p'(2) = 0, \quad p''(2) = 6, \quad p'''(2) = 6;
   \qquad p(0) = 4, \quad p'(0) = 0 .
   $$

4. **The resonant piece $e^{2x}$.** Here $\lambda = 2$ is a double root, $S = 1$ has degree $0$, so $q$ has degree $0 + 2 = 2$ and we may take $q = Ax^{2}$. The equation $\sum_j p^{(j)}(2)q^{(j)}/j! = 1$ reduces, because $p(2) = p'(2) = 0$, to

   $$
   \frac{p''(2)}{2!}q'' + \frac{p'''(2)}{3!}q''' \;=\; \frac{6}{2}(2A) + 0 \;=\; 6A \;=\; 1 ,
   $$

   so $A = \tfrac16$ and $y_{p,1} = \tfrac16 x^{2}e^{2x}$.
5. **The polynomial piece $12x$.** This is $\lambda = 0$, and $p(0) = 4 \ne 0$, so $q = ax + b$ has the same degree as $S = 12x$. The equation $p(0)q + p'(0)q' = 12x$ reads $4(ax + b) = 12x$, giving $a = 3$, $b = 0$ and $y_{p,2} = 3x$.
6. **General solution.**

   $$
   y(x) \;=\; (c_1 + c_2x)e^{2x} + c_3e^{-x} + \tfrac16x^{2}e^{2x} + 3x .
   $$

   Direct substitution confirms that $\tfrac16x^{2}e^{2x} + 3x$ solves the equation.
7. **Impose the data.** With $y_p = \tfrac16x^2e^{2x} + 3x$ one finds $y_p(0) = 0$, $y_p'(0) = 3$, $y_p''(0) = \tfrac13$. So the conditions become

   $$
   c_1 + c_3 = 0, \qquad 2c_1 + c_2 - c_3 = -3, \qquad 4c_1 + 4c_2 + c_3 = -\tfrac13 ,
   $$

   with solution $c_1 = -\tfrac{35}{27}$, $c_2 = \tfrac89$, $c_3 = \tfrac{35}{27}$. Hence

   $$
   y(x) \;=\; \left(-\frac{35}{27} + \frac{8}{9}x + \frac{1}{6}x^{2}\right)e^{2x} + \frac{35}{27}e^{-x} + 3x .
   $$

8. **A check.** At $x = 1$ this gives $y(1) = -\tfrac{13}{54}e^{2} + \tfrac{35}{27}e^{-1} + 3 = 1.698\,034$ to six decimal places. Differentiating the closed form three times and substituting returns $e^{2x} + 12x$ exactly, and $y, y', y''$ all vanish at $x = 0$.
9. **Where the resonance shows.** The forcing $e^{2x}$ is itself a solution of the homogeneous equation, and so is $xe^{2x}$; the response is therefore $x^{2}e^{2x}$, larger by two powers of $x$ — the multiplicity of the root. Had the forcing been $e^{3x}$, with $p(3) = 4 \neq 0$, the response would have been the plain $\tfrac14e^{3x}$.
:::

:::application{provenance=original}
**Circuits and mechanics.** The series $RLC$ circuit obeys $L\ddot q + R\dot q + q/C = V(t)$ and the mass-spring-damper obeys $m\ddot x + c\dot x + kx = F(t)$; these are the same equation, so the characteristic polynomial $m\lambda^{2} + c\lambda + k$ decides the behaviour of both. Its two roots being real and distinct, equal, or complex is exactly the over-, critically- and under-damped case, worked out in :ref[]{to=ode.harmonic-oscillator}. The algebraic condition $c^{2} = 4mk$ for critical damping — a double root — is the reason instrument movements and door closers are specified by a dimensionless damping ratio: it is the quantity that says where you are relative to the double root.

**Stability from the roots.** Since each solution is a sum of terms $x^{r}e^{\lambda_j x}$, every solution of $L(y) = 0$ tends to $0$ as $x \to +\infty$ precisely when every root has negative real part, and solutions stay bounded when no root has positive real part and the purely imaginary roots are simple. This is why control engineering reads stability off the locations of the roots of a polynomial, and why criteria (Routh-Hurwitz, Nyquist) that decide where the roots lie without computing them are useful: the linear algebra is already done by the theorem above.

**Resonance and secular growth.** The degree increase in the resonant case is the mathematical content of resonance. Driving an undamped oscillator $\ddot x + \omega_0^{2}x = F\cos\omega_0 t$ at its own frequency means forcing with $e^{\pm i\omega_0 t}$, which is a simple root of $\lambda^{2} + \omega_0^{2}$; the response therefore gains one power of $t$, $x_p = (F/2\omega_0)\,t\sin\omega_0 t$, and grows without bound. The same count appears in perturbation theory as the secular terms that must be removed by renormalising the frequency, and in quantum mechanics as the linear-in-time growth of a transition amplitude on resonance that underlies Fermi's golden rule.

**Discrete analogues.** Linear recurrence relations with constant coefficients, which arise in numerical schemes and in statistical physics transfer matrices, have the same structure with $e^{\lambda x}$ replaced by $\mu^{n}$: a root of multiplicity $k$ of the characteristic polynomial contributes $\mu^{n}, n\mu^{n}, \dots, n^{k-1}\mu^{n}$, and a forcing term that duplicates a root gains a factor $n$. The algebra below the surface is the same shift identity.
:::
