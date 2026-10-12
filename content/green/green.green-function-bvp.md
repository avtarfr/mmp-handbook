---
id: green.green-function-bvp
title: Green's function for a boundary-value problem
kind: theorem
level: core
summary: Defines the Green's function of a second-order two-point boundary-value problem by the homogeneous equation off the source point, continuity, the jump $1/a_2(\xi)$ in the first derivative and the homogeneous boundary conditions; derives the jump from $LG = \delta$, constructs $G$ explicitly from two homogeneous solutions and their Wronskian, proves that $u(x) = \int_a^b G(x,\xi)f(\xi)\,d\xi$ is the unique solution, and proves the reciprocity relation $G^*(x,\xi) = G(\xi,x)$ and hence the symmetry of $G$ for a self-adjoint problem.
prereqs: [ode.self-adjoint-operators, vcalc.dirac-delta-basics, ode.linear-ode-theory, ode.existence-uniqueness]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§3.2, pp. 191–200: the boundary-value problem (3.2.1)–(3.2.2) and its boundary functionals; the uniqueness dichotomy on p. 192; Examples 1–2, p. 193; the definition (3.2.7)–(3.2.8) of Green's function on p. 194; the construction for unmixed conditions and formula (3.2.9) with its self-adjoint form (3.2.10), pp. 194–195; the representation (3.2.14) and Theorem 3.2.1 with its Remark 1, pp. 196–197; Green's formula (3.2.19)–(3.2.21) and the definition of a self-adjoint problem, pp. 197–198; the adjoint Green's function, the relation (3.2.25), the symmetry (3.2.26) and the reciprocity principle, pp. 199–200. Also §3.1, Abel's formula (3.1.7)–(3.1.8), p. 187"
    pages: "187, 191-200"
    role: the whole framework — problem class, definition of $G$, explicit construction, representation theorem, and the reciprocity/symmetry theorem with its proof route
  - work: arfken-2013
    loc: "§10.1, pp. 448–453: Eqs. (10.5)–(10.7) (the self-adjoint ODE, $LG = \\delta$ and $y = \\int Gf$); the integration across the source, Eqs. (10.8)–(10.9), giving the jump $1/p(t)$; the symmetry (10.15); the two-sided form (10.18)–(10.19) and the verification on pp. 450–451 that $\\int G f$ solves the equation; Example 10.1.1; the remarks on inhomogeneous boundary conditions and on initial-value problems, pp. 452–453. Also Exercise 10.1.6, p. 457, with its Note that the two needed solutions of $L=0$ are linearly dependent"
    pages: "448-453, 457"
    role: the derivation of the jump condition, and the route used here to verify the representation formula by differentiating the two-piece integral
  - work: rhb-2006
    loc: "§15.2.5, pp. 511–513: Eqs. (15.59)–(15.62) (why $LG = \\delta$ is the right equation), the integration (15.63)–(15.65) across $x = z$ for an $n$th-order operator, and the three-point summary (i)–(iii) of the properties of $G$ on pp. 512–513"
    pages: "511-513"
    role: the motivation of $LG = \delta$ from the sifting property, and the $n$th-order form of the continuity and jump conditions
  - work: hassani-2013
    loc: "§20.3, pp. 617–623: the four standard boundary conditions making a second-order operator self-adjoint, p. 617; Lemma 20.3.1 (invertibility needs homogeneous boundary conditions) and Definition 20.3.2 of the Green's function with the weight $w$, pp. 617–618; Propositions 20.3.3–20.3.4 (the adjoint boundary conditions in the second argument, and symmetry), p. 619; the continuity argument and the jump formula (20.33), pp. 619–621; Theorem 20.3.5 on existence and uniqueness, p. 621"
    pages: "617-623"
    role: the argument that $G$ itself must be continuous, the existence-and-uniqueness statement, and the weighted convention recorded in the remark on conventions
---

:::definition[The boundary-value problem, and its Green's function]{provenance=adapted src="stakgold-holst-2011:§3.2, (3.2.1)–(3.2.2) pp. 191–192 and (3.2.7)–(3.2.8) p. 194; rhb-2006:§15.2.5, (15.59)–(15.62) and the summary (i)–(iii), pp. 511–513; arfken-2013:§10.1, Eqs. (10.5)–(10.6), p. 448"}
Throughout, $a \le x \le b$ is a bounded closed interval and

$$
Lu \;=\; a_2(x)\,u'' + a_1(x)\,u' + a_0(x)\,u ,
$$

where $a_0, a_1, a_2$ are continuous on $a \le x \le b$ and $a_2(x) \ne 0$ there. (Stakgold and Holst's (3.2.1) asks a little less: continuity of the coefficients on the *open* interval $a < x < b$, with $a_2 \ne 0$ on the closed one. We follow Hassani in asking for continuity up to the endpoints, because the proof of the jump condition below uses boundedness of $a_1/a_2$ and $a_0/a_2$ on a closed neighbourhood of the source; nothing else in the unit needs the extra strength.) The data are a forcing function $f$, piecewise continuous on $a \le x \le b$, and two numbers $\gamma_1,\gamma_2$ prescribed through two **boundary functionals**

$$
\begin{aligned}
B_1u &= \alpha_{11}u(a) + \alpha_{12}u'(a) + \beta_{11}u(b) + \beta_{12}u'(b) ,\\
B_2u &= \alpha_{21}u(a) + \alpha_{22}u'(a) + \beta_{21}u(b) + \beta_{22}u'(b) ,
\end{aligned}
$$

whose coefficient rows $(\alpha_{11},\alpha_{12},\beta_{11},\beta_{12})$ and $(\alpha_{21},\alpha_{22},\beta_{21},\beta_{22})$ are independent, so that the two conditions are genuinely different. The **boundary-value problem** (BVP) is

$$
Lu = f \ \ (a < x < b), \qquad B_1u = \gamma_1, \quad B_2u = \gamma_2 .
$$

The conditions are **unmixed** when each involves only one endpoint, that is $\beta_{11} = \beta_{12} = \alpha_{21} = \alpha_{22} = 0$; then $B_1u = \alpha_{11}u(a) + \alpha_{12}u'(a)$ and $B_2u = \beta_{21}u(b) + \beta_{22}u'(b)$. The **completely homogeneous problem** is the one with data $\{0;0,0\}$.

Unlike an initial-value problem, a BVP may have no solution or many. Since the difference of two solutions with the same data solves the completely homogeneous problem, the alternative is sharp: *if the completely homogeneous problem has only $u \equiv 0$, the BVP has at most one solution; if it has a nontrivial solution, the BVP has either none or many.* **For the rest of this unit we assume the completely homogeneous problem admits no nontrivial solution**; the other case is :ref[the Fredholm alternative]{to=green.fredholm-alternative}.

**Green's function.** Write $x_{<} = \min(x,\xi)$ and $x_{>} = \max(x,\xi)$. The **Green's function** $G(x,\xi)$ of the problem $(L;B_1,B_2)$ is, for each fixed source point $\xi$ in $a < \xi < b$, the function of $x$ satisfying

1. $LG = 0$ on $a < x < \xi$ and on $\xi < x < b$;
2. $B_1G = 0$ and $B_2G = 0$, the functionals acting on $x$;
3. $G$ is continuous at $x = \xi$;
4. $\displaystyle \left.\frac{\partial G}{\partial x}\right|_{x=\xi^+} - \left.\frac{\partial G}{\partial x}\right|_{x=\xi^-} = \frac{1}{a_2(\xi)}$.

Conditions 1, 3 and 4 are Stakgold and Holst's (3.2.7), and together they are abbreviated by the single equation

$$
LG(x,\xi) = \delta(x - \xi), \qquad B_1G = B_2G = 0 ,
$$

their (3.2.8), with $\delta$ the :ref[Dirac delta]{to=vcalc.dirac-delta-basics}, the equation being read in the sense of distributions in $x$. The next statement goes one way round this equivalence: it derives 3 and 4 from the delta equation, given 1. The converse — that a function with properties 1, 3 and 4 satisfies $LG = \delta$ distributionally — is a matter of running the same computation backwards and is not carried out here. Physically, $G(x,\xi)$ is the response at $x$, under homogeneous boundary conditions, to a unit source concentrated at $\xi$.

Note that the boundary conditions must be **homogeneous** for a Green's function to exist at all: $G$ is to act as an inverse of $L$, and an inverse sends $0$ to $0$, which forces $B_i[0] = 0$ (Hassani's Lemma 20.3.1). Inhomogeneous boundary data are handled afterwards, by superposition.
:::

:::statement[Continuity and the jump condition]{provenance=adapted src="arfken-2013:§10.1, Eqs. (10.8)–(10.9), p. 449; rhb-2006:§15.2.5, Eqs. (15.63)–(15.65) and the summary (iii), pp. 512–513; hassani-2013:§20.3.1, pp. 619–621, Eq. (20.33)"}
Let $G(\cdot,\xi)$ satisfy $LG = \delta(\cdot-\xi)$ **as a distribution on $(a,b)$**, and suppose in addition that $G$ is twice continuously differentiable on each of $[a,\xi)$ and $(\xi,b]$ — so that, the delta being supported at $\xi$ alone, $LG = 0$ in the classical sense on each side — and that $G$ and $\partial G/\partial x$ have one-sided limits at $\xi$. Both halves of this hypothesis are needed: without the delta equation the conclusion is false, since $G \equiv 0$ meets everything else. Then

$$
G(\xi^+,\xi) = G(\xi^-,\xi),
\qquad
\left.\frac{\partial G}{\partial x}\right|_{\xi^+} - \left.\frac{\partial G}{\partial x}\right|_{\xi^-} = \frac{1}{a_2(\xi)} .
$$

That is: $G$ is continuous across the source and its first derivative jumps by $1/a_2(\xi)$. For the self-adjoint form $L = (p\,u')' + q\,u$ used by Arfken, $a_2 = p$ and the jump is $1/p(\xi)$, his Eq. (10.9).

For an operator of order $n$ with leading coefficient $a_n$, Riley, Hobson and Bence obtain the analogue: across $x=\xi$ every $x$-derivative of $G$ of order $n-2$ or less stays continuous, and the one of order $n-1$ jumps by $1/a_n(\xi)$.
:::

:::statement[Existence, uniqueness and explicit construction]{provenance=adapted src="stakgold-holst-2011:§3.2, pp. 194–195, construction for unmixed conditions and Eqs. (3.2.9)–(3.2.10); hassani-2013:§20.3.2, Theorem 20.3.5, p. 621"}
Assume the completely homogeneous problem admits no nontrivial solution, and let the boundary conditions be unmixed. Then the Green's function exists, is unique, and is given by

$$
\boxed{\;G(x,\xi) \;=\; \frac{u_1(x_{<})\,u_2(x_{>})}{a_2(\xi)\,W(u_1,u_2;\xi)}\;}
$$

where

- $u_1$ is any nontrivial solution of $Lu = 0$ with $B_1u_1 = 0$ (the condition at $x=a$),
- $u_2$ is any nontrivial solution of $Lu = 0$ with $B_2u_2 = 0$ (the condition at $x=b$),
- $W(u_1,u_2;x) = u_1(x)u_2'(x) - u_1'(x)u_2(x)$ is their Wronskian, which vanishes nowhere.

This is Stakgold and Holst's (3.2.9). The formula does not depend on the normalisation of $u_1$ and $u_2$, because rescaling either one rescales the numerator and the Wronskian by the same factor.

If $L$ is formally self-adjoint, $L = L^*$, equivalently $a_2' = a_1$ and $L = (a_2u')' + a_0u$, then Abel's formula gives $W(u_1,u_2;x) = C/a_2(x)$ for a constant $C$ determined by the chosen $u_1,u_2$, so the prefactor is constant and

$$
G(x,\xi) = \frac{1}{C}\,u_1(x_{<})\,u_2(x_{>}) ,
$$

their (3.2.10). Uniqueness holds for general (possibly mixed) boundary conditions too, and so does existence; Hassani's Theorem 20.3.5 states existence and uniqueness for a general second-order operator under the same hypothesis that $Lu=0$ with the given homogeneous boundary conditions has no nontrivial solution.
:::

:::statement[The Green's function solves the problem]{provenance=adapted src="stakgold-holst-2011:§3.2, Eq. (3.2.14) and Theorem 3.2.1 with Remark 1, pp. 196–197; arfken-2013:§10.1, Eqs. (10.7) and (10.20)–(10.23), pp. 448, 451"}
Under the same hypotheses, for every piecewise continuous $f$ the problem

$$
Lu = f \ \ (a<x<b), \qquad B_1u = 0, \quad B_2u = 0
$$

is solvable, and its solution is unique; it is

$$
u(x) \;=\; \int_a^b G(x,\xi)\,f(\xi)\,d\xi .
$$

For unmixed conditions this reads, with $\sigma(\xi) = \bigl[a_2(\xi)W(u_1,u_2;\xi)\bigr]^{-1}$,

$$
u(x) \;=\; u_2(x)\int_a^x \sigma(\xi)\,u_1(\xi) f(\xi)\, d\xi \;+\; u_1(x)\int_x^b \sigma(\xi)\,u_2(\xi) f(\xi)\, d\xi .
$$

The map $f \mapsto u$ is linear, and it inverts $L$ on the set of twice continuously differentiable functions obeying the two homogeneous boundary conditions: one integral operator with kernel $G$ answers *every* forcing function at once. Stakgold and Holst's Theorem 3.2.1 covers inhomogeneous boundary data as well, by adding to the integral a combination of $u_1$ and $u_2$ fixed by $\gamma_1,\gamma_2$; the method block below records the recipe.
:::

:::statement[Reciprocity, and symmetry in the self-adjoint case]{provenance=adapted src="stakgold-holst-2011:§3.2, Eqs. (3.2.23)–(3.2.26) and the reciprocity principle, pp. 199–200; arfken-2013:§10.1, Eq. (10.15), p. 450; hassani-2013:§20.3.1, Propositions 20.3.3 and 20.3.4, p. 619"}
Let $L^*$ be the formal adjoint of $L$,

$$
L^*v = a_2 v'' + \bigl(2a_2' - a_1\bigr)v' + \bigl(a_2'' - a_1' + a_0\bigr)v ,
$$

defined (for coefficients in $C^2$) by **Green's formula**

$$
\int_a^b \bigl( v\,Lu - u\,L^*v \bigr)\, dx \;=\; \Bigl[\,J(u,v)\,\Bigr]_a^b ,
\qquad
J(u,v) = a_2\bigl(vu' - uv'\bigr) + \bigl(a_1 - a_2'\bigr)uv .
$$

Let $M$ be the set of functions obeying $B_1u = B_2u = 0$, and let the **adjoint boundary conditions** $B_1^*v = B_2^*v = 0$ define the set $M^*$ of all $v$ with $\bigl[J(u,v)\bigr]_a^b = 0$ for every $u \in M$. Let $G$ be the Green's function of $(L;B_1,B_2)$ and $G^*$ the **adjoint Green's function**, the solution of

$$
L^*G^*(x,\xi) = \delta(x-\xi), \qquad B_1^*G^* = B_2^*G^* = 0 .
$$

Then

$$
G^*(x,\xi) \;=\; G(\xi,x) .
$$

Equivalently: $G(x,\xi)$ solves the direct problem in its first argument and the adjoint problem in its second, so it obeys the adjoint boundary conditions in $\xi$ (Hassani's Proposition 20.3.3). In particular, if the problem is **self-adjoint** — meaning both $L^* = L$ and $M^* = M$ — then $G^* = G$ by uniqueness and

$$
G(x,\xi) = G(\xi,x) .
$$

A warning about the star. Throughout this unit $G^*$ means the *adjoint* Green's function, as it does in Stakgold and Holst. Arfken's (10.15), $G(x,t) = G(t,x)^*$, uses the same symbol for complex conjugation: he works with a Hermitian $L$, for which the adjoint problem is the original one, and records the symmetry of the kernel under conjugation. The two statements agree for a self-adjoint problem with real coefficients, where both reduce to $G(x,\xi) = G(\xi,x)$, but the symbol is not doing the same work in the two books.

Stakgold and Holst call this the **reciprocity principle**: the response at $x$ to a unit source at $\xi$ equals the response at $\xi$ to a unit source at $x$. A formally self-adjoint $L$ with unmixed boundary conditions is self-adjoint in this sense, and so are the periodic conditions $u(a) = u(b)$, $a_2(a)u'(a) = a_2(b)u'(b)$. An initial-value problem is never self-adjoint, whatever $L$ is, and its Green's function is not symmetric.
:::

:::idea{provenance=original}
Everything follows from one observation: $\delta(x-\xi)$ is as singular as a second derivative of a *kink*. If $G$ itself jumped at $\xi$, then $G'$ would contain a delta and $G''$ a derivative of a delta, and nothing else in $LG$ could cancel it. So the mildest — and, it turns out, the only — possibility is that $G$ is continuous and $G'$ has a step; then $G''$ carries the delta. Integrating $LG = \delta$ across the source once measures the size of that step, and dividing by $a_2$ first makes the measurement immediate.

The construction is then just counting. Off the source $G$ solves a second-order homogeneous equation on each of two intervals, so it has four free constants. There are four conditions: one boundary condition on each side, plus continuity and the jump. The left-hand boundary condition forces the left piece to be a multiple of the single solution $u_1$ obeying it, the right-hand one forces the right piece to be a multiple of $u_2$, and the remaining two conditions are a $2\times 2$ linear system for the two multipliers whose determinant is the Wronskian — nonzero exactly because $u_1$ and $u_2$ are independent, which is exactly the assumption that the homogeneous problem has only the trivial solution.

That $\int Gf$ solves the problem is then a differentiation: the $x$-dependence sits in $u_1$ and $u_2$, which $L$ annihilates, so the only surviving term comes from differentiating the variable limits of the two integrals, and it collapses to $f$ because the prefactor was chosen as $1/(a_2W)$.

Symmetry is Green's formula applied to $G$ and $G^*$. Pairing the two delta equations against each other picks out the two values $G^*(\xi,\eta)$ and $G(\eta,\xi)$, and the boundary term vanishes — because that vanishing is precisely how the adjoint boundary conditions were defined.
:::

:::proof[Continuity and the jump condition]{provenance=adapted src="arfken-2013:§10.1, Eqs. (10.8)–(10.9), p. 449; hassani-2013:§20.3.1, pp. 619–620"}
**Step 1 (normalise the leading coefficient).** Since $a_2$ is continuous and nowhere zero on $[a,b]$, divide $LG = \delta(\cdot-\xi)$ by $a_2$:

$$
\frac{\partial^2 G}{\partial x^2} + \frac{a_1(x)}{a_2(x)}\frac{\partial G}{\partial x} + \frac{a_0(x)}{a_2(x)}\,G \;=\; \frac{\delta(x-\xi)}{a_2(x)} \;=\; \frac{\delta(x-\xi)}{a_2(\xi)} ,
$$

the last equality by the sifting property, which lets the continuous factor $1/a_2$ be evaluated at the one point the delta sees (:ref[the Dirac delta]{to=vcalc.dirac-delta-basics}). The coefficients $a_1/a_2$ and $a_0/a_2$ are continuous, hence bounded on $[a,b]$; this is where $a_2 \ne 0$ *on the closed interval* is used.

**Step 2 (why $G$ cannot jump).** Suppose $G$ had a jump of size $J$ at $\xi$. Then, as distributions, $\partial G/\partial x$ contains the term $J\delta(x-\xi)$ and $\partial^2G/\partial x^2$ the term $J\delta'(x-\xi)$. Collecting everything, the equation of Step 1 takes the form

$$
J\,\delta'(x-\xi) + c\,\delta(x-\xi) + b(x) = 0
$$

near $\xi$, for some constant $c$ (gathered from the jump of $\partial G/\partial x$ and from $J\,a_1(\xi)/a_2(\xi)$, the first-derivative term seeing the delta only through its value at $\xi$) and some function $b$ that is bounded on a neighbourhood of $\xi$, because $G$, $\partial G/\partial x$, $a_0/a_2$ and $a_1/a_2$ are all bounded there.

To extract $J$, test against the shrinking family $\varphi_\varepsilon(x) = \varepsilon\,\varphi\bigl((x-\xi)/\varepsilon\bigr)$, where $\varphi$ is smooth, supported in $(-1,1)$, with $\varphi(0) = 0$ and $\varphi'(0) = 1$. Then $\varphi_\varepsilon(\xi) = 0$ and $\varphi_\varepsilon'(\xi) = \varphi'(0) = 1$, so

$$
\langle \delta', \varphi_\varepsilon\rangle = -\varphi_\varepsilon'(\xi) = -1 ,
\qquad
\langle \delta, \varphi_\varepsilon\rangle = \varphi_\varepsilon(\xi) = 0 ,
$$

while $\lvert\varphi_\varepsilon\rvert \le \varepsilon\sup\lvert\varphi\rvert$ on a support of length $2\varepsilon$, so $\bigl|\int b\,\varphi_\varepsilon\bigr| \le 2\varepsilon^2\sup\lvert b\rvert\sup\lvert\varphi\rvert \to 0$. The displayed equation therefore gives $-J + 0 + O(\varepsilon^2) = 0$ for every small $\varepsilon$, whence $J = 0$. One test function of this shape does the whole job: it is blind to $\delta$ and to bounded functions at once, which is what is needed — being "not a multiple of $\delta$" would not suffice, since $b$ is present too.

So $G$ is continuous at $\xi$; this is Hassani's conclusion on p. 620, reached there by an explicit integration. Consequently $\partial G/\partial x$ has at most a finite jump.

**Step 3 (integrate across the source).** Integrate the equation of Step 1 over $[\xi-\varepsilon, \xi+\varepsilon]$:

$$
\left[\frac{\partial G}{\partial x}\right]_{\xi-\varepsilon}^{\xi+\varepsilon}
+ \int_{\xi-\varepsilon}^{\xi+\varepsilon}\frac{a_1}{a_2}\frac{\partial G}{\partial x}\, dx
+ \int_{\xi-\varepsilon}^{\xi+\varepsilon}\frac{a_0}{a_2}\,G\, dx
\;=\; \frac{1}{a_2(\xi)} ,
$$

for every $\varepsilon$ small enough that $[\xi-\varepsilon,\xi+\varepsilon] \subset [a,b]$; the right side is $1/a_2(\xi)$ because the delta's unit mass lies inside the interval.

**Step 4 (the two integrals vanish in the limit).** By Step 2, $G$ is continuous and $\partial G/\partial x$ is bounded near $\xi$ (it has one-sided limits there, by hypothesis). Each integrand is therefore bounded by some constant $K$ on the interval, so each integral is at most $2K\varepsilon$ in modulus and tends to $0$ as $\varepsilon \to 0^+$. Here the continuity of $a_0, a_1, a_2$ is used, and the *continuity* of $G$ established in Step 2: had $G$ jumped, the middle integral would not have vanished.

**Step 5 (conclude).** Letting $\varepsilon \to 0^+$ leaves

$$
\left.\frac{\partial G}{\partial x}\right|_{\xi^+} - \left.\frac{\partial G}{\partial x}\right|_{\xi^-} = \frac{1}{a_2(\xi)} . \qquad \square
$$
:::

:::proof[Existence, uniqueness and the formula for $G$]{provenance=adapted src="stakgold-holst-2011:§3.2, pp. 194–195"}
Assume unmixed conditions, so that $B_1$ involves only $x=a$ and $B_2$ only $x=b$.

**Step 1 ($u_1$ and $u_2$ exist).** The row $(\alpha_{11},\alpha_{12})$ is not zero, since the two coefficient rows are independent. Let $u_1$ solve the initial-value problem $Lu = 0$ with $u_1(a) = \alpha_{12}$, $u_1'(a) = -\alpha_{11}$; a solution exists and is unique because $a_2 \ne 0$ and the coefficients are continuous (:ref[existence and uniqueness]{to=ode.existence-uniqueness}). It is not identically zero, because its initial data are not both zero, and

$$
B_1u_1 = \alpha_{11}\alpha_{12} + \alpha_{12}(-\alpha_{11}) = 0 .
$$

The same construction at $x = b$ gives a nontrivial $u_2$ with $B_2u_2 = 0$.

**Step 2 ($u_1$ and $u_2$ are independent, so $W \neq 0$).** If they were dependent, then $u_2$ would be a nonzero multiple of $u_1$, so $u_1$ would satisfy *both* $B_1u_1 = 0$ and $B_2u_1 = 0$: a nontrivial solution of the completely homogeneous problem, contradicting the standing hypothesis. Two solutions of $Lu=0$ are independent if and only if their Wronskian is nonzero at one point, and then it is nonzero everywhere (:ref[linear ODE theory]{to=ode.linear-ode-theory}); so $W(u_1,u_2;x) \ne 0$ on $[a,b]$.

**Step 3 (the shape of $G$).** On $a \le x < \xi$, $G$ solves $Lu=0$ and satisfies $B_1G = 0$, a condition involving only $x = a$. Every solution of $Lu=0$ obeying $B_1u=0$ is a multiple of $u_1$: the set of such solutions is at most one-dimensional, since two independent ones would make every solution satisfy $B_1u=0$, in particular $u_2$, again producing a nontrivial solution of the completely homogeneous problem. Hence $G(x,\xi) = A\,u_1(x)$ for $x < \xi$, and likewise $G(x,\xi) = B\,u_2(x)$ for $x > \xi$, with $A,B$ depending on $\xi$ only.

**Step 4 (the two remaining conditions).** Continuity at $x=\xi$ and the jump of $1/a_2(\xi)$ in $\partial G/\partial x$ give

$$
A\,u_1(\xi) - B\,u_2(\xi) = 0 ,
\qquad
-A\,u_1'(\xi) + B\,u_2'(\xi) = \frac{1}{a_2(\xi)} .
$$

**Step 5 (solve).** The determinant of this $2\times2$ system in $(A,B)$ is $u_1(\xi)u_2'(\xi) - u_1'(\xi)u_2(\xi) = W(u_1,u_2;\xi)$, nonzero by Step 2, so there is exactly one solution. Cramer's rule gives

$$
A = \frac{u_2(\xi)}{a_2(\xi)W(u_1,u_2;\xi)} , \qquad B = \frac{u_1(\xi)}{a_2(\xi)W(u_1,u_2;\xi)} .
$$

Substituting into Step 3 and noticing that for $x<\xi$ the pair $(x,\xi)$ is $(x_{<},x_{>})$ while for $x>\xi$ it is $(x_{>},x_{<})$, both branches become the single formula

$$
G(x,\xi) = \frac{u_1(x_{<})\,u_2(x_{>})}{a_2(\xi)\,W(u_1,u_2;\xi)} .
$$

**Step 6 (uniqueness).** Two Green's functions for the same problem differ by a function that solves $Lu=0$ on each side of $\xi$, is continuous at $\xi$ with continuous derivative there (the jumps cancel), and satisfies $B_1 = B_2 = 0$. Such a difference solves $Lu=0$ classically on all of $(a,b)$ and meets both homogeneous boundary conditions, hence vanishes identically by hypothesis. This argument uses nothing about unmixed conditions, so uniqueness holds in general.

**Step 7 (the self-adjoint form).** If $a_1 = a_2'$, then $L = (a_2u')' + a_0u$ and Abel's formula for the Wronskian of two solutions, $W(x) = C\exp\bigl(-\int a_1/a_2\bigr)$, becomes $W(x) = C/a_2(x)$ (Stakgold and Holst's (3.1.8)). Hence $a_2(\xi)W(\xi) = C$ is independent of $\xi$ and $G(x,\xi) = u_1(x_{<})u_2(x_{>})/C$, which is visibly symmetric in $x$ and $\xi$. $\square$
:::

:::proof[The representation formula]{provenance=adapted src="arfken-2013:§10.1, Eqs. (10.20)–(10.23), pp. 451; stakgold-holst-2011:§3.2, (3.2.13)–(3.2.14) and Theorem 3.2.1, pp. 195–196"}
Take unmixed conditions and write $\sigma(\xi) = \bigl[a_2(\xi)W(u_1,u_2;\xi)\bigr]^{-1}$, a continuous function of $\xi$ since $a_2$ and $W$ are continuous and nonvanishing.

**Step 1 (split the integral at the source point).** For $\xi < x$ the formula for $G$ gives $G(x,\xi) = \sigma(\xi)u_1(\xi)u_2(x)$, and for $\xi > x$ it gives $G(x,\xi) = \sigma(\xi)u_1(x)u_2(\xi)$. Hence

$$
u(x) = \int_a^b G(x,\xi)f(\xi)\,d\xi = u_2(x)\,I_1(x) + u_1(x)\,I_2(x) ,
$$

$$
I_1(x) = \int_a^x \sigma u_1 f\, d\xi , \qquad I_2(x) = \int_x^b \sigma u_2 f\, d\xi .
$$

**Step 2 (first derivative).** By the fundamental theorem of calculus, $I_1' = \sigma(x)u_1(x)f(x)$ and $I_2' = -\sigma(x)u_2(x)f(x)$ at every point where $f$ is continuous. Differentiating the product,

$$
u' = u_2'I_1 + u_1'I_2 + \underbrace{\sigma u_1 u_2 f - \sigma u_1 u_2 f}_{=\,0} = u_2'I_1 + u_1'I_2 .
$$

The two boundary terms cancel exactly because the *same* function $\sigma(\xi)u_1(\xi)u_2(\xi)$ appears in both; this is the analytic content of the continuity of $G$ at $x=\xi$.

**Step 3 (second derivative).** Differentiating again,

$$
u'' = u_2''I_1 + u_1''I_2 + \sigma\bigl(u_1u_2' - u_1'u_2\bigr) f = u_2''I_1 + u_1''I_2 + \sigma W f .
$$

The surviving term is the jump condition at work: the two boundary terms no longer cancel, and what is left is $\sigma W f$.

**Step 4 (apply $L$).** Combining Steps 1–3,

$$
Lu = \bigl(a_2u_2'' + a_1u_2' + a_0u_2\bigr)I_1 + \bigl(a_2u_1'' + a_1u_1' + a_0u_1\bigr)I_2 + a_2\,\sigma\,W f
= I_1\,Lu_2 + I_2\,Lu_1 + a_2\sigma W f .
$$

Here $Lu_1 = Lu_2 = 0$, since $u_1,u_2$ solve the homogeneous equation, and $a_2(x)\sigma(x)W(x) = 1$ by the definition of $\sigma$. Hence $Lu = f$ at every point of continuity of $f$.

**Step 5 (boundary conditions).** At $x=a$ the integral $I_1$ vanishes, so $u(a) = u_1(a)I_2(a)$ and, by Step 2, $u'(a) = u_1'(a)I_2(a)$. Therefore

$$
B_1u = \alpha_{11}u(a) + \alpha_{12}u'(a) = I_2(a)\,\bigl[\alpha_{11}u_1(a) + \alpha_{12}u_1'(a)\bigr] = I_2(a)\,B_1u_1 = 0 .
$$

The same computation at $x=b$, where $I_2(b) = 0$, gives $B_2u = I_1(b)\,B_2u_2 = 0$. This step is where *unmixedness* is needed: $B_1$ had to involve only the endpoint at which one of the two integrals vanishes.

**Step 6 (uniqueness).** Any two solutions of the problem differ by a solution of the completely homogeneous problem, which is identically zero by hypothesis. $\square$
:::

:::proof[Reciprocity and symmetry]{provenance=adapted src="stakgold-holst-2011:§3.2, pp. 199–200, proof of (3.2.25)–(3.2.26)"}
**Step 1 (pair the two problems).** Fix $\xi$ and $\eta$ in $(a,b)$. Put $u(x) = G(x,\xi)$, which satisfies $LG(x,\xi) = \delta(x-\xi)$ and lies in $M$, and $v(x) = G^*(x,\eta)$, which satisfies $L^*G^*(x,\eta) = \delta(x-\eta)$ and lies in $M^*$. Form the combination $v\,Lu - u\,L^*v$ and integrate it over $(a,b)$:

$$
\int_a^b \bigl(v\,Lu - u\,L^*v\bigr) dx = \int_a^b G^*(x,\eta)\,\delta(x-\xi)\,dx - \int_a^b G(x,\xi)\,\delta(x-\eta)\,dx .
$$

**Step 2 (the right-hand side).** By the sifting property, treating the deltas formally as Stakgold and Holst do, the right-hand side is

$$
G^*(\xi,\eta) - G(\eta,\xi) .
$$

**Step 3 (the left-hand side).** By Green's formula, the left-hand side equals the boundary term $\bigl[J(u,v)\bigr]_a^b$, where $J(u,v) = a_2(vu'-uv') + (a_1-a_2')uv$.

**Step 4 (the boundary term vanishes).** $u \in M$ and $v \in M^*$. By the very definition of the adjoint boundary conditions, $\bigl[J(u,v)\bigr]_a^b = 0$ for every such pair. This is the only place the boundary conditions enter, and it is the step that fails for an arbitrary pair of functions.

**Step 5 (conclude).** Therefore $G^*(\xi,\eta) = G(\eta,\xi)$ for all $\xi,\eta$, which is the asserted relation after renaming the variables.

**Step 6 (the self-adjoint case).** If the problem is self-adjoint, $L^* = L$ and $M^* = M$, so $G^*$ solves exactly the problem that defines $G$. By the uniqueness proved above, $G^* = G$, and Step 5 becomes $G(x,\xi) = G(\xi,x)$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **$a_2 \ne 0$ on the closed interval.** Used in Step 1 of the jump proof, to divide by $a_2$ and keep the other coefficients bounded, and again in Step 5, since $1/a_2(\xi)$ must be finite. At a point where $a_2$ vanishes the equation is singular and the construction breaks down: for $L = \bigl((1-x^2)u'\bigr)'$ on $[-1,1]$, the two solutions of $Lu=0$ are $1$ and $\tfrac12\ln\frac{1+x}{1-x}$, and *both* boundary requirements "$G$ finite at $\pm1$" select the same solution $u_1 = u_2 = 1$. Arfken's Exercise 10.1.6 (p. 457) makes exactly this point: the candidates for $u_1$ and $u_2$ are linearly dependent, so no Green's function can be built this way.
- **No nontrivial solution of the completely homogeneous problem.** Used in Step 2 and Step 3 of the construction (independence of $u_1,u_2$, hence $W \ne 0$), in Step 6 (uniqueness) and in Step 6 of the representation proof. Without it the construction divides by zero. Stakgold and Holst's Example 2 is the model: for $u'' + a_0u = f$ on $(0,1)$ with $u(0)=u(1)=0$ and $a_0 = \pi^2$, the homogeneous problem has the solutions $A\sin\pi x$, the problem with $f \equiv 1$ has *no* solution, and the problem with $f = x - \tfrac12$ has infinitely many. What replaces the Green's function is :ref[the Fredholm alternative and the modified Green's function]{to=green.fredholm-alternative}.
- **Exactly two boundary conditions.** Stakgold and Holst's Remark 1 after Theorem 3.2.1: a third condition of the same type would leave the completely homogeneous problem with only the trivial solution, but would usually leave the inhomogeneous problem with no solution at all. The count four constants / four conditions in the idea block is not an accident.
- **Homogeneous boundary conditions.** Required for $G$ to exist at all (Hassani's Lemma 20.3.1). With $B_1u = \gamma_1 \ne 0$, the map $f \mapsto u$ could not be linear, and $f \equiv 0$ would not give $u \equiv 0$.
- **Unmixedness.** Used only in the *construction* (to make the left piece a multiple of a single $u_1$) and in Step 5 of the representation proof. Existence, uniqueness and the representation formula themselves hold for general boundary functionals; Stakgold and Holst build $G$ in that case from the causal solution plus a correction, and their Theorem 3.2.1 is stated for general $B_1,B_2$.
- **Self-adjointness, for symmetry.** Only Step 6 of the last proof uses it. Drop it and the symmetry is false: the second example below exhibits a problem with $G(x,\xi) \ne G(\xi,x)$ for which the weaker relation $G^*(x,\xi) = G(\xi,x)$ still holds. An initial-value problem is never self-adjoint — the adjoint conditions move to the other endpoint — which is why :ref[causal Green's functions]{to=green.causal-green-functions} are one-sided and asymmetric.
:::

:::remark[Conventions that differ between books]{provenance=original}
This unit follows Stakgold and Holst, Arfken, and Riley, Hobson and Bence in writing

$$
LG(x,\xi) = \delta(x-\xi), \qquad \text{jump in } \partial G/\partial x \ = \ \frac{1}{a_2(\xi)} .
$$

Hassani uses a different normalisation. He works with a Sturm–Liouville weight $w(x) > 0$, defines the Green's function by

$$
L_xG(x,y) = \frac{\delta(x-y)}{w(x)} ,
$$

and consequently obtains the jump $1/\bigl(p_2(y)w(y)\bigr)$, his Eq. (20.33), with the representation $u(x) = \int_a^b w(y)\,G(x,y)f(y)\,dy$. His differential operator is the same $p_2u'' + p_1u' + p_0u$ as ours, so the two kernels are related by the weight alone: since $\delta(x-y)/w(x) = \delta(x-y)/w(y)$ and $L$ is linear,

$$
G_{\text{Hassani}}(x,y) = \frac{G(x,y)}{w(y)} ,
$$

which is exactly the factor turning our jump $1/p_2(y)$ into his $1/\bigl(p_2(y)w(y)\bigr)$. The two conventions agree when $w \equiv 1$. They always agree on the *answer*: his equation carries the factor $1/w$ and his representation integral carries the compensating $w$, so $\int w\,G_{\text{Hassani}}f\,dy = \int G f\,dy$ and the solution $u$ is the same function. What one must not do is mix them — our jump with his representation, or his kernel with our integral — which is wrong by a factor $w$. The same caution applies to the sign: many physics texts define the Green's function of $-d^2/dx^2$ rather than $d^2/dx^2$, which flips the sign of $G$.

A second point of notation: the second argument of $G$ is called $\xi$ here, $t$ by Arfken, $z$ by Riley, Hobson and Bence, and $y$ by Hassani. The named and unnamed roles are the same in all four: the first argument is the field point, the second the source point.
:::

:::method[Building and using a Green's function]{provenance=adapted src="stakgold-holst-2011:§3.2, pp. 194–196; rhb-2006:§15.2.5, pp. 512–513; arfken-2013:§10.1, pp. 450–452"}
Given $Lu = a_2u'' + a_1u' + a_0u = f$ on $[a,b]$ with two homogeneous unmixed conditions:

1. **Check the hypothesis.** Confirm $a_2 \ne 0$ on $[a,b]$ and that $Lu = 0$ with both homogeneous boundary conditions has only $u \equiv 0$. If not, stop: use the Fredholm alternative instead.
2. **Find a basis** $\{v_1,v_2\}$ of solutions of $Lu = 0$.
3. **Match each endpoint.** Take $u_1$ to be the combination of $v_1,v_2$ obeying the condition at $x=a$, and $u_2$ the one obeying the condition at $x=b$. Each is determined up to a scale factor, which does not matter.
4. **Compute** $W(u_1,u_2;\xi) = u_1u_2' - u_1'u_2$ at $\xi$ and the prefactor $\sigma(\xi) = 1/\bigl(a_2(\xi)W(\xi)\bigr)$. If $L$ is formally self-adjoint, $\sigma$ is a constant; a $\xi$-dependence surviving in $a_2W$ for a self-adjoint $L$ signals an algebra error.
5. **Assemble** $G(x,\xi) = \sigma(\xi)\,u_1(x_{<})u_2(x_{>})$, that is $\sigma(\xi)u_1(x)u_2(\xi)$ for $x<\xi$ and $\sigma(\xi)u_1(\xi)u_2(x)$ for $x>\xi$.
6. **Verify** the four defining properties: $LG=0$ on each side, the two boundary conditions, continuity at $x=\xi$, and the jump $1/a_2(\xi)$. The jump check is the one that catches sign errors.
7. **Integrate** for the solution,
   $$
   u(x) = u_2(x)\int_a^x \sigma u_1 f\, d\xi + u_1(x)\int_x^b \sigma u_2 f\, d\xi ,
   $$
   and note that only this step has to be repeated when $f$ changes.
8. **Inhomogeneous boundary data.** Either subtract a smooth function meeting them — for $u(a)=c_1$, $u(b)=c_2$ Arfken uses the straight line $\bigl[c_1(b-x) + c_2(x-a)\bigr]/(b-a)$ — and solve the resulting problem with homogeneous conditions and a modified $f$; or add to the integral the combination $\dfrac{\gamma_2}{B_2u_1}u_1(x) + \dfrac{\gamma_1}{B_1u_2}u_2(x)$, which is Stakgold and Holst's (3.2.16). The pairing is the crossed one, and it is worth checking: $B_1u_1 = 0$ kills the first term under $B_1$ and leaves $B_1u = \gamma_1$, while $B_2u_2 = 0$ kills the second under $B_2$ and leaves $B_2u = \gamma_2$.
:::

:::example[A self-adjoint problem with variable coefficients]{provenance=original}
Solve $\bigl(x\,u'\bigr)' = f(x)$ on $1 \le x \le 2$ with $u(1) = u(2) = 0$, and in particular for $f(x) = 1/x$.

1. *Hypotheses.* Here $a_2(x) = x$, $a_1(x) = 1 = a_2'$, so $L$ is formally self-adjoint, and $a_2 \ne 0$ on $[1,2]$. The homogeneous equation $(xu')' = 0$ gives $xu' = c$, hence $u = c\ln x + d$; the conditions $u(1)=u(2)=0$ force $d = 0$ and $c\ln 2 = 0$, so $c = 0$: only the trivial solution. The construction applies.
2. *Endpoint solutions.* $u_1(x) = \ln x$ vanishes at $x=1$; $u_2(x) = \ln(x/2)$ vanishes at $x=2$.
3. *Wronskian and prefactor.*
   $$
   W = u_1u_2' - u_1'u_2 = \frac{\ln x}{x} - \frac{\ln (x/2)}{x} = \frac{\ln 2}{x} ,
   \qquad a_2(\xi)W(\xi) = \xi\cdot\frac{\ln 2}{\xi} = \ln 2 ,
   $$
   a constant, as it must be for a self-adjoint $L$. So $\sigma = 1/\ln 2$.
4. *The Green's function.*
   $$
   G(x,\xi) = \frac{\ln x_{<}\;\ln\bigl(x_{>}/2\bigr)}{\ln 2}
   = \begin{cases}
   \dfrac{\ln x\,\ln(\xi/2)}{\ln 2}, & 1 \le x \le \xi,\\[2mm]
   \dfrac{\ln \xi\,\ln(x/2)}{\ln 2}, & \xi \le x \le 2 .
   \end{cases}
   $$
   It is symmetric, as predicted. Note $G \le 0$ throughout, since $\ln x_{<} \ge 0$ and $\ln(x_{>}/2) \le 0$.
5. *Check the jump.* For $x > \xi$, $\partial G/\partial x = \ln\xi/(x\ln 2)$; for $x<\xi$, $\partial G/\partial x = \ln(\xi/2)/(x\ln 2)$. At $x=\xi$ the difference is
   $$
   \frac{\ln\xi - \ln(\xi/2)}{\xi\ln 2} = \frac{\ln 2}{\xi \ln 2} = \frac{1}{\xi} = \frac{1}{a_2(\xi)} . \checkmark
   $$
6. *Solve with $f(\xi) = 1/\xi$.*
   $$
   u(x) = \frac{\ln(x/2)}{\ln 2}\int_1^x \frac{\ln\xi}{\xi}\, d\xi + \frac{\ln x}{\ln 2}\int_x^2 \frac{\ln(\xi/2)}{\xi}\, d\xi .
   $$
   With $s = \ln\xi$ the first integral is $\tfrac12(\ln x)^2$; with $s = \ln(\xi/2)$ the second is $\bigl[\tfrac12 s^2\bigr]_{\ln(x/2)}^{0} = -\tfrac12\bigl(\ln(x/2)\bigr)^2$. Hence
   $$
   u(x) = \frac{\ln x\,\ln(x/2)}{2\ln 2}\Bigl[\ln x - \ln(x/2)\Bigr] = \frac{\ln x\,\ln(x/2)}{2\ln 2}\cdot \ln 2 = \frac{1}{2}\,\ln x\,\ln\frac{x}{2} .
   $$
7. *Independent check.* Integrating $(xu')' = 1/x$ directly gives $xu' = \ln x + c$, then $u = \tfrac12(\ln x)^2 + c\ln x + d$; $u(1)=0$ gives $d=0$ and $u(2)=0$ gives $c = -\tfrac12\ln 2$, so $u = \tfrac12\ln x\,\ln(x/2)$. The two routes agree.
8. *A number.* At $x = 1.5$: $\ln 1.5 = 0.405465$ and $\ln 0.75 = -0.287682$, so $u(1.5) = -0.0583225$ to six decimal places. The deflection is negative everywhere, as the sign of $G$ and the positive source demand.
:::

:::example[A problem that is not self-adjoint: $G$ is not symmetric, but $G^*(x,\xi) = G(\xi,x)$]{provenance=original}
Take $Lu = u'' + 2u'$ on $0 \le x \le 1$ with $u(0) = u(1) = 0$. Here $a_2 = 1$, $a_1 = 2 \ne a_2' = 0$, so $L$ is not formally self-adjoint.

1. *Hypotheses.* $u'' + 2u' = 0$ has general solution $A + Be^{-2x}$; the two conditions give $A + B = 0$ and $A + Be^{-2} = 0$, hence $A=B=0$. Only the trivial solution, so $G$ exists.
2. *Endpoint solutions.* $u_1(x) = 1 - e^{-2x}$ vanishes at $x=0$; $u_2(x) = e^{-2x} - e^{-2}$ vanishes at $x=1$.
3. *Wronskian.*
   $$
   W = u_1u_2' - u_1'u_2 = \bigl(1-e^{-2x}\bigr)\bigl(-2e^{-2x}\bigr) - 2e^{-2x}\bigl(e^{-2x}-e^{-2}\bigr) = -2e^{-2x}\bigl(1 - e^{-2}\bigr) ,
   $$
   which depends on $x$ — the signature of a non-self-adjoint $L$, since $a_2 = 1$ here.
4. *The Green's function.* With $a_2(\xi)W(\xi) = -2e^{-2\xi}(1-e^{-2})$,
   $$
   G(x,\xi) = -\,\frac{e^{2\xi}}{2\bigl(1-e^{-2}\bigr)}\;\bigl(1 - e^{-2x_{<}}\bigr)\bigl(e^{-2x_{>}} - e^{-2}\bigr) .
   $$
   Direct substitution confirms $G_{xx} + 2G_x = 0$ on each side, $G(0,\xi) = G(1,\xi) = 0$, and a jump of exactly $1$ in $\partial G/\partial x$ at $x=\xi$ (here $1/a_2 = 1$).
5. *Symmetry fails.* The factor $e^{2\xi}$ depends on $\xi$ alone, while $u_1(x_{<})u_2(x_{>})$ is symmetric, so
   $$
   \frac{G(x,\xi)}{G(\xi,x)} = e^{2(\xi-x)} \ne 1 \quad\text{for } x \ne \xi .
   $$
   Numerically, $G\bigl(\tfrac14,\tfrac34\bigr) = -0.0895249$ while $G\bigl(\tfrac34,\tfrac14\bigr) = -0.0329344$, and their ratio is $e^{1} = 2.71828$. Reciprocity genuinely fails: a unit source at $\tfrac34$ produces a response at $\tfrac14$ nearly three times the response at $\tfrac34$ to a unit source at $\tfrac14$. The drift term $2u'$ breaks the left–right balance.
6. *But the general relation holds.* The formal adjoint is $L^*v = v'' + (2a_2' - a_1)v' + (a_2'' - a_1' + a_0)v = v'' - 2v'$. With Dirichlet conditions, $J(u,v) = vu' - uv' + 2uv$ vanishes at both endpoints whenever $u$ and $v$ vanish there, so the adjoint boundary conditions are again $v(0)=v(1)=0$. Solving the adjoint problem the same way, with $v_1 = e^{2x}-1$, $v_2 = e^{2x}-e^{2}$ and $W(v_1,v_2;x) = 2e^{2x}(e^2-1)$,
   $$
   G^*(x,\xi) = \frac{\bigl(e^{2x_{<}}-1\bigr)\bigl(e^{2x_{>}}-e^{2}\bigr)}{2e^{2\xi}\bigl(e^{2}-1\bigr)} .
   $$
   Rewriting $1 - e^{-2x} = e^{-2x}(e^{2x}-1)$ and $e^{-2\xi} - e^{-2} = e^{-2\xi-2}\bigl(e^{2}-e^{2\xi}\bigr)$ in the formula of item 4 turns $G(\xi,x)$ into precisely this expression. So $G^*(x,\xi) = G(\xi,x)$ exactly, confirming the reciprocity theorem in a case where plain symmetry is false.
7. *Why the adjoint is not the same operator.* The adjoint boundary conditions coincide with the original ones here, so the failure of self-adjointness is entirely in $L$ versus $L^*$. Multiplying $Lu$ by the integrating factor $e^{2x}$ turns it into $e^{-2x}\bigl(e^{2x}u'\bigr)'$: the problem *can* be made self-adjoint, at the price of a weight $e^{2x}$ in the inner product — which is the weight $w$ of Hassani's convention.
:::

:::application{provenance=original}
The Green's function is the *influence function* of a linear system: the field at $x$ produced by a unit source at $\xi$. Once it is known, the response to any distribution of sources is a single integral, and the boundary conditions have already been built in.

- **Statics.** A string under tension $T$ with small transverse load $w(x)$ satisfies $-T\,u'' = w$, and the Green's function of $-d^2/dx^2$ on $[0,L]$ with $u(0)=u(L)=0$ is $G(x,\xi) = x_{<}(L-x_{>})/L$: the triangular shape a string takes under a single point load. A beam obeys the fourth-order $\bigl(EI\,u''\bigr)'' = w$ instead, so its Green's function is a different function — piecewise cubic, with three derivatives continuous and a jump in the third, by the $n$th-order form of the conditions quoted above — but it plays the same role: it is the influence line that structural engineers tabulate so that any load can be handled by integration. The first worked example above is the radial version of this: steady one-dimensional conduction in a shell with a variable conductance $x$.
- **Steady transport.** For steady diffusion along a rod with source density $f$ and prescribed end temperatures, $\bigl(\kappa(x)u'\bigr)' = -f$; the Green's function is the temperature profile from a unit heat source at one point. The second example is the convective version: $u'' + 2u'$ is diffusion plus a drift of fixed speed, and the asymmetry of its Green's function is the physical statement that a source influences what lies downstream more than what lies upstream. Reciprocity is a property of pure diffusion, not of advection.
- **Reciprocity as a physical law.** $G(x,\xi) = G(\xi,x)$ for self-adjoint problems is the one-dimensional case of a family of reciprocity theorems: Maxwell's and Betti's in elasticity (a unit load at $A$ deflects $B$ by the same amount as a unit load at $B$ deflects $A$), Rayleigh's in acoustics, and the reciprocity between transmitting and receiving antennas. When a measurement appears to violate it, the model contains a non-self-adjoint term — a flow, a magnetic field, an absorbing boundary — and locating that term is often the point of the test.
- **Quantum mechanics and scattering.** With $L = -d^2/dx^2 + V(x) - E$, the Green's function is the resolvent kernel $\langle x|(H-E)^{-1}|\xi\rangle$. Writing the Schrödinger equation as $u = u_{\text{free}} + \int G\,V u$ is the starting point of the Born series (:ref[the Born approximation]{to=green.born-approximation}), and the choice of boundary condition at infinity — outgoing rather than vanishing — selects the scattering Green's function, as in Arfken's boundary-at-infinity example.
- **Reformulating eigenvalue problems.** Since $G$ inverts $L$, the eigenvalue problem $Lu = \lambda u$ becomes the integral equation $u(x) = \lambda\int_a^b G(x,\xi)u(\xi)\,d\xi$. Arfken stresses the practical gain: the integral operator is bounded while the differential operator is not, which is why the sharp spectral theorems are proved on the integral side (:ref[Hilbert–Schmidt theory]{to=green.hilbert-schmidt}) and why $G$ has the bilinear eigenfunction expansion of :ref[the next unit]{to=green.eigenfunction-expansion-green}.
:::
