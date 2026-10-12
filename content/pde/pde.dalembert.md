---
id: pde.dalembert
title: The one-dimensional wave equation
kind: theorem
level: core
summary: Gives the general solution $F(x-ct)+G(x+ct)$ of $u_{tt}=c^2u_{xx}$ and d'Alembert's formula for the initial-value problem, proves that the formula solves it and is the only solution, reads off the domains of dependence and influence, and extends both to a half-line or an interval by odd and even reflection.
prereqs: [pde.classification, found.partial-derivatives-chain-rule]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§2.1, Eq. (2)–(3) and Eq. (8) with the smoothness remark that follows it, pp. 33–36; §2.2 (Causality), p. 39, for the domain of influence, the interval of dependence and the past-history triangle; §3.2, Eq. (2)–(3) and Figures 1–2, pp. 61–63 (Dirichlet half-line by odd reflection), and Eq. (5) with Figures 3–4, pp. 63–64 (fixed interval, odd $2L$-periodic extension)"
    pages: "33-36, 39, 61-64"
    role: the factorisation of the operator; the general solution; d'Alembert's formula with its $C^2$/$C^1$ hypotheses; the names and shapes of the domains of dependence and influence; the reflection method on the half-line and on a finite interval
  - work: evans-2010
    loc: "§2.4.1a, Eq. (4)–(8) and Theorem 1 (Solution of wave equation, $n=1$) with Remarks (i)–(ii), pp. 64–66; 'A reflection method', problem (9) with the compatibility conditions $g(0)=h(0)=0$ and formula (10), pp. 66–67"
    pages: "64-67"
    role: the two-transport-equation derivation; the precise hypotheses and conclusions of the existence theorem; the loss-of-smoothness remark; the half-line problem and its two-case solution formula
  - work: stein-shakarchi-2003
    loc: "Ch. 1, §1 (Traveling waves), pp. 9–11: the change to the variables $\\xi = x+t$, $\\eta = x-t$ reducing the equation to $v_{\\xi\\eta}=0$, d'Alembert's formula, the odd $2\\pi$-periodic extension that keeps the ends of a string fixed, and the time-reversal property; Ch. 6, §3.1, p. 189, the reading of the two terms of d'Alembert's formula as the average of $f$ over the two endpoints and $t$ times the mean of $g$ over the interval, and the suggestion that this generalises to higher dimensions"
    pages: "9-11, 189"
    role: the characteristic-coordinate route to the general solution; the reflection/periodic-extension device for a string with fixed ends; time reversibility; the reading of the formula as a pair of averages
  - work: rhb-2006
    loc: "§20.4, Eq. (20.26) and the moving-observer reading of $f(x-ct)$, p. 693; Eq. (20.27)–(20.31) and the term-by-term physical interpretation of d'Alembert's solution, pp. 694–695"
    pages: "693-695"
    role: the convention $u=f(x-ct)+g(x+ct)$; the interpretation of the three terms of the solution formula
  - work: arfken-2013
    loc: "§9.6, Eq. (9.89)–(9.92) and Figure 9.4, pp. 435–436"
    pages: "435-436"
    role: characteristics as the lines $x \\pm ct = \\text{const}$; travelling versus standing waves; the set-up of d'Alembert's solution from the two initial conditions
---

:::definition[The problem, and its characteristics]{provenance=adapted src="strauss-2008:§2.1, Eq. (1)–(2), p. 33, and the characteristic coordinates on p. 34; arfken-2013:§9.6, Eq. (9.89), p. 435; evans-2010:§2.4, the two initial conditions of the wave equation, p. 64; stein-shakarchi-2003:Ch. 1 §1, the change of variables on p. 10"}
Fix a constant $c > 0$, the **wave speed**. The **one-dimensional wave equation** is

$$
u_{tt} = c^2 u_{xx} ,
$$

for a real-valued $u(x,t)$. For a stretched string of tension $\tau$ and line density $\rho$ it is the small-displacement equation of motion with $c = \sqrt{\tau/\rho}$; Strauss writes the tension as $T$.

Two features of the equation are used throughout. First, the operator **factors**: writing $\partial_t = \partial/\partial t$ and $\partial_x = \partial/\partial x$,

$$
\partial_t^2 - c^2\partial_x^2 = (\partial_t - c\,\partial_x)(\partial_t + c\,\partial_x) = (\partial_t + c\,\partial_x)(\partial_t - c\,\partial_x),
$$

the two orders agreeing because $c$ is constant. Second, the lines

$$
x - ct = \text{const} \qquad\text{and}\qquad x + ct = \text{const}
$$

in the $(x,t)$ plane are the **characteristics** of the equation (:ref[classification]{to=pde.classification}); the equation is hyperbolic, with two real families of them. The corresponding **characteristic coordinates** are

$$
\xi = x - ct, \qquad \eta = x + ct .
$$

The **initial-value problem** (or Cauchy problem) on the whole line is: given $\varphi$ and $\psi$ on $\mathbb{R}$, find $u$ on $\mathbb{R}\times[0,\infty)$ with

$$
u_{tt} = c^2u_{xx} \quad\text{in } \mathbb{R}\times(0,\infty), \qquad
u(x,0) = \varphi(x), \quad u_t(x,0) = \psi(x) \quad (x \in \mathbb{R}).
$$

The datum $\varphi$ prescribes where the string starts and $\psi$ how fast each point of it is moving at that instant. Two initial conditions are the right number because the equation is second order in $t$; the physical reading, which Evans gives, is that for a vibrating body one may prescribe the displacement and the velocity independently at the start.

**Conventions.** We write the general solution with the right-moving part first, $u = F(x-ct) + G(x+ct)$, as Riley, Hobson and Bence and Arfken do. Strauss and Evans write the two terms in the opposite order, $f(x+ct)+g(x-ct)$; nothing but the naming of the two functions differs. Evans and Stein and Shakarchi take $c = 1$ and call the data $g,h$ and $f,g$ respectively. The naming of the characteristic coordinates above is also ours and is the reverse of the sources': Strauss (p. 34) sets $\xi = x+ct$, $\eta = x-ct$, and Stein and Shakarchi (p. 10) do the same with $c=1$, so their $\xi$ is our $\eta$. Since the equation $v_{\xi\eta}=0$ is symmetric in the two, the exchange affects nothing but which of $F$ and $G$ is called first.
:::

:::statement[General solution]{provenance=adapted src="strauss-2008:§2.1, Eq. (3) and the two proofs on p. 34; evans-2010:§2.4.1a, Remark (i), p. 66; rhb-2006:§20.4, Eq. (20.26), p. 693"}
Let $u$ be a $C^2$ function with $u_{tt} = c^2u_{xx}$ on $\mathbb{R}^2$, or on a *characteristic rectangle* $\{(x,t) : a < x - ct < b,\ a' < x+ct < b'\}$, or on the half-plane $\{(x,t) : t > 0\}$. Then there are $C^2$ functions $F$ and $G$ of one variable with

$$
u(x,t) = F(x - ct) + G(x + ct) .
$$

Conversely every such sum, with $F$ and $G$ twice differentiable, solves the equation. Strauss states it on the whole plane, requiring of his two profiles nothing beyond two derivatives apiece; the rectangle and the half-plane are the same argument on a smaller domain (Step 2 below), and the half-plane is the case the uniqueness argument of Step 3 needs. Evans adds the reading that the general solution of $u_{tt}-u_{xx}=0$ is the sum of the general solutions of the two first-order equations $u_t \mp u_x = 0$, which is what the factorisation says.

The two terms have a direct meaning, which Riley, Hobson and Bence put in terms of an observer: an observer moving with velocity $+c$ keeps $x - ct$ fixed and therefore sees the value $F(x-ct)$ never change, so $F$ is a profile of permanent shape sliding to the right at speed $c$. Likewise $G(x+ct)$ slides to the left at speed $c$. Neither profile need be sinusoidal or periodic, and the two are unrelated to each other (Arfken, p. 435).
:::

:::statement[d'Alembert's formula]{provenance=adapted src="strauss-2008:§2.1, Eq. (8) and the paragraph after it, p. 36; evans-2010:§2.4.1a, Eq. (8) and Theorem 1, p. 65; rhb-2006:§20.4, Eq. (20.31), p. 694"}
Assume $\varphi \in C^2(\mathbb{R})$ and $\psi \in C^1(\mathbb{R})$, and define

$$
u(x,t) = \frac{1}{2}\bigl[\varphi(x - ct) + \varphi(x + ct)\bigr]
 + \frac{1}{2c}\int_{x-ct}^{x+ct} \psi(s)\, ds .
\tag{D}
$$

Then $u \in C^2(\mathbb{R}\times[0,\infty))$, it satisfies $u_{tt} = c^2u_{xx}$ in $\mathbb{R}\times(0,\infty)$, and

$$
\lim_{\substack{(x,t)\to(x_0,0)\\ t>0}} u(x,t) = \varphi(x_0), \qquad
\lim_{\substack{(x,t)\to(x_0,0)\\ t>0}} u_t(x,t) = \psi(x_0)
\qquad\text{for every } x_0 \in \mathbb{R}.
$$

Moreover no other $C^2$ function solves the problem. The existence half is Evans's Theorem 1, stated there for $c = 1$ with data $g \in C^2(\mathbb{R})$, $h \in C^1(\mathbb{R})$; Strauss records the same smoothness bookkeeping ($\varphi \in C^2$ and $\psi \in C^1$ give $u \in C^2$) and attributes the formula to d'Alembert in 1746.

Formula (D) is a sum of averages. The first term is the mean of $\varphi$ over the two endpoints of the interval $[x-ct, x+ct]$; the second is $t$ times the mean of $\psi$ over that interval, since $\frac{1}{2c}\int_{x-ct}^{x+ct}\psi = t \cdot \frac{1}{2ct}\int_{x-ct}^{x+ct}\psi$. Stein and Shakarchi point out that this is the reading which generalises to higher dimensions (:ref[the wave equation in three dimensions]{to=pde.wave-three-dimensions}).
:::

:::idea{provenance=original}
In the characteristic coordinates $\xi = x-ct$, $\eta = x+ct$ the equation becomes $u_{\xi\eta} = 0$: the operator was already a product of two first-order factors, and each factor is a derivative along one family of characteristics. An equation saying that one mixed derivative vanishes is solved by inspection: if $\partial_\eta(\partial_\xi u) = 0$ then $\partial_\xi u$ does not depend on $\eta$, and integrating once in $\xi$ leaves a function of $\xi$ plus a constant of integration that may depend on $\eta$. That is the general solution. The initial conditions then become two ordinary equations for the two unknown profiles $F$ and $G$: the displacement fixes $F+G$ and the velocity fixes $-cF'+cG'$. Differentiating the first and combining gives $F'$ and $G'$ separately, and one integration finishes the job. Uniqueness is free, because the first step produced *every* solution, not merely some.
:::

:::proof{provenance=adapted src="stein-shakarchi-2003:Ch. 1 §1, p. 10; strauss-2008:§2.1, pp. 34–36; evans-2010:§2.4.1a, pp. 64–65"}
**Step 1 (the equation in characteristic coordinates).** The map $(x,t) \mapsto (\xi,\eta) = (x-ct,\, x+ct)$ is a linear bijection of $\mathbb{R}^2$, with inverse $x = (\xi+\eta)/2$, $t = (\eta-\xi)/(2c)$. Let $v(\xi,\eta) = u(x,t)$. By the chain rule, $\partial_x = \partial_\xi + \partial_\eta$ and $\partial_t = -c\,\partial_\xi + c\,\partial_\eta$, hence

$$
\partial_t - c\,\partial_x = -2c\,\partial_\xi, \qquad \partial_t + c\,\partial_x = 2c\,\partial_\eta .
$$

Applying the factorisation of the definition,

$$
0 = (\partial_t - c\partial_x)(\partial_t + c\partial_x)u = (-2c\,\partial_\xi)(2c\,\partial_\eta) v = -4c^2 v_{\xi\eta},
$$

and $c \neq 0$, so $v_{\xi\eta} = 0$.

**Step 2 (solving $v_{\xi\eta}=0$).** Let $\Omega$ be the image of the domain of $u$ under $(x,t)\mapsto(\xi,\eta)$. The argument needs only that $\Omega$ is open, connected, and *sliced by intervals*: for each fixed $\eta$ the set of admissible $\xi$ is an interval, and for each fixed $\xi$ the set of admissible $\eta$ is an interval. All three domains of the statement qualify. The whole plane and the rectangle $(a,b)\times(a',b')$ do so by inspection; the half-plane $t>0$ is $\{\eta > \xi\}$, whose slices are the intervals $(-\infty,\eta)$ and $(\xi,\infty)$. Being connected, $\Omega$ also projects onto intervals $I$ and $J$ of the two axes.

Now $v_{\xi\eta} = \partial_\eta(v_\xi) = 0$ says that $v_\xi$ is constant along each $\eta$-slice, and that slice is an interval, so $v_\xi$ depends on $\xi$ alone: write $v_\xi(\xi,\eta) = F'(\xi)$ for $\xi \in I$, a function that is $C^1$ because $v$ is $C^2$. Fix $\xi_0 \in I$ and put $F(\xi) = \int_{\xi_0}^{\xi}F'$, which is legitimate because $I$ is an interval; $F$ is $C^2$. Then $\partial_\xi(v - F) = v_\xi - F' = 0$ on $\Omega$, and each $\xi$-slice is an interval, so $v - F$ is constant along it and depends on $\eta$ alone:

$$
v(\xi,\eta) = F(\xi) + G(\eta), \qquad G(\eta) := v(\xi,\eta) - F(\xi) \ \ (\eta \in J).
$$

$G$ is $C^2$ because $v$ and $F$ are. Undoing the substitution gives $u(x,t) = F(x-ct) + G(x+ct)$, which proves the general-solution statement; the converse direction is the chain rule, since $\partial_t^2 F(x-ct) = c^2F''$ and $\partial_x^2F(x-ct) = F''$, and likewise for $G$.

In the half-plane case $I = J = \mathbb{R}$, so $F$ and $G$ are defined on all of $\mathbb{R}$. If $u$ is in addition continuous up to $t=0$, letting $t\to0^+$ in the identity gives $u(x,0) = F(x)+G(x)$, so the decomposition holds on the closed half-plane as well.

**Step 3 (fitting the data).** Let $u$ be any $C^2$ solution of the initial-value problem on $\mathbb{R}\times[0,\infty)$ and write it as in Step 2, in the half-plane case, whose last paragraph carries the decomposition down to $t=0$. For $t>0$, differentiating the decomposition gives $u_t = -cF'(x-ct) + cG'(x+ct)$; both sides are continuous up to $t=0$, since $u \in C^2$ and $F', G'$ are $C^1$, so the identity holds at $t=0$ too. Setting $t=0$ in it and in the decomposition itself gives, for all $x$,

$$
F(x) + G(x) = \varphi(x), \qquad -cF'(x) + cG'(x) = \psi(x) .
$$

Differentiate the first equation and divide the second by $c$:

$$
F' + G' = \varphi', \qquad -F' + G' = \tfrac{1}{c}\psi .
$$

Subtracting and adding,

$$
F'(s) = \tfrac12\Bigl(\varphi'(s) - \tfrac1c \psi(s)\Bigr), \qquad
G'(s) = \tfrac12\Bigl(\varphi'(s) + \tfrac1c \psi(s)\Bigr) .
$$

**Step 4 (integrating, and the constants cancelling).** Integrating from $0$ to $s$,

$$
F(s) = \tfrac12\varphi(s) - \frac{1}{2c}\int_0^s \psi + A, \qquad
G(s) = \tfrac12\varphi(s) + \frac{1}{2c}\int_0^s \psi + B,
$$

with constants $A, B$. The first equation of Step 3 at $s$ forces $A + B = 0$. Substituting $s = x-ct$ in $F$ and $s = x+ct$ in $G$ and adding, the constants cancel, the two $\tfrac12\varphi$ terms give the first half of (D), and the two integrals combine as $\int_0^{x+ct} - \int_0^{x-ct} = \int_{x-ct}^{x+ct}$, giving the second half. So *every* $C^2$ solution equals the right-hand side of (D): the solution is unique, and no solution other than (D) can exist.

**Step 5 (the formula really is a solution).** Steps 1–4 assumed a solution existed. Now take $\varphi \in C^2$, $\psi \in C^1$ and *define* $u$ by (D). Write $\Psi(s) = \int_0^s\psi$, which is $C^2$ with $\Psi' = \psi$ by the fundamental theorem of calculus. Then

$$
u(x,t) = \underbrace{\tfrac12\varphi(x-ct) - \tfrac{1}{2c}\Psi(x-ct)}_{F(x-ct)} + \underbrace{\tfrac12\varphi(x+ct) + \tfrac{1}{2c}\Psi(x+ct)}_{G(x+ct)},
$$

a sum of a $C^2$ function of $x-ct$ and a $C^2$ function of $x+ct$. By the converse half of Step 2 it is $C^2$ on $\mathbb{R}\times[0,\infty)$ and solves the equation. Setting $t=0$ gives $u(x,0) = \varphi(x)$ since $\Psi$ cancels, and

$$
u_t(x,t) = \frac{c}{2}\bigl[\varphi'(x+ct) - \varphi'(x-ct)\bigr] + \frac12\bigl[\psi(x+ct) + \psi(x-ct)\bigr]
$$

equals $\psi(x)$ at $t=0$. Both $u$ and $u_t$ are continuous up to $t=0$, which gives the two limits in the statement. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- *$c \neq 0$.* Step 1 divides by $c^2$, and Step 3 divides by $c$. For $c = 0$ the equation is $u_{tt}=0$, whose solution is $\varphi(x) + t\psi(x)$: no propagation at all, and the characteristics have collapsed onto one family.
- *$\varphi \in C^2$ and $\psi \in C^1$.* These are exactly what Step 5 needs, and no more: the formula differentiates $\varphi$ twice and $\psi$ once. Strauss and Evans both state them. If $\varphi \in C^k$ and $\psi \in C^{k-1}$ then $u \in C^k$ and in general no better; Evans notes the consequence that the wave equation, unlike the heat equation, does not smooth its data. A corner in $\varphi$ stays a corner, and travels: Strauss's plucked string, whose $\varphi$ is the "three-finger" tent $b - b|x|/a$ on $|x|<a$ and $0$ outside, has kinks at all three of $x=0$ and $x=\pm a$, so the resulting $u$ fails to be twice differentiable along the six characteristics issuing from them, and he records that it is nonetheless a *weak* solution. The formula (D) still makes sense for merely continuous $\varphi$ and locally integrable $\psi$, and this is the usual way to define the solution in that case (:ref[weak derivatives]{to=pde.weak-solutions-sobolev}).
- *Where smoothness is not needed.* Nothing in Steps 1–4 uses more than $C^2$, and no hypothesis of decay, boundedness or integrability appears anywhere: (D) holds for data that grow arbitrarily fast, because the integral is over a bounded interval.
- *Time reversal.* The equation is unchanged by $t\mapsto -t$: if $u$ solves it, so does $(x,t)\mapsto u(x,-t)$, which Stein and Shakarchi call the time-reversal property and contrast with the heat equation, which cannot be run backwards. Formula (D) is *not* itself invariant under $t\mapsto-t$ — replacing $t$ by $-t$ reverses the orientation of the integral and so flips the sign of the $\psi$ term — but it needs no change of form: read with the oriented convention $\int_a^b = -\int_b^a$ and with $t$ allowed to be any real number, the right-hand side of (D) is $F(x-ct)+G(x+ct)$ with the $F,G$ of Step 5, hence a $C^2$ solution on all of $\mathbb{R}^2$ taking the data $\varphi,\psi$ at $t=0$. In the geometric statements below $ct$ must then be read as $c|t|$. One consequence is that the initial-value problem is equally well posed forwards and backwards in time.
- *Degenerate limits of the formula.* At $t=0$ the interval of integration collapses and (D) returns $\varphi$; this is why no compatibility condition between $\varphi$ and $\psi$ is required on the whole line. On a half-line with a fixed end, by contrast, compatibility conditions do appear — see the method below.
:::

:::definition[Domains of dependence and influence]{provenance=adapted src="strauss-2008:§2.2 (Causality), p. 39, with Figures 1–2"}
Fix a point $(x,t)$ with $t > 0$. Strauss's terminology, which we follow, is:

- The **interval of dependence** of $(x,t)$ is the interval $(x-ct,\, x+ct)$ on the initial line; the **domain of dependence** (or *past history*) is the closed triangle with apex $(x,t)$ bounded below by that interval and on the sides by the two backward characteristics through $(x,t)$.
- The **domain of influence** of an initial point $(x_0,0)$ is the set of later points whose solution it can affect, namely the sector $\{(y,s) : s \ge 0,\ |y - x_0| \le cs\}$ bounded by the two forward characteristics through $(x_0,0)$.

The two notions are the same relation read in opposite directions: $(x_0,0)$ lies in the domain of dependence of $(x,t)$ exactly when $(x,t)$ lies in the domain of influence of $(x_0,0)$.
:::

:::statement[Causality: finite speed of propagation]{provenance=adapted src="strauss-2008:§2.2 (Causality), p. 39"}
Let $\varphi \in C^2(\mathbb{R})$, $\psi \in C^1(\mathbb{R})$ and let $u$ be given by (D). Then:

1. $u(x,t)$ depends on $\varphi$ only through its values at the two points $x \pm ct$, and on $\psi$ only through its values on $[x-ct,\, x+ct]$. Equivalently, changing the data outside the *closed* interval $[x-ct,\,x+ct]$ — the closure of the interval of dependence — does not change $u(x,t)$. The two endpoints may not be excluded: $\varphi(x\pm ct)$ enters (D) directly, so Strauss's open interval of dependence $(x-ct,x+ct)$ names the interval across which $\psi$ is averaged, not the whole set of data that $u(x,t)$ reads.
2. If $\varphi$ and $\psi$ vanish for $|x| > R$, then $u(x,t) = 0$ for $|x| > R + ct$. In Strauss's words, the domain of influence of the interval $\{|x| \le R\}$ is the sector $\{|x| \le R + ct\}$.

So no part of the solution travels faster than $c$. Parts of it may lag behind: an initial velocity spreads out at speeds up to $c$, not exactly $c$ (Strauss, p. 39).
:::

:::proof{provenance=original}
Both parts are read off (D), whose right-hand side involves only $\varphi(x\pm ct)$ and the values of $\psi$ on $[x-ct,x+ct]$. That is assertion 1, and it is a consequence of the uniqueness in Step 4: since (D) is the only solution, there is nothing else for $u(x,t)$ to depend on.

For assertion 2, suppose $\varphi$ and $\psi$ vanish outside $[-R,R]$, and let $|x| > R + ct$ with $t \ge 0$. Say $x > R + ct$ (the case $x < -(R+ct)$ is the mirror image). Then

$$
x - ct > R \qquad\text{and}\qquad x + ct \ge x - ct > R ,
$$

the second because $ct \ge 0$. Hence the whole interval $[x-ct,\, x+ct]$ lies in $(R,\infty)$, where $\varphi$ and $\psi$ vanish. Every term of (D) is therefore zero, so $u(x,t) = 0$. $\square$
:::

:::method[Reflection at a boundary]{provenance=adapted src="strauss-2008:§3.2, Eq. (2)–(3), pp. 61–63, and Eq. (5), pp. 63–64; evans-2010:§2.4.1a (A reflection method), problem (9) and Eq. (10), pp. 66–67; stein-shakarchi-2003:Ch. 1 §1, p. 10"}
To solve the wave equation on a half-line or an interval with homogeneous boundary conditions, extend the data to the whole line so that the boundary condition is enforced by symmetry, apply (D), and restrict.

**Half-line $x>0$, fixed end (Dirichlet).** Problem: $v_{tt} = c^2v_{xx}$ for $x>0$, $v(x,0)=\varphi(x)$, $v_t(x,0)=\psi(x)$ for $x > 0$, and $v(0,t)=0$.

1. *Check compatibility.* For a $C^2$ solution the data must satisfy $\varphi(0) = \psi(0) = 0$ (Evans assumes exactly this), since $v(0,t) \equiv 0$ forces $v$ and $v_t$ to vanish at $x=0$ when $t=0$.
2. *Extend oddly.* Put $\varphi_{\mathrm{odd}}(x) = \varphi(x)$ for $x>0$, $-\varphi(-x)$ for $x<0$, $0$ at $x=0$, and similarly for $\psi$.
3. *Solve on the line.* Let $u$ be given by (D) with data $\varphi_{\mathrm{odd}}, \psi_{\mathrm{odd}}$. Because the equation and the formula are invariant under $x \mapsto -x$, $u$ is odd in $x$ for every $t$; hence $u(0,t) = 0$ automatically.
4. *Restrict.* $v = u|_{x>0}$ solves the half-line problem. Unwinding the extension, Strauss's two cases are

$$
v(x,t) = \begin{cases}
\dfrac12\bigl[\varphi(x-ct)+\varphi(x+ct)\bigr] + \dfrac{1}{2c}\displaystyle\int_{x-ct}^{x+ct}\psi, & x > c|t| ,\\[2ex]
\dfrac12\bigl[\varphi(ct+x)-\varphi(ct-x)\bigr] + \dfrac{1}{2c}\displaystyle\int_{ct-x}^{ct+x}\psi, & 0 < x < c|t| .
\end{cases}
$$

Evans's formula (10) is the same pair with $c=1$. Geometrically: draw the two backward characteristics from $(x,t)$; if one of them meets the boundary $x=0$ before the initial line, the reflection flips the sign of the $\varphi$-contribution carried along it, and the $\psi$-contributions outside $[ct-x, ct+x]$ cancel in pairs.
5. *Free end (Neumann), $v_x(0,t)=0$.* Use the **even** extension instead, $\varphi_{\mathrm{even}}(x)=\varphi(|x|)$ and $\psi_{\mathrm{even}}(x) = \psi(|x|)$. An even function has odd derivative, so $u_x(0,t)=0$ automatically, and no compatibility condition on $\varphi(0),\psi(0)$ is needed. For $x > c|t|$ the formula is unchanged, the first case above. For $0<x<c|t|$ the $\varphi$-terms now *add* rather than cancel, and so do the two halves of the $\psi$-integral: substituting $y \mapsto -y$ in $\int_{x-ct}^{0}\psi_{\mathrm{even}}$ turns it into $\int_0^{ct-x}\psi$, which has the same sign as $\int_0^{ct+x}\psi$, so

 $$
 v(x,t) = \frac12\bigl[\varphi(ct+x) + \varphi(ct-x)\bigr]
 + \frac{1}{2c}\left[\int_0^{ct+x}\psi + \int_0^{ct-x}\psi\right],
 \qquad 0 < x < c|t| .
 $$

 It is only when $\psi \equiv 0$ that this is the Dirichlet formula with the minus sign turned into a plus; in general the $\psi$-term is different, as the simplest example shows: for $c=1$, $\varphi\equiv0$ and $\psi\equiv1$ on $x>0$ the free end gives $v = \tfrac12[(t+x)+(t-x)] = t$, which is right, whereas replacing the minus sign by a plus in the Dirichlet $\psi$-integral $\tfrac{1}{2}\int_{t-x}^{t+x}1$ would give $x$. Strauss carries out the even-extension version of the reflection method for the diffusion equation on pp. 59–60 and leaves the Neumann wave problem as an exercise, so we state it as the parallel calculation that it is. The physical content of the sign in the $\varphi$-terms is that a pulse arriving at a fixed end returns inverted, while at a free end it returns upright.

**Interval $0<x<L$, both ends fixed.** Extend $\varphi$ and $\psi$ to be odd about *both* $x=0$ and $x=L$, equivalently odd on $(-L,L)$ and then $2L$-periodic, and apply (D) to the extension. This is Strauss's Eq. (5) and the device Stein and Shakarchi use (with $L=\pi$) to keep both ends of a string fixed. Unwound, it describes a wave reflecting off the two ends infinitely often, changing sign each time; the compact alternative is to expand in the standing waves of :ref[standing waves and normal modes]{to=pde.vibrating-string-modes}.
:::

:::example[A velocity pulse on the whole line]{provenance=original}
Take $c = 2$, $\varphi \equiv 0$ and

$$
\psi(x) = x\,e^{-x^2},
$$

which is $C^\infty$, so the hypotheses hold. Since $\int \psi = -\tfrac12 e^{-x^2} + \text{const}$, formula (D) gives

$$
u(x,t) = \frac{1}{2c}\int_{x-ct}^{x+ct} s\,e^{-s^2}\,ds
 = \frac{1}{4c}\Bigl[e^{-(x-ct)^2} - e^{-(x+ct)^2}\Bigr].
$$

*Checks.* Differentiating, $u_{tt} - c^2u_{xx} = 0$ identically; $u(x,0) = 0$; and $u_t(x,0) = \tfrac12[\psi(x)+\psi(x)] = xe^{-x^2}$ by the formula for $u_t$ in Step 5. A number: at $x = 1$, $t = \tfrac12$, so $ct = 1$,

$$
u\bigl(1,\tfrac12\bigr) = \frac18\bigl[e^{0} - e^{-4}\bigr] = \frac{1 - e^{-4}}{8} = 0.1227105\ldots
$$

*Reading the answer.* The solution is the difference of two bumps of height $1/(4c) = 1/8$, one centred on the characteristic $x = ct$ and one, with the opposite sign, on $x = -ct$. So an initial velocity that is odd in $x$ sends a positive pulse to the right at speed $2$ and a negative one to the left, and at any fixed $x>0$ the displacement rises and falls once as the right-moving bump passes. Note that $u$ does *not* return to zero behind the pulse here only because the data are not compactly supported. The residual is small very quickly all the same: at a fixed $x$ the dominant term is $\tfrac{1}{4c}e^{-(ct-x)^2}$, a Gaussian in $t$, at $x=1$, $c=2$ the displacement peaks at $u(1,\tfrac12) = 0.1227$ and has fallen to $u(1,2) = 1.54\times10^{-5}$, about $1.2\times10^{-4}$ of that, by $t=2$.

*Bonus: a half-line problem solved for free.* This $u$ is odd in $x$ (swapping $x \to -x$ exchanges the two exponentials and flips the sign), so $u(0,t) = 0$ for all $t$. By step 3 of the method, its restriction to $x > 0$ is the solution of the Dirichlet half-line problem with $\varphi \equiv 0$ and $\psi(x) = xe^{-x^2}$ for $x>0$ — data which do satisfy the compatibility condition $\psi(0)=0$.
:::

:::example[A pulse reflected from a fixed end]{provenance=original}
A string occupies $x > 0$ with its end held at $u = 0$, and $c = 3$. Release it from rest with the shape

$$
\varphi(x) = x^3 e^{-x}, \qquad \psi \equiv 0 .
$$

This is a single bump with its maximum at $x = 3$, of height $27e^{-3} = 1.344251$. Compatibility holds, and more: $\varphi(0) = \varphi''(0) = 0$, so the odd extension is $C^3$ across the origin. (The odd extension of a function is $C^k$ when its even-order derivatives up to order $k$ vanish at $0$: the odd-order derivatives of an odd extension are even and match automatically, while the even-order ones are odd and match only if they vanish. From $\varphi(x) = x^3 - x^4 + \tfrac12x^5 - \cdots$ we read $\varphi(0)=\varphi''(0)=0$, which is what gives $C^3$, and $\varphi''''(0) = -24 \neq 0$, which is the obstruction to $C^4$. The value $\varphi'''(0)=6$ is of odd order and no obstruction at all.) The solution is therefore a genuine $C^2$ solution.

With $\psi \equiv 0$ the reflection formulas reduce to

$$
v(x,t) = \tfrac12\bigl[\varphi(x+ct) + \varphi(x-ct)\bigr] \ \ (x>ct), \qquad
v(x,t) = \tfrac12\bigl[\varphi(ct+x) - \varphi(ct-x)\bigr] \ \ (0<x<ct).
$$

Watch the point $x = 1$, where the two half-bumps of height $\tfrac12\varphi$ pass in turn.

1. *Before reflection, $t = \tfrac{1}{12}$, so $ct = \tfrac14 < x$:*
 $v = \tfrac12[\varphi(1.25) + \varphi(0.75)] = \tfrac12[0.559580 + 0.199280] = 0.379430$.
2. *The left-moving half has hit the wall and come back; $t=1$, $ct = 3$:*
 $v(1,1) = \tfrac12[\varphi(4) - \varphi(2)] = \tfrac12[1.172201 - 1.082682] = 0.044759$.
 Without the wall the same data would give $\tfrac12[\varphi(4)+\varphi(2)] = 1.127442$ at that point: the reflected pulse has cancelled nearly all of it.
3. *The inverted pulse arrives in full; $t = \tfrac43$, $ct = 4$:*
 $v\bigl(1,\tfrac43\bigr) = \tfrac12[\varphi(5) - \varphi(3)] = \tfrac12[0.842243 - 1.344251] = -0.251004$.
 The displacement is now negative. The second term, $-\tfrac12\varphi(3) = -0.672125$, is the crest of the inverted reflected pulse passing $x=1$; the first, $+\tfrac12\varphi(5) = 0.421122$, is the tail of the right-moving half-bump, and the two partly cancel.

*Checks.* $v(0,t) = \tfrac12[\varphi(ct)-\varphi(ct)] = 0$ for every $t$, as required. The crest of the inverted reflected wave sits where $ct - x = 3$, that is on the line $x = 3t - 3$, which is the characteristic $x + ct = 3$ reflected in the boundary — exactly the picture Strauss draws (his Figure 2, p. 62). This sign inversion is the familiar behaviour of a pulse sent down a rope whose far end is clamped.
:::

:::application{provenance=adapted src="strauss-2008:§2.2, pp. 40–41; rhb-2006:§20.4, pp. 694–695"}
**Strings and pulses.** For a string of tension $\tau$ and density $\rho$ the formula says that a pluck ($\psi = 0$) splits into two half-amplitude copies of the initial shape moving apart at $c = \sqrt{\tau/\rho}$, while a hammer blow ($\varphi = 0$, $\psi$ concentrated) produces a plateau spreading at speed $c$. Riley, Hobson and Bence read the three terms of (D) in just this way: each half of the initial displacement travels towards $x$ from a distance $ct$ on either side, and the integral accumulates the transverse displacement delivered by every part of the initial motion that has had time to reach $x$.

**Time of arrival.** Causality turns into an engineering statement: a disturbance at one end of a $0.65\,\mathrm{m}$ steel string with $c = 126.5\,\mathrm{m\,s^{-1}}$ cannot be felt at the other end before $0.65/126.5 = 5.14\,\mathrm{ms}$, whatever the data are. The same arithmetic gives arrival times in seismology (P and S waves have different $c$, hence the delay used to locate an earthquake) and in transmission lines, where $u$ is voltage and reflections at an unmatched termination are exactly the sign-flipping reflections of the method above.

**Electromagnetism and relativity.** Each Cartesian component of $\mathbf{E}$ and $\mathbf{B}$ in vacuum satisfies the wave equation with $c$ the speed of light, so causality says that a signal at $(x_0,t_0)$ cannot outrun light. Strauss identifies this as the cornerstone of relativity, and notes that in three dimensions the principle is sharper still — signals travel at exactly $c$, which is Huygens's principle (:ref[the wave equation in three dimensions]{to=pde.wave-three-dimensions}).

**Where it is used next.** The two-case reflection formula is the engine of the three-dimensional solution, where the spherical mean of $u$ satisfies a half-line problem in the radius; the causality statement is proved again, without any formula and in any dimension, by the energy method of :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy}; and the characteristics that carry $F$ and $G$ are the model case for the :ref[method of characteristics]{to=pde.first-order-characteristics} and for the shock-forming equations of :ref[conservation laws and shocks]{to=pde.conservation-laws-shocks}.
:::
