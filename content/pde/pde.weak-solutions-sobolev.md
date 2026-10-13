---
id: pde.weak-solutions-sobolev
title: Weak derivatives and Sobolev spaces
kind: definition
level: advanced
summary: Defines the weak derivative of a locally integrable function, the Sobolev spaces $H^1$ and $H^1_0$ built from it, and the weak formulation of the Poisson problem, and shows that a smooth weak solution is a classical one.
prereqs: [measure.lp-spaces, fourier.distributions, funcan.hilbert-spaces]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§5.2.1, the definition of the $\\alpha$th weak partial derivative, Eq. (3), and the Lemma on its uniqueness, p. 242; §5.2.2, the definitions of $W^{k,p}(U)$, of its norm, of $H^k(U)=W^{k,2}(U)$ and of $W^{k,p}_0(U)$ as the closure of $C_c^\\infty(U)$, pp. 244–245; §5.2.2, Example 3 ($|x|^{-\\alpha}$ on the unit ball) and Example 4, pp. 245–246; §6.1.2, the motivation Eq. (7), the bilinear form Eq. (8) and the definition of a weak solution Eq. (9), pp. 295–296"
    pages: "242, 244-246, 295-296"
    role: definition of the weak derivative and its uniqueness; the Sobolev spaces $W^{k,p}$, $H^k$ and $H^1_0$; the derivation and definition of the weak formulation of the Dirichlet problem
  - work: stakgold-holst-2011
    loc: "§2.5, the distributional definition of a solution of $Lu=f$, Eq. (2.5.38), the definition of a weak solution below it, and the Theorem on p. 172 with its proof, that a classical solution is weak and that a sufficiently differentiable weak solution is classical; §2.6, $L^1_{loc}(\\Omega)$, the weak derivative Eq. (2.6.2) and the spaces $W^{m,p}(\\Omega)$, $H^m(\\Omega)=W^{m,2}(\\Omega)$, pp. 182–183"
    pages: "171-172, 182-183"
    role: the equivalence of weak and classical solutions and its proof route; a second formulation of the weak derivative and of the Sobolev classes, used here for comparison
---

:::definition[Weak derivative]{provenance=adapted src="evans-2010:§5.2.1, Eq. (3), p. 242; stakgold-holst-2011:§2.6, Eq. (2.6.2), p. 183"}
Let $\Omega \subseteq \mathbb{R}^n$ be open. Write

$$
L^1_{\mathrm{loc}}(\Omega) = \{\, u : \Omega \to \mathbb{R} \ \text{measurable} \ : \ u \in L^1(A) \ \text{for every open } A \text{ with } \overline{A} \subset \Omega \text{ compact} \,\}
$$

for the locally integrable functions, and $C_c^\infty(\Omega)$ for the smooth functions whose support is a compact subset of $\Omega$ — the **test functions** of :ref[test functions and distributions]{to=fourier.distributions}.

Let $\alpha = (\alpha_1,\dots,\alpha_n)$ be a multi-index, $|\alpha| = \alpha_1 + \dots + \alpha_n$, and $D^\alpha = \partial_1^{\alpha_1}\cdots\partial_n^{\alpha_n}$. Given $u \in L^1_{\mathrm{loc}}(\Omega)$, a function $v \in L^1_{\mathrm{loc}}(\Omega)$ is **the $\alpha$th weak derivative of $u$**, written $D^\alpha u = v$, if

$$
\int_\Omega u \, D^\alpha \varphi \, dx \;=\; (-1)^{|\alpha|} \int_\Omega v\, \varphi \, dx
\qquad \text{for every } \varphi \in C_c^\infty(\Omega) .
\tag{W}
$$

If no such $v$ exists, $u$ has no $\alpha$th weak derivative. The motivation is that (W) is the identity that repeated integration by parts gives when $u \in C^{|\alpha|}(\Omega)$: the compact support of $\varphi$ kills every boundary term, so the formula survives with the derivatives on $\varphi$ alone, and that side of it asks nothing of $u$ beyond local integrability.

Stakgold and Holst write the same definition, and both they and Evans call the resulting $v$ the weak or distributional derivative. The two words are justified: (W) says exactly that the distribution $D^\alpha T_u$ is the distribution $T_v$, where $T_w(\varphi) = \int_\Omega w\varphi\,dx$. The weak derivative is therefore the special case of the distributional derivative in which the answer happens again to be a function. The delta is the standard example where it is not.
:::

:::statement[The weak derivative is well defined, and extends the classical one]{provenance=adapted src="evans-2010:§5.2.1, Lemma (Uniqueness of weak derivatives), p. 242; stakgold-holst-2011:§2.6, the remarks following Eq. (2.6.2), p. 183"}
Let $u \in L^1_{\mathrm{loc}}(\Omega)$.

1. **Uniqueness.** If $v$ and $\tilde v$ both satisfy (W) for the same $\alpha$, then $v = \tilde v$ almost everywhere. So $D^\alpha u$ is determined as an element of $L^1_{\mathrm{loc}}(\Omega)$, that is, up to a null set.
2. **Consistency.** If $u \in C^m(\Omega)$ and $|\alpha| \le m$, then the classical $D^\alpha u$ is also the weak one. Hence the notation is unambiguous.

Both are needed before the symbol $D^\alpha u$ may be used at all; Stakgold and Holst record them in the same breath as the definition, and set the first as their Exercise 2.6.1.
:::

:::idea{provenance=original}
Part 2 is the integration by parts that motivated the definition. Part 1 reduces to a single fact: a locally integrable function that is orthogonal to every test function vanishes almost everywhere. That fact is itself proved by smoothing — a test function concentrated near a point reports the local average of $w$ there, and averages at all small scales determine $w$ off a null set.
:::

:::proof{provenance=original}
**Step 1 (the vanishing lemma).** *Let $w \in L^1_{\mathrm{loc}}(\Omega)$ satisfy $\int_\Omega w\varphi\,dx = 0$ for every $\varphi \in C_c^\infty(\Omega)$. Then $w = 0$ almost everywhere.*

Fix a mollifier: a function $\eta \in C_c^\infty(\mathbb{R}^n)$ with $\eta \ge 0$, support in the unit ball and $\int \eta = 1$, and set $\eta_\varepsilon(x) = \varepsilon^{-n}\eta(x/\varepsilon)$. Let $A$ be open with $\overline A \subset \Omega$ compact, and let $\varepsilon < \operatorname{dist}(\overline A, \partial\Omega)$. For $x \in A$ the function $y \mapsto \eta_\varepsilon(x-y)$ lies in $C_c^\infty(\Omega)$, because its support is the closed ball of radius $\varepsilon$ about $x$, which is a compact subset of $\Omega$ by the choice of $\varepsilon$. The hypothesis, applied to that test function, gives

$$
(w * \eta_\varepsilon)(x) \;=\; \int_\Omega w(y)\,\eta_\varepsilon(x-y)\,dy \;=\; 0
\qquad (x \in A).
$$

On the other hand $w \in L^1(A')$ for a slightly larger $A'$, and mollification converges in $L^1$: $w * \eta_\varepsilon \to w$ in $L^1(A)$ as $\varepsilon \to 0$. The limit of the zero function is zero, so $w = 0$ almost everywhere on $A$. Exhausting $\Omega$ by countably many such $A$ — for instance $A_k = \{x \in \Omega : |x| < k, \ \operatorname{dist}(x,\partial\Omega) > 1/k\}$ — gives $w = 0$ almost everywhere on $\Omega$.

**Step 2 (uniqueness).** Subtract the two instances of (W). The left-hand sides are identical, so

$$
\int_\Omega (v - \tilde v)\,\varphi\,dx = 0 \qquad \text{for every } \varphi \in C_c^\infty(\Omega),
$$

after dividing by $(-1)^{|\alpha|}$. Step 1 with $w = v - \tilde v$ gives $v = \tilde v$ almost everywhere.

**Step 3 (consistency).** Let $u \in C^m(\Omega)$, $|\alpha| \le m$ and $\varphi \in C_c^\infty(\Omega)$. Choose an open $A$ with smooth boundary such that $\operatorname{supp}\varphi \subset A$ and $\overline A \subset \Omega$ compact. On $A$ both $u$ and $\varphi$ are $C^m$, so one integration by parts in the variable $x_i$ gives

$$
\int_A (\partial_i u)\,\psi \, dx = -\int_A u\,\partial_i\psi\,dx + \oint_{\partial A} u\,\psi\,\nu_i\,dS
$$

for any $C^1$ function $\psi$, and the boundary integral vanishes whenever $\psi$ vanishes near $\partial A$. Starting from $\psi = D^{\alpha - e_i}\varphi$ and iterating $|\alpha|$ times — at each stage the function playing the role of $\psi$ is a derivative of $\varphi$, hence still supported in $\operatorname{supp}\varphi$, so every boundary term is zero — produces

$$
\int_\Omega u\,D^\alpha\varphi\,dx = (-1)^{|\alpha|}\int_\Omega (D^\alpha u)\,\varphi\,dx ,
$$

which is (W) with $v$ the classical derivative. Both $u$ and $D^\alpha u$ are continuous, hence locally integrable, so $v$ is an admissible candidate, and by Step 2 it is the only one. $\square$
:::

:::definition[Sobolev spaces; $H^1$ and $H^1_0$]{provenance=adapted src="evans-2010:§5.2.2, the definitions of $W^{k,p}(U)$, its norm, $H^k(U)$ and $W^{k,p}_0(U)$, pp. 244–245; stakgold-holst-2011:§2.6, the definition of $W^{m,p}(\\Omega)$ and of $H^m(\\Omega)$, p. 183"}
Fix an integer $k \ge 0$ and $1 \le p < \infty$. The **Sobolev space** $W^{k,p}(\Omega)$ consists of those $u \in L^1_{\mathrm{loc}}(\Omega)$ whose weak derivative $D^\alpha u$ exists and lies in $L^p(\Omega)$ for every $\alpha$ with $|\alpha| \le k$; this includes $\alpha = 0$, so $u \in L^p(\Omega)$ as well. Its norm is

$$
\|u\|_{W^{k,p}(\Omega)} \;=\; \Bigl( \sum_{|\alpha| \le k} \int_\Omega |D^\alpha u|^p\,dx \Bigr)^{1/p} .
$$

As always in :ref[$L^p$ spaces]{to=measure.lp-spaces}, functions equal almost everywhere are identified. Stakgold and Holst define the same space by requiring $u \in L^p(\Omega)$ and $D^\alpha u \in L^p(\Omega)$ for $0 \le |\alpha| \le m$, which is the same condition written differently.

For $p = 2$ one writes $H^k(\Omega) = W^{k,2}(\Omega)$, the letter recording that this one is a Hilbert space. The case of interest here is $k=1$:

$$
H^1(\Omega) = \{\, u \in L^2(\Omega) : \nabla u \in L^2(\Omega;\mathbb{R}^n) \,\},
\qquad
(u,v)_{H^1} = \int_\Omega \bigl( uv + \nabla u \cdot \nabla v \bigr)\,dx ,
$$

where $\nabla u = (D^{e_1}u,\dots,D^{e_n}u)$ is the vector of first weak derivatives, so that $\|u\|_{H^1}^2 = \|u\|_{L^2}^2 + \|\nabla u\|_{L^2}^2$. The second piece alone,

$$
|u|_{H^1(\Omega)} = \|\nabla u\|_{L^2(\Omega)} ,
$$

is the **Dirichlet seminorm**; it is only a seminorm, since it vanishes on constants.

Finally, $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in the norm of $H^1(\Omega)$: a function $u$ lies in $H^1_0(\Omega)$ exactly when there are $\varphi_m \in C_c^\infty(\Omega)$ with $\|u - \varphi_m\|_{H^1} \to 0$. Evans defines $W^{k,p}_0(U)$ this way for all $k,p$ and notes that it is to be read as the condition "$D^\alpha u = 0$ on $\partial U$ for $|\alpha| \le k-1$", a reading made precise only by the theory of traces, which is not developed here. For our purposes $H^1_0(\Omega)$ *is the definition* of "$u \in H^1$ and $u = 0$ on $\partial\Omega$"; no pointwise meaning is attached to the boundary values of an $L^2$ function.
:::

:::statement[$H^1(\Omega)$ and $H^1_0(\Omega)$ are Hilbert spaces]{provenance=adapted src="evans-2010:§5.2.2, Remark (i), p. 244; stakgold-holst-2011:§2.6, the completeness of $W^{m,p}(\\Omega)$ and the Hilbert structure of $H^m(\\Omega)$, p. 183"}
$(u,v)_{H^1}$ is an inner product on $H^1(\Omega)$, and $H^1(\Omega)$ is complete in the induced norm. Hence $H^1(\Omega)$ is a :ref[Hilbert space]{to=funcan.hilbert-spaces}, and so is the closed subspace $H^1_0(\Omega)$.
:::

:::proof{provenance=original}
Bilinearity and symmetry are immediate, and $(u,u)_{H^1} = \|u\|_{L^2}^2 + \|\nabla u\|^2_{L^2} = 0$ forces $u = 0$ in $L^2$, so the form is an inner product.

For completeness, let $(u_m)$ be Cauchy in $H^1(\Omega)$. Then $(u_m)$ and each $(\partial_i u_m)$ are Cauchy in $L^2(\Omega)$, because each of those norms is dominated by the $H^1$ norm. By the completeness of $L^2$ (the Riesz–Fischer theorem of :ref[$L^p$ spaces]{to=measure.lp-spaces}) there are $u, v_1,\dots,v_n \in L^2(\Omega)$ with $u_m \to u$ and $\partial_i u_m \to v_i$ in $L^2(\Omega)$.

It remains to identify $v_i$ as the weak derivative of $u$. Fix $\varphi \in C_c^\infty(\Omega)$. Each $u_m$ lies in $H^1(\Omega)$, so

$$
\int_\Omega u_m\,\partial_i\varphi\,dx = -\int_\Omega (\partial_i u_m)\,\varphi\,dx .
$$

Both sides converge: by the Cauchy–Schwarz inequality, $\bigl|\int (u_m - u)\partial_i\varphi\bigr| \le \|u_m-u\|_{L^2}\|\partial_i\varphi\|_{L^2} \to 0$, and similarly on the right with $\varphi$ in place of $\partial_i\varphi$. (Here $\varphi$ and $\partial_i\varphi$ are in $L^2(\Omega)$ because they are bounded with compact support.) In the limit,

$$
\int_\Omega u\,\partial_i\varphi\,dx = -\int_\Omega v_i\,\varphi\,dx ,
$$

which is (W) for $\alpha = e_i$. So $\partial_i u = v_i \in L^2(\Omega)$, hence $u \in H^1(\Omega)$ and $\|u_m - u\|_{H^1} \to 0$.

A closed subspace of a complete space is complete, and $H^1_0(\Omega)$ is closed by construction, being a closure. $\square$
:::

:::statement[Weak formulation of the Poisson problem]{provenance=adapted src="evans-2010:§6.1.2, Eq. (7) and the Definitions (8)–(9), pp. 295–296"}
Let $\Omega \subseteq \mathbb{R}^n$ be open and bounded and let $f \in L^2(\Omega)$. Define the bilinear form and the linear functional

$$
a(u,v) = \int_\Omega \nabla u \cdot \nabla v \, dx ,
\qquad
F(v) = \int_\Omega f v \, dx
\qquad \bigl(u,v \in H^1_0(\Omega)\bigr) .
$$

A function $u$ is a **weak solution** of the Dirichlet problem

$$
-\Delta u = f \ \text{ in } \Omega, \qquad u = 0 \ \text{ on } \partial\Omega
\tag{P}
$$

if $u \in H^1_0(\Omega)$ and

$$
a(u,v) = F(v) \qquad \text{for every } v \in H^1_0(\Omega) .
\tag{P$'$}
$$

Three remarks on the formulation.

- Both integrals in (P$'$) converge absolutely for $u,v \in H^1_0(\Omega)$ and $f \in L^2(\Omega)$, by the Cauchy–Schwarz inequality; so the definition asks nothing that is not finite.
- It is enough to test against $v \in C_c^\infty(\Omega)$: that set is dense in $H^1_0(\Omega)$ by definition, and both sides of (P$'$) are continuous in $v$ for the $H^1$ norm. For $u \in H^1(\Omega)$ the resulting identity $\int\nabla u\cdot\nabla\varphi = \int f\varphi$ says precisely that $-\Delta u = f$ in the sense of distributions, which is the formulation Stakgold and Holst take as primary.
- The membership $u \in H^1_0(\Omega)$ carries the boundary condition, and (P$'$) carries the equation. Evans makes exactly this split, and chooses $H^1_0$ for that reason.

This is Evans's definition with $a^{ij} = \delta^{ij}$ and $b^i = c = 0$; the general second-order divergence-form operator is treated in :ref[the Lax–Milgram theorem and the Dirichlet problem]{to=pde.lax-milgram}, which is also where (P$'$) is shown to have exactly one solution.
:::

:::statement[Weak and classical solutions agree where both make sense]{provenance=adapted src="stakgold-holst-2011:§2.5, the Theorem on p. 172 and its proof; evans-2010:§6.1.2, the motivation preceding Eq. (7), p. 295"}
Let $\Omega$ be open and bounded with $C^1$ boundary and let $f \in C(\Omega) \cap L^2(\Omega)$.

1. If $u \in C^2(\Omega) \cap C(\overline\Omega) \cap H^1(\Omega)$ satisfies $-\Delta u = f$ at every point of $\Omega$ and $u = 0$ pointwise on $\partial\Omega$, and if moreover $u \in H^1_0(\Omega)$, then $u$ is a weak solution of (P).
2. Conversely, if $u$ is a weak solution of (P) and $u \in C^2(\Omega)$, then $-\Delta u = f$ at every point of $\Omega$.

Stakgold and Holst prove both halves for a general linear operator $L$ of order $p$ with smooth coefficients and a continuous right-hand side: a classical solution is weak, and a weak solution with $p$ continuous derivatives is classical. The statement above is that theorem for $L = -\Delta$, with their hypothesis "$u$ has $p$ continuous derivatives" read as $u \in C^2(\Omega)$. The caveat in part 1 — that $u$ must be assumed to lie in $H^1_0(\Omega)$ and not merely to vanish on $\partial\Omega$ — is ours; the distributional formulation that Stakgold and Holst work with does not mention the space, whereas the formulation (P$'$) does.
:::

:::idea{provenance=original}
Both directions are the same integration by parts, read in opposite senses. Forwards, multiply the equation by a test function and move one derivative across; the boundary term dies because the test function has compact support. Backwards, move the derivative back, which is allowed because $u$ is now assumed twice differentiable; what is left is the statement that the continuous function $-\Delta u - f$ integrates to zero against every test function, and the only continuous function that does that is zero — otherwise, put a bump where it is positive.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§2.5, proof of the Theorem, p. 172"}
**Part 1.** Let $\varphi \in C_c^\infty(\Omega)$ and let $A$ be open with $\operatorname{supp}\varphi \subset A$ and $\overline A \subset \Omega$ compact. On $A$ the function $u$ is $C^2$, so Green's first identity (:ref[Green's identities]{to=vcalc.green-identities}) gives

$$
\int_A \nabla u \cdot \nabla \varphi\,dx = -\int_A (\Delta u)\,\varphi\,dx + \oint_{\partial A} \varphi\,\frac{\partial u}{\partial n}\,dS ,
$$

and the boundary integral vanishes because $\varphi$ is identically zero near $\partial A$. Since $-\Delta u = f$ pointwise and both integrands vanish off $\operatorname{supp}\varphi$, this reads $a(u,\varphi) = F(\varphi)$. Both $a(u,\cdot)$ and $F$ are bounded linear functionals on $H^1_0(\Omega)$ — again by Cauchy–Schwarz, $|a(u,v)| \le \|\nabla u\|_{L^2}\|v\|_{H^1}$ and $|F(v)| \le \|f\|_{L^2}\|v\|_{H^1}$ — and they agree on the dense set $C_c^\infty(\Omega)$, so they agree on all of $H^1_0(\Omega)$. With $u \in H^1_0(\Omega)$ by hypothesis, $u$ is a weak solution.

**Part 2.** Let $u$ be a weak solution lying in $C^2(\Omega)$, and let $\varphi \in C_c^\infty(\Omega)$. Running the display above in reverse — the identity holds for any $C^2$ function on $A$, whatever equation it satisfies — turns $a(u,\varphi) = F(\varphi)$ into

$$
\int_\Omega \bigl(-\Delta u - f\bigr)\,\varphi\,dx = 0 \qquad \text{for every } \varphi \in C_c^\infty(\Omega) .
$$

Put $q = -\Delta u - f$, a continuous function on $\Omega$. Suppose $q(x_0) \neq 0$ for some $x_0 \in \Omega$; replacing $q$ by $-q$ if necessary, assume $q(x_0) > 0$. By continuity there is a ball $B(x_0,r)$ with $\overline{B(x_0,r)} \subset \Omega$ on which $q > q(x_0)/2 > 0$. Take

$$
\varphi(x) = \begin{cases} \exp\!\bigl(-\bigl(r^2 - |x-x_0|^2\bigr)^{-1}\bigr), & |x - x_0| < r,\\[2pt] 0, & \text{otherwise,}\end{cases}
$$

the standard bump: it is smooth, supported in $\overline{B(x_0,r)}$, and strictly positive on $B(x_0,r)$. Then $\int q\varphi\,dx \ge \tfrac12 q(x_0)\int_{B(x_0,r)}\varphi\,dx > 0$, contradicting the display. Hence $q \equiv 0$, that is, $-\Delta u = f$ throughout $\Omega$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- *Local integrability of $v$ in (W).* Without it, the right-hand side of (W) need not be defined, and the definition would silently become the distributional one. Many ordinary functions have no weak derivative at all: the Heaviside step on $\Omega = (-1,1)$ satisfies $\int H\varphi' = -\varphi(0)$, so (W) would force $\int_{-1}^{1} v\varphi\,dx = \varphi(0)$ for every $\varphi$, which no locally integrable $v$ can do — take bumps shrinking to the origin with $\varphi(0)=1$ and $0\le\varphi\le1$, so that $\int v\varphi \to 0$ by dominated convergence while $\varphi(0)$ stays at $1$. Its *distributional* derivative exists and is $\delta$. So $H \notin W^{1,p}$ for any $p$, and the jump is exactly the obstruction.
- *Compact support of the test functions.* This is what kills every boundary term in Step 3 of the first proof, and it is why (W) says nothing whatever about the behaviour of $u$ near $\partial\Omega$. The boundary condition must therefore be imposed separately, and $H^1_0(\Omega)$ is how it is done.
- *$C^2$ regularity in Part 2 above.* Only with two classical derivatives may the integration by parts be run backwards. Drop it and the conclusion is false as stated: the function in the example below is a weak solution of Laplace's equation on a slit disc but is not twice differentiable at the tip of the slit, and on the whole disc it solves no pointwise equation at all. That a weak solution of (P) is in fact smooth when $f$ and $\partial\Omega$ are — elliptic regularity — is a separate theorem, and it is false for hyperbolic equations, which is the deeper reason the weak theory is worth having.
- *Boundedness of $\Omega$.* Not used in this unit except to keep $L^2(\Omega) \subset L^1_{\mathrm{loc}}(\Omega)$ convenient, but it is essential in :ref[the Lax–Milgram theorem and the Dirichlet problem]{to=pde.lax-milgram}: the Poincaré inequality, and with it the coercivity of $a$, needs $\Omega$ to be confined in at least one direction. On $\Omega = \mathbb{R}^n$ the form $a$ is not coercive on $H^1$, and (P$'$) with $f=0$ has only the zero solution for a different reason.
- *Weak derivatives are not local limits.* A function can lie in $H^1$ and still be unbounded on every open set, as Evans shows by superposing the singularities $|x - r_k|^{-\alpha}$ over a dense sequence $(r_k)$ (his Example 4, p. 246). Membership of a Sobolev space buys integrability of derivatives, not pointwise good behaviour.
:::

:::method[Putting a boundary-value problem into weak form]{provenance=adapted src="evans-2010:§6.1.2, the motivation for the definition of a weak solution, p. 295"}
1. **Multiply and integrate.** Multiply the equation by a test function $v$ and integrate over $\Omega$.
2. **Integrate by parts** to move derivatives off the unknown and onto $v$, usually until both carry the same number. For a second-order equation in divergence form, $-\nabla\cdot(a\nabla u)$ becomes $\int a\nabla u\cdot\nabla v$ minus a boundary integral.
3. **Sort the boundary data.** A condition that appears in the surviving boundary integral (a prescribed flux, a Neumann or Robin condition) is *natural*: substitute it and keep the integral. A condition on $u$ itself (Dirichlet) is *essential*: it cannot be substituted, and must instead be built into the space of competitors.
4. **Choose the space $V$.** Take the largest space in which every remaining integral is finite — for a second-order problem, $H^1(\Omega)$ — and cut it down by the essential conditions. Homogeneous Dirichlet data on all of $\partial\Omega$ give $V = H^1_0(\Omega)$.
5. **Name the pieces.** Write the result as $a(u,v) = F(v)$ for all $v \in V$, with $a$ bilinear and $F$ linear.
6. **Check the two bounds.** Verify $|a(u,v)| \le M\|u\|_V\|v\|_V$ and $|F(v)| \le L\|v\|_V$. Together with coercivity, these are exactly the hypotheses of :ref[the Lax–Milgram theorem]{to=pde.lax-milgram}, which then supplies a unique solution.
7. **Inhomogeneous Dirichlet data** are reduced to homogeneous ones: find any $w \in H^1(\Omega)$ taking the prescribed boundary values and solve for $u - w \in H^1_0(\Omega)$, moving $-\Delta w$ to the right-hand side. Evans describes this reduction on p. 297.
:::

:::note[Natural boundary conditions]{provenance=adapted src="evans-2010:§6.1.2, Other boundary conditions, pp. 296–297"}
Step 3 explains an asymmetry that often puzzles a first reader. For the Neumann problem $-\Delta u = f$ in $\Omega$, $\partial u/\partial n = g$ on $\partial\Omega$, the weak formulation is

$$
\int_\Omega \nabla u\cdot\nabla v\,dx = \int_\Omega fv\,dx + \oint_{\partial\Omega} g v\,dS
\qquad \text{for all } v \in H^1(\Omega),
$$

with the *whole* of $H^1(\Omega)$ as the space and no condition imposed on the competitors at all: the boundary data have been absorbed into the right-hand side. This is the same phenomenon as the natural boundary conditions of the calculus of variations (:ref[natural boundary conditions]{to=var.natural-boundary-conditions}) — and it is the same calculation, since $a(u,v) = F(v)$ is the first variation of a quadratic functional.
:::

:::example[A corner singularity: in $H^1$, not in $H^2$]{provenance=original}
Let $B$ be the open unit disc in $\mathbb{R}^2$, and let $S = \{(x_1,0) : 0 \le x_1 \le 1\}$ be the radial slit along the positive $x_1$-axis. Using polar coordinates with the angle taken in the range $0 < \theta < 2\pi$ (so that $\theta$ is smooth on $B \setminus S$), define

$$
u(r,\theta) = r^{1/2}\,\sin\frac{\theta}{2} .
$$

Equivalently $u = \operatorname{Im}\sqrt{z}$, with the branch cut taken along $S$. This is the model singularity of a crack tip or a re-entrant corner.

1. *It is continuous, and vanishes on the slit.* As $\theta \downarrow 0$ and as $\theta \uparrow 2\pi$, $\sin(\theta/2) \to \sin 0 = 0$ and $\sin \pi = 0$ respectively, so $u$ extends continuously by $0$ across $S$ and by $0$ at the origin. It is smooth on $B \setminus S$.

2. *Its classical gradient.* In the orthonormal polar frame,
 $$
 \nabla u = \frac{\partial u}{\partial r}\,\hat{\mathbf{e}}_r + \frac1r\frac{\partial u}{\partial \theta}\,\hat{\mathbf{e}}_\theta
 = \frac{1}{2}r^{-1/2}\Bigl(\sin\tfrac\theta2\,\hat{\mathbf{e}}_r + \cos\tfrac\theta2\,\hat{\mathbf{e}}_\theta\Bigr),
 \qquad\text{so}\qquad
 |\nabla u|^2 = \frac{1}{4r} .
 $$

3. *That gradient is the weak gradient on all of $B$.* Call the field in step 2 $g$; it is defined off $S \cup\{0\}$, a null set. Let $\varphi \in C_c^\infty(B)$ and write $\Omega_\varepsilon = B \setminus (\overline{B(0,\varepsilon)} \cup S)$, on which $u$ is smooth up to the boundary. The divergence theorem gives
 $$
 \int_{\Omega_\varepsilon}\bigl(u\,\partial_i\varphi + g_i\,\varphi\bigr)dx = \oint_{\partial\Omega_\varepsilon} u\,\varphi\,\nu_i\,dS .
 $$
 The boundary $\partial\Omega_\varepsilon$ has three parts. On the outer circle $\varphi = 0$. On the two faces of the slit $u = 0$, by step 1 — this is the crucial point, and it is why no jump term appears. On the circle $|x| = \varepsilon$, the integrand is bounded by $\varepsilon^{1/2}\|\varphi\|_\infty$ and the length is $2\pi\varepsilon$, so that piece is $O(\varepsilon^{3/2}) \to 0$. Meanwhile $u \in L^2(B)$ and $g \in L^2(B;\mathbb{R}^2)$ (step 4), so the integrals over $B\setminus\Omega_\varepsilon$ tend to zero. Letting $\varepsilon \to 0$ gives (W) for $\alpha = e_i$: the weak gradient of $u$ on $B$ is $g$.

4. *The norms, in closed form.* With $dx = r\,dr\,d\theta$,
 $$
 \int_B u^2\,dx = \int_0^{2\pi}\!\!\int_0^1 r\sin^2\tfrac\theta2 \cdot r\,dr\,d\theta = \frac13\cdot\pi = \frac{\pi}{3},
 \qquad
 \int_B |\nabla u|^2 dx = \int_0^{2\pi}\!\!\int_0^1 \frac{1}{4r}\cdot r\,dr\,d\theta = \frac{\pi}{2} .
 $$
 The second integral is the one worth pausing over: the integrand blows up like $1/r$, but the area element contributes a factor $r$, and $\int_0^1 dr$ converges. Hence
 $$
 \|u\|_{H^1(B)}^2 = \frac{\pi}{3} + \frac{\pi}{2} = \frac{5\pi}{6} = 2.61799\ldots,
 \qquad \|u\|_{H^1(B)} = 1.618022\ldots
 $$
 (The second number agrees with the golden ratio $1.618034\ldots$ to five figures and no further; the coincidence is empty.)

5. *But $u \notin H^2(B)$.* Writing $u = \operatorname{Im} f$ with $f(z) = z^{1/2}$, the Cauchy–Riemann equations give $\partial_1 u = \operatorname{Im}f'$ and $\partial_1\partial_1 u = \operatorname{Im}f''$. Since $f''(z) = -\tfrac14 z^{-3/2}$,
 $$
 \partial_1\partial_1 u = \tfrac14 r^{-3/2}\sin\tfrac{3\theta}{2},
 \qquad
 \int_B (\partial_1\partial_1 u)^2 dx = \frac{1}{16}\int_0^{2\pi}\!\!\sin^2\tfrac{3\theta}{2}\,d\theta \int_0^1 r^{-3}\,r\,dr = \frac{\pi}{16}\int_0^1 \frac{dr}{r^2} = \infty .
 $$
 One power of $r$ has been lost and the integral now diverges. So $u$ has first weak derivatives in $L^2$ and no second ones.

6. *What equation it solves.* $u$ is harmonic on $B\setminus S$, being the imaginary part of a holomorphic function there, so it is a weak solution of Laplace's equation on the slit disc. On the *whole* disc it is not: repeating the computation of step 3 with $\nabla u\cdot\nabla\varphi$ in place of $u\,\partial_i\varphi$, the two faces of the slit now contribute, because the outward normal derivative equals $-\tfrac12 r^{-1/2}$ on each face, and
 $$
 \int_B \nabla u\cdot\nabla\varphi\,dx = -\int_0^1 r^{-1/2}\,\varphi(r,0)\,dr \neq 0 \quad\text{in general}.
 $$
 So $-\Delta u$, as a distribution on $B$, is a layer supported on the slit. Changing the domain changed the problem — which is the content of step 3 of the method above.

The moral for computation: the solution of a Dirichlet problem on a domain with a re-entrant corner of interior angle $\omega$ behaves like $r^{\pi/\omega}$ there, here $\omega = 2\pi$ and the exponent $\tfrac12$. It is in the energy space, so the weak theory applies without apology, but a finite element method that assumes extra smoothness will converge slowly unless the mesh is refined at the corner.
:::

:::application{provenance=original}
**The finite element method.** Equation (P$'$) is the starting point of every finite element code. One replaces $H^1_0(\Omega)$ by a finite-dimensional subspace $V_h$ — typically continuous functions that are polynomials on each triangle of a mesh, which lie in $H^1$ precisely because continuity across the faces is enough to prevent a jump term in the weak derivative, exactly as in step 3 of the example — and solves $a(u_h,v_h) = F(v_h)$ for all $v_h \in V_h$. That is a linear system in the coefficients of $u_h$, with a sparse, symmetric, positive definite matrix. See :ref[the finite element method]{to=num.finite-elements} and, for the variational ancestor of the same idea, :ref[the Rayleigh–Ritz method]{to=var.rayleigh-ritz}.

**Why engineering problems are posed weakly in the first place.** A composite material has a discontinuous conductivity or permittivity; across the interface $u$ is continuous but $\nabla u$ is not, so no classical solution exists even for perfectly smooth data. The weak formulation $\int a\nabla u\cdot\nabla v = \int fv$ never differentiates $a$, accepts $a \in L^\infty$, and recovers the interface conditions — continuity of $u$ and of the normal component of $a\nabla u$ — as consequences rather than hypotheses.

**Energy.** For the Poisson problem $a(u,u)$ is twice the Dirichlet energy, and $H^1$ is the space on which that energy is finite. That is not a coincidence of notation: the conserved quantity of :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy} is the squared $H^1$-type norm of the solution, and the estimates of :ref[energy estimates and well-posedness]{to=pde.energy-estimates} are statements about curves in these spaces. Physically, admitting every finite-energy configuration — rather than only the smooth ones — is what makes the variational principle have a minimiser.

**Quantum mechanics.** The expectation of the kinetic energy of a state $\psi$ is $\tfrac{\hbar^2}{2m}\int|\nabla\psi|^2$, finite exactly when $\psi \in H^1(\mathbb{R}^3)$. This is the form domain of the Hamiltonian, the natural home for the variational estimates of ground-state energies, and the reason that Sobolev inequalities control how singular an attractive potential may be before a system collapses (:ref[the framework of quantum mechanics]{to=funcan.quantum-mechanics-framework}).
:::
