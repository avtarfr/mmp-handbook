---
id: green.integral-equations
title: Classification of integral equations
kind: definition
level: core
summary: The vocabulary of linear integral equations — first and second kind, Fredholm and Volterra, the kernel and the classes of kernel that make the integral operator bounded or compact — together with the recipe that turns a second-order linear ODE with its data into an equivalent integral equation, Volterra for initial conditions and Fredholm for boundary conditions.
prereqs: [linalg.inner-product-spaces, funcan.bounded-operators, funcan.compact-operators]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§18.1 (Classification), pp. 543–545: the four kinds, the kernel, the parameter in eqs. (18.1)–(18.2), characteristic values, and Thm 18.1.1"
    pages: "543-545"
    role: the four-way classification; the term kernel; the parameter multiplying the integral and the notion of a characteristic value; Theorem 18.1.1 on how characteristic values are distributed
  - work: rhb-2006
    loc: "Ch. 23 opening, p. 803; §23.1 (obtaining an integral equation from a differential equation), pp. 803–804; §23.2 (types of integral equation), eq. (23.4) and pp. 804–805; §23.3 (operator notation), eqs. (23.5)–(23.7), pp. 805–806; §23.4.2 (integral transform methods), the definition of a displacement kernel and eq. (23.17), p. 809"
    pages: "803-806, 809"
    role: the general linear form with g(x) in front; first versus second kind, homogeneous versus inhomogeneous, singular equations; the integral operator and its Hermitian conjugate; the reduction of a second-order ODE to a Volterra equation by double integration; the term displacement kernel for a kernel depending on the difference of its arguments
  - work: arfken-2013
    loc: "§21.1 (Introduction), pp. 1047–1048: the two-way classification and eqs. (21.1)–(21.4); Example 21.1.1 (momentum representation), pp. 1048–1049; transformation of an ODE, eqs. (21.7)–(21.11), pp. 1049–1050; Example 21.1.2 (linear oscillator) and the summary on boundary conditions, pp. 1050–1052"
    pages: "1047-1052"
    role: the classification; the explicit kernel and inhomogeneous term obtained from a second-order ODE with initial data; the statement that initial data give a Volterra equation and two-point boundary data a Fredholm equation whose kernel is the Green's function; the momentum-space Schrödinger equation as an integral equation
  - work: stakgold-holst-2011
    loc: "§6.1 (Introduction), pp. 351–359: the four listed advantages of the integral formulation, p. 351; the integral operator, eqs. (6.1.16)–(6.1.17), p. 355; the definitions of separable, Hilbert–Schmidt and Holmgren kernels, pp. 356–357; the theorem that an H.-S. operator is compact, pp. 357–358; the adjoint kernel, eq. (6.1.23), and the iterated kernels, eqs. (6.1.25)–(6.1.27), pp. 358–359; §6.2, eqs. (6.2.1)–(6.2.2) and Thm 6.2.1 with its Remark 1 (the range of a compact operator need not be closed), p. 360"
    pages: "351-360"
    role: the classes of kernel and the compactness of Hilbert–Schmidt operators; the adjoint and iterated kernels; the alternative convention in which the parameter is an eigenvalue of the integral operator; why boundary-value problems are recast as integral equations
  - work: kreyszig-1978
    loc: "§5.4, eq. (1) and footnote 2, p. 319; the remark that a Volterra equation is a Fredholm equation whose kernel vanishes above the diagonal, p. 323"
    pages: "319-323"
    role: the convention for the Fredholm equation of the second kind on C[a, b]; the observation that a Volterra equation is the special Fredholm equation whose kernel vanishes for t > x
  - work: reed-simon-1980
    loc: "§VI.6, Thm VI.23, p. 210"
    pages: "210"
    role: the identification of the Hilbert-Schmidt operators on a square-integrable function space with the integral operators whose kernel is square-integrable on the product, and the formula for the Hilbert-Schmidt norm
---

:::definition[Linear integral equations: the four kinds]{provenance=adapted src="rhb-2006:§23.2, eq. (23.4), pp. 804–805; hassani-2013:§18.1, pp. 543–544; arfken-2013:§21.1, eqs. (21.1)–(21.4), pp. 1047–1048"}
An **integral equation** is an equation for an unknown function in which that function occurs under an integral sign. Riley, Hobson and Bence take as the general **linear** integral equation
$$
g(x)\,y(x) \;=\; f(x) \;+\; \lambda\int_{a}^{b} K(x,z)\,y(z)\,\mathrm{d}z ,
$$
in which $y$ is the unknown and the functions $g$, $f$ and $K$, the limits $a$ and $b$, and the scalar $\lambda$ are given. The function $K$ of two variables is the **kernel** of the equation, and $\lambda$ is a parameter whose role is explained below. Both limits may depend on $x$.

Four names classify the cases. The **kind** records where the unknown appears:

- $g\equiv 0$: the unknown occurs only inside the integral, and the equation is of the **first kind**.
- $g\equiv 1$: the unknown occurs both inside and outside, and the equation is of the **second kind**.

The other name records the limits:

- both limits are constants: a **Fredholm** equation.
- the upper limit is the variable $x$: a **Volterra** equation.

Spelling out the four combinations with $g\equiv0$ or $g\equiv1$, and absorbing $\lambda$ into $K$ for the equations of the first kind, where it may be divided out:
$$
\int_{a}^{x} K(x,t)\,u(t)\,\mathrm{d}t = v(x)
\qquad\text{Volterra, first kind,}
$$
$$
\int_{a}^{b} K(x,t)\,u(t)\,\mathrm{d}t = v(x)
\qquad\text{Fredholm, first kind,}
$$
$$
u(x) = v(x) + \lambda\int_{a}^{x} K(x,t)\,u(t)\,\mathrm{d}t
\qquad\text{Volterra, second kind,}
$$
$$
u(x) = v(x) + \lambda\int_{a}^{b} K(x,t)\,u(t)\,\mathrm{d}t
\qquad\text{Fredholm, second kind.}
$$
Independently of all this, the equation is **homogeneous** if $v\equiv 0$ and **inhomogeneous** otherwise. It is **singular** if either limit is infinite, or if $K$ becomes infinite somewhere in the range of integration.
:::

:::definition[The integral operator and its kernel classes]{provenance=adapted src="stakgold-holst-2011:§6.1, eqs. (6.1.16)–(6.1.17), p. 355, the three kernel definitions, pp. 356–357, and eqs. (6.1.23), (6.1.25)–(6.1.27), pp. 358–359; rhb-2006:§23.3, eq. (23.5) and the formula for K†, p. 805"}
Let $-\infty\le a<b\le\infty$. A kernel $K$ on the square $[a,b]\times[a,b]$ defines the **integral operator** $\mathcal{K}$ by
$$
(\mathcal{K}u)(x) \;=\; \int_{a}^{b} K(x,t)\,u(t)\,\mathrm{d}t ,
\qquad x\in(a,b) .
$$
(The open interval, because $a$ and $b$ are allowed to be infinite and are then not points at which $\mathcal{K}u$ is evaluated; for a finite interval the endpoints may be included or not, since a set of measure zero does not change an element of $L^{2}$.)
It is linear in $u$, so every second-kind Fredholm equation reads $u = v+\lambda\mathcal{K}u$, that is $(1-\lambda\mathcal{K})u = v$, and every first-kind one reads $\mathcal{K}u = v$. Throughout we use the inner product
$$
(u,w) \;=\; \int_{a}^{b} u(x)\,\overline{w(x)}\,\mathrm{d}x
$$
on $L^{2}(a,b)$, linear in its first slot, and $\|u\|^{2}=(u,u)$. Stakgold and Holst name the following classes of kernel; $\mathcal{K}$ is called separable, Hilbert–Schmidt or Holmgren when its kernel is.

- $K$ is **separable** (or **degenerate**) if
  $$
  K(x,t) = \sum_{i=1}^{n} p_i(x)\,\overline{q_i(t)}
  $$
  with $n$ finite and every $p_i,q_i$ in $L^{2}(a,b)$.
- $K$ is a **Hilbert–Schmidt kernel** if it is square-integrable on the square,
  $$
  \int_{a}^{b}\!\!\int_{a}^{b} \lvert K(x,t)\rvert^{2}\,\mathrm{d}x\,\mathrm{d}t < \infty .
  $$
- $K$ is a **Holmgren kernel** if
  $$
  \sup_{a\le \eta\le b}\ \int_{a}^{b}\!\!\int_{a}^{b} \lvert K(x,t)\rvert\,\lvert K(x,\eta)\rvert\,\mathrm{d}x\,\mathrm{d}t < \infty .
  $$

The **adjoint kernel** is $K^{*}(x,t) = \overline{K(t,x)}$; it generates the Hilbert-space adjoint $\mathcal{K}^{*}$, so that $(\mathcal{K}u,w) = (u,\mathcal{K}^{*}w)$. Riley, Hobson and Bence write $\mathsf{K}^{\dagger}$ for the same operator. The kernel is **symmetric** if $K(x,t)=K(t,x)$ and **Hermitian** if $K(x,t)=\overline{K(t,x)}$; for a Hermitian kernel $K^{*}=K$, so $\mathcal{K}^{*}=\mathcal{K}$ and the operator is **self-adjoint**. In this handbook *symmetric* always has the kernel-level meaning just given and never the operator-theoretic one: functional analysis often uses "symmetric operator" as a synonym for self-adjoint in the bounded case, but a complex symmetric kernel gives a self-adjoint operator only when $K$ is real, so the two words would conflict here. Finally, the **iterated kernels** are
$$
K_{1}=K, \qquad
K_{m}(x,t) \;=\; \int_{a}^{b} K(x,s)\,K_{m-1}(s,t)\,\mathrm{d}s \quad (m\ge2),
$$
and $K_{m}$ is the kernel of $\mathcal{K}^{m}$; equivalently $K_m$ is the $(m-1)$-fold integral of a product of $m$ copies of $K$ along a chain of intermediate variables. Both symmetries pass to the iterates: if $K$ is symmetric, so is every $K_{m}$, and if $K$ is Hermitian, so is every $K_{m}$. For the Hermitian case and $m=2$, conjugating and relabelling gives
$$
\overline{K_{2}(t,x)} = \int_{a}^{b}\overline{K(t,s)}\,\overline{K(s,x)}\,\mathrm{d}s
= \int_{a}^{b} K(x,s)\,K(s,t)\,\mathrm{d}s = K_{2}(x,t) ,
$$
and for general $m$ the same computation works on $K_{m}(x,t)=\int_{a}^{b}K_{m-1}(x,s)K(s,t)\,\mathrm{d}s$ (the kernel of $\mathcal{K}^{m-1}\mathcal{K}$, which is the same operator as $\mathcal{K}\mathcal{K}^{m-1}$), with $K_{m-1}$ Hermitian by induction. Replacing every conjugate bar by nothing gives the symmetric case.

One notational point, fixed here once: $u$ and $v$ name the unknown and the given function in the abstract statements, and $y$ and $f$ name them wherever the equation comes from a differential equation — so the second-kind Fredholm equation is written $u=v+\lambda\mathcal{K}u$ in the definitions and statements above and below, and $y=f+\lambda\mathcal{K}y$ in the method, the example and the applications, where $y$ is the solution of an ODE and $f$ carries its data. The two are the same equation under $u\leftrightarrow y$, $v\leftrightarrow f$.
:::

:::statement[Boundedness and compactness]{provenance=adapted src="stakgold-holst-2011:§6.1, eq. (6.1.20), p. 357, and the theorem that an H.-S. operator is compact, with its proof, pp. 357–358; reed-simon-1980:Thm VI.23, p. 210; hassani-2013:§18.1, p. 544"}
Let $K$ be a Hilbert–Schmidt kernel on $[a,b]\times[a,b]$. Then $\mathcal{K}$ maps $L^{2}(a,b)$ into itself, is bounded with
$$
\|\mathcal{K}\| \;\le\; \Bigl(\int_{a}^{b}\!\!\int_{a}^{b}\lvert K(x,t)\rvert^{2}\,\mathrm{d}x\,\mathrm{d}t\Bigr)^{1/2},
$$
and is **compact**. A separable kernel is Hilbert–Schmidt, and a Holmgren kernel also generates a bounded operator.

Reed and Simon state the converse as well: an operator on $L^{2}(M,\mathrm{d}\mu)$ is Hilbert–Schmidt — that is, has $\operatorname{tr}A^{*}A<\infty$ — **if and only if** it is the integral operator of a kernel $K\in L^{2}(M\times M,\mathrm{d}\mu\otimes\mathrm{d}\mu)$, and then $\|A\|_{2}^{2}=\iint\lvert K\rvert^{2}$. So "Hilbert–Schmidt kernel" and "Hilbert–Schmidt operator" name the same objects from the two sides.

Compactness is what makes the second-kind Fredholm equation behave like a finite linear system. Hassani records the consequence for the parameter $\lambda$: a value of $\lambda$ for which the homogeneous equation $u=\lambda\mathcal{K}u$ has a nonzero solution is called a **characteristic value** of the equation, and $\lambda$ is a characteristic value exactly when $\lambda^{-1}$ is an eigenvalue of $\mathcal{K}$. His Theorem 18.1.1 then says how they are distributed in the second-kind Fredholm case: there are either finitely many of them, or infinitely many, and in the second case they can be listed as a sequence $\lambda_1,\lambda_2,\dots$ of complex numbers whose moduli grow without bound. Equivalently — and this is how Hassani derives it — the eigenvalues $\lambda_n^{-1}$ of the compact operator $\mathcal{K}$ either are finite in number or accumulate only at $0$ (:ref[]{to=funcan.compact-operators}).
:::

:::remark[Two conventions for the parameter, and what to watch]{provenance=adapted src="hassani-2013:§18.1, eqs. (18.1)–(18.3), pp. 543–544; stakgold-holst-2011:§6.2, eqs. (6.2.1)–(6.2.2), p. 360; kreyszig-1978:§5.4, eq. (1) and footnote 2, p. 319, and p. 323; rhb-2006:§23.2, p. 805"}
- **Where $\lambda$ sits.** This handbook follows Hassani, Arfken–Weber–Harris and Riley–Hobson–Bence in writing the second-kind equation as $u=v+\lambda\mathcal{K}u$. Then $\lambda$ multiplies the integral, the homogeneous equation is $u=\lambda\mathcal{K}u$, and the special values of $\lambda$ are *reciprocals* of the eigenvalues of $\mathcal{K}$; Hassani calls them characteristic values, Riley, Hobson and Bence call them simply the eigenvalues $\lambda_i$ of the integral equation. Stakgold and Holst instead write the equation as $\mathcal{K}u-\lambda u = f$, so that their $\lambda$ *is* an eigenvalue of $\mathcal{K}$ and their first kind is the case $\lambda=0$. The two conventions are related by $\lambda_{\text{here}} = 1/\lambda_{\text{S\&H}}$, and formulas transcribed between them without that substitution are wrong: for instance "the series converges for $\lvert\lambda\rvert$ small" in the first convention is "the series converges for $\lvert\lambda\rvert$ large" in the second. Where a result below is taken from Stakgold and Holst, it is restated in the convention of this handbook and the translation is flagged.
- **Kreyszig's sign.** Kreyszig writes the second-kind Fredholm equation as $x(t)-\mu\int_a^b k(t,\tau)x(\tau)\,\mathrm{d}\tau = v(t)$, which is ours with $\lambda=\mu$ and the integral moved to the left. He notes in a footnote that it is the presence of the term $x(t)$ outside the integral that makes iteration possible, and that is exactly why the second kind is the tractable one.
- **Volterra is a special Fredholm.** A Volterra equation is the Fredholm equation with the same constant limits whose kernel has been extended by $K(x,t)=0$ for $t>x$, as both Kreyszig (p. 323) and Riley, Hobson and Bence (p. 805) point out. The extended kernel need not be continuous across the diagonal $t=x$. Everything proved for Fredholm equations therefore applies to Volterra equations, but not conversely: the triangular support gives the Volterra case much stronger conclusions (:ref[]{to=green.volterra-equations}).
- **The first kind is the hard one.** For the second kind, $1-\lambda\mathcal{K}$ is a small perturbation of the identity when $\lambda$ is small, and it is invertible. For the first kind one must invert $\mathcal{K}$ itself, and a compact operator on an infinite-dimensional space has no bounded inverse: its range is not all of $L^2$ and, as Stakgold and Holst remark, the range need not even be closed. So a first-kind equation may have no solution for a perfectly reasonable $v$, and the solution, where it exists, need not depend continuously on $v$. This is the mathematical content of the statement that deconvolution and inverse problems are ill-posed.
:::

:::method[Turning a second-order linear ODE into an integral equation]{provenance=adapted src="arfken-2013:§21.1, eqs. (21.7)–(21.11), pp. 1049–1050, Example 21.1.2 and the summary, pp. 1050–1052; rhb-2006:§23.1, eqs. (23.1)–(23.3), pp. 803–804"}
Given
$$
y'' + A(x)\,y' + B(x)\,y = g(x)
$$
on an interval starting at $a$, with $A$ **continuously** differentiable and $B$, $g$ continuous, proceed as follows. (Arfken, Weber and Harris carry out the computation without stating any hypotheses on $A$, $B$ and $g$; the ones named here are ours, chosen so that every step below is justified, and the remark says where each is used. Continuity of $A'$, not merely its existence, is what the integration by parts, the exchange of the order of integration and the continuity of the resulting kernel all need.)

1. **Initial data.** If the data are $y(a)=y_{0}$ and $y'(a)=y_{0}'$, integrate the equation once from $a$ to $x$, integrate the $A y'$ term by parts to remove the derivative of the unknown, and integrate a second time, converting the resulting double integral $\int_a^x\mathrm{d}u\int_a^u \mathrm{d}t$ into $\int_a^x (x-t)\,\mathrm{d}t$ by exchanging the order of integration. The result is the Volterra equation of the second kind
   $$
   y(x) = f(x) + \int_{a}^{x} K(x,t)\,y(t)\,\mathrm{d}t
   $$
   with
   $$
   K(x,t) = (t-x)\bigl[B(t)-A'(t)\bigr] - A(t),
   $$
   $$
   f(x) = \int_{a}^{x}(x-t)\,g(t)\,\mathrm{d}t \;+\; \bigl[A(a)\,y_{0}+y_{0}'\bigr](x-a) \;+\; y_{0}.
   $$
   The initial conditions have been absorbed into $f$; no side conditions remain to be imposed.
2. **Two-point boundary data.** If instead the data are $y(a)=y(b)=0$, the quantity $y'(a)$ is not given, so carry it as an unknown constant through the two integrations and then fix it by imposing the condition at $x=b$. Substituting the resulting expression back and splitting the range at $x$ produces a **Fredholm** equation of the second kind on $[a,b]$. Arfken, Weber and Harris summarise the outcome thus: boundary conditions at both ends lead to a Fredholm-type equation whose kernel is the Green's function belonging to the differential operator with the boundary conditions imposed (:ref[]{to=green.green-function-bvp}). They carry the computation out for the oscillator $y''+\omega^{2}y=0$ on $[0,b]$ with $y(0)=y(b)=0$ — the case $A\equiv0$, $B\equiv\omega^{2}$ of the equation above, with the constant $\omega^{2}$ taken outside the integral as the parameter — and obtain $y(x)=\omega^{2}\int_{0}^{b}K(x,t)y(t)\,\mathrm{d}t$ with
   $$
   K(x,t) = \begin{cases} t(b-x)/b, & t<x,\\[2pt] x(b-t)/b, & t>x,\end{cases}
   $$
   of which they list three properties: it is symmetric, it is continuous across $t=x$, and $\partial K/\partial t$ jumps by $-1$ as $t$ increases through $t=x$. Continuity, a unit jump in the $t$-derivative across the diagonal and symmetry are the characteristic features of the Green's function of a self-adjoint second-order operator, and that is how they make the identification. How much of this survives for general $A$ and $B$ is the subject of the note below.
3. **Read off the classification.** Initial conditions at one end give a Volterra equation; boundary conditions at both ends give a Fredholm equation with a Green's-function kernel. Which of the four kinds appears is decided by the side conditions, not by the differential operator.
4. **Going back.** Differentiate the integral equation in $x$ as often as needed, using $\frac{\mathrm{d}}{\mathrm{d}x}\int_{a}^{x}F(x,t)\,\mathrm{d}t = F(x,x)+\int_{a}^{x}\partial_{x}F(x,t)\,\mathrm{d}t$, and evaluate the equation and its derivatives at $x=a$ to recover the initial data. This direction is not always available: Arfken, Weber and Harris warn that some integral equations have no differential counterpart that anyone has found.

Riley, Hobson and Bence carry out step 1 for the more general $y''=F(x,y)$, which produces the nonlinear Volterra equation $y(x)=\int_0^x (x-z)F(z,y(z))\,\mathrm{d}z + c_1x+c_2$; the conversion does not need linearity, only that $F$ is free of $y'$.
:::

:::note[What the Fredholm kernel of step 2 looks like in general]{provenance=original}
The three properties listed in step 2 belong to the kernel of the oscillator example, not to every equation the method starts from. Carrying out step 2 for general $A$ and $B$ on $[a,b]$ with $y(a)=y(b)=0$ gives the following, and the two computations below were checked numerically against the exact solutions of the corresponding boundary-value problems.

- **$A\equiv0$.** Write $\Gamma$ for the Green's function of $-\mathrm{d}^{2}/\mathrm{d}x^{2}$ on $[a,b]$ with Dirichlet data,
  $$
  \Gamma(x,t) = \frac{1}{b-a}\begin{cases}(t-a)(b-x), & t<x,\\[2pt] (x-a)(b-t), & t>x,\end{cases}
  $$
  which is continuous and symmetric with $\partial_{t}\Gamma$ jumping by $-1$ across $t=x$. Then step 2 produces the Fredholm equation $y=f+\int_{a}^{b}K(x,t)y(t)\,\mathrm{d}t$ with total kernel
  $$
  K(x,t) = B(t)\,\Gamma(x,t),
  $$
  because the equation can be read as $y''=g-By$ with $y(a)=y(b)=0$, whose solution is $y(x)=-\int_{a}^{b}\Gamma(x,t)\bigl[g(t)-B(t)y(t)\bigr]\mathrm{d}t$, the Green's function of $\mathrm{d}^{2}/\mathrm{d}x^{2}$ with these boundary conditions being $-\Gamma$; the first term is $f$ and the second is the integral operator. This kernel is continuous, but it is symmetric only when $B$ is constant, and its $t$-derivative jumps by $-B(x)$, not by $-1$. Taking $B\equiv\omega^{2}$ and dividing the constant out as the parameter leaves exactly the kernel $\Gamma$, which is Arfken, Weber and Harris's $K$ of step 2 with $a=0$: their three properties are the properties of $\Gamma$. For a variable $B$ they fail: on $[0,1]$ with $B(x)=x$ the kernel is $t^{2}(1-x)$ for $t<x$ and $xt(1-t)$ for $t>x$, continuous but not symmetric, with a jump of $-x$ in $\partial K/\partial t$.
- **$A\not\equiv0$.** Then even continuity goes. Take $A\equiv1$, $B\equiv0$ on $[0,1]$ with $y(0)=y(1)=0$, so that step 1 gives the kernel $-1$ and $f(x)=\int_{0}^{x}(x-t)g(t)\,\mathrm{d}t+cx$ with $c=y'(0)$ unknown. Imposing $y(1)=0$ fixes $c=\int_{0}^{1}y-\int_{0}^{1}(1-t)g(t)\,\mathrm{d}t$, and substituting it back gives the Fredholm equation with total kernel
  $$
  K(x,t) = \begin{cases} x-1, & t<x,\\[2pt] x, & t>x,\end{cases}
  $$
  which jumps by $+1$ across the diagonal, is not symmetric, and has $\partial K/\partial t\equiv0$ on both sides.

What is true in general is the structural statement, and that is all step 2 claims: the two-point data turn the problem into a Fredholm equation of the second kind whose kernel is built from the Green's function of the boundary-value problem. Symmetry of the kernel is a property of the *operator* — it needs the operator to be formally self-adjoint, which $\mathrm{d}^{2}/\mathrm{d}x^{2}+A\,\mathrm{d}/\mathrm{d}x+B$ is only when $A\equiv0$ — and the clean jump of $-1$ belongs to the Green's function itself rather than to the kernel, which carries the extra factor $B(t)$ (:ref[]{to=green.green-function-bvp}, :ref[]{to=ode.sturm-liouville-theory}).
:::

:::idea{provenance=original}
Why should such a conversion exist at all? A differential operator asks for local information and then needs side conditions to pin down the two constants of integration. Integrating twice replaces the derivatives by an operator that already knows the whole history of $y$ on $[a,x]$, and the two constants of integration are precisely the two pieces of data; so the data can be built into the inhomogeneous term instead of being imposed afterwards. The only technical step is exchanging the order in the double integral, which replaces $\int_a^x\mathrm{d}u\int_a^u\mathrm{d}t$ by the single integral against the weight $(x-t)$.
:::

:::proof[of the formulas in step 1]{provenance=adapted src="arfken-2013:§21.1, eqs. (21.7)–(21.10), pp. 1049–1050"}
Integrate $y''+Ay'+By=g$ from $a$ to $x$ and use $y'(a)=y_0'$:
$$
y'(x) = -\int_{a}^{x}A(t)y'(t)\,\mathrm{d}t - \int_{a}^{x}B(t)y(t)\,\mathrm{d}t + \int_{a}^{x}g(t)\,\mathrm{d}t + y_{0}' .
$$
The first integral still contains $y'$. Remove it by parts, which is legitimate because $A$ is continuously differentiable and $y$ is continuously differentiable, so both $Ay'$ and $A'y$ are continuous on $[a,x]$ and the by-parts formula applies:
$$
\int_{a}^{x}A y'\,\mathrm{d}t = A(x)y(x)-A(a)y_{0}-\int_{a}^{x}A'(t)y(t)\,\mathrm{d}t .
$$
Hence
$$
y'(x) = -A(x)y(x) - \int_{a}^{x}\bigl[B(t)-A'(t)\bigr]y(t)\,\mathrm{d}t + \int_{a}^{x}g(t)\,\mathrm{d}t + A(a)y_{0}+y_{0}' .
$$
Now integrate once more from $a$ to $x$ and use $y(a)=y_0$. Each of the three $t$-integrals becomes a double integral of the form $\int_{a}^{x}\mathrm{d}u\int_{a}^{u}\Phi(t)\,\mathrm{d}t$. The region of integration in the $(u,t)$ plane is the triangle $a\le t\le u\le x$; integrating over $u$ first instead of $t$ gives
$$
\int_{a}^{x}\mathrm{d}u\int_{a}^{u}\Phi(t)\,\mathrm{d}t
=\int_{a}^{x}\Phi(t)\Bigl(\int_{t}^{x}\mathrm{d}u\Bigr)\mathrm{d}t
=\int_{a}^{x}(x-t)\,\Phi(t)\,\mathrm{d}t ,
$$
the exchange being permitted because the integrand is continuous on the closed triangle: for $\Phi=-[B-A']y$ this is where continuity of $A'$ is needed, alongside continuity of $B$ and of the solution $y$, and for $\Phi=g$ it is continuity of $g$. Applying this to $\Phi = -[B-A']y$ and to $\Phi=g$, and integrating the constant term, we obtain
$$
y(x) = -\int_{a}^{x}A(t)y(t)\,\mathrm{d}t - \int_{a}^{x}(x-t)\bigl[B(t)-A'(t)\bigr]y(t)\,\mathrm{d}t
+\int_{a}^{x}(x-t)g(t)\,\mathrm{d}t + \bigl[A(a)y_{0}+y_{0}'\bigr](x-a)+y_{0}.
$$
Collecting the two terms that carry the unknown gives exactly $\int_a^x K(x,t)y(t)\,\mathrm{d}t$ with $K(x,t)=(t-x)[B(t)-A'(t)]-A(t)$, and the remaining terms are $f(x)$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *$A$ differentiable* is used in the integration by parts, and it is the reason $A'$ appears in the kernel. If $A$ is merely continuous, keep $\int_a^x A y'$ and work with the pair $(y,y')$ instead, or convert the ODE to a first-order system and apply step 1 componentwise.
- *$A'$ continuous* — the extra strength in "continuously differentiable" — is used three times over, and each use is about $A'$ rather than $A$. It makes $A'y$ continuous, hence integrable, in the by-parts step; it makes the integrand $-[B-A']y$ continuous on the closed triangle, which is the justification given for the exchange of the order of integration; and, since the kernel is $K(x,t)=(t-x)[B(t)-A'(t)]-A(t)$, it is what makes $K$ continuous there. Mere differentiability of $A$ would leave $A'$ possibly unbounded and all three steps unjustified.
- *$F$ free of $y'$* is what Riley, Hobson and Bence assume in the nonlinear version; with $y'$ present in $F$ the double integration no longer closes on $y$ alone.
- *Continuity of $B$ and $g$*, together with that of $A'$, is what makes $K$ continuous on the closed triangle $a\le t\le x\le b$, which is the hypothesis under which the Volterra theory of :ref[]{to=green.volterra-equations} applies.
- The conversion is an equivalence only with the side conditions attached. The ODE alone has a two-parameter family of solutions; the integral equation of step 1 has exactly one, because the data are inside $f$.
:::

:::example[An initial-value problem and its Volterra equation, both ways]{provenance=original}
**Set-up.** Take
$$
y''-2y'+y = 0, \qquad y(0)=1,\quad y'(0)=1 ,
$$
so that $A(x)=-2$, $B(x)=1$, $g\equiv0$, $a=0$, $y_{0}=y_{0}'=1$. The ODE has general solution $(c_{1}+c_{2}x)\mathrm{e}^{x}$, and the data give $c_{1}=1$, $c_{2}=0$: the solution is $y(x)=\mathrm{e}^{x}$.

**Step 1: the kernel and the inhomogeneous term.** Since $A'\equiv0$,
$$
K(x,t) = (t-x)\bigl[B(t)-A'(t)\bigr]-A(t) = (t-x)\cdot 1 - (-2) = t-x+2,
$$
$$
f(x) = 0 + \bigl[A(0)y_{0}+y_{0}'\bigr](x-0)+y_{0} = (-2+1)x+1 = 1-x .
$$
So the claim is that $y=\mathrm{e}^{x}$ is the unique solution of
$$
y(x) = 1-x+\int_{0}^{x}(t-x+2)\,y(t)\,\mathrm{d}t .
$$

**Check it directly.** With $y(t)=\mathrm{e}^{t}$ and $\int_{0}^{x}t\mathrm{e}^{t}\,\mathrm{d}t=(x-1)\mathrm{e}^{x}+1$, $\int_{0}^{x}\mathrm{e}^{t}\,\mathrm{d}t=\mathrm{e}^{x}-1$,
$$
\int_{0}^{x}(t-x+2)\mathrm{e}^{t}\,\mathrm{d}t
= (x-1)\mathrm{e}^{x}+1+(2-x)(\mathrm{e}^{x}-1)
= \mathrm{e}^{x}+x-1 ,
$$
because the coefficient of $\mathrm{e}^x$ is $(x-1)+(2-x)=1$. Adding $f(x)=1-x$ returns $\mathrm{e}^{x}$, as required.

**Step 4: recover the ODE.** Differentiate the integral equation. With $F(x,t)=(t-x+2)y(t)$ we have $F(x,x)=2y(x)$ and $\partial_{x}F=-y(t)$, so
$$
y'(x) = -1+2y(x)-\int_{0}^{x}y(t)\,\mathrm{d}t .
$$
Differentiating again, $y''(x)=2y'(x)-y(x)$, which is the original ODE. Setting $x=0$ in the integral equation gives $y(0)=1$, and in the first derivative gives $y'(0)=-1+2\cdot1=1$: both initial conditions are reproduced. The two equations really are equivalent.

**With a source term.** Changing the right-hand side of the ODE to $g\equiv2$ changes nothing in $K$ and adds $\int_{0}^{x}(x-t)\cdot2\,\mathrm{d}t = x^{2}$ to $f$, so
$$
y''-2y'+y=2,\quad y(0)=1,\ y'(0)=1
\qquad\Longleftrightarrow\qquad
y(x)=x^{2}-x+1+\int_{0}^{x}(t-x+2)y(t)\,\mathrm{d}t .
$$
The ODE now has solution $y(x)=(2x-1)\mathrm{e}^{x}+2$, which satisfies both the ODE and the data, and substituting it into the integral equation reproduces it exactly (checked symbolically).

**A boundary-value problem, for contrast.** Take
$$
y''=-\mu y \quad\text{on }[0,1], \qquad y(0)=0,\quad y'(1)=0 .
$$
The data here are not the two-point data $y(a)=y(b)=0$ of step 2 — the condition at the right end is on $y'$ — but the elimination is the same one: $y'(0)$ is the unknown constant, and the condition at $x=1$ fixes it. Here $\mu$ is a parameter rather than part of the operator, and the Green's function of $-\mathrm{d}^{2}/\mathrm{d}x^{2}$ with these boundary conditions is $\min(x,t)$, so the bookkeeping of the note above, with the constant $B\equiv\mu$ taken outside the integral as the parameter, leaves the total kernel $K(x,t)=\min(x,t)$ and a homogeneous **Fredholm** equation of the second kind,
$$
y(x) = \mu\int_{0}^{1}\min(x,t)\,y(t)\,\mathrm{d}t .
$$
Verify it on one eigenfunction. For $y(t)=\sin(\pi t/2)$ and $\omega=\pi/2$,
$$
\int_{0}^{1}\min(x,t)\sin(\omega t)\,\mathrm{d}t
=\int_{0}^{x} t\sin(\omega t)\,\mathrm{d}t + x\int_{x}^{1}\sin(\omega t)\,\mathrm{d}t
= \frac{\sin(\omega x)}{\omega^{2}} ,
$$
since the two terms $-x\cos(\omega x)/\omega$ and $+x\cos(\omega x)/\omega$ cancel, using $\cos\omega = \cos(\pi/2)=0$. So the integral equation holds exactly with $\mu=\omega^{2}=\pi^{2}/4$, which is indeed the lowest eigenvalue of the boundary-value problem. The kernel $\min(x,t)$ is continuous and symmetric and $\partial_t\min(x,t)$ drops from $1$ to $0$ as $t$ crosses $x$ — the three Green's-function properties of step 2, which hold here because the operator is $\mathrm{d}^{2}/\mathrm{d}x^{2}$ with no first-derivative term and the coefficient $\mu$ has been taken out as the parameter.
:::

:::application{provenance=original}
**Why a physicist meets these.** Three reasons, all visible in the sources.

*The boundary conditions come built in.* This is the practical payoff of the method above, and Arfken, Weber and Harris make it the headline: in an integral equation the data are part of the equation, not a condition imposed at the end. The same observation drives Stakgold and Holst's list of advantages of the integral formulation — the integral operator is bounded and often compact where the differential operator is unbounded; the kernel *is* a Green's function and so carries the boundary conditions; and a boundary-value problem for a partial differential equation can sometimes be rewritten as an integral equation over the boundary alone, of lower dimension. That last point is the whole basis of boundary-element methods in potential theory, elasticity and acoustics: a three-dimensional Laplace problem becomes a two-dimensional integral equation on the surface.

*Quantum scattering.* Arfken, Weber and Harris begin with the momentum representation of the Schrödinger equation (:cite[their Eq. (21.6)]{work=arfken-2013 loc="§21.1, Example 21.1.1, eq. (21.6), p. 1048"}): with a Coulomb potential in hartree atomic units, $\psi$ in momentum space satisfies
$$
\frac{k^{2}}{2m}\varphi(\mathbf{k}) + \frac{1}{(2\pi)^{3/2}}\int\frac{4\pi}{\lvert\mathbf{k}-\mathbf{k}'\rvert^{2}}\,\varphi(\mathbf{k}')\,\mathrm{d}^{3}k' = E\varphi(\mathbf{k}),
$$
an inhomogeneous-looking eigenvalue problem that is in fact a homogeneous integral equation. The kernel depends on $\mathbf{k}-\mathbf{k}'$ — a **displacement kernel**, in the terminology of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§23.4.2, p. 809"} — because the potential acts by multiplication in position space; displacement kernels on the whole line are exactly the ones a Fourier transform diagonalises. The same reorganisation in position space turns the scattering problem into the Lippmann–Schwinger equation, a Fredholm equation of the second kind whose iteration is the Born series (:ref[]{to=green.born-approximation}).

*First-kind equations are the inverse problems.* Every measurement that smears a quantity before recording it — a spectrometer with finite resolution, a tomograph, a seismic survey, a radiative-transfer sounding of an atmosphere — delivers data $v$ related to the quantity $u$ of interest by $\int K(x,t)u(t)\,\mathrm{d}t = v(x)$, a Fredholm equation of the first kind in which $K$ is the instrument response. The remark above says that this is precisely the situation in which no bounded inverse exists: because $\mathcal{K}$ is compact, it maps the high-frequency content of $u$ almost to zero, so recovering that content from $v$ amplifies the noise in $v$ without limit. Practitioners therefore never solve the first-kind equation as written; they regularise it, for example by solving the nearby second-kind equation $\alpha u + \mathcal{K}^{*}\mathcal{K}u = \mathcal{K}^{*}v$ with $\alpha>0$, or by truncating a singular-value expansion of $\mathcal{K}$ (:ref[]{to=linalg.svd}). The classification is thus not bookkeeping: it tells you in advance whether you are facing a well-posed problem or an ill-posed one.
:::
