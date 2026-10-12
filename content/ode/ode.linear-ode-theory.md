---
id: ode.linear-ode-theory
title: Structure of linear equations and the Wronskian
kind: theorem
level: core
summary: For a linear equation of order n whose leading coefficient does not vanish, the solutions of the homogeneous equation form a vector space of dimension exactly n, any n solutions are independent precisely when their Wronskian is nonzero at one point, and Abel's formula gives that Wronskian up to a constant without solving the equation.
prereqs: [ode.existence-uniqueness, linalg.determinants]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "Ch. 3, §1 (the operator $L$), p. 103; §2, Thm 1 (existence), p. 104 and Thm 3 (uniqueness), p. 105; §3, Thms 4-5, pp. 106-108; §4, Thms 6-7, pp. 111-113 and Thm 8 with its corollary (Abel's formula), pp. 113-116; §6, Thm 11 (structure of the inhomogeneous solution set), pp. 122-123"
    pages: "103-108, 111-116, 122-123"
    role: normalised form of the equation; statements and proof routes for the dimension theorem, the Wronskian criterion and Abel's formula; the determinant-differentiation argument; the vanishing-leading-coefficient warning
  - work: stakgold-holst-2011
    loc: "§3.1, Thm 3.1.1 and Remark 3 (initial-value problem; $a_p \\ne 0$), p. 186; linear dependence, the Wronskian and the $x^2,\\,x|x|$ counterexample, p. 187; Abel's formula (3.1.7)-(3.1.8) and Thm 3.1.2, pp. 187-188"
    pages: "186-188"
    role: Abel's formula for an unnormalised leading coefficient and its self-adjoint special form; the criterion in the form \"the Wronskian vanishes at a single point\"; the counterexample for functions that are not solutions
  - work: rhb-2006
    loc: "§15.1, Eqs. (15.1)-(15.7) (complementary function, Wronskian, particular integral), pp. 490-492; §16.1, Eqs. (16.3)-(16.4) ($W' = -pW$ and its integral), p. 532"
    pages: "490-492, 532"
    role: the physicist's statement of superposition and of the general solution as complementary function plus particular integral; the second-order derivation of Abel's formula; the warning that a vanishing Wronskian does not by itself prove dependence
  - work: arfken-2013
    loc: "§7.6, Eqs. (7.54)-(7.57) and Examples 7.6.1-7.6.2, pp. 359-361"
    pages: "359-361"
    role: the Wronskian as the determinant of the repeatedly differentiated dependence relation; the statement (with its footnote hypothesis) that a Wronskian vanishing on the whole range implies dependence
  - work: hassani-2013
    loc: "§14.3-14.4, Thm 14.3.5, p. 425; Def. 14.4.1, Prop. 14.4.2 and Thm 14.4.3, p. 425"
    pages: "424-425"
    role: the second-order basis theorem through independence of the initial-data vectors; the equivalence of dependence and a vanishing Wronskian for nowhere-zero differentiable functions
---

:::definition[Linear equations of order $n$]{provenance=adapted src="coddington-1989:Ch. 3, §1, p. 103; stakgold-holst-2011:§3.1, p. 186"}
A **linear differential equation of order $n$** on a real interval $I$ is an equation

$$
a_0(x)\,y^{(n)} + a_1(x)\,y^{(n-1)} + \cdots + a_n(x)\,y \;=\; b(x) ,
$$

with coefficients $a_0, \dots, a_n$ and right-hand side $b$ complex-valued functions on $I$. A point where $a_0$ vanishes is a **singular point** of the equation and needs separate treatment (:ref[]{to=ode.singular-points-infinity}). Throughout this unit $a_0(x) \neq 0$ on $I$, so we may divide by $a_0$ and work with the **normalised** equation. Writing

$$
L(y) \;=\; y^{(n)} + a_1(x)\,y^{(n-1)} + \cdots + a_n(x)\,y
$$

(the coefficients renamed after the division), the equation is $L(y) = b(x)$. It is **homogeneous** if $b(x) = 0$ for all $x \in I$ and **inhomogeneous** otherwise. A **solution on $I$** is a function $\varphi$ that has $n$ derivatives at every point of $I$ and satisfies $L(\varphi) = b$ there. We assume once and for all that $a_1, \dots, a_n$ and $b$ are continuous on $I$; $I$ may be open, closed, half-open, bounded or unbounded.

$L$ is a linear operator: $L(c_1\varphi_1 + c_2\varphi_2) = c_1 L(\varphi_1) + c_2 L(\varphi_2)$ for constants $c_1, c_2$ and any functions with $n$ derivatives. This single fact is the **principle of superposition**, and everything below is a consequence of it together with unique solvability of the initial-value problem.
:::

:::definition[Linear independence and the Wronskian]{provenance=adapted src="stakgold-holst-2011:§3.1, pp. 186-187; coddington-1989:Ch. 3, §3-§4, pp. 106, 111; arfken-2013:§7.6, Eqs. (7.54)-(7.55), pp. 359-360"}
Functions $f_1, \dots, f_n$ on $I$ are **linearly dependent on $I$** when some constants $c_1, \dots, c_n$, at least one of them nonzero, satisfy

$$
c_1 f_1(x) + c_2 f_2(x) + \cdots + c_n f_n(x) \;=\; 0 \qquad \text{for every } x \in I ,
$$

and **linearly independent on $I$** if they are not. The constants are the same for all $x$: one relation must hold identically on $I$, and a relation that happens to hold at isolated points or on part of $I$ does not make the functions dependent.

If $f_1, \dots, f_n$ are continuous on $I$ and have continuous derivatives of orders up to $n-1$ there — the hypothesis under which :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="p. 187"} define it — their **Wronskian** is the function

$$
W(f_1, \dots, f_n)(x) \;=\;
\det
\begin{pmatrix}
f_1 & f_2 & \cdots & f_n \\
f_1' & f_2' & \cdots & f_n' \\
\vdots & \vdots & & \vdots \\
f_1^{(n-1)} & f_2^{(n-1)} & \cdots & f_n^{(n-1)}
\end{pmatrix} (x) .
$$

For $n = 2$ this is $W(f_1, f_2) = f_1 f_2' - f_1' f_2$. Solutions of the normalised equation meet this requirement automatically: from $y^{(n)} = -a_1y^{(n-1)} - \cdots - a_ny$ and the continuity of the $a_k$, a solution has $n$ derivatives of which the first $n-1$ are continuous (indeed the $n$-th is continuous too). A set of $n$ solutions of $L(y) = 0$ that is linearly independent on $I$ is called a **fundamental set**, or a **basis** of solutions.
:::

:::statement[Superposition and the dimension of the solution space]{provenance=adapted src="coddington-1989:Ch. 3, §3, Thms 4 and 5, pp. 106-108, and §4, Thm 7, pp. 112-113"}
Let $a_1, \dots, a_n$ be continuous on $I$ and let $\mathcal{S}$ be the set of solutions of $L(y) = 0$ on $I$.

1. **Superposition.** $\mathcal{S}$ is a complex vector space: if $\varphi_1, \dots, \varphi_m \in \mathcal{S}$ and $c_1, \dots, c_m$ are constants, then $c_1\varphi_1 + \cdots + c_m\varphi_m \in \mathcal{S}$.
2. **Initial data.** Fix $x_0 \in I$. For every choice of constants $\alpha_1, \dots, \alpha_n$ there is exactly one $\varphi \in \mathcal{S}$ with

   $$
   \varphi(x_0) = \alpha_1, \quad \varphi'(x_0) = \alpha_2, \quad \dots, \quad \varphi^{(n-1)}(x_0) = \alpha_n ,
   $$

   and this solution exists on the whole of $I$.
3. **Dimension $n$.** There exist $n$ linearly independent solutions on $I$; and if $\varphi_1, \dots, \varphi_n$ is *any* set of $n$ linearly independent solutions on $I$, then every solution $\varphi$ of $L(y) = 0$ on $I$ can be written as

   $$
   \varphi \;=\; c_1\varphi_1 + \cdots + c_n\varphi_n
   $$

   with uniquely determined constants $c_1, \dots, c_n$. Thus $\dim \mathcal{S} = n$, and every fundamental set is a basis of $\mathcal{S}$.
:::

:::statement[The Wronskian criterion]{provenance=adapted src="coddington-1989:Ch. 3, §4, Thm 6, pp. 111-112 and the consequence of Thm 8, p. 116; stakgold-holst-2011:§3.1, Thm 3.1.2, pp. 187-188"}
Let $\varphi_1, \dots, \varphi_n$ be $n$ solutions of $L(y) = 0$ on $I$, with $a_1, \dots, a_n$ continuous on $I$, and let $x_0$ be any point of $I$. The following are equivalent.

1. $\varphi_1, \dots, \varphi_n$ are linearly independent on $I$.
2. $W(\varphi_1, \dots, \varphi_n)(x) \neq 0$ for every $x \in I$.
3. $W(\varphi_1, \dots, \varphi_n)(x_0) \neq 0$.

Equivalently: $n$ solutions are linearly dependent on $I$ if and only if their Wronskian vanishes at a single point of $I$. In particular the Wronskian of $n$ solutions either never vanishes on $I$ or vanishes identically, and it may be tested at whichever point is most convenient.
:::

:::statement[Abel's formula]{provenance=adapted src="coddington-1989:Ch. 3, §4, Thm 8 and its corollary, pp. 113-116; stakgold-holst-2011:§3.1, Eqs. (3.1.7)-(3.1.8), p. 187"}
Let $\varphi_1, \dots, \varphi_n$ be any $n$ solutions (independent or not) of $L(y) = 0$ on $I$ and let $x_0 \in I$. Then, with $W = W(\varphi_1, \dots, \varphi_n)$,

$$
W(x) \;=\; \exp\left[-\int_{x_0}^{x} a_1(t)\,dt\right] W(x_0) , \qquad x \in I .
$$

Only the coefficient $a_1$ of $y^{(n-1)}$ enters. Three consequences are worth recording.

- If the $a_k$ are constants, $W(x) = e^{-a_1(x - x_0)}\,W(x_0)$; if $a_1 = 0$, $W$ is constant on $I$.
- For the unnormalised equation $a_0 y^{(n)} + a_1 y^{(n-1)} + \cdots + a_n y = 0$ with $a_0 \ne 0$ on $I$, the same formula reads $W = C e^{-m(x)}$, where $m$ is any particular solution of $m' = a_1/a_0$ and the constant $C$ depends on the solutions used to form $W$.
- For the second-order equation in self-adjoint form, $(p\,y')' + q\,y = 0$ with $p \ne 0$ (so that $a_0 = p$ and $a_1 = p'$), this gives $W(x) = C/p(x)$.
:::

:::idea{provenance=original}
Everything follows from one observation: reading off the initial data at a fixed point $x_0$ is a linear map

$$
E_{x_0} : \mathcal{S} \to \mathbb{C}^n , \qquad E_{x_0}(\varphi) = \bigl(\varphi(x_0), \varphi'(x_0), \dots, \varphi^{(n-1)}(x_0)\bigr) .
$$

The existence theorem says $E_{x_0}$ is onto; the uniqueness theorem says its kernel is $\{0\}$. So $E_{x_0}$ is an isomorphism and $\dim\mathcal{S} = n$. The Wronskian at $x_0$ is precisely the determinant of the $n$ vectors $E_{x_0}(\varphi_1), \dots, E_{x_0}(\varphi_n)$, so the Wronskian criterion is nothing but the statement that $n$ vectors in $\mathbb{C}^n$ are independent exactly when their determinant is nonzero -- transported through the isomorphism. Abel's formula is separate: differentiating a determinant gives a sum of $n$ determinants, all but the last have a repeated row, and in the last the equation lets us replace the bottom row $\varphi_k^{(n)}$ by $-a_1\varphi_k^{(n-1)} - \cdots - a_n \varphi_k$, of which only the $-a_1$ term survives row operations. So $W' = -a_1 W$, a first-order equation.
:::

:::proof[Superposition and the dimension of the solution space]{provenance=adapted src="coddington-1989:Ch. 3, Thms 4, 5 and 7, pp. 106-113"}
**Step 1 (part 1).** For functions with $n$ derivatives, $L(c_1\varphi_1 + \cdots + c_m\varphi_m) = c_1 L(\varphi_1) + \cdots + c_m L(\varphi_m)$, because each derivative is linear and the coefficients multiply pointwise. If every $L(\varphi_j) = 0$, the right side is $0$. Hence $\mathcal{S}$ is closed under linear combinations, and it contains the zero function, so it is a vector space.

**Step 2 (part 2).** Existence of a solution on all of $I$ with prescribed data at $x_0$, and its uniqueness, is :ref[the existence and uniqueness theorem]{to=ode.existence-uniqueness} applied to the first-order system for $(y, y', \dots, y^{(n-1)})$; it uses the continuity of $a_1, \dots, a_n$ on $I$, which is available because we divided by $a_0 \neq 0$. (Uniqueness alone is elementary: if $\varphi, \psi$ are two solutions with the same data, $\chi = \varphi - \psi$ solves $L(y) = 0$ with zero data at $x_0$, and a Gronwall-type estimate on each closed bounded subinterval forces $\chi \equiv 0$.)

**Step 3 ($E_{x_0}$ is a linear isomorphism).** The map $E_{x_0}$ of the idea is linear, since differentiation and evaluation are. Part 2 says exactly that it is a bijection of $\mathcal{S}$ onto $\mathbb{C}^n$. Hence $\dim\mathcal{S} = \dim\mathbb{C}^n = n$.

**Step 4 (existence of $n$ independent solutions).** Let $e_1, \dots, e_n$ be the standard basis of $\mathbb{C}^n$ and let $\psi_k = E_{x_0}^{-1}(e_k)$, that is, the solution with $\psi_k^{(k-1)}(x_0) = 1$ and all other derivatives of order $< n$ vanishing at $x_0$. If $c_1\psi_1 + \cdots + c_n\psi_n = 0$ on $I$, applying the linear map $E_{x_0}$ gives $c_1e_1 + \cdots + c_ne_n = 0$ in $\mathbb{C}^n$, so every $c_k = 0$. These $n$ solutions are therefore linearly independent.

**Step 5 (any $n$ independent solutions are a basis).** Let $\varphi_1, \dots, \varphi_n$ be solutions, linearly independent on $I$. Linear independence in $\mathcal{S}$ means precisely linear independence as functions on $I$ — the defining relation $\sum_k c_k\varphi_k = 0$ is the same in both readings. By Step 3, $\mathcal{S}$ has dimension $n$, and $n$ independent vectors in an $n$-dimensional space span it. So every solution is a linear combination $\sum_k c_k\varphi_k$, and the coefficients are unique because the $\varphi_k$ are independent. $\square$
:::

:::proof[The Wronskian criterion]{provenance=adapted src="coddington-1989:Ch. 3, Thm 6, pp. 111-112; stakgold-holst-2011:Thm 3.1.2, pp. 187-188"}
Fix $x \in I$ and let $M(x)$ be the matrix in the definition of the Wronskian, built from $\varphi_1, \dots, \varphi_n$; its $k$-th column is $E_x(\varphi_k)$, so $W(x) = \det M(x)$.

**Step 1 ($3 \Rightarrow 1$).** Suppose $W(x_0) \ne 0$ and $c_1\varphi_1 + \cdots + c_n\varphi_n = 0$ on $I$. Differentiating this identity $n-1$ times gives

$$
c_1\varphi_1^{(j)}(x) + \cdots + c_n\varphi_n^{(j)}(x) = 0, \qquad j = 0, 1, \dots, n-1,
$$

for every $x \in I$. At $x = x_0$ this is the homogeneous linear system $M(x_0)\,c = 0$ for $c = (c_1, \dots, c_n)$. Since $\det M(x_0) = W(x_0) \ne 0$, :ref[the determinant criterion for invertibility]{to=linalg.determinants} gives $c = 0$. So the solutions are linearly independent on $I$.

**Step 2 ($1 \Rightarrow 2$), by contraposition.** Suppose $W(x_1) = 0$ for some $x_1 \in I$. Then $M(x_1)$ is singular, so there is a nonzero $c \in \mathbb{C}^n$ with $M(x_1)c = 0$. Put $\psi = c_1\varphi_1 + \cdots + c_n\varphi_n$. By superposition $\psi$ solves $L(y) = 0$, and $M(x_1)c = 0$ says that $\psi$ and its first $n-1$ derivatives vanish at $x_1$. The zero function is also such a solution, so by the uniqueness in part 2 of the structure theorem, $\psi \equiv 0$ on $I$. Since not all $c_k$ vanish, $\varphi_1, \dots, \varphi_n$ are linearly dependent on $I$. Hence independence forces $W$ to be nonvanishing at every point of $I$.

**Step 3 (the three statements are equivalent).** Step 1 is $3 \Rightarrow 1$, Step 2 is $1 \Rightarrow 2$, and $2 \Rightarrow 3$ is immediate because $x_0 \in I$. $\square$

The point of the equivalence of 2 and 3 is practical: the Wronskian of solutions cannot vanish at some points of $I$ and not at others, so one evaluation suffices. Abel's formula below shows the same thing directly, since an exponential never vanishes.
:::

:::proof[Abel's formula]{provenance=adapted src="coddington-1989:Ch. 3, Thm 8, pp. 113-115"}
**Step 1 (differentiate the determinant).** A determinant is a sum of products of one entry from each row, so by the product rule its derivative is the sum of the $n$ determinants obtained by differentiating one row at a time:

$$
W' \;=\; V_1 + V_2 + \cdots + V_n ,
$$

where $V_k$ agrees with $W$ except that its $k$-th row is differentiated.

**Step 2 (all but the last term vanish).** For $k \le n-1$, differentiating row $k$ of $W$ (whose entries are $\varphi_j^{(k-1)}$) produces the row with entries $\varphi_j^{(k)}$, which is already row $k+1$ of $W$. So $V_k$ has two equal rows and $V_k = 0$. Only $V_n$ survives, whose bottom row has entries $\varphi_j^{(n)}$.

**Step 3 (use the equation).** Here we use that every $\varphi_j$ solves $L(y) = 0$:

$$
\varphi_j^{(n)} \;=\; -a_1\varphi_j^{(n-1)} - a_2\varphi_j^{(n-2)} - \cdots - a_n\varphi_j .
$$

Substituting this bottom row into $V_n$, and then adding to the bottom row $a_n$ times the first row, $a_{n-1}$ times the second row, ..., $a_2$ times the $(n-1)$-st row — operations that do not change a determinant — cancels every term except the first, leaving the bottom row $(-a_1\varphi_1^{(n-1)}, \dots, -a_1\varphi_n^{(n-1)})$. That row is $-a_1$ times row $n$ of $W$, so

$$
W' \;=\; V_n \;=\; -a_1(x)\,W .
$$

**Step 4 (solve the first-order equation).** $a_1$ is continuous on $I$, so $A(x) = \int_{x_0}^{x} a_1(t)\,dt$ is defined and differentiable on $I$. Then $\bigl(e^{A}W\bigr)' = e^{A}(W' + a_1W) = 0$, so $e^{A}W$ is constant on $I$; evaluating at $x = x_0$, where $A(x_0) = 0$, that constant is $W(x_0)$. Hence $W(x) = e^{-A(x)}W(x_0)$, which is the formula. $\square$

For $n = 2$ Step 3 is a two-line computation: $W = \varphi_1\varphi_2' - \varphi_1'\varphi_2$ gives $W' = \varphi_1\varphi_2'' - \varphi_1''\varphi_2$, and substituting $\varphi_j'' = -a_1\varphi_j' - a_2\varphi_j$ makes the $a_2$ terms cancel, leaving $W' = -a_1W$.
:::

:::statement[Inhomogeneous equations]{provenance=adapted src="coddington-1989:Ch. 3, §6, p. 122 and Thm 11, p. 123; rhb-2006:§15.1, Eq. (15.7), p. 492"}
Let $b$ be continuous on $I$, let $\varphi_p$ be one solution of $L(y) = b$ on $I$, and let $\varphi_1, \dots, \varphi_n$ be a fundamental set for $L(y) = 0$ on $I$. Then the solutions of $L(y) = b$ on $I$ are exactly the functions

$$
\varphi \;=\; \varphi_p + c_1\varphi_1 + \cdots + c_n\varphi_n ,
$$

$c_1, \dots, c_n$ constants, and the constants are uniquely determined by $\varphi$. In the physicists' names: the general solution is a **particular integral** plus the **complementary function**, the latter carrying the $n$ arbitrary constants that the initial or boundary conditions fix.
:::

:::proof{provenance=adapted src="coddington-1989:Ch. 3, §6, p. 122"}
If $\varphi$ solves $L(y) = b$, then by linearity $L(\varphi - \varphi_p) = b - b = 0$, so $\varphi - \varphi_p$ is a solution of the homogeneous equation and the structure theorem writes it as $\sum_k c_k\varphi_k$ with unique constants. Conversely, if $\varphi = \varphi_p + \sum_k c_k\varphi_k$ then $L(\varphi) = L(\varphi_p) + \sum_k c_k L(\varphi_k) = b + 0 = b$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$a_0 \ne 0$ on $I$ is essential, not cosmetic.** Take $x^2y'' - 2xy' + 2y = 0$ on $I = \mathbb{R}$, whose leading coefficient vanishes at $x = 0$. Both $\varphi_1(x) = x$ and $\varphi_2(x) = x^2$ are solutions on $\mathbb{R}$, and they are linearly independent there, yet

  $$
  W(\varphi_1, \varphi_2)(x) = x\cdot 2x - 1 \cdot x^2 = x^2
  $$

  vanishes at $x = 0$: statements 2 and 3 of the Wronskian criterion fail. Part 2 of the structure theorem fails in both directions at the same point. Existence fails because setting $x = 0$ in the equation leaves $2y(0) = 0$, so *every* solution on an interval containing $0$ — not merely those of the form $c_1x + c_2x^2$ — has $\varphi(0) = 0$, and the initial-value problem with $\varphi(0) = 1$ has no solution. Uniqueness fails because the data $\varphi(0) = \varphi'(0) = 0$ are satisfied by $c_2x^2$ for every $c_2$. Away from the singular point, say on $I = (0, \infty)$, the theory applies in full: there $W = x^2 \neq 0$ and $\{x, x^2\}$ is a fundamental set (see :ref[]{to=ode.euler-equation}).
- **Continuity of the $a_k$ on the whole of $I$** is what makes Step 2 give a solution on all of $I$ rather than only near $x_0$. This is special to linear equations: nonlinear equations can lose their solutions in finite time even with smooth data.
- **The criterion is about solutions of one equation.** For functions that are not solutions of a common linear equation, a Wronskian vanishing identically does *not* imply dependence. On $I = (-1, 1)$ put $f_1(x) = x^2$ and $f_2(x) = x|x|$. Both are differentiable, $f_2' = 2|x|$, so

  $$
  W(f_1, f_2) = x^2 \cdot 2|x| - 2x \cdot x|x| = 0
  $$

  identically, yet $f_1, f_2$ are independent on $I$: $c_1f_1 + c_2f_2 = 0$ at $x = \tfrac12$ and at $x = -\tfrac12$ gives $c_1 + c_2 = 0$ and $c_1 - c_2 = 0$. The two functions cannot both be solutions of a normalised second-order equation on $I$, and indeed the equation they do satisfy is the singular one above, $x^2y'' - 2xy' + 2y = 0$ — and only for $x \neq 0$, since $f_2 = x|x|$ has no second derivative at the origin. This example is :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="p. 187"}.
- **How the books phrase that warning.** We follow :cite{work=coddington-1989 loc="Ch. 3, Thm 6, pp. 111-112"} and :cite{work=stakgold-holst-2011 loc="Thm 3.1.2, pp. 187-188"} in stating the equivalence only for $n$ solutions of $L(y) = 0$. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 491"} give the same direction we use (a nonvanishing Wronskian implies independence) and warn that a Wronskian which vanishes is not by itself evidence of dependence. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§7.6, pp. 359-360"} do assert that functions whose Wronskian is zero over the entire range are linearly dependent, but their footnote to that assertion assumes continuous derivatives and that at least one minor of the bottom row does not vanish on the interval; the $x^2, x|x|$ pair fails that extra condition. :cite[Hassani]{work=hassani-2013 loc="Thm 14.4.3, p. 425"} states the equivalence for two differentiable functions that are nonzero in the interval, a hypothesis the pair also fails.
- **Abel's formula needs no independence.** It holds for any $n$ solutions. If they are dependent, $W(x_0) = 0$ and the formula correctly returns $W \equiv 0$.
:::

:::example[A fundamental set for Legendre's equation with $\ell = 1$]{provenance=original}
Take

$$
(1 - x^2)\,y'' - 2x\,y' + 2y = 0 \qquad \text{on } I = (-1, 1) .
$$

The leading coefficient $1 - x^2$ is nonzero on $I$, and dividing by it gives the normalised coefficients

$$
a_1(x) = \frac{-2x}{1 - x^2}, \qquad a_2(x) = \frac{2}{1 - x^2} ,
$$

both continuous on $I$. So the solution space on $I$ has dimension $2$.

1. **Two solutions.** By inspection $\varphi_1(x) = x$ solves the equation: $y'' = 0$ and $-2x + 2x = 0$. A second solution, obtained from the first by :ref[reduction of order]{to=ode.reduction-of-order}, is

   $$
   \varphi_2(x) = \frac{x}{2}\,\ln\frac{1 + x}{1 - x} - 1 .
   $$

   Check it directly: with $L = \ln\frac{1+x}{1-x}$ one has $L' = \frac{2}{1 - x^2}$, so $\varphi_2' = \tfrac12 L + \frac{x}{1 - x^2}$ and $\varphi_2'' = \frac{1}{1-x^2} + \frac{1 + x^2}{(1 - x^2)^2}$, and substituting gives $0$.
2. **Wronskian, computed directly.**

   $$
   W = \varphi_1\varphi_2' - \varphi_1'\varphi_2
     = x\left(\tfrac12 L + \frac{x}{1 - x^2}\right) - \left(\tfrac{x}{2}L - 1\right)
     = \frac{x^2}{1 - x^2} + 1 = \frac{1}{1 - x^2} .
   $$

   The $L$ terms cancel, as they must: the Wronskian of two solutions is far simpler than either solution.
3. **Wronskian, from Abel's formula.** With $x_0 = 0$,

   $$
   -\int_0^x a_1(t)\,dt = \int_0^x \frac{2t}{1 - t^2}\,dt = -\ln(1 - x^2) ,
   $$

   so $W(x) = W(0)/(1 - x^2)$. Since $\varphi_1(0) = 0$, $\varphi_1'(0) = 1$, $\varphi_2(0) = -1$, $\varphi_2'(0) = 0$, we get $W(0) = 0\cdot 0 - 1 \cdot(-1) = 1$ and $W(x) = 1/(1 - x^2)$, agreeing with step 2. This is also the self-adjoint case of Abel's formula: the equation is $\bigl((1 - x^2)y'\bigr)' + 2y = 0$, so $W = C/p$ with $p = 1 - x^2$ and $C = 1$.
4. **Fundamental set.** $W(0) = 1 \neq 0$, so by the Wronskian criterion $\{\varphi_1, \varphi_2\}$ is a fundamental set on $(-1,1)$, and $W$ is nonvanishing on all of $(-1,1)$ — as the closed form confirms.
5. **Solving an initial-value problem.** For $\varphi(0) = 2$, $\varphi'(0) = 3$, write $\varphi = c_1\varphi_1 + c_2\varphi_2$. The data give $-c_2 = 2$ and $c_1 = 3$, so

   $$
   \varphi(x) = 3x - 2\left(\frac{x}{2}\ln\frac{1+x}{1-x} - 1\right) = 3x + 2 - x\,\ln\frac{1+x}{1-x} .
   $$

   At $x = \tfrac12$ this is $3.5 - \tfrac12\ln 3 = 2.950\,69$ to six significant figures ($2.950\,693\,856$ to ten).
6. **What breaks at $x = \pm 1$.** The normalised coefficients blow up there, the solution space on an interval containing $x = 1$ is not described by the theorem, and indeed $\varphi_2$ is unbounded as $x \to 1^-$ while $\varphi_1$ is not. The Wronskian $1/(1 - x^2)$ diverges at the same places, which is Abel's formula telling us where the trouble is without our having to find the solutions.
:::

:::application{provenance=original}
Three uses, in increasing order of depth.

**Counting the constants.** A physicist writing down a linear model of order $n$ — a beam equation, an RLC circuit, a linearised normal-mode problem — knows before doing any work that the general solution carries exactly $n$ arbitrary constants, and therefore that exactly $n$ conditions (initial values, or boundary values at two ends) are needed and that more than $n$ will generally be inconsistent. The dimension theorem is what licenses the superposition of normal modes: because the solution space is finite-dimensional with a basis, decomposing an arbitrary motion into modes is a change of basis, not an approximation.

**The Wronskian in the denominator.** The Wronskian of a fundamental set is the determinant that must be inverted when a particular solution is built from the homogeneous ones, so it appears in the denominator of :ref[variation of parameters]{to=ode.variation-of-parameters} and in the normalisation of :ref[the one-dimensional Green's function]{to=green.green-function-bvp}. Abel's formula makes that denominator explicit before the solutions are known: for the self-adjoint equation $(p\,y')' + q\,y = 0$, $W = C/p$, which is why Green's functions for Sturm-Liouville operators carry a factor $1/(p\,W)$ that is simply a constant.

**Constancy of the Wronskian in quantum mechanics.** The time-independent Schrodinger equation $-\frac{\hbar^2}{2m}\psi'' + V(x)\psi = E\psi$ has no first-derivative term, so $a_1 = 0$ and the Wronskian of any two solutions is constant in $x$. Several standard facts are this statement in disguise: the probability current of a stationary state is $x$-independent; the transmission and reflection amplitudes of a one-dimensional barrier satisfy $|t|^2 + |r|^2 = 1$, obtained by equating the constant Wronskian of the incoming and outgoing asymptotic forms on the two sides of the barrier; and a bound state, which decays at both ends, forces the Wronskian to vanish, so the decaying solutions at the two ends must be proportional — which is exactly the quantisation condition that selects the allowed energies.
:::
