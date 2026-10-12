---
id: ode.euler-equation
title: Euler-Cauchy equations
kind: method
level: core
summary: 'An equation in which each term carries $x^{k}$ with the $k$-th derivative is scale invariant, so powers $|x|^{r}$ solve it; the exponents are the roots of an indicial polynomial, a root of multiplicity $m$ contributes $|x|^{r}$ times $1, \log|x|, \dots, (\log|x|)^{m-1}$, and the substitution $x = e^{t}$ turns the equation into one with constant coefficients.'
prereqs: [ode.constant-coefficients]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "Ch. 4, §2, Eqs. (2.1)-(2.2), Thm 1 and the $x<0$ discussion, pp. 145-147; the $n$-th order case, Eqs. (2.5)-(2.7) and Thm 2, pp. 148-149; Exercises 3, 4 and 6, pp. 149-150"
    pages: "145-150"
    role: the identity $L(|x|^{r}) = q(r)|x|^{r}$ and the name indicial polynomial; the basis theorem on any interval not containing the origin, in the $|x|^{r}$ and $\log|x|$ form; the derivative-in-$r$ argument for repeated roots; the real form for a complex pair; the trial $cx^{k}$ for power forcing
  - work: rhb-2006
    loc: "§15.2.1, Legendre's linear equation and Euler's equation, Eqs. (15.36)-(15.38), the operator identities (15.37), and the worked example $x^2y''+xy'-4y=0$, pp. 503-505"
    pages: "503-505"
    role: the substitution $x = e^{t}$ reducing the equation to constant coefficients, with the operator identities for $x^{n}d^{n}/dx^{n}$; the statement that a $k$-fold root $\lambda_1$ gives $x^{\lambda_1}, x^{\lambda_1}\ln x, \dots, x^{\lambda_1}(\ln x)^{k-1}$; the more general Legendre linear equation in $\alpha x + \beta$
  - work: strauss-2008
    loc: "Appendix A.4, Regular singular points, Eqs. (2)-(5) and the theorem on series solutions, p. 424"
    pages: "424"
    role: the Euler equation as the model that solutions near a regular singular point follow, and the name indicial equation for $x(x-1) + \beta x + \gamma = 0$
---

:::definition[Euler-Cauchy equations]{provenance=adapted src="coddington-1989:Ch. 4, §2, Eqs. (2.1) and (2.5), pp. 145, 148; rhb-2006:§15.2.1, Eq. (15.38), p. 504"}
An **Euler equation** (also **Euler-Cauchy**, or **equidimensional**) of order $n$ is

$$
L(y) \;=\; x^{n}y^{(n)} + a_1x^{n-1}y^{(n-1)} + \cdots + a_{n-1}xy' + a_ny \;=\; f(x) ,
$$

with $a_1, \dots, a_n$ constants. The defining feature is that the $k$-th derivative appears multiplied by $x^{k}$. The consequence is a scaling symmetry: for any $c > 0$, if $y(x)$ solves $L(y) = 0$ then so does $y(cx)$, because each term $x^{k}y^{(k)}$ is unchanged in form when $x$ is rescaled. This is the reason for the name *equidimensional*: every term has the same dimension if $x$ and $y$ are given dimensions.

The leading coefficient $x^{n}$ vanishes at $x = 0$, so $x = 0$ is a singular point and the theory of :ref[]{to=ode.linear-ode-theory} applies only on intervals not containing it. In this unit $I$ is any interval with $0 \notin I$; the two cases $x > 0$ and $x < 0$ are separate problems with identical answers.

For $r \in \mathbb{C}$ and $x \neq 0$ define $|x|^{r} = e^{r\log|x|}$, with $\log$ the real logarithm of the positive number $|x|$. The second-order case,

$$
x^{2}y'' + a\,xy' + b\,y = 0 ,
$$

is the one that occurs most often; its **indicial polynomial** is $q(r) = r(r-1) + ar + b$.
:::

:::statement[The indicial polynomial]{provenance=adapted src="coddington-1989:Ch. 4, §2, Eqs. (2.2) and (2.6), pp. 145, 148"}
For every $r \in \mathbb{C}$ and every $x \ne 0$,

$$
L\bigl(|x|^{r}\bigr) \;=\; q(r)\,|x|^{r} ,
$$

where $q$, the **indicial polynomial** of $L$, is the polynomial of degree $n$

$$
q(r) \;=\; r(r-1)\cdots(r-n+1) \;+\; a_1\,r(r-1)\cdots(r-n+2) \;+\; \cdots \;+\; a_{n-1}r \;+\; a_n .
$$

For $n = 2$ this is $q(r) = r(r-1) + ar + b$, and $q(r) = 0$ is called the **indicial equation**. Equivalently: $q$ is obtained from $L$ by replacing $x^{k}d^{k}/dx^{k}$ with the falling factorial $r(r-1)\cdots(r-k+1)$.
:::

:::statement[A basis of solutions]{provenance=adapted src="coddington-1989:Ch. 4, §2, Thm 1, p. 147 and Thm 2, p. 149; rhb-2006:§15.2.1, p. 504"}
Write the indicial polynomial $q$ of the $n$-th order Euler equation as $q(r) = (r-r_1)^{m_1}\cdots(r-r_s)^{m_s}$ with $r_1, \dots, r_s$ distinct, so that $m_1 + \cdots + m_s = n$. Then the $n$ functions

$$
|x|^{r_j},\quad |x|^{r_j}\log|x|,\quad \dots,\quad |x|^{r_j}\bigl(\log|x|\bigr)^{m_j-1},
\qquad j = 1, \dots, s ,
$$

are a basis for the solution space of $L(y) = 0$ on every interval that avoids $x = 0$.

In particular, for the second-order equation $x^{2}y'' + axy' + by = 0$: if $q$ has distinct roots $r_1 \ne r_2$ a basis is $|x|^{r_1}, |x|^{r_2}$; if $r_1$ is a double root a basis is $|x|^{r_1}, |x|^{r_1}\log|x|$.
:::

:::statement[Real form for a complex pair]{provenance=adapted src="coddington-1989:Ch. 4, §2, Ex. 4, pp. 149-150"}
Suppose $a_1, \dots, a_n$ are real, so $q$ has real coefficients, and let $r = \sigma + i\tau$ with $\tau \neq 0$ be a root of multiplicity $m$; then $\bar r = \sigma - i\tau$ is a root of the same multiplicity. For each $k = 0, \dots, m-1$ the two complex solutions $|x|^{\sigma\pm i\tau}(\log|x|)^{k}$ may be replaced by the real pair

$$
|x|^{\sigma}\bigl(\log|x|\bigr)^{k}\cos\bigl(\tau\log|x|\bigr),
\qquad
|x|^{\sigma}\bigl(\log|x|\bigr)^{k}\sin\bigl(\tau\log|x|\bigr),
$$

and the result is again a basis. For $n = 2$ with $r = \sigma \pm i\tau$ this gives the basis $|x|^{\sigma}\cos(\tau\log|x|)$, $|x|^{\sigma}\sin(\tau\log|x|)$: a power law modulated by an oscillation that is periodic in $\log|x|$, not in $x$.
:::

:::statement[Reduction to constant coefficients]{provenance=adapted src="rhb-2006:§15.2.1, Eqs. (15.36)-(15.38), pp. 503-504; coddington-1989:Ch. 4, §2, Ex. 3, p. 149"}
On $x > 0$ substitute $x = e^{t}$, that is, $t = \log x$, and set $Y(t) = y(e^{t})$. Writing $\theta = d/dt$,

$$
x^{k}\frac{d^{k}y}{dx^{k}} \;=\; \theta(\theta - 1)\cdots(\theta - k + 1)\,Y , \qquad k = 0, 1, 2, \dots
$$

Hence $L(y) = f(x)$ becomes the constant-coefficient equation

$$
\Bigl[\theta(\theta-1)\cdots(\theta-n+1) + a_1\theta(\theta-1)\cdots(\theta-n+2) + \cdots + a_n\Bigr]Y \;=\; f(e^{t}) ,
$$

whose characteristic polynomial is exactly the indicial polynomial $q$. The methods of :ref[]{to=ode.constant-coefficients} apply, and translating back with $t = \log x$, $e^{rt} = x^{r}$, $t^{k} = (\log x)^{k}$ reproduces the basis above.

More generally, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eq. (15.36), p. 503"} call

$$
A_n(\alpha x + \beta)^{n}y^{(n)} + \cdots + A_1(\alpha x + \beta)y' + A_0y = f(x)
$$

**Legendre's linear equation** and reduce it the same way, by $\alpha x + \beta = e^{t}$.
:::

:::idea{provenance=original}
A scale-invariant operator should have power-law eigenfunctions, and it does: $x^{k}d^{k}/dx^{k}$ applied to $x^{r}$ returns a number times $x^{r}$, so $L(x^{r}) = q(r)x^{r}$ and the exponents we want are the roots of $q$. The resemblance to the constant-coefficient case — where $L(e^{\lambda x}) = p(\lambda)e^{\lambda x}$ — is not an accident: $\log x$ converts scalings of $x$ into translations of $t$, and a translation-invariant operator is one with constant coefficients. That one change of variable explains everything, including where the logarithms come from: a repeated root of a constant-coefficient equation contributes $t^{k}e^{\lambda t}$, and $t = \log x$. One can also stay in $x$ and differentiate the identity $L(|x|^{r}) = q(r)|x|^{r}$ with respect to $r$, which produces $\log|x|$ on the left and the derivatives $q^{(j)}(r)$ on the right — the same bookkeeping as for repeated roots in the constant-coefficient case.
:::

:::proof[The indicial polynomial]{provenance=adapted src="coddington-1989:Ch. 4, §2, pp. 145, 148"}
**Step 1 ($x > 0$).** For $x > 0$, $|x|^{r} = x^{r} = e^{r\log x}$ and $\frac{d}{dx}x^{r} = rx^{r-1}$, which iterates to

$$
\frac{d^{k}}{dx^{k}}x^{r} = r(r-1)\cdots(r-k+1)\,x^{r-k} ,
\qquad\text{so}\qquad
x^{k}\frac{d^{k}}{dx^{k}}x^{r} = r(r-1)\cdots(r-k+1)\,x^{r} .
$$

**Step 2 (sum the terms).** The $j$-th term of $L$ is $a_j x^{n-j}d^{n-j}/dx^{n-j}$ (with $a_0 = 1$), so applying it to $x^{r}$ gives $a_j\,r(r-1)\cdots(r-n+j+1)x^{r}$. Adding over $j = 0, \dots, n$ gives $L(x^{r}) = q(r)x^{r}$ with $q$ as stated.

**Step 3 ($x < 0$).** For $x < 0$, $|x| = -x$, so $\frac{d}{dx}|x|^{r} = \frac{d}{dx}(-x)^{r} = -r(-x)^{r-1}$ and more generally $\frac{d^{k}}{dx^{k}}|x|^{r} = (-1)^{k}r(r-1)\cdots(r-k+1)(-x)^{r-k}$. Multiplying by $x^{k} = (-1)^{k}(-x)^{k}$ the two sign factors cancel, and again

$$
x^{k}\frac{d^{k}}{dx^{k}}|x|^{r} = r(r-1)\cdots(r-k+1)\,|x|^{r} .
$$

So the identity, and hence everything derived from it, holds verbatim on either side of the origin. $\square$
:::

:::proof[A basis of solutions]{provenance=adapted src="coddington-1989:Ch. 4, §2, pp. 145-149; rhb-2006:§15.2.1, pp. 503-504"}
**Step 1 (change variables).** Work on $x > 0$; the case $x < 0$ follows by replacing $x$ with $|x|$ throughout, by Step 3 of the previous proof. Put $t = \log x$, $Y(t) = y(e^{t})$. From $dt/dx = 1/x$ we get $x\,dy/dx = dY/dt = \theta Y$. Assume inductively that $x^{k}y^{(k)} = \theta(\theta-1)\cdots(\theta-k+1)Y$ and write $G = \theta(\theta-1)\cdots(\theta-k+1)Y$ for brevity. Differentiating $x^{k}y^{(k)} = G$ in $x$,

$$
kx^{k-1}y^{(k)} + x^{k}y^{(k+1)} = \frac{dG}{dt}\cdot\frac{1}{x} ,
$$

and multiplying by $x$,

$$
x^{k+1}y^{(k+1)} = \theta G - k\,x^{k}y^{(k)} = (\theta - k)\,\theta(\theta-1)\cdots(\theta-k+1)Y ,
$$

which is the statement for $k+1$. The base case $k = 0$ is trivial. This proves the operator identities, hence that $L(y) = f$ becomes the constant-coefficient equation displayed above, with characteristic polynomial

$$
\theta(\theta-1)\cdots(\theta-n+1) + a_1\theta(\theta-1)\cdots(\theta-n+2) + \cdots + a_n \Big|_{\theta \to r} \;=\; q(r) .
$$

**Step 2 (solve it).** By :ref[]{to=ode.constant-coefficients}, a root $r_j$ of $q$ of multiplicity $m_j$ contributes the $m_j$ solutions $t^{k}e^{r_jt}$, $k = 0, \dots, m_j - 1$, and together these $n$ functions are a basis of the solution space in $t$.

**Step 3 (translate back).** $t = \log x$ turns $e^{r_jt}$ into $x^{r_j}$ and $t^{k}$ into $(\log x)^{k}$, so the $n$ functions $x^{r_j}(\log x)^{k}$ solve $L(y) = 0$ on $x > 0$. The map $y \mapsto Y$, $Y(t) = y(e^{t})$, is a linear bijection between functions on $(0,\infty)$ and functions on $\mathbb{R}$ with inverse $y(x) = Y(\log x)$; a linear bijection carries a basis to a basis and independent functions to independent functions. Hence these $n$ functions are a basis of the solutions of $L(y) = 0$ on any interval of $(0,\infty)$.

**Step 4 (a check that avoids the substitution).** The same conclusion follows from the indicial identity directly. Differentiating $L(|x|^{r}) = q(r)|x|^{r}$ $k$ times with respect to $r$, and using $\partial_r|x|^{r} = |x|^{r}\log|x|$ together with the commuting of $\partial_r$ and $d/dx$,

$$
L\Bigl(|x|^{r}\bigl(\log|x|\bigr)^{k}\Bigr) \;=\; \sum_{i=0}^{k}\binom{k}{i}q^{(i)}(r)\,|x|^{r}\bigl(\log|x|\bigr)^{k-i} .
$$

If $r_j$ has multiplicity $m_j$ then $q(r_j) = \cdots = q^{(m_j-1)}(r_j) = 0$, so the right-hand side vanishes for every $k \le m_j - 1$. $\square$
:::

:::proof[Real form for a complex pair]{provenance=original}
Since $q$ has real coefficients, $q(\bar r) = \overline{q(r)}$, so $\bar r$ is a root whenever $r$ is, with the same multiplicity (apply the same conjugation to $q^{(i)}$). With $r = \sigma + i\tau$ and $u = \log|x|$,

$$
|x|^{\sigma\pm i\tau} = e^{(\sigma\pm i\tau)u} = |x|^{\sigma}\bigl(\cos\tau u \pm i\sin\tau u\bigr) ,
$$

so

$$
|x|^{\sigma}\cos(\tau u) = \tfrac12\bigl(|x|^{r} + |x|^{\bar r}\bigr),
\qquad
|x|^{\sigma}\sin(\tau u) = \tfrac{1}{2i}\bigl(|x|^{r} - |x|^{\bar r}\bigr) ,
$$

and multiplying both identities by $u^{k}$ gives the claimed pair as combinations of the two complex solutions. The $2\times 2$ matrix $\begin{pmatrix}1/2 & 1/2\\ 1/(2i) & -1/(2i)\end{pmatrix}$ has determinant $-1/(2i) \neq 0$, so the replacement is invertible and the new $n$ functions span the same space; being $n$ spanning vectors of an $n$-dimensional space they are a basis. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$x \ne 0$ throughout.** The indicial identity $x^{k}(|x|^{r})^{(k)} = r(r-1)\cdots(r-k+1)|x|^{r}$ is derived in Steps 1 and 3 for $x \neq 0$ only, and that is all one can ask: the leading coefficient $x^{n}$ vanishes at the origin, so the equation is singular there, and the functions themselves misbehave — $|x|^{r}$ with $r$ non-integer is not differentiable enough times at $0$ (for $0 < r < 1$ not even once), and $\log|x|$ is not defined there at all. Coddington's theorems are stated, carefully, on any interval not containing the origin; a solution on $(0,\infty)$ and one on $(-\infty,0)$ have no reason to join up. For $x^{2}y'' - 2y = 0$ ($q(r) = r^{2} - r - 2$, roots $2$ and $-1$) the solution $|x|^{-1}$ exists on each side and blows up at the origin, and $x^{2}$ extends smoothly but is not part of a two-dimensional solution space at $0$: compare the warning in :ref[]{to=ode.linear-ode-theory}.
- **$|x|^{r}$ rather than $x^{r}$.** On $x < 0$ and for complex or non-integer $r$, $x^{r}$ needs a branch of $\log$ and becomes complex-valued (:cite{work=coddington-1989 loc="Ch. 4, §2, Ex. 5, p. 150"} works this out), whereas $|x|^{r}$ is real for real $r$ and is what the identity of Step 3 delivers. On $x > 0$ the two agree and we write $x^{r}$ and $\log x$.
- **Constant $a_k$ are essential.** If one $a_k$ is replaced by a function the scaling symmetry is lost, $L(x^{r})$ is no longer a multiple of $x^{r}$, and only the leading behaviour near $0$ survives — which is precisely the content of the Frobenius method (:ref[]{to=ode.frobenius-method}): near a regular singular point the solutions are the Euler solutions multiplied by convergent power series. :cite[Strauss]{work=strauss-2008 loc="Appendix A.4, p. 424"} states this as the main theorem about regular singular points, with the same indicial equation $x(x-1) + \beta x + \gamma = 0$.
- **Multiplicity, not root separation, produces the logarithm.** For $n = 2$ the double root occurs when $(a-1)^{2} = 4b$; there $|x|^{r_1}$ and $|x|^{r_1}\log|x|$ are the basis. The logarithm can also be obtained from :ref[reduction of order]{to=ode.reduction-of-order}: with $\varphi_1 = x^{r_1}$ and $a_1 = a/x$ one gets $e^{-A} = x^{-a}$ and $\varphi_1^{-2}e^{-A} = x^{-2r_1-a} = x^{-1}$ exactly when $2r_1 + a = 1$, which is the condition $r_1 = (1-a)/2$ for a double root. The integral $\int dx/x$ is the logarithm.
- **Forcing by a power is easy.** Since $L(cx^{k}) = c\,q(k)x^{k}$, the equation $L(y) = x^{k}$ has the particular solution $x^{k}/q(k)$ whenever $q(k) \ne 0$; if $k$ is a root of $q$ of multiplicity $m$, the trial $c\,x^{k}(\log x)^{m}$ works, with $c = 1/q^{(m)}(k)$. The reason is the differentiated identity of Step 4 above with the exponent $m$: in
  $$
  L\Bigl(x^{k}(\log x)^{m}\Bigr) = \sum_{i=0}^{m}\binom{m}{i}q^{(i)}(k)\,x^{k}(\log x)^{m-i}
  $$
  every term with $i \le m-1$ carries a factor $q^{(i)}(k) = 0$, and the surviving $i = m$ term is $\binom{m}{m}q^{(m)}(k)x^{k} = q^{(m)}(k)\,x^{k}$. So $L\bigl(x^{k}(\log x)^{m}\bigr) = q^{(m)}(k)x^{k}$ exactly, and $q^{(m)}(k) \ne 0$ because the multiplicity is exactly $m$. (For $m = 1$ this reads $c = 1/q'(k)$; for the triple root of the first example, $q = (r-1)^{3}$ and $q'''(1) = 6$, so forcing $x$ would need $y_p = \tfrac16 x(\log x)^{3}$, and indeed $x^{3}y''' + xy' - y$ applied to $x(\log x)^{3}$ gives $6x$.) This is the exact analogue of resonance in :ref[]{to=ode.constant-coefficients}, and :cite{work=coddington-1989 loc="Ch. 4, §2, Ex. 6, p. 150"} sets it as an exercise for $n=2$.
:::

:::method[Solving an Euler equation]{provenance=adapted src="rhb-2006:§15.2.1, Solution method, pp. 504-505; coddington-1989:Ch. 4, §2, pp. 145-149"}
1. **Recognise it**: each $y^{(k)}$ multiplied by $x^{k}$ (times a constant). If the variable appears as $\alpha x + \beta$ throughout, substitute $u = \alpha x + \beta$ first.
2. **Write the indicial polynomial** by replacing $x^{k}y^{(k)}$ with $r(r-1)\cdots(r-k+1)$, and find its roots with multiplicities. For $n = 2$: $q(r) = r(r-1) + ar + b$.
3. **Write the basis**: each root $r_j$ of multiplicity $m_j$ contributes $|x|^{r_j}\bigl(\log|x|\bigr)^{k}$, $k = 0, \dots, m_j-1$. Convert a complex pair to the real $|x|^{\sigma}\cos(\tau\log|x|)$, $|x|^{\sigma}\sin(\tau\log|x|)$ if a real answer is wanted.
4. **For a nonzero right-hand side**, either (a) try $y_p = c\,x^{k}$ for forcing $x^{k}$, using $L(cx^{k}) = c\,q(k)x^{k}$, with a factor $(\log x)^{m}$ if $k$ is a root of multiplicity $m$; or (b) substitute $x = e^{t}$ and use undetermined coefficients or variation of parameters on the resulting constant-coefficient equation; or (c) use :ref[variation of parameters]{to=ode.variation-of-parameters} directly. For $n = 2$ the Wronskian needed there is, for distinct roots $r_1 \ne r_2$ with basis $|x|^{r_1}, |x|^{r_2}$,
   $$
   W = (r_2 - r_1)\,|x|^{r_1 + r_2 - 1}\operatorname{sgn} x ,
   $$
   which is nonvanishing exactly because $r_1 \ne r_2$; and for a double root $r_1$, with basis $|x|^{r_1}, |x|^{r_1}\log|x|$,
   $$
   W = |x|^{2r_1 - 1}\operatorname{sgn} x .
   $$
5. **State the interval.** The answer is valid on an interval that excludes $x = 0$; say which one.
:::

:::example[A triple root, with forcing]{provenance=original}
Solve

$$
x^{3}y''' + x\,y' - y \;=\; x^{2} \quad\text{on } x > 0 ,
\qquad y(1) = y'(1) = y''(1) = 0 .
$$

1. **Indicial polynomial.** Replace $x^{3}y'''$ by $r(r-1)(r-2)$, $xy'$ by $r$, and $y$ by $1$:

   $$
   q(r) = r(r-1)(r-2) + r - 1 = r^{3} - 3r^{2} + 2r + r - 1 = r^{3} - 3r^{2} + 3r - 1 = (r-1)^{3} .
   $$

   So $r = 1$ is a root of multiplicity $3$.
2. **Complementary function.** $y_c = \bigl(c_1 + c_2\log x + c_3(\log x)^{2}\bigr)x$. Each piece checks out directly; for instance $y = x(\log x)^{2}$ has $y' = (\log x)^{2} + 2\log x$, $y'' = (2\log x + 2)/x$, $y''' = -2\log x/x^{2}$, and

   $$
   x^{3}\left(\frac{-2\log x}{x^{2}}\right) + x\bigl((\log x)^{2} + 2\log x\bigr) - x(\log x)^{2} = -2x\log x + 2x\log x = 0 .
   $$

   Their Wronskian at $x = 1$ is the determinant of the matrix with rows $(1,0,0)$, $(1,1,0)$, $(0,1,2)$, namely $2 \neq 0$; and since the normalised equation has no $y''$ term, Abel's formula makes $W$ constant, so $W \equiv 2$ on $x>0$.
3. **Particular integral.** The forcing is $x^{2}$ and $q(2) = (2-1)^{3} = 1 \ne 0$, so $y_p = x^{2}/q(2) = x^{2}$. Check: $x^{3}\cdot 0 + x\cdot 2x - x^{2} = x^{2}$.
4. **General solution.** $y = \bigl(c_1 + c_2\log x + c_3(\log x)^{2}\bigr)x + x^{2}$.
5. **Impose the data at $x = 1$,** where $\log x = 0$. With $y_h = x(c_1 + c_2L + c_3L^{2})$, $L = \log x$:

   $$
   y_h' = c_1 + c_2 + (c_2 + 2c_3)L + c_3L^{2} , \qquad
   y_h'' = \frac{c_2 + 2c_3 + 2c_3L}{x} ,
   $$

   so $y_h(1) = c_1$, $y_h'(1) = c_1 + c_2$, $y_h''(1) = c_2 + 2c_3$. Since $y_p(1) = 1$, $y_p'(1) = 2$, $y_p''(1) = 2$, the conditions give $c_1 = -1$, then $c_2 = -1$, then $c_3 = -\tfrac12$:

   $$
   y(x) \;=\; x^{2} - x\left(1 + \log x + \tfrac12(\log x)^{2}\right) .
   $$

6. **Checks.** Substituting this into the equation returns $x^{2}$, and $y, y', y''$ vanish at $x = 1$. At $x = 2$: $y(2) = 4 - 2\bigl(1 + \ln 2 + \tfrac12\ln^{2}2\bigr) = 0.133\,253$ to six decimal places.
:::

:::example[A complex pair: oscillation in $\log x$]{provenance=original}
Solve $x^{2}y'' + 3xy' + 5y = 0$ for $x \ne 0$.

1. **Indicial equation.** $q(r) = r(r-1) + 3r + 5 = r^{2} + 2r + 5$, with roots $r = -1 \pm 2i$ (so $\sigma = -1$, $\tau = 2$).
2. **Real basis.**

   $$
   \varphi_1(x) = \frac{\cos\bigl(2\log|x|\bigr)}{|x|} , \qquad
   \varphi_2(x) = \frac{\sin\bigl(2\log|x|\bigr)}{|x|} .
   $$

   Check $\varphi_1$ on $x > 0$. With $u = \log x$, so that $du/dx = 1/x$,

   $$
   \varphi_1 = \frac{\cos 2u}{x}, \qquad
   \varphi_1' = -\frac{\cos 2u + 2\sin 2u}{x^{2}}, \qquad
   \varphi_1'' = \frac{2\bigl(3\sin 2u - \cos 2u\bigr)}{x^{3}} ,
   $$

   so that

   $$
   x^{2}\varphi_1'' + 3x\varphi_1' + 5\varphi_1
   = \frac{6\sin 2u - 2\cos 2u - 3\cos 2u - 6\sin 2u + 5\cos 2u}{x} = 0 .
   $$

   The computation for $\varphi_2$ is the same with $\cos$ and $\sin$ exchanged and a sign flipped.
3. **What the solution looks like.** As $x \to 0^{+}$ the amplitude $1/x$ grows while the phase $2\log x \to -\infty$: the solution oscillates infinitely often in any neighbourhood of the origin, with the zeros of $\varphi_1$ at $x = e^{\pi/4 + k\pi/2}$, $k \in \mathbb{Z}$, accumulating geometrically at the origin. The oscillation is periodic in $\log x$ with period $\pi$, so consecutive zeros are in the fixed ratio $e^{-\pi/2} = 0.2079$ as one moves towards the origin. This **log-periodic** behaviour is the signature of a complex pair of indicial roots.
4. **A definite solution.** The solution with $y(1) = 1$, $y'(1) = 0$ is $y = x^{-1}\bigl(\cos(2\log x) + \tfrac12\sin(2\log x)\bigr)$, since $\varphi_1(1) = 1$, $\varphi_1'(1) = -1$, $\varphi_2(1) = 0$, $\varphi_2'(1) = 2$. At $x = 2$: $\tfrac12\bigl(\cos(2\ln 2) + \tfrac12\sin(2\ln 2)\bigr) = 0.337\,485$ to six decimal places.
:::

:::application{provenance=original}
**Laplace's equation in polar and spherical coordinates.** Separating $\nabla^{2}u = 0$ in the plane as $u = R(r)\Theta(\theta)$ gives $r^{2}R'' + rR' - m^{2}R = 0$ — an Euler equation with $q(\rho) = \rho^{2} - m^{2}$, hence $R = r^{m}, r^{-m}$ for $m \ne 0$ and the double root $m = 0$ giving $R = 1, \log r$. The logarithmic potential of a line charge is the double-root case of this unit. In three dimensions the radial equation $r^{2}R'' + 2rR' - \ell(\ell+1)R = 0$ has $q(\rho) = \rho(\rho+1) - \ell(\ell+1)$, with roots $\ell$ and $-\ell-1$: the interior and exterior multipole solutions $r^{\ell}$ and $r^{-\ell-1}$ of electrostatics are nothing but the exponents of an Euler equation.

**Scale-free problems and power laws.** Whenever a linear problem has no intrinsic length scale, the governing equation is equidimensional and the solutions are power laws, possibly with logarithms. Examples: the stress field near a crack tip or a wedge corner in elasticity (the Williams expansion, whose exponents solve a transcendental version of an indicial equation), the velocity profile in a corner flow, and the self-similar solutions of diffusion problems. The appearance of a logarithm always signals a degenerate (repeated) exponent, and it is the mathematical origin of such anomalies as the logarithmic corrections in two-dimensional problems.

**The inverse-square potential.** The radial Schrodinger equation with $V = -g/r^{2}$ reduces, for the leading behaviour, to $r^{2}u'' + \bigl(g - \ell(\ell+1)\bigr)u = 0$, an Euler equation with $q(\rho) = \rho(\rho-1) + g - \ell(\ell+1)$. When $g$ exceeds a critical value the indicial roots become a complex pair and the solution becomes log-periodic, $r^{1/2}\cos(\tau\log r + \delta)$: this is the celebrated "fall to the centre", where no ground state exists and the spectrum must be regularised. The same mathematics governs the Efimov effect in three-body physics, where the log-periodicity appears as a geometric sequence of bound states with ratio $e^{\pi/\tau}$ — the ratio seen in step 3 of the second example.

**The model for regular singular points.** Finally, the Euler equation is the reference case for the whole of the series-solution theory: near a regular singular point the coefficients $xp(x)$ and $x^{2}q(x)$ tend to constants, and the equation is asymptotically an Euler equation whose indicial roots give the leading exponents of the two solutions (:ref[]{to=ode.frobenius-method}, :ref[]{to=ode.singular-points-infinity}). Every indicial equation in the theory of Bessel, Legendre and hypergeometric functions is the indicial equation of an Euler equation.
:::
