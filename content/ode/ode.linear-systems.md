---
id: ode.linear-systems
title: Linear systems and the matrix exponential
kind: method
level: core
summary: Gives the solution of the first-order linear system x' = A(t)x in terms of a fundamental matrix, shows that for constant A the fundamental matrix is exp(tA) and the unique solution of the initial-value problem is exp(tA)x_0, and turns this into a recipe that reads the solution off the eigenvalues and eigenvectors of A, including the two real solutions carried by each complex conjugate pair.
prereqs: [linalg.matrix-exponential, ode.linear-ode-theory, linalg.eigenvalues-eigenvectors, linalg.jordan-form, ode.existence-uniqueness, linalg.determinants, linalg.linear-systems, linalg.normal-modes]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "Ch. 6, §7, Theorem 6, p. 256 (existence and uniqueness for a linear system on any interval on which the coefficients are continuous), and §8, the reduction of an n-th order equation to a first-order system, with Theorems 7 and 8, pp. 258-260"
    pages: "256, 258-260"
    role: the existence-and-uniqueness theorem for linear systems, with its hypotheses and its non-local conclusion; the reduction of a scalar n-th order equation to a system
  - work: dummit-foote-2004
    loc: "§12.3, Exercises 52-57 and the discussion around them, pp. 505-507: the first-order system (*) with constant coefficients, set up at the foot of p. 505; in the discussion between Exercises 52 and 53, p. 506, the definition of a fundamental matrix of y' = Ay and the statement that the solutions form an n-dimensional vector space; Exercise 53, that exp(At) is a fundamental matrix and y(t) = exp(At)C solves the initial-value problem; Exercise 54, that MQ is again a fundamental matrix for nonsingular constant Q; and p. 507, the companion-matrix form of the system attached to a scalar equation"
    pages: "505-507"
    role: the definition of a fundamental matrix and the facts about it that this unit states; the companion-matrix remark
  - work: hirsch-smale-devaney-2013
    loc: "§6.4, the Theorem on p. 129 (X(t) = exp(tA)X_0 is the solution of X' = AX, X(0) = X_0, and the only one); §6.1, the general solution as a sum of c_j exp(lambda_j t)V_j for n distinct real eigenvalues, p. 108, and the Theorem on p. 111 giving the general solution when some of the n distinct eigenvalues are complex, in the real canonical form; §3.2, the extraction of two real solutions from one complex solution of a planar system, pp. 44-47"
    pages: "44-47, 108, 111, 129"
    role: the exponential solution of the constant-coefficient initial-value problem and its uniqueness; the eigenvector form of the general solution for distinct eigenvalues; the real-and-imaginary-part device for complex eigenvalues
---

:::definition[The system, its fundamental matrices and its propagator]{provenance=adapted src="dummit-foote-2004:§12.3, the discussion between Exercises 52 and 53, pp. 505-506"}
Fix an interval $I \subseteq \mathbb{R}$ together with an $n \times n$ matrix $A(t)$ whose entries are continuous complex-valued functions of $t \in I$. The **homogeneous linear system** is

$$
x'(t) = A(t)\, x(t) ,
$$

where a **solution** is a differentiable function $x : I \to \mathbb{C}^n$ satisfying this identity at every $t \in I$; derivatives and integrals of vector- and matrix-valued functions are taken entry by entry. When $A$ does not depend on $t$ the system is said to have **constant coefficients**, and we write it $x' = Ax$.

An $n \times n$ matrix-valued function $\Phi$ on $I$ whose $n$ columns are linearly independent solutions of the system is called a **fundamental matrix** of it. Equivalently — reading the defining equation column by column — $\Phi$ satisfies the matrix differential equation

$$
\Phi'(t) = A(t)\, \Phi(t)
$$

and its columns are linearly independent as functions on $I$. If moreover $\Phi(t_0) = I_n$ for a chosen $t_0 \in I$, we call $\Phi$ the **principal fundamental matrix at $t_0$**. (Throughout the unit $I_m$ denotes the $m \times m$ identity matrix, the letter $I$ without a subscript being reserved for the interval.) The two-variable matrix

$$
U(t, t_0) = \Phi(t)\, \Phi(t_0)^{-1}
$$

built from any fundamental matrix is called the **propagator** (or state-transition matrix) of the system: the statements below show that it does not depend on which $\Phi$ was used, and that it carries the state at time $t_0$ to the state at time $t$.
:::

:::statement[Existence, uniqueness and the dimension of the solution space]{provenance=adapted src="coddington-1989:Ch. 6, §7, Theorem 6, p. 256; dummit-foote-2004:§12.3, the discussion preceding Exercise 53, p. 506"}
Let $A(t) = [a_{jk}(t)]$ and $b(t) = (b_1(t), \dots, b_n(t))$ have entries continuous on an interval $I$ containing $t_0$. For every $x_0 \in \mathbb{C}^n$ the initial-value problem

$$
x' = A(t)x + b(t), \qquad x(t_0) = x_0
$$

has one and only one solution on the whole of $I$ (:cite{work=coddington-1989 loc="Ch. 6, §7, Theorem 6, p. 256"}). Three consequences, for the homogeneous system $b \equiv 0$:

1. **The solution space.** The set of solutions of $x' = A(t)x$ on $I$ is a vector space of dimension exactly $n$ over $\mathbb{C}$, and for each fixed $t_1 \in I$ the evaluation map $x \mapsto x(t_1)$ is a linear isomorphism of it onto $\mathbb{C}^n$.
2. **Fundamental matrices are nonsingular everywhere or nowhere.** If $\Phi$ solves $\Phi' = A(t)\Phi$ on $I$, then either $\det \Phi(t) \neq 0$ for every $t \in I$, in which case $\Phi$ is a fundamental matrix, or $\det \Phi(t) = 0$ for every $t \in I$. In particular it is enough to test one point.
3. **The general solution and the propagator.** If $\Phi$ is a fundamental matrix then every solution is $x(t) = \Phi(t)c$ for exactly one constant vector $c \in \mathbb{C}^n$, the solution with $x(t_0) = x_0$ being $x(t) = \Phi(t)\Phi(t_0)^{-1}x_0$. Consequently the propagator $U(t,t_0) = \Phi(t)\Phi(t_0)^{-1}$ is the same for every fundamental matrix $\Phi$, and $\Phi Q$ is again a fundamental matrix for every nonsingular constant matrix $Q$ (:cite{work=dummit-foote-2004 loc="§12.3, Exercise 54, p. 506"}).

The interval is not shrunk anywhere: linear systems have **non-local** existence, and the solution lives as long as the coefficients are continuous. Coddington reaches it by observing that the successive-approximation proof of his local existence theorem, which is stated for an interval $|t - t_0| \le a$, goes through unchanged on an arbitrary interval $\alpha \le t \le \beta$ containing $t_0$ (:cite{work=coddington-1989 loc="Ch. 6, §7, p. 256"}); $I$ may even be infinitely long.
:::

:::idea{provenance=original}
Everything here is the single sentence "the solution is determined by its value at one instant", which is what existence and uniqueness say, read in three directions. Read as a statement about a linear map it says that evaluation at $t_1$ is injective (uniqueness) and surjective (existence) from the solution space onto $\mathbb{C}^n$, which forces the dimension to be $n$. Read as a statement about a matrix of solutions it says that a nontrivial linear relation between the columns at one instant propagates to every instant, because the solution that the relation builds vanishes at that instant and therefore vanishes identically. Read as a formula it says that the only freedom in a solution is the constant vector $c$ of coefficients, and matching $\Phi(t_0)c$ to $x_0$ fixes $c$.
:::

:::proof{provenance=original}
We take the existence-and-uniqueness theorem as given and derive parts 1-3 from it.

1. **The solution space.** The set $S$ of solutions on $I$ is a complex vector space: if $x$ and $y$ solve the system and $\alpha, \beta \in \mathbb{C}$, then $(\alpha x + \beta y)' = \alpha A x + \beta A y = A(\alpha x + \beta y)$, because differentiation is linear and $A(t)$ acts linearly. Fix $t_1 \in I$ and let $E : S \to \mathbb{C}^n$ be $E(x) = x(t_1)$, which is linear. $E$ is surjective: given $v \in \mathbb{C}^n$, the theorem applied with $t_0 = t_1$, $x_0 = v$ produces a solution on all of $I$ with that value. $E$ is injective: if $x \in S$ and $x(t_1) = 0$, then $x$ and the zero function are both solutions of the initial-value problem with data $(t_1, 0)$ — the zero function solves it because $0' = 0 = A(t)\cdot 0$ — so uniqueness gives $x \equiv 0$. A linear isomorphism onto $\mathbb{C}^n$ forces $\dim S = n$.

2. **Nonsingular everywhere or nowhere.** Suppose $\det \Phi(t_1) = 0$ for some $t_1 \in I$. Then the columns of $\Phi(t_1)$ are linearly dependent, so there is $c \neq 0$ with $\Phi(t_1)c = 0$. The function $y(t) = \Phi(t)c$ is a solution of $y' = A(t)y$, since $y' = \Phi' c = A\Phi c = Ay$ — here $c$ being constant is what lets it pass through the derivative — and $y(t_1) = 0$. By the injectivity just proved, $y \equiv 0$, that is $\Phi(t)c = 0$ for every $t$ with the same $c \neq 0$. Hence $\det \Phi(t) = 0$ for every $t \in I$. Contrapositively, if $\det$ is nonzero at one point it is nonzero at all of them; and then at each $t$ the columns of $\Phi(t)$ are independent vectors, so the columns of $\Phi$ are independent as functions and $\Phi$ is a fundamental matrix. (Conversely, if the columns are independent as functions, they cannot be dependent at any single point, by the argument just given, so the determinant never vanishes. The two descriptions of a fundamental matrix in the definition therefore agree.)

3. **The general solution.** Let $\Phi$ be a fundamental matrix and $x$ any solution. Put $c = \Phi(t_1)^{-1}x(t_1)$ for some fixed $t_1 \in I$, legitimate by part 2. Then $\Phi(t)c$ and $x(t)$ are solutions agreeing at $t_1$, so they agree on $I$ by injectivity again; and $c$ is unique because $\Phi(t_1)c = \Phi(t_1)\tilde c$ with $\Phi(t_1)$ invertible gives $c = \tilde c$. Choosing $t_1 = t_0$ and $c = \Phi(t_0)^{-1}x_0$ gives the stated formula. If $\Psi$ is another fundamental matrix, each of its columns is $\Phi(\cdot)c_j$ for some $c_j$, so $\Psi = \Phi Q$ with $Q$ the constant matrix of columns $c_j$, and $Q = \Phi(t_0)^{-1}\Psi(t_0)$ is invertible; therefore
$$
\Psi(t)\Psi(t_0)^{-1} = \Phi(t) Q Q^{-1} \Phi(t_0)^{-1} = \Phi(t)\Phi(t_0)^{-1} ,
$$
so the propagator is independent of the choice. Running this backwards, for any nonsingular constant $Q$ the matrix $\Phi Q$ satisfies $(\Phi Q)' = \Phi' Q = A \Phi Q$ and has determinant $\det \Phi \cdot \det Q \neq 0$, so it is a fundamental matrix. $\square$
:::

:::statement[Constant coefficients: the exponential is the propagator]{provenance=adapted src="hirsch-smale-devaney-2013:§6.4, the Theorem on p. 129; dummit-foote-2004:§12.3, Exercise 53, p. 506"}
Let $A$ be a constant $n \times n$ complex matrix. Then $t \mapsto \exp(tA)$ is a fundamental matrix of $x' = Ax$ on all of $\mathbb{R}$; it is the principal one at $t = 0$. The unique solution of

$$
x' = Ax , \qquad x(0) = x_0
$$

is $x(t) = \exp(tA)\,x_0$ (:cite{work=hirsch-smale-devaney-2013 loc="§6.4, Theorem, p. 129"}), and the propagator depends only on the elapsed time:

$$
U(t, t_0) = \exp\bigl((t - t_0)A\bigr) .
$$

Three readings of the same fact are worth separating. (i) *Algebraically*, $\exp(tA)$ is invertible with inverse $\exp(-tA)$, so the state can be propagated backwards as well as forwards. (ii) *Dynamically*, $U(t+s, t_0+s) = U(t, t_0)$: the system is autonomous, and only elapsed time matters. (iii) *Structurally*, $\exp\bigl((t+s)A\bigr) = \exp(tA)\exp(sA)$, so $\{\exp(tA)\}_{t \in \mathbb{R}}$ is a one-parameter group of matrices whose generator is $A$; this is the finite-dimensional case of the semigroup picture of :ref[evolution equations]{to=pde.operator-semigroups}.
:::

:::idea{provenance=original}
All of it comes from the one differentiation rule $\frac{d}{dt}\exp(tA) = A\exp(tA)$ established in :ref[the unit on the matrix exponential]{to=linalg.matrix-exponential}: that rule is literally the statement $\Phi' = A\Phi$ for $\Phi(t) = \exp(tA)$, and $\exp(0 \cdot A) = I_n$ is nonsingular, so the previous statement does the rest with no new work. The time-translation form of the propagator then follows from the product rule for exponentials of commuting matrices, since $tA$ and $-t_0A$ always commute.
:::

:::proof{provenance=adapted src="hirsch-smale-devaney-2013:§6.4, the Theorem on p. 129"}
1. **$\exp(tA)$ is a fundamental matrix.** By the properties of the exponential (:ref[matrix exponential]{to=linalg.matrix-exponential}) the matrix-valued function $\Phi(t) = \exp(tA)$ is differentiable with $\Phi'(t) = A\exp(tA) = A\Phi(t)$, so each of its columns solves $x' = Ax$. At $t = 0$ the series collapses to its first term, $\Phi(0) = I_n$, which is nonsingular, so by part 2 of the previous statement $\Phi$ is a fundamental matrix, and by construction it is principal at $t = 0$.

2. **The initial-value problem.** By part 3 of the previous statement with $t_0 = 0$, the unique solution with $x(0) = x_0$ is $\Phi(t)\Phi(0)^{-1}x_0 = \exp(tA)x_0$. This is the theorem of :cite{work=hirsch-smale-devaney-2013 loc="§6.4, p. 129"}, whose own proof is self-contained: it differentiates $\exp(tA)x_0$ to verify that it is a solution, and for uniqueness sets $z(t) = \exp(-tA)y(t)$ for a second solution $y$ and computes $z' \equiv 0$, so that $z$ is the constant $x_0$. That route needs only the differentiation rule and the invertibility of the exponential, not the dimension count of the previous statement.

3. **The propagator.** The matrices $tA$ and $-t_0A$ commute, so the product rule for exponentials of commuting matrices gives
$$
U(t,t_0) = \exp(tA)\exp(t_0A)^{-1} = \exp(tA)\exp(-t_0A) = \exp\bigl((t-t_0)A\bigr) ,
$$
using also $\exp(t_0A)^{-1} = \exp(-t_0A)$. Replacing $(t, t_0)$ by $(t+s, t_0+s)$ changes neither $t - t_0$ nor therefore $U$; and the same identity with $t_0$ replaced by $-s$ reads $\exp\bigl((t+s)A\bigr) = \exp(tA)\exp(sA)$. $\square$
:::

:::statement[Reading the solution off the spectrum]{provenance=adapted src="hirsch-smale-devaney-2013:§6.1, p. 108 and the Theorem on p. 111"}
Let $A$ be a constant $n \times n$ matrix.

1. **Eigensolutions.** If $Av = \lambda v$ with $v \neq 0$, then $x(t) = e^{\lambda t}v$ solves $x' = Ax$. Conversely every solution of the form $e^{\lambda t}v$ with $v \neq 0$ arises this way.
2. **Diagonalizable $A$.** If $A$ has eigenvectors $v_1, \dots, v_n$ forming a basis of $\mathbb{C}^n$, with $Av_j = \lambda_j v_j$, then
$$
x(t) = \sum_{j=1}^{n} c_j e^{\lambda_j t} v_j , \qquad c \in \mathbb{C}^n ,
$$
is the general solution, and $c = S^{-1}x_0$ where $S$ is the matrix with columns $v_j$. This covers in particular the case of $n$ distinct eigenvalues, in which Hirsch, Smale and Devaney obtain exactly this formula by diagonalizing and solving the decoupled system (:cite{work=hirsch-smale-devaney-2013 loc="§6.1, p. 108"}).
3. **Real form for a complex pair.** Let $A$ be real, let $\lambda = \alpha + i\beta$ with $\beta \neq 0$ be an eigenvalue and $v = p + iq$ (with $p, q \in \mathbb{R}^n$) a corresponding eigenvector. Then
$$
x_{\mathrm{re}}(t) = e^{\alpha t}\bigl( p\cos\beta t - q \sin\beta t \bigr) , \qquad
x_{\mathrm{im}}(t) = e^{\alpha t}\bigl( p\sin\beta t + q\cos\beta t\bigr)
$$
are real solutions of $x' = Ax$, they are linearly independent over $\mathbb{R}$ — and hence, both being real-valued, over $\mathbb{C}$ as well — and their complex span is the same as the complex span of the two complex eigensolutions belonging to $\lambda$ and $\bar\lambda$. They are the real and imaginary parts of $e^{\lambda t}v$, and this is the device by which real solutions are extracted from a complex one in :cite{work=hirsch-smale-devaney-2013 loc="§3.2, pp. 44-47"}.
4. **Defective $A$.** If $A$ is not diagonalizable, parts 1-3 do not supply enough solutions, and the missing ones are obtained from $\exp(tA)$ by the splitting $A = D + N$ with $D$ diagonalizable, $N$ nilpotent and $DN = ND$ (:ref[matrix exponential]{to=linalg.matrix-exponential}). Every entry of $\exp(tA)$ is then a sum of terms $(\text{polynomial in } t) \times e^{\lambda t}$ over the eigenvalues $\lambda$, the degree of the polynomial attached to $\lambda$ being at most one less than the size of the largest :ref[Jordan block]{to=linalg.jordan-form} for $\lambda$.

Hirsch, Smale and Devaney state part 2 together with part 3 in a single theorem for the case of $n$ **distinct** eigenvalues, $k_1$ of them real and $k_2$ conjugate pairs: the change of coordinates $T$ built from the eigenvectors (and from the real and imaginary parts of the complex ones) puts $A$ into a block form with the real eigenvalues on the diagonal and $2\times 2$ blocks $\begin{pmatrix} \alpha_j & \beta_j \\ -\beta_j & \alpha_j\end{pmatrix}$, and the general solution is $T$ applied to the explicit column of exponentials, sines and cosines displayed there (:cite{work=hirsch-smale-devaney-2013 loc="§6.1, Theorem, p. 111"}). The version above separates the two hypotheses, because a diagonalizable matrix with repeated eigenvalues — a real symmetric matrix, for instance — is covered by part 2 but not by a theorem that assumes the eigenvalues distinct.
:::

:::idea{provenance=original}
A single eigendirection reduces the system to one scalar equation, because along $v$ the matrix $A$ only multiplies by $\lambda$; so the whole of parts 1 and 2 is the scalar fact $x' = \lambda x \Rightarrow x = ce^{\lambda t}$, applied once per eigendirection and reassembled. Part 3 is bookkeeping with conjugation: a real matrix maps real vectors to real vectors, so it commutes with taking real and imaginary parts, and therefore the real and imaginary parts of any complex solution are separately solutions. The two real solutions so obtained are not new information — they span the same thing as the conjugate pair of complex eigensolutions — but they are the form in which an answer to a real physical problem has to be delivered.
:::

:::proof{provenance=original}
1. **Eigensolutions.** If $Av = \lambda v$, then $x(t) = e^{\lambda t}v$ has $x'(t) = \lambda e^{\lambda t} v = e^{\lambda t}(\lambda v) = e^{\lambda t}Av = A x(t)$, using the linearity of $A$ to move the scalar $e^{\lambda t}$ across it. Conversely if $x(t) = e^{\lambda t}v$ with $v \neq 0$ solves the system, then differentiating and cancelling the nonzero scalar $e^{\lambda t}$ gives $\lambda v = Av$, so $\lambda$ is an eigenvalue with eigenvector $v$.

2. **Diagonalizable $A$.** Each $e^{\lambda_j t}v_j$ is a solution by part 1, so by linearity every $\sum_j c_j e^{\lambda_j t}v_j$ is one. These exhaust the solutions by a dimension count: let $\Phi(t)$ be the matrix with columns $e^{\lambda_j t}v_j$. Then $\Phi(0) = S$, which is nonsingular because the $v_j$ form a basis, so $\Phi$ is a fundamental matrix by part 2 of the existence statement, and by part 3 of it every solution is $\Phi(t)c$ — which is the displayed sum. Setting $t = 0$ gives $x_0 = Sc$, hence $c = S^{-1}x_0$.

3. **Real form for a complex pair.** Expanding $e^{\lambda t}v$ with Euler's formula and $v = p + iq$,
$$
e^{(\alpha + i\beta)t}(p + iq) = e^{\alpha t}\bigl(\cos\beta t + i \sin\beta t\bigr)(p + iq)
= x_{\mathrm{re}}(t) + i\,x_{\mathrm{im}}(t)
$$
with $x_{\mathrm{re}}, x_{\mathrm{im}}$ exactly as displayed, and both are real because $p$, $q$, $\cos \beta t$ and $\sin\beta t$ are. Write $z(t) = e^{\lambda t}v$, a solution by part 1. Since $A$ has real entries, $A\overline{w} = \overline{Aw}$ for every $w \in \mathbb{C}^n$ — this is where the hypothesis that $A$ is real is used, and it is the only place — so taking complex conjugates in $z' = Az$ gives $\overline{z}' = A\overline{z}$: the conjugate is a solution too. Hence so are the combinations
$$
x_{\mathrm{re}} = \tfrac12(z + \overline z), \qquad x_{\mathrm{im}} = \tfrac1{2i}(z - \overline z) ,
$$
and these are the real and imaginary parts. The same two formulas, read backwards as $z = x_{\mathrm{re}} + i x_{\mathrm{im}}$ and $\overline z = x_{\mathrm{re}} - ix_{\mathrm{im}}$, show that the complex span of $\{x_{\mathrm{re}}, x_{\mathrm{im}}\}$ equals that of $\{z, \overline z\}$; and $\overline{z}(t) = e^{\bar\lambda t}\overline v$ is the eigensolution for $\bar\lambda$, since conjugating $Av = \lambda v$ gives $A \overline v = \bar\lambda \overline v$.

   For linear independence over $\mathbb{R}$, suppose $a\,x_{\mathrm{re}} + b\,x_{\mathrm{im}} = 0$ on an interval with $a, b$ real. At $t = 0$ this reads $ap + bq = 0$. Differentiating and evaluating at $t = 0$, using $x_{\mathrm{re}}'(0) = \alpha p - \beta q$ and $x_{\mathrm{im}}'(0) = \alpha q + \beta p$, gives $a(\alpha p - \beta q) + b(\alpha q + \beta p) = 0$; subtracting $\alpha$ times the first relation leaves $\beta(bp - aq) = 0$, and $\beta \neq 0$ gives $bp - aq = 0$. Combining,
$$
a(ap + bq) + b(bp - aq) = (a^2 + b^2)\,p = 0, \qquad b(ap+bq) - a(bp - aq) = (a^2+b^2)\,q = 0 .
$$
Now $p$ and $q$ cannot both be zero, since $v = p + iq \neq 0$; so $a^2 + b^2 = 0$ and hence $a = b = 0$.

   Independence over $\mathbb{C}$ follows from the real case because both functions take values in $\mathbb{R}^n$: if $a\,x_{\mathrm{re}} + b\,x_{\mathrm{im}} = 0$ with $a, b \in \mathbb{C}$, splitting that relation into its real and imaginary parts gives the two real relations $(\operatorname{Re}a)\,x_{\mathrm{re}} + (\operatorname{Re}b)\,x_{\mathrm{im}} = 0$ and $(\operatorname{Im}a)\,x_{\mathrm{re}} + (\operatorname{Im}b)\,x_{\mathrm{im}} = 0$, whose coefficients all vanish by the paragraph above; hence $a = b = 0$. This is what makes the comparison of complex spans in the previous paragraph a comparison of two-dimensional spaces.

4. **Defective $A$.** This is the content of the method for computing $\exp(tA)$ in :ref[the matrix exponential]{to=linalg.matrix-exponential}, combined with the statement above that $\exp(tA)$ is a fundamental matrix; nothing further is proved here. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **Continuity of $A$ on the whole interval** is what makes existence non-local. For the scalar system $x' = \frac{1}{1-t}x$ on $I = (-\infty, 1)$ the solution through $x(0) = 1$ is $x(t) = (1-t)^{-1}$, which blows up as $t \to 1^-$: the interval on which the coefficient is continuous is exactly the interval of existence, and no larger one is claimed.
- **Linearity** is what rules out blow-up inside $I$ and what makes the solution set a vector space. The nonlinear scalar equation $x' = x^2$ with $x(0) = 1$ has solution $(1-t)^{-1}$ although its right-hand side is continuous everywhere; so the non-local conclusion of the existence-and-uniqueness theorem — that the solution lives on the whole interval on which the coefficients are continuous — is not a consequence of continuity alone, and linearity in $x$ is what buys it.
- **$A$ real** is used only in part 3 of the spectral statement, to conjugate the equation. For complex $A$ an eigenvalue need not come with its conjugate, and there is no real form to extract.
- **$\beta \neq 0$** in part 3 is needed for the independence of $x_{\mathrm{re}}$ and $x_{\mathrm{im}}$: at $\beta = 0$ they become $e^{\alpha t}p$ and $e^{\alpha t}q$, which are dependent whenever $p$ and $q$ are parallel — as they may be for a real eigenvalue, where $v$ can be scaled to be real and $q = 0$.
- **A basis of eigenvectors** is what part 2 needs, not distinct eigenvalues. Conversely, distinctness is *sufficient* but is also strictly stronger: $A = I_2$ has a repeated eigenvalue and is diagonalizable, while $A = \begin{pmatrix} 0&1\\0&0\end{pmatrix}$ has a repeated eigenvalue and is not, and for it $\exp(tA) = \begin{pmatrix}1&t\\0&1\end{pmatrix}$ carries a solution $(t, 1)^{\mathsf T}$ that is not of the form $e^{\lambda t}v$ at all. That is why part 4 cannot be dispensed with.
- **$\Phi$ nonsingular at one point** is all that part 2 of the existence statement requires, and the conclusion genuinely uses that $\Phi$ solves the differential equation: an arbitrary matrix-valued function can of course be singular at some points and not others. For $n = 1$ this is the familiar fact that a nontrivial solution of a linear scalar equation has no zeros.
:::

:::method[Solving x' = Ax with constant A]{provenance=original}
1. **Compute the characteristic polynomial and its roots.** $p(\lambda) = \det(\lambda I_n - A)$; its roots are the eigenvalues, with algebraic multiplicities (:ref[eigenvalues and eigenvectors]{to=linalg.eigenvalues-eigenvectors}). For $2\times2$ matrices use $p(\lambda) = \lambda^2 - (\operatorname{tr}A)\lambda + \det A$.
2. **For each eigenvalue $\lambda$, solve $(A - \lambda I_n)v = 0$** and record the dimension of the kernel (the geometric multiplicity). If the geometric multiplicities add up to $n$, $A$ is diagonalizable and steps 3-4 finish the job; otherwise go to step 5.
3. **Real eigenvalue $\lambda$:** each basis vector $v$ of its eigenspace contributes the solution $e^{\lambda t}v$.
4. **Complex pair $\lambda = \alpha \pm i\beta$, $\beta > 0$, with $A$ real:** take an eigenvector $v = p + iq$ for $\alpha + i\beta$ only — the conjugate eigenvalue contributes nothing new — and write down the two real solutions
$$
e^{\alpha t}(p\cos\beta t - q\sin\beta t), \qquad e^{\alpha t}(p\sin\beta t + q\cos\beta t) .
$$
Do not also use $\alpha - i\beta$: that would double-count.
5. **Defective eigenvalue:** either compute $\exp(tA)$ by the splitting $A = D + N$ of :ref[the matrix exponential]{to=linalg.matrix-exponential} and take its columns, or build a chain of generalized eigenvectors $v_1, \dots, v_m$ with $(A - \lambda I_n)v_1 = 0$ and $(A-\lambda I_n)v_{k+1} = v_k$, which contributes the $m$ solutions
$$
e^{\lambda t}\sum_{j=0}^{k-1} \frac{t^{j}}{j!}\, v_{k-j} \qquad (k = 1, \dots, m)
$$
— that is, $e^{\lambda t}v_1$, then $e^{\lambda t}(v_2 + t v_1)$, then $e^{\lambda t}(v_3 + tv_2 + \tfrac12 t^2 v_1)$, and so on.
6. **Assemble the fundamental matrix** $\Phi(t)$ from the $n$ solutions as columns, and **check** $\det\Phi(t) \neq 0$ at the single convenient point $t = 0$.
7. **Fit the initial condition** by solving the linear system $\Phi(0)c = x_0$ (:ref[linear systems]{to=linalg.linear-systems}); the answer is $x(t) = \Phi(t)c$. Equivalently $x(t) = \Phi(t)\Phi(0)^{-1}x_0$, and $\exp(tA) = \Phi(t)\Phi(0)^{-1}$ if the exponential itself is wanted.
8. **Two cheap checks.** $x(0)$ must equal $x_0$, and $x'(0)$ must equal $Ax_0$; and $\det \exp(tA) = e^{t \operatorname{tr}A}$, so $\det\Phi(t) = \det\Phi(0)\,e^{t\operatorname{tr}A}$ (:ref[determinants]{to=linalg.determinants}).

**Reading the answer without computing it.** The real parts of the eigenvalues decide the fate of every solution: $\operatorname{Re}\lambda < 0$ for all $\lambda$ means every solution decays to $0$; one eigenvalue with $\operatorname{Re}\lambda > 0$ means almost every solution grows; $\operatorname{Im}\lambda = \pm\beta$ contributes oscillation at angular frequency $\beta$, that is period $2\pi/\beta$. Eigenvalues of very different magnitude make the system **stiff** and its numerical solution delicate (:ref[stiffness]{to=num.stiffness}); the planar case is classified completely in :ref[the classification of planar linear systems]{to=dyn.linear-planar-classification}.
:::

:::remark[Scalar equations are systems]{provenance=adapted src="coddington-1989:Ch. 6, §8, pp. 258-259; dummit-foote-2004:§12.3, Exercise 57 and the discussion preceding it, p. 507"}
A scalar equation of order $n$,

$$
y^{(n)} + a_1 y^{(n-1)} + \dots + a_{n-1}y' + a_n y = 0 ,
$$

becomes a first-order system in the vector of derivatives: setting $x = (y, y', \dots, y^{(n-1)})^{\mathsf T}$, the first $n-1$ components of $x' = Ax$ restate the definitions $x_k' = x_{k+1}$, and the last restates the equation. Coddington uses exactly this substitution to transfer existence and uniqueness from systems to $n$-th order equations (:cite{work=coddington-1989 loc="Ch. 6, §8, Theorems 7 and 8, pp. 259-260"}); Dummit and Foote note that the resulting coefficient matrix is the transpose of the companion matrix of the characteristic polynomial, and that the first row of a fundamental matrix of the system is a basis of solutions of the scalar equation (:cite{work=dummit-foote-2004 loc="§12.3, Exercise 57 and the preceding discussion, p. 507"}).

Two consequences are worth keeping. The characteristic polynomial of the companion matrix is the characteristic polynomial of the scalar equation, so "eigenvalues of $A$" and "roots of the indicial polynomial" of :ref[the constant-coefficient equation]{to=ode.constant-coefficients} are the same list, and a root of multiplicity $m$ gives a single Jordan block of size $m$. (That last point is ours, not the sources': for the matrix $A$ above, deleting the first column and the last row of $A - \lambda I_n$ leaves a triangular matrix with $1$'s on the diagonal, so $\operatorname{rank}(A - \lambda I_n) \ge n-1$ and every eigenspace is one-dimensional — a companion matrix is maximally defective, and step 5 of the method is unavoidable for a scalar equation with a repeated root.) And the Wronskian of :ref[the theory of linear equations]{to=ode.linear-ode-theory} is the determinant of the corresponding fundamental matrix, which is why the two nonvanishing criteria match. In the other direction, a system can always be *reduced* to a single scalar equation of order $n$ by elimination, but the matrix route is the one that generalizes and the one that numerical software uses.
:::

:::example[A three-dimensional system with one real and one complex pair of eigenvalues]{provenance=original}
Take the real system $x' = Ax$ with

$$
A = \begin{pmatrix} 0 & 1 & 0 \\ -5 & -2 & 1 \\ 0 & 0 & -1 \end{pmatrix} ,
\qquad
x_0 = \begin{pmatrix} 0 \\ 0 \\ 4\end{pmatrix} .
$$

Written out, this is a damped oscillator $u'' + 2u' + 5u = w$ driven by a variable $w$ that decays on its own: $x = (u, u', w)^{\mathsf T}$ with $w' = -w$.

**1. Eigenvalues (step 1).** The last row of $A$ has only the entry $-1$ on the diagonal, so expanding $\det(\lambda I_3 - A)$ along its last row gives

$$
p(\lambda) = (\lambda + 1)\bigl(\lambda^2 + 2\lambda + 5\bigr) = (\lambda+1)\bigl((\lambda+1)^2 + 4\bigr) ,
$$

using $\lambda^2 - (\operatorname{tr}B)\lambda + \det B$ with $B = \begin{pmatrix}0&1\\-5&-2\end{pmatrix}$ for the $2\times2$ block. The eigenvalues are $-1$ and $-1 \pm 2i$: three distinct values, so $A$ is diagonalizable and step 5 is not needed. All three have real part $-1$, so every solution decays like $e^{-t}$, with oscillation of period $2\pi/2 = \pi$.

**2. The real eigenvalue (steps 2-3).** Solve $(A + I_3)v = 0$:

$$
A + I_3 = \begin{pmatrix} 1 & 1 & 0 \\ -5 & -1 & 1 \\ 0 & 0 & 0\end{pmatrix}
\quad\Longrightarrow\quad
v_2 = -v_1, \quad v_3 = 5v_1 + v_2 = 4v_1 ,
$$

the first equation giving $v_2 = -v_1$ and the second then giving $v_3$. Taking $v_1 = 1$,

$$
v = (1, -1, 4)^{\mathsf T}, \qquad \text{solution } \ e^{-t}(1,-1,4)^{\mathsf T} .
$$

**3. The complex pair (step 4).** Take $\lambda = -1 + 2i$ and solve $(A - \lambda I_3)v = 0$. The third row reads $(-1 - \lambda)v_3 = 0$ with $-1-\lambda = -2i \neq 0$, so $v_3 = 0$; the first row then reads $-\lambda v_1 + v_2 = 0$, so $v_2 = \lambda v_1$. (The second row is then automatically satisfied, as it must be, since $\lambda$ is an eigenvalue.) With $v_1 = 1$,

$$
v = (1,\, -1 + 2i,\, 0)^{\mathsf T} = p + iq, \qquad p = (1,-1,0)^{\mathsf T}, \quad q = (0,2,0)^{\mathsf T} ,
$$

so $\alpha = -1$, $\beta = 2$ and step 4 gives the two real solutions

$$
e^{-t}\begin{pmatrix}\cos 2t \\ -\cos 2t - 2\sin 2t \\ 0\end{pmatrix} ,
\qquad
e^{-t}\begin{pmatrix}\sin 2t \\ -\sin 2t + 2\cos 2t \\ 0\end{pmatrix} .
$$

**4. Fundamental matrix and the initial condition (steps 6-7).** Collecting the three solutions as columns,

$$
\Phi(t) = e^{-t}\begin{pmatrix}
1 & \cos 2t & \sin 2t \\
-1 & -\cos 2t - 2\sin 2t & 2\cos 2t - \sin 2t \\
4 & 0 & 0
\end{pmatrix} ,
\qquad
\Phi(0) = \begin{pmatrix} 1 & 1 & 0 \\ -1 & -1 & 2 \\ 4 & 0 & 0\end{pmatrix} .
$$

Expanding $\det \Phi(0)$ along its last row gives $4\,(1\cdot 2 - 0\cdot(-1)) = 8 \neq 0$, so $\Phi$ is a fundamental matrix. Solving $\Phi(0)c = (0,0,4)^{\mathsf T}$: the third equation gives $4c_1 = 4$, so $c_1 = 1$; the first gives $1 + c_2 = 0$, so $c_2 = -1$; the second gives $-1 + 1 + 2c_3 = 0$, so $c_3 = 0$. Hence

$$
x(t) = \Phi(t)\begin{pmatrix}1\\-1\\0\end{pmatrix}
= e^{-t}\begin{pmatrix} 1 - \cos 2t \\ \cos 2t + 2\sin 2t - 1 \\ 4\end{pmatrix} .
$$

**5. Checks (step 8).** At $t=0$ the bracket is $(1-1,\, 1 + 0 - 1,\, 4) = (0,0,4)$, as required. The middle component must be the derivative of the first, since $x_2 = x_1'$ in this system:

$$
\frac{d}{dt}\Bigl[e^{-t}(1 - \cos 2t)\Bigr] = e^{-t}\bigl(-(1-\cos 2t) + 2 \sin 2t\bigr) = e^{-t}(\cos 2t + 2\sin 2t - 1) ,
$$

which it is. And the second equation of the system — row 2 of $A$ — namely $x_2' = -5x_1 - 2x_2 + x_3$, holds: differentiating $x_2$ gives $e^{-t}(1 + 3\cos 2t - 4 \sin 2t)$, while

$$
-5e^{-t}(1-\cos 2t) - 2e^{-t}(\cos 2t + 2 \sin 2t - 1) + 4e^{-t}
= e^{-t}\bigl((-5 + 2 + 4) + (5-2)\cos 2t - 4 \sin 2t\bigr) ,
$$

the same thing. Finally $\operatorname{tr}A = 0 + (-2) + (-1) = -3$, and indeed $\det\Phi(t) = e^{-3t}\det\Phi(0) = 8e^{-3t}$, because each of the three columns carries one factor $e^{-t}$ and the remaining determinant is the constant $8$ (its entries involve $\cos 2t$ and $\sin 2t$, but expanding along the last row leaves $4\bigl[\cos 2t(2\cos 2t - \sin 2t) - \sin 2t(-\cos 2t - 2 \sin 2t)\bigr] = 4\cdot 2 = 8$ by $\cos^2 + \sin^2 = 1$).

**6. A number.** At $t = \pi/4$ we have $\cos(\pi/2) = 0$ and $\sin(\pi/2) = 1$, so

$$
x(\pi/4) = e^{-\pi/4}\,(1,\ 1,\ 4)^{\mathsf T} \approx (0.4559381,\ 0.4559381,\ 1.8237525)^{\mathsf T} .
$$

The displacement and the velocity happen to coincide a quarter of the way into the first oscillation.

**7. The exponential, if it is wanted.** $\exp(tA) = \Phi(t)\Phi(0)^{-1}$, and $\Phi(0)^{-1} = \tfrac18\begin{pmatrix}0 & 0 & 2 \\ 8 & 0 & -2 \\ 4 & 4 & 0\end{pmatrix}$, as one checks by multiplying out. Note that the solution above was obtained without ever forming this product: eigenvectors answer the initial-value problem directly, and the exponential is needed only when the propagator itself is the object of interest — as it is in the forced problem of :ref[nonhomogeneous systems]{to=ode.nonhomogeneous-systems}.
:::

:::application{provenance=original}
- **Small oscillations of a mechanical or electrical network.** A conservative system linearized about equilibrium obeys $M\ddot q + Kq = 0$ with $M$ positive definite and $K$ symmetric; written as a first-order system in $(q, \dot q)$ it is $x' = Ax$ with $A = \begin{pmatrix}0 & I_n \\ -M^{-1}K & 0\end{pmatrix}$. Its eigenvalues satisfy $\lambda^2 = -\omega^2$, where $\omega^2$ runs over the eigenvalues of $M^{-1}K$ (all real, since $M^{-1}K$ is self-adjoint for the inner product $\langle u, v\rangle_M = u^{\mathsf T}Mv$). At a stable equilibrium $K$ is positive definite as well as symmetric; then every $\omega^2 > 0$, each $\pm i\omega$ is a conjugate pair on the imaginary axis, and step 4 of the method produces exactly the normal modes of :ref[normal modes]{to=linalg.normal-modes}, one mode per pair, oscillating at its own frequency $\omega$. The two degenerate possibilities a merely symmetric $K$ allows are worth naming: $\omega^2 = 0$ gives a double eigenvalue $\lambda = 0$ with a defective block, hence a solution drifting linearly in $t$ (a zero mode, such as a rigid translation), and $\omega^2 < 0$ gives the *real* pair $\lambda = \pm|\omega|$, an unstable direction growing exponentially rather than a mode. Adding linear damping moves an imaginary pair off the axis to the left, and its real part is the decay rate of that mode.
- **Stability of a steady state of a nonlinear system.** Near an equilibrium $x_*$ of $x' = f(x)$ the deviation obeys $\xi' = Df(x_*)\xi$ to first order. The eigenvalues of the Jacobian therefore decide local stability, by the reading given at the end of the method, and this is the content of :ref[linearization]{to=dyn.linearization}: a sink when all real parts are negative, a saddle when they have both signs, oscillatory approach when there are complex pairs. The borderline cases — a purely imaginary pair, a zero eigenvalue — are precisely the ones the linear system cannot settle, and are where bifurcations occur.
- **Relaxation in coupled compartments.** First-order chemical kinetics, radioactive decay chains, heat exchange between lumped bodies and linear pharmacokinetic models all have the form $c' = Ac$ with $A$ a matrix of rate constants whose columns sum to zero when the total amount is conserved. That column sum makes $(1,\dots,1)$ a left null vector, so $0$ is an eigenvalue and the corresponding eigenvector is the equilibrium distribution; the remaining eigenvalues, necessarily with negative real parts for a stable network, are the relaxation rates measured in a kinetics experiment. The same matrix structure, transposed, is the generator of a :ref[continuous-time Markov chain]{to=prob.continuous-time-markov-chains}: with $Q = A^{\mathsf T}$, which has zero *row* sums, $\exp(tQ) = \exp(tA)^{\mathsf T}$ is the matrix of transition probabilities over time $t$.
- **Why software solves systems, not high-order equations.** Every numerical integrator in use — Runge-Kutta, multistep, implicit — is written for first-order systems, so the reduction of the remark above is the first thing done to an $n$-th order equation before it is handed to :ref[an ODE integrator]{to=num.ode-integrators}. The eigenvalues of $A$ also set the step size an explicit method can take: the product of the step with the largest $|\lambda|$ must stay inside the method's stability region, which is why a system with widely separated eigenvalues is expensive to integrate explicitly.
:::
