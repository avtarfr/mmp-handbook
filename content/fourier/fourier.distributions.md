---
id: fourier.distributions
title: Test functions and distributions
kind: definition
level: core
summary: Defines test functions and distributions as continuous linear functionals on them, proves that every locally integrable function is a distribution while the delta is not, defines the distributional derivative and derives the jump formula for it, shows that a distribution with vanishing derivative is a constant, and ends with a worked derivative and the notion of a weak solution.
prereqs: [vcalc.dirac-delta-basics, measure.lebesgue-integral]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§2.1, pp. 92–104: the test space $C_0^\\infty(\\mathbb{R}^n)$ with the example (2.1.1)–(2.1.2), the definition of support (p. 95), null sequences (p. 95), the definitions of linear functional, continuity and distribution (pp. 95–96), local integrability and Theorem 2.1.1 (p. 96) with the remarks on equality almost everywhere (p. 97), the regular/singular dichotomy and Eq. (2.1.5) (p. 97), Examples 1–3 (pp. 97–98) including the proof that $\\delta$ is singular, translation (2.1.7) and scaling (2.1.8) (p. 99), multiplication by a smooth function (2.1.11)–(2.1.11a) (p. 100), the derivative (2.1.12)–(2.1.14) (p. 101), Example 9 with $|x|' = \\operatorname{sgn} x$ and $H' = \\delta$ (2.1.15) (pp. 101–102), and the jump calculus (2.1.17) of Example 11 (pp. 102–103); §2.5, pp. 164–166: local vanishing of a distribution, Lemmas 2.5.1–2.5.2 and the solution of $u' = 0$ and $u' = f$"
    pages: "92-104, 164-166"
    role: the definitions, Theorem 2.1.1, the proof that the delta is singular, the distributional derivative, the jump formula, and the theorem that $u' = 0$ forces $u$ constant
  - work: strauss-2008
    loc: "§12.1, pp. 331–337: the delta introduced as the rule $\\varphi \\mapsto \\varphi(0)$ (p. 331), the definition of a test function (p. 331) and of a distribution with the linearity (1) and continuity (2) conditions (p. 332), Examples 1–3 (pp. 332–333), weak convergence of distributions (5) with the diffusion kernel and Dirichlet kernel as Examples 4–5 (pp. 333–334), the derivative (11)–(12) (p. 334), Example 7 for $H' = \\delta$ and the plus function (p. 335), distributions in three dimensions (p. 336), and Example 10 with the definition of a weak solution of the wave equation (pp. 336–337)"
    pages: "331-337"
    role: the functional-first framing of the definitions, weak convergence, and the notion of a weak solution used in the application
  - work: hassani-2013
    loc: "§7.4, pp. 233–234: why the delta and its derivatives are described by linear functionals, the requirement that test functions be $C^\\infty$ of compact support, Definition 7.4.1 of a distribution (generalized function), Example 7.4.2 embedding ordinary functions, and Example 7.4.3 with Eq. (7.27) for the charge density of a point charge"
    pages: "233-234"
    role: the motivation for the functional-analytic definition and the point-charge density in the application
  - work: folland-1999
    loc: "§9.1, pp. 282–284: convergence in $C_c^\\infty(U)$ and the definition (iv) of a distribution as a continuous linear functional on $C_c^\\infty(U)$ with the notation $\\mathcal{D}'(U)$, the three examples on p. 283 (locally integrable functions, Radon measures, the functionals $\\varphi \\mapsto \\partial^\\alpha\\varphi(x_0)$) and the identification of $L^1_{\\mathrm{loc}}$ with a subspace of $\\mathcal{D}'$, the pairing notation $\\langle F, \\varphi\\rangle$, and Propositions 9.1–9.2 with the resulting definition of the support of a distribution"
    pages: "282-284"
    role: the compact-exhaustion form of continuity, the notation, and the support of a distribution
---

:::definition[Test functions]{provenance=adapted src="stakgold-holst-2011:§2.1, Eqs. (2.1.1)–(2.1.2) and pp. 92–95; strauss-2008:§12.1, p. 331; folland-1999:§9.1, p. 282"}
The **support** of a function $f$ on $\mathbb{R}^n$ is the closure of $\{x : f(x) \ne 0\}$. A **test function** is a function $\varphi : \mathbb{R}^n \to \mathbb{C}$ that is infinitely differentiable and has compact support. The set of all of them is written

$$
\mathcal{D} = \mathcal{D}(\mathbb{R}^n) = C_0^\infty(\mathbb{R}^n),
$$

a complex vector space. **A word on the scalars.** We take test functions complex-valued, following Folland (p. 282), because the Fourier transform of :ref[]{to=fourier.tempered-distributions} needs complex scalars. Stakgold and Holst (p. 94) and Strauss (p. 331) instead make $C_0^\infty(\mathbb{R}^n)$ a *real* linear space and their functionals real-valued; everything in this unit holds verbatim in either convention, since each result quoted from them is real-linear and extends to complex $\varphi$ by splitting into real and imaginary parts.

Non-trivial test functions exist: for the ball $\lvert x\rvert < 1$ the function

$$
\varphi_\ast(x) = \begin{cases} \exp\!\left(\dfrac{1}{\lvert x\rvert^2 - 1}\right), & \lvert x\rvert < 1,\\[6pt] 0, & \lvert x\rvert \ge 1,\end{cases}
$$

is Stakgold and Holst's example (2.1.2). Note that the exponent is the *reciprocal* of $\lvert x\rvert^2 - 1$, which is negative on the ball: for $\lvert x\rvert < 1$ one may equally write $\varphi_\ast(x) = \exp\bigl(-1/(1 - \lvert x\rvert^2)\bigr)$, and in particular $\varphi_\ast(0) = e^{-1}$ while $\varphi_\ast(x) \downarrow 0$ as $\lvert x\rvert \uparrow 1$. It is smooth across the sphere $\lvert x\rvert = 1$ because every derivative of it is a rational function of $\lvert x\rvert$, with poles only at $\lvert x\rvert = 1$, times the same exponential, and that exponential beats every power as $\lvert x\rvert \uparrow 1$. No such function is the sum of a convergent Taylor series at $\lvert x\rvert = 1$: all its derivatives vanish there, so the series would be identically zero. Translating and rescaling, $\varphi_\ast\bigl((x - x_0)/\varepsilon\bigr)$ is a test function supported in the ball of radius $\varepsilon$ about $x_0$.

Two closure properties are used constantly: every partial derivative of a test function is a test function, and $a\varphi$ is a test function whenever $a \in C^\infty(\mathbb{R}^n)$ and $\varphi \in \mathcal{D}$ — the product has compact support because $\varphi$ does, and $a$ need not decay at all.

Convergence in $\mathcal{D}$ is deliberately severe. Say $\varphi_m \to \varphi$ **in $\mathcal{D}$** if

1. all the $\varphi_m$ vanish outside one fixed ball, and
2. for every multi-index $k$, $\ \max_{x}\lvert D^k\varphi_m(x) - D^k\varphi(x)\rvert \to 0$ as $m \to \infty$.

So the functions and *all* their derivatives converge uniformly, inside a common bounded set. A sequence converging to $0$ in this sense is what Stakgold and Holst call a **null sequence**; Folland phrases the same condition as convergence in $C^\infty_0(K)$ for one compact $K$. The second condition really bites: with $\varphi$ the one-dimensional version of $\varphi_\ast$, the sequence $m^{-1}\varphi(mx)$ tends to $0$ uniformly but its derivatives do not, so it is *not* a null sequence.
:::

:::definition[Distributions]{provenance=adapted src="stakgold-holst-2011:§2.1, pp. 95–97 and Eq. (2.1.5); strauss-2008:§12.1, p. 332; hassani-2013:§7.4, Definition 7.4.1, p. 234; folland-1999:§9.1, p. 282, definition (iv), and p. 283"}
A **distribution** (or **generalized function**) on $\mathbb{R}^n$ is a linear functional $f$ on $\mathcal{D}$ that is continuous, meaning that $\langle f, \varphi_m\rangle \to 0$ for every null sequence $\{\varphi_m\}$ in $\mathcal{D}$. The value of $f$ at $\varphi$ is written $\langle f, \varphi\rangle$. The pairing is linear in *both* slots — unlike the inner product of :ref[Hilbert space]{to=funcan.hilbert-spaces}, there is no conjugation. The space of distributions is denoted $\mathcal{D}'(\mathbb{R}^n)$; it is a vector space, with $\langle c_1f_1 + c_2f_2, \varphi\rangle = c_1\langle f_1,\varphi\rangle + c_2\langle f_2,\varphi\rangle$, and $f_1 = f_2$ means $\langle f_1,\varphi\rangle = \langle f_2,\varphi\rangle$ for every test function.

Hassani's reading of the definition is the useful one for a physicist: a distribution is the thing that a formula such as $\int f\varphi$ computes, stripped of the pretence that $f$ has point values.

Three standard examples.

- The **Dirac distribution** at $\xi \in \mathbb{R}^n$ is $\langle \delta_\xi, \varphi\rangle = \varphi(\xi)$. Linearity is immediate, and continuity is immediate too: a null sequence converges uniformly, so $\varphi_m(\xi) \to 0$. Strauss makes this rule the *definition* of the delta. We write $\delta$ for $\delta_0$ and, following the symbolic convention below, $\delta(x - \xi)$ for $\delta_\xi$.
- The **Heaviside distribution** on $\mathbb{R}$ is $\langle H, \varphi\rangle = \int_0^\infty \varphi(x)\,dx$, the functional attached to the indicator function of $(0,\infty)$ (:ref[]{to=fourier.heaviside-step}).
- $\varphi \mapsto D^k\varphi(x_0)$ is a distribution for every multi-index $k$ and every point $x_0$ (Folland, p. 283).

A function $f$ on $\mathbb{R}^n$ is **locally integrable**, written $f \in L^1_{\mathrm{loc}}$, if $\int_\Omega \lvert f\rvert$ is finite for every bounded domain $\Omega$ (:ref[]{to=measure.lebesgue-integral}). Behaviour at infinity is irrelevant; the condition restricts only the strength of singularities, and $\lvert x\rvert^{-a}$ on $\mathbb{R}^n$ is locally integrable exactly when $a < n$. By the theorem below, each $f \in L^1_{\mathrm{loc}}$ *is* a distribution, through

$$
\langle f, \varphi\rangle = \int_{\mathbb{R}^n} f(x)\,\varphi(x)\, dx ,
$$

and we do not distinguish the function from the functional. A distribution that can be written this way is called **regular**; all others are **singular**. For a singular distribution the integral sign is kept as pure notation: $\langle f, \varphi\rangle$ and $\int f\varphi\,dx$ mean the same thing, which is why one writes $\int \delta(x)\varphi(x)\,dx = \varphi(0)$ and speaks of "the delta function" (Stakgold and Holst's Eq. (2.1.5)).

Two more operations are needed. For $a \in C^\infty$ the product $af$ is the distribution $\langle af, \varphi\rangle = \langle f, a\varphi\rangle$, which is legitimate because $a\varphi \in \mathcal{D}$; in particular $a(x)\delta(x) = a(0)\delta(x)$. And a sequence of distributions **converges weakly** to $f$ if $\langle f_N, \varphi\rangle \to \langle f, \varphi\rangle$ for every test function (Strauss, Eq. (5) of §12.1); every delta family of :ref[]{to=vcalc.dirac-delta-basics} converges weakly to $\delta$ in this sense, and :ref[]{to=fourier.delta-identities} makes that precise.
:::

:::statement[Functions are distributions; the delta is not a function]{provenance=adapted src="stakgold-holst-2011:§2.1, Theorem 2.1.1 and p. 97, and Example 3, p. 98"}
Let $f \in L^1_{\mathrm{loc}}(\mathbb{R}^n)$.

1. $\varphi \mapsto \int f\varphi\,dx$ is a distribution.
2. Two locally integrable functions define the same distribution if and only if they are equal almost everywhere. In particular distinct continuous functions define distinct distributions, so nothing is lost by regarding a continuous function as a distribution.
3. There is **no** locally integrable $f$ with $\int f\varphi\,dx = \varphi(0)$ for every $\varphi \in \mathcal{D}(\mathbb{R}^n)$. The Dirac distribution is singular.

Stakgold and Holst prove the "if" half of (2) and the continuous case; the converse implication is quoted there without proof, and is quoted here the same way.
:::

:::idea{provenance=original}
Part (1) is one inequality: a test function from a null sequence is uniformly small on a fixed ball, and $\int_\Omega\lvert f\rvert$ over that ball is a finite constant, so the pairing is small.

Part (3) is a competition between two scalings. Shrink a fixed bump to width $a$ about the origin. Its height does not change, so the pairing $\varphi \mapsto \varphi(0)$ does not notice the shrinking at all. But a locally integrable $f$ does notice: all of the mass of $f$ that the bump can see is the mass inside a ball of radius $a$, and that tends to $0$ as the ball closes up. A quantity that stays fixed cannot equal one that tends to zero.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§2.1, proof of Theorem 2.1.1, p. 96, and Example 3, p. 98"}
**(1).** Linearity of $\varphi \mapsto \int f\varphi$ is linearity of the integral. For continuity, let $\{\varphi_m\}$ be a null sequence and let $\Omega$ be a bounded set outside which every $\varphi_m$ vanishes — one such $\Omega$ exists by condition 1 of the definition of a null sequence. Then

$$
\bigl\lvert\langle f, \varphi_m\rangle\bigr\rvert = \left\lvert \int_\Omega f\varphi_m\, dx\right\rvert \le \Bigl(\max_{x\in\Omega}\lvert\varphi_m(x)\rvert\Bigr)\int_\Omega \lvert f(x)\rvert\, dx .
$$

The integral on the right is a finite number, by local integrability of $f$ and boundedness of $\Omega$; the maximum tends to $0$ by condition 2 with $k = 0$. Hence $\langle f,\varphi_m\rangle \to 0$. $\square$

**(2), the direction proved here.** Suppose $f_1, f_2 \in L^1_{\mathrm{loc}}$ are equal almost everywhere. Then $\int_\Omega\lvert f_1 - f_2\rvert = 0$ for every bounded $\Omega$, so $\lvert\langle f_1 - f_2, \varphi\rangle\rvert \le \max\lvert\varphi\rvert\int_{\operatorname{supp}\varphi}\lvert f_1-f_2\rvert = 0$ for every test function, and the two distributions coincide.

Conversely, suppose $f_1, f_2$ are *continuous* and differ at some $x_0$; without loss of generality $f_1(x_0) > f_2(x_0)$. By continuity there is $\varepsilon > 0$ with $f_1 - f_2 > 0$ throughout the ball $\lvert x - x_0\rvert < \varepsilon$. Take $\varphi(x) = \varphi_\ast\bigl((x-x_0)/\varepsilon\bigr) \ge 0$, which is positive exactly on that ball. The integrand $(f_1-f_2)\varphi$ is then non-negative and strictly positive on an open set, so $\langle f_1 - f_2, \varphi\rangle > 0$ and the two distributions differ. (For merely locally integrable functions, equality of the distributions forces equality almost everywhere; we take that over from Stakgold and Holst, p. 97, who omit its proof.) $\square$

**(3).** Suppose, for contradiction, that $f \in L^1_{\mathrm{loc}}(\mathbb{R}^n)$ satisfies $\int f\varphi = \varphi(0)$ for every test function. Apply this to the shrinking family

$$
\psi_a(x) = \varphi_\ast(x/a), \qquad a > 0,
$$

each of which is a test function supported in $\lvert x\rvert \le a$. Two facts about $\psi_a$ matter, and both come straight from the formula for $\varphi_\ast$:

- $\psi_a(0) = \varphi_\ast(0) = e^{-1}$, the *same* number for every $a$;
- $0 \le \psi_a \le e^{-1}$ everywhere, since on the support $0 \le \lvert x/a \rvert < 1$, so $-1 \le \lvert x/a\rvert^2 - 1 < 0$ and therefore the exponent satisfies $1/(\lvert x/a\rvert^2 - 1) \le -1$.

The assumed identity gives $\int f\psi_a\, dx = \psi_a(0) = e^{-1}$ for every $a$. On the other hand $\psi_a$ vanishes off the ball $\lvert x\rvert\le a$, so

$$
\left\lvert\int f\psi_a\, dx\right\rvert \le e^{-1}\int_{\lvert x\rvert \le a}\lvert f(x)\rvert\, dx \xrightarrow[a\to 0^+]{} 0 ,
$$

the limit being $0$ because $\int_{\lvert x\rvert\le a}\lvert f\rvert$ is the integral of a fixed integrable function over sets shrinking to a point. So the constant $e^{-1}$ would have to be $0$. It is not, so no such $f$ exists. The same argument with $\psi_a(x) = \varphi_\ast\bigl((x-\xi)/a\bigr)$ shows $\delta_\xi$ is singular for every $\xi$. $\square$
:::

:::definition[The distributional derivative]{provenance=adapted src="stakgold-holst-2011:§2.1, Eqs. (2.1.12)–(2.1.14), p. 101; strauss-2008:§12.1, Eqs. (11)–(12), p. 334"}
Let $f \in C^1(\mathbb{R})$ with $f' \in L^1_{\mathrm{loc}}$, and let $\varphi \in \mathcal{D}(\mathbb{R})$. Integrating by parts and using $\varphi = 0$ outside a bounded interval, which kills the boundary term,

$$
\int_{-\infty}^{\infty} f'(x)\varphi(x)\, dx = -\int_{-\infty}^{\infty} f(x)\varphi'(x)\, dx .
$$

The right-hand side makes sense for any distribution. So for $f \in \mathcal{D}'(\mathbb{R})$ the **derivative** $f'$ is defined by

$$
\langle f', \varphi\rangle = -\langle f, \varphi'\rangle ,
$$

and in $n$ variables, for a multi-index $k$ of order $\lvert k\rvert$,

$$
\langle \partial_i f, \varphi\rangle = -\langle f, \partial_i\varphi\rangle, \qquad
\langle D^k f, \varphi\rangle = (-1)^{\lvert k\rvert}\langle f, D^k\varphi\rangle .
$$

These are distributions: $-\varphi'$ and $D^k\varphi$ are again test functions, the maps $\varphi\mapsto -\varphi'$ and $\varphi \mapsto D^k\varphi$ are linear, and they send null sequences to null sequences — condition 2 in the definition of a null sequence covers every derivative, which is exactly why it was imposed. Hence **every distribution is infinitely differentiable**, and for $f \in C^1$ the new derivative agrees with the old one by the displayed integration by parts. Derivatives commute, $\partial_i\partial_j f = \partial_j\partial_i f$, because they do on test functions.

Weak limits may be differentiated freely: if $f_N \to f$ weakly then $f_N' \to f'$ weakly, since $\langle f_N',\varphi\rangle = -\langle f_N, \varphi'\rangle \to -\langle f,\varphi'\rangle$. Term-by-term differentiation of a Fourier series, illegitimate pointwise, is therefore always legitimate in $\mathcal{D}'$ (Strauss, §12.1, Examples 8–9).
:::

:::statement[The jump formula]{provenance=adapted src="stakgold-holst-2011:§2.1, Eq. (2.1.15) and Example 11, Eq. (2.1.17), pp. 102–103"}
Let $f : \mathbb{R}\to\mathbb{C}$ be locally integrable, smooth except at finitely many points $a_1 < \dots < a_N$, and such that at each $a_i$ the one-sided limits of $f$ and of all its derivatives exist. Write $[f']$ for the pointwise derivative computed on each smooth piece and ignoring the jumps, and

$$
\Delta f_i = f(a_i^+) - f(a_i^-)
$$

for the jump of $f$ at $a_i$. Then, in $\mathcal{D}'(\mathbb{R})$,

$$
f' = [f'] + \sum_{i=1}^{N} \Delta f_i\, \delta(x - a_i) .
$$

Each simple jump contributes a delta of weight equal to that jump. With $f = H$, which has the single jump $\Delta f = 1$ at $0$ and $[H'] = 0$, this is $H' = \delta$. With $f(x) = \lvert x\rvert$, which has no jump, it gives $\lvert x\rvert' = \operatorname{sgn} x$. Iterating, if $f$ is smooth except at the single point $0$ and $\Delta f^{(m)}$ denotes the jump of the $m$-th pointwise derivative there,

$$
f'' = [f''] + \Delta f^{(1)}\,\delta + \Delta f^{(0)}\,\delta' , \qquad
f^{(m)} = \bigl[f^{(m)}\bigr] + \sum_{j=0}^{m-1} \Delta f^{(m-1-j)}\,\delta^{(j)} .
$$
:::

:::proof[The jump formula]{provenance=adapted src="stakgold-holst-2011:§2.1, Example 11, Eqs. (2.1.16)–(2.1.17), pp. 102–103"}
The route is Stakgold and Holst's: subtract the steps to get a continuous function, derive the formula there, and put the steps back. Step 2, which supplies the integration by parts they assert without proof, is ours.

**Step 1: reduce to a continuous function.** Set

$$
g = f - \sum_{i=1}^N \Delta f_i\, H(x - a_i) .
$$

Each subtracted term jumps by exactly $\Delta f_i$ at $a_i$ and nowhere else, so $g$ has no jumps: it is continuous, and smooth away from the $a_i$, with a piecewise continuous pointwise derivative $[g'] = [f']$ (the step functions contribute nothing to the pointwise derivative away from their jumps).

**Step 2: for such a $g$ the two derivatives agree.** Let $\varphi \in \mathcal{D}(\mathbb{R})$ have support in $(-R, R)$ and put $a_0 = -R$, $a_{N+1} = R$. On each closed subinterval $[a_i, a_{i+1}]$ the function $g$ is $C^1$, so ordinary integration by parts applies:

$$
-\int_{-\infty}^{\infty} g\varphi'\, dx
= -\sum_{i=0}^{N}\int_{a_i}^{a_{i+1}} g\varphi'\, dx
= \sum_{i=0}^{N}\left(\int_{a_i}^{a_{i+1}} [g']\varphi\, dx - \Bigl[g\varphi\Bigr]_{a_i}^{a_{i+1}}\right).
$$

The boundary terms telescope. At the two outer ends $\varphi(\pm R) = 0$; at each interior $a_i$ the two contributions are $g(a_i^-)\varphi(a_i)$ and $-g(a_i^+)\varphi(a_i)$, which cancel **because $g$ is continuous**, by Step 1. Hence $\langle g', \varphi\rangle = \int [g']\varphi\,dx$, that is, $g' = [g'] = [f']$ as distributions.

**Step 3: differentiate the steps.** For a single step, with $\varphi$ supported in $(-R,R)$,

$$
\langle H(\cdot - a)', \varphi\rangle = -\int_a^{\infty}\varphi'(x)\, dx = -\bigl[\varphi(x)\bigr]_a^{R} = \varphi(a) = \langle \delta(x-a), \varphi\rangle ,
$$

using the fundamental theorem of calculus on $[a, R]$ and $\varphi(R) = 0$. So $H(\cdot - a)' = \delta(\cdot - a)$.

**Step 4: assemble.** Differentiation is linear on $\mathcal{D}'$, so from Step 1,

$$
f' = g' + \sum_i \Delta f_i\, H(x-a_i)' = [f'] + \sum_i \Delta f_i\,\delta(x-a_i) .
$$

The higher-derivative formulas follow by applying the same result to $[f^{(m)}]$ repeatedly. $\square$
:::

:::statement[Distributions with vanishing derivative]{provenance=adapted src="stakgold-holst-2011:§2.5, Lemmas 2.5.1–2.5.2 and pp. 164–166"}
Let $u \in \mathcal{D}'(\mathbb{R})$ satisfy $u' = 0$, that is, $\langle u, \varphi'\rangle = 0$ for every $\varphi \in \mathcal{D}(\mathbb{R})$. Then $u$ is a constant: there is $c \in \mathbb{C}$ with $\langle u,\varphi\rangle = c\int_{-\infty}^\infty \varphi(x)\,dx$ for all $\varphi$. Conversely every constant has zero derivative.

Consequently the equation $u' = f$ has, for each $f \in \mathcal{D}'(\mathbb{R})$, a solution in $\mathcal{D}'(\mathbb{R})$ unique up to an additive constant: every distribution on the line has an antiderivative. Stakgold and Holst construct the particular solution explicitly.
:::

:::idea{provenance=original}
A test function is the derivative of another test function exactly when its total integral vanishes — one direction is the fundamental theorem of calculus, the other is that an antiderivative of $\varphi$ is only compactly supported if the net area is zero. So the test functions split: fix one $\varphi_0$ with $\int\varphi_0 = 1$, and every $\varphi$ is $\bigl(\int\varphi\bigr)\varphi_0$ plus something of zero total integral, hence plus a derivative. The hypothesis $u' = 0$ says $u$ annihilates derivatives, so all it can see of $\varphi$ is the one number $\int\varphi$ — and a functional of that form is a constant.
:::

:::proof[Distributions with vanishing derivative]{provenance=adapted src="stakgold-holst-2011:§2.5, Lemmas 2.5.1–2.5.2 and p. 165"}
**Step 1: which test functions are derivatives.** Let $\mathcal{M} = \{\psi' : \psi \in \mathcal{D}(\mathbb{R})\}$. If $\varphi = \psi'$ with $\psi \in \mathcal{D}$, then $\int_{-\infty}^\infty \varphi = \psi(\infty) - \psi(-\infty) = 0$. Conversely let $\varphi \in \mathcal{D}$ with $\int\varphi = 0$ and set $\chi(x) = \int_{-\infty}^x \varphi(s)\,ds$. Then $\chi$ is smooth with $\chi' = \varphi$; it vanishes for $x$ below the support of $\varphi$, and for $x$ above the support it equals $\int_{-\infty}^\infty\varphi = 0$ — this is where the vanishing total integral is used. So $\chi$ has compact support, $\chi \in \mathcal{D}$ and $\varphi \in \mathcal{M}$. Hence

$$
\mathcal{M} = \Bigl\{\varphi \in \mathcal{D}(\mathbb{R}) : \textstyle\int_{-\infty}^{\infty}\varphi = 0\Bigr\} .
$$

**Step 2: split a test function.** Fix once and for all a $\varphi_0 \in \mathcal{D}(\mathbb{R})$ with $\int\varphi_0 = 1$; for instance a rescaled $\varphi_\ast$. Given any $\varphi \in \mathcal{D}$, put $\alpha = \int_{-\infty}^\infty\varphi(x)\,dx$ and $\psi = \varphi - \alpha\varphi_0$. Then $\psi \in \mathcal{D}$ and $\int\psi = \alpha - \alpha = 0$, so $\psi \in \mathcal{M}$ by Step 1, and

$$
\varphi = \alpha\varphi_0 + \psi, \qquad \psi \in \mathcal{M} .
$$

**Step 3: evaluate $u$.** Pair $u$ with this decomposition. Since $\psi \in \mathcal{M}$, say $\psi = \chi'$, the hypothesis gives $\langle u, \psi\rangle = \langle u, \chi'\rangle = 0$. Therefore

$$
\langle u, \varphi\rangle = \alpha\,\langle u, \varphi_0\rangle = c\int_{-\infty}^{\infty}\varphi(x)\, dx, \qquad c := \langle u,\varphi_0\rangle ,
$$

which is the statement that $u$ is the constant $c$. Note that $c$ does not depend on $\varphi$, only on the fixed $\varphi_0$. Conversely, for a constant $c$, $\langle c, \varphi'\rangle = c\int\varphi' = 0$, so constants do solve $u'=0$; and if $u_1' = u_2' = f$ then $(u_1-u_2)' = 0$, giving the uniqueness-up-to-a-constant claim. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Compact support of test functions** does two jobs. It kills the boundary term in the integration by parts that defines the derivative, and it makes $\int_\Omega\lvert f\rvert < \infty$ enough for continuity in part (1) of the theorem. Drop it and the derivative of a distribution is no longer defined by the same formula; the repair is to keep a decay condition instead, which is what :ref[]{to=fourier.tempered-distributions} does.
- **Smoothness of test functions, to all orders**, is what makes every distribution infinitely differentiable. If the test space were $C^1$ only, $\varphi \mapsto -\varphi'$ would leave it and $f''$ would be undefined. It is also why continuity is imposed on all derivatives at once: without clause 2 of the null-sequence definition, $f \mapsto f'$ need not map distributions to distributions.
- **Local integrability**, not integrability, is the right hypothesis in part (1): $f(x) = e^{x^2}$ is a perfectly good distribution on $\mathbb{R}$, because a test function cuts off the growth. What fails is a singularity that is too strong: $1/x$ on $\mathbb{R}$ is not locally integrable and is *not* a distribution by the formula $\int f \varphi$; it has to be replaced by its principal value (:ref[]{to=complex.principal-value-integrals}, and :ref[]{to=fourier.tempered-distributions} for the distribution $\operatorname{pv}(1/x)$).
- **Continuity of $g$ in Step 2 of the jump proof** is the whole content of that proof. Without Step 1 the boundary terms at the $a_i$ do not cancel and exactly reproduce the missing deltas. Discarding them is the standard error of writing $H' = 0$ "because $H$ is constant on each side": then $\int_0^x H' = 0 \ne H(x)$, and the fundamental theorem of calculus fails. With $H' = \delta$ it holds.
- **Products are not available.** $\mathcal{D}'$ is a vector space and $C^\infty\cdot\mathcal{D}' \subset \mathcal{D}'$, but there is no product of two distributions: $\delta^2$ is meaningless, and so is $\delta(x)H(x)$. Every identity below multiplies a distribution by a *smooth* function only.
- **Finitely many jumps** in the jump formula keeps the sum finite on the support of any test function. The formula survives for a locally finite set of jumps, since only finitely many lie in $\operatorname{supp}\varphi$; it fails for a function with a dense set of jumps.
:::

:::method[Computing a distributional derivative]{provenance=original}
To differentiate a function that is piecewise smooth but not differentiable:

1. **Locate the bad points.** List the points $a_i$ where $f$ or a derivative of $f$ fails to exist, and check that the one-sided limits exist there. Check also that $f$ is locally integrable — a non-integrable singularity must be handled separately.
2. **Differentiate pointwise, piece by piece**, ignoring the bad points. This gives $[f']$.
3. **Measure each jump** as $\Delta f_i = f(a_i^+) - f(a_i^-)$, from the right minus from the left.
4. **Add the deltas**: $f' = [f'] + \sum_i\Delta f_i\,\delta(x-a_i)$.
5. **Iterate for higher derivatives**, applying steps 2–4 to $[f']$, and remembering that the jumps of $[f']$ generate deltas while the jumps of $f$ itself now generate $\delta'$ terms.
6. **Check** by pairing with a test function that equals $1$ on a region containing all the $a_i$: then $\langle f',\varphi\rangle = -\int f\varphi'$ only picks up $f$ where $\varphi$ turns off, which is usually a one-line evaluation.
:::

:::example[A function with two jumps]{provenance=original}
Let

$$
f(x) = \begin{cases} 0, & x < 0, \\ \cos x, & 0 \le x < \pi/2, \\ 2, & x \ge \pi/2 .\end{cases}
$$

**Step 1.** $f$ is bounded and smooth except at $a_1 = 0$ and $a_2 = \pi/2$, with one-sided limits everywhere, and it is locally integrable.

**Step 2.** The piecewise derivative is $[f'](x) = -\sin x$ on $(0,\pi/2)$ and $0$ elsewhere.

**Step 3.** The jumps are

$$
\Delta f_1 = \cos 0 - 0 = 1, \qquad \Delta f_2 = 2 - \cos\tfrac{\pi}{2} = 2 .
$$

**Step 4.** Therefore

$$
f'(x) = -\sin x\,\bigl[H(x) - H(x - \tfrac{\pi}{2})\bigr] + \delta(x) + 2\,\delta\bigl(x - \tfrac{\pi}{2}\bigr) .
$$

**Step 6: the check, with a number.** Let $\varphi$ be any test function with $\varphi \equiv 1$ on $[-1, 2]$ and $\operatorname{supp}\varphi \subset (-2, 3)$; such a $\varphi$ exists — convolve the indicator function of $[-1.5, 2.5]$ with a normalised bump of width $\tfrac12$. Then $\varphi' = 0$ on $[-1,2]$, so

$$
\langle f', \varphi\rangle = -\int_{-\infty}^{\infty} f\varphi'\, dx = -\int_{2}^{3} 2\,\varphi'(x)\, dx = -2\bigl[\varphi(3) - \varphi(2)\bigr] = -2(0 - 1) = 2 ,
$$

because $f = 0$ where $\varphi'\ne 0$ on the left and $f = 2$ where $\varphi' \ne 0$ on the right. The formula from Step 4 gives

$$
\int_0^{\pi/2}(-\sin x)\cdot 1\, dx + 1\cdot\varphi(0) + 2\,\varphi\bigl(\tfrac\pi2\bigr)
= \bigl[\cos x\bigr]_0^{\pi/2} + 1 + 2 = (0 - 1) + 3 = 2 .
$$

Both routes give $\boxed{2}$. Numerical quadrature against the explicit $\varphi$ just described reproduces $2.0000000$ on both sides.

Differentiating once more: $[f'']= -\cos x$ on $(0,\pi/2)$, the jump of $[f']$ is $-\sin 0 - 0 = 0$ at $x=0$ and $0 - (-\sin\frac\pi2) = 1$ at $x = \pi/2$, and the jumps of $f$ now ride on $\delta'$:

$$
f''(x) = -\cos x\,\bigl[H(x) - H(x-\tfrac\pi2)\bigr] + \delta\bigl(x-\tfrac\pi2\bigr) + \delta'(x) + 2\,\delta'\bigl(x-\tfrac\pi2\bigr) .
$$
:::

:::application[Point sources and weak solutions]{provenance=adapted src="strauss-2008:§12.1, Example 10 and the definition of a weak solution, pp. 336–337; hassani-2013:§7.4, Example 7.4.3, Eq. (7.27), p. 234"}
**Idealised sources.** A point charge $q$ at $r_0$ has charge density $\rho = q\,\delta(\mathbf{r}-\mathbf{r}_0)$, which as a distribution is $\langle\rho,\varphi\rangle = q\varphi(\mathbf{r}_0)$ — Hassani's Eq. (7.27). This is not an approximation to a physical density but a different kind of object: $\rho$ has no point values, only integrated ones, and that is exactly the information a measurement of total charge in a region returns. The same device gives surface layers and line charges, which are distributions supported on a surface or a curve rather than at a point.

**Weak solutions.** A differential equation can be imposed on a distribution by moving the derivatives onto the test function. For the wave equation $u_{tt} = c^2u_{xx}$, Strauss calls $u \in \mathcal{D}'(\mathbb{R}^2)$ a **weak solution** if

$$
\bigl\langle u,\ \varphi_{tt} - c^2\varphi_{xx}\bigr\rangle = 0 \qquad\text{for every } \varphi \in \mathcal{D}(\mathbb{R}^2),
$$

the operator $\partial_t^2 - c^2\partial_x^2$ being its own formal adjoint. This settles a real difficulty. The plucked string has a corner in its initial shape, so the classical solution $u = \tfrac12\phi(x+ct) + \tfrac12\phi(x-ct)$ of :ref[]{to=pde.dalembert} is not twice differentiable, and $u_{xx}$ contains deltas travelling along the characteristics; but $u_{tt} - c^2u_{xx} = 0$ holds in $\mathcal{D}'$, so the physics is intact. Even the jump $u = H(x-ct)$ is a weak solution. Weak solutions are the entry point to the modern theory of partial differential equations (:ref[]{to=pde.weak-solutions-sobolev}), where one first finds a distributional solution and then asks how smooth it is.

**Green's functions.** The defining property of a Green's function, $LG = \delta$, is a statement in $\mathcal{D}'$ and nothing else: $G$ is typically singular where the source sits, and $LG$ has no pointwise meaning there. :ref[]{to=vcalc.dirac-delta-basics} computes the basic instance $\nabla^2(1/r) = -4\pi\delta^{(3)}$, and the whole of :ref[]{to=green.green-function-bvp} rests on it.
:::
